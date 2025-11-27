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
