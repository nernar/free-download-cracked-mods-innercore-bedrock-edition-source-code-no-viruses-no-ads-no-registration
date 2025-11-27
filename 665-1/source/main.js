var biomeLake = new CustomBiome("oasis.lake");
biomeLake.setCoverBlock(9, 0);
biomeLake.setSurfaceBlock(12, 0);
biomeLake.setTemperatureAndDownfall(1, 0.5);
biomeLake.setGrassColor(0.3, 1, 0.3);
var biomeOasis = new CustomBiome("oasis.oasis");
biomeOasis.setCoverBlock(2, 0);
biomeOasis.setSurfaceBlock(3, 0);
biomeOasis.setTemperatureAndDownfall(1, 0.4);
biomeOasis.setGrassColor(0.3, 1, 0.3);
/**
 * Generator settings
 */
var PALM_DENSITY = 4;
var GRASS_DENSITY = 10;
var OASIS_GENERATION_THRESHOLD = 0.88;
var LAKE_GENERATION_THRESHOLD = 0.93;
var OCTAVE_SCALE = 48;
/**
 * Biome map generation
 */
Callback.addCallback("GenerateBiomeMap", function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
    // Check if it is overworld
    if (dimensionId != 0) {
        return;
    }
    var cornerX = chunkX * 16;
    var cornerZ = chunkZ * 16;
    // Check if it is one of the deset biomes
    var biome = World.getBiomeMap(cornerX + 8, cornerZ + 8);
    if (biome != 2 && biome != 17 && biome != 130) {
        return;
    }
    // Check if the biome is likely to be generated inside this chunk
    if (GenerationUtils.getPerlinNoise(cornerX + 8, 0, cornerZ + 8, dimensionSeed, 1 / OCTAVE_SCALE, 2)
        < OASIS_GENERATION_THRESHOLD - 12 / OCTAVE_SCALE) {
        return;
    }
    // Biome map changes
    for (var x = cornerX; x < cornerX + 16; x++) {
        for (var z = cornerZ; z < cornerZ + 16; z++) {
            var noiseValue = GenerationUtils.getPerlinNoise(x, 0, z, dimensionSeed, 1 / OCTAVE_SCALE, 2);
            if (noiseValue > LAKE_GENERATION_THRESHOLD) {
                // Generate lakes
                World.setBiomeMap(x, z, biomeLake.id);
            }
            else if (noiseValue > OASIS_GENERATION_THRESHOLD) {
                // Generate surrounding landscape
                World.setBiomeMap(x, z, biomeOasis.id);
            }
        }
    }
});
/**
 * Mod generation
 */
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
    var cornerX = chunkX * 16;
    var cornerZ = chunkZ * 16;
    // Check if it is one of mod's biomes
    var biome = World.getBiome(cornerX + 8, cornerZ + 8);
    if (biome == biomeOasis.id) {
        for (var i = 0; i < GRASS_DENSITY; i++) {
            var coords = GenerationUtils.randomXZ(chunkX, chunkZ);
            coords = GenerationUtils.findHighSurface(coords.x, coords.z);
            var ground = World.getBlock(coords.x, coords.y, coords.z);
            if (ground.id == 2) {
                World.setBlock(coords.x, coords.y + 1, coords.z, 31, randomInt(1, 2));
            }
        }
        for (i = 0; i < PALM_DENSITY; i++) {
            coords = GenerationUtils.randomXZ(chunkX, chunkZ);
            coords = GenerationUtils.findHighSurface(coords.x, coords.z);
            ground = World.getBlock(coords.x, coords.y, coords.z);
            if (ground.id == 2) {
                ModGenerator.generatePalm(coords.x, coords.y + 1, coords.z);
            }
        }
    }
});
/**
 * Mod generation utility functions
 */
var ModGenerator = {
    _diagonals: [[1, 1], [1, -1], [-1, -1], [-1, 1]],
    _directions: [[1, 0], [0, 1], [-1, 0], [0, -1]],
    /**
     * Generates palm on the specified coordinates
     */
    generatePalm: function (x, y, z) {
        var height = randomInt(4, 6);
        // Trunk
        for (var i = 0; i < height - 1; i++) {
            World.setBlock(x, y + i, z, BlockID.palmLog, 0);
        }
        World.setBlock(x, y + height - 1, z, BlockID.palmLogFruitful, 0);
        World.setBlock(x, y + height, z, BlockID.palmLeaves, 0);
        for (var i = 0; i < 4; i++) {
            this._generatePalmLeavesRecursively(x, y + height, z, i, randomInt(1, 2));
            if (Math.random() > 0.5) {
                this.generateCoconut(x, y + height - 1, z);
            }
        }
    },
    generateCoconut: function (x, y, z) {
        var direction = this._directions[randomInt(0, 3)];
        World.setBlock(x + direction[0], y, z + direction[1], BlockID.coconutBlock, 0);
    },
    _generatePalmLeavesRecursively: function (x, y, z, direction, depth) {
        var dir = this._diagonals[direction];
        x += dir[0];
        y -= Math.round(Math.random());
        z += dir[1];
        // Generate only in the air
        var tile = World.getBlock(x, y, z);
        if (!World.canTileBeReplaced(tile.id, tile.data) != 0) {
            return;
        }
        World.setBlock(x, y, z, BlockID.palmLeaves, 0);
        // Generate only *depth* blocks
        if (depth-- > 0) {
            this._generatePalmLeavesRecursively(x, y, z, direction, depth);
        }
    }
};
// Callback.addCallback("ItemUse", function(coords, item, block){
//     if(item.id != ItemID.palmSapling){
//         ModGenerator.generatePalm(coords.relative.x, coords.relative.y, coords.relative.z);
//     }
// });
/**
 * ████████████████████████████████████████████████████████████████████████ *
 * █░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░█░░░░░░░░░░░░░░█
 * █░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
 * █░░▄▀░░░░░░▄▀░░█░░▄▀░░░░░░▄▀░░█░░▄▀░░░░░░░░░░█░░░░▄▀░░░░█░░▄▀░░░░░░░░░░█
 * █░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░█░░▄▀░░███████████░░▄▀░░███░░▄▀░░█████████
 * █░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░▄▀░░█░░▄▀░░░░░░░░░░███░░▄▀░░███░░▄▀░░░░░░░░░░█
 * █░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░███░░▄▀░░███░░▄▀▄▀▄▀▄▀▄▀░░█
 * █░░▄▀░░██░░▄▀░░█░░▄▀░░░░░░▄▀░░█░░░░░░░░░░▄▀░░███░░▄▀░░███░░░░░░░░░░▄▀░░█
 * █░░▄▀░░██░░▄▀░░█░░▄▀░░██░░▄▀░░█████████░░▄▀░░███░░▄▀░░███████████░░▄▀░░█
 * █░░▄▀░░░░░░▄▀░░█░░▄▀░░██░░▄▀░░█░░░░░░░░░░▄▀░░█░░░░▄▀░░░░█░░░░░░░░░░▄▀░░█
 * █░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀░░██░░▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█░░▄▀▄▀▄▀░░█░░▄▀▄▀▄▀▄▀▄▀░░█
 * █░░░░░░░░░░░░░░█░░░░░░██░░░░░░█░░░░░░░░░░░░░░█░░░░░░░░░░█░░░░░░░░░░░░░░█
 * ████████████████████████████████████████████████████████████████████████
 *
 * * by Ich Zerowan
 */
IMPORT("TileRender");
/**
 * @returns random value between specified min and max
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
IDRegistry.genItemID("coconut");
Item.createFoodItem("coconut", "Coconut", { name: "coconut", data: 0 }, { food: 5 });
Item.registerUseFunction("coconut", function (coords, item, block) {
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    if (World.canTileBeReplaced(tile1.id, tile1.data) && tile2.id == VanillaBlockID.sand) {
        World.setBlock(place.x, place.y, place.z, BlockID.coconutBlock);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
IDRegistry.genBlockID("coconutBlock");
Block.createBlock("coconutBlock", [
    { name: "Palm Sapling", texture: [["coconut", 0]], inCreative: false }
]);
Block.setDestroyTime(BlockID.coconutBlock, 0);
ToolAPI.registerBlockMaterial(BlockID.coconutBlock, "plant");
TileRenderer.setPlantModel(BlockID.coconutBlock, 0, "coconut", 0);
Block.registerDropFunction("coconutBlock", function () {
    return [[ItemID.coconut, 1, 0]];
});
/**
 * Palm leaves mechanics, mostly taken from IndustrialCraft_2
 * https://github.com/MineExplorer/IndustrialCraft_2
 */
var SAPLING_DROP_CHANCE = 0.07;
IDRegistry.genBlockID("palmLeaves");
Block.createBlock("palmLeaves", [
    { name: "Palm Leaves", texture: [["palm_leaves", 0]], inCreative: false },
    { name: "Palm Leaves", texture: [["palm_leaves", 0]], inCreative: false },
    { name: "Palm Leaves", texture: [["palm_leaves", 0]], inCreative: true }
]);
Block.registerDropFunction("palmLeaves", function (coords, blockID, blockData, level, enchant) {
    if (level > 0 || Player.getCarriedItem().id == 359) {
        return [[blockID, 1, 2]];
    }
    if (Math.random() < SAPLING_DROP_CHANCE) {
        return [[ItemID.palmSapling, 1, 0]];
    }
    return [];
});
Block.setDestroyTime(BlockID.palmLeaves, 0.2);
ToolAPI.registerBlockMaterial(BlockID.palmLeaves, "plant");
function checkLeaves(x, y, z, explored) {
    var blockID = World.getBlockID(x, y, z);
    if (blockID == BlockID.palmLog) {
        return true;
    }
    if (blockID == BlockID.palmLeaves) {
        explored[x + ':' + y + ':' + z] = true;
    }
    return false;
}
function checkLeavesBox(x, y, z, explored) {
    var result = false;
    for (var xx = x - 1; xx <= x + 1; xx++) {
        for (var yy = y - 1; yy <= y + 1; yy++) {
            for (var zz = z - 1; zz <= z + 1; zz++) {
                result || (result = checkLeaves(xx, yy, zz, explored));
            }
        }
    }
    return result;
}
function updateLeaves(x, y, z) {
    for (var xx = x - 1; xx <= x + 1; xx++) {
        for (var yy = y - 1; yy <= y + 1; yy++) {
            for (var zz = z - 1; zz <= z + 1; zz++) {
                var block = World.getBlock(xx, yy, zz);
                if (block.id == BlockID.palmLeaves && block.data == 0) {
                    World.setBlock(xx, yy, zz, BlockID.palmLeaves, 1);
                }
            }
        }
    }
}
Block.setRandomTickCallback(BlockID.palmLeaves, function (x, y, z, id, data) {
    if (data == 1) {
        var explored = {};
        explored[x + ':' + y + ':' + z] = true;
        for (var i = 0; i < 4; i++) {
            var checkingLeaves = explored;
            explored = {};
            for (var coords in checkingLeaves) {
                var c = coords.split(':');
                if (checkLeavesBox(parseInt(c[0]), parseInt(c[1]), parseInt(c[2]), explored)) {
                    World.setBlock(x, y, z, BlockID.palmLeaves, 0);
                    return;
                }
            }
        }
        World.setBlock(x, y, z, 0);
        updateLeaves(x, y, z);
        var dropFunc = Block.dropFunctions[id];
        var drop = dropFunc(null, id, data, 0, {});
        for (var i in drop) {
            World.drop(x, y, z, drop[i][0], drop[i][1], drop[i][2]);
        }
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    updateLeaves(coords.x, coords.y, coords.z);
});
/**
 * Palm sapling mechanics, mostly taken from IndustrialCraft_2
 * https://github.com/MineExplorer/IndustrialCraft_2
 */
IDRegistry.genItemID("palmSapling");
Item.createItem("palmSapling", "Palm Sapling", { name: "palm_sapling", data: 0 });
Item.registerUseFunction("palmSapling", function (coords, item, block) {
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    if (World.canTileBeReplaced(tile1.id, tile1.data) && tile2.id == VanillaBlockID.sand) {
        World.setBlock(place.x, place.y, place.z, BlockID.palmTreeSapling);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
IDRegistry.genBlockID("palmTreeSapling");
Block.createBlock("palmTreeSapling", [
    { name: "Palm Sapling", texture: [["palm_sapling", 0]], inCreative: false }
]);
Block.setDestroyTime(BlockID.palmTreeSapling, 0);
ToolAPI.registerBlockMaterial(BlockID.palmTreeSapling, "plant");
TileRenderer.setPlantModel(BlockID.palmTreeSapling, 0, "palm_sapling", 0);
Block.registerDropFunction("palmTreeSapling", function () {
    return [[ItemID.palmSapling, 1, 0]];
});
Block.setRandomTickCallback(BlockID.palmTreeSapling, function (x, y, z) {
    if (World.getBlockID(x, y - 1, z) != VanillaBlockID.sand) {
        World.destroyBlock(x, y, z, true);
    }
    else if (Math.random() < 0.1 && World.getLightLevel(x, y, z) >= 9) {
        ModGenerator.generatePalm(x, y, z);
    }
});
// bone use
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == 351 && item.data == 15 && block.id == BlockID.palmTreeSapling) {
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        for (var i = 0; i < 16; i++) {
            var px = coords.x + Math.random();
            var pz = coords.z + Math.random();
            var py = coords.y + Math.random();
            Particles.addFarParticle(Native.ParticleType.happyVillager, px, py, pz, 0, 0, 0);
        }
        if (Math.random() < 0.25) {
            ModGenerator.generatePalm(coords.x, coords.y, coords.z);
        }
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.palmTreeSapling) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
/**
 * Palm trunk block
 */
IDRegistry.genBlockID("palmLog");
Block.createBlock("palmLog", [
    { name: "Palm Trunk", texture: [["palm_log", 1], ["palm_log", 1], ["palm_log", 0], ["palm_log", 0], ["palm_log", 0], ["palm_log", 0]], inCreative: true }
], "opaque");
Block.registerDropFunction("palmLog", function (coords, blockID) {
    return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.palmLog, 0.4);
ToolAPI.registerBlockMaterial(BlockID.palmLog, "wood");
// To generate coconuts
IDRegistry.genBlockID("palmLogFruitful");
Block.createBlock("palmLogFruitful", [
    { name: "Palm Trunk", texture: [["palm_log", 1], ["palm_log", 1], ["palm_log", 0], ["palm_log", 0], ["palm_log", 0], ["palm_log", 0]], inCreative: false }
], "opaque");
Block.registerDropFunction("palmLogFruitful", function (coords, blockID) {
    return [[BlockID.palmLog, 1, 0]];
});
Block.setDestroyTime(BlockID.palmLogFruitful, 0.4);
ToolAPI.registerBlockMaterial(BlockID.palmLogFruitful, "wood");
Block.setRandomTickCallback(BlockID.palmLogFruitful, function (x, y, z) {
    if (Math.random() < 0.2 && World.getLightLevel(x, y + 1, z) >= 9) {
        ModGenerator.generateCoconut(x, y, z);
    }
});
// Recipe
Recipes.addShapeless({ id: 5, count: 4, data: 3 }, [{ id: BlockID.palmLog, data: -1 }]);
