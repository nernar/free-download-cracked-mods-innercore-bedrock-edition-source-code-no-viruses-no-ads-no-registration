IMPORT("BlockEngine");
IMPORT("ChargeItem");
IMPORT("StorageInterface");
IMPORT("VanillaSlots");
var Color = android.graphics.Color;
var ConfigManager = /** @class */ (function () {
    function ConfigManager() {
    }
    ConfigManager.getNumber = function (name) {
        return Number(__config__.getNumber(name));
    };
    ConfigManager.getBool = function (name) {
        return __config__.getBool(name);
    };
    ConfigManager.getInfo = function (name) {
        return {
            generationDay: this.getNumber(name + ".generation_day"),
            generationNight: this.getNumber(name + ".generation_night"),
            output: this.getNumber(name + ".output"),
            storage: this.getNumber(name + ".energy_storage")
        };
    };
    return ConfigManager;
}());
var SPSP = ConfigManager.getInfo("spectral_solar_panel");
var SSP = ConfigManager.getInfo("singular_solar_panel");
var LASP = ConfigManager.getInfo("light-absorbing_solar_panel");
var PSP = ConfigManager.getInfo("photonic_solar_panel");
function cutText(text, countSymbols) {
    return (text.length > countSymbols) ? text.substring(0, countSymbols - 3).trim() + "..." : text.trim();
}
/* BLocks */
Translation.addTranslation("spectral_solar_panel", { en: "Spectral Solar Panel", ru: "Спектральная солнечная панель" });
Translation.addTranslation("singular_solar_Panel", { en: "Singular Solar Panel", ru: "Сингулярная солнечная панель" });
Translation.addTranslation("light_absorbing_solar_panel", { en: "Light-Absorbing Solar Panel", ru: "Свето-адсорбционная солнечная панель" });
Translation.addTranslation("photonic_solar_panel", { en: "Photonic Solar Panel", ru: "Фотонная солнечная панель" });
/* Gui */
Translation.addTranslation("storage", { en: "Storage: ", ru: "Хранилище: " });
Translation.addTranslation("max_output", { en: "Max Output: ", ru: "Макс. выход: " });
Translation.addTranslation("generating", { en: "Generating:", ru: "Генерация: " });
/* Items */
Translation.addTranslation("red_spectral_component", { en: "Red Spectral Component", ru: "Спектральный компонент красного диапазона" });
Translation.addTranslation("green_spectral_component", { en: "Green Spectral Component", ru: "Спектральный компонент зелёного диапазона" });
Translation.addTranslation("blue_spectral_component", { en: "Blue Spectral Component", ru: "Спектральный компонент синего диапазона" });
Translation.addTranslation("ender_quantum_component", { en: "Ender-Quantum Component", ru: "Эндер-Квант Компонент" });
Translation.addTranslation("spectral_light_splitter", { en: "Spectral Light Splitter", ru: "Спектральный расщепитель солнечного света" });
function getGui(name, maxOutput) {
    var offset = Math.floor((UI.getScreenHeight() - 440) / 2);
    var Ui = new UI.Window({
        location: { x: 0, y: 0, width: 1000, height: UI.getScreenHeight() },
        params: {
            slot: "ssp_slot",
        },
        drawing: [
            { type: "background", color: Color.argb(110, 0, 0, 0) },
            { type: "bitmap", x: 255, y: offset + 25, bitmap: "ssp_background", scale: 2.5 },
        ],
        elements: (function () {
            var uiElements = {
                light: { type: "image", x: 320, y: offset + 132, bitmap: "asp_dark", scale: 1.9 },
                energyScale: { type: "scale", x: 300.8, y: offset + 84, scale: 2.55, direction: 0, value: 0.1, bitmap: "ssp_energybar_1" },
                textStorage: { type: "text", x: 380, y: offset + 80, width: 300, height: 60, font: { color: Color.LTGRAY, size: 15 }, text: Translation.translate("storage") },
                textOutput: { type: "text", x: 380, y: offset + 105, width: 300, height: 30, font: { color: Color.LTGRAY, size: 15 }, text: Translation.translate("max_output") + maxOutput + " EU/t" },
                textGen: { type: "text", x: 380, y: offset + 130, width: 300, height: 40, font: { color: Color.LTGRAY, size: 15 }, text: Translation.translate("generating") },
                panelName: { type: "text", x: 335, y: offset + 40, width: 200, height: 20, font: { color: Color.GRAY, size: 18 }, text: cutText(Translation.translate(name), 25) },
                closeButton: { type: "closeButton", bitmap: "classic_close_button", bitmap2: "classic_close_button_down", scale: 3, x: 685, y: offset + 35 }
            };
            for (var i = 0; i < 4; i++)
                uiElements["slot".concat(i)] = { type: "slot", x: 295 + 45 * i, y: offset + 170, size: 43 };
            //@ts-ignore
            for (var i = 0; i < 9; i++)
                uiElements["invSlot".concat(i)] = { type: "invSlot", x: 295 + 45.3 * i, y: offset + 384, index: i, size: 42, bitmap: "ssp_invslot" };
            //@ts-ignore
            for (var i = 9; i < 36; i++)
                uiElements["invSlot".concat(i)] = { type: "invSlot", x: 295 + 45.3 * (i % 9), y: offset + 194 + Math.floor(i / 9) * 45, index: i, size: 42, bitmap: "ssp_invslot" };
            return uiElements;
        })()
    });
    Ui.setInventoryNeeded(true);
    Ui.setCloseOnBackPressed(true);
    return Ui;
}
/// <reference path="./Gui.ts" />
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
var PanelsTileEntity = /** @class */ (function (_super) {
    __extends(PanelsTileEntity, _super);
    function PanelsTileEntity(name, id, props) {
        var _this = _super.call(this) || this;
        _this.defaultValues = {
            energy: 0,
            canSeeSky: false
        };
        _this.gui = getGui(name, props.output);
        _this.defaultDrop = null;
        _this.generationDay = props.generationDay;
        _this.generationNight = props.generationNight;
        _this.maxOutput = props.output;
        _this.energyStorage = props.storage;
        VanillaSlots.registerForTile(id, _this.getScreenByName());
        return _this;
    }
    PanelsTileEntity.prototype.onInit = function () {
        _super.prototype.onInit.call(this);
        this.data.canSeeSky = GenerationUtils.canSeeSky(this.x, this.y + 1, this.z);
    };
    PanelsTileEntity.prototype.setupContainer = function () {
        StorageInterface.setGlobalValidatePolicy(this.container, function (name, id) { return ChargeItemRegistry.isValidItem(id, "Eu", 4); });
    };
    PanelsTileEntity.prototype.onTick = function () {
        var generating = 0;
        if (World.getThreadTime() % 100 == 0)
            this.data.canSeeSky = this.region.canSeeSky(this.x, this.y + 1, this.z);
        if (this.data.canSeeSky) {
            var time = World.getWorldTime() % 24000;
            if ((time >= 23800 || time < 12800) && (!World.getWeather().rain || this.region.getLightLevel(this.x, this.y + 1, this.z) == 15)) {
                generating = this.generationDay;
                this.container.sendEvent("setLightIcon", "ssp_sun");
            }
            else {
                generating = this.generationNight;
                this.container.sendEvent("setLightIcon", "ssp_moon");
            }
            this.data.energy = Math.min(this.data.energy + generating, this.energyStorage);
        }
        else {
            this.container.sendEvent("setLightIcon", "asp_dark");
        }
        for (var i = 0; i <= 4; i++) {
            var getSlot = this.container.getSlot("slot" + i);
            if (getSlot.id !== 0) {
                this.data.energy -= ChargeItemRegistry.addEnergyTo(getSlot, "Eu", this.data.energy, ChargeItemRegistry.getItemData(getSlot.id).tier);
            }
        }
        this.container.setText("textGen", Translation.translate("generating") + generating + " EU/t");
        this.container.setText("textStorage", Translation.translate("storage") + this.data.energy + "/" + this.energyStorage);
        this.container.setScale("energyScale", this.data.energy / this.energyStorage);
        this.container.sendChanges();
    };
    PanelsTileEntity.prototype.getScreenByName = function () {
        return this.gui;
    };
    PanelsTileEntity.prototype.getTier = function () {
        return 14;
    };
    PanelsTileEntity.prototype.getEnergyStorage = function () {
        return this.energyStorage;
    };
    PanelsTileEntity.prototype.getMaxPacketSize = function () {
        return this.maxOutput;
    };
    PanelsTileEntity.prototype.setLightIcon = function (container, window, content, data) {
        if (content) {
            content.elements["light"].bitmap = data;
        }
    };
    __decorate([
        BlockEngine.Decorators.ContainerEvent(Side.Client)
    ], PanelsTileEntity.prototype, "setLightIcon", null);
    return PanelsTileEntity;
}(Machine.Generator));
/// <reference path="./TileEntity.ts" />
var spectralPanelID = IDRegistry.genBlockID("spectralSolarPanel");
var singularPanelID = IDRegistry.genBlockID("singularSolarPanel");
var lightAbsPanelID = IDRegistry.genBlockID("lightAbsorbingSolarPanel");
var photonicPanelID = IDRegistry.genBlockID("photonicSolarPanel");
BlockRegistry.createBlock("spectralSolarPanel", [
    { name: "spectral_solar_panel", texture: [["spsp", 2], ["spsp", 1], ["spsp", 0], ["spsp", 0], ["spsp", 0], ["spsp", 0]], inCreative: true }
], "machine");
BlockRegistry.createBlock("singularSolarPanel", [
    { name: "singular_solar_Panel", texture: [["ssp", 2], ["ssp", 1], ["ssp", 0], ["ssp", 0], ["ssp", 0], ["ssp", 0]], inCreative: true }
], "machine");
BlockRegistry.createBlock("lightAbsorbingSolarPanel", [
    { name: "light_absorbing_solar_panel", texture: [["lasp", 2], ["lasp", 1], ["lasp", 0], ["lasp", 0], ["lasp", 0], ["lasp", 0]], inCreative: true }
], "machine");
BlockRegistry.createBlock("photonicSolarPanel", [
    { name: "photonic_solar_panel", texture: [["psp", 2], ["psp", 1], ["psp", 0], ["psp", 0], ["psp", 0], ["psp", 0]], inCreative: true }
], "machine");
ICore.Machine.registerPrototype(spectralPanelID, new PanelsTileEntity("spectral_solar_panel", spectralPanelID, SPSP));
ICore.Machine.registerPrototype(singularPanelID, new PanelsTileEntity("singular_solar_Panel", singularPanelID, SSP));
ICore.Machine.registerPrototype(lightAbsPanelID, new PanelsTileEntity("light_absorbing_solar_panel", lightAbsPanelID, LASP));
ICore.Machine.registerPrototype(photonicPanelID, new PanelsTileEntity("photonic_solar_panel", photonicPanelID, PSP));
ItemRegistry.createItem("redSpectralComponent", {
    name: "red_spectral_component",
    icon: "red_spectral_component"
});
ItemRegistry.createItem("greenSpectralComponent", {
    name: "green_spectral_component",
    icon: "green_spectral_component"
});
ItemRegistry.createItem("blueSpectralComponent", {
    name: "blue_spectral_component",
    icon: "blue_spectral_component"
});
ItemRegistry.createItem("enderQuantumComponent", {
    name: "ender_quantum_component",
    icon: "ender_quantum_component"
});
ItemRegistry.createItem("solarLightSplitter", {
    name: "spectral_light_splitter",
    icon: "spectral_light_splitter"
});
Callback.addCallback("PreLoaded", function () {
    /* BLocks */
    Recipes.addShaped({ id: BlockID.spectralSolarPanel, count: 1, data: 0 }, [
        "aaa",
        "aba",
        "aaa"
    ], ['a', BlockID.QSP, 0, 'b', ItemID.solarLightSplitter, 0]);
    Recipes.addShaped({ id: BlockID.singularSolarPanel, count: 1, data: 0 }, [
        "aaa",
        "aba",
        "aaa"
    ], ['a', BlockID.spectralSolarPanel, 0, 'b', ItemID.enderQuantumComponent, 0]);
    Recipes.addShaped({ id: BlockID.lightAbsorbingSolarPanel, count: 1, data: 0 }, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', BlockID.singularSolarPanel, 0]);
    Recipes.addShaped({ id: BlockID.photonicSolarPanel, count: 1, data: 0 }, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', BlockID.lightAbsorbingSolarPanel, 0]);
    /* Items */
    Recipes.addShaped({ id: ItemID.solarLightSplitter, count: 1, data: 0 }, [
        "abc",
        "abc",
        "abc"
    ], ['a', ItemID.redSpectralComponent, 0, 'b', ItemID.greenSpectralComponent, 0, 'c', ItemID.blueSpectralComponent, 0]);
    Recipes.addShaped({ id: ItemID.enderQuantumComponent, count: 1, data: 0 }, [
        "aba",
        "bcb",
        "aba"
    ], ['a', ItemID.plateReinforcedIridium, 0, 'b', 381, 0, 'c', 399, 0]);
    /* Spectral Components*/
    Recipes.addShaped({ id: ItemID.redSpectralComponent, count: 1, data: 0 }, [
        "aaa",
        "bbb",
        "aaa"
    ], ['a', BlockID.reinforcedGlass, 0, 'b', 331, 0]);
    Recipes.addShapeless({ id: ItemID.greenSpectralComponent, count: 1, data: 0 }, [{ id: ItemID.irradiantGlass, data: 0 }]);
    Recipes.addShaped({ id: ItemID.blueSpectralComponent, count: 1, data: 0 }, [
        "aaa",
        "bbb",
        "aaa"
    ], ['a', BlockID.reinforcedGlass, 0, 'b', 351, 4]);
});
