IDRegistry.genItemID("ObsidianHelmet");
 
Item.createArmorItem("ObsidianHelmet", "Apatite Helmet", {name: "O111"}, {type: "helmet", armor: 3, durability: 330, texture: "armor/D_1.png", isTech:false}); 

IDRegistry.genItemID("ObsidianChestplate");

Item.createArmorItem("ObsidianChestplate", "Obsidian Chestplate", {name: "O222"}, {type: "chestplate", armor: 9, durability: 480, texture: "armor/D_1.png", isTech:false}); 

IDRegistry.genItemID("OB");

Item.createArmorItem("OB", "Obsidian Leggings", {name: "O333"}, {type: "leggings", armor: 4, durability: 450, texture: "armor/D_2.png", isTech:false}); 

IDRegistry.genItemID("ObsidianBoots");

Item.createArmorItem("ObsidianBoots", "Obsidian Boots", {name: "O444"}, {type: "boots", armor: 4, durability: 390, texture: "armor/D_1.png", isTech:false}); 

Recipes.addShaped({id: ItemID.ObsidianHelmet, count: 1, data: 0}, [
		"xxx",
		"xax",
		"   "
	], ['x', ItemID.ObsidianIngot, 0, 'a', 310, 0]);

Recipes.addShaped({id: ItemID.ObsidianChestplate, count: 1, data: 0}, [
		"xax",
		"xxx",
		"xxx"
	], ['x', ItemID.ObsidianIngot, 0, 'a', 311, 0]);

Recipes.addShaped({id: ItemID.OB, count: 1, data: 0}, [
		"xxx",
		"xax",
		"x x"
	], ['x', ItemID.ObsidianIngot, 0, 'a', 312, 0]);

Recipes.addShaped({id: ItemID.ObsidianBoots, count: 1, data: 0}, [
		"xax",
		"x x",
		"   "
	], ['x', ItemID.ObsidianIngot, 0, 'a', 313, 0]);
