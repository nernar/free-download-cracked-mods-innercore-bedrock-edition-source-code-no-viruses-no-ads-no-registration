IMPORT("TextureWorker");
let DIRT_TILES = {2: true, 3: true, 60: true};
let ISLAND_SPAWNING = Boolean(__config__.getBool("island_spawning"));
let ISLAND_CHANCE = Number(__config__.getInteger("island_chance"));
let ISLAND_MAX_RADIUS = Number(__config__.getInteger("island_max_radius"));
let ISLAND_MIN_RADIUS = Number(__config__.getInteger("island_min_radius"));
Block.createSpecialType({solid: true, lightopacity: 15, renderlayer: 2, translucency: 0, base: 17, destroytime: 2, explosionres: 10, sound: "wood"}, "wood");
Block.createSpecialType({base: 18, destroytime: 0.2, explosionres: 1, renderallfaces: true, renderlayer: 1, lightopacity: 1, translucency: 0.5, sound: "grass"}, "leaves");
Block.createSpecialType({base: 1, destroytime: 0.2, explosionres: 1, renderallfaces: true, renderlayer: 1, lightopacity: 1, translucency: 0.5, sound: "snow"}, "snow");
function randomInt(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getDistance(x, y, z, x2, y2, z2) {
    x -= x2;
    y -= y2;
    z -= z2;
    return Math.abs(Math.sqrt((x * x) + (y * y) + (z * z)));
}
Network.addClientPacket("oreTrees.bone_mile_use", function (data) {
    for (let i = 0; i < 16; i++) {
        let px = data.x + 1 / 16 + (Math.random() * 15 / 16);
        let pz = data.z + 1 / 16 + (Math.random() * 15 / 16);
        let py = data.y + Math.random();
        Particles.addParticle(37, px, py, pz, 0, 0, 0);
    }
});
function spawnBoneMileParticles(dimension, coords) {
    dimension = typeof dimension == "number" ? dimension : dimension.getDimension();
    let clients = Network.getConnectedClients();
    for (let i in clients) {
        let client = clients[i];
        let player = client.getPlayerUid();
        if (dimension == Entity.getDimension(player)) {
            let pos = Entity.getPosition(player);
            if (getDistance(pos.x, pos.y, pos.z, coords.x, coords.y, coords.z) < 64) {
                client.send("oreTrees.bone_mile_use", coords);
            }
        }
    }
}
let getHeight = function (region, x, y, z, max) {
    var height = 0;
    while (height < max) {
        var blockID = region.getBlockId(x, y + height, z);
        if (blockID != 0 && ToolAPI.getBlockMaterialName(blockID) != "plant") {
            break;
        }
        height++;
    }
    return height;
};
let setLeaves = function (region, x, y, z, leaves) {
    let blockID = region.getBlockId(x, y, z);
    if (blockID == 0 || blockID == 106) {
        region.setBlock(x, y, z, leaves.id, leaves.data);
    }
};
let generateCustomTree = function (region, x, y, z, params) {
    let leaves = params.leaves;
    let log = params.log;
    let height = this.getHeight(region, x, y, z, randomInt(params.height.min, params.height.max) + 2);
    let treeHeight = height;
    if (height >= 5) {
        height -= 2;
        for (let ys = 0; ys < height; ys++) {
            region.setBlock(x, y + ys, z, log.id, log.data);
        }
        let leavesStart = parseInt(height / 2);
        let leavesEnd = height;
        let leavesHeight = height - leavesStart;
        for (let ys = leavesStart; ys <= leavesEnd; ys++) {
            for (let xs = -params.radius; xs <= params.radius; xs++) {
                for (let zs = -params.radius; zs <= params.radius; zs++) {
                    let d = Math.sqrt(xs * xs + zs * zs);
                    let radius = params.radius + 0.5 + Math.random() * Math.abs(leavesEnd - ys + 1) / leavesHeight;
                    if (ys == leavesEnd) {
                        radius /= 2;
                    }
                    if (d <= radius) {
                        this.setLeaves(region, x + xs, y + ys, z + zs, leaves);
                    }
                }
            }
        }
        return treeHeight;
    }
};
function checkArea(region, coords, radius, height) {
    if (radius < 2) {
        radius = 2;
    }
    for (let x = -radius; x <= radius; x++) {
        for (let z = -radius; z <= radius; z++) {
            for (let y = -height; y < radius + 2; y++) {
                if (!!region.getBlockId(coords.x + x, coords.y - y, coords.z + z)) {
                    return false;
                }
            }
        }
    }
    return true;
}
let emptyCollision = new ICRender.CollisionShape();
let oreOverlay = FileTools.ReadImage(__dir__ + "/res/raw-textures/ore_overlay.png");
let logSide = FileTools.ReadImage(__dir__ + "/res/raw-textures/log_oak.png");
function OreTree(nameId, color, translations, genParams, extraDrops, amberResult) {
    extraDrops = extraDrops || [];
    translations = translations || {};
    let that = this;
    IDRegistry.genItemID("sapling_" + nameId);
    Item.createItem("sapling_" + nameId, "sapling_" + nameId, {name: "sapling_" + nameId, data: 0});
    if (translations.sapling) {
        Translation.addTranslation("sapling_" + nameId, translations.sapling);
    }
    Item.registerUseFunction("sapling_" + nameId, function (coords, item, block, player) {
        let blockSource = BlockSource.getDefaultForActor(player);
        let place = coords.relative;
        let tile1 = blockSource.getBlock(place.x, place.y, place.z);
        let tile2 = blockSource.getBlock(place.x, place.y - 1, place.z);
        if (World.canTileBeReplaced(tile1.id, tile1.data) && DIRT_TILES[tile2.id]) {
            blockSource.setBlock(place.x, place.y, place.z, BlockID["sapling_" + nameId]);
            Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
        }
    });
    this.generateTree = function (x, y, z, region) {
        return generateCustomTree(region, x, y, z, {log: {id: BlockID["log_" + nameId], data: 0}, leaves: {id: BlockID["leaves_" + nameId], data: 0}, height: {min: 3, max: 5}, radius: 2});
    };
    IDRegistry.genBlockID("sapling_" + nameId);
    Block.createBlock("sapling_" + nameId, [{name: "sapling_" + nameId, texture: [["sapling_" + nameId, 0]], inCreative: false}], {destroytime: 0.2, explosionres: 1, renderallfaces: true, lightopacity: 1, translucency: 0.5, rendertype: 109, sound: "grass"});
    BlockRenderer.setCustomCollisionShape(BlockID["sapling_" + nameId], 0, emptyCollision);
    Block.setDestroyTime(BlockID["sapling_" + nameId], 0);
    ToolAPI.registerBlockMaterial(BlockID["sapling_" + nameId], "plant");
    Block.registerDropFunction("sapling_" + nameId, function () {
        return [[ItemID["sapling_" + nameId], 1, 0]];
    });
    Block.setRandomTickCallback(BlockID["sapling_" + nameId], function (x, y, z, id, data, region) {
        if (!DIRT_TILES[region.getBlockId(x, y - 1, z)]) {
            region.destroyBlock(x, y, z, true);
        } else {
            if (Math.random() < 0.1 && region.getLightLevel(x, y, z) >= 9) {
                that.generateTree(x, y, z, region);
            }
        }
    });
    Callback.addCallback("ItemUse", function (coords, item, block, is, player) {
        if (item.id == 858 && block.id == BlockID["sapling_" + nameId]) {
            Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.exrta);
            spawnBoneMileParticles(Entity.getDimension(player), coords);
            if (Math.random() < 0.25) {
                that.generateTree(coords.x, coords.y, coords.z, BlockSource.getDefaultForActor(player));
            }
        }
    });
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        let blockSource = BlockSource.getDefaultForActor(player);
        if (blockSource.getBlockId(coords.x, coords.y + 1, coords.z) == BlockID["sapling_" + nameId]) {
            blockSource.destroyBlock(coords.x, coords.y + 1, coords.z, true);
        }
    });
    TextureWorker.paintTextureModDir({bitmap: TextureWorker.TEXTURE_STANDART, src: {path: "res/raw-textures/", name: "ore_sapling"}, color: color, result: {path: "res/items-opaque/", name: "sapling_" + nameId + "_0"}});
    TextureWorker.paintTextureModDir({bitmap: TextureWorker.TEXTURE_STANDART, src: {path: "res/raw-textures/", name: "ore_sapling"}, color: color, result: {path: "res/terrain-atlas/", name: "sapling_" + nameId + "_0"}});
    IDRegistry.genBlockID("log_" + nameId);
    Block.createBlock("log_" + nameId, [{name: "log_" + nameId, texture: [["log_oak_top", 0], ["log_oak_top", 0], ["log_" + nameId, 0], ["log_" + nameId, 0], ["log_" + nameId, 0], ["log_" + nameId, 0]], inCreative: true}], "wood");
    if (translations.log) {
        Translation.addTranslation("log_" + nameId, translations.log);
    }
    Block.registerDropFunction("log_" + nameId, function (coords, blockID, blockData, level, enchant) {
        let drops = [];
        drops.push([17, 1, 0]);
        for (let i = 0; i < (1 + enchant.fortune); i++) {
            drops.push([ItemID["resin_" + nameId], 1, 0]);
        }
        return drops;
    });
    Block.setDestroyTime(BlockID["log_" + nameId], 0.4);
    ToolAPI.registerBlockMaterial(BlockID["log_" + nameId], "wood");
    let emptyBmp = android.graphics.Bitmap.createBitmap(16, 16, android.graphics.Bitmap.Config.ARGB_8888);
    let cvs = new android.graphics.Canvas(emptyBmp);
    cvs.drawBitmap(logSide, 0, 0, null);
    cvs.drawBitmap(TextureWorker.changeBitmapColor(oreOverlay, color), 0, 0, null);
    FileTools.WriteImage(__dir__ + "/res/terrain-atlas/log_" + nameId + "_0.png", emptyBmp);
    IDRegistry.genBlockID("leaves_" + nameId);
    Block.createBlock("leaves_" + nameId, [{name: "leaves_" + nameId, texture: [["leaves_" + nameId, 0]], inCreative: false}, {name: "leaves_" + nameId, texture: [["leaves_" + nameId, 0]], inCreative: false}, {name: "leaves_" + nameId, texture: [["leaves_" + nameId, 0]], inCreative: true}, {name: "leaves_" + nameId, texture: [["leaves_" + nameId + "_opaque", 0]], inCreative: false}], "leaves");
    IDRegistry.genBlockID("leaves2_" + nameId);
    Block.createBlock("leaves2_" + nameId, [{name: "leaves_" + nameId, texture: [["leaves_" + nameId, 0]], inCreative: false}], "leaves");
    if (translations.leaves) {
        Translation.addTranslation("leaves_" + nameId, translations.leaves);
    }
    Block.registerDropFunction("leaves_" + nameId, function (coords, blockID, blockData, level, enchant, item, region) {
        if (level > 0 || item.id == 359) {
            return [[blockID, 1, 2]];
        }
        let drops = [];
        if (Math.random() < 0.04) {
            drops.push([ItemID["sapling_" + nameId], 1, 0]);
        }
        if (randomInt(10) == 0) {
            drops.push([ItemID["acorn_" + nameId], 1, 0]);
        }
        for (let i in extraDrops) {
            let drop = extraDrops[i];
            if (randomInt(drop.chance) == 0) {
                drops.push([drop.id, drop.count, drop.data]);
            }
        }
        return drops;
    });
    Block.setDestroyTime(BlockID["leaves_" + nameId], 0.2);
    ToolAPI.registerBlockMaterial(BlockID["leaves_" + nameId], "plant");
    function checkLeaves(x, y, z, explored, region) {
        let blockID = region.getBlockId(x, y, z);
        if (blockID == BlockID["log_" + nameId]) {
            return true;
        }
        if (blockID == BlockID["leaves_" + nameId]) {
            explored[x + ":" + y + ":" + z] = true;
        }
        return false;
    }
    function checkLeavesFor6Sides(x, y, z, explored, region) {
        return checkLeaves(x - 1, y, z, explored, region) || checkLeaves(x + 1, y, z, explored, region) || checkLeaves(x, y, z - 1, explored, region) || checkLeaves(x, y, z + 1, explored, region) || checkLeaves(x, y - 1, z, explored, region) || checkLeaves(x, y + 1, z, explored, region);
    }
    function updateLeaves(x, y, z, region) {
        for (let xx = x - 1; xx <= x + 1; xx++) {
            for (let yy = y - 1; yy <= y + 1; yy++) {
                for (let zz = z - 1; zz <= z + 1; zz++) {
                    let block = region.getBlock(xx, yy, zz);
                    if (block.id == BlockID["leaves_" + nameId] && block.data == 0) {
                        region.setBlock(xx, yy, zz, BlockID["leaves_" + nameId], 1);
                    }
                }
            }
        }
    }
    Block.setRandomTickCallback(BlockID["leaves_" + nameId], function (x, y, z, id, data, region) {
        if (data == 1) {
            let explored = {};
            explored[x + ":" + y + ":" + z] = true;
            for (let i = 0; i < 4; i++) {
                let checkingLeaves = explored;
                explored = {};
                for (let coords in checkingLeaves) {
                    let c = coords.split(":");
                    if (checkLeavesFor6Sides(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), explored, region)) {
                        region.setBlock(x, y, z, BlockID["leaves_" + nameId], 0);
                        return;
                    }
                }
            }
            region.setBlock(x, y, z, 0);
            updateLeaves(x, y, z, region);
            let dropFunc = Block.dropFunctions[id];
            let drop = dropFunc(null, id, data, 0, {}, {}, region);
            for (let i in drop) {
                region.spawnDroppedItem(x, y, z, drop[i][0], drop[i][1], drop[i][2]);
            }
        }
    });
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        updateLeaves(coords.x, coords.y, coords.z, BlockSource.getDefaultForActor(player));
    });
    TextureWorker.paintTextureModDir({bitmap: TextureWorker.TEXTURE_STANDART, src: {path: "res/raw-textures/", name: "ore_leaves"}, color: color, result: {path: "res/terrain-atlas/", name: "leaves_" + nameId + "_0"}});
    TextureWorker.paintTextureModDir({bitmap: TextureWorker.TEXTURE_STANDART, src: {path: "res/raw-textures/", name: "ore_leaves_opaque"}, color: color, result: {path: "res/terrain-atlas/", name: "leaves_" + nameId + "_opaque_0"}});
    let icRender = new ICRender.Model();
    let baseModel = new BlockRenderer.Model();
    baseModel.addBlock(BlockID["leaves_" + nameId], 3);
    let baseModel2 = new BlockRenderer.Model();
    baseModel2.addBlock(BlockID["leaves_" + nameId], 0);
    let entry = icRender.addEntry(baseModel);
    let entry2 = icRender.addEntry(baseModel2);
    let group = ICRender.getUnnamedGroup();
    group.add(BlockID["leaves_" + nameId], -1);
    let top = new ICRender.BLOCK(0, 1, 0, group, false);
    let bottom = new ICRender.BLOCK(0, -1, 0, group, false);
    let right = new ICRender.BLOCK(1, 0, 0, group, false);
    let left = new ICRender.BLOCK(-1, 0, 0, group, false);
    let back = new ICRender.BLOCK(0, 0, 1, group, false);
    let front = new ICRender.BLOCK(0, 0, -1, group, false);
    let fullCondition = new ICRender.AND(top, left, bottom, right, front, back);
    entry.setCondition(fullCondition);
    entry2.setCondition(new ICRender.NOT(fullCondition));
    BlockRenderer.setStaticICRender(BlockID["leaves_" + nameId], -1, icRender);
    IDRegistry.genItemID("resin_" + nameId);
    Item.createItem("resin_" + nameId, "resin_" + nameId, {name: "resin_" + nameId, data: 0});
    if (translations.resin) {
        Translation.addTranslation("resin_" + nameId, translations.resin);
    }
    TextureWorker.paintTextureModDir({bitmap: TextureWorker.TEXTURE_STANDART, src: {path: "res/raw-textures/", name: "ore_resin"}, color: color, result: {path: "res/items-opaque/", name: "resin_" + nameId + "_0"}});
    IDRegistry.genItemID("acorn_" + nameId);
    Item.createFoodItem("acorn_" + nameId, "acorn_" + nameId, {name: "acorn_" + nameId, data: 0}, {food: 1});
    if (translations.acorn) {
        Translation.addTranslation("acorn_" + nameId, translations.acorn);
    }
    TextureWorker.paintTextureModDir({bitmap: TextureWorker.TEXTURE_STANDART, src: {path: "res/raw-textures/", name: "ore_acorn"}, color: color, result: {path: "res/items-opaque/", name: "acorn_" + nameId + "_0"}});
    IDRegistry.genItemID("acorn_roasted_" + nameId);
    Item.createFoodItem("acorn_roasted_" + nameId, "acorn_roasted_" + nameId, {name: "acorn_roasted_" + nameId, data: 0}, {food: 2});
    if (translations.acornRoasted) {
        Translation.addTranslation("acorn_roasted_" + nameId, translations.acornRoasted);
    }
    TextureWorker.paintTextureModDir({bitmap: TextureWorker.TEXTURE_STANDART, src: {path: "res/raw-textures/", name: "ore_acorn_roasted"}, color: color, result: {path: "res/items-opaque/", name: "acorn_roasted_" + nameId + "_0"}});
    if (amberResult) {
        Recipes.addFurnace(ItemID["acorn_" + nameId], 0, ItemID["acorn_roasted_" + nameId], 0);
        IDRegistry.genBlockID("amber_" + nameId);
        Block.createBlock("amber_" + nameId, [{name: "amber_" + nameId, texture: [["amber_" + nameId, 0]], inCreative: true}], "snow");
        if (translations.amber) {
            Translation.addTranslation("amber_" + nameId, translations.amber);
        }
        TextureWorker.paintTextureModDir({bitmap: TextureWorker.TEXTURE_STANDART, src: {path: "res/raw-textures/", name: "ore_amber"}, color: color, result: {path: "res/terrain-atlas/", name: "amber_" + nameId + "_0"}});
        Recipes.addShaped({id: BlockID["amber_" + nameId], count: 1, data: 0}, ["bbb", "bbb", "bbb"], ["b", ItemID["resin_" + nameId], 0]);
        Recipes.addFurnace(BlockID["amber_" + nameId], 0, amberResult.id, amberResult.data);
    }
    if (genParams) {
        Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, rand, dimension) {
            if (!ISLAND_SPAWNING) {
                return;
            }
            if (genParams.dimension != -1 && genParams.dimension != dimension) {
                return;
            }
            if (rand.nextInt(Math.floor(ISLAND_CHANCE / genParams.weight)) != 0) {
                return false;
            } else {
                let region = BlockSource.getCurrentWorldGenRegion();
                let coords = GenerationUtils.randomCoords(chunkX, chunkZ, genParams.minHeight, genParams.maxHeight);
                let radius = rand.nextInt(ISLAND_MAX_RADIUS + 1 - ISLAND_MIN_RADIUS) + ISLAND_MIN_RADIUS;
                if (!checkArea(region, coords, radius, 5)) {
                    return;
                }
                that.generateTree(coords.x, coords.y + 1, coords.z, region);
                for (let y = 0; y < radius + 2; ++y) {
                    --radius;
                    for (let x = -radius; x <= radius; ++x) {
                        for (let z = -radius; z <= radius; ++z) {
                            let dSq = x * x + z * z;
                            if (Math.round(Math.sqrt(dSq)) <= radius) {
                                if (y == 0) {
                                    region.setBlock(coords.x + x, coords.y, coords.z + z, genParams.topBlock);
                                } else {
                                    region.setBlock(coords.x + x, coords.y - y, coords.z + z, genParams.fillerBlock);
                                }
                            }
                        }
                    }
                }
            }
        });
    }
    ModAPI.addAPICallback("bonsaiTrees", function (api) {
        with (api) {
            let _sapling = new IdData(ItemID["sapling_" + nameId]);
            registerSapling(_sapling);
            new TreeLootTable(_sapling).addItem(new IdData(ItemID["resin_" + nameId]), 0.3, 3).addItem(new IdData(ItemID["acorn_" + nameId]), 0.1, 4).addItem(new IdData(ItemID["sapling_" + nameId]), 0.15).addItem(new IdData(VanillaBlockID.log), 0.5, 3).addItem(new IdData(VanillaItemID.stick), 0.2, 4).addItem(new IdData(BlockID["leaves_" + nameId], 0), 0.3, 2, true).end();
            let scheme = new TreeScheme(_sapling);
            scheme.getBlockId = function () {
                return 0;
            };
            generateCustomTree(scheme, 0, 0, 0, {log: {id: new IdData(BlockID["log_" + nameId])}, leaves: {id: new IdData(BlockID["leaves2_" + nameId])}, height: {min: 5, max: 6}, radius: 2});
            scheme.end();
            new TreeMesh(_sapling).initFromScheme(scheme.scheme).end();
        }
    });
    return this;
}
function genParamsFromPattern(pattern) {
    let arr = pattern.split("#");
    if (arr.length != 5) {
        alert("Pattern parse error");
        return;
    }
    let obj = {};
    obj.dimension = Number(arr[0]);
    let heights = arr[2].split(",");
    obj.minHeight = Number(heights[0]);
    obj.maxHeight = Number(heights[1]);
    obj.weight = Number(arr[3]);
    let blocks = arr[4].split(",");
    obj.topBlock = new BlockState(eval(blocks[0]), Number(blocks[1]));
    obj.fillerBlock = new BlockState(eval(blocks[2]), Number(blocks[3]));
    return obj;
}
function registerTreeFromPattern(pattern, genPattern, translations) {
    genPattern = genPattern || "";
    let genParams = genParamsFromPattern(genPattern);
    let extraDrops = [];
    let arr = pattern.split(",");
    let drop = arr[1].split("#");
    let amberResult;
    let amberResultArr = arr[5] ? arr[5].split("#") : null;
    if (amberResultArr) {
        amberResult = {id: eval(amberResultArr[0]), data: Number(amberResultArr[1] || 0)};
    }
    if (arr[1] != null) {
        extraDrops.push({id: eval(drop[0]), count: Number(drop[1]), data: Number(drop[2]), chance: Number(drop[3])});
    }
    new OreTree(arr[0], [Number(arr[2]), Number(arr[3]), Number(arr[4])], translations || {}, genParams, extraDrops, amberResult);
}
registerTreeFromPattern("coal,VanillaItemID.coal#1#0#4,57,62,70,VanillaItemID.coal#0", "0#coal#20,240#10#VanillaBlockID.grass,0,VanillaBlockID.dirt,0", {sapling: {ru: "\u0423\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0421\u0430\u0436\u0435\u043d\u0435\u0446", en: "Coal Sapling"}, log: {ru: "\u0423\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u0414\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430", en: "Coal Log"}, leaves: {ru: "\u0423\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u041b\u0438\u0441\u0442\u0432\u0430", en: "Coal Leaves"}, resin: {ru: "\u0423\u0433\u043e\u043b\u044c\u043d\u0430\u044f \u0421\u043c\u043e\u043b\u0430", en: "Coal Resin"}, acorn: {ru: "\u0423\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Coal Acorn"}, acornRoasted: {ru: "\u041f\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u0423\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Roasted Coal Acorn"}, amber: {ru: "\u0423\u0433\u043e\u043b\u044c\u043d\u044b\u0439 \u042f\u043d\u0442\u0430\u0440\u044c", en: "Coal Amber"}});
registerTreeFromPattern("iron,null,188,153,128,VanillaItemID.iron_ingot", "0#iron#20,200#7#VanillaBlockID.grass,0,VanillaBlockID.dirt,0", {sapling: {ru: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0421\u0430\u0436\u0435\u043d\u0435\u0446", en: "Iron Sapling"}, log: {ru: "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u0414\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430", en: "Iron Log"}, leaves: {ru: "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u041b\u0438\u0441\u0442\u0432\u0430", en: "Iron Leaves"}, resin: {ru: "\u0416\u0435\u043b\u0435\u0437\u043d\u0430\u044f \u0421\u043c\u043e\u043b\u0430", en: "Iron Resin"}, acorn: {ru: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Iron Acorn"}, acornRoasted: {ru: "\u041f\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Roasted Iron Acorn"}, amber: {ru: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u042f\u043d\u0442\u0430\u0440\u044c", en: "Iron Amber"}});
registerTreeFromPattern("gold,null,252,238,75,VanillaItemID.gold_ingot", "-1#gold#20,150#5#VanillaBlockID.blackstone,0,VanillaBlockID.blackstone,0", {sapling: {ru: "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0421\u0430\u0436\u0435\u043d\u0435\u0446", en: "Gold Sapling"}, log: {ru: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u0414\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430", en: "Gold Log"}, leaves: {ru: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u041b\u0438\u0441\u0442\u0432\u0430", en: "Gold Leaves"}, resin: {ru: "\u0417\u043e\u043b\u043e\u0442\u0430\u044f \u0421\u043c\u043e\u043b\u0430", en: "Gold Resin"}, acorn: {ru: "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Gold Acorn"}, acornRoasted: {ru: "\u041f\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Roasted Gold Acorn"}, amber: {ru: "\u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u042f\u043d\u0442\u0430\u0440\u044c", en: "Gold Amber"}});
registerTreeFromPattern("lapis,VanillaItemID.lapis_lazuli#3#0#3,28,87,198,VanillaBlockID.lapis_block", "0#lapis#20,200#4#VanillaBlockID.grass,0,VanillaBlockID.dirt,0", {sapling: {ru: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u0421\u0430\u0436\u0435\u043d\u0435\u0446", en: "Lapis Sapling"}, log: {ru: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u0414\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430", en: "Lapis Log"}, leaves: {ru: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u041b\u0438\u0441\u0442\u0432\u0430", en: "Lapis Leaves"}, resin: {ru: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u0430\u044f \u0421\u043c\u043e\u043b\u0430", en: "Lapis Resin"}, acorn: {ru: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Lapis Acorn"}, acornRoasted: {ru: "\u041f\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Roasted Lapis Acorn"}, amber: {ru: "\u041b\u0430\u0437\u0443\u0440\u0438\u0442\u043e\u0432\u044b\u0439 \u042f\u043d\u0442\u0430\u0440\u044c", en: "Lapis Amber"}});
registerTreeFromPattern("redstone,VanillaItemID.redstone#3#0#3,151,3,3,VanillaBlockID.redstone_block", "-1#redstone#20,150#8#VanillaBlockID.soul_sand,0, VanillaBlockID.netherrack,0", {sapling: {ru: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u044b\u0439 \u0421\u0430\u0436\u0435\u043d\u0435\u0446", en: "Redstone Sapling"}, log: {ru: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u0430\u044f \u0414\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430", en: "Redstone Log"}, leaves: {ru: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u0430\u044f \u041b\u0438\u0441\u0442\u0432\u0430", en: "Redstone Leaves"}, resin: {ru: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u0430\u044f \u0421\u043c\u043e\u043b\u0430", en: "Redstone Resin"}, acorn: {ru: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Redstone Acorn"}, acornRoasted: {ru: "\u041f\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Roasted Redstone Acorn"}, amber: {ru: "\u0420\u0435\u0434\u0441\u0442\u043e\u0443\u043d\u043e\u0432\u044b\u0439 \u042f\u043d\u0442\u0430\u0440\u044c", en: "Redstone Amber"}});
registerTreeFromPattern("diamond,null,119,206,251,VanillaItemID.diamond", "0#diamond#20,200#2#VanillaBlockID.grass,0,VanillaBlockID.dirt,0", {sapling: {ru: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0439 \u0421\u0430\u0436\u0435\u043d\u0435\u0446", en: "Diamond Sapling"}, log: {ru: "\u0410\u043b\u043c\u0430\u0437\u043d\u0430\u044f \u0414\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430", en: "Diamond Log"}, leaves: {ru: "\u0410\u043b\u043c\u0430\u0437\u043d\u0430\u044f \u041b\u0438\u0441\u0442\u0432\u0430", en: "Diamond Leaves"}, resin: {ru: "\u0410\u043b\u043c\u0430\u0437\u043d\u0430\u044f \u0421\u043c\u043e\u043b\u0430", en: "Diamond Resin"}, acorn: {ru: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Diamond Acorn"}, acornRoasted: {ru: "\u041f\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Roasted Diamond Acorn"}, amber: {ru: "\u0410\u043b\u043c\u0430\u0437\u043d\u044b\u0439 \u042f\u043d\u0442\u0430\u0440\u044c", en: "Diamond Amber"}});
registerTreeFromPattern("emerald,null,64,255,132,VanillaItemID.emerald", "0#emerald#20,200#1#VanillaBlockID.grass,0,VanillaBlockID.dirt,0", {sapling: {ru: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u044b\u0439 \u0421\u0430\u0436\u0435\u043d\u0435\u0446", en: "Emerald Sapling"}, log: {ru: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u0430\u044f \u0414\u0440\u0435\u0432\u0435\u0441\u0438\u043d\u0430", en: "Emerald Log"}, leaves: {ru: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u0430\u044f \u041b\u0438\u0441\u0442\u0432\u0430", en: "Emerald Leaves"}, resin: {ru: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u0430\u044f \u0421\u043c\u043e\u043b\u0430", en: "Emerald Resin"}, acorn: {ru: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Emerald Acorn"}, acornRoasted: {ru: "\u041f\u0435\u0447\u0435\u043d\u043d\u044b\u0439 \u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u044b\u0439 \u0416\u0451\u043b\u0443\u0434\u044c", en: "Roasted Emerald Acorn"}, amber: {ru: "\u0418\u0437\u0443\u043c\u0440\u0443\u0434\u043d\u044b\u0439 \u042f\u043d\u0442\u0430\u0440\u044c", en: "Emerald Amber"}});
ModAPI.registerAPI("OreTrees", {OreTree: OreTree, genParamsFromPattern: genParamsFromPattern, registerTreeFromPattern: registerTreeFromPattern, requireGlobal: function (command) {
    return eval(command);
}});

