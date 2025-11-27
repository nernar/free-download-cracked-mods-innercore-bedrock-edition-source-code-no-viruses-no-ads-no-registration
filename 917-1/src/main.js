/*
BUILD INFO:
  dir: src
  target: main.js
  files: 7
*/



// file: warning.js

/**
 * [English]
 * This mod is never complete.
 * Senpai! Please do not read my code ＞︿＜ !
 * 
 * [Vietnamese]
 * Bản mod này không bao giờ được hoàn thành.
 * Anh Kan! Làm ơn đừng đọc code của em ＞︿＜ !
 */

alert("Survivalist BE is never complete !");




// file: importLib.js

IMPORT("SoundAPI");
IMPORT("ToolLib");
IMPORT("DiscLib");




// file: item.js

Item.addCreativeGroup("musicDisc", "Music Disc", [
    DiscLib.createMusicDisc("Secret - ???", "secret"),
    DiscLib.createMusicDisc("I'm A Master Of Minds - Dr.Stone", "track32"),
    DiscLib.createMusicDisc("Get Exited!! - Dr.Stone", "getexited"),
    DiscLib.createMusicDisc("Dr.Stone - Dr.Stone", "drstone")
]);

Item.addCreativeGroup("rock", "Rock", [
    IDRegistry.genItemID("rock"),
    IDRegistry.genItemID("andesite_rock"),
    IDRegistry.genItemID("diorite_rock"),
    IDRegistry.genItemID("granite_rock"),
    IDRegistry.genItemID("netherrack_rock"),
    IDRegistry.genItemID("end_stone_rock"),
    IDRegistry.genItemID("halite_rock_salt")
]);

Item.addCreativeGroup("oreRock", "Ore Rock", [
    IDRegistry.genItemID("iron_ore_rock"),
    IDRegistry.genItemID("gold_ore_rock"),
    IDRegistry.genItemID("copper_ore_rock"),
    IDRegistry.genItemID("lead_ore_rock"),
    IDRegistry.genItemID("tin_ore_rock"),
    IDRegistry.genItemID("silver_ore_rock"),
    IDRegistry.genItemID("aluminum_ore_rock")
]);

Item.addCreativeGroup("flake", "Flake", [
    IDRegistry.genItemID("flaked_flint"),
    IDRegistry.genItemID("flaked_bone"),
    IDRegistry.genItemID("flaked_quartz"),
    IDRegistry.genItemID("flaked_obsidian"),
    IDRegistry.genItemID("flaked_opal"),
    IDRegistry.genItemID("flaked_emerald"),
    IDRegistry.genItemID("flaked_diamond")
]);

Item.addCreativeGroup("point", "Point", [
    IDRegistry.genItemID("flaked_flint_point"),
    IDRegistry.genItemID("flaked_bone_point"),
    IDRegistry.genItemID("flaked_quartz_point"),
    IDRegistry.genItemID("flaked_obsidian_point"),
    IDRegistry.genItemID("flaked_opal_point"),
    IDRegistry.genItemID("flaked_emerald_point"),
    IDRegistry.genItemID("flaked_diamond_point")
]);

Item.addCreativeGroup("nugget", "Nugget", [
    IDRegistry.genItemID("copper_nugget"),
    IDRegistry.genItemID("lead_nugget"),
    IDRegistry.genItemID("tin_nugget")
]);

Item.addCreativeGroup("ingot", "Ingot", [
    IDRegistry.genItemID("copper_ingot"),
    IDRegistry.genItemID("lead_ingot"),
    IDRegistry.genItemID("tin_ingot")
]);

Item.addCreativeGroup("bark", "Bark", [
    IDRegistry.genItemID("bark_oak"),
    IDRegistry.genItemID("bark_birch"),
    IDRegistry.genItemID("bark_spruce"),
    IDRegistry.genItemID("bark_jungle"),
    IDRegistry.genItemID("bark_acacia"),
    IDRegistry.genItemID("bark_dark_oak")
]);

IDRegistry.genItemID("bread_dough");
IDRegistry.genItemID("round_bread");

IDRegistry.genItemID("plant_fiber");
IDRegistry.genItemID("plant_cordage");

Item.createItem("rock", "Rock", {name: "rock"}, {});
Item.createItem("andesite_rock", "Andesite Rock", {name: "rock_andesite"}, {});
Item.createItem("diorite_rock", "Diorite Rock", {name: "rock_diorite"}, {});
Item.createItem("granite_rock", "Granite Rock", {name: "rock_granite"}, {});
Item.createItem("netherrack_rock", "Netherrack Rock", {name: "rock_netherrack"}, {});
Item.createItem("end_stone_rock", "End Stone Rock", {name: "rock_end"}, {});
Item.createItem("halite_rock_salt", "Halite Rock Salt", {name: "salt_dust_rock"}, {});

Item.createItem("iron_ore_rock", "Iron Ore Rock", {name: "iron_ore_rock"}, {});
Item.createItem("gold_ore_rock", "Gold Ore Rock", {name: "gold_ore_rock"}, {});
Item.createItem("copper_ore_rock", "Copper Ore Rock", {name: "copper_ore_rock"}, {});
Item.createItem("tin_ore_rock", "Tin Ore Rock", {name: "tin_ore_rock"}, {});
Item.createItem("lead_ore_rock", "Lead Ore Rock", {name: "lead_ore_rock"}, {});
Item.createItem("silver_ore_rock", "Silver Ore Rock", {name: "silver_ore_rock"}, {});
Item.createItem("aluminum_ore_rock", "Aluminum Ore Rock", {name: "aluminum_ore_rock"}, {});

Item.createItem("flaked_flint", "Flaked Flint", {name: "flint_flake"}, {});
Item.createItem("flaked_bone", "Flaked Bone", {name: "bone_flake"}, {});
Item.createItem("flaked_quartz", "Flaked Quartz", {name: "quartz_flake"}, {});
Item.createItem("flaked_obsidian", "Flaked Obsidian", {name: "obsidian_flake"}, {});
Item.createItem("flaked_opal", "Flaked Opal", {name: "opal_flake"}, {});
Item.createItem("flaked_emerald", "Flaked Emerald", {name: "emerald_flake"}, {});
Item.createItem("flaked_diamond", "Flaked Diamond", {name: "diamond_flake"}, {});

Item.createItem("flaked_flint_point", "Flaked Flint Point", {name: "flint_point"}, {});
Item.createItem("flaked_bone_point", "Flaked Bone Point", {name: "bone_point"}, {});
Item.createItem("flaked_quartz_point", "Flaked Quartz Point", {name: "quartz_point"}, {});
Item.createItem("flaked_obsidian_point", "Flaked Obsidian Point", {name: "obsidian_point"}, {});
Item.createItem("flaked_opal_point", "Flaked Opal Point", {name: "opal_point"}, {});
Item.createItem("flaked_emerald_point", "Flaked Emerald Point", {name: "emerald_point"}, {});
Item.createItem("flaked_diamond_point", "Flaked Diamond Point", {name: "diamond_point"}, {});

Item.createItem("copper_nugget", "Copper Nugget", {name: "copper_nugget"}, {});
Item.createItem("lead_nugget", "Lead Nugget", {name: "lead_nugget"}, {});
Item.createItem("tin_nugget", "Tin Nugget", {name: "tin_nugget"}, {});

Item.createItem("copper_ingot", "Copper Ingot", {name: ""}, {});
Item.createItem("lead_ingot", "Lead Ingot", {name: ""}, {});
Item.createItem("tin_ingot", "Tin Ingot", {name: ""}, {});

Item.createItem("bark_oak", "Bark Oak", {name: "bark_oak"}, {});
Item.createItem("bark_birch", "Bark Birch", {name: "bark_birch"}, {});
Item.createItem("bark_spruce", "Bark Spruce", {name: "bark_spruce"}, {});
Item.createItem("bark_jungle", "Bark Jungle", {name: "bark_jungle"}, {});
Item.createItem("bark_acacia", "Bark Acacia", {name: "bark_acacia"}, {});
Item.createItem("bark_dark_oak", "Bark Dark Oak", {name: "bark_dark_oak"}, {});

Item.createItem("bread_dough", "Bread Dough", {name: "dough"}, {});
Item.createFoodItem("round_bread", "Round Bread", {name: "round_bread"}, {food: 8});

Item.createItem("plant_fiber", "Plant Fiber", {name: "plant_fiber"}, {});
Item.createItem("plant_cordage", "Plant Cordage", {name: "plant_cordage"}, {});




// file: tool.js

Item.addCreativeGroup("flintTools", "Flint Tools", [
    IDRegistry.genItemID("flint_hatchet"),
    IDRegistry.genItemID("flint_pickaxe"),
    IDRegistry.genItemID("flint_axe"),
    IDRegistry.genItemID("flint_shovel"),
    IDRegistry.genItemID("flint_hoe"),
    IDRegistry.genItemID("flint_shears")
]);

Item.addCreativeGroup("boneTools", "Bone Tools", [
    IDRegistry.genItemID("sharp_bone"),
    IDRegistry.genItemID("bone_hatchet"),
    IDRegistry.genItemID("bone_pickaxe"),
    IDRegistry.genItemID("bone_shovel"),
    IDRegistry.genItemID("bone_hoe"),
    IDRegistry.genItemID("bone_shears")
]);

Item.addCreativeGroup("quartzTools", "Quartz Tools", [
    IDRegistry.genItemID("quartz_hatchet"),
    IDRegistry.genItemID("quartz_pickaxe"),
    IDRegistry.genItemID("quartz_axe"),
    IDRegistry.genItemID("quartz_shovel"),
    IDRegistry.genItemID("quartz_hoe"),
    IDRegistry.genItemID("quartz_shears")
]);

Item.addCreativeGroup("obsidianTools", "Obsidian Tools", [
    IDRegistry.genItemID("obsidian_hatchet"),
    IDRegistry.genItemID("obsidian_pickaxe"),
    IDRegistry.genItemID("obsidian_axe"),
    IDRegistry.genItemID("obsidian_shovel"),
    IDRegistry.genItemID("obsidian_hoe")
]);

Item.addCreativeGroup("opalTools", "Opal Tools", [
    IDRegistry.genItemID("opal_hatchet"),
    IDRegistry.genItemID("opal_pickaxe"),
    IDRegistry.genItemID("opal_axe"),
    IDRegistry.genItemID("opal_shovel"),
    IDRegistry.genItemID("opal_hoe")
]);

Item.addCreativeGroup("emeraldTools", "Emerald Tools", [
    IDRegistry.genItemID("emerald_hatchet"),
    IDRegistry.genItemID("emerald_pickaxe"),
    IDRegistry.genItemID("emerald_axe"),
    IDRegistry.genItemID("emerald_shovel"),
    IDRegistry.genItemID("emerald_hoe")
]);

Item.addCreativeGroup("diamondTools", "Diamond Tools", [
    IDRegistry.genItemID("diamond_hatchet"),
    IDRegistry.genItemID("diamond_pickaxe"),
    IDRegistry.genItemID("diamond_axe"),
    IDRegistry.genItemID("diamond_shovel"),
    IDRegistry.genItemID("diamond_hoe")
]);

/*
Item.addCreativeGroup("", "", [
    IDRegistry.genItemID(""),
]);

// thêm búa !
*/

Item.createItem("flint_hatchet", "Flint Hatchet", {name: "flint_hatchet"}, {stack: 1});
Item.createItem("flint_pickaxe", "Flint Pickaxe", {name: "flint_pickaxe"}, {stack: 1});
Item.createItem("flint_axe", "Flint Axe", {name: "flint_axe"}, {stack: 1});
Item.createItem("flint_shovel", "Flint Shovel", {name: "flint_shovel"}, {stack: 1});
Item.createItem("flint_hoe", "Flint Hoe", {name: "flint_hoe"}, {stack: 1});
Item.createItem("flint_shears", "Flint Shears", {name: "flint_shears"}, {stack: 1});

Item.createItem("sharp_bone", "Sharp Bone", {name: "sharp_bone"}, {stack: 1});
Item.createItem("bone_hatchet", "Bone Hatchet", {name: "bone_hatchet"}, {stack: 1});
Item.createItem("bone_pickaxe", "Bone Pickaxe", {name: "bone_pickaxe"}, {stack: 1});
Item.createItem("bone_shovel", "Bone Shovel", {name: "bone_shovel"}, {stack: 1});
Item.createItem("bone_hoe", "Bone Hoe", {name: "bone_hoe"}, {stack: 1});
Item.createItem("bone_shears", "Bone Shears", {name: "bone_shears"}, {stack: 1});

Item.createItem("quartz_hatchet", "Quartz Hatchet", {name: "quartz_hatchet"}, {stack: 1});
Item.createItem("quartz_pickaxe", "Quartz Pickaxe", {name: "quartz_pickaxe"}, {stack: 1});
Item.createItem("quartz_axe", "Quartz Axe", {name: "quartz_axe"}, {stack: 1});
Item.createItem("quartz_shovel", "Quartz Shovel", {name: "quartz_shovel"}, {stack: 1});
Item.createItem("quartz_hoe", "Quartz Hoe", {name: "quartz_hoe"}, {stack: 1});
Item.createItem("quartz_shears", "Quartz Shears", {name: "quartz_shears"}, {stack: 1});

Item.createItem("obsidian_hatchet", "Obsidian Hatchet", {name: "obsidian_hatchet"}, {stack: 1});
Item.createItem("obsidian_pickaxe", "Obsidian Pickaxe", {name: "obsidian_pickaxe"}, {stack: 1});
Item.createItem("obsidian_axe", "Obsidian Axe", {name: "obsidian_axe"}, {stack: 1});
Item.createItem("obsidian_shovel", "Obsidian Shovel", {name: "obsidian_shovel"}, {stack: 1});
Item.createItem("obsidian_hoe", "Obsidian Hoe", {name: "obsidian_hoe"}, {stack: 1});

Item.createItem("opal_hatchet", "Opal Hatchet", {name: "opal_hatchet"}, {stack: 1});
Item.createItem("opal_pickaxe", "Opal Pickaxe", {name: "opal_pickaxe"}, {stack: 1});
Item.createItem("opal_axe", "Opal Axe", {name: "opal_axe"}, {stack: 1});
Item.createItem("opal_shovel", "Opal Shovel", {name: "opal_shovel"}, {stack: 1});
Item.createItem("opal_hoe", "Opal Hoe", {name: "opal_hoe"}, {stack: 1});

Item.createItem("emerald_hatchet", "Emerald Hatchet", {name: "emerald_hatchet"}, {stack: 1});
Item.createItem("emerald_pickaxe", "Emerald Pickaxe", {name: "emerald_pickaxe"}, {stack: 1});
Item.createItem("emerald_axe", "Emerald Axe", {name: "emerald_axe"}, {stack: 1});
Item.createItem("emerald_shovel", "Emerald Shovel", {name: "emerald_shovel"}, {stack: 1});
Item.createItem("emerald_hoe", "Emerald Hoe", {name: "emerald_hoe"}, {stack: 1});

Item.createItem("diamond_hatchet", "Diamond Hatchet", {name: "diamond_hatchet"}, {stack: 1});
Item.createItem("diamond_pickaxe", "Diamond Pickaxe", {name: "diamond_pickaxe"}, {stack: 1});
Item.createItem("diamond_axe", "Diamond Axe", {name: "diamond_axe"}, {stack: 1});
Item.createItem("diamond_shovel", "Diamond Shovel", {name: "diamond_shovel"}, {stack: 1});
Item.createItem("diamond_hoe", "Diamond Hoe", {name: "diamond_hoe"}, {stack: 1});

ToolType.shears = { damage: 0 };

ToolAPI.addToolMaterial("obsidian", {
    durability: 2032,
    level: 4,
    efficiency: 32,
    damage: 14,
    enchantability: 30
});

ToolAPI.addToolMaterial("quartz", {
    durability: 256,
    level: 4,
    efficiency: 16,
    damage: 4,
    enchantability: 30
});

ToolAPI.addToolMaterial("opal", {
    durability: 1561,
    level: 4,
    efficiency: 16,
    damage: 8,
    enchantability: 30
});

ToolAPI.addToolMaterial("emerald", {
    durability: 512,
    level: 4,
    efficiency: 16,
    damage: 7,
    enchantability: 30
});

ToolAPI.setTool(ItemID.flint_hatchet, "stone", ToolType.axe);
ToolAPI.setTool(ItemID.flint_pickaxe, "stone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.flint_axe, "stone", ToolType.axe);
ToolAPI.setTool(ItemID.flint_shovel, "stone", ToolType.shovel);
ToolAPI.setTool(ItemID.flint_hoe, "stone", ToolType.hoe);
ToolAPI.setTool(ItemID.flint_shears, "stone", ToolType.shears);

ToolAPI.setTool(ItemID.sharp_bone, "stone", ToolType.sword);
ToolAPI.setTool(ItemID.bone_hatchet, "stone", ToolType.axe);
ToolAPI.setTool(ItemID.bone_pickaxe, "stone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bone_shovel, "stone", ToolType.shovel);
ToolAPI.setTool(ItemID.bone_hoe, "stone", ToolType.hoe);
ToolAPI.setTool(ItemID.bone_shears, "stone", ToolType.shears);

ToolAPI.setTool(ItemID.quartz_hatchet, "quartz", ToolType.axe);
ToolAPI.setTool(ItemID.quartz_pickaxe, "quartz", ToolType.pickaxe);
ToolAPI.setTool(ItemID.quartz_axe, "quartz", ToolType.axe);
ToolAPI.setTool(ItemID.quartz_shovel, "quartz", ToolType.shovel);
ToolAPI.setTool(ItemID.quartz_hoe, "quartz", ToolType.hoe);
ToolAPI.setTool(ItemID.quartz_shears, "quartz", ToolType.shears);

ToolAPI.setTool(ItemID.obsidian_hatchet, "obsidian", ToolType.axe);
ToolAPI.setTool(ItemID.obsidian_pickaxe, "obsidian", ToolType.pickaxe);
ToolAPI.setTool(ItemID.obsidian_axe, "obsidian", ToolType.axe);
ToolAPI.setTool(ItemID.obsidian_shovel, "obsidian", ToolType.shovel);
ToolAPI.setTool(ItemID.obsidian_hoe, "obsidian", ToolType.hoe);

ToolAPI.setTool(ItemID.opal_hatchet, "opal", ToolType.axe);
ToolAPI.setTool(ItemID.opal_pickaxe, "opal", ToolType.pickaxe);
ToolAPI.setTool(ItemID.opal_axe, "opal", ToolType.axe);
ToolAPI.setTool(ItemID.opal_shovel, "opal", ToolType.shovel);
ToolAPI.setTool(ItemID.opal_hoe, "opal", ToolType.hoe);

ToolAPI.setTool(ItemID.emerald_hatchet, "emerald", ToolType.axe);
ToolAPI.setTool(ItemID.emerald_pickaxe, "emerald", ToolType.pickaxe);
ToolAPI.setTool(ItemID.emerald_axe, "emerald", ToolType.axe);
ToolAPI.setTool(ItemID.emerald_shovel, "emerald", ToolType.shovel);
ToolAPI.setTool(ItemID.emerald_hoe, "emerald", ToolType.hoe);

ToolAPI.setTool(ItemID.diamond_hatchet, "diamond", ToolType.axe);
ToolAPI.setTool(ItemID.diamond_pickaxe, "diamond", ToolType.pickaxe);
ToolAPI.setTool(ItemID.diamond_axe, "diamond", ToolType.axe);
ToolAPI.setTool(ItemID.diamond_shovel, "diamond", ToolType.shovel);
ToolAPI.setTool(ItemID.diamond_hoe, "diamond", ToolType.hoe);




// file: block.js

IDRegistry.genBlockID("survivalist_iron_ore_one");
IDRegistry.genBlockID("survivalist_iron_ore_two");
IDRegistry.genBlockID("survivalist_gold_ore_one");
IDRegistry.genBlockID("survivalist_gold_ore_two");
IDRegistry.genBlockID("copper_ore");
IDRegistry.genBlockID("lead_ore");
IDRegistry.genBlockID("tin_ore");

Block.createBlock("survivalist_iron_ore_one", [{
    name: "Iron Ore\n(1)",
    texture: [["survivalist_iron_ore", 1]],
    inCreative: true
}], Block.createSpecialType({ base: 15 }));

Block.createBlock("survivalist_iron_ore_two", [{
    name: "Iron Ore\n(2)",
    texture: [["survivalist_iron_ore", 2]],
    inCreative: true
}], Block.createSpecialType({ base: 15 }));

Block.createBlock("survivalist_gold_ore_one", [{
    name: "Gold Ore\n(1)",
    texture: [["survivalist_gold_ore", 1]],
    inCreative: true
}], Block.createSpecialType({ base: 14 }));

Block.createBlock("survivalist_gold_ore_two", [{
    name: "Gold Ore\n(2)",
    texture: [["survivalist_gold_ore", 2]],
    inCreative: true
}], Block.createSpecialType({ base: 14 }));

Block.createBlock("copper_ore", [{
    name: "Copper Ore",
    texture: [["ore_copper", 0]],
    inCreative: true
}], Block.createSpecialType({ base: 15 }));

Block.createBlock("lead_ore", [{
    name: "Lead Ore",
    texture: [["ore_lead", 0]],
    inCreative: true
}], Block.createSpecialType({ base: 15 }));

Block.createBlock("tin_ore", [{
    name: "Tin Ore",
    texture: [["ore_tin", 0]],
    inCreative: true
}], Block.createSpecialType({ base: 15 }));

Block.setBlockMaterial(BlockID.survivalist_iron_ore_one, "stone", 2);
Block.setBlockMaterial(BlockID.survivalist_iron_ore_two, "stone", 2);
Block.setBlockMaterial(BlockID.survivalist_gold_ore_one, "stone", 3);
Block.setBlockMaterial(BlockID.survivalist_gold_ore_two, "stone", 3);
Block.setBlockMaterial(BlockID.copper_ore, "stone", 2);
Block.setBlockMaterial(BlockID.lead_ore, "stone", 3);
Block.setBlockMaterial(BlockID.tin_ore, "stone", 3);

Block.setDestroyLevel("survivalist_iron_ore_one", 2);
Block.setDestroyLevel("survivalist_iron_ore_two", 2);
Block.setDestroyLevel("survivalist_gold_ore_one", 3);
Block.setDestroyLevel("survivalist_gold_ore_two", 3);
Block.setDestroyLevel("copper_ore", 2);
Block.setDestroyLevel("lead_ore", 3);
Block.setDestroyLevel("tin_ore", 3);

Block.setDestroyTime(BlockID.survivalist_iron_ore_one, 30);
Block.setDestroyTime(BlockID.survivalist_iron_ore_two, 30);
Block.setDestroyTime(BlockID.survivalist_gold_ore_one, 30);
Block.setDestroyTime(BlockID.survivalist_gold_ore_two, 30);
Block.setDestroyTime(BlockID.copper_ore, 23);
Block.setDestroyTime(BlockID.lead_ore, 40);
Block.setDestroyTime(BlockID.tin_ore, 40);




// file: event_handling.js

function rand(limit, min)
{
    if (!min)
    {
        min = 0;
    }

    let random = Math.floor(Math.random() * (limit + 1));

    return random < min ? min : random;
}

function spread(x, y, z)
{
    let data = World.getBlock(x, y, z).data;

    if (data == 0)
    {
        World.setBlock(x, y, z, 4, 0);
    }
    else
    {
        if (data % 2 == 0 && rand(10) % 4 == 0)
        {
            World.setBlock(x, y, z, 1, data - 1);
        }
    }
}

Callback.addCallback("ServerPlayerTick", function(playerUid)
{
    switch (Game.getDifficulty())
    {
        case 0:
            Entity.setMaxHealth(playerUid, 20);
            break;
            
        case 1:
            Entity.setMaxHealth(playerUid, 14);
            break;

        case 2:
            Entity.setMaxHealth(playerUid, 10);
            break;

        case 3:
            Entity.setMaxHealth(playerUid, 6);
            break;
    }
});

let damageBlocks = [1, 4, 14, 15, 16, 17, 21, 22, 23, 24, 41, 42, 45, 48, 49, 52, 56, 57, 61, 62, 67, 73, 74, 87, 97, 98, 101, 108, 109, 112, 113, 114, 116, 118, 121, 128, 129, 130, 133, 138, 139, 145, 152, 153, 154, 155, 156, 158, 162, 167, 168, 179, 180, 181, 201, 202, 203, 204, 205, 206, 213, 215, 216];
let axeTypes = [271, 275, 258, 286, 279, ItemID.flint_hatchet, ItemID.flint_axe, ItemID.bone_hatchet, ItemID.quartz_hatchet, ItemID.quartz_axe, ItemID.obsidian_hatchet, ItemID.obsidian_axe, ItemID.opal_hatchet, ItemID.opal_axe, ItemID.emerald_hatchet, ItemID.emerald_axe, ItemID.diamond_hatchet, ItemID.diamond_axe];

Callback.addCallback("DestroyBlock", function(coords, block, player)
{
    if (block.id == 31 && block.data == 1)
    {
        World.drop(coords.x, coords.y, coords.z, ItemID.plant_fiber, rand(1), 0);
    }

    if (block.id == 1 || block.id == 4 || block.id == 14 || block.id == 15 || block.id == 16 || block.id == 21 || block.id == 56 || block.id == 73 || block.id == 74 || block.id == 129)
    {
        let x = coords.x, y = coords.y, z = coords.z;

        if (World.getBlock(x + 1, y, z).id == 1)
        {
            spread(x + 1, y, z);
        }

        if (World.getBlock(x - 1, y, z).id == 1)
        {
            spread(x - 1, y, z);
        }

        if (World.getBlock(x, y + 1, z).id == 1)
        {
            spread(x, y + 1, z);
        }

        if (World.getBlock(x, y - 1, z).id == 1)
        {
            spread(x, y - 1, z);
        }

        if (World.getBlock(x, y, z + 1).id == 1)
        {
            spread(x, y, z + 1);
        }

        if (World.getBlock(x, y, z - 1).id == 1)
        {
            spread(x, y, z - 1);
        }
    }

    if (block.id == 18 || block.id == 161)
    {
        World.drop(coords.x, coords.y, coords.z, 280, rand(10) % 3 == 0 ? 1 : 0, 0);
    }

    if (block.id == 18 || block.id == 30 || block.id == 31 || block.id == 32 || block.id == 106 || block.id == 161)
    {
        let itemId = Entity.getCarriedItem(player).id;
        
        if (itemId == ItemID.flint_shears || itemId == ItemID.bone_shears || itemId == ItemID.quartz_shears)
        {
            World.drop(coords.x, coords.y, coords.z, block.id, 1, block.data);
        }
    }

    if (Entity.getCarriedItem(player).id == 0)
    {
        for (let i in damageBlocks)
        {
            if (block.id == damageBlocks[i])
            {
                Entity.damageEntity(player, 2);
                break;
            }
        }
    }
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player)
{
    /*
    if (item.id == 318 && block.id == 1)
    {
        World.drop(coords.x, coords.y + 1, coords.z, ItemID.flaked_flint, rand(1), 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, 0);
        rockHit.setInBlock(coords.x, coords.y, coords.z, 5);
        rockHit.play();
    }

    if (item.id == ItemID.flaked_flint && block.id == 1)
    {
        World.drop(coords.x, coords.y, coords.z, ItemID.flaked_flint_point, rand(10) % 3 == 0 ? 2 : 0, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, 0);
        rockHit.setInBlock(coords.x, coords.y, coords.z, 5);
        rockHit.play();
    }
    */

    if (block.id == 17)
    {
        for (let i in axeTypes)
        {
            if (item.id != axeTypes[i])
            {
                continue;
            }

            switch (block.data)
            {
                case 0:
                    World.drop(coords.x, coords.y, coords.z, ItemID.bark_oak, 1, 0);
                    break;

                case 1:
                    World.drop(coords.x, coords.y, coords.z, ItemID.bark_spruce, 1, 0);
                    break;

                case 2:
                    World.drop(coords.x, coords.y, coords.z, ItemID.bark_birch, 1, 0);
                    break;

                case 3:
                    World.drop(coords.x, coords.y, coords.z, ItemID.bark_jungle, 1, 0);
                    break;
            }

            break;
        }
    }

    if (block.id == 162)
    {
        for (let i in axeTypes)
        {
            if (item.id != axeTypes[i])
            {
                continue;
            }

            switch (block.data)
            {
                case 0:
                    World.drop(coords.x, coords.y, coords.z, ItemID.bark_acacia, 1, 0);
                    break;

                case 1:
                    World.drop(coords.x, coords.y, coords.z, ItemID.bark_dark_oak, 1, 0);
                    break;
            }
        }
    }

    if (Item.getName(item.id) == "Water Bucket")
    {
        let x = coords.x, y = coords.y, z = coords.z;

        if (World.getBlock(x + 1, y, z).id == 0)
        {
            World.setBlock(x + 1, y, z, 0, 0);
        }

        if (World.getBlock(x - 1, y, z).id == 0)
        {
            World.setBlock(x - 1, y, z, 0, 0);
        }

        if (World.getBlock(x, y + 1, z).id == 0)
        {
            World.setBlock(x, y + 1, z, 0, 0);
        }

        if (World.getBlock(x, y - 1, z).id == 0)
        {
            World.setBlock(x, y - 1, z, 0, 0);
        }

        if (World.getBlock(x, y, z + 1).id == 0)
        {
            World.setBlock(x, y, z + 1, 0, 0);
        }

        if (World.getBlock(x, y, z - 1).id == 0)
        {
            World.setBlock(x, y, z - 1, 0, 0);
        }

        World.setBlock(x, y, z, block.id, block.data);
    }
});

let rockHit = new Sound("rock_hit.ogg");

Block.registerClickFunction(1, function(coords, item, block, player)
{
    let x = coords.x, y = coords.y, z = coords.z;
    let flag = false;

    switch (item.id)
    {
        case 318:
            World.drop(x, y + 1, z, ItemID.flaked_flint, rand(1), 0);
            flag = true;
            break;

        case 352:
            World.drop(x, y + 1, z, ItemID.sharp_bone, rand(1) == 1 ? 2 : 0, 0);
            flag = true;
            break;

        case 406:
            World.drop(x, y + 1, z, ItemID.flaked_quartz, rand(1), 0);
            flag = true;
            break;

        case 388:
            World.drop(x, y + 1, z, ItemID.flaked_emerald, rand(1) == 1 ? 3 : 0, 0);
            flag = true;
            break;

        case 264:
            World.drop(x, y + 1, z, ItemID.flaked_diamond, rand(1) == 1 ? 3 : 0, 0);
            flag = true;
            break;

        case ItemID.sharp_bone:
            World.drop(x, y + 1, z, ItemID.flaked_bone, rand(1) == 1 ? 2 : 0, 0);
            flag = true;
            break;

        case ItemID.obsidian_sharp:
            World.drop(x, y + 1, z, ItemID.flaked_obsidian, rand(1) == 1 ? 4 : 0, 0);
            flag = true;
            break;

        case ItemID.flaked_flint:
            World.drop(x, y + 1, z, ItemID.flaked_flint_point, rand(1), 0);
            flag = true;
            break;

        case ItemID.flaked_bone:
            World.drop(x, y + 1, z, ItemID.flaked_bone_point, rand(1) == 1 ? 2 : 0, 0);
            flag = true;
            break;

        case ItemID.flaked_quartz:
            World.drop(x, y + 1, z, ItemID.flaked_quartz_point, rand(1) == 1 ? 2 : 0, 0);
            flag = true;
            break;

        case ItemID.flaked_obsidian:
            World.drop(x, y + 1, z, ItemID.flaked_obsidian_point, rand(1) == 1 ? 2 : 0, 0);
            flag = true;
            break;

        case ItemID.flaked_opal:
            World.drop(x, y + 1, z, ItemID.flaked_opal_point, rand(1) == 1 ? 2 : 0, 0);
            flag = true;
            break;

        case ItemID.flaked_emerald:
            World.drop(x, y + 1, z, ItemID.flaked_emerald_point, rand(1) == 1 ? 2 : 0, 0);
            flag = true;
            break;

        case ItemID.flaked_diamond:
            World.drop(x, y + 1, z, ItemID.flaked_diamond_point, rand(1) == 1 ? 2 : 0, 0);
            flag = true;
            break;

        /**
         * thêm xử lí sự kiện !
         */
    }

    if (flag)
    {        
        Entity.setCarriedItem(player, item.id, item.count - 1, 0);
        rockHit.setInBlock(x, y, z, 5);
        rockHit.play();
    }
});

Block.registerDropFunction(12, function(blockCoords, blockID, blockData)
{
    if (blockData == 0 && rand(10) % 4 == 0)
    {
        return [[318, 1, 0]];
    }

    return [[12, 1, blockData]];
});

Block.registerDropFunction(17, function(blockCoords, blockID, blockData, diggingLevel)
{
    if (diggingLevel > 0)
    {
        return [[17, 1, blockData]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(162, function(blockCoords, blockID, blockData, diggingLevel)
{
    if (diggingLevel > 0)
    {
        return [[162, 1, blockData]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(1, function(blockCoords, blockID, blockData, diggingLevel)
{
    if (diggingLevel > 0)
    {
        switch (blockData)
        {
            case 0: return [[ItemID.rock, 8, 0]];
            case 1: return [[ItemID.granite_rock, 8, 0]];
            case 3: return [[ItemID.diorite_rock, 8, 0]];
            case 5: return [[ItemID.andesite_rock, 8, 0]];
        }
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(4, function(blockCoords, blockID, blockData, diggingLevel)
{
    if (diggingLevel > 0)
    {
        return [[ItemID.rock, 8, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(87, function(blockCoords, blockID, blockData, diggingLevel)
{
    if (diggingLevel > 0)
    {
        return [[ItemID.netherrack_rock, 8, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(121, function(blockCoords, blockID, blockData, diggingLevel)
{
    if (diggingLevel > 0)
    {
        return [[ItemID.end_stone_rock, 8, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(16, function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 0)
    {
        return [[263, rand(enchant.fortune + 1, 1), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(21, function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 1)
    {
        return [[351, rand(enchant.fortune == 0 ? 1 : 3 * enchant.fortune, 1), 4], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(56, function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 2)
    {
        return [[264, rand(enchant.fortune + 1, 1), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(73, function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 2)
    {
        return [[331, rand(enchant.fortune + 5, 5), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(74, function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 2)
    {
        return [[331, rand(enchant.fortune + 5, 5), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(129, function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 2)
    {
        return [[388, rand(enchant.fortune + 1, 1), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(15, function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 1)
    {
        return [[ItemID.iron_ore_rock, enchant.fortune == 0 ? 3 : 3 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction("survivalist_iron_ore_one", function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 1)
    {
        return [[ItemID.iron_ore_rock, enchant.fortune == 0 ? 3 : 3 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction("survivalist_iron_ore_two", function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 1)
    {
        return [[ItemID.iron_ore_rock, enchant.fortune == 0 ? 2 : 2 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction(14, function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 2)
    {
        return [[ItemID.gold_ore_rock, enchant.fortune == 0 ? 3 : 3 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction("survivalist_gold_ore_one", function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 2)
    {
        return [[ItemID.gold_ore_rock, enchant.fortune == 0 ? 3 : 3 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction("survivalist_gold_ore_two", function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 2)
    {
        return [[ItemID.gold_ore_rock, enchant.fortune == 0 ? 2 : 2 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction("copper_ore", function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 1)
    {
        return [[ItemID.copper_ore_rock, 8, 0], [ItemID.rock, 4, 0]];
    }
    
    return [[0, 0, 0]];
});

Block.registerDropFunction("lead_ore", function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 2)
    {
        return [[ItemID.lead_ore_rock, 8, 0], [ItemID.rock, 4, 0]];
    }

    return [[0, 0, 0]];
});

Block.registerDropFunction("tin_ore", function(blockCoords, blockID, blockData, diggingLevel, enchant)
{
    if (diggingLevel > 2)
    {
        return [[ItemID.tin_ore_rock, 8, 0], [ItemID.rock, 4, 0]];
    }

    return [[0, 0, 0]];
});




// file: recipe.js

Recipes.addFurnace(ItemID.copper_ore_rock, 0, ItemID.copper_nugget, 0);
Recipes.addFurnace(ItemID.lead_ore_rock, 0, ItemID.lead_nugget, 0);
Recipes.addFurnace(ItemID.tin_ore_rock, 0, ItemID.tin_nugget, 0);
Recipes.addFurnace(ItemID.bread_dough, 0, ItemID.round_bread, 0);
Recipes.addFurnace(ItemID.iron_ore_rock, 0, 452, 0);
Recipes.addFurnace(ItemID.gold_ore_rock, 0, 371, 0);

Recipes.addFurnaceFuel(ItemID.bark_oak, 0, 200);
Recipes.addFurnaceFuel(ItemID.bark_birch, 0, 200);
Recipes.addFurnaceFuel(ItemID.bark_spruce, 0, 200);
Recipes.addFurnaceFuel(ItemID.bark_jungle, 0, 200);
Recipes.addFurnaceFuel(ItemID.bark_acacia, 0, 200);
Recipes.addFurnaceFuel(ItemID.bark_dark_oak, 0, 200);

Recipes.addShapeless({id: ItemID.bread_dough, count: 1, data: 0}, [
    {id: 296, data: 0},
    {id: 296, data: 0},
    {id: 296, data: 0},
    {id: 296, data: 0}
]);

Recipes.addShapeless({id: 318, count: 1, data: 0}, [
    {id: 13, data: 0},
    {id: 13, data: 0},
    {id: 13, data: 0},
    {id: 13, data: 0}
]);

Recipes.addShapeless({id: ItemID.flaked_flint, count: 1, data: 0}, [
    {id: 318, data: 0},
    {id: ItemID.rock, data: 0}
]);

Recipes.addShapeless({id: ItemID.flaked_flint, count: 1, data: 0}, [
    {id: 318, data: 0},
    {id: ItemID.andesite_rock, data: 0}
]);

Recipes.addShapeless({id: ItemID.flaked_flint, count: 1, data: 0}, [
    {id: 318, data: 0},
    {id: ItemID.diorite_rock, data: 0}
]);

Recipes.addShapeless({id: ItemID.flaked_flint, count: 1, data: 0}, [
    {id: 318, data: 0},
    {id: ItemID.granite_rock, data: 0}
]);

Recipes.addShapeless({id: ItemID.flaked_flint, count: 1, data: 0}, [
    {id: 318, data: 0},
    {id: ItemID.netherrack_rock, data: 0}
]);

Recipes.addShapeless({id: ItemID.flaked_flint, count: 1, data: 0}, [
    {id: 318, data: 0},
    {id: ItemID.end_stone_rock, data: 0}
]);

Recipes.addShapeless({id: ItemID.plant_cordage, count: 1, data: 0}, [
    {id: ItemID.plant_fiber, data: 0},
    {id: ItemID.plant_fiber, data: 0},
    {id: ItemID.plant_fiber, data: 0}
]);

Recipes.addShapeless({id: ItemID.flint_hatchet, count: 1, data: 0}, [
    {id: ItemID.plant_cordage, data: 0},
    {id: ItemID.flaked_flint, data: 0},
    {id: 280, data: 0}
]);

Recipes.addShapeless({id: ItemID.flint_hoe, count: 1, data: 0}, [
    {id: ItemID.flaked_flint, data: 0},
    {id: ItemID.plant_cordage, data: 0},
    {id: 280, data: 0}
]);

Recipes.addShapeless({id: ItemID.sharp_bone, count: 1, data: 0}, [
    {id: 352, data: 0},
    {id: ItemID.flaked_flint, data: 0}
]);

Recipes.addShaped({id: ItemID.flint_shears, count: 1, data: 0}, [
    " f ",
    "fp ",
    "   "
], ['f', ItemID.flaked_flint_point, 0, 'p', ItemID.plant_cordage, 0]);

Recipes.addShaped({id: ItemID.flint_shears, count: 1, data: 0}, [
    " f ",
    "fp ",
    "   "
], ['f', ItemID.flaked_bone_point, 0, 'p', ItemID.plant_cordage, 0]);

Recipes.addShaped({id: ItemID.flint_shears, count: 1, data: 0}, [
    " f ",
    "fp ",
    "   "
], ['f', ItemID.flaked_quartz_point, 0, 'p', ItemID.plant_cordage, 0]);

Recipes.addShaped({id: 4, count: 1, data: 0}, [
    "rrr",
    "rcr",
    "rrr"
], ['r', ItemID.rock, 0, 'c', 337, 0]);

Recipes.addShaped({id: 1, count: 1, data: 1}, [
    "rrr",
    "rcr",
    "rrr"
], ['r', ItemID.granite_rock, 0, 'c', 337, 0]);

Recipes.addShaped({id: 1, count: 1, data: 3}, [
    "rrr",
    "rcr",
    "rrr"
], ['r', ItemID.diorite_rock, 0, 'c', 337, 0]);

Recipes.addShaped({id: 1, count: 1, data: 5}, [
    "rrr",
    "rcr",
    "rrr"
], ['r', ItemID.andesite_rock, 0, 'c', 337, 0]);

Recipes.addShaped({id: 87, count: 1, data: 0}, [
    "rrr",
    "rcr",
    "rrr"
], ['r', ItemID.netherrack_rock, 0, 'c', 337, 0]);

Recipes.addShaped({id: 121, count: 1, data: 0}, [
    "rrr",
    "rcr",
    "rrr"
], ['r', ItemID.end_stone_rock, 0, 'c', 337, 0]);

Recipes.addShaped({id: ItemID.flint_pickaxe, count: 1, data: 0}, [
    "fpf",
    "fsf",
    " s "
], ['f', ItemID.flaked_flint, 0, 'p', ItemID.plant_cordage, 0, 's', 280, 0]);

Recipes.addShaped({id: ItemID.flint_shovel, count: 1, data: 0}, [
    " f ",
    " p ",
    " s "
], ['f', 318, 0, 'p', ItemID.plant_cordage, 0, 's', 280, 0]);

Recipes.addShaped({id: ItemID.flint_axe, count: 1, data: 0}, [
    "fpf",
    "fs ",
    " s"
], ['f', ItemID.flaked_flint, 0, 'p', ItemID.plant_cordage, 0, 's', 280, 0]);




