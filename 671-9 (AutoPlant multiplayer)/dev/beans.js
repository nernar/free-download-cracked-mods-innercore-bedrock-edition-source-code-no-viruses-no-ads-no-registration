if (config.Hiring.typePress == true) {
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        var client = Network.getClientForPlayer(player);
        if (client != null) {
            if (block.id == 127 && block.data == 8) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1, 2), 3, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 127, 0);
            }
        }
        if (client != null) {
            if (block.id == 127 && block.data == 9) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1, 2), 3, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 127, 1);
            }
        }
        if (client != null) {
            if (block.id == 127 && block.data == 10) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1, 2), 3, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 127, 2);
            }
        }
        if (client != null) {
            if (block.id == 127 && block.data == 11) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1, 2), 3, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 127, 3);
            }
        }
    });
}
if (config.Hiring.typeDestroy == true) {
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        var client = Network.getClientForPlayer(player);
        if (client != null) {
            if (block.id == 127 && block.data == 8) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1, 2), 3, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 127, 0);
                Game.prevent();
            }
        }
        if (client != null) {
            if (block.id == 127 && block.data == 9) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1, 2), 3, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 127, 1);
                Game.prevent();
            }
        }
        if (client != null) {
            if (block.id == 127 && block.data == 10) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1, 2), 3, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 127, 2);
                Game.prevent();
            }
        }
        if (client != null) {
            if (block.id == 127 && block.data == 11) {
                var blockSource = BlockSource.getDefaultForActor(player);
                blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, 351, getRandomInt(1, 2), 3, null);
                blockSource.setBlock(coords.x, coords.y, coords.z, 127, 3);
                Game.prevent();
            }
        }
    });
}

