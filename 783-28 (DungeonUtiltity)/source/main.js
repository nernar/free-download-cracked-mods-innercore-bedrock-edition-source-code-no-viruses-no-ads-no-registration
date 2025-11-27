var StructureLoaderJava = WRAP_JAVA("com.reider.dungeonutility.struct.loaders.StructureLoader");
var StructurePoolJava = WRAP_JAVA("com.reider.dungeonutility.struct.loaders.StructurePool");
var BlockData = WRAP_JAVA("com.reider.dungeonutility.api.data.BlockData");
var StructureDescriptionJava = WRAP_JAVA("com.reider.dungeonutility.api.StructureDescription");
var StructureCompression = WRAP_JAVA("com.reider.dungeonutility.struct.formats.StructureCompression");
var LoaderType = WRAP_JAVA("com.reider.dungeonutility.struct.formats.LoaderType");
var Utils = WRAP_JAVA("com.reider.dungeonutility.api.Utils");
var DEFAULT_POOL_NAME = "default";
var StructurePool = /** @class */ (function () {
    function StructurePool(name, global) {
        if (global === void 0) { global = true; }
        if (name instanceof StructurePoolJava)
            this.self = name;
        else
            this.self = new StructurePoolJava(name, global);
    }
    StructurePool.prototype.getName = function () {
        return this.self.getName();
    };
    StructurePool.prototype.put = function (name, stru) {
        this.self.setStructure(name, stru);
        return this;
    };
    StructurePool.prototype.setPathStructures = function (path) {
        this.self.setPathStructures(path);
        return this;
    };
    StructurePool.prototype.get = function (name) {
        return this.self.getStructure(name);
    };
    StructurePool.prototype.isLoad = function (name) {
        return this.self.isLoad(name);
    };
    StructurePool.prototype.deLoad = function (name) {
        this.self.deLoad(name);
        return this;
    };
    StructurePool.prototype.getAllStructure = function () {
        return this.self.getAllStructure();
    };
    StructurePool.prototype.load = function (path, name, type, compression) {
        this.self.load(name, path || "", type || "DungeonUtility", !!compression);
        return this;
    };
    StructurePool.prototype.upload = function (name, type) {
        this.self.load(name, "", type, false);
        return this;
    };
    StructurePool.prototype.copy = function (name1, name2, prot) {
        prot = prot || { copyBlock: function (data) { return data; }, copyPrototype: function (prot) { return prot; } };
        prot.copyBlock = prot.copyBlock || function (data) {
            return data;
        };
        prot.copyPrototype = prot.copyPrototype || function (prot) {
            return prot;
        };
        this.self.copy(name1, name2, prot);
        return this;
    };
    StructurePool.prototype.StructureAdvanced = function (name) {
        return new Structure.advanced(this.get(name));
    };
    StructurePool.prototype.registerRotations = function (stru, rotates) {
        rotates = rotates || StructureRotation.getAllY();
        StructureUtilityJava.registerRotations(StructureLoader.getStructure(stru), stru, rotates);
        return this;
    };
    StructurePool.prototype.setGlobalPrototype = function (name, obj) {
        try {
            obj.isBlock = obj.isBlock || function () { return true; };
        }
        catch (e) { }
        try {
            this.self.setGlobalPrototype(name, obj);
            return;
        }
        catch (error) { }
        try {
            var self_1 = this;
            Callback.addCallback("StructureLoad", function () { return self_1.self.setGlobalPrototype(name, obj); });
        }
        catch (e) {
            this.self.setGlobalPrototype(name, obj);
        }
        return this;
    };
    StructurePool.prototype.loadRuntime = function (name, path, type, compression) {
        this.self.loadRuntime(name, path, type || "DungeonUtility", !!compression);
        return this;
    };
    return StructurePool;
}());
var StructureLoader;
(function (StructureLoader) {
    function getStructurePoolByName(name) {
        return new StructurePool(StructureLoaderJava.getStructurePool(name || DEFAULT_POOL_NAME));
    }
    StructureLoader.getStructurePoolByName = getStructurePoolByName;
    function getAllPool() {
        return StructureLoaderJava.getAllPool();
    }
    StructureLoader.getAllPool = getAllPool;
    function getAllStructureAndPool() {
        return StructureLoaderJava.getAllStructureAndPool();
    }
    StructureLoader.getAllStructureAndPool = getAllStructureAndPool;
    function registerType(name, obj) {
        obj.isLoadRuntime = obj.isLoadRuntime || function () { return false; };
        LoaderType.registerType(name, obj);
    }
    StructureLoader.registerType = registerType;
    function getStructure(name) {
        if (name instanceof StructureDescriptionJava)
            return name;
        if (this.isLoad(name || "error"))
            return StructureLoaderJava.getStructure(name || "error");
        Logger.Log("structure noy load " + name, "DungeonUtility");
        alert("error " + name);
        return new StructureDescriptionJava([]);
    }
    StructureLoader.getStructure = getStructure;
    function compile(path) {
        StructureCompression.compression(path, FileTools.ReadText(path));
    }
    StructureLoader.compile = compile;
    function decompile(path) {
        FileTools.WriteText(path, StructureCompression.decompression(path), false);
    }
    StructureLoader.decompile = decompile;
    /**@deprecated */
    function save(path, name, type, compression) {
        try {
            Utils.writeFileBytes(path, LoaderType.getType(type || "DungeonUtility")
                .save(StructureLoader.getStructure(name)));
            if (compression)
                StructureLoader.compile(path);
        }
        catch (error) {
            Logger.Log("error convert " + error, "DungeonUtility");
        }
    }
    StructureLoader.save = save;
    /**@deprecated */
    function load(path, name, type, compression) {
        StructureLoaderJava.load(name, path, type || "DungeonUtility", !!compression);
    }
    StructureLoader.load = load;
    /**@deprecated */
    function loadRuntime(path, name, type, compression) {
        type = type || "DungeonUtility";
        try {
            var start = new Date().getTime();
            if (FileTools.isExists(path))
                StructureLoaderJava.loadRuntime(name, path, type, !!compression);
            else if (__config__.get("debug.info_load"))
                Logger.Log("error path, load structure: " + name, "DungeonUtility");
            if (__config__.get("debug.info_load"))
                Logger.Log("load: " + name + ", type: " + type + ", time: " + ((new Date().getTime()) - start), "DungeonUtility");
        }
        catch (e) {
            if (__config__.get("debug.message_error_load"))
                Logger.Log("error load structure: " + name + "\n" + e, "DungeonUtility");
        }
    }
    StructureLoader.loadRuntime = loadRuntime;
    /**@deprecated */
    function setStructure(name, stru) {
        StructureLoaderJava.getStructurePool(DEFAULT_POOL_NAME)
            .setStructure(name, stru);
    }
    StructureLoader.setStructure = setStructure;
    /**@deprecated */
    function isLoad(name) {
        return StructureLoaderJava.isStructureLoad(name);
    }
    StructureLoader.isLoad = isLoad;
    /**@deprecated */
    function deLoad(name) {
        StructureLoaderJava.deLoad(name || "error");
    }
    StructureLoader.deLoad = deLoad;
})(StructureLoader || (StructureLoader = {}));
var StructureJava = WRAP_JAVA("com.reider.dungeonutility.struct.Structure");
var DefaultStructurePrototype = WRAP_JAVA("com.reider.dungeonutility.struct.prototypes.DefaultStructurePrototype");
var StructureDestructibilityJava = WRAP_JAVA("com.reider.dungeonutility.struct.prototypes.StructureDestructibility");
function getRegion() {
    return BlockSource.getCurrentWorldGenRegion();
}
;
var StructureDestructibility = /** @class */ (function () {
    function StructureDestructibility() {
        this.self = new StructureDestructibilityJava();
    }
    StructureDestructibility.prototype.addBlock = function (id, state) {
        this.self.addBlock(id, state);
        return this;
    };
    StructureDestructibility.prototype.get = function () {
        return this.self;
    };
    return StructureDestructibility;
}());
var Structure;
(function (Structure) {
    function getPrototypeDefault(obj, blocks) {
        if (typeof obj == "string")
            return new DefaultStructurePrototype(obj, (blocks || new StructureDestructibility()).get());
        return new DefaultStructurePrototype(obj.name ? obj.name : null, obj.blocks);
    }
    Structure.getPrototypeDefault = getPrototypeDefault;
    function setStructure(name, x, y, z, region, packet) {
        StructureJava.setStructure(StructureLoader.getStructure(name), x, y, z, region || getRegion(), packet || {});
    }
    Structure.setStructure = setStructure;
    function set(name, x, y, z, region, packet) {
        setStructure(name, x, y, z, region, packet);
    }
    Structure.set = set;
    function build(name, x, y, z, sleep, region, packet) {
        StructureJava.build(StructureLoader.getStructure(name), x, y, z, region || getRegion(), sleep, packet || {});
    }
    Structure.build = build;
    function isStructure(name, x, y, z, region) {
        return StructureJava.isStructure(StructureLoader.getStructure(name), x, y, z, region || getRegion());
    }
    Structure.isStructure = isStructure;
    function is(name, x, y, z, region) {
        return isStructure(name, x, y, z, region);
    }
    Structure.is = is;
    function isSetStructure(name, x, y, z, region) {
        return StructureJava.isStructure(StructureLoader.getStructure(name), x, y, z, region || getRegion());
    }
    Structure.isSetStructure = isSetStructure;
    function isSet(name, x, y, z, region) {
        return isSetStructure(name, x, y, z, region);
    }
    Structure.isSet = isSet;
    function canSet(name, x, y, z, region) {
        return isSetStructure(name, x, y, z, region);
    }
    Structure.canSet = canSet;
    function destroy(name, x, y, z, region) {
        StructureJava.destroy(StructureLoader.getStructure(name), x || 0, y || 0, z || 0, region || getRegion());
    }
    Structure.destroy = destroy;
    var advanced = /** @class */ (function () {
        function advanced(name) {
            if (name instanceof StructureDescriptionJava)
                this.stru = new StructureJava(name);
            else {
                this.stru = new StructureJava(new StructureDescriptionJava([]));
                if (StructureLoader.isLoad(name))
                    this.stru.setStructure(StructureLoader.getStructure(name));
                else {
                    var self_2 = this;
                    Callback.addCallback("StructureLoad", function () { return self_2.stru.setStructure(StructureLoader.getStructure(name)); });
                }
            }
        }
        advanced.prototype.getStructureJava = function () {
            return this.stru;
        };
        advanced.prototype.setUseGlobalPrototype = function (value) {
            this.stru.setUseGlobalPrototype(value);
            return this;
        };
        advanced.prototype.isUseGlobalPrototype = function () {
            return this.stru.isUseGlobalPrototype();
        };
        advanced.prototype.setProt = function (obj) {
            try {
                obj.isBlock = obj.isBlock || function () { return true; };
            }
            catch (e) { }
            this.stru.setPrototype(obj);
            return this;
        };
        advanced.prototype.getPrototype = function () {
            return this.stru.getPrototype();
        };
        advanced.prototype.getStructure = function () {
            return this.stru.getStructure();
        };
        advanced.prototype.isStructure = function (x, y, z, region) {
            return this.stru.isStructure(x, y, z, region || getRegion());
        };
        advanced.prototype.isSetStructure = function (x, y, z, region) {
            return this.stru.isStructure(x, y, z, region || getRegion());
        };
        advanced.prototype.is = function (x, y, z, region) {
            return this.isStructure(x, y, z, region);
        };
        advanced.prototype.canSet = function (x, y, z, region) {
            return this.isSetStructure(x, y, z, region);
        };
        advanced.prototype.setStructure = function (x, y, z, region, packet) {
            this.stru.setStructure(x, y, z, region || getRegion(), packet || {});
            return this;
        };
        advanced.prototype.set = function (x, y, z, region, packet) {
            this.setStructure(x, y, z, region, packet);
        };
        advanced.prototype.build = function (x, y, z, sleep, region, packet) {
            var self = this;
            Threading.initThread("Structure-build", function () {
                return self.stru.build(x, y, z, region || getRegion(), sleep, packet || {});
            });
            return this;
        };
        advanced.prototype.destroy = function (x, y, z, region) {
            this.stru.destroy(x, y, z, region || getRegion());
            return this;
        };
        /** @deprecated */
        advanced.prototype.setStruct = function (name) {
            this.stru.setStructure(new StructureDescriptionJava(Structure.getStructure(name)));
            return this;
        };
        /** @deprecated */
        advanced.prototype.setPrototype = function (obj) {
            obj.isBlock = obj.isBlock || function () { return true; };
            var funcIsBlock = obj.isBlock;
            obj.isBlock = function (original_pos, data, region, packet) {
                return funcIsBlock(original_pos, {
                    x: original_pos.x + data.x,
                    y: original_pos.y + data.y,
                    z: original_pos.z + data.z
                }, data.state, data.stateExtra, data, region, packet);
            };
            var funcSetBlock = obj.setBlock;
            if (funcSetBlock)
                obj.setBlock = function (original_pos, data, region, packet) {
                    funcSetBlock(original_pos, {
                        x: original_pos.x + data.x,
                        y: original_pos.y + data.y,
                        z: original_pos.z + data.z
                    }, data.state, data.stateExtra, data, region, packet);
                };
            this.stru.setPrototype(obj);
            return this;
        };
        return advanced;
    }());
    Structure.advanced = advanced;
    /** @deprecated */
    function getRandomCoords(x, z, random, obj) {
        obj = obj || {};
        return GenerationUtils.findSurface(x * 16 + random.nextInt(16), random.nextInt((obj.max || 100) - (obj.min || 50)) + (obj.min || 50), z * 16 + random.nextInt(16));
    }
    Structure.getRandomCoords = getRandomCoords;
    /** @deprecated */
    function setGlobalPrototype(name, obj) {
        try {
            obj.isBlock = obj.isBlock || function () { return true; };
        }
        catch (e) { }
        try {
            StructureJava.setGlobalPrototype(name, obj);
            return;
        }
        catch (error) { }
        try {
            Callback.addCallback("StructureLoad", function () {
                StructureJava.setGlobalPrototype(name, obj);
            });
        }
        catch (e) {
            StructureJava.setGlobalPrototype(name, obj);
        }
    }
    Structure.setGlobalPrototype = setGlobalPrototype;
    /** @deprecated */
    function getGlobalPrototype(name) {
        return StructureJava.getGlobalPrototype(name);
    }
    Structure.getGlobalPrototype = getGlobalPrototype;
    /** @deprecated */
    function getStructure(name) {
        if (!Array.isArray(name))
            return StructureLoader.getStructure(name).blocks;
        return [];
    }
    Structure.getStructure = getStructure;
    /** @deprecated */
    function addFeatureHandler() { }
    Structure.addFeatureHandler = addFeatureHandler;
    /*
    Супер устравшие методы генерации, вырезаны
    */
    /** @deprecated */
    function setStructureGeneration() { }
    Structure.setStructureGeneration = setStructureGeneration;
    ;
    /** @deprecated */
    function getStructureGeneration() { }
    Structure.getStructureGeneration = getStructureGeneration;
    ;
    /** @deprecated */
    var GenerateType;
    (function (GenerateType) {
        /** @deprecated */
        var OverworldFind = /** @class */ (function () {
            function OverworldFind() {
            }
            return OverworldFind;
        }());
        GenerateType.OverworldFind = OverworldFind;
        /** @deprecated */
        var CustomDimensionFind = /** @class */ (function () {
            function CustomDimensionFind() {
            }
            return CustomDimensionFind;
        }());
        GenerateType.CustomDimensionFind = CustomDimensionFind;
    })(GenerateType = Structure.GenerateType || (Structure.GenerateType = {}));
})(Structure || (Structure = {}));
// TODO: Переписать на ts
var StructureUtilityJava = WRAP_JAVA("com.reider.dungeonutility.struct.StructureUtility");
var StructureRotation = WRAP_JAVA("com.reider.dungeonutility.struct.StructureRotation");
var StructureRotationJS = {
    DEFAULT: StructureRotation.DEFAULT,
    DEGREES_90: StructureRotation.DEGREES_90,
    DEGREES_180: StructureRotation.DEGREES_180,
    DEGREES_270: StructureRotation.DEGREES_270,
    DEFAULT_DOWN: StructureRotation.DEFAULT_DOWN,
    DEGREES_90_DOWN: StructureRotation.DEGREES_90_DOWN,
    DEGREES_180_DOWN: StructureRotation.DEGREES_180_DOWN,
    DEGREES_270_DOWN: StructureRotation.DEGREES_270_DOWN,
    getAll: function () {
        return StructureRotation.getAll();
    },
    getAllY: function () {
        return StructureRotation.getAllY();
    },
    getAllDown: function () {
        return StructureRotation.getAllDown();
    },
    getRandomName: function (rotates, random) {
        rotates = rotates || this.getAllY();
        random = random || new java.util.Random();
        return StructureRotation.getRandomName(rotates, random);
    }
};
var StructureUtility = {
    getStructureSize: function (name) {
        return StructureUtilityJava.getStructureSize(StructureLoader.getStructure(name));
    },
    getStructureByName: function (name) {
        return StructureLoader.getStructure(name).blocks;
    },
    newStructure: function (name, stru) {
        StructureLoader.setStructure(name, new StructureDescription(stru || []));
    },
    getCountBlock: function (stru) {
        return this.getStructureByName(stru).length;
    },
    rotate: function (stru, rotate) {
        return StructureUtilityJava.rotate(StructureLoader.getStructure(stru), rotate || 0);
    },
    registerRotationsRuntime: function (stru, rotates) {
        rotates = rotates || StructureRotation.getAllY();
        StructureUtilityJava.registerRotations(StructureLoader.getStructure(stru), stru, rotates);
    },
    registerRotations: function (stru, rotates) {
        Callback.addCallback("StructureLoad", function () {
            StructureUtility.registerRotationsRuntime(stru, rotates);
        });
    },
    getAllStructureName: function () {
        return StructureUtilityJava.getAllStructureName();
    },
    copy: function (name1, name2, prot) {
        prot = prot || {};
        prot.copyBlock = prot.copyBlock || function (data) {
            return data;
        };
        prot.copyPrototype = prot.copyPrototype || function (prot) {
            return prot;
        };
        StructureUtilityJava.copy(name1, name2, prot);
    },
    getStructureByPos: function (pos, cen, value) {
        var region = BlockSource.getCurrentClientRegion();
        if (region == null)
            region = BlockSource.getDefaultForActor(Player.get());
        var stru = [];
        for (y = Math.min(pos[0].y, pos[1].y); y <= Math.max(pos[0].y, pos[1].y); y++) {
            for (x = Math.min(pos[0].x, pos[1].x); x <= Math.max(pos[0].x, pos[1].x); x++) {
                for (z = Math.min(pos[0].z, pos[1].z); z <= Math.max(pos[0].z, pos[1].z); z++) {
                    var block = region.getBlock(x, y, z);
                    if (block.id != 0 || value) {
                        var tile = region.getBlockEntity(x, y, z);
                        var tag = null;
                        if (tile)
                            tag = tile.getCompoundTag();
                        ;
                        stru.push(new BlockData(x - cen.x, y - cen.y, z - cen.z, block, region.getExtraBlock(x, y, z), tag));
                    }
                }
            }
        }
        return stru;
    },
    generateShape: function (region, x, y, z, r, y_max, id, data, dirtId, dirtData, grassId, grassData) {
        data = data || 0;
        y_max = y_max || r * 2;
        StructureUtilityJava.generateShape(x, y, z, r + 2, y_max, new BlockData(0, 0, 0, new BlockState(id, data)), 3, new BlockData(0, 0, 0, new BlockState(dirtId || id, dirtData || data)), new BlockData(0, 0, 0, new BlockState(grassId || id, grassData || data)), region);
    },
    generateShapeOptimization: function (region, name, x, y, z, r, id, data) {
        StructureUtilityJava.generateShapeOptimization(x, y, z, r, new BlockData(0, 0, 0, new BlockState(id, data)), region);
    },
    generateShapeOpti: function (region, x, y, z, r, id, data) {
        StructureUtilityJava.generateShapeOptimization(x, y, z, r, new BlockData(0, 0, 0, new BlockState(id, data)), region);
    },
    spawnEntity: function (region, x, y, z, ents, random) {
        random = random || new java.util.Random();
        StructureUtilityJava.spawnEntity(region, x, y, z, ents || [], random);
    },
    addBlock: function (stru, x, y, z, state, extra, tag) {
        StructureUtilityJava.addBlock(StructureLoader.getStructure(stru), BlockData.createData(x, y, z, state || null, extra || null, tag || null));
    },
    createBlock: function (x, y, z, state, extra, tag) {
        return BlockData.createData(x, y, z, state || null, extra || null, tag || null);
    },
    setBlock: function (stru, x, y, z, state, extra, tag) {
        StructureUtilityJava.setBlock(StructureLoader.getStructure(stru), BlockData.createData(x, y, z, state || null, extra || null, tag || null));
    },
    getBlock: function (name, x, y, z) {
        return StructureUtilityJava.getBlock(StructureLoader.getStructure(name), x, y, z);
    },
    getBlockIndex: function (name, x, y, z) {
        return StructureUtilityJava.getBlockIndex(StructureLoader.getStructure(name), x, y, z);
    },
    setBlockByIndex: function (name, i, x, y, z, state, extra, tag) {
        StructureUtilityJava.setBlock(StructureLoader.getStructure(name), i, BlockData.createData(x, y, z, state || null, extra || null, tag || null));
    },
    fill: function (x1, y1, z1, x2, y2, z2, block, region) {
        StructureUtilityJava.fill(x1, y1, z1, x2, y2, z2, BlockData.createData(0, 0, 0, block, null, null), region || blockSource());
    },
    fillHandler: function (x1, y1, z1, x2, y2, z2, block, region, obj) {
        StructureUtilityJava.fill(x1, y1, z1, x2, y2, z2, BlockData.createData(0, 0, 0, block, null, null), region || blockSource(), obj);
    }
};
// TODO: Переписать на ts
var JavaVisualStructure = WRAP_JAVA("com.reider.dungeonutility.struct.VisualStructure");
var VisualStructure = {
    getArrMesh: function (name, size, value) {
        var BaseArr = [];
        var stru = Structure.getStructure(name);
        for (var i = 0; i < stru.length; i++) {
            var obj = { state: stru[i].state, pos: [stru[i].x, stru[i].y, stru[i].z] };
            if (stru[i].state.id == 0 || value)
                continue;
            var base = new Animation.Item(stru[i].x, stru[i].y, stru[i].z);
            base.describeItem({
                id: Block.convertBlockToItemId(stru[i].state.id),
                data: stru[i].state.data,
                size: size || .95,
                material: "visual_structure"
            });
            obj.base = base;
            try {
                if (stru[i].stateExtra.id != 0) {
                    obj.extra = stru[i].stateExtra;
                    var base_extra = new Animation.Item(stru[i].x, stru[i].y, stru[i].z);
                    base_extra.describeItem({
                        id: Block.convertBlockToItemId(stru[i].stateExtra.id),
                        data: stru[i].stateExtra.data,
                        size: size || .95,
                        material: "visual_structure"
                    });
                    obj.base_extra = base_extra;
                }
            }
            catch (error) {
            }
            BaseArr.push(obj);
        }
        return BaseArr;
    },
    Animation: function (stru, size, value) {
        var BaseArr = VisualStructure.getArrMesh(stru, size, value);
        this.loaded = false;
        this.getArrBase = function () {
            return BaseArr;
        };
        this.setStructure = function (stru, size, value) {
            this.destroy();
            BaseArr = VisualStructure.getArrMesh(stru, size, value);
        };
        this.getStructure = function () {
            return stru;
        };
        var prot = {
            isLoad: function () { return true; },
            load: function () { return "visual_structure"; },
            tick: function () { },
            tickBlock: function () { }
        };
        this.setPrototype = function (obj) {
            obj.isLoad = obj.isLoad || function () { return true; };
            obj.load = obj.load || function () { return "visual_structure"; };
            obj.tick = obj.tick || function () { };
            obj.tickBlock = obj.tickBlock || function () { };
            prot = obj;
        };
        this.getPrototype = function (obj) {
            return prot;
        };
        this.load = function (x, y, z, a, packet) {
            this.loaded = true;
            this.remove = false;
            var _loop_1 = function (i) {
                var pos = BaseArr[i].pos;
                BaseArr[i].base.setPos(x + pos[0], y + pos[1], z + pos[2]);
                if (prot.isLoad(x + pos[0], y + pos[1], z + pos[2], { x: pos[0], y: pos[1], z: pos[2] }, BaseArr[i].base, i, packet))
                    BaseArr[i].base.loadCustom(function () {
                        prot.tickBlock(x + pos[0], y + pos[1], z + pos[2], { x: pos[0], y: pos[1], z: pos[2] }, this, i, packet);
                    });
                var material = prot.load(x + pos[0], y + pos[1], z + pos[2], { x: pos[0], y: pos[1], z: pos[2] }, BaseArr[i].base, i, packet);
                BaseArr[i].base.render.setMaterial(material);
                BaseArr[i].base.getShaderUniforms().setUniformValue("visual_structure", "A", a || .6);
            };
            for (var i in BaseArr) {
                _loop_1(i);
            }
            this.update = function () {
                prot.tick(x, y, z, packet);
            };
            Updatable.addUpdatable(this);
        };
        this.destroy = function () {
            if (!this.loaded)
                return;
            this.loaded = false;
            this.remove = true;
            for (var i in BaseArr) {
                BaseArr[i].base.destroy();
            }
        };
    },
    getRenderMesh: function (name) {
        var mesh = ItemModel.getEmptyMeshFromPool();
        var blocks = Structure.getStructure(name);
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i].getData();
            ItemModel.getForWithFallback(Block.convertBlockToItemId(block.state.id), block.state.data).addToMesh(mesh, block.x, block.y, block.z);
        }
        return mesh;
    },
    AnimationOptimization: function (name) {
        var animation = null;
        var mesh = VisualStructure.getRenderMesh(name);
        var scale = 1;
        this.setStructure = function (_name) {
            mesh.clear();
            name = _name;
            mesh = VisualStructure.getRenderMesh(name);
            this.destroy();
            animation = null;
        };
        this.destroy = function () {
            if (animation)
                animation.destroy();
        };
        this.open = function () {
            new JavaVisualStructure.Animation(name).open();
        };
        this.setSize = function (_scale) {
            scale = _scale;
        };
        this.load = function (x, y, z) {
            this.destroy();
            animation = new Animation.Base(x, y, z);
            mesh.scale(scale, scale, scale);
            animation.describe({
                mesh: mesh,
                skin: "atlas::terrain"
            });
            animation.load();
        };
    }
};
/*Callback.addCallback("LevelDisplayed", function(){
    let Test = new VisualStructure.AnimationOptimization("test_mod_wood");
    Callback.addCallback("ItemUse", function(){
        Test.open();
    })
})*/
/*
Пусть будет здесь в качестве примера
Callback.addCallback("StructureLoad", function(){
    //wood_0 структура
 let Test = new VisualStructure.Animation("wood_0", 1.1);
 Test.setPrototype({
    load(x, y, z, org_pos, base){
        return "visual_structure_noy"
    },
    tick(x, y, z, packet){
        if(World.getThreadTime() % 10 == 0){
            let arr = Test.getArrBase();
            let value = false;
            for(let i in arr){
                if(value)
                    continue
                let id = BlockSource.getDefaultForActor(Player.get()).getBlockID(x-.5+arr[i].pos[0], y+arr[i].pos[1], z-.5+arr[i].pos[2]);
                if(arr[i].state.id != id && id != 0){
                    arr[i].base.render.setMaterial("visual_structure_red");
                    value = true;
                }else if(arr[i].state.id == id){
                    arr[i].base.render.setMaterial("visual_structure_noy");
                }else{
                    arr[i].base.render.setMaterial("visual_structure");
                value = true;
                }
            }
        }
    }
 })
 Callback.addCallback("ItemUseLocal", function(coords, item){
  if(item.id == 264)
   Test.load(coords.x+.5, coords.y+.5, coords.z+.5)
 })
});
*/
// TODO: Переписать на ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ItemGenerationJava = WRAP_JAVA("com.reider.dungeonutility.items.ItemGeneration");
var GeneratorJava = WRAP_JAVA("com.reider.dungeonutility.items.Generator");
var ItemGeneration = {
    newGenerator: function (name) {
        ItemGenerationJava.newGenerator(name);
    },
    register: function (name, generator) {
        ItemGenerationJava.register(name, generator instanceof GeneratorJava ? generator : generator.getJava());
    },
    isGenerator: function (name) {
        return ItemGenerationJava.isGenerator(name) == 1;
    },
    setItems: function (name, items) {
        ItemGenerationJava.setItems(name, items);
    },
    getItems: function (name) {
        return ItemGenerationJava.getItems(name);
    },
    importFromFile: function (name, path) {
        Callback.invokeCallback("ImportGeneratorFromFile", name, path);
        if (!this.isGenerator(name))
            this.newGenerator(name);
        var loots = FileTools.ReadJSON(path);
        var _loop_2 = function (i) {
            this_1.addItem(name, eval(loots[i].id), loots[i].chance, loots[i].count, loots[i].data, loots[i].extra ? (function () {
                var extra = new ItemExtraData();
                extra.setAllCustomData(JSON.stringify(loots[i].extra));
                return extra;
            })() : null);
        };
        var this_1 = this;
        for (var i in loots) {
            _loop_2(i);
        }
        this.registerRecipeViewer(name.replace("_", " "), name);
    },
    addItem: function (name, id, random, count, data, extra) {
        count = count || {};
        count.min = count.min || 1;
        count.max = count.max || 1;
        count.slotMax = count.slotMax || 1;
        count.slotMin = count.slotMin || 1;
        ItemGenerationJava.addItem(name, new GeneratorJava.ItemGen(id, data || 0, random || 1, count.min, count.max, count.slotMin, count.slotMax, extra ? extra : null));
    },
    setItemIntegration: function (id, random, count, data, extra) {
        count = count || {};
        count.min = count.min || 1;
        count.max = count.max || 2;
        count.slotMax = count.slotMax || 2;
        count.slotMin = count.slotMin || 1;
        ItemGenerationJava.setItemIntegration(new GeneratorJava.ItemGen(id, data || 0, random || 1, count.min, count.max, count.slotMin, count.slotMax, extra ? extra : null));
    },
    setFillEmpty: function (name, value) {
        ItemGenerationJava.setFillEmpty(name, value);
    },
    isFillEmpty: function (name) {
        return ItemGenerationJava.isFillEmpty(name);
    },
    setPrototype: function (name, obj) {
        if (!obj.before)
            obj.before = function (pos, region, packet) { };
        if (!obj.after)
            obj.after = function (pos, region, packet) { };
        if (!obj.isGenerate)
            obj.isGenerate = function (pos, random, slot, item, region, random, packet) { return true; };
        if (!obj.generate)
            obj.generate = function (pos, random, slot, item, region, random, packet) { };
        ItemGenerationJava.setPrototype(name, obj);
    },
    getPrototype: function (name) {
        return ItemGenerationJava.getPrototype(name);
    },
    fill: function (name, x, y, z, random, region, packet) {
        region = region || BlockSource.getCurrentWorldGenRegion();
        packet = packet || {};
        random = random || new java.util.Random();
        ItemGenerationJava.fill(name, x, y, z, random, region, packet);
    },
    registerRecipeViewer: function (generator, name) {
        name = name || "";
        Callback.addCallback('ModsLoaded', function () {
            ModAPI.addAPICallback("RecipeViewer", function (api) {
                var arr = ItemGeneration.getItems(generator);
                var RVTypeAW = (function (_super) {
                    __extends(RVTypeAW, _super);
                    function RVTypeAW(nameRv, icon, content) {
                        var _this = _super.call(this, nameRv, icon, content) || this;
                        return _this;
                    }
                    RVTypeAW.prototype.getAllList = function () {
                        var list = [];
                        for (var i = 0; i < arr.size(); i++) {
                            var item = arr.get(i);
                            list.push({
                                min: item.getMin(),
                                max: item.getMax() - 1,
                                random: (item.getChance() * 100) + "%",
                                input: [],
                                output: [{ id: item.getId(), data: item.getData(), count: 1 }]
                            });
                        }
                        return list;
                    };
                    RVTypeAW.prototype.onOpen = function (elements, data) {
                        elements.get("textMax").onBindingUpdated("text", "max spawn: " + data.max);
                        elements.get("textMin").onBindingUpdated("text", "min spawn: " + data.min);
                        elements.get("textChance").onBindingUpdated("text", "chance spawn: " + data.random);
                    };
                    return RVTypeAW;
                }(api.RecipeType));
                api.RecipeTypeRegistry.register(generator, new RVTypeAW(name, 54, {
                    elements: {
                        output0: { x: 300, y: 150, size: 120 },
                        textMax: { type: "text", x: 490, y: 110, font: { size: 40 } },
                        textMin: { type: "text", x: 490, y: 160, font: { size: 40 } },
                        textChance: { type: "text", x: 490, y: 210, font: { size: 40 } },
                    }
                }));
            });
        });
    },
    enchantAdd: function (type, count) {
        var arr = TYPE[type];
        var extra = new ItemExtraData();
        for (var i = 0; i <= count; i++) {
            var r = Math.ceil(Math.random() * (arr.length - 1));
            var lvl = Math.ceil(Math.random() * (arr[r].l)) + 1;
            if (arr[r]) {
                if (arr[r].e)
                    extra.addEnchant(arr[r].e, lvl);
            }
        }
        return extra;
    }
};
// TODO: Переписать на ts
var StructureIntegration = {
    registerTreeToBonsaiPots: function (sapling, stru, obj) {
        obj = obj || {};
        obj.move = obj.move || {};
        obj.move.x = obj.move.x || 0;
        obj.move.y = obj.move.y || 0;
        obj.move.z = obj.move.z || 0;
        obj.drops = obj.drops || [];
        ModAPI.addAPICallback("bonsaiTrees", function (api) {
            var IdData = api.IdData;
            var _sapling = new IdData(sapling);
            var drops = new api.TreeLootTable(_sapling);
            for (var i in obj.drops) {
                var item = obj.drops[i];
                drops.addItem(new IdData(item), item.chance, item.rolls);
            }
            drops.end();
            var tree = new api.TreeMesh(_sapling);
            tree.end();
            Callback.addCallback("LevelDisplayed", function () {
                tree.addMesh(obj.move.x, obj.move.y, obj.move.z, VisualStructure.getRenderMesh(stru)).end();
            });
            api.registerSapling(_sapling, obj.growTime, obj.tags);
        });
    }
};
// TODO: Переписать на ts
function StructureDescription(stru_name) {
    if (stru_name == undefined || stru_name == null)
        var stru = new StructureDescriptionJava([]);
    else
        var stru = StructureLoader.getStructure(stru_name);
    var cache = false;
    var blocks = {};
    //включает кэширование
    this.cacheEnable = function (value) {
        cache = value;
        return this;
    };
    //обновлет структуру
    this.cacheUpdate = function () {
        var arr = [];
        var keys = Object.keys(blocks);
        for (var i in keys) {
            var pos = keys[i].split(":");
            arr.push(BlockData.createData(parseInt(pos[0]) || 0, parseInt(pos[1]) || 0, parseInt(pos[2]) || 0, blocks[keys[i]]));
        }
        stru.blocks = arr;
        return this;
    };
    //проверяет включёноли кэширование
    this.isCache = function () {
        return cache;
    };
    //добавляет блок в структуру 
    this.addBlock = function (x, y, z, state) {
        blocks[x + ":" + y + ":" + z] = state;
        return this;
    };
    //возвращает блок
    this.getBlock = function (x, y, z) {
        return blocks[x + ":" + y + ":" + z];
    };
    //проверяет естли блок
    this.isBlock = function (x, y, z) {
        return !!this.getBlock(x, y, z);
    };
    //возвращает java описание структуры 
    this.getDescription = function () {
        if (!cache)
            this.cacheUpdate();
        return stru;
    };
    this.save = function (name) {
        if (!cache)
            this.cacheUpdate();
        StructureLoader.setStructure(name, stru);
        return this;
    };
    this.getBlocks = function () {
        return stru.blocks;
    };
    this.setBlocks = function (blocks) {
        stru.blocks = blocks;
        return this;
    };
}
/*//создаём экземпляр StructureDescription
let Test = new StructureDescriptionJS();

//добавляем блок(относительно центра)
Test.addBlock(0, 0, 0, new BlockState(1, 0));
Test.addBlock(0, 1, 0, new BlockState(54, 0));
Test.addBlock(0, 2, 0, new BlockState(1, 0));

Test.cacheEnable(true);//отключаем обновление блоков у getDescription и save(для более быстрой работы)
Test.cacheUpdate();//обновляем блоки
Test.save("test");//сохраняем структуру под именем test

//устанавливаем структуру, при нажатии
Callback.addCallback("ItemUse", function(pos){
    //любой метод место имени структуры может принять Test.getDescription()
    Structure.set(Test.getDescription(), pos.x, pos.y+1, pos.z);
    Structure.set("test", pos.x, pos.y+4, pos.z);
});*/ 
var StructurePieceController = WRAP_JAVA("com.reider.dungeonutility.struct.generation.StructurePieceController");
var DefaultDescription = WRAP_JAVA("com.reider.dungeonutility.struct.generation.types.api.DefaultGeneration");
var Vector3 = WRAP_JAVA("com.zhekasmirnov.apparatus.adapter.innercore.game.common.Vector3");
Network.addClientPacket("message", function (data) {
    Game.message(data.text);
});
Network.addServerPacket("DungeonUtility.optimization", function (client) {
    var player = client.getPlayerUid();
    if (new PlayerActor(player).isOperator()) {
        var pos = Entity.getPosition(player);
        var client_1 = Network.getClientForPlayer(player);
        var packet = {
            text: "Вами была произведена принудительная оптимизация структур."
        };
        StructurePieceController.algorithms.algorithmsOptimization(new Vector3(pos.x, pos.y, pos.z));
        client_1 && client_1.send("message", packet);
    }
    else {
        var client_2 = Network.getClientForPlayer(player);
        var packet = {
            text: "У вас нет доступа к очистке"
        };
        client_2 && client_2.send("message", packet);
    }
});
Callback.addCallback("NativeCommand", function (cmd) {
    if (cmd == "/optimization")
        Network.sendToServer("DungeonUtility.optimization", {});
});
var listPiece = [];
var reg = false;
Callback.addCallback("StructureLoad", function () {
    if (reg)
        return;
    reg = true;
    Callback.invokeCallback("StructureLoadOne");
    for (var i in listPiece) {
        var pieces = StructurePieceController.getPieces();
        for (var a in pieces)
            StructurePieceController.getPiece(pieces[a])
                .addGeneration(listPiece[i]);
    }
});
var DefaultGenerationDescription = /** @class */ (function () {
    function DefaultGenerationDescription(structure, chance, type) {
        if (type === void 0) { type = "default"; }
        if (structure instanceof StructureDescriptionJava)
            structure = new Structure.advanced(structure);
        this.structure = structure;
        this.chance = chance;
        this.type = type;
        this.setIdentifier();
        this.setGenerationParams();
        this.setDistance();
        this.setStorage();
        this.setConditionsSpawned();
        this.setBiomes();
        this.setSurface();
    }
    DefaultGenerationDescription.prototype.setGenerationParams = function (dimension, x, y, z, count) {
        if (dimension === void 0) { dimension = 0; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (count === void 0) { count = [1]; }
        this.dimension = dimension;
        this.offset = { x: x, y: y, z: z };
        this.count = count;
        return this;
    };
    /**
     * Исправляет баг половинчитых структур, не рекомендуется использовать на структурах, которые генеруются часто, например деревья, т.к повышается потребление ОЗУ и ЦПУ
     * @param identifier - уникальный индификатор, по которому будет сохраняться структура, после выхода из мира, чтобы при возвращении в мир установить
     * @returns Возвращает самого себя
     */
    DefaultGenerationDescription.prototype.setIdentifier = function (identifier) {
        if (identifier === void 0) { identifier = ""; }
        this.identifier = identifier;
        return this;
    };
    DefaultGenerationDescription.prototype.setDistance = function (distance, name, checkName) {
        if (distance === void 0) { distance = 0; }
        if (name === void 0) { name = null; }
        if (checkName === void 0) { checkName = !!name; }
        this.distance = distance;
        this.name = name;
        this.checkName = checkName;
        return this;
    };
    DefaultGenerationDescription.prototype.setStorage = function (storage_structure, queue_clear, storageQueue) {
        if (storage_structure === void 0) { storage_structure = true; }
        if (queue_clear === void 0) { queue_clear = true; }
        if (storageQueue === void 0) { storageQueue = 60000; }
        this.storage_structure = storage_structure;
        this.queue_clear = queue_clear;
        this.storage_queue = storageQueue;
        return this;
    };
    DefaultGenerationDescription.prototype.setConditionsSpawned = function (check_place, min_y, max_y) {
        if (check_place === void 0) { check_place = false; }
        if (min_y === void 0) { min_y = 0; }
        if (max_y === void 0) { max_y = 256; }
        this.check_place = check_place;
        this.min_y = min_y;
        this.max_y = max_y;
        return this;
    };
    DefaultGenerationDescription.prototype.setBiomes = function (white_list, list) {
        if (white_list === void 0) { white_list = false; }
        if (list === void 0) { list = []; }
        this.biomes_white_list = white_list;
        this.biomes = list;
        return this;
    };
    /**
     * Рекомендую не использовать, плохая совместимость с серверным ядром на основе Nukkit-Mot
     * @param white_list - белый список или черный списое
     * @param list - список
     * @returns - возвращает самого себя
     */
    DefaultGenerationDescription.prototype.setSurface = function (white_list, list) {
        if (white_list === void 0) { white_list = false; }
        if (list === void 0) { list = []; }
        this.surface_white_list = white_list;
        this.surface = list;
        return this;
    };
    DefaultGenerationDescription.prototype.clone = function (identifier) {
        if (identifier === void 0) { identifier = ""; }
        return new DefaultGenerationDescription(this.structure, this.chance, this.type)
            .setIdentifier(identifier)
            .setGenerationParams(this.dimension, this.offset.x, this.offset.y, this.offset.z, this.count)
            .setDistance(this.distance, this.name, this.checkName)
            .setStorage(this.storage_structure, this.queue_clear, this.storage_queue)
            .setConditionsSpawned(this.check_place, this.min_y, this.max_y)
            .setBiomes(this.biomes_white_list, this.biomes)
            .setSurface(this.surface_white_list, this.surface);
    };
    DefaultGenerationDescription.prototype.build = function () {
        return StructurePiece.getDefault({
            structure: this.structure,
            chance: this.chance,
            type: this.type,
            identifier: this.identifier,
            //legacy
            legacy_offset: false,
            legacySpawn: false,
            //distance
            distance: this.distance,
            checkName: this.checkName,
            name: this.name,
            //generation params
            dimension: this.dimension,
            offset: this.offset,
            count: this.count,
            //storage params
            save: this.storage_structure,
            optimization: this.queue_clear,
            clearToMembory: this.storage_queue,
            //conditions spawned
            isSet: this.check_place,
            minAndMaxY: [this.min_y, this.max_y],
            //biomes
            white_list: this.biomes_white_list,
            biomes: this.biomes,
            //surface
            white_list_blocks: this.surface_white_list,
            blocks: this.surface
        });
    };
    DefaultGenerationDescription.prototype.register = function () {
        StructurePiece.register(this.build());
        return this;
    };
    return DefaultGenerationDescription;
}());
var StructurePiece;
(function (StructurePiece) {
    function registerType(cl) {
        var pieces = StructurePieceController.getPieces();
        for (var i in pieces)
            StructurePieceController.getPiece(pieces[i]).registerType(cl);
    }
    StructurePiece.registerType = registerType;
    /**@deprecated */
    function getDefault(obj) {
        obj.save = obj.save === undefined ? true : obj.save;
        obj.offset = obj.offset || {};
        if (obj.structure)
            return new DefaultDescription(obj.type || "default", obj.name || "noy_name", obj.offset.x || 0, obj.offset.y || 0, obj.offset.z || 0, Number(obj.chance) || 50, obj.distance || 0, !!obj.save, !!obj.isSet, obj.dimension || 0, !!obj.white_list, obj.biomes || [], !!obj.white_list_blocks, obj.blocks || [0], obj.structure.getStructureJava(), !!obj.checkName, obj.optimization === undefined ? true : obj.optimization, !!obj.legacySpawn, obj.clearToMembory || 60000, obj.count || [1], obj.minAndMaxY || [0, 255], obj.legacy_offset === undefined ? true : obj.legacy_offset, obj.identifier || "");
        else {
            Logger.Log("Error StructurePiece register, Structure = undefined or null " + obj.name || "noy_name", "DungeonUtility");
            return null;
        }
    }
    StructurePiece.getDefault = getDefault;
    function generateStructure(stru, x, y, z, random, region, packet) {
        StructurePieceController.getPiece()
            .spawnStructure(stru, new Vector3(x, y, z), region, packet || {}, random, region.getDimension());
    }
    StructurePiece.generateStructure = generateStructure;
    function register(stru) {
        listPiece.push(stru);
    }
    StructurePiece.register = register;
    function getNearestStructure(x, y, z, region, name, checkName) {
        return StructurePieceController.getStorage()
            .getNearestStructure(new Vector3(x, y, z), region.getDimension(), name || null, !!checkName);
    }
    StructurePiece.getNearestStructure = getNearestStructure;
    function addStructure(name, x, y, z, region) {
        StructurePieceController.getStorage()
            .add(name, x, y, z, region);
    }
    StructurePiece.addStructure = addStructure;
    function deleteStructure(x, y, z) {
        StructurePieceController.getStorage()
            .del(x, y, z);
    }
    StructurePiece.deleteStructure = deleteStructure;
})(StructurePiece || (StructurePiece = {}));
;
{
    var DebugDu_1 = WRAP_JAVA("com.reider.dungeonutility.logger.Debug");
    var LoggerDisable_1 = WRAP_JAVA("com.reider.dungeonutility.logger.LoggerDisable");
    var LoggerEnable_1 = WRAP_JAVA("com.reider.dungeonutility.logger.LoggerEnable");
    var ChunkClearMembory = WRAP_JAVA("com.reider.dungeonutility.struct.generation.thread.ChunkClearMembory");
    ModAPI.addAPICallback("RuntimeSetting", function (api) {
        var ConfigStorage = api.ConfigStorage;
        var BuilderConfig = api.BuilderConfig;
        var Setting = api.Setting;
        var config = new ConfigStorage(__dir__ + "runtime_config.json")
            // .put("chunk_manager_type", "native")
            // .put("chunk_clear", true)
            // .put("chunk_clear_time", 60)
            // .put("chunk_clear_limit", 60)
            // .put("chunk_clear_pace", 64)
            .put("debug_enable", false)
            .put("debug_text_size", 15)
            .put("debug_chart_info", 30)
            .put("chart_height", 45)
            .put("chart_width", 100)
            .put("algorithms_debug", true)
            // .put("chunk_clear_debug", true)
            // .put("chunks_debug", true)
            .put("structures_debug", true)
            .put("generation_debug", true)
            .put("structures_queue", true);
        var builder = new BuilderConfig(config)
            // .addSectionDivider("Chunk manager")
            // .addMultipleChoice("Type", "chunk_manager_type", ["java", "native"])
            //.addSectionDivider("ChunkClear")
            //.addCheckBox("Enable", "chunk_clear")
            //.addSlider("Time", "chunk_clear_time", 20, 400, 1)
            //.addSlider("Limit time", "chunk_clear_limit", 30, 120, 1)
            //.addSlider("Pace", "chunk_clear_pace", 8, 128, 1)
            .addSectionDivider("Debug")
            .addCheckBox("Enable", "debug_enable")
            .addSlider("Text size", "debug_text_size", 10, 30, 1)
            .addSlider("Chart info storage", "debug_chart_info", 20, 50, 1)
            .addSlider("Chart height", "chart_height", 40, 150, 1)
            .addSlider("Chart width", "chart_width", 80, 200, 1)
            .addCheckBox("Algorithms", "algorithms_debug")
            //.addCheckBox("Chunk clear", "chunk_clear_debug")
            //.addCheckBox("Chunks", "chunks_debug")
            .addCheckBox("Structures", "structures_debug")
            .addCheckBox("Generation", "generation_debug")
            .addCheckBox("Structures queue", "structures_queue");
        function configUpdate(cfg, config, builder) {
            var debug = config.get("debug_enable", false) ? new LoggerEnable_1() : new LoggerDisable_1();
            debug.setEnable("algorithms", config.get("algorithms_debug", true));
            //debug.setEnable("chunk_clear_manager", config.get("chunk_clear_debug", true));
            //debug.setEnable("chunk_clear_manager_chunks", config.get("chunks_debug", true));
            debug.setEnable("structures", config.get("structures_debug", true));
            debug.setEnable("generation", config.get("generation_debug", true));
            debug.setEnable("structures_queue", config.get("structures_queue_debug", true));
            debug.setAdditionSetting({
                text_size: config.get("debug_text_size", 15),
                chart_info: config.get("debug_chart_info", 30),
                chart_height: config.get("chart_height", 45),
                chart_width: config.get("chart_width", 100)
            });
            DebugDu_1.set(debug);
            // ChunkClearMembory.enable = config.get("chunk_clear", true);
            // ChunkClearMembory.time = config.get("chunk_clear_time", 60)/20*1000;
            // ChunkClearMembory.limit = config.get("chunk_clear_limit", 60)*1000;
            // ChunkClearMembory.pace = config.get("chunk_clear_pace", 64);
            //StructurePieceController.setTypeChunkManager(config.get("chunk_manager_type", "native"));
        }
        configUpdate(config.build(), config, builder);
        var setting = new Setting(__dir__)
            .setBuilderConfig(builder)
            .setChangeSetting(configUpdate);
    });
}
ModAPI.registerAPI("DungeonUtility", {
    StructureLoader: StructureLoader,
    Structure: Structure,
    ItemGeneration: ItemGeneration,
    VisualStructure: VisualStructure,
    StructureUtility: StructureUtility,
    StructureRotation: StructureRotationJS, //TODO: В генерирумых декларациях заменять на StructureRotation в ручную 
    BlockData: BlockData,
    StructureIntegration: StructureIntegration,
    StructureDescription: StructureDescription,
    StructurePool: StructurePool,
    StructurePiece: StructurePiece,
    StructureDestructibility: StructureDestructibility,
    DefaultGenerationDescription: DefaultGenerationDescription,
    requireGlobal: function (command) {
        return eval(command);
    },
    getDir: function () {
        return __dir__;
    },
    version: 5
});
{
    var use_wand_1 = false, firstClick_1 = false;
    var coordinates_1 = [
        { x: 0, y: 0, z: 0 },
        { x: 0, y: 0, z: 0 }
    ];
    var origin_1 = undefined;
    Callback.addCallback("ItemUseLocal", function (coords, item, block, player) {
        if (use_wand_1) {
            if (item.id == VanillaItemID.wooden_axe && Entity.getSneaking(player)) {
                origin_1 = coords;
                Game.message("установлен цент структуры");
                Game.prevent();
            }
            else if (item.id == VanillaItemID.wooden_axe && !Entity.getSneaking(player)) {
                if (!firstClick_1) {
                    coordinates_1[1] = coords;
                    Game.message("вторая точка");
                }
                else {
                    Game.message("первая точка");
                    coordinates_1[0] = coords;
                }
                firstClick_1 = !firstClick_1;
                Game.prevent();
            }
        }
    });
    Network.addServerPacket("dungeonutility.command.set", function (client, data) {
        var playerUid = client.getPlayerUid();
        if (new PlayerActor(playerUid).isOperator() && typeof data.pool_name == "string" && typeof data.structure_name == "string") {
            var pool = StructureLoader.getStructurePoolByName(data.pool_name);
            if (pool) {
                var pos = Entity.getPosition(playerUid);
                Structure.setStructure(pool.get(data.structure_name), pos.x, pos.y, pos.z, BlockSource.getDefaultForActor(playerUid));
            }
        }
    });
    var CompatibilityBase_1 = WRAP_JAVA("com.reider.dungeonutility.struct.formats.du_v2.compatibility.CompatibilityBase");
    Callback.addCallback("NativeCommand", function (cmd) {
        var args = cmd.split(" ");
        if (args[0] == "/du") {
            use_wand_1 = !use_wand_1;
            Game.message("Топор теперь можно использовать для сохранения структур");
            Game.prevent();
            return;
        }
        try {
            if (args[0] == "/struct") {
                if (args[1] == "save" && args[2]) {
                    Game.prevent();
                    if ((coordinates_1[0].x == 0 && coordinates_1[0].y == 0 && coordinates_1[0].z == 0) ||
                        (coordinates_1[1].x == 0 && coordinates_1[1].y == 0 && coordinates_1[1].z == 0)) {
                        Game.message(EColor.RED + "ERROR: НЕВОЗМОЖНО СОХРАНИТЬ СТРУКТУРУ, ОДНА ИЗ ТОЧЕК НЕ ВЫБРАНА!");
                        return;
                    }
                    if (!origin_1)
                        Game.message(EColor.RED + "WARNING: Центр структуры не был установлен!");
                    StructureLoader.setStructure(args[2], new StructureDescriptionJava(StructureUtility.getStructureByPos(coordinates_1, origin_1 || coordinates_1[1], args[3] == "true")));
                    StructureLoader.save(__dir__ + "output/" + args[2] + ".struct", args[2], args[5] || "DungeonUtility", args[4] == "true");
                    if (args[6]) //Сжатие структуры с мощью алгоритма хаффмана
                        StructureLoader.compile(__dir__ + "output/" + args[2] + ".struct");
                    coordinates_1 = [
                        { x: 0, y: 0, z: 0 },
                        { x: 0, y: 0, z: 0 }
                    ];
                    origin_1 = undefined;
                    Game.message("Структура сохранена, точки сброшены до значений по умолчанию");
                    //FileTools.WriteJSON(__dir__+"assets/cache.json", cache, false);
                }
                else if (args[1] == "list") { // struct list 
                    var all = StructureLoader.getAllStructureAndPool();
                    var it = all.keySet().iterator();
                    while (it.hasNext()) {
                        var pool_name = it.next();
                        Game.message(EColor.BLUE + pool_name);
                        var java_list = all.get(pool_name);
                        for (var i = 0; i < java_list.length; i++)
                            Game.message("- " + java_list[i]);
                    }
                    Game.prevent();
                }
                else if (args[1] == "set" && args[2]) { // struct save structure_name pool_name(optional) 
                    var packet = {
                        pool_name: args[3] || "default",
                        structure_name: args[2]
                    };
                    Network.sendToServer("dungeonutility.command.set", packet);
                    Game.prevent();
                    Game.message(EColor.GREEN + "Отправлено серверу на обработку");
                }
                else if (args[1] == "du2") { // Отображает структуру в более человеческом формате
                    var base = new CompatibilityBase_1(new java.util.HashMap());
                    var buffer = java.nio.ByteBuffer.wrap(Utils.readFileBytes(__dir__ + "output/" + args[2] + ".struct"));
                    buffer.get(); // version
                    base.readZones(buffer);
                    Game.message(String(base.toString()));
                    Utils.writeFileBytes(__dir__ + "output/" + args[2] + ".struct.txt", base.toString().getBytes());
                    Game.prevent();
                }
            }
        }
        catch (e) {
            Game.message(e);
        }
    });
}
new StructurePool("test");
// EXAMPLES
/*
let pool = new StructurePool("test")
    .setPathStructures(__dir__)
    .upload("test2", "DungeonUtility_V2");

Callback.addCallback("StructureLoadOne", () => {
    new DefaultGenerationDescription(pool.get("test2"), 60)
        .setIdentifier("test:structure")
        .setDistance(140, "test:structure")
        .setGenerationParams(0, 0, 10)
        .register();
});*/
/**/
/*Callback.addCallback("StructureLoadOne", () => {
    let pool = new StructurePool("test");

    pool.put("mystructure", new StructureDescription()
        .addBlock(0, 0, 0, new BlockState(VanillaBlockID.stonebrick, 0))
        .addBlock(0, 1, 0, new BlockState(VanillaBlockID.stonebrick, 1))
        .addBlock(0, 2, 0, new BlockState(VanillaBlockID.chest, 0))
        .getDescription());

    ItemGeneration.newGenerator("generationTest");
    ItemGeneration.addItem("generationTest", VanillaItemID.iron_chestplate, .5);
    ItemGeneration.addItem("generationTest", VanillaItemID.diamond, .5);
    ItemGeneration.addItem("generationTest", VanillaItemID.gold_ingot, .5);
        
    pool.setGlobalPrototype("mystructure", Structure.getPrototypeDefault("generationTest"))

    pool.put("wood", new StructureDescription()
        .addBlock(0, 0, 0, new BlockState(VanillaBlockID.log, 0))
        .addBlock(0, 1, 0, new BlockState(VanillaBlockID.log, 0))
        .addBlock(0, 2, 0, new BlockState(VanillaBlockID.leaves, 0))
        .addBlock(0, 3, 0, new BlockState(VanillaBlockID.log, 0))
        .addBlock(0, 4, 0, new BlockState(VanillaBlockID.leaves, 0))
        .getDescription());

    let mystructure = new Structure.advanced(pool.get("mystructure"))
    new DefaultGenerationDescription(mystructure, 1)
        .setGenerationParams(0, 0, 10)
        .setDistance(60, "mystucture")//Расстояние между этой структурой будет минимум 60
        .setSurface(true, [VanillaBlockID.grass, VanillaBlockID.dirt])
        .register()

    let wood = new Structure.advanced(pool.get("wood"))
    new DefaultGenerationDescription(wood, 1)
        .setGenerationParams(0, 0, 2, 0, [1, 2, 3])// 1, 2, 3 - Количество деревьев которые будут спавнится в чанке
        .setStorage(false)// Не сохраняем список структур
        .register();
});*/ 
