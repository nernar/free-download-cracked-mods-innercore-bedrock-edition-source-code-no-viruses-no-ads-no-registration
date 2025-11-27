/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: main.js

importLib("ENV", "*");

IDRegistry.genItemID("cannedmushroom")

IDRegistry.genItemID("cannedcow")

IDRegistry.genItemID("cannedapple");

IDRegistry.genItemID("cannnedbeetroot");

IDRegistry.genItemID("empty");

Item.createFoodItem("cannedapple", "Canned Apples", {name: "applecons", meta: 0}, {food: 8, stack: 1});

Item.createFoodItem("cannnedbeetroot", "Canned Beetroots", {name: "beetrootcons", meta: 0}, {food: 12, stack: 1});

Recipes.addShaped({id: ItemID.cannedapple, count: 1, data: 0}, [
		"b",
		"a",
		"b"], ['a', 260, 0, 'b', 265, 0]);
	
	Recipes.addShaped({id: ItemID.cannnedbeetroot, count: 1, data: 0}, [
		"b",
		"a",
		"b"], ['a', 457, 0, 'b', 265, 0]);
	
Item.createFoodItem("cannedcow", "Canned Cooked Cow", {name: "cowcons", meta: 0}, {stack: 1, food: 14});
Recipes.addShaped({id: ItemID.cannedcow, count: 1, data: 0}, [
		"b",
		"a",
		"b"], ['a', 364, 0, 'b', 265, 0]);
	
	Item.createFoodItem("cannedmushroom", "Canned mushroom", {name: "mushcons", meta: 0}, {stack: 1, food: 11});
	
	Recipes.addShaped({id: ItemID.cannedmushroom, count: 1, data: 0}, [
		"b",
		"a",
		"b"], ['a', 43, 5, 'b', 265, 0, 'c', 43, 6]);
	
	Recipes.addShaped({id: ItemID.cannedmushroom, count: 1, data: 0}, [
		"b",
		"c",
		"b"], ['a', 43, 5, 'b', 265, 0, 'c', 43, 6]);
	




