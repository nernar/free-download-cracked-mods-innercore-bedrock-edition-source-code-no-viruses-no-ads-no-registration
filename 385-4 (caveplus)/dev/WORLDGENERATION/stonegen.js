//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//stonegen
var StoneGenerator = {
	slate1: {
		enabled: __config__.getBool("slateblue.enabled"),
		count: __config__.getNumber("slateblue.count"),
		size: __config__.getNumber("slateblue.size"),
		minHeight: __config__.getNumber("slateblue.minHeight"),
		maxHeight: __config__.getNumber("slateblue.maxHeight")
	},
  slate2: {
		enabled: __config__.getBool("slate.enabled"),
		count: __config__.getNumber("slate.count"),
		size: __config__.getNumber("slate.size"),
		minHeight: __config__.getNumber("slate.minHeight"),
		maxHeight: __config__.getNumber("slate.maxHeight")
	},
  greywacke1: {
		enabled: __config__.getBool("greywacke.enabled"),
		count: __config__.getNumber("greywacke.count"),
		size: __config__.getNumber("greywacke.size"),
		minHeight: __config__.getNumber("greywacke.minHeight"),
		maxHeight: __config__.getNumber("greywacke.maxHeight")
	},
  basalt1: {
		enabled: __config__.getBool("basalt.enabled"),
		count: __config__.getNumber("basalt.count"),
		size: __config__.getNumber("basalt.size"),
		minHeight: __config__.getNumber("basalt.minHeight"),
		maxHeight: __config__.getNumber("basalt.maxHeight")
	},
  dacite1: {
		enabled: __config__.getBool("dacite.enabled"),
		count: __config__.getNumber("dacite.count"),
		size: __config__.getNumber("dacite.size"),
		minHeight: __config__.getNumber("dacite.minHeight"),
		maxHeight: __config__.getNumber("dacite.maxHeight")
	},
  lime1: {
		enabled: __config__.getBool("limestone.enabled"),
		count: __config__.getNumber("limestone.count"),
		size: __config__.getNumber("limestone.size"),
		minHeight: __config__.getNumber("limestone.minHeight"),
		maxHeight: __config__.getNumber("limestone.maxHeight")
	},
  komatiite1: {
		enabled: __config__.getBool("komatiite.enabled"),
		count: __config__.getNumber("komatiite.count"),
		size: __config__.getNumber("komatiite.size"),
		minHeight: __config__.getNumber("komatiite.minHeight"),
		maxHeight: __config__.getNumber("komatiite.maxHeight")
	},
	syenite1: {
		enabled: __config__.getBool("syenite.enabled"),
		count: __config__.getNumber("syenite.count"),
		size: __config__.getNumber("syenite.size"),
		minHeight: __config__.getNumber("syenite.minHeight"),
		maxHeight: __config__.getNumber("syenite.maxHeight")
	},
	serpentinite1: {
		enabled: __config__.getBool("serpentinite.enabled"),
		count: __config__.getNumber("serpentinite.count"),
		size: __config__.getNumber("serpentinite.size"),
		minHeight: __config__.getNumber("serpentinite.minHeight"),
		maxHeight: __config__.getNumber("serpentinite.maxHeight")
	},
	rhyolite1: {
		enabled: __config__.getBool("rhyolite.enabled"),
		count: __config__.getNumber("rhyolite.count"),
		size: __config__.getNumber("rhyolite.size"),
		minHeight: __config__.getNumber("rhyolite.minHeight"),
		maxHeight: __config__.getNumber("rhyolite.maxHeight")
	},
	addFlag: function(name, flag){
		if(StoneGenerator[name].enabled){
			StoneGenerator[name].enabled = !Flags.addFlag(flag);
		}
	}
}

StoneGenerator.addFlag("slate1", "oreGenSlate");
StoneGenerator.addFlag("slate2", "oreGenSlategrey");
StoneGenerator.addFlag("greywacke1", "oreGenGreywacke");
StoneGenerator.addFlag("basalt1", "oreGenBasalt");
StoneGenerator.addFlag("dacite1", "oreGenDacite");
StoneGenerator.addFlag("lime1", "oreGenLimestone");
StoneGenerator.addFlag("komatiite1", "oreGenKomatiite");
StoneGenerator.addFlag("syenite1", "oreGenSyenite");
StoneGenerator.addFlag("serpentinite1", "oreGenSerpentinite");
StoneGenerator.addFlag("rhyolite1", "oreGenRhyolite");

Callback.addCallback("PostLoaded", function(){
	if(StoneGenerator.slate1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.slate1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.slate1.minHeight, StoneGenerator.slate1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.slateblue, 0, StoneGenerator.slate1.size);
			}
		});
	}
  if(StoneGenerator.slate2.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.slate2.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.slate2.minHeight, StoneGenerator.slate2.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.slate, 0, StoneGenerator.slate2.size);
			}
		});
	}
  if(StoneGenerator.greywacke1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.greywacke1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.greywacke1.minHeight, StoneGenerator.greywacke1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.greywacke, 0, StoneGenerator.greywacke1.size);
			}
		});
	}
  if(StoneGenerator.basalt1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.basalt1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.basalt1.minHeight, StoneGenerator.basalt1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.basalt, 0, StoneGenerator.basalt1.size);
			}
		});
	}
  if(StoneGenerator.dacite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.dacite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.dacite1.minHeight, StoneGenerator.dacite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.dacite, 0, StoneGenerator.dacite1.size);
			}
		});
	}
  if(StoneGenerator.lime1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.lime1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.lime1.minHeight, StoneGenerator.lime1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.limestone, 0, StoneGenerator.lime1.size);
			}
		});
	}
  if(StoneGenerator.komatiite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.komatiite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.komatiite1.minHeight, StoneGenerator.komatiite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.komatiite, 0, StoneGenerator.komatiite1.size);
			}
		});
	}
	if(StoneGenerator.syenite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.syenite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.syenite1.minHeight, StoneGenerator.syenite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.syenite, 0, StoneGenerator.syenite1.size);
			}
		});
	}
	if(StoneGenerator.serpentinite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.serpentinite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.serpentinite1.minHeight, StoneGenerator.serpentinite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.serpentinite, 0, StoneGenerator.serpentinite1.size);
			}
		});
	}
	if(StoneGenerator.rhyolite1.enabled){
		Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
			for(var i = 0; i < StoneGenerator.rhyolite1.count; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, StoneGenerator.rhyolite1.minHeight, StoneGenerator.rhyolite1.maxHeight);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.rhyolite, 0, StoneGenerator.rhyolite1.size);
			}
		});
	}
});
