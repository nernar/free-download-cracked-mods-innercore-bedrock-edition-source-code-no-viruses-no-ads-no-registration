IDRegistry.genItemID("grenadeExplosive");
Item.createThrowableItem("grenadeExplosive", "Explosive Orb", { name: "grenade_explosive" });

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.grenadeExplosive, count: 1, data: 0 }, [
        "cbc",
        "bab",
        "cbc"
    ], ['a', 265, 0, 'b', 289, 0, 'c', ItemID.dustMana, 0]);
});

Callback.addCallback("ProjectileHit", function (projectile, item, target) {
    if (item.id === ItemID.grenadeExplosive) {
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
        Particle.effectExplode(Native.ParticleType.cloud, target.x, target.y, target.z, 0.3, 100);
        let all = Entity.getAll();
        for (let i in all) {
            if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                if (Entity.getDistanceToCoords(all[i], { x: target.x, y: target.y, z: target.z }) < 10) {
                    let coords = Entity.getPosition(all[i]);
                    Level.explode(coords.x, coords.y, coords.z, 1, true);
                }
            }
        }
    }
});