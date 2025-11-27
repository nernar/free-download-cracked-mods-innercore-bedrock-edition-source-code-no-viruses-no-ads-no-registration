/*
     _    _       _ _      ______ _____
    | |  | |     (_) |     | ___ \  ___|
    | |  | | __ _ _| | __ _| |_/ / |__
    | |/\| |/ _` | | |/ _` |  __/|  __|
    \  /\  / (_| | | | (_| | |   | |___
     \/  \/ \__,_|_|_|\__,_\_|   \____/

    WailaPE mod

    Terms of Use:
      - Forbidden to distribute the mod on third-party sources
        without link to the official community (https://vk.com/forestry_pe)
      - Forbidden to change the mod code
      - Forbidden to copy the code to other mods or libraries
      - Allowed to use the mod in any packs
      - Using the mod you automatically agree with the described
        above conditions

    + Textures belongs to Mojang
    © DDCompany (https://vk.com/forestry_pe)
 */
IMPORT("CropLib");
var getPointed = ModAPI.requireGlobal("Player.getPointed");
var Color = android.graphics.Color;
var MINIMAL_WINDOW_HEIGHT = 90;
var WailaConfig = {
    checkTime: __config__.getNumber("checkTime"),
    x: __config__.getNumber("x"),
    y: __config__.getNumber("y"),
    style: __config__.getString("style"),
    extCropGrowth: __config__.getBool("extensions.cropGrowth"),
    extDebugTiles: __config__.getBool("extensions.debugTiles"),
    extEnergy: __config__.getBool("extensions.energy"),
    extMaterial: __config__.getBool("extensions.material"),
    extBlockIdData: __config__.getBool("extensions.blockIdData")
};
var Style = {
    OK: Color.GREEN,
    NO: Color.RED,
    DEF: Color.WHITE,
    MOD: Color.rgb(85, 85, 255),
    COLOR: Color.TRANSPARENT,
    TEX_FRAME: "waila_frame.default",
    TEX_BAR_FRAME: "waila_bar_bg"
};
var StyleManager = /** @class */ (function () {
    function StyleManager() {
    }
    StyleManager.add = function (name, obj) {
        this.styles[name] = obj;
    };
    StyleManager.apply = function (name) {
        var style = this.styles[name];
        if (!style) {
            Logger.Log("Style " + name + " is not found! Default was applied", "ERROR");
            return;
        }
        for (var i in style) {
            Style[i] = style[i];
        }
        Logger.Log("Waila Style: " + name, "INFO");
    };
    StyleManager.readFromFile = function () {
        var content = FileTools.ReadText(__dir__ + "json/styles.json");
        if (content) {
            var parsed = JSON.parse(content);
            for (var i in parsed) {
                var style = parsed[i];
                this.compileColor(style, "OK");
                this.compileColor(style, "NO");
                this.compileColor(style, "DEF");
                this.compileColor(style, "MOD");
                this.compileColor(style, "COLOR");
                this.styles[i] = style;
            }
        }
        else {
            Logger.Log("json/styles.json is not found!", "ERROR");
        }
    };
    StyleManager.compileColor = function (obj, field) {
        var style = obj[field];
        if (!style) {
            return;
        }
        obj[field] = Color.argb(style.a || 255, style.r, style.g, style.b);
    };
    StyleManager.styles = {};
    return StyleManager;
}());
StyleManager.readFromFile();
StyleManager.apply(WailaConfig.style);
var OPENED_WINDOWS = [];
var Waila = /** @class */ (function () {
    function Waila() {
    }
    Waila.init = function () {
        this.setGrowthStages(59, 7);
        this.setGrowthStages(141, 7);
        this.setGrowthStages(142, 7);
        this.setGrowthStages(244, 7);
        this.popupWindow = new UI.Window({
            location: {
                x: WailaConfig.x,
                y: WailaConfig.y,
                width: 300,
                height: this.height
            },
            drawing: [
                { type: "color", color: Style.COLOR }
            ],
            elements: {
                "frame": {
                    type: "frame",
                    x: 0,
                    y: 0,
                    z: -1,
                    width: 1000,
                    height: 300,
                    bitmap: Style.TEX_FRAME,
                    scale: 5
                },
                "slot": {
                    type: "slot",
                    x: 10,
                    y: 10,
                    size: 210,
                    bitmap: "_default_slot_empty",
                    isTransparentBackground: true,
                    visual: true
                },
                "name": {
                    type: "text",
                    text: "",
                    x: 200,
                    y: 30,
                    font: { color: Style.DEF, size: 50 }
                }
            }
        });
        this.popupWindow.setAsGameOverlay(true);
        this.popupWindow.setTouchable(false);
    };
    Waila.mayPopupShow = function () {
        return Waila.validNativeUI && OPENED_WINDOWS.length === 0;
    };
    Waila.translate = function (key, defaultValue) {
        var translated = Translation.translate(key);
        return translated !== key ? translated : defaultValue;
    };
    Waila.buildBlockInfo = function (id, data, elements) {
        var y = 100;
        var tile = World.getTileEntity(this.blockPos.x, this.blockPos.y, this.blockPos.z);
        //Добавляем информацию из Extensions
        var extension = this.extensions[id];
        if (extension) {
            var info = extension(id, data, elements, tile, y);
            if (info) {
                y = info;
            }
        }
        //Добавляем информацию из Global Extensions
        for (var i in this.globalExtensions) {
            var info = this.globalExtensions[i](id, data, elements, tile, y);
            if (info) {
                y = info;
            }
        }
    };
    Waila.buildEntityInfo = function (entity, type, elements) {
        var compoundTag = Entity.getCompoundTag(entity);
        var customName = compoundTag.getString("CustomName");
        var age = compoundTag.getInt("Age");
        var id = compoundTag.getString("identifier");
        var yPos = 160;
        elements["name"].text = customName ? this.translate("waila.entity", "Entity") : customName;
        elements["entityType"] = {
            type: "text",
            text: Waila.translate("waila.entity_type", "Entity Type") + ": " + id,
            x: 200,
            y: 100,
            font: { color: Style.DEF, size: 40 }
        };
        if (age < 0) {
            elements["age"] = {
                type: "text",
                text: Waila.translate("waila.growth", "Growth") + ": " + Math.floor(Math.abs(age) / 20) + Waila.translate("waila.s", "s"),
                x: 200,
                y: yPos,
                font: { color: Style.DEF, size: 40 }
            };
            yPos += 60;
        }
        if (type < 64 || type > 103) {
            this.addBar({
                elements: elements,
                progress: Entity.getHealth(entity),
                progressMax: Entity.getMaxHealth(entity),
                prefix: "health",
                yPos: yPos
            });
        }
    };
    Waila.showPopup = function (block, entity, type) {
        var elements = this.popupWindow.getContent().elements;
        for (var i in elements) {
            if (i !== "slot" && i !== "name" && i !== "frame") {
                elements[i] = null;
            }
        }
        var slot = this.container.getSlot("slot");
        slot.count = 1;
        if (block) {
            slot.id = block.id;
            slot.data = block.data;
            var name = Item.getName(block.id, block.data);
            elements["name"].text = name.length <= 18 ? name : name.substr(0, 18) + "...";
            this.buildBlockInfo(block.id, block.data, elements);
        }
        else {
            slot.id = 383;
            slot.data = type;
            this.buildEntityInfo(entity, type, elements);
        }
        this.height = Math.max(this.height, MINIMAL_WINDOW_HEIGHT);
        if (this.lastHeight !== this.height || !this.container.isOpened()) {
            var location = this.popupWindow.getLocation();
            location.setSize(300, this.height);
            this.lastHeight = this.height;
            elements["frame"].height = location.globalToWindow(this.height);
            UI.getContext().runOnUiThread(function () {
                Waila.container.openAs(Waila.popupWindow);
            });
        }
        this.height = 35;
    };
    Waila.addBar = function (obj) {
        var elements = obj.elements;
        var prefix = obj.prefix;
        if (!elements || !prefix) {
            Logger.Log("Elements or prefix property for Waila bar is not set", "ERROR");
            return;
        }
        obj.progress = obj.progress || 0;
        obj.barTexture = obj.barTexture || "waila_bar";
        obj.barBgTexture = obj.barBgTexture || Style.TEX_BAR_FRAME;
        var yPos = obj.yPos || 160;
        elements[prefix + "Bar"] = {
            type: "scale",
            x: 200,
            y: yPos,
            value: obj.progressMax < 0 ? 1 : obj.progress / obj.progressMax,
            bitmap: obj.barTexture,
            scale: 3
        };
        elements[prefix + "BarBg"] = {
            type: "image",
            bitmap: obj.barBgTexture,
            x: 200,
            y: yPos,
            scale: 3
        };
        elements[prefix] = {
            type: "text",
            text: obj.progress + "/" + obj.progressMax,
            x: 215,
            y: yPos + 8,
            font: { color: obj.fontColor || Color.WHITE, size: 40 }
        };
    };
    Waila.isValidTool = function (material, blockLevel) {
        if (material === "unbreaking") {
            return false;
        }
        if (!blockLevel) {
            return true;
        }
        var toolData = ToolAPI.getToolData(this.lastTool);
        return toolData && toolData.blockMaterials && toolData.blockMaterials[material] && toolData.toolMaterial.level >= blockLevel;
    };
    Waila.getGrowthStages = function (id) {
        var stages = this.growthStages[id];
        if (stages) {
            return stages;
        }
        // @ts-ignore
        if (CropRegistry.isCrop(id)) {
            return 2;
        }
        return -1;
    };
    Waila.setGrowthStages = function (blockId, stages) {
        this.growthStages[blockId] = stages;
    };
    // noinspection JSUnusedGlobalSymbols
    Waila.addExtension = function (id, func) {
        if (!id) {
            Logger.Log("Block id is not correct (Extension Registration)", "ERROR");
            return;
        }
        if (!func) {
            Logger.Log("Function is not correct (Extension Registration)", "ERROR");
            return;
        }
        this.extensions[id] = func;
    };
    Waila.addGlobalExtension = function (func) {
        if (!func) {
            Logger.Log("Function is not correct (Global Extension Registration)", "ERROR");
            return;
        }
        this.globalExtensions.push(func);
    };
    Waila.requireHeight = function (value) {
        this.height += value;
    };
    Waila.container = new UI.Container;
    Waila.validNativeUI = false;
    Waila.growthStages = {};
    Waila.extensions = {};
    Waila.globalExtensions = [];
    Waila.height = 35;
    return Waila;
}());
Waila.init();
Callback.addCallback("LocalTick", function () {
    if (Waila.mayPopupShow()) {
        if (World.getThreadTime() % WailaConfig.checkTime === 0) {
            var pointed = getPointed();
            var pos = pointed.pos;
            var lastPos = Waila.blockPos;
            if (lastPos && lastPos.x === pos.x && lastPos.y === pos.y && lastPos.z === pos.z) {
                return;
            }
            var entity = Waila.pointedEntity;
            if (entity !== -1 && pointed.entity === entity) {
                return;
            }
            Waila.blockPos = pos;
            entity = Waila.pointedEntity = pointed.entity;
            if (pos.x !== 0 || pos.y !== 0 || pos.z !== 0) {
                var block = World.getBlock(pos.x, pos.y, pos.z);
                if (block.id !== 0) {
                    if (block.id > 255 && block.id < 8196) {
                        block.id = 255 - block.id;
                    }
                    Waila.lastTool = Player.getCarriedItem().id;
                    Waila.showPopup(block);
                }
                return;
            }
            var type = Entity.getType(entity);
            if (entity !== -1 && type && type !== 71) {
                Waila.showPopup(null, entity, type);
                return;
            }
            Waila.container.close();
        }
    }
    else if (Waila.container.isOpened()) {
        Waila.container.close();
    }
});
Callback.addCallback("NativeGuiChanged", function (screenName) {
    Waila.validNativeUI = screenName === "hud_screen" || screenName === "in_game_play_screen";
});
Callback.addCallback("ContainerOpened", function (container, window) {
    if (!window.isNotFocusable) { //WindowGroup
        OPENED_WINDOWS.push(window);
        return;
    }
    if (!window.equals(Waila.popupWindow) && !window.isNotFocusable()) {
        OPENED_WINDOWS.push(window);
    }
});
Callback.addCallback("ContainerClosed", function (container, window) {
    var index = OPENED_WINDOWS.indexOf(window);
    if (index !== -1) {
        OPENED_WINDOWS.splice(index, 1);
    }
});
if (WailaConfig.extEnergy) {
    //Отображение количества энергии в TileEntity
    Waila.addGlobalExtension(function (id, data, elements, tile, yPos) {
        if (tile && tile.data.energy >= 0) {
            Waila.addBar({
                elements: elements,
                progress: tile.data.energy,
                progressMax: tile.getEnergyStorage ? tile.getEnergyStorage() : -1,
                prefix: "energy",
                yPos: yPos
            });
            yPos += 80;
            Waila.requireHeight(28);
        }
        return yPos;
    });
}
if (WailaConfig.extDebugTiles) {
    Waila.addGlobalExtension(function (id, data, elements, tile, yPos) {
        if (tile) {
            for (var i in tile.data) {
                elements["tileData" + i] = {
                    type: "text",
                    text: i + ": " + tile.data[i],
                    x: 200,
                    y: yPos,
                    font: { color: Style.DEF, size: 40 }
                };
                yPos += 60;
                Waila.requireHeight(20);
            }
        }
        return yPos;
    });
}
if (WailaConfig.extCropGrowth) {
    //Отображение прогресса роста растения
    Waila.addGlobalExtension(function (id, data, elements, tile, yPos) {
        var growthStages = Waila.getGrowthStages(id);
        if (growthStages > -1) {
            elements["growthValue"] = {
                type: "text",
                text: Waila.translate("waila.growth", "Growth") + ": " + Math.floor(data / growthStages * 100) + "%",
                x: 200,
                y: yPos,
                font: { color: Style.DEF, size: 40 }
            };
            yPos += 60;
            Waila.requireHeight(20);
        }
        return yPos;
    });
}
if (WailaConfig.extMaterial) {
    //Отображение информации о материале, уровне ломания, возможности сломать данный блок
    Waila.addGlobalExtension(function (id, data, elements, tile, yPos) {
        var blockData = ToolAPI.getBlockData(id);
        if (blockData) {
            elements["materialName"] = {
                type: "text",
                text: Waila.translate("waila.material", "Material") + ": " + blockData.material.name,
                x: 200,
                y: yPos,
                font: { color: Style.DEF, size: 40 }
            };
            yPos += 60;
            elements["materialLevel"] = {
                type: "text",
                text: Waila.translate("waila.level", "Level") + ": " + blockData.level,
                x: 200,
                y: yPos,
                font: { color: Style.DEF, size: 40 }
            };
            yPos += 60;
            var validTool = Waila.isValidTool(blockData.material.name, blockData.level);
            elements["isHarvestable"] = {
                type: "text",
                text: (validTool ? "✔" : "✖") + " " + Waila.translate("waila.harvestable", "Currently Harvestable"),
                x: 200,
                y: yPos,
                font: {
                    color: validTool ? Style.OK : Style.NO,
                    size: 40,
                }
            };
            yPos += 60;
            Waila.requireHeight(58);
        }
        return yPos;
    });
}
if (WailaConfig.extBlockIdData) {
    //Отображение id и data блока
    Waila.addGlobalExtension(function (id, data, elements, tile, yPos) {
        elements["blockId"] = {
            type: "text",
            text: "ID: " + id,
            x: 200,
            y: yPos,
            font: { color: Style.DEF, size: 40 }
        };
        yPos += 60;
        elements["blockData"] = {
            type: "text",
            text: "Data: " + data,
            x: 200,
            y: yPos,
            font: { color: Style.DEF, size: 40 }
        };
        yPos += 60;
        Waila.requireHeight(40);
        return yPos;
    });
}
Translation.addTranslation("waila.growth", { ru: "Рост" });
Translation.addTranslation("waila.s", { ru: "сек" });
Translation.addTranslation("waila.harvestable", { ru: "Можно добыть" });
Translation.addTranslation("waila.material", { ru: "Материал" });
Translation.addTranslation("waila.level", { ru: "Уровень добычи" });
Translation.addTranslation("waila.entity", { ru: "Сущность" });
Translation.addTranslation("waila.entity_type", { ru: "Тип" });
ModAPI.registerAPI("WailaAPI", {
    Waila: Waila,
    WailaConfig: WailaConfig,
    Style: Style,
    StyleManager: StyleManager,
    requireGlobal: function (command) {
        return eval(command);
    }
});
Logger.Log("Waila API shared with name WailaAPI", "API");
