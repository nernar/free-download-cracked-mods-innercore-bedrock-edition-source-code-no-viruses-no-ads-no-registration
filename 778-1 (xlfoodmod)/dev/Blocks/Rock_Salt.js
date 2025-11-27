Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 1.5,
    explosionres: 1.5,
    lightopacity: 15,
    renderlayer: 2,
    sound: "stone"
}, "rock_salt");

IDRegistry.genBlockID("rock_salt");
Block.createBlock("rock_salt", [{name: "Rock Salt", texture: [["rock_salt", 0]], inCreative: true}], "rock_salt");
ToolAPI.registerBlockMaterial(BlockID.rock_salt, "stone", 1, true);
Block.setDestroyLevel("rock_salt", 1);
Item.addCreativeGroup("XLBlocks", Translation.translate("XL Blocks"),[
    BlockID.rock_salt
]);

Block.registerDropFunction("rock_salt", function (coords, id, data, level, enchant){
    if(level >= 1){
		var drop = [[ItemID.salt, randomInt(1, 4), 0]];
		ToolAPI.dropOreExp(coords, 0, 2, enchant.experience);
		return drop;
	}
	return null;
}, 3);
ToolLib.addBlockDropOnExplosion("rock_salt");

Callback.addCallback("PostLoaded", function(){
	Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
		for(var i = 1; i <= 20; i++){
		    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 127);
		    GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rock_salt, 0, randomInt(1, 8));
		}
	});
});