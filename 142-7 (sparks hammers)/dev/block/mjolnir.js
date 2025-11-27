IDRegistry.genBlockID("mjolnir");
Block.createBlock("mjolnir", [{name: "Mjolnir", texture: [["iron_block", 0]]}]);
ToolAPI.registerBlockMaterial(BlockID.mjolnir, "stone");
Block.setDestroyTime(BlockID.mjolnir, -1);
const render = new ICRender.Model();
const model = BlockRenderer.createModel();
model.addBox(01/16, 01/16, 05/16, 15/16, 07/16, 11/16, "iron_block", 0);
model.addBox(01/16, 00/16, 07/16, 15/16, 01/16, 09/16, "iron_block", 0);
model.addBox(01/16, 07/16, 07/16, 15/16, 08/16, 09/16, "iron_block", 0);
model.addBox(01/16, 03/16, 04/16, 15/16, 05/16, 05/16, "iron_block", 0);
model.addBox(01/16, 03/16, 11/16, 15/16, 05/16, 12/16, "iron_block", 0);
model.addBox(07/16, 08/16, 07/16, 09/16, 15/16, 09/16, 17, 0);
model.addBox(06/16, 15/16, 06/16, 10/16, 16/16, 10/16, "anvil_base", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mjolnir, 0, render);


Block.registerClickFunction("mjolnir", function(c, item, block){
	Game.prevent();
	World.setBlock(c.x, c.y, c.z, 0);
	World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.hamMjolnir, 1);
});