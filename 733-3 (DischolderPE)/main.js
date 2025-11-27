var __values = (this && this.__values) || function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) {
        return m.call(o);
    }
    if (o && typeof o.length === "number") {
        return {next: function () {
            if (o && i >= o.length) {
                o = void 0;
            }
            return {value: o && o[i++], done: !o};
        }};
    }
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ModelRotation;
(function (ModelRotation) {
    function rotateVertex(vertex) {
        var x = vertex[0], y = vertex[1], z = vertex[2];
        x -= 0.5, z -= 0.5;
        x = z;
        z = -(1 * (vertex[0] - 0.5));
        x += 0.5, z += 0.5;
        return [x, y, z];
    }
    ModelRotation.rotateVertex = rotateVertex;
    function rotateBox(box) {
        return [rotateVertex(box[0]), rotateVertex(box[1]), box[2], box[3]];
    }
    ModelRotation.rotateBox = rotateBox;
    function rotateBoxes(boxes) {
        var e_1, _a;
        var result = [];
        try {
            for (var boxes_1 = __values(boxes), boxes_1_1 = boxes_1.next(); !boxes_1_1.done; boxes_1_1 = boxes_1.next()) {
                var box = boxes_1_1.value;
                result.push(rotateBox(box));
            }
        }
        catch (e_1_1) {
            e_1 = {error: e_1_1};
        }
        finally {
            try {
                if (boxes_1_1 && !boxes_1_1.done && (_a = boxes_1.return)) {
                    _a.call(boxes_1);
                }
            }
            finally {
                if (e_1) {
                    throw e_1.error;
                }
            }
        }
        return result;
    }
    ModelRotation.rotateBoxes = rotateBoxes;
    function putBoxesToModel(boxes) {
        var e_2, _a;
        var model = new BlockRenderer.Model();
        try {
            for (var boxes_2 = __values(boxes), boxes_2_1 = boxes_2.next(); !boxes_2_1.done; boxes_2_1 = boxes_2.next()) {
                var box = boxes_2_1.value;
                model.addBox(box[0][0], box[0][1], box[0][2], box[1][0], box[1][1], box[1][2], box[2], box[3]);
            }
        }
        catch (e_2_1) {
            e_2 = {error: e_2_1};
        }
        finally {
            try {
                if (boxes_2_1 && !boxes_2_1.done && (_a = boxes_2.return)) {
                    _a.call(boxes_2);
                }
            }
            finally {
                if (e_2) {
                    throw e_2.error;
                }
            }
        }
        return model;
    }
    ModelRotation.putBoxesToModel = putBoxesToModel;
    function rotateModel(boxes) {
        return putBoxesToModel(rotateBoxes(boxes));
    }
    ModelRotation.rotateModel = rotateModel;
})(ModelRotation || (ModelRotation = {}));
var PistonHandler;
(function (PistonHandler) {
    function handle(x, y, z, region, id) {
        var e_3, _a;
        var sides = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
        var neededSide = null;
        try {
            for (var sides_1 = __values(sides), sides_1_1 = sides_1.next(); !sides_1_1.done; sides_1_1 = sides_1.next()) {
                var side = sides_1_1.value;
                if (region.getBlockId(x + side[0], y + side[1], z + side[2]) == id) {
                    neededSide = side;
                }
            }
        }
        catch (e_3_1) {
            e_3 = {error: e_3_1};
        }
        finally {
            try {
                if (sides_1_1 && !sides_1_1.done && (_a = sides_1.return)) {
                    _a.call(sides_1);
                }
            }
            finally {
                if (e_3) {
                    throw e_3.error;
                }
            }
        }
        if (neededSide == null) {
            return [null, false];
        }
        var xx = neededSide[0] != 0 ? neededSide[0] : 0;
        var yy = neededSide[1] != 0 ? neededSide[1] : 0;
        var zz = neededSide[2] != 0 ? neededSide[2] : 0;
        for (var a = -1; a < 2; a += 2) {
            for (var i = 1; i <= 13; i++) {
                var potentialPiston = region.getBlockId(x + (xx * i * a), y + (yy * i * a), z + (zz * i * a));
                if (potentialPiston == 33 || potentialPiston == 29) {
                    return [{x: x + neededSide[0], y: y + neededSide[1], z: z + neededSide[2]}, true];
                }
            }
        }
        return [null, false];
    }
    PistonHandler.handle = handle;
    function postHandle(region, data, oldTile) {
        var newTile = TileEntity.getTileEntity(data[0].x, data[0].y, data[0].z, region) || TileEntity.addTileEntity(data[0].x, data[0].y, data[0].z, region);
        for (var i = 0; i < 7; i++) {
            var slot = oldTile.container.getSlot("slot" + i);
            if (slot.id != 0) {
                newTile.container.setSlot("slot" + i, slot.id, slot.count, slot.data, slot.extra);
            }
        }
        oldTile.data.movedByPiston = true;
        TileEntity.destroyTileEntity(oldTile);
    }
    PistonHandler.postHandle = postHandle;
})(PistonHandler || (PistonHandler = {}));
var Discholder;
(function (Discholder) {
    function setupModel(id, planksId, planksData, materialId, materialData) {
        var boxes = [[[1.5 / 16, 0.1 / 16, 3 / 16], [14.5 / 16, 0.9 / 16, 4 / 16], planksId, planksData], [[1.5 / 16, 0.1 / 16, 12 / 16], [14.5 / 16, 0.9 / 16, 13 / 16], planksId, planksData]];
        for (var xx = 0; xx < 8; xx++) {
            boxes.push([[(0.5 + 2 * xx) / 16, 1 / 16, 2 / 16], [(1.5 + 2 * xx) / 16, 6 / 16, 3 / 16], materialId, materialData], [[(0.5 + 2 * xx) / 16, 1 / 16, 13 / 16], [(1.5 + 2 * xx) / 16, 6 / 16, 14 / 16], materialId, materialData], [[(0.5 + 2 * xx) / 16, 3 / 16, 3 / 16], [(1.5 + 2 * xx) / 16, 4 / 16, 13 / 16], materialId, materialData], [[(0.5 + 2 * xx) / 16, 0, 1 / 16], [(1.5 + 2 * xx) / 16, 1 / 16, 15 / 16], planksId, planksData]);
        }
        var render1 = new ICRender.Model(ModelRotation.putBoxesToModel(boxes));
        var render2 = new ICRender.Model(ModelRotation.rotateModel(boxes));
        BlockRenderer.setStaticICRender(id, 0, render1);
        BlockRenderer.setStaticICRender(id, 1, render2);
        ItemModel.getFor(id, 0).setModel(render1);
        ItemModel.getFor(id, 1).setModel(render2);
        Block.registerPlaceFunction(id, function (coords, item, block, player, region) {
            var yaw = Math.abs(Entity.getLookAngle(player).yaw * 180 / Math.PI);
            var data = yaw <= 135 && yaw > 45 ? 0 : 1;
            var bottom = region.getBlock(coords.relative.x, coords.relative.y - 1, coords.relative.z);
            var on = region.getBlock(coords.relative.x, coords.relative.y, coords.relative.z);
            if (!World.canTileBeReplaced(bottom.id, bottom.data) && (on.id == 0 || World.canTileBeReplaced(on.id, on.data))) {
                region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, id, data);
            } else {
                region.spawnDroppedItem(coords.relative.x + 0.5, coords.relative.y + 0.5, coords.relative.z + 0.5, item.id, 1, item.data, item.extra);
            }
        });
        Block.setShape(id, 0, 0, 0, 1, 6 / 16, 1);
        var shape = new ICRender.CollisionShape();
        shape.addEntry().addBox(0, 0, 0, 1, 6 / 16, 1);
        BlockRenderer.setCustomCollisionShape(id, -1, shape);
    }
    Discholder.setupModel = setupModel;
    function setupTile(id) {
        TileEntity.registerPrototype(id, {useNetworkItemContainer: true, defaultValues: {movedByPiston: false}, client: {updateModel: function () {
            var blockData = World.getBlockData(this.x, this.y, this.z);
            if (blockData == 1919221760) {
                blockData = 0;
            }
            for (var i = 0; i < 7; i++) {
                if (this["model" + i]) {
                    this["model" + i].destroy();
                }
                var xx = this.x + (blockData == 0 ? 1 - (5 / 32 + 1 / 8 * i) : 19 / 32);
                var zz = this.z + (blockData == 1 ? 1 - (3 / 32 + 1 / 8 * i) : 19 / 32);
                var yy = this.y + 7 / 16;
                this["model" + i] = new Animation.Item(xx, yy, zz);
                var id_1 = Network.serverToLocalId(this.networkData.getInt("animId" + i));
                var data = this.networkData.getInt("animData" + i);
                this["model" + i].describeItem({id: id_1, count: 1, data: data, size: 1, rotation: [0, blockData == 1 ? 0 : Math.PI / 2, 0]});
                this["model" + i].load();
            }
        }, load: function () {
            this.updateModel();
            var that = this;
            this.networkData.addOnDataChangedListener(function (networkData, isExternalChange) {
                that.updateModel();
            });
        }, unload: function () {
            for (var i = 0; i < 7; i++) {
                this["model" + i].destroy();
            }
        }}, setSlot: function (slot, id, count, data, extra) {
            this.container.setSlot(slot, id, count, data, typeof extra !== "undefined" ? extra : null);
            this.container.sendChanges();
        }, tick: function () {
            for (var i = 0; i < 7; i++) {
                var slot = this.container.getSlot("slot" + i);
                this.networkData.putInt("animId" + i, slot.id);
                this.networkData.putInt("animData" + i, slot.data);
                this.networkData.sendChanges();
            }
        }, getSlotFromVec: function (coords) {
            var blockData = this.blockSource.getBlockData(this.x, this.y, this.z);
            coords.x %= 1, coords.z %= 1;
            coords.x *= 8, coords.z *= 8;
            coords.x = coords.x >= 0 ? coords.x : 8 + coords.x;
            coords.z = coords.z >= 0 ? coords.z : 8 + coords.z;
            if (blockData == 0) {
                if (coords.x < 0.09375 || coords.x > 7.90625) {
                    return -1;
                }
                return 6 - Math.floor(coords.x - 1);
            } else {
                if (coords.z < 0.09375 || coords.z > 7.90625) {
                    return -1;
                }
                return 6 - Math.floor(coords.z - 1);
            }
        }, click: function (id, count, data, coords, player, extra) {
            var slot = this.getSlotFromVec(coords.vec);
            if (slot != -1 && slot < 7) {
                if (Discholder.isDisc(id, data)) {
                    if (this.container.getSlot("slot" + slot).id == 0) {
                        this.setSlot("slot" + slot, id, 1, data, extra);
                        Entity.setCarriedItem(player, id, count - 1, data, extra);
                    }
                } else {
                    if (id == 0) {
                        if (this.container.getSlot("slot" + slot).id != 0) {
                            var slt = this.container.getSlot("slot" + slot);
                            Entity.setCarriedItem(player, slt.id, 1, slt.data, slt.extra);
                            this.setSlot("slot" + slot, 0, 0, 0, null);
                        }
                    }
                }
            }
        }, destroy: function () {
            for (var i = 0; i < 7; i++) {
                if (this["model" + i]) {
                    this["model" + i].destroy();
                }
            }
            if (this.data.movedByPiston) {
                for (var i = 0; i < 7; i++) {
                    this.container.setSlot("slot" + i, 0, 0, 0, null);
                }
                return false;
            }
            var handleData = PistonHandler.handle(this.x, this.y, this.z, this.blockSource, id);
            if (handleData[1]) {
                PistonHandler.postHandle(this.blockSource, handleData, this);
                return true;
            }
        }});
    }
    Discholder.setupTile = setupTile;
    function create(id, nameKey, planksId, planksData, materialId, materialData, fenceId, slabId) {
        IDRegistry.genBlockID(id);
        Block.createBlock(id, [{name: nameKey, texture: [["planks", 0]], inCreative: true}, {name: nameKey, texture: [["planks", 0]], inCreative: false}], {base: 5, sound: "wood"});
        ToolAPI.registerBlockMaterial(BlockID[id], "wood", 0, false);
        Block.setDestroyTime(BlockID[id], 4);
        Block.registerDropFunction(id, function (coords, blockID, blockData, level, enchant, item, region) {
            return [[blockID, 1, 0]];
        });
        Block.registerNeighbourChangeFunction(BlockID[id], function (coords, block, changedCoords, region) {
            if (coords.x == changedCoords.x && coords.z == changedCoords.z && coords.y == changedCoords.y + 1) {
                if (!GenerationUtils.isTerrainBlock(region.getBlockId(changedCoords.x, changedCoords.y, changedCoords.z))) {
                    region.destroyBlock(coords.x, coords.y, coords.z, true);
                }
            }
        });
        Item.setCategory(BlockID[id], Native.ItemCategory.DECORATION);
        setupModel(BlockID[id], planksId, planksData, materialId, materialData);
        setupTile(BlockID[id]);
        Callback.addCallback("PostLoaded", function () {
            Recipes.addShaped({id: BlockID[id], count: 1, data: 0}, ["   ", "fwf", "sss"], ["f", fenceId, 0, "w", materialId, materialData, "s", slabId, 0]);
        });
        return BlockID[id];
    }
    Discholder.create = create;
    Discholder.DISCS = {};
    function addDisc(id, data) {
        if (!Discholder.DISCS[id + ":" + data]) {
            Discholder.DISCS[id + ":" + data] = true;
        }
    }
    Discholder.addDisc = addDisc;
    function isDisc(id, data) {
        return Discholder.DISCS[id + ":" + data];
    }
    Discholder.isDisc = isDisc;
    function removeDisc(id, data) {
        if (Discholder.DISCS[id + ":" + data]) {
            Discholder.DISCS[id + ":" + data] = false;
        }
    }
    Discholder.removeDisc = removeDisc;
})(Discholder || (Discholder = {}));
Discholder.addDisc(830, 0);
Discholder.addDisc(750, 0);
Discholder.addDisc(723, 0);
Discholder.addDisc(752, 0);
Discholder.addDisc(749, 0);
Discholder.addDisc(859, 0);
Discholder.addDisc(748, 0);
Discholder.addDisc(756, 0);
Discholder.addDisc(747, 0);
Discholder.addDisc(745, 0);
Discholder.addDisc(744, 0);
Discholder.addDisc(818, 0);
Discholder.addDisc(857, 0);
(function () {
    var group = [];
    var colors = ["white", "orange", "magenta", "lightblue", "yellow", "lime", "pink", "gray", "lightgray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
    for (var i in colors) {
        group.push(Discholder.create(colors[i] + "Discholder", "discholder." + colors[i], 5, 0, 35, parseInt(i), 85, 158));
    }
    Item.addCreativeGroup("discholders", Translation.translate("group.discholders"), group);
})();
ModAPI.registerAPI("DischolderCore", {Core: Discholder, requireGlobal: function (command) {
    return eval(command);
}});
Translation.addTranslation("group.discholders", {en: "Discholders", ru: "\u041f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0438 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.white", {en: "White Discholder", ru: "\u0411\u0435\u043b\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.orange", {en: "Orange Discholder", ru: "\u041e\u0440\u0430\u043d\u0436\u0435\u0432\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.magenta", {en: "Magenta Discholder", ru: "\u0421\u0438\u0440\u0435\u043d\u0435\u0432\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.lightblue", {en: "Light Blue Discholder", ru: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0438\u043d\u044f\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.yellow", {en: "Yellow Discholder", ru: "\u0416\u0451\u043b\u0442\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.lime", {en: "Lime Discholder", ru: "\u041b\u0430\u0439\u043c\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.pink", {en: "Pink Discholder", ru: "\u0420\u043e\u0437\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.gray", {en: "Gray Discholder", ru: "\u0421\u0435\u0440\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.lightgray", {en: "Light Gray Discholder", ru: "\u0421\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.cyan", {en: "Cyan Discholder", ru: "\u0411\u0438\u0440\u044e\u0437\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.purple", {en: "Purple Discholder", ru: "\u0424\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.blue", {en: "Blue Discholder", ru: "\u0421\u0438\u043d\u044f\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.brown", {en: "Brown Discholder", ru: "\u041a\u043e\u0440\u0438\u0447\u043d\u0435\u0432\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.green", {en: "Green Discholder", ru: "\u0417\u0435\u043b\u0451\u043d\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.red", {en: "Red Discholder", ru: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});
Translation.addTranslation("discholder.black", {en: "Black Discholder", ru: "\u0427\u0451\u0440\u043d\u0430\u044f \u043f\u043e\u0434\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u043b\u044f \u0434\u0438\u0441\u043a\u043e\u0432"});

