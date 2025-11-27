IDRegistry.genItemID("advjetpack");
Item.createArmorItem("advjetpack", "Electric Jetpack", {name: "exojetpack"}, {type: "chestplate", armor: 3, durability: 30000, texture: "armor/exojetpack_1.png", isTech: true});
ChargeItemRegistry.registerItem(ItemID.advjetpack, "Eu", 30000, 1, "storage", true);
Item.registerNameOverrideFunction(ItemID.advjetpack, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.advjetpack, count: 1, data: Item.getMaxDamage(ItemID.advjetpack)}, [
	"bab",
	"bbb",
	"bbb"
], ['a', ItemID.jetpack, -1, 'b', ItemID.Exo, 0]);

ICore.UI.setArmorButton(ItemID.advjetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.advjetpack, "button_hover");

Armor.registerFuncs("advjetpack", {
	hurt: function(params, item, index, maxDamage){
		if(params.type==5){
			var vel = Player.getVelocity().y;
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height) - 3;
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
