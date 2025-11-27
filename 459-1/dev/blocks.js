IDRegistry.genBlockID("mining_chute");
Block.createBlockWithRotation("mining_chute", [{"name":"Mining Chute","texture":[["planks",0]],"inCreative":true}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(0/16, 0/16, 0/16, 16/16, 1/16, 16/16, "planks", 0);
model.addBox(0/16, 1/16, 14/16, 16/16, 2/16, 15/16, "planks", 0);
model.addBox(0/16, 1/16, 12/16, 16/16, 3/16, 13/16, "planks", 0);
model.addBox(0/16, 1/16, 10/16, 16/16, 4/16, 11/16, "planks", 0);
model.addBox(0/16, 1/16, 8/16, 16/16, 5/16, 9/16, "planks", 0);
model.addBox(0/16, 1/16, 6/16, 16/16, 6/16, 7/16, "planks", 0);
model.addBox(0/16, 1/16, 4/16, 16/16, 7/16, 5/16, "planks", 0);
model.addBox(0/16, 1/16, 2/16, 16/16, 8/16, 3/16, "planks", 0);
model.addBox(0/16, 1/16, 0/16, 16/16, 9/16, 1/16, "planks", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mining_chute, -1, render);

Block.setBlockShape(BlockID.mining_chute, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});


Block.registerDropFunction(31, function(){ 
    if(Player.getCarriedItem().id == ItemID.stone_knife && Math.random()<=1){return [[ItemID.sheaf, 1,0]];
  } 
});

IDRegistry.genBlockID("mow")
Block.createBlock("mow", [{"name":"Mow", "texture":[["mow",0]],"inCreative":true}]);

IDRegistry.genBlockID("rockblock");
Block.createBlock("rockblock", [{"name":"Rock","texture":[["rockblock",0]],"inCreative":false}]);

var render = new ICRender.Model();
var model = BlockRenderer.createModel();

model.addBox(4/16, 0/16, 3/16, 13/16, 1/16, 13/16, "rockblock", 0);
model.addBox(5/16, 0/16, 2/16, 12/16, 1/16, 3/16, "rockblock", 0);
model.addBox(3/16, 0/16, 5/16, 4/16, 1/16, 11/16, "rockblock", 0);
model.addBox(5/16, 0/16, 13/16, 10/16, 1/16, 14/16, "rockblock", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.custom, -1, render);

Block.setBlockShape(BlockID.rockblock, {"x":0,"y":0,"z":0}, {"x":1,"y":0.0625,"z":1});

Block.registerDropFunction(BlockID.rockblock, function(){ 
    if(Math.random()<=1){return [[ItemID.rock, 1,0]];
  } 
});

Block.registerDropFunction(106, function(){ 
    if(Math.random()<=0.8){return [[106, 1,0]];
  } 
});

IDRegistry.genBlockID("stickblock");
Block.createBlock("stickblock", [{"name":"Stick Block","texture":[["sticks",0]],"inCreative": false}]);
Block.registerDropFunction(BlockID.stickblock, function(){ 
    if(Math.random()<=1){return [[280, 1,0]];
  } 
});
Block.setBlockShape(BlockID.stickblock, {"x":0,"y":0,"z":0}, {"x":1,"y":0.0625,"z":1});

Block.registerDropFunction(18, function(){ 
    if(Math.random()<=0.2){return [[280, 1,0]];
  } 
});

IDRegistry.genBlockID("coppernug");
Block.createBlock("coppernug", [{"name":"Copper nugget","texture":[["coppernug",0]],"inCreative": false}]);
Block.registerDropFunction(BlockID.coppernug, function(){ 
    if(Math.random()<=1){return [[ItemID.minicopper, 1,0]];
  } 
});
Block.setBlockShape(BlockID.coppernug, {"x":0,"y":0,"z":0}, {"x":1,"y":0.0625,"z":1});

IDRegistry.genBlockID("copperore");
Block.createBlock("copperore", [{"name":"Copper Ore","texture":[["copperore",0]],"inCreative": true}]);
ToolAPI.registerBlockMaterial(BlockID.copperore, "stone")

Block.registerDropFunction(3, function(){ 
    if(Math.random()<=1){return [[ItemID.mudball, 1,0]];
  } 
});

Block.registerDropFunction(2, function(){ 
    if(Math.random()<=1){return [[ItemID.mudball, 1,0]];
  } 
});

Block.registerDropFunction(17, function(){ 
    if(Player.getCarriedItem().id == ItemID.stone_knife && Math.random()<=1){return [[ItemID.bark, 1,0]];
  } 
});


