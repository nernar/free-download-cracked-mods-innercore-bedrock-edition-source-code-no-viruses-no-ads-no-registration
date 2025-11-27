let SubTileThermalily = (function (_super) {
    __extends(SubTileThermalily, _super);
    function SubTileThermalily() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileThermalily.prototype.getColor = function () {
        return 13646848;
    };
    SubTileThermalily.prototype.doBurnParticles = function () {
        let part = new WispParticleType(new WispParticleData([0, 0.167], 0.7, 0.05, 0.05, null, 1));
        let vec = new Vec3d(this.getPos()).add(this.getOffset().addVector(0.5, 0.5, 0.5));
        this.region.addParticle(part, vec.x + 0.05 + Math.random() * 0.2 - 0.1, vec.y + 0.9 + Math.random() * 0.2 - 0.1, vec.z, 0, Math.random() / 60, 0);
    };
    SubTileThermalily.prototype.getBlockToSearchFor = function () {
        return {id: VanillaBlockID.lava, data: 0};
    };
    SubTileThermalily.prototype.getDelayBetweenPassiveGeneration = function () {
        return 1;
    };
    SubTileThermalily.prototype.getBurnTime = function () {
        return 900;
    };
    SubTileThermalily.prototype.getValueForPassiveGeneration = function () {
        return 20;
    };
    SubTileThermalily.prototype.getMaxMana = function () {
        return 500;
    };
    SubTileThermalily.prototype.getCooldown = function () {
        return 6000;
    };
    SubTileThermalily.prototype.isPassiveFlower = function () {
        return false;
    };
    __decorate([BlockEngine.Decorators.ClientSide], SubTileThermalily.prototype, "doBurnParticles", null);
    return SubTileThermalily;
}(SubTileHydroangeas));

