var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) {
                    d[p] = b[p];
                }
            }
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) {
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        }
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
LIBRARY({name: "BlockEngine", version: 11, shared: true, api: "CoreEngine"});
var BlockEngine;
(function (BlockEngine) {
    var gameVersion = getMCPEVersion().array;
    function getGameVersion() {
        return gameVersion;
    }
    BlockEngine.getGameVersion = getGameVersion;
    function getMainGameVersion() {
        return gameVersion[1];
    }
    BlockEngine.getMainGameVersion = getMainGameVersion;
    function sendUnlocalizedMessage(client) {
        var texts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            texts[_i - 1] = arguments[_i];
        }
        client.send("blockengine.clientMessageOld", {texts: texts});
    }
    BlockEngine.sendUnlocalizedMessage = sendUnlocalizedMessage;
    function sendMessage(client, text) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        if (text[0] == "\xa7" && params.length > 0) {
            var message = params.shift();
            client.send("blockengine.clientMessage", {msg: message, color: text, params: params});
        } else {
            client.send("blockengine.clientMessage", {msg: text, params: params});
        }
    }
    BlockEngine.sendMessage = sendMessage;
})(BlockEngine || (BlockEngine = {}));
Network.addClientPacket("blockengine.clientMessageOld", function (data) {
    var message = data.texts.map(Translation.translate).join("");
    Game.message(message);
});
Network.addClientPacket("blockengine.clientMessage", function (data) {
    var message = (data.color || "") + Translation.translate(data.msg);
    data.params.forEach(function (substr) {
        message = message.replace("%s", Translation.translate(substr));
    });
    Game.message(message);
});
var BlockEngine;
(function (BlockEngine) {
    var Decorators;
    (function (Decorators) {
        function ClientSide(target, propertyName) {
            target.__clientMethods = __assign({}, target.__clientMethods);
            target.__clientMethods[propertyName] = true;
        }
        Decorators.ClientSide = ClientSide;
        function NetworkEvent(side) {
            return function (target, propertyName) {
                target.__networkEvents = __assign({}, target.__networkEvents);
                target.__networkEvents[propertyName] = side;
            };
        }
        Decorators.NetworkEvent = NetworkEvent;
        function ContainerEvent(side) {
            return function (target, propertyName) {
                target.__containerEvents = __assign({}, target.__containerEvents);
                target.__containerEvents[propertyName] = side;
            };
        }
        Decorators.ContainerEvent = ContainerEvent;
    })(Decorators = BlockEngine.Decorators || (BlockEngine.Decorators = {}));
})(BlockEngine || (BlockEngine = {}));
var Side;
(function (Side) {
    Side[Side["Client"] = 0] = "Client";
    Side[Side["Server"] = 1] = "Server";
})(Side || (Side = {}));
var ItemCategory;
(function (ItemCategory) {
    ItemCategory[ItemCategory["BUILDING"] = 1] = "BUILDING";
    ItemCategory[ItemCategory["NATURE"] = 2] = "NATURE";
    ItemCategory[ItemCategory["EQUIPMENT"] = 3] = "EQUIPMENT";
    ItemCategory[ItemCategory["ITEMS"] = 4] = "ITEMS";
})(ItemCategory || (ItemCategory = {}));
var EnumRarity;
(function (EnumRarity) {
    EnumRarity[EnumRarity["COMMON"] = 0] = "COMMON";
    EnumRarity[EnumRarity["UNCOMMON"] = 1] = "UNCOMMON";
    EnumRarity[EnumRarity["RARE"] = 2] = "RARE";
    EnumRarity[EnumRarity["EPIC"] = 3] = "EPIC";
})(EnumRarity || (EnumRarity = {}));
var MiningLevel;
(function (MiningLevel) {
    MiningLevel[MiningLevel["STONE"] = 1] = "STONE";
    MiningLevel[MiningLevel["IRON"] = 2] = "IRON";
    MiningLevel[MiningLevel["DIAMOND"] = 3] = "DIAMOND";
    MiningLevel[MiningLevel["OBSIDIAN"] = 4] = "OBSIDIAN";
})(MiningLevel || (MiningLevel = {}));
var Vector3 = (function () {
    function Vector3(vx, vy, vz) {
        if (typeof (vx) == "number") {
            this.x = vx;
            this.y = vy;
            this.z = vz;
        } else {
            var v = vx;
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
        }
    }
    Vector3.getDirection = function (side) {
        switch (side) {
          case 0:
            return this.DOWN;
          case 1:
            return this.UP;
          case 2:
            return this.NORTH;
          case 3:
            return this.SOUTH;
          case 4:
            return this.EAST;
          case 5:
            return this.WEST;
          default:
            Logger.Log("Invalid block side: " + side, "ERROR");
        }
    };
    Vector3.prototype.copy = function (dst) {
        if (dst) {
            return dst.set(this);
        }
        return new Vector3(this);
    };
    Vector3.prototype.set = function (vx, vy, vz) {
        if (typeof (vx) == "number") {
            this.x = vx;
            this.y = vy;
            this.z = vz;
            return this;
        }
        var v = vx;
        return this.set(v.x, v.y, v.z);
    };
    Vector3.prototype.add = function (vx, vy, vz) {
        if (typeof (vx) == "number") {
            this.x += vx;
            this.y += vy;
            this.z += vz;
            return this;
        }
        var v = vx;
        return this.add(v.x, v.y, v.z);
    };
    Vector3.prototype.addScaled = function (vector, scale) {
        return this.add(vector.x * scale, vector.y * scale, vector.z * scale);
    };
    Vector3.prototype.sub = function (vx, vy, vz) {
        if (typeof (vx) == "number") {
            this.x -= vx;
            this.y -= vy;
            this.z -= vz;
            return this;
        }
        var v = vx;
        return this.sub(v.x, v.y, v.z);
    };
    Vector3.prototype.cross = function (vx, vy, vz) {
        if (typeof (vx) == "number") {
            return this.set(this.y * vz - this.z * vy, this.z * vx - this.x * vz, this.x * vy - this.y * vx);
        }
        var v = vx;
        return this.cross(v.x, v.y, v.z);
    };
    Vector3.prototype.dot = function (vx, vy, vz) {
        if (typeof (vx) == "number") {
            return this.x * vx + this.y * vy + this.z * vz;
        }
        var v = vx;
        return this.dot(v.x, v.y, v.z);
    };
    Vector3.prototype.normalize = function () {
        var len = this.length();
        this.x /= len;
        this.y /= len;
        this.z /= len;
        return this;
    };
    Vector3.prototype.lengthSquared = function () {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    };
    Vector3.prototype.length = function () {
        return Math.sqrt(this.lengthSquared());
    };
    Vector3.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    };
    Vector3.prototype.distanceSquared = function (vx, vy, vz) {
        if (typeof (vx) == "number") {
            var dx = vx - this.x;
            var dy = vy - this.y;
            var dz = vz - this.z;
            return dx * dx + dy * dy + dz * dz;
        }
        var v = vx;
        return this.distanceSquared(v.x, v.y, v.z);
    };
    Vector3.prototype.distance = function (vx, vy, vz) {
        if (typeof (vx) == "number") {
            return Math.sqrt(this.distanceSquared(vx, vy, vz));
        }
        var v = vx;
        return this.distance(v.x, v.y, v.z);
    };
    Vector3.prototype.scale = function (factor) {
        this.x *= factor;
        this.y *= factor;
        this.z *= factor;
        return this;
    };
    Vector3.prototype.scaleTo = function (len) {
        var factor = len / this.length();
        return this.scale(factor);
    };
    Vector3.prototype.toString = function () {
        return "[ " + this.x + ", " + this.y + ", " + this.z + " ]";
    };
    Vector3.DOWN = new Vector3(0, -1, 0);
    Vector3.UP = new Vector3(0, 1, 0);
    Vector3.NORTH = new Vector3(0, 0, -1);
    Vector3.SOUTH = new Vector3(0, 0, 1);
    Vector3.EAST = new Vector3(-1, 0, 0);
    Vector3.WEST = new Vector3(1, 0, 0);
    return Vector3;
}());
EXPORT("Vector3", Vector3);
var WorldRegion = (function () {
    function WorldRegion(blockSource) {
        this.blockSource = blockSource;
        this.isDeprecated = BlockEngine.getMainGameVersion() < 16;
    }
    WorldRegion.getForDimension = function (dimension) {
        var blockSource = BlockSource.getDefaultForDimension(dimension);
        if (blockSource) {
            return new WorldRegion(blockSource);
        }
        return null;
    };
    WorldRegion.getForActor = function (entityUid) {
        var blockSource = BlockSource.getDefaultForActor(entityUid);
        if (blockSource) {
            return new WorldRegion(blockSource);
        }
        return null;
    };
    WorldRegion.getCurrentWorldGenRegion = function () {
        var blockSource = BlockSource.getCurrentWorldGenRegion();
        if (blockSource) {
            return new WorldRegion(blockSource);
        }
        return null;
    };
    WorldRegion.prototype.getDimension = function () {
        return this.blockSource.getDimension();
    };
    WorldRegion.prototype.getBlock = function (x, y, z) {
        if (typeof x === "number") {
            return this.blockSource.getBlock(x, y, z);
        }
        var pos = x;
        return this.blockSource.getBlock(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.getBlockId = function (x, y, z) {
        return this.getBlock(x, y, z).id;
    };
    WorldRegion.prototype.getBlockData = function (x, y, z) {
        return this.getBlock(x, y, z).data;
    };
    WorldRegion.prototype.setBlock = function (x, y, z, id, data) {
        if (typeof x === "number") {
            if (typeof id == "number") {
                this.blockSource.setBlock(x, y, z, id, data || 0);
            } else {
                this.blockSource.setBlock(x, y, z, id);
            }
        } else {
            var pos = x;
            if (typeof arguments[1] == "number") {
                this.blockSource.setBlock(pos.x, pos.y, pos.z, arguments[1], arguments[2] || 0);
            } else {
                this.blockSource.setBlock(pos.x, pos.y, pos.z, arguments[1]);
            }
        }
    };
    WorldRegion.prototype.getExtraBlock = function (x, y, z) {
        if (this.isDeprecated) {
            return {id: 0, data: 0};
        }
        if (typeof x === "number") {
            return this.blockSource.getExtraBlock(x, y, z);
        }
        var pos = x;
        return this.blockSource.getExtraBlock(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.setExtraBlock = function (x, y, z, id, data) {
        if (this.isDeprecated) {
            return;
        }
        if (typeof x === "number") {
            if (typeof id == "number") {
                this.blockSource.setExtraBlock(x, y, z, id, data || 0);
            } else {
                this.blockSource.setExtraBlock(x, y, z, id);
            }
        } else {
            var pos = x;
            if (typeof arguments[1] == "number") {
                this.blockSource.setExtraBlock(pos.x, pos.y, pos.z, arguments[1], arguments[2] || 0);
            } else {
                this.blockSource.setExtraBlock(pos.x, pos.y, pos.z, arguments[1]);
            }
        }
    };
    WorldRegion.prototype.destroyBlock = function (x, y, z, drop, player) {
        if (typeof x === "object") {
            var pos = x;
            return this.destroyBlock(pos.x, pos.y, pos.z, arguments[1], arguments[2]);
        }
        if (drop) {
            var block = this.getBlock(x, y, z);
            var item = player ? Entity.getCarriedItem(player) : new ItemStack();
            var result = Block.getBlockDropViaItem(block, item, new Vector3(x, y, z), this.blockSource);
            if (result) {
                for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                    var dropItem = result_1[_i];
                    this.dropItem(x + 0.5, y + 0.5, z + 0.5, dropItem[0], dropItem[1], dropItem[2], dropItem[3] || null);
                }
            }
            this.blockSource.destroyBlock(x, y, z, !result);
        } else {
            this.blockSource.destroyBlock(x, y, z, false);
        }
    };
    WorldRegion.prototype.breakBlock = function (x, y, z, allowDrop, entity, item) {
        if (this.isDeprecated) {
            this.destroyBlock(x, y, z, allowDrop, entity);
        } else {
            if (typeof x === "number") {
                this.blockSource.breakBlock(x, y, z, allowDrop, entity, item);
            } else {
                var pos = x;
                this.blockSource.breakBlock(pos.x, pos.y, pos.z, arguments[1], arguments[2], arguments[3]);
            }
        }
    };
    WorldRegion.prototype.breakBlockForResult = function (x, y, z, entity, item) {
        if (typeof x === "object") {
            var pos = x;
            return this.breakBlockForResult(pos.x, pos.y, pos.z, arguments[1], arguments[2]);
        }
        if (this.isDeprecated) {
            var block = this.blockSource.getBlock(x, y, z);
            this.blockSource.setBlock(x, y, z, 0, 0);
            var level = ToolAPI.getToolLevelViaBlock(item.id, block.id);
            var drop = BlockRegistry.getBlockDrop(x, y, z, block, level, item, this.blockSource);
            var items = [];
            if (drop) {
                for (var _i = 0, drop_1 = drop; _i < drop_1.length; _i++) {
                    var item_1 = drop_1[_i];
                    items.push(new ItemStack(item_1[0], item_1[1], item_1[2], item_1[3]));
                }
            }
            return {items: items, experience: 0};
        }
        return this.blockSource.breakBlockForJsResult(x, y, z, entity, item);
    };
    WorldRegion.prototype.getNativeTileEntity = function (x, y, z) {
        if (typeof x === "number") {
            return this.blockSource.getBlockEntity(x, y, z);
        }
        var pos = x;
        return this.blockSource.getBlockEntity(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.getTileEntity = function (x, y, z) {
        if (typeof x === "number") {
            var tileEntity = TileEntity.getTileEntity(x, y, z, this.blockSource);
            return (tileEntity && tileEntity.__initialized) ? tileEntity : null;
        }
        var pos = x;
        return this.getTileEntity(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.addTileEntity = function (x, y, z) {
        if (typeof x === "number") {
            return TileEntity.addTileEntity(x, y, z, this.blockSource);
        }
        var pos = x;
        return this.addTileEntity(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.removeTileEntity = function (x, y, z) {
        if (typeof x === "number") {
            return TileEntity.destroyTileEntityAtCoords(x, y, z, this.blockSource);
        }
        var pos = x;
        return this.removeTileEntity(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.getContainer = function (x, y, z) {
        if (typeof x === "number") {
            return World.getContainer(x, y, z, this.blockSource);
        }
        var pos = x;
        return this.getContainer(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.explode = function (x, y, z, power, fire) {
        if (typeof x === "number") {
            this.blockSource.explode(x, y, z, power, fire || false);
        } else {
            var pos = x;
            this.blockSource.explode(pos.x, pos.y, pos.z, arguments[1], arguments[2] || false);
        }
    };
    WorldRegion.prototype.getBiome = function (x, z) {
        return this.blockSource.getBiome(x, z);
    };
    WorldRegion.prototype.setBiome = function (x, z, biomeID) {
        this.blockSource.setBiome(x, z, biomeID);
    };
    WorldRegion.prototype.getBiomeTemperatureAt = function (x, y, z) {
        if (typeof x === "number") {
            return this.blockSource.getBiomeTemperatureAt(x, y, z);
        }
        var pos = x;
        return this.blockSource.getBiomeTemperatureAt(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.isChunkLoaded = function (chunkX, chunkZ) {
        return this.blockSource.isChunkLoaded(chunkX, chunkZ);
    };
    WorldRegion.prototype.isChunkLoadedAt = function (x, z) {
        return this.blockSource.isChunkLoadedAt(x, z);
    };
    WorldRegion.prototype.getChunkState = function (chunkX, chunkZ) {
        return this.blockSource.getChunkState(chunkX, chunkZ);
    };
    WorldRegion.prototype.getChunkStateAt = function (x, z) {
        return this.blockSource.getChunkStateAt(x, z);
    };
    WorldRegion.prototype.getLightLevel = function (x, y, z) {
        if (typeof x === "number") {
            return this.blockSource.getLightLevel(x, y, z);
        }
        var pos = x;
        return this.blockSource.getLightLevel(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.canSeeSky = function (x, y, z) {
        if (typeof x === "number") {
            return this.blockSource.canSeeSky(x, y, z);
        }
        var pos = x;
        return this.blockSource.canSeeSky(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.getGrassColor = function (x, y, z) {
        if (typeof x === "number") {
            return this.blockSource.getGrassColor(x, y, z);
        }
        var pos = x;
        return this.blockSource.getGrassColor(pos.x, pos.y, pos.z);
    };
    WorldRegion.prototype.dropItem = function (x, y, z, id, count, data, extra) {
        if (typeof x == "object") {
            var pos = x;
            if (typeof y == "object") {
                var item = y;
                return this.dropItem(pos.x, pos.y, pos.z, item);
            }
            return this.dropItem(pos.x, pos.y, pos.z, arguments[1], arguments[2], arguments[3], arguments[4]);
        }
        if (typeof id == "object") {
            var item = id;
            return this.dropItem(x, y, z, item.id, item.count, item.data, item.extra);
        }
        return this.blockSource.spawnDroppedItem(x, y, z, id, count || 1, data || 0, extra || null);
    };
    WorldRegion.prototype.dropAtBlock = function (x, y, z, id, count, data, extra) {
        if (typeof x == "object") {
            var pos = x;
            return this.dropItem(pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, arguments[1], arguments[2], arguments[3], arguments[4]);
        }
        return this.dropItem(x + 0.5, y + 0.5, z + 0.5, id, count, data, extra);
    };
    WorldRegion.prototype.spawnEntity = function (x, y, z, namespace, type, spawnEvent) {
        if (type === undefined) {
            return this.blockSource.spawnEntity(x, y, z, namespace);
        }
        return this.blockSource.spawnEntity(x, y, z, namespace, type, spawnEvent);
    };
    WorldRegion.prototype.spawnExpOrbs = function (x, y, z, amount) {
        if (typeof x == "object") {
            var pos = x;
            this.spawnExpOrbs(pos.x, pos.y, pos.z, arguments[1]);
        }
        this.blockSource.spawnExpOrbs(x, y, z, amount);
    };
    WorldRegion.prototype.listEntitiesInAABB = function (x1, y1, z1, x2, y2, z2, type, blacklist) {
        if (type === void 0) {
            type = -1;
        }
        if (blacklist === void 0) {
            blacklist = true;
        }
        if (typeof x1 == "object") {
            var pos1 = x1, pos2 = y1;
            return this.listEntitiesInAABB(pos1.x, pos1.y, pos1.z, pos2.x, pos2.y, pos2.z, z1, x2);
        }
        var entities = this.blockSource.listEntitiesInAABB(x1, y1, z1, x2, y2, z2, type, blacklist);
        if (this.isDeprecated && (type == Native.EntityType.PLAYER) != blacklist) {
            var players = Network.getConnectedPlayers();
            var dimension = this.getDimension();
            for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
                var ent = players_1[_i];
                if (Entity.getDimension(ent) != dimension) {
                    continue;
                }
                var c = Entity.getPosition(ent);
                if ((c.x >= x1 && c.x <= x2) && (c.y - 1.62 >= y1 && c.y - 1.62 <= y2) && (c.z >= z1 && c.z <= z2)) {
                    entities.push(ent);
                }
            }
        }
        return entities;
    };
    WorldRegion.prototype.playSound = function (x, y, z, name, volume, pitch) {
        var _a, _b;
        if (typeof (x) == "number") {
            var soundPos = new Vector3(x, y, z);
            this.playSound(soundPos, name, volume, pitch);
        } else {
            var coords = arguments[0];
            this.sendPacketInRadius(coords, 100, "WorldRegion.play_sound", __assign(__assign({}, coords), {name: arguments[1], volume: (_a = arguments[2]) !== null && _a !== void 0 ? _a : 1, pitch: (_b = arguments[3]) !== null && _b !== void 0 ? _b : 1}));
        }
    };
    WorldRegion.prototype.playSoundAtEntity = function (ent, name, volume, pitch) {
        if (volume === void 0) {
            volume = 1;
        }
        if (pitch === void 0) {
            pitch = 1;
        }
        var soundPos = Entity.getPosition(ent);
        this.sendPacketInRadius(soundPos, 100, "WorldRegion.play_sound_at", {ent: ent, name: name, volume: volume, pitch: pitch});
    };
    WorldRegion.prototype.sendPacketInRadius = function (coords, radius, packetName, data) {
        var dimension = this.getDimension();
        var clientsList = Network.getConnectedClients();
        for (var _i = 0, clientsList_1 = clientsList; _i < clientsList_1.length; _i++) {
            var client = clientsList_1[_i];
            var player = client.getPlayerUid();
            var entPos = Entity.getPosition(player);
            if (Entity.getDimension(player) == dimension && Entity.getDistanceBetweenCoords(entPos, coords) <= radius) {
                client.send(packetName, data);
            }
        }
    };
    return WorldRegion;
}());
Network.addClientPacket("WorldRegion.play_sound", function (data) {
    World.playSound(data.x, data.y, data.z, data.name, data.volume, data.pitch);
});
Network.addClientPacket("WorldRegion.play_sound_at", function (data) {
    World.playSoundAtEntity(data.ent, data.name, data.volume, data.pitch);
});
var PlayerEntity = (function () {
    function PlayerEntity(playerUid) {
        this.actor = new PlayerActor(playerUid);
        this.playerUid = playerUid;
    }
    PlayerEntity.prototype.getUid = function () {
        return this.playerUid;
    };
    PlayerEntity.prototype.getDimension = function () {
        return this.actor.getDimension();
    };
    PlayerEntity.prototype.getGameMode = function () {
        return this.actor.getGameMode();
    };
    PlayerEntity.prototype.addItemToInventory = function (id, count, data, extra) {
        var item = id;
        if (typeof item == "object") {
            this.actor.addItemToInventory(item.id, item.count, item.data, item.extra || null, true);
        } else {
            this.actor.addItemToInventory(id, count, data, extra || null, true);
        }
    };
    PlayerEntity.prototype.getInventorySlot = function (slot) {
        var item = this.actor.getInventorySlot(slot);
        return new ItemStack(item);
    };
    PlayerEntity.prototype.setInventorySlot = function (slot, item, count, data, extra) {
        if (extra === void 0) {
            extra = null;
        }
        if (typeof item == "object") {
            this.actor.setInventorySlot(slot, item.id, item.count, item.data, item.extra || null);
        } else {
            this.actor.setInventorySlot(slot, item, count, data, extra);
        }
    };
    PlayerEntity.prototype.getCarriedItem = function () {
        var item = Entity.getCarriedItem(this.getUid());
        return new ItemStack(item);
    };
    PlayerEntity.prototype.setCarriedItem = function (item, count, data, extra) {
        if (extra === void 0) {
            extra = null;
        }
        if (typeof item == "object") {
            Entity.setCarriedItem(this.getUid(), item.id, item.count, item.data, item.extra);
        } else {
            Entity.setCarriedItem(this.getUid(), item, count, data, extra);
        }
    };
    PlayerEntity.prototype.decreaseCarriedItem = function (amount) {
        if (amount === void 0) {
            amount = 1;
        }
        var item = this.getCarriedItem();
        this.setCarriedItem(item.id, item.count - amount, item.data, item.extra);
    };
    PlayerEntity.prototype.getArmor = function (slot) {
        var item = this.actor.getArmor(slot);
        return new ItemStack(item);
    };
    PlayerEntity.prototype.setArmor = function (slot, item, count, data, extra) {
        if (extra === void 0) {
            extra = null;
        }
        if (typeof item == "object") {
            this.actor.setArmor(slot, item.id, item.count, item.data, item.extra || null);
        } else {
            this.actor.setArmor(slot, item, count, data, extra);
        }
    };
    PlayerEntity.prototype.setRespawnCoords = function (x, y, z) {
        this.actor.setRespawnCoords(x, y, z);
    };
    PlayerEntity.prototype.spawnExpOrbs = function (x, y, z, value) {
        this.actor.spawnExpOrbs(x, y, z, value);
    };
    PlayerEntity.prototype.isValid = function () {
        return this.actor.isValid();
    };
    PlayerEntity.prototype.getSelectedSlot = function () {
        return this.actor.getSelectedSlot();
    };
    PlayerEntity.prototype.setSelectedSlot = function (slot) {
        this.actor.setSelectedSlot(slot);
    };
    PlayerEntity.prototype.getExperience = function () {
        return this.actor.getExperience();
    };
    PlayerEntity.prototype.setExperience = function (value) {
        this.actor.setExperience(value);
    };
    PlayerEntity.prototype.addExperience = function (amount) {
        this.actor.addExperience(amount);
    };
    PlayerEntity.prototype.getLevel = function () {
        return this.actor.getLevel();
    };
    PlayerEntity.prototype.setLevel = function (level) {
        this.actor.setLevel(level);
    };
    PlayerEntity.prototype.getExhaustion = function () {
        return this.actor.getExhaustion();
    };
    PlayerEntity.prototype.setExhaustion = function (value) {
        this.actor.setExhaustion(value);
    };
    PlayerEntity.prototype.getHunger = function () {
        return this.actor.getHunger();
    };
    PlayerEntity.prototype.setHunger = function (value) {
        this.actor.setHunger(value);
    };
    PlayerEntity.prototype.getSaturation = function () {
        return this.actor.getSaturation();
    };
    PlayerEntity.prototype.setSaturation = function (value) {
        this.actor.setSaturation(value);
    };
    PlayerEntity.prototype.getScore = function () {
        return this.actor.getScore();
    };
    PlayerEntity.prototype.setScore = function (value) {
        this.actor.setScore(value);
    };
    PlayerEntity.prototype.getItemUseDuration = function () {
        return this.actor.getItemUseDuration();
    };
    PlayerEntity.prototype.getItemUseIntervalProgress = function () {
        return this.actor.getItemUseIntervalProgress();
    };
    PlayerEntity.prototype.getItemUseStartupProgress = function () {
        return this.actor.getItemUseStartupProgress();
    };
    return PlayerEntity;
}());
var EntityCustomData;
(function (EntityCustomData) {
    var entities = {};
    function getAll() {
        return entities;
    }
    EntityCustomData.getAll = getAll;
    function getData(entity) {
        var data = entities[entity];
        if (!data) {
            data = {};
            putData(entity, data);
        }
        return data;
    }
    EntityCustomData.getData = getData;
    function putData(entity, data) {
        entities[entity] = data;
    }
    EntityCustomData.putData = putData;
    function getField(entity, key) {
        var playerData = getData(entity);
        if (playerData) {
            return playerData[key];
        }
    }
    EntityCustomData.getField = getField;
    function putField(entity, key, value) {
        var data = getData(entity);
        data[key] = value;
    }
    EntityCustomData.putField = putField;
    Saver.addSavesScope("EntityData", function read(scope) {
        entities = scope || {};
    }, function save() {
        return entities;
    });
    Callback.addCallback("EntityRemoved", function (entity) {
        delete entities[entity];
    });
})(EntityCustomData || (EntityCustomData = {}));
var BlockModeler;
(function (BlockModeler) {
    function getRotatedBoxVertexes(box, rotation) {
        switch (rotation) {
          case 0:
            return box;
          case 1:
            return [1 - box[3], box[1], 1 - box[5], 1 - box[0], box[4], 1 - box[2]];
          case 2:
            return [box[2], box[1], 1 - box[3], box[5], box[4], 1 - box[0]];
          case 3:
            return [1 - box[5], box[1], box[0], 1 - box[2], box[4], box[3]];
        }
    }
    BlockModeler.getRotatedBoxVertexes = getRotatedBoxVertexes;
    function setStairsRenderModel(id) {
        var boxes = [[0, 0, 0, 1, 0.5, 1], [0.5, 0.5, 0.5, 1, 1, 1], [0, 0.5, 0.5, 0.5, 1, 1], [0.5, 0.5, 0, 1, 1, 0.5], [0, 0.5, 0, 0.5, 1, 0.5]];
        createStairsRenderModel(id, 0, boxes);
        var newBoxes = [];
        for (var _i = 0, boxes_1 = boxes; _i < boxes_1.length; _i++) {
            var box = boxes_1[_i];
            newBoxes.push([box[0], 1 - box[4], box[2], box[3], 1 - box[1], box[5]]);
        }
        createStairsRenderModel(id, 4, newBoxes);
    }
    BlockModeler.setStairsRenderModel = setStairsRenderModel;
    function setInventoryModel(blockID, model, data) {
        if (data === void 0) {
            data = 0;
        }
        ItemModel.getFor(blockID, data).setHandModel(model);
        ItemModel.getFor(blockID, data).setUiModel(model);
    }
    BlockModeler.setInventoryModel = setInventoryModel;
    function createStairsRenderModel(id, startData, boxes) {
        var modelConditionData = [{data: 3, posR: [-1, 0], posB: [0, 1]}, {data: 2, posR: [1, 0], posB: [0, -1]}, {data: 0, posR: [0, 1], posB: [1, 0]}, {data: 1, posR: [0, -1], posB: [-1, 0]}];
        for (var i = 0; i < 4; i++) {
            var conditionData = modelConditionData[i];
            var data = startData + i;
            var rBlockData = conditionData.data + startData;
            var groupR = ICRender.getGroup("stairs:" + rBlockData);
            var groupL = ICRender.getGroup("stairs:" + (rBlockData ^ 1));
            var currentGroup = ICRender.getGroup("stairs:" + data);
            currentGroup.add(id, data);
            var render = new ICRender.Model();
            var shape = new ICRender.CollisionShape();
            var box0 = boxes[0];
            render.addEntry(new BlockRenderer.Model(box0[0], box0[1], box0[2], box0[3], box0[4], box0[5], id, data));
            shape.addEntry().addBox(box0[0], box0[1], box0[2], box0[3], box0[4], box0[5]);
            var posR = conditionData.posR;
            var posB = conditionData.posB;
            var posF = [posB[0] * (-1), posB[1] * (-1)];
            var conditionRight = ICRender.BLOCK(posR[0], 0, posR[1], currentGroup, false);
            var conditionLeft = ICRender.BLOCK(posR[0] * (-1), 0, posR[1] * (-1), currentGroup, false);
            var conditionBackNotR = ICRender.BLOCK(posB[0], 0, posB[1], groupR, true);
            var conditionBackNotL = ICRender.BLOCK(posB[0], 0, posB[1], groupL, true);
            var box1 = getRotatedBoxVertexes(boxes[1], i);
            var model = new BlockRenderer.Model(box1[0], box1[1], box1[2], box1[3], box1[4], box1[5], id, data);
            var condition0 = ICRender.OR(conditionBackNotR, conditionLeft);
            render.addEntry(model).setCondition(condition0);
            shape.addEntry().addBox(box1[0], box1[1], box1[2], box1[3], box1[4], box1[5]).setCondition(condition0);
            var box2 = getRotatedBoxVertexes(boxes[2], i);
            var condition1 = ICRender.OR(conditionBackNotL, conditionRight);
            model = new BlockRenderer.Model(box2[0], box2[1], box2[2], box2[3], box2[4], box2[5], id, data);
            render.addEntry(model).setCondition(condition1);
            shape.addEntry().addBox(box2[0], box2[1], box2[2], box2[3], box2[4], box2[5]).setCondition(condition1);
            var box3 = getRotatedBoxVertexes(boxes[3], i);
            model = new BlockRenderer.Model(box3[0], box3[1], box3[2], box3[3], box3[4], box3[5], id, data);
            var condition2 = ICRender.AND(conditionBackNotR, conditionBackNotL, ICRender.NOT(conditionLeft), ICRender.BLOCK(posF[0], 0, posF[1], groupL, false));
            render.addEntry(model).setCondition(condition2);
            shape.addEntry().addBox(box3[0], box3[1], box3[2], box3[3], box3[4], box3[5]).setCondition(condition2);
            var box4 = getRotatedBoxVertexes(boxes[4], i);
            model = new BlockRenderer.Model(box4[0], box4[1], box4[2], box4[3], box4[4], box4[5], id, data);
            var condition3 = ICRender.AND(conditionBackNotR, conditionBackNotL, ICRender.NOT(conditionRight), ICRender.BLOCK(posF[0], 0, posF[1], groupR, false));
            render.addEntry(model).setCondition(condition3);
            shape.addEntry().addBox(box4[0], box4[1], box4[2], box4[3], box4[4], box4[5]).setCondition(condition3);
            BlockRenderer.setStaticICRender(id, data, render);
            BlockRenderer.setCustomCollisionShape(id, data, shape);
            BlockRenderer.setCustomRaycastShape(id, data, shape);
        }
    }
})(BlockModeler || (BlockModeler = {}));
var BlockBase = (function () {
    function BlockBase(stringID, blockType) {
        if (blockType === void 0) {
            blockType = {};
        }
        this.variations = [];
        this.shapes = {};
        this.isDefined = false;
        this.miningLevel = 0;
        this.stringID = stringID;
        this.id = IDRegistry.genBlockID(stringID);
        if (typeof blockType == "object") {
            BlockRegistry.extendBlockType(blockType);
        } else {
            blockType = BlockRegistry.getBlockType(blockType);
        }
        this.blockType = blockType;
    }
    BlockBase.prototype.addVariation = function (name, texture, inCreative) {
        if (inCreative === void 0) {
            inCreative = false;
        }
        this.variations.push({name: name, texture: texture, inCreative: inCreative});
    };
    BlockBase.prototype.createBlock = function () {
        if (this.variations.length == 0) {
            this.addVariation(this.stringID + ".name", [["__missing", 0]]);
        }
        var blockType = this.blockType ? BlockRegistry.convertBlockTypeToSpecialType(this.blockType) : null;
        var duplicatedInstance = BlockRegistry.getInstanceOf(this.id);
        if (duplicatedInstance) {
            var variations = duplicatedInstance.variations;
            for (var i = 0; i < Math.min(this.variations.length, variations.length); i++) {
                if (variations[i].inCreative) {
                    this.variations[i].inCreative = false;
                    Logger.Log("Skipped duplicated adding to creative for block ".concat(this.stringID, ":").concat(i), "BlockEngine");
                }
            }
        }
        Block.createBlock(this.stringID, this.variations, blockType);
        this.isDefined = true;
        for (var data in this.shapes) {
            var box = this.shapes[data];
            Block.setShape(this.id, box[0], box[1], box[2], box[3], box[4], box[5], parseInt(data));
        }
        if (this.category) {
            Item.setCategory(this.id, this.category);
        }
    };
    BlockBase.prototype.getDrop = function (coords, block, level, enchant, item, region) {
        if (level >= this.miningLevel) {
            return [[block.id, 1, block.data]];
        }
        return [];
    };
    BlockBase.prototype.onBreak = function (coords, block, region) {
        if (Math.random() >= 0.25) {
            return;
        }
        var enchant = ToolAPI.getEnchantExtraData();
        var item = new ItemStack();
        var drop = this.getDrop(coords, block, 127, enchant, item, region);
        for (var _i = 0, drop_2 = drop; _i < drop_2.length; _i++) {
            var item_2 = drop_2[_i];
            region.spawnDroppedItem(coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, item_2[0], item_2[1], item_2[2], item_2[3] || null);
        }
    };
    BlockBase.prototype.setDestroyTime = function (destroyTime) {
        this.blockType.destroyTime = destroyTime;
    };
    BlockBase.prototype.setBlockMaterial = function (material, level) {
        if (level === void 0) {
            level = 0;
        }
        this.blockMaterial = material;
        this.miningLevel = level;
        BlockRegistry.setBlockMaterial(this.id, material, level);
    };
    BlockBase.prototype.setShape = function (x1, y1, z1, x2, y2, z2, data) {
        if (data === void 0) {
            data = -1;
        }
        this.shapes[data] = [x1, y1, z1, x2, y2, z2];
    };
    BlockBase.prototype.setBaseBlock = function (baseBlock) {
        this.blockType.baseBlock = baseBlock;
    };
    BlockBase.prototype.setSolid = function (isSolid) {
        this.blockType.solid = isSolid;
    };
    BlockBase.prototype.setRenderAllFaces = function (renderAllFaces) {
        this.blockType.renderAllFaces = renderAllFaces;
    };
    BlockBase.prototype.setRenderType = function (renderType) {
        this.blockType.renderType = renderType;
    };
    BlockBase.prototype.setRenderLayer = function (renderLayer) {
        this.blockType.renderLayer = renderLayer;
    };
    BlockBase.prototype.setLightLevel = function (lightLevel) {
        this.blockType.lightLevel = lightLevel;
    };
    BlockBase.prototype.setLightOpacity = function (lightOpacity) {
        this.blockType.lightOpacity = lightOpacity;
    };
    BlockBase.prototype.setExplosionResistance = function (resistance) {
        this.blockType.explosionResistance = resistance;
    };
    BlockBase.prototype.setFriction = function (friction) {
        this.blockType.friction = friction;
    };
    BlockBase.prototype.setTranslucency = function (translucency) {
        this.blockType.translucency = translucency;
    };
    BlockBase.prototype.setSoundType = function (sound) {
        this.blockType.sound = sound;
    };
    BlockBase.prototype.setMapColor = function (color) {
        this.blockType.mapColor = color;
    };
    BlockBase.prototype.setBlockColorSource = function (colorSource) {
        this.blockType.colorSource = colorSource;
    };
    BlockBase.prototype.setCategory = function (category) {
        this.category = category;
    };
    BlockBase.prototype.setRarity = function (rarity) {
        ItemRegistry.setRarity(this.id, rarity);
    };
    BlockBase.prototype.registerTileEntity = function (prototype) {
        TileEntity.registerPrototype(this.id, prototype);
    };
    return BlockBase;
}());
var BlockRotative = (function (_super) {
    __extends(BlockRotative, _super);
    function BlockRotative(stringID, blockType, hasVerticalFacings) {
        if (hasVerticalFacings === void 0) {
            hasVerticalFacings = false;
        }
        var _this = _super.call(this, stringID, blockType) || this;
        _this.hasVerticalFacings = hasVerticalFacings;
        return _this;
    }
    BlockRotative.prototype.addVariation = function (name, texture, inCreative) {
        var textures = [[texture[3], texture[2], texture[0], texture[1], texture[4], texture[5]], [texture[2], texture[3], texture[1], texture[0], texture[5], texture[4]], [texture[0], texture[1], texture[3], texture[2], texture[5], texture[4]], [texture[0], texture[1], texture[2], texture[3], texture[4], texture[5]], [texture[0], texture[1], texture[4], texture[5], texture[3], texture[2]], [texture[0], texture[1], texture[5], texture[4], texture[2], texture[3]]];
        if (!this.hasVerticalFacings) {
            textures[0] = textures[1] = textures[3];
        }
        for (var data = 0; data < 6; data++) {
            this.variations.push({name: name, texture: textures[data], inCreative: inCreative && data == 0});
        }
    };
    BlockRotative.prototype.createBlock = function () {
        _super.prototype.createBlock.call(this);
        if (this.hasVerticalFacings) {
            for (var i = 0; i < this.variations.length; i += 6) {
                BlockModeler.setInventoryModel(this.id, BlockRenderer.createTexturedBlock(this.variations[i + 3].texture), i);
            }
        }
    };
    BlockRotative.prototype.onPlace = function (coords, item, block, player, region) {
        var place = BlockRegistry.getPlacePosition(coords, block, region);
        if (!place) {
            return;
        }
        var rotation = BlockRegistry.getBlockRotation(player, this.hasVerticalFacings);
        var data = (item.data - item.data % 6) + rotation;
        region.setBlock(place.x, place.y, place.z, item.id, data);
        return place;
    };
    return BlockRotative;
}(BlockBase));
var BlockStairs = (function (_super) {
    __extends(BlockStairs, _super);
    function BlockStairs(stringID, defineData, blockType) {
        var _this = _super.call(this, stringID, blockType) || this;
        _this.variations.push(defineData);
        BlockModeler.setStairsRenderModel(_this.id);
        _this.createItemModel();
        return _this;
    }
    BlockStairs.prototype.createItemModel = function () {
        var model = BlockRenderer.createModel();
        model.addBox(0, 0, 0, 1, 0.5, 1, this.id, 0);
        model.addBox(0, 0.5, 0, 1, 1, 0.5, this.id, 0);
        BlockModeler.setInventoryModel(this.id, model);
    };
    BlockStairs.prototype.onPlace = function (coords, item, block, player, region) {
        var place = BlockRegistry.getPlacePosition(coords, block, region);
        if (!place) {
            return;
        }
        var data = BlockRegistry.getBlockRotation(player) - 2;
        if (coords.side == 0 || coords.side >= 2 && coords.vec.y - coords.y >= 0.5) {
            data += 4;
        }
        region.setBlock(place.x, place.y, place.z, item.id, data);
        return place;
    };
    return BlockStairs;
}(BlockBase));
var BlockSlab = (function (_super) {
    __extends(BlockSlab, _super);
    function BlockSlab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockSlab.prototype.setDoubleSlab = function (blockID) {
        this.doubleSlabID = blockID;
    };
    BlockSlab.prototype.createBlock = function () {
        var defineData = this.variations;
        this.variations = [];
        for (var i = 0; i < 8; i++) {
            if (i < defineData.length) {
                this.variations.push(defineData[i]);
            } else {
                this.addVariation(defineData[0].name, defineData[0].texture);
            }
        }
        for (var i = 0; i < defineData.length; i++) {
            this.addVariation(defineData[i].name, defineData[i].texture, false);
        }
        for (var i = 0; i < 8; i++) {
            this.setShape(0, 0, 0, 1, 0.5, 1, i);
        }
        for (var i = 8; i < 16; i++) {
            this.setShape(0, 0.5, 0, 1, 1, 1, i);
        }
        _super.prototype.createBlock.call(this);
    };
    BlockSlab.prototype.getDrop = function (coords, block, level) {
        return [[this.id, 1, block.data % 8]];
    };
    BlockSlab.prototype.onPlace = function (coords, item, block, player, blockSource) {
        var region = new WorldRegion(blockSource);
        if (block.id == item.id && block.data % 8 == item.data && Math.floor(block.data / 8) == (coords.side ^ 1)) {
            region.setBlock(coords, this.doubleSlabID, item.data);
            return;
        }
        var place = coords;
        if (!World.canTileBeReplaced(block.id, block.data)) {
            place = coords.relative;
            var tile = region.getBlock(place);
            if (!World.canTileBeReplaced(tile.id, tile.data)) {
                if (tile.id == item.id && tile.data % 8 == item.data) {
                    region.setBlock(place, this.doubleSlabID, item.data);
                }
                return;
            }
        }
        if (coords.vec.y - place.y < 0.5) {
            region.setBlock(place, item.id, item.data);
        } else {
            region.setBlock(place, item.id, item.data + 8);
        }
    };
    return BlockSlab;
}(BlockBase));
var BlockDoubleSlab = (function (_super) {
    __extends(BlockDoubleSlab, _super);
    function BlockDoubleSlab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockDoubleSlab.prototype.setSlab = function (blockID) {
        this.slabID = blockID;
    };
    BlockDoubleSlab.prototype.getDrop = function (coords, block, level) {
        return [[this.slabID, 1, block.data], [this.slabID, 1, block.data]];
    };
    return BlockDoubleSlab;
}(BlockBase));
var BlockRegistry;
(function (BlockRegistry) {
    var EntityGetYaw = ModAPI.requireGlobal("Entity.getYaw");
    var EntityGetPitch = ModAPI.requireGlobal("Entity.getPitch");
    var NativeBlock = com.zhekasmirnov.innercore.api.NativeBlock;
    var blocks = {};
    var blockTypes = {};
    function createBlock(stringID, defineData, blockType) {
        var block = new BlockBase(stringID, blockType);
        for (var _i = 0, defineData_1 = defineData; _i < defineData_1.length; _i++) {
            var variation = defineData_1[_i];
            block.addVariation(variation.name, variation.texture, variation.inCreative);
        }
        registerBlock(block);
    }
    BlockRegistry.createBlock = createBlock;
    function createBlockWithRotation(stringID, defineData, blockType, hasVerticalFacings) {
        var block = new BlockRotative(stringID, blockType, hasVerticalFacings);
        for (var _i = 0, defineData_2 = defineData; _i < defineData_2.length; _i++) {
            var variation = defineData_2[_i];
            block.addVariation(variation.name, variation.texture, variation.inCreative);
        }
        registerBlock(block);
    }
    BlockRegistry.createBlockWithRotation = createBlockWithRotation;
    function createStairs(stringID, defineData, blockType) {
        registerBlock(new BlockStairs(stringID, defineData[0], blockType));
    }
    BlockRegistry.createStairs = createStairs;
    function createSlabs(slabID, doubleSlabID, defineData, blockType) {
        var slab = new BlockSlab(slabID, blockType);
        slab.variations = defineData;
        var doubleSlab = new BlockDoubleSlab(doubleSlabID, blockType);
        for (var _i = 0, defineData_3 = defineData; _i < defineData_3.length; _i++) {
            var variation = defineData_3[_i];
            doubleSlab.addVariation(variation.name, variation.texture);
        }
        slab.setDoubleSlab(doubleSlab.id);
        doubleSlab.setSlab(slab.id);
        registerBlock(slab);
        registerBlock(doubleSlab);
    }
    BlockRegistry.createSlabs = createSlabs;
    function getBlockType(name) {
        return blockTypes[name] || null;
    }
    BlockRegistry.getBlockType = getBlockType;
    function extendBlockType(type) {
        if (!type.extends) {
            return;
        }
        var parent = getBlockType(type.extends);
        for (var key in parent) {
            if (!(key in type)) {
                type[key] = parent[key];
            }
        }
    }
    BlockRegistry.extendBlockType = extendBlockType;
    function createBlockType(name, type, isNative) {
        extendBlockType(type);
        blockTypes[name] = type;
        if (!isNative) {
            Block.createSpecialType(convertBlockTypeToSpecialType(type), name);
        }
    }
    BlockRegistry.createBlockType = createBlockType;
    function convertBlockTypeToSpecialType(properites) {
        var type = {};
        for (var key in properites) {
            switch (key) {
              case "baseBlock":
                type.base = properites[key];
                break;
              case "renderAllFaces":
                type.renderallfaces = properites[key];
                break;
              case "renderType":
                type.rendertype = properites[key];
                break;
              case "renderLayer":
                type.renderlayer = properites[key];
                break;
              case "lightLevel":
                type.lightlevel = properites[key];
                break;
              case "lightOpacity":
                type.lightopacity = properites[key];
                break;
              case "explosionResistance":
                type.explosionres = properites[key];
                break;
              case "destroyTime":
                type.destroytime = properites[key];
                break;
              case "mapColor":
                type.mapcolor = properites[key];
                break;
              case "colorSource":
                type.color_source = properites[key];
                break;
              case "extends":
                continue;
              default:
                type[key] = properites[key];
                break;
            }
        }
        return type;
    }
    BlockRegistry.convertBlockTypeToSpecialType = convertBlockTypeToSpecialType;
    function getInstanceOf(blockID) {
        var numericID = Block.getNumericId(blockID);
        return blocks[numericID] || null;
    }
    BlockRegistry.getInstanceOf = getInstanceOf;
    function registerBlock(block) {
        block.createBlock();
        registerBlockFuncs(block.id, block);
        blocks[block.id] = block;
        return block;
    }
    BlockRegistry.registerBlock = registerBlock;
    function registerBlockFuncs(blockID, blockFuncs) {
        var numericID = Block.getNumericId(blockID);
        if ("getDrop" in blockFuncs) {
            Block.registerDropFunction(numericID, function (coords, blockID, blockData, diggingLevel, enchant, item, region) {
                return blockFuncs.getDrop(coords, {id: blockID, data: blockData}, diggingLevel, enchant, new ItemStack(item), region);
            });
        }
        if ("onDestroy" in blockFuncs) {
            Callback.addCallback("DestroyBlock", function (coords, block, player) {
                if (block.id == numericID) {
                    blockFuncs.onDestroy(coords, block, BlockSource.getDefaultForActor(player), player);
                }
            });
        }
        if ("onBreak" in blockFuncs) {
            Block.registerPopResourcesFunction(numericID, function (coords, block, region) {
                blockFuncs.onBreak(coords, block, region);
            });
        }
        if ("onPlace" in blockFuncs) {
            Block.registerPlaceFunction(numericID, function (coords, item, block, player, region) {
                return blockFuncs.onPlace(coords, new ItemStack(item), block, player, region);
            });
        }
        if ("onNeighbourChange" in blockFuncs) {
            Block.registerNeighbourChangeFunction(numericID, function (coords, block, changeCoords, region) {
                blockFuncs.onNeighbourChange(coords, block, changeCoords, region);
            });
        }
        if ("onEntityInside" in blockFuncs) {
            Block.registerEntityInsideFunction(numericID, function (coords, block, entity) {
                blockFuncs.onEntityInside(coords, block, entity);
            });
        }
        if ("onEntityStepOn" in blockFuncs) {
            Block.registerEntityStepOnFunction(numericID, function (coords, block, entity) {
                blockFuncs.onEntityStepOn(coords, block, entity);
            });
        }
        if ("onRandomTick" in blockFuncs) {
            Block.setRandomTickCallback(numericID, function (x, y, z, id, data, region) {
                blockFuncs.onRandomTick(x, y, z, {id: id, data: data}, region);
            });
        }
        if ("onAnimateTick" in blockFuncs) {
            Block.setAnimateTickCallback(numericID, function (x, y, z, id, data) {
                blockFuncs.onAnimateTick(x, y, z, id, data);
            });
        }
        if ("onClick" in blockFuncs) {
            if (Block.registerClickFunction) {
                Block.registerClickFunction(numericID, function (coords, item, block, player) {
                    blockFuncs.onClick(coords, new ItemStack(item), block, player);
                });
            } else {
                Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
                    if (block.id == numericID) {
                        blockFuncs.onClick(coords, new ItemStack(item), block, player);
                    }
                });
            }
        }
        if ("onNameOverride" in blockFuncs || "onItemUse" in blockFuncs || "onDispense" in blockFuncs) {
            ItemRegistry.registerItemFuncs(blockID, blockFuncs);
        }
    }
    BlockRegistry.registerBlockFuncs = registerBlockFuncs;
    function setDestroyTime(blockID, time) {
        Block.setDestroyTime(blockID, time);
    }
    BlockRegistry.setDestroyTime = setDestroyTime;
    function setBaseBlock(blockID, baseBlock) {
        NativeBlock.setMaterialBase(Block.getNumericId(blockID), baseBlock);
    }
    BlockRegistry.setBaseBlock = setBaseBlock;
    function setSolid(blockID, isSolid) {
        NativeBlock.setSolid(Block.getNumericId(blockID), isSolid);
    }
    BlockRegistry.setSolid = setSolid;
    function setRenderAllFaces(blockID, renderAllFaces) {
        NativeBlock.setRenderAllFaces(Block.getNumericId(blockID), renderAllFaces);
    }
    BlockRegistry.setRenderAllFaces = setRenderAllFaces;
    function setRenderType(blockID, renderType) {
        NativeBlock.setRenderType(Block.getNumericId(blockID), renderType);
    }
    BlockRegistry.setRenderType = setRenderType;
    function setRenderLayer(blockID, renderLayer) {
        NativeBlock.setRenderLayer(Block.getNumericId(blockID), renderLayer);
    }
    BlockRegistry.setRenderLayer = setRenderLayer;
    function setLightLevel(blockID, lightLevel) {
        NativeBlock.setLightLevel(Block.getNumericId(blockID), lightLevel);
    }
    BlockRegistry.setLightLevel = setLightLevel;
    function setLightOpacity(blockID, lightOpacity) {
        NativeBlock.setLightOpacity(Block.getNumericId(blockID), lightOpacity);
    }
    BlockRegistry.setLightOpacity = setLightOpacity;
    function setExplosionResistance(blockID, resistance) {
        NativeBlock.setExplosionResistance(Block.getNumericId(blockID), resistance);
    }
    BlockRegistry.setExplosionResistance = setExplosionResistance;
    function setFriction(blockID, friction) {
        NativeBlock.setFriction(Block.getNumericId(blockID), friction);
    }
    BlockRegistry.setFriction = setFriction;
    function setTranslucency(blockID, translucency) {
        NativeBlock.setTranslucency(Block.getNumericId(blockID), translucency);
    }
    BlockRegistry.setTranslucency = setTranslucency;
    function setSoundType(blockID, sound) {
        NativeBlock.setSoundType(Block.getNumericId(blockID), sound);
    }
    BlockRegistry.setSoundType = setSoundType;
    function setMapColor(blockID, color) {
        NativeBlock.setMapColor(Block.getNumericId(blockID), color);
    }
    BlockRegistry.setMapColor = setMapColor;
    function setBlockColorSource(blockID, color) {
        NativeBlock.setBlockColorSource(Block.getNumericId(blockID), color);
    }
    BlockRegistry.setBlockColorSource = setBlockColorSource;
    function setBlockMaterial(blockID, material, level) {
        ToolAPI.registerBlockMaterial(Block.getNumericId(blockID), material, level, material == "stone");
    }
    BlockRegistry.setBlockMaterial = setBlockMaterial;
    function getBlockRotation(player, hasVertical) {
        var pitch = EntityGetPitch(player);
        if (hasVertical) {
            if (pitch < -45) {
                return 0;
            }
            if (pitch > 45) {
                return 1;
            }
        }
        var rotation = Math.floor((EntityGetYaw(player) - 45) % 360 / 90);
        if (rotation < 0) {
            rotation += 4;
        }
        rotation = [5, 3, 4, 2][rotation];
        return rotation;
    }
    BlockRegistry.getBlockRotation = getBlockRotation;
    function getPlacePosition(coords, block, region) {
        if (World.canTileBeReplaced(block.id, block.data)) {
            return coords;
        }
        var place = coords.relative;
        block = region.getBlock(place.x, place.y, place.z);
        if (World.canTileBeReplaced(block.id, block.data)) {
            return place;
        }
        return null;
    }
    BlockRegistry.getPlacePosition = getPlacePosition;
    function setRotationFunction(id, hasVertical, placeSound) {
        Block.registerPlaceFunction(id, function (coords, item, block, player, region) {
            var place = getPlacePosition(coords, block, region);
            if (!place) {
                return;
            }
            var rotation = getBlockRotation(player, hasVertical);
            region.setBlock(place.x, place.y, place.z, item.id, (item.data - item.data % 6) + rotation);
            return place;
        });
    }
    BlockRegistry.setRotationFunction = setRotationFunction;
    function registerDrop(blockID, dropFunc, level) {
        Block.registerDropFunction(blockID, function (blockCoords, blockID, blockData, diggingLevel, enchant, item, region) {
            if (!level || diggingLevel >= level) {
                return dropFunc(blockCoords, blockID, blockData, diggingLevel, enchant, item, region);
            }
            return [];
        });
        addBlockDropOnExplosion(blockID);
    }
    BlockRegistry.registerDrop = registerDrop;
    function setDestroyLevel(blockID, level) {
        Block.registerDropFunction(blockID, function (coords, blockID, blockData, diggingLevel) {
            if (diggingLevel >= level) {
                return [[Block.getNumericId(blockID), 1, 0]];
            }
        });
        addBlockDropOnExplosion(blockID);
    }
    BlockRegistry.setDestroyLevel = setDestroyLevel;
    function registerOnExplosionFunction(blockID, func) {
        Block.registerPopResourcesFunction(blockID, func);
    }
    BlockRegistry.registerOnExplosionFunction = registerOnExplosionFunction;
    function addBlockDropOnExplosion(blockID) {
        Block.registerPopResourcesFunction(blockID, function (coords, block, region) {
            if (Math.random() >= 0.25) {
                return;
            }
            var dropFunc = Block.getDropFunction(block.id);
            var enchant = ToolAPI.getEnchantExtraData();
            var item = new ItemStack();
            var drop = dropFunc(coords, block.id, block.data, 127, enchant, item, region);
            for (var _i = 0, drop_3 = drop; _i < drop_3.length; _i++) {
                var item_3 = drop_3[_i];
                region.spawnDroppedItem(coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, item_3[0], item_3[1], item_3[2], item_3[3] || null);
            }
        });
    }
    BlockRegistry.addBlockDropOnExplosion = addBlockDropOnExplosion;
    var noDropBlocks = [26, 30, 31, 32, 51, 59, 92, 99, 100, 104, 105, 106, 115, 127, 132, 141, 142, 144, 161, 175, 199, 244, 385, 386, 388, 389, 390, 391, 392, 462];
    function getBlockDrop(x, y, z, block, level, item, region) {
        var id = block.id, data = block.data;
        var enchant = ToolAPI.getEnchantExtraData(item.extra);
        var dropFunc = Block.dropFunctions[id];
        if (dropFunc) {
            region !== null && region !== void 0 ? region : (region = BlockSource.getDefaultForActor(Player.get()));
            return dropFunc(new Vector3(x, y, z), id, data, level, enchant, item, region);
        }
        if (id == 3 || id == 5 || id == 6 || id == 12 || id == 19 || id == 35 || id == 85 || id == 158 || id == 171) {
            return [[id, 1, data]];
        }
        if (id == 17 || id == 162) {
            return [[id, 1, data]];
        }
        if (id == 18 || id == 161) {
            if (enchant.silk) {
                return [[id, 1, data]];
            }
            return [];
        }
        if (id == 47) {
            if (enchant.silk) {
                return [[id, 1, 0]];
            }
            return [[340, 3, 0]];
        }
        if (id == 55) {
            return [[331, 1, 0]];
        }
        if (id == 60) {
            return [[3, 1, 0]];
        }
        if (id == 63 || id == 68) {
            return [[338, 1, 0]];
        }
        if (id == 64) {
            return [[324, 1, 0]];
        }
        if (id == 75 || id == 76) {
            return [[76, 1, 0]];
        }
        if (id == 79) {
            if (enchant.silk) {
                return [[id, 1, 0]];
            }
            return [];
        }
        if (id == 83) {
            return [[338, 1, 0]];
        }
        if (id == 89) {
            return [[348, Math.floor(Math.random() * 3 + 2), 0]];
        }
        if (id == 93 || id == 94) {
            return [[356, 1, 0]];
        }
        if (id == 103) {
            return [[360, Math.floor(Math.random() * 4 + 4), 0]];
        }
        if (id == 123 || id == 124) {
            return [[123, 1, 0]];
        }
        if (id == 140) {
            return [[390, 1, 0]];
        }
        if (id == 149 || id == 150) {
            return [[404, 1, 0]];
        }
        if (id == 151 || id == 178) {
            return [[151, 1, 0]];
        }
        if (id == 193) {
            return [[427, 1, 0]];
        }
        if (id == 194) {
            return [[428, 1, 0]];
        }
        if (id == 195) {
            return [[429, 1, 0]];
        }
        if (id == 196) {
            return [[430, 1, 0]];
        }
        if (id == 197) {
            return [[431, 1, 0]];
        }
        if (id == 393) {
            return [[335, 1, 0]];
        }
        if (id == VanillaTileID.campfire) {
            if (enchant.silk) {
                return [[id, 1, 0]];
            }
            var item_4 = IDConverter.getIDData("charcoal");
            return [[item_4.id, 1, item_4.data]];
        }
        if (id == VanillaTileID.soul_campfire) {
            if (enchant.silk) {
                return [[id, 1, 0]];
            }
            return [[VanillaTileID.soul_soil, 1, 0]];
        }
        if (id == 436 || id == 437) {
            return [[472, 1, 0]];
        }
        if (id == 441 || id == 442) {
            return [[473, 1, 0]];
        }
        if (id == 443 || id == 444) {
            return [[474, 1, 0]];
        }
        if (id == 445 || id == 446) {
            return [[475, 1, 0]];
        }
        if (id == 447 || id == 448) {
            return [[476, 1, 0]];
        }
        if (id == 467) {
            return [[-212, 1, data]];
        }
        if (noDropBlocks.indexOf(id) != -1) {
            return [];
        }
        return [[Block.convertBlockToItemId(id), 1, 0]];
    }
    BlockRegistry.getBlockDrop = getBlockDrop;
    createBlockType("opaque", {baseBlock: 1, solid: true, lightOpacity: 15, explosionResistance: 4, renderLayer: 2, translucency: 0, sound: "stone"}, true);
    createBlockType("stone", {extends: "opaque", destroyTime: 1.5, explosionResistance: 30});
    createBlockType("ore", {extends: "opaque", destroyTime: 3, explosionResistance: 15});
    createBlockType("wood", {extends: "opaque", baseBlock: 17, destroyTime: 2, explosionResistance: 10, sound: "wood"});
    createBlockType("leaves", {baseBlock: 18, destroyTime: 0.2, explosionResistance: 1, renderAllFaces: true, renderLayer: 1, lightOpacity: 1, translucency: 0.5, sound: "grass"});
    createBlockType("dirt", {extends: "opaque", baseBlock: 2, destroyTime: 0.5, explosionResistance: 2.5, sound: "gravel"});
})(BlockRegistry || (BlockRegistry = {}));
var ItemBase = (function () {
    function ItemBase(stringID, name, icon) {
        this.maxStack = 64;
        this.maxDamage = 0;
        this.inCreative = false;
        this.stringID = stringID;
        this.id = IDRegistry.genItemID(stringID);
        this.setName(name || stringID);
        if (typeof icon == "string") {
            this.setIcon(icon);
        } else {
            if (typeof icon == "object") {
                this.setIcon(icon.name, icon.meta || icon.data);
            } else {
                this.setIcon("missing_icon");
            }
        }
    }
    ItemBase.prototype.setName = function (name) {
        this.name = name;
    };
    ItemBase.prototype.setIcon = function (texture, index) {
        if (index === void 0) {
            index = 0;
        }
        this.icon = {name: texture, meta: index};
    };
    ItemBase.prototype.setCategory = function (category) {
        Item.setCategory(this.id, category);
    };
    ItemBase.prototype.setMaxStack = function (maxStack) {
        this.maxStack = maxStack;
        this.item.setMaxStackSize(maxStack);
    };
    ItemBase.prototype.setMaxDamage = function (maxDamage) {
        this.maxDamage = maxDamage;
        this.item.setMaxDamage(maxDamage);
    };
    ItemBase.prototype.setHandEquipped = function (enabled) {
        this.item.setHandEquipped(enabled);
    };
    ItemBase.prototype.allowInOffHand = function () {
        this.item.setAllowedInOffhand(true);
    };
    ItemBase.prototype.setLiquidClip = function () {
        this.item.setLiquidClip(true);
    };
    ItemBase.prototype.setEnchantType = function (type, enchantability) {
        this.item.setEnchantType(type, enchantability);
    };
    ItemBase.prototype.setGlint = function (enabled) {
        this.item.setGlint(enabled);
    };
    ItemBase.prototype.addRepairItem = function (itemID) {
        this.item.addRepairItem(itemID);
    };
    ItemBase.prototype.setProperties = function (props) {
        this.item.setProperties(JSON.stringify(props));
    };
    ItemBase.prototype.setRarity = function (rarity) {
        ItemRegistry.setRarity(this.id, rarity);
    };
    ItemBase.prototype.addDefaultToCreative = function () {
        var _a;
        var wasInCreative = (_a = ItemRegistry.getInstanceOf(this.id)) === null || _a === void 0 ? void 0 : _a.inCreative;
        if (wasInCreative) {
            Logger.Log("Skipped duplicated adding to creative for item ".concat(this.stringID), "BlockEngine");
        } else {
            Item.addToCreative(this.id, 1, 0);
            this.inCreative = true;
        }
    };
    return ItemBase;
}());
var ItemCommon = (function (_super) {
    __extends(ItemCommon, _super);
    function ItemCommon(stringID, name, icon, inCreative) {
        if (inCreative === void 0) {
            inCreative = true;
        }
        var _this = _super.call(this, stringID, name, icon) || this;
        _this.item = Item.createItem(_this.stringID, _this.name, _this.icon, {isTech: true});
        _this.setCategory(ItemCategory.ITEMS);
        if (inCreative) {
            _this.addDefaultToCreative();
        }
        return _this;
    }
    return ItemCommon;
}(ItemBase));
var ItemFood = (function (_super) {
    __extends(ItemFood, _super);
    function ItemFood(stringID, name, icon, params, inCreative) {
        if (inCreative === void 0) {
            inCreative = true;
        }
        var _this = this;
        var _a;
        _this = _super.call(this, stringID, name, icon) || this;
        var foodProperties = {nutrition: params.food || 0, saturation_modifier: params.saturation || "normal", is_meat: params.isMeat || false, can_always_eat: params.canAlwaysEat || false, effects: params.effects || []};
        if (params.usingConvertsTo) {
            foodProperties["using_converts_to"] = params.usingConvertsTo;
        }
        (_a = params.useDuration) !== null && _a !== void 0 ? _a : (params.useDuration = 32);
        if (BlockEngine.getMainGameVersion() == 11) {
            _this.setProperties({use_duration: params.useDuration, food: foodProperties});
        } else {
            _this.setProperties({components: {"minecraft:use_duration": params.useDuration, "minecraft:food": foodProperties}});
        }
        _this.item.setUseAnimation(1);
        _this.item.setMaxUseDuration(params.useDuration);
        return _this;
    }
    ItemFood.prototype.onFoodEaten = function (item, food, saturation, player) {
    };
    return ItemFood;
}(ItemCommon));
Callback.addCallback("FoodEaten", function (food, saturation, player) {
    var item = Entity.getCarriedItem(player);
    var itemInstance = ItemRegistry.getInstanceOf(item.id);
    if (itemInstance && itemInstance.onFoodEaten) {
        itemInstance.onFoodEaten(item, food, saturation, player);
    }
});
var ItemThrowable = (function (_super) {
    __extends(ItemThrowable, _super);
    function ItemThrowable(stringID, name, icon, inCreative) {
        if (inCreative === void 0) {
            inCreative = true;
        }
        var _this = _super.call(this, stringID, name, icon) || this;
        _this.item = Item.createThrowableItem(_this.stringID, _this.name, _this.icon, {isTech: true});
        _this.setCategory(ItemCategory.ITEMS);
        if (inCreative) {
            _this.addDefaultToCreative();
        }
        Item.registerThrowableFunctionForID(_this.id, function (projectile, item, target) {
            _this.onProjectileHit(projectile, item, target);
        });
        return _this;
    }
    ItemThrowable.prototype.onProjectileHit = function (projectile, item, target) {
    };
    return ItemThrowable;
}(ItemBase));
var ItemArmor = (function (_super) {
    __extends(ItemArmor, _super);
    function ItemArmor(stringID, name, icon, params, inCreative) {
        if (inCreative === void 0) {
            inCreative = true;
        }
        var _this = _super.call(this, stringID, name, icon) || this;
        _this.armorType = params.type;
        _this.defence = params.defence;
        _this.setArmorTexture(params.texture);
        _this.item = Item.createArmorItem(_this.stringID, _this.name, _this.icon, {type: _this.armorType, armor: _this.defence, knockbackResist: params.knockbackResistance * 0.1125 || 0, durability: 0, texture: _this.texture, isTech: true});
        _this.setCategory(ItemCategory.EQUIPMENT);
        if (params.material) {
            _this.setMaterial(params.material);
        }
        if (inCreative) {
            _this.addDefaultToCreative();
        }
        ItemArmor.registerListeners(_this.id, _this);
        return _this;
    }
    ItemArmor.prototype.setArmorTexture = function (texture) {
        this.texture = texture;
    };
    ItemArmor.prototype.setMaterial = function (armorMaterial) {
        if (typeof armorMaterial == "string") {
            armorMaterial = ItemRegistry.getArmorMaterial(armorMaterial);
        }
        this.armorMaterial = armorMaterial;
        var index = Native.ArmorType[this.armorType];
        var maxDamage = armorMaterial.durabilityFactor * ItemArmor.maxDamageArray[index];
        this.setMaxDamage(maxDamage);
        if (armorMaterial.enchantability) {
            this.setEnchantType(Native.EnchantType[this.armorType], armorMaterial.enchantability);
        }
        if (armorMaterial.repairMaterial) {
            this.addRepairItem(armorMaterial.repairMaterial);
        }
    };
    ItemArmor.prototype.preventDamaging = function () {
        Armor.preventDamaging(this.id);
    };
    ItemArmor.registerListeners = function (id, armorFuncs) {
        if ("onHurt" in armorFuncs) {
            Armor.registerOnHurtListener(id, function (item, slot, player, type, value, attacker, bool1, bool2) {
                return armorFuncs.onHurt({attacker: attacker, type: type, damage: value, bool1: bool1, bool2: bool2}, item, slot, player);
            });
        }
        if ("onTick" in armorFuncs) {
            Armor.registerOnTickListener(id, function (item, slot, player) {
                return armorFuncs.onTick(item, slot, player);
            });
        }
        if ("onTakeOn" in armorFuncs) {
            Armor.registerOnTakeOnListener(id, function (item, slot, player) {
                armorFuncs.onTakeOn(item, slot, player);
            });
        }
        if ("onTakeOff" in armorFuncs) {
            Armor.registerOnTakeOffListener(id, function (item, slot, player) {
                armorFuncs.onTakeOff(item, slot, player);
            });
        }
    };
    ItemArmor.maxDamageArray = [11, 16, 15, 13];
    return ItemArmor;
}(ItemBase));
var ItemTool = (function (_super) {
    __extends(ItemTool, _super);
    function ItemTool(stringID, name, icon, toolMaterial, toolData, inCreative) {
        var _this = _super.call(this, stringID, name, icon, inCreative) || this;
        _this.handEquipped = false;
        _this.brokenId = 0;
        _this.damage = 1;
        _this.isWeapon = false;
        _this.blockTypes = [];
        _this.setMaxStack(1);
        _this.setCategory(ItemCategory.EQUIPMENT);
        if (typeof toolMaterial == "string") {
            toolMaterial = ItemRegistry.getToolMaterial(toolMaterial);
        }
        _this.toolMaterial = toolMaterial;
        if (toolData) {
            for (var key in toolData) {
                _this[key] = toolData[key];
            }
        }
        ToolAPI.registerTool(_this.id, _this.toolMaterial, _this.blockTypes, _this);
        if (_this.enchantType && toolMaterial.enchantability) {
            _this.setEnchantType(_this.enchantType, toolMaterial.enchantability);
        }
        if (toolMaterial.repairMaterial) {
            _this.addRepairItem(toolMaterial.repairMaterial);
        }
        if (_this.handEquipped) {
            _this.setHandEquipped(true);
        }
        return _this;
    }
    return ItemTool;
}(ItemCommon));
var ItemRegistry;
(function (ItemRegistry) {
    var items = {};
    var itemsRarity = {};
    var armorMaterials = {};
    function getType(id) {
        return IDRegistry.getIdInfo(id).split(":")[0];
    }
    ItemRegistry.getType = getType;
    function isBlock(id) {
        return getType(id) == "block";
    }
    ItemRegistry.isBlock = isBlock;
    function isItem(id) {
        return getType(id) == "item";
    }
    ItemRegistry.isItem = isItem;
    function isVanilla(id) {
        return !IDRegistry.getNameByID(id);
    }
    ItemRegistry.isVanilla = isVanilla;
    function getVanillaStringID(id) {
        return IDRegistry.getIdInfo(id).split(":")[1].split("#")[0];
    }
    ItemRegistry.getVanillaStringID = getVanillaStringID;
    function getInstanceOf(itemID) {
        var numericID = Item.getNumericId(itemID);
        return items[numericID] || null;
    }
    ItemRegistry.getInstanceOf = getInstanceOf;
    function getRarity(itemID) {
        var _a;
        return (_a = itemsRarity[itemID]) !== null && _a !== void 0 ? _a : EnumRarity.COMMON;
    }
    ItemRegistry.getRarity = getRarity;
    function getRarityColor(rarity) {
        if (rarity == EnumRarity.UNCOMMON) {
            return "\xa7e";
        }
        if (rarity == EnumRarity.RARE) {
            return "\xa7b";
        }
        if (rarity == EnumRarity.EPIC) {
            return "\xa7d";
        }
        return "";
    }
    ItemRegistry.getRarityColor = getRarityColor;
    function getItemRarityColor(itemID) {
        return getRarityColor(getRarity(itemID));
    }
    ItemRegistry.getItemRarityColor = getItemRarityColor;
    function setRarity(id, rarity, preventNameOverride) {
        var numericID = Item.getNumericId(id);
        itemsRarity[numericID] = rarity;
        if (!preventNameOverride && !Item.nameOverrideFunctions[numericID]) {
            Item.registerNameOverrideFunction(numericID, function (item, translation, name) {
                return getItemRarityColor(item.id) + translation;
            });
        }
    }
    ItemRegistry.setRarity = setRarity;
    function addArmorMaterial(name, material) {
        armorMaterials[name] = material;
    }
    ItemRegistry.addArmorMaterial = addArmorMaterial;
    function getArmorMaterial(name) {
        return armorMaterials[name];
    }
    ItemRegistry.getArmorMaterial = getArmorMaterial;
    function addToolMaterial(name, material) {
        ToolAPI.addToolMaterial(name, material);
    }
    ItemRegistry.addToolMaterial = addToolMaterial;
    function getToolMaterial(name) {
        return ToolAPI.toolMaterials[name];
    }
    ItemRegistry.getToolMaterial = getToolMaterial;
    function registerItem(itemInstance) {
        items[itemInstance.id] = itemInstance;
        registerItemFuncs(itemInstance.id, itemInstance);
        return itemInstance;
    }
    ItemRegistry.registerItem = registerItem;
    function registerItemFuncs(itemID, itemFuncs) {
        var numericID = Item.getNumericId(itemID);
        if ("onNameOverride" in itemFuncs) {
            Item.registerNameOverrideFunction(numericID, function (item, translation, name) {
                return getItemRarityColor(item.id) + itemFuncs.onNameOverride(item, translation, name);
            });
        }
        if ("onIconOverride" in itemFuncs) {
            Item.registerIconOverrideFunction(numericID, function (item, isModUi) {
                return itemFuncs.onIconOverride(item, isModUi);
            });
        }
        if ("onItemUse" in itemFuncs) {
            Item.registerUseFunction(numericID, function (coords, item, block, player) {
                itemFuncs.onItemUse(coords, new ItemStack(item), block, player);
            });
        }
        if ("onNoTargetUse" in itemFuncs) {
            Item.registerNoTargetUseFunction(numericID, function (item, player) {
                itemFuncs.onNoTargetUse(new ItemStack(item), player);
            });
        }
        if ("onUsingReleased" in itemFuncs) {
            Item.registerUsingReleasedFunction(numericID, function (item, ticks, player) {
                itemFuncs.onUsingReleased(new ItemStack(item), ticks, player);
            });
        }
        if ("onUsingComplete" in itemFuncs) {
            Item.registerUsingCompleteFunction(numericID, function (item, player) {
                itemFuncs.onUsingComplete(new ItemStack(item), player);
            });
        }
        if ("onDispense" in itemFuncs) {
            Item.registerDispenseFunction(numericID, function (coords, item, blockSource, slot) {
                var region = new WorldRegion(blockSource);
                itemFuncs.onDispense(coords, new ItemStack(item), region, slot);
            });
        }
    }
    ItemRegistry.registerItemFuncs = registerItemFuncs;
    function createItem(stringID, params) {
        var item;
        if (params.type == "food") {
            return createFood(stringID, params);
        } else {
            if (params.type == "throwable") {
                item = new ItemThrowable(stringID, params.name, params.icon, params.inCreative);
            } else {
                item = new ItemCommon(stringID, params.name, params.icon, params.inCreative);
            }
        }
        item.setCategory(params.category || ItemCategory.ITEMS);
        if (params.stack) {
            item.setMaxStack(params.stack);
        }
        if (params.maxDamage) {
            item.setMaxDamage(params.maxDamage);
        }
        if (params.handEquipped) {
            item.setHandEquipped(true);
        }
        if (params.allowedInOffhand) {
            item.allowInOffHand();
        }
        if (params.glint) {
            item.setGlint(true);
        }
        if (params.enchant) {
            item.setEnchantType(params.enchant.type, params.enchant.value);
        }
        if (params.rarity) {
            item.setRarity(params.rarity);
        }
        items[item.id] = item;
        return item;
    }
    ItemRegistry.createItem = createItem;
    function createFood(stringID, params) {
        var item = new ItemFood(stringID, params.name, params.icon, params, params.inCreative);
        if (params.stack) {
            item.setMaxStack(params.stack);
        }
        if (params.category) {
            item.setCategory(params.category);
        }
        if (params.glint) {
            item.setGlint(true);
        }
        if (params.rarity) {
            item.setRarity(params.rarity);
        }
        items[item.id] = item;
        return item;
    }
    ItemRegistry.createFood = createFood;
    function createArmor(stringID, params) {
        var item = new ItemArmor(stringID, params.name, params.icon, params, params.inCreative);
        registerItem(item);
        if (params.category) {
            item.setCategory(params.category);
        }
        if (params.glint) {
            item.setGlint(true);
        }
        if (params.rarity) {
            item.setRarity(params.rarity);
        }
        return item;
    }
    ItemRegistry.createArmor = createArmor;
    function createTool(stringID, params, toolData) {
        var item = new ItemTool(stringID, params.name, params.icon, params.material, toolData, params.inCreative);
        registerItem(item);
        if (params.category) {
            item.setCategory(params.category);
        }
        if (params.glint) {
            item.setGlint(true);
        }
        if (params.rarity) {
            item.setRarity(params.rarity);
        }
        return item;
    }
    ItemRegistry.createTool = createTool;
})(ItemRegistry || (ItemRegistry = {}));
var ItemStack = (function () {
    function ItemStack(item, count, data, extra) {
        if (typeof item == "object") {
            this.id = item.id;
            this.data = item.data;
            this.count = item.count;
            this.extra = item.extra || null;
        } else {
            this.id = item || 0;
            this.data = data || 0;
            this.count = count || 0;
            this.extra = extra || null;
        }
    }
    ItemStack.prototype.getItemInstance = function () {
        return ItemRegistry.getInstanceOf(this.id);
    };
    ItemStack.prototype.copy = function () {
        var _a;
        return new ItemStack(this.id, this.count, this.data, (_a = this.extra) === null || _a === void 0 ? void 0 : _a.copy());
    };
    ItemStack.prototype.getMaxStack = function () {
        return Item.getMaxStack(this.id);
    };
    ItemStack.prototype.getMaxDamage = function () {
        return Item.getMaxDamage(this.id);
    };
    ItemStack.prototype.isEmpty = function () {
        return this.id == 0 && this.count == 0 && this.data == 0 && this.extra == null;
    };
    ItemStack.prototype.decrease = function (count) {
        this.count -= count;
        if (this.count <= 0) {
            this.clear();
        }
    };
    ItemStack.prototype.clear = function () {
        this.id = this.data = this.count = 0;
        this.extra = null;
    };
    ItemStack.prototype.applyDamage = function (damage) {
        var unbreakingLevel = this.getEnchantLevel(Native.Enchantment.UNBREAKING);
        if (Math.random() < 1 / (unbreakingLevel + 1)) {
            this.data += damage;
        }
        if (this.data >= this.getMaxDamage()) {
            var tool = ToolAPI.getToolData(this.id);
            if (tool && tool.brokenId) {
                this.id = tool.brokenId;
                this.data = 0;
                this.extra = null;
            } else {
                this.clear();
            }
        }
    };
    ItemStack.prototype.getCustomName = function () {
        var _a;
        return ((_a = this.extra) === null || _a === void 0 ? void 0 : _a.getCustomName()) || "";
    };
    ItemStack.prototype.setCustomName = function (name) {
        var _a;
        (_a = this.extra) !== null && _a !== void 0 ? _a : (this.extra = new ItemExtraData());
        this.extra.setCustomName(name);
    };
    ItemStack.prototype.isEnchanted = function () {
        var _a;
        return ((_a = this.extra) === null || _a === void 0 ? void 0 : _a.isEnchanted()) || false;
    };
    ItemStack.prototype.addEnchant = function (id, level) {
        var _a;
        (_a = this.extra) !== null && _a !== void 0 ? _a : (this.extra = new ItemExtraData());
        this.extra.addEnchant(id, level);
    };
    ItemStack.prototype.removeEnchant = function (id) {
        var _a;
        (_a = this.extra) === null || _a === void 0 ? void 0 : _a.removeEnchant(id);
    };
    ItemStack.prototype.removeAllEnchants = function () {
        var _a;
        (_a = this.extra) === null || _a === void 0 ? void 0 : _a.removeAllEnchants();
    };
    ItemStack.prototype.getEnchantLevel = function (id) {
        var _a;
        return ((_a = this.extra) === null || _a === void 0 ? void 0 : _a.getEnchantLevel(id)) || 0;
    };
    ItemStack.prototype.getEnchants = function () {
        var _a;
        return ((_a = this.extra) === null || _a === void 0 ? void 0 : _a.getEnchants()) || null;
    };
    return ItemStack;
}());
var ToolType;
(function (ToolType) {
    ToolType.SWORD = {__flag: "__sword", handEquipped: true, isWeapon: true, enchantType: Native.EnchantType.weapon, damage: 4, blockTypes: ["fibre", "plant"], calcDestroyTime: function (item, coords, block, params, destroyTime, enchant) {
        if (block.id == 30) {
            return 0.08;
        }
        var material = ToolAPI.getBlockMaterialName(block.id);
        if (material == "plant" || block.id == 86 || block.id == 91 || block.id == 103 || block.id == 127 || block.id == 410) {
            return params.base / 1.5;
        }
        return destroyTime;
    }};
    ToolType.SHOVEL = {__flag: "__shovel", handEquipped: true, enchantType: Native.EnchantType.shovel, damage: 2, blockTypes: ["dirt"], onItemUse: function (coords, item, block, player) {
        if (block.id == 2 && coords.side == 1) {
            var region = WorldRegion.getForActor(player);
            region.setBlock(coords, 198, 0);
            region.playSound(coords.x + 0.5, coords.y + 1, coords.z + 0.5, "step.grass", 0.5, 0.8);
            item.applyDamage(1);
            Entity.setCarriedItem(player, item.id, item.count, item.data, item.extra);
        }
    }};
    ToolType.PICKAXE = {__flag: "__pickaxe", handEquipped: true, enchantType: Native.EnchantType.pickaxe, damage: 2, blockTypes: ["stone"]};
    ToolType.AXE = {__flag: "__axe", handEquipped: true, enchantType: Native.EnchantType.axe, damage: 3, blockTypes: ["wood"], onItemUse: function (coords, item, tile, player) {
        var logID = this.getStrippedLogId(tile);
        if (logID) {
            var region = WorldRegion.getForActor(player);
            if (BlockEngine.getMainGameVersion() >= 16) {
                var block = region.getBlock(coords);
                var states = {"pillar_axis": block.getState(EBlockStates.PILLAR_AXIS)};
                if (logID == VanillaTileID.stripped_warped_stem || logID == VanillaTileID.stripped_crimson_stem) {
                    states["deprecated"] = 0;
                }
                var block2 = new BlockState(logID, states);
                region.setBlock(coords, block2);
            } else {
                region.setBlock(coords, logID, 0);
            }
            item.applyDamage(1);
            Entity.setCarriedItem(player, item.id, item.count, item.data, item.extra);
        }
    }, getStrippedLogId: function (block) {
        switch (block.id) {
          case 17:
            if (block.data == 0) {
                return VanillaTileID.stripped_oak_log;
            }
            if (block.data == 1) {
                return VanillaTileID.stripped_spruce_log;
            }
            if (block.data == 2) {
                return VanillaTileID.stripped_birch_log;
            }
            return VanillaTileID.stripped_jungle_log;
          case 162:
            if (block.data == 0) {
                return VanillaTileID.stripped_acacia_log;
            }
            return VanillaTileID.stripped_dark_oak_log;
          case VanillaTileID.warped_stem:
            return VanillaTileID.stripped_warped_stem;
          case VanillaTileID.crimson_stem:
            return VanillaTileID.stripped_crimson_stem;
        }
    }};
    ToolType.HOE = {__flag: "__hoe", handEquipped: true, enchantType: Native.EnchantType.pickaxe, damage: 2, blockTypes: ["plant"], onItemUse: function (coords, item, block, player) {
        if ((block.id == 2 || block.id == 3) && coords.side != 0) {
            var region = WorldRegion.getForActor(player);
            if (region.getBlockId(coords.x, coords.y + 1, coords.z) != 0) {
                return;
            }
            region.setBlock(coords, 60, 0);
            region.playSound(coords.x + 0.5, coords.y + 1, coords.z + 0.5, "step.gravel", 1, 0.8);
            item.applyDamage(1);
            Entity.setCarriedItem(player, item.id, item.count, item.data, item.extra);
        }
    }};
    ToolType.SHEARS = {__flag: "__shears", blockTypes: ["plant", "fibre", "wool"], modifyEnchant: function (enchantData, item, coords, block) {
        if (block) {
            var material = ToolAPI.getBlockMaterialName(block.id);
            if (material == "fibre" || material == "plant") {
                enchantData.silk = true;
            }
        }
    }, calcDestroyTime: function (item, coords, block, params, destroyTime, enchant) {
        if (block.id == 30) {
            return 0.08;
        }
        return destroyTime;
    }, onDestroy: function (item, coords, block, player) {
        if (block.id == 31 || block.id == 32 || block.id == 18 || block.id == 161) {
            var region = WorldRegion.getForActor(player);
            region.destroyBlock(coords);
            region.dropItem(coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, block.id, 1, block.data);
        }
        return false;
    }};
})(ToolType || (ToolType = {}));
ToolAPI.addBlockMaterial("wool", 1.5);
ToolAPI.registerBlockMaterial(35, "wool");
var IDConverter;
(function (IDConverter) {
    var oldIDPairs = {};
    function registerOld(stringId, oldId, oldData) {
        oldIDPairs[stringId] = {id: oldId, data: oldData};
    }
    IDConverter.registerOld = registerOld;
    function getStack(stringId, count, data, extra) {
        if (count === void 0) {
            count = 1;
        }
        if (data === void 0) {
            data = 0;
        }
        if (extra === void 0) {
            extra = null;
        }
        if (BlockEngine.getMainGameVersion() == 11) {
            var oldPair = oldIDPairs[stringId];
            if (oldPair) {
                return new ItemStack(oldPair.id, count, oldPair.data, extra);
            }
        }
        return new ItemStack(getNumericId(stringId), count, data, extra);
    }
    IDConverter.getStack = getStack;
    function getIDData(stringId) {
        if (BlockEngine.getMainGameVersion() == 11 && oldIDPairs.hasOwnProperty(stringId)) {
            return oldIDPairs[stringId];
        }
        return {id: getNumericId(stringId), data: 0};
    }
    IDConverter.getIDData = getIDData;
    function getID(stringId) {
        if (BlockEngine.getMainGameVersion() == 11 && oldIDPairs.hasOwnProperty(stringId)) {
            return oldIDPairs[stringId].id;
        }
        return getNumericId(stringId);
    }
    IDConverter.getID = getID;
    function getData(stringId) {
        if (BlockEngine.getMainGameVersion() == 11 && oldIDPairs.hasOwnProperty(stringId)) {
            return oldIDPairs[stringId].data;
        }
        return 0;
    }
    IDConverter.getData = getData;
    function getNumericId(stringId) {
        return VanillaItemID[stringId] || VanillaBlockID[stringId];
    }
})(IDConverter || (IDConverter = {}));
IDConverter.registerOld("charcoal", 263, 1);
IDConverter.registerOld("oak_boat", 333, 0);
IDConverter.registerOld("spruce_boat", 333, 1);
IDConverter.registerOld("birch_boat", 333, 2);
IDConverter.registerOld("jungle_boat", 333, 3);
IDConverter.registerOld("acacia_boat", 333, 4);
IDConverter.registerOld("dark_oak_boat", 333, 5);
IDConverter.registerOld("milk_bucket", 325, 1);
IDConverter.registerOld("water_bucket", 325, 8);
IDConverter.registerOld("lava_bucket", 325, 10);
IDConverter.registerOld("ink_sac", 351, 0);
IDConverter.registerOld("red_dye", 351, 1);
IDConverter.registerOld("green_dye", 351, 2);
IDConverter.registerOld("cocoa_beans", 351, 3);
IDConverter.registerOld("lapis_lazuli", 351, 4);
IDConverter.registerOld("purple_dye", 351, 5);
IDConverter.registerOld("cyan_dye", 351, 6);
IDConverter.registerOld("light_gray_dye", 351, 7);
IDConverter.registerOld("gray_dye", 351, 8);
IDConverter.registerOld("pink_dye", 351, 9);
IDConverter.registerOld("lime_dye", 351, 10);
IDConverter.registerOld("yellow_dye", 351, 11);
IDConverter.registerOld("light_blue_dye", 351, 12);
IDConverter.registerOld("magenta_dye", 351, 13);
IDConverter.registerOld("orange_dye", 351, 14);
IDConverter.registerOld("bone_meal", 351, 15);
IDConverter.registerOld("black_dye", 351, 16);
IDConverter.registerOld("brown_dye", 351, 17);
IDConverter.registerOld("blue_dye", 351, 18);
IDConverter.registerOld("white_dye", 351, 19);
IDConverter.registerOld("cooked_cod", VanillaItemID.cooked_fish, 0);
IDConverter.registerOld("cod", VanillaItemID.fish, 0);
IDConverter.registerOld("tropical_fish", VanillaItemID.clownfish, 0);
IDConverter.registerOld("melon_slice", VanillaItemID.melon, 0);
IDConverter.registerOld("leather_horse_armor", VanillaItemID.horsearmorleather, 0);
IDConverter.registerOld("iron_horse_armor", VanillaItemID.horsearmoriron, 0);
IDConverter.registerOld("golden_horse_armor", VanillaItemID.horsearmorgold, 0);
IDConverter.registerOld("diamond_horse_armor", VanillaItemID.horsearmordiamond, 0);
IDConverter.registerOld("mutton", VanillaItemID.muttonraw, 0);
IDConverter.registerOld("cooked_mutton", VanillaItemID.muttoncooked, 0);
IDConverter.registerOld("totem_of_undying", VanillaItemID.totem, 0);
IDConverter.registerOld("music_disc_13", VanillaItemID.record_13, 0);
IDConverter.registerOld("music_disc_cat", VanillaItemID.record_cat, 0);
IDConverter.registerOld("music_disc_blocks", VanillaItemID.record_blocks, 0);
IDConverter.registerOld("music_disc_chirp", VanillaItemID.record_chirp, 0);
IDConverter.registerOld("music_disc_far", VanillaItemID.record_far, 0);
IDConverter.registerOld("music_disc_mall", VanillaItemID.record_mall, 0);
IDConverter.registerOld("music_disc_mellohi", VanillaItemID.record_mellohi, 0);
IDConverter.registerOld("music_disc_stal", VanillaItemID.record_stal, 0);
IDConverter.registerOld("music_disc_strad", VanillaItemID.record_strad, 0);
IDConverter.registerOld("music_disc_ward", VanillaItemID.record_ward, 0);
IDConverter.registerOld("music_disc_11", VanillaItemID.record_11, 0);
IDConverter.registerOld("music_disc_wait", VanillaItemID.record_wait, 0);
var TileEntityBase = (function () {
    function TileEntityBase() {
        this.useNetworkItemContainer = true;
        this._clickPrevented = false;
        this.client = {load: this.clientLoad, unload: this.clientUnload, tick: this.clientTick, events: {}, containerEvents: {}};
        this.events = {};
        this.containerEvents = {};
        for (var propertyName in this.__clientMethods) {
            this.client[propertyName] = this[propertyName];
        }
        for (var eventName in this.__networkEvents) {
            var side = this.__networkEvents[eventName];
            var target = (side == Side.Client) ? this.client.events : this.events;
            target[eventName] = this[eventName];
        }
        for (var eventName in this.__containerEvents) {
            var side = this.__containerEvents[eventName];
            var target = (side == Side.Client) ? this.client.containerEvents : this.containerEvents;
            target[eventName] = this[eventName];
        }
        delete this.__clientMethods;
        delete this.__networkEvents;
        delete this.__containerEvents;
    }
    TileEntityBase.prototype.created = function () {
        this.onCreate();
    };
    TileEntityBase.prototype.init = function () {
        this.region = new WorldRegion(this.blockSource);
        this.onInit();
    };
    TileEntityBase.prototype.load = function () {
        this.onLoad();
    };
    TileEntityBase.prototype.unload = function () {
        this.onUnload();
    };
    TileEntityBase.prototype.tick = function () {
        this.onTick();
    };
    TileEntityBase.prototype.onCreate = function () {
    };
    TileEntityBase.prototype.onInit = function () {
    };
    TileEntityBase.prototype.onLoad = function () {
    };
    TileEntityBase.prototype.onUnload = function () {
    };
    TileEntityBase.prototype.onTick = function () {
    };
    TileEntityBase.prototype.clientLoad = function () {
    };
    TileEntityBase.prototype.clientUnload = function () {
    };
    TileEntityBase.prototype.clientTick = function () {
    };
    TileEntityBase.prototype.onCheckerTick = function (isInitialized, isLoaded, wasLoaded) {
    };
    TileEntityBase.prototype.getScreenName = function (player, coords) {
        return "main";
    };
    TileEntityBase.prototype.getScreenByName = function (screenName, container) {
        return null;
    };
    TileEntityBase.prototype.onItemUse = function (coords, item, player) {
        return false;
    };
    TileEntityBase.prototype.preventClick = function () {
        this._clickPrevented = true;
    };
    TileEntityBase.prototype.onItemClick = function (id, count, data, coords, player, extra) {
        if (!this.__initialized) {
            if (!this._runInit()) {
                return false;
            }
        }
        this._clickPrevented = false;
        if (this.onItemUse(coords, new ItemStack(id, count, data, extra), player) || this._clickPrevented) {
            return this._clickPrevented;
        }
        if (Entity.getSneaking(player)) {
            return false;
        }
        var screenName = this.getScreenName(player, coords);
        if (screenName && this.getScreenByName(screenName, this.container)) {
            var client = Network.getClientForPlayer(player);
            if (client) {
                this.container.openFor(client, screenName);
                return true;
            }
        }
        return false;
    };
    TileEntityBase.prototype.destroyBlock = function (coords, player) {
    };
    TileEntityBase.prototype.redstone = function (params) {
        this.onRedstoneUpdate(params.power);
    };
    TileEntityBase.prototype.onRedstoneUpdate = function (signal) {
    };
    TileEntityBase.prototype.projectileHit = function (coords, target) {
    };
    TileEntityBase.prototype.destroy = function () {
        return false;
    };
    TileEntityBase.prototype.selfDestroy = function () {
        TileEntity.destroyTileEntity(this);
    };
    TileEntityBase.prototype.requireMoreLiquid = function (liquid, amount) {
    };
    TileEntityBase.prototype.updateLiquidScale = function (scale, liquid) {
        this.container.sendEvent("setLiquidScale", {scale: scale, liquid: liquid, amount: this.liquidStorage.getRelativeAmount(liquid)});
    };
    TileEntityBase.prototype.setLiquidScale = function (container, window, content, data) {
        var gui = container.getUiAdapter();
        if (gui) {
            var size = gui.getBinding(data.scale, "element_rect");
            if (!size) {
                return;
            }
            var texture = LiquidRegistry.getLiquidUITexture(data.liquid, size.width(), size.height());
            gui.setBinding(data.scale, "texture", texture);
            gui.setBinding(data.scale, "value", data.amount);
        }
    };
    __decorate([BlockEngine.Decorators.ContainerEvent(Side.Client)], TileEntityBase.prototype, "setLiquidScale", null);
    return TileEntityBase;
}());
var LiquidItemRegistry;
(function (LiquidItemRegistry) {
    LiquidItemRegistry.EmptyByFull = {};
    LiquidItemRegistry.FullByEmpty = {};
    function registerItem(liquid, emptyId, fullId, storage) {
        LiquidItemRegistry.EmptyByFull[fullId] = {id: emptyId, liquid: liquid, storage: storage};
        LiquidItemRegistry.FullByEmpty[emptyId + ":" + liquid] = {id: fullId, storage: storage};
        Item.setMaxDamage(fullId, storage);
        if (storage == 1000) {
            LiquidRegistry.registerItem(liquid, {id: emptyId, data: 0}, {id: fullId, data: 0});
        }
    }
    LiquidItemRegistry.registerItem = registerItem;
    function getItemLiquid(id, data) {
        var empty = LiquidItemRegistry.EmptyByFull[id];
        if (empty) {
            return empty.liquid;
        }
        return LiquidRegistry.getItemLiquid(id, data);
    }
    LiquidItemRegistry.getItemLiquid = getItemLiquid;
    function getEmptyItem(id, data) {
        var emptyData = LiquidItemRegistry.EmptyByFull[id];
        if (emptyData) {
            var amount = emptyData.storage - data;
            return {id: emptyData.id, data: 0, liquid: emptyData.liquid, amount: amount, storage: emptyData.storage};
        }
        var empty = LiquidRegistry.getEmptyItem(id, data);
        if (empty) {
            return {id: empty.id, data: empty.data, liquid: empty.liquid, amount: 1000};
        }
        return null;
    }
    LiquidItemRegistry.getEmptyItem = getEmptyItem;
    function getFullItem(id, data, liquid) {
        var emptyData = LiquidItemRegistry.EmptyByFull[id];
        if (emptyData && emptyData.liquid == liquid && data > 0) {
            return {id: id, data: 0, amount: data, storage: emptyData.storage};
        }
        var fullData = LiquidItemRegistry.FullByEmpty[id + ":" + liquid];
        if (fullData) {
            return {id: fullData.id, data: 0, amount: fullData.storage, storage: fullData.storage};
        }
        var full = LiquidRegistry.getFullItem(id, data, liquid);
        if (full) {
            return {id: full.id, data: full.data, amount: 1000};
        }
        return null;
    }
    LiquidItemRegistry.getFullItem = getFullItem;
})(LiquidItemRegistry || (LiquidItemRegistry = {}));
var BlockEngine;
(function (BlockEngine) {
    var LiquidTank = (function () {
        function LiquidTank(tileEntity, name, limit, liquids) {
            this.name = name;
            this.limit = limit;
            if (liquids) {
                this.setValidLiquids(liquids);
            }
            this.setParent(tileEntity);
        }
        LiquidTank.prototype.setParent = function (tileEntity) {
            this.tileEntity = tileEntity;
            var liquidData = tileEntity.data[this.name] || {liquid: null, amount: 0};
            tileEntity.data[this.name] = this.data = liquidData;
        };
        LiquidTank.prototype.getLiquidStored = function () {
            return this.data.liquid;
        };
        LiquidTank.prototype.getLimit = function () {
            return this.limit;
        };
        LiquidTank.prototype.isValidLiquid = function (liquid) {
            if (!this.liquids) {
                return true;
            }
            return this.liquids[liquid] || false;
        };
        LiquidTank.prototype.setValidLiquids = function (liquids) {
            this.liquids = {};
            for (var _i = 0, liquids_1 = liquids; _i < liquids_1.length; _i++) {
                var name = liquids_1[_i];
                this.liquids[name] = true;
            }
        };
        LiquidTank.prototype.getAmount = function (liquid) {
            if (!liquid || this.data.liquid == liquid) {
                return this.data.amount;
            }
            return 0;
        };
        LiquidTank.prototype.setAmount = function (liquid, amount) {
            this.data.liquid = liquid;
            this.data.amount = amount;
        };
        LiquidTank.prototype.getRelativeAmount = function () {
            return this.data.amount / this.limit;
        };
        LiquidTank.prototype.addLiquid = function (liquid, amount) {
            if (!this.data.liquid || this.data.liquid == liquid) {
                this.data.liquid = liquid;
                var add = Math.min(amount, this.limit - this.data.amount);
                this.data.amount += add;
                return amount - add;
            }
            return 0;
        };
        LiquidTank.prototype.getLiquid = function (liquid, amount) {
            if (amount == undefined) {
                amount = liquid;
                liquid = null;
            }
            if (!liquid || this.data.liquid == liquid) {
                var got = Math.min(amount, this.data.amount);
                this.data.amount -= got;
                if (this.data.amount == 0) {
                    this.data.liquid = null;
                }
                return got;
            }
            return 0;
        };
        LiquidTank.prototype.isFull = function () {
            return this.data.amount >= this.limit;
        };
        LiquidTank.prototype.isEmpty = function () {
            return this.data.amount <= 0;
        };
        LiquidTank.prototype.addLiquidToItem = function (inputSlot, outputSlot) {
            var liquid = this.getLiquidStored();
            if (!liquid) {
                return false;
            }
            var amount = this.getAmount(liquid);
            if (amount > 0) {
                var full = LiquidItemRegistry.getFullItem(inputSlot.id, inputSlot.data, liquid);
                if (full && (outputSlot.id == full.id && outputSlot.data == full.data && outputSlot.count < Item.getMaxStack(full.id) || outputSlot.id == 0)) {
                    if (amount >= full.amount) {
                        this.getLiquid(full.amount);
                        inputSlot.setSlot(inputSlot.id, inputSlot.count - 1, inputSlot.data);
                        inputSlot.validate();
                        outputSlot.setSlot(full.id, outputSlot.count + 1, full.data);
                        return true;
                    }
                    if (inputSlot.count == 1 && full.storage) {
                        if (inputSlot.id == full.id) {
                            amount = this.getLiquid(full.amount);
                            inputSlot.setSlot(inputSlot.id, 1, inputSlot.data - amount);
                        } else {
                            amount = this.getLiquid(full.storage);
                            inputSlot.setSlot(full.id, 1, full.storage - amount);
                        }
                        return true;
                    }
                }
            }
            return false;
        };
        LiquidTank.prototype.getLiquidFromItem = function (inputSlot, outputSlot) {
            var liquid = this.getLiquidStored();
            var empty = LiquidItemRegistry.getEmptyItem(inputSlot.id, inputSlot.data);
            if (empty && (!liquid && this.isValidLiquid(empty.liquid) || empty.liquid == liquid) && !this.isFull()) {
                if (outputSlot.id == empty.id && outputSlot.data == empty.data && outputSlot.count < Item.getMaxStack(empty.id) || outputSlot.id == 0) {
                    var freeAmount = this.getLimit() - this.getAmount();
                    if (freeAmount >= empty.amount) {
                        this.addLiquid(empty.liquid, empty.amount);
                        inputSlot.setSlot(inputSlot.id, inputSlot.count - 1, inputSlot.data);
                        inputSlot.validate();
                        outputSlot.setSlot(empty.id, outputSlot.count + 1, empty.data);
                        return true;
                    }
                    if (inputSlot.count == 1 && empty.storage) {
                        var amount = Math.min(freeAmount, empty.amount);
                        this.addLiquid(empty.liquid, amount);
                        inputSlot.setSlot(inputSlot.id, 1, inputSlot.data + amount);
                        return true;
                    }
                }
            }
            return false;
        };
        LiquidTank.prototype.updateUiScale = function (scale) {
            var container = this.tileEntity.container;
            if (container.isLegacyContainer()) {
                this.tileEntity.liquidStorage._setContainerScale(container, scale, this.data.liquid, this.getRelativeAmount());
            } else {
                container.sendEvent("setLiquidScale", {scale: scale, liquid: this.data.liquid, amount: this.getRelativeAmount()});
            }
        };
        return LiquidTank;
    }());
    BlockEngine.LiquidTank = LiquidTank;
})(BlockEngine || (BlockEngine = {}));
EXPORT("ItemStack", ItemStack);
EXPORT("Vector3", Vector3);
EXPORT("WorldRegion", WorldRegion);
EXPORT("PlayerEntity", PlayerEntity);
EXPORT("BlockBase", BlockBase);
EXPORT("BlockRotative", BlockRotative);
EXPORT("TileEntityBase", TileEntityBase);
EXPORT("ItemCommon", ItemCommon);
EXPORT("ItemFood", ItemFood);
EXPORT("ItemThrowable", ItemThrowable);
EXPORT("ItemArmor", ItemArmor);
EXPORT("ItemTool", ItemTool);
EXPORT("ToolType", ToolType);
EXPORT("Side", Side);
EXPORT("ItemCategory", ItemCategory);
EXPORT("EnumRarity", EnumRarity);
EXPORT("MiningLevel", MiningLevel);
EXPORT("BlockEngine", BlockEngine);
EXPORT("BlockModeler", BlockModeler);
EXPORT("BlockRegistry", BlockRegistry);
EXPORT("ItemRegistry", ItemRegistry);
EXPORT("LiquidItemRegistry", LiquidItemRegistry);
EXPORT("EntityCustomData", EntityCustomData);
EXPORT("IDConverter", IDConverter);

