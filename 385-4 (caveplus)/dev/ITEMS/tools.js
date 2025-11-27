//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//BRONZE
IDRegistry.genItemID("bronzesword");
Item.createItem("bronzesword", "Bronze Sword",
{name: "bronzesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("bronze", {
  durability: 250, level: 2, efficiency: 19, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.bronzesword, "bronze", ToolType.sword);
IDRegistry.genItemID("bronzeshovel");
Item.createItem("bronzeshovel", "Bronze Shovel",
{name: "bronzeshovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bronzeshovel, "bronze", ToolType.shovel);
IDRegistry.genItemID("bronzepickaxe");
Item.createItem("bronzepickaxe", "Bronze Pickaxe",
{name: "bronzepickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bronzepickaxe, "bronze", ToolType.pickaxe);
IDRegistry.genItemID("bronzeaxe");
Item.createItem("bronzeaxe", "Bronze Axe",
{name: "bronzeaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bronzeaxe, "bronze", ToolType.axe);
IDRegistry.genItemID("bronzehoe");
Item.createItem("bronzehoe", "Bronze Hoe",
{name: "bronzehoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.bronzehoe, "bronze", ToolType.hoe);

//BRASS
IDRegistry.genItemID("brasssword");
Item.createItem("brasssword", "Brass Sword",
{name: "brasssword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("brass", {
  durability: 250, level: 2, efficiency: 19, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.brasssword, "brass", ToolType.sword);
IDRegistry.genItemID("brassshovel");
Item.createItem("brassshovel", "Brass Shovel",
{name: "brassshovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.brassshovel, "brass", ToolType.shovel);
IDRegistry.genItemID("brasspickaxe");
Item.createItem("brasspickaxe", "Brass Pickaxe",
{name: "brasspickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.brasspickaxe, "brass", ToolType.pickaxe);
IDRegistry.genItemID("brassaxe");
Item.createItem("brassaxe", "Brass Axe",
{name: "brassaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.brassaxe, "brass", ToolType.axe);
IDRegistry.genItemID("brasshoe");
Item.createItem("brasshoe", "Brass Hoe",
{name: "brasshoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.brasshoe, "brass", ToolType.hoe);

//BASALT
IDRegistry.genItemID("basaltsword");
Item.createItem("basaltsword", "Basalt Sword",
{name: "basaltsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("basalt", {
  durability: 280, level: 3, efficiency: 20, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.basaltsword, "basalt", ToolType.sword);
IDRegistry.genItemID("basaltshovel");
Item.createItem("basaltshovel", "Basalt Shovel",
{name: "basaltshovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.basaltshovel, "basalt", ToolType.shovel);
IDRegistry.genItemID("basaltpickaxe");
Item.createItem("basaltpickaxe", "Basalt Pickaxe",
{name: "basaltpickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.basaltpickaxe, "basalt", ToolType.pickaxe);
IDRegistry.genItemID("basaltaxe");
Item.createItem("basaltaxe", "Basalt Axe",
{name: "basaltaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.basaltaxe, "basalt", ToolType.axe);
IDRegistry.genItemID("basalthoe");
Item.createItem("basalthoe", "Basalt Hoe",
{name: "basalthoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.basalthoe, "basalt", ToolType.hoe);

//TITANIUM
IDRegistry.genItemID("titaniumsword");
Item.createItem("titaniumsword", "Titanium Sword",
{name: "titaniumsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("titanium", {
  durability: 1100, level: 4, efficiency: 29, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.titaniumsword, "titanium", ToolType.sword);
IDRegistry.genItemID("titaniumshovel");
Item.createItem("titaniumshovel", "Titanium Shovel",
{name: "titaniumshovel", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.titaniumshovel, "titanium", ToolType.shovel);
IDRegistry.genItemID("titaniumpickaxe");
Item.createItem("titaniumpickaxe", "Titanium Pickaxe",
{name: "titaniumpickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.titaniumpickaxe, "titanium", ToolType.pickaxe);
IDRegistry.genItemID("titaniumaxe");
Item.createItem("titaniumaxe", "Titanium Axe",
{name: "titaniumaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.titaniumaxe, "titanium", ToolType.axe);
IDRegistry.genItemID("titaniumhoe");
Item.createItem("titaniumhoe", "Titanium Hoe",
{name: "titaniumhoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.titaniumhoe, "titanium", ToolType.hoe);

//Recipes
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzesword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brasssword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basaltsword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumsword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzeshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brassshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basaltshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzehoe, count: 1, data: 0}, [
    "xx ", " a ", " a "], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brasshoe, count: 1, data: 0}, [
    "xx ", " a ", " a "], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basalthoe, count: 1, data: 0}, [
    "xx ", " a ", " a "], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumhoe, count: 1, data: 0}, [
    "xx ", " a ", " a "], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzeaxe, count: 1, data: 0}, [
    "xx ", "xa ", " a "], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brassaxe, count: 1, data: 0}, [
    "xx ", "xa ", " a "], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basaltaxe, count: 1, data: 0}, [
    "xx ", "xa ", " a "], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumaxe, count: 1, data: 0}, [
    "xx ", "xa ", " a "], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.bronzepickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', ItemID.bronzeingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.brasspickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', ItemID.brassingot, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.basaltpickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', BlockID.basaltcobble, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.titaniumpickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', ItemID.titaniumingot, 0, 'a', 280, 0]);
});
