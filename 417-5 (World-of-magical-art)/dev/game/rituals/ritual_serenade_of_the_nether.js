var ritual_serenade_of_the_nether = {
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
        if (World.getThreadTime() % 20 === 0) {
            if (World.getBlockID(tile.x, tile.y + 1, tile.z) === 0) {
                World.setBlock(tile.x, tile.y + 1, tile.z, 10, 0);
            }
            else {
                let container = World.getTileEntity(tile.x, tile.y + 1, tile.z);
                if (container && container.liquidStorage.getLimit("lava") < 99999 && ((container.liquidStorage.getLiquidStored() === "lava" && container.liquidStorage.getAmount("lava") < container.liquidStorage.getLimit("lava")) || container.liquidStorage.getAmount(container.liquidStorage.getLiquidStored()) === 0)) {
                    container.liquidStorage.addLiquid("lava", 1);
                    Particle.effectHighSpiral(Effect.cloud, tile.x, tile.y + 1, tile.z, 1, 2);
                }
            }
        }
    },
    click: function (id, count, data, tile) {
        if (id === 325 && data === 0) {
            Player.setCarriedItem(id, count - 1, data);
            World.drop(tile.x, tile.y + 0.5, tile.z, 325, 1, 10);
        }
    },
    check: function (altar) {
        let block1 = World.getBlockID(altar.x + 1, altar.y, altar.z);
        let block2 = World.getBlockID(altar.x - 1, altar.y, altar.z);
        let block3 = World.getBlockID(altar.x, altar.y, altar.z + 1);
        let block4 = World.getBlockID(altar.x, altar.y, altar.z - 1);
        if (block1 === BlockID.runeFire && block2 === BlockID.runeFire && block3 === BlockID.runeFire && block4 === BlockID.runeFire) {
            return true;
        }
        else {
            return false;
        }
    }
};

Ritual.registerPrototype("serenade_of_the_nether", ritual_serenade_of_the_nether);