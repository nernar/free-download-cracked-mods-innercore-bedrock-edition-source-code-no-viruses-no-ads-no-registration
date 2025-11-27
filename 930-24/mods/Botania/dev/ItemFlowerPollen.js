let ItemFlowerPollen = (function (_super) {
    __extends(ItemFlowerPollen, _super);
    function ItemFlowerPollen() {
        _super.apply(this, arguments);
        for (let i = 0; i < 16; i++) {
            this.addToCreative(i);
        }
        this.createGroup("botaniamisc.item_group." + this.icon.name);
        paintTextureArr(this.icon.name, false);
        return this;
    }
    ItemFlowerPollen.prototype.onIconOverride = function (item, _) {
        return {name: this.icon.name, meta: item.data};
    };
    ItemFlowerPollen.prototype.onNameOverride = function (item) {
        return Translation.translate("item.botania." + DyeColor.byId(item.data).getTranslationKey() + "_" + this.icon.name);
    };
    return ItemFlowerPollen;
}(ItemMod));

