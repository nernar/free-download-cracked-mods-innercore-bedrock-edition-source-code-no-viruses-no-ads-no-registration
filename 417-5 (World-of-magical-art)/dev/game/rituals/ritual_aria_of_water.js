var ritual_aria_of_water = {
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
        let xdistance = 4;
        let ydistance = 4;
        let zdistance = 4;

        if (World.getThreadTime() % 20 === 0) {
            let container = World.getTileEntity(tile.x, tile.y + 1, tile.z);
            if (container && container.liquidStorage.getLimit("water") < 99999  && ((container.liquidStorage.getLiquidStored() === "water" && container.liquidStorage.getAmount("water") < container.liquidStorage.getLimit("water")) || container.liquidStorage.getAmount(container.liquidStorage.getLiquidStored()) === 0)) {
                container.liquidStorage.addLiquid("water", 1);
                Particle.effectHighSpiral(Effect.cloud, tile.x, tile.y + 1, tile.z, 1, 2);
            }
            for (var x = -xdistance; x <= xdistance; x++) {
                for (var y = -ydistance; y <= ydistance; y++) {
                    for (var z = -zdistance; z <= zdistance; z++) {
                        let block = World.getBlock(tile.x + x, tile.y + y, tile.z + z);
                        if (block.id === 60 && block.data === 0) {
                            World.setBlock(tile.x + x, tile.y + y, tile.z + z, 60, 7);
                            return;
                        }
                    }
                }
            }
        }
    },
    click: function (id, count, data, tile) {
        if (id === 325 && data === 0) {
            Player.setCarriedItem(id, count - 1, data);
            World.drop(tile.x, tile.y + 0.5, tile.z, 325, 1, 8);
        }
    },
    check: function (altar) {
        let block1 = World.getBlockID(altar.x + 1, altar.y, altar.z + 1);
        let block2 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block3 = World.getBlockID(altar.x - 1, altar.y, altar.z + 1);
        let block4 = World.getBlockID(altar.x - 1, altar.y, altar.z - 1);
        if (block1 === BlockID.runeWater && block2 === BlockID.runeWater && block3 === BlockID.runeWater && block4 === BlockID.runeWater) {
            return true;
        }
        else {
            return false;
        }
    }
};

Ritual.registerPrototype("aria_of_water", ritual_aria_of_water);