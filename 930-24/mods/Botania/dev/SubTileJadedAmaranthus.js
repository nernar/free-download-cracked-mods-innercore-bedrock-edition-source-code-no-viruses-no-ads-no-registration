let SubTileJadedAmaranthus = (function (_super) {
    __extends(SubTileJadedAmaranthus, _super);
    const RANGE = 4;
    const COST = 100;
    function SubTileJadedAmaranthus() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileJadedAmaranthus.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.data.redstoneSignal > 0) {
            return;
        }
        if (this.data.ticksExisted % 30 == 0 && this.getMana() >= COST) {
            let pos = this.getPos().add(-RANGE + randomInt(RANGE * 2 + 1), RANGE, -RANGE + randomInt(RANGE * 2 + 1));
            let up = pos.up();
            for (let i = 0; i < RANGE * 2; i++) {
                let color = randomInt(15);
                if (ModBlocks.mysticalFlower.isValidPosition(this.region, up)) {
                    this.region.setBlock(up, ModBlocks.mysticalFlower.id, color);
                    this.addMana(-COST);
                    break;
                }
                up = pos;
                pos = pos.down();
            }
        }
    };
    SubTileJadedAmaranthus.prototype.getMaxMana = function () {
        return COST;
    };
    SubTileJadedAmaranthus.prototype.acceptsRedstone = function () {
        return true;
    };
    SubTileJadedAmaranthus.prototype.getColor = function () {
        return 9835139;
    };
    return SubTileJadedAmaranthus;
}(TileEntityFunctionalFlower));

