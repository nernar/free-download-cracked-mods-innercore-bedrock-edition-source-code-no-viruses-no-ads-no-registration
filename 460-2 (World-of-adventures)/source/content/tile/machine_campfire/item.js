IDRegistry.genItemID("campfire");
Item.createItem("campfire", "Campfire", { name: "spawn_campfire" });

Callback.addCallback("PreLoaded", function () {
    for (var i in ItemDictionary.getCategory("minecraft:wood")) {
        Recipes.addShaped({ id: ItemID.campfire, count: 1, data: 0 }, [
            "#b#",
            "bcb",
            "aaa"
        ], ['a', parseInt(i), -1, 'b', 280, -1, 'c', 263, -1]);
    }
});

Item.registerUseFunction("campfire", function (coords, item, block) {
    var place = coords.relative;
    if (World.getBlockID(place.x, place.y, place.z) == 0) {
        World.setBlock(place.x, place.y, place.z, BlockID.furnaceCampfireBlock, 0);
        Player.decreaseCarriedItem(1);
        World.addTileEntity(place.x, place.y, place.z);
    }
});