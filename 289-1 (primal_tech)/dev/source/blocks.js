IDRegistry.genBlockID("flint_block");
Block.createBlock("flint_block", [
    {name: "Flint block", texture: [["flint_block", 0], ["flint_block", 0], ["flint_block", 0], ["flint_block", 0], ["flint_block", 0], ["flint_block", 0]], inCreative: true}
], "opaque");

Recipes.addFurnace(13, BlockID.flint_block, 0);
Recipes.addShapeless({id: 318, count: 1, data: 0}, [{id: BlockID.flint_block, data: 0}]);
