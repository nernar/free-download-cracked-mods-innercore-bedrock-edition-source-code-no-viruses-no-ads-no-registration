let SubTilePureDaisy = (function (_super) {
    __extends(SubTilePureDaisy, _super);
    const POSITIONS = [new BlockPos(-1, 0, -1), new BlockPos(-1, 0, 0), new BlockPos(-1, 0, 1), new BlockPos(0, 0, 1), new BlockPos(1, 0, 1), new BlockPos(1, 0, 0), new BlockPos(1, 0, -1), new BlockPos(0, 0, -1)];
    function SubTilePureDaisy() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues.positionAt = 0;
        return _this;
    }
    SubTilePureDaisy.prototype.transformationParticles = function (data) {
        data = POSITIONS[data.i];
        for (let f = 0; f < 25; f++) {
            ParticleManager.addParticle(new WispParticleType(new WispParticleData([0, 0.5], 1, 1, 1, null, 2)), this.x + data.x + Math.random(), this.y + 0.5 + Math.random(), this.z + data.z + Math.random(), 0, -0.005, 0);
        }
    };
    SubTilePureDaisy.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (!this.data.ticksRemaining) {
            this.data.ticksRemaining = [-1, -1, -1, -1, -1, -1, -1, -1];
        }
        if (pingTick(20)) {
            let str = JSON.stringify(this.data.ticksRemaining.map(function (v) {
                return v > -1;
            }));
            if (str != this.networkData.getString("isTransforming", "")) {
                this.networkData.putString("isTransforming", str);
                this.networkData.sendChanges();
            }
        }
        this.data.positionAt++;
        if (this.data.positionAt == POSITIONS.length) {
            this.data.positionAt = 0;
        }
        let acoords = POSITIONS[this.data.positionAt];
        let coords = this.getPos().add(acoords);
        if (this.region.getBlockId(coords)) {
            let recipe = this.findRecipe(coords);
            if (recipe != null) {
                if (this.data.ticksRemaining[this.data.positionAt] == -1) {
                    this.data.ticksRemaining[this.data.positionAt] = recipe.getTime();
                }
                this.data.ticksRemaining[this.data.positionAt]--;
                if (this.data.ticksRemaining[this.data.positionAt] <= 0) {
                    this.data.ticksRemaining[this.data.positionAt] = -1;
                    if (recipe.set(this.region, coords, this)) {
                        if (ConfigHandler.COMMON.blockBreakParticles.get()) {
                        }
                        this.sendPacket("transformationParticles", {i: this.data.positionAt});
                    }
                }
            } else {
                this.data.ticksRemaining[this.data.positionAt] = -1;
            }
        } else {
            this.data.ticksRemaining[this.data.positionAt] = -1;
        }
    };
    SubTilePureDaisy.prototype.findRecipe = function (coords) {
        let block = this.region.getBlock(coords);
        let recipes = ModRecipes.getRecipes(ModRecipes.PURE_DAISY_TYPE);
        for (let i in recipes) {
            let recipe = recipes[i];
            if (recipe.matches(new ItemStack(block.id, 1, block.data))) {
                return recipe;
            }
        }
    };
    SubTilePureDaisy.prototype.clientTickFlower = function () {
        let str = this.networkData.getString("isTransforming", "[]");
        if (str != this.isTransforming) {
            this.isTransforming = str;
        }
        if (this.isTransforming) {
            let coords = JSON.parse(this.isTransforming);
            for (let i in POSITIONS) {
                if (Math.random() > 0.9 && coords[i]) {
                    let x = this.x + POSITIONS[i].x;
                    let z = this.z + POSITIONS[i].z;
                    ParticleManager.particleEffect("fx_sparkle", {data: new SparkleParticleData([0, 1], 1, 1, 1, null, 7), x: x + Math.random(), y: this.y + Math.random(), z: z + Math.random()});
                }
            }
        }
    };
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], SubTilePureDaisy.prototype, "transformationParticles", null);
    __decorate([BlockEngine.Decorators.ClientSide], SubTilePureDaisy.prototype, "clientTickFlower", null);
    return SubTilePureDaisy;
}(TileEntitySpecialFlower));

