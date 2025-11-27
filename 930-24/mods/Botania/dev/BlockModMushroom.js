let BlockModMushroom = (function (_super) {
    __extends(BlockModMushroom, _super);
    function BlockModMushroom() {
        let _this = _super.apply(this, arguments) || this;
        _this.PLACEABLE_TILES = _this.PLACEABLE_TILES.concat([1, 4, 12, 13, 14, 15, 16, 21, 24, 56, 73, 129, 110, 243]);
        return _this;
    }
    return BlockModMushroom;
}(BlockColoredFlower));

