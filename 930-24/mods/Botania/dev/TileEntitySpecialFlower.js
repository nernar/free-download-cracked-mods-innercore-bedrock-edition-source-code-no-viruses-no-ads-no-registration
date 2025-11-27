let TileEntitySpecialFlower = (function (_super) {
    __extends(TileEntitySpecialFlower, _super);
    __implements(TileEntitySpecialFlower, IWandBindable);
    const SLOWDOWN_FACTOR_PODZOL = 5;
    const SLOWDOWN_FACTOR_MYCEL = 10;
    const TAG_TICKS_EXISTED = "ticksExisted";
    const TAG_FLOATING_DATA = "floating";
    const TAG_MAX_MANA = "maxMana";
    const TAG_MANA = "mana";
    const TAG_COLOR = "color";
    function TileEntitySpecialFlower() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultValues = {mana: 0, ticksExisted: 0, overgrowth: false, overgrowthBoost: false, positionOverride: null, isFloating: false};
        return _this;
    }
    TileEntitySpecialFlower.prototype.getMaxMana = function () {
        return 20;
    };
    TileEntitySpecialFlower.prototype.getOffset = function () {
        return BushBlock.prototype.getOffset(this.getPos());
    };
    TileEntitySpecialFlower.prototype.getColor = function () {
        return 16777215;
    };
    TileEntitySpecialFlower.prototype.onInit = function () {
        this.networkData.putInt(TAG_MAX_MANA, this.getMaxMana());
        this.networkData.sendChanges();
    };
    TileEntitySpecialFlower.prototype.onTick = function () {
        let special = this.isOnSpecialSoil();
        if (special) {
            this.data.overgrowth = true;
            if (this.isOvergrowthAffected()) {
                this.tickFlower();
                this.data.overgrowthBoost = true;
            }
        }
        if (pingTick(20)) {
            if (this.networkData.getInt(TAG_MANA, 0) != this.data.mana) {
                this.networkData.putInt(TAG_MANA, this.data.mana);
                this.networkData.sendChanges();
            }
            if (this.networkData.getInt(TAG_COLOR, 0) != this.getColor()) {
                this.networkData.putInt(TAG_COLOR, this.getColor());
                this.networkData.sendChanges();
            }
        }
        this.tickFlower();
        this.data.overgrowth = false;
        this.data.overgrowthBoost = false;
    };
    TileEntitySpecialFlower.prototype.clientTickFlower = function () {
    };
    TileEntitySpecialFlower.prototype.clientTick = function () {
        let particleChance = 1 - this.networkData.getInt(TAG_MANA, 0) / this.networkData.getInt(TAG_MAX_MANA, 1) / 3.5;
        let color = this.getClientColor();
        let red = (color >> 16 & 255) / 255;
        let green = (color >> 8 & 255) / 255;
        let blue = (color & 255) / 255;
        if (Math.random() > particleChance) {
            let vec = new Vec3d(this.getPos()).add(this.getOffset().addVector(0.5, 0.5, 0.5));
            let data = new SparkleParticleData([0, 1], red, green, blue, null, 5);
            ParticleManager.particleEffect("fx_sparkle", {data: data, x: vec.x + Math.random() * 0.4, y: vec.y + 0.5 + Math.random() * 0.5, z: vec.z + Math.random() * 0.4});
        }
        this.clientTickFlower();
    };
    TileEntitySpecialFlower.prototype.getClientColor = function () {
        return this.networkData.getInt(TAG_COLOR, 0);
    };
    TileEntitySpecialFlower.prototype.isFloating = function () {
        return this.data.isFloating;
    };
    TileEntitySpecialFlower.prototype.setFloating = function (floating) {
        this.data.isFloating = floating;
    };
    TileEntitySpecialFlower.prototype.isOnSpecialSoil = function () {
        if (this.isFloating()) {
            return false;
        } else {
            return this.region.getBlockId(this.getPos().down()) == BlockID.enchantedSoil;
        }
    };
    TileEntitySpecialFlower.prototype.tickFlower = function () {
        this.data.ticksExisted++;
    };
    TileEntitySpecialFlower.prototype.read = function (cmp) {
        this.data.ticksExisted = cmp.getInt(TAG_TICKS_EXISTED, 0);
        this.readFromPacketNBT(cmp);
    };
    TileEntitySpecialFlower.prototype.write = function (cmp) {
        cmp.putInt(TAG_TICKS_EXISTED, this.data.ticksExisted);
        this.writeToPacketNBT(cmp);
        return cmp;
    };
    TileEntitySpecialFlower.prototype.writeToPacketNBT = function (cmp) {
        if (this.isFloating()) {
        }
    };
    TileEntitySpecialFlower.prototype.canSelect = function () {
        return false;
    };
    TileEntitySpecialFlower.prototype.readFromPacketNBT = function (cmp) {
    };
    TileEntitySpecialFlower.prototype.onWanded = function (player, item) {
        return false;
    };
    TileEntitySpecialFlower.prototype.isOvergrowthAffected = function () {
        return true;
    };
    TileEntitySpecialFlower.prototype.getSlowdownFactor = function () {
        switch (this.region.getBlockId(this.getPos().down())) {
          case VanillaBlockID.mycelium:
            return SLOWDOWN_FACTOR_MYCEL;
          case VanillaBlockID.podzol:
            return SLOWDOWN_FACTOR_PODZOL;
          default:
            return 0;
        }
    };
    TileEntitySpecialFlower.prototype.getMana = function () {
        return this.data.mana;
    };
    TileEntitySpecialFlower.prototype.addMana = function (mana) {
        this.data.mana = MathHelper.clamp(this.data.mana + mana, 0, this.getMaxMana());
    };
    __decorate([BlockEngine.Decorators.ClientSide], TileEntitySpecialFlower.prototype, "clientTickFlower", null);
    __decorate([BlockEngine.Decorators.ClientSide], TileEntitySpecialFlower.prototype, "getOffset", null);
    __decorate([BlockEngine.Decorators.ClientSide], TileEntitySpecialFlower.prototype, "getClientColor", null);
    return TileEntitySpecialFlower;
}(TileMod));

