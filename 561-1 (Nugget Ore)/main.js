IDRegistry.genItemID("coal_nugget");
Item.createItem("coal_nugget", "Coal Nugget", {name: "coal_nugget", meta: 0}, {stack: 64});

IDRegistry.genItemID("diamond_nugget");
Item.createItem("diamond_nugget", "Diamond Nugget", {name: "diamond_nugget", meta: 0}, {stack: 64});

IDRegistry.genItemID("emerald_nugget");
Item.createItem("emerald_nugget", "Emerald Nugget", {name: "emerald_nugget", meta: 0}, {stack: 64});

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 2,
 explosionres: 2
}, "stone");

IDRegistry.genBlockID("coal_nugget_ore");
Block.createBlock("coal_nugget_ore", [
 {name: "Coal Nugget Ore", texture: [["coal_nugget_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.coal_nugget_ore, "stone", 2, true);

Block.registerDropFunction("coal_nugget_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 0){
  if(enchant.silk){
   return [[BlockID.coal_nugget_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 2, 5, enchant.experience);
  return [[ItemID.coal_nugget, 3, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 60);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.coal_nugget_ore, 0, 3);
    }
}
)



IDRegistry.genBlockID("diamond_nugget_ore");
Block.createBlock("diamond_nugget_ore", [
 {name: "Diamond Nugget Ore", texture: [["diamond_nugget_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.diamond_nugget_ore, "stone", 2, true);

Block.registerDropFunction("diamond_nugget_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.diamond_nugget_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[ItemID.diamond_nugget, 3, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 60);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.diamond_nugget_ore, 0, 3);
    }
}
)



IDRegistry.genBlockID("emerald_nugget_ore");
Block.createBlock("emerald_nugget_ore", [
 {name: "Emerald Nugget Ore", texture: [["emerald_nugget_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.emerald_nugget_ore, "stone", 2, true);

Block.registerDropFunction("emerald_nugget_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.emerald_nugget_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[ItemID.emerald_nugget, 3, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 60);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.emerald_nugget_ore, 0, 3);
    }
}
)



IDRegistry.genBlockID("gold_nugget_ore");
Block.createBlock("gold_nugget_ore", [
 {name: "Gold Nugget Ore", texture: [["gold_nugget_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.gold_nugget_ore, "stone", 2, true);

Block.registerDropFunction("gold_nugget_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.gold_nugget_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[371, 3, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 60);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.gold_nugget_ore, 0, 3);
    }
}
)



IDRegistry.genBlockID("iron_nugget_ore");
Block.createBlock("iron_nugget_ore", [
 {name: "Iron Nugget Ore", texture: [["iron_nugget_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.iron_nugget_ore, "stone", 2, true);

Block.registerDropFunction("iron_nugget_ore", function(coords, blockID, blockData, level, enchant){
 if(level > 1){
  if(enchant.silk){
   return [[BlockID.iron_nugget_ore, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[452, 3, 0]]
 }
 return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 60);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.iron_nugget_ore, 0, 3);
    }
}
)



Recipes.addShaped({id: 263, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.coal_nugget, 0]);

Recipes.addShaped({id: 264, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.diamond_nugget, 0]);

Recipes.addShaped({id: 388, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.emerald_nugget, 0]);

Recipes.addShaped({id: ItemID.emerald_nugget, count: 9, data: 0}, [
	"   ",
	" a ",
	"   "
], ['a', 388, 0]);

Recipes.addShaped({id: ItemID.diamond_nugget, count: 9, data: 0}, [
	"   ",
	" a ",
	"   "
], ['a', 264, 0]);

Recipes.addShaped({id: ItemID.coal_nugget, count: 9, data: 0}, [
	"   ",
	" a ",
	"   "
], ['a', 263, 0]);