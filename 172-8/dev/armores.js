IDRegistry.genItemID("PlanksHelmet");
Item.createArmorItem("PlanksHelmet", "Деревянный Шлем", {name: "plankshelmet"}, {type: "helmet", armor: 1, durability: 55, texture: "armor/planks_0.png"});

IDRegistry.genItemID("PlanksChestPlate");
Item.createArmorItem("PlanksChestPlate", "Деревянный Нагрудник", {name: "plankschestplate"}, {type: "chestplate", armor: 2, durability: 60, texture: "armor/planks_0.png"});

IDRegistry.genItemID("PlanksLeggings");
Item.createArmorItem("PlanksLeggings", "Деревянные Поножи", {name: "planksleggings"}, {type: "leggings", armor: 2, durability: 55, texture: "armor/planks_1.png"});

IDRegistry.genItemID("PlanksBoots");
Item.createArmorItem("PlanksBoots", "Деревянные Ботинки", {name: "planksboots"}, {type: "boots", armor: 1, durability: 53, texture: "armor/planks_0.png"});

Recipes.addShaped({id: ItemID.PlanksHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', 17, 0]);

Recipes.addShaped({id: ItemID.PlanksChestPlate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', 17, 0]);

Recipes.addShaped({id: ItemID.PlanksLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', 17, 0]);

Recipes.addShaped({id: ItemID.PlanksBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', 17, 0]);