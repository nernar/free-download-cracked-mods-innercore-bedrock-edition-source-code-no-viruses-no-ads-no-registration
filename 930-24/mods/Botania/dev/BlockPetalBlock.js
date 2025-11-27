let BlockPetalBlock = (function (_super) {
    __extends(BlockPetalBlock, _super);
    function BlockPetalBlock() {
        _super.apply(this, arguments);
        paintTextureArr(this.textureName, true);
        for (let i = 0; i < 16; i++) {
            this.addVariation("block.botania." + DyeColor.byId(i).getTranslationKey() + "_" + this.textureName, [[this.textureName, i]], true);
        }
        return this;
    }
    return BlockPetalBlock;
}(BlockMod));

