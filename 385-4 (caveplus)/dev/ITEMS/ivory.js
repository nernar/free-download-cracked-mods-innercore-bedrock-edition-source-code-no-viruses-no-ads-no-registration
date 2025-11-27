//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//ivory
IDRegistry.genItemID("ivory");
Item.createItem("ivory", "Ivory",
{name: "ivory", meta: 0}, {stack: 64});
IDRegistry.genItemID("ivoryrod");
Item.createItem("ivoryrod", "Ivory Rod",
{name: "ivoryrod", meta: 0}, {stack: 64});
IDRegistry.genBlockID("ivoryblock");
Block.createBlock("ivoryblock", [
  {name: "Ivory Block", texture: [["ivoryblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ivoryblock, "stone");
Block.setDestroyTime(BlockID.ivoryblock, 2.5);
Block.setDestroyLevel("ivoryblock", 1);
IDRegistry.genBlockID("ivorypillar");
Block.createBlock("ivorypillar", [
  {name: "Ivory Pillar", texture: [["ivorypillartop",0],["ivorypillartop",0],["ivorypillar",0],
  ["ivorypillar",0],["ivorypillar",0],["ivorypillar",0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ivorypillar, "stone");
Block.setDestroyTime(BlockID.ivorypillar, 2.5);
Block.setDestroyLevel("ivorypillar", 1);
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.ivoryblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.ivory, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.ivorypillar, count: 2, data: 0}, [
    "x", "x", " "], [
      'x', BlockID.ivoryblock, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivoryrod, count: 1, data: 0}, [
    "x", "x", " "], [
      'x', ItemID.ivory, 0]);
});
ToolAPI.addToolMaterial("ivory", {
  durability: 400, level: 3, efficiency: 28, damage: 7, enchantability: 14});
IDRegistry.genItemID("ivorysword");
IDRegistry.genItemID("ivorypickaxe");
IDRegistry.genItemID("ivoryshovel");
IDRegistry.genItemID("ivoryaxe");
IDRegistry.genItemID("ivoryhoe");
Item.createItem("ivorysword", "Ivory Sword",
{name: "ivorysword", meta: 0}, {stack: 1});
Item.createItem("ivorypickaxe", "Ivory Pickaxe",
{name: "ivorypickaxe", meta: 0}, {stack: 1});
Item.createItem("ivoryshovel", "Ivory Shovel",
{name: "ivoryshovel", meta: 0}, {stack: 1});
Item.createItem("ivoryaxe", "Ivory Axe",
{name: "ivoryaxe", meta: 0}, {stack: 1});
Item.createItem("ivoryhoe", "Ivory Hoe",
{name: "ivoryhoe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.ivorysword, "ivory", ToolType.sword);
ToolAPI.setTool(ItemID.ivoryshovel, "ivory", ToolType.shovel);
ToolAPI.setTool(ItemID.ivorypickaxe, "ivory", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ivoryaxe, "ivory", ToolType.axe);
ToolAPI.setTool(ItemID.ivoryhoe, "ivory", ToolType.hoe);
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivorysword, count: 1, data: 0}, [
    "a", "a", "b"], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivoryshovel, count: 1, data: 0}, [
    "a", "b", "b"], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivoryaxe, count: 1, data: 0}, [
    "aa", "ab", " b"], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivorypickaxe, count: 1, data: 0}, [
    "aaa", " b ", " b "], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: ItemID.ivoryhoe, count: 1, data: 0}, [
    "aa", " b", " b"], [
      'a', ItemID.ivory, 0, 'b', ItemID.ivoryrod, 0]);
});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivorysword){
		 Entity.addEffect(Player.get(), 10, 0, 50, true, false);
		}
		});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivoryshovel){
		 Entity.addEffect(Player.get(), 10, 0, 50, true, false);
		}
		});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivorypickaxe){
		 Entity.addEffect(Player.get(), 10, 0, 50, true, false);
		}
		});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivoryhoe){
		 Entity.addEffect(Player.get(), 10, 0, 50, false, false);
		}
		});
Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem()
  var pos = Player.getPosition()
	if(item.id == ItemID.ivoryaxe){
		 Entity.addEffect(Player.get(), 10, 0, 50, false, false);
		}
		});
