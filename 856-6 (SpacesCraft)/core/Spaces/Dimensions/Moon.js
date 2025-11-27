IMPORT("SoundAPI");
var Moon_Luna = new CustomBiome ("Moon_Luna")
.setSkyColor(android.graphics.Color.rgb(1, 0, 0))
.setCoverBlock(BlockID.moon_top_side, 0)
.setSurfaceBlock(BlockID.middle, 0)
.setFillingBlock(BlockID.lunar_stone, 0);
var Moon = new Dimensions.CustomDimension("Moon", 2000);
Moon.setSkyColor(.0, .0, .0);
Moon.setFogColor(.0, .0, .0);
Moon.setGenerator(Dimensions.newGenerator({
    biome: Moon_Luna.id,
    layers: [

    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.5, -.99], [.9, -0.99], [0.4, -.4], [0, 0.8]
        ],
        material: {
            base: BlockID.lunar_stone,
            surface: {
                id: BlockID.middle,
                data: 0,
                width: 4
            },
            cover: BlockID.moon_top_side
        },
        noise: {
            octaves: {
               count: 4,
               scale: 190,
               weight: 2.0
            },
        }     
    },{ minY: 0,
      	maxY: 1,
      	material: {base: 7}}]

}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_c) {
Dimensions.transfer(player, Moon.id);    
 }
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Moon.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_tin_moon, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY:65, 
 size: randomInt(4, 7), 
 mode: true, 
 check: [BlockID.lunar_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Moon.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_copper_moon, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY:65, 
 size: randomInt(4, 7), 
 mode: true, 
 check: [BlockID.lunar_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Moon.id) return; 
 UniqueGen.generateOreInDimension(BlockID.moonore_sapphire, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY:30, 
 size: randomInt(3, 5), 
 mode: true, 
 check: [BlockID.lunar_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) {
 if (dimensionId != Moon.id) return; 
 UniqueGen.generateOreInDimension(BlockID.moonore_cheese, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY:65, 
 size: randomInt(4, 9), 
 mode: true, 
 check: [BlockID.lunar_stone] 
 }); 
});