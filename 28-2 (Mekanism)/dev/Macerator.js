IDRegistry.genBlockID("Macerator");
Block.createBlockWithRotation("Macerator", [{name: "Macerator", texture: [["SteelCasing", 0], ["CrusherTop", 0], ["CrusherBack", 0], ["CrusherFront", 0], ["CrusherLeft", 0], ["CrusherRight", 0]], inCreative: true}]);
Block.registerDropFunction("Macerator", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.Macerator, count: 1, data: 0}, ["rbr", "lsl", "rbr"], ["b", ItemID.BasicControlCircuit, 0, "r", 331, 0, "s", BlockID.SteelCasing, 0, "l", 325, 10]);
});
var guiMacerator = new UI.StandartWindow({standart: {header: {text: {text: "Macerator"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 565, y: 190, bitmap: "GuiProgressC", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 500, y: 190, bitmap: "GuiArrowUP", scale: GUI_BAR_STANDART_SCALE}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 480, y: 240}, "slotInput": {type: "slot", x: 480, y: 120}, "slotResult": {type: "slot", x: 680, y: 150, size: 100}, "progressScale": {type: "scale", x: 568, y: 193, direction: 0, value: 0, bitmap: "GuiProgressCScale", scale: GUI_BAR_STANDART_SCALE}}});
MachineRegistry.register(BlockID.Macerator, {defaultValues: {energymax: 160000, energy_consumption: 20, work_time: 250, progress: 0, inSound: 0}, getGuiScreen: function () {
    return guiMacerator;
}, getTransportSlots: function () {
    return {input: ["slotInput"], output: ["slotResult"]};
}, tick: function () {
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    var energySlot = this.container.getSlot("slotEnergy");
    var inSlot = this.container.getSlot("slotInput");
    var resultSlot = this.container.getSlot("slotResult");
    if (inSlot.id == 0) {
        this.data.progress = 0;
    }
    if (this.data.progress > 0) {
        if (this.data.inSound == 0) {
            this.data.inSound = 2;
        }
    }
    if (this.data.progress >= 1 && this.data.inSound == 2) {
        this.data.inSound = 0;
    }
    if (inSlot.id == 35) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 287;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 98) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 98;
            resultSlot.data = 2;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 13) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 12;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 318) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 289;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 4) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 13;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 24) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 12;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 1) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 4;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.ingotosmium) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.OsmiumDust;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 6) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 266) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.GoldDust;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 295) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 260) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 360) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.copperingot) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.CopperDust;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 361) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.tiningot) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.TinDust;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 32) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 391) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 296) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 392) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 86) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 6;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 297) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 264) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.DiamondDust;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 265) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.IronDust;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 338) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 367) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 362) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.BioFuel;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.SteelIngot) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.SteelDust;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
    this.container.setScale("progressScale", this.data.progress);
}, getEnergyStorage: function () {
    return this.data.energymax;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Block.registerPlaceFunction("Macerator", MachineRegistry.placeFunction);

