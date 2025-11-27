var time = 0;
Block.setPrototype("SolarGenerator", {type: Block.TYPE_BASE, getVariations: function () {
    return [{name: "Solar Generator", texture: [["SPC", 0], ["SPT", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0]], inCreative: false}, {name: "sgbottom", texture: [["SPC", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0]]}, {name: "sgstick", texture: [["SPS", 0], ["SPS", 0], ["SPS", 0], ["SPS", 0], ["SPS", 0]]}];
}});
IDRegistry.genItemID("item_sg");
Item.createItem("item_sg", "Solar Generator", {name: "item_sg", meta: 0});
Block.registerDropFunction("SolarGenerator", function (coords, blockID, blockData) {
    return [[ItemID.item_sg, 1, 0]];
});
Item.registerUseFunction("item_sg", function (coords, item, block) {
    var place = coords.relative;
    if (GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))) {
        World.setBlock(place.x, place.y, place.z, BlockID["SolarGenerator"], 0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Block.setBlockShape(BlockID.SolarGenerator, {x: 0, y: 0, z: 0}, {x: 0.8, y: 0.7, z: 0.8});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.item_sg, count: 1, data: 0}, ["ppp", "sis", "oto"], ["p", ItemID.SolarPanel, 0, "s", ItemID.EnrichedAlloy, 0, "i", 265, 0, "o", ItemID.OsmiumDust, 0, "t", ItemID.EnergyTablet, -1]);
});
BlockRenderer.addRenderCallback(BlockID.SolarGenerator, function (api, coords) {
    api.renderBoxId(coords.x, coords.y, coords.z, 0.1, 0, 0.1, (0.1 + 0.8), (0 + 0.1), (0.8 + 0.1), BlockID.SolarGenerator, 1);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.3, 0.1, 0.3, (0.3 + 0.4), (0.1 + 0.1), (0.3 + 0.4), BlockID.SolarGenerator, 1);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.4, 0.2, 0.4, (0.4 + 0.2), (0.2 + 0.4), (0.4 + 0.2), BlockID.SolarGenerator, 2);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.3, 0.3, 0.3, (0.3 + 0.4), (0.3 + 0.1), (0.3 + 0.4), BlockID.SolarGenerator, 1);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.3, 0.5, 0.3, (0.3 + 0.4), (0.5 + 0.1), (0.3 + 0.4), BlockID.SolarGenerator, 1);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.1, 0.6, 0.1, (0.1 + 0.8), (0.6 + 0.1), (0.1 + 0.8), BlockID.SolarGenerator, 1);
    api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.7, 0, (0 + 1), (0.7 + 0.1), (0 + 1), BlockID.SolarGenerator, 0);
});
BlockRenderer.enableCustomRender(BlockID.SolarGenerator);
var guiSolarGenerator = new UI.StandartWindow({standart: {header: {text: {text: "Solar Generator"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 400, y: 225, bitmap: "dnslot", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 500, y: 180, bitmap: "TextPanel", scale: 4}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 880, y: 220}, "light": {type: "image", x: 404 + GUI_BAR_STANDART_SCALE, y: 227 + GUI_BAR_STANDART_SCALE, bitmap: "isNight", scale: GUI_BAR_STANDART_SCALE}, "textInfo1": {type: "text", x: 510, y: 190, width: 300, height: 30, text: "0", font: {color: android.graphics.Color.GREEN}}, "textInfo2": {type: "text", x: 600, y: 190, width: 300, height: 30, text: "kJ", font: {color: android.graphics.Color.GREEN}}, "textInfo3": {type: "text", x: 510, y: 230, width: 300, height: 30, text: "\u0421\u043e\u043b\u043d\u0446\u0435:", font: {color: android.graphics.Color.GREEN}}, "textInfo4": {type: "text", x: 510, y: 270, width: 300, height: 30, text: "\u0412\u044b\u0445\u043e\u0434: 100J/t", font: {color: android.graphics.Color.GREEN}}}});
MachineRegistry.register(BlockID.SolarGenerator, {defaultValues: {energymax: 96000, isday: 0}, getGuiScreen: function () {
    return guiSolarGenerator;
}, isGenerator: function () {
    return true;
}, tick: function () {
    var content = this.container.getGuiContent();
    var energySlot = this.container.getSlot("slotEnergy");
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, 200, 2);
    if (World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
        if (this.data.energy < this.data.energymax) {
            this.data.energy += 100;
            time = 1;
        }
        this.data.isday = 1;
    } else {
        time = 0;
        this.data.isday = 0;
    }
    if (this.data.isday == 0) {
        if (content) {
            content.elements["light"].bitmap = "isNight";
        }
        this.container.setText("textInfo3", "\u0421\u043e\u043b\u043d\u0446\u0435: false");
    }
    if (this.data.isday == 1) {
        if (content) {
            content.elements["light"].bitmap = "isDay";
        }
        this.container.setText("textInfo3", "\u0421\u043e\u043b\u043d\u0446\u0435: true");
    }
    this.container.setText("textInfo1", this.data.energy / 1000);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
}, energyTick: function (type, src) {
    var output = Math.min(100, this.data.energy);
    this.data.energy += src.add(output) - output;
}});
Block.setPrototype("AdvSolarGenerator", {type: Block.TYPE_BASE, getVariations: function () {
    return [{name: "\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u0430\u044f \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c", texture: [["SPC", 0], ["SPT", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0]], inCreative: false}, {name: "asgbottom1", texture: [["SPC", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0]]}, {name: "asgenergy", texture: [["ASPEC", 0], ["ASPEC", 0], ["ASPEC", 0], ["ASPE", 0], ["ASPEC", 0], ["ASPEC", 0]]}, {name: "asgstick", texture: [["ASPSB", 0], ["ASPSB", 0], ["ASPSB", 0], ["ASPS", 0], ["ASPSB", 0], ["ASPSB", 0]]}, {name: "asgtopblock", texture: [["ASPT", 0], ["ASPT", 0], ["ASPT", 0], ["ASPT", 0], ["ASPT", 0], ["ASPT", 0]]}, {name: "asgtop", texture: [["SPC", 0], ["ASPP", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0], ["SPC", 0]]}, {name: "asgstick2", texture: [["ASPSB", 0], ["ASPSB", 0], ["ASPSB", 0], ["ASPSB", 0], ["ASPSB", 0], ["ASPSB", 0]]}];
}});
IDRegistry.genItemID("item_adv");
Item.createItem("item_adv", "\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u0430\u044f \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c", {name: "item_adv", meta: 0});
Block.registerDropFunction("AdvSolarGenerator", function (coords, blockID, blockData) {
    return [[ItemID.item_adv, 1, 0]];
});
Item.registerUseFunction("item_adv", function (coords, item, block) {
    var place = coords.relative;
    if (GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))) {
        World.setBlock(place.x, place.y, place.z, BlockID["AdvSolarGenerator"], 0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.item_adv, count: 1, data: 0}, ["gsg", "gsg", "iii"], ["g", ItemID.item_sg, 0, "s", ItemID.EnrichedAlloy, 0, "i", 265, 0]);
});
Block.setShape(BlockID.AdvSolarGenerator, 0, 0, 0, 1, 1, 1);
BlockRenderer.addRenderCallback(BlockID.AdvSolarGenerator, function (api, coords) {
    api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, 0, 1, 0.1, 1, BlockID.AdvSolarGenerator, 1);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.1, 0.1, 0.1, 0.9, 0.8, 0.9, BlockID.AdvSolarGenerator, 2);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.35, 0.8, 0.35, 0.65, 1, 0.65, BlockID.AdvSolarGenerator, 3);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.35, 1, 0.35, 0.65, 2, 0.65, BlockID.AdvSolarGenerator, 3);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.25, 2, 0.25, 0.75, 2.5, 0.75, BlockID.AdvSolarGenerator, 4);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.35, 2, 0.15, 0.45, 2.6, 0.75, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.55, 2, 0.15, 0.65, 2.6, 0.75, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, -0.65, 2.2, 0.45, 0.35, 2.3, 0.55, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.75, 2.2, 0.45, 1.75, 2.3, 0.55, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, -0.8, 2.3, 0, 0, 2.4, 1, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, -0.8, 2.3, 1, 0, 2.4, 2, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, -0.8, 2.3, -1, 0, 2.4, 0, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, -0.9, 2.4, 0, 0.1, 2.5, 1, BlockID.AdvSolarGenerator, 5);
    api.renderBoxId(coords.x, coords.y, coords.z, -0.9, 2.4, 1, 0.1, 2.5, 2, BlockID.AdvSolarGenerator, 5);
    api.renderBoxId(coords.x, coords.y, coords.z, -0.9, 2.4, -1, 0.1, 2.5, 0, BlockID.AdvSolarGenerator, 5);
    api.renderBoxId(coords.x, coords.y, coords.z, 1, 2.3, 0, 1.8, 2.4, 1, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, 1, 2.3, 1, 1.8, 2.4, 2, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, 1, 2.3, -1, 1.8, 2.4, 0, BlockID.AdvSolarGenerator, 6);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.9, 2.4, 0, 1.9, 2.5, 1, BlockID.AdvSolarGenerator, 5);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.9, 2.4, 1, 1.9, 2.5, 2, BlockID.AdvSolarGenerator, 5);
    api.renderBoxId(coords.x, coords.y, coords.z, 0.9, 2.4, -1, 1.9, 2.5, 0, BlockID.AdvSolarGenerator, 5);
});
BlockRenderer.enableCustomRender(BlockID.AdvSolarGenerator);
var guiADVSolarGenerator = new UI.StandartWindow({standart: {header: {text: {text: "Advanced Solar Generator"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 400, y: 225, bitmap: "dnslot", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 500, y: 180, bitmap: "TextPanel", scale: 4}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 880, y: 220}, "light": {type: "image", x: 404 + GUI_BAR_STANDART_SCALE, y: 227 + GUI_BAR_STANDART_SCALE, bitmap: "isNight", scale: GUI_BAR_STANDART_SCALE}, "textInfo1": {type: "text", x: 510, y: 190, width: 300, height: 30, text: "0", font: {color: android.graphics.Color.GREEN}}, "textInfo2": {type: "text", x: 600, y: 190, width: 300, height: 30, text: "kJ", font: {color: android.graphics.Color.GREEN}}, "textInfo3": {type: "text", x: 510, y: 230, width: 300, height: 30, text: "\u0421\u043e\u043b\u043d\u0446\u0435:", font: {color: android.graphics.Color.GREEN}}, "textInfo4": {type: "text", x: 510, y: 270, width: 300, height: 30, text: "\u0412\u044b\u0445\u043e\u0434: 600J/t", font: {color: android.graphics.Color.GREEN}}}});
MachineRegistry.register(BlockID.AdvSolarGenerator, {defaultValues: {energymax: 200000, isday: 0}, getGuiScreen: function () {
    return guiADVSolarGenerator;
}, isGenerator: function () {
    return true;
}, tick: function () {
    var content = this.container.getGuiContent();
    var energySlot = this.container.getSlot("slotEnergy");
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), this.data.energy, 200, 2);
    if (World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
        if (this.data.energy < this.data.energymax) {
            this.data.energy += 600;
            time = 1;
        }
        this.data.isday = 1;
    } else {
        time = 0;
        this.data.isday = 0;
    }
    if (this.data.isday == 0) {
        if (content) {
            content.elements["light"].bitmap = "isNight";
        }
        this.container.setText("textInfo3", "\u0421\u043e\u043b\u043d\u0446\u0435: false");
    }
    if (this.data.isday == 1) {
        if (content) {
            content.elements["light"].bitmap = "isDay";
        }
        this.container.setText("textInfo3", "\u0421\u043e\u043b\u043d\u0446\u0435: true");
    }
    this.container.setText("textInfo1", this.data.energy / 1000);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
}, energyTick: function (type, src) {
    var output = Math.min(600, this.data.energy);
    this.data.energy += src.add(output) - output;
}});

