var runeAltarDungeon = new UI.StandartWindow({standart: {header: {text: {text: "\u0440\u0443\u043d\u043d\u044b\u0439 \u0430\u043b\u0442\u0430\u0440\u044c"}}, inventory: {standart: true}}, drawing: [], elements: {"slotRes": {type: "slot", x: 630, y: 20, bitmap: "slot"}, "slot2": {type: "slot", x: 530, y: 120, bitmap: "slot"}, "slot3": {type: "slot", x: 430, y: 220, bitmap: "slot"}, "slot4": {type: "slot", x: 530, y: 320, bitmap: "slot"}, "slot5": {type: "slot", x: 730, y: 120, bitmap: "slot"}, "slot6": {type: "slot", x: 830, y: 220, bitmap: "slot"}, "slot7": {type: "slot", x: 730, y: 320, bitmap: "slot"}, "slot1": {type: "slot", x: 630, y: 220, bitmap: "slot"}}});
IDRegistry.genBlockID("runeAltarDungeon");
Block.createBlock("runeAltarDungeon", [{name: "runeAltarDungeon", texture: [["nis", 0], ["vverx1", 0], ["ctoronS", 0], ["storonO", 0], ["storonM", 0], ["ctoronl", 0]], inCreative: true}]);
Translation.addTranslation("runeAltarDungeon", {ru: "\u0440\u0443\u043d\u043d\u044b\u0439 \u0430\u043b\u0442\u0430\u0440\u044c"});
Render.setRitualAltarRender(BlockID.runeAltarDungeon, true);
TileEntity.registerPrototype(BlockID.runeAltarDungeon, {defaultValues: {progress: 0}, init: function () {
    this.animationItem = new Animation.Item(this.x + 0.5, this.y + 1.1, this.z + 0.5);
}, tick: function () {
    var slotResult = this.container.getSlot("slotResult");
    if (slotResult.id > 0) {
        this.animationItem.describeItem({id: slotResult.id, count: 1, data: slotResult.data, size: 0.5, rotation: [3.14 / 2, 0, 0]});
        this.animationItem.load();
    } else {
        this.animationItem.destroy();
    }
    var slotSource1 = this.container.getSlot("slot1");
    var slotSource2 = this.container.getSlot("slot2");
    var slotSource3 = this.container.getSlot("slot3");
    var slotSource4 = this.container.getSlot("slot4");
    var slotSource5 = this.container.getSlot("slot5");
    var slotSource6 = this.container.getSlot("slot6");
    var slotSource7 = this.container.getSlot("slot7");
    var slotResult = this.container.getSlot("slotRes");
    var input = [slotSource1, slotSource2, slotSource3, slotSource4, slotSource5, slotSource6, slotSource7];
    var output = RecipeRegistry.getAltarRecipe(input);
    if (output) {
        this.data.progress++;
        if (this.data.progress++ >= 40) {
            slotSource1.count--;
            slotSource2.count--;
            slotSource3.count--;
            slotSource4.count--;
            slotSource5.count--;
            slotSource6.count--;
            slotSource7.count--;
            slotSource2.id = output.backItem1.id;
            slotSource5.id = output.backItem2.id;
            slotSource2.data = output.backItem1.data;
            slotSource5.data = output.backItem2.data;
            slotSource2.count += output.backItem1.count;
            slotSource5.count += output.backItem2.count;
            slotResult.id = output.Result.id;
            slotResult.data = output.Result.data;
            slotResult.count += output.Result.count;
            this.data.progress = 0;
        }
    }
    this.container.validateAll();
}, getGuiScreen: function () {
    return runeAltarDungeon;
}});
const empty = 0;
RecipeRegistry.recipesAltarRecipe({Source1: {id: ItemID.armor5, data: 0, count: 1}, Source2: {id: ItemID.clitok1, data: 0, count: 1}, Source3: {id: ItemID.clitok1, data: 0, count: 1}, Source4: {id: ItemID.clitok, data: 0, count: 1}, Source5: {id: ItemID.clitok1, data: 0, count: 1}, Source6: {id: ItemID.clitok1, data: 0, count: 1}, Source7: {id: ItemID.clitok, data: 0, count: 1}, backItem1: {id: empty, data: 0, count: 0}, backItem2: {id: empty, data: 0, count: 0}, Result: {id: ItemID.armor1, data: 0, count: 1}});
RecipeRegistry.recipesAltarRecipe({Source1: {id: ItemID.armor6, data: 0, count: 1}, Source2: {id: ItemID.clitok1, data: 0, count: 1}, Source3: {id: ItemID.clitok1, data: 0, count: 1}, Source4: {id: ItemID.clitok1, data: 0, count: 1}, Source5: {id: ItemID.clitok1, data: 0, count: 1}, Source6: {id: ItemID.clitok1, data: 0, count: 1}, Source7: {id: ItemID.clitok1, data: 0, count: 1}, backItem1: {id: empty, data: 0, count: 0}, backItem2: {id: empty, data: 0, count: 0}, Result: {id: ItemID.armor2, data: 0, count: 1}});
RecipeRegistry.recipesAltarRecipe({Source1: {id: ItemID.armor7, data: 0, count: 1}, Source2: {id: ItemID.clitok1, data: 0, count: 1}, Source3: {id: ItemID.clitok, data: 0, count: 1}, Source4: {id: ItemID.clitok1, data: 0, count: 1}, Source5: {id: ItemID.clitok1, data: 0, count: 1}, Source6: {id: ItemID.clitok, data: 0, count: 1}, Source7: {id: ItemID.clitok1, data: 0, count: 1}, backItem1: {id: empty, data: 0, count: 0}, backItem2: {id: empty, data: 0, count: 0}, Result: {id: ItemID.armor3, data: 0, count: 1}});
RecipeRegistry.recipesAltarRecipe({Source1: {id: ItemID.armor8, data: 0, count: 1}, Source2: {id: ItemID.clitok, data: 0, count: 1}, Source3: {id: ItemID.clitok1, data: 0, count: 1}, Source4: {id: ItemID.clitok1, data: 0, count: 1}, Source5: {id: ItemID.clitok, data: 0, count: 1}, Source6: {id: ItemID.clitok1, data: 0, count: 1}, Source7: {id: ItemID.clitok1, data: 0, count: 1}, backItem1: {id: empty, data: 0, count: 0}, backItem2: {id: empty, data: 0, count: 0}, Result: {id: ItemID.armor4, data: 0, count: 1}});
RecipeRegistry.recipesAltarRecipe({Source1: {id: BlockID.rityal1, data: 0, count: 1}, Source2: {id: ItemID.crystalLightning, data: 0, count: 1}, Source3: {id: ItemID.clitok1, data: 0, count: 1}, Source4: {id: ItemID.crystalearth, data: 0, count: 1}, Source5: {id: ItemID.crystalWind, data: 0, count: 1}, Source6: {id: ItemID.clitok1, data: 0, count: 1}, Source7: {id: ItemID.crystalfire, data: 0, count: 1}, backItem1: {id: empty, data: 0, count: 0}, backItem2: {id: empty, data: 0, count: 0}, Result: {id: BlockID.rityal, data: 0, count: 1}});

