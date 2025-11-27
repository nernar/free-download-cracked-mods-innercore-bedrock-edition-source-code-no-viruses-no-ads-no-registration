IDRegistry.genBlockID("dis_oxygenGenerator");
Block.createBlock("dis_oxygenGenerator", [{name: "Oxygen generator", texture: [["oxygen_top", 0], ["oxygen_top", 0], ["oxygen_compressor", 0], ["oxygen_compressor", 0], ["oxygen_compressor", 0], ["oxygen_compressor", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dis_oxygenGenerator, "stone", 2);
Block.setDestroyTime(BlockID.dis_oxygenGenerator, 2);
Block.setDestroyLevel("dis_oxygenGenerator", 2);
IDRegistry.genBlockID("oxygenGenerator");
Block.createBlock("oxygenGenerator", [{name: "Oxygen generator", texture: [["oxygen_top", 0], ["oxygen_top", 0], ["oxygen_compressor", 1], ["oxygen_compressor", 1], ["oxygen_compressor", 1], ["oxygen_compressor", 1]], inCreative: false}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oxygenGenerator, "stone", 2);
Block.setDestroyTime(BlockID.oxygenGenerator, 2);
Block.setDestroyLevel("oxygenGenerator", 2);
Item.registerNameOverrideFunction(BlockID.dis_oxygenGenerator, oxygen_overname);
Item.registerNameOverrideFunction(BlockID.oxygenGenerator, oxygen_overname);
Block.registerDropFunctionForID(BlockID.oxygenGenerator, function (coords, blockID, blockData, level, enchant) {
    return [[BlockID.dis_oxygenGenerator, 1, 0]];
});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id != ItemID.ox_analyzer) {
        if (block.id == BlockID.dis_oxygenGenerator) {
            Game.message("\xa7a" + "Status: ENABLED");
            World.setBlock(coords.x, coords.y, coords.z, BlockID.oxygenGenerator, 0);
        } else {
            if (block.id == BlockID.oxygenGenerator) {
                Game.message("\xa7c" + "Status: DISABLED");
                World.setBlock(coords.x, coords.y, coords.z, BlockID.dis_oxygenGenerator, 0);
            }
        }
    }
});

