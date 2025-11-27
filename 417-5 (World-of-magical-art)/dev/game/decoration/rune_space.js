IDRegistry.genBlockID("runeSpace");
Block.createBlock("runeSpace", [
    { name: "Space Rune", texture: [["runestone_space", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeSpace, "stone", 2);