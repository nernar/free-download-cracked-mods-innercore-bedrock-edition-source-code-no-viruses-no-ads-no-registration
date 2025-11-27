IDRegistry.genItemID("boss_summon_eye");
Item.createItem("boss_summon_eye", "dc.item.boss_summon_eye", {name: "boss_summon_eye", meta: 0}, {stack: 16});
Item.registerUseFunction("boss_summon_eye", function (coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (region.getBlockId(coords.x, coords.y, coords.z) == BlockID.altar3 && region.getBlockId(coords.x, coords.y - 1, coords.z) == BlockID.altar1 && region.getBlockId(coords.x, coords.y - 1, coords.z + 1) == 41 && region.getBlockId(coords.x, coords.y - 1, coords.z - 1) == 41 && region.getBlockId(coords.x + 1, coords.y - 1, coords.z) == 41 && region.getBlockId(coords.x - 1, coords.y - 1, coords.z) == 41 && region.getBlockId(coords.x - 1, coords.y - 1, coords.z + 1) == BlockID.altar && region.getBlockId(coords.x - 1, coords.y - 1, coords.z - 1) == BlockID.altar && region.getBlockId(coords.x + 1, coords.y - 1, coords.z + 1) == BlockID.altar && region.getBlockId(coords.x + 1, coords.y - 1, coords.z - 1) == BlockID.altar) {
        region.setBlock(coords.x, coords.y, coords.z, 0, 0);
        region.spawnEntity(coords.x, coords.y, coords.z, "dungeoncraft:undead");
        region.setBlock(coords.x, coords.y - 1, coords.z, 0, 0);
        region.setBlock(coords.x + 1, coords.y - 1, coords.z, 0, 0);
        region.setBlock(coords.x - 1, coords.y - 1, coords.z, 0, 0);
        region.setBlock(coords.x, coords.y - 1, coords.z + 1, 0, 0);
        region.setBlock(coords.x, coords.y - 1, coords.z - 1, 0, 0);
        region.setBlock(coords.x + 1, coords.y - 1, coords.z + 1, 0, 0);
        region.setBlock(coords.x + 1, coords.y - 1, coords.z - 1, 0, 0);
        region.setBlock(coords.x - 1, coords.y - 1, coords.z + 1, 0, 0);
        region.setBlock(coords.x - 1, coords.y - 1, coords.z - 1, 0, 0);
    }
});

