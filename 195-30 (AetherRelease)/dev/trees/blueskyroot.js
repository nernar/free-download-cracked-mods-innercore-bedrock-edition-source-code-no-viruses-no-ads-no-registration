var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});

IDRegistry.genBlockID("blueskyrootLeaves");
Block.createBlock("blueskyrootLeaves", [
    {name: "Blue Skyroot Leaves", texture: [["blue_skyrootleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("blueskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.blueskyrootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.blueskyrootLeaves, "plant");



IDRegistry.genBlockID("blueskyrootSapling");
Block.createBlock("blueskyrootSapling", [{name: "blue Skyroot Tree Sapling", texture: [["blue_skyroot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("blueskyrootSapling", function(){
    return [[ItemID.blueskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("blueskyrootSapling");
Item.createItem("blueskyrootSapling", "blue Skyroot Tree Sapling", {name: "blue_skyroot_sapling", data: 0});

setPlantModel(BlockID.blueskyrootSapling, false);
ToolAPI.registerBlockMaterial(BlockID.blueskyrootSapling, "plant");

Callback.addCallback("ItemUse",function(crd,item, b, is,  player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.blueskyrootSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.blueskyrootSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});

Block.setRandomTickCallback(BlockID.blueskyrootSapling, function(x, y, z, id, data) { 
var coords = coords.relative;
 var rnd = new java.util.Random();     
  if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether) {
      if(rnd.nextFloat() < 0.7){
      //Structure.setInWorld("SkyrootB", coords.x, coords.y, coords.z); 
         }else{       
      //Structure.setInWorld("SkyrootBB", coords.x, coords.y, coords.z);    
         }
     }
});