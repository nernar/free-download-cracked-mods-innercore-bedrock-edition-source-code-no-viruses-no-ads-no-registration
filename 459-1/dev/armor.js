IDRegistry.genItemID("wood_chestplate");
Item.createArmorItem("wood_chestplate", "Wooden Chestplate", {name: "woodchestplate"}, {type: "chestplate", armor: 3, durability: 85, texture: "armor/woodlayer_0.png"});
Recipes.addShaped({id: ItemID.wood_chestplate, count: 1, data: 0}, [
	"xyx",
	"xxx",
	"xxx"
], ['x', ItemID.bark, 0, 'y', 106, 0]);

IDRegistry.genItemID("wood_leggings");
Item.createArmorItem("wood_leggings", "Wooden Leggins", {name: "woodleggins"}, {type: "leggings", armor: 2, durability: 70, texture: "armor/woodlayer_1.png"});
Recipes.addShaped({id: ItemID.wood_leggins, count: 1, data: 0}, [
	"xxx",
	"xyx",
	"x x"
], ['x', ItemID.bark, 0, 'y', 106, 0]);


