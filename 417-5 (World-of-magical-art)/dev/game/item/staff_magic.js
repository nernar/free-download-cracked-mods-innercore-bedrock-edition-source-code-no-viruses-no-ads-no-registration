IDRegistry.genItemID("staffMagic");
Item.createItem("staffMagic", "Magic Staff", { name: "staff_magic" });

ChargeItemRegistry.registerItem(ItemID.staffMagic, "Mana", 10000, 1);

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.staffMagic, count: 1, data: 0 }, [
        "aba",
        "#c#",
        "#c#"
    ], ['a', 331, -1, 'b', 265, 0, 'c', 280, 0]);
});