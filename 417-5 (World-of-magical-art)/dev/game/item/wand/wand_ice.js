IDRegistry.genItemID("wandIce");
Item.createItem("wandIce", "Magic Wand [Ice]", { name: "wand_ice" });

ChargeItemRegistry.registerItem(ItemID.wandIce, "Mana", 10000, 1);

Item.registerNoTargetUseFunction("wandIce", function(item){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "ice_bolt");
    }
});
Item.registerUseFunction("wandIce", function(coords, item, block){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "ice_bolt");
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipe.addStaffEnchanterRecipe({ id: ItemID.wandEmpty, data: 0 }, { id: ItemID.wandIce, data: 0 }, "rune.water");
});

Spell.registerPrototype("ice_bolt", {
    effect: Effect.ice_orb,
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
            Particle.effectExplode(Effect.snow, position.x, position.y, position.z, 0.3, 100);
            return true;
        }
        return false;
    }
});