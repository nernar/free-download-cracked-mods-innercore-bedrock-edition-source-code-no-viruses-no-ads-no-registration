const convertModels = function () {
    var path = new java.io.File(__dir__ + "models/joined"), models = path.exists() ? path.listFiles() : [], blocks = {};
    for (var i = 0; i < models.length; i++) {
        if (models[i].isDirectory()) {
            continue;
        }
        MCSystem.setLoadingTip("Converting DERenderer: " + (i + 1) + "/" + models.length);
        var name = models[i].getName().replace(".js", ""), buffer = [], time = Date.now(), lines = Files.read(models[i], true), variation = 0, part = [0, 0, 0];
        if (!blocks[name]) {
            blocks[name] = [];
        }
        for (var l = 0; l < lines.length; l++) {
            var line = lines[l];
            if (line.startsWith("// v")) {
                variation = parseInt(line.replace("// variant: ", ""));
            } else {
                if (line.startsWith("// b")) {
                    part = eval("[" + line.replace("// block ", "") + "]");
                } else {
                    if (line != "") {
                        buffer.push(line);
                    }
                }
            }
            if (line == "" || l == lines.length - 1) {
                var model = {boxes: [], addBox: function () {
                    this.boxes.push(Array.prototype.slice.call(arguments));
                }};
                var shape = {boxes: [], addBox: function () {
                    this.boxes.push(Array.prototype.slice.call(arguments));
                }};
                eval(buffer.join("\n"));
                buffer = [];
                if (blocks[name].length <= variation) {
                    blocks[name].push([]);
                }
                blocks[name][variation].push([part, model.boxes, shape.boxes]);
            }
        }
        var file = new java.io.File(__dir__ + "models/array", name + ".json");
        log("DERenderer", "Converted " + name + " (took " + (Date.now() - time) + " ms)");
        Files.deleteFile(file.getPath());
        Files.write(file, JSON.stringify(blocks[name]));
    }
    DERenderer.loaded = blocks;
};

