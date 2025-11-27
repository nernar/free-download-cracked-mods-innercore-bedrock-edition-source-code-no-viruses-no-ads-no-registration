
IDRegistry.genItemID("st1");
IDRegistry.genItemID("st2");
IDRegistry.genItemID("st3");
IDRegistry.genItemID("st4");

Item.createArmorItem("st1", " steeleaf Helmet", {name: "sh1"}, {type: "helmet", armor: 3, durability: 1100, texture: "armor/sk1_1.png"});
Item.createArmorItem("st2", " steeleaf Chestplate", {name: "sh2"}, {type: "chestplate", armor: 4, durability: 1100, texture: "armor/sk1_1.png"});
Item.createArmorItem("st3", " steeleaf Leggings", {name: "sh3"}, {type: "leggings", armor: 4, durability: 1100, texture: "armor/sk2_2.png"});
Item.createArmorItem("st4", " steeleaf Boots", {name: "sh4"}, {type: "boots", armor: 3, durability: 1100, texture: "armor/sk1_1.png"});



Recipes.addShaped({id: ItemID.st1, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.st2, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.st3, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.steeleaf, 0]);

Recipes.addShaped({id: ItemID.st4, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.steeleaf, 0]);



IDRegistry.genItemID("lol");
IDRegistry.genItemID("loz");

Item.createArmorItem("lol", " fantom Helmet", {name: "fantom1"}, {type: "helmet", armor: 6, durability: 1100, texture: "armor/fan1_1.png"});
Item.createArmorItem("loz", " fantom Chestplate", {name: "fantom2"}, {type: "chestplate", armor: 9, durability: 1100, texture: "armor/fan1_1.png"});

IDRegistry.genItemID("armor1");
IDRegistry.genItemID("armor2");
IDRegistry.genItemID("armor3");
IDRegistry.genItemID("armor4");

Item.createArmorItem("armor1", " ironwood Helmet", {name: "cr1"}, {type: "helmet", armor: 3, durability: 1100, texture: "armor/cr1_1.png"});
Item.createArmorItem("armor2", " ironwood Chestplate", {name: "cr2"}, {type: "chestplate", armor: 4, durability: 1100, texture: "armor/cr1_1.png"});
Item.createArmorItem("armor3", " ironwood Leggings", {name: "cr3"}, {type: "leggings", armor: 4, durability: 1100, texture: "armor/cr2_2.png"});
Item.createArmorItem("armor4", " ironwood Boots", {name: "cr4"}, {type: "boots", armor: 3, durability: 1100, texture: "armor/cr1_1.png"});



Recipes.addShaped({id: ItemID.armor1, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.armor2, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.armor3, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.ironwood, 0]);

Recipes.addShaped({id: ItemID.armor4, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.ironwood, 0]);
//fiery
IDRegistry.genItemID("fieryH");
IDRegistry.genItemID("fieryC");
IDRegistry.genItemID("fieryL");
IDRegistry.genItemID("fieryB");

Item.createArmorItem("fieryH", "Fiery Helmet \n Skill:§aTrue", {name: "FH1"}, {type: "helmet", armor: 6, durability: 1100, texture: "armor/FA1_1.png"});
Item.createArmorItem("fieryC", "Fiery Chestplate \n Skill:§aTrue", {name: "FC2"}, {type: "chestplate", armor: 7, durability: 1100, texture: "armor/FA1_1.png"});
Item.createArmorItem("fieryL", "Fiery Leggings \n Skill:§aTrue", {name: "FL3"}, {type: "leggings", armor: 7, durability: 1100, texture: "armor/FA2_2.png"});
Item.createArmorItem("fieryB", "Fiery Boots \n Skill:§aTrue", {name: "FB4"}, {type: "boots", armor: 6, durability: 1100, texture: "armor/FA1_1.png"});

Item.setGlint("fieryH", true);
Item.setGlint("fieryC", true);
Item.setGlint("fieryL", true);
Item.setGlint("fieryB", true);

Recipes.addShaped({id: ItemID.fieryH, count: 1, data: 0}, [
	"xxx",
	"xox",
	"ooo"
], ['x', ItemID.fint, 0]);

Recipes.addShaped({id: ItemID.fieryC, count: 1, data: 0}, [
	"xox",
	"xxx",
	"xxx"
], ['x', ItemID.fint, 0]);

Recipes.addShaped({id: ItemID.fieryL, count: 1, data: 0}, [
	"xxx",
	"xox",
	"xox"
], ['x', ItemID.fint, 0]);

Recipes.addShaped({id: ItemID.fieryB, count: 1, data: 0}, [
	"ooo",
	"xox",
	"xox"
], ['x', ItemID.fint, 0]);
//var armor all
