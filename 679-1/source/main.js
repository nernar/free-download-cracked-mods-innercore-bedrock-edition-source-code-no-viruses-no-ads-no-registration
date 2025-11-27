var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
IMPORT("Gears");
var DEBUG = true;
// @ts-ignore
var Color = Gears.Graphics.Color;
var Vector3 = Gears.Geometry.Vector3;
var Vector2 = Gears.Geometry.Vector2;
var ItemStack = Gears.ItemStack;
var _Item = Item;
var _Block = Block;
var _Particles = Particles;
var _Player = Player;
var Random = java.util.Random;
var BlockActor = Gears.BlockActor;
var ItemRegistry = Gears.ItemRegistry;
var BlockRegistry = Gears.BlockRegistry;
var ItemActor = Gears.ItemActor;
var Side = Gears.Side;
var Chunk = Gears.Chunk;
var Biome = Gears.World.Biome;
function range(min, max) {
    return function (target, key) {
        var localValue;
        var getter = function () { return localValue; };
        var setter = function (newValue) {
            if (DEBUG && newValue < min && newValue > max)
                throw newValue + " is not in range (" + min + ", " + max + ")";
            localValue = Math.min(max, Math.max(min, newValue));
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
var AspectList = /** @class */ (function () {
    function AspectList() {
        this.map = {};
    }
    AspectList.prototype.put = function (aspect, amount) {
        if (amount === void 0) { amount = 1; }
        if (amount <= 0)
            return this;
        this.map[Aspect.getKey(aspect)] = amount;
        return this;
    };
    AspectList.prototype.get = function (aspect) {
        var _a;
        return (_a = this.map[Aspect.getKey(aspect)]) !== null && _a !== void 0 ? _a : 0;
    };
    AspectList.prototype.has = function (aspect) {
        return !!this.map[Aspect.getKey(aspect)];
    };
    AspectList.prototype.toList = function () {
        var aspects = [];
        for (var key in this.map) {
            aspects.push({
                aspect: Aspect[key],
                amount: this.map[key]
            });
        }
        return aspects;
    };
    AspectList.prototype.count = function () {
        return Object.keys(this.map).length;
    };
    return AspectList;
}());
/// <reference path="AspectList.ts"/>
var Aspect = /** @class */ (function () {
    function Aspect(name, color) {
        this.name = name;
        this.color = color;
        Aspect.all.push(this);
    }
    Object.defineProperty(Aspect.prototype, "capitalizedName", {
        get: function () {
            return this.name[0].toUpperCase() + this.name.substring(1, this.name.length);
        },
        enumerable: false,
        configurable: true
    });
    Aspect.all = [];
    return Aspect;
}());
var PrimalAspect = /** @class */ (function (_super) {
    __extends(PrimalAspect, _super);
    function PrimalAspect(name, color, chatColor) {
        var _this = _super.call(this, name, color) || this;
        _this.name = name;
        _this.color = color;
        _this.chatColor = chatColor;
        PrimalAspect.all.push(_this);
        return _this;
    }
    PrimalAspect.all = [];
    return PrimalAspect;
}(Aspect));
var ComplexAspect = /** @class */ (function (_super) {
    __extends(ComplexAspect, _super);
    function ComplexAspect(name, color, recipe) {
        var _this = _super.call(this, name, color) || this;
        _this.name = name;
        _this.color = color;
        _this.recipe = recipe;
        ComplexAspect.all.push(_this);
        return _this;
    }
    ComplexAspect.all = [];
    return ComplexAspect;
}(Aspect));
(function (Aspect) {
    Aspect.AIR = new PrimalAspect("aer", Color.parse("#ffff7e"), Gears.ChatColor.YELLOW);
    Aspect.EARTH = new PrimalAspect("terra", Color.parse("#56c000"), Gears.ChatColor.GREEN);
    Aspect.FIRE = new PrimalAspect("ignis", Color.parse("#ff5a01"), Gears.ChatColor.LIGHT_RED);
    Aspect.WATER = new PrimalAspect("aqua", Color.parse("#3cd4fc"), Gears.ChatColor.DARK_AQUA);
    Aspect.ORDER = new PrimalAspect("ordo", Color.parse("#d5d4ec"), Gears.ChatColor.GRAY);
    Aspect.ENTROPY = new PrimalAspect("perditio", Color.parse("#404040"), Gears.ChatColor.DARK_GRAY);
    Aspect.VOID = new ComplexAspect("vacuos", Color.parse("#888888"), [Aspect.AIR, Aspect.ENTROPY]);
    Aspect.LIGHT = new ComplexAspect("lux", Color.parse("#ffffc0"), [Aspect.AIR, Aspect.FIRE]);
    Aspect.MOTION = new ComplexAspect("motus", Color.parse("#cdccf4"), [Aspect.AIR, Aspect.ORDER]);
    // export const COLD = new ComplexAspect("gelum", Color.parse("#e1ffff"), [FIRE, ENTROPY]);
    Aspect.CRYSTAL = new ComplexAspect("vitreus", Color.parse("#80ffff"), [Aspect.EARTH, Aspect.AIR]);
    Aspect.METAL = new ComplexAspect("metallum", Color.parse("#b5b5cd"), [Aspect.EARTH, Aspect.ORDER]);
    Aspect.LIFE = new ComplexAspect("victus", Color.parse("#de0005"), [Aspect.EARTH, Aspect.WATER]);
    Aspect.DEATH = new ComplexAspect("mortuus", Color.parse("#6a0005"), [Aspect.WATER, Aspect.ENTROPY]);
    Aspect.ENERGY = new ComplexAspect("potentia", Color.parse("#c0ffff"), [Aspect.ORDER, Aspect.FIRE]);
    Aspect.EXCHANGE = new ComplexAspect("permutatio", Color.parse("#578357"), [Aspect.ENTROPY, Aspect.ORDER]);
    // export const WEATHER = new ComplexAspect("tempestas", Color.parse("#FFFFFF"), [AIR, WATER]);
    // export const ?? = new ComplexAspect("??", Color.parse("#cdccf4"), [FIRE, EARTH]);
    // export const ?? = new ComplexAspect("??", Color.parse("#cdccf4"), new Aspect[] [FIRE, WATER]);
    // export const ?? = new ComplexAspect("??", Color.parse("#cdccf4"), new Aspect[] [ORDER, WATER]);
    // export const ?? = new ComplexAspect("??", Color.parse("#cdccf4"), new Aspect[] [EARTH, ENTROPY]);
    Aspect.MAGIC = new ComplexAspect("praecantatio", Color.parse("#cf00ff"), [Aspect.ENERGY, Aspect.AIR]);
    Aspect.AURA = new ComplexAspect("auram", Color.parse("#ffc0ff"), [Aspect.MAGIC, Aspect.AIR]);
    // export const ALCHEMY = new ComplexAspect("alkimia", Color.parse("#23ac9d"), [MAGIC, WATER]);
    Aspect.FLUX = new ComplexAspect("vitium", Color.parse("#800080"), [Aspect.ENTROPY, Aspect.MAGIC]);
    Aspect.DARKNESS = new ComplexAspect("tenebrae", Color.parse("#222222"), [Aspect.VOID, Aspect.LIGHT]);
    Aspect.ELDRITCH = new ComplexAspect("alienis", Color.parse("#805080"), [Aspect.VOID, Aspect.DARKNESS]);
    Aspect.FLIGHT = new ComplexAspect("volatus", Color.parse("#e7e7d7"), [Aspect.AIR, Aspect.MOTION]);
    Aspect.PLANT = new ComplexAspect("herba", Color.parse("#01ac00"), [Aspect.LIFE, Aspect.EARTH]);
    Aspect.TOOL = new ComplexAspect("instrumentum", Color.parse("#4040ee"), [Aspect.METAL, Aspect.ENERGY]);
    Aspect.CRAFT = new ComplexAspect("fabrico", Color.parse("#809d80"), [Aspect.EXCHANGE, Aspect.TOOL]);
    Aspect.MECHANISM = new ComplexAspect("machina", Color.parse("#8080a0"), [Aspect.MOTION, Aspect.TOOL]);
    Aspect.TRAP = new ComplexAspect("vinculum", Color.parse("#9a8080"), [Aspect.MOTION, Aspect.ENTROPY]);
    Aspect.SOUL = new ComplexAspect("spiritus", Color.parse("#ebebfb"), [Aspect.LIFE, Aspect.DEATH]);
    Aspect.MIND = new ComplexAspect("cognitio", Color.parse("#f9967f"), [Aspect.FIRE, Aspect.SOUL]);
    Aspect.SENSES = new ComplexAspect("sensus", Color.parse("#c0ffc0"), [Aspect.AIR, Aspect.SOUL]);
    Aspect.AVERSION = new ComplexAspect("aversio", Color.parse("#c05050"), [Aspect.SOUL, Aspect.ENTROPY]);
    Aspect.PROTECT = new ComplexAspect("praemunio", Color.parse("#00c0c0"), [Aspect.SOUL, Aspect.EARTH]);
    Aspect.DESIRE = new ComplexAspect("desiderium", Color.parse("#e6be44"), [Aspect.SOUL, Aspect.VOID]);
    Aspect.UNDEAD = new ComplexAspect("exanimis", Color.parse("#3a4000"), [Aspect.MOTION, Aspect.DEATH]);
    Aspect.BEAST = new ComplexAspect("bestia", Color.parse("#9f6409"), [Aspect.MOTION, Aspect.LIFE]);
    Aspect.MAN = new ComplexAspect("humanus", Color.parse("#ffd7c0"), [Aspect.SOUL, Aspect.LIFE]);
    Aspect.getAllNames = function () { return Object.keys(Aspect).filter(function (e) { return Aspect[e] instanceof Aspect; }); };
    var cache = [];
    Aspect.getKey = function (a) { var _a; return (_a = cache[a === null || a === void 0 ? void 0 : a.name]) !== null && _a !== void 0 ? _a : (cache[a === null || a === void 0 ? void 0 : a.name] = Aspect.getAllNames().first(function (e) { return Aspect[e] === a; })); };
})(Aspect || (Aspect = {}));
var ChunkSaver;
(function (ChunkSaver) {
    var worldsDirectory = new java.io.File(__packdir__) + "/worlds/";
    var getWorldDir = ModAPI.requireGlobal("Level.getWorldDir");
    var JsonHelper = WRAP_JAVA("com.zhekasmirnov.innercore.api.runtime.saver.JsonHelper");
    function getChunksDirectory() {
        return FileUtils.joinPaths(worldsDirectory, getWorldDir(), "chunks");
    }
    function getChunkFile(chunk) {
        return FileUtils.joinPaths(getChunksDirectory(), chunk.toString() + ".json");
    }
    function ensureChunkFile(chunk) {
        return FileUtils.ensureFile(getChunkFile(chunk));
    }
    var scopes = new Array();
    function addSavesScope(name, descriptor) {
        scopes[name] = descriptor;
    }
    ChunkSaver.addSavesScope = addSavesScope;
    function saveChunk(chunk) {
        var totalScope = {};
        for (var i_1 in scopes) {
            var scope = {};
            scopes[i_1].save(chunk, scope);
            if (Object.keys(scope).length > 0)
                totalScope[i_1] = scope;
        }
        var json = JsonHelper.scriptableToJsonString(totalScope, true);
        FileUtils.writeAllText(ensureChunkFile(chunk), json);
        return totalScope;
    }
    ChunkSaver.saveChunk = saveChunk;
    function readChunk(chunk) {
        var _a, _b;
        var json = (_a = FileUtils.readAllText(getChunkFile(chunk))) !== null && _a !== void 0 ? _a : "{}";
        var scopeData = JsonHelper.parseJsonString(json);
        for (var i_2 in scopes) {
            scopes[i_2].read(chunk, (_b = scopeData[i_2]) !== null && _b !== void 0 ? _b : null);
        }
        return scopeData;
    }
    ChunkSaver.readChunk = readChunk;
    function removeAllSaves() {
        FileUtils.deleteDirectory(getChunksDirectory());
    }
    ChunkSaver.removeAllSaves = removeAllSaves;
})(ChunkSaver || (ChunkSaver = {}));
var ChunkHandler;
(function (ChunkHandler) {
    var playerChunks = [];
    function getLoadedChunks() {
        return playerChunks;
    }
    ChunkHandler.getLoadedChunks = getLoadedChunks;
    var currentPlayerChunk;
    var lastPlayerChunk;
    var chunkCounter = 0;
    var isLoadedChunksDirty = true;
    var loadRange = 4;
    var loadCount = 4;
    Callback.addCallback("tick", function () {
        var playerPos = new Vector3(Player.getPosition());
        if (playerPos.length == 0)
            return; // HACK: Fix first ticks player position
        currentPlayerChunk = Chunk.fromPosition(playerPos, Player.getDimension());
        if (!currentPlayerChunk.equals(lastPlayerChunk))
            isLoadedChunksDirty = true;
        lastPlayerChunk = currentPlayerChunk;
        for (var i_3 = 0; i_3 < loadCount; i_3++) {
            tryUnloadNextChunk();
            tryLoadNextChunk();
        }
    });
    Callback.addCallback("WriteSaves", function () { return playerChunks.forEach(function (chunk) { return ChunkSaver.saveChunk(chunk); }); });
    Callback.addCallback("DimensionLoaded", function () { return playerChunks.clear(); });
    function loadChunk(chunk) {
        if (playerChunks[chunk.toString()])
            return;
        playerChunks[chunk.toString()] = chunk;
        callbacks.forEach(function (e) { return e.load(chunk); });
        ChunkSaver.readChunk(chunk);
    }
    function unloadChunk(chunk) {
        if (!playerChunks[chunk.toString()])
            return;
        delete playerChunks[chunk.toString()];
        ChunkSaver.saveChunk(chunk);
        callbacks.forEach(function (e) { return e.unload(chunk); });
    }
    function tryLoadNextChunk() {
        var size = loadRange * 2 + 1;
        var count = Math.pow(size, 2);
        var _a = __read([chunkCounter % size - loadRange, Math.floor(chunkCounter / size) - loadRange], 2), x = _a[0], z = _a[1];
        chunkCounter = ++chunkCounter % count;
        var chunk = currentPlayerChunk.plus(x, z);
        if (World.isChunkLoaded(chunk.x, chunk.z))
            loadChunk(chunk);
    }
    function tryUnloadNextChunk() {
        if (!isLoadedChunksDirty || !playerChunks.count())
            return;
        var chunk = playerChunks.random();
        var dx = Math.abs(chunk.x - currentPlayerChunk.x);
        var dz = Math.abs(chunk.z - currentPlayerChunk.z);
        if (dx <= loadRange && dz <= loadRange) {
            chunk = playerChunks.first(function (e) {
                var dx = Math.abs(e.x - currentPlayerChunk.x);
                var dz = Math.abs(e.z - currentPlayerChunk.z);
                return dx > loadRange || dz > loadRange;
            });
            if (!chunk) {
                isLoadedChunksDirty = false;
                return;
            }
        }
        unloadChunk(chunk);
    }
    var callbacks = [];
    function addChunkCallback(descriptor) {
        callbacks.push(descriptor);
    }
    ChunkHandler.addChunkCallback = addChunkCallback;
})(ChunkHandler || (ChunkHandler = {}));
/// <reference path="../aspects/Aspect.ts" />
var Aura;
(function (Aura) {
    var AuraNodeType;
    (function (AuraNodeType) {
        AuraNodeType[AuraNodeType["NORMAL"] = 0] = "NORMAL";
    })(AuraNodeType = Aura.AuraNodeType || (Aura.AuraNodeType = {}));
    var AuraNodeState;
    (function (AuraNodeState) {
    })(AuraNodeState = Aura.AuraNodeState || (Aura.AuraNodeState = {}));
    var AuraNode = /** @class */ (function () {
        function AuraNode(position, visStorage) {
            this.position = position;
            this.age = 0;
            Saver.registerObject(this, AuraNode._saverId);
            if (this.visStorage != null)
                return;
            this.visStorage = new VisStorage();
            var count = Math.random() * 2 + 1;
            var aspects = PrimalAspect.all;
            for (var i_4 = 0; i_4 < count; i_4++) {
                this.visStorage.addAspect(aspects.random(), Math.ceil(Math.random() * 12 + 4));
            }
        }
        AuraNode.prototype.update = function () {
            if (Updatable.getSyncTime() % 32 && this.age++)
                return;
            this.createNodeAnimator();
            if (Math.random() < 0.1) {
                var node = Aura.getNearestNodes(this.position, 2)[1];
                if (node) {
                    var aspect = this.visStorage.getAllAspects().random();
                    if (this.visStorage.getAspectAmount(aspect) > 0)
                        VisTransfer.send(this, node, aspect, 0.1);
                }
            }
        };
        AuraNode.prototype.createNodeAnimator = function () {
            Gears.Updatable.addUpdatable(new Aura.AuraNodeAnimator(this));
        };
        AuraNode._saverId = Saver.registerObjectSaver("ThaumAuraNode", {
            save: function (node) {
                return {
                    position: node.position,
                    visStorage: node.visStorage
                };
            },
            read: function (data) {
                if (!(data === null || data === void 0 ? void 0 : data.position) || !data.visStorage)
                    return null;
                var position = new Vector3(data.position);
                var storage = data.visStorage;
                var node = new AuraNode(position, storage);
                return node;
            }
        });
        return AuraNode;
    }());
    Aura.AuraNode = AuraNode;
})(Aura || (Aura = {}));
/// <reference path="../chunks/ChunkSaver.ts" />
/// <reference path="../chunks/ChunkHandler.ts" />
/// <reference path="AuraNode.ts" />
var Aura;
(function (Aura) {
    var nodes = [];
    function addNode(node) {
        if (nodes.find(function (e) { return e.position.equals(node.position); }))
            return;
        Gears.Updatable.addUpdatable(node);
        nodes.push(node);
    }
    Aura.addNode = addNode;
    function removeNode(node) {
        var index = nodes.findIndex(function (e) { return e.position.equals(node.position); });
        node.remove = true;
        nodes.splice(index, 1);
    }
    Aura.removeNode = removeNode;
    function addNodesFromScope(scope) {
        scope.forEach(function (e) { return addNode(e); });
    }
    Aura.addNodesFromScope = addNodesFromScope;
    function unloadChunk(c) {
        var list = getNodesInChunk(c);
        list.forEach(function (e) { return removeNode(e); });
    }
    Aura.unloadChunk = unloadChunk;
    function getNodesInChunk(chunk) {
        var real = chunk.real;
        return nodes.where(function (e) {
            return e.position.x >= real.x && e.position.z >= real.z &&
                e.position.x < real.x + 16 && e.position.z < real.z + 16;
        });
    }
    Aura.getNodesInChunk = getNodesInChunk;
    function initChunk(chunk) {
        if (Math.random() > 0.1)
            return;
        // FIXME: Убрать метод когда появится WorldGenerator
        function getSurface(pos) {
            var y = 128;
            while (y--) {
                if (World.getBlockID(pos.x, y, pos.z))
                    return y;
            }
            return y;
        }
        var position = chunk.real.plus(Vector3.random().scale(16));
        position.y = getSurface(position.floor()) + Math.random() * 5 + 2;
        position = position.floor().plus(0.5);
        var node = new Aura.AuraNode(position);
        addNode(node);
    }
    Aura.initChunk = initChunk;
    function getNearestNodes(position, count) {
        if (count === void 0) { count = 1; }
        var items = nodes.copy()
            .sort(function (a, b) { return a.position.minus(position).squareLength - b.position.minus(position).squareLength; });
        // sort by distance
        var result = [];
        for (var i_5 in items) {
            if (count-- < 1)
                break;
            result.push(items[i_5]);
        }
        return result;
    }
    Aura.getNearestNodes = getNearestNodes;
    function getNodesInRange(position, range) {
        var squareRange = Math.pow(range, 2);
        return nodes.where(function (node) { return node.position.minus(position).squareLength < squareRange; });
    }
    Aura.getNodesInRange = getNodesInRange;
})(Aura || (Aura = {}));
ChunkHandler.addChunkCallback({
    load: function (chunk) { return void 0; },
    unload: function (chunk) { return Aura.unloadChunk(chunk); }
});
ChunkSaver.addSavesScope("thaumcraft_aura", {
    read: function (chunk, scope) {
        if (scope === null || scope === void 0 ? void 0 : scope.auraGenerated)
            Aura.addNodesFromScope(scope.nodes);
        else
            Aura.initChunk(chunk);
    },
    save: function (chunk, scope) {
        var nodes = Aura.getNodesInChunk(chunk);
        scope.nodes = nodes;
        scope.auraGenerated = true;
    }
});
var AuraGenerator;
(function (AuraGenerator) {
    function createRandomNodeAt(position) {
        var node = new Aura.AuraNode(position);
        var biome = World.getBiome(position.x, position.z);
    }
    AuraGenerator.createRandomNodeAt = createRandomNodeAt;
})(AuraGenerator || (AuraGenerator = {}));
var Aura;
(function (Aura) {
    var AuraNodeAnimator = /** @class */ (function () {
        function AuraNodeAnimator(node) {
            var e_1, _a;
            this.node = node;
            this.age = 0;
            var aspects = node.visStorage.getAllAspects();
            this.particles = new WeightedRandom();
            try {
                for (var aspects_1 = __values(aspects), aspects_1_1 = aspects_1.next(); !aspects_1_1.done; aspects_1_1 = aspects_1.next()) {
                    var aspect = aspects_1_1.value;
                    this.particles.put(Aura.AuraParticles.getVisParticle(aspect), node.visStorage.getAspectAmount(aspect));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (aspects_1_1 && !aspects_1_1.done && (_a = aspects_1.return)) _a.call(aspects_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        AuraNodeAnimator.prototype.update = function () {
            var _a;
            this.remove = this.age++ >= 32;
            /*
            let alpha = Math.random() * Math.PI * 2;
            let alpha2 = alpha - Math.PI;
            let vel = new Vector3(Math.sin(alpha), 0, Math.cos(alpha));
            let acc = vel.divide(2).minus(new Vector3(Math.sin(alpha2), 0, Math.cos(alpha2)).divide(2));

            vel = vel.divide(48); // lifetime
            acc = acc.divide(48);

            let inv = acc.inverted.divide(24); // lifetime / 2

            Gears.Particles.addParticle(this.particles.random(), this.node.position, vel.plus(acc), inv);*/
            /*if (!(this.age % 8))*/
            for (var i_6 = 0; i_6 < 2; i_6++) {
                var type = (_a = this.particles.random()) !== null && _a !== void 0 ? _a : 7;
                var velocity = Vector3.random().minus(0.5).normalized.scale(Math.random() / 30);
                Gears.Particles.addParticle(type, this.node.position, velocity, velocity.inverted.divide(48));
            }
        };
        ;
        return AuraNodeAnimator;
    }());
    Aura.AuraNodeAnimator = AuraNodeAnimator;
})(Aura || (Aura = {}));
var Aura;
(function (Aura) {
    var AuraNodeFactory;
    (function (AuraNodeFactory) {
        function createNode(random) {
        }
        AuraNodeFactory.createNode = createNode;
    })(AuraNodeFactory = Aura.AuraNodeFactory || (Aura.AuraNodeFactory = {}));
})(Aura || (Aura = {}));
var Aura;
(function (Aura) {
    var AuraParticles;
    (function (AuraParticles) {
        var aspectParticles = [];
        function getVisParticle(aspect) {
            var key = Aspect.getKey(aspect);
            if (aspectParticles[key])
                return aspectParticles[key];
            var type = Gears.ParticleRegistry.register("VIS_" + key, {
                texture: "vis",
                blending: "default",
                size: [0.25, 1],
                lifetime: 12,
                color: aspect.color,
                rebuildDelay: 1,
                animators: {
                    icon: {
                        start: 0,
                        end: 1,
                        period: 6,
                        fadeIn: 1
                    },
                    size: {
                        fadeOut: 0
                    }
                }
            });
            aspectParticles[key] = type;
            return type;
        }
        AuraParticles.getVisParticle = getVisParticle;
        function getNodeParticle(aspect, nodeType) {
            var key = Aspect.getKey(aspect) + "_" + nodeType;
            if (aspectParticles[key])
                return aspectParticles[key];
            var type = Gears.ParticleRegistry.register("AURA_NODE_" + key, {
                texture: "test",
                size: 6,
                lifetime: 128,
                color: aspect.color,
                textureUV: [0, 0, 1, 1 / 32],
                framesX: 32,
                framesY: 1,
                animators: {
                    icon: {
                        start: 0,
                        end: 1,
                        period: 32,
                        fadeIn: 1
                    }
                }
            });
            aspectParticles[key] = type;
            return type;
        }
        AuraParticles.getNodeParticle = getNodeParticle;
    })(AuraParticles = Aura.AuraParticles || (Aura.AuraParticles = {}));
})(Aura || (Aura = {}));
var ResearchedAspects;
(function (ResearchedAspects) {
    var list = [];
    function isResearched(name) {
        return list[name] >= 0 && list[name] != undefined;
    }
    ResearchedAspects.isResearched = isResearched;
    function getCount(name) {
        if (!isResearched(name))
            return -1;
        return list[name];
    }
    ResearchedAspects.getCount = getCount;
    function add(name, count) {
        if (!isResearched(name))
            return;
        list[name] += count;
    }
    ResearchedAspects.add = add;
    function research(name) {
        if (isResearched(name))
            return;
        list[name] = 0;
    }
    ResearchedAspects.research = research;
    function clear() {
        list = [];
    }
    ResearchedAspects.clear = clear;
    function read(scope) {
        if (!scope || !scope.data)
            return;
        list = scope.data;
    }
    ResearchedAspects.read = read;
    function save() {
        return { data: list };
    }
    ResearchedAspects.save = save;
    Saver.addSavesScope("ResearchedAspects", function (scope) { return read(scope); }, function () { return save(); });
    Callback.addCallback("LevelLoaded", function () {
        var e_2, _a;
        clear();
        try {
            for (var _b = __values(Aspect.all), _c = _b.next(); !_c.done; _c = _b.next()) {
                var aspect = _c.value;
                if (aspect instanceof PrimalAspect)
                    ResearchedAspects.research(Aspect.getKey(aspect));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    });
})(ResearchedAspects || (ResearchedAspects = {}));
;
var Researches;
(function (Researches) {
    var list = [];
    var researched = [];
    function add(key, research) {
        list[key] = research;
    }
    Researches.add = add;
})(Researches || (Researches = {}));
/*
Researches.register(key, {
    label: string,
    parent?: string,
    icon: {
        background: string,
        foreground: string | ItemStack
    },
    pageContent: {

    }
});
*/ 
Object.defineProperties(Array.prototype, {
    random: {
        value: function () {
            var _a;
            var keys = Object.keys(this);
            var key = keys[Math.floor(Math.random() * keys.length)];
            return (_a = this[key]) !== null && _a !== void 0 ? _a : this[Math.floor(Math.random() * this.length)];
        },
        enumerable: false
    },
    clear: {
        value: function () {
            for (var i_7 in this)
                delete this[i_7];
        },
        enumerable: false
    },
    count: {
        value: function (selector) {
            if (!selector)
                return Object.keys(this).length;
            var count = 0;
            for (var i_8 in this)
                if (selector(this[i_8]))
                    count++;
            return count;
        },
        enumerable: false
    },
    copy: {
        value: function () {
            var result = new Array();
            for (var i_9 in this)
                result[i_9] = this[i_9];
            return result;
        },
        enumerable: false
    },
    set: {
        value: function (array) {
            for (var i_10 in array)
                this[i_10] = array[i_10];
        },
        enumerable: false
    },
    any: {
        value: function (selector) {
            for (var i_11 in this)
                if (selector(this[i_11]))
                    return true;
            return false;
        },
        enumerable: false
    },
    all: {
        value: function (selector) {
            for (var i_12 in this)
                if (!selector(this[i_12]))
                    return false;
            return true;
        },
        enumerable: false
    },
    select: {
        value: function (selector) {
            return this.map(selector);
        },
        enumerable: false
    },
    first: {
        value: function (selector) {
            if (selector === void 0) { selector = function () { return true; }; }
            for (var i_13 in this)
                if (selector(this[i_13]))
                    return this[i_13];
            return null;
        },
        enumerable: false
    },
    where: {
        value: function (selector) {
            if (selector === void 0) { selector = function () { return true; }; }
            return this.filter(selector);
        },
        enumerable: false
    },
    min: {
        value: function (selector) {
            var max = Number.MAX_VALUE, result;
            this.forEach(function (e) {
                var value = selector(e);
                if (value < max) {
                    max = value;
                    result = e;
                }
            });
            return result !== null && result !== void 0 ? result : null;
        },
        enumerable: false
    },
    max: {
        value: function (selector) {
            var min = Number.MIN_VALUE, result;
            this.forEach(function (e) {
                var value = selector(e);
                if (value > min) {
                    min = value;
                    result = e;
                }
            });
            return result !== null && result !== void 0 ? result : null;
        },
        enumerable: false
    },
});
var Display;
(function (Display) {
    var context = UI.getContext();
    var display = context.getWindowManager().getDefaultDisplay();
    var metrics = new android.util.DisplayMetrics();
    display.getMetrics(metrics);
    var width = display.getWidth();
    var height = display.getHeight();
    var density = context.getResources().getDisplayMetrics().density;
    function getWidth() { return width; }
    Display.getWidth = getWidth;
    function getHeight() { return height; }
    Display.getHeight = getHeight;
    function dip(count) { return Math.ceil(count * density); }
    Display.dip = dip;
})(Display || (Display = {}));
var FileUtils;
(function (FileUtils) {
    var File = java.io.File;
    function joinPaths() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var separator = File.separator;
        var paths = args.select(function (e) {
            if (e.startsWith(separator))
                e = e.substring(1, e.length);
            if (e.endsWith(separator))
                e = e.substring(0, e.length - 1);
            return e;
        });
        return paths.join(separator);
    }
    FileUtils.joinPaths = joinPaths;
    function ensureFile(path) {
        var file = new File(path.toString());
        if (!file.exists()) {
            file.getParentFile().mkdirs();
            file.createNewFile();
        }
        return file.toString();
    }
    FileUtils.ensureFile = ensureFile;
    function deleteDirectory(path) {
        var directory = new File(path.toString());
        var allContents = directory.listFiles();
        if (allContents != null) {
            for (var i_14 in allContents)
                deleteDirectory(allContents[i_14]);
        }
        return directory.delete();
    }
    FileUtils.deleteDirectory = deleteDirectory;
    function writeAllText(path, text) {
        var file = ensureFile(path);
        var output;
        try {
            output = new java.io.PrintWriter(new java.io.BufferedWriter(new java.io.FileWriter(file)));
            output.print(text);
            output.flush();
        }
        finally {
            output.close();
        }
    }
    FileUtils.writeAllText = writeAllText;
    function readAllText(path) {
        var file = new File(path.toString());
        if (!file.exists())
            return null;
        var builder = new java.lang.StringBuilder();
        var input;
        try {
            input = new java.io.BufferedReader(new java.io.FileReader(file));
            var line = "";
            while ((line = input.readLine()) != null) {
                builder.append(line);
            }
        }
        finally {
            input.close();
        }
        return builder.toString();
    }
    FileUtils.readAllText = readAllText;
})(FileUtils || (FileUtils = {}));
var StateWatcher = /** @class */ (function () {
    function StateWatcher(stateSet) {
        this.stateValues = {};
        this.stateWatchers = stateSet;
    }
    StateWatcher.prototype.validate = function () {
        for (var name in this.stateWatchers) {
            this.stateValues[name] = this.stateWatchers[name]();
        }
        return this;
    };
    StateWatcher.prototype.check = function () {
        for (var name in this.stateWatchers) {
            if (this.stateWatchers[name]() != this.stateValues[name]) {
                return false;
            }
        }
        return true;
    };
    StateWatcher.prototype.checkAndValidate = function () {
        var result = true;
        for (var name in this.stateWatchers) {
            var newValue = this.stateWatchers[name]();
            if (newValue != this.stateValues[name]) {
                this.stateValues[name] = newValue;
                result = false;
            }
        }
        return result;
    };
    StateWatcher.prototype.getState = function (name) {
        return this.stateWatchers[name]();
    };
    StateWatcher.prototype.getSavedState = function (name) {
        return this.stateValues[name];
    };
    return StateWatcher;
}());
var Task;
(function (Task) {
    var tasks = [];
    var currentTick = 0;
    function add(action, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay < 0)
            throw "Task delay can't be lower than zero";
        var key = Math.floor(currentTick + delay);
        if (!tasks[key])
            tasks[key] = [];
        tasks[key].push(action);
    }
    Task.add = add;
    ;
    Callback.addCallback("tick", function () {
        var key = currentTick++;
        var list = tasks[key];
        if (!list)
            return;
        for (var i_15 = 0; i_15 < list.length; i_15++)
            list[i_15]();
        delete tasks[key];
    });
})(Task || (Task = {}));
var WeightedRandom = /** @class */ (function () {
    function WeightedRandom() {
        this.items = [];
    }
    WeightedRandom.prototype.put = function (value, weight) {
        if (weight <= 0)
            return;
        this.items.push({
            value: value,
            weight: weight
        });
    };
    WeightedRandom.prototype.random = function (randomizer) {
        var e_3, _a, e_4, _b;
        var _c;
        var sum = 0;
        try {
            for (var _d = __values(this.items), _e = _d.next(); !_e.done; _e = _d.next()) {
                var item = _e.value;
                sum += item.weight;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var rnd = (_c = randomizer === null || randomizer === void 0 ? void 0 : randomizer.call(this, sum)) !== null && _c !== void 0 ? _c : Math.random() * sum;
        try {
            for (var _f = __values(this.items), _g = _f.next(); !_g.done; _g = _f.next()) {
                var item = _g.value;
                if (rnd < item.weight)
                    return item.value;
                rnd -= item.weight;
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return null;
    };
    return WeightedRandom;
}());
var WorldCoordinates = /** @class */ (function () {
    function WorldCoordinates(x, y, z, dimension) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.dimension = dimension;
    }
    WorldCoordinates.prototype.equals = function (value) {
        return this.dimension == value.dimension && this.x == value.x && this.y == value.y && this.z == value.z;
    };
    WorldCoordinates.prototype.asVector = function () {
        return new Vector3(this);
    };
    return WorldCoordinates;
}());
var VisStorage = /** @class */ (function () {
    function VisStorage(save) {
        if (save === void 0) { save = true; }
        this.aspectMap = {};
        if (save)
            Saver.registerObject(this, VisStorage._saverId);
    }
    VisStorage.getAspectKey = function (aspect) { return Aspect.getKey(aspect); };
    VisStorage.prototype.canAddAspect = function (aspect, amount) {
        return amount > 0;
    };
    VisStorage.prototype.addAspect = function (aspect, amount) {
        if (!this.canAddAspect(aspect, amount))
            return;
        var curAmount = this.getAspectAmount(aspect);
        this.setAspectAmount(aspect, curAmount + amount);
    };
    VisStorage.prototype.pullAspect = function (aspect, amount, allowNegative) {
        if (allowNegative === void 0) { allowNegative = false; }
        if (amount <= 0)
            return;
        var curAmount = this.getAspectAmount(aspect);
        var pulled = curAmount - amount;
        if (!allowNegative)
            pulled = Math.max(pulled, 0);
        this.setAspectAmount(aspect, pulled);
        return pulled;
    };
    VisStorage.prototype.getAspectAmount = function (aspect) {
        var _a;
        return (_a = this.aspectMap[VisStorage.getAspectKey(aspect)]) !== null && _a !== void 0 ? _a : 0;
    };
    VisStorage.prototype.setAspectAmount = function (aspect, amount) {
        var key = VisStorage.getAspectKey(aspect);
        if (Math.abs(amount) < 1e-8)
            delete this.aspectMap[key];
        else
            this.aspectMap[key] = amount;
    };
    VisStorage.prototype.getAllAspects = function () {
        var aspects = [];
        for (var key in this.aspectMap)
            aspects.push(Aspect[key]);
        return aspects;
    };
    VisStorage.prototype.transfer = function (storage, aspect, amount) {
        amount = this.pullAspect(aspect, amount);
        storage.addAspect(aspect, amount);
        return amount;
    };
    VisStorage.prototype.transferAll = function (storage) {
        var e_5, _a;
        try {
            for (var _b = __values(this.getAllAspects()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var aspect = _c.value;
                var amount = this.getAspectAmount(aspect);
                this.transfer(storage, aspect, amount);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    VisStorage.prototype.toString = function () {
        var values = [];
        for (var aspect in this.aspectMap) {
            values.push(aspect + ": " + this.aspectMap[aspect]);
        }
        return values.join(", ");
    };
    VisStorage._saverId = Saver.registerObjectSaver("ThaumVisStorage", {
        save: function (storage) {
            return { aspects: storage.aspectMap };
        },
        read: function (data) {
            var storage = new VisStorage();
            if (data === null || data === void 0 ? void 0 : data.aspects)
                storage.aspectMap = data.aspects;
            return storage;
        }
    });
    return VisStorage;
}());
/// <reference path="VisStorage.ts"/>
var LimitedVisStorage = /** @class */ (function (_super) {
    __extends(LimitedVisStorage, _super);
    function LimitedVisStorage(max) {
        var _this = _super.call(this) || this;
        if (typeof max == "number")
            _this.max = max;
        else
            _this.allowList = max;
        return _this;
    }
    LimitedVisStorage.prototype.getMaxAspectAmount = function (aspect) {
        if (this.max !== undefined)
            return this.max;
        return this.allowList.get(aspect);
    };
    LimitedVisStorage.prototype.getAspectRatio = function (aspect) {
        var _a;
        return (_a = (this.getAspectAmount(aspect) / this.getMaxAspectAmount(aspect))) !== null && _a !== void 0 ? _a : 0;
    };
    LimitedVisStorage.prototype.addAspect = function (aspect, amount) {
        var current = this.getAspectAmount(aspect);
        if (current >= this.getMaxAspectAmount(aspect))
            return;
        this.setAspectAmount(aspect, current + amount);
    };
    LimitedVisStorage.prototype.setAspectAmount = function (aspect, amount) {
        _super.prototype.setAspectAmount.call(this, aspect, Math.min(this.getMaxAspectAmount(aspect), amount));
    };
    return LimitedVisStorage;
}(VisStorage));
var VisTransfer = /** @class */ (function () {
    function VisTransfer(source, target) {
        this.source = source;
        this.target = target;
        this.visStorage = new VisStorage();
        this.particles = new WeightedRandom();
        this.position = this.source.position;
        Gears.Updatable.addUpdatable(this);
    }
    VisTransfer.send = function (source, target, aspect, amount) {
        var e_6, _a;
        if (amount === void 0) { amount = 0; }
        var transfer = new VisTransfer(source, target);
        if (aspect && amount != 0) {
            transfer.sendVis(aspect, amount);
        }
        else {
            var storage = aspect;
            try {
                for (var _b = __values(storage === null || storage === void 0 ? void 0 : storage.getAllAspects()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var aspect_1 = _c.value;
                    transfer.sendVis(aspect_1, storage.getAspectAmount(aspect_1));
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_6) throw e_6.error; }
            }
        }
    };
    VisTransfer.create = function (source, target) {
        return new VisTransfer(source, target);
    };
    VisTransfer.prototype.sendVis = function (aspect, amount) {
        if (this.sent)
            throw "you can't send vis after transfer's first tick";
        if (!aspect)
            return;
        amount = this.source.visStorage.transfer(this.visStorage, aspect, amount);
        var type = Aura.AuraParticles.getVisParticle(aspect);
        this.particles.put(type, amount);
    };
    VisTransfer.prototype.update = function () {
        this.sent = true;
        if (!this.tempTarget || this.tempTarget.minus(this.position).squareLength < 0.5) {
            var delta = this.target.position.minus(this.position);
            var length = delta.squareLength;
            if (length < 7) {
                if (length < 0.5)
                    return this.transferToTarget();
                this.tempTarget = this.target.position;
            }
            else {
                var rand = Vector3.random(function () { return Math.random() - 0.5; }).scale(0.5);
                this.tempTarget = this.position.plus(delta.normalized.plus(rand));
            }
        }
        var velocity = this.tempTarget.minus(this.position).normalized.scale(Math.random() * 0.5 + 0.1);
        this.position = this.position.plus(velocity);
        var type = this.particles.random();
        if (type) {
            var partvel = velocity.inverted.scale(0.01).plus(Vector3.random(function () { return Math.random() - 0.5; }).scale(0.02));
            Gears.Particles.addParticle(type, this.position, partvel, partvel.inverted.divide(12));
        }
    };
    VisTransfer.prototype.transferToTarget = function () {
        this.visStorage.transferAll(this.target.visStorage);
        this.remove = true;
    };
    return VisTransfer;
}());
function observe(obj, descriptor, base) {
    if (base === void 0) { base = []; }
    var target = [];
    Object.keys(obj).forEach(function (key) {
        target[key] = obj[key];
        if (typeof target[key] === "object")
            observe(target[key], descriptor, __spread(base, [key]));
        Object.defineProperty(obj, key, {
            set: function (value) {
                var _a, _b;
                var previosValue = target[key];
                var hookValue = (_a = descriptor.hook) === null || _a === void 0 ? void 0 : _a.call(target, __spread(base, [key]), value, previosValue);
                if (hookValue !== undefined) {
                    previosValue = value;
                    value = hookValue;
                }
                if (typeof value === "object")
                    observe(value, descriptor, __spread(base, [key]));
                target[key] = value;
                (_b = descriptor.callback) === null || _b === void 0 ? void 0 : _b.call(target, __spread(base, [key]), value, previosValue);
            },
            get: function () { return target[key]; }
        });
    });
}
var Wandable = /** @class */ (function (_super) {
    __extends(Wandable, _super);
    function Wandable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Wandable.prototype, "position", {
        get: function () { return Gears.Player.position.minus(0, 0.75, 0); },
        enumerable: false,
        configurable: true
    });
    Wandable.prototype.itemUseNoTarget = function (stack, ticks) {
        var position = this.position;
        var lookVector = Gears.Player.lookVector;
        var nodes = Aura.getNodesInRange(position, 8).where(function (node) {
            var direction = node.position.minus(position);
            var distance = direction.length;
            direction = direction.normalized;
            var angle = lookVector.dot(direction);
            return Math.acos(angle) < Math.PI / (4 + distance * 2);
        });
        if (nodes.length < 1)
            return;
        var target = nodes.min(function (node) { return node.position.minus(position).squareLength; });
        this.currentNode = target;
    };
    Wandable.prototype.tickInHand = function () {
        WandableGUI.bind(this.visStorage);
        WandableGUI.animate(); // TODO: Make animation smoother (move to parallel thread)
        if (this.currentNode == null)
            return;
        if (World.getThreadTime() % 4 > 0)
            return;
        if (this.currentNode.position.minus(this.position).squareLength > 8 * 8) {
            this.currentNode = null;
            return;
        }
        var transfer = VisTransfer.create(this.currentNode, this);
        var aspect = this.currentNode.visStorage.getAllAspects().random();
        if (aspect)
            transfer.sendVis(aspect, 0.1);
    };
    Wandable.prototype.selectionChanged = function (current, last) {
        if (current.actor == this) {
            WandableGUI.State.opened = true;
        }
        else if (!(current.actor instanceof Wandable) && last.actor == this) {
            WandableGUI.State.opened = false;
        }
    };
    __decorate([
        ItemActor.data(function () {
            return new LimitedVisStorage(64);
        })
    ], Wandable.prototype, "visStorage", void 0);
    return Wandable;
}(ItemActor));
var WandableGUI;
(function (WandableGUI) {
    var State = /** @class */ (function () {
        function State() {
        }
        State.opened = false;
        State.size = "maximized";
        return State;
    }());
    WandableGUI.State = State;
    observe(State, {
        callback: function (keys, value, previousValue) {
            if (value == previousValue)
                return;
            var key = keys[keys.length - 1];
            switch (key) {
                case "opened":
                    if (value)
                        container.openAs(window);
                    else
                        container.close();
                    break;
                case "size":
                    break;
            }
        }
    });
    // #region GUI
    var ANIMATION_SPEED = 2;
    var ELEMENTS_SCALE = 6.94444;
    var LEFT_EDGE = 98;
    var SWITCHER_LEFT = 102;
    var SCALE_LEFT = 21;
    var BACKGROUND_LEFT = 0;
    var container = new UI.Container();
    var window = new UI.Window({
        location: {
            x: 0,
            y: 50,
            width: 216,
            height: 216
        },
        elements: {
            "background": {
                type: "button",
                x: BACKGROUND_LEFT * ELEMENTS_SCALE,
                y: 0,
                bitmap: "wandui.background",
                scale: ELEMENTS_SCALE
            },
            "AIR": {
                type: "scale",
                x: SCALE_LEFT * ELEMENTS_SCALE,
                y: 5 * ELEMENTS_SCALE,
                direction: 0,
                bitmap: "wandui.scale.aer",
                overlay: "wandui.scale.overlay",
                scale: ELEMENTS_SCALE + 0.1
            },
            "WATER": {
                type: "scale",
                x: SCALE_LEFT * ELEMENTS_SCALE,
                y: 26.75 * ELEMENTS_SCALE,
                direction: 0,
                bitmap: "wandui.scale.aqua",
                overlay: "wandui.scale.overlay",
                scale: ELEMENTS_SCALE + 0.1
            },
            "FIRE": {
                type: "scale",
                x: SCALE_LEFT * ELEMENTS_SCALE,
                y: 50 * ELEMENTS_SCALE,
                direction: 0,
                bitmap: "wandui.scale.ignis",
                overlay: "wandui.scale.overlay",
                scale: ELEMENTS_SCALE + 0.1
            },
            "EARTH": {
                type: "scale",
                x: SCALE_LEFT * ELEMENTS_SCALE,
                y: 71.75 * ELEMENTS_SCALE,
                direction: 0,
                bitmap: "wandui.scale.terra",
                overlay: "wandui.scale.overlay",
                scale: ELEMENTS_SCALE + 0.1
            },
            "ORDER": {
                type: "scale",
                x: SCALE_LEFT * ELEMENTS_SCALE,
                y: 94.75 * ELEMENTS_SCALE,
                direction: 0,
                bitmap: "wandui.scale.ordo",
                overlay: "wandui.scale.overlay",
                scale: ELEMENTS_SCALE + 0.1
            },
            "ENTROPY": {
                type: "scale",
                x: SCALE_LEFT * ELEMENTS_SCALE,
                y: 116.5 * ELEMENTS_SCALE,
                direction: 0,
                bitmap: "wandui.scale.perditio",
                overlay: "wandui.scale.overlay",
                scale: ELEMENTS_SCALE + 0.1
            },
            "state_switcher": {
                type: "button",
                x: SWITCHER_LEFT * ELEMENTS_SCALE,
                y: 33 * ELEMENTS_SCALE,
                bitmap: "wandui.close",
                bitmap2: "wandui.close-touched",
                scale: ELEMENTS_SCALE,
                clicker: {
                    onClick: function () {
                        WandableGUI.State.size = WandableGUI.State.size == "minimized" ? "maximized" : "minimized";
                    }
                }
            }
        },
        drawing: [{
                type: "background",
                color: android.graphics.Color.TRANSPARENT
            }]
    });
    window.setAsGameOverlay(true);
    // #endregion
    function animate() {
        var e_7, _a;
        var elements = container.getGuiContent().elements;
        var background = elements["background"];
        var switcher = elements["state_switcher"];
        var scales = [elements["AIR"], elements["WATER"], elements["FIRE"], elements["EARTH"], elements["ORDER"], elements["ENTROPY"]];
        var minimized = State.size == "minimized";
        if (minimized) {
            switcher.bitmap = "wandui.close";
            switcher.bitmap2 = "wandui.close-touched";
        }
        else {
            switcher.bitmap = "wandui.open";
            switcher.bitmap2 = "wandui.open-touched";
        }
        var backgroundEnd = (minimized ? BACKGROUND_LEFT : BACKGROUND_LEFT - LEFT_EDGE) * ELEMENTS_SCALE;
        background.x = Math.abs(backgroundEnd - background.x) < 4 ? backgroundEnd : background.x + (backgroundEnd - background.x) / ANIMATION_SPEED;
        var switcherEnd = (minimized ? SWITCHER_LEFT : SWITCHER_LEFT - LEFT_EDGE) * ELEMENTS_SCALE;
        switcher.x = Math.abs(switcherEnd - switcher.x) < 4 ? switcherEnd : switcher.x + (switcherEnd - switcher.x) / ANIMATION_SPEED;
        var scaleEnd = (minimized ? SCALE_LEFT : SCALE_LEFT - LEFT_EDGE) * ELEMENTS_SCALE;
        try {
            for (var scales_1 = __values(scales), scales_1_1 = scales_1.next(); !scales_1_1.done; scales_1_1 = scales_1.next()) {
                var scale = scales_1_1.value;
                scale.x = Math.abs(scaleEnd - scale.x) < 4 ? scaleEnd : scale.x + (scaleEnd - scale.x) / ANIMATION_SPEED;
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (scales_1_1 && !scales_1_1.done && (_a = scales_1.return)) _a.call(scales_1);
            }
            finally { if (e_7) throw e_7.error; }
        }
        container.invalidateUI();
    }
    WandableGUI.animate = animate;
    var currentVisStorage;
    function bind(storage) {
        currentVisStorage = storage;
        for (var key in PrimalAspect.all) {
            container.setScale(key, currentVisStorage.getAspectRatio(Aspect[key]));
        }
    }
    WandableGUI.bind = bind;
})(WandableGUI || (WandableGUI = {}));
var WandableRegistry;
(function (WandableRegistry) {
    var capMaterials = [];
    function registerCapMaterial(name, discount) {
        if (capMaterials[name])
            throw "cap material with name \"" + name + "\" is already exists";
        capMaterials[name] = {
            discount: discount
        };
    }
    WandableRegistry.registerCapMaterial = registerCapMaterial;
    var rodMaterials = [];
    function registerRodMaterial(name, capacity) {
        if (rodMaterials[name])
            throw "rod material with name \"" + name + "\" is already exists";
        rodMaterials[name] = {
            capacity: capacity
        };
    }
    WandableRegistry.registerRodMaterial = registerRodMaterial;
    /* * * * * * * * *
     * Wandable params
     * canHoldFocus: boolean
     * visStorageMultiplier: number (default: 1)
     * canUseForCrafting: boolean
     * * * * * * * * */
    function registerWandableType(name) {
    }
    WandableRegistry.registerWandableType = registerWandableType;
    function register(type, rodMaterial, capMaterial) {
    }
    WandableRegistry.register = register;
})(WandableRegistry || (WandableRegistry = {}));
var WorldGenerator;
(function (WorldGenerator) {
    function getSurface(position) {
        while (position.y-- >= 0 && !Gears.World.getBlock(position).id)
            ;
        return position.y < 0 ? null : new Vector3(position);
    }
    WorldGenerator.getSurface = getSurface;
    function getLowestSurface(position) {
        var y = 0;
        while (y++ <= 128 && !World.getBlockID(position.x, y, position.z))
            ;
        return y > 128 ? null : new Vector3(position.x, y, position.z);
    }
    WorldGenerator.getLowestSurface = getLowestSurface;
    function getHighestSurface(position) {
        var y = 128;
        while (y-- >= 0 && !World.getBlockID(position.x, y, position.z))
            ;
        return y < 0 ? null : new Vector3(position.x, y, position.z);
    }
    WorldGenerator.getHighestSurface = getHighestSurface;
    function getPerlinNoise(position, seed, scale, octaveAmount) {
        var x = position.x, y = position.y, z = position.z;
        return GenerationUtils.getPerlinNoise(x, y, z, seed, scale, octaveAmount);
    }
    WorldGenerator.getPerlinNoise = getPerlinNoise;
    function randomCoords(random, chunk, minHeight, maxHeight) {
        if (minHeight === void 0) { minHeight = 0; }
        if (maxHeight === void 0) { maxHeight = 128; }
        var _a = chunk.real, x = _a.x, y = _a.y, z = _a.z;
        x += random.nextInt(16);
        z += random.nextInt(16);
        y = random.nextInt(maxHeight - minHeight + 1) - minHeight;
        return new Vector3(x, y, z);
    }
    WorldGenerator.randomCoords = randomCoords;
})(WorldGenerator || (WorldGenerator = {}));
BlockRegistry.registerType("log", {
    base: 17,
    solid: true,
    destroyTime: 2,
    explosionResistance: 10,
    lightOpacity: 15,
    renderLayer: 2,
    translucency: 0
});
BlockRegistry.registerType("leaves", {
    base: 18,
    destroyTime: 0.2,
    explosionResistance: 1,
    renderLayer: 3,
    lightOpacity: 4,
    translucency: 4,
    solid: false
});
/// <reference path="../../api/util/StateWatcher.ts" />
/// <reference path="animation.ts" />  
BlockRegistry.registerType("crucible_type", {
    lightOpacity: 0,
    renderLayer: 0
});
BlockRegistry.register("thaum_crucible", {
    variations: {
        name: "Crucible",
        texture: "blank",
        inCreative: true
    },
    type: "crucible_type",
    model: (function () {
        var mesh = new RenderMesh(__dir__ + "resources/res/models/crucible/crucible.obj", "obj", null);
        mesh.setBlockTexture("thaum_crucible", 0);
        mesh.fitIn(0, 0, 0, 1, 1, 1, true);
        var model = new ICRender.Model();
        model.addEntry(mesh);
        return model;
    })(),
    collider: (function () {
        var shape = new ICRender.CollisionShape();
        // @ts-ignore
        var entry = shape.addEntry();
        entry.addBox(0, 0, 0, 1 / 16, 1 - 1 / 200, 1);
        entry.addBox(15 / 16, 0, 0, 1, 1 - 1 / 200, 1);
        entry.addBox(0, 0, 15 / 16, 1, 1 - 1 / 200, 1);
        entry.addBox(0, 0, 0, 1, 1 - 1 / 200, 1 / 16);
        entry.addBox(1 / 16, 3 / 16, 1 / 16, 15 / 16, 4 / 16, 15 / 16);
        return shape;
    })()
});
var CrucibleBlockActor = /** @class */ (function (_super) {
    __extends(CrucibleBlockActor, _super);
    function CrucibleBlockActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temperature = 0;
        _this.liquidId = "none";
        _this.liquid = null;
        // @ts-ignore
        _this.liquidAnimation = null;
        return _this;
    }
    CrucibleBlockActor.prototype.onUnload = function () {
        this.destroyLiquidAnimation();
    };
    CrucibleBlockActor.prototype.onDestroy = function () {
        this.destroyLiquidAnimation();
    };
    CrucibleBlockActor.prototype.onTick = function () {
        this.updateLiquidAnimation();
        if (this.liquid != null) {
            this.updateTemperature();
            this.liquid.animateIdle(this.position, this.temperature);
            if (this.isBoiling()) {
                this.liquid.animateBoiling(this.position);
            }
        }
        else {
            this.temperature = 0;
        }
    };
    CrucibleBlockActor.prototype.onItemUse = function (item, coords, player) {
        if (Gears.Player.sneaking)
            return;
        this.preventClick();
        new CrucibleItemAnimation(this, item).deploy();
        var liquid = LiquidRegistry.getItemLiquid(item.id, item.data);
        if (this.liquid == null && liquid != null) {
            if (Game.isItemSpendingAllowed()) {
                var empty = LiquidRegistry.getEmptyItem(item.id, item.data);
                if (empty != null) {
                    if (item.count > 1) {
                        Player.decreaseCarriedItem();
                        Player.addItemToInventory(empty.id, 1, empty.data);
                    }
                    else {
                        Player.setCarriedItem(empty.id, 1, empty.data);
                    }
                }
            }
            this.setLiquidName(liquid);
        }
    };
    CrucibleBlockActor.prototype.setLiquid = function (liquid) {
        this.liquid = liquid;
        if (liquid != null) {
            this.liquidId = liquid.name;
        }
        else {
            this.liquidId = "none";
        }
    };
    CrucibleBlockActor.prototype.setLiquidName = function (liquid) {
        this.setLiquid(CrucibleHelper.getLiquid(liquid));
    };
    CrucibleBlockActor.prototype.isBoiling = function () {
        return this.liquid ? this.temperature >= this.liquid.getBoilingTemperature() : false;
    };
    CrucibleBlockActor.prototype.updateTemperature = function () {
        var ticksPerCheck = 5;
        if (Updatable.getSyncTime() % ticksPerCheck == 0) {
            this.temperature += CrucibleHelper.getFireSource(World.getBlockID(this.position.x, this.position.y - 1, this.position.z)) * ticksPerCheck;
            this.temperature = Math.max(0, Math.min(this.liquid.getBoilingTemperature(), this.temperature));
        }
    };
    CrucibleBlockActor.prototype.destroyLiquidAnimation = function () {
        if (this.liquidAnimation) {
            this.liquidAnimation.destroy();
            this.liquidAnimation = null;
        }
    };
    CrucibleBlockActor.prototype.updateLiquidAnimation = function () {
        var _a;
        if (this.liquid == null) {
            this.destroyLiquidAnimation();
            return;
        }
        if ((_a = this.liquidAnimationState) === null || _a === void 0 ? void 0 : _a.checkAndValidate()) {
            return;
        }
        var loadRequired = false;
        if (!this.liquidAnimation) {
            loadRequired = true;
            // @ts-ignore
            this.liquidAnimation = new Animation.Base(this.position.x + 0.5, this.position.y + 15 / 16, this.position.z + 0.5);
        }
        var description = this.liquid.getVisualDescription(this.temperature);
        this.liquidAnimation.describe({
            mesh: this.liquidMesh,
            skin: description.texture,
            material: description.material
        });
        if (loadRequired) {
            this.liquidAnimation.load();
        }
    };
    __decorate([
        BlockActor.global(function () {
            var mesh = new RenderMesh();
            mesh.setNormal(0, 1, 0);
            mesh.setColor(1, 1, 1);
            mesh.addVertex(-.5, 0, -.5, 0, 0);
            mesh.addVertex(.5, 0, -.5, 1, 0);
            mesh.addVertex(.5, 0, .5, 1, 1);
            mesh.addVertex(-.5, 0, -.5, 0, 0);
            mesh.addVertex(.5, 0, .5, 1, 1);
            mesh.addVertex(-.5, 0, .5, 0, 1);
            return mesh;
        })
    ], CrucibleBlockActor.prototype, "liquidMesh", void 0);
    __decorate([
        BlockActor.data(function () { return new VisStorage(); })
    ], CrucibleBlockActor.prototype, "aspects", void 0);
    __decorate([
        BlockActor.data
    ], CrucibleBlockActor.prototype, "temperature", void 0);
    __decorate([
        BlockActor.data
    ], CrucibleBlockActor.prototype, "liquidId", void 0);
    __decorate([
        BlockActor.runtime(function (self) { return CrucibleHelper.getLiquid(self.liquidId); })
    ], CrucibleBlockActor.prototype, "liquid", void 0);
    __decorate([
        BlockActor.runtime(function (target) {
            return new StateWatcher({
                isBoiling: function () { return target.isBoiling(); },
                liquid: function () { return target.liquid; }
            });
        })
    ], CrucibleBlockActor.prototype, "liquidAnimationState", void 0);
    __decorate([
        BlockActor.runtime(function () { return []; })
    ], CrucibleBlockActor.prototype, "itemAnimations", void 0);
    CrucibleBlockActor = __decorate([
        BlockActor.attachTo("thaum_crucible")
    ], CrucibleBlockActor);
    return CrucibleBlockActor;
}(BlockActor));
/// <reference path="block.ts" />  
var CrucibleItemAnimation = /** @class */ (function () {
    function CrucibleItemAnimation(crucible, item) {
        this.crucible = crucible;
        this.item = item;
        // @ts-ignore
        this.animation = null;
        this.age = 0;
        this.remove = false;
        this.rad = Math.random() * 0.2 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.startRot = Math.random() * Math.PI * 2;
        this.dir = (Math.random() - 0.5) / 8;
        this.sinkDir = Math.random() < 0.5 ? 1 : -1;
        this.dirZ = Math.round(Math.random());
        this.size = 0.2;
        // this check is not fully valid but it is ok for now
        this.size = item.id < 255 || item.id > 8192 ? 0.15 : 0.3;
        this.position = new Vector3(crucible.position.x + 0.5, crucible.position.y + 15 / 16 + Math.random() * (1 / 24), crucible.position.z + 0.5);
    }
    CrucibleItemAnimation.prototype.deploy = function () {
        this.age = 0;
        this.remove = false;
        var target = this;
        Updatable.addUpdatable({
            // @ts-ignore
            update: function () {
                target.update();
                this.remove = target.remove;
            }
        });
    };
    CrucibleItemAnimation.prototype.update = function () {
        // do some magic
        var hRot = Math.PI / 2 + Math.sin(this.age / 100 * Math.PI * 2) / 4;
        if (this.age >= 80)
            hRot = Math.PI / 2 + Math.sin(this.age / 100 * Math.PI * 2) / 4 + this.sinkDir * Math.sin((this.age - 80) / 40 * Math.PI / 2);
        var h = 0;
        if (this.age >= 80)
            h = ((this.age - 80) / 20) * 0.1;
        var x = this.position.x + Math.sin(this.angle) * this.rad;
        var z = this.position.z + Math.cos(this.angle) * this.rad;
        var y = this.position.y + Math.sin(this.age / 40 * Math.PI * 2) / 48 - h;
        var size = this.size * Math.min(10, this.age) / 10 || 0.001;
        this.angle += this.dir;
        this.rad *= 0.999;
        if (this.animation == null) {
            // @ts-ignore
            this.animation = new Animation.Item(x, y, z);
            this.animation.describeItem({
                id: this.item.id,
                count: 1,
                data: this.item.data,
                extra: this.item.extra,
                material: "thaum_crucible_item",
                notRandomize: true
            });
            this.animation.load();
        }
        this.animation.setPos(x, y, z);
        this.animation.transform().lock().clear().scale(size, size, size).rotate(hRot + Math.PI * 2, this.startRot + this.age / 320 * Math.PI * 2 + Math.PI * 2, this.dirZ * hRot + Math.PI * 2).unlock();
        this.animation.getShaderUniforms().setUniformValue("ThaumCrucible", "ITEM_BURN_OUT", Math.max(0, this.age - 120) / 30);
        if (this.age++ > 160) {
            this.animation.destroy();
            this.animation = null;
            this.remove = true;
        }
    };
    return CrucibleItemAnimation;
}());
;
var CrucibleHelper;
(function (CrucibleHelper) {
    var liquids = {};
    function getLiquid(name) {
        return liquids[name];
    }
    CrucibleHelper.getLiquid = getLiquid;
    function registrerLiquid(liquid) {
        liquids[liquid.name] = liquid;
    }
    CrucibleHelper.registrerLiquid = registrerLiquid;
    var fireSources = {};
    function registerFireSource(id, power) {
        fireSources[id] = power;
    }
    CrucibleHelper.registerFireSource = registerFireSource;
    function getFireSource(id) {
        return fireSources[id] ? fireSources[id] : -1;
    }
    CrucibleHelper.getFireSource = getFireSource;
})(CrucibleHelper || (CrucibleHelper = {}));
Callback.addCallback("PostLoaded", function () {
    CrucibleHelper.registerFireSource(10, 1); // lava
    CrucibleHelper.registerFireSource(11, 1); // lava
    CrucibleHelper.registerFireSource(50, 0.25); // torch
    CrucibleHelper.registerFireSource(51, 0.5); // fire
    CrucibleHelper.registerFireSource(464, 0.5); // campfire
    CrucibleHelper.registerFireSource(BlockID["nitor"], 2); // nitor
});
var CrucibleLiquid = /** @class */ (function () {
    function CrucibleLiquid(name) {
        this.name = name;
    }
    CrucibleLiquid.register = function (name) {
        return function (constructor) {
            var liquid = new constructor(name);
            CrucibleHelper.registrerLiquid(liquid);
        };
    };
    CrucibleLiquid.prototype.getBoilingTemperature = function () {
        return 0;
    };
    CrucibleLiquid.prototype.getVisualDescription = function (temperature) {
        return { texture: null, material: null };
    };
    CrucibleLiquid.prototype.animateIdle = function (pos, temperature) {
    };
    CrucibleLiquid.prototype.animateBoiling = function (pos) {
    };
    return CrucibleLiquid;
}());
function deco() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
var CrucibleLiquidWater = /** @class */ (function (_super) {
    __extends(CrucibleLiquidWater, _super);
    function CrucibleLiquidWater() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CrucibleLiquidWater_1 = CrucibleLiquidWater;
    CrucibleLiquidWater.prototype.getVisualDescription = function (temperature) {
        return {
            texture: "models/crucible/water_ripple_and_sky.png",
            material: temperature >= 100 ? "thaum_crucible_water_boiling" : "thaum_crucible_water"
        };
    };
    CrucibleLiquidWater.prototype.getBoilingTemperature = function () {
        return 100;
    };
    CrucibleLiquidWater.prototype.animateBoiling = function (pos) {
        for (var i = 0; i < 2; i++) {
            var position_1 = Vector3.random(function () { return Math.random() * 0.75 + 0.125; });
            position_1.y = 15 / 16;
            Gears.Particles.addParticle(CrucibleLiquidWater_1.surfaceBubbleParticle, pos.plus(position_1));
        }
        var position = Vector3.random(function () { return Math.random() * 0.75 + 0.125; });
        position.y = 1.5;
        Gears.Particles.addParticle(CrucibleLiquidWater_1.steamParticle, pos.plus(position), Vector3.UP.scale(0.06));
    };
    var CrucibleLiquidWater_1;
    CrucibleLiquidWater.surfaceBubbleParticle = Particles.registerParticleType({
        texture: "crucible_water_bubble_surface",
        render: 2,
        size: [0.6, 0.8],
        lifetime: [5, 10],
        color: [0.6, 0.8, 1, 1],
        animators: {
            size: { fadeIn: 1 }
        }
    });
    CrucibleLiquidWater.steamParticle = Particles.registerParticleType({
        texture: "crucible_water_steam",
        render: 2,
        size: [4, 6],
        lifetime: [100, 150],
        color: [1, 1, 1, 0.2],
        animators: {
            alpha: { fadeIn: 0.6, fadeOut: 0.3 }
        }
    });
    CrucibleLiquidWater = CrucibleLiquidWater_1 = __decorate([
        CrucibleLiquid.register("water")
    ], CrucibleLiquidWater);
    return CrucibleLiquidWater;
}(CrucibleLiquid));
var NitorItem = /** @class */ (function (_super) {
    __extends(NitorItem, _super);
    function NitorItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NitorItem.prototype.itemUse = function (coords, item, block) {
        var position = coords.position;
        if (!Gears.World.getBlock(position).canBeReplaced) {
            position = coords.relative;
            if (!Gears.World.getBlock(position).canBeReplaced)
                return;
        }
        Gears.World.setBlock(position, BlockID["nitor"], this.tileData);
        var x = position.x, y = position.y, z = position.z;
        var ba = World.addTileEntity(x, y, z);
        ba.data.isColored = this.isColored;
    };
    __decorate([
        ItemActor.data(0)
    ], NitorItem.prototype, "tileData", void 0);
    __decorate([
        ItemActor.data(true)
    ], NitorItem.prototype, "isColored", void 0);
    NitorItem = __decorate([
        ItemActor.singleton
    ], NitorItem);
    return NitorItem;
}(ItemActor));
var NitorActorFactory = /** @class */ (function () {
    function NitorActorFactory(placeTileData) {
        if (placeTileData === void 0) { placeTileData = -1; }
        this.placeTileData = placeTileData;
        this.itemActorClass = NitorItem;
    }
    NitorActorFactory.prototype.instantiate = function (id, uid, data) {
        if (data === void 0) { data = null; }
        var nitor = new this.itemActorClass(id, uid, data);
        nitor.isColored = this.placeTileData != -1;
        nitor.tileData = this.placeTileData;
        return nitor;
    };
    return NitorActorFactory;
}());
// TODO: Убрать куда-нибудь
var DyeColors = {
    "BLACK": 0x1D1D21,
    "RED": 0xB02E26,
    "GREEN": 0x5E7C16,
    "BROWN": 0x835432,
    "BLUE": 0x3C44AA,
    "PURPLE": 0x8932B8,
    "CYAN": 0x169C9C,
    "LIGHT_GRAY": 0x9D9D97,
    "GRAY": 0x474F52,
    "PINK": 0xF38BAA,
    "LIME": 0x80C71F,
    "YELLOW": 0xFED83D,
    "LIGHT_BLUE": 0x3AB3DA,
    "MAGENTA": 0xC74EBD,
    "ORANGE": 0xF9801D,
    "WHITE": 0xF9FFFE
};
ItemRegistry.register("nitor", new NitorActorFactory(-1), {
    name: "Nitor",
    texture: "nitor",
    inCreative: true
});
for (var i in DyeColors) {
    if (parseInt(i, 10))
        continue;
    var colorName = i.split("_").map(function (e) { return e[0].toUpperCase() + e.substring(1, e.length).toLowerCase(); }).join(" ");
    var colorData = Object.keys(DyeColors).indexOf(i);
    ItemRegistry.register("nitor_" + i.toLowerCase(), new NitorActorFactory(colorData), {
        name: colorName + " Nitor",
        texture: ["nitor_colored", colorData],
        inCreative: true
    });
}
/// <reference path="item.ts" />
BlockRegistry.register("nitor", {
    variations: {
        name: "Nitor",
        texture: "blank",
        inCreative: false
    },
    type: {
        lightLevel: 15,
        lightOpacity: 0
    },
    collider: new ICRender.CollisionShape(),
});
var NitorBlockActor = /** @class */ (function (_super) {
    __extends(NitorBlockActor, _super);
    function NitorBlockActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.color = -1;
        _this.startPos = Vector3.ZERO;
        _this.endPos = Vector3.ZERO;
        _this.progress = 0;
        return _this;
    }
    NitorBlockActor.prototype.onLoad = function () {
        if (this.isColored) {
            var _a = this.position, x = _a.x, y = _a.y, z = _a.z;
            this.color = World.getBlockData(x, y, z);
        }
    };
    NitorBlockActor.prototype.onTick = function () {
        if (!this.endPos)
            this.endPos = Vector3.random().scale(0.6).plus(0.2);
        this.emitter.position = this.position
            .plus(this.startPos.lerp(this.endPos, Math.sin(this.progress * Math.PI / 2)));
        this.progress = Math.min(1, this.progress + 0.05);
        if (this.progress >= 1 && Math.random() < 0.05) {
            this.startPos = new Vector3(this.endPos);
            this.endPos = null;
            this.progress = 0;
        }
        this.animate();
    };
    NitorBlockActor.prototype.animate = function () {
        var hvel = Vector2.random(function () { return Math.random() - 0.5; }).scale(0.0025);
        var vel = new Vector3(hvel.x, Math.random() * 0.02, hvel.y);
        this.emitter.emit(this.getParticleType(), Vector3.ZERO, vel);
    };
    NitorBlockActor.prototype.onDestroy = function () {
        var type = this.getParticleType();
        this.emitter.stop();
        for (var i = 0; i < 20; i++) {
            this.emitter.emit(type, Vector3.ZERO, Vector3.random().minus(0.5).divide(40));
        }
    };
    NitorBlockActor.prototype.onInit = function () {
        this.emitter = new Gears.ParticleEmitter(this.position.plus(0.5));
        this.emitter.emitRelatively = true;
        this.startPos = Vector3.ZERO.plus(0.5, 0, 0.5);
        this.endPos = Vector3.ZERO.plus(0.5);
    };
    NitorBlockActor.prototype.getParticleType = function () {
        var _a;
        return (_a = this.coloredParticles[this.color]) !== null && _a !== void 0 ? _a : this.defaultParticle;
    };
    __decorate([
        BlockActor.global(function () {
            var list = [];
            for (var i_16 in DyeColors) {
                var hex = DyeColors[i_16];
                var r = ((hex >> 16) & 0xff) / 255;
                var g = ((hex >> 8) & 0xff) / 255;
                var b = ((hex) & 0xff) / 255;
                list.push(Particles.registerParticleType({
                    texture: "nitor",
                    render: (r + g + b) / 3 < 0.3 ? 2 : 0,
                    size: [1, 3.5],
                    lifetime: [30, 30],
                    color: [r, g, b, 0.175],
                    animators: {
                        alpha: { fadeIn: .4, fadeOut: .4 },
                        size: { fadeIn: .4, fadeOut: .4 }
                    }
                }));
            }
            return list;
        })
    ], NitorBlockActor.prototype, "coloredParticles", void 0);
    __decorate([
        BlockActor.global(function () {
            return Particles.registerParticleType({
                texture: "nitor",
                render: 0,
                size: [1, 3.5],
                lifetime: [30, 30],
                color: [0.95, 0.73, 0.35, 0.175],
                animators: {
                    alpha: { fadeIn: .4, fadeOut: .4 },
                    size: { fadeIn: .4, fadeOut: .4 }
                }
            });
        })
    ], NitorBlockActor.prototype, "defaultParticle", void 0);
    __decorate([
        BlockActor.runtime
    ], NitorBlockActor.prototype, "color", void 0);
    __decorate([
        BlockActor.data(function () { return false; })
    ], NitorBlockActor.prototype, "isColored", void 0);
    __decorate([
        BlockActor.runtime
    ], NitorBlockActor.prototype, "startPos", void 0);
    __decorate([
        BlockActor.runtime
    ], NitorBlockActor.prototype, "endPos", void 0);
    __decorate([
        BlockActor.runtime
    ], NitorBlockActor.prototype, "progress", void 0);
    __decorate([
        BlockActor.runtime
    ], NitorBlockActor.prototype, "emitter", void 0);
    NitorBlockActor = __decorate([
        BlockActor.attachTo("nitor")
    ], NitorBlockActor);
    return NitorBlockActor;
}(BlockActor));
/*
class Wand extends Wandable {
    readonly canUseInCrafting = true;
    readonly canHoldFocus = true;
    readonly recipe: [string, string, string] = [
        "  c",
        " r ",
        "c  "
    ];

    constructor() {
        super();
    }
}

class Staff extends Wandable {
    readonly canUseInCrafting = false;
    readonly canHoldFocus = true;
    readonly recipe: [string, string, string] = [
        "  p", // p is Primal Charm
        " r ",
        "r  "
    ];

    constructor() {
        super();
    }
}

class Scepter extends Wandable {
    readonly canUseInCrafting = true;
    readonly canHoldFocus = false;
    readonly recipe: [string, string, string] = [
        " cp", // p is Primal Charm
        " rc",
        "c  "
    ];

    constructor() {
        super();
    }
}


// rods
WandableRegistry.registerRodMaterial("wood", 25);
WandableRegistry.registerRodMaterial("greatwood", 50);
WandableRegistry.registerRodMaterial("silverwood", 100);

// caps
WandableRegistry.registerCapMaterial("iron", 1.05);
WandableRegistry.registerCapMaterial("gold", 1);
WandableRegistry.registerCapMaterial("thaum", 0.9);


WandableRegistry.register("wand", "stick", "iron");
WandableRegistry.register("wand", "stick", "gold");
WandableRegistry.register("wand", "stick", "thaumium");

WandableRegistry.register("wand", "greatwood", "iron");
WandableRegistry.register("wand", "greatwood", "gold");
WandableRegistry.register("wand", "greatwood", "thaumium");

WandableRegistry.register("wand", "silverwood", "iron");
WandableRegistry.register("wand", "silverwood", "gold");
WandableRegistry.register("wand", "silverwood", "thaumium");
*/
var WandTest = /** @class */ (function (_super) {
    __extends(WandTest, _super);
    function WandTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.randomValue = Math.random().toFixed(3);
        return _this;
    }
    return WandTest;
}(Wandable));
ItemRegistry.register("wand_wood_iron", WandTest, {
    texture: "wand_wood_iron",
    name: "wood core, iron cap",
    stack: 1,
    toolRender: true,
    useAnimation: 1
});
BlockRegistry.register("amber", {
    variations: [{
            name: "Amber",
            texture: "amber",
            inCreative: true
        }]
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ, random) {
    var chunk = new Chunk(chunkX, chunkZ);
    for (var i = 0; i < 20; i++) {
        var coords = WorldGenerator.randomCoords(random, chunk, 4, 64);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["amber"], 0, 1, false, random.nextInt());
    }
});
BlockRegistry.register("cinderpearl", {
    type: {
        renderType: 1,
        destroyTime: 0
    },
    variations: [{
            name: "Cinderpearl",
            texture: "cinderpearl",
            inCreative: true,
            shape: [new Vector3(1 / 8, 0, 1 / 8), new Vector3(7 / 8, 1, 7 / 8)]
        }],
    collider: function () {
        var shape = new ICRender.CollisionShape();
        shape.addEntry().addBox(1, 1, 1, 0, 0, 0);
        return shape;
    },
    callbacks: {
        place: function (coords, _, block) {
            var place = block.canBeReplaced ? coords.position : coords.relative;
            var downBlockID = Gears.World.getBlock(place.minus(0, 1, 0));
            if (Gears.World.getBlock(place).canBeReplaced && (downBlockID.id == VanillaBlockID.sand)) {
                Gears.World.setBlock(place, BlockID["cinderpearl"]);
            }
        },
        neighbourChanged: function (coords, block, changeCoords) {
            coords = new Vector3(coords);
            var downBlockID = Gears.World.getBlock(coords.minus(0, 1, 0));
            if (downBlockID.id == VanillaBlockID.sand)
                return;
            Gears.World.destroyBlock(new Vector3(coords), true);
        },
        animateTick: function (position, block) {
            Gears.Particles.addParticle(Native.ParticleType.flame, position.plus(0.5, 0.5, 0.5), Vector3.random(function () { return Math.random() - 0.5; }).divide(200));
        }
    }
});
World.addGenerationCallback("GenerateChunk", function (chunkX, chunkZ, random) {
    // let source = BlockSource.getDefaultForActor(Gears.Player.uID);
    var x = Math.floor(random.nextFloat() * 16);
    var z = Math.floor(random.nextFloat() * 16);
    var chunk = new Chunk(chunkX, chunkZ);
    var real = chunk.real;
    real = real.plus(x, 0, z);
    var biome = Gears.World.getBiomeAt(real);
    var biomes = [Biome.DESERT, Biome.DESERT_HILLS, Biome.MESA, Biome.MESA_PLATEAU];
    if (~biomes.indexOf(biome)) {
        if (random.nextInt(20))
            return;
        var structure = new CinderpearlMeadow(random.nextInt(10) + 5, 5);
        structure.place(/*source*/ null, real.plus(0, 1, 0), random, true);
    }
}, "thaumcraft_cinderpearl"); // 2066665646
var CinderpearlMeadow = /** @class */ (function () {
    function CinderpearlMeadow(amount, radius) {
        if (amount === void 0) { amount = 5; }
        if (radius === void 0) { radius = 10; }
        this.amount = amount;
        this.radius = radius;
    }
    CinderpearlMeadow.prototype.place = function (source, position, random, isWorldGenerator) {
        for (var i_17 = 0; i_17 < this.amount; i_17++) {
            var theta = random.nextFloat() * 2 * Math.PI;
            var radius = random.nextFloat() * this.radius;
            var px = Math.sin(theta) * radius;
            var pz = Math.cos(theta) * radius;
            var place = WorldGenerator.getHighestSurface(position.plus(px, 0, pz));
            if (!place || Gears.World.getBlock(place).id != VanillaBlockID.sand)
                continue;
            Gears.World.setBlock(place.plus(0, 1, 0), BlockID["cinderpearl"]);
        }
        return true;
    };
    return CinderpearlMeadow;
}());
BlockRegistry.register("cinnibar", {
    variations: [{
            name: "Cinnibar",
            texture: "cinnibar",
            inCreative: true
        }]
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ, random) {
    var chunk = new Chunk(chunkX, chunkZ);
    for (var i = 0; i < 20; i++) {
        var coords = WorldGenerator.randomCoords(random, chunk, 4, 64);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["cinnibar"], 0, 2, false, random.nextInt());
    }
});
var CrystalRenderer;
(function (CrystalRenderer) {
    CrystalRenderer.models = [];
    function invalidateModels(color) {
        CrystalRenderer.models.splice(0, CrystalRenderer.models.length);
        for (var i = 0; i < 8; i++) {
            var mesh = new RenderMesh();
            mesh.setColor(color.r, color.g, color.b);
            mesh.importFromFile(__dir__ + ("resources/res/models/crystal-" + (i + 1) + ".obj"), "obj", null);
            mesh.setBlockTexture("crystal", 0);
            CrystalRenderer.models.push(mesh);
        }
    }
    var group = ICRender.getGroup("not-solid");
    var neighbors = [
        new Vector3(0, 0, 0),
        new Vector3(Math.PI, 0, 0),
        new Vector3(Math.PI / 2, 0, 0),
        new Vector3(-Math.PI / 2, 0, 0),
        new Vector3(0, 0, -Math.PI / 2),
        new Vector3(0, 0, Math.PI / 2)
    ];
    function createRender(c) {
        var e_8, _a;
        var render = new ICRender.Model();
        invalidateModels(c);
        var seed = 0;
        try {
            for (var neighbors_1 = __values(neighbors), neighbors_1_1 = neighbors_1.next(); !neighbors_1_1.done; neighbors_1_1 = neighbors_1.next()) {
                var rot = neighbors_1_1.value;
                var pos = Side.toVector(seed++);
                for (var i_18 = 0; i_18 < CrystalRenderer.models.length; i_18++) {
                    var m = CrystalRenderer.models[i_18].clone();
                    m.rotate(0.5, 0.5, 0.5, rot.x, rot.y, rot.z);
                    var probability = ICRender.OR(ICRender.RANDOM(i_18, CrystalRenderer.models.length, seed), ICRender.RANDOM(i_18, CrystalRenderer.models.length + i_18, seed + i_18));
                    var condition = ICRender.AND(probability, ICRender.BLOCK(pos.x, pos.y, pos.z, group, false));
                    render.addEntry(m).setCondition(condition);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (neighbors_1_1 && !neighbors_1_1.done && (_a = neighbors_1.return)) _a.call(neighbors_1);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return render;
    }
    CrystalRenderer.createRender = createRender;
    function createHandModel(color) {
        var mesh = new RenderMesh();
        mesh.setColor(color.r, color.g, color.b);
        mesh.importFromFile(__dir__ + "resources/res/models/crystal.obj", "obj", null);
        mesh.setBlockTexture("crystal", 0);
        return mesh;
    }
    CrystalRenderer.createHandModel = createHandModel;
})(CrystalRenderer || (CrystalRenderer = {}));
/// <reference path="renderer.ts" />
var e_9, _a;
var _loop_1 = function (aspect) {
    var crystalID = "crystal_" + aspect.name;
    var name = "Crystal of " + aspect.capitalizedName;
    ItemRegistry.register(crystalID, {
        name: name,
        texture: "crystal_" + aspect.name
    });
    BlockRegistry.register(crystalID, {
        variations: {
            name: name,
            texture: "blank",
            inCreative: true
        },
        callbacks: {
            neighbourChanged: function (coords, block, changeCoords) {
                var e_10, _a;
                if (Block.isSolid(World.getBlockID(changeCoords.x, changeCoords.y, changeCoords.z)))
                    return;
                var pos = new Vector3(coords);
                try {
                    for (var _b = __values(Side.allVectors()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var s = _c.value;
                        var _d = pos.plus(s), x_1 = _d.x, y_1 = _d.y, z_1 = _d.z;
                        if (Block.isSolid(World.getBlockID(x_1, y_1, z_1)))
                            return;
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
                var x = coords.x, y = coords.y, z = coords.z;
                World.destroyBlock(x, y, z, true);
            },
            drop: function (coords, block, level) {
                return new ItemStack(ItemID[crystalID], 1, 0);
            }
        },
        model: CrystalRenderer.createRender(aspect.color),
        collider: new ICRender.CollisionShape()
    });
};
try {
    for (var _b = __values(PrimalAspect.all), _c = _b.next(); !_c.done; _c = _b.next()) {
        var aspect = _c.value;
        _loop_1(aspect);
    }
}
catch (e_9_1) { e_9 = { error: e_9_1 }; }
finally {
    try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    }
    finally { if (e_9) throw e_9.error; }
}
Callback.addCallback("PostLoaded", function () {
    var e_11, _a;
    try {
        for (var _b = __values(PrimalAspect.all), _c = _b.next(); !_c.done; _c = _b.next()) {
            var aspect = _c.value;
            var crystalBlockID = "crystal_" + aspect.name;
            var uiMesh = CrystalRenderer.createHandModel(aspect.color);
            var handMesh = uiMesh.clone();
            handMesh.translate(0, 0.5, 0);
            // @ts-ignore
            ItemModel.getFor(BlockID[crystalBlockID], 0)
                .setUiModel(uiMesh, "atlas::terrain")
                .setHandModel(handMesh, "atlas::terrain");
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_11) throw e_11.error; }
    }
});
Callback.addCallback("LevelDisplayed", function () {
    var group = ICRender.getGroup("not-solid");
    for (var i in VanillaTileID) {
        var id = parseInt(VanillaBlockID[i]);
        if (Block.isSolid(id))
            group.add(id, -1);
    }
    for (var i in BlockID) {
        var id = BlockID[i];
        if (Block.isSolid(id))
            group.add(id, -1);
    }
});
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ, random) {
    var chunk = new Chunk(chunkX, chunkZ);
    for (var i = 0; i < 20; i++) {
        var coords = chunk.real.plus(random.nextInt(16), 0, random.nextInt(16));
        coords = WorldGenerator.getLowestSurface(coords);
        if (Gears.World.getBlock(coords).id != 1)
            continue;
        var aspect = PrimalAspect.all.random();
        var id = BlockID["crystal_" + aspect.name];
        Gears.World.setBlock(coords, id);
    }
});
BlockRegistry.register("greatwood_log", {
    variations: [{
            name: "Great Wood Lod",
            texture: ["greatwood_top", "greatwood_top", "greatwood_side"],
            inCreative: true
        }, {
            name: "Great Wood Lod",
            texture: ["greatwood_side", "greatwood_side", "greatwood_top", "greatwood_top", "greatwood_side"],
            inCreative: false
        }, {
            name: "Great Wood Lod",
            texture: ["greatwood_side", "greatwood_side", "greatwood_side", "greatwood_side", "greatwood_top"],
            inCreative: false
        }, {
            name: "Great Wood Lod",
            texture: "greatwood_side",
            inCreative: false
        }]
});
BlockRegistry.register("greatwood_leaves", {
    type: {
        base: 18,
        destroyTime: 0.2,
        explosionResistance: 1,
        renderLayer: 3,
        lightOpacity: 4,
        translucency: 4,
        solid: false,
    },
    variations: [{
            name: "Great Wood Leaves",
            texture: "greatwood_leaves",
            inCreative: true
        }, {
            name: "Great Wood Leaves",
            texture: "greatwood_leaves_low",
            inCreative: false
        }],
    model: function () {
        var group = ICRender.getGroup("greatwood_leaves");
        group.add(BlockID["greatwood_leaves"], -1);
        var model = new ICRender.Model();
        var e = 0.0043;
        var m1 = new BlockRenderer.Model(0 - e, 0 - e, 0 - e, 1 + e, 1 + e, 1 + e, BlockID["greatwood_leaves"], 0);
        var m2 = new BlockRenderer.Model(0, 0, 0, 1 + e, 1 + e, 1 + e, BlockID["greatwood_leaves"], 1);
        var x = ICRender.AND(ICRender.BLOCK(-1, 0, 0, group, false), ICRender.BLOCK(1, 0, 0, group, false));
        var y = ICRender.AND(ICRender.BLOCK(0, -1, 0, group, false), ICRender.BLOCK(0, 1, 0, group, false));
        var z = ICRender.AND(ICRender.BLOCK(0, 0, -1, group, false), ICRender.BLOCK(0, 0, 1, group, false));
        model.addEntry(m1).setCondition(ICRender.NOT(ICRender.AND(x, y, z)));
        model.addEntry(m2).setCondition(ICRender.AND(x, y, z));
        return model;
    }
});
Callback.addCallback("ItemUse", function (coords, item) {
    if (item.id == 388) {
        var structure = new GreatWoodStructure();
        structure.place(null, new Vector3(coords.relative), new Random(), false);
    }
});
World.addGenerationCallback("GenerateChunk", function (chunkX, chunkZ, random) {
    // let source = BlockSource.getDefaultForActor(Gears.Player.uID);
    var x = Math.floor(random.nextFloat() * 16);
    var z = Math.floor(random.nextFloat() * 16);
    var chunk = new Chunk(chunkX, chunkZ);
    var real = chunk.real;
    real = real.plus(x, 0, z);
    var biome = Gears.World.getBiomeAt(real);
    var biomes = [Biome.PLAINS, Biome.FOREST, Biome.BIRCH_FOREST, Biome.ROOFED_FOREST, Biome.SWAMPLAND, Biome.SAVANNA];
    if (~biomes.indexOf(biome)) {
        if (random.nextInt(75))
            return;
        var structure = new GreatWoodStructure();
        real = WorldGenerator.getHighestSurface(real).floor();
        if (Gears.World.getBlock(real).id != 2)
            return;
        structure.place(/*source*/ null, real.plus(0, 1, 0), random, true);
    }
}, "thaumcraft_great_wood");
var GreatWoodStructure = /** @class */ (function () {
    function GreatWoodStructure() {
        this.rand = new Random();
        this.basePos = [0, 0, 0];
        this.heightLimit = 0;
        this.heightAttenuation = 0.618;
        this.branchDensity = 1.0;
        this.branchSlope = 0.38;
        this.scaleWidth = 1.2;
        this.leafDensity = 0.9;
        this.trunkSize = 2;
        this.heightLimitLimit = 11;
        this.leafDistanceLimit = 4;
        this.spiders = false;
    }
    GreatWoodStructure.prototype.generateLeafNodeList = function () {
        var x;
        this.height = Math.floor(this.heightLimit * this.heightAttenuation);
        if (this.height >= this.heightLimit) {
            this.height = this.heightLimit - 1;
        }
        if ((x = Math.floor(1.382 + Math.pow(this.leafDensity * this.heightLimit / 13.0, 2.0))) < 1)
            x = 1;
        var y = [];
        var leavesMin = this.basePos[1] + this.heightLimit - this.leafDistanceLimit;
        var z = 1;
        var var5 = this.basePos[1] + this.height;
        var h = leavesMin - this.basePos[1];
        y[0] = [];
        y[0][0] = this.basePos[0];
        y[0][1] = leavesMin--;
        y[0][2] = this.basePos[2];
        y[0][3] = var5;
        while (h >= 0) {
            var var8 = this.layerSize(h);
            if (var8 < 0) {
                --leavesMin;
                --h;
                continue;
            }
            var var9 = 0.5;
            for (var var7 = 0; var7 < x; ++var7) {
                var x1 = this.scaleWidth * var8 * (this.rand.nextFloat() + 0.328);
                var x3 = this.rand.nextFloat() * 2.0 * Math.PI;
                var x5 = Math.floor((x1 * Math.sin(x3) + this.basePos[0] + var9));
                var x6 = Math.floor((x1 * Math.cos(x3) + this.basePos[2] + var9));
                var x7 = [x5, leavesMin, x6];
                var x8 = [x5, leavesMin + this.leafDistanceLimit, x6];
                if (this.checkBlockLine(x7, x8) != -1)
                    continue;
                var x9 = [this.basePos[0], this.basePos[1], this.basePos[2]];
                var distance = Math.sqrt(Math.pow(Math.abs(this.basePos[0] - x7[0]), 2.0) + Math.pow(Math.abs(this.basePos[2] - x7[2]), 2.0));
                var y2 = distance * this.branchSlope;
                x9[1] = x7[1] - y2 > var5 ? var5 : Math.floor(x7[1] - y2);
                if (this.checkBlockLine(x9, x7) != -1)
                    continue;
                y[z] = [];
                y[z][0] = x5;
                y[z][1] = leavesMin;
                y[z][2] = x6;
                y[z][3] = x9[1];
                ++z;
            }
            --leavesMin;
            --h;
        }
        this.leafNodes = y.select(function (e) { return e; });
    };
    GreatWoodStructure.prototype.genTreeLayer = function (x, y, z, size, index, blockID) {
        var var7 = (size + 0.618);
        var var8 = GreatWoodStructure.otherCoordPairs[index];
        var var9 = GreatWoodStructure.otherCoordPairs[index + 3];
        var x0 = [x, y, z];
        var coords = [0, 0, 0];
        var x3 = -var7;
        coords[index] = x0[index];
        for (var x2 = -var7; x2 <= var7; ++x2) {
            coords[var8] = x0[var8] + x2;
            x3 = -var7;
            while (x3 <= var7) {
                var distance = Math.pow(Math.abs(x2) + 0.5, 2.0) + Math.pow(Math.abs(x3) + 0.5, 2.0);
                if (distance > (size * size)) {
                    ++x3;
                    continue;
                }
                try {
                    coords[var9] = x0[var9] + x3;
                    // IBlockState state = this.world.func_180495_p(new Vector3(x1[0], x1[1], x1[2]));
                    var id = Gears.World.getBlock(new Vector3(coords[0], coords[1], coords[2])).id;
                    if (id != BlockID["greatwood_leaves"]) {
                        Gears.World.setBlock(new Vector3(coords[0], coords[1], coords[2]), blockID);
                    }
                }
                catch (exception) {
                    // empty catch block
                }
                ++x3;
            }
        }
    };
    GreatWoodStructure.prototype.layerSize = function (par1) {
        if (par1 < this.heightLimit * 0.3) {
            return -1.618;
        }
        var y = this.heightLimit / 2;
        var y2 = this.heightLimit / 2 - par1;
        var z = y2 == 0 ? y : (Math.abs(y2) >= y ? 0 : Math.sqrt(Math.pow(Math.abs(y), 2.0) - Math.pow(Math.abs(y2), 2.0)));
        return z *= 0.5;
    };
    GreatWoodStructure.prototype.leafSize = function (par1) {
        return par1 >= 0 && par1 < this.leafDistanceLimit ? (par1 != 0 && par1 != this.leafDistanceLimit - 1 ? 3 : 2) : -1;
    };
    GreatWoodStructure.prototype.generateLeafNode = function (x, y, z) {
        var limit = y + this.leafDistanceLimit;
        for (var ys = y; ys < limit; ++ys) {
            var size = this.leafSize(ys - y);
            this.genTreeLayer(x, ys, z, size, 1, BlockID["greatwood_leaves"]);
        }
    };
    GreatWoodStructure.prototype.placeBlockLine = function (par1ArrayOfInteger, par2ArrayOfInteger, blockID) {
        var z = [0, 0, 0];
        var var6 = 0;
        for (var var5 = 0; var5 < 3; var5 = Math.floor((var5 + 1))) {
            z[var5] = par2ArrayOfInteger[var5] - par1ArrayOfInteger[var5];
            if (Math.abs(z[var5]) <= Math.abs(z[var6]))
                continue;
            var6 = var5;
        }
        if (z[var6] != 0) {
            var var7 = GreatWoodStructure.otherCoordPairs[var6];
            var var8 = GreatWoodStructure.otherCoordPairs[var6 + 3];
            var var9 = z[var6] > 0 ? 1 : -1;
            var x0 = z[var7] / z[var6];
            var x2 = z[var8] / z[var6];
            var x4 = [0, 0, 0];
            var x6 = z[var6] + var9;
            for (var x5 = 0; x5 != x6; x5 += var9) {
                var x9 = void 0;
                x4[var6] = Math.floor(((par1ArrayOfInteger[var6] + x5) + 0.5));
                x4[var7] = Math.floor((par1ArrayOfInteger[var7] + x5 * x0 + 0.5));
                x4[var8] = Math.floor((par1ArrayOfInteger[var8] + x5 * x2 + 0.5));
                var x7 = 1;
                var x8 = Math.abs(x4[0] - par1ArrayOfInteger[0]);
                var y0 = Math.max(x8, x9 = Math.abs(x4[2] - par1ArrayOfInteger[2]));
                if (y0 > 0) {
                    if (x8 == y0) {
                        x7 = 0;
                    }
                    else if (x9 == y0) {
                        x7 = 2;
                    }
                }
                if (!Gears.World.getBlock(new Vector3(x4[0], x4[1], x4[2])).canBeReplaced)
                    continue;
                Gears.World.setBlock(new Vector3(x4[0], x4[1], x4[2]), blockID);
            }
        }
    };
    GreatWoodStructure.prototype.generateLeaves = function () {
        var y = this.leafNodes.length;
        for (var x = 0; x < y; ++x) {
            var y2 = this.leafNodes[x][0];
            var z = this.leafNodes[x][1];
            var var5 = this.leafNodes[x][2];
            this.generateLeafNode(y2, z, var5);
        }
    };
    GreatWoodStructure.prototype.leafNodeNeedsBase = function (par1) {
        return par1 >= this.heightLimit * 0.2;
    };
    GreatWoodStructure.prototype.generateTrunk = function () {
        var x = this.basePos[0];
        var y = this.basePos[1];
        var y2 = this.basePos[1] + this.height;
        var z = this.basePos[2];
        var var5 = [x, y, z];
        var var6 = [x, y2, z];
        this.placeBlockLine(var5, var6, BlockID["greatwood_log"]);
        if (this.trunkSize == 2) {
            var5[0] = var5[0] + 1;
            var6[0] = var6[0] + 1;
            this.placeBlockLine(var5, var6, BlockID["greatwood_log"]);
            var5[2] = var5[2] + 1;
            var6[2] = var6[2] + 1;
            this.placeBlockLine(var5, var6, BlockID["greatwood_log"]);
            var5[0] = var5[0] + -1;
            var6[0] = var6[0] + -1;
            this.placeBlockLine(var5, var6, BlockID["greatwood_log"]);
        }
    };
    GreatWoodStructure.prototype.generateLeafNodeBases = function () {
        var y = this.leafNodes.length;
        var y2 = [this.basePos[0], this.basePos[1], this.basePos[2]];
        for (var x = 0; x < y; ++x) {
            var z = this.leafNodes[x];
            var var5 = [z[0], z[1], z[2]];
            y2[1] = z[3];
            var var6 = y2[1] - this.basePos[1];
            if (!this.leafNodeNeedsBase(var6))
                continue;
            this.placeBlockLine(y2, var5, BlockID["greatwood_log"]);
        }
    };
    GreatWoodStructure.prototype.checkBlockLine = function (par1ArrayOfInteger, par2ArrayOfInteger) {
        var x4;
        var y2 = [0, 0, 0];
        var var5 = 0;
        for (var z = 0; z < 3; z = Math.floor(z + 1)) {
            y2[z] = par2ArrayOfInteger[z] - par1ArrayOfInteger[z];
            if (Math.abs(y2[z]) <= Math.abs(y2[var5]))
                continue;
            var5 = z;
        }
        if (y2[var5] == 0) {
            return -1;
        }
        var var6 = GreatWoodStructure.otherCoordPairs[var5];
        var var7 = GreatWoodStructure.otherCoordPairs[var5 + 3];
        var var8 = y2[var5] > 0 ? 1 : -1;
        var var9 = y2[var6] / y2[var5];
        var x1 = y2[var7] / y2[var5];
        var x3 = [0, 0, 0];
        var x5 = y2[var5] + var8;
        for (x4 = 0; x4 != x5; x4 += var8) {
            x3[var5] = par1ArrayOfInteger[var5] + x4;
            x3[var6] = Math.floor((par1ArrayOfInteger[var6] + x4 * var9));
            x3[var7] = Math.floor((par1ArrayOfInteger[var7] + x4 * x1));
            try {
                var x6 = Gears.World.getBlock(new Vector3(x3[0], x3[1], x3[2])).id;
                if (x6 == 0 || x6 == BlockID["greatwood_leaves"])
                    continue;
                break;
            }
            catch (exception) {
                // empty catch block
            }
        }
        return x4 == x5 ? -1 : Math.abs(x4);
    };
    GreatWoodStructure.prototype.validTreeLocation = function (xs, zs) {
        var x = [this.basePos[0] + xs, this.basePos[1], this.basePos[2] + zs];
        var y = [this.basePos[0] + xs, this.basePos[1] + this.heightLimit - 1, this.basePos[2] + zs];
        try {
            /*IBlockState state = this.world.func_180495_p(new BlockPos(this.basePos[0] + x, this.basePos[1] - 1, this.basePos[2] + z));
            Block y2 = state.func_177230_c();
            boolean isSoil = y2.canSustainPlant(state, (IBlockAccess)this.world, new BlockPos(this.basePos[0] + x, this.basePos[1] - 1, this.basePos[2] + z), EnumFacing.UP, (IPlantable)((BlockSapling)Blocks.field_150345_g));
            if (!isSoil) {
                return false;
            }*/
            var z = this.checkBlockLine(x, y);
            if (z == -1) {
                return true;
            }
            if (z < 6) {
                return false;
            }
            this.heightLimit = z;
            return true;
        }
        catch (exception) {
            return false;
        }
    };
    GreatWoodStructure.prototype.place = function (source, position, random, isWorldGenerator) {
        var var6 = random.nextLong();
        this.rand.setSeed(var6);
        this.basePos[0] = position.x;
        this.basePos[1] = position.y;
        this.basePos[2] = position.z;
        if (this.heightLimit == 0) {
            this.heightLimit = this.heightLimitLimit + this.rand.nextInt(this.heightLimitLimit);
        }
        var x = 0;
        var z = 0;
        for (x = 0; x < this.trunkSize; ++x) {
            for (z = 0; z < this.trunkSize; ++z) {
                if (this.validTreeLocation(x, z))
                    continue;
                return false;
            }
        }
        this.generateLeafNodeList();
        this.generateLeaves();
        this.generateLeafNodeBases();
        this.generateTrunk();
        this.scaleWidth = 1.66;
        this.basePos[0] = position.x;
        this.basePos[1] = position.y + this.height;
        this.basePos[2] = position.z;
        this.generateLeafNodeList();
        this.generateLeaves();
        this.generateLeafNodeBases();
        this.generateTrunk();
        /*if (this.spiders) {
            this.world.func_175656_a(pos.func_177977_b(), Blocks.field_150474_ac.func_176223_P());
            TileEntityMobSpawner x4 = (TileEntityMobSpawner)par1World.func_175625_s(pos.func_177977_b());
            if (x4 != null) {
                x4.func_145881_a().func_190894_a(EntityList.func_191306_a(EntityCaveSpider.class));
                for (int a = 0; a < 50; ++a) {
                    int zz;
                    int yy;
                    int xx = pos.func_177958_n() - 7 + par2Random.nextInt(14);
                    if (!par1World.func_175623_d(new BlockPos(xx, yy = pos.func_177956_o() + par2Random.nextInt(10), zz = pos.func_177952_p() - 7 + par2Random.nextInt(14))) || !BlockUtils.isBlockTouching((IBlockAccess)par1World, new BlockPos(xx, yy, zz), BlocksTC.leafGreatwood) && !BlockUtils.isBlockTouching((IBlockAccess)par1World, new BlockPos(xx, yy, zz), BlocksTC.logGreatwood)) continue;
                    this.world.func_175656_a(new BlockPos(xx, yy, zz), Blocks.field_150321_G.func_176223_P());
                }
                par1World.func_175656_a(pos.func_177979_c(2), Blocks.field_150486_ae.func_176223_P());
                TileEntityChest x6 = (TileEntityChest)par1World.func_175625_s(pos.func_177979_c(2));
                if (x6 != null) {
                    x6.func_189404_a(LootTableList.field_186422_d, this.rand.nextLong());
                }
            }
        }*/
        return true;
    };
    GreatWoodStructure.otherCoordPairs = [2, 0, 0, 1, 2, 1];
    return GreatWoodStructure;
}());
var MAGICAL_FOREST = new Gears.World.CustomBiome("magical_forest", Biome.FOREST.temperature);
MAGICAL_FOREST.coverBlock = new Gears.Block(2, 0);
MAGICAL_FOREST.surfaceBlock = new Gears.Block(3, 0);
MAGICAL_FOREST.downfall = 0.4;
MAGICAL_FOREST.grassColor = new Gears.Graphics.Color(0.3, 0.66, 0.8);
var MAGICAL_FOREST_GENERATION_THRESHOLD = 0.8;
var OCTAVE_SCALE = 256;
Callback.addCallback("GenerateBiomeMap", function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
    if (dimensionId != Native.Dimension.NORMAL)
        return;
    var chunk = new Chunk(chunkX, chunkZ);
    var center = chunk.real.plus(8);
    var biome = Gears.World.getBiomeMapAt(center);
    var biomes = [Biome.PLAINS, Biome.FOREST, Biome.FOREST_HILLS, Biome.BIRCH_FOREST, Biome.BIRCH_FOREST_HILLS];
    if (!~biomes.indexOf(biome))
        return;
    if (WorldGenerator.getPerlinNoise(center, dimensionSeed, 1 / OCTAVE_SCALE, 2) < MAGICAL_FOREST_GENERATION_THRESHOLD - 4 / Math.pow(OCTAVE_SCALE, 2))
        return;
    for (var x = 0; x < 16; x++) {
        for (var z = 0; z < 16; z++) {
            var noiseValue = WorldGenerator.getPerlinNoise(center.plus(x, 0, z), dimensionSeed, 1 / OCTAVE_SCALE, 2);
            if (noiseValue > MAGICAL_FOREST_GENERATION_THRESHOLD)
                World.setBiomeMap(x, z, MAGICAL_FOREST.id);
        }
    }
});
World.addGenerationCallback("GenerateChunk", function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
    // let source = BlockSource.getDefaultForActor(Gears.Player.uID);
    var chunk = new Chunk(chunkX, chunkZ);
    var center = chunk.real.plus(8);
    var biome = Gears.World.getBiomeAt(center);
    if (biome != MAGICAL_FOREST)
        return;
    var real = chunk.real;
    var structure = new SilverWoodStructure(8, 6);
    for (var i_19 = 0; i_19 < random.nextInt(4) + 2; i_19++) {
        var x = random.nextInt(16);
        var z = random.nextInt(16);
        var position = WorldGenerator.getHighestSurface(real.plus(x, 0, z)).floor();
        if (Gears.World.getBlock(position).id != 2)
            return;
        /*
        let noiseValue = WorldGenerator.getPerlinNoise(position, dimensionSeed, 1 / OCTAVE_SCALE, 2);
        let amplifier = Math.min(((noiseValue - MAGICAL_FOREST_GENERATION_THRESHOLD) / (1 - MAGICAL_FOREST_GENERATION_THRESHOLD)) + 0.1, 1); // always 0 <= x <= 1
        if(amplifier < 0) continue;

        let height = 10 + 20 ** amplifier;
        let structure = new SilverWoodStructure(height, 1);
        */
        structure.place(/* source */ null, position.plus(0, 1, 0), random, true);
    }
}, "thaumcraft_silver_wood_in_magical_forest");
World.addGenerationCallback("GenerateChunk", function (chunkX, chunkZ, random) {
    var chunk = new Chunk(chunkX, chunkZ);
    var center = chunk.real.plus(8);
    var biome = Gears.World.getBiomeAt(center);
    if (biome != MAGICAL_FOREST)
        return;
    var real = chunk.real;
    var table = new WeightedRandom();
    table.put(new Gears.Block(VanillaBlockID.tallgrass, 0), 7);
    table.put(new Gears.Block(VanillaBlockID.double_plant, 2), 7);
    table.put(new Gears.Block(BlockID["vishroom"], 2), 2);
    for (var i_20 = 0; i_20 < random.nextInt(50) + 10; i_20++) {
        var x = random.nextInt(16);
        var z = random.nextInt(16);
        var position = WorldGenerator.getHighestSurface(real.plus(x, 0, z));
        if (Gears.World.getBlock(position).id != 2 || !Gears.World.getBlock(position.plus(0, 1, 0)).canBeReplaced)
            continue;
        Gears.World.setBlock(position.plus(0, 1, 0), table.random(function (max) { return random.nextFloat() * max; }));
    }
}, "thaumcraft_grass_in_magical_forest");
BlockRegistry.register("shimmerleaf", {
    type: {
        renderType: 1,
        destroyTime: 0
    },
    variations: [{
            name: "Shimmerleaf",
            texture: "shimmerleaf",
            inCreative: true,
            shape: [new Vector3(1 / 8, 0, 1 / 8), new Vector3(7 / 8, 1, 7 / 8)]
        }],
    collider: function () {
        var shape = new ICRender.CollisionShape();
        shape.addEntry().addBox(1, 1, 1, 0, 0, 0);
        return shape;
    },
    callbacks: {
        place: function (coords, _, block) {
            var place = block.canBeReplaced ? coords.position : coords.relative;
            var downBlockID = Gears.World.getBlock(place.minus(0, 1, 0));
            if (Gears.World.getBlock(place).canBeReplaced && (downBlockID.id == 2 || downBlockID.id == 3)) {
                Gears.World.setBlock(place, BlockID["shimmerleaf"]);
            }
        },
        neighbourChanged: function (coords, block, changeCoords) {
            coords = new Vector3(coords);
            var downBlockID = Gears.World.getBlock(coords.minus(0, 1, 0));
            if (downBlockID.id == 2 || downBlockID.id == 3)
                return;
            Gears.World.destroyBlock(new Vector3(coords), true);
        }
    }
});
var ShimmerleafMeadow = /** @class */ (function () {
    function ShimmerleafMeadow(amount, radius) {
        if (amount === void 0) { amount = 5; }
        if (radius === void 0) { radius = 10; }
        this.amount = amount;
        this.radius = radius;
    }
    ShimmerleafMeadow.prototype.place = function (source, position, random, isWorldGenerator) {
        for (var i_21 = 0; i_21 < this.amount; i_21++) {
            var theta = random.nextFloat() * 2 * Math.PI;
            var px = Math.sin(theta) * this.radius;
            var pz = Math.cos(theta) * this.radius;
            var place = WorldGenerator.getSurface(position.plus(px, 0, pz));
            if (!place)
                continue;
            var blockID = Gears.World.getBlock(place).id;
            if (blockID != 2 && blockID != 3)
                continue;
            Gears.World.setBlock(place.plus(0, 1, 0), BlockID["shimmerleaf"]);
        }
        return true;
    };
    return ShimmerleafMeadow;
}());
BlockRegistry.register("silverwood_log", {
    type: "log",
    variations: [{
            name: "Silver Wood Log",
            texture: ["silverwood_top", "silverwood_top", "silverwood_side"],
            inCreative: true
        }, {
            name: "Silver Wood Log",
            texture: ["silverwood_side", "silverwood_side", "silverwood_top", "silverwood_top", "silverwood_side"],
            inCreative: false
        }, {
            name: "Silver Wood Log",
            texture: ["silverwood_side", "silverwood_side", "silverwood_side", "silverwood_side", "silverwood_top"],
            inCreative: false
        }, {
            name: "Silver Wood Log",
            texture: "silverwood_side",
            inCreative: false
        }]
});
BlockRegistry.register("silverwood_leaves", {
    type: "leaves",
    variations: [{
            name: "Silver Wood Leaves",
            texture: "silverwood_leaves",
            inCreative: true
        }, {
            name: "Silver Wood Leaves",
            texture: "silverwood_leaves_low",
            inCreative: false
        }],
    model: function () {
        var group = ICRender.getGroup("silverwood_leaves");
        group.add(BlockID["silverwood_leaves"], -1);
        var model = new ICRender.Model();
        var e = 0.0043;
        var m1 = new BlockRenderer.Model(0 - e, 0 - e, 0 - e, 1 + e, 1 + e, 1 + e, BlockID["silverwood_leaves"], 0);
        var m2 = new BlockRenderer.Model(0, 0, 0, 1 + e, 1 + e, 1 + e, BlockID["silverwood_leaves"], 1);
        var x = ICRender.AND(ICRender.BLOCK(-1, 0, 0, group, false), ICRender.BLOCK(1, 0, 0, group, false));
        var y = ICRender.AND(ICRender.BLOCK(0, -1, 0, group, false), ICRender.BLOCK(0, 1, 0, group, false));
        var z = ICRender.AND(ICRender.BLOCK(0, 0, -1, group, false), ICRender.BLOCK(0, 0, 1, group, false));
        model.addEntry(m1).setCondition(ICRender.NOT(ICRender.AND(x, y, z)));
        model.addEntry(m2).setCondition(ICRender.AND(x, y, z));
        return model;
    }
});
World.addGenerationCallback("GenerateChunk", function (chunkX, chunkZ, random) {
    // let source = BlockSource.getDefaultForActor(Gears.Player.uID);
    var x = Math.floor(random.nextFloat() * 16);
    var z = Math.floor(random.nextFloat() * 16);
    var chunk = new Chunk(chunkX, chunkZ);
    var real = chunk.real;
    real = real.plus(x, 0, z);
    var biome = Gears.World.getBiomeAt(real);
    var biomes = [Biome.PLAINS, Biome.FOREST, Biome.BIRCH_FOREST, Biome.ROOFED_FOREST, Biome.SWAMPLAND, Biome.SAVANNA];
    if (~biomes.indexOf(biome)) {
        if (random.nextInt(200))
            return;
        var structure = new SilverWoodStructure(8, 6);
        real = WorldGenerator.getHighestSurface(real).floor();
        if (Gears.World.getBlock(real).id != 2)
            return;
        structure.place(/*source*/ null, real.plus(0, 1, 0), random, true);
    }
}, "thaumcraft_silver_wood");
var SilverWoodStructure = /** @class */ (function () {
    function SilverWoodStructure(minTreeHeight, randomTreeHeight) {
        this.minTreeHeight = minTreeHeight;
        this.randomTreeHeight = randomTreeHeight;
    }
    SilverWoodStructure.prototype.generateLeaves = function () {
        var _a = this.position, x = _a.x, y = _a.y, z = _a.z;
        var start = y + this.height - 5;
        var end = y + this.height + 3 + this.random.nextInt(3);
        for (var cy = start; cy <= end; cy++) {
            var cty = Math.min(Math.max(cy | 0, (y + this.height - 3) | 0), (y + this.height) | 0);
            for (var cx = x - 5; cx <= x + 5; cx++) {
                for (var cz = z - 5; cz <= z + 5; cz++) {
                    var dx = cx - x;
                    var dy = cy - cty;
                    var dz = cz - z;
                    var dist = dx * dx + dy * dy + dz * dz;
                    if (!(dist < (10 + this.random.nextInt(8))))
                        continue;
                    Gears.World.setBlock(new Vector3(cx, cy, cz), "silverwood_leaves");
                }
            }
        }
    };
    SilverWoodStructure.prototype.generateTrunk = function () {
        var _a = this.position, x = _a.x, y = _a.y, z = _a.z;
        var chance = Math.floor(this.height * 1.5);
        var lastBlock = false;
        for (var cy = 0; cy < this.height; cy++) {
            var block2 = Gears.World.getBlock(new Vector3(x, y + cy, z));
            if (block2.id != 0 && block2.id != BlockID["silverwood_leaves"])
                continue;
            if (cy > 0 && !lastBlock && this.random.nextInt(chance) == 0) {
                Gears.World.setBlock(new Vector3(x, y + cy, z), "silverwood_log");
                // TODO: Node generation
                //  createRandomNodeAt(x, y + k2, z, random);
                chance += this.height;
                lastBlock = true;
            }
            else {
                Gears.World.setBlock(new Vector3(x, y + cy, z), "silverwood_log");
                lastBlock = false;
            }
            Gears.World.setBlock(new Vector3(x - 1, y + cy, z), "silverwood_log");
            Gears.World.setBlock(new Vector3(x + 1, y + cy, z), "silverwood_log");
            Gears.World.setBlock(new Vector3(x, y + cy, z - 1), "silverwood_log");
            Gears.World.setBlock(new Vector3(x, y + cy, z + 1), "silverwood_log");
        }
        Gears.World.setBlock(new Vector3(x, y + cy, z), "silverwood_log");
        Gears.World.setBlock(new Vector3(x - 1, y, z - 1), "silverwood_log");
        Gears.World.setBlock(new Vector3(x + 1, y, z + 1), "silverwood_log");
        Gears.World.setBlock(new Vector3(x - 1, y, z + 1), "silverwood_log");
        Gears.World.setBlock(new Vector3(x + 1, y, z - 1), "silverwood_log");
        if (this.random.nextInt(3) != 0)
            Gears.World.setBlock(new Vector3(x - 1, y + 1, z - 1), "silverwood_log");
        if (this.random.nextInt(3) != 0)
            Gears.World.setBlock(new Vector3(x + 1, y + 1, z + 1), "silverwood_log");
        if (this.random.nextInt(3) != 0)
            Gears.World.setBlock(new Vector3(x - 1, y + 1, z + 1), "silverwood_log");
        if (this.random.nextInt(3) != 0)
            Gears.World.setBlock(new Vector3(x + 1, y + 1, z - 1), "silverwood_log");
        Gears.World.setBlock(new Vector3(x - 2, y, z), "silverwood_log", 2);
        Gears.World.setBlock(new Vector3(x + 2, y, z), "silverwood_log", 2);
        Gears.World.setBlock(new Vector3(x, y, z - 2), "silverwood_log", 1);
        Gears.World.setBlock(new Vector3(x, y, z + 2), "silverwood_log", 1);
        Gears.World.setBlock(new Vector3(x - 2, y - 1, z), "silverwood_log");
        Gears.World.setBlock(new Vector3(x + 2, y - 1, z), "silverwood_log");
        Gears.World.setBlock(new Vector3(x, y - 1, z - 2), "silverwood_log");
        Gears.World.setBlock(new Vector3(x, y - 1, z + 2), "silverwood_log");
        Gears.World.setBlock(new Vector3(x + 1, y + (this.height - 4), z + 1), "silverwood_log");
        Gears.World.setBlock(new Vector3(x - 1, y + (this.height - 4), z - 1), "silverwood_log");
        Gears.World.setBlock(new Vector3(x - 1, y + (this.height - 4), z + 1), "silverwood_log");
        Gears.World.setBlock(new Vector3(x + 1, y + (this.height - 4), z - 1), "silverwood_log");
        if (this.random.nextInt(3) == 0)
            Gears.World.setBlock(new Vector3(x - 1, y + (this.height - 5), z - 1), "silverwood_log");
        if (this.random.nextInt(3) == 0)
            Gears.World.setBlock(new Vector3(x + 1, y + (this.height - 5), z + 1), "silverwood_log");
        if (this.random.nextInt(3) == 0)
            Gears.World.setBlock(new Vector3(x - 1, y + (this.height - 5), z + 1), "silverwood_log");
        if (this.random.nextInt(3) == 0)
            Gears.World.setBlock(new Vector3(x + 1, y + (this.height - 5), z - 1), "silverwood_log");
        Gears.World.setBlock(new Vector3(x - 2, y + (this.height - 4), z), "silverwood_log", 2);
        Gears.World.setBlock(new Vector3(x + 2, y + (this.height - 4), z), "silverwood_log", 2);
        Gears.World.setBlock(new Vector3(x, y + (this.height - 4), z - 2), "silverwood_log", 1);
        Gears.World.setBlock(new Vector3(x, y + (this.height - 4), z + 2), "silverwood_log", 1);
        if (this.isWorldGenerator) {
            var structure = new ShimmerleafMeadow(this.random.nextInt(4) + 1, 3);
            structure.place(null, this.position.plus(0, 2, 0), this.random, true);
        }
    };
    SilverWoodStructure.prototype.place = function (source, position, random, isWorldGenerator) {
        this.position = position.floor();
        this.isWorldGenerator = isWorldGenerator;
        this.random = random;
        this.height = this.random.nextInt(this.randomTreeHeight) + this.minTreeHeight;
        var validPlace = true;
        var x = position.x, y = position.y, z = position.z;
        if (y >= 1 && y + this.height + 1 <= 256) {
            for (var cy = y; cy <= y + 1 + this.height; cy++) {
                var spread = 1;
                if (cy == y)
                    spread = 0;
                if (cy >= y + 1 + this.height - 2)
                    spread = 3;
                for (var cx = x - spread; cx <= x + spread && validPlace; cx++) {
                    for (var cz = z - spread; cz <= z + spread && validPlace; cz++) {
                        if (cy >= 0 && cy < 256) {
                            var block = Gears.World.getBlock(new Vector3(cx, cy, cz));
                            if (block.id == 0 || cy <= y)
                                continue;
                            validPlace = false;
                            continue;
                        }
                        validPlace = false;
                    }
                }
            }
            if (!validPlace)
                return false;
            if (y < 256 - this.height - 1) {
                this.generateLeaves();
                this.generateTrunk();
                return true;
            }
            return false;
        }
        return false;
    };
    return SilverWoodStructure;
}());
var TaintWoodStructure = /** @class */ (function () {
    function TaintWoodStructure() {
        this.maxHeight = 16;
        this.minHeight = 8;
        this.trunkSize = 2;
        this.branches = [];
        this.trunkBlocks = [];
    }
    TaintWoodStructure.prototype.generate = function (position, random) {
        this.position = position;
        this.height = this.minHeight + random.nextInt(this.maxHeight - this.minHeight);
        this.trunkCount = random.nextInt(5) + 3;
        this.generateTrunkBlocks(random);
        this.generateBranches(random);
        this.placeTrunkBlocks();
        return true;
    };
    TaintWoodStructure.prototype.placeBlockLine = function (start, end, block) {
        var dir = end.minus(start);
        for (var i_22 = 0, length = dir.length; i_22 < length; i_22++) {
            var pos = start.plus(dir.scale(i_22 / length));
            Gears.World.setBlock(pos, block);
        }
    };
    TaintWoodStructure.prototype.placeWoodLine = function (start, end, block, dataSet) {
        if (dataSet === void 0) { dataSet = [4, 0, 8]; }
        var dir = end.minus(start);
        block = new Gears.Block(block.id);
        var nearest = Side.nearestToVector(dir);
        if (nearest == Side.NORTH || nearest == Side.SOUTH)
            block.data += dataSet[0];
        else if (nearest == Side.UP || nearest == Side.DOWN)
            block.data += dataSet[1];
        else if (nearest == Side.EAST || nearest == Side.WEST)
            block.data += dataSet[2];
        for (var i_23 = 0, length = dir.length; i_23 < length; i_23++) {
            var pos = start.plus(dir.scale(i_23 / length));
            Gears.World.setBlock(pos, block);
        }
    };
    TaintWoodStructure.prototype.generateTrunkBlocks = function (random) {
        var center = new Vector3(this.position.x, this.position.y, this.position.z);
        var maxRadius = this.trunkCount / 2 + 2;
        var rot = 0;
        for (var sy = 0; sy < this.height; sy++) {
            for (var t = 0; t < this.trunkCount; t++) {
                rot += sy < 3 ? 0 : Math.asin(1 / (2 * maxRadius)) / 3;
                var radius = sy < 3 ? maxRadius : Math.floor((1 - ((sy - 3) / (this.height - 3))) * maxRadius);
                var alpha = (t / this.trunkCount) * Math.PI * 2 + rot;
                var sx = Math.sin(alpha) * radius;
                var sz = Math.cos(alpha) * radius;
                var pos = center.plus(sx, sy, sz).round();
                this.trunkBlocks.push(pos);
                if (!random.nextInt(10) && sy > 3 && sy < this.height - 2) {
                    pos = pos.plus(sy);
                    var branchEnd = pos.minus(center).scale(1 + random.nextFloat() / 2);
                    this.branches.push([pos, branchEnd]);
                }
            }
        }
    };
    TaintWoodStructure.prototype.generateBranches = function (random) {
        var e_12, _a;
        var block = new Gears.Block(17, 1);
        try {
            for (var _b = __values(this.branches), _c = _b.next(); !_c.done; _c = _b.next()) {
                var branch = _c.value;
                var start = branch[0];
                var end = branch[1];
                this.placeBlockLine(start, start.plus(end), block);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_12) throw e_12.error; }
        }
    };
    TaintWoodStructure.prototype.placeTrunkBlocks = function () {
        var e_13, _a;
        var block = new Gears.Block(17);
        try {
            for (var _b = __values(this.trunkBlocks), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pos = _c.value;
                Gears.World.setBlock(pos, block);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_13) throw e_13.error; }
        }
    };
    TaintWoodStructure.prototype.place = function (source, position, seed, isWorldGenerator) {
        return true;
    };
    return TaintWoodStructure;
}());
BlockRegistry.register("vishroom", {
    type: {
        renderType: 1,
        destroyTime: 0
    },
    variations: [{
            name: "Vishroom",
            texture: "vishroom",
            inCreative: true,
            shape: [new Vector3(1 / 8, 0, 1 / 8), new Vector3(7 / 8, 1, 7 / 8)]
        }],
    collider: function () {
        var shape = new ICRender.CollisionShape();
        shape.addEntry().addBox(1, 1, 1, 0, 0, 0);
        return shape;
    },
    callbacks: {
        entityInside: function (coords, block, entity) {
            Entity.addEffect(entity.uID, Native.PotionEffect.confusion, 1, 10 * 20);
        },
        place: function (coords, _, block) {
            var place = block.canBeReplaced ? coords.position : coords.relative;
            var downBlockID = Gears.World.getBlock(place.minus(0, 1, 0));
            if (Gears.World.getBlock(place).canBeReplaced && (downBlockID.id == 2 || downBlockID.id == 3)) {
                Gears.World.setBlock(place, BlockID["vishroom"]);
            }
        },
        neighbourChanged: function (coords, block, changeCoords) {
            coords = new Vector3(coords);
            var downBlockID = Gears.World.getBlock(coords.minus(0, 1, 0));
            if (downBlockID.id == 2 || downBlockID.id == 3)
                return;
            Gears.World.destroyBlock(new Vector3(coords), true);
        }
    }
});
// generation in [[magical-forest/trees-and-flowers]]
