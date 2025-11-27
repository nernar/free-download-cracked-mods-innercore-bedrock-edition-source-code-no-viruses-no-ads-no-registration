let TilePylon = (function (_super) {
    __extends(TilePylon, _super);
    const MESHS = new LazyValue(function () {
        let meshs = {};
        ["mana", "natura", "gaia"].forEach(function (name) {
            let shardsMesh = new RenderMesh();
            let platesMesh = new RenderMesh();
            shardsMesh.importFromFile(__dir__ + "assets/models/pylon_" + name + "_shards.obj", "obj", {});
            platesMesh.importFromFile(__dir__ + "assets/models/pylon_" + name + "_plates.obj", "obj", {});
            shardsMesh.rebuild();
            platesMesh.rebuild();
            meshs[name] = [shardsMesh, platesMesh];
        });
        return meshs;
    });
    const TAG_ACTIVATED = "activated";
    const TAG_CENTER_POS = "centerPos";
    function TilePylon() {
        _super.apply(this, arguments);
        this.activated = false;
        this.centerPos = null;
        return this;
    }
    TilePylon.prototype.onTick = function () {
        let _block = this.getBlockState().getBlock();
        if (!__instanceOf(_block, BlockPylon)) {
            return;
        }
        let variant = _block.variant;
        if (this.networkData.getBoolean(TAG_ACTIVATED, false) != this.activated) {
            this.networkData.putBoolean(TAG_ACTIVATED, this.activated);
            if (this.activated) {
                this.networkData.putString(TAG_CENTER_POS, JSON.stringify(this.centerPos));
            }
            this.networkData.sendChanges();
        }
        if (this.activated) {
            if (this.region.getBlock(this.centerPos).getBlock() != variant.getTargetBlock() || variant == BlockPylon.Variant.NATURA && (this.portalOff() || !__instanceOf(this.region.getBlock(this.getPos().down()).getBlock(), BlockPool))) {
                this.activated = false;
                return;
            }
        }
    };
    TilePylon.prototype.portalOff = function () {
        return this.region.getBlock(this.centerPos).getBlock() != ModBlocks.alfPortal || this.region.getBlock(this.centerPos).data == 0;
    };
    TilePylon.prototype.clientLoad = function () {
        this.ticks = 0;
        if (this.animsLoaded) {
            return;
        }
        LevelDisplayedQueue.run(function () {
            let block = this.getBlockState().getBlock();
            if (block && block.variant) {
                let name = block.variant.name().toLowerCase();
                let shardsMesh = MESHS.getValue()[name][0];
                let platesMesh = MESHS.getValue()[name][1];
                this.shardsAnim = new Animation.Base(this.x + 0.5, this.y + 0.35, this.z + 0.5);
                this.platesAnim = new Animation.Base(this.x + 0.5, this.y + 0.35, this.z + 0.5);
                this.shardsAnim.setInterpolationEnabled(true);
                this.platesAnim.setInterpolationEnabled(true);
                this.shardsAnim.describe({mesh: shardsMesh, material: "translucent", skin: "terrain-atlas/pylon_" + name});
                this.platesAnim.describe({mesh: platesMesh, skin: "terrain-atlas/pylon_" + name});
                this.shardsAnim.load();
                this.platesAnim.load();
                this.animsLoaded = true;
            }
        }, this);
    };
    TilePylon.prototype.clientUnload = function () {
        if (this.animsLoaded) {
            this.animsLoaded = false;
            this.shardsAnim.destroy();
            this.platesAnim.destroy();
            this.shardsAnim = this.platesAnim = null;
        }
    };
    TilePylon.prototype.clientTick = function () {
        this.ticks++;
        let _block = this.getBlockState().getBlock();
        if (!__instanceOf(_block, BlockPylon)) {
            return;
        }
        let variant = _block.variant;
        if (this.networkData.getBoolean(TAG_ACTIVATED, false)) {
            this.centerPos = new BlockPos(JSON.parse(String(this.networkData.getString(TAG_CENTER_POS, ""))));
            let centerBlock = new Vec3d(this.centerPos.getX() + 0.5, this.centerPos.getY() + 0.75 + (Math.random() - 0.5 * 0.25), this.centerPos.getZ() + 0.5);
            if (variant == BlockPylon.Variant.NATURA) {
                if (ConfigHandler.CLIENT.elfPortalParticlesEnabled.get()) {
                    let worldTime = this.ticks;
                    worldTime += new java.util.Random(this.getPos().hashCode()).nextInt(1000);
                    worldTime /= 5;
                    let r = 0.75 + Math.random() * 0.05;
                    let x = this.pos.getX() + 0.5 + Math.cos(worldTime) * r;
                    let z = this.pos.getZ() + 0.5 + Math.sin(worldTime) * r;
                    let ourCoords = new Vec3d(x, this.getPos().getY() + 0.25, z);
                    centerBlock = centerBlock.subtract(0, 0.5, 0);
                    let movementVector = centerBlock.subtract(ourCoords).normalize().scale(0.2);
                    let data = new WispParticleData([0.25, 0.35], 0.125, 0.875, 0.125);
                    this.region.addParticle(new WispParticleType(data), x, this.getPos().getY() + 0.25, z, 0, -(-0.075 - Math.random() * 0.015), 0);
                    if (this.region.rand.nextInt(3) == 0) {
                        let data1 = new WispParticleData([0.25, 0.35], 0.125, 0.875, 0.125);
                        this.region.addParticle(new WispParticleType(data1), x, this.getPos().getY() + 0.25, z, movementVector.x, movementVector.y, movementVector.z);
                    }
                }
            } else {
                let ourCoords = Vec3d.copyCentered(this.getPos()).add(0, 1 + (Math.random() - 0.5 * 0.25), 0);
                let movementVector = centerBlock.subtract(ourCoords).normalize().scale(0.2);
                let block = this.region.getBlock(this.getPos().down()).getBlock();
                if (__instanceOf(block, BlockModFlower)) {
                    let hex = block.color.getColorValue();
                    let r = (hex & 16711680) >> 16;
                    let g = (hex & 65280) >> 8;
                    let b = hex & 255;
                    if (this.region.rand.nextInt(4) == 0) {
                        let data = SparkleParticleData.sparkle([0, 1], r / 255, g / 255, b / 255, null, 8);
                        this.region.addParticle(new WispParticleType(data), centerBlock.x + (Math.random() - 0.5) * 0.5, centerBlock.y, centerBlock.z + (Math.random() - 0.5) * 0.5, 0, 0, 0);
                    }
                    let data1 = new WispParticleData([0, 0.333], r / 255, g / 255, b / 255);
                    this.region.addParticle(new WispParticleType(data1), this.getPos().getX() + 0.5 + (Math.random() - 0.5) * 0.25, this.getPos().getY() - 0.5, this.getPos().getZ() + 0.5 + (Math.random() - 0.5) * 0.25, 0, --0.04, 0);
                    let data = new WispParticleData([0, 0.2], r / 255, g / 255, b / 255);
                    this.region.addParticle(new WispParticleType(data), this.getPos().getX() + 0.5 + (Math.random() - 0.5) * 0.125, this.getPos().getY() + 1.5, this.getPos().getZ() + 0.5 + (Math.random() - 0.5) * 0.125, 0, --0.001, 0);
                    let data2 = new WispParticleData([0, 0.125], r / 255, g / 255, b / 255);
                    this.region.addParticle(new WispParticleType(data2), this.getPos().getX() + 0.5 + (Math.random() - 0.5) * 0.25, this.getPos().getY() + 1.5, this.getPos().getZ() + 0.5 + (Math.random() - 0.5) * 0.25, movementVector.x, movementVector.y, movementVector.z);
                }
            }
        }
        if (this.region.rand.nextBoolean()) {
            let data = SparkleParticleData.sparkle([0, 1], variant.r, variant.g, variant.b, null, 2);
            this.region.addParticle(new SparkleParticleType(data), this.getPos().getX() + Math.random(), this.getPos().getY() + Math.random() * 1.5, this.getPos().getZ() + Math.random(), 0, 0, 0);
        }
        if (!this.animsLoaded) {
            return;
        }
        let worldTime = this.ticks;
        worldTime += new java.util.Random(this.getPos().hashCode()).nextInt(360);
        let rot = worldTime * 1.5 * (Math.PI / 180) % (Math.PI * 2);
        this.platesAnim.transform().lock().clear().rotate(0, rot, 0).translate(0, Math.sin(worldTime / 20) / 20 - 0.025, 0).unlock();
        rot = -worldTime * (Math.PI / 180) % (Math.PI * 2);
        this.shardsAnim.transform().lock().clear().rotate(0, rot, 0).translate(0, Math.sin(worldTime / 20) / 17.5, 0).unlock();
    };
    return TilePylon;
}(TileMod));

