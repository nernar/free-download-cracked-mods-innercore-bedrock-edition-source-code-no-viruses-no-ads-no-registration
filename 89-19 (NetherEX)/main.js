/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 14
*/



// file: api/API.js

IMPORT("StructuresAPI");

Structure.init("structures");

Native.EntityType.SKELETON_WITHER = 48;
Native.EntityType.GHAST = 41;
var UniqueGen={ 
generateOre: function(id, data, chunkX, chunkZ, params){  
for (var i = 0; i < params.veinCounts; i++){ 
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y); 
if(Math.random() < params.veinChance)GenerationUtils.genMinable(coords.x, coords.y, coords.z, { 
id: id, 
data: data, 
size: params.size, 
ratio: params.ratio, 
checkerTile: params.checkerTile, 
checkerMode: params.checkerMode 
      }); 
   }  
}
}

var Str = {
DeadsF:23,
ShroomsF:26,
generateTrees:function(chunkX, chunkZ, names, params){
 for(var i = 0; i < 4; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y);
if(World.getBlockID(coords.x,coords.y,coords.z)==params.check){
  Structure.setInWorld(names[i], coords.x, coords.y+1, coords.z, [Structure.ROTATE_90Y,Structure.ROTATE_270Y,Structure.ROTATE_180Y], false, false);
    } 
  }
},
generateBuildings:function(chunkX, chunkZ, names, params){
for(var i in names){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y);
if(World.getBlockID(coords.x,coords.y,coords.z)==params.check){
  Structure.setInWorld(names[i], coords.x, coords.y, coords.z, [Structure.ROTATE_90Y,Structure.ROTATE_270Y,Structure.ROTATE_180Y], false, false);
    } 
  }
},
generateEnoki:function(chunkX, chunkZ, name, params){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, params.min_y, params.max_y);
if(World.getBlockID(coords.x,coords.y,coords.z)== params.check && World.getBlockID(coords.x,coords.y-2,coords.z)== 0){
  Structure.setInWorld(name, coords.x, coords.y-1, coords.z, [Structure.ROTATE_90Y,Structure.ROTATE_270Y,Structure.ROTATE_180Y], false, false);
  }
}
}




// file: NXblocks/fire.js

IMPORT("SoundAPI", "*");
var Renderer={
        setFireRender:function(id,x){
        var shape = new ICRender.CollisionShape();
        BlockRenderer.setCustomCollisionShape(Block.getNumericId(id), -1, shape);    
        BlockRenderer.addRenderCallback(id, function(api, coords,block) {
            if(x!=0){
                for(var i = 0;i < 1/x;i+=x){
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
                }
            }
            else{
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
            }
        })
        BlockRenderer.enableCustomRender(id);
    }
};

var BLOCK_LIGHT = Block.createSpecialType({
    lightlevel: 12,
    opaque: false
});
IDRegistry.genBlockID("BlueFire");
Block.createBlock("BlueFire", [
{name: "Blue Fire", texture: [["FireBlue", 0]], inCreative: false}], BLOCK_LIGHT);

Renderer.setFireRender(BlockID.BlueFire,0);


Block.setBlockShape(BlockID.BlueFire, {x: 0, y: 0, z: 0},{x: 1, y: 0.001, z: 1});
ToolAPI.registerBlockMaterial(BlockID.BlueFire, "cobweb");

Callback.addCallback("tick",function() {
var entP = Entity.getPosition(Player.get());
var block = World.getBlockID(entP.x, entP.y, entP.z);
if(block == BlockID.BlueFire){
Entity.setFire(Player.get(), 180);    
}});

Block.registerDropFunction("BlueFire", function(){
    if(Math.random() < .060){
        return [[ItemID.RimeCryst, 1, 0]]
    }
    else {
        return [];
    }
});




// file: NXblocks/Mosh/Moshrooms.js


//MOSH
IDRegistry.genBlockID("moshS");
Block.createBlockWithRotation("moshS", [
{name: "Elder Moshroom Stem", texture: [["MEF", 0],["MEF", 0],["MES", 0],["MES", 0], ["MES", 0],["MES", 0]], inCreative: true}
], "opaque");
    
IDRegistry.genBlockID("moshCr");
Block.createBlockWithRotation("moshCr", [
{name: "Rad Elder Moshroom Cap", texture: [["MECR", 0],["MECR", 0],["MECR", 0],["MECR", 0],["MECR", 0],["MECR", 0]], inCreative: true }
], "opaque");
Block.registerDropFunction("moshCr", function(){
    if(Math.random() < .080){
        return [[ItemID.rmoshroomSmall, 1, 0]]
    }
    else {
        return [];
    }
});
   
IDRegistry.genBlockID("moshCb");
Block.createBlockWithRotation("moshCb", [
{name: "Brown Elder Moshroom Cap", texture: [["MECB", 0],["MECB", 0],["MECB", 0],["MECB", 0],["MECB", 0],["MECB", 0]],
inCreative: true}], "opaque");
Block.registerDropFunction("moshCb", function(){
    if(Math.random() < .080){
        return [[ItemID.bmoshroomSmall, 1, 0]]
    }
    else {
        return [];
    }
});

IDRegistry.genBlockID("MushroomEnokiCap");
Block.createBlockWithRotation("MushroomEnokiCap", [
{name: "Mushroom Enoki Cap", texture: [["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0],["plant_MushroomEnokiCap", 0]],
inCreative: true}]);
Block.registerDropFunction("MushroomEnokiCap", function(){
    if(Math.random() < .125){
        return [[ItemID.EnMushroom, 1, 0]]
    }
    else {
        return [];
    }
});

function setMoshRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

IDRegistry.genBlockID("gifMosh");
Block.createBlock("gifMosh", [
    {name: "Moshroom", texture: [["plant_Enoki", 0]], inCreative: true}]);

setMoshRender(BlockID.gifMosh, 1/2, "nx-en");

setMoshRender(BlockID.MushroomEnokiCap, 1/1, "nx-en");

BlockRenderer.addRenderCallback(BlockID.gifMosh, function(api, block) {
var coords = coords.relative;     
if(World.getBlockID(coords.x, coords.y+1, coords.z)==87){
setMoshRender(87, 1/1, "nx-en");
}   
});             

Block.setRandomTickCallback(BlockID.MushroomEnokiCap, function(x, y, z, id, data){       
var coords = coords.relative;
World.destroyBlock(coords.x,coords.y,coords.z,false);         
Str.generateTrees(crd.x, crd.z, "Shroom1", {min_y:crd.y,max_y:crd.y, check: 87});
});    




// file: NXblocks/Mosh/MoshT.js

//Thorn
IMPORT("TileRender");
const Rmsh = ["RdshroomO", "RdshroomT"];
const Bmsh = ["BrshroomO", "BrshroomT", "BrshroomTH"];
//top

IDRegistry.genItemID("ThornstalkT");
Item.createItem("ThornstalkT", "Withered grass top", {name: "ThornstalkTop", data: 0});

//midlle

IDRegistry.genItemID("ThornstalkM");
Item.createItem("ThornstalkM", "Withered grass midlle", {name: "ThornstalkMiddle", data: 0});

//boottom
IDRegistry.genItemID("ThornstalkB");
Item.createItem("ThornstalkB", "Withered grass bottom", {name: "ThornstalkBottom", data: 0});
//ThornB
//top
IDRegistry.genBlockID("ThornstalkTB");

Block.createBlock("ThornstalkTB", [{name: "Thorn Top",texture: [["ThornstalkTop",0]],inCreative:false}]);

Block.registerDropFunction("ThornstalkTB", function(){
return [[ItemID.ThornstalkT, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.ThornstalkTB, "plant");

TileRenderer.setPlantModel(BlockID.ThornstalkTB, 0, "ThornstalkTop", 0);

//top(unactive)

IDRegistry.genBlockID("ThornstalkTBu");
Block.createBlock("ThornstalkTBu", [{name: "Thorn Top",texture: [["ThornstalkTop",0]],inCreative:false}]);

Block.registerDropFunction("ThornstalkTBu", function(){
return [[ItemID.ThornstalkT, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.ThornstalkTBu, "plant");

TileRenderer.setPlantModel(BlockID.ThornstalkTBu, 0, "ThornstalkTop", 0);

//midlle

IDRegistry.genBlockID("ThornstalkMB");

Block.createBlock("ThornstalkMB", [{name: "Thorn midlle",texture: [["ThornstalkMiddle",0]],inCreative:false
}]);


Block.registerDropFunction("ThornstalkMB", function(){
return [[ItemID.ThornstalkT, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.ThornstalkMB, "plant");

TileRenderer.setPlantModel(BlockID.ThornstalkMB, 0, "ThornstalkMiddle", 0);

//bottom

IDRegistry.genBlockID("ThornstalkBB");

Block.createBlock("ThornstalkBB", [{name: "Thorn bottom",texture: [["ThornstalkBottom",0]],inCreative:false
}]);

Block.registerDropFunction("ThornstalkBB", function(){
return [[ItemID.ThornstalkT, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.ThornstalkBB, "plant");

TileRenderer.setPlantModel(BlockID.ThornstalkBB, 0, "ThornstalkBottom", 0);

//BI
IDRegistry.genItemID("bmoshroomSmall");
Item.createItem("bmoshroomSmall", "Elder Brown Moshroom", {name: "BrownElderMushroom", data: 0});

//RI
IDRegistry.genItemID("rmoshroomSmall");
Item.createItem("rmoshroomSmall", "Elder Red Moshroom", {name: "RadElderMushroom", data: 0});

//BB
IDRegistry.genBlockID("bmoShroomSmall");

Block.createBlock("bmoShroomSmall", [{name: "Elder Brown Moshroom",texture: [["BrownElderMushroom",0]],inCreative:false
}]);

Block.registerDropFunction("bmoShroomSmall", function(){
return [[ItemID.bmoshroomSmall, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.bmoShroomSmall, "plant");

TileRenderer.setPlantModel(BlockID.bmoShroomSmall, 0, "BrownElderMushroom", 0);

//RB
IDRegistry.genBlockID("redmoShroomSmall");

Block.createBlock("redmoShroomSmall", [{name: "Elder Red Moshroom",texture: [["RadElderMushroom",0]],inCreative:false
}]);

Block.registerDropFunction("redmoShroomSmall", function(){
return [[ItemID.rmoshroomSmall, 1, 0]];
});
ToolAPI.registerBlockMaterial(BlockID.redmoShroomSmall, "plant");

TileRenderer.setPlantModel(BlockID.redmoShroomSmall, 0, "RadElderMushroom", 0);


Callback.addCallback("ItemUse",function(crd,item){
var pl=crd.relative;
    if(item.id==ItemID.bmoshroomSmall&&World.getBlockID(pl.x,pl.y-1,pl.z)==87){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.bmoShroomSmall,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

Block.setRandomTickCallback(BlockID.bmoshroomSmall, function(x, y, z, id, data){       
var coords = coords.relative;
World.destroyBlock(coords.x,coords.y,coords.z,false);                      
Structure.setInWorld("BrshroomO", coords.x, coords.y, coords.z, [Structure.ROTATE_90Y,Structure.ROTATE_270Y,Structure.ROTATE_180Y], false, false);
});   
 
Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.bmoshroomSmall && Math.random() < .52){
var coords = coords.relative; 
for(var k = 0; k < randomInt(1, 3); k++){
Entity.spawnAddon(coords.x, coords.y, coords.z, "nether:mogus_brown"); 
Entity.spawnAddon(coords.x, coords.y+.8, coords.z, "nether:mogus_white");   
}
}
});


//Red

Callback.addCallback("ItemUse",function(crd,item){
var pl=crd.relative;
    if(item.id==ItemID.rmoshroomSmall&&World.getBlockID(pl.x,pl.y-1,pl.z)==87){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.redmoShroomSmall,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});


Block.setRandomTickCallback(BlockID.rmoshroomSmall, function(x, y, z, id, data){       
var coords = coords.relative;
World.destroyBlock(coords.x,coords.y,coords.z,false);                      
Structure.setInWorld("RdshroomO", coords.x, coords.y, coords.z, [Structure.ROTATE_90Y,Structure.ROTATE_270Y,Structure.ROTATE_180Y], false, false);
}); 

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.rmoshroomSmall && Math.random() < .42){
var coords = coords.relative;
for(var k = 0; k < randomInt(1, 3); k++){
Entity.spawnAddon(coords.x, coords.y+.8, coords.z, "nether:mogus_red");
}
}
});

//ThornTile
//1
Item.registerUseFunction("ThornstalkT", function(coords, item, block){
var place = coords.relative;
 if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
    World.setBlock(place.x,place.y,place.z,BlockID.ThornstalkTB,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});


//2
Item.registerUseFunction("ThornstalkM", function(coords, item, block){
var place = coords.relative;
 if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x,place.y,place.z,BlockID.ThornstalkMB,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
//3
Item.registerUseFunction("ThornstalkB", function(coords, item, block){
var place = coords.relative;
 if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x,place.y,place.z,BlockID.ThornstalkBB,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

//top(1)
Block.setRandomTickCallback(BlockID.ThornstalkTB, function(x, y, z, id, data){       
var coords = coords.relative;
if(World.getBlockID(coords.x, coords.y - 1, coords.z)==88){
World.destroyBlock(coords.x,coords.y,coords.z,false);         
//Structure.setInWorld("Thornstalk", coords.x, coords.y, coords.z, [Structure.ROTATE_90Y], false, false, 2);
  World.setBlock(coords.x,coords.y,coords.z,BlockID.ThornstalkBB,0);
   World.setBlock(coords.x,coords.y + 1,coords.z,BlockID.ThornstalkMB,0);
    World.setBlock(coords.x,coords.y,coords.z + 2,BlockID.ThornstalkTB,0);
     }
});        
        
Translation.addTranslation("Withered grass top", {ru: "Верх иссушающей травы"});
Translation.addTranslation("Withered grass midlle", {ru: "Середина иссушающей травы"});
Translation.addTranslation("Withered grass bottom", {ru: "Низ иссушающей травы"});

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y, ent.z);
if(block == BlockID.ThornstalkTB){
Entity.damageEntity(Player.get(), 1);    
Entity.addEffect(Player.get(), 20, 2, 205, false,false);   
}
});

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y, ent.z);
if(block == BlockID.ThornstalkTBu){
Entity.damageEntity(Player.get(), 1);    
Entity.addEffect(Player.get(), 20, 2, 205, false,false);   
}
});

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y, ent.z);
if(block == BlockID.ThornstalkMB){
Entity.damageEntity(Player.get(), 1);   
Entity.addEffect(Player.get(), 20, 2, 205, false,false); 
}
});

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y, ent.z);
if(block == BlockID.ThornstalkBB){
Entity.damageEntity(Player.get(), 1);   
Entity.addEffect(Player.get(), 20, 2, 205, false,false);   
}
});


Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
if(Math.random() < .32){
Str.generateEnoki(chunkX, chunkZ, "ShroomO", {min_y:185,max_y:238});
}
if(Math.random() < .50){
Str.generateEnoki(chunkX, chunkZ, "ShroomT", {min_y:185,max_y:238});
}
});




// file: NXitems/NXcraftItems.js

IDRegistry.genItemID("Amethyst");
Item.createItem("Amethyst", "Amethyst Crystal", {name: "AmethystCrystal", meta: 0});

IDRegistry.genItemID("SItem");
Item.createItem("SItem", "Spore", {name: "SporeItem", meta: 0});

IDRegistry.genItemID("RimeCryst");
Item.createItem("RimeCryst", "Rime Crystal", {name: "RimeCrystal", meta: 0});

IDRegistry.genItemID("BackCryst");
Item.createItem("BackCryst", "Back Crystal", {name: "BackAmethyst", meta: 0},{isTech:false,stack: 1});

IDRegistry.genItemID("BSFang");
Item.createItem("BSFang", "Bone-Spider Fang", {name: "BoneSpiderFang", meta: 0},{isTech:false,stack: 8});

IDRegistry.genItemID("Witherbone");
Item.createItem("Witherbone", "Wither bone", {name: "WitherBone", meta: 0});

IDRegistry.genItemID("WitherboneB");
Item.createItem("WitherboneB", "Wither bone blazed", {name: "blazed_wither_bone", meta: 0});

IDRegistry.genItemID("WitherboneF");
Item.createItem("WitherboneF", "Wither bone frosted", {name: "frosted_wither_bone", meta: 0});

Item.addCreativeGroup("Bones", "Bones", [ItemID.Witherbone, ItemID.WitherboneB, ItemID.WitherboneF]);

IDRegistry.genItemID("Witherdust");
Item.createItem("Witherdust", "Wither dust", {name: "WitherDust", meta: 0});

IDRegistry.genItemID("Netherbrickf");
Item.createItem("Netherbrickf", "Nether brick Fiery", {name: "FieryNetherBrick", meta: 0});

IDRegistry.genItemID("NetherbrickGl");
Item.createItem("NetherbrickGl", "Nether brick Gloomy", {name: "GloomyNetherBrick", meta: 0});

IDRegistry.genItemID("NetherbrickIcy");
Item.createItem("NetherbrickIcy", "Nether brick Icy", {name: "IcyNetherBrick", meta: 0});

IDRegistry.genItemID("NetherbrickLi");
Item.createItem("NetherbrickLi", "Nether brick Lively", {name: "LivelyNetherBrick", meta: 0});

Item.addCreativeGroup("Bricks", "Bricks", [ItemID.Netherbrickf, ItemID.NetherbrickGl, ItemID.NetherbrickIcy, ItemID.NetherbrickLi]);

IDRegistry.genItemID("Ghastqt");
Item.createItem("Ghastqt", "Ghast Quen tears", {name: "GhastQuenTears", meta:0},{isTech:false,stack: 4});

IDRegistry.genItemID("HideBl");
Item.createItem("HideBl", "Black Salamander Hide", {name: "HideSalamanderBlack", meta: 0});

IDRegistry.genItemID("HideSo");
Item.createItem("HideSo", "Orange Salamander Hide", {name: "HideSalamanderOrrange", meta: 0});
//silver

IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver", "Silver Ingot", {name: "ingot_silver"});




// file: NXblocks/StartAndBlocks.js

//libs
IMPORT("ToolLib");
//blocks vars

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var BLOCK_LOW_LIGHT = Block.createSpecialType({
    lightlevel: 9,
    opaque: true});

var BLOCK_LOWEST_LIGHT = Block.createSpecialType({
    lightlevel: 4,
    opaque: true});

var GLASS_TYPE = Block.createSpecialType({
    base: 20,
    destroytime: 3,
    opaque: false,
    lightopacity: 0});
//Ore(A&R)
//silverincludes
IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver Ore", texture: [["ore_silver", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilver, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilver, 3);
Block.setDestroyLevel("oreSilver", 3);
Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
//F
IDRegistry.genBlockID("oreSilverf");
Block.createBlock("oreSilverf", [
    {name: "Silver Ore fiery", texture: [["ore_silverf", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilverf, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilverf, 3);
Block.setDestroyLevel("oreSilverf", 3);
Recipes.addFurnace(BlockID.oreSilverf, ItemID.ingotSilver, 0);
//G
IDRegistry.genBlockID("oreSilverg");
Block.createBlock("oreSilverg", [
    {name: "Silver Ore gloomy", texture: [["ore_silverg", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilverg, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilverg, 3);
Block.setDestroyLevel("oreSilverg", 3);
Recipes.addFurnace(BlockID.oreSilverg, ItemID.ingotSilver, 0);
//I
IDRegistry.genBlockID("oreSilveri");
Block.createBlock("oreSilveri", [
    {name: "Silver Ore icy", texture: [["ore_silveri", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilveri, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilveri, 3);
Block.setDestroyLevel("oreSilveri", 3);
Recipes.addFurnace(BlockID.oreSilveri, ItemID.ingotSilver, 0);
//l
IDRegistry.genBlockID("oreSilverl");
Block.createBlock("oreSilverl", [
    {name: "Silver Ore lively", texture: [["ore_silverl", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilverl, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilverl, 3);
Block.setDestroyLevel("oreSilverl", 3);
Recipes.addFurnace(BlockID.oreSilverl, ItemID.ingotSilver, 0);
//n
IDRegistry.genBlockID("oreSilvern");
Block.createBlock("oreSilvern", [
    {name: "Silver Ore Nether", texture: [["ore_silvern", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilvern, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilvern, 3);
Block.setDestroyLevel("oreSilvern", 3);
Recipes.addFurnace(BlockID.oreSilvern, ItemID.ingotSilver, 0);
//e
IDRegistry.genBlockID("oreSilvere");
Block.createBlock("oreSilvere", [
    {name: "End Silver Ore", texture: [["ore_silvere", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.oreSilvere, "stone", 2, true);
Block.setDestroyTime(BlockID.oreSilvere, 3);
Block.setDestroyLevel("oreSilvere", 3);
Recipes.addFurnace(BlockID.oreSilvere, ItemID.ingotSilver, 0);

IDRegistry.genBlockID("FQuartzOre");
Block.createBlock("FQuartzOre", [
{name: "Fiery Quartz Ore", texture: [["FieryQuartzOre", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.FQuartzOre, "stone");
Block.setDestroyLevel("FQuartzOre", 3);

IDRegistry.genBlockID("GQuartzOre");
Block.createBlock("GQuartzOre", [
{name: "Gloomy Quartz Ore", texture: [["GloomyQuartzOre", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.GQuartzOre, "stone");
Block.setDestroyLevel("GQuartzOre", 3);

IDRegistry.genBlockID("IQuartzOre");
Block.createBlock("IQuartzOre", [
{name: "Icy Quartz Ore", texture: [["IcyQuartzOre", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.IQuartzOre, "stone");
Block.setDestroyLevel("IQuartzOre", 3);

IDRegistry.genBlockID("LQuartzOre");
Block.createBlock("LQuartzOre", [
{name: "Lively Quartz Ore", texture: [["LivelyQuartzOre", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.LQuartzOre, "stone");
Block.setDestroyLevel("LQuartzOre", 3);

IDRegistry.genBlockID("AmethystOre");
Block.createBlock("AmethystOre", [
{name: "Nether Amethyst ore", texture: [["AmethystOre", 0]], inCreative: true}], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.AmethystOre, "stone");
Block.setDestroyLevel("AmethystOre", 3);

IDRegistry.genBlockID("RimeOre");
Block.createBlock("RimeOre", [
{name: "Rime ore", texture: [["RimeOre", 0]], inCreative: true}
], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.RimeOre, "stone");
Block.setDestroyLevel("RimeOre", 3);

IDRegistry.genBlockID("NethRimeOre");
Block.createBlock("NethRimeOre", [
{name: "Nether Rime ore", texture: [["NethRimeOre", 0]], inCreative: true}], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.NethRimeOre, "stone");
Block.setDestroyLevel("NethRimeOre", 3);
//blockBasalt

IDRegistry.genBlockID("BasaltBlock");
Block.createBlock("BasaltBlock", [
{name: "Basalt Block", texture: [["Basalt", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltBlock, "stone", 2, true);
Block.setDestroyLevel("BasaltBlock", 3);
Block.setDestroyTime(BlockID.BasaltBlock, 5);

IDRegistry.genBlockID("BasaltBrick");
Block.createBlock("BasaltBrick", [
{name: "Basalt Brick", texture: [["BasaltBrick", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltBrick, "stone", 2, true);
Block.setDestroyLevel("BasaltBrick", 3);
Block.setDestroyTime(BlockID.BasaltBrick, 5);

IDRegistry.genBlockID("BasaltSmooth");
Block.createBlock("BasaltSmooth", [
{name: "Basalt Smooth", texture: [["BasaltSmooth", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltSmooth, "stone", 2, true);
Block.setDestroyLevel("BasaltSmooth", 3);
Block.setDestroyTime(BlockID.BasaltSmooth, 5);

IDRegistry.genBlockID("BasaltPillar");
Block.createBlockWithRotation("BasaltPillar", [
{name: "Basalt Pillar", texture: [["BasaltPillarTop", 0], ["BasaltPillarTop", 0], ["BasaltPillarSide", 0], ["BasaltPillarSide", 0], ["BasaltPillarSide", 0], ["BasaltPillarSide", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.BasaltPillar, "stone", 2, true);
Block.setDestroyLevel("BasaltPillar", 3);
Block.setDestroyTime(BlockID.BasaltPillar, 5);
//block(A&R)

IDRegistry.genBlockID("WormI");
Block.createBlock("WormI", [
{name: "Worm Iron", texture: [["WormIron", 0]], inCreative: true}
], BLOCK_LOWEST_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.WormI, "stone", 2, true);
Block.setDestroyLevel("WormI", 2);
Block.setDestroyTime(BlockID.WormI, 4);

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y - 2, ent.z);
if(block == BlockID.WormI){
Entity.setFire(Player.get(), 155);    
}
});

IDRegistry.genBlockID("AmethystBlock");
Block.createBlock("AmethystBlock", [
{name: "Amethyst Block", texture: [["AmethystBlock", 0]], inCreative: true}
], BLOCK_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.AmethystBlock, "stone", 2, true);
Block.setDestroyLevel("AmethystBlock", 3);
Block.setDestroyTime(BlockID.AmethystBlock, 4);

IDRegistry.genBlockID("soulGlass");
Block.createBlock("soulGlass", [
{name: "Soul Glass", texture: [["SoulGalss", 0]], inCreative: true}
], GLASS_TYPE);

IDRegistry.genBlockID("FBIce");
Block.createBlock("FBIce", [
{name: "Frost Burn Ice", texture: [["FBIce", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.FBIce, "stone", 2, true);

IDRegistry.genBlockID("RimeBlock");
Block.createBlock("RimeBlock", [
{name: "Rime Block", texture: [["RimeBlock", 0]], inCreative: true}], BLOCK_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.RimeBlock, "stone", 2, true);
Block.setDestroyLevel("RimeBlock", 3);

//NewN
IDRegistry.genBlockID("Netf");
Block.createBlock("Netf", [
{name: "Netherrack fiery Block", texture: [["NetherrackFiery", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Netf, "stone", 2, true);
Block.setDestroyLevel("Netf", 3);

IDRegistry.genBlockID("Netg");
Block.createBlock("Netg", [
{name: "Netherrack gloomy Block", texture: [["NetherrackGloomy", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Netg, "stone", 2, true);
Block.setDestroyLevel("Netg", 3);

IDRegistry.genBlockID("Neti");
Block.createBlock("Neti", [
{name: "Netherrack icy Block", texture: [["NetherrackIcy", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Neti, "stone", 2, true);
Block.setDestroyLevel("Neti", 3);

IDRegistry.genBlockID("Netl");
Block.createBlock("Netl", [
{name: "Netherrack lively Block", texture: [["NetherrackLively", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Netl, "stone", 2, true);
Block.setDestroyLevel("Netl", 3);

IDRegistry.genBlockID("SmNetherrack");
Block.createBlock("SmNetherrack", [
{name: "Smooth Netherrack Block", texture: [["SmoothNetherrack", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.SmNetherrack, "stone", 2, true);
Block.setDestroyLevel("SmNetherrack", 3);

IDRegistry.genBlockID("SSmNetherrack");
Block.createBlockWithRotation("SSmNetherrack", [
{name: "Slab Smooth Netherrack", texture: [["SmoothNetherrack", 0], ["SmoothNetherrack", 0], ["SlabSmoothNetherrackSide", 0], ["SlabSmoothNetherrackSide", 0], ["SlabSmoothNetherrackSide", 0], ["SlabSmoothNetherrackSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.SSmNetherrack, "stone", 2, true);
Block.setDestroyLevel("SSmNetherrack", 3);
        
IDRegistry.genBlockID("PiNetherrack");
Block.createBlockWithRotation("PiNetherrack", [
{name: "Pillar Netherrack", texture: [["PillarNetherrackTop", 0], ["PillarNetherrackTop", 0], ["PillarNetherrackSide", 0], ["PillarNetherrackSide", 0], ["PillarNetherrackSide", 0], ["PillarNetherrackSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.PiNetherrack, "stone", 2, true);
Block.setDestroyLevel("PiNetherrack", 3);    

IDRegistry.genBlockID("WitherBoneBlock");
Block.createBlockWithRotation("WitherBoneBlock", [
{name: "Wither Bone Block", texture: [["CharredBoneBlockTop", 0], ["CharredBoneBlockTop", 0], ["CharredBoneBlockSide", 0], ["CharredBoneBlockSide", 0], ["CharredBoneBlockSide", 0], ["CharredBoneBlockSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.WitherBoneBlock, "stone", 2, true);
Block.setDestroyLevel("WitherBoneBlock", 3);

IDRegistry.genBlockID("WBoneBlock");
Block.createBlockWithRotation("WBoneBlock", [
{name: "Bone Block", texture: [["BoneBlockTop", 0], ["BoneBlockTop", 0], ["BoneBlockSide", 0], ["BoneBlockSide", 0], ["BoneBlockSide", 0], ["BoneBlockSide", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.WBoneBlock, "stone", 2, true);
Block.setDestroyLevel("WBoneBlock", 2);
    
//NewNM

IDRegistry.genBlockID("Hyphae");
Block.createBlockWithRotation("Hyphae", [
{name: "Nether Hypahen", texture: [["NetherrackLively", 0], ["Hyphae_Top", 0], ["Hyphae_Side", 0], ["Hyphae_Side", 0], ["Hyphae_Side", 0], ["Hyphae_Side", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Hyphae, "dirt", 2, true);
Block.setDestroyLevel("Hyphae", 3);

//NewNB
IDRegistry.genBlockID("NBf");
Block.createBlock("NBf", [
{name: "Nether brick fiery Block", texture: [["NetherBrickFieryB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBf, "stone", 2, true);
Block.setDestroyLevel("NBf", 3);

IDRegistry.genBlockID("NBg");
Block.createBlock("NBg", [
{name: "Nether brick gloomy Block", texture: [["NetherBrickGloomyB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBg, "stone", 2, true);
Block.setDestroyLevel("NBg", 3);

IDRegistry.genBlockID("NBi");
Block.createBlock("NBi", [
{name: "Nether brick icy Block", texture: [["NetherBrickIcyB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBi, "stone", 2, true);
Block.setDestroyLevel("NBi", 3);

IDRegistry.genBlockID("NBl");
Block.createBlock("NBl", [
{name: "Nether brick lively Block", texture: [["NetherBrickLivelyB", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.NBl, "stone", 2, true);
Block.setDestroyLevel("NBl", 3);

//DROP
Block.registerDropFunction("FQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});
 
 Block.registerDropFunction("GQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("IQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("LQuartzOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[406, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("AmethystOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.Amethyst, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("RimeOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.RimeCryst, 1, 0]]
 }
 return [];
});


Block.registerDropFunction("NBf", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBf, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NBg", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBg, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NBi", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBi, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NBl", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.NBl, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Netf", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Netf, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Netg", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Netg, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Neti", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Neti, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("Netl", function(coords, blockID, blockData, level){
 if (level > 2){
  return [[BlockID.Netl, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltBlock", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[BlockID.BasaltBlock, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltBrick", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[BlockID.BasaltBrick, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltSmooth", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[BlockID.BasaltSmooth, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("BasaltPillar", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.BasaltPillar, 1, 0]]
 }
 return [];
});

Block.registerDropFunction("NethRimeOre", function(coords, blockID, blockData, level){
 if (level > 3){
  return [[ItemID.RimeCryst, 1, 0]]
 }
 return [];
});




// file: NXitems/NXarmor.js

IDRegistry.genItemID("DBoneHelm");
Item.createArmorItem("DBoneHelm", "Wither bone helmet", {name: "HelmetBoneWithered"}, {type: "helmet", armor: 2, durability: 88, texture: "armor/WitheredA_1.png", isTech:false});

IDRegistry.genItemID("DBoneCh");
Item.createArmorItem("DBoneCh", "Wither bone chestplate", {name: "ChestplateBoneWithered"}, {type: "chestplate", armor: 4, durability: 128, texture: "armor/WitheredA_1.png", isTech:false});

IDRegistry.genItemID("DBoneLeg");
Item.createArmorItem("DBoneLeg", "Wither bone leggins", {name: "LeggingsBoneWithered"}, {type: "leggings", armor: 3, durability:120, texture: "armor/WitheredA_2.png", isTech:false});

IDRegistry.genItemID("DBoneBoot");
Item.createArmorItem("DBoneBoot", "Wither bone boots", {name: "BoneWitheredBoots"}, {type: "boots", armor: 2, durability: 104, texture: "armor/WitheredA_1.png", isTech:false});

Recipes.addShaped({id: ItemID.DBoneHelm, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.DBoneCh, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.DBoneLeg, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.DBoneBoot, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.Witherbone, 0]);

Item.addRepairItemIds(ItemID.DBoneHelm, [ItemID.Witherbone, ItemID.DBoneHelm]);
Item.addRepairItemIds(ItemID.DBoneCh, [ItemID.Witherbone, ItemID.DBoneCh]);
Item.addRepairItemIds(ItemID.DBoneLeg, [ItemID.Witherbone, ItemID.DBoneLeg]);
Item.addRepairItemIds(ItemID.DBoneBoot, [ItemID.Witherbone, ItemID.DBoneBoot]);

IDRegistry.genItemID("SalBHelm");
Item.createArmorItem("SalBHelm", "Black Salamander helmet", {name: "HideSalamanderHelmetBlack"}, {type: "helmet", armor: 2, durability: 88, texture: "armor/HideSalamanderBA_1.png", isTech:false});

IDRegistry.genItemID("SalBCh");
Item.createArmorItem("SalBCh", "Black Salamander chestplate", {name: "HideSalamanderChestplateBlack"}, {type: "chestplate", armor: 4, durability: 128, texture: "armor/HideSalamanderBA_1.png", isTech:false});

IDRegistry.genItemID("SalBLeg");
Item.createArmorItem("SalBLeg", "Black Salamander leggins", {name: "HideSalamanderLegginsBlack"}, {type: "leggings", armor: 3, durability: 120, texture: "armor/HideSalamanderBA_2.png", isTech:false});

IDRegistry.genItemID("SalBBoot");
Item.createArmorItem("SalBBoot", "Black Salamander boots", {name: "HideSalamanderBootsBlack"}, {type: "boots", armor: 2, durability: 104, texture: "armor/HideSalamanderBA_1.png", isTech:false});

Recipes.addShaped({id: ItemID.SalBHelm, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.HideBl, 0]);

Recipes.addShaped({id: ItemID.SalBCh, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.HideBl, 0]);

Recipes.addShaped({id: ItemID.SalBLeg, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.HideBl, 0]);

Recipes.addShaped({id: ItemID.SalBBoot, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.HideBl, 0]);

Item.addRepairItemIds(ItemID.SalBHelm, [ItemID.HideBl, ItemID.SalBHelm]);
Item.addRepairItemIds(ItemID.SalBCh, [ItemID.HideBl, ItemID.SalBCh]);
Item.addRepairItemIds(ItemID.SalBLeg, [ItemID.HideBl, ItemID.SalBLeg]);
Item.addRepairItemIds(ItemID.SalBBoot, [ItemID.HideBl, ItemID.SalBBoot]);

IDRegistry.genItemID("SalOrHelm");
Item.createArmorItem("SalOrHelm", "Orange Salamander helmet", {name: "HideSalamanderHelmetOrange"}, {type: "helmet", armor: 2, durability: 88, texture: "armor/HideSalamanderOA_1.png", isTech:false});

IDRegistry.genItemID("SalOrCh");
Item.createArmorItem("SalOrCh", "Orange Salamander chestplate", {name: "HideSalamanderChestplateOrange"}, {type: "chestplate", armor: 4, durability: 128, texture: "armor/HideSalamanderOA_1.png", isTech:false});

IDRegistry.genItemID("SalOrLeg");
Item.createArmorItem("SalOrLeg", "Orange Salamander leggins", {name: "HideSalamanderLegginsOrange"}, {type: "leggings", armor: 3, durability: 120, texture: "armor/HideSalamanderOA_2.png", isTech:false});

IDRegistry.genItemID("SalOrBoot");
Item.createArmorItem("SalOrBoot", "Orange Salamander boots", {name: "HideSalamanderBootsOrrange"}, {type: "boots", armor: 2, durability: 104, texture: "armor/HideSalamanderOA_1.png", isTech:false});

Recipes.addShaped({id: ItemID.SalOrHelm, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.HideSo, 0]);

Recipes.addShaped({id: ItemID.SalOrCh, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.HideSo, 0]);

Recipes.addShaped({id: ItemID.SalOrLeg, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.HideSo, 0]);

Recipes.addShaped({id: ItemID.SalOrBoot, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.HideSo, 0]);

Item.addRepairItemIds(ItemID.SalOrHelm, [ItemID.HideSo, ItemID.SalOrHelm]);
Item.addRepairItemIds(ItemID.SalOrCh, [ItemID.HideSo, ItemID.SalOrCh]);
Item.addRepairItemIds(ItemID.SalOrLeg, [ItemID.HideSo, ItemID.SalOrLeg]);
Item.addRepairItemIds(ItemID.SalOrBoot, [ItemID.HideSo, ItemID.SalOrBoot]);

IDRegistry.genItemID("WHITEHelm");
Item.createArmorItem("WHITEHelm", "White bone helmet", {name: "HelmetWhite"}, {type: "helmet", armor: 2, durability: 88, texture: "armor/WhiteBone_1.png", isTech:false});

IDRegistry.genItemID("WHITECh");
Item.createArmorItem("WHITECh", "White bone chestplate", {name: "ChestplateWhite"}, {type: "chestplate", armor: 4, durability: 128, texture: "armor/WhiteBone_1.png", isTech:false});

IDRegistry.genItemID("WHITELeg");
Item.createArmorItem("WHITELeg", "White bone leggins", {name: "LeggignsWhite"}, {type: "leggings", armor: 3, durability: 120, texture: "armor/WhiteBone_2.png", isTech:false});

IDRegistry.genItemID("WHITEBoot");
Item.createArmorItem("WHITEBoot", "White bone boots", {name: "WhiteBoots"}, {type: "boots", armor: 2, durability: 104, texture: "armor/WhiteBone_1.png", isTech:false});

Recipes.addShaped({id: ItemID.WHITEHelm, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', 352, 0]);
 

Recipes.addShaped({id: ItemID.WHITECh, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.WHITELeg, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.WHITEBoot, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', 352, 0]);

Item.addRepairItemIds(ItemID.WHITEHelm, [352, ItemID.WHITEHelm]);
Item.addRepairItemIds(ItemID.WHITECh, [352, ItemID.WHITECh]);
Item.addRepairItemIds(ItemID.WHITELeg, [352, ItemID.WHITELeg]);
Item.addRepairItemIds(ItemID.WHITEBoot, [352, ItemID.WHITEBoot]);

IDRegistry.genItemID("silverHelmet");
IDRegistry.genItemID("silverChestplate");
IDRegistry.genItemID("silverLeggings");
IDRegistry.genItemID("silverBoots");

Item.createArmorItem("silverHelmet", "Silver Helmet", {name: "silver_helmet"}, {type: "helmet", armor: 4, durability: 273, texture: "armor/silver_1.png"});
Item.createArmorItem("silverChestplate", "Silver Chestplate", {name: "silver_chestplate"}, {type: "chestplate", armor: 7, durability: 315, texture: "armor/silver_1.png"});
Item.createArmorItem("silverLeggings", "Silver Leggings", {name: "silver_leggings"}, {type: "leggings", armor: 6, durability: 203, texture: "armor/silver_2.png"});
Item.createArmorItem("silverBoots", "Silver Boots", {name: "silver_boots"}, {type: "boots", armor: 2, durability: 190, texture: "armor/silver_1.png"});

Recipes.addShaped({id: ItemID.silverHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.ingotSilver, 0]);

Recipes.addShaped({id: ItemID.silverChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ingotSilver, 0]);

Recipes.addShaped({id: ItemID.silverLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ingotSilver, 0]);

Recipes.addShaped({id: ItemID.silverBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.ingotSilver, 0]);

Item.addRepairItemIds(ItemID.silverHelmet, [ItemID.ingotSilver, ItemID.silverHelmet]);
Item.addRepairItemIds(ItemID.silverChestplate, [ItemID.ingotSilver, ItemID.silverChestplate]);
Item.addRepairItemIds(ItemID.silverLeggings, [ItemID.ingotSilver, ItemID.silverLeggings]);
Item.addRepairItemIds(ItemID.silverBoots, [ItemID.ingotSilver, ItemID.silverBoots]);




// file: NXitems/NXfood.js

IDRegistry.genItemID("Emcream");
Item.createFoodItem("Emcream", "Congealed Magma", {name: "EtableMagmaCream", meta: 0},{isTech:false,stack: 64,food: 1});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.Emcream){
Entity.addEffect(Player.get(), 12, 0, 1200, false,false);
}});

IDRegistry.genItemID("EnMushroom");
Item.createFoodItem("EnMushroom", "Enoki Mushroom", {name: "MushroomEnoki", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.EnMushroom){
Entity.clearEffects(Player.get());
}});

IDRegistry.genItemID("GhastM");
Item.createFoodItem("GhastM", "Ghast Meat raw", {name: "GhastMeatRaw", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.GhastM){
Entity.addEffect(Player.get(), 19, 0, 1200, false,false);
}});

IDRegistry.genItemID("GhastMc");
Item.createFoodItem("GhastMc", "Ghast Meat cooked", {name: "GhastMeatCooked", meta: 0},{isTech:false,stack: 64,food: 9});

Recipes.addFurnace(378, 0, ItemID.Emcream, 0);
Recipes.addFurnace(ItemID.GhastM, ItemID.GhastMc, 0);


IDRegistry.genItemID("appleSilver");
Item.createFoodItem("appleSilver", "Apple Silver", {name: "apple_silver", meta: 0},{isTech:false,stack: 64,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.appleSilver){
Entity.addEffect(Player.get(), 11, 3, 600, false,false);
Entity.addEffect(Player.get(), 22, 2, 600, false,false);
}});

IDRegistry.genItemID("carrotSilver");
Item.createFoodItem("carrotSilver", "Carrot Silver", {name: "carrot_silver", meta: 0},{isTech:false,stack: 64,food: 6});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.appleSilver){
Entity.addEffect(Player.get(), 11, 3, 250, false,false);
}});


Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 41){
var coords = Entity.getPosition(entity);
World.drop(coords.x, coords.y, coords.z, ItemID.GhastM, randomInt(0, 4), 0);
}
});




// file: NXitems/NXtools.js

ToolAPI.addToolMaterial("DBonesw", {durability: 632, level: 3, efficiency: 4, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("DBonesh", {durability: 612, level: 2, efficiency: 4, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("DBonep", {durability: 645, level: 3, efficiency: 3, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("DBoneaxe", {durability: 632, level: 2, efficiency: 3, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("DBonehoe", {durability: 618, level: 2, efficiency: 4, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("Bonesw", {durability: 378, level: 3, efficiency: 4, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("Bonesh", {durability: 341, level: 2, efficiency: 3, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("Bonep", {durability: 383, level: 3, efficiency: 3, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("Boneaxe", {durability: 380, level: 2, efficiency: 3, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("Bonehoe", {durability: 346, level: 2, efficiency: 3, damage: 3, enchantability: 14});

ToolAPI.addToolMaterial("Destroyer", {durability: 520, level: 2, efficiency: 3, damage: 9, enchantability: 14});
ToolAPI.addToolMaterial("ChDestroyer", {durability: 610, level: 2, efficiency: 3, damage: 12, enchantability: 14});
//items(tools)
IDRegistry.genItemID("GBSword");
Item.createItem("GBSword", "Golden Bone Sword", {name: "BoneWitheredSword", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBSword, count: 1, data: 0}, [
 "oco",
 "oco",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBSword, "DBonesw", ToolType.sword);

IDRegistry.genItemID("GBShovel");
Item.createItem("GBShovel", "Golden Bone Shovel", {name: "BoneWitheredShovel", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBShovel, count: 1, data: 0}, [
 "oco",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBShovel, "DBonesh", ToolType.shovel);

IDRegistry.genItemID("GBPickaxe");
Item.createItem("GBPickaxe", "Golden Bone Pickaxe", {name: "BoneWitheredPickaxe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBPickaxe, count: 1, data: 0}, [
 "ccc",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBPickaxe, "DBonep", ToolType.pickaxe);

IDRegistry.genItemID("GBAxe");
Item.createItem("GBAxe", "Golden Bone Axe", {name: "BoneWitheredAxe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBAxe, count: 1, data: 0}, [
 "occ",
 "odc",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBAxe, "DBoneaxe", ToolType.axe);

IDRegistry.genItemID("GBHoe");
Item.createItem("GBHoe", "Golden Bone Hoe", {name: "BoneWitheredHoe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBHoe, count: 1, data: 0}, [
 "occ",
 "odo",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);


ToolLib.setTool(ItemID.GBHoe, "DBonehoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.GBSword, [ItemID.Witherbone, ItemID.GBSword]);
Item.addRepairItemIds(ItemID.GBShovel, [ItemID.Witherbone, ItemID.GBShovel]);
Item.addRepairItemIds(ItemID.GBPickaxe, [ItemID.Witherbone, ItemID.GBPickaxe]);
Item.addRepairItemIds(ItemID.GBAxe, [ItemID.Witherbone, ItemID.GBAxe]);
Item.addRepairItemIds(ItemID.GBHoe, [ItemID.Witherbone, ItemID.GBHoe]);


IDRegistry.genItemID("BSword");
Item.createItem("BSword", "Bone Sword", {name: "BoneSword", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BSword, count: 1, data: 0}, [
 "oco",
 "oco",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BSword, "Bonesw", ToolType.sword);

IDRegistry.genItemID("BShovel");
Item.createItem("BShovel", "Bone Shovel", {name: "BoneShovel", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BShovel, count: 1, data: 0}, [
 "oco",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BShovel, "Bonesh", ToolType.shovel);

IDRegistry.genItemID("BPickaxe");
Item.createItem("BPickaxe", "Bone Pickaxe", {name: "BonePickaxe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BPickaxe, count: 1, data: 0}, [
 "ccc",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BPickaxe, "Bonep", ToolType.pickaxe);

IDRegistry.genItemID("BAxe");
Item.createItem("BAxe", "Bone Axe", {name: "BoneAxe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BAxe, count: 1, data: 0}, [
 "occ",
 "odc",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BAxe, "Boneaxe", ToolType.axe);

IDRegistry.genItemID("BHoe");
Item.createItem("BHoe", "Bone Hoe", {name: "BoneHoe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.BHoe, count: 1, data: 0}, [
 "occ",
 "odo",
 "odo"
], ["c", 266, 0, "d", 352, 0]);

ToolLib.setTool(ItemID.BHoe, "Bonehoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.BSword, [352, ItemID.BSword]);
Item.addRepairItemIds(ItemID.BShovel, [352, ItemID.BShovel]);
Item.addRepairItemIds(ItemID.BPickaxe, [352, ItemID.BPickaxe]);
Item.addRepairItemIds(ItemID.BAxe, [352, ItemID.BAxe]);
Item.addRepairItemIds(ItemID.BHoe, [352, ItemID.BHoe]);

IDRegistry.genItemID("RCSteel");
Item.createItem("RCSteel", "Rime Crystal Steel", {name: "RimeCrystalSteel", meta: 0}, {stack: 4});

Recipes.addShaped({id: ItemID.RCSteel, count: 1, data: 0}, [
 "ooo",
 "odc",
 "ooo"
], ["c", ItemID.RimeCryst, 0, "d", 259, 0]);

Item.registerUseFunction("RCSteel", function(coords, item, block){
var place = coords.relative;
if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
  //PlaySoundFile("ignite.ogg")
  World.setBlock(place.x, place.y, place.z, BlockID.BlueFire);
  Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

IDRegistry.genItemID("GBhammer");
Item.createItem("GBhammer", "Sleeping destroyer of the worlds", {name: "BoneWitheredHammer", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBhammer, count: 1, data: 0}, [
 "ccc",
 "cdc",
 "odo"
], ["c", 266, 0, "d", ItemID.Witherbone, 0]);

ToolLib.setTool(ItemID.GBhammer, "Destroyer", ToolType.sword);

Item.addRepairItemIds(ItemID.GBhammer, [ItemID.Witherbone, ItemID.GBhammer]);


IDRegistry.genItemID("GBChammer");
Item.createItem("GBChammer", "Destroyer of the worlds", {name: "BoneHammerCh", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.GBChammer, count: 1, data: 0}, [
 "ooo",
 "cdo",
 "ooo"
], ["c", ItemID.GBhammer , 0, "d", ItemID.RCSteel, 0]);

ToolLib.setTool(ItemID.GBChammer, "ChDestroyer", ToolType.sword);

Item.addRepairItemIds(ItemID.GBChammer, [ItemID.GBChammer]);

IDRegistry.genItemID("silverSword");
IDRegistry.genItemID("silverShovel");
IDRegistry.genItemID("silverPickaxe");
IDRegistry.genItemID("silverAxe");
IDRegistry.genItemID("silverHoe");
Item.createItem("silverSword", "Silver Sword", {name: "silver_sword", meta: 0}, {stack: 1});
Item.createItem("silverShovel", "Silver Shovel", {name: "silver_shovel", meta: 0}, {stack: 1});
Item.createItem("silverPickaxe", "Silver Pickaxe", {name: "silver_pickaxe", meta: 0}, {stack: 1});
Item.createItem("silverAxe", "Silver Axe", {name: "silver_axe", meta: 0}, {stack: 1});
Item.createItem("silverHoe", "Silver Hoe", {name: "silver_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("silver", {durability: 734, level: 3, efficiency: 7, damage: 5, enchantability: 8});
ToolLib.setTool(ItemID.silverSword, "silver", ToolType.sword);
ToolLib.setTool(ItemID.silverShovel, "silver", ToolType.shovel);
ToolLib.setTool(ItemID.silverPickaxe, "silver", ToolType.pickaxe);
ToolLib.setTool(ItemID.silverAxe, "silver", ToolType.axe);
ToolLib.setTool(ItemID.silverHoe, "silver", ToolType.hoe);

Item.addRepairItemIds(ItemID.silverSword, [ItemID.ingotSilver, ItemID.silverSword]);
Item.addRepairItemIds(ItemID.silverShovel, [ItemID.ingotSilver, ItemID.silverShovel]);
Item.addRepairItemIds(ItemID.silverPickaxe, [ItemID.ingotSilver, ItemID.silverPickaxe]);
Item.addRepairItemIds(ItemID.silverAxe, [ItemID.ingotSilver, ItemID.silverAxe]);
Item.addRepairItemIds(ItemID.silverHoe, [ItemID.ingotSilver, ItemID.silverHoe]);

Recipes.addShaped({id: ItemID.silverSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.silverHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.ingotSilver, 0, 'b', 280, 0]);


IDRegistry.genItemID("ABSword");
IDRegistry.genItemID("ABShovel");
IDRegistry.genItemID("ABPickaxe");
IDRegistry.genItemID("ABAxe");
IDRegistry.genItemID("ABHoe");
Item.createItem("ABSword", "Amethysted Darkbone Sword", {name: "withered_amedian_sword", meta: 0}, {stack: 1});
Item.createItem("ABShovel", "Amethysted Darkbone Shovel", {name: "withered_amedian_shovel", meta: 0}, {stack: 1});
Item.createItem("ABPickaxe", "Amethysted Darkbone Pickaxe", {name: "withered_amedian_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ABAxe", "Amethysted Darkbone Axe", {name: "withered_amedian_axe", meta: 0}, {stack: 1});
Item.createItem("ABHoe", "Amethysted Darkbone Hoe", {name: "withered_amedian_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ABDsw", {durability: 936, level: 4, efficiency: 4, damage: 10, enchantability: 9});
ToolAPI.addToolMaterial("ABDsh", {durability: 910, level: 4, efficiency: 6, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("ABDp", {durability: 967, level: 4, efficiency: 6, damage: 3, enchantability: 9});
ToolAPI.addToolMaterial("ABDaxe", {durability: 960, level: 4, efficiency: 6, damage: 5, enchantability: 9});
ToolAPI.addToolMaterial("ABDhoe", {durability: 892, level: 4, efficiency: 4, damage: 3, enchantability: 9});
ToolLib.setTool(ItemID.ABSword, "ABDsw", ToolType.sword);
ToolLib.setTool(ItemID.ABShovel, "ABDsh", ToolType.shovel);
ToolLib.setTool(ItemID.ABPickaxe, "ABDp", ToolType.pickaxe);
ToolLib.setTool(ItemID.ABAxe, "ABDaxe", ToolType.axe);
ToolLib.setTool(ItemID.ABHoe, "ABDhoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.ABSword, [ItemID.Amethyst, ItemID.ABSword]);
Item.addRepairItemIds(ItemID.ABShovel, [ItemID.Amethyst, ItemID.ABShovel]);
Item.addRepairItemIds(ItemID.ABPickaxe, [ItemID.Amethyst, ItemID.ABPickaxe]);
Item.addRepairItemIds(ItemID.ABAxe, [ItemID.Amethyst, ItemID.ABAxe]);
Item.addRepairItemIds(ItemID.ABHoe, [ItemID.Amethyst, ItemID.ABHoe]);

Recipes.addShaped({id: ItemID.ABSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.ABShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.ABPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.ABAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.ABHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.Witherbone, 0]);

IDRegistry.genItemID("ABBSword");
IDRegistry.genItemID("ABBShovel");
IDRegistry.genItemID("ABBPickaxe");
IDRegistry.genItemID("ABBAxe");
IDRegistry.genItemID("ABBHoe");
Item.createItem("ABBSword", "Blazed Darkbone Sword", {name: "blazed_amedian_sword", meta: 0}, {stack: 1});
Item.createItem("ABBShovel", "Blazed Darkbone Shovel", {name: "blazed_amedian_shovel", meta: 0}, {stack: 1});
Item.createItem("ABBPickaxe", "Blazed Darkbone Pickaxe", {name: "blazed_amedian_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ABBAxe", "Blazed Darkbone Axe", {name: "blazed_amedian_axe", meta: 0}, {stack: 1});
Item.createItem("ABBHoe", "Blazed Darkbone Hoe", {name: "blazed_amedian_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ABBsw", {durability: 1128, level: 5, efficiency: 5, damage: 12, enchantability: 9});
ToolAPI.addToolMaterial("ABBsh", {durability: 1100, level: 5, efficiency: 7, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("ABBp", {durability: 1148, level: 5, efficiency: 7, damage: 4, enchantability: 9});
ToolAPI.addToolMaterial("ABBaxe", {durability: 1140, level: 5, efficiency: 7, damage: 6, enchantability: 9});
ToolAPI.addToolMaterial("ABBhoe", {durability: 1123, level: 5, efficiency: 5, damage: 3, enchantability: 9});
ToolLib.setTool(ItemID.ABBSword, "ABBsw", ToolType.sword);
ToolLib.setTool(ItemID.ABBShovel, "ABBsh", ToolType.shovel);
ToolLib.setTool(ItemID.ABBPickaxe, "ABBp", ToolType.pickaxe);
ToolLib.setTool(ItemID.ABBAxe, "ABBaxe", ToolType.axe);
ToolLib.setTool(ItemID.ABBHoe, "ABBhoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.ABBSword, [ItemID.Amethyst, ItemID.ABBSword]);
Item.addRepairItemIds(ItemID.ABBShovel, [ItemID.Amethyst, ItemID.ABBShovel]);
Item.addRepairItemIds(ItemID.ABBPickaxe, [ItemID.Amethyst, ItemID.ABBPickaxe]);
Item.addRepairItemIds(ItemID.ABBAxe, [ItemID.Amethyst, ItemID.ABBAxe]);
Item.addRepairItemIds(ItemID.ABBHoe, [ItemID.Amethyst, ItemID.ABBHoe]);

Recipes.addShaped({id: ItemID.ABBSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);

Recipes.addShaped({id: ItemID.ABBShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);

Recipes.addShaped({id: ItemID.ABBPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);

Recipes.addShaped({id: ItemID.ABBAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);

Recipes.addShaped({id: ItemID.ABBHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneB, 0]);


IDRegistry.genItemID("ABFSword");
IDRegistry.genItemID("ABFShovel");
IDRegistry.genItemID("ABFPickaxe");
IDRegistry.genItemID("ABFAxe");
IDRegistry.genItemID("ABFHoe");
Item.createItem("ABFSword", "Frosted Darkbone Sword", {name: "frosted_amedian_sword", meta: 0}, {stack: 1});
Item.createItem("ABFShovel", "Frosted Darkbone Shovel", {name: "frosted_amedian_shovel", meta: 0}, {stack: 1});
Item.createItem("ABFPickaxe", "Frosted Darkbone Pickaxe", {name: "frosted_amedian_pickaxe", meta: 0}, {stack: 1});
Item.createItem("ABFAxe", "Frosted Darkbone Axe", {name: "frosted_amedian_axe", meta: 0}, {stack: 1});
Item.createItem("ABFHoe", "Frosted Darkbone Hoe", {name: "frosted_amedian_hoe", meta: 0}, {stack: 1});

ToolLib.setTool(ItemID.ABFSword, "ABBsw", ToolType.sword);
ToolLib.setTool(ItemID.ABFShovel, "ABBsh", ToolType.shovel);
ToolLib.setTool(ItemID.ABFPickaxe, "ABBp", ToolType.pickaxe);
ToolLib.setTool(ItemID.ABFAxe, "ABBaxe", ToolType.axe);
ToolLib.setTool(ItemID.ABFHoe, "ABBhoe", ToolType.hoe);

Item.addRepairItemIds(ItemID.ABFSword, [ItemID.Amethyst, ItemID.ABFSword]);
Item.addRepairItemIds(ItemID.ABFShovel, [ItemID.Amethyst, ItemID.ABFShovel]);
Item.addRepairItemIds(ItemID.ABFPickaxe, [ItemID.Amethyst, ItemID.ABFPickaxe]);
Item.addRepairItemIds(ItemID.ABFAxe, [ItemID.Amethyst, ItemID.ABFAxe]);
Item.addRepairItemIds(ItemID.ABFHoe, [ItemID.Amethyst, ItemID.ABFHoe]);

Recipes.addShaped({id: ItemID.ABFSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);

Recipes.addShaped({id: ItemID.ABFShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);

Recipes.addShaped({id: ItemID.ABFPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);

Recipes.addShaped({id: ItemID.ABFAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);

Recipes.addShaped({id: ItemID.ABFHoe, count: 1, data: 0}, [
    "aa",
    " b",
    " b"
], ['a', ItemID.Amethyst, 0, 'b', ItemID.WitherboneF, 0]);




// file: NXitems/group.js

//TOOLS
Item.addCreativeGroup("swordNether", Translation.translate("Nether Sword"), [
    ItemID.BSword,
    ItemID.GBSword,
    ItemID.silverSword,
    ItemID.ABSword,
    ItemID.ABBSword,
    ItemID.ABFSword 
]);

Item.addCreativeGroup("shovelNether", Translation.translate("Nether Shovel"), [
    ItemID.BShovel,
    ItemID.GBShovel,
    ItemID.silverShovel,
    ItemID.ABShovel,
    ItemID.ABBShovel,
    ItemID.ABFShovel
]);

Item.addCreativeGroup("pickaxeNether", Translation.translate("Nether Pickaxe"), [
    ItemID.BPickaxe,
    ItemID.GBPickaxe,
    ItemID.silverPickaxe,
    ItemID.ABPickaxe,
    ItemID.ABBPickaxe,
    ItemID.ABFPickaxe
]);

Item.addCreativeGroup("axeNether", Translation.translate("Nether Axe"), [
    ItemID.BAxe,
    ItemID.GBAxe,
    ItemID.silverAxe,
    ItemID.ABAxe,
    ItemID.ABBAxe,
    ItemID.ABFAxe
]);

Item.addCreativeGroup("hoeNether", Translation.translate("Nether Hoe"), [
    ItemID.BHoe,
    ItemID.GBHoe,
    ItemID.silverHoe,
    ItemID.ABHoe,
    ItemID.ABBHoe,
    ItemID.ABFHoe
]);

Item.addCreativeGroup("hammersNether", Translation.translate("Nether Hammers"), [
    ItemID.GBhammer,
    ItemID.GBChammer,
    ItemID.arkeniumShovel,
    ItemID.zaniteShovel,
    ItemID.gravititeShovel,
    ItemID.valkiriaShovel
]);


//ARMOR
Item.addCreativeGroup("helmetNether", Translation.translate("Nether Helmets"), [
    ItemID.WHITEHelm,
    ItemID.DBoneHelm,
    ItemID.silverHelmet,
    ItemID.SalOrHelm,
    ItemID.SalBHelm
]);


Item.addCreativeGroup("chestplateNether", Translation.translate("Nether Chestplates"), [
    ItemID.WHITECh,
    ItemID.DBoneCh,
    ItemID.silverChestplate,
    ItemID.SalOrCh,
    ItemID.SalBCh
]);

Item.addCreativeGroup("leggingsNether", Translation.translate("Nether Leggings"), [
    ItemID.WHITELeg,
    ItemID.DBoneLeg,
    ItemID.silverLeggings,
    ItemID.SalOrLeg,
    ItemID.SalBLeg
]);

Item.addCreativeGroup("bootsNether", Translation.translate("Nether Boots"), [
    ItemID.WHITEBoot,
    ItemID.DBoneBoot,
    ItemID.silverBoots,
    ItemID.SalOrBoot,
    ItemID.SalBBoot
]);




// file: Irecipes.js

Recipes.addShaped({id: ItemID.BackCryst, count: 1, data: 0}, [
 "oco",
 "cdc",
 "oco"
 ], ["d", ItemID.RimeCryst, 0, "c", ItemID.Amethyst, 0]);
 
Recipes.addShaped({id: ItemID.WitherboneB, count: 1, data: 0}, [
 "oco",
 "cdc",
 "oco"
 ], ["c", 369, 0, "d", ItemID.Witherbone, 0]);

Recipes.addShaped({id: ItemID.WitherboneF, count: 1, data: 0}, [
 "oco",
 "cdc",
 "oco"
 ], ["c", ItemID.RimeCryst, 0, "d", ItemID.Witherbone, 0]);

Recipes.addFurnaceFuel(ItemID.SItem, 200);
Recipes.addFurnaceFuel(ItemID.Netherbrickf, 1200);

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.WitherBoneBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Witherdust, 0]);

Recipes.addShaped({id: BlockID.WBoneBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', 352, 0]);

Recipes.addShaped({id: BlockID.PiNetherrack, count: 4, data: 0}, [
    "ooo",
    "oxx",
    "odd"
], ['x', BlockID.SSmNetherrack, 0, 'd', BlockID.SmNetherrack, 0]);

Recipes.addShaped({id: BlockID.SmNetherrack, count: 2, data: 0}, [
    "ooo",
    "ooo",
    "oxx"
], ['x', 87, 0]);

Recipes.addShaped({id: BlockID.SSmNetherrack, count: 2, data: 0}, [
    "ooo",
    "ooo",
    "oxx"
], ['x', BlockID.SmNetherrack, 0]);

Recipes.addShaped({id: BlockID.AmethystBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Amethyst, 0]);

Recipes.addShaped({id: BlockID.RimeBlock, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.RimeCryst, 0]);

Recipes.addShaped({id: BlockID.NBf, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Netherbrickf, 0]);

Recipes.addShaped({id: BlockID.NBg, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.NetherbrickGl, 0]);

Recipes.addShaped({id: BlockID.NBi, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.NetherbrickIcy, 0]);

Recipes.addShaped({id: BlockID.NBl, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.NetherbrickLi, 0]);

//FUR
Recipes.addFurnace(88, BlockID.soulGlass, 0);
//FUREND
Recipes.addShaped({id: BlockID.BasaltBrick, count: 1, data: 0}, [
    "ooo",
    "oxx",
    "oxx"
], ['x', BlockID.BasaltBlock, 0]);

Recipes.addShaped({id: BlockID.BasaltSmooth, count: 2, data: 0}, [
    "ooo",
    "oxx",
    "oxx"
], ['x', BlockID.BasaltBrick, 0]);

Recipes.addShaped({id: BlockID.BasaltPillar, count: 4, data: 0}, [
    "ooo",
    "odo",
    "oxo"
], ['x', BlockID.BasaltBrick, 0,'d', BlockID.BasaltSmooth, 0]);
 
Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
Recipes.addFurnace(BlockID.oreSilvern, ItemID.ingotSilver, 0);
Recipes.addFurnace(BlockID.oreSilvere, ItemID.ingotSilver, 0);
});




// file: Translation.js

//BLOCKS
Translation.addTranslation("Amethyst Block", {ru: "Аметистовый блок"});
Translation.addTranslation("Worm Iron", {ru: "Раскалённое железо"});
Translation.addTranslation("Nether Amethyst ore", {ru: "Аметистовая руда ада"});
Translation.addTranslation("Nether Rime ore", {ru: "изморозь"});
Translation.addTranslation("Rime ore", {ru: "изморозь"});
Translation.addTranslation("Rime Block", {ru: "блок изморози"});
Translation.addTranslation("Basalt Block", {ru: "Базальт"});
Translation.addTranslation("Basalt Brick", {ru: "Базальтовые кирпичи"});
Translation.addTranslation("Basalt Pillar", {ru: "Базальтовая колонна"});
Translation.addTranslation("Basalt Smooth", {ru: "Полированный Базальт"});
Translation.addTranslation("Soul Glass", {ru: "Стекло душ"});
Translation.addTranslation("Netherrack fiery Block", {ru: "Огненный адский камень"});
Translation.addTranslation("Netherrack gloomy Block", {ru: "Мрачный адский камень"});
Translation.addTranslation("Netherrack icy Block", {ru: "Ледянный адский камень"});
Translation.addTranslation("Netherrack lively Block", {ru: "Живой адский камень"});
Translation.addTranslation("Nether Hypahen", {ru: "Древний мицелий"});
Translation.addTranslation("Nether brick fiery Block", {ru: "Огненные адские кирпичи"});
Translation.addTranslation("Nether brick gloomy Block", {ru: "Мрачные адские кирпичи"});
Translation.addTranslation("Nether brick icy Block", {ru: "Ледянные адские кирпичи"});
Translation.addTranslation("Nether brick lively Block", {ru: "Живые адские кирпичи"});
Translation.addTranslation("Elder Moshroom Stem", {ru: "Грибная ножка"});
Translation.addTranslation("Rad Elder Moshroom Cap", {ru: "Красная древняя шляпка"});
Translation.addTranslation("Brown Elder Moshroom Cap", {ru: "Коричневая древняя шляпка"});
Translation.addTranslation("Mushroom Enoki Cap", {ru: "Спорангий"});
Translation.addTranslation("Enocki Stem", {ru: "Тело плесени"});
Translation.addTranslation("Frost Burn Ice", {ru: "Обжигающе холодный лёд"});
Translation.addTranslation("Slab Smooth Netherrack", {ru: "Плита из гладкого незерака"});
Translation.addTranslation("Smooth Netherrack Block", {ru: "Гладкий незерак"});
Translation.addTranslation("Pillar Netherrack", {ru: "Незераковая колонна"});
Translation.addTranslation("Wither Bone Block", {ru: "Блок иссушенных костей"});
Translation.addTranslation("Bone Block", {ru: "Блок костей"});
//ITEMS
Translation.addTranslation("Golden Bone Pickaxe", {ru: "Костно-золотая кирка"});
Translation.addTranslation("Golden Bone Shovel", {ru: "Костно-золотая лопата"});
Translation.addTranslation("Golden Bone Axe", {ru: "Костно-золотй топор"});
Translation.addTranslation("Golden Bone Hoe", {ru: "Костно-золотая мотыга"});
Translation.addTranslation("Golden Bone Sword", {ru: "Костно-золотй меч"});
Translation.addTranslation("Amethyst Crystal", {ru: "Аметист"});
Translation.addTranslation("Rime Crystal", {ru: "кристал инея"});
Translation.addTranslation("Wither bone", {ru: "Кость Иссушителя"});
Translation.addTranslation("Wither bone blazed", {ru: "Адски Горячая Кость Иссушителя"});
Translation.addTranslation("Wither bone frosted", {ru: "Адски Холодная Кость Иссушителя"});
Translation.addTranslation("Wither dust", {ru: "Пыль Иссушения"});
Translation.addTranslation("Nether brick Fiery", {ru: "Огненный Адский кирпич"});
Translation.addTranslation("Black Salamander Hide", {ru: "Чёрная кожа Саламандры"});
Translation.addTranslation("Orange Salamander Hide", {ru: "Рыжая кожа Саламандры"});
Translation.addTranslation("Ghast Quen tears", {ru: "Слёзы Королевы Гастов"});
Translation.addTranslation("Orange Salamander helmet", {ru: "Шлем рыжей саламандры"});
Translation.addTranslation("Black Salamander helmet", {ru: "Шлем чёрной саламандры"});
Translation.addTranslation("Orange Salamander chestplate", {ru: "Нагрудник рыжей саламандры"});
Translation.addTranslation("Black Salamander chestplate", {ru: "Нагрудник чёрной саламандры"});
Translation.addTranslation("Orange Salamander leggins", {ru: "Поножи рыжей саламандры"});
Translation.addTranslation("Black Salamander leggins", {ru: "Поножи чёрной саламандры"});
Translation.addTranslation("Orange Salamander boots", {ru: "Ботинки рыжей саламандры"});
Translation.addTranslation("Black Salamander boots", {ru: "Ботинки чёрной саламандры"});
Translation.addTranslation("Elder Red Moshroom", {ru: "красный древний гриб"});
Translation.addTranslation("Elder Brown Moshroom", {ru: "коричневый древний гриб"});
Translation.addTranslation("Spore", {ru: "Спора"});
Translation.addTranslation("Bone-Spider Fang", {ru: "Клык костяного паука"});
Translation.addTranslation("Nether brick Gloomy", {ru: "Мрачный адский кирпич"});
Translation.addTranslation("Nether brick Icy", {ru: "Ледяной адский кирпич"});
Translation.addTranslation("Nether brick Lively", {ru: "Живой адский кирпич"});
Translation.addTranslation("Wither bone helmet", {ru: "Иссушенный шлем"});
Translation.addTranslation("Wither bone chestplate", {ru: "Иссушенный нагрудник"});
Translation.addTranslation("Wither bone leggins", {ru: "Иссушенные поножи"});
Translation.addTranslation("Wither bone boots", {ru: "Иссушенные ботинки"});
Translation.addTranslation("White bone helmet", {ru: "Костяной шлем"});
Translation.addTranslation("White bone chestplate", {ru: "Костяной нагрудник"});
Translation.addTranslation("White bone leggins", {ru: "Костяные  поножи"});
Translation.addTranslation("White bone boots", {ru: "Костяные ботинки"});
Translation.addTranslation("Congealed Magma", {ru: "Магмовое Желе"});
Translation.addTranslation("Enoki Mushroom", {ru: "Жаренная плесень"});
Translation.addTranslation("Ghast Meat raw", {ru: "Сырой Стейк из гаста"});
Translation.addTranslation("Ghast Meat cooked", {ru: "Стейк из гаста"});
Translation.addTranslation("Rime Crystal Steel", {ru: "Покрытое инеем огниво"});
Translation.addTranslation("Bone Pickaxe", {ru: "Костяная кирка"});
Translation.addTranslation("Bone Shovel", {ru: "Костяная лопата"});
Translation.addTranslation("Bone Axe", {ru: "Костяной топор"});
Translation.addTranslation("Bone Hoe", {ru: "костяная мотыга"});
Translation.addTranslation("Bone Sword", {ru: "Костяной меч"});
Translation.addTranslation("Bone Pickaxe", {ru: "Костяная кирка"});

Translation.addTranslation("Amethysted Darkbone Sword", {ru: "Аметистовый иссушенный меч"});
Translation.addTranslation("Amethysted Darkbone Shovel", {ru: "Аметистовая иссушенная лопата"});
Translation.addTranslation("Amethysted Darkbone Pickaxe", {ru: "Аметистовая иссушенная кирка"});
Translation.addTranslation("Amethysted Darkbone Axe", {ru: "Аметистовый иссушенный топор"});
Translation.addTranslation("Amethysted Darkbone Hoe", {ru: "Аметистовая иссушенная мотыга"});

Translation.addTranslation("Blazed Darkbone Sword", {ru: "Адски горячий иссушенный меч"});
Translation.addTranslation("Blazed Darkbone Shovel", {ru: "Адски горячая иссушенная лопата"});
Translation.addTranslation("Blazed Darkbone Pickaxe", {ru: "Адски горячая иссушенная кирка"});
Translation.addTranslation("Blazed Darkbone Axe", {ru: "Адски горячий иссушенный топор"});
Translation.addTranslation("Blazed Darkbone Hoe", {ru: "Адски горячая иссушенная мотыга"});

Translation.addTranslation("Frosted Darkbone Sword", {ru: "Адски холодный иссушенный меч"});
Translation.addTranslation("Frosted Darkbone Shovel", {ru: "Адски холодная иссушенная лопата"});
Translation.addTranslation("Frosted Darkbone Pickaxe", {ru: "Адски холодная иссушенная кирка"});
Translation.addTranslation("Frosted Darkbone Axe", {ru: "Адски холодный иссушенный топор"});
Translation.addTranslation("Frosted Darkbone Hoe", {ru: "Адски холодная иссушенная мотыга"});

Translation.addTranslation("Sleeping destroyer of the worlds", {ru: "Спящий разрушитель миров"});
Translation.addTranslation("Destroyer of the worlds", {ru: "Разрушитель миров"});
Translation.addTranslation("Back Crystal", {ru: "Кристал возврата"});
Translation.addTranslation("Salamander Black Egg", {ru: "Яйцо спавна чёрной саламандры"});
Translation.addTranslation("Salamander Orange Egg", {ru: "Яйцо спавна рыжей саламандры"});
Translation.addTranslation("Fiery Quartz Ore", {ru: "Горячая кварцевая руда"});
Translation.addTranslation("Gloomy Quartz Ore", {ru: "Мрачная кварцевая руда"});
Translation.addTranslation("Icy Quartz Ore", {ru: "Ледяная кварцевая руда"});
Translation.addTranslation("Lively Quartz Ore", {ru: "Живая кварцевая руда"});
Translation.addTranslation("Frost Burn Ice", {ru: "Обжигающе холодный лёд"});
//SAfICPE2
Translation.addTranslation("Silver Ore", {ru: "Серебряная руда"});
Translation.addTranslation("Silver Ore Nether", {ru: "Серебряная руда Ада"});
Translation.addTranslation("End Silver Ore", {ru: "Серебряная руда Края"});
Translation.addTranslation("Metal Convertor", {ru: "Преобразователь металлов"});
Translation.addTranslation("Silver Ore fiery", {ru: "Горячая Серебряная руда"});
Translation.addTranslation("Silver Ore gloomy", {ru: "Мрачная Серебряная руда"});
Translation.addTranslation("Silver Ore icy", {ru: "Ледяная Серебряная руда"});
Translation.addTranslation("Silver Ore lively", {ru: "Живая Серебряная руда"});
//ITEMS
Translation.addTranslation("Silver Pickaxe", {ru: "Серебряая кирка"});
Translation.addTranslation("Silver Shovel", {ru: "Серебряная лопата"});
Translation.addTranslation("Silver Axe", {ru: "Серебряный топор"});
Translation.addTranslation("Silver Hoe", {ru: "Серебряная мотыга"});
Translation.addTranslation("Silver Sword", {ru: "Серебряный меч"});
Translation.addTranslation("Silver Cable", {ru: "Серебряный провод"});
Translation.addTranslation("Silver Cable (insulated)", {ru: "Серебряный провод с двойной изоляцией"});
Translation.addTranslation("Apple Silver", {ru: "Серебряное яблоко"});
Translation.addTranslation("Silver Chestplate", {ru: "Серебряный нагрудник"});
Translation.addTranslation("Silver Helmet", {ru: "Серебряный шлем"});
Translation.addTranslation("Silver Leggings", {ru: "Серебряные поножи"});
Translation.addTranslation("Silver Boots", {ru: "Серебряные ботинки"});
Translation.addTranslation("Silver Casing", {ru: "Серебрянная оболочка"});
Translation.addTranslation("Silver Plate", {ru: "Серебрянная пластина"});
Translation.addTranslation("Carrot Silver", {ru: "Серебряная морковь"});
Translation.addTranslation("Silver Nugget", {ru: "Кусочек серебра"});
Translation.addTranslation("Silver Convertor Core", {ru: "Ядро Преобразователя"});
Translation.addTranslation("Advensed Silver Convertor Core", {ru: " Улучшенное Ядро Преобразователя"});

Translation.addTranslation("Bones", {ru: "Кости"});
Translation.addTranslation("Bricks", {ru: "Кирпичи"});




// file: NXblocks/NXgeneration.js

//generation
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.AmethystOre, 0, chunkX, chunkZ, { 
veinCounts: 5, 
veinChance: 60, 
minY: 13, 
maxY: 89,  
size: randomInt(3, 6),  
ratio: .5, 
checkerTile: 87, 
checkerMode: false
}); 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.NethRimeOre, 0, chunkX, chunkZ, { 
veinCounts: 3, 
veinChance: 55, 
minY: 41, 
maxY: 98,  
size: randomInt(3, 5),  
ratio: .5, 
checkerTile: 87, 
checkerMode: false
}); 
});
//SAfICPE²
//normal
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.oreSilver, 0, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 55, 
minY: 10, 
maxY: 54,  
size: randomInt(2, 5),  
ratio: .5, 
checkerTile: 1, 
checkerMode: false
}); 
});
//nether
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.oreSilvern, 0, chunkX, chunkZ, { 
veinCounts: 5, 
veinChance: 58, 
minY: 14, 
maxY: 73,  
size: randomInt(3, 5),  
ratio: .5, 
checkerTile: 90, 
checkerMode: false
}); 
});
//end
Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.oreSilvere, 0, chunkX, chunkZ, { 
veinCounts: 4, 
veinChance: 80, 
minY: 10, 
maxY: 54, 
size: randomInt(3, 5),  
ratio: .5, 
checkerTile: 121, 
checkerMode: false
}); 
});
//other things
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
  for(var i = 0; i < 11; i++){ 
    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,30,245); 
         if(World.getBlockID(coords.x,coords.y,coords.z)== 87 && World.getBlockID(coords.x,coords.y+1,coords.z)== 0){
              World.setBlock(coords.x,coords.y + 1, coords.z,BlockID.redmoShroomSmall,0); 
           }   
     }
});   
  
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
  for(var i = 0; i < 9; i++){ 
    var coords = GenerationUtils.randomCoords(chunkX,chunkZ,30,245);  
         if(World.getBlockID(coords.x,coords.y,coords.z)== 87 && World.getBlockID(coords.x,coords.y+1,coords.z)== 0){
               World.setBlock(coords.x,coords.y + 1,coords.z,BlockID.bmoShroomSmall,0); 
           }  
     } 
});     

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){          
   for(var i = 0; i < 14; i++){ 
     var coords = GenerationUtils.randomCoords(chunkX,chunkZ,23,240);  
          if(World.getBlockID(coords.x,coords.y,coords.z)== 88 && World.getBlockID(coords.x,coords.y + 1,coords.z)== 0){
                World.setBlock(coords.x,coords.y,coords.z,BlockID.ThornstalkBB,0);
                 World.setBlock(coords.x,coords.y + 1,coords.z,BlockID.ThornstalkMB,0);
                  World.setBlock(coords.x,coords.y,coords.z + 2,BlockID.ThornstalkTB,0);
           }  
     } 
});     


Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.BasaltBlock, 0, chunkX, chunkZ, { 
veinCounts: 12, 
veinChance: 48, 
minY: 10, 
maxY: 50,  
size: randomInt(3, 9),  
ratio: .5, 
checkerTile: 87, 
checkerMode: false
}); 
});




// file: drop.js

KEX.LootModule.createLootTableModifier("entities/wither_skeleton")
    .createNewPool()
        .addEntry()
            .describeItem(ItemID.Witherbone)
            .setCount(0, 3)
            .beginFunctions()
                .addLootingEnchantFunction(0, 1)
            .endFunctions()
        .endEntry()
    .endPool()




