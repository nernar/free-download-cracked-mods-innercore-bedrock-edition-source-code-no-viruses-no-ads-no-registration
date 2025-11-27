IDRegistry.genBlockID("ore");

Block.createBlock("ore", [{name:"Ирумидиевая Руда", texture: [["ore", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.ore, "stone");
Block.setDestroyTime(BlockID.ore, 10);
Block.setDestroyLevel(BlockID.ore, 2);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 125);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ore, 0, 6);
    }
}
);