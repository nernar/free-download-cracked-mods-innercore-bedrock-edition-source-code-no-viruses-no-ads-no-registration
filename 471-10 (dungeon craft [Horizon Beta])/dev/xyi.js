var structure = FileTools.ReadJSON(__dir__ + "/json/structure.json");
var generateItems1 = [];
var Structure1 = {addItems: function (id, random, count, data) {
    random = random || 1;
    count = count || {};
    count.min = count.min || 1;
    count.max = count.max || 1;
    data = data || 0;
    generateItems1.push({id: id, data: data, random: random, count: count});
}};
Structure1.addItems(264, 1, {max: 10});
Structure1.addItems(266, 0.9, {max: 15});
Structure1.addItems(265, 0.8, {max: 30});
Structure1.addItems(372, 0.3, {max: 15});
Structure1.addItems(384, 0.1, {max: 64});
Structure1.addItems(399, 0.01, {max: 1});
Structure1.addItems(ItemID.glas, 0.1, {max: 1});
Structure1.addItems(ItemID.magis_book, 0.7, {max: 1});
function fillChest1(x, y, z) {
    var container = World.getContainer(x, y, z);
    var size = container.getSize();
    var random = Math.random();
    var slot = 0;
    for (var i in generateItems1) {
        if (random < generateItems1[i].random) {
            var count = Math.floor(Math.random() * (generateItems1[i].count.max - generateItems1[i].count.min)) + generateItems1[i].count.min;
            container.setSlot(slot, generateItems1[i].id, count, generateItems1[i].data);
            slot++;
        }
    }
}
function setStructure(coords) {
    World.setBlock(coords.x, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z + 3, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z + 3, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z + 3, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z - 3, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z - 3, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z - 3, 4, 0);
    World.setBlock(coords.x + 3, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x + 3, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x + 3, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x - 3, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x - 3, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x - 3, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z + 4, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z + 4, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z + 4, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z + 4, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z + 4, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z - 4, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z - 4, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z - 4, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z - 4, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z - 4, 4, 0);
    World.setBlock(coords.x + 4, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x + 4, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x + 4, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x + 4, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x + 4, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x - 4, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x - 4, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x - 4, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x - 4, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x - 4, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z + 5, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z + 5, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z + 5, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z + 5, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z + 5, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z - 5, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z - 5, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z - 5, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z - 5, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z - 5, 4, 0);
    World.setBlock(coords.x + 5, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x + 5, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x + 5, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x + 5, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x + 5, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x - 5, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x - 5, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x - 5, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x - 5, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x - 5, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z + 6, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z + 6, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z + 6, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z + 6, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z + 6, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z - 6, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z - 6, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z - 6, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z - 6, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z - 6, 4, 0);
    World.setBlock(coords.x + 6, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x + 6, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x + 6, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x + 6, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x + 6, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x - 6, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x - 6, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x - 6, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x - 6, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x - 6, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z + 7, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z + 7, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z + 7, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z + 7, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z + 7, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z - 7, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z - 7, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z - 7, 4, 0);
    World.setBlock(coords.x + 2, coords.y, coords.z - 7, 4, 0);
    World.setBlock(coords.x - 2, coords.y, coords.z - 7, 4, 0);
    World.setBlock(coords.x + 7, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x + 7, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x + 7, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x + 7, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x + 7, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x - 7, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x - 7, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x - 7, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x - 7, coords.y, coords.z + 2, 4, 0);
    World.setBlock(coords.x - 7, coords.y, coords.z - 2, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z + 8, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z + 8, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z + 8, 4, 0);
    World.setBlock(coords.x, coords.y, coords.z - 8, 4, 0);
    World.setBlock(coords.x + 1, coords.y, coords.z - 8, 4, 0);
    World.setBlock(coords.x - 1, coords.y, coords.z - 8, 4, 0);
    World.setBlock(coords.x + 8, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x + 8, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x + 8, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x - 8, coords.y, coords.z, 4, 0);
    World.setBlock(coords.x - 8, coords.y, coords.z + 1, 4, 0);
    World.setBlock(coords.x - 8, coords.y, coords.z - 1, 4, 0);
    World.setBlock(coords.x, coords.y + 1, coords.z, 54, 0);
}
if (__config__.access("BETA") == true) {
    Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
        var random = Math.random() * 2000;
        if (random <= 100) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            if (World.getBlock(coords.x, coords.y, coords.z).id == 2) {
                if (World.getBlock(coords.x + 1, coords.y, coords.z).id == 2) {
                    if (World.getBlock(coords.x - 1, coords.y, coords.z).id == 2) {
                        if (World.getBlock(coords.x, coords.y, coords.z + 1).id == 2) {
                            if (World.getBlock(coords.x, coords.y, coords.z - 1).id == 2) {
                                setStructure(coords);
                            }
                        }
                    }
                }
            }
        }
    });
}

