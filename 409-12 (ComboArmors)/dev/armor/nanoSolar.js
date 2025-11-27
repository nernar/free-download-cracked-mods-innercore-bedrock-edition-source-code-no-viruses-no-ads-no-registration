var SPH = {
	gen_day: parseInt(__config__.access("solar_panel_helmet.gen_day")),
	output: parseInt(__config__.access("solar_panel_helmet.output")),
	energy_storage: parseInt(__config__.access("solar_panel_helmet.storage"))
}

IDRegistry.genItemID("solar_nanoHelmet"); IDRegistry.genItemID("solar_nanoHelmetUncharged");

Item.createArmorItem("solar_nanoHelmet", "Solar NanoSuit Helmet", {name: "solar_nanoHelmet"}, {type: "helmet", armor: 3, durability: 625, texture: "armor/nanoadv_1.png", isTech: true});
Item.createArmorItem("solar_nanoHelmetUncharged", "Solar NanoSuit Helmet", {name: "solar_nanoHelmet"}, {type: "helmet", armor: 0, durability: 0, texture: "armor/nanoadv_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.solar_nanoHelmet, "Eu", 1000000, 3, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.solar_nanoHelmetUncharged, "Eu", 1000000, 3, "storage");

ICore.ItemName.setRarity(ItemID.solar_nanoHelmet, 1);

Item.registerNameOverrideFunction(ItemID.solar_nanoHelmet, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.solar_nanoHelmet, {charged: ItemID.solar_nanoHelmet, uncharged: ItemID.solar_nanoHelmetUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.solar_nanoHelmetUncharged, {charged: ItemID.solar_nanoHelmet, uncharged: ItemID.solar_nanoHelmetUncharged});

ICore.UI.setArmorButton(ItemID.solar_nanoHelmet, "button_nightvision");

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
		if(slot.id == ItemID.solar_nanoHelmet || slot.id == ItemID.solar_nanoHelmetUncharged){
			chargeArmor(SPH.gen_day*20);
		}
	}
});

Armor.registerFuncs("solar_nanoHelmet", NANO_ARMOR_FUNCS);
Armor.registerFuncs("solar_nanoHelmetUncharged", NANO_ARMOR_FUNCS);