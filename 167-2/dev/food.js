IDRegistry.genItemID("fcarrot");
Item.createFoodItem("fcarrot", "baked carrot", {name:"baked_carrot"}, {food:7});
Recipes.addFurnace(391, ItemID.fcarrot, 0);

IDRegistry.genItemID("fbread");
Item.createFoodItem("fbread", "baked bread", {name:"baked_bread"}, {food:10});
Recipes.addFurnace(297, ItemID.fbread, 0);

Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
Recipes.addShaped({id: 351, count: 1, data: 2},[" a ","   ","   "],['a', 81, 0]);

