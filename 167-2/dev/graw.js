var GRAV_TYPE_BLOCK = Block.createSpecialType({
lightlevel: 5,
lightopacity: 15 });

IDRegistry.genBlockID("mobdropblock"); Block.createBlock("mobdropblock", [ {name: "ggg", texture: [["stonebrick", 0], ["stonebrick", 0], ["stonebrick", 0], ["stonebrick", 0], ["stonebrick", 0], ["stonebrick", 0]], inCreative: true} ], GRAV_TYPE_BLOCK);







Block.registerDropFunction("mobdropblock", function(coords, blockID, data, diggingLevel, toolLevel){ 
var badloot = [50, 30, 287, 296, 295, 352, 367, 288, 280, 339, 337, 374, 281, 297, 260, 340, 329, 392, 334, 263, 391, 371, 336, 344, 349, 262, 268, 269, 270, 271, 290, 265, 266, 409, 422, 259, 289, 331, 341, 346, 406, 416, 420, 421, 348, 368, 381, 291, 298, 299, 301, 301, 272, 273, 274, 275, 30, 263, 264, 265, 266, 287, 288, 289, 328, 320, 329, 331, 334, 341, 348, 352, 367, 357, 297];
var dnr = [1, 2, 3];
var mob = [32, 33, 34, 35, 39, 40];
var rnd = Math.floor((Math.random()*1)+1);
for(var i=0; i<4; i++)
if(rnd == 1){
var rnd2 = Math.floor(Math.random()*(badloot.length));
var rnd3 = Math.floor(Math.random()*(badloot.length));
var rnd4 = Math.floor(Math.random()*(badloot.length));
var rnd5 = Math.floor(Math.random()*(mob.length));
Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, mob[rnd5]);
Entity.spawn(coords.x+0.5, coords.y+2, coords.z+1.5, mob[rnd5]);
return [[badloot[rnd2], 1, data], [badloot[rnd3], 1, data], [badloot[rnd4], 1, data]];  }});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
        World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.mobdropblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z, 243, 0);
World.setBlock(coords.x,coords.y,  coords.z+1, 243, 0);  
World.setBlock(coords.x,coords.y,  coords.z+2, 243, 0);   
World.setBlock(coords.x,coords.y+1,  coords.z, 139, 0); 
World.setBlock(coords.x,coords.y+2,  coords.z, 139, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, 139, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z, 139, 0);
World.setBlock(coords.x+1,coords.y+2,  coords.z, 139, 0);}}});