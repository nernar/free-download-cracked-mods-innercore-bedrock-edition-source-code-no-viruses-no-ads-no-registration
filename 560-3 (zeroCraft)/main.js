/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 14
*/



// file: header.js

// Import Libraries

IMPORT("StructuresAPI");
IMPORT("TileRender");
IMPORT("ToolType");
IMPORT("RecipeTileEntityLib");
IMPORT("StorageInterface");

const gui_scale = 3.2;




// file: ToolAPI/toolapi.js

// ToolAPI
ToolAPI.addToolMaterial("scapolite", 
{     
durability: 3000,    
level: 5,    
efficiency: 12,    
damage: 8,
enchantability: 14 
});

ToolAPI.addToolMaterial("scapoliteswrd", 
{     
durability: 4000,    
level: 5,    
efficiency: 12,    
damage: 12,
enchantability: 14 
});

ToolAPI.addToolMaterial("scapolitedestroy", 
{     
durability: 2000,    
level: 5,    
efficiency: 8,    
damage: 5,
enchantability: 14 
});




// file: Blockstype/scapoliteore_type.js

var ScapoliteOreBlock = Block.createSpecialType({ 
	base: 1, 	
 solid: true, 
	destroytime: 4, 	
explosionres: 2 
}, "stone")




// file: Blockstype/latuneore_type.js

var LatuneOreBlock = Block.createSpecialType({ 
	base: 1, 	
 solid: true, 
	destroytime: 3, 	
explosionres: 1 
}, "stone")




// file: recipes.js

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: ItemID.Scapolitebar, count: 1, data: 0}, 
 ["ааа",
  "ааа",
  ""],
 ['а', ItemID.Scapolitepart, 0]
);

Recipes.addShaped({id: ItemID.Scapolitebardiam, count: 1, data: 0}, 
 ["",
  " а ",
  "ххх"],
 ['а', ItemID.Scapolitebar, 0, 'х', 264, 0]
);

Recipes.addShaped({id: ItemID.ScapoliteHelmet, count: 1, data: 0}, 
 ["ааа", 
  "а а", 
  ""],
 ['а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.ScapoliteChestplate, count: 1, data: 0}, 
 ["а а", 
  "ааа", 
  "ааа"],
 ['а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id:ItemID.ScapoliteLeggings, count: 1, data: 0}, 
 ["ааа", 
  "а а", 
  "а а"],
 ['а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id:ItemID.ScapoliteBoots, count: 1, data: 0}, 
 ["", 
  "а а", 
  "а а"],
 ['а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.scapolite_sword, count: 1, data: 0},
  [" a ",
         " a ", 
         " x "],
  ['x', 280, 0, 'a', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.scapolite_pickaxe, count: 1, data: 0},
  ["ааа",
         " х ", 
         " х "],
  ['х', 280, 0, 'а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.scapolite_axe, count: 1, data: 0},
  ["аа ",
   "ах ", 
   " х "],
  ['х', 280, 0, 'а', ItemID.Scapolitebar, 0]
);

Recipes.addShaped({id: ItemID.scapolite_destroy, count: 1, data: 0},
  ["ааа",
         "аха", 
         " х "],
  ['х', 280, 0, 'а', ItemID.Scapolitebardiam, 0]
);

Recipes.addShaped({id: BlockID.latuneFurnace, count: 1, data: 0}, [
		" х ",
		"хах",
		" х "
	], ['а', 61, 0, 'х', ItemID.Latunebar, 0]);

	Recipes.addFurnace(BlockID.Latuneore, ItemID.Latunebar, 0);

Recipes.addFurnace(ItemID.Scapolitedust, ItemID.Scapolitepart, 0);

});




// file: Furnace/latune_furnace.js

var LatunFurGui = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Latune Furnce"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 155, bitmap: "arrow_background", scale: gui_scale},
		{type: "bitmap", x: 450, y: 155, bitmap: "fire_background", scale: gui_scale}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 155, direction: 0, value: 0.5, bitmap: "arrow", scale: gui_scale},
		"burningScale": {type: "scale", x: 450, y: 155, direction: 1, value: 0.5, bitmap: "fire_scale", scale: gui_scale},
		"slotSource": {type: "slot", x: 441, y: 79, isValid: function(id, count, data){
			return Recipes.getFurnaceRecipeResult(id, "iron")? true : false;
		}},
		"slotFuel": {type: "slot", x: 441, y: 218, isValid: function(id, count, data){
			return Recipes.getFuelBurnDuration(id, data) > 0;
		}},
		"slotResult": {type: "slot", x: 625, y: 148, isValid: function(){return false;}},
	}
});


var FURN_Fuel = { 	5: 300, 	6: 100, 	17: 300, 53: 300, 	54: 300, 	58: 300,	85: 300, 107: 300, 	134: 300, 	135: 300, 158: 150, 	162: 300, 	163: 300, 	164: 300, 	184: 300, 	185: 300, 	186: 300, 	187: 300, 263: 1600, 268: 200, 	269: 200, 	270: 200, 	271: 200, 280: 100 };

TileEntity.registerPrototype(BlockID.latuneFurnace, {
	defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0
	},
	
	getGuiScreen: function(){
		return LatunFurGui;
	},
	
	addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(FURN_Fuel[item.id] && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		if(result && this.data.burn > 0){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 90){
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
		}
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		else if(result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 90);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = FURN_Fuel[fuelSlot.id];
			if(burn){
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
			if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
				var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
				fuelSlot.id = empty.id;
				fuelSlot.data = empty.data;
				return 20000;
			}
		}
		return 0;
	}
});




// file: Registry_BI/gen_items.js

IDRegistry.genItemID("Scapolitedust");
Item.createItem("Scapolitedust", "Scapolite Dust", {name: "ore00", meta: 0}, {stack: 64});

IDRegistry.genItemID("Scapolitepart");
Item.createItem("Scapolitepart", "Part Of Scapolite", {name: "scapolite", meta: 0}, {stack: 64});

IDRegistry.genItemID("Scapolitebar");
Item.createItem("Scapolitebar", "Scapolite Ingot", {name: "scapolite_ignot", meta: 0}, {stack: 64});

IDRegistry.genItemID("Scapolitebardiam");
Item.createItem("Scapolitebardiam", "Diamond Scapolite Ingot", {name: "scapolite_ignot_diam", meta: 0}, {stack: 64});

IDRegistry.genItemID("Latunebar");
Item.createItem("Latunebar", "Latune Ingot", {name: "ore01", meta: 0}, {stack: 64});

IDRegistry.genItemID("ScapoliteHelmet");
Item.createArmorItem("ScapoliteHelmet", "Scapolite Helmet", {name: "scapolite_helmet"}, {type: "helmet", armor: 4, durability: 1300, texture: "armor/scapolite1_1.png"});

IDRegistry.genItemID("ScapoliteChestplate");
Item.createArmorItem("ScapoliteChestplate", "Scapolite Chestplate", {name: "scapolite_chestplate"}, {type: "chestplate", armor: 6, durability: 1300, texture: "armor/scapolite1_1.png"});

IDRegistry.genItemID("ScapoliteLeggings");
Item.createArmorItem("ScapoliteLeggings", "Scapolite Leggings", {name: "scapolite_leggings"}, {type: "leggings", armor: 6, durability: 1300, texture: "armor/scapolite_2.png"});

IDRegistry.genItemID("ScapoliteBoots");
Item.createArmorItem("ScapoliteBoots", "Scapolite Boots", {name: "scapolite_boots"}, {type: "boots", armor: 4, durability: 1300, texture: "armor/scapolite1_1.png"});

IDRegistry.genItemID("scapolite_pickaxe")
Item.createItem("scapolite_pickaxe", "Scapolite Pickaxe", {name: "scapolite_pickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID["scapolite_pickaxe"], "scapolite", ToolType.pickaxe);

IDRegistry.genItemID("scapolite_axe")
Item.createItem("scapolite_axe", "Scapolite Axe", {name: "scapolite_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID["scapolite_axe"], "scapolite", ToolType.axe); 

IDRegistry.genItemID("scapolite_sword")
Item.createItem("scapolite_sword", "Scapolite Sword", {name: "scapolite_sword", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID["scapolite_sword"], "scapoliteswrd", ToolType.sword);

IDRegistry.genItemID("scapolite_destroy")
Item.createItem("scapolite_destroy", "Scapolite Destroyer", {name: "scapolite_destroy", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID["scapolite_destroy"], "scapolitedestroy", ToolType.pickaxe);




// file: Registry_BI/gen_blocks.js

IDRegistry.genBlockID("Scapoliteore"); Block.createBlock("Scapoliteore", [
   	{name: "Scapolite Ore", texture: [["ore0", 0]], inCreative: true} 
], ScapoliteOreBlock); ToolAPI.registerBlockMaterial(BlockID.Scapoliteore, "stone", 3, true);

IDRegistry.genBlockID("Latuneore"); Block.createBlock("Latuneore", [
   	{name: "Latune Ore", texture: [["ore1", 0]], inCreative: true} 
], LatuneOreBlock); ToolAPI.registerBlockMaterial(BlockID.Latuneore, "stone", 2, true);

IDRegistry.genBlockID("latuneFurnace");
Block.createBlockWithRotation("latuneFurnace", [
	{name: "Latune Furnace", texture: [["latune_fur_bottom", 0], 
["latune_fur_top", 0], 
["latune_fur_side", 0], 
["latune_fur_front", 0], 
["latune_fur_side", 0], [
"latune_fur_side", 0]], 
inCreative: true}
], 
"stone");

Block.registerDropFunction("latuneFurnace", function(coords, blockID, blockData){
return [[BlockID.latuneFurnace, 1, 0]]
});

Block.registerDropFunction("Latuneore", function(coords, blockID, blockData){
return [[BlockID.Latuneore, 1, 0]]
});




// file: Ores/scapolite_ore.js

Block.registerDropFunction("Scapoliteore", function(coords, blockID, blockData, level, enchant){ 	
 if(level > 2){ 		
  if(enchant.silk){ 			
   return [[blockID, 1, 0]]; 		} 		ToolAPI.dropOreExp(coords, 1, 3, enchant.experience); 		
  return [[ItemID.Scapolitedust, ((Math.random() * 3) +1), 0]] 	
} 	
return []; 
}, 3);

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ)
{ 
 var coordsd = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 16); 
 for (var q = 0; q < 15;q++)
{ 
 if (Math.random() < 7/10)
 GenerationUtils.genMinable(coordsd.x, coordsd.y, coordsd.z, 
{ 
id: BlockID.Scapoliteore, 
data: 0, 
size: 5, 
ratio: .3, 
checkerTile: 1, 
checkerMode: false 
}); 
} 
});




// file: Ores/latune_ore.js

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ)
{ 
 var coordsl = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 26); 
 for (var v = 0; v < 15;v++)
{ 
 if (Math.random() < 7/10)
 GenerationUtils.genMinable(coordsl.x, coordsl.y, coordsl.z, 
{ 
id: BlockID.Latuneore, 
data: 0, 
size: 5, 
ratio: .3, 
checkerTile: 1, 
checkerMode: false 
}); 
} 
});




// file: Other/translate.js

// Items
Translation.addTranslation("Scapolite Dust", {ru: "Скаполитовая Пыль"});

Translation.addTranslation("Part Of Scapolite", {ru: "Часть Скаполита"});

Translation.addTranslation("Scapolite Ingot", {ru: "Скаполитовый Слиток"});

Translation.addTranslation("Diamond Scapolite Ingot", {ru: "Слиток Алмазного Скаполита"});

Translation.addTranslation("Scapolite Helmet", {ru: "Скаполитовый Шлем"});

Translation.addTranslation("Scapolite Chestplate", {ru: "Скаполитовый Нагрудник"});

Translation.addTranslation("Scapolite Leggings", {ru: "Скаполитовые Штаны"});

Translation.addTranslation("Scapolite Boots", {ru: "Скаполитовые Ботинки"});

Translation.addTranslation("Scapolite Sword", {ru: "Скаполитовый Меч"});

Translation.addTranslation("Scapolite Pickaxe", {ru: "Скаполитовая Кирка"});

Translation.addTranslation("Scapolite Axe", {ru: "Скаполитовый Топор"});

Translation.addTranslation("Scapolite Destroyer", {ru: "Скаполитовый Разрушитель"});

Translation.addTranslation("Latune Ingot", {ru: "Слиток Латуня"});


// Blocks
Translation.addTranslation("Scapolite Ore", {ru: "Скаполитовая Руда"});

Translation.addTranslation("Latune Furnace", {ru: "Латунная Печка"});

Translation.addTranslation("Latune Ore", {ru: "Руда Латуня"});




// file: Other/destroyer.js

var radius = parseInt(__config__.access("ZCradius"));


if(radius > 3 || isNaN(radius))
    radius = 3;

function destroy (x, y, z, id, data) {
    if (World.getBlock(x, y, z).id != 7) {
        World.destroyBlock (x, y, z, true);
    }
}

Callback.addCallback ("DestroyBlock", function (coords, block, player) {
    if (Player.getCarriedItem().id == ItemID.scapolite_destroy) {
        for (var vx = -radius; vx < radius; vx++)
            for (var vy = -radius; vy < radius; vy++)
                for (var vz = -radius; vz < radius; vz++)
                    destroy(coords.x+vx, coords.y+vy, coords.z+vz, block.id, block.data);
    }
});




// file: Other/api.js

ModAPI.registerAPI("ZCCore", {
Scapolite: Scapolite,
Latune: Latune,
Furnace: Furnace
});




// file: Other/api-register.js

const Scapolite = [ItemID.Scapolitebar, ItemID.Scapolitedust, ItemID.Scapolitepart];
var Latune = ItemID.Latunebar;
var Furnace = "LatuneFurnace";





