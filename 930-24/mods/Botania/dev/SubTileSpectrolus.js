let SubTileSpectrolus = (function (_super) {
    __extends(SubTileSpectrolus, _super);
    const TAG_NEXT_COLOR = "nextColor";
    const WOOL_GEN = 1200;
    const SHEEP_GEN = 5000;
    const BABY_SHEEP_GEN = 1;
    const RANGE = 1;
    function SubTileSpectrolus() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileSpectrolus.prototype.tickFlower = function () {
        _super.prototype.tickFlower.call(this);
        if (!this.data.nextColor) {
            this.data.nextColor = DyeColor.WHITE;
        }
        let aabb = new AxisAlignedBB(this.getPos(), this.getPos()).grow(RANGE, RANGE, RANGE);
        this.region.getEntitiesWithinAABB(aabb, Actor, function (entity) {
            if (entity.getType() == EEntityType.SHEEP) {
                let tags = entity.getCompoundTag();
                if (!tags.getByte("Sheared") && this.data.nextColor.data == tags.getShort("Color")) {
                    this.addManaAndCycle(tags.getByte("IsBaby") ? BABY_SHEEP_GEN : SHEEP_GEN);
                }
                entity.setHealth(0);
            } else {
                if (__instanceOf(entity, ItemEntity)) {
                    let stack = entity.getItemStack();
                    if (stack.id == VanillaBlockID.wool) {
                        if (stack.data == this.data.nextColor.data) {
                            this.addManaAndCycle(WOOL_GEN);
                        }
                        entity.kill();
                    }
                }
            }
        }, this);
    };
    SubTileSpectrolus.prototype.addManaAndCycle = function (toAdd) {
        this.addMana(toAdd);
        this.data.nextColor = DyeColor.byId(this.data.nextColor.data < 15 ? this.data.nextColor.data + 1 : 0);
    };
    SubTileSpectrolus.prototype.getClientColor = function () {
        let color = ModParticles.RainbowSparkle[ClientTickHandler.ticksInGame * 2 % ModParticles.RainbowSparkle.length];
        return MathHelper.RGBToHash(color.r * 255, color.g * 255, color.b * 255);
    };
    SubTileSpectrolus.prototype.getMaxMana = function () {
        return 6000;
    };
    SubTileSpectrolus.prototype.writeToPacketNBT = function (cmp) {
        _super.prototype.writeToPacketNBT.call(this, cmp);
        cmp.putInt(TAG_NEXT_COLOR, this.data.nextColor.data);
    };
    SubTileSpectrolus.prototype.readFromPacketNBT = function (cmp) {
        _super.prototype.readFromPacketNBT.call(this, cmp);
        this.data.nextColor = DyeColor.byId(cmp.getInt(TAG_NEXT_COLOR, 0));
    };
    return SubTileSpectrolus;
}(TileEntityGeneratingFlower));

