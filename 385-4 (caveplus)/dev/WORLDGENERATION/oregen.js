//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

var OreGenerator = {
	copper: {
		enabled: __config__.getBool("copperore.enabled"),
		count: __config__.getNumber("copperore.count"),
		size: __config__.getNumber("copperore.size"),
		minHeight: __config__.getNumber("copperore.minHeight"),
		maxHeight: __config__.getNumber("copperore.maxHeight")
	},
  zinc: {
		enabled: __config__.getBool("zincore.enabled"),
		count: __config__.getNumber("zincore.count"),
		size: __config__.getNumber("zincore.size"),
		minHeight: __config__.getNumber("zincore.minHeight"),
		maxHeight: __config__.getNumber("zincore.maxHeight")
	},
  tin: {
		enabled: __config__.getBool("tinore.enabled"),
		count: __config__.getNumber("tinore.count"),
		size: __config__.getNumber("tinore.size"),
		minHeight: __config__.getNumber("tinore.minHeight"),
		maxHeight: __config__.getNumber("tinore.maxHeight")
	},
  salt: {
		enabled: __config__.getBool("saltore.enabled"),
		count: __config__.getNumber("saltore.count"),
		size: __config__.getNumber("saltore.size"),
		minHeight: __config__.getNumber("saltore.minHeight"),
		maxHeight: __config__.getNumber("saltore.maxHeight")
	},
	titanium: {
		enabled: __config__.getBool("titaniumore.enabled"),
		count: __config__.getNumber("titaniumore.count"),
		size: __config__.getNumber("titaniumore.size"),
		minHeight: __config__.getNumber("titaniumore.minHeight"),
		maxHeight: __config__.getNumber("titaniumore.maxHeight")
	},
	bismuth: {
		enabled: __config__.getBool("bismuthore.enabled"),
		count: __config__.getNumber("bismuthore.count"),
		size: __config__.getNumber("bismuthore.size"),
		minHeight: __config__.getNumber("bismuthore.minHeight"),
		maxHeight: __config__.getNumber("bismuthore.maxHeight")
	},
	plumbum: {
		enabled: __config__.getBool("plumbumore.enabled"),
		count: __config__.getNumber("plumbumore.count"),
		size: __config__.getNumber("plumbumore.size"),
		minHeight: __config__.getNumber("plumbumore.minHeight"),
		maxHeight: __config__.getNumber("plumbumore.maxHeight")
	},
	lithium: {
		enabled: __config__.getBool("lithiumore.enabled"),
		count: __config__.getNumber("lithiumore.count"),
		size: __config__.getNumber("lithiumore.size"),
		minHeight: __config__.getNumber("lithiumore.minHeight"),
		maxHeight: __config__.getNumber("lithiumore.maxHeight")
	},
	amber: {
		enabled: __config__.getBool("amberore.enabled"),
		count: __config__.getNumber("amberore.count"),
		size: __config__.getNumber("amberore.size"),
		minHeight: __config__.getNumber("amberore.minHeight"),
		maxHeight: __config__.getNumber("amberore.maxHeight")
	},
	ruby: {
		enabled: __config__.getBool("rubyore.enabled"),
		count: __config__.getNumber("rubyore.count"),
		size: __config__.getNumber("rubyore.size"),
		minHeight: __config__.getNumber("rubyore.minHeight"),
		maxHeight: __config__.getNumber("rubyore.maxHeight")
	},
	sapphire: {
		enabled: __config__.getBool("sapphireore.enabled"),
		count: __config__.getNumber("sapphireore.count"),
		size: __config__.getNumber("sapphireore.size"),
		minHeight: __config__.getNumber("sapphireore.minHeight"),
		maxHeight: __config__.getNumber("sapphireore.maxHeight")
	},


	addFlag: function(name, flag){
		if(OreGenerator[name].enabled){
			OreGenerator[name].enabled = !Flags.addFlag(flag);
		}
	}
}

OreGenerator.addFlag("copper", "oreGenCopper");
OreGenerator.addFlag("zinc", "oreGenZinc");
OreGenerator.addFlag("tin", "oreGenTin");
OreGenerator.addFlag("salt", "oreGenSalt");
OreGenerator.addFlag("titanium", "oreGenTitanium");
OreGenerator.addFlag("plumbum", "oreGenPlumbum");
OreGenerator.addFlag("lithium", "oreGenLithium");
OreGenerator.addFlag("bismuth", "oreGenBismuth");
OreGenerator.addFlag("ruby", "oreGenRuby");
OreGenerator.addFlag("sapphire", "oreGenSapphire");
OreGenerator.addFlag("amber", "oreGenAmber");

Callback.addCallback("PostLoaded", function(){
	if(OreGenerator.copper.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.copper.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.copper.minHeight, OreGenerator.copper.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.copperore, 0, OreGenerator.copper.size);
			}
		});
	}
  if(OreGenerator.zinc.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.zinc.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.zinc.minHeight, OreGenerator.zinc.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.zincore, 0, OreGenerator.zinc.size);
			}
		});
	}
  if(OreGenerator.tin.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.tin.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.tin.minHeight, OreGenerator.tin.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.tinore, 0, OreGenerator.tin.size);
			}
		});
	}
  if(OreGenerator.salt.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.salt.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.salt.minHeight, OreGenerator.salt.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.saltore, 0, OreGenerator.salt.size);
			}
		});
	}
	if(OreGenerator.titanium.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.titanium.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.titanium.minHeight, OreGenerator.titanium.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.titaniumore, 0, OreGenerator.titanium.size);
			}
		});
	}
	if(OreGenerator.bismuth.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.bismuth.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.bismuth.minHeight, OreGenerator.bismuth.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.bismuthore, 0, OreGenerator.bismuth.size);
			}
		});
	}
	if(OreGenerator.lithium.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.lithium.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.lithium.minHeight, OreGenerator.lithium.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lithiumore, 0, OreGenerator.lithium.size);
			}
		});
	}
	if(OreGenerator.plumbum.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.plumbum.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.plumbum.minHeight, OreGenerator.plumbum.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.plumbumore, 0, OreGenerator.plumbum.size);
			}
		});
	}
	if(OreGenerator.ruby.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.ruby.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.ruby.minHeight, OreGenerator.ruby.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rubyore, 0, OreGenerator.ruby.size);
			}
		});
	}
	if(OreGenerator.sapphire.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.sapphire.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.sapphire.minHeight, OreGenerator.sapphire.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.sapphireore, 0, OreGenerator.sapphire.size);
			}
		});
	}
	if(OreGenerator.amber.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < OreGenerator.amber.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, OreGenerator.amber.minHeight, OreGenerator.amber.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.amberore, 0, OreGenerator.amber.size);
			}
		});
	}
});
