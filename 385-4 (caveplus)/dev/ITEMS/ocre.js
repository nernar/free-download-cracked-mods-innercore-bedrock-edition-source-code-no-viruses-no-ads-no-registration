//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.
//OCRE
IDRegistry.genItemID("ocremud");
Item.createItem("ocremud", "Ocre Mud",
{name: "ocremud", meta: 0}, {stack: 64});
IDRegistry.genBlockID("ocredirt");
Block.createBlock("ocredirt", [
  {name: "Ocre Dirt", texture: [["ocredirtred",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ocredirt, "dirt");
Block.setDestroyTime(BlockID.ocredirt, 0.3);
Block.setDestroyLevel("ocredirt", 0);
Block.registerDropFunction("ocredirt", function (coords, id, data, diggingLevel) {
    {return [[ItemID.ocremud, 1 + Math.random() * 3, 0]];
      }  return [];
});
IDRegistry.genBlockID("ocrebricks");
Block.createBlock("ocrebricks", [
  {name: "Ocre Bricks", texture: [["ocrebricks",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ocrebricks, "dirt");
Block.setDestroyTime(BlockID.ocrebricks, 0.5);
Block.setDestroyLevel("ocrebricks", 0);
IDRegistry.genItemID("ocresword");
Item.createItem("ocresword", "Ocre Sword",
{name: "ocresword", meta: 0}, {stack: 1});
IDRegistry.genItemID("ocreaxe");
Item.createItem("ocreaxe", "Ocre Axe",
{name: "ocreaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("ocreshovel");
Item.createItem("ocreshovel", "Ocre Shovel",
{name: "ocreshovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("ocrepickaxe");
Item.createItem("ocrepickaxe", "Ocre Pickaxe",
{name: "ocrepickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("ocrehoe");
Item.createItem("ocrehoe", "Ocre Hoe",
{name: "ocrehoe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ocre", {
  durability: 75, level: 1, efficiency: 1, damage: 3, enchantability: 0});
ToolAPI.setTool(ItemID.ocresword, "ocre", ToolType.sword);
ToolAPI.setTool(ItemID.ocreshovel, "ocre", ToolType.shovel);
ToolAPI.setTool(ItemID.ocrepickaxe, "ocre", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ocreaxe, "ocre", ToolType.axe);
ToolAPI.setTool(ItemID.ocrehoe, "ocre", ToolType.hoe);

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.ocredirt, count: 1, data: 0}, [
    "xx", "xx", "  "], [
      'x', ItemID.ocremud, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.ocrebricks, count: 4, data: 0}, [
    "xx", "xx", "  "], [
      'x', BlockID.ocredirthard, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocresword, count: 1, data: 0}, [
    "x", "x", "a"], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocreshovel, count: 1, data: 0}, [
    "x", "a", "a"], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocrehoe, count: 1, data: 0}, [
    "xx", " a", " a"], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocreaxe, count: 1, data: 0}, [
    "xx", "xa", " a"], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ocrepickaxe, count: 1, data: 0}, [
    "xxx", " a ", " a "], [
      'x', ItemID.ocremud, 0, 'a', 280, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(ItemID.ocremud, 351, 1);
});

IDRegistry.genBlockID("ocredirthard");
Block.createBlock("ocredirthard", [
  {name: "Hardened Ocre Dirt", texture: [["ocredirtredhard",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ocredirt, "stone");
Block.setDestroyTime(BlockID.ocredirt, 1.7);
Block.setDestroyLevel("ocredirt", 0);

Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.ocredirt, BlockID.ocredirthard, 0);
});

//ocre generator in fossil generator due to bug
