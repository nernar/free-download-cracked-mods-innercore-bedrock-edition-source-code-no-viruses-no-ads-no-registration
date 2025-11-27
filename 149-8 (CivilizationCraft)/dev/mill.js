IDRegistry.genBlockID("kineticGrindmill");
Block.createBlock("kineticGrindmill", [{name: "Grindmill", texture: [["mill_bottom", 0], ["mill_top", 0], ["mill_side", 0], ["mill_side", 0], ["mill_side", 0], ["mill_side", 0]], inCreative: true}], "opaque");
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(BlockID.kineticGrindmill, 1, 0, [[318, 0], [1, 0], [318, 0], [1, 0], [ItemID.gearWooden, 0], [1, 0], [318, 0], [1, 0], [318, 0]], 0);
});
var guiGrindmill = new UI.StandartWindow({standart: {header: {text: {text: "Grindmill"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 550, y: 150, bitmap: "gear_scale0", scale: 3.2}], elements: {"progressScale": {type: "scale", x: 550, y: 150, value: 0.5, bitmap: "gear_scale1", scale: 3.2}, "ingridient": {type: "slot", x: 450, y: 150}, "result": {type: "slot", x: 650, y: 150}}});
KineticMachine.registerPrototype(BlockID.kineticGrindmill, {defaultValues: {work: false, progress: 0, progressMax: 400}, getGuiScreen: function () {
    return guiGrindmill;
}, tick: function () {
    this.container.setScale("progressScale", this.data.progress / 400 || 0);
    this.container.validateAll();
    let ing = this.container.getSlot("ingridient");
    let res = this.container.getSlot("result");
    let rec = RecipeSystem.getGrinderRecipe(ing.id, ing.data);
    if (rec && this.data.work) {
        this.data.progress++;
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
}, type: function () {
    return "in";
}});

