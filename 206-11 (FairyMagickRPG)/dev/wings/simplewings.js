IDRegistry.genItemID("simplewings");
Item.createArmorItem("simplewings", "Simple Wings", {name: "simplewings"}, {type: "chestplate", armor: 1, durability: 850, texture: "armor/simplewings_2.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.simplewings, 851, 0, true, true);

IDRegistry.genItemID("normalwings");
Item.createArmorItem("normalwings", "Fairy Wings", {name: "normalwings"}, {type: "chestplate", armor: 1, durability: 5000, texture: "armor/normalwings_2.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.normalwings, 5001, 0, true, true);

IDRegistry.genItemID("ironcrown");
Item.createArmorItem("ironcrown", "Iron Crown", {name: "ironcrown"}, {type: "helmet", armor: 1, durability: 750, texture: "armor/ironcrown_0.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.ironcrown, 751, 0);

UIbuttons.setButton(ItemID.normalwings, "button_fly");

Armor.registerFuncs("normalwings", {
	hurt: function(params, item, index, maxDamage){
		if(params.type==5){
			var vel = Player.getVelocity();
			if(vel.y < -0.226 && vel.y > -0.9){
				Game.prevent();
			}
		}
		return false;
	},
	tick: function(){
		return false;
	},
});

	Recipes.addShaped({id: ItemID.ironcrown, count: 1, data: 0}, [
		" b ",
		"btb",
		"b b"
	], ['b', 265, 0, 't', ItemID.pixi, 0]);

UIbuttons.setButton(ItemID.simplewings, "button_fly");

Armor.registerFuncs("simplewings", {
	hurt: function(params, item, index, maxDamage){
		if(params.type==5){
			var vel = Player.getVelocity();
			if(vel.y < -0.226 && vel.y > -0.9){
				Game.prevent();
			}
		}
		return false;
	},
	tick: function(){
		return false;
	},
});


IDRegistry.genItemID("goldcrown");
Item.createArmorItem("goldcrown", "Simple Magickal Crown", {name: "gold_crown"}, {type: "helmet", armor: 1, durability: 1200, texture: "armor/gold_crown_0.png", isTech: false});
ChargeItemRegistry.registerItem(ItemID.goldcrown, 1200, 0);

function registerStoragePack(id, level, tranfer){
	Armor.registerFuncs(id, {
		hurt: function(){
			return false;
		},
		tick: function(slot, index, maxDamage){
			return ENERGY_PACK_TICK(slot, maxDamage, level, tranfer);
		}
	});
}

var ENERGY_PACK_TICK = function(slot, maxDamage, level, transfer){
	if(World.getThreadTime()%20==0){
	    var item = Player.getCarriedItem();
	    var data = ChargeItemRegistry.getItemData(item.id);
	    if(!data || !data.isTool || data.level > level || item.data <= 1){
	        return false;
	    }
	    var energyAdd = Math.min(item.data - 1, Math.min(transfer*20, maxDamage - slot.data));
	    if(energyAdd > 0){
	        slot.data += energyAdd;
	        Player.setCarriedItem(item.id, 1, item.data - energyAdd);
	        return true;
		}
    }
    return false;
}

registerStoragePack("goldcrown", 0, 2);

registerStoragePack("ironcrown", 0, 1);

