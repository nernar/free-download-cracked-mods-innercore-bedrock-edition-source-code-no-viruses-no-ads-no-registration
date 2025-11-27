Recipes.deleteRecipe({ id: 286, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 294, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 283, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 284, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 285, count: 1, data: -1 });

ItemDictionary.setItemCategory(286, "minecraft:tool.axe");
ItemDictionary.setItemCategory(286, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 286, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headAxeGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 294, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headHoeGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("spearGold");
Item.createItem("spearGold", "Gold Spear", { name: "spear_gold" });
ToolAPI.setTool(ItemID.spearGold, "golden", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.spearGold, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSpearGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("knifeGold");
Item.createItem("knifeGold", "Gold Knife", { name: "knife_gold" });
ToolAPI.setTool(ItemID.knifeGold, "golden", ToolType.sword);
ItemDictionary.setItemCategory(ItemID.knifeGold, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.knifeGold, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.knifeGold, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headKnifeGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 285, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headPickaxeGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 283, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSwordGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 284, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headShovelGold, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});