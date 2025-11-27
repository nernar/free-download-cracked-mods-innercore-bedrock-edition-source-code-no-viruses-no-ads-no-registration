IDRegistry.genBlockID("runeBlood");
Block.createBlock("runeBlood", [
    { name: "Blood Rune", texture: [["runestone_blood", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeBlood, "stone", 2);