var ritual_death_rage = {
    activate: function (id, count, data, tile) {
        if (id === ItemID.staffMagic && this.check(tile)) {
            Particle.effectHighSpiral(Effect.poisonedFog, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    check: function (tile) {
        let block1 = World.getBlock(tile.x + 1, tile.y, tile.z + 1).id === BlockID.runeAir;
        let block2 = World.getBlock(tile.x + 1, tile.y, tile.z - 1).id === BlockID.runeAir;
        let block3 = World.getBlock(tile.x - 1, tile.y, tile.z + 1).id === BlockID.runeAir;
        let block4 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeAir;

        if (!(block1 && block2 && block3 && block4)) {
            return false;
        }

        let spaceRune1 = World.getBlock(tile.x + 2, tile.y, tile.z).id === BlockID.runeBlood;
        let spaceRune2 = World.getBlock(tile.x - 2, tile.y, tile.z).id === BlockID.runeBlood;
        let spaceRune3 = World.getBlock(tile.x, tile.y, tile.z + 2).id === BlockID.runeBlood;
        let spaceRune4 = World.getBlock(tile.x, tile.y, tile.z - 2).id === BlockID.runeBlood;

        if (!(spaceRune1 && spaceRune2 && spaceRune3 && spaceRune4)) {
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
                        Entity.damageEntity(all[i], 5);
                        Particle.effectExplode(Effect.poisonedFog, coords.x, coords.y, coords.z, 0.3, 100);
                        value = true;
                    }
                }
            }
            if (value) {
                Particle.effectHighSpiral(Effect.poisonedFog, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            }
        }
    }
};

Ritual.registerPrototype("ritual_death_rage", ritual_death_rage);