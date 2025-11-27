//SHROOMS
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 18 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.boletus,0); 
}});   

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 27 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.chanterelle,0); 
}});   

//SEDGE
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 1 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.sedgeBlock,0); 
}});  

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 6 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.sedgeBlockp,0);
World.setBlock(coords.x,coords.y+2,coords.z,BlockID.sedgeBlockt,0);
    }
}});

//BUSHES
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 18 ) return;
   for(let i=0; i<randomInt(1, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.blueberryBushBerried,0); 
}});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 6 ) return;
   for(let i=0; i<randomInt(1, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.blueberryBushBerried,0); 
}});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 18 ) return;
   for(let i=0; i<randomInt(1, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.raspberryBushBerried,0); 
}});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 6 ) return;
   for(let i=0; i<randomInt(1, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==2)
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.lingonberryBushBerried,0); 
}});

//STRUCTURES
var MeadWalley = new Structure("MeadWalley");

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 74, coords.z);
  if (coords.y < 59 || World.getBiome(coords.x, coords.z) != 1 ) return;
 if(World.getBlockID(coords.x,coords.y,coords.z)==2 && random.nextFloat() < .03)
MeadWalley.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random);  
});