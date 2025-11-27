const DERenderer = {loaded: {}, rendered: {}, translated: {}};
DERenderer.load = function (name) {
    name.endsWith(".der") && (name = name.replace(".der", ""));
    var file = new java.io.File(__dir__ + "models", name + ".der");
    if (!file.exists()) {
        return log("DERenderer", "Cannot find: " + name);
    }
    var loaded = Encyption.decrypt(Files.readBytes(file));
    eval("this.loaded[name] = " + new java.lang.String(loaded));
};
DERenderer.compile = function (name) {
    name.endsWith(".json") && (name = name.replace(".json", ""));
    var file = new java.io.File(__dir__ + "models/array", name + ".json"), source = new java.io.File(__dir__ + "models", name + ".der");
    if (!file.exists()) {
        return log("DERenderer", "Cannot find: " + name);
    }
    Files.writeBytes(source, Encyption.encrypt(Files.readBytes(file)));
};
DERenderer.prepare = function () {
    if (isDevelop && isCreative) {
        var arr = FileTools.GetListOfFiles(__dir__ + "models/array", "json");
        for (var i = 0; i < arr.length; i++) {
            MCSystem.setLoadingTip("Saving DERenderer: " + (i + 1) + "/" + arr.length);
            Files.deleteFile(__dir__ + "models/" + arr[i].getName().replace(".json", ".der"));
            this.compile(arr[i].getName());
        }
    }
    var list = FileTools.GetListOfFiles(__dir__ + "models", "der");
    for (var i = 0; i < list.length; i++) {
        MCSystem.setLoadingTip("Loading DERenderer: " + (i + 1) + "/" + list.length);
        this.load(list[i].getName());
    }
};
DERenderer.buildParts = function (x, y, z, name, variation) {
    typeof y == "object" && (name = x, variation = z, x = y.x, y = y.y, z = z.z);
    variation + "" == "undefined" && (variation = 0);
    if (!this.rendered[name]) {
        return log("DERenderer", "Not rendered " + name);
    }
    var rendered = this.rendered[name][variation];
    if (!rendered) {
        return log("DERenderer", "No variation: " + name + ", " + variation);
    }
    var renderer = this.loaded[name][variation];
    for (var i = 0; i < renderer.length; i++) {
        var part = renderer[i][0];
        World.setBlock(x + part[0], y + part[1], z + part[2], rendered[i][0], rendered[i][1]);
    }
};
DERenderer.getNextMeta = function (id, name, variation) {
    var rendered = this.rendered[name], current = 0;
    if (!rendered) {
        return log("DERenderer", "Cannot locate: " + name);
    }
    for (var i = 0; i <= variation; i++) {
        if (rendered[i][0] && rendered[i][0][0] == id) {
            current += rendered[i].length;
        }
    }
    return current;
};
DERenderer.addTranslation = function (id, data, params) {
    if (!id) {
        return log("DERenderer", "No base name for " + data);
    }
    var language = Options.getValue("game_language").split("_")[0];
    if (params[language]) {
        typeof data == "undefined" && (data = 0);
        if (!this.translated[id]) {
            this.translated[id] = {};
        }
        this.translated[id][data] = params[language];
    }
};
DERenderer.translate = function (id, data) {
    if (typeof id == "object" && typeof id[0] == "object") {
        var result = [];
        id.forEach(function (e, i) {
            result.push(DERenderer.translate(e));
        });
        return result;
    }
    if (typeof id == "object") {
        id.length > 2 ? (data = id[7], id = id[6]) : (data = id[1], id = id[0]);
    }
    return this.translated[id] && this.translated[id][data] ? this.translated[id][data] : [id, data];
};
DERenderer.setStaticRender = function (id, name, variation) {
    variation + "" == "undefined" && (variation = -1);
    if (id < 0) {
        return log("DERenderer", "Invalid identificator: " + id);
    }
    if (!this.loaded[name]) {
        return log("DERenderer", "Not loaded: " + name);
    }
    if (!this.rendered[name]) {
        this.rendered[name] = [];
    }
    var hasCycle = variation == -1;
    hasCycle && (variation = this.rendered[name].length);
    var renderer = this.loaded[name][variation];
    if (!renderer) {
        return;
    }
    this.rendered[name][variation] = [];
    for (var i = 0; i < renderer.length; i++) {
        var boxes = renderer[i][1], collision = renderer[i][2];
        var meta = this.getNextMeta(id, name, variation);
        var render = new ICRender.Model();
        BlockRenderer.setStaticICRender(id, meta, render);
        var model = BlockRenderer.createModel();
        for (var b = 0; b < boxes.length; b++) {
            var box = boxes[b], translated = this.translate(box[6], box[7]);
            typeof translated[0] == "string" ? (box[6] = translated[0], box[7] = translated[1]) : (box[6] = translated);
            model.addBox.apply(model, box);
        }
        render.addEntry(model);
        if (collision.length > 1) {
            var shape = new ICRender.CollisionShape();
            BlockRenderer.setCustomCollisionShape(id, meta, shape);
            var model = shape.addEntry();
            for (var c = 0; c < collision.length; c++) {
                model.addBox.apply(model, collision[c]);
            }
        } else {
            if (collision.length == 1) {
                var box = collision[0];
                Block.setShape(id, box[0], box[1], box[2], box[3], box[4], box[5], meta);
            }
        }
        this.rendered[name][variation].push([id, meta]);
    }
    if (hasCycle) {
        this.setStaticRender(id, name, -1);
    }
};
DERenderer.setEmptyRender = function (id, meta) {
    meta + "" == "undefined" && (meta = -1);
    if (id < 0) {
        return log("DERenderer", "Invalid identificator: " + id);
    }
    BlockRenderer.setStaticICRender(id, meta, new ICRender.Model());
    BlockRenderer.setCustomCollisionShape(id, meta, new ICRender.CollisionShape());
};

