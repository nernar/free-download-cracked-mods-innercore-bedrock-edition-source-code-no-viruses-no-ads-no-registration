IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
	{name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone", 2, true);
Block.setDestroyTime(BlockID.oreCopper, 3);
Block.setDestroyLevel("oreCopper", 2);


IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
	{name: "Tin Ore", texture: [["ore_tin", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreTin, "stone", 2, true);
Block.setDestroyTime(BlockID.oreTin, 3);
Block.setDestroyLevel("oreTin", 2);


IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
	{name: "Silver Ore", texture: [["ore_silver", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilver, "stone", 3, true);
Block.setDestroyTime(BlockID.oreSilver, 3);
Block.setDestroyLevel("oreSilver", 3);


IDRegistry.genBlockID("oreTungsten");
Block.createBlock("oreTungsten", [
	{name: "Tungsten Ore", texture: [["ore_tungsten", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreTungsten, "stone", 3, true);
Block.setDestroyTime(BlockID.oreTungsten, 3);
Block.setDestroyLevel("oreTungsten", 3);


IDRegistry.genBlockID("oreNikolite");
Block.createBlock("oreNikolite", [
	{name: "Nikolite Ore", texture: [["ore_nikolite", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreNikolite, "stone", 3, true);
Block.setDestroyTime(BlockID.oreNikolite, 3);
Block.registerDropFunction("oreNikolite", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.nikolite, random(4, 5) + random(0, enchant.fortune), 0]];
		ToolAPI.dropOreExp(coords, 2, 5, enchant.experience);
		return drop;
	}
	return [];
}, 3);


IDRegistry.genBlockID("oreRuby");
Block.createBlock("oreRuby", [
	{name: "Ruby Ore", texture: [["ore_ruby", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreRuby, "stone", 3, true);
Block.setDestroyTime(BlockID.oreRuby, 3);
Block.registerDropFunction("oreRuby", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		var drop = [[ItemID.gemRuby, random(1, 3), 0]];
		return ToolAPI.fortuneDropModifier(drop, enchant.fortune);
	}
	return [];
}, 3);


IDRegistry.genBlockID("oreSapphire");
Block.createBlock("oreSapphire", [
	{name: "Sapphire Ore", texture: [["ore_sapphire", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSapphire, "stone", 3, true);
Block.setDestroyTime(BlockID.oreSapphire, 3);
Block.registerDropFunction("oreSapphire", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		var drop = [[ItemID.gemSapphire, random(1, 3), 0]];
		return ToolAPI.fortuneDropModifier(drop, enchant.fortune);
	}
	return [];
}, 3);


IDRegistry.genBlockID("oreGreenSapphire");
Block.createBlock("oreGreenSapphire", [
	{name: "Sapphire Ore", texture: [["ore_green_sapphire", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreGreenSapphire, "stone", 3, true);
Block.setDestroyTime(BlockID.oreGreenSapphire, 3);
Block.registerDropFunction("oreGreenSapphire", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		var drop = [[ItemID.gemGreenSapphire, random(1, 3), 0]];
		return ToolAPI.fortuneDropModifier(drop, enchant.fortune);
	}
	return [];
}, 3);


var OreGeneration = {
	oreGenCopper: __config__.getBool("ore_gen.copper"),
	oreGenTin: __config__.getBool("ore_gen.tin"),
	oreGenSilver: __config__.getBool("ore_gen.silver"),
	oreGenTungsten: __config__.getBool("ore_gen.tungsten"),
	oreGenRuby: __config__.getBool("ore_gen.gems"),
	oreGenSapphire: __config__.getBool("ore_gen.gems"),
	oreGenGreenSapphire: __config__.getBool("ore_gen.gems"),
}

Callback.addCallback("PostLoaded", function(){
	for(var flag in OreGeneration){
		if(OreGeneration[flag]){
			OreGeneration[flag] = !Flags.addFlag(flag);
		}
	}
	if(OreGeneration.oreGenCopper){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < 10; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 70);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCopper, 0, random(6, 15));
			}
		});
	}
	if(OreGeneration.oreGenTin){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < 10; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 52);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreTin, 0, random(4, 10));
			}
		});
	}
	if(OreGeneration.oreGenSilver){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < 4; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 32);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilver, 0, random(4, 9));
			}
		});
	}
	if(OreGeneration.oreGenTungsten){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 16);
			GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreTungsten, 0, random(2, 5));
		});
	}
	if(OreGeneration.oreGenRuby){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < 8; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 48);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreRuby, 0, random(2, 6));
			}
		});
	}
	if(OreGeneration.oreGenSapphire){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < 8; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 48);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSapphire, 0, random(2, 6));
			}
		});
	}
	if(OreGeneration.oreGenGreenSapphire){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < 8; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 48);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreGreenSapphire, 0, random(2, 6));
			}
		});
	}
	Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
		for(var i = 0; i < 8; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 20);
			GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreNikolite, 0, random(4, 8));
		}
	});
});