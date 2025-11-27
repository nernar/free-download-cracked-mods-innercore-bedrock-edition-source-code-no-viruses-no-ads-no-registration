Translation.addTranslation("Cookie Stack", {ru: "Печенюшный посох"});
IDRegistry.genItemID("cookie_key");
	Item.createItem("cookie_key", "Cookie Stack", {
			name: "cookie_key",
			meta: 0
		}, {stack:1});
	Recipes.addShaped({id: ItemID.cookie_key, count: 1, data: 0}, [
		" b "," a "," a "
	], ['a', 280, 0,'b',357,0]);
