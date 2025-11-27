function setWood(coords) {
    dungeon.cube5x5({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 3, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.Foliage, cubeData: 0});
    dungeon.cube5x5({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 4, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.Foliage, cubeData: 0});
    dungeon.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 5, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.Foliage, cubeData: 0});
    World.setBlock(coords.x, coords.y, coords.z, BlockID.Breastya, 0);
    World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.Breastya, 0);
    World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.Breastya, 0);
    World.setBlock(coords.x, coords.y + 3, coords.z, BlockID.Breastya, 0);
    World.setBlock(coords.x, coords.y + 4, coords.z, BlockID.Breastya, 0);
    World.setBlock(coords.x, coords.y + 5, coords.z, BlockID.Breastya, 0);
    World.setBlock(coords.x, coords.y + 6, coords.z, BlockID.Breastya, 0);
    World.setBlock(coords.x + 1, coords.y + 6, coords.z, BlockID.Foliage, 0);
    World.setBlock(coords.x - 1, coords.y + 6, coords.z, BlockID.Foliage, 0);
    World.setBlock(coords.x, coords.y + 6, coords.z + 1, BlockID.Foliage, 0);
    World.setBlock(coords.x, coords.y + 6, coords.z - 1, BlockID.Foliage, 0);
    World.setBlock(coords.x, coords.y + 7, coords.z, BlockID.Foliage, 0);
    World.setBlock(coords.x + 1, coords.y + 7, coords.z, BlockID.Foliage, 0);
    World.setBlock(coords.x - 1, coords.y + 7, coords.z, BlockID.Foliage, 0);
    World.setBlock(coords.x, coords.y + 7, coords.z + 1, BlockID.Foliage, 0);
    World.setBlock(coords.x, coords.y + 7, coords.z - 1, BlockID.Foliage, 0);
}
Callback.addCallback("ItemUse", function (coords, item) {
    var item = Player.getCarriedItem();
    if (item.id == 351 && item.data == 15) {
        if (World.getBlock(coords.x, coords.y, coords.z) == BlockID.sap) {
            setWood(this);
        }
    }
});
TileEntity.registerPrototype(BlockID.sap, {defaultValues: {}, tick: function () {
    if (Math.random() * 1000 < 1) {
        setWood(this);
    }
}});

