IDRegistry.genItemID("wandEmpty");
Item.createItem("wandEmpty", "Magic Wand [Empty]", { name: "wand_empty" });

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({ id: ItemID.wandEmpty, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "#a#"
    ], ['a', 331, -1, 'b', ItemID.staffMagic, 0]);
});