var ritual_essence_of_the_magical_call = {
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
        let bloodRune3 = World.getBlock(tile.x + 1, tile.y, tile.z - 1).id === BlockID.runeBlood;
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

        let essenceRune1 = World.getBlock(tile.x + 2, tile.y + 1, tile.z + 2).id === BlockID.runeEssence;
        let essenceRune2 = World.getBlock(tile.x + 2, tile.y + 1, tile.z - 2).id === BlockID.runeEssence;
        let essenceRune3 = World.getBlock(tile.x - 2, tile.y + 1, tile.z + 2).id === BlockID.runeEssence;
        let essenceRune4 = World.getBlock(tile.x - 2, tile.y + 1, tile.z - 2).id === BlockID.runeEssence;
        if (!(essenceRune1 && essenceRune2 && essenceRune3 && essenceRune4)) {
            return false;
        }
        return true;
    },
    click: function (id, count, data, tile) {
        if (id === 264) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemDiamond", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 265) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawn(tile.x + 0.5, tile.y + 1, tile.z + 0.5, 20);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 266) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemGold", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 406) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemQuartz", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 280) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemWooden", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
        else if (id === 337) {
            Player.setCarriedItem(id, count - 1, data);
            Entity.spawnCustom("summonedGolemStone", tile.x + 0.5, tile.y + 1, tile.z + 0.5);
            Particle.effectExplode(Effect.portal, tile.x + 0.5, tile.y + 1, tile.z + 0.5, 0.3, 100);
            Particle.effectRound(Effect.portal, tile.x, tile.y + 1.5, tile.z, 4);
        }
    }
};

Ritual.registerPrototype("ritual_essence_of_the_magical_call", ritual_essence_of_the_magical_call);