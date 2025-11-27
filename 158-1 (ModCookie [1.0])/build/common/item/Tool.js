Translation.addTranslation("Cookie Axe", {ru: "Печенюшный топор"});
IDRegistry.genItemID("cookie_axe");
	Item.createItem("cookie_axe", "Cookie Axe", {
			name: "cookie_axe",
			meta: 0
		}, {stack:1});
	Recipes.addShaped({id: ItemID.cookie_axe, count: 1, data: 0}, [
		"aa ","ab "," b "
	], ['a', ItemID.cookie_ingot, 0,'b',ItemID.cookie_stick,0]);
	ToolAPI.setTool(ItemID.cookie_axe,"iron",ToolType.axe);

Translation.addTranslation("Cookie Pickaxe", {ru: "Печенюшная кирка"});
IDRegistry.genItemID("cookie_pickaxe");
	Item.createItem("cookie_pickaxe", "Cookie Pickaxe", {
			name: "cookie_pickaxe",
			meta: 0
		}, {stack:1});
	Recipes.addShaped({id: ItemID.cookie_pickaxe, count: 1, data: 0}, [
		"aaa"," b "," b "
	], ['a', ItemID.cookie_ingot, 0,'b',ItemID.cookie_stick,0]);
	ToolAPI.setTool(ItemID.cookie_pickaxe,"iron",ToolType.pickaxe);

Translation.addTranslation("Cookie Shovel", {ru: "Печенюшная лопата"});
IDRegistry.genItemID("cookie_shovel");
	Item.createItem("cookie_shovel", "Cookie Shovel", {
			name: "cookie_shovel",
			meta: 0
		}, {stack:1});
	Recipes.addShaped({id: ItemID.cookie_shovel, count: 1, data: 0}, [
		" a ",
		" b ",
		" b "
	], ['a', ItemID.cookie_ingot, 0,'b',ItemID.cookie_stick,0]);
	ToolAPI.setTool(ItemID.cookie_shovel,"iron",ToolType.shovel);

Translation.addTranslation("Cookie Hoe", {ru: "Печенюшная мотыга"});
IDRegistry.genItemID("cookie_hoe");
	Item.createItem("cookie_hoe", "Cookie Hoe", {
			name: "cookie_hoe",
			meta: 0
		}, {stack:1});
	Recipes.addShaped({id: ItemID.cookie_hoe, count: 1, data: 0}, [
		"aa ",
		" b ",
		" b "
	], ['a', ItemID.cookie_ingot, 0,'b',ItemID.cookie_stick,0]);
	ToolAPI.setTool(ItemID.cookie_hoe,"iron",ToolType.hoe);

Translation.addTranslation("Cookie Sword", {ru: "Печенюшный меч"});
IDRegistry.genItemID("cookie_sword");
	Item.createItem("cookie_sword", "Cookie Sword", {
			name: "cookie_sword",
			meta: 0
		}, {stack:1});
	Recipes.addShaped({id: ItemID.cookie_sword, count: 1, data: 0}, [
		" a ",
		" a ",
		" b "
	], ['a', ItemID.cookie_ingot, 0,'b',ItemID.cookie_stick,0]);
	ToolAPI.setTool(ItemID.cookie_sword,"iron",ToolType.sword);