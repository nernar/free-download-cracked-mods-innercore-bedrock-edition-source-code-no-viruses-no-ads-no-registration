var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


IDRegistry.genBlockID("darkblueskyrootLeaves");
Block.createBlock("darkblueskyrootLeaves", [
    {name: "darkblue Skyroot Leaves", texture: [["dark_blue_skyrootleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("darkblueskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.darkblueskyrootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.darkblueskyrootLeaves, "plant");



IDRegistry.genBlockID("darkblueskyrootSapling");
Block.createBlock("darkblueskyrootSapling", [{name: "Darkblue Skyroot Tree Sapling", texture: [["dark_blue_skyroot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("darkblueskyrootSapling", function(){
    return [[ItemID.darkblueskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("darkblueskyrootSapling");
Item.createItem("darkblueskyrootSapling", "Darkblue Skyroot Tree Sapling", {name: "dark_blue_skyroot_sapling", data: 0});

setPlantModel(BlockID.darkblueskyrootSapling, false);
ToolAPI.registerBlockMaterial(BlockID.darkblueskyrootSapling, "plant");
    
Callback.addCallback("ItemUse",function(crd,item, b, is, player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.darkblueskyrootSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.darkblueskyrootSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});

Block.setRandomTickCallback(BlockID.darkblueskyrootSapling, function(x, y, z, id, data) { 
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