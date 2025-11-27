IDRegistry.genBlockID("runeEssence");
Block.createBlock("runeEssence", [
    { name: "Essence Rune", texture: [["runestone_essence", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeEssence, "stone", 2);