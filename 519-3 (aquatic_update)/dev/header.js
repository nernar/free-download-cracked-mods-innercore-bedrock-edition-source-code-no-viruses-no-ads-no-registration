/**
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