Ace3.addPotion({ID: "beer", name: "Beer", texture: {name: "Beer", meta: 0}, stack: 64}, function (effects) {
    Ace3.addPlayerEffect(9, 1, 15);
});
Ace3.addPotion({ID: "speedy_energy_drink", name: "Speedy Energy Drink", texture: {name: "SpeedyEnergyDrink", meta: 0}, stack: 64}, function (effects) {
    Ace3.addPlayerEffect(1, 0, 25);
    Ace3.addPlayerEffect(3, 2, 25);
    Player.addItemToInventory(ItemID.empty_can, 1, 0);
});
Ace3.addPotion({ID: "stealthy_energy_drink", name: "Stealthy Energy Drink", texture: {name: "StealthyEnergyDrink", meta: 0}, stack: 64}, function (effects) {
    Ace3.addPlayerEffect(16, 0, 120);
    Ace3.addPlayerEffect(1, 0, 120);
    Ace3.addPlayerEffect(14, 0, 120);
    Player.addItemToInventory(ItemID.empty_can, 1, 0);
});
Ace3.addPotion({ID: "healthy_energy_drink", name: "Healthy Energy Drink", texture: {name: "HealthyEnergyDrink", meta: 0}, stack: 64}, function (effects) {
    Ace3.addPlayerEffect(10, 0, 30);
    Player.addItemToInventory(ItemID.empty_can, 1, 0);
});
Ace3.addPotion({ID: "strong_energy_drink", name: "Strong Energy Drink", texture: {name: "StrongEnergyDrink", meta: 0}, stack: 64}, function (effects) {
    Ace3.addPlayerEffect(5, 1, 120);
    Ace3.addPlayerEffect(12, 1, 120);
    Player.addItemToInventory(ItemID.empty_can, 1, 0);
});
Ace3.addPotion({ID: "deadly_energy_drink", name: "Deadly Energy Drink", texture: {name: "DeadlyEnergyDrink", meta: 0}, stack: 64}, function (effects) {
    Ace3.addPlayerEffect(9, 0, 60);
    Player.addItemToInventory(ItemID.empty_can, 1, 0);
});
Ace3.addPotion({ID: "super_energy_drink", name: "Super Energy Drink", texture: {name: "SuperEnergyDrink", meta: 0}, stack: 64}, function (effects) {
    Ace3.addPlayerEffect(8, 0, 180);
    Ace3.addPlayerEffect(1, 0, 180);
    Ace3.addPlayerEffect(3, 0, 180);
    Ace3.addPlayerEffect(13, 1, 180);
    Ace3.addPlayerEffect(10, 1, 180);
    Ace3.addPlayerEffect(16, 2, 180);
    Ace3.addPlayerEffect(14, 2, 180);
    Ace3.addPlayerEffect(5, 2, 180);
    Player.addItemToInventory(ItemID.empty_can, 1, 0);
});
var ColorName = function (item, name) {
    return "\xa7b" + name;
};
Item.registerNameOverrideFunction(ItemID.beer, ColorName);
Item.registerNameOverrideFunction(ItemID.super_energy_drink, ColorName);
Item.registerNameOverrideFunction(ItemID.strong_energy_drink, ColorName);
Item.registerNameOverrideFunction(ItemID.stealthy_energy_drink, ColorName);
Item.registerNameOverrideFunction(ItemID.healthy_energy_drink, ColorName);
Item.registerNameOverrideFunction(ItemID.deadly_energy_drink, ColorName);
Item.registerNameOverrideFunction(ItemID.speedy_energy_drink, ColorName);

