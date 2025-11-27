IDRegistry.genBlockID("alloySmelter");
Block.createBlockWithRotation("alloySmelter", [{name: "Alloy smelter", texture: [["machineBottom", 0], ["machineTop", 0], ["machineSide", 0], ["alloySmelterFrontOn", 0], ["machineSide", 0], ["machineSide", 0]], inCreative: true}], "opaque");
ICRender.getGroup("item-pipe").add(BlockID.alloySmelter, -1);
ICRender.getGroup("bc-container").add(BlockID.alloySmelter, -1);
var smelterGUI = new UI.StandartWindow({standart: {header: {text: {text: "Alloy smelter"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 527, y: 235, bitmap: "fire_scale0", scale: 3.2}, {type: "bitmap", x: 687, y: 235, bitmap: "fire_scale0", scale: 3.2}, {type: "bitmap", x: 335, y: 140, bitmap: "redflux_bar0", scale: 3.2}], elements: {"progressScale0": {type: "scale", x: 527, y: 235, direction: 1, bitmap: "fire_scale1", scale: 3.2}, "progressScale1": {type: "scale", x: 687, y: 235, direction: 1, bitmap: "fire_scale1", scale: 3.2}, "energyScale": {type: "scale", x: 335, y: 140, direction: 1, bitmap: "redflux_bar1", scale: 3.2}, "ingridient1": {type: "slot", x: 520, y: 170}, "ingridient2": {type: "slot", x: 600, y: 140}, "ingridient3": {type: "slot", x: 680, y: 170}, "text": {type: "text", x: 400, y: 100, width: 100, height: 30, text: "RF"}, "capacitorSlot": {type: "slot", x: 325, y: 320}, "result": {type: "slot", x: 600, y: 320}, "changeMode": {type: "button", x: 787, y: 300, bitmap: "alloy0", scale: 2.2, clicker: {onClick: function (container, tile) {
    tile.data.progress = 0;
    tile.data.mode = (tile.data.mode + 1) % 2;
}}}}});
MachineRegistry.registerPrototype(BlockID.alloySmelter, {defaultValues: {progress: 0, mode: 0, standartSpeed: 1, energyUsage: 20, maxEnergyStorage: 100000}, oldValues: {standartSpeed: 1, energyUsage: 20, maxEnergyStorage: 100000}, getTransportSlots: function () {
    return {input: ["ingridient1", "ingridient2", "ingridient3"], output: ["result"]};
}, getGuiScreen: function () {
    return smelterGUI;
}, alloy: function () {
    let ingridient1 = this.container.getSlot("ingridient1");
    let ingridient2 = this.container.getSlot("ingridient2");
    let ingridient3 = this.container.getSlot("ingridient3");
    let result = this.container.getSlot("result");
    let rec = MachineRecipe.getSmelter(ingridient1.id, ingridient2.id, ingridient3.id);
    if (rec) {
        this.container.setScale("progressScale0", this.data.progress / rec.time);
        this.container.setScale("progressScale1", this.data.progress / rec.time);
        if ((result.id == rec.id && result.data == rec.data && result.count + rec.count <= 64 || result.id == 0)) {
            if (this.data.energy >= this.data.energyUsage) {
                this.data.energy -= this.data.energyUsage;
                this.data.progress += this.data.standartSpeed;
            }
            if (this.data.progress >= rec.time) {
                result.id = rec.id;
                result.data = rec.data;
                result.count += rec.count;
                this.data.progress = 0;
                ingridient1.count--;
                ingridient2.count--;
                ingridient3.count--;
            }
        }
    } else {
        if (this.data.progress > 0) {
            this.data.progress = 0;
            this.container.setScale("progressScale0", 0);
            this.container.setScale("progressScale1", 0);
        }
    }
}, furnace: function () {
    let ingridient1 = this.container.getSlot("ingridient1");
    let ingridient2 = this.container.getSlot("ingridient2");
    let ingridient3 = this.container.getSlot("ingridient3");
    let result = this.container.getSlot("result");
    let rec = Recipes.getFurnaceRecipeResult(ingridient1.id, "iron");
    this.container.setScale("progressScale0", this.data.progress / 100 || 0);
    this.container.setScale("progressScale1", this.data.progress / 100 || 0);
    if (rec) {
        if ((result.id == rec.id && result.data == rec.data && result.count <= 64 || result.id == 0)) {
            if (this.data.energy >= this.data.energyUsage) {
                this.data.energy -= this.data.energyUsage;
                this.data.progress += this.data.standartSpeed;
            }
            if (this.data.progress >= 100) {
                result.id = rec.id;
                result.data = rec.data;
                result.count++;
                this.data.progress = 0;
                ingridient1.count--;
            }
        }
    } else {
        if (this.data.progress > 0) {
            this.data.progress = 0;
            this.container.setScale("progressScale0", 0);
            this.container.setScale("progressScale1", 0);
        }
    }
}, tick: function () {
    this.container.validateAll();
    this.container.setScale("energyScale", this.data.energy / this.data.maxEnergyStorage);
    if (this.data.mode === 0) {
        this.alloy();
    }
    if (this.data.mode === 1) {
        this.furnace();
    }
    if (this.container.getGuiContent()) {
        this.container.getGuiContent().elements["changeMode"].bitmap = "alloy" + this.data.mode;
    }
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
    this.container.setText("text", this.data.energy + "/" + this.data.maxEnergyStorage);
    if (this.data.energy > this.data.maxEnergyStorage) {
        this.data.energy = this.data.maxEnergyStorage;
    }
}, getEnergyStorage: function () {
    return this.data.maxEnergyStorage;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});
Callback.addCallback("PostLoaded", function () {
    MachineRecipe.addSmelter([331, 265, 0], {id: ItemID.conductiveIron, data: 0, count: 1, time: 500});
    MachineRecipe.addSmelter([266, 331, 348], {id: ItemID.energeticAlloy, data: 0, count: 1, time: 500});
    MachineRecipe.addSmelter([ItemID.energeticAlloy, 368, 0], {id: ItemID.vibrantAlloy, data: 0, count: 1, time: 500});
    MachineRecipe.addSmelter([265, 368, 0], {id: ItemID.pulsatingIron, data: 0, count: 1, time: 500});
    MachineRecipe.addSmelter([265, ItemID.powderCoal, ItemID.silicon], {id: ItemID.electricalSteel, data: 0, count: 1, time: 500});
    MachineRecipe.addSmelter([265, ItemID.powderCoal, 49], {id: ItemID.darkSteel, data: 0, count: 1, time: 1000});
    MachineRecipe.addSmelter([88, 266, 0], {id: ItemID.soulariumIngot, data: 0, count: 1, time: 500});
    MachineRecipe.addSmelter([331, ItemID.silicon, 0], {id: ItemID.redstoneAlloy, data: 0, count: 1, time: 500});
    Recipes.addShaped({id: BlockID.alloySmelter, count: 1, data: 0}, ["ifi", "fmf", "ici"], ["i", 265, 0, "f", 61, 0, "m", BlockID.machineChassi, 0, "c", 380, 0]);
});

