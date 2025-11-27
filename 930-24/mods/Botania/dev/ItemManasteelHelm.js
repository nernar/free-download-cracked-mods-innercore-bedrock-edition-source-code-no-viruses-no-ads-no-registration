let ItemManasteelHelm = (function (_super) {
    __extends(ItemManasteelHelm, ItemManasteelArmor);
    __implements(ItemManasteelHelm, IManaDiscountArmor);
    function ItemManasteelHelm(nameID, props) {
        _super.call(this, nameID, EArmorType.HELMET, props);
        return this;
    }
    ItemManasteelHelm.prototype.getDiscount = function (stack, slot, player, tool) {
        return this.hasArmorSet(player) ? 0.1 : 0;
    };
    return ItemManasteelHelm;
}(ItemManasteelArmor));

