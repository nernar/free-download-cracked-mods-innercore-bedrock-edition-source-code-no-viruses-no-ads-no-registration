let MysticalMushroomFeature = (function (_super) {
    __extends(MysticalMushroomFeature, _super);
    function MysticalMushroomFeature() {
        let _this = _super.apply(this, arguments) || this;
        return _this;
    }
    MysticalMushroomFeature.prototype.generate = function (region, rand, pos, config) {
        for (let i = 0; i < config.getMushroomPatchSize(); i++) {
            let x = pos.getX() + rand.nextInt(16);
            let z = pos.getZ() + rand.nextInt(16);
            let y = GenerationUtils.findSurface(x, rand.nextInt(26) + 4, z).y + 1;
            if (y > 30) {
                return;
            }
            let pos2 = new BlockPos(x, y, z);
            let color = rand.nextInt(16);
            if (region.isAirBlock(pos2) && ModBlocks.mushroom.isValidPosition(region, pos2)) {
                region.setBlock(pos2, BlockID.mushroom, color);
            }
        }
    };
    return MysticalMushroomFeature;
}(Feature));

