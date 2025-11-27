IDRegistry.genItemID("wandFire");
Item.createItem("wandFire", "Magic Wand [Fire]", { name: "wand_fire" });

ChargeItemRegistry.registerItem(ItemID.wandFire, "Mana", 10000, 1);

Item.registerNoTargetUseFunction("wandFire", function(item){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "fire_bolt");
    }
});
Item.registerUseFunction("wandFire", function(coords, item, block){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "fire_bolt");
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipe.addStaffEnchanterRecipe({ id: ItemID.wandEmpty, data: 0 }, { id: ItemID.wandFire, data: 0 }, "rune.fire");
});

Spell.registerPrototype("fire_bolt", {
    effect: Effect.fire_orb,
    collision: function (position){
        let explode = false;
        let entity = {
            64: true, 65: true,
            66: true, 67: true,
            68: true, 69: true,
            77: true, 80: true,
            81: true, 82: true,
            83: true, 84: true,
            85: true, 86: true,
            90: true, 93: true,
            94: true
        };
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], position) < 4) {
                    Entity.damageEntity(all[i], 4);
                    Entity.setFire(all[i], 60);
                    explode=true;
                }
            }
        }
        if(explode){
            Particle.effectExplode(Effect.flame, position.x, position.y, position.z, 0.3, 50);
            return true;
        }
        return false;
    }
});