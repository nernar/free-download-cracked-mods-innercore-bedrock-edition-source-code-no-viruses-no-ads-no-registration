//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

IDRegistry.genItemID("bismuthingot2");
Item.createItem("bismuthingot2", "Crystallized Bismuth Ingot",
{name: "bismuthcrystallizedingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("bismuthmelted");
Item.createItem("bismuthmelted", "Melted Bismuth",
{name: "bismuthmelted", meta: 0}, {stack: 64});
IDRegistry.genItemID("coppermelted");
Item.createItem("coppermelted", "Melted Copper",
{name: "coppermelted", meta: 0}, {stack: 64});
IDRegistry.genItemID("tinmelted");
Item.createItem("tinmelted", "Melted Tin",
{name: "tinmelted", meta: 0}, {stack: 64});
IDRegistry.genItemID("zincmelted");
Item.createItem("zincmelted", "Melted Zinc",
{name: "zincmelted", meta: 0}, {stack: 64});
IDRegistry.genItemID("bronzeingot");
Item.createItem("bronzeingot", "Bronze Ingot",
{name: "bronzeingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("brassingot");
Item.createItem("brassingot", "Brass Ingot",
{name: "brassingot", meta: 0}, {stack: 64});

Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.bismuthingot, ItemID.bismuthmelted, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.copperingot, ItemID.coppermelted, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.tinnugget, ItemID.tinmelted, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.zincnugget, ItemID.zincmelted, 0);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzeingot, count: 1, data: 0}, [
    "aaa", "bbb", " a "], [
      'a', ItemID.coppermelted, 0, 'b', ItemID.tinmelted, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brassingot, count: 1, data: 0}, [
    "aaa", "bbb", " a "], [
      'a', ItemID.coppermelted, 0, 'b', ItemID.zincmelted, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bismuthingot2, count: 1, data: 0}, [
    "   ", "aaa", "   "], [
      'a', ItemID.bismuthmelted, 0]);
});
