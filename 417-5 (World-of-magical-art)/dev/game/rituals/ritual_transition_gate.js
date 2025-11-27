var portalX = null;
var portalY = null;
var portalZ = null;

var ritual_transition_gate = {
    activate: function (id, count, data, tile) {
        if (id === ItemID.staffMagic && this.check(tile)) {
            if (portalX || portalY || portalZ) {
                var tile2 = World.getTileEntity(portalX, portalY, portalZ);
                if (tile2) {
                    tile.data.portalX = portalX;
                    tile.data.portalY = portalY;
                    tile.data.portalZ = portalZ;

                    tile2.data.portalX = tile.x;
                    tile2.data.portalY = tile.y;
                    tile2.data.portalZ = tile.z;

                    Particle.effectHighSpiral(Effect.portal, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
                    Particle.effectHighSpiral(Effect.portal, tile2.x, tile2.y, tile2.z, 1.5, 3, 0, 0.1, 0);
                }
            }
            else {
                portalX = tile.x;
                portalY = tile.y;
                portalZ = tile.z;
                Particle.effectHighSpiral(Effect.portal, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            }
            return true;
        }
        else {
            return false;
        }
    },
    check: function (tile) {
        let block1 = World.getBlock(tile.x + 1, tile.y, tile.z + 1).id === BlockID.runeSpace;
        let block2 = World.getBlock(tile.x + 1, tile.y, tile.z - 1).id === BlockID.runeSpace;
        let block3 = World.getBlock(tile.x - 1, tile.y, tile.z + 1).id === BlockID.runeSpace;
        let block4 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeSpace;

        if (!(block1 && block2 && block3 && block4)) {
            return false;
        }

        let spaceRune1 = World.getBlock(tile.x + 2, tile.y, tile.z).id === BlockID.runeMana;
        let spaceRune2 = World.getBlock(tile.x - 2, tile.y, tile.z).id === BlockID.runeMana;
        let spaceRune3 = World.getBlock(tile.x, tile.y, tile.z + 2).id === BlockID.runeMana;
        let spaceRune4 = World.getBlock(tile.x, tile.y, tile.z - 2).id === BlockID.runeMana;

        if (!(spaceRune1 && spaceRune2 && spaceRune3 && spaceRune4)) {
            return false;
        }

        return true;
    },
    click: function (id, count, data, tile) {
        if (tile.data.portalX && manastorage.getItem(id)) {
            Player.setCarriedItem(id, count - 1, data);
            Player.setPosition(tile.data.portalX + 0.5, tile.data.portalY + 1, tile.data.portalZ + 0.5);
            Particle.effectHighSpiral(Effect.portal, tile.x, tile.y, tile.z, 1.5, 3, 0, 0.1, 0);
            Particle.effectHighSpiral(Effect.portal, tile.data.portalX, tile.data.portalY, tile.data.portalZ, 1.5, 3, 0, 0.1, 0);
        }
    }
};

Ritual.registerPrototype("ritual_transition_gate", ritual_transition_gate);