IDRegistry.genBlockID("flowerPurple");
Block.createBlock("flowerPurple", [
    {name: "Purple Flower", texture: [["empty", 0], ["empty", 0], ["purple_flowern", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.flowerPurple, "plant");

IDRegistry.genItemID("flowerPurple");
Item.createItem("flowerPurple", "Purple Flower", {name: "purple_flower"});

Block.setBlockShape(BlockID.flowerPurple, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

Item.registerUseFunction("flowerPurple", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.flowerPurple);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.flowerPurple,0);

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 10; i++){ 
coords=GenerationUtils.randomCoords(x,z,113,154); 
for(var k=113;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.flowerPurple,0); 
} 
} 
} 
});

Block.registerDropFunction("flowerPurple", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.flowerPurple, 1, 0);
});


IDRegistry.genBlockID("flowerAechor");
Block.createBlock("flowerAechor", [
    {name: "Aechor Flower", texture: [["empty", 0], ["empty", 0], ["aechor_sprout", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.flowerPurple, "plant");

IDRegistry.genItemID("flowerAechor");
Item.createItem("flowerAechor", "Aechor Flower", {name: "aechor_sprout"});

Block.setBlockShape(BlockID.flowerPurple, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

Item.registerUseFunction("flowerAechor", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.flowerAechor);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.flowerAechor,0);

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,114,154); 
for(var k=114;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.flowerAechor,0); 
} 
} 
} 
});

Block.registerDropFunction("flowerAechor", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.flowerAechor, 1, 0);
});