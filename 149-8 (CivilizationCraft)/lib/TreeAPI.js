var TREE_SOIL = {2: true, 3: true};
var TreeID = {"oak": "17:0", "spruce": "17:1", "birch": "17:2", "tropic": "17:3", "acacia": "162:0", "dark_oak": "162:1"};
var TreeAPI = {registerTreeID: function (name, id) {
    this.treeIds[name] = id;
}, createTree: function (obj) {
    if (!obj.leaves) {
        obj.leaves = 18;
    }
    if (!obj.log) {
        obj.log = 17;
    }
    if (!obj.sapling) {
        Logger.log("Missing sapling ID", "TreeAPI");
    }
    if (!obj.chance) {
        obj.chance = 1;
    }
    Block.setRandomTickCallback(obj.sapling, function (x, y, z, id, data) {
        if (TREE_SOIL[World.getBlockID(x, y - 1, z)] && Math.random() <= obj.chance) {
            for (i in obj.type) {
                World.setBlock(x + obj.type[i].x, y + obj.type[i].y, z + obj.type[i].z, obj.type[i].id);
            }
        }
    });
    if (obj.gen.canGen) {
        Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
            let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
            let c = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            if (Math.random() <= obj.gen.chance && TREE_SOIL[World.getBlockID(c.x, c.y, c.z)]) {
                for (am = 0; am < Math.random() * obj.gen.amount; am++) {
                    for (i in obj.type) {
                        World.setBlock(c.x + obj.type[i].x, c.y + obj.type[i].y + 1, c.z + obj.type[i].z, obj.type[i].id);
                    }
                }
            }
        });
    }
}};
registerAPIUnit("TreeAPI", TreeAPI);

