var generateLab = [];
var StructureLab = {addItems: function (id, random, count, data) {
    random = random || 1;
    count = count || {};
    count.min = count.min || 1;
    count.max = count.max || 1;
    data = data || 0;
    generateLab.push({id: id, data: data, random: random, count: count});
}};
StructureLab.addItems(264, 0.1, {max: 5});
StructureLab.addItems(266, 0.4, {max: 7});
StructureLab.addItems(295, 0.8, {max: 20});
StructureLab.addItems(291, 0.9, {max: 1});
StructureLab.addItems(261, 0.8, {max: 1});
StructureLab.addItems(262, 0.4, {max: 20});
StructureLab.addItems(297, 0.8, {max: 6});
StructureLab.addItems(322, 0.05, {max: 10});
function fillChestLab(x, y, z) {
    var container = World.getContainer(x, y, z);
    var size = container.getSize();
    var random = Math.random();
    var slot = 0;
    for (var i in generateLab) {
        if (random < generateLab[i].random) {
            var count = Math.floor(Math.random() * (generateLab[i].count.max - generateLab[i].count.min)) + generateLab[i].count.min;
            container.setSlot(slot, generateLab[i].id, count, generateLab[i].data);
            slot++;
        }
    }
}
var generateLab2 = [];
var StructureLab2 = {addItems: function (id, random, count, data) {
    random = random || 1;
    count = count || {};
    count.min = count.min || 1;
    count.max = count.max || 1;
    data = data || 0;
    generateLab2.push({id: id, data: data, random: random, count: count});
}};
StructureLab2.addItems(264, 0.15, {max: 5});
StructureLab2.addItems(266, 0.5, {max: 7});
StructureLab2.addItems(362, 0.75, {max: 20});
StructureLab2.addItems(294, 0.9, {max: 1});
StructureLab2.addItems(261, 0.85, {max: 1});
StructureLab2.addItems(262, 0.45, {max: 20});
StructureLab2.addItems(297, 0.8, {max: 8});
StructureLab2.addItems(322, 0.1, {max: 2});
StructureLab2.addItems(370, 0.03, {max: 4});
StructureLab2.addItems(369, 0.02, {max: 2});
StructureLab2.addItems(ItemID.clitok, 0.1, {max: 8});
function fillChestLab2(x, y, z) {
    var container = World.getContainer(x, y, z);
    var size = container.getSize();
    var random = Math.random();
    var slot = 0;
    for (var i in generateLab2) {
        if (random < generateLab2[i].random) {
            var count = Math.floor(Math.random() * (generateLab2[i].count.max - generateLab2[i].count.min)) + generateLab2[i].count.min;
            container.setSlot(slot, generateLab2[i].id, count, generateLab2[i].data);
            slot++;
        }
    }
}
var generateLab3 = [];
var StructureLab3 = {addItems: function (id, random, count, data) {
    random = random || 1;
    count = count || {};
    count.min = count.min || 1;
    count.max = count.max || 1;
    data = data || 0;
    generateLab3.push({id: id, data: data, random: random, count: count});
}};
StructureLab3.addItems(264, 1, {max: 7});
StructureLab3.addItems(266, 1, {max: 10});
StructureLab3.addItems(362, 1, {max: 20});
StructureLab3.addItems(294, 0.9, {max: 1});
StructureLab3.addItems(261, 0.85, {max: 1});
StructureLab3.addItems(262, 0.9, {max: 64});
StructureLab3.addItems(297, 0.8, {max: 8});
StructureLab3.addItems(322, 0.09, {max: 22});
StructureLab3.addItems(370, 0.7, {max: 5});
StructureLab3.addItems(369, 0.8, {max: 6});
StructureLab3.addItems(ItemID.clitok, 0.5, {max: 32});
StructureLab3.addItems(381, 0.5, {max: 5});
StructureLab3.addItems(382, 0.7, {max: 5});
StructureLab3.addItems(384, 1, {max: 32});
StructureLab3.addItems(ItemID.sword_1, 0.05, {max: 1});
StructureLab3.addItems(ItemID.pickaxe_1, 0.05, {max: 1});
StructureLab3.addItems(ItemID.keyDungeon, 0.4, {max: 1});
function fillChestLab3(x, y, z) {
    var container = World.getContainer(x, y, z);
    var size = container.getSize();
    var random = Math.random();
    var slot = 0;
    for (var i in generateLab3) {
        if (random < generateLab3[i].random) {
            var count = Math.floor(Math.random() * (generateLab3[i].count.max - generateLab3[i].count.min)) + generateLab3[i].count.min;
            container.setSlot(slot, generateLab3[i].id, count, generateLab3[i].data);
            slot++;
        }
    }
}
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 1000;
    if (random <= 1) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 2) {
            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 2, BlockID.altar1, 0);
            World.setBlock(coords.x, coords.y + 1, coords.z + 2, BlockID.altar1, 0);
            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 2, BlockID.altar1, 0);
            World.setBlock(coords.x, coords.y + 1, coords.z - 2, BlockID.altar1, 0);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z + 2, BlockID.a1, 0);
            World.setBlock(coords.x, coords.y + 2, coords.z + 2, BlockID.a1, 0);
            World.setBlock(coords.x - 1, coords.y + 2, coords.z - 2, BlockID.a1, 0);
            World.setBlock(coords.x, coords.y + 2, coords.z - 2, BlockID.a1, 0);
            dungeon.cube6x6({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 2});
            dungeon.cube3x3WallX({coordsX: coords, plusX: false, X: 2, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 3, cubeID: 4, cubeData: 0});
            dungeon.cube3x3WallX({coordsX: coords, plusX: true, X: 1, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 3, cubeID: 4, cubeData: 0});
            dungeon.cube3x3WallX({coordsX: coords, plusX: false, X: 2, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: false, Z: 3, cubeID: 4, cubeData: 0});
            dungeon.cube3x3WallX({coordsX: coords, plusX: true, X: 1, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: false, Z: 3, cubeID: 4, cubeData: 0});
            dungeon.cube3x3WallX({coordsX: coords, plusX: true, X: 3, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: false, Z: 2, cubeID: 4, cubeData: 0});
            dungeon.cube3x3WallX({coordsX: coords, plusX: true, X: 3, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 2, cubeID: 4, cubeData: 0});
            dungeon.cube6x6({coordsX: coords, plusX: true, X: 0, coordsY: coords, plusY: true, Y: 4, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 2});
            World.setBlock(coords.x - 3, coords.y + 1, coords.z + 2, 4, 0);
            World.setBlock(coords.x - 3, coords.y + 2, coords.z + 2, 4, 0);
            World.setBlock(coords.x - 3, coords.y + 3, coords.z + 2, 4, 0);
            World.setBlock(coords.x - 3, coords.y + 1, coords.z - 2, 4, 0);
            World.setBlock(coords.x - 3, coords.y + 2, coords.z - 2, 4, 0);
            World.setBlock(coords.x - 3, coords.y + 3, coords.z - 2, 4, 0);
            World.setBlock(coords.x + 4, coords.y, coords.z, 4, 0);
            World.setBlock(coords.x + 4, coords.y, coords.z + 1, 4, 0);
            World.setBlock(coords.x + 4, coords.y, coords.z - 1, 4, 0);
            World.setBlock(coords.x + 4, coords.y + 4, coords.z, 4, 0);
            World.setBlock(coords.x + 4, coords.y + 4, coords.z + 1, 4, 0);
            World.setBlock(coords.x + 4, coords.y + 4, coords.z - 1, 4, 0);
            var randomLab1 = Math.random() * 5;
            var randomLab2 = Math.random() * 10;
            var randomLab3 = Math.random() * 10;
            if (randomLab1 <= 5) {
                dungeon.cube5x5({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 2});
                dungeon.cube5x5({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 4, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 2});
                World.setBlock(coords.x + 7, coords.y, coords.z, 4, 0);
                World.setBlock(coords.x + 7, coords.y, coords.z + 1, 4, 0);
                World.setBlock(coords.x + 7, coords.y, coords.z - 1, 4, 0);
                World.setBlock(coords.x + 7, coords.y + 4, coords.z, 4, 0);
                World.setBlock(coords.x + 7, coords.y + 4, coords.z + 1, 4, 0);
                World.setBlock(coords.x + 7, coords.y + 4, coords.z - 1, 4, 0);
                World.setBlock(coords.x + 7, coords.y + 1, coords.z + 2, 4, 0);
                World.setBlock(coords.x + 7, coords.y + 2, coords.z + 2, 4, 0);
                World.setBlock(coords.x + 7, coords.y + 3, coords.z + 2, 4, 0);
                World.setBlock(coords.x + 7, coords.y + 1, coords.z - 2, 4, 0);
                World.setBlock(coords.x + 7, coords.y + 2, coords.z - 2, 4, 0);
                World.setBlock(coords.x + 7, coords.y + 3, coords.z - 2, 4, 0);
                dungeon.cube6x6({coordsX: coords, plusX: true, X: 11, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 2});
                World.setBlock(coords.x + 11, coords.y + 1, coords.z, 54, 0);
                fillChestLab(coords.x + 11, coords.y + 1, coords.z);
                dungeon.cube6x6({coordsX: coords, plusX: true, X: 11, coordsY: coords, plusY: true, Y: 4, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 2});
                dungeon.cube6x6Empty({coordsX: coords, plusX: true, X: 11, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 2});
                dungeon.cube6x6Empty({coordsX: coords, plusX: true, X: 11, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 2});
                dungeon.cube6x6Empty({coordsX: coords, plusX: true, X: 11, coordsY: coords, plusY: true, Y: 3, coordsZ: coords, plusZ: true, Z: 0, cubeID: 4, cubeData: 2});
                dungeon.cube3x3WallZ({coordsX: coords, plusX: true, X: 8, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 0, cubeID: 0, cubeData: 0});
                if (randomLab3 >= 1) {
                    dungeon.cube3x3WallX({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 2, cubeID: 4, cubeData: 0});
                }
                if (randomLab2 >= 6) {
                    dungeon.cube3x3WallX({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: false, Z: 2, cubeID: 4, cubeData: 0});
                }
                World.setBlock(coords.x + 8, coords.y + 1, coords.z - 2, 4, 0);
                World.setBlock(coords.x + 8, coords.y + 2, coords.z - 2, 4, 0);
                World.setBlock(coords.x + 8, coords.y + 3, coords.z - 2, 4, 0);
                World.setBlock(coords.x + 8, coords.y + 1, coords.z + 2, 4, 0);
                World.setBlock(coords.x + 8, coords.y + 2, coords.z + 2, 4, 0);
                World.setBlock(coords.x + 8, coords.y + 3, coords.z + 2, 4, 0);
            }
            if (randomLab2 <= 6) {
                dungeon.cube6x6({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: false, Z: 6, cubeID: 4, cubeData: 2});
                dungeon.cube6x6Empty({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: false, Z: 6, cubeID: 4, cubeData: 2});
                dungeon.cube6x6Empty({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: false, Z: 6, cubeID: 4, cubeData: 2});
                dungeon.cube6x6Empty({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 3, coordsZ: coords, plusZ: false, Z: 6, cubeID: 4, cubeData: 2});
                dungeon.cube3x3WallX({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: false, Z: 3, cubeID: 0, cubeData: 0});
                dungeon.cube6x6({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 4, coordsZ: coords, plusZ: false, Z: 6, cubeID: 4, cubeData: 2});
                World.setBlock(coords.x + 6, coords.y + 1, coords.z - 6, 54, 0);
                fillChestLab2(coords.x + 6, coords.y + 1, coords.z - 6);
            }
            if (randomLab3 <= 1) {
                dungeon.cube6x6({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 0, coordsZ: coords, plusZ: true, Z: 6, cubeID: 4, cubeData: 2});
                dungeon.cube6x6Empty({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 1, coordsZ: coords, plusZ: true, Z: 6, cubeID: 4, cubeData: 2});
                dungeon.cube6x6Empty({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 6, cubeID: 4, cubeData: 2});
                dungeon.cube6x6Empty({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 3, coordsZ: coords, plusZ: true, Z: 6, cubeID: 4, cubeData: 2});
                dungeon.cube3x3WallX({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 2, coordsZ: coords, plusZ: true, Z: 3, cubeID: 0, cubeData: 0});
                dungeon.cube6x6({coordsX: coords, plusX: true, X: 6, coordsY: coords, plusY: true, Y: 4, coordsZ: coords, plusZ: true, Z: 6, cubeID: 4, cubeData: 2});
                World.setBlock(coords.x + 6, coords.y + 1, coords.z + 6, 54, 0);
                fillChestLab3(coords.x + 6, coords.y + 1, coords.z + 6);
            }
        }
    }
});

