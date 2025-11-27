var ritual_of_the_green_grove = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Native.ParticleType.cloud, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
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
        if (block1 === BlockID.runeEarth && block2 === BlockID.runeEarth && block3 === BlockID.runeEarth && block4 === BlockID.runeEarth && block11 === BlockID.runeWater && block22 === BlockID.runeWater && block33 === BlockID.runeWater && block44 === BlockID.runeWater) {
            return true;
        }
        else {
            return false;
        }
    },
    tick: function (tile) {
        tile.data.index ? null : tile.data.index = 0;
        let radius = 9;
        
        if (World.getThreadTime() % 20 === 0) {
            ritual_of_the_green_grove.waterFarmlands(tile, radius);
            ritual_of_the_green_grove.growFarmlands(tile, radius);
        }
    },
    waterFarmlands: function (tile, radius) {
        for (var x = 0; x < radius; x++) {
            for (var z = 0; z < radius; z++) {
                for (var y = radius; y > 0; y--) {
                    var block = World.getBlock(tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y, tile.z - parseInt(radius / 2) + z);
                    if (block.id === 60 && block.data === 0) {
                        World.setBlock(tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y, tile.z - parseInt(radius / 2) + z, 60, 7);
                        return;
                    }
                }
            }
        }
    },
    growFarmlands: function (tile, radius) {
        for (var x = 0; x < radius; x++) {
            for (var z = 0; z < radius; z++) {
                for (var y = radius; y > 0; y--) {
                    var block = World.getBlock(tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y + 1, tile.z - parseInt(radius / 2) + z);
                    if (block.id === 59 || block.id === 141 || block.id === 142 || block.id === 244) {
                        if (block.data < 7) {
                            World.setBlock(tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y + 1, tile.z - parseInt(radius / 2) + z, block.id, block.data + 1);
                            Particle.effectExplode(Effect.splash, tile.x - parseInt(radius / 2) + x, tile.y - parseInt(radius / 2) + y + 1, tile.z - parseInt(radius / 2) + z, 0.3, 100);
                            return;
                        }
                    }
                }
            }
        }
    }
};

Ritual.registerPrototype("ritual_of_the_green_grove", ritual_of_the_green_grove);