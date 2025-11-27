var ritual_gifts_of_neptune = {
    activate: function (id, count, data, tile) {
        if (id === ItemID.staffMagic && this.check(tile)) {
            Particle.effectHighSpiral(Effect.cloud, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    click: function (id, count, data, tile) {
        if (Math.random() < 0.5) {
            World.drop(tile.x, tile.y + 0.5, tile.z, 349, 1, 0);
            Particle.effectExplode(Effect.splash, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
        }
    },
    check: function (altar) {
        let block1 = World.getBlock(altar.x + 1, altar.y, altar.z + 1).id === BlockID.runeWater;
        let block2 = World.getBlock(altar.x + 1, altar.y, altar.z - 1).id === BlockID.runeWater;
        let block3 = World.getBlock(altar.x - 1, altar.y, altar.z + 1).id === BlockID.runeWater;
        let block4 = World.getBlock(altar.x - 1, altar.y, altar.z - 1).id === BlockID.runeWater;

        if (!(block1 && block2 && block3 && block4)) {
            return false;
        }

        let spaceRune1 = World.getBlock(altar.x + 2, altar.y, altar.z).id === BlockID.runeSpace;
        let spaceRune2 = World.getBlock(altar.x - 2, altar.y, altar.z).id === BlockID.runeSpace;
        let spaceRune3 = World.getBlock(altar.x, altar.y, altar.z + 2).id === BlockID.runeSpace;
        let spaceRune4 = World.getBlock(altar.x, altar.y, altar.z - 2).id === BlockID.runeSpace;

        if (!(spaceRune1 && spaceRune2 && spaceRune3 && spaceRune4)) {
            return false;
        }

        return true;
    }
};

Ritual.registerPrototype("ritual_gifts_of_neptune", ritual_gifts_of_neptune);