var NativeAPI = WRAP_JAVA("com.reider.dungeonutility.NativeAPI");
var StructureLoaderJava = WRAP_JAVA("com.reider.dungeonutility.StructureLoader");
var StructurePoolJava = WRAP_JAVA("com.reider.dungeonutility.StructurePool");
var BlockData = WRAP_JAVA("com.reider.dungeonutility.api.data.BlockData");
var StructureDescription = WRAP_JAVA("com.reider.dungeonutility.api.StructureDescription");
var StructureCompile = WRAP_JAVA("com.reider.dungeonutility.struct.formats.StructureCompile");
Callback.addCallback("tick", function () {
    while (StructureLoaderJava.isStopTick()) { }
});
Callback.addCallback("GenerateChunkUniversal", function () {
    while (StructureLoaderJava.isStopTick()) { }
});
Callback.addCallback("LevelPreLoaded", function () {
    StructureLoaderJava.loadedStructure();
});
function StructurePool(name, global) {
    if (name instanceof com.reider.dungeonutility.StructurePool)
        var pool = name;
    else
        var pool = new StructurePoolJava(name, !global);
    this.put = function (name, stru) {
        pool.setStructure(name, stru);
        return this;
    };
    this.get = function (name) {
        return pool.getStructure(name);
    };
    this.isLoad = function (name) {
        return pool.isLoad(name) == 1;
    };
    this.deLoad = function (name) {
        pool.deLoad(name);
        return this;
    };
    this.getAllStructure = function () {
        return pool.getAllStructure();
    };
    this.loadRuntime = function (name, path, type, compile) {
        pool.loadRuntime(name, path, type, compile);
        return this;
    };
    this.load = function (path, name, type, compile) {
        pool.load(name, path, type || "DungeonUtility", !!compile);
        return this;
    };
    this.copy = function (name1, name2, prot) {
        prot = prot || {};
        prot.copyBlock = prot.copyBlock || function (data) {
            return data;
        };
        prot.copyPrototype = prot.copyPrototype || function (prot) {
            return prot;
        };
        pool.copy(name1, name2, prot);
    },
        this.StructureAdvanced = function (name) {
            return new Structure.advanced(this.get(name));
        },
        this.registerRotations = function (stru, rotates) {
            rotates = rotates || StructureRotation.getAllY();
            StructureUtilityJava.registerRotations(StructureLoader.getStructure(stru), stru, rotates);
        };
    this.setGlobalPrototype = function (name, obj) {
        obj.isBlock = obj.isBlock || function () { return true; };
        try {
            Callback.addCallback("StructureLoad", function () {
                pool.setGlobalPrototype(name, obj);
            });
        }
        catch (e) {
            pool.setGlobalPrototype(name, obj);
        }
    };
}
var StructureLoader = {
    getStructurePoolByName: function (name) {
        return new StructurePool(StructureLoaderJava.getStructurePoolByName(name || "default"));
    },
    getAllPool: function () {
        return StructureLoaderJava.getAllPool();
    },
    getAllStructureAndPool: function () {
        return StructureLoaderJava.getAllStructureAndPool();
    },
    save: function (path, name, type, compile) {
        try {
            FileTools.WriteText(path, StructureLoaderJava.getType(type || "DungeonUtility").save(StructureLoader.getStructure(name)), false);
            if (compile)
                StructureLoader.compile(path);
        }
        catch (error) {
            Logger.Log("error convert " + error, "DungeonUtility");
        }
    },
    registerType: function (name, obj) {
        obj.isLoadRuntime = obj.isLoadRuntime || function () { return false; };
        StructureLoaderJava.registerType(name, obj);
    },
    load: function (path, name, type, compile) {
        StructureLoaderJava.load(name, path, type || "DungeonUtility", !!compile);
    },
    loadRuntime: function (path, name, type, compile) {
        type = type || "DungeonUtility";
        try {
            var start = new Date().getTime();
            if (FileTools.isExists(path))
                StructureLoaderJava.loadRuntime(name, path, type, !!compile);
            else if (__config__.get("debug.info_load"))
                Logger.Log("error path, load structure: " + name, "DungeonUtility");
            if (__config__.get("debug.info_load"))
                Logger.Log("load: " + name + ", type: " + type + ", time: " + ((new Date().getTime()) - start), "DungeonUtility");
        }
        catch (e) {
            if (__config__.get("debug.message_error_load"))
                Logger.Log("error load structure: " + name + "\n" + e, "DungeonUtility");
        }
    },
    getStructure: function (name) {
        if (name instanceof com.reider.dungeonutility.api.StructureDescription)
            return name;
        if (this.isLoad(name || "error"))
            return StructureLoaderJava.getStructure(name || "error");
        Logger.Log("structure noy load " + name, "DungeonUtility");
        alert("error " + name);
        return new StructureDescription([]);
    },
    setStructure: function (name, stru) {
        StructureLoaderJava.loadRuntime(name, stru);
    },
    isLoad: function (name) {
        return StructureLoaderJava.isStructureLoad(name) == 1;
    },
    deLoad: function (name) {
        StructureLoaderJava.deLoad(name || "error");
    },
    compile: function (path) {
        StructureCompile.compile(path, FileTools.ReadText(path));
    },
    decompile: function (path) {
        FileTools.WriteText(path, StructureCompile.decompile(path), false);
    }
};
function getId(id) {
    if (id >= 8000) {
        var keys = Object.keys(BlockID);
        for (var i in keys) {
            if (BlockID[keys[i]] == id)
                return keys[i];
        }
    }
    return id;
}
function getState(id, state) {
    /*let block_state = new BlockState(id, state);
    if(JSON.stringify(StructureUtility.getStateByData(id, block_state.data))==JSON.stringify(state))
        return block_state.data;*/
    return state;
}
StructureLoaderJava.registerType("DungeonAPI", new com.reider.dungeonutility.struct.formats.DungeonAPI());
StructureLoaderJava.registerType("DungeonAPI_V2", new com.reider.dungeonutility.struct.formats.DungeonAPI_V2());
StructureLoaderJava.registerType("DungeonCore", new com.reider.dungeonutility.struct.formats.DungeonCore());
StructureLoaderJava.registerType("Structures", new com.reider.dungeonutility.struct.formats.Structures());
StructureLoaderJava.registerType("DungeonUtility", new com.reider.dungeonutility.struct.formats.DungeonUtility());
var StructureJava = WRAP_JAVA("com.reider.dungeonutility.struct.Structure");
var DefaultStructurePrototype = WRAP_JAVA("com.reider.dungeonutility.struct.structures.DefaultStructurePrototype");
var StructureDestructibilityJava = WRAP_JAVA("com.reider.dungeonutility.struct.structures.StructureDestructibility");
var blockSource = function () {
    return BlockSource.getCurrentWorldGenRegion();
};
function StructureDestructibility() {
    var self = new StructureDestructibilityJava();
    this.addBlock = function (id, state) {
        self.addBlock(id, state);
        return this;
    };
    this.get = function () {
        return self;
    };
}
var Structure = {
    getPrototypeDefault: function (obj) {
        return new DefaultStructurePrototype(obj.isItems, obj.name ? obj.name : null, obj.blocks);
    },
    setStructure: function (name, x, y, z, region, packet) {
        StructureJava.setStructure(StructureLoader.getStructure(name), x || 0, y || 0, z || 0, region || blockSource(), packet || {});
    },
    build: function (name, x, y, z, sleep, region, packet) {
        Threading.initThread("Structure-build", function () {
            StructureJava.build(StructureLoader.getStructure(name), x || 0, y || 0, z || 0, region || blockSource(), sleep, packet || {});
        });
    },
    isStructure: function (name, x, y, z, region) {
        return StructureJava.isStructure(StructureLoader.getStructure(name), x || 0, y || 0, z || 0, region || blockSource()) == 1;
    },
    isSetStructure: function (name, x, y, z, region) {
        return StructureJava.isSetStructure(StructureLoader.getStructure(name), x || 0, y || 0, z || 0, region || blockSource()) == 1;
    },
    destroy: function (name, x, y, z, region) {
        StructureJava.destroy(StructureLoader.getStructure(name), x || 0, y || 0, z || 0, region || blockSource());
    },
    getStructure: function (name) {
        if (!Array.isArray(name))
            return StructureLoader.getStructure(name).blocks;
        return [];
    },
    addFeatureHandler: function (obj) {
        obj.isBlock = obj.isBlock || function () { return true; };
        NativeAPI.addFeature(obj);
    },
    setGlobalPrototype: function (name, obj) {
        obj.isBlock = obj.isBlock || function () { return true; };
        try {
            Callback.addCallback("StructureLoad", function () {
                StructureJava.setGlobalPrototype(name, obj);
            });
        }
        catch (e) {
            StructureJava.setGlobalPrototype(name, obj);
        }
    },
    getGlobalPrototype: function (name) {
        return StructureJava.getGlobalPrototype(name);
    },
    advanced: function (name) {
        if (name instanceof com.reider.dungeonutility.api.StructureDescription)
            var stru = new StructureJava(name);
        else {
            var stru = new StructureJava(new StructureDescription([]));
            if (StructureLoader.isLoad(name))
                stru.setStructure(StructureLoader.getStructure(name));
            else
                Callback.addCallback("StructureLoad", function () {
                    stru.setStructure(StructureLoader.getStructure(name));
                });
        }
        /*if(StructureLoader.isLoad(name))
            stru.setStructure(StructureLoader.getStructure(name));
        else
            Callback.addCallback("StructureLoad", function(){
                stru.setStructure(StructureLoader.getStructure(name));
            });*/
        this.getStructureJava = function () {
            return stru;
        };
        this.setUseGlobalPrototype = function (value) {
            stru.setUseGlobalPrototype(value);
            return this;
        };
        this.isUseGlobalPrototype = function () {
            return stru.isUseGlobalPrototype();
        };
        //для обратной совместимости 
        this.setPrototype = function (obj) {
            obj.isBlock = obj.isBlock || function () { return true; };
            var funcIsBlock = obj.isBlock;
            obj.isBlock = function (original_pos, data, region, packet) {
                return funcIsBlock(original_pos, {
                    x: original_pos.x + data.x,
                    y: original_pos.y + data.y,
                    x: original_pos.z + data.z
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
            stru.setPrototype(obj);
            return this;
        };
        //новый метод 
        this.setProt = function (obj) {
            try {
                obj.isBlock = obj.isBlock || function () { return true; };
            }
            catch (e) {
            }
            stru.setPrototype(obj);
            return this;
        };
        this.getPrototype = function () {
            return stru.getPrototype();
        };
        this.setStruct = function (name) {
            stru.setStructure(Structure.getStructure(name));
            return this;
        };
        this.getStructure = function () {
            return stru.getStructure();
        };
        this.isStructure = function (x, y, z, region) {
            return stru.isStructure(x || 0, y || 0, z || 0, region || blockSource());
        };
        this.isSetStructure = function (x, y, z, region) {
            return stru.isSetStructure(x || 0, y || 0, z || 0, region || blockSource());
        };
        this.setStructure = function (x, y, z, region, packet) {
            stru.setStructure(x || 0, y || 0, z || 0, region || blockSource, packet || {});
            return this;
        };
        this.build = function (x, y, z, sleep, region, packet) {
            Threading.initThread("Structure-build", function () {
                stru.build(x || 0, y || 0, z || 0, region || blockSource, sleep, packet || {});
            });
            return this;
        };
        this.destroy = function (x, y, z, region) {
            stru.destroy(x || 0, y || 0, z || 0, region || blockSource());
            return this;
        };
    },
    getRandomCoords: function (x, z, random, obj) {
        obj = obj || {};
        return GenerationUtils.findSurface(x * 16 + random.nextInt(16), random.nextInt((obj.max || 100) - (obj.min || 50)) + (obj.min || 50), z * 16 + random.nextInt(16));
    },
    generators: {},
    setStructureGeneration: function (name, generator) {
        this.generators[name] = generator;
    },
    getStructureGeneration: function (name) {
        return this.generators[name];
    },
    GenerateType: {
        OverworldFind: function (obj) {
            obj = obj || {};
            this.min = obj.min || 60;
            this.max = obj.max || 80;
            this.chance = obj.chance || 1000;
            this.white_list = obj.white_list || false;
            this.biome_list = obj.biome_list || [];
            this.stru = obj.stru || new Structure.advanced("");
            this.count = obj.count || 1;
            this.isSet = obj.isSet || function () { return true; };
            var thas = this;
            this.update = function () {
                thas = this;
            };
            Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random) {
                for (var i = 0; i < thas.count; i++) {
                    if (random.nextInt(thas.chance) <= 1) {
                        var coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), random.nextInt(thas.max - thas.min) + thas.min, chunkZ * 16 + random.nextInt(16));
                        var region = BlockSource.getCurrentWorldGenRegion();
                        if (!thas.isSet(coords, random, region))
                            return;
                        if (thas.white_list) {
                            if (thas.biome_list.indexOf(region.getBiome(coords.x, coords.z)) != -1) {
                                thas.stru.setStructure(coords.x, coords.y, coords.z, region, { random: random });
                            }
                        }
                        else if (thas.biome_list.indexOf(region.getBiome(coords.x, coords.z)) == -1) {
                            thas.stru.setStructure(coords.x, coords.y, coords.z, region, { random: random });
                        }
                    }
                }
            });
        },
        CustomDimensionFind: function (obj) {
            obj = obj || {};
            this.min = obj.min || 60;
            this.max = obj.max || 80;
            this.chance = obj.chance || 1000;
            this.white_list = obj.white_list || false;
            this.biome_list = obj.biome_list || [];
            this.dimension = obj.dimension || 0;
            this.stru = obj.stru || new Structure.advanced("");
            this.count = obj.count || 1;
            this.isSet = obj.isSet || function () { return true; };
            var thas = this;
            this.update = function () {
                thas = this;
            };
            Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, id) {
                for (var i = 0; i < thas.count; i++) {
                    if (id != thas.dimension)
                        return;
                    if (random.nextInt(thas.chance) <= 1) {
                        var coords = GenerationUtils.findSurface(chunkX * 16 + random.nextInt(16), random.nextInt(thas.max - thas.min) + thas.min, chunkZ * 16 + random.nextInt(16));
                        var region = BlockSource.getCurrentWorldGenRegion();
                        if (!thas.isSet(coords, random, region))
                            return;
                        if (thas.white_list) {
                            if (thas.biome_list.indexOf(region.getBiome(coords.x, coords.z)) != -1) {
                                thas.stru.setStructure(coords.x, coords.y, coords.z, region, { random: random });
                            }
                        }
                        else if (thas.biome_list.indexOf(region.getBiome(coords.x, coords.z)) == -1) {
                            thas.stru.setStructure(coords.x, coords.y, coords.z, region, { random: random });
                        }
                    }
                }
            });
        }
    }
};
Structure.set = Structure.setStructure;
Structure.is = Structure.isStructure;
Structure.isSet = Structure.isSetStructure;
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
        var region = BlockSource.getDefaultForActor(Player.get());
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
        count.max = count.max || 2;
        count.slotMax = count.slotMax || 2;
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
function StructureDescriptionJS(stru_name) {
    if (stru_name == undefined || stru_name == null)
        var stru = new StructureDescription([]);
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
/*let StructurePrivateJava = WRAP_JAVA("com.reider.dungeonutility.struct.StructurePrivate");
let StructurePrivate = {
    addRegion(x1, y1, z1, x2, y2, z2, region){
        alert(x1 + " " + y1 + " " + z1);
        alert(x2 + " " + y2 + " " + z2);
        StructurePrivateJava.addRegion(x1, y1, z1, x2, y2, z2, region);
    },
    addToStructure(stru, x, y, z, region){
        let size = StructureUtility.getStructureSize(stru);
        this.addRegion(size[0].min + x, size[1].min + y, size[2].min + z, size[0].max + x, size[1].max + y, size[2].max + z, region);
    },
    deleteRegion(x, y, z, region){
        StructurePrivateJava.deleteRegion(x, y, z, region);
    },
    isDestoyBlock(x, y, z, region){
        return StructurePrivateJava.isBlockDestroy(x, y, z, region).toString() == "true";
    }
};
Callback.addCallback("DestroyBlock", function(pos, block, player){
    if(StructurePrivate.isDestoyBlock(pos.x, pos.y, pos.z, BlockSource.getDefaultForActor(player)))
        Game.prevent();
});*/ 
var StructurePieceJava = WRAP_JAVA("com.reider.dungeonutility.struct.generation.StructurePiece");
var WorldStructure = WRAP_JAVA("com.reider.dungeonutility.struct.generation.WorldStructure");
var OverWorld = WRAP_JAVA("com.reider.dungeonutility.struct.generation.types.OverWorld");
var DefaultType = WRAP_JAVA("com.reider.dungeonutility.struct.generation.types.Default");
var Nether = WRAP_JAVA("com.reider.dungeonutility.struct.generation.types.Nether");
var DefaultDescription = WRAP_JAVA("com.reider.dungeonutility.struct.generation.types.DefaultGeneration");
var Vector3 = WRAP_JAVA("com.zhekasmirnov.apparatus.adapter.innercore.game.common.Vector3");
try {
    StructurePieceJava.setCriticalReleaseSetting(__config__.get("critical_release.enable") == true, Number(__config__.get("critical_release.active")), Number(__config__.get("critical_release.radius")));
    StructurePieceJava.setClearingClustersSetting(__config__.get("critical_release.enable") == true, Number(__config__.get("critical_release.active")), Number(__config__.get("critical_release.radius")));
}
catch (e) {
    alert(e);
}
Network.addClientPacket("message", function (text) {
    Game.message(text.text);
});
Network.addServerPacket("DungeonUtility.optimization", function (client) {
    var player = client.getPlayerUid();
    if (player == Player.get()) {
        var pos = Entity.getPosition(player);
        StructurePieceJava.algorithmsOptimization(new Vector3(pos.x, pos.y, pos.z));
        var client_1 = Network.getClientForPlayer(player);
        if (client_1)
            client_1.send("message", {
                text: "Вами была произведена принудительная оптимизация структур."
            });
    }
    else {
        var client_2 = Network.getClientForPlayer(player);
        if (client_2)
            client_2.send("message", {
                text: "У вас нет доступа к очистке"
            });
    }
});
Callback.addCallback("NativeCommand", function (cmd) {
    if (cmd == "/optimization") {
        Network.sendToServer("DungeonUtility.optimization", {});
    }
});
Callback.addCallback("GenerateChunk", function (x, z, rand, id) {
    StructurePieceJava.callbackGeneration(x, z, rand, id);
});
Callback.addCallback("GenerateCustomDimensionChunk", function (x, z, rand, id) {
    StructurePieceJava.callbackGeneration(x, z, rand, id);
});
var listPiece = [];
var reg = false;
Callback.addCallback("StructureLoad", function () {
    if (reg)
        return;
    reg = true;
    Callback.invokeCallback("StructureLoadOne");
    for (var i in listPiece)
        StructurePieceJava.register(listPiece[i]);
});
var StructurePiece = {
    registerType: function (cl) {
        StructurePieceJava.registerType(cl);
    },
    getDefault: function (obj) {
        obj.save = obj.save === undefined ? true : obj.save;
        obj.offset = obj.offset || {};
        if (obj.structure)
            return new DefaultDescription(obj.type || "default", obj.name || "noy_name", obj.offset.x || 0, obj.offset.y || 0, obj.offset.z || 0, Number(obj.chance) || 50, obj.distance || 0, !!obj.save, !!obj.isSet, obj.dimension || 0, !!obj.white_list, obj.biomes || [], !!obj.white_list_blocks, obj.blocks || [0], obj.structure.getStructureJava(), !!obj.checkName);
        else {
            Logger.Log("Error StructurePiece register, Structure = undefined or null " + obj.name || "noy_name", "DungeonUtility");
            return null;
        }
    },
    generateStructure: function (IStru, x, y, z, random, region, packet) {
        StructurePieceJava.generateStructure(IStru, x, y, z, random, region, packet);
    },
    register: function (stru) {
        listPiece.push(stru);
    },
    getNearestStructure: function (x, y, z, region, name, checkName) {
        return StructurePieceJava.getNearestStructure(new Vector3(x, y, z), region.getDimension(), name || null, !!checkName);
    },
    addStructure: function (name, x, y, z, region) {
        StructurePieceJava.add(name, x, y, z, region);
    },
    deleteStructure: function (x, y, z) {
        StructurePieceJava.del(x, y, z);
    }
};
Callback.addCallback("LevelLeft", function () {
    StructurePieceJava.structures.clear();
});
Saver.addSavesScope("DungeonUtility", function (scope) {
    var arr = scope.structures;
    for (var i in arr) {
        var obj = arr[i];
        StructurePieceJava.structures.add(new WorldStructure(new Vector3(obj.pos.x, obj.pos.y, obj.pos.z), obj.name, obj.dimension || 0));
    }
}, function () {
    var arr = [];
    var size = StructurePieceJava.structures.size();
    for (var i = 0; i < size; i++) {
        var object = StructurePieceJava.structures.get(i);
        arr.push({
            name: String(object.name),
            pos: {
                x: Number(object.pos.x),
                y: Number(object.pos.y),
                z: Number(object.pos.z)
            },
            dimension: Number(object.dimension)
        });
    }
    return {
        structures: arr
    };
});
StructurePiece.registerType(new OverWorld());
StructurePiece.registerType(new Nether());
StructurePiece.registerType(new DefaultType());
var DU = {
    StructureLoader: StructureLoader,
    Structure: Structure,
    ItemGeneration: ItemGeneration,
    VisualStructure: VisualStructure,
    StructureUtility: StructureUtility,
    StructureRotation: StructureRotationJS,
    BlockData: BlockData,
    StructureIntegration: StructureIntegration,
    StructureDescription: StructureDescriptionJS,
    StructurePool: StructurePool,
    StructurePiece: StructurePiece,
    StructureDestructibility: StructureDestructibility,
    //StructurePrivate: StructurePrivate,
    requireGlobal: function (command) {
        return eval(command);
    },
    getDir: function () {
        return __dir__;
    },
    version: 4
};
ModAPI.registerAPI("DungeonUtility", DU);
IDRegistry.genItemID("dungeon_utility_wood");
Item.createItem("dungeon_utility_wood", "Dungeon wood \n /struct save name:string save_air:bool specialSeparator:bool type:string, compile:bool", {
    name: "axe",
    meta: 0
}, {
    stack: 1,
    isTech: false
});
var firstClick = false;
var coordinates = [{ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }];
var origin = { x: 0, y: 0, z: 0 };
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
    if (item.id == ItemID.dungeon_utility_wood && Entity.getSneaking(player)) {
        origin = coords;
        Game.message("установлен цент структуры");
    }
    else if (item.id == ItemID.dungeon_utility_wood && !Entity.getSneaking(player)) {
        if (!firstClick) {
            coordinates[1] = coords;
            Game.message("вторая точка");
        }
        else {
            Game.message("первая точка");
            coordinates[0] = coords;
        }
        firstClick = !firstClick;
    }
});
Callback.addCallback("NativeCommand", function (cmd) {
    var arr = cmd.split(" ");
    try {
        if (arr[0] == "/struct") {
            if (arr[1] == "save") {
                Game.prevent();
                StructureLoader.setStructure(arr[2], new StructureDescription(StructureUtility.getStructureByPos(coordinates, origin, arr[3] == "true")));
                StructureLoader.save(__dir__ + "output/" + arr[2] + ".struct", arr[2], arr[5] || "DungeonUtility", arr[4] == "true");
                if (arr[6])
                    StructureLoader.compile(__dir__ + "output/" + arr[2] + ".struct");
                Game.message("Структура сохранена");
                //FileTools.WriteJSON(__dir__+"assets/cache.json", cache, false);
            }
            else if (arr[1] == "load") {
                Game.prevent();
                Game.message("structure load");
            }
        }
    }
    catch (e) {
        Game.message(e);
    }
});
