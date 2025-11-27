IDRegistry.genBlockID("downironCraftingTable");
Block.createBlock("downironCraftingTable", [{name: "Downiron crafting table", texture: [["downiron_casing", 1], ["downiron_craftingtable", 0], ["downiron_casing", 0]], inCreative: true}], "opaque");
var dctGUI = new UI.StandartWindow({standart: {header: {text: {text: "Craft II"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 528, y: 292, bitmap: "energy_bar0", scale: 3.2}], elements: {"energyScale": {type: "scale", x: 528, y: 292, bitmap: "energy_bar1", scale: 3.2}, "res": {type: "slot", x: 592 + 128, y: 100}, "ing0": {type: "slot", x: 464, y: 100}, "ing1": {type: "slot", x: 528, y: 100}, "ing2": {type: "slot", x: 592, y: 100}, "ing3": {type: "slot", x: 464, y: 164}, "ing4": {type: "slot", x: 528, y: 164}, "ing5": {type: "slot", x: 592, y: 164}, "ing6": {type: "slot", x: 464, y: 228}, "ing7": {type: "slot", x: 528, y: 228}, "ing8": {type: "slot", x: 592, y: 228}, "textInfo": {type: "text", x: 550, y: 350, width: 300, height: 30, text: "Energy: "}, "button": {type: "button", x: 592 + 64, y: 100, bitmap: "craftBtn_0", bitmap2: "craftBtn_1", scale: 3.2, clicker: {onClick: function (container, tileEntity) {
    tileEntity.data.craft = true;
}}}}});
MachineRegistry.registerPrototype(BlockID.downironCraftingTable, {defaultValues: {craft: false}, getGuiScreen: function () {
    return dctGUI;
}, getEnergyStorage: function () {
    return 50000;
}, tick: function () {
    let ing0 = this.container.getSlot("ing0");
    let ing1 = this.container.getSlot("ing1");
    let ing2 = this.container.getSlot("ing2");
    let ing3 = this.container.getSlot("ing3");
    let ing4 = this.container.getSlot("ing4");
    let ing5 = this.container.getSlot("ing5");
    let ing6 = this.container.getSlot("ing6");
    let ing7 = this.container.getSlot("ing7");
    let ing8 = this.container.getSlot("ing8");
    this.container.setText("textInfo", "Energy: " + this.data.energy + "/" + this.getEnergyStorage());
    let res = this.container.getSlot("res");
    this.container.setScale("energyScale", this.data.energy / 50000);
    let rec_ = RecipeSystem.getWorkbenchRecipe();
    if (this.data.craft) {
        for (i in rec_) {
            let rec = rec_[i];
            if (ing0.id == rec.ing0 && ing0.data == rec.ingData0 && ing1.id == rec.ing1 && ing1.data == rec.ingData1 && ing2.id == rec.ing2 && ing2.data == rec.ingData2 && ing3.id == rec.ing3 && ing3.data == rec.ingData3 && ing4.id == rec.ing4 && ing4.data == rec.ingData4 && ing5.id == rec.ing5 && ing5.data == rec.ingData5 && ing6.id == rec.ing6 && ing6.data == rec.ingData6 && ing7.id == rec.ing7 && ing7.data == rec.ingData7 && ing8.id == rec.ing8 && ing8.data == rec.ingData8 && (res.id == 0 || res.id == rec.resId) && rec.level > 0 && rec.level < 2 && res.count + rec.resCount <= Item.getMaxStack(rec.resId, rec.resData) && this.data.energy >= 512) {
                ing0.count--;
                ing1.count--;
                ing2.count--;
                ing3.count--;
                ing4.count--;
                ing5.count--;
                ing6.count--;
                ing7.count--;
                ing8.count--;
                res.id = rec.resId;
                res.count += rec.resCount;
                res.data = rec.resData;
                this.data.energy -= 512;
            }
        }
        this.container.validateAll();
        if (this.data.craft && World.getThreadTime() % 1 == 0) {
            this.data.craft = false;
            this.container.validateAll();
        }
    }
}, isGenerator: function () {
    return false;
}, activate: MachineRegistry.activateMachine, deactivate: MachineRegistry.deactivateMachine, destroy: this.deactivate, energyTick: MachineRegistry.basicEnergyReceiveFunc});

