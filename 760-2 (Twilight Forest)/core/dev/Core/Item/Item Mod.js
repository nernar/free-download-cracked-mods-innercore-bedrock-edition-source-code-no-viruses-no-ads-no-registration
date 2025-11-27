
IDRegistry.genItemID("steeleaf");
Item.createItem("steeleaf", " steeleaf", {name: "steeleaf", meta: 0}, {stack: 64})
//4
IDRegistry.genItemID("ironwood");
Item.createItem("ironwood", "iron wood ", {name: "tao", meta: 0}, {stack: 64})

IDRegistry.genItemID("fieryblood");
Item.createItem("fieryblood", "fiery blood", {name: "fiery", meta: 0}, {stack: 64})

IDRegistry.genItemID("fint");
Item.createItem("fint", "fiery ingot ", {name: "fiery_ingot", meta: 0}, {stack: 64})

//4.5

	 IDRegistry.genItemID("twpo");
Item.createItem("twpo", "over world and twilight forest", {name: "over_world", meta: 0}, {stack: 1})
	Recipes.addShaped({id: ItemID.twpo, count: 2, data: 0}, [
		"ooo",
		"aaa",
		"aaa"
	], ['o', ItemID.steeleaf, 0,'a', 3, 0]);
	
