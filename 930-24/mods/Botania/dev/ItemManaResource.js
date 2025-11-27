let ItemManaResource = (function (_super) {
    __extends(ItemManaResource, _super);
    function ItemManaResource() {
        _super.apply(this, arguments);
        return this;
    }
    ItemManaResource.prototype.onItemUse = function (pos, stack, state, player) {
        if (this == ModItems.terrasteel || this == ModItems.gaiaIngot) {
        } else {
            if (this == ModItems.livingroot) {
                Item.invokeItemUseOn(pos, new ItemStack(858), false, player);
            }
        }
    };
    return ItemManaResource;
}(ItemMod));

