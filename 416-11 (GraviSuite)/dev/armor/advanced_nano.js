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
