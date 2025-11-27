IDRegistry.genBlockID("mechCCGrinder");
Block.createBlock("mechCCGrinder", [{name: "Grinder", texture: [["primitiveGenerator", 1], ["mechGrinderTop", 0], ["primitiveGenerator", 1], ["primitiveGenerator", 1], ["primitiveGenerator", 1], ["primitiveGenerator", 1]], inCreative: true}], "opaque");
var guiGrinder = new UI.StandartWindow({standart: {header: {text: {text: "Grinder"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 250, bitmap: "energy_bar0", scale: 3.2}, {type: "bitmap", x: 450, y: 150, bitmap: "furnProg_0", scale: 3.2}], elements: {"energyScale": {type: "scale", x: 530, y: 250, direction: 0, value: 0.5, bitmap: "energy_bar1", scale: 3.2}, "progressScale": {type: "scale", x: 450, y: 150, value: 0.5, bitmap: "furnProg_1", scale: 3.2}, "textInfo": {type: "text", x: 500, y: 350, width: 300, height: 30, text: "0/"}, "ingridient": {type: "slot", x: 350, y: 150}, "result": {type: "slot", x: 550, y: 150}}});
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkCopper, data: 0}, {id: ItemID.dustCopper, count: 2, data: 0});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkTin, data: 0}, {id: ItemID.dustTin, count: 2, data: 0});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkCobalt, data: 0}, {id: ItemID.dustCobalt, count: 2, data: 0});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkDowniron, data: 0}, {id: ItemID.dustDowniron, count: 2, data: 0});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkDirium, data: 0}, {id: ItemID.dustDirium, count: 1, data: 0});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkIron, data: 0}, {id: ItemID.dustIron, count: 2, data: 0});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkRedstone, data: 0}, {id: 331, count: 4, data: 0});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkLapis, data: 0}, {id: 351, count: 3, data: 4});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkDiamond, data: 0}, {id: 264, count: 1, data: 0});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkEmerald, data: 0}, {id: 388, count: 1, data: 0});
    RecipeSystem.addGrinderRecipe({id: ItemID.oreChunkGold, data: 0}, {id: ItemID.dustGold, count: 1, data: 0});
    RecipeSystem.addRecipeToWorkbench(BlockID.mechCCGrinder, 1, 0, [[318, 0], [264, 0], [318, 0], [264, 0], [BlockID.machineBlockBasic, 0], [264, 0], [ItemID.circuitRedIron, 0], [ItemID.civWire, 0], [ItemID.circuitRedIron, 0]], 0);
});
MachineRegistry.registerPrototype(BlockID.mechCCGrinder, {defaultValues: {progress: 0, progressMax: 220}, getTransportSlots: function () {
    return {input: ["ingridient"], output: ["result"]};
}, getGuiScreen: function () {
    return guiGrinder;
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    this.container.setScale("progressScale", this.data.progress / this.data.progressMax || 0);
    this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    this.container.setText("textInfo", Math.round(this.data.energy) + "/" + energyStorage + " EU");
    this.container.validateAll();
    let ing = this.container.getSlot("ingridient");
    let res = this.container.getSlot("result");
    let rec = RecipeSystem.getGrinderRecipe(ing.id, ing.data);
    if (rec) {
        if (this.data.energy >= 10) {
            this.data.energy -= 10;
            this.data.progress++;
        }
        if (this.data.progress >= this.data.progressMax && (res.id == rec.id && res.data == rec.data && res.count + rec.count <= 64 || res.id == 0)) {
            res.id = rec.id;
            res.data = rec.data;
            res.count += rec.count;
            ing.count--;
            this.data.progress = 0;
        }
    } else {
        if (this.data.progress > 0) {
            this.data.progress = 0;
        }
    }
}, isGenerator: function () {
    return false;
}, getEnergyStorage: function () {
    return 10000;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});

