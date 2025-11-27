IDRegistry.genBlockID("vgrassAether");
Block.createBlock("vgrassAether", [
    {name: "Valkyrie Grass", texture: [["empty", 0], ["empty", 0], ["valkyrie_grass", 0]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.vgrassAether, "plant");

IDRegistry.genItemID("vgrassAether");
Item.createItem("vgrassAether", "Valkyrie Grass", {name: "valkyrie_grass"});

Item.registerUseFunction("vgrassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.vgrassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        World.addTileEntity(place.x, place.y, place.z);
    }
});
Renderer.setSaplingRender(BlockID.vgrassAether,0);
/*
Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 13; i++){ 
coords=GenerationUtils.randomCoords(x,z,1,111); 
for(var k=0;k<111;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.vgrassAether,0); 
} 
} 
} 
});*/

IDRegistry.genBlockID("vlonggrassAether");
Block.createBlock("vlonggrassAether", [
    {name: "Valkyrie Grass", texture: [["empty", 0], ["empty", 0], ["valkyrie_grass", 2]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.vlonggrassAether, "plant");

IDRegistry.genItemID("vlonggrassAether");
Item.createItem("vlonggrassAether", "Valkyrie Grass", {name: "valkyriel_grass"});

IDRegistry.genItemID("kirridflower");
Item.createItem("kirridflower", "Kirrid flowers", {name: "kirrid_flower"});

Item.registerUseFunction("longgrassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.longgrassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        World.addTileEntity(place.x, place.y, place.z);
    }
});
Renderer.setSaplingRender(BlockID.vlonggrassAether,0);

Callback.addCallback("AetherChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,108,154); 
for(var k=108;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.vlonggrassAether,0); 
} 
} 
} 
});

Block.registerDropFunction("vgrassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.vgrassAether, 1, 0);
});

Block.registerDropFunction("vlonggrassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.kirridflower, 1, 0);
});