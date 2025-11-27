IDRegistry.genItemID("advJetpack");
Item.createArmorItem("advJetpack", "Advanced Jetpack", {name: "advanced_jetpack"}, {type: "chestplate", armor: 5, durability: 3e6, texture: "armor/advJetpack.png"});
ICore.ChargeRegistry.registerItem(ItemID.advJetpack, "Eu", 3000000, 4, true);
Item.registerNameOverrideFunction(ItemID.advJetpack, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.advJetpack, count: 1, data: Item.getMaxDamage(ItemID.advJetpack)}, [
	"cjc",
	"bab",
	"oxo"
], ['x', ItemID.circuitAdvanced, 0, 'j', ItemID.jetpack, -1, 'a', ItemID.lappack, -1, 'b', ItemID.engineBoost, 0, 'c', ItemID.carbonPlate, 0, 'o', ItemID.cableOptic, 0], ICore.ChargeRegistry.transportEnergy);

ICore.UI.setArmorButton(ItemID.advJetpack, "button_fly");
ICore.UI.setArmorButton(ItemID.advJetpack, "button_hover");
EnergyLevelUI.setFor(ItemID.advJetpack);

Armor.registerFuncs("advJetpack", {
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
			if(damage <= 0 && height < 22){
				Game.prevent();
			}
			else if(params.damage > damage){
				var player = Player.get();
				Entity.setHealth(player, Entity.getHealth(player) + params.damage - damage);
			}
		}
		return false;
	},
	tick: function(slot, index, maxDamage){
		var extra = slot.extra;
		var hover = extra? extra.getBoolean("hover") : false;
		if(hover && slot.data < maxDamage){
			var vel = Player.getVelocity();
			if(vel.y < -0.1){
				Player.setVelocity(vel.x, -0.1, vel.z);
				if(World.getThreadTime() % 5 == 0){
					Player.setArmorSlot(1, slot.id, 1, Math.min(slot.data+20, maxDamage), extra);
				}
			}
		}
		ENERGY_PACK_TICK(slot, maxDamage, 4, 8192);
		return false;
	},
});
