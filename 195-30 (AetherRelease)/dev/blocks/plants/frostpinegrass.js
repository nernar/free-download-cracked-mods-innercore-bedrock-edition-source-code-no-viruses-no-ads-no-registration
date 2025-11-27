IDRegistry.genBlockID("grassFrostpine");
Block.createBlock("grassFrostpine", [
    {name: "Frostpine Grass", texture: [["normal_frostroot", 0], ["normal_frostroot", 0], ["normal_frostroot", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.grassFrostpine, "plant");

IDRegistry.genItemID("grassFrostpine");
Item.createItem("grassFrostpine", "Frostpine Grass", {name: "normal_frostroot"});

Item.registerUseFunction("grassFrostpine", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.grassFrostpine);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.grassFrostpine, false);

Block.registerDropFunction("grassFrostpine", function(coords, blockID){
     [[ItemID.grassFrostpine, 1, 0]];
});