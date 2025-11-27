


var BLOCK_TYPE_BASE = Block.createSpecialType({
    base: 2,
    solid: true,
    destroytime: 0.1,
    explosionres: 1,
    opaque: true
});

var BLOCK_TYPE_GRASS = Block.createSpecialType({
    base: 6,
    solid: false,
    destroytime: 0.001,
    explosionres: 1,
    opaque: false
});






IDRegistry.genBlockID("cometgrass");
Block.createBlock("cometgrass", [{name: "Земля с травой кометы", texture: [["cometdirt", 0], ["cometgrasstop", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0], ["cometgrass", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometdirt");
Block.createBlock("cometdirt", [{name: "Земля кометы", texture: [["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0], ["cometdirt", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometstone");
Block.createBlock("cometstone", [{name: "Камень кометы", texture: [["cometstone", 0], ["cometstone", 0], ["cometstone", 0], ["cometstone", 0], ["cometstone", 0], ["cometstone", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("skyliteore");
Block.createBlock("skyliteore", [{name: "Скайлитовая руда", texture: [["skyliteore", 0], ["skyliteore", 0], ["skyliteore", 0], ["skyliteore", 0], ["skyliteore", 0], ["skyliteore", 0]], inCreative: true}], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.skyliteore, "stone", 2, true);
Block.setDestroyLevel (BlockID.skyliteore, 4) 
Block.registerDropFunction("skyliteore", function(coords, blockID, blockData, level){
	if (level > 3){
		return [[BlockID.skyliteore, 1, 0]]
	}
	return [];
}, 1);

IDRegistry.genBlockID("cometwood");
Block.createBlock("cometwood", [{name: "Древесина кометы", texture: [["cometwoodtop", 0], ["cometwoodtop", 0], ["cometwood", 0], ["cometwood", 0], ["cometwood", 0], ["cometwood", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometplanks");
Block.createBlock("cometplanks", [{name: "Доски кометы", texture: [["cometplancks", 0], ["cometplancks", 0], ["cometplancks", 0], ["cometplancks", 0], ["cometplancks", 0], ["cometplancks", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometleaves");
Block.createBlock("cometleaves", [{name: "Листва кометы", texture: [["cometleaves", 0], ["cometleaves", 0], ["cometleaves", 0], ["cometleaves", 0], ["cometleaves", 0], ["cometleaves", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometportal");
Block.createBlock("cometportal", [{name: "Портал на Кометы", texture: [["cometportal", 0], ["cometportal", 0], ["cometportal", 0], ["cometportal", 0], ["cometportal", 0], ["cometportal", 0]], inCreative: true}], BLOCK_TYPE_BASE);


IDRegistry.genBlockID("cometspawner");
Block.createBlock("cometspawner", [{name: "Спавнер Слизней Комет", texture: [["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("cometspawner1");
Block.createBlock("cometspawner1", [{name: "Спавнер Единорогов Комет", texture: [["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0], ["cometspawner", 0]], inCreative: true}], BLOCK_TYPE_BASE);

ToolAPI.registerBlockMaterial(BlockID.cometspawner, "stone", 1, true);
Block.setDestroyLevel (BlockID.cometspawner, 1) 
Block.registerDropFunction("cometspawner", function(coords, blockID, blockData, level){
		return [[0, 0, 0]]
	return [];
}, 1);

ToolAPI.registerBlockMaterial(BlockID.cometspawner1, "stone", 1, true);
Block.setDestroyLevel (BlockID.cometspawner1, 1) 
Block.registerDropFunction("cometspawner1", function(coords, blockID, blockData, level){
		return [[0, 0, 0]]
	return [];
}, 1);


 







IMPORT("dimensions");




const COMET_SKY_COLOR = [1, 0.8, 1];
const COMET_FOG_COLOR = [0, 0.6, 1];

var Comet = new Dimension({
    name: "Comet",
    
    generation: {
        layers: [
            //island
            {
                range: [5, 256],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [.015, .0275, .016]
                    }
                },
                
                gradient: [[4, -8], [.15, -.16], [23, .42], [.108, -.19], [19, -19]],
                terrain: {
                    base: BlockID.cometstone,
                    cover: {
                        height: 4,
                        top: BlockID.cometgrass,
                        block: BlockID.cometdirt
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        sky: COMET_SKY_COLOR,
        fog: COMET_FOG_COLOR
    },
    callbacks: {
       tick: function() { 
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("CometChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
    }
});


var teleporterComet = Comet.getTeleporter(); 
 
var teleporterBack = teleporterComet.OVERWORLD; 
// alert(dimension.id);


Callback.addCallback("ItemUse", function (coords, item, block) {
	var pos = Player.getPosition();
if (block.id==BlockID.cometportal){
teleporterComet.enter(); 
Player.setPosition(pos.x, pos.y-80, pos.z);
World.setBlock(pos.x, pos.y, pos.z, BlockID.cometbricks);
}
});



IDRegistry.genItemID("portablecometteleporter");
Item.createItem("portablecometteleporter", "Портативный портал на Кометы", {name: "portablecometteleporter", meta: 0}, {stack: 64});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.portablecometteleporter){
teleporterComet.enter(); 
}
});




Recipes.addShaped({id: ItemID.portablecometteleporter, count: 1, data: 0}, [ "b b", " a ", "b b"], ['a', BlockID.cometportal, 0, 'b', ItemID.darkhamingot, 0]);








IDRegistry.genBlockID("cometbluetallgrass"); 
  Block.createBlock("cometbluetallgrass", [{name: "Синяя трава Кометы", texture: [["cometbluetallgrass", 0], ["cometbluetallgrass", 0], ["cometbluetallgrass", 0], ["cometbluetallgrass", 0], ["cometbluetallgrass", 0], ["cometbluetallgrass", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometbluetallgrass", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometbluetallgrass", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometbluetallgrass, -1, render);
Block.setBlockShape(BlockID.cometbluetallgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometbluetallgrass");
Item.createItem("cometbluetallgrass", "Синяя трава Кометы", {name: "cometbluetallgrass", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometbluetallgrass)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometbluetallgrass, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometbluetallgrass, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometbluetallgrass, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometbluetallgrass, 0);
}}});



IDRegistry.genBlockID("cometdandelion"); 
  Block.createBlock("cometdandelion", [{name: "Стелларис Данделиорис", texture: [["cometdandelion", 0], ["cometdandelion", 0], ["cometdandelion", 0], ["cometdandelion", 0], ["cometdandelion", 0], ["cometdandelion", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometdandelion", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometdandelion", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometdandelion, -1, render);
Block.setBlockShape(BlockID.cometbluetallgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometdandelion");
Item.createItem("cometdandelion", "Стелларус Данделиорис", {name: "cometdandelion", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometdandelion)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometdandelion, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometdandelion, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometdandelion, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometdandelion){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometdandelion, 0);
}}});



IDRegistry.genBlockID("cometflowercap"); 
  Block.createBlock("cometflowercap", [{name: "Синяя трава кометы", texture: [["cometflowercap", 0], ["cometflowercap", 0], ["cometflowercap", 0], ["cometflowercap", 0], ["cometflowercap", 0], ["cometflowercap", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometflowercap", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometflowercap", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometflowercap, -1, render);
Block.setBlockShape(BlockID.cometflowercap, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometflowercap");
Item.createItem("cometflowercap", "Капуста кометы", {name: "cometflowercap", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometflowercap)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometflowercap, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometflowercap, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometflowercap, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometflowercap, 0);
}}});




IDRegistry.genBlockID("cometorchid"); 
  Block.createBlock("cometorchid", [{name: "§4Синяя трава кометы", texture: [["cometorchid", 0], ["cometorchid", 0], ["cometorchid", 0], ["cometorchid", 0], ["cometorchid", 0], ["cometorchid", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometorchid", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometorchid", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometorchid, -1, render);
Block.setBlockShape(BlockID.cometorchid, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometorchid");
Item.createItem("cometorchid", "Комет орхид", {name: "cometorchid", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometorchid)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometorchid, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometorchid, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometorchid, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometorchid, 0);
}}});



IDRegistry.genBlockID("cometpinktallgrass"); 
  Block.createBlock("cometpinktallgrass", [{name: "Синяя трава кометы", texture: [["cometpinktallgrass", 0], ["cometpinktallgrass", 0], ["cometpinktallgrass", 0], ["cometpinktallgrass", 0], ["cometpinktallgrass", 0], ["cometpinktallgrass", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "cometpinktallgrass", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "cometpinktallgrass", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cometpinktallgrass, -1, render);
Block.setBlockShape(BlockID.cometpinktallgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("cometpinktallgrass");
Item.createItem("cometpinktallgrass", "Розовая трава кометы", {name: "cometpinktallgrass", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cometpinktallgrass)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cometpinktallgrass, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.cometpinktallgrass, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cometpinktallgrass, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.cometgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.cometpinktallgrass, 0);
}}});





Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.cometwood, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.cometleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, BlockID.cometleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.cometleaves, 0);
              World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.cometleaves, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.cometleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.cometleaves, 0);
              World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.cometleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.cometleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.cometleaves, 0);
       
       
       World.setBlock(coords.x,coords.y-3,  coords.z, BlockID.skyliteore, 0);
}}});


IDRegistry.genItemID("cometstick");
Item.createItem("cometstick", "Палка Кометы", {name: "cometstick", meta: 0}, {stack: 64});
























Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x+22, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+21, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+19, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+18, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+1,  coords.z, BlockID.cometspawner1, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x+22, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+21, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+19, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+18, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+1,  coords.z, BlockID.cometspawner, 0);
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x+22, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+21, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+19, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+18, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+1,  coords.z, BlockID.comettrader, 0);
}}});






Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.cometgrass){ 
	
       World.setBlock(coords.x+22, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+21, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+21, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z, BlockID.cometbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+20, coords.y,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+19, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z-1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+1, BlockID.moonbricks, 0);
       World.setBlock(coords.x+19, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+18, coords.y,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z-1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+1, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+1,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+1,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+22, coords.y+2,  coords.z-2, BlockID.moonbricks, 0);
       World.setBlock(coords.x+18, coords.y+2,  coords.z+2, BlockID.moonbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+22, coords.y+3,  coords.z-2, BlockID.cometbricks, 0);
       World.setBlock(coords.x+18, coords.y+3,  coords.z+2, BlockID.cometbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+1,  coords.z, BlockID.comettrader1, 0);
}}});






Recipes.addShaped({id: ItemID.cometstick, count: 1, data: 0}, [ "   ", " a ", " a "], ['a', BlockID.cometplanks, 0]);
Recipes.addShaped({id: BlockID.cometplanks, count: 1, data: 0}, [ "   ", " a ", " a "], ['a', BlockID.cometwood, 0]);


























































