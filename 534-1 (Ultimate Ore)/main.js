var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 2,
 explosionres: 2
}, "stone");

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 2,
 explosionres: 2
}, "stone");

IDRegistry.genBlockID("ultimateOre");
Block.createBlock("ultimateOre", [
 {name: "Ultimate Ore", texture: [["ultimate_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.ultimateOre, "stone", 3, true);





Block.registerDropFunction("ultimateOre", function(coords, blockID, blockData, level, enchant){
 if(level > 3){
  if(enchant.silk){
   return [[BlockID.ultimateOre, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[0, 1, 0]]
 }
 return [];
}, 3);




Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ultimateOre, 0, 6);
    }
}
)







Callback.addCallback("DestroyBlock", function(coords, block, player){
if(block.id == BlockID.ultimateOre){
var items = [{id:351, data: 4}, 263, 264, 14, 15, 331];

var number = Math.floor(Math.random() * items.length);

if (items[number].id) {
    World.drop (coords.x, coords.y, coords.z, items[number].id, 1, items[number].data);
} else {
    World.drop (coords.x, coords.y, coords.z, items[number], 1, 0);
} 
}});




