/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: header.js

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const UniqueGen = { 
    randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight){
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 128;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: z = chunkZ * 16 + random.nextInt(16)
        }
    }, 
    generateOre: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    }, 
    generateOreInDimension: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, id, data, params.size, params.mode, params.check);
        }
    }
}

function generateTree(pool, name, x, y, z, region) {   
    StructurePiece.addStructure(name, x, y, z, region);  
     Structure.set(StructureUtility.rotate(pool.get(name), StructureRotation.getAllY()[randomInt(0,3)]), x, y, z, region);
    }

var Flowers = WRAP_NATIVE("FlowerModule");

function setPlantModel(id, isDouble) {
var shape = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(id, 0, shape);    
Flowers.registerFlower(id, isDouble); 
} 

const DIR = __dir__+"structures/";




// file: biome/blocks.js

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




// file: items/crafting.js

IDRegistry.genItemID("ashPile");
Item.createItem("ashPile", "Ash Pile", {name: "ash_pile"});

Item.registerUseFunction(ItemID.ashPile, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == BlockID.soilCharred) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ashPiled, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
    if (block.id == BlockID.ashPiled && block.data < 3) {
        region.destroyBlock(coords.x,coords.y,coords.z,false);
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ashPiled, block.data + 1);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

IDRegistry.genItemID("charcoalBit");
Item.createItem("charcoalBit", "Charcoal Bit", {name: "charcoal_bit"});

IDRegistry.genItemID("charcoalActivated");
Item.createItem("charcoalActivated", "Charcoal Activated", {name: "activated_charcoal"});

IDRegistry.genItemID("charcoalActivatedFilter");
Item.createItem("charcoalActivatedFilter", "Charcoal Activated Filter", {name: "air_filter"});

IDRegistry.genItemID("ashPrimed");
Item.createItem("ashPrimed", "Ash Pile Primed", {name: "primed_ash"});

IDRegistry.genItemID("charcoalInfused");
Item.createItem("charcoalInfused", "Charcoal Activated Infused", {name: "infused_powder"});

IDRegistry.genItemID("glassBit");
Item.createItem("glassBit", "Glass Bit", {name: "glass_bit"});

IDRegistry.genItemID("cinderHeart");
Item.createItem("cinderHeart", "Heart of Cinder", {name: "heart_of_cinder"});
Item.setGlint(ItemID.cinderHeart, true);






Callback.addCallback("PostLoaded", function (){

Recipes.addShaped({id: 263, count: 1, data: 0}, [
    "aaa",
    "aaa"
], ['a', ItemID.charcoalBit, 0]);

Recipes.addShaped({id: ItemID.charcoalBit, count: 6, data: 0}, [
    "ooa",
], ['a', 263, 0]);

Recipes.addShaped({id: ItemID.charcoalActivatedFilter, count: 1, data: 0}, [
    "aaa",
    "aba",
    "aaa"
], ['a', ItemID.charcoalActivated, 0, 'b', 339, 0]);

Recipes.addShaped({id: ItemID.glassBit, count: 6, data: 0}, [
    "ooa",
], ['a', 20, 0]);

Recipes.addShaped({id: 102, count: 1, data: 0}, [
    "aaa",
    "aaa"
], ['a', ItemID.glassBit, 0]);

});





// file: items/food.js

var GRASS_LIGHT = Block.createSpecialType({
    lightlevel: 4,
    sound: "grass"
});

IDRegistry.genItemID("cinderfruit");
Item.createFoodItem("cinderfruit", "Cinderfruit", {name: "cinderfruit"},{isTech:false,food: 5});

IDRegistry.genItemID("cinderFruitSeed");
Item.createFoodItem("cinderFruitSeed", "Cinderfruit Seed", {name: "cinderfruit_seeds"},{isTech:false,food: 3});

Item.registerUseFunction("cinderFruitSeed", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.cinderFruits);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.cinderfruit){
Entity.addEffect(player, 11, 0, 400, true,true);
Entity.addEffect(player, 12, 0, 400, true,true);
}});

IDRegistry.genItemID("cinderfruitp");
Item.createFoodItem("cinderfruitp", "Powered Cinderfruit", {name: "cinderfruit"},{isTech:false,food: 3});
Item.setGlint(ItemID.cinderfruitp, true);
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.cinderfruitp){
Entity.addEffect(player, 11, 1, 600, true,true);
Entity.addEffect(player, 12, 1, 600, true,true);
Entity.addEffect(player, 5, 2, 600, true,true);
Entity.addEffect(player, 1, 2, 600, true,true);
}});

IDRegistry.genBlockID("cinderFruits");
Block.createBlock("cinderFruits", [
    {name: "Cinderfruit", texture: [["cinderfruit_empty_plant", 0], ["cinderfruit_empty_plant", 0], ["cinderfruit_empty_plant", 0]], inCreative: false}], GRASS_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.cinderFruits, "plant");
TileRenderer.setPlantModel(BlockID.cinderFruits, 0, "cinderfruit_empty_plant", 0);     

Block.registerDropFunction("cinderFruits", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.charcoalBit, 1, 0);
});

IDRegistry.genBlockID("cinderFruit");
Block.createBlock("cinderFruit", [
    {name: "Cinderfruit", texture: [["cinderfruit_full_plant", 0], ["cinderfruit_full_plant", 0], ["cinderfruit_full_plant", 0]], inCreative: false}], GRASS_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.cinderFruit, "plant");
TileRenderer.setPlantModel(BlockID.cinderFruit, 0, "cinderfruit_full_plant", 0);

Block.registerDropFunction("cinderFruit", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.cinderFruitSeed, 1, 0);
});

Callback.addCallback("ItemUse", function (coords,item,block, is, player) { 
pl= coords.relative; 
 var region = BlockSource.getDefaultForActor(player); 
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.cinderFruit){ 
  region.drop(coords.x, coords.y+1, coords.z, ItemID.cinderfruit, 3); 
   region.setBlock(coords.x,coords.y,coords.z,BlockID.cinderFruits,0); 
      } 
});

Block.setAnimateTickCallback(BlockID.cinderFruits, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();    
  if(region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.soilCharred){
      region.destroyBlock(coords.x,coords.y,coords.z,false);   
       region.setBlock(coords.x, coords.y, coords.z, BlockID.cinderFruit);     
      }  
});
   
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(1, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.cinderFruits,0);
    }
}});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(1, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && random.nextFloat() < .5){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.cinderFruit,0);
    }
}});




// file: items/armor.js

IDRegistry.genItemID("smokeMask");
Item.createArmorItem("smokeMask", "Mask", {name: "mask"}, {type: "helmet", armor: 2, durability: 132, texture: "armor/mask__layer_1.png"});

IDRegistry.genItemID("smokeGoogles");
Item.createArmorItem("smokeGoogles", "Googles", {name: "goggles"}, {type: "helmet", armor: 2, durability: 132, texture: "armor/goggles__layer_1.png"});

IDRegistry.genItemID("smokeMaskedGoogles");
Item.createArmorItem("smokeMaskedGoogles", "Mask & Googles", {name: "mask_and_goggles"}, {type: "helmet", armor: 2, durability: 250, texture: "armor/mask__layer_1.png"});





Recipes.addShaped({id: ItemID.smokeMask, count: 1, data: 0}, [
    "aaa",
    "cbc",
    "aaa"
], ['a', 334, 0, 'b', ItemID.charcoalActivatedFilter, 0, 'c', 287, 0]);

Recipes.addShaped({id: ItemID.smokeGoogles, count: 1, data: 0}, [
    "bcb",
    "aca",
    "bcb"
], ['a', 334, 0, 'b', 266, 0, 'c', ItemID.glassBit, 0]);

Recipes.addShaped({id: ItemID.smokeMaskedGoogles, count: 1, data: 0}, [
    "b",
    "a",
], ['a', ItemID.smokeMask, 0, 'b', ItemID.smokeGoogles, 0]);

Item.addRepairItemIds(ItemID.smokeMask, [ItemID.charcoalActivatedFilter, ItemID.smokeMask]);
Item.addRepairItemIds(ItemID.smokeGoogles, [ItemID.glassBit, ItemID.smokeGoogles]);
Item.addRepairItemIds(ItemID.smokeMaskedGoogles, [ItemID.charcoalActivatedFilter, ItemID.glassBit, ItemID.smokeMaskedGoogles]);




// file: biome/biome.js

var desolation = new CustomBiome("desolation")
desolation.setServerJson(JSON.stringify({
"minecraft:climate": {
        "downfall": 0.0,
        "snow_accumulation": [
          0.0,
          0.0
        ],
        "temperature": 1.5,
        "blue_spores": 0,
        "red_spores": 0,
        "white_ash": 2,
        "ash": 1
      },
      "minecraft:overworld_height": {
        "noise_type": "default"
      },
      "animal": {},
      "monster": {},
      "overworld": {},
      "desolation": {},
      "minecraft:surface_parameters": {
        "top_material": "minecraft:block_soil_charred",
        "mid_material": "minecraft:block_soil_charred",
        "foundation_material": "minecraft:stone",
        "sea_floor_material": "minecraft:block_soil_charred",
        "sea_material": "minecraft:water",
        "sea_floor_depth": 7
      },
      "minecraft:overworld_generation_rules": {
        "hills_transformation": "forest_hills",  
        "generate_for_climates": [
          [
            "cold",
            25
          ],
          [
            "medium",
            32
          ]  
        ],
        "mutate_transformation": "birch_forest"  
      } 
}));

desolation.setClientJson(JSON.stringify({
      "water_surface_color": "#3f515d",
      "water_fog_color": "#294252",
      "water_surface_transparency": 0.3,
      "water_fog_distance": 10,
      "fog_identifier": "desolation:desolation"
}));
 
ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.burnedLeavesNS, -1, ["charred_branches", 0]);
    BetterFoliage.setupLeavesModel(BlockID.burnedLeaves, -1, ["ash_bramble", 0]);
}); 
  
//TREES
var DesolationPool = new StructurePool("Desolation_Trees");  
DesolationPool.load(DIR+"CharredN.struct", "CharredN", "Structures");
DesolationPool.load(DIR+"CharredS.struct", "CharredS", "Structures");
DesolationPool.load(DIR+"CharredSM.struct", "CharredSM", "Structures");
DesolationPool.load(DIR+"CharredG.struct", "CharredG", "Structures");
DesolationPool.load(DIR+"CharredGM.struct", "CharredGM", "Structures");

Callback.addCallback("GenerateChunkUniversal", function(chunkX, chunkZ, random){
if(World.getBiome(chunkX * 16, chunkZ * 16) != desolation.id) return;
var region = BlockSource.getCurrentWorldGenRegion();
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 72, coords.z);
  if (coords.y > 55 && random.nextFloat() < .45 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredN", coords.x, coords.y + 1, coords.z, region);
  }
  if (coords.y > 55 && random.nextFloat() < .7 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredS", coords.x, coords.y + 1, coords.z, region);
  }
  if (coords.y > 55 && random.nextFloat() < .3 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredSM", coords.x, coords.y + 1, coords.z, region);
  }
  if (coords.y > 55 && random.nextFloat() < .5 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredG", coords.x, coords.y + 1, coords.z, region);
  }
  if (coords.y > 55 && random.nextFloat() < .25 && World.nativeGetBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred) {
generateTree(DesolationPool, "CharredGM", coords.x, coords.y + 1, coords.z, region);
  }
  if (random.nextFloat() < .35) {  
   for (var xx = 0; xx < randomInt(3, 5); xx++) {
 for (var zz = 0; zz < randomInt(3, 5); zz++) { 
     coords = GenerationUtils.findSurface(coords.x + xx, 70, coords.z + zz);
    if(World.getBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) 
      World.setBlock(coords.x + xx, coords.y + 1, coords.z + zz, BlockID.burnedLeavesNS, 0);
          }    
      }  
  }
  if (random.nextFloat() < .16) {  
   for (var xx = 0; xx < randomInt(1, 2); xx++) {
 for (var zz = 0; zz < randomInt(1, 3); zz++) { 
     coords = GenerationUtils.findSurface(coords.x + xx, 70, coords.z + zz);
    if(World.getBlockID(coords.x, coords.y, coords.z) == BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0) 
      World.setBlock(coords.x + xx, coords.y, coords.z + zz, BlockID.emberBlock, 0);
          }    
      }  
  }
});

//Grass
IDRegistry.genBlockID("scorchedTuftm");
Block.createBlock("scorchedTuftm", [
    {name: "Scorched Tuft", texture: [["scorched_tuft_medium", 0], ["scorched_tuft_medium", 0], ["scorched_tuft_medium", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.scorchedTuftm, "plant");

IDRegistry.genItemID("scorchedTuftm");
Item.createItem("scorchedTuftm", "Scorched Tuft", {name: "scorched_tuft_medium"});

Item.registerUseFunction("scorchedTuftm", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.scorchedTuftm);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.scorchedTuftm, false);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(2, 7); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.scorchedTuftm,0);
    }
}});

Block.registerDropFunction("scorchedTuftm", function(coords, blockID){
    return [];
});


IDRegistry.genBlockID("scorchedTuftl");
Block.createBlock("scorchedTuftl", [
    {name: "Scorched Tuft", texture: [["scorched_tuft_large", 0], ["scorched_tuft_large", 0], ["scorched_tuft_large", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.scorchedTuftl, "plant");

IDRegistry.genItemID("scorchedTuftl");
Item.createItem("scorchedTuftl", "Scorched Tuft", {name: "scorched_tuft_large"});

Item.registerUseFunction("scorchedTuftl", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.scorchedTuftl);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.scorchedTuftl, false);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(1, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.scorchedTuftl,0);
    }
}});

Block.registerDropFunction("scorchedTuftl", function(coords, blockID){
    return [];
});


IDRegistry.genBlockID("scorchedTuftlg");
Block.createBlock("scorchedTuftlg", [
    {name: "Scorched Tuft", texture: [["scorched_tuft_large", 0], ["scorched_tuft_large", 0], ["scorched_tuft_large", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.scorchedTuftlg, "plant");

IDRegistry.genItemID("scorchedTuftlg");
Item.createItem("scorchedTuftlg", "Scorched Tuft", {name: "scorched_tuft_large"});

Item.registerUseFunction("scorchedTuftlg", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.scorchedTuftlg);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.scorchedTuftlg, false);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(2, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.scorchedTuftlg,0);
    }
}});

Block.registerDropFunction("scorchedTuftlg", function(coords, blockID){
    return [];
});

IDRegistry.genBlockID("saplingCharred");
Block.createBlock("saplingCharred", [
    {name: "Charred Sapling", texture: [["charred_sapling", 0], ["charred_sapling", 0], ["charred_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.scorchedTuftl, "plant");

IDRegistry.genItemID("saplingCharred");
Item.createItem("saplingCharred", "Charred Sapling", {name: "charred_sapling"});

Item.registerUseFunction("saplingCharred", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.soilCharred){ 
        region.setBlock(place.x, place.y, place.z, BlockID.saplingCharred);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.saplingCharred, false);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 230, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(1, 2); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.soilCharred && World.getBlockID(coords.x, coords.y + 1, coords.z) == 0){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.saplingCharred,0);
    }
}});

Block.registerDropFunction("saplingCharred", function(coords, blockID){
    if(Math.random() < .09){
        return [[280, 1, 0]]
    }
    else {
        return [];
    }
});







// file: Translation.js

Translation.addTranslation("Ash Pile", {ru: "Горстка пепла"});
Translation.addTranslation("Charcoal Bit", {ru: "Кусочек угля"});
Translation.addTranslation("Charcoal Activated", {ru: "Уголь активированный"});
Translation.addTranslation("Charcoal Activated Filter", {ru: "Фильтр угольный"});
Translation.addTranslation("Ash Pile Primed", {ru: "Горстка возжённого пепла"});
Translation.addTranslation("Charcoal Activated Infused", {ru: "Пепел с активированным углем"});
Translation.addTranslation("Glass Bit", {ru: "Кусочек стекла"});
Translation.addTranslation("Heart of Cinder", {ru: "Пепельное сердце"});
Translation.addTranslation("Cinderfruit", {ru: "Пепельный фрукт"});
Translation.addTranslation("Cinderfruit Seed", {ru: "Пепельное семечко"});
Translation.addTranslation("Powered Cinderfruit", {ru: "Активированный Пепельный фрукт"});
Translation.addTranslation("Mask", {ru: "Маска"});
Translation.addTranslation("Googles", {ru: "Очки защитные"});
Translation.addTranslation("Mask & Googles", {ru: "Защитая маска"});


Translation.addTranslation("Charred Soil", {ru: "Обугленная почва"});
Translation.addTranslation("Ash", {ru: "Пепел"});
Translation.addTranslation("Ember Block", {ru: "Красные угли"});
Translation.addTranslation("Cooled Ember Block", {ru: "Потухшие угли"});
Translation.addTranslation("Charred Planks", {ru: "Обугленные доски"});
Translation.addTranslation("Ash Bramble", {ru: "Пепельные ветки"});
Translation.addTranslation("Charred Branches", {ru: "Обугленные ветки"});
Translation.addTranslation("Scorched Tuft", {ru: "Выжженая трава"});
Translation.addTranslation("Charred Sapling", {ru: "Обуленный саженец"});
Translation.addTranslation("Charred Branches", {ru: "Обугленные ветки"});




