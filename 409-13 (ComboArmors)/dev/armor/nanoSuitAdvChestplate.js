IDRegistry.genItemID("nanosuitBatpack"); IDRegistry.genItemID("nanosuitBatpackUncharged");
IDRegistry.genItemID("nanosuitAdvBatpack"); IDRegistry.genItemID("nanosuitAdvBatpackUncharged");
IDRegistry.genItemID("nanosuitEnergypack"); IDRegistry.genItemID("nanosuitEnergypackUncharged");
IDRegistry.genItemID("nanosuitJetpack"); IDRegistry.genItemID("nanosuitJetpackUncharged");
IDRegistry.genItemID("Ultimatenanosuit"); IDRegistry.genItemID("UltimatenanosuitUncharged");

Item.createArmorItem("nanosuitBatpack", "NanoSuit Batpack", {name: "nanosuitbatpack"}, {type: "chestplate", armor: 7, durability: 1000, texture: "armor/nanoadv_1.png", isTech: true});
Item.createArmorItem("nanosuitAdvBatpack", "NanoSuit AdvBatpack", {name: "nanoadvbatpack"}, {type: "chestplate", armor: 7, durability: 1100, texture: "armor/nanoadv1_1.png", isTech: true});
Item.createArmorItem("nanosuitEnergypack", "NanoSuit Energypack", {name: "nanoenergypack"}, {type: "chestplate", armor: 7, durability: 1150, texture: "armor/nanoenergy_1.png", isTech: true});
Item.createArmorItem("nanosuitJetpack", "NanoSuit Jetpack", {name: "nanojetpack"}, {type: "chestplate", armor: 7, durability: 1300, texture: "armor/nanojet_1.png", isTech: true});
Item.createArmorItem("Ultimatenanosuit", "Ultimate NanoSuit Bodyarmour", {name: "ultimatenano"}, {type: "chestplate", armor: 7, durability: 1650, texture: "armor/ultimatenano_1.png", isTech: true});
Item.createArmorItem("nanosuitBatpackUncharged", "NanoSuit Batpack", {name: "nanosuitbatpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanoadv_1.png", isTech: true});
Item.createArmorItem("nanosuitAdvBatpackUncharged", "NanoSuit AdvBatpack", {name: "nanoadvbatpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanoadv1_1.png", isTech: true});
Item.createArmorItem("nanosuitEnergypackUncharged", "NanoSuit Energypack", {name: "nanoenergypack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanoenergy_1.png", isTech: true});
Item.createArmorItem("nanosuitJetpackUncharged", "NanoSuit Jetpack", {name: "nanojetpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/nanojet_1.png", isTech: true});
Item.createArmorItem("UltimatenanosuitUncharged", "Ultimate NanoSuit Bodyarmour", {name: "ultimatenano"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/ultimatenano_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.nanosuitBatpack, "Eu", 2000000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitBatpackUncharged, "Eu", 2000000, 3, "storage");
ChargeItemRegistry.registerItem(ItemID.nanosuitAdvBatpack, "Eu", 4000000, 4, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitAdvBatpackUncharged, "Eu", 4000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.nanosuitEnergypack, "Eu", 8000000, 4, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitEnergypackUncharged, "Eu", 8000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.nanosuitJetpack, "Eu", 1500000, 3, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.nanosuitJetpackUncharged, "Eu", 1500000, 3, "storage");
ChargeItemRegistry.registerItem(ItemID.Ultimatenanosuit, "Eu", 10000000, 4, "armor", true); 
ChargeItemRegistry.registerItem(ItemID.UltimatenanosuitUncharged, "Eu", 10000000, 4, "storage");

ICore.ItemName.setRarity(ItemID.nanosuitBatpack, 1);
ICore.ItemName.setRarity(ItemID.nanosuitAdvBatpack, 1);
ICore.ItemName.setRarity(ItemID.nanosuitEnergypack, 1);
ICore.ItemName.setRarity(ItemID.nanosuitJetpack, 1);
ICore.ItemName.setRarity(ItemID.Ultimatenanosuit, 2);

Item.registerNameOverrideFunction(ItemID.nanosuitBatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitAdvBatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitEnergypack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.nanosuitJetpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.Ultimatenanosuit, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitBatpack, {charged: ItemID.nanosuitBatpack, uncharged: ItemID.nanosuitBatpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitBatpackUncharged, {charged: ItemID.nanosuitBatpack, uncharged: ItemID.nanosuitBatpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitAdvBatpack, {charged: ItemID.nanosuitAdvBatpack, uncharged: ItemID.nanosuitAdvBatpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitAdvBatpackUncharged, {charged: ItemID.nanosuitAdvBatpack, uncharged: ItemID.nanosuitAdvBatpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitEnergypack, {charged: ItemID.nanosuitEnergypack, uncharged: ItemID.nanosuitEnergypackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitEnergypackUncharged, {charged: ItemID.nanosuitEnergypack, uncharged: ItemID.nanosuitEnergypackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitJetpack, {charged: ItemID.nanosuitJetpack, uncharged: ItemID.nanosuitJetpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanosuitJetpackUncharged, {charged: ItemID.nanosuitJetpack, uncharged: ItemID.nanosuitJetpackUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.Ultimatenanosuit, {charged: ItemID.Ultimatenanosuit, uncharged: ItemID.UltimatenanosuitUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.UltimatenanosuitUncharged, {charged: ItemID.Ultimatenanosuit, uncharged: ItemID.UltimatenanosuitUncharged});
	
Armor.registerFuncs("nanosuitBatpack", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitBatpackUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitAdvBatpack", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitAdvBatpackUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitEnergypack", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitEnergypackUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("nanosuitJetpack", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanosuitJetpackUncharged", NANO_ARMOR_FUNCS);
Armor.registerFuncs("Ultimatenanosuit", NANO_ARMOR_FUNCS); Armor.registerFuncs("UltimatenanosuitUncharged", NANO_ARMOR_FUNCS);

ICore.registerEnergyPack("nanosuitBatpack", 3, 100000); ICore.registerEnergyPack("nanosuitAdvBatpack", 3, 100000); ICore.registerEnergyPack("nanosuitEnergypack", 3, 100000);

ICore.UI.registerButton("hover_engine", {
	y: 2000,
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
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			else if(armor.data < Item.getMaxDamage(ItemID.nanosuitJetpack || ItemID.Ultimatenanosuit || ItemID.battaryjetpack || ItemID.AdvJetpacks || ItemID.EnergyJetpack)){
				extra.putBoolean("fly", true);
				Player.setFlyingEnabled(true);
				Game.message(Translation.translate("Hover Mode enabled"));
			}
			Player.setArmorSlot(1, armor.id, 1, armor.data, extra);
		}
	}
});

ICore.UI.onButtonUpdate("hover_engine", function(element){
	var armor = Player.getArmorSlot(1);
	var extra = armor.extra;
	if(extra && extra.getBoolean("fly")){
		element.bitmap = "button_gravi_on";
	}else{
		element.bitmap = "button_gravi_off";
	}
});

ICore.UI.setArmorButton(ItemID.nanosuitJetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.nanosuitJetpack, "hover_engine");
ICore.UI.setArmorButton(ItemID.nanosuitJetpackUncharged, "hover_engine");
ICore.UI.setArmorButton(ItemID.Ultimatenanosuit, "button_fly");
ICore.UI.setArmorButton(ItemID.Ultimatenanosuit, "hover_engine");
ICore.UI.setArmorButton(ItemID.UltimatenanosuitUncharged, "hover_engine");

//nanosuitjetpack
Armor.registerFuncs("nanosuitJetpack", {
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
			slot.id = ItemID.nanosuitJetpackUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 2500, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("nanosuitJetpackUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.nanosuitJetpack;
			Player.setArmorSlot(1, slot.id, 1, slot.data);
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
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
//nanosuitenergypack
Armor.registerFuncs("Ultimatenanosuit", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*5000;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.UltimatenanosuitUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 5000, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("UltimatenanosuitUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.Ultimatenanosuit;
			Player.setArmorSlot(1, slot.id, 1, slot.data);
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
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