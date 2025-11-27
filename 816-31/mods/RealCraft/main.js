/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: start.js

Recipes.deleteRecipe({id: 268, count: 1, data: 0});

Recipes.deleteRecipe({id: 269, count: 1, data: 0});

Recipes.deleteRecipe({id: 270, count: 1, data: 0});

Recipes.deleteRecipe({id: 271, count: 1, data: 0});

Recipes.deleteRecipe({id: 290, count: 1, data: 0});

Translation.addTranslation("Wooden Sword Blade", {
ru: "Клинок деревянного меча"
});
IDRegistry.genItemID("woodenSword");
Item.createItem("woodenSword", "Wooden Sword Blade", {name: "wooden_sword", meta: 0}, {stack: 1});

Translation.addTranslation("The blade of a wooden axe", {
ru: "Лезвие деревянного топора"
});
IDRegistry.genItemID("woodenAxe");
Item.createItem("woodenAxe", "The blade of a wooden axe", {name: "wooden_axe", meta: 0}, {stack: 1});

Translation.addTranslation("The top of a wooden shovel", {
ru: "Верх деревянной лопаты"
});
IDRegistry.genItemID("woodenShovel");
Item.createItem("woodenShovel", "The top of a wooden shovel", {name: "wooden_shovel", meta: 0}, {stack: 1});

Translation.addTranslation("The top of a wooden pickaxe", {
ru: "Верх деревянной кирки"
});
IDRegistry.genItemID("woodenPickaxe");
Item.createItem("woodenPickaxe", "The top of a wooden pickaxe", {name: "wooden_pickaxe", meta: 0}, {stack: 1});

Translation.addTranslation("The top of a wooden hoe", {
ru: "Верх деревянной мотыги"
});
IDRegistry.genItemID("woodenHoe");
Item.createItem("woodenHoe", "The top of a wooden hoe", {name: "wooden_hoe", meta: 0}, {stack: 1});

Translation.addTranslation("Sword Handle", {
ru: "Ручка для меча"
});
IDRegistry.genItemID("swordHandle");
Item.createItem("swordHandle", "Sword Handle", {name: "sword_handle", meta: 0}, {stack: 1});

Translation.addTranslation("Tool Handle", {
ru: "Ручка для инструментов"
});
IDRegistry.genItemID("toolHandle");
Item.createItem("toolHandle", "Tool Handle", {name: "tool_handle", meta: 0}, {stack: 4});

Translation.addTranslation("Knife", {
ru: "Нож"
});
IDRegistry.genItemID("knife");
Item.createItem("knife", "Knife", {name: "knife", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.knife, 4);

function addRecipeWithCraftingTool(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
		for (var i in field){
			if (field[i].id == tool){
				field[i].data++;
				if (field[i].data >= Item.getMaxDamage(tool)){
					field[i].id = field[i].count = field[i].data = 0;
				}
			}
			else {
				api.decreaseFieldSlot(i);
			}
		}
	});
}

Recipes.addShaped({id: ItemID.knife, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', 280, 0, 'b', 5, 0, ]);

Recipes.addShaped({id: ItemID.knife, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', 280, 0, 'b', 5, 1, ]);

Recipes.addShaped({id: ItemID.knife, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', 280, 0, 'b', 5, 2, ]);

Recipes.addShaped({id: ItemID.knife, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', 280, 0, 'b', 5, 3, ]);

Recipes.addShaped({id: ItemID.knife, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', 280, 0, 'b', 5, 4, ]);

Recipes.addShaped({id: ItemID.knife, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', 280, 0, 'b', 5, 5, ]);

Recipes.addShaped({id: ItemID.swordHandle, count: 1, data: 0}, 
[ "   ", 	
  "aba", 	
  " a " ], ['a', 280, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.toolHandle, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " a " ], ['a', 280, 0, ]);

Recipes.addShaped({id: ItemID.woodenSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 0, ]);

Recipes.addShaped({id: ItemID.woodenSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 1, ]);

Recipes.addShaped({id: ItemID.woodenSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 2, ]);

Recipes.addShaped({id: ItemID.woodenSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 3, ]);

Recipes.addShaped({id: ItemID.woodenSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 4, ]);

Recipes.addShaped({id: ItemID.woodenSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 5, ]);

Recipes.addShaped({id: ItemID.woodenAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 0, ]);

Recipes.addShaped({id: ItemID.woodenAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 1, ]);

Recipes.addShaped({id: ItemID.woodenAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 2, ]);

Recipes.addShaped({id: ItemID.woodenAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 3, ]);

Recipes.addShaped({id: ItemID.woodenAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 4, ]);

Recipes.addShaped({id: ItemID.woodenAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 5, ]);

Recipes.addShaped({id: ItemID.woodenShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 0, ]);

Recipes.addShaped({id: ItemID.woodenShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 1, ]);

Recipes.addShaped({id: ItemID.woodenShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 2, ]);

Recipes.addShaped({id: ItemID.woodenShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 3, ]);

Recipes.addShaped({id: ItemID.woodenShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 4, ]);

Recipes.addShaped({id: ItemID.woodenShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 5, ]);

Recipes.addShaped({id: ItemID.woodenPickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 0, ]);

Recipes.addShaped({id: ItemID.woodenPickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 1, ]);

Recipes.addShaped({id: ItemID.woodenPickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 2, ]);

Recipes.addShaped({id: ItemID.woodenPickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 3, ]);

Recipes.addShaped({id: ItemID.woodenPickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 4, ]);

Recipes.addShaped({id: ItemID.woodenPickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 5, ]);

Recipes.addShaped({id: ItemID.woodenHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 0, ]);

Recipes.addShaped({id: ItemID.woodenHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 1, ]);

Recipes.addShaped({id: ItemID.woodenHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 2, ]);

Recipes.addShaped({id: ItemID.woodenHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 3, ]);

Recipes.addShaped({id: ItemID.woodenHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 4, ]);

Recipes.addShaped({id: ItemID.woodenHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.knife, 0, 'b', 5, 5, ]);

Recipes.addShaped({id: 268, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.woodenSword, 0, 'b', 287, 0, 'c', ItemID.swordHandle, 0, ]);

Recipes.addShaped({id: 269, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.woodenShovel, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.addShaped({id: 270, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.woodenPickaxe, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.addShaped({id: 271, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.woodenAxe, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.addShaped({id: 290, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.woodenHoe, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.deleteRecipe({id: 35, count: 1, data: 0});

Recipes.addShaped({id: 287, count: 8, data: 0}, 
[ "   ", 	
  " a ", 	
  "   " ], ['a', 35, 0, ]);




// file: 1_stage.js


Recipes.deleteRecipe({id: 298, count: 1, data: 0});

Recipes.deleteRecipe({id: 299, count: 1, data: 0});

Recipes.deleteRecipe({id: 300, count: 1, data: 0});

Recipes.deleteRecipe({id: 301, count: 1, data: 0});

Translation.addTranslation("Spine", {
ru: "Игла"
});
IDRegistry.genItemID("needle");
Item.createItem("needle", "Spine", {name: "needle", meta: 0}, {stack: 16});

Translation.addTranslation("Needle and thread", {
ru: "Игла с нитью"
});
IDRegistry.genItemID("needlew");
Item.createItem("needlew", "Needle and thread", {name: "needlew", meta: 0}, {stack: 16});

Recipes.addShaped({id: 35, count: 1, data: 0}, 
[ "bbb", 	
  "bab", 	
  "bbb" ], ['a', ItemID.needlew, 0, 'b', 287, 0]);

Translation.addTranslation("Needle and thread", {
ru: "Высушенная кожа"
});
IDRegistry.genItemID("lead");
Item.createItem("lead", "Dried skin", {name: "lead", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.needle, count: 2, data: 0}, 
[ "   ", 	
  " a ", 	
  "   " ], ['a', 280, 0, ]);

Recipes.addShaped({id: ItemID.needlew, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.needle, 0, 'b', 287, 0, ]);

Recipes.addFurnace(334, 0, ItemID.lead, 0);

Recipes.addShaped({id: 298, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.needlew, 0, 'b', ItemID.lead, 0, ]);

Recipes.addShaped({id: 299, count: 1, data: 0}, 
[ "bbb", 	
  " a ", 	
  "   " ], ['a', ItemID.needlew, 0, 'b', ItemID.lead, 0, ]);

Recipes.addShaped({id: 300, count: 1, data: 0}, 
[ "   ", 	
  "bab", 	
  "   " ], ['a', ItemID.needlew, 0, 'b', ItemID.lead, 0, ]);

Recipes.addShaped({id: 301, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "b b" ], ['a', ItemID.needlew, 0, 'b', ItemID.lead, 0, ]);




// file: 2_stage.js

Recipes.deleteRecipe({id: 272, count: 1, data: 0});

Recipes.deleteRecipe({id: 273, count: 1, data: 0});

Recipes.deleteRecipe({id: 274, count: 1, data: 0});

Recipes.deleteRecipe({id: 275, count: 1, data: 0});

Recipes.deleteRecipe({id: 291, count: 1, data: 0});

Translation.addTranslation("Stonecutter", {
ru: "Камнерез"
});
IDRegistry.genItemID("rc_stonecutter");
Item.createItem("rc_stonecutter", "Stonecutter", {name: "stonecutter", meta: 0}, {stack: 1});

Translation.addTranslation("Stone Sword Blade", {
ru: "Клинок каменного меча"
});
IDRegistry.genItemID("stoneSword");
Item.createItem("stoneSword", "Stone Sword Blade", {name: "stone_sword", meta: 0}, {stack: 1});

Translation.addTranslation("Stone Axe Blade", {
ru: "Лезвие каменного топора"
});
IDRegistry.genItemID("stoneAxe");
Item.createItem("stoneAxe", "Stone Axe Blade", {name: "stone_axe", meta: 0}, {stack: 1});

Translation.addTranslation("The top of the stone shovel", {
ru: "Лезвие каменной лопаты"
});
IDRegistry.genItemID("stoneShovel");
Item.createItem("stoneShovel", "The top of the stone shovel", {name: "stone_shovel", meta: 0}, {stack: 1});

Translation.addTranslation("Top of a stone pickaxe", {
ru: "Верх каменной кирки"
});
IDRegistry.genItemID("stonePickaxe");
Item.createItem("stonePickaxe", "Top of a stone pickaxe", {name: "stone_pickaxe", meta: 0}, {stack: 1});

Translation.addTranslation("The top of the stone hoe", {
ru: "Верх каменной мотыги"
});
IDRegistry.genItemID("stoneHoe");
Item.createItem("stoneHoe", "The top of the stone hoe", {name: "stone_hoe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.rc_stonecutter, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "bbb" ], ['a', 4, 0, 'b', 280, 0, ]);

Recipes.addShaped({id: ItemID.stoneSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stonePickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: 272, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stoneSword, 0, 'b', 287, 0, 'c', ItemID.swordHandle, 0, ]);

Recipes.addShaped({id: 273, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stoneShovel, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.addShaped({id: 274, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stonePickaxe, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.addShaped({id: 275, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stoneAxe, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);

Recipes.addShaped({id: 291, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.stoneHoe, 0, 'b', 287, 0, 'c', ItemID.toolHandle, 0, ]);




// file: 3_stage.js

Translation.addTranslation("Board", {
ru: "Доска"
});
IDRegistry.genItemID("rc_planks");
Item.createItem("rc_planks", "Board", {name: "planks", meta: 0}, {stack: 64});

Translation.addTranslation("Improved Sword handle", {
ru: "Улучшеная ручка меча"
});
IDRegistry.genItemID("swordHandlew");
Item.createItem("swordHandlew", "Improved Sword handle", {name: "sword_handlew", meta: 0}, {stack: 1});

Translation.addTranslation("Improved tool handle", {
ru: "Улучшеная ручка для инструментов"
});
IDRegistry.genItemID("toolHandlew");
Item.createItem("toolHandlew", "Improved tool handle", {name: "tool_handlew", meta: 0}, {stack: 1});

Translation.addTranslation("Blank for the sword", {
ru: "Заготовка для меча"
});
IDRegistry.genItemID("sword");
Item.createItem("sword", "Blank for the sword", {name: "harvesting", meta: 0}, {stack: 1});

Translation.addTranslation("Red-hot iron ingot", {
ru: "Раскаленный железный слиток"
});
IDRegistry.genItemID("hotIron");
Item.createItem("hotIron", "Red-hot iron ingot", {name: "hot_iron", meta: 0}, {stack: 64});

Translation.addTranslation("Blank for an axe", {
ru: "Заготовка для топора"
});
IDRegistry.genItemID("axe");
Item.createItem("axe", "Blank for an axe", {name: "harvestingq", meta: 0}, {stack: 1});

Translation.addTranslation("Blank for a shovel", {
ru: "Заготовка для лопаты"
});
IDRegistry.genItemID("shovel");
Item.createItem("shovel", "Blank for a shovel", {name: "harvestingw", meta: 0}, {stack: 1});

Translation.addTranslation("Blank for a pickaxe", {
ru: "Заготовка для кирки"
});
IDRegistry.genItemID("pickaxe");
Item.createItem("pickaxe", "Blank for a pickaxe", {name: "harvestinge", meta: 0}, {stack: 1});

Translation.addTranslation("Preparation for a hoe", {
ru: "Заготовка для мотыги"
});
IDRegistry.genItemID("hoe");
Item.createItem("hoe", "Preparation for a hoe", {name: "harvestingr", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 0, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 1, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 2, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 3, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 4, ]);

Recipes.addShaped({id: ItemID.rc_planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 5, ]);

Recipes.addShaped({id: ItemID.swordHandlew, count: 1, data: 0}, 
[ " b ", 	
  "aba", 	
  " a " ], ['a', ItemID.rc_planks, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.toolHandlew, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " a " ], ['a', ItemID.rc_planks, 0, ]);

Recipes.addFurnace(265, 0, ItemID.hotIron, 0);

Recipes.deleteRecipe({id: 267, count: 1, data: 0});

Recipes.deleteRecipe({id: 256, count: 1, data: 0});

Recipes.deleteRecipe({id: 257, count: 1, data: 0});

Recipes.deleteRecipe({id: 258, count: 1, data: 0});

Recipes.deleteRecipe({id: 292, count: 1, data: 0});

Recipes.addShaped({id: ItemID.sword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.axe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.shovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.pickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.hoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: 267, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.swordHandlew, 0, 'c', ItemID.sword, 0, ]);

Recipes.addShaped({id: 258, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.axe, 0, ]);

Recipes.addShaped({id: 256, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.shovel, 0, ]);

Recipes.addShaped({id: 257, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.pickaxe, 0, ]);

Recipes.addShaped({id: 292, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.hoe, 0, ]);




// file: 4_stage.js

Recipes.deleteRecipe({id: 306, count: 1, data: 0});

Recipes.deleteRecipe({id: 307, count: 1, data: 0});

Recipes.deleteRecipe({id: 308, count: 1, data: 0});

Recipes.deleteRecipe({id: 309, count: 1, data: 0});

Translation.addTranslation("Blank for hammer", {
ru: "Заготовка для молотка"
});
IDRegistry.genItemID("hammerQ");
Item.createItem("hammerQ", "Blank for hammer", {name: "hammerq", meta: 0}, {stack: 1});

Translation.addTranslation("Hammer", {
ru: "Молоток"
});
IDRegistry.genItemID("hammer");
Item.createItem("hammer", "Hammer", {name: "hammer", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.hammer, 24);

function addRecipeWithCraftingTool(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
		for (var i in field){
			if (field[i].id == tool){
				field[i].data++;
				if (field[i].data >= Item.getMaxDamage(tool)){
					field[i].id = field[i].count = field[i].data = 0;
				}
			}
			else {
				api.decreaseFieldSlot(i);
			}
		}
	});
}

Translation.addTranslation("Iron Plate", {
ru: "Железная пластина"
});
IDRegistry.genItemID("ironPlate");
Item.createItem("ironPlate", "Iron Plate", {name: "iron_plate", meta: 0}, {stack: 64});

Translation.addTranslation("Bone Needle", {
ru: "Костная игла"
});
IDRegistry.genItemID("boneNeedle");
Item.createItem("boneNeedle", "Bone Needle", {name: "bone_needle", meta: 0}, {stack: 16});

Translation.addTranslation("Bone needle with thread", {
ru: "Костная игла с нитью"
});
IDRegistry.genItemID("boneNeedlew");
Item.createItem("boneNeedlew", "Bone needle with thread", {name: "bone_needlew", meta: 0}, {stack: 16});

Translation.addTranslation("Bedding for armor", {
ru: "Подстилка для брони"
});
IDRegistry.genItemID("armorWool");
Item.createItem("armorWool", "Bedding for armor", {name: "armor_wool", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.hammerQ, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "b  " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.hammer, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.hammerQ, 0, ]);

Callback.addCallback("PreLoaded", function(){
	addRecipeWithCraftingTool({id: ItemID.ironPlate, count: 1, data: 0}, [{id: ItemID.hotIron, data: 0}], ItemID.hammer);
});

Recipes.addShaped({id: ItemID.boneNeedle, count: 2, data: 0}, 
[ "   ", 	
  " a ", 	
  "   " ], ['a', 352, 0, ]);

Recipes.addShaped({id: ItemID.boneNeedlew, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.boneNeedle, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.armorWool, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', ItemID.boneNeedlew, 0, 'b', 35, 0, ]);

Recipes.addShaped({id: 306, count: 1, data: 0}, 
[ "aaa", 	
  "aba", 	
  "   " ], ['a', ItemID.ironPlate, 0, 'b', ItemID.armorWool, 0, ]);

Recipes.addShaped({id: 307, count: 1, data: 0}, 
[ "aba", 	
  "aaa", 	
  "aaa" ], ['a', ItemID.ironPlate, 0, 'b', ItemID.armorWool, 0, ]);

Recipes.addShaped({id: 308, count: 1, data: 0}, 
[ "aaa", 	
  "aba", 	
  "a a" ], ['a', ItemID.ironPlate, 0, 'b', ItemID.armorWool, 0, ]);

Recipes.addShaped({id: 309, count: 1, data: 0}, 
[ "b b", 	
  "a a", 	
  "a a" ], ['a', ItemID.ironPlate, 0, 'b', ItemID.armorWool, 0, ]);




// file: 5_stage.js

Recipes.deleteRecipe({id: 276, count: 1, data: 0});

Recipes.deleteRecipe({id: 277, count: 1, data: 0});

Recipes.deleteRecipe({id: 278, count: 1, data: 0});

Recipes.deleteRecipe({id: 279, count: 1, data: 0});

Recipes.deleteRecipe({id: 283, count: 1, data: 0});

Recipes.deleteRecipe({id: 284, count: 1, data: 0});

Recipes.deleteRecipe({id: 285, count: 1, data: 0});

Recipes.deleteRecipe({id: 286, count: 1, data: 0});

Recipes.deleteRecipe({id: 314, count: 1, data: 0});

Recipes.deleteRecipe({id: 315, count: 1, data: 0});

Recipes.deleteRecipe({id: 316, count: 1, data: 0});

Recipes.deleteRecipe({id: 317, count: 1, data: 0});

Recipes.deleteRecipe({id: 293, count: 1, data: 0});

Recipes.deleteRecipe({id: 294, count: 1, data: 0});

Translation.addTranslation("Diamond Cutter Blank", {
ru: "Заготовка резчика для алмазов"
});
IDRegistry.genItemID("saww");
Item.createItem("saww", "Diamond Cutter Blank", {name: "saww", meta: 0}, {stack: 1});

Translation.addTranslation("Diamond Cutter", {
ru: "Резчик для алмазов"
});
IDRegistry.genItemID("saw");
Item.createItem("saw", "Diamond Cutter", {name: "saw", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.saw, 5);

function addRecipeWithCraftingTool(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
		for (var i in field){
			if (field[i].id == tool){
				field[i].data++;
				if (field[i].data >= Item.getMaxDamage(tool)){
					field[i].id = field[i].count = field[i].data = 0;
				}
			}
			else {
				api.decreaseFieldSlot(i);
			}
		}
	});
}

Translation.addTranslation("Blank for sticks", {
ru: "Заготовка для палок"
});
IDRegistry.genItemID("stickw");
Item.createItem("stickw", "Blank for sticks", {name: "stickw", meta: 0}, {stack: 1});

Translation.addTranslation("Iron Rod", {
ru: "Железный стержень"
});
IDRegistry.genItemID("ironStick");
Item.createItem("ironStick", "Iron Rod", {name: "iron_stick", meta: 0}, {stack: 64});

Translation.addTranslation("Iron Sword Handle", {
ru: "Железная ручка для меча"
});
IDRegistry.genItemID("ironSwordHandle");
Item.createItem("ironSwordHandle", "Iron Sword Handle", {name: "iron_sword_handle", meta: 0}, {stack: 1});

Translation.addTranslation("Iron handle for tools", {
ru: "Железная ручка для инструментов"
});
IDRegistry.genItemID("ironToolHandle");
Item.createItem("ironToolHandle", "Iron handle for tools", {name: "iron_tool_handle", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.saww, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.saw, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.rc_planks, 0, 'b', ItemID.hotIron, 0, 'c', ItemID.saww, 0, ]);

Recipes.addShaped({id: ItemID.stickw, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "  b" ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.ironStick, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', 265, 0, 'b', ItemID.stickw, 0, ]);

Recipes.addShaped({id: ItemID.ironSwordHandle, count: 1, data: 0}, 
[ "   ", 	
  "aba", 	
  " a " ], ['a', ItemID.ironStick, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.ironToolHandle, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " a " ], ['a', ItemID.stickw, 0, ]);

Recipes.addShaped({id: 276, count: 1, data: 0}, 
[ "aab", 	
  " c ", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironSwordHandle, 0, 'd', ItemID.sword, 0, ]);

Recipes.addShaped({id: 277, count: 1, data: 0}, 
[ " ab", 	
  " c ", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironToolHandle, 0, 'd', ItemID.shovel, 0, ]);

Recipes.addShaped({id: 278, count: 1, data: 0}, 
[ "aaa", 	
  " cb", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironToolHandle, 0, 'd', ItemID.pickaxe, 0, ]);

Recipes.addShaped({id: 279, count: 1, data: 0}, 
[ "aab", 	
  "ac ", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironToolHandle, 0, 'd', ItemID.axe, 0, ]);

Recipes.addShaped({id: 293, count: 1, data: 0}, 
[ "baa", 	
  " c ", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironToolHandle, 0, 'd', ItemID.hoe, 0, ]);




// file: 6_stage.js

Recipes.deleteRecipe({id: 310, count: 1, data: 0});

Recipes.deleteRecipe({id: 311, count: 1, data: 0});

Recipes.deleteRecipe({id: 312, count: 1, data: 0});

Recipes.deleteRecipe({id: 313, count: 1, data: 0});

Translation.addTranslation("Blank for needle", {
ru: "Заготовка для иглы"
});
IDRegistry.genItemID("needlewew");
Item.createItem("needlewew", "Blank for needle", {name: "needlewew", meta: 0}, {stack: 1});

Translation.addTranslation("Iron Needle", {
ru: "Железная игла"
});
IDRegistry.genItemID("ironNeedle");
Item.createItem("ironNeedle", "Iron Needle", {name: "iron_needle", meta: 0}, {stack: 16});

Translation.addTranslation("Iron needle with thread", {
ru: "Железная игла с нитью"
});
IDRegistry.genItemID("ironNeedlew");
Item.createItem("ironNeedlew", "Iron needle with thread", {name: "iron_needlew", meta: 0}, {stack: 16});

Translation.addTranslation("Improved armor lining", {
ru: "Улучшенная подкладка для брони"
});
IDRegistry.genItemID("armorWoolw");
Item.createItem("armorWoolw", "Improved armor lining", {name: "armor_woolw", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.needlewew, count: 1, data: 0}, 
[ "ab ", 	
  "   ", 	
  "   " ], ['a', ItemID.rc_stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.ironNeedle, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', ItemID.hotIron, 0, 'b', ItemID.needlewew, 0, ]);

Recipes.addShaped({id: ItemID.ironNeedlew, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.ironNeedle, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.armorWoolw, count: 1, data: 0}, 
[ "   ", 	
  "aaa", 	
  " b " ], ['a', ItemID.armorWool, 0, 'b', ItemID.ironNeedlew, 0, ]);

Recipes.addShaped({id: 310, count: 1, data: 0}, 
[ "aaa", 	
  "aba", 	
  "   " ], ['a', 264, 0, 'b', ItemID.armorWoolw, 0, ]);

Recipes.addShaped({id: 311, count: 1, data: 0}, 
[ "aba", 	
  "aaa", 	
  "aaa" ], ['a', 264, 0, 'b', ItemID.armorWoolw, 0, ]);

Recipes.addShaped({id: 312, count: 1, data: 0}, 
[ "aaa", 	
  "aba", 	
  "a a" ], ['a', 264, 0, 'b', ItemID.armorWoolw, 0, ]);

Recipes.addShaped({id: 313, count: 1, data: 0}, 
[ "b b", 	
  "a a", 	
  "a a" ], ['a', 264, 0, 'b', ItemID.armorWoolw, 0, ]);








