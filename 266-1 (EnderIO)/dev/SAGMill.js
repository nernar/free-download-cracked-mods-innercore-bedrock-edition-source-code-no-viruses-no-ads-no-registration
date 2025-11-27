IDRegistry.genBlockID("sagmill");
Block.createBlockWithRotation("sagmill", [{name: "SAG mill", texture: [["machineBottom", 0], ["machineTop", 0], ["machineSide", 0], ["crusherFront", 0], ["machineSide", 0], ["machineSide", 0]], inCreative: true}], "opaque");
ICRender.getGroup("bc-container").add(BlockID.sagmill, -1);
ICRender.getGroup("item-pipe").add(BlockID.sagmill, -1);
var SAGGui = new UI.StandartWindow({standart: {header: {text: {text: "SAG Mill"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 335, y: 140, bitmap: "redflux_bar0", scale: 3.2}, {type: "bitmap", x: 595, y: 250, bitmap: "bar_progress_down0", scale: 4.2}, {type: "bitmap", x: 765, y: 165, bitmap: "bar_silicon0", scale: 6.8}], elements: {"progressScale": {type: "scale", x: 595, y: 250, direction: 3, bitmap: "bar_progress_down1", scale: 4.2}, "energyScale": {type: "scale", x: 335, y: 140, direction: 1, value: 0.5, bitmap: "redflux_bar1", scale: 3.2}, "siliconScale": {type: "scale", x: 765, y: 165, direction: 1, value: 0.5, bitmap: "bar_silicon1", scale: 6.8}, "text": {type: "text", x: 400, y: 100, width: 100, height: 30, text: "RF"}, "ingridient": {type: "slot", x: 602, y: 170}, "slotSilicon": {type: "slot", x: 700, y: 170}, "capacitorSlot": {type: "slot", x: 325, y: 310}, "result0": {type: "slot", x: 505, y: 340}, "result1": {type: "slot", x: 570, y: 340}, "result2": {type: "slot", x: 635, y: 340}, "result3": {type: "slot", x: 700, y: 340}}});
MachineRegistry.registerPrototype(BlockID.sagmill, {getGuiScreen: function () {
    return SAGGui;
}, defaultValues: {progress: 0, silicon: 0, standartSpeed: 1, energyUsage: 20, maxEnergyStorage: 100000}, oldValues: {standartSpeed: 1, energyUsage: 20, maxEnergyStorage: 100000}, getTransportSlots: function () {
    return {input: ["ingridient"], output: ["result0", "result1", "result2", "result3"]};
}, tick: function () {
    let ingridient = this.container.getSlot("ingridient");
    let res0 = this.container.getSlot("result0");
    let res1 = this.container.getSlot("result1");
    let res2 = this.container.getSlot("result2");
    let res3 = this.container.getSlot("result3");
    this.container.validateAll();
    this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    this.container.setScale("siliconScale", this.data.silicon / 10);
    let slotCapacitor = this.container.getSlot("capacitorSlot");
    let upgrade = UpgradeAPI.getUpgradeData(slotCapacitor.id);
    if (upgrade) {
        this.data.standartSpeed = upgrade.speed;
        this.data.energyUsage = upgrade.usage;
        this.data.maxEnergyStorage = upgrade.storage;
    } else {
        this.data.standartSpeed = this.oldValues.standartSpeed;
        this.data.energyUsage = this.oldValues.energyUsage;
        this.data.maxEnergyStorage = this.oldValues.maxEnergyStorage;
    }
    this.container.setText("text", "RF: " + this.data.energy + "/" + this.data.maxEnergyStorage);
    if (this.data.energy > this.data.maxEnergyStorage) {
        this.data.energy = this.data.maxEnergyStorage;
    }
    let silicon = this.container.getSlot("slotSilicon");
    if (silicon.id == 318 && this.data.silicon == 0) {
        silicon.count--;
        this.data.silicon += 10;
    }
    let rec = MachineRecipe.getCrusher(ingridient.id, ingridient.data);
    if (rec) {
        this.container.setScale("progressScale", this.data.progress / rec.time);
        if (this.data.energy >= this.data.energyUsage) {
            this.data.progress += this.data.standartSpeed;
            this.data.energy -= this.data.energyUsage;
        }
        if (this.data.progress >= rec.time && (res0.id == rec.result0.id && res0.count < 64 || res0.id == 0) && (res1.id == rec.result1.id && res1.count < 64 || res1.id == 0) && (res2.id == rec.result2.id && res2.count < 64 || res2.id == 0) && (res3.id == rec.result3.id && res3.count < 64 || res3.id == 0)) {
            ingridient.count--;
            if (Math.random() * 1 <= rec.result0.chance) {
                res0.id = rec.result0.id;
                res0.data = rec.result0.data;
                if (res0.id != 0) {
                    res0.count++;
                }
            }
            if (Math.random() * 1 <= rec.result1.chance) {
                res1.id = rec.result1.id;
                res1.data = rec.result1.data;
                if (res1.id != 0) {
                    res1.count++;
                }
            }
            if (Math.random() * 1 <= rec.result2.chance) {
                res2.id = rec.result2.id;
                res2.data = rec.result2.data;
                if (res2.id != 0) {
                    res2.count++;
                }
            }
            if (Math.random() * 1 <= rec.result3.chance) {
                res3.id = rec.result3.id;
                res3.data = rec.result3.data;
                if (res3.id != 0) {
                    res3.count++;
                }
            }
            this.container.setScale("progressScale", 0 / 1);
            this.data.progress = 0;
            if (this.data.silicon > 0) {
                this.data.silicon--;
            }
        }
    } else {
        this.data.progress = 0;
        this.container.setScale("progressScale", 0 / 1);
    }
}, getEnergyStorage: function () {
    return this.data.maxEnergyStorage;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Callback.addCallback("PostLoaded", function () {
    MachineRecipe.addCrusher({id: 14, data: 0, time: 180}, [[ItemID.dustGold, 0, 1], [ItemID.dustGold, 0, 1], [ItemID.dustCopper, 0, 0.2], [0, 0, 0]]);
    MachineRecipe.addCrusher({id: 15, data: 0, time: 180}, [[ItemID.dustIron, 0, 1], [ItemID.dustIron, 0, 1], [ItemID.dustTin, 0, 0.05], [ItemID.dustNickel, 0, 0.1]]);
    MachineRecipe.addCrusher({id: 16, data: 0, time: 180}, [[263, 0, 1], [263, 0, 1], [ItemID.dustCoal, 0, 0.6], [264, 0, 0.001]]);
    MachineRecipe.addCrusher({id: 1, data: 0, time: 180}, [[4, 0, 1], [13, 0, 0.5], [12, 0, 0.05], [0, 0, 0]]);
    MachineRecipe.addCrusher({id: 4, data: 0, time: 180}, [[12, 0, 1], [13, 0, 0.1], [0, 0, 0], [0, 0, 0]]);
    MachineRecipe.addCrusher({id: 13, data: 0, time: 140}, [[318, 0, 1], [12, 0, 0.05], [0, 0, 0], [0, 0, 0]]);
    MachineRecipe.addCrusher({id: 12, data: 0, time: 80}, [[ItemID.silicon, 0, 0.5], [0, 0, 0], [0, 0, 0], [0, 0, 0]]);
    MachineRecipe.addCrusher({id: 263, data: 0, time: 120}, [[ItemID.dustCoal, 0, 1], [ItemID.dustCoal, 0, 0.1], [ItemID.dustSulfur, 0, 0.1], [0, 0, 0]]);
    MachineRecipe.addCrusher({id: BlockID.oreCopper, data: 0, time: 180}, [[ItemID.dustCopper, 0, 1], [ItemID.dustCopper, 0, 1], [ItemID.dustGold, 0, 0.05], [4, 0, 0.15]]);
    MachineRecipe.addCrusher({id: BlockID.oreTin, data: 0, time: 180}, [[ItemID.dustTin, 0, 1], [ItemID.dustTin, 0, 1], [ItemID.dustIron, 0, 0.05], [4, 0, 0.15]]);
    MachineRecipe.addCrusher({id: BlockID.oreLead, data: 0, time: 180}, [[ItemID.dustLead, 0, 1], [ItemID.dustLead, 0, 1], [ItemID.dustSilver, 0, 0.1], [4, 0, 0.15]]);
    MachineRecipe.addCrusher({id: BlockID.oreSilver, data: 0, time: 180}, [[ItemID.dustSilver, 0, 1], [ItemID.dustSilver, 0, 1], [ItemID.dustLead, 0, 0.1], [4, 0, 0.15]]);
    MachineRecipe.addCrusher({id: BlockID.oreNickel, data: 0, time: 180}, [[ItemID.dustNick, 0, 1], [ItemID.dustNickel, 0, 1], [ItemID.dustPlatinum, 0, 0.1], [4, 0, 0.15]]);
    MachineRecipe.addCrusher({id: BlockID.oreAluminum, data: 0, time: 180}, [[ItemID.dustAluminum, 0, 1], [ItemID.dustAluminum, 0, 1], [0, 0, 0], [4, 0, 0.15]]);
    MachineRecipe.addCrusher({id: BlockID.oreSilver, data: 0, time: 180}, [[ItemID.dustSilver, 0, 1], [ItemID.dustSilver, 0, 1], [ItemID.dustLead, 0, 0.1], [4, 0, 0.15]]);
    MachineRecipe.addCrusher({id: 49, data: 0, time: 200}, [[ItemID.dustObsidian, 0, 1], [ItemID.dustObsidian, 0, 1], [ItemID.dustObsidian, 0, 1], [ItemID.dustObsidian, 0, 1]]);
    Recipes.addShaped({id: BlockID.sagmill, count: 1, data: 0}, ["fff", "imi", "ipi"], ["i", 265, 0, "f", 318, 0, "m", BlockID.machineChassi, 0, "p", 33, 0]);
});

