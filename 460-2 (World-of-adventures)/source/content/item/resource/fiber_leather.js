IDRegistry.genItemID("stripLeather");
IDRegistry.genItemID("cordageLeather");

Item.createItem("stripLeather", "Leather Strip", { name: "leather_strip" });
Item.createItem("cordageLeather", "Leather Cordage", { name: "cordage_leather" });

ItemDictionary.setItemCategory(ItemID.cordageLeather, "minecraft:cordage");

Callback.addCallback("PreLoaded", function () {
    for (var i in ItemDictionary.getCategory("minecraft:tool.knife"))
        Recipe.registerRecipeWithTool({ id: ItemID.stripLeather, count: 3, data: 0 }, [{ id: 334, data: 0 }], parseInt(i));
    Recipes.addShaped({ id: ItemID.cordageLeather, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.stripLeather, -1]);
});

Item.registerUseFunction(ItemID.stripLeather, function (coords, item, block) {
    let condition1 = Entity.getSneaking(Player.get());
    let condition2 = item.count >= 4;

    if (condition1 && condition2) {
        let position = Player.getPosition();
        World.drop(position.x, position.y, position.z, ItemID.cordageLeather, 1);
        Player.decreaseCarriedItem(4);
    }
});