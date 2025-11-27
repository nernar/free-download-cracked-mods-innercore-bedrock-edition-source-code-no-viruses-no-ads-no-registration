let ItemSparkUpgrade = (function (_super) {
    __extends(ItemSparkUpgrade, ItemMod);
    function ItemSparkUpgrade(nameId, params, type) {
        _super.call(this, nameId, params);
        this.createGroup("botaniamisc.item_group." + this.icon.name);
        this.type = type;
        return this;
    }
    function getByType(type) {
        switch (type) {
          case SparkUpgradeType.DOMINANT:
            return new ItemStack(ModItems.sparkUpgradeDominant);
          case SparkUpgradeType.RECESSIVE:
            return new ItemStack(ModItems.sparkUpgradeRecessive);
          case SparkUpgradeType.DISPERSIVE:
            return new ItemStack(ModItems.sparkUpgradeDispersive);
          case SparkUpgradeType.ISOLATED:
            return new ItemStack(ModItems.sparkUpgradeIsolated);
          default:
            return ItemStack.EMPTY;
        }
    }
    ItemSparkUpgrade.getByType = getByType;
    return ItemSparkUpgrade;
}(ItemMod));

