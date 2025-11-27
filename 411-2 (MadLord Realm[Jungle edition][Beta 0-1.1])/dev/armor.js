IDRegistry.genItemID("DjHelmet");
IDRegistry.genItemID("DjChestplate");
IDRegistry.genItemID("DjLeggings");
IDRegistry.genItemID("DjBoots");

Item.createArmorItem("DjHelmet", "Шлем Джунглия", {name: "Djhelmet"}, {type: "helmet", armor: 2, durability: 30, texture: "armor/Djarmor_1.png"});
Item.createArmorItem("DjChestplate", "Нагрудник Джунглия", {name: "Djchestplate"}, {type: "chestplate", armor: 2, durability: 50, texture: "armor/Djarmor_1.png"});
Item.createArmorItem("DjLeggings", "Штаны Джунглия", {name: "Djleggings"}, {type: "leggings", armor: 2, durability: 40, texture: "armor/Djarmor_2.png"});
Item.createArmorItem("DjBoots", "Ботинки Джунглия", {name: "Djboots"}, {type: "boots", armor: 2, durability: 45, texture: "armor/Djarmor_1.png"});

Recipes.addShaped({id: ItemID.DjHelmet, count: 1, data: 0}, [
    "xax",
    "x x"
], ['a', ItemID.djunglestring, 0, 'x', 334, 0]);

Recipes.addShaped({id: ItemID.DjChestplate, count: 1, data: 0}, [
    "a a",
    "xxx",
    "xxx"
], ['a', ItemID.djunglestring, 0, 'x', 334, 0]);

Recipes.addShaped({id: ItemID.DjLeggings, count: 1, data: 0}, [
    "xxx",
    "a a",
    "x x"
], ['a', ItemID.djunglestring, 0, 'x', 334, 0]);

Recipes.addShaped({id: ItemID.DjBoots, count: 1, data: 0}, [
    "a a",
    "x x"
], ['a', ItemID.djunglestring, 0, 'x', 334, 0]);



IDRegistry.genItemID("MentalHelmet");
IDRegistry.genItemID("MentalChestplate");
IDRegistry.genItemID("MentalLeggings");
IDRegistry.genItemID("MentalBoots");

Item.createArmorItem("MentalHelmet", "Ментал Шлем", {name: "mental_helmet"}, {type: "helmet", armor: 5, durability: 300, texture: "armor/mentalarmor_1.png"});
Item.createArmorItem("MentalChestplate", "Ментал Нагрудник", {name: "mental_chestplate"}, {type: "chestplate", armor: 5, durability: 500, texture: "armor/mentalarmor_1.png"});
Item.createArmorItem("MentalLeggings", "Ментал Штаны", {name: "mental_leggings"}, {type: "leggings", armor: 5, durability: 400, texture: "armor/mentalarmor_2.png"});
Item.createArmorItem("MentalBoots", "Ментал Ботинки", {name: "mental_boots"}, {type: "boots", armor: 5, durability: 450, texture: "armor/mentalarmor_1.png"});

Recipes.addShaped({id: ItemID.MentalHelmet, count: 1, data: 0}, [
    "aaa",
    "a a"
], ['a', ItemID.mental_ingot, 0]);

Recipes.addShaped({id: ItemID.MentalChestplate, count: 1, data: 0}, [
    "a a",
    "aaa",
    "aaa"
], ['a', ItemID.mental_ingot, 0]);

Recipes.addShaped({id: ItemID.MentalLeggings, count: 1, data: 0}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.mental_ingot, 0]);

Recipes.addShaped({id: ItemID.MentalBoots, count: 1, data: 0}, [
    "a a",
    "a a"
], ['a', ItemID.mental_ingot, 0]);



IDRegistry.genItemID("CrystasHelmet");
IDRegistry.genItemID("CrystasChestplate");
IDRegistry.genItemID("CrystasLeggings");
IDRegistry.genItemID("CrystasBoots");

Item.createArmorItem("CrystasHelmet", "Кристас Шлем", {name: "Crystas_helmet"}, {type: "helmet", armor: 7, durability: 500, texture: "armor/Crystas_1.png"});
Item.createArmorItem("CrystasChestplate", "Кристас Нагрудник", {name: "Crystas_chestplate"}, {type: "chestplate", armor: 7, durability: 700, texture: "armor/Crystas_1.png"});
Item.createArmorItem("CrystasLeggings", "Кристас Штаны", {name: "Crystas_leggings"}, {type: "leggings", armor: 7, durability: 600, texture: "armor/Crystas_2.png"});
Item.createArmorItem("CrystasBoots", "Кристас Ботинки", {name: "Crystas_boots"}, {type: "boots", armor: 7, durability: 650, texture: "armor/Crystas_1.png"});

Recipes.addShaped({id: ItemID.CrystasHelmet, count: 1, data: 0}, [
    "aaa",
    "a a"
], ['a', ItemID.Crystas_ingot, 0]);

Recipes.addShaped({id: ItemID.CrystasChestplate, count: 1, data: 0}, [
    "a a",
    "aaa",
    "aaa"
], ['a', ItemID.Crystas_ingot, 0]);

Recipes.addShaped({id: ItemID.CrystasLeggings, count: 1, data: 0}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.Crystas_ingot, 0]);

Recipes.addShaped({id: ItemID.CrystasBoots, count: 1, data: 0}, [
    "a a",
    "a a"
], ['a', ItemID.Crystas_ingot, 0]);