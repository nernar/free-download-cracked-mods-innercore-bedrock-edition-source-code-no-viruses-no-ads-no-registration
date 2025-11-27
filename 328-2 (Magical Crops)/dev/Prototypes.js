var particles = 10;
CropRegistry.registerClass("magical_crops");
CropRegistry.registerClassConfig("magical_crops", {ageSpeed: 0.1, manure: {id: ItemID.magicalFertilizer, data: 0}, farmland: [{id: 60, data: 0}, {id: 60, data: 7}], seedsPlaceFunc: true, growStages: 3});
CropRegistry.setRegularFunctionsForClass("magical_crops", 1, particles);
CropRegistry.registerClassDeriveFunction("magical_crops", function (classs, idd) {
    var cfg = CropRegistry.getConfigFromCrop(idd);
    Harvest.registerDroppingBlock(idd);
    Block.setDestroyLevelForID(idd, 0);
    ToolAPI.registerBlockMaterial(idd, "plant");
    Block.setRandomTickCallback(idd, function (x, y, z, id, data) {
        for (var f in cfg.farmland) {
            if (World.getBlockID(x, y - 1, z) != cfg.farmland[f].id && World.getBlockData(x, y - 1, z) != cfg.farmland[f].data) {
                World.destroyBlock(x, y, z, true);
            }
        }
        var chance = cfg.ageSpeed;
        if (Math.random() < chance && data < 2) {
            World.setBlock(x, y, z, id, data + 1);
        }
    });
    if (config.particle_on_crops) {
        Block.setAnimateTickCallback(idd, function (x, y, z, id, data) {
            for (let i = Math.random() * 1 + 1 | 0; i--; ) {
                Particles.addParticle(Native.ParticleType.crit, x + Math.random(), y + Math.random() + 0.2, z + Math.random(), 0, -0.02, 0);
            }
        });
    }
    Block.registerDropFunction(idd, function (coords, blockID, blockData, level) {
        return [[CropRegistry.getSeedFromCrop(idd), 1, 0]];
    });
});

