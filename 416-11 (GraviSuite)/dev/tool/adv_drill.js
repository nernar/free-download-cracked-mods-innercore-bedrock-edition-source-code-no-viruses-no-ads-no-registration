IDRegistry.genItemID("advancedDDrill");
Item.createItem("advancedDDrill", "Advanced Diamond Drill", {name: "advanced_drill"}, {stack: 1, isTech: true});
ChargeItemRegistry.registerItem(ItemID.advancedDDrill, "Eu", 45000, 2000, 3, "tool", true);
ICore.Integration.addToolBooxValidItem(ItemID.advancedDDrill);
ICore.ItemName.setRarity(ItemID.advancedDDrill, 1);
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
	if(ChargeItemRegistry.getEnergyStored(item) > 0){
		name = "§e" + name;
	}
	textMode = ICore.ItemName.getTooltip(name, textMode);
	textEnergy = ICore.ItemName.getItemStorageText(item, name);
	return name + textMode + textEnergy;
});

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.advancedDDrill, count: 1, data: Item.getMaxDamage(ItemID.advancedDDrill)}, [
		"ada",
		"cac"
	], ['d', ItemID.diamondDrill, -1, 'a', ItemID.upgradeOverclocker, -1, 'c', ItemID.circuitBasic, -1], ChargeItemRegistry.transferEnergy);
	
	if(__config__.getBool("change_iridium_drill_recipe")){
	Recipes.deleteRecipe({id: ItemID.iridiumDrill, count: 1, data: Item.getMaxDamage(ItemID.iridiumDrill)});
	Recipes.addShaped({id: ItemID.iridiumDrill, count: 1, data: Item.getMaxDamage(ItemID.iridiumDrill)}, [
		" a ",
		"ada",
		" e "
	], ['d', ItemID.advancedDDrill, -1, 'e', ItemID.storageCrystal, -1, 'a', ItemID.plateReinforcedIridium, 0], ChargeItemRegistry.transferEnergy);}
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

ToolLib.setTool(ItemID.advancedDDrill, {energyPerUse: 160, level: 4, efficiency: 21.6, damage: 3}, {
	damage: 0,
	blockTypes: ["stone", "dirt"],
	onDestroy: function(item, coords, block){
		if(Block.getDestroyTime(block.id) > 0){
			var energyCost = this.toolMaterial.energyPerUse;
			var mode = item.extra? item.extra.getInt("mode") : 0;
			if(mode == 1) energyCost /= 2;
			ICore.Tool.dischargeItem(item, energyCost);
		}
		return true;
	},
	onBroke: function(item){return true;},
	onAttack: ToolType.drill.onAttack,
	calcDestroyTime: function(item, coords, block, params, destroyTime){
		var energyCost = this.toolMaterial.energyPerUse;
		var mode = item.extra? item.extra.getInt("mode") : 0;
		if(mode == 1) energyCost /= 2;
		if(item.data + energyCost <= Item.getMaxDamage(item.id)){
			var material = ToolAPI.getBlockMaterialName(block.id);
			if(mode == 2 && (material == "dirt" || material == "stone")){
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
		this.playDestroySound(item, block);
		var mode = item.extra? item.extra.getInt("mode") : 0;
		var material = ToolAPI.getBlockMaterialName(block.id);
		if(mode >= 2 && (material == "dirt" || material == "stone") && item.data + 160 <= Item.getMaxDamage(item.id)){
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
						if(xx == coords.x && yy == coords.y && zz == coords.z){
							continue;
						}
						blockID = World.getBlockID(xx, yy, zz);
						var material = ToolAPI.getBlockMaterial(blockID) || {};
						if(material.name == "dirt" || material.name == "stone"){
							item.data += 160;
							World.destroyBlock(xx, yy, zz, true);
							if(item.data + 160 >= Item.getMaxDamage(item.id)){
								Player.setCarriedItem(item.id, 1, item.data, item.extra);
								return;
							}
						}
					}
				}
			}
			Player.setCarriedItem(item.id, 1, item.data, item.extra);
		}
	},
	useItem: ToolType.drill.useItem,
	continueDestroyBlock: ToolType.drill.continueDestroyBlock,
	playDestroySound: ToolType.drill.playDestroySound
});
