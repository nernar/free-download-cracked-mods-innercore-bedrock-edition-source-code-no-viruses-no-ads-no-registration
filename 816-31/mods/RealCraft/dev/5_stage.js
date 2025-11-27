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
