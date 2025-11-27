var ritual_serenade_of_perun = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Effect.cloud, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    tick: function (tile) {
        let radius = 10;

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
            let all = Entity.getAll();
            for (var i in all) {
                if (!Player.isPlayer(all[i]) && !entity[Entity.getType(all[i])]) {
                    if (Entity.getDistanceToCoords(all[i], { x: tile.x, y: tile.y, z: tile.z }) < radius) {
                        let coords = Entity.getPosition(all[i]);
                        Entity.damageEntity(all[i], 8);
                        Entity.spawn(coords.x, coords.y, coords.z, 93);
                    }
                }
            }
        }
    },
    check: function (altar) {
        let block1 = World.getBlockID(altar.x + 1, altar.y, altar.z + 1);
        let block2 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block3 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block4 = World.getBlockID(altar.x - 1, altar.y, altar.z - 1);

        let block11 = World.getBlockID(altar.x + 2, altar.y, altar.z);
        let block22 = World.getBlockID(altar.x - 2, altar.y, altar.z);
        let block33 = World.getBlockID(altar.x, altar.y, altar.z + 2);
        let block44 = World.getBlockID(altar.x, altar.y, altar.z - 2);
        if (block1 === BlockID.runeAir && block2 === BlockID.runeAir && block3 === BlockID.runeAir && block4 === BlockID.runeAir && block11 === BlockID.runeWater && block22 === BlockID.runeWater && block33 === BlockID.runeWater && block44 === BlockID.runeWater) {
            return true;
        }
        else {
            return false;
        }
    }
};

Ritual.registerPrototype("serenade_of_perun", ritual_serenade_of_perun);