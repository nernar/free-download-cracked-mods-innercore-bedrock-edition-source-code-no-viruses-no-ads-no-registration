var ritual_of_the_crusher = {
    activate: function (id, count, data, tile) {
        if (id === ItemID.staffMagic && this.check(tile)) {
            Particle.effectHighSpiral(Effect.cloud, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    check: function (tile) {
        let earthRune1 = World.getBlock(tile.x + 1, tile.y, tile.z + 1).id === BlockID.runeEarth;
        let earthRune2 = World.getBlock(tile.x + 1, tile.y, tile.z - 1).id === BlockID.runeEarth;
        let earthRune3 = World.getBlock(tile.x - 1, tile.y, tile.z + 1).id === BlockID.runeEarth;
        let earthRune4 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeEarth;
        if (!(earthRune1 && earthRune2 && earthRune3 && earthRune4)) {
            return false;
        }

        let manaRune1 = World.getBlock(tile.x + 2, tile.y, tile.z).id === BlockID.runeMana;
        let manaRune2 = World.getBlock(tile.x - 2, tile.y, tile.z).id === BlockID.runeMana;
        let manaRune3 = World.getBlock(tile.x, tile.y, tile.z + 2).id === BlockID.runeMana;
        let manaRune4 = World.getBlock(tile.x, tile.y, tile.z - 2).id === BlockID.runeMana;
        if (!(manaRune1 && manaRune2 && manaRune3 && manaRune4)) {
            return false;
        }

        let emptyRune1 = World.getBlock(tile.x + 2, tile.y, tile.z + 2).id === BlockID.runeEmpty;
        let emptyRune2 = World.getBlock(tile.x + 2, tile.y, tile.z - 2).id === BlockID.runeEmpty;
        let emptyRune3 = World.getBlock(tile.x - 2, tile.y, tile.z + 2).id === BlockID.runeEmpty;
        let emptyRune4 = World.getBlock(tile.x - 2, tile.y, tile.z - 2).id === BlockID.runeEmpty;
        if (!(emptyRune1 && emptyRune2 && emptyRune3 && emptyRune4)) {
            return false;
        }

        let spaceRune1 = World.getBlock(tile.x + 2, tile.y + 1, tile.z + 2).id === BlockID.runeSpace;
        let spaceRune2 = World.getBlock(tile.x + 2, tile.y + 1, tile.z - 2).id === BlockID.runeSpace;
        let spaceRune3 = World.getBlock(tile.x - 2, tile.y + 1, tile.z + 2).id === BlockID.runeSpace;
        let spaceRune4 = World.getBlock(tile.x - 2, tile.y + 1, tile.z - 2).id === BlockID.runeSpace;
        if (!(spaceRune1 && spaceRune2 && spaceRune3 && spaceRune4)) {
            return false;
        }
        return true;
    },
    tick: function (tile) {
        if (!tile.data.digX) {
            tile.data.digY = tile.y - 2;
            tile.data.digX = tile.x - 5;
            tile.data.digZ = tile.z - 4;
        }

        if (!tile.data.complete && World.getThreadTime() % 10 === 0) {
            var range = 4;
            if (tile.data.digX++ > tile.x + range - 1) {
                tile.data.digX = tile.x - range;
                if (tile.data.digZ++ > tile.z + range - 1) {
                    tile.data.digZ = tile.z - range;
                    tile.data.digX = tile.x - range;
                    if (tile.data.digY-- < tile.y - 31) {
                        tile.data.complete = true;
                    }
                }
            }
            var block = World.getBlock(tile.data.digX, tile.data.digY, tile.data.digZ);
            if (block.id === 7 || block.id === 8 || block.id === 9 || block.id === 10 || block.id === 11) {
                return null;
            }
            ritual_of_the_crusher.mineBlock(tile, tile.data.digX, tile.data.digY, tile.data.digZ, block, 278);
        }
        return null;
    },

    mineBlock: function (tile, x, y, z, block, level) {
        var drop = Block.getBlockDrop({ x: x, y: y, z: z }, block.id, block.data, level);
        var items = [];
        for (let i in drop) {
            items.push({ id: drop[i][0], count: drop[i][1], data: drop[i][2] });
        }
        var container = World.getContainer(x, y, z);
        if (container) {
            slots = StorageInterface.getContainerSlots(container);
            for (let i in slots) {
                var slot = container.getSlot(slots[i]);
                if (slot.id > 0) {
                    items.push({ id: slot.id, count: slot.count, data: slot.data, extra: slot.extra });
                    if (container.slots) {
                        slot.id = slot.count = slot.data = 0;
                    } else {
                        container.setSlot(i, 0, 0, 0);
                    }
                }
            }
        }
        World.setBlock(x, y, z, 0);
        ritual_of_the_crusher.drop(tile, items);
    },

    drop: function (tile, items) {
        var containers = StorageInterface.getNearestContainers(tile, 1, false);
        if (containers) {
            StorageInterface.putItems(items, containers);
        }
        for (var i in items) {
            var item = items[i];
            if (item.count > 0) {
                Level.dropItem(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 2, item.id, item.count, item.data, item.extra);
            }
        }
    }
};

Ritual.registerPrototype("ritual_of_the_crusher", ritual_of_the_crusher);