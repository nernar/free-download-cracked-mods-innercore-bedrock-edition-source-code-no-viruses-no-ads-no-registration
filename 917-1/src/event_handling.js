function rand(limit, min) {
    if (!min) {
        min = 0;
    }
    let random = Math.floor(Math.random() * (limit + 1));
    return random < min ? min : random;
}
function spread(x, y, z) {
    let data = World.getBlock(x, y, z).data;
    if (data == 0) {
        World.setBlock(x, y, z, 4, 0);
    } else {
        if (data % 2 == 0 && rand(10) % 4 == 0) {
            World.setBlock(x, y, z, 1, data - 1);
        }
    }
}
Callback.addCallback("ServerPlayerTick", function (playerUid) {
    switch (Game.getDifficulty()) {
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
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (block.id == 31 && block.data == 1) {
        World.drop(coords.x, coords.y, coords.z, ItemID.plant_fiber, rand(1), 0);
    }
    if (block.id == 1 || block.id == 4 || block.id == 14 || block.id == 15 || block.id == 16 || block.id == 21 || block.id == 56 || block.id == 73 || block.id == 74 || block.id == 129) {
        let x = coords.x, y = coords.y, z = coords.z;
        if (World.getBlock(x + 1, y, z).id == 1) {
            spread(x + 1, y, z);
        }
        if (World.getBlock(x - 1, y, z).id == 1) {
            spread(x - 1, y, z);
        }
        if (World.getBlock(x, y + 1, z).id == 1) {
            spread(x, y + 1, z);
        }
        if (World.getBlock(x, y - 1, z).id == 1) {
            spread(x, y - 1, z);
        }
        if (World.getBlock(x, y, z + 1).id == 1) {
            spread(x, y, z + 1);
        }
        if (World.getBlock(x, y, z - 1).id == 1) {
            spread(x, y, z - 1);
        }
    }
    if (block.id == 18 || block.id == 161) {
        World.drop(coords.x, coords.y, coords.z, 280, rand(10) % 3 == 0 ? 1 : 0, 0);
    }
    if (block.id == 18 || block.id == 30 || block.id == 31 || block.id == 32 || block.id == 106 || block.id == 161) {
        let itemId = Entity.getCarriedItem(player).id;
        if (itemId == ItemID.flint_shears || itemId == ItemID.bone_shears || itemId == ItemID.quartz_shears) {
            World.drop(coords.x, coords.y, coords.z, block.id, 1, block.data);
        }
    }
    if (Entity.getCarriedItem(player).id == 0) {
        for (let i in damageBlocks) {
            if (block.id == damageBlocks[i]) {
                Entity.damageEntity(player, 2);
                break;
            }
        }
    }
});
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
    if (block.id == 17) {
        for (let i in axeTypes) {
            if (item.id != axeTypes[i]) {
                continue;
            }
            switch (block.data) {
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
    if (block.id == 162) {
        for (let i in axeTypes) {
            if (item.id != axeTypes[i]) {
                continue;
            }
            switch (block.data) {
              case 0:
                World.drop(coords.x, coords.y, coords.z, ItemID.bark_acacia, 1, 0);
                break;
              case 1:
                World.drop(coords.x, coords.y, coords.z, ItemID.bark_dark_oak, 1, 0);
                break;
            }
        }
    }
    if (Item.getName(item.id) == "Water Bucket") {
        let x = coords.x, y = coords.y, z = coords.z;
        if (World.getBlock(x + 1, y, z).id == 0) {
            World.setBlock(x + 1, y, z, 0, 0);
        }
        if (World.getBlock(x - 1, y, z).id == 0) {
            World.setBlock(x - 1, y, z, 0, 0);
        }
        if (World.getBlock(x, y + 1, z).id == 0) {
            World.setBlock(x, y + 1, z, 0, 0);
        }
        if (World.getBlock(x, y - 1, z).id == 0) {
            World.setBlock(x, y - 1, z, 0, 0);
        }
        if (World.getBlock(x, y, z + 1).id == 0) {
            World.setBlock(x, y, z + 1, 0, 0);
        }
        if (World.getBlock(x, y, z - 1).id == 0) {
            World.setBlock(x, y, z - 1, 0, 0);
        }
        World.setBlock(x, y, z, block.id, block.data);
    }
});
let rockHit = new Sound("rock_hit.ogg");
Block.registerClickFunction(1, function (coords, item, block, player) {
    let x = coords.x, y = coords.y, z = coords.z;
    let flag = false;
    switch (item.id) {
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
    }
    if (flag) {
        Entity.setCarriedItem(player, item.id, item.count - 1, 0);
        rockHit.setInBlock(x, y, z, 5);
        rockHit.play();
    }
});
Block.registerDropFunction(12, function (blockCoords, blockID, blockData) {
    if (blockData == 0 && rand(10) % 4 == 0) {
        return [[318, 1, 0]];
    }
    return [[12, 1, blockData]];
});
Block.registerDropFunction(17, function (blockCoords, blockID, blockData, diggingLevel) {
    if (diggingLevel > 0) {
        return [[17, 1, blockData]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(162, function (blockCoords, blockID, blockData, diggingLevel) {
    if (diggingLevel > 0) {
        return [[162, 1, blockData]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(1, function (blockCoords, blockID, blockData, diggingLevel) {
    if (diggingLevel > 0) {
        switch (blockData) {
          case 0:
            return [[ItemID.rock, 8, 0]];
          case 1:
            return [[ItemID.granite_rock, 8, 0]];
          case 3:
            return [[ItemID.diorite_rock, 8, 0]];
          case 5:
            return [[ItemID.andesite_rock, 8, 0]];
        }
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(4, function (blockCoords, blockID, blockData, diggingLevel) {
    if (diggingLevel > 0) {
        return [[ItemID.rock, 8, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(87, function (blockCoords, blockID, blockData, diggingLevel) {
    if (diggingLevel > 0) {
        return [[ItemID.netherrack_rock, 8, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(121, function (blockCoords, blockID, blockData, diggingLevel) {
    if (diggingLevel > 0) {
        return [[ItemID.end_stone_rock, 8, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(16, function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 0) {
        return [[263, rand(enchant.fortune + 1, 1), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(21, function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 1) {
        return [[351, rand(enchant.fortune == 0 ? 1 : 3 * enchant.fortune, 1), 4], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(56, function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 2) {
        return [[264, rand(enchant.fortune + 1, 1), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(73, function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 2) {
        return [[331, rand(enchant.fortune + 5, 5), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(74, function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 2) {
        return [[331, rand(enchant.fortune + 5, 5), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(129, function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 2) {
        return [[388, rand(enchant.fortune + 1, 1), 0], [ItemID.rock, enchant.fortune == 0 ? 4 : 8, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(15, function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 1) {
        return [[ItemID.iron_ore_rock, enchant.fortune == 0 ? 3 : 3 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction("survivalist_iron_ore_one", function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 1) {
        return [[ItemID.iron_ore_rock, enchant.fortune == 0 ? 3 : 3 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction("survivalist_iron_ore_two", function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 1) {
        return [[ItemID.iron_ore_rock, enchant.fortune == 0 ? 2 : 2 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction(14, function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 2) {
        return [[ItemID.gold_ore_rock, enchant.fortune == 0 ? 3 : 3 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction("survivalist_gold_ore_one", function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 2) {
        return [[ItemID.gold_ore_rock, enchant.fortune == 0 ? 3 : 3 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction("survivalist_gold_ore_two", function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 2) {
        return [[ItemID.gold_ore_rock, enchant.fortune == 0 ? 2 : 2 * enchant.fortune, 0], [ItemID.rock, 4, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction("copper_ore", function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 1) {
        return [[ItemID.copper_ore_rock, 8, 0], [ItemID.rock, 4, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction("lead_ore", function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 2) {
        return [[ItemID.lead_ore_rock, 8, 0], [ItemID.rock, 4, 0]];
    }
    return [[0, 0, 0]];
});
Block.registerDropFunction("tin_ore", function (blockCoords, blockID, blockData, diggingLevel, enchant) {
    if (diggingLevel > 2) {
        return [[ItemID.tin_ore_rock, 8, 0], [ItemID.rock, 4, 0]];
    }
    return [[0, 0, 0]];
});

