let TileEntityGeneratingFlower = (function (_super) {
    __extends(TileEntityGeneratingFlower, _super);
    const LINK_RANGE = 6;
    const TAG_MANA = "mana";
    const TAG_COLLECTOR_X = "collectorX";
    const TAG_COLLECTOR_Y = "collectorY";
    const TAG_COLLECTOR_Z = "collectorZ";
    const TAG_PASSIVE_DECAY_TICKS = "passiveDecayTicks";
    function TileEntityGeneratingFlower() {
        _super.apply(this, arguments);
        this.sizeLastCheck = -1;
        this.defaultValues.passiveDecayTicks = 0;
        this.defaultValues.cachedCollectorCoordinates = null;
        return this;
    }
    TileEntityGeneratingFlower.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        this.linkCollector();
        if (this.canGeneratePassively()) {
            let delay = this.getDelayBetweenPassiveGeneration();
            if (delay > 0 && this.data.ticksExisted % delay == 0) {
                this.addMana(this.getValueForPassiveGeneration());
            }
        }
        this.emptyManaIntoCollector();
        let passive = this.isPassiveFlower();
        if (passive) {
            this.data.passiveDecayTicks++;
        }
        if (passive && this.data.passiveDecayTicks > 72000) {
            this.region.destroyBlock(this.getPos(), false);
            this.region.setBlock(this.getPos(), VanillaBlockID.dead_bush);
        }
    };
    TileEntityGeneratingFlower.prototype.linkCollector = function () {
        let needsNew = false;
        if (!this.linkedCollector) {
            needsNew = true;
            if (this.data.cachedCollectorCoordinates) {
                let tile = this.region.getTileEntity(this.data.cachedCollectorCoordinates);
                if (__instanceOf(tile, IManaCollector)) {
                    this.linkedCollector = tile;
                    needsNew = false;
                }
                this.data.cachedCollectorCoordinates = null;
            }
        } else {
            let pos = this.linkedCollector.getPos();
            let tile = this.region.getTileEntity(pos);
            if (__instanceOf(tile, IManaCollector)) {
                this.linkedCollector = tile;
            }
        }
        if (needsNew && this.data.ticksExisted == 1) {
            let network = BotaniaAPI.instance.getManaNetworkInstance();
            let size = network.getAllCollectorsInWorld(this.region).length;
            if (BotaniaAPI.instance.shouldForceCheck() || size != this.sizeLastCheck) {
                this.linkedCollector = network.getClosestCollector(this.getPos(), this.region, LINK_RANGE);
                this.sizeLastCheck = size;
            }
        }
    };
    TileEntityGeneratingFlower.prototype.linkToForcefully = function (collector) {
        this.linkedCollector = collector;
    };
    TileEntityGeneratingFlower.prototype.emptyManaIntoCollector = function () {
        if (this.isValidBinding()) {
            let collector = this.linkedCollector;
            if (!collector.isFull() && this.getMana() > 0) {
                let manaval = Math.min(this.getMana(), collector.getMaxMana() - collector.getMana());
                this.addMana(-manaval);
                collector.addMana(manaval);
            }
        }
    };
    TileEntityGeneratingFlower.prototype.isPassiveFlower = function () {
        return false;
    };
    TileEntityGeneratingFlower.prototype.canGeneratePassively = function () {
        return false;
    };
    TileEntityGeneratingFlower.prototype.getDelayBetweenPassiveGeneration = function () {
        return 20;
    };
    TileEntityGeneratingFlower.prototype.getValueForPassiveGeneration = function () {
        return 1;
    };
    TileEntityGeneratingFlower.prototype.readFromPacketNBT = function (cmp) {
        _super.prototype.readFromPacketNBT.call(this, cmp);
        this.data.mana = cmp.getInt(TAG_MANA, 0);
        this.data.passiveDecayTicks = cmp.getInt(TAG_PASSIVE_DECAY_TICKS, 0);
        let x = cmp.getInt(TAG_COLLECTOR_X, 0);
        let y = cmp.getInt(TAG_COLLECTOR_Y, -1);
        let z = cmp.getInt(TAG_COLLECTOR_Z, 0);
        this.data.cachedCollectorCoordinates = y < 0 ? null : {x: x, y: y, z: z};
    };
    TileEntityGeneratingFlower.prototype.writeToPacketNBT = function (cmp) {
        _super.prototype.writeToPacketNBT.call(this, cmp);
        cmp.putInt(TAG_MANA, this.getMana());
        cmp.putInt(TAG_PASSIVE_DECAY_TICKS, this.data.passiveDecayTicks);
        if (this.data.cachedCollectorCoordinates != null) {
            cmp.putInt(TAG_COLLECTOR_X, this.data.cachedCollectorCoordinates.x);
            cmp.putInt(TAG_COLLECTOR_Y, this.data.cachedCollectorCoordinates.y);
            cmp.putInt(TAG_COLLECTOR_Z, this.data.cachedCollectorCoordinates.z);
        } else {
            let x = this.linkedCollector == null ? 0 : this.linkedCollector.getPos().getX();
            let y = this.linkedCollector == null ? -1 : this.linkedCollector.getPos().getY();
            let z = this.linkedCollector == null ? 0 : this.linkedCollector.getPos().getZ();
            cmp.putInt(TAG_COLLECTOR_X, x);
            cmp.putInt(TAG_COLLECTOR_Y, y);
            cmp.putInt(TAG_COLLECTOR_Z, z);
        }
    };
    TileEntityGeneratingFlower.prototype.getBinding = function () {
        if (this.linkedCollector == null) {
            return null;
        }
        return this.linkedCollector.getPos();
    };
    TileEntityGeneratingFlower.prototype.canSelect = function (player, item) {
        return true;
    };
    TileEntityGeneratingFlower.prototype.bindTo = function (player, wand, pos, block) {
        let range = 6;
        range *= range;
        let dist = pos.distanceSq(this.getPos());
        if (range >= dist) {
            let tile = this.region.getTileEntity(pos);
            if (__instanceOf(tile, IManaCollector)) {
                this.linkedCollector = tile;
                return true;
            }
        }
        return false;
    };
    TileEntityGeneratingFlower.prototype.isValidBinding = function () {
        return this.linkedCollector != null && this.region.getTileEntity(this.linkedCollector.getPos()) == this.linkedCollector;
    };
    TileEntityGeneratingFlower.prototype.isOvergrowthAffected = function () {
        return !this.isPassiveFlower();
    };
    return TileEntityGeneratingFlower;
}(TileEntitySpecialFlower));

