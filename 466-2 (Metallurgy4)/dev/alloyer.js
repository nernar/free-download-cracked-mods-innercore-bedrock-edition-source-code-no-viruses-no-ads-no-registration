IMPORT("TileRender");
var GUI_SCALE = 4;
var ALYR_SCALE = 3.9;
IDRegistry.genBlockID("alloyer");
Block.createBlock("alloyer", [{name: "Alloyer", texture: [["alloyer_top", 0], ["alloyer_top", 0], ["alloyer_back_off", 0], ["alloyer_front_off", 0], ["alloyer_side", 0], ["alloyer_side", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.alloyer, "stone", 1);
Block.setDestroyLevel(BlockID.alloyer, 1);
TileRenderer.setStandartModel(BlockID.alloyer, [["alloyer_top", 0], ["alloyer_top", 0], ["alloyer_back_off", 0], ["alloyer_front_off", 0], ["alloyer_side", 0], ["alloyer_side", 0]], true);
TileRenderer.registerRotationModel(BlockID.alloyer, 0, [["alloyer_top", 0], ["alloyer_top", 0], ["alloyer_back_off", 0], ["alloyer_front_off", 0], ["alloyer_side", 0], ["alloyer_side", 0]]);
TileRenderer.registerRotationModel(BlockID.alloyer, 4, [["alloyer_top", 0], ["alloyer_top", 0], ["alloyer_back_on", 0], ["alloyer_front_on", 0], ["alloyer_side", 0], ["alloyer_side", 0]]);
var smelting_recipes = [];
function addSmeltingRecipe(result, source) {
    smelting_recipes.push({source: source, result: result});
}
Callback.addCallback("PreLoaded", function () {
    addSmeltingRecipe({id: ItemID.bronze_ingot, count: 4}, [{id: ItemID.tin_ingot, count: 1}, {id: ItemID.copper_ingot, count: 3}]);
    addSmeltingRecipe({id: ItemID.shadow_steel_ingot, count: 3}, [{id: ItemID.shadow_iron_ingot, count: 2}, {id: ItemID.lemurite_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.inolashite_ingot, count: 2}, [{id: ItemID.alduorite_ingot, count: 1}, {id: ItemID.ceruclase_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.brass_ingot, count: 4}, [{id: ItemID.copper_ingot, count: 2}, {id: ItemID.zinc_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.black_steel_ingot, count: 4}, [{id: ItemID.deep_iron_ingot, count: 3}, {id: ItemID.infuscolium_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.celenegil_ingot, count: 2}, [{id: ItemID.orichalcum_ingot, count: 1}, {id: ItemID.platinum_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.amordrine_ingot, count: 2}, [{id: ItemID.kalendrite_ingot, count: 1}, {id: ItemID.platinum_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.haderoth_ingot, count: 3}, [{id: ItemID.mithril_ingot, count: 1}, {id: ItemID.rubracium_ingot, count: 2}]);
    addSmeltingRecipe({id: ItemID.tartarite_ingot, count: 1}, [{id: ItemID.adamantine_ingot, count: 1}, {id: ItemID.atlarus_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.desichalkos_ingot, count: 2}, [{id: ItemID.eximite_ingot, count: 1}, {id: ItemID.meutoite_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.hepatizon_ingot, count: 2}, [{id: ItemID.infuscolium_ingot, count: 1}, {id: ItemID.steel_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.quicksilver_ingot, count: 2}, [{id: ItemID.mithril_ingot, count: 1}, {id: ItemID.silver_ingot, count: 1}]);
    addSmeltingRecipe({id: ItemID.steel_ingot, count: 1}, [{id: ItemID.manganese_ingot, count: 3}, {id: 265, count: 1}]);
    addSmeltingRecipe({id: ItemID.damascus_steel_ingot, count: 3}, [{id: ItemID.bronze_ingot, count: 2}, {id: 265, count: 1}]);
    addSmeltingRecipe({id: ItemID.electrum_ingot, count: 1}, [{id: ItemID.silver_ingot, count: 1}, {id: 266, count: 1}]);
    addSmeltingRecipe({id: ItemID.angmallen_ingot, count: 2}, [{id: 265, count: 1}, {id: 266, count: 1}]);
});
var guiAlloyer = new UI.StandartWindow({standart: {header: {text: {text: "Alloyer"}}, inventory: {standart: true}, background: {bitmap: "tech_bg"}}, drawing: [{type: "bitmap", x: 440, y: 75, bitmap: "alloyer_art", scale: GUI_SCALE}], elements: {"fuel": {type: "scale", x: 440, y: 267, direction: 1, value: 1, bitmap: "alloyer_fuel", scale: GUI_SCALE}, "heat": {type: "scale", x: 440, y: 75, direction: 1, value: 0.5, bitmap: "alloyer_heat", scale: GUI_SCALE}, "bar": {type: "scale", x: 440, y: 75, direction: 3, value: 1, bitmap: "alloyer_bar", scale: GUI_SCALE}, "slotSource1": {type: "slot", isTransparentBackground: true, needClean: true, bitmap: "default_slot", x: 713, y: 118}, "slotSource2": {type: "slot", isTransparentBackground: true, needClean: true, bitmap: "default_slot", x: 798, y: 118}, "slotFuel": {type: "slot", isTransparentBackground: true, needClean: true, bitmap: "default_slot", x: 748, y: 340}, "slotResult": {type: "slot", isTransparentBackground: true, needClean: true, bitmap: "default_slot", x: 534, y: 318}}});
MachineRegistry.registerPrototype(BlockID.alloyer, {defaultValues: {progress: 0, burn: 0, burnMax: 0, isActive: false}, getGuiScreen: function () {
    return guiAlloyer;
}, getTransportSlots: function () {
    return {input: ["slotSource1", "slotSource2", "slotFuel"], output: ["slotResult"]};
}, tick: function () {
    var sourceItems = {};
    var source;
    var result;
    for (var i = 1; i <= 2; i++) {
        var slot = this.container.getSlot("slotSource" + i);
        if (slot.id > 0 && slot.data == 0) {
            sourceItems[slot.id] = sourceItems[slot.id] || 0;
            sourceItems[slot.id] += slot.count;
        }
    }
    for (var i in smelting_recipes) {
        var recipe = smelting_recipes[i];
        source = recipe.source;
        var valid = true;
        for (var s in source) {
            var count = sourceItems[source[s].id];
            if (!count || count < source[s].count) {
                valid = false;
                break;
            }
        }
        if (valid) {
            result = recipe.result;
            break;
        }
    }
    if (this.data.burn > 0) {
        this.data.burn--;
    }
    var resultSlot = this.container.getSlot("slotResult");
    if (result && (resultSlot.id == result.id && resultSlot.count + result.count <= 64 || resultSlot.id == 0)) {
        if (this.data.burn == 0) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        if (this.data.burn > 0 && this.data.progress++ >= 400) {
            for (var s in source) {
                var count = source[s].count;
                for (var i = 1; i <= 2; i++) {
                    var slot = this.container.getSlot("slotSource" + i);
                    if (slot.id == source[s].id) {
                        var c = Math.min(count, slot.count);
                        slot.count -= c;
                        count -= c;
                    }
                }
            }
            resultSlot.id = result.id;
            resultSlot.count += result.count;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
    }
    if (this.data.burn > 0) {
        this.activate();
    } else {
        this.data.progress = 0;
        this.deactivate();
    }
    this.container.setScale("fuel", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("heat", this.data.progress / 400);
    this.container.setScale("bar", this.data.progress / 400);
}, getFuel: function (slotName) {
    var fuelSlot = this.container.getSlot(slotName);
    if (fuelSlot.id > 0) {
        var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
        if (burn) {
            if (LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)) {
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return burn;
            }
            fuelSlot.count--;
            this.container.validateSlot(slotName);
            return burn;
        }
    }
    return 0;
}}, true);
TileRenderer.setRotationPlaceFunction(BlockID.alloyer);

