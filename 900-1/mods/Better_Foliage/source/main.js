var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
__config__.checkAndRestore({
    leaves: {
        enabled: true,
        rich_model: false,
        density: 3,
        variant_count: 6
    },
    grass: {
        enabled: true,
        density: 2,
        variant_count: 12,
        ignore_top_block: false
    },
    reed: {
        enabled: true,
        density: 2,
        variant_count: 24,
    }
});
var VariantModelGenerator = /** @class */ (function () {
    function VariantModelGenerator() {
    }
    VariantModelGenerator.prototype.getPartCount = function () {
        return 1;
    };
    VariantModelGenerator.prototype.getTextures = function (part) {
        return [["stone", 0]];
    };
    VariantModelGenerator.prototype.getPartCondition = function (part) {
        return null;
    };
    VariantModelGenerator.prototype.getPartVariantCount = function (part, texture) {
        return 1;
    };
    VariantModelGenerator.prototype.applyTexture = function (mesh, texture) {
        mesh.setBlockTexture(texture[0], texture[1]);
    };
    VariantModelGenerator.prototype.buildPartVariant = function (model, mesh, part, texture, variant, random) {
        // implement this
    };
    VariantModelGenerator.prototype.isMultiPartMeshAllowed = function () {
        return true;
    };
    VariantModelGenerator.prototype.makePartCondition = function (part, variant) {
        return null;
    };
    VariantModelGenerator.prototype.getAllPartVariants = function () {
        var allPartVariants = {};
        var partCount = this.getPartCount();
        for (var part = 0; part < partCount; part++) {
            allPartVariants[part] = [];
            var textures = this.getTextures(part);
            for (var i in textures) {
                var texture = textures[i];
                var variantCount = this.getPartVariantCount(part, texture);
                for (var variant = 0; variant < variantCount; variant++) {
                    allPartVariants[part].push([texture, variant]);
                }
            }
        }
        return allPartVariants;
    };
    VariantModelGenerator.prototype.fullyClosedCondition = function (group, invert) {
        var top = new ICRender.BLOCK(0, 1, 0, group, false);
        var bottom = new ICRender.BLOCK(0, -1, 0, group, false);
        var right = new ICRender.BLOCK(1, 0, 0, group, false);
        var left = new ICRender.BLOCK(-1, 0, 0, group, false);
        var back = new ICRender.BLOCK(0, 0, 1, group, false);
        var front = new ICRender.BLOCK(0, 0, -1, group, false);
        var fullCondition = new ICRender.AND(top, left, bottom, right, front, back);
        return invert ? new ICRender.NOT(fullCondition) : fullCondition;
    };
    VariantModelGenerator.prototype.buildAllParts = function (model, condition, totalModelVariants, seed) {
        var allPartVariants = this.getAllPartVariants();
        var maxTotalVariants = 1;
        for (var part in allPartVariants) {
            maxTotalVariants *= allPartVariants[part].length;
        }
        if (totalModelVariants > maxTotalVariants) {
            totalModelVariants = maxTotalVariants;
        }
        if (!seed) {
            seed = 1234;
        }
        // create random and shuffle variants
        var random = new java.util.Random(seed);
        // shuffle each part variants
        for (var n in allPartVariants) {
            var variants = allPartVariants[n];
            for (var i = 0; i < variants.length; i++) {
                var j = random.nextInt(variants.length);
                if (j != i) {
                    var tmp = variants[i];
                    variants[i] = variants[j];
                    variants[j] = tmp;
                }
            }
        }
        var variantsSeed = random.nextInt();
        // build model
        for (var i = 0; i < totalModelVariants; i++) {
            // build condition
            var currentCondition;
            if (i == 0 && totalModelVariants == 1) {
                currentCondition = condition;
            }
            else {
                currentCondition = new ICRender.RANDOM(i, totalModelVariants, variantsSeed);
                if (condition) {
                    currentCondition = new ICRender.AND(currentCondition, condition);
                }
            }
            // build variant set by i
            var variantSet = {};
            var m = 1;
            for (var _part in allPartVariants) {
                var part = parseInt(_part);
                var variants = allPartVariants[_part];
                if (variants.length == 0) {
                    continue;
                }
                variantSet[part] = variants[parseInt(i / m) % variants.length];
                m *= variants.length;
            }
            // group by textures and build
            while (Object.keys(variantSet).length > 0) {
                // find parts with same texture
                var parts = [];
                var texture = null;
                for (var _part in variantSet) {
                    var part = parseInt(_part);
                    var variant = variantSet[_part];
                    if (texture == null || texture == variant[0]) {
                        texture = variant[0];
                        delete variantSet[part];
                        parts.push([part, variant[0], variant[1]]);
                        if (!this.isMultiPartMeshAllowed()) {
                            break;
                        }
                    }
                }
                if (parts.length == 0) {
                    break;
                }
                // create mesh and build
                var mesh = new RenderMesh();
                this.applyTexture(mesh, texture);
                for (var j in parts) {
                    var part = parts[j];
                    this.buildPartVariant(model, mesh, part[0], part[1], part[2], random);
                }
                // build condition if required
                var curCondition = currentCondition;
                if (!this.isMultiPartMeshAllowed()) {
                    var partCondition = this.makePartCondition(parts[0][0], parts[0][2]);
                    if (partCondition) {
                        if (curCondition) {
                            curCondition = new ICRender.AND(curCondition, partCondition);
                        }
                        else {
                            curCondition = partCondition;
                        }
                    }
                }
                // add to mesh
                var entry = model.addEntry(mesh);
                if (curCondition) {
                    entry.setCondition(curCondition);
                }
            }
        }
    };
    return VariantModelGenerator;
}());
// helper methods
function addPolyToMesh(mesh, vertices) {
    if (vertices.length < 3) {
        return;
    }
    function addVertex(v) {
        if (v.length > 5) {
            if (v.length > 8) { // alpha
                mesh.setColor(v[5], v[6], v[7], v[8]);
            }
            else { // no alpha
                mesh.setColor(v[5], v[6], v[7], 1);
            }
        }
        var someRandom = Math.random() / 10;
        mesh.addVertex(v[0] + someRandom, v[1], v[2] + someRandom, v[3], v[4]);
    }
    var v0 = vertices[0];
    for (var i = 1; i < vertices.length - 1; i++) {
        var v1 = vertices[i];
        var v2 = vertices[i + 1];
        addVertex(v0);
        addVertex(v1);
        addVertex(v2);
    }
}
function addTwoSidedPolyToMesh(mesh, vertices) {
    addPolyToMesh(mesh, vertices);
    addPolyToMesh(mesh, vertices.reverse());
}
var config_grass_variant_count = Math.max(1, Math.min(24, __config__.getInteger("reed.variant_count") || 12));
var config_grass_density = Math.max(1, Math.min(3, __config__.getInteger("grass.density") || 2));
var GrassModel = /** @class */ (function (_super) {
    __extends(GrassModel, _super);
    function GrassModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GrassModel.prototype.getPartCount = function () {
        return 1;
    };
    GrassModel.prototype.getTextures = function (part) {
        return [
            ["better_grass_short", 0],
            ["better_grass_short", 1],
            ["better_grass_short", 2],
            ["better_grass_long", 0],
            ["better_grass_long", 1],
            ["better_grass_long", 2],
            ["better_grass_long", 3],
            ["better_grass_long", 4],
            // ["stone", 0],
        ];
    };
    GrassModel.prototype.getPartVariantCount = function (part, texture) {
        return 6;
    };
    GrassModel.prototype.buildPartVariant = function (model, mesh, part, texture, variant, random) {
        mesh.setNormal(0, -1, 0);
        mesh.setLightPos(0, 1, 0);
        mesh.setGrassTinted();
        var s = Math.sqrt(2) / ((variant % 2) * 0.5 + 3);
        var h = 0.5;
        switch (part) {
            case 0:
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 - s, 1, 0.5 - s, 0, 1],
                    [0.5 - s, 1 + h * 2 * s, 0.5 - s, 0, 1 - h],
                    [0.5 + s, 1 + h * 2 * s, 0.5 + s, 1, 1 - h],
                    [0.5 + s, 1, 0.5 + s, 1, 1]
                ]);
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 - s, 1, 0.5 + s, 0, 1],
                    [0.5 - s, 1 + h * 2 * s, 0.5 + s, 0, 1 - h],
                    [0.5 + s, 1 + h * 2 * s, 0.5 - s, 1, 1 - h],
                    [0.5 + s, 1, 0.5 - s, 1, 1]
                ]);
                break;
        }
        mesh.rotate(0.5, 0.5, 0.5, 0, variant * 0.2 + 0.1, 0);
    };
    GrassModel.prototype.mapGrassModel = function (id, data, variantCount, oldModel) {
        if (!__config__.getBool("grass.enabled")) {
            return;
        }
        var icRender;
        if (oldModel) {
            icRender = oldModel;
        }
        else {
            icRender = new ICRender.Model();
            var baseModel = new BlockRenderer.Model();
            baseModel.addBlock(id, data != -1 ? data : 0);
            icRender.addEntry(baseModel);
        }
        ItemModel.getFor(id, data != -1 ? data : 0).occupy();
        BlockRenderer.setStaticICRender(id, data, icRender, 1273);
        var condition = new ICRender.NOT(new ICRender.RANDOM(1, 2 + config_grass_density));
        if (!__config__.getBool("grass.ignore_top_block")) {
            var airGroup = ICRender.getUnnamedGroup();
            // allow alot of blocks, that go well with grass
            airGroup.add(0, 0);
            airGroup.add(6, -1);
            airGroup.add(31, -1);
            airGroup.add(32, -1);
            airGroup.add(37, -1);
            airGroup.add(38, -1);
            airGroup.add(39, -1);
            airGroup.add(40, -1);
            airGroup.add(50, -1);
            airGroup.add(63, -1);
            airGroup.add(68, -1);
            airGroup.add(75, -1);
            airGroup.add(76, -1);
            airGroup.add(83, -1);
            airGroup.add(85, -1);
            airGroup.add(106, -1);
            airGroup.add(107, -1);
            airGroup.add(175, -1);
            airGroup.add(183, -1);
            airGroup.add(184, -1);
            airGroup.add(185, -1);
            airGroup.add(186, -1);
            airGroup.add(187, -1);
            condition = new ICRender.AND(new ICRender.BLOCK(0, 1, 0, airGroup, false), condition);
        }
        else {
            var airGroup = ICRender.getUnnamedGroup();
            airGroup.add(78, -1); // just ignore snow
            condition = new ICRender.AND(new ICRender.BLOCK(0, 1, 0, airGroup, true), condition);
        }
        this.buildAllParts(icRender, condition, variantCount);
    };
    return GrassModel;
}(VariantModelGenerator));
(function () {
    var grassModel = new GrassModel();
    grassModel.mapGrassModel(2, 0, config_grass_variant_count);
})();
var config_leaves_variant_count = Math.max(1, Math.min(24, __config__.getInteger("leaves.variant_count") || 6));
var config_leaves_density = Math.max(1, Math.min(3, __config__.getInteger("leaves.density") || 3));
var config_leaves_rich_model = __config__.getBool("leaves.rich_model");
var LeavesModel = /** @class */ (function (_super) {
    __extends(LeavesModel, _super);
    function LeavesModel(texture, leavesData) {
        var _this = this;
        _this.texture = texture;
        _this.leavesData = leavesData;
        return _this;
    }
    LeavesModel.prototype.getPartCount = function () {
        return config_leaves_rich_model ? 3 : 1;
    };
    LeavesModel.prototype.getTextures = function (part) {
        return [
            ["better_foliage_leaves_0_" + this.texture[0], this.texture[1]],
            ["better_foliage_leaves_1_" + this.texture[0], this.texture[1]],
            // ["stone", 0],
        ];
    };
    LeavesModel.prototype.getPartVariantCount = function (part, texture) {
        return 3;
    };
    LeavesModel.prototype.buildPartVariant = function (model, mesh, part, texture, variant, random) {
        if (variant >= config_leaves_density) {
            return;
        }
        var s = 1 / Math.sqrt(2);
        mesh.setNormal(0, 0, 0);
        if (this.leavesData != undefined) {
            mesh.setFoliageTinted(this.leavesData);
        }
        else {
            mesh.setNoTint();
        }
        var cTop = 1;
        var cBot = .6;
        var cSide = .75;
        switch (part) {
            case 0:
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 - s, 0.5 - 1, 0.5 - s, 0, 0, cBot, cBot, cBot],
                    [0.5 - s, 0.5 + 1, 0.5 - s, 0, 1, cTop, cTop, cTop],
                    [0.5 + s, 0.5 + 1, 0.5 + s, 1, 1, cTop, cTop, cTop],
                    [0.5 + s, 0.5 - 1, 0.5 + s, 1, 0, cBot, cBot, cBot],
                ]);
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 + s, 0.5 - 1, 0.5 - s, 0, 0, cBot, cBot, cBot],
                    [0.5 + s, 0.5 + 1, 0.5 - s, 0, 1, cTop, cTop, cTop],
                    [0.5 - s, 0.5 + 1, 0.5 + s, 1, 1, cTop, cTop, cTop],
                    [0.5 - s, 0.5 - 1, 0.5 + s, 1, 0, cBot, cBot, cBot],
                ]);
                mesh.rotate(0.5, 0.5, 0.5, 0, 0.05, 0);
                break;
            case 1:
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 - s, 0.5 - s, 0.5 - 1, 0, 0, cSide, cSide, cSide],
                    [0.5 - s, 0.5 - s, 0.5 + 1, 0, 1, cSide, cSide, cSide],
                    [0.5 + s, 0.5 + s, 0.5 + 1, 1, 1, cSide, cSide, cSide],
                    [0.5 + s, 0.5 + s, 0.5 - 1, 1, 0, cSide, cSide, cSide],
                ]);
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 + s, 0.5 - s, 0.5 - 1, 0, 0, cSide, cSide, cSide],
                    [0.5 + s, 0.5 - s, 0.5 + 1, 0, 1, cSide, cSide, cSide],
                    [0.5 - s, 0.5 + s, 0.5 + 1, 1, 1, cSide, cSide, cSide],
                    [0.5 - s, 0.5 + s, 0.5 - 1, 1, 0, cSide, cSide, cSide],
                ]);
                mesh.rotate(0.5, 0.5, 0.5, 0, 0, 0.05);
                break;
            case 2:
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 - 1, 0.5 - s, 0.5 - s, 0, 0, cSide, cSide, cSide],
                    [0.5 + 1, 0.5 - s, 0.5 - s, 0, 1, cSide, cSide, cSide],
                    [0.5 + 1, 0.5 + s, 0.5 + s, 1, 1, cSide, cSide, cSide],
                    [0.5 - 1, 0.5 + s, 0.5 + s, 1, 0, cSide, cSide, cSide],
                ]);
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 - 1, 0.5 + s, 0.5 - s, 0, 0, cSide, cSide, cSide],
                    [0.5 + 1, 0.5 + s, 0.5 - s, 0, 1, cSide, cSide, cSide],
                    [0.5 + 1, 0.5 - s, 0.5 + s, 1, 1, cSide, cSide, cSide],
                    [0.5 - 1, 0.5 - s, 0.5 + s, 1, 0, cSide, cSide, cSide],
                ]);
                mesh.rotate(0.5, 0.5, 0.5, 0.05, 0, 0);
                break;
        }
    };
    LeavesModel.prototype.mapLeavesModel = function (id, data, variantCount, oldModel) {
        if (!__config__.getBool("leaves.enabled")) {
            return;
        }
        var icRender;
        var leavesGroup = ICRender.getUnnamedGroup();
        if (oldModel) {
            icRender = oldModel;
        }
        else {
            icRender = new ICRender.Model();
            var baseModel = new BlockRenderer.Model();
            baseModel.addBlock(id, data != -1 ? data : 0);
            var entry = icRender.addEntry(baseModel);
            leavesGroup.add(id, data);
            entry.setCondition(this.fullyClosedCondition(leavesGroup, true));
        }
        ItemModel.getFor(id, data != -1 ? data : 0).occupy();
        BlockRenderer.setStaticICRender(id, data, icRender);
        this.buildAllParts(icRender, this.fullyClosedCondition(leavesGroup, true), variantCount);
    };
    return LeavesModel;
}(VariantModelGenerator));
(function () {
    var variantCount = config_leaves_variant_count;
    var oakModel = new LeavesModel(["leaves_oak", 0], 0);
    var spruceModel = new LeavesModel(["leaves_spruce", 0], 1);
    var birchModel = new LeavesModel(["leaves_birch", 0], 2);
    var jungleModel = new LeavesModel(["leaves_jungle", 0], 3);
    oakModel.mapLeavesModel(18, 0, variantCount);
    spruceModel.mapLeavesModel(18, 1, variantCount);
    birchModel.mapLeavesModel(18, 2, variantCount);
    jungleModel.mapLeavesModel(18, 3, variantCount);
    oakModel.mapLeavesModel(161, 0, variantCount);
    oakModel.mapLeavesModel(161, 1, variantCount);
})();
ModAPI.registerAPI("BetterFoliageLeaves", {
    setupLeavesModel: function (id, data, texture, leavesData, variantCount) {
        var oakModel = new LeavesModel(texture, leavesData);
        oakModel.mapLeavesModel(id, data, variantCount || config_leaves_variant_count);
    }
});
var config_reed_variant_count = Math.max(1, Math.min(48, __config__.getInteger("reed.variant_count") || 12));
var config_reed_density = Math.max(1, Math.min(3, __config__.getInteger("reed.density") || 2));
var ReedModel = /** @class */ (function (_super) {
    __extends(ReedModel, _super);
    function ReedModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReedModel.prototype.getPartCount = function () {
        return 4;
    };
    ReedModel.prototype.getTextures = function (part) {
        return [
            ["better_reed", 0],
            ["better_reed", 1],
            // ["stone", 0],
        ];
    };
    ReedModel.prototype.getPartVariantCount = function (part, texture) {
        return 2;
    };
    ReedModel.prototype.buildPartVariant = function (model, mesh, part, texture, variant, random) {
        mesh.setNormal(0, 0, 0);
        mesh.setLightPos(0, 2, 0);
        var move = 0.25;
        var width = 0.75;
        var height = 3;
        var u = variant == 0 ? 0 : 0.5;
        switch (part) {
            case 0:
                addTwoSidedPolyToMesh(mesh, [
                    [move, 1, 0.5 - width, u, 1],
                    [move, 1 + height, 0.5 - width, u, 0],
                    [move, 1 + height, 0.5 + width, 0.5 + u, 0],
                    [move, 1, 0.5 + width, 0.5 + u, 1],
                ]);
                break;
            case 1:
                addTwoSidedPolyToMesh(mesh, [
                    [1 - move, 1, 0.5 - width, u, 1],
                    [1 - move, 1 + height, 0.5 - width, u, 0],
                    [1 - move, 1 + height, 0.5 + width, 0.5 + u, 0],
                    [1 - move, 1, 0.5 + width, 0.5 + u, 1],
                ]);
                break;
            case 2:
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 - width, 1, move, u, 1],
                    [0.5 - width, 1 + height, move, u, 0],
                    [0.5 + width, 1 + height, move, 0.5 + u, 0],
                    [0.5 + width, 1, move, 0.5 + u, 1],
                ]);
                break;
            case 3:
                addTwoSidedPolyToMesh(mesh, [
                    [0.5 - width, 1, 1 - move, u, 1],
                    [0.5 - width, 1 + height, 1 - move, u, 0],
                    [0.5 + width, 1 + height, 1 - move, 0.5 + u, 0],
                    [0.5 + width, 1, 1 - move, 0.5 + u, 1],
                ]);
                break;
        }
    };
    ReedModel.prototype.mapReedModel = function (id, data, variantCount, oldModel) {
        if (!__config__.getBool("reed.enabled")) {
            return;
        }
        var icRender;
        if (oldModel) {
            icRender = oldModel;
        }
        else {
            icRender = new ICRender.Model();
            var baseModel = new BlockRenderer.Model();
            baseModel.addBlock(id, data != -1 ? data : 0);
            icRender.addEntry(baseModel);
        }
        ItemModel.getFor(id, data != -1 ? data : 0).occupy();
        BlockRenderer.setStaticICRender(id, data, icRender, 1273);
        var airGroup = ICRender.getUnnamedGroup();
        airGroup.add(0, 0);
        var waterGroup = ICRender.getUnnamedGroup();
        waterGroup.add(8, -1);
        waterGroup.add(9, -1);
        this.buildAllParts(icRender, new ICRender.AND(new ICRender.RANDOM(0, 5 - config_reed_density), new ICRender.BLOCK(0, 2, 0, airGroup, false), new ICRender.BLOCK(0, 1, 0, waterGroup, false)), variantCount);
    };
    return ReedModel;
}(VariantModelGenerator));
(function () {
    var reedModel = new ReedModel();
    reedModel.mapReedModel(3, 0, config_reed_variant_count);
})();
