let SubTileRafflowsia = (function (_super) {
    __extends(SubTileRafflowsia, _super);
    const TAG_LAST_FLOWERS = "lastFlowers";
    const TAG_LAST_FLOWER_TIMES = "lastFlowerTimes";
    const TAG_STREAK_LENGTH = "streakLength";
    const RANGE = 5;
    const STREAK_OUTPUTS = [300, 1100, 1900, 2700, 3500, 4400, 5300, 6300, 7300, 8300, 9400, 10500, 11600, 12800, 14000, 15200, 16500, 17900, 19200, 20700, 22200, 23800, 25400, 27100, 29000, 30900, 33000, 35200, 37700, 40300, 43200, 46500, 50200, 54300, 59100, 64600, 71100, 78600, 87600, 98400];
    function SubTileRafflowsia() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues.streakLength = -1;
        _this.defaultValues.lastFlowerCount = 0;
        return _this;
    }
    SubTileRafflowsia.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (!this.data.lastFlowers) {
            this.data.lastFlowers = [];
        }
        let mana = 2100;
        if (this.getMaxMana() - this.getMana() >= mana && this.data.ticksExisted % 40 == 0) {
            for (let i = 0; i < RANGE * 2 + 1; i++) {
                for (let j = 0; j < RANGE * 2 + 1; j++) {
                    for (let k = 0; k < RANGE * 2 + 1; k++) {
                        let pos = this.getPos().add(i - RANGE, j - RANGE, k - RANGE);
                        let state = this.region.getBlock(pos);
                        if (BlockRegistry.getInstanceOf(state.id) instanceof BlockSpecialFlower && this.blockID != state.id) {
                            this.data.streakLength = Math.min(this.data.streakLength + 1, this.processFlower(state.id));
                            let tile = this.region.getTileEntity(pos);
                            if (tile && tile.destroy) {
                                tile.destroy = new Function();
                            }
                            this.region.destroyBlock(pos, false);
                            this.addMana(this.getValueForStreak(this.data.streakLength));
                        }
                    }
                }
            }
        }
    };
    SubTileRafflowsia.prototype.getColor = function () {
        return 5254262;
    };
    SubTileRafflowsia.prototype.readFromPacketNBT = function (cmp) {
        _super.prototype.readFromPacketNBT.call(this, cmp);
        this.data.listFlowers = JSON.parse(cmp.getString(TAG_LAST_FLOWERS, "[]"));
        this.data.lastFlowerCount = cmp.getInt(TAG_LAST_FLOWER_TIMES, 0);
        this.data.streakLength = cmp.getInt(TAG_STREAK_LENGTH, -1);
    };
    SubTileRafflowsia.prototype.writeToPacketNBT = function (cmp) {
        _super.prototype.writeToPacketNBT.call(this, cmp);
        cmp.putString(TAG_LAST_FLOWERS, toJson(this.data.lastFlowers));
        cmp.putInt(TAG_LAST_FLOWER_TIMES, this.data.lastFlowerCount);
        cmp.putInt(TAG_STREAK_LENGTH, this.data.streakLength);
    };
    SubTileRafflowsia.prototype.getMaxStreak = function () {
        return STREAK_OUTPUTS.length - 1;
    };
    SubTileRafflowsia.prototype.getValueForStreak = function (index) {
        if (index != 0) {
            this.data.lastFlowerCount = 0;
        }
        return STREAK_OUTPUTS[index] / ++this.data.lastFlowerCount;
    };
    SubTileRafflowsia.prototype.processFlower = function (flower) {
        for (let i in this.data.lastFlowers) {
            let index = Number(i);
            let streakFlower = this.data.lastFlowers[i];
            if (streakFlower == flower) {
                this.data.lastFlowers.unshift(streakFlower);
                return index;
            }
        }
        this.data.lastFlowers.unshift(flower);
        if (this.data.lastFlowers.length >= this.getMaxStreak()) {
            this.data.lastFlowers.pop();
        }
        return this.getMaxStreak();
    };
    SubTileRafflowsia.prototype.getMaxMana = function () {
        return 100000;
    };
    return SubTileRafflowsia;
}(TileEntityGeneratingFlower));

