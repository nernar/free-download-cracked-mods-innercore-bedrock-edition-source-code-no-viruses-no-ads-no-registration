var UpgradeAPI = {upgradeItems: {}, registerUpgradeItem: function (item, values) {
    this.upgradeItems[item] = values;
}, getUpgradeData: function (id) {
    return this.upgradeItems[id];
}};

