if (config.Hiring.typePress == true) {
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        var client = Network.getClientForPlayer(player);
        if (client != null) {
            if (block.id == 59 && block.data == 7) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 296, getRandomInt(1, 2), 0, null);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 295, getRandomInt(1, 2), 0, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 59, 0);
            }
        }
    });
}
if (config.Hiring.typeDestroy == true) {
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        var client = Network.getClientForPlayer(player);
        if (client != null) {
            if (block.id == 59 && block.data == 7) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.setBlock(coords.x, coords.y, coords.z, 59, 0);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 296, getRandomInt(1, 2), 0, null);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 295, getRandomInt(1, 2), 0, null);
                Game.prevent();
            }
        }
    });
}

