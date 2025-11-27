Translation.addTranslation("Cookie Helmet", {ru: "Печенюшный шлем"});
IDRegistry.genItemID("cookie_armorHelmet");
	Item.createArmorItem("cookie_armorHelmet", "Cookie Helmet", {name:"cookie_helmet",meta:0},{
		armor: 3,
		type:"helmet",
		texture:"armor/cookie_1.png",
		durability:165
	});
	Recipes.addShaped({id: ItemID.cookie_armorHelmet, count: 1, data: 0}, [
		"aaa",
		"a a"
	], ['a', ItemID.cookie_ingot, 0]);

Translation.addTranslation("Cookie Chestplate", {ru: "Печенюшный нагрудник"});
IDRegistry.genItemID("cookie_armorBody");
	Item.createArmorItem("cookie_armorBody", "Cookie Chestplate", {name:"cookie_body",meta:0},{
		armor: 6,
		type:"chestplate",
		texture:"armor/cookie_1.png",
		durability: 240
	});
	Recipes.addShaped({id: ItemID.cookie_armorBody, count: 1, data: 0}, [
		"a a",
		"aaa",
		"aaa"
	], ['a', ItemID.cookie_ingot, 0]);

Translation.addTranslation("Cookie Leggings", {ru: "Печенюшные поножи"});
IDRegistry.genItemID("cookie_armorLeggings");
	Item.createArmorItem("cookie_armorLeggings", "Cookie Leggings", {name:"cookie_leggings",meta:0},{
		armor: 5,
		type:"leggings",
		texture:"armor/cookie_2.png",
		durability: 225
	});
	Recipes.addShaped({id: ItemID.cookie_armorLeggings, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a"
	], ['a', ItemID.cookie_ingot, 0]);

Translation.addTranslation("Cookie Boots", {ru: "Печенюшные сапоги"});
IDRegistry.genItemID("cookie_armorBoots");
	Item.createArmorItem("cookie_armorBoots", "Cookie Boots", {name:"cookie_boots",meta:0},{
		armor: 2,
		type:"boots",
		texture:"armor/cookie_1.png",
		durability: 195
	});
	Recipes.addShaped({id: ItemID.cookie_armorBoots, count: 1, data: 0}, [
		"a a",
		"a a"
	], ['a', ItemID.cookie_ingot, 0]);