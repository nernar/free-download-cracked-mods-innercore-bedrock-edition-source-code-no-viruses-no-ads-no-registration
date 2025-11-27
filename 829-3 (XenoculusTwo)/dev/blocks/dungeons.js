var BLOCK_TYPE_PLANE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 87,
    translucency: 1,
    sound: "glass"
});

//LOOT

var NORMAL_RANDOM_DROP = [
    {chance: 45, id: ItemID.manuartzSh, data: 0},
    {chance: 25, id: ItemID.manuartzGw, data: 0},
    {chance: 15, id: ItemID.southiveSc, data: 0},
    {chance: 15, id: ItemID.NeciceSh, data: 0} 
];

var AIR_RANDOM_DROP = [
    {chance: 45, id: ItemID.manuartzSh, data: 0},
    {chance: 25, id: ItemID.manuartzGw, data: 0},
    {chance: 15, id: ItemID.southiveSc, data: 0},
    {chance: 5, id: 322, data: 0},
    {chance: 20, id: ItemID.magnemiveIngot, data: 0},
    {chance: 15, id: ItemID.PolusSh, data: 0} 
];

var DUSKEN_RANDOM_DROP = [
    {chance: 45, id: ItemID.manuartzSh, data: 0},
    {chance: 25, id: ItemID.manuartzGw, data: 0},
    {chance: 15, id: ItemID.southiveSc, data: 0},
    {chance: 5, id: 322, data: 0},
    {chance: 2, id: ItemID.manuartzStaff, data: 0},
    {chance: 8, id: ItemID.northositLp, data: 0},,
    {chance: 35, id: ItemID.magnemiveIngot, data: 0},
    {chance: 15, id: ItemID.PolusSh, data: 0} 
];

function getDropItem(drops){
    var total = 0;
    for (var i in drops){
        total += drops[i].chance;
    }
    var random = Math.random() * total * 1.4;
    var current = 0;
    for (var i in drops){
        var drop = drops[i];
        if (current < random && current + drop.chance > random){
            return drop;
        }
        current += drop.chance;
    }    
    return {id: ItemID.NeciceSh, data: 0};
}


//NORMAL
var NORMALCHESTmesh = new RenderMesh();
NORMALCHESTmesh.setBlockTexture("treasurechestnormal",0);
NORMALCHESTmesh.importFromFile(__dir__+"models/treasurechest.obj","obj",null);
IDRegistry.genBlockID("normalchest");
Block.createBlock("normalchest", [
    {name: "Normal Chest", texture: [["treasurechestnormal", 0]], inCreative: true}
]);
var NORMALCHESTrender = new ICRender.Model();
NORMALCHESTrender.addEntry(new BlockRenderer.Model(NORMALCHESTmesh));
BlockRenderer.setStaticICRender(BlockID.normalchest,0,NORMALCHESTrender);

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
let tsu = BlockSource.getDefaultForActor(player);
  var coords = coords.relative;
 if(item.id == 0 && tsu.getBlockId(coords.x,coords.y,coords.z)==BlockID.normalchest){  
  tsu.destroyBlock(coords.x,coords.y,coords.z);  
   tsu.setBlock(coords.x,coords.y,coords.z,BlockID.normalchestOpen,0);      
}});

var NORMALCHESTOmesh = new RenderMesh();
NORMALCHESTOmesh.setBlockTexture("normalchestunlocked",0);
NORMALCHESTOmesh.importFromFile(__dir__+"models/treasurechest_opened.obj","obj",null);
IDRegistry.genBlockID("normalchestOpen");
Block.createBlock("normalchestOpen", [
    {name: "Normal Chest", texture: [["normalchestunlocked", 0]], inCreative: true}
]);
var NORMALCHESTOrender = new ICRender.Model();
NORMALCHESTOrender.addEntry(new BlockRenderer.Model(NORMALCHESTOmesh));
BlockRenderer.setStaticICRender(BlockID.normalchestOpen,0,NORMALCHESTOrender);

Block.registerDropFunction("normalchestOpen", function(coords,item, block){
var region = BlockSource.getCurrentWorldGenRegion();
 for(var i = 0; i <= randomInt(3, 6); i ++) {
 var drop = getDropItem(NORMAL_RANDOM_DROP);
    region.spawnDroppedItem(coords.relative.x + Math.random(), coords.relative.y + 0.3, coords.relative.z + Math.random(), drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
     } 
});

//AIR
var AIRCHESTmesh = new RenderMesh();
AIRCHESTmesh.setBlockTexture("airchest",0);
AIRCHESTmesh.importFromFile(__dir__+"models/treasurechest.obj","obj",null);
IDRegistry.genBlockID("airchest");
Block.createBlock("airchest", [
    {name: "Air Chest", texture: [["airchest", 0]], inCreative: true}
]);
var AIRCHESTrender = new ICRender.Model();
AIRCHESTrender.addEntry(new BlockRenderer.Model(AIRCHESTmesh));
BlockRenderer.setStaticICRender(BlockID.airchest,0,AIRCHESTrender);

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
let tsu = BlockSource.getDefaultForActor(player);
  var coords = coords.relative;
 if(item.id == 0 && tsu.getBlockId(coords.x,coords.y,coords.z)==BlockID.airchest){ 
  tsu.destroyBlock(coords.x,coords.y,coords.z);
   tsu.setBlock(coords.x,coords.y,coords.z,BlockID.airchestOpen,0);      
}});

var AIRCHESTOmesh = new RenderMesh();
AIRCHESTOmesh.setBlockTexture("airchestunlocked",0);
AIRCHESTOmesh.importFromFile(__dir__+"models/treasurechest_opened.obj","obj",null);
IDRegistry.genBlockID("airchestOpen");
Block.createBlock("airchestOpen", [
    {name: "Air Chest", texture: [["airchestunlocked", 0]], inCreative: true}
]);
var AIRCHESTOrender = new ICRender.Model();
AIRCHESTOrender.addEntry(new BlockRenderer.Model(AIRCHESTOmesh));
BlockRenderer.setStaticICRender(BlockID.airchestOpen,0,AIRCHESTOrender);

Block.registerDropFunction("airchestOpen", function(coords,item, block){
var region = BlockSource.getCurrentWorldGenRegion();
for(var i = 0; i <= randomInt(3, 6); i ++) {
 var drop = getDropItem(AIR_RANDOM_DROP);
    region.spawnDroppedItem(coords.relative.x + Math.random(), coords.relative.y + 0.3, coords.relative.z + Math.random(), drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
     } 
});

//DUSKEN

var DUSKENCHESTmesh = new RenderMesh();
DUSKENCHESTmesh.setBlockTexture("duskenchest",0);
DUSKENCHESTmesh.importFromFile(__dir__+"models/treasurechest.obj","obj",null);
IDRegistry.genBlockID("duskenchest");
Block.createBlock("duskenchest", [
    {name: "Dusken Chest", texture: [["duskenchest", 0]], inCreative: true}
]);
var DUSKENCHESTrender = new ICRender.Model();
DUSKENCHESTrender.addEntry(new BlockRenderer.Model(DUSKENCHESTmesh));
BlockRenderer.setStaticICRender(BlockID.airchest,0,DUSKENCHESTrender);

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
let tsu = BlockSource.getDefaultForActor(player);
  var coords = coords.relative;
 if(item.id == 0 && tsu.getBlockId(coords.x,coords.y,coords.z)==BlockID.duskenchest){ 
  tsu.destroyBlock(coords.x,coords.y,coords.z);
   tsu.setBlock(coords.x,coords.y,coords.z,BlockID.duskenchestOpen,0);      
}});

var DUSKENCHESTOmesh = new RenderMesh();
DUSKENCHESTOmesh.setBlockTexture("duskenchestunlocked",0);
DUSKENCHESTOmesh.importFromFile(__dir__+"models/treasurechest_opened.obj","obj",null);
IDRegistry.genBlockID("duskenchestOpen");
Block.createBlock("duskenchestOpen", [
    {name: "Dusken Chest", texture: [["duskenchestunlocked", 0]], inCreative: true}
]);
var DUSKENCHESTOrender = new ICRender.Model();
DUSKENCHESTOrender.addEntry(new BlockRenderer.Model(DUSKENCHESTOmesh));
BlockRenderer.setStaticICRender(BlockID.duskenchestOpen,0,DUSKENCHESTOrender);

Block.registerDropFunction("duskenchestOpen", function(coords,item, block){
var region = BlockSource.getCurrentWorldGenRegion();
 for(var i = 0; i <= randomInt(3, 6); i ++) {
 var drop = getDropItem(DUSKEN_RANDOM_DROP);
    region.spawnDroppedItem(coords.relative.x + Math.random(), coords.relative.y + 0.3, coords.relative.z + Math.random(), drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
     }  
}); 


//IVORACK
IDRegistry.genBlockID("IvorakBricks");
IDRegistry.genBlockID("IvorakBricksFrozen");
IDRegistry.genBlockID("chiseledIvorakBricks");
IDRegistry.genBlockID("IvorakWall");
IDRegistry.genBlockID("IvorakWallFrozen");

Block.createBlock("IvorakBricks", [
    {name: "Ivorak Bricks", texture: [["ivorackbricks", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("IvorakBricksFrozen", [
    {name: "Ivorak Bricks Frozen", texture: [["ivorackbricksicy", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("chiseledIvorakBricks", [
    {name: "Chiseled Ivorak Bricks", texture: [["chiseledivorack", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("IvorakWall", [
    {name: "Ivorak Wall", texture: [["ivorackbricks", 0]], inCreative: true}
], BLOCK_TYPE_WALL);
Block.createBlock("IvorakWallFrozen", [
    {name: "Ivorak Wall Frozen", texture: [["ivorackbricksicy", 0]], inCreative: true}
], BLOCK_TYPE_WALL);

ToolAPI.registerBlockMaterial(BlockID.IvorakBricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakBricksFrozen, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.chiseledIvorakBricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakWall, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakWallFrozen, "stone", 2, true);

IDRegistry.genBlockID("IvorakBricksSlab");
IDRegistry.genBlockID("IvorakBricksSlabDouble");
IDRegistry.genBlockID("IvorakBricksFrozenSlab");
IDRegistry.genBlockID("IvorakBricksFrozenSlabDouble");

BaseBlocks.createSlab("IvorakBricksSlab", [
    {name: "Ivorak Bricks Slab", texture: [
        ["ivorackbricks", 0], ["ivorackbricks", 0], ["ivorackbricks", 0]
    ], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.IvorakBricksSlabDouble);
BaseBlocks.createSlab("IvorakBricksFrozenSlab", [
    {name: "Ivorak Bricks Slab", texture: [
        ["ivorackbricks", 0], ["ivorackbricks", 0], ["ivorackbricks", 0]
    ], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.IvorakBricksFrozenSlabDouble);
BaseBlocks.createSlab("IvorakBricksSlabDouble", [
    {name: "Ivorak Bricks Slab", texture: [["ivorackbricks", 0]], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.IvorakBricksSlabDouble);
BaseBlocks.createSlab("IvorakBricksFrozenSlabDouble", [
    {name: "Ivorak Bricks Slab", texture: [["ivorackbricks", 0]], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.IvorakBricksFrozenSlabDouble);

Block.createBlock("IvorakBricksSlabDouble", [
    {name: "Ivorak Brick Slab", texture: [
        ["ivorackbricks", 0], ["ivorackbricks", 0], ["ivorackbricks", 0]
    ], inCreative: false}
], BLOCK_TYPE_SLAB);
Block.createBlock("IvorakBricksFrozenSlabDouble", [
    {name: "Ivorak Cobblestone Slab", texture: [["ivorackbricks", 0]], inCreative: false}
], BLOCK_TYPE_SLAB);

ToolAPI.registerBlockMaterial(BlockID.IvorakBricksSlab, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakBricksSlabDouble, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakBricksFrozenSlab, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.IvorakBricksFrozenSlabDouble, "stone", 2, true);

//FRONE

IDRegistry.genBlockID("FroneBricks");
IDRegistry.genBlockID("chiseledFroneBricks");
IDRegistry.genBlockID("FroneBricksWall");

Block.createBlock("FroneBricks", [
    {name: "Frone Bricks", texture: [["fronebricks", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("chiseledFroneBricks", [
    {name: "Chiseled Frone Bricks", texture: [["chiseledfrone", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
Block.createBlock("FroneBricksWall", [
    {name: "Frone Wall", texture: [["fronebricks", 0]], inCreative: true}
], BLOCK_TYPE_WALL);

ToolAPI.registerBlockMaterial(BlockID.FroneBricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.chiseledFroneBricks, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.FroneBricksWall, "stone", 2, true);

IDRegistry.genBlockID("FroneBricksSlab");
IDRegistry.genBlockID("FroneBricksSlabDouble");

BaseBlocks.createSlab("FroneBricksSlab", [
    {name: "Frone Bricks Slab", texture: [
        ["fronebricks", 0], ["fronebricks", 0], ["fronebricks", 0]
    ], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.FroneBricksSlabDouble);
BaseBlocks.createSlab("FroneBricksSlabDouble", [
    {name: "Frone Bricks Slab", texture: [["fronebricks", 0]], inCreative: true}
], BLOCK_TYPE_SLAB, BlockID.FroneBricksSlabDouble);

Block.createBlock("FroneBricksSlabDouble", [
    {name: "Frone Brick Slab", texture: [
        ["fronebricks", 0], ["fronebricks", 0], ["fronebricks", 0]
    ], inCreative: false}
], BLOCK_TYPE_SLAB);

ToolAPI.registerBlockMaterial(BlockID.FroneBricksSlab, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.FroneBricksSlabDouble, "stone", 2, true);

IDRegistry.genBlockID("NecicePlane");
Block.createBlock("NecicePlane", [{name: "Necice Plane", texture: [["coldictethint", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

IDRegistry.genItemID("NecicePlane");
Item.createItem("NecicePlane", "Necice Plane", {name: "coldictethint"});

Item.registerUseFunction("NecicePlane", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.NecicePlane);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});  
     

IDRegistry.genBlockID("CageDeco");
Block.createBlock("CageDeco", [{name: "Cage Decorative", texture: [["cage", 0]],inCreative: true}], {sound: "metal"});

/*Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimeID) {
if(dimeID != Xenoculus.id) return; 
var region = BlockSource.getCurrentWorldGenRegion();
var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 72, coords.z);
if (World.getBiome(chunkX * 16, chunkZ * 16) == BIOME_CORALSWAMP.id) { 
  if (coords.y > 80 && random.nextFloat() < .01 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.dirtGryss) {
smallIv.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
  }
  if (coords.y > 80 && random.nextFloat() < .01 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.dirtGryss) {
mediuIv.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
  }
  if (coords.y > 80 && random.nextFloat() < .005 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.dirtGryss) {
TowerIv.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
  }   
  if (coords.y > 80 && random.nextFloat() < .005 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.dirtGryss) {
smallFr.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
  }   
}});*/


Callback.addCallback("PostLoaded", function(){
    //ivorack
    //Recipes.addFurnace(BlockID.darklandsStoneCobblestone, BlockID.darklandsStone, 0);
    addShapedRecipe(BlockID.IvorakBricksSlab, 6, 0, ["sss"], ['s', BlockID.dirtGryss, 0]);
    addShapedRecipe(BlockID.IvorakBricksSlabDouble, 4, 0, ["ss", "ss"], ['s', BlockID.dirtGryss, 0]);
    //Recipes.addFurnace(BlockID.darklandsStoneBricks, 0, BlockID.crackedDarklandsStoneBricks, 0);
    addShapedRecipe(BlockID.IvorakBricksFrozenSlab, 6, 0, ["sss"], ['s', BlockID.dirtGryss, 0]);
    addShapedRecipe(BlockID.IvorakBricksFrozenSlabDouble, 4, 0, ["ss", "ss"], ['s', BlockID.dirtGryss, 0]);
    addShapedRecipe(BlockID.chiseledIvorakBricks, 1, 0, ["s", "s"], ['s', BlockID.dirtGryss, 0]);
    addShapedRecipe(BlockID.IvorakWall, 6, 0, ["sss", "sss"], ['s', BlockID.dirtGryss, 0]); 
    addShapedRecipe(BlockID.IvorakWallFrozen, 6, 0, ["sss", "sss"], ['s', BlockID.dirtGryss, 0]); 
    //frone
    addShapedRecipe(BlockID.FroneBricksSlab, 6, 0, ["sss"], ['s', BlockID.Frone, 0]);
    addShapedRecipe(BlockID.FroneBricksSlabDouble, 4, 0, ["ss", "ss"], ['s', BlockID.Frone, 0]);
    addShapedRecipe(BlockID.chiseledFroneBricks, 1, 0, ["s", "s"], ['s', BlockID.Frone, 0]);
    addShapedRecipe(BlockID.FroneBricksWall, 6, 0, ["sss", "sss"], ['s', BlockID.Frone, 0]); 
});