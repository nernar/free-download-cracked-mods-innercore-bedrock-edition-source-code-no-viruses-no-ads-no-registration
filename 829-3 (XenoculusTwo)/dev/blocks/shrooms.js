IDRegistry.genBlockID("voidFungus");
Block.createBlock("voidFungus", [
    {name: "Void Fungus", texture: [["voidfungus", 0], ["voidfungus", 0], ["voidfungus", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.voidFungus, "plant");

IDRegistry.genItemID("voidFungus");
Item.createItem("voidFungus", "Vanilla", {name: "voidfungus"});

Item.registerUseFunction("voidFungus", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Frone){ 
        region.setBlock(place.x, place.y, place.z, BlockID.voidFungus);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.voidFungus, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 87) return;
   for(let i=0; i<3; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.Frone){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.voidFungus,0);   
    }
}});

Block.registerDropFunction("voidFungus", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.voidFungus, 1, 0);
});


IDRegistry.genBlockID("enchFungus");
Block.createBlock("enchFungus", [
    {name: "Enchanted Fungus", texture: [["enchfungus", 0], ["enchfungus", 0], ["enchfungus", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.enchFungus, "plant");

IDRegistry.genItemID("enchFungus");
Item.createItem("enchFungus", "Vanilla", {name: "enchfungus"});

Item.registerUseFunction("enchFungus", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Frone){ 
        region.setBlock(place.x, place.y, place.z, BlockID.enchFungus);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.enchFungus, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Xenoculus.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 184, coords.z);
  if (coords.y < 80) return;
   for(let i=0; i<3; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.Frone){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.enchFungus,0);   
    }
}});

Block.registerDropFunction("enchFungus", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.enchFungus, 1, 0);
});

//VoidSh = new Structure("VoidSh");
//EnchantedSh = new Structure("EnchantedSh");

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
let tsu = BlockSource.getDefaultForActor(player);
  var coords = coords.relative;
 if(item.id == 280 && World.getBlockID(coords.x,coords.y,coords.z)==BlockID.voidFungus){  
//VoidSh.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu);
Game.message("ID: " + item.id + " Data: " + item.data);    
}});

Block.setRandomTickCallback(BlockID.voidFungus, function(x, y, z, id, data) {      
    let tsu = BlockSource.getDefaultForDimension(Xenoculus.id);
  var coords = coords.relative;
   if (tsu != null && tsu.getBlockId(coords.x, coords.y - 1, coords.z) == BlockID.Frone) {
  tsu.destroyBlock(coords.x,coords.y,coords.z,false);                      
//VoidSh.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu);    
      }
 }); 

/*
Callback.addCallback('ItemUse', function (coords, item, block) {
let tsu = BlockSource.getDefaultForDimension(Xenoculus.id);
  var coords = coords.relative;
 if(item.id == 280 && World.getBlockID(coords.x,coords.y,coords.z)==BlockID.enchFungus){  
//EnchantedSh.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu);
Game.message("ID: " + item.id + " Data: " + item.data);    
}});*/

Block.setRandomTickCallback(BlockID.enchFungus, function(x, y, z, id, data) {      
    let tsu = BlockSource.getDefaultForDimension(Xenoculus.id);
  var coords = coords.relative;
   if (tsu != null && tsu.getBlockId(coords.x, coords.y - 1, coords.z) == BlockID.Frone) {
  tsu.destroyBlock(coords.x,coords.y,coords.z,false);                      
//EnchantedSh.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu);    
      }
 });

IDRegistry.genBlockID("froneFylim"); 
Block.createBlock("froneFylim", [
    {name: "Stone Fylim", texture: [["frone", 0], ["fyliumtop", 0], ["fyliumside", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.froneFylim, 3);
ToolAPI.registerBlockMaterial(BlockID.froneFylim, "stone", 2, true);

IDRegistry.genBlockID("FungusStem"); 
Block.createBlock("FungusStem", [
    {name: "Fungus Stem", texture: [["fulngusblock", 0], ["fulngusblock", 0], ["fulngusstem", 0]],inCreative: true}], BLOCK_TYPE_WOOD);
Block.setDestroyTime(BlockID.FungusStem, 3);
ToolAPI.registerBlockMaterial(BlockID.FungusStem, "wood", 2, true);


IDRegistry.genBlockID("voidFungusCap"); 
Block.createBlock("voidFungusCap", [
    {name: "Void Fungus Cap", texture: [["fulngusblock", 0], ["voidfungusblock", 0], ["voidfungusblock", 0]],inCreative: true}], BLOCK_TYPE_WOOD);
Block.setDestroyTime(BlockID.voidFungusCap, 3);
ToolAPI.registerBlockMaterial(BlockID.voidFungusCap, "wood", 2, true);

IDRegistry.genBlockID("enchantedFungusCap"); 
Block.createBlock("enchantedFungusCap", [
    {name: "Enchanted Fungus Cap", texture: [["fulngusblock", 0], ["enchfungusblock", 0], ["enchfungusblock", 0]],inCreative: true}], BLOCK_TYPE_WOOD);
Block.setDestroyTime(BlockID.enchantedFungusCap, 3);
ToolAPI.registerBlockMaterial(BlockID.enchantedFungusCap, "wood", 2, true);