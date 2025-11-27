var MarsPlains = new CustomBiome ("MarsPlains")
//.setSkyColor(android.graphics.Color.rgb(755, 345, 0))
.setSkyColor(android.graphics.Color.rgb(894, 345, 0))
.setCoverBlock(BlockID.mars_top_stone, 0)
.setSurfaceBlock(BlockID.mars_middle_stone, 0)
.setFillingBlock(BlockID.mars_bottom_stone, 0);
var Mars = new Dimensions.CustomDimension("Mars", 2001);
Mars.setSkyColor(16, -164, -255);//(894, 345, 0);
Mars.setFogColor(16, -164, -255);
Mars.setGenerator(Dimensions.newGenerator({
    biome: Mars.id,
    layers: [
    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.8, -.99], [.9, -0.99], [0.4, -.4], [0, 0.8]
        ],
        material: {
            base: BlockID.mars_bottom_stone,
            surface: {
                id: BlockID.mars_middle_stone,
                data: 0,
                width: 4
            },
            cover: BlockID.mars_top_stone
        },
        noise: {
            octaves: {
               count: 4,
               scale: 260,
               weight: 1.99
               }
        }
    },{ minY: 0,
      	maxY: 1,
      	material: {base: 7}
    }]
}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_a) {
Dimensions.transfer(player, Mars.id);        
 }
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Mars.id) return; 
 UniqueGen.generateOreInDimension(BlockID.desh, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:1, 
 maxY: 25, 
 size: randomInt(1, 3), 
 mode: true, 
 check: [BlockID.mars_bottom_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Mars.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_iron_mars, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 65, 
 size: randomInt(1, 5), 
 mode: true, 
 check: [BlockID.mars_bottom_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Mars.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_copper_mars, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 65, 
 size: randomInt(1, 5), 
 mode: true, 
 check: [BlockID.mars_bottom_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Mars.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_tin_mars, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 65, 
 size: randomInt(1, 5), 
 mode: true, 
 check: [BlockID.mars_bottom_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Mars.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(1, 2); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.mars_bottom_stone){  
World.setBlock(coords.x,coords.y,coords.z,BlockID.dense_ice,0);   
    }
}});