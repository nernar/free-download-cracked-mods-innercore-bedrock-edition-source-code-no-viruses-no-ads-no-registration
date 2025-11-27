//if(__config__.access("Armor Twilight Forest") == false){
IDRegistry.genItemID("steeleaf_helmet");
IDRegistry.genItemID("steeleaf_chestplate");
IDRegistry.genItemID("steeleaf_leggings");
IDRegistry.genItemID("steeleaf_boots");

Item.createArmorItem("steeleaf_helmet", " steeleaf Helmet", {name: "steeleaf_helmet"}, {type: "helmet", armor: 3, durability: 198, texture: "armor/steeleaf1_1.png"});
Item.createArmorItem("steeleaf_chestplate", " steeleaf Chestplate", {name: "steeleaf_chestplate"}, {type: "chestplate", armor: 4, durability: 298, texture: "armor/steeleaf1_1.png"});
Item.createArmorItem("steeleaf_leggings", " steeleaf Leggings", {name: "steeleaf_leggings"}, {type: "leggings", armor: 4, durability: 235, texture: "armor/steeleaf2_2.png"});
Item.createArmorItem("steeleaf_boots", " steeleaf Boots", {name: "steeleaf_boots"}, {type: "boots", armor: 3, durability: 198, texture: "armor/steeleaf1_1.png"});



Recipes.addShaped({id: ItemID.steeleaf_helmet, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.steeleaf_chestplate, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.steeleaf_leggings, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.steeleaf_boots, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.steeleaf, 0]);



IDRegistry.genItemID("phantom_helmet");
IDRegistry.genItemID("phantom_chestplate");

Item.createArmorItem("phantom_helmet", "Phantom Helmet", {name: "phantom_helmet"}, {type: "helmet", armor: 6, durability: 236, texture: "armor/phantom1_1.png"});
Item.createArmorItem("phantom_chestplate", "Phantom Chestplate", {name: "phantom_chestplate"}, {type: "chestplate", armor: 9, durability: 356, texture: "armor/phantom1_1.png"});

IDRegistry.genItemID("ironwood_helmet");
IDRegistry.genItemID("ironwood_chestplate");
IDRegistry.genItemID("ironwood_leggings");
IDRegistry.genItemID("ironwood_boots");

Item.createArmorItem("ironwood_helmet", "Ironwood Helmet", {name: "ironwood_helmet"}, {type: "helmet", armor: 3, durability: 198, texture: "armor/ironwood1_1.png"});
Item.createArmorItem("ironwood_chestplate", "Ironwood Chestplate", {name: "ironwood_chestplate"}, {type: "chestplate", armor: 4, durability: 298, texture: "armor/ironwood1_1.png"});
Item.createArmorItem("ironwood_leggings", "Ironwood Leggings", {name: "ironwood_leggings"}, {type: "leggings", armor: 4, durability: 235, texture: "armor/ironwood2_2.png"});
Item.createArmorItem("ironwood_boots", "Ironwood Boots", {name: "ironwood_boots"}, {type: "boots", armor: 3, durability: 198, texture: "armor/ironwood1_1.png"});



Recipes.addShaped({id: ItemID.ironwood_helmet, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.ironwood_chestplate, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.ironwood_leggings, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.ironwood_boots, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.ironwood, 0]);

IDRegistry.genItemID("arctic_helmet");
IDRegistry.genItemID("arctic_chestplate");
IDRegistry.genItemID("arctic_leggings");
IDRegistry.genItemID("arctic_boots");

Item.createArmorItem("arctic_helmet", "Arctic Helmet", {name: "arctic_helmet"}, {type: "helmet", armor: 3, durability: 198, texture: "armor/arcticarmor1_1.png"});
Item.createArmorItem("arctic_chestplate", "Arctic Chestplate", {name: "arctic_chestplate"}, {type: "chestplate", armor: 4, durability: 298, texture: "armor/arcticarmor1_1.png"});
Item.createArmorItem("arctic_leggings", "Arctic Leggings", {name: "arctic_leggings"}, {type: "leggings", armor: 4, durability: 235, texture: "armor/arcticarmor2_2.png"});
Item.createArmorItem("arctic_boots", "Arctic Boots", {name: "arctic_boots"}, {type: "boots", armor: 3, durability: 198, texture: "armor/arcticarmor1_1.png"});





IDRegistry.genItemID("fieryH");
IDRegistry.genItemID("fieryC");
IDRegistry.genItemID("fieryL");
IDRegistry.genItemID("fieryB");

Item.createArmorItem("fieryH", "Fiery Helmet \n Skill:§aTrue", {name: "FH1"}, {type: "helmet", armor: 4, durability: 356, texture: "armor/FA1_1.png"});
Item.createArmorItem("fieryC", "Fiery Chestplate \n Skill:§aTrue", {name: "FC2"}, {type: "chestplate", armor: 7, durability: 537, texture: "armor/FA1_1.png"});
Item.createArmorItem("fieryL", "Fiery Leggings \n Skill:§aTrue", {name: "FL3"}, {type: "leggings", armor: 4, durability: 432, texture: "armor/FA2_2.png"});
Item.createArmorItem("fieryB", "Fiery Boots \n Skill:§aTrue", {name: "FB4"}, {type: "boots", armor: 4, durability: 265, texture: "armor/FA1_1.png"});

Item.setGlint("fieryH", true);
Item.setGlint("fieryC", true);
Item.setGlint("fieryL", true);
Item.setGlint("fieryB", true);

Recipes.addShaped({id: ItemID.fieryH, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.fiery_ingot, 0]);

Recipes.addShaped({id: ItemID.fieryC, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.fiery_ingot, 0]);

Recipes.addShaped({id: ItemID.fieryL, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.fiery_ingot, 0]);

Recipes.addShaped({id: ItemID.fieryB, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.fiery_ingot, 0]);


IDRegistry.genItemID("nagaC");
IDRegistry.genItemID("nagaL");
Item.createArmorItem("nagaC", "Naga Chestplate \n Skill:§aTrue", {name: "nagaC"}, {type: "chestplate", armor: 7, durability: 537, texture: "armor/naga1_1.png"});
Item.createArmorItem("nagaL", "Naga Leggings \n Skill:§aTrue", {name: "nagaL"}, {type: "leggings", armor: 4, durability: 432, texture: "armor/naga2_2.png"});
Item.setGlint("nagaC", true);
Item.setGlint("nagaL", true);

Recipes.addShaped({id: ItemID.nagaC, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.naga_scale, 0]);

Recipes.addShaped({id: ItemID.nagaL, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.naga_scale, 0]);