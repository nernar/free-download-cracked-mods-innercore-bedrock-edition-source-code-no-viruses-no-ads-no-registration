let ItemSelfReturning = (function (_super) {
    __extends(ItemSelfReturning, _super);
    function ItemSelfReturning() {
        _super.apply(this, arguments);
        return this;
    }
    ItemSelfReturning.prototype.onWorkbenchIngredientCraft = function (api, slots, result, player) {
        for (let i in slots) {
            if (slots[i].id != this.id) {
                api.decreaseFieldSlot(i);
            }
        }
    };
    return ItemSelfReturning;
}(ItemMod));

