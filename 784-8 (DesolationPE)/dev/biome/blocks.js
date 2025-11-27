var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.7,
    explosionres: 1,
    renderallfaces: true,
    renderlayer: 1,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_TYPE_WOOD = Block.createSpecialType({
    solid: true,
    renderlayer: 2,
    explosionres: 8,
    translucency: 0,
    sound: "wood"
});

var BLOCK_TYPE_PLANT = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1, 
    rendertype: 91,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
});

IDRegistry.genBlockID("soilCharred"); 
Block.createBlock("soilCharred", [
    {name: "Charred Soil", texture: [["charred_soil", 0]],inCreative: true}]);
Block.setDestroyTime(BlockID.soilCharred, 2);
ToolAPI.registerBlockMaterial(BlockID.soilCharred, "dirt", 0, true);

Block.registerDropFunction("soilCharred", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.charcoalBit, randomInt(1, 4), 0);
});

IDRegistry.genBlockID("ashPiled"); 
Block.createBlock("ashPiled", [
{name: "Ash", texture: [["ash_block", 0]],inCreative: true},
{name: "Ash", texture: [["ash_block", 0]],inCreative: false},
{name: "Ash", texture: [["ash_block", 0]],inCreative: false},
{name: "Ash", texture: [["ash_block", 0]],inCreative: true},     
]);

const Pile1render = new ICRender.CollisionShape();
Pile1render.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.ashPiled, 0, Pile1render);
Block.setShape(BlockID.ashPiled, 0, 0, 0, 1, 2/16, 1, 0);

const Pile2render = new ICRender.CollisionShape();
Pile2render.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.ashPiled, 1, Pile2render);
Block.setShape(BlockID.ashPiled, 0, 0, 0, 1, 5/16, 1, 1);

const Pile3render = new ICRender.CollisionShape();
Pile3render.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.ashPiled, 2, Pile3render);
Block.setShape(BlockID.ashPiled, 0, 0, 0, 1, 8/16, 1, 2);

Block.setDestroyTime(BlockID.ashPiled, 0.4);
ToolAPI.registerBlockMaterial(BlockID.ashPiled, "dirt", 0, true);

Block.registerDropFunction("ashPiled", function(coords, blockID){  
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.ashPile, randomInt(2, 5), 0);
});

Callback.addCallback("GenerateChunkUniversal", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y > 50 && random.nextFloat() < .65)
   for(let i=0; i<randomInt(1, 3); i++){
 if(World.getBlockID(coords.x + i,coords.y,coords.z + i) == 0){
   if(World.getBlockID(coords.x + i,coords.y,coords.z + i)== BlockID.soilCharred && World.getBlockID(coords.x + i,coords.y + 1,coords.z + i)== 0) 
World.setBlock(coords.x + i,coords.y,coords.z + i,BlockID.ashPiled, 0);
    }
 if(World.getBlockID(coords.x + i,coords.y,coords.z + i) == 0){
   if(World.getBlockID(coords.x + i,coords.y,coords.z + i)== BlockID.soilCharred && World.getBlockID(coords.x + i,coords.y + 1,coords.z + i)== 0) 
World.setBlock(coords.x + i,coords.y,coords.z + i,BlockID.ashPiled, 2);
    }
}});

IDRegistry.genBlockID("emberBlock"); 
Block.createBlock("emberBlock", [
    {name: "Ember Block", texture: [["ember_block", 0]],inCreative: true}]);
Block.setDestroyTime(BlockID.emberBlock, 0.8);
ToolAPI.registerBlockMaterial(BlockID.emberBlock, "dirt", 0, true);

IDRegistry.genBlockID("emberBlockCooled"); 
Block.createBlock("emberBlockCooled", [
    {name: "Cooled Ember Block", texture: [["cooled_ember_block", 0]],inCreative: true}]);
Block.setDestroyTime(BlockID.emberBlockCooled, 1);
ToolAPI.registerBlockMaterial(BlockID.emberBlockCooled, "dirt", 0, true);

Item.registerUseFunctionForID(373, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == BlockID.emberBlock) {
        region.destroyBlock(coords.x,coords.y,coords.z,false);
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.emberBlockCooled, 0);
        AddonEntity.spawn(coords.relative.x, coords.relative.y + 1, coords.relative.z, "desolation:ash_scuttler");
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    } 
});

Item.registerUseFunctionForID(259, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == BlockID.emberBlockCooled) {
        region.destroyBlock(coords.x,coords.y,coords.z,false);
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.emberBlock, 0); 
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    } 
});

Block.registerEntityStepOnFunction(BlockID.emberBlock, function(coords, block, entity){
Entity.setFire(entity, 40, true);
});

//WOOD
(function(){
    let constructVariationsSet = function(name, top, side){
        return [
            {name: name, texture: [[top, 0], [top, 0], [side, 0]], inCreative: true},
            {name: name, texture: [[side, 0], [side, 0], [top, 0], [top, 0], [side, 1]], inCreative: false},
            {name: name, texture: [[side, 1], [side, 1], [side, 1], [side, 1], [top, 0]], inCreative: false}
        ]
    }
    let makeDropFunction = function(id){
        Block.registerDropFunction(id, function(coords, blockID, blockData, level, enchant, item, region){
            return [[blockID, 1, 0]];
        });
    }
    let makePlaceFunction = function(id){
        Block.registerPlaceFunction(id, function(coords, item, block, player, region){
            let r = coords.relative;
            switch(coords.side){
                case 0: case 1:
                    region.setBlock(r.x, r.y, r.z, id, 0); break;
                case 2: case 3:
                    region.setBlock(r.x, r.y, r.z, id, 1); break;
                case 4: case 5:
                    region.setBlock(r.x, r.y, r.z, id, 2); break;
            }
        });
    };
    (function(ids){
        for(let i in ids){
            let block = ids[i];
            let bid = block[0], 
                name = block[1], 
                topt = block[2], 
                sidet = block[3];
            IDRegistry.genBlockID(bid);
            Block.createBlock(bid, constructVariationsSet(name, topt, sidet), BLOCK_TYPE_WOOD);
            ToolAPI.registerBlockMaterial(BlockID[bid], "wood", 0, false);
            makeDropFunction(BlockID[bid]);
            makePlaceFunction(BlockID[bid]);
        }
    })([
        ["charredLog", "Charred Log", "charred_log_top", "charred_log"]    
    ]);
})();

Block.registerDropFunction("charredLog", function(coords, blockID){
if(Math.random() < 0.4){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.charcoalBit, randomInt(3, 9), 0);
      } else {
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, BlockID.charredLog, 1, 0);      
      }
});

IDRegistry.genBlockID("plankCharred");
Block.createBlock("plankCharred", [
    {name: "Charred Planks", texture: [["charred_log_top", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.plankCharred, "wood");

//LEAVES
IDRegistry.genBlockID("burnedLeaves");
Block.createBlock("burnedLeaves", [
    {name: "Ash Bramble", texture: [["ash_bramble", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("burnedLeaves", function(){
    if(Math.random() < .09){
        return [[280, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.burnedLeaves, "plant");

IDRegistry.genBlockID("burnedLeavesNS");
Block.createBlock("burnedLeavesNS", [
    {name: "Charred Branches", texture: [["charred_branches", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("burnedLeavesNS", function(){
    if(Math.random() < .09){
        return [[280, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.burnedLeavesNS, "plant");

const ChNSrender = new ICRender.CollisionShape(); 
ChNSrender.addEntry().addBox(1, 1, 1, 0, 0, 0); 
BlockRenderer.setCustomCollisionShape(BlockID.burnedLeavesNS, 0, ChNSrender); 
Block.setShape(BlockID.burnedLeavesNS, 0, 0, 0, 1, 1, 1, 0);

Callback.addCallback("GenerateChunkUniversal", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y > 50 && random.nextFloat() < .7)
   for(let i=0; i<randomInt(2, 4); i++){
 if(World.getBlockID(coords.x + i,coords.y,coords.z + i)==BlockID.soilCharred && World.getBlockID(coords.x + i,coords.y + 1,coords.z + i)== 0){
World.setBlock(coords.x + i,coords.y + 1,coords.z + i,BlockID.burnedLeavesNS,0);
    }
}});


IDRegistry.genBlockID("activeCoalBlock");
Block.createBlock("activeCoalBlock", [
    {name: "Charcoal Activated", texture: [["activated_charcoal_block", 0]], inCreative: true}
]);

Callback.addCallback("PostLoaded", function () {    
    
Recipes.addShaped({id: BlockID.plankCharred, count: 4, data: 0}, [

        "a  ",
        "   ",
        "   "
    ], ['a',BlockID.charredLog, 0]);
    
Recipes.addShaped({id: 280, count: 4, data: 0}, [

        "a  ",
        "a  ",
        "   "
    ], ['a',BlockID.plankCharred, 0]); 
    
Recipes.addShaped({id: BlockID.activeCoalBlock, count: 1, data: 0}, [

        "aaa",
        "aaa",
        "aaa"
    ], ['a',ItemID.charcoalActivated, 0]);  
  
Recipes.addShaped({id: BlockID.activeCoalBlock, count: 9, data: 0}, [

        "   ",
        " a ",
        "   "
    ], ['a', BlockID.activeCoalBlock, 0]);         
}); 