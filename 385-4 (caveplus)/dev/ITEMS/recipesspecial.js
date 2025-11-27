//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//AMBER SPECIAL RECIPES
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 10}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 288, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 11}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 325, 1]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 14}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 352, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 15}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 388, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 16}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 40, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: 383, count: 2, data: 17}, [
    " x ", "xax", " x "], [
      'x', ItemID.amber, 0, 'a', 351, 0]);
});

//salted dishes
IDRegistry.genItemID("beetrootsalted");
Item.createFoodItem("beetrootsalted", "Delicious Beetroot Soup", {name: "beetroot_soup", meta: 0}, {food: 8});
IDRegistry.genItemID("rabbitsalted");
Item.createFoodItem("rabbitsalted", "Delicious Rabbit Stew", {name: "rabbit_stew", meta: 0}, {food: 8});
IDRegistry.genItemID("mushroomsalted");
Item.createFoodItem("mushroomsalted", "Delicious Mushroom Stew", {name: "mushroom_stew", meta: 0}, {food: 8});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.beetrootsalted, count: 1, data: 0}, [
    "x", "x", "b"], [
      'x', ItemID.salt, 0, 'b', 459, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.rabbitsalted, count: 1, data: 0}, [
    "x", "x", "b"], [
      'x', ItemID.salt, 0, 'b', 413, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.mushroomsalted, count: 1, data: 0}, [
    "x", "x", "b"], [
      'x', ItemID.salt, 0, 'b', 282, 0]);
});
//last chance food
IDRegistry.genItemID("lastchance");
Item.createFoodItem("lastchance", "Last Chance", {name: "lastchance", meta: 0}, {food: 2});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.lastchance, count: 1, data: 0}, [
    " b ", "cbc", " a "], [
      'a', 281, 0, 'b', 367, 0, 'c', ItemID.salt, 0]);
});
