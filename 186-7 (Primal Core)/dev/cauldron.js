IDRegistry.genBlockID("primal_cauldron");
Block.createBlock("primal_cauldron", [{"name": "Cauldron", "texture": [["cauldron", 0]], "inCreative": true}]);
var cauldron_render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.primal_cauldron, -1, cauldron_render);
var model = BlockRenderer.createModel();
model.addBox(12 / 16, 0 / 16, 12 / 16, 14 / 16, 2 / 16, 14 / 16, 4, 0);
model.addBox(12 / 16, 0 / 16, 2 / 16, 14 / 16, 2 / 16, 4 / 16, 4, 0);
model.addBox(2 / 16, 0 / 16, 2 / 16, 4 / 16, 2 / 16, 4 / 16, 4, 0);
model.addBox(2 / 16, 0 / 16, 12 / 16, 4 / 16, 2 / 16, 14 / 16, 4, 0);
model.addBox(2 / 16, 2 / 16, 2 / 16, 14 / 16, 3 / 16, 14 / 16, 42, 0);
model.addBox(1 / 16, 3 / 16, 2 / 16, 2 / 16, 12 / 16, 14 / 16, 42, 0);
model.addBox(2 / 16, 3 / 16, 1 / 16, 14 / 16, 12 / 16, 2 / 16, 42, 0);
model.addBox(14 / 16, 3 / 16, 2 / 16, 15 / 16, 12 / 16, 14 / 16, 42, 0);
model.addBox(2 / 16, 3 / 16, 14 / 16, 14 / 16, 12 / 16, 15 / 16, 42, 0);
model.addBox(2 / 16, 3 / 16, 2 / 16, 14 / 16, 9 / 16, 14 / 16, 9, 0);
cauldron_render.addEntry(model);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: BlockID.primal_cauldron, count: 1, data: 0}, ["f f", "fbf", "fff"], ["f", 265, 0, "b", 325, 0]);
    Cauldron.addRecipe([4, 13, 13, 4], {id: 87, data: 0, liquid: {name: "lava", amount: 4}});
    Cauldron.addRecipe([331, 348, 289, 263], {id: 377, data: 0, liquid: {name: "lava", amount: 0.5}});
    Cauldron.addRecipe([457, 457, 457, 281], {id: 459, data: 0, liquid: {name: "water", amount: 1.5}});
});
Block.setBlockShape(BlockID.primal_cauldron, {"x": 0.125, "y": 0, "z": 0.125}, {"x": 0.875, "y": 0.6875, "z": 0.875});
Block.setDestroyTime(BlockID.primal_cauldron, 0);
var CauldronGUI = new UI.StandartWindow({standart: {header: {text: {text: "Cauldron"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 580, y: 220, bitmap: "bubble_0", scale: 3.2}], elements: {"slotInput0": {type: "slot", x: 450, y: 200}, "slotInput1": {type: "slot", x: 510, y: 200}, "slotInput2": {type: "slot", x: 450, y: 260}, "slotInput3": {type: "slot", x: 510, y: 260}, "progressScale": {type: "scale", x: 580, y: 220, direction: 1, bitmap: "bubble_1", scale: 3.2}, "textInput": {type: "text", x: 450, y: 100, width: 100, height: 30, text: "Fluid: "}, "textAmount": {type: "text", x: 450, y: 150, width: 100, height: 30, text: "Amount: "}, "slotOutput": {type: "slot", x: 650, y: 230}}});
TileEntity.registerPrototype(BlockID.primal_cauldron, {defaultValues: {progress: 0}, getGuiScreen: function () {
    return CauldronGUI;
}, init: function () {
    this.liquidStorage.setLimit(null, 16);
}, tick: function () {
    this.container.setText("textInput", "Fluid: " + this.liquidStorage.getLiquidStored());
    this.container.setText("textAmount", "Amount: " + Math.round((this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())) * 1000) + "/16000 mB");
    let stored = this.liquidStorage.getLiquidStored();
    let ing0 = this.container.getSlot("slotInput0");
    let ing1 = this.container.getSlot("slotInput1");
    let ing2 = this.container.getSlot("slotInput2");
    let ing3 = this.container.getSlot("slotInput3");
    let output = this.container.getSlot("slotOutput");
    let recipe = Cauldron.getRecipe([ing0.id, ing1.id, ing2.id, ing3.id]);
    this.container.setScale("progressScale", this.data.progress / 500);
    if (recipe && stored == recipe.liquid.name && this.liquidStorage.getAmount(recipe.liquid.name) >= recipe.liquid.amount && (output.id == recipe.id && output.count < 64 && output.data == recipe.data || output.id == 0)) {
        if (World.getBlockID(this.x, this.y - 1, this.z) == 51) {
            this.data.progress++;
            if (this.data.progress >= 500) {
                this.data.progress = 0;
                output.id = recipe.id;
                output.data = recipe.data;
                output.count++;
                for (i = 0; i <= 3; i++) {
                    this.container.getSlot("slotInput" + i).count--;
                }
                this.liquidStorage.getLiquid(stored, recipe.liquid.amount);
                this.container.validateAll();
            }
        }
    } else {
        if (this.data.progress > 0) {
            this.data.progress = 0;
        }
    }
}, click: function () {
    let stored = this.liquidStorage.getLiquidStored();
    let item = Player.getCarriedItem();
    let liquid = LiquidRegistry.getItemLiquid(item.id, item.data);
    let empty = LiquidRegistry.getEmptyItem(item.id, item.data);
    if (liquid && (stored == liquid && this.liquidStorage.getAmount(stored) + 1 <= 16 || stored == null)) {
        Game.prevent();
        this.liquidStorage.addLiquid(liquid, 1);
        Player.addItemToInventory(empty.id, 1, empty.data);
        Player.decreaseCarriedItem();
    }
}});

