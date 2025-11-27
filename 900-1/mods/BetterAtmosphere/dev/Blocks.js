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