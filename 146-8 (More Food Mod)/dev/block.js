IDRegistry.genBlockID("rock_salt");
Block.createBlock("rock_salt", [{name: "Rock Salt", texture: [["rockSalt", 0]], inCreative: false}], "opaque");
Block.setDestroyTime(BlockID.rock_salt, 1.5);
ToolAPI.registerBlockMaterial(BlockID.rock_salt, "stone", 1, true);
Block.setDestroyLevel(BlockID.rock_salt, 1);
Block.registerDropFunction("rock_salt", function (coords, blockID, blockData, level, enchant) {
    if (level > 0) {
        ToolAPI.dropOreExp(coords, 0, 2, enchant.experience);
        return [[ItemID.salt, random(1, 4), 0]];
    }
    return [];
});

