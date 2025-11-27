IDRegistry.genBlockID("EnrichmentChambe");
Block.createBlock("EnrichmentChambe", [{name: "Enrichment Chambe", texture: [["EnrichmentChamberBottom", 0], ["EnrichmentChamberTop", 0], ["EnrichmentChamberBack", 0], ["EnrichmentChamberFront", 0], ["EnrichmentChamberLeft", 0], ["EnrichmentChamberRight", 0]], inCreative: true}]);
Block.registerDropFunction("EnrichmentChambe", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.EnrichmentChambe, count: 1, data: 0}, ["rpr", "ici", "rpr"], ["r", 331, 0, "i", 265, 0, "p", ItemID.BasicControlCircuit, 0, "c", BlockID.SteelCasing, 0]);
});
var guiEnrichmentChambe = new UI.StandartWindow({standart: {header: {text: {text: "Enrichment Chambe"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 630, y: 230, bitmap: "GuiProgressC", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 538, y: 230, bitmap: "GuiArrowUP", scale: GUI_BAR_STANDART_SCALE}], elements: {"energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "progressScale": {type: "scale", x: 633, y: 233, direction: 0, value: 0, bitmap: "GuiProgressCScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 520, y: 283}, "slotInput": {type: "slot", x: 520, y: 165}, "slotResult": {type: "slot", x: 750, y: 195, size: 100}}});
MachineRegistry.register(BlockID.EnrichmentChambe, {defaultValues: {energymax: 40000, energy_consumption: 20, work_time: 250, progress: 0}, getGuiScreen: function () {
    return guiEnrichmentChambe;
}, getTransportSlots: function () {
    return {input: ["slotInput"], output: ["slotResult"]};
}, tick: function () {
    var energySlot = this.container.getSlot("slotEnergy");
    var inSlot = this.container.getSlot("slotInput");
    var resultSlot = this.container.getSlot("slotResult");
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
    if (inSlot.id == 0) {
        this.data.progress = 0;
    }
    this.container.setScale("progressScale", this.data.progress);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
    if (inSlot.id == 49) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.ObsidianDust;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.HDPEPellet && inSlot.count >= 3) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count -= 3;
            resultSlot.id = ItemID.HDPESheet;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 82) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 337;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 12) {
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
    if (inSlot.id == 98) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 98;
            resultSlot.data = 3;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 48) {
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
    if (inSlot.id == 13) {
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
    if (inSlot.id == BlockID.TinOre) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.TinDust;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == BlockID.OsmiumOre) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.OsmiumDust;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == BlockID.CopperOre) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.CopperDust;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 15) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.IronDust;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == ItemID.DiamondDust) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 264;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 14) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = ItemID.GoldDust;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 289) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 318;
            resultSlot.data = 0;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 21) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 351;
            resultSlot.data = 4;
            resultSlot.count += 12;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 153) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 406;
            resultSlot.data = 0;
            resultSlot.count += 6;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 56) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 264;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 16) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 263;
            resultSlot.data = 0;
            resultSlot.count += 2;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 73) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 331;
            resultSlot.data = 0;
            resultSlot.count += 12;
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
            resultSlot.id = 98;
            resultSlot.data = 2;
            resultSlot.count += 1;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
    if (inSlot.id == 89) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
        }
        if (this.data.progress >= 1) {
            inSlot.count--;
            resultSlot.id = 348;
            resultSlot.data = 0;
            resultSlot.count += 4;
            this.container.validateAll();
            this.data.progress = 0;
        }
    }
}, getEnergyStorage: function () {
    return this.data.energymax;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Block.registerPlaceFunction("EnrichmentChambe", MachineRegistry.placeFunction);

