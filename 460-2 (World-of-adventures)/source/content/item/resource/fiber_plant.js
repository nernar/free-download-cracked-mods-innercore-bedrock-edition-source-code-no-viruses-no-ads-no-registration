IDRegistry.genItemID("fiberPlant");
IDRegistry.genItemID("cordagePlant");

Item.createItem("fiberPlant", "Plant Fiber", { name: "fiber_plant" });
Item.createItem("cordagePlant", "Plant Cordage", { name: "cordage_plant" });

ItemDictionary.setItemCategory(ItemID.cordagePlant, "minecraft:cordage");

Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: ItemID.cordagePlant, count: 1, data: 0 }, [
        "aa",
        "aa"
    ], ['a', ItemID.fiberPlant, -1]);
});

Block.registerDropFunction(106, function (coords, blockID, blockData, lvl, enchant) {
    if (!ItemDictionary.isItemInCategory(Player.getCarriedItem().id, "minecraft:tool.knife")) {
        return [[ItemID.fiberPlant, 1, 0]]
    }
    return [];
});

Item.registerUseFunction(ItemID.fiberPlant, function (coords, item, block) {
    let condition1 = Entity.getSneaking(Player.get());
    let condition2 = item.count >= 4;

    if(condition1 && condition2){
        let position = Player.getPosition();
        World.drop(position.x, position.y, position.z, ItemID.cordagePlant, 1);
        Player.decreaseCarriedItem(4);
    }
});