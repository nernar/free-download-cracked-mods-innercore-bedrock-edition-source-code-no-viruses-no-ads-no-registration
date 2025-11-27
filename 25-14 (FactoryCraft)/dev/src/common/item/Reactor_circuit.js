Translation.addTranslation("Circuit Cooling", {
	ru: "Охлаждающий контур"
});
Translation.addTranslation("Circuit Heating", {
	ru: "Нагревательный контур"
});

IDRegistry.genItemID("circuitCooling");
IDRegistry.genItemID("circuitHeating");

Item.createItem("circuitCooling", "Circuit Cooling", { name: "circuit_cooling", meta: 0 });
Item.createItem("circuitHeating", "Circuit Heating", { name: "circuit_heating", meta: 0 });

Recipes.addShaped({ id: ItemID.circuitCooling, count: 1, data: 0 }, [
	"bbb",
	"aba"
],[
	'a', 351, 4,
	'b', 265, 0
]);
Recipes.addShaped({ id: ItemID.circuitHeating, count: 1, data: 0 }, [
	"bab",
	"aba",
	"bab"
],[
	'a', 351, 4,
	'b', 265, 0
]);