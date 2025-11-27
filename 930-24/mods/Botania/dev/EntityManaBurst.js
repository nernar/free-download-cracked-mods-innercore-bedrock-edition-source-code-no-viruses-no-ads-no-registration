let EntityManaBurst = (function (_super) {
    __extends(EntityManaBurst, _super);
    const TAG_TICKS_EXISTED = "ticksExisted";
    const TAG_COLOR = "color";
    const TAG_MANA = "mana";
    const TAG_STARTING_MANA = "startingMana";
    const TAG_MIN_MANA_LOSS = "minManaLoss";
    const TAG_TICK_MANA_LOSS = "manaLossTick";
    const TAG_SPREADER_X = "spreaderX";
    const TAG_SPREADER_Y = "spreaderY";
    const TAG_SPREADER_Z = "spreaderZ";
    const TAG_GRAVITY = "gravity";
    const TAG_LENS_STACK = "lensStack";
    const TAG_LAST_MOTION_X = "lastMotionX";
    const TAG_LAST_MOTION_Y = "lastMotionY";
    const TAG_LAST_MOTION_Z = "lastMotionZ";
    const TAG_HAS_SHOOTER = "hasShooter";
    const TAG_SHOOTER = "shooterUUID";
    const TAG_LAST_COLLISION_X = "lastCollisionX";
    const TAG_LAST_COLLISION_Y = "lastCollisionY";
    const TAG_LAST_COLLISION_Z = "lastCollisionZ";
    const TAG_WARPED = "warped";
    const TAG_ORBIT_TIME = "orbitTime";
    const TAG_TRIPPED = "tripped";
    const TAG_MAGNETIZE_POS = "magnetizePos";
    const TAG_FULL_MANA_LAST_TICK = "fullManaLastTick";
    function EntityManaBurst(tile, fake) {
        if (__instanceOf(tile, PlayerEntity)) {
            _super.call(this, WorldRegion.getForActor(player));
            let pos = player.getPosition();
            let angle = player.getLookAngle();
            this.setLocationAndAngles(pos.x, pos.y, pos.z, 0, 0);
            this.rotationYaw = angle.yaw + 180;
            this.rotationPitch = -angle.pitch;
        } else {
            if (tile) {
                _super.call(this, tile.region);
                this.setLocationAndAngles(tile.x + 0.5, tile.y + 0.5, tile.z + 0.5, 0, 0);
                this.rotationYaw = tile.getRotationX() + Math.PI;
                this.rotationPitch = -tile.getRotationY();
            } else {
                _super.call(this);
            }
        }
        this.color = 16777215;
        this.mana = 0;
        this.startMana = 0;
        this.minManaLoss = 0;
        this.manaLossPerTick = 0;
        this.gravity = 0;
        this.sourceLens = new ItemStack(0);
        this.accumulatedManaLoss = 0;
        this.fake = fake;
        this.alreadyCollidedAt = [];
        this.fullManaLastTick = true;
        this._ticksExisted = 0;
        this.scanBeam = false;
        this.lastCollision = new BlockPos(0, -1, 0);
        this.warped = false;
        this.orbitTime = 0;
        this.tripped = false;
        this.propsList = [];
        this.sourceCoords = new BlockPos(this.pos);
        let f = 0.4;
        let mx = Math.sin(this.rotationYaw) * Math.cos(this.rotationPitch) * f / 2;
        let mz = -(Math.cos(this.rotationYaw) * Math.cos(this.rotationPitch) * f) / 2;
        let my = Math.sin(this.rotationPitch) * f / 2;
        this.setBurstMotion(mx, my, mz);
    }
    EntityManaBurst.prototype.setBurstMotion = function (x, y, z) {
        this.setMotion(x, y, z);
    };
    EntityManaBurst.prototype.setBurstSourceCoords = function (xAndPos, y, z) {
        this.sourceCoords = new BlockPos(xAndPos, y, z);
    };
    EntityManaBurst.prototype.initClientData = function (packet) {
        this.color = packet.color;
        this.mana = packet.mana;
        this.sourceLens = new ItemStack(packet.sourceLens);
        this.fake = packet.fake;
        this.fullManaLastTick = packet.fullManaLastTick;
    };
    EntityManaBurst.prototype.clientAddListener = function (client) {
        this.sendPacketToClient(client, "initClientData", {color: this.color, mana: this.mana, sourceLens: this.sourceLens.toJSON(), fake: this.fake, fullManaLastTick: this.fullManaLastTick});
    };
    EntityManaBurst.prototype.setColor = function (color) {
        this.color = color;
        this.sendPacket("updateColor", {color: this.color});
    };
    EntityManaBurst.prototype.updateColor = function (packet) {
        this.color = packet.color;
    };
    EntityManaBurst.prototype.setScanBeam = function () {
        this.scanBeam = true;
    };
    EntityManaBurst.prototype.setShooterUUID = function (uuid) {
        this.shooterIdentity = uuid;
    };
    EntityManaBurst.prototype.setStartingMana = function (mana) {
        this.startMana = mana;
        this.sendPacket("updateStartingMana", {startMana: this.startMana});
    };
    EntityManaBurst.prototype.updateStartingMana = function (packet) {
        this.startMana = packet.startMana;
    };
    EntityManaBurst.prototype.setMinManaLoss = function (loss) {
        this.minManaLoss = loss;
    };
    EntityManaBurst.prototype.setManaLossPerTick = function (loss) {
        this.manaLossPerTick = loss;
    };
    EntityManaBurst.prototype.setGravity = function (gravity) {
        this.gravity = gravity;
    };
    EntityManaBurst.prototype.getCollidedTile = function (noParticles) {
        this.noParticles = noParticles;
        this.sendPacket("updateNoParticles", {noParticles: this.noParticles});
        let iterations = 0;
        while (this.isAlive() && (iterations < ConfigHandler.COMMON.spreaderTraceTime.get())) {
            this.onTick();
            iterations++;
        }
        if (this.fake) {
            this.incrementFakeParticleTick();
        }
        return this.collidedTile;
    };
    EntityManaBurst.prototype.incrementFakeParticleTick = function () {
        let tile = this.getShooter();
        if (__instanceOf(tile, IManaSpreader)) {
            let spreader = tile;
            spreader.setBurstParticleTick(spreader.getBurstParticleTick() + 2);
            if (spreader.getLastBurstDeathTick() != -1 && spreader.getBurstParticleTick() > spreader.getLastBurstDeathTick()) {
                spreader.setBurstParticleTick(0);
            }
        }
    };
    EntityManaBurst.prototype.onImpact = function () {
        let dead = false;
        let pos = new BlockPos(this.getPos());
        if (pos.equals(this.lastCollision)) {
            return;
        }
        this.lastCollision = new BlockPos(pos);
        let tile = this.region.getTileEntity(pos);
        let block = this.region.getBlock(pos);
        if (!Block.isSolid(block.id)) {
            return;
        }
        let coords = this.getBurstSourceBlockPos();
        if (tile != null && !tile.getPos().equals(coords)) {
            this.collidedTile = tile;
        }
        if (tile == null || !tile.getPos().equals(coords)) {
            if (!this.fake && !this.noParticles && __instanceOf(tile, IManaReceiver) && tile.canReceiveManaFromBursts()) {
                this.onReceiverImpact(tile, tile.getPos());
            }
            dead = true;
        }
        let lens = this.getLensInstance();
        if (lens != null) {
            dead = lens.collideBurst(this, rtr, collidedTile instanceof IManaReceiver && this.collidedTile.canReceiveManaFromBursts(), dead, this.getSourceLens());
        }
        if (dead && this.isAlive()) {
            if (!this.fake) {
                this.sendPacket("deadParticles");
            }
            this.kill();
        }
    };
    EntityManaBurst.prototype.deadParticles = function () {
        let color = this.getColor();
        let r = (color >> 16 & 255) / 255;
        let g = (color >> 8 & 255) / 255;
        let b = (color & 255) / 255;
        let size = this.getParticleSize();
        if (!ConfigHandler.CLIENT.subtlePowerSystem.get()) {
            let data = new WispParticleData(0.15 * size, r, g, b, null, 1);
            for (let i = 0; i < 4; i++) {
                this.region.addParticle(new WispParticleType(data), this.pos.x, this.pos.y, this.pos.z, (Math.random() - 0.5) * 0.04, (Math.random() - 0.5) * 0.04, (Math.random() - 0.5) * 0.04);
            }
        }
        let data = SparkleParticleData.sparkle(4, r, g, b, null, 2);
        this.region.addParticle(new SparkleParticleType(data), this.pos.x, this.pos.y, this.pos.z, 0, 0, 0);
    };
    EntityManaBurst.prototype.updateNoParticles = function (packet) {
        this.noParticles = packet.noParticles;
    };
    EntityManaBurst.prototype.setSourceLens = function (stack) {
        this.sourceLens = new ItemStack(stack);
        this.sendPacket("updateSourceLens", this.sourceLens.toJSON());
    };
    EntityManaBurst.prototype.updateSourceLens = function (item) {
        this.sourceLens = new ItemStack(item);
    };
    EntityManaBurst.prototype.onReceiverImpact = function (tile, pos) {
        if (this.hasWarped()) {
            return;
        }
        let lens = this.getLensInstance();
        let mana = this.getMana();
        if (lens != null) {
            let stack = this.getSourceLens();
            mana = lens.getManaToTransfer(this, stack, tile);
        }
        if (__instanceOf(tile, IManaSpreader)) {
            mana *= tile.getManaYieldMultiplier(this);
        }
        tile.addMana(mana);
    };
    EntityManaBurst.prototype.hasWarped = function () {
        return this.warped;
    };
    EntityManaBurst.prototype.getColor = function () {
        return this.color;
    };
    EntityManaBurst.prototype.getBurstSourceBlockPos = function () {
        return this.sourceCoords;
    };
    EntityManaBurst.prototype.onTick = function () {
        this.setTicksExisted(this.getTicksExisted() + 1);
        _super.prototype.onTick.call(this);
        if (!this.fake && this.isAlive() && !this.scanBeam) {
            this.ping();
        }
        let lens = this.getLensInstance();
        if (lens != null) {
            lens.updateBurst(this, this.getSourceLens());
        }
        let mana = this.getMana();
        if (this.getTicksExisted() >= this.getMinManaLoss()) {
            this.accumulatedManaLoss += this.getManaLossPerTick();
            let loss = Math.floor(this.accumulatedManaLoss);
            this.setMana(mana - loss);
            this.accumulatedManaLoss -= loss;
            if (this.getMana() <= 0) {
                this.kill();
            }
        }
        let fullMana = this.fullManaLastTick;
        this.fullManaLastTick = this.getMana() == this.getStartingMana();
        if (this.fullManaLastTick != fullMana) {
            this.sendPacket("updateFullManaLastTick", {fullManaLastTick: this.fullManaLastTick});
        }
        if (this.scanBeam) {
            let props = new PositionProperties(this);
            if (this.propsList.length == 0) {
                this.propsList.push(props);
            } else {
                let lastProps = this.propsList[this.propsList.length - 1];
                if (!props.coordsEqual(lastProps)) {
                    this.propsList.push(props);
                }
            }
        }
    };
    EntityManaBurst.prototype.setTicksExisted = function (i) {
        this._ticksExisted = i;
    };
    EntityManaBurst.prototype.getTicksExisted = function () {
        return this._ticksExisted;
    };
    EntityManaBurst.prototype.kill = function () {
        _super.prototype.kill.call(this);
        if (!this.fake) {
            let tile = this.getShooter();
            if (__instanceOf(tile, IManaSpreader)) {
                tile.setCanShoot(true);
            }
        } else {
            this.setDeathTicksForFakeParticle();
        }
    };
    EntityManaBurst.prototype.setDeathTicksForFakeParticle = function () {
        let coords = this.getBurstSourceBlockPos();
        let tile = this.region.getTileEntity(coords);
        if (tile != null && __instanceOf(tile, IManaSpreader)) {
            tile.setLastBurstDeathTick(this.getTicksExisted());
        }
    };
    EntityManaBurst.prototype.ping = function () {
        let tile = this.getShooter();
        if (__instanceOf(tile, IPingable)) {
            tile.pingback(this, this.getShooterUUID());
        }
    };
    EntityManaBurst.prototype.getShooter = function () {
        return this.region.getTileEntity(this.getBurstSourceBlockPos());
    };
    EntityManaBurst.prototype.getShooterUUID = function () {
        return this.shooterIdentity;
    };
    EntityManaBurst.prototype.updateFullManaLastTick = function (packet) {
        this.fullManaLastTick = packet.fullManaLastTick;
    };
    EntityManaBurst.prototype.getLensInstance = function () {
        let lens = this.getSourceLens();
        if (lens && !lens.isEmpty()) {
        }
        return null;
    };
    EntityManaBurst.prototype.getSourceLens = function () {
        return this.sourceLens;
    };
    EntityManaBurst.prototype.getMana = function () {
        return this.mana;
    };
    EntityManaBurst.prototype.setMana = function (mana) {
        this.mana = mana;
        this.sendPacket("updateMana", {mana: this.mana});
    };
    EntityManaBurst.prototype.updateMana = function (packet) {
        this.mana = packet.mana;
    };
    EntityManaBurst.prototype.getManaLossPerTick = function () {
        return this.manaLossPerTick;
    };
    EntityManaBurst.prototype.getMinManaLoss = function () {
        return this.minManaLoss;
    };
    EntityManaBurst.prototype.getStartingMana = function () {
        return this.startMana;
    };
    EntityManaBurst.prototype.clientTick = function () {
        this.particles();
    };
    EntityManaBurst.prototype.particles = function () {
        if (!this.isAlive()) {
            return;
        }
        let lens = this.getLensInstance();
        if (lens != null && !lens.doParticles(this, this.getSourceLens())) {
            return;
        }
        let color = this.getColor();
        let r = (color >> 16 & 255) / 255;
        let g = (color >> 8 & 255) / 255;
        let b = (color & 255) / 255;
        let osize = this.getParticleSize();
        let size = osize;
        if (this.fake) {
            if (this.getMana() == this.getStartingMana()) {
                size = 2;
            } else {
                if (this.fullManaLastTick) {
                    size = 4;
                }
            }
            if (!this.noParticles && this.shouldDoFakeParticles()) {
                let part = new SparkleParticleType(new SparkleParticleData(0.4 * size, r, g, b, null, 1));
                this.region.addParticle(part, this.pos.x, this.pos.y, this.pos.z, 0, 0, 0);
            }
        } else {
            let depth = false;
            if (ConfigHandler.CLIENT.subtlePowerSystem.get()) {
                let data = new WispParticleData(0.1 * size, r, g, b, null, 1, depth);
                this.region.addParticle(new WispParticleType(data), this.pos.x, this.pos.y, this.pos.z, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02);
            } else {
                let data = new WispParticleData([Math.max(osize - 0.325, 0) * 0.2, (osize + 0.4325) * 0.2], r, g, b, null, 1, depth);
                this.region.addParticle(new WispParticleType(data), this.pos.x, this.pos.y, this.pos.z, -this.getMotion().getX() * 0.01, -this.getMotion().getY() * 0.01, -this.getMotion().getZ() * 0.01);
                data = new WispParticleData([Math.max(osize - 0.325, 0) * 0.1, (osize + 0.4325) * 0.1], r, g, b, null, 1, depth);
                this.region.addParticle(new WispParticleType(data), this.pos.x, this.pos.y, this.pos.z, (Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.06);
            }
        }
    };
    EntityManaBurst.prototype.getBurstGravity = function () {
        return this.gravity;
    };
    EntityManaBurst.prototype.write = function (data) {
        _super.prototype.write.call(this, data);
        if (this.fake) {
            return;
        }
        data[TAG_TICKS_EXISTED] = this.getTicksExisted();
        data[TAG_COLOR] = this.getColor();
        data[TAG_MANA] = this.getMana();
        data[TAG_STARTING_MANA] = this.getStartingMana();
        data[TAG_MIN_MANA_LOSS] = this.getMinManaLoss();
        data[TAG_TICK_MANA_LOSS] = this.getManaLossPerTick();
        data[TAG_GRAVITY] = this.getBurstGravity();
        let stack = this.getSourceLens();
        if (!stack.isEmpty()) {
            data[TAG_LENS_STACK] = {id: stack.id, count: stack.count, data: stack.data, extra: stack.extra};
        }
        let coords = this.getBurstSourceBlockPos();
        data[TAG_SPREADER_X] = coords.getX();
        data[TAG_SPREADER_Y] = coords.getY();
        data[TAG_SPREADER_Z] = coords.getZ();
        data[TAG_LAST_MOTION_X] = this.getMotion().getX();
        data[TAG_LAST_MOTION_Y] = this.getMotion().getY();
        data[TAG_LAST_MOTION_Z] = this.getMotion().getZ();
        if (this.lastCollision && this.lastCollision.getY() >= 0) {
            data[TAG_LAST_COLLISION_X] = coords.getX();
            data[TAG_LAST_COLLISION_Y] = coords.getY();
            data[TAG_LAST_COLLISION_Z] = coords.getZ();
        }
        let identity = this.getShooterUUID();
        let hasShooter = identity != null;
        data[TAG_HAS_SHOOTER] = hasShooter;
        if (hasShooter) {
            data[TAG_SHOOTER] = identity;
        }
        data[TAG_WARPED] = this.warped;
        data[TAG_ORBIT_TIME] = this.orbitTime;
        data[TAG_TRIPPED] = this.tripped;
        if (this.magnetizePos != null) {
            data[TAG_MAGNETIZE_POS] = {x: this.magnetizePos.getX(), y: this.magnetizePos.getY(), z: this.magnetizePos.getZ()};
        }
    };
    EntityManaBurst.prototype.read = function (data) {
        _super.prototype.read.call(this, data);
        this.setTicksExisted(data[TAG_TICKS_EXISTED]);
        this.setColor(data[TAG_COLOR]);
        this.setMana(data[TAG_MANA]);
        this.setStartingMana(data[TAG_STARTING_MANA]);
        this.setMinManaLoss(data[TAG_MIN_MANA_LOSS]);
        this.setManaLossPerTick(data[TAG_TICK_MANA_LOSS]);
        this.setGravity(data[TAG_GRAVITY]);
        let lensData = data[TAG_LENS_STACK];
        let stack = new ItemStack(data);
        if (!stack.isEmpty()) {
            this.setSourceLens(stack);
        } else {
            this.setSourceLens(new ItemStack(0));
        }
        let x = data[TAG_SPREADER_X];
        let y = data[TAG_SPREADER_Y];
        let z = data[TAG_SPREADER_Z];
        this.setBurstSourceCoords(new BlockPos(x, y, z));
        if (typeof data[TAG_LAST_COLLISION_X] == "number") {
            x = data[TAG_LAST_COLLISION_X];
            y = data[TAG_LAST_COLLISION_Y];
            z = data[TAG_LAST_COLLISION_Z];
            this.lastCollision = new BlockPos(x, y, z);
        }
        let lastMotionX = data[TAG_LAST_MOTION_X];
        let lastMotionY = data[TAG_LAST_MOTION_Y];
        let lastMotionZ = data[TAG_LAST_MOTION_Z];
        this.setBurstMotion(lastMotionX, lastMotionY, lastMotionZ);
        let hasShooter = data[TAG_HAS_SHOOTER];
        if (hasShooter) {
            let serializedUuid = data[TAG_SHOOTER];
            let identity = this.getShooterUUID();
            if (serializedUuid != identity) {
                this.setShooterUUID(serializedUuid);
            }
        }
        this.warped = data[TAG_WARPED];
        this.orbitTime = data[TAG_ORBIT_TIME];
        this.tripped = data[TAG_TRIPPED];
        if (data[TAG_MAGNETIZE_POS]) {
            this.magnetizePos = new BlockPos(data[TAG_MAGNETIZE_POS]);
        } else {
            this.magnetizePos = null;
        }
    };
    EntityManaBurst.prototype.shouldDoFakeParticles = function () {
        if (ConfigHandler.CLIENT.staticWandBeam.get()) {
            return true;
        }
        return this.getMana() != this.getStartingMana() && this.fullManaLastTick;
    };
    EntityManaBurst.prototype.getParticleSize = function () {
        let arr = [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
        return arr[Math.round(this.getMana() / this.getStartingMana() * (arr.length - 1))];
    };
    let PositionProperties = EntityManaBurst.PositionProperties = (function () {
        function PositionProperties(burst) {
            this.coords = new BlockPos(burst.getPos());
            this.state = burst.region.getBlock(this.coords);
            this.invalid = false;
            return this;
        }
        PositionProperties.prototype.coordsEqual = function (props) {
            return this.coords.equals(props.coords);
        };
        PositionProperties.prototype.contentsEqual = function (region) {
            if (!region.isChunkLoadedAt(this.coords.x, this.coords.z)) {
                this.invalid = true;
                return false;
            }
            let state = region.getBlock(this.coords);
            return state.id == this.state.id && state.data == this.state.data;
        };
        PositionProperties.prototype.equals = function (o) {
            return o instanceof PositionProperties && o.state.id == this.state.id && o.state.data == this.state.data && o.coords.equals(this.coords);
        };
        return PositionProperties;
    }());
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], EntityManaBurst.prototype, "updateSourceLens", null);
    __decorate([BlockEngine.Decorators.ClientSide], EntityManaBurst.prototype, "getParticleSize", null);
    __decorate([BlockEngine.Decorators.ClientSide], EntityManaBurst.prototype, "getLensInstance", null);
    __decorate([BlockEngine.Decorators.ClientSide], EntityManaBurst.prototype, "getSourceLens", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], EntityManaBurst.prototype, "updateColor", null);
    __decorate([BlockEngine.Decorators.ClientSide], EntityManaBurst.prototype, "getColor", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], EntityManaBurst.prototype, "updateMana", null);
    __decorate([BlockEngine.Decorators.ClientSide], EntityManaBurst.prototype, "getMana", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], EntityManaBurst.prototype, "updateStartingMana", null);
    __decorate([BlockEngine.Decorators.ClientSide], EntityManaBurst.prototype, "getStartingMana", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], EntityManaBurst.prototype, "updateFullManaLastTick", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], EntityManaBurst.prototype, "updateNoParticles", null);
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], EntityManaBurst.prototype, "deadParticles", null);
    __decorate([BlockEngine.Decorators.ClientSide], EntityManaBurst.prototype, "particles", null);
    return EntityManaBurst;
}(TickableEntity));

