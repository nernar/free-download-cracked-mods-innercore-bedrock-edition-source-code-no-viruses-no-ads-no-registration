IDRegistry.genBlockID("purgatoriumgrass");
Block.createBlock("purgatoriumgrass", [{name: "Земля Пургаториума", texture: [["purgatoriumstone", 0], ["purgatoriumgrasstop", 0], ["purgatoriumgrass", 0], ["purgatoriumgrass", 0], ["purgatoriumgrass", 0], ["purgatoriumgrass", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("purgatoriumstone");
Block.createBlock("purgatoriumstone", [{name: "Камень Пургаториума", texture: [["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genBlockID("purgatoriumportal");
Block.createBlock("purgatoriumportal", [{name: "Портал в Пургаториум", texture: [["purgatoriumportal", 0], ["purgatoriumportal", 0], ["purgatoriumportal", 0], ["purgatoriumportal", 0], ["purgatoriumportal", 0], ["purgatoriumportal", 0]], inCreative: true}], BLOCK_TYPE_BASE);

IDRegistry.genItemID("purgatoriumportal");
Item.createItem("purgatoriumportal", "Портативный портал в Пургаториум", {name: "purgatoriumportal", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.purgatoriumportal, count: 1, data: 0}, [ "b b", " a ", "b b"], ['a', BlockID.purgatoriumportal, 0, 'b', ItemID.darkhamingot, 0]);



const PURGATORIUM_SKY_COLOR = [0, 0, 0];
const PURGATORIUM_FOG_COLOR = [0.1, 0, 0];

var Purgatorium = new Dimension({
    name: "Purgatorium",
    
    generation: {
        layers: [
            // major islands
            { 
                range: [0, 80],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.6,
                        scale: [1, 0.4, 1]
                    }
                },
                
                gradient: [[0, 1], [0.4, 1], [0.5, 0], [0.6, -1], [1, -1]],
                
                terrain: {
                    base: BlockID.purgatoriumstone,
                    cover: {
                        height: 4,
                        top: BlockID.purgatoriumgrass,
                        block: BlockID.purgatoriumstone
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        sky: PURGATORIUM_SKY_COLOR,
        fog: PURGATORIUM_FOG_COLOR
    },
    
    callbacks: {
tick: function() { 
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("PurgatoriumChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
 }
});


IDRegistry.genBlockID("purgatoriumeyeflower"); 
  Block.createBlock("purgatoriumeyeflower", [{name: "§4Синяя трава кометы", texture: [["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0], ["purgatoriumeyeflower", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "purgatoriumeyeflower", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "purgatoriumeyeflower", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.purgatoriumeyeflower, -1, render);
Block.setBlockShape(BlockID.purgatoriumeyeflower, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("purgatoriumeyeflower");
Item.createItem("purgatoriumeyeflower", "§4 Глазоцвет", {name: "purgatoriumeyeflower", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.purgatoriumeyeflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.purgatoriumeyeflower, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.purgatoriumeyeflower, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.purgatoriumeyeflower, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.purgatoriumeyeflower, 0);
}}});

IDRegistry.genBlockID("purgatoriumeyelessgrass"); 
  Block.createBlock("purgatoriumeyelessgrass", [{name: "§4Синяя трава кометы", texture: [["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0], ["purgatoriumeyelessgrass", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "purgatoriumeyelessgrass", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "purgatoriumeyelessgrass", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.purgatoriumeyelessgrass, -1, render);
Block.setBlockShape(BlockID.purgatoriumeyelessgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("purgatoriumeyelessgrass");
Item.createItem("purgatoriumeyelessgrass", "§4 Монстрова слепота", {name: "purgatoriumeyelessgrass", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.purgatoriumeyelessgrass)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.purgatoriumeyelessgrass, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.purgatoriumeyelessgrass, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.purgatoriumeyelessgrass, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.purgatoriumeyelessgrass, 0);
}}});

IDRegistry.genBlockID("purgatoriumtallgrass"); 
  Block.createBlock("purgatoriumtallgrass", [{name: "§4Синяя трава кометы", texture: [["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0], ["purgatoriumtallgrass", 0]], inCreative: false}], BLOCK_TYPE_GRASS);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "purgatoriumtallgrass", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "purgatoriumtallgrass", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.purgatoriumtallgrass, -1, render);
Block.setBlockShape(BlockID.purgatoriumtallgrass, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
IDRegistry.genItemID("purgatoriumtallgrass");
Item.createItem("purgatoriumtallgrass", "§4 Трава пургаториума", {name: "purgatoriumtallgrass", meta: 0}, {stack: 64});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.purgatoriumtallgrass)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.purgatoriumtallgrass, 0);
Player.decreaseCarriedItem (1);
}
});
Block.registerDropFunction(BlockID.purgatoriumtallgrass, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.purgatoriumtallgrass, 1, 0]);
 return drop;
});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.purgatoriumtallgrass, 0);
}}});

IDRegistry.genBlockID("boneblock");
Block.createBlock("boneblock", [{name: "Блок кости", texture: [["boneblocktop", 0], ["boneblocktop", 0], ["boneblock", 0], ["boneblock", 0], ["boneblock", 0], ["boneblock", 0]], inCreative: true}], BLOCK_TYPE_BASE);

Recipes.addShaped({id: BlockID.boneblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 352, 0]);

Recipes.addShaped({id: 352, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.boneblock, 0]);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.1){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x+2,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x+4,coords.y+1, coords.z, BlockID.boneblock, 0);
       
       World.setBlock(coords.x-1,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x-2,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+1, coords.z, BlockID.boneblock, 0);
       World.setBlock(coords.x-4,coords.y+1, coords.z, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       
       //
       
       World.setBlock(coords.x+1,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       
       //
       
       World.setBlock(coords.x+1,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       
       
       World.setBlock(coords.x+1,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       
       
       World.setBlock(coords.x+1,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       
       ////
       
       World.setBlock(coords.x+1,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       
       ////////
       
       
       
       World.setBlock(coords.x+1,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+1, coords.z-1, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+1, coords.z+1, BlockID.boneblock, 0);
       
       //
       
       World.setBlock(coords.x+1,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+2, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+2, coords.z+2, BlockID.boneblock, 0);
       
       //
       
       World.setBlock(coords.x+1,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+3, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+3, coords.z+3, BlockID.boneblock, 0);
       
       
       World.setBlock(coords.x+1,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+4, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+4, coords.z+3, BlockID.boneblock, 0);
       
       
       World.setBlock(coords.x+1,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+5, coords.z-3, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+5, coords.z+3, BlockID.boneblock, 0);
       
       ////
       
       World.setBlock(coords.x+1,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       
       World.setBlock(coords.x+1,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x+3,coords.y+6, coords.z-2, BlockID.boneblock, 0);
       World.setBlock(coords.x-1,coords.y+6, coords.z+2, BlockID.boneblock, 0);
       World.setBlock(coords.x-3,coords.y+6, coords.z+2, BlockID.boneblock, 0);
}}});






var teleporterPurgatorium = Purgatorium.getTeleporter(); 
 
var teleporterBack = teleporterPurgatorium.OVERWORLD; 

Callback.addCallback("ItemUse", function(coords, item){ 
if(item.id == ItemID.purgatoriumportal){ 
teleporterPurgatorium.enter(); 
} 
if(item.id == ItemID.returnticket){ 
teleporterBack.enter(); 
} 
});


Callback.addCallback("ItemUse", function (coords, item, block) {
if (block.id==BlockID.purgatoriumportal){
teleporterPurgatorium.enter(); 
}
});











Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
	
       World.setBlock(coords.x+22, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z-1, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z+1, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+21, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+10,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z, BlockID.redbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+19, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+18, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z-1, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z+1, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+11,  coords.z+2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+11,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+11,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+11,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+12,  coords.z+2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+12,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+12,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+12,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+13,  coords.z+2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+13,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+13,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+13,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+11,  coords.z, BlockID.purgatorytrader, 0);
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(rand < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.purgatoriumgrass){ 
	
       World.setBlock(coords.x+22, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z-1, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z+1, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+21, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+21, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+10,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z, BlockID.redbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+20, coords.y+10,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+19, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z-1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z+1, BlockID.blackbricks, 0);
       World.setBlock(coords.x+19, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+18, coords.y+10,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z-1, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z+1, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+10,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+11,  coords.z+2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+11,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+11,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+11,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+12,  coords.z+2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+12,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+22, coords.y+12,  coords.z-2, BlockID.blackbricks, 0);
       World.setBlock(coords.x+18, coords.y+12,  coords.z+2, BlockID.blackbricks, 0);
       
       World.setBlock(coords.x+22, coords.y+13,  coords.z+2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+13,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+22, coords.y+13,  coords.z-2, BlockID.redbricks, 0);
       World.setBlock(coords.x+18, coords.y+13,  coords.z+2, BlockID.redbricks, 0);
       
       World.setBlock(coords.x+20, coords.y+11,  coords.z, BlockID.purgatorytrader1, 0);
}}});



