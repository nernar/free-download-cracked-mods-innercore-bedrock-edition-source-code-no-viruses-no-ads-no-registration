Ace3.addFood("emerald_apple", "Emerald Apple", {name: "EmeraldApple"}, {food: 8});
Ace3.addItem("emerald_seeds", "Emerald Seeds", {name: "EmeraldSeeds"}, {});
Ace3.addItem("emerald_dust", "Emerald Dust", {name: "EmeraldDust"}, {});
Ace3.addPotion({ID: "emerald_potion", name: "Emerald Potion", stack: 64, isPotion: true, texture: {name: "EmeraldPotion", meta: 0}}, function (effects) {
    Ace3.addPlayerEffect(16, 0, 600);
    Ace3.addPlayerEffect(1, 1, 600);
    Ace3.addPlayerEffect(3, 0, 600);
    Ace3.addPlayerEffect(5, 0, 600);
    Ace3.addPlayerEffect(6, 0, 600);
    Ace3.addPlayerEffect(8, 1, 600);
    Ace3.addPlayerEffect(9, 1, 150);
    Ace3.addPlayerEffect(10, 0, 600);
    Ace3.addPlayerEffect(11, 0, 600);
    Ace3.addPlayerEffect(12, 0, 600);
    Ace3.addPlayerEffect(13, 0, 600);
    Ace3.addPlayerEffect(14, 0, 600);
});
Ace3.addSplashPotion({ID: "emerald_splash_potion", name: "Splash Emerald Potion", texture: {name: "EmeraldPotion2", meta: 0}}, function (effects) {
    Ace3.addPlayerEffect(16, 0, 600);
    Ace3.addPlayerEffect(1, 1, 600);
    Ace3.addPlayerEffect(3, 0, 600);
    Ace3.addPlayerEffect(5, 0, 600);
    Ace3.addPlayerEffect(6, 0, 600);
    Ace3.addPlayerEffect(8, 1, 600);
    Ace3.addPlayerEffect(9, 1, 150);
    Ace3.addPlayerEffect(10, 0, 600);
    Ace3.addPlayerEffect(11, 0, 600);
    Ace3.addPlayerEffect(12, 0, 600);
    Ace3.addPlayerEffect(13, 0, 600);
    Ace3.addPlayerEffect(14, 0, 600);
});
var ColorName = function (item, name) {
    return "\xa7b" + name;
};
Item.registerNameOverrideFunction(ItemID.emerald_potion, ColorName);
Item.registerNameOverrideFunction(ItemID.emerald_splash_potion, ColorName);
Callback.addCallback("FoodEaten", function (heal, satRatio) {
    var item = Player.getCarriedItem();
    if (item.id == ItemID.emerald_apple) {
        Ace3.addPlayerEffect(10, 2, 30);
    }
});

