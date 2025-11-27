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