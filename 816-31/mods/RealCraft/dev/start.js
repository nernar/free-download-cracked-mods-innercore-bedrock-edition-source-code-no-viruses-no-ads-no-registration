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
