var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


IDRegistry.genBlockID("frostpineLog");
Block.createBlock("frostpineLog", [
    {name: "Frostpine Log", texture: [["frostpine_log_top", 0], ["frostpine_log_top", 0], ["frostpine_log_side", 0], ["frostpine_log_side", 0], ["frostpine_log_side", 0], ["frostpine_log_side", 0]], inCreative: true}
]);

IDRegistry.genBlockID("plankFrostpine");
Block.createBlock("plankFrostpine", [
    {name: "Frostpine Planks", texture: [["frostpine_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.plankFrostpine, "wood");

IDRegistry.genBlockID("plankFrostpineS");
Block.createBlock("plankFrostpineS", [
    {name: "Frostpine Planks Slab", texture: [["frostpine_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.plankFrostpineS, "wood");
TileRenderer.makeSlab(BlockID.plankFrostpineS, BlockID.plankFrostpine);

Block.registerDropFunction("frostpineLog", function(coords, blockID){
    destroyLeaves(coords.x, coords.y, coords.z);
    return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.frostpineLog, 2);
ToolAPI.registerBlockMaterial(BlockID.frostpineLog, "wood");

IDRegistry.genBlockID("frostpineLeaves");
Block.createBlock("frostpineLeaves", [
    {name: "frostpine Leaves", texture: [["frostpine_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("frostpineLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.frostpineSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.frostpineLeaves, "plant");



IDRegistry.genBlockID("frostpineSapling");
Block.createBlock("frostpineSapling", [{name: "Frostpine Tree Sapling", texture: [["frostpine_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("frostpineSapling", function(){
    return [[ItemID.frostpineSapling, 1, 0]];
});

IDRegistry.genItemID("frostpineSapling");
Item.createItem("frostpineSapling", "Frostpine Tree Sapling", {name: "frostpine_sapling", data: 0});

setPlantModel(BlockID.frostpineSapling, false);
ToolAPI.registerBlockMaterial(BlockID.frostpineSapling, "plant");


Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.frostpineSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.frostpineSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
    
Block.setRandomTickCallback(BlockID.frostpineSapling, function(x, y, z, id, data){      
  if(World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
      if(Math.random() < 0.7){
      Structure.setInWorld("SkyrootF", coords.x, coords.y, coords.z); 
         }else{       
      Structure.setInWorld("SkyrootFF", coords.x, coords.y, coords.z);    
         }
     }
});