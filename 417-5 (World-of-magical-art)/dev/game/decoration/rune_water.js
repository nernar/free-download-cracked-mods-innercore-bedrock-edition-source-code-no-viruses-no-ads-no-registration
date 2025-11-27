IDRegistry.genBlockID("runeWater");
Block.createBlock("runeWater", [
    { name: "Water Rune", texture: [["runestone_water", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeWater, "stone", 2);