ModAPI.addAPICallback("EquivalentAPI", function (api) {
    api.System.setValue(ItemID.clitok, 0, 4096);
    api.System.setValue(ItemID.Gem, 0, 16384);
    api.System.setValue(ItemID.Gem2, 0, 65536);
    api.System.setValue(BlockID.blockmetal, 0, 36864);
    api.System.setValue(BlockID.dirt2, 0, 1);
    api.System.setValue(BlockID.grass2, 0, 1);
    api.System.setValue(BlockID.glass2, 0, 36864);
    api.System.setValue(BlockID.stone2, 0, 1);
    api.System.setValue(BlockID.brick2, 0, 1);
});

