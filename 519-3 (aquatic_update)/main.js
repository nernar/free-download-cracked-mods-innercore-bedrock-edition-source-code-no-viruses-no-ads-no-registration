/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
*/



// file: header.js

﻿/**
 *   ___                    _   _        _   _           _       _       
 *  / _ \                  | | (_)      | | | |         | |     | |
 * / /_\ \ __ _ _   _  __ _| |_ _  ___  | | | |_ __   __| | __ _| |_ ___
 * |  _  |/ _` | | | |/ _` | __| |/ __| | | | | '_ \ / _` |/ _` | __/ _ \
 * | | | | (_| | |_| | (_| | |_| | (__  | |_| | |_) | (_| | (_| | ||  __/
 * \_| |_/\__, |\__,_|\__,_|\__|_|\___|  \___/| .__/ \__,_|\__,_|\__\___|
 *           | |                              | |
 *           |_|                              |_|
**/

IMPORT("ItemDictionary");
IMPORT("ToolLib");

let BlockSide = Native.BlockSide;
let PotionEffect = Native.PotionEffect;
let EnchantType = Native.EnchantType;

let Random = {
    float: function (min, max) {
        return Math.random() * (max - min) + min;
    },
    floorInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    roundInteger: function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}

GenerationUtils.findOceanSurface = function (x, y, z) {
    for (let i = 70; i > 0; i--) {
        let blockID = World.getBlockID(x, i, z);

        if (Block.isSolid(blockID)) {
            return { x: x, y: i + 1, z: z };
        }
    }
    return { x: x, y: y, z: z };
}

ItemDictionary.setItemCategory(VanillaItemID.wooden_axe, "minecraft:axe");
ItemDictionary.setItemCategory(VanillaItemID.stone_axe, "minecraft:axe");
ItemDictionary.setItemCategory(VanillaItemID.iron_axe, "minecraft:axe");
ItemDictionary.setItemCategory(VanillaItemID.golden_axe, "minecraft:axe");
ItemDictionary.setItemCategory(VanillaItemID.diamond_axe, "minecraft:axe");

ModAPI.addAPICallback("ICore", function (api) {
    ItemDictionary.setItemCategory(ItemID.axeBronze, "minecraft:axe");
});




// file: controller/TileRender.js

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




// file: content/items/food/raw_fish.js

﻿Translation.addTranslation("Fish", {
    ru: "Рыба"
});
Translation.addTranslation("Atlantic Cod", {
    ru: "Атлантическая треска"
});
Translation.addTranslation("Carp", {
    ru: "Карп"
});
Translation.addTranslation("Blackfish", {
    ru: "Черный морской окунь"
});
Translation.addTranslation("Pink Salmon", {
    ru: "Горбуша"
});
Translation.addTranslation("Brown Trout", {
    ru: "Форель"
});
Translation.addTranslation("Capitaine", {
    ru: "Нильский окунь"
});
Translation.addTranslation("Red Grouper", {
    ru: "Красный групер"
});

IDRegistry.genItemID("codAtlantic");
IDRegistry.genItemID("carp");
IDRegistry.genItemID("blackfish");
IDRegistry.genItemID("salmonPink");
IDRegistry.genItemID("troutBrown");
IDRegistry.genItemID("capitaine");
IDRegistry.genItemID("grouperRed");

Item.createFoodItem("codAtlantic", "Atlantic Cod", { name: "atlantic_cod", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("carp", "Carp", { name: "carp", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("blackfish", "Blackfish", { name: "blackfish", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("salmonPink", "Pink Salmon", { name: "pink_salmon", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("troutBrown", "Brown Trout", { name: "brown_trout", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("capitaine", "Capitaine", { name: "capitaine", data: 0 }, { stack: 64, food: 2 });
Item.createFoodItem("grouperRed", "Red Grouper", { name: "red_grouper", data: 0 }, { stack: 64, food: 2 });

ItemDictionary.setItemCategory(ItemID.codAtlantic, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.carp, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.blackfish, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.salmonPink, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.troutBrown, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.capitaine, "minecraft:fish");
ItemDictionary.setItemCategory(ItemID.grouperRed, "minecraft:fish");
ItemDictionary.setItemCategory(VanillaItemID.fish, "minecraft:fish");

Callback.addCallback("PreLoaded", function () {
    Item.addCreativeGroup("fish", Translation.translate("Fish"), [
        ItemID.codAtlantic,
        ItemID.carp,
        ItemID.blackfish,
        ItemID.salmonPink,
        ItemID.troutBrown,
        ItemID.capitaine,
        ItemID.grouperRed
    ]);
});

/**
 * Changelog:
 *		relise 1.0
 *			- added to game
 */




// file: content/items/food/cooked_fish.js

﻿Translation.addTranslation("Fish Pie", {
	ru: "Рыбный пирог"
});
Translation.addTranslation("Fish Stew", {
	ru: "Тушеная рыба"
});

IDRegistry.genItemID("pieFish");
IDRegistry.genItemID("stewFish");

Item.createFoodItem("pieFish", "Fish Pie", {
	name: "fish_pie", meta: 0
}, {
	stack: 64,
	food: 8
});

Item.createFoodItem("stewFish", "Fish Stew", {
	name: "fish_stew", meta: 0
}, {
	stack: 1,
	food: 17
});

Callback.addCallback("PreLoaded", function () {
	let category = ItemDictionary.getCategoryItems("minecraft:fish")
	for (let i in category) {

		Recipes.addShapeless({ id: ItemID.pieFish, count: 1, data: 0 }, [
			{ id: category[i], data: -1 },
			{ id: VanillaItemID.egg, data: -1 },
			{ id: VanillaItemID.sugar, data: -1 }
		]);
		Recipes.addShapeless({ id: ItemID.stewFish, count: 1, data: 0 }, [
			{ id: category[i], data: -1 },
			{ id: category[i], data: -1 },
			{ id: VanillaItemID.bowl, data: -1 }
		]);
	}

	Callback.addCallback("FoodEaten", function () {
		let item = Player.getCarriedItem();
		if (item.id == ItemID.stewFish) {
			Player.addItemToInventory(VanillaItemID.bowl, 1, 0);
		}
	})
});

/**
 * Changelog:
 *		relise 1.0
 *			- added to game
 */




// file: content/items/armor/turtle_armor.js

﻿Translation.addTranslation("Turtle Chestplate", {
	ru: "Черепаший нагрудник"
});
Translation.addTranslation("Turtle Leggings", {
	ru: "Черепашьи поножи"
});
Translation.addTranslation("Turtle Boots", {
	ru: "Черепашьи ботинки"
});

IDRegistry.genItemID("chestplateTurtle");
IDRegistry.genItemID("leggingsTurtle");
IDRegistry.genItemID("bootsTurtle");

Item.createArmorItem("chestplateTurtle", "Turtle Chestplate", { name: "shell_chestplate", meta: 0 }, {
	armor: 8,
	type: "chestplate",
	texture: "armor/turtle_shell_1.png",
	durability: 500
});
Item.createArmorItem("leggingsTurtle", "Turtle Leggings", { name: "shell_leggings", meta: 0 }, {
	armor: 6,
	type: "leggings",
	texture: "armor/turtle_shell_2.png",
	durability: 400
});
Item.createArmorItem("bootsTurtle", "Turtle Boots", { name: "shell_boots", meta: 0 }, {
	armor: 3,
	type: "boots",
	texture: "armor/turtle_shell_1.png",
	durability: 400
});

Callback.addCallback("PreLoaded", function () {
	Item.setEnchantType("chestplateTurtle", EnchantType.chestplate);
	Item.setEnchantType("leggingsTurtle", EnchantType.leggings);
	Item.setEnchantType("bootsTurtle", EnchantType.boots);

	Recipes.addShaped({ id: ItemID.chestplateTurtle, count: 1, data: 0 }, [
		"A#A",
		"AAA",
		"AAA"
	], ['A', VanillaItemID.turtle_shell_piece, -1]);
	Recipes.addShaped({ id: ItemID.leggingsTurtle, count: 1, data: 0 }, [
		"AAA",
		"A#A",
		"A#A"
	], ['A', VanillaItemID.turtle_shell_piece, -1]);
	Recipes.addShaped({ id: ItemID.bootsTurtle, count: 1, data: 0 }, [
		"A#A",
		"A#A"
	], ['A', VanillaItemID.turtle_shell_piece, -1]);

	Item.addRepairItemIds(ItemID.chestplateTurtle, [VanillaItemID.turtle_shell_piece]);
	Item.addRepairItemIds(ItemID.leggingsTurtle, [VanillaItemID.turtle_shell_piece]);
	Item.addRepairItemIds(ItemID.bootsTurtle, [VanillaItemID.turtle_shell_piece]);
});

/**
 * Changelog:
 *		relise 1.0
 *			- added to game
 */




// file: content/blocks/decoration/blocks_driftwood.js

﻿Translation.addTranslation("Driftwood Log", {
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




