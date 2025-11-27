IMPORT("ToolLib");
let Random = {Float: function (min, max) {
    let result = ((Math.random() * max) + min);
    return result;
}, Int: function (min, max) {
    let result = Math.round((Math.random() * max) + min);
    return result;
}};
let DropforTool = function (tool, blockId, dropId, dropCount, dropData) {
    Block.registerDropFunctionForID(blockId, function (coords, id, data, level, enchant, item) {
        if (item.id == tool) {
            return [[dropId, dropCount, dropData]];
        }
    });
};
Callback.addCallback("DestroyBlockStart", function (coords, block, player) {
    if (Player.getCarriedItem().id == 0 && block.id == 1) {
        Block.setDestroyTime(block.id, 1);
    } else {
        if (block.id == 1) {
            Block.setDestroyTime(block.id, 5);
        }
    }
});
IDRegistry.genItemID("stonePebble");
Item.createItem("stonePebble", "Stone Pebble", {name: "stonePebble", meta: 0}, {stack: 64});
IDRegistry.genItemID("stoneStick");
Item.createItem("stoneStick", "Stone Stick", {name: "stoneStick", meta: 0}, {stack: 64});
IDRegistry.genItemID("stoneHook");
Item.createItem("stoneHook", "Stone Crook", {name: "stoneHook", meta: 0}, {stack: 1});
IDRegistry.genItemID("stoneHammer");
Item.createItem("stoneHammer", "Stone Hammer", {name: "stoneHammer", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("stone", {durability: 150, level: 1, efficiency: 1, damage: 2, enchantability: 4});
Item.setMaxDamage(ItemID.stoneHook, 100);
ToolLib.setTool(ItemID.stoneHook, "stone", ToolType.shovel);
Item.setMaxDamage(ItemID.stoneHammer, 150);
ToolLib.setTool(ItemID.stoneHammer, "stone", ToolType.pickaxe);
Block.registerDropFunction(1, function (coords, id, data, level, en, item) {
    if (level == 0) {
        return [[ItemID.stonePebble, Random.Int(1, 3), 0]];
    } else {
        if (item.id == ItemID.stoneHammer) {
            return [[4, 1, 0]];
        }
    }
});
Block.registerDropFunction(3, function (coords, id, data, level, enchant, item) {
    if (item.id == ItemID.stoneHook) {
        return [[6, Random.Int(0, 1), Random.Int(0, 5)]];
    } else {
        if (item.id == ItemID.stoneHammer) {
            return [[12, 1, 0]];
        } else {
            return [[id, 1, data]];
        }
    }
});
DropforTool(ItemID.stoneHammer, 4, 13, 1, 0);
DropforTool(ItemID.stoneHammer, 13, 3, 1, 0);
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (Player.getCarriedItem().id == ItemID.stoneHook && block.id == 18) {
        if (Math.random() * 100 < 10) {
            World.drop(coords.x, coords.y, coords.z, 6, 1);
        } else {
            if (Math.random() * 100 < 6) {
                World.drop(coords.x, coords.y, coords.z, 280, 1);
            } else {
                if (Math.random() * 100 < 5) {
                    World.drop(coords.x, coords.y, coords.z, 260, 1);
                }
            }
        }
    }
});

