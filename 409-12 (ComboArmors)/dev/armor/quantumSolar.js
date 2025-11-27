IDRegistry.genItemID("solar_quantHelmet"); 
IDRegistry.genItemID("solar_quantHelmetUncharged");
Item.createArmorItem("solar_quantHelmet", "Solar QuantumSuit Helmet", {name: "solar_quantHelmet"}, {type: "helmet", armor: 4, durability: 625, texture: "armor/solarquantum_1.png", isTech: true});
Item.createArmorItem("solar_quantHelmetUncharged", "Solar QuantumSuit Helmet", {name: "solar_quantHelmet"}, {type: "helmet", armor: 4, durability: 625, texture: "armor/solarquantum_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.solar_quantHelmet, "Eu", 10000000, 4 , "storage", true);
ChargeItemRegistry.registerItem(ItemID.solar_quantHelmetUncharged, "Eu", 10000000, 4, "storage");

ICore.ItemName.setRarity(ItemID.solar_quantHelmet, 2);

Item.registerNameOverrideFunction(ItemID.solar_quantHelmet, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.solar_quantHelmet, {charged: ItemID.solar_quantHelmet, uncharged: ItemID.solar_quantHelmetUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.solar_quantHelmetUncharged, {charged: ItemID.solar_quantHelmet, uncharged: ItemID.solar_quantHelmetUncharged});

ICore.UI.setArmorButton(ItemID.solar_quantHelmet, "button_nightvision");

function chargeArmor(genD){
	var time = World.getWorldTime()%24000;
	var p = Player.getPosition();
	if(GenerationUtils.canSeeSky(p.x, p.y, p.z)){
		if((time >= 23500 || time < 12550) && (!World.getWeather().rain || World.getLightLevel(this.x, this.y+1, this.z) > 14)){
			var energy = genD;
		}
		for(var i = 3; i >= 0; i--){
			var armor = Player.getArmorSlot(i);
			var energyAdd = ICore.ChargeRegistry.addEnergyTo(armor, "Eu", energy, energy, 4);
			if(energyAdd > 0){
				var armorID = Player.getArmorSlot(i).id;
				if(armorID != armor.id){
					Logger.Log("Error in getArmorSlot("+i+"): id " + armor.id + " != " + armorID, "ERROR");
					continue;
				}
				energy -= energyAdd;
				Player.setArmorSlot(i, armor.id, 1, armor.data, armor.extra);
				if(energy <= 0){
					break;
				}
			}
		}
	}
}

Callback.addCallback("tick", function(){
	if(World.getThreadTime()%20 == 0){
		var slot = Player.getArmorSlot(0);
		if(slot.id == ItemID.solar_quantHelmet || slot.id == ItemID.solar_quantHelmetUncharged){
			chargeArmor(SPH.gen_day*20);
		}
	}
});

Armor.registerFuncs("solar_quantHelmet", QUANTUM_ARMOR_FUNCS);
Armor.registerFuncs("solar_quantHelmetUncharged", QUANTUM_ARMOR_FUNCS);