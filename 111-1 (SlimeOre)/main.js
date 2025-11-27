IDRegistry.genBlockID("slimeore");  

Block.createBlock("slimeore", [ {name: "Slime ore", texture: [["slimeore", 0]], inCreative: true} ]) 


Block.registerDropFunction("slimeore", function(coords, id, data, diggingLevel, toolLevel){ return [[BlockID.slimeore, 1, 0]];  
}); 


Recipes.addFurnace(BlockID.slimeore, 341, 0);


Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.slimeore, 0, 6);
    }
}
)




