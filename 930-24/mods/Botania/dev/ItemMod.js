let ItemMod = (function (_super) {
    __extends(ItemMod, _super);
    function ItemMod() {
        _super.apply(this, arguments);
        this.setName("item.botania." + this.icon.name);
        return this;
    }
    return ItemMod;
}(ItemBase));

