var GM = Block.createSpecialType({
    destroytime: 1,
    explosionres: 1
});


var BLOCK_TYPE_GRASS = Block.createSpecialType({
    base: 6,
    solid: false,
    destroytime: 0.001,
    explosionres: 1,
    opaque: false
});


IDRegistry.genBlockID("luxtarore");
Block.createBlock("luxtarore", [{name: "Лукстарровая руда", texture: [["luxtarore", 0], ["luxtarore", 0], ["luxtarore", 0], ["luxtarore", 0], ["luxtarore", 0], ["luxtarore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.luxtarore, "stone", 2, true);
Block.setDestroyLevel (BlockID.luxtarore, 3) 
Block.registerDropFunction("luxtarore", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.luxtarore, 1, 0]]
	}
	return [];
}, 1);


IDRegistry.genBlockID("darkhamore");
Block.createBlock("darkhamore", [{name: "Даркэмовая руда", texture: [["darkhamore", 0], ["darkhamore", 0], ["darkhamore", 0], ["darkhamore", 0], ["darkhamore", 0], ["darkhamore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.darkhamore, "stone", 2, true);
Block.setDestroyLevel (BlockID.darkhamore, 3) 
Block.registerDropFunction("darkhamore", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.darkhamore, 1, 0]]
	}
	return [];
}, 1);



IDRegistry.genBlockID("aquaturaore");
Block.createBlock("aquaturaore", [{name: "Акватуровая руда", texture: [["aquaturaore", 0], ["aquaturaore", 0], ["aquaturaore", 0], ["aquaturaore", 0], ["aquaturaore", 0], ["aquaturaore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.aquaturaore, "stone", 2, true);
Block.setDestroyLevel (BlockID.aquaturaore, 4) 
Block.registerDropFunction("aquaturaore", function(coords, blockID, blockData, level){
	if (level > 3){
		return [[BlockID.aquaturaore, 1, 0]]
	}
	return [];
}, 1);



IDRegistry.genBlockID("flisotuachewnore");
Block.createBlock("flisotuachewnore", [{name: "Флисотуачеуновая руда", texture: [["flisotuachewnore", 0], ["flisotuachewnore", 0], ["flisotuachewnore", 0], ["flisotuachewnore", 0], ["flisotuachewnore", 0], ["flisotuachewnore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.flisotuachewnore, "stone", 2, true);
Block.setDestroyLevel (BlockID.flisotuachewnore, 2) 
Block.registerDropFunction("flisotuachewnore", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.flisotuachewn, 1, 0]]
	}
	return [];
}, 1);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.luxtarore, 0, 5);
    }
}
)



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.darkhamore, 0, 3);
    }
}
)




Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.aquaturaore, 0, 2);
    }
}
)



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<2;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.flisotuachewnore, 0, 15);
    }
}
)






































