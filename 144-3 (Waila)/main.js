/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 13
*/



// file: header.js

/*

 __      __    _ _
 \ \    / /_ _(_) |__ _
  \ \/\/ / _` | | / _` |
   \_/\_/\__,_|_|_\__,_|

    by DDCompany (https://vk.com/forestry_pe)
 */
IMPORT("Harvest_Core");

const getPointed = ModAPI.requireGlobal("Player.getPointed");
const Color = android.graphics.Color;
const MINIMAL_WINDOW_HEIGHT = 90;




// file: WailaConfig.js

const WailaConfig = {
    checkTime: __config__.getNumber("checkTime"),
    x: __config__.getNumber("x"),
    y: __config__.getNumber("y"),
    style: __config__.getString("style"),

    extModName: __config__.getBool("extensions.modName"),
    extCropGrowth: __config__.getBool("extensions.cropGrowth"),
    extDebugTiles: __config__.getBool("extensions.debugTiles"),
    extEnergy: __config__.getBool("extensions.energy"),
    extMaterial: __config__.getBool("extensions.material"),
    extBlockIdData: __config__.getBool("extensions.blockIdData"),
};




// file: Style.js

const DEFAULT_STYLE = {
    OK: Color.GREEN,
    NO: Color.RED,
    DEF: Color.WHITE,
    MOD: Color.rgb(85, 85, 255),

    COLOR: Color.TRANSPARENT,

    TEX_FRAME: "waila_frame.default",
    TEX_BAR_FRAME: "waila_bar_bg"
};

let Style = {};




// file: StyleManager.js

let StyleManager = {
    /**
     * Зарегистрированные стили. Ключом является название
     */
    styles: {},

    /**
     * Регистрация стиля
     * @param name название
     * @param obj объект описания
     */
    add: function (name, obj) {
        this.styles[name] = obj;
    },

    /**
     * Применение стандартного стиля
     */
    applyDefault: function () {
        Style = {};
        for (let i in DEFAULT_STYLE) {
            Style[i] = DEFAULT_STYLE[i];
        }
    },

    /**
     * Применение стиля
     * @param name название стиля
     */
    apply: function (name) {
        let style = this.styles[name];
        if (!style) {
            this.applyDefault();
            Logger.Log("Style " + name + " is not found! Default was applied", "ERROR");
            return;
        }

        this.applyDefault();

        for (let i in style) {
            Style[i] = style[i];
        }

        Logger.Log("Waila Style: " + name, "INFO");
    },

    /**
     * Чтение стилей из JSON файла
     */
    readFromFile: function () {
        let content = FileTools.ReadText(__dir__ + "json/styles.json");

        if (content) {
            let parsed = JSON.parse(content);

            for (let i in parsed) {
                let style = parsed[i];
                this.compileColor(style, "OK");
                this.compileColor(style, "NO");
                this.compileColor(style, "DEF");
                this.compileColor(style, "MOD");
                this.compileColor(style, "COLOR");

                this.styles[i] = style;
            }
        } else Logger.Log("json/styles.json is not found!", "ERROR");
    },

    compileColor: function (obj, field) {
        let style = obj[field];

        if (!style) {
            return;
        }

        obj[field] = Color.argb(style.a || 255, style.r, style.g, style.b);
    }
};

StyleManager.readFromFile();
StyleManager.apply(WailaConfig.style);




// file: Waila.js

const Waila = {
    /**
     * Контейнер для окна
     */
    container: new UI.Container(),
    /**
     * Нужно ли показывать всплывающее окно. Имеет значение false, если текущий экран не hud_screen и не in_game_play_screen
     */
    enableToShow: false,
    /**
     * Объект, который хранит количество стадий роста у определённых растений. Ключом является айди блока.
     */
    growthStages: {},
    /**
     * Объект, который хранит функции, добавляющие кастомную информацию в всплывающее окно. Ключом является айди блока
     */
    extensions: {},
    /**
     * Массив, который хранит функции, добавляющие кастомную информацию в всплывающее окно.
     */
    globalExtensions: [],
    /**
     * Высота всплывающего окна
     */
    height: 35,

    /**
     * Инициализация окна и установка количества стадий роста для ванильных растений
     */
    init: function () {
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
                {type: "color", color: Style.COLOR}
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
                    scale: 5,
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
                    font: {color: Style.DEF, size: 50}
                }
            }
        });

        this.popupWindow.setAsGameOverlay(true);
    },

    /**
     * Возвращает локализированную строку
     * @param key ключ
     * @param defaultValue стандартное значение, если локализация не задана
     * @returns {String} локализованная строка
     */
    translate: function (key, defaultValue) {
        let translated = Translation.translate(key);
        if (translated !== key)
            return translated;

        return defaultValue;
    },

    /**
     * Добавление информации о блоке в окно
     * @param id айди блока
     * @param data дата блока
     * @param elements объект с элементами окна
     * @returns {number} необходимая высота окна
     */
    buildBlockInfo: function (id, data, elements) {
        let y = 100;
        let tile = World.getTileEntity(this.blockPos.x, this.blockPos.y, this.blockPos.z);

        //Добавляем информацию из Extensions
        let extension = this.extensions[id];
        if (extension) {
            let info = extension(id, data, elements, tile, y);
            if (info) {
                y = info;
            }
        }

        //Добавляем информацию из Global Extensions
        for (let i in this.globalExtensions) {
            let info = this.globalExtensions[i](id, data, elements, tile, y);
            if (info) {
                y = info;
            }
        }

        if (WailaConfig.extModName) {
            elements["modName"] = {
                type: "text",
                text: BlockList.getModName(id),
                x: 200,
                y: y,
                font: {color: Style.MOD, size: 40}
            };
            Waila.requireHeight(15);
        }
    },

    /**
     * Добавляем информацию о сущности в окно
     * @param entity сущность
     * @param type айди типа сущности
     * @param elements объект с элементами окна
     * @returns {number} необходимая высота окна
     */
    buildEntityInfo: function (entity, type, elements) {
        elements["entityType"] = {
            type: "text",
            text: Waila.translate("waila.entity_type", "Entity Type") + ": " + type,
            x: 200,
            y: 100,
            font: {color: Style.DEF, size: 40}
        };

        if (type < 64 || type > 103) {
            this.addBar({
                elements: elements,
                progress: Entity.getHealth(entity),
                progressMax: Entity.getMaxHealth(entity),
                prefix: "health"
            });
        }
    },

    /**
     * Показ всплывающего окна
     * @param block блок. Объект, который содержит поля id и data
     * @param entity сущность
     * @param type тип сущности
     */
    showPopup: function (block, entity, type) {
        let elements = this.popupWindow.getContent().elements;

        for (let i in elements) {
            if (i !== "slot" && i !== "name" && i !== "frame")
                elements[i] = null;
        }

        let slot = this.container.getSlot("slot");
        slot.count = 1;

        if (block) {
            slot.id = block.id;
            slot.data = block.data;

            let name = Item.getName(block.id, block.data);
            elements["name"].text = name.length <= 18 ? name : name.substr(0, 18) + "...";

            this.buildBlockInfo(block.id, block.data, elements);
        } else {
            slot.id = 383;
            slot.data = type;

            elements["name"].text = this.translate("waila.entity", "Entity");

            this.buildEntityInfo(entity, type, elements);
        }

        this.height = Math.max(this.height, MINIMAL_WINDOW_HEIGHT);

        if (this.lastHeight !== this.height || !this.container.isOpened()) {
            let location = this.popupWindow.getLocation();

            location.setSize(300, this.height);
            this.lastHeight = this.height;
            elements["frame"].height = location.globalToWindow(this.height);

            UI.getContext().runOnUiThread(new java.lang.Runnable({
                run: function () {
                    Waila.container.openAs(Waila.popupWindow);
                }
            }));
        }

        this.height = 35;
    },

    /**
     * Добавление шкалы в всплывающее окно
     * @param obj объект, который может хранить следующие поля:
     * elements(обязательное поле)  - список элементов, куда необходимо добавить шкалу,
     * prefix(обязательное поле)    - префикс для элементов, имеет значение, если используются несколько шкал,
     * progress                     - текущее значение прогресса,
     * progressMax                  - максимальное значение прогресса,
     * yPos                         - позиция шкалы по оси Y,
     * barBgTexture                 - текстура заполненной шкалы,
     * fontColor                    - цвет текста
     */
    addBar: function (obj) {
        let elements = obj.elements;
        let prefix = obj.prefix;

        if (!elements || !prefix) {
            Logger.Log("Elements or prefix property for Waila bar is not set", "ERROR");
            return;
        }


        obj.progress = obj.progress || 0;
        obj.barTexture = obj.barTexture || "waila_bar";
        obj.barBgTexture = obj.barBgTexture || Style.TEX_BAR_FRAME;
        let yPos = obj.yPos || 160;

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
            font: {color: obj.fontColor || Color.WHITE, size: 40}
        };
    },

    /**
     * Можно ли сломать блок инструментом в руке
     * @param material название материала блока
     * @param blockLevel уровень ломания блока
     * @returns {Boolean} можн ли сломать блок
     */
    isValidTool: function (material, blockLevel) {
        if (material === "unbreaking")
            return false;

        if (!blockLevel)
            return true;

        let toolData = ToolAPI.getToolData(this.lastTool);
        return toolData && toolData.blockMaterials && toolData.blockMaterials[material] && toolData.toolMaterial.level >= blockLevel;
    },

    /**
     * Возвращает количество стадий роста у растения
     * @param id айди блока
     * @returns {Number} количество стадий. -1, если блок не является растением.
     */
    getGrowthStages: function (id) {
        let stages = this.growthStages[id];
        if (stages)
            return stages;

        if (CropRegistry.isCrop(id))
            return 2;

        return -1;
    },

    /**
     * Установка количества стадий роста для растения
     * @param blockId айди блока
     * @param stages количество стадий
     */
    setGrowthStages: function (blockId, stages) {
        this.growthStages[blockId] = stages;
    },

    /**
     * Добавление расширения для определённого блока
     * @param id айди блока
     * @param func функция, вызываемая при отрисовки окна. Передаваемые аргументы: id, data, elements, tile, height, yPos
     */
    addExtension: function (id, func) {
        if (!id) {
            Logger.Log("Block id is not correct (Extension Registration)", "ERROR");
            return;
        }

        if (!func) {
            Logger.Log("Function is not correct (Extension Registration)", "ERROR");
            return;
        }

        this.extensions[id] = func;
    },

    /**
     * Добавление расширения для всех блоков
     * @param func функция, вызываемая при отрисовки окна. Передаваемые аргументы: id, data, elements, tile, height, yPos
     */
    addGlobalExtension: function (func) {
        if (!func) {
            Logger.Log("Function is not correct (Global Extension Registration)", "ERROR");
            return;
        }

        this.globalExtensions.push(func);
    },

    /**
     * Увеличивает необходимую для отображения элементов высоту всплывающего окна
     * @param value число, на которое необходимо увеличить высоту
     */
    requireHeight: function (value) {
        this.height += value;
    }
};

Waila.init();

Callback.addCallback("tick", function () {
    if (Waila.enableToShow) {
        if (World.getThreadTime() % WailaConfig.checkTime === 0) {
            let pointed = getPointed();
            let pos = pointed.pos;
            let lastPos = Waila.blockPos;
            let entity = Waila.pointedEntity;
            Waila.lastTool = Player.getCarriedItem().id;

            if (lastPos && lastPos.x === pos.x && lastPos.y === pos.y && lastPos.z === pos.z)
                return;

            if (entity !== -1 && pointed.entity === entity)
                return;

            Waila.blockPos = pos;
            entity = Waila.pointedEntity = pointed.entity;

            if (pos.x !== 0 || pos.y !== 0 || pos.z !== 0) {
                Waila.showPopup(World.getBlock(pos.x, pos.y, pos.z));
                return;
            }

            let type = Entity.getType(entity);
            if (entity !== -1 && type !== 71) {
                Waila.showPopup(null, entity, type);
                return;
            }

            Waila.container.close();
        }
    }else if(Waila.container.isOpened()) {
        Waila.container.close();
    }
});
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if(!(Waila.enableToShow = screenName === "hud_screen" || screenName === "in_game_play_screen")) {
        Waila.container.close();
    }
});





// file: BlockList.js

const BlockList = {
    modById: {},

    init: function () {
        let classLoader = UI.getContext().getClass().getClassLoader();

        //Получаем текст на экране загрузки
        let LoadingUI = java.lang.Class.forName("zhekasmirnov.launcher.ui.LoadingUI", true, classLoader).newInstance();
        let bgViewDrawableField = LoadingUI.getClass().getDeclaredField("backgroundViewDrawable");
        bgViewDrawableField.setAccessible(true);

        this.bgViewDrawable = bgViewDrawableField.get(LoadingUI);
        this.textField = this.bgViewDrawable.getClass().getDeclaredField("text");
        this.textField.setAccessible(true);

        //Получаем ArrayList, в котором находятся загруженные моды
        let ModLoader = java.lang.Class.forName("zhekasmirnov.launcher.mod.build.ModLoader", true, classLoader).newInstance().instance;
        this.modsList = ModLoader.modsList;
    },

    /**
     * Вызывается при регистрации айди блока через перезаписанный метод IDRegistry.genBlockID
     * @param stringId строковый айди блока
     */
    onIDRegistered: function (stringId) {
        //Получаем текст на загрузочном экране (Running Mods: 1/10) и извлекаем индекс загружаемого в данный момент мода
        let loadingText = String(this.textField.get(this.bgViewDrawable));
        let modId = parseInt(loadingText.substr(14, loadingText.length).split("/")[0]) - 1;
        this.modById[BlockID[stringId]] = this.modsList.get(modId).getName();
    },

    /**
     * @param id айди блока
     * @returns {string} мод, которому принадлежит айди переданного блока
     */
    getModName: function (id) {
        return this.modById[id] || "Minecraft";
    }
};
if (WailaConfig.extModName) {
    BlockList.init();

    let _genBlockID = IDRegistry.genBlockID;
    IDRegistry.genBlockID = function (a) {
        _genBlockID(a);
        BlockList.onIDRegistered(a);
    };
}




// file: extensions/energy.js

if(WailaConfig.extEnergy) {
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




// file: extensions/debugTileData.js

if (WailaConfig.extDebugTiles) {
    Waila.addGlobalExtension(function (id, data, elements, tile, yPos) {
        if (tile) {
            for (let i in tile.data) {
                elements["tileData" + i] = {
                    type: "text",
                    text: i + ": " + tile.data[i],
                    x: 200,
                    y: yPos,
                    font: {color: Style.DEF, size: 40}
                };
                yPos += 60;
                Waila.requireHeight(20);
            }
        }

        return yPos;
    });
}




// file: extensions/cropGrowth.js

if (WailaConfig.extCropGrowth) {
//Отображение прогресса роста растения
    Waila.addGlobalExtension(function (id, data, elements, tile, yPos) {
        let growthStages = Waila.getGrowthStages(id);

        if (growthStages > -1) {
            elements["growthValue"] = {
                type: "text",
                text: Waila.translate("waila.growth", "Growth") + ": " + Math.floor(data / growthStages * 100) + "%",
                x: 200,
                y: yPos,
                font: {color: Style.DEF, size: 40}
            };
            yPos += 60;
            Waila.requireHeight(20);
        }

        return yPos;
    });
}




// file: extensions/material.js

if (WailaConfig.extMaterial) {
    //Отображение информации о материале, уровне ломания, возможности сломать данный блок
    Waila.addGlobalExtension(function (id, data, elements, tile, yPos) {
        let blockData = ToolAPI.getBlockData(id);

        if (blockData) {
            elements["materialName"] = {
                type: "text",
                text: Waila.translate("waila.material", "Material") + ": " + blockData.material.name,
                x: 200,
                y: yPos,
                font: {color: Style.DEF, size: 40}
            };
            yPos += 60;
            elements["materialLevel"] = {
                type: "text",
                text: Waila.translate("waila.level", "Level") + ": " + blockData.level,
                x: 200,
                y: yPos,
                font: {color: Style.DEF, size: 40}
            };
            yPos += 60;
            let validTool = Waila.isValidTool(blockData.material.name, blockData.level);
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




// file: extensions/blockId.js

if (WailaConfig.extBlockIdData) {
    //Отображение id и data блока
    Waila.addGlobalExtension(function (id, data, elements, tile, yPos) {
        elements["blockId"] = {
            type: "text",
            text: "ID: " + id,
            x: 200,
            y: yPos,
            font: {color: Style.DEF, size: 40}
        };
        yPos += 60;

        elements["blockData"] = {
            type: "text",
            text: "Data: " + data,
            x: 200,
            y: yPos,
            font: {color: Style.DEF, size: 40}
        };
        yPos += 60;

        Waila.requireHeight(40);
        return yPos;
    });
}




// file: translation.js

Translation.addTranslation("waila.growth", {ru: "Рост"});
Translation.addTranslation("waila.harvestable", {ru: "Можно добыть"});
Translation.addTranslation("waila.material", {ru: "Материал"});
Translation.addTranslation("waila.level", {ru: "Уровень добычи"});
Translation.addTranslation("waila.entity", {ru: "Сущность"});
Translation.addTranslation("waila.entity_type", {ru: "Тип"});




// file: shared.js

ModAPI.registerAPI("WailaAPI", {

    Waila: Waila,
    WailaConfig: WailaConfig,
    Style: Style,
    StyleManager: StyleManager,
    BlockList: BlockList,

    requireGlobal: function (command) {
        return eval(command);
    }

});
Logger.Log("Waila API shared with name WailaAPI", "API");




