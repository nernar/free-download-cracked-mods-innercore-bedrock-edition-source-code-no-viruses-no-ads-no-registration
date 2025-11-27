let SubTileBubbell = (function (_super) {
    __extends(SubTileBubbell, _super);
    function SubTileBubbell() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues.range = 0;
        _this.defaultValues.fastSearch = true;
        return _this;
    }
    SubTileBubbell.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.getMana() > 40 && pingTick(10)) {
            this.addMana(-40);
            if (this.data.range < this.getRange()) {
                this.data.range++;
            }
            let pos = this.getPos();
            let that = this;
            let i = 0;
            if (this.data.fastSearch) {
                forEachBlockPos(pos.add(-this.data.range, -this.data.range, -this.data.range), pos.add(this.data.range, this.data.range, this.data.range), function (pos_) {
                    let dist = pos.distanceSq(pos_);
                    if (dist <= that.data.range && dist > that.data.range - 1) {
                        let block = that.region.getBlock(pos_);
                        if (block.id == 8 || block.id == 9) {
                            i++;
                            that.region.setBlock(pos_, 0);
                        }
                    }
                });
            } else {
                if (pingTick(100)) {
                    let range = this.getRange();
                    for (let j = 0; j < 10; j++) {
                        let x = this.x + randomInt(-range, range);
                        let y = this.y + randomInt(-range, range);
                        let z = this.z + randomInt(-range, range);
                        let dist = this.getPos().distanceSq(x, y, z);
                        if (dist <= range && dist > range - 1) {
                            let block = this.region.getBlock(this);
                            if (block.id == 8 || block.id == 9) {
                                this.data.fastSearch = true;
                            }
                        }
                    }
                }
            }
            if (this.data.range == this.getRange() && i == 0) {
                this.data.fastSearch = false;
            }
        }
    };
    SubTileBubbell.prototype.getRange = function () {
        return 12;
    };
    SubTileBubbell.prototype.getMaxMana = function () {
        return 2000;
    };
    SubTileBubbell.prototype.getColor = function () {
        return 905097;
    };
    return SubTileBubbell;
}(TileEntityFunctionalFlower));
let SubTileBubbellChibi = (function (_super) {
    __extends(SubTileBubbellChibi, _super);
    function SubTileBubbellChibi() {
        let _this = _super.call(this) || this;
        return _this;
    }
    SubTileBubbellChibi.prototype.getRange = function () {
        return 6;
    };
    return SubTileBubbellChibi;
}(SubTileBubbell));

