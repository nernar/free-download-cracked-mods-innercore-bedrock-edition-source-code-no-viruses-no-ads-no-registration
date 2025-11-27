Recipes.deleteRecipe({ id: 256, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 257, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 258, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 267, count: 1, data: -1 });
Recipes.deleteRecipe({ id: 292, count: 1, data: -1 });

ItemDictionary.setItemCategory(258, "minecraft:tool.axe");
ItemDictionary.setItemCategory(258, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 258, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headAxeIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 292, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headHoeIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("spearIron");
Item.createItem("spearIron", "Iron Spear", { name: "spear_iron" });
ToolAPI.setTool(ItemID.spearIron, "iron", ToolType.sword);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.spearIron, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSpearIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

IDRegistry.genItemID("knifeIron");
Item.createItem("knifeIron", "Iron Knife", { name: "knife_iron" });
ToolAPI.setTool(ItemID.knifeIron, "iron", ToolType.sword);
ItemDictionary.setItemCategory(ItemID.knifeIron, "minecraft:tool.axe");
ItemDictionary.setItemCategory(ItemID.knifeIron, "minecraft:tool.knife");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.knifeIron, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headKnifeIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 257, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headPickaxeIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 267, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headSwordIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: 251, count: 1, data: 0 }, [
        "a",
        "b",
        "c"
    ], ['a', ItemID.headShovelIron, -1, 'b', ItemID.rope, -1, 'c', 280, 0]);
});