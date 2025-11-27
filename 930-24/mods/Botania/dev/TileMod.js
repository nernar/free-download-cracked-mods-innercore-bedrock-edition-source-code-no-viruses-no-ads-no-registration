let TileMod = (function (_super) {
    __extends(TileMod, _super);
    function TileMod() {
        _super.apply(this, arguments);
        this.defaultValues = {};
        return this;
    }
    TileMod.prototype.getBlock = function () {
        return BlockRegistry.getInstanceOf(this.blockID);
    };
    TileMod.prototype.isRemoved = function () {
        return this.remove;
    };
    return TileMod;
}(TileEntityBase));

