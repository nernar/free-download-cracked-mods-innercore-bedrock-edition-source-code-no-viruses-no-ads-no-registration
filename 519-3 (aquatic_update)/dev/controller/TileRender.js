let TileRender = {
    setLogTypeRender: function (blockID) {
        Callback.addCallback("ItemUse", function (coords, item, block) {
            let place = coords.relative;
            let tile1 = World.getBlock(place.x, place.y, place.z);
            if (World.canTileBeReplaced(tile1.id, tile1.data) && item.id === blockID) {
                Game.prevent();
                if (coords.side == BlockSide.DOWN || coords.side == BlockSide.UP) {
                    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, 0);
                }
                else if (coords.side == BlockSide.NORTH || coords.side == BlockSide.SOUTH) {
                    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, 1);
                }
                else if (coords.side == BlockSide.WEST || coords.side == BlockSide.EAST) {
                    World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, item.id, 2);
                }
            }
            return true;
        })
    },
    setSlabTypeRender: function (blockID, fullBlockID) {
        Callback.addCallback("ItemUse", function (position, item, block) {
            if (item.id == blockID) {
                Game.prevent();
                if (block.id == item.id && block.data == 0 && position.side == BlockSide.UP) {
                    World.setBlock(position.x, position.y, position.z, fullBlockID, 0);
                    return true;
                }
                if (block.id == item.id && block.data == 1 && position.side == BlockSide.DOWN) {
                    World.setBlock(position.x, position.y, position.z, fullBlockID, 0);
                    return true;
                }
                let place = World.canTileBeReplaced(block.id, block.data) ? position : position.relative;
                let tileID = World.getBlockID(place.x, place.y, place.z);
                let tileDATA = World.getBlockData(place.x, place.y, place.z);

                if (position.vec.y - place.y < 0.5) {
                    if (tileID == blockID && tileDATA == 1) {
                        World.setBlock(place.x, place.y, place.z, fullBlockID, 0);
                        return true;
                    }
                    World.setBlock(place.x, place.y, place.z, item.id, item.data);
                }
                else {
                    if (tileID == blockID && tileDATA == 0) {
                        World.setBlock(place.x, place.y, place.z, fullBlockID, 0);
                        return true;
                    }
                    World.setBlock(place.x, place.y, place.z, item.id, 1);
                }
                return true;
            }
        })
        Block.setBlockShape(blockID, { x: 0, y: 0, z: 0 }, { x: 1, y: 0.5, z: 1 }, 0);
        Block.setBlockShape(blockID, { x: 0, y: 0.5, z: 0 }, { x: 1, y: 1, z: 1 }, 1);
    }
}