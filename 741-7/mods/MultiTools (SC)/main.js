/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: api.js

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// data for PizdecLibb.getBlockDrop
// drop from some plants are not added
var noDropBlocks = [26, 30, 31, 32, 51, 59, 92, 99, 100, 104, 105, 106, 115, 127, 132, 141, 142, 144, 161, 175, 199, 244, 385, 386, 388, 389, 390, 391, 392, 462];

var PizdecLibb = {
	setTool: function(id, toolMaterial, ToolTypee, brokenId) {
		Item.setToolRender(id, true);
		if (typeof toolMaterial == "string") {
			toolMaterial = ToolAPI.toolMaterials[toolMaterial];
		}
		var toolData = {brokenId: brokenId || 0};
		for (var i in ToolTypee) {
			toolData[i] = ToolTypee[i];
		}
		if (!toolMaterial.durability) {
			toolMaterial.durability = Item.getMaxDamage(id);
		}
		if (!ToolTypee.blockTypes) {
			toolData.isNative = true;
			Item.setMaxDamage(id, toolMaterial.durability);
		}
		ToolAPI.registerTool(id, toolMaterial, ToolTypee.blockTypes, toolData);

		if (ToolTypee.enchantType) {
			Item.setEnchantType(id, ToolTypee.enchantType, toolMaterial.enchantability);
		}
		if (ToolTypee.useItem) {
			Item.registerUseFunctionForID(id, ToolTypee.useItem);
		}
		if (ToolTypee.destroyBlock) {
			Callback.addCallback("DestroyBlock", function(coords, block, player) {
				var item = Player.getCarriedItem();
				if (item.id == id) {
					toolData.destroyBlock(coords, coords.side, item, block);
				}
			});
		}
		if (ToolTypee.continueDestroyBlock) {
			Callback.addCallback("DestroyBlockContinue", function(coords, block, progress) {
				var item = Player.getCarriedItem();
				if (item.id == id) {
					toolData.continueDestroyBlock(item, coords, block, progress);
				}
			});
		}
	},
	
	breakCarriedTool: function(damage) {
		var item = Player.getCarriedItem();
		var enchant = ToolAPI.getEnchantExtraData(item.extra);
		if (Math.random() < 1 / (enchant.unbreaking + 1)) {
			item.data += damage;
		}
		if (item.data >= Item.getMaxDamage(item.id)) {
			var tool = ToolAPI.getToolData(item.id);
			item.id = tool ? tool.brokenId : 0;
			item.count = 1;
			item.data = 0;
		}
		Player.setCarriedItem(item.id, item.count, item.data, item.extra);
	},
	
	getBlockDrop: function(coords, id, data, level, enchant) {
		enchant = enchant || ToolAPI.getEnchantExtraData();
		var dropFunc = Block.dropFunctions[id];
		if (dropFunc) {
			return dropFunc(coords, id, data, level, enchant);
		}

		if (id == 3 || id == 5 || id == 6 || id == 12 || id == 19 || id == 35 || id == 85 || id == 158 || id == 171) return [[id, 1, data]];
		if (id == 17 || id == 162) return [[id, 1, data]]; // log
		if (id == 18 || id == 161) { // leaves
			if (enchant.silk) return [[id, 1, data]];
			return [];
		}
		if (id == 47) { // bookshelf
			if (enchant.silk) return [[47, 1, 0]];
			return [[340, 3, 0]];
		}
		if (id == 55) return [[331, 1, 0]]; // redstone wire
		if (id == 60) return [[3, 1, 0]]; // farmland
		if (id == 63 || id == 68) return [[338, 1, 0]]; // sign
		if (id == 64) return [[324, 1, 0]]; // door
		if (id == 75 || id == 76) return [[76, 1, 0]]; // redstone torch
		if (id == 79) { // ice
			if (enchant.silk) return [[79, 1, 0]];
			return [];
		}
		if (id == 83) return [[338, 1, 0]]; // sugar canes
		if (id == 89) return [[348, randomInt(2, 4), 0]]; // glowstone
		if (id == 93 || id == 94) return [[356, 1, 0]]; // repeater
		if (id == 103) return [[360, randomInt(3, 7), 0]]; // melon
		if (id == 123 || id == 124) return [[123, 1, 0]]; // redstone lamp
		if (id == 140) return [[390, 1, 0]]; // pot
		if (id == 149 || id == 150) return [[404, 1, 0]]; // comparator
		if (id == 151 || id == 178) return [[151, 1, 0]]; // daylight detector
		// doors
		if (id == 193) return [[427, 1, 0]];
		if (id == 194) return [[428, 1, 0]];
		if (id == 195) return [[429, 1, 0]];
		if (id == 196) return [[430, 1, 0]];
		if (id == 197) return [[431, 1, 0]];

		if (id == 393) return [[335, 1, 0]]; // kelp
		if (id == 464) return [[720, 1, 0]]; // campfire
		// signs
		if (id == 436 || id == 437) return [[472, 1, 0]];
		if (id == 441 || id == 442) return [[473, 1, 0]];
		if (id == 443 || id == 444) return [[474, 1, 0]];
		if (id == 445 || id == 446) return [[475, 1, 0]];
		if (id == 447 || id == 448) return [[476, 1, 0]];
		if (id == 467) return [[-212, 1, data]]; // wood
		if (noDropBlocks.indexOf(id) != -1) return [];
		
		return [[Block.convertBlockToItemId(id), 1, 0]];
	},
	
	isBlock: function(id) {
		return IDRegistry.getIdInfo(id).startsWith("block");
	},

	isItem: function(id) {
		return IDRegistry.getIdInfo(id).startsWith("item");
	},

	addBlockDropOnExplosion: function(nameID) {
		var numericID = BlockID[nameID];
		Block.registerPopResourcesFunctionForID(numericID, function(coords, block, f, i) {
			if (Math.random() < 0.25) {
				var dropFunc = Block.getDropFunction(block.id);
				var drop = dropFunc(coords, block.id, block.data, 127, {});
				for (var i in drop) {
					World.drop(coords.x + .5, coords.y + .5, coords.z + .5, drop[i][0], drop[i][1], drop[i][2]);
				}
			}
		});
	}
}

// old versions compatibility
ToolAPI.setTool = PizdecLibb.setTool;
ToolAPI.breakCarriedTool = PizdecLibb.breakCarriedTool;
var MultiTools = {
	addItem: function(id, material, repairIds){
IDRegistry.genItemID(id + "MultiTool");
Item.createItem(id + "MultiTool", Translation.translate(id + " MultiTool"), {name: id + "MultiTool", meta: 0}, {stack: 1});
if(repairIds && repairIds[0])
Item.addRepairItemIds(id+"MultiTool", repairIds)
PizdecLibb.setTool(ItemID[id+"MultiTool"], material, multitool);

Item.addCreativeGroup("MultiTools", Translation.translate("MultiTools"), [
	ItemID[id+"MultiTool"]
	])
	Recipes.addShaped({id: ItemID[id+"MultiTool"], count: 1, data: 0}, [
"abc",
"dfe",
" f "
], ["a", VanillaItemID[(id).toLowerCase()+(id == "Wood" || id == "Gold"?"en":"")+"_pickaxe"], 0, "b", VanillaItemID[(id).toLowerCase()+(id == "Wood" || id == "Gold"?"en":"")+"_axe"], 0, 
"c", VanillaItemID[(id).toLowerCase()+(id == "Wood" || id == "Gold"?"en":"")+"_sword"], 0,
"d", VanillaItemID[(id).toLowerCase()+(id == "Wood" || id == "Gold"?"en":"")+"_hoe"], 0,  
"e", VanillaItemID[(id).toLowerCase()+(id == "Wood" || id == "Gold"?"en":"")+"_shovel"], 0, 
"f", VanillaItemID.stick, 0]);
	}
}

let multitool = {
		enchantType: Native.EnchantType.all,
		damage: 4,
		blockTypes: ["fibre", "plant", "dirt", "stone", "wood"],
		calcDestroyTime: function(item, coords, block, params, destroyTime, enchant) {
			if (block.id == 30) return 0.08;
			if (block.id == 35) return 0.05;
			var material = ToolAPI.getBlockMaterialName(block.id);
			if (material == "fibre" || material == "plant") {
				return params.base/2.5;
			}
			return destroyTime;
		},
		useItem: function (coords, item, block, player){
			let logID;
			let region = BlockSource.getDefaultForActor(player);
			block = region.getBlock(coords.x, coords.y, coords.z)
			let axis = block.getState(EBlockStates.PILLAR_AXIS)
if (block.id == 2) {
				region.setBlock(coords.x, coords.y, coords.z, Entity.getSneaking(player)?198:60, 0);
				World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "dig.grass", 0.5, 0.8);
				PizdecLibb.breakCarriedTool(1, player);
				}
			else if (block.id == 17) {
				if (block.data == 0) logID = VanillaTileID.stripped_oak_log;
				if (block.data == 1) logID = VanillaTileID.stripped_spruce_log;
				if (block.data == 2) logID = VanillaTileID.stripped_birch_log;
				if (block.data == 3) logID = VanillaTileID.stripped_jungle_log;
				block = new BlockState(logID, {pillar_axis: axis})
				region.setBlock(coords.x, coords.y, coords.z, block);
				PizdecLibb.breakCarriedTool(1, player);
				World.playSound(coords.x + .5, coords.y + .5, coords.z + .5, "hit.wood", 0.5, 0.8)
				}
			else if (block.id == 162) {
				World.playSound(coords.x + .5, coords.y + .5, coords.z + .5, "hit.wood", 0.5, 0.8)
				if (block.data == 0) logID = VanillaTileID.stripped_acacia_log;
				else logID = VanillaTileID.stripped_dark_oak_log;
				block = new BlockState(logID, {pillar_axis: axis})
				region.setBlock(coords.x, coords.y, coords.z, block);
				PizdecLibb.breakCarriedTool(1, player);
			}
			else if (block.id == 558){
				logID = 539
				World.playSound(coords.x + .5, coords.y + .5, coords.z + .5, "hit.wood", 0.5, 0.8)
				region.setBlock(coords.x, coords.y, coords.z, logID, axis);
				PizdecLibb.breakCarriedTool(1, player);
				}
				else if (block.id == 501){
				logID = 537
				World.playSound(coords.x + .5, coords.y + .5, coords.z + .5, "hit.wood", 0.5, 0.8)
				
				region.setBlock(coords.x, coords.y, coords.z, logID, axis);
				PizdecLibb.breakCarriedTool(1, player);
				}
		}
	}
MultiTools.addItem("Wood", "wood");
MultiTools.addItem("Stone", "stone");
MultiTools.addItem("Gold", "golden", [VanillaItemID.gold_ingot]);
MultiTools.addItem("Iron", "iron", [VanillaItemID.iron_ingot]);
MultiTools.addItem("Diamond", "diamond", [VanillaItemID.diamond]);
MultiTools.addItem("Netherite", "netherite");

let multitoolUnbreakable = {
		enchantType: Native.EnchantType.all,
		damage: 4,
		blockTypes: ["fibre", "plant", "dirt", "stone", "wood"],
		calcDestroyTime: function(item, coords, block, params, destroyTime, enchant) {
			if (block.id == 30) return 0.08;
			if (block.id == 35) return 0.05;
			var material = ToolAPI.getBlockMaterialName(block.id);
			if (material == "fibre" || material == "plant") {
				return params.base/2.5;
			}
			return destroyTime;
		},
		useItem: function (coords, item, block, player){
			let logID;
			let region = BlockSource.getDefaultForActor(player);
			block = region.getBlock(coords.x, coords.y, coords.z)
			let axis = block.getState(EBlockStates.PILLAR_AXIS)
if (block.id == 2) {
				region.setBlock(coords.x, coords.y, coords.z, Entity.getSneaking(player)?198:60, 0);
				World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "dig.grass", 0.5, 0.8);
				}
			else if (block.id == 17) {
				if (block.data == 0) logID = VanillaTileID.stripped_oak_log;
				if (block.data == 1) logID = VanillaTileID.stripped_spruce_log;
				if (block.data == 2) logID = VanillaTileID.stripped_birch_log;
				if (block.data == 3) logID = VanillaTileID.stripped_jungle_log;
				block = new BlockState(logID, {pillar_axis: axis})
				region.setBlock(coords.x, coords.y, coords.z, block);
				World.playSound(coords.x + .5, coords.y + .5, coords.z + .5, "hit.wood", 0.5, 0.8)
				}
			else if (block.id == 162) {
				World.playSound(coords.x + .5, coords.y + .5, coords.z + .5, "hit.wood", 0.5, 0.8)
				if (block.data == 0) logID = VanillaTileID.stripped_acacia_log;
				else logID = VanillaTileID.stripped_dark_oak_log;
				block = new BlockState(logID, {pillar_axis: axis})
				region.setBlock(coords.x, coords.y, coords.z, block);
			}
			else if (block.id == 558){
				logID = 539
				World.playSound(coords.x + .5, coords.y + .5, coords.z + .5, "hit.wood", 0.5, 0.8)
				region.setBlock(coords.x, coords.y, coords.z, logID, axis);
				}
				else if (block.id == 501){
				logID = 537
				World.playSound(coords.x + .5, coords.y + .5, coords.z + .5, "hit.wood", 0.5, 0.8)
				region.setBlock(coords.x, coords.y, coords.z, logID, axis);
				}
		}
	}
IDRegistry.genItemID("Star" + "MultiTool");
Item.createItem("Star" + "MultiTool", Translation.translate("Star" + " MultiTool"), {name: "Star" + "MultiTool", meta: 0}, {stack: 1});
Item.addCreativeGroup("MultiTools", Translation.translate("MultiTools"), [
	ItemID["Star"+"MultiTool"]
	])
PizdecLibb.setTool(ItemID["Star"+"MultiTool"], "netherite", multitoolUnbreakable);
	Recipes.addShaped({id: ItemID.StarMultiTool, count: 1, data: Item.getMaxDamage(ItemID.StarMultiTool)}, [
"ab"
], ["a", ItemID.NetheriteMultiTool, -1, "b", 763, 0]);

Translation.addTranslation("Gold MultiTool", {ru: "Золотой Мульти-Инструмент"})
Translation.addTranslation("Wood MultiTool", {ru: "Деревянный Мульти-Инструмент"})
Translation.addTranslation("Stone MultiTool", {ru: "Каменный Мульти-Инструмент"})
Translation.addTranslation("Iron MultiTool", {ru: "Железный Мульти-Инструмент"})
Translation.addTranslation("Diamond MultiTool", {ru: "Алмазный Мульти-Инструмент"})
Translation.addTranslation("Netherite MultiTool", {ru: "Незеритовый Мульти-Инструмент"})
Translation.addTranslation("Star MultiTool", {ru: "Звёздный Мульти-Инструмент"})

ModAPI.addAPICallback("DynamicLight", function (api){
	api.addGlowingItemID(ItemID.StarMultiTool, 15, true)
	})
ModAPI.addAPICallback("OresAPI", function (api){
IDRegistry.genItemID("Adamantite" + "MultiTool");
Item.createItem("Adamantite" + "MultiTool", Translation.translate("Adamantite" + " MultiTool"), {name: "Adamantite" + "MultiTool", meta: 0}, {stack: 1});
Item.addCreativeGroup("MultiTools", Translation.translate("MultiTools"), [
	ItemID["Adamantite"+"MultiTool"]
	])
PizdecLibb.setTool(ItemID["Adamantite"+"MultiTool"], "adamantite", multitool);
	Recipes.addShaped({id: ItemID.AdamantiteMultiTool, count: 1, data: 0}, [
"abc",
"def",
" e "
], ["a", ItemID.adamantiteSword, 0, "b", ItemID.adamantitePickaxe, 0, "c", ItemID.adamantiteAxe, 0, "d", ItemID.adamantiteHoe, 0, "e", VanillaItemID.stick, 0, "f", ItemID.adamantiteShovel, 0]);

Translation.addTranslation("Adamantite MultiTool", {ru: "Адамантитовый Мульти-Инструмент"})

IDRegistry.genItemID("Lead" + "MultiTool");
Item.createItem("Lead" + "MultiTool", Translation.translate("Lead" + " MultiTool"), {name: "Lead" + "MultiTool", meta: 0}, {stack: 1});
Item.addCreativeGroup("MultiTools", Translation.translate("MultiTools"), [
	ItemID["Lead"+"MultiTool"]
	])
PizdecLibb.setTool(ItemID["Lead"+"MultiTool"], "lead", multitool);
	Recipes.addShaped({id: ItemID.LeadMultiTool, count: 1, data: 0}, [
"abc",
"def",
" e "
], ["a", ItemID.leadSword, 0, "b", ItemID.leadPickaxe, 0, "c", ItemID.leadAxe, 0, "d", ItemID.leadHoe, 0, "e", VanillaItemID.stick, 0, "f", ItemID.leadShovel, 0]);

Translation.addTranslation("Lead MultiTool", {ru: "Свинцовый Мульти-Инструмент"})

IDRegistry.genItemID("Malachite" + "MultiTool");
Item.createItem("Malachite" + "MultiTool", Translation.translate("Malachite" + " MultiTool"), {name: "Malachite" + "MultiTool", meta: 0}, {stack: 1});
Item.addCreativeGroup("MultiTools", Translation.translate("MultiTools"), [
	ItemID["Malachite"+"MultiTool"]
	])
PizdecLibb.setTool(ItemID["Malachite"+"MultiTool"], "malachite", multitool);
	Recipes.addShaped({id: ItemID.MalachiteMultiTool, count: 1, data: 0}, [
"abc",
"def",
" e "
], ["a", ItemID.malachiteSword, 0, "b", ItemID.malachitePickaxe, 0, "c", ItemID.malachiteAxe, 0, "d", ItemID.malachiteHoe, 0, "e", VanillaItemID.stick, 0, "f", ItemID.malachiteShovel, 0]);

Translation.addTranslation("Malachite MultiTool", {ru: "Малахитовый Мульти-Инструмент"})

IDRegistry.genItemID("Uranium" + "MultiTool");
Item.createItem("Uranium" + "MultiTool", Translation.translate("Uranium" + " MultiTool"), {name: "Uranium" + "MultiTool", meta: 0}, {stack: 1});
Item.addCreativeGroup("MultiTools", Translation.translate("MultiTools"), [
	ItemID["Uranium"+"MultiTool"]
	])
PizdecLibb.setTool(ItemID["Uranium"+"MultiTool"], "uranium", multitool);
	Recipes.addShaped({id: ItemID.UraniumMultiTool, count: 1, data: 0}, [
"abc",
"def",
" e "
], ["a", ItemID.uraniumSword, 0, "b", ItemID.uraniumPickaxe, 0, "c", ItemID.uraniumAxe, 0, "d", ItemID.uraniumHoe, 0, "e", VanillaItemID.stick, 0, "f", ItemID.uraniumShovel, 0]);

Translation.addTranslation("Uranium MultiTool", {ru: "Урановый Мульти-Инструмент"})
	})
	ModAPI.addAPICallback("ICore", function (api){
		ToolAPI.addToolMaterial("bronze", {
    durability: 225,
    level: 3,
    efficiency: 6,
    damage: 2,
    enchantability: 15})
		IDRegistry.genItemID("Bronze" + "MultiTool");
Item.createItem("Bronze" + "MultiTool", Translation.translate("Bronze" + " MultiTool"), {name: "Bronze" + "MultiTool", meta: 0}, {stack: 1});
Item.addCreativeGroup("MultiTools", Translation.translate("MultiTools"), [
	ItemID["Bronze"+"MultiTool"]
	])
PizdecLibb.setTool(ItemID["Bronze"+"MultiTool"], "bronze", multitool);
	Recipes.addShaped({id: ItemID.BronzeMultiTool, count: 1, data: 0}, [
"abc",
"def",
" e "
], ["a", ItemID.bronzeSword, 0, "b", ItemID.bronzePickaxe, 0, "c", ItemID.bronzeAxe, 0, "d", ItemID.bronzeHoe, 0, "e", VanillaItemID.stick, 0, "f", ItemID.bronzeShovel, 0]);

Translation.addTranslation("Bronze MultiTool", {ru: "Бронзовый Мульти-Инструмент"})
		})




