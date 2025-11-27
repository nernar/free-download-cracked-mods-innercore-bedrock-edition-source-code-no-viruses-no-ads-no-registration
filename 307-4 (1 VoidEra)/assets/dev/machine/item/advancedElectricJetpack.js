IDRegistry.genItemID("advancedElectricJetpack");
Item.createArmorItem("advancedElectricJetpack", "advancedElectricJetpack", {name: "advancedElectricJetpack"}, {type: "chestplate", armor: 5, durability: 3000000, texture: "armor/advancedElectricJetpack.png"});
ChargeItemRegistry.registerItem(ItemID.advancedElectricJetpack, "Eu", 3000000, 0);
Item.registerNameOverrideFunction(ItemID.advancedElectricJetpack, ENERGY_ITEM_NAME);

UIbuttons.setButton(ItemID.advancedElectricJetpack, "button_fly");
UIbuttons.setButton(ItemID.advancedElectricJetpack, "button_hover");

Armor.registerFuncs("advancedElectricJetpack", {
	hurt: function(params, item, index, maxDamage){
		if(params.type==5){
			var vel = Player.getVelocity().y;
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height)- 3;
				}
			}
			//Game.message(height + ", "+damage+", "+params.damage)
			if(damage <= 0 && height < 22){
				Game.prevent();
			}
			else if(params.damage > damage){
				Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
			}
		}
		return false;
	},
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		if(extra){
			var hover = extra.getBoolean("hover");
		}
		if(hover && slot.data < maxDamage){
			var vel = Player.getVelocity();
			if(vel.y < -0.1){
				Player.setVelocity(vel.x, -0.1, vel.z);
				if(World.getThreadTime() % 5 == 0){
					Player.setArmorSlot(1, slot.id, 1, Math.min(slot.data+20, maxDamage), extra);
				}
			}
		}
		return false;
	},
});
