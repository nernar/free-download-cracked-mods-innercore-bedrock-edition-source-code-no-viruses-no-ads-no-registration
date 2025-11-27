//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//Metal.js
IDRegistry.genBlockID("copperblock");
Block.createBlock("copperblock", [
  {name: "Block of Copper", texture: [["copperblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.copperblock, "stone");
Block.setDestroyTime(BlockID.copperblock, 3);
Block.setDestroyLevel("copperblock", 2);

IDRegistry.genBlockID("brassblock");
Block.createBlock("brassblock", [
  {name: "Block of Brass", texture: [["brassblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brassblock, "stone");
Block.setDestroyTime(BlockID.brassblock, 3);
Block.setDestroyLevel("brassblock", 2);

IDRegistry.genBlockID("titaniumblock");
Block.createBlock("titaniumblock", [
  {name: "Block of Titanium", texture: [["titaniumblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.titaniumblock, "stone");
Block.setDestroyTime(BlockID.titaniumblock, 3);
Block.setDestroyLevel("titaniumblock", 2);

IDRegistry.genBlockID("bronzeblock");
Block.createBlock("bronzeblock", [
  {name: "Block of Bronze", texture: [["bronzeblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bronzeblock, "stone");
Block.setDestroyTime(BlockID.bronzeblock, 3);
Block.setDestroyLevel("bronzeblock", 2);

IDRegistry.genBlockID("lithiumblock");
Block.createBlock("lithiumblock", [
  {name: "Block of Lithium", texture: [["lithiumblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.lithiumblock, "stone");
Block.setDestroyTime(BlockID.lithiumblock, 3);
Block.setDestroyLevel("lithiumblock", 2);

IDRegistry.genBlockID("bismuthblock2");
Block.createBlock("bismuthblock2", [
  {name: "Block of Crystallized Bismuth", texture: [["bismuthcrystallizedblock",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bismuthblock2, "stone");
Block.setDestroyTime(BlockID.bismuthblock2, 3);
Block.setDestroyLevel("bismuthblock2", 2);

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.copperblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.copperingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.brassblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.brassingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.bronzeblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.bronzeingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.titaniumblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.titaniumingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.lithiumblock, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.lithiumingot, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.bismuthblock2, count: 1, data: 0}, [
    "xxx", "xxx", "xxx"], [
      'x', ItemID.bismuthingot2, 0]);
});
