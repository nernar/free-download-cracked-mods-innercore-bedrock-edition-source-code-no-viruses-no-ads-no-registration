IDRegistry.genBlockID("runeAir");
Block.createBlock("runeAir", [
    { name: "Air Rune", texture: [["runestone_air", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeAir, "stone", 2);