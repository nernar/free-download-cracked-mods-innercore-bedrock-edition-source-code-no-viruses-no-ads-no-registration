var Renderer={
        setSaplingRender:function(id,x){
        var shape = new ICRender.CollisionShape();     
        BlockRenderer.setCustomCollisionShape(Block.getNumericId(id), -1, shape);    
        BlockRenderer.addRenderCallback(id, function(api, coords,block) {
            if(x!=0){
                for(var i = 0;i < 1/x;i+=x){
                api.renderBoxId(coords.x, coords.y, coords.z,0+i, 0.01, 0+i, x+i, 0.99, x+i,id, block.data);
                api.renderBoxId(coords.x, coords.y, coords.z,(1-x)-i, 0.01, 0+i,1-i, 0.99, x+i,id, block.data);
                }
            }
            else{
                api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,id, block.data);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, id, block.data);
            }
        })
        BlockRenderer.enableCustomRender(id);
    }
};

IDRegistry.genBlockID("grassAether");
Block.createBlock("grassAether", [
    {name: "Aether Grass", texture: [["empty", 0], ["empty", 0], ["normal_aether", 0]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.grassAether, "plant");

IDRegistry.genItemID("grassAether");
Item.createItem("grassAether", "Aether Grass", {name: "normal_aether"});

Item.registerUseFunction("grassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.grassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.grassAether,0);

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 12; i++){ 
coords=GenerationUtils.randomCoords(x,z,114,154); 
for(var k=114;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.grassAether,0); 
} 
} 
} 
});

IDRegistry.genBlockID("shortgrassAether");
Block.createBlock("shortgrassAether", [
    {name: "Aether Grass", texture: [["empty", 0], ["empty", 0], ["short_aether", 0]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.shortgrassAether, "plant");

IDRegistry.genItemID("shortgrassAether");
Item.createItem("shortgrassAether", "Aether Grass", {name: "short_aether"});

Item.registerUseFunction("shortgrassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.shortgrassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.shortgrassAether,0);

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 1; i < 13; i++){ 
coords=GenerationUtils.randomCoords(x,z,112,154); 
for(var k=112;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.shortgrassAether,0); 
} 
} 
} 
});


IDRegistry.genBlockID("longgrassAether");
Block.createBlock("longgrassAether", [
    {name: "Aether Grass", texture: [["empty", 0], ["empty", 0], ["long_aether", 0]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.longgrassAether, "plant");

IDRegistry.genItemID("longgrassAether");
Item.createItem("longgrassAether", "Aether Grass", {name: "long_aether"});

Item.registerUseFunction("longgrassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.longgrassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.longgrassAether,0);
/*
Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 4; i++){ 
coords=GenerationUtils.randomCoords(x,z,100,154); 
for(var k=100;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.longgrassAether,0); 
} 
} 
} 
});
*/
Block.registerDropFunction("grassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.grassAether, 1, 0);
});
Block.registerDropFunction("shortgrassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.shortgrassAether, 1, 0);
});
Block.registerDropFunction("longgrassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.shortgrassAether, 1, 0);
});