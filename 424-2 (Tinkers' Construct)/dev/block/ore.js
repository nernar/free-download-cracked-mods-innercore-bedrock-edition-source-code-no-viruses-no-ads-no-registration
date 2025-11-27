IDRegistry.genBlockID("ore_copper");
Block.createBlock("ore_copper", [{name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_copper, "stone", 1);
Block.setDestroyTime(BlockID.ore_copper, 5);

IDRegistry.genBlockID("ore_tin");
Block.createBlock("ore_tin", [{name: "Tin Ore", texture: [["ore_tin", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_tin, "stone", 1);
Block.setDestroyTime(BlockID.ore_tin, 5);

IDRegistry.genBlockID("ore_aluminum");
Block.createBlock("ore_aluminum", [{name: "Aluminum Ore", texture: [["ore_aluminum", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_aluminum, "stone", 1);
Block.setDestroyTime(BlockID.ore_aluminum, 5);

IDRegistry.genBlockID("ore_ardite");
Block.createBlock("ore_ardite", [{name: "Ardite Ore", texture: [["ore_ardite", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_ardite, "stone", 1);
Block.setDestroyTime(BlockID.ore_ardite, 5);

IDRegistry.genBlockID("ore_cobalt");
Block.createBlock("ore_cobalt", [{name: "Cobalt Ore", texture: [["ore_cobalt", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ore_cobalt, "stone", 1);
Block.setDestroyTime(BlockID.ore_cobalt, 5);


Tinco.createBerry("iron", "Iron Oreberry", true);
Tinco.createBerry("gold", "Gold Oreberry", true);
Tinco.createBerry("copper", "Copper Oreberry", true);
Tinco.createBerry("tin", "Tin Oreberry", true);
Tinco.createBerry("aluminum", "Aluminum Oreberry", true);
Tinco.createBerry("xp", "Essence Berry");


Callback.addCallback("PreLoaded", function(){

	const Ore = {
		copper: "GenerateChunkUnderground",
		tin: "GenerateChunkUnderground",
		aluminum: "GenerateChunkUnderground",
		ardite: "GenerateNetherChunk",
		cobalt: "GenerateNetherChunk"
	};

	const Cfg = {count: 0, size: 0, minY: 0, maxY: 0};

	for(let key in Ore){
		Cfg.count = __config__.getNumber("OreGen." + key + ".count") | 0;
		Cfg.size = __config__.getNumber("OreGen." + key + ".size") | 0;
		Cfg.minY = __config__.getNumber("OreGen." + key + ".minY") | 0;
		Cfg.maxY = __config__.getNumber("OreGen." + key + ".maxY") | 0;
		if(Cfg.count){
			Callback.addCallback(Ore[key], function(x, z){
				let coords;
				for(let i = Cfg.count; i--;){
					coords = GenerationUtils.randomCoords(x, z, Cfg.minY, Cfg.maxY);
					GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["ore_" + key], 0, Cfg.size);
				}
			});
		}
	}

	const Berry = ["iron", "gold", "copper", "tin", "aluminum", "xp"];

	for(let i = Berry.length; i--;){
		Cfg.count = __config__.getNumber("BerryGen." + Berry[i] + ".count") | 0;
		Cfg.size = __config__.getNumber("BerryGen." + Berry[i] + ".size") | 0;
		Cfg.minY = __config__.getNumber("BerryGen." + Berry[i] + ".minY") | 0;
		Cfg.maxY = __config__.getNumber("BerryGen." + Berry[i] + ".maxY") | 0;
		if(Cfg.count){
			Callback.addCallback("GenerateChunkUnderground", function(x, z){
				let coords;
				for(let j = Cfg.count; j--;){
					coords = GenerationUtils.randomCoords(x, z, Cfg.minY, Cfg.maxY);
					GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["berry_" + Berry[i]], 2, Cfg.size);
				}
			});
		}
	}


	Recipes.addFurnace(BlockID.ore_copper, ItemID.ingot_copper);
	Recipes.addFurnace(BlockID.ore_tin, ItemID.ingot_tin);
	Recipes.addFurnace(BlockID.ore_aluminum, ItemID.ingot_aluminum);
	Recipes.addFurnace(BlockID.ore_ardite, ItemID.ingot_ardite);
	Recipes.addFurnace(BlockID.ore_cobalt, ItemID.ingot_cobalt);
	Recipes.addFurnace(ItemID.berry_iron, ItemID.nugget_iron);
	Recipes.addFurnace(ItemID.berry_gold, 371);
	Recipes.addFurnace(ItemID.berry_copper, ItemID.nugget_copper);
	Recipes.addFurnace(ItemID.berry_tin, ItemID.nugget_tin);
	Recipes.addFurnace(ItemID.berry_aluminum, ItemID.nugget_aluminum);

});