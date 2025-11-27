/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 12
*/



// file: header.js

IMPORT("ChargeItem");
IMPORT("ToolLib");
var ENERGY_PACK_TICK = ICore.requireGlobal("ENERGY_PACK_TICK");
var canTileBeReplaced = ModAPI.requireGlobal("canTileBeReplaced");
var fallVelocity = ICore.requireGlobal("fallVelocity");




// file: translation.js

// Items
Translation.addTranslation("Superconductor Cover", {ru: "Изоляция сверхпроводника", zh: "超导体绝缘层"});
Translation.addTranslation("Superconductor", {ru: "Сверхпроводник", zh: "超导体"});
Translation.addTranslation("Engine Booster", {ru: "Ускоритель двигателя", zh: "喷射引擎"});
Translation.addTranslation("Cooling Core", {ru: "Охлаждающее ядро", zh: "降温核心"});
Translation.addTranslation("Gravitation Engine", {ru: "Гравитационный двигатель", zh: "重力引擎"});
Translation.addTranslation("Magnetron", {ru: "Магнетрон", zh: "磁控管"});
Translation.addTranslation("Vajra Core", {ru: "Ядро ваджры", zh: "金刚杵核心"});

Translation.addTranslation("Vajra", {ru: "Ваджра", zh: "金刚杵"});
Translation.addTranslation("Advanced Diamond Drill", {ru: "Улучшенный алмазный бур", zh: "进阶钻石电钻"});
Translation.addTranslation("Advanced Chainsaw", {ru: "Улучшенная электропила", zh: "进阶电锯"});
Translation.addTranslation("GraviTool", {ru: "Гравитул", zh: "万能重力工具"});

Translation.addTranslation("GraviChestplate", {ru: "Гравитационный жилет", zh: "重力胸甲"});
Translation.addTranslation("Advanced NanoChestplate", {ru: "Улучшенный наножилет", zh: "进阶纳米重力胸甲"});
Translation.addTranslation("Ultimate Lappack", {ru: "Совершенный лаппак", zh: "终极兰波顿电池背包"});
Translation.addTranslation("Advanced Jetpack", {ru: "Улучшенный джетпак", zh: "进阶电力喷气背包"});

// Text
Translation.addTranslation("Hoe activated", {ru: "Мотыга активирована", zh: "锄头激活"});
Translation.addTranslation("Treetap activated", {ru: "Краник активирован", zh: "木龙头激活"});
Translation.addTranslation("Wrench activated", {ru: "Ключ активирован", zh: "扳手激活"});
Translation.addTranslation("Gravitation engine disabled", {ru: "Гравитационный двигатель выключен", zh: "重力引擎关闭"});
Translation.addTranslation("Gravitation engine enabled", {ru: "Гравитационный двигатель включен", zh: "重力引擎启动"});
Translation.addTranslation("Not enough energy to run Gravitation engine!", {ru: "Не хватает энергии для запуска гравитационного двигателя!", zh: "警告!警告!没有足够的能源去启动重力引擎!"});
Translation.addTranslation("Warning! Your's energy cell is depleted! Gravitation engine off", {ru: "Внимание! У вас закончилась энергия. Гравитационный двигатель отключен.", zh: "警告!警告!能源不足,重力引擎离线,请做好冲击准备."});




// file: energy_level.js

var windowPos = __config__.access("energy_text.pos");
var windowScale = parseInt(__config__.access("energy_text.scale"));
var windowX = {left: 5, center: 500 - windowScale/2, right: 1000 - windowScale}[windowPos];
var EnergyLevelUI = {
	data: [], 
	isEnabled: false,
	container: null,
	Window: new UI.Window({
		location: {
			x: windowX,
			y: __config__.access("energy_text.y"),
			width: windowScale,
			height: 30
		},
		drawing: [{type: "background", color: 0}],
		elements: {
			"text1": {type: "text", font: {size: 85, color: android.graphics.Color.WHITE}, x: 0, y: 0, width: 300, height: 30, text: "Energy level: "},
			"text2": {type: "text", font: {size: 85, color: android.graphics.Color.GREEN}, x: 725, y: 0, width: 300, height: 30, text: "100%"},
		}
	}),
	setFor: function(id){
		this.data.push(id);
	}
}

EnergyLevelUI.Window.setAsGameOverlay(true);

var currentUIscreen;
Callback.addCallback("NativeGuiChanged", function(screenName){
	currentUIscreen = screenName;
	if(screenName != "hud_screen" && screenName != "in_game_play_screen"){
		if(EnergyLevelUI.container){
			EnergyLevelUI.container.close();
			EnergyLevelUI.container = null;
		}
	}
});

Callback.addCallback("tick", function(){
	var armor = Player.getArmorSlot(1);
	if((EnergyLevelUI.data.indexOf(armor.id) != -1) && (currentUIscreen == "hud_screen" || currentUIscreen == "in_game_play_screen")){
		if(!EnergyLevelUI.container){
			EnergyLevelUI.container = new UI.Container();
			EnergyLevelUI.container.openAs(EnergyLevelUI.Window);
		}
		var maxDamage = Item.getMaxDamage(armor.id);
		var energy = Math.ceil((maxDamage - armor.data)/(maxDamage - 1)*100);
		var element = EnergyLevelUI.Window.content.elements.text2;
		if(energy <= 1){
			element.font.color = android.graphics.Color.RED;
		}else if(energy <= 10){
			element.font.color = android.graphics.Color.YELLOW;
		}else{
			element.font.color = android.graphics.Color.GREEN;
		}
		EnergyLevelUI.container.setText("text2", energy + "%");
	}
	else if(EnergyLevelUI.container){
		EnergyLevelUI.container.close();
		EnergyLevelUI.container = null;
	}
});




// file: components.js

IDRegistry.genItemID("superconductorCover");
IDRegistry.genItemID("superconductor");
Item.createItem("superconductorCover", "Superconductor Cover", {name: "superconductor_cover"});
Item.createItem("superconductor", "Superconductor", {name: "superconductor"});

IDRegistry.genItemID("engineBoost");
Item.createItem("engineBoost", "Engine Booster", {name: "engine_boost"});

IDRegistry.genItemID("coolingCore");
Item.createItem("coolingCore", "Cooling Core", {name: "cooling_core"});

IDRegistry.genItemID("graviEngine");
Item.createItem("graviEngine", "Gravitation Engine", {name: "gravi_engine"});

Recipes.addShaped({id: ItemID.superconductorCover, count: 3, data: 0}, [
	"aba",
	"ccc",
	"aba"
], ['a', ItemID.plateAlloy, 0, 'b', ItemID.plateReinforcedIridium, 0, 'c', ItemID.carbonPlate, 0]);

Recipes.addShaped({id: ItemID.superconductor, count: 3, data: 0}, [
	"ccc",
	"oao",
	"ccc"
], ['a', 266, 0, 'c', ItemID.superconductorCover, 0, 'o', ItemID.cableOptic, 0]);

Recipes.addShaped({id: ItemID.coolingCore, count: 1, data: 0}, [
	"chc",
	"pbp",
	"chc"
], ['b', ItemID.plateReinforcedIridium, 0, 'c', ItemID.coolantCell6, 1, 'h', ItemID.heatExchangerAdv, 1, 'p', ItemID.reactorPlatingHeat, 0]);

Recipes.addShaped({id: ItemID.graviEngine, count: 1, data: 0}, [
	"csc",
	"xax",
	"csc"
], ['x', ItemID.coolingCore, 0, 's', ItemID.superconductor, 0, 'a', BlockID.transformerHV, 0, 'c', BlockID.teslaCoil, 0]);

Recipes.addShaped({id: ItemID.engineBoost, count: 1, data: 0}, [
	"gag",
	"cbc",
	"aha"
], ['a', ItemID.plateAlloy, 0, 'b', ItemID.upgradeOverclocker, 0, 'c', ItemID.circuitBasic, 0, 'h', ItemID.heatVentAdv, 1, 'g', 348, 0]);




// file: armor/ultimate_lappack.js

IDRegistry.genItemID("ultimateLappack");
Item.createArmorItem("ultimateLappack", "Ultimate Lappack", {name: "ultimate_lappack"}, {type: "chestplate", armor: 5, durability: 6e7, texture: "armor/ultimateLappack.png", isTech: true});
ChargeItemRegistry.registerItem(ItemID.ultimateLappack, "Eu", 6e7, 100000, 4, "storage", true);
ICore.ItemName.setRarity(ItemID.ultimateLappack, 2);
Item.registerNameOverrideFunction(ItemID.ultimateLappack, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.ultimateLappack, count: 1, data: Item.getMaxDamage(ItemID.ultimateLappack)}, [
	"aba",
	"aea",
	"asa"
], ['a', ItemID.storageLapotronCrystal, -1, 'e', ItemID.lappack, -1, 'b', ItemID.plateReinforcedIridium, 0, 's', ItemID.superconductor, 0], ChargeItemRegistry.transferEnergy);

ICore.registerEnergyPack("ultimateLappack", 4, 100000);




// file: armor/advanced_jetpack.js

IDRegistry.genItemID("advJetpack");
Item.createArmorItem("advJetpack", "Advanced Jetpack", {name: "advanced_jetpack"}, {type: "chestplate", armor: 5, durability: 3e6, texture: "armor/advJetpack.png", isTech: true});
ChargeItemRegistry.registerItem(ItemID.advJetpack, "Eu", 3000000, 4, 8192, "storage", true);
ICore.ItemName.setRarity(ItemID.advJetpack, 1);
Item.registerNameOverrideFunction(ItemID.advJetpack, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.advJetpack, count: 1, data: Item.getMaxDamage(ItemID.advJetpack)}, [
	"cjc",
	"bab",
	"oxo"
], ['x', ItemID.circuitAdvanced, 0, 'j', ItemID.jetpack, -1, 'a', ItemID.lappack, -1, 'b', ItemID.engineBoost, 0, 'c', ItemID.carbonPlate, 0, 'o', ItemID.cableOptic, 0], ChargeItemRegistry.transferEnergy);

ICore.UI.setArmorButton(ItemID.advJetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.advJetpack, "button_hover");
EnergyLevelUI.setFor(ItemID.advJetpack);

Armor.registerFuncs("advJetpack", {
	hurt: function(params, item, index, maxDamage){
		if(params.type==5){
			var vel = Player.getVelocity().y;
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height) - 3;
				}
			}
			if(damage <= 0 && height < 22){
				Game.prevent();
			}
			else if(params.damage > damage){
				var player = Player.get();
				Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
			}
		}
		return false;
	},
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var hover = extra? extra.getBoolean("hover") : false;
		if(hover && slot.data < maxDamage){
			var vel = Player.getVelocity();
			if(Math.abs(vel.y - fallVelocity) < 0.0001){
				extra.putBoolean("hover", false);
				Player.setArmorSlot(index, slot.id, 1, slot.data, extra);
				Game.message("§4" + Translation.translate("Hover mode disabled"));
			}
			else if(vel.y < -0.1){
				Player.setVelocity(vel.x, -0.1, vel.z);
				if(World.getThreadTime() % 5 == 0){
					Player.setArmorSlot(1, slot.id, 1, Math.min(slot.data+20, maxDamage), extra);
				}
			}
		}
		ENERGY_PACK_TICK(slot, maxDamage, 4, 8192);
		return false;
	},
});




// file: armor/advanced_nano.js

IDRegistry.genItemID("advNanoChestplate");
Item.createArmorItem("advNanoChestplate", "Advanced NanoChestplate", {name: "advanced_nano_chestplate"}, {type: "chestplate", armor: 8, durability: 5000, texture: "armor/advNanoChestplate.png", isTech: true});
ChargeItemRegistry.registerItem(ItemID.advNanoChestplate, "Eu", 3000000, 8192, 4, "storage", true);
ICore.ItemName.setRarity(ItemID.advNanoChestplate, 1);
Item.registerNameOverrideFunction(ItemID.advNanoChestplate, ICore.ItemName.showItemStorage);

IDRegistry.genItemID("advNanoChestplateDischarged");
Item.createArmorItem("advNanoChestplateDischarged", "Advanced NanoChestplate", {name: "advanced_nano_chestplate"}, {type: "chestplate", armor: 6, durability: 5000, texture: "armor/advNanoChestplate.png", isTech: true});
ChargeItemRegistry.registerItem(ItemID.advNanoChestplateDischarged, "Eu", 3000000, 8192, 4, "storage");
ICore.ItemName.setRarity(ItemID.advNanoChestplateDischarged, 1);
Item.registerNameOverrideFunction(ItemID.advNanoChestplateDischarged, ICore.ItemName.showItemStorage);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.advNanoChestplate, count: 1, data: Item.getMaxDamage(ItemID.advNanoChestplate)}, [
		"cjc",
		"cnc",
		"oxo"
	], ['x', ItemID.circuitAdvanced, 0, 'n', ItemID.nanoChestplate, -1, 'j', ItemID.advJetpack, -1, 'c', ItemID.carbonPlate, 0, 'o', ItemID.cableOptic, 0], ChargeItemRegistry.transferEnergy);
	if(__config__.getBool("change_quantum_suit_recipe")){
	Recipes.deleteRecipe({id: ItemID.quantumChestplate, count: 1, data: Item.getMaxDamage(ItemID.quantumChestplate)})
	Recipes.addShaped({id: ItemID.quantumChestplate, count: 1, data: Item.getMaxDamage(ItemID.quantumChestplate)}, [
		"bxb",
		"a#a",
		"aba"
	], ['#', ItemID.storageLapotronCrystal, -1, 'x', ItemID.advNanoChestplate, -1, 'a', ItemID.plateReinforcedIridium, 0, 'b', ItemID.plateAlloy, 0], ChargeItemRegistry.transferEnergy);}
});

ICore.UI.setArmorButton(ItemID.advNanoChestplate, "button_fly");
ICore.UI.setArmorButton(ItemID.advNanoChestplate, "button_hover");
ICore.UI.setArmorButton(ItemID.advNanoChestplateDischarged, "button_fly");
ICore.UI.setArmorButton(ItemID.advNanoChestplateDischarged, "button_hover");
EnergyLevelUI.setFor(ItemID.advNanoChestplate);
EnergyLevelUI.setFor(ItemID.advNanoChestplate);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.advNanoChestplate, {charged: ItemID.advNanoChestplate, uncharged: ItemID.advNanoChestplateDischarged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.advNanoChestplateDischarged, {charged: ItemID.advNanoChestplate, uncharged: ItemID.advNanoChestplateDischarged});

var ADV_NANO_ARMOR_FUNCS = {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage * 2000;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		if(type==5){
			var vel = Player.getVelocity().y;
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height) - 3;
				}
			}
			if(damage <= 0 && height < 22){
				Game.prevent();
			}
			else if(params.damage > damage){
				var player = Player.get();
				Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
			}
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var armor = ICore.Recipe.getRecipeResult("nano-armor-charge", slot.id);
		if(slot.data >= maxDamage){
			slot.id = armor.uncharged;
			Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		}
		else{
			if(slot.id != armor.charged){
				slot.id = armor.charged;
				Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
			}
			var extra = slot.extra;
			var hover = extra? extra.getBoolean("hover") : false;
			if(hover){
				var vel = Player.getVelocity();
				if(Math.abs(vel.y - fallVelocity) < 0.0001){
					extra.putBoolean("hover", false);
					Player.setArmorSlot(index, slot.id, 1, slot.data, extra);
					Game.message("§4" + Translation.translate("Hover mode disabled"));
				}
				else if(vel.y < -0.1){
					Player.setVelocity(vel.x, -0.1, vel.z);
					if(World.getThreadTime() % 5 == 0){
						Player.setArmorSlot(1, slot.id, 1, Math.min(slot.data+20, maxDamage), extra);
					}
				}
			}
			ENERGY_PACK_TICK(slot, maxDamage, 4, 8192);
		}
		return false;
	}
}

Armor.registerFuncs("advNanoChestplate", ADV_NANO_ARMOR_FUNCS);
Armor.registerFuncs("advNanoChestplateDischarged", ADV_NANO_ARMOR_FUNCS);




// file: armor/gravi_chestplate.js

IDRegistry.genItemID("graviChestplate");
Item.createArmorItem("graviChestplate", "GraviChestplate", {name: "gravi_chestplate"}, {type: "chestplate", armor: 9, durability: 5000, texture: "armor/graviChestplate.png", isTech: true});
ChargeItemRegistry.registerItem(ItemID.graviChestplate, "Eu", 6e7, 100000, 4, "storage", true);
ICore.ItemName.setRarity(ItemID.graviChestplate, 3);
Item.registerNameOverrideFunction(ItemID.graviChestplate, ICore.ItemName.showItemStorage);

IDRegistry.genItemID("graviChestplateDischarged");
Item.createArmorItem("graviChestplateDischarged", "GraviChestplate", {name: "gravi_chestplate"}, {type: "chestplate", armor: 6, durability: 5000, texture: "armor/graviChestplate.png", isTech: true});
ChargeItemRegistry.registerItem(ItemID.graviChestplateDischarged, "Eu", 6e7, 100000, 4, "storage");
ICore.ItemName.setRarity(ItemID.graviChestplateDischarged, 3);
Item.registerNameOverrideFunction(ItemID.graviChestplateDischarged, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.graviChestplate, count: 1, data: Item.getMaxDamage(ItemID.graviChestplate)}, [
	"sqs",
	"gxg",
	"ses"
], ['x', BlockID.transformerHV, 0, 'q', ItemID.quantumChestplate, -1, 'q', ItemID.ultimateLappack, -1, 'g', ItemID.graviEngine, 0, 's', ItemID.superconductor, 0], ChargeItemRegistry.transferEnergy);

ICore.UI.registerButton("gravi_engine", {
	y: 1000,
	type: "button",
	bitmap: "button_gravi_off",
	scale: 50,
	clicker: {
		onClick: function(){
			var armor = Player.getArmorSlot(1);
			var extra = armor.extra;
			if(extra){
				var fly = extra.getBoolean("fly");
			}
			else{
				var fly = false;
				extra = new ItemExtraData();
			}
			if(fly){
				extra.putBoolean("fly", false);
				Player.setFlyingEnabled(false);
				Player.setFlying(false);
				Game.message("§4" + Translation.translate("Gravitation engine disabled"));
			}
			else if(armor.data < Item.getMaxDamage(ItemID.graviChestplate)){
				extra.putBoolean("fly", true);
				Player.setFlyingEnabled(true);
				Game.message("§2" + Translation.translate("Gravitation engine enabled"));
			}
			else{
				Game.message(Translation.translate("Not enough energy to run Gravitation engine!"));
			}
			Player.setArmorSlot(1, armor.id, 1, armor.data, extra);
		}
	}
});

ICore.UI.onButtonUpdate("gravi_engine", function(element){
	var armor = Player.getArmorSlot(1);
	var extra = armor.extra;
	if(extra && extra.getBoolean("fly")){
		element.bitmap = "button_gravi_on";
	}else{
		element.bitmap = "button_gravi_off";
	}
});

ICore.UI.setArmorButton(ItemID.graviChestplate, "gravi_engine");
ICore.UI.setArmorButton(ItemID.graviChestplateDischarged, "gravi_engine");
EnergyLevelUI.setFor(ItemID.graviChestplate);
EnergyLevelUI.setFor(ItemID.graviChestplateDischarged);

Armor.registerFuncs("graviChestplate", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*2500;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.graviChestplateDischarged;
			if(fly){
				Game.message("§4" + Translation.translate("Warning! Your's energy cell is depleted! Gravitation engine off"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 50000, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 4, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("graviChestplateDischarged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.graviChestplate;
			Player.setArmorSlot(1, slot.id, 1, slot.data);
			ENERGY_PACK_TICK(slot, maxDamage, 4, 100000);
		}
		return false;
	}
});

var canFlying = false;
Callback.addCallback("tick", function(){
	var armor = Player.getArmorSlot(1);
	var extra = armor.extra;
	var fly = extra? extra.getBoolean("fly") : false;
	if(fly){
		Player.setFlyingEnabled(true);
		canFlying = true;
	}
	else if(canFlying){
		Player.setFlyingEnabled(false);
		Player.setFlying(false);
		canFlying = false;
	}
});




// file: tool/adv_drill.js

IDRegistry.genItemID("advancedDDrill");
Item.createItem("advancedDDrill", "Advanced Diamond Drill", {name: "advanced_drill"}, {stack: 1, isTech: true});
ChargeItemRegistry.registerItem(ItemID.advancedDDrill, "Eu", 45000, 2000, 3, "tool", true);
ICore.Integration.addToolBooxValidItem(ItemID.advancedDDrill);
ICore.ItemName.setRarity(ItemID.advancedDDrill, 1);
Item.registerNameOverrideFunction(ItemID.advancedDDrill, function(item, name){
	var mode = 0;
	var extra = item.extra;
	if(extra){
	mode = extra.getInt("mode");}
	switch(mode){
		case 0:
			textMode = "§2Mode: Normal";
		break;
		case 1:
			textMode = "§6Mode: Low power";
		break;
		case 2:
			textMode = "§bMode: Big holes";
		break;
	}
	if(ChargeItemRegistry.getEnergyStored(item) > 0){
		name = "§e" + name;
	}
	textMode = ICore.ItemName.getTooltip(name, textMode);
	textEnergy = ICore.ItemName.getItemStorageText(item, name);
	return name + textMode + textEnergy;
});

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.advancedDDrill, count: 1, data: Item.getMaxDamage(ItemID.advancedDDrill)}, [
		"ada",
		"cac"
	], ['d', ItemID.diamondDrill, -1, 'a', ItemID.upgradeOverclocker, -1, 'c', ItemID.circuitBasic, -1], ChargeItemRegistry.transferEnergy);
	
	if(__config__.getBool("change_iridium_drill_recipe")){
	Recipes.deleteRecipe({id: ItemID.iridiumDrill, count: 1, data: Item.getMaxDamage(ItemID.iridiumDrill)});
	Recipes.addShaped({id: ItemID.iridiumDrill, count: 1, data: Item.getMaxDamage(ItemID.iridiumDrill)}, [
		" a ",
		"ada",
		" e "
	], ['d', ItemID.advancedDDrill, -1, 'e', ItemID.storageCrystal, -1, 'a', ItemID.plateReinforcedIridium, 0], ChargeItemRegistry.transferEnergy);}
});

ICore.UI.setToolButton(ItemID.advancedDDrill, "button_switch");

ICore.UI.registerSwitchFunction(ItemID.advancedDDrill, function(item){
	var extra = item.extra;
	if(!extra){
		extra = new ItemExtraData();
	}
	var mode = (extra.getInt("mode")+1)%3;
	extra.putInt("mode", mode);
	switch(mode){
	case 0:
		Game.message("§2Mode: Normal");
	break;
	case 1:
		Game.message("§6Mode: Low power");
	break;
	case 2:
		Game.message("§bMode: Big holes");
	break;
	}
	Player.setCarriedItem(item.id, 1, item.data, extra);
});

ToolLib.setTool(ItemID.advancedDDrill, {energyPerUse: 160, level: 4, efficiency: 21.6, damage: 3}, {
	damage: 0,
	blockTypes: ["stone", "dirt"],
	onDestroy: function(item, coords, block){
		if(Block.getDestroyTime(block.id) > 0){
			var energyCost = this.toolMaterial.energyPerUse;
			var mode = item.extra? item.extra.getInt("mode") : 0;
			if(mode == 1) energyCost /= 2;
			ICore.Tool.dischargeItem(item, energyCost);
		}
		return true;
	},
	onBroke: function(item){return true;},
	onAttack: ToolType.drill.onAttack,
	calcDestroyTime: function(item, coords, block, params, destroyTime){
		var energyCost = this.toolMaterial.energyPerUse;
		var mode = item.extra? item.extra.getInt("mode") : 0;
		if(mode == 1) energyCost /= 2;
		if(item.data + energyCost <= Item.getMaxDamage(item.id)){
			var material = ToolAPI.getBlockMaterialName(block.id);
			if(mode == 2 && (material == "dirt" || material == "stone")){
				var maxDestroyTime = 0;
				var side = coords.side;
				var X = 1;
				var Y = 1;
				var Z = 1;
				if(side==BlockSide.EAST || side==BlockSide.WEST){
				X = 0;}
				if(side==BlockSide.UP || side==BlockSide.DOWN){
				Y = 0;}
				if(side==BlockSide.NORTH || side==BlockSide.SOUTH){
				Z = 0;}
				for(var xx = coords.x - X; xx <= coords.x + X; xx++){
					for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
						for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
							var blockID = World.getBlockID(xx, yy, zz);
							var material = ToolAPI.getBlockMaterial(blockID) || {};
							if(material.name == "dirt" || material.name == "stone"){
								destroyTime = Block.getDestroyTime(blockID) / material.multiplier;
								if(ToolAPI.getBlockDestroyLevel(blockID) <= 4){
									destroyTime /= 21.6;
								}
								maxDestroyTime = Math.max(destroyTime, maxDestroyTime);
							}
						}
					}
				}
				return maxDestroyTime;
			}
			if(mode == 1) return destroyTime * 21.6 / 16;
			return destroyTime;
		}
		return params.base;
	},
	destroyBlock: function(coords, side, item, block){
		this.playDestroySound(item, block);
		var mode = item.extra? item.extra.getInt("mode") : 0;
		var material = ToolAPI.getBlockMaterialName(block.id);
		if(mode >= 2 && (material == "dirt" || material == "stone") && item.data + 160 <= Item.getMaxDamage(item.id)){
			var X = 1;
			var Y = 1;
			var Z = 1;
			if(side==BlockSide.EAST || side==BlockSide.WEST){
			X = 0;}
			if(side==BlockSide.UP || side==BlockSide.DOWN){
			Y = 0;}
			if(side==BlockSide.NORTH || side==BlockSide.SOUTH){
			Z = 0;}
			for(var xx = coords.x - X; xx <= coords.x + X; xx++){
				for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
					for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
						if(xx == coords.x && yy == coords.y && zz == coords.z){
							continue;
						}
						blockID = World.getBlockID(xx, yy, zz);
						var material = ToolAPI.getBlockMaterial(blockID) || {};
						if(material.name == "dirt" || material.name == "stone"){
							item.data += 160;
							World.destroyBlock(xx, yy, zz, true);
							if(item.data + 160 >= Item.getMaxDamage(item.id)){
								Player.setCarriedItem(item.id, 1, item.data, item.extra);
								return;
							}
						}
					}
				}
			}
			Player.setCarriedItem(item.id, 1, item.data, item.extra);
		}
	},
	useItem: ToolType.drill.useItem,
	continueDestroyBlock: ToolType.drill.continueDestroyBlock,
	playDestroySound: ToolType.drill.playDestroySound
});




// file: tool/adv_chainsaw.js

IDRegistry.genItemID("advancedChainsaw");
Item.createItem("advancedChainsaw", "Advanced Chainsaw", {name: "advanced_chainsaw"}, {stack: 1, isTech: true});
ChargeItemRegistry.registerItem(ItemID.advancedChainsaw, "Eu", 45000, 2000, 3, "tool", true);
ICore.Integration.addToolBooxValidItem(ItemID.advancedChainsaw);
ICore.ItemName.setRarity(ItemID.advancedChainsaw, 1);
Item.registerNameOverrideFunction(ItemID.advancedChainsaw, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.advancedChainsaw, count: 1, data: Item.getMaxDamage(ItemID.advancedChainsaw)}, [
	" d ",
	"asa",
	"cac"
], ['s', ItemID.chainsaw, -1, 'a', ItemID.upgradeOverclocker, -1, 'c', ItemID.circuitBasic, -1, 'd', 264, 0], ChargeItemRegistry.transferEnergy);

ToolLib.setTool(ItemID.advancedChainsaw, {energyPerUse: 120, level: 4, efficiency: 21.6, damage: 8},  ToolType.chainsaw);




// file: tool/gravi_tool.js

IDRegistry.genItemID("graviTool0");
IDRegistry.genItemID("graviTool1");
IDRegistry.genItemID("graviTool2");
Item.createItem("graviTool0", "GraviTool", {name: "gravi_tool", meta: 0}, {stack: 1, isTech: true});
Item.createItem("graviTool1", "GraviTool", {name: "gravi_tool", meta: 1}, {stack: 1, isTech: true});
Item.createItem("graviTool2", "GraviTool", {name: "gravi_tool", meta: 2}, {stack: 1, isTech: true});
ChargeItemRegistry.registerItem(ItemID.graviTool0, "Eu", 300000, 2000, 3, "tool", true);
ChargeItemRegistry.registerItem(ItemID.graviTool1, "Eu", 300000, 2000, 3, "tool");
ChargeItemRegistry.registerItem(ItemID.graviTool2, "Eu", 300000, 2000, 3, "tool");
ICore.Integration.addToolBooxValidItem(ItemID.graviTool0);
ICore.Integration.addToolBooxValidItem(ItemID.graviTool1);
ICore.ItemName.setRarity(ItemID.graviTool0, 1);
ICore.ItemName.setRarity(ItemID.graviTool1, 1);
ICore.ItemName.setRarity(ItemID.graviTool2, 1);
Item.registerNameOverrideFunction(ItemID.graviTool0, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.graviTool1, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.graviTool2, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.graviTool0, count: 1, data: Item.getMaxDamage(ItemID.graviTool0)}, [
	"aha",
	"beb",
	"wct"
], ['e', ItemID.storageCrystal, -1, 'h', ItemID.electricHoe, -1, 't', ItemID.electricTreetap, -1, 'w', ItemID.electricWrench, -1, 'a', ItemID.carbonPlate, 0, 'b', ItemID.plateAlloy, 0, 'c', ItemID.circuitAdvanced, 0], ChargeItemRegistry.transferEnergy);


ICore.UI.setToolButton(ItemID.graviTool0, "button_switch", true);
ICore.UI.setToolButton(ItemID.graviTool1, "button_switch", true);
ICore.UI.setToolButton(ItemID.graviTool2, "button_switch", true);

ICore.UI.registerSwitchFunction(ItemID.graviTool0, function(item){
	Game.message("§6" + Translation.translate("Treetap activated"));
	Player.setCarriedItem(ItemID.graviTool1, 1, item.data);
});

ICore.UI.registerSwitchFunction(ItemID.graviTool1, function(item){
	Game.message("§b" + Translation.translate("Wrench activated"));
	Player.setCarriedItem(ItemID.graviTool2, 1, item.data);
});

ICore.UI.registerSwitchFunction(ItemID.graviTool2, function(item){
	Game.message("§2" +  Translation.translate("Hoe activated"));
	Player.setCarriedItem(ItemID.graviTool0, 1, item.data);
});

ICore.Tool.registerElectricHoe("graviTool0");
ICore.Tool.registerElectricTreerap("graviTool1");
ICore.Tool.registerWrench(ItemID.graviTool2, 1, 50);




// file: tool/vajra.js

IDRegistry.genItemID("magnetron");
Item.createItem("magnetron", "Magnetron", {name: "magnetron"}, {stack: 1});

IDRegistry.genItemID("vajraCore");
Item.createItem("vajraCore", "Vajra Core", {name: "vajra_core"}, {stack: 1});

IDRegistry.genItemID("vajra");
Item.createItem("vajra", "Vajra", {name: "vajra"}, {stack: 1, isTech: true});
ChargeItemRegistry.registerItem(ItemID.vajra, "Eu", 1e7, 20000, 4, "tool", true);

ICore.ItemName.setRarity(ItemID.vajra, 3);
Item.registerNameOverrideFunction(ItemID.vajra, function(item, name){
	name = ICore.ItemName.showItemStorage(item, name);
	var mode = item.extra? item.extra.getInt("mode") : 0;
	if(mode > 0){
		name += "\nSilk Touch enabled";
	}
	return name;
});

Recipes.addShaped({id: ItemID.magnetron, count: 1, data: 0}, [
	"aba",
	"bsb",
	"aba"
], ['s', ItemID.superconductor, 0, 'a', ItemID.plateIron, 0, 'b', ItemID.plateCopper, 0]);

Recipes.addShaped({id: ItemID.vajraCore, count: 1, data: 0}, [
	" m ",
	"rcr",
	"sxs"
], ['x', BlockID.transformerHV, 0, 'm', ItemID.magnetron, 0, 's', ItemID.superconductor, 0, 'c', BlockID.teslaCoil, 0, 'r', ItemID.plateReinforcedIridium, 0]);

Recipes.addShaped({id: ItemID.vajra, count: 1, data: Item.getMaxDamage(ItemID.vajra)}, [
	"mem",
	"c#c",
	"axa"
], ['#', ItemID.vajraCore, 0, 'x', ItemID.storageLapotronCrystal, -1, 'e', ItemID.storageCrystal, -1, 'a', ItemID.plateAlloy, 0, 'b', ItemID.carbonPlate, 0, 'm', ItemID.plateIron, 0], ChargeItemRegistry.transferEnergy);

ICore.UI.setToolButton(ItemID.vajra, "button_switch");

ICore.UI.registerSwitchFunction(ItemID.vajra, function(item){
	var extra = item.extra;
	if(!extra){
		extra = new ItemExtraData();
	}
	var mode = (extra.getInt("mode")+1)%2;
	extra.putInt("mode", mode);
	if(mode == 0){
		Game.message("§4Silk Touch disabled");
	}
	else{
		Game.message("§2Silk Touch enabled");
	}
	Player.setCarriedItem(item.id, 1, item.data, extra);
});

ToolLib.setTool(ItemID.vajra, {energyPerUse: 3333, level: 100, efficiency: 1, damage: 20}, {
	damage: 5,
	blockTypes: ["stone", "dirt", "wood"],
	modifyEnchant: function(enchant, item){
		if(item.extra && item.extra.getInt("mode") > 0){
			enchant.silk = true;
		}
	},
	onDestroy: function(item, coords, block){
		if(item.extra && item.extra.getInt("mode") > 0 && ToolAPI.getBlockMaterialName(block.id) == "plant"){
			if(ICore.Tool.dischargeItem(item, this.toolMaterial.energyPerUse)){
				World.destroyBlock(coords.x, coords.y, coords.z);
				if(block.id == 175) block.data = block.data%8;
				World.drop(coords.x + .5, coords.y + .5, coords.z + .5, block.id, 1, block.data);
			}
		}
		else if(Block.getDestroyTime(block.id) > 0){
			ICore.Tool.dischargeItem(item, this.toolMaterial.energyPerUse);
		}
		return true;
	},
	onBroke: function(item){return true;},
	onAttack: function(item, mob){
		ICore.Tool.dischargeItem(item, this.toolMaterial.energyPerUse);
		return true;
	},
	calcDestroyTime: function(item, coords, block, params, destroyTime){
		if(item.data + this.toolMaterial.energyPerUse <= Item.getMaxDamage(item.id) && destroyTime > 0){
			return 0;
		}
		return params.base;
	}
});




