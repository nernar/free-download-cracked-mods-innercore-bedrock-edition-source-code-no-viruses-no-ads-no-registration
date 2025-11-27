var TX = 0;
var TY = 0;
var TZ = 0;
var TELEPORTER_MODE = 0;
IDRegistry.genItemID("TeleporterCoord");
Item.createItem("TeleporterCoord", "\u0414\u0430\u0442\u0447\u0438\u043a \u0442\u0435\u043b\u0435\u043f\u043e\u0440\u0442\u0430", {name: "TeleportCoord", meta: 0}, {stack: 1});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.TeleporterCoord, count: 1, data: 0}, ["  s", "obo", " o "], ["o", ItemID.SteelIngot, 0, "s", ItemID.ingotosmium, 0, "b", ItemID.BasicControlCircuit, 0]);
});
IDRegistry.genBlockID("TeleporterFrame");
Block.createBlockWithRotation("TeleporterFrame", [{name: "\u041a\u0430\u0440\u043a\u0430\u0441 \u0442\u0435\u043b\u0435\u043f\u043e\u0440\u0442\u0430", texture: [["TeleporterFrame", 0], ["TeleporterFrame", 0], ["TeleporterFrame", 0], ["TeleporterFrame", 0], ["TeleporterFrame", 0], ["TeleporterFrame", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.TeleporterFrame, count: 1, data: 0}, ["ooo", "ogo", "ooo"], ["o", ItemID.ObsidianIngot, 0, "g", ItemID.GlowstoneIngot, 0]);
});
IDRegistry.genBlockID("Teleporter");
Block.createBlockWithRotation("Teleporter", [{name: "\u0422\u0435\u043b\u0435\u043f\u043e\u0440\u0442", texture: [["Teleporter", 0], ["Teleporter", 0], ["Teleporter", 0], ["Teleporter", 0], ["Teleporter", 0], ["Teleporter", 0]], inCreative: true}]);
Block.registerDropFunction("Teleporter", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.Teleporter, count: 1, data: 0}, ["bsb", "scs", "bsb"], ["b", ItemID.BasicControlCircuit, 0, "s", BlockID.SteelCasing, 0, "c", ItemID.TeleportationCore, 0]);
});
Item.registerUseFunction("TeleporterCoord", function (coords, item, block) {
    if (item.id == ItemID.TeleporterCoord && TELEPORTER_MODE == 0) {
        Game.message("The data obtained");
        TX = coords.x;
        TY = coords.y;
        TZ = coords.z;
        TELEPORTER_MODE = 1;
    }
});
var guiTeleporter = new UI.StandartWindow({standart: {header: {text: {text: "Teleporter"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 500, y: 180, bitmap: "TextPanel", scale: 4}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 930, y: 80}, "Info": {type: "image", x: 350, y: 80, bitmap: "No", scale: GUI_BAR_STANDART_SCALE}, "textInfo1": {type: "text", x: 510, y: 190, width: 30, height: 30, text: "X:", font: {color: android.graphics.Color.GREEN}}, "textInfo2": {type: "text", x: 510, y: 220, width: 30, height: 30, text: "Y:", font: {color: android.graphics.Color.GREEN}}, "textInfo3": {type: "text", x: 510, y: 250, width: 30, height: 30, text: "Z:", font: {color: android.graphics.Color.GREEN}}, "textInfo4": {type: "text", x: 540, y: 190, width: 30, height: 30, text: "0", font: {color: android.graphics.Color.GREEN}}, "textInfo5": {type: "text", x: 540, y: 220, width: 30, height: 30, text: "0", font: {color: android.graphics.Color.GREEN}}, "textInfo6": {type: "text", x: 540, y: 250, width: 30, height: 30, text: "0", font: {color: android.graphics.Color.GREEN}}}});
MachineRegistry.register(BlockID.Teleporter, {defaultValues: {energymax: 5000000, tx: 0, ty: 0, tz: 0, isCorpus: 0, Tel: 0}, getGuiScreen: function () {
    return guiTeleporter;
}, tick: function () {
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    var content = this.container.getGuiContent();
    if (this.data.tx == 0 && this.data.ty == 0 && this.data.tz == 0) {
        if (content) {
            content.elements["Info"].bitmap = "No";
        }
    }
    if (this.data.isCorpus == 0 && this.data.tx > 0 && this.data.ty > 0 && this.data.tz > 0) {
        if (content) {
            content.elements["Info"].bitmap = "NoCarkas";
        }
    }
    if (this.data.isCorpus == 1 && this.data.energy < 1000) {
        if (content) {
            content.elements["Info"].bitmap = "NoEnergy";
        }
    }
    if (this.data.isCorpus == 1 && this.data.energy >= 1000 && this.data.tx > 0 && this.data.ty > 0 && this.data.tz > 0) {
        if (content) {
            content.elements["Info"].bitmap = "Yes";
            this.data.Tel = 1;
        }
    }
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
    this.container.setText("textInfo4", this.data.tx);
    this.container.setText("textInfo5", this.data.ty);
    this.container.setText("textInfo6", this.data.tz);
    var c1 = World.getBlockID(this.x, this.y + 1, this.z);
    if (c1 == BlockID.TeleporterFrame) {
        this.data.isCorpus = 1;
    }
}, click: function (id, count, data, coords) {
    if (id == ItemID.TeleporterCoord && TELEPORTER_MODE == 1) {
        Game.message("Data is sent");
        this.data.tx = TX;
        this.data.ty = TY;
        this.data.tz = TZ;
        TX = 0;
        TY = 0;
        TZ = 0;
        TELEPORTER_MODE = 0;
    }
}, redstone: function (params) {
    if (this.data.Tel == 1 && this.data.energy >= 1000) {
        this.data.energy -= 1000;
        Player.setPosition(this.data.tx, this.data.ty + 3, this.data.tz);
    }
}, energyTick: MachineRegistry.basicEnergyReceiveFunc, getEnergyStorage: function () {
    return this.data.energymax;
}});
Block.registerPlaceFunction("Teleporter", MachineRegistry.placeFunction);

