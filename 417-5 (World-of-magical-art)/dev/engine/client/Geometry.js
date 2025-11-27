var Geometry = {
    geometry_block: {},

    loadBlockGeometry: function (filePath) {
        var jsonSource = FileTools.ReadJSON(filePath);
        if (!(jsonSource && jsonSource.identifier)) {
            return false;
        }
        else {
            var identifier = jsonSource.identifier;
            var extendsObject = jsonSource.extendsObject;
            var customCollision = jsonSource.customCollision;
            var boxes = jsonSource.boxes;
            this.geometry_block[identifier] = { extendsObject: extendsObject, customCollision: customCollision, boxes: boxes };
            return true;
        }
    },
    getBlockGeometry: function (geometryIdentifier) {
        if (!this.geometry_block[geometryIdentifier]) {
            Logger.log("Unknown block geometry: " + geometryIdentifier, "ERROR");
            return null;
        }
        else {
            var result = this.geometry_block[geometryIdentifier];
            var extendsObject = result.extendsObject;
            if (extendsObject) {
                extendsObject = this.getBlockGeometry(extendsObject);
                result.boxes = result.boxes.concat(extendsObject.boxes);
            }
            return result;
        }
    },
    createSimpleStaticBlockRender: function (geometryIdentifier) {
        var geometry = this.getBlockGeometry(geometryIdentifier);
        if (!geometry) {
            return null;
        }
        else {
            var customCollision = geometry.customCollision;
            var boxes = geometry.boxes;
            var visual_render = new ICRender.Model();
            var collision_render = new ICRender.CollisionShape();

            var visual_model = BlockRenderer.createModel();
            visual_render.addEntry(visual_model);
            var collision_model = collision_render.addEntry();

            for (let i in boxes) {
                let box = boxes[i];

                let startx = box.position.x / 16;
                let starty = box.position.y / 16;
                let startz = box.position.z / 16;

                let endx = startx + box.size.x / 16;
                let endy = starty + box.size.y / 16;
                let endz = startz + box.size.z / 16;

                let block = box.block ? box.block : box.texture;
                let shape = block.shape;
                let textures = block.textures;

                if (!textures) {
                    visual_model.addBox(startx, starty, startz, endx, endy, endz, block.identifier || "stone", block.data || 0);
                }
                else {
                    visual_model.addBox(startx, starty, startz, endx, endy, endz, textures);
                }

                if (customCollision && shape) {
                    collision_model.addBox(startx, starty, startz, endx, endy, endz);
                }
            }
            return {
                visualRender: visual_render,
                collisionRender: customCollision ? collision_render : null
            };
        }
    }
};

try {
    let dirs = FileTools.GetListOfDirs(__dir__ + "assets/models/blocks");
    let files = FileTools.GetListOfFiles(__dir__ + "assets/models/blocks", "json");
    for (let i in files) {
        Geometry.loadBlockGeometry(files[i]);
    }
    for (let i in dirs) {
        let files = FileTools.GetListOfFiles(dirs[i], "json");
        for (let i in files) {
            Geometry.loadBlockGeometry(files[i]);
        }
    }
}
catch (exception) {
    alert(excepton);
}