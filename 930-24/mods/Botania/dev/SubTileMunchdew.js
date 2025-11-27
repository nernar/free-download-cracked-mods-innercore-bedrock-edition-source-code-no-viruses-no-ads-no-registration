let SubTileMunchdew = (function (_super) {
    __extends(SubTileMunchdew, _super);
    const TAG_COOLDOWN = "cooldown";
    const RANGE = 8;
    const RANGE_Y = 16;
    function SubTileMunchdew() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues.cooldown = 0;
        _this.slowX = -8;
        _this.slowY = 0;
        _this.slowZ = -8;
        return _this;
    }
    SubTileMunchdew.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (!this.data.leaves) {
            this.data.leaves = [];
        }
        let manaPerLeaf = 160;
        if (this.data.leaves.length == 0) {
            if (this.data.cooldown > 0) {
                this.data.cooldown--;
                return;
            }
            let pos = this.getPos();
            let pos_ = pos.add(this.slowX, this.slowY, this.slowZ);
            let that = this;
            for (let x = 0; x <= 6; x++) {
                if (this.slowX > RANGE) {
                    break;
                }
                let block = this.region.getBlock(pos_.add(x, 0, 0));
                if (block.id == VanillaBlockID.leaves || block.id == VanillaBlockID.leaves2) {
                    forEachBlockPos(pos.add(-RANGE, 0, -RANGE), pos.add(RANGE, RANGE_Y, RANGE), function (pos__) {
                        block = that.region.getBlock(pos__);
                        if (block.id == VanillaBlockID.leaves || block.id == VanillaBlockID.leaves2) {
                            that.data.leaves.push(pos__);
                        }
                    });
                    break;
                }
                this.slowX++;
            }
        } else {
            if (this.getMaxMana() - this.getMana() >= manaPerLeaf && pingTick(2)) {
                let i = randomInt(this.data.leaves.length - 1);
                let pos = this.data.leaves[i];
                let block = this.region.getBlock(pos);
                if (block.id != VanillaBlockID.leaves && block.id != VanillaBlockID.leaves2) {
                    this.data.leaves.splice(i, 1);
                    return;
                }
                for (let j in Direction.VALUES) {
                    let pos_ = pos.offset(Direction.VALUES[j]);
                    if (this.region.getBlockId(pos_) == 0) {
                        this.region.destroyBlock(pos);
                        this.data.cooldown = 1600;
                        this.addMana(manaPerLeaf);
                        break;
                    }
                }
            }
        }
        if (this.slowX > RANGE) {
            this.slowX = -RANGE;
            this.slowY++;
        }
        if (this.slowY > RANGE_Y) {
            this.slowY = 0;
            this.slowZ++;
        }
        if (this.slowZ > RANGE) {
            this.slowZ = -RANGE;
        }
    };
    SubTileMunchdew.prototype.getColor = function () {
        return 7980079;
    };
    SubTileMunchdew.prototype.getMaxMana = function () {
        return 10000;
    };
    SubTileMunchdew.prototype.writeToPacketNBT = function (cmp) {
        _super.prototype.writeToPacketNBT.call(this, cmp);
        cmp.putInt(TAG_COOLDOWN, this.data.cooldown);
    };
    SubTileMunchdew.prototype.readFromPacketNBT = function (cmp) {
        _super.prototype.readFromPacketNBT.call(this, cmp);
        this.data.cooldown = cmp.getInt(TAG_COOLDOWN, 0);
    };
    return SubTileMunchdew;
}(TileEntityGeneratingFlower));

