IDRegistry.genItemID("zaniteHelmet");
Item.createArmorItem("zaniteHelmet", "Zanite Helmet", {name: "zanite_helmet"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/Zanite_1.png"});

IDRegistry.genItemID("zaniteChestplate");
Item.createArmorItem("zaniteChestplate", "Zanite Chestplate", {name: "zanite_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/Zanite_1.png"});

IDRegistry.genItemID("zaniteLeggings");
Item.createArmorItem("zaniteLeggings", "Zanite Leggings", {name: "zanite_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/Zanite_2.png"});

IDRegistry.genItemID("zaniteBoots");
Item.createArmorItem("zaniteBoots", "Zanite Boots", {name: "zanite_boots"}, {type: "boots", armor: 2, durability: 176, texture: "armor/Zanite_1.png"});

Recipes.addShaped({id: ItemID.zaniteHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.zaniteGemstone, 0]);

Recipes.addShaped({id: ItemID.zaniteChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.zaniteGemstone, 0]);

Recipes.addShaped({id: ItemID.zaniteLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.zaniteGemstone, 0]);

Recipes.addShaped({id: ItemID.zaniteBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.zaniteGemstone, 0]);

