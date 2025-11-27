IDRegistry.genItemID("quantumsuitbatpack"); IDRegistry.genItemID("quantumsuitbatpackUncharged");
IDRegistry.genItemID("quantumsuitAdvbatpack"); IDRegistry.genItemID("quantumsuitAdvbatpackUncharged");
IDRegistry.genItemID("quantumsuitEnergypack"); IDRegistry.genItemID("quantumsuitEnergypackUncharged");
IDRegistry.genItemID("Ultimatequantumsuit"); IDRegistry.genItemID("UltimatequantumsuitUncharged");

Item.createArmorItem("quantumsuitbatpack", "QuantumSuit Batpack", {name: "quantumsuitbatpack"}, {type: "chestplate", armor: 7, durability: 2000, texture: "armor/quantBat_1.png", isTech: true});
Item.createArmorItem("quantumsuitAdvbatpack", "QuantumSuit AdvBatpack", {name: "quantumsuitadvbatpack"}, {type: "chestplate", armor: 7, durability: 2200, texture: "armor/quantumadv_1.png", isTech: true});
Item.createArmorItem("quantumsuitEnergypack", "QuantumSuit Energypack", {name: "quantumsuitenergypack"}, {type: "chestplate", armor: 7, durability: 2250, texture: "armor/quantumenergy_1.png", isTech: true});
Item.createArmorItem("Ultimatequantumsuit", "Ultimate QuantumSuit Bodyarmour", {name: "ultimatequantum"}, {type: "chestplate", armor: 7, durability: 2650, texture: "armor/ultimatequantum_1.png", isTech: true});
Item.createArmorItem("quantumsuitbatpackUncharged", "QuantumSuit Batpack", {name: "quantumsuitbatpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/quantBat_1.png", isTech: true});
Item.createArmorItem("quantumsuitAdvbatpackUncharged", "QuantumSuit AdvBatpack", {name: "quantumsuitadvbatpack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/quantumadv_1.png", isTech: true});
Item.createArmorItem("quantumsuitEnergypackUncharged", "QuantumSuit Energypack", {name: "quantumsuitenergypack"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/quantumenergy_1.png", isTech: true});
Item.createArmorItem("UltimatequantumsuitUncharged", "Ultimate QuantumSuit Bodyarmour", {name: "ultimatequantum"}, {type: "chestplate", armor: 0, durability: 0, texture: "armor/ultimatequantum_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.quantumsuitbatpack, "Eu", 11000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.quantumsuitbatpackUncharged, "Eu", 11000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantumsuitAdvbatpack, "Eu", 13000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.quantumsuitAdvbatpackUncharged, "Eu", 13000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.quantumsuitEnergypack, "Eu", 15000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.quantumsuitEnergypackUncharged, "Eu", 15000000, 4, "storage");
ChargeItemRegistry.registerItem(ItemID.Ultimatequantumsuit, "Eu", 18000000, 4, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.UltimatequantumsuitUncharged, "Eu", 18000000, 4 , "storage");

ICore.ItemName.setRarity(ItemID.quantumsuitbatpack, 2);
ICore.ItemName.setRarity(ItemID.quantumsuitAdvbatpack, 2);
ICore.ItemName.setRarity(ItemID.quantumsuitEnergypack, 2);
ICore.ItemName.setRarity(ItemID.Ultimatequantumsuit, 3);

Item.registerNameOverrideFunction(ItemID.quantumsuitbatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantumsuitAdvbatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.quantumsuitEnergypack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.Ultimatequantumsuit, ICore.ItemName.showItemStorage);

ICore.UI.setArmorButton(ItemID.quantumsuitbatpack, "button_fly");
ICore.UI.setArmorButton(ItemID.quantumsuitAdvbatpack, "button_fly");
ICore.UI.setArmorButton(ItemID.quantumsuitEnergypack, "button_fly");
ICore.UI.setArmorButton(ItemID.Ultimatequantumsuit, "button_fly");
ICore.UI.setArmorButton(ItemID.quantumsuitbatpack, "button_hover");
ICore.UI.setArmorButton(ItemID.quantumsuitAdvbatpack, "button_hover");
ICore.UI.setArmorButton(ItemID.quantumsuitEnergypack, "button_hover");
ICore.UI.setArmorButton(ItemID.Ultimatequantumsuit, "button_hover");

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitbatpack, {charged: ItemID.quantumsuitbatpack, uncharged: ItemID.quantumsuitbatpackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitbatpackUncharged, {charged: ItemID.quantumsuitbatpack, uncharged: ItemID.quantumsuitbatpackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitAdvbatpack, {charged: ItemID.quantumsuitAdvbatpack, uncharged: ItemID.quantumsuitAdvbatpackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitAdvbatpackUncharged, {charged: ItemID.quantumsuitAdvbatpack, uncharged: ItemID.quantumsuitAdvbatpackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitEnergypack, {charged: ItemID.quantumsuitEnergypack, uncharged: ItemID.quantumsuitEnergypackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumsuitEnergypackUncharged, {charged: ItemID.quantumsuitEnergypack, uncharged: ItemID.quantumsuitEnergypackUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.Ultimatequantumsuit, {charged: ItemID.Ultimatequantumsuit, uncharged: ItemID.UltimatequantumsuitUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.UltimatequantumsuitUncharged, {charged: ItemID.Ultimatequantumsuit, uncharged: ItemID.UltimatequantumsuitUncharged});

var ADV_QUANTUM_ARMOR_FUNCS = {
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
		var armor = ICore.Recipe.getRecipeResult("quantum-armor-charge", slot.id);
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
				if(vel.y < -0.1){
					Player.setVelocity(vel.x, -0.1, vel.z);
					if(World.getThreadTime() % 5 == 0){
						Player.setArmorSlot(1, slot.id, 1, Math.min(slot.data+20, maxDamage), extra);
					}
				}
			}
			ENERGY_PACK_TICK(slot, maxDamage, 4, 100000);
		}
		return false;
	}
}

Armor.registerFuncs("quantumsuitbatpack", ADV_QUANTUM_ARMOR_FUNCS); 
Armor.registerFuncs("quantumsuitbatpackUncharged", ADV_QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantumsuitAdvbatpack", ADV_QUANTUM_ARMOR_FUNCS); 
Armor.registerFuncs("quantumsuitAdvbatpackUncharged", ADV_QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantumsuitEnergypack", ADV_QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("quantumsuitEnergypackUncharged", ADV_QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("Ultimatequantumsuit", ADV_QUANTUM_ARMOR_FUNCS); 
Armor.registerFuncs("UltimatequantumsuitUncharged", ADV_QUANTUM_ARMOR_FUNCS);