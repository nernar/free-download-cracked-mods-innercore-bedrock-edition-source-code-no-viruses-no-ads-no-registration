let radius, exclusion;
Callback.addCallback("LevelPreLoaded", function () {
    exclusion = __config__.getInteger("withoutBlock"), radius = __config__.getInteger("LDradius") - 1;
});
function LinkedDestroy(x, y, z, id, data, inCreative) {
    getBlockId = World.getBlock(x, y, z);
    if (getBlockId.id == id && getBlockId.data == data) {
        if (inCreative) {
            World.setBlock(x, y, z, 0, 0);
        } else {
            World.destroyBlock(x, y, z, true);
        }
    }
}
function damageTool(playerUid, id, data, extra, damage) {
    getSelectedSlot = Player.getSelectedSlotId();
    if (damage >= (Item.getMaxDamage(id) - data)) {
        new PlayerActor(playerUid).setInventorySlot(getSelectedSlot, 0, 1, 0, extra);
    } else {
        new PlayerActor(playerUid).setInventorySlot(getSelectedSlot, id, 1, data + damage, extra);
    }
}
let idDestroyBlock, dataDestroyBlock;
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    let countBlocks = 0;
    getItem = Entity.getCarriedItem(player);
    if (Entity.getSneaking(player)) {
        idDestroyBlock = block.id;
        dataDestroyBlock = block.data;
        for (let xCoordsDestruction = -radius; xCoordsDestruction <= radius; xCoordsDestruction++) {
            for (let yCoordsDestruction = -radius; yCoordsDestruction <= radius; yCoordsDestruction++) {
                for (let zCoordsDestruction = -radius; zCoordsDestruction <= radius; zCoordsDestruction++) {
                    if (Game.getGameMode() == 1) {
                        LinkedDestroy(coords.x + xCoordsDestruction, coords.y + yCoordsDestruction, coords.z + zCoordsDestruction, idDestroyBlock, dataDestroyBlock, true);
                    } else {
                        if (idDestroyBlock != exclusion) {
                            isBlock = World.getBlock(coords.x + xCoordsDestruction, coords.y + yCoordsDestruction, coords.z + zCoordsDestruction);
                            if (isBlock.id == idDestroyBlock && isBlock.data == dataDestroyBlock) {
                                countBlocks++;
                            }
                            LinkedDestroy(coords.x + xCoordsDestruction, coords.y + yCoordsDestruction, coords.z + zCoordsDestruction, idDestroyBlock, dataDestroyBlock, false);
                            if (ToolAPI.getToolLevel(getItem.id) >= 1) {
                                damageTool(player, getItem.id, getItem.data, getItem.extra, countBlocks);
                            }
                        }
                    }
                }
            }
        }
    }
});

