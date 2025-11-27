IDRegistry.genItemID("ceramicMoldAxe");
IDRegistry.genItemID("ceramicMoldHoe");
IDRegistry.genItemID("ceramicMoldSpear");
IDRegistry.genItemID("ceramicMoldKnife");
IDRegistry.genItemID("ceramicMoldPickaxe");
IDRegistry.genItemID("ceramicMoldSword");
IDRegistry.genItemID("ceramicMoldShovel");
IDRegistry.genItemID("ceramicMoldIngot");

IDRegistry.genItemID("clayMoldAxe");
IDRegistry.genItemID("clayMoldHoe");
IDRegistry.genItemID("clayMoldSpear");
IDRegistry.genItemID("clayMoldKnife");
IDRegistry.genItemID("clayMoldPickaxe");
IDRegistry.genItemID("clayMoldSword");
IDRegistry.genItemID("clayMoldShovel");
IDRegistry.genItemID("clayMoldIngot");

Item.createItem("ceramicMoldAxe", "Ceramic Axe Mold", { name: "mold_ceramic_axe" });
Item.createItem("ceramicMoldHoe", "Ceramic Hoe Mold", { name: "mold_ceramic_hoe" });
Item.createItem("ceramicMoldSpear", "Ceramic Spear Mold", { name: "mold_ceramic_spear" });
Item.createItem("ceramicMoldKnife", "Ceramic Knife Mold", { name: "mold_ceramic_knife" });
Item.createItem("ceramicMoldPickaxe", "Ceramic Pickaxe Mold", { name: "mold_ceramic_pickaxe" });
Item.createItem("ceramicMoldSword", "Ceramic Sword Mold", { name: "mold_ceramic_sword" });
Item.createItem("ceramicMoldShovel", "Ceramic Shovel Mold", { name: "mold_ceramic_shovel" });
Item.createItem("ceramicMoldIngot", "Ceramic Ingot Mold", { name: "mold_ceramic_ingot" });

Item.createItem("clayMoldAxe", "Clay Axe Mold", { name: "mold_clay_axe" });
Item.createItem("clayMoldHoe", "Clay Hoe Mold", { name: "mold_clay_hoe" });
Item.createItem("clayMoldSpear", "Clay Spear Mold", { name: "mold_clay_spear" });
Item.createItem("clayMoldKnife", "Clay Knife Mold", { name: "mold_clay_knife" });
Item.createItem("clayMoldPickaxe", "Clay Pickaxe Mold", { name: "mold_clay_pickaxe" });
Item.createItem("clayMoldSword", "Clay Sword Mold", { name: "mold_clay_sword" });
Item.createItem("clayMoldShovel", "Clay Shovel Mold", { name: "mold_clay_shovel" });
Item.createItem("clayMoldIngot", "Clay Ingot Mold", { name: "mold_clay_ingot" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldAxe }, { id: ItemID.ceramicMoldAxe });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldHoe }, { id: ItemID.ceramicMoldHoe });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldSpear }, { id: ItemID.ceramicMoldSpear });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldKnife }, { id: ItemID.ceramicMoldKnife });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldPickaxe }, { id: ItemID.ceramicMoldPickaxe });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldSword }, { id: ItemID.ceramicMoldSword });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldShovel }, { id: ItemID.ceramicMoldShovel });
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayMoldIngot }, { id: ItemID.ceramicMoldIngot });

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldAxe, count: 1, data: 0 }, [
        "10111",
        "00001",
        "00000",
        "00001",
        "10111"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldAxe, count: 1, data: 0 }, [
        "11101",
        "10000",
        "00000",
        "10000",
        "11101"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldHoe, count: 1, data: 0 }, [
        "11111",
        "00000",
        "11100",
        "11111",
        "11111"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldHoe, count: 1, data: 0 }, [
        "11111",
        "00000",
        "00111",
        "11111",
        "11111"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSpear, count: 1, data: 0 }, [
        "00011",
        "00001",
        "00000",
        "10001",
        "11011"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSpear, count: 1, data: 0 }, [
        "11000",
        "10000",
        "00000",
        "10001",
        "11011"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldKnife, count: 1, data: 0 }, [
        "11011",
        "11001",
        "11001",
        "11001",
        "11001"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldKnife, count: 1, data: 0 }, [
        "11011",
        "10011",
        "10011",
        "10011",
        "10011"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldPickaxe, count: 1, data: 0 }, [
        "11111",
        "10001",
        "01110",
        "11111",
        "11111"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSword, count: 1, data: 0 }, [
        "11100",
        "11000",
        "10001",
        "10011",
        "01111"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSword, count: 1, data: 0 }, [
        "00111",
        "00011",
        "10001",
        "11001",
        "11110"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldSword, count: 1, data: 0 }, [
        "10001",
        "10001",
        "10001",
        "10001",
        "11011"
    ]);

    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldIngot, count: 1, data: 0 }, [
        "11111",
        "10011",
        "10011",
        "10011",
        "11111"
    ]);
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayMoldIngot, count: 1, data: 0 }, [
        "11111",
        "11001",
        "11001",
        "11001",
        "11111"
    ]);
});