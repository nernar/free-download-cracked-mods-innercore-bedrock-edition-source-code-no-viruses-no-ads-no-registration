Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() * 20 >= 2) {
            return;
        }
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 100, 200);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.kristalLight, 0);
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() <= 0.04) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 100, 200);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.stone2, 2, 100, true);
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() <= 0.01) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            DungeonCore.setStructure("rai_home", coords.x, coords.y, coords.z);
            bs = BlockSource.getCurrentWorldGenRegion();
            bs.spawnEntity(coords.x, coords.y + 3, coords.z, "dc:angel");
        }
    }
});
var rai1 = new Dimensions.CustomDimension("rai1", 1345);
rai1.setSkyColor(0, 128, 188);
rai1.setFogColor(0, 128, 188);
rai1.setGenerator(Dimensions.newGenerator({layers: [{minY: 2, maxY: 75, yConversion: [[0, 0]], material: {base: 9}}, {minY: 0, maxY: 82, yConversion: [[0.7, 1], [1, -0.5]], material: {base: BlockID.stone2, surface: {id: BlockID.dirt2, data: 0, width: 4}, cover: BlockID.grass2}, noise: {octaves: {count: 4, scale: 20}}}, {minY: 0, maxY: 1, yConversion: [[0, 0]], material: {base: 7}}]}));
var rai_particle = Particles.registerParticleType({texture: "rai_particle", render: 2, size: [4, 10], lifetime: [40, 100], animators: {alpha: {fadeIn: 0.4, fadeOut: 0.4}, size: {fadeOut: 0.5, fadeIn: 0.2, start: 0, end: 0}}});
Callback.addCallback("LocalTick", function () {
    for (let i = 0; i < 5; i++) {
        Optimization.spawnParticleClient(rai1.id, rai_particle);
    }
});
Callback.addCallback("ServerPlayerTick", function (player, isPlayerDead) {
    Optimization.spawnEntity(rai1.id, 1000, "dc:soul_paradise");
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        for (i = 0; i < 4; i++) {
            let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            setWood(coords.x, coords.y - 1, coords.z, BlockSource.getCurrentWorldGenRegion());
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        for (i = 0; i < 15; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2) {
                if (World.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
                    World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.trava, 0);
                }
            }
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() * 20 <= 1) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2) {
                if (World.getBlock(coords.x, coords.y + 1, coords.z).id == 0) {
                    World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.a0, 0);
                }
            }
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() * 5 <= 3) {
            for (var i = 0; i < 4; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 35, 50);
                GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ore, 1, 5, true);
            }
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() * 20 <= 1) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            DungeonCore.setStructure("wood", coords.x, coords.y, coords.z);
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() * 100 <= 0.4) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            DungeonCore.setStructure("wood", coords.x, coords.y, coords.z);
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() <= 0.01) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            DungeonCore.setStructure("dc2_ritualRai", coords.x, coords.y, coords.z);
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() <= 0.01) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            DungeonCore.setStructure("grobnisa_rai", coords.x, coords.y, coords.z);
            ItemGenerateParadiseSuper.fillChest(coords.x, coords.y + 1, coords.z);
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        if (Math.random() <= 0.01) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            DungeonCore.setStructure("rai_new_structure", coords.x, coords.y, coords.z);
            ItemGenerateParadise.fillChest(coords.x - 2, coords.y + 5, coords.z + 2);
            ItemGenerateParadise.fillChest(coords.x + 2, coords.y + 5, coords.z - 2);
            Utility.setSpawnerEntity(coords.x + 2, coords.y + 5, coords.z + 2, "minecraft:skeleton");
            Utility.setSpawnerEntity(coords.x - 2, coords.y + 5, coords.z - 2, "minecraft:skeleton");
        }
    }
});
Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId) {
    if (dimensionId == rai1.id) {
        let random1 = Math.random() * 10;
        if (random1 <= 1) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            DungeonCore.setStructure("wood3", coords.x, coords.y, coords.z);
        }
    }
});
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
    if (item.id == ItemID.Gem) {
        let b = BlockSource.getDefaultForActor(player);
        if (b.getBlock(coords.x, coords.y, coords.z).id == BlockID.block1) {
            Dimensions.transfer(player, rai1.id);
            Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
            Entity.setCarriedItem(player, ItemID.GemEarth, 1, 0);
            Entity.addEffect(player, Native.PotionEffect.damageResistance, 9, 100);
        }
    }
});
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
    if (item.id == ItemID.Gem2) {
        let b = BlockSource.getDefaultForActor(player);
        if (b.getBlock(coords.x, coords.y, coords.z).id == BlockID.block1) {
            Dimensions.transfer(player, rai1.id);
            Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
            Entity.setCarriedItem(player, ItemID.GemEarth2, 1, 0);
            Entity.addEffect(player, Native.PotionEffect.damageResistance, 9, 100);
        }
    }
});
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
    if (item.id == ItemID.GemEarth) {
        Dimensions.transfer(player, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
    if (item.id == ItemID.GemEarth2) {
        Dimensions.transfer(player, 0);
        Entity.setCarriedItem(player, ItemID.Gem2, 1, 0);
    }
});

