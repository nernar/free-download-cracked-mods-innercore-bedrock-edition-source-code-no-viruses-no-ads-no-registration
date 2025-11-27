Translation.addTranslation("Battery", {
	ru: "Батарея"
});
Translation.addTranslation("Pipe Sealant", {
	ru: "Уплотнитель для труб"
});
Translation.addTranslation("Uranium", {
	ru: "Уран"
});

IDRegistry.genItemID("factoryBattery");
IDRegistry.genItemID("uranium");
IDRegistry.genItemID("pipeSealant");

Item.createItem("factoryBattery", "Battery", { name: "battery" });
Item.createItem("uranium", "Uranium", {name: "uranium"});
Item.createItem("pipeSealant", "Pipe Sealant", {name: "pipe_sealant"});

Recipes.addShaped({ id: ItemID.factoryBattery, count: 1, data: 0 }, [
	" b ",
	" a "
],[
	'a', 265, 0,
	'b', 331, 0
]);
Recipes.addShapeless({id: ItemID.pipeSealant, count: 1, data: 0}, [{id: 351, data: 2}]);
Recipes.addShapeless({id: ItemID.pipeSealant, count: 1, data: 0}, [{id: 341, data: 0}]);

FactAPI.Reactor.registerRadFuel(ItemID.uranium,0,2000);