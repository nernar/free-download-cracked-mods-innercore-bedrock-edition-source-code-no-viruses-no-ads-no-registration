let SubTileClayconia = (function (_super) {
    __extends(SubTileClayconia, _super);
    const COST = 80;
    function SubTileClayconia() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileClayconia.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (!this.data.coords) {
            this.data.coords = [];
        }
        if (pingTick(5) && this.getMana() >= COST) {
            if (this.data.coords.length > 0) {
                let index = randomInt(this.data.coords.length - 1);
                let coords = this.data.coords[index];
                if (this.region.getBlockId(coords) == VanillaBlockID.sand) {
                    this.data.coords.splice(index, 1);
                    this.region.destroyBlock(coords, false);
                    this.region.dropAtBlock(coords.x, coords.y, coords.z, VanillaItemID.clay_ball, 1, 0);
                    this.addMana(-COST);
                } else {
                    for (let i in this.data.coords) {
                        if (this.region.getBlockId(this.data.coords[i]) != VanillaBlockID.sand) {
                            this.data.coords.splice(i, 1);
                        }
                    }
                }
            } else {
                this.genCoordsToPut();
            }
        }
    };
    SubTileClayconia.prototype.genCoordsToPut = function () {
        let range = this.getRange();
        let range_y = this.getRangeY();
        for (let x = -range; x <= range; x++) {
            for (let z = -range; z <= range; z++) {
                for (let y = -range_y; y <= range_y; y++) {
                    let xx = this.x + x;
                    let yy = this.y + y;
                    let zz = this.z + z;
                    if (this.region.getBlockId(xx, yy, zz) == VanillaBlockID.sand) {
                        this.data.coords.push({x: xx, y: yy, z: zz});
                    }
                }
            }
        }
    };
    SubTileClayconia.prototype.getRange = function () {
        return 5;
    };
    SubTileClayconia.prototype.getRangeY = function () {
        return 3;
    };
    SubTileClayconia.prototype.getMaxMana = function () {
        return 640;
    };
    SubTileClayconia.prototype.getColor = function () {
        return 8095634;
    };
    return SubTileClayconia;
}(TileEntityFunctionalFlower));
let SubTileClayconiaChibi = (function (_super) {
    __extends(SubTileClayconiaChibi, _super);
    function SubTileClayconiaChibi() {
        let _this = _super.call(this) || this;
        return _this;
    }
    SubTileClayconiaChibi.prototype.getRange = function () {
        return 2;
    };
    SubTileClayconiaChibi.prototype.getRangeY = function () {
        return 1;
    };
    return SubTileClayconiaChibi;
}(SubTileClayconia));

