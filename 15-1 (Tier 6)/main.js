//BoneArm

IDRegistry.genItemID("boneHelmet");
IDRegistry.genItemID("boneChestplate");
IDRegistry.genItemID("boneLeggings");
IDRegistry.genItemID("boneBoots");

Item.createArmorItem("boneHelmet", "Bone Helmet", {name: "boneHelmet"}, {type: "helmet", armor: 3, durability: 300, texture: "armor/bone_1.png"});
Item.createArmorItem("boneChestplate", "Bone Chestplate", {name: "boneChestplate"}, {type: "chestplate", armor: 4, durability: 300, texture: "armor/bone_1.png"});
Item.createArmorItem("boneLeggings", "Bone Leggings", {name: "boneLeggings"}, {type: "leggings", armor: 4, durability: 300, texture: "armor/bone_2.png"});
Item.createArmorItem("boneBoots", "Bone Boots", {name: "boneBoots"}, {type: "boots", armor: 2, durability: 300, texture: "armor/bone_1.png"});



//ObsidianArm

IDRegistry.genItemID("obsidianHelmet");
IDRegistry.genItemID("obsidianChestplate");
IDRegistry.genItemID("obsidianLeggings");
IDRegistry.genItemID("obsidianBoots");

Item.createArmorItem("obsidianHelmet", "Obsidian Helmet", {name: "obsidianHelmet"}, {type: "helmet", armor: 4, durability: 2000, texture: "armor/obsidian_1.png"});
Item.createArmorItem("obsidianChestplate", "Obsidian Chestplate", {name: "obsidianChestplate"}, {type: "chestplate", armor: 6, durability: 2000, texture: "armor/obsidian_1.png"});
Item.createArmorItem("obsidianLeggings", "Obsidian Leggings", {name: "obsidianLeggings"}, {type: "leggings", armor: 6, durability: 2000, texture: "armor/obsidian_2.png"});
Item.createArmorItem("obsidianBoots", "Obsidian Boots", {name: "obsidianBoots"}, {type: "boots", armor: 4, durability: 2000, texture: "armor/obsidian_1.png"});




importLib("ENV", "*");


//Bone

IDRegistry.genItemID("boneSword");
IDRegistry.genItemID("boneShovel");
IDRegistry.genItemID("bonePickaxe");
IDRegistry.genItemID("boneAxe");
IDRegistry.genItemID("boneHoe");
Item.createItem("boneSword", "Bone Sword", {name: "boneSword", meta: 0}, {stack: 1});
Item.createItem("boneShovel", "Bone Shovel", {name: "boneShovel", meta: 0}, {stack: 1});
Item.createItem("bonePickaxe", "Bone Pickaxe", {name: "bonePickaxe", meta: 0}, {stack: 1});
Item.createItem("boneAxe", "Bone Axe", {name: "boneAxe", meta: 0}, {stack: 1});
Item.createItem("boneHoe", "Bone Hoe", {name: "boneHoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("bone", {durability: 300, level: 3, efficiency: 5, damage: 5, enchantability: 13});
ToolAPI.setTool(ItemID.boneSword, "bone", ToolType.sword);
ToolAPI.setTool(ItemID.boneShovel, "bone", ToolType.shovel);
ToolAPI.setTool(ItemID.bonePickaxe, "bone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.boneAxe, "bone", ToolType.axe);
ToolAPI.setTool(ItemID.boneHoe, "bone", ToolType.hoe);



//Obsidian

IDRegistry.genItemID("obsidianSword");
IDRegistry.genItemID("obsidianShovel");
IDRegistry.genItemID("obsidianPickaxe");
IDRegistry.genItemID("obsidianAxe");
IDRegistry.genItemID("obsidianHoe");
Item.createItem("obsidianSword", "Obsidian Sword", {name: "obsidianSword", meta: 0}, {stack: 1});
Item.createItem("obsidianShovel", "Obsidian Shovel", {name: "obsidianShovel", meta: 0}, {stack: 1});
Item.createItem("obsidianPickaxe", "Obsidian Pickaxe", {name: "obsidianPickaxe", meta: 0}, {stack: 1});
Item.createItem("obsidianAxe", "Obsidian Axe", {name: "obsidianAxe", meta: 0}, {stack: 1});
Item.createItem("obsidianHoe", "Obsidian Hoe", {name: "obsidianHoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("obsidian", {durability: 2000, level: 4, efficiency: 8, damage: 10, enchantability: 13});
ToolAPI.setTool(ItemID.obsidianSword, "obsidian", ToolType.sword);
ToolAPI.setTool(ItemID.obsidianShovel, "obsidian", ToolType.shovel);
ToolAPI.setTool(ItemID.obsidianPickaxe, "obsidian", ToolType.pickaxe);
ToolAPI.setTool(ItemID.obsidianAxe, "obsidian", ToolType.axe);
ToolAPI.setTool(ItemID.obsidianHoe, "obsidian", ToolType.hoe);



//Bone

Recipes.addShaped({id: ItemID.boneSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', 352, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.boneShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', 352, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bonePickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', 352, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.boneAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', 352, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.boneHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', 352, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.boneHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', 352, 0]);
	
	Recipes.addShaped({id: ItemID.boneChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', 352, 0]);
	
	Recipes.addShaped({id: ItemID.boneLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', 352, 0]);
	
	Recipes.addShaped({id: ItemID.boneBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', 352, 0]);



//Obsidian

Recipes.addShaped({id: ItemID.obsidianSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', 49, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.obsidianShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', 49, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.obsidianPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', 49, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.obsidianAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', 49, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.obsidianHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', 49, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.obsidianHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', 49, 0]);
	
	Recipes.addShaped({id: ItemID.obsidianChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', 49, 0]);
	
	Recipes.addShaped({id: ItemID.obsidianLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', 49, 0]);
	
	Recipes.addShaped({id: ItemID.obsidianBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', 49, 0]);





Translation.addTranslation("Bone Helmet", {ru: "Костяной шлем"});
Translation.addTranslation("Bone Chestplate", {ru: "Костяная кираса"});
Translation.addTranslation("Bone Leggings", {ru: "Костяные поножи"});
Translation.addTranslation("Bone Boots", {ru: "Костяные ботинки"});

Translation.addTranslation("Obsidian Helmet", {ru: "Обсидиановый шлем"});
Translation.addTranslation("Obsidian Chestplate", {ru: "Обсидиановая кираса"});
Translation.addTranslation("Obsidian Leggings", {ru: "Обсидиановые поножи"});
Translation.addTranslation("Obsidian Boots", {ru: "Обсидиановые ботинки"});

Translation.addTranslation("Bone Sword", {ru: "Костяной меч"});
Translation.addTranslation("Bone Shovel", {ru: "Костяная лопата"});
Translation.addTranslation("Bone Pickaxe", {ru: "Костяная кирка"});
Translation.addTranslation("Bone Axe", {ru: "Костяной топор"});
Translation.addTranslation("Bone Hoe", {ru: "Костяная мотыга"});

Translation.addTranslation("Obsidian Sword", {ru: "Обсидиановый меч"});
Translation.addTranslation("Obsidian Shovel", {ru: "Обсидиановая лопата"});
Translation.addTranslation("Obsidian Pickaxe", {ru: "Обсидиановая кирка"});
Translation.addTranslation("Obsidian Axe", {ru: "Обсидиановый топор"});
Translation.addTranslation("Obsidian Hoe", {ru: "Обсидиановая мотыга"});