IDRegistry.genItemID("flower1");
Item.createItem("flower1", "Двойной красный гладиолус", {name: "flower1", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower1"); 
 Block.createBlock("flower1", [{name: "Голубой цветок", texture: [["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower1", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower1", 0);
render.addEntry(model);

BlockRenderer.setStaticICRender(BlockID.flower1, -1, render);
Block.setBlockShape(BlockID.flower1, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower1){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower1, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower2");
Item.createItem("flower2", "Аконит", {name: "flower2", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower2"); 
 Block.createBlock("flower2", [{name: "Голубой цветок", texture: [["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower2", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower2", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower2, -1, render);
Block.setBlockShape(BlockID.flower2, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower2){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower2, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});
  
IDRegistry.genItemID("flower3");
Item.createItem("flower3", "Двойной оранжевый космос", {name: "flower3", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower3"); 
  Block.createBlock("flower3", [{name: "Голубой цветок", texture: [["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower3", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower3", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower3, -1, render);
Block.setBlockShape(BlockID.flower3, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower3){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower3, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower4");
Item.createItem("flower4", "Алое", {name: "flower4", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower4"); 
  Block.createBlock("flower4", [{name: "Голубой цветок", texture: [["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower4", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower4", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower4, -1, render);
Block.setBlockShape(BlockID.flower4, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower4){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower4, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower5");
Item.createItem("flower5", "Желтый мак", {name: "flower5", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower5"); 
  Block.createBlock("flower5", [{name: "Голубой цветок", texture: [["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower5", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower5", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower5, -1, render);
Block.setBlockShape(BlockID.flower5, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower5){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower5, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower6");
Item.createItem("flower6", "Эхинацея", {name: "flower6", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower6"); 
  Block.createBlock("flower6", [{name: "Голубой цветок", texture: [["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower6", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower6", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower6, -1, render);
Block.setBlockShape(BlockID.flower6, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower6){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower6, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower7");
Item.createItem("flower7", "Двойное дно боярышника", {name: "flower7", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower7"); 
  Block.createBlock("flower7", [{name: "Голубой цветок", texture: [["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower7", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower7", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower7, -1, render);
Block.setBlockShape(BlockID.flower7, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower7){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower7, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower8");
Item.createItem("flower8", "Маковое голубое дно", {name: "flower8", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower8"); 
  Block.createBlock("flower8", [{name: "Голубой цветок", texture: [["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower8", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower8", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower8, -1, render);
Block.setBlockShape(BlockID.flower8, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower8){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower8, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower9");
Item.createItem("flower9", "Темное осто", {name: "flower9", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower9"); 
  Block.createBlock("flower9", [{name: "Голубой цветок", texture: [["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower9", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower9", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower9, -1, render);
Block.setBlockShape(BlockID.flower9, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower9){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower9, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower1, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower2, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower3, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower4, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower5, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower6, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower7, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower8, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower9, 0);
}}});

Block.registerDropFunction(BlockID.flower1, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower1, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower2, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower2, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower3, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower3, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower4, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower4, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower5, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower5, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower6, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower6, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower7, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower7, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower8, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower8, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower9, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower9, 1, 0]);
	return drop;
});