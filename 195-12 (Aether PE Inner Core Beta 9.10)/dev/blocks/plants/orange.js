IDRegistry.genBlockID("orangeoBush");
Block.createBlock("orangeoBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangeotree", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.orangeoBush, "plant");
Renderer.setSaplingRender(BlockID.orangeoBush,0);

IDRegistry.genBlockID("orangetBush");
Block.createBlock("orangetBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangettree", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.orangetBush, "plant");
Renderer.setSaplingRender(BlockID.orangetBush,0);

IDRegistry.genBlockID("orangetrBush");
Block.createBlock("orangetrBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangetrtree", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.orangetrBush, "plant");
Renderer.setSaplingRender(BlockID.orangetrBush,0);

IDRegistry.genBlockID("orangefrBush");
Block.createBlock("orangefrBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangefrtree", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.orangefrBush, "plant");
Renderer.setSaplingRender(BlockID.orangefrBush,0);

IDRegistry.genBlockID("orangefiBush");
Block.createBlock("orangefiBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangefitree", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.orangefiBush, "plant");
Renderer.setSaplingRender(BlockID.orangefiBush,0);


IDRegistry.genItemID("orangeoBush");
Item.createItem("orangeoBush", "Orange bush sapling", {name: "orange_tree", meta: 0});

Item.registerUseFunction("orangeoBush", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.orangeoBush);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }});
     
Block.setRandomTickCallback(BlockID.orangeoBush, function(x, y, z, id, data){      
                if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  structureGenerationHelper.placeor({x: coords.x, y: coords.y, z: coords.z});  
                    }
  });     
Callback.addCallback("DestroyBlock", function (coords, block){       
 if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.orangeoBush && World.getBlockID(coords.x, coords.y-1, coords.z)!=BlockID.grassblockAether){
World.destroyBlock(coords.x, coords.y, coords.z, false);
                }         
});        
     

     
Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.orangefiBush){
World.drop(coords.x, coords.y+1, coords.z, ItemID.Orange, 1);
World.setBlock(coords.x,coords.y,coords.z,BlockID.orangetrBush,0); 
}
});

Block.setRandomTickCallback(BlockID.orangetrBush, function(x, y, z, id, data){      
               World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.orangefiBush,0);                      
  });     
    
          
Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.orangefrBush){
World.drop(coords.x, coords.y+1, coords.z, ItemID.Orange, 1);
World.setBlock(coords.x,coords.y,coords.z,BlockID.orangetBush,0); 
}
});

Block.setRandomTickCallback(BlockID.orangetBush, function(x, y, z, id, data){
var coords = World.getBlockID(x,y,z);    
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.orangefrBush,0);                      
  });     

var orangesGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
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
    generateBushes:function(crds, block){
        var block = {
            upO: BlockID.orangefiBush,
            downO: BlockID.orangefrBush,
            upT: BlockID.orangetrBush,
            downT: BlockID.orangetBush
        }
        if(this.random()){                       
            this.p(crds.x, crds.y, crds.z, block.downO);
            this.p(crds.x, crds.y+1, crds.z, block.upO);                                          
            }if(this.random()){            
            this.p(crds.x, crds.y, crds.z, block.downT);
            this.p(crds.x, crds.y+1, crds.z, block.upT);                       
            }
      }
}

Callback.addCallback("AetherChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,112,154); 
for(var k=112;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
orangesGenerationHelper.generateBushes({x: coords.x, y: k+1, z: coords.z});
} 
} 
} 
});