IDRegistry.genBlockID("forgeStone");
Block.createBlock("forgeStone", [{"name":"Forge stone","texture":[["stone",0]],"inCreative":true}]);

var forgeStone_render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 16/16, "stone", 0);
model.addBox(1/16, 2/16, 1/16, 15/16, 8/16, 15/16, "stone", 0);

forgeStone_render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.forgeStone, -1, forgeStone_render);

Block.setBlockShape(BlockID.forgeStone, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});

IDRegistry.genBlockID("unfiredKiln");
Block.createBlock("unfiredKiln", [{"name":"Unfired kiln","texture":[["clay",0]],"inCreative":true}]);

var unfiredkiln_render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 16/16, "clay", 0);
model.addBox(15/16, 2/16, 4/16, 16/16, 9/16, 6/16, "clay", 0);
model.addBox(15/16, 2/16, 10/16, 16/16, 9/16, 12/16, "clay", 0);
model.addBox(0/16, 0/16, 11/16, 15/16, 9/16, 12/16, "clay", 0);
model.addBox(0/16, 2/16, 4/16, 15/16, 9/16, 5/16, "clay", 0);
model.addBox(1/16, 9/16, 5/16, 0/16, 2/16, 11/16, "clay", 0);
model.addBox(0/16, 9/16, 4/16, 16/16, 11/16, 12/16, "clay", 0);
model.addBox(1/16, 2/16, 3/16, 15/16, 10/16, 4/16, "clay", 0);
model.addBox(1/16, 2/16, 2/16, 15/16, 9/16, 3/16, "clay", 0);
model.addBox(1/16, 2/16, 1/16, 15/16, 8/16, 2/16, "clay", 0);
model.addBox(1/16, 2/16, 0/16, 15/16, 3/16, 1/16, "clay", 0);
model.addBox(1/16, 2/16, 12/16, 15/16, 10/16, 13/16, "clay", 0);
model.addBox(1/16, 2/16, 13/16, 15/16, 9/16, 14/16, "clay", 0);
model.addBox(1/16, 2/16, 14/16, 15/16, 8/16, 15/16, "clay", 0);
model.addBox(1/16, 2/16, 15/16, 15/16, 3/16, 16/16, "clay", 0);

unfiredkiln_render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.unfiredKiln, -1, unfiredkiln_render);

Block.setBlockShape(BlockID.firedKiln, {"x":0,"y":0,"z":0}, {"x":1,"y":0.6875,"z":1});


IDRegistry.genBlockID("firedKiln");
Block.createBlock("firedKiln", [{"name":"Kiln","texture":[["hardened_clay",0]],"inCreative":true}]);

var kiln_render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 2/16, 16/16, "hardened_clay", 0);
model.addBox(15/16, 2/16, 4/16, 16/16, 9/16, 6/16, "hardened_clay", 0);
model.addBox(15/16, 2/16, 10/16, 16/16, 9/16, 12/16, "hardened_clay", 0);
model.addBox(0/16, 0/16, 11/16, 15/16, 9/16, 12/16, "hardened_clay", 0);
model.addBox(0/16, 2/16, 4/16, 15/16, 9/16, 5/16, "hardened_clay", 0);
model.addBox(1/16, 9/16, 5/16, 0/16, 2/16, 11/16, "hardened_clay", 0);
model.addBox(0/16, 9/16, 4/16, 16/16, 11/16, 12/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 3/16, 15/16, 10/16, 4/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 2/16, 15/16, 9/16, 3/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 1/16, 15/16, 8/16, 2/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 0/16, 15/16, 3/16, 1/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 12/16, 15/16, 10/16, 13/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 13/16, 15/16, 9/16, 14/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 14/16, 15/16, 8/16, 15/16, "hardened_clay", 0);
model.addBox(1/16, 2/16, 15/16, 15/16, 3/16, 16/16, "hardened_clay", 0);

kiln_render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.firedKiln, -1, kiln_render);

Block.setBlockShape(BlockID.firedKiln, {"x":0,"y":0,"z":0}, {"x":1,"y":0.6875,"z":1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: BlockID.unfiredKiln, count: 1, data: 0}, 
   ["fff", 
    "f f",
    "fbf"],
  ["f", 337, 0, "b", 44, 3
]);

Recipes.addShaped({id: BlockID.grill, count: 1, data: 0}, 
   ["bff", 
    "bff",
    "bff"],
  ["f", 44, 3, "b", 4, 0
]);

Recipes.removeFurnaceRecipe({id: 61, data: 0});
});