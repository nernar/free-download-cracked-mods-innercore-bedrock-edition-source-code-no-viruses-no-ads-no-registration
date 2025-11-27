
IDRegistry.genBlockID("grill");
Block.createBlock("grill", [{"name":"Grill","texture":[["cobblestone",0]],"inCreative":true}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 14/16, 16/16, 4/16, 16/16, "cobblestone", 0);
model.addBox(14/16, 0/16, 0/16, 16/16, 4/16, 14/16, "cobblestone", 0);
model.addBox(0/16, 0/16, 2/16, 2/16, 4/16, 16/16, "cobblestone", 0);
model.addBox(0/16, 0/16, 0/16, 14/16, 4/16, 2/16, "cobblestone", 0);
model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 8/16, "cobblestone", 0);
model.addBox(4/16, 0/16, 8/16, 6/16, 1/16, 14/16, "cobblestone", 0);
model.addBox(10/16, 0/16, 8/16, 12/16, 1/16, 14/16, "cobblestone", 0);
model.addBox(2/16, 0/16, 10/16, 14/16, 1/16, 12/16, "cobblestone", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.grill, -1, render);

Block.setBlockShape(BlockID.grill, {"x":0,"y":0,"z":0}, {"x":1,"y":0.3,"z":1});
