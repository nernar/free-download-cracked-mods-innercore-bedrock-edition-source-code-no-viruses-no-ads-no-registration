var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) || function (d, b) {
            for (var p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) {
                    d[p] = b[p];
                }
            }
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) {
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        }
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Translation.addTranslation("jepb.bartering", {en: "Piglin Bartering", ru: "\u041e\u0431\u043c\u0435\u043d \u0441 \u043f\u0438\u0433\u043b\u0438\u043d\u0430\u043c\u0438"});
Translation.addTranslation("jepb.chance", {en: "Chance: %s%%", ru: "\u0428\u0430\u043d\u0441: %s%%"});
var PIGLIN_BARTERING_LIST = [];
KEX.LootModule.createLootTableModifier("entities/piglin_barter").addJSPostModifyCallback(function (json) {
    PIGLIN_BARTERING_LIST.splice(0, PIGLIN_BARTERING_LIST.length);
    var totalWeight = 0;
    json.pools[0].entries.forEach(function (entry) {
        if (entry.type === "item") {
            var pattern_1 = {input: [{id: 266, count: 1, data: 0}], output: [{id: 0, count: 0, data: 0}], minCount: 1, maxCount: 1, chance: 0};
            if (typeof entry.weight === "number") {
                pattern_1.chance = entry.weight;
                totalWeight += entry.weight;
            }
            if (entry.name.startsWith("minecraft:")) {
                var id_1 = KEX.AddonUtils.getNumericIdFromIdentifier(entry.name.replace("minecraft:", ""));
                if (id_1 != -1) {
                    var out_1 = pattern_1.output[0];
                    out_1.id = id_1;
                    if (typeof entry.count === "number") {
                        pattern_1.minCount = entry.count;
                        pattern_1.maxCount = entry.count;
                    }
                    if (Array.isArray(entry.functions)) {
                        entry.functions.forEach(function (func) {
                            if (func.function === "set_count") {
                                if (typeof func.count === "object") {
                                    pattern_1.minCount = func.count.min;
                                    pattern_1.maxCount = func.count.max;
                                } else {
                                    pattern_1.minCount = func.count;
                                    pattern_1.maxCount = func.count;
                                }
                            }
                            if (func.function === "set_data" && typeof func.data === "number") {
                                out_1.data = func.data;
                            }
                            if (func.function === "set_damage" && typeof func.damage === "number") {
                                out_1.data = func.damage;
                            }
                            if (func.function === "specific_enchants") {
                                if (id_1 === VanillaItemID.book) {
                                    out_1.id = VanillaItemID.enchanted_book;
                                }
                                out_1.extra = new ItemExtraData();
                                func.enchants.forEach(function (ench) {
                                    if (typeof ench.id === "string" && typeof EEnchantment[ench.id.toUpperCase()] === "number") {
                                        out_1.extra.addEnchant(EEnchantment[ench.id.toUpperCase()], 1);
                                    }
                                });
                            }
                        });
                    }
                    if (out_1.id !== 0 && out_1.count === 0) {
                        out_1.count = 1;
                    }
                    PIGLIN_BARTERING_LIST.push(pattern_1);
                }
            }
        }
    });
    var divider = totalWeight / 100;
    PIGLIN_BARTERING_LIST.forEach(function (pattern) {
        return Math.round(pattern.chance / divider * 100) / 100;
    });
});
RV.RecipeTypeRegistry.register("piglin_bartering", new ((function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super.call(this, Translation.translate("jepb.bartering"), 266, FileTools.ReadJSON("".concat(__dir__, "/ui.json"))) || this;
        _this.getAllList = function () {
            return PIGLIN_BARTERING_LIST;
        };
        return _this;
    }
    class_1.prototype.onOpen = function (elements, recipe) {
        elements.get("textAmount").setBinding("text", recipe.minCount === recipe.maxCount ? recipe.minCount == 1 ? "" : "".concat(recipe.minCount) : "".concat(recipe.minCount, "-").concat(recipe.maxCount));
        elements.get("textChance").setBinding("text", java.lang.String.format(Translation.translate("jepb.chance"), [recipe.chance === 0 ? "<0.01" : "".concat(recipe.chance)]));
    };
    return class_1;
}(RV.RecipeType)))());

