IDRegistry.genItemID("bag_common");
Item.createItem("bag_common", "Common bag", {name: "lootbag_common", meta: 0}, {stack: 1});

IDRegistry.genItemID("bag_uncommon");
Item.createItem("bag_uncommon", "Uncommon bag", {name: "lootbag_uncommon", meta: 0}, {stack: 1});
	Recipes.addShaped({id: ItemID.bag_uncommon, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.bag_common, 0]);

IDRegistry.genItemID("bag_rare");
Item.createItem("bag_rare", "Rare bag", {name: "lootbag_rare", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.bag_rare, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.bag_uncommon, 0]);

IDRegistry.genItemID("bag_epic");
Item.createItem("bag_epic", "Epic bag", {name: "lootbag_epic", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.bag_epic, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.bag_rare, 0]);

IDRegistry.genItemID("bag_legendary");
Item.createItem("bag_legendary", "Legendary bag", {name: "lootbag_legendary", meta: 0}, {stack: 1});