var BLOCK_TYPE_HEART= Block.createSpecialType({
	destroytime: 0,
	explosionres: 19000000000000000000000000000000000.0,
	base: 1
});

IDRegistry.genBlockID("Heart");
Block.createBlock("Heart", [{name: "Кристальное сердце", texture: [["heart", 0]], inCreative: true}], BLOCK_TYPE_HEART);
var render = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.Heart, 0, render);

var model = BlockRenderer.createModel();

model.addBox(8/16, 3/16, 7/16, 9/16, 4/16, 9/16, BlockID.Heart, 0);
model.addBox(8/16, 4/16, 6/16, 9/16, 5/16, 10/16, BlockID.Heart, 0);
model.addBox(7/16, 4/16, 7/16, 10/16, 5/16, 9/16, BlockID.Heart, 0);
model.addBox(8/16, 5/16, 5/16, 9/16, 6/16, 11/16, BlockID.Heart, 0);
model.addBox(7/16, 5/16, 6/16, 10/16, 6/16, 10/16, BlockID.Heart, 0);
model.addBox(8/16, 6/16, 4/16, 9/16, 7/16, 12/16, BlockID.Heart, 0);
model.addBox(7/16, 6/16, 5/16, 10/16, 7/16, 11/16, BlockID.Heart, 0);
model.addBox(8/16, 7/16, 3/16, 9/16, 11/16, 13/16, BlockID.Heart, 0);
model.addBox(7/16, 7/16, 4/16, 10/16, 11/16, 12/16, BlockID.Heart, 0);
model.addBox(8/16, 11/16, 4/16, 9/16, 12/16, 12/16, BlockID.Heart, 0);
model.addBox(7/16, 11/16, 5/16, 10/16, 12/16, 7/16, BlockID.Heart, 0);
model.addBox(7/16, 11/16, 9/16, 10/16, 12/16, 11/16, BlockID.Heart, 0);
model.addBox(8/16, 12/16, 5/16, 9/16, 13/16, 7/16, BlockID.Heart, 0);
model.addBox(8/16, 12/16, 9/16, 9/16, 13/16, 11/16, BlockID.Heart, 0);
render.addEntry(model); 

Recipes.addShaped({id: BlockID.Heart, count: 1, data: 0}, [
 "ddd",
 "oco",
 "ddd"
 ], ["c", 122, 0, "d", 399, 0]);