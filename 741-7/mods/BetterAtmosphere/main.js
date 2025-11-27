/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: header.js

IMPORT("TileRenderЫЫЫ");
IMPORT("BaseBlocks");
IMPORT("Structures");

var axes = [271, 275, 258, 286, 279];

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

function generateStructureInBiomes(ids, params, random) {
var Biome = World.getBiome(params.x, params.z); 
 for(var l in ids) {
  if (Biome == ids[l] && random.nextFloat() < params.chance.normal) {
    if (World.getBlockID(params.x, params.y, params.z) == params.check && World.getBlockID(params.x, params.y + 1, params.z) == 0) 
      params.str.build(params.x, params.y + 1, params.z, Structure.ROTATE_Y, random, params.region);
        } 
    } 
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
    base: 18,
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
    base: 18,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
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

IDRegistry.genBlockID("pinkCherryLeaves");
Block.createBlock("pinkCherryLeaves", [
    {name: "Pink Cherry Leaves", texture: [["pink_cherry_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

IDRegistry.genBlockID("whiteCherryLeaves");
Block.createBlock("whiteCherryLeaves", [
    {name: "White Cherry Leaves", texture: [["white_cherry_leaves", 0]], inCreative: true}
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
Item.addCreativeGroup("wood", Translation.translate("Maple Wood"), [BlockID.mapleWood, BlockID.mapleWoodSapping, BlockID.mapleWoodStriped]);
Item.setCategory("mapleWood", 1);
Item.setCategory("mapleWoodSapping", 1);
Item.setCategory("mapleWoodStriped", 1);

Item.addCreativeGroup("leaves", Translation.translate("Leaves"), [BlockID.mapleLeaves, BlockID.mapleLeavesAu, BlockID.mapleLeavesAuRed, BlockID.mapleLeavesWhinter, BlockID.pinkCherryLeaves, BlockID.whiteCherryLeaves]);
Item.setCategory("mapleLeaves", 1);
Item.setCategory("mapleLeavesAu", 1);
Item.setCategory("mapleLeavesAuRed", 1);
Item.setCategory("mapleLeavesWhinter", 1);

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

Item.addCreativeGroup("carpets", Translation.translate("Carpets"), [BlockID.mapleLeavesC, BlockID.mapleLeavesAuC, BlockID.mapleLeavesAuRedC, BlockID.mapleLeavesWhinterC]);
Item.setCategory("mapleLeavesC", 1);
Item.setCategory("mapleLeavesAuC", 1);
Item.setCategory("mapleLeavesAuRedC", 1);
Item.setCategory("mapleLeavesWhinterC", 1);

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

ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.mapleLeaves, -1, ["maple_leaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesAu, -1, ["maple_leaves_autumn", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesAuRed, -1, ["maple_leaves_red", 0]);
    BetterFoliage.setupLeavesModel(BlockID.pinkCherryLeaves, -1, ["pink_cherry_leaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.whiteCherryLeaves, -1, ["white_cherry_leaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.mapleLeavesWhinter, -1, ["maple_leaves_whinter", 0]);
});

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

IDRegistry.genBlockID("mapleSapling");
IDRegistry.genBlockID("mapleSaplingAu");
IDRegistry.genBlockID("mapleSaplingAuRed");

Block.createBlock("mapleSapling", [
    {name: "Maple Sapling", texture: [["maple_sapling", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

Block.createBlock("mapleSaplingAu", [
    {name: "Maple Sapling", texture: [["maple_sapling", 1]], inCreative: false}
], BLOCK_TYPE_PLANT);

Block.createBlock("mapleSaplingAuRed", [
    {name: "Maple Sapling", texture: [["maple_sapling", 2]], inCreative: false}
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

IDRegistry.genItemID("mapleSapling");
IDRegistry.genItemID("mapleSaplingAu");
IDRegistry.genItemID("mapleSaplingAuRed");

Item.createItem("mapleSapling", "Maple Sapling", {name: "maple_sapling", meta: 0}, {stack: 64});
Item.createItem("mapleSaplingAu", "Maple Sapling", {name: "maple_sapling", meta: 1}, {stack: 64});
Item.createItem("mapleSaplingAuRed", "Maple Sapling", {name: "maple_sapling", meta: 2}, {stack: 64});

Item.setCategory(ItemID.mapleSapling, 2);
Item.setCategory(ItemID.mapleSaplingAu, 2);
Item.setCategory(ItemID.mapleSaplingAuRed, 2);

ToolAPI.registerBlockMaterial(BlockID.mapleSapling, "plant", 0, false);
ToolAPI.registerBlockMaterial(BlockID.mapleSaplingAu, "plant", 0, false);
ToolAPI.registerBlockMaterial(BlockID.mapleSaplingAuRed, "plant", 0, false);

TileRenderer.setPlantModel(BlockID.mapleSapling, 0, "maple_sapling", 0);
TileRenderer.setPlantModel(BlockID.mapleSaplingAu, 0, "maple_sapling", 1);
TileRenderer.setPlantModel(BlockID.mapleSaplingAuRed, 0, "maple_sapling", 2);

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

//STRUCTURE_INI
 //NORMAL
 mapleG = new Structure("Maple1");
 mapleA = new Structure("Maple2");
 mapleR = new Structure("Maple3");
 mapleW = new Structure("Maple4");
 //BIG
 mapleBG = new Structure("MapleM1");
 mapleBA = new Structure("MapleM2");
 mapleBR = new Structure("MapleM3");
 mapleBW = new Structure("MapleM4");
 //BUSHES_CUSTOM
 bushG = new Structure("Bush1");
 bushA = new Structure("Bush4");
 bushR = new Structure("Bush2");
 bushW = new Structure("Bush3");
 //BUSHES_VANILLA
 bushVO = new Structure("BushV2");
 bushVS = new Structure("BushV1");
 //CAMP
 fireN = new Structure("Campfire1");
 fireL = new Structure("Campfire2");
 thriveN = new Structure("LostThrive1");
 thriveL = new Structure("LostThrive2");

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
    {name: "Autumn Crocus", texture: [["autumn_crocus", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
TileRenderer.setPlantModel(BlockID.autumnCrocus, 0, "autumn_crocus", 0);

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

//DRINK
IDRegistry.genItemID("sapBottle");
Item.createFoodItem("sapBottle", "Sap Bottle", {name: "sap_bottle"},{isTech:false,food: 11});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.sapBottle){
var crf = Entity.getPosition(pl);
World.drop(crf.x, crf.y, crf.z, 374, 1, 0);
}});
Item.addCreativeGroup("food", Translation.translate("Food"), [ItemID.foulBerries, ItemID.foulBerryPips, ItemID.sapBottle]);
Item.setCategory(ItemID.foulBerries, 2);
Item.setCategory(ItemID.foulBerryPips, 2);
Item.setCategory(ItemID.sapBottle, 2);

Callback.addCallback("ItemUse",function(coords, item, block, caused, player) {   
    var crd = coords.relative;
  if (World.getBlockID(crd.x, crd.y, crd.z) == BlockID.mapleWood) {
   for(var j in axes) {
    if (item.id == axes[j]) {     
    World.destroyBlock(crd.x, crd.y, crd.z, false);
    if(Math.random() < 0.32){
    World.setBlock(crd.x, crd.y, crd.z, BlockID.mapleWoodSapping, 0);  
    } else  {
    World.setBlock(crd.x, crd.y, crd.z, BlockID.mapleWoodStriped, 0);  
                 }
            }
       }
  }
});

Item.registerUseFunctionForID(374, function(coords, item, block, player) {
    if (block.id == BlockID.mapleWoodSapping) {
        World.destroyBlock(coords.x, coords.y, coords.z, false);
        World.setBlock(coords.x, coords.y, coords.z, BlockID.mapleWoodStriped, 0); 
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
       World.drop(coords.relative.x + 0.1, coords.relative.y, coords.relative.z + 0.1, ItemID.sapBottle, 1, 0);
    }
});

//BUSHES
IDRegistry.genBlockID("foulBushmicro");
Block.createBlock("foulBushmicro", [
    {name: "Foul Berry Pips", texture: [["foul_berry_bush_pips", 0]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushmicro, "plant");
TileRenderer.setPlantModel(BlockID.foulBushmicro, 0, "foul_berry_bush_pips", 0);

Block.registerDropFunction("foulBushmicro", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.foulBerryPips, 1, 0);
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
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushmini, "plant");
TileRenderer.setPlantModel(BlockID.foulBushmini, 0, "foul_berry_bush_stage", 1);

Block.registerDropFunction("foulBushmini", function(){ 
  return [];
});

IDRegistry.genBlockID("foulBush");
Block.createBlock("foulBush", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBush, "plant");
TileRenderer.setPlantModel(BlockID.foulBush, 0, "foul_berry_bush_stage", 2);

Block.registerDropFunction("foulBush", function(){ 
  return [];
});

IDRegistry.genBlockID("foulBushTop");
Block.createBlock("foulBushTop", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 3]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBushTop, "plant");
TileRenderer.setPlantModel(BlockID.foulBushTop, 0, "foul_berry_bush_stage", 3);

Block.registerDropFunction("foulBushTop", function(){ 
  return [];
});

Block.setRandomTickCallback(BlockID.foulBushmini, function(x, y, z, id, data){   
  if(World.getBlockI(coords.x, coords.y - 1, coords.z) == 2){
      World.destroyBlock(coords.x, coords.y, coords.z,false);                      
  World.setBlock(coords.x, coords.y, coords.z, BlockID.foulBush, 0); 
  World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.foulBushTop, 0); 
     }
});

IDRegistry.genBlockID("foulBerriedBush");
Block.createBlock("foulBerriedBush", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 4]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBerriedBush, "plant");
TileRenderer.setPlantModel(BlockID.foulBerriedBush, 0, "foul_berry_bush_stage", 4);

Block.registerDropFunction("foulBerriedBush", function(){ 
  return [[ItemID.foulBerries, randomInt(1, 3), 0]];
});

IDRegistry.genBlockID("foulBerriedBushTop");
Block.createBlock("foulBerriedBushTop", [
    {name: "Foul Berry Bush", texture: [["foul_berry_bush_stage", 5]], inCreative: false}, BLOCK_TYPE_PLANT]);
ToolAPI.registerBlockMaterial(BlockID.foulBerriedBushTop, "plant");
TileRenderer.setPlantModel(BlockID.foulBerriedBushTop, 0, "foul_berry_bush_stage", 5);

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

IDRegistry.genBlockID("blueBushmicro");
Block.createBlock("blueBushmicro", [
    {name: "Blue Berry Pips", texture: [["blue_berry_bush_stage", 0]], inCreative: false}, BLOCK_TYPE_PLANT]);
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
    {name: "Blue Berry Bush", texture: [["blue_berry_bush_stage", 1]], inCreative: false}, BLOCK_TYPE_PLANT]);
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
    {name: "Blue Berry Bush", texture: [["blue_berry_bush_stage", 2]], inCreative: false}, BLOCK_TYPE_PLANT]);
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
});




// file: Generation.js

//BIOMES

const biomes = [1, 4, 5, 27, 155, 19];

var Autumn = new CustomBiome("autumn")
.setGrassColor(0xFF8C00)
.setFoliageColor(0xFF8C00)
.setWaterColor(0x201C40)
//may be 0x201C38
.setCoverBlock(2, 0)
.setSurfaceBlock(3, 0)
.setFillingBlock(1, 0);

Callback.addCallback("GenerateBiomeMap", function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
if (dimensionId != 0) return;
 var X = Math.floor(chunkX) * 16;
  var Z = Math.floor(chunkZ) * 16;
   var biome = World.getBiomeMap(X + 4, Z + 4);
   for(var j in biomes){
    if (biome != biomes[j]) return;
     if (GenerationUtils.getPerlinNoise(X + 4, 0, Z + 4, dimensionSeed, 1 / 256, 2) < .5 - 4 / Math.pow(256, 2))
      return;
     for (var x = 0; x < 16; x++) {
      for (var z = 0; z < 16; z++) {
          var noiseValue = GenerationUtils.getPerlinNoise(X + 4, 0, Z + 4, dimensionSeed, 1 / 256, 2);
           if (noiseValue > .5)
             World.setBiomeMap(x, z, Autumn.id);
            }
        }
    }
});

var MapleWoods = new CustomBiome("maple_woods")
.setCoverBlock(2, 0)
.setSurfaceBlock(1, 0)
.setFillingBlock(3, 0);

Callback.addCallback("GenerateBiomeMap", function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
if (dimensionId != 0) return;
 var X = Math.floor(chunkX) * 16;
  var Z = Math.floor(chunkZ) * 16;
   var biome = World.getBiomeMap(X + 8, Z + 8);
   for(var j in biomes){
    if (biome != biomes[j]) return;
     if (GenerationUtils.getPerlinNoise(X + 8, 0, Z + 8, dimensionSeed, 1 / 256, 2) < .58 - 4 / Math.pow(256, 2))
      return;
     for (var x = 0; x < 16; x++) {
      for (var z = 0; z < 16; z++) {
          var noiseValue = GenerationUtils.getPerlinNoise(X + 8, 0, Z + 8, dimensionSeed, 1 / 256, 2);
           if (noiseValue > .58)
             World.setBiomeMap(x, z, MapleWoods.id);
            }
        }
    }
});

//MAIN

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random) {
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
 coords = GenerationUtils.findSurface(coords.x, 88, coords.z);
 var Biome = World.getBiome(coords.x, coords.z);
  var regi = BlockSource.getCurrentWorldGenRegion();
if(coords.y < 56) return;
for (var x = 0; x < randomInt(3, 5); x++) {
 for (var z = 0; z < randomInt(3, 5); z++) {
     
  if (Biome == MapleWoods.id || Biome == 4  && random.nextFloat() < .4) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) 
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.mapleLeavesC, 0); 
        }

  if (Biome == Autumn.id && random.nextFloat() < .45) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.mapleLeavesAuC, 0); 
        }

  if (Biome == Autumn.id && random.nextFloat() < .35) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.mapleLeavesAuRedC, 0); 
        }

  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .3) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.mapleLeavesWhinterC, 0); 
        }
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .22) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0)   
      World.setBlock(coords.x + x, coords.y + 1, coords.z + z, BlockID.blueBush, 0); 
        }
    } 
}

  if (Biome == Autumn.id || Biome == MapleWoods.id && random.nextFloat() < .35) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0 && World.getBlockID(coords.x, coords.y + 2, coords.z) == 0) {
      World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.foulBerriedBush, 0); 
      World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.foulBerriedBushTop, 0); 
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .5) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0 || BlockID.mapleLeavesAuC || BlockID.mapleLeavesAuRedC) {
      World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.autumnCrocus, 0); 
        }
    }

//NORMAL_TREES

  if (Biome == Autumn.id && random.nextFloat() < .55) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleA.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .55) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleR.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .28 || Biome == MapleWoods.id && random.nextFloat() < .5) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }
 
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .35) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

//BIG_TREES

  if (Biome == Autumn.id && random.nextFloat() < .16) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleBA.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .12) {
    if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleBR.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }

  if (Biome == Autumn.id && random.nextFloat() < .2 || Biome == MapleWoods.id && random.nextFloat() < .02) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2) {
      mapleBG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }
 
  if (Biome == 30 || Biome == 31 || Biome == 34 && random.nextFloat() < .06) {
        if(World.getBlockID(coords.x, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z) == 2 && World.getBlockID(coords.x, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z+1) == 2 && World.getBlockID(coords.x+1, coords.y, coords.z-1) == 2 && World.getBlockID(coords.x-1, coords.y, coords.z-1) == 2 
) {
      mapleBW.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, regi);
        }
    }
//BUSHES

generateStructureInBiomes([Autumn.id], {str: bushA, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal:.16}}, random);
generateStructureInBiomes([Autumn.id, MapleWoods.id], {str: bushR, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .2}}, random);
generateStructureInBiomes([MapleWoods.id, Autumn.id], {str: bushG, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .18}}, random);
generateStructureInBiomes([30, 31, 34], {str: bushW, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal:.14}}, random);
generateStructureInBiomes([4, 1, 29, 6], {str: bushVO, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .12}}, random);
generateStructureInBiomes([5, 160, 32], {str: bushVS, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .12}}, random);

//CAMP

generateStructureInBiomes([5, 160, 32, 30], {str: fireN, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .02}}, random);
generateStructureInBiomes([5, 160, 32, 30], {str: fireL, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .02}}, random);
generateStructureInBiomes([30, 31, 34], {str: thriveN, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .03}}, random);
generateStructureInBiomes([30, 31, 34], {str: thriveL, x: coords.x, y: coords.y, z: coords.z, region: regi, check: 2, chance: {normal: .01}}, random);
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
Translation.addTranslation("Autumn Crocus", {ru: "Крокус"});
//ITEMS
Translation.addTranslation("Foul Berries", {ru: "Скверные Ягоды"});
Translation.addTranslation("Blue Berries", {ru: "Голубика"});
Translation.addTranslation("Foul Berry Pips", {ru: "Проростки Скверных Ягод"});
Translation.addTranslation("Blue Berry Pips", {ru: "Проростки Голубики"});
Translation.addTranslation("Sap Bottle", {ru: "Сок Сиропного Клёна"});
//NAMES
Translation.addTranslation("Planty", {ru: "Растительность"});
Translation.addTranslation("Maple Wood", {ru: "Клён"});
Translation.addTranslation("Leaves", {ru: "Листва"});
Translation.addTranslation("Carpets", {ru: "Ковры"});
Translation.addTranslation("Food", {ru: "Пища"});




