let SubTileOrechid = (function (_super) {
    __extends(SubTileOrechid, _super);
    const COST = 17500;
    const COST_GOG = 700;
    const DELAY = 100;
    const DELAY_GOG = 2;
    const RANGE = 5;
    const RANGE_Y = 3;
    function SubTileOrechid() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileOrechid.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (!this.data.coords) {
            this.data.coords = [];
        }
        if (this.data.redstoneSignal > 0 || !this.canOperate()) {
            return;
        }
        let cost = this.getCost();
        if (this.getMana() >= cost && this.data.ticksExisted % this.getDelay() == 0) {
            if (this.data.coords.length > 0) {
                let index = randomInt(this.data.coords.length - 1);
                let coords = this.data.coords[index];
                if (this.region.getBlockId(coords) == this.getCatalyst()) {
                    this.data.coords.splice(index, 1);
                    let ore = this.getOreToPut();
                    this.region.destroyBlock(coords, false);
                    this.region.setBlock(coords, ore);
                    this.addMana(-cost);
                }
            } else {
                this.genCoordsToPut();
            }
        }
    };
    SubTileOrechid.prototype.getCost = function () {
        return COST;
    };
    SubTileOrechid.prototype.genCoordsToPut = function () {
        let range = this.getRange();
        let range_y = this.getRangeY();
        for (let x = -range; x <= range; x++) {
            for (let z = -range; z <= range; z++) {
                for (let y = -range_y; y <= range_y; y++) {
                    let xx = this.x + x;
                    let yy = this.y + y;
                    let zz = this.z + z;
                    if (this.region.getBlockId(xx, yy, zz) == this.getCatalyst()) {
                        this.data.coords.push({x: xx, y: yy, z: zz});
                    }
                }
            }
        }
    };
    SubTileOrechid.prototype.getCatalyst = function () {
        return VanillaBlockID.stone;
    };
    SubTileOrechid.prototype.canOperate = function () {
        return true;
    };
    SubTileOrechid.prototype.getRange = function () {
        return RANGE;
    };
    SubTileOrechid.prototype.getRangeY = function () {
        return RANGE_Y;
    };
    SubTileOrechid.prototype.getDelay = function () {
        return DELAY;
    };
    SubTileOrechid.prototype.getOreToPut = function () {
        return getRandomOre("overworld");
    };
    SubTileOrechid.prototype.getColor = function () {
        return 8487297;
    };
    SubTileOrechid.prototype.getMaxMana = function () {
        return this.getCost();
    };
    SubTileOrechid.prototype.acceptsRedstone = function () {
        return true;
    };
    return SubTileOrechid;
}(TileEntityFunctionalFlower));

