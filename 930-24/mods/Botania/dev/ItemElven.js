let ItemElven = (function (_super) {
    __extends(ItemElven, _super);
    __implements(ItemElven, IElvenItem);
    function ItemElven() {
        _super.apply(this, arguments);
        return this;
    }
    ItemElven.prototype.isElvenItem = function (stack) {
        return true;
    };
    return ItemElven;
}(ItemMod));

