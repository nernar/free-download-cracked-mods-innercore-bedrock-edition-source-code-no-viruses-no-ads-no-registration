IDRegistry.genBlockID("runeMana");
Block.createBlock("runeMana", [
    { name: "Mana Rune", texture: [["runestone_mana", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeMana, "stone", 2);