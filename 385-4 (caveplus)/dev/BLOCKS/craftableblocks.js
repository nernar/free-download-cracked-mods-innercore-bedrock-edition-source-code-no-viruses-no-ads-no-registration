//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.


//Lithium Lantern
var LANTERN = Block.createSpecialType({
lightlevel: 15,
lightopacity: 0
});
IDRegistry.genBlockID("lithiumlantern");
Block.createBlock("lithiumlantern", [
  {name: "Lithium Lantern", texture: [["lithiumlantern",0]], inCreative: true}
], LANTERN);
ToolAPI.registerBlockMaterial(BlockID.lithiumlantern, "stone");
Block.setDestroyTime(BlockID.lithiumlantern, 0.5);
Block.setDestroyLevel("lithiumlantern", 0.5);
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.lithiumlantern, count: 1, data: 0}, [
    "xxx", "xax", "xxx"], [
      'x', ItemID.lithiumdust, 0, 'a', 331, 0]);
});
Block.registerDropFunction("lithiumlantern", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 1) {
        return [[ItemID.lithiumdust, 2 + Math.random() * 5, 0]];
    }
    return [];
});

//Glass
var GLASS = Block.createSpecialType({
renderType: 4,
lightopacity: 0
});
IDRegistry.genBlockID("amberglass");
Block.createBlock("amberglass", [
  {name: "Amber Glass", texture: [["amberglass",0]], inCreative: true}
], GLASS);
ToolAPI.registerBlockMaterial(BlockID.amberglass, "stone");
Block.setDestroyTime(BlockID.amberglass, 0.1);
Block.registerDropFunction("amberglass", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 20) {
        return [[BlockID.amberglass, 1 + Math.random() * 5, 0]];
    }
    return [];
});
IDRegistry.genBlockID("hardglass");
Block.createBlock("hardglass", [
  {name: "Hard Glass", texture: [["hardglass",0]], inCreative: true}
], GLASS);
ToolAPI.registerBlockMaterial(BlockID.hardglass, "stone");
Block.setDestroyTime(BlockID.hardglass, 0.4);
Block.registerDropFunction("hardglass", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 20) {
        return [[BlockID.hardglass, 1 + Math.random() * 5, 0]];
    }
    return [];
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.hardglass, count: 1, data: 0}, [
    "aaa", "axa", "aaa"], [
      'x', 20, 0, 'a', ItemID.titaniumingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.amberglass, count: 1, data: 0}, [
    "aaa", "axa", "aaa"], [
      'x', 20, 0, 'a', ItemID.amber, 0]);
});
