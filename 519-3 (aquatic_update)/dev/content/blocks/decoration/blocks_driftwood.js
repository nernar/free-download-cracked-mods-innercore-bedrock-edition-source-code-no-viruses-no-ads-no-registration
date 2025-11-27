Translation.addTranslation("Driftwood Log", {
    ru: "Плавниковое бревно"
});
Translation.addTranslation("Stripped Driftwood Log", {
    ru: "Обтесанное плавниковое бревно"
});
Translation.addTranslation("Driftwood Wood", {
    ru: "Плавниковая древесина"
});
Translation.addTranslation("Stripped Driftwood Wood", {
    ru: "Обтесанная плавниковая древесина"
});
Translation.addTranslation("Driftwood Planks", {
    ru: "Плавниковые доски"
});
Translation.addTranslation("Driftwood Slab", {
    ru: "Плавниковая плита"
});

IDRegistry.genBlockID("logDriftwood");
IDRegistry.genBlockID("logDriftwoodStripped");
IDRegistry.genBlockID("woodDriftwood");
IDRegistry.genBlockID("woodDriftwoodStripped");
IDRegistry.genBlockID("planksDriftwood");
IDRegistry.genBlockID("slabDriftwood");

Block.createBlock("logDriftwood", [
    {
        name: "Driftwood Log",
        texture: [
            ["log_driftwood_top", 0], ["log_driftwood_top", 0],
            ["log_driftwood_side", 0], ["log_driftwood_side", 0],
            ["log_driftwood_side", 0], ["log_driftwood_side", 0]
        ],
        inCreative: true
    },
    {
        name: "Driftwood Log",
        texture: [
            ["log_driftwood_side", 0], ["log_driftwood_side", 0],
            ["log_driftwood_top", 0], ["log_driftwood_top", 0],
            ["log_driftwood_side_rotated", 0], ["log_driftwood_side_rotated", 0]
        ],
        inCreative: false
    },
    {
        name: "Driftwood Log",
        texture: [
            ["log_driftwood_side_rotated", 0], ["log_driftwood_side_rotated", 0],
            ["log_driftwood_side_rotated", 0], ["log_driftwood_side_rotated", 0],
            ["log_driftwood_top", 0], ["log_driftwood_top", 0]
        ],
        inCreative: false
    }
], "opaque");

Block.createBlock("logDriftwoodStripped", [
    {
        name: "Stripped Driftwood Log",
        texture: [
            ["log_driftwood_top_stripped", 0], ["log_driftwood_top_stripped", 0],
            ["log_driftwood_side_stripped", 0], ["log_driftwood_side_stripped", 0],
            ["log_driftwood_side_stripped", 0], ["log_driftwood_side_stripped", 0]
        ],
        inCreative: true
    },
    {
        name: "Stripped Driftwood Log",
        texture: [
            ["log_driftwood_side_stripped", 0], ["log_driftwood_side_stripped", 0],
            ["log_driftwood_top_stripped", 0], ["log_driftwood_top_stripped", 0],
            ["log_driftwood_side_stripped_rotated", 0], ["log_driftwood_side_stripped_rotated", 0]
        ],
        inCreative: false
    },
    {
        name: "Stripped Driftwood Log",
        texture: [
            ["log_driftwood_side_stripped_rotated", 0], ["log_driftwood_side_stripped_rotated", 0],
            ["log_driftwood_side_stripped_rotated", 0], ["log_driftwood_side_stripped_rotated", 0],
            ["log_driftwood_top_stripped", 0], ["log_driftwood_top_stripped", 0]
        ],
        inCreative: false
    }
], "opaque");

Block.createBlock("woodDriftwood", [
    {
        name: "Driftwood Wood",
        texture: [["log_driftwood_side", 0]],
        inCreative: true
    }
], "opaque");

Block.createBlock("woodDriftwoodStripped", [
    {
        name: "Stripped Driftwood Wood",
        texture: [["log_driftwood_side_stripped", 0]],
        inCreative: true
    }
], "opaque");

Block.createBlock("planksDriftwood", [
    {
        name: "Driftwood Planks",
        texture: [["planks_driftwood", 0]],
        inCreative: true
    }
], "opaque");

Block.createBlock("slabDriftwood", [
    {
        name: "Driftwood Slab",
        texture: [["planks_driftwood", 0]],
        inCreative: true
    },
    {
        name: "Driftwood Slab",
        texture: [["planks_driftwood", 0]],
        inCreative: false
    }
], {
    base: 7,
    renderlayer: 2,
    translucency: 0
});

Callback.addCallback("PreLoaded", function () {
    TileRender.setSlabTypeRender(BlockID.slabDriftwood, BlockID.planksDriftwood);
    TileRender.setLogTypeRender(BlockID.logDriftwood);
    TileRender.setLogTypeRender(BlockID.logDriftwoodStripped);

    Block.registerDropFunction("logDriftwood", function (coords, blockID, blockData, level, enchant) {
        return [[blockID, 1, 0]];
    });
    Block.registerDropFunction("logDriftwoodStripped", function (coords, blockID, blockData, level, enchant) {
        return [[blockID, 1, 0]];
    });
    Block.setDestroyLevel("woodDriftwood", 0);
    Block.setDestroyLevel("woodDriftwoodStripped", 0);
    Block.setDestroyLevel("planksDriftwood", 0);

    Block.setDestroyTime(BlockID.logDriftwood, 0.4);
    Block.setDestroyTime(BlockID.logDriftwoodStripped, 0.4);
    Block.setDestroyTime(BlockID.woodDriftwood, 0.4);
    Block.setDestroyTime(BlockID.woodDriftwoodStripped, 0.4);
    Block.setDestroyTime(BlockID.planksDriftwood, 0.4);

    ToolAPI.registerBlockMaterial(BlockID.logDriftwood, "wood");
    ToolAPI.registerBlockMaterial(BlockID.logDriftwoodStripped, "wood");
    ToolAPI.registerBlockMaterial(BlockID.woodDriftwood, "wood");
    ToolAPI.registerBlockMaterial(BlockID.woodDriftwoodStripped, "wood");
    ToolAPI.registerBlockMaterial(BlockID.planksDriftwood, "wood");

    //wooden coal
    Recipes.addFurnace(BlockID.logDriftwood, VanillaItemID.coal, 1);
    Recipes.addFurnace(BlockID.logDriftwoodStripped, VanillaItemID.coal, 1);
    Recipes.addFurnace(BlockID.woodDriftwood, VanillaItemID.coal, 1);
    Recipes.addFurnace(BlockID.woodDriftwoodStripped, VanillaItemID.coal, 1);

    //planks
    Recipes.addShapeless({ id: BlockID.planksDriftwood, count: 4, data: 0 }, [{ id: BlockID.logDriftwood, data: -1 }]);
    Recipes.addShapeless({ id: BlockID.planksDriftwood, count: 4, data: 0 }, [{ id: BlockID.logDriftwoodStripped, data: -1 }]);
    Recipes.addShapeless({ id: BlockID.planksDriftwood, count: 4, data: 0 }, [{ id: BlockID.woodDriftwood, data: -1 }]);
    Recipes.addShapeless({ id: BlockID.planksDriftwood, count: 4, data: 0 }, [{ id: BlockID.woodDriftwoodStripped, data: -1 }]);

    //wood
    Recipes.addShaped({ id: BlockID.woodDriftwood, count: 3, data: 0 }, [
        "xx",
        "xx"
    ], ['x', BlockID.logDriftwood, -1]);
    Recipes.addShaped({ id: BlockID.woodDriftwoodStripped, count: 3, data: 0 }, [
        "xx",
        "xx"
    ], ['x', BlockID.logDriftwoodStripped, -1]);


    //stripped log / wood
    Callback.addCallback("ItemUse", function (position, item, block) {
        if (ItemDictionary.isItemInCategory(item.id, "minecraft:axe") && block.id == BlockID.logDriftwood) {
            World.setBlock(position.x, position.y, position.z, BlockID.logDriftwoodStripped, block.data);
            ToolLib.breakCarriedTool(1);
        }
        else if (ItemDictionary.isItemInCategory(item.id, "minecraft:axe") && block.id == BlockID.woodDriftwood) {
            World.setBlock(position.x, position.y, position.z, BlockID.woodDriftwoodStripped, block.data);
            ToolLib.breakCarriedTool(1);
        }
    });

    //workbench
    Recipes.addShaped({ id: VanillaBlockID.crafting_table, count: 1, data: 0 }, [
        "xx",
        "xx"
    ], ['x', BlockID.planksDriftwood, -1]);

    //chest
    Recipes.addShaped({ id: VanillaBlockID.chest, count: 1, data: 0 }, [
        "xxx",
        "x#x",
        "xxx"
    ], ['x', BlockID.planksDriftwood, -1]);

    //bowl
    Recipes.addShaped({ id: VanillaItemID.bowl, count: 1, data: 0 }, [
        "x x",
        "#x#"
    ], ['x', BlockID.planksDriftwood, -1]);

    //bookshelf
    Recipes.addShaped({ id: VanillaBlockID.bookshelf, count: 1, data: 0 }, [
        "xxx",
        "aaa",
        "xxx"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 340, -1]);

    //trapdoor
    Recipes.addShaped({ id: VanillaBlockID.trapdoor, count: 1, data: 0 }, [
        "xxx",
        "xxx"
    ], ['x', BlockID.planksDriftwood, -1]);

    //door
    Recipes.addShaped({ id: VanillaBlockID.wooden_door, count: 1, data: 0 }, [
        "xx",
        "xx",
        "xx"
    ], ['x', BlockID.planksDriftwood, -1]);

    //stick
    Recipes.addShaped({ id: VanillaItemID.stick, count: 4, data: 0 }, [
        "x",
        "x"
    ], ['x', BlockID.planksDriftwood, -1]);

    ///tools
    //pickaxe
    Recipes.addShaped({ id: VanillaItemID.wooden_pickaxe, count: 1, data: 0 }, [
        "xxx",
        "#a#",
        "#a#"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 280, -1]);

    //axe
    Recipes.addShaped({ id: VanillaItemID.wooden_axe, count: 1, data: 0 }, [
        "xx",
        "xa",
        "#a"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 280, -1]);

    //hoe
    Recipes.addShaped({ id: VanillaItemID.wooden_hoe, count: 1, data: 0 }, [
        "xx",
        "#a",
        "#a"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 280, -1]);

    //shovel
    Recipes.addShaped({ id: VanillaItemID.wooden_shovel, count: 1, data: 0 }, [
        "x",
        "a",
        "a"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 280, -1]);

    //sword
    Recipes.addShaped({ id: VanillaItemID.wooden_sword, count: 1, data: 0 }, [
        "x",
        "x",
        "a"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 280, -1]);

    //boat
    Recipes.addShaped({ id: VanillaItemID.boat, count: 1, data: 0 }, [
        "xax",
        "xxx"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 269, -1]);

    //piston
    Recipes.addShaped({ id: VanillaBlockID.piston, count: 1, data: 0 }, [
        "xxx",
        "bab",
        "bcb"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 265, -1, 'b', 4, -1, 'c', 331, -1]);


    //noteblock
    Recipes.addShaped({ id: VanillaBlockID.noteblock, count: 1, data: 0 }, [
        "xxx",
        "xax",
        "xxx"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 331, -1]);

    //jukebox
    Recipes.addShaped({ id: VanillaBlockID.jukebox, count: 1, data: 0 }, [
        "xxx",
        "xax",
        "xxx"
    ], ['x', BlockID.planksDriftwood, -1, 'a', VanillaItemID.diamond, -1]);

    //loom
    Recipes.addShaped({ id: VanillaBlockID.loom, count: 1, data: 0 }, [
        "aa",
        "xx",
        "xx"
    ], ['x', BlockID.planksDriftwood, -1, 'a', VanillaItemID.string, -1]);

    //stairs
    Recipes.addShaped({ id: VanillaBlockID.oak_stairs, count: 4, data: 0 }, [
        "x##",
        "xx#",
        "xxx"
    ], ['x', BlockID.planksDriftwood, -1]);

    //slab
    Recipes.addShaped({ id: BlockID.slabDriftwood, count: 6, data: 0 }, [
        "xxx"
    ], ['x', BlockID.planksDriftwood, -1]);

    //fence
    Recipes.addShaped({ id: VanillaBlockID.fence, count: 3, data: 0 }, [
        "xax",
        "xax"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 280, -1]);

    //fence gate
    Recipes.addShaped({ id: VanillaBlockID.fence_gate, count: 1, data: 0 }, [
        "axa",
        "axa"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 280, -1]);

    //button
    Recipes.addShaped({ id: VanillaBlockID.wooden_button, count: 1, data: 0 }, [
        "x"
    ], ['x', BlockID.planksDriftwood, -1]);

    //pressure plate
    Recipes.addShaped({ id: VanillaBlockID.wooden_pressure_plate, count: 1, data: 0 }, [
        "x"
    ], ['x', BlockID.planksDriftwood, -1]);

    //sign
    Recipes.addShaped({ id: VanillaItemID.sign, count: 1, data: 0 }, [
        "xxx",
        "xxx",
        "#a#"
    ], ['x', BlockID.planksDriftwood, -1, 'a', 280, -1]);

    //lectern
    Recipes.addShaped({ id: VanillaBlockID.lectern, count: 1, data: 0 }, [
        "xxx",
        "#a#",
        "#a#"
    ], ['x', BlockID.slabDriftwood, -1, 'a', VanillaBlockID.bookshelf, -1]);

    //fletching table
    Recipes.addShaped({ id: VanillaBlockID.fletching_table, count: 1, data: 0 }, [
        "aa",
        "xx",
        "xx"
    ], ['x', BlockID.planksDriftwood, -1, 'a', VanillaItemID.flint, -1]);

    //barrel
    Recipes.addShaped({ id: VanillaBlockID.barrel, count: 1, data: 0 }, [
        "axa",
        "a#a",
        "axa"
    ], ['x', BlockID.slabDriftwood, -1, 'a', VanillaItemID.stick, -1]);

    //campfire
    Recipes.addShaped({ id: VanillaBlockID.campfire, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "xxx"
    ], ['x', BlockID.logDriftwood, -1, 'a', VanillaItemID.stick, -1, 'b', VanillaItemID.coal, 0]);

    Recipes.addShaped({ id: VanillaBlockID.campfire, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "xxx"
    ], ['x', BlockID.logDriftwoodStripped, -1, 'a', VanillaItemID.stick, -1, 'b', VanillaItemID.coal, 0]);

    Recipes.addShaped({ id: VanillaBlockID.campfire, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "xxx"
    ], ['x', BlockID.woodDriftwood, -1, 'a', VanillaItemID.stick, -1, 'b', VanillaItemID.coal, 0]);

    Recipes.addShaped({ id: VanillaBlockID.campfire, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "xxx"
    ], ['x', BlockID.woodDriftwoodStripped, -1, 'a', VanillaItemID.stick, -1, 'b', VanillaItemID.coal, 0]);

    //cartography table
    Recipes.addShaped({ id: VanillaBlockID.cartography_table, count: 1, data: 0 }, [
        "aa",
        "xx",
        "xx"
    ], ['x', BlockID.planksDriftwood, -1, 'a', VanillaItemID.paper, -1]);

    //composter
    Recipes.addShaped({ id: VanillaBlockID.composter, count: 1, data: 0 }, [
        "a#a",
        "a#a",
        "aaa"
    ], ['x', BlockID.slabDriftwood, -1]);

    //grindstone
    Recipes.addShaped({ id: VanillaBlockID.grindstone, count: 1, data: 0 }, [
        "aba",
        "x#x"
    ], ['x', BlockID.planksDriftwood, -1, 'a', VanillaItemID.stick, -1, 'b', 44, 0]);

    //bed
    Recipes.addShaped({ id: VanillaBlockID.bed, count: 1, data: 0 }, [
        "aaa",
        "xxx"
    ], ['x', BlockID.planksDriftwood, -1, 'a', VanillaBlockID.wool, -1]);

    //shield
    Recipes.addShaped({ id: VanillaItemID.shield, count: 1, data: 0 }, [
        "xax",
        "xxx",
        "#x#"
    ], ['x', BlockID.planksDriftwood, -1, 'a', VanillaItemID.iron_ingot, -1]);

    //smithing table
    Recipes.addShaped({ id: VanillaBlockID.smithing_table, count: 1, data: 0 }, [
        "aa",
        "xx",
        "xx"
    ], ['x', BlockID.planksDriftwood, -1, 'a', VanillaItemID.iron_ingot, -1]);

    //smoker
    Recipes.addShaped({ id: VanillaBlockID.smoker, count: 1, data: 0 }, [
        "#x#",
        "xax",
        "#x#"
    ], ['x', BlockID.logDriftwood, -1, 'a', VanillaBlockID.furnace, -1]);

    Recipes.addShaped({ id: VanillaBlockID.smoker, count: 1, data: 0 }, [
        "#x#",
        "xax",
        "#x#"
    ], ['x', BlockID.logDriftwoodStripped, -1, 'a', VanillaBlockID.furnace, -1]);

    Recipes.addShaped({ id: VanillaBlockID.smoker, count: 1, data: 0 }, [
        "#x#",
        "xax",
        "#x#"
    ], ['x', BlockID.woodDriftwood, -1, 'a', VanillaBlockID.furnace, -1]);

    Recipes.addShaped({ id: VanillaBlockID.smoker, count: 1, data: 0 }, [
        "#x#",
        "xax",
        "#x#"
    ], ['x', BlockID.woodDriftwoodStripped, -1, 'a', VanillaBlockID.furnace, -1]);
});

function __generate_driftwood_log(x, y, z) {
    let direction = Random.roundInteger(0, 1);
    let size = Random.floorInteger(2, 5);

    let blockFloor = {}
    blockFloor[VanillaBlockID.gravel] = true;
    blockFloor[VanillaBlockID.sand] = true;
    blockFloor[VanillaBlockID.clay] = true;
    blockFloor[VanillaBlockID.stone] = true;

    if (direction == 0) {
        for (let i = 0; i < size; i++) {
            let tile = World.getBlock(x + i, y, z);
            if (blockFloor[tile.id])
                return;

            World.setBlock(x + i, y, z, BlockID.logDriftwood, 2);
        }
    }
    else if (direction == 1) {
        for (let i = 0; i < size; i++) {
            let tile = World.getBlock(x, y, z + i);
            if (blockFloor[tile.id])
                return;

            World.setBlock(x, y, z + i, BlockID.logDriftwood, 1);
        }
    }
}

let __driftwood_generation_chance = {
    "river": 15,
    "ocean": 10,
    "beach": 5
}

let DRIFTWOOD_BIOME_DATA = {
    7: __driftwood_generation_chance["river"] / 100
}

{
    let OceanBiomeIDs = [0, 24, 10, 50, 46, 49, 45, 48, 44, 47];
    for (let id in OceanBiomeIDs) {
        DRIFTWOOD_BIOME_DATA[OceanBiomeIDs[id]] = __driftwood_generation_chance["ocean"] / 100;
    }
}

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    if (Math.random() < DRIFTWOOD_BIOME_DATA[World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)]) {
        for (var i = 0; i < 1 + Math.random() * 5; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 63);
            coords = GenerationUtils.findOceanSurface(coords.x, coords.y, coords.z);
            __generate_driftwood_log(coords.x, coords.y, coords.z);
        }
    }
});

/**
 * Changelog:
 *		relise 1.0
 *			- added to game
 */