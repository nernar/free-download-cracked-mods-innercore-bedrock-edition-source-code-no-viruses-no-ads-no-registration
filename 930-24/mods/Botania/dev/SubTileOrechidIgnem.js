let SubTileOrechidIgnem = (function (_super) {
    __extends(SubTileOrechidIgnem, _super);
    const COST = 20000;
    function SubTileOrechidIgnem() {
        let _this = _super !== null && _super.apply(this, arguments) || this;
        return _this;
    }
    SubTileOrechidIgnem.prototype.getColor = function () {
        return 11415600;
    };
    SubTileOrechidIgnem.prototype.canOperate = function () {
        return this.dimension == EDimension.NETHER;
    };
    SubTileOrechidIgnem.prototype.getCatalyst = function () {
        return VanillaBlockID.netherrack;
    };
    SubTileOrechidIgnem.prototype.getOreToPut = function () {
        return getRandomOre("nether");
    };
    SubTileOrechidIgnem.prototype.getCost = function () {
        return COST;
    };
    return SubTileOrechidIgnem;
}(SubTileOrechid));

