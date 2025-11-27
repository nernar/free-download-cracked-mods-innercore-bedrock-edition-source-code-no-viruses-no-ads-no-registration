IDRegistry.genBlockID("bushBerry");
Block.createBlock("bushBerry", [
    {name: "Blueberry Bush", texture: [["berrybush", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.bushBerry, "plant");

IDRegistry.genBlockID("bush");
Block.createBlock("bush", [
    {name: "Bush", texture: [["green_skyrootleaves", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.bush, "plant");

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,108,154); 
for(var k=108;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.bushBerry,0); 
} 
} 
} 
});

Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.bushBerry){
World.drop(coords.x, coords.y+1, coords.z, ItemID.blueBerry, 3);
World.setBlock(coords.x,coords.y,coords.z,BlockID.bush,0); 
}
});

Block.setRandomTickCallback(BlockID.bush, function(x, y, z, id, data){    
                if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerry,0);  
                    }
  });     
Callback.addCallback("DestroyBlock", function (coords, block) {        
 if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.bush && World.getBlockID(coords.x, coords.y-1, coords.z)!=BlockID.grassblockAether){
World.destroyBlock(coords.x, coords.y, coords.z, false);
                }         
});     
//FROSTY

IDRegistry.genBlockID("bushBerryf");
Block.createBlock("bushBerryf", [
    {name: "Frosty Blueberry Bush", texture: [["berrybush", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.bushBerryf, "plant");

IDRegistry.genBlockID("bushf");
Block.createBlock("bushf", [
    {name: "Frosty Bush", texture: [["green_skyrootleaves", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.bushf, "plant");

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,108,154); 
for(var k=108;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.bushBerryf,0); 
} 
} 
} 
});

Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.bushBerryf){
World.drop(coords.x, coords.y+1, coords.z, ItemID.whidBerry, 3);
World.setBlock(coords.x,coords.y,coords.z,BlockID.bushf,0); 
}
});

Block.setRandomTickCallback(BlockID.bushf, function(x, y, z, id, data){        
                if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerryf,0);  
                    }
  });     
Callback.addCallback("DestroyBlock", function (coords, block) {         
 if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.bushf && World.getBlockID(coords.x, coords.y-1, coords.z)!=BlockID.grassblockAether){
World.destroyBlock(coords.x, coords.y, coords.z, false);
                }         
});     
//Enchanted
IDRegistry.genBlockID("enbushBerry");
Block.createBlock("enbushBerry", [
    {name: "Blueberry Bush Enchanted", texture: [["enchanted_blueberrybush", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.enbushBerry, "plant");

IDRegistry.genBlockID("enbush");
Block.createBlock("enbush", [
{name: "Bush Enchanted", texture: [["earthshifter_leaves", 0]],inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.enbush, "plant");

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 3; i++){ 
coords=GenerationUtils.randomCoords(x,z,112,154); 
for(var k=112;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.enbushBerry,0); 
} 
} 
} 
});

Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.enbushBerry){
World.drop(coords.x, coords.y+1, coords.z, ItemID.enchantedBerry, 3);
World.setBlock(coords.x,coords.y,coords.z,BlockID.enbush,0); 
}
});

Block.setRandomTickCallback(BlockID.enbush, function(x, y, z, id, data){       
                if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerryf,0);  
                    }
  });     
Callback.addCallback("DestroyBlock", function (coords, block){       
 if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.enbush && World.getBlockID(coords.x, coords.y-1, coords.z)!=BlockID.grassblockAether){
World.destroyBlock(coords.x, coords.y, coords.z, false);
                }         
});     