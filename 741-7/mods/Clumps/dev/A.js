function getXp(ent) {
    return Entity.getCompoundTag(ent).getInt("experience value");
}
let RADIUS = __config__.getNumber("optimization.radius");
let WIDTH = __config__.getNumber("optimization.width");
Callback.addCallback("ServerPlayerTick", function (player) {
    if (World.getThreadTime() % 200 == 0) {
        let playerPos = Entity.getPosition(player);
        let ents = Entity.getAllInRange(playerPos, RADIUS);
        for (let i in ents) {
            let ent = ents[i];
            if (Entity.getType(ent) == 69) {
                let xp = 0;
                xp += getXp(ent);
                let orbPos = Entity.getPosition(ent);
                let newEnts = Entity.getAllInRange(orbPos, WIDTH);
                newEnts.splice(newEnts.indexOf(ent), 1);
                for (let a in newEnts) {
                    let newEnt = newEnts[a];
                    let index = ents.indexOf(newEnt);
                    if (index !== -1) {
                        ents.splice(index, 1);
                    }
                    if (Entity.getType(newEnt) == 69) {
                        xp += getXp(newEnt);
                        Entity.remove(newEnt);
                    }
                }
                let bigTags = Entity.getCompoundTag(ent);
                bigTags.putInt("experience value", xp);
                Entity.setCompoundTag(ent, bigTags);
            }
        }
    }
});

