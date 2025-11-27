let SubTileHydroangeas = (function (_super) {
    __extends(SubTileHydroangeas, _super);
    const TAG_BURN_TIME = "burnTime";
    const TAG_COOLDOWN = "cooldown";
    const OFFSETS = [[0, 0, 1], [0, 0, -1], [1, 0, 0], [-1, 0, 0], [-1, 0, 1], [-1, 0, -1], [1, 0, 1], [1, 0, -1]];
    function SubTileHydroangeas() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues.cooldown = 0;
        _this.defaultValues.burnTime = 0;
        return _this;
    }
    SubTileHydroangeas.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.data.cooldown > 0) {
            this.data.cooldown--;
            if (!!this.data.cooldown != this.networkData.getBoolean(TAG_COOLDOWN, false)) {
                this.networkData.putBoolean(TAG_COOLDOWN, !!this.data.cooldown);
                this.networkData.sendChanges();
            }
        }
        if (!!this.data.burnTime != this.networkData.getBoolean(TAG_BURN_TIME, false)) {
            this.networkData.putBoolean(TAG_BURN_TIME, !!this.data.burnTime);
            this.networkData.sendChanges();
        }
        if (this.data.burnTime == 0) {
            if (this.getMana() < this.getMaxMana()) {
                for (let i in OFFSETS) {
                    let offset = OFFSETS[i];
                    let pos = this.getPos().add(offset[0], offset[1], offset[2]);
                    let block = this.region.getBlock(pos);
                    let source = this.getBlockToSearchFor();
                    if (block.id == source.id && block.data == source.data) {
                        if (block.id != VanillaBlockID.water) {
                            this.region.setBlock(pos, 0);
                        } else {
                            let waterAround = 0;
                            for (let j in Direction.VALUES) {
                                let pos2 = pos.offset(Direction.VALUES[j]);
                                let block2 = this.region.getBlock(pos2);
                                if (block2.id == source.id && block2.data == source.data) {
                                    waterAround++;
                                }
                            }
                            if (waterAround < 2) {
                                this.region.setBlock(pos, 0);
                            }
                        }
                        if (this.data.cooldown == 0) {
                            this.data.burnTime += this.getBurnTime();
                        } else {
                            this.data.cooldown = this.getCooldown();
                        }
                        break;
                    }
                }
            }
        } else {
            this.data.burnTime--;
            if (this.data.burnTime == 0) {
                this.data.cooldown = this.getCooldown();
            }
        }
    };
    SubTileHydroangeas.prototype.clientTickFlower = function () {
        if (this.networkData.getBoolean(TAG_COOLDOWN, false)) {
            for (let i = 0; i < 3; i++) {
                let part = new WispParticleType(new WispParticleData([0, 0.167], 0.1, 0.1, 0.1, null, 1));
                let vec = new Vec3d(this.getPos()).add(this.getOffset().addVector(0.5, 0.5, 0.5));
                ParticleManager.addParticle(part, vec.x + Math.random() * 0.2 - 0.1, vec.y + 0.7 + Math.random() * 0.2 - 0.1, vec.z + Math.random() * 0.2 - 0.1, 0, Math.random() / 30, 0);
            }
        }
        if (this.networkData.getBoolean(TAG_BURN_TIME, false) && randomInt(8) == 0) {
            this.doBurnParticles();
        }
    };
    SubTileHydroangeas.prototype.doBurnParticles = function () {
        let part = new WispParticleType(new WispParticleData([0, 0.167], 0.05, 0.05, 0.7, null, 1));
        let vec = new Vec3d(this.getPos()).add(this.getOffset().addVector(0.5, 0.5, 0.5));
        ParticleManager.addParticle(part, vec.x + 0.05 + Math.random() * 0.2 - 0.1, vec.y + 0.55 + Math.random() * 0.2 - 0.1, vec.z, 0, Math.random() / 60, 0);
    };
    SubTileHydroangeas.prototype.isPassiveFlower = function () {
        return true;
    };
    SubTileHydroangeas.prototype.canGeneratePassively = function () {
        return this.data.burnTime > 0;
    };
    SubTileHydroangeas.prototype.getDelayBetweenPassiveGeneration = function () {
        let weather = World.getWeather();
        return weather.rain || weather.thunder ? 2 : 3;
    };
    SubTileHydroangeas.prototype.getCooldown = function () {
        return 0;
    };
    SubTileHydroangeas.prototype.getBlockToSearchFor = function () {
        return {id: VanillaBlockID.water, data: 0};
    };
    SubTileHydroangeas.prototype.getBurnTime = function () {
        return 40;
    };
    SubTileHydroangeas.prototype.getColor = function () {
        return 5451744;
    };
    SubTileHydroangeas.prototype.writeToPacketNBT = function (cmp) {
        _super.prototype.writeToPacketNBT.call(this, cmp);
        cmp.putInt(TAG_COOLDOWN, this.data.cooldown);
        cmp.putInt(TAG_BURN_TIME, this.data.burnTime);
    };
    SubTileHydroangeas.prototype.readFromPacketNBT = function (cmp) {
        _super.prototype.readFromPacketNBT.call(this, cmp);
        this.data.cooldown = cmp.getInt(TAG_COOLDOWN, 0);
        this.data.burnTime = cmp.getInt(TAG_BURN_TIME, 0);
    };
    SubTileHydroangeas.prototype.getMaxMana = function () {
        return 150;
    };
    __decorate([BlockEngine.Decorators.ClientSide], SubTileHydroangeas.prototype, "doBurnParticles", null);
    return SubTileHydroangeas;
}(TileEntityGeneratingFlower));

