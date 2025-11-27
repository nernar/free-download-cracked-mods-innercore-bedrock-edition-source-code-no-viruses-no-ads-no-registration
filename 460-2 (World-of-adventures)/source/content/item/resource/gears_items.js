IDRegistry.genItemID("gearWooden");
Item.createItem("gearWooden", "Wooden Gear", { name: "gear_wood", meta: 0 });

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.gearWooden, count: 1, data: 0 }, [
        "#a#",
        "a#a",
        "#a#"
    ], [ 'a', 280, 0 ]);
});