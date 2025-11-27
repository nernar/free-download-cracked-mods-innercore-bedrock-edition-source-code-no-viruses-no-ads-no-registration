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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// libraries
IMPORT("BlockEngine");
IMPORT("flags");
IMPORT("EnergyNet");
IMPORT("ChargeItem");
IMPORT("TileRender");
IMPORT("BackpackAPI");
IMPORT("StorageInterface");
IMPORT("VanillaRecipe");
VanillaRecipe.setResourcePath(__dir__ + "assets/res/"); // for MC 1.11 recipes
VanillaRecipe.setBehaviorPath(__dir__ + "minecraft_packs/behavior/"); // for MC 1.16 recipes
// constants
var GUI_SCALE = 3.2;
var COLOR_INDEX_TO_DYE = {
    0: "white_dye",
    1: "orange_dye",
    2: "magenta_dye",
    3: "light_blue_dye",
    4: "yellow_dye",
    5: "lime_dye",
    6: "pink_dye",
    7: "gray_dye",
    8: "light_gray_dye",
    9: "cyan_dye",
    10: "purple_dye",
    11: "blue_dye",
    12: "brown_dye",
    13: "green_dye",
    14: "red_dye",
    15: "black_dye"
};
/** @deprecated for MC 1.11 only */
var COLOR_INDEX_TO_DYE_DATA = {
    0: 19,
    1: 14,
    2: 13,
    3: 12,
    4: 11,
    5: 10,
    6: 9,
    7: 8,
    8: 7,
    9: 6,
    10: 5,
    11: 18,
    12: 17,
    13: 2,
    14: 1,
    15: 16
};
// API
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
// blutricity
var BT = EnergyTypeRegistry.assureEnergyType("Bt", 1);
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
// Ores
Translation.addTranslation("Copper Ore", { ru: "Медная руда", es: "Mineral de Cobre", pt: "Minério de Cobre", zh: "铜矿石" });
Translation.addTranslation("Tin Ore", { ru: "Оловянная руда", es: "Mineral de Estaño", pt: "Minério de Estanho", zh: "锡矿石" });
Translation.addTranslation("Silver Ore", { ru: "Серебряная руда", es: "Mineral de Plata", pt: "Minério de Prata", zh: "银矿石" });
Translation.addTranslation("Tungsten Ore", { ru: "Вольфрамовая руда", es: "Mineral de Tungsteno", zh: "红宝石矿石" });
Translation.addTranslation("Ruby Ore", { ru: "Рубиновая руда" });
Translation.addTranslation("Sapphire Ore", { ru: "Сапфировая руда" });
Translation.addTranslation("Green Sapphire Ore", { ru: "Руда зелёного сапфира" });
Translation.addTranslation("Nikolite Ore", { ru: "Николитовая руда" });
// Blocks
//Translation.addTranslation("Bronze Block", {ru: "Бронзовый блок", es: "Bloque de Bronce", pt: "Bloco de Bronze", zh: "青铜块"});
Translation.addTranslation("Copper Block", { ru: "Медный блок", es: "Bloque de Cobre", pt: "Bloco de Cobre", zh: "铜块" });
Translation.addTranslation("Tin Block", { ru: "Оловянный блок", es: "Bloque de Estaño", pt: "Bloco de Estanho", zh: "锡矿石" });
Translation.addTranslation("Silver Block", { ru: "Серебряный блок", es: "Bloque de Plata", pt: "Bloco de Prata", zh: "银块" });
//Translation.addTranslation("Tungsten Block", {ru: "Вольфрамовый блок", es: "Bloque de Tungsteno", zh: "钨块"});
Translation.addTranslation("Ruby Block", { ru: "Рубиновый блок" });
Translation.addTranslation("Sapphire Block", { ru: "Сапфировый блок" });
Translation.addTranslation("Green Sapphire Block", { ru: "Блок зелёного сапфира" });
Translation.addTranslation("Nikolite Block", { ru: "Николитовый блок" });
Translation.addTranslation("Flax", { ru: "Лён" });
Translation.addTranslation("Indigo Flower", { ru: "Цветок индиго" });
Translation.addTranslation("Marble", { ru: "Мрамор" });
Translation.addTranslation("Marble Brick", { ru: "Мраморный кирпич" });
Translation.addTranslation("Basalt", { ru: "Базальт" });
Translation.addTranslation("Basalt Cobble", { ru: "Базальтовый булыжник" });
Translation.addTranslation("Basalt Brick", { ru: "Базальтовый кирпич" });
Translation.addTranslation("Chiseled Basalt Brick", { ru: "Резной базальтовый кирпич" });
Translation.addTranslation("Basalt Paver", { ru: "Гладкий базальт" });
Translation.addTranslation("Basalt Slab", { ru: "Базальтовая плита" });
Translation.addTranslation("Basalt Cobble Slab", { ru: "Плита из базальтового булыжника" });
Translation.addTranslation("Basalt Brick Slab", { ru: "Плита из базальтового кирпича" });
Translation.addTranslation("Basalt Paver Slab", { ru: "Плита из гладкого базальта" });
Translation.addTranslation("Marble Slab", { ru: "Мраморная плита" });
Translation.addTranslation("Marble Brick Slab", { ru: "Плита из мраморного кирпича" });
Translation.addTranslation("Basalt Stairs", { ru: "Базальтовые ступени" });
Translation.addTranslation("Basalt Cobble Stairs", { ru: "Ступени из базальтового булыжника" });
Translation.addTranslation("Basalt Brick Stairs", { ru: "Ступени из базальтового кирпича" });
Translation.addTranslation("Marble Stairs", { ru: "Мраморные ступени" });
Translation.addTranslation("Marble Brick Stairs", { ru: "Ступени из мраморного кирпича" });
// Lamps
Translation.addTranslation("White Lamp", { ru: "Белая лампа" });
Translation.addTranslation("Orange Lamp", { ru: "Оранжевая лампа" });
Translation.addTranslation("Magenta Lamp", { ru: "Пурпурная лампа" });
Translation.addTranslation("Light Blue Lamp", { ru: "Голубая лампа" });
Translation.addTranslation("Yellow Lamp", { ru: "Жёлтая лампа" });
Translation.addTranslation("Lime Lamp", { ru: "Лаймовая лампа" });
Translation.addTranslation("Pink Lamp", { ru: "Розовая лампа" });
Translation.addTranslation("Gray Lamp", { ru: "Серая лампа" });
Translation.addTranslation("Light Gray Lamp", { ru: "Светло-серая лампа" });
Translation.addTranslation("Cyan Lamp", { ru: "Бирюзовая лампа" });
Translation.addTranslation("Purple Lamp", { ru: "Фиолетовая лампа" });
Translation.addTranslation("Blue Lamp", { ru: "Синяя лампа" });
Translation.addTranslation("Brown Lamp", { ru: "Коричневая лампа" });
Translation.addTranslation("Green Lamp", { ru: "Зелёная лампа" });
Translation.addTranslation("Red Lamp", { ru: "Красная лампа" });
Translation.addTranslation("Black Lamp", { ru: "Чёрная лампа" });
Translation.addTranslation("White Inverted Lamp", { ru: "Белая инвертированная лампа" });
Translation.addTranslation("Orange Inverted Lamp", { ru: "Оранжевая инвертированная лампа" });
Translation.addTranslation("Magenta Inverted Lamp", { ru: "Пурпурная инвертированная лампа" });
Translation.addTranslation("Light Blue Inverted Lamp", { ru: "Голубая инвертированная лампа" });
Translation.addTranslation("Yellow Inverted Lamp", { ru: "Жёлтая инвертированная лампа" });
Translation.addTranslation("Lime Inverted Lamp", { ru: "Лаймовая инвертированная лампа" });
Translation.addTranslation("Pink Inverted Lamp", { ru: "Розовая инвертированная лампа" });
Translation.addTranslation("Gray Inverted Lamp", { ru: "Серая инвертированная лампа" });
Translation.addTranslation("Light Gray Inverted Lamp", { ru: "Светло-серая инвертированная лампа" });
Translation.addTranslation("Cyan Inverted Lamp", { ru: "Бирюзовая инвертированная лампа" });
Translation.addTranslation("Purple Inverted Lamp", { ru: "Фиолетовая инвертированная лампа" });
Translation.addTranslation("Blue Inverted Lamp", { ru: "Синяя инвертированная лампа" });
Translation.addTranslation("Brown Inverted Lamp", { ru: "Коричневая инвертированная лампа" });
Translation.addTranslation("Green Inverted Lamp", { ru: "Зелёная инвертированная лампа" });
Translation.addTranslation("Red Inverted Lamp", { ru: "Красная инвертированная лампа" });
Translation.addTranslation("Black Inverted Lamp", { ru: "Чёрная инвертированная лампа" });
// Machines
Translation.addTranslation("Block Breaker", { ru: "Разрушитель блоков" });
Translation.addTranslation("Deployer", { ru: "Установщик" });
Translation.addTranslation("Igniter", { ru: "Воспламенитель" });
Translation.addTranslation("Smelter", { ru: "Плавильная печь" });
Translation.addTranslation("Blulectric Smelter", { ru: "Блутрическая плавильная печь" });
Translation.addTranslation("Blulectric Furnace", { ru: "Блутрическая печь" });
Translation.addTranslation("Solar Panel", { ru: "Солнечная панель", es: "Panel Solar", pt: "Painel Solar", zh: "太阳能发电机" });
Translation.addTranslation("Thermopile", { ru: "Термоэлемент" });
Translation.addTranslation("Battery Box", { ru: "Аккумулятор" });
Translation.addTranslation("Blutricity Transformer", { ru: "Преобразователь блутричества" });
Translation.addTranslation("Blue Alloy Wire", { ru: "Провод из синего сплава" });
// Items
Translation.addTranslation("Flax Seeds", { ru: "Семена льна" });
Translation.addTranslation("Ruby", { ru: "Рубин" });
Translation.addTranslation("Sapphire", { ru: "Сапфир" });
Translation.addTranslation("Green Sapphire", { ru: "Зелёный сапфир" });
Translation.addTranslation("Nikolite", { ru: "Николит" });
Translation.addTranslation("Red Alloy Ingot", { ru: "Слиток красного сплава" });
Translation.addTranslation("Blue Alloy Ingot", { ru: "Слиток синего сплава" });
Translation.addTranslation("Bronze Ingot", { ru: "Бронзовый слиток", es: "Lingote de Bronce", pt: "Lingote de Bronze", zh: "青铜锭" });
Translation.addTranslation("Tin Ingot", { ru: "Оловянный слиток", es: "Lingote de Estaño", pt: "Lingote de Estanho", zh: "锡锭" });
Translation.addTranslation("Copper Ingot", { ru: "Медный слиток", es: "Lingote de Cobre", pt: "Lingote de Cobre", zh: "铜锭" });
Translation.addTranslation("Silver Ingot", { ru: "Серебрянный слиток", es: "Lingote de Plata", pt: "Lingote de Prata", zh: "银锭" });
Translation.addTranslation("Tungsten Ingot", { ru: "Вольфрамовый слиток", es: "Lingote de Tungsteno", zh: "钨锭" });
Translation.addTranslation("Silicon Boule", { ru: "Кремниевый монокристалл" });
Translation.addTranslation("Silicon Wafer", { ru: "Кремниевая плата" });
Translation.addTranslation("Red-Doped Wafer", { ru: "Красная плата" });
Translation.addTranslation("Blue-Doped Wafer", { ru: "Синяя плата" });
Translation.addTranslation("Fine Copper Wire", { ru: "Качественная медная проволока" });
Translation.addTranslation("Fine Iron Wire", { ru: "Качественная железная проволока" });
Translation.addTranslation("Copper Coil", { ru: "Медная катушка" });
Translation.addTranslation("BT Battery", { ru: "Батарея" });
// Lumar
Translation.addTranslation("White Lumar", { ru: "Белая светопыль" });
Translation.addTranslation("Orange Lumar", { ru: "Оранжевая светопыль" });
Translation.addTranslation("Magenta Lumar", { ru: "Пурпурная светопыль" });
Translation.addTranslation("Light Blue Lumar", { ru: "Голубая светопыль" });
Translation.addTranslation("Yellow Lumar", { ru: "Жёлтая светопыль" });
Translation.addTranslation("Lime Lumar", { ru: "Лаймовая светопыль" });
Translation.addTranslation("Pink Lumar", { ru: "Розовая светопыль" });
Translation.addTranslation("Gray Lumar", { ru: "Серая светопыль" });
Translation.addTranslation("Light Gray Lumar", { ru: "Светло-серая светопыль" });
Translation.addTranslation("Cyan Lumar", { ru: "Бирюзовая светопыль" });
Translation.addTranslation("Purple Lumar", { ru: "Фиолетовая светопыль" });
Translation.addTranslation("Blue Lumar", { ru: "Синяя светопыль" });
Translation.addTranslation("Brown Lumar", { ru: "Коричневая светопыль" });
Translation.addTranslation("Green Lumar", { ru: "Зелёная светопыль" });
Translation.addTranslation("Red Lumar", { ru: "Красная светопыль" });
Translation.addTranslation("Black Lumar", { ru: "Чёрная светопыль" });
// Tools
Translation.addTranslation("Diamond Handsaw", { ru: "Алмазная ножовка" });
Translation.addTranslation("Diamond Drawplate", { ru: "Алмазная волока" });
Translation.addTranslation("Wool Card", { ru: "Чесалка" });
Translation.addTranslation("Screwdriver", { ru: "Отвёртка" });
Translation.addTranslation("Sonic Screwdriver", { ru: "Звуковая отвёртка" });
Translation.addTranslation("Athame", { ru: "Атам" });
Translation.addTranslation("Wood Sickle", { ru: "Деревянный серп" });
Translation.addTranslation("Stone Sickle", { ru: "Каменный серп" });
Translation.addTranslation("Iron Sickle", { ru: "Железный серп" });
Translation.addTranslation("Gold Sickle", { ru: "Золотой серп" });
Translation.addTranslation("Diamond Sickle", { ru: "Алмазный серп" });
Translation.addTranslation("Ruby Sword", { ru: "Рубиновый меч" });
Translation.addTranslation("Ruby Shovel", { ru: "Рубиновая лопата" });
Translation.addTranslation("Ruby Pickaxe", { ru: "Рубиновая кирка" });
Translation.addTranslation("Ruby Axe", { ru: "Рубиновый топор" });
Translation.addTranslation("Ruby Hoe", { ru: "Рубиновая мотыга" });
Translation.addTranslation("Ruby Sickle", { ru: "Рубиновый серп" });
Translation.addTranslation("Sapphire Sword", { ru: "Сапфировый меч" });
Translation.addTranslation("Sapphire Shovel", { ru: "Сапфировая лопата" });
Translation.addTranslation("Sapphire Pickaxe", { ru: "Сапфировая кирка" });
Translation.addTranslation("Sapphire Axe", { ru: "Сапфировый топор" });
Translation.addTranslation("Sapphire Hoe", { ru: "Сапфировая мотыга" });
Translation.addTranslation("Sapphire Sickle", { ru: "Сапфировый серп" });
Translation.addTranslation("Green Sapphire Sword", { ru: "Сапфировый меч" });
Translation.addTranslation("Green Sapphire Shovel", { ru: "Сапфировая лопата" });
Translation.addTranslation("Green Sapphire Pickaxe", { ru: "Сапфировая кирка" });
Translation.addTranslation("Green Sapphire Axe", { ru: "Сапфировый топор" });
Translation.addTranslation("Green Sapphire Hoe", { ru: "Сапфировая мотыга" });
Translation.addTranslation("Green Sapphire Sickle", { ru: "Сапфировый серп" });
Translation.addTranslation("Canvas", { ru: "Холст" });
Translation.addTranslation("Canvas Bag", { ru: "Холщёвая сумка" });
Translation.addTranslation("Seed Bag", { ru: "Мешочек для семян" });
// Creative groups
Translation.addTranslation("Ores", { ru: "Руды" });
Translation.addTranslation("Mineral Blocks", { ru: "Минеральный блоки" });
Translation.addTranslation("Slabs", { ru: "Плиты" });
Translation.addTranslation("Stairs", { ru: "Ступени" });
Translation.addTranslation("Lamps", { ru: "Лампы" });
Translation.addTranslation("Inverted Lamps", { ru: "Инвертированные лампы" });
Translation.addTranslation("Lumar", { ru: "Цветная светопыль" });
Translation.addTranslation("Ingots", { ru: "Слитки" });
Translation.addTranslation("Gems", { ru: "Драгоценные камни" });
Translation.addTranslation("Swords", { ru: "Мечи" });
Translation.addTranslation("Shovels", { ru: "Лопаты" });
Translation.addTranslation("Pickaxes", { ru: "Кирки" });
Translation.addTranslation("Axes", { ru: "Топоры" });
Translation.addTranslation("Hoes", { ru: "Мотыги" });
Translation.addTranslation("Sickles", { ru: "Серпы" });
var IntegrationAPI;
(function (IntegrationAPI) {
    function registerPlant(blockID) {
        plants.push(blockID);
    }
    IntegrationAPI.registerPlant = registerPlant;
    function registerSeeds(itemID, blockID) {
        seeds[itemID] = blockID;
    }
    IntegrationAPI.registerSeeds = registerSeeds;
    function addDeployerItem(itemID) {
        blockItems.push(itemID);
    }
    IntegrationAPI.addDeployerItem = addDeployerItem;
})(IntegrationAPI || (IntegrationAPI = {}));
var MachineRegistry;
(function (MachineRegistry) {
    var machineIDs = {};
    function isMachine(id) {
        return machineIDs[id];
    }
    MachineRegistry.isMachine = isMachine;
    function registerPrototype(id, Prototype) {
        machineIDs[id] = true;
        Block.setDestroyTime(id, 3);
        BlockRegistry.setBlockMaterial(id, "stone", 1);
        TileEntity.registerPrototype(id, Prototype);
    }
    MachineRegistry.registerPrototype = registerPrototype;
    function registerMachine(id, Prototype) {
        registerPrototype(id, Prototype);
        // wire connection
        ICRender.getGroup("bt-wire").add(id, -1);
        EnergyTileRegistry.addEnergyTypeForId(id, BT);
    }
    MachineRegistry.registerMachine = registerMachine;
    function updateGuiHeader(gui, text) {
        var header = gui.getWindow("header");
        header.contentProvider.drawing[2].text = Translation.translate(text);
    }
    MachineRegistry.updateGuiHeader = updateGuiHeader;
    function createInventoryWindow(header, uiDescriptor) {
        var gui = new UI.StandartWindow({
            standard: {
                header: { text: { text: Translation.translate(header) } },
                inventory: { standard: true },
                background: { standard: true }
            },
            drawing: uiDescriptor.drawing || [],
            elements: uiDescriptor.elements
        });
        Callback.addCallback("LevelLoaded", function () {
            updateGuiHeader(gui, header);
        });
        return gui;
    }
    MachineRegistry.createInventoryWindow = createInventoryWindow;
    var screwdrivers = {};
    function registerScrewdriver(id, properties) {
        screwdrivers[id] = properties;
    }
    MachineRegistry.registerScrewdriver = registerScrewdriver;
    function getScrewdriverData(id) {
        return screwdrivers[id];
    }
    MachineRegistry.getScrewdriverData = getScrewdriverData;
    function isScrewdriver(item) {
        var screwdriver = getScrewdriverData(item.id);
        return screwdriver === null || screwdriver === void 0 ? void 0 : screwdriver.canBeUsed(item);
    }
    MachineRegistry.isScrewdriver = isScrewdriver;
    function getTextureArray(texture) {
        var _a;
        (_a = texture.side2) !== null && _a !== void 0 ? _a : (texture.side2 = texture.side);
        return [
            [[texture.top, 0], [texture.bottom, 0], [texture.side, 1], [texture.side, 1], [texture.side2, 1], [texture.side2, 1]],
            [[texture.bottom, 0], [texture.top, 0], [texture.side, 0], [texture.side, 0], [texture.side2, 0], [texture.side2, 0]],
            [[texture.side, 0], [texture.side, 0], [texture.top, 0], [texture.bottom, 0], [texture.side2, 2], [texture.side2, 3]],
            [[texture.side, 1], [texture.side, 1], [texture.bottom, 0], [texture.top, 0], [texture.side2, 3], [texture.side2, 2]],
            [[texture.side, 2], [texture.side, 2], [texture.side2, 3], [texture.side2, 2], [texture.top, 0], [texture.bottom, 0]],
            [[texture.side, 3], [texture.side, 3], [texture.side2, 2], [texture.side2, 3], [texture.bottom, 0], [texture.top, 0]],
        ];
    }
    function createBlockWithRotation(stringID, name, texture, blockType) {
        var textures = getTextureArray(texture.default);
        var variations = [];
        for (var i = 0; i < textures.length; i++) {
            variations.push({ name: name, texture: textures[i], inCreative: i == 0 });
        }
        var activeTextures = getTextureArray(texture.active);
        for (var i = 0; i < activeTextures.length; i++) {
            variations.push({ name: name, texture: activeTextures[i], inCreative: false });
        }
        var numericID = IDRegistry.genBlockID(stringID);
        Block.createBlock(stringID, variations, blockType);
        BlockRegistry.setRotationFunction(stringID, true);
        TileRenderer.setHandAndUiModel(numericID, 0, textures[1]);
    }
    MachineRegistry.createBlockWithRotation = createBlockWithRotation;
})(MachineRegistry || (MachineRegistry = {}));
var SmelterRecipes;
(function (SmelterRecipes) {
    SmelterRecipes.recipeData = [];
    function addRecipe(result, input) {
        var e_1, _a;
        var _b, _c;
        (_b = result.data) !== null && _b !== void 0 ? _b : (result.data = 0);
        try {
            for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
                var item = input_1_1.value;
                (_c = item.data) !== null && _c !== void 0 ? _c : (item.data = -1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        SmelterRecipes.recipeData.push({ input: input, result: result });
    }
    SmelterRecipes.addRecipe = addRecipe;
    function getInput(container) {
        var inputItems = [];
        for (var i = 1; i <= 4; i++) {
            var slot = container.getSlot("slotSource" + i);
            if (slot.id > 0) {
                inputItems.push(new ItemStack(slot));
            }
        }
        return inputItems;
    }
    SmelterRecipes.getInput = getInput;
    function getRecipe(inputItems) {
        var e_2, _a, e_3, _b, e_4, _c;
        if (inputItems.length == 0)
            return null;
        try {
            for (var recipeData_1 = __values(SmelterRecipes.recipeData), recipeData_1_1 = recipeData_1.next(); !recipeData_1_1.done; recipeData_1_1 = recipeData_1.next()) {
                var recipe = recipeData_1_1.value;
                var valid = true;
                try {
                    for (var _d = (e_3 = void 0, __values(recipe.input)), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var item = _e.value;
                        var count = 0;
                        try {
                            for (var inputItems_1 = (e_4 = void 0, __values(inputItems)), inputItems_1_1 = inputItems_1.next(); !inputItems_1_1.done; inputItems_1_1 = inputItems_1.next()) {
                                var slot = inputItems_1_1.value;
                                if (item.id == slot.id && (item.data == -1 || item.data == slot.data)) {
                                    count += slot.count;
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (inputItems_1_1 && !inputItems_1_1.done && (_c = inputItems_1.return)) _c.call(inputItems_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        if (count < item.count) {
                            valid = false;
                            break;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                if (valid) {
                    return recipe;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (recipeData_1_1 && !recipeData_1_1.done && (_a = recipeData_1.return)) _a.call(recipeData_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return null;
    }
    SmelterRecipes.getRecipe = getRecipe;
    function performRecipe(recipe, container) {
        var e_5, _a;
        var resultSlot = container.getSlot("slotResult");
        try {
            for (var _b = __values(recipe.input), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                var count = item.count;
                for (var i = 1; i <= 4; i++) {
                    var slot = container.getSlot("slotSource" + i);
                    if (item.id == slot.id && (item.data == -1 || item.data == slot.data)) {
                        var dc = Math.min(count, slot.count);
                        count -= dc;
                        slot.setSlot(slot.id, slot.count - dc, slot.data);
                        slot.validate();
                    }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        resultSlot.setSlot(recipe.result.id, resultSlot.count + recipe.result.count, recipe.result.data);
        container.validateAll();
    }
    SmelterRecipes.performRecipe = performRecipe;
})(SmelterRecipes || (SmelterRecipes = {}));
BlockRegistry.createBlockType("crop", {
    baseBlock: 59,
    destroyTime: 0,
    renderType: 6,
    sound: "grass"
});
var BlockFlax = /** @class */ (function (_super) {
    __extends(BlockFlax, _super);
    function BlockFlax() {
        var _this = _super.call(this, "flax", "crop") || this;
        for (var i = 0; i < 6; i++) {
            _this.addVariation("Flax", [["flax", i]]);
        }
        TileRenderer.setEmptyCollisionShape(_this.id);
        _this.setShape(0, 0, 0, 1, 1 / 8, 1, 0);
        _this.setShape(0, 0, 0, 1, 3 / 8, 1, 1);
        _this.setShape(0, 0, 0, 1, 3 / 4, 1, 2);
        _this.setShape(0, 0, 0, 1, 15 / 16, 1, 3);
        return _this;
    }
    BlockFlax.prototype.getDrop = function (coords, block, level, enchant, item, region) {
        if (block.data < 4) {
            return [[ItemID.flaxSeeds, 1, 0]];
        }
        return [[ItemID.flaxSeeds, randomInt(1, 3), 0], [287, randomInt(1, 3), 0]];
    };
    BlockFlax.prototype.onNeighbourChange = function (coords, block, changeCoords, region) {
        if (changeCoords.y < coords.y && region.getBlockId(coords.x, coords.y - 1, coords.z) != 60) {
            region.destroyBlock(coords.x, coords.y, coords.z, true);
        }
    };
    BlockFlax.prototype.checkFarmland = function (x, y, z, region) {
        var block = region.getBlock(x, y, z);
        if (block.id == 60) { // farmland
            if (block.data == 0) { // wet
                return 0.75;
            }
            return 0.25; // dry
        }
        return 0;
    };
    BlockFlax.prototype.onRandomTick = function (x, y, z, block, region) {
        if (block.data < 5) {
            var blockBelow = region.getBlock(x, y - 1, z);
            if (blockBelow.id != 60) {
                region.destroyBlock(x, y, z, true);
            }
            else if (block.data < 4 && region.getLightLevel(x, y, z) >= 9) {
                var points = (blockBelow.data > 0) ? 2 : 4;
                points += this.checkFarmland(x - 1, y - 1, z - 1, region);
                points += this.checkFarmland(x - 1, y - 1, z, region);
                points += this.checkFarmland(x - 1, y - 1, z + 1, region);
                points += this.checkFarmland(x, y - 1, z - 1, region);
                points += this.checkFarmland(x, y - 1, z + 1, region);
                points += this.checkFarmland(x + 1, y - 1, z - 1, region);
                points += this.checkFarmland(x + 1, y - 1, z, region);
                points += this.checkFarmland(x + 1, y - 1, z + 1, region);
                var chance = 1 / (Math.floor(50 / points) + 1); // from 1/26 to 1/6
                //Debug.m(`Random tick on ${x}, ${y}, ${z}, points=${points}, chance=${chance}`);
                if (Math.random() < chance) {
                    this.setStage(region, x, y, z, block.data + 1);
                }
            }
        }
        else if (region.getBlockId(x, y - 1, z) != block.id) {
            region.destroyBlock(x, y, z, true);
        }
    };
    BlockFlax.prototype.onClick = function (coords, item, block, player) {
        var region = BlockSource.getDefaultForActor(player);
        var boneMeal = IDConverter.getIDData("bone_meal");
        if (block.data < 4 && item.id == boneMeal.id && item.data == boneMeal.data) {
            this.setStage(region, coords.x, coords.y, coords.z, block.data + randomInt(2, 3));
            if (Game.isItemSpendingAllowed(player)) {
                Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
            }
            for (var i = 0; i < 16; i++) {
                var px = coords.x + Math.random();
                var pz = coords.z + Math.random();
                var py = coords.y + Math.random();
                Particles.addFarParticle(Native.ParticleType.happyVillager, px, py, pz, 0, 0, 0);
            }
        }
    };
    BlockFlax.prototype.setStage = function (region, x, y, z, stage) {
        if (stage < 4) {
            region.setBlock(x, y, z, this.id, stage);
        }
        else if (region.getBlockId(x, y + 1, z) == 0) {
            region.setBlock(x, y, z, this.id, 4);
            region.setBlock(x, y + 1, z, this.id, 5);
        }
    };
    return BlockFlax;
}(BlockBase));
BlockRegistry.registerBlock(new BlockFlax());
ItemRegistry.createItem("flaxSeeds", { name: "Flax Seeds", icon: "flax_seeds", category: ItemCategory.NATURE });
Item.registerUseFunction("flaxSeeds", function (coords, item, block, player) {
    var region = WorldRegion.getForActor(player);
    if (block.id == 60 && coords.side == 1 && region.getBlockId(coords.x, coords.y + 1, coords.z) == 0) {
        region.setBlock(coords.x, coords.y + 1, coords.z, BlockID.flax, 0);
        if (Game.isItemSpendingAllowed(player)) {
            Entity.setCarriedItem(player, item.id, item.count - 1, 0);
        }
        region.playSound(coords.x, coords.y + 1, coords.z, "dig.grass", 1, 0.8);
    }
});
// drop seeds from grass
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    var region = BlockSource.getDefaultForActor(player);
    if (Math.random() < 1 / 16 && (block.id == 31 && block.data == 0 || block.id == 175 && (block.data == 2 || block.data == 10))) {
        region.spawnDroppedItem(coords.x + .5, coords.y + .5, coords.z + .5, ItemID.flaxSeeds, 1, 0);
    }
});
BlockRegistry.createBlockType("basalt", {
    extends: "stone",
    destroyTime: 2,
    explosionResistance: 100
});
BlockRegistry.createBlock("rp_basalt", [
    { name: "Basalt", texture: [["rp_basalt", 0]], inCreative: true }
], "basalt");
BlockRegistry.setBlockMaterial(BlockID.rp_basalt, "stone", 1);
BlockRegistry.registerDrop("rp_basalt", function (coords, blockID, blockData, level, enchant) {
    if (enchant.silk) {
        return [[BlockID.rp_basalt, 1, 0]];
    }
    return [[BlockID.basaltCobble, 1, 0]];
}, 1);
BlockRegistry.createBlock("basaltCobble", [
    { name: "Basalt Cobble", texture: [["rp_basalt_cobble", 0]], inCreative: true }
], "basalt");
BlockRegistry.setBlockMaterial(BlockID.basaltCobble, "stone", 1);
BlockRegistry.setDestroyLevel("basaltCobble", 1);
BlockRegistry.createBlock("basaltBrick", [
    { name: "Basalt Brick", texture: [["rp_basalt_brick", 0]], inCreative: true },
    { name: "Chiseled Basalt Brick", texture: [["rp_basalt_chiseled", 0]], inCreative: true }
], "basalt");
BlockRegistry.setBlockMaterial(BlockID.basaltBrick, "stone", 1);
BlockRegistry.setDestroyLevel("basaltBrick", 1);
BlockRegistry.createBlock("basaltPaver", [
    { name: "Basalt Paver", texture: [["rp_basalt_paver", 0]], inCreative: true }
], "basalt");
BlockRegistry.setBlockMaterial(BlockID.basaltPaver, "stone", 1);
BlockRegistry.registerDrop("basaltPaver", function (coords, blockID, blockData, level, enchant) {
    if (enchant.silk) {
        return [[blockID, 1, 0]];
    }
    return [[BlockID.basaltCobble, 1, 0]];
}, 1);
Item.addCreativeGroup("basalt", Translation.translate("Basalt"), [
    BlockID.rp_basalt,
    BlockID.basaltCobble,
    BlockID.basaltBrick,
    BlockID.basaltPaver,
]);
Recipes.addFurnace(BlockID.basaltCobble, BlockID.rp_basalt, 0);
VanillaRecipe.addShapedRecipe("basalt_brick", {
    pattern: [
        "XX",
        "XX"
    ],
    key: {
        "X": { item: "block:rp_basalt" }
    },
    result: {
        item: "block:basaltBrick",
        data: 0,
        count: 4
    }
}, true);
VanillaRecipe.addShapelessRecipe("basalt_paver", {
    tags: ["crafting_table", "stonecutter"],
    ingredients: [
        { item: "block:rp_basalt" }
    ],
    result: {
        item: "block:basaltPaver"
    }
}, true);
VanillaRecipe.addStonecutterRecipe("stonecutter_basalt_brick", {
    ingredients: [
        { item: "block:rp_basalt" }
    ],
    result: {
        item: "block:basaltBrick",
        data: 0
    }
});
VanillaRecipe.addStonecutterRecipe("stonecutter_chiseled_basalt_brick", {
    ingredients: [
        { item: "block:rp_basalt" }
    ],
    result: {
        item: "block:basaltBrick",
        data: 1
    }
});
BlockRegistry.createBlock("rp_marble", [
    { name: "Marble", texture: [["rp_marble", 0]], inCreative: true },
], "stone");
BlockRegistry.setBlockMaterial(BlockID.rp_marble, "stone", 1);
BlockRegistry.setDestroyLevel("rp_marble", 1);
BlockRegistry.createBlock("marbleBrick", [
    { name: "Marble Brick", texture: [["rp_marble_brick", 0]], inCreative: true }
], "stone");
BlockRegistry.setBlockMaterial(BlockID.marbleBrick, "stone", 1);
BlockRegistry.setDestroyLevel("marbleBrick", 1);
VanillaRecipe.addShapedRecipe("marble_brick", {
    pattern: [
        "XX",
        "XX"
    ],
    key: {
        "X": { item: "block:rp_marble" }
    },
    result: {
        item: "block:marbleBrick",
        data: 0,
        count: 4
    }
}, true);
VanillaRecipe.addStonecutterRecipe("stonecutter_marble_brick", {
    ingredients: [
        { item: "block:rp_marble" }
    ],
    result: {
        item: "block:marbleBrick",
        data: 0
    }
});
BlockRegistry.createBlockType("stone_slab", {
    baseBlock: 1,
    destroyTime: 1.5,
    explosionResistance: 30,
    renderLayer: 3,
    translucency: 0,
    sound: "stone"
});
BlockRegistry.createBlockType("basalt_slab", {
    extends: "stone_slab",
    destroyTime: 2,
    explosionResistance: 100
});
BlockRegistry.createSlabs("basaltSlab", "doubleBasaltSlab", [
    { name: "Basalt Slab", texture: [["rp_basalt", 0]], inCreative: true },
    { name: "Basalt Cobble Slab", texture: [["rp_basalt_cobble", 0]], inCreative: true },
    { name: "Basalt Brick Slab", texture: [["rp_basalt_brick", 0]], inCreative: true },
    { name: "Basalt Paver Slab", texture: [["rp_basalt_paver", 0]], inCreative: true }
], "basalt_slab");
BlockRegistry.setBlockMaterial(BlockID.basaltSlab, "stone", 1);
BlockRegistry.setBlockMaterial(BlockID.doubleBasaltSlab, "stone", 1);
Recipes.addShaped({ id: BlockID.basaltSlab, count: 6, data: 0 }, [
    "xxx"
], ['x', BlockID.rp_basalt, 0]);
Recipes.addShaped({ id: BlockID.basaltSlab, count: 6, data: 1 }, [
    "xxx"
], ['x', BlockID.basaltCobble, 0]);
Recipes.addShaped({ id: BlockID.basaltSlab, count: 6, data: 2 }, [
    "xxx"
], ['x', BlockID.basaltBrick, 0]);
Recipes.addShaped({ id: BlockID.basaltSlab, count: 6, data: 3 }, [
    "xxx"
], ['x', BlockID.basaltPaver, 0]);
VanillaRecipe.addStonecutterRecipe("stonecutter_basalt_slab", {
    ingredients: [
        { item: "block:rp_basalt" }
    ],
    result: {
        item: "block:basaltSlab",
        data: 0,
        count: 2
    }
});
VanillaRecipe.addStonecutterRecipe("stonecutter_basalt_cobble_slab", {
    ingredients: [
        { item: "block:basaltCobble" }
    ],
    result: {
        item: "block:basaltSlab",
        data: 1,
        count: 2
    }
});
VanillaRecipe.addStonecutterRecipe("stonecutter_basalt_brick_slab", {
    ingredients: [
        {
            item: "block:basaltBrick",
            data: 0
        }
    ],
    result: {
        item: "block:basaltSlab",
        data: 2,
        count: 2
    }
});
VanillaRecipe.addStonecutterRecipe("stonecutter_basalt_paver_slab", {
    ingredients: [
        { item: "block:basaltPaver" }
    ],
    result: {
        item: "block:basaltSlab",
        data: 3,
        count: 2
    }
});
BlockRegistry.createSlabs("marbleSlab", "doubleMarbleSlab", [
    { name: "Marble Slab", texture: [["rp_marble", 0]], inCreative: true },
    { name: "Marble Brick Slab", texture: [["rp_marble_brick", 0]], inCreative: true },
], "stone_slab");
Item.addCreativeGroup("rpSlabs", Translation.translate("Slabs"), [
    BlockID.basaltSlab,
    BlockID.marbleSlab
]);
Recipes.addShaped({ id: BlockID.marbleSlab, count: 6, data: 0 }, [
    "xxx"
], ['x', BlockID.rp_marble, 0]);
Recipes.addShaped({ id: BlockID.marbleSlab, count: 6, data: 1 }, [
    "xxx"
], ['x', BlockID.marbleBrick, 0]);
VanillaRecipe.addStonecutterRecipe("stonecutter_marble_slab", {
    ingredients: [
        { item: "block:rp_marble" }
    ],
    result: {
        item: "block:marbleSlab",
        data: 0,
        count: 2
    }
});
VanillaRecipe.addStonecutterRecipe("stonecutter_marble_brick_slab", {
    ingredients: [
        {
            item: "block:marbleBrick"
        }
    ],
    result: {
        item: "block:marbleSlab",
        data: 1,
        count: 2
    }
});
BlockRegistry.createStairs("basaltStairs", [
    { name: "Basalt Stairs", texture: [["rp_basalt", 0]], inCreative: true }
], "basalt_slab");
BlockRegistry.setBlockMaterial(BlockID.basaltStairs, "stone", 1);
BlockRegistry.setDestroyLevel("basaltStairs", 1);
BlockRegistry.createStairs("basaltCobbleStairs", [
    { name: "Basalt Cobble Stairs", texture: [["rp_basalt_cobble", 0]], inCreative: true }
], "basalt_slab");
BlockRegistry.setBlockMaterial(BlockID.basaltCobbleStairs, "stone", 1);
BlockRegistry.setDestroyLevel("basaltCobbleStairs", 1);
BlockRegistry.createStairs("basaltBrickStairs", [
    { name: "Basalt Brick Stairs", texture: [["rp_basalt_brick", 0]], inCreative: true }
], "basalt_slab");
BlockRegistry.setBlockMaterial(BlockID.basaltBrickStairs, "stone", 1);
BlockRegistry.setDestroyLevel("basaltBrickStairs", 1);
BlockRegistry.createStairs("marbleStairs", [
    { name: "Marble Stairs", texture: [["rp_marble", 0]], inCreative: true }
], "stone_slab");
BlockRegistry.setBlockMaterial(BlockID.marbleStairs, "stone", 1);
BlockRegistry.setDestroyLevel("marbleStairs", 1);
BlockRegistry.createStairs("marbleBrickStairs", [
    { name: "Marble Brick Stairs", texture: [["rp_marble_brick", 0]], inCreative: true }
], "stone_slab");
BlockRegistry.setBlockMaterial(BlockID.marbleBrickStairs, "stone", 1);
BlockRegistry.setDestroyLevel("marbleBrickStairs", 1);
Item.addCreativeGroup("rpStairs", Translation.translate("Stairs"), [
    BlockID.basaltStairs,
    BlockID.basaltCobbleStairs,
    BlockID.basaltBrickStairs,
    BlockID.marbleStairs,
    BlockID.marbleBrickStairs
]);
Recipes.addShaped({ id: BlockID.basaltStairs, count: 4, data: 0 }, [
    "x  ",
    "xx ",
    "xxx"
], ['x', BlockID.rp_basalt, 0]);
Recipes.addShaped({ id: BlockID.basaltCobbleStairs, count: 4, data: 0 }, [
    "x  ",
    "xx ",
    "xxx"
], ['x', BlockID.basaltCobble, 0]);
Recipes.addShaped({ id: BlockID.basaltBrickStairs, count: 4, data: 0 }, [
    "x  ",
    "xx ",
    "xxx"
], ['x', BlockID.basaltBrick, 0]);
Recipes.addShaped({ id: BlockID.marbleStairs, count: 4, data: 0 }, [
    "x  ",
    "xx ",
    "xxx"
], ['x', BlockID.rp_marble, 0]);
Recipes.addShaped({ id: BlockID.marbleBrickStairs, count: 4, data: 0 }, [
    "x  ",
    "xx ",
    "xxx"
], ['x', BlockID.marbleBrick, 0]);
VanillaRecipe.addStonecutterRecipe("stonecutter_basalt_cobble_stairs", {
    ingredients: [
        { item: "block:basaltCobble" }
    ],
    result: {
        item: "block:basaltCobbleStairs"
    }
});
VanillaRecipe.addStonecutterRecipe("stonecutter_basalt_brick_stairs", {
    ingredients: [
        {
            item: "block:basaltBrick",
            data: 0
        }
    ],
    result: {
        item: "block:basaltBrickStairs"
    }
});
VanillaRecipe.addStonecutterRecipe("stonecutter_marble_brick_stairs", {
    ingredients: [
        { item: "block:marbleBrick" }
    ],
    result: {
        item: "block:marbleBrickStairs"
    }
});
BlockRegistry.createBlock("oreCopper", [
    { name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true }
], "ore");
BlockRegistry.setBlockMaterial(BlockID.oreCopper, "stone", 2);
BlockRegistry.setDestroyLevel("oreCopper", 2);
BlockRegistry.createBlock("oreTin", [
    { name: "Tin Ore", texture: [["ore_tin", 0]], inCreative: true }
], "ore");
BlockRegistry.setBlockMaterial(BlockID.oreTin, "stone", 2);
BlockRegistry.setDestroyLevel("oreTin", 2);
BlockRegistry.createBlock("oreSilver", [
    { name: "Silver Ore", texture: [["ore_silver", 0]], inCreative: true }
], "ore");
BlockRegistry.setBlockMaterial(BlockID.oreSilver, "stone", 3);
BlockRegistry.setDestroyLevel("oreSilver", 3);
BlockRegistry.createBlock("oreTungsten", [
    { name: "Tungsten Ore", texture: [["ore_tungsten", 0]], inCreative: true }
], "ore");
BlockRegistry.setBlockMaterial(BlockID.oreTungsten, "stone", 3);
BlockRegistry.setDestroyLevel("oreTungsten", 3);
BlockRegistry.createBlock("oreNikolite", [
    { name: "Nikolite Ore", texture: [["ore_nikolite", 0]], inCreative: true }
], "ore");
BlockRegistry.setBlockMaterial(BlockID.oreNikolite, "stone", 3);
BlockRegistry.registerDrop("oreNikolite", function (coords, blockID, blockData, level, enchant) {
    if (enchant.silk) {
        return [[blockID, 1, 0]];
    }
    ToolAPI.dropOreExp(coords, 2, 5, enchant.experience);
    var drop = [];
    var count = randomInt(4, 5) + randomInt(0, enchant.fortune);
    for (var i = 0; i < count; i++) {
        drop.push([ItemID.nikolite, 1, 0]);
    }
    return drop;
}, 3);
BlockRegistry.createBlock("oreRuby", [
    { name: "Ruby Ore", texture: [["ore_ruby", 0]], inCreative: true }
], "ore");
BlockRegistry.setBlockMaterial(BlockID.oreRuby, "stone", 3);
BlockRegistry.registerDrop("oreRuby", function (coords, blockID, blockData, level, enchant) {
    if (enchant.silk) {
        return [[blockID, 1, 0]];
    }
    ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
    var drop = [];
    var count = randomInt(1, 3);
    for (var i = 0; i < count; i++) {
        drop.push([ItemID.gemRuby, 1, 0]);
    }
    return ToolAPI.fortuneDropModifier(drop, enchant.fortune);
}, 3);
BlockRegistry.createBlock("oreSapphire", [
    { name: "Sapphire Ore", texture: [["ore_sapphire", 0]], inCreative: true }
], "ore");
BlockRegistry.setBlockMaterial(BlockID.oreSapphire, "stone", 3);
BlockRegistry.registerDrop("oreSapphire", function (coords, blockID, blockData, level, enchant) {
    if (enchant.silk) {
        return [[blockID, 1, 0]];
    }
    ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
    var drop = [];
    var count = randomInt(1, 3);
    for (var i = 0; i < count; i++) {
        drop.push([ItemID.gemSapphire, 1, 0]);
    }
    return ToolAPI.fortuneDropModifier(drop, enchant.fortune);
}, 3);
BlockRegistry.createBlock("oreGreenSapphire", [
    { name: "Sapphire Ore", texture: [["ore_green_sapphire", 0]], inCreative: true }
], "ore");
BlockRegistry.setBlockMaterial(BlockID.oreGreenSapphire, "stone", 3);
BlockRegistry.registerDrop("oreGreenSapphire", function (coords, blockID, blockData, level, enchant) {
    if (enchant.silk) {
        return [[blockID, 1, 0]];
    }
    ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
    var drop = [];
    var count = randomInt(1, 3);
    for (var i = 0; i < count; i++) {
        drop.push([ItemID.gemGreenSapphire, 1, 0]);
    }
    return ToolAPI.fortuneDropModifier(drop, enchant.fortune);
}, 3);
Item.addCreativeGroup("ores", Translation.translate("Ores"), [
    BlockID.oreCopper,
    BlockID.oreTin,
    BlockID.oreSilver,
    BlockID.oreTungsten,
    BlockID.oreNikolite,
    BlockID.oreRuby,
    BlockID.oreSapphire,
    BlockID.oreGreenSapphire
]);
BlockRegistry.createBlock("blockCopper", [
    { name: "Copper Block", texture: [["block_copper", 0]], inCreative: true }
], "stone");
BlockRegistry.setBlockMaterial(BlockID.blockCopper, "stone", 2);
BlockRegistry.setDestroyLevel("blockCopper", 2);
Block.setDestroyTime(BlockID.blockCopper, 5);
BlockRegistry.createBlock("blockTin", [
    { name: "Tin Block", texture: [["block_tin", 0]], inCreative: true }
], "stone");
BlockRegistry.setBlockMaterial(BlockID.blockTin, "stone", 2);
BlockRegistry.setDestroyLevel("blockTin", 2);
Block.setDestroyTime(BlockID.blockTin, 5);
BlockRegistry.createBlock("blockSilver", [
    { name: "Silver Block", texture: [["block_silver", 0]], inCreative: true }
], "stone");
BlockRegistry.setBlockMaterial(BlockID.blockSilver, "stone", 3);
BlockRegistry.setDestroyLevel("blockSilver", 3);
Block.setDestroyTime(BlockID.blockSilver, 5);
BlockRegistry.createBlock("blockNikolite", [
    { name: "Nikolite Block", texture: [["block_nikolite", 0]], inCreative: true }
], "stone");
BlockRegistry.setBlockMaterial(BlockID.blockNikolite, "stone", 3);
BlockRegistry.setDestroyLevel("blockNikolite", 3);
Block.setDestroyTime(BlockID.blockNikolite, 5);
BlockRegistry.createBlock("blockRuby", [
    { name: "Ruby Block", texture: [["block_ruby", 0]], inCreative: true }
], "stone");
BlockRegistry.setBlockMaterial(BlockID.blockRuby, "stone", 3);
BlockRegistry.setDestroyLevel("blockRuby", 3);
Block.setDestroyTime(BlockID.blockRuby, 5);
BlockRegistry.createBlock("blockSapphire", [
    { name: "Sapphire Block", texture: [["block_sapphire", 0]], inCreative: true }
], "stone");
BlockRegistry.setBlockMaterial(BlockID.blockSapphire, "stone", 3);
BlockRegistry.setDestroyLevel("blockSapphire", 3);
Block.setDestroyTime(BlockID.blockSapphire, 5);
BlockRegistry.createBlock("blockGreenSapphire", [
    { name: "Green Sapphire Block", texture: [["block_green_sapphire", 0]], inCreative: true }
], "stone");
BlockRegistry.setBlockMaterial(BlockID.blockGreenSapphire, "stone", 3);
BlockRegistry.setDestroyLevel("blockGreenSapphire", 3);
Block.setDestroyTime(BlockID.blockGreenSapphire, 5);
Item.addCreativeGroup("blockResource", Translation.translate("Mineral Blocks"), [
    BlockID.blockCopper,
    BlockID.blockTin,
    BlockID.blockSilver,
    BlockID.blockTungsten,
    BlockID.blockNikolite,
    BlockID.blockRuby,
    BlockID.blockSapphire,
    BlockID.blockGreenSapphire
]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: BlockID.blockCopper, count: 1, data: 0 }, [
        "xxx",
        "xxx",
        "xxx"
    ], ['x', ItemID.ingotCopper, 0]);
    Recipes.addShaped({ id: BlockID.blockTin, count: 1, data: 0 }, [
        "xxx",
        "xxx",
        "xxx"
    ], ['x', ItemID.ingotTin, 0]);
    Recipes.addShaped({ id: BlockID.blockSilver, count: 1, data: 0 }, [
        "xxx",
        "xxx",
        "xxx"
    ], ['x', ItemID.ingotSilver, 0]);
    Recipes.addShaped({ id: BlockID.blockNikolite, count: 1, data: 0 }, [
        "xxx",
        "xxx",
        "xxx"
    ], ['x', ItemID.nikolite, 0]);
    Recipes.addShaped({ id: BlockID.blockSapphire, count: 1, data: 0 }, [
        "xxx",
        "xxx",
        "xxx"
    ], ['x', ItemID.gemSapphire, 0]);
    Recipes.addShaped({ id: BlockID.blockGreenSapphire, count: 1, data: 0 }, [
        "xxx",
        "xxx",
        "xxx"
    ], ['x', ItemID.gemGreenSapphire, 0]);
    Recipes.addShaped({ id: BlockID.blockRuby, count: 1, data: 0 }, [
        "xxx",
        "xxx",
        "xxx"
    ], ['x', ItemID.gemRuby, 0]);
    function addResourceUnpackRecipe(recipeName, blockID, itemID, count) {
        VanillaRecipe.addCraftingRecipe(recipeName, {
            type: "shapeless",
            ingredients: [
                { item: "block:" + blockID }
            ],
            result: {
                item: "item:" + itemID,
                count: 9
            }
        }, true);
    }
    addResourceUnpackRecipe("ingot_copper", "blockCopper", "ingotCopper", 9);
    addResourceUnpackRecipe("ingot_tin", "blockTin", "ingotTin", 9);
    addResourceUnpackRecipe("ingot_silver", "blockSilver", "ingotSilver", 9);
    addResourceUnpackRecipe("nikolite", "blockNikolite", "nikolite", 9);
    addResourceUnpackRecipe("gem_ruby", "blockRuby", "gemRuby", 9);
    addResourceUnpackRecipe("gem_sapphire", "blockSapphire", "gemSapphire", 9);
    addResourceUnpackRecipe("gem_green_sapphire", "blockGreenSapphire", "gemGreenSapphire", 9);
});
BlockRegistry.createBlock("rp_lamp", [
    { name: "White Lamp", texture: [["rp_lamp", 0]], inCreative: true },
    { name: "Orange Lamp", texture: [["rp_lamp", 1]], inCreative: true },
    { name: "Magenta Lamp", texture: [["rp_lamp", 2]], inCreative: true },
    { name: "Light Blue Lamp", texture: [["rp_lamp", 3]], inCreative: true },
    { name: "Yellow Lamp", texture: [["rp_lamp", 4]], inCreative: true },
    { name: "Lime Lamp", texture: [["rp_lamp", 5]], inCreative: true },
    { name: "Pink Lamp", texture: [["rp_lamp", 6]], inCreative: true },
    { name: "Gray Lamp", texture: [["rp_lamp", 7]], inCreative: true },
    { name: "Light Gray Lamp", texture: [["rp_lamp", 8]], inCreative: true },
    { name: "Cyan Lamp", texture: [["rp_lamp", 9]], inCreative: true },
    { name: "Purple Lamp", texture: [["rp_lamp", 10]], inCreative: true },
    { name: "Blue Lamp", texture: [["rp_lamp", 11]], inCreative: true },
    { name: "Brown Lamp", texture: [["rp_lamp", 12]], inCreative: true },
    { name: "Green Lamp", texture: [["rp_lamp", 13]], inCreative: true },
    { name: "Red Lamp", texture: [["rp_lamp", 14]], inCreative: true },
    { name: "Black Lamp", texture: [["rp_lamp", 15]], inCreative: true }
], "opaque");
Block.setDestroyTime(BlockID.rp_lamp, 2);
BlockRegistry.setExplosionResistance(BlockID.rp_lamp, 5);
BlockRegistry.createBlock("rp_lamp_inverted", [
    { name: "White Inverted Lamp", texture: [["rp_lamp_on", 0]], inCreative: true },
    { name: "Orange Inverted Lamp", texture: [["rp_lamp_on", 1]], inCreative: true },
    { name: "Magenta Inverted Lamp", texture: [["rp_lamp_on", 2]], inCreative: true },
    { name: "Light Blue Inverted Lamp", texture: [["rp_lamp_on", 3]], inCreative: true },
    { name: "Yellow Inverted Lamp", texture: [["rp_lamp_on", 4]], inCreative: true },
    { name: "Lime Inverted Lamp", texture: [["rp_lamp_on", 5]], inCreative: true },
    { name: "Pink Inverted Lamp", texture: [["rp_lamp_on", 6]], inCreative: true },
    { name: "Gray Inverted Lamp", texture: [["rp_lamp_on", 7]], inCreative: true },
    { name: "Light Gray Inverted Lamp", texture: [["rp_lamp_on", 8]], inCreative: true },
    { name: "Cyan Inverted Lamp", texture: [["rp_lamp_on", 9]], inCreative: true },
    { name: "Purple Inverted Lamp", texture: [["rp_lamp_on", 10]], inCreative: true },
    { name: "Blue Inverted Lamp", texture: [["rp_lamp_on", 11]], inCreative: true },
    { name: "Brown Inverted Lamp", texture: [["rp_lamp_on", 12]], inCreative: true },
    { name: "Green Inverted Lamp", texture: [["rp_lamp_on", 13]], inCreative: true },
    { name: "Red Inverted Lamp", texture: [["rp_lamp_on", 14]], inCreative: true },
    { name: "Black Inverted Lamp", texture: [["rp_lamp_on", 15]], inCreative: true }
], {
    solid: true,
    destroyTime: 2,
    explosionResistance: 5,
    lightLevel: 15,
    renderLayer: 2
});
Item.addCreativeGroup("rp_lamp", Translation.translate("Lamps"), [
    BlockID.rp_lamp,
]);
Item.addCreativeGroup("rp_lamp_inverted", Translation.translate("Inverted Lamps"), [
    BlockID.rp_lamp_inverted,
]);
Block.registerDropFunction("rp_lamp", function (coords, blockID, blockData, level) {
    return [];
});
Block.registerDropFunction("rp_lamp_inverted", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PreLoaded", function () {
    for (var i = 0; i < 16; i++) {
        Recipes.addShaped({ id: BlockID.rp_lamp, count: 1, data: i }, [
            "gxg",
            "gxg",
            "grg",
        ], ['x', ItemID.lumar, i, 'g', 102, -1, 'r', 331, 0]);
        Recipes.addShaped({ id: BlockID.rp_lamp_inverted, count: 1, data: i }, [
            "gxg",
            "gxg",
            "grg",
        ], ['x', ItemID.lumar, i, 'g', 102, -1, 'r', 76, 0]);
    }
});
var TileEntityLamp = /** @class */ (function (_super) {
    __extends(TileEntityLamp, _super);
    function TileEntityLamp(isInverted) {
        var _this = _super.call(this) || this;
        _this.defaultValues = {
            inverted: isInverted
        };
        return _this;
    }
    TileEntityLamp.prototype.getScreenName = function () {
        return null;
    };
    TileEntityLamp.prototype.getBlockID = function (isActive) {
        return isActive ? BlockID.rp_lamp_inverted : BlockID.rp_lamp;
    };
    TileEntityLamp.prototype.onRedstoneUpdate = function (power) {
        var active = (!this.data.inverted == power > 0);
        var blockID = this.getBlockID(active);
        if (this.blockID != blockID) {
            this.selfDestroy();
            var blockData = this.region.getBlockData(this);
            this.region.setBlock(this, blockID, blockData);
            var tile = this.region.addTileEntity(this);
            tile.data.inverted = this.data.inverted;
        }
    };
    TileEntityLamp.prototype.destroyBlock = function (coords, player) {
        var blockID = this.getBlockID(this.data.inverted);
        var blockData = this.region.getBlockData(coords);
        this.region.dropAtBlock(coords.x, coords.y, coords.z, blockID, 1, blockData);
    };
    return TileEntityLamp;
}(TileEntityBase));
TileEntity.registerPrototype(BlockID.rp_lamp, new TileEntityLamp(false));
TileEntity.registerPrototype(BlockID.rp_lamp_inverted, new TileEntityLamp(true));
Block.createSpecialType({
    destroytime: 0.05,
    explosionres: 0.5,
    renderlayer: 3,
}, "cable");
BlockRegistry.createBlock("blueWire", [
    { name: "Blue Alloy Wire", texture: [["blue_wire", 0]], inCreative: true }
], "cable");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.blueWire, count: 12, data: 0 }, [
        "aaa",
        "xxx",
        "aaa"
    ], ['x', ItemID.ingotBlue, 0, 'a', 35, -1]);
    Recipes.addShaped({ id: BlockID.blueWire, count: 12, data: 0 }, [
        "axa",
        "axa",
        "axa"
    ], ['x', ItemID.ingotBlue, 0, 'a', 35, -1]);
});
BT.registerWire(BlockID.blueWire, 100);
TileRenderer.setupWireModel(BlockID.blueWire, 0, 1 / 4, "bt-wire");
var MachineBase = /** @class */ (function (_super) {
    __extends(MachineBase, _super);
    function MachineBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MachineBase.prototype.getFacing = function () {
        return this.blockSource.getBlockData(this.x, this.y, this.z);
    };
    MachineBase.prototype.setActive = function (isActive) {
        if (this.networkData.getBoolean("active") !== isActive) {
            this.networkData.putBoolean("active", isActive);
            this.networkData.sendChanges();
        }
    };
    MachineBase.prototype.onInit = function () {
        this.networkData.putInt("blockId", this.blockID);
        this.networkData.putInt("facing", this.getFacing());
        this.networkData.sendChanges();
    };
    MachineBase.prototype.clientLoad = function () {
        var _this = this;
        this.renderModel();
        this.networkData.addOnDataChangedListener(function (data, isExternal) {
            _this.renderModel();
        });
    };
    MachineBase.prototype.clientUnload = function () {
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
    };
    MachineBase.prototype.renderModel = function () {
        if (this.networkData.getBoolean("active")) {
            var blockId = Network.serverToLocalId(this.networkData.getInt("blockId"));
            var facing = this.networkData.getInt("facing");
            TileRenderer.mapAtCoords(this.x, this.y, this.z, blockId, facing);
        }
        else {
            BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
        }
    };
    __decorate([
        BlockEngine.Decorators.ClientSide
    ], MachineBase.prototype, "renderModel", null);
    return MachineBase;
}(TileEntityBase));
/// <reference path="./type/MachineBase.ts" />
BlockRegistry.createBlock("rp_smelter", [
    { name: "Smelter", texture: [["rp_smelter", 0], ["rp_smelter", 0], ["rp_smelter_side", 0], ["rp_smelter_front", 0], ["rp_smelter_side", 0], ["rp_smelter_side", 0]], inCreative: true }
], "stone");
BlockRegistry.setDestroyLevel(BlockID.rp_smelter, 1);
TileRenderer.setStandardModelWithRotation(BlockID.rp_smelter, 2, [["rp_smelter", 0], ["rp_smelter", 0], ["rp_smelter_side", 0], ["rp_smelter_front", 0], ["rp_smelter_side", 0], ["rp_smelter_side", 0]]);
TileRenderer.registerModelWithRotation(BlockID.rp_smelter, 2, [["rp_smelter", 0], ["rp_smelter", 0], ["rp_smelter_side", 0], ["rp_smelter_front", 1], ["rp_smelter_side", 0], ["rp_smelter_side", 0]]);
TileRenderer.setRotationFunction(BlockID.rp_smelter);
Recipes.addShaped({ id: BlockID.rp_smelter, count: 1, data: 0 }, [
    "xxx",
    "x x",
    "xxx"
], ['x', 45, -1]);
Callback.addCallback("PreLoaded", function () {
    // rp items
    SmelterRecipes.addRecipe({ id: ItemID.ingotRed, count: 1 }, [{ id: 265, count: 1 }, { id: 331, count: 4 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotRed, count: 1 }, [{ id: ItemID.ingotCopper, count: 1 }, { id: 331, count: 4 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBlue, count: 1 }, [{ id: ItemID.ingotSilver, count: 1 }, { id: ItemID.nikolite, count: 4 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 4 }, [{ id: ItemID.ingotTin, count: 1 }, { id: ItemID.ingotCopper, count: 3 }]);
    SmelterRecipes.addRecipe({ id: ItemID.siliconBoule, count: 1 }, [{ id: 12, count: 8 }, { id: 263, count: 8 }]);
    SmelterRecipes.addRecipe({ id: ItemID.waferRed, count: 1 }, [{ id: ItemID.waferSilicon, count: 1 }, { id: 331, count: 4 }]);
    SmelterRecipes.addRecipe({ id: ItemID.waferBlue, count: 1 }, [{ id: ItemID.waferSilicon, count: 1 }, { id: ItemID.nikolite, count: 4 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotCopper, count: 1 }, [{ id: ItemID.fineCopperWire, count: 1 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 1 }, [{ id: ItemID.fineIronWire, count: 1 }]);
    // iron tools
    SmelterRecipes.addRecipe({ id: 265, count: 1 }, [{ id: 256, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 3 }, [{ id: 257, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 3 }, [{ id: 258, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 2 }, [{ id: 267, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 2 }, [{ id: 292, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 2 }, [{ id: 359, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 3 }, [{ id: ItemID.sickleIron, count: 1, data: 0 }]);
    // golden tools
    SmelterRecipes.addRecipe({ id: 266, count: 2 }, [{ id: 283, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 266, count: 1 }, [{ id: 284, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 266, count: 3 }, [{ id: 285, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 266, count: 3 }, [{ id: 286, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 266, count: 2 }, [{ id: 294, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 266, count: 3 }, [{ id: ItemID.sickleGold, count: 1, data: 0 }]);
    // iron armor
    SmelterRecipes.addRecipe({ id: 265, count: 5 }, [{ id: 306, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 8 }, [{ id: 307, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 7 }, [{ id: 308, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 265, count: 4 }, [{ id: 309, count: 1, data: 0 }]);
    // golden armor
    SmelterRecipes.addRecipe({ id: 266, count: 5 }, [{ id: 314, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 266, count: 8 }, [{ id: 315, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 266, count: 7 }, [{ id: 316, count: 1, data: 0 }]);
    SmelterRecipes.addRecipe({ id: 266, count: 4 }, [{ id: 317, count: 1, data: 0 }]);
    // other
    SmelterRecipes.addRecipe({ id: 265, count: 3 }, [{ id: 66, count: 8 }]); // rail
    SmelterRecipes.addRecipe({ id: 265, count: 3 }, [{ id: 101, count: 8 }]); // iron bars
    SmelterRecipes.addRecipe({ id: 265, count: 31 }, [{ id: 145, count: 1, data: 0 }]); // anvil
    SmelterRecipes.addRecipe({ id: 265, count: 4 }, [{ id: 167, count: 1 }]); // iron trapdoor
    SmelterRecipes.addRecipe({ id: 265, count: 3 }, [{ id: 325, count: 1, data: 0 }]); // bucket
    SmelterRecipes.addRecipe({ id: 265, count: 5 }, [{ id: 328, count: 1 }]); // minecart
    SmelterRecipes.addRecipe({ id: 265, count: 2 }, [{ id: 330, count: 1 }]); // iron door
    SmelterRecipes.addRecipe({ id: 265, count: 7 }, [{ id: 380, count: 1 }]); // cauldron
});
// mod compatibility
ModAPI.addAPICallback("ICore", function (api) {
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 2 }, [{ id: ItemID.bronzeSword, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 1 }, [{ id: ItemID.bronzeShovel, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 3 }, [{ id: ItemID.bronzePickaxe, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 3 }, [{ id: ItemID.bronzeAxe, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 2 }, [{ id: ItemID.bronzeHoe, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 6 }, [{ id: ItemID.bronzeWrench, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 5 }, [{ id: ItemID.bronzeHelmet, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 8 }, [{ id: ItemID.bronzeChestplate, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 7 }, [{ id: ItemID.bronzeLeggings, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotBronze, count: 4 }, [{ id: ItemID.bronzeBoots, count: 1 }]);
    SmelterRecipes.addRecipe({ id: ItemID.ingotTin, count: 2 }, [{ id: ItemID.cellEmpty, count: 1 }]);
});
var guiSmelter = MachineRegistry.createInventoryWindow("Smelter", {
    drawing: [
        { type: "bitmap", x: 636, y: 146, bitmap: "furnace_bar_background", scale: GUI_SCALE },
        { type: "bitmap", x: 419, y: 150, bitmap: "fire_background", scale: GUI_SCALE }
    ],
    elements: {
        "progressScale": { type: "scale", x: 636, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_SCALE, clicker: {
                onClick: function () {
                    RecipeViewer === null || RecipeViewer === void 0 ? void 0 : RecipeViewer.RecipeTypeRegistry.openRecipePage("rp_smelter");
                }
            }
        },
        "burningScale": { type: "scale", x: 419, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_SCALE },
        "slotSource1": { type: "slot", x: 502, y: 112 },
        "slotSource2": { type: "slot", x: 562, y: 112 },
        "slotSource3": { type: "slot", x: 502, y: 172 },
        "slotSource4": { type: "slot", x: 562, y: 172 },
        "slotFuel": { type: "slot", x: 410, y: 200 },
        "slotResult": { type: "slot", x: 720, y: 142 },
    }
});
var Smelter = /** @class */ (function (_super) {
    __extends(Smelter, _super);
    function Smelter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues = {
            progress: 0,
            burn: 0,
            burnMax: 0
        };
        return _this;
    }
    Smelter.prototype.getScreenByName = function () {
        return guiSmelter;
    };
    Smelter.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        StorageInterface.setSlotValidatePolicy(this.container, "slotFuel", function (name, id, amount, data) {
            return Recipes.getFuelBurnDuration(id, data) > 0;
        });
        this.container.setSlotAddTransferPolicy("slotResult", function () {
            return 0;
        });
    };
    Smelter.prototype.onTick = function () {
        StorageInterface.checkHoppers(this);
        if (this.data.burn > 0) {
            this.data.burn--;
        }
        var input = SmelterRecipes.getInput(this.container);
        var recipe = SmelterRecipes.getRecipe(input);
        if (recipe) {
            var resultSlot = this.container.getSlot("slotResult");
            if (resultSlot.id == recipe.result.id && resultSlot.count + recipe.result.count <= 64 || resultSlot.id == 0) {
                if (this.data.burn == 0) {
                    this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
                }
                if (this.data.burn > 0 && this.data.progress++ >= 200) {
                    SmelterRecipes.performRecipe(recipe, this.container);
                    this.data.progress = 0;
                }
            }
        }
        if (!recipe || this.data.burn == 0) {
            this.data.progress = 0;
        }
        this.setActive(this.data.burn > 0);
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 200);
        this.container.sendChanges();
    };
    Smelter.prototype.getFuel = function (slotName) {
        var fuelSlot = this.container.getSlot(slotName);
        if (fuelSlot.id > 0) {
            var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
            if (burn) {
                if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)) {
                    var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                    fuelSlot.id = empty.id;
                    fuelSlot.data = empty.data;
                    return burn;
                }
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
        }
        return 0;
    };
    return Smelter;
}(MachineBase));
MachineRegistry.registerPrototype(BlockID.rp_smelter, new Smelter());
StorageInterface.createInterface(BlockID.rp_smelter, {
    slots: {
        "slotFuel": { input: true, side: "horizontal" },
        "slotSource1": { input: true, side: "up" },
        "slotSource2": { input: true, side: "up" },
        "slotSource3": { input: true, side: "up" },
        "slotSource4": { input: true, side: "up" },
        "slotResult": { output: true }
    }
});
/// <reference path="./MachineBase.ts" />
var BlulectricMachine = /** @class */ (function (_super) {
    __extends(BlulectricMachine, _super);
    function BlulectricMachine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues = {
            energy: 0
        };
        return _this;
    }
    BlulectricMachine.prototype.getEnergyStorage = function () {
        return 0;
    };
    BlulectricMachine.prototype.isConductor = function (type) {
        return false;
    };
    BlulectricMachine.prototype.canReceiveEnergy = function (side, type) {
        return true;
    };
    BlulectricMachine.prototype.canExtractEnergy = function (side, type) {
        return true;
    };
    BlulectricMachine.prototype.energyReceive = function (type, amount, voltage) {
        var add = Math.min(amount, this.getEnergyStorage() - this.data.energy);
        this.data.energy += add;
        return add;
    };
    BlulectricMachine.prototype.energyTick = function (type, src) { };
    BlulectricMachine.prototype.chargeSlot = function (slotName) {
        this.data.energy -= ChargeItemRegistry.addEnergyToSlot(this.container.getSlot(slotName), "Eu", this.data.energy, 0);
    };
    BlulectricMachine.prototype.dischargeSlot = function (slotName) {
        var amount = this.getEnergyStorage() - this.data.energy;
        this.data.energy += ChargeItemRegistry.getEnergyFromSlot(this.container.getSlot(slotName), "Eu", amount, 0);
    };
    return BlulectricMachine;
}(MachineBase));
/// <reference path="../type/BlulectricMachine.ts" />
BlockRegistry.createBlock("rp_solar", [
    { name: "Solar Panel", texture: [["rp_machine_bottom", 0], ["rp_solar", 0], ["rp_solar", 1], ["rp_solar", 1], ["rp_solar", 1], ["rp_solar", 1]], inCreative: true }
], "stone_slab");
BlockRegistry.setDestroyLevel("rp_solar", 1);
Block.setBlockShape(BlockID.rp_solar, { x: 0, y: 0, z: 0 }, { x: 1, y: 0.25, z: 1 }, 0);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.rp_solar, count: 1, data: 0 }, [
        "ooo",
        "oxo",
        "ooo"
    ], ['x', ItemID.ingotBlue, 0, 'o', ItemID.waferBlue, 0]);
});
var SolarPanel = /** @class */ (function (_super) {
    __extends(SolarPanel, _super);
    function SolarPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues = {
            energy: 0,
            canSeeSky: false
        };
        return _this;
    }
    SolarPanel.prototype.canReceiveEnergy = function () {
        return false;
    };
    SolarPanel.prototype.onInit = function () {
        this.data.canSeeSky = this.region.canSeeSky(this.x, this.y + 1, this.z);
    };
    SolarPanel.prototype.energyTick = function (type, src) {
        if (World.getThreadTime() % 100 == 0) {
            this.data.canSeeSky = this.region.canSeeSky(this.x, this.y + 1, this.z);
        }
        if (this.data.canSeeSky && this.region.getLightLevel(this.x, this.y + 1, this.z) == 15) {
            src.add(2);
        }
    };
    SolarPanel.prototype.onItemUse = function () {
        return true;
    };
    return SolarPanel;
}(BlulectricMachine));
MachineRegistry.registerMachine(BlockID.rp_solar, new SolarPanel());
/// <reference path="../type/BlulectricMachine.ts" />
BlockRegistry.createBlockWithRotation("rp_thermopile", [
    { name: "Thermopile", texture: [["rp_thermopile", 0], ["rp_thermopile", 0], ["rp_thermopile_side", 0], ["rp_thermopile_side", 1], ["rp_thermopile_side", 0], ["rp_thermopile_side", 0]], inCreative: true }
], "stone");
BlockRegistry.setDestroyLevel("rp_thermopile", 1);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.rp_thermopile, count: 1, data: 0 }, [
        "cac",
        "oxo",
        "cac"
    ], ['x', ItemID.ingotBlue, 0, 'o', ItemID.waferBlue, 0, 'a', 265, 0, 'c', ItemID.ingotCopper, 0]);
});
var blockHeatValues = { 0: -0.25, 8: -1.5, 9: -1.5, 10: 2, 11: 2, 79: -2, 174: -2 };
var Thermopile = /** @class */ (function (_super) {
    __extends(Thermopile, _super);
    function Thermopile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues = {
            energy: 0,
            output: 0
        };
        return _this;
    }
    Thermopile.prototype.onInit = function () { };
    Thermopile.prototype.canReceiveEnergy = function () {
        return false;
    };
    Thermopile.prototype.getHeatValue = function (id) {
        return blockHeatValues[id] || 0;
    };
    Thermopile.prototype.calculateHeat = function (x, y, z) {
        var heat = this.getHeatValue(this.region.getBlockId(x, y, z));
        if (heat < 0)
            this.cold -= heat;
        else
            this.heat += heat;
    };
    Thermopile.prototype.energyTick = function (type, src) {
        if (World.getThreadTime() % 20 == 0) {
            this.cold = 0;
            this.heat = 0;
            this.calculateHeat(this.x - 1, this.y, this.z);
            this.calculateHeat(this.x + 1, this.y, this.z);
            this.calculateHeat(this.x, this.y, this.z - 1);
            this.calculateHeat(this.x, this.y, this.z + 1);
            this.data.output = Math.min(this.cold, this.heat) / 4;
            //Debug.m(this.data.output);
        }
        src.add(this.data.output);
    };
    Thermopile.prototype.onItemUse = function () {
        return true;
    };
    return Thermopile;
}(BlulectricMachine));
MachineRegistry.registerMachine(BlockID.rp_thermopile, new Thermopile());
/// <reference path="./BlulectricMachine.ts" />
var ProcessingMachine = /** @class */ (function (_super) {
    __extends(ProcessingMachine, _super);
    function ProcessingMachine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues = {
            energy: 0,
            progress: 0
        };
        return _this;
    }
    ProcessingMachine.prototype.canExtractEnergy = function () {
        return false;
    };
    ProcessingMachine.prototype.getEnergyStorage = function () {
        return 2000;
    };
    ProcessingMachine.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.container.setSlotAddTransferPolicy("slotResult", function () {
            return 0;
        });
    };
    ProcessingMachine.prototype.onTick = function () {
        StorageInterface.checkHoppers(this);
        this.dischargeSlot("slotEnergy");
    };
    return ProcessingMachine;
}(BlulectricMachine));
/// <reference path="../type/ProcessingMachine.ts" />
BlockRegistry.createBlock("bt_furnace", [
    { name: "Blulectric Furnace", texture: [["rp_machine_bottom", 0], ["bt_furnace_top", 0], ["bt_furnace_side", 0], ["bt_furnace_front", 0], ["bt_furnace_side", 0], ["bt_furnace_side", 0]], inCreative: true }
], "stone");
BlockRegistry.setDestroyLevel(BlockID.bt_furnace, 1);
TileRenderer.setStandardModelWithRotation(BlockID.bt_furnace, 2, [["rp_machine_bottom", 0], ["bt_furnace_top", 0], ["bt_furnace_side", 0], ["bt_furnace_front", 0], ["bt_furnace_side", 0], ["bt_furnace_side", 0]]);
TileRenderer.registerModelWithRotation(BlockID.bt_furnace, 2, [["rp_machine_bottom", 0], ["bt_furnace_top", 0], ["bt_furnace_side", 0], ["bt_furnace_front", 1], ["bt_furnace_side", 0], ["bt_furnace_side", 0]]);
TileRenderer.setRotationFunction(BlockID.bt_furnace);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.bt_furnace, count: 1, data: 0 }, [
        "xxx",
        "x x",
        "aba"
    ], ['x', 24, -1, 'a', 265, 0, 'b', ItemID.ingotBlue, 0]);
});
var guiBTFurnace = MachineRegistry.createInventoryWindow("Blulectric Furnace", {
    drawing: [
        { type: "bitmap", x: 625, y: 146, bitmap: "furnace_bar_background", scale: GUI_SCALE },
        { type: "bitmap", x: 425, y: 92, bitmap: "btstorage_small_background", scale: GUI_SCALE },
    ],
    elements: {
        "progressScale": { type: "scale", x: 625, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_SCALE, clicker: {
                onClick: function () {
                    RecipeViewer === null || RecipeViewer === void 0 ? void 0 : RecipeViewer.RecipeTypeRegistry.openRecipePage("furnace");
                }
            } },
        "btScale": { type: "scale", x: 425 + GUI_SCALE, y: 92 + GUI_SCALE, direction: 1, value: 0.5, bitmap: "btstorage_small_scale", scale: GUI_SCALE },
        "slotSource": { type: "slot", x: 536, y: 136, size: 72 },
        "slotResult": { type: "slot", x: 720, y: 136, size: 72 },
    }
});
var BTFurnace = /** @class */ (function (_super) {
    __extends(BTFurnace, _super);
    function BTFurnace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BTFurnace.prototype.getScreenByName = function () {
        return guiBTFurnace;
    };
    BTFurnace.prototype.onTick = function () {
        _super.prototype.onTick.call(this);
        var sourceSlot = this.container.getSlot("slotSource");
        var resultSlot = this.container.getSlot("slotResult");
        var newActive = false;
        var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, sourceSlot.data, "iron");
        if (result && (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0)) {
            if (this.data.energy >= 4) {
                this.data.energy -= 4;
                this.data.progress++;
                newActive = true;
            }
            if (this.data.progress >= 100) {
                sourceSlot.setSlot(sourceSlot.id, sourceSlot.count - 1, sourceSlot.data);
                sourceSlot.validate();
                resultSlot.setSlot(result.id, resultSlot.count + 1, result.data);
                this.data.progress = 0;
            }
        }
        else {
            this.data.progress = 0;
        }
        this.setActive(newActive);
        this.container.setScale("progressScale", this.data.progress / 100);
        this.container.setScale("btScale", this.data.energy / this.getEnergyStorage());
        this.container.sendChanges();
    };
    return BTFurnace;
}(ProcessingMachine));
MachineRegistry.registerMachine(BlockID.bt_furnace, new BTFurnace());
StorageInterface.createInterface(BlockID.bt_furnace, {
    slots: {
        "slotSource": { input: true },
        "slotResult": { output: true }
    }
});
/// <reference path="../type/ProcessingMachine.ts" />
BlockRegistry.createBlock("bt_smelter", [
    { name: "Blulectric Smelter", texture: [["rp_machine_bottom", 0], ["bt_smelter_top", 0], ["bt_smelter_side", 0], ["bt_smelter_front", 0], ["bt_smelter_side", 0], ["bt_smelter_side", 0]], inCreative: true }
], "stone");
BlockRegistry.setDestroyLevel(BlockID.bt_smelter, 1);
TileRenderer.setStandardModelWithRotation(BlockID.bt_smelter, 2, [["rp_machine_bottom", 0], ["bt_smelter_top", 0], ["bt_smelter_side", 0], ["bt_smelter_front", 0], ["bt_smelter_side", 0], ["bt_smelter_side", 0]]);
TileRenderer.registerModelWithRotation(BlockID.bt_smelter, 2, [["rp_machine_bottom", 0], ["bt_smelter_top", 0], ["bt_smelter_side", 0], ["bt_smelter_front", 1], ["bt_smelter_side", 0], ["bt_smelter_side", 0]]);
TileRenderer.setRotationFunction(BlockID.bt_smelter);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.bt_smelter, count: 1, data: 0 }, [
        "xxx",
        "x x",
        "aba"
    ], ['x', 45, -1, 'a', 265, 0, 'b', ItemID.ingotBlue, 0]);
});
var guiBTSmelter = MachineRegistry.createInventoryWindow("Blulectric Smelter", {
    drawing: [
        { type: "bitmap", x: 636, y: 146, bitmap: "furnace_bar_background", scale: GUI_SCALE },
        { type: "bitmap", x: 425, y: 92, bitmap: "btstorage_small_background", scale: GUI_SCALE },
    ],
    elements: {
        "progressScale": { type: "scale", x: 636, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_SCALE, clicker: {
                onClick: function () {
                    RecipeViewer === null || RecipeViewer === void 0 ? void 0 : RecipeViewer.RecipeTypeRegistry.openRecipePage("rp_smelter");
                }
            }
        },
        "btScale": { type: "scale", x: 425 + GUI_SCALE, y: 92 + GUI_SCALE, direction: 1, value: 0.5, bitmap: "btstorage_small_scale", scale: GUI_SCALE },
        "slotSource1": { type: "slot", x: 502, y: 112 },
        "slotSource2": { type: "slot", x: 562, y: 112 },
        "slotSource3": { type: "slot", x: 502, y: 172 },
        "slotSource4": { type: "slot", x: 562, y: 172 },
        "slotResult": { type: "slot", x: 720, y: 136, size: 72 },
    }
});
var BTSmelter = /** @class */ (function (_super) {
    __extends(BTSmelter, _super);
    function BTSmelter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BTSmelter.prototype.getScreenByName = function () {
        return guiBTSmelter;
    };
    BTSmelter.prototype.onTick = function () {
        _super.prototype.onTick.call(this);
        var input = SmelterRecipes.getInput(this.container);
        var recipe = SmelterRecipes.getRecipe(input);
        var newActive = false;
        if (recipe) {
            var resultSlot = this.container.getSlot("slotResult");
            if (resultSlot.id == recipe.result.id && resultSlot.count + recipe.result.count <= 64 || resultSlot.id == 0) {
                if (this.data.energy >= 4) {
                    this.data.energy -= 4;
                    this.data.progress++;
                    newActive = true;
                }
                if (this.data.progress >= 100) {
                    SmelterRecipes.performRecipe(recipe, this.container);
                    this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        this.setActive(newActive);
        this.container.setScale("progressScale", this.data.progress / 100);
        this.container.setScale("btScale", this.data.energy / this.getEnergyStorage());
        this.container.sendChanges();
    };
    return BTSmelter;
}(ProcessingMachine));
MachineRegistry.registerMachine(BlockID.bt_smelter, new BTSmelter());
StorageInterface.createInterface(BlockID.bt_smelter, {
    slots: {
        "slotSource1": { input: true },
        "slotSource2": { input: true },
        "slotSource3": { input: true },
        "slotSource4": { input: true },
        "slotResult": { output: true }
    }
});
/// <reference path="../type/BlulectricMachine.ts" />
BlockRegistry.createBlock("rp_batbox", [
    { name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 0], ["rp_batbox_side", 0], ["rp_batbox_side", 0], ["rp_batbox_side", 0]], inCreative: true },
    { name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 1], ["rp_batbox_side", 1], ["rp_batbox_side", 1], ["rp_batbox_side", 1]], inCreative: false },
    { name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 2], ["rp_batbox_side", 2], ["rp_batbox_side", 2], ["rp_batbox_side", 2]], inCreative: false },
    { name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 3], ["rp_batbox_side", 3], ["rp_batbox_side", 3], ["rp_batbox_side", 3]], inCreative: false },
    { name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 4], ["rp_batbox_side", 4], ["rp_batbox_side", 4], ["rp_batbox_side", 4]], inCreative: false },
    { name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 5], ["rp_batbox_side", 5], ["rp_batbox_side", 5], ["rp_batbox_side", 5]], inCreative: false },
    { name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 6], ["rp_batbox_side", 6], ["rp_batbox_side", 6], ["rp_batbox_side", 6]], inCreative: false },
    { name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 7], ["rp_batbox_side", 7], ["rp_batbox_side", 7], ["rp_batbox_side", 7]], inCreative: false },
    { name: "Battery Box", texture: [["rp_machine_bottom", 0], ["rp_batbox_top", 0], ["rp_batbox_side", 8], ["rp_batbox_side", 8], ["rp_batbox_side", 8], ["rp_batbox_side", 8]], inCreative: true }
], "stone");
Block.registerDropFunction("rp_batbox", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.rp_batbox, count: 1, data: 0 }, [
        "xpx",
        "xax",
        "aba"
    ], ['x', ItemID.btBattery, -1, 'a', 265, 0, 'b', ItemID.ingotBlue, 0, 'p', 5, -1]);
});
var guiBatBox = MachineRegistry.createInventoryWindow("Battery Box", {
    drawing: [
        { type: "bitmap", x: 530, y: 75, bitmap: "btstorage_background", scale: GUI_SCALE },
    ],
    elements: {
        "batteryIcon": { type: "image", x: 530 + 6 * GUI_SCALE, y: 75 - 7 * GUI_SCALE, bitmap: "battery_icon_off", scale: GUI_SCALE },
        "btScale": { type: "scale", x: 530 + GUI_SCALE, y: 75 + GUI_SCALE, direction: 1, value: 0.5, bitmap: "btstorage_scale", scale: GUI_SCALE },
        "slot1": { type: "slot", x: 650, y: 80 },
        "slot2": { type: "slot", x: 650, y: 172 },
    }
});
var BatBox = /** @class */ (function (_super) {
    __extends(BatBox, _super);
    function BatBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatBox.prototype.getScreenByName = function () {
        return guiBatBox;
    };
    BatBox.prototype.getEnergyLevel = function () {
        return Math.floor(this.data.energy / this.getEnergyStorage() * 8);
    };
    BatBox.prototype.onInit = function () {
        StorageInterface.setSlotValidatePolicy(this.container, "slot1", function (_, id) {
            return ChargeItemRegistry.isValidItem(id, "Bt", 0);
        });
        StorageInterface.setSlotValidatePolicy(this.container, "slot2", function (_, id) {
            return ChargeItemRegistry.isValidStorage(id, "Bt", 0);
        });
    };
    BatBox.prototype.onTick = function () {
        this.chargeSlot("slot2");
        this.dischargeSlot("slot1");
        var energyLevel = this.getEnergyLevel();
        if (!this.remove && energyLevel != this.region.getBlockData(this)) {
            this.region.setBlock(this, this.blockID, energyLevel);
        }
        var energyStorage = this.getEnergyStorage();
        if (this.data.energy == energyStorage) {
            this.container.sendEvent("setBatteryIcon", "on");
        }
        else {
            this.container.sendEvent("setBatteryIcon", "off");
        }
        this.container.setScale("btScale", this.data.energy / energyStorage);
        this.container.sendChanges();
    };
    BatBox.prototype.getEnergyStorage = function () {
        return 64000;
    };
    BatBox.prototype.energyTick = function (type, src) {
        var output = Math.min(100, this.data.energy);
        this.data.energy += src.add(output) - output;
    };
    BatBox.prototype.destroyBlock = function (coords, player) {
        if (this.data.energy > 0) {
            var extra = new ItemExtraData().putInt("energy", this.data.energy);
            var blockData = this.getEnergyLevel();
            this.region.dropAtBlock(coords.x, coords.y, coords.z, this.blockID, 1, blockData, extra);
        }
        else {
            this.region.dropAtBlock(coords.x, coords.y, coords.z, this.blockID, 1, 0);
        }
    };
    BatBox.prototype.setBatteryIcon = function (container, window, content, data) {
        if (content) {
            content.elements["batteryIcon"].bitmap = "battery_icon_" + data;
        }
    };
    __decorate([
        BlockEngine.Decorators.ContainerEvent(Side.Client)
    ], BatBox.prototype, "setBatteryIcon", null);
    return BatBox;
}(BlulectricMachine));
MachineRegistry.registerMachine(BlockID.rp_batbox, new BatBox());
Block.registerPlaceFunction("rp_batbox", function (coords, item, block, player, region) {
    var _a = coords.relative, x = _a.x, y = _a.y, z = _a.z;
    region.setBlock(x, y, z, item.id, item.data);
    var tile = World.addTileEntity(x, y, z, region);
    if (item.extra) {
        tile.data.energy = item.extra.getInt("energy");
    }
    else {
        tile.data.energy = tile.getEnergyStorage() / 8 * item.data;
    }
});
/// <reference path="../type/BlulectricMachine.ts" />
BlockRegistry.createBlock("bt_transformer", [
    { name: "Blutricity Transformer", texture: [["bt_transformer_bottom", 0], ["bt_transformer_top", 0], ["bt_transformer_side", 0], ["bt_transformer_side", 0], ["bt_transformer_side", 1], ["bt_transformer_side", 1]], inCreative: true }
], "opaque");
BlockRegistry.setDestroyLevel("bt_transformer", 1);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID.bt_transformer, count: 1, data: 0 }, [
        "xxx",
        "cxc",
        "axa"
    ], ['x', 265, 0, 'a', ItemID.ingotBlue, 0, 'c', ItemID.copperCoil, 0]);
});
var TransformerRender;
(function (TransformerRender) {
    ICRender.getGroup("ic-wire").add(BlockID.bt_transformer, -1);
    var modelBoxes = [
        [0, 0, 0, 1, 1 / 8, 1],
        [1 / 8, 1 / 8, 1 / 16, 7 / 8, 7 / 8, 15 / 16],
        [0, 1 / 8, 3 / 8, 1, 1, 5 / 8]
    ];
    TileRenderer.setStaticModel(BlockID.bt_transformer, 0, modelBoxes);
    TileRenderer.setCollisionShape(BlockID.bt_transformer, 0, modelBoxes);
})(TransformerRender || (TransformerRender = {}));
var BTTransformer = /** @class */ (function (_super) {
    __extends(BTTransformer, _super);
    function BTTransformer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues = {
            energy: 0,
            electric_mode: false
        };
        return _this;
    }
    BTTransformer.prototype.canReceiveEnergy = function (side, type) {
        return this.data.electric_mode == (type == "Bt");
    };
    BTTransformer.prototype.canExtractEnergy = function (side, type) {
        return this.data.electric_mode != (type == "Bt");
    };
    BTTransformer.prototype.getEnergyStorage = function () {
        return 128;
    };
    BTTransformer.prototype.energyTick = function (type, src) {
        var output = this.data.energy;
        if (output > 0) {
            this.data.energy -= src.addPacket(this.data.electric_mode ? "Bt" : "Eu", output);
        }
    };
    BTTransformer.prototype.redstone = function (signal) {
        var mode = signal.power > 0;
        if (this.data.electric_mode != mode) {
            this.data.electric_mode = mode;
            this.rebuildGrid();
        }
    };
    BTTransformer.prototype.rebuildGrid = function () {
        this.energyNode.resetConnections();
        EnergyGridBuilder.buildGridForTile(this);
    };
    BTTransformer.prototype.onItemUse = function () {
        return true;
    };
    return BTTransformer;
}(BlulectricMachine));
MachineRegistry.registerMachine(BlockID.bt_transformer, new BTTransformer());
EnergyTileRegistry.addEnergyTypeForId(BlockID.bt_transformer, EU);
var RedstoneMachine = /** @class */ (function (_super) {
    __extends(RedstoneMachine, _super);
    function RedstoneMachine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues = {
            activated: false
        };
        return _this;
    }
    RedstoneMachine.prototype.getFacing = function () {
        return this.blockSource.getBlockData(this.x, this.y, this.z) % 6;
    };
    RedstoneMachine.prototype.setFacing = function (side) {
        this.region.setBlock(this, this.blockID, side + (this.data.activated ? 6 : 0));
    };
    RedstoneMachine.prototype.onItemUse = function (coords, item, player) {
        var screwdriver = MachineRegistry.getScrewdriverData(item.id);
        if (screwdriver === null || screwdriver === void 0 ? void 0 : screwdriver.canBeUsed(item)) {
            screwdriver.useItem(item, player);
            this.setFacing((this.getFacing() + 1) % 6);
            return true;
        }
        return false;
    };
    RedstoneMachine.prototype.activate = function () {
        var block = this.region.getBlock(this);
        this.region.setBlock(this, block.id, block.data + 6);
        this.data.activated = true;
    };
    RedstoneMachine.prototype.deactivate = function () {
        var block = this.region.getBlock(this);
        this.region.setBlock(this, block.id, block.data - 6);
        this.data.activated = false;
    };
    RedstoneMachine.prototype.onRedstoneUpdate = function (power) {
        if (power > 0 && !this.data.activated) {
            this.activate();
        }
        else if (power == 0 && this.data.activated) {
            this.deactivate();
        }
    };
    return RedstoneMachine;
}(TileEntityBase));
/// <reference path="../type/RedstoneMachine.ts" />
MachineRegistry.createBlockWithRotation("rp_block_breaker", "Block Breaker", {
    default: { top: "block_breaker_top", bottom: "block_breaker_bottom", side: "block_breaker_side" },
    active: { top: "block_breaker_top_active", bottom: "block_breaker_bottom", side: "block_breaker_side_active" }
}, "stone");
BlockRegistry.setDestroyLevel(BlockID.rp_block_breaker, 1);
Recipes.addShaped({ id: BlockID.rp_block_breaker, count: 1, data: 0 }, [
    "cxc",
    "c#c",
    "crc"
], ['#', VanillaBlockID.piston, -1, 'c', VanillaBlockID.cobblestone, -1, 'r', VanillaItemID.redstone, -1, 'x', VanillaItemID.iron_pickaxe, 0]);
var BlockBreaker = /** @class */ (function (_super) {
    __extends(BlockBreaker, _super);
    function BlockBreaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockBreaker.prototype.getScreenName = function () {
        return null;
    };
    BlockBreaker.prototype.activate = function () {
        _super.prototype.activate.call(this);
        var coords = World.getRelativeCoords(this.x, this.y, this.z, this.getFacing());
        var blockID = this.region.getBlockId(coords);
        if (blockID != 0 && ToolAPI.getBlockMaterialName(blockID) != "unbreaking") {
            var result = this.region.breakBlockForResult(coords, -1, new ItemStack(VanillaItemID.iron_pickaxe, 1, 0));
            if (result.items.length > 0) {
                this.dropItems(result.items);
            }
        }
    };
    BlockBreaker.prototype.dropItems = function (items) {
        var e_6, _a;
        var side = this.getFacing() ^ 1;
        var dir = World.getVectorByBlockSide(side);
        var coords = World.getRelativeCoords(this.x, this.y, this.z, side);
        var container = StorageInterface.getStorage(this.blockSource, coords.x, coords.y, coords.z);
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                if (container)
                    container.addItem(item);
                if (item.count > 0) {
                    var ent = this.region.dropAtBlock(coords.x, coords.y, coords.z, item);
                    Entity.setVelocity(ent, dir.x / 5, dir.y / 5, dir.z / 5);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    return BlockBreaker;
}(RedstoneMachine));
MachineRegistry.registerPrototype(BlockID.rp_block_breaker, new BlockBreaker());
/// <reference path="../type/RedstoneMachine.ts" />
MachineRegistry.createBlockWithRotation("rp_deployer", "Deployer", {
    default: { top: "deployer_top", bottom: "rp_block_bottom", side: "deployer_side", side2: "deployer_side2" },
    active: { top: "deployer_top_active", bottom: "rp_block_bottom", side: "deployer_side", side2: "deployer_side2" }
}, "stone");
BlockRegistry.setDestroyLevel(BlockID.rp_deployer, 1);
Recipes.addShaped({ id: BlockID.rp_deployer, count: 1, data: 0 }, [
    "cxc",
    "c#c",
    "crc"
], ['#', VanillaBlockID.piston, -1, 'c', VanillaBlockID.cobblestone, -1, 'r', VanillaItemID.redstone, -1, 'x', VanillaBlockID.chest, -1]);
var guiDeployer = MachineRegistry.createInventoryWindow("Deployer", {
    elements: {
        "slot0": { type: "slot", x: 502, y: 112 },
        "slot1": { type: "slot", x: 562, y: 112 },
        "slot2": { type: "slot", x: 622, y: 112 },
        "slot3": { type: "slot", x: 502, y: 172 },
        "slot4": { type: "slot", x: 562, y: 172 },
        "slot5": { type: "slot", x: 622, y: 172 },
        "slot6": { type: "slot", x: 502, y: 232 },
        "slot7": { type: "slot", x: 562, y: 232 },
        "slot8": { type: "slot", x: 622, y: 232 }
    }
});
var blockItems = [
    VanillaBlockID.cake,
    VanillaBlockID.bed,
    VanillaItemID.repeater,
    VanillaBlockID.brewing_stand,
    VanillaBlockID.hopper,
    VanillaBlockID.frame,
    VanillaBlockID.flower_pot,
    VanillaItemID.comparator,
    VanillaItemID.banner,
    VanillaBlockID.campfire,
    VanillaBlockID.soul_campfire,
    VanillaBlockID.chain,
    VanillaBlockID.nether_sprouts,
    VanillaItemID.sign,
    VanillaItemID.birch_sign,
    VanillaItemID.acacia_sign,
    VanillaItemID.jungle_sign,
    VanillaItemID.warped_sign,
    VanillaItemID.spruce_sign,
    VanillaItemID.crimson_sign,
    VanillaItemID.darkoak_sign,
    VanillaBlockID.iron_door,
    VanillaBlockID.birch_door,
    VanillaBlockID.acacia_door,
    VanillaBlockID.jungle_door,
    VanillaBlockID.spruce_door,
    VanillaBlockID.warped_door,
    VanillaBlockID.wooden_door,
    VanillaBlockID.crimson_door,
    VanillaBlockID.dark_oak_door,
    VanillaItemID.wheat_seeds,
    VanillaItemID.melon_seeds,
    VanillaItemID.pumpkin_seeds,
    VanillaItemID.beetroot_seeds,
    VanillaBlockID.nether_wart,
    ItemID.flaxSeeds
];
var Deployer = /** @class */ (function (_super) {
    __extends(Deployer, _super);
    function Deployer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Deployer.prototype.getScreenByName = function () {
        return guiDeployer;
    };
    Deployer.prototype.onTick = function () {
        StorageInterface.checkHoppers(this);
    };
    Deployer.prototype.isBlockItem = function (itemID) {
        if (ItemRegistry.isBlock(itemID)) {
            return true;
        }
        return blockItems.indexOf(itemID) != -1;
    };
    Deployer.prototype.isEmptyBlock = function (coords, item) {
        var blockID = this.region.getBlockId(coords);
        return blockID == 0 ||
            (!item || item.id != VanillaItemID.bucket && item.id != VanillaItemID.glass_bottle) && blockID >= 8 && blockID <= 11;
    };
    Deployer.prototype.activate = function () {
        _super.prototype.activate.call(this);
        var side = this.getFacing();
        var coords = World.getRelativeCoords(this.x, this.y, this.z, side);
        var ent = this.region.spawnEntity(this.x, this.y, this.z, EEntityType.ARROW);
        var angle = Entity.getLookAt(ent, coords.x, coords.y, coords.z);
        Entity.setLookAngle(ent, angle.yaw, angle.pitch);
        for (var i = 0; i < 9; i++) {
            var slot = this.container.getSlot("slot" + i);
            if (slot.id != 0) {
                if (this.isBlockItem(slot.id)) {
                    if (this.isEmptyBlock(coords)) {
                        var place = this.getUseCoords(coords, side);
                        this.invokeItemUseOn(place, slot, ent);
                        if (!this.isEmptyBlock(coords)) {
                            this.decreaseItem(slot);
                            this.container.sendChanges();
                            //Game.message(`Placed block on ${place.x}, ${place.y}, ${place.z}, (${place.side})`);
                            break;
                        }
                    }
                }
                else {
                    var place = this.getUseCoords(coords, side, slot);
                    try {
                        this.useItem(coords, place, slot, ent);
                        //Game.message(`Item use on ${place.x}, ${place.y}, ${place.z}, (${place.side})`);
                    }
                    catch (e) {
                        Game.message(e);
                    }
                    break;
                }
            }
        }
        Entity.remove(ent);
    };
    Deployer.prototype.getUseCoords = function (coords, facing, item) {
        if (this.isEmptyBlock(coords, item)) {
            var blockId = this.region.getBlockId(coords.x, coords.y - 1, coords.z);
            if (Block.isSolid(blockId) || blockId == VanillaTileID.farmland) {
                return { x: coords.x, y: coords.y - 1, z: coords.z, side: 1 };
            }
            return { x: this.x, y: this.y, z: this.z, side: facing };
        }
        return __assign(__assign({}, coords), { side: facing ^ 1 });
    };
    Deployer.prototype.useItem = function (coords, place, slot, ent) {
        var block = this.region.getBlock(coords);
        var extraBlock = this.region.getExtraBlock(coords);
        var stringId = ItemRegistry.getVanillaStringID(slot.id);
        //Game.message(JSON.stringify(block.getNamedStatesScriptable()));
        if (stringId.endsWith("spawn_egg")) {
            this.invokeItemUseOn(place, slot, ent);
            this.decreaseItem(slot);
        }
        else if (stringId.endsWith("_bucket")) {
            if (Block.canContainLiquid(block.id) || block.id >= 8 && block.id <= 11) {
                this.invokeItemUseOn(place, slot, ent);
                slot.setSlot(VanillaItemID.bucket, 1, 0);
            }
        }
        else if (stringId == "bucket") {
            var blockId = extraBlock.id || block.id;
            if (blockId >= 8 && blockId <= 11) {
                this.invokeItemUseOn(place, slot, ent);
                this.decreaseItem(slot);
                this.addItem((blockId <= 9) ? VanillaItemID.water_bucket : VanillaItemID.lava_bucket, 1, 0);
            }
        }
        else if (stringId == "glass_bottle") {
            if (block.id == 8 || block.id == 9) {
                this.decreaseItem(slot);
                this.addItem(VanillaItemID.potion, 1, 0);
            }
        }
        else if (stringId == "flint_and_steel") {
            this.invokeItemUseOn(place, slot, ent);
            if (this.region.getBlockId(coords) == VanillaTileID.fire) {
                slot.data++;
                if (slot.data >= Item.getMaxDamage(slot.id)) {
                    slot.setSlot(0, 0, 0);
                }
            }
        }
        else
            return;
        this.container.sendChanges();
    };
    Deployer.prototype.decreaseItem = function (slot) {
        slot.count--;
        slot.validate();
        slot.markDirty();
    };
    Deployer.prototype.addItem = function (id, count, data) {
        for (var i = 0; i < 9; i++) {
            var slot = this.container.getSlot("slot" + i);
            if (slot.id == 0) {
                slot.setSlot(id, count, data);
                return;
            }
        }
        var coords = World.getRelativeCoords(this.x, this.y, this.z, this.getFacing());
        this.region.dropAtBlock(coords.x, coords.y, coords.z, id, count, data);
    };
    Deployer.prototype.invokeItemUseOn = function (coords, item, entity) {
        var _a, _b;
        var dir = World.getVectorByBlockSide(coords.side);
        (_a = coords.vec) !== null && _a !== void 0 ? _a : (coords.vec = {
            x: coords.x + .5 + dir.x / 2,
            y: coords.y + .5 + dir.y / 2,
            z: coords.z + .5 + dir.z / 2
        });
        (_b = coords.relative) !== null && _b !== void 0 ? _b : (coords.relative = World.getRelativeCoords(coords.x, coords.y, coords.z, coords.side));
        var block = this.region.getBlock(coords.x, coords.y, coords.z);
        var useItem = false;
        var func = Game.isItemSpendingAllowed;
        Game.isItemSpendingAllowed = function () {
            useItem = true;
            return false;
        };
        Callback.invokeCallback("ItemUse", coords, item, block, false, entity);
        Game.isItemSpendingAllowed = func;
        Item.invokeItemUseOn(coords, item, true, entity);
        if (useItem) {
            this.decreaseItem(item);
        }
    };
    return Deployer;
}(RedstoneMachine));
if (BlockEngine.getMainGameVersion() >= 16) {
    MachineRegistry.registerPrototype(BlockID.rp_deployer, new Deployer());
}
/// <reference path="../type/RedstoneMachine.ts" />
MachineRegistry.createBlockWithRotation("rp_igniter", "Igniter", {
    default: { top: "igniter_top", bottom: "rp_block_bottom", side: "igniter_side", side2: "igniter_side2" },
    active: { top: "igniter_top_active", bottom: "rp_block_bottom", side: "igniter_side", side2: "igniter_side2" },
}, "stone");
BlockRegistry.setDestroyLevel(BlockID.rp_igniter, 1);
Recipes.addShaped({ id: BlockID.rp_igniter, count: 1, data: 0 }, [
    "nxn",
    "c#c",
    "crc"
], ['#', VanillaBlockID.piston, -1, 'c', VanillaBlockID.cobblestone, -1, 'n', VanillaBlockID.netherrack, -1, 'r', VanillaItemID.redstone, -1, 'x', VanillaItemID.flint_and_steel, 0]);
var Igniter = /** @class */ (function (_super) {
    __extends(Igniter, _super);
    function Igniter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Igniter.prototype.getScreenName = function () {
        return null;
    };
    Igniter.prototype.activate = function () {
        _super.prototype.activate.call(this);
        var coords = World.getRelativeCoords(this.x, this.y, this.z, this.getFacing());
        if (this.region.getBlockId(coords) == 0) {
            this.region.setBlock(coords, VanillaTileID.fire, 0);
        }
    };
    Igniter.prototype.deactivate = function () {
        _super.prototype.deactivate.call(this);
        var coords = World.getRelativeCoords(this.x, this.y, this.z, this.getFacing());
        var block = this.region.getBlockId(coords);
        if (block == VanillaTileID.fire || block == VanillaTileID.portal) {
            this.region.setBlock(coords, 0, 0);
        }
    };
    return Igniter;
}(RedstoneMachine));
MachineRegistry.registerPrototype(BlockID.rp_igniter, new Igniter());
ItemRegistry.createItem("ingotRed", { name: "Red Alloy Ingot", icon: "ingot_red" });
ItemRegistry.createItem("ingotBlue", { name: "Blue Alloy Ingot", icon: "ingot_blue" });
ItemRegistry.createItem("ingotBronze", { name: "Bronze Ingot", icon: "ingot_bronze" });
ItemRegistry.createItem("ingotTin", { name: "Tin Ingot", icon: "ingot_tin" });
ItemRegistry.createItem("ingotCopper", { name: "Copper Ingot", icon: "ingot_copper" });
ItemRegistry.createItem("ingotSilver", { name: "Silver Ingot", icon: "ingot_silver" });
ItemRegistry.createItem("ingotTungsten", { name: "Tungsten Ingot", icon: "ingot_tungsten" });
Item.addCreativeGroup("ingot", Translation.translate("Ingots"), [
    ItemID.ingotRed,
    ItemID.ingotBlue,
    ItemID.ingotBronze,
    ItemID.ingotTin,
    ItemID.ingotCopper,
    ItemID.ingotSilver,
    ItemID.ingotTungsten
]);
ItemRegistry.createItem("nikolite", { name: "Nikolite", icon: "nikolite" });
ChargeItemRegistry.registerFlashItem(ItemID.nikolite, "Bt", 1000, 0);
ItemRegistry.createItem("gemRuby", { name: "Ruby", icon: "ruby" });
ItemRegistry.createItem("gemSapphire", { name: "Sapphire", icon: "sapphire" });
ItemRegistry.createItem("gemGreenSapphire", { name: "Green Sapphire", icon: "green_sapphire" });
Item.addCreativeGroup("gem", Translation.translate("Gems"), [
    ItemID.gemRuby,
    ItemID.gemSapphire,
    ItemID.gemGreenSapphire
]);
Callback.addCallback("PreLoaded", function () {
    Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);
    Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);
    Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
});
ItemRegistry.createItem("canvas", { name: "Canvas", icon: "canvas" });
ItemRegistry.createItem("canvasBag", { name: "Canvas Bag", icon: "canvas_bag", stack: 1, category: ItemCategory.EQUIPMENT });
Item.registerIconOverrideFunction(ItemID.canvasBag, function (item, name) {
    return { name: "canvas_bag", meta: item.data };
});
BackpackRegistry.register(ItemID.canvasBag, {
    title: "Canvas Bag",
    slots: 27,
    inRow: 9,
    slotsCenter: true,
    useExtraData: true
});
for (var i = 1; i < 16; i++) {
    Item.addToCreative(ItemID.canvasBag, 1, i);
}
Item.addCreativeGroup("canvasBag", Translation.translate("Canvas Bag"), [ItemID.canvasBag]);
Recipes.addShaped({ id: ItemID.canvas, count: 1, data: 0 }, [
    "aaa",
    "axa",
    "aaa"
], ['x', 280, 0, 'a', 287, 0]);
Recipes.addShaped({ id: ItemID.canvasBag, count: 1, data: 0 }, [
    "aaa",
    "a a",
    "aaa"
], ['a', ItemID.canvas, 0]);
for (var i = 1; i < 16; i++) {
    var dye = IDConverter.getIDData(COLOR_INDEX_TO_DYE[i]);
    Recipes.addShaped({ id: ItemID.canvasBag, count: 1, data: i }, [
        "aaa",
        "axa",
        "aaa"
    ], ['x', dye.id, dye.data, 'a', ItemID.canvas, 0]);
}
ItemRegistry.createItem("seedBag", { name: "Seed Bag", icon: "seed_bag", stack: 1, maxDamage: 576, category: ItemCategory.EQUIPMENT, inCreative: false });
Item.addToCreative(ItemID.seedBag, 1, 576);
Item.registerIconOverrideFunction(ItemID.seedBag, function (item, name) {
    return { name: "seed_bag", meta: (item.data < 576) ? 1 : 0 };
});
Recipes.addShaped({ id: ItemID.seedBag, count: 1, data: 0 }, [
    " s ",
    "a a",
    "aaa"
], ['a', ItemID.canvas, 0, 's', 287, 0]);
Item.registerNameOverrideFunction(ItemID.seedBag, function (item, name) {
    if (item.extra) {
        var id = 0;
        var count = 0;
        var container = SeedBag.getContainer(item.extra);
        if (container) {
            for (var i in container.slots) {
                var slot = container.getSlot(i);
                if (slot.id > 0) {
                    id = slot.id;
                    count += slot.count;
                }
            }
            if (count) {
                name += "\n§7" + Translation.translate(Item.getName(id)) + " * " + count;
            }
        }
    }
    return name;
});
Saver.addSavesScope("SeedBagScope", function read(scope) {
    SeedBag.nextUnique = scope.nextUnique || 1;
    if (!scope.format) {
        var containers = scope.containers || {};
        for (var key in containers) {
            containers[key] = new ItemContainer(containers[key]);
        }
        SeedBag.containers = containers;
    }
    else {
        SeedBag.containers = scope.containers || {};
    }
}, function save() {
    return {
        nextUnique: SeedBag.nextUnique,
        containers: SeedBag.containers,
        format: 1
    };
});
var SeedBag = {
    containers: {},
    nextUnique: 1,
    getContainer: function (extra) {
        if (extra) {
            return this.containers["d" + extra.getInt("container")];
        }
        return null;
    },
    decreaseCount: function (item, container, decreaseCount, player) {
        if (decreaseCount == 0)
            return;
        var storedCount = 0;
        for (var name in container.slots) {
            var slot = container.getSlot(name);
            if (slot.id > 0) {
                var count = Math.min(slot.count, decreaseCount);
                slot.count -= count;
                decreaseCount -= count;
                storedCount += slot.count;
                container.setSlot(name, slot.id, slot.count, slot.data);
                container.validateSlot(name);
            }
        }
        Entity.setCarriedItem(player, item.id, 1, 576 - storedCount, item.extra);
    },
    isValidItem: function (id, container) {
        if (!seeds[id])
            return false;
        for (var i in container.slots) {
            var slot = container.getSlot(i);
            if (slot.id > 0 && slot.id != id) {
                return false;
            }
        }
        return true;
    },
    setupContainer: function (container) {
        container.setClientContainerTypeName("seed_bag.ui");
        container.setGlobalAddTransferPolicy(function (container, name, id, amount, data, extra, player) {
            amount = SeedBag.isValidItem(id, container) ? amount : 0;
            if (SeedBag.isValidItem(id, container)) {
                amount = Math.min(amount, 64 - container.getSlot(name).count);
                var item = Entity.getCarriedItem(player);
                if (item.id == ItemID.seedBag)
                    Entity.setCarriedItem(player, item.id, 1, item.data - amount, item.extra);
                return amount;
            }
            return 0;
        });
        container.setGlobalGetTransferPolicy(function (container, name, id, amount, data, extra, player) {
            var item = Entity.getCarriedItem(player);
            if (item.id == ItemID.seedBag)
                Entity.setCarriedItem(player, item.id, 1, item.data + amount, item.extra);
            return amount;
        });
    },
    openGuiFor: function (item, player) {
        var client = Network.getClientForPlayer(player);
        if (!client) {
            return;
        }
        var extra = item.extra || new ItemExtraData();
        var containerID = extra.getInt("container");
        var container = this.containers["d" + containerID];
        if (!container) {
            containerID = this.nextUnique++;
            extra.putInt("container", containerID);
            container = this.containers["d" + containerID] = new ItemContainer();
            Entity.setCarriedItem(player, item.id, 1, item.data, extra);
        }
        if (!container.getClientContainerTypeName()) {
            this.setupContainer(container);
        }
        container.openFor(client, "seed_bag");
    }
};
SeedBag.gui = new UI.StandartWindow({
    standard: {
        header: { text: { text: Translation.translate("Seed Bag") } },
        inventory: { standard: true },
        background: { standard: true }
    },
    drawing: [],
    elements: {
        "slot0": { type: "slot", x: 530, y: 120 },
        "slot1": { type: "slot", x: 590, y: 120 },
        "slot2": { type: "slot", x: 650, y: 120 },
        "slot4": { type: "slot", x: 530, y: 180 },
        "slot5": { type: "slot", x: 590, y: 180 },
        "slot6": { type: "slot", x: 650, y: 180 },
        "slot8": { type: "slot", x: 530, y: 240 },
        "slot9": { type: "slot", x: 590, y: 240 },
        "slot10": { type: "slot", x: 650, y: 240 }
    }
}),
    ItemContainer.registerScreenFactory("seed_bag.ui", function (container, name) {
        return SeedBag.gui;
    });
Callback.addCallback("LevelLoaded", function () {
    MachineRegistry.updateGuiHeader(SeedBag.gui, "Seed Bag");
});
Item.registerNoTargetUseFunction(ItemID.seedBag, function (item, player) {
    SeedBag.openGuiFor(item, player);
});
var seeds = { 295: 59, 391: 141, 392: 142, 458: 244 };
seeds[ItemID.flaxSeeds] = BlockID.flax;
Item.registerUseFunction("seedBag", function (coords, item, block, player) {
    if (item.extra && block.id == 60 && coords.side == 1) {
        var id = 0;
        var count = 0;
        var decreaseCount = 0;
        var container = SeedBag.getContainer(item.extra);
        var region = BlockSource.getDefaultForActor(player);
        if (container) {
            for (var name in container.slots) {
                var slot = container.getSlot(name);
                if (slot.id > 0) {
                    id = slot.id;
                    count += slot.count;
                    container.setSlot(name, slot.id, slot.count, slot.data);
                }
            }
        }
        if (count) {
            for (var x = coords.x - 2; x <= coords.x + 2; x++)
                for (var z = coords.z - 2; z <= coords.z + 2; z++) {
                    if (region.getBlockId(x, coords.y, z) == 60 && region.getBlockId(x, coords.y + 1, z) == 0) {
                        region.setBlock(x, coords.y + 1, z, seeds[id], 0);
                        decreaseCount++;
                    }
                    if (decreaseCount >= count) {
                        SeedBag.decreaseCount(item, container, decreaseCount, player);
                        return;
                    }
                }
            SeedBag.decreaseCount(item, container, decreaseCount, player);
        }
    }
});
ItemRegistry.createItem("lumar", { name: "Lumar", icon: "lumar", inCreative: false });
Item.registerIconOverrideFunction(ItemID.lumar, function (item, name) {
    return { name: "lumar", meta: item.data };
});
Item.addCreativeGroup("lumar", Translation.translate("Lumar"), [
    ItemID.lumar,
]);
var LumarNameEn = ["White Lumar", "Orange Lumar", "Magenta Lumar", "Light Blue Lumar", "Yellow Lumar", "Lime Lumar", "Pink Lumar", "Gray Lumar", "Light Gray Lumar", "Cyan Lumar", "Purple Lumar", "Blue Lumar", "Brown Lumar", "Green Lumar", "Red Lumar", "Black Lumar"];
for (var i = 0; i < 16; i++) {
    Item.addToCreative(ItemID.lumar, 1, i);
}
Item.registerNameOverrideFunction(ItemID.lumar, function (item, name) {
    return Translation.translate(LumarNameEn[item.data]);
});
function getDye(index) {
    if (BlockEngine.getMainGameVersion() == 11) {
        return {
            item: "dye",
            data: COLOR_INDEX_TO_DYE_DATA[index]
        };
    }
    return {
        item: COLOR_INDEX_TO_DYE[index],
        data: 0
    };
}
for (var index = 0; index < 16; index++) {
    VanillaRecipe.addShapedRecipe("lumar" + index, {
        pattern: [
            "XG",
            "RX"
        ],
        key: {
            "X": getDye(index),
            "R": { item: "redstone" },
            "G": { item: "glowstone_dust" }
        },
        result: {
            item: "item:lumar",
            count: 2,
            data: index
        }
    }, true);
}
ItemRegistry.createItem("siliconBoule", { name: "Silicon Boule", icon: "silicon_boule" });
ItemRegistry.createItem("waferSilicon", { name: "Silicon Wafer", icon: "wafer_silicon" });
ItemRegistry.createItem("waferRed", { name: "Red-Doped Wafer", icon: "wafer_red" });
ItemRegistry.createItem("waferBlue", { name: "Blue-Doped Wafer", icon: "wafer_blue" });
ItemRegistry.createItem("fineCopperWire", { name: "Fine Copper Wire", icon: "fine_copper_wire" });
ItemRegistry.createItem("fineIronWire", { name: "Fine Iron Wire", icon: "fine_iron_wire" });
ItemRegistry.createItem("copperCoil", { name: "Copper Coil", icon: "copper_coil" });
Callback.addCallback("PreLoaded", function () {
    addRecipeWithCraftingTool({ id: ItemID.waferSilicon, count: 16, data: 0 }, [{ id: ItemID.siliconBoule, data: 0 }], ItemID.handsawDiamond);
    addRecipeWithCraftingTool({ id: ItemID.fineCopperWire, count: 1, data: 0 }, [{ id: ItemID.ingotCopper, data: 0 }], ItemID.diamondDrawplate);
    addRecipeWithCraftingTool({ id: ItemID.fineIronWire, count: 1, data: 0 }, [{ id: 265, data: 0 }], ItemID.diamondDrawplate);
    VanillaRecipe.addShapelessRecipe("fine_copper_wire", {
        ingredients: [
            { item: "item:ingotCopper" },
            { item: "item:diamondDrawplate" }
        ],
        result: [
            { item: "item:fineCopperWire" },
            { item: "item:diamondDrawplate" }
        ]
    });
    VanillaRecipe.addShapelessRecipe("fine_iron_wire", {
        ingredients: [
            { item: "iron_ingot" },
            { item: "item:diamondDrawplate" }
        ],
        result: [
            { item: "item:fineIronWire" },
            { item: "item:diamondDrawplate" }
        ]
    });
    Recipes.addShaped({ id: ItemID.copperCoil, count: 1, data: 0 }, [
        "cxc",
        "x#x",
        "cxc"
    ], ['#', 265, 0, 'x', 101, 0, 'c', ItemID.fineCopperWire, 0]);
});
ItemRegistry.createItem("btBattery", { name: "BT Battery", icon: "bt_battery", stack: 1, inCreative: false });
ChargeItemRegistry.registerItem(ItemID.btBattery, "Bt", 16000, 100, 0, true);
Recipes.addShaped({ id: ItemID.btBattery, count: 1, data: Item.getMaxDamage(ItemID.btBattery) }, [
    "xcx",
    "xax",
    "xcx"
], ['x', ItemID.nikolite, 0, 'a', ItemID.ingotTin, 0, 'c', ItemID.ingotCopper, 0]);
ItemRegistry.createItem("handsawDiamond", { name: "Diamond Handsaw", icon: "handsaw_diamond", stack: 1, maxDamage: 1562, category: ItemCategory.EQUIPMENT });
ItemRegistry.createItem("diamondDrawplate", { name: "Diamond Drawplate", icon: "diamond_drawplate", stack: 1, category: ItemCategory.EQUIPMENT });
ItemRegistry.createItem("woolCard", { name: "Wool Card", icon: "wool_card", stack: 1, category: ItemCategory.EQUIPMENT });
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.handsawDiamond, count: 1, data: 0 }, [
        "rrr",
        " aa",
        " dd"
    ], ['a', 265, 0, 'd', 264, 0, 'r', 280, 0]);
    Recipes.addShaped({ id: ItemID.diamondDrawplate, count: 1, data: 0 }, [
        " x ",
        "x#x",
        " x "
    ], ['#', 264, 0, 'x', 265, 0]);
    Recipes.addShaped({ id: ItemID.woolCard, count: 1, data: 0 }, [
        "#",
        "p",
        "s"
    ], ['#', ItemID.fineIronWire, 0, 'p', 5, -1, 's', 280, 0]);
    addRecipeWithCraftingTool({ id: VanillaItemID.string, count: 4, data: 0 }, [{ id: 35, data: -1 }], ItemID.woolCard);
    VanillaRecipe.addShapelessRecipe("string_from_wool", {
        ingredients: [
            { item: "wool" },
            { item: "item:woolCard" }
        ],
        result: [
            { item: "string", count: 4 },
            { item: "item:woolCard" }
        ]
    });
});
function addRecipeWithCraftingTool(result, ingredients, toolID) {
    ingredients.push({ id: toolID, data: -1 });
    Recipes.addShapeless(result, ingredients, function (api, field, result) {
        for (var i = 0; i < field.length; i++) {
            var item = field[i];
            if (item.id == toolID) {
                var maxDamage = Item.getMaxDamage(toolID);
                if (maxDamage > 0 && item.data++ >= maxDamage) {
                    item.id = item.count = item.data = 0;
                }
            }
            else {
                api.decreaseFieldSlot(i);
            }
        }
    });
}
ItemRegistry.createTool("athame", { name: "Athame", icon: "athame", material: { level: 0, durability: 50, damage: 3 } }, {
    onAttack: function (item, mob) {
        this.damage = Entity.getType(mob) == Native.EntityType.ENDERMAN ? 17 : 0;
        return false;
    }
});
VanillaRecipe.addShapedRecipe("athame", {
    pattern: [
        "X",
        "#"
    ],
    key: {
        "X": { item: "item:ingotSilver" },
        "#": { item: "stick" }
    },
    result: {
        item: "item:athame"
    }
}, true);
ItemRegistry.addToolMaterial("ruby", { durability: 500, level: 3, efficiency: 8, damage: 3, enchantability: 11, repairMaterial: ItemID.gemRuby });
ItemRegistry.addToolMaterial("sapphire", { durability: 500, level: 3, efficiency: 8, damage: 2, enchantability: 11, repairMaterial: ItemID.gemSapphire });
ItemRegistry.addToolMaterial("greenSapphire", { durability: 500, level: 3, efficiency: 8, damage: 2, enchantability: 11, repairMaterial: ItemID.gemGreenSapphire });
ItemRegistry.createTool("rubySword", { name: "Ruby Sword", icon: "ruby_sword", material: "ruby" }, ToolType.SWORD);
ItemRegistry.createTool("sapphireSword", { name: "Sapphire Sword", icon: "sapphire_sword", material: "sapphire" }, ToolType.SWORD);
ItemRegistry.createTool("greenSapphireSword", { name: "Green Sapphire Sword", icon: "green_sapphire_sword", material: "greenSapphire" }, ToolType.SWORD);
Item.addCreativeGroup("rp_swords", Translation.translate("Swords"), [
    ItemID.rubySword,
    ItemID.sapphireSword,
    ItemID.greenSapphireSword
]);
Recipes.addShaped({ id: ItemID.rubySword, count: 1, data: 0 }, [
    "a",
    "a",
    "b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sapphireSword, count: 1, data: 0 }, [
    "a",
    "a",
    "b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.greenSapphireSword, count: 1, data: 0 }, [
    "a",
    "a",
    "b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);
ItemRegistry.createTool("rubyShovel", { name: "Ruby Shovel", icon: "ruby_shovel", material: "ruby" }, ToolType.SHOVEL);
ItemRegistry.createTool("sapphireShovel", { name: "Sapphire Shovel", icon: "sapphire_shovel", material: "sapphire" }, ToolType.SHOVEL);
ItemRegistry.createTool("greenSapphireShovel", { name: "Green Sapphire Shovel", icon: "green_sapphire_shovel", material: "greenSapphire" }, ToolType.SHOVEL);
Item.addCreativeGroup("rp_shovels", Translation.translate("Shovels"), [
    ItemID.rubyShovel,
    ItemID.sapphireShovel,
    ItemID.greenSapphireShovel
]);
Recipes.addShaped({ id: ItemID.rubyShovel, count: 1, data: 0 }, [
    "a",
    "b",
    "b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sapphireShovel, count: 1, data: 0 }, [
    "a",
    "b",
    "b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.greenSapphireShovel, count: 1, data: 0 }, [
    "a",
    "b",
    "b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);
ItemRegistry.createTool("rubyPickaxe", { name: "Ruby Pickaxe", icon: "ruby_pickaxe", material: "ruby" }, ToolType.PICKAXE);
ItemRegistry.createTool("sapphirePickaxe", { name: "Sapphire Pickaxe", icon: "sapphire_pickaxe", material: "sapphire" }, ToolType.PICKAXE);
ItemRegistry.createTool("greenSapphirePickaxe", { name: "Green Sapphire Pickaxe", icon: "green_sapphire_pickaxe", material: "greenSapphire" }, ToolType.PICKAXE);
Item.addCreativeGroup("rp_pickaxes", Translation.translate("Pickaxes"), [
    ItemID.rubyPickaxe,
    ItemID.sapphirePickaxe,
    ItemID.greenSapphirePickaxe
]);
Recipes.addShaped({ id: ItemID.rubyPickaxe, count: 1, data: 0 }, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sapphirePickaxe, count: 1, data: 0 }, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.greenSapphirePickaxe, count: 1, data: 0 }, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);
ItemRegistry.createTool("rubyAxe", { name: "Ruby Axe", icon: "ruby_axe", material: "ruby" }, ToolType.AXE);
ItemRegistry.createTool("sapphireAxe", { name: "Sapphire Axe", icon: "sapphire_axe", material: "sapphire" }, ToolType.AXE);
ItemRegistry.createTool("greenSapphireAxe", { name: "Green Sapphire Axe", icon: "green_sapphire_axe", material: "greenSapphire" }, ToolType.AXE);
Item.addCreativeGroup("rp_axes", Translation.translate("Axes"), [
    ItemID.rubyAxe,
    ItemID.sapphireAxe,
    ItemID.greenSapphireAxe
]);
Recipes.addShaped({ id: ItemID.rubyAxe, count: 1, data: 0 }, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sapphireAxe, count: 1, data: 0 }, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.greenSapphireAxe, count: 1, data: 0 }, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);
ItemRegistry.createTool("rubyHoe", { name: "Ruby Hoe", icon: "ruby_hoe", material: "ruby" }, ToolType.HOE);
ItemRegistry.createTool("sapphireHoe", { name: "Sapphire Hoe", icon: "sapphire_hoe", material: "sapphire" }, ToolType.HOE);
ItemRegistry.createTool("greenSapphireHoe", { name: "Green Sapphire Hoe", icon: "green_sapphire_hoe", material: "greenSapphire" }, ToolType.HOE);
Item.addCreativeGroup("rp_hoes", Translation.translate("Hoes"), [
    ItemID.rubyHoe,
    ItemID.sapphireHoe,
    ItemID.greenSapphireHoe
]);
Recipes.addShaped({ id: ItemID.rubyHoe, count: 1, data: 0 }, [
    "aa",
    " b",
    " b"
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sapphireHoe, count: 1, data: 0 }, [
    "aa",
    " b",
    " b"
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.greenSapphireHoe, count: 1, data: 0 }, [
    "aa",
    " b",
    " b"
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);
var plants = [31, 37, 38, 59, 83, 106, 141, 142, 175, 244, BlockID.flax];
var ToolSickle = /** @class */ (function (_super) {
    __extends(ToolSickle, _super);
    function ToolSickle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolSickle.prototype.calcDestroyTime = function (item, coords, block, params, destroyTime) {
        var material = ToolAPI.getBlockMaterialName(block.id);
        if (material == "fibre" || material == "plant" || block.id == 30) {
            return 0;
        }
        return destroyTime;
    };
    ToolSickle.prototype.onDestroy = function (item, coords, block, player) {
        var region = WorldRegion.getForActor(player);
        var x = coords.x, y = coords.y, z = coords.z;
        var material = ToolAPI.getBlockMaterialName(block.id);
        if (material == "plant" && plants.indexOf(block.id) == -1) {
            for (var xx = x - 1; xx <= x + 1; xx++) {
                for (var yy = y - 1; yy <= y + 1; yy++) {
                    for (var zz = z - 1; zz <= z + 1; zz++) {
                        var block_1 = region.getBlock(xx, yy, zz);
                        if (ToolAPI.getBlockMaterialName(block_1.id) == "plant") {
                            region.destroyBlock(xx, yy, zz, true);
                        }
                    }
                }
            }
        }
        else if (plants.indexOf(block.id) != -1) {
            for (var xx = x - 2; xx <= x + 2; xx++) {
                for (var zz = z - 2; zz <= z + 2; zz++) {
                    var block_2 = region.getBlock(xx, y, zz);
                    if (plants.indexOf(block_2.id) != -1) {
                        region.destroyBlock(xx, y, zz, true);
                        if (Math.random() < 1 / 16 && (block_2.id == 31 && block_2.data == 0 || block_2.id == 175 && (block_2.data == 2 || block_2.data == 10))) {
                            region.dropAtBlock(xx, y, zz, ItemID.flaxSeeds, 1, 0);
                        }
                    }
                }
            }
        }
        return false;
    };
    return ToolSickle;
}(ItemTool));
ItemRegistry.registerItem(new ToolSickle("sickleWood", "Wood Sickle", { name: "sickle", meta: 0 }, "wood"));
ItemRegistry.registerItem(new ToolSickle("sickleStone", "Stone Sickle", { name: "sickle", meta: 1 }, "stone"));
ItemRegistry.registerItem(new ToolSickle("sickleIron", "Iron Sickle", { name: "sickle", meta: 2 }, "iron"));
ItemRegistry.registerItem(new ToolSickle("sickleGold", "Gold Sickle", { name: "sickle", meta: 3 }, "golden"));
ItemRegistry.registerItem(new ToolSickle("sickleDiamond", "Diamond Sickle", { name: "sickle", meta: 4 }, "diamond"));
ItemRegistry.registerItem(new ToolSickle("rubySickle", "Ruby Sickle", "ruby_sickle", "ruby"));
ItemRegistry.registerItem(new ToolSickle("sapphireSickle", "Sapphire Sickle", "sapphire_sickle", "sapphire"));
ItemRegistry.registerItem(new ToolSickle("greenSapphireSickle", "Green Sapphire Sickle", "green_sapphire_sickle", "greenSapphire"));
Item.addCreativeGroup("sickles", Translation.translate("Sickles"), [
    ItemID.sickleWood,
    ItemID.sickleStone,
    ItemID.sickleIron,
    ItemID.sickleGold,
    ItemID.sickleDiamond,
    ItemID.rubySickle,
    ItemID.sapphireSickle,
    ItemID.greenSapphireSickle
]);
Recipes.addShaped({ id: ItemID.sickleWood, count: 1, data: 0 }, [
    " a ",
    "  a",
    "ba "
], ['a', 5, -1, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sickleStone, count: 1, data: 0 }, [
    " a ",
    "  a",
    "ba "
], ['a', 4, -1, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sickleIron, count: 1, data: 0 }, [
    " a ",
    "  a",
    "ba "
], ['a', 265, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sickleGold, count: 1, data: 0 }, [
    " a ",
    "  a",
    "ba "
], ['a', 266, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sickleDiamond, count: 1, data: 0 }, [
    " a ",
    "  a",
    "ba "
], ['a', 264, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.rubySickle, count: 1, data: 0 }, [
    " a ",
    "  a",
    "ba "
], ['a', ItemID.gemRuby, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.sapphireSickle, count: 1, data: 0 }, [
    " a ",
    "  a",
    "ba "
], ['a', ItemID.gemSapphire, 0, 'b', 280, 0]);
Recipes.addShaped({ id: ItemID.greenSapphireSickle, count: 1, data: 0 }, [
    " a ",
    "  a",
    "ba "
], ['a', ItemID.gemGreenSapphire, 0, 'b', 280, 0]);
var ToolScrewdriver = /** @class */ (function (_super) {
    __extends(ToolScrewdriver, _super);
    function ToolScrewdriver(stringID, name, icon, maxDmg) {
        var _this = _super.call(this, stringID, name, icon) || this;
        _this.setMaxStack(1);
        _this.setMaxDamage(maxDmg);
        _this.setCategory(ItemCategory.EQUIPMENT);
        MachineRegistry.registerScrewdriver(_this.id, _this);
        return _this;
    }
    ToolScrewdriver.prototype.canBeUsed = function (item) {
        return true;
    };
    ToolScrewdriver.prototype.useItem = function (item, player) {
        item.applyDamage(1);
        Entity.setCarriedItem(player, item.id, 1, item.data, item.extra);
        if (item.id == 0) {
            var region = WorldRegion.getForActor(player);
            region.playSoundAtEntity(player, "random.break");
        }
    };
    return ToolScrewdriver;
}(ItemCommon));
ItemRegistry.registerItem(new ToolScrewdriver("rp_screwdriver", "Screwdriver", "rp_screwdriver", 200));
VanillaRecipe.addShapedRecipe("rp_screwdriver", {
    tags: ["crafting_table"],
    pattern: [
        "A ",
        " X"
    ],
    key: {
        "A": { item: "iron_ingot" },
        "X": { item: "stick" }
    },
    result: {
        item: "item:rp_screwdriver"
    }
}, true);
var ToolSonicScrewdriver = /** @class */ (function (_super) {
    __extends(ToolSonicScrewdriver, _super);
    function ToolSonicScrewdriver() {
        var _this = _super.call(this, "sonic_screwdriver", "Sonic Screwdriver", "sonic_screwdriver", false) || this;
        _this.energyPerUse = 40;
        _this.setMaxStack(1);
        _this.setCategory(ItemCategory.EQUIPMENT);
        ChargeItemRegistry.registerItem(_this.id, "Bt", 16000, 100, 0, true);
        MachineRegistry.registerScrewdriver(_this.id, _this);
        return _this;
    }
    ToolSonicScrewdriver.prototype.canBeUsed = function (item) {
        return ChargeItemRegistry.getEnergyStored(item) >= this.energyPerUse;
    };
    ToolSonicScrewdriver.prototype.useItem = function (item, player) {
        var energyStored = ChargeItemRegistry.getEnergyStored(item);
        ChargeItemRegistry.setEnergyStored(item, energyStored - this.energyPerUse);
        Entity.setCarriedItem(player, item.id, 1, item.data, item.extra);
    };
    return ToolSonicScrewdriver;
}(ItemCommon));
ItemRegistry.registerItem(new ToolSonicScrewdriver());
Recipes.addShaped({ id: ItemID.sonic_screwdriver, count: 1, data: Item.getMaxDamage(ItemID.sonic_screwdriver) }, [
    "a  ",
    " x ",
    "  b"
], ['a', ItemID.gemGreenSapphire, 0, 'x', ItemID.ingotCopper, 0, 'b', ItemID.btBattery, -1], ChargeItemRegistry.transferEnergy);
var WorldDecorator;
(function (WorldDecorator) {
    WorldDecorator.oreConfig = {
        oreGenCopper: __config__.getBool("ore_gen.copper"),
        oreGenTin: __config__.getBool("ore_gen.tin"),
        oreGenSilver: __config__.getBool("ore_gen.silver"),
        oreGenTungsten: __config__.getBool("ore_gen.tungsten"),
        oreGenNikolite: __config__.getBool("ore_gen.nikolite"),
        oreGenRuby: __config__.getBool("ore_gen.gems"),
        oreGenSapphire: __config__.getBool("ore_gen.gems"),
        oreGenGreenSapphire: __config__.getBool("ore_gen.gems"),
    };
    WorldDecorator.genMarbleChance = __config__.getInteger("world_gen.marble");
    WorldDecorator.genBasaltChance = __config__.getInteger("world_gen.basalt");
    function randomCoords(random, chunkX, chunkZ, minHeight, maxHeight) {
        if (minHeight === void 0) { minHeight = 0; }
        if (maxHeight === void 0) { maxHeight = 128; }
        var x = chunkX * 16 + random.nextInt(16);
        var z = chunkZ * 16 + random.nextInt(16);
        var y = random.nextInt(maxHeight - minHeight + 1) + minHeight;
        return { x: x, y: y, z: z };
    }
    WorldDecorator.randomCoords = randomCoords;
    function genMarble(x, y, z, random) {
        GenerationUtils.generateOre(x, y, z, BlockID.rp_marble, 0, 72, false, random.nextInt());
        GenerationUtils.generateOre(x + random.nextInt(6), y, z + random.nextInt(6), BlockID.rp_marble, 0, 64, false, random.nextInt());
    }
    function genBasalt(x, y, z, random) {
        var randY = 1 + random.nextFloat();
        var randR = 7 + random.nextFloat() * 3;
        var r = Math.ceil(randR);
        var h = r / Math.sqrt(randY);
        for (var xx = -r; xx <= r; xx++) {
            for (var yy = -h; yy <= h; yy++) {
                for (var zz = -r; zz <= r; zz++) {
                    if (Math.sqrt(xx * xx + yy * yy * randY + zz * zz) < randR + random.nextFloat() / 2) {
                        var id = World.getBlockID(x + xx, y + yy, z + zz);
                        if (id == 1 || id == 3 || id == 13 || id == 16)
                            World.setBlock(x + xx, y + yy, z + zz, BlockID.rp_basalt, 0);
                    }
                }
            }
        }
    }
    Callback.addCallback("PostLoaded", function () {
        for (var flag in WorldDecorator.oreConfig) {
            if (WorldDecorator.oreConfig[flag]) {
                WorldDecorator.oreConfig[flag] = !Flags.addFlag(flag);
            }
        }
    });
    World.addGenerationCallback("GenerateChunk", function (chunkX, chunkZ, random) {
        // Ores
        if (WorldDecorator.oreConfig.oreGenCopper) {
            for (var i = 0; i < 12; i++) {
                var coords = randomCoords(random, chunkX, chunkZ, 10, 70);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCopper, 0, 10, false, random.nextInt());
            }
        }
        if (WorldDecorator.oreConfig.oreGenTin) {
            for (var i = 0; i < 10; i++) {
                var coords = randomCoords(random, chunkX, chunkZ, 1, 64);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreTin, 0, 9, false, random.nextInt());
            }
        }
        if (WorldDecorator.oreConfig.oreGenSilver) {
            for (var i = 0; i < 4; i++) {
                var coords = randomCoords(random, chunkX, chunkZ, 1, 32);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSilver, 0, 9, false, random.nextInt());
            }
        }
        if (WorldDecorator.oreConfig.oreGenTungsten) {
            var coords = randomCoords(random, chunkX, chunkZ, 1, 16);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreTungsten, 0, 5, false, random.nextInt());
        }
        if (WorldDecorator.oreConfig.oreGenNikolite) {
            for (var i = 0; i < 8; i++) {
                var coords = randomCoords(random, chunkX, chunkZ, 1, 20);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreNikolite, 0, 8, false, random.nextInt());
            }
        }
        if (WorldDecorator.oreConfig.oreGenRuby) {
            for (var i = 0; i < 6; i++) {
                var coords = randomCoords(random, chunkX, chunkZ, 1, 48);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreRuby, 0, 6, false, random.nextInt());
            }
        }
        if (WorldDecorator.oreConfig.oreGenSapphire) {
            for (var i = 0; i < 6; i++) {
                var coords = randomCoords(random, chunkX, chunkZ, 1, 48);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreSapphire, 0, 6, false, random.nextInt());
            }
        }
        if (WorldDecorator.oreConfig.oreGenGreenSapphire) {
            for (var i = 0; i < 6; i++) {
                var coords = randomCoords(random, chunkX, chunkZ, 1, 48);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreGreenSapphire, 0, 6, false, random.nextInt());
            }
        }
        // Marble
        if (random.nextInt(100) < WorldDecorator.genMarbleChance) {
            var coords = randomCoords(random, chunkX, chunkZ, 32, 96);
            if (World.getBlockID(coords.x, coords.y, coords.z) == 1) {
                genMarble(coords.x, coords.y, coords.z, random);
            }
        }
        // Basalt
        if (random.nextInt(100) < WorldDecorator.genBasaltChance) {
            var coords = randomCoords(random, chunkX, chunkZ, 4, 12);
            genBasalt(coords.x, coords.y, coords.z, random);
        }
    }, "rp-generation");
})(WorldDecorator || (WorldDecorator = {}));
var RecipeViewer;
ModAPI.addAPICallback("RecipeViewer", function (api) {
    RecipeViewer = api;
    RecipeViewer.Core.addListByData(ItemID.lumar, 16, "item");
    RecipeViewer.Core.addListByData(ItemID.canvasBag, 16, "item");
    var SmelterRecipeType = /** @class */ (function (_super) {
        __extends(SmelterRecipeType, _super);
        function SmelterRecipeType() {
            return _super.call(this, Translation.translate("Smelter"), BlockID.rp_smelter, {
                drawing: [
                    { type: "bitmap", x: 500, y: 222, bitmap: "furnace_bar_scale", scale: 6 },
                ],
                elements: {
                    input0: { type: "slot", x: 240, y: 150, size: 120 },
                    input1: { type: "slot", x: 360, y: 150, size: 120 },
                    input2: { type: "slot", x: 240, y: 270, size: 120 },
                    input3: { type: "slot", x: 360, y: 270, size: 120 },
                    output0: { type: "slot", x: 652, y: 210, size: 120 },
                }
            }) || this;
        }
        SmelterRecipeType.prototype.getAllList = function () {
            var list = [];
            for (var i in SmelterRecipes.recipeData) {
                var recipe = SmelterRecipes.recipeData[i];
                list.push({
                    input: recipe.input,
                    output: [recipe.result]
                });
            }
            return list;
        };
        return SmelterRecipeType;
    }(RecipeViewer.RecipeType));
    RecipeViewer.RecipeTypeRegistry.register("rp_smelter", new SmelterRecipeType());
});
ModAPI.registerAPI("RedCore", {
    Machine: MachineRegistry,
    SmelterRecipes: SmelterRecipes,
    World: WorldDecorator,
    Integration: IntegrationAPI,
    requireGlobal: function (command) {
        return eval(command);
    }
});
Logger.Log("RedCore API shared.", "API");
