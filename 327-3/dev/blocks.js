IDRegistry.genBlockID("vibraniumore");
Block.createBlock("vibraniumore", [{name: "Vibranium ore", texture: [["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0]], inCreative: true}]);



IDRegistry.genBlockID("kryptoniteore");
Block.createBlock("kryptoniteore", [{name: "Kryptonite ore", texture: [["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0]], inCreative: true}]);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.vibraniumore, 0, 6);
    }
}
)



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.kryptoniteore, 0, 3);
    }
}
)



Block.registerDropFunction("kryptoniteore", function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.krypton, 2, 0]);
 return drop;
});



Block.registerDropFunction("vibraniumore", function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.vibranium, 3, 0]);
 return drop;
});


































