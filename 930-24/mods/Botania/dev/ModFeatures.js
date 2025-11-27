let ModFeatures = (function (ModFeatures) {
    const MYSTICAL_FLOWERS = new MysticalFlowerFeature();
    const MYSTICAL_MUSHROOMS = new MysticalMushroomFeature();
    const MYSTICAL_FLOWERS_CONF = MYSTICAL_FLOWERS.withConfig(new MysticalFlowerConfig(6, 2, 2, 16, 0.05));
    const MYSTICAL_MUSHROOMS_CONF = MYSTICAL_MUSHROOMS.withConfig(new MysticalMushroomConfig(40));
    function register(feature) {
        Callback.addCallback("GenerateChunk", function (chunkX, chunkZ, rand, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
            let pos = new BlockPos(chunkX * 16, 64, chunkZ * 16);
            let region = WorldRegion.getCurrentWorldGenRegion();
            feature.generate(region, rand, pos, dimensionId, chunkSeed, worldSeed, dimensionSeed);
        });
    }
    ModFeatures.register = register;
    function registerFeatures() {
        register(MYSTICAL_FLOWERS_CONF);
        register(MYSTICAL_MUSHROOMS_CONF);
    }
    ModFeatures.registerFeatures = registerFeatures;
    return ModFeatures;
}({}));

