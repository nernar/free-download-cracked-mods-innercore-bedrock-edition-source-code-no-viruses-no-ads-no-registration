let SubTileFallenKanade = (function (_super) {
    __extends(SubTileFallenKanade, _super);
    const COST = 120;
    const RANGE = 2;
    function SubTileFallenKanade() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileFallenKanade.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (pingTick(60)) {
            let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RANGE, RANGE, RANGE);
            this.region.getEntitiesWithinAABB(aabb, PlayerEntity, function (entity) {
                if (this.getMana() >= COST) {
                    entity.addEffect(EPotionEffect.REGENERATION, 2, 59, true, true);
                    this.addMana(-COST);
                }
            }, this);
        }
    };
    SubTileFallenKanade.prototype.getMaxMana = function () {
        return 900;
    };
    SubTileFallenKanade.prototype.getColor = function () {
        return 16776960;
    };
    return SubTileFallenKanade;
}(TileEntityFunctionalFlower));

