let TileSpreader = (function (_super) {
    __extends(TileSpreader, _super);
    __implements(TileSpreader, IManaCollector, IWandBindable, IKeyLocked, IManaSpreader, IDirectioned);
    const PINGBACK_EXPIRED_SEARCH_DISTANCE = 0.5;
    const TAG_ROTATION_X = "rotationX";
    const TAG_ROTATION_Y = "rotationY";
    function TileSpreader(burstMana, manaCapacity, color, hudColor, preLossTicks, lossPerTick, motionModifier, isRedstone) {
        _super.call(this);
        this.burstMana = burstMana;
        this.manaCapacity = manaCapacity;
        this.color = color;
        this.hudColor = hudColor;
        this.preLossTicks = preLossTicks;
        this.lossPerTick = lossPerTick;
        this.motionModifier = motionModifier;
        this.isRedstone = isRedstone;
        this.defaultValues = {mana: 0, mapmakerOverride: false, mmForcedColor: 2162464, mmForcedManaPayload: 160, mmForcedTicksBeforeManaLoss: 60, mmForcedManaLossPerTick: 4, mmForcedGravity: 0, mmForcedVelocityMultiplier: 1, inputKey: "", outputKey: "", identity: null, rotationX: 0, rotationY: 0, canShootBurst: true, pingbackTicks: 0, lastPingbackX: 0, lastPingbackY: -1, lastPingbackZ: 0, redstone: false, redstoneLastTick: true, hasReceivedInitialPacket: false, invalidTentativeBurst: false, burstParticleTick: 0, lastBurstDeathTick: -1};
    }
    TileSpreader.prototype.onLoad = function () {
        ManaNetworkEvent.addCollector(this);
    };
    TileSpreader.prototype.clientLoadListener = function (client) {
        this.sendPacketToClient(client, "loadAnim", {rotationX: this.data.rotationX, rotationY: this.data.rotationY});
    };
    TileSpreader.prototype.onDestroy = function (fromDestroyBlock, dropAllowed) {
        ManaNetworkEvent.removeCollector(this);
        return false;
    };
    TileSpreader.prototype.onUnload = function () {
        ManaNetworkEvent.removeCollector(this);
    };
    TileSpreader.prototype.getIdentifier = function () {
        if (!this.data.identity) {
            this.data.identity = java.util.UUID.randomUUID().toString();
        }
        return this.data.identity;
    };
    TileSpreader.prototype.onRedstoneUpdate = function (signal) {
        this.data.redstone = !!signal;
    };
    TileSpreader.prototype.isFull = function () {
        return this.getMana() >= this.getMaxMana();
    };
    TileSpreader.prototype.addMana = function (mana) {
        this.data.mana = MathHelper.clamp(0, this.data.mana + mana, this.getMaxMana());
    };
    TileSpreader.prototype.onTick = function () {
        let inNetwork = ManaNetworkHandler.instance.isCollectorIn(this);
        if (!inNetwork && !this.isRemoved()) {
            ManaNetworkEvent.addCollector(this);
        }
        for (let i in Direction.values()) {
            let dir = Direction.values()[i];
            let tileAt = this.region.getTileEntity(this.getPos().offset(dir));
            if (__instanceOf(tileAt, IManaPool)) {
                let pool = tileAt;
                if (pool != this.receiver || this.isRedstone) {
                    if (pool.getOutputKey() != this.getInputKey()) {
                        continue;
                    }
                    let manaInPool = pool.getMana();
                    if (manaInPool > 0 && !this.isFull()) {
                        let manaMissing = this.getMaxMana() - this.getMana();
                        let manaToRemove = Math.min(manaInPool, manaMissing);
                        pool.addMana(-manaToRemove);
                        this.addMana(manaToRemove);
                    }
                }
            }
        }
        if (this.needsNewBurstSimulation()) {
            this.checkForReceiver();
        }
        if (!this.data.canShootBurst) {
            if (this.data.pingbackTicks <= 0) {
                let x = this.data.lastPingbackX;
                let y = this.data.lastPingbackY;
                let z = this.data.lastPingbackZ;
                let aabb = new AxisAlignedBB(x, y, z, x, y, z).grow(PINGBACK_EXPIRED_SEARCH_DISTANCE, PINGBACK_EXPIRED_SEARCH_DISTANCE, PINGBACK_EXPIRED_SEARCH_DISTANCE);
                let found = null;
                let identity = this.getIdentifier();
                let bursts = this.region.getEntitiesWithinAABB(aabb, EntityManaBurst);
                for (let i in bursts) {
                    let burst = bursts[i];
                    if (burst != null && identity == burst.getShooterUUID()) {
                        found = burst;
                    }
                }
                if (found != null) {
                    found.ping();
                } else {
                    this.setCanShoot(true);
                }
            } else {
                this.data.pingbackTicks--;
            }
        }
        let shouldShoot = !this.data.redstone;
        if (this.isRedstone) {
            shouldShoot = this.data.redstone && !this.data.redstoneLastTick;
        }
        if (shouldShoot && this.receiver != null && __instanceOf(this.receiver, IKeyLocked)) {
            shouldShoot = this.receiver.getInputKey() == this.getOutputKey();
        }
        let lens = this.container.getSlot("slot0");
        let control = this.getLensController(lens);
        if (control != null) {
            if (this.isRedstone) {
                if (shouldShoot) {
                    control.onControlledSpreaderPulse(lens, this, this.data.redstone);
                }
            } else {
                control.onControlledSpreaderTick(lens, this, this.data.redstone);
            }
            shouldShoot &= control.allowBurstShooting(lens, this, this.data.redstone);
        }
        if (shouldShoot) {
            this.tryShootBurst();
        }
        this.data.redstoneLastTick = this.data.redstone;
    };
    TileSpreader.prototype.commitRedirection = function () {
        this.checkForReceiver();
    };
    TileSpreader.prototype.canReceiveManaFromBursts = function () {
        return true;
    };
    TileSpreader.prototype.getMana = function () {
        return this.data.mana;
    };
    TileSpreader.prototype.onWanded = function (player, stack) {
        if (player == null) {
            return;
        }
        if (player.getSneaking()) {
        }
    };
    TileSpreader.prototype.needsNewBurstSimulation = function () {
        if (!this.lastTentativeBurst) {
            return true;
        }
        for (let i in this.lastTentativeBurst) {
            let props = this.lastTentativeBurst[i];
            if (!props.contentsEqual(this.region)) {
                this.data.invalidTentativeBurst = props.invalid;
                return !this.data.invalidTentativeBurst;
            }
        }
        return false;
    };
    TileSpreader.prototype.tryShootBurst = function () {
        if ((this.receiver != null || this.data.redstone) && !this.data.invalidTentativeBurst) {
            if (this.data.canShootBurst && (this.data.redstone || this.receiver.canReceiveManaFromBursts() && !this.receiver.isFull())) {
                let burst = this.getBurst(false);
                if (burst != null) {
                    this.addMana(-burst.getStartingMana());
                    burst.setShooterUUID(this.getIdentifier());
                    this.region.addEntity(burst);
                    burst.ping();
                    if (ConfigHandler.COMMON.silentSpreaders.get()) {
                        this.sendPacket("spreaderFire");
                    }
                }
            }
        }
    };
    TileSpreader.prototype.checkForReceiver = function () {
        let stack = this.container.getSlot("slot0");
        let control = this.getLensController(stack);
        if (control != null && !control.allowBurstShooting(stack, this, false)) {
            return;
        }
        let fakeBurst = this.getBurst(true);
        fakeBurst.setScanBeam();
        let receiver = fakeBurst.getCollidedTile(true);
        if (__instanceOf(receiver, IManaReceiver)) {
            this.receiver = receiver;
        } else {
            this.receiver = null;
        }
        this.lastTentativeBurst = fakeBurst.propsList;
    };
    TileSpreader.prototype.runBurstSimulation = function () {
        let fakeBurst = this.getBurst(true);
        fakeBurst.setScanBeam();
        fakeBurst.getCollidedTile(true);
        return fakeBurst;
    };
    TileSpreader.prototype.getBurst = function (fake) {
        let gravity = 0;
        let props = new BurstProperties(this.burstMana, this.preLossTicks, this.lossPerTick, gravity, this.motionModifier, this.color);
        let lens = this.container.getSlot("slot0");
        if (!lens.isEmpty()) {
        }
        if (this.getMana() > props.maxMana || fake) {
            let burst = new EntityManaBurst(this, fake);
            burst.setSourceLens(new ItemStack(lens));
            if (this.data.mapmakerOverride) {
                burst.setColor(this.data.mmForcedColor);
                burst.setMana(this.data.mmForcedManaPayload);
                burst.setStartingMana(this.data.mmForcedManaPayload);
                burst.setMinManaLoss(this.data.mmForcedTicksBeforeManaLoss);
                burst.setManaLossPerTick(this.data.mmForcedManaLossPerTick);
                burst.setGravity(this.data.mmForcedGravity);
                burst.setMotion(burst.getMotion().scale(this.data.mmForcedVelocityMultiplier));
            } else {
                burst.setColor(props.color);
                burst.setMana(props.maxMana);
                burst.setStartingMana(props.maxMana);
                burst.setMinManaLoss(props.ticksBeforeManaLoss);
                burst.setManaLossPerTick(props.manaLossPerTick);
                burst.setGravity(props.gravity);
                burst.setMotion(burst.getMotion().scale(props.motionModifier));
            }
            return burst;
        }
        return null;
    };
    TileSpreader.prototype.getLensController = function (stack) {
        if (!stack.isEmpty()) {
        }
        return null;
    };
    TileSpreader.prototype.getManaYieldMultiplier = function (burst) {
        return 1;
    };
    TileSpreader.prototype.getBinding = function () {
        if (this.receiver == null) {
            return null;
        }
        return this.receiver.getPos();
    };
    TileSpreader.prototype.getMaxMana = function () {
        return this.manaCapacity;
    };
    TileSpreader.prototype.getInputKey = function () {
        return this.data.inputKey;
    };
    TileSpreader.prototype.getOutputKey = function () {
        return this.data.outputKey;
    };
    TileSpreader.prototype.canSelect = function () {
        return true;
    };
    TileSpreader.prototype.bindTo = function (player, item, coords, block) {
        if (!coords || !block) {
            return false;
        }
        let thisVec = Vec3d.copyCentered(this.getPos());
        let blockVec = new Vec3d(coords.x, coords.y, coords.z);
        let blockInstance = block.getBlock();
        let shape;
        if (blockInstance instanceof BlockBase) {
            shape = blockInstance.getShape();
        }
        let axis = (shape && !shape.hasNaN()) ? shape.offset(coords.x, coords.y, coords.z) : new AxisAlignedBB(blockVec.x, blockVec.y, blockVec.z, blockVec.x + 1, blockVec.y + 1, blockVec.z + 1);
        if (!axis.contains(blockVec)) {
            blockVec = new Vec3d(axis.minX + (axis.maxX - axis.minX) / 2, axis.minY + (axis.maxY - axis.minY) / 2, axis.minZ + (axis.maxZ - axis.minZ) / 2);
        }
        let diffVec = blockVec.subtract(thisVec);
        let diffVec2D = new Vec3d(diffVec.x, diffVec.z, 0);
        let rotVec = new Vec3d(0, 1, 0);
        let angle = Math.angleBetween(rotVec, diffVec2D);
        if (blockVec.x < thisVec.x) {
            angle = -angle;
        }
        this.data.rotationX = -angle;
        rotVec = new Vec3d(diffVec.x, 0, diffVec.z);
        angle = Math.angleBetween(diffVec, rotVec);
        if (blockVec.y < thisVec.y) {
            angle = -angle;
        }
        this.data.rotationY = -angle;
        this.checkForReceiver();
        this.sendPacket("updateRotation", {rotationX: this.data.rotationX, rotationY: this.data.rotationY});
        return true;
    };
    TileSpreader.prototype.getRotationX = function () {
        return this.data.rotationX;
    };
    TileSpreader.prototype.getRotationY = function () {
        return this.data.rotationY;
    };
    TileSpreader.prototype.setRotationX = function (rX) {
        this.data.rotationX = rX;
    };
    TileSpreader.prototype.setRotationY = function (rY) {
        this.data.rotationY = rY;
    };
    TileSpreader.prototype.setCanShoot = function (canShoot) {
        this.data.canShootBurst = canShoot;
    };
    TileSpreader.prototype.getBurstParticleTick = function () {
        return this.data.burstParticleTick;
    };
    TileSpreader.prototype.setBurstParticleTick = function (i) {
        this.data.burstParticleTick = i;
    };
    TileSpreader.prototype.getLastBurstDeathTick = function () {
        return this.data.lastBurstDeathTick;
    };
    TileSpreader.prototype.setLastBurstDeathTick = function (i) {
        this.data.lastBurstDeathTick = i;
    };
    TileSpreader.prototype.pingback = function (burst, expectedIdentity) {
        if (this.getIdentifier() == expectedIdentity) {
            this.data.pingbackTicks = 20;
            let vec = burst.getPos();
            this.data.lastPingbackX = vec.x;
            this.data.lastPingbackY = vec.y;
            this.data.lastPingbackZ = vec.z;
            this.setCanShoot(false);
        }
    };
    TileSpreader.prototype.spreaderFire = function () {
        if (this.sound) {
            this.sound.play();
        }
    };
    TileSpreader.prototype.clientUnload = function () {
        if (this.animData) {
            this.animData.coreAnim.destroy();
            this.animData.spreaderAnim.destroy();
            this.animData.coreAnim = null;
            this.animData.spreaderAnim = null;
        }
    };
    TileSpreader.prototype.clientLoad = function () {
        this.sound = new Sound(ModSounds.spreaderFire);
        this.sound.setInBlock(this.x, this.y, this.z);
    };
    TileSpreader.prototype.loadAnim = function (packet) {
        if (!this.animData) {
            this.animData = {spreaderAnim: null, coreAnim: null, r: 0, coreCoords: {x: this.x + 0.5 + 1 / 16 - 1 / 16, y: this.y + 0.225 + 1 / 16 / (1 / (1 / (16 / 6))) * 3.5, z: this.z + 0.5 - 1 / 16 + 1 / 16}};
        }
        BlockRenderer.mapAtCoords(this.x, this.y, this.z, emptyModel);
        this.animData.coreRotation = [0, 0, 0];
        LevelDisplayedQueue.run(function () {
            this.animData.coreAnim = new Animation.Item(this.animData.coreCoords.x, this.animData.coreCoords.y, this.animData.coreCoords.z);
            this.animData.coreAnim.describeItem({id: BlockID.spreaderCore, count: 1, size: 1, data: 0, notRandomize: true, rotation: [0, 0, 0]});
            this.animData.coreAnim.refresh();
            this.animData.coreAnim.load();
            this.animData.spreaderAnim = new Animation.Item(this.x + 0.5, this.y + 0.5, this.z + 0.5);
            this.animData.spreaderAnim.describeItem({id: this.getBlockState().id, size: 1, count: 1, data: 0, notRandomize: true, rotation: [packet.rotationY, packet.rotationX, 0]});
            this.animData.spreaderAnim.refresh();
            this.animData.spreaderAnim.load();
        }, this);
    };
    TileSpreader.prototype.updateRotation = function (packet) {
        LevelDisplayedQueue.run(function () {
            if (this.animData) {
                this.animData.spreaderAnim.setItemRotation(packet.rotationY, packet.rotationX, 0);
            }
        }, this);
    };
    TileSpreader.prototype.clientTick = function () {
        if (this.animData && this.animData.coreAnim) {
            this.animData.coreRotation[1] += Math.sin(Math.PI / 180);
            if (this.animData.coreRotation[0] > 0) {
                this.animData.coreRotation[0] -= Math.PI / 180;
            }
            if ((this.animData.coreAnim.coords.y <= this.animData.coreCoords.y && this.animData.max_y) || (this.animData.coreAnim.coords.y >= this.animData.coreCoords.y + 0.3 && !this.animData.max_y)) {
                this.animData.max_y = !this.animData.max_y;
            }
            if (!this.animData.max_y) {
                this.animData.coreAnim.setPos(this.animData.coreAnim.coords.x, this.animData.coreAnim.coords.y + 0.0016, this.animData.coreAnim.coords.z);
            } else {
                this.animData.coreAnim.setPos(this.animData.coreAnim.coords.x, this.animData.coreAnim.coords.y - 0.002, this.animData.coreAnim.coords.z);
            }
            this.animData.coreAnim.setItemRotation(this.animData.coreRotation[0], this.animData.coreRotation[1], this.animData.coreRotation[2]);
        }
    };
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileSpreader.prototype, "spreaderFire", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileSpreader.prototype, "loadAnim", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], TileSpreader.prototype, "updateRotation", null);
    return TileSpreader;
}(TileMod));

