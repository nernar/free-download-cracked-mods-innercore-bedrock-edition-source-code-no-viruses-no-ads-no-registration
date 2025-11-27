/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/





IDRegistry.genItemID("friedEgg");
Item.createFoodItem("friedEgg", "Fried Egg", {name:"fried_egg"}, {food:2});

IDRegistry.genItemID("cheese");
Item.createFoodItem("cheese", "Cheese", {name:"cheese"}, {food:3});

IDRegistry.genItemID("eggScrambled");
Item.createFoodItem("eggScrambled", "Scrambled Eggs", {name:"eggs_scrambled"}, {food:6});

IDRegistry.genItemID("eggScrambledCheese");
Item.createFoodItem("eggScrambledCheese", "Cheese Scrambled Eggs", {name:"eggs_scrambled_cheese"}, {food:10});

IDRegistry.genItemID("eggScrambledBacon");
Item.createFoodItem("eggScrambledBacon", "Scrambled Eggs and Bacon", {name:"eggs_and_bacon"}, {food:20});

IDRegistry.genItemID("eggScrambledBeef");
Item.createFoodItem("eggScrambledBeef", "Scrambled Eggs and Beef", {name:"eggs_and_beef"}, {food:20});

IDRegistry.genItemID("mushroomAndCheeseOmelette");
Item.createFoodItem("mushroomAndCheeseOmelette", "Mushroom and Cheese Omelette", {name:"eggs_mushroom_omelette"}, {food:20});

IDRegistry.genItemID("bread");
Item.createItem("bread", "Bread", {name: "food_bread", meta: 0}, {stack: 64});

IDRegistry.genItemID("toast");
Item.createFoodItem("toast", "Toast", {name:"toast"}, {food:2});

IDRegistry.genItemID("scrambledEggSandwich");
Item.createFoodItem("scrambledEggSandwich", "Scrambled Egg Sandwich", {name:"eggs_sandwich"}, {food:20});

IDRegistry.genItemID("friedEggSandwich");
Item.createFoodItem("friedEggSandwich", "Fried Egg Sandwich", {name:"eggs_sandwich_fried"}, {food:20});



Recipes.addFurnace(344, ItemID.friedEgg, 0)
Recipes.addFurnace(ItemID.bread, ItemID.toast, 0)





Recipes.addShaped({id: ItemID.cheese, count: 1, data: 0}, [
	"ab ",
	"   ",
	"   "
], ['a', 351, 11, 'b', 325, 1]);

Recipes.addShaped({id: ItemID.eggScrambled, count: 1, data: 0}, [
	"aa ",
	"ab ",
	"   "
], ['a', 344, 0, 'b', 281, 0]);

Recipes.addShaped({id: ItemID.eggScrambledBacon, count: 1, data: 0}, [
	"aaa",
	"cb ",
	"   "
], ['a', 344, 0, 'b', 281, 0, 'c', 319, 0]);

Recipes.addShaped({id: ItemID.eggScrambledBeef, count: 1, data: 0}, [
	"aaa",
	"cb ",
	"   "
], ['a', 344, 0, 'b', 281, 0, 'c', 363, 0]);

Recipes.addShaped({id: ItemID.eggScrambledCheese, count: 1, data: 0}, [
	"aaa",
	"bc ",
	"   "
], ['a', 344, 0, 'b', 281, 0, 'c', ItemID.cheese, 0]);

Recipes.addShaped({id: ItemID.mushroomAndCheeseOmelette, count: 1, data: 0}, [
	"aaa",
	"cb ",
	"   "
], ['a', 344, 0, 'b', 39, 0, 'c', ItemID.cheese, 0]);

Recipes.addShaped({id: ItemID.mushroomAndCheeseOmelette, count: 1, data: 0}, [
	"aaa",
	"cb ",
	"   "
], ['a', 344, 0, 'b', 40, 0, 'c', ItemID.cheese, 0]);

Recipes.addShaped({id: ItemID.bread, count: 8, data: 0}, [
	"aa ",
	"aa ",
	"   "
], ['a', 296, 0]);

Recipes.addShaped({id: ItemID.scrambledEggSandwich, count: 1, data: 0}, [
	"ab ",
	"b  ",
	"   "
], ['a', 344, 0, 'b', ItemID.toast, 0]);

Recipes.addShaped({id: ItemID.friedEggSandwich, count: 1, data: 0}, [
	"ab ",
	"b  ",
	"   "
], ['a', ItemID.friedEgg, 0, 'b', ItemID.toast, 0]);