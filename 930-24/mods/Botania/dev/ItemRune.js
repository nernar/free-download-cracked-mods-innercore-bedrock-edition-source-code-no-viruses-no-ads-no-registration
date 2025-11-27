let ItemRune = (function (_super) {
    __extends(ItemRune, _super);
    __implements(ItemRune, ICustomApothecaryColor);
    function ItemRune() {
        _super.apply(this, arguments);
        for (let i = 0; i < 16; i++) {
            this.addToCreative(i);
        }
        this.createGroup("botaniamisc.item_group." + this.icon.name);
        return this;
    }
    ItemRune.prototype.getParticleColor = function (stack) {
        return 11053224;
    };
    ItemRune.prototype.onIconOverride = function (item, _) {
        return {name: this.icon.name, meta: item.data};
    };
    ItemRune.prototype.onNameOverride = function (item) {
        return Translation.translate("item.botania." + DyeColor.byId(item.data).getTranslationKey() + "_" + this.icon.name);
    };
    return ItemRune;
}(ItemMod));

