let SubTileEndoflame = (function (_super) {
    __extends(SubTileEndoflame, _super);
    const TAG_BURN_TIME = "burnTime";
    const FUEL_CAP = 32000;
    const RANGE = 3;
    function SubTileEndoflame() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues.burnTime = 0;
        return _this;
    }
    SubTileEndoflame.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.data.burnTime > 0) {
            this.data.burnTime--;
            if (randomInt(10) == 0) {
                this.region.addParticle(8, this.x + 0.4 + Math.random() * 0.2, this.y + 0.7, this.z + 0.4 + Math.random() * 0.2, 0, 0, 0);
            }
        }
        if (this.linkedCollector != null) {
            if (this.data.burnTime == 0) {
                if (this.getMana() < this.getMaxMana()) {
                    let slowdown = this.getSlowdownFactor();
                    let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RANGE, RANGE, RANGE);
                    this.region.getEntitiesWithinAABB(aabb, ItemEntity, function (entity) {
                        let age = entity.getAge() || 999;
                        if (age >= 59 + slowdown) {
                            let stack = entity.getItemStack();
                            let burnTime = this.getBurnTime(stack);
                            if (burnTime > 0 && stack.count > 0) {
                                this.data.burnTime = Math.min(FUEL_CAP, burnTime) / 2;
                                stack.decrease();
                                this.startBurnEvent(entity);
                            }
                        }
                    }, this);
                }
            }
        }
    };
    SubTileEndoflame.prototype.startBurnEvent = function (entity) {
        let pos = entity.getPosition();
        this.region.addParticle(9, pos.x, pos.y + 0.1, pos.z, 0, 0, 0);
        this.region.addParticle(8, pos.x, pos.y, pos.z, 0, 0, 0);
    };
    SubTileEndoflame.prototype.getBurnTime = function (item) {
        return Recipes.getFuelBurnDuration(item.id, item.data);
    };
    SubTileEndoflame.prototype.getColor = function () {
        return 7884800;
    };
    SubTileEndoflame.prototype.getValueForPassiveGeneration = function () {
        return 3;
    };
    SubTileEndoflame.prototype.canGeneratePassively = function () {
        return this.data.burnTime > 0;
    };
    SubTileEndoflame.prototype.getDelayBetweenPassiveGeneration = function () {
        return 2;
    };
    SubTileEndoflame.prototype.readFromPacketNBT = function (cmp) {
        _super.prototype.readFromPacketNBT.call(this, cmp);
        this.data.burnTime = cmp.getInt("burnTime", 0);
    };
    SubTileEndoflame.prototype.writeToPacketNBT = function (cmp) {
        _super.prototype.writeToPacketNBT.call(this, cmp);
        cmp.putInt(TAG_BURN_TIME, this.data.burnTime);
    };
    SubTileEndoflame.prototype.getMaxMana = function () {
        return 300;
    };
    return SubTileEndoflame;
}(TileEntityGeneratingFlower));

