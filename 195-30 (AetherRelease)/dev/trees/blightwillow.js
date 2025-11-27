var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});

IDRegistry.genBlockID("blightwillowLog");
Block.createBlock("blightwillowLog", [
    {name: "Blightwillow Log", texture: [["blightwillow_logtop", 0], ["blightwillow_logtop", 0], ["blightwillow_logside", 0], ["blightwillow_logside", 0], ["blightwillow_logside", 0], ["blightwillow_logside", 0]], inCreative: true}
]);

IDRegistry.genBlockID("blightwillowSkyroot");
Block.createBlock("blightwillowSkyroot", [
    {name: "Blightwillow Planks", texture: [["blightwillow_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.blightwillowSkyroot, "wood");

IDRegistry.genBlockID("blightwillowSkyrootS");
Block.createBlock("blightwillowSkyrootS", [
    {name: "Blightwillow Planks Slab", texture: [["blightwillow_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.plankSkyrootS, "wood");
TileRenderer.makeSlab(BlockID.blightwillowSkyrootS, BlockID.blightwillowSkyroot);

IDRegistry.genBlockID("blightwillowleaves");
Block.createBlock("blightwillowleaves", [
    {name: "blight willow Leaves", texture: [["blightwillow_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("darkblueskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.blightwillowSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.blightwillowleaves, "plant");

IDRegistry.genBlockID("blightwillowSapling");
Block.createBlock("blightwillowSapling", [{name: "Blightwillow Skyroot Tree Sapling", texture: [["blightwillow_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
Block.registerDropFunction("blightwillowSapling", function(){
    return [[ItemID.blightwillowSapling, 1, 0]];
});

IDRegistry.genItemID("blightwillowSapling");
Item.createItem("blightwillowSapling", "Blightwillow Skyroot Tree Sapling", {name: "blightwillow_sapling", data: 0});

setPlantModel(BlockID.blightwillowSapling, false);
ToolAPI.registerBlockMaterial(BlockID.blightwillowSapling, "plant");


Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.blightwillowSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.blightwillowSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
}); 

Block.setRandomTickCallback(BlockID.blueskyrootSapling, function(x, y, z, id, data){      
  if(World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
      if(Math.random() < 0.7){
      Structure.setInWorld("SkyrootU", coords.x, coords.y, coords.z); 
         }else{       
      Structure.setInWorld("SkyrootUU", coords.x, coords.y, coords.z);    
         }
     }
});