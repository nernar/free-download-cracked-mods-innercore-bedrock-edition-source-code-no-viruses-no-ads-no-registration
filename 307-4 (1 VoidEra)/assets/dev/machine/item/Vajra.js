IDRegistry.genItemID("Vajra");
Item.createItem("Vajra", "Vajra", {name: "Vajra", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.Vajra, "Eu", 5000000, 0);

Item.registerNameOverrideFunction(ItemID.Vajra, ENERGY_ITEM_NAME);


ToolAPI.addBlockMaterial("wool", 1.5);
ToolAPI.registerBlockMaterial(35, "wool");

Item.registerNameOverrideFunction(ItemID.Vajra, function(item, name){
	var energyStorage = Item.getMaxDamage(item.id) - 1;
	var energyStored = Math.min(energyStorage - item.data + 1, energyStorage);
	if(energyStored==0){return name;}
	name = "§b" + name + "\n§7" + energyStored + "/" + energyStorage + " Eu";
	
	var mode = 0;
	var extra = item.extra;
	if(extra){
	mode = extra.getInt("mode");}
	switch(mode){
		case 0:
			name += "\nFortune III mode";
		break;
		case 1:
			name += "\nSilk Touch mode";
		break;
		case 2:
			name += "\n3x3 Fortune III mode";
		break;
		case 3:
			name += "\n3x3 Silk Touch mode";
		break;
	}
	
	return name;
});


ToolType.drill = {
isWeapon: true,
    damage: 15,
baseDamage: 0,
    blockTypes: ["stone", "dirt", "ore", "wood", "wool", "fibre", "plant"],
    onDestroy: function(item){
        item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 1, Item.getMaxDamage(item.id));
    },
    onBroke: function(item){return true;},
    onAttack: function(item, mob){
        item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 2, Item.getMaxDamage(item.id));
    },
    calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
        if(item.data + this.toolMaterial.energyConsumption <= Item.getMaxDamage(item.id)){
            return destroyTime;
        }
        else{
            return params.base;
        }
    },
useItem: function(coords, item, block){
    	var side = coords.side;
    	coords = coords.relative;
    	block = World.getBlockID(coords.x, coords.y, coords.z);
    	if(block==0){
	    	for(var i = 0; i < 36; i++){
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
}
var extraData;
var dirtBlocksDrop = {13:318, 60:3, 110:3, 198:3, 243:3};
ToolAPI.setTool(ItemID.Vajra, {energyConsumption: 100, level: 5, efficiency: 100, damage: 15}, {
	damage: 0,
	blockTypes: ["stone", "dirt", "ore", "wood", "wool", "fibre", "plant"],

	modifyEnchant: function(enchant, item){
		var mode = 0;
		var extra = item.extra || extraData;
		if(extra){
		mode = extra.getInt("mode");}
		
		if(mode%2){
		enchant.silk = 1;}
		else{
		enchant.fortune = 3;}
	},
	onDestroy: function(item){
		item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 1, Item.getMaxDamage(item.id));
	},
	onBroke: function(item){return true;},
	onAttack: function(item, mob){
		item.data = Math.min(item.data + this.toolMaterial.energyConsumption - 2, Item.getMaxDamage(item.id));
	},
	calcDestroyTime: function(item, coords, block, params, destroyTime){
		if(item.data + 800 <= Item.getMaxDamage(item.id)){
			var mode = 0;
			var extra = item.extra;
			extraData = extra;
			if(extra){
			mode = extra.getInt("mode");}
			var material = ToolAPI.getBlockMaterial(block.id) || {};
			material = material.name;
			if(mode > 1 && (material == "dirt" || material == "stone" || material == "wood")){
				destroyTime = 0;
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
							if(material.name == "dirt" || material.name == "stone" || material == "wood"){
								destroyTime += Block.getDestroyTime(blockID) / material.multiplier * 1.5;
							}
						}
					}
				}
				destroyTime /= 10;
			}
			return destroyTime;
		}
		else{
			return params.base;
		}
	},
	destroyBlock: function(coords, side, item, block){
		var mode = 0;
		var extra = extraData;
		if(extra){
		mode = extra.getInt("mode");}
		if(item.data + 800 <= Item.getMaxDamage(item.id)){
			if(mode < 2){
				item.data += 800;
			}
			else{
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
							if(material.name == "dirt" || material.name == "stone" || material == "wood"){
								item.data += 800;
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
							if(item.data + 800 >= Item.getMaxDamage(item.id)){
								Player.setCarriedItem(item.id, 1, item.data, extra);
								return;
							}
						}
					}
				}
			}
		}
		Player.setCarriedItem(item.id, 1, item.data, extra);
	},
	useItem: function(coords, item, block){
		if(Entity.getSneaking(player)){
			var extra = item.extra;
			if(!extra){
				extra = new ItemExtraData();
			}
			var mode = (extra.getInt("mode")+1)%4;
			extra.putInt("mode", mode);
			switch(mode){
			case 0:
				//var enchant = {type: Enchantment.FORTUNE, level: 3};
				Game.message("§eFortune III mode");
			break;
			case 1:
				//var enchant = {type: Enchantment.SILK_TOUCH, level: 1};
				Game.message("§9Silk Touch mode");
			break;
			case 2:
				//var enchant = {type: Enchantment.FORTUNE, level: 3};
				Game.message("§c3x3 Fortune III mode");
			break;
			case 3:
				//var enchant = {type: Enchantment.SILK_TOUCH, level: 1};
				Game.message("§23x3 Silk Touch mode");
			break;
			}
			//extra.removeAllEnchants();
			//extra.addEnchant(enchant.type, enchant.level);
			Player.setCarriedItem(item.id, 1, item.data, extra);
		}
		else{
			var side  = coords.side;
			coords = coords.relative;
			block = World.getBlockID(coords.x, coords.y, coords.z);
			if(block==0){
				for(var i = 0; i < 36; i++){
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
	}
});


Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.Vajra, count: 1, data: 0}, [
		"axa",
		"bdb",
		"mwm"
	], ['a', ItemID.plateIron, 0, 'x', ItemID.storageCrystal, -1, 'b', ItemID.carbonPlate, 0, 'd', ItemID.vajraCore, 0, 'w', ItemID.storageLapotronCrystal, -1, 'm', ItemID.plateAlloy, 0]);
});