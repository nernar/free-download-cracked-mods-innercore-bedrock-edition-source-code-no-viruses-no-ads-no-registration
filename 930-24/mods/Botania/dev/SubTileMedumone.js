let SubTileMedumone = (function (_super) {
    __extends(SubTileMedumone, _super);
    const RANGE = 6;
    function SubTileMedumone() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileMedumone.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.data.redstoneSignal == 0) {
            let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RANGE, RANGE, RANGE);
            this.region.getEntitiesWithinAABB(aabb, Actor, function (entity) {
                if (entity.getType() != EEntityType.PLAYER && this.getMana() > 0) {
                    entity.addEffect(EPotionEffect.MOVEMENT_SLOWDOWN, 100, 2);
                    this.addMana(-1);
                }
            }, this);
        }
    };
    SubTileMedumone.prototype.getColor = function () {
        return 4006404;
    };
    SubTileMedumone.prototype.getMaxMana = function () {
        return 4000;
    };
    SubTileMedumone.prototype.acceptsRedstone = function () {
        return true;
    };
    return SubTileMedumone;
}(TileEntityFunctionalFlower));

