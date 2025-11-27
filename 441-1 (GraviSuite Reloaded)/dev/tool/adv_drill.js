IDRegistry.genItemID("advancedDDrill");
Item.createItem("advancedDDrill", "Advanced Diamond Drill", {name: "advanced_drill"}, {stack: 1});
ICore.ChargeRegistry.registerItem(ItemID.advancedDDrill, "Eu", 45000, 3);

Item.registerNameOverrideFunction(ItemID.advancedDDrill, function(item, name){
	var mode = 0;
	var extra = item.extra;
	if(extra){
	mode = extra.getInt("mode");}
	switch(mode){
		case 0:
			textMode = "§2Mode: Normal";
		break;
		case 1:
			textMode = "§6Mode: Low power";
		break;
		case 2:
			textMode = "§bMode: Big holes";
		break;
	}
	textMode = ICore.ItemName.getTooltip(name, textMode);
	textEnergy = ICore.ItemName.getItemStorageText(item, name);
	return name + textMode + textEnergy;
});

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.advancedDDrill, count: 1, data: Item.getMaxDamage(ItemID.advancedDDrill)}, [
		"ada",
		"cac"
	], ['d', ItemID.diamondDrill, -1, 'a', ItemID.upgradeOverclocker, -1, 'c', ItemID.circuitBasic, -1], ICore.ChargeRegistry.transportEnergy);
	
	if(__config__.getBool("change_ir_drill_recipe")){
	Recipes.deleteRecipe({id: ItemID.iridiumDrill, count: 1, data: Item.getMaxDamage(ItemID.iridiumDrill)});
	Recipes.addShaped({id: ItemID.iridiumDrill, count: 1, data: Item.getMaxDamage(ItemID.iridiumDrill)}, [
		" a ",
		"ada",
		" e "
	], ['d', ItemID.advancedDDrill, -1, 'e', ItemID.storageCrystal, -1, 'a', ItemID.plateReinforcedIridium, 0], ICore.ChargeRegistry.transportEnergy);}
});

ICore.UI.setToolButton(ItemID.advancedDDrill, "button_switch");

ICore.UI.registerSwitchFunction(ItemID.advancedDDrill, function(item){
	var extra = item.extra;
	if(!extra){
		extra = new ItemExtraData();
	}
	var mode = (extra.getInt("mode")+1)%3;
	extra.putInt("mode", mode);
	switch(mode){
	case 0:
		Game.message("§2Mode: Normal");
	break;
	case 1:
		Game.message("§6Mode: Low power");
	break;
	case 2:
		Game.message("§bMode: Big holes");
	break;
	}
	Player.setCarriedItem(item.id, 1, item.data, extra);
});

var extraData;
var dirtBlocksDrop = {13:318, 60:3, 110:3, 198:3, 243:3};
ToolAPI.setTool(ItemID.advancedDDrill, {energyConsumption: 160, level: 4, efficiency: 21.6, damage: 3}, {
	damage: 0,
	blockTypes: ["stone", "dirt"],
	onDestroy: function(item){
		var energyCost = this.toolMaterial.energyConsumption;
		extraData = item.extra;
		var mode = extraData? extraData.getInt("mode") : 0;
		if(mode == 1) energyCost /= 2;
		item.data = Math.min(item.data + energyCost - 1, Item.getMaxDamage(item.id));
	},
	onBroke: function(item){return true;},
	onAttack: function(item, mob){
		item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 2, Item.getMaxDamage(item.id));
	},
	calcDestroyTime: function(item, coords, block, params, destroyTime){
		var energyCost = this.toolMaterial.energyConsumption;
		extraData = item.extra;
		var mode = extraData? extraData.getInt("mode") : 0;
		if(mode == 1) energyCost /= 2;
		if(item.data + energyCost <= Item.getMaxDamage(item.id)){
			var material = ToolAPI.getBlockMaterial(block.id) || {};
			material = material.name;
			if(mode == 2 && (material == "dirt" || material == "stone")){
				destroyTime = 0;
				var maxDestroyTime = 0;
				var side = coords.side;
				var X = 1;
				var Y = 1;
				var Z = 1;
				if(side==BlockSide.EAST || side==BlockSide.WEST){
				X = 0;}
				if(side==BlockSide.UP || side==BlockSide.DOWN){
				Y = 0;}
				if(side==BlockSide.NORTH || side==BlockSide.SOUTH){
				Z = 0;}
				for(var xx = coords.x - X; xx <= coords.x + X; xx++){
					for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
						for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
							var blockID = World.getBlockID(xx, yy, zz);
							var material = ToolAPI.getBlockMaterial(blockID) || {};
							if(material.name == "dirt" || material.name == "stone"){
								destroyTime = Block.getDestroyTime(blockID) / material.multiplier;
								if(ToolAPI.getBlockDestroyLevel(blockID) <= 4){
									destroyTime /= 21.6;
								}
								maxDestroyTime = Math.max(destroyTime, maxDestroyTime);
							}
						}
					}
				}
				return maxDestroyTime;
			}
			if(mode == 1) return destroyTime * 21.6 / 16;
			return destroyTime;
		}
		return params.base;
	},
	destroyBlock: function(coords, side, item, block){
		var mode = extraData? extraData.getInt("mode") : 0;
		if(mode == 2 && item.data + 160 <= Item.getMaxDamage(item.id)){
			var X = 1;
			var Y = 1;
			var Z = 1;
			if(side==BlockSide.EAST || side==BlockSide.WEST){
			X = 0;}
			if(side==BlockSide.UP || side==BlockSide.DOWN){
			Y = 0;}
			if(side==BlockSide.NORTH || side==BlockSide.SOUTH){
			Z = 0;}
			for(var xx = coords.x - X; xx <= coords.x + X; xx++){
				for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
					for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
						blockID = World.getBlockID(xx, yy, zz);
						var material = ToolAPI.getBlockMaterial(blockID) || {};
						if(material.name == "dirt" || material.name == "stone"){
							item.data += 160;
							if(mode == 3 || material == "stone"){
								World.destroyBlock(xx, yy, zz, true);
							}else{
								drop = dirtBlocksDrop[blockID];
								if(drop){
									World.destroyBlock(xx, yy, zz, false);
									World.drop(xx+0.5, yy+0.5, zz+0.5, drop, 1);
								}
								else{World.destroyBlock(xx, yy, zz, true);}
							}
						}
						if(item.data + 160 >= Item.getMaxDamage(item.id)){
							Player.setCarriedItem(item.id, 1, item.data, extraData);
							return;
						}
					}
				}
			}
		}
		Player.setCarriedItem(item.id, 1, item.data, extraData);
	},
	useItem: function(coords, item, block){
		var side  = coords.side;
		coords = coords.relative;
		block = World.getBlockID(coords.x, coords.y, coords.z);
		if(GenerationUtils.isTransparentBlock(block)){
			for(var i = 9; i < 45; i++){
				var slot = Player.getInventorySlot(i);
				if(slot.id==50){
					slot.count--;
					if(!slot.count) slot.id = 0;
					Player.setInventorySlot(i, slot.id, slot.count, 0);
					World.setBlock(coords.x, coords.y, coords.z, 50, (6 - side)%6);
					break;
				}
			}
		}
	}
});
