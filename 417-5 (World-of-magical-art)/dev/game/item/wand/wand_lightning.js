IDRegistry.genItemID("wandLightning");
Item.createItem("wandLightning", "Magic Wand [Lightning]", { name: "wand_lightning" });

ChargeItemRegistry.registerItem(ItemID.wandLightning, "Mana", 10000, 1);

Item.registerNoTargetUseFunction("wandLightning", function(item){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "lightning_bolt");
    }
});
Item.registerUseFunction("wandLightning", function(coords, item, block){
    if(item.data + 50 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, item.count, item.data + 50);
        let position = Player.getPosition();
        let spell = MagicSpell.deploy(position.x, position.y, position.z, "lightning_bolt");
    }
});

Callback.addCallback("PostLoaded", function () {
    Recipe.addStaffEnchanterRecipe({ id: ItemID.wandEmpty, data: 0 }, { id: ItemID.wandLightning, data: 0 }, "rune.mana");
});

Spell.registerPrototype("lightning_bolt", {
    effect: Effect.lightning_orb,
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
                    Entity.damageEntity(all[i], 5);
                    Entity.spawn(position.x, position.y, position.z, 93);
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