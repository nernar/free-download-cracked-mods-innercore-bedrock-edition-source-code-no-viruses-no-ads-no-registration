let BlockEnchantedSoil = (function (_super) {
    __extends(BlockEnchantedSoil, _super);
    function BlockEnchantedSoil() {
        _super.apply(this, arguments);
        this.addVariation(this.name, [["dirt", 0], [this.textureName + "_top", 0], [this.textureName + "_side", 0]], true);
        return this;
    }
    return BlockEnchantedSoil;
}(BlockMod));

