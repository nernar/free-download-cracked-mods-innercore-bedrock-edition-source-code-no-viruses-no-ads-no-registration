if (config.Hiring.typePress == true) {
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        var client = Network.getClientForPlayer(player);
        if (client != null) {
            if (block.id == 142 && block.data == 3) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 392, getRandomInt(1, 3), 0, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 142, 0);
                if (Math.random() < 0.02) {
                    blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 394, 1, 0, null);
                }
            }
        }
    });
}
if (config.Hiring.typeDestroy == true) {
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        var client = Network.getClientForPlayer(player);
        if (client != null) {
            if (block.id == 142 && block.data == 3) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.setBlock(coords.x, coords.y, coords.z, 142, 0);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 392, getRandomInt(1, 3), 0, null);
                if (Math.random() < 0.02) {
                    blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 394, 1, 0, null);
                }
                Game.prevent();
            }
        }
    });
}

