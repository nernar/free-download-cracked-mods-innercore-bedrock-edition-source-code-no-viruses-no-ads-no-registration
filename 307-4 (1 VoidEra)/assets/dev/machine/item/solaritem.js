IDRegistry.genItemID("enrichedsunnarium");
Item.createItem("enrichedsunnarium", "enrichedsunnarium", {name: "enrichedsunnarium", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.enrichedsunnarium, count: 1, data: 0}, [
		"ccc",
		"cxc",
		"ccc"
	], ['x', ItemID.sunnarium, 0, 'c', ItemID.irradianturanium, 0]);
});

IDRegistry.genItemID("enrichedsunnariumalloy");
Item.createItem("enrichedsunnariumalloy", "enrichedsunnariumalloy", {name: "enrichedsunnariumalloy", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.enrichedsunnariumalloy, count: 1, data: 0}, [
		" c ",
		"cxc",
		" c "
	], ['x', ItemID.sunnariumalloy, 0, 'c', ItemID.enrichedsunnarium, 0]);
});


IDRegistry.genItemID("iridiumingot");
Item.createItem("iridiumingot", "iridiumingot", {name: "iridiumingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("iridiumironplate");
Item.createItem("iridiumironplate", "iridiumironplate", {name: "iridiumironplate", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.iridiumironplate, count: 1, data: 0}, [
		"ccc",
		"cxc",
		"ccc"
	], ['x', ItemID.iridiumingot, 0, 'c', 265, 0]);
});



IDRegistry.genItemID("irradianturanium");
Item.createItem("irradianturanium", "irradianturanium", {name: "irradianturanium", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.irradianturanium, count: 1, data: 0}, [
		" c ",
		"cxc",
		" c "
	], ['x', ItemID.uraniumingot, 0, 'c', 348, 0]);
});


IDRegistry.genItemID("irradiantglasspane");
Item.createItem("irradiantglasspane", "irradiantglasspane", {name: "irradiantglasspane", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.irradiantglasspane, count: 1, data: 0}, [
		"ccc",
		"sxs",
		"ccc"
	], ['x', 348, 0, 'c', BlockID.reinforcedGlass, 0, 's', ItemID.irradianturanium, 0]);
});


IDRegistry.genItemID("irradiantreinforceplate");
Item.createItem("irradiantreinforceplate", "irradiantreinforceplate", {name: "irradiantreinforceplate", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.irradiantreinforceplate, count: 1, data: 0}, [
		"c#c",
		"axa",
		"csc"
	], ['x', ItemID.reinforcediridiumironplate, 0, '#', ItemID.sunnariumpart, 0, 'c', 331, 0, 's', 264, 0, 'a', 351, 4]);
});


IDRegistry.genItemID("quantumcore");
Item.createItem("quantumcore", "quantumcore", {name: "quantumcore", meta: 0}, {stack: 1});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.quantumcore, count: 1, data: 0}, [
		"csc",
		"sxs",
		"csc"
	], ['x', 381, 0, 'c', ItemID.enrichedsunnariumalloy, 0, 's', ItemID.ulthbrcore, -1]);
});


IDRegistry.genItemID("reinforcediridiumironplate");
Item.createItem("reinforcediridiumironplate", "reinforcediridiumironplate", {name: "reinforcediridiumironplate", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.reinforcediridiumironplate, count: 1, data: 0}, [
		"csc",
		"sxs",
		"csc"
	], ['x', ItemID.iridiumironplate, 0, 'c', ItemID.plateAlloy, 0, 's', ItemID.carbonPlate, 0]);
});

IDRegistry.genItemID("sunnarium");
Item.createItem("sunnarium", "sunnarium", {name: "sunnarium", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.sunnarium, count: 1, data: 0}, [
		"ccc",
		"xxx",
		"ccc"
	], ['x', 348, 0, 'c', ItemID.matter, 0]);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.sunnarium, count: 1, data: 0}, [
		"ccc",
		"ccc",
		"ccc"
	], ['c', ItemID.sunnariumpart, 0]);
});


IDRegistry.genItemID("sunnariumalloy");
Item.createItem("sunnariumalloy", "sunnariumalloy", {name: "sunnariumalloy", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.sunnariumalloy, count: 1, data: 0}, [
		"ccc",
		"cxc",
		"ccc"
	], ['x', ItemID.sunnarium, 0, 'c', ItemID.plateReinforcedIridium, 0]);
});


IDRegistry.genItemID("sunnariumpart");
Item.createItem("sunnariumpart", "sunnariumpart", {name: "sunnariumpart", meta: 0}, {stack: 64});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.sunnariumpart, count: 1, data: 0}, [
		" c ",
		" x ",
		" c "
	], ['x', 348, 0, 'c', ItemID.matter, 0]);
});



IDRegistry.genItemID("uraniumingot");
Item.createItem("uraniumingot", "uraniumingot", {name: "uraniumingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("mtcore");
Item.createItem("mtcore", "mtcore", {name: "mtcore", meta: 0}, {stack: 1});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: ItemID.mtcore, count: 1, data: 0}, [
		"cxc",
		"c c",
		"cxc"
	], ['x', ItemID.diamondPlate, 0, 'c', ItemID.irradiantglasspane, 0]);
});

