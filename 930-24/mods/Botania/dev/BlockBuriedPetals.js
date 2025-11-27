let BlockBuriedPetals = (function (_super) {
    __extends(BlockBuriedPetals, _super);
    __implements(BlockBuriedPetals, IGrowable);
    const SHAPE = new AxisAlignedBB(0, 0, 0, 1, 0.1, 1);
    function BlockBuriedPetals(nameID) {
        _super.call(this, nameID);
        this.setRenderType(8);
        this.setLightLevel(4);
        this.setSolid(false);
        for (let i = 0; i < 16; i++) {
            this.addVariation("block.botania." + DyeColor.byId(i).getTranslationKey() + "_" + this.textureName, [["empty", 0]], false);
        }
        return this;
    }
    BlockBuriedPetals.prototype.getShape = function () {
        return SHAPE;
    };
    BlockBuriedPetals.prototype.canReplace = function () {
        return true;
    };
    BlockBuriedPetals.prototype.onAnimateTick = function (pos, state) {
        let color = DyeColor.byId(state.data).getColorComponentValues();
        let partData = new SparkleParticleData([0, 1], color[0], color[1], color[2], null, 5);
        ParticleManager.addParticle(Player.getDimension(), new SparkleParticleType(partData), pos.x + 0.3 + Math.random() * 0.5, pos.y + 0.1 + Math.random() * 0.1, pos.z + 0.3 + Math.random() * 0.5);
    };
    BlockBuriedPetals.prototype.canGrow = function (region, pos, state) {
        return region.isAirBlock(pos.up());
    };
    BlockBuriedPetals.prototype.grow = function (region, pos, state) {
        ModBlocks.doubleFlower.placeAt(region, pos, state.data);
    };
    return BlockBuriedPetals;
}(BushBlock));

