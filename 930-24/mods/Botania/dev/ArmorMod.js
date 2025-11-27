let ArmorMod = (function (_super) {
    function ArmorMod(nameID, type, props) {
        _super.call(this, nameID, new ItemArmorParams(props).setType(type));
        this.setName("item.botania." + this.icon.name);
        this.createGroup("botaniamisc.item_group." + this.icon.name);
        return this;
    }
    return ArmorMod;
}(ItemArmor));

