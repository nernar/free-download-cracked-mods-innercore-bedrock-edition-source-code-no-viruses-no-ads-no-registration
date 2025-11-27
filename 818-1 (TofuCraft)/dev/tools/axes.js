ItemRegistry.addToolMaterial("tofucraft_kinuaxe", {
    damage: 1,
    durability: 2,
    efficiency: 1.5,
    enchantability: 16,
    level: 1
});
ItemRegistry.addToolMaterial("tofucraft_momenaxe", {
    damage: 2,
    durability: 6,
    efficiency: 1.5,
    enchantability: 16,
    level: 2
});
ItemRegistry.addToolMaterial("tofucraft_solidaxe", {
    damage: 3,
    durability: 184,
    efficiency: 1.5,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_metalaxe", {
    damage: 6,
    durability: 416,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.addToolMaterial("tofucraft_diamondaxe", {
    damage: 6,
    durability: 4627,
    efficiency: 3,
    enchantability: 16,
    level: 3
});
ItemRegistry.createTool("tofucraft_axekinu", {
    name: "toolkinuaxe",
    icon: "toolkinuaxe",
    material: "tofucraft_kinuaxe"
}, ToolType.axe);
ItemRegistry.createTool("tofucraft_momenaxe", {
    name: "toolmomenaxe",
    icon: "toolmomenaxe",
    material: "tofucraft_momenaxe"
}, ToolType.axe);
ItemRegistry.createTool("tofucraft_solidaxe", {
    name: "toolsolidaxe",
    icon: "toolsolidaxe",
    material: "tofucraft_solidaxe"
}, ToolType.axe);
ItemRegistry.createTool("tofucraft_metalaxe", {
    name: "toolmetalaxe",
    icon: "toolmetalaxe",
    material: "tofucraft_metalaxe"
}, ToolType.axe);
ItemRegistry.createTool("tofucraft_diamondaxe", {
    name: "tooldiamondaxe",
    icon: "tooldiamondaxe",
    material: "tofucraft_diamondaxe"
}, ToolType.axe);
Callback.addCallback("DestroyBlock",
function(coords, block, player) {
    if (Entity.getCarriedItem(player).id != ItemID.tofucraft_diamondaxe) return;
    var region = BlockSource.getDefaultForActor(player);
    var material = ToolAPI.getBlockMaterialName(block.id);
    var data = Entity.getCarriedItem(player).data;
    if (__config__.getBool("debug")) Game.message("§6" + "中心方块" + "@" + coords.x + ":" + coords.y + ":" + coords.z);
//    if (!ToolType.TofuCraft_Axe_Diamond[material] && block.id != VanillaBlockID.log && block.id != VanillaBlockID.log2) return;
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