IDRegistry.genItemID("LegHelmet");
Item.createArmorItem("LegHelmet", "Легендарный Шлем", {name: "leghelmet"}, {type: "helmet", armor: 5, durability: 500, texture: "armor/LegendA_0.png"});

IDRegistry.genItemID("LegChestPlate");
Item.createArmorItem("LegChestPlate", "Легендарный Нарудник", {name: "legchestplate"}, {type: "chestplate", armor: 8, durability: 555, texture: "armor/LegendA_0.png"});

IDRegistry.genItemID("LegLeggings");
Item.createArmorItem("LegLeggings", "Легендарные Поножи", {name: "legleggings"}, {type: "leggings", armor: 8, durability: 550, texture: "armor/LegendA_1.png"});

IDRegistry.genItemID("LegBoots");
Item.createArmorItem("LegBoots", "Легендарные Ботинки", {name: "legboots"}, {type: "boots", armor: 5, durability: 530, texture: "armor/LegendA_0.png"});

Recipes.addShaped({id: ItemID.LegHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.LegendElem, 0]);

Recipes.addShaped({id: ItemID.LegChestPlate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.LegendElem, 0]);

Recipes.addShaped({id: ItemID.LegLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.LegendElem, 0]);

Recipes.addShaped({id: ItemID.LegBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.LegendElem, 0]);