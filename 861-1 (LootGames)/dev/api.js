IMPORT("SoundLib");
const PUZZLEROOM_CENTER_TO_BORDER = 10;
const PUZZLEROOM_HEIGHT = 8;
const PUZZLEROOM_SURFACE_DISTANCE = 2;
const PUZZLEROOM_MASTER_TE_OFFSET = 2;
let LootTable = WRAP_NATIVE("LootTablesModule");
LootTable.generate = function (blockSource, x, y, z, tableName) {
    LootTable.generateAt({bsptr: blockSource.getPointer(), x: x, y: y, z: z, name: tableName, uuid: Player.get()});
};
Network.addClientPacket("lg.particle", function (packetData) {
    Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
});
Network.addClientPacket("lg.message", function (packetData) {
    Game.message(packetData);
});
Network.addClientPacket("lg.tip_message", function (packetData) {
    Game.tipMessage(packetData);
});
function stringToNumberInArr(arr) {
    for (let i in arr) {
        arr[i] = Number(arr[i]);
    }
    return arr;
}
var Mp = {message: function (player, text) {
    var client = Network.getClientForPlayer(player);
    if (client != null) {
        client.send("lg.message", text);
    } else {
        Debug.message("[Errorror] player: " + player);
    }
}, tipMessage: function (player, text) {
    var client = Network.getClientForPlayer(player);
    if (client != null) {
        client.send("lg.tip_message", text);
    } else {
        Debug.message("[error]message player - " + player);
    }
}, spawnParticle: function (type, x, y, z, vx, vy, vz, ax, ay, az) {
    vx = vx || 0;
    vy = vy || 0;
    vz = vz || 0;
    ax = ax || 0;
    ay = ay || 0;
    az = az || 0;
    var players = Network.getConnectedPlayers();
    for (var i in players) {
        var client = Network.getClientForPlayer(players[i]);
        if (client) {
            client.send("lg.particle", {p: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
        } else {
            Debug.message("[error]spawn particle");
        }
    }
}};
const AROUND_COORDS = [[1, 0], [1, 1], [0, 1], [-1, -1], [-1, 0], [1, -1], [0, -1], [-1, 1]];
function randomInt(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
const setTimeout = function (func, ticks) {
    var upd = {ticks: 0, update: function () {
        this.ticks++;
        if (this.ticks >= ticks) {
            func();
            this.remove = true;
        }
    }};
    Updatable.addUpdatable(upd);
};
function createBlock(name, dats, prot) {
    let nameTexture = name.replace(/\s/g, "_").toLowerCase();
    let subStr = name.split(" ");
    subStr[0] = "lg" + subStr[0].toLowerCase();
    let nameId = subStr.join("");
    let variations = [];
    for (let data = 0; data <= dats; data++) {
        variations[data] = {name: name, texture: [[nameTexture, data]], inCreative: true};
    }
    IDRegistry.genBlockID(nameId);
    Block.createBlock(nameId, variations, prot);
}
function setStructure(coords, region) {
    let x = coords.x;
    let y = coords.y;
    let z = coords.z;
    for (let rx = 0; rx <= PUZZLEROOM_CENTER_TO_BORDER * 2 + 1; rx++) {
        for (let ry = 0; ry <= PUZZLEROOM_HEIGHT; ry++) {
            for (let rz = 0; rz <= PUZZLEROOM_CENTER_TO_BORDER * 2 + 1; rz++) {
                let xx = coords.x + rx;
                let yy = coords.y + ry;
                let zz = coords.z + rz;
                if (ry == 0 && rx > 0 && rx < 21 && rz > 0 && rz < 21) {
                    region.setBlock(xx, yy, zz, BlockID.lgdungeonFloorShielded);
                } else {
                    if (ry !== 3 && (rz == 21 || rz == 0 || rx == 21 || rx == 0)) {
                        region.setBlock(xx, yy, zz, Math.random() > 0.1 ? BlockID.lgdungeonWall : BlockID.lgdungeonWallCracked);
                    } else {
                        if (ry == 8 && rx < 21 && rx > 0 && rz < 21 && rz > 0) {
                            region.setBlock(xx, yy, zz, Math.random() > 0.1 ? BlockID.lgdungeonCeiling : BlockID.lgdungeonCeilingCracked);
                        } else {
                            if (ry == 3 && (rx == 0 || rx == 21 || rz == 0 || rz == 21)) {
                                region.setBlock(xx, yy, zz, Math.random() > 0.1 ? BlockID.lgdungeonLamp : BlockID.lgdungeonLampCracked);
                            } else {
                                region.setBlock(xx, yy, zz, 0);
                            }
                        }
                    }
                }
            }
        }
    }
    region.setBlock(x + 11, y + PUZZLEROOM_MASTER_TE_OFFSET, z + 11, BlockID.lgpuzzleMaster);
    World.addTileEntity(x + 11, y + PUZZLEROOM_MASTER_TE_OFFSET, z + 11, region);
}
function canSpawn(chunkX, chunkZ, rand, seed) {
    let canSpawn = false;
    let rhombSize = 20;
    let xc = (chunkX * 2) + chunkZ;
    let zc = (chunkZ * 2) + chunkX;
    rand.setSeed(seed + (xc / (rhombSize * 2)) + ((zc / (rhombSize * 2)) << 14));
    let pos1 = 3 + rand.nextInt(rhombSize * 2 - 3);
    let pos2 = 3 + rand.nextInt(rhombSize * 2 - 3);
    let modXC = xc % rhombSize * 2;
    let modZC = zc % rhombSize * 2;
    if (modXC >= 3 && modZC >= 3) {
        if ((modXC == pos1 && modZC == pos2) || (modXC == pos1 + 1 && (modZC == pos2 || modZC == pos2 + 1))) {
            canSpawn = true;
        }
    }
    return canSpawn;
}
Callback.addCallback("GenerateChunk", function (cX, cZ, random, dimensionId, chunkSeed, worldSeed) {
    if (dimensionId == 0 && canSpawn(cX, cZ, random, worldSeed)) {
        setStructure(GenerationUtils.randomCoords(cX, cZ, 5, 40), BlockSource.getCurrentWorldGenRegion());
    }
});
createBlock("Dungeon Ceiling", 0, {lightopacity: 15, explosionres: 10});
createBlock("Dungeon Ceiling Cracked", 0, {lightopacity: 15, explosionres: 10});
createBlock("Dungeon Floor", 0, {lightopacity: 15, explosionres: 10});
createBlock("Dungeon Floor Cracked", 0, {lightopacity: 15, explosionres: 10});
createBlock("Dungeon Floor Shielded", 0, {lightopacity: 15, explosionres: 10});
createBlock("Dungeon Lamp", 0, {lightlevel: 15, lightopacity: 15, explosionres: 10});
createBlock("Dungeon Lamp Cracked", 0, {lightopacity: 15, explosionres: 10});
createBlock("Dungeon Wall", 0, {lightopacity: 15, explosionres: 10});
createBlock("Dungeon Wall Cracked", 0, {lightopacity: 15, explosionres: 10});
createBlock("Puzzle Master", 0, {lightopacity: 15});
createBlock("Active", 8, {lightopacity: 15, lightlevel: 15});
createBlock("Inactive", 8, {lightopacity: 15, lightlevel: 15});
createBlock("Mine", 1, {lightlevel: 15, lightopacity: 15, explosionres: 10});
createBlock("Num", 8, {lightlevel: 15, lightopacity: 15, explosionres: 10});
createBlock("Game Plate", 2, {lightlevel: 15, lightopacity: 15, explosionres: 10});
createBlock("Ms Activator", 0, {lightlevel: 15, lightopacity: 15});
SoundManager.init(16);
SoundManager.setResourcePath(__dir__ + "res/sounds/");
SoundManager.registerSound("gl:gameover_loose", "gameoflight/gameover_loose.ogg", false);
SoundManager.registerSound("gl:gameover_win", "gameoflight/gameover_win.ogg", false);
SoundManager.registerSound("gl:start_game", "gameoflight/game_start.ogg", false);
SoundManager.registerSound("gl:sequence_complete", "gameoflight/sequence_complete.ogg", false);
SoundManager.registerSound("gl:sequence_wrong", "gameoflight/sequence_wrong.ogg", false);
SoundManager.registerSound("ms:bomb_activated", "minesweeper/bomb_activated.ogg", false);
SoundManager.registerSound("ms:on_empty_reveal_neighbours", "minesweeper/on_empty_reveal_neighbours.ogg", false);
SoundManager.registerSound("ms:start_game", "minesweeper/start_game.ogg", false);
SoundManager.registerSound("ms:click", "minesweeper/click.ogg", false);
SoundManager.registerSound("strange_1", "strange_001.ogg", false);
SoundManager.registerSound("strange_2", "strange_002.ogg", false);
SoundManager.registerSound("strange_3", "strange_003.ogg", false);
SoundManager.registerSound("strange_4", "strange_004.ogg", false);
SoundManager.registerSound("strange_5", "strange_005.ogg", false);
TileEntity.registerPrototype(BlockID.lgpuzzleMaster, {tick() {
    Mp.spawnParticle(38, (this.x - 1) + (Math.random() * 3), (this.y - 1) + (Math.random() * 3), (this.z - 1) + (Math.random() * 3), 0, 0, 0);
    if (World.getThreadTime() % 200 == 0) {
        SoundManager.playSoundAtBlock(this, "strange_" + randomInt(1, 5), 1, 25);
    }
}, click() {
    let BS = this.blockSource;
    BS.destroyBlock(this.x, this.y, this.z);
    BS.setBlock(this.x, this.y - 2, this.z, BlockID.lgmsActivator, 0);
}});
function Stage(boardSize, bombCount, lootTable) {
    this.boardSize = boardSize;
    this.bombCount = bombCount;
    this.lootTable = lootTable;
}
let stage1 = new Stage(13, 20, "loot_tables/chests/simple_dungeon.json");
let stage2 = new Stage(15, 30, "loot_tables/chests/desert_pyramid.json");
let stage3 = new Stage(17, 42, "loot_tables/chests/nether_bridge.json");
let stage4 = new Stage(19, 68, "loot_tables/chests/end_city_treasure.json");
function getStage(index) {
    switch (index) {
      case 1:
        return stage1;
        break;
      case 2:
        return stage2;
        break;
      case 3:
        return stage3;
        break;
      case 4:
        return stage4;
        break;
    }
}
function getDistance(x, y, z, x2, y2, z2) {
    x -= x2;
    y -= y2;
    z -= z2;
    return Math.abs(Math.sqrt(x * x + y * y + z * z));
}
function MSGame(blockSource, x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.blockSource = blockSource;
    this.mines = [];
    this.tier = 1;
    this.fieldCount = 0;
    this.attempts = 3;
    this.updateStage = function () {
        this.stage = getStage(this.tier);
    };
    this.updateStage();
    this.levelUp = function () {
        World.playSound(this.x, this.y, this.z, "random.levelup", 1, 1);
        this.tier++;
        this.updateStage();
    };
    this.loadBoard = function () {
        this.gameStopped = true;
        this.fieldCount = 0;
        this.mines = [];
        let boardSize = this.stage.boardSize / 2;
        let floorSize = Math.ceil(boardSize);
        for (let x = -floorSize; x <= floorSize; x++) {
            for (let z = -floorSize; z <= floorSize; z++) {
                TileEntity.destroyTileEntityAtCoords(this.x + x, this.y, this.z + z, this.blockSource);
                this.blockSource.setBlock(this.x + x, this.y, this.z + z, BlockID.lggamePlate, 0);
                let tile = World.addTileEntity(this.x + x, this.y, this.z + z, this.blockSource);
                if (tile) {
                    tile.core = this;
                }
                this.fieldCount++;
            }
        }
        let mineCount = 0;
        while (mineCount < this.stage.bombCount) {
            let x = randomInt(-floorSize, floorSize);
            let z = randomInt(-floorSize, floorSize);
            let tile = World.getTileEntity(this.x + x, this.y, this.z + z, this.blockSource);
            if (tile && !tile.data.isMine) {
                tile.data.isMine = true;
                this.mines.push({x: this.x + x, y: this.y, z: this.z + z});
                mineCount++;
                this.fieldCount--;
                for (let xx = -1; xx <= 1; xx++) {
                    for (let zz = -1; zz <= 1; zz++) {
                        let tile2 = World.getTileEntity(this.x + x + xx, this.y, this.z + z + zz, this.blockSource);
                        if (tile2 && !tile2.data.isMine) {
                            if (!tile2.data.number) {
                                tile2.data.number = 0;
                            }
                            tile2.data.number++;
                        }
                    }
                }
            }
        }
        this.gameStopped = false;
    };
    this.prepareAwards = function () {
        let lootTier = 0;
        for (let i in AROUND_COORDS) {
            let x = this.x + AROUND_COORDS[i][0];
            let z = this.z + AROUND_COORDS[i][1];
            let y = this.y + 1;
            if (i % 2) {
                this.blockSource.setBlock(x, y, z, BlockID.lgdungeonLamp);
            } else {
                lootTier++;
                this.blockSource.setBlock(x, y, z, VanillaBlockID.chest);
                if (lootTier <= this.tier) {
                    LootTable.generate(this.blockSource, x, y, z, getStage(lootTier).lootTable);
                }
            }
        }
    };
    this.replaceFloor = function (id, id2) {
        for (let x = 1; x <= 21; x++) {
            for (let z = 1; z <= 21; z++) {
                this.blockSource.setBlock(this.x - 11 + x, this.y, this.z - 11 + z, Math.random() > 0.1 ? id : id2 || id);
            }
        }
    };
    this.updateFlag = function (coords, flag) {
        this.blockSource.setBlock(coords.x, coords.y, coords.z, BlockID.lggamePlate, flag);
    };
    this.gameOver = function (coords) {
        this.gameStopped = true;
        let that = this;
        SoundManager.playSoundAtBlock(this, "ms:bomb_activated", 1, 25);
        let boardSize = this.stage.boardSize / 2;
        let floorSize = Math.floor(boardSize);
        for (let i in this.mines) {
            let mine = this.mines[i];
            let dist = getDistance(coords.x, coords.y, coords.z, mine.x, mine.y, mine.z);
            setTimeout(function () {
                that.blockSource.setBlock(mine.x, mine.y, mine.z, BlockID.lgmine, 1);
            }, dist * 4);
        }
        for (let i = 0; i < 15; i++) {
            setTimeout(function () {
                let x = randomInt(-floorSize, floorSize);
                let z = randomInt(-floorSize, floorSize);
                for (let j = 0; j < 7; j++) {
                    setTimeout(function () {
                        Mp.spawnParticle(15, that.x + x + (Math.random() * 2) - 1, that.y + Math.random() * 2, that.z + z + (Math.random() * 2) - 1);
                    }, j);
                    World.playSound(that.x + x, that.y + 1, that.z + z, "random.explode", 4, 1);
                }
            }, i * 7 + 100);
        }
        if (this.attempts > 1) {
            this.attempts--;
            Game.message("\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0435\u0449\u0451 " + this.attempts + " \u043f\u043e\u043f\u044b\u0442\u043a\u0438");
            setTimeout(function () {
                that.loadBoard();
            }, 200);
        } else {
            Game.message("\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438");
            setTimeout(function () {
                if (that.tier == 1) {
                    that.replaceFloor(0);
                } else {
                    that.replaceFloor(BlockID.lgdungeonFloor, BlockID.lgdungeonFloorCracked);
                }
                that.prepareAwards();
            }, 200);
        }
    };
    this.win = function (coords) {
        this.gameStopped = true;
        let that = this;
        for (let i in this.mines) {
            let mine = this.mines[i];
            let dist = getDistance(coords.x, coords.y, coords.z, mine.x, mine.y, mine.z);
            setTimeout(function () {
                for (let j = 0; j < 5; j++) {
                    Mp.spawnParticle(EParticleType.HAPPY_VILLAGER, mine.x + Math.random(), mine.y + Math.random() * 2, mine.z + Math.random(), (Math.random() - 0.5) / 3, Math.random() / 6, (Math.random() - 0.5) / 3);
                }
                that.blockSource.setBlock(mine.x, mine.y, mine.z, BlockID.lgmine, 0);
            }, dist * 4);
        }
        setTimeout(function () {
            that.levelUp();
            if (that.tier < 5) {
                that.loadBoard();
            } else {
                that.replaceFloor(BlockID.lgdungeonFloor, BlockID.lgdungeonFloorCracked);
                that.prepareAwards();
            }
        }, 100);
    };
    this.click = function (tile, coords, player) {
        if (this.gameStopped) {
            return;
        }
        if (Entity.getSneaking(player)) {
            if (!tile.data.flag) {
                tile.data.flag = 0;
            }
            tile.data.flag++;
            if (tile.data.flag > 2) {
                tile.data.flag = 0;
            }
            this.updateFlag(coords, tile.data.flag);
        } else {
            if (!tile.data.flag) {
                if (tile.data.isMine) {
                    this.gameOver(coords);
                } else {
                    if (this.fieldCount <= 1) {
                        this.win(coords);
                    }
                    let data = tile.data.number || 0;
                    this.fieldCount--;
                    this.blockSource.setBlock(coords.x, coords.y, coords.z, BlockID.lgnum, data);
                    if (data == 0) {
                        SoundManager.playSoundAtBlock(coords, "ms:on_empty_reveal_neighbours", 1, 25);
                        tile.updateAround();
                    } else {
                        SoundManager.playSoundAtBlock(coords, "ms:click", 1, 25);
                    }
                }
            }
        }
    };
    this.loadBoard();
}
TileEntity.registerPrototype(BlockID.lggamePlate, {click(id, count, data, coords, player) {
    if (this.core) {
        this.core.click(this, coords, player);
    }
}, updateAround() {
    if (!this.core || (this.core && this.core.gameStopped) || !this.blockSource) {
        return;
    }
    for (let x = -1; x <= 1; x++) {
        for (let z = -1; z <= 1; z++) {
            if (this.blockSource.getBlockId(this.x + x, this.y, this.z + z) == BlockID.lgnum) {
                continue;
            }
            let tile = World.getTileEntity(this.x + x, this.y, this.z + z, this.blockSource);
            if (tile && !tile.data.isMine) {
                let data = tile.data.number || 0;
                this.core.fieldCount--;
                this.blockSource.setBlock(this.x + x, this.y, this.z + z, BlockID.lgnum, data);
                if (data == 0) {
                    tile.updateAround();
                }
            }
        }
    }
}});
function GameOfLight(blockSource, x, y, z) {
    this.blockSource = blockSource;
    this.x = x;
    this.y = y;
    this.z = z;
    this.colorPos = {"0:1": 2, "1:0": 4, "1:1": 3, "0:0": 0, "-1:0": 8, "0:-1": 0, "-1:-1": 7, "-1: 1": 1, "1:-1": 0};
    this.loadBoard = function () {
        for (let i in this.colorPos) {
            let coords = stringToNumberInArr(i.split(":"));
            this.blockSource.setBlock(this.x + coords[0], this.y, this.z + coords[1], BlockID.lginactive, this.colorPos[i]);
        }
    };
    this.click = function (tile, coords, player) {
        Game.message(this.colorPos[coords.x - this.x + ":" + (coords.z - this.z)]);
    };
    this.loadBoard();
}
TileEntity.registerPrototype(BlockID.lgmsActivator, {click() {
    TileEntity.destroyTileEntity(this);
    SoundManager.playSoundAtBlock(this, "ms:start_game", 1, 25);
    new MSGame(this.blockSource, this.x, this.y, this.z);
}});
TileEntity.registerPrototype(BlockID.lginactive, {click() {
    if (!this.core) {
        this.core = new GameOfLight(this.blockSource, this.x, this.y, this.z);
    } else {
        this.core.click(this, coords, player);
    }
}});

