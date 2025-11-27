IDRegistry.genItemID("quantumstatic"); IDRegistry.genItemID("quantumstaticUncharged");
Item.createArmorItem("quantumstatic", "Static QuantumSuit Boots", {name: "quantumstatic"}, {type: "boots", armor: 0, durability: 25, texture: "armor/quantumadv_1.png", isTech: true});
Item.createArmorItem("quantumstaticUncharged", "Static QuantumSuit Boots", {name: "quantumstatic"}, {type: "boots", armor: 0, durability: 25, texture: "armor/quantumadv_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.quantumstatic, "Eu", 1000000, 3, "storage", true);
ChargeItemRegistry.registerItem(ItemID.quantumstaticUncharged, "Eu", 1000000, 3, "storage");

ICore.ItemName.setRarity(ItemID.quantumstatic, 2);

Item.registerNameOverrideFunction(ItemID.quantumstatic, ICore.ItemName.showItemStorage);

ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumstatic, {charged: ItemID.quantumstatic, uncharged: ItemID.quantumstaticUncharged});
ICore.Recipe.addRecipeFor("quantum-armor-charge", ItemID.quantumstaticUncharged, {charged: ItemID.quantumstatic, uncharged: ItemID.quantumstaticUncharged});

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
		if(slot.id == ItemID.quantumstatic || slot.id == ItemID.quantumstaticUncharged){
			chargeArmor(SPB.gen_day*20, SPB.gen_night*20);
		}
	}
});
Armor.registerFuncs("quantumstatic", QUANTUM_ARMOR_FUNCS); Armor.registerFuncs("quantumstaticUncharged", QUANTUM_ARMOR_FUNCS);