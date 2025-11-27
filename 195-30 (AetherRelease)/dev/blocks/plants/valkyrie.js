IDRegistry.genBlockID("vgrassAether");
Block.createBlock("vgrassAether", [
    {name: "Valkyrie Grass", texture: [["valkyrie_grass", 0], ["valkyrie_grass", 0], ["valkyrie_grass", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.vgrassAether, "plant");

IDRegistry.genItemID("vgrassAether");
Item.createItem("vgrassAether", "Valkyrie Grass", {name: "valkyrie_grass"});

Item.registerUseFunction("vgrassAether", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.vgrassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
TileRenderer.setPlantModel(BlockID.vgrassAether, 0, "valkyrie_grass", 0);

IDRegistry.genBlockID("vlonggrassAether");
Block.createBlock("vlonggrassAether", [
    {name: "Valkyrie Grass", texture: [["valkyrie_grass", 2], ["valkyrie_grass", 2], ["valkyrie_grass", 2]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.vlonggrassAether, "plant");

IDRegistry.genItemID("vlonggrassAether");
Item.createItem("vlonggrassAether", "Valkyrie Grass", {name: "valkyriel_grass"});

IDRegistry.genItemID("kirridflower");
Item.createItem("kirridflower", "Kirrid flowers", {name: "kirrid_flower"});

Item.registerUseFunction("vlonggrassAether", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.vlonggrassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
TileRenderer.setPlantModel(BlockID.vlonggrassAether, 0, "valkyrie_grass", 2);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 40) return;
   for(let i=0; i<randomInt(2, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.vlonggrassAether,0);     
    }
}});

Block.registerDropFunction("vgrassAether", function(coords, blockID){ 
    [[ItemID.vgrassAether, 1, 0]];
});

Block.registerDropFunction("vlonggrassAether", function(coords, blockID){
    [[ItemID.kirridflower, 1, 0]];
});