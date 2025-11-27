IDRegistry.genBlockID("golem_block");
Block.createBlock("golem_block", [
    {name: "Блок из кристаллов голема", texture: [["golem_block", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.golem_block, "stone", 2, true);
Block.setDestroyTime(BlockID.golem_block, 3);
Block.setDestroyLevel("golem_block", 3);
Recipes.addShaped({id: BlockID.golem_block, count: 1, data: 0}, 
["xbx","bxb","xbx"],
['x', 265, 0, 'b', ItemID.golem_crystal, 0]
);