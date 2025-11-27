let BlockPylon = (function (_super) {
    __extends(BlockPylon, _super);
    const SHAPE = new AxisAlignedBB(2 / 16, 0, 2 / 16, 14 / 16, 21 / 16, 14 / 16);
    let Variant = BlockPylon.Variant = (function () {
        __enum(Variant, "MANA", 8, 0.5, 0.5, 1);
        __enum(Variant, "NATURA", 15, 0.5, 1, 0.5);
        __enum(Variant, "GAIA", 15, 1, 0.5, 1);
        function Variant(epb, r, g, b) {
            this.enchantPowerBonus = epb;
            this.r = r;
            this.g = g;
            this.b = b;
            return this;
        }
        Variant.prototype.getTargetBlock = function () {
            return this == Variant.MANA ? ModBlocks.enchanter : ModBlocks.alfPortal;
        };
        return Variant;
    }());
    function BlockPylon(nameId, v, Prototype) {
        _super.call(this, nameId);
        this.variant = v;
        TileEntity.registerPrototype(this.id, Prototype);
        BlockRenderer.setStaticICRender(this.id, 0, new ICRender.Model());
        return this;
    }
    BlockPylon.prototype.getShape = function () {
        return SHAPE;
    };
    BlockPylon.prototype.getEnchantPowerBonus = function (region, state, pos) {
        return this.variant.enchantPowerBonus;
    };
    return BlockPylon;
}(BlockMod));

