Translation.addTranslation("Cooling Vent", {
	ru: "Теплоотвод"
});
Translation.addTranslation("Advanced Cooling Vent", {
	ru: "Улучшенный теплоотвод"
});

IDRegistry.genItemID("ventCooling");
IDRegistry.genItemID("ventCoolingAdvanced");

Item.createItem("ventCooling", "Cooling Vent", { name: "cooling_vent", meta: 0 });
Item.createItem("ventCoolingAdvanced", "Advanced Cooling Vent", { name: "cooling_vent", meta: 1 });

Recipes.addShaped({ id: ItemID.ventCooling, count: 1, data: 0 }, [
	"cbc",
	"bab",
	"cbc"
],[
	'a', 351, 4,
	'b', 265, 0,
	'c', 101, 0
]);
Recipes.addShaped({ id: ItemID.ventCoolingAdvanced, count: 1, data: 0 }, [
	"aba",
	"aca",
	"aba"
],[
	'b', ItemID.ventCooling, 0,
	'c', 264, 0,
	'a', 101, 0
]);