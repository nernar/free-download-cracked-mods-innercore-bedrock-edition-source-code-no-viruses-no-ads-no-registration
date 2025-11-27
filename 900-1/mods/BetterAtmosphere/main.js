/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: header.js

IMPORT("TileRender");
IMPORT("BaseBlocks");

var Flowers = WRAP_NATIVE("FlowerModule");

function setPlantModel(id, isDouble) {
var shape = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(id, 0, shape);    
Flowers.registerFlower(id, isDouble); 
} 

var axes = [271, 275, 258, 286, 279];

const DIR = __dir__+"structures/";

function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function addShapedRecipe(id, count, data, mask, keys) {
    Recipes.addShaped({id: id, count: count, data: data}, mask, keys);
}

function addShapelessRecipe(id, count, data, items) {
    let ingredients = [];
    for (let i in items){
        ingredients.push({id: items[i].id, data: items[i].data});
    }
    Recipes.addShapeless({id: id, count: count, data: data}, ingredients);
}

function generateBuilds(biomes, pool, namee, obj) { 
var Biome = World.getBiome(obj.offset.x, obj.offset.z);
   for(var l in biomes) {
    if(Biome == biomes[l])     
        StructurePiece.register(StructurePiece.getDefault({
        type: "default",
        dimension: 0,
        white_list_blocks: true,
        blocks: [obj.check],
        name: pool.get(namee),
        chance: obj.chance,
        distance: obj.distance,
        isSet: true,
        offset: {x: obj.offset.x, y: obj.offset.y, z: obj.offset.z},
        structure: new Structure.advanced(namee)
        })); 
    }
}

function generateTree(pool, name, x, y, z, region) {   
    StructurePiece.addStructure(name, x, y, z, region);  
     Structure.set(StructureUtility.rotate(pool.get(name), StructureRotation.getAllY()[randomInt(0,3)]), x, y, z, region);
    }
    




// file: Blocks.js

const BLOCK_TYPE_GRASS = Block.createSpecialType({
    base: 3,
    solid: true,
    renderlayer: 2,
    explosionres: 4,
    destroytime: 1.25,
    translucency: 0,
    sound: "grass"
});

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

var BLOCK_TYPE_LEAVES_DECORATIVE = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.5,
    explosionres: 1,
    renderallfaces: true,
    renderlayer: 1,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
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

var BLOCK_TYPE_WOOD = Block.createSpecialType({
    solid: true,
    renderlayer: 2,
    explosionres: 8,
    translucency: 0,
    sound: "wood"
});

//LOGS
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
        ["mapleWood", "Maple Wood", "maple_log_top", "maple_log"],
        ["mapleWoodSapping", "Maple Wood Sapping", "stripped_maple_log_top", "sappy_maple_log"],
        ["mapleWoodStriped", "Maple Wood Stripped", "stripped_maple_log_top", "stripped_maple_log"]
    ]);
})();

//PLANKS
IDRegistry.genBlockID("mapleWoodPlanks");
Block.createBlock("mapleWoodPlanks", [
    {name: "Maple Wood Planks", texture: [["maple_planks", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);
ToolAPI.registerBlockMaterial(BlockID.mapleWoodPlanks, "wood", 0, false);

//SLABS
IDRegistry.genBlockID("mapleWoodSlabDouble");
IDRegistry.genBlockID("mapleWoodSlab");

BaseBlocks.createSlab("mapleWoodSlab", [
    {name: "Maple Wood Slab", texture: [["maple_planks", 0]], inCreative: true}
], BlockID.mapleWoodSlabDouble);
BaseBlocks.createDoubleSlab("mapleWoodSlabDouble", [
    {name: "Maple Wood Slab", texture: [["maple_planks", 0]], inCreative: false}
], BLOCK_TYPE_WOOD, BlockID.mapleWoodSlab);

ToolAPI.registerBlockMaterial(BlockID.mapleWoodSlab, "wood", 0, false);
ToolAPI.registerBlockMaterial(BlockID.mapleWoodSlabDouble, "wood", 0, false);

//LEAVES&SAPLINGS
IDRegistry.genBlockID("mapleLeaves");
Block.createBlock("mapleLeaves", [
    {name: "Maple Leaves", texture: [["maple_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("mapleLeavesAu");
Block.createBlock("mapleLeavesAu", [
    {name: "Maple Leaves", texture: [["maple_leaves_autumn", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("mapleLeavesAuRed");
Block.createBlock("mapleLeavesAuRed", [
    {name: "Maple Leaves", texture: [["maple_leaves_red", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("mapleLeavesWhinter");
Block.createBlock("mapleLeavesWhinter", [
    {name: "Maple Leaves", texture: [["maple_leaves_whinter", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("mapleLeavesYellow");
Block.createBlock("mapleLeavesYellow", [
    {name: "Maple Leaves", texture: [["maple_leaves_yellow", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

Item.addCreativeGroup("wood", Translation.translate("Maple Wood"), [BlockID.mapleWood, BlockID.mapleWoodSapping, BlockID.mapleWoodStriped]);
Item.setCategory("mapleWood", 1);
Item.setCategory("mapleWoodSapping", 1);
Item.setCategory("mapleWoodStriped", 1);

Item.addCreativeGroup("leaves", Translation.translate("Leaves"), [BlockID.mapleLeaves, BlockID.mapleLeavesAu, BlockID.mapleLeavesAuRed, BlockID.mapleLeavesWhinter]);
Item.setCategory("mapleLeaves", 1);
Item.setCategory("mapleLeavesAu", 1);
Item.setCategory("mapleLeavesAuRed", 1);
Item.setCategory("mapleLeavesWhinter", 1);
Item.setCategory("mapleLeavesYellow", 1);

Item.setCategory("mapleWoodPlanks", 0);
Item.setCategory("mapleWoodSlab", 0);
//CARPETS
IDRegistry.genBlockID("mapleLeavesC");
Block.createBlock("mapleLeavesC", [
    {name: "Maple Leaves", texture: [["maple_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES_DECORATIVE);

IDRegistry.genBlockID("mapleLeavesAuC");
Block.createBlock("mapleLeavesAuC", [
    {name: "Maple Leaves", texture: [["maple_leaves_autumn", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES_DECORATIVE);

IDRegistry.genBlockID("mapleLeavesAuRedC");
Block.createBlock("mapleLeavesAuRedC", [
    {name: "Maple Leaves", texture: [["maple_leaves_red", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES_DECORATIVE);

IDRegistry.genBlockID("mapleLeavesWhinterC");
Block.createBlock("mapleLeavesWhinterC", [
    {name: "Maple Leaves", texture: [["maple_leaves_whinter", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES_DECORATIVE);

IDRegistry.genBlockID("mapleLeavesYellowC");
Block.createBlock("mapleLeavesYellowC", [
    {name: "Maple Leaves", texture: [["maple_leaves_yellow", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES_DECORATIVE);

Item.addCreativeGroup("carpets", Translation.translate("Carpets"), [BlockID.mapleLeavesC, BlockID.mapleLeavesAuC, BlockID.mapleLeavesAuRedC, BlockID.mapleLeavesWhinterC, BlockID.mapleLeavesYellowC]);
Item.setCategory("mapleLeavesC", 1);
Item.setCategory("mapleLeavesAuC", 1);
Item.setCategory("mapleLeavesAuRedC", 1);
Item.setCategory("mapleLeavesWhinterC", 1);
Item.setCategory("mapleLeavesYellowC", 1);

const mapleLeavesCrender = new ICRender.CollisionShape();
mapleLeavesCrender.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.mapleLeavesC, 0, mapleLeavesCrender);
Block.setShape(BlockID.mapleLeavesC, 0, 0, 0, 1, 1/16, 1, 0);

const mapleLeavesAuCrender = new ICRender.CollisionShape();
mapleLeavesAuCrender.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.mapleLeavesAuC, 0, mapleLeavesAuCrender);
Block.setShape(BlockID.mapleLeavesAuC, 0, 0, 0, 1, 1/16, 1, 0);

const mapleLeavesRedCrender = new ICRender.CollisionShape();
mapleLeavesRedCrender.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.mapleLeavesRedC, 0, mapleLeavesRedCrender);
Block.setShape(BlockID.mapleLeavesRedC, 0, 0, 0, 1, 1/16, 1, 0);

const mapleLeavesAuRedCrender = new ICRender.CollisionShape();
mapleLeavesAuRedCrender.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.mapleLeavesAuRedC, 0, mapleLeavesAuRedCrender);
Block.setShape(BlockID.mapleLeavesAuRedC, 0, 0, 0, 1, 1/16, 1, 0);

const mapleLeavesWhinterCrender = new ICRender.CollisionShape();
mapleLeavesWhinterCrender.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.mapleLeavesWhinterC, 0, mapleLeavesWhinterCrender);
Block.setShape(BlockID.mapleLeavesWhinterC, 0, 0, 0, 1, 1/16, 1, 0);

const mapleLeavesYellowCrender = new ICRender.CollisionShape();
mapleLeavesYellowCrender.addEntry().addBox(1, 1, 1, 0, 0, 0);
BlockRenderer.setCustomCollisionShape(BlockID.mapleLeavesYellowC, 0, mapleLeavesYellowCrender);
Block.setShape(BlockID.mapleLeavesYellowC, 0, 0, 0, 1, 1/16, 1, 0);


Block.registerDropFunction(BlockID.mapleLeaves, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .095) return [[ItemID.mapleSapling, 1, 0]];
    return [];
});

Block.registerDropFunction(BlockID.mapleLeavesAu, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .095) return [[ItemID.mapleSaplingAu, 1, 0]];
});

Block.registerDropFunction(BlockID.mapleLeavesAuRed, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .095) return [[ItemID.mapleSaplingAuRed, 1, 0]];
});

Block.registerDropFunction(BlockID.mapleLeavesWhinter, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .064) return [[280, 1, 0]];
});

Block.registerDropFunction(BlockID.mapleSaplingYe, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .064) return [[280, 1, 0]];
});

//CARPETS
Block.registerDropFunction(BlockID.mapleLeavesC, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .095) return[]; 
});

Block.registerDropFunction(BlockID.mapleLeavesAuC, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .095) return[];
});

Block.registerDropFunction(BlockID.mapleLeavesAuRedC, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .095) return[];
});

Block.registerDropFunction(BlockID.mapleLeavesWhinterC, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .064) return[];
});

Block.registerDropFunction(BlockID.mapleLeavesYellowC, function(coords, blockID, blockData, level, enchant, item, region){
    if(Math.random() < .064) return[];
});

IDRegistry.genBlockID("mapleSapling");
IDRegistry.genBlockID("mapleSaplingAu");
IDRegistry.genBlockID("mapleSaplingAuRed");
IDRegistry.genBlockID("mapleSaplingYe");

Block.createBlock("mapleSapling", [
    {name: "Maple Sapling", texture: [["maple_sapling", 0], ["maple_sapling", 0], ["maple_sapling", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

Block.createBlock("mapleSaplingAu", [
    {name: "Maple Sapling", texture: [["maple_sapling", 1], ["maple_sapling", 1], ["maple_sapling", 1]], inCreative: false}
], BLOCK_TYPE_PLANT);

Block.createBlock("mapleSaplingAuRed", [
    {name: "Maple Sapling", texture: [["maple_sapling", 2], ["maple_sapling", 2], ["maple_sapling", 2]], inCreative: false}
], BLOCK_TYPE_PLANT);

Block.createBlock("mapleSaplingYe", [
    {name: "Maple Sapling", texture: [["maple_sapling", 3], ["maple_sapling", 3], ["maple_sapling", 3]], inCreative: false}
], BLOCK_TYPE_PLANT);

Block.registerDropFunction(BlockID.mapleSapling, function(coords, blockID, blockData, level, enchant, item, region){
    return [[ItemID.mapleSapling, 1, 0]];
});

Block.registerDropFunction(BlockID.mapleSaplingAu, function(coords, blockID, blockData, level, enchant, item, region){
    return [[ItemID.mapleSaplingAu, 1, 0]];
});

Block.registerDropFunction(BlockID.mapleSaplingAuRed, function(coords, blockID, blockData, level, enchant, item, region){
    return [[ItemID.mapleSaplingAuRed, 1, 0]];
});

Block.registerDropFunction(BlockID.mapleSaplingYe, function(coords, blockID, blockData, level, enchant, item, region){
    return [[ItemID.mapleSaplingYe, 1, 0]];
});

IDRegistry.genItemID("mapleSapling");
IDRegistry.genItemID("mapleSaplingAu");
IDRegistry.genItemID("mapleSaplingAuRed");
IDRegistry.genItemID("mapleSaplingYe");

Item.createItem("mapleSapling", "Maple Sapling", {name: "maple_sapling", meta: 0});
Item.createItem("mapleSaplingAu", "Maple Sapling", {name: "maple_sapling", meta: 1});
Item.createItem("mapleSaplingAuRed", "Maple Sapling", {name: "maple_sapling", meta: 2});
Item.createItem("mapleSaplingYe", "Maple Sapling", {name: "maple_sapling", meta: 3});

Item.setCategory(ItemID.mapleSapling, 2);
Item.setCategory(ItemID.mapleSaplingAu, 2);
Item.setCategory(ItemID.mapleSaplingAuRed, 2);
Item.setCategory(ItemID.mapleSaplingYe, 2);

ToolAPI.registerBlockMaterial(BlockID.mapleSapling, "plant", 0, false);
ToolAPI.registerBlockMaterial(BlockID.mapleSaplingAu, "plant", 0, false);
ToolAPI.registerBlockMaterial(BlockID.mapleSaplingAuRed, "plant", 0, false);
ToolAPI.registerBlockMaterial(BlockID.mapleSaplingYe, "plant", 0, false);

//TileRenderer.setPlantModel(BlockID.mapleSapling, 0, "maple_sapling", 0);
setPlantModel(BlockID.mapleSapling, false);
//TileRenderer.setPlantModel(BlockID.mapleSaplingAu, 0, "maple_sapling", 1);
setPlantModel(BlockID.mapleSaplingAu, false);
//TileRenderer.setPlantModel(BlockID.mapleSaplingAuRed, 0, "maple_sapling", 2);
setPlantModel(BlockID.mapleSaplingAuRed, false);

setPlantModel(BlockID.mapleSaplingYe, false);

Item.registerUseFunction(ItemID.mapleSapling, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mapleSapling, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

Item.registerUseFunction(ItemID.mapleSaplingAu, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mapleSaplingAu, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

Item.registerUseFunction(ItemID.mapleSaplingAuRed, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mapleSaplingAuRed, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

Item.registerUseFunction(ItemID.mapleSaplingAuRed, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mapleSaplingAuRed, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

Item.registerUseFunction(ItemID.mapleSaplingAuRed, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mapleSaplingAuRed, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

Item.registerUseFunction(ItemID.mapleSaplingYe, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mapleSaplingYe, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});


//STRUCTURE_INI
 //NORMAL
var AutumnPool = new StructurePool("Autumn_Trees");  
 //mapleG = new Structure("Maple1");
AutumnPool.load(DIR+"Maple1.struct", "mapleG", "Structures");
 //mapleA = new Structure("Maple2");
AutumnPool.load(DIR+"Maple2.struct", "mapleA", "Structures");
 //mapleR = new Structure("Maple3");
AutumnPool.load(DIR+"Maple3.struct", "mapleR", "Structures");
 //mapleW = new Structure("Maple4");
AutumnPool.load(DIR+"Maple4.struct", "mapleW", "Structures");
//TreesPool.load(DIR+"Maple5.struct", "mapleY", "Structures");
 //BIG
 //mapleBG = new Structure("MapleM1");
AutumnPool.load(DIR+"MapleM1.struct", "mapleBG", "Structures");
 //mapleBA = new Structure("MapleM2");
AutumnPool.load(DIR+"MapleM2.struct", "mapleBA", "Structures");
 //mapleBR = new Structure("MapleM3");
AutumnPool.load(DIR+"MapleM3.struct", "mapleBR", "Structures");
 //mapleBW = new Structure("MapleM4");
AutumnPool.load(DIR+"MapleM4.struct", "mapleBW", "Structures");
//TreesPool.load(DIR+"MapleM5.struct", "mapleBY", "Structures"); 
 //BUSHES_CUSTOM
var AutumnBushesPool = new StructurePool("Autumn_Bushes");
 //bushG = new Structure("Bush1");
AutumnBushesPool.load(DIR+"Bush1.struct", "bushG", "Structures");
 //bushA = new Structure("Bush4");
AutumnBushesPool.load(DIR+"Bush4.struct", "bushA", "Structures");
 //bushR = new Structure("Bush2");
AutumnBushesPool.load(DIR+"Bush2.struct", "bushR", "Structures");
 //bushW = new Structure("Bush3");
AutumnBushesPool.load(DIR+"Bush3.struct", "bushW", "Structures");
 //BUSHES_VANILLA
 //bushVO = new Structure("BushV2");
AutumnBushesPool.load(DIR+"BushV2.struct", "bushVO", "Structures");
 //bushVS = new Structure("BushV1");
AutumnBushesPool.load(DIR+"BushV1.struct", "bushVS", "Structures");
 //CAMP
 //fireN = new Structure("Campfire1");
AutumnBushesPool.load(DIR+"Campfire1.struct", "fireN", "Structures");
 //fireL = new Structure("Campfire2");
AutumnBushesPool.load(DIR+"Campfire2.struct", "fireL", "Structures");
 //thriveN = new Structure("LostThrive1");
AutumnBushesPool.load(DIR+"LostThrive1.struct", "thriveN", "Structures");
 //thriveL = new Structure("LostThrive2");
AutumnBushesPool.load(DIR+"LostThrive2.struct", "thriveL", "Structures");

 Block.setRandomTickCallback(BlockID.mapleSapling, function(x, y, z, id, data) {     
 let tsu = BlockSource.getDefaultForDimension(1);
  var coords = coords.relative;
   if (tsu != null && tsu.getBlockId(coords.x, coords.y - 1, coords.z) == 2) {
  tsu.destroyBlock(coords.x,coords.y,coords.z,false);                      
 mapleG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu); 
      }
 });       

 Block.setRandomTickCallback(BlockID.mapleSaplingAu, function(x, y, z, id, data) {      
    let tsu = BlockSource.getDefaultForDimension(1);
  var coords = coords.relative;
   if (tsu != null && tsu.getBlockId(coords.x, coords.y - 1, coords.z) == 2) {
  tsu.destroyBlock(coords.x,coords.y,coords.z,false);                      
 mapleA.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu);    
      }
 }); 

 Block.setRandomTickCallback(BlockID.mapleSaplingAuRed, function(x, y, z, id, data) {     
 let tsu = BlockSource.getDefaultForDimension(1);
  var coords = coords.relative;
   if (tsu != null && tsu.getBlockId(coords.x, coords.y - 1, coords.z) == 2) {
  tsu.destroyBlock(coords.x,coords.y,coords.z,false);                      
 mapleR.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, tsu); 
      }
 }); 

Callback.addCallback("PostLoaded", function(){
    addShapelessRecipe(BlockID.mapleWoodPlanks, 4, 0, [{id:BlockID.mapleWood, data:0}]);
    Recipes.addFurnace(BlockID.mapleWood, 263, 1);
    Recipes.addFurnaceFuel(BlockID.mapleWood, 0, 300);
    Recipes.addFurnace(BlockID.mapleWoodSapping, 263, 1);
    Recipes.addFurnaceFuel(BlockID.mapleWoodSapping, 0, 360);
    addShapelessRecipe(BlockID.mapleWoodPlanks, 4, 0, [{id:BlockID.mapleWoodSapping, data:0}]); 
    addShapelessRecipe(BlockID.mapleWoodPlanks, 4, 0, [{id:BlockID.mapleWoodStriped, data:0}]); 
    Recipes.addFurnaceFuel(BlockID.mapleWoodStriped, 0, 300);
    Recipes.addFurnace(BlockID.mapleWoodStriped, 263, 1);
    addShapelessRecipe(ItemID.foulBerryPips, 1, 0, [{id:ItemID.foulBerries, data:0}]); 
    addShapelessRecipe(351, 1, 5, [{id:ItemID.autumnCrocus, data:0}]);
});

//NESTS
IDRegistry.genBlockID("nestSmall");
Block.createBlock("nestSmall", [
    {name: "Bird Nest", texture: [["nest", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES_DECORATIVE);

var Nsmesh = new RenderMesh();
Nsmesh.setBlockTexture("nest",0);
Nsmesh.importFromFile(__dir__+"/models/nest_small.obj","obj",{translate: [0.5, 0, 0.5]});
var Nsrender = new ICRender.Model();
Nsrender.addEntry(new BlockRenderer.Model(Nsmesh));
BlockRenderer.setStaticICRender(BlockID.nestSmall, 0, Nsrender);

Block.registerDropFunction("nestSmall", function(){ 
  return [[344, randomInt(0, 3), 0]];
});

//CROCUS
IDRegistry.genItemID("autumnCrocus");
Item.createItem("autumnCrocus", "Autumn Crocus", {name: "autumn_crocus", meta: 0}, {stack: 64});

Item.registerUseFunction(ItemID.autumnCrocus, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.autumnCrocus, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

IDRegistry.genBlockID("autumnCrocus");
Block.createBlock("autumnCrocus", [
    {name: "Autumn Crocus", texture: [["autumn_crocus", 0], ["autumn_crocus", 0], ["autumn_crocus", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
//TileRenderer.setPlantModel(BlockID.autumnCrocus, 0, "autumn_crocus", 0);
setPlantModel(BlockID.autumnCrocus, false);

Block.registerDropFunction("autumnCrocus", function(){ 
  return [[ItemID.autumnCrocus, 1, 0]];
});    

Item.addCreativeGroup("planty", Translation.translate("Planty"), [ItemID.autumnCrocus, ItemID.mapleSapling, ItemID.mapleSaplingAu, ItemID.mapleSaplingAuRed, BlockID.nestSmall]);
Item.setCategory("nestSmall", 2);
Item.setCategory(ItemID.autumnCrocus, 2);




// file: Food.js

//BERRYS
IDRegistry.genItemID("foulBerries");
Item.createFoodItem("foulBerries", "Foul Berries", {name: "foul_berries"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.foulBerries){
Entity.addEffect(pl, 19, 0, 180, false, false);
}});

IDRegistry.genItemID("foulBerryPips");
Item.createFoodItem("foulBerryPips", "Foul Berry Pips", {name: "foul_berry_pips"},{isTech:false,food: 2});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.foulBerryPips){
Entity.addEffect(pl, 19, 1, 180, false, false);
}});

IDRegistry.genItemID("blueBerries");
Item.createFoodItem("blueBerries", "Blue Berries", {name: "blue_berries"},{isTech:false,food: 4});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.blueBerries){
Entity.addEffect(pl, 10, 0, 80, false, false);
}});

IDRegistry.genItemID("poisonedBerries");
Item.createFoodItem("poisonedBerries", "Poisoned Berries", {name: "poisoned_berries"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.poisonedBerries){
Entity.addEffect(pl, 19, 2, 360, false, false);
Entity.addEffect(pl, 9, 1, 180, false, false);
}});

IDRegistry.genItemID("pumpkinBread");
Item.createFoodItem("pumpkinBread", "Pumpkin Bread", {name: "pumpkin_bread"},{isTech:false,food: 12});
Callback.addCallback("PostLoaded", function (){
Recipes.addShaped({id: ItemID.pumpkinBread, count: 2, data: 0}, [
    "ab"
], ['a', 86, 0, 'b', 344, 0]);
});


//DRINK
IDRegistry.genItemID("sapBottle");
Item.createFoodItem("sapBottle", "Sap Bottle", {name: "sap_bottle"},{isTech:false,food: 11});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
var Region = BlockSource.getDefaultForActor(pl);
if(Entity.getCarriedItem(pl).id == ItemID.sapBottle){
var crf = Entity.getPosition(pl);
Region.spawnDroppedItem(crf.x, crf.y, crf.z, 374, 1, 0);
}});

IDRegistry.genItemID("foulSoup");
Item.createFoodItem("foulSoup", "Foul Soup", {name: "foul_soup"},{isTech:false,food: 9});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
var Region = BlockSource.getDefaultForActor(pl);
if(Entity.getCarriedItem(pl).id == ItemID.foulSoup){
var crf = Entity.getPosition(pl);
ntity.addEffect(pl, 19, 1, 200, false, false);
Region.spawnDroppedItem(crf.x, crf.y, crf.z, 281, 1, 0);
}});
Recipes.addShaped({id: ItemID.foulSoup, count: 1, data: 0}, [
    "aa",
    "ba",
], ['a', ItemID.foulBerries, 0, 'b', 281, 0]);

Item.addCreativeGroup("food", Translation.translate("Food"), [ItemID.foulBerries, ItemID.foulBerryPips, ItemID.sapBottle, ItemID.foulSoup, ItemID.foulSou]);
Item.setCategory(ItemID.foulBerries, 2);
Item.setCategory(ItemID.foulBerryPips, 2);
Item.setCategory(ItemID.sapBottle, 2);
Item.setCategory(ItemID.foulSoup, 2);
Item.setCategory(ItemID.sapBottle, 2);

Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {   
    var crd = coords.relative;
 var Region = BlockSource.getDefaultForActor(player); 
  if (Region.getBlockId(crd.x, crd.y, crd.z) == BlockID.mapleWood) {
   for(var j in axes) {
    if (item.id == axes[j]) {     
    Region.destroyBlock(crd.x, crd.y, crd.z, false);
    if(Math.random() < 0.32){
    Region.setBlock(crd.x, crd.y, crd.z, BlockID.mapleWoodSapping, 0);  
    } else  {
    Region.setBlock(crd.x, crd.y, crd.z, BlockID.mapleWoodStriped, 0);  
                 }
            }
       }
  }
});

Item.registerUseFunctionForID(374, function(coords, item, block, player) {
 var Region = BlockSource.getDefaultForActor(player); 
    if (block.id == BlockID.mapleWoodSapping) {  
        Region.destroyBlock(coords.x, coords.y, coords.z, false);
        Region.setBlock(coords.x, coords.y, coords.z, BlockID.mapleWoodStriped, block.data); 
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
       Region.spawnDroppedItem(coords.relative.x + 0.1, coords.relative.y, coords.relative.z + 0.1, ItemID.sapBottle, 1, 0);
    }
});

//BUSHES
IDRegistry.genBlockID("foulBushmicro");
Block.createBlock("foulBushmicro", [
    {name: "Foul Berry Pips", texture: [["foul_berry_bush_pips", 0], ["foul_berry_bush_pips", 0], ["foul_berry_bush_pips", 0]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushmicro, "plant");
setPlantModel(BlockID.foulBushmicro, false);

Block.registerDropFunction("foulBushmicro", function(coords, blockID){ 
    return [[ItemID.foulBerryPips, randomInt(1, 3), 0]];
});

Block.setRandomTickCallback(BlockID.foulBushmicro, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.foulBushmini, 0); 
     }
}); 

IDRegistry.genBlockID("foulBushmini");
Block.createBlock("foulBushmini", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 0], ["foul_berry_bush_stage", 0], ["foul_berry_bush_stage", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushmini, "plant");
setPlantModel(BlockID.foulBushmini, false);

Block.registerDropFunction("foulBushmini", function(){ 
  return [];
});

IDRegistry.genBlockID("foulBush");
Block.createBlock("foulBush", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 2], ["foul_berry_bush_stage", 2], ["foul_berry_bush_stage", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBush, "plant");
setPlantModel(BlockID.foulBush, true);

Block.registerDropFunction("foulBush", function(){ 
  return [];
});

IDRegistry.genBlockID("foulBushTop");
Block.createBlock("foulBushTop", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 3], ["foul_berry_bush_stage", 3], ["foul_berry_bush_stage", 3]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushTop, "plant");
setPlantModel(BlockID.foulBushTop, true);

Block.registerDropFunction("foulBushTop", function(){ 
  return [];
});

Block.registerEntityInsideFunction(BlockID.foulBushmini, function(coords, id, entity){
 var Region = BlockSource.getDefaultForActor(entity);    
  if(Region.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      Region.destroyBlock(coords.x, coords.y, coords.z,false);                      
  Region.setBlock(coords.x, coords.y, coords.z, BlockID.foulBush, 0); 
  Region.setBlock(coords.x, coords.y + 1, coords.z, BlockID.foulBushTop, 0); 
     }
});

IDRegistry.genBlockID("foulBerriedBush");
Block.createBlock("foulBerriedBush", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 4], ["foul_berry_bush_stage", 4], ["foul_berry_bush_stage", 4]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBerriedBush, "plant");
setPlantModel(BlockID.foulBerriedBush, true);

Block.registerDropFunction("foulBerriedBush", function(){ 
  return [[ItemID.foulBerries, randomInt(1, 3), 0]];
});

IDRegistry.genBlockID("foulBerriedBushTop");
Block.createBlock("foulBerriedBushTop", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 5], ["foul_berry_bush_stage", 5], ["foul_berry_bush_stage", 5]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBerriedBushTop, "plant");
setPlantModel(BlockID.foulBerriedBushTop, true);

Block.registerDropFunction("foulBerriedBush", function(){ 
  return [[ItemID.foulBerries, randomInt(1, 3), 0]];
});

Item.registerUseFunction(ItemID.foulBerryPips, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.foulBushmicro, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

Block.setRandomTickCallback(BlockID.foulBush, function(x, y, z, id, data){   
var regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y + 1, coords.z) == BlockID.foulBushTop){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);   
      regi.destroyBlock(coords.x, coords.y + 1, coords.z,false);       
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.foulBerriedBush, 0); 
  regi.setBlock(coords.x, coords.y + 1, coords.z, BlockID.foulBerriedBushTop, 0); 
     }
}); 

//bluberries
IDRegistry.genBlockID("blueBushmicro");
Block.createBlock("blueBushmicro", [
    {name: "Blue Berry Pips", texture: [["empty", 0], ["empty", 0], ["blue_berry_bush_stage", 0]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueBushmicro, "plant");
TileRenderer.setPlantModel(BlockID.blueBushmicro, 0, "blue_berry_bush_stage", 0);

Block.registerDropFunction("blueBushmicro", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.blueBerries, 1, 0);
});

Block.setRandomTickCallback(BlockID.blueBushmicro, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueBushmini, 0); 
     }
}); 

IDRegistry.genBlockID("blueBushmini");
Block.createBlock("blueBushmini", [
    {name: "Blue Berry Bush", texture: [["empty", 0], ["empty", 0], ["blue_berry_bush_stage", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueBushmini, "plant");
TileRenderer.setPlantModel(BlockID.blueBushmini, 0, "blue_berry_bush_stage", 1);

Block.registerDropFunction("blueBushmini", function(){ 
   return [];
});

Block.setRandomTickCallback(BlockID.blueBushmini, function(x, y, z, id, data){   
let regi = BlockSource.getCurrentWorldGenRegion();   
  if(regi.getBlockId(coords.x, coords.y - 1, coords.z) == 2){
      regi.destroyBlock(coords.x, coords.y, coords.z,false);                      
  regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueBush, 0); 
     }
});

IDRegistry.genBlockID("blueBush");
Block.createBlock("blueBush", [
    {name: "Blue Berry Bush", texture: [["empty", 0], ["empty", 0], ["blue_berry_bush_stage", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.blueBush, "plant");
TileRenderer.setPlantModel(BlockID.blueBush, 0, "blue_berry_bush_stage", 2);

Block.registerDropFunction("blueBush", function(){ 
   return [[ItemID.blueBerries, randomInt(1, 3), 0]];
});

Item.registerUseFunction(ItemID.blueBerries, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.blueBushmicro, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});


//poisonberries
IDRegistry.genItemID("poisonBushB");
Item.createItem("poisonBushB", "Poison Bush", {name: "poison_bottom", meta: 0}, {stack: 64});

Item.registerUseFunction(ItemID.poisonBushB, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == 2) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.poisonBushB, 0);
        region.setBlock(coords.relative.x, coords.relative.y + 1, coords.relative.z, BlockID.poisonBush, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

IDRegistry.genBlockID("poisonBushB");
Block.createBlock("poisonBushB", [
    {name: "Poison Bush", texture: [["poison_bottom", 0]], inCreative: true}
], BLOCK_TYPE_PLANT);
setPlantModel(BlockID.poisonBushB, true);

Block.registerDropFunction("poisonBushB", function(){ 
  return [[280, randomInt(1, 3), 0]];
});    

Callback.addCallback('DestroyBlock', function (coords, block, player) {
let region = BlockSource.getDefaultForActor(player);
if(block.id == BlockID.poisonBushB && region.getBlockId(coords.x, coords.y + 1, coords.z) == BlockID.poisonBush){
region.destroyBlock(coords.x, coords.y + 1, coords.z, true);             
     }
});

IDRegistry.genBlockID("poisonBush");
Block.createBlock("poisonBush", [
    {name: "Poison Bush", texture: [["poisoned_berry_leaves", 0]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.poisonBush, "plant");

Block.registerDropFunction("poisonBush", function(){ 
   return [[ItemID.poisonedBerries, randomInt(2, 5), 0]];
});

IDRegistry.genBlockID("poisonBushE");
Block.createBlock("poisonBushE", [
    {name: "Poison Bush", texture: [["poisoned_berry_leaves_e", 0]], inCreative: true}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.poisonBushE, "plant");

Block.registerDropFunction("poisonBushE", function(){ 
   return [];
});


Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {
var regi = BlockSource.getCurrentWorldGenRegion();   
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.foulBerriedBush) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);    
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.foulBush, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.foulBerries, randomInt(1, 4), 0);  
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.foulBerriedBushTop) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.foulBushTop, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.foulBerries, randomInt(1, 4), 0);   
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.blueBush) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.blueBushmini, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.blueBerries, randomInt(1, 4), 0);   
   }
  if (regi.getBlockId(coords.x, coords.y, coords.z) == BlockID.poisonBush) {
     regi.destroyBlock(coords.x, coords.y, coords.z,false);     
     regi.setBlock(coords.x, coords.y, coords.z, BlockID.poisonBushE, 0);     
     World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.poisonedBerries, randomInt(2, 5), 0);   
   }
});

ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.mapleLeaves, -1, ["maple_leaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesAu, -1, ["maple_leaves_autumn", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesAuRed, -1, ["maple_leaves_red", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesWhinter, -1, ["maple_leaves_whinter", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesYellow, -1, ["maple_leaves_yellow", 0]);
    BetterFoliage.setupLeavesModel(BlockID.poisonBush, -1, ["poisoned_berry_leaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.poisonBushE, -1, ["poisoned_berry_leaves_e", 0]);
});




// file: Generation.js

//BIOMES

const biomes = [1, 4, 5, 27, 155, 19];

var autumn = new CustomBiome("autumn")
.setGrassColor(0xFF8C00)
.setFoliageColor(0xFF8C00);
autumn.setServerJson(JSON.stringify({
"components": {
    "minecraft:climate": {
        "downfall": 0.0,
        "snow_accumulation": [
            0.0,
            0.0
        ],
        "temperature": 1.0,
        "blue_spores": 0,
        "red_spores": 0,
        "white_ash": 0,
        "ash": 0
    },
    "minecraft:overworld_height": {
        "noise_type": "lowlands"
    },
    "animal": {},
    "monster": {},
    "overworld": {},
    "autumn": {},
    "minecraft:surface_parameters": {
        "top_material": "minecraft:grass",
        "mid_material": "minecraft:dirt",
        "foundation_material": "minecraft:stone",
        "sea_floor_material": "minecraft:clay",
        "sea_material": "minecraft:water",
        "sea_floor_depth": 7
    },
    "minecraft:overworld_generation_rules": {
        "hills_transformation": "forest_hills",
        "river_transformation": "frozen_river",
        "generate_for_climates": [
            [
                "cold",
                35
            ],
            [
                "medium",
                32
            ],
            [
                "frozen",
                8
            ]
        ],
        "shore_transformation": "cold_beach"
    }
}
}));

autumn.setClientJson(JSON.stringify({
"water_surface_color": "#0b1662",
"water_fog_color": "#0e1c5e",
"water_surface_transparency": 0.7,
"water_fog_distance": 12,
"fog_identifier": "better_atmosphere:autumn"
}));



var maple_woods = new CustomBiome("maple_woods")
maple_woods.setServerJson(JSON.stringify({
"components": {
    "minecraft:climate": {
        "downfall": 0.0,
        "snow_accumulation": [
            0.0,
            0.0
        ],
        "temperature": 1.0,
        "blue_spores": 0,
        "red_spores": 0,
        "white_ash": 0,
        "ash": 0
    },
    "minecraft:overworld_height": {
        "noise_type": "lowlands"
    },
    "animal": {},
    "monster": {},
    "overworld": {},
    "autumn": {},
    "minecraft:surface_parameters": {
        "top_material": "minecraft:grass",
        "mid_material": "minecraft:dirt",
        "foundation_material": "minecraft:stone",
        "sea_floor_material": "minecraft:gravel",
        "sea_material": "minecraft:water",
        "sea_floor_depth": 7
    },
    "minecraft:overworld_generation_rules": {
        "hills_transformation": "forest_hills",  
        "generate_for_climates": [
            [
                "cold",
                8
            ],
            [
                "medium",
                38
            ],
            [
                "warm",
                34
            ]
        ]
    }
}
}));

maple_woods.setClientJson(JSON.stringify({
"water_surface_color": "#0b1662",
"water_fog_color": "#0e1c5e",
"water_surface_transparency": 0.7,
"water_fog_distance": 12,
"fog_identifier": "better_atmosphere:maple_woods"
}));

//MAIN

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
 var Biome = World.getBiome(coords.x, coords.z);
  var regi = BlockSource.getCurrentWorldGenRegion();
if(coords.y < 56) return;
for (var xx = 0; xx < randomInt(3, 5); xx++) {
 for (var zz = 0; zz < randomInt(3, 5); zz++) {
     
  if (Biome == maple_woods.id || Biome == 4  && random.nextFloat() < .4) {
   coords = GenerationUtils.findSurface(coords.x + xx, 88, coords.z + zz); 
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) 
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.mapleLeavesC, 0); 
        }

  if (Biome == autumn.id && random.nextFloat() < .45) {
   coords = GenerationUtils.findSurface(coords.x + xx, 88, coords.z + zz);  
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.mapleLeavesAuC, 0); 
        }

  if (Biome == autumn.id && random.nextFloat() < .35) {
   coords = GenerationUtils.findSurface(coords.x + xx, 88, coords.z + zz);
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.mapleLeavesAuRedC, 0); 
        }

  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .3) {
   coords = GenerationUtils.findSurface(coords.x + xx, 88, coords.z + zz);
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.mapleLeavesWhinterC, 0); 
        }
    } 
}

//PLANTS
   if(Biome == maple_woods.id || Biome == 4  && random.nextFloat() < .12) {
for(var i = 0; i < 5; i++) {
  for(var k = 0; k < randomInt(0,3); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
  if (coords.y < 45) return;
    if(World.getBlockID(coords.x + k, coords.y, coords.z + k) == 2 && World.getBlockID(coords.x + k, coords.y + 1, coords.z + k) == 0 || BlockID.mapleLeavesC){ 
        World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.poisonBushB, 0);
         World.setBlock(coords.x + k,coords.y+2,coords.z + k,BlockID.poisonBush, 0);
            }
        }    
    }
} 
   
   if(Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .24) {
for(var i = 0; i < 5; i++) {
  for(var k = 0; k < randomInt(0,5); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
  if (coords.y < 45) return;
    if(World.getBlockID(coords.x + k, coords.y, coords.z + k) == 2 && World.getBlockID(coords.x + k, coords.y + 1, coords.z + k) == 0 || BlockID.mapleLeavesC || BlockID.mapleLeavesWhinterC){ 
        World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.blueBush, 0);
            }
        }    
    }
} 

   if(Biome == autumn.id && random.nextFloat() < .36) {
for(var i = 0; i < 5; i++) {
  for(var k = 0; k < randomInt(0,3); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
  if (coords.y < 45) return;
    if(World.getBlockID(coords.x + k, coords.y, coords.z + k) == 2 && World.getBlockID(coords.x + k, coords.y + 1, coords.z + k) == 0 || BlockID.mapleLeavesAuC || BlockID.mapleLeavesAuRedC){ 
        World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.foulBerriedBush, 0);
         World.setBlock(coords.x + k,coords.y+2,coords.z + k,BlockID.foulBerriedBushTop, 0);
            }
        }    
    }
} 

   if(Biome == autumn.id && random.nextFloat() < .55) {
for(var i = 0; i < 5; i++) {
  for(var k = 0; k < randomInt(0,6); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
  if (coords.y < 45) return;
    if(World.getBlockID(coords.x + k, coords.y, coords.z + k) == 2 && World.getBlockID(coords.x + k, coords.y + 1, coords.z + k) == 0 || BlockID.mapleLeavesAuC || BlockID.mapleLeavesAuRedC){ 
        World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.autumnCrocus, 0);  
            }
        }    
    }
} 

//NORMAL_TREES
for (var i = 0; i < randomInt(1, 4); i++) {
  if (Biome == autumn.id && random.nextFloat() < .6) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleA.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleA", coords.x, coords.y + 1, coords.z, regi);
        }
    }

  if (Biome == autumn.id && random.nextFloat() < .6) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleR.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleR", coords.x, coords.y + 1, coords.z, regi);
        }
    }

  if (Biome == autumn.id && random.nextFloat() < .38 || Biome == maple_woods.id && random.nextFloat() < .5) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleG", coords.x, coords.y + 1, coords.z, regi);
        }
    }
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .5) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      //generateTree(AutumnPool, "mapleY", coords.x, coords.y + 1, coords.z, regi);
        }
    }

}
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .4) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleW", coords.x, coords.y + 1, coords.z, regi);
        }
    }

//BIG_TREES

  if (Biome == autumn.id && random.nextFloat() < .2) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBA.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleBW", coords.x, coords.y + 1, coords.z, regi);
        }
    }

  if (Biome == autumn.id && random.nextFloat() < .2) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBR.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleBW", coords.x, coords.y + 1, coords.z, regi);     
        }
    }

  if (Biome == autumn.id && random.nextFloat() < .2 || Biome == maple_woods.id && random.nextFloat() < .1) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleBW", coords.x, coords.y + 1, coords.z, regi);                  
        }
    }
 
  if (Biome == autumn.id && random.nextFloat() < .2 || Biome == maple_woods.id && random.nextFloat() < .1) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      //generateTree(AutumnPool, "mapleBY", coords.x, coords.y + 1, coords.z, regi);                  
        }
    }
 
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .08) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2) {
      //mapleBW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
      generateTree(AutumnPool, "mapleBW", coords.x, coords.y + 1, coords.z, regi);
        }
    }
//BUSHES

//generateStructureInBiomes([autumn.id], {str: bushA, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal:.1}}, random);
generateBuilds([autumn.id], "AutumnBushesPool", "bushA", {offset: {x:0, y:1, z:0}, chance: 1, distance: 19, check:2});
//generateStructureInBiomes([autumn.id, maple_woods.id], {str: bushR, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .15}}, random);
generateBuilds([autumn.id, maple_woods.id], "AutumnBushesPool", "bushR", {offset: {x:0, y:1, z:0}, chance: 2, distance: 19, check:2});
//generateStructureInBiomes([maple_woods.id, autumn.id], {str: bushG, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .1}}, random);
generateBuilds([autumn.id, maple_woods.id], "AutumnBushesPool", "bushG", {offset: {x:0, y:1, z:0}, chance: 2, distance: 19, check:2});
//generateStructureInBiomes([30, 31, 34], {str: bushW, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal:.1}}, random);
generateBuilds([30, 31, 34], "AutumnBushesPool", "bushW", {offset: {x:0, y:1, z:0}, chance: 4, distance: 21, check:2});
//generateStructureInBiomes([4, 1, 29, 6], {str: bushVO, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .08}}, random);
generateBuilds([4, 1, 29, 6], "AutumnBushesPool", "bushVO", {offset: {x:0, y:1, z:0}, chance: 5, distance: 18, check:2});
//generateStructureInBiomes([5, 160, 32], {str: bushVS, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .09}}, random);
generateBuilds([5, 160, 32], "AutumnBushesPool", "bushVS", {offset: {x:0, y:1, z:0}, chance: 5, distance: 18, check:2});
//CAMP

//generateStructureInBiomes([5, 160, 32, 30], {str: fireN, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .002}}, random);
generateBuilds([5, 160, 32, 30], "AutumnBushesPool", "fireN", {offset: {x:0, y:1, z:0}, chance: 1, distance: 55, check:2});
//generateStructureInBiomes([5, 160, 32, 30], {str: fireL, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .002}}, random);
generateBuilds([5, 160, 32], "AutumnBushesPool", "fireL", {offset: {x:0, y:1, z:0}, chance: 1, distance: 55, check:2});
//generateStructureInBiomes([30, 31, 34], {str: thriveN, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .003}}, random);
generateBuilds([5, 160, 32], "AutumnBushesPool", "thriveN", {offset: {x:0, y:1, z:0}, chance: 1, distance: 55, check:2});
//generateStructureInBiomes([30, 31, 34], {str: thriveL, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .001}}, random);
generateBuilds([5, 160, 32], "AutumnBushesPool", "thriveL", {offset: {x:0, y:1, z:0}, chance: 1, distance: 60, check:2});
});




// file: Translation.js

//BLOCKS
Translation.addTranslation("Maple Wood", {ru: "Тополь"});
Translation.addTranslation("Maple Wood Sapping", {ru: "Текучий Клён"});
Translation.addTranslation("Maple Wood Stripped", {ru: "Обтёсанный Клён"});
Translation.addTranslation("Maple Wood Planks", {ru: "Доски из Клёна"});
Translation.addTranslation("Maple Wood Slab", {ru: "Плита из Клёна"});
Translation.addTranslation("Maple Leaves", {ru: "Листва Клёна"});
Translation.addTranslation("Maple Sapling", {ru: "Саженец Клёна"});
Translation.addTranslation("Bird Nest", {ru: "Птичье Гнездо"});
Translation.addTranslation("Foul Berry Bush", {ru: "Куст Скверных Ягод"});
Translation.addTranslation("Blue Berry Bush", {ru: "Куст Голубики"});
Translation.addTranslation("Poison Bush", {ru: "Куст Волчьей Ягоды"});
Translation.addTranslation("Autumn Crocus", {ru: "Крокус"});
//ITEMS
Translation.addTranslation("Foul Berries", {ru: "Скверные Ягоды"});
Translation.addTranslation("Blue Berries", {ru: "Голубика"});
Translation.addTranslation("Poisoned Berries", {ru: "Волчья Ягода"});
Translation.addTranslation("Foul Berry Pips", {ru: "Проростки Скверных Ягод"});
Translation.addTranslation("Blue Berry Pips", {ru: "Проростки Голубики"});
Translation.addTranslation("Sap Bottle", {ru: "Сок Сиропного Клёна"});

Translation.addTranslation("Foul Soup", {ru: "Странный Бульйон"});
Translation.addTranslation("Pumpkin Bread", {ru: "Тыквенный Хлеб"});
//NAMES
Translation.addTranslation("Planty", {ru: "Растительность"});
Translation.addTranslation("Maple Wood", {ru: "Клён"});
Translation.addTranslation("Leaves", {ru: "Листва"});
Translation.addTranslation("Carpets", {ru: "Ковры"});
Translation.addTranslation("Food", {ru: "Пища"});




