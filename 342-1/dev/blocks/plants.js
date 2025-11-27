IDRegistry.genBlockID("fireleav"); 
  Block.createBlock("fireleav", [{name: "Огнелист", texture: [["fireleav", 0], ["fireleav", 0], ["fireleav", 0], ["fireleav", 0], ["fireleav", 0], ["fireleav", 0]], inCreative: true}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav, -1, render);
Block.setBlockShape(BlockID.fireleav, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Block.registerDropFunction(BlockID.fireleav, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.fireleavpetal, 3, 0]);
  drop.push([ItemID.fireleavseeds, 2, 0]);
 return drop;
});




IDRegistry.genBlockID("fireleav4"); 
  Block.createBlock("fireleav4", [{name: "Огнелист", texture: [["fireleav", 4], ["fireleav", 4], ["fireleav", 4], ["fireleav", 4], ["fireleav", 4], ["fireleav", 4]], inCreative: false}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav4, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 4);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 4);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav4, -1, render);
Block.setBlockShape(BlockID.fireleav4, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});



IDRegistry.genBlockID("fireleav3"); 
  Block.createBlock("fireleav3", [{name: "Огнелист", texture: [["fireleav", 3], ["fireleav", 3], ["fireleav", 3], ["fireleav", 3], ["fireleav", 3], ["fireleav", 3]], inCreative: false}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav3, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 3);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 3);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav3, -1, render);
Block.setBlockShape(BlockID.fireleav3, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});


IDRegistry.genBlockID("fireleav2"); 
  Block.createBlock("fireleav2", [{name: "Огнелист", texture: [["fireleav", 2], ["fireleav", 2], ["fireleav", 2], ["fireleav", 2], ["fireleav", 2], ["fireleav", 2]], inCreative: false}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav2, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 2);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 2);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav2, -1, render);
Block.setBlockShape(BlockID.fireleav2, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});



IDRegistry.genBlockID("fireleav1"); 
  Block.createBlock("fireleav1", [{name: "Огнелист", texture: [["fireleav", 1], ["fireleav", 1], ["fireleav", 1], ["fireleav", 1], ["fireleav", 1], ["fireleav", 1]], inCreative: false}], GM);
  ToolAPI.registerBlockMaterial(BlockID.fireleav1, "plant");
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "fireleav", 1);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "fireleav", 1);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.fireleav1, -1, render);
Block.setBlockShape(BlockID.fireleav1, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});





Block.setRandomTickCallback(BlockID.fireleav4, function(x, y, z, id, data) { 
    
    if(World.getBlockID(x,y,z)==BlockID.fireleav4 && World.getBlockID(x,y-1,z)==1){ 
    	World.setBlock(x, y, z, BlockID.fireleav3);
    }
    else{
    	World.setBlock(x, y, z, 0);
    }
    });
    
    
    
    
    
    Block.setRandomTickCallback(BlockID.fireleav3, function(x, y, z, id, data) { 
    
    if(World.getBlockID(x,y,z)==BlockID.fireleav3 && World.getBlockID(x,y-1,z)==1){ 
    	World.setBlock(x, y, z, BlockID.fireleav2);
    }
    else{
    	World.setBlock(x, y, z, 0);
    }
    });
    
    
    
    Block.setRandomTickCallback(BlockID.fireleav2, function(x, y, z, id, data) { 
    
    if(World.getBlockID(x,y,z)==BlockID.fireleav2 && World.getBlockID(x,y-1,z)==1){ 
    	World.setBlock(x, y, z, BlockID.fireleav1);
    }
    else{
    	World.setBlock(x, y, z, 0);
    }
    });
    
    
    
    Block.setRandomTickCallback(BlockID.fireleav1, function(x, y, z, id, data) { 
    
    if(World.getBlockID(x,y,z)==BlockID.fireleav1 && World.getBlockID(x,y-1,z)==1){ 
    	World.setBlock(x, y, z, BlockID.fireleav);
    }
    else{
    	World.setBlock(x, y, z, 0);
    }
    });
    
    
    
    
    Block.registerDropFunction(BlockID.fireleav4, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([0, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.fireleav3, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([0, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.fireleav2, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([0, 1, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.fireleav1, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([0, 1, 0]);
 return drop;
});











Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==1){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.fireleav, 0);
}}});