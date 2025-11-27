let BlockColoredFlower = (function (_super) {
    __extends(BlockColoredFlower, _super);
    function BlockColoredFlower(nameId, isTop) {
        let isDouble = typeof isTop == "boolean";
        let extraName = isDouble ? isTop ? "Top" : "Bottom" : "";
        _super.call(this, nameId + extraName);
        for (let i = 0; i < 16; i++) {
            this.addVariation("block.botania." + DyeColor.byId(i).getTranslationKey() + "_" + this.textureName, [[this.textureName, i]], !isDouble || isTop);
        }
        this.createGroup("botaniamisc.item_group." + this.textureName);
        return this;
    }
    return BlockColoredFlower;
}(BlockFlower));

