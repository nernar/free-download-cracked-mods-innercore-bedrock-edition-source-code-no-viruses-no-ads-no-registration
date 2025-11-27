var BLOCKTYPE_PLANT = Block.createSpecialType({ 
	base: 59,
});

IDRegistry.genBlockID("wild_carrot_bush");
Block.createBlockWithRotation("wild_carrot_bush", [{name: "wild_carrot_bush", texture: [["wild_carrot_bush", 0], ["wild_carrot_bush", 0], ["wild_carrot_bush", 0], ["wild_carrot_bush", 0], ["wild_carrot_bush", 0], ["wild_carrot_bush", 0]], inCreative: true},],BLOCKTYPE_PLANT);
			
Block.registerDropFunction("wild_carrot_bush", function(coords, blockID, data, diggingLevel, toolLevel){
var count = [1, 2, 3];
var gg = Math.floor((Math.random()*2)+1);
if(gg==1){
var rnd = Math.floor(Math.random()*(count.length)); 			
return [[391, count[rnd], 0]];
}
else
if(gg==2){
var rnd = Math.floor(Math.random()*(count.length)); 			
return [[392, count[rnd], 0]];
}});

		Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.09){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z) && World.getBlock(coords.x, coords.y, coords.z).id === 2) {
        World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.wild_carrot_bush, 0);	
        }}});			
			
				Block.setBlockShape(BlockID.wild_carrot_bush, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});
				
BlockRenderer.addRenderCallback(BlockID.wild_carrot_bush, function(api, coords, block) {

var box = BlockID.wild_carrot_bush;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.10, 0.10, .507, 0.90, .90, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.10, .10, .497, .90, 0.90, .507, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.wild_carrot_bush);			
//


IDRegistry.genBlockID("wild_wheat_bush");
Block.createBlockWithRotation("wild_wheat_bush", [{name: "wild_wheat_bush", texture: [["wild_wheat_bush", 0], ["wild_wheat_bush", 0], ["wild_wheat_bush", 0], ["wild_wheat_bush", 0], ["wild_wheat_bush", 0], ["wild_wheat_bush", 0]], inCreative: true},],BLOCKTYPE_PLANT);
Block.registerDropFunction("wild_wheat_bush", function(coords, blockID, data, diggingLevel, toolLevel){
var count = [0, 1, 2];
if(data!==60){
var rnd = Math.floor(Math.random()*(count.length)); 			
return [[295, count[rnd], 0], [296, 1, 0]];
}});
			

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z) && World.getBlock(coords.x, coords.y, coords.z).id === 2) {
        World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.wild_wheat_bush, 0);	
        }}});			
			

			
			
			
			
				Block.setBlockShape(BlockID.wild_wheat_bush, {x: 0.01, y: 0, z: 0.01}, {x: 0.9, y: 0.05, z: 0.9});
				
BlockRenderer.addRenderCallback(BlockID.wild_wheat_bush, function(api, coords, block) {

var box = BlockID.wild_wheat_bush;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.10, 0.10, .507, 0.90, .90, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.10, .10, .497, .90, 0.90, .507, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.wild_wheat_bush);			
//


