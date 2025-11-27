Translation.addTranslation("Quartz Crystal", {
	ru: "Кварцевый кристалл"
});
Translation.addTranslation("Quantium Crystal", {
	ru: "Кубитовый кристалл"
});
Translation.addTranslation("Fluix Crystal", {
	ru: "Изменчивый кристалл"
});

IDRegistry.genItemID("crystalQuartz");
IDRegistry.genItemID("crystalQuantium");
IDRegistry.genItemID("crystalFluix");

Item.createItem("crystalQuartz", "Quartz Crystal", { name: "crystal_quartz", meta: 0 });
Item.createItem("crystalQuantium", "Quantium Crystal", { name: "crystal_quantium", meta: 0 });
Item.createItem("crystalFluix", "Fluix Crystal", { name: "crystal_fluix", meta: 0 });

Recipes.addShaped({ id: ItemID.crystalQuartz, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'b', 331, 0,
	'a', 406, 0
]);
Recipes.addShaped({ id: ItemID.crystalQuantium, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'b', ItemID.crystalQuartz, 0,
	'a', 351, 4
]);
Recipes.addShaped({ id: ItemID.crystalFluix, count: 1, data: 0 }, [
	"#a#",
	"aba",
	"#a#"
],[
	'b', ItemID.crystalQuantium, 0,
	'a', 331,0
]);