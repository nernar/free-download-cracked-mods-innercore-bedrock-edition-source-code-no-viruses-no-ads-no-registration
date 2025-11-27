Translation.addTranslation("Cookie Ingot", {ru: "Печенюшный слиток"});
IDRegistry.genItemID("cookie_ingot");
	Item.createItem("cookie_ingot", "Cookie Ingot", {
			name: "cookie_ingot",
			meta: 0
		}, {stack:64});
	Recipes.addFurnace(BlockID.cookie_ore, ItemID.cookie_ingot, 0);

Translation.addTranslation("Cookie Stick", {ru: "Печенюшная палка"});
IDRegistry.genItemID("cookie_stick");
	Item.createItem("cookie_stick", "Cookie Stick", {
			name: "cookie_stick",
			meta: 0
		}, {stack:64});
	Recipes.addShaped({id: ItemID.cookie_stick, count: 4, data: 0}, [
		"a","a"
	], ['a', BlockID.cookie_planks,0]);
	Recipes.addShaped({id: BlockID.cookie_block, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.cookie_ingot,0]);
	Recipes.addShaped({id: ItemID.cookie_ingot, count: 9, data: 0}, [
		"a"
	], ['a', BlockID.cookie_block,0]);