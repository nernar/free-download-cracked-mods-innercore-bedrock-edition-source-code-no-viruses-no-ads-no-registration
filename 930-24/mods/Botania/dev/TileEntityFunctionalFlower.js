let TileEntityFunctionalFlower = (function (_super) {
    __extends(TileEntityFunctionalFlower, _super);
    const LINK_RANGE = 10;
    const TAG_MANA = "mana";
    const TAG_POOL_X = "poolX";
    const TAG_POOL_Y = "poolY";
    const TAG_POOL_Z = "poolZ";
    function TileEntityFunctionalFlower() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues.redstoneSignal = 0;
        _this.defaultValues.cachedPoolCoordinates = null;
        return _this;
    }
    TileEntityFunctionalFlower.prototype.acceptsRedstone = function () {
        return false;
    };
    TileEntityFunctionalFlower.prototype.onRedstoneUpdate = function (signal) {
        if (this.acceptsRedstone()) {
            this.data.redstoneSignal = signal;
        }
    };
    TileEntityFunctionalFlower.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        this.linkPool();
        if (this.isValidBinding()) {
            let pool = this.linkedPool;
            let manaInPool = pool.getMana();
            let manaMissing = this.getMaxMana() - this.data.mana;
            let manaToRemove = Math.min(manaMissing, manaInPool);
            pool.addMana(-manaToRemove);
            this.addMana(manaToRemove);
        }
    };
    TileEntityFunctionalFlower.prototype.linkPool = function () {
        if (!this.linkedPool) {
            let pos = this.getPos().offset(Direction.VALUES[World.getThreadTime() % Direction.VALUES.length]);
            let tile = this.region.getTileEntity(pos.x, this.y, pos.z);
            if (__instanceOf(tile, IManaPool)) {
                this.linkedPool = tile;
            }
        }
    };
    TileEntityFunctionalFlower.prototype.linkToForcefully = function (tile) {
        this.linkedPool = tile;
    };
    TileEntityFunctionalFlower.prototype.readFromPacketNBT = function (cmp) {
        _super.prototype.readFromPacketNBT.call(this, cmp);
        this.data.mana = cmp.getInt(TAG_MANA, 0);
        let x = cmp.getInt(TAG_POOL_X, 0);
        let y = cmp.getInt(TAG_POOL_Y, -1);
        let z = cmp.getInt(TAG_POOL_Z, 0);
        this.data.cachedPoolCoordinates = y < 0 ? null : {x: x, y: y, z: z};
    };
    TileEntityFunctionalFlower.prototype.writeToPacketNBT = function (cmp) {
        _super.prototype.writeToPacketNBT.call(this, cmp);
        cmp.putInt(TAG_MANA, this.data.mana);
        if (this.data.cachedPoolCoordinates != null) {
            cmp.putInt(TAG_POOL_X, this.data.cachedPoolCoordinates.x);
            cmp.putInt(TAG_POOL_Y, this.data.cachedPoolCoordinates.y);
            cmp.putInt(TAG_POOL_Z, this.data.cachedPoolCoordinates.z);
        } else {
            let x = this.linkedPool == null ? 0 : this.linkedPool.getPos().getX();
            let y = this.linkedPool == null ? -1 : this.linkedPool.getPos().getY();
            let z = this.linkedPool == null ? 0 : this.linkedPool.getPos().getZ();
            cmp.putInt(TAG_POOL_X, x);
            cmp.putInt(TAG_POOL_Y, y);
            cmp.putInt(TAG_POOL_Z, z);
        }
    };
    TileEntityFunctionalFlower.prototype.getBinding = function () {
        if (this.linkedPool == null) {
            return null;
        }
        return this.linkedPool.getPos();
    };
    TileEntityFunctionalFlower.prototype.canSelect = function (player, wand, pos, side) {
        return true;
    };
    TileEntityFunctionalFlower.prototype.bindTo = function (player, wand, pos, side) {
        let range = 10;
        range *= range;
        let dist = pos.distanceSq(this.getPos());
        if (range >= dist) {
            let tile = this.region.getTileEntity(pos);
            if (tile instanceof ManaPool) {
                this.linkedPool = tile;
                return true;
            }
        }
        return false;
    };
    TileEntityFunctionalFlower.prototype.isValidBinding = function () {
        return this.linkedPool != null && this.region.getTileEntity(this.linkedPool.getPos()) == this.linkedPool;
    };
    return TileEntityFunctionalFlower;
}(TileEntitySpecialFlower));

