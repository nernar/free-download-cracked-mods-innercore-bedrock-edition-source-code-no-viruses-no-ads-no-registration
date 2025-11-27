IDRegistry.genItemID("ox_analyzer");
Item.createItem("ox_analyzer", "Atmosphere analyzer", {name: "ox_analyzer", meta: 0}, {stack: 1});
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.ox_analyzer && OXYGEN_MODE_ENABLED == true) {
        if (moon.isInDimension() == false) {
            Game.message("\xa7a" + "Result: Oxygen found.");
        } else {
            if (moon.isInDimension() == true) {
                if (findOxygenGenerator(coords.x - 5, coords.y - 5, coords.z - 5, 10) == true) {
                    Game.message("\xa7a" + "Result: Oxygen found.");
                } else {
                    Game.message("\xa7c" + "Result: Oxygen not found.");
                }
            }
        }
    }
});

