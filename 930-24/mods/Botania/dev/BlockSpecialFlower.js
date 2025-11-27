let BlockSpecialFlower = (function (_super) {
    __extends(BlockSpecialFlower, _super);
    function BlockSpecialFlower(nameId, Prototype) {
        _super.call(this, nameId);
        this.addVariation("block.botania." + this.textureName, [[this.textureName, 0]], true);
        this.PLACEABLE_TILES.push(BlockID.enchantedSoil);
        TileEntity.registerPrototype(this.id, Prototype);
        return this;
    }
    __implements(BlockSpecialFlower, IWandable);
    BlockSpecialFlower.prototype.onUsedByWand = function (player, stack, region, pos) {
        return region.getTileEntity(pos).onWanded(player, stack);
    };
    BlockSpecialFlower.prototype.getOffset = function (coords) {
        return new Vec3d(JSON.parse(BlockHelper.getModifyOffset(coords.x, coords.z)));
    };
    return BlockSpecialFlower;
}(BushBlock));

