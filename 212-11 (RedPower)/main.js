/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 30
*/



// file: header.js

// libraries
IMPORT("flags");
IMPORT("ToolLib");
IMPORT("energylib");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("BackpackAPI");
IMPORT("StorageInterface");

// constants
var GUI_SCALE = 3.2;

// API
Player.getArmorSlot = ModAPI.requireGlobal("Player.getArmorSlot");
Player.setArmorSlot = ModAPI.requireGlobal("Player.setArmorSlot");
var nativeDropItem = ModAPI.requireGlobal("Level.dropItem");
var MobEffect = Native.PotionEffect;
var BlockSide = Native.BlockSide;
var EntityType = Native.EntityType;

function random(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// blutricity
var BT = EnergyTypeRegistry.assureEnergyType("Bu", 2);

ChargeItemRegistry.registerFlashItem(ItemID.nikolite, "Bu", 500, 0);




// file: translation.js

﻿// Ores
Translation.addTranslation("Copper Ore", {ru: "Медная руда", es: "Mineral de Cobre", pt: "Minério de Cobre", zh: "铜矿石"});
Translation.addTranslation("Tin Ore", {ru: "Оловянная руда", es: "Mineral de Estaño", pt: "Minério de Estanho", zh: "锡矿石"});
Translation.addTranslation("Silver Ore", {ru: "Серебряная руда", es: "Mineral de Plata", pt: "Minério de Prata", zh: "银矿石"});
Translation.addTranslation("Tungsten Ore", {ru: "Вольфрамовая руда", es: "Mineral de Tungsteno", zh: "红宝石矿石"});
Translation.addTranslation("Ruby Ore", {ru: "Рубиновая руда"});
Translation.addTranslation("Sapphire Ore", {ru: "Сапфировая руда"});
Translation.addTranslation("Green Sapphire Ore", {ru: "Руда зелёного сапфира"});
Translation.addTranslation("Nikolite Ore", {ru: "Николитовая руда"});

// Blocks
//Translation.addTranslation("Bronze Block", {ru: "Бронзовый блок", es: "Bloque de Bronce", pt: "Bloco de Bronze", zh: "青铜块"});
Translation.addTranslation("Copper Block", {ru: "Медный блок", es: "Bloque de Cobre", pt: "Bloco de Cobre", zh: "铜块"});
Translation.addTranslation("Tin Block", {ru: "Оловянный блок", es: "Bloque de Estaño", pt: "Bloco de Estanho", zh: "锡矿石"});
Translation.addTranslation("Silver Block", {ru: "Серебряный блок", es: "Bloque de Plata", pt: "Bloco de Prata", zh: "银块"});
//Translation.addTranslation("Tungsten Block", {ru: "Вольфрамовый блок", es: "Bloque de Tungsteno", zh: "钨块"});
Translation.addTranslation("Ruby Block", {ru: "Рубиновый блок"});
Translation.addTranslation("Sapphire Block", {ru: "Сапфировый блок"});
Translation.addTranslation("Green Sapphire Block", {ru: "Блок зелёного сапфира"});
Translation.addTranslation("Nikolite Block", {ru: "Николитовый блок"});

Translation.addTranslation("Flax", {ru: "Лён"});
Translation.addTranslation("Indigo Flower", {ru: "Цветок индиго"});

Translation.addTranslation("Marble", {ru: "Мрамор"});
Translation.addTranslation("Marble Brick", {ru: "Мраморный кирпич"});
Translation.addTranslation("Marble Brick Slab", {ru: "Плита из мраморного кирпича"});

Translation.addTranslation("Basalt", {ru: "Базальт"});
Translation.addTranslation("Basalt Cobble", {ru: "Базальтовый булыжник"});
Translation.addTranslation("Basalt Brick", {ru: "Базальтовый кирпич"});
Translation.addTranslation("Chiseled Basalt Brick", {ru: "Резной базальтовый кирпич"});
Translation.addTranslation("Basalt Paver", {ru: "Базальтовая плитка"});
Translation.addTranslation("Basalt Cobble Slab", {ru: "Плита из базальтового булыжника"});
Translation.addTranslation("Basalt Brick Slab", {ru: "Плита из базальтового кирпича"});

// Lamps
Translation.addTranslation("White Lamp", {ru: "Белая лампа"});
Translation.addTranslation("Orange Lamp", {ru: "Оранжевая лампа"});
Translation.addTranslation("Magenta Lamp", {ru: "Пурпурная лампа"});
Translation.addTranslation("Light Blue Lamp", {ru: "Голубая лампа"});
Translation.addTranslation("Yellow Lamp", {ru: "Жёлтая лампа"});
Translation.addTranslation("Lime Lamp", {ru: "Лаймовая лампа"});
Translation.addTranslation("Pink Lamp", {ru: "Розовая лампа"});
Translation.addTranslation("Gray Lamp", {ru: "Серая лампа"});
Translation.addTranslation("Light Gray Lamp", {ru: "Светло-серая лампа"});
Translation.addTranslation("Cyan Lamp", {ru: "Бирюзовая лампа"});
Translation.addTranslation("Purple Lamp", {ru: "Фиолетовая лампа"});
Translation.addTranslation("Blue Lamp", {ru: "Синяя лампа"});
Translation.addTranslation("Brown Lamp", {ru: "Коричневая лампа"});
Translation.addTranslation("Green Lamp", {ru: "Зелёная лампа"});
Translation.addTranslation("Red Lamp", {ru: "Красная лампа"});
Translation.addTranslation("Black Lamp", {ru: "Чёрная лампа"});

Translation.addTranslation("White Inverted Lamp", {ru: "Белая инвертированная лампа"});
Translation.addTranslation("Orange Inverted Lamp", {ru: "Оранжевая инвертированная лампа"});
Translation.addTranslation("Magenta Inverted Lamp", {ru: "Пурпурная инвертированная лампа"});
Translation.addTranslation("Light Blue Inverted Lamp", {ru: "Голубая инвертированная лампа"});
Translation.addTranslation("Yellow Inverted Lamp", {ru: "Жёлтая инвертированная лампа"});
Translation.addTranslation("Lime Inverted Lamp", {ru: "Лаймовая инвертированная лампа"});
Translation.addTranslation("Pink Inverted Lamp", {ru: "Розовая инвертированная лампа"});
Translation.addTranslation("Gray Inverted Lamp", {ru: "Серая инвертированная лампа"});
Translation.addTranslation("Light Gray Inverted Lamp", {ru: "Светло-серая инвертированная лампа"});
Translation.addTranslation("Cyan Inverted Lamp", {ru: "Бирюзовая инвертированная лампа"});
Translation.addTranslation("Purple Inverted Lamp", {ru: "Фиолетовая инвертированная лампа"});
Translation.addTranslation("Blue Inverted Lamp", {ru: "Синяя инвертированная лампа"});
Translation.addTranslation("Brown Inverted Lamp", {ru: "Коричневая инвертированная лампа"});
Translation.addTranslation("Green Inverted Lamp", {ru: "Зелёная инвертированная лампа"});
Translation.addTranslation("Red Inverted Lamp", {ru: "Красная инвертированная лампа"});
Translation.addTranslation("Black Inverted Lamp", {ru: "Чёрная инвертированная лампа"});

// Machines
Translation.addTranslation("Smelter", {ru: "Плавильная печь"});
Translation.addTranslation("Blulectric Smelter", {ru: "Блутрическая плавильная печь"});
Translation.addTranslation("Blulectric Furnace", {ru: "Блутрическая печь"});

Translation.addTranslation("Solar Panel", {ru: "Солнечная панель", es: "Panel Solar", pt: "Painel Solar", zh: "太阳能发电机"});
Translation.addTranslation("Thermopile", {ru: "Термоэлемент"});

Translation.addTranslation("Battery Box", {ru: "Аккумулятор"});

Translation.addTranslation("Blue Alloy Wire", {ru: "Провод из синего сплава"});


// Items
Translation.addTranslation("Flax Seeds", {ru: "Семена льна"});
Translation.addTranslation("Indigo Dye", {ru: "Краситель индиго"});

Translation.addTranslation("Ruby", {ru: "Рубин"});
Translation.addTranslation("Sapphire", {ru: "Сапфир"});
Translation.addTranslation("Green Sapphire", {ru: "Зелёный сапфир"});
Translation.addTranslation("Nikolite", {ru: "Николит"});

Translation.addTranslation("Red Alloy Ingot", {ru: "Слиток красного сплава"});
Translation.addTranslation("Blue Alloy Ingot", {ru: "Слиток синего сплава"});
//Translation.addTranslation("Bronze Ingot", {ru: "Бронзовый слиток", es: "Lingote de Bronce", pt: "Lingote de Bronze", zh: "青铜锭"});
Translation.addTranslation("Tin Ingot", {ru: "Оловянный слиток", es: "Lingote de Estaño", pt: "Lingote de Estanho", zh: "锡锭"});
Translation.addTranslation("Copper Ingot", {ru: "Медный слиток", es: "Lingote de Cobre", pt: "Lingote de Cobre", zh: "铜锭"});
Translation.addTranslation("Silver Ingot", {ru: "Серебрянный слиток", es: "Lingote de Plata", pt: "Lingote de Prata", zh: "银锭"});
//Translation.addTranslation("Tungsten Ingot", {ru: "Вольфрамовый слиток", es: "Lingote de Tungsteno", zh: "钨锭"})

Translation.addTranslation("Silicon Boule", {ru: "Кремниевый монокристалл"});
Translation.addTranslation("Silicon Wafer", {ru: "Кремниевая плата"});
Translation.addTranslation("Red-Doped Wafer", {ru: "Красная плата"});
Translation.addTranslation("Blue-Doped Wafer", {ru: "Синяя плата"});

Translation.addTranslation("BT Battery", {ru: "Батарея"});

// Tools
Translation.addTranslation("Diamond Handsaw", {ru: "Алмазная ножовка"});

Translation.addTranslation("Athame", {ru: "Атам"});

Translation.addTranslation("Wood Sickle", {ru: "Деревянный серп"});
Translation.addTranslation("Stone Sickle", {ru: "Каменный серп"});
Translation.addTranslation("Iron Sickle", {ru: "Железный серп"});
Translation.addTranslation("Gold Sickle", {ru: "Золотой серп"});
Translation.addTranslation("Diamond Sickle", {ru: "Алмазный серп"});

Translation.addTranslation("Ruby Sword", {ru: "Рубиновый меч"});
Translation.addTranslation("Ruby Shovel", {ru: "Рубиновая лопата"});
Translation.addTranslation("Ruby Pickaxe", {ru: "Рубиновая кирка"});
Translation.addTranslation("Ruby Axe", {ru: "Рубиновый топор"});
Translation.addTranslation("Ruby Hoe", {ru: "Рубиновая мотыга"});
Translation.addTranslation("Ruby Sickle", {ru: "Рубиновый серп"});

Translation.addTranslation("Sapphire Sword", {ru: "Сапфировый меч"});
Translation.addTranslation("Sapphire Shovel", {ru: "Сапфировая лопата"});
Translation.addTranslation("Sapphire Pickaxe", {ru: "Сапфировая кирка"});
Translation.addTranslation("Sapphire Axe", {ru: "Сапфировый топор"});
Translation.addTranslation("Sapphire Hoe", {ru: "Сапфировая мотыга"});
Translation.addTranslation("Sapphire Sickle", {ru: "Сапфировый серп"});

Translation.addTranslation("Green Sapphire Sword", {ru: "Сапфировый меч"});
Translation.addTranslation("Green Sapphire Shovel", {ru: "Сапфировая лопата"});
Translation.addTranslation("Green Sapphire Pickaxe", {ru: "Сапфировая кирка"});
Translation.addTranslation("Green Sapphire Axe", {ru: "Сапфировый топор"});
Translation.addTranslation("Green Sapphire Hoe", {ru: "Сапфировая мотыга"});
Translation.addTranslation("Green Sapphire Sickle", {ru: "Сапфировый серп"});

Translation.addTranslation("Canvas", {ru: "Холст"});
Translation.addTranslation("Canvas Bag", {ru: "Холщёвая сумка"});
Translation.addTranslation("Seed Bag", {ru: "Мешочек для семян"});




// file: api/machine.js

var MachineRegistry = {
	machineIDs: {},

	isMachine: function(id){
		return this.machineIDs[id];
	},

	registerPrototype: function(id, Prototype, notElectric){
		// register ID
		this.machineIDs[id] = true;
		Prototype.id = id;
		
		// render functions
		if(Prototype.defaultValues && Prototype.defaultValues.isActive !== undefined){
			Prototype.defaultValues.meta = 0;
			if(!Prototype.init){
				Prototype.init = this.initModel;
			}
			if(!Prototype.activate){
				Prototype.activate = this.activateMachine;
			}
			if(!Prototype.deactivate){
				Prototype.deactivate = this.deactivateMachine;
			}
			if(!Prototype.destroy){
				Prototype.destroy = function(){
					BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
				}
			}
		}
		if(!notElectric){
			// wire connection
			ICRender.getGroup("bt-wire").add(id, -1);
			// setup energy value
			if (Prototype.defaultValues){
				Prototype.defaultValues.energy = 0;
			}
			else{
				Prototype.defaultValues = {
					energy: 0
				};
			}
			// setup functions
			if(!Prototype.getEnergyStorage){
				Prototype.getEnergyStorage = function(){
					return 0;
				};
			}
		}
		
		Block.setDestroyTime(id, 3.25);
		TileEntity.registerPrototype(id, Prototype);
		
		if(!notElectric){
			EnergyTileRegistry.addEnergyTypeForId(id, BT);
		}
	},

	// standart functions
	initModel: function(){
		TileRenderer.mapAtCoords(this.x, this.y, this.z, this.id, this.data.meta + (this.data.isActive? 4 : 0));
	},
	
	activateMachine: function(){
		if(!this.data.isActive){
			this.data.isActive = true;
			TileRenderer.mapAtCoords(this.x, this.y, this.z, this.id, this.data.meta + 4);
		}
	},
	
	deactivateMachine: function(){
		if(this.data.isActive){
			this.data.isActive = false;
			TileRenderer.mapAtCoords(this.x, this.y, this.z, this.id, this.data.meta);
		}
	},
	
	basicEnergyReceiveFunc: function(type, src){
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.get(energyNeed);
	},
	
	updateGuiHeader: function(gui, text){
		var header = gui.getWindow("header");
		header.contentProvider.drawing[1].text = Translation.translate(text);
	}
}




// file: api/integration.js

var IntegrationAPI = {
	registerPlant: function(id){
		plants.push(id);
	},
	registerSeeds: function(item, block){
		seeds[item] = block;
	}
}




// file: api/red_core.js

ModAPI.registerAPI("RedCore", {
	Machine: MachineRegistry,
	Ore: OreGeneration,
	Integration: IntegrationAPI,
	requireGlobal: function(command){
		return eval(command);
	}
});

Logger.Log("RedCore API shared.", "API");




// file: block/indigo_flower.js

Block.createSpecialType({
	base: 59,
	destroytime: 0,
	explosionres: 0,
	opaque: false,
	lightopacity: 0,
}, "plant");

var DIRT_TILES = {
	2: true,
	3: true,
	60: true
};

IDRegistry.genItemID("indigoFlower");
Item.createItem("indigoFlower", "Indigo Flower", {name: "indigo_flower", data: 0});

Item.registerUseFunction("indigoFlower", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && DIRT_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.indigoFlower);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShapeless({id: ItemID.indigoDye, count: 2, data: 0}, [{id: ItemID.indigoFlower, data: 0}]);
});

IDRegistry.genBlockID("indigoFlower");
Block.createBlock("indigoFlower", [
	{name: "Indigo Flower", texture: [["indigo_flower", 0]], inCreative: false}
]);
Block.setDestroyTime(BlockID.indigoFlower, 0);
TileRenderer.setPlantModel(BlockID.indigoFlower, 0, "indigo_flower", 0);

Block.registerDropFunction("indigoFlower", function(){
	return [[ItemID.indigoFlower, 1, 0]];
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.indigoFlower){
		World.destroyBlock(coords.x, coords.y + 1, coords.z);
	}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < 0.05){
		for(var i = 0; i < random(2, 8); i++){
			var c = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			c = GenerationUtils.findSurface(c.x, c.y, c.z);
			if(World.getBlockID(c.x, c.y, c.z) == 2 && World.getBlockID(c.x, c.y + 1, c.z) == 0){
				World.setBlock(c.x, c.y + 1, c.z, BlockID.indigoFlower, 0);
			}
		}
	}
});

// bone use
Callback.addCallback("ItemUse", function(coords, item, block){
	if(item.id == 351 && item.data == 15 && block.id == 2 && coords.side == 1){
		let x = coords.x + random(-3, 3), z = coords.z + random(-3, 3);
		if(World.getBlockID(x, coords.y, z) == 2 && World.getBlockID(x, coords.y + 1, z) == 0){
			World.setBlock(x, coords.y + 1, z, BlockID.indigoFlower, 0);
		}
	}
});




// file: block/flax.js

IDRegistry.genItemID("flaxSeeds");
Item.createItem("flaxSeeds", "Flax Seeds", {name: "flax_seeds"});

IDRegistry.genBlockID("flax");
Block.createBlock("flax", [
	{name: "Flax", texture: [["flax", 0]], inCreative: false},
	{name: "Flax", texture: [["flax", 1]], inCreative: false},
	{name: "Flax", texture: [["flax", 2]], inCreative: false},
	{name: "Flax", texture: [["flax", 3]], inCreative: false},
	{name: "Flax", texture: [["flax", 4]], inCreative: false},
	{name: "Flax", texture: [["flax", 5]], inCreative: false},
], "plant");
TileRenderer.setCropModel(BlockID.flax, 0, 1/8);
TileRenderer.setCropModel(BlockID.flax, 1, 3/8);
TileRenderer.setCropModel(BlockID.flax, 2, 3/4);
TileRenderer.setCropModel(BlockID.flax, 3, 15/16);
TileRenderer.setCropModel(BlockID.flax, 4);
TileRenderer.setCropModel(BlockID.flax, 5);

Block.registerDropFunction("flax", function(coords, blockID, blockData, level){
	if(World.getBlockID(coords.x, coords.y + 1, coords.z) == blockID){
		World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
	}
	if(blockData < 4){
		return [[ItemID.flaxSeeds, 1, 0]];
	}
	return [[ItemID.flaxSeeds, random(1, 3), 0], [287, random(1, 3), 0]];
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(Math.random() < 1/16 && (block.id == 31 && block.data == 0 || block.id == 175 && (block.data == 2 || block.data == 10))){
		World.drop(coords.x + .5, coords.y + .5, coords.z + .5, ItemID.flaxSeeds, 1, 0);
	}
	if(World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.flax){
		World.destroyBlock(coords.x, coords.y + 1, coords.z);
	}
});

Item.registerUseFunction("flaxSeeds", function(coords, item, block){
	if(block.id == 60 && coords.side == 1){
		if(World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
			World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.flax, 0);
			Player.decreaseCarriedItem(1);
		}
	}
});

function checkFarmland(x, y, z){
	let block = World.getBlock(x, y, z);
	if(block.id == 60){
		if(block.data < 7){
			return 0.25;
		}
		return 0.75;
	}
	return 0;
}

Block.setRandomTickCallback(BlockID.flax, function(x, y, z){
	let crop = World.getBlock(x, y, z);
	if(crop.data < 5){
		let block = World.getBlock(x, y-1, z)
		if(block.id != 60){
			World.destroyBlock(x, y, z, true);
		}
		else if(crop.data < 4 && World.getLightLevel(x, y, z) >= 9){
			let points = (block.data < 7) ? 2 : 4;
			points += checkFarmland(x-1, y, z-1);
			points += checkFarmland(x-1, y, z);
			points += checkFarmland(x-1, y, z+1);
			points += checkFarmland(x, y, z-1);
			points += checkFarmland(x, y, z+1);
			points += checkFarmland(x+1, y, z-1);
			points += checkFarmland(x+1, y, z);
			points += checkFarmland(x+1, y, z+1);
			let chance = 1/(parseInt(50/points) + 1);
			if(Math.random() < chance){
				if(crop.data < 3){
					World.setBlock(x, y, z, crop.id, crop.data + 1);
				} 
				else if(World.getBlockID(x, y+1, z) == 0){
					World.setBlock(x, y, z, crop.id, 4);
					World.setBlock(x, y+1, z, crop.id, 5);
				}
			}
		}
	} else if(World.getBlockID(x, y-1, z) != crop.id){
		World.destroyBlock(x, y, z, true);
	}
});

// bone use
Callback.addCallback("ItemUse", function(coords, item, block){
	if(item.id == 351 && item.data == 15 && block.id == BlockID.flax && block.data < 4){
		block.data += random(2, 3);
		if(block.data < 4){
			World.setBlock(coords.x, coords.y, coords.z, block.id, block.data);
		}
		else if(World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
			World.setBlock(coords.x, coords.y, coords.z, block.id, 4);
			World.setBlock(coords.x, coords.y + 1, coords.z, block.id, 5);
		} 
		Player.setCarriedItem(item.id, item.count - 1, item.data);
		for(let i = 0; i < 16; i++){
			let px = coords.x + Math.random();
			let pz = coords.z + Math.random();
			let py = coords.y + Math.random(); 
			Particles.addFarParticle(Native.ParticleType.happyVillager, px, py, pz, 0, 0, 0);
		}
	}
});




// file: block/basalt.js

Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 20,
	renderlayer: 3
}, "basalt");

IDRegistry.genBlockID("basalt");
Block.createBlock("basalt", [
	{name: "Basalt", texture: [["basalt", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basalt, "stone", 1, true);
Block.registerDropFunction("basalt", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[BlockID.basalt, 1, 0]];
		}
		return [[BlockID.basaltCobble, 1, 0]];
	}
	return [];
}, 1);


IDRegistry.genBlockID("basaltCobble");
Block.createBlock("basaltCobble", [
	{name: "Basalt Cobble", texture: [["basalt_cobble", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basaltCobble, "stone", 1, true);
Block.setDestroyLevel("basaltCobble", 1);

IDRegistry.genBlockID("basaltBrick");
Block.createBlock("basaltBrick", [
	{name: "Basalt Brick", texture: [["basalt_brick", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basaltBrick, "stone", 1, true);
Block.setDestroyLevel("basaltBrick", 1);

IDRegistry.genBlockID("basaltChiseled");
Block.createBlock("basaltChiseled", [
	{name: "Chiseled Basalt Brick", texture: [["basalt_chiseled", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basaltChiseled, "stone", 1, true);
Block.setDestroyLevel("basaltChiseled", 1);

IDRegistry.genBlockID("basaltPaver");
Block.createBlock("basaltPaver", [
	{name: "Basalt Paver", texture: [["basalt_paver", 0]], inCreative: true}
], "basalt");
ToolAPI.registerBlockMaterial(BlockID.basaltPaver, "stone", 1, true);
Block.registerDropFunction("basaltPaver", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[BlockID.basalt, 1, 0]];
		}
		return [[BlockID.basaltCobble, 1, 0]];
	}
	return [];
}, 1);

IDRegistry.genBlockID("basaltCobbleSlab");
Block.createBlock("basaltCobbleSlab", [
	{name: "Basalt Cobble Slab", texture: [["basalt_cobble", 0]], inCreative: true},
	{name: "Basalt Cobble Slab", texture: [["basalt_cobble", 0]], inCreative: false}
], "part");
ToolAPI.registerBlockMaterial(BlockID.basaltCobbleSlab, "stone", 1, true);
Block.setDestroyTime(BlockID.basaltCobbleSlab, 1.5);
Block.setDestroyLevel("basaltCobbleSlab", 1);
TileRenderer.makeSlab(BlockID.basaltCobbleSlab, BlockID.basaltCobble);

IDRegistry.genBlockID("basaltBrickSlab");
Block.createBlock("basaltBrickSlab", [
	{name: "Basalt Brick Slab", texture: [["basalt_brick", 0]], inCreative: true},
	{name: "Basalt Brick Slab", texture: [["basalt_brick", 0]], inCreative: false}
], "part");
ToolAPI.registerBlockMaterial(BlockID.basaltBrickSlab, "stone", 1, true);
Block.setDestroyTime(BlockID.basaltBrickSlab, 1.5);
Block.setDestroyLevel("basaltBrickSlab", 1);
TileRenderer.makeSlab(BlockID.basaltBrickSlab, BlockID.basaltBrick);


Recipes.addFurnace(BlockID.basaltCobble, BlockID.basalt, 0);
Recipes.addShapeless({id: BlockID.basaltPaver, count: 1, data: 0}, [{id: BlockID.basalt, data: 0}]);
Recipes.addShaped({id: BlockID.basaltBrick, count: 4, data: 0}, [
	"xx",
	"xx"
], ['x', BlockID.basalt, 0]);

Recipes.addShaped({id: BlockID.basaltChiseled, count: 4, data: 0}, [
	"xx",
	"xx"
], ['x', BlockID.basaltBrick, 0]);

Recipes.addShaped({id: BlockID.basaltCobbleSlab, count: 6, data: 0}, [
	"xxx"
], ['x', BlockID.basaltCobble, 0]);

Recipes.addShaped({id: BlockID.basaltBrickSlab, count: 6, data: 0}, [
	"xxx"
], ['x', BlockID.basaltBrick, 0]);


function genBasalt(x, y, z){
	randY = 1 + Math.random()
	randR = Math.random()*3.3
	r = 6.7 + Math.ceil(randR)
	h = r/Math.sqrt(randY)
	for(var xx = -r; xx <= r; xx++){
		for(var yy = -h; yy <= h; yy++){
			for(var zz = -r; zz <= r; zz++){
				if(Math.sqrt(xx*xx + yy*yy*randY + zz*zz) < 6.7 + randR + Math.random()/2){
					id = World.getBlockID(x+xx, y+yy, z+zz)
					if(id==1 || id==3 || id==13 || id==16){
					World.setBlock(x+xx, y+yy, z+zz, BlockID.basalt);}
				}
			}
		}
	}
}


var basaltChance = __config__.getNumber("world_gen.basalt")
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
	if(Math.random() < basaltChance){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 4, 12);
		genBasalt(coords.x, coords.y, coords.z);
	}
});




// file: block/marble.js

Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
}, "part");

IDRegistry.genBlockID("marble");
Block.createBlock("marble", [
	{name: "Marble", texture: [["marble", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.marble, "stone", 1, true);
Block.setDestroyTime(BlockID.marble, 1.5);
Block.setDestroyLevel("marble", 1);

IDRegistry.genBlockID("marbleBrick");
Block.createBlock("marbleBrick", [
	{name: "Marble Brick", texture: [["marble_brick", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.marbleBrick, "stone", 1, true);
Block.setDestroyTime(BlockID.marbleBrick, 1.5);
Block.setDestroyLevel("marbleBrick", 1);

IDRegistry.genBlockID("marbleBrickSlab");
Block.createBlock("marbleBrickSlab", [
	{name: "Marble Brick Slab", texture: [["marble_brick", 0]], inCreative: true},
	{name: "Marble Brick Slab", texture: [["marble_brick", 0]], inCreative: false}
], "part");
ToolAPI.registerBlockMaterial(BlockID.marbleBrickSlab, "stone", 1, true);
Block.setDestroyTime(BlockID.marbleBrickSlab, 1.5);
Block.setDestroyLevel("marbleBrickSlab", 1);
TileRenderer.makeSlab(BlockID.marbleBrickSlab, BlockID.marbleBrick);

Recipes.addShaped({id: BlockID.marbleBrick, count: 4, data: 0}, [
	"xx",
	"xx"
], ['x', BlockID.marble, 0]);

Recipes.addShaped({id: BlockID.marbleBrickSlab, count: 6, data: 0}, [
	"xxx"
], ['x', BlockID.marbleBrick, 0]);


function genMarble(x, y, z){
	GenerationUtils.generateOre(x, y, z, BlockID.marble, 0, 72);
	GenerationUtils.generateOre(x+random(0, 6), y, z+random(0, 6), BlockID.marble, 0, 64);
	/*var randX = 0.5 + Math.random()/2
	var randY = 1.75 + Math.random()*2
	var randZ = 0.5 + Math.random()/2
	var randR = Math.random()*2
	rX = (6 + Math.ceil(randR))/Math.sqrt(randX)
	rY = (6 + Math.ceil(randR))/Math.sqrt(randY)
	rZ = (6 + Math.ceil(randR))/Math.sqrt(randZ)
	for(var xx = -rX; xx <= rX; xx++){
		for(var yy = -rY; yy <= rY; yy++){
			for(var zz = -rZ; zz <= rZ; zz++){
    			if(Math.sqrt(xx*xx*randX + yy*yy*randY + zz*zz*randZ) < 6 + randR + Math.random()/2 && World.getBlockID(x+xx,y+yy,z+zz)==1){
					World.setBlock(x+xx, y+yy, z+zz, BlockID.marble);
				}
			}
		}
	}*/
}

var marbleChance = __config__.getNumber("world_gen.marble")
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() < marbleChance){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 32, 96);
		if(World.getBlockID(coords.x, coords.y, coords.z) == 1){
			genMarble(coords.x, coords.y, coords.z);
		}
	}
});




// file: block/ore.js

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




// file: block/resource.js

IDRegistry.genBlockID("blockCopper");
Block.createBlock("blockCopper", [
	{name: "Copper Block", texture: [["block_copper", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blockCopper, "stone", 2, true);
Block.setDestroyTime(BlockID.blockCopper, 5);
Block.setDestroyLevel("blockCopper", 2);


IDRegistry.genBlockID("blockTin");
Block.createBlock("blockTin", [
	{name: "Tin Block", texture: [["block_tin", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blockTin, "stone", 2, true);
Block.setDestroyTime(BlockID.blockTin, 5);
Block.setDestroyLevel("blockTin", 2);


IDRegistry.genBlockID("blockSilver");
Block.createBlock("blockSilver", [
	{name: "Silver Block", texture: [["block_silver", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blockSilver, "stone", 3, true);
Block.setDestroyTime(BlockID.blockSilver, 5);
Block.setDestroyLevel("blockSilver", 3);


IDRegistry.genBlockID("blockNikolite");
Block.createBlock("blockNikolite", [
	{name: "Nikolite Block", texture: [["block_nikolite", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blockNikolite, "stone", 3, true);
Block.setDestroyTime(BlockID.blockNikolite, 5);
Block.setDestroyLevel("blockNikolite", 3);


IDRegistry.genBlockID("blockRuby");
Block.createBlock("blockRuby", [
	{name: "Ruby Block", texture: [["block_ruby", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blockRuby, "stone", 3, true);
Block.setDestroyTime(BlockID.blockRuby, 5);
Block.setDestroyLevel("blockRuby", 3);


IDRegistry.genBlockID("blockSapphire");
Block.createBlock("blockSapphire", [
	{name: "Sapphire Block", texture: [["block_sapphire", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blockSapphire, "stone", 3, true);
Block.setDestroyTime(BlockID.blockSapphire, 5);
Block.setDestroyLevel("blockSapphire", 3);


IDRegistry.genBlockID("blockGreenSapphire");
Block.createBlock("blockGreenSapphire", [
	{name: "Green Sapphire Block", texture: [["block_green_sapphire", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blockGreenSapphire, "stone", 3, true);
Block.setDestroyTime(BlockID.blockGreenSapphire, 5);
Block.setDestroyLevel("blockGreenSapphire", 3);


Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.blockCopper, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotCopper, 0]);
	
	Recipes.addShaped({id: BlockID.blockTin, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotTin, 0]);
	
	Recipes.addShaped({id: BlockID.blockSilver, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotSilver, 0]);
	
	Recipes.addShaped({id: BlockID.blockNikolite, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.nikolite, 0]);
	
	Recipes.addShaped({id: BlockID.blockSapphire, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.gemSapphire, 0]);
	
	Recipes.addShaped({id: BlockID.blockGreenSapphire, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.gemGreenSapphire, 0]);
	
	Recipes.addShaped({id: BlockID.blockRuby, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.gemRuby, 0]);
	
	Recipes.addShapeless({id: ItemID.ingotCopper, count: 9, data: 0}, [{id: BlockID.blockCopper, data: 0}]);
	Recipes.addShapeless({id: ItemID.ingotTin, count: 9, data: 0}, [{id: BlockID.blockTin, data: 0}]);
	Recipes.addShapeless({id: ItemID.ingotSilver, count: 9, data: 0}, [{id: BlockID.blockSilver, data: 0}]);
	Recipes.addShapeless({id: ItemID.nikolite, count: 9, data: 0}, [{id: BlockID.blockNikolite, data: 0}]);
	Recipes.addShapeless({id: ItemID.gemSapphire, count: 9, data: 0}, [{id: BlockID.blockSapphire, data: 0}]);
	Recipes.addShapeless({id: ItemID.gemGreenSapphire, count: 9, data: 0}, [{id: BlockID.blockGreenSapphire, data: 0}]);
	Recipes.addShapeless({id: ItemID.gemRuby, count: 9, data: 0}, [{id: BlockID.blockRuby, data: 0}]);
});




// file: block/lamp.js

Block.createSpecialType({
	solid: true,
	destroytime: 2,
	explosionres: 5,
	renderlayer: 3
}, "lamp_off");

Block.createSpecialType({
	solid: true,
	destroytime: 2,
	explosionres: 5,
	lightlevel: 15,
	renderlayer: 3
}, "lamp");

IDRegistry.genBlockID("rpLamp");
Block.createBlock("rpLamp", [
	{name: "White Lamp", texture: [["rp_lamp", 0]], inCreative: true},
	{name: "Orange Lamp", texture: [["rp_lamp", 1]], inCreative: true},
	{name: "Magenta Lamp", texture: [["rp_lamp", 2]], inCreative: true},
	{name: "Light Blue Lamp", texture: [["rp_lamp", 3]], inCreative: true},
	{name: "Yellow Lamp", texture: [["rp_lamp", 4]], inCreative: true},
	{name: "Lime Lamp", texture: [["rp_lamp", 5]], inCreative: true},
	{name: "Pink Lamp", texture: [["rp_lamp", 6]], inCreative: true},
	{name: "Gray Lamp", texture: [["rp_lamp", 7]], inCreative: true},
	{name: "Light Gray Lamp", texture: [["rp_lamp", 8]], inCreative: true},
	{name: "Cyan Lamp", texture: [["rp_lamp", 9]], inCreative: true},
	{name: "Purple Lamp", texture: [["rp_lamp", 10]], inCreative: true},
	{name: "Blue Lamp", texture: [["rp_lamp", 11]], inCreative: true},
	{name: "Brown Lamp", texture: [["rp_lamp", 12]], inCreative: true},
	{name: "Green Lamp", texture: [["rp_lamp", 13]], inCreative: true},
	{name: "Red Lamp", texture: [["rp_lamp", 14]], inCreative: true},
	{name: "Black Lamp", texture: [["rp_lamp", 15]], inCreative: true}
], "lamp_off");

IDRegistry.genBlockID("rpLampInv");
Block.createBlock("rpLampInv", [
	{name: "White Inverted Lamp", texture: [["rp_lamp_on", 0]], inCreative: true},
	{name: "Orange Inverted Lamp", texture: [["rp_lamp_on", 1]], inCreative: true},
	{name: "Magenta Inverted Lamp", texture: [["rp_lamp_on", 2]], inCreative: true},
	{name: "Light Blue Inverted Lamp", texture: [["rp_lamp_on", 3]], inCreative: true},
	{name: "Yellow Inverted Lamp", texture: [["rp_lamp_on", 4]], inCreative: true},
	{name: "Lime Inverted Lamp", texture: [["rp_lamp_on", 5]], inCreative: true},
	{name: "Pink Inverted Lamp", texture: [["rp_lamp_on", 6]], inCreative: true},
	{name: "Gray Inverted Lamp", texture: [["rp_lamp_on", 7]], inCreative: true},
	{name: "Light Gray Inverted Lamp", texture: [["rp_lamp_on", 8]], inCreative: true},
	{name: "Cyan Inverted Lamp", texture: [["rp_lamp_on", 9]], inCreative: true},
	{name: "Purple Inverted Lamp", texture: [["rp_lamp_on", 10]], inCreative: true},
	{name: "Blue Inverted Lamp", texture: [["rp_lamp_on", 11]], inCreative: true},
	{name: "Brown Inverted Lamp", texture: [["rp_lamp_on", 12]], inCreative: true},
	{name: "Green Inverted Lamp", texture: [["rp_lamp_on", 13]], inCreative: true},
	{name: "Red Inverted Lamp", texture: [["rp_lamp_on", 14]], inCreative: true},
	{name: "Black Inverted Lamp", texture: [["rp_lamp_on", 15]], inCreative: true}
], "lamp");

Block.registerDropFunction("rpLamp", function(coords, blockID, blockData, level){
	return [];
});
Block.registerDropFunction("rpLampInv", function(coords, blockID, blockData, level){
	return [];
});

Callback.addCallback("PreLoaded", function(){
	for(var i = 0; i < 16; i++){
		Recipes.addShaped({id: BlockID.rpLamp, count: 1, data: i}, [
			"gxg",
			"gxg",
			"grg",
		], ['x', ItemID.lumar, i, 'g', 102, -1, 'r', 331, 0]);
		
		Recipes.addShaped({id: BlockID.rpLampInv, count: 1, data: i}, [
			"gxg",
			"gxg",
			"grg",
		], ['x', ItemID.lumar, i, 'g', 102, -1, 'r', 75, 0]);
	}
});

TileEntity.registerPrototype(BlockID.rpLamp, {
	defaultValues: {
		inverted: false,
	},
	
	redstone: function(signal){
		var x = this.x, y = this.y, z = this.z;
		if(!this.data.inverted && signal.power){
			this.selfDestroy();
			var data = World.getBlock(x, y, z).data;
			World.setBlock(x, y, z, BlockID.rpLampInv, data);
			var tile = World.addTileEntity(x, y, z);
			tile.data.inverted = false;
		}
		if(this.data.inverted && !signal.power){
			this.selfDestroy();
			var data = World.getBlock(x, y, z).data;
			World.setBlock(x, y, z, BlockID.rpLampInv, data);
			var tile = World.addTileEntity(x, y, z);
			tile.data.inverted = true;
		}
	},
	
	destroyBlock: function(coords, player){
		var data = World.getBlock(coords.x, coords.y, coords.z).data;
		if(this.data.inverted){
			World.drop(coords.x, coords.y, coords.z, BlockID.rpLampInv, 1, data);
		}else{
			World.drop(coords.x, coords.y, coords.z, BlockID.rpLamp, 1, data);
		}
	}
});

TileEntity.registerPrototype(BlockID.rpLampInv, {
	defaultValues: {
		inverted: true,
	},
	
	redstone: function(signal){
		var x = this.x, y = this.y, z = this.z;
		if(!this.data.inverted && !signal.power){
			this.selfDestroy();
			var data = World.getBlockData(x, y, z);
			World.setBlock(x, y, z, BlockID.rpLamp, data);
			var tile = World.addTileEntity(x, y, z);
			tile.data.inverted = false;
		}
		if(this.data.inverted && signal.power){
			this.selfDestroy();
			var data = World.getBlockData(x, y, z);
			World.setBlock(x, y, z, BlockID.rpLamp, data);
			var tile = World.addTileEntity(x, y, z);
			tile.data.inverted = true;
		}
	},
	
	destroyBlock: function(coords, player){
		var data = World.getBlockData(coords.x, coords.y, coords.z);
		if(this.data.inverted){
			World.drop(coords.x, coords.y, coords.z, BlockID.rpLampInv, 1, data);
		}else{
			World.drop(coords.x, coords.y, coords.z, BlockID.rpLamp, 1, data);
		}
	}
});

Block.registerPlaceFunction("rpLamp", function(coords, item, block){
	Game.prevent();
	var x = coords.relative.x
	var y = coords.relative.y
	var z = coords.relative.z
	block = World.getBlockID(x, y, z)
	if(GenerationUtils.isTransparentBlock(block)){
		World.setBlock(x, y, z, item.id, item.data);
		World.addTileEntity(x, y, z);
	}
});

Block.registerPlaceFunction("rpLampInv", function(coords, item, block){
	Game.prevent();
	var x = coords.relative.x
	var y = coords.relative.y
	var z = coords.relative.z
	block = World.getBlockID(x, y, z)
	if(GenerationUtils.isTransparentBlock(block)){
		World.setBlock(x, y, z, item.id, item.data);
		World.addTileEntity(x, y, z);
	}
});




// file: block/cable.js

IDRegistry.genBlockID("blueWire");
Block.createBlock("blueWire", [
	{name: "Blue Alloy Wire", texture: [["blue_wire", 0]], inCreative: true}
], "part");

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.blueWire, count: 12, data: 0}, [
		"aaa",
		"xxx",
		"aaa"
	], ['x', ItemID.ingotBlue, 0, 'a', 35, -1]);
	Recipes.addShaped({id: BlockID.blueWire, count: 12, data: 0}, [
		"axa",
		"axa",
		"axa"
	], ['x', ItemID.ingotBlue, 0, 'a', 35, -1]);
});

BT.registerWire(BlockID.blueWire);
TileRenderer.setupWireModel(BlockID.blueWire, 0, 1/4, "bt-wire");




// file: machine/smelter.js

IDRegistry.genBlockID("rpSmelter");
Block.createBlock("rpSmelter", [
	{name: "Smelter", texture: [["rp_smelter", 0], ["rp_smelter", 0], ["rp_smelter_side", 0], ["rp_smelter_front", 0], ["rp_smelter_side", 0], ["rp_smelter_side", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rpSmelter, "stone", 1);
Block.setDestroyLevel(BlockID.rpSmelter, 1);

TileRenderer.setStandartModel(BlockID.rpSmelter, [["rp_smelter", 0], ["rp_smelter", 0], ["rp_smelter_side", 0], ["rp_smelter_front", 0], ["rp_smelter_side", 0], ["rp_smelter_side", 0]], true);
TileRenderer.registerRotationModel(BlockID.rpSmelter, 0, [["rp_smelter", 0], ["rp_smelter", 0], ["rp_smelter_side", 0], ["rp_smelter_front", 0], ["rp_smelter_side", 0], ["rp_smelter_side", 0]]);
TileRenderer.registerRotationModel(BlockID.rpSmelter, 4, [["rp_smelter", 0], ["rp_smelter", 0], ["rp_smelter_side", 0], ["rp_smelter_front", 1], ["rp_smelter_side", 0], ["rp_smelter_side", 0]]);

Recipes.addShaped({id: BlockID.rpSmelter, count: 1, data: 0}, [
	"xxx",
	"x x",
	"xxx"
], ['x', 45, -1]);


var smelting_recipes = [];

function addSmeltingRecipe(result, source){
	smelting_recipes.push({source: source, result: result});
}

Callback.addCallback("PreLoaded", function(){
	// rp items
	addSmeltingRecipe({id: ItemID.ingotRed, count: 1}, [{id: 265, count: 1}, {id: 331, count: 4}]);
	addSmeltingRecipe({id: ItemID.ingotRed, count: 1}, [{id: ItemID.ingotCopper, count: 1}, {id: 331, count: 4}]);
	addSmeltingRecipe({id: ItemID.ingotBlue, count: 1}, [{id: ItemID.ingotSilver, count: 1}, {id: ItemID.nikolite, count: 4}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 4}, [{id: ItemID.ingotTin, count: 1}, {id: ItemID.ingotCopper, count: 3}]);
	addSmeltingRecipe({id: ItemID.siliconBoule, count: 1}, [{id: 12, count: 8}, {id: 263, count: 8}]);
	addSmeltingRecipe({id: ItemID.waferRed, count: 1}, [{id: ItemID.waferSilicon, count: 1}, {id: 331, count: 4}]);
	addSmeltingRecipe({id: ItemID.waferBlue, count: 1}, [{id: ItemID.waferSilicon, count: 1}, {id: ItemID.nikolite, count: 4}]);

	// tools
	addSmeltingRecipe({id: 265, count: 1}, [{id: 256, count: 1}]);
	addSmeltingRecipe({id: 265, count: 3}, [{id: 257, count: 1}]);
	addSmeltingRecipe({id: 265, count: 3}, [{id: 258, count: 1}]);
	addSmeltingRecipe({id: 265, count: 2}, [{id: 267, count: 1}]);
	addSmeltingRecipe({id: 265, count: 2}, [{id: 292, count: 1}]);
	addSmeltingRecipe({id: 265, count: 2}, [{id: 359, count: 1}]);
	addSmeltingRecipe({id: 265, count: 3}, [{id: ItemID.sickleIron, count: 1}]);

	addSmeltingRecipe({id: 266, count: 2}, [{id: 283, count: 1}]);
	addSmeltingRecipe({id: 266, count: 1}, [{id: 284, count: 1}]);
	addSmeltingRecipe({id: 266, count: 3}, [{id: 285, count: 1}]);
	addSmeltingRecipe({id: 266, count: 3}, [{id: 286, count: 1}]);
	addSmeltingRecipe({id: 266, count: 2}, [{id: 294, count: 1}]);
	addSmeltingRecipe({id: 266, count: 3}, [{id: ItemID.sickleGold, count: 1}]);

	// armor
	addSmeltingRecipe({id: 265, count: 5}, [{id: 305, count: 1}]);
	addSmeltingRecipe({id: 265, count: 8}, [{id: 306, count: 1}]);
	addSmeltingRecipe({id: 265, count: 7}, [{id: 307, count: 1}]);
	addSmeltingRecipe({id: 265, count: 4}, [{id: 308, count: 1}]);

	addSmeltingRecipe({id: 266, count: 5}, [{id: 314, count: 1}]);
	addSmeltingRecipe({id: 266, count: 8}, [{id: 315, count: 1}]);
	addSmeltingRecipe({id: 266, count: 7}, [{id: 316, count: 1}]);
	addSmeltingRecipe({id: 266, count: 4}, [{id: 317, count: 1}]);

	// other
	addSmeltingRecipe({id: 265, count: 3}, [{id: 66, count: 8}]);
	addSmeltingRecipe({id: 265, count: 3}, [{id: 101, count: 8}]);
	addSmeltingRecipe({id: 265, count: 31}, [{id: 145, count: 1}]);
	addSmeltingRecipe({id: 265, count: 4}, [{id: 167, count: 1}]);
	addSmeltingRecipe({id: 265, count: 3}, [{id: 325, count: 1}]);
	addSmeltingRecipe({id: 265, count: 5}, [{id: 328, count: 1}]);
	addSmeltingRecipe({id: 265, count: 6}, [{id: 330, count: 1}]);
	addSmeltingRecipe({id: 265, count: 7}, [{id: 380, count: 1}]);
});

// mod compatibility
ModAPI.addAPICallback("ICore", function(api){
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 2}, [{id: ItemID.bronzeSword, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 1}, [{id: ItemID.bronzeShovel, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 3}, [{id: ItemID.bronzePickaxe, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 3}, [{id: ItemID.bronzeAxe, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 2}, [{id: ItemID.bronzeHoe, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 6}, [{id: ItemID.wrenchBronze, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 5}, [{id: ItemID.bronzeHelmet, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 8}, [{id: ItemID.bronzeChestplate, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 7}, [{id: ItemID.bronzeLeggings, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotBronze, count: 4}, [{id: ItemID.bronzeBoots, count: 1}]);
	addSmeltingRecipe({id: ItemID.ingotTin, count: 2}, [{id: ItemID.cellEmpty, count: 1}]);
});


var guiSmelter = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Smelter"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 636, y: 146, bitmap: "furnace_bar_background", scale: GUI_SCALE},
		{type: "bitmap", x: 419, y: 150, bitmap: "fire_background", scale: GUI_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 636, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_SCALE},
		"burningScale": {type: "scale", x: 419, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_SCALE},
		"slotSource1": {type: "slot", x: 502, y: 112},
		"slotSource2": {type: "slot", x: 562, y: 112},
		"slotSource3": {type: "slot", x: 502, y: 172},
		"slotSource4": {type: "slot", x: 562, y: 172},
		"slotFuel": {type: "slot", x: 410, y: 200},
		"slotResult": {type: "slot", x: 720, y: 142},
	}
});

Callback.addCallback("LevelLoaded", function(){
	MachineRegistry.updateGuiHeader(guiSmelter, "Smelter");
});


MachineRegistry.registerPrototype(BlockID.rpSmelter, {
	defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiSmelter;
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource1", "slotSource2", "slotSource3", "slotSource4", "slotFuel"], output: ["slotResult"]};
	},
	
	tick: function(){
		StorageInterface.checkHoppers(this);
		
		var sourceItems = {};
		var source;
		var result;
		for(var i = 1; i <= 4; i++){
			var slot = this.container.getSlot("slotSource" + i);
			if(slot.id > 0 && slot.data==0){
				sourceItems[slot.id] = sourceItems[slot.id] || 0;
				sourceItems[slot.id] += slot.count;
			}
		}
		for(var i in smelting_recipes){
			var recipe = smelting_recipes[i];
			source = recipe.source;
			var valid = true;
			for(var s in source){
				var count = sourceItems[source[s].id];
				if(!count || count < source[s].count){
					valid = false;
					break;
				}
			}
			if(valid){
				result = recipe.result;
				break;
			}
		}
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		
		var resultSlot = this.container.getSlot("slotResult");
		if(result && (resultSlot.id == result.id && resultSlot.count + result.count <= 64 || resultSlot.id == 0)){
			if(this.data.burn==0){
				this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
			}
			if(this.data.burn > 0 && this.data.progress++ >= 200){
				for(var s in source){
					var count = source[s].count;
					for(var i = 1; i <= 4; i++){
						var slot = this.container.getSlot("slotSource" + i);
						if(slot.id == source[s].id){
							var c = Math.min(count, slot.count);
							slot.count -= c;
							count -= c;
						}
					}
				}
				resultSlot.id = result.id;
				resultSlot.count += result.count;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.activate();
		}else{
			this.data.progress = 0;
			this.deactivate();
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 200);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
			if(burn){
				if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
					var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
					fuelSlot.id = empty.id;
					fuelSlot.data = empty.data;
					return burn;
				}
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
}, true);

TileRenderer.setRotationPlaceFunction(BlockID.rpSmelter);

StorageInterface.createInterface(BlockID.rpSmelter, {
	slots: {
		"slotFuel": {input: true, isValid: function(item, side){return side > 1}},
		"slotSource1": {input: true, isValid: function(item, side){return side == 1}},
		"slotSource2": {input: true, isValid: function(item, side){return side == 1}},
		"slotSource3": {input: true, isValid: function(item, side){return side == 1}},
		"slotSource4": {input: true, isValid: function(item, side){return side == 1}},
		"slotResult": {output: true}
	}
});




// file: machine/blutricity/solar.js

IDRegistry.genBlockID("rpSolar");
Block.createBlock("rpSolar", [
	{name: "Solar Panel", texture: [["rp_machine_bottom", 0], ["rp_solar", 0], ["rp_solar", 1], ["rp_solar", 1], ["rp_solar", 1], ["rp_solar", 1]], inCreative: true}
], "part");
ToolAPI.registerBlockMaterial(BlockID.rpSolar, "stone", 1);
Block.setDestroyLevel("rpSolar", 1);
Block.setBlockShape(BlockID.rpSolar, {x: 0, y: 0, z: 0}, {x: 1, y: 0.25, z: 1});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.rpSolar, count: 1, data: 0}, [
		"ooo",
		"oxo",
		"ooo"
	], ['x', ItemID.ingotBlue, 0, 'o', ItemID.waferBlue, 0]);
});


MachineRegistry.registerPrototype(BlockID.rpSolar, {
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		if(World.getBlockID(this.x, this.y + 1, this.z) != BlockID.luminator && World.getLightLevel(this.x, this.y + 1, this.z) == 15){
			src.add(1);
		}
	}
});




// file: machine/blutricity/thermopile.js

IDRegistry.genBlockID("rpThermopile");
Block.createBlock("rpThermopile", [
	{name: "Thermopile", texture: [["rp_thermopile", 0], ["rp_thermopile", 0], ["rp_thermopile_side", 0], ["rp_thermopile_side", 1], ["rp_thermopile_side", 0], ["rp_thermopile_side", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rpThermopile, "stone", 1);
Block.setDestroyLevel("rpThermopile", 1);

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.rpThermopile, count: 1, data: 0}, [
		"cac",
		"oxo",
		"cac"
	], ['x', ItemID.ingotBlue, 0, 'o', ItemID.waferBlue, 0, 'a', 265, 0, 'c', ItemID.ingotCopper, 0]);
});

var blockHeatValues = {0: -0.25, 8: -1.5, 9: -1.5, 10: 2, 11: 2, 79: -2, 174: -2};

MachineRegistry.registerPrototype(BlockID.rpThermopile, {
	defaultValues: {
		cold: 0,
		heat: 0
	},
	
	isGenerator: function() {
		return true;
	},
	
	getHeat: function(x, z){
		var heat = blockHeatValues[World.getBlockID(x, this.y, z)] || 0;
		if(heat < 0) this.data.cold -= heat;
		else this.data.heat += heat;
	},
	
	energyTick: function(type, src){
		if(World.getThreadTime()%20==0){
			this.data.cold = 0;
			this.data.heat = 0;
			this.getHeat(this.x-1, this.z);
			this.getHeat(this.x+1, this.z);
			this.getHeat(this.x, this.z - 1);
			this.getHeat(this.x, this.z + 1);
			//Debug.m(Math.min(this.data.cold, this.data.heat)/8);
		}
		src.add(Math.min(this.data.cold, this.data.heat)/8);
	}
});




// file: machine/blutricity/bfurnace.js

IDRegistry.genBlockID("bFurnace");
Block.createBlock("bFurnace", [
	{name: "Blulectric Furnace", texture: [["rp_machine_bottom", 0], ["rp_bfurnace_top", 0], ["rp_bfurnace_side", 0], ["rp_bfurnace_front", 0], ["rp_bfurnace_side", 0], ["rp_bfurnace_side", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bFurnace, "stone", 1);
Block.setDestroyLevel(BlockID.bFurnace, 1);

TileRenderer.setStandartModel(BlockID.bFurnace, [["rp_machine_bottom", 0], ["rp_bfurnace_top", 0], ["rp_bfurnace_side", 0], ["rp_bfurnace_front", 0], ["rp_bfurnace_side", 0], ["rp_bfurnace_side", 0]]);
TileRenderer.registerRotationModel(BlockID.bFurnace, 0, [["rp_machine_bottom", 0], ["rp_bfurnace_top", 0], ["rp_bfurnace_side", 0], ["rp_bfurnace_front", 0], ["rp_bfurnace_side", 0], ["rp_bfurnace_side", 0]]);
TileRenderer.registerRotationModel(BlockID.bFurnace, 4, [["rp_machine_bottom", 0], ["rp_bfurnace_top", 0], ["rp_bfurnace_side", 0], ["rp_bfurnace_front", 1], ["rp_bfurnace_side", 0], ["rp_bfurnace_side", 0]]);

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.bFurnace, count: 1, data: 0}, [
		"xxx",
		"x x",
		"aba"
	], ['x', 24, -1, 'a', 265, 0, 'b', ItemID.ingotBlue, 0]);
});


var guiBFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Blulectric Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		invSlot: "default_slot"              
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.parseColor("#b3b3b3")},
		{type: "bitmap", x: 625, y: 146, bitmap: "furnace_bar_background", scale: GUI_SCALE},
		{type: "bitmap", x: 425, y: 92, bitmap: "bstorage_small_background", scale: GUI_SCALE},
	],
	
	elements: {
		"progressScale": {type: "scale", x: 625, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_SCALE},
		"btScale": {type: "scale", x: 425 + GUI_SCALE, y: 92 + GUI_SCALE, direction: 1, value: 0.5, bitmap: "bstorage_small_scale", scale: GUI_SCALE},
		"slotSource": {type: "slot", x: 536, y: 136, size: 72},
		"slotResult": {type: "slot", x: 720, y: 136, size: 72},
	}
});

Callback.addCallback("LevelLoaded", function(){
	MachineRegistry.updateGuiHeader(guiBFurnace, "Blulectric Furnace");
});


MachineRegistry.registerPrototype(BlockID.bFurnace, {
	defaultValues: {
		progress: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiBFurnace;
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource"], output: ["slotResult"]};
	},
	
	getEnergyStorage: function(){
		return 800;
	},
	
	tick: function(){
		StorageInterface.checkHoppers(this);
		
		var sourceSlot = this.container.getSlot("slotSource");
		var resultSlot = this.container.getSlot("slotResult");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		if(result && (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0)){
			if(this.data.energy >= 2){
				this.data.energy -= 2;
				this.data.progress++;
				this.activate();
			}
			else{
				this.deactivate();
			}
			if(this.data.progress >= 100){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
			this.deactivate();
		}
		
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Bu", energyStorage - this.data.energy, 25, 0);
		
		this.container.setScale("progressScale", this.data.progress/100);
		this.container.setScale("btScale", this.data.energy / energyStorage);
	},
	
	energyTick: MachineRegistry.basicEnergyReceiveFunc
});

TileRenderer.setRotationPlaceFunction(BlockID.bFurnace);

StorageInterface.createInterface(BlockID.bFurnace, {
	slots: {
		"slotSource": {input: true},
		"slotResult": {output: true}
	}
});




// file: machine/blutricity/bsmelter.js

IDRegistry.genBlockID("bSmelter");
Block.createBlock("bSmelter", [
	{name: "Blulectric Smelter", texture: [["rp_machine_bottom", 0], ["rp_bsmelter_top", 0], ["rp_bsmelter_side", 0], ["rp_bsmelter_front", 0], ["rp_bsmelter_side", 0], ["rp_bsmelter_side", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bSmelter, "stone", 1);
Block.setDestroyLevel(BlockID.bSmelter, 1);

TileRenderer.setStandartModel(BlockID.bSmelter, [["rp_machine_bottom", 0], ["rp_bsmelter_top", 0], ["rp_bsmelter_side", 0], ["rp_bsmelter_front", 0], ["rp_bsmelter_side", 0], ["rp_bsmelter_side", 0]]);
TileRenderer.registerRotationModel(BlockID.bSmelter, 0, [["rp_machine_bottom", 0], ["rp_bsmelter_top", 0], ["rp_bsmelter_side", 0], ["rp_bsmelter_front", 0], ["rp_bsmelter_side", 0], ["rp_bsmelter_side", 0]]);
TileRenderer.registerRotationModel(BlockID.bSmelter, 4, [["rp_machine_bottom", 0], ["rp_bsmelter_top", 0], ["rp_bsmelter_side", 0], ["rp_bsmelter_front", 1], ["rp_bsmelter_side", 0], ["rp_bsmelter_side", 0]]);

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.bSmelter, count: 1, data: 0}, [
		"xxx",
		"x x",
		"aba"
	], ['x', 45, -1, 'a', 265, 0, 'b', ItemID.ingotBlue, 0]);
});


var guiBSmelter = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Blulectric Smelter"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		invSlot: "default_slot"              
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.parseColor("#b3b3b3")},
		{type: "bitmap", x: 636, y: 146, bitmap: "furnace_bar_background", scale: GUI_SCALE},
		{type: "bitmap", x: 425, y: 92, bitmap: "bstorage_small_background", scale: GUI_SCALE},
	],
	
	elements: {
		"progressScale": {type: "scale", x: 636, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_SCALE},
		"btScale": {type: "scale", x: 425 + GUI_SCALE, y: 92 + GUI_SCALE, direction: 1, value: 0.5, bitmap: "bstorage_small_scale", scale: GUI_SCALE},
		"slotSource1": {type: "slot", x: 502, y: 112},
		"slotSource2": {type: "slot", x: 562, y: 112},
		"slotSource3": {type: "slot", x: 502, y: 172},
		"slotSource4": {type: "slot", x: 562, y: 172},
		"slotResult": {type: "slot", x: 720, y: 136, size: 72},
	}
});

Callback.addCallback("LevelLoaded", function(){
	MachineRegistry.updateGuiHeader(guiBSmelter, "Blulectric Smelter");
});


MachineRegistry.registerPrototype(BlockID.bSmelter, {
	defaultValues: {
		progress: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiBSmelter;
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource1", "slotSource2", "slotSource3", "slotSource4", "slotEnergy"], output: ["slotResult"]};
	},
	
	getEnergyStorage: function(){
		return 800;
	},
	
	tick: function(){
		StorageInterface.checkHoppers(this);
		
		var sourceItems = {};
		var source;
		var result;
		for(var i = 1; i <= 4; i++){
			var slot = this.container.getSlot("slotSource" + i);
			if(slot.id > 0 && slot.data==0){
				sourceItems[slot.id] = sourceItems[slot.id] || 0;
				sourceItems[slot.id] += slot.count;
			}
		}
		for(var i in smelting_recipes){
			var recipe = smelting_recipes[i];
			source = recipe.source;
			var valid = true;
			for(var s in source){
				var count = sourceItems[source[s].id];
				if(!count || count < source[s].count){
					valid = false;
					break;
				}
			}
			if(valid){
				result = recipe.result;
				break;
			}
		}
		
		var resultSlot = this.container.getSlot("slotResult");
		if(result && (resultSlot.id == result.id && resultSlot.count + result.count <= 64 || resultSlot.id == 0)){
			if(this.data.energy >= 2){
				this.data.energy -= 2;
				this.data.progress++;
				this.activate();
			}
			else{
				this.deactivate();
			}
			if(this.data.progress >= 100){
				for(var s in source){
					var count = source[s].count;
					for(var i = 1; i <= 4; i++){
						var slot = this.container.getSlot("slotSource" + i);
						if(slot.id == source[s].id){
							var c = Math.min(count, slot.count);
							slot.count -= c;
							count -= c;
						}
					}
				}
				resultSlot.id = result.id;
				resultSlot.count += result.count;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
			this.deactivate();
		}
		
		var energyStorage = this.getEnergyStorage();
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Bu", energyStorage - this.data.energy, 25, 0);
		
		this.container.setScale("progressScale", this.data.progress/100);
		this.container.setScale("btScale", this.data.energy / energyStorage);
	},
	
	energyTick: MachineRegistry.basicEnergyReceiveFunc
});

TileRenderer.setRotationPlaceFunction(BlockID.bSmelter);

StorageInterface.createInterface(BlockID.bSmelter, {
	slots: {
		"slotSource1": {input: true},
		"slotSource2": {input: true},
		"slotSource3": {input: true},
		"slotSource4": {input: true},
		"slotResult": {output: true}
	}
});




// file: machine/blutricity/batbox.js

IDRegistry.genBlockID("rpBatBox");
Block.createBlock("rpBatBox", [
	{name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 0], ["rp_batbox_side", 0], ["rp_batbox_side", 0], ["rp_batbox_side", 0]], inCreative: true},
	{name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 4], ["rp_batbox_side", 4], ["rp_batbox_side", 4], ["rp_batbox_side", 4]], inCreative: false},
	{name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 8], ["rp_batbox_side", 8], ["rp_batbox_side", 8], ["rp_batbox_side", 8]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rpBatBox, "stone", 1);
Block.registerDropFunction("rpBatBox", function(coords, blockID, blockData, level){
	return [];
});

TileRenderer.setStandartModel(BlockID.rpBatBox, [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 0], ["rp_batbox_side", 0], ["rp_batbox_side", 0], ["rp_batbox_side", 0]]);
for(var i = 1; i < 9; i++){
	TileRenderer.registerRenderModel(BlockID.rpBatBox, i, [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", i], ["rp_batbox_side", i], ["rp_batbox_side", i], ["rp_batbox_side", i]]);
}

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.rpBatBox, count: 1, data: 0}, [
		"xpx",
		"xax",
		"aba"
	], ['x', ItemID.btBattery, -1, 'a', 265, 0, 'b', ItemID.ingotBlue, 0, 'p', 5, -1]);
});


var guiBatBox = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Battery Box"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	params: {       
		slot: "default_slot",
		invSlot: "default_slot"              
	},
	
	drawing: [
		{type: "background", color: android.graphics.Color.parseColor("#b3b3b3")},
		{type: "bitmap", x: 530, y: 75, bitmap: "bstorage_background", scale: GUI_SCALE},
	],
	
	elements: {
		"batteryIcon": {type: "image", x: 530 + 6*GUI_SCALE, y: 75 - 7*GUI_SCALE, bitmap: "battery_icon_off", scale: GUI_SCALE},
		"btScale": {type: "scale", x: 530 + GUI_SCALE, y: 75 + GUI_SCALE, direction: 1, value: 0.5, bitmap: "bstorage_scale", scale: GUI_SCALE},
		"slot1": {type: "slot", x: 650, y: 80, isValid: function(id){return ChargeItemRegistry.isValidItem(id, "Bu", 0);}},
		"slot2": {type: "slot", x: 650, y: 172, isValid: function(id){return ChargeItemRegistry.isValidStorage(id, "Bu", 0);}},
	}
});

Callback.addCallback("LevelLoaded", function(){
	MachineRegistry.updateGuiHeader(guiBatBox, "Battery Box");
});


MachineRegistry.registerPrototype(BlockID.rpBatBox, {
	defaultValues: {
		data: 0
	},
		
	getGuiScreen: function(){
		return guiBatBox;
	},
	
	init: function(){
		var meta = parseInt(this.data.energy/3000);
		if(meta){
			this.data.meta = meta;
			TileRenderer.mapAtCoords(this.x, this.y, this.z, BlockID.rpBatBox, meta);
		}
	},
	
	tick: function(){
		var energyStorage = this.getEnergyStorage();
		
		var TRANSFER = 25;
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot2"), "Bu", energyStorage - this.data.energy, TRANSFER, 0);
		this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), "Bu", this.data.energy, TRANSFER, 0);
		
		var meta = parseInt(this.data.energy/3000);
		if(meta != this.data.meta){
			this.data.meta = meta;
			if(meta){
				TileRenderer.mapAtCoords(this.x, this.y, this.z, BlockID.rpBatBox, meta);
			}
			else{
				BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
				var content = this.container.getGuiContent();
				if(content){
					
				}
			}
		}
		var content = this.container.getGuiContent();
		if(content){
			if(this.data.energy == 24000){
				content.elements.batteryIcon.bitmap = "battery_icon_on";
			}
			else{
				content.elements.batteryIcon.bitmap = "battery_icon_off";
			}
		}
		this.container.setScale("btScale", this.data.energy / energyStorage);
	},
	
	getEnergyStorage: function(){
		return 24000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 25;
		this.data.energy += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
	},
	
	destroyBlock: function(coords, player){
		BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		var extra;
		if(this.data.energy > 0){
			extra = new ItemExtraData();
			extra.putInt("Bu", this.data.energy);
		}
		var blockData = Math.ceil(this.data.energy / 23999);
		nativeDropItem(coords.x, coords.y, coords.z, 0, BlockID.rpBatBox, 1, blockData, extra);
	}
});


Block.registerPlaceFunction("rpBatBox", function(coords, item, block){
	Game.prevent();
	var x = coords.relative.x
	var y = coords.relative.y
	var z = coords.relative.z
	block = World.getBlockID(x, y, z)
	if(GenerationUtils.isTransparentBlock(block)){
		World.setBlock(x, y, z, item.id, 0);
		var tile = World.addTileEntity(x, y, z);
		if(item.extra){
			tile.data.energy = item.extra.getInt("Bu") + 16;
		}
		else if(item.data==2){
			tile.data.energy = 24016;
		}
	}
});




// file: items/resource.js

IDRegistry.genItemID("ingotRed");
Item.createItem("ingotRed", "Red Alloy Ingot", {name: "ingot_red"});

IDRegistry.genItemID("ingotBlue");
Item.createItem("ingotBlue", "Blue Alloy Ingot", {name: "ingot_blue"});

IDRegistry.genItemID("ingotBronze");
Item.createItem("ingotBronze", "Bronze Ingot", {name: "ingot_bronze"});

IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver", "Silver Ingot", {name: "ingot_silver"});

IDRegistry.genItemID("ingotTin");
Item.createItem("ingotTin", "Tin Ingot", {name: "ingot_tin"});

IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", {name: "ingot_copper"});

//IDRegistry.genItemID("ingotTungsten");
//Item.createItem("ingotTungsten", "Tungsten Ingot", {name: "ingot_tungsten"});

IDRegistry.genItemID("nikolite");
Item.createItem("nikolite", "Nikolite", {name: "nikolite"});

IDRegistry.genItemID("gemRuby");
Item.createItem("gemRuby", "Ruby", {name: "ruby"});

IDRegistry.genItemID("gemSapphire");
Item.createItem("gemSapphire", "Sapphire", {name: "sapphire"});

IDRegistry.genItemID("gemGreenSapphire");
Item.createItem("gemGreenSapphire", "Green Sapphire", {name: "green_sapphire"});

IDRegistry.genItemID("indigoDye");
Item.createItem("indigoDye", "Indigo Dye", {name: "indigo_dye"});

Callback.addCallback("PreLoaded", function(){
	Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);
	Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);
	Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
	Recipes.addShapeless({id: 35, count: 1, data: 11}, [{id: ItemID.indigoDye, data: 0}, {id: 35, data: 0}]);
	Recipes.addShapeless({id: 351, count: 1, data: 5}, [{id: ItemID.indigoDye, data: 0}, {id: 351, data: 1}]);
	Recipes.addShapeless({id: 351, count: 1, data: 6}, [{id: ItemID.indigoDye, data: 0}, {id: 351, data: 2}]);
	Recipes.addShapeless({id: 351, count: 1, data: 12}, [{id: ItemID.indigoDye, data: 0}, {id: 351, data: 15}]);
	Recipes.addShaped({id: 159, count: 8, data: 11}, [
		"aaa",
		"axa",
		"aaa"
	], ['x', ItemID.indigoDye, 0, 'a', 172, 0]);
});




// file: items/bags.js

IDRegistry.genItemID("canvas");
Item.createItem("canvas", "Canvas", {name: "canvas", meta: 0});

let canvasBagPrototype = {
	title: "Canvas Bag",
	slots: 27,
	inRow: 9,
	slotsCenter: true
}

for(let i = 0; i < 16; i++){
	IDRegistry.genItemID("canvasBag" + i);
	Item.createItem("canvasBag" + i, "Canvas Bag", {name: "canvas_bag", meta: i}, {stack: 1});
	BackpackRegistry.register(ItemID["canvasBag" + i], canvasBagPrototype);
}

Recipes.addShaped({id: ItemID.canvas, count: 1, data: 0}, [
	"aaa",
	"axa",
	"aaa"
], ['x', 280, 0, 'a', 287, 0]);

Recipes.addShaped({id: ItemID.canvasBag0, count: 1, data: 0}, [
	"aaa",
	"a a",
	"aaa"
], ['a', ItemID.canvas, 0]);

Recipes.addShaped({id: ItemID.canvasBag11, count: 1, data: 0}, [
	"aaa",
	"axa",
	"aaa"
], ['x', ItemID.indigoDye, 0, 'a', ItemID.canvas, 0]);

for(let i = 1; i < 16; i++){
	Recipes.addShaped({id: ItemID["canvasBag" + i], count: 1, data: 0}, [
		"aaa",
		"axa",
		"aaa"
	], ['x', 351, 15 - i, 'a', ItemID.canvas, 0]);
}




// file: items/seed_bag.js

IDRegistry.genItemID("seedBag");
Item.createItem("seedBag", "Seed Bag", {name: "seed_bag", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.seedBag, 576);

Item.registerIconOverrideFunction(ItemID.seedBag, function(item, name){
	return {name: "seed_bag", meta: (item.data > 0)? 1: 0}
});

Recipes.addShaped({id: ItemID.seedBag, count: 1, data: 0}, [
	" s ",
	"a a",
	"aaa"
], ['a', ItemID.canvas, 0, 's', 287, 0]);

Item.registerNameOverrideFunction(ItemID.seedBag, function(item, name){
	if(item.extra){
		let id = 0;
		let count = 0;
		let container = SeedBag.getContainer(item.extra);
		if(container){
			for(let i in container.slots){
				let slot = container.getSlot(i);
				if(slot.id > 0){
					id = slot.id;
					count += slot.count;
				}
			}
			if(count){
				name += "\n§7" + Translation.translate(Item.getName(id)) + " * " + count;
			}
		}
	}
	return name;
});

Saver.addSavesScope("SeedBagScope",
    function read(scope) {
        SeedBag.nextUnique = scope.nextUnique || 1;
        SeedBag.containers = scope.containers || {};
    },

    function save() {
        return {
            nextUnique: SeedBag.nextUnique,
            containers: SeedBag.containers
        };
    }
);


let SeedBag = {
	containers: {},
	nextUnique: 1,
	
	getContainer: function(extra){
		if(extra){
			return this.containers["d" + extra.getInt("container")];
		}
		return null;
	},
	
	decreaseCount: function(item, container, decreaseCount){
		if(decreaseCount == 0) return;
		let storedCount = 0;
		for(let i in container.slots){
			let slot = container.getSlot(i);
			if(slot.id > 0){
				let count = Math.min(slot.count, decreaseCount);
				slot.count -= count;
				decreaseCount -= count;
				storedCount += slot.count;
			}
		}
		container.validateAll();
		if(storedCount > 0){
			Player.setCarriedItem(item.id, 1, 577 - storedCount, item.extra);
		} else {
			Player.setCarriedItem(item.id, 1, 0, item.extra);
		}
	},
	
	isValidItem: function(id, count, data, container){
		if(!seeds[id]) return false;
		for(let i in container.slots){
			let slot = container.getSlot(i);
			if(slot.id > 0 && slot.id != id){
				return false;
			}
		}
		return true;
	},
	
	openGuiFor: function (item) {
		let containerID = 0;
		let extra = item.extra;
        if(!extra){
			extra = new ItemExtraData();
		} else {
			containerID = extra.getInt("container");
		}
        let container = this.containers["d"+containerID];
		if (!container) {
			let containerID = this.nextUnique++;
			extra.putInt("container", containerID);
			container = this.containers["d"+containerID] = new UI.Container();
			Player.setCarriedItem(item.id, 1, item.data, extra);
		}
		container.openAs(this.gui);
    }
}

SeedBag.gui = new UI.StandartWindow({
	standart: {
		header: {text: {text: Translation.translate("Seed Bag")}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [],
	elements: {
		"slot0": {type: "slot", x: 530, y: 120, isValid: SeedBag.isValidItem},
		"slot1": {type: "slot", x: 590, y: 120, isValid: SeedBag.isValidItem},
		"slot2": {type: "slot", x: 650, y: 120, isValid: SeedBag.isValidItem},
		"slot4": {type: "slot", x: 530, y: 180, isValid: SeedBag.isValidItem},
		"slot5": {type: "slot", x: 590, y: 180, isValid: SeedBag.isValidItem},
		"slot6": {type: "slot", x: 650, y: 180, isValid: SeedBag.isValidItem},
		"slot8": {type: "slot", x: 530, y: 240, isValid: SeedBag.isValidItem},
		"slot9": {type: "slot", x: 590, y: 240, isValid: SeedBag.isValidItem},
		"slot10": {type: "slot", x: 650, y: 240, isValid: SeedBag.isValidItem}
	}
});

Callback.addCallback("LevelLoaded", function(){
	let header = SeedBag.gui.getWindow("header");
	header.contentProvider.drawing[1].text = Translation.translate("Seed Bag");
});

Item.registerNoTargetUseFunction(ItemID.seedBag, function (item) {
	SeedBag.openGuiFor(item);
});

let seeds = {295: 59, 391: 141, 392: 142, 458: 244}
seeds[ItemID.flaxSeeds] = BlockID.flax;

Item.registerUseFunction("seedBag", function(coords, item, block){
	if(item.extra && block.id == 60 && coords.side == 1){
		let id = 0;
		let count = 0;
		let decreaseCount = 0;
		let container = SeedBag.getContainer(item.extra);
		if(container){
			for(let i in container.slots){
				let slot = container.getSlot(i);
				if(slot.id > 0){
					id = slot.id;
					count += slot.count;
				}
			}
		}
		if(count){
			for(let x = coords.x-2; x <= coords.x+2; x++)
			for(let z = coords.z-2; z <= coords.z+2; z++){
				if(World.getBlockID(x, coords.y, z) == 60 && World.getBlockID(x, coords.y + 1, z) == 0){
					World.setBlock(x, coords.y + 1, z, seeds[id], 0);
					decreaseCount++;
				}
				if(decreaseCount >= count){
					SeedBag.decreaseCount(item, container, decreaseCount);
					return;
				}
			}
			SeedBag.decreaseCount(item, container, decreaseCount);
		} else {
			Player.setCarriedItem(item.id, 1, 0, item.extra);
		}
	}
});

Callback.addCallback("tick", function(){
	if(World.getThreadTime() % 10 == 0){
		var item = Player.getCarriedItem();
		if(item.id == ItemID.seedBag){
			let count = 0;
			let container = SeedBag.getContainer(item.extra);
			if(container){
				for(let i in container.slots){
					let slot = container.getSlot(i);
					if(slot.id > 0){
						count += slot.count;
					}
				}
			}
			if(count > 0){
				if(item.data != 577 - count){
					Player.setCarriedItem(item.id, 1, 577 - count, item.extra);
				}
			} else if(item.data > 0){
				Player.setCarriedItem(item.id, 1, 0, item.extra);
			}
		}
	}
});




// file: items/lumar.js

IDRegistry.genItemID("lumar");
Item.createItem("lumar", "Lumar", {name: "lumar"}, {isTech: true});

Item.registerIconOverrideFunction(ItemID.lumar, function(item, name){
	return {name: "lumar", meta: item.data}
});

var LumarNameEn = ["White Lumar", "Orange Lumar", "Magenta Lumar", "Light Blue Lumar", "Yellow Lumar", "Lime Lumar", "Pink Lumar", "Gray Lumar", "Light Gray Lumar", "Cyan Lumar", "Purple Lumar", "Blue Lumar", "Brown Lumar", "Green Lumar", "Red Lumar", "Black Lumar"];
var LumarNameRu = ["Белый светодиод", "Оранжевый светодиод", "Пурпурный светодиод", "Голубой светодиод", "Жёлтый светодиод", "Лаймовый светодиод", "Розовый светодиод", "Серый светодиод", "Светло-серый светодиод", "Бирюзовый светодиод", "Фиолетовый светодиод", "Синий светодиод", "Коричневый светодиод", "Зелёный светодиод", "Красный светодиод", "Чёрный светодиод"];
for(var i = 0; i < 16; i++){
	Translation.addTranslation(LumarNameEn[i], {ru: LumarNameRu[i]});
}
Item.registerNameOverrideFunction(ItemID.lumar, function(item, name){
	return Translation.translate(LumarNameEn[item.data]);
});

for(var i = 0; i < 16; i++){
	Recipes.addShaped({id: ItemID.lumar, count: 2, data: i}, [
		"xa",
		"bx"
	], ['x', 351, 15 - i, 'a', 348, 0, 'b', 331, 0]);
}




// file: items/components.js

IDRegistry.genItemID("siliconBoule");
Item.createItem("siliconBoule", "Silicon Boule", {name: "silicon_boule"});

IDRegistry.genItemID("waferSilicon");
Item.createItem("waferSilicon", "Silicon Wafer", {name: "wafer_silicon"});

IDRegistry.genItemID("waferRed");
Item.createItem("waferRed", "Red-Doped Wafer", {name: "wafer_red"});

IDRegistry.genItemID("waferBlue");
Item.createItem("waferBlue", "Blue-Doped Wafer", {name: "wafer_blue"});

Callback.addCallback("PreLoaded", function(){
	addRecipeWithCraftingTool({id: ItemID.waferSilicon, count: 16, data: 0}, [{id: ItemID.siliconBoule, data: 0}], ItemID.handsawDiamond);
});




// file: items/battery.js

IDRegistry.genItemID("btBattery");
Item.createItem("btBattery", "BT Battery", {name: "bt_battery", meta: 0}, {stack: 1, isTech: true});
ChargeItemRegistry.registerItem(ItemID.btBattery, "Bu", 6000, 0, "storage", true, true);

Recipes.addShaped({id: ItemID.btBattery, count: 1, data: Item.getMaxDamage(ItemID.btBattery)}, [
	"xcx",
	"xax",
	"xcx"
], ['x', ItemID.nikolite, 0, 'a', ItemID.ingotTin, 0, 'c', ItemID.ingotCopper, 0]);




// file: items/tool/handsaw.js

IDRegistry.genItemID("handsawDiamond");
Item.createItem("handsawDiamond", "Diamond Handsaw", {name: "handsaw_diamond", meta: 0}, {stack: 1});

Item.setMaxDamage(ItemID.handsawDiamond, 1562);

Recipes.addShaped({id: ItemID.handsawDiamond, count: 1, data: 0}, [
	"rrr",
	" aa",
	" dd"
], ['a', 265, 0, 'd', 264, 0, 'r', 280, 0]);

function addRecipeWithCraftingTool(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
		for(var i in field){
			if(field[i].id == tool){
				field[i].data++;
				if(field[i].data >= Item.getMaxDamage(tool.id)){
					field[i].id = field[i].count = field[i].data = 0;
				}
			}
			else {
				api.decreaseFieldSlot(i);
			}
		}
	});
}




// file: items/tool/athame.js

IDRegistry.genItemID("athame");
Item.createItem("athame", "Athame", {name: "athame", meta: 0}, {stack: 1});

ToolAPI.registerSword(ItemID.athame, {level: 0, durability: 50, damage: 3}, {
	damage: 0,
	onAttack: function(item, mob){
		this.damage = Entity.getType(mob) == Native.EntityType.ENDERMAN ? 17 : 0;
		return false;
	}
});

Recipes.addShaped({id: ItemID.athame, count: 1, data: 0}, [
	"a",
	"b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);




// file: items/tool/sickle.js

IDRegistry.genItemID("sickleWood");
IDRegistry.genItemID("sickleStone");
IDRegistry.genItemID("sickleIron");
IDRegistry.genItemID("sickleGold");
IDRegistry.genItemID("sickleDiamond");

Item.createItem("sickleWood", "Wood Sickle", {name: "sickle", meta: 0}, {stack: 1});
Item.createItem("sickleStone", "Stone Sickle", {name: "sickle", meta: 1}, {stack: 1});
Item.createItem("sickleIron", "Iron Sickle", {name: "sickle", meta: 2}, {stack: 1});
Item.createItem("sickleGold", "Gold Sickle", {name: "sickle", meta: 3}, {stack: 1});
Item.createItem("sickleDiamond", "Diamond Sickle", {name: "sickle", meta: 4}, {stack: 1});

var plants = [31, 37, 38, 59, 83, 106, 141, 142, 175, 244, BlockID.indigoFlower, BlockID.flax];

ToolType.sickle = {
	damage: 1,
	baseDamage: 0,
	blockTypes: ["fibre", "plant"],
	calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
		var material = ToolAPI.getBlockMaterialName(block.id);
		if(material == "fibre" || material ==" plant" || block.id == 30){
			return 0;
		}
		return destroyTime;
	},
	destroyBlock: function(coords, side, item, block){
		var x = coords.x, y = coords.y, z = coords.z;
		var material = ToolAPI.getBlockMaterialName(block.id);
		if(material == "plant" && plants.indexOf(block.id) == -1){
			for(var xx = x - 1; xx <= x + 1; xx++){
				for(var yy = y - 1; yy <= y + 1; yy++){
					for(var zz = z - 1; zz <= z + 1; zz++){
						block = World.getBlock(xx, yy, zz);
						var material = ToolAPI.getBlockMaterialName(block.id);
						if(material == "plant"){
							World.destroyBlock(xx, yy, zz, true);
						}
					}
				}
			}
		} else if(plants.indexOf(block.id) != -1){
			for(var xx = x - 2; xx <= x + 2; xx++){
				for(var zz = z - 2; zz <= z + 2; zz++){
					block = World.getBlock(xx, y, zz);
					if(plants.indexOf(block.id) != -1){
						World.destroyBlock(xx, y, zz, true);
						if(Math.random() < 1/16 && (block.id == 31 && block.data == 0 || block.id == 175 && (block.data == 2 || block.data == 10))){
							World.drop(xx + .5, y + .5, zz + .5, ItemID.flaxSeeds, 1, 0);
						}
					}
				}
			}
		}
	}
}

ToolLib.setTool(ItemID.sickleWood, "wood", ToolType.sickle);
ToolLib.setTool(ItemID.sickleStone, "stone", ToolType.sickle);
ToolLib.setTool(ItemID.sickleIron, "iron", ToolType.sickle);
ToolLib.setTool(ItemID.sickleGold, "golden", ToolType.sickle);
ToolLib.setTool(ItemID.sickleDiamond, "diamond", ToolType.sickle);

Recipes.addShaped({id: ItemID.sickleWood, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', 5, -1, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sickleStone, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', 4, -1, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sickleIron, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', 265, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sickleGold, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', 266, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sickleDiamond, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', 264, 0, 'b', 280, 0]);




// file: items/tool/tools.js

IDRegistry.genItemID("rubySword");
IDRegistry.genItemID("rubyShovel");
IDRegistry.genItemID("rubyPickaxe");
IDRegistry.genItemID("rubyAxe");
IDRegistry.genItemID("rubyHoe");
IDRegistry.genItemID("rubySickle");

Item.createItem("rubySword", "Ruby Sword", {name: "ruby_sword", meta: 0}, {stack: 1});
Item.createItem("rubyShovel", "Ruby Shovel", {name: "ruby_shovel", meta: 0}, {stack: 1});
Item.createItem("rubyPickaxe", "Ruby Pickaxe", {name: "ruby_pickaxe", meta: 0}, {stack: 1});
Item.createItem("rubyAxe", "Ruby Axe", {name: "ruby_axe", meta: 0}, {stack: 1});
Item.createItem("rubyHoe", "Ruby Hoe", {name: "ruby_hoe", meta: 0}, {stack: 1});
Item.createItem("rubySickle", "Ruby Sickle", {name: "ruby_sickle", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ruby", {durability: 500, level: 3, efficiency: 8, damage: 3, enchantability: 10});
ToolLib.setTool(ItemID.rubySword, "ruby", ToolType.sword);
ToolLib.setTool(ItemID.rubyShovel, "ruby", ToolType.shovel);
ToolLib.setTool(ItemID.rubyPickaxe, "ruby", ToolType.pickaxe);
ToolLib.setTool(ItemID.rubyAxe, "ruby", ToolType.axe);
ToolLib.setTool(ItemID.rubyHoe, "ruby", ToolType.hoe);
ToolLib.setTool(ItemID.rubySickle, "ruby", ToolType.sickle);

Recipes.addShaped({id: ItemID.rubySword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubySickle, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);


IDRegistry.genItemID("sapphireSword");
IDRegistry.genItemID("sapphireShovel");
IDRegistry.genItemID("sapphirePickaxe");
IDRegistry.genItemID("sapphireAxe");
IDRegistry.genItemID("sapphireHoe");
IDRegistry.genItemID("sapphireSickle");

Item.createItem("sapphireSword", "Sapphire Sword", {name: "sapphire_sword", meta: 0}, {stack: 1});
Item.createItem("sapphireShovel", "Sapphire Shovel", {name: "sapphire_shovel", meta: 0}, {stack: 1});
Item.createItem("sapphirePickaxe", "Sapphire Pickaxe", {name: "sapphire_pickaxe", meta: 0}, {stack: 1});
Item.createItem("sapphireAxe", "Sapphire Axe", {name: "sapphire_axe", meta: 0}, {stack: 1});
Item.createItem("sapphireHoe", "Sapphire Hoe", {name: "sapphire_hoe", meta: 0}, {stack: 1});
Item.createItem("sapphireSickle", "Sapphire Sickle", {name: "sapphire_sickle", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("sapphire", {durability: 500, level: 3, efficiency: 8, damage: 2, enchantability: 10});
ToolLib.setTool(ItemID.sapphireSword, "sapphire", ToolType.sword);
ToolLib.setTool(ItemID.sapphireShovel, "sapphire", ToolType.shovel);
ToolLib.setTool(ItemID.sapphirePickaxe, "sapphire", ToolType.pickaxe);
ToolLib.setTool(ItemID.sapphireAxe, "sapphire", ToolType.axe);
ToolLib.setTool(ItemID.sapphireHoe, "sapphire", ToolType.hoe);
ToolLib.setTool(ItemID.sapphireSickle, "sapphire", ToolType.sickle);

Recipes.addShaped({id: ItemID.sapphireSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphireShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphirePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphireAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphireHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sapphireSickle, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);


IDRegistry.genItemID("greenSapphireSword");
IDRegistry.genItemID("greenSapphireShovel");
IDRegistry.genItemID("greenSapphirePickaxe");
IDRegistry.genItemID("greenSapphireAxe");
IDRegistry.genItemID("greenSapphireHoe");
IDRegistry.genItemID("greenSapphireSickle");

Item.createItem("greenSapphireSword", "Green Sapphire Sword", {name: "green_sapphire_sword", meta: 0}, {stack: 1});
Item.createItem("greenSapphireShovel", "Green Sapphire Shovel", {name: "green_sapphire_shovel", meta: 0}, {stack: 1});
Item.createItem("greenSapphirePickaxe", "Green Sapphire Pickaxe", {name: "green_sapphire_pickaxe", meta: 0}, {stack: 1});
Item.createItem("greenSapphireAxe", "Green Sapphire Axe", {name: "green_sapphire_axe", meta: 0}, {stack: 1});
Item.createItem("greenSapphireHoe", "Green Sapphire Hoe", {name: "green_sapphire_hoe", meta: 0}, {stack: 1});
Item.createItem("greenSapphireSickle", "Green Sapphire Sickle", {name: "green_sapphire_sickle", meta: 0}, {stack: 1});

ToolLib.setTool(ItemID.greenSapphireSword, "sapphire", ToolType.sword);
ToolLib.setTool(ItemID.greenSapphireShovel, "sapphire", ToolType.shovel);
ToolLib.setTool(ItemID.greenSapphirePickaxe, "sapphire", ToolType.pickaxe);
ToolLib.setTool(ItemID.greenSapphireAxe, "sapphire", ToolType.axe);
ToolLib.setTool(ItemID.greenSapphireHoe, "sapphire", ToolType.hoe);
ToolLib.setTool(ItemID.greenSapphireSickle, "sapphire", ToolType.sickle);

Recipes.addShaped({id: ItemID.greenSapphireSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphireShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphirePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphireAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphireHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.greenSapphireSickle, count: 1, data: 0}, [
	" a ",
	"  a",
	"ba "
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);




// file: integration/recipe_viewer.js

ModAPI.addAPICallback("RecipeViewer", function(api){
	let RecipeViewer = api.Core;
	const Bitmap = android.graphics.Bitmap;
	const Canvas = android.graphics.Canvas;
	const Rect = android.graphics.Rect;

	let bmp, cvs, source;
	let x = y = 0;

	RecipeViewer.registerRecipeType("rp_smelter", {
		contents: {
			icon: BlockID.rpSmelter,
			drawing: [
				{type: "bitmap", x: 500, y: 222, bitmap: "furnace_bar_scale", scale: 6},
			],
			elements: {
				input0: {type: "slot", x: 240, y: 150, size: 120},
				input1: {type: "slot", x: 360, y: 150, size: 120},
				input2: {type: "slot", x: 240, y: 270, size: 120},
				input3: {type: "slot", x: 360, y: 270, size: 120},
				output0: {type: "slot", x: 652, y: 210, size: 120},
			}
		},
		getList: function(id, data, isUsage){
			let list = [];
			if(isUsage){
				for(let i in smelting_recipes){
					let recipe = smelting_recipes[i];
					for(let j in recipe.source){
						if(recipe.source[j].id == id){
							list.push({
								input: recipe.source,
								output: [recipe.result]
							});
						}
					}
				}
			}
			else {
				for(let i in smelting_recipes){
					let recipe = smelting_recipes[i];
					if(recipe.result.id == id){
						list.push({
							input: recipe.source,
							output: [recipe.result]
						});
					}
				}
			}
			return list;
		}
	});
});




