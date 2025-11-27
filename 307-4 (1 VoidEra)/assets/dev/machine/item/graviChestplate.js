IDRegistry.genItemID("graviChestplate");
Item.createArmorItem("graviChestplate", "graviChestplate", {name: "graviChestplate"}, {type: "chestplate", armor: 12, durability: 10000, texture: "armor/graviChestplate.png", isTech: false});

ChargeItemRegistry.registerItem(ItemID.graviChestplate, "Eu", 60000000, 3);

Item.registerNameOverrideFunction(ItemID.graviChestplate, RARE_ENERGY_ITEM_NAME);

IDRegistry.genItemID("graviChestplateUncharged");

Item.createArmorItem("graviChestplateUncharged", "graviChestplate", {name: "graviChestplate"}, {type: "chestplate", armor: 12, durability: 10000, texture: "armor/graviChestplate.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.graviChestplateUncharged, 60000000, 3, true);

Item.registerNameOverrideFunction(ItemID.graviChestplateUncharged, RARE_ENERGY_ITEM_NAME);

MachineRecipeRegistry.registerRecipesFor("quantum-armor-charge", {
    "ItemID.graviChestplate": {charged: ItemID.graviChestplate, uncharged: ItemID.graviChestplateUncharged},
    "ItemID.graviChestplateUncharged": {charged: ItemID.graviChestplate, uncharged: ItemID.graviChestplateUncharged},
}, true);

UIbuttons.setButton(ItemID.graviChestplate, "button_fly");
UIbuttons.setButton(ItemID.graviChestplate, "button_hover");

var runTime = 0;

var GRAVI_ARMOR_FUNCS = {
	hurt: function(params, item, index, maxDamage){
		var type = params.type;
		if(type==2 || type==3 || type==11){
			var energy = params.damage * 900;
			item.data = Math.min(item.data + energy, maxDamage);
		}
		if(type==5 && (index==1 || index==3)){
			var damage = 0;
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
			if(index==1){
				if(damage <= 0 && height < 22){
					Game.prevent();
				}
				else if(params.damage > damage){
					Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
				}
			}
			if(index==3 && item.data + 900 <= maxDamage && (damage > 0 || height >= 22)){
				params.damage = damage;
				damage = Math.min(params.damage, Math.floor((maxDamage - item.data)/900));
				if(params.damage > damage){
					Entity.setHealth(player, Entity.getHealth(player) + damage);
				}
				else{
					Game.prevent();
				}
				item.data = item.data + damage*900;
			}
		}
		if(type==9 && index==0 && item.data + 1000 <= maxDamage){
			Game.prevent();
			Entity.addEffect(player, MobEffect.waterBreathing, 1, 2);
			item.data = item.data + 1000;
		}
		Player.setArmorSlot(index, item.id, 1, item.data, item.extra);
		return false;
	},
	
	tick: function(slot, index, maxDamage){
		var armor = MachineRecipeRegistry.getRecipeResult("quantum-armor-charge", slot.id);
		if(slot.data >= maxDamage){
			slot.id = armor.uncharged;
			return true;
		}
		else{
			switch (index){
			case 0:
				Entity.clearEffect(player, MobEffect.poison);
				Entity.clearEffect(player, MobEffect.wither);
				
				var hunger = Player.getHunger();
				if(hunger < 20){
					var index = World.getThreadTime%36+9;
					var slot = Player.getInventorySlot(index);
					if(slot.id == ItemID.tinCanFull){
						var count = Math.min(20 - hunger, slot.count);
						Player.setHunger(hunger + count);
						slot.count -= count;
						Player.setInventorySlot(index, slot.count ? slot.id : 0, slot.count, slot.data);
						Player.addItemToInventory(ItemID.tinCanEmpty, count, 0);
						break;
					}
				}
				
				var extra = slot.extra;
				if(extra){
					var nightvision = extra.getBoolean("nv");
				}
				if(nightvision){
					var coords = Player.getPosition();
					var time = World.getWorldTime()%24000;
					if(World.getLightLevel(coords.x, coords.y, coords.z)==15 && time >= 0 && time <= 12000){
						Entity.addEffect(player, MobEffect.blindness, 1, 25);
					}
					Entity.addEffect(player, MobEffect.nightVision, 1, 225);
					if(World.getThreadTime()%20==0){
						slot.data = Math.min(slot.data+20, maxDamage);
						return true;
					}
				}
			break;
			case 1:
				var extra = slot.extra;
				if(extra){
					var hover = extra.getBoolean("hover");
				}
				if(hover && slot.data < maxDamage){
					var vel = Player.getVelocity();
					if(vel.y < -0.1){
						Player.setVelocity(vel.x, -0.1, vel.z);
						if(World.getThreadTime() % 5 == 0){
							slot.data = Math.min(slot.data+20, maxDamage);
							return true;
						}
					}
				}
				Entity.setFire(player, 0, true);
			break;
			case 2:
				var vel = Player.getVelocity();
				var horizontalVel = Math.sqrt(vel.x*vel.x + vel.z*vel.z)
				if(horizontalVel > 0.15){
					if(Math.abs(vel.y - fallVelocity) < 0.0001){runTime++;}
				}
				else{runTime = 0;}
				if(runTime > 2 && !Player.getFlying()){
					Entity.addEffect(player, MobEffect.movementSpeed, 6, 5);
					if(World.getThreadTime()%5==0){
						slot.data = Math.min(slot.data + Math.floor(horizontalVel*600), maxDamage);
						return true;
					}
				}
			break;
			}
			if(slot.id != armor.charged){
				slot.id = armor.charged;
				return true;
			}
		}
		return false;
	}
}; 



Armor.registerFuncs("graviChestplate", GRAVI_ARMOR_FUNCS); Armor.registerFuncs("graviChestplateUncharged", GRAVI_ARMOR_FUNCS);
