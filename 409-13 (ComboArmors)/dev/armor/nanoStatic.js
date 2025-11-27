var SPB = {
	gen_day: parseInt(__config__.access("solar_panel_boots.gen_day")),
	output: parseInt(__config__.access("solar_panel_boots.output")),
	energy_storage: parseInt(__config__.access("solar_panel_boots.storage"))
}

IDRegistry.genItemID("nanostatic"); 
IDRegistry.genItemID("nanostaticUncharged");
Item.createArmorItem("nanostatic", "Static NanoSuit Boots", {name: "nanostatic"}, {type: "boots", armor: 0, durability: 25, texture: "armor/nanoadv_1.png", isTech: true});
Item.createArmorItem("nanostaticUncharged", "Static NanoSuit Boots", {name: "nanostatic"}, {type: "boots", armor: 0, durability: 25, texture: "armor/nanoadv_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.nanostatic, "Eu", 1000000, 3, "storage", true);
ChargeItemRegistry.registerItem(ItemID.nanostaticUncharged, "Eu", 1000000, 3, "storage");

ICore.ItemName.setRarity(ItemID.nanostatic, 1);

Item.registerNameOverrideFunction(ItemID.nanostatic, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanostatic, {charged: ItemID.nanostatic, uncharged: ItemID.nanostaticUncharged});
ICore.Recipe.addRecipeFor("nano-armor-charge", ItemID.nanostaticUncharged, {charged: ItemID.nanostatic, uncharged: ItemID.nanostaticUncharged});

function chargeArmor(genD, genN){
	var time = World.getWorldTime()%24000;
	var p = Player.getPosition();
	if(GenerationUtils.canSeeSky(p.x, p.y, p.z)){
		if((time >= 23500 || time < 12550) && (!World.getWeather().rain || World.getLightLevel(this.x, this.y+1, this.z) > 14)){
			var energy = genD;
		}else{
			var energy = genN;
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
		if(slot.id == ItemID.nanostatic || slot.id == ItemID.nanostaticUncharged){
			chargeArmor(SPB.gen_day*20, SPB.gen_night*20);
		}
	}
});
Armor.registerFuncs("nanostatic", NANO_ARMOR_FUNCS); Armor.registerFuncs("nanostaticUncharged", NANO_ARMOR_FUNCS);