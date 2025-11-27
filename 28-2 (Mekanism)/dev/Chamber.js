IDRegistry.genBlockID("PressurizedReactionChamber");
Block.createBlock("PressurizedReactionChamber", [{name: "\u041a\u0420\u041f\u0414", texture: [["PRCD", 0], ["PRCT", 0], ["PRCB", 0], ["PRCF", 0], ["PRCL", 0], ["PRCR", 0]], inCreative: true}]);
Block.registerDropFunction("PressurizedReactionChamber", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.PressurizedReactionChamber, count: 1, data: 0}, [" s ", "bcb", "gdg"], ["c", BlockID.EnrichmentChambe, 0, "s", ItemID.EnrichedAlloy, 0, "b", ItemID.BasicControlCircuit, 0, "g", BlockID.BasicGazTank, 0, "d", BlockID.DynamicTank, 0]);
});
var guiPressurizedReactionChamber = new UI.StandartWindow({standart: {header: {text: {text: "Pressurized Reaction Chamber"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 330, y: 150, bitmap: "MediumFuelBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 400, y: 150, bitmap: "MediumFuelBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 880, y: 230, bitmap: "SmallFuelBG", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 570, y: 215, bitmap: "GuiProgressM", scale: GUI_BAR_STANDART_SCALE}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "fuelScale": {type: "scale", x: 330 + GUI_BAR_STANDART_SCALE, y: 151 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "_liquid_water_texture", overlay: "OverMediumFuelBG", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "fuelScale1": {type: "scale", x: 400 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "ScaleHydrogenBig", overlay: "OverMediumFuelBG", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "fuelScale2": {type: "scale", x: 880 + GUI_BAR_STANDART_SCALE, y: 230 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "ScaleEthene", overlay: "OverSmallFuelBG", overlayOffset: {x: -GUI_BAR_STANDART_SCALE, y: -GUI_BAR_STANDART_SCALE}, scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 880, y: 150}, "slotInput": {type: "slot", x: 480, y: 200}, "slotResult": {type: "slot", x: 700, y: 200}, "progressScale": {type: "scale", x: 570, y: 215, direction: 0, value: 0, bitmap: "GuiProgressMS", scale: GUI_BAR_STANDART_SCALE}}});
MachineRegistry.register(BlockID.PressurizedReactionChamber, {defaultValues: {f1: 0, f2: 0, energymax: 2000, fuelmodeR: 0, fuelmode: 0, energy_consumption: 20, work_time: 250, progress: 0}, getGuiScreen: function () {
    return guiPressurizedReactionChamber;
}, getTransportSlots: function () {
    return {input: ["slotInput"]};
}, tick: function (type, src) {
    this.data.fuelmax = 24000;
    var content = this.container.getGuiContent();
    var energySlot = this.container.getSlot("slotEnergy");
    var inSlot = this.container.getSlot("slotInput");
    var resultSlot = this.container.getSlot("slotResult");
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    if (inSlot.id == 0) {
        this.data.progress = 0;
    }
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
    this.container.setScale("fuelScale", this.data.fuel / this.data.fuelmax);
    this.container.setScale("fuelScale1", this.data.f1 / 24000);
    this.container.setScale("fuelScale2", this.data.f2 / 2400);
    this.container.setScale("progressScale", this.data.progress);
    if (this.data.fuel > 0 && this.data.f1 > 0 && this.data.fuelmode == 1) {
        this.data.fuelmodeR = 1;
        if (inSlot.id == ItemID.BioFuel && inSlot.count >= 2) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.data.fuel -= 2;
                this.data.f1 -= 2;
                this.data.f2 += 1;
            }
            if (this.data.progress >= 1) {
                inSlot.count -= 2;
                resultSlot.id = ItemID.Substrate;
                resultSlot.data = 0;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    }
    if (this.data.fuel > 0 && this.data.f1 > 0 && this.data.fuelmode == 2) {
        this.data.fuelmodeR = 2;
        if (inSlot.id == ItemID.Substrate) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
                this.data.fuel -= 2;
                this.data.f1 -= 2;
                this.data.f2 += 1;
            }
            if (this.data.progress >= 1) {
                inSlot.count--;
                resultSlot.id = ItemID.HDPEPellet;
                resultSlot.data = 0;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    }
    if (this.data.fuel <= 0 && this.data.f1 <= 0 && this.data.f2 <= 0) {
        this.data.fuelmode = 0;
        this.data.fuelmodeR = 0;
    }
    if (this.data.fuelmode == 1) {
        if (this.data.fuelmodeR == 1) {
            if (content) {
                content.elements["fuelScale"].bitmap = "_liquid_water_texture";
                content.elements["fuelScale1"].bitmap = "ScaleHydrogenBig";
                content.elements["fuelScale2"].bitmap = "ScaleEthene";
            }
        }
    }
    if (this.data.fuelmode == 2) {
        if (this.data.fuelmodeR == 2) {
            if (content) {
                content.elements["fuelScale"].bitmap = "ScaleEtheneBig";
                content.elements["fuelScale1"].bitmap = "BigScaleOxygen";
                content.elements["fuelScale2"].bitmap = "ScaleOxygen";
            }
        }
    }
}, energyTick: MachineRegistry.basicEnergyReceiveFunc, click: function (id, count, data, coords) {
    var content = this.container.getGuiContent();
    if (id == 325 && data == 8 && this.data.fuel < this.data.fuelmax) {
        if (this.data.fuelmode == 0) {
            this.data.fuelmode = 1;
        }
        if (this.data.fuelmode == 1) {
            this.data.fuel += 1000;
            Player.setCarriedItem(325, 1, 0);
        }
    }
    if (id == ItemID.HydB && data == 0 && this.data.f1 < 24000) {
        if (this.data.fuelmode == 0) {
            this.data.fuelmode = 1;
        }
        if (this.data.fuelmode == 1) {
            this.data.f1 += 1000;
            Player.setCarriedItem(325, 1, 0);
        }
    }
    if (id == 325 && this.data.f2 >= 1000) {
        if (this.data.fuelmodeR == 1) {
            this.data.f2 -= 1000;
            Player.setCarriedItem(ItemID.EleB, 1, 0);
        }
    }
    if (id == 325 && this.data.f2 >= 1000) {
        if (this.data.fuelmodeR == 2) {
            this.data.f2 -= 1000;
            Player.setCarriedItem(ItemID.OxyB, 1, 0);
        }
    }
    if (id == ItemID.GEleB && this.data.fuel < this.data.fuelmax) {
        if (this.data.fuelmode == 0) {
            this.data.fuelmode = 2;
        }
        if (this.data.fuelmode == 2) {
            this.data.fuel += 1000;
            Player.setCarriedItem(325, 1, 0);
        }
    }
    if (id == ItemID.OxyB && this.data.fuel < this.data.fuelmax) {
        if (this.data.fuelmode == 0) {
            this.data.fuelmode = 2;
        }
        if (this.data.fuelmode == 2) {
            this.data.f1 += 1000;
            Player.setCarriedItem(325, 1, 0);
        }
    }
}, getEnergyStorage: function () {
    return this.data.energymax;
}});

