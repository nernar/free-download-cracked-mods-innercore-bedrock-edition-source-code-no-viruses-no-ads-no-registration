const UniqueGen = { 
    randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight){
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 220;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: z = chunkZ * 16 + random.nextInt(16)
        }
    }, 
    generateOre: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    }, 
    generateOreInDimension: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, id, data, params.size, params.mode, params.check);
        }
    }
}

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Beneath.id) return;
UniqueGen.generateOreInDimension(16, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(5, 10),
 minY: 3,
 maxY: 126,
 size: randomInt(5, 17),
 mode: true,
 check: [1]
}); 

UniqueGen.generateOreInDimension(15, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(10, 21),
 minY: 3,
 maxY: 126,
 size: randomInt(5, 13),
 mode: true,
 check: [1]
}); 

UniqueGen.generateOreInDimension(21, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(6, 18),
 minY: 3,
 maxY: 126,
 size: randomInt(4, 9),
 mode: true,
 check: [1]
}); 

UniqueGen.generateOreInDimension(14, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 19),
 minY: 3,
 maxY: 126,
 size: randomInt(3, 7),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(73, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(0, 23),
 minY: 3,
 maxY: 126,
 size: randomInt(3, 7),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(56, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(0, 9),
 minY: 3,
 maxY: 126,
 size: randomInt(3, 14),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(129, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(0, 9),
 minY: 3,
 maxY: 126,
 size: randomInt(1, 7),
 mode: true,
 check: [1]
});

//misc
UniqueGen.generateOreInDimension(13, 0, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 11),
 minY: 3,
 maxY: 126,
 size: randomInt(2, 21),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(1, 1, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 15),
 minY: 3,
 maxY: 126,
 size: randomInt(4, 19),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(1, 5, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 15),
 minY: 3,
 maxY: 126,
 size: randomInt(0, 19),
 mode: true,
 check: [1]
});

UniqueGen.generateOreInDimension(1, 3, chunkX, chunkZ, random, {
 veinCounts: randomInt(1, 15),
 minY: 3,
 maxY: 126,
 size: randomInt(0, 19),
 mode: true,
 check: [1]
});
});
