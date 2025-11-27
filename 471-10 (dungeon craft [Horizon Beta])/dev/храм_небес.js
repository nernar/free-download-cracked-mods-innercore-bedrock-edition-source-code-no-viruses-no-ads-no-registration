var structure = FileTools.ReadJSON(__dir__ + "/json/structure.json");
var generateItems3 = [];
var Structure3 = {addItems: function (id, random, count, data) {
    random = random || 1;
    count = count || {};
    count.min = count.min || 1;
    count.max = count.max || 1;
    data = data || 0;
    generateItems3.push({id: id, data: data, random: random, count: count});
}};
Structure3.addItems(264, 0.5, {max: 10});
Structure3.addItems(307, 0.5, {max: 1});
Structure3.addItems(313, 0.2, {max: 1});
Structure3.addItems(300, 0.8, {max: 1});
Structure3.addItems(302, 0.6, {max: 1});
Structure3.addItems(ItemID.clitok, 0.05, {max: 10});
function fillChest3(x, y, z) {
    var container = World.getContainer(x, y, z);
    var size = container.getSize();
    var random = Math.random();
    var slot = 0;
    for (var i in generateItems3) {
        if (random < generateItems3[i].random) {
            var count = Math.floor(Math.random() * (generateItems3[i].count.max - generateItems3[i].count.min)) + generateItems3[i].count.min;
            container.setSlot(slot, generateItems3[i].id, count, generateItems3[i].data);
            slot++;
        }
    }
}
function setStructure3(coords) {
}
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    var random = Math.random() * 6000;
    if (random <= 100) {
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 2) {
            if (World.getBlock(coords.x + 1, coords.y, coords.z).id == 2) {
                if (World.getBlock(coords.x - 1, coords.y, coords.z).id == 2) {
                    if (World.getBlock(coords.x, coords.y, coords.z + 1).id == 2) {
                        if (World.getBlock(coords.x, coords.y, coords.z - 1).id == 2) {
                            World.setBlock(coords.x, coords.y, coords.z, 54, 0);
                            World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.block1, 0);
                            World.setBlock(coords.x, coords.y + 1, coords.z - 1, 155, 0);
                            World.setBlock(coords.x - 1, coords.y + 1, coords.z, 155, 0);
                            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 1, 155, 0);
                            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 1, 155, 0);
                            World.setBlock(coords.x, coords.y + 1, coords.z + 1, 155, 0);
                            World.setBlock(coords.x - 1, coords.y + 1, coords.z, 155, 0);
                            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 1, 155, 0);
                            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 1, 155, 0);
                            World.setBlock(coords.x, coords.y + 1, coords.z + 1, 155, 0);
                            World.setBlock(coords.x - 1, coords.y + 1, coords.z, 155, 0);
                            World.setBlock(coords.x + 1, coords.y + 1, coords.z, 155, 0);
                            World.setBlock(coords.x + 2, coords.y + 1, coords.z, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 1, coords.z, 44, 6);
                            World.setBlock(coords.x + 2, coords.y + 1, coords.z + 1, 44, 6);
                            World.setBlock(coords.x + 2, coords.y + 1, coords.z - 1, 44, 6);
                            World.setBlock(coords.x + 2, coords.y + 1, coords.z + 2, 44, 6);
                            World.setBlock(coords.x + 2, coords.y + 1, coords.z - 2, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 1, coords.z, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 1, coords.z + 1, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 1, coords.z - 1, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 1, coords.z + 2, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 1, coords.z - 2, 44, 6);
                            World.setBlock(coords.x, coords.y + 1, coords.z + 2, 44, 6);
                            World.setBlock(coords.x + 1, coords.y + 1, coords.z + 2, 44, 6);
                            World.setBlock(coords.x - 1, coords.y + 1, coords.z + 2, 44, 6);
                            World.setBlock(coords.x, coords.y + 1, coords.z - 2, 44, 6);
                            World.setBlock(coords.x - 1, coords.y + 1, coords.z - 2, 44, 6);
                            World.setBlock(coords.x + 1, coords.y + 1, coords.z - 2, 44, 6);
                            World.setBlock(coords.x - 1, coords.y + 2, coords.z - 1, 155, 2);
                            World.setBlock(coords.x - 1, coords.y + 2, coords.z + 1, 155, 2);
                            World.setBlock(coords.x + 1, coords.y + 2, coords.z - 1, 155, 2);
                            World.setBlock(coords.x + 1, coords.y + 2, coords.z + 1, 155, 2);
                            World.setBlock(coords.x - 1, coords.y + 3, coords.z - 1, 155, 2);
                            World.setBlock(coords.x - 1, coords.y + 3, coords.z + 1, 155, 2);
                            World.setBlock(coords.x + 1, coords.y + 3, coords.z - 1, 155, 2);
                            World.setBlock(coords.x + 1, coords.y + 3, coords.z + 1, 155, 2);
                            World.setBlock(coords.x - 1, coords.y + 4, coords.z - 1, 155, 2);
                            World.setBlock(coords.x - 1, coords.y + 4, coords.z + 1, 155, 2);
                            World.setBlock(coords.x + 1, coords.y + 4, coords.z, 155, 2);
                            World.setBlock(coords.x - 1, coords.y + 4, coords.z, 155, 2);
                            World.setBlock(coords.x, coords.y + 4, coords.z + 1, 155, 2);
                            World.setBlock(coords.x, coords.y + 4, coords.z - 1, 155, 2);
                            World.setBlock(coords.x + 1, coords.y + 4, coords.z - 1, 155, 2);
                            World.setBlock(coords.x + 1, coords.y + 4, coords.z + 1, 155, 2);
                            World.setBlock(coords.x + 2, coords.y + 4, coords.z, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 4, coords.z, 44, 6);
                            World.setBlock(coords.x + 2, coords.y + 4, coords.z + 1, 44, 6);
                            World.setBlock(coords.x + 2, coords.y + 4, coords.z - 1, 44, 6);
                            World.setBlock(coords.x + 2, coords.y + 4, coords.z + 2, 44, 6);
                            World.setBlock(coords.x + 2, coords.y + 4, coords.z - 2, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 4, coords.z, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 4, coords.z + 1, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 4, coords.z - 1, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 4, coords.z + 2, 44, 6);
                            World.setBlock(coords.x - 2, coords.y + 4, coords.z - 2, 44, 6);
                            World.setBlock(coords.x, coords.y + 4, coords.z + 2, 44, 6);
                            World.setBlock(coords.x + 1, coords.y + 4, coords.z + 2, 44, 6);
                            World.setBlock(coords.x - 1, coords.y + 4, coords.z + 2, 44, 6);
                            World.setBlock(coords.x, coords.y + 4, coords.z - 2, 44, 6);
                            World.setBlock(coords.x + 1, coords.y + 4, coords.z - 2, 44, 6);
                            World.setBlock(coords.x - 1, coords.y + 4, coords.z - 2, 44, 6);
                            World.setBlock(coords.x, coords.y + 5, coords.z, 44, 6);
                            fillChest3(coords.x, coords.y, coords.z);
                        }
                    }
                }
            }
        }
    }
});

