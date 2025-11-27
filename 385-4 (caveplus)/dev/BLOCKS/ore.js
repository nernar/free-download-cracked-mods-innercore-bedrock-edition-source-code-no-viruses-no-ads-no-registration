//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//Ores
IDRegistry.genBlockID("copperore");
Block.createBlock("copperore", [
  {name: "Copper Ore", texture: [["copperore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.copperore, "stone");
Block.setDestroyTime(BlockID.copperore, 3);
Block.setDestroyLevel("copperore", 2);

IDRegistry.genBlockID("zincore");
Block.createBlock("zincore", [
  {name: "Zinc Ore", texture: [["zincore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.zincore, "stone");
Block.setDestroyTime(BlockID.zincore, 3);
Block.setDestroyLevel("zincore", 2);
Block.registerDropFunction("zincore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 1) {
        return [[ItemID.zincnugget, 1 + Math.random() * 5, 0]];
    }
    return [];
});

IDRegistry.genBlockID("tinore");
Block.createBlock("tinore", [
  {name: "Tin Ore", texture: [["tinore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tinore, "stone");
Block.setDestroyTime(BlockID.tinore, 3);
Block.setDestroyLevel("tinore", 1);
Block.registerDropFunction("tinore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        ToolAPI.dropOreExp(coords, 1, 4, 1);
        return [[ItemID.tinnugget, 1 + Math.random() * 5, 0]];
    }
    return [];
});

IDRegistry.genBlockID("titaniumore");
Block.createBlock("titaniumore", [
  {name: "Titanium Ore", texture: [["titaniumore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.titaniumore, "stone");
Block.setDestroyTime(BlockID.titaniumore, 7);
Block.setDestroyLevel("titaniumore", 4);

IDRegistry.genBlockID("saltore");
Block.createBlock("saltore", [
  {name: "Salt Ore", texture: [["saltore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.saltore, "stone");
Block.setDestroyTime(BlockID.saltore, 3);
Block.setDestroyLevel("saltore", 0);
Block.registerDropFunction("saltore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        ToolAPI.dropOreExp(coords, 1, 4, 1);
        return [[ItemID.salt, 1 + Math.random() * 5, 0]];
    }
    return [];
});

IDRegistry.genBlockID("bismuthore");
Block.createBlock("bismuthore", [
  {name: "Bismuth Ore", texture: [["bismuthore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bismuthore, "stone");
Block.setDestroyTime(BlockID.bismuthore, 4);
Block.setDestroyLevel("bismuthore", 3);

IDRegistry.genBlockID("lithiumore");
Block.createBlock("lithiumore", [
  {name: "Lithium Ore", texture: [["lithiumore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.lithiumore, "stone");
Block.setDestroyTime(BlockID.lithiumore, 4);
Block.setDestroyLevel("lithiumore", 3);

IDRegistry.genBlockID("plumbumore");
Block.createBlock("plumbumore", [
  {name: "Plumbum Ore", texture: [["plumbumore",0]], inCreative: false}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.plumbumore, "stone");
Block.setDestroyTime(BlockID.plumbumore, 6);
Block.setDestroyLevel("plumbumore", 3);

IDRegistry.genBlockID("rubyore");
Block.createBlock("rubyore", [
  {name: "Ruby Ore", texture: [["rubyore",0]], inCreative: false}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rubyore, "stone");
Block.setDestroyTime(BlockID.rubyore, 3);
Block.setDestroyLevel("rubyore", 3);
Block.registerDropFunction("rubyore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 2) {
        return [[ItemID.ruby, 1, 0]];
    }
    return [];
});

IDRegistry.genBlockID("sapphireore");
Block.createBlock("sapphireore", [
  {name: "Sapphire Ore", texture: [["sapphireore",0]], inCreative: false}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.sapphireore, "stone");
Block.setDestroyTime(BlockID.sapphireore, 3);
Block.setDestroyLevel("sapphireore", 3);
Block.registerDropFunction("sapphireore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 2) {
        return [[ItemID.sapphire, 1, 0]];
    }
    return [];
});

IDRegistry.genBlockID("amberore");
Block.createBlock("amberore", [
  {name: "Amber Ore", texture: [["amberore",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.amberore, "stone");
Block.setDestroyTime(BlockID.amberore, 3);
Block.setDestroyLevel("amberore", 2);
Block.registerDropFunction("amberore", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 1) {
        ToolAPI.dropOreExp(coords, 1, 4, 1);
        return [[ItemID.amber, 1 + Math.random() * 2, 0]];
    }
    return [];
});
