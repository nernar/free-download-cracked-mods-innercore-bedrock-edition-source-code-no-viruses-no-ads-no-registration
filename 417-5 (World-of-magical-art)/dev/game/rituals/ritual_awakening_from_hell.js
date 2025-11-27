var ritual_awakening_from_hell = {
    activate: function (id, count, data, altar) {
        if (id === ItemID.staffMagic && this.check(altar)) {
            Particle.effectHighSpiral(Effect.flame, altar.x, altar.y, altar.z, 1.5, 3, 0, 0.1, 0);
            return true;
        }
        else {
            return false;
        }
    },
    check: function (tile) {
        let bloodRune1 = World.getBlock(tile.x + 1, tile.y, tile.z + 1).id === BlockID.runeBlood;
        let bloodRune2 = World.getBlock(tile.x - 1, tile.y, tile.z + 1).id === BlockID.runeBlood;
        let bloodRune3 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeBlood;
        let bloodRune4 = World.getBlock(tile.x - 1, tile.y, tile.z - 1).id === BlockID.runeBlood;
        if (!(bloodRune1 && bloodRune2 && bloodRune3 && bloodRune4)) {
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
    click: function (id, count, data, tile) {
        if (id === 319) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 12);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 363) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 11);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 365) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 10);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 423) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 13);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 367) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedZombie", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.flame, tile.x , tile.y + 1, tile.z, 0.3, 100);
             Particle.effectRound(Effect.flame, tile.x, tile.y + 1.5, tile.z, 4);
        }
    }
};

Ritual.registerPrototype("ritual_awakening_from_hell", ritual_awakening_from_hell);