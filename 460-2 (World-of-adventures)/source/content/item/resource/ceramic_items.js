IDRegistry.genItemID("ceramicBowl");
IDRegistry.genItemID("clayBowl");

Item.createItem("ceramicBowl", "Ceramic Bowl", { name: "bowl_ceramic" });
Item.createItem("clayBowl", "Clay Bowl", { name: "bowl_clay" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayBowl }, { id: ItemID.ceramicBowl });
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayBowlRaw, count: 1, data: 0 }, [
        "00000",
        "00000",
        "00000",
        "10001",
        "01110"
    ]);
});

IDRegistry.genItemID("ceramicJug");
IDRegistry.genItemID("clayJug");

Item.createItem("ceramicJug", "Ceramic Jug", { name: "jug_ceramic" });
Item.createItem("clayJug", "Clay Jug", { name: "jug_clay" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayJug }, { id: ItemID.ceramicJug });
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayJug, count: 1, data: 0 }, [
        "00010",
        "01111",
        "10111",
        "01111",
        "00111"
    ]);
});

IDRegistry.genItemID("ceramicPot");
IDRegistry.genItemID("clayPot");

Item.createItem("ceramicPot", "Ceramic Pot", { name: "pot_ceramic" });
Item.createItem("clayPot", "Clay Pot", { name: "pot_clay" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayPot }, { id: ItemID.ceramicPot });
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayPot, count: 1, data: 0 }, [
        "10001",
        "10001",
        "10001",
        "10001",
        "11111"
    ]);
});

IDRegistry.genItemID("clayVessel");
IDRegistry.genItemID("ceramicVessel");

Item.createItem("ceramicVessel", "Ceramic Vessel", { name: "vessel_ceramic" });
Item.createItem("clayVessel", "Clay Vessel", { name: "vessel_clay" });

Callback.addCallback("PreLoaded", function () {
    Recipe.registerCeramicFurnaceRecipe({ id: ItemID.clayVessel }, { id: ItemID.ceramicVessel });
    Recipe.registerClayProcessingRecipe({ id: ItemID.clayVessel, count: 1, data: 0 }, [
        "01110",
        "11111",
        "11111",
        "11111",
        "01110"
    ]);
});