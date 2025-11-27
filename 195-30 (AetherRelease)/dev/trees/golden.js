IDRegistry.genBlockID("goldenLeaves");
Block.createBlock("goldenLeaves", [
    {name: "golden Skyroot Leaves", texture: [["golOakleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("goldenLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.goldenSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.goldenLeaves, "plant");

IDRegistry.genBlockID("goldenSapling");
Block.createBlock("goldenSapling", [{name: "gold Skyroot Tree Sapling", texture: [["amberoot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("goldenSapling", function(){
    return [[ItemID.goldenSapling, 1, 0]];
});

IDRegistry.genItemID("goldenSapling");
Item.createItem("goldenSapling", "gold Skyroot Tree Sapling", {name: "amberoot_sapling", data: 0});

setPlantModel(BlockID.goldenSapling, false);
ToolAPI.registerBlockMaterial(BlockID.goldenSapling, "plant");

Callback.addCallback("ItemUse",function(crd,item, b, is,  player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.goldenSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.goldenSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});

Block.setRandomTickCallback(BlockID.goldenSapling, function(x, y, z, id, data) {
var coords = coords.relative;
 var rnd = new java.util.Random(); 
  if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether) {
     golden.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, rnd);    
     }
});