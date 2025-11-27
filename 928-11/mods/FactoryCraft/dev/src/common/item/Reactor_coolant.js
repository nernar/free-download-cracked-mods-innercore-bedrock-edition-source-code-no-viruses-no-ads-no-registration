Translation.addTranslation("Coolant Rod 10K", {
	ru: "Охлаждающий стержень 10К"
});
Translation.addTranslation("Coolant Rod 30K", {
	ru: "Охлаждающий стержень 30К"
});
Translation.addTranslation("Coolant Rod 60K", {
	ru: "Охлаждающий стержень 60К"
});

IDRegistry.genItemID("rodCoolant");
IDRegistry.genItemID("rodCoolantDual");
IDRegistry.genItemID("rodCoolantQuard");

Item.createItem("rodCoolant", "Coolant Rod 10K", { name: "rod_coolant", meta: 0 });
Item.createItem("rodCoolantDual", "Coolant Rod 30K", { name: "rod_coolant", meta: 1 });
Item.createItem("rodCoolantQuard", "Coolant Rod 60K", { name: "rod_coolant", meta: 2 });

Item.setMaxDamage(ItemID.rodCoolant, 100000);
Item.setMaxDamage(ItemID.rodCoolantDual, 300000);
Item.setMaxDamage(ItemID.rodCoolantQuard, 600000);

FactAPI.Reactor.isCoolant(ItemID.rodCoolant,1,true);
FactAPI.Reactor.isCoolant(ItemID.rodCoolantDual,3,true);
FactAPI.Reactor.isCoolant(ItemID.rodCoolantQuard,6,true);

Recipes.addShaped({ id: ItemID.rodCoolant, count: 1, data: 0 }, [
	"bab"
],[
	'a', 351, 4,
	'b', 265, 0
]);
Recipes.addShaped({ id: ItemID.rodCoolantDual, count: 1, data: 0 }, [
	"bab"
],[
	'b', ItemID.rodCoolant, 0,
	'a', 265, 0
]);
Recipes.addShaped({ id: ItemID.rodCoolantQuard, count: 1, data: 0 }, [
	"bab"
],[
	'b', ItemID.rodCoolantDual, 0,
	'a', 265, 0
]);