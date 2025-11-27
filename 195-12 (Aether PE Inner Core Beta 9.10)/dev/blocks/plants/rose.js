IDRegistry.genBlockID("roseWhite");
Block.createBlock("roseWhite", [
    {name: "White Rose", texture: [["empty", 0], ["empty", 0], ["white_rosen", 0]], inCreative: false}
]);

IDRegistry.genItemID("roseWhite");
Item.createItem("roseWhite", "White Rose", {name: "white_rosen"});

Item.registerUseFunction("roseWhite", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.roseWhite);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

Renderer.setSaplingRender(BlockID.roseWhite,0);

Callback.addCallback("AetherChunk", function(x,z){ 
for(var i = 0; i < 10; i++){ 
coords=GenerationUtils.randomCoords(x,z,108,154); 
for(var k=1098;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.roseWhite,0); 
} 
} 
} 
});