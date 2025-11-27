TileEntity.registerPrototype(VanillaBlockID.netherreactor, {data: {initialized: false, phase: 0, progress: 0, difficulty: 0, finished: false}, init: function () {
    if (this.data.spawnEnemyLimit === undefined || this.data.patternBlockId === undefined || this.data.spiteBlockId === undefined) {
        this.data.spawnEnemyLimit = NetherSpire.spawnEnemyLimit;
        if (NetherSpire.obsidianSpire) {
            this.data.patternBlockId = VanillaBlockID.iron_block;
            this.data.spiteBlockId = VanillaBlockID.obsidian;
        } else {
            this.data.patternBlockId = VanillaBlockID.cobblestone;
            this.data.spiteBlockId = VanillaBlockID.netherrack;
        }
    }
}, checkPattern: function () {
    for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
            for (let z = -1; z < 2; z++) {
                if (x == 0 && y == 0 && z == 0) {
                    continue;
                }
                let id = this.blockSource.getBlockId(this.x + x, this.y + y, this.z + z);
                if (x * z == 0) {
                    if (id != (y != 0 ? this.data.patternBlockId : 0)) {
                        return false;
                    }
                } else {
                    if ((y == -1 && id != VanillaBlockID.gold_block) || (y == 0 && id != this.data.patternBlockId) || (y == 1 && id != 0)) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}, checkPlayers: function () {
    let players = this.blockSource.fetchEntitiesInAABB(this.x - 16, this.y - 8, this.z - 16, this.x + 16, this.y + 40, this.z + 16, EEntityType.PLAYER);
    for (let i = 0, l = players.length; i < l; i++) {
        let dz = Entity.getPosition(players[i]);
        dz.x -= this.x;
        dz.y -= this.y;
        dz.z -= this.z;
        if (this.data.phase == 0) {
            if (dz.x < -7 || dz.x > 7 || dz.y < -1 || dz.y > 2 || dz.z < -7 || dz.z > 7) {
                return false;
            }
        } else {
            if (dz.x < -8 || dz.x > 8 || dz.y < -2 || dz.y > 3 || dz.z < -8 || dz.z > 8) {
                return false;
            }
        }
    }
    return true;
}, checkRespawn: function (stage) {
    return stage != 10 && stage != 13 && stage != 20 && stage != 22 && stage != 25 && stage != 30 && stage != 34 && stage != 36 && stage != 38;
}, turnGlowingObsidian: function (stage) {
    let y, id;
    if (stage >= 2 && stage <= 4) {
        y = stage - 3;
        id = this.data.patternBlockId;
    } else {
        if (stage >= 7 && stage <= 9) {
            y = stage - 8;
            id = VanillaBlockID.gold_block;
        } else {
            return;
        }
    }
    for (let x = -1; x < 2; x++) {
        for (let z = -1; z < 2; z++) {
            if (x == 0 && y == 0 && z == 0) {
                continue;
            }
            if (this.blockSource.getBlockId(this.x + x, this.y + y, this.z + z) == id) {
                this.blockSource.setBlock(this.x + x, this.y + y, this.z + z, VanillaBlockID.glowingobsidian);
            }
        }
    }
}, turnObsidian: function (stage) {
    if (stage < 0 || stage > 2) {
        return;
    }
    let y = stage - 1;
    for (let x = -1; x < 2; x++) {
        for (let z = -1; z < 2; z++) {
            if (x == 0 && y == 0 && z == 0) {
                continue;
            }
            this.blockSource.setBlock(this.x + x, this.y + y, this.z + z, VanillaBlockID.obsidian);
        }
    }
}, buildDome: function () {
    this.buildFloorVolume(this.data.spiteBlockId, 0, -3, 0, 8, 2);
    this.buildHollowedVolume(this.data.spiteBlockId, 0, -1, 0, 8, 4);
    this.buildFloorVolume(this.data.spiteBlockId, 0, 3, 0, 8, 1);
    this.buildCrockedRoofVolume(this.data.spiteBlockId, false, 0, 4, 0, 8, 1);
    this.buildCrockedRoofVolume(this.data.spiteBlockId, true, 0, 5, 0, 5, 8);
    this.buildCrockedRoofVolume(this.data.spiteBlockId, false, 0, 11, 0, 3, 14);
}, deteriorateDome: function (integrity) {
    integrity = integrity || 0.33;
    this.buildHollowedVolume(0, 0, -1, 0, 8, 4, integrity);
    this.buildFloorVolume(0, 0, 3, 0, 8, 1, integrity);
    this.buildCrockedRoofVolume(0, false, 0, 4, 0, 8, 1, integrity);
    this.buildCrockedRoofVolume(0, true, 0, 5, 0, 5, 8, integrity);
    this.buildCrockedRoofVolume(0, false, 0, 11, 0, 3, 14, integrity);
}, buildFloorVolume: function (id, x, y, z, radius, height, integrity) {
    integrity = integrity || 1;
    for (let dy = 0; dy < height; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
            for (let dz = -radius; dz <= radius; dz++) {
                if (integrity == 1 || Math.random() < integrity) {
                    this.blockSource.setBlock(this.x + x + dx, this.y + y + dy, this.z + z + dz, id);
                }
            }
        }
    }
}, buildHollowedVolume: function (id, x, y, z, radius, height, integrity) {
    integrity = integrity || 1;
    for (let dy = 0; dy < height; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
            for (let dz = -radius; dz <= radius; dz++) {
                if ((dy > 2 || dx < -1 || dx > 1 || dz < -1 || dz > 1) && (integrity == 1 || Math.random() < integrity)) {
                    if (dx == -radius || dx == radius || dz == -radius || dz == radius) {
                        this.blockSource.setBlock(this.x + x + dx, this.y + y + dy, this.z + z + dz, id);
                    } else {
                        if (id != 0) {
                            this.blockSource.setBlock(this.x + x + dx, this.y + y + dy, this.z + z + dz, 0);
                        }
                    }
                }
            }
        }
    }
}, buildCrockedRoofVolume: function (id, forth, x, y, z, radius, length, integrity) {
    integrity = integrity || 1;
    let offset = radius + 1;
    if (-radius != offset) {
        let depth = length + radius;
        let dx = -radius;
        let ox = 2 * radius;
        let oy = depth + radius;
        let dy = 0, dd = 0, oz, dz;
        do {
            oz = ox;
            dz = -radius;
            do {
                dd = oz / 2;
                if (!forth) {
                    dd = (dx + dz) / 2;
                }
                if (oy) {
                    let sy = depth + dd;
                    for (let fy = 0; fy < oy; ++fy) {
                        while (true) {
                            if (sy >= fy) {
                                dy = fy + y;
                                if (sy == fy || -radius == dx || dx == radius || -radius == dz || radius == dz) {
                                    break;
                                }
                            }
                            if (++fy == oy) {
                                break;
                            }
                        }
                        if (integrity == 1 || Math.random() < integrity) {
                            this.blockSource.setBlock(this.x + x + dx, this.y + dy, this.z + z + dz, id);
                        }
                    }
                }
                ++dz;
                --oz;
            } while (offset != dz);
            ++dx;
            --ox;
        } while (offset != dx);
    }
}, numOfFreeEnemySlots: function () {
    let entities = this.blockSource.fetchEntitiesInAABB(this.x - 8, this.y - 2, this.z - 8, this.x + 8, this.y + 2, this.z + 8);
    let count = 0;
    for (let type, i = 0, l = entities.length; i < l; i++) {
        if (NetherSpire.entities.indexOf(Entity.getType(entities[i])) != -1) {
            count++;
        }
    }
    return this.data.spawnEnemyLimit - count;
}, despawnEnemies: function () {
    let entities = this.blockSource.fetchEntitiesInAABB(this.x - 8, this.y - 2, this.z - 8, this.x + 8, this.y + 2, this.z + 8);
    for (let i = 0, l = entities.length; i < l; i++) {
        if (NetherSpire.entities.indexOf(Entity.getType(entities[i])) != -1) {
            Entity.remove(entities[i]);
        }
    }
}, spawnItems: function (difficulty) {
    let count = !difficulty ? 9 : difficulty <= 3 ? 15 : 0;
    if (count == 0) {
        let random = Math.random();
        if (difficulty > 7) {
            random = random * 27 - 2;
        } else {
            random = random * 42 - 4;
        }
        count = random & ~(random >> 31);
    }
    if (count > 0) {
        let entities = [];
        for (let i = 0; i < count; i++) {
            let item = NetherSpire.items[Math.floor(Math.random() * NetherSpire.items.length)];
            let offset = NetherSpire.randomPointInAnnulus(3, 7);
            entities.push(this.blockSource.spawnDroppedItem(this.x + offset.x + 0.5, this.y - 1, this.z + offset.z + 0.5, item[0], item[1], item[2], item[3]));
        }
        Updatable.addUpdatable({ticks: 400, update: function () {
            if (--this.ticks > 0) {
                return;
            }
            this.remove = true;
            for (let i = 0, l = entities.length; i < l; i++) {
                Entity.remove(entities[i]);
            }
        }});
    }
}, spawnAvailableEnemies: function (count) {
    count = Math.min(this.numOfFreeEnemySlots(), count);
    for (let i = 0; i < count; i++) {
        let entity = NetherSpire.entities[Math.floor(Math.random() * NetherSpire.entities.length)];
        let offset = NetherSpire.randomPointInAnnulus(3, 7);
        this.blockSource.spawnEntity(this.x + offset.x + 0.5, this.y - 1, this.z + offset.z + 0.5, entity);
    }
}, spawnEntities: function (difficulty) {
    let count = !difficulty ? 3 : difficulty <= 3 ? 2 : 0;
    if (count == 0 && difficulty <= 5) {
        count = Math.round(Math.random());
    }
    if (count != 0) {
        this.spawnAvailableEnemies(count);
    }
}, load: function () {
    let meta = this.blockSource.getBlockData(this.x, this.y, this.z);
    if (meta != this.data.phase) {
        switch (meta) {
          case 0:
            this.reset(true);
            break;
          case 1:
            this.activate(true);
            break;
          case 2:
            this.finish(true);
            break;
          default:
            TileEntity.destroyTileEntity(this);
        }
    }
}, reset: function (withoutReplacement) {
    if (!withoutReplacement) {
        this.blockSource.setBlock(this.x, this.y, this.z, this.blockID, 0);
    }
    this.data.initialized = false;
    this.data.progress = 0;
    this.data.difficulty = 0;
    this.data.phase = 0;
    this.data.finished = false;
}, tick: function () {
    if (this.data.phase == 1) {
        this.data.progress++;
        if (this.data.progress % 20 == 0) {
            let stage = this.data.progress / 20;
            if (stage > 0 && stage < 10) {
                this.turnGlowingObsidian(stage);
            } else {
                if (stage >= 43 && stage <= 45) {
                    this.turnObsidian(45 - stage);
                    if (NetherSpire.animatedDeteriorate) {
                        this.deteriorateDome(0.11);
                    }
                } else {
                    if (stage > 10 && stage < 43) {
                        if (NetherSpire.ignoreLeavedPlayers || this.checkPlayers()) {
                            if (this.checkRespawn(stage)) {
                                this.spawnItems(this.data.difficulty);
                                this.spawnEntities(this.data.difficulty);
                                this.data.difficulty++;
                            } else {
                                this.spawnAvailableEnemies(1);
                            }
                        } else {
                            this.despawnEnemies();
                        }
                    }
                }
            }
        }
        if (this.data.progress >= 922) {
            this.finish();
        }
    }
}, activate: function (withoutReplacement) {
    if (!withoutReplacement) {
        this.blockSource.setBlock(this.x, this.y, this.z, this.blockID, 1);
    }
    if (!this.data.initialized) {
        this.buildDome();
        if (this.dimension == EDimension.OVERWORLD) {
            World.setNightMode(true);
        }
    }
    this.data.initialized = true;
    this.data.phase = 1;
}, click: function (id, count, data, coords, playerUid, extra) {
    if (this.data.initialized || this.data.finished || Entity.getSneaking(playerUid) || this.blockSource.getBlockData(this.x, this.y, this.z) != 0) {
        return false;
    }
    if (NetherSpire.dimensions.length != 0 && NetherSpire.dimensions.indexOf(Entity.getDimension(playerUid)) == -1) {
        if (NetherSpire.dimensionalExplodes) {
            this.blockSource.explode(this.x + 0.5, this.y + 0.5, this.z + 0.5, 5, false);
        } else {
            clientMessage(playerUid, "howtoplay.eyeOfEnder.text.2", "Rumor has it that they can lead you to open another dimension.");
        }
        return true;
    }
    if (this.y > 224 || (this.dimension == EDimension.NETHER && this.y > 96 && this.y < 128)) {
        clientMessage(playerUid, "tile.netherreactor.builtTooHigh", "The nether reactor needs to be built lower down.");
        return true;
    }
    if (this.y < 8 || (this.dimension == EDimension.NETHER && this.y >= 128 && this.y < 131)) {
        clientMessage(playerUid, "tile.netherreactor.builtTooLow", "The nether reactor needs to be built higher up.");
        return true;
    }
    if (!this.checkPattern()) {
        if (id == this.data.patternBlockId) {
            return false;
        }
        clientMessage(playerUid, "tile.netherreactor.wrongPattern", "Not the correct pattern!");
        return true;
    }
    if (!this.checkPlayers()) {
        clientMessage(playerUid, "tile.netherreactor.playersTooFar", "All players need to be close to the reactor.");
        return true;
    }
    let players = this.blockSource.fetchEntitiesInAABB(this.x - 16, this.y - 8, this.z - 16, this.x + 16, this.y + 40, this.z + 16, EEntityType.PLAYER);
    for (let i = 0, l = players.length; i < l; i++) {
        clientMessage(players[i], "tile.netherreactor.active", "Active!");
    }
    if (players.indexOf(playerUid) == -1) {
        clientMessage(playerUid, "tile.netherreactor.active", "Active!");
    }
    this.activate();
    return true;
}, finish: function (withoutReplacement) {
    if (!withoutReplacement) {
        this.blockSource.setBlock(this.x, this.y, this.z, this.blockID, 2);
    }
    if (this.data.initialized && !this.data.finished) {
        if (!NetherSpire.animatedDeteriorate) {
            this.deteriorateDome();
        }
        if (this.dimension == EDimension.OVERWORLD) {
            World.setNightMode(false);
        }
    }
    this.data.finished = true;
    this.data.phase = 2;
}, destroy: function (fromDestroyBlock, isDropAllowed) {
    this.finish(true);
    return false;
}});

