IDRegistry.genItemID("gravititeHelmet");
Item.createArmorItem("gravititeHelmet", "Gravitite Helmet", {name: "gravitite_helmet"}, {type: "helmet", armor: 5, durability: 1001, texture: "armor/Gravitite_1.png"});

IDRegistry.genItemID("gravititeChestplate");
Item.createArmorItem("gravititeChestplate", "Gravitite Chestplate", {name: "gravitite_chestplate"}, {type: "chestplate", armor: 7, durability: 1562, texture: "armor/Gravitite_1.png"});

IDRegistry.genItemID("gravititeLeggings");
Item.createArmorItem("gravititeLeggings", "Gravitite Leggings", {name: "gravitite_leggings"}, {type: "leggings", armor: 6, durability: 1520, texture: "armor/Gravitite_2.png"});

IDRegistry.genItemID("gravititeBoots");
Item.createArmorItem("gravititeBoots", "Gravitite Boots", {name: "gravitite_boots"}, {type: "boots", armor: 4, durability: 1342, texture: "armor/Gravitite_1.png"});

Recipes.addShaped({id: ItemID.gravititeHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.plateGravitite, 0]);

Recipes.addShaped({id: ItemID.gravititeChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.plateGravitite, 0]);

Recipes.addShaped({id: ItemID.gravititeLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.plateGravitite, 0]);

Recipes.addShaped({id: ItemID.gravititeBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.plateGravitite, 0]);