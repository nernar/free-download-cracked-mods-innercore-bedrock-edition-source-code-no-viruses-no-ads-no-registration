IDRegistry.genBlockID("MetallurgicInfuser");
Block.createBlock("MetallurgicInfuser", [{name: "Metallurgic Infuser", texture: [["MID", 0], ["MIT", 0], ["MIB", 0], ["MIF", 0], ["MIR1", 0], ["MIR", 0]], inCreative: true}]);
Block.registerDropFunction("MetallurgicInfuser", function (coords, blockID, blockData, level) {
    return [];
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.MetallurgicInfuser, count: 1, data: 0}, ["ifi", "ror", "ifi"], ["i", 265, 0, "r", 331, 0, "o", ItemID["ingotosmium"], 0, "f", 61, 0]);
});
var guiMetallurgicInfuser = new UI.StandartWindow({standart: {header: {text: {text: "Metallurgic Infuser"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 350, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 950, y: 150, bitmap: "GuiPowerBar", scale: GUI_BAR_STANDART_SCALE}, {type: "bitmap", x: 555, y: 245, bitmap: "GuiProgress", scale: GUI_BAR_STANDART_SCALE}], elements: {"fuelScale": {type: "scale", x: 350 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "ScaleCoal", scale: GUI_BAR_STANDART_SCALE}, "energyScale": {type: "scale", x: 950 + GUI_BAR_STANDART_SCALE, y: 150 + GUI_BAR_STANDART_SCALE, direction: 1, value: 0, bitmap: "GuiPowerBarScale", scale: GUI_BAR_STANDART_SCALE}, "progressScale": {type: "scale", x: 555, y: 245, direction: 0, value: 0, bitmap: "GuiProgressScale", scale: GUI_BAR_STANDART_SCALE}, "slotEnergy": {type: "slot", x: 820, y: 150}, "slotFuel": {type: "slot", x: 380, y: 150}, "slotInput": {type: "slot", x: 480, y: 220}, "slotResult": {type: "slot", x: 720, y: 220}}});
MachineRegistry.register(BlockID.MetallurgicInfuser, {defaultValues: {fueltype: 0, energymax: 20000, energy_consumption: 30, work_time: 300, progress: 0, inSound: 0}, getGuiScreen: function () {
    return guiMetallurgicInfuser;
}, getTransportSlots: function () {
    return {input: ["slotInput"], output: ["slotResult"]};
}, setDefaultValues: function () {
    this.data.energymax = this.defaultValues.energymax;
    this.data.energy_consumption = this.defaultValues.energy_consumption;
    this.data.work_time = this.defaultValues.work_time;
}, tick: function () {
    this.data.fuelmax = 1000;
    var content = this.container.getGuiContent();
    var energySlot = this.container.getSlot("slotEnergy");
    var fuelSlot = this.container.getSlot("slotFuel");
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
    if (this.data.fueltype == 1) {
        if (inSlot.id == 265 && this.data.fuel >= 10) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
            }
            if (this.data.progress >= 1) {
                this.data.fuel -= 10;
                inSlot.count--;
                resultSlot.id = ItemID["EnrichedIron"];
                resultSlot.data = 0;
                resultSlot.count += 1;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
        if (inSlot.id == ItemID["EnrichedIron"] && this.data.fuel >= 10) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
            }
            if (this.data.progress >= 1) {
                this.data.fuel -= 10;
                inSlot.count--;
                resultSlot.id = ItemID["SteelDust"];
                resultSlot.data = 0;
                resultSlot.count += 1;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    }
    if (this.data.fueltype == 2) {
        if (inSlot.id == ItemID["ingotosmium"] && this.data.fuel >= 10) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
            }
            if (this.data.progress >= 1) {
                this.data.fuel -= 10;
                inSlot.count--;
                resultSlot.id = ItemID["BasicControlCircuit"];
                resultSlot.data = 0;
                resultSlot.count += 1;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
        if (inSlot.id == 265 && this.data.fuel >= 10) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
            }
            if (this.data.progress >= 1) {
                this.data.fuel -= 10;
                inSlot.count--;
                resultSlot.id = ItemID["EnrichedAlloy"];
                resultSlot.data = 0;
                resultSlot.count += 1;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    }
    if (this.data.fueltype == 3) {
        if (inSlot.id == ItemID["ObsidianDust"] && this.data.fuel >= 10) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
            }
            if (this.data.progress >= 1) {
                this.data.fuel -= 10;
                inSlot.count--;
                resultSlot.id = ItemID["RefinedObsidianDust"];
                resultSlot.data = 0;
                resultSlot.count += 1;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    }
    if (fuelSlot.id == 263) {
        if (this.data.fueltype == 0) {
            this.data.fueltype = 1;
        }
        if (this.data.fuel < this.data.fuelmax && this.data.fueltype == 1) {
            fuelSlot.count--;
            this.container.validateSlot("slotFuel");
            this.data.fuel += 10;
        }
    }
    if (fuelSlot.id == ItemID["TinDust"]) {
        if (this.data.fueltype == 0) {
            this.data.fueltype = 4;
        }
        if (this.data.fuel < this.data.fuelmax && this.data.fueltype == 4) {
            fuelSlot.count--;
            this.container.validateSlot("slotFuel");
            this.data.fuel += 10;
        }
    }
    if (fuelSlot.id == ItemID["ObsidianDust"]) {
        if (this.data.fueltype == 0) {
            this.data.fueltype = 5;
        }
        if (this.data.fuel < this.data.fuelmax && this.data.fueltype == 5) {
            fuelSlot.count--;
            this.container.validateSlot("slotFuel");
            this.data.fuel += 10;
        }
    }
    if (fuelSlot.id == 331) {
        if (this.data.fueltype == 0) {
            this.data.fueltype = 2;
        }
        if (this.data.fuel < this.data.fuelmax && this.data.fueltype == 2) {
            fuelSlot.count--;
            this.container.validateSlot("slotFuel");
            this.data.fuel += 10;
        }
    }
    if (fuelSlot.id == ItemID["DiamondDust"]) {
        if (this.data.fueltype == 0) {
            this.data.fueltype = 3;
        }
        if (this.data.fuel < this.data.fuelmax && this.data.fueltype == 3) {
            fuelSlot.count--;
            this.container.validateSlot("slotFuel");
            this.data.fuel += 10;
        }
    }
    if (this.data.fuel <= 0) {
        this.data.fueltype = 0;
    }
    if (this.data.fueltype == 1) {
        if (content) {
            content.elements["fuelScale"].bitmap = "ScaleCoal";
        }
    }
    if (this.data.fueltype == 2) {
        if (content) {
            content.elements["fuelScale"].bitmap = "ScaleRed";
        }
    }
    if (this.data.fueltype == 3) {
        if (content) {
            content.elements["fuelScale"].bitmap = "ScaleBlue";
        }
    }
    if (this.data.fueltype == 4) {
        if (content) {
            content.elements["fuelScale"].bitmap = "ScaleTin";
        }
    }
    if (this.data.fueltype == 5) {
        if (content) {
            content.elements["fuelScale"].bitmap = "ScaleObsidian";
        }
    }
    if (this.data.fueltype == 3) {
        if (inSlot.id == ItemID["EnrichedAlloy"] && this.data.fuel >= 10) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
            }
            if (this.data.progress >= 1) {
                this.data.fuel -= 10;
                inSlot.count--;
                resultSlot.id = ItemID["ReinforcedAlloy"];
                resultSlot.data = 0;
                resultSlot.count += 1;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    }
    if (this.data.fueltype == 4) {
        if (inSlot.id == ItemID["copperingot"] && this.data.fuel >= 10) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
            }
            if (this.data.progress >= 1) {
                this.data.fuel -= 10;
                inSlot.count--;
                resultSlot.id = ItemID["BronzeIngot"];
                resultSlot.data = 0;
                resultSlot.count += 1;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    }
    if (this.data.fueltype == 5) {
        if (inSlot.id == ItemID["ReinforcedAlloy"] && this.data.fuel >= 10) {
            if (this.data.energy >= this.data.energy_consumption) {
                this.data.energy -= this.data.energy_consumption;
                this.data.progress += 1 / this.data.work_time;
            }
            if (this.data.progress >= 1) {
                this.data.fuel -= 10;
                inSlot.count--;
                resultSlot.id = ItemID["AtomicAlloy"];
                resultSlot.data = 0;
                resultSlot.count += 1;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
    }
    this.container.setScale("fuelScale", this.data.fuel / this.data.fuelmax);
    this.container.setScale("energyScale", this.data.energy / this.data.energymax);
    this.container.setScale("progressScale", this.data.progress);
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), Math.min(200, this.data.energymax - this.data.energy), 2);
}, getEnergyStorage: function () {
    return this.data.energymax;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Block.registerPlaceFunction("MetallurgicInfuser", MachineRegistry.placeFunction);

