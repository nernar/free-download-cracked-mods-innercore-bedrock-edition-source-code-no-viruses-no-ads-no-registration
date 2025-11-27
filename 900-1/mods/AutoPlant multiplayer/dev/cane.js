if (config.Hiring.typePress == true) {
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        var client = Network.getClientForPlayer(player);
        if (client != null) {
            var blockSource = BlockSource.getDefaultForActor(player);
            if (blockSource.getBlockId(coords.x, coords.y, coords.z) == 83 && blockSource.getBlockData(coords.x, coords.y, coords.z) == 0 && blockSource.getBlockId(coords.x, coords.y + 1, coords.z) == 83 && blockSource.getBlockData(coords.x, coords.y + 1, coords.z) == 0 && item.id != 351 && item.data != 15) {
                blockSource.setBlock(coords.x, coords.y, coords.z, 83, 0);
                blockSource.setBlock(coords.x, coords.y + 1, coords.z, 0, 0);
                blockSource.spawnDroppedItem(coords.x, coords.y + 1, coords.z, 338, 1, 0, null);
            }
        }
    });
}
if (config.Hiring.typeDestroy == true) {
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        var client = Network.getClientForPlayer(player);
        if (client != null) {
            var blockSource = BlockSource.getDefaultForActor(player);
            if (blockSource.getBlockId(coords.x, coords.y, coords.z) == 83 && blockSource.getBlockData(coords.x, coords.y, coords.z) == 0 && blockSource.getBlockId(coords.x, coords.y + 1, coords.z) == 83 && blockSource.getBlockData(coords.x, coords.y + 1, coords.z) == 0) {
                blockSource.setBlock(coords.x, coords.y, coords.z, 83, 0);
                blockSource.setBlock(coords.x, coords.y + 1, coords.z, 0, 0);
                blockSource.spawnDroppedItem(coords.x, coords.y + 1, coords.z, 338, 1, 0, null);
                Game.prevent();
            }
        }
    });
}

