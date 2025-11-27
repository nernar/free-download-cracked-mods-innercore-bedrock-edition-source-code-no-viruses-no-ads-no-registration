IDRegistry.genItemID("wandDarkness");
Item.createItem("wandDarkness", "Magic Wand [Darkness]", { name: "wand_darkness" });

ChargeItemRegistry.registerItem(ItemID.wandDarkness, "Mana", 10000, 1);

Item.registerNoTargetUseFunction("wandDarkness", function(item){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "darkness_bolt");
    }
});
Item.registerUseFunction("wandDarkness", function(coords, item, block){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "darkness_bolt");
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipe.addStaffEnchanterRecipe({ id: ItemID.wandEmpty, data: 0 }, { id: ItemID.wandDarkness, data: 0 }, "rune.essence");
});

Spell.registerPrototype("darkness_bolt", {
    effect: Effect.darkness_orb,
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
                    Entity.damageEntity(all[i], 10);
                    explode=true;
                }
            }
        }
        if(explode){
            Particle.effectExplode(Effect.cloud, position.x, position.y, position.z, 0.3, 50);
            return true;
        }
        return false;
    }
});