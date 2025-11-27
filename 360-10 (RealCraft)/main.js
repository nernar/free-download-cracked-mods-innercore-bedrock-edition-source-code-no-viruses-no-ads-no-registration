/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/

// file: start.js

Recipes.deleteRecipe({id: 268, count: 1, data: 0});

Recipes.deleteRecipe({id: 269, count: 1, data: 0});

Recipes.deleteRecipe({id: 270, count: 1, data: 0});

Recipes.deleteRecipe({id: 271, count: 1, data: 0});

Recipes.deleteRecipe({id: 290, count: 1, data: 0});

IDRegistry.genItemID("woodenSword");
Item.createItem("woodenSword", "Клинок деревянного меча", {name: "wooden_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("woodenAxe");
Item.createItem("woodenAxe", "Лезвие деревянного топора", {name: "wooden_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("woodenShovel");
Item.createItem("woodenShovel", "Верх деревянной лопаты", {name: "wooden_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("woodenPickaxe");
Item.createItem("woodenPickaxe", "Верх деревянной кирки", {name: "wooden_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("woodenHoe");
Item.createItem("woodenHoe", "Верх деревянной мотыги", {name: "wooden_hoe", meta: 0}, {stack: 1});

IDRegistry.genItemID("swordHandle");
Item.createItem("swordHandle", "Ручка для меча", {name: "sword_handle", meta: 0}, {stack: 1});

IDRegistry.genItemID("toolHandle");
Item.createItem("toolHandle", "Ручка для инструментов", {name: "tool_handle", meta: 0}, {stack: 4});

IDRegistry.genItemID("knife");
Item.createItem("knife", "Нож", {name: "knife", meta: 0}, {stack: 1});
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

Recipes.addShaped({id: 287, count: 9, data: 0}, 
[ "   ", 	
  " a ", 	
  "   " ], ['a', 35, 0, ]);

// file: 1_stage.js

Recipes.deleteRecipe({id: 298, count: 1, data: 0});

Recipes.deleteRecipe({id: 299, count: 1, data: 0});

Recipes.deleteRecipe({id: 300, count: 1, data: 0});

Recipes.deleteRecipe({id: 301, count: 1, data: 0});

IDRegistry.genItemID("needle");
Item.createItem("needle", "Игла", {name: "needle", meta: 0}, {stack: 16});

IDRegistry.genItemID("needlew");
Item.createItem("needlew", "Игла с нитью", {name: "needlew", meta: 0}, {stack: 16});

IDRegistry.genItemID("lead");
Item.createItem("lead", "Высушенная кожа", {name: "lead", meta: 0}, {stack: 64});

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

IDRegistry.genItemID("stonecutter");
Item.createItem("stonecutter", "Камнерез", {name: "stonecutter", meta: 0}, {stack: 1});

IDRegistry.genItemID("stoneSword");
Item.createItem("stoneSword", "Клинок каменного меча", {name: "w", meta: 0}, {stack: 1});

IDRegistry.genItemID("stoneAxe");
Item.createItem("stoneAxe", "Лезвие каменного топора", {name: "ww", meta: 0}, {stack: 1});

IDRegistry.genItemID("stoneShovel");
Item.createItem("stoneShovel", "Верх каменной лопаты", {name: "www", meta: 0}, {stack: 1});

IDRegistry.genItemID("stonePickaxe");
Item.createItem("stonePickaxe", "Верх каменной кирки", {name: "wwww", meta: 0}, {stack: 1});

IDRegistry.genItemID("stoneHoe");
Item.createItem("stoneHoe", "Верх каменной мотыги", {name: "wwwww", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.stonecutter, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "bbb" ], ['a', 4, 0, 'b', 280, 0, ]);

Recipes.addShaped({id: ItemID.stoneSword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneAxe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneShovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stonePickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

Recipes.addShaped({id: ItemID.stoneHoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 4, 0, ]);

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

IDRegistry.genItemID("planks");
Item.createItem("planks", "Доска", {name: "planks", meta: 0}, {stack: 64});

IDRegistry.genItemID("swordHandlew");
Item.createItem("swordHandlew", "Улучшеная ручка меча", {name: "sword_handlew", meta: 0}, {stack: 1});

IDRegistry.genItemID("toolHandlew");
Item.createItem("toolHandlew", "Улучшеная ручка для инструментов", {name: "tool_handlew", meta: 0}, {stack: 1});

IDRegistry.genItemID("sword");
Item.createItem("sword", "Заготовка для меча", {name: "harvesting", meta: 0}, {stack: 1});

IDRegistry.genItemID("hotIron");
Item.createItem("hotIron", "Раскаленный железный слиток", {name: "hot_iron", meta: 0}, {stack: 64});

IDRegistry.genItemID("axe");
Item.createItem("axe", "Заготовка для топора", {name: "harvestingq", meta: 0}, {stack: 1});

IDRegistry.genItemID("shovel");
Item.createItem("shovel", "Заготовка для лопаты", {name: "harvestingw", meta: 0}, {stack: 1});

IDRegistry.genItemID("pickaxe");
Item.createItem("pickaxe", "Заготовка для кирки", {name: "harvestinge", meta: 0}, {stack: 1});

IDRegistry.genItemID("hoe");
Item.createItem("hoe", "Заготовка для мотыги", {name: "harvestingr", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 0, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 1, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 2, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 3, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 4, ]);

Recipes.addShaped({id: ItemID.planks, count: 12, data: 0}, 
[ "   ", 	
  " a ", 	
  "  a" ], ['a', 5, 5, ]);

Recipes.addShaped({id: ItemID.swordHandlew, count: 1, data: 0}, 
[ " b ", 	
  "aba", 	
  " a " ], ['a', ItemID.planks, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.toolHandlew, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " a " ], ['a', ItemID.planks, 0, ]);

Recipes.addFurnace(265, 0, ItemID.hotIron, 0);

Recipes.deleteRecipe({id: 267, count: 1, data: 0});

Recipes.deleteRecipe({id: 256, count: 1, data: 0});

Recipes.deleteRecipe({id: 257, count: 1, data: 0});

Recipes.deleteRecipe({id: 258, count: 1, data: 0});

Recipes.deleteRecipe({id: 292, count: 1, data: 0});

Recipes.addShaped({id: ItemID.sword, count: 1, data: 0}, 
[ "b  ", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.axe, count: 1, data: 0}, 
[ " b ", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.shovel, count: 1, data: 0}, 
[ "  b", 	
  " a ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.pickaxe, count: 1, data: 0}, 
[ "   ", 	
  "ba ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.hoe, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

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

IDRegistry.genItemID("hammerQ");
Item.createItem("hammerQ", "Заготовка для молотка", {name: "hammerq", meta: 0}, {stack: 1});

IDRegistry.genItemID("hammer");
Item.createItem("hammer", "Молоток", {name: "hammer", meta: 0}, {stack: 1});
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

IDRegistry.genItemID("ironPlate");
Item.createItem("ironPlate", "Железная пластина", {name: "iron_plate", meta: 0}, {stack: 64});

IDRegistry.genItemID("boneNeedle");
Item.createItem("boneNeedle", "Костная игла", {name: "bone_needle", meta: 0}, {stack: 16});

IDRegistry.genItemID("boneNeedlew");
Item.createItem("boneNeedlew", "Костная игла с нитью", {name: "bone_needlew", meta: 0}, {stack: 16});

IDRegistry.genItemID("armorWool");
Item.createItem("armorWool", "Подстилка для брони", {name: "armor_wool", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.hammerQ, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "b  " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.hammer, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.hotIron, 0, 'b', ItemID.toolHandlew, 0, 'c', ItemID.hammerQ, 0, ]);

Callback.addCallback("PreLoaded", function(){
	addRecipeWithCraftingTool({id: ItemID.ironPlate, count: 1, data: 0}, [{id: ItemID.hotIron, data: 0}], ItemID.hammer);
});

Recipes.addShaped({id: ItemID.boneNeedle, count: 4, data: 0}, 
[ "   ", 	
  " a ", 	
  " a " ], ['a', 352, 0, ]);

Recipes.addShaped({id: ItemID.boneNeedlew, count: 1, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', ItemID.boneNeedle, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: ItemID.armorWool, count: 2, data: 0}, 
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

IDRegistry.genItemID("saww");
Item.createItem("saww", "Заготовка резчика для алмазов", {name: "saww", meta: 0}, {stack: 1});

IDRegistry.genItemID("saw");
Item.createItem("saw", "Резчик для алмазов", {name: "saw", meta: 0}, {stack: 1});
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

IDRegistry.genItemID("stickw");
Item.createItem("stickw", "Заготовка для палок", {name: "stickw", meta: 0}, {stack: 1});

IDRegistry.genItemID("ironStick");
Item.createItem("ironStick", "Железный стержень", {name: "iron_stick", meta: 0}, {stack: 64});

IDRegistry.genItemID("ironSwordHandle");
Item.createItem("ironSwordHandle", "Железная ручка для меча", {name: "iron_sword_handle", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.saww, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.saw, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  " c " ], ['a', ItemID.planks, 0, 'b', ItemID.hotIron, 0, 'c', ItemID.saww, 0, ]);

Recipes.addShaped({id: ItemID.stickw, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  "  b" ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.ironStick, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', ItemID.hotIron, 0, 'b', ItemID.stickw, 0, ]);

Recipes.addShaped({id: ItemID.ironSwordHandle, count: 1, data: 0}, 
[ "bb ", 	
  "aba", 	
  " a " ], ['a', ItemID.ironStick, 0, 'b', 287, 0, ]);

Recipes.addShaped({id: 276, count: 1, data: 0}, 
[ "aab", 	
  " c ", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironSwordHandle, 0, 'd', ItemID.sword, 0, ]);

Recipes.addShaped({id: 277, count: 1, data: 0}, 
[ " ab", 	
  " c ", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironStick, 0, 'd', ItemID.shovel, 0, ]);

Recipes.addShaped({id: 278, count: 1, data: 0}, 
[ "aaa", 	
  " cb", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironStick, 0, 'd', ItemID.pickaxe, 0, ]);

Recipes.addShaped({id: 279, count: 1, data: 0}, 
[ "aab", 	
  "ac ", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironStick, 0, 'd', ItemID.axe, 0, ]);

Recipes.addShaped({id: 293, count: 1, data: 0}, 
[ "baa", 	
  " c ", 	
  " d " ], ['a', 264, 0, 'b', ItemID.saw, 0, 'c', ItemID.ironStick, 0, 'd', ItemID.hoe, 0, ]);

// file: 6_stage.js

Recipes.deleteRecipe({id: 310, count: 1, data: 0});

Recipes.deleteRecipe({id: 311, count: 1, data: 0});

Recipes.deleteRecipe({id: 312, count: 1, data: 0});

Recipes.deleteRecipe({id: 313, count: 1, data: 0});

IDRegistry.genItemID("needlewew");
Item.createItem("needlewew", "Заготовка для иглы", {name: "needlewew", meta: 0}, {stack: 1});

IDRegistry.genItemID("ironNeedle");
Item.createItem("ironNeedle", "Железная игла", {name: "iron_needle", meta: 0}, {stack: 16});

IDRegistry.genItemID("ironNeedlew");
Item.createItem("ironNeedlew", "Железная игла с нитью", {name: "iron_needlew", meta: 0}, {stack: 16});

IDRegistry.genItemID("armorWoolw");
Item.createItem("armorWoolw", "Улучшенная подкладка для брони", {name: "armor_woolw", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.needlewew, count: 1, data: 0}, 
[ "ab ", 	
  "   ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

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

Recipes.deleteRecipe({id: 54, count: 1, data: 0});

Recipes.deleteRecipe({id: 61, count: 1, data: 0});

Recipes.deleteRecipe({id: 355, count: 1, data: 0});

IDRegistry.genItemID("chestw");
Item.createItem("chestw", "Крышка сундука", {name: "chestw", meta: 0}, {stack: 1});

IDRegistry.genItemID("chw");
Item.createItem("chw", "Заготовка для дверной петли", {name: "chw", meta: 0}, {stack: 1});

IDRegistry.genItemID("ch");
Item.createItem("ch", "Дверная петля", {name: "ch", meta: 0}, {stack: 16});

IDRegistry.genItemID("chestwew");
Item.createItem("chestwew", "Низ сундука", {name: "chestwew", meta: 0}, {stack: 1});

IDRegistry.genItemID("pillowew");
Item.createItem("pillowew", "Пустая подушка", {name: "pillowew", meta: 0}, {stack: 16});

IDRegistry.genItemID("pillow");
Item.createItem("pillow", "Подушка", {name: "pillow", meta: 0}, {stack: 1});

IDRegistry.genItemID("blanket");
Item.createItem("blanket", "Одеяло", {name: "blanket", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.chestw, count: 1, data: 0}, 
[ "aaa", 	
  "a a", 	
  "   " ], ['a', ItemID.planks, 0, ]);

Recipes.addShaped({id: ItemID.chw, count: 1, data: 0}, 
[ "a b", 	
  "   ", 	
  "   " ], ['a', ItemID.stonecutter, 0, 'b', 1, 0, ]);

Recipes.addShaped({id: ItemID.ch, count: 1, data: 0}, 
[ "   ", 	
  " a ", 	
  " b " ], ['a', ItemID.hotIron, 0, 'b', ItemID.chw, 0, ]);

Recipes.addShaped({id: ItemID.chestwew, count: 1, data: 0}, 
[ "   ", 	
  "a a", 	
  "aaa" ], ['a', ItemID.planks, 0, ]);

Recipes.addShaped({id: 54, count: 1, data: 0}, 
[ " a ", 	
  "b b", 	
  " c " ], ['a', ItemID.chestw, 0, 'b', ItemID.ch, 0, 'c', ItemID.chestwew, 0, ]);

Recipes.addShaped({id: 61, count: 1, data: 0}, 
[ "aaa", 	
  "a a", 	
  "aba" ], ['a', 337, 0, 'b', 50, 0, ]);

Recipes.addShaped({id: ItemID.pillowew, count: 1, data: 0}, 
[ "aab", 	
  "aa ", 	
  "   " ], ['a', ItemID.armorWool, 0, 'b', ItemID.boneNeedlew, 0, ]);

Recipes.addShaped({id: ItemID.pillow, count: 1, data: 0}, 
[ "aaa", 	
  "aba", 	
  "aaa" ], ['a', 288, 0, 'b', ItemID.pillowew, 0, ]);

Recipes.addShaped({id: ItemID.blanket, count: 1, data: 0}, 
[ " a ", 	
  "bbb", 	
  "   " ], ['a', ItemID.boneNeedlew, 0, 'b', ItemID.armorWool, 0, ]);

Recipes.addShaped({id: 355, count: 1, data: 0}, 
[ "ab ", 	
  "ccc", 	
  "c c" ], ['a', ItemID.pillow, 0, 'b', ItemID.blanket, 0, 'c', ItemID.planks, 0, ]);