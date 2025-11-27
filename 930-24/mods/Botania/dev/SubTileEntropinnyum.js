let SubTileEntropinnyum = (function (_super) {
    __extends(SubTileEntropinnyum, _super);
    const TAG_UNETHICAL = "botania:unethical";
    const RANGE = 12;
    function SubTileEntropinnyum() {
        _super.apply(this, arguments);
        return this;
    }
    SubTileEntropinnyum.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (this.getMana() == 0) {
            let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RANGE, RANGE, RANGE);
            this.region.getEntitiesWithinAABB(aabb, Actor, function (entity) {
                if (searchInArr([EEntityType.PRIMED_TNT, EEntityType.CREEPER], entity.getType())) {
                    let tntPos = entity.getPosition();
                    if (entity.getCompoundTag().getByte("Fuse") == 1 && this.region.getExtraBlock(tntPos).id == 0) {
                        entity.remove();
                        this.addMana(this.getMaxMana());
                        this.sendPacket("particles", tntPos);
                    }
                }
            }, this);
        }
    };
    SubTileEntropinnyum.prototype.particles = function (pos) {
        for (let i = 0; i < 50; i++) {
            ParticleManager.particleEffect("fx_sparkle", {data: new SparkleParticleData([1.25, 1.9], 1, 0.15, 0.15, null, 12), x: pos.x + Math.random() * 4 - 2, y: pos.y + Math.random() * 4 - 2, z: pos.z + Math.random() * 4 - 2});
        }
    };
    SubTileEntropinnyum.prototype.getColor = function () {
        return 13303808;
    };
    SubTileEntropinnyum.prototype.getMaxMana = function () {
        return 6500;
    };
    __decorate([BlockEngine.Decorators.NetworkEvent(Side.Client)], SubTileEntropinnyum.prototype, "particles", null);
    return SubTileEntropinnyum;
}(TileEntityGeneratingFlower));

