IDRegistry.genItemID("magnetron");
Item.createItem("magnetron", "Magnetron", {name: "magnetron"}, {stack: 1});

IDRegistry.genItemID("vajraCore");
Item.createItem("vajraCore", "Vajra Core", {name: "vajra_core"}, {stack: 1});

IDRegistry.genItemID("vajra");
Item.createItem("vajra", "Vajra", {name: "vajra"}, {stack: 1, isTech: true});
ChargeItemRegistry.registerItem(ItemID.vajra, "Eu", 1e7, 20000, 4, "tool", true);

ICore.ItemName.setRarity(ItemID.vajra, 3);
Item.registerNameOverrideFunction(ItemID.vajra, function(item, name){
	name = ICore.ItemName.showItemStorage(item, name);
	var mode = item.extra? item.extra.getInt("mode") : 0;
	if(mode > 0){
		name += "\nSilk Touch enabled";
	}
	return name;
});

Recipes.addShaped({id: ItemID.magnetron, count: 1, data: 0}, [
	"aba",
	"bsb",
	"aba"
], ['s', ItemID.superconductor, 0, 'a', ItemID.plateIron, 0, 'b', ItemID.plateCopper, 0]);

Recipes.addShaped({id: ItemID.vajraCore, count: 1, data: 0}, [
	" m ",
	"rcr",
	"sxs"
], ['x', BlockID.transformerHV, 0, 'm', ItemID.magnetron, 0, 's', ItemID.superconductor, 0, 'c', BlockID.teslaCoil, 0, 'r', ItemID.plateReinforcedIridium, 0]);

Recipes.addShaped({id: ItemID.vajra, count: 1, data: Item.getMaxDamage(ItemID.vajra)}, [
	"mem",
	"c#c",
	"axa"
], ['#', ItemID.vajraCore, 0, 'x', ItemID.storageLapotronCrystal, -1, 'e', ItemID.storageCrystal, -1, 'a', ItemID.plateAlloy, 0, 'b', ItemID.carbonPlate, 0, 'm', ItemID.plateIron, 0], ChargeItemRegistry.transferEnergy);

ICore.UI.setToolButton(ItemID.vajra, "button_switch");

ICore.UI.registerSwitchFunction(ItemID.vajra, function(item){
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

ToolLib.setTool(ItemID.vajra, {energyPerUse: 3333, level: 100, efficiency: 1, damage: 20}, {
	damage: 5,
	blockTypes: ["stone", "dirt", "wood"],
	modifyEnchant: function(enchant, item){
		if(item.extra && item.extra.getInt("mode") > 0){
			enchant.silk = true;
		}
	},
	onDestroy: function(item, coords, block){
		if(item.extra && item.extra.getInt("mode") > 0 && ToolAPI.getBlockMaterialName(block.id) == "plant"){
			if(ICore.Tool.dischargeItem(item, this.toolMaterial.energyPerUse)){
				World.destroyBlock(coords.x, coords.y, coords.z);
				if(block.id == 175) block.data = block.data%8;
				World.drop(coords.x + .5, coords.y + .5, coords.z + .5, block.id, 1, block.data);
			}
		}
		else if(Block.getDestroyTime(block.id) > 0){
			ICore.Tool.dischargeItem(item, this.toolMaterial.energyPerUse);
		}
		return true;
	},
	onBroke: function(item){return true;},
	onAttack: function(item, mob){
		ICore.Tool.dischargeItem(item, this.toolMaterial.energyPerUse);
		return true;
	},
	calcDestroyTime: function(item, coords, block, params, destroyTime){
		if(item.data + this.toolMaterial.energyPerUse <= Item.getMaxDamage(item.id) && destroyTime > 0){
			return 0;
		}
		return params.base;
	}
});