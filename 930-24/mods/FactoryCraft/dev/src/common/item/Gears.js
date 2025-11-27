Translation.addTranslation("Wooden Gear", {
	ru: "Деревянная шестерня"
});
Translation.addTranslation("Stone Gear", {
	ru: "Каменная шестерня"
});
Translation.addTranslation("Iron Gear", {
	ru: "Железная шестерня"
});
Translation.addTranslation("Golden Gear", {
	ru: "Золотая шестерня"
});
Translation.addTranslation("Diamond Gear", {
	ru: "Алмазная шестерня"
});

IDRegistry.genItemID("gearWooden");
IDRegistry.genItemID("gearStone");
IDRegistry.genItemID("gearIron");
IDRegistry.genItemID("gearGolden");
IDRegistry.genItemID("gearDiamond");

Item.createItem("gearWooden", "Wooden Gear", { name: "gear_wood", meta: 0 });
Item.createItem("gearStone", "Stone Gear", { name: "gear_stone", meta: 0 });
Item.createItem("gearIron", "Iron Gear", { name: "gear_iron", meta: 0 });
Item.createItem("gearGolden", "Golden Gear", { name: "gear_gold", meta: 0 });
Item.createItem("gearDiamond", "Diamond Gear", { name: "gear_diamond", meta: 0 });

Recipes.addShaped({ id: ItemID.gearWooden, count: 1, data: 0 }, [
	"#a#",
	"a#a",
	"#a#"
],[
	'a', 280, 0
]);
Recipes.addShaped({ id: ItemID.gearStone, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 1, -1,
	'b', ItemID.gearWooden, 0
]);
Recipes.addShaped({ id: ItemID.gearIron, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 265, -1,
	'b', ItemID.gearStone, 0
]);
Recipes.addShaped({ id: ItemID.gearGolden, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 266, -1,
	'b', ItemID.gearIron, 0
]);
Recipes.addShaped({ id: ItemID.gearDiamond, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'a', 264, -1,
	'b', ItemID.gearGolden, 0
]);