ItemDictionary.setItemCategory(18, "minecraft:leaves");
ItemDictionary.setItemCategory(161, "minecraft:leaves");

if (Options.DISABLE_LEAVES_SHAPE) {
    for (var i in ItemDictionary.getCategory("minecraft:leaves")) {
        ModelRender.setBlockEmptyShape(i, -1);
    }
}

Callback.addCallback("DestroyBlock", function (position, block, player) {
    if (ItemDictionary.isItemInCategory(block.id, "minecraft:leaves")) {
        if (Random.randomInteger(0, 10) < 5) {
            World.drop(position.x, position.y, position.z, 280, Random.randomInteger(0, 2), 0);
        }
    }
});