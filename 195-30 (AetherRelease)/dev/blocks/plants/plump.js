IDRegistry.genBlockID("plump");
Block.createBlock("plump", [
    {name: "Plump", texture: [["plumproot_bottom", 0],["plumproot_top", 0],["plumproot_side", 0]], inCreative: false}], {solid: true,  destroytime: 0.4, explosionres: 1, lightopacity: 5,  translucency: 0.5, sound: "bamboo"});
ToolAPI.registerBlockMaterial(BlockID.plump, "plant");


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
 if(Math.random() < 0.1){
for(var i = 0; i < 3; i++){
  for(var k = 0; k < randomInt(1,3); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
 if (coords.y < 38) return;
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether && World.getBlockID(coords.x + k,coords.y, coords.z + k) == BlockID.grassblockAether){ 
World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.plump,0);
          }
       }    
    }
}});