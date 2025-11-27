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