IDRegistry.genItemID("voidcristall");
Item.createItem("voidcristall", "voidcristall", {name: "voidcristall", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.voidcristall, "Eu", 250000, 3, true);

IDRegistry.genItemID("voidcristallarmoured");
Item.createItem("voidcristallarmoured", "voidcristallarmoured", {name: "voidcristallarmoured", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.voidcristallarmoured, "Eu", 10000000, 3, true);

Item.registerNameOverrideFunction(ItemID.voidcristall, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.voidcristallarmoured, ENERGY_ITEM_NAME);

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidcristall, count: 1, data: Item.getMaxDamage(ItemID.voidcristall)}, [
		"c#c",
		"cxc",
		"csc"
	], ['x', ItemID.hbrcore, -1, '#', ItemID.uranium, 0, 'c', ItemID.diamondPlate, 0, 's', ItemID.matter, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.voidcristallarmoured, count: 1, data: Item.getMaxDamage(ItemID.voidcristall)}, [
		"c#c",
		"cxc",
		"csc"
	], ['x', ItemID.voidcristall, -1, '#', ItemID.ultcore, 0, 'c', ItemID.uranium, 0, 's', ItemID.voidingot, 0]);
});
