IDRegistry.genItemID("rockStone");
Item.createItem("rockStone", "Rock", {name: "rock_stone"}, {stack: 64});
IDRegistry.genItemID("rockGranite");
Item.createItem("rockGranite", "Rock granite", {name: "rock_granite"}, {stack: 64});
IDRegistry.genItemID("rockDiorite");
Item.createItem("rockDiorite", "Rock diorite", {name: "rock_diorite"}, {stack: 64});
IDRegistry.genItemID("rockAndesite");
Item.createItem("rockAndesite", "Rock andesite", {name: "rock_andesite"}, {stack: 64});
var rndInt = function (max) {
    return max;
};
Block.registerDropFunction(1, function (coords, blockID, data, level, enchant) {
    if (level > 0) {
        if (data == 0) {
            return [[ItemID.rockStone, rndInt(3), 0]];
        }
        if (data == 1) {
            return [[ItemID.rockGranite, rndInt(3), 0]];
        }
        if (data == 3) {
            return [[ItemID.rockDiorite, rndInt(3), 0]];
        }
        if (data == 5) {
            return [[ItemID.rockAndesite, rndInt(3), 0]];
        }
    }
});
IDRegistry.genItemID("flakedFlint");
Item.createItem("flakedFlint", "Flaked flint", {name: "flaked_flint"}, {stack: 64});
IDRegistry.genItemID("plantFiber");
Item.createItem("plantFiber", "Plant fiber", {name: "plant_fiber"}, {stack: 64});
IDRegistry.genItemID("plantRope");
Item.createItem("plantRope", "Plant fiber rope", {name: "plant_rope"}, {stack: 64});
IDRegistry.genItemID("sawdust");
Item.createItem("sawdust", "Sawdust", {name: "sawdust"}, {stack: 64});
Item.defineItemss = function (id, name, types) {
    for (i in types) {
        IDRegistry.genItemID(id + "_" + types[i]);
        Item.createItem(id + "_" + types[i], name + " " + types[i], {name: id + "_" + types[i]}, {stack: 64});
    }
};
Item.defineItemss("bark", "Bark", ["oak", "spruce", "birch", "jungle", "dark", "acacia"]);
Block.registerDropFunction(17, function (coords, blockID, data, level, enchant) {
    if (level == 0) {
        if (Math.random() <= 0.3) {
            return [[ItemID.haft, 1, 0]];
        } else {
            return [[ItemID.bark_oak, 1, 0], [ItemID.sawdust, 1, 0], [5, 2, data]];
        }
    }
});
Block.registerDropFunction(162, function (coords, blockID, data, level, enchant) {
    if (level == 0) {
        return [[ItemID.bark_oak, 1, 0], [ItemID.sawdust, 1, 0], [5, 2, data]];
    }
});
Block.registerPlaceFunction(58, function (coords) {
    Game.prevent();
    var c = coords.relative;
    World.setBlock(c.x, c.y, c.z, BlockID.survivalistCraftingTable);
});
Callback.addCallback("ItemUse", function (crd) {
    item = Player.getCarriedItem();
    if (item.id == 318 && World.getBlockID(crd.x, crd.y, crd.z) == 1) {
        if (Math.random() < 0.3) {
            Player.addItemToInventory(ItemID.flakedFlint, 1, 0);
            Player.decreaseCarriedItem(1);
        }
    }
});
Block.registerDropFunction(2, function (coords, blockID, data, level, enchant) {
    return [[3, 1, 0]];
    if (Math.random() * 1 < 0.5) {
        return [[3, 1, 0], [ItemID.plantFiber, 1, 0]];
    }
});
Block.registerDropFunction(13, function (coords, blockID, data, level, enchant) {
    if (Math.random() * 1 < 0.4) {
        return [[318, 1, 0]];
    } else {
        return [[blockID, 1, data]];
    }
});
Block.registerDropFunction(31, function (coords, blockID, data, level, enchant) {
    if (Math.random() * 1 < 0.7) {
        return [[ItemID.plantFiber, 1, 0]];
    }
});
Block.registerDropFunction(18, function (coords, blockID, data, level, enchant) {
    if (Math.random() * 1 < 0.6) {
        return [[280, 1, 0]];
    }
});
IDRegistry.genBlockID("cobbleDiorite");
Block.createBlock("cobbleDiorite", [{name: "Diorite cobblestone", texture: [["cobblestone_diorite", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.cobbleDiorite, 4);
ToolAPI.registerBlockMaterial(BlockID.cobbleDiorite, "stone", 1, true);
IDRegistry.genBlockID("cobbleAndesite");
Block.createBlock("cobbleAndesite", [{name: "Andesite cobblestone", texture: [["cobblestone_andesite", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.cobbleAndesite, 4);
ToolAPI.registerBlockMaterial(BlockID.cobbleAndesite, "stone", 1, true);
IDRegistry.genBlockID("cobbleGranite");
Block.createBlock("cobbleGranite", [{name: "Granite cobblestone", texture: [["cobblestone_granite", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.cobbleGranite, 4);
ToolAPI.registerBlockMaterial(BlockID.cobbleGranite, "stone", 1, true);
IDRegistry.genBlockID("oreDirium");
Block.createBlock("oreDirium", [{name: "Dirium ore", texture: [["dirium_ore", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.oreDirium, 4);
ToolAPI.registerBlockMaterial(BlockID.oreDirium, "stone", 3, true);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 16);
    if (rnd(1, 5) == 1 && World.getBlockID(coords.x, coords.y, coords.z) === 1) {
        for (var i = 0; i < 16; i++) {
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreDirium, 0, rnd(1, 7));
        }
    }
});
IDRegistry.genBlockID("oreDowniron");
Block.createBlock("oreDowniron", [{name: "Downiron ore", texture: [["downiron_ore", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.oreDowniron, 14);
ToolAPI.registerBlockMaterial(BlockID.oreDowniron, "stone", 3, true);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 6);
    for (var i = 0; i < rnd(20, 30); i++) {
        if (World.getBlockID(coords.x, coords.y, coords.z) === 1) {
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreDowniron, 0);
        }
    }
});
IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [{name: "Tin ore", texture: [["tin_ore", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.oreTin, 4);
ToolAPI.registerBlockMaterial(BlockID.oreTin, "stone", 2, true);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 60);
    for (var i = 0; i < rnd(20, 30); i++) {
        if (World.getBlockID(coords.x, coords.y, coords.z) === 1) {
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreTin, 0);
        }
    }
});
IDRegistry.genBlockID("oreCobalt");
Block.createBlock("oreCobalt", [{name: "Cobalt ore", texture: [["cobalt_ore", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.oreCobalt, 4);
ToolAPI.registerBlockMaterial(BlockID.oreCobalt, "stone", 2, true);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 30);
    if (rnd(1, 4) == 4) {
        for (var i = 0; i < 10; i++) {
            if (World.getBlockID(coords.x, coords.y, coords.z) === 1) {
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCobalt, 0);
            }
        }
    }
});
IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [{name: "Copper ore", texture: [["copper_ore", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.oreCopper, 4);
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone", 2, true);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 32, 100);
    for (var i = 0; i < rnd(20, 30); i++) {
        if (World.getBlockID(coords.x, coords.y, coords.z) === 1) {
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreCopper, 0, rnd(1, 7), true);
        }
    }
});
Block.registerDropFunction(BlockID.oreCopper, function (coords, blockID, data, level, enchant) {
    if (level > 1) {
        return [[ItemID.oreChunkCopper, rnd(1, 2)]];
    }
});
Block.registerDropFunction(BlockID.oreTin, function (coords, blockID, data, level, enchant) {
    if (level > 1) {
        return [[ItemID.oreChunkTin, rnd(1, 2)]];
    }
});
Block.registerDropFunction(14, function (coords, blockID, data, level, enchant) {
    if (level > 2) {
        return [[ItemID.oreChunkGold, rnd(1, 2)]];
    }
});
Block.registerDropFunction(15, function (coords, blockID, data, level, enchant) {
    if (level > 1) {
        return [[ItemID.oreChunkIron, rnd(1, 2)]];
    }
});
Block.registerDropFunction(56, function (coords, blockID, data, level, enchant) {
    if (level > 2) {
        return [[ItemID.oreChunkDiamond, 1]];
    }
});
Block.registerDropFunction(73, function (coords, blockID, data, level, enchant) {
    if (level > 2) {
        return [[ItemID.oreChunkRedstone, rnd(1, 4)]];
    }
});
Block.registerDropFunction(74, function (coords, blockID, data, level, enchant) {
    if (level > 2) {
        return [[ItemID.oreChunkRedstone, rnd(1, 4)]];
    }
});
Block.registerDropFunction(BlockID.oreDowniron, function (coords, blockID, data, level, enchant) {
    if (level > 2) {
        return [[ItemID.oreChunkDowniron, rnd(1, 2)]];
    }
});
Block.registerDropFunction(21, function (coords, blockID, data, level, enchant) {
    if (level > 1) {
        return [[ItemID.oreChunkLapis, rnd(1, 4)]];
    }
});
Block.registerDropFunction(129, function (coords, blockID, data, level, enchant) {
    if (level > 1) {
        return [[ItemID.oreChunkEmerald, rnd(1, 2)]];
    }
});
Block.registerDropFunction(BlockID.oreCobalt, function (coords, blockID, data, level, enchant) {
    if (level > 2) {
        return [[ItemID.oreChunkCobalt, rnd(1, 2)]];
    }
});
Block.registerDropFunction(BlockID.oreDirium, function (coords, blockID, data, level, enchant) {
    if (level > 2) {
        return [[ItemID.oreChunkDirium, rnd(1, 2)]];
    }
});
Callback.addCallback("PostLoaded", function () {
    RecipeSystem.addRecipeToWorkbench(BlockID.cobbleAndesite, 1, 0, [[ItemID.rockAndesite, 0], [ItemID.rockAndesite, 0], [0, 0], [ItemID.rockAndesite, 0], [ItemID.rockAndesite, 0], [0, 0], [0, 0], [0, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(BlockID.cobbleDiorite, 1, 0, [[ItemID.rockDiorite, 0], [ItemID.rockDiorite, 0], [0, 0], [ItemID.rockDiorite, 0], [ItemID.rockDiorite, 0], [0, 0], [0, 0], [0, 0], [0, 0]], 0);
    RecipeSystem.addRecipeToWorkbench(BlockID.cobbleGranite, 1, 0, [[ItemID.rockGranite, 0], [ItemID.rockGranite, 0], [0, 0], [ItemID.rockGranite, 0], [ItemID.rockGranite, 0], [0, 0], [0, 0], [0, 0], [0, 0]], 0);
});
importLib("TreeAPI", "*");

