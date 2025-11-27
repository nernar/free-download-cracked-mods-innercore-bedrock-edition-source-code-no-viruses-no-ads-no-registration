var ritual_aria_of_fire = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Effect.flame, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    tick: function (tile) {
        let distance = 10;

        if (World.getThreadTime() % 20 === 0) {
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
            let value = false;
            let all = Entity.getAll();
            for (let i in all) {
                if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                    if (Entity.getDistanceToCoords(all[i], { x: tile.x, y: tile.y, z: tile.z }) < distance) {
                        let coords = Entity.getPosition(all[i]);
                        Entity.damageEntity(all[i], 4);
                        Entity.setFire(all[i], 60);
                        Particle.effectExplode(Effect.flame, coords.x, coords.y, coords.z, 0.3, 100);
                        value = true;
                    }
                }
            }
            if (value) {
                Particle.effectHighSpiral(Effect.flame, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            }
        }
    },
    check: function (altar) {
        var block1 = World.getBlockID(altar.x + 1, altar.y, altar.z + 1);
        var block2 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        var block3 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        var block4 = World.getBlockID(altar.x - 1, altar.y, altar.z - 1);
        if (block1 === BlockID.runeFire && block2 === BlockID.runeFire && block3 === BlockID.runeFire && block4 === BlockID.runeFire) {
            return true;
        }
        else {
            return false;
        }
    }
};

Ritual.registerPrototype("aria_of_fire", ritual_aria_of_fire);