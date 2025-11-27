IDRegistry.genItemID("flamed_jazzium_helmet");
IDRegistry.genItemID("flamed_jazzium_chestplate");
IDRegistry.genItemID("flamed_jazzium_leggings");
IDRegistry.genItemID("flamed_jazzium_boots");

Item.createArmorItem("flamed_jazzium_helmet", "Flamed Jazzium Helmet", {name: "flamed_jazzium_helmet"}, {type: "helmet", armor: 4, durability: 2120, texture: "armor/flamed_jazzium_layer_1.png"});
Item.createArmorItem("flamed_jazzium_chestplate", "Flamed Jazzium Chestplate", {name: "flamed_jazzium_chestplate"}, {type: "chestplate", armor: 9, durability: 2120, texture: "armor/flamed_jazzium_layer_1.png"});
Item.createArmorItem("flamed_jazzium_leggings", "Flamed Jazzium Leggings", {name: "flamed_jazzium_leggings"}, {type: "leggings", armor: 7, durability: 2120, texture: "armor/flamed_jazzium_layer_2.png"});
Item.createArmorItem("flamed_jazzium_boots", "Flamed Jazzium Boots", {name: "flamed_jazzium_boots"}, {type: "boots", armor: 4, durability: 2120, texture: "armor/flamed_jazzium_layer_1.png"});

Recipes.addShaped({id: ItemID.flamed_jazzium_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.flamed_jazzium_ingot, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_chestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.flamed_jazzium_ingot, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_leggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.flamed_jazzium_ingot, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.flamed_jazzium_ingot, 0]);