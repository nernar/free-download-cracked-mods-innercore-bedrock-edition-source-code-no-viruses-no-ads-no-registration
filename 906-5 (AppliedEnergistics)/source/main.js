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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
IMPORT("RenderUtil");
IMPORT("EnergyNet");
IMPORT("TextureWorker");
IMPORT("StorageInterface");
IMPORT("BlockEngine");
IMPORT("ParticlesCore");
IMPORT("ConnectedTexture");
var EMPTY_ITEM = { id: 0, count: 0, data: 0 };
var JavaItem = WRAP_JAVA("com.reider745.appliedenergistics.Item");
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var Ae = EnergyTypeRegistry.assureEnergyType("Ae", 1);
var SIZE = 2 / 16;
var CacheFacede = new RenderUtil.ModelsCache("facede");
var COLORS = ["transparent", "black", "blue", "brown", "cyan", "gray", "green", "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow"];
function splitImage(path, size, name) {
    var input = FileTools.ReadImage(path);
    for (var i = 0; i < input.getHeight() / size; i++)
        FileTools.WriteImage(__dir__ + name + "_" + i + ".png", android.graphics.Bitmap.createBitmap(input, 0, i * size, size, size));
}
//splitImage(__dir__+"controller_lights.png", 16, "controller_lights");
function pushToArray(arr1, arr2) {
    for (var i in arr2)
        arr1.push(arr2[i]);
}
ItemModel.setCurrentCacheGroup("AppliedEnergistics", "pre-alpha 0.1");
function addConnect(id, data, group) {
    if (data === void 0) { data = -1; }
    if (group === void 0) { group = "ae"; }
    ICRender.getGroup(group).add(id, data);
}
function funcAddedFacede(pos, item, block, player) {
    if (AppliedEnergistics.isFlag(block.id, "cable")) {
        var region = BlockSource.getDefaultForActor(player);
        var tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, region);
        if (!tile)
            tile = TileEntity.addTileEntity(pos.x, pos.y, pos.z, region);
        if (tile) {
            tile.data.del = false;
            if (tile.canAdded(item.id, pos.side)) {
                tile.add(item.id, pos.side);
                if (Game.isItemSpendingAllowed(player))
                    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
                return tile;
            }
        }
    }
    return false;
}
var CALBLE_TICK = function () {
    getController(this).useAll("tick");
};
ItemRegistry.createItem("icon_info", {
    name: "",
    icon: "icon_info",
    inCreative: true
});
//create Reider ___ size - 16
var Carver = (function (obj, texture_default, data_default) {
    obj = obj || {};
    var texture = texture_default || 1, data = data_default || 0;
    var model = new RenderUtil.Model();
    model.addBoxByBlock("cube", 0.0625, 0, 0.8125, 0.9375, 1, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
    model.addBoxByBlock("cube_2", 0.75, 0.0625, 0.0625, 1, 0.9375, 0.9375, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
    model.addBoxByBlock("cube_3", 0, 0.0625, 0.0625, 0.25, 0.9375, 0.9375, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
    model.addBoxByBlock("cube_4", 0.0625, 0, 0, 0.9375, 1, 0.1875, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
    model.addBoxByBlock("cube_5", 0.0625, 0.9375, 0.0625, 0.9375, 1, 0.9375, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
    model.addBoxByBlock("cube_6", 0.1875, 0.125, 0.1875, 0.3125, 0.9375, 0.8125, obj["cube_6"] ? obj["cube_6"].texture : texture, obj["cube_6"] ? obj["cube_6"].data : data);
    model.addBoxByBlock("cube_7", 0.6875, 0.125, 0.1875, 0.8125, 0.9375, 0.8125, obj["cube_7"] ? obj["cube_7"].texture : texture, obj["cube_7"] ? obj["cube_7"].data : data);
    return model;
})(null, "charger_side"); //boxes - 7
//create Reider ___ size - 16
function ExportBus(obj, texture_default, data_default) {
    obj = obj || {};
    var texture = texture_default || 1, data = data_default || 0;
    var model = new RenderUtil.Model();
    model.addBoxByBlock("cube", 0.25, 0.125, 0.25, 0.75, 0.25, 0.75, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
    model.addBoxByBlock("cube_2", 0.3125, 0.0625, 0.3125, 0.6875, 0.125, 0.6875, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
    model.addBoxByBlock("cube_3", 0.375, 0, 0.375, 0.625, 0.0625, 0.625, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
    model.addBoxByBlock("cube_4", 0.375, 0.25, 0.375, 0.625, 0.3125, 0.625, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
    return model;
}
; //boxes - 4
//create Reider ___ size - 16
function ImportBus(obj, texture_default, data_default) {
    obj = obj || {};
    var texture = texture_default || 1, data = data_default || 0;
    var model = new RenderUtil.Model();
    model.addBoxByBlock("cube", 0.25, 0, 0.25, 0.75, 0.125, 0.75, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
    model.addBoxByBlock("cube_2", 0.3125, 0.125, 0.3125, 0.6875, 0.1875, 0.6875, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
    model.addBoxByBlock("cube_3", 0.375, 0.1875, 0.375, 0.625, 0.3125, 0.625, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
    return model;
}
; //boxes - 3
//create Reider ___ size - 16
var Charged = (function (obj, texture_default, data_default) {
    obj = obj || {};
    var texture = texture_default || 1, data = data_default || 0;
    var model = new RenderUtil.Model();
    model.addBoxByBlock("cube", 0.125, 0.125, 0, 0.875, 0.875, 0.1875, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
    model.addBoxByBlock("cube_2", 0.125, 0.125, 0.8125, 0.875, 0.875, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
    model.addBoxByBlock("cube_3", 0.1875, 0.1875, 0.1875, 0.8125, 0.8125, 0.25, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
    model.addBoxByBlock("cube_4", 0.1875, 0.1875, 0.75, 0.8125, 0.8125, 0.8125, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
    model.addBoxByBlock("cube_5", 0.375, 0.875, 0.0625, 0.625, 1, 0.9375, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
    return model;
})(null, [["charger_inside", 0], ["charger", 0], ["charger_side", 0]]); //boxes - 5
var LAYER = floor(1 / 190);
var requireMethodFromNativeAPI = ModAPI.requireGlobal("requireMethodFromNativeAPI");
var setRenderLayer = requireMethodFromNativeAPI("api.NativeBlock", "setRenderLayer");
var setRenderType = requireMethodFromNativeAPI("api.NativeBlock", "setRenderType");
var getRenderType = requireMethodFromNativeAPI("api.NativeBlock", "getRenderType");
var BlockLayers = [];
function setBlockLayer(id, data, layers) {
    BlockLayers.push(id);
    var layer = layers.length * LAYER;
    var model = new RenderUtil.Model()
        .addBoxByBlock(null, 0, 0, 0, 1, 1, 1, id, data);
    for (var i = 1; i <= layers.length; i++)
        model.addBoxByBlock(null, -(i * LAYER), -(i * LAYER), -(i * LAYER), 1 + i * LAYER, 1 + i * LAYER, 1 + i * LAYER, layers[i - 1]);
    model.setBlockModel(id, data);
    return model;
}
;
Callback.addCallback("LevelDisplayed", function () {
    for (var i in BlockLayers) {
        var id = BlockLayers[i];
        setRenderLayer(id, 2);
        setRenderType(id, 99);
    }
});
function FacedeModel(id, id2, data, side, textId) {
    var model = new RenderUtil.Model();
    var n = "facade_" + side;
    if (side == 0)
        model.addBoxByBlock(n, 0, 0, 0, 1, LAYER, 1, id2, data);
    else if (side == 1)
        model.addBoxByBlock(n, 0, 1 - LAYER, 0, 1, 1, 1, id2, data);
    else if (side == 2)
        model.addBoxByBlock(n, 0, 0, 0, 1, 1, LAYER, id2, data);
    else if (side == 3)
        model.addBoxByBlock(n, 0, 0, 1 - LAYER, 1, 1, 1, id2, data);
    else if (side == 4)
        model.addBoxByBlock(n, 0, 0, 0, LAYER, 1, 1, id2, data);
    else if (side == 5)
        model.addBoxByBlock(n, 1 - LAYER, 0, 0, 1, 1, 1, id2, data);
    if (id)
        model.setItemModel(id);
    CacheFacede.add(textId + "_" + side, model);
    return model;
}
function TerminalModel(id, id2, side, textId) {
    var model = new RenderUtil.Model();
    var n = "terminal_" + side;
    var p = 2 / 16;
    if (side == 0)
        model.addBoxByBlock(n, p, -LAYER, p, 1 - p, p, 1 - p, id2);
    else if (side == 1)
        model.addBoxByBlock(n, p, 1 - p, p, 1 - p, 1 + LAYER, 1 - p, id2);
    else if (side == 2)
        model.addBoxByBlock(n, p, p, -LAYER, 1 - p, 1 - p, p, id2);
    else if (side == 3)
        model.addBoxByBlock(n, p, p, 1 - p, 1 - p, 1 - p, 1 + LAYER, id2);
    else if (side == 4)
        model.addBoxByBlock(n, -LAYER, p, p, p, 1 - p, 1 - p, id2);
    else if (side == 5)
        model.addBoxByBlock(n, 1 - p, p, p, 1 + LAYER, 1 - p, 1 - p, id2);
    if (id)
        model.setItemModel(id);
    CacheFacede.add(textId + "_" + side, model);
    return model;
}
var width = 4 / 16 / 2;
var WIRE_BOXES = [
    { side: [0, -1, 0], box: [0.5 - width, 0, 0.5 - width, 0.5 + width, 0.5 - width, 0.5 + width], replaced: 1 },
    { side: [0, 1, 0], box: [0.5 - width, 0.5 + width, 0.5 - width, 0.5 + width, 1, 0.5 + width], replaced: 4 },
    { side: [0, 0, -1], box: [0.5 - width, 0.5 - width, 0, 0.5 + width, 0.5 + width, 0.5 - width], replaced: 2 },
    { side: [0, 0, 1], box: [0.5 - width, 0.5 - width, 0.5 + width, 0.5 + width, 0.5 + width, 1], replaced: 5 },
    { side: [-1, 0, 0], box: [0, 0.5 - width, 0.5 - width, 0.5 - width, 0.5 + width, 0.5 + width], replaced: 0 },
    { side: [1, 0, 0], box: [0.5 + width, 0.5 - width, 0.5 - width, 1, 0.5 + width, 0.5 + width], replaced: 3 },
];
function setWireModel(groupName, id, data) {
    var group = ICRender.getGroup(groupName);
    group.add(id, data);
    var render = new RenderUtil.Model();
    render.addBoxByBlock("central", 0.5 - width, 0.5 - width, 0.5 - width, 0.5 + width, 0.5 + width, 0.5 + width, id, data);
    for (var key in WIRE_BOXES) {
        var box_1 = WIRE_BOXES[key];
        render.addBoxByBlock(key, box_1.box[0], box_1.box[1], box_1.box[2], box_1.box[3], box_1.box[4], box_1.box[5], id, data, ICRender.BLOCK(box_1.side[0], box_1.side[1], box_1.side[2], group, false));
    }
    render.setBlockModel(id, data);
    BlockRenderer.enableCoordMapping(id, data, render.getICRenderModel());
    CacheFacede.add(id + ":" + data, render);
    render = new RenderUtil.Model();
    render.addBoxByBlock("central", 0.5 - width, 0.5 - width, 0.5 - width, 0.5 + width, 0.5 + width, 0.5 + width, id, data);
    var box = WIRE_BOXES[4];
    render.addBoxByBlock(null, box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, data, ICRender.BLOCK(box.side[0], box.side[1], box.side[2], group, false));
    box = WIRE_BOXES[5];
    render.addBoxByBlock(null, box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, data, ICRender.BLOCK(box.side[0], box.side[1], box.side[2], group, false));
    render.setItemModel(id, data);
}
var AppliedEnergistics;
(function (AppliedEnergistics) {
    var flags = {};
    function setFlag(id, flag) {
        flags[id] = flag;
    }
    AppliedEnergistics.setFlag = setFlag;
    function isFlag(id, flag) {
        return flags[id] == flag;
    }
    AppliedEnergistics.isFlag = isFlag;
    function getFlag(id) {
        return flags[id];
    }
    AppliedEnergistics.getFlag = getFlag;
    var drives = {};
    function registerDrive(id, max) {
        var extra = new ItemExtraData();
        extra.putInt("value", 0);
        extra.putInt("max", max);
        Item.addToCreative(id, 1, 0, extra);
        drives[id] = max;
    }
    AppliedEnergistics.registerDrive = registerDrive;
    function getDrive(id) {
        return drives[id];
    }
    AppliedEnergistics.getDrive = getDrive;
    function getDriveSlot(container, name) {
        var item = container.getSlot(name);
        var max = this.getDrive(item.id);
        if (max && !item.extra) {
            item.extra = new ItemExtraData();
            item.extra.putInt("value", 0);
            item.extra.putInt("max", max);
        }
        return item;
    }
    AppliedEnergistics.getDriveSlot = getDriveSlot;
    function setItems(extra, items) {
        extra.putInt("length", items.length);
        for (var i in items) {
            var item = items[i];
            extra.putInt("id_" + i, item.id || 0);
            extra.putInt("count_" + i, item.count || 0);
            extra.putInt("data_" + i, item.data || 0);
            if (item.extra)
                extra.putSerializable("extra_" + i, item.extra);
            else
                extra.putInt("enabledExtra_" + i, 1);
        }
    }
    AppliedEnergistics.setItems = setItems;
    function getItems(extra) {
        var items = [];
        var _loop_1 = function (i) {
            items.push({
                id: extra.getInt("id_" + i, 0),
                count: extra.getInt("count_" + i, 0),
                data: extra.getInt("data_" + i, 0),
                extra: (function () {
                    if (extra.getInt("enabledExtra_" + i) == 1)
                        return extra.getSerializable("extra_" + i);
                    return undefined;
                })()
            });
        };
        for (var i = 0; i < extra.getInt("length", 0); i++) {
            _loop_1(i);
        }
        return items;
    }
    AppliedEnergistics.getItems = getItems;
})(AppliedEnergistics || (AppliedEnergistics = {}));
;
var SubTile = /** @class */ (function () {
    function SubTile(data) {
        this.self_id = -1;
        this.data = data;
        this.useTick = false;
    }
    SubTile.prototype.setTile = function (tile) {
        this.tile = tile;
        return this;
    };
    SubTile.prototype.setSide = function (side) {
        this.side = side;
        return this;
    };
    SubTile.prototype.setController = function (controller) {
        this.controller = controller;
        return this;
    };
    SubTile.prototype.setSelfId = function (id) {
        this.self_id = id;
        return this;
    };
    SubTile.prototype.getSavedData = function () {
        return this.data;
    };
    SubTile.prototype.getItem = function () {
        return this.data;
    };
    SubTile.prototype.getDrops = function () {
        return [{ id: this.data.id, count: 1, data: 0 }];
    };
    SubTile.prototype.getConnectionCable = function () {
        return 0;
    };
    SubTile.prototype.getEnergy = function () {
        return 0;
    };
    SubTile.prototype.click = function (id, count, data, extra, coords, player) {
    };
    SubTile.prototype.tick = function () {
    };
    SubTile.prototype.serverEvent = function (data) {
    };
    SubTile.prototype.getScreenName = function () {
        return "main";
    };
    SubTile.prototype.sendClient = function (data) {
        Dimensions;
        data.id = this.data.id;
        data.self_id = this.self_id;
        data.additional = {
            x: this.tile.x,
            y: this.tile.y,
            z: this.tile.z,
            dimension: this.tile.dimension
        };
        this.tile.container.sendEvent("event", data);
    };
    SubTile.prototype.close = function (container, client) {
    };
    SubTile.prototype.open = function (container, client, str) {
    };
    SubTile.clientEvent = function (container, window, content, data) {
    };
    SubTile.getNameModel = function () {
        return null;
    };
    SubTile.canAdded = function (sides) {
        return false;
    };
    SubTile.getScreenByName = function (value, container) {
        return null;
    };
    return SubTile;
}());
;
function floor(num) {
    var symbols = String(num).split("");
    symbols.length = 6;
    var r = "";
    for (var i in symbols)
        r += symbols[i];
    return Number(r);
}
var SubTileController = /** @class */ (function () {
    function SubTileController(data, tile) {
        this.tiles = [];
        this.cache_use_tick = null;
        this.tile = tile;
        if (!data.sides)
            data.sides = [[], [], [], [], [], []];
        var id = 0;
        for (var i in data.sides) {
            var side = data.sides[i];
            var arr = [];
            for (var a in side) {
                arr.push(new SubTileController.all_tile[side[a].id](side[a])
                    .setTile(tile)
                    .setController(this)
                    .setSelfId(id)
                    .setSide(Number(i)));
                id++;
            }
            this.tiles.push(arr);
        }
        tile.container.sendEvent("linkToServer", { x: tile.x, y: tile.y, z: tile.z, dimension: tile.dimension });
    }
    SubTileController.prototype.useAll = function (name, args) {
        if (args === void 0) { args = []; }
        for (var side in this.tiles)
            this.useAllToSide(Number(side), name, args);
    };
    SubTileController.prototype.useAllToSide = function (side, name, args) {
        if (args === void 0) { args = []; }
        var tiles = this.tiles[side];
        for (var i in tiles)
            tiles[i][name].apply(tiles[i], args);
        //if(tiles[i][name]) tiles[i][name].apply(tiles[i], args);
    };
    SubTileController.prototype.forEach = function (func) {
        for (var side in this.tiles) {
            var tiles = this.tiles[side];
            for (var i in tiles)
                func(tiles[i]);
        }
    };
    SubTileController.prototype.getUseAll = function (name, args) {
        if (args === void 0) { args = []; }
        for (var side in this.tiles) {
            var result = this.getUseAllToSide(Number(side), name, args);
            if (result)
                return result;
        }
        return null;
    };
    SubTileController.prototype.getTiles = function () {
        return this.tiles;
    };
    SubTileController.prototype.getTilesBySide = function (side) {
        return this.tiles[side];
    };
    SubTileController.prototype.getUseAllToSide = function (side, name, args) {
        if (args === void 0) { args = []; }
        var tiles = this.tiles[side];
        for (var i in tiles) {
            //if(tiles[i][name]){
            var result = tiles[i][name].apply(tiles[i], args);
            if (result)
                return result;
        }
        return null;
    };
    SubTileController.prototype.getSubTile = function (id) {
        for (var side in this.tiles) {
            var tiles = this.tiles[side];
            for (var i in tiles)
                if (tiles[i].self_id == id)
                    return tiles[i];
        }
        return null;
    };
    SubTileController.prototype.useMethodById = function (id, name, args) {
        if (args === void 0) { args = []; }
        if (typeof id == "number")
            id = this.getSubTile(id);
        id[name].apply(id, args);
    };
    SubTileController.prototype.canUseTick = function () {
        if (this.cache_use_tick != null)
            return this.cache_use_tick;
        for (var side in this.tiles) {
            var tiles = this.tiles[side];
            for (var i in tiles)
                if (tiles[i].useTick) {
                    this.cache_use_tick = true;
                    return true;
                }
        }
        return false;
    };
    SubTileController.prototype.click = function (id, count, data, coords, player, extra, name) {
        name = name === undefined || typeof name !== "string" ? "click" : name;
        var x = floor(coords.vec.x - coords.x);
        var y = floor(coords.vec.y - coords.y);
        var z = floor(coords.vec.z - coords.z);
        for (var i in this.tiles) {
            var side = this.tiles[i];
            for (var a in side) {
                var tile = side[a];
                var model = CacheFacede.get(SubTileController.getSubTile(side[a].data.id).getNameModel() + "_" + i);
                if (model.isClick(x, y, z)) {
                    var result = void 0;
                    if (tile[name])
                        result = { value: tile[name].apply(tile, [id, count, data, extra, coords, player]), id: tile.getItem().id, self_id: tile.self_id };
                    else
                        result = {};
                    if (name != "click")
                        return result;
                    return;
                }
            }
        }
    };
    SubTileController.prototype.dropItem = function () {
        for (var side in this.tiles) {
            var tiles = this.tiles[side];
            for (var i in tiles) {
                var drops = tiles[i].getDrops();
                for (var a in drops)
                    this.tile.blockSource.spawnDroppedItem(this.tile.x, this.tile.y, this.tile.z, drops[a].id, drops[a].count, drops[a].data, drops[a].extra || null);
            }
        }
        BlockRenderer.unmapCollisionAndRaycastModelAtCoords(this.tile.dimension, this.tile.x, this.tile.y, this.tile.z);
    };
    SubTileController.prototype.save = function () {
        this.tile.data.sides = [];
        for (var i in this.tiles) {
            var side = this.tiles[i];
            var arr = [];
            for (var a in side)
                arr.push(side[a].getSavedData());
            this.tile.data.sides.push(arr);
        }
    };
    SubTileController.canAdded = function (sides, flags) {
        for (var i in sides)
            if (flags.indexOf(AppliedEnergistics.getFlag(sides[i].id)) != -1)
                return false;
        return true;
    };
    SubTileController.prototype.sendServer = function (id, data) {
        for (var i in this.tiles) {
            var tiles = this.tiles[i];
            for (var a in tiles)
                if (tiles[a].self_id == id)
                    tiles[a].serverEvent(data);
        }
    };
    SubTileController.send = function (x, y, z, id, data, dimension) {
        if (dimension === void 0) { dimension = Entity.getDimension(Player.get()); }
        SubTileController.sendServer({
            self_id: id,
            additional: {
                x: x,
                y: y,
                z: z,
                dimension: dimension
            }
        }, data);
    };
    SubTileController.prototype.sendToTile = function (tile, id, data) {
        SubTileController.send(tile.x, tile.y, tile.z, id, data, tile.dimension);
    };
    SubTileController.sendServer = function (client, data) {
        Network.sendToServer("sub_tile.send_server", {
            client: client,
            data: data
        });
    };
    SubTileController.registry = function (id, tile) {
        tile.prototype.model = tile.getNameModel();
        this.all_tile[id] = tile;
    };
    SubTileController.canSubTile = function (id) {
        return !!this.getSubTile(id);
    };
    SubTileController.getSubTile = function (id) {
        return this.all_tile[id];
    };
    SubTileController.registerRotate = function (cache, model) {
        for (var i = 0; i < 6; i++)
            CacheFacede.add(cache + "_" + i, model.rotate(i));
    };
    SubTileController.all_tile = {};
    (function () {
        Network.addServerPacket("sub_tile.send_server", function (client, data) {
            var tile = TileEntity.getTileEntity(data.client.additional.x, data.client.additional.y, data.client.additional.z, BlockSource.getDefaultForDimension(data.client.additional.dimension));
            getController(tile).sendServer(data.client.self_id, data.data);
        });
    })();
    return SubTileController;
}());
function getController(tile) {
    var controller = tile.controller_sub_tile;
    if (!controller) {
        controller = new SubTileController(tile.data, tile);
        tile.controller_sub_tile = controller;
        return controller;
    }
    return controller;
}
function uptController(tile) {
    tile.controller_sub_tile = new SubTileController(tile.data, tile);
}
var MachineRegisty;
(function (MachineRegisty) {
    var groups = {};
    function getRecipePoolByName(nmae) {
        return groups[nmae];
    }
    var RecipePool = /** @class */ (function () {
        function RecipePool(name) {
            this.recipes = [];
            this.id = name;
            groups[name] = this;
        }
        RecipePool.prototype.getRecipes = function () {
            return this.recipes;
        };
        RecipePool.prototype.setRecipes = function (recipes) {
            this.recipes = recipes;
            return this;
        };
        RecipePool.prototype.getId = function () {
            return this.id;
        };
        RecipePool.prototype.getArrayItemInstance = function (input) {
            var result = [];
            input.forEach(function (item) {
                if (typeof item == "number")
                    result.push(new ItemStack(item, item == 0 ? 0 : 1));
                else
                    result.push(item);
            });
            return result;
        };
        RecipePool.prototype.add = function (input, output, info) {
            this.recipes.push({ input: this.getArrayItemInstance(input), output: this.getArrayItemInstance(output), info: info });
            return this;
        };
        RecipePool.prototype.indexOf = function (check, item, black) {
            for (var i in check) {
                var _item = check[i];
                if (black.indexOf(i) != -1)
                    continue;
                if (_item.id == item.id && (_item.data == item.data || item.data == -1) && (_item.count >= item.count || item.count == -1)) {
                    black.push(i);
                    return Number(i);
                }
            }
            return -1;
        };
        RecipePool.prototype.itemOf = function (check, item, black) {
            var index = this.indexOf(check, item, black);
            if (index == -1)
                return null;
            return check[index];
        };
        RecipePool.prototype.get = function (input) {
            for (var i in this.recipes) {
                var recipe = this.recipes[i];
                var result = true;
                var black = [];
                for (var a in recipe.input)
                    if (this.indexOf(input, recipe.input[a], black) == -1)
                        result = false;
                if (result && recipe.input.length == input.length)
                    return recipe;
            }
            return null;
        };
        RecipePool.prototype.getPossibleRecipe = function (input) {
            var result = [];
            for (var i in this.recipes) {
                var recipe = this.recipes[i];
                for (var a in recipe.input)
                    if (this.indexOf(input, recipe.input[a], []) == -1) {
                        result.push(recipe);
                        break;
                    }
            }
            return result;
        };
        RecipePool.prototype.canRecipe = function (input) {
            return !!this.get(input);
        };
        RecipePool.prototype.canPossiblerecipe = function (input) {
            return !!this.getPossibleRecipe(input);
        };
        RecipePool.prototype.registerRecipeViewer = function (name, icon, content) {
            var self = this;
            ModAPI.addAPICallback("RecipeViewer", function (api) {
                var Recipe = api.RecipeType;
                var RecipeRegistry = api.RecipeTypeRegistry;
                var RecipeViewer = /** @class */ (function (_super) {
                    __extends(RecipeViewer, _super);
                    function RecipeViewer() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    RecipeViewer.prototype.getAllList = function () {
                        return self.recipes;
                    };
                    return RecipeViewer;
                }(Recipe));
                RecipeRegistry.register(self.getId(), new RecipeViewer(name, icon, content));
            });
            return this;
        };
        return RecipePool;
    }());
    MachineRegisty.RecipePool = RecipePool;
})(MachineRegisty || (MachineRegisty = {}));
var Machine = /** @class */ (function (_super) {
    __extends(Machine, _super);
    function Machine(id, energy) {
        var _this = _super.call(this) || this;
        StorageInterface.createInterface(id, {
            getInputSlots: _this.getInputSlots,
            getOutputSlots: _this.getOutputSlots
        });
        TileEntity.registerPrototype(id, _this);
        if (energy) {
            _this.energy = energy;
            EnergyTileRegistry.addEnergyTypeForId(id, Ae);
            addConnect(id);
        }
        return _this;
    }
    Machine.prototype.energyTick = function (type, node) {
    };
    Machine.prototype.energyReceive = function (type, amount, voltage) {
        this.data.energy = this.data.energy || 0;
        var energy = Math.min(this.getEnergyCapacity(), this.data.energy + Math.min(amount, this.getEnergyReceve()));
        var receive = energy - this.data.energy;
        this.data.energy = energy;
        return receive;
    };
    Machine.prototype.isConductor = function (type) {
        return true;
    };
    Machine.prototype.canReceiveEnergy = function (side, type) {
        return true;
    };
    Machine.prototype.canExtractEnergy = function (side, type) {
        return false;
    };
    Machine.prototype.getEnergyReceve = function () {
        return 32;
    };
    Machine.prototype.getEnergyСonsumption = function () {
        return 1;
    };
    Machine.prototype.getEnergy = function () {
        return this.data.energy;
    };
    Machine.prototype.getEnergyCapacity = function () {
        return 1000;
    };
    Machine.prototype.canEnergySystem = function () {
        return false;
    };
    Machine.prototype.getProgress = function () {
        return this.data.progress;
    };
    Machine.prototype.getProgressMax = function () {
        return 20;
    };
    Machine.prototype.getInputSlots = function (side) {
        return [];
    };
    Machine.prototype.getOutputSlots = function (side) {
        return [];
    };
    Machine.prototype.getResult = function (input) {
        return null;
    };
    Machine.prototype.canOutput = function () {
        return true;
    };
    Machine.prototype.checkRecipe = function (input, output) {
        var result = this.getResult(input);
        if (!this.canOutput())
            return result;
        if (result) {
            for (var i in output) {
                var item1 = output[i];
                var item2 = result.output[i];
                if ((item1.id != 0 && (item1.id != item2.id || item1.data != item2.data)) || item1.count + item2.count > Item.getMaxStack(item2.id))
                    return null;
            }
            return result;
        }
        return result;
    };
    Machine.prototype.getItems = function (slots) {
        var list = [];
        for (var i in slots)
            list.push(this.container.getSlot(slots[i]));
        return list;
    };
    Machine.prototype.setItems = function (slots, items, func) {
        for (var i in slots) {
            var slot = slots[i];
            var item = this.container.getSlot(slot);
            func(item, items[i]);
            this.container.setSlot(slot, item);
        }
    };
    Machine.prototype.canDegradationProgres = function () {
        return true;
    };
    Machine.prototype.onTick = function () {
        StorageInterface.checkHoppers(this);
        this.data.progress = this.data.progress || 0;
        this.data.energy = this.data.energy || 0;
        this.container.setScale("energy", this.data.energy / this.getEnergyCapacity());
        this.container.setScale("progress", this.getProgress() / this.getProgressMax());
        var input = this.getItems(this.getInputSlots());
        var output = this.getItems(this.getOutputSlots());
        var result = this.checkRecipe(input, output);
        if (this.canEnergySystem() && this.getEnergy() <= 0) {
            this.data.progress = Math.max(0, this.data.progress - 1);
            this.container.sendChanges();
            return;
        }
        if (result) {
            if (this.getProgress() >= this.getProgressMax()) {
                this.setItems(this.getInputSlots(), result.input, function (item1, item2) {
                    if (item2.count != -1)
                        item1.count -= item2.count;
                });
                this.setItems(this.getOutputSlots(), result.output, function (item1, item2) {
                    item1.id = item2.id;
                    item1.count += item2.count;
                });
                this.data.progress = 0;
                this.container.validateAll();
                this.onRecipe();
            }
            this.data.progress++;
            if (this.canEnergySystem())
                this.data.energy -= this.getEnergyСonsumption();
            this.onTickRecipe(result);
        }
        else if (this.canDegradationProgres())
            this.data.progress = Math.max(0, this.data.progress - 1);
        this.container.sendChanges();
    };
    Machine.prototype.onTickRecipe = function (result) {
    };
    Machine.prototype.onRecipe = function () {
    };
    Machine.prototype.getScreenName = function (player, coords) {
        return "main";
    };
    Machine.prototype.getScreenByName = function (screenName) {
        return null;
    };
    return Machine;
}(TileEntityBase));
var MachineBlock = /** @class */ (function (_super) {
    __extends(MachineBlock, _super);
    function MachineBlock(strId, name, texture, model, tile) {
        var _this = _super.call(this, strId) || this;
        _this.addVariation(name, texture, true);
        if (model) {
            if (!Array.isArray(model)) {
                for (var i = 2; i < 6; i++)
                    model.rotate(i).setBlockModel(_this.id, i);
                model.rotate(3).setBlockModel(_this.id, 0);
            }
            else {
                for (var i = 2; i < 6; i++)
                    model[i - 2].setBlockModel(_this.id, i);
                model[0].setBlockModel(_this.id, 0);
            }
        }
        new tile(_this.id, Ae);
        return _this;
    }
    MachineBlock.prototype.getDrop = function (coords, block, level, enchant, item, region) {
        return [[this.id, 1, 0]];
    };
    return MachineBlock;
}(BlockRotative));
/*let TestRecipePool = new MachineRegisty.RecipePool()
    .add([new ItemStack(264, 1), new ItemStack(264, 1)], [new ItemStack(263, 1)]);

let TestUi = new UI.StandardWindow({
    standard: {
        header: {
            text: {text: "Test"}
        },
        background: {
            standard: true
        },
        inventory: {
            standard: true
        }
    },
    elements: {
        "slot1": {type: "slot", x: 60, y: 60, size: 60},
        "slot2": {type: "slot", x: 60, y: 120, size: 60},
        "result": {type: "slot", x: 180, y: 90, size: 60}
    }
});

class TestMachine extends Machine {
    public getInputSlots(side?: number): string[] {
        return ["slot1", "slot2"];
    }

    public getOuputSlots(side?: number): string[] {
        return ["result"];
    }

    public getProgressMax(): number {
        return 60;
    }

    public getResult(input: ItemInstance[]): MachineRegisty.RecipeData {
        return TestRecipePool.get(input);
    }

    public getScreenByName(screenName: string) {
        return TestUi;
    }
}

new TestMachine(5);*/ 
var EntityAI;
(function (EntityAI) {
    var AI = /** @class */ (function () {
        function AI(entity, i) {
            this.remove = false;
            this.entity = entity;
            this.list_id = i;
            this.navigation = Entity.getPathNavigation(entity);
        }
        AI.prototype.canCreate = function () {
            return true;
        };
        AI.prototype.create = function () {
        };
        AI.prototype.canTick = function () {
            return true;
        };
        AI.prototype.tick = function () {
        };
        AI.prototype.dead = function (attacker, damageType) {
        };
        AI.prototype.hurt = function (attacker, damageValue, damageType, someBool1, someBool2) {
        };
        AI.prototype.removeAi = function () {
        };
        AI.prototype.update = function () {
            this.tick();
        };
        AI.prototype.destroy = function () {
            EntityAI.remove(this);
        };
        return AI;
    }());
    EntityAI.AI = AI;
    var ALL_AI = {};
    EntityAI.LIST = [];
    function register(textId, ai) {
        ALL_AI[textId] = ALL_AI[textId] || [];
        ALL_AI[textId].push(ai);
    }
    EntityAI.register = register;
    function add(entity) {
        var textId = Entity.getTypeName(entity);
        var list_ai = ALL_AI[textId];
        if (list_ai) {
            var _loop_2 = function (i) {
                var _ai = new list_ai[i](entity, EntityAI.LIST.length);
                if (!_ai.canCreate())
                    return "continue";
                _ai.create();
                if (_ai.canTick())
                    Updatable.addUpdatable({
                        update: function () {
                            _ai.update();
                            this.remove = _ai.remove;
                        }
                    });
                EntityAI.LIST.push(_ai);
            };
            for (var i in list_ai) {
                _loop_2(i);
            }
        }
    }
    EntityAI.add = add;
    function getAiByEntity(entity) {
        for (var i in EntityAI.LIST)
            if (EntityAI.LIST[i].entity == entity)
                return EntityAI.LIST[i];
        return null;
    }
    EntityAI.getAiByEntity = getAiByEntity;
    function event(entity, name, args) {
        var ai = getAiByEntity(entity);
        if (ai) {
            ai[name].apply(ai, args);
        }
    }
    EntityAI.event = event;
    function remove(ai) {
        if (!ai)
            return;
        ai.removeAi();
        ai.remove = true;
        EntityAI.LIST.splice(ai.list_id, 1);
        for (var i in EntityAI.LIST)
            EntityAI.LIST[i].list_id = Number(i);
    }
    EntityAI.remove = remove;
})(EntityAI || (EntityAI = {}));
Callback.addCallback("EntityDeath", function (entity, attacker, damageType) {
    EntityAI.event(entity, "dead", [attacker, damageType]);
});
Callback.addCallback("EntityHurt", function (attacker, entity, damageValue, damageType, someBool1, someBool2) {
    EntityAI.event(entity, "hurt", [attacker, damageValue, damageType, someBool1, someBool2]);
});
Callback.addCallback("LevelLeft", function () {
    EntityAI.LIST = [];
});
Callback.addCallback("EntityAdded", function (ent) {
    EntityAI.add(ent);
});
Callback.addCallback("EntityRemoved", function (ent) {
    EntityAI.remove(EntityAI.getAiByEntity(ent));
});
var BlockOre = /** @class */ (function (_super) {
    __extends(BlockOre, _super);
    function BlockOre(strId, name, texture, drop) {
        var _this = _super.call(this, strId) || this;
        _this.drop = drop;
        _this.addVariation(name, [texture], true);
        _this.setBlockMaterial("stone", 3);
        return _this;
    }
    BlockOre.prototype.getDrop = function (coords, block, level, enchant, item, region) {
        return [[this.drop, Math.floor(Math.random() * 2) + 1, 0]];
    };
    return BlockOre;
}(BlockBase));
ItemRegistry.createItem("ae_quartz", {
    name: "Quartz",
    icon: "material_certus_quartz_crystal"
});
ItemRegistry.createItem("ae_charged_quartz", {
    name: "Charged quartz",
    icon: "material_certus_quartz_crystal_charged"
});
BlockRegistry.registerBlock(new BlockOre("ae_quartz_ore", "Quartz ore", ["quartz_ore", 0], ItemID.ae_quartz));
BlockRegistry.registerBlock(new BlockOre("ae_charged_quartz_ore", "Charged quartz ore", ["charged_quartz_ore", 0], ItemID.ae_charged_quartz));
Translation.addTranslation("Quartz ore", {
    ru: "Кварцевая руда"
});
Translation.addTranslation("Charged quartz ore", {
    ru: "Заряженная кварцевая руда"
});
Translation.addTranslation("Quartz", {
    ru: "Кварц"
});
Translation.addTranslation("Charged quartz", {
    ru: "Заряженный кварц"
});
ItemRegistry.createItem("ae_material_fluix_crystal", {
    name: "Fluix crystal",
    icon: "material_fluix_crystal"
});
Callback.addCallback("GenerateChunk", function (X, Z, random, id, chunkSeed, worldSeed, dimensionSeed) {
    for (var i = 0; i < 4; i++)
        if (random.nextFloat() < .8)
            GenerationUtils.generateOre(X * 16 + random.nextInt(16), 10 + random.nextInt(40), Z * 16 + random.nextInt(16), BlockID.ae_quartz_ore, 0, 4, false, dimensionSeed);
        else
            GenerationUtils.generateOre(X * 16 + random.nextInt(16), 10 + random.nextInt(40), Z * 16 + random.nextInt(16), BlockID.ae_charged_quartz_ore, 0, 4, false, dimensionSeed);
});
var CHANCE = 1 / 1000;
var CrystalItemAI = /** @class */ (function (_super) {
    __extends(CrystalItemAI, _super);
    function CrystalItemAI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CrystalItemAI.prototype.coordPlus = function (x) {
        var xx = x - Math.floor(x);
        if (xx > .8)
            return Math.floor(x + .25);
        return Math.floor(x);
    };
    CrystalItemAI.prototype.canWater = function (x, y, z) {
        y = Math.floor(y - .5);
        x = this.coordPlus(x);
        z = this.coordPlus(z);
        var id = this.region.getBlockId(x, y, z);
        return id == VanillaBlockID.water || id == VanillaBlockID.flowing_water;
    };
    CrystalItemAI.prototype.canCreate = function () {
        var item = Entity.getDroppedItem(this.entity);
        for (var i in CrystalItemAI.ITEM_LIST) {
            var crystak_info = CrystalItemAI.ITEM_LIST[i];
            if (crystak_info.id == item.id && item.data < crystak_info.max) {
                this.crystal_info = crystak_info;
                return true;
            }
        }
        return false;
    };
    CrystalItemAI.prototype.create = function () {
        this.region = BlockSource.getDefaultForActor(this.entity);
    };
    CrystalItemAI.prototype.tick = function () {
        var pos = Entity.getPosition(this.entity);
        if (Math.random() < CHANCE && this.canWater(pos.x, pos.y, pos.z)) {
            var item = Entity.getDroppedItem(this.entity);
            Entity.setDroppedItem(this.entity, 0, 0, 0);
            Entity.damageEntity(this.entity, 999999);
            this.region.spawnDroppedItem(pos.x, pos.y, pos.z, item.id, item.count, item.data + 1);
        }
    };
    CrystalItemAI.addCrystal = function (id, max) {
        this.ITEM_LIST.push({ id: id, max: max });
    };
    CrystalItemAI.ITEM_LIST = [];
    return CrystalItemAI;
}(EntityAI.AI));
var FluixCryatalRecipe = new MachineRegisty.RecipePool("transform")
    .registerRecipeViewer("Transform", ItemID.icon_info, {
    elements: {
        input0: { type: "slot", x: 100, y: 100, size: 100 },
        input1: { type: "slot", x: 210, y: 100, size: 100 },
        input2: { type: "slot", x: 320, y: 100, size: 100 },
        output0: { type: "slot", x: 100, y: 210, size: 100 },
    }
});
var FluixCryatalAI = /** @class */ (function (_super) {
    __extends(FluixCryatalAI, _super);
    function FluixCryatalAI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FluixCryatalAI.prototype.canCreate = function () {
        var item = Entity.getDroppedItem(this.entity);
        return FluixCryatalAI.item_check.indexOf(item.id) != -1;
    };
    FluixCryatalAI.prototype.tick = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        var pos = Entity.getPosition(this.entity);
        if (this.canWater(pos.x, pos.y, pos.z)) {
            var ents = Entity.getAllInRange(pos, 1, Native.EntityType.ITEM);
            var input = [];
            var dimension = Entity.getDimension(this.entity);
            try {
                for (var ents_1 = __values(ents), ents_1_1 = ents_1.next(); !ents_1_1.done; ents_1_1 = ents_1.next()) {
                    var ent = ents_1_1.value;
                    if (Entity.getDimension(ent) == dimension)
                        input.push(Entity.getDroppedItem(ent));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (ents_1_1 && !ents_1_1.done && (_a = ents_1.return)) _a.call(ents_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var recipe = FluixCryatalRecipe.get(input);
            if (recipe) {
                try {
                    for (var _d = __values(recipe.output), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var item = _e.value;
                        this.region.spawnDroppedItem(pos.x, pos.y, pos.z, item.id, item.count, item.data, item.extra || null);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                try {
                    for (var ents_2 = __values(ents), ents_2_1 = ents_2.next(); !ents_2_1.done; ents_2_1 = ents_2.next()) {
                        var ent = ents_2_1.value;
                        var item = Entity.getDroppedItem(ent);
                        item.count -= 1;
                        Entity.setDroppedItem(ent, item.id, item.count, item.data, item.extra || null);
                        if (item.count < 1)
                            Entity.damageEntity(ent, 999999);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (ents_2_1 && !ents_2_1.done && (_c = ents_2.return)) _c.call(ents_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
    };
    FluixCryatalAI.addItemCheck = function (id) {
        this.item_check.push(id);
    };
    FluixCryatalAI.item_check = [];
    return FluixCryatalAI;
}(CrystalItemAI));
EntityAI.register("minecraft:item<>", CrystalItemAI);
EntityAI.register("minecraft:item<>", FluixCryatalAI);
var CrystalItem = /** @class */ (function (_super) {
    __extends(CrystalItem, _super);
    function CrystalItem(strId, name, name2, icon, max) {
        var _this = _super.call(this, strId, name, icon) || this;
        CrystalItemAI.addCrystal(_this.id, max);
        ItemRegistry.registerItemFuncs(_this.id, _this);
        JavaItem.setShouldDespawn(_this.id, false);
        _this.max = max;
        _this.name2 = name2;
        for (var i = 1; i < max + 1; i++)
            Item.addToCreative(_this.id, 1, i);
        Item.addCreativeGroup("crystal", "Crystal", [_this.id]);
        return _this;
    }
    CrystalItem.prototype.onIconOverride = function (item, isModUi) {
        return { name: this.icon.name, data: item.data };
    };
    CrystalItem.prototype.onNameOverride = function (item, translation, name) {
        return (item.data < this.max ? translation : Translation.translate(this.name2)) + "\nstage: " + item.data;
    };
    return CrystalItem;
}(ItemCommon));
ItemRegistry.registerItem(new CrystalItem("crystal_seed_certus", "Crystal seed certus", "Crystal certus", "crystal_seed_certus", 3));
ItemRegistry.registerItem(new CrystalItem("crystal_seed_fluix", "Crystal seed fluix", "Fluix crystal", "crystal_seed_fluix", 3));
ItemRegistry.registerItem(new CrystalItem("crystal_seed_nether", "Crystal seed nether", "Crystal nether", "crystal_seed_nether", 3));
Translation.addTranslation("Crystal seed certus", {
    ru: "Хрустальные семена certus"
});
Translation.addTranslation("Crystal certus", {
    ru: "Кристалл цертус"
});
Translation.addTranslation("Crystal seed fluix", {
    ru: "Семена изменчивого кристаллла"
});
Translation.addTranslation("Fluix crystal", {
    ru: "Изменчивый кристалл"
});
Translation.addTranslation("Crystal seed nether", {
    ru: "Семена кристалл кварца нижнего мира"
});
Translation.addTranslation("Crystal nether", {
    ru: "Кристалл кварца нижнего мира"
});
var PressItem = /** @class */ (function (_super) {
    __extends(PressItem, _super);
    function PressItem(strId, name, texture) {
        var _this = _super.call(this, strId, name, texture) || this;
        _this.setMaxStack(1);
        return _this;
    }
    return PressItem;
}(ItemCommon));
//press
ItemRegistry.registerItem(new PressItem("ae_calculation_processor_press", "Calculation processor press", "material_calculation_processor_press"));
ItemRegistry.registerItem(new PressItem("ae_engineering_processor_press", "Engineering processor press", "material_engineering_processor_press"));
ItemRegistry.registerItem(new PressItem("ae_logic_processor_press", "Logic processor press", "material_logic_processor_press"));
ItemRegistry.registerItem(new PressItem("ae_silicon_press", "Silicon press", "material_silicon_press"));
Translation.addTranslation("Calculation processor press", {
    ru: "Математический пресс"
});
Translation.addTranslation("Engineering processor press", {
    ru: "Инженеренный пресс"
});
Translation.addTranslation("Logic processor press", {
    ru: "Логический пресс"
});
Translation.addTranslation("Silicon press", {
    ru: "Кремневый пресс"
});
ItemRegistry.createItem("ae_formation_core", {
    name: "Formation core",
    icon: "material_formation_core"
});
ItemRegistry.createItem("ae_annihilation_core", {
    name: "Annihilation core",
    icon: "material_annihilation_core"
});
ItemRegistry.createItem("ae_material_calculation_processor_print", {
    name: "Calculation processor print",
    icon: "material_calculation_processor_print"
});
ItemRegistry.createItem("ae_material_calculation_processor", {
    name: "Calculation processor",
    icon: "material_calculation_processor"
});
ItemRegistry.createItem("ae_material_engineering_processor_print", {
    name: "Engineering processor print",
    icon: "material_engineering_processor_print"
});
ItemRegistry.createItem("ae_material_engineering_processor", {
    name: "Engineering processor",
    icon: "material_engineering_processor"
});
ItemRegistry.createItem("ae_material_logic_processor_print", {
    name: "Logic processor",
    icon: "material_logic_processor_print"
});
ItemRegistry.createItem("ae_material_logic_processor", {
    name: "Logic processor",
    icon: "material_logic_processor"
});
ItemRegistry.createItem("ae_material_silicon_print", {
    name: "Silicon print",
    icon: "material_silicon_print"
});
Item.addCreativeGroup("Processor", "Processor", [
    ItemID.ae_material_calculation_processor_print,
    ItemID.ae_material_calculation_processor,
    ItemID.ae_material_engineering_processor_print,
    ItemID.ae_material_engineering_processor,
    ItemID.ae_material_logic_processor_print,
    ItemID.ae_material_logic_processor,
    ItemID.ae_material_silicon_print
]);
ItemRegistry.createItem("ae_material_certus_quartz_dust", {
    name: "Certus quartz dust",
    icon: "material_certus_quartz_dust"
});
ItemRegistry.createItem("ae_material_fluix_dust", {
    name: "Fluix dust",
    icon: "material_fluix_dust"
});
ItemRegistry.createItem("ae_material_nether_quartz_dust", {
    name: "Nether quartz dust",
    icon: "material_nether_quartz_dust"
});
Item.addCreativeGroup("dust", "Dust", [
    ItemID.ae_material_certus_quartz_dust,
    ItemID.ae_material_fluix_dust,
    ItemID.ae_material_nether_quartz_dust
]);
ItemRegistry.createItem("ae_wooden_gear", {
    name: "Wooden gear",
    icon: "material_wooden_crank"
});
Translation.addTranslation("Wooden gear", {
    ru: "Деревянная шестерёнка"
});
ItemRegistry.createItem("ae_silicon", {
    name: "Silicon",
    icon: "material_silicon"
});
Translation.addTranslation("Silicon", {
    ru: "Кремний"
});
var BLOCK_TYPE_STONE = Block.createSpecialType({
    solid: false,
    renderlayer: 3,
    destroytime: 1.5,
    explosionres: 30,
    translucency: 0,
    rendertype: 0,
    lightopacity: 15,
    base: 1, renderallfaces: true
});
var BLOCK_TYPE_CONTROLLER = Block.createSpecialType({
    solid: true,
    renderlayer: 3,
    destroytime: 1.5,
    explosionres: 30,
    translucency: 0,
    rendertype: 0,
    lightopacity: 15,
    lightlevel: 3,
    base: 1
});
var BLOCK_TYPE_CABLE = Block.createSpecialType({
    solid: false,
    renderlayer: 1,
    destroytime: 1.5,
    explosionres: 30,
    translucency: 0,
    rendertype: 0,
    lightopacity: 0,
    base: 20,
    sound: "glass"
});
var DATA_CABLE_DEFAULT = COLORS.indexOf("transparent");
(function () {
    var cables = [];
    for (var i in COLORS)
        cables.push({
            name: "ME glass cable " + COLORS[i],
            texture: [["ae_cable_" + COLORS[i], 0]],
            inCreative: true
        });
    Translation.addTranslation("ME glass cable " + COLORS[i], {
        ru: "ME стеклянный кабель " + COLORS[i]
    });
    IDRegistry.genBlockID("ae_network_cable");
    Block.createBlock("ae_network_cable", cables, BLOCK_TYPE_CABLE);
    Ae.registerWire(BlockID.ae_network_cable, 9e99);
    for (var i in cables) {
        setWireModel("ae", BlockID.ae_network_cable, Number(i));
        if (Number(i) == DATA_CABLE_DEFAULT) {
            Recipes.addShaped({ id: BlockID.ae_network_cable, count: 1, data: DATA_CABLE_DEFAULT }, [
                "ab"
            ], ["a", BlockID.ae_network_cable, -1, "b", VanillaItemID.water_bucket, 0], function (api, field, result, player) {
                for (var i_1 = 0; i_1 < field.length; i_1++) {
                    if (field[i_1].id == VanillaItemID.water_bucket)
                        api.getFieldSlot(i_1).set(VanillaItemID.bucket, 1, 0, null);
                    else
                        api.decreaseFieldSlot(i_1);
                }
            });
            continue;
        }
        Recipes.addShaped({ id: BlockID.ae_network_cable, count: 8, data: Number(i) }, [
            "aaa",
            "aba",
            "aaa"
        ], ["a", BlockID.ae_network_cable, DATA_CABLE_DEFAULT, "b", VanillaItemID[COLORS[i] + "_dye"] || 1, 0]);
    }
    AppliedEnergistics.setFlag(BlockID.ae_network_cable, "cable");
    Item.addCreativeGroup("aecables", Translation.translate("Cables"), [
        BlockID.ae_network_cable
    ]);
    function getElements(network, name) {
        var length = network.getInt(name);
        var result = [];
        for (var i = 0; i < length; i++)
            result[i] = { model: String(network.getString(name + "_" + i)), connection: Number(network.getFloat(name + "_1_" + i)) };
        return result;
    }
    TileEntity.registerPrototype(BlockID.ae_network_cable, {
        useNetworkItemContainer: true,
        defaultValues: {
            del: true,
            tick: 0,
            sides: null
        },
        containerEvents: {
            event: function (data) {
                getController(this).useAll("serverEvent", [data]);
            }
        },
        client: new RenderUtil.TileEntityClient({
            containerEvents: {
                linkToServer: function (container, window, content, data) {
                    for (var key in data)
                        this[key] = data[key];
                },
                event: function (container, window, content, data) {
                    SubTileController.getSubTile(data.id).clientEvent(container, window, content, data);
                }
            },
            buildModelSide: function (result, side, model, tiles) {
                var central = model.getBoxes()["central"];
                var cable = false;
                for (var i in result) {
                    model.addModel(CacheFacede.get(result[i].model + "_" + side));
                    var connection = result[i].connection;
                    if (!connection || cable)
                        continue;
                    var box = JSON.parse(JSON.stringify(WIRE_BOXES[side]));
                    if (box.replaced < 3)
                        box.box[box.replaced] += .5 - connection;
                    else
                        box.box[box.replaced] = box.box[box.replaced - 3] + connection - 2 / 16;
                    model.addBoxByBlock("c" + side, box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], central.id, central.data);
                    cable = true;
                }
            },
            buildModel: function (model) {
                var sides = [];
                for (var i = 0; i < 6; i++)
                    sides[i] = getElements(this.networkData, i);
                for (var i in sides)
                    this.buildModelSide(sides[i], i, model);
            }
        }),
        getEnergy: function () {
            var controller = getController(this);
            var sum = 0;
            controller.forEach(function (tile) {
                sum += tile.getEnergy();
            });
            return sum;
        },
        setElements: function (name, tiles) {
            this.networkData.putInt(name, tiles.length);
            for (var i in tiles) {
                this.networkData.putString(name + "_" + i, String(SubTileController.getSubTile(tiles[i].data.id).getNameModel()));
                this.networkData.putFloat(name + "_1_" + i, tiles[i].getConnectionCable());
            }
        },
        load: function () {
            this.updateModel();
            if (getController(this).canUseTick())
                this.tick = CALBLE_TICK;
            var self = this;
            this.container.addServerCloseListener(function (container, client) {
                getController(self).useMethodById(self.self_id, "close", [container, client]);
                self.self_id = undefined;
            });
            this.container.addServerOpenListener(function (container, client, str) {
                getController(self).useMethodById(self.self_id, "open", [container, client, str]);
            });
        },
        unload: function () {
            getController(this).save();
        },
        updateModel: function () {
            if (this.data.sides === null)
                this.data.sides = [[], [], [], [], [], []];
            var key = this.blockID + ":" + this.blockSource.getBlockData(this.x, this.y, this.z);
            var tiles = getController(this).getTiles();
            for (var i in tiles)
                this.setElements(i, tiles[i]);
            RenderUtil.updateModelTileEntity(this.networkData, "facede", key);
            this.networkData.sendChanges();
            var model = RenderUtil.getGroup("facede").get(key).copy();
            for (var i in this.data.sides)
                this.client.buildModelSide(this.data.sides[i], i, model, tiles[i]);
            BlockRenderer.mapCollisionAndRaycastModelAtCoords(this.dimension, this.x, this.y, this.z, model.getCollisionShape());
        },
        canAdded: function (id, side) {
            var prot = SubTileController.getSubTile(id);
            if (prot) {
                if (this.data.sides === null)
                    return true;
                return prot.canAdded(this.data.sides[side]);
            }
            return false;
        },
        add: function (id, side) {
            if (this.data.sides === null)
                this.data.sides = [[], [], [], [], [], []];
            getController(this).save();
            this.data.sides[side].push({ id: id });
            uptController(this);
            this.updateModel();
        },
        destroyBlock: function () {
            getController(this).dropItem();
        },
        getScreenName: function (player, coords) {
            var item = Entity.getCarriedItem(player);
            var result = getController(this).click(item.id, item.count, item.data, coords, player, item.extra, "getScreenName");
            if (result && typeof result.value == "string") {
                this.self_id = result.self_id;
                return result.value + ":" + result.id;
            }
        },
        getScreenByName: function (name, container) {
            var id = name.split(":");
            var machine = SubTileController.getSubTile(id[1]);
            return machine.getScreenByName(id[0], container);
        },
        click: function (id, count, data, coords, player, extra) {
            getController(this).click(id, count, data, coords, player, extra, "click");
        },
        tick: function () {
            if (this.data.tick == 5)
                if (this.data.del) {
                    this.selfDestroy();
                    this.tick = undefined;
                    return;
                }
                else {
                    this.tick = undefined;
                    return;
                }
            this.data.tick++;
        }
    });
})();
var CHECK_POS = [
    { x: -1, y: 0, z: 0 },
    { x: 1, y: 0, z: 0 },
    { x: 0, y: -1, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: 0, y: 0, z: -1 },
    { x: 0, y: 0, z: 1 },
];
;
var ControllerTile = /** @class */ (function (_super) {
    __extends(ControllerTile, _super);
    function ControllerTile(id) {
        var _this = _super.call(this) || this;
        TileEntity.registerPrototype(id, _this);
        addConnect(id);
        return _this;
    }
    ControllerTile.prototype.updateNetwork = function (x, y, z, tiles, cables, blocks) {
        tiles = tiles || [];
        cables = cables || [];
        blocks = blocks || [];
        for (var i in CHECK_POS) {
            var pos = CHECK_POS[i];
            pos = {
                x: pos.x + x,
                y: pos.y + y,
                z: pos.z + z
            };
            if (pos.x == this.x && pos.y == this.y && pos.z == this.z)
                continue;
            var block = this.blockSource.getBlock(pos.x, pos.y, pos.z);
            if (AppliedEnergistics.isFlag(block.id, "cable")) {
                var key = pos.x + ":" + pos.y + ":" + pos.z;
                var tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, this.blockSource);
                if (tile)
                    tile.controller = this;
                if (cables.indexOf(key) == -1)
                    cables.push(key);
                else
                    continue;
                this.updateNetwork(pos.x, pos.y, pos.z, tiles, cables, blocks);
            }
            else if (AppliedEnergistics.isFlag(block.id, "block")) {
                var key = pos.x + ":" + pos.y + ":" + pos.z;
                if (blocks.indexOf(key) == -1)
                    blocks.push(key);
                else
                    continue;
                var tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, this.blockSource);
                if (!tile)
                    tile = TileEntity.addTileEntity(pos.x, pos.y, pos.z, this.blockSource);
                if (!tile)
                    continue;
                tile.controller = this;
                tiles.push(tile);
            }
            else if (block.id == BlockID.ae_controller) {
                for (var i_2 in tiles)
                    tiles[i_2].controller = undefined;
                for (var i_3 in cables)
                    cables[i_3].controller = undefined;
                return { mechanisms: [], cables: [] };
            }
        }
        return { mechanisms: tiles, cables: cables };
    };
    ControllerTile.prototype.getStorageEnergy = function () {
        if (!this.cache)
            return 0;
        var storage = 0;
        for (var i in this.cache.mechanisms) {
            var mechanism = this.cache.mechanisms[i];
            if (mechanism.getType() == "energy_cell")
                storage += mechanism.data.energy || 0;
        }
        return storage;
    };
    ControllerTile.prototype.getStorageEnergyMax = function () {
        if (!this.cache)
            return 0;
        var storage = 0;
        for (var i in this.cache.mechanisms) {
            var mechanism = this.cache.mechanisms[i];
            if (mechanism.getType() == "energy_cell")
                storage += mechanism.getStorageMax();
        }
        return storage;
    };
    ControllerTile.prototype.setEnergy = function (energy) {
        if (!this.cache)
            return;
        for (var i in this.cache.mechanisms) {
            var mechanism = this.cache.mechanisms[i];
            if (mechanism.getType() != "energy_cell")
                continue;
            if (energy == 0)
                mechanism.data.energy = 0;
            var max = mechanism.getStorageMax();
            var value = energy - max;
            if (value < 0) {
                mechanism.data.energy = energy;
                energy = 0;
            }
            else {
                mechanism.data.energy = max;
                energy -= max;
            }
        }
        return energy;
    };
    ControllerTile.prototype.optimizationArray = function (array) {
        var result = [];
        var items = {};
        for (var i in array) {
            var item = array[i];
            if (item.extra) {
                result.push(item);
                continue;
            }
            if (items[item.id + ":" + item.data])
                items[item.id + ":" + item.data].count += item.count;
            else
                items[item.id + ":" + item.data] = item;
        }
        for (var key in items)
            result.push(items[key]);
        return result;
    };
    ControllerTile.prototype.getItems = function () {
        if (!this.cache)
            return [];
        var items = [];
        for (var i in this.cache.mechanisms) {
            var mechanism = this.cache.mechanisms[i];
            if (mechanism.getType() != "storage")
                continue;
            pushToArray(items, mechanism.getItems());
        }
        return this.optimizationArray(items);
    };
    ControllerTile.prototype.mathItems = function (items, max) {
        var count = 0;
        var result = [];
        var not = [];
        for (var i in items) {
            var item = items[i];
            if (item.count < 1)
                continue;
            if (count + item.count <= max) {
                count += item.count;
                result.push(item);
            }
            else if (count <= max) {
                var value = max - count;
                count += value;
                result.push({ id: item.id, count: value, data: item.data, extra: item.extra });
                item.count -= value;
                not.push(item);
            }
            else
                not.push(item);
        }
        return { result: result, items: not };
    };
    ControllerTile.prototype.setItems = function (items) {
        if (!this.cache)
            return items;
        for (var i in this.cache.mechanisms) {
            var mechanism = this.cache.mechanisms[i];
            if (mechanism.getType() != "storage")
                continue;
            var driver = mechanism.getDrivers();
            for (var a in driver) {
                var max = AppliedEnergistics.getDrive(driver[a].item.id);
                if (!max)
                    continue;
                var result = this.mathItems(items, max);
                AppliedEnergistics.setItems(driver[a].item.extra, result.result);
                mechanism.setSlot(driver[a].slot, driver[a].item);
                items = result.items;
            }
        }
        return items;
    };
    ControllerTile.prototype.onTick = function () {
        if (World.getThreadTime() % 20 == 0) {
            if (this.cache) {
                for (var i in this.cache.mechanisms)
                    this.cache.mechanisms[i].controller = undefined;
                for (var i in this.cache.cables)
                    this.cache.cables[i].controller = undefined;
            }
            this.cache = this.updateNetwork(this.x, this.y, this.z);
            if (this.cache) {
                var energy = this.cache.cables.length * 2;
                for (var i in this.cache.mechanisms) {
                    var mechanism = this.cache.mechanisms[i];
                    energy += mechanism.getEnergy();
                }
                this.energy = energy;
            }
            else {
                this.energy = 0;
            }
            var value = this.cache ? this.getStorageEnergy() - this.energy : -1;
            if (!this.cache || value < 0)
                this.blockSource.setBlock(this.x, this.y, this.z, this.blockID, 0);
            else {
                this.blockSource.setBlock(this.x, this.y, this.z, this.blockID, 1);
                this.setEnergy(value);
            }
        }
    };
    ControllerTile.prototype.destroyBlock = function (coords, player) {
        var arr = this.updateNetwork(this.x, this.y, this.z);
        if (!arr)
            return;
        for (var i in arr.mechanisms)
            arr.mechanisms[i].controller = undefined;
        for (var i in arr.cables)
            if (arr.cables[i])
                arr.cables[i].controller = undefined;
    };
    ControllerTile.prototype.onItemUse = function (coords, item, player) {
        if (__config__.getBool("debug")) {
            Debug.m(this.getStorageEnergy() + "/" + this.getStorageEnergyMax());
            Debug.m(this.energy);
            Debug.m(this.getItems());
        }
        return false;
    };
    return ControllerTile;
}(TileEntityBase));
var AppliedTile = /** @class */ (function (_super) {
    __extends(AppliedTile, _super);
    function AppliedTile(id) {
        var _this = _super.call(this) || this;
        _this.register(id);
        addConnect(id);
        AppliedEnergistics.setFlag(id, "block");
        TileEntity.registerPrototype(id, _this);
        return _this;
    }
    AppliedTile.prototype.register = function (id) {
    };
    AppliedTile.prototype.getType = function () {
        return "block";
    };
    AppliedTile.prototype.getStorageMax = function () {
        return 0;
    };
    AppliedTile.prototype.getEnergy = function () {
        return 0;
    };
    AppliedTile.prototype.getItems = function () {
        return [];
    };
    AppliedTile.prototype.getDrivers = function () {
        return [];
    };
    AppliedTile.prototype.setSlot = function (name, item) {
    };
    AppliedTile.prototype.getScreenName = function (player, coords) {
        return "main";
    };
    AppliedTile.prototype.getScreenByName = function (screenName) {
        return null;
    };
    return AppliedTile;
}(TileEntityBase));
var ControllerBlock = /** @class */ (function (_super) {
    __extends(ControllerBlock, _super);
    function ControllerBlock(strId, blockType, name, disable, enable, layer) {
        var _this = _super.call(this, strId, blockType) || this;
        _this.addVariation(name, disable, true);
        _this.addVariation(name, enable, false);
        setBlockLayer(_this.id, 1, layer);
        new ControllerTile(_this.id);
        return _this;
    }
    ControllerBlock.prototype.getDrop = function (coords, block, level, enchant, item, region) {
        return [[this.id, 1, 0]];
    };
    return ControllerBlock;
}(BlockBase));
BlockRegistry.registerBlock(new ControllerBlock("ae_controller", BLOCK_TYPE_CONTROLLER, "ME Controller", [["ae_controller", 0]], [["ae_controller_powered", 0]], [
    [["ae_controller_lights", 0]]
]));
Translation.addTranslation("ME Controller", {
    ru: "ME Контроллер"
});
IDRegistry.genBlockID("ae_energy_acceptor");
Block.createBlock("ae_energy_acceptor", [
    {
        name: "Energy acceptor",
        texture: [["energy_acceptor", 0]],
        inCreative: true
    }
], BLOCK_TYPE_CONTROLLER);
Translation.addTranslation("Energy acceptor", {
    ru: "Приёмщик энергии"
});
var EnergyAcceptor = /** @class */ (function (_super) {
    __extends(EnergyAcceptor, _super);
    function EnergyAcceptor(id) {
        var _this = _super.call(this, id) || this;
        addConnect(id, -1, "ic-wire");
        EnergyTileRegistry.addEnergyTypeForId(id, EU);
        return _this;
    }
    EnergyAcceptor.prototype.energyTick = function (type, node) {
        if (type != "Ae")
            return;
        var add = Math.min(this.data.energy, 100);
        this.data.energy -= add;
        node.add(add);
    };
    EnergyAcceptor.prototype.isConductor = function (type) {
        return true;
    };
    EnergyAcceptor.prototype.canReceiveEnergy = function (side, type) {
        return true;
    };
    EnergyAcceptor.prototype.canExtractEnergy = function (side, type) {
        return true;
    };
    EnergyAcceptor.prototype.getType = function () {
        return "energy_acceptor";
    };
    EnergyAcceptor.prototype.energyReceive = function (type, amount, voltage) {
        if (type == "Ae")
            return 0;
        this.data.energy = this.data.energy || 0;
        var amount_ = amount;
        if (this.data.energy < 100)
            amount_ /= 2;
        var result = 0;
        var controller = this.controller;
        if (controller) {
            var add = Math.min(amount_, 100);
            var storage = controller.getStorageEnergy();
            var max = controller.getStorageEnergyMax();
            if (storage < max) {
                controller.setEnergy(Math.min(storage + add, max));
                result += add;
            }
        }
        amount_ = amount - result;
        var energy = Math.min(this.data.energy + Math.min(amount_, 64), 100);
        result += energy - this.data.energy;
        this.data.energy = energy;
        return result;
    };
    return EnergyAcceptor;
}(AppliedTile));
new EnergyAcceptor(BlockID.ae_energy_acceptor);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ae_energy_acceptor, Ae);
var EnergyCellTile = /** @class */ (function (_super) {
    __extends(EnergyCellTile, _super);
    function EnergyCellTile(id, storage_max, data_max) {
        var _this = _super.call(this, id) || this;
        EnergyCellTile.cells[id] = [storage_max, data_max];
        return _this;
    }
    EnergyCellTile.prototype.getType = function () {
        return "energy_cell";
    };
    EnergyCellTile.prototype.getStorageMax = function () {
        return EnergyCellTile.cells[this.blockID][0];
    };
    EnergyCellTile.prototype.onTick = function () {
        var info = EnergyCellTile.cells[this.blockID];
        this.blockSource.setBlock(this.x, this.y, this.z, this.blockID, Math.floor((this.data.energy || 0) / info[0] * info[1]));
    };
    EnergyCellTile.cells = {};
    return EnergyCellTile;
}(AppliedTile));
var EnergyCellBlock = /** @class */ (function (_super) {
    __extends(EnergyCellBlock, _super);
    function EnergyCellBlock(texture, storage_max, data_max) {
        var _this = _super.call(this, "ae_" + texture, BLOCK_TYPE_STONE) || this;
        for (var i = 0; i <= data_max; i++)
            _this.addVariation("Energy cell", [[texture, i]], i == 0);
        new EnergyCellTile(_this.id, storage_max, data_max);
        return _this;
    }
    EnergyCellBlock.prototype.getDrop = function (coords, block, level, enchant, item, region) {
        return [[this.id, 1, 0]];
    };
    return EnergyCellBlock;
}(BlockBase));
BlockRegistry.registerBlock(new EnergyCellBlock("energy_cell", 200000, 8));
BlockRegistry.registerBlock(new EnergyCellBlock("dense_energy_cell", 1600000, 8));
var DriveUI = new UI.StandardWindow({
    standard: {
        header: {
            text: {
                text: "Driver"
            },
        },
        inventory: {
            standard: true
        },
        background: {
            standard: true
        }
    },
    elements: {}
});
(function () {
    var X = 500 - (180 / 2);
    var Y = 25;
    var size = 65;
    var content = DriveUI.getContent();
    for (var x = 0; x < 2; x++)
        for (var y = 0; y < 5; y++)
            content.elements["s_" + x + "_" + y] = { type: "slot", x: X + (x * size), y: Y + (y * size), size: size - 5 };
})();
var DriveApplied = /** @class */ (function (_super) {
    __extends(DriveApplied, _super);
    function DriveApplied() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.useNetworkItemContainer = true;
        return _this;
    }
    DriveApplied.prototype.getDrivers = function () {
        var items = [];
        for (var y = 0; y < 5; y++)
            for (var x = 0; x < 2; x++)
                items.push({ slot: "s_" + x + "_" + y, item: AppliedEnergistics.getDriveSlot(this.container, "s_" + x + "_" + y) });
        return items;
    };
    DriveApplied.prototype.getEnergy = function () {
        var energy = 5;
        var drivers = this.getDrivers();
        for (var i in drivers)
            if (AppliedEnergistics.getDrive(drivers[i].item.id))
                energy += 5;
        return energy;
    };
    DriveApplied.prototype.getType = function () {
        return "storage";
    };
    DriveApplied.prototype.getItems = function () {
        var items = [];
        var drivers = this.getDrivers();
        for (var i in drivers)
            if (AppliedEnergistics.getDrive(drivers[i].item.id))
                pushToArray(items, AppliedEnergistics.getItems(drivers[i].item.extra));
        return items;
    };
    DriveApplied.prototype.setSlot = function (name, item) {
        this.container.setSlot(name, item.id, item.count, item.data, item.extra);
    };
    DriveApplied.prototype.getScreenByName = function (screenName) {
        return DriveUI;
    };
    return DriveApplied;
}(AppliedTile));
var DriveBlock = /** @class */ (function (_super) {
    __extends(DriveBlock, _super);
    function DriveBlock(strId, name, texture) {
        var _this = _super.call(this, strId, BLOCK_TYPE_STONE) || this;
        _this.addVariation(name, texture, true);
        new DriveApplied(_this.id);
        return _this;
    }
    return DriveBlock;
}(BlockRotative));
BlockRegistry.registerBlock(new DriveBlock("ae_drive", "Drive", [
    ["drive_bottom", 0],
    ["drive_top", 0],
    ["drive_side", 0],
    ["drive_front_flat", 0],
    ["drive_side", 0],
    ["drive_side", 0]
]));
ItemRegistry.createItem("ae_facade_cable_anchor", {
    name: "Cable anchor",
    icon: "",
    inCreative: true
});
new RenderUtil.Model()
    .add(5 / 16, 7 / 16, 7 / 16, 10 / 16, 9 / 16, 9 / 16, "charger_side")
    .setItemModel(ItemID.ae_facade_cable_anchor);
Callback.addCallback("PostLoaded", function () {
    var _loop_3 = function (i) {
        var id = cutting_knifes[i];
        Recipes.addShapeless({ id: ItemID.ae_facade_cable_anchor, count: 3, data: 0 }, [
            { id: VanillaItemID.iron_ingot, data: 0 }, { id: id, data: -1 }
        ], function (api, field, result, player) {
            for (var i_4 = 0; i_4 < field.length; i_4++) {
                if (field[i_4].id == id) {
                    field[i_4].data++;
                    if (field[i_4].data >= Item.getMaxDamage(id))
                        field[i_4].id = field[i_4].count = field[i_4].data = 0;
                }
                else
                    api.decreaseFieldSlot(i_4);
            }
        });
    };
    for (var i in cutting_knifes) {
        _loop_3(i);
    }
});
var faceds = [];
function createFacede(textId, id, data) {
    var facade = "ae_facade_" + textId + (data === 0 ? "" : data);
    IDRegistry.genItemID(facade);
    Item.createItem(facade, "Storage facade " + textId, { name: "", meta: 0 }, { stack: 64, isTech: false });
    var numId = ItemID[facade];
    Item.registerUseFunctionForID(numId, funcAddedFacede);
    AppliedEnergistics.setFlag(numId, "facade");
    var Facade = /** @class */ (function (_super) {
        __extends(Facade, _super);
        function Facade() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Facade.canAdded = function (sides) {
            return SubTileController.canAdded(sides, ["facade"]);
        };
        Facade.getNameModel = function () {
            return facade;
        };
        return Facade;
    }(SubTile));
    SubTileController.registry(numId, Facade);
    FacedeModel(ItemID[facade], id, data, 2, facade);
    for (var i = 0; i < 6; i++)
        FacedeModel(null, id, data, i, facade);
    faceds.push({ item: ItemID[facade], id: id });
    Recipes.addShaped({ id: ItemID[facade], count: 1, data: 0 }, [
        " b ",
        "bab",
        " b "
    ], ["a", id, 0, "b", ItemID.ae_facade_cable_anchor, 0]);
    Item.addCreativeGroup("facade", "Facade", [ItemID[facade]]);
}
var JsonFacade = FileTools.ReadJSON(__dir__ + "facede.json");
Callback.addCallback("ModsLoaded", function () {
    for (var i in JsonFacade) {
        var obj = JsonFacade[i];
        var split = obj.id.split(".");
        if (split.length == 2)
            var textId = split[1];
        else
            var textId = obj.textId;
        if (obj.datas)
            for (var a in obj.datas)
                createFacede(textId, eval(obj.id), obj.datas[a]);
        else
            createFacede(textId, eval(obj.id), 0);
    }
});
Translation.addTranslation("Dispaly", {
    ru: "Экран"
});
ItemRegistry.createItem("ae_display_material", {
    name: "Display",
    icon: ""
});
ItemRegistry.createItem("ae_display", {
    name: "Display",
    icon: ""
});
function setModelDisplay(id, texture1, texture2, group) {
    if (texture1 === void 0) { texture1 = ["ae_sides", 0]; }
    if (texture2 === void 0) { texture2 = ["ae_terminal", 0]; }
    if (group === void 0) { group = "ae_display"; }
    var p = 2 / 16;
    for (var i = 0; i < 6; i++) {
        var textures = [];
        for (var a = 0; a < 6; a++)
            if (a == i)
                textures.push(texture2);
            else
                textures.push(texture1);
        TerminalModel(id, textures, i, group);
    }
    new RenderUtil.Model()
        .add(p, p, 1 - p, 1 - p, 1 - p, 1 + LAYER, [texture1, texture1, texture1, texture2, texture1, texture1])
        .setItemModel(id);
}
;
setModelDisplay(ItemID.ae_display);
setModelDisplay(ItemID.ae_display_material, undefined, ["monitor_back", 0], "ae_display_material");
Item.registerUseFunctionForID(ItemID.ae_display, funcAddedFacede);
AppliedEnergistics.setFlag(ItemID.ae_display, "display");
var DisplayUI = new UI.StandardWindow({
    standard: {
        header: {
            text: {
                text: "Display"
            },
        },
        inventory: {
            standard: true
        },
        background: {
            standard: true
        }
    },
    elements: {}
});
function setInventoryFunctions(ui) {
    var elements = ui.content.elements;
    var _loop_4 = function (key) {
        var index = elements[key].index;
        var obj = JSON.parse(JSON.stringify(elements[key]));
        obj.type = "slot";
        obj.bitmap = "_default_slot_empty";
        obj.visual = true;
        obj.source = undefined;
        obj.clicker = {
            onClick: function (_, container) {
                container.sendEvent("event", {
                    name: "addedItem",
                    count: 1,
                    slot: key,
                    i: index,
                    player: Number(Player.get())
                });
            },
            onLongClick: function (_, container) {
                container.sendEvent("event", {
                    name: "addedItem",
                    count: 64,
                    slot: key,
                    i: index,
                    player: Number(Player.get())
                });
            }
        };
        elements[key + "_"] = obj;
    };
    for (var key in elements) {
        _loop_4(key);
    }
}
;
setInventoryFunctions(DisplayUI.getWindow("inventory"));
ModAPI.addAPICallback("ClassicUI", function (ClassicUI) {
    ClassicUI.registerHandler(BlockID.ae_network_cable, {
        postCreate: function (group, tile) {
            try {
                var n = group.getWindowContent("header").drawing[2];
                if (n.text == "Display")
                    setInventoryFunctions(group.getWindow("header"));
            }
            catch (e) {
                alert(e);
            }
        }
    });
});
var DisplayTile;
var SETTING_DISPLAY = {
    x: 25,
    y: 25,
    size: 950 / 10,
    line: 10
};
var DisplaySubTile = /** @class */ (function (_super) {
    __extends(DisplaySubTile, _super);
    function DisplaySubTile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DisplaySubTile.prototype.open = function (container, client, str) {
        this.data.items = this.tile.controller.getItems();
        this.updateList(this.data.items, SETTING_DISPLAY, this.tile.container);
    };
    DisplaySubTile.prototype.updateList = function (list, setting, container) {
        if (list.length == 0)
            this.clearList(container);
        for (var i in list) {
            var item = list[i];
            var _i = Number(i);
            var lines = Math.floor(_i / setting.line);
            container.sendEvent("event", {
                id: this.data.id,
                name: "updateSlotClient",
                clear: i == "0",
                slot: "slot_" + i,
                size: setting.size,
                x: setting.x + (_i - (setting.line * lines)) * setting.size,
                y: setting.y + setting.size * lines,
                item: { id: item.id, count: item.count, data: item.data },
                i: i,
            });
        }
    };
    DisplaySubTile.prototype.clearList = function (container) {
        container.sendEvent("event", {
            id: this.data.id,
            name: "clear"
        });
    };
    DisplaySubTile.prototype.drop = function (player, items) {
        var actor = new PlayerActor(player);
        for (var i in items) {
            var item = items[i];
            actor.addItemToInventory(item.id, item.count, item.data, item.extra, true);
        }
    };
    DisplaySubTile.prototype.getConnectionCable = function () {
        return 6 / 16;
    };
    DisplaySubTile.prototype.serverEvent = function (data) {
        if (!this.tile.controller)
            return;
        if (data.name == "addedInventory") {
            this.data.items = this.tile.controller.getItems();
            var item = this.data.items[data.i];
            if (!item)
                return; //временное решение
            var count = data.count;
            if (item.count - count < 0) //тут происходит какая-то ошибка item = undefined
                count += item.count - count; //Блять, ну раз происходит ошибка надо было сразу фиксить
            item.count -= count;
            if (item.count < 1)
                this.data.items.splice(data.i, data.i);
            if (count < 1)
                return;
            this.updateList(this.data.items, SETTING_DISPLAY, this.tile.container);
            this.drop(data.player, this.tile.controller.setItems(this.data.items));
            new PlayerActor(data.player).addItemToInventory(item.id, count, item.data, item.extra, true);
        }
        else if (data.name == "addedItem") {
            this.data.items = this.tile.controller.getItems();
            var actor = new PlayerActor(data.player);
            var item_1 = actor.getInventorySlot(data.i);
            var count = data.count;
            if (item_1.count - count < 0)
                count += item_1.count - count;
            if (item_1.count < 1)
                item_1 = { id: 0, count: 0, data: 0, extra: null };
            if (count < 1)
                return;
            actor.setInventorySlot(data.i, item_1.id, item_1.count - count, item_1.data, item_1.extra);
            item_1.count = count;
            (function (items) {
                for (var i in items) {
                    var it = items[i];
                    if (it.id == item_1.id && it.data == item_1.data && !item_1.extra && !it.extra) {
                        it.count += item_1.count;
                        return;
                    }
                }
                items.push(item_1);
            })(this.data.items);
            this.drop(data.player, this.tile.controller.setItems(this.data.items));
            this.data.items = this.tile.controller.getItems();
            this.updateList(this.data.items, SETTING_DISPLAY, this.tile.container);
        }
    };
    DisplaySubTile.clearListClient = function (content) {
        for (var key in content.elements) {
            var obj = content.elements[key];
            obj.bitmap = "_default_slot_empty";
            obj.visual = true;
            obj.source = undefined;
        }
    };
    DisplaySubTile.updateSlotClient = function (name, x, y, size, content, item, i) {
        if (content)
            content.elements[name] = { type: "slot", x: x, y: y, size: size, source: item, visual: true, clicker: {
                    onClick: function (_, container) {
                        container.sendEvent("event", {
                            name: "addedInventory",
                            count: 1,
                            slot: name,
                            i: i,
                            player: Number(Player.get())
                        });
                    },
                    onLongClick: function (_, container) {
                        container.sendEvent("event", {
                            name: "addedInventory",
                            count: 64,
                            slot: name,
                            i: i,
                            player: Number(Player.get())
                        });
                    }
                } };
    };
    DisplaySubTile.clientEvent = function (container, window, content, data) {
        if (data.name == "updateSlotClient") {
            if (data.clear)
                this.clearListClient(content);
            this.updateSlotClient(data.slot, data.x, data.y, data.size, content, data.item, data.i);
        }
        else if (data.name == "clear")
            this.clearListClient(content);
    };
    DisplaySubTile.canAdded = function (sides) {
        return SubTileController.canAdded(sides, ["display"]);
    };
    DisplaySubTile.getNameModel = function () {
        return "ae_display";
    };
    DisplaySubTile.getScreenByName = function (value, container) {
        return DisplayUI;
    };
    return DisplaySubTile;
}(SubTile));
SubTileController.registry(ItemID.ae_display, DisplaySubTile);
function funcAddedBus() {
    var tile = funcAddedFacede.apply(this, arguments);
    if (tile)
        tile.tick = CALBLE_TICK;
}
var SIZE_BUS_UI = 64;
var BusUi = new UI.StandardWindow({
    standard: {
        header: {
            text: {
                text: "Bus"
            },
        },
        inventory: {
            standard: true
        },
        background: {
            standard: true
        }
    },
    elements: {
        "mode": { type: "button", x: 60, y: 60, bitmap: "bus_mode_0", scale: SIZE_BUS_UI / 24, clicker: {
                onClick: function (_, container) {
                    container.sendEvent("event", {
                        name: "newMode"
                    });
                }
            } }
    }
});
var LIST_SLOT = 3;
(function () {
    for (var i = 0; i < LIST_SLOT; i++)
        BusUi.getContent().elements["slot_" + i] = { type: "slot", x: 60 + SIZE_BUS_UI / 24 * 30 + SIZE_BUS_UI * i, y: 60, size: SIZE_BUS_UI };
})();
var BusSubTile = /** @class */ (function (_super) {
    __extends(BusSubTile, _super);
    function BusSubTile(data) {
        var _this = _super.call(this, data) || this;
        _this.useTick = true;
        return _this;
    }
    BusSubTile.prototype.open = function (container, client, str) {
        this.sendClient({
            name: "updateBitmapMode",
            mode: this.data.mode || 0
        });
        var size = this.getSize();
        for (var i = 0; i < size; i++) {
            var slot = this.getItemBySlot(i);
            container.setSlot("slot_" + i, slot.id, slot.count, slot.data, slot.extra || null);
        }
        container.sendChanges();
    };
    BusSubTile.prototype.close = function (container, client) {
        this.data.slots = [];
        var size = this.getSize();
        for (var i = 0; i < size; i++) {
            var slot = container.getSlot("slot_" + i);
            this.data.slots.push({ id: slot.id, count: slot.count, data: slot.data, extra: slot.extra });
            container.setSlot("slot_" + i, 0, 0, 0, null);
        }
        this.controller.save();
    };
    BusSubTile.prototype.serverEvent = function (data) {
        if (data.name == "newMode") {
            this.data.mode = this.data.mode || 0;
            this.data.mode += 1;
            if (this.data.mode > 1)
                this.data.mode = 0;
            this.sendClient({
                name: "updateBitmapMode",
                mode: this.data.mode
            });
        }
    };
    BusSubTile.prototype.getDrops = function () {
        var result = _super.prototype.getDrops.call(this);
        var size = this.getSize();
        for (var i = 0; i < size; i++)
            result.push(this.getItemBySlot(i));
        return result;
    };
    BusSubTile.prototype.getItemBySlot = function (slot) {
        if (!this.data.slots)
            this.data.slots = [];
        return this.data.slots[slot] || EMPTY_ITEM;
    };
    BusSubTile.prototype.isTransferItem = function (item, mode) {
        if (mode === void 0) { mode = this.data.mode; }
        if (mode == 1) { //white list
            var size_1 = this.getSize();
            for (var i = 0; i < size_1; i++) {
                var slot = this.getItemBySlot(i);
                if (item.id == slot.id)
                    return true;
            }
            return false;
        } //black list
        var size = this.getSize();
        for (var i = 0; i < size; i++) {
            var slot = this.getItemBySlot(i);
            if (item.id == slot.id)
                return false;
        }
        return true;
    };
    BusSubTile.prototype.tick = function () {
        if (World.getThreadTime() % this.getSpeed() != 0 || !this.tile.controller)
            return;
        this.busLogic();
    };
    BusSubTile.prototype.getSize = function () {
        return LIST_SLOT;
    };
    BusSubTile.prototype.getSpeed = function () {
        return 20;
    };
    BusSubTile.prototype.getTransferCount = function () {
        return 1;
    };
    BusSubTile.prototype.getConnectionCable = function () {
        return 3 / 16;
    };
    BusSubTile.prototype.busLogic = function () {
    };
    BusSubTile.clientEvent = function (container, window, content, data) {
        if (data.name == "updateBitmapMode" && content)
            content.elements.mode.bitmap = "bus_mode_" + data.mode;
        SubTileController.sendServer(data, {});
    };
    BusSubTile.canAdded = function (sides) {
        return SubTileController.canAdded(sides, ["bus", "display"]);
    };
    BusSubTile.getScreenByName = function (value, container) {
        return BusUi;
    };
    return BusSubTile;
}(SubTile));
;
function createBus(nameid, prot, model) {
    var texId = "ae_bus_" + nameid;
    IDRegistry.genItemID(texId);
    Item.createItem(texId, "Bus " + nameid, { name: "", meta: 0 }, { stack: 64, isTech: false });
    var id = ItemID[texId];
    Item.registerUseFunctionForID(id, funcAddedBus);
    AppliedEnergistics.setFlag(id, "bus");
    SubTileController.registry(id, prot);
    SubTileController.registerRotate(texId, model);
    model.setItemModel(id);
}
var BusImportSubTile = /** @class */ (function (_super) {
    __extends(BusImportSubTile, _super);
    function BusImportSubTile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BusImportSubTile.prototype.busLogic = function () {
        var pos = World.getRelativeCoords(this.tile.x, this.tile.y, this.tile.z, this.side);
        var storage = StorageInterface.getStorage(this.tile.blockSource, pos.x, pos.y, pos.z);
        if (!storage)
            return;
        var slots = storage.getOutputSlots(World.getInverseBlockSide(this.side));
        var _loop_5 = function (i) {
            var slot = slots[i];
            var item = new ItemStack(storage.getSlot(slot));
            if (item.id != 0 && this_1.isTransferItem(item)) {
                var items = this_1.tile.controller.getItems();
                var count = this_1.getTransferCount();
                if (item.count - count < 0)
                    count += item.count - count;
                if (item.count < 1 || count < 1)
                    return "break";
                if (item.count - count < 1)
                    storage.setSlot(slot, 0, 0, 0, null);
                else
                    storage.setSlot(slot, item.id, item.count - count, item.data, item.extra);
                item.count = count;
                (function (items) {
                    for (var i_5 in items) {
                        var it = items[i_5];
                        if (it.id == item.id && it.data == item.data && !item.extra && !it.extra) {
                            it.count += item.count;
                            return;
                        }
                    }
                    items.push(item);
                })(items);
                items = this_1.tile.controller.setItems(items);
                for (var i_6 in items)
                    storage.addItem(items[i_6]);
                return "break";
            }
        };
        var this_1 = this;
        for (var i in slots) {
            var state_1 = _loop_5(i);
            if (state_1 === "break")
                break;
        }
    };
    BusImportSubTile.getNameModel = function () {
        return "ae_bus_import";
    };
    return BusImportSubTile;
}(BusSubTile));
;
createBus("import", BusImportSubTile, ImportBus(null, "charger_side"));
var BusExportSubTile = /** @class */ (function (_super) {
    __extends(BusExportSubTile, _super);
    function BusExportSubTile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BusExportSubTile.prototype.busLogic = function () {
        var pos = World.getRelativeCoords(this.tile.x, this.tile.y, this.tile.z, this.side);
        var storage = StorageInterface.getStorage(this.tile.blockSource, pos.x, pos.y, pos.z);
        if (!storage)
            return;
        var items = this.tile.controller.getItems();
        for (var i in items) {
            var item = items[i];
            if (this.isTransferItem(item)) {
                var count = this.getTransferCount();
                if (item.count - count < 0)
                    count += item.count - count;
                if (item.count < 1)
                    item = { id: 0, count: 0, data: 0, extra: null };
                if (count < 1)
                    return;
                var transfer = storage.addItem({ id: item.id, count: count, data: item.data, extra: item.extra }, World.getInverseBlockSide(this.side));
                if (transfer < 1)
                    continue;
                item.count -= transfer;
                this.tile.controller.setItems(items); //надо пофиксить баг с добавлением предмета в никуда
                break;
            }
        }
    };
    BusExportSubTile.getNameModel = function () {
        return "ae_bus_export";
    };
    return BusExportSubTile;
}(BusSubTile));
;
createBus("export", BusExportSubTile, ExportBus(null, "charger_side"));
function registerDecorsBlock(texture, name) {
    var block_base = new BlockBase("ae_" + texture);
    block_base.addVariation(name, [[texture, 0]], true);
    BlockRegistry.registerBlock(block_base);
    JsonFacade.push({ id: "BlockID.ae_" + texture });
    BlockRegistry.createSlabs("ae_" + texture + "_slab", "ae_" + texture + "_double_slab", [
        { name: name, texture: [[texture, 0]], inCreative: true }
    ]);
    Recipes.addShaped({ id: BlockID["ae_" + texture + "_slab"], count: 6, data: 0 }, [
        "   ",
        "aaa",
        "   "
    ], ["a", block_base.id, 0]);
    BlockRegistry.createStairs("ae_" + texture + "_stairs", [
        { name: name, texture: [[texture, 0]], inCreative: true }
    ]);
    Recipes.addShaped({ id: BlockID["ae_" + texture + "_stairs"], count: 4, data: 0 }, [
        "a  ",
        "aa ",
        "aaa"
    ], ["a", block_base.id, 0]);
    Item.addCreativeGroup(texture, name, [
        block_base.id,
        BlockID["ae_" + texture + "_slab"],
        BlockID["ae_" + texture + "_stairs"]
    ]);
}
registerDecorsBlock("fluix_block", "Fluix block");
registerDecorsBlock("sky_stone_block", "Sky stone block");
registerDecorsBlock("sky_stone_brick", "Sky stone brick");
registerDecorsBlock("sky_stone_small_brick", "Sky stone small brick");
registerDecorsBlock("smooth_sky_stone_block", "Smooth sky stone block");
Translation.addTranslation("Fluix block", {
    ru: "Изменчивый блок"
});
Translation.addTranslation("Sky stone block", {
    ru: "Небесный каменный блок"
});
Translation.addTranslation("Sky stone brick", {
    ru: "Небесный каменный кирпич"
});
Translation.addTranslation("Sky stone small brick", {
    ru: "Небесный камень маленький кирпич"
});
Translation.addTranslation("Smooth sky stone block", {
    ru: "Гладкий небесный камень"
});
BlockRegistry.createBlock("ae_quartz_glass", [
    {
        name: "Quartz glass",
        texture: [["quartz_glass_frame", 0]],
        inCreative: true
    }
]);
Translation.addTranslation("Quartz glass", {
    ru: "Кварцевое стекло"
});
ConnectedTexture.setModelForGlass(BlockID.ae_quartz_glass, -1, "quartz_glass_frame", "ae_quartz_glass");
var RecipeCharged = new MachineRegisty.RecipePool("charged");
var ChargedTile = /** @class */ (function (_super) {
    __extends(ChargedTile, _super);
    function ChargedTile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChargedTile.prototype.getInputSlots = function (side) {
        return ["slot"];
    };
    ChargedTile.prototype.getOutputSlots = function (side) {
        return ["slot"];
    };
    ChargedTile.prototype.getResult = function (input) {
        return RecipeCharged.get(input);
    };
    ChargedTile.prototype.canOutput = function () {
        return false;
    };
    ChargedTile.prototype.getProgressMax = function () {
        return 100;
    };
    ChargedTile.prototype.canEnergySystem = function () {
        return true;
    };
    ChargedTile.prototype.clientLoad = function () {
        this.updateModelClient();
        var self = this;
        this.networkData.addOnDataChangedListener(function (data, is) {
            self.updateModelClient();
        });
    };
    ChargedTile.prototype.clientUnload = function () {
        if (this.animation)
            this.animation.destroy();
    };
    ChargedTile.prototype.updateModelClient = function () {
        this.animation = this.animation || new Animation.Item(this.x + .5, this.y + .5, this.z + .5);
        this.animation.describeItem({
            id: Network.serverToLocalId(this.networkData.getInt("id", 0)),
            data: this.networkData.getInt("data", 0),
            size: .5
        });
        this.animation.loadCustom(AnimationType.VANILLA({ pos: .025 }));
    };
    ChargedTile.prototype.updateModel = function (slot) {
        this.networkData.putInt("id", slot.id);
        this.networkData.putInt("data", slot.data);
        this.networkData.sendChanges();
    };
    ChargedTile.prototype.onRecipe = function () {
        this.updateModel(this.container.getSlot("slot"));
    };
    ChargedTile.prototype.onItemUse = function (coords, item, player) {
        var slot = this.container.getSlot("slot");
        if (slot.id == 0) {
            slot.set(item.id, 1, item.data, item.extra || null);
            item.decrease(1);
            new PlayerEntity(player).setCarriedItem(item);
        }
        else
            slot.dropAt(this.blockSource, this.x + .5, this.y + .5, this.z + .5);
        this.updateModel(slot);
        slot.validate();
        return false;
    };
    __decorate([
        BlockEngine.Decorators.ClientSide
    ], ChargedTile.prototype, "updateModelClient", null);
    return ChargedTile;
}(Machine));
BlockRegistry.registerBlock(new MachineBlock("ae_charged", "charged", [["charger_side", 0]], Charged, ChargedTile));
RecipeCharged.registerRecipeViewer("Charged", BlockID.ae_charged, {
    elements: {
        input0: { type: "slot", x: 100, y: 100, size: 100 },
        output0: { type: "slot", x: 300, y: 100, size: 100 }
    }
});
var Processor;
(function (Processor) {
    Processor.Calculation = new ItemStack(ItemID.ae_calculation_processor_press, -1, 0);
    Processor.Engineering = new ItemStack(ItemID.ae_engineering_processor_press, -1, 0);
    Processor.Logic = new ItemStack(ItemID.ae_logic_processor_press, -1, 0);
    Processor.Silicon = new ItemStack(ItemID.ae_silicon_press, -1, 0);
})(Processor || (Processor = {}));
var RecipeCarver = new MachineRegisty.RecipePool("carver");
var CarverUI = new UI.StandartWindow({
    standard: {
        header: {
            text: {
                text: "Carver"
            },
        },
        inventory: {
            standard: true
        },
        background: {
            standard: true
        }
    },
    elements: {
        "input1": { type: "slot", x: 500, y: 100, size: 100 },
        "input2": { type: "slot", x: 610, y: 210, size: 100 },
        "input3": { type: "slot", x: 500, y: 320, size: 100 },
        "output": { type: "slot", x: 810, y: 210, size: 100 }
    }
});
var CarverTile = /** @class */ (function (_super) {
    __extends(CarverTile, _super);
    function CarverTile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarverTile.prototype.getInputSlots = function (side) {
        return ["input1", "input2", "input3"];
    };
    CarverTile.prototype.getOutputSlots = function (side) {
        return ["output"];
    };
    CarverTile.prototype.getResult = function (input) {
        return RecipeCarver.get(input);
    };
    CarverTile.prototype.canEnergySystem = function () {
        return true;
    };
    CarverTile.prototype.getProgressMax = function () {
        return 100;
    };
    CarverTile.prototype.getScreenByName = function (screenName) {
        return CarverUI;
    };
    return CarverTile;
}(Machine));
;
BlockRegistry.registerBlock(new MachineBlock("ae_carver", "Carver", [["charger_side", 0]], Carver, CarverTile));
RecipeCarver.registerRecipeViewer("Carver", BlockID.ae_carver, {
    elements: {
        input0: { type: "slot", x: 100, y: 100, size: 100 },
        input1: { type: "slot", x: 210, y: 210, size: 100 },
        input2: { type: "slot", x: 100, y: 320, size: 100 },
        output0: { type: "slot", x: 420, y: 210, size: 100 }
    }
});
var GrindStoneRecipe = new MachineRegisty.RecipePool("grindstone");
var GrindStoneUI = new UI.StandartWindow({
    standard: {
        header: {
            text: {
                text: "Grind Stone"
            },
        },
        inventory: {
            standard: true
        },
        background: {
            standard: true
        }
    },
    elements: {
        //"input1": {type: "slot", x: 60, y: 60, size: 100},
        // "input2": {type: "slot", x: 60+110, y: 60, size: 100},
        //"input3": {type: "slot", x: 60+220, y: 60, size: 100},
        "input1": { type: "slot", x: 650, y: 300, size: 100 },
        "output1": { type: "slot", x: 760, y: 300, size: 100 },
        //"output1": {type: "slot", x: 60+610, y: 300, size: 100},
        //"output2": {type: "slot", x: 60+110+610, y: 300, size: 100},
        //"output3": {type: "slot", x: 60+220+610, y: 300, size: 100}
    }
});
var GrindStoneTile = /** @class */ (function (_super) {
    __extends(GrindStoneTile, _super);
    function GrindStoneTile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GrindStoneTile.prototype.getInputSlots = function (side) {
        return ["input1"];
        // return ["input1", "input2", "input3"];
    };
    GrindStoneTile.prototype.getOutputSlots = function (side) {
        return ["output1"];
        //return ["output1", "output2", "output3"]
    };
    GrindStoneTile.prototype.canDegradationProgres = function () {
        return false;
    };
    GrindStoneTile.prototype.canEnergySystem = function () {
        return true;
    };
    GrindStoneTile.prototype.getProgressMax = function () {
        return 100;
    };
    GrindStoneTile.prototype.getResult = function (input) {
        return GrindStoneRecipe.get(input);
    };
    GrindStoneTile.prototype.getScreenByName = function (screenName) {
        return GrindStoneUI;
    };
    return GrindStoneTile;
}(Machine));
BlockRegistry.registerBlock(new MachineBlock("ae_grind_stone", "Grind stone", [["grindstone_side", 0], ["grindstone", 0], ["grindstone_side", 0], ["grindstone_front", 0], ["grindstone_side", 0], ["grindstone_side", 0]], null, GrindStoneTile));
GrindStoneRecipe.registerRecipeViewer("Grind stone", BlockID.ae_grind_stone, {
    elements: {
        input0: { type: "slot", x: 100, y: 100, size: 100 },
        output0: { type: "slot", x: 300, y: 100, size: 100 }
    }
});
var GrindStonePenTile = /** @class */ (function (_super) {
    __extends(GrindStonePenTile, _super);
    function GrindStonePenTile(id) {
        var _this = _super.call(this) || this;
        TileEntity.registerPrototype(id, _this);
        return _this;
    }
    GrindStonePenTile.prototype.energyTick = function (type, node) {
        if (this.energy) {
            node.add(10);
            this.energy = false;
        }
    };
    GrindStonePenTile.prototype.energyReceive = function (type, amount, voltage) {
        return 0;
    };
    GrindStonePenTile.prototype.isConductor = function (type) {
        return true;
    };
    GrindStonePenTile.prototype.canReceiveEnergy = function (side, type) {
        return false;
    };
    GrindStonePenTile.prototype.canExtractEnergy = function (side, type) {
        return true;
    };
    GrindStonePenTile.prototype.onItemUse = function (coords, item, player) {
        this.tick_ = this.tick_ || -20;
        var time = World.getThreadTime();
        if (time - this.tick_ >= 10 && !this.energy) {
            this.energy = true;
            var data = this.data_ || 0;
            data = data + 1 > 3 ? 0 : data + 1;
            this.data_ = data;
            this.blockSource.setBlock(this.x, this.y, this.z, this.blockID, [2, 4, 3, 5][data]);
            this.tick_ = time;
        }
        return false;
    };
    return GrindStonePenTile;
}(TileEntityBase));
var ModelsPen = [
    new RenderUtil.Model().add(7 / 16, 7 / 18, 7 / 16, 9 / 16, 9 / 16, 12 / 16, "planks"),
    new RenderUtil.Model().add(7 / 16, 7 / 18, 4 / 16, 9 / 16, 9 / 16, 9 / 16, "planks"),
    new RenderUtil.Model().add(7 / 16, 7 / 18, 7 / 16, 12 / 16, 9 / 16, 9 / 16, "planks"),
    new RenderUtil.Model().add(4 / 16, 7 / 18, 7 / 16, 9 / 16, 9 / 16, 9 / 16, "planks"),
];
for (var i in ModelsPen)
    ModelsPen[i].add(7 / 16, 0, 7 / 16, 9 / 16, 7 / 16, 9 / 16, "planks");
BlockRegistry.registerBlock(new MachineBlock("ae_grind_stone_pen", "Pen", [["planks", 0], ["planks", 0], ["planks", 0], ["planks", 0], ["planks", 0], ["planks", 0]], ModelsPen, GrindStonePenTile));
EnergyTileRegistry.addEnergyTypeForId(BlockID.ae_grind_stone_pen, Ae);
function createStorage(storages, prefix, texture2) {
    var e_4, _a, e_5, _b;
    var pre_component = null;
    try {
        for (var storages_1 = __values(storages), storages_1_1 = storages_1.next(); !storages_1_1.done; storages_1_1 = storages_1.next()) {
            var storage = storages_1_1.value;
            var component = ItemRegistry.createItem("ae_material_cell" + storage + "k_part", {
                name: storage + "k ME Storage Component",
                icon: texture2.replace("{num}", String(storage)),
                category: ItemCategory.ITEMS
            });
            Translation.addTranslation(storage + "k ME Storage Component", {
                ru: storage + "k ME Компонент хранилища"
            });
            var disk = ItemRegistry.createItem("ae_storage_" + storage, {
                name: "Disk storage " + storage + "k",
                icon: prefix + storage + "k",
                stack: 1,
                category: ItemCategory.ITEMS,
                inCreative: true
            });
            Translation.addTranslation("Disk storage " + storage + "k", {
                ru: "Диск хранения " + storage + "k"
            });
            AppliedEnergistics.registerDrive(ItemID["ae_storage_" + storage], storage * 1000);
            var arr = pre_component ? [[ItemID.crystal_seed_certus, 3], [ItemID.ae_quartz, 0], [ItemID.ae_charged_quartz, 0]] : [[1, 0]];
            var mask = pre_component ? ["rcr", "igi", "rir"] : ["rqr", "qpq", "rgr"];
            try {
                for (var arr_1 = (e_5 = void 0, __values(arr)), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                    var item = arr_1_1.value;
                    Recipes.addShaped({ id: component.id, count: 1, data: 0 }, mask, ["r", VanillaItemID.redstone, 0, "p", ItemID.ae_material_logic_processor, 0, "q", item[0], item[1], "c", ItemID.ae_material_calculation_processor, 0, "i", (pre_component === null || pre_component === void 0 ? void 0 : pre_component.id) || 1, 0, "g", BlockID.ae_quartz_glass, 0]);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (arr_1_1 && !arr_1_1.done && (_b = arr_1.return)) _b.call(arr_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            Recipes.addShaped({ id: disk.id, count: 1, data: 0 }, [
                "grg",
                "rcr",
                "iii"
            ], ["g", BlockID.ae_quartz_glass, 0, "r", VanillaItemID.redstone, 0, "c", component.id, 0, "i", VanillaItemID.iron_ingot, 0]);
            pre_component = component;
            Item.addCreativeGroup("drive", "Drive", [disk.id, component.id]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (storages_1_1 && !storages_1_1.done && (_a = storages_1.return)) _a.call(storages_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
}
createStorage([1, 4, 16, 64], "storage_cell_", "material_cell{num}k_part");
var cutting_knifes = [];
function registerTools(texture, name, material, recipes_items) {
    var tools = [["sword", [
                " m ",
                " m ",
                " s "
            ]], ["axe", [
                "mm ",
                "ms ",
                " s"
            ]], ["pickaxe", [
                "mmm",
                " s ",
                " s "
            ]], ["shovel", [
                " m ",
                " s ",
                " s "
            ]], ["hoe", [
                "mm ",
                " s ",
                " s "
            ]]];
    ItemRegistry.addToolMaterial(name, material);
    var translate = Translation.translate(name);
    for (var i in tools) {
        var tool = tools[i];
        ItemRegistry.createTool("ae_" + texture + "_" + tool[0], {
            name: name + " " + tool[0],
            icon: texture + "_" + tool[0],
            inCreative: true,
            material: name,
        }, ToolType[tool[0].toUpperCase()]);
        Translation.addTranslation(name + " " + tool[0], {
            ru: translate + " " + Translation.translate(tool[0])
        });
        Item.addCreativeGroup(name, name, [ItemID["ae_" + texture + "_" + tool[0]]]);
        Recipes.addShaped({ id: ItemID["ae_" + texture + "_" + tool[0]], count: 1, data: 0 }, tool[1], ["m", recipes_items.material, 0, "s", VanillaItemID.stick, 0]);
    }
    var item = ItemRegistry.createItem("ae_" + texture + "_cutting_knife", {
        name: name + " cutting knife",
        icon: texture + "_cutting_knife",
        inCreative: true
    });
    item.setMaxStack(1);
    item.setMaxDamage(28);
    item.setCategory(ItemCategory.EQUIPMENT);
    Translation.addTranslation(name + " cutting knife", {
        ru: translate + " режущий нож"
    });
    cutting_knifes.push(item.id);
    Item.addCreativeGroup(name, name, [item.id]);
    Recipes.addShaped({ id: item.id, count: 1, data: 0 }, [
        "  s",
        "is ",
        "mm "
    ], ["s", VanillaItemID.stick, 0, "i", VanillaItemID.iron_ingot, 0, "m", recipes_items.material, 0]);
}
Translation.addTranslation("sword", {
    ru: "меч"
});
Translation.addTranslation("axe", {
    ru: "топор"
});
Translation.addTranslation("pickaxe", {
    ru: "кирка"
});
Translation.addTranslation("shovel", {
    ru: "лопата"
});
Translation.addTranslation("hoe", {
    ru: "мотыга"
});
Translation.addTranslation("Certus quartz", {
    ru: "Кварц цертус"
});
Translation.addTranslation("Nether quartz", {
    ru: "Кварц"
});
registerTools("certus_quartz", "Certus quartz", {
    level: 2,
    efficiency: 4,
    durability: 132,
    damage: 4
}, { material: ItemID.ae_quartz });
registerTools("nether_quartz", "Nether quartz", {
    level: 3,
    efficiency: 5,
    durability: 152,
    damage: 4
}, { material: VanillaItemID.quartz });
Recipes.addShapeless({ id: BlockID.ae_fluix_block, count: 1, data: 0 }, [
    { id: ItemID.crystal_seed_fluix, data: 3 },
    { id: ItemID.crystal_seed_fluix, data: 3 },
    { id: ItemID.crystal_seed_fluix, data: 3 },
    { id: ItemID.crystal_seed_fluix, data: 3 }
]);
Recipes.addShaped({ id: BlockID.ae_grind_stone_pen, count: 1, data: 0 }, [
    "aaa",
    "  a",
    "  a"
], ["a", VanillaBlockID.planks, 0]);
Recipes.addShaped({ id: ItemID.ae_wooden_gear, count: 1, data: 0 }, [
    " a ",
    "a a",
    " a "
], ["a", VanillaItemID.stick, 0]);
void function () {
    var e_6, _a;
    var arr = [[VanillaItemID.quartz, 0], [ItemID.ae_quartz, 0], [ItemID.ae_charged_quartz, 0]];
    try {
        for (var arr_2 = __values(arr), arr_2_1 = arr_2.next(); !arr_2_1.done; arr_2_1 = arr_2.next()) {
            var id = arr_2_1.value;
            Recipes.addShaped({ id: BlockID.ae_grind_stone, count: 1, data: 0 }, [
                "aba",
                "cac",
                "dcd"
            ], ["a", VanillaBlockID.stone, 0, "b", ItemID.ae_wooden_gear, 0, "c", id[0], id[1], "d", VanillaBlockID.cobblestone, 0]);
            Recipes.addShaped({ id: ItemID.ae_formation_core, count: 2, data: 0 }, [
                "abc",
                "",
                ""
            ], ["a", id[0], id[1], "b", ItemID.ae_material_fluix_dust, 0, "c", ItemID.ae_material_logic_processor, 0]);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (arr_2_1 && !arr_2_1.done && (_a = arr_2.return)) _a.call(arr_2);
        }
        finally { if (e_6) throw e_6.error; }
    }
}();
void function () {
    var e_7, _a;
    var arr = [[ItemID.crystal_seed_certus, 3], [ItemID.ae_quartz, 0], [ItemID.ae_charged_quartz, 0]];
    try {
        for (var arr_3 = __values(arr), arr_3_1 = arr_3.next(); !arr_3_1.done; arr_3_1 = arr_3.next()) {
            var item = arr_3_1.value;
            Recipes.addShaped({ id: BlockID.ae_energy_cell, count: 1, data: 0 }, [
                "cdc",
                "dgd",
                "cdc"
            ], ["c", item[0], item[1], "g", BlockID.ae_quartz_glass, 0, "d", ItemID.ae_material_fluix_dust, 0]);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (arr_3_1 && !arr_3_1.done && (_a = arr_3.return)) _a.call(arr_3);
        }
        finally { if (e_7) throw e_7.error; }
    }
}();
Recipes.addShaped({ id: BlockID.ae_dense_energy_cell, count: 1, data: 0 }, [
    "sss",
    "sps",
    "sss"
], ["s", BlockID.ae_energy_cell, 0, "p", ItemID.ae_material_calculation_processor, 0]);
void function () {
    var e_8, _a;
    var arr = [[VanillaItemID.quartz, 0], [ItemID.crystal_seed_nether, 3]];
    try {
        for (var arr_4 = __values(arr), arr_4_1 = arr_4.next(); !arr_4_1.done; arr_4_1 = arr_4.next()) {
            var id = arr_4_1.value;
            Recipes.addShaped({ id: ItemID.ae_annihilation_core, count: 2, data: 0 }, [
                "abc",
                "",
                ""
            ], ["a", id[0], id[1], "b", ItemID.ae_material_fluix_dust, 0, "c", ItemID.ae_material_logic_processor, 0]);
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (arr_4_1 && !arr_4_1.done && (_a = arr_4.return)) _a.call(arr_4);
        }
        finally { if (e_8) throw e_8.error; }
    }
}();
Recipes.addShaped({ id: BlockID.ae_smooth_sky_stone_block, count: 1, data: 0 }, [
    "a",
    "",
    ""
], ["a", BlockID.ae_sky_stone_small_brick, 0]);
Recipes.addShaped({ id: BlockID.ae_sky_stone_small_brick, count: 1, data: 0 }, [
    "a",
    "",
    ""
], ["a", BlockID.ae_sky_stone_brick, 0]);
Recipes.addShaped({ id: BlockID.ae_sky_stone_brick, count: 1, data: 0 }, [
    "a",
    "",
    ""
], ["a", BlockID.ae_smooth_sky_stone_block, 0]);
Recipes.addShaped({ id: ItemID.ae_display_material, count: 3, data: 0 }, [
    " gi",
    "xyi",
    " gi"
], ["x", VanillaItemID.iron_ingot, 0, "g", VanillaItemID.glowstone_dust, 0, "y", VanillaItemID.redstone, 0, "i", BlockID.ae_quartz_glass, 0]);
Recipes.addShaped({ id: ItemID.ae_display, count: 1, data: 0 }, [
    "ab",
    "cd",
    ""
], ["a", ItemID.ae_formation_core, 0, "b", ItemID.ae_display_material, 0, "c", ItemID.ae_material_logic_processor, 0, "d", ItemID.ae_annihilation_core, 0]);
Recipes.addFurnace(BlockID.ae_sky_stone_block, BlockID.ae_smooth_sky_stone_block, 0);
Recipes.addFurnace(ItemID.ae_material_nether_quartz_dust, ItemID.ae_silicon, 0);
Recipes.addFurnace(ItemID.ae_material_certus_quartz_dust, ItemID.ae_silicon, 0);
Recipes.addShaped({ id: BlockID.ae_controller, count: 1, data: 0 }, [
    "sas",
    "aba",
    "sas"
], ["a", ItemID.crystal_seed_fluix, 3, "s", BlockID.ae_smooth_sky_stone_block, 0, "b", ItemID.ae_material_engineering_processor, 0]);
Recipes.addShaped({ id: ItemID.crystal_seed_certus, count: 2, data: 0 }, [
    "ab",
    "",
    ""
], ["a", VanillaBlockID.sand, -1, "b", ItemID.ae_material_certus_quartz_dust, 0]);
Recipes.addShaped({ id: ItemID.crystal_seed_nether, count: 2, data: 0 }, [
    "ab",
    "",
    ""
], ["a", VanillaBlockID.sand, -1, "b", ItemID.ae_material_nether_quartz_dust, 0]);
Recipes.addShaped({ id: ItemID.crystal_seed_fluix, count: 2, data: 0 }, [
    "ab",
    "",
    ""
], ["a", VanillaBlockID.sand, -1, "b", ItemID.ae_material_fluix_dust, 0]);
void function () {
    var e_9, _a;
    var arr = [[ItemID.ae_material_fluix_crystal, 0], [ItemID.crystal_seed_fluix, 3]];
    try {
        for (var arr_5 = __values(arr), arr_5_1 = arr_5.next(); !arr_5_1.done; arr_5_1 = arr_5.next()) {
            var id = arr_5_1.value;
            Recipes.addShaped({ id: BlockID.ae_charged, count: 1, data: 0 }, [
                "aca",
                "a  ",
                "aca"
            ], ["a", VanillaItemID.iron_ingot, 0, "c", id[0], id[1]]);
            Recipes.addShaped({ id: BlockID.ae_network_cable, count: 4, data: DATA_CABLE_DEFAULT }, [
                "ab",
                "b",
                ""
            ], ["a", ItemID.ae_quartz, 0, "b", id[0], id[1]]);
            Recipes.addShaped({ id: BlockID.ae_energy_acceptor, count: 1, data: 0 }, [
                "igi",
                "gcg",
                "igi"
            ], ["i", VanillaItemID.iron_ingot, 0, "c", id[0], id[1], "g", BlockID.ae_quartz_glass, 0]);
            Recipes.addShaped({ id: BlockID.ae_carver, count: 1, data: 0 }, [
                "ipi",
                "c i",
                "ipi"
            ], ["i", VanillaItemID.iron_ingot, 0, "c", id[0], id[1], "p", VanillaBlockID.sticky_piston, 0]);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (arr_5_1 && !arr_5_1.done && (_a = arr_5.return)) _a.call(arr_5);
        }
        finally { if (e_9) throw e_9.error; }
    }
}();
void function () {
    var e_10, _a;
    var arr = [ItemID.ae_material_certus_quartz_dust, ItemID.ae_material_nether_quartz_dust];
    try {
        for (var arr_6 = __values(arr), arr_6_1 = arr_6.next(); !arr_6_1.done; arr_6_1 = arr_6.next()) {
            var id = arr_6_1.value;
            Recipes.addShaped({ id: BlockID.ae_quartz_glass, count: 4, data: 0 }, [
                "dgd",
                "gdg",
                "dgd"
            ], ["d", id, 0, "g", VanillaBlockID.glass, 0]);
        }
    }
    catch (e_10_1) { e_10 = { error: e_10_1 }; }
    finally {
        try {
            if (arr_6_1 && !arr_6_1.done && (_a = arr_6.return)) _a.call(arr_6);
        }
        finally { if (e_10) throw e_10.error; }
    }
}();
Recipes.addShaped({ id: BlockID.ae_drive, count: 1, data: 0 }, [
    "iei",
    "c c",
    "iei"
], ["i", VanillaItemID.iron_ingot, 0, "e", ItemID.ae_material_engineering_processor, 0, "c", BlockID.ae_network_cable, -1]);
Recipes.addShaped({ id: ItemID.ae_bus_export, count: 1, data: 0 }, [
    "",
    " c",
    "ipi"
], ["i", VanillaItemID.iron_ingot, 0, "c", ItemID.ae_annihilation_core, 0, "p", VanillaBlockID.sticky_piston, 0]);
Recipes.addShaped({ id: ItemID.ae_bus_import, count: 1, data: 0 }, [
    "",
    "ici",
    " p "
], ["i", VanillaItemID.iron_ingot, 0, "c", ItemID.ae_formation_core, 0, "p", VanillaBlockID.piston, 0]);
GrindStoneRecipe.add([new ItemStack(ItemID.crystal_seed_fluix, 1, 3)], [ItemID.ae_material_fluix_dust])
    .add([ItemID.ae_material_fluix_crystal], [ItemID.ae_material_fluix_dust])
    .add([ItemID.ae_quartz], [ItemID.ae_material_certus_quartz_dust])
    .add([BlockID.ae_quartz_ore], [new ItemStack(ItemID.ae_material_certus_quartz_dust, 2)])
    .add([VanillaItemID.quartz], [ItemID.ae_material_nether_quartz_dust]);
RecipeCharged.add([new ItemStack(ItemID.ae_quartz, 1)], [new ItemStack(ItemID.ae_charged_quartz, 1)]);
RecipeCarver.add([ItemID.ae_material_engineering_processor_print, VanillaItemID.redstone, ItemID.ae_material_silicon_print], [ItemID.ae_material_engineering_processor])
    .add([Processor.Silicon, ItemID.ae_silicon, 0], [ItemID.ae_material_silicon_print,])
    .add([Processor.Engineering, VanillaItemID.diamond, 0], [ItemID.ae_material_engineering_processor_print])
    .add([ItemID.ae_material_logic_processor_print, VanillaItemID.redstone, ItemID.ae_material_silicon_print], [ItemID.ae_material_logic_processor])
    .add([Processor.Logic, VanillaItemID.gold_ingot, 0], [ItemID.ae_material_logic_processor_print])
    .add([Processor.Calculation, new ItemStack(ItemID.crystal_seed_certus, 1, 3), 0], [ItemID.ae_material_calculation_processor_print])
    .add([ItemID.ae_material_calculation_processor_print, VanillaItemID.redstone, ItemID.ae_material_silicon_print], [ItemID.ae_material_calculation_processor]);
FluixCryatalRecipe.add([VanillaItemID.quartz, VanillaItemID.redstone, ItemID.ae_charged_quartz], [new ItemStack(ItemID.ae_material_fluix_crystal, 2)]);
FluixCryatalAI.addItemCheck(ItemID.ae_charged_quartz);
ItemGeneration.newGenerator("ae_meteorit");
ItemGeneration.addItem("ae_meteorit", ItemID.ae_calculation_processor_press, .5, { min: 1, max: 1 });
ItemGeneration.addItem("ae_meteorit", ItemID.ae_engineering_processor_press, .5, { min: 1, max: 1 });
ItemGeneration.addItem("ae_meteorit", ItemID.ae_logic_processor_press, .5, { min: 1, max: 1 });
ItemGeneration.addItem("ae_meteorit", ItemID.ae_silicon_press, .5, { min: 1, max: 1 });
ItemGeneration.registerRecipeViewer("ae_meteorit", "Meteorit");
StructurePiece.register(StructurePiece.getDefault({
    chance: 400,
    name: "meteorit",
    distance: 200,
    checkName: true,
    structure: new Structure.advanced().setProt({
        after: function (x, y, z, region, packet) {
            var Random = packet.random;
            var radius = Random.nextInt(6) + 3;
            StructureUtility.generateShapeOptimization(region, null, x, y, z, radius * radius, 0, 0);
            StructureUtility.generateShapeOptimization(region, null, x, y, z, radius, BlockID.ae_sky_stone_block, 0);
            region.setBlock(x, y, z, 54, 0);
            ItemGeneration.fill("ae_meteorit", x, y, z, Random, region);
        }
    })
}));
ModAPI.registerAPI("AppliedEnergistics", {
    MachineRegisty: MachineRegisty,
    Machine: Machine,
    MachineBlcok: MachineBlock,
    AppliedTile: AppliedTile,
    SubTile: SubTile,
    SubTileController: SubTileController,
    AppliedEnergistics: AppliedEnergistics,
    requireGlobal: function (cmd) {
        return cmd;
    }
});
