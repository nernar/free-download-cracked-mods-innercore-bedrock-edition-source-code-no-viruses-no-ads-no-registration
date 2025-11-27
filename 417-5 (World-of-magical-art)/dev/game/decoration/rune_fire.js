IDRegistry.genBlockID("runeFire");
Block.createBlock("runeFire", [
    { name: "Fire Rune", texture: [["runestone_fire", 0]], inCreative: true }
]);
ToolAPI.registerBlockMaterial(BlockID.runeFire, "stone", 2);