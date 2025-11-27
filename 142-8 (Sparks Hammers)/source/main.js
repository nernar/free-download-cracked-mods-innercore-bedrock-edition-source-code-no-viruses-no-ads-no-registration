
// included from: \header.js
IMPORT("RecipeTileEntityLib");
IMPORT("ToolLib");
IMPORT("ChargeItem");
IMPORT("EnhancedRecipes");
IMPORT("RegisterFunction");

const Color = android.graphics.Color;
const Bitmap = android.graphics.Bitmap;
const Canvas = android.graphics.Canvas;
const Paint = android.graphics.Paint;
const ColorFilter = android.graphics.PorterDuffColorFilter;
const PorterDuff = android.graphics.PorterDuff;
const Thread = java.lang.Thread;

let player = 0;
Callback.addCallback("LevelLoaded", function(){
    player = Player.get();
})


const SHammer = {

    bitmaps: {
        handle: FileTools.ReadImage(__dir__ + "texture-source/handle.png"),
        hammer: FileTools.ReadImage(__dir__ + "texture-source/hammer.png"),
        excavator: FileTools.ReadImage(__dir__ + "texture-source/excavator.png")
    },

    genTexture: function(key, color, type){
        const path = __dir__ + "resources/res/items-opaque/tools/s" + type + "_" + key + ".png";
        if(FileTools.isExists(path)){
            return;
        }
        const bitmap = this.bitmaps.handle.copy(Bitmap.Config.ARGB_8888, true);
        const canvas = new Canvas(bitmap);
        const paint = new Paint();
        paint.setColorFilter(new ColorFilter(Color.parseColor(color), PorterDuff.Mode.MULTIPLY));
        canvas.drawBitmap(this.bitmaps[type], 0, 0, paint);
        const file = new java.io.File(path);
        file.getParentFile().mkdirs();
        file.createNewFile();
        FileTools.WriteImage(path, bitmap);
        return {name: ("s" + type + "_" + key)};
    },

    convertToolMaterial: function(base, range){
        const material = ToolAPI.toolMaterials[base];
        return material ? {
            level: material.level,
            durability: material.durability * 6,
            efficiency: material.efficiency * 0.6 | 0,
            damage: material.damage + 3,
            range: range || 1
        } : null;
    },

    addRecipe: function(result, mask, source){
        mask.push("ssss_");
        source.s = VanillaItemID.stick;
        for(let key in source){
            source[key] = {id: source[key]};
        }
        RecipeTE.addShapeRecipe("shammer_table", result, mask.join(""), source);
    },

    addBasicTools: function(key, name, color, recipeItem, toolMaterial){
        const hammer = IDRegistry.genItemID("shammer_" + key);
        const excavator = IDRegistry.genItemID("sexcavator_" + key);
        if(typeof toolMaterial !== "object"){
            toolMaterial = this.convertToolMaterial(toolMaterial || key);
            if(!toolMaterial){
                return;
            }
        }
        this.genTexture(key, color, "hammer");
        this.genTexture(key, color, "excavator");
        Item.createItem("shammer_" + key, name + " Hammer", {name: "shammer_" + key}, {stack: 1});
        Item.createItem("sexcavator_" + key, name + " Excavator", {name: "sexcavator_" + key}, {stack: 1});
        Item.addCreativeGroup("sparks_hammer", "Hammers", [hammer]);
        Item.addCreativeGroup("sparks_excavator", "Excavators", [excavator]);
        ToolLib.setTool(hammer, toolMaterial, ToolType.sparks_hammer);
        ToolLib.setTool(excavator, toolMaterial, ToolType.sparks_excavator);
        this.addRecipe(hammer, ["aaaaa", "aaaaa"], {a: recipeItem});
        this.addRecipe(excavator, ["_aaa_", "aaaaa"], {a: recipeItem});
        Item.addRepairItemIds(hammer, [recipeItem.id || recipeItem]);
        Item.addRepairItemIds(excavator, [recipeItem.id || recipeItem]);
    }

};


// included from: \craft.js
IDRegistry.genBlockID("shammer_table");
Block.createBlock("shammer_table", [{name: "Hammer Crafting Table", texture: [["shammer_table", 0], ["shammer_table", 1], ["shammer_table", 2]], inCreative: true}]);

Callback.addCallback("PreLoaded", function(){
    Recipes2.addShaped(BlockID.shammer_table, "aba:bcb:aba", {a: {id: 1, data: 0}, b: 58, c: ItemID.shammer_wood});
});


const HammerGrid = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Hammer Crafting Table"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    drawing: [
        {type: "bitmap", x: 700, y: 180, bitmap: "_workbench_bar", scale: 0.8}
    ],
    elements: {
        inputSlot0: {type: "slot", x: 360, y: 30},
        inputSlot1: {type: "slot", x: 420, y: 30},
        inputSlot2: {type: "slot", x: 480, y: 30},
        inputSlot3: {type: "slot", x: 540, y: 30},
        inputSlot4: {type: "slot", x: 600, y: 30},
        inputSlot5: {type: "slot", x: 360, y: 90},
        inputSlot6: {type: "slot", x: 420, y: 90},
        inputSlot7: {type: "slot", x: 480, y: 90},
        inputSlot8: {type: "slot", x: 540, y: 90},
        inputSlot9: {type: "slot", x: 600, y: 90},
        inputSlot10: {type: "slot", x: 480, y: 150},
        inputSlot11: {type: "slot", x: 480, y: 210},
        inputSlot12: {type: "slot", x: 480, y: 270},
        inputSlot13: {type: "slot", x: 480, y: 330},
        inputSlot14: {type: "slot", x: 480, y: 1000},//hidden
        outputSlot: {type: "slot", x: 780, y: 165, size: 90}
    }
});


RecipeTE.registerWorkbench("shammer_table", {
    cols:5,
    rows:3,
    GuiScreen:HammerGrid
});


ModAPI.addAPICallback("RecipeViewer", function(api){
    api.Core.registerTEWorkbenchRecipeType("shammer_table", {
        drawing: [
            {type: "bitmap", x: 590, y: 230, bitmap: "_workbench_bar", scale: 1.6}
        ],
        elements: {
            input0: {type: "slot", x: 160, y: 40, size: 80},
			input1: {type: "slot", x: 240, y: 40, size: 80},
			input2: {type: "slot", x: 320, y: 40, size: 80},
			input3: {type: "slot", x: 400, y: 40, size: 80},
			input4: {type: "slot", x: 480, y: 40, size: 80},
			input5: {type: "slot", x: 160, y: 120, size: 80},
			input6: {type: "slot", x: 240, y: 120, size: 80},
			input7: {type: "slot", x: 320, y: 120, size: 80},
			input8: {type: "slot", x: 400, y: 120, size: 80},
			input9: {type: "slot", x: 480, y: 120, size: 80},
			input10: {type: "slot", x: 320, y: 200, size: 80},
			input11: {type: "slot", x: 320, y: 280, size: 80},
			input12: {type: "slot", x: 320, y: 360, size: 80},
			input13: {type: "slot", x: 320, y: 440, size: 80},
			input14: {type: "slot", x: 320, y: 1000, size: 80},//hidden
			output0: {type: "slot", x: 750, y: 200, size: 120}
        }
    }, RecipeTE.getRecipes("shammer_table"));
});


// included from: \tool\regular.js
ToolType.sparks_hammer = {
    blockTypes: ["stone"],
    onDestroy: function(item, coords, block){
        let rangeX = rangeY = rangeZ = this.toolMaterial.range;
        switch(coords.side & 6){
            case 0: rangeY = 0; break;
            case 2: rangeZ = 0; break;
            case 4: rangeX = 0; break;
        }
        let x = y = z = yy = damage = 0;
        for(x = coords.x - rangeX; x <= coords.x + rangeX; x++){
        for(y = coords.y - rangeY; y <= coords.y + rangeY; y++){
        for(z = coords.z - rangeZ; z <= coords.z + rangeZ; z++){
            yy = coords.side < 2 ? y : y + rangeY - 1;
            if((x !== coords.x || yy !== coords.y || z !== coords.z) && this.blockMaterials[ToolAPI.getBlockMaterialName(World.getBlockID(x, yy, z))]){
                World.destroyBlock(x, yy, z, true);
                damage++;
            }
        }
        }
        }
        if(this.toolMaterial.infrangible){
            return true;
        }
        Game.isItemSpendingAllowed() && ToolLib.breakCarriedTool(damage);
    }
};

ToolType.sparks_excavator = {
    blockTypes: ["dirt"],
    onDestroy: ToolType.sparks_hammer.onDestroy
};


SHammer.addBasicTools("wood", "Wood", "#866526", VanillaBlockID.planks);
SHammer.addBasicTools("stone", "Stone", "#9A9A9A", VanillaBlockID.cobblestone);
SHammer.addBasicTools("iron", "Iron", "#FFFFFF", VanillaItemID.iron_ingot);
SHammer.addBasicTools("golden", "Gold", "#EAEE57", VanillaItemID.gold_ingot);
SHammer.addBasicTools("diamond", "Diamond", "#33EBCB", VanillaItemID.diamond);

Callback.addCallback("PreLoaded", function(){
    "bronze" in ToolAPI.toolMaterials && SHammer.addBasicTools("bronze", "Bronze", "#EC9D4B", ItemID.ingotBronze);
});

IDRegistry.genItemID("shammer_giant");
SHammer.genTexture("giant", "#955CC4", "hammer");
Item.createItem("shammer_giant", "Giant Hammer", {name: "shammer_giant"}, {stack: 1});
ToolLib.setTool(ItemID.shammer_giant, {level: 2, durability: 9000, efficiency: 1.8, damage: 8, range: 3}, ToolType.sparks_hammer);
SHammer.addRecipe(ItemID.shammer_giant, ["aaaaa", "aabaa"], {a: VanillaBlockID.iron_block, b: VanillaItemID.dye});//data: 5


// included from: \tool\mini.js
ToolType.mini_hammer = {
    blockTypes: ["stone"],
    getAxis: function(side){
        const sneak = Entity.getSneaking(player);
        if(side < 2){
            let yaw = ((Entity.getLookAngle(player).yaw * 180 / Math.PI) - 45) / 90;
		    yaw < 0 && yaw--;
            yaw &= 1;
            let flag = !!yaw;
            if(sneak){
                flag = !flag;
            }
            return flag ? "z" : "x";
        }
        return sneak ? side >= 4 ? "z" : "x" : "y";
    },
    onDestroy: function(item, coords, block){
        const axis = this.getAxis(coords.side);
        const coords2 = {x: 0, y: 0, z: 0};
        let damage = 0;
        for(coords2[axis] = -1; coords2[axis] <= 1; coords2[axis]++){
            if(coords2[axis] !== 0 && this.blockMaterials[ToolAPI.getBlockMaterialName(World.getBlockID(coords.x + coords2.x, coords.y + coords2.y, coords.z + coords2.z))]){
                World.destroyBlock(coords.x + coords2.x, coords.y + coords2.y, coords.z + coords2.z, true);
                damage++;
            }
        }
        Game.isItemSpendingAllowed() && ToolLib.breakCarriedTool(damage);
    }
};


IDRegistry.genItemID("shammer_mini");
Item.createItem("shammer_mini", "Mini Hammer", {name: "shammer_mini"}, {stack: 1});
ToolLib.setTool(ItemID.shammer_mini, {level: 2, durability: 750, efficiency: 3.6, damage: 3.5}, ToolType.mini_hammer);
SHammer.addRecipe(ItemID.shammer_mini, ["_aaa_", "_aaa_"], {a: VanillaItemID.iron_ingot});


// included from: \tool\powered.js
/*
IDRegistry.genItemID("shammer_upg_base");
Item.createItem("shammer_upg_base", "Upgrade Base", {name: "shammer_upg_base"});
Recipes2.addShaped(ItemID.shammer_upg_base, "aba:bcb:aba", {a: VanillaItemID.iron_ingot, b: VanillaItemID.gold_ingot, c: VanillaItemID.diamond});

IDRegistry.genItemID("shammer_upg_size");
Item.createItem("shammer_upg_size", "Size Upgrade", {name: "shammer_upg_size"}, {stack: 2});
Recipes2.addShaped(ItemID.shammer_upg_size, "_a_:aba:_a_", {a: ItemID.shammer_stone, b: ItemID.shammer_upg_base});

IDRegistry.genItemID("shammer_upg_speed");
Item.createItem("shammer_upg_speed", "Spped Upgrade", {name: "shammer_upg_speed"}, {stack: 3});
Recipes2.addShaped(ItemID.shammer_upg_speed, "_a_:aba:_a_", {a: VanillaItemID.sugar, b: ItemID.shammer_upg_base});

IDRegistry.genItemID("shammer_upg_attack");
Item.createItem("shammer_upg_attack", "Attack Upgrade", {name: "shammer_upg_attack"}, {stack: 3});
Recipes2.addShaped(ItemID.shammer_upg_attack, "_a_:aba:_a_", {a: VanillaItemID.stone_sword, b: ItemID.shammer_upg_base});

IDRegistry.genItemID("shammer_upg_harvest");
Item.createItem("shammer_upg_harvest", "Harvest Upgrade", {name: "shammer_upg_harvest"}, {stack: 1});
Recipes2.addShaped(ItemID.shammer_upg_harvest, "_a_:aba:_a_", {a: VanillaItemID.diamond, b: ItemID.shammer_upg_base});

IDRegistry.genItemID("shammer_upg_capacity");
Item.createItem("shammer_upg_capacity", "Capacity Upgrade", {name: "shammer_upg_capacity"}, {stack: 4});
Recipes2.addShaped(ItemID.shammer_upg_capacity, "_a_:aba:_a_", {a: VanillaBlockID.redstone_block, b: ItemID.shammer_upg_base});

Item.addCreativeGroup("sparks_upgrade", "Powered Hammer Upgrades", [
    ItemID.shammer_upg_size,
    ItemID.shammer_upg_speed,
    ItemID.shammer_upg_attack,
    ItemID.shammer_upg_harvest,
    ItemID.shammer_upg_capacity,
]);

const getCodeFromUpgrade = function(upg){
    return upg.size << 12 | upg.speed << 9 | upg.attack << 6 | upg.harvest << 3 | upg.capacity << 0;
};

const getUpgradeFromCode = function(code){
    return {
        size: code >> 12,
        speed: (code & 4095) >> 9,
        attack: (code & 511) >> 6,
        harvest: (code & 63) >> 3,
        capacity: code & 7
    };
};

let windowUpgrade;

(function(){

    const elements = {
        close: {type: "closeButton", x: 928, y: 0, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 4},
        slot0: {type: "slot", x: 200, y: 110, size: 120, bitmap: "shammer.slot_size", isValid: function(id){return id === ItemID.shammer_upg_size}},
        slot1: {type: "slot", x: 320, y: 110, size: 120, bitmap: "shammer.slot_speed", isValid: function(id){return id === ItemID.shammer_upg_speed}},
        slot2: {type: "slot", x: 440, y: 110, size: 120, bitmap: "shammer.slot_attack", isValid: function(id){return id === ItemID.shammer_upg_attack}},
        slot3: {type: "slot", x: 560, y: 110, size: 120, bitmap: "shammer.slot_harvest", isValid: function(id){return id === ItemID.shammer_upg_harvest}},
        slot4: {type: "slot", x: 680, y: 110, size: 120, bitmap: "shammer.slot_capacity", isValid: function(id){return id === ItemID.shammer_upg_capacity}}
    };

    for(i = 9; i <= 44; i++){
		elements["invSlot" + i] = {
			type: "invSlot",
			x: 50 + (i % 9) * 100,
			y: 210 + (i / 9 | 0) * 100,
			size: 100,
			index: i
		};
    }
    
    const font = {color: Color.BLACK, size: 40};

    windowUpgrade = new UI.Window({
        location: {x: 200, y: 50, width: 600, height: 450},
        drawing: [
            {type: "background", color: Color.TRANSPARENT},
            {type: "frame", x: 0, y: 0, width: 1000, height: 750, bitmap: "default_frame_bg_light", scale: 6},
            {type: "text", x: 50, y: 60, text: "Upgrade", font: font},
			{type: "text", x: 50, y: 300, text: "Inventory", font: font},
        ],
        elements: elements
    });

})();

windowUpgrade.setBlockingBackground(true);

windowUpgrade.setEventListener({
    onOpen: function(window){
        const item = Player.getCarriedItem();
        const elements = window.getElements();
        const code = item.extra ? item.extra.getInt("upgrade") : 0;
        const upg = getUpgradeFromCode(code);
        elements.get("slot0").onBindingUpdated("source", upg.size ? {id: ItemID.shammer_upg_size, count: upg.size, data: 0} : {id: 0, count: 0, data: 0});
        elements.get("slot1").onBindingUpdated("source", upg.speed ? {id: ItemID.shammer_upg_speed, count: upg.speed, data: 0} : {id: 0, count: 0, data: 0});
        elements.get("slot2").onBindingUpdated("source", upg.attack ? {id: ItemID.shammer_upg_attack, count: upg.attack, data: 0} : {id: 0, count: 0, data: 0});
        elements.get("slot3").onBindingUpdated("source", upg.harvest ? {id: ItemID.shammer_upg_harvest, count: upg.harvest, data: 0} : {id: 0, count: 0, data: 0});
        elements.get("slot4").onBindingUpdated("source", upg.capacity ? {id: ItemID.shammer_upg_capacity, count: upg.capacity, data: 0} : {id: 0, count: 0, data: 0});
    },
    onClose: function(window){
        const item = Player.getCarriedItem();
        const elements = window.getElements();
        let code = 0;
        for(let i = 0; i < 5; i++){
            code |= elements.get("slot" + i).source.count << (12 - i * 3);
        }
        if(!item.extra){
            item.extra = new ItemExtraData();
        }
        item.extra.putInt("upgrade", code);
    }
});


ToolType.powered_hammer = {
    blockTypes: ["stone"],
    calcDestroyTime: function(item, coords, block, params, destroyTime){
        return ChargeItemRegistry.getEnergyStored(item) < this.toolMaterial.energyPerUse ? params.base : destroyTime;
    },
    onDestroy: function(item, coords, block){
        let rangeX = rangeY = rangeZ = this.toolMaterial.range;
        switch(coords.side & 6){
            case 0: rangeY = 0; break;
            case 2: rangeZ = 0; break;
            case 4: rangeX = 0; break;
        }
        let x = y = z = yy = damage = 0;
        for(x = coords.x - rangeX; x <= coords.x + rangeX; x++){
        for(y = coords.y - rangeY; y <= coords.y + rangeY; y++){
        for(z = coords.z - rangeZ; z <= coords.z + rangeZ; z++){
            yy = coords.side < 2 ? y : y + rangeY - 1;
            if((x !== coords.x || yy !== coords.y || z !== coords.z) && this.blockMaterials[ToolAPI.getBlockMaterialName(World.getBlockID(x, yy, z))]){
                World.destroyBlock(x, yy, z, true);
                damage++;
            }
        }
        }
        }
        Game.isItemSpendingAllowed() && ToolLib.breakCarriedTool(damage);
    },
    onBroke: function(){
        return true;
    },
    onAttack: function(){
        return true;
    }
}


IDRegistry.genItemID("shammer_powered");
Item.createItem("shammer_powered", "Powered Hammer", {name: "shammer_iron"}, {stack: 1});
Item.registerUseFunction("shammer_powered", function(){
    Entity.getSneaking(player) && windowUpgrade.open();
})
ChargeItemRegistry.registerExtraItem(ItemID.shammer_powered, "Eu", 100000, 100, 1, "tool", true, true);
ToolLib.setTool(ItemID.shammer_powered, {level: 2, efficiency: 3, damage: 3, range: 1, energyPerUse: 100}, ToolType.powered_hammer);
SHammer.addRecipe({id: ItemID.shammer_powered, data: 27}, ["abcba", "acdca"], {a: VanillaItemID.iron_ingot, b: VanillaBlockID.iron_block, c: VanillaItemID.gold_ingot, d: VanillaBlockID.redstone_block});
*/


// included from: \tool\netherstar.js
ToolType.netherstar_hammer = {
    blockTypes: ["stone"],
    onDestroy: function(item, coords, block){
        const direction = {x: 0, y: 0, z: 0};
        let rangeX = rangeY = rangeZ = 1;
        switch(coords.side & 6){
            case 0: rangeY = 0; direction.y = coords.side & 1 ? -1 : 1; break;
            case 2: rangeZ = 0; direction.z = coords.side & 1 ? -1 : 1; break;
            case 4: rangeX = 0; direction.x = coords.side & 1 ? -1 : 1; break;
        }
        Game.isItemSpendingAllowed() && ToolLib.breakCarriedTool();
        new Thread(function(){
            let x = y = z = xx = yy = zz = 0;
            for(let i = 0; i < 16; i++){
                for(x = coords.x - rangeX; x <= coords.x + rangeX; x++){
                for(y = coords.y - rangeY; y <= coords.y + rangeY; y++){
                for(z = coords.z - rangeZ; z <= coords.z + rangeZ; z++){
                    xx = x + direction.x * i;
                    yy = y + direction.y * i;
                    zz = z + direction.z * i;
                    (xx !== coords.x || yy !== coords.y || zz !== coords.z) && ToolAPI.getBlockMaterialName(World.getBlockID(xx, yy, zz)) === "stone" && World.destroyBlock(xx, yy, zz, true);
                }
                }
                }
                Thread.sleep(200);
            }
        }).start();
    }
};


IDRegistry.genItemID("shammer_netherstar");
Item.createItem("shammer_netherstar", "Netherstar Hammer", {name: "shammer_netherstar"}, {stack: 1});
Item.setGlint("shammer_netherstar", true);
ToolLib.setTool(ItemID.shammer_netherstar, {level: 3, durability: 10, efficiency: 5, damage: 40}, ToolType.netherstar_hammer);
SHammer.addRecipe(ItemID.shammer_netherstar, ["aabaa", "abcba"], {a: VanillaItemID.diamond, b: VanillaBlockID.gold_block, c: VanillaItemID.netherstar});


// included from: \tool\mjolnir.js
IDRegistry.genItemID("shammer_mjolnir");
Item.createItem("shammer_mjolnir", "Mjolnir", {name: "shammer_iron"}, {stack: 1});
Item.setGlint("shammer_mjolnir", true);
ToolLib.setTool(ItemID.shammer_mjolnir, {level: 10, durability: 1, efficiency: 10, damage: 10, range: 1, infrangible: true}, ToolType.sparks_hammer);


Item.registerNoTargetUseFunction("shammer_mjolnir", function(item){
    const pointed = Player.getPointed().pos;
    if(pointed.x === 0 && pointed.y === 0 && pointed.z === 0){
        const pos = Entity.getPosition(player);
        const vec = Entity.getLookVector(player);
        const entity = Entity.getAll();
        const coords = {x: 0, y: 0, z: 0};
        let i = 0;
        attack:
        for(let t = 0; t < 256; t++){
            coords.x = pos.x + vec.x * t;
            coords.y = pos.y + vec.y * t;
            coords.z = pos.z + vec.z * t;
            for(i = 0; i < entity.length; i++){
                if(Entity.getType(entity[i]) !== 1 && Entity.getDistanceToCoords(entity[i], coords) < 4){
                    Entity.setHealth(entity[i], Entity.getHealth(entity[i]) - 10);
                    Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.LIGHTNING_BOLT);
                    World.playSound(coords.x, coords.y, coords.z, "ambient.weather.lightning.impact", 100);
                    break attack;
                }
            }
            if(World.getBlockID(coords.x, coords.y, coords.z) !== 0){
                Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.LIGHTNING_BOLT);
                World.playSound(coords.x, coords.y, coords.z, "ambient.weather.lightning.impact", 100);
                break attack;
            }
        }
    }
});


// included from: \shrine.js
IDRegistry.genBlockID("block_mjolnir");
Block.createBlock("block_mjolnir", [{name: "Mjolnir", texture: [["iron_block", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.block_mjolnir, "stone");
Block.setDestroyTime(BlockID.block_mjolnir, -1);

(function(){
    const render = new ICRender.Model();
    const model = BlockRenderer.createModel();
    model.addBox(01/16, 01/16, 05/16, 15/16, 07/16, 11/16, "iron_block", 0);
    model.addBox(01/16, 00/16, 07/16, 15/16, 01/16, 09/16, "iron_block", 0);
    model.addBox(01/16, 07/16, 07/16, 15/16, 08/16, 09/16, "iron_block", 0);
    model.addBox(01/16, 03/16, 04/16, 15/16, 05/16, 05/16, "iron_block", 0);
    model.addBox(01/16, 03/16, 11/16, 15/16, 05/16, 12/16, "iron_block", 0);
    model.addBox(07/16, 08/16, 07/16, 09/16, 15/16, 09/16, VanillaBlockID.log, 0);
    model.addBox(06/16, 15/16, 06/16, 10/16, 16/16, 10/16, "anvil_base", 0);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.block_mjolnir, -1, render);
})();

Block.registerClickFunction("block_mjolnir", function(coords){
    const helmet = Player.getArmorSlot(0);
	if(helmet.id === 397 && helmet.data === 5){
        World.setBlock(coords.x, coords.y, coords.z, 0);
        World.drop(coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, ItemID.shammer_mjolnir, 1, 0);
    }
    else{
        Entity.addEffect(player, Native.PotionEffect.weakness, 1, 200);
        Game.message("You need to equip a Dragon Head");
    }
});


const shrineChance = __config__.getNumber("gen_shrine_chance") || 0.005;

const shrineArray = [
	[4, 0, 0, {id: 156, data: 2}],
	[5, 0, 0, {id: 156, data: 2}],
	[6, 0, 0, {id: 156, data: 2}],
	[2, 0, 1, {id: 156, data: 0}],
	[3, 0, 1, {id: 156, data: 2}],
	[4, 0, 1, {id: 156, data: 0}],
	[5, 0, 1, {id: 155, data: 10}],
	[6, 0, 1, {id: 156, data: 1}],
	[7, 0, 1, {id: 156, data: 2}],
	[8, 0, 1, {id: 156, data: 1}],
	[1, 0, 2, {id: 156, data: 2}],
	[2, 0, 2, {id: 156, data: 0}],
	[3, 0, 2, {id: 155, data: 0}],
	[4, 0, 2, {id: 155, data: 0}],
	[5, 0, 2, {id: 155, data: 10}],
	[6, 0, 2, {id: 155, data: 0}],
	[7, 0, 2, {id: 155, data: 0}],
	[8, 0, 2, {id: 156, data: 1}],
	[9, 0, 2, {id: 156, data: 2}],
	[1, 0, 3, {id: 156, data: 0}],
	[2, 0, 3, {id: 155, data: 0}],
	[3, 0, 3, {id: 155, data: 0}],
	[4, 0, 3, {id: 155, data: 0}],
	[5, 0, 3, {id: 155, data: 10}],
	[6, 0, 3, {id: 155, data: 0}],
	[7, 0, 3, {id: 155, data: 0}],
	[8, 0, 3, {id: 155, data: 0}],
	[9, 0, 3, {id: 156, data: 1}],
	[0, 0, 4, {id: 156, data: 2}],
	[1, 0, 4, {id: 156, data: 0}],
	[2, 0, 4, {id: 155, data: 0}],
	[3, 0, 4, {id: 155, data: 0}],
	[4, 0, 4, {id: 155, data: 0}],
	[5, 0, 4, {id: 89, data: 0}],
	[6, 0, 4, {id: 155, data: 0}],
	[7, 0, 4, {id: 155, data: 0}],
	[8, 0, 4, {id: 155, data: 0}],
	[9, 0, 4, {id: 156, data: 1}],
	[10, 0, 4, {id: 156, data: 2}],
	[0, 0, 5, {id: 156, data: 0}],
	[1, 0, 5, {id: 155, data: 6}],
	[2, 0, 5, {id: 155, data: 6}],
	[3, 0, 5, {id: 155, data: 6}],
	[4, 0, 5, {id: 89, data: 0}],
	[5, 0, 5, {id: 155, data: 0}],
	[6, 0, 5, {id: 89, data: 0}],
	[7, 0, 5, {id: 155, data: 6}],
	[8, 0, 5, {id: 155, data: 6}],
	[9, 0, 5, {id: 155, data: 6}],
	[10, 0, 5, {id: 156, data: 1}],
	[0, 0, 6, {id: 156, data: 3}],
	[1, 0, 6, {id: 156, data: 0}],
	[2, 0, 6, {id: 155, data: 0}],
	[3, 0, 6, {id: 155, data: 0}],
	[4, 0, 6, {id: 155, data: 0}],
	[5, 0, 6, {id: 89, data: 0}],
	[6, 0, 6, {id: 155, data: 0}],
	[7, 0, 6, {id: 155, data: 0}],
	[8, 0, 6, {id: 155, data: 0}],
	[9, 0, 6, {id: 156, data: 1}],
	[10, 0, 6, {id: 156, data: 3}],
	[1, 0, 7, {id: 156, data: 0}],
	[2, 0, 7, {id: 155, data: 0}],
	[3, 0, 7, {id: 155, data: 0}],
	[4, 0, 7, {id: 155, data: 0}],
	[5, 0, 7, {id: 155, data: 10}],
	[6, 0, 7, {id: 155, data: 0}],
	[7, 0, 7, {id: 155, data: 0}],
	[8, 0, 7, {id: 155, data: 0}],
	[9, 0, 7, {id: 156, data: 1}],
	[1, 0, 8, {id: 156, data: 3}],
	[2, 0, 8, {id: 156, data: 0}],
	[3, 0, 8, {id: 155, data: 0}],
	[4, 0, 8, {id: 155, data: 0}],
	[5, 0, 8, {id: 155, data: 10}],
	[6, 0, 8, {id: 155, data: 0}],
	[7, 0, 8, {id: 155, data: 0}],
	[8, 0, 8, {id: 156, data: 1}],
	[9, 0, 8, {id: 156, data: 3}],
	[2, 0, 9, {id: 156, data: 0}],
	[3, 0, 9, {id: 156, data: 3}],
	[4, 0, 9, {id: 155, data: 0}],
	[5, 0, 9, {id: 155, data: 10}],
	[6, 0, 9, {id: 155, data: 0}],
	[7, 0, 9, {id: 156, data: 3}],
	[8, 0, 9, {id: 156, data: 1}],
	[4, 0, 10, {id: 156, data: 3}],
	[5, 0, 10, {id: 156, data: 3}],
	[6, 0, 10, {id: 156, data: 3}],
	[3, 1, 3, {id: 155, data: 2}],
	[4, 1, 3, {id: 160, data: 0}],
	[5, 1, 3, {id: 160, data: 4}],
	[6, 1, 3, {id: 160, data: 0}],
	[7, 1, 3, {id: 155, data: 2}],
	[3, 1, 4, {id: 160, data: 0}],
	[4, 1, 4, {id: 171, data: 4}],
	[5, 1, 4, {id: 171, data: 4}],
	[6, 1, 4, {id: 171, data: 4}],
	[7, 1, 4, {id: 160, data: 0}],
	[3, 1, 5, {id: 160, data: 4}],
	[4, 1, 5, {id: 171, data: 4}],
	[5, 1, 5, {id: 155, data: 1}],
	[6, 1, 5, {id: 171, data: 4}],
	[7, 1, 5, {id: 160, data: 4}],
	[3, 1, 6, {id: 160, data: 0}],
	[4, 1, 6, {id: 171, data: 4}],
	[5, 1, 6, {id: 171, data: 4}],
	[6, 1, 6, {id: 171, data: 4}],
	[7, 1, 6, {id: 160, data: 0}],
	[3, 1, 7, {id: 155, data: 2}],
	[4, 1, 7, {id: 160, data: 0}],
	[5, 1, 7, {id: 160, data: 4}],
	[6, 1, 7, {id: 160, data: 0}],
	[7, 1, 7, {id: 155, data: 2}],
	[3, 2, 3, {id: 155, data: 2}],
	[4, 2, 3, {id: 160, data: 0}],
	[5, 2, 3, {id: 160, data: 4}],
	[6, 2, 3, {id: 160, data: 0}],
	[7, 2, 3, {id: 155, data: 2}],
	[3, 2, 4, {id: 160, data: 0}],
	[7, 2, 4, {id: 160, data: 0}],
	[3, 2, 5, {id: 160, data: 4}],
	[5, 2, 5, {id: BlockID.block_mjolnir, data: 0}],
	[7, 2, 5, {id: 160, data: 4}],
	[3, 2, 6, {id: 160, data: 0}],
	[7, 2, 6, {id: 160, data: 0}],
	[3, 2, 7, {id: 155, data: 2}],
	[4, 2, 7, {id: 160, data: 0}],
	[5, 2, 7, {id: 160, data: 4}],
	[6, 2, 7, {id: 160, data: 0}],
	[7, 2, 7, {id: 155, data: 2}],
	[3, 3, 3, {id: 155, data: 2}],
	[4, 3, 3, {id: 160, data: 0}],
	[5, 3, 3, {id: 160, data: 4}],
	[6, 3, 3, {id: 160, data: 0}],
	[7, 3, 3, {id: 155, data: 2}],
	[3, 3, 4, {id: 160, data: 0}],
	[7, 3, 4, {id: 160, data: 0}],
	[3, 3, 5, {id: 160, data: 4}],
	[7, 3, 5, {id: 160, data: 4}],
	[3, 3, 6, {id: 160, data: 0}],
	[7, 3, 6, {id: 160, data: 0}],
	[3, 3, 7, {id: 155, data: 2}],
	[4, 3, 7, {id: 160, data: 0}],
	[5, 3, 7, {id: 160, data: 4}],
	[6, 3, 7, {id: 160, data: 0}],
	[7, 3, 7, {id: 155, data: 2}],
	[3, 4, 2, {id: 156, data: 6}],
	[7, 4, 2, {id: 156, data: 6}],
	[2, 4, 3, {id: 156, data: 4}],
	[3, 4, 3, {id: 87, data: 0}],
	[4, 4, 3, {id: 155, data: 6}],
	[5, 4, 3, {id: 155, data: 6}],
	[6, 4, 3, {id: 155, data: 6}],
	[7, 4, 3, {id: 87, data: 0}],
	[8, 4, 3, {id: 156, data: 5}],
	[3, 4, 4, {id: 155, data: 10}],
	[4, 4, 4, {id: 44, data: 14}],
	[5, 4, 4, {id: 156, data: 6}],
	[6, 4, 4, {id: 44, data: 14}],
	[7, 4, 4, {id: 155, data: 10}],
	[3, 4, 5, {id: 155, data: 10}],
	[4, 4, 5, {id: 156, data: 4}],
	[6, 4, 5, {id: 156, data: 5}],
	[7, 4, 5, {id: 155, data: 10}],
	[3, 4, 6, {id: 155, data: 10}],
	[4, 4, 6, {id: 44, data: 14}],
	[5, 4, 6, {id: 156, data: 7}],
	[6, 4, 6, {id: 44, data: 14}],
	[7, 4, 6, {id: 155, data: 10}],
	[2, 4, 7, {id: 156, data: 4}],
	[3, 4, 7, {id: 87, data: 0}],
	[4, 4, 7, {id: 155, data: 6}],
	[5, 4, 7, {id: 155, data: 6}],
	[6, 4, 7, {id: 155, data: 6}],
	[7, 4, 7, {id: 87, data: 0}],
	[8, 4, 7, {id: 156, data: 5}],
	[3, 4, 8, {id: 156, data: 7}],
	[7, 4, 8, {id: 156, data: 7}],
	[3, 5, 3, {id: 51, data: 0}],
	[4, 5, 3, {id: 156, data: 0}],
	[5, 5, 3, {id: 41, data: 0}],
	[6, 5, 3, {id: 156, data: 1}],
	[7, 5, 3, {id: 51, data: 0}],
	[3, 5, 4, {id: 156, data: 2}],
	[4, 5, 4, {id: 156, data: 2}],
	[5, 5, 4, {id: 155, data: 0}],
	[6, 5, 4, {id: 156, data: 2}],
	[7, 5, 4, {id: 156, data: 2}],
	[3, 5, 5, {id: 41, data: 0}],
	[4, 5, 5, {id: 155, data: 0}],
	[5, 5, 5, {id: 155, data: 1}],
	[6, 5, 5, {id: 155, data: 0}],
	[7, 5, 5, {id: 41, data: 0}],
	[3, 5, 6, {id: 156, data: 3}],
	[4, 5, 6, {id: 156, data: 3}],
	[5, 5, 6, {id: 155, data: 0}],
	[6, 5, 6, {id: 156, data: 3}],
	[7, 5, 6, {id: 156, data: 3}],
	[3, 5, 7, {id: 51, data: 0}],
	[4, 5, 7, {id: 156, data: 0}],
	[5, 5, 7, {id: 41, data: 0}],
	[6, 5, 7, {id: 156, data: 1}],
	[7, 5, 7, {id: 51, data: 0}],
	[5, 6, 3, {id: 44, data: 6}],
	[5, 6, 4, {id: 44, data: 6}],
	[3, 6, 5, {id: 44, data: 6}],
	[4, 6, 5, {id: 44, data: 6}],
	[5, 6, 5, {id: 44, data: 6}],
	[6, 6, 5, {id: 44, data: 6}],
	[7, 6, 5, {id: 44, data: 6}],
	[5, 6, 6, {id: 44, data: 6}],
	[5, 6, 7, {id: 44, data: 6}]
];

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    if(Math.random() < shrineChance){
        const x = chunkX * 16 + 8;
        const z = chunkZ * 16 + 8;
        const y = GenerationUtils.findHighSurface(x, z).y;
        for(let i = 0; i < shrineArray.length; i++){
			World.setFullBlock(x + shrineArray[i][0] - 5, y + shrineArray[i][1], z + shrineArray[i][2] - 5, shrineArray[i][3]);
		}
    }
});

