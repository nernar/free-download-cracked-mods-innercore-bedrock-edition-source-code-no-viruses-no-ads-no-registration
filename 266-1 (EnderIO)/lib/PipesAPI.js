LIBRARY({name: "PipesAPI", version: 1.2, shared: true, api: "CoreEngine", dependencies: []});
var NO_SAVE = Saver.registerObjectSaver("nosave", {save: function () {
    return null;
}, read: function () {
    return null;
}});
var round = function (num, x) {
    var multiplier = Math.pow(10, x);
    return Math.floor(num * multiplier) / multiplier;
};
let dir = [{x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}];
let PAPI = {pipes: [], extractors: [], groups: [], worldPipes: [], worldExtractors: [], textures: [], getLiquidTexture: function (unique) {
    return this.textures[unique];
}, changePipeStorage: function (mB, p) {
    p.liquid.storage += mB;
    p.liquid.storage = round(p.liquid.storage, 3);
    this.mappingFunc(p);
}, mappingFunc: function (p, a) {
    if (!a && p.mapping && World.getThreadTime() % 2 == 0) {
        let render = PipeRenderPool.getRender({id: p.id, groups: p.groups, mapping: p.mapping, width: p.width, liquid: p.liquid.type, size: p.liquid.storage / p.liquid.limit});
        BlockRenderer.mapAtCoords(p.x, p.y, p.z, render);
    } else {
        if (a && p.mapping) {
            let render = PipeRenderPool.getRender({id: p.id, groups: p.groups, mapping: p.mapping, width: p.width, liquid: p.liquid.type, size: p.liquid.storage / p.liquid.limit});
            BlockRenderer.mapAtCoords(p.x, p.y, p.z, render);
        }
    }
}, deletePipe: function (p) {
    if (p.liquid.storage == 0 || World.getBlockID(p.x, p.y, p.z) != p.id) {
        PAPI.worldPipes[p.coordsKey] = false;
        BlockRenderer.unmapAtCoords(p.x, p.y, p.z);
        p.destroy();
    }
}, setupPipeRender: function (id, width, groupName, preventSelfAdd) {
    let render = new ICRender.Model();
    let models = {conditions: []};
    BlockRenderer.enableCoordMapping(id, -1, render);
    let boxes = [{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]}, {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}, {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}];
    for (let i in groupName) {
        this.groups.push(groupName[i]);
        let group = ICRender.getGroup(groupName[i]);
        if (!preventSelfAdd) {
            group.add(id, -1);
        }
    }
    for (let i in boxes) {
        let box = boxes[i];
        let model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
        models.conditions.push(model);
        for (let i in groupName) {
            render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], groupName[i], 0);
        }
    }
    let model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    models.model = model;
    render.addEntry(model);
    if (this.pipes[id].visual) {
        this.pipes[id].model = models;
    }
    Block.setBlockShape(id, {x: 0.5 - width / 2, y: 0.5 - width / 2, z: 0.5 - width / 2}, {x: 0.5 + width / 2, y: 0.5 + width / 2, z: 0.5 + width / 2});
}, registerPipe: function (id, mB, width, groups, isVisual, allowedLiquids, setRender, limit) {
    setRender = setRender || true;
    this.pipes[id] = {id: id, mB: mB || 0.1, groups: groups || ["liquid-pipe"], visual: isVisual || false, allowed: allowedLiquids || -1, width: Math.min(width, 0.99) || 0.3, limit: limit || mB};
    if (setRender) {
        this.setupPipeRender(id, Math.min(width, 0.99) || 0.3, groups || ["liquid-pipe"]);
    }
}, registerExtractor: function (id, mB, f) {
    for (let keys in this.groups) {
        let g = this.groups[keys];
        ICRender.getGroup(g).add(id, -1);
    }
    this.extractors[id] = true;
    if (!f) {
        f = {};
    }
    !f.defaultValues ? f.defaultValues = {} : null;
    f.defaultValues.pipesAround = [];
    f.defaultValues.tilesAround = [];
    f.defaultValues.liquid = null;
    f._click = f.click || function () {
        return;
    };
    f.click = function () {
        this._click();
    };
    f._created = f.created || function () {
        return;
    };
    f.created = function () {
        this._created();
        PAPI.worldExtractors[this.x + ":" + this.y + ":" + this.z] = true;
    };
    f._tick = f.tick || function () {
        return;
    };
    f.tick = function () {
        this._tick();
        if (this.data.tilesAround.length > 0) {
            for (var i in this.data.tilesAround) {
                let tile = this.data.tilesAround[i];
                this.data.liquid = tile.liquidStorage.getLiquidStored();
                if (this.data.pipesAround.length > 0 && tile.liquidStorage.getAmount(this.data.liquid) > 0 && (tile.isCanExtract || (!tile.isCanFill && !tile.isCanExtract))) {
                    for (let keys = 0; keys < this.data.pipesAround.length; keys++) {
                        let p = this.data.pipesAround[keys];
                        if (p) {
                            let mB1 = Math.min(mB / 20 / this.data.tilesAround.length / this.data.pipesAround.length, Math.min(tile.liquidStorage.getAmount(this.data.liquid), p.liquid.limit - p.liquid.storage));
                            if (mB1 > 0) {
                                PAPI.changePipeStorage(mB1, p);
                                tile.liquidStorage.addLiquid(this.data.liquid, -mB1);
                            }
                        }
                    }
                }
            }
        }
        if (World.getThreadTime() % 30 == 0) {
            this.data.tilesAround = PAPI.foundNotEmptyTilesAround(this.x, this.y, this.z, this.data.liquid);
            if (this.data.tilesAround.length > 0 && this.data.liquid != null) {
                this.data.pipesAround = PAPI.foundPipesAround(this.x, this.y, this.z, this.data.liquid, PAPI.groups, true);
            }
        }
    };
    f._destroy = f.destroy || function () {
        return;
    };
    f.destroy = function () {
        this._destroy();
        PAPI.worldExtractors[this.x + ":" + this.y + ":" + this.z] = false;
    };
    return f;
}, foundPipesAround: function (x, y, z, liquid, groups, checkSelf) {
    let pipes = [];
    if (checkSelf) {
        let wp = this.worldPipes[x + ":" + y + ":" + z];
        let p = this.pipes[World.getBlockID(x, y, z)];
        if (!wp && p && this.checkGroups(groups, p.groups) && (p.allowed[liquid] || p.allowed == -1)) {
            pipes.push(Pipe.deploy(p, {x: x, y: y, z: z}, liquid));
            return pipes;
        } else {
            if (wp && wp.liquid.type == liquid && this.checkGroups(groups, wp.groups)) {
                pipes.push(wp);
            }
        }
        return pipes;
    }
    let cx = x;
    let cy = y;
    let cz = z;
    for (let i in dir) {
        let d = dir[i];
        x = cx + d.x;
        y = cy + d.y;
        z = cz + d.z;
        let wp = this.worldPipes[x + ":" + y + ":" + z];
        let p = this.pipes[World.getBlockID(x, y, z)];
        if (!wp && p && this.checkGroups(groups, p.groups) && (p.allowed[liquid] || p.allowed == -1)) {
            pipes.push(Pipe.deploy(p, {x: x, y: y, z: z}, liquid));
        } else {
            if (wp && wp.liquid.type == liquid && this.checkGroups(groups, wp.groups)) {
                pipes.push(wp);
            }
        }
    }
    return pipes;
}, foundNotEmptyTilesAround: function (x, y, z, liquid) {
    let tiles = [];
    for (let i in dir) {
        let tile = World.getTileEntity(x + dir[i].x, y + dir[i].y, z + dir[i].z);
        if (tile != null && !this.worldExtractors[tile.x + ":" + tile.y + ":" + tile.z] && tile.liquidStorage.getAmount(tile.liquidStorage.getLiquidStored()) > 0 && (liquid == null || liquid == tile.liquidStorage.getLiquidStored())) {
            tiles.push(tile);
        }
    }
    return tiles;
}, foundNotFullTilesAround: function (x, y, z, liquid) {
    let tiles = [];
    if (!this.worldExtractors[x + ":" + y + ":" + z]) {
        for (let i in dir) {
            let tile = World.getTileEntity(x + dir[i].x, y + dir[i].y, z + dir[i].z);
            if (tile != null && tile.liquidStorage.getAmount(liquid) < tile.liquidStorage.getLimit(liquid) && liquid == tile.liquidStorage.getLiquidStored()) {
                tiles.push(tile);
            }
        }
    } else {
        return [];
    }
    return tiles;
}, checkGroups: function (g1, g2) {
    for (let a in g1) {
        for (let b in g2) {
            if (g1[a] == g1[b]) {
                return true;
            }
        }
    }
    return false;
}, registerLiquidTexture: function (unique, texture) {
    this.textures[unique] = texture;
}};
PAPI.registerLiquidTexture("water", ["fluid_water", 0]);
PAPI.registerLiquidTexture("lava", ["fluid_lava", 0]);
let Pipe = new GameObject("liquid_pipe", {loaded: function () {
}, init: function (obj, coords, liquid, amount) {
    this.id = obj.id;
    this.liveTime = 0;
    this.x = coords.x;
    this.y = coords.y;
    this.z = coords.z;
    this.coordsKey = this.x + ":" + this.y + ":" + this.z;
    this.mB = obj.mB / 20;
    this.groups = obj.groups;
    this.liquid = {storage: 0, limit: obj.limit, type: liquid};
    if (obj.visual) {
        this.mapping = {width: obj.width};
    }
    this.pipesAround = [];
    this.tilesAround = [];
    PAPI.worldPipes[this.coordsKey] = this;
}, update: function () {
    this.liveTime++;
    if (this.tilesAround.length > 0) {
        for (var i = 0; i < this.tilesAround.length; i++) {
            let tile = this.tilesAround[i];
            if (tile != null && (tile.isCanFill || (!tile.isCanFill && !tile.isCanExtract))) {
                let mB = Math.min(this.mB / this.tilesAround.length, Math.min(this.liquid.storage, tile.liquidStorage.getLimit(this.liquid.type) - tile.liquidStorage.getAmount(this.liquid.type)));
                if (mB > 0) {
                    PAPI.changePipeStorage(-mB, this);
                    tile.liquidStorage.addLiquid(this.liquid.type, mB);
                }
            }
        }
    }
    if (this.pipesAround.length > 0) {
        for (let i = 0; i < this.pipesAround.length; i++) {
            let p = this.pipesAround[i];
            if (p) {
                let mB = Math.min(this.mB / this.pipesAround.length, Math.min(p.liquid.limit - p.liquid.storage, Math.min(this.liquid.storage, this.liquid.storage - p.liquid.storage)));
                this.mB1 = mB;
                if (mB > 0) {
                    PAPI.changePipeStorage(-mB, this);
                    PAPI.changePipeStorage(mB, p);
                }
            }
        }
    }
    if (this.liveTime % 20 == 0 && this.liquid.storage > 0) {
        this.pipesAround = PAPI.foundPipesAround(this.x, this.y, this.z, this.liquid.type, this.groups);
        this.tilesAround = PAPI.foundNotFullTilesAround(this.x, this.y, this.z, this.liquid.type);
    }
    if (this.liveTime >= 100) {
        PAPI.deletePipe(this);
    }
}, getLiquidTexture: function (unique) {
    return PAPI.textures[unique];
}});
let PipeRenderPool = {cache: {}, getRender: function (pipe) {
    let key = pipe.id + "$" + pipe.liquid + "$" + pipe.size;
    let render = this.cache[key];
    if (render) {
        return render;
    } else {
        render = this.createPipeRender(pipe);
        this.cache[key] = render;
        return render;
    }
}, createPipeRender: function (pipe) {
    let size = pipe.size;
    let render = new ICRender.Model();
    let width = pipe.mapping.width * 0.7;
    let texture = PAPI.getLiquidTexture(pipe.liquid);
    let side = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
    for (let i = 0; i < side.length; i++) {
        let m = PAPI.pipes[pipe.id].model.conditions[i];
        for (let k in pipe.groups) {
            render.addEntry(m).asCondition(side[i][0], side[i][1], side[i][2], pipe.groups[k], 0);
        }
    }
    render.addEntry(PAPI.pipes[pipe.id].model.model);
    let boxes = [{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, (Math.max(0.5 / 3, 0.5 * size) + width / 2), 0.5 + width / 2]}, {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, (Math.max(0.5 / 3, 0.5 * size) + width / 2), 0.5 + width / 2]}, {side: [0, 1, 0], box: [(0.5 - width * size / 2), (0.5 + width * size / 2), (0.5 - width * size / 2), (0.5 + width * size / 2), 1, (0.5 + width * size / 2)]}, {side: [0, -1, 0], box: [(0.5 - width * size / 2), 0, (0.5 - width * size / 2), (0.5 + width * size / 2), (0.5 - width * size / 2), (0.5 + width * size / 2)]}, {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, (Math.max(0.5 / 3, 0.5 * size) + width / 2), 1]}, {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, (Math.max(0.5 / 3, 0.5 * size) + width / 2), 0.5 - width / 2]}];
    for (let i in boxes) {
        let box = boxes[i];
        let model = BlockRenderer.createModel();
        if (texture) {
            model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], texture[0] || 1, texture[1] || 0);
        } else {
            model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], 1, 0);
        }
        for (let i in pipe.groups) {
            render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], pipe.groups[i], 0);
        }
    }
    let model = BlockRenderer.createModel();
    if (size) {
        if (texture) {
            model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, Math.max(0.5 / 3, 0.5 * size) + width / 2, 0.5 + width / 2, texture[0] || 1, texture[1] || 0);
        } else {
            model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, Math.max(0.5 / 3, 0.5 * size) + width / 2, 0.5 + width / 2, 1, 0);
        }
    }
    render.addEntry(model);
    return render;
}};
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (PAPI.worldPipes[coords.x + ":" + coords.y + ":" + coords.z]) {
        p = PAPI.worldPipes[coords.x + ":" + coords.y + ":" + coords.z];
    }
});
Callback.addCallback("DestroyBlockStart", function (coords, block) {
    BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
});
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName == "pause_screen") {
        for (var k in PAPI.worldPipes) {
            p = PAPI.worldPipes[k];
            BlockRenderer.unmapAtCoords(p.x, p.y, p.z);
        }
    } else {
        if (screenName == "hud_screen") {
            for (var k in PAPI.worldPipes) {
                p = PAPI.worldPipes[k];
                PAPI.mappingFunc(p, true);
            }
        }
    }
});
EXPORT("PAPI", PAPI);

