IDRegistry.genItemID("fireIgniter");
Item.createItem("fireIgniter", "Igniter", { name: "fire_igniter" });

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.fireIgniter, count: 1, data: 0 }, [
        "a#",
        "#a",
    ], ['a', 280, -1]);
});

ItemDictionary.setItemCategory(ItemID.fireIgniter, "minecraft:tool.fire");

Item.setMaxDamage(ItemID.fireIgniter, 20);
Item.registerUseFunction("fireIgniter", function (coords, item, block) {
    var place = coords.relative;
    if (World.getBlockID(place.x, place.y, place.z) == 0) {
        World.setBlock(place.x, place.y, place.z, 51, 0);
        ToolAPI.breakCarriedTool(1);
    }
});