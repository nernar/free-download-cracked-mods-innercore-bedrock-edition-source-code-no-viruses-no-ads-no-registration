var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");



IDRegistry.genBlockID("rubyore");
Block.createBlock("rubyore", [
	{name: "Ruby Ore", texture: [["rubyore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.rubyore, "stone", 3, true);

Block.registerDropFunction("rubyore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.ruby, 1, 0]]
	}
	return [];
}, 3);



IDRegistry.genBlockID("rubyblock");
Block.createBlock("rubyblock", [
	{name: "Ruby Block", texture: [["rubyblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.rubyblock, "stone", 2, true);
Block.setDestroyLevel("rubyblock", 2);



IDRegistry.genBlockID("hardenedrubyblock");
Block.createBlock("hardenedrubyblock", [
	{name: "Hardened Ruby Block", texture: [["hardenedrubyblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.hardenedrubyblock, "stone", 2, true);
Block.setDestroyLevel("hardenedrubyblock", 2);





var FURNACE_FUEL_MAP = { 	5: 300, 	6: 100, 	17: 300, 	263: 1600, 	280: 100, 	268: 200, 	269: 200, 	270: 200, 	271: 200, 	85: 300, 	107: 300, 	134: 300, 	135: 300, 	158: 150, 	162: 300, 	163: 300, 	164: 300, 	184: 300, 	185: 300, 	186: 300, 	187: 300, 	53: 300, 	54: 300, 	58: 300 };

var guiTiyFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Ruby Furnace/Рубиновая печь"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}
	],
	
	elements: {
     "progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});



IDRegistry.genBlockID("rubyFurnace");
Block.createBlockWithRotation("rubyFurnace", [
	{name: "Ruby Furnace", texture: [["rubyfurnacetop", 0], ["rubyfurnacetop", 0], ["rubyfurnaceside", 0], ["rubyfurnace", 0], ["rubyfurnaceside", 0], ["rubyfurnaceside", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.rubyFurnace, "stone");

	Recipes.addShaped({id: BlockID.rubyFurnace, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', ItemID.ulruby, 0, 'a', 61, 0]);

TileEntity.registerPrototype(BlockID.rubyFurnace, {
	defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0
	},
	
	getGuiScreen: function(){
		return guiTiyFurnace;
	},
	
	addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(FURNACE_FUEL_MAP[item.id] && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
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
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 20){
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
		this.container.setScale("progressScale", this.data.progress / 20);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = FURNACE_FUEL_MAP[fuelSlot.id];
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





IDRegistry.genItemID("ruby");
Item.createItem("ruby", "Ruby", {name: "ruby", meta: 0}, {stack: 64});
IDRegistry.genItemID("hardenedruby");
Item.createItem("hardenedruby", "Hardened Ruby", {name: "hardenedruby", meta: 0}, {stack: 64});
IDRegistry.genItemID("ulruby");
Item.createItem("ulruby", "Ultimate Ruby", {name: "ultimateruby", meta: 0}, {stack: 64});

importLib("ToolType", "*");

IDRegistry.genItemID("rubySword");
IDRegistry.genItemID("rubyShovel");
IDRegistry.genItemID("rubyPickaxe");
IDRegistry.genItemID("rubyAxe");
IDRegistry.genItemID("rubyHoe");
Item.createItem("rubySword", "Ruby Sword", {name: "rubysword", meta: 0}, {stack: 1});
Item.createItem("rubyShovel", "Ruby Shovel", {name: "rubyshovel", meta: 0}, {stack: 1});
Item.createItem("rubyPickaxe", "Ruby Pickaxe", {name: "rubypickaxe", meta: 0}, {stack: 1});
Item.createItem("rubyAxe", "Ruby Axe", {name: "rubyaxe", meta: 0}, {stack: 1});
Item.createItem("rubyHoe", "Ruby Hoe", {name: "rubyhoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ruby", {durability: 1100, level: 2, efficiency: 8, damage: 10, enchantability: 14});

ToolAPI.setTool(ItemID.rubySword, "ruby", ToolType.sword);
ToolAPI.setTool(ItemID.rubyShovel, "ruby", ToolType.shovel);
ToolAPI.setTool(ItemID.rubyPickaxe, "ruby", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rubyAxe, "ruby", ToolType.axe);
ToolAPI.setTool(ItemID.rubyHoe, "ruby", ToolType.hoe);



IDRegistry.genItemID("ulrubySword");
IDRegistry.genItemID("ulrubyShovel");
IDRegistry.genItemID("ulrubyPickaxe");
IDRegistry.genItemID("ulrubyAxe");
IDRegistry.genItemID("ulrubyHoe");
Item.createItem("ulrubySword", "Ultimate Ruby Sword", {name: "urubysword", meta: 0}, {stack: 1});
Item.createItem("ulrubyShovel", "Ultimate Ruby Shovel", {name: "urubyshovel", meta: 0}, {stack: 1});
Item.createItem("ulrubyPickaxe", "Ultimate Ruby Pickaxe", {name: "urubypickaxe", meta: 0}, {stack: 1});
Item.createItem("ulrubyAxe", "Ultimate Ruby Axe", {name: "urubyaxe", meta: 0}, {stack: 1});
Item.createItem("ulrubyHoe", "Ultimate Ruby Hoe", {name: "urubyhoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ulruby", {durability: 2000, level: 3, efficiency: 10, damage: 30, enchantability: 20});

ToolAPI.setTool(ItemID.ulrubySword, "ulruby", ToolType.sword);
ToolAPI.setTool(ItemID.ulrubyShovel, "ulruby", ToolType.shovel);
ToolAPI.setTool(ItemID.ulrubyPickaxe, "ulruby", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ulrubyAxe, "ulruby", ToolType.axe);
ToolAPI.setTool(ItemID.ulrubyHoe, "ulruby", ToolType.hoe);



Recipes.addShaped({id: ItemID.rubySword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.rubyHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.ruby, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.ulrubySword, count: 1, data: 0}, [
	" a ",
	"aaa",
	" b "
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ulrubyShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ulrubyPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ulrubyAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ulrubyHoe, count: 1, data: 0}, [
	"ab",
	" b",
	" b"
], ['a', ItemID.ulruby, 0, 'b', 280, 0]);



IDRegistry.genItemID("rubyHelmet");
IDRegistry.genItemID("rubyChestplate");
IDRegistry.genItemID("rubyLeggings");
IDRegistry.genItemID("rubyBoots");

Item.createArmorItem("rubyHelmet", "Ruby Helmet", {name: "rubyhelmet"}, {type: "helmet", armor: 4, durability: 1100, texture: "armor/ruby1_1.png"});
Item.createArmorItem("rubyChestplate", "Ruby Chestplate", {name: "rubychestplate"}, {type: "chestplate", armor: 6, durability: 1100, texture: "armor/ruby1_1.png"});
Item.createArmorItem("rubyLeggings", "Ruby Leggings", {name: "rubyleggings"}, {type: "leggings", armor: 5, durability: 1100, texture: "armor/ruby2_2.png"});
Item.createArmorItem("rubyBoots", "Ruby Boots", {name: "rubyboots"}, {type: "boots", armor: 5, durability: 1100, texture: "armor/ruby1_1.png"});

Recipes.addShaped({id: ItemID.rubyHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.ruby, 0]);

Recipes.addShaped({id: ItemID.rubyChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.ruby, 0]);

Recipes.addShaped({id: ItemID.rubyLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.ruby, 0]);

Recipes.addShaped({id: ItemID.rubyBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.ruby, 0]);



IDRegistry.genItemID("urubyHelmet");
IDRegistry.genItemID("urubyChestplate");
IDRegistry.genItemID("urubyLeggings");
IDRegistry.genItemID("urubyBoots");

Item.createArmorItem("urubyHelmet", "Ultimate Ruby Helmet", {name: "urubyhelmet"}, {type: "helmet", armor: 4, durability: 2000, texture: "armor/uruby1_1.png"});
Item.createArmorItem("urubyChestplate", "Ultimate Ruby Chestplate", {name: "urubychestplate"}, {type: "chestplate", armor: 6, durability: 2000, texture: "armor/uruby1_1.png"});
Item.createArmorItem("urubyLeggings", "Ultimate Ruby Leggings", {name: "urubyleggings"}, {type: "leggings", armor: 5, durability: 2000, texture: "armor/uruby2_2.png"});
Item.createArmorItem("urubyBoots", "Ultimate Ruby Boots", {name: "urubyboots"}, {type: "boots", armor: 5, durability: 2000, texture: "armor/uruby1_1.png"});

Recipes.addShaped({id: ItemID.urubyHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.ulruby, 0]);

Recipes.addShaped({id: ItemID.urubyChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.ulruby, 0]);

Recipes.addShaped({id: ItemID.urubyLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.ulruby, 0]);

Recipes.addShaped({id: ItemID.urubyBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.ulruby, 0]);



Recipes.addShaped({id: BlockID.rubyblock, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.ruby, 0]);



Recipes.addFurnace(ItemID.ruby, ItemID.hardenedruby, 0);
Recipes.addFurnace(BlockID.rubyblock, BlockID.hardenedrubyblock, 0);



Recipes.addShaped({id: ItemID.ruby, count: 9, data: 0}, [
	"   ",
	" a ",
	"   "
], ['a', BlockID.rubyblock, 0]);



Recipes.addShaped({id: ItemID.hardenedruby, count: 9, data: 0}, [
	"   ",
	" a ",
	"   "
], ['a', BlockID.hardenedrubyblock, 0]);



Recipes.addShaped({id: ItemID.ulruby, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', BlockID.hardenedrubyblock, 0]);

Recipes.addShaped({id: BlockID.hardenedrubyblock, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.hardenedruby, 0]);




Translation.addTranslation("Ruby", {ru: "Рубин"});
Translation.addTranslation("Hardened Ruby", {ru: "Закалённый Рубин"});
Translation.addTranslation("Ultimate Ruby", {ru: "Ультиматный Рубин"});



Translation.addTranslation("Ruby Sword", {ru: "Рубиновый меч"});
Translation.addTranslation("Ruby Shovel", {ru: "Рубиновая лопата"});
Translation.addTranslation("Ruby Pickaxe", {ru: "Рубиновая кирка"});
Translation.addTranslation("Ruby Axe", {ru: "Рубиновый топор"});
Translation.addTranslation("Ruby Hoe", {ru: "Рубиновая мотыга"});



Translation.addTranslation("Ultimate Ruby Sword", {ru: "Ультиматный Рубиновый меч"});
Translation.addTranslation("Ultimate Ruby Shovel", {ru: "Ультиматная Рубиновая лопата"});
Translation.addTranslation("Ultimate Ruby Pickaxe", {ru: "Ультиматная Рубиновая кирка"});
Translation.addTranslation("Ultimate Ruby Axe", {ru: "Ультиматный Рубиновый топор"});
Translation.addTranslation("Ultimate Ruby Hoe", {ru: "Ультиматная Рубиновая мотыга"});



Translation.addTranslation("Ruby Helmet", {ru: "Рубиновый шлем"});
Translation.addTranslation("Ruby Chestplate", {ru: "Рубиновый нагрудник"});
Translation.addTranslation("Ruby Leggings", {ru: "Рубиновые поножи"});
Translation.addTranslation("Ruby Boots", {ru: "Рубиновые ботинки"});



Translation.addTranslation("Ultimate Ruby Helmet", {ru: "Ультиматный Рубиновый шлем"});
Translation.addTranslation("Ultimate Ruby Chestplate", {ru: "Ультиматный Рубиновый нагрудник"});
Translation.addTranslation("Ultimate Ruby Leggings", {ru: "Ультиматные Рубиновые поножи"});
Translation.addTranslation("Ultimate Ruby Boots", {ru: "Ультиматные Рубиновые ботинки"});



Translation.addTranslation("Ruby Ore", {ru: "Рубиновая руда"});
Translation.addTranslation("Ruby Block", {ru: "Рубиновый блок"});
Translation.addTranslation("Hardened Ruby Block", {ru: "Закалённый Рубиновый блок"});
Translation.addTranslation("Ruby Furnace", {ru: "Рубиновая печь"});






Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.rubyore,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});