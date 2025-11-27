var GUI_SCALE = 4;
var ALYR_SCALE = 3.9;
IDRegistry.genBlockID("crusher");
Block.createBlock("crusher", [{name: "Crusher", texture: [["crusher_top", 0], ["crusher_top", 0], ["crusher_back_off", 0], ["crusher_front_off", 0], ["crusher_side_off", 0], ["crusher_side_off", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.crusher, "stone", 1);
Block.setDestroyLevel(BlockID.crusher, 1);
TileRenderer.setStandartModel(BlockID.crusher, [["crusher_top", 0], ["crusher_top", 0], ["crusher_back_off", 0], ["crusher_front_off", 0], ["crusher_side_off", 0], ["crusher_side_off", 0]], true);
TileRenderer.registerRotationModel(BlockID.crusher, 0, [["crusher_top", 0], ["crusher_top", 0], ["crusher_back_off", 0], ["crusher_front_off", 0], ["crusher_side_off", 0], ["crusher_side_off", 0]]);
TileRenderer.registerRotationModel(BlockID.crusher, 4, [["crusher_top", 0], ["crusher_top", 0], ["crusher_back_on", 0], ["crusher_front_on", 0], ["crusher_side_on", 0], ["crusher_side_on", 0]]);
var crusher_recipes = [];
function addCrusherRecipe(result, source) {
    crusher_recipes.push({source: source, result: result});
}
Callback.addCallback("PreLoaded", function () {
    addCrusherRecipe({id: ItemID.copper_dust, count: 1}, [{id: ItemID.copper_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.manganese_dust, count: 1}, [{id: ItemID.manganese_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.tin_dust, count: 1}, [{id: ItemID.tin_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.zinc_dust, count: 1}, [{id: ItemID.zinc_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.prometheum_dust, count: 1}, [{id: ItemID.prometheum_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.deep_iron_dust, count: 1}, [{id: ItemID.deep_iron_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.infuscolium_dust, count: 1}, [{id: ItemID.infuscolium_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.oureclase_dust, count: 1}, [{id: ItemID.oureclase_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.rubracium_dust, count: 1}, [{id: ItemID.rubracium_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.carmot_dust, count: 1}, [{id: ItemID.carmot_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.orichalcum_dust, count: 1}, [{id: ItemID.orichalcum_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.silver_dust, count: 1}, [{id: ItemID.silver_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.adamantine_dust, count: 1}, [{id: ItemID.adamantine_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.atlarus_dust, count: 1}, [{id: ItemID.atlarus_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.astral_silver_dust, count: 1}, [{id: ItemID.astral_silver_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.platinum_dust, count: 1}, [{id: ItemID.platinum_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.mithril_dust, count: 1}, [{id: ItemID.mithril_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.ignatius_dust, count: 1}, [{id: ItemID.ignatius_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.shadow_iron_dust, count: 1}, [{id: ItemID.shadow_iron_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.lemurite_dust, count: 1}, [{id: ItemID.lemurite_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.midasium_dust, count: 1}, [{id: ItemID.midasium_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.vyroxeres_dust, count: 1}, [{id: ItemID.vyroxeres_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.alduorite_dust, count: 1}, [{id: ItemID.alduorite_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.ignatius_dust, count: 1}, [{id: ItemID.ignatius_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.kalendrite_dust, count: 1}, [{id: ItemID.kalendrite_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.vulcanite_dust, count: 1}, [{id: ItemID.vulcanite_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.ceruclase_dust, count: 1}, [{id: ItemID.ceruclase_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.sanguinite_dust, count: 1}, [{id: ItemID.sanguinite_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.eximite_dust, count: 1}, [{id: ItemID.eximite_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.meutoite_dust, count: 1}, [{id: ItemID.meutoite_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.bronze_dust, count: 1}, [{id: ItemID.bronze_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.inolashite_dust, count: 1}, [{id: ItemID.inolashite_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.brass_dust, count: 1}, [{id: ItemID.brass_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.steel_dust, count: 1}, [{id: ItemID.steel_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.shadow_steel_dust, count: 1}, [{id: ItemID.shadow_steel_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.black_steel_dust, count: 1}, [{id: ItemID.black_steel_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.damascus_steel_dust, count: 1}, [{id: ItemID.damascus_steel_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.electrum_dust, count: 1}, [{id: ItemID.electrum_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.celenegil_dust, count: 1}, [{id: ItemID.celenegil_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.amordrine_dust, count: 1}, [{id: ItemID.amordrine_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.haderoth_dust, count: 1}, [{id: ItemID.haderoth_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.tartarite_dust, count: 1}, [{id: ItemID.tartarite_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.desichalkos_dust, count: 1}, [{id: ItemID.desichalkos_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.angmallen_dust, count: 1}, [{id: ItemID.angmallen_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.hepatizon_dust, count: 1}, [{id: ItemID.hepatizon_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.quicksilver_dust, count: 1}, [{id: ItemID.quicksilver_ingot, count: 1}]);
    addCrusherRecipe({id: ItemID.gold_dust, count: 1}, [{id: 266, count: 1}]);
    addCrusherRecipe({id: ItemID.iron_dust, count: 1}, [{id: 265, count: 1}]);
    addCrusherRecipe({id: ItemID.copper_dust, count: 2}, [{id: BlockID.copper_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.tin_dust, count: 2}, [{id: BlockID.tin_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.manganese_dust, count: 2}, [{id: BlockID.manganese_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.zinc_dust, count: 2}, [{id: BlockID.zinc_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.silver_dust, count: 2}, [{id: BlockID.silver_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.platinum_dust, count: 2}, [{id: BlockID.platinum_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.prometheum_dust, count: 2}, [{id: BlockID.prometheum_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.deep_iron_dust, count: 2}, [{id: BlockID.deep_iron_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.infuscolium_dust, count: 2}, [{id: BlockID.infuscolium_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.oureclase_dust, count: 2}, [{id: BlockID.oureclase_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.astral_silver_dust, count: 2}, [{id: BlockID.astral_silver_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.carmot_dust, count: 2}, [{id: BlockID.carmot_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.mithril_dust, count: 2}, [{id: BlockID.mithril_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.rubracium_dust, count: 2}, [{id: BlockID.rubracium_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.orichalcum_dust, count: 2}, [{id: BlockID.orichalcum_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.adamantine_dust, count: 2}, [{id: BlockID.adamantine_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.atlarus_dust, count: 2}, [{id: BlockID.atlarus_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.ignatius_dust, count: 2}, [{id: BlockID.ignatius_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.shadow_iron_dust, count: 2}, [{id: BlockID.shadow_iron_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.lemurite_dust, count: 2}, [{id: BlockID.lemurite_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.midasium_dust, count: 2}, [{id: BlockID.midasium_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.vyroxeres_dust, count: 2}, [{id: BlockID.vyroxeres_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.ceruclase_dust, count: 2}, [{id: BlockID.ceruclase_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.alduorite_dust, count: 2}, [{id: BlockID.alduorite_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.kalendrite_dust, count: 2}, [{id: BlockID.kalendrite_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.vulcanite_dust, count: 2}, [{id: BlockID.vulcanite_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.sanguinite_dust, count: 2}, [{id: BlockID.sanguinite_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.eximite_dust, count: 2}, [{id: BlockID.eximite_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.meutoite_dust, count: 2}, [{id: BlockID.meutoite_ore, count: 1}]);
    addCrusherRecipe({id: ItemID.gold_dust, count: 2}, [{id: 14, count: 1}]);
    addCrusherRecipe({id: ItemID.iron_dust, count: 2}, [{id: 15, count: 1}]);
});
var guiCrusher = new UI.StandartWindow({standart: {header: {text: {text: "Crusher"}}, inventory: {standart: true}, background: {bitmap: "tech_bg"}}, drawing: [{type: "bitmap", x: 400, y: 75, bitmap: "crusher_art", scale: GUI_SCALE}], elements: {"fuel": {type: "scale", x: 400, y: 238, direction: 1, value: 1, bitmap: "crusher_fuel", scale: GUI_SCALE}, "heat": {type: "scale", x: 400, y: 259, direction: 1, value: 0.5, bitmap: "crusher_heat", scale: GUI_SCALE}, "work": {type: "scale", x: 400, y: 75, direction: 1, value: 0.5, bitmap: "crusher_bar", scale: GUI_SCALE}, "slotSource1": {type: "slot", isTransparentBackground: true, needClean: true, bitmap: "default_slot", x: 549, y: 103}, "slotFuel": {type: "slot", isTransparentBackground: true, needClean: true, bitmap: "default_slot", x: 822, y: 310}, "slotResult": {type: "slot", isTransparentBackground: true, needClean: true, bitmap: "default_slot", x: 574, y: 265}, "slotResult2": {type: "slot", isTransparentBackground: true, needClean: true, bitmap: "default_slot", x: 498, y: 265}, "slotResult3": {type: "slot", isTransparentBackground: true, needClean: true, bitmap: "default_slot", x: 422, y: 265}}});
MachineRegistry.registerPrototype(BlockID.crusher, {defaultValues: {progress: 0, burn: 0, burnMax: 0, isActive: false}, getGuiScreen: function () {
    return guiCrusher;
}, getTransportSlots: function () {
    return {input: ["slotSource1", "slotFuel"], output: ["slotResult", "slotResult2", "slotResult3"]};
}, tick: function () {
    var sourceItems = {};
    var source;
    var result;
    for (var i = 1; i <= 1; i++) {
        var slot = this.container.getSlot("slotSource" + i);
        if (slot.id > 0 && slot.data == 0) {
            sourceItems[slot.id] = sourceItems[slot.id] || 0;
            sourceItems[slot.id] += slot.count;
        }
    }
    for (var i in crusher_recipes) {
        var recipe = crusher_recipes[i];
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
    var resultSlot2 = this.container.getSlot("slotResult2");
    var resultSlot3 = this.container.getSlot("slotResult3");
    if (result && (resultSlot.id == result.id && resultSlot.count + result.count <= 64 || resultSlot.id == 0)) {
        if (this.data.burn == 0) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        if (this.data.burn > 0 && this.data.progress++ >= 250) {
            for (var s in source) {
                var count = source[s].count;
                for (var i = 1; i <= 1; i++) {
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
        if (result && (resultSlot2.id == result.id && resultSlot2.count + result.count <= 64 || resultSlot2.id == 0)) {
            if (this.data.burn == 0) {
                this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
            }
            if (this.data.burn > 0 && this.data.progress++ >= 250) {
                for (var s in source) {
                    var count = source[s].count;
                    for (var i = 1; i <= 1; i++) {
                        var slot = this.container.getSlot("slotSource" + i);
                        if (slot.id == source[s].id) {
                            var c = Math.min(count, slot.count);
                            slot.count -= c;
                            count -= c;
                        }
                    }
                }
                resultSlot2.id = result.id;
                resultSlot2.count += result.count;
                this.container.validateAll();
                this.data.progress = 0;
            }
        } else {
            if (result && (resultSlot3.id == result.id && resultSlot3.count + result.count <= 64 || resultSlot3.id == 0)) {
                if (this.data.burn == 0) {
                    this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
                }
                if (this.data.burn > 0 && this.data.progress++ >= 250) {
                    for (var s in source) {
                        var count = source[s].count;
                        for (var i = 1; i <= 1; i++) {
                            var slot = this.container.getSlot("slotSource" + i);
                            if (slot.id == source[s].id) {
                                var c = Math.min(count, slot.count);
                                slot.count -= c;
                                count -= c;
                            }
                        }
                    }
                    resultSlot3.id = result.id;
                    resultSlot3.count += result.count;
                    this.container.validateAll();
                    this.data.progress = 0;
                }
            } else {
                this.data.progress = 0;
            }
        }
    }
    if (this.data.burn > 0) {
        this.activate();
    } else {
        this.data.progress = 0;
        this.deactivate();
    }
    this.container.setScale("fuel", this.data.burn / this.data.burnMax || 0);
    this.container.setScale("heat", this.data.progress / 250);
    if (this.data.progress == 0) {
        this.container.setScale("work", 0);
    } else {
        this.container.setScale("work", 1);
    }
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
TileRenderer.setRotationPlaceFunction(BlockID.crusher);

