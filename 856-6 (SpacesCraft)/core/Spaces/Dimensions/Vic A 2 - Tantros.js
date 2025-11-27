const SPACE_GRASS = Block.createSpecialType({
    destroytime: 0.1,
    explosionres: 1,
    sound: "grass"
});

const PLANETAR_COBBLE = Block.createSpecialType({
    lightlevel: 4,

});

IDRegistry.genBlockID("vic_tantros_grass");
Block.createBlock("vic_tantros_grass",[{name: "Tantros Grass", texture: [["dirt", 0], ["Tantros Top", 0], ["Tantros Side", 0], ["Tantros Side", 0], ["Tantros Side", 0], ["Tantros Side", 0]], inCreative: true} ], SPACE_GRASS);
Translation.addTranslation("Tantros Grass",{
ru: "Моховидный дёрн «Тантроса»"
});

IDRegistry.genBlockID("vic_tantros_sand");
Block.createBlock("vic_tantros_sand",[{name: "Tantros Grass", texture: [["Tantros Sand", 0]], inCreative: true} ], PLANETAR_SAND);
Translation.addTranslation("Tantros Sand",{
ru: "Песок «Тантроса»"
});

IDRegistry.genBlockID("vic_a2_stone");
Block.createBlock("vic_a2_stone",[{name: "Tantros Stone", texture: [["Tantros Stone", 0]], inCreative: true} ]);
Translation.addTranslation("Tantros Stone",{
ru: "Ситень"
});
/*
IDRegistry.genBlockID("vic_a2_stone_stairs");
Block.createBlockWithRotation("vic_a2_stone_stairs",[{name: "Tantros Stone Stairs", texture: [["Tantros Stone", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Tantros Stone Stairs",{
ru: "Ситеневые ступеньки"
});*/

IDRegistry.genBlockID("vic_a2_stone_fence");
Block.createBlock("vic_a2_stone_fence",[{name: "Tantros Stone Fence", texture: [["Tantros Stone", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Tantros Stone Fence",{
ru: "Ситеневый забор"
});

IDRegistry.genBlockID("vic_a2_stone_big_fence");
Block.createBlock("vic_a2_stone_big_fence",[{name: "Tantros Stone Big Fence", texture: [["Tantros Stone", 0]], inCreative: true} ], BLOCK_TYPE_FENCEE);
Translation.addTranslation("Tantros Stone Big Fence",{
ru: "Ситеневая ограда"
});

ToolAPI.registerBlockMaterial(BlockID.vic_tantros_grass, "stone", 4);

IDRegistry.genBlockID("vic_a2_coal");
Block.createBlock("vic_a2_coal",[{name: "Coal in Tantros stone", texture: [["Tantros Coal", 0]], inCreative: true} ]);
Translation.addTranslation("Coal in Tantros stone",{
ru: "Уголь в ситене"
});

Block.registerDropFunction("vic_a2_coal", function(coords, blockID){
    return [[VanillaItemID.coal, 1, 0]] 
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_coal, "stone", 1);

IDRegistry.genBlockID("vic_a2_iron");
Block.createBlock("vic_a2_iron",[{name: "Iron in Tantros stone", texture: [["Tantros Iron", 0]], inCreative: true} ]);
Translation.addTranslation("Iron in Tantros stone",{
ru: "Железо в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_iron, "stone", 2);

Recipes.addFurnace(BlockID.vic_a2_iron, VanillaItemID.iron_ingot, 0);

IDRegistry.genBlockID("vic_a2_gold");
Block.createBlock("vic_a2_gold",[{name: "Gold in Tantros stone", texture: [["Tantros Gold", 0]], inCreative: true} ]);
Translation.addTranslation("Gold in Tantros stone",{
ru: "Золото в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_gold, "stone", 2);

Recipes.addFurnace(BlockID.vic_a2_gold, VanillaItemID.gold_ingot, 0);

IDRegistry.genBlockID("vic_a2_emerald");
Block.createBlock("vic_a2_emerald",[{name: "Emerald in Tantros stone", texture: [["Tantros Emerald", 0]], inCreative: true} ]);
Translation.addTranslation("Emerald in Tantros stone",{
ru: "Изумруд в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_emerald, "stone", 2);

Block.registerDropFunction("vic_a2_emerald", function(coords, blockID){
    return [[VanillaItemID.emerald, 1, 0]] 
});
//дроп
IDRegistry.genBlockID("vic_a2_diamond");
Block.createBlock("vic_a2_diamond",[{name: "Diamond in Tantros stone", texture: [["Tantros Diamond", 0]], inCreative: true} ]);
Translation.addTranslation("Diamond in Tantros stone",{
ru: "Алмаз в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_diamond, "stone", 3);

Block.registerDropFunction("vic_a2_diamond", function(coords, blockID){
    return [[VanillaItemID.diamond, 1, 0]] 
});
//дроп
IDRegistry.genBlockID("vic_a2_torantiy");
Block.createBlock("vic_a2_torantiy",[{name: "Torantiy in Tantros stone", texture: [["Tantros Torantiy", 0]], inCreative: true} ]);
Translation.addTranslation("Torantiy in Tantros stone",{
ru: "Торантий в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_diamond, "stone", 4);


IDRegistry.genBlockID("vic_a2_redstone");
Block.createBlock("vic_a2_redstone",[{name: "Redstone in Tantros stone", texture: [["Tantros Redstone", 0]], inCreative: true} ]);
Translation.addTranslation("Redstone in Tantros stone",{
ru: "Редстоун в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_redstone, "stone", 2);

Block.registerDropFunction("vic_a2_redstone", function(coords, blockID){
    return [[VanillaItemID.redstone, 3, 0]] 
});
//дроп
IDRegistry.genBlockID("vic_a2_lapiz");
Block.createBlock("vic_a2_lapiz",[{name: "Lapiz in Tantros stone", texture: [["Tantros Lapiz", 0]], inCreative: true} ]);
Translation.addTranslation("Lapiz in Tantros stone",{
ru: "Лазурит в ситене"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_lapiz, "stone", 2);

Block.registerDropFunction("vic_a2_lapiz", function(coords, blockID){
    return [[VanillaItemID.lapiz, 3, 0]] 
});
//опять дроп :)
IDRegistry.genBlockID("vic_a2_turao");
Block.createBlock("vic_a2_turao",[{name: "Turao", texture: 
  [["Turao Top", 0],
   ["Turao Top", 0], 
   ["Turao", 0],
   ["Turao", 0],
   ["Turao", 0]], inCreative: true} ]);
Translation.addTranslation("Turao",{
ru: "Турао"
});

ToolAPI.registerBlockMaterial(BlockID.vic_a2_turao, "wood", 4);

IDRegistry.genBlockID("vic_a2_turao_leaves");
Block.createBlock("vic_a2_turao_leaves",[{name: "Turao Leaves", texture: [["Turao Leaves", 0]], inCreative: true} ], SPACE_GRASS);
Translation.addTranslation("Turao Leaves",{
ru: "Листья «Турао»"
});

IDRegistry.genBlockID("tantros_short_grass");
Block.createBlock("tantros_short_grass",[{name: "Short Grass", texture: [["Grass Tantros Short", 0]], inCreative: false} ], PLANT);
Translation.addTranslation("Grass Tantros",{
ru: "Короткая трава"
});

IDRegistry.genItemID("tantros_short_grass_1"); 
Item.createItem("tantros_short_grass_1", "Blue Short Grass", {name: "Grass Tantros Short", meta: 0}, {stack: 64});
Translation.addTranslation("Blue Short Grass", {
ru: "Синяя короткая трава"
});

Item.registerUseFunction("tantros_short_grass_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.vic_tantros_grass){ 
        region.setBlock(place.x, place.y, place.z, BlockID.tantros_short_grass);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
//получаем под ногами моховидный дёрн и предметом ставим блок
IDRegistry.genBlockID("tantros_grass");
Block.createBlock("tantros_grass",[{name: "Grass", texture: [["Grass Tantros", 0]], inCreative: false} ], PLANT);
Translation.addTranslation("Grass Tantros",{
ru: "Трава"
});

IDRegistry.genItemID("tantros_grass_1"); 
Item.createItem("tantros_grass_1", "Blue Grass", {name: "Grass Tantros", meta: 0}, {stack: 64});
Translation.addTranslation("Blue Grass", {
ru: "Синяя трава"
});

Item.registerUseFunction("tantros_grass_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.vic_tantros_grass){ 
        region.setBlock(place.x, place.y, place.z, BlockID.tantros_grass);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});



var GRASS_VIC = new ICRender.CollisionShape();
var entry = GRASS_VIC.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.tantros_grass, -1,GRASS_VIC);
TileRenderer.setPlantModel(BlockID.tantros_grass, 0, "Grass Tantros", 0);
//Тайл рендер
var SHORT_GRASS_VIC = new ICRender.CollisionShape();
var entry = GRASS_VIC.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.tantros_short_grass, -1,SHORT_GRASS_VIC);
TileRenderer.setPlantModel(BlockID.tantros_short_grass, 0, "Grass Tantros Short", 0);

Block.registerDropFunction("tantros_short_grass", function(coords, blockID){
    return [[ItemID.tantros_grass_1, 1, 0]] 
});

Block.registerClickFunction(BlockID.tantros_short_grass, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal) {
    let can_placing = BlockSource.getDefaultForActor(player);
    can_placing.setBlock(coords.x, coords.y, coords.z, BlockID.tantros_grass);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
});

Block.registerDropFunction("tantros_grass", function(coords, blockID){
    return [[ItemID.tantros_grass_1, 1, 0]] 
});





IDRegistry.genBlockID("tantros_cane");
Block.createBlock("tantros_cane",[{name: "Tantros Cane", texture: [["Tantros Cane", 0]], inCreative: false} ], PLANT);

IDRegistry.genItemID("tantros_cane_1"); 
Item.createItem("tantros_cane_1", "Tantros Cane", {name: "Tantros Cane", meta: 0}, {stack: 64});
Translation.addTranslation("Tantros Cane",{
ru: "Тантросный тростник"
});


Item.registerUseFunction("tantros_cane_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.vic_tantros_sand){ 
        region.setBlock(place.x, place.y, place.z, BlockID.tantros_cane);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
//ставим инопланетный тростник
ToolAPI.registerBlockMaterial(BlockID.tantros_cane, "plant", 3);

Block.registerDropFunction("tantros_cane", function(coords, blockID){
    return [[ItemID.tantros_cane_1, 1, 0]] 
});

Block.registerClickFunction(BlockID.tantros_cane, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal) {
    let can_placing = BlockSource.getDefaultForActor(player);
    can_placing.setBlock(coords.x, coords.y+1, coords.z, block.id);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
});

//выращивание тростника костной мукой
if(__config__.getBool("GrassTopping")){
Block.setRandomTickCallback(BlockID.tantros_short_grass, function(x, y, z, id, data) {
        World.setBlock(x, y, z, BlockID.tantros_grass);
});}
//настройка для роста травы
Block.registerClickFunction(BlockID.vic_tantros_grass, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal) {
    let can_placing = BlockSource.getDefaultForActor(player);
    can_placing.setBlock(coords.x, coords.y+1, coords.z, BlockID.tantros_short_grass);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
});

Block.setRandomTickCallback(BlockID.tantros_cane, function(x, y, z, id, data) {
        World.setBlock(x, y+1, z, id);
});
//рост самого тростника
/*
Block.registerNeighbourChangeFunction(BlockID.tantros_cane, function(coords, block, changedCoords, region) {
  if (World.getBlock(coords.x, coords.y-1, coords.z).id !== BlockID.vic_a1_sand) {
    World.destroyBlock(coords.x, coords.y, coords.z);
    World.drop(coords.x, coords.y, coords.z, ItemID.tantros_cane_1, 1);
  }
});*/
// ломание тростника
var CANE_TANTROS = new ICRender.CollisionShape();
var entry = CANE_TANTROS.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.tantros_cane, -1,CANE_TANTROS);







ToolAPI.registerBlockMaterial(BlockID.vic_a2_turao_leaves, "plant", 3);

IDRegistry.genBlockID("tantros_berry");
Block.createBlock("tantros_berry",[{name: "Tantros Berry", texture: [["Tantros Berry", 0]], inCreative: true} ], PLANT);
Translation.addTranslation("Tantros Berry",{
ru: "Ветка с ягодами «турао»"
});

IDRegistry.genBlockID("turao_planks");
Block.createBlock("turao_planks",[{name: "Turao Planks", texture: [["Turao_planks", 0]], inCreative: true} ]);
Translation.addTranslation("Turao Planks",{
ru: "Тураоумовые доски"
});
/*
IDRegistry.genBlockID("turao_planks_stairs");
Block.createBlockWithRotation("turao_planks_stairs",[{name: "Turao Planks Stairs", texture: [["Turao_planks", 0]], inCreative: true} ], BLOCK_TYPE_STAIRS);
Translation.addTranslation("Turao Planks Stairs",{
ru: "Тураоумовые ступеньки"
});*/

IDRegistry.genBlockID("turao_planks_fence");
Block.createBlock("turao_planks_fence",[{name: "Turao Planks Fence", texture: [["Turao_planks", 0]], inCreative: true} ], BLOCK_TYPE_FENCE);
Translation.addTranslation("Turao Planks Fence",{
ru: "Тураоумовый забор"
});

ToolAPI.registerBlockMaterial(BlockID.turao_planks, "wood", 4);

ToolAPI.registerBlockMaterial(BlockID.turao_planks_stairs, "wood", 4);

ToolAPI.registerBlockMaterial(BlockID.turao_planks_fence, "wood", 4);

Recipes.addShaped({id: BlockID.turao_planks, count: 1, data: 0}, [
    "a"
], ['a', BlockID.vic_a2_turao, 0]);

Recipes.addShaped({id: VanillaBlockID.chest, count: 1, data: 0}, [
    "aaa",
    "a a",
    "aaa"
], ['a', BlockID.turao_planks, 0]);

IDRegistry.genItemID("blue_sugar_sc"); 
Item.createFoodItem("blue_sugar_sc", "Blue Sugar", {name: "Blue Sugar", meta: 0}, {stack: 64, food: 2});
Translation.addTranslation("Blue Sugar", {
ru: "Синий сахар"
});

Recipes.addShaped({id: ItemID.blue_sugar_sc, count: 1, data: 0}, [
    "a"
], ['a', ItemID.tantros_cane_1, 0]);

IDRegistry.genItemID("tantros_berry_1"); 
Item.createFoodItem("tantros_berry_1", "Turao Berry", {name: "Vic A - 2 Berry", meta: 0}, {stack: 64, food: 4});
Translation.addTranslation("Turao Berry", {
ru: "Ягода «Турао»"
});

ToolAPI.registerBlockMaterial(BlockID.tantros_berry, "plant", 3);

TileRenderer.setPlantModel(BlockID.tantros_berry, 0, "Tantros Berry", 0);

var TANTROS_BERRY = new ICRender.CollisionShape();
var entry = TANTROS_BERRY.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.tantros_berry, -1,TANTROS_BERRY);

Block.registerDropFunction("tantros_berry", function(coords, blockID){
    return [[ItemID.tantros_berry_1, 1, 0]] 
});

Item.registerUseFunction("tantros_berry_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y+1,place.z)==BlockID.vic_a2_turao_leaves){ 
        region.setBlock(place.x, place.y, place.z, BlockID.tantros_berry);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerClickFunction(BlockID.tantros_berry, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal) {
   World.drop(coords.x, coords.y, coords.z, ItemID.tantros_berry_1, 1);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
});

var StonesMesh = new RenderMesh(); 
StonesMesh.setBlockTexture("stones_tantros",0); 
StonesMesh.importFromFile(__dir__+"/models/tantros_stones.obj","obj",null); 
IDRegistry.genBlockID("blue_stones"); 
Block.createBlock("blue_stones", [ 
 {name: "Blue Stones Of Tantros", texture: [["stones_tantros", 0],["stones_tantros", 1],["stones_tantros", 2],["stones_tantros", 3],["stones_tantros", 4],["stones_tantros", 5]], inCreative: true} 
], PLANETAR_COBBLE); 
var StonesRender = new ICRender.Model(); 
StonesRender.addEntry(new BlockRenderer.Model(StonesMesh)); 
BlockRenderer.setStaticICRender(BlockID.blue_stones,0,StonesRender);
var STONES_COLISION = new ICRender.CollisionShape();
var entry =STONES_COLISION.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.blue_stones, -1,STONES_COLISION)

Translation.addTranslation("Blue Stones Of Tantros", {
ru: "Синие камни тантроса"
});

var Vic_2 = new CustomBiome ("Vic_2")
.setCoverBlock(BlockID.vic_a1_sand, 0)
.setSurfaceBlock(BlockID.vic_a1_stonesand, 0)
.setFillingBlock(BlockID.vic_a1_stone, 0);
var Vic_Tantros = new Dimensions.CustomDimension("Vic_Tantros", 2006);
Vic_Tantros.setGenerator(Dimensions.newGenerator({
    biome: Vic_2.id,
    layers: [

    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.5, -.99], [.9, -0.99], [0.4, -.4], [0, 0.9]
        ],
        material: {
            base: VanillaBlockID.stone,
            surface: {
                id: VanillaBlockID.dirt,
                data: 0,
                width: 5
            },
            cover: BlockID.vic_tantros_grass
        },
        noise: {
            octaves: {
               count: 5,
               scale: 218,
               weight: 1.7
            }
         }     
      },
      { minY: 0,
      	maxY: 1,
      	material: {base: 7}
      }
    ,{ minY: 0,
      	maxY: 25,
      	material: {base: BlockID.vic_a2_stone}}]
}));

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_b) {
Dimensions.transfer(player, Vic_Tantros.id);       }})
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Vic_Tantros.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(20, 30); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.vic_tantros_grass){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.tantros_grass,0);   
    }
}});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Vic_Tantros.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(70, 160); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.vic_tantros_grass){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.tantros_short_grass,0);   
    }
}});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Vic_Tantros.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 1); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.vic_tantros_grass){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.blue_stones,0);   
    }
}});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.marble_sc, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 40, 
 size: randomInt(4, 40), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_iron, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 40, 
 size: randomInt(4, 7), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_redstone, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 40, 
 size: randomInt(4, 6), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_lapiz, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 40, 
 size: randomInt(4, 8), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_gold, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 40, 
 size: randomInt(3, 5), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_emerald, 0, chunkX, chunkZ, random, { 
 veinCounts: 1, 
 minY:2, 
 maxY: 40, 
 size: randomInt(1, 4), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_diamond, 0, chunkX, chunkZ, random, { 
 veinCounts: 5, 
 minY:2, 
 maxY:40, 
 size: randomInt(2, 7), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_coal, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 40, 
 size: randomInt(1, 6), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Vic_Tantros.id) return; 
 UniqueGen.generateOreInDimension(BlockID.vic_a2_torantiy, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 40, 
 size: randomInt(1, 4), 
 mode: true, 
 check: [BlockID.vic_a2_stone] 
 }); 
});


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Vic_Tantros.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 0.6); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.vic_tantros_grass){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.vic_a2_turao,0);   
World.setBlock(coords.x,coords.y+2,coords.z,BlockID.vic_a2_turao,0);   
World.setBlock(coords.x,coords.y+3,coords.z,BlockID.vic_a2_turao,0);   
World.setBlock(coords.x,coords.y+4,coords.z,BlockID.vic_a2_turao,0);   

World.setBlock(coords.x + 1,coords.y+4,coords.z,BlockID.vic_a2_turao_leaves,0);  
World.setBlock(coords.x - 1,coords.y+4,coords.z,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x + 1,coords.y+4,coords.z+ 1,BlockID.vic_a2_turao_leaves,0);  
World.setBlock(coords.x - 1,coords.y+4,coords.z- 1,BlockID.vic_a2_turao_leaves,0);  
World.setBlock(coords.x + 1,coords.y+4,coords.z- 1,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x - 1,coords.y+4,coords.z+ 1,BlockID.vic_a2_turao_leaves,0);  
World.setBlock(coords.x + 1,coords.y+4,coords.z- 1,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x + 1,coords.y+4,coords.z,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x - 1,coords.y+4,coords.z,BlockID.vic_a2_turao_leaves,0);   
World.setBlock(coords.x,coords.y+4,coords.z-1,BlockID.vic_a2_turao_leaves,0);   


    }
    World.setBlock(coords.x,coords.y+5,coords.z,BlockID.vic_a2_turao_leaves,0);   
    World.setBlock(coords.x,coords.y+5,coords.z- 1,BlockID.vic_a2_turao_leaves,0); 
    World.setBlock(coords.x,coords.y+5,coords.z+ 1,BlockID.vic_a2_turao_leaves,0);   
    World.setBlock(coords.x - 1,coords.y+5,coords.z,BlockID.vic_a2_turao_leaves,0);   
    World.setBlock(coords.x + 1,coords.y+5,coords.z,BlockID.vic_a2_turao_leaves,0);   
    
    World.setBlock(coords.x,coords.y+6,coords.z,BlockID.vic_a2_turao_leaves,0); 
    
World.setBlock(coords.x + 1,coords.y+3,coords.z,BlockID.tantros_berry,0);  
World.setBlock(coords.x + 1,coords.y+3,coords.z+1,BlockID.tantros_berry,0);  
World.setBlock(coords.x,coords.y+3,coords.z + 1,BlockID.tantros_berry,0);  
World.setBlock(coords.x - 1,coords.y+3,coords.z-1,BlockID.tantros_berry,0);  
}});