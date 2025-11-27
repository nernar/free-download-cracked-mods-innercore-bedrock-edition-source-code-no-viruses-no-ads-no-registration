var Venus = new Dimensions.CustomDimension("venus", 2008);
Venus.setSkyColor(894,345,0);//(894, 345, 0);
Venus.setFogColor(894,345,0);
Venus.setGenerator(Dimensions.newGenerator({
    
    layers: [
    {
        minY: 0, maxY: 128,
 yConversion: [[1, -0.79], [0.8, -.99], [.9, -0.99], [0.5, -.4], [0, 0.8]],
        material: {
            base: BlockID.venus_rock_2,
            surface: {
                id: BlockID.venus_rock_1,
                data: 0,
                width: 4
            },
            cover: BlockID.venus_rock_0
        },
        noise: {
            octaves: {
              count: 8,
              scale: 420, 
              weight: 1.6
               }
        }
    },{ minY: 0,
      	maxY: 1,
      	material: {base: 7}
    }]
}));﻿


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Venus.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_silicon_venus, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:1, 
 maxY: 70, 
 size: randomInt(1, 3,5,7), 
 mode: true, 
 check: [BlockID.venus_rock_2] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Venus.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_quartz_venus, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 128, 
 size: randomInt(1, 5), 
 mode: true, 
 check: [BlockID.venus_rock_2] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Venus.id) return; 
 UniqueGen.generateOreInDimension(BlockID.spacescraft_sulphuric_acid_still, 0, chunkX, chunkZ, random, { 
 veinCounts: 1, 
 minY:2, 
 maxY: 120, 
 size: randomInt(7,8,9,14,12), 
 mode: true, 
 check: [BlockID.venus_rock_2] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Venus.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_copper_venus, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 128, 
 size: randomInt(1, 5), 
 mode: true, 
 check: [BlockID.venus_rock_2] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Venus.id) return; 
 UniqueGen.generateOreInDimension(BlockID.ore_tin_venus, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 80, 
 size: randomInt(1, 5), 
 mode: true, 
 check: [BlockID.venus_rock_2] 
 }); 
});



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Venus.id) return; 
 UniqueGen.generateOreInDimension(BlockID.venus_rock_3, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 65, 
 size: randomInt(10, 14,15,9,13,12,11), 
 mode: true, 
 check: [BlockID.venus_rock_2] 
 }); 
});



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==Venus.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.1){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)){
    



World.setBlock(coords.x, coords.y, coords.z,BlockID.venus_rock_0); World.setBlock(coords.x-1,coords.y,coords.z, BlockID.venus_rock_0); World.setBlock(coords.x-2,coords.y,coords.z,BlockID.venus_rock_0); World.setBlock(coords.x,coords.y,coords.z-1, BlockID.venus_rock_0); World.setBlock(coords.x-1,coords.y,coords.z-1, BlockID.venus_spout); World.setBlock(coords.x-2,coords.y,coords.z-1, BlockID.venus_rock_0); World.setBlock(coords.x,coords.y,coords.z-2, BlockID.venus_rock_0); World.setBlock(coords.x-1,coords.y,coords.z-2, BlockID.venus_rock_0); World.setBlock(coords.x-2,coords.y,coords.z-2, BlockID.venus_rock_0); World.setBlock(coords.x-2,coords.y,coords.z-1, BlockID.venus_rock_0);

    World.setBlock(coords.x, coords.y-1, coords.z,0); World.setBlock(coords.x-1,coords.y-1,coords.z, 0); World.setBlock(coords.x-2,coords.y-1,coords.z,0); World.setBlock(coords.x,coords.y-1,coords.z-1, 0); World.setBlock(coords.x-1,coords.y-1,coords.z-1, 0); World.setBlock(coords.x-2,coords.y-1,coords.z-1, 0); World.setBlock(coords.x,coords.y-1,coords.z-2, 0); World.setBlock(coords.x-1,coords.y-1,coords.z-2, 0); World.setBlock(coords.x-2,coords.y-1,coords.z-2, 0); World.setBlock(coords.x-2,coords.y-1,coords.z-1, 0);

    World.setBlock(coords.x, coords.y-2, coords.z,0); World.setBlock(coords.x-1,coords.y-2,coords.z, 0); World.setBlock(coords.x-2,coords.y-2,coords.z,0); World.setBlock(coords.x,coords.y-2,coords.z-1, 0); World.setBlock(coords.x-1,coords.y-2,coords.z-1, 0); World.setBlock(coords.x-2,coords.y-2,coords.z-1, 0); World.setBlock(coords.x,coords.y-2,coords.z-2, 0); World.setBlock(coords.x-1,coords.y-2,coords.z-2, 0); World.setBlock(coords.x-2,coords.y-2,coords.z-2, 0); World.setBlock(coords.x-2,coords.y-2,coords.z-1, 0);
    
        World.setBlock(coords.x, coords.y-3, coords.z,0); World.setBlock(coords.x-1,coords.y-3,coords.z, 0); World.setBlock(coords.x-2,coords.y-3,coords.z,0); World.setBlock(coords.x,coords.y-3,coords.z-1, 0); World.setBlock(coords.x-1,coords.y-3,coords.z-1, 0); World.setBlock(coords.x-2,coords.y-3,coords.z-1, 0); World.setBlock(coords.x,coords.y-3,coords.z-2, 0); World.setBlock(coords.x-1,coords.y-3,coords.z-2, 0); World.setBlock(coords.x-2,coords.y-3,coords.z-2, 0); World.setBlock(coords.x-2,coords.y-3,coords.z-1, 0);
        World.setBlock(coords.x, coords.y-5, coords.z,BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-1,coords.y-5,coords.z, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-2,coords.y-5,coords.z,BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x,coords.y-5,coords.z-1, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-1,coords.y-5,coords.z-1, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-2,coords.y-5,coords.z-1, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x,coords.y-5,coords.z-2, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-1,coords.y-5,coords.z-2, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-2,coords.y-5,coords.z-2, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-2,coords.y-5,coords.z-1, BlockID.spacescraft_sulphuric_acid_still);
    
        World.setBlock(coords.x, coords.y-4, coords.z,BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-1,coords.y-4,coords.z, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-2,coords.y-4,coords.z,BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x,coords.y-4,coords.z-1, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-1,coords.y-4,coords.z-1, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-2,coords.y-4,coords.z-1, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x,coords.y-4,coords.z-2, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-1,coords.y-4,coords.z-2, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-2,coords.y-4,coords.z-2, BlockID.spacescraft_sulphuric_acid_still); World.setBlock(coords.x-2,coords.y-4,coords.z-1, BlockID.spacescraft_sulphuric_acid_still);
}
        
    }
        
    }
    
}
    );
    
Translation.addTranslation("Venus stick(§aCREATIVE)", {
ru: "Трость Венеры(§aКРЕАТИВНАЯ)"
});
  IDRegistry.genItemID("venus_stick"); 
Item.createItem("venus_stick", "Venus stick(§aCREATIVE)", {name: "venus_stick", meta: 0}, {stack: 64});


Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(item.id == ItemID.venus_stick){
Dimensions.transfer(player, Venus.id); } 
 
});