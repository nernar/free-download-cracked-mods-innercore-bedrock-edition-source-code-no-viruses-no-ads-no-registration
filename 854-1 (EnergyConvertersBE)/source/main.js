var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) {
                    d[p] = b[p];
                }
            }
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) {
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        }
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var JavaString = java.lang.String;
var IllegalArgumentException = java.lang.IllegalArgumentException;
IMPORT("EnergyNet");
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);
var FE = EnergyTypeRegistry.assureEnergyType("FE", 0.25);
var MJ = EnergyTypeRegistry.assureEnergyType("MJ", 3.75);
var TESLA = EnergyTypeRegistry.assureEnergyType("Tesla", 0.25);
var bridgeEnergyBuffer = Math.max(Math.min(__config__.getNumber("bridgeEnergyBuffer").intValue(), 1000000000000), 1);
var conversionLoss = __config__.getNumber("conversionLoss").intValue();
var GROUP = [];
(function () {
    var _a;
    var _b, _c;
    var all_translation_keys = {};
    var readFile = function (name) {
        return FileTools.ReadText(__dir__ + "/resources/res/lang/" + name + ".lang").split("\n").filter(function (element) {
            return element.length > 0 && !element.startsWith("#");
        }).forEach(function (line) {
            var _a;
            var _b;
            var kv = line.split("=");
            (_a = all_translation_keys[_b = kv[0]]) !== null && _a !== void 0 ? _a : (all_translation_keys[_b] = {});
            all_translation_keys[kv[0]][name] = kv[1];
        });
    };
    FileTools.GetListOfFiles(__dir__ + "/resources/res/lang", "lang").forEach(function (file) {
        return readFile(new JavaString(file.getName()).replaceFirst("[.][^.]+$", ""));
    });
    for (var key in all_translation_keys) {
        (_a = (_b = all_translation_keys[key])[_c = Translation.getLanguage()]) !== null && _a !== void 0 ? _a : (_b[_c] = all_translation_keys[key].en);
        Translation.addTranslation(key, all_translation_keys[key]);
    }
})();
var TileEntityImplementation = (function () {
    function TileEntityImplementation(defaultValues) {
        this.defaultValues = defaultValues;
        this.useNetworkItemContainer = true;
    }
    TileEntityImplementation.prototype.selfDestroy = function () {
    };
    TileEntityImplementation.prototype.sendPacket = function (name, data) {
    };
    TileEntityImplementation.prototype.sendResponse = function (packetName, data) {
    };
    TileEntityImplementation.prototype.created = function () {
    };
    TileEntityImplementation.prototype.init = function () {
    };
    TileEntityImplementation.prototype.tick = function () {
    };
    TileEntityImplementation.prototype.click = function (id, count, data, coords, player, extra) {
    };
    TileEntityImplementation.prototype.destroyBlock = function (coords, player) {
    };
    TileEntityImplementation.prototype.redstone = function (params) {
    };
    TileEntityImplementation.prototype.projectileHit = function (coords, target) {
    };
    TileEntityImplementation.prototype.destroy = function () {
    };
    TileEntityImplementation.prototype.getGuiScreen = function () {
        return;
    };
    TileEntityImplementation.prototype.getScreenName = function (player, coords) {
        return;
    };
    TileEntityImplementation.prototype.getScreenByName = function (screenName) {
        return;
    };
    TileEntityImplementation.prototype.requireMoreLiquid = function (liquid, amount) {
    };
    return TileEntityImplementation;
}());
var BlockPosUtils;
(function (BlockPosUtils) {
    function offset(pos, face) {
        switch (face) {
          case EBlockSide.NORTH:
            pos.z -= 1;
            break;
          case EBlockSide.SOUTH:
            pos.z += 1;
            break;
          case EBlockSide.EAST:
            pos.x += 1;
            break;
          case EBlockSide.WEST:
            pos.x -= 1;
            break;
          case EBlockSide.UP:
            pos.y += 1;
            break;
          case EBlockSide.DOWN:
            pos.y -= 1;
            break;
          default:
            throw new IllegalArgumentException("Illegal block face id " + face);
        }
        return pos;
    }
    BlockPosUtils.offset = offset;
    function oppositeFace(face) {
        switch (face) {
          case EBlockSide.NORTH:
            return EBlockSide.SOUTH;
          case EBlockSide.SOUTH:
            return EBlockSide.NORTH;
          case EBlockSide.EAST:
            return EBlockSide.WEST;
          case EBlockSide.WEST:
            return EBlockSide.EAST;
          case EBlockSide.UP:
            return EBlockSide.DOWN;
          case EBlockSide.DOWN:
            return EBlockSide.UP;
          default:
            throw new IllegalArgumentException("Illegal block face id " + face);
        }
    }
    BlockPosUtils.oppositeFace = oppositeFace;
})(BlockPosUtils || (BlockPosUtils = {}));
IDRegistry.genBlockID("energyBridge");
Block.createBlock("energyBridge", [{name: "tile.energy_bridge.name", texture: [["energy_bridge_casing", 0]], inCreative: true}], {base: 42, translucency: 0.5, destroytime: 2, explosionres: 5, sound: "metal"});
ToolAPI.registerBlockMaterial(BlockID.energyBridge, "stone", 2, false);
GROUP.push(BlockID.energyBridge);
(function () {
    var render = new ICRender.Model();
    var model = new BlockRenderer.Model();
    model.addBox(0, 0, 0, 1, 1, 1, [["energy_bridge_casing", 0]]);
    model.addBox(1 / 16, 1 / 16, 1 / 16, 15 / 16, 15 / 16, 15 / 16, [["energy_bridge_core", 0]]);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.energyBridge, -1, render);
    ItemModel.getFor(BlockID.energyBridge, -1).setModel(render);
})();
var SAVED_DESTROYED_BRIDGES = {};
Block.registerDropFunction(BlockID.energyBridge, function (coords, id, data, level, enchant, item, region) {
    var key = coords.x + ":" + coords.y + ":" + coords.z + ":" + region.getDimension();
    var energyStored = SAVED_DESTROYED_BRIDGES[key];
    var extra = new ItemExtraData();
    if (typeof energyStored !== "undefined") {
        extra.putInt("bridgeEnergyBuffer", energyStored);
        delete SAVED_DESTROYED_BRIDGES[key];
    }
    return [[id, 1, data, energyStored ? extra : null]];
});
Block.registerPlaceFunction(BlockID.energyBridge, function (coords, item, block, player, region) {
    var r = coords.relative;
    region.setBlock(r.x, r.y, r.z, BlockID.energyBridge, 0);
    var te = TileEntity.addTileEntity(r.x, r.y, r.z, region);
    item.extra != null && item.extra.getInt("bridgeEnergyBuffer", -1) != -1 && (te.data.energy += item.extra.getInt("bridgeEnergyBuffer"));
});
Item.registerNameOverrideFunction(BlockID.energyBridge, function (item, name) {
    if (item.extra == null || item.extra.getInt("bridgeEnergyBuffer", -1) == -1) {
        return name;
    }
    var formatted = Translation.translate("energyconverters.energybridge.stored").replace("%s", item.extra.getInt("bridgeEnergyBuffer", 0) + "/" + bridgeEnergyBuffer + " RF");
    return name + "\n\xa77" + formatted;
});
var TileEntityEnergyBridge = (function (_super) {
    __extends(TileEntityEnergyBridge, _super);
    function TileEntityEnergyBridge() {
        var _this = _super.call(this, {energy: 0}) || this;
        _this.__energy_bridge__ = true;
        return _this;
    }
    TileEntityEnergyBridge.prototype.addEnergy = function (amountIn, simulate) {
        var lossRate = 1 - (conversionLoss / 100);
        var amount = Math.min(amountIn * lossRate, bridgeEnergyBuffer - this.data.energy);
        if (!simulate) {
            this.data.energy += amount;
        }
        return amount;
    };
    TileEntityEnergyBridge.prototype.getEnergy = function (maxAmount, simulate) {
        var amount = Math.min(maxAmount, this.data.energy);
        if (!simulate) {
            this.data.energy -= amount;
        }
        return amount;
    };
    TileEntityEnergyBridge.prototype.getStoredEnergy = function () {
        return this.data.energy;
    };
    TileEntityEnergyBridge.prototype.getStoredEnergyMax = function () {
        return bridgeEnergyBuffer;
    };
    TileEntityEnergyBridge.prototype.destroy = function () {
        var key = this.x + ":" + this.y + ":" + this.z + ":" + this.dimension;
        SAVED_DESTROYED_BRIDGES[key] = this.data.energy;
        return false;
    };
    TileEntityEnergyBridge.prototype.getEnergyStorage = function () {
        return bridgeEnergyBuffer;
    };
    return TileEntityEnergyBridge;
}(TileEntityImplementation));
TileEntity.registerPrototype(BlockID.energyBridge, new TileEntityEnergyBridge());
var TileEntityConverterBase = (function (_super) {
    __extends(TileEntityConverterBase, _super);
    function TileEntityConverterBase() {
        return _super.call(this, {}) || this;
    }
    TileEntityConverterBase.prototype.getEnergyBridge = function () {
        for (var direction = 0; direction < 6; direction++) {
            var pos = BlockPosUtils.offset({x: this.x, y: this.y, z: this.z}, direction);
            var block = this.blockSource.getBlockId(pos.x, pos.y, pos.z);
            if (block != BlockID.energyBridge) {
                continue;
            }
            var te = TileEntity.getTileEntity(pos.x, pos.y, pos.z, this.blockSource);
            if (te == null || !te.__energy_bridge__) {
                continue;
            }
            return te;
        }
        return null;
    };
    TileEntityConverterBase.prototype.getBridgeEnergyStored = function () {
        var energyBridge = this.getEnergyBridge();
        if (energyBridge == null) {
            return 0;
        }
        return energyBridge.getStoredEnergy();
    };
    TileEntityConverterBase.prototype.getBridgeEnergyStoredMax = function () {
        var energyBridge = this.getEnergyBridge();
        if (energyBridge == null) {
            return 0;
        }
        return energyBridge.getStoredEnergyMax();
    };
    return TileEntityConverterBase;
}(TileEntityImplementation));
var TileEntityEnergyConsumer = (function (_super) {
    __extends(TileEntityEnergyConsumer, _super);
    function TileEntityEnergyConsumer() {
        return _super.call(this) || this;
    }
    TileEntityEnergyConsumer.prototype.energyTick = function () {
    };
    TileEntityEnergyConsumer.prototype.isConductor = function () {
        return false;
    };
    TileEntityEnergyConsumer.prototype.canReceiveEnergy = function () {
        return true;
    };
    TileEntityEnergyConsumer.prototype.canExtractEnergy = function () {
        return false;
    };
    TileEntityEnergyConsumer.prototype.energyReceive = function (type, amount, voltage) {
        if (this.getEnergyBridge() == null) {
            return 0;
        }
        var ratio = EnergyTypeRegistry.getValueRatio(type, "RF");
        return Math.round(this.addEnergyToBridge(amount * ratio, false) / ratio);
    };
    TileEntityEnergyConsumer.prototype.addEnergyToBridge = function (amount, simulate) {
        var energyBridge = this.getEnergyBridge();
        if (energyBridge == null) {
            return 0;
        }
        return energyBridge.addEnergy(amount, simulate);
    };
    return TileEntityEnergyConsumer;
}(TileEntityConverterBase));
var TileEntityEnergyProducer = (function (_super) {
    __extends(TileEntityEnergyProducer, _super);
    function TileEntityEnergyProducer() {
        return _super.call(this) || this;
    }
    TileEntityEnergyProducer.prototype.energyReceive = function () {
        return 0;
    };
    TileEntityEnergyProducer.prototype.isConductor = function () {
        return false;
    };
    TileEntityEnergyProducer.prototype.canReceiveEnergy = function () {
        return false;
    };
    TileEntityEnergyProducer.prototype.canExtractEnergy = function () {
        return true;
    };
    TileEntityEnergyProducer.prototype.energyTick = function (type, node) {
        var ratio = EnergyTypeRegistry.getValueRatio("RF", type);
        var o = this.getBridgeEnergyStored();
        var v = Math.round(node.add(o * ratio) / ratio);
        this.retrieveEnergyFromBridge(o - v, false);
    };
    TileEntityEnergyProducer.prototype.retrieveEnergyFromBridge = function (maxAmount, simulate) {
        var energyBridge = this.getEnergyBridge();
        if (energyBridge == null) {
            return 0;
        }
        return energyBridge.getEnergy(maxAmount, simulate);
    };
    return TileEntityEnergyProducer;
}(TileEntityConverterBase));
var TileEntityEuConsumer = (function (_super) {
    __extends(TileEntityEuConsumer, _super);
    function TileEntityEuConsumer(tier) {
        var _this = _super.call(this) || this;
        _this.tier = tier;
        return _this;
    }
    TileEntityEuConsumer.prototype.getTier = function () {
        return this.tier;
    };
    TileEntityEuConsumer.prototype.getMaxPacketSize = function () {
        return 8 << this.getTier() * 2;
    };
    TileEntityEuConsumer.prototype.energyReceive = function (type, amount, voltage) {
        if (this.getEnergyBridge() == null) {
            return 0;
        }
        var toReturn = 0;
        if (amount > this.getMaxPacketSize()) {
            toReturn += amount - this.getMaxPacketSize();
        }
        var output = Math.min(amount, this.getMaxPacketSize());
        toReturn += Math.round(this.addEnergyToBridge(output * 4, false) / 4);
        return toReturn;
    };
    return TileEntityEuConsumer;
}(TileEntityEnergyConsumer));
var TileEntityEuProducer = (function (_super) {
    __extends(TileEntityEuProducer, _super);
    function TileEntityEuProducer(tier) {
        var _this = _super.call(this) || this;
        _this.tier = tier;
        return _this;
    }
    TileEntityEuProducer.prototype.getTier = function () {
        return this.tier;
    };
    TileEntityEuProducer.prototype.getMaxPacketSize = function () {
        return 8 << this.getTier() * 2;
    };
    TileEntityEuProducer.prototype.energyTick = function (type, node) {
        var o = this.getBridgeEnergyStored();
        var amount = Math.min(Math.round(o / 4), this.getMaxPacketSize());
        var v = Math.round(node.add(amount) * 4);
        this.retrieveEnergyFromBridge(amount * 4 - v, false);
    };
    return TileEntityEuProducer;
}(TileEntityEnergyProducer));
var createConsumer = function (id, type, tile, translationKey) {
    IDRegistry.genBlockID(id);
    Block.createBlock(id, [{name: translationKey || "tile." + id + ".name", texture: [[id, 0]], inCreative: true}], {base: 42, destroytime: 2, explosionres: 5, sound: "metal"});
    ToolAPI.registerBlockMaterial(BlockID[id], "stone", 2, false);
    TileEntity.registerPrototype(BlockID[id], tile);
    EnergyTileRegistry.addEnergyTypeForId(BlockID[id], type);
    ICRender.getGroup((type.name === "Eu" ? "ic" : type.name.toLowerCase()) + "-wire").add(BlockID[id], -1);
    GROUP.push(BlockID[id]);
};
createConsumer("energy_consumer_fe", FE, new TileEntityEnergyConsumer());
createConsumer("energy_consumer_rf", RF, new TileEntityEnergyConsumer());
createConsumer("energy_consumer_mj", MJ, new TileEntityEnergyConsumer());
createConsumer("energy_consumer_tesla", TESLA, new TileEntityEnergyConsumer());
createConsumer("energy_consumer_eu1", EU, new TileEntityEuConsumer(1), "tile.energy_consumer_eu.lv.name");
createConsumer("energy_consumer_eu2", EU, new TileEntityEuConsumer(2), "tile.energy_consumer_eu.mv.name");
createConsumer("energy_consumer_eu3", EU, new TileEntityEuConsumer(3), "tile.energy_consumer_eu.hv.name");
createConsumer("energy_consumer_eu4", EU, new TileEntityEuConsumer(4), "tile.energy_consumer_eu.ev.name");
createConsumer("energy_consumer_eu5", EU, new TileEntityEuConsumer(5), "tile.energy_consumer_eu.iv.name");
var createProducer = function (id, type, tile, translationKey) {
    IDRegistry.genBlockID(id);
    Block.createBlock(id, [{name: translationKey || "tile." + id + ".name", texture: [[id, 0]], inCreative: true}], {base: 42, destroytime: 2, explosionres: 5, sound: "metal"});
    ToolAPI.registerBlockMaterial(BlockID[id], "stone", 2, false);
    TileEntity.registerPrototype(BlockID[id], tile);
    EnergyTileRegistry.addEnergyTypeForId(BlockID[id], type);
    ICRender.getGroup((type.name === "Eu" ? "ic" : type.name.toLowerCase()) + "-wire").add(BlockID[id], -1);
    GROUP.push(BlockID[id]);
};
createProducer("energy_producer_fe", FE, new TileEntityEnergyProducer());
createProducer("energy_producer_rf", RF, new TileEntityEnergyProducer());
createProducer("energy_producer_mj", MJ, new TileEntityEnergyProducer());
createProducer("energy_producer_tesla", TESLA, new TileEntityEnergyProducer());
createProducer("energy_producer_eu1", EU, new TileEntityEuProducer(1), "tile.energy_producer_eu.lv.name");
createProducer("energy_producer_eu2", EU, new TileEntityEuProducer(2), "tile.energy_producer_eu.mv.name");
createProducer("energy_producer_eu3", EU, new TileEntityEuProducer(3), "tile.energy_producer_eu.hv.name");
createProducer("energy_producer_eu4", EU, new TileEntityEuProducer(4), "tile.energy_producer_eu.ev.name");
createProducer("energy_producer_eu5", EU, new TileEntityEuProducer(5), "tile.energy_producer_eu.iv.name");
Item.addCreativeGroup("energyConverters", Translation.translate("itemGroup.energy_converters"), GROUP);
var addShaped = function (id, count, data, mask, keys) {
    return Recipes.addShaped({id: id, count: count, data: data}, mask, keys);
};
var addShapeless = function (id, count, data, iddataarr) {
    var ingredients = [];
    for (var i in iddataarr) {
        ingredients.push({id: iddataarr[i][0], data: iddataarr[i][1]});
    }
    Recipes.addShapeless({id: id, count: count, data: data}, ingredients);
};
Callback.addCallback("PostLoaded", function () {
    addShaped(BlockID.energyBridge, 1, 0, ["ibi", "beb", "ibi"], ["i", 265, -1, "b", 101, -1, "e", 381, -1]);
    ["fe", "rf", "mj", "tesla", "eu1", "eu2", "eu3", "eu4", "eu5"].forEach(function (name) {
        addShapeless(BlockID["energy_consumer_" + name], 1, 0, [[BlockID["energy_producer_" + name], -1]]);
        addShapeless(BlockID["energy_producer_" + name], 1, 0, [[BlockID["energy_consumer_" + name], -1]]);
    });
    addShaped(BlockID.energy_producer_fe, 1, 0, ["sis", "frg", "sbs"], ["s", 1, -1, "i", 265, -1, "f", 61, -1, "r", 152, -1, "g", 266, -1, "b", 101, -1]);
    addShaped(BlockID.energy_producer_rf, 1, 0, ["sis", "fbg", "sas"], ["s", 1, -1, "i", 265, -1, "f", 61, -1, "b", 42, -1, "g", 266, -1, "r", 101, -1]);
    addShaped(BlockID.energy_producer_tesla, 1, 0, ["sqs", "fbg", "srs"], ["s", 1, -1, "q", 406, -1, "f", 61, -1, "b", 42, -1, "g", 266, -1, "r", 101, -1]);
});
Callback.addCallback("ModsLoaded", function () {
    ItemID.gear_iron && BlockID.pipe_item_wood && BlockID.engine_wooden && addShaped(BlockID.energy_producer_mj, 1, 0, ["sis", "epg", "sis"], ["s", 1, -1, "i", ItemID.gear_iron, -1, "e", BlockID.engine_wooden, -1, "p", BlockID.pipe_item_wood, -1, "g", 266, -1]);
});
ModAPI.addAPICallback("ICore", function () {
    ["LV", "MV", "HV", "EV"].forEach(function (name, index) {
        var transformerID = "transformer" + name;
        var producerID = "energy_producer_eu" + (index + 1);
        addShaped(BlockID[producerID], 1, 0, ["sws", "tmg", "scs"], ["s", 1, -1, "w", ItemID.cableCopper0, -1, "t", BlockID[transformerID], -1, "m", BlockID.machineBlockBasic, -1, "g", 266, -1, "c", ItemID.coil, -1]);
    });
    addShaped(BlockID.energy_producer_eu5, 1, 0, ["sws", "tmt", "scs"], ["s", 1, -1, "w", ItemID.cableCopper0, -1, "t", BlockID.transformerEV, -1, "m", BlockID.machineBlockBasic, -1, "c", ItemID.coil, -1]);
});
ModAPI.registerAPI("EnergyConvertersAPI", {createConsumer: createConsumer, createProducer: createProducer, requireGlobal: function (command) {
    return eval(command);
}});
Logger.Log("EnergyConverters shared ModAPI shared with name 'EnergyConvertersAPI'.", "EnergyConverters DEBUG");

