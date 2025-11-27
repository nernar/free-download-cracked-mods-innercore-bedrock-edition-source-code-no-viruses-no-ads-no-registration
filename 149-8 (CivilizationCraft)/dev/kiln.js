IDRegistry.genBlockID("kilnBricks");
Block.createBlock("kilnBricks", [{name: "Kiln bricks", texture: [["kiln_bricks", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.kilnBricks, 8.5);
ToolAPI.registerBlockMaterial(BlockID.kilnBricks, "stone", 1, true);
IDRegistry.genBlockID("alloyKilnController");
Block.createBlockWithRotation("alloyKilnController", [{name: "Alloy kiln", texture: [["kiln_bricks", 0], ["kiln_controller_top", 0], ["kiln_bricks", 0], ["kiln_controller_front", 0], ["kiln_bricks", 0], ["kiln_bricks", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.alloyKilnController, 8.5);
ToolAPI.registerBlockMaterial(BlockID.alloyKilnController, "stone", 1, true);
var alloyKilnGUI = new UI.StandartWindow({standart: {header: {text: {text: "Kiln"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 800 - 200, y: 140, bitmap: "furnProg_0", scale: 3.2}, {type: "bitmap", x: 710 - 200, y: 230, bitmap: "furnBurn_0", scale: 3.2}], elements: {"ing0": {type: "slot", x: 650 - 200, y: 140}, "ing1": {type: "slot", x: 728 - 200, y: 140}, "fuel": {type: "slot", x: 700 - 200, y: 280}, "fuelScale": {type: "scale", x: 710 - 200, y: 230, bitmap: "furnBurn_1", scale: 3.2, direction: 1}, "progressScale": {type: "scale", x: 800 - 200, y: 140, bitmap: "furnProg_1", scale: 3.2}, "res": {type: "slot", x: 900 - 200, y: 140}}});
TileEntity.registerPrototype(BlockID.alloyKilnController, {defaultValues: {heat: 0, maxHeat: 1, progress: 0, progressMax: 200}, tick: function () {
    this.container.validateAll();
    this.container.setScale("fuelScale", this.data.heat / this.data.maxHeat);
    this.container.setScale("progressScale", this.data.progress / this.data.progressMax);
    let ing0 = this.container.getSlot("ing0");
    let ing1 = this.container.getSlot("ing1");
    let res = this.container.getSlot("res");
    let rec_ = RecipeSystem.getKilnRecipe();
    for (i in rec_) {
        let rec = rec_[i];
        if (ing0.id == rec.ing0 && ing0.count >= rec.ingCount0 && ing0.data == rec.ingData0 && ing1.id == rec.ing1 && ing1.count >= rec.ingCount1 && ing1.data == rec.ingData1 && (res.id == rec.resId || res.id == 0) && res.count + rec.resCount <= 64 && res.data == rec.resData) {
            if (this.data.heat > 0 && this.data.progress < this.data.progressMax) {
                this.data.progress++;
            }
            if (this.data.progress >= this.data.progressMax) {
                res.id = rec.resId;
                res.count += rec.resCount;
                res.data = rec.resData;
                ing0.count -= rec.ingCount0;
                ing1.count -= rec.ingCount1;
            }
        }
    }
    if (this.data.heat > 0) {
        this.data.heat--;
    }
    if (this.data.maxHeat > 0 && this.data.heat == 0) {
        this.data.maxHeat = 0;
    }
    for (i in RecipeSystem.getKilnRecipe()) {
        let rec = RecipeSystem.getKilnRecipe()[i];
        let fuelSlot = this.container.getSlot("fuel");
        if (ing0.id == rec.ing0 && ing1.id == rec.ing1 && Fuel.getBurnTime(fuelSlot.id, fuelSlot.data) && this.data.heat == 0) {
            this.data.maxHeat = Fuel.getBurnTime(fuelSlot.id, fuelSlot.data);
            this.data.heat = Fuel.getBurnTime(fuelSlot.id, fuelSlot.data);
            fuelSlot.count--;
        }
    }
    if (ing0.id == 0 && this.data.progress > 0) {
        this.data.progress = 0;
    }
    if (this.data.progress >= this.data.progressMax) {
        this.data.progress = 0;
    }
}, getGuiScreen: function () {
    return alloyKilnGUI;
}});

