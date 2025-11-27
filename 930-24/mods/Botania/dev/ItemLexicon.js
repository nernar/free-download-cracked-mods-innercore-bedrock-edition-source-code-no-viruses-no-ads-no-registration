let ItemLexicon = (function (_super) {
    __extends(ItemLexicon, _super);
    __implements(ItemLexicon, IElvenItem);
    const TAG_ELVEN_UNLOCK = ItemLexicon.TAG_ELVEN_UNLOCK = "botania:elven_unlock";
    function ItemLexicon() {
        _super.apply(this, arguments);
        this.setMaxStack(1);
        return this;
    }
    ItemLexicon.prototype.isElvenItem = function (stack) {
        return ItemNBTHelper.getBoolean(stack, TAG_ELVEN_UNLOCK, false);
    };
    return ItemLexicon;
}(ItemMod));

