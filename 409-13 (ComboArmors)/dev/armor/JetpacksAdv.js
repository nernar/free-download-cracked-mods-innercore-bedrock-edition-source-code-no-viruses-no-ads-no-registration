IDRegistry.genItemID("battaryjetpack"); 
IDRegistry.genItemID("battaryjetpackUncharged");
IDRegistry.genItemID("AdvJetpacks"); 
IDRegistry.genItemID("AdvJetpacksUncharged");
IDRegistry.genItemID("EnergyJetpack"); 
IDRegistry.genItemID("EnergyJetpackUncharged");

Item.createArmorItem("battaryjetpack", "Battery Jetpack", {name: "jetpackbatpack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/batjetpack_1.png", isTech: true});
Item.createArmorItem("AdvJetpacks", "AdvJetpack", {name: "jetpackadvpack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/advjetpack_1.png", isTech: true});
Item.createArmorItem("EnergyJetpack", "EnergyJetpack", {name: "jetpackenergypack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/energyjetpack_1.png", isTech: true});
Item.createArmorItem("battaryjetpackUncharged", "Battery Jetpack", {name: "jetpackbatpack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/batjetpack_1.png", isTech: true});
Item.createArmorItem("AdvJetpacksUncharged", "AdvJetpack", {name: "jetpackadvpack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/advjetpack_1.png", isTech: true});
Item.createArmorItem("EnergyJetpackUncharged", "EnergyJetpack", {name: "jetpackenergypack"}, {type: "chestplate", armor: 0, durability: 800, texture: "armor/energyjetpack_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.battaryjetpack, "Eu",  100000, 2, "storage", true);
ChargeItemRegistry.registerItem(ItemID.battaryjetpackUncharged, "Eu",  100000, 2, "storage");
ChargeItemRegistry.registerItem(ItemID.AdvJetpacks, "Eu", 2100000, 3, "storage", true);
ChargeItemRegistry.registerItem(ItemID.AdvJetpacksUncharged, "Eu", 2100000, 3, "storage");
ChargeItemRegistry.registerItem(ItemID.EnergyJetpack, "Eu",  650000, 4, "storage", true);
ChargeItemRegistry.registerItem(ItemID.EnergyJetpackUncharged, "Eu",  650000, 4, "storage");

ICore.UI.setArmorButton(ItemID.battaryjetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.battaryjetpack, "hover_engine");
ICore.UI.setArmorButton(ItemID.AdvJetpacks, "button_fly");
ICore.UI.setArmorButton(ItemID.AdvJetpacks, "hover_engine");
ICore.UI.setArmorButton(ItemID.EnergyJetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.EnergyJetpack, "hover_engine");

ICore.ItemName.setRarity(ItemID.battaryjetpack, 1);
ICore.ItemName.setRarity(ItemID.AdvJetpacks, 1);
ICore.ItemName.setRarity(ItemID.EnergyJetpack, 1);

Item.registerNameOverrideFunction(ItemID.battaryjetpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.AdvJetpacks, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.EnergyJetpack, ICore.ItemName.showItemStorage);

Armor.registerFuncs("battaryjetpack", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*100;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.battaryjetpackUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 100, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("battaryjetpackUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.battaryjetpack;
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

Armor.registerFuncs("AdvJetpacks", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*200;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.AdvJetpacksUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 200, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("AdvJetpacksUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.AdvJetpacks;
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

Armor.registerFuncs("EnergyJetpack", {
	hurt: function(params, slot, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage*350;
			slot.data = Math.min(slot.data + energy, maxDamage);
		}
		Player.setArmorSlot(1, slot.id, 1, slot.data, slot.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var fly = extra? extra.getBoolean("fly") : false;
		if(slot.data >= maxDamage){
			slot.id = ItemID.EnergyJetpackUncharged;
			if(fly){
				Game.message(Translation.translate("Hover Mode disabled"));
			}
			Player.setArmorSlot(1, slot.id, 1, slot.data);
		}
		else{
			Entity.setFire(Player.get(), 0, true);
			if(fly && World.getThreadTime()%20 == 0){
				slot.data = Math.min(slot.data + 350, maxDamage);
				Player.setArmorSlot(1, slot.id, 1, slot.data, extra);
			}
			ENERGY_PACK_TICK(slot, maxDamage, 3, 100000);
		}
		return false;
	}
});

Armor.registerFuncs("EnergyJetpackUncharged", {
	hurt: function(){
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		if(slot.data < maxDamage){
			slot.id = ItemID.EnergyJetpack;
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