var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
IMPORT("EnergyNet");
IMPORT("StorageInterface");
IMPORT("ChargeItem");
IMPORT("VanillaSlots");
var clamp = function (num, min, max) {
    return num < min ? min : (num > max ? max : num);
};
var getStatsFor = function (id) {
    return {generation: __config__.getNumber("panel_stats." + id + ".generation").longValue(), transfer: __config__.getNumber("panel_stats." + id + ".transfer").longValue(), capacity: __config__.getNumber("panel_stats." + id + ".capacity").longValue()};
};
EnergyTypeRegistry.assureEnergyType("FE", 0.25);
var SFR_STUFF = [];
var createItem = function (id) {
    IDRegistry.genItemID("sfr_" + id);
    Item.createItem("sfr_" + id, "item.solarflux:" + id + ".name", {name: "" + id, data: 0}, {stack: 64});
    SFR_STUFF.push(ItemID["sfr_" + id]);
};
var addShaped = function (id, count, data, mask, keys) {
    Recipes.addShaped({id: id, count: count, data: data}, mask, keys);
};
var SUN_INTENSITY_UPDATE_INTERVAL = __config__.getNumber("sun_intensity_update_interval").intValue();
var PICKUP_ENERGY_LOSS = __config__.getNumber("pickup_energy_loss").intValue();
var DIFFERENT_PANEL_HEIGHT = __config__.getBool("different_panel_height");
var RAIN_MULTIPLIER = clamp(__config__.getNumber("rain_multiplier").floatValue(), 0, 1);
var THUNDER_MULTIPLIER = clamp(__config__.getNumber("thunder_multiplier").floatValue(), 0, 1);
var CONTAINER_UPDATE_INTERVAL = __config__.getBool("specify_container_update_interval") ? clamp(__config__.getNumber("container_update_interval").intValue(), 2, 20) : 1;
var ENERGY_AUTO_BALANCING_INTERVAL = __config__.getBool("energy_auto_balancing") ? clamp(__config__.getNumber("energy_auto_balancing_interval").intValue(), 1, 100) : -1;
var Long = java.lang.Long;
var JavaString = java.lang.String;
var JavaInt = java.lang.Integer;
var IllegalArgumentException = java.lang.IllegalArgumentException;
var Color = android.graphics.Color;
var RF = EnergyTypeRegistry.assureEnergyType("RF", 0.25);
(function () {
    var _a;
    var _b, _c;
    var all_translation_keys = {};
    var readFile = function (name) {
        var _a;
        var _b;
        var lines = FileTools.ReadText(__dir__ + "/res/lang/" + name + ".lang").split("\n");
        for (var i in lines) {
            var line = lines[i];
            if (line.length == 0 || line.startsWith("#")) {
                continue;
            }
            var kv = line.split("=");
            (_a = all_translation_keys[_b = kv[0]]) !== null && _a !== void 0 ? _a : (all_translation_keys[_b] = {});
            all_translation_keys[kv[0]][name] = kv[1];
        }
    };
    var files = FileTools.GetListOfFiles(__dir__ + "/res/lang/", "");
    for (var i in files) {
        readFile(new JavaString(files[i].getName()).replaceFirst("[.][^.]+$", ""));
    }
    for (var key in all_translation_keys) {
        (_a = (_b = all_translation_keys[key])[_c = Translation.getLanguage()]) !== null && _a !== void 0 ? _a : (_b[_c] = all_translation_keys[key].en);
        Translation.addTranslation(key, all_translation_keys[key]);
    }
})();
(function () {
    var _a;
    var _b;
    var obj = {en: "Inventory", ar: "\u062c\u064e\u0631\u0652\u062f\u064c", pt: "Invent\xe1rio", zh: "\u5b58\u8d27", hr: "Inventar", cs: "Invent\xe1\u0159", da: "Opg\xf8relse", nl: "Inventaris", es: "Inventario", fi: "Inventaario", fr: "Inventaire", de: "Inventar", el: "\u03ba\u03b1\u03c4\u03ac\u03bb\u03bf\u03b3\u03bf\u03c2 \u03b1\u03c0\u03bf\u03b3\u03c1\u03b1\u03c6\u03ad\u03bd\u03c4\u03c9\u03bd \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03b9\u03bc\u03ad\u03bd\u03c9\u03bd", it: "Inventario", ja: "\u76ee\u9332", ko: "\ud488\ubaa9 \uc77c\ub78c", nb: "Liste", pl: "Inwentarz", ro: "Inventar", ru: "\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u044c", sv: "inventarief\xf6rteckning", th: "\u0e23\u0e32\u0e22\u0e01\u0e32\u0e23\u0e2a\u0e34\u0e48\u0e07\u0e02\u0e2d\u0e07", tr: "Envanter", uk: "I\u043d\u0432\u0435\u043d\u0442\u0430\u0440", vi: "b\u1ea3n ki\u1ec3m k\xea"};
    (_a = obj[_b = Translation.getLanguage()]) !== null && _a !== void 0 ? _a : (obj[_b] = obj.en);
    Translation.addTranslation("sfr.inventory", obj);
})();
var SolarUpgrades;
(function (SolarUpgrades) {
    SolarUpgrades.upgrades = {};
    function registerUpgrade(id, params) {
        var _a, _b, _c;
        (_a = params.update) !== null && _a !== void 0 ? _a : (params.update = function () {
            return void 0;
        });
        (_b = params.canStayInPanel) !== null && _b !== void 0 ? _b : (params.canStayInPanel = function () {
            return true;
        });
        (_c = params.canInstall) !== null && _c !== void 0 ? _c : (params.canInstall = function () {
            return true;
        });
        SolarUpgrades.upgrades[id] = params;
    }
    SolarUpgrades.registerUpgrade = registerUpgrade;
    function isUpgrade(id) {
        return !!SolarUpgrades.upgrades[id];
    }
    SolarUpgrades.isUpgrade = isUpgrade;
    function getUpgrade(id) {
        return isUpgrade(id) ? SolarUpgrades.upgrades[id] : null;
    }
    SolarUpgrades.getUpgrade = getUpgrade;
    function removeUpgrade(id) {
        delete SolarUpgrades.upgrades[id];
    }
    SolarUpgrades.removeUpgrade = removeUpgrade;
})(SolarUpgrades || (SolarUpgrades = {}));
var SunUtils;
(function (SunUtils) {
    function calculateCelestialAngle(worldTime, partialTicks) {
        var i = worldTime % 24000;
        var f = (i + partialTicks) / 24000 - 0.25;
        if (f < 0) {
            ++f;
        }
        if (f > 1) {
            --f;
        }
        var f1 = 1 - (Math.cos(f * Math.PI) + 1) / 2;
        f += (f1 - f) / 3;
        return f;
    }
    SunUtils.calculateCelestialAngle = calculateCelestialAngle;
    function getCelestialAngle(partialTicks) {
        return calculateCelestialAngle(World.getWorldTime(), partialTicks);
    }
    SunUtils.getCelestialAngle = getCelestialAngle;
    function getCelestialAngleRadians(partialTicks) {
        return getCelestialAngle(partialTicks) * Math.PI * 2;
    }
    SunUtils.getCelestialAngleRadians = getCelestialAngleRadians;
})(SunUtils || (SunUtils = {}));
Network.addClientPacket("sfr.anvil", function (packetData) {
    World.playSound(packetData.x, packetData.y, packetData.z, "random.anvil_land", 0.1, 1);
});
Network.addClientPacket("sfr.levelup", function (packetData) {
    World.playSound(packetData.x, packetData.y, packetData.z, "random.levelup", 0.25, 1.8);
});
var Sounds;
(function (Sounds) {
    function anvil(x, y, z, dimension) {
        new NetworkConnectedClientList().setupDistancePolicy(x, y, z, dimension, 64).send("sfr.anvil", {x: x, y: y, z: z});
    }
    Sounds.anvil = anvil;
    function levelup(x, y, z, dimension) {
        new NetworkConnectedClientList().setupDistancePolicy(x, y, z, dimension, 64).send("sfr.levelup", {x: x, y: y, z: z});
    }
    Sounds.levelup = levelup;
})(Sounds || (Sounds = {}));
var BlockPosUtils;
(function (BlockPosUtils) {
    function BlockPosFaceFromBlockPos(bp, side, rate) {
        return __assign(__assign({}, bp), {side: side, rate: rate !== null && rate !== void 0 ? rate : 1});
    }
    BlockPosUtils.BlockPosFaceFromBlockPos = BlockPosFaceFromBlockPos;
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
    function distanceSq(b1, b2) {
        return Math.pow(b2.x - b1.x, 2) + Math.pow(b2.y - b1.y, 2) + Math.pow(b2.z - b1.z, 2);
    }
    BlockPosUtils.distanceSq = distanceSq;
    function distance(b1, b2) {
        return Math.sqrt(distanceSq(b1, b2));
    }
    BlockPosUtils.distance = distance;
    function fromEntity(entity) {
        var pos = Entity.getPosition(entity);
        return __assign(__assign({}, pos), {dimension: Entity.getDimension(entity)});
    }
    BlockPosUtils.fromEntity = fromEntity;
    function fromTile(tile) {
        return {x: tile.x, y: tile.y, z: tile.z, dimension: tile.dimension};
    }
    BlockPosUtils.fromTile = fromTile;
    function compare(pos1, pos2) {
        return pos1.x == pos2.x && pos1.y == pos2.y && pos1.z == pos2.z && pos1.dimension == pos2.dimension;
    }
    BlockPosUtils.compare = compare;
})(BlockPosUtils || (BlockPosUtils = {}));
var Traversal = (function () {
    function Traversal() {
        this.cache = [];
    }
    Traversal.prototype.update = function (tile) {
        if (World.getThreadTime() % 20 == 0) {
            this.cache = [];
            tile.data.traversal = [];
            this.cache.push({x: tile.x, y: tile.y, z: tile.z, dimension: tile.dimension});
            this.findMachines(tile, tile.data.traversal);
        }
    };
    Traversal.prototype.findMachines = function (tile, acceptors) {
        for (var i in this.cache) {
            var pos = this.cache[i];
            var _loop_1 = function (face) {
                var p = BlockPosUtils.offset(pos, face);
                if (BlockPosUtils.distance(p, this_1.cache[0]) > 25) {
                    return "continue";
                }
                var t = TileEntity.getTileEntity(p.x, p.y, p.z, tile.blockSource);
                if (t != null && t.isEnergyTile && t.blockSource) {
                    var e = t;
                    if (e.canReceiveEnergy(BlockPosUtils.oppositeFace(face), "RF") && !!this_1.cache.find(function (item) {
                        return BlockPosUtils.compare(item, p);
                    })) {
                        this_1.cache.push(p);
                        acceptors.push(__assign(__assign({}, p), {side: BlockPosUtils.oppositeFace(face), rate: 1}));
                    }
                }
            };
            var this_1 = this;
            for (var face = 0; face > 6; face++) {
                _loop_1(face);
            }
        }
    };
    return Traversal;
}());
var formatNumber = function (num) {
    if (num >= 1000000000000) {
        return Math.floor(num / 100000000000) / 10 + "T";
    }
    if (num >= 1000000000) {
        return Math.floor(num / 100000000) / 10 + "B";
    }
    if (num >= 1000000) {
        return Math.floor(num / 100000) / 10 + "M";
    }
    if (num >= 1000) {
        return Math.floor(num / 100) / 10 + "K";
    }
    return num.toString();
};
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
var createSolarGuiFor = function (header) {
    var offset = Math.floor((UI.getScreenHeight() - 440) / 2);
    var win = new UI.Window({location: {x: 0, y: 0, width: 1000, height: UI.getScreenHeight()}, params: {}, drawing: [{type: "background", color: Color.argb(90, 0, 0, 0)}, {type: "bitmap", bitmap: "sfr.solarui", x: 275, y: offset, scale: 2.5}, {type: "bitmap", bitmap: "sfr.bar_back", x: 640, y: offset + 100, scale: 2.5}, {type: "bitmap", bitmap: "sfr.bar_back", x: 590, y: offset + 100, scale: 2.5}, {type: "bitmap", bitmap: "classic_frame_tab_right", x: 710, y: offset, scale: 2.5}], elements: (function () {
        var result = {textHeader: {type: "text", x: 500, y: -3, font: {color: Color.WHITE, size: 20, alignment: UI.Font.ALIGN_CENTER}, text: header}, energyBarScale: {type: "scale", x: 590, y: offset + 100, scale: 2.5, direction: 1, value: 0, bitmap: "sfr.energy_bar_scale"}, sunBarScale: {type: "scale", x: 640, y: offset + 100, scale: 2.5, direction: 1, value: 0, bitmap: "sfr.sun_bar_scale"}, textCharge: {type: "text", x: 290, y: offset + 20, width: 200, height: 25, font: {color: Color.BLACK, size: 20}, text: JavaString.format(Translation.translate("info.solarflux.energy.stored1"), [Long.valueOf(0)])}, textCapacity: {type: "text", x: 290, y: offset + 42, width: 200, height: 25, font: {color: Color.BLACK, size: 20}, text: JavaString.format(Translation.translate("info.solarflux.energy.capacity"), [Long.valueOf(0)])}, textGeneration: {type: "text", x: 290, y: offset + 70, width: 200, height: 25, font: {color: Color.BLACK, size: 20}, text: JavaString.format(Translation.translate("info.solarflux.energy.generation"), [Long.valueOf(0)])}, textEfficiency: {type: "text", x: 290, y: offset + 95, width: 200, height: 25, font: {color: Color.BLACK, size: 20}, text: JavaString.format(Translation.translate("info.solarflux.energy.efficiency"), [JavaInt.valueOf(0)])}, textInventory: {type: "text", x: 290, y: offset + 210, width: 200, height: 25, font: {color: Color.BLACK, size: 20}, text: Translation.translate("sfr.inventory")}, slotCharge: {type: "slot", x: 640, y: offset + 20, bitmap: "sfr.charge_slot", size: 45, isValid: function (id) {
            return ChargeItemRegistry.isValidItem(id, "RF", 1);
        }, visual: false}, closeButton: {type: "closeButton", bitmap: "classic_close_button", bitmap2: "classic_close_button_down", scale: 3, x: 710, y: offset}};
        for (var i = 0; i < 5; i++) {
            result["slotUpgrade" + i] = {type: "slot", x: 320 + 45 * i, y: offset + 140, size: 45, isValid: function (id, count, data, container, item) {
                return SolarUpgrades.isUpgrade(id) && SolarUpgrades.getUpgrade(id).canInstall(container.getParent(), item, new ItemContainer(container));
            }, visual: false};
        }
        for (var i = 0; i < 9; i++) {
            result["invSlot" + i] = {type: "invSlot", x: 293 + 45 * i, y: offset + 386, size: 45, index: i};
        }
        for (var i = 9; i < 36; i++) {
            result["invSlot" + i] = {type: "invSlot", x: 293 + 45 * (i % 9), y: offset + 196 + Math.floor(i / 9) * 45, size: 45, index: i};
        }
        return result;
    })()});
    win.setInventoryNeeded(true);
    win.setCloseOnBackPressed(true);
    return win;
};
var SFRTile;
(function (SFRTile) {
    SFRTile.TEMPORARY_TILES = {};
    var PanelTile = (function (_super) {
        __extends(PanelTile, _super);
        function PanelTile(name, generation, capacity, transfer) {
            var _this = _super.call(this, {energy: 0, canSeeSky: false, sunIntensity: 0, generation: 0, finalGeneration: 0, transfer: 0, capacity: 0, upgradeMap: {}, extraMap: {}, isTraversalEnabled: false, traversal: [], traversalObj: new Traversal()}) || this;
            _this.__sfr__ = true;
            _this.initialGeneration = _this.defaultValues.generation = _this.defaultValues.finalGeneration = generation;
            _this.initialTransfer = _this.defaultValues.transfer = transfer;
            _this.initialCapacity = _this.defaultValues.capacity = capacity;
            var screen = createSolarGuiFor(Translation.translate("tile.solarflux:solar_panel_" + name.replace("sfr_", "") + ".name"));
            _this.getScreenByName = function () {
                return screen;
            };
            return _this;
        }
        PanelTile.prototype.isConductor = function () {
            return false;
        };
        PanelTile.prototype.canReceiveEnergy = function () {
            return false;
        };
        PanelTile.prototype.canExtractEnergy = function () {
            return true;
        };
        PanelTile.prototype.energyReceive = function () {
            return 0;
        };
        PanelTile.prototype.getEnergyStorage = function () {
            return this.data.capacity;
        };
        PanelTile.prototype.init = function () {
            var _this = this;
            this.data.traversalObj = new Traversal();
            this.data.canSeeSky = this.blockSource.canSeeSky(this.x, this.y + 1, this.z);
            this.calculateEfficiency();
            this.updateGenerationWithSunIntensity();
            this.container.setGlobalAddTransferPolicy(function (cont, name, id, count, data, extra, player) {
                if (name.startsWith("slotUpgrade")) {
                    var isUpgrade = SolarUpgrades.isUpgrade(id);
                    if (!isUpgrade) {
                        return 0;
                    }
                    var upgrade = SolarUpgrades.getUpgrade(id);
                    var canInstall = upgrade.canInstall(_this, {id: id, count: count, data: data, extra: extra}, _this.container);
                    if (!canInstall) {
                        return 0;
                    }
                    var already = _this.data.upgradeMap[id];
                    if (!already) {
                        return count;
                    }
                    var willbe = already + count;
                    if (willbe <= upgrade.getMaxUpgrades()) {
                        return count;
                    }
                    return willbe - upgrade.getMaxUpgrades();
                } else {
                    if (name == "slotCharge") {
                        return ChargeItemRegistry.isValidItem(id, "RF", 1) ? count : 0;
                    }
                }
                return count;
            });
        };
        PanelTile.prototype.getUpgrades = function (type) {
            var c = 0;
            for (var i = 0; i < 5; i++) {
                var stack = this.container.getSlot("slotUpgrade" + i);
                if (!stack.isEmpty() && stack.id == type) {
                    c += stack.count;
                }
            }
            return c;
        };
        PanelTile.prototype.tryPutUpgrades = function (id, count, data, extra, player, inventorySlot, isSingle, sound) {
            var amt = this.getUpgrades(id);
            var iu = SolarUpgrades.getUpgrade(id);
            if (iu != null && amt < iu.getMaxUpgrades() && iu.canInstall(this, {id: id, count: count, data: data, extra: extra}, this.container)) {
                var installed = false;
                var actor = new PlayerActor(player);
                for (var i = 0; i < 5; i++) {
                    var stack = this.container.getSlot("slotUpgrade" + i);
                    if (stack.id == id && stack.extra == extra) {
                        var allow = isSingle ? 1 : Math.min(iu.getMaxUpgrades() - this.getUpgrades(id), Math.min(Item.getMaxStack(id) - count, count));
                        actor.setInventorySlot(inventorySlot, id, count - allow, data, extra);
                        this.container.setSlot("slotUpgrade" + i, id, count + allow, data, extra);
                        installed = true;
                        break;
                    } else {
                        if (stack.isEmpty()) {
                            var allow = isSingle ? 1 : Math.min(iu.getMaxUpgrades() - this.getUpgrades(id), count);
                            actor.setInventorySlot(inventorySlot, id, count - allow, data, extra);
                            this.container.setSlot("slotUpgrade" + i, id, allow, data, extra);
                            installed = true;
                            break;
                        }
                    }
                    this.container.sendChanges();
                }
                installed && sound && Sounds.anvil(this.x, this.y, this.z, this.dimension);
            }
        };
        PanelTile.prototype.computeSunIntensity = function () {
            if (!this.data.canSeeSky) {
                return 0;
            }
            var celestialAngleRadians = SunUtils.getCelestialAngleRadians(1);
            if (celestialAngleRadians > Math.PI) {
                celestialAngleRadians = 2 * Math.PI - celestialAngleRadians;
            }
            var lowLightCount = 0;
            var multiplicator = 1.5 - (lowLightCount * 0.122);
            var displacement = 1.2 - (lowLightCount * 0.08);
            return clamp(multiplicator * Math.cos(celestialAngleRadians / displacement), 0, 1);
        };
        PanelTile.prototype.calculateEfficiency = function () {
            var eff = this.computeSunIntensity();
            var weather = World.getWeather();
            var raining = weather.rain / 10;
            raining = raining > 0.2 ? (raining - 0.2) / 0.8 : 0;
            raining = Math.sin(raining * Math.PI / 2);
            raining = 1 - raining * (1 - RAIN_MULTIPLIER);
            var thundering = weather.thunder / 10;
            thundering = thundering > 0.75 ? (thundering - 0.75) / 0.25 : 0;
            thundering = Math.sin(thundering * Math.PI / 2);
            thundering = 1 - thundering * (1 - THUNDER_MULTIPLIER);
            eff *= raining * thundering;
            this.data.sunIntensity = eff;
            this.container.setScale("sunBarScale", this.data.sunIntensity);
            this.container.sendChanges();
        };
        PanelTile.prototype.updateGenerationWithSunIntensity = function () {
            this.data.finalGeneration = Math.round(this.data.generation * this.data.sunIntensity);
            this.container.setText("textEfficiency", JavaString.format(Translation.translate("info.solarflux.energy.efficiency"), [JavaInt.valueOf(Math.round(this.data.sunIntensity * 100))]));
            this.container.sendChanges();
        };
        PanelTile.prototype.resetUpgrades = function () {
            this.data.generation = this.data.finalGeneration = this.initialGeneration;
            this.data.transfer = this.initialTransfer;
            this.data.capacity = this.initialCapacity;
            this.data.upgradeMap = {};
            this.data.extraMap = {};
            this.data.isTraversalEnabled = false;
        };
        PanelTile.prototype.fillUpgradeMap = function () {
            for (var i = 0; i < 5; i++) {
                var slot = this.container.getSlot("slotUpgrade" + i);
                var upgrade = SolarUpgrades.getUpgrade(slot.id);
                if (upgrade != null) {
                    var map = this.data.upgradeMap;
                    if (!map[slot.id]) {
                        map[slot.id] = 0;
                    }
                    map[slot.id] = Math.min(map[slot.id] + slot.count, upgrade.getMaxUpgrades());
                    if (slot.extra != null) {
                        this.data.extraMap[slot.id] = slot.extra;
                    }
                }
            }
        };
        PanelTile.prototype.applyUpgrades = function () {
            var _a;
            this.resetUpgrades();
            this.fillUpgradeMap();
            for (var key in this.data.upgradeMap) {
                var upgradeId = parseInt(key), upgrade = SolarUpgrades.getUpgrade(upgradeId);
                upgrade != null && upgrade.update(this, this.data.upgradeMap[key], (_a = this.data.extraMap[upgradeId]) !== null && _a !== void 0 ? _a : null);
            }
            this.updateGenerationWithSunIntensity();
        };
        PanelTile.prototype.chargeItem = function () {
            var slot = this.container.getSlot("slotCharge");
            if (slot.id != 0) {
                var data = ChargeItemRegistry.getItemData(slot.id);
                if (typeof data !== "undefined") {
                    var type = data.energy;
                    var ratio = EnergyTypeRegistry.getValueRatio("FE", type);
                    var amount = Math.round(Math.min(this.data.energy, this.data.transfer) * ratio);
                    this.data.energy -= Math.round(ChargeItemRegistry.addEnergyToSlot(slot, type, amount, data.tier) / ratio);
                }
            }
        };
        PanelTile.prototype.tick = function () {
            StorageInterface.checkHoppers(this);
            if (World.getThreadTime() % 20 == 0) {
                var canSeeSky = this.blockSource.canSeeSky(this.x, this.y + 1, this.z);
                if (canSeeSky == !this.data.canSeeSky) {
                    this.data.canSeeSky = canSeeSky;
                    this.calculateEfficiency();
                }
                this.data.traversal = [];
            }
            World.getThreadTime() % SUN_INTENSITY_UPDATE_INTERVAL == 0 && this.calculateEfficiency();
            this.applyUpgrades();
            if (this.data.capacity > this.data.energy) {
                this.data.energy += Math.min(this.data.capacity - this.data.energy, this.data.finalGeneration);
            }
            this.chargeItem();
            if (ENERGY_AUTO_BALANCING_INTERVAL != -1 && (ENERGY_AUTO_BALANCING_INTERVAL == 1 || World.getThreadTime() % ENERGY_AUTO_BALANCING_INTERVAL == 0)) {
                for (var hor = 2; hor < 6; hor++) {
                    var pos = BlockPosUtils.offset(BlockPosUtils.fromTile(this), hor);
                    var tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, this.blockSource);
                    if (tile == null) {
                        continue;
                    }
                    if (tile.__sfr__) {
                        this.autoBalanceEnergy(tile);
                    }
                }
            }
            if (this.data.traversal.length > 0) {
                for (var i = 0; i < this.data.traversal.length; ++i) {
                    var traverse = this.data.traversal[i];
                    var tile = TileEntity.getTileEntity(traverse.x, traverse.y, traverse.z, this.blockSource);
                    if (tile == null) {
                        continue;
                    }
                    if (tile.isEnergyTile && !tile.__sfr__) {
                        if (tile.blockSource && tile.canReceiveEnergy(traverse.side, "RF")) {
                            var amount = Math.min(this.data.energy, this.data.transfer);
                            this.data.energy -= tile.energyReceive("RF", amount, amount);
                        }
                    }
                }
            }
            if (CONTAINER_UPDATE_INTERVAL <= 1 || World.getThreadTime() % CONTAINER_UPDATE_INTERVAL == 0) {
                this.container.setText("textCharge", JavaString.format(Translation.translate("info.solarflux.energy.stored1"), [Long.valueOf(this.data.energy)]));
                this.container.setText("textCapacity", JavaString.format(Translation.translate("info.solarflux.energy.capacity"), [Long.valueOf(this.data.capacity)]));
                this.container.setText("textGeneration", JavaString.format(Translation.translate("info.solarflux.energy.generation"), [Long.valueOf(this.data.finalGeneration)]));
                this.container.setScale("energyBarScale", this.data.energy / this.data.capacity);
                this.container.sendChanges();
            }
        };
        PanelTile.prototype.autoBalanceEnergy = function (solar) {
            var delta = this.data.energy - solar.data.energy;
            if (delta < 0) {
                return solar.autoBalanceEnergy(this);
            } else {
                if (delta > 0) {
                    return this.extractEnergy(solar.receiveEnergyInternal(this.extractEnergy(solar.receiveEnergyInternal(delta / 2, true), true), false), false);
                }
            }
            return 0;
        };
        PanelTile.prototype.extractEnergy = function (maxExtract, simulate) {
            var energyExtracted = Math.min(this.data.energy, Math.min(this.data.transfer, maxExtract));
            if (!simulate) {
                this.data.energy -= energyExtracted;
            }
            return energyExtracted;
        };
        PanelTile.prototype.receiveEnergyInternal = function (maxReceive, simulate) {
            var energyReceived = Math.min(Math.min(this.data.capacity - this.data.energy, JavaInt.MAX_VALUE), Math.min(this.data.transfer, maxReceive));
            if (!simulate) {
                this.data.energy += energyReceived;
            }
            return energyReceived;
        };
        PanelTile.prototype.click = function (id, count, data, coords, player, extra) {
            if (Entity.getSneaking(player)) {
                var carried = Entity.getCarriedItem(player);
                carried.count > 0 && SolarUpgrades.isUpgrade(carried.id) && this.tryPutUpgrades(id, count, data, extra, player, new PlayerActor(player).getSelectedSlot(), false, true);
            } else {
                Game.prevent();
                this.container.openFor(Network.getClientForPlayer(player), "main");
            }
        };
        PanelTile.prototype.destroy = function () {
            SFRTile.TEMPORARY_TILES[this.x + ":" + this.y + ":" + this.z + ":" + this.dimension] = this.data.energy - Math.round(this.data.energy * PICKUP_ENERGY_LOSS / 100);
            return false;
        };
        PanelTile.prototype.energyTick = function (type, node) {
            if (!this.data.isTraversalEnabled && this.data.traversal.length == 0) {
                var output = Math.min(this.data.energy, this.data.transfer);
                this.data.energy += node.add(output) - output;
            }
        };
        return PanelTile;
    }(TileEntityImplementation));
    SFRTile.PanelTile = PanelTile;
    function createPanelTileFor(id, generation, capacity, transfer) {
        TileEntity.registerPrototype(BlockID[id], new PanelTile(id, generation, capacity, transfer));
        EnergyTileRegistry.addEnergyTypeForId(BlockID[id], RF);
        var slots = {};
        for (var i = 0; i < 5; i++) {
            slots["slotUpgrade" + i] = {input: true, output: true, isValid: function (item, s, tileEntity) {
                return SolarUpgrades.isUpgrade(item.id) && SolarUpgrades.getUpgrade(item.id).canInstall(tileEntity, item, tileEntity.container);
            }};
        }
        slots["slotCharge"] = {input: true, output: true, isValid: function (item) {
            return ChargeItemRegistry.isValidItem(item.id, "RF", 1);
        }};
        StorageInterface.createInterface(BlockID[id], {slots: slots});
        VanillaSlots.registerForTile(BlockID[id]);
    }
    SFRTile.createPanelTileFor = createPanelTileFor;
})(SFRTile || (SFRTile = {}));
var SolarPanel;
(function (SolarPanel) {
    var NOT = ICRender.NOT;
    var AND = ICRender.AND;
    var OR = ICRender.OR;
    var BLOCK = ICRender.BLOCK;
    function setupModelFor(name, height) {
        ICRender.getGroup("rf-wire").add(BlockID["sfr_" + name], -1);
        var render = new ICRender.Model();
        var group = ICRender.getGroup("sfr_" + name);
        group.add(BlockID["sfr_" + name], -1);
        render.addEntry(BlockRenderer.createTexturedBox(0, 0, 0, 1, height, 1, [["sfr_" + name + "_base", 0], ["sfr_" + name + "_top", 0], ["sfr_" + name + "_base", 0]]));
        var shape = new ICRender.CollisionShape();
        shape.addEntry().addBox(0, 0, 0, 1, height, 1);
        var N = BLOCK(0, 0, -1, group, false);
        var S = BLOCK(0, 0, 1, group, false);
        var E = BLOCK(1, 0, 0, group, false);
        var W = BLOCK(-1, 0, 0, group, false);
        var boxes = [{box: [1 / 16, 0, 15 / 16, 1 / 16], condition: NOT(N)}, {box: [1 / 16, 15 / 16, 15 / 16, 1], condition: NOT(S)}, {box: [15 / 16, 1 / 16, 1, 15 / 16], condition: NOT(E)}, {box: [0, 1 / 16, 1 / 16, 15 / 16], condition: NOT(W)}, {box: [15 / 16, 0, 1, 1 / 16], condition: OR(AND(NOT(N), NOT(E)), AND(NOT(N), E), AND(N, NOT(E)))}, {box: [0, 0, 1 / 16, 1 / 16], condition: OR(AND(NOT(N), NOT(W)), AND(NOT(N), W), AND(N, NOT(W)))}, {box: [15 / 16, 15 / 16, 1, 1], condition: OR(AND(NOT(S), NOT(E)), AND(NOT(S), E), AND(S, NOT(E)))}, {box: [0, 15 / 16, 1 / 16, 1], condition: OR(AND(NOT(S), NOT(W)), AND(NOT(S), W), AND(S, NOT(W)))}];
        for (var i in boxes) {
            var box = boxes[i];
            var part = new BlockRenderer.Model();
            part.addBox(box.box[0], height, box.box[1], box.box[2], height + 0.4 / 16, box.box[3], [["sfr_" + name + "_base", 0]]);
            render.addEntry(part).setCondition(box.condition);
            shape.addEntry().addBox(box.box[0], height, box.box[1], box.box[2], height + 0.4 / 16, box.box[3]).setCondition(box.condition);
        }
        Block.setShape(BlockID["sfr_" + name], 0, 0, 0, 1, height, 1);
        BlockRenderer.setStaticICRender(BlockID["sfr_" + name], -1, render);
        BlockRenderer.setCustomCollisionAndRaycastShape(BlockID["sfr_" + name], -1, shape);
        ItemModel.getFor(BlockID["sfr_" + name], -1).setModel(render);
    }
    SolarPanel.setupModelFor = setupModelFor;
    function createPanelFromStats(name, height, generation, capacity, transfer) {
        IDRegistry.genBlockID("sfr_" + name);
        Block.createBlock("sfr_" + name, [{name: "tile.solarflux:solar_panel_" + name + ".name", texture: [["sfr_" + name + "_base", 0], ["sfr_" + name + "_top", 0], ["sfr_" + name + "_base", 0]], inCreative: true}], {base: 1, destroytime: 5, solid: true, sound: "stone", translucency: 1});
        ToolAPI.registerBlockMaterial(BlockID["sfr_" + name], "stone", 1, false);
        setupModelFor(name, height);
        SFRTile.createPanelTileFor("sfr_" + name, generation, capacity, transfer);
        Block.registerDropFunctionForID(BlockID["sfr_" + name], function (coords, blockID, blockData, level, enchant, item, region) {
            var toStore = SFRTile.TEMPORARY_TILES[coords.x + ":" + coords.y + ":" + coords.z + ":" + region.getDimension()];
            var extra = new ItemExtraData();
            if (toStore) {
                extra.putLong("SFREnergy", toStore !== null && toStore !== void 0 ? toStore : 0);
                delete SFRTile.TEMPORARY_TILES[coords.x + ":" + coords.y + ":" + coords.z + ":" + region.getDimension()];
            } else {
                Logger.Log("Energy to be saved into itemstack from broken panel was not found!", "SolarFluxReborn DEBUG");
            }
            return [[blockID, 1, blockData, toStore ? extra : null]];
        }, 1);
        Block.registerPlaceFunctionForID(BlockID["sfr_" + name], function (coords, item, block, player, region) {
            var r = coords.relative;
            region.setBlock(r.x, r.y, r.z, BlockID["sfr_" + name], 0);
            TileEntity.addTileEntity(r.x, r.y, r.z, region);
            if (item.extra != null && item.extra.getLong("SFREnergy", -1) != -1) {
                var panel = TileEntity.getTileEntity(r.x, r.y, r.z);
                panel.data.energy = Math.min(panel.data.energy + item.extra.getInt("SFREnergy", panel.data.capacity));
            }
        });
        Item.registerNameOverrideFunction(BlockID["sfr_" + name], function (item, name) {
            if (item.extra == null) {
                return name;
            }
            if (item.extra.getLong("SFREnergy", -1) == -1) {
                return name;
            }
            var translated = Translation.translate("info.solarflux.energy.stored2");
            var energyInItem = item.extra.getLong("SFREnergy");
            var formatted = JavaString.format(translated, [new JavaString(formatNumber(energyInItem)), new JavaString(formatNumber(capacity))]);
            return name + "\n\xa77" + formatted;
        });
        SFR_STUFF.push(BlockID["sfr_" + name]);
    }
    SolarPanel.createPanelFromStats = createPanelFromStats;
})(SolarPanel || (SolarPanel = {}));
var createPanel = function (name) {
    var nameNumeric = parseInt(name);
    var stats = getStatsFor("sfr_" + name);
    if (!Number.isNaN(nameNumeric)) {
        SolarPanel.createPanelFromStats(name, DIFFERENT_PANEL_HEIGHT ? nameNumeric / 16 : 6 / 16, stats.generation, stats.capacity, stats.transfer);
    } else {
        SolarPanel.createPanelFromStats(name, 6 / 16, stats.generation, stats.capacity, stats.transfer);
    }
};
createItem("blank_upgrade");
createItem("block_charging_upgrade");
IDRegistry.genItemID("sfr_block_charging_upgrade_bound");
Item.createItem("sfr_block_charging_upgrade_bound", "item.solarflux:block_charging_upgrade.name", {name: "block_charging_upgrade", meta: 0}, {stack: 1, isTech: true});
Item.setGlint(ItemID.sfr_block_charging_upgrade_bound, true);
Item.registerNameOverrideFunction(ItemID.sfr_block_charging_upgrade_bound, function (item, name) {
    if (item.extra == null) {
        return "Block Charging Upgrade (BROKEN)";
    }
    return name + "\n\xa77X: " + item.extra.getInt("PosX") + ", Y: " + item.extra.getInt("PosY") + ", Z: " + item.extra.getInt("PosZ") + ", Dimension: " + item.extra.getInt("Dim");
});
createItem("capacity_upgrade");
createItem("dispersive_upgrade");
createItem("efficiency_upgrade");
createItem("furnace_upgrade");
createItem("mirror");
createItem("photovoltaic_cell_1");
createItem("photovoltaic_cell_2");
createItem("photovoltaic_cell_3");
createItem("photovoltaic_cell_4");
createItem("photovoltaic_cell_5");
createItem("photovoltaic_cell_6");
createPanel("1");
createPanel("2");
createPanel("3");
createPanel("4");
createPanel("5");
createPanel("6");
createPanel("7");
createPanel("8");
createItem("transfer_rate_upgrade");
createItem("traversal_upgrade");
Item.getItemById("sfr_block_charging_upgrade").setMaxStackSize(1);
Item.getItemById("sfr_capacity_upgrade").setMaxStackSize(10);
Item.getItemById("sfr_dispersive_upgrade").setMaxStackSize(1);
Item.getItemById("sfr_efficiency_upgrade").setMaxStackSize(20);
Item.getItemById("sfr_furnace_upgrade").setMaxStackSize(1);
Item.getItemById("sfr_transfer_rate_upgrade").setMaxStackSize(10);
Item.getItemById("sfr_traversal_upgrade").setMaxStackSize(1);
Item.addCreativeGroup("sfr", Translation.translate("itemGroup.solarflux"), SFR_STUFF);
Item.registerUseFunction(ItemID.sfr_block_charging_upgrade, function (coords, item, block, player) {
    if (Entity.getSneaking(player)) {
        var region = BlockSource.getDefaultForActor(player), tile = TileEntity.getTileEntity(coords.x, coords.y, coords.z, region);
        if (tile != null && tile.isEnergyTile) {
            var etile = tile;
            if (etile.canReceiveEnergy(coords.side, "RF")) {
                var extra = new ItemExtraData();
                extra.putInt("Dim", region.getDimension());
                extra.putInt("PosX", coords.x);
                extra.putInt("PosY", coords.y);
                extra.putInt("PosZ", coords.z);
                extra.putInt("Face", coords.side);
                Entity.setCarriedItem(player, ItemID.sfr_block_charging_upgrade_bound, 1, 0, extra);
                Sounds.levelup(coords.x, coords.y, coords.z, region.getDimension());
            }
        }
    }
});
Item.registerUseFunction(ItemID.sfr_block_charging_upgrade_bound, function (coords, item, block, player) {
    return Entity.getSneaking(player) && !~SFR_STUFF.indexOf(block.id) && Entity.setCarriedItem(player, ItemID.sfr_block_charging_upgrade, 1, 0, null);
});
var block_charging_upgrade_validator = function (tile, stack) {
    if (stack.extra.getInt("Dim") !== tile.blockSource.getDimension()) {
        return false;
    }
    var tilePos = BlockPosUtils.fromTile(tile);
    var otherTilePos = {x: stack.extra.getInt("PosX"), y: stack.extra.getInt("PosY"), z: stack.extra.getInt("PosZ")};
    if (BlockPosUtils.distanceSq(tilePos, otherTilePos) <= 256) {
        var otherTile = TileEntity.getTileEntity(otherTilePos.x, otherTilePos.y, otherTilePos.z, tile.blockSource);
        if (otherTile.isEnergyTile) {
            return otherTile.canReceiveEnergy(stack.extra.getInt("Face"), "RF");
        }
    }
};
SolarUpgrades.registerUpgrade(ItemID.sfr_block_charging_upgrade_bound, {getMaxUpgrades: function () {
    return 1;
}, canInstall: block_charging_upgrade_validator, canStayInPanel: block_charging_upgrade_validator, update: function (tile, amount, extra) {
    if (World.getThreadTime() % 20 == 0) {
        var pos = {x: extra.getInt("PosX"), y: extra.getInt("PosY"), z: extra.getInt("PosZ"), dimension: extra.getInt("Dim")};
        var d = BlockPosUtils.distanceSq(BlockPosUtils.fromTile(tile), pos);
        if (d <= 256) {
            d /= 256;
            tile.data.traversal = [];
            if (tile.getUpgrades(ItemID.sfr_u_traversal) > 0) {
                tile.data.traversalObj.cache = [];
                tile.data.traversalObj.cache.push(pos);
                tile.data.traversalObj.findMachines(tile, tile.data.traversal);
            }
            tile.data.traversal.push(BlockPosUtils.BlockPosFaceFromBlockPos(pos, extra.getInt("Face"), 1 - d));
        }
    }
}});
SolarUpgrades.registerUpgrade(ItemID.sfr_capacity_upgrade, {getMaxUpgrades: function () {
    return 10;
}, update: function (tile, amount) {
    return tile.data.capacity *= (1 + amount * 0.1);
}});
SolarUpgrades.registerUpgrade(ItemID.sfr_dispersive_upgrade, {getMaxUpgrades: function () {
    return 1;
}, update: function (tile) {
    var chargePlayer = function (player, fe) {
        var isValid = function (id) {
            return ChargeItemRegistry.isValidItem(id, "RF", 1);
        };
        var actor = new PlayerActor(player);
        for (var i = 0; i < 36; i++) {
            var slot = actor.getInventorySlot(i);
            if (isValid(slot.id)) {
                return fe - ChargeItemRegistry.addEnergyTo(slot, "RF", Math.min(fe, ChargeItemRegistry.getMaxCharge(slot.id) - ChargeItemRegistry.getEnergyStored(slot)), 1);
            }
        }
        for (var i = 0; i < 4; i++) {
            var slot = actor.getArmor(i);
            if (isValid(slot.id)) {
                return fe - ChargeItemRegistry.addEnergyTo(slot, "RF", Math.min(fe, ChargeItemRegistry.getMaxCharge(slot.id) - ChargeItemRegistry.getEnergyStored(slot)), 1);
            }
        }
        return fe;
    };
    var fetch = tile.blockSource.fetchEntitiesInAABB(tile.x - 16, tile.y - 16, tile.z - 16, tile.x + 16, tile.y + 16, tile.z + 16, EEntityType.PLAYER, false);
    for (var p in fetch) {
        var player = fetch[p];
        var mod = Math.max(0, 1 - BlockPosUtils.distanceSq(BlockPosUtils.fromEntity(player), BlockPosUtils.fromTile(tile)) / 256);
        var transfer = Math.round(tile.initialTransfer * mod);
        var sent = Math.min(Math.round(tile.data.energy * mod), transfer);
        tile.data.energy -= sent - chargePlayer(player, sent);
    }
}});
SolarUpgrades.registerUpgrade(ItemID.sfr_efficiency_upgrade, {getMaxUpgrades: function () {
    return 20;
}, update: function (tile, amount) {
    return tile.data.generation *= (1 + amount * 0.05);
}});
SolarUpgrades.registerUpgrade(ItemID.sfr_furnace_upgrade, {getMaxUpgrades: function () {
    return 1;
}, update: function (panel) {
    var furnace = panel.blockSource.getBlockEntity(panel.x, panel.y - 1, panel.z);
    if (furnace !== null) {
        var type = furnace.getType();
        if ((type == ETileEntityType.FURNACE || type == 38 || type == 39) && furnace.getSlot(0).id != 0 && furnace.getSlot(1).count == 0 && furnace.getCompoundTag().getShort("BurnTime") == 0 && panel.data.energy >= 1000) {
            furnace.setSlot(1, 5, 1, 0);
            panel.data.energy -= 1000;
        }
    }
}});
SolarUpgrades.registerUpgrade(ItemID.sfr_transfer_rate_upgrade, {getMaxUpgrades: function () {
    return 10;
}, update: function (tile, amount) {
    return tile.data.transfer *= (1 + amount * 0.15);
}});
SolarUpgrades.registerUpgrade(ItemID.sfr_traversal_upgrade, {getMaxUpgrades: function () {
    return 1;
}, update: function (tile) {
    tile.data.isTraversalEnabled = true;
    tile.data.traversalObj.update(tile);
}});
Callback.addCallback("PostLoaded", function () {
    Recipes.getWorkbenchRecipesByResult(123, 1, 0).size() == 0 && addShaped(123, 1, 0, [" r ", "rgr", " r "], ["r", 331, 0, "g", 89, 0]);
    Recipes.getWorkbenchRecipesByResult(347, 1, 0).size() == 0 && addShaped(347, 1, 0, [" g ", "grg", " g "], ["g", 266, 0, "r", 331, 0]);
    addShaped(ItemID.sfr_blank_upgrade, 1, 0, [" c ", "cmc", " c "], ["c", 4, 0, "m", ItemID.sfr_mirror, 0]);
    addShaped(ItemID.sfr_block_charging_upgrade, 1, 0, ["prp", "rur", "prp"], ["p", 368, 0, "r", 152, 0, "u", ItemID.sfr_dispersive_upgrade, 0]);
    addShaped(ItemID.sfr_capacity_upgrade, 1, 0, [" r ", "rbr", "rdr"], ["r", 331, 0, "b", ItemID.sfr_blank_upgrade, 0, "d", 57, 0]);
    addShaped(ItemID.sfr_dispersive_upgrade, 1, 0, ["ded", "ebe", "ded"], ["d", 348, 0, "e", 381, 0, "b", ItemID.sfr_blank_upgrade, 0]);
    addShaped(ItemID.sfr_efficiency_upgrade, 1, 0, [" m ", "mbm", " p "], ["m", ItemID.sfr_mirror, 0, "b", ItemID.sfr_blank_upgrade, 0, "p", ItemID.sfr_photovoltaic_cell_1, 0]);
    addShaped(ItemID.sfr_furnace_upgrade, 1, 0, ["ccc", "cbc", "cfc"], ["c", 263, -1, "b", ItemID.sfr_blank_upgrade, 0, "f", 61, -1]);
    addShaped(ItemID.sfr_mirror, 3, 0, ["ggg", " i "], ["g", 20, -1, "i", 265, 0]);
    addShaped(ItemID.sfr_photovoltaic_cell_1, 1, 0, ["ggg", "lll", "mmm"], ["g", 20, -1, "l", VanillaItemID.lapis_lazuli, 0, "m", ItemID.sfr_mirror, 0]);
    addShaped(ItemID.sfr_photovoltaic_cell_2, 1, 0, ["clc", "lcl", "mpm"], ["c", 337, 0, "l", VanillaItemID.lapis_lazuli, 0, "m", ItemID.sfr_mirror, 0, "p", ItemID.sfr_photovoltaic_cell_1, 0]);
    addShaped(ItemID.sfr_photovoltaic_cell_3, 1, 0, ["ggg", "ddd", "opo"], ["g", 20, -1, "d", 348, 0, "o", 49, 0, "p", ItemID.sfr_photovoltaic_cell_2, 0]);
    addShaped(ItemID.sfr_photovoltaic_cell_4, 1, 0, ["bbb", "gdg", "qpq"], ["b", 377, 0, "g", 348, 0, "d", 264, 0, "q", 155, 0, "p", ItemID.sfr_photovoltaic_cell_3, 0]);
    addShaped(ItemID.sfr_photovoltaic_cell_5, 1, 0, ["bbb", "gdg", "qpq"], ["b", 369, 0, "g", 89, 0, "d", 57, 0, "q", 155, 0, "p", ItemID.sfr_photovoltaic_cell_4, 0]);
    addShaped(ItemID.sfr_photovoltaic_cell_6, 1, 0, ["eee", "gdg", "qpq"], ["e", 388, 0, "g", 89, 0, "d", 57, 0, "q", 155, 0, "p", ItemID.sfr_photovoltaic_cell_5, 0]);
    addShaped(BlockID.sfr_1, 1, 0, ["mmm", "prp", "ppp"], ["m", ItemID.sfr_mirror, 0, "p", 5, -1, "r", 331, 0]);
    addShaped(BlockID.sfr_2, 1, 0, ["sss", "sps", "sss"], ["s", BlockID.sfr_1, 0, "p", 33, 0]);
    addShaped(BlockID.sfr_3, 2, 0, ["ppp", "srs", "sis"], ["p", ItemID.sfr_photovoltaic_cell_1, 0, "s", BlockID.sfr_2, 0, "r", VanillaItemID.repeater, -1, "i", 42, 0]);
    addShaped(BlockID.sfr_4, 2, 0, ["ppp", "scs", "sis"], ["p", ItemID.sfr_photovoltaic_cell_2, 0, "s", BlockID.sfr_3, 0, "c", VanillaItemID.clock, -1, "i", 42, 0]);
    addShaped(BlockID.sfr_5, 2, 0, ["ppp", "sds", "sgs"], ["p", ItemID.sfr_photovoltaic_cell_3, 0, "s", BlockID.sfr_4, 0, "d", 348, 0, "g", 41, 0]);
    addShaped(BlockID.sfr_6, 2, 0, ["ppp", "sls", "sds"], ["p", ItemID.sfr_photovoltaic_cell_4, 0, "s", BlockID.sfr_5, 0, "l", VanillaBlockID.redstone_lamp, -1, "d", 57, 0]);
    addShaped(BlockID.sfr_7, 2, 0, ["ppp", "sbs", "sbs"], ["p", ItemID.sfr_photovoltaic_cell_5, 0, "s", BlockID.sfr_6, 0, "b", 437, 0]);
    addShaped(BlockID.sfr_8, 2, 0, ["ppp", "ses", "ses"], ["p", ItemID.sfr_photovoltaic_cell_6, 0, "s", BlockID.sfr_7, 0, "e", 122, 0]);
    addShaped(ItemID.sfr_transfer_rate_upgrade, 1, 0, ["rrr", "gbg", "rrr"], ["r", 331, 0, "g", 266, 0, "b", ItemID.sfr_blank_upgrade, 0]);
    addShaped(ItemID.sfr_traversal_upgrade, 1, 0, ["ipi", "rbr", "ipi"], ["i", 265, 0, "p", 33, 0, "r", 331, 0, "b", ItemID.sfr_blank_upgrade, 0]);
    addShaped(ItemID.sfr_traversal_upgrade, 1, 0, ["ipi", "rbr", "ipi"], ["i", 265, 0, "p", 29, 0, "r", 331, 0, "b", ItemID.sfr_blank_upgrade, 0]);
});
var vanilla = function (id, data) {
    return {id: id, data: data !== null && data !== void 0 ? data : -1};
};
var mod_item = function (id, data) {
    var _a;
    return {id: (_a = ItemID[id]) !== null && _a !== void 0 ? _a : 0, data: data !== null && data !== void 0 ? data : -1};
};
var mod_block = function (id, data) {
    var _a;
    return {id: (_a = BlockID[id]) !== null && _a !== void 0 ? _a : 0, data: typeof data !== "undefined" ? data > 16 ? 0 : data < -1 ? -1 : data : -1};
};
var PanelLanguageBuilder = (function () {
    function PanelLanguageBuilder(panel) {
        this.panel = panel;
        this._localizations = {};
        this._default = null;
    }
    PanelLanguageBuilder.prototype.put = function (lang, localization) {
        lang = lang.toLowerCase();
        if (lang == "en_us") {
            this._default = localization;
        }
        this._localizations[lang] = localization;
        return this;
    };
    PanelLanguageBuilder.prototype.build = function () {
        var _a;
        var _b, _c;
        if (this._default == null) {
            throw new TypeError("Unable to apply languages: no 'en_us' value found!");
        }
        (_a = (_b = this._localizations)[_c = Translation.getLanguage()]) !== null && _a !== void 0 ? _a : (_b[_c] = this._localizations.en_us);
        Translation.addTranslation("tile.solarflux:solar_panel_" + this.panel.name + ".name", this._localizations);
        return this.panel;
    };
    return PanelLanguageBuilder;
}());
var PanelRecipeBuilder = (function () {
    function PanelRecipeBuilder(panel) {
        this.panel = panel;
        this._shape = null;
        this._keys = {};
        this._func = null;
    }
    PanelRecipeBuilder.prototype.shape = function (par1, par2, par3) {
        if (typeof par1 === "string") {
            this._shape = [par1];
            typeof par2 === "string" && this._shape.push(par2);
            typeof par3 === "string" && this._shape.push(par3);
        } else {
            if (Array.isArray(par1)) {
                if (par1.length > 3 || par1[0].length > 3 || par1[1].length > 3 || par1[2].length > 3) {
                    throw new Error("Recipe shape must be min 1x1 and max 3x3");
                }
                this._shape = par1;
            }
        }
        return this;
    };
    PanelRecipeBuilder.prototype.bind = function (ch, def) {
        if (ch.length > 1) {
            throw new Error(ch + " is not a single character!");
        }
        this._keys[ch] = def;
        return this;
    };
    PanelRecipeBuilder.prototype.func = function (func) {
        this._func = func;
        return this;
    };
    PanelRecipeBuilder.prototype.build = function (amount) {
        var _a;
        var keys = [];
        for (var k in this._keys) {
            keys.push(k, this._keys[k].id, this._keys[k].data);
        }
        Recipes.addShaped({id: BlockID["sfr_" + this.panel.name], count: amount !== null && amount !== void 0 ? amount : 1, data: 0}, this._shape, keys, (_a = this._func) !== null && _a !== void 0 ? _a : (function () {
        }));
        return this.panel;
    };
    return PanelRecipeBuilder;
}());
var PanelData = (function () {
    function PanelData(name) {
        this.name = name;
    }
    PanelData.prototype.langBuilder = function () {
        return new PanelLanguageBuilder(this);
    };
    PanelData.prototype.recipeBuilder = function () {
        return new PanelRecipeBuilder(this);
    };
    return PanelData;
}());
var PanelBuilder = (function () {
    function PanelBuilder() {
        this._name = null;
        this._height = 6 / 16;
        this._generation = null;
        this._capacity = null;
        this._transfer = null;
    }
    PanelBuilder.prototype.name = function (n) {
        this._name = n;
        return this;
    };
    PanelBuilder.prototype.height = function (h) {
        this._height = h;
        return this;
    };
    PanelBuilder.prototype.generation = function (g) {
        this._generation = typeof g === "number" ? g : parseInt(g);
        return this;
    };
    PanelBuilder.prototype.capacity = function (c) {
        this._capacity = typeof c === "number" ? c : parseInt(c);
        return this;
    };
    PanelBuilder.prototype.transfer = function (t) {
        this._transfer = typeof t === "number" ? t : parseInt(t);
        return this;
    };
    PanelBuilder.prototype.buildAndRegister = function () {
        if (this._name == null) {
            throw new TypeError("name == null");
        }
        if (this._generation == null) {
            throw new TypeError("generation == null");
        }
        if (this._capacity == null) {
            throw new TypeError("capacity == null");
        }
        if (this._transfer == null) {
            throw new TypeError("transfer == null");
        }
        SolarPanel.createPanelFromStats(this._name, this._height, this._generation, this._capacity, this._transfer);
        return new PanelData(this._name);
    };
    return PanelBuilder;
}());
ModAPI.registerAPI("SolarFluxAPI", {vanilla: vanilla, item: mod_item, block: mod_block, UpgradeRegistry: SolarUpgrades, panel: function () {
    return new PanelBuilder();
}, requireGlobal: function (command) {
    return eval(command);
}});
Logger.Log("Solar Flux Reborn API has been shared with name SolarFluxAPI", "SolarFluxReborn DEBUG");
ModAPI.addAPICallback("AvaritiaAPI", function (Avaritia) {
    createPanel("neutronium");
    createPanel("infinity");
    Avaritia.addExtremeShapedRecipe("solar_panel_neutronium", {id: BlockID.sfr_neutronium, count: 2, data: 0}, ["  NN NN  ", " NCCPCCN ", "NC  U  CN", "NC QQQ CN", " PUQIQUP ", "NC QQQ CN", "NC  U  CN", " NCCPCCN ", "  NN NN  "], ["N", ItemID.neutronium_ingot, 0, "C", ItemID.crystal_matrix_ingot, 0, "P", BlockID.sfr_8, 0, "U", ItemID.neutron_nugget, 0, "Q", ItemID.neutron_pile, 0, "I", ItemID.infinity_catalyst, 0]);
    Avaritia.addExtremeShapedRecipe("solar_panel_infinity", {id: BlockID.sfr_infinity, count: 3, data: 0}, ["  NN NN  ", " NCCBCCN ", "NC  U  CN", "NC QIQ CN", " BUIPIUB ", "NC QIQ CN", "NC  U  CN", " NCCBCCN ", "  NN NN  "], ["N", ItemID.neutronium_ingot, 0, "C", ItemID.crystal_matrix_ingot, 0, "B", BlockID.neutronium_block, 0, "U", ItemID.neutron_nugget, 0, "Q", ItemID.neutron_pile, 0, "I", ItemID.infinity_ingot, 0, "P", BlockID.sfr_neutronium, 0]);
});

