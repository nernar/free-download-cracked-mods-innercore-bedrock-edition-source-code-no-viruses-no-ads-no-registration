IDRegistry.genBlockID("orangeoBush");
Block.createBlock("orangeoBush", [
    {name: "Orange bush", texture: [["orangeotree", 0], ["orangeotree", 0], ["orangeotree", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.orangeoBush, "plant");
setPlantModel(BlockID.orangeoBush, false);

Block.registerDropFunction("orangeoBush", function(coords, blockID){
    [[ItemID.orangeoBush, 1, 0]];
});

IDRegistry.genBlockID("orangetBush");
Block.createBlock("orangetBush", [
    {name: "Orange bush", texture: [["orangettree", 0], ["orangettree", 0], ["orangettree", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.orangetBush, "plant");
setPlantModel(BlockID.orangetBush, true);

Block.registerDropFunction("orangetBush", function(){ 
  return [];
});

IDRegistry.genBlockID("orangetrBush");
Block.createBlock("orangetrBush", [
    {name: "Orange bush", texture: [["orangetrtree", 0], ["orangetrtree", 0], ["orangetrtree", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.orangetrBush, "plant");
setPlantModel(BlockID.orangetrBush, true);

Block.registerDropFunction("orangetrBush", function(){ 
  return [];
});

IDRegistry.genBlockID("orangefrBush");
Block.createBlock("orangefrBush", [
    {name: "Orange bush", texture: [["orangefrtree", 0], ["orangefrtree", 0], ["orangefrtree", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.orangefrBush, "plant");
setPlantModel(BlockID.orangefrBush, true);

Block.registerDropFunction("orangefrBush", function(){
    if(Math.random() < .15){
        return [[ItemID.orangeoBush, 1, 0]]
    }
    else {
        return [];
    }
});

IDRegistry.genBlockID("orangefiBush");
Block.createBlock("orangefiBush", [
    {name: "Orange bush", texture: [["orangefitree", 0], ["orangefitree", 0], ["orangefitree", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.orangefiBush, "plant");
setPlantModel(BlockID.orangefiBush, true);

Block.registerDropFunction("orangefiBush", function(){
    if(Math.random() < .65){
        return [[ItemID.orangeoBush, randomInt(1,2), 0]]
    }
    else {
        return [];
    }
});

IDRegistry.genItemID("orangeoBush");
Item.createItem("orangeoBush", "Orange bush sapling", {name: "orange_tree", meta: 0});
     
Item.registerUseFunction("orangeoBush", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.orangeoBush);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});    
    
Block.setRandomTickCallback(BlockID.orangeoBush, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();    
  if(region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
      region.destroyBlock(coords.x,coords.y,coords.z,false);                      
  orangesGenerationHelper.generateBushes(region, {x: coords.x, y: coords.y, z: coords.z});  
     }
});            
     
Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
var region = BlockSource.getDefaultForActor(player); 
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.orangefiBush){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.Orange, randomInt(1, 3), 0);
region.setBlock(coords.x,coords.y,coords.z,BlockID.orangetrBush,0);
}
});

Block.setRandomTickCallback(BlockID.orangetrBush, function(x, y, z, id, data){   
var region = BlockSource.getDefaultForActor(player);   
var coords = region.getBlockId(x,y,z);   
   region.destroyBlock(coords.x,coords.y,coords.z,false);                      
    region.setBlock(coords.x,coords.y,coords.z,BlockID.orangefiBush,0);    
});     
    
          
Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
var region = BlockSource.getDefaultForActor(player); 
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.orangefrBush){
   region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.Orange, randomInt(1, 3), 0);
    region.setBlock(coords.x,coords.y,coords.z,BlockID.orangetBush,0); 
}
});

Block.setRandomTickCallback(BlockID.orangetBush, function(x, y, z, id, data){
var region = BlockSource.getDefaultForActor(player); 
var coords = region.getBlockId(x,y,z);    
     region.destroyBlock(coords.x,coords.y,coords.z,false);                      
      region.setBlock(coords.x,coords.y,coords.z,BlockID.orangefrBush,0);                      
  });     

var orangesGenerationHelper = {
    p: function(region, x, y, z, id){ 
        region.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generateBushes:function(region, crds, block){
        var block = {
            upO: BlockID.orangefiBush,
            downO: BlockID.orangefrBush,
            upT: BlockID.orangetrBush,
            downT: BlockID.orangetBush
        }
        if(this.random()){                       
            this.p(region, crds.x, crds.y, crds.z, block.downO);
            this.p(region, crds.x, crds.y+1, crds.z, block.upO);                                          
            }if(this.random()){            
            this.p(region, crds.x, crds.y, crds.z, block.downT);
            this.p(region, crds.x, crds.y+1, crds.z, block.upT);                       
            }
      }
}

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
var region = BlockSource.getCurrentWorldGenRegion(); 
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 59) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
   if(Math.random() < .38) 
orangesGenerationHelper.generateBushes(region, {x: coords.x, y: coords.y+1, z: coords.z});  
    }
}});