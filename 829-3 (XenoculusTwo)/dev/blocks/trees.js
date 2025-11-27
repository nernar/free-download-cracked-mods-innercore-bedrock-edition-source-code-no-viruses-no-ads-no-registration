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
        ["flurostLog", "Flurost Log", "fulrostlogtop", "fulrostlogside"],
        ["glaciLog", "Glacilog", "glacilogtop", "glacilogside"],
        ["weepingTreeDry", "Weeping Tree Log", "weepingtreelogtop", "weepingtreelogsidedry"],
        ["weepingTree", "Weeping Tree Log", "weepingtreelogtop", "weepingtreelogside"]
    ]);
})();

//PLANKS

IDRegistry.genBlockID("flurostPlanks");
IDRegistry.genBlockID("glaciPlanks");
IDRegistry.genBlockID("weepingTreeDryPlanks");

Block.createBlock("flurostPlanks", [
    {name: "Flurost Log Planks", texture: [["fulrostplanks", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);
Block.createBlock("glaciPlanks", [
    {name: "Glacilog Planks", texture: [["glasinplanks", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);
Block.createBlock("weepingTreeDryPlanks", [
    {name: "Weeping Tree Log Planks", texture: [["weepingplanls", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

ToolAPI.registerBlockMaterial(BlockID.flurostPlanks, "wood", 0, false);
ToolAPI.registerBlockMaterial(BlockID.glaciPlanks, "wood", 0, false);
ToolAPI.registerBlockMaterial(BlockID.weepingTreeDryPlanks, "wood", 0, false);

//LEAVES

IDRegistry.genBlockID("flurostLeaves");
IDRegistry.genBlockID("glaciLeaves");
IDRegistry.genBlockID("weepingTreeLeaves");

Block.createBlock("flurostLeaves", [
    {name: "Flurost Log Leaves", texture: [["fulrostleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.createBlock("glaciLeaves", [
    {name: "Glacilog Leaves", texture: [["glacileaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.createBlock("weepingTreeLeaves", [
    {name: "Weeping Tree Log Leaves", texture: [["paletreeleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);

ToolAPI.registerBlockMaterial(BlockID.flurostLeaves, "plant", 0, false);
ToolAPI.registerBlockMaterial(BlockID.glaciLeaves, "plant", 0, false);
ToolAPI.registerBlockMaterial(BlockID.weepingTreeDryLeaves, "plant", 0, false);

ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.darklandsOakLeaves, -1, ["fulrostleaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.dreadlandsWoodLeaves, -1, ["glacileaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.dreadlandsWoodLeaves, -1, ["paletreeleaves", 0]);
});

Block.registerDropFunction(BlockID.flurostLeaves, function(coords, blockID, blockData, level, enchant, item, region){
    //if(Math.random() < .095) return [[ItemID.flurostSapling, 1, 0]];
    return [];
});
Block.registerDropFunction(BlockID.glaciLeaves, function(coords, blockID, blockData, level, enchant, item, region){
    //if(Math.random() < .095) return [[ItemID.glaciSapling, 1, 0]];
    return [];
});
Block.registerDropFunction(BlockID.weepingTreeDryLeaves, function(coords, blockID, blockData, level, enchant, item, region){
    //if(Math.random() < .095) return [[ItemID.weepingTreeDrySapling, 1, 0]];
    return [];
});

IDRegistry.genBlockID("glacingVine");
Block.createBlock("glacingVine", [
    {name: "Glacing Vine", texture: [["glacinvine", 0], ["glacinvine", 0], ["glacinvine", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.glacingVine, "plant");

IDRegistry.genItemID("glacingVine");
Item.createItem("glacingVine", "Vanilla", {name: "glacinvine"});
setPlantModel(BlockID.glacingVine, true);

Item.registerUseFunction("glacingVine", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
    if (region.getBlockId(place.x, place.y + 1, place.z)==BlockID.glaciLeaves){  
  region.setBlock(place.x, place.y + 1, place.z, BlockID.glacingVine);      
      }
});


IDRegistry.genBlockID("glacingVineEnd");
Block.createBlock("glacingVineEnd", [
    {name: "Glacing Vine", texture: [["glacivineend", 0], ["glacivineend", 0], ["glacivineend", 0]], inCreative: false}
], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.glacingVineEnd, "plant");

IDRegistry.genItemID("glacingVineEnd");
Item.createItem("glacingVineEnd", "Vanilla", {name: "glacivineend"});
setPlantModel(BlockID.glacingVineEnd, true);

Item.registerUseFunction("glacingVineEnd", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
    if (region.getBlockId(place.x, place.y + 1, place.z)==BlockID.glaciLeaves || region.getBlockId(place.x, place.y + 1, place.z)==BlockID.glacingVine){  
  region.setBlock(place.x, place.y + 1, place.z, BlockID.glacingVineEnd);      
      }
});


//Trees
 flurostS = new Structure("FlurostS");
 flurostB = new Structure("FlurostB");
 //glaciL = new Structure("Tower");
 //glaciS = new Structure("Tower");
 //weepingB = new Structure("Tower");
 //weepingM = new Structure("Tower");

//Structures
 cloud = new Structure("Cloud");
 snow = new Structure("Snow");
 
   //Towers
 TowerF = new Structure("FroneS");
 TowerFM = new Structure("FroneM");
 TowerFG = new Structure("FroneB");
 TowerFGF = new Structure("FroneBF");

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimeID){
if(dimeID != Xenoculus.id) return; 
var region = BlockSource.getCurrentWorldGenRegion();
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
        coords = GenerationUtils.findSurface(coords.x, 245, coords.z);
        if(coords.y < 37) return;
 if(random.nextFloat() < .54 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) flurostS.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
 if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) flurostB.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) glaciL.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) glaciS.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) weepingB.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) weepingM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 //if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) greenN.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 
 if(random.nextFloat() < .016 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) TowerF.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 if(random.nextFloat() < .02 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) TowerFM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 if(random.nextFloat() < .009 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) TowerFG.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 if(random.nextFloat() < .007 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) TowerFGF.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
 
 if(random.nextFloat() < .01 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) cloud.build(coords.x, coords.y + randomInt(19, 379), coords.z, Structure.ROTATE_Y, random, region);  
 if(random.nextFloat() < .01 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockGryss) snow.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);  
});

