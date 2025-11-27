//MOD by JefriSonYT

IDRegistry.genBlockID("cookieOre");  

Block.createBlock("cookieOre", [ {name: "Cookie ore", texture: [["cookieore", 0], ["cookieore", 0], ["cookieore", 0], ["cookieore", 0], ["cookieore", 0], ["cookieore", 0]], inCreative: true} ]) 


Block.registerDropFunction("cookieOre", function(coords, id, data, diggingLevel, toolLevel){ return [[4, 1, data], [357, 1, 0]];  
}); 


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.cookieOre, 0, 6);
    }
}
)