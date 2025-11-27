let BlockAlfPortal = (function (_super) {
    __extends(BlockAlfPortal, _super);
    __implements(BlockAlfPortal, IWandable);
    function BlockAlfPortal(nameId, Prototype) {
        _super.call(this, nameId);
        this.addVariation("block.botania." + this.textureName, [[this.textureName, 0]], true);
        this.addVariation("\ubc15 \ud615\uc2dd", [[this.textureName + "_active", 0]], false);
        this.addVariation("\ubc15", [[this.textureName + "_active", 0]], false);
        TileEntity.registerPrototype(this.id, Prototype);
        return this;
    }
    BlockAlfPortal.prototype.onUsedByWand = function (player, stack, region, pos) {
        region.getTileEntity(pos).onWanded();
    };
    BlockAlfPortal.prototype.getDrop = function () {
        return [[this.id, 1, 0]];
    };
    return BlockAlfPortal;
}(BlockMod));

