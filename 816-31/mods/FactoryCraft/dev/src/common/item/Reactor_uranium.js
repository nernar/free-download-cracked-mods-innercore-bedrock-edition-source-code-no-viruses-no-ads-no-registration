Translation.addTranslation("Fuel Rod (Uranium)", {
	ru: "Топливный стержень (Уран)"
});
Translation.addTranslation("Dual Fuel Rod (Uranium)", {
	ru: "Двойной топливный стержень (Уран)"
});
Translation.addTranslation("Quard Fuel Rod (Uranium)", {
	ru: "Счетверенный топливный стержень (Уран)"
});

Translation.addTranslation("Fuel Rod (Depleted Uranium)", {
	ru: "Топливный стержень (Обеднённый уран)"
});
Translation.addTranslation("Dual Fuel Rod (Depleted Uranium)", {
	ru: "Двойной топливный стержень (Обеднённый уран)"
});
Translation.addTranslation("Quard Fuel Rod (Depleted Uranium)", {
	ru: "Счетверенный топливный стержень (Обеднённый уран)"
});

IDRegistry.genItemID("rodUranium");
IDRegistry.genItemID("rodUraniumDual");
IDRegistry.genItemID("rodUraniumQuard");

IDRegistry.genItemID("rodUraniumDepleted");
IDRegistry.genItemID("rodUraniumDepletedDual");
IDRegistry.genItemID("rodUraniumDepletedQuard");

Item.createItem("rodUranium", "Fuel Rod (Uranium)", { name: "rod_uranium", meta: 0 });
Item.createItem("rodUraniumDual", "Dual Fuel Rod (Uranium)", { name: "rod_uranium", meta: 1 });
Item.createItem("rodUraniumQuard", "Quard Fuel Rod (Uranium)", { name: "rod_uranium", meta: 2 });

Item.createItem("rodUraniumDepleted", "Fuel Rod (Depleted Uranium)", { name: "rod_uranium_depleted", meta: 0 });
Item.createItem("rodUraniumDepletedDual", "Dual Fuel Rod (Depleted Uranium)", { name: "rod_uranium_depleted", meta: 1 });
Item.createItem("rodUraniumDepletedQuard", "Quard Fuel Rod (Depleted Uranium)", { name: "rod_uranium_depleted", meta: 2 });

Recipes.addShaped({ id: ItemID.rodUranium, count: 1, data: 0 }, [
	"bab"
],[
	'a', ItemID.uranium, 0,
	'b', 265, 0
]);
Recipes.addShaped({ id: ItemID.rodUraniumDual, count: 1, data: 0 }, [
	"bab"
],[
	'a', 265, 0,
	'b', ItemID.rodUranium, 0
]);
Recipes.addShaped({ id: ItemID.rodUraniumQuard, count: 1, data: 0 }, [
	"bab"
],[
	'a', 265, 0,
	'b', ItemID.rodUraniumDual, 0
]);

Item.setMaxDamage(ItemID.rodUranium, 100000);
Item.setMaxDamage(ItemID.rodUraniumDual, 200000);
Item.setMaxDamage(ItemID.rodUraniumQuard, 400000);

Item.setMaxDamage(ItemID.rodUraniumDepleted, 100000);
Item.setMaxDamage(ItemID.rodUraniumDepletedDual, 200000);
Item.setMaxDamage(ItemID.rodUraniumDepletedQuard, 400000);

FactAPI.Reactor.registerFuel(ItemID.rodUranium,1,ItemID.rodUraniumDepleted);
FactAPI.Reactor.registerFuel(ItemID.rodUraniumDual,2,ItemID.rodUraniumDualDepleted);
FactAPI.Reactor.registerFuel(ItemID.rodUraniumQuard,4,ItemID.rodUraniumQuardDepleted);

FactAPI.Reactor.registerRadFuel(ItemID.rodUranium,0,40000);
FactAPI.Reactor.registerRadFuel(ItemID.rodUraniumDual,0,80000);
FactAPI.Reactor.registerRadFuel(ItemID.rodUraniumQuard,0,16000);