IMPORT("Structures");
IMPORT("StructuresAPI");

var BLOCK_TYPE_SHROOM = Block.createSpecialType({
    base: 99,
    solid: true,
    destroytime: 0.1,
    explosionres: 7,
    renderlayer: 2,
    translucency: 1,
    sound: "wood"
});

//BOLETUS
IDRegistry.genBlockID("boletusGiant");
Block.createBlock("boletusGiant", [
    {name: "Boletus Giant", texture: [["boletus_stem", 0], ["boletus_block", 0], ["boletus_block", 0]], inCreative: true}, BLOCK_TYPE_SHROOM]);
ToolAPI.registerBlockMaterial(BlockID.boletusGiant, "plant");

IDRegistry.genBlockID("boletusGiantStem");
Block.createBlock("boletusGiantStem", [
    {name: "Boletus Giant", texture: [["boletus_stem_inside", 0], ["boletus_stem_inside", 0], ["boletus_stem", 0]], inCreative: true}, BLOCK_TYPE_SHROOM]);
ToolAPI.registerBlockMaterial(BlockID.boletusGiantStem, "plant");

//CHANTERELLE
IDRegistry.genBlockID("chanterelleGiant");
Block.createBlock("chanterelleGiant", [
    {name: "Chanterelle Giant", texture: [["chanterelle_block", 0], ["chanterelle_hymenophore", 0], ["chanterelle_hymenophore", 0]], inCreative: true}, BLOCK_TYPE_SHROOM]);
ToolAPI.registerBlockMaterial(BlockID.chanterelleGiant, "plant");

IDRegistry.genBlockID("chanterelleGiantStem");
Block.createBlock("chanterelleGiantStem", [
    {name: "Chanterelle Giant", texture: [["chanterelle_block", 0], ["chanterelle_block", 0], ["chanterelle_hymenophore", 0]], inCreative: true}, BLOCK_TYPE_SHROOM]);
ToolAPI.registerBlockMaterial(BlockID.chanterelleGiantStem, "plant");

Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: BlockID.boletusGiant, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.boletus, 0]);
Recipes.addShapeless({id: ItemID.boletus, count: 9, data: 0}, [{id: BlockID.boletusGiant, data: 0}]);

Recipes.addShaped({id: BlockID.chanterelleGiant, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
], ["c", ItemID.chanterelle, 0]);
Recipes.addShapeless({id: ItemID.chanterelle, count: 9, data: 0}, [{id: BlockID.chanterelleGiant, data: 0}]);
});

var GiantBoletus = new Structure("GiantBoletus");
var GiantChanterelle = new Structure("GiantChanterelle");


Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {
var regi = BlockSource.getCurrentWorldGenRegion();   
 var rnd = new java.util.Random(); 
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.boletus && Entity.getCarriedItem(player).id == 858) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);    
       GiantBoletus.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, rnd);    
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.chanterelle && Entity.getCarriedItem(player).id == 858) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
       GiantChanterelle.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, rnd);  
   }
});