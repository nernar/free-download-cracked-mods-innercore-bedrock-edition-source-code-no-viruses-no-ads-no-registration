let ItemPetal = (function (_super) {
    __extends(ItemPetal, _super);
    __implements(ItemPetal, ICustomApothecaryColor);
    function ItemPetal(nameID, block, params) {
        _super.call(this, nameID, block, params);
        this.setName("item.botania." + this.icon.name);
        for (let i = 0; i < 16; i++) {
            this.addToCreative(i);
        }
        this.createGroup("botaniamisc.item_group." + this.icon.name);
        paintTextureArr(this.icon.name, false);
        return this;
    }
    ItemPetal.prototype.getParticleColor = function (stack) {
        let color = DyeColor.byId(item.data).getColorComponentValues();
        return MathHelper.RGBToHash(color[0] * 255, color[1] * 255, color[2] * 255);
    };
    ItemPetal.prototype.onIconOverride = function (item, _) {
        return {name: this.icon.name, meta: item.data};
    };
    ItemPetal.prototype.onNameOverride = function (item) {
        return Translation.translate("item.botania." + DyeColor.byId(item.data).getTranslationKey() + "_" + this.icon.name);
    };
    return ItemPetal;
}(BlockItem));

