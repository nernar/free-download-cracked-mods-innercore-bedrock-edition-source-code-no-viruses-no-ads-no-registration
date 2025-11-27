let SubTileAgricarnation = (function (_super) {
    __extends(SubTileAgricarnation, _super);
    function SubTileAgricarnation() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileAgricarnation.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (pingTick(6) && this.data.redstoneSignal == 0) {
            let range = this.getRange();
            let x = this.x + randomInt(range * 2 + 1) - range;
            let z = this.z + randomInt(range * 2 + 1) - range;
            for (let i = 4; i > -2; i--) {
                let y = this.y + i;
                let pos = new BlockPos(x, y, z);
                let block = this.region.getBlock(pos);
                if (block.id == 0) {
                    continue;
                }
                if (this.isPlant(block) && this.getMana() >= 5) {
                    this.addMana(-5);
                    this.region.particleEffect("grow_plant", {x: pos.x, y: pos.y, z: pos.z});
                    BlockHelper.randomTick(this.blockSource.getPointer(), pos.x, pos.y, pos.z);
                }
            }
        }
    };
    SubTileAgricarnation.prototype.acceptsRedstone = function () {
        return true;
    };
    SubTileAgricarnation.prototype.isPlant = function (block) {
        return isCrop(block.id);
    };
    SubTileAgricarnation.prototype.getRange = function () {
        return 5;
    };
    SubTileAgricarnation.prototype.getMaxMana = function () {
        return 200;
    };
    SubTileAgricarnation.prototype.getColor = function () {
        return 9369640;
    };
    return SubTileAgricarnation;
}(TileEntityFunctionalFlower));
let SubTileAgricarnationChibi = (function (_super) {
    __extends(SubTileAgricarnationChibi, _super);
    function SubTileAgricarnationChibi() {
        let _this = _super.call(this) || this;
        return _this;
    }
    SubTileAgricarnationChibi.prototype.getRange = function () {
        return 2;
    };
    return SubTileAgricarnationChibi;
}(SubTileAgricarnation));

