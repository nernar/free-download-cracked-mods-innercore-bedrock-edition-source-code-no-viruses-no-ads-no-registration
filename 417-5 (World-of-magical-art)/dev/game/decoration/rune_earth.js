IDRegistry.genBlockID("runeEarth");
Block.createBlock("runeEarth", [
    { name: "Earth Rune", texture: [["runestone_earth", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeEarth, "stone", 2);