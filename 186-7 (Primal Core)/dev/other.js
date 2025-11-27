LiquidRegistry.registerLiquid("tannin", "Tannin", ["tannin_liquid"]);
var MTM = null;
ModAPI.addAPICallback("MTM_api", function (api) {
    MTM = api;
});
if (MTM) {
    IDRegistry.genItemID("steel_flake");
    Item.createItem("steel_flake", "Steel flake", {name: "steel_flake", meta: 0}, {stack: 64});
    for (i in workblades) {
        Recipes.addCraftToolRecipeItem({id: ItemID.steel_flake, count: 4, data: 0}, [{id: ItemID.ingotSteel, data: 0}], workblades[i]);
    }
}

