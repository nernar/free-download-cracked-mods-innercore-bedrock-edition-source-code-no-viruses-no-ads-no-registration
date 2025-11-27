//BETTER FOILAGE SETUP
ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.greenskyrootLeaves, -1, ["green_skyrootleaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.goldenLeaves, -1, ["golOakleaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.blueskyrootLeaves, -1, ["blue_skyrootleaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.darkblueskyrootLeaves, -1, ["dark_blue_skyrootleaves", 0]);
});


var TreesPool = new StructurePool("Aether_Trees");  

 //greenN = new Structure("Ntree1");
 TreesPool.load(DIR+"Ntree1.struct", "greenN", "Structures");
 //greenNM = new Structure("Ntree2");
 TreesPool.load(DIR+"Ntree2.struct", "greenNM", "Structures");
 //greenL = new Structure("Ntree4");
 TreesPool.load(DIR+"Ntree4.struct", "greenL", "Structures");
 //greenNest = new Structure("NestTree");
 TreesPool.load(DIR+"NestTree.struct", "greenNest", "Structures");
 //goldenS = new Structure("GoldenS");
 TreesPool.load(DIR+"GoldenS.struct", "goldenS", "Structures");
 
 
 //greenBG = new Structure("Ntree3");
  TreesPool.load(DIR+"Ntree3.struct", "greenBG", "Structures");
 //greenBGM = new Structure("Ntree5");
  TreesPool.load(DIR+"Ntree5.struct", "greenBGM", "Structures");
 //greenBGML = new Structure("Ntree7");
  TreesPool.load(DIR+"Ntree7.struct", "greenBGML", "Structures");
 //greenM = new Structure("Ntree6");
  TreesPool.load(DIR+"Ntree6.struct", "greenM", "Structures");
 //wisprootN = new Structure("WisprootN");
  TreesPool.load(DIR+"WisprootN.struct", "wisprootN", "Structures");
 
 
 //BUILDINGS
var BuildingsPool = new StructurePool("Aether_Buildings"); 

 //nest = new Structure("NestWild");
 BuildingsPool.load(DIR+"NestWild.struct", "nest", "Structures");
 //tower = new Structure("Tower");
 BuildingsPool.load(DIR+"Tower.struct", "tower", "Structures");
 //Shaft = new Structure("Shaft");
 BuildingsPool.load(DIR+"Shaft.struct", "Shaft", "Structures");
 //ShaftBase = new Structure("ShaftB");
 BuildingsPool.load(DIR+"ShaftB.struct", "ShaftBase", "Structures");
 
/*
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimeID){
if(dimeID != Aether.id) return; 
var region = BlockSource.getCurrentWorldGenRegion();
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
        coords = GenerationUtils.findSurface(coords.x, 248, coords.z);
        if(coords.y < 37) return;
        if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenN.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .52 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenNM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .50 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenBGM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .33 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenBGML.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .33 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .003 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) goldenS.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .008 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) tower.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .09 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) wisprootN.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .03 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenNest.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .009 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) nest.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .001 && World.getBlockID(coords.x, coords.y - 9, coords.z) == BlockID.Holystone) {
         Shaft.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, random, region);
         ShaftBase.build(coords.x, coords.y - 1, coords.z, Structure.ROTATE_Y, random, region);
        }
});*/

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimeID){
if(dimeID != Aether.id) return; 
var region = BlockSource.getCurrentWorldGenRegion();
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
        coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
        if(coords.y < 37) return;  
        if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenN", coords.x, coords.y + 1, coords.z, region);  
        if(random.nextFloat() < .52 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenN", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenL", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .43 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenBG", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .50 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenBGM", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .31 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenBGML", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .34 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenM", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .004 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "goldenS", coords.x, coords.y + 1, coords.z, region);    
        /*if(random.nextFloat() < .008 && World.getBlockID(coords.x, coords.y - 9, coords.z) == BlockID.Holystone) {
         AetherGenerator.generateRotateble("Shaft", coords.x, coords.y + 1, coords.z, region);
         AetherGenerator.generateRotateble("ShaftBase", coords.x, coords.y - 10, coords.z, region);
        }*/
});
 
Callback.addCallback("StructureLoadOne", function(){
 AetherGenerator.generateBuilds("BuildingsPool", "tower", {offset: {x:0, y:1, z:0}, chance: 3, distance: 85, check:BlockID.grassblockAether});
 AetherGenerator.generateBuilds("TreesPool", "wisprootN", {offset: {x:0, y:1, z:0}, chance: 7, distance: 25, check:BlockID.grassblockAether});
 AetherGenerator.generateBuilds("TreesPool", "greenNest", {offset: {x:0, y:1, z:0}, chance: 5, distance: 5, check:BlockID.grassblockAether});
 AetherGenerator.generateBuilds("BuildingsPool", "nest", {offset: {x:0, y:1, z:0}, chance: 9, distance: 48, check:BlockID.grassblockAether});  
});