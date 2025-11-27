IDRegistry.genItemID("headAxeStone");
IDRegistry.genItemID("headHoeStone");
IDRegistry.genItemID("headSpearStone");
IDRegistry.genItemID("headShovelStone");
IDRegistry.genItemID("headKnifeStone");

Item.createItem("headAxeStone", "Stone Axe Blade", { name: "head_axe_stone" });
Item.createItem("headHoeStone", "Stone Hoe Blade", { name: "head_hoe_stone" });
Item.createItem("headSpearStone", "Stone Spear Tip", { name: "head_spear_stone" });
Item.createItem("headShovelStone", "Stone Shovel Bayonet", { name: "head_shovel_stone" });
Item.createItem("headKnifeStone", "Stone Knife Blade", { name: "head_knife_stone" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerStoneProcessingRecipe({ id: ItemID.headAxeStone, count: 1, data: 0 }, [
        "01000",
        "11110",
        "11111",
        "11110",
        "01000"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.headHoeStone, count: 1, data: 0 }, [
        "11111",
        "00011",
        "00000",
        "00000",
        "00000"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.headSpearStone, count: 1, data: 0 }, [
        "11100",
        "11110",
        "11111",
        "01110",
        "00100"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.headShovelStone, count: 1, data: 0 }, [
        "01110",
        "01110",
        "01110",
        "01110",
        "00100"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.bladeKnifeStone, count: 1, data: 0 }, [
        "10000",
        "11000",
        "11000",
        "11000",
        "11000"
    ]);

    Recipe.registerStoneProcessingRecipe({ id: ItemID.headKnifeStone, count: 2, data: 0 }, [
        "10001",
        "11011",
        "11011",
        "11011",
        "11011"
    ]);
});