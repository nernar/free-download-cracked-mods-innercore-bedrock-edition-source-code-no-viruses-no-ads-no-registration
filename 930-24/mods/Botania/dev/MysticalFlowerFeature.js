let MysticalFlowerFeature = (function (_super) {
    __extends(MysticalFlowerFeature, _super);
    function MysticalFlowerFeature() {
        let _this = _super.apply(this, arguments) || this;
        return _this;
    }
    MysticalFlowerFeature.prototype.generate = function (region, rand, pos, config) {
        let dist = Math.min(8, Math.max(1, config.getPatchRadius()));
        for (let i = 0; i < config.getPatchCount(); i++) {
            if (!rand.nextInt(config.getPatchChance())) {
                let x = pos.getX() + rand.nextInt(16);
                let z = pos.getZ() + rand.nextInt(16);
                let y = 50 + rand.nextInt(128 - 50);
                let data = rand.nextInt(16);
                for (let j = 0; j < config.getPatchDensity() * config.getPatchChance(); j++) {
                    let x1 = x + rand.nextInt(dist * 2) - dist;
                    let y1 = GenerationUtils.findSurface(x, y, z).y;
                    let z1 = z + rand.nextInt(dist * 2) - dist;
                    let pos2 = new BlockPos(x1, y1, z1);
                    if (region.isAirBlock(pos2) && ModBlocks.mysticalFlower.isValidPosition(region, pos2)) {
                        region.setBlock(pos2, ModBlocks.mysticalFlower.id, data);
                        if (rand.nextDouble() < config.getTallChance() && ModBlocks.mysticalFlower.canGrow(region, pos2, region.getBlock(pos2))) {
                            ModBlocks.doubleFlower.placeAt(region, pos2, data);
                        }
                    }
                }
            }
        }
    };
    return MysticalFlowerFeature;
}(Feature));

