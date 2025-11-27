function ClientEntityAI(ent) {
    this.getEntity = function () {
        return ent;
    };
    this.onLocalTick = function () {
    };
}
function ServerEntityAI(ent) {
    this.getEntity = function () {
        return ent;
    };
    this.onTick = function () {
    };
    this.onHurt = function () {
    };
    this.onInteract = function () {
    };
    this.onDeath = function () {
    };
}
function EntityAI() {
    ClientEntityAI.apply(this, arguments);
    ServerEntityAI.apply(this, arguments);
}
function EntityAIController() {
    let registered = {};
    let list = [];
    this.register = function (stringId, prot) {
        registered[stringId + "<>"] = prot;
        return this;
    };
    this.can = function (ent) {
        return !!registered[Entity.getTypeName(ent)];
    };
    this.add = function (ent, ai) {
        ai = ai || registered[Entity.getTypeName(ent)];
        if (ai) {
            let ai_instance = new ai(ent);
            list.push(ai_instance);
            return ai_instance;
        }
        return null;
    };
    this.indexOf = function (ent) {
        for (let i in list) {
            if (list[i].getEntity() == ent) {
                return i;
            }
        }
        return -1;
    };
    this.remove = function (ent) {
        let index = this.indexOf(ent);
        if (index == -1) {
            return;
        }
        return list.slice(index, index + 1)[0];
    };
    this.clear = function () {
        list = [];
    };
    this.event = function (ent, name, args) {
        let index = this.indexOf(ent);
        if (index == -1) {
            return;
        }
        let ai = list[index];
        return ai[name].apply(ai, args);
    };
    this.eventAll = function (name, args) {
        for (let i in list) {
            let ai = list[i];
            ai[name].apply(ai, args);
        }
    };
}
const ClientEntityAIController = new EntityAIController();
const ServerEntityAIController = new EntityAIController();
EntityAI.register = function (strId, ai) {
    ClientEntityAIController.register(strId, ai);
    ServerEntityAIController.register(strId, ai);
};
Network.addClientPacket("dc.entity_added", function (packet) {
    ClientEntityAIController.add(packet.ent);
});
Network.addClientPacket("dc.entity_remove", function (packet) {
    ClientEntityAIController.remove(packet.ent);
});
Network.addClientPacket("dc.entitys", function (packet) {
    let entitys = packet.entitys;
    for (let i in entitys) {
        let ent = entitys[i];
        ClientEntityAIController.add(ent);
    }
});
Callback.addCallback("ServerPlayerLoaded", function (player) {
    Network.getClientForPlayer(player).send("dc.entitys", {entitys: Entity.getAll()});
});
Callback.addCallback("EntityAdded", function (ent) {
    ServerEntityAIController.add(ent);
    Network.sendToAllClients("dc.entity_added", {ent: ent});
});
Callback.addCallback("EntityRemoved", function (ent) {
    ServerEntityAIController.remove(ent);
    Network.sendToAllClients("dc.entity_remove", {ent: ent});
});
Callback.addCallback("LevelLeft", function () {
    ServerEntityAIController.clear();
});
Callback.addCallback("LocalLevelLeft", function () {
    ClientEntityAIController.clear();
});
Callback.addCallback("LocalTick", function () {
    ClientEntityAIController.eventAll("onLocalTick", []);
});
Callback.addCallback("tick", function () {
    ServerEntityAIController.eventAll("onTick", []);
});
Callback.addCallback("EntityHurt", function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
    ServerEntityAIController.event(victim, "onHurt", [attacker, damageValue, damageType, someBool1, someBool2]);
});
Callback.addCallback("EntityInteract", function (entity, player, coords) {
    ServerEntityAIController.event(entity, "onInteract", [player, coords]);
});
Callback.addCallback("EntityDeath", function (entity, attacker, damageType) {
    ServerEntityAIController.event(entity, "onDeath", [attacker, damageType]);
});
function OneMobSpawnObject(mob) {
    this.spawn = function (coords, region) {
        region.spawnEntity(coords.x, coords.y, coords.z, mob);
    };
}
function SpawnConditionBase(min, max, dimension, chance, obj) {
    this.getCoordsSpawn = function (coords, region, dim) {
        if (dimension != dim || Math.random() > chance) {
            return null;
        }
        let x = coords.x;
        let z = coords.z;
        for (let y = min; y < max; y++) {
            if (region.getBlockId(x, y, z) != 0 && region.getBlockId(x, y + 1, z) == 0) {
                return {x: x, y: y + 1, z: z};
            }
        }
        return null;
    };
    this.getSpawnObject = function () {
        return obj;
    };
}
function RandomXZ(pos, offset, zone) {
    let zoneSpawned = (zone * 2 + offset * 2) * 2;
    let minus = zoneSpawned / 2;
    this.next = function () {
        let x = Random.nextInt(zoneSpawned) - minus, z = Random.nextInt(zoneSpawned) - minus;
        if (Math.abs(x) <= offset || Math.abs(z) <= offset) {
            return this.next(pos, offset, zone);
        }
        return {x: pos.x + x, z: pos.z + z};
    };
}
const EntityWorldSpawner = {offset: Number(__config__.getInteger("game.mob_spawn_offset")), zone: Number(__config__.getInteger("game.mob_zone_spawn")), registered: [], register(condition) {
    this.registered.push(condition);
}, tickSpawn(pos, dimension, offset, zone) {
    let xz = new RandomXZ(pos, offset, zone);
    let region = BlockSource.getDefaultForDimension(dimension);
    for (let i in this.registered) {
        let register = this.registered[i];
        let coords = xz.next();
        coords = register.getCoordsSpawn(coords, region, dimension);
        if (coords === null) {
            continue;
        }
        let objSpawn = register.getSpawnObject(coords, region, dimension);
        if (objSpawn === null) {
            continue;
        }
        objSpawn.spawn(coords, region, dimension);
    }
}};
Callback.addCallback("tick", function () {
    let players = Network.getConnectedPlayers();
    let whiteList = [];
    let radius = EntityWorldSpawner.offset + EntityWorldSpawner.zone;
    for (let i in players) {
        let player1 = players[i];
        let dimension = Entity.getDimension(player1);
        let result = true;
        for (let i in players) {
            let player2 = players[i];
            if ((player1 != player2 && dimension == Entity.getDimension(player2)) || Entity.getDistanceToEntity(player1, player2) < radius) {
                result = false;
                break;
            }
        }
        if (result) {
            whiteList.push(player1);
        }
    }
    for (let i in whiteList) {
        let player = whiteList[i];
        EntityWorldSpawner.tickSpawn(Entity.getPosition(player), Entity.getDimension(player), EntityWorldSpawner.offset, EntityWorldSpawner.zone);
    }
});
EntityWorldSpawner.register(new SpawnConditionBase(50, 64, 0, 1 / 200, new OneMobSpawnObject("dungeoncraft:mummy")));

