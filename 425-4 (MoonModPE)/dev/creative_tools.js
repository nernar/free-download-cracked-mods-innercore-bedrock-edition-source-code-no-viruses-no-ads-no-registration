IDRegistry.genItemID("stick_teleport");
IDRegistry.genItemID("stick_shuttle");
Item.createItem("stick_teleport", "Teleporting stick", {name: "stick", meta: 0}, {stack: 1});
Item.createItem("stick_shuttle", "Shuttle builder", {name: "stick", meta: 0}, {stack: 1});
Item.registerNameOverrideFunction(ItemID.stick_teleport, creative_overname);
Item.registerNameOverrideFunction(ItemID.stick_shuttle, creative_overname);
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.stick_shuttle) {
        buildShuttle(coords.x - 5, coords.y + 3, coords.z - 5);
    }
    if (item.id == ItemID.stick_teleport) {
        if (moon.isInDimension() == false) {
            moon.transferIn();
        } else {
            if (moon.isInDimension() == true) {
                moon.transferOut();
            }
        }
    }
});

