IDRegistry.genItemID("advcore");
Item.createItem("advcore", "advcore", {name: "advcore", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.advcore, "Eu", 25000, 1, true);

IDRegistry.genItemID("hbrcore");
Item.createItem("hbrcore", "hbrcore", {name: "hbrcore", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.hbrcore, "Eu", 250000, 2, true);

IDRegistry.genItemID("ultcore");
Item.createItem("ultcore", "ultcore", {name: "ultcore", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.ultcore, "Eu", 25000000, 3, true);

IDRegistry.genItemID("ulthbrcore");
Item.createItem("ulthbrcore", "ulthbrcore", {name: "ulthbrcore", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.ulthbrcore, "Eu", 250000000, 3, true);


Item.registerNameOverrideFunction(ItemID.advcore, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.hbrcore, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.ultcore, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.ulthbrcore, ENERGY_ITEM_NAME);


Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.advcore, count: 1, data: Item.getMaxDamage(ItemID.advcore)}, [
		"c#c",
		"cxc",
		"c#c"
	], ['x', ItemID.storageBattery, -1, '#', ItemID.circuitBasic, 0, 'c', 265, 0]);

	Recipes.addShaped({id: ItemID.hbrcore, count: 1, data: Item.getMaxDamage(ItemID.hbrcore)}, [
		"bcb",
		"bab",
		"bcb"
	], ['a', ItemID.advcore, -1, 'c', ItemID.circuitBasic, 0, 'b', 265, 0]);

	Recipes.addShaped({id: ItemID.ultcore, count: 1, data: Item.getMaxDamage(ItemID.ultcore)}, [
		"x#x",
		"xax",
		"x#x"
	], ['a', ItemID.hbrcore, -1, '#', ItemID.circuitAdvanced, 0, 'x', ItemID.ingotSteel, 0]);

Recipes.addShaped({id: ItemID.ulthbrcore, count: 1, data: Item.getMaxDamage(ItemID.ulthbrcore)}, [
		"x#x",
		"xax",
		"x#x"
	], ['a', ItemID.ultcore, -1, '#', ItemID.circuitAdvanced, 0, 'x', ItemID.plateBronze, 0], ChargeItemRegistry.transportEnergy);
});