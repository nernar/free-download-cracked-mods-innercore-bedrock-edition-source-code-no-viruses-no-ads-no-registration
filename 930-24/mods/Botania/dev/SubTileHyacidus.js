let SubTileHyacidus = (function (_super) {
    __extends(SubTileHyacidus, _super);
    function SubTileHyacidus() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileHyacidus.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.data.redstoneSignal > 0) {
            return;
        }
        let range = this.getRange();
        let cost = this.getManaCost();
        let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(range, range, range);
        this.region.getEntitiesWithinAABB(aabb, Actor, function (entity) {
            if (entity.getType() != EEntityType.PLAYER && !entity.hasEffect(EPotionEffect.POISON)) {
                if (this.getMana() >= cost) {
                    entity.addEffect(EPotionEffect.POISON, 1, 60);
                    this.addMana(-cost);
                }
            }
        }, this);
    };
    SubTileHyacidus.prototype.getMaxMana = function () {
        return 180;
    };
    SubTileHyacidus.prototype.getManaCost = function () {
        return 20;
    };
    SubTileHyacidus.prototype.acceptsRedstone = function () {
        return true;
    };
    SubTileHyacidus.prototype.getRange = function () {
        return 6;
    };
    SubTileHyacidus.prototype.getColor = function () {
        return 9126799;
    };
    return SubTileHyacidus;
}(TileEntityFunctionalFlower));

