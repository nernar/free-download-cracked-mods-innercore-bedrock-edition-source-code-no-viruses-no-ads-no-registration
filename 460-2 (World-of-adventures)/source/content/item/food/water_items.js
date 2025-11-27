IDRegistry.genItemID("waterJug");
Item.createItem("waterJug", "Ceramic Jug [Water]", { name: "jug_water" });

IDRegistry.genItemID("waterPot");
Item.createItem("waterPot", "Ceramic Pot [Water]", { name: "pot_water" });

IDRegistry.genItemID("waterVessel");
Item.createItem("waterVessel", "Ceramic Vessel [Water]", { name: "vessel_water" });

IDRegistry.genItemID("bucketWooden");
Item.createItem("bucketWooden", "Wooden Bucket", { name: "bucket_wooden" });

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.bucketWooden, count: 1, data: 0 }, [
        "###",
        "a#a",
        "#a#",
    ], ['a', 280, -1]);
});

IDRegistry.genItemID("bucketWaterWooden");
Item.createItem("bucketWaterWooden", "Wooden Bucket [Water]", { name: "bucket_wooden_water" });

Item.setLiquidClip(ItemID.ceramicJug, true);
Item.setLiquidClip(ItemID.ceramicPot, true);
Item.setLiquidClip(ItemID.ceramicVessel, true)
Item.setLiquidClip(ItemID.bucketWooden, true)

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.ceramicJug && (block.id == 8 || block.id == 9)) {
        Player.decreaseCarriedItem(1);
        Player.addItemToInventory(ItemID.waterJug, 1, 0);
    }
    else if (item.id == ItemID.waterJug) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            Player.decreaseCarriedItem(1);
            Player.addItemToInventory(ItemID.ceramicJug, 1, 0);

            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == 0 && Entity.getSneaking(Player.get())) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.ceramicPot && (block.id == 8 || block.id == 9)) {
        Player.decreaseCarriedItem(1);
        Player.addItemToInventory(ItemID.waterPot, 1, 0);
    }
    else if (item.id == ItemID.waterPot) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            Player.decreaseCarriedItem(1);
            Player.addItemToInventory(ItemID.ceramicPot, 1, 0);

            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.ceramicVessel && (block.id == 8 || block.id == 9)) {
        Player.decreaseCarriedItem(1);
        Player.addItemToInventory(ItemID.waterVessel, 1, 0);
    }
    else if (item.id == ItemID.waterVessel) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            Player.decreaseCarriedItem(1);
            Player.addItemToInventory(ItemID.ceramicVessel, 1, 0);

            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});

Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.bucketWooden && (block.id == 8 || block.id == 9)) {
        Player.decreaseCarriedItem(1);
        Player.addItemToInventory(ItemID.bucketWaterWooden, 1, 0);
    }
    else if (item.id == ItemID.bucketWaterWooden) {
        let thirst = ThirstScale.getPlayerThirst();
        if (thirst < 20) {
            Player.decreaseCarriedItem(1);
            Player.addItemToInventory(ItemID.bucketWooden, 1, 0);

            thirst += ThirstScale.THIRST_WATER_RESTORES;
            if (thirst > 20) thirst = 20;
            ThirstScale.setPlayerThirst(thirst);
        }
    }
});