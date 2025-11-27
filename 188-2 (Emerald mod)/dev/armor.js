IDRegistry.genItemID("emerald_helmet");
IDRegistry.genItemID("emerald_chestplate");
IDRegistry.genItemID("emerald_leggings");
IDRegistry.genItemID("emerald_boots");
Item.createArmorItem("emerald_helmet", "Emerald Helmet", {name: "EmeraldHelmet", meta: 0}, {isTech: false, armor: 3, type: "helmet", texture: "armor/emerald_1.png", durability: 550});
Item.createArmorItem("emerald_chestplate", "Emerald Chestplate", {name: "EmeraldChestplate", meta: 0}, {isTech: false, armor: 8, type: "chestplate", texture: "armor/emerald_1.png", durability: 800});
Item.createArmorItem("emerald_leggings", "Emerald Leggings", {name: "EmeraldLeggings", meta: 0}, {isTech: false, armor: 6, type: "leggings", texture: "armor/emerald_2.png", durability: 750});
Item.createArmorItem("emerald_boots", "Emerald Boots", {name: "EmeraldBoots", meta: 0}, {isTech: false, armor: 3, type: "boots", texture: "armor/emerald_1.png", durability: 650});
Ace3.addArmorSetFuncs({head: ItemID.emerald_helmet, chest: ItemID.emerald_chestplate, legs: ItemID.emerald_leggings, feet: ItemID.emerald_boots}, function () {
    Ace3.addPlayerEffect(1, 0, 2);
    Ace3.addPlayerEffect(8, 1, 2);
    Ace3.addPlayerEffect(11, 0, 2);
});

