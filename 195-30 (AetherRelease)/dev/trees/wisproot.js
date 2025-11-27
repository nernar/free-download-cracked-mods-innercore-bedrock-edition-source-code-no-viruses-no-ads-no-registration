IDRegistry.genBlockID("wisprootLeaves");
Block.createBlock("wisprootLeaves", [
    {name: "wisproot Skyroot Leaves", texture: [["wisproot_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("wisprootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.wisprootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.wisprootLeaves, "plant");

IDRegistry.genBlockID("wisprootSapling");
Block.createBlock("wisprootSapling", [{name: "Wisproot Tree Sapling", texture: [["green_wisproot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("wisprootSapling", function(){
    return [[ItemID.wisprootSapling, 1, 0]];
});

IDRegistry.genItemID("wisprootSapling");
Item.createItem("wisprootSapling", "Wisproot Tree Sapling", {name: "green_wisproot_sapling", data: 0});

setPlantModel(BlockID.wisprootSapling, false);
ToolAPI.registerBlockMaterial(BlockID.wisprootSapling, "plant");

Callback.addCallback("ItemUse",function(crd,item, b, is,  player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.goldenSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.wisprootSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});

Block.setRandomTickCallback(BlockID.wisprootSapling, function(x, y, z, id, data) {
var coords = coords.relative;
 var rnd = new java.util.Random(); 
  if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether) {
     golden.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, rnd);    
     }
});