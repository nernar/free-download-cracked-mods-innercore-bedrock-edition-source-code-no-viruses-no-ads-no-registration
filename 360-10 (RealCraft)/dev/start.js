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