ItemRegistry.addToolMaterial("tofucraft_kinupickaxe", {
    damage: 1,
    durability: 2,
    efficiency: 1.5,
    enchantability: 16,
    level: 1
});
ItemRegistry.addToolMaterial("tofucraft_momenpickaxe", {
    damage: 2,
    durability: 6,
    efficiency: 1.5,
    enchantability: 16,
    level: 2
});
ItemRegistry.addToolMaterial("tofucraft_solidpickaxe", {
    damage: 3,
    durability: 184,
    efficiency: 1.5,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_metalpickaxe", {
    damage: 6,
    durability: 416,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_diamondpickaxe", {
    damage: 6,
    durability: 4627,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.createTool("tofucraft_pickaxekinu", {
    name: "toolkinupickaxe",
    icon: "toolkinupickaxe",
    material: "tofucraft_kinupickaxe"
}, ToolType.pickaxe);
ItemRegistry.createTool("tofucraft_momenpickaxe", {
    name: "toolmomenpickaxe",
    icon: "toolmomenpickaxe",
    material: "tofucraft_momenpickaxe"
}, ToolType.pickaxe);
ItemRegistry.createTool("tofucraft_solidpickaxe", {
    name: "toolsolidpickaxe",
    icon: "toolsolidpickaxe",
    material: "tofucraft_solidpickaxe"
}, ToolType.pickaxe);
ItemRegistry.createTool("tofucraft_metalpickaxe", {
    name: "toolmetalpickaxe",
    icon: "toolmetalpickaxe",
    material: "tofucraft_metalpickaxe"
}, ToolType.pickaxe);
ItemRegistry.createTool("tofucraft_diamondpickaxe", {
    name: "tooldiamondpickaxe",
    icon: "tooldiamondpickaxe",
    material: "tofucraft_diamondpickaxe"
}, ToolType.pickaxe);
Callback.addCallback("DestroyBlock",
function(coords, block, player) {
    if (Entity.getCarriedItem(player).id != ItemID.tofucraft_diamondpickaxe) return;
    var region = BlockSource.getDefaultForActor(player);
    var material = ToolAPI.getBlockMaterialName(block.id);
    var data = Entity.getCarriedItem(player).data;
    if (__config__.getBool("debug")) Game.message("§6" + "中心方块" + "@" + coords.x + ":" + coords.y + ":" + coords.z);
    var item = Entity.getCarriedItem(player);
    var Extra = item.extra;
    var Elevel = Extra && Extra.getEnchantLevel(tcToolAPI.EnchantTypes.batch.id) || 0;
    for (var x = coords.x - 1 - Elevel; x <= coords.x + 1 + Elevel; x++) {
        for (var y = coords.y - 1 - Elevel; y <= coords.y + 1 + Elevel; y++) {
            for (var z = coords.z - 1 - Elevel; z <= coords.z + 1 + Elevel; z++) {
                var sblock = region.getBlock(x, y, z);
                var vmaterial = ToolAPI.getBlockMaterialName(sblock.id);
                var level = ToolAPI.getBlockDestroyLevel(sblock.id);
                if ((vmaterial == material || sblock.id == block.id) && level <= 4) {
                    region.destroyBlock(x, y, z, true);
                    data += 1;
                    Entity.setCarriedItem(player, Entity.getCarriedItem(player).id, 1, data, Extra);
                    if (__config__.getBool("debug")) Game.message("§6" + "拓展方块" + "@" + x + ":" + y + ":" + z);
                };
            };
        };
    };
});