IDRegistry.genBlockID("helpCraftingTable");
Block.createBlock("helpCraftingTable", [{name: "Recipes table", texture: [["log", 0]], inCreative: true}]);
Callback.addCallback("PostLoaded", function () {
    for (dataa = 0; dataa < 5; dataa++) {
        RecipeSystem.addRecipeToWorkbench(BlockID.helpCraftingTable, 1, 0, [[5, dataa], [5, dataa], [0, 0], [5, dataa], [5, dataa], [0, 0], [0, 0], [0, 0], [0, 0]]);
    }
});
var tableRender = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.helpCraftingTable, 0, tableRender);
var tableModel = BlockRenderer.createModel();
tableModel.addBox(0 / 16, 14 / 16, 0 / 16, 16 / 16, 1, 16 / 16, "log", 0);
tableModel.addBox(2 / 16, 0, 2 / 16, 14 / 16, 14 / 16, 14 / 16, "log", 0);
tableRender.addEntry(tableModel);
Callback.addCallback("DestroyBlockStart", function (c, b) {
    let entity = World.getTileEntity(c.x, c.y, c.z);
    if (entity && b.id == BlockID.helpCraftingTable) {
        for (sl = 0; sl < 9; sl++) {
            entity.container.setSlot("ing" + sl, 0, 0, 0);
            entity.container.setSlot("res", 0, 0, 0);
            entity.container.setSlot("slotTool", 0, 0, 0);
        }
        World.destroyBlock(c.x, c.y, c.z, false);
        World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, BlockID.helpCraftingTable, 1, 0);
    }
});
var halpGUI = new UI.StandartWindow({standart: {header: {text: {text: "Craft Helper"}}, background: {standart: true}}, elements: {"res": {type: "slot", visual: true, x: 592, y: 164}, "ing0": {type: "slot", visual: true, x: 364, y: 100}, "ing1": {type: "slot", visual: true, x: 428, y: 100}, "ing2": {type: "slot", visual: true, x: 492, y: 100}, "ing3": {type: "slot", visual: true, x: 364, y: 164}, "ing4": {type: "slot", visual: true, x: 428, y: 164}, "ing5": {type: "slot", visual: true, x: 492, y: 164}, "ing6": {type: "slot", visual: true, x: 364, y: 228}, "ing7": {type: "slot", visual: true, x: 428, y: 228}, "ing8": {type: "slot", visual: true, x: 492, y: 228}, "slotTool": {type: "slot", visual: true, x: 592 + 64, y: 228, bitmap: "slotTool"}, "buttonNxt": {type: "button", x: 492, y: 350, bitmap: "btn_next0", bitmap2: "btn_next1", scale: 3.2, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.page < RecipeSystem.workbench.length - 1) {
        tileEntity.data.page++;
    } else {
        tileEntity.data.page = 0;
    }
}}}, "buttonBck": {type: "button", x: 364, y: 350, bitmap: "btn_back0", bitmap2: "btn_back1", scale: 3.2, clicker: {onClick: function (container, tileEntity) {
    if (tileEntity.data.page > 0) {
        tileEntity.data.page--;
    } else {
        tileEntity.data.page = RecipeSystem.workbench.length - 1;
    }
}}}, "textInfo": {type: "text", x: 492 + (492 - 364), y: 400, width: 300, height: 30, text: "0/"}, "textLevel": {type: "text", x: 492 + (492 - 364), y: 300, width: 300, height: 30, text: "Level: "}}});
TileEntity.registerPrototype(BlockID.helpCraftingTable, {defaultValues: {page: 0}, getGuiScreen: function () {
    return halpGUI;
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
    let tool = this.container.getSlot("slotTool");
    let res = this.container.getSlot("res");
    let content = this.container.getGuiContent();
    this.container.validateAll();
    let rec_ = RecipeSystem.getWorkbenchRecipe();
    let p = this.data.page;
    this.container.setText("textInfo", this.data.page + 1 + "/" + rec_.length);
    this.container.setText("textLevel", "Level: " + rec_.level);
    if (content) {
        ing0.id = rec_[p].ing0;
        ing1.id = rec_[p].ing1;
        ing2.id = rec_[p].ing2;
        ing3.id = rec_[p].ing3;
        ing4.id = rec_[p].ing4;
        ing5.id = rec_[p].ing5;
        ing6.id = rec_[p].ing6;
        ing7.id = rec_[p].ing7;
        ing8.id = rec_[p].ing8;
        ing0.data = rec_[p].ingData0;
        ing1.data = rec_[p].ingData1;
        ing2.data = rec_[p].ingData2;
        ing3.data = rec_[p].ingData3;
        ing4.data = rec_[p].ingData4;
        ing5.data = rec_[p].ingData5;
        ing6.data = rec_[p].ingData6;
        ing7.data = rec_[p].ingData7;
        ing8.data = rec_[p].ingData8;
        res.id = rec_[p].resId;
        res.count = rec_[p].resCount;
        res.data = rec_[p].resData;
        tool.id = rec_[p].toolId;
        tool.count = 1;
        ing0.count = ing1.count = ing2.count = ing3.count = ing4.count = ing5.count = ing6.count = ing7.count = ing8.count = 1;
    }
}});

