IDRegistry.genItemID("rope");
Item.createItem("rope", "Rope", { name: "rope" });

ItemDictionary.setItemCategory(ItemID.rope, "minecraft:cordage");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.rope, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.cordagePlant, -1]);
    Recipes.addShaped({ id: ItemID.rope, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.cordageLeather, -1]);
});