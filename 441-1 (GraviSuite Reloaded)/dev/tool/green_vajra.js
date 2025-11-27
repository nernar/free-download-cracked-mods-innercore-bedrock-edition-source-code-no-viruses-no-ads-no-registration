IDRegistry.genItemID("gvajra");
Item.createItem("gvajra", "Vajra", {name: "green_vajra"}, {stack: 1});
ICore.ChargeRegistry.registerItem(ItemID.gvajra, "Eu", 10000000, 3);
Item.registerNameOverrideFunction(ItemID.gvajra, function(item, name){
	name = ICore.ItemName.showRareItemStorage(item, name);
	var mode = item.extra? item.extra.getInt("mode") : 0;
	if(mode > 0){
		name += "\nSilk Touch mode";
	}
	return name;
});

Recipes.addShaped({id: ItemID.gvajra, count: 1, data: Item.getMaxDamage(ItemID.gvajra)}, [
	"ici",
	"cdc",
	"ili"
], ['c', ItemID.circuitBasic, 0, 'l', ItemID.storageLapotronCrystal, -1, 'i', ItemID.plateReinforcedIridium, 0, 'd', ItemID.iridiumDrill, -1], ICore.ChargeRegistry.transportEnergy);

ICore.UI.setToolButton(ItemID.gvajra, "button_switch");

ICore.UI.registerSwitchFunction(ItemID.gvajra, function(item){
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

var extraData;
ToolAPI.setTool(ItemID.gvajra, {energyConsumption: 3333, level: 100, efficiency: 1, damage: 15}, {
	damage: 5,
	blockTypes: ["stone", "dirt", "wood"],
	modifyEnchant: function(enchant, item){
		var mode = 0;
		var extra = item.extra || extraData;
		if(extra){
		mode = extra.getInt("mode");}
		if(mode > 0){
		enchant.silk = true;}
	},
	onDestroy: function(item){
		extraData = item.extra;
		item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 1, Item.getMaxDamage(item.id));
	},
	onBroke: function(item){return true;},
	onAttack: function(item, mob){
		item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 2, Item.getMaxDamage(item.id));
	},
	calcDestroyTime: function(item, coords, block, params, destroyTime){
		if(item.data + this.toolMaterial.energyConsumption <= Item.getMaxDamage(item.id) && destroyTime > 0){
			return 0;
		}
		return params.base;
	},
	destroyBlock: function(coords, side, item, block){
		Player.setCarriedItem(item.id, 1, item.data, extraData);
	}
});