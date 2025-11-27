IDRegistry.genBlockID("board2");
Block.createBlock("board2", [{name: "board", texture: [["board", 0]], inCreative: false}]);
Block.setDestroyTime(BlockID.board2, 9999999999999);
IDRegistry.genBlockID("brickD2");
Block.createBlock("brickD2", [{name: "brick", texture: [["brick2", 0]], inCreative: false}]);
Block.setDestroyTime(BlockID.brickD2, 9999999999999);
var generateCok = [];
var StructureCok = {addItems: function (id, random, count, data) {
    random = random || 1;
    count = count || {};
    count.min = count.min || 1;
    count.max = count.max || 1;
    data = data || 0;
    generateCok.push({id: id, data: data, random: random, count: count});
}};
StructureCok.addItems(421, 0.5, {max: 9});
StructureCok.addItems(264, 1, {max: 16});
StructureCok.addItems(399, 0.5, {max: 1});
StructureCok.addItems(368, 0.8, {max: 16});
StructureCok.addItems(396, 0.5, {max: 18});
StructureCok.addItems(388, 0.3, {max: 2});
StructureCok.addItems(ItemID.clitok, 0.5, {max: 32});
StructureCok.addItems(ItemID.amylet, 0.3, {max: 1});
StructureCok.addItems(ItemID.armor1, 0.05, {max: 1});
StructureCok.addItems(ItemID.armor2, 0.05, {max: 1});
StructureCok.addItems(ItemID.armor3, 0.05, {max: 1});
StructureCok.addItems(ItemID.armor4, 0.05, {max: 1});
StructureCok.addItems(ItemID.koin_1, 0.05, {max: 4});
StructureCok.addItems(ItemID.bookxp, 0.06, {max: 5});
function fillChestCok(x, y, z) {
    var container = World.getContainer(x, y, z);
    var size = container.getSize();
    var random = Math.random();
    var slot = 0;
    for (var i in generateCok) {
        if (random < generateCok[i].random) {
            var count = Math.floor(Math.random() * (generateCok[i].count.max - generateCok[i].count.min)) + generateCok[i].count.min;
            container.setSlot(slot, generateCok[i].id, count, generateCok[i].data);
            slot++;
        }
    }
}
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 20;
    if (random <= 1) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2) {
            dungeon.cube3x3({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.board2, cubeData: 2});
            World.setBlock(coords.x, coords.y, coords.z + 2, BlockID.board2, 0);
            World.setBlock(coords.x - 1, coords.y, coords.z + 2, BlockID.board2, 0);
            World.setBlock(coords.x + 1, coords.y, coords.z + 2, BlockID.board2, 0);
            World.setBlock(coords.x, coords.y, coords.z - 2, BlockID.board2, 0);
            World.setBlock(coords.x - 1, coords.y, coords.z - 2, BlockID.board2, 0);
            World.setBlock(coords.x + 1, coords.y, coords.z - 2, BlockID.board2, 0);
            dungeon.cube3x3WallZ({coordsX: coords, plusX: true, X: 2, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 1, cubeID: BlockID.brickD2, cubeData: 0});
            dungeon.cube3x3WallZ({coordsX: coords, plusX: true, X: 2, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: false, Z: 1, cubeID: BlockID.brickD2, cubeData: 0});
            dungeon.cube3x3WallZ({coordsX: coords, plusX: false, X: 2, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 1, cubeID: BlockID.brickD2, cubeData: 0});
            dungeon.cube3x3WallZ({coordsX: coords, plusX: false, X: 2, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: false, Z: 1, cubeID: BlockID.brickD2, cubeData: 0});
            dungeon.cube5x5({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 4, coordsZ: coords, plusZ: true, Z: 0, cubeID: BlockID.brickD2, cubeData: 2});
            World.setBlock(coords.x, coords.y + 4, coords.z + 2, BlockID.brickD2, 0);
            World.setBlock(coords.x - 1, coords.y + 4, coords.z + 2, BlockID.brickD2, 0);
            World.setBlock(coords.x + 1, coords.y + 4, coords.z + 2, BlockID.brickD2, 0);
            World.setBlock(coords.x, coords.y + 4, coords.z - 2, BlockID.brickD2, 0);
            World.setBlock(coords.x - 1, coords.y + 4, coords.z - 2, BlockID.brickD2, 0);
            World.setBlock(coords.x + 1, coords.y + 4, coords.z - 2, BlockID.brickD2, 0);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 2, BlockID.brick3, 0);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BlockID.brick3, 0);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 2, BlockID.brick3, 0);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z - 2, BlockID.brick3, 0);
            World.setBlock(coords.x, coords.y + 2, coords.z - 2, BlockID.brickkey, 0);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z - 2, BlockID.brick3, 0);
            World.setBlock(coords.x + 1, coords.y + 3, coords.z - 2, BlockID.brick3, 0);
            World.setBlock(coords.x, coords.y + 3, coords.z - 2, BlockID.brick3, 0);
            World.setBlock(coords.x - 1, coords.y + 3, coords.z - 2, BlockID.brick3, 0);
            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 2, BlockID.brick3, 0);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BlockID.brick3, 0);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 2, BlockID.brick3, 0);
            World.setBlock(coords.x + 1, coords.y + 2, coords.z + 2, BlockID.brick3, 0);
            World.setBlock(coords.x, coords.y + 2, coords.z + 2, BlockID.brickkey, 0);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z + 2, BlockID.brick3, 0);
            World.setBlock(coords.x + 1, coords.y + 3, coords.z + 2, BlockID.brick3, 0);
            World.setBlock(coords.x, coords.y + 3, coords.z + 2, BlockID.brick3, 0);
            World.setBlock(coords.x - 1, coords.y + 3, coords.z + 2, BlockID.brick3, 0);
            World.setBlock(coords.x, coords.y + 1, coords.z, 54, 0);
            fillChestCok(coords.x, coords.y + 1, coords.z);
        }
    }
});

