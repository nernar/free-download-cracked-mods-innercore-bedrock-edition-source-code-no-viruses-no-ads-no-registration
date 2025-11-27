/*
BUILD INFO:
  dir: code
  target: main.js
  files: 31
*/



// file: Core.js

IMPORT("TileRender");
IMPORT("EnergyNet");
IMPORT("StorageInterface");
IMPORT("ScrutinyAPI");
IMPORT("ItemAnimHelper");
IMPORT("ConnectedTexture");
IMPORT("RenderAPI");
IMPORT("ChargeItem");
IMPORT("ToolLib");
// это библиотеки распаковал
let sj = EnergyTypeRegistry.assureEnergyType("spacejoule", 0.25);
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);

var RF = EnergyTypeRegistry.assureEnergyType("Rf", 0.25);

var ft = EnergyTypeRegistry.assureEnergyType("FutureTock", 0.25);

Callback.addCallback('LevelDisplayed', function () {
    Game.message("§3Модификация «Futurepack Research» была успешно загружена!\nПриятной игры!\nТакже чтобы следить за новостями наших модификаций вы можете посетить наши группы во ВКонтакте:\n• https://vk.com/futurepacking\n• https://vk.com/horizonspacescraft")
});

var glass_block_type = Block.createSpecialType({
    solid: false,
    material: 16,
    destroytime: 0.3,
    explosionres: 1.5,
    renderlayer: 3,
    rendertype: 0,
    translucency: 1,
    lightopacity: 0
});
var iron_block_type = Block.createSpecialType({
    solid: true,
    material: 4,
    destroytime: 5,
    explosionres: 30,
    renderlayer: 3,
    rendertype: 0,
    translucency: 0,
    lightopacity: 15
});

var crystal_block_type = Block.createSpecialType({
    solid: false,
    material: 16,
    destroytime: 0,
    explosionres: 1.5,
    renderlayer: 3,
    translucency: 0,
    lightopacity: 0,
    lightlevel: 7,
    rendertype: 91
});

var granulat_block_type = Block.createSpecialType({
    solid: false,
    material: 3,
    destroytime: 3,
    explosionres: 1.5,
    renderlayer: 3,
    rendertype: 0,
    translucency: 0,
    lightopacity: 0,
    lightlevel: 7
});
var ladder_block_type = Block.createSpecialType({
    solid: true,
    material: 4,
    destroytime: 3,
    explosionres: 30,
    renderlayer: 5,
    rendertype: 8,
    translucency: 1,
    lightopacity: 8,
    lightlevel: 0
});

let colors = ["white","light_gray","gray","black","brown","red","orange","yellow","lime","green","cyan","light_blue","blue","purple","magenta","pink"];
let bcolors = ["White","Light gray","Gray","Black","Brown","Red","Orange","Yellow","Lime","Green","Cyan","Light blue","Blue","Purple","Magenta","Pink"];

var lamp_block_type = Block.createSpecialType({
    solid: true,
    material: 4,
    destroytime: 5,
    explosionres: 1.5,
    renderlayer: 3,
    rendertype: 0,
    translucency: 1,
    lightopacity: 15,
    lightlevel: 15
});
let MachineRecipeRegistry = {
 recipeData: {},
 registerRecipesFor: function(name, data, validateKeys){
  if(validateKeys){
   var newData = {};
   for(var key in data){
    if(key.indexOf(":") != -1){
     var keyArray = key.split(":");
     var newKey = eval(keyArray[0]) + ":" + keyArray[1];
    } else {
     var newKey = eval(key);
    }
    newData[newKey] = data[key];
   }
   data = newData;
  }
  this.recipeData[name] = data;
 },
 
 addRecipeFor: function(name, input, result){
  var recipes = this.requireRecipesFor(name, true);
  if(Array.isArray(recipes)){
   recipes.push({input: input, result: result});
  }
  else {
   recipes[input] = result;
  }
 },
 
 requireRecipesFor: function(name, createIfNotFound){
  if(!this.recipeData[name] && createIfNotFound){
   this.recipeData[name] = {};
  }
  return this.recipeData[name];
 },
 
 getRecipeResult: function(name, key1, key2){
  var data = this.requireRecipesFor(name);
  if(data){
   return data[key1] || data[key1+":"+key2];
  }
 },
 
 hasRecipeFor: function(name, key1, key2){
  return this.getRecipeResult(name, key1, key2)? true : false;
 }
}
let researchs = {
researchs: []
}

/*
//добвление изучения в список
//researchs
let name = Player.getName()

let saveValue = researchs;
Saver.addSavesScope(researchs, function(scope){
saveValue = scope.saveValue||0;
}, function(){
return {
researchs: researchs
};
});
Callback.addCallback("LevelLeft", function(){
saveValue = 0;
});
*/

let Tock = []
let Futurepack = {addFuturetock: function(id, volt){volt = volt || {};
volt.futock = volt.futock || 2000;
        Item.setMaxDamage(id, volt.futock);
	Item.registerNameOverrideFunction(id, function(item,name){return name + "\n§7Futock: " + (Item.getMaxDamage(item.id) - item.data) + " / " + (Item.getMaxDamage(item.id))});
	Tock.push({id: id,futock: volt.futock});
}};




// file: models/chest_0.js

//create Reider ___ size - 16
let chest_0 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.4375, 0.5-0.0625, 0, 0.5625, 0.75-0.0625, 0.0625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	return model;
});//boxes - 2




// file: models/chest_1.js

//create Reider ___ size - 16
let chest_1 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.4375, 0.5-0.0625, 0.9375, 0.5625, 0.75-0.0625, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	return model;
});//boxes - 2




// file: models/chest_2.js

//create Reider ___ size - 16
let chest_2 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0, 0.5-0.0625, 0.4375, 0.0625, 0.75-0.0625, 0.5625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	return model;
});//boxes - 2




// file: models/chest_3.js

//create Reider ___ size - 16
let chest_3 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.9375, 0.5-0.0625, 0.4375, 1, 0.75-0.0625, 0.5625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	return model;
});//boxes - 2




// file: blocks/unusable/ores.js

let ores = ["quartz_erz_m","kohle_erz_m","kupfer_erz","bauxit_erz","zinn_erz","prismid_stone0","prismid_stone3","zink_erz","kupfer_erz_m","prismid_stone2","magnetit_erz","prismid_stone1"];
let bOres = ["Quartz","Kohle","Kupfer","Bauxit","Zinn","Prizmid Stone","Prismid Stone","Zink","Kupfer","Prismid Stone","Magnetit","Prismid stone"];
for(var i in ores){
let ore = ores[i];
let bOre = bOres[i];
IDRegistry.genBlockID(ore);
Block.createBlock(ore, [ {name: bOre, texture: [[ore, 0]], inCreative: true}], iron_block_type)
ToolAPI.registerBlockMaterial(BlockID[ore], "stone", 2);

};
let ob = ["bwakurium","bretium","bquantanium","kupfer","industrial_deko","bneon","zin","zink","bglowtite"]
let obN = ["Bwakurium","Bretium","Bquantanium","Kupfer","Industrial deko","Bneon","Zin","Zink","Bglowtite"]
for(let i in ob){
	let obb = ob[i];
let obNn = obN[i];
IDRegistry.genBlockID(obb + "_block");
Block.createBlock(obb + "_block", [ {name: obNn + " block", texture: [[obb + "_block", 0]], inCreative: true}], iron_block_type)
ToolAPI.registerBlockMaterial(BlockID[obb + "_block"], "stone", 2);

}




// file: blocks/unusable/iron_blocks.js

IDRegistry.genBlockID("white_iron_block");
Block.createBlock("white_iron_block", [ {name: "white iron block", texture: [["color_iron_white", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.white_iron_block, "stone", 2);

IDRegistry.genBlockID("light_gray_iron_block");
Block.createBlock("light_gray_iron_block", [ {name: "light gray iron block", texture: [["color_iron_light_gray", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.light_gray_iron_block, "stone", 2);

IDRegistry.genBlockID("gray_iron_block");
Block.createBlock("gray_iron_block", [ {name: "gray iron block", texture: [["color_iron_gray", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.gray_iron_block, "stone", 2);

IDRegistry.genBlockID("black_iron_block");
Block.createBlock("black_iron_block", [ {name: "black iron block", texture: [["color_iron_black", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.black_iron_block, "stone", 2);

IDRegistry.genBlockID("brown_iron_block");
Block.createBlock("brown_iron_block", [ {name: "brown iron block", texture: [["color_iron_brown", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.brown_iron_block, "stone", 2);

IDRegistry.genBlockID("red_iron_block");
Block.createBlock("red_iron_block", [ {name: "red iron block", texture: [["color_iron_red", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.red_iron_block, "stone", 2);

IDRegistry.genBlockID("orange_iron_block");
Block.createBlock("orange_iron_block", [ {name: "orange iron block", texture: [["color_iron_orange", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.orange_iron_block, "stone", 2);

IDRegistry.genBlockID("yellow_iron_block");
Block.createBlock("yellow_iron_block", [ {name: "yellow iron block", texture: [["color_iron_yellow", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.yellow_iron_block, "stone", 2);

IDRegistry.genBlockID("lime_iron_block");
Block.createBlock("lime_iron_block", [ {name: "lime iron block", texture: [["color_iron_lime", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.lime_iron_block, "stone", 2);

IDRegistry.genBlockID("green_iron_block");
Block.createBlock("green_iron_block", [ {name: "green iron block", texture: [["color_iron_green", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.green_iron_block, "stone", 2);

IDRegistry.genBlockID("cyan_iron_block");
Block.createBlock("cyan_iron_block", [ {name: "cyan iron block", texture: [["color_iron_cyan", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.cyan_iron_block, "stone", 2);

IDRegistry.genBlockID("light_blue_iron_block");
Block.createBlock("light_blue_iron_block", [ {name: "light blue iron block", texture: [["color_iron_light_blue", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.light_blue_iron_block, "stone", 2);

IDRegistry.genBlockID("blue_iron_block");
Block.createBlock("blue_iron_block", [ {name: "blue iron block", texture: [["color_iron_blue", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.blue_iron_block, "stone", 2);

IDRegistry.genBlockID("purple_iron_block");
Block.createBlock("purple_iron_block", [ {name: "purple iron block", texture: [["color_iron_purple", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.purple_iron_block, "stone", 2);

IDRegistry.genBlockID("magenta_iron_block");
Block.createBlock("magenta_iron_block", [ {name: "magenta iron block", texture: [["color_iron_magenta", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.magenta_iron_block, "stone", 2);

IDRegistry.genBlockID("pink_iron_block");
Block.createBlock("pink_iron_block", [ {name: "pink iron block", texture: [["color_iron_pink", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.pink_iron_block, "stone", 2);




// file: blocks/unusable/gitters.js

IDRegistry.genBlockID("white_gitter");
Block.createBlock("white_gitter", [ {name: "White gitter", texture: [["gitter_white", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.white_gitter, "stone", 2);

IDRegistry.genBlockID("light_gray_gitter");
Block.createBlock("light_gray_gitter", [ {name: "Light gray gitter", texture: [["gitter_light_gray", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.light_gray_gitter, "stone", 2);

IDRegistry.genBlockID("gray_gitter");
Block.createBlock("gray_gitter", [ {name: "Gray gitter", texture: [["gitter_gray", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.gray_gitter, "stone", 2);

IDRegistry.genBlockID("black_gitter");
Block.createBlock("black_gitter", [ {name: "Black gitter", texture: [["gitter_black", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.black_gitter, "stone", 2);

IDRegistry.genBlockID("brown_gitter");
Block.createBlock("brown_gitter", [ {name: "Brown gitter", texture: [["gitter_brown", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.brown_gitter, "stone", 2);

IDRegistry.genBlockID("red_gitter");
Block.createBlock("red_gitter", [ {name: "Red gitter", texture: [["gitter_red", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.red_gitter, "stone", 2);

IDRegistry.genBlockID("orange_gitter");
Block.createBlock("orange_gitter", [ {name: "Orange gitter", texture: [["gitter_orange", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.orange_gitter, "stone", 2);

IDRegistry.genBlockID("yellow_gitter");
Block.createBlock("yellow_gitter", [ {name: "Yellow gitter", texture: [["gitter_yellow", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.yellow_gitter, "stone", 2);

IDRegistry.genBlockID("lime_gitter");
Block.createBlock("lime_gitter", [ {name: "Lime gitter", texture: [["gitter_lime", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.lime_gitter, "stone", 2);

IDRegistry.genBlockID("green_gitter");
Block.createBlock("green_gitter", [ {name: "Green gitter", texture: [["gitter_green", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.green_gitter, "stone", 2);

IDRegistry.genBlockID("cyan_gitter");
Block.createBlock("cyan_gitter", [ {name: "Cyan gitter", texture: [["gitter_cyan", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.cyan_gitter, "stone", 2);

IDRegistry.genBlockID("light_blue_gitter");
Block.createBlock("light_blue_gitter", [ {name: "Light blue gitter", texture: [["gitter_light_blue", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.light_blue_gitter, "stone", 2);

IDRegistry.genBlockID("blue_gitter");
Block.createBlock("blue_gitter", [ {name: "Blue gitter", texture: [["gitter_blue", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.blue_gitter, "stone", 2);

IDRegistry.genBlockID("purple_gitter");
Block.createBlock("purple_gitter", [ {name: "Purple gitter", texture: [["gitter_purple", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.purple_gitter, "stone", 2);

IDRegistry.genBlockID("magenta_gitter");
Block.createBlock("magenta_gitter", [ {name: "Magenta gitter", texture: [["gitter_magenta", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.magenta_gitter, "stone", 2);

IDRegistry.genBlockID("pink_gitter");
Block.createBlock("pink_gitter", [ {name: "Pink gitter", texture: [["gitter_pink", 0]], inCreative: true}], iron_block_type);
ToolAPI.registerBlockMaterial(BlockID.pink_gitter, "stone", 2);




// file: blocks/unusable/crystals.js

IDRegistry.genBlockID("crystal_retium");
Block.createBlock("crystal_retium",[{name: "Crystal Retium", texture: [["crystal_retium", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_retium, "stone", 1);

IDRegistry.genBlockID("retium_granulat");
Block.createBlock("retium_granulat",[{name: "Retium granulat", texture: [["retium_granulat", 0]], inCreative: true} ],granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.retium_granulat, "stone", 1);

var CRYSTAL = new ICRender.CollisionShape();
var entry = CRYSTAL.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.crystal_retium, -1,CRYSTAL);


IDRegistry.genBlockID("crystal_block_retium");
Block.createBlock("crystal_block_retium",[{name: "Crystal block retium", texture: [["crystal_block_retium", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_retium, "stone", 1);

IDRegistry.genItemID("crystal_retium_1"); 
Item.createItem("crystal_retium_1", "Crystal retium", {name: "crystal_retium", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_retium_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.retium_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_retium);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_retium", function(coords, blockID){
    return [[ItemID.crystal_retium_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_bioterium");
Block.createBlock("crystal_bioterium",[{name: "Crystal bioterium", texture: [["crystal_bioterium", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_bioterium, "stone", 1);

IDRegistry.genBlockID("bioterium_granulat");
Block.createBlock("bioterium_granulat",[{name: "Bioterium granulat", texture: [["bioterium_granulat", 0]], inCreative: true} ], granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.bioterium_granulat, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_bioterium, -1,CRYSTAL);


IDRegistry.genBlockID("crystal_block_bioterium");
Block.createBlock("crystal_block_bioterium",[{name: "Crystal block bioterium", texture: [["crystal_block_bioterium", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_bioterium, "stone", 1);

IDRegistry.genItemID("crystal_bioterium_1"); 
Item.createItem("crystal_bioterium_1", "Crystal bioterium", {name: "crystal_bioterium", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_bioterium_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.bioterium_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_bioterium);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_bioterium", function(coords, blockID){
    return [[ItemID.crystal_bioterium_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_alutin");
Block.createBlock("crystal_alutin",[{name: "Crystal alutin", texture: [["crystal_alutin", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_alutin, "stone", 1);

IDRegistry.genBlockID("alutin_granulat");
Block.createBlock("alutin_granulat",[{name: "Alutin granulat", texture: [["alutin_granulat", 0]], inCreative: true} ], granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.alutin_granulat, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_alutin, -1,CRYSTAL);


IDRegistry.genBlockID("crystal_block_alutin");
Block.createBlock("crystal_block_alutin",[{name: "Crystal block alutin", texture: [["crystal_block_alutin", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_alutin, "stone", 1);

IDRegistry.genItemID("crystal_alutin_1"); 
Item.createItem("crystal_alutin_1", "Crystal alutin", {name: "crystal_alutin", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_alutin_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.alutin_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_alutin);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_alutin", function(coords, blockID){
    return [[ItemID.crystal_alutin_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_glowtite");
Block.createBlock("crystal_glowtite",[{name: "Crystal glowtite", texture: [["crystal_glowtite", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_glowtite, "stone", 1);

IDRegistry.genBlockID("glowtite_granulat");
Block.createBlock("glowtite_granulat",[{name: "glowtite granulat", texture: [["glowtite_granulat", 0]], inCreative: true} ], granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.glowtite_granulat, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_glowtite, -1,CRYSTAL);


IDRegistry.genBlockID("crystal_block_glowtite");
Block.createBlock("crystal_block_glowtite",[{name: "Crystal block glowtite", texture: [["crystal_block_glowtit", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_glowtite, "stone", 1);

IDRegistry.genItemID("crystal_glowtite_1"); 
Item.createItem("crystal_glowtite_1", "Crystal glowtite", {name: "crystal_glowtite", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_glowtite_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.glowtite_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_glowtite);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_glowtite", function(coords, blockID){
    return [[ItemID.crystal_glowtite_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_neon");
Block.createBlock("crystal_neon",[{name: "Crystal neon", texture: [["crystal_neon", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_neon, "stone", 1);

IDRegistry.genBlockID("neon_granulat");
Block.createBlock("neon_granulat",[{name: "neon granulat", texture: [["neon_granulat", 0]], inCreative: true} ],granulat_block_type);
ToolAPI.registerBlockMaterial(BlockID.neon_granulat, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_neon, -1,CRYSTAL);


IDRegistry.genBlockID("crystal_block_neon");
Block.createBlock("crystal_block_neon",[{name: "Crystal block neon", texture: [["crystal_block_neon", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.crystal_block_neon, "stone", 1);

IDRegistry.genItemID("crystal_neon_1"); 
Item.createItem("crystal_neon_1", "Crystal neon", {name: "crystal_neon", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_neon_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.neon_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_neon);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_neon", function(coords, blockID){
    return [[ItemID.crystal_neon_1, 1, 0]] 
});

IDRegistry.genBlockID("crystal_little_glowtite");
Block.createBlock("crystal_little_glowtite",[{name: "Crystal glowtite", texture: [["crystal_glowtite_bottom", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_glowtite, "stone", 1);

IDRegistry.genBlockID("crystal_big_glowtite");
Block.createBlock("crystal_big_glowtite",[{name: "Crystal glowtite", texture: [["crystal_glowtite_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_glowtite, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_glowtite, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_glowtite, -1,CRYSTAL);

IDRegistry.genItemID("crystal_little_glowtite_1"); 
Item.createItem("crystal_little_glowtite_1", "Crystal glowtite", {name: "crystal_glowtite_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_glowtite_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.glowtite_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_little_glowtite); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_glowtite);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_glowtite", function(coords, blockID){
    return [[ItemID.crystal_glowtite_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_glowtite", function(coords, blockID){
    return [[ItemID.crystal_glowtite_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_glowtite){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_glowtite){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("crystal_little_retium");
Block.createBlock("crystal_little_retium",[{name: "Crystal retium", texture: [["crystal_retium_bottom", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_retium, "stone", 1);

IDRegistry.genBlockID("crystal_big_retium");
Block.createBlock("crystal_big_retium",[{name: "Crystal retium", texture: [["crystal_retium_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_retium, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_retium, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_retium, -1,CRYSTAL);


IDRegistry.genItemID("crystal_little_retium_1"); 
Item.createItem("crystal_little_retium_1", "Crystal retium", {name: "crystal_retium_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_retium_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.crystal_block_retium){ 
        region.setBlock(place.x, place.y, place.z, BlockID.retium_granulat); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_retium);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_retium", function(coords, blockID){
    return [[ItemID.crystal_retium_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_retium", function(coords, blockID){
    return [[ItemID.crystal_retium_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_retium){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_retium){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("crystal_little_alutin");
Block.createBlock("crystal_little_alutin",[{name: "Crystal alutin", texture: [["crystal_alutin_bottom", 0]], inCreative: false} ], crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_alutin, "stone", 1);

IDRegistry.genBlockID("crystal_big_alutin");
Block.createBlock("crystal_big_alutin",[{name: "Crystal alutin", texture: [["crystal_alutin_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_alutin, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_alutin, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_alutin, -1,CRYSTAL);


IDRegistry.genItemID("crystal_little_alutin_1"); 
Item.createItem("crystal_little_alutin_1", "Crystal alutin", {name: "crystal_alutin_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_alutin_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.alutin_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_little_alutin); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_alutin);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_alutin", function(coords, blockID){
    return [[ItemID.crystal_alutin_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_alutin", function(coords, blockID){
    return [[ItemID.crystal_alutin_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_alutin){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_alutin){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("crystal_little_bioterium");
Block.createBlock("crystal_little_bioterium",[{name: "Crystal bioterium", texture: [["crystal_bioterium_bottom", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_bioterium, "stone", 1);

IDRegistry.genBlockID("crystal_big_bioterium");
Block.createBlock("crystal_big_bioterium",[{name: "Crystal bioterium", texture: [["crystal_bioterium_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_bioterium, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_bioterium, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_bioterium, -1,CRYSTAL);


IDRegistry.genItemID("crystal_little_bioterium_1"); 
Item.createItem("crystal_little_bioterium_1", "Crystal bioterium", {name: "crystal_bioterium_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_bioterium_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.bioterium_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_little_bioterium); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_bioterium);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_bioterium", function(coords, blockID){
    return [[ItemID.crystal_bioterium_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_bioterium", function(coords, blockID){
    return [[ItemID.crystal_bioterium_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_bioterium){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_bioterium){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("crystal_little_neon");
Block.createBlock("crystal_little_neon",[{name: "Crystal Neon", texture: [["crystal_neon_bottom", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_little_neon, "stone", 1);

IDRegistry.genBlockID("crystal_big_neon");
Block.createBlock("crystal_big_neon",[{name: "Crystal Neon", texture: [["crystal_neon_top", 0]], inCreative: false} ],crystal_block_type);
ToolAPI.registerBlockMaterial(BlockID.crystal_big_neon, "stone", 1);

BlockRenderer.setCustomCollisionShape(BlockID.crystal_little_neon, -1,CRYSTAL);
BlockRenderer.setCustomCollisionShape(BlockID.crystal_big_neon, -1,CRYSTAL);


IDRegistry.genItemID("crystal_little_neon_1"); 
Item.createItem("crystal_little_neon_1", "Crystal neon", {name: "crystal_neon_top", meta: 0}, {stack: 64});

Item.registerUseFunction("crystal_little_neon_1", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.neon_granulat){ 
        region.setBlock(place.x, place.y, place.z, BlockID.crystal_little_neon); 
        region.setBlock(place.x, place.y+1, place.z, BlockID.crystal_big_neon);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Block.registerDropFunction("crystal_little_neon", function(coords, blockID){
    return [[ItemID.crystal_neon_1, 1, 0]] 
});

Block.registerDropFunction("crystal_big_neon", function(coords, blockID){
    return [[ItemID.crystal_neon_1, 1, 0]] 
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_big_neon){
	World.setBlock(coords.x, coords.y - 1, coords.z, VanillaBlockID.air);
}
});

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if(block.id == BlockID.crystal_little_neon){
	World.setBlock(coords.x, coords.y + 1, coords.z, VanillaBlockID.air);
}
});

IDRegistry.genBlockID("retium_brick");
Block.createBlock("retium_brick",[{name: "Retium brick", texture: [["retium_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.retium_brick, "stone", 1);

/*IDRegistry.genBlockID("alutinum_brick");
Block.createBlock("alutinum_brick",[{name: "Alutinum brick", texture: [["alutinum_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.alutinum_brick, "stone", 1);*/

IDRegistry.genBlockID("wakurium_brick");
Block.createBlock("wakurium_brick",[{name: "Wakurium brick", texture: [["wakurium_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.wakurium_brick, "stone", 1);

IDRegistry.genBlockID("quantanium_brick");
Block.createBlock("quantanium_brick",[{name: "Quantanium brick", texture: [["quantanium_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.quantanium_brick, "stone", 1);

IDRegistry.genBlockID("bioterium_brick");
Block.createBlock("bioterium_brick",[{name: "Bioterium brick", texture: [["bioterium_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.bioterium_brick, "stone", 1);

IDRegistry.genBlockID("neon_brick");
Block.createBlock("neon_brick",[{name: "Neon brick", texture: [["neon_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.neon_brick, "stone", 1);

IDRegistry.genBlockID("glowtite_brick");
Block.createBlock("glowtite_brick",[{name: "Glowtite brick", texture: [["glowtite_brick", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.glowtite_brick, "stone", 1);

IDRegistry.genBlockID("baluminium_block");
Block.createBlock("baluminium_block",[{name: "Baluminium block", texture: [["baluminium_block", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.baluminium_block, "stone", 1);

IDRegistry.genBlockID("bbioterium_block");
Block.createBlock("bbioterium_block",[{name: "bbioterium block", texture: [["bbioterium_block", 0]], inCreative: true} ]);
ToolAPI.registerBlockMaterial(BlockID.bbioterium_block, "stone", 1);




// file: blocks/unusable/luftings.js

gittersG = []
luftungsG = []
glassG = []
neonLampG = []
blocksG = []
for(var i in colors){
let color = colors[i];
let bcolor = bcolors[i];
IDRegistry.genBlockID(color+"_luftung");
Block.createBlock(color+"_luftung", [ {name: bcolor +" luftung", texture: [["luftung_"+color, 0]], inCreative: true}], iron_block_type)

IDRegistry.genBlockID(color+"_glas");
Block.createBlock(color+"_glas", [ {name: bcolor +" glass", texture: [["glas_"+color, 0]], inCreative: true}], glass_block_type)

IDRegistry.genBlockID("neon_" +color+"_off");
Block.createBlock("neon_" + color + "_off", [ {name: bcolor +" neon lamp off", texture: [["neon_" + color + "_off", 0]], inCreative: true}], iron_block_type)

IDRegistry.genBlockID("neon_" +color+"_on");
Block.createBlock("neon_" + color + "_on", [ {name: bcolor +" neon lamp on", texture: [["neon_" + color + "_on", 0]], inCreative: false}], lamp_block_type)

IDRegistry.genBlockID("plasma_" +color+"_off");
Block.createBlock("plasma_" + color + "_off", [ {name: bcolor +" plasma lamp off", texture: [["plasma_" + color + "_off", 0]], inCreative: true}], iron_block_type)

IDRegistry.genBlockID("plasma_" +color+"_on");
Block.createBlock("plasma_" + color + "_on", [ {name: bcolor +" plasma lamp on", texture: [["plasma_" + color + "_on", 0]], inCreative: true}], lamp_block_type)

ToolAPI.registerBlockMaterial(BlockID[color+"_luftung"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID[color+"_glas"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID["plasma_" + color + "_off"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID["neon" + color + "_on"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID["neon" + color + "_off"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID["plasma_" + color + "_on"], "stone", 2);
ToolAPI.registerBlockMaterial(BlockID[thrusters], "stone", 2);

TileEntity.registerPrototype(BlockID["plasma_"+color+"_off"], {
 defaultValues: {
  redstones: 0,
  redstoneSignal: false
 },
 redstone: function (params) {
  alert(JSON.stringify(params));
  if(params.power = 0) {
   this.blockID = BlockID["plasma_"+color+"_on"];
this.blockSource.setBlock(this.x, this.y, this.z, this.blockID);
  } else {
   this.blockID = BlockID["plasma_"+color+"_off"];
this.blockSource.setBlock(this.x, this.y, this.z, this.blockID);
  }
 }
});
TileEntity.registerPrototype(BlockID["plasma_"+color+"_on"], {
 defaultValues: {
  redstones: 0,
  redstoneSignal: false
 },
 redstone: function (params) {
  alert(JSON.stringify(params));
  if(params.power > 0) {
   this.blockID = BlockID["plasma_"+color+"_off"];
this.blockSource.setBlock(this.x, this.y, this.z, this.blockID);
  } else {
   this.blockID = BlockID["plasma_"+color+"_on"];
this.blockSource.setBlock(this.x, this.y, this.z, this.blockID);
  }
 }
});
ConnectedTexture.setModelForGlass(BlockID[color+"_glas"], 0, "glas_"+color);

blocksG.push(BlockID[color+"_iron_block"]);
gittersG.push(BlockID[color+"_gitter"]);
luftungsG.push(BlockID[color+"_luftung"]);
glassG.push(BlockID[color+"_glas"]);
neonLampG.push(BlockID["neon_"+color+"_off"]);
};
Item.addCreativeGroup("gitters", "Iron Gitters", gittersG);
Item.addCreativeGroup("iron_blocks", "Colored Iron Blocks", blocksG);
Item.addCreativeGroup("luftungs", "Iron Luftungs", luftungsG);
Item.addCreativeGroup("glass", "Iron Glass", glassG);
Item.addCreativeGroup("neon_lamp", "Neon Lamp", neonLampG);

let thrusters = ["thruster_white_light_blue","thruster_white_lime","thruster_white_red","thruster_white_orange","thruster_white_purple","thruster_white_yellow","thruster_white_light_blue","thruster_light_gray_light_blue","thruster_light_gray_lime","thruster_light_gray_orange","thruster_light_gray_purple","thruster_light_gray_yellow","thruster_light_gray_light_blue","thruster_black_light_blue","thruster_black_lime","thruster_black_orange","thruster_black_purple","thruster_black_yellow","thruster_black_light_blue"]

for(let a in thrusters){let t = thrusters[a];
IDRegistry.genBlockID(t);
Block.createBlock(t, [ {name: "Thruster", texture: [[t, 0]], inCreative: true}], lamp_block_type)};


/*let s = [" стекло"]
var l = [" glass"]
var rcc = ["Белое","Светло-серое","Серое","Чёрное", "Коричневое","Красное", "Оранжевое", "Жёлтое", "Лаймовое", "Зеленое", "Голубое", "Светло-голубое", "Синее", "Фиолетовое", "Пурпурное", "Розовое"];
for(var i in colors){
	let colorus = rc[i];
	let bc = bcolors[i];
	let rc = rcc[i];
Translation.addTranslation(bc[1] + l, {
ru: rc[1] + s
});
Translation.addTranslation(bc[2] + l, {
ru: rc[2] + s
});
Translation.addTranslation(bc[3] + l, {
ru: rc[3] + s
});
Translation.addTranslation(bc[4] + l, {
ru: rc[4] + s
});
Translation.addTranslation(bc[5] + l, {
ru: rc[5] + s
});
Translation.addTranslation(bc[6] + l, {
ru: rc[6] + s
});
Translation.addTranslation(bc[7] + l, {
ru: rc[7] + s
});
Translation.addTranslation(bc[8] + l, {
ru: rc[8] + s
});
Translation.addTranslation(bc[9] + l, {
ru: rc[9] + s
});
Translation.addTranslation(bc[10] + l, {
ru: rc[10] + s
});
Translation.addTranslation(bc[11] + l, {
ru: rc[11] + s
});
Translation.addTranslation(bc[12] + l, {
ru: rc[12] + s
});
Translation.addTranslation(bc[13] + l, {
ru: rc[13] + s
});
Translation.addTranslation(bc[14] + l, {
ru: rc[14] + s
});
Translation.addTranslation(bc[15] + l, {
ru: rc[15] + s
});
Translation.addTranslation(bc[16] + l, {
ru: rc[16] + s
});
}*/




// file: items/ores/ores.js

let ingots = ["bioterium_ingot","ingot_lithium","ingot_bitripentium","ingot_neodymium","retium_ingot","ingot_quantanium","ingot_seltenerde","glowtit_ingot","neon_ingot","ingot_wakurum","kupferbarren","zinnbarren","zinkbarren", "ingot_wakurum_or_something_else", "ingot_gadolinium","aluminiumplatten"];
let bIngots = ["Biotherium ingot","Lithium ingot","Bitripentium ingot","Neodymium ingot","Retium ingot","Ingot quantium","Seltenerde ingot","Glowtit ingpot","Neon ingot","Wakurum ingot","Kupferbarren","Zinnbarren","Zink ingot","Ingot wakurum or something else", "Ingot gadolinium","Alumiun plate"];
for(var i in ingots){
let ing = ingots[i];
let bIng = bIngots[i];
IDRegistry.genItemID(ing); 
Item.createItem(ing, bIng, {name: ing, meta: 0}, {stack: 64});

};
let dusts = ["aluminium","iron","obsidian","tin","glowtite","magnet","bioterium","zinc","neon","staub","gold","copper","quantanium","retium"]
let bDust = ["Aluminum","Iron","Obsidian","Tin","Glowtite","Magnet","Bioterium","Zinc","Neon","Staub","Gold","Copper","Quantanium","Retium"]
for(var i in dusts){
let d = dusts[i];
let bd = bDust[i]
IDRegistry.genItemID("dust_" + d); 
Item.createItem("dust_" + d,bd + " dust", {name: "dust_" + d, meta: 0}, {stack: 64});
}




// file: items/food/food.js

let foodtexture = ["erse","topinambur_potato", "mendel_seed"]
let foodname = ["Erse", "Topinambur potato","Mendel berry"]
let saturated = [4,4,2]
let blockberryName = ["Erse berry","Topinambur", "Mendel berry"]
let blockBerryTexture = ["erse_pflanze", "topinambur_b", "mendel_berry_plant"]
for(var i in foodtexture){
	let fdt = foodtexture[i];
	let fdn = foodname[i];
	let bfn = blockberryName[i];
	let bft = blockBerryTexture[i];
    let satr = saturated[i];
	IDRegistry.genItemID(fdt); 
Item.createFoodItem(fdt, fdn, {name: fdt, meta: 0}, {stack: 64,food: satr});

Item.registerUseFunction(fdt, function(coords, item, block, player) {
    let source = BlockSource.getDefaultForActor(player);
    if (source.getBlock(coords.x, coords.y, coords.z).id == VanillaBlockID.farmland) {
        source.setBlock(coords.x, coords.y+1, coords.z, BlockID[bft], 0);
       Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});
	IDRegistry.genBlockID(bft);
Block.createSpecialType({
  base: VanillaTileID.wheat,
  destroytime: 0,
  explosionres: 0,
  opaque: false,
  lightopacity: 0,
  renderlayer: 3,
    rendertype: 91,
  sound: "grass"
}, "plant");
Block.createBlock(bft, [
{   name: bfn, texture: [[bft, 0]], inCreative: false},
	{name: bfn, texture: [[bft, 1]], inCreative: false},
	{name: bfn, texture: [[bft, 2]], inCreative: false},
	{name: bfn, texture: [[bft, 3]], inCreative: false},
	{name: bfn, texture: [[bft, 4]], inCreative: false},
	{name: bfn, texture: [[bft, 5]], inCreative: false},
		{name: bfn, texture: [[bft, 6]], inCreative: false},
			{name: bfn, texture: [[bft, 7]], inCreative: false}
], "plant");
var FOOD = new ICRender.CollisionShape();
var entry = FOOD.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID[bft], -1,FOOD);

Block.registerClickFunction(BlockID[bft], function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal && block.data < 7) {
    let source = BlockSource.getDefaultForActor(player);
    source.setBlock(coords.x, coords.y, coords.z, block.id, block.data+1);
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
  }
  /*if(block.data > 7){World.drop(coords.x, coords.y, coords.z, ItemID[fdt], 2);
  let source = BlockSource.getDefaultForActor(player);
  	source.setBlock(coords.x,coords.y,coords.z,block.id,block.data - 6)
  }*/
});
Block.registerNeighbourChangeFunction(BlockID.garlicCrop, function(coords, block, changedCoords, region) {
  if (World.getBlock(coords.x, coords.y-1, coords.z).id !== VanillaBlockID.farmland) {
    World.destroyBlock(coords.x, coords.y, coords.z);
    World.drop(coords.x, coords.y, coords.z, ItemID[fdt], 2);
  }
});
Block.registerClickFunction(BlockID[bft], function(coords, item, block, player) {if(block.id == [bft] && block.data > 6){World.drop(coords.x, coords.y, coords.z, ItemID[fdt], 2); World.setBlock(coords.x, coords.y, coords.z, id, data-1);}})

Block.registerDropFunction(bft, function(coords, blockID){
    return [[fdt, 2, 0]] 
});
Block.setRandomTickCallback(BlockID[bft], function(x, y, z, id, data) {
    if (data < 7) {
        World.setBlock(x, y, z, id, data+1);
    }
});
}




// file: items/others/batareiki.js


IDRegistry.genItemID("battery_I"); 
Item.createItem("battery_I", "Battery l", {name: "battery_l", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.battery_I, "ft", 300, 20, 0, true)
Futurepack.addFuturetock(ItemID.battery_I, {futock: 300});

IDRegistry.genItemID("battery_n"); 
Item.createItem("battery_n", "Battery N", {name: "battery_n", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.battery_n, "ft", 420, 20, 0, true);
Futurepack.addFuturetock(ItemID.battery_n, {futock: 420});

IDRegistry.genItemID("neon_battery"); 
Item.createItem("neon_battery", "Battery neon", {name: "neon_battery", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.neon_battery, "ft", 1000, 20, 0, true);
Futurepack.addFuturetock(ItemID.neon_battery, {futock: 1000});

IDRegistry.genItemID("energie_zelle"); 
Item.createItem("energie_zelle", "Zelle energy", {name: "energie_zelle", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.energie_zelle, "ft", 760, 20, 0, true);
Futurepack.addFuturetock(ItemID.energie_zelle, {futock: 760});

IDRegistry.genItemID("compact_energie_zelle"); 
Item.createItem("compact_energie_zelle", "Zelle compact energy", {name: "compact_energie_zelle", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.compact_energie_zelle, "ft", 760, 20, 0, true);
Futurepack.addFuturetock(ItemID.compact_energie_zelle, {futock: 760});

IDRegistry.genItemID("kristall_energie_zelle"); 
Item.createItem("kristall_energie_zelle", "Kristall zelle energy", {name: "kristall_energie_zelle", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.kristall_energie_zelle, "ft", 860, 20, 0, true);
Futurepack.addFuturetock(ItemID.kristall_energie_zelle, {futock: 860});




// file: items/others/computers_.js

IDRegistry.genItemID("core"); 
Item.createItem("core", "Entronium core", {name: "core", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.core, "core", 1, [0,1,2,3,4,5,6,7]);

	IDRegistry.genItemID("ram"); 
Item.createItem("ram", "Entronium ram", {name: "ram", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.ram, "ram", 1, [0,1,2,3,4,5,6,7]);

IDRegistry.genItemID("spawn_note"); 
Item.createItem("spawn_note", "A note", {name: "spawn_note", meta: 0}, {stack: 1});
let SPN = new UI.Container();
Item.registerUseFunction("spawn_note", function(coords, item, block, player) {
	SPN.openAs(SPAWNOTE)
});
var SPAWNOTE = new UI.Window({
	location: {
    	x: 310/ 1.1 - 22.4,
        y: 260,
        width: 435,
        height: 560
    },
    drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},{type: "bitmap", bitmap:"spawnnote", scale: 4.0,x: 0,y: 5}],
    elements: {
       "closeButton": {type: "closeButton", x: 0, y: 100, global: false, bitmap: "futurevoid", scale: 1000 },
     }
  }
);
let statuses = ["Core: Unworking","Ram: Unworking","Core: 1\nMax Temp: 175.0",
"Core: 2\nMax Temp: 200.0","Core: 3\nMax Temp: 250.0","Core: 4\nMax Temp: 275.0","Core: 5\nMax Temp: 850.0","Core: 7\nMax Temp: 450.0","Core: 7\nMax Temp: 1100.0","Core: 2\nMax Temp: 2100.0","Core: 0\nMax Temp: 10000.0",//"Core: 10\nMax Temp: 100000.0",
"Ram: 1.0\nCorepower: 1\nMax. Temp:150.0","Ram: 2.0\nCorepower: 1\nMax. Temp:175.0","Ram: 3.0\nCorepower: 1\nMax. Temp:200.0","Ram: 4.0\nCorepower: 1\nMax. Temp:225.0","Ram: 5.0\nCorepower: 1\nMax. Temp:800.0","Ram: 7.0\nCorepower: 1\nMax. Temp:400.0","Ram: 7.0\nCorepower: 1\nMax. Temp:1000.0","Ram: 8.0\nCorepower: 1\nMax. Temp:2000.0","Ram: 0.0\nCorepower: 1\nMax. Temp:100000.0","Chip: Unworking","Chip: Why you need support chip?","Chip: ultimate","Chip: navigation","Chip: logic +-","Chip: network","Chip: transport","Chip: industrial","Chip: tactic","Chip: damage controlling","Chip: Alon I","Core: breaking","Machine board: modified double","Machine board","Flash speicher","Flash speicher","Flash speicher","Flash speicher","Flash speicher","Flash speicher"]
IDRegistry.genItemID("videocore"); 
Item.createItem("videocore", "Video core", {name: "videocore", meta: 0}, {stack: 1});
IAHelper.makeAdvancedAnim(ItemID.videocore, "videocore", 1, [0,1]);
Item.registerNameOverrideFunction(ItemID.videocore, function(item,name){return Translation.translate("Video core") + "\n§6" + Translation.translate("Transmission of information: 4 mb/s")});
Translation.addTranslation("Transmission of information: 4 mb/s",{ru: "Передача видеоинформации: 4кб/с"});

let cores = ["toasted_core","toasted_ram","standart_core","a1_core","p2_core","tct_core","master_core","non_core","dungeon_core","univ_core","zombie_core","standart_ram","a_ram","p_ram","tct_ram","master_ram","non_ram","dungeon_ram","univ_ram","zombie_ram","toasted_chip","support_chip","ultimate_chip","navigation_chip","logic_chip","network_chip","chip_transport","industrie_chip","tactic_chip","damage_control_chip","ai_chip","fragment_core","double_machine_board","machine_board","a_i_flash_speicher_a","a_i_flash_speicher_b","a_i_flash_speicher_c","a_i_flash_speicher_d","a_i_flash_speicher_e","a_i_flash_speicher_f"];

let coresName = ["Toasted core","Toasted RAM","Standart core","Alon I Core","Penton II Core","TCT Core","Master Mind Core","NoN Core","Dungeon Heart Core","Torus Core","Zombie Core","Standard RAM","Alon RAM","Penton RAM","TCT RAM","Master RAM","NoN Ram","Dungeon RAM","Torus RAM","Zombie RAM","Toasted CHIP","Support CHIP","Ultimate CHIP","Navigation CHIP","Logic CHIP","Network CHIP","Transport CHIP","Industrial CHIP","Tactic CHIP","Damage Control CHIP","AI CHIP","Fragment Core","Double Machine Board","Machine Board","Flash Speicher 0","Flash Speicher 1","Flash Speicher 2","Flash Speicher 3","Flash Speicher 4","Flash Speicher 5"];
for(var i in cores){let a = cores[i];
	let b = coresName[i];
	let c = statuses[i];
	IDRegistry.genItemID(a); 
Item.createItem(a, b, {name: a, meta: 0}, {stack: 1});
Item.registerNameOverrideFunction(ItemID[a], function(item,name){return Native.Color.GOLD+ name + "\n§7" + c});
};

IDRegistry.genItemID("fabricator_component"); 
Item.createItem("fabricator_component", "Mini fabricator", {name: "fabricator_item", meta: 0}, {stack: 1});




// file: items/ores/components.js

let ArtemOnComputerItems = ["coppercoil","diamandteile","drone_engine","eisenteile","fibers","filter","gold_coil","goldteile","iron_coil","iron_stick","kupferteile","lasercutter","laserdiode","neon_coil","neonteile","polymer","prismid","quantanium_coil","quarzteile","verbuntmetall","silizium"];
let tranlateComputerItems = ["Copper coil","Diamondtaile","Drone engine","Eisenteile","Fibers","Filter","Gold coil","Goldteile","Iron coil","Iron stick","Kupferteile","Lasercutter","Laserdiode","Neon coil","Neonteile","Polymer","Prismid","Quantanium coil","Quarz teile","Verbunt metall","Silicon plate"];
for(let i in ArtemOnComputerItems){let AOCI = ArtemOnComputerItems[i];
let TCI = tranlateComputerItems[i];
IDRegistry.genItemID(AOCI); 
Item.createItem(AOCI, TCI, {name: AOCI, meta: 0}, {stack: 64});
};
IDRegistry.genItemID("tank_lack0"); 
Item.createItem("tank_lack0", "Empty tank", {name: "tank_lack0", meta: 0}, {stack: 64});
for(var i = 1; i < 16; i++) {
 IDRegistry.genItemID("tank_lack"+i); 
 Item.createItem("tank_lack"+i, "tank with "+bcolors[i-1]+" lack", {name: "tank_lack"+i, meta: 0}, {stack: 64});
}

Recipes.addShaped({id: ItemID.coppercoil, count: 2, data: 0},
	["i*i", "cpc", "i*i"],
	['i', 265, 0, 'p', ItemID.eisenteile, 0, 'c', ItemID.kupferbarren, 0]
);
Recipes.addShaped({id: ItemID.iron_coil, count: 2, data: 0},
	["i*i", "ipi", "i*i"],
	['i', 265, 0, 'p', ItemID.eisenteile, 0, 'c', ItemID.kupferbarren, 0]
);
Recipes.addShaped({id: ItemID.gold_coil, count: 2, data: 0},
	["i*i", "gpg", "i*i"],
	['i', 265, 0, 'p', ItemID.eisenteile, 0, 'g', 266, 0]
);
Recipes.addShaped({id: ItemID.neon_coil, count: 2, data: 0},
	["i*i", "cpc", "i*i"],
	['i', 265, 0, 'p', ItemID.eisenteile, 0, 'c', ItemID.neon_ingot, 0]
);
Recipes.addShaped({id: ItemID.iron_stick, count: 8, data: 0},
	["i", "i"],
	['i', 265, 0]
);
Recipes.addShaped({id: BlockID.glowtite_brick, count: 1, data: 0},
	["gg", "gg"],
	['g', ItemID.glowtit_ingot, 0]
);
Recipes.addShaped({id: BlockID.neon_brick, count: 1, data: 0},
	["gg", "gg"],
	['g', ItemID.neon_ingot, 0]
);
Recipes.addShaped({id: BlockID.bioterium_brick, count: 1, data: 0},
	["gg", "gg"],
	['g', ItemID.bioterium_ingot, 0]
);
Recipes.addShaped({id: BlockID.retium_brick, count: 1, data: 0},
	["gg", "gg"],
	['g', ItemID.retium_ingot, 0]
);
Recipes.addShaped({id: ItemID.tank_lack0, count: 2, data: 0},
	["*k*", "g*g","ggg"],
	['g', VanillaBlockID.glass_pane, 0, 'k', ItemID.kupferbarren, 0]
);




// file: items/tools.js

IDRegistry.genItemID("composite_rod");
Item.createItem("composite_rod", "Composite fishing rod", {name: "composite_rod_uncast", meta: 0}, {stack: 1});

IDRegistry.genItemID("composite_pickaxe"); Item.createItem("composite_pickaxe", "Composite Pickaxe", {name: "composite_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("composite_axe"); Item.createItem("composite_axe", "Composite axe", {name: "composite_axe", meta: 0}, {stack: 1});

IDRegistry.genItemID("composite_shovel"); Item.createItem("composite_shovel", "Composite shovel", {name: "composite_spade", meta: 0}, {stack: 1});

IDRegistry.genItemID("composite_hoe"); Item.createItem("composite_hoe", "Composite hoe", {name: "composite_hoe", meta: 0}, {stack: 1});

IDRegistry.genItemID("future_scrench"); Item.createItem("future_scrench", "Scrench", {name: "scrench", meta: 0}, {stack: 1});

Item.addRepairItemIds(ItemID.composite_axe, [ItemID.verbuntmetall]);
Item.addRepairItemIds(ItemID.composite_shovel, [ItemID.verbuntmetall]);
Item.addRepairItemIds(ItemID.composite_hoe, [ItemID.verbuntmetall]);
Item.addRepairItemIds(ItemID.composite_pickaxe, [ItemID.verbuntmetall]);

Item.setEnchantType(ItemID.composite_pickaxe, Native.EnchantType.pickaxe, 14);
Item.setEnchantType(ItemID.composite_axe, Native.EnchantType.axe, 14);
Item.setEnchantType(ItemID.composite_shovel, Native.EnchantType.spade, 14);
Item.setEnchantType(ItemID.composite_hoe, Native.EnchantType.hoe, 14);

ToolAPI.addToolMaterial("composite", {
    durability: 500,
    level: 3,
    efficiency: 7,
    damage: 6,
    enchantability: 14
});
ToolAPI.setTool(ItemID.composite_pickaxe, "netherite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.composite_axe, "netherite", ToolType.axe);
ToolAPI.setTool(ItemID.composite_pickaxe, "netherite", ToolType.shovel);
ToolAPI.setTool(ItemID.composite_hoe, "netherite", ToolType.hoe);

Recipes.addShaped({id: ItemID.composite_axe, count: 1, data: 0},
	["cc", "cl", "*l"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_axe, count: 1, data: 0},
	["cc", "lc", "l*"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_pickaxe, count: 1, data: 0},
	["ccc", "*l*", "*l*"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_shovel, count: 1, data: 0},
	["c", "l", "l"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_hoe, count: 1, data: 0},
	["cc", "*l", "*l"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_hoe, count: 1, data: 0},
	["cc", "l*", "l*"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0]
);
Recipes.addShaped({id: ItemID.composite_rod, count: 1, data: 0},
	["**l", "*ls", "c*s"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0, 's', VanillaItemID.string, 0]
);
Recipes.addShaped({id: ItemID.composite_rod, count: 1, data: 0},
	["l**", "sl*", "s*c"],
	['c', ItemID.verbuntmetall, 0, 'l', ItemID.iron_stick, 0, 's', VanillaItemID.string, 0]
);




// file: blocks/chest.js

function setModelChest(id){
  chest_1(null, id, 0).setBlockModel(id, 0);
  chest_0(null, id, 1).setBlockModel(id, 1);
  chest_3(null, id, 2).setBlockModel(id, 2);
  chest_2(null, id, 3).setBlockModel(id, 3);
 }
IDRegistry.genBlockID("composite_chest");
Block.createBlockWithRotation("composite_chest", [{
    name: "Composite Chest",
    texture: [
        ["composite_chest_top", 0],
        ["composite_chest_top", 0],
        ["composite_chest_side", 0],
        ["composite_chest_front", 0],
        ["composite_chest_side", 0],
        ["composite_chest_side", 0]
    ],
    inCreative: true
}]);

Recipes.addShaped({id: BlockID.composite_chest, count: 1, data: 0},
	["ccc", "c*c", "ccc"],
	['c', ItemID.verbuntmetall, 0]
);

var compChestUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Composite Chest"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [],
	
    elements: {
        slot1: {
            type: "slot",
            x: 350,
            y: 40,
            size: 50
        },
        slot2: {
            type: "slot",
            x: 400,
            y: 40,
            size: 50
        },
        slot3: {
            type: "slot",
            x: 450,
            y: 40,
            size: 50
        },
        slot4: {
            type: "slot",
            x: 500,
            y: 40,
            size: 50
        },
        slot5: {
            type: "slot",
            x: 550,
            y: 40,
            size: 50
        },
        slot6: {
            type: "slot",
            x: 600,
            y: 40,
            size: 50
        },
        slot7: {
            type: "slot",
            x: 650,
            y: 40,
            size: 50
        },
        slot8: {
            type: "slot",
            x: 700,
            y: 40,
            size: 50
        },
        slot9: {
            type: "slot",
            x: 750,
            y: 40,
            size: 50
        },

        slot10: {
            type: "slot",
            x: 350,
            y: 90,
            size: 50
        },
        slot11: {
            type: "slot",
            x: 400,
            y: 90,
            size: 50
        },
        slot12: {
            type: "slot",
            x: 450,
            y: 90,
            size: 50
        },
        slot13: {
            type: "slot",
            x: 500,
            y: 90,
            size: 50
        },
        slot14: {
            type: "slot",
            x: 550,
            y: 90,
            size: 50
        },
        slot15: {
            type: "slot",
            x: 600,
            y: 90,
            size: 50
        },
        slot16: {
            type: "slot",
            x: 650,
            y: 90,
            size: 50
        },
        slot17: {
            type: "slot",
            x: 700,
            y: 90,
            size: 50
        },
        slot18: {
            type: "slot",
            x: 750,
            y: 90,
            size: 50
        },


        slot19: {
            type: "slot",
            x: 350,
            y: 140,
            size: 50
        },
        slot20: {
            type: "slot",
            x: 400,
            y: 140,
            size: 50
        },
        slot21: {
            type: "slot",
            x: 450,
            y: 140,
            size: 50
        },
        slot22: {
            type: "slot",
            x: 500,
            y: 140,
            size: 50
        },
        slot23: {
            type: "slot",
            x: 550,
            y: 140,
            size: 50
        },
        slot24: {
            type: "slot",
            x: 600,
            y: 140,
            size: 50
        },
        slot25: {
            type: "slot",
            x: 650,
            y: 140,
            size: 50
        },
        slot26: {
            type: "slot",
            x: 700,
            y: 140,
            size: 50
        },
        slot27: {
            type: "slot",
            x: 750,
            y: 140,
            size: 50
        },

        slot28: {
            type: "slot",
            x: 350,
            y: 190,
            size: 50
        },
        slot29: {
            type: "slot",
            x: 400,
            y: 190,
            size: 50
        },
        slot30: {
            type: "slot",
            x: 450,
            y: 190,
            size: 50
        },
        slot31: {
            type: "slot",
            x: 500,
            y: 190,
            size: 50
        },
        slot32: {
            type: "slot",
            x: 550,
            y: 190,
            size: 50
        },
        slot33: {
            type: "slot",
            x: 600,
            y: 190,
            size: 50
        },
        slot34: {
            type: "slot",
            x: 650,
            y: 190,
            size: 50
        },
        slot35: {
            type: "slot",
            x: 700,
            y: 190,
            size: 50
        },
        slot36: {
            type: "slot",
            x: 750,
            y: 190,
            size: 50
        }
    }
});
setModelChest(BlockID.composite_chest);
TileEntity.registerPrototype(BlockID.composite_chest, {
useNetworkItemContainer: true,
getScreenName(player, coords){
return "main";
},
getScreenByName(){
return compChestUI;
},
});




// file: blocks/usable/block_breaker.js

IDRegistry.genBlockID("block_breaker");
Block.createBlockWithRotation("block_breaker", [{
    name: "Block breaker",
    texture: [
        ["push_seite_flip", 0],
        ["push_seite_flip", 0],
        ["push_unten", 0],
        ["brecher_front_off", 0],
        ["push_seite_flip", 0],
        ["push_seite_flip", 0]
    ],
    inCreative: true
}], iron_block_type);
var variations = [
            [["brecher_front_off", 0], ["push_unten", 0], ["push_seite", 0], ["push_seite", 0], ["push_seite", 0], ["push_seite", 0]],
            [["push_unten", 0], ["brecher_front_off", 0], ["push_seite_flip", 0], ["push_seite_flip", 0], ["push_seite_flip", 0], ["push_seite_flip", 0]],
            [["push_seite", 0], ["push_seite_flip", 0], ["brecher_front_off", 0], ["push_unten", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0]],
            [["push_seite_flip", 0], ["push_seite", 0], ["push_unten", 0], ["brecher_front_off", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0]],
            [["push_seite_flip3", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0], ["brecher_front_off", 0], ["push_unten", 0]],
            [["push_seite_flip2", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0], ["push_unten", 0], ["brecher_front_off", 0]]
];
for (var i = 0; i < 6; i++) {
    var render = new ICRender.Model();
		  var model = BlockRenderer.createTexturedBlock(variations[i]);
	  	render.addEntry(model);
   		BlockRenderer.enableCoordMapping(BlockID.block_breaker, i, render);
}
TileRenderer.setRotationFunction(BlockID.block_breaker, true);
		var irender = new ICRender.Model();
		var imodel = BlockRenderer.createTexturedBlock(variations[1]);
		irender.addEntry(imodel);
		ItemModel.getFor(BlockID.block_breaker, 0).setHandModel(imodel);
		ItemModel.getFor(BlockID.block_breaker, 0).setUiModel(imodel);

Recipes.addShaped({id: BlockID.block_breaker, count: 1, data: 0},
	["aaa", "ada", "opo"],
	['a', ItemID.aluminiumplatten, 0, 'd',  VanillaBlockID.dispenser, 0, 'p', VanillaItemID.iron_pickaxe, 0, 'o', VanillaBlockID.obsidian, 0]
);



var breakerUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Block breaker"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [
		{
type: "bitmap", 
x: 250, 
y: 50,
bitmap: "breaker_draw",
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 400,
            y: 200,
            size: 52
        },
        slot2: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 452,
            y: 200,
            size: 52
        },
        slot3: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 504,
            y: 200,
            size: 52
        }
    }
});


TileEntity.registerPrototype(BlockID.block_breaker, {
   useNetworkItemContainer: true,
   defaultValues: {
    status: 0
   },

 redstone: function (params) {
    let arry = [this.y-1,this.y+1,this.y,this.y,this.y,this.y,this.y+1,this.y-1,this.y,this.y,this.y,this.y];
    let arrz = [this.z,this.z,this.z-1,this.z+1,this.z,this.z,this.z,this.z,this.z+1,this.z-1,this.z,this.z];
    let arrx = [this.x,this.x,this.x,this.x,this.x-1,this.x+1,this.x,this.x,this.x,this.x,this.x+1,this.x-1];
     this.data.status = 0;
     let s = this.blockSource.getBlockData(this.x, this.y, this.z);
     this.data.sig = 1;
     let bid = this.blockSource.getBlockID(arrx[s], arry[s], arrz[s])||0;
     let bdata = this.blockSource.getBlockData(arrx[s], arry[s], arrz[s])||0;
     var bloca = 0;
     let eslot1 = (this.container.getSlot("slot1") || {}).extra || 0;
     let eslot2 = (this.container.getSlot("slot2") || {}).extra || 0;
     let eslot3 = (this.container.getSlot("slot3") || {}).extra || 0;
     if(bid != 0 && bid != 7 && bid != 8 && bid != 9 && bid != 10 && bid != 11 && bid != 120 && bid != 416) {
      if(eslot1 != 0 || eslot2 != 0 || eslot3 != 0) {
       let slevel = 0;
       if(eslot1 && slevel == 0) {
        slevel = eslot1.getEnchantLevel(16);
       }
       if(eslot2 && slevel == 0) {
        slevel = eslot2.getEnchantLevel(16);
       }
       if(eslot3 && slevel == 0) {
        slevel = eslot3.getEnchantLevel(16);
       }
       if(slevel != 0) {
        var enchant = {
         silk: slevel
        }
        bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, enchant);
         this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
        this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
        this.data.status = 1;
       }
      }
      if((eslot1 != 0 || eslot2 != 0 || eslot3 != 0) && this.data.status == 0) {
       let flevel = 0;
       if(eslot1 && flevel == 0) {
        flevel = eslot1.getEnchantLevel(18);
       }
       if(eslot2 && flevel == 0) {
        flevel = eslot2.getEnchantLevel(18);
       }
       if(eslot3 && flevel == 0) {
        flevel = eslot3.getEnchantLevel(18);
       }
       bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, 0);
       var fcount = 1;
       if(bid == 20 || bid == 56 || bid == 129 || bid == 153) {
        var fcount = Math.round(1+Math.random()*flevel);
       }
       if(bid == 21) {
        var fcount = Math.round(4+Math.random()*flevel*4);
       }
       if(bid == 73) {
        var fcount = Math.round(4+Math.random()*flevel*4);
       }
       if(bid == 511) {
        var fcount = Math.round(2+Math.random()*flevel*8);
       }
       for(var i = 0; i < fcount; i++) {
this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
       }
       this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
       this.data.status = 1;
      }

      if(this.data.status == 0) {
       bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, 0);
       var fcount = 1
       if(bid == 21) {
        var fcount = Math.round(4+Math.random()*4);
       }
       if(bid == 73) {
        var fcount = Math.round(4+Math.random()*2);
       }
       if(bid == 511) {
        var fcount = Math.round(2+Math.random()*6);
       }
       for(var g = 0; g < fcount; g++) {
        this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
       }
       this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
       this.data.status = 1;
      }
     }
 },

   tick: function(container, window, content, data) {
this.container.sendChanges();
   },
   getScreenName(){
return "main";
},
   getScreenByName(){
return breakerUI;
},
});












IDRegistry.genBlockID("block_destroyer");
Block.createBlockWithRotation("block_destroyer", [{
    name: "Block destroyer §l§9(CREATIVE)",
    texture: [
        ["push_seite_flip", 0],
        ["push_seite_flip", 0],
        ["push_unten", 0],
        ["brecher_front_off", 0],
        ["push_seite_flip", 0],
        ["push_seite_flip", 0]
    ],
    inCreative: true
}], iron_block_type);
var variations = [
            [["brecher_front_off", 0], ["push_unten", 0], ["push_seite", 0], ["push_seite", 0], ["push_seite", 0], ["push_seite", 0]],
            [["push_unten", 0], ["brecher_front_off", 0], ["push_seite_flip", 0], ["push_seite_flip", 0], ["push_seite_flip", 0], ["push_seite_flip", 0]],
            [["push_seite", 0], ["push_seite_flip", 0], ["brecher_front_off", 0], ["push_unten", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0]],
            [["push_seite_flip", 0], ["push_seite", 0], ["push_unten", 0], ["brecher_front_off", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0]],
            [["push_seite_flip3", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0], ["brecher_front_off", 0], ["push_unten", 0]],
            [["push_seite_flip2", 0], ["push_seite_flip2", 0], ["push_seite_flip3", 0], ["push_seite_flip2", 0], ["push_unten", 0], ["brecher_front_off", 0]]
];
for (var i = 0; i < 6; i++) {
    var drender = new ICRender.Model();
		  var dmodel = BlockRenderer.createTexturedBlock(variations[i]);
	  	drender.addEntry(dmodel);
   		BlockRenderer.enableCoordMapping(BlockID.block_destroyer, i, drender);
}
TileRenderer.setRotationFunction(BlockID.block_destroyer, true);
		var dirender = new ICRender.Model();
		var dimodel = BlockRenderer.createTexturedBlock(variations[1]);
		dirender.addEntry(dimodel);
		ItemModel.getFor(BlockID.block_destroyer, 0).setHandModel(dimodel);
		ItemModel.getFor(BlockID.block_destroyer, 0).setUiModel(dimodel);


var destroyerUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Block destroyer"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [
		{
type: "bitmap", 
x: 250, 
y: 50,
bitmap: "breaker_draw",
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 300,
            y: 100,
            size: 52
        },
        slot2: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 352,
            y: 100,
            size: 52
        },
        slot3: {
            type: "slot",
            bitmap: "breaker_slot",
            x: 404,
            y: 100,
            size: 52
        }
    }
});


TileEntity.registerPrototype(BlockID.block_destroyer, {
   useNetworkItemContainer: true,
   defaultValues: {
    status: 0
   },

 redstone: function (params) {
    let arry = [this.y-1,this.y+1,this.y,this.y,this.y,this.y,this.y+1,this.y-1,this.y,this.y,this.y,this.y];
    let arrz = [this.z,this.z,this.z-1,this.z+1,this.z,this.z,this.z,this.z,this.z+1,this.z-1,this.z,this.z];
    let arrx = [this.x,this.x,this.x,this.x,this.x-1,this.x+1,this.x,this.x,this.x,this.x,this.x+1,this.x-1];
     this.data.status = 0;
     let s = this.blockSource.getBlockData(this.x, this.y, this.z);
     let bid = this.blockSource.getBlockID(arrx[s], arry[s], arrz[s])||0;
     let bdata = this.blockSource.getBlockData(arrx[s], arry[s], arrz[s])||0;
     var bloca = 0;
     let eslot1 = (this.container.getSlot("slot1") || {}).extra || 0;
     let eslot2 = (this.container.getSlot("slot2") || {}).extra || 0;
     let eslot3 = (this.container.getSlot("slot3") || {}).extra || 0;
     if(bid != 0) {
      if(eslot1 != 0 || eslot2 != 0 || eslot3 != 0) {
       let slevel = 0;
       if(eslot1 && slevel == 0) {
        slevel = eslot1.getEnchantLevel(16);
       }
       if(eslot2 && slevel == 0) {
        slevel = eslot2.getEnchantLevel(16);
       }
       if(eslot3 && slevel == 0) {
        slevel = eslot3.getEnchantLevel(16);
       }
       if(slevel != 0) {
        var enchant = {
         silk: slevel
        }
        bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, enchant);
         this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
        this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
        this.data.status = 1;
       }
      }
      if((eslot1 != 0 || eslot2 != 0 || eslot3 != 0) && this.data.status == 0) {
       let flevel = 0;
       if(eslot1 && flevel == 0) {
        flevel = eslot1.getEnchantLevel(18);
       }
       if(eslot2 && flevel == 0) {
        flevel = eslot2.getEnchantLevel(18);
       }
       if(eslot3 && flevel == 0) {
        flevel = eslot3.getEnchantLevel(18);
       }
       bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, 0);
       var fcount = 1;
       if(bid == 20 || bid == 56 || bid == 129 || bid == 153) {
        var fcount = Math.round(1+Math.random()*flevel);
       }
       if(bid == 21) {
        var fcount = Math.round(4+Math.random()*flevel*4);
       }
       if(bid == 73) {
        var fcount = Math.round(4+Math.random()*flevel*4);
       }
       if(bid == 511) {
        var fcount = Math.round(2+Math.random()*flevel*8);
       }
       for(var i = 0; i < fcount; i++) {
this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
       }
       this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
       this.data.status = 1;
      }

      if(this.data.status == 0) {
       bloca = ToolLib.getBlockDrop({x: arrx[s], y: arry[s], z: arrz[s]}, bid, bdata, 4, 0);
       var fcount = 1
       if(bid == 21) {
        var fcount = Math.round(4+Math.random()*4);
       }
       if(bid == 73) {
        var fcount = Math.round(4+Math.random()*2);
       }
       if(bid == 511) {
        var fcount = Math.round(2+Math.random()*6);
       }
       for(var g = 0; g < fcount; g++) {
        this.blockSource.spawnDroppedItem(arrx[s+6], arry[s+6], arrz[s+6], bloca[0][0], bloca[0][1], bloca[0][2]);
       }
       this.blockSource.destroyBlock(arrx[s], arry[s], arrz[s], false);
       this.data.status = 1;
      }
     }
 },

   tick: function(container, window, content, data) {
this.container.sendChanges();
},
   getScreenName(){
return "main";
},
   getScreenByName(){
return destroyerUI;
},
});




// file: blocks/usable/block_placer.js

IDRegistry.genBlockID("block_placer");
let bpsp = [
        ["placer_seite_flip", 0],
        ["placer_seite_flip", 0],
        ["push_oben", 0],
        ["placer_vorne", 0],
        ["placer_seite_flip", 0],
        ["placer_seite_flip", 0]
    ]
Block.createBlockWithRotation("block_placer", [{
    name: "Block placer",
    texture: bpsp,
    inCreative: true
}], iron_block_type);
var variations = [
            [[bpsp[3][0], 0], [bpsp[2][0], 0], ["placer_seite", 0], ["placer_seite", 0], ["placer_seite", 0], ["placer_seite", 0]],
            [[bpsp[2][0], 0], [bpsp[3][0], 0], [bpsp[0][0], 0], [bpsp[0][0], 0], [bpsp[0][0], 0], [bpsp[0][0], 0]],
            [["placer_seite", 0], [bpsp[0][0], 0], [bpsp[3][0], 0], [bpsp[2][0], 0], ["placer_seite_flip3", 0], ["placer_seite_flip2", 0]],
            [[bpsp[0][0], 0], ["placer_seite", 0], [bpsp[2][0], 0], [bpsp[3][0], 0], ["placer_seite_flip2", 0], ["placer_seite_flip3", 0]],
            [["placer_seite_flip3", 0], ["placer_seite_flip3", 0], ["placer_seite_flip2", 0], ["placer_seite_flip3", 0], [bpsp[3][0], 0], [bpsp[2][0], 0]],
            [["placer_seite_flip2", 0], ["placer_seite_flip2", 0], ["placer_seite_flip3", 0], ["placer_seite_flip2", 0], [bpsp[2][0], 0], [bpsp[3][0], 0]]
];
for (var i = 0; i < 6; i++) {
    var prender = new ICRender.Model();
		  var pmodel = BlockRenderer.createTexturedBlock(variations[i]);
	  	prender.addEntry(pmodel);
   		BlockRenderer.enableCoordMapping(BlockID.block_placer, i, prender);
}
TileRenderer.setRotationFunction(BlockID.block_placer, true);
		var pirender = new ICRender.Model();
		var pimodel = BlockRenderer.createTexturedBlock(variations[1]);
		pirender.addEntry(pimodel);
		ItemModel.getFor(BlockID.block_placer, 0).setHandModel(pimodel);
		ItemModel.getFor(BlockID.block_placer, 0).setUiModel(pimodel);

Recipes.addShaped({id: BlockID.block_placer, count: 1, data: 0},
	["awa", "rdr", "apa"],
	['a', ItemID.aluminiumplatten, 0, 'd',  VanillaBlockID.dispenser, 0, 'p', VanillaBlockID.piston, 0, 'r', VanillaItemID.redstone, 0, 'w', VanillaBlockID.chest, 0]
);




var placerUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Block placer"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [],
	
    elements: {
        slot1: {
            type: "slot",
            x: 350,
            y: 200,
            size: 52
        },
        slot2: {
            type: "slot",
            x: 402,
            y: 200,
            size: 52
        },
        slot3: {
            type: "slot",
            x: 454,
            y: 200,
            size: 52
        },
        slot4: {
            type: "slot",
            x: 506,
            y: 200,
            size: 52
        },
        slot5: {
            type: "slot",
            x: 558,
            y: 200,
            size: 52
        },
        slot6: {
            type: "slot",
            x: 610,
            y: 200,
            size: 52
        },
        slot7: {
            type: "slot",
            x: 662,
            y: 200,
            size: 52
        },
        slot8: {
            type: "slot",
            x: 714,
            y: 200,
            size: 52
        },
        slot9: {
            type: "slot",
            x: 766,
            y: 200,
            size: 52
        }
    }
});


TileEntity.registerPrototype(BlockID.block_placer, {
   useNetworkItemContainer: true,

 redstone: function (params) {
    let arry = [this.y-1,this.y+1,this.y,this.y,this.y,this.y,this.y+1,this.y-1,this.y,this.y,this.y,this.y];
    let arrz = [this.z,this.z,this.z-1,this.z+1,this.z,this.z,this.z,this.z,this.z+1,this.z-1,this.z,this.z];
    let arrx = [this.x,this.x,this.x,this.x,this.x-1,this.x+1,this.x,this.x,this.x,this.x,this.x+1,this.x-1];
    let s = this.blockSource.getBlockData(this.x, this.y, this.z);
    let bid = this.blockSource.getBlockID(arrx[s], arry[s], arrz[s])||0;
    let slot1 = this.container.getSlot("slot1") || {id: 0};
    let slot2 = this.container.getSlot("slot2") || {id: 0};
    let slot3 = this.container.getSlot("slot3") || {id: 0};
    let slot4 = this.container.getSlot("slot4") || {id: 0};
    let slot5 = this.container.getSlot("slot5") || {id: 0};
    let slot6 = this.container.getSlot("slot6") || {id: 0};
    let slot7 = this.container.getSlot("slot7") || {id: 0};
    let slot8 = this.container.getSlot("slot8") || {id: 0};
    let slot9 = this.container.getSlot("slot9") || {id: 0};
    var sis = slot1.id + slot2.id + slot3.id + slot4.id + slot5.id + slot6.id + slot7.id + slot8.id + slot9.id
    if(bid == 0 && sis != 0) {
      if(slot1.id != 0 && IDRegistry.getIdInfo(slot1.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot1.id, slot1.data)
       this.container.setSlot("slot1", slot1.id, slot1.count - 1, slot1.data);
      } else if(slot2.id != 0 && IDRegistry.getIdInfo(slot2.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot2.id, slot2.data)
       this.container.setSlot("slot2", slot2.id, slot2.count - 1, slot2.data);
      } else if(slot3.id != 0 && IDRegistry.getIdInfo(slot3.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot3.id, slot3.data)
       this.container.setSlot("slot3", slot3.id, slot3.count - 1, slot3.data);
      } else if(slot4.id != 0 && IDRegistry.getIdInfo(slot4.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot4.id, slot4.data)
       this.container.setSlot("slot4", slot4.id, slot4.count - 1, slot4.data);
      } else if(slot5.id != 0 && IDRegistry.getIdInfo(slot5.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot5.id, slot5.data)
       this.container.setSlot("slot5", slot5.id, slot5.count - 1, slot5.data);
      } else if(slot6.id != 0 && IDRegistry.getIdInfo(slot6.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot6.id, slot6.data)
       this.container.setSlot("slot6", slot6.id, slot6.count - 1, slot6.data);
      } else if(slot7.id != 0 && IDRegistry.getIdInfo(slot7.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot7.id, slot7.data)
       this.container.setSlot("slot7", slot7.id, slot7.count - 1, slot7.data);
      } else if(slot8.id != 0 && IDRegistry.getIdInfo(slot8.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot8.id, slot8.data)
       this.container.setSlot("slot8", slot8.id, slot8.count - 1, slot8.data);
      } else if(slot9.id != 0 && IDRegistry.getIdInfo(slot9.id).startsWith("block") == true) {
       this.blockSource.setBlock(arrx[s], arry[s], arrz[s], slot9.id, slot9.data)
       this.container.setSlot("slot9", slot9.id, slot9.count - 1, slot9.data);
      }
     }
 },

   tick: function(container, window, content, data) {
this.container.validateAll();
this.container.sendChanges();
   },
   getScreenName(){
return "main";
},
   getScreenByName(){
return placerUI;
},
});




// file: blocks/usable/Futurator.js

/*
var Gen0mesh = new RenderMesh(); 
Gen0mesh.setBlockTexture("Futurator1",0); 
Gen0mesh.importFromFile(__dir__+"/models/Futurator.obj","obj",null); 
IDRegistry.genBlockID("future_generator"); 
Block.createBlock("future_generator", [ 
 {name: "Coal Generator", texture: [["Futurator1", 0],["Futurator1", 1],["Futurator1", 2],["Futurator1", 3],["Futurator1", 4],["Futurator1", 5]], inCreative: true} 
]); 
var Gen0render = new ICRender.Model(); 
Gen0render.addEntry(new BlockRenderer.Model(Gen0mesh)); 
BlockRenderer.setStaticICRender(BlockID.future_generator,0,Gen0render);

*/

var FuturatorMesh = new RenderMesh();
FuturatorMesh.setBlockTexture("Futurator1",0);
FuturatorMesh.importFromFile(__dir__+"/models/Futurator.obj","obj",null);
IDRegistry.genBlockID("future_generator");
Block.createBlock("future_generator", [
    {name: "Generator", texture: [["Futurator1", 0],["Futurator1", 0],["Futurator1", 0],["Futurator1", 0],["Futurator1", 0],["Futurator1", 0]], inCreative: true}
]);
var FuturatorRender = new ICRender.Model();
FuturatorRender.addEntry(new BlockRenderer.Model(FuturatorMesh));
BlockRenderer.setStaticICRender(BlockID.future_generator,0,FuturatorRender);


Recipes.addShaped({id: BlockID.future_generator, count: 1, data: 0},
	["iii", "spn", "ioi"],
	['i', 265, 0, 'n', ItemID.neon_ingot, 0, 'p', VanillaBlockID.piston, 0, 'o', VanillaBlockID.furnace, 0, 's', ItemID.coppercoil, 0]
);



let FutureGenUI = new UI.StandartWindow({standart:
{header:
{text:{text:
Translation.translate("Генератор будущего")
}},
  inventory:
{standart:true},
  background:
{standart:true}}
,drawing:[
   /*" {type: "button",x: 268,y: 190, bitmap: "coalGener",scale: 3.8},     {type: "button", x:550 ,y: 70, bitmap:"slace_en_0",scale : 3}, {type: "bitmap", x:690 ,y: 70, bitmap:"en_noy",scale : 3}*/
    ],
    elements:{
    	coaldraw:
    	{type:"slot",x:355,y:120,size:70, bitmap:"coalGener"},
    	energiaSlotiche:
    {type: "slot", x:268,y: 190, bitmap:"futockslot",scale : 3.8, direction: 1}, 
    	energy:    	{type:"scale",x:455,y:260,scale:70,direction:1,bitmap: "energiabar"},  Fire : {type: "scale", x:550 ,y: 70, bitmap:"fire_scale_1",scale : 3, direction: 1},slotcoal : {type: "slot", x:690,y: 70,size:70}, 
    	ELECTRIC: {type: "text", x: 565, y: 113, width: 100, height: 30, text: "Space Joule" },
    	coordsButton1: { 
type: "button", 
x: 300, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].x -= 1; 
alert(JSON.stringify("x: "+content.elements["coalGener"].x)); 
}}},
coordsButton2: { 
type: "button", 
x: 400, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].x += 1; 
alert(JSON.stringify("x: "+content.elements["coalGener"].x)); 
}}},
coordsButton3: { 
type: "button", 
x: 350, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].y += 1; 
alert(JSON.stringify("y: "+content.elements["coalGener"].y)); 
}}},
coordsButton4: { 
type: "button", 
x: 350, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].y -= 1; 
alert(JSON.stringify("y "+content.elements["coalGener"].y)); 
}}},
coordsButton5: { 
type: "button", 
x: 550, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].size -= 1; 
alert(JSON.stringify("size: "+content.elements["coalGener"].size)); 
}}},
coordsButton6: { 
type: "button", 
x: 550, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["coalGener"].size += 1; 
alert(JSON.stringify("size: "+content.elements["coalGener"].size)); 
}}}
    }
  }
);

TileEntity.registerPrototype(BlockID.future_generator, {
   useNetworkItemContainer: true,
   defaultValues: {
   },

   tick: function(container, window, content, data) {
      this.container.sendChanges();
   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return FutureGenUI;
},
});




// file: blocks/usable/techtable.js

IDRegistry.genBlockID("techtable");
Block.createBlockWithRotation("techtable", [{
    name: "Techtable",
    texture: [
        ["iron_block", 0],
        ["techcraftingtable_top", 0],
        ["techcraftingtable_rechts", 0],
        ["techcraftingtable_front", 0],
        ["techcraftingtable_hinten", 0],
        ["techcraftingtable_links", 0]
    ],
    inCreative: true
}], iron_block_type);

Recipes.addShaped({id: BlockID.techtable, count: 1, data: 0},
	["iii", "iki", "ici"],
	['i', 265, 0, 'k', VanillaBlockID.crafting_table, 0, 'c', VanillaBlockID.chest, 0]
);

var techtableUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Techtable. Is not working"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [],
	
    elements: {
        "slotResult": {type: "slot", x: 787, y: 153, /*clicker: {
				onClick: function(position, container, tileEntity){
    container.sendEvent("click", {});
				},
				onLongClick: function(position, container, tileEntity){
   	container.sendEvent("longclick", {});
     }}
    */}}
});
{
    let content = techtableUI.getContent();

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let slotName = "slot" + (i * 3 + j);
            content.elements[slotName] = {
                type: "slot", x: 491 + j * 60, y: 88 + i * 60};
        }
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 9; j++) {
            content.elements["slotResources" + (i * 9 + j)] = {type: "slot", x: 335 + j * 60, y: 281 + i * 60};
        }
    }
}

TileEntity.registerPrototype(BlockID.techtable, {
/*
	containerEvents: {
 	click(container, window, content, data){
					var result = Recipes.provideRecipe(container, prefix);
					if (result){
			 		Player.getInventory().addItem(result.id, result.count, result.data);
					}
  },
 	longclick(container, window, content, data){
					var result = Recipes.provideRecipe(container, prefix);
					if (result){
			 		Player.getInventory().addItem(result.id, result.count, result.data);
					}
  }
},
	client: {
		containerEvents: {
			setResult(container, window, content, data){
				if(content) {
     container.setSlot("slotResult", data.id, data.count, data.data);
   }
 		}
  }
 },
*/
   useNetworkItemContainer: true,
   defaultValues: {
   click: 0
   },

   tick: function(container, window, content, data) {
/*if (content){
			//Узнаем результат крафта
			var res = Recipes.getRecipeResult(this.container, "workbench");
			//Если он есть
			if (res){
			//Отрисовываем его
				this.container.sendEvent("setResult", {id: res.id, count: res.count, data: res.data});
			}
			else{
				//Иначе рисуем пустой слот
				this.container.sendEvent("setResult", {id: 0, count: 0, data: 0});
			}
		}*/
      this.container.sendChanges();
   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return techtableUI;
},
});




// file: blocks/usable/researcher.js

IDRegistry.genBlockID("researcher");
let mcolors = ["w","g","r","s","b","e","o","y","m","n","c","l","u","p","a","i"];
let researchers = [];
for(i in colors) {
 researchers.push({
  name: "Researcher",
  texture: [
   ["color_iron_"+colors[i], 0],
   ["forschertop_"+mcolors[i], 0],
   ["forscherhinten_"+mcolors[i], 0],
   ["forscherfront_"+mcolors[i], 0],
   ["color_iron_"+colors[i], 0],
   ["color_iron_"+colors[i], 0]
  ],
  inCreative: true
  })
}

Block.createBlockWithRotation("researcher", researchers, iron_block_type);

let xrys = [ItemID.crystal_retium_1, ItemID.crystal_bioterium_1, ItemID.crystal_alutin_1, ItemID.crystal_glowtite_1, ItemID.crystal_neon_1]

for(s in colors) {
 for(m in xrys) {
  Recipes.addShaped({id: BlockID.researcher, count: 1, data: s*4},
	["ckc", "pbi", "zez"],
	['p', VanillaItemID.paper, 0, 'k', 102, 0, 'c', xrys[m], 0, 'b', BlockID[colors[s]+"_iron_block"], 0, 'i', VanillaBlockID.piston, -1, 'z', ItemID.zinkbarren, 0, 'e', ItemID.eisenteile, 0])
}}
var researcherUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Researcher"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [
		{
type: "bitmap", 
x: 350, 
y: 30, 
bitmap: "researcher_gui", 
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            x: 355,
            y: 93,
            size: 66,
            bitmap: "researcher_slot1_0"
        },
        slot2: {
            type: "slot",
            x: 440,
            y: 93,
            size: 66,
            bitmap: "researcher_slot1_0"
        },
        slot3: {
            type: "slot",
            x: 524,
            y: 93,
            size: 66,
            bitmap: "researcher_slot1_0"
        },
        slot4: {
            type: "slot",
            x: 609,
            y: 93,
            size: 66,
            bitmap: "researcher_slot1_0"
        },

        slot5: {
            type: "slot",
            x: 727,
            y: 105,
            size: 55,
            bitmap: "researcher_slot2_0"
        },
        button1: {
            type: "slot",
            x: 689,
            y: 198,
            size: 141,
            bitmap: "researcher_button1_0",
            clicker: {
                onClick: function(pos,container,tile,window,canvas,scale) {
                    container.sendEvent("click", {});
                }
            }
        },
        button2: {
            type: "slot",
            x: 721,
            y: 35,
            size: 56,
            bitmap: "researcher_button2_0",
            clicker: {
                onClick: function(pos,container,tile,window,canvas,scale) {
                    //container.sendEvent("click", {});
                }
            }
        },
        button3: {
            type: "slot",
            x: 777,
            y: 35,
            size: 56,
            bitmap: "researcher_button3_0",
            clicker: {
                onClick: function(pos,container,tile,window,canvas,scale) {
                    //container.sendEvent("click", {});
                }
            }
        },
        scale1: {
            type: "scale",
            bitmap: "researcher_scale1",
            direction: 1,
            x: 376,
            y: 162,
            scale: 3
        },
        scale2: {
            type: "scale",
            bitmap: "researcher_scale2",
            direction: 1,
            x: 460,
            y: 162,
            scale: 3
        },
        scale3: {
            type: "scale",
            bitmap: "researcher_scale3",
            direction: 1,
            x: 544,
            y: 162,
            scale: 3
        },
        scale4: {
            type: "scale",
            bitmap: "researcher_scale4",
            direction: 1,
            x: 629,
            y: 162,
            scale: 3
        },
/*coordsButton1: { 
type: "button", 
x: 300, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["scale1"].x -= 1; 
alert(JSON.stringify("x: "+content.elements["scale1"].x)); 
}}},
coordsButton2: { 
type: "button", 
x: 400, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["scale1"].x += 1; 
alert(JSON.stringify("x: "+content.elements["scale1"].x)); 
}}},
coordsButton3: { 
type: "button", 
x: 350, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["scale1"].y += 1; 
alert(JSON.stringify("y: "+content.elements["scale1"].y)); 
}}},
coordsButton4: { 
type: "button", 
x: 350, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["scale1"].y -= 1; 
alert(JSON.stringify("y "+content.elements["scale1"].y)); 
}}},
coordsButton5: { 
type: "button", 
x: 550, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["scale1"].size -= 1; 
alert(JSON.stringify("size: "+content.elements["scale1"].size)); 
}}},
coordsButton6: { 
type: "button", 
x: 550, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["scale1"].size += 1; 
alert(JSON.stringify("size: "+content.elements["scale1"].size)); 
}}}*/
   }
});

IDRegistry.genItemID("research_blueprint");
IDRegistry.genItemID("research_blueprint_1");
Item.createItem("research_blueprint", "Reaserch blueprint", {name: "blueprint_research", meta: 0}, {isTech: false, stack: 64});
Item.createItem("research_blueprint_1", "Reaserch blueprint", {name: "crystal_blueprint_research", meta: 1}, {isTech: false, stack: 64});

let blueprints = {
1: ItemID.research_blueprint_1
}

/*for(var a = 1; a < 11; a++) {
 var s = a
 Item.createItem("research_blueprint", "Reaserch blueprint", {name: "crystal_blueprint_research", meta: s}, {isTech: false, stack: 64});
}
*/
MachineRecipeRegistry.registerRecipesFor("researcher", {
  1: {item1: 61, count1: 3, time: 150, ResultFunction: function(){
alert("industrial furnace researched");
}}
 }, true);

TileEntity.registerPrototype(BlockID.researcher, {
	client: {
  containerEvents: {
   setSlot(container, window, content, data){
    if(content)
     content.elements[data.name].bitmap = data.texture;
   }
  }
 },
 containerEvents: {
  click(container, window, content, data) {
    this.data.click = this.data.click + 1;
  }
 },
   useNetworkItemContainer: true,
   defaultValues: {
      msp: 0,
      mxp: 0,
      mft: 0,
      mt: 0,
      sp: 0,
      xp: 0,
      ft: 0,
      t: 0,
      click: 0,
      i1: 0,
      i2: 0,
      i3: 0,
      i4: 0,
      res: 0
   },

   tick: function() {
     if(this.data.click == 1) {
       this.data.click == 0;
       var item5 = this.container.getSlot("slot5").id;
       for(var m = 1; m < 10; m++) {
         if(item5 == blueprints[m]) {
           this.container.setSlot("slot5", 0, 0, 0);
           this.data.result = MachineRecipeRegistry.getRecipeResult("researcher", m);
           if(this.data.result.item1 > 0  && this.data.result.count1 > 0) {
             this.container.setSlot("slot1", this.data.result.item1, -1*this.data.result.count1, 0);
             this.data.i1 = true
           } else {
             alert("Error in RegisterRecipesFor. item1 and count1 required");
           }
           if(this.data.result.time > 0) {
             this.container.setScale("scale1", this.data.t/this.data.result.time);
             this.data.mt = this.data.result.time
           } else {
             alert("Error in RegisterRecipesFor. time required");
           }
           if(this.data.result.item2 > 0 && this.data.result.count2 > 0) {
             this.container.setSlot("slot2", this.data.result.item2, -1*this.data.result.count2, 0);
             this.data.i2 = true
           }
           if(this.data.result.energy) {
             this.container.setScale("scale2", this.data.ft/this.data.result.energy);
             this.data.mft = this.data.result.energy
           }
           if(this.data.result.item3 > 0 && this.data.result.count3 > 0) {
             this.container.setSlot("slot3", this.data.result.item3, -1*this.data.result.count3, 0);
             this.data.i3 = true
           }
           if(this.data.result.support) {
             this.container.setScale("scale3", this.data.sp/this.data.result.support);
             this.data.msp = this.data.result.support
           }
           if(this.data.result.item4 > 0 && this.data.result.count4 > 0) {
             this.container.setSlot("slot2", this.data.result.item4, -1*this.data.result.count4, 0);
             this.data.i4 = true
           }
           if(this.data.result.xp) {
             this.container.setScale("scale4", this.data.xp/this.data.result.xp);
             this.data.mxp = this.data.result.xp
           }
         }
       }
     }
     if(this.data.i1 == 1 && this.data.mt > 0 && this.container.getSlot("slot1").count >= 0) {
       this.data.t++;
       this.container.sendEvent("setSlot", {name: "slot1", texture: "researcher_slot1_0"});
       this.container.setScale("scale1", this.data.t/this.data.mt);
     } else {
       if(this.data.i4 == 1) {
         this.container.sendEvent("setSlot", {name: "slot1", texture: "researcher_slot1_1"});
       }
     }
     if(this.data.i2 == 1 && this.data.mft > 0 && this.container.getSlot("slot2").count >= 0) {
       this.data.ft++;
       this.container.sendEvent("setSlot", {name: "slot2", texture: "researcher_slot1_0"});
       this.container.setScale("scale2", this.data.ft/this.data.mft);
     } else {
       if(this.data.i2 == 1) {
         this.container.sendEvent("setSlot", {name: "slot2", texture: "researcher_slot1_1"});
       }
     }
     if(this.data.i3 == 1 && this.data.msp > 0 && this.container.getSlot("slot3").count >= 0) {
       this.data.sp++;
       this.container.sendEvent("setSlot", {name: "slot3", texture: "researcher_slot1_0"});
       this.container.setScale("scale3", this.data.sp/this.data.msp);
     } else {
       if(this.data.i3 == 1) {
         this.container.sendEvent("setSlot", {name: "slot3", texture: "researcher_slot1_1"});
       }
     }
     if(this.data.i4 == 1 && this.data.mxp > 0 && this.container.getSlot("slot4").count >= 0) {
       this.data.xp++;
       this.container.sendEvent("setSlot", {name: "slot4", texture: "researcher_slot1_0"});
       this.container.setScale("scale4", this.data.xp/this.data.mxp);
     } else {
       if(this.data.i4 == 1) {
         this.container.sendEvent("setSlot", {name: "slot4", texture: "researcher_slot1_1"});
       }
     }
     if(this.data.mxp <= this.data.xp && this.data.msp <= this.data.sp && this.data.mft <= this.data.ft && this.data.mt <= this.data.t && this.data.i1 == 1) {
       this.container.setScale("scale1", 0/1);
       this.container.setScale("scale2", 0/1);
       this.container.setScale("scale3", 0/1);
       this.container.setScale("scale4", 0/1);
       this.data.i1 = this.data.i2 = this.data.i3 = this.data.i4 = 0;
       this.data.mt = this.data.mft = this.data.msp = this.data.mxp = 0;
       this.data.t = this.data.ft = this.data.sp = this.data.xp = 0;
       this.data.result.ResultFunction();
       this.data.result = 0;
       this.container.validateAll();
     }
     this.container.sendChanges();
     
/*
 	geoMode(container, window, content, data){
			this.data.geo = (this.data.geo + 1) % 2;
		},
container.sendEvent("bioMode", {});
      this.container.sendChanges()
      var slot1 = this.container.getSlot("slot1");
      this.container.setScale("scale1", this.data.progress/200);
      var recipe1 = MachineRecipeRegistry.hasRecipeFor("part_press", item1);
      if(recipe1) {
         var result2 = MachineRecipeRegistry.getRecipeResult("part_press", 123);
      this.container.setSlot("slot4", 123, 7, 0);
      this.container.validateAll()
*/
   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return researcherUI;
},
});




// file: blocks/usable/industrial_furnace.js

IDRegistry.genBlockID("industrial_furnace");
Block.createBlockWithRotation("industrial_furnace", [{
    name: "Industrial furnace",
    texture: [
        ["industrieofen", 0],
        ["industrieofen", 0],
        ["industrieofen", 0],
        ["industrieofen_vorne_aus", 0],
        ["industrieofen_links", 0],
        ["industrieofen_rechts", 0]
    ],
    inCreative: true
},{
    name: "Industrial furnace",
    texture: [
        ["industrieofen", 0],
        ["industrieofen", 0],
        ["industrieofen", 0],
        ["industrieofen_vorne_an", 0],
        ["industrieofen_links", 0],
        ["industrieofen_rechts", 0]
    ],
    inCreative: false
}], iron_block_type);

Recipes.addShaped({id: BlockID.industrial_furnace, count: 1, data: 0},
	["tit", "fff", "iti"],
	['t', ItemID.tank_lack0, 0, 'i', 265, 0, 'f', VanillaBlockID.furnace, 0]
);

var indFurnaceUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Industrial Furnace (WIP)"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [
		{
type: "bitmap", 
x: 350, 
y: 80, 
bitmap: "ind_furnace_drawing", 
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            x: 357,
            y: 45,
            size: 52,
            bitmap: "ind_furnace_slot1"
        },
        slot2: {
            type: "slot",
            x: 432,
            y: 169,
            size: 52,
            bitmap: "ind_furnace_slot2"
        },
        slot3: {
            type: "slot",
            x: 519,
            y: 169,
            size: 52,
            bitmap: "ind_furnace_slot2"
        },
        slot4: {
            type: "slot",
            x: 606,
            y: 169,
            size: 52,
            bitmap: "ind_furnace_slot2"
        },
        slot5: {
            type: "slot",
            x: 788,
            y: 150,
            size: 52,
            bitmap: "ind_furnace_slot3"
        },
        slot6: {
            type: "slot",
            x: 788,
            y: 202,
            size: 52,
            bitmap: "ind_furnace_slot3"
        },
        slot7: {
            type: "slot",
            x: 788,
            y: 254,
            size: 52,
            bitmap: "ind_furnace_slot3"
        },
        slot8: {
            type: "slot",
            x: 680,
            y: 261,
            size: 52,
            bitmap: "ind_furnace_slot3"
        },
        scale1: {
            type: "scale",
            bitmap: "ind_furnace_scale1",
            direction: 1,
            x: 355,
            y: 110,
            scale: 3
        },
        scale2: {
            type: "scale",
            bitmap: "ind_furnace_scale2",
            direction: 1,
            x: 446,
            y: 242,
            scale: 3
        },
        scale3: {
            type: "scale",
            bitmap: "ind_furnace_scale2",
            direction: 1,
            x: 533,
            y: 242,
            scale: 3
        },
        scale4: {
            type: "scale",
            bitmap: "ind_furnace_scale2",
            direction: 1,
            x: 620,
            y: 242,
            scale: 3
        },
        scale5: {
            type: "scale",
            bitmap: "ind_furnace_scale3",
            direction: 0,
            x: 674,
            y: 148,
            scale: 3
        },
/*coordsButton1: { 
type: "button", 
x: 300, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].x -= 1; 
alert(JSON.stringify("x: "+content.elements["slot1"].x)); 
}}},
coordsButton2: { 
type: "button", 
x: 400, 
y: 290, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].x += 1; 
alert(JSON.stringify("x: "+content.elements["slot1"].x)); 
}}},
coordsButton3: { 
type: "button", 
x: 350, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].y += 1; 
alert(JSON.stringify("y: "+content.elements["slot1"].y)); 
}}},
coordsButton4: { 
type: "button", 
x: 350, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].y -= 1; 
alert(JSON.stringify("y "+content.elements["slot1"].y)); 
}}},
coordsButton5: { 
type: "button", 
x: 550, 
y: 340, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].size -= 1; 
alert(JSON.stringify("size: "+content.elements["slot1"].size)); 
}}},
coordsButton6: { 
type: "button", 
x: 550, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["slot1"].size += 1; 
alert(JSON.stringify("size: "+content.elements["slot1"].size)); 
}}}*/
   }
});
/*
var recipes = {
items: [ItemID.crystal_retium_1, ItemID.crystal_bioterium_1, ItemID.crystal_alutin_1, ItemID.crystal_glowtite_1, ItemID.crystal_neon_1, ItemID.kupferbarren, BlockID.bauxit_erz, 263, 265],
ingot: [ItemID.zinkbarren, ItemID.zinnbarren],
sand: [BlockID.retium_granulat, BlockID.bioterium_granulat, BlockID.alutin_granulat, BlockID.glowtite_granulat, BlockID.neon_granulat, 12]
}*/

var recipes = {
items: [ItemID.crystal_retium_1, ItemID.crystal_bioterium_1, ItemID.crystal_alutin_1, ItemID.crystal_glowtite_1, ItemID.crystal_neon_1, ItemID.kupferbarren, BlockID.bauxit_erz, 263, 265],
ingot: [ItemID.zinkbarren, ItemID.zinnbarren],
sand: [BlockID.retium_granulat, BlockID.bioterium_granulat, BlockID.alutin_granulat, BlockID.glowtite_granulat, BlockID.neon_granulat, 12,
ModAPI.addAPICallback("SpacesAPI", function(api){BlockID.vic_a1_sand, BlockID.vic_tantros_sand})]
}

MachineRecipeRegistry.registerRecipesFor("ind_furnace", {
  "ItemID.crystal_retium_1": {status: "r"},
  "ItemID.crystal_bioterium_1": {status: "b"},
  "ItemID.crystal_alutin_1": {status: "a"},
  "ItemID.crystal_glowtite_1": {status: "g"},
  "ItemID.crystal_neon_1": {status: "n"},
  "ItemID.kupferbarren": {status: "k"},
  "BlockID.bauxit_erz": {status: "e"},
  263: {status: "c"},
  265: {status: "i"},
  12: {status: "s"},
  264: {status: "z"}}, true);
let gear = {
  "scs": {status: "result", result: ItemID.silizium, count: 2},
  "css": {status: "result", result: ItemID.silizium, count: 2},
  "ssc": {status: "result", result: ItemID.silizium, count: 2},
  "rrc": {status: "result", result: ItemID.retium_ingot, count: 1},
  "rcr": {status: "result", result: ItemID.retium_ingot, count: 1},
  "crr": {status: "result", result: ItemID.retium_ingot, count: 1},
  "bbc": {status: "result", result: ItemID.bioterium_ingot, count: 1},
  "bcb": {status: "result", result: ItemID.bioterium_ingot, count: 1},
  "cbb": {status: "result", result: ItemID.bioterium_ingot, count: 1},
  "aac": {status: "result", result: ItemID.aluminiumplatten, count: 1},
  "aca": {status: "result", result: ItemID.aluminiumplatten, count: 1},
  "caa": {status: "result", result: ItemID.aluminiumplatten, count: 1},
  "ggc": {status: "result", result: ItemID.glowtit_ingot, count: 1},
  "gcg": {status: "result", result: ItemID.glowtit_ingot, count: 1},
  "cgg": {status: "result", result: ItemID.glowtit_ingot, count: 1},
  "nnc": {status: "result", result: ItemID.neon_ingot, count: 1},
  "ncn": {status: "result", result: ItemID.neon_ingot, count: 1},
  "cnn": {status: "result", result: ItemID.neon_ingot, count: 1},
  "kiz": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "zki": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "izk": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "kzi": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "ikz": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "zik": {status: "result", result: ItemID.verbuntmetall, count: 6},
  "ee": {status: "result", result: ItemID.aluminiumplatten, count: 1},
}

TileEntity.registerPrototype(BlockID.industrial_furnace, {
	client: {
  containerEvents: {
   setSlot(container, window, content, data){
    if(content)
     content.elements[data.name].bitmap = data.texture;
   }
  }
 },
 containerEvents: {
  click(container, window, content, data) {
    this.data.click = this.data.click + 1;
  }
 },
   useNetworkItemContainer: true,
   defaultValues: {
      lava: 0,
      progress: 0,
      s1: 0,
      s2: 0,
      s3: 0,
      solid: 0,
      res: 0,
      cous: 0,
      sdata: 0
   },

   tick: function() {
    var slot2 = this.container.getSlot("slot2");
    var slot3 = this.container.getSlot("slot3");
    var slot4 = this.container.getSlot("slot4");
    var item2 = slot2.id||0;
    var item3 = slot3.id||0;
    var item4 = slot4.id||0;
    if(this.data.lava >= 10) {
     for(i in recipes.items) {
      if(item2 == recipes.items[i]) {
       this.data.s1++;
       var result1 = MachineRecipeRegistry.getRecipeResult("ind_furnace", item2);
      }
      if(item3 == recipes.items[i]) {
       this.data.s2++;
       var result2 = MachineRecipeRegistry.getRecipeResult("ind_furnace", item3);
      }
      if(item4 == recipes.items[i]) {
       this.data.s3++;
       var result3 = MachineRecipeRegistry.getRecipeResult("ind_furnace", item4);
      }
     }
     for(l in recipes.sand) {
      if(item2 == recipes.sand[l]) {
       this.data.s1++;
       var result1 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 12);
      }
      if(item3 == recipes.sand[l]) {
       this.data.s2++;
       var result2 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 12);
      }
      if(item4 == recipes.sand[l]) {
       this.data.s3++;
       var result3 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 12);
      }
     }
     for(m in recipes.ingot) {
      if(item2 == recipes.ingot[m]) {
       this.data.s1++;
       var result1 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 264);
      }
      if(item3 == recipes.ingot[m]) {
       this.data.s2++;
       var result2 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 264);
      }
      if(item4 == recipes.ingot[m]) {
       this.data.s3++;
       var result3 = MachineRecipeRegistry.getRecipeResult("ind_furnace", 264);
      }
     }
     if((result1 || {}).status || 0) {
      var r1 = result1.status
     } else {
      var r1 = 0;
     }
     if((result2 || {}).status || 0) {
      var r2 = result2.status
     } else {
      var r2 = 0;
     }
     if((result3 || {}).status || 0) {
      var r3 = result3.status
     } else {
      var r3 = 0;
     }
     if(r1==0) {
      var lol = gear[r2+r3]||0;
     }
     if(r2==0) {
      var lol = gear[r1+r3]||0;
     }
     if(r3==0) {
      var lol = gear[r1+r2]||0;
     }
     if(r1 != 0 && r2 != 0 && r3 != 0) {
      var lol = gear[""+r1+r2+r3]||0;
     }
     this.data.cous = (lol || {}).count||0;
     this.data.res = (lol || {}).result||0;
    }
    this.container.setScale("scale5", this.data.progress/400);
    this.container.setScale("scale2", this.data.s1/1);
    this.container.setScale("scale3", this.data.s2/1);
    this.container.setScale("scale4", this.data.s3/1);
    if(slot2.count == 0) {
     this.data.s1 = 0;
    }
    if(slot3.count == 0) {
     this.data.s2 = 0;
    }
    if(slot4.count == 0) {
     this.data.s3 = 0;
    }
    if(this.container.getSlot("slot1").id == 843 && this.data.lava <= 2000) {
     this.container.setSlot("slot1", 325, 1, 0);
     this.data.lava += 1000;
    }
    this.container.setScale("scale1", this.data.lava/3000);
    var slot5 = this.container.getSlot("slot5");
    var slot6 = this.container.getSlot("slot6");
    var slot7 = this.container.getSlot("slot7");
    if(this.data.res != 0 && slot5.count <= 64-this.data.cous && slot6.count <= 64-this.data.cous && slot7.count <= 64-this.data.cous) {
     this.data.progress++;
     if(this.data.progress >= 400) {
      this.data.progress = 0;
      this.data.lava -= 10;
      this.container.setSlot("slot2", slot2.id, slot2.count-1, 0);
      this.container.setSlot("slot3", slot3.id, slot3.count-1, 0);
      this.container.setSlot("slot4", slot4.id, slot4.count-1, 0);
      if((slot5.id == this.data.res || slot5.id == 0) && slot5.count <= 64-this.data.cous) {
       if(slot5.id) {
        this.container.setSlot("slot5", slot5.id, slot5.count+this.data.cous, 0);
       } else {
        this.container.setSlot("slot5", this.data.res, this.data.cous, 0);
       }
      } else if((slot6.id == this.data.res || slot6.id == 0) && slot6.count <= 64-this.data.cous) {
       if(slot6.id) {
        this.container.setSlot("slot6", slot6.id, slot6.count+this.data.cous, 0);
       } else {
        this.container.setSlot("slot6", this.data.res, this.data.cous, 0);
       }
      } else if((slot7.id == this.data.res || slot7.id == 0) && slot7.count <= 64-this.data.cous) {
       if(slot7.id) {
        this.container.setSlot("slot7", slot7.id, slot7.count+this.data.cous, 0);
       } else {
        this.container.setSlot("slot7", this.data.res, this.data.cous, 0);
       }
      }
     }
    }
    if(this.data.progress > 0 && this.data.sdata == 0) {
     this.data.sdata = 1;
     this.blockSource.setBlock(this.x, this.y, this.z, BlockID.industrial_furnace, this.blockSource.getBlockData(this.x, this.y, this.z)+4);
    } else if(this.data.sdata == 1 && this.data.progress == 0) {
     this.data.sdata = 0;
     this.blockSource.setBlock(this.x, this.y, this.z, BlockID.industrial_furnace, this.blockSource.getBlockData(this.x, this.y, this.z)-4);
    }
    if(this.data.lava >= 1000) {
     this.data.solid++
     if(this.data.solid >= 25600) {
      this.data.lava -= 1000
      var slot8 = this.container.getSlot("slot8");
      this.container.setSlot("slot8", 49, (slot8||{count: 0}).count, 0);
     }
    } else {
     this.data.solid = 0;
    }
    this.container.validateAll();
    this.container.sendChanges();
/*
 	geoMode(container, window, content, data){
			this.data.geo = (this.data.geo + 1) % 2;
		},
container.sendEvent("bioMode", {});
      this.container.sendChanges();
      var slot1 = this.container.getSlot("slot1");
      var recipe1 = MachineRecipeRegistry.hasRecipeFor("part_press", item1);
      if(recipe1) {
         var result2 = MachineRecipeRegistry.getRecipeResult("part_press", 123);
      this.container.setSlot("slot4", 123, 7, 0);
      this.container.validateAll();
*/
   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return indFurnaceUI;
},
});




// file: blocks/usable/part_press.js

IDRegistry.genBlockID("part_press");
Block.createBlockWithRotation("part_press", [{
    name: "Part press",
    texture: [
        ["iron_block", 0],
        ["stanze_top", 0],
        ["stanze", 0],
        ["stanze", 0],
        ["stanze", 0],
        ["stanze", 0]
    ],
    inCreative: true
}], iron_block_type);

Recipes.addShaped({id: BlockID.part_press, count: 1, data: 0},
	["ipi", "iki", "ipi"],
	['i', 265, 0, 'k', VanillaBlockID.iron_bars, 0, 'p', VanillaBlockID.piston, -1]
);

var partPressUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Part Press"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [
		{
type: "bitmap", 
x: 547, 
y: 160, 
bitmap: "press_scale_0", 
scale: 4
},
		{
type: "bitmap", 
x: 350, 
y: 160,
bitmap: "fire_scale_0",
scale: 4.5
}
],
	
    elements: {
        slot1: {
            type: "slot",
            x: 550,
            y: 90,
            size: 70
        },
        slot2: {
            type: "slot",
            x: 620,
            y: 90,
            size: 70
        },
        slot3: {
            type: "slot",
            x: 550,
            y: 255,
            size: 70
        },
        slot4: {
            type: "slot",
            x: 620,
            y: 255,
            size: 70
        },

        slot5: {
            type: "slot",
            x: 350,
            y: 255,
            size: 70
        },
        scale1: {
            type: "scale",
            bitmap: "press_scale_1",
            direction: 3,
            x: 545,
            y: 160,
            scale: 4
        },
        scale2: {
            type: "scale",
            bitmap: "fire_scale_1",
            direction: 1,
            x: 350,
            y: 160,
            scale: 4.5
        }
    }
});

MachineRecipeRegistry.registerRecipesFor("part_press", {
  265: {id: ItemID.eisenteile, count: 4},
  264: {id: ItemID.diamandteile, count: 4},
  406: {id: ItemID.quarzteile, count: 4},
  266: {id: ItemID.goldteile, count: 4},
  "ItemID.kupferbarren": {id: ItemID.kupferteile, count: 4},
  "ItemID.neon_ingot": {id: ItemID.neonteile, count: 4},
 }, true);


TileEntity.registerPrototype(BlockID.part_press, {
   useNetworkItemContainer: true,
   defaultValues: {
      burn: 0,
      burnMax: 0,
      progress: 0,
      progressMax: 100,
      isActive: false
   },

   tick: function() {
      this.container.sendChanges()
      var slot1 = this.container.getSlot("slot1");
      var slot2 = this.container.getSlot("slot2");
      var slot3 = this.container.getSlot("slot3");
      var slot4 = this.container.getSlot("slot4");
      var slot5 = this.container.getSlot("slot5");
      this.container.setScale("scale2", this.data.burn/1000);
      this.container.setScale("scale1", this.data.progress/200);
      var item1 = slot1.id
      var item2 = slot2.id
      var count1 = slot1.count
      var count2 = slot2.count
      var count3 = slot3.count
      var count4 = slot4.count
      var item3 = slot3.id
      var item4 = slot4.id
      /*let data3 = slot3.data
      let data4 = slot4.data
      let extra3 = slot3.extra
      let extra4 = slot4.extra*/
      var item5 = slot5.id
      var count5 = slot5.count

      if(this.data.burn > 0) {
         this.data.burn --;
      }

      var recipe1 = MachineRecipeRegistry.hasRecipeFor("part_press", item1);
      var recipe2 = MachineRecipeRegistry.hasRecipeFor("part_press", item2);
      if(recipe1) {
         var result1 = MachineRecipeRegistry.getRecipeResult("part_press", item1);
      }
      if(recipe2) {
         var result2 = MachineRecipeRegistry.getRecipeResult("part_press", item2);
      }
      if(recipe1 == true || recipe2 == true) {
         if(item5==263 && this.data.burn <= 0) {
            this.data.burn += 1000;
            this.container.setSlot("slot5", 263, count5 - 1, 0);
      }}
      if(this.data.burn > 0 && count3 <= 60 && count4 <= 60) {
         if(recipe1 == true || recipe2 == true) {
         this.data.progress ++;
      }}
      if(this.data.progress >= 200) {
         this.data.progress = 0;
         if (recipe1 == true) {
            if (item3 == 0 || result1.id == item3) {
               this.container.setSlot("slot1", item1, count1 - 1, 0);

               this.container.setSlot("slot3", result1.id, count3 + result1.count, 0);
         }}
         if (recipe2 == true) {
            if (item4 == 0 || result2.id == item4) {
               this.container.setSlot("slot2", item2, count2 - 1, 0);
               this.container.setSlot("slot4", result2.id, count4 + result2.count, 0);
         }}
      }
      this.container.validateAll()

   },

   getScreenName(){
return "main";
},
   getScreenByName(){
return partPressUI;
},
});











// file: blocks/usable/scanner.js

IDRegistry.genBlockID("scanner");

let scanners = [];
for(i in colors) {
 scanners.push({
  name: "Scanner",
  texture: [
   ["color_iron_"+colors[i], 0],
   ["scanner_top_"+mcolors[i]+"_an", 0],
   ["luftung_"+mcolors[i], 0],
   ["scanner_"+mcolors[i]+"_an", 0],
   ["color_iron_"+colors[i], 0],
   ["color_iron_"+colors[i], 0]
  ],
  inCreative: true
  })
}

Block.createBlockWithRotation("scanner", scanners, iron_block_type);

for(j in colors) {
 for(m in xrys) {
  Recipes.addShaped({id: BlockID.scanner, count: 1, data: j*4},
	["csc", "ibi", "kek"],
	['s', ItemID.E_scanner, 0, 'k', ItemID.coppercoil, 0, 'c', xrys[m], 0, 'b', BlockID[colors[j]+"_iron_block"], 0, 'i', 265, 0, 'e', ItemID.eisenteile, 0]);
 }
}
var scannerUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Scanner"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
	
    drawing: [
		{
type: "bitmap", 
x: 350, 
y: 30, 
bitmap: "scanner_gui_0", 
scale: 3
}
],
	
    elements: {
        slot1: {
            type: "slot",
            bitmap: "scanner_slot_0",
            x: 595,
            y: 315,
            size: 66
        },
        slot2: {
            type: "slot",
            bitmap: "scanner_slot_1",
            x: 356,
            y: 45,
            size: 66
        },
button1: { 
type: "button", 
x: 667, 
y: 315, 
scale: 3, 
bitmap: "scanner_button_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
	let leaner = new UI.Container();
 leaner.openAs(SCANNER_L);
 let SCANNER = new UI.Container();
SCANNER.close(ScannerUI);

}}},
button2: { 
type: "button", 
x: 530, 
y: 154, 
scale: 3, 
bitmap: "scanner_button2_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
container.sendEvent("scanclick", {});
}}},
status: { 
type: "button", 
x: 490, 
y: 104, 
scale: 3, 
bitmap: "status_0"
},
buttongeo: { 
type: "button", 
x: 719, 
y: 45, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_geo_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("geoMode", {});
}}},
buttonmor: { 
type: "button", 
x: 774, 
y: 45, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_mor_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("morMode", {});
}}},
buttonhim: { 
type: "button", 
x: 719, 
y: 100, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_him_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("himMode", {});
}}},
buttonneo: { 
type: "button", 
x: 774, 
y: 100, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_neo_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("neoMode", {});
}}},
buttontie: { 
type: "button", 
x: 719, 
y: 155, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_tie_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("tieMode", {});
}}},
buttonpow: { 
type: "button", 
x: 774, 
y: 155, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_pow_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("powMode", {});
}}},
buttonlog: { 
type: "button", 
x: 719, 
y: 210, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_log_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("logMode", {});
}}},
buttonter: { 
type: "button", 
x: 774, 
y: 210, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_ter_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("terMode", {});
}}},
buttonmet: { 
type: "button", 
x: 719, 
y: 265, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_met_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("metMode", {});
}}},
buttonmas: { 
type: "button", 
x: 774, 
y: 265, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_mas_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("masMode", {});
}}},
buttonbio: { 
type: "button", 
x: 719, 
y: 320, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_bio_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("bioMode", {});
}}},
buttonhyd: { 
type: "button", 
x: 774, 
y: 320, 
scale: 1.5,
size: 33,
bitmap: "scanner_button_hyd_0",
clicker: {
onClick: function (pos,container,tile,window,canvas,scale) {
				container.sendEvent("hydMode", {});
}}},
        scale: {
            type: "scale",
            bitmap: "scanner_scale_0",
            direction: 3,
            x: 375,
            y: 115,
            scale: 3
        }
/*coordsButton1: { 
type: "button", 
x: 300, 
y: 190, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["button2"].x -= 1; 
alert(JSON.stringify(content.elements["button2"].x)); 
}}},
coordsButton2: { 
type: "button", 
x: 400, 
y: 190, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["button2"].x += 1; 
alert(JSON.stringify(content.elements["button2"].x)); 
}}},
coordsButton3: { 
type: "button", 
x: 350, 
y: 240, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["button2"].y -= 1; 
alert(JSON.stringify(content.elements["button2"].y)); 
}}},
coordsButton4: { 
type: "button", 
x: 350, 
y: 140, 
scale: 4, 
bitmap: "slot_support", 
clicker: { 
onClick: function (pos,container,tile,window,canvas,scale) { 
let content = container.getWindowContent(); 
content.elements["button2"].y += 1; 
alert(JSON.stringify(content.elements["button2"].x)); 
}}},*/
    }
});

//ЗАРЕГИСТРИРОВАТЬ РЕЦЕПТЫ ПОЗЖЕ
MachineRecipeRegistry.registerRecipesFor("scanner-1", {
  "BlockID.techtable": {data: [1]}
//поршень,мотыга,золото,руда,блок,рельса
 }, true);
MachineRecipeRegistry.registerRecipesFor("scanner-2", {
  1: {sciences:["ter"]}
 }, true);

//ЧЕКАТЬ ТУТ
TileEntity.registerPrototype(BlockID.scanner, {
	containerEvents: {
 	scanclick(container, window, content, data){
			this.data.click = this.data.click + 1;
  },
		resaerchMode(container, window, content, data){
			this.data.resaerch = (this.data.resaerch + 1) % 2;
		},
 	geoMode(container, window, content, data){
			this.data.geo = (this.data.geo + 1) % 2;
		},
 	morMode(container, window, content, data){
			this.data.mor = (this.data.mor + 1) % 2;
		},
 	himMode(container, window, content, data){
			this.data.him = (this.data.him + 1) % 2;
		},
 	neoMode(container, window, content, data){
			this.data.neo = (this.data.neo + 1) % 2;
		},
 	tieMode(container, window, content, data){
			this.data.tie = (this.data.tie + 1) % 2;
		},
 	powMode(container, window, content, data){
			this.data.pow = (this.data.pow + 1) % 2;
		},
 	logMode(container, window, content, data){
			this.data.log = (this.data.log + 1) % 2;
		},
 	terMode(container, window, content, data){
			this.data.ter = (this.data.ter + 1) % 2;
		},
 	metMode(container, window, content, data){
			this.data.met = (this.data.met + 1) % 2;
		},
 	masMode(container, window, content, data){
			this.data.mas = (this.data.mas + 1) % 2;
		},
 	bioMode(container, window, content, data){
			this.data.bio = (this.data.bio + 1) % 2;
		},
 	hydMode(container, window, content, data){
			this.data.hyd = (this.data.hyd + 1) % 2;
		}
	},
	client: {
		containerEvents: {
			setIconResaerch(container, window, content, data){
				if(content)
					content.elements.button1.bitmap = "scanner_button_" + data.resaerch;
			},
setIcon(container, window, content, data){
    if(content){
     content.elements.status.bitmap = "status_"+data.icon;
     content.elements.button2.bitmap = "status_0";
    }
   },
setIconLupe(container, window, content, data){
    if(content){
     content.elements.status.bitmap = "status_scan";
     content.elements.button2.bitmap = "status_0";
     }
},
resetIconLupe(container, window, content, data){
    if(content){
     content.elements.status.bitmap = "status_0";
     content.elements.status.x = 490;
     content.elements.status.y = 104;
     }
},
setXY(container, window, content, data){
    if(content){
     content.elements.status.x = data.x;
     content.elements.status.y = data.y;
     }
},
			setIcon0(container, window, content, data){
				if(content) {
    content.elements.status.bitmap = "status_0";
    content.elements.button2.bitmap = "scanner_button2_0";
    content.elements.status.x = 490;
    content.elements.status.y = 104;
    }
			},
   setIconGeo(container, window, content, data){
				if(content)
					content.elements.buttongeo.bitmap = "scanner_button_geo_" + data.geo;
			},
   setIconMor(container, window, content, data){
				if(content)
					content.elements.buttonmor.bitmap = "scanner_button_mor_" + data.mor;
			},
   setIconHim(container, window, content, data){
				if(content)
					content.elements.buttonhim.bitmap = "scanner_button_him_" + data.him;
			},
   setIconNeo(container, window, content, data){
				if(content)
					content.elements.buttonneo.bitmap = "scanner_button_neo_" + data.neo;
			},
   setIconTie(container, window, content, data){
				if(content)
					content.elements.buttontie.bitmap = "scanner_button_tie_" + data.tie;
			},
   setIconPow(container, window, content, data){
				if(content)
					content.elements.buttonpow.bitmap = "scanner_button_pow_" + data.pow;
			},
   setIconLog(container, window, content, data){
				if(content)
					content.elements.buttonlog.bitmap = "scanner_button_log_" + data.log;
			},
   setIconTer(container, window, content, data){
				if(content)
					content.elements.buttonter.bitmap = "scanner_button_ter_" + data.ter;
			},
   setIconMet(container, window, content, data){
				if(content)
					content.elements.buttonmet.bitmap = "scanner_button_met_" + data.met;
			},
   setIconMas(container, window, content, data){
				if(content)
					content.elements.buttonmas.bitmap = "scanner_button_mas_" + data.mas;
			},
   setIconBio(container, window, content, data){
				if(content)
					content.elements.buttonbio.bitmap = "scanner_button_bio_" + data.bio;
			},
   setIconHyd(container, window, content, data){
				if(content)
					content.elements.buttonhyd.bitmap = "scanner_button_hyd_" + data.hyd;
			}
  }
	},
   useNetworkItemContainer: true,
   defaultValues: {
      resaerch: 0,
      progress: 0,
      isActive: false,
      geo: 0,
      mor: 0,
      him: 0,
      neo: 0,
      tie: 0,
      pow: 0,
      log: 0,
      ter: 0,
      met: 0,
      mas: 0,
      bio: 0,
      hyd: 0,
      angle: 0,
      sciences: [],
      lastID: 0,
      click: 0,
      timer1: 0,
      timer2: 0,
      timer3: 0
   },

   tick: function() {
		this.container.sendEvent("setIconGeo", {geo: this.data.geo});
		this.container.sendEvent("setIconMor", {mor: this.data.mor});
		this.container.sendEvent("setIconHim", {him: this.data.him});
		this.container.sendEvent("setIconNeo", {neo: this.data.neo});
		this.container.sendEvent("setIconTie", {tie: this.data.tie});
		this.container.sendEvent("setIconPow", {pow: this.data.pow});
		this.container.sendEvent("setIconLog", {log: this.data.log});
		this.container.sendEvent("setIconTer", {ter: this.data.ter});
		this.container.sendEvent("setIconMet", {met: this.data.met});
		this.container.sendEvent("setIconMas", {mas: this.data.mas});
		this.container.sendEvent("setIconBio", {bio: this.data.bio});
		this.container.sendEvent("setIconHyd", {hyd: this.data.hyd});

if(this.container.getSlot("slot2").id == lastID) {
} else {
 var lastID = this.container.getSlot("slot2").id;
 var cert = MachineRecipeRegistry.hasRecipeFor("scanner-1", this.container.getSlot("slot2").id);
 if(cert == true) {
  var result = MachineRecipeRegistry.getRecipeResult("scanner-1", this.container.getSlot("slot2").id);
  var res = researchs.researchs;
  for(i in res) {
  	for(e in result.data) {
  		if (res[i] == result.data[e]) {
	  		this.data.progress++;
	  	}
	  }
  }
  this.container.setScale("scale", this.data.progress/result.data.length);
 } else {
 var result = 0;
 this.data.progress = 0;
 }
}
//this.data.progress = 50;
//this.container.setScale("scale", this.data.progress/50);
      if(this.data.click == 1) {
       var status = this.scan(this.container.getSlot("slot2").id);
       this.data.sciences = [];
       if(status > 1) {
        this.data.timer3 = 1;
        var emu = status;
        var status = 0;
        this.container.sendEvent("setIcon", {icon: emu});
       }
       this.data.click--;
      }
      if(this.data.timer3 > 0) {
       this.data.timer2++;
       if(this.data.timer2 >= 50) {
        this.data.timer3 = 0;
        this.container.sendEvent("setIcon0", {});
        this.data.timer2 = 0;
       }
      }
this.container.sendChanges();

/*
ПОЛЕЗНЫЕ ФУНКЦИИ
      this.container.sendChanges()
      var slot1 =      this.container.setScale("scale2", this.data.burn/1000);
      var recipe1 = MachineRecipeRegistry.hasRecipeFor("part_press", item1);
      if(recipe1) {
         var result1 = MachineRecipeRegistry.getRecipeResult("part_press", item1);
      }
      this.container.setSlot("slot5", 263, count5 - 1, 0);
      }}
      if(this.data.click == 1) {
       this.data.click = 0;
       alert("res")
       this.resaerch();
      this.container.validateAll();*/
},
resaerch: function(geo,mor,him,neo,tie,pow,log,ter,met,mas,bio,hyd,sciences) {
if(geo == 1) {
sciences.push("geo");
}
if(mor == 1) {
sciences.push("mor");
}
if(him == 1) {
sciences.push("him");
}
if(neo == 1) {
sciences.push("neo");
}
if(tie == 1) {
sciences.push("tie");
}
if(pow == 1) {
sciences.push("pow");
}
if(log == 1) {
sciences.push("log");
}
if(ter == 1) {
sciences.push("ter");
}
if(met == 1) {
sciences.push("met");
}
if(mas == 1) {
sciences.push("mas");
}
if(bio == 1) {
sciences.push("bio");
}
if(hyd == 1) {
sciences.push("hyd");
}
return sciences
},
scan: function(slot2){
var baseX = 490;
var baseY = 104;
var radius = 50;
var currentAngle = 0;
this.container.sendEvent("setIconLupe", {});
for(var d = 0; d < 3; d++) {
 for(var f = 0; f < 36000; f++) {
  var vx = Math.cos(currentAngle) * radius;
  var vy = Math.sin(currentAngle) * radius;
  currentAngle += 0.01;
  //content.elements.status.x = baseX + vx;
  //content.elements.status.y = baseY + yx;
  //alert(""+vx+" "+vy+" "+currentAngle);
  this.container.sendEvent("setXY", {x: baseX+vx,y:baseY+vy});
 }
}
this.container.sendEvent("resetIconLupe", {});
 var recipe = MachineRecipeRegistry.hasRecipeFor("scanner-1", slot2);
 if(recipe == true) {
  var result = MachineRecipeRegistry.getRecipeResult("scanner-1", slot2);
  var status = 0;
  science = this.resaerch(this.data.geo, this.data.mor, this.data.him, this.data.neo, this.data.tie, this.data.pow, this.data.log, this.data.ter, this.data.met, this.data.mas, this.data.bio, this.data.hyd, this.data.sciences);
  var hom = JSON.stringify(science);
  for(m in result.data) {
   var resaer = MachineRecipeRegistry.getRecipeResult("scanner-2", result.data[m]);
   var r = resaer.sciences;
   var lom = JSON.stringify(r);
   var p = 0;
   var s = science.length;
   if(result.data[m] in researchs.researchs) {
    coincidences++;
    if(coincidences == result.data.length) {
     var status = 1;
     //показать звезду
    }
   } else if(lom == hom && (status == 4 || status == 3 || status == 0)) {
    var status = 2;
    this.container.setSlot("slot1", blueprints[result.data[m]], 1, 0);
    //выдать предмет
   } else if(r.length > s && (status == 4 || status == 0)){
    n = 0;
    for(i in r) {
     for(l in science) {
      if(r[i] == science[l]) {
       n++;
      }
     }
    }
    if(r.length - 1 == n) {
     var status = 3;
     //показать недостающий пазл
    } else {
     var status = 4;
     //желтый крест
    }
   } else if(r.length <= s && (status == 0 || status == 4)) {
   status = 4
   }
  }
 } else {
  var status = 5;

  //показать что неизучаемо
 }
 return status;
},

   getScreenName(){
return "main";
},
   getScreenByName(){
return scannerUI;
},
});




// file: items/others/E_SCANNER.js

//Важнейший аспект мода
IDRegistry.genItemID("E_scanner"); 
Item.createItem("E_scanner", "E scanner", {name: "e_scanner", meta: 0}, {stack: 1});
Item.registerNameOverrideFunction(ItemID.E_scanner, function(item, name){
    return Native.Color.GOLD + name + "\n§7" + "Изучайте различные химические соединения\n,и приобретайте навыки.\nДля изучения тыкайте по обьекту";
});

let E_SCANNER = new UI.Container();
let L_SCANNER = new UI.Container();
Item.registerUseFunction("E_scanner", function(coords, item, block, player) {
	E_SCANNER.openAs(SCANNER_E)
	L_SCANNER.close();
});
var SCANNER_E = new UI.Window({
	location: {
    	x: 330/ 1.1 - 22.4,
        y: 260,
        width: 387,
        height: 560
    },
    drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},{type: "bitmap", bitmap:"escanner", scale: 5.2,x: 0,y: 10}],
    elements: {
        "closeButton": {
        	type: "closeButton", 
			x: 80, 
			y: 1008, 
			scale: 5.5,
			bitmap:"futurevoid"
		},        "learning": {
        	type: "button",
			x: 153, 
			y: 780, 
			scale: 5.4,
			bitmap:"paper_learning",clicker: {onClick: function(){E_SCANNER.close(); L_SCANNER.openAs(SCANNER_L)
			}}
		},
     }
  }
);
let group = new UI.WindowGroup();
/*group.addWindowInstance("research_bg",SCANNER_L);*/
let SCANNER_L = new UI.Window({
	location: {
    	x: 290 / 1.1 - 22.4,
        y: 0,
        width: 470,
        height: 1100,
      /*  scrollX: 1000,
        scrollY: 1000*/
    },
    drawing: [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},{type: "bitmap", bitmap:"research_bg",scale: 2.3},{type:"bitmap",x:60,y:60,scale:4,bitmap:"slot_bg"},{type:"bitmap",x:140,y:142,scale:4.1,bitmap:"slot_erk_bg"}, {type:"bitmap",x:140,y:247,scale:4.1,bitmap:"slot_erk_bg"}],
    elements:{
	"stars": 
	{type: "button",
	bitmap:"research_overlay", 
	scale: 3.9,x: 0,y: 0},"back": 
	{type: "button",
	bitmap:"e_scanner", 
	scale: 4.3,x: 70,y: 72,clicker:{onClick: function(container){L_SCANNER.close(); E_SCANNER.openAs(SCANNER_E)}}}, "bgbutton":
{type: "button", 
x: 150, 
y: 56,
scale:2.0,
bitmap:"overlay_researching",
     clicker: 
{onClick: function(container){
	/*let content = container.getGuiContent();
	
	content.elements["stars"].y += .1;
	content.elements["stars"].y -= .1;
	content.elements["fon"].y += 6;*/
}}},	"lean1": 
	{type: "button",
	bitmap:"geologie", 
	scale: 2.9,x: 140,y: 142,clicker: {onClick: function(container){
	/*	let content = container.getGuiContent();
		content.elements["lean1"] = null;
		content.elements["lean2"] = null; 
		content.elements["stars"] = null; 
		content.elements["back"] = null; 
		content.elements["bgbutton"] = null; 
		content.bitmap = null;
        content.drawing = [{type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},{type: "bitmap", bitmap:"escanner", scale: 5.2,x: 0,y: 10}]*/}}},
	 	"lean2": 
	{type: "button",
	bitmap:"metallurgie", 
	scale: 2.9,x: 140,y: 247}},
     /*   "closeButton": {
        	type: "closeButton", 
			x: 80, 
			y: 1008, 
			scale: 5.5,
			bitmap:"futurevoid"
		},        "learning": {
        	type: "button", 
			x: 110, 
			y: 745, 
			scale: 5.3,
			bitmap:"paper_learning"
		},*/
     
  }
);
/*group.addWindowInstance("SCANNER_L", SCANNER_L);*/




// file: blocks/usable/Fabricator.js

IDRegistry.genBlockID("fabricator_futurepack");
Block.createBlockWithRotation("fabricator_futurepack", [{
    name: "Fabricator",
    texture: [
        ["color_iron_white", 0],
        ["scanner_top_w_an", 0],
        ["color_iron_white", 0],
        ["fabricator", 0],
        ["color_iron_white", 0],
        ["color_iron_white", 0]
    ],
    inCreative: true
}], iron_block_type);





// file: Translation.js

Translation.addTranslation("White iron block", {
ru: "Белый железный блок"
});

Translation.addTranslation("Light gray iron block", {
ru: "Светло-серый железный блок"
});

Translation.addTranslation("Gray iron block", {
ru: "Серый железный блок"
});

Translation.addTranslation("Black iron block", {
ru: "Чёрный железный блок"
});

Translation.addTranslation("Brown iron block", {
ru: "Коричневый железный блок"
});

Translation.addTranslation("Red iron block", {
ru: "Красный железный блок"
});

Translation.addTranslation("Orange iron block", {
ru: "Оранжевый железный блок"
});

Translation.addTranslation("Yellow iron block", {
ru: "Жёлтый железный блок"
});

Translation.addTranslation("Lime iron block", {
ru: "Лаймовый железный блок"
});

Translation.addTranslation("Green iron block", {
ru: "Зелёный железный блок"
});

Translation.addTranslation("Cyan iron block", {
ru: "Бирюзовый железный блок"
});

Translation.addTranslation("Light blue iron block", {
ru: "Голубой железный блок"
});

Translation.addTranslation("Blue iron block", {
ru: "Синий железный блок"
});

Translation.addTranslation("Purple iron block", {
ru: "Фиолетовый железный блок"
});

Translation.addTranslation("Magenta iron block", {
ru: "Пурпурный железный блок"
});

Translation.addTranslation("Pink iron block", {
ru: "Розовый железный блок"
});


Translation.addTranslation("White gitter", {
ru: "Белая решётка"
});

Translation.addTranslation("Light gray gitter", {
ru: "Светло-серая решётка"
});

Translation.addTranslation("Gray gitter", {
ru: "Серая решётка"
});

Translation.addTranslation("Black gitter", {
ru: "Чёрная решётка"
});

Translation.addTranslation("Brown gitter", {
ru: "Коричневая решётка"
});

Translation.addTranslation("Red gitter", {
ru: "Красная решётка"
});

Translation.addTranslation("Orange gitter", {
ru: "Оранжевая решётка"
});

Translation.addTranslation("Yellow gitter", {
ru: "Жёлтая решётка"
});

Translation.addTranslation("Lime gitter", {
ru: "Лаймовая решётка"
});

Translation.addTranslation("Green gitter", {
ru: "Зелёная решётка"
});

Translation.addTranslation("Cyan gitter", {
ru: "Бирюзовая решётка"
});

Translation.addTranslation("Light blue gitter", {
ru: "Голубая решётка"
});

Translation.addTranslation("Blue gitter", {
ru: "Синяя решётка"
});

Translation.addTranslation("Purple gitter", {
ru: "Фиолетовая решётка"
});

Translation.addTranslation("Magenta gitter", {
ru: "Пурпурная решётка"
});

Translation.addTranslation("Pink gitter", {
ru: "Розовая решётка"
});


Translation.addTranslation("Crystal retium", {
ru: "Ретиумовый кластер "
});

Translation.addTranslation("Retium granulat", {
ru: "Ретиумовый гранулат"
});

Translation.addTranslation("Crystal block retium", {
ru: "Ретиумовый кристалл"
});

Translation.addTranslation("Crystal neon", {
ru: "Неоновый кластер "
});

Translation.addTranslation("Neon granulat", {
ru: "Неоновый гранулат"
});

Translation.addTranslation("Crystal block neon", {
ru: "Неоновый кристалл"
});

Translation.addTranslation("Crystal block bioterium", {
ru: "Биотериумовый кристалл"
});

Translation.addTranslation("Crystal bioterium", {
ru: "Биотериумовый кластер "
});

Translation.addTranslation("Bioterium granulat", {
ru: "Биотериумовый гранулат"
});

Translation.addTranslation("Crystal alutin", {
ru: "Алутиновый кластер "
});

Translation.addTranslation("Crystal block alutin", {
ru: "Алутиновый кристалл"
});

Translation.addTranslation("Alutin granulat", {
ru: "Алутиновый гранулат"
});

Translation.addTranslation("Crystal alutin", {
ru: "Алутиновый кластер "
});

Translation.addTranslation("Crystal block glowtite", {
ru: "Светящийся кристалл"
});

Translation.addTranslation("glowtite granulat", {
ru: "Светящийся гранулат"
});

Translation.addTranslation("Crystal glowtite", {
ru: "Светящийся кластер "
});

Translation.addTranslation("Crystal block neon", {
ru: "Неоновый кристалл"
});

Translation.addTranslation("neon granulat", {
ru: "Неоновый гранулат"
});

Translation.addTranslation("Crystal neon", {
ru: "Неоновый кластер "
});

Translation.addTranslation("Crystal big alutin", {
ru: "Большой алутиновый кластер "
});

Translation.addTranslation("Crystal big neon", {
ru: "Большой неоновый кластер "
});

Translation.addTranslation("Crystal big glowtite", {
ru: "Большой светящийся кластер "
});

Translation.addTranslation("Crystal big bioterium", {
ru: "Большой биотериумовый кластер "
});

Translation.addTranslation("Crystal big retium", {
ru: "Большой ретиумовый кластер "
});

Translation.addTranslation("Wakurium brick", {
ru: "Вакуриумовые кирпичи "
});

Translation.addTranslation("Retium brick", {
ru: "Ретиумовые кирпичи "
});

Translation.addTranslation("Quantanium brick", {
ru: "Квантаниумовые кирпичи "
});

Translation.addTranslation("Bioterium brick", {
ru: "Биотериумовые кирпичи "
});

Translation.addTranslation("Neon brick", {
ru: "Неоновые кирпичи "
});

Translation.addTranslation("Baluminium block", {
ru: "Балуминиумовый блок "
});

Translation.addTranslation("Bbioterium block", {
ru: "Б-биотериумовый блок "
});

Translation.addTranslation("E scanner", {
ru: "Планшет для сканирования"
});

Translation.addTranslation("A note", {
ru: "Записка"
});

Translation.addTranslation("Entronium core", {
ru: "Энтрониумовый §6процессор"
});

Translation.addTranslation("Entronium ram", {
ru: "§6Энтрониумовая оперативная память"
});

Translation.addTranslation("Video core", {
ru: "§4Видеокарта"
});

Translation.addTranslation("White plasma lamp off", {
ru: "Белая выключенная плазменная лампа"
});

Translation.addTranslation("Light gray plasma lamp off", {
ru: "Светло-серая выключенная плазменная лампа"
});

Translation.addTranslation("Gray plasma lamp off", {
ru: "Серая выключенная плазменная лампа"
});

Translation.addTranslation("Black plasma lamp off", {
ru: "Чёрная выключенная плазменная лампа"
});

Translation.addTranslation("Brown plasma lamp off", {
ru: "Коричневая выключенная плазменная лампа"
});

Translation.addTranslation("Red plasma lamp off", {
ru: "Красная выключенная плазменная лампа"
});

Translation.addTranslation("Orange plasma lamp off", {
ru: "Оранжевая выключенная плазменная лампа"
});

Translation.addTranslation("Yellow plasma lamp off", {
ru: "Жёлтая выключенная плазменная лампа"
});

Translation.addTranslation("Lime plasma lamp off", {
ru: "Лаймовая выключенная плазменная лампа"
});

Translation.addTranslation("Green plasma lamp off", {
ru: "Зелёная выключенная плазменная лампа"
});

Translation.addTranslation("Cyan plasma lamp off", {
ru: "Бирюзовая выключенная плазменная лампа"
});

Translation.addTranslation("Light blue plasma lamp off", {
ru: "Голубая выключенная плазменная лампа"
});

Translation.addTranslation("Blue plasma lamp off", {
ru: "Синяя выключенная плазменная лампа"
});

Translation.addTranslation("Purple plasma lamp off", {
ru: "Фиолетовая выключенная плазменная лампа"
});

Translation.addTranslation("Magenta plasma lamp off", {
ru: "Пурпурная выключенная плазменная лампа"
});

Translation.addTranslation("Pink plasma lamp off", {
ru: "Розовая выключенная плазменная лампа"
});

Translation.addTranslation("White plasma lamp on", {
ru: "Белая включенная плазменная лампа"
});

Translation.addTranslation("Light gray plasma lamp on", {
ru: "Светло-серая включенная плазменная лампа"
});

Translation.addTranslation("Gray plasma lamp on", {
ru: "Серая включенная плазменная лампа"
});

Translation.addTranslation("Black plasma lamp on", {
ru: "Чёрная включенная плазменная лампа"
});

Translation.addTranslation("Brown plasma lamp on", {
ru: "Коричневая включенная плазменная лампа"
});

Translation.addTranslation("Red plasma lamp on", {
ru: "Красная включенная плазменная лампа"
});

Translation.addTranslation("Orange plasma lamp on", {
ru: "Оранжевая включенная плазменная лампа"
});

Translation.addTranslation("Yellow plasma lamp on", {
ru: "Жёлтая включенная плазменная лампа"
});

Translation.addTranslation("Lime plasma lamp on", {
ru: "Лаймовая включенная плазменная лампа"
});

Translation.addTranslation("Green plasma lamp on", {
ru: "Зелёная включенная плазменная лампа"
});

Translation.addTranslation("Cyan plasma lamp on", {
ru: "Бирюзовая включенная плазменная лампа"
});

Translation.addTranslation("Light blue plasma lamp on", {
ru: "Голубая включенная плазменная лампа"
});

Translation.addTranslation("Blue plasma lamp on", {
ru: "Синяя включенная плазменная лампа"
});

Translation.addTranslation("Purple plasma lamp on", {
ru: "Фиолетовая включенная плазменная лампа"
});

Translation.addTranslation("Magenta plasma lamp on", {
ru: "Пурпурная включенная плазменная лампа"
});

Translation.addTranslation("Pink plasma lamp on", {
ru: "Розовая включенная плазменная лампа"
});

Translation.addTranslation("White neon lamp on", {
ru: "Белая включенная неоновая лампа"
});

Translation.addTranslation("Light gray neon lamp on", {
ru: "Светло-серая включенная неоновая лампа"
});

Translation.addTranslation("Gray neon lamp on", {
ru: "Серая включенная неоновая лампа"
});

Translation.addTranslation("Black neon lamp on", {
ru: "Чёрная включенная неоновая лампа"
});

Translation.addTranslation("Brown neon lamp on", {
ru: "Коричневая включенная неоновая лампа"
});

Translation.addTranslation("Red neon lamp on", {
ru: "Красная включенная неоновая лампа"
});

Translation.addTranslation("Orange neon lamp on", {
ru: "Оранжевая включенная неоновая лампа"
});

Translation.addTranslation("Yellow neon lamp on", {
ru: "Жёлтая включенная неоновая лампа"
});

Translation.addTranslation("Lime neon lamp on", {
ru: "Лаймовая включенная неоновая лампа"
});

Translation.addTranslation("Green neon lamp on", {
ru: "Зелёная включенная неоновая лампа"
});

Translation.addTranslation("Cyan neon lamp on", {
ru: "Бирюзовая включенная неоновая лампа"
});

Translation.addTranslation("Light blue neon lamp on", {
ru: "Голубая включенная неоновая лампа"
});

Translation.addTranslation("Blue neon lamp on", {
ru: "Синяя включенная неоновая лампа"
});

Translation.addTranslation("Purple neon lamp on", {
ru: "Фиолетовая включенная неоновая лампа"
});

Translation.addTranslation("Magenta neon lamp on", {
ru: "Пурпурная включенная неоновая лампа"
});

Translation.addTranslation("Pink neon lamp on", {
ru: "Розовая включенная неоновая лампа"
});

Translation.addTranslation("White neon lamp off", {
ru: "Белая выключенная неоновая лампа"
});

Translation.addTranslation("Light gray neon lamp off", {
ru: "Светло-серая выключенная неоновая лампа"
});

Translation.addTranslation("Gray neon lamp off", {
ru: "Серая выключенная неоновая лампа"
});

Translation.addTranslation("Black neon lamp off", {
ru: "Чёрная выключенная неоновая лампа"
});

Translation.addTranslation("Brown neon lamp off", {
ru: "Коричневая выключенная неоновая лампа"
});

Translation.addTranslation("Red neon lamp off", {
ru: "Красная выключенная неоновая лампа"
});

Translation.addTranslation("Orange neon lamp off", {
ru: "Оранжевая выключенная неоновая лампа"
});

Translation.addTranslation("Yellow neon lamp off", {
ru: "Жёлтая выключенная неоновая лампа"
});

Translation.addTranslation("Lime neon lamp off", {
ru: "Лаймовая выключенная неоновая лампа"
});

Translation.addTranslation("Green neon lamp off", {
ru: "Зелёная выключенная неоновая лампа"
});

Translation.addTranslation("Cyan neon lamp off", {
ru: "Бирюзовая выключенная неоновая лампа"
});

Translation.addTranslation("Light blue neon lamp off", {
ru: "Голубая выключенная неоновая лампа"
});

Translation.addTranslation("Blue neon lamp off", {
ru: "Синяя выключенная неоновая лампа"
});

Translation.addTranslation("Purple neon lamp off", {
ru: "Фиолетовая выключенная неоновая лампа"
});

Translation.addTranslation("Magenta neon lamp off", {
ru: "Пурпурная выключенная неоновая лампа"
});

Translation.addTranslation("Pink neon lamp off", {
ru: "Розовая выключенная неоновая лампа"
});

Translation.addTranslation("White glass", {
ru: "Белая панель"
});

Translation.addTranslation("Light gray glass", {
ru: "Светло-серая панель"
});

Translation.addTranslation("Gray glass", {
ru: "Серая панель"
});

Translation.addTranslation("Black glass", {
ru: "Чёрная панель"
});

Translation.addTranslation("Brown glass", {
ru: "Коричневая панель"
});

Translation.addTranslation("Red glass", {
ru: "Красная панель"
});

Translation.addTranslation("Orange glass", {
ru: "Оранжевая панель"
});

Translation.addTranslation("Yellow glass", {
ru: "Жёлтая панель"
});

Translation.addTranslation("Lime glass", {
ru: "Лаймовая панель"
});

Translation.addTranslation("Green glass", {
ru: "Зелёная панель"
});

Translation.addTranslation("Cyan glass", {
ru: "Бирюзовая панель"
});

Translation.addTranslation("Light blue glass", {
ru: "Голубая панель"
});

Translation.addTranslation("Blue glass", {
ru: "Синяя панель"
});

Translation.addTranslation("Purple glass", {
ru: "Фиолетовая панель"
});

Translation.addTranslation("Magenta glass", {
ru: "Пурпурная панель"
});

Translation.addTranslation("Pink glass", {
ru: "Розовая панель"
});

Translation.addTranslation("Composite Chest", {
ru: "Композитный сундук"
});

Translation.addTranslation("Erse", {
ru: "Эрсе"
});

Translation.addTranslation("Topinambur potato", {
ru: "Картофель Топинамбура"
});

Translation.addTranslation("Mendel berry", {
ru: "Мендель берри"
});

Translation.addTranslation("Part press", {
ru: "Компрессор"
});

Translation.addTranslation("Bioterium ingot", {
ru: "Биотериумовый слиток"
});

Translation.addTranslation("Lithium ingot", {
ru: "Литиумовый слиток"
});

Translation.addTranslation("Bitripentium ingot", {
ru: "Слиток Битрипентиума"
});

Translation.addTranslation("Neodymium ingot", {
ru: "Неодимиумовый слиток"
});

Translation.addTranslation("Retium ingot", {
ru: "Ретиумовый слиток"
});

Translation.addTranslation("Ingot quantium", {
ru: "Квантиумовый слиток"
});

Translation.addTranslation("Seltenerge ingot", {
ru: "Слиток Селтенерга"
});

Translation.addTranslation("Glowtit ingot", {
ru: "Светящийся слиток"
});

Translation.addTranslation("Neon ingot", {
ru: "Неоновый слиток"
});

Translation.addTranslation("Wakurum ingot", {
ru: "Вакурумовый слиток"
});

Translation.addTranslation("Kupferbarren", {
ru: "Медный слиток"
});

Translation.addTranslation("Zinnbarren", {
ru: "Циновый слиток"
});

Translation.addTranslation("Ingot wakurum or something else", {
ru: "Слиток вакурума или что то еще?"
});

Translation.addTranslation("Ingot gadolinium", {
ru: "Гадолиниумовый слиток"
});

Translation.addTranslation("Aluminum dust", {
ru: "Алюминиевая пыль"
});

Translation.addTranslation("Iron dust", {
ru: "Железная пыль"
});
Translation.addTranslation("Obsidian dust", {
ru: "Обсидиановая пыль"
});

Translation.addTranslation("Tin dust", {
ru: "Оловяная пыль"
});

Translation.addTranslation("Glowtite dust", {
ru: "Светящияся пыль"
});

Translation.addTranslation("Magnet dust", {
ru:"Магнетитовая пыль"
});

Translation.addTranslation("Bioterium dust", {
ru: "Биотериумовая пыль"
});

Translation.addTranslation("Zinc dust", {
ru: "Цинковая пыль"
});

Translation.addTranslation("Neon dust", {
ru: "Неоновая пыль"
});

Translation.addTranslation("Staub dust", {
ru: "Стаубовая пыль"
});

Translation.addTranslation("Gold dust", {
ru: "Золотая пыль"
});

Translation.addTranslation("Copper dust", {
ru: "Медная пыль"
});

Translation.addTranslation("Quantanium dust", {
ru: "Квантиумовая пыль"
});

Translation.addTranslation("Retium dust", {
ru: "Ретиумовая пыль"
});

Translation.addTranslation("White luftung", {
ru: "Белая вентиляция"
});

Translation.addTranslation("Light gray luftung", {
ru: "Светло-серая вентиляция"
});

Translation.addTranslation("Gray luftung", {
ru: "Серая вентиляция"
});

Translation.addTranslation("Black luftung", {
ru: "Чёрная вентиляция"
});

Translation.addTranslation("Brown luftung", {
ru: "Коричневая вентиляция"
});

Translation.addTranslation("Red luftung", {
ru: "Красная вентиляция"
});

Translation.addTranslation("Orange luftung", {
ru: "Оранжевая вентиляция"
});

Translation.addTranslation("Yellow luftung", {
ru: "Жёлтая вентиляция"
});

Translation.addTranslation("Lime luftung", {
ru: "Лаймовая вентиляция"
});

Translation.addTranslation("Green luftung", {
ru: "Зелёная вентиляция"
});

Translation.addTranslation("Cyan luftung", {
ru: "Бирюзовая вентиляция"
});

Translation.addTranslation("Light blue luftung", {
ru: "Голубая вентиляция"
});

Translation.addTranslation("Blue luftung", {
ru: "Синяя вентиляция"
});

Translation.addTranslation("Purple luftung", {
ru: "Фиолетовая вентиляция"
});

Translation.addTranslation("Magenta luftung", {
ru: "Пурпурная вентиляция"
});

Translation.addTranslation("Pink luftung", {
ru: "Розовая вентиляция"
});

Translation.addTranslation("Quartz", {
ru: "Кварц"
});

Translation.addTranslation("Kohle", {
ru: "Кохловая руда"
});

Translation.addTranslation("Kupfer", {
ru: "Медная руда"
});

Translation.addTranslation("Bauxit", {
ru: "Баукситовая руда"
});

Translation.addTranslation("Zinn", {
ru: "Циновая руда"
});

Translation.addTranslation("Prismid Stone", {
ru: "Камень с призмидои"
});

Translation.addTranslation("Zink", {
ru: "Цинк"
});

Translation.addTranslation("Magnetit", {
ru: "Магнетитовая руда"
});

Translation.addTranslation("Bwakurium block", {
ru: "Б-варикиумовый блок"
});

Translation.addTranslation("Bretium block", {
ru: "Б-ретиумовый блок"
});

Translation.addTranslation("Bquantanium block", {
ru: "Б-квантаниумовый блок"
});

Translation.addTranslation("Kupfer block", {
ru: "Медный блок"
});

Translation.addTranslation("Industrial deko block", {
ru: "Механический декоративный блок"
});

Translation.addTranslation("Bneon block", {
ru: "Б-неоновый блок"
});

Translation.addTranslation("Zin block", {
ru: "Циновый блок"
});

Translation.addTranslation("Zink block", {
ru: "Цинковый блок"
});

Translation.addTranslation("Bglowtite block", {
ru: "Б-святящийся блок"
});

Translation.addTranslation("Toasted core", {
ru: "Сгоревший процессор"
});

Translation.addTranslation("Tosted RAM", {
ru: "Сгоревшая оперативная память"
});

Translation.addTranslation("Standart core", {
ru: "Стандартный процессор"
});

Translation.addTranslation("Alon I Core", {
ru: "Процессор модели <Alon I>"
});

Translation.addTranslation("Penton II Core", {
ru: "Процессор модели <Penton II>"
});

Translation.addTranslation("TCT Core", {
ru: "<ТСТ> процессор"
});

Translation.addTranslation("Master Mind Core", {
ru: "Образцовый процессор"
});

Translation.addTranslation("NoN Core", {
ru: "<NoN> процессор"
});

Translation.addTranslation("Dungeon Heart Core", {
ru: "Главный лабораторный процессор"
});

Translation.addTranslation("Torus Core", {
ru: "Процессор Торуса"
});

Translation.addTranslation("Zombie Core", {
ru: "Процессор модели <Zombie>"
});

Translation.addTranslation("Standart RAM", {
ru: "Стандартная оперативная память"
});

Translation.addTranslation("Alon RAM", {
ru: "Оперативная память модели Alon"
});

Translation.addTranslation("Penton RAM", {
ru: "Оперативная память модели <Penton>"
});

Translation.addTranslation("TCT RAM", {
ru: "<TCT> оперативная память"
});

Translation.addTranslation("Master RAM", {
ru: "Образцовая оперативная память"
});

Translation.addTranslation("NoN RAM", {
ru: "<NoN> оперативная память"
});

Translation.addTranslation("Dungeon RAM", {
ru: "Лабораторная оперативная память"
});

Translation.addTranslation("Torus RAM", {
ru: "Оперативная память Торуса"
});

Translation.addTranslation("Zombie RAM", {
ru: "Оперативная память модели <Zombie>"
});

Translation.addTranslation("Toasted CHIP", {
ru: "Сгоревший чип"
});

Translation.addTranslation("Support CHIP", {
ru: "Чип поддержки"
});

Translation.addTranslation("Ultimate CHIP", {
ru: "Последний чип"
});

Translation.addTranslation("Navigation CHIP", {
ru: "Навигационный чип"
});

Translation.addTranslation("Logic CHIP", {
ru: "Логический чип"
});

Translation.addTranslation("Network CHIP", {
ru: "Сетевой чип"
});

Translation.addTranslation("Transport CHIP", {
ru: "Транспортный чип"
});

Translation.addTranslation("Industrial CHIP", {
ru: "Промышленный чип"
});

Translation.addTranslation("Tactic CHIP", {
ru: "Тактический чип"
});

Translation.addTranslation("Damage Control CHIP", {
ru: "Чип контроля повреждений"
});

Translation.addTranslation("AI CHIP", {
ru: "Чип исскуственного интеллекта"
});

Translation.addTranslation("Fragment Core", {
ru: "Осколок процессора"
});

Translation.addTranslation("Double Machine Board", {
ru: "Двойной приборный экран"
});

Translation.addTranslation("Machine Board", {
ru: "Приборный экран"
});

Translation.addTranslation("Flash Speicher 0", {
ru: "Обычный внешний накопитель"
});

Translation.addTranslation("Flash Speicher 1", {
ru: "Первый внешний накопитель"
});

Translation.addTranslation("Flash Speicher 2", {
ru: "Второй внешний накопитель"
});

Translation.addTranslation("Flash Speicher 3", {
ru: "Третий внешний накопитель"
});

Translation.addTranslation("Flash Speicher 4", {
ru: "Четвёртый внешний накопитель"
});

Translation.addTranslation("Flash Speicher 5", {
ru: "Пятый внешний накопитель"
});

Translation.addTranslation("Mini fabricator", {
ru: "Мини-фабрикатор"
});

Translation.addTranslation("Scanner", {
ru: "Сканирующая установка"
});

Item.registerNameOverrideFunction(ItemID.fabricator_component, function(item,name){return Native.Color.GREEN + name + "\n" + "Это устройство один из компонентов\nсложного механизма,который готов\nиз материи и своей энергии\nпребразовывать предметы"});

Translation.addTranslation("Fabricator", {
ru: "Фабрикатор"
});

Item.registerNameOverrideFunction(BlockID.fabricator_futurepack, function(item,name){return Native.Color.GREEN + name + "\n§4" + "Нестабильная сложная машина для искажения и улучшения предметов"});

Translation.addTranslation("Thruster", {
ru: "Двигатель"
});

Translation.addTranslation("Battery l", {
ru: "I Батарейка"
});

Translation.addTranslation("Battery N", {
ru: "N Батарейка"
});

Translation.addTranslation("Battery neon", {
ru: "Неоновая батарейка"
});

Translation.addTranslation("Zelle energy", {
ru: "Большая батарейка"
});

Translation.addTranslation("Zelle compact energy", {
ru: "Компактная большая батарейка"
});

Translation.addTranslation("Kristall energy zelle", {
ru: "Кристальная большая батарейка"
});



















































// file: integrations.js

ModAPI.addAPICallback("SpacesAPI", function(api){
	EnergyTileRegistry.addEnergyTypeForId(BlockID.fuel_loader, ft);
	EnergyTileRegistry.addEnergyTypeForId(BlockID.coal_generator, ft);
	ft.registerWire(BlockID.enclosed_heavy_aluminum_wire, 400);
	    EnergyTileRegistry.addEnergyTypeForId(BlockID.refinery_sc, ft);
	var componentspaces = ["spacescraft_core","spacescraft_ram","spacescraft_chip"];
	var translateSpaces = ["Spaces Core","Spaces RAM","Spaces Chip"];
	var descriptio = ["Core: 4\nMax Temp: 800.0","Ram: 4.0\nCorepower: 1\nMax. Temp:650.0","Chip: Spaces..."]
	for(var i in componentspaces){let a = componentspaces[i];
	let b = translateSpaces[i];
	let c = descriptio[i];
	IDRegistry.genItemID(a); 
Item.createItem(a, b, {name: a, meta: 0}, {stack: 1});
Item.registerNameOverrideFunction(ItemID[a], function(item,name){return Native.Color.GOLD+ name + "\n§7" + c});
};
Translation.addTranslation("Spaces Chip", {
ru: "Космический чип"
});
Translation.addTranslation("Spaces RAM", {
ru: "Космическая оперативная память"
});
Translation.addTranslation("Spaces Core", {
ru: "Космический процессор"
});
});

ModAPI.addAPICallback("ICore", function(api){
	EnergyTileRegistry.addEnergyTypeForId(BlockID.semifluidGenerator, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.solarPanel, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.primalGenerator, ft);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.electricHeatGenerator, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.rtGenerator, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.solidHeatGenerator, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.recycler, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.metalFormer, ft);
                EnergyTileRegistry.addEnergyTypeForId(BlockID.oreWasher, ft);
                    EnergyTileRegistry.addEnergyTypeForId(BlockID.thermalCentrifuge, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.blastFurnace, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.icFermenter, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.massFabricator, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.stirlingGenerator, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.ironFurnace, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.nuclearReactor, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageBatBox, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageCESU, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFE, ft);
        EnergyTileRegistry.addEnergyTypeForId(BlockID.storageMFSU, ft);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerHV, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerLV, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.transformerEV, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.electricFurnace, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.inductionFurnace, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.macerator, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.compressor, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.extractor, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.canner, ft);
            EnergyTileRegistry.addEnergyTypeForId(BlockID.solidCanner, ft);
            var componentic2 = ["industrialcraft2_core","industrialcraft2_ram","industrialcraft2_chip"];
	var translateIc2= ["Industrialization Core","Industrialization RAM","Industrialization Chip"];
	var descriptio2 = ["Core: 1\nMax Temp: 450.0","Ram: 1.0\nCorepower: 1\nMax. Temp:470.0","Chip: Industrial"]
	for(var i in componentic2){let a = componentic2[i];
	let b = translateIc2[i];
	let c = descriptio2[i];
	IDRegistry.genItemID(a); 
Item.createItem(a, b, {name: a, meta: 0}, {stack: 1});
Item.registerNameOverrideFunction(ItemID[a], function(item,name){return Native.Color.GOLD+ name + "\n§7" + c});
};
Translation.addTranslation("Industrialization CHIP", {
ru: "Индустриальный чип"
});
Translation.addTranslation("Industrialization RAM", {
ru: "Индустриальная оперативная память"
});
Translation.addTranslation("Industrialization Core", {
ru: "Индустриальный процессор"
});
        });
        ModAPI.addAPICallback("ClassicUI", function(api){
api.registerUiConfig("scaner",{
			"x": 0,
			"y": -30,
			"scale": 0.20000000000000018,
			"theme": "dark"});});




// file: api.js

ModAPI.registerAPI("FuturepackAPI", {
    requireGlobal: function(command){
    	Futurepack: Futurepack
  return eval(command);
 }
});




// file: Planetaus/Menelaus.js

function randomInt(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
const UniqueGen = {
    randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight) {
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 220;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: z = chunkZ * 16 + random.nextInt(16)
        }
    },
    generateOre: function(id, data, chunkX, chunkZ, random, params) {
        for (let i = 0; i < params.veinCounts; i++) {
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    },
    generateOreInDimension: function(id, data, chunkX, chunkZ, random, params) {
        for (let i = 0; i < params.veinCounts; i++) {
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, id, data, params.size, params.mode, params.check);
        }
    }
};

const PLANETAR_SAND = Block.createSpecialType({
    explosionres: 6,
    sound: "sand"
});

IDRegistry.genBlockID("menelaus_sand");
Block.createBlock("menelaus_sand",[{name: "Menelaus Sand", texture: [["sand_m", 0]], inCreative: true} ], PLANETAR_SAND);
Translation.addTranslation("Menelaus Sand",{
ru: "Песок Менелая"
});

IDRegistry.genBlockID("menelaus_gravel");
Block.createBlock("menelaus_gravel",[{name: "Menelaus Gravel", texture: [["gravel_m", 0]], inCreative: true} ], PLANETAR_SAND);
Translation.addTranslation("Menelaus Gravel",{
ru: "Гравий Менелая"
});

IDRegistry.genBlockID("menelaus_smoothsand_m");
Block.createBlock("menelaus_smoothsand_m",[{name: "Menelaus Smoothsand", texture: [["stone_sandstone_m_top", 0],["stone_sandstone_m_top",0],["stone_smoothsand_m", 0]], inCreative: true} ]);
Translation.addTranslation("Menelaus Smoothsand",{
ru: "Резной песчаник Менелая"
});

IDRegistry.genBlockID("menelaus_chiseledsand_m");
Block.createBlock("menelaus_chiseledsand_m",[{name: "Menelaus Chiseledsand", texture: [["stone_chiseledsand_m", 0],["stone_chiseledsand_m",0],["stone_smoothsand_m", 0]], inCreative: true} ]);
Translation.addTranslation("Menelaus Chiseledsand",{
ru: "Резной песчаник Менелая"
});


IDRegistry.genBlockID("menelaus_sandstone");
Block.createBlock("menelaus_sandstone",[{name: "Menelaus Sandstone", texture: [["stone_sandstone_m_bottom",0],["stone_sandstone_m_bottom",0],["stone_sand_m", 0]], inCreative: true} ]);
Translation.addTranslation("Menelaus Sandstone",{
ru: "Песчаник Менелая"
});

IDRegistry.genBlockID("pilz_log_m");
Block.createBlock("pilz_log_m",[{name: "Pilz log", texture: [["pilz_log_top",0],["pilz_log_top",0],["pilz_log", 0]], inCreative: true} ]);
Translation.addTranslation("Pilz log",{
ru: "Большой грибовый стержень Менелая"
});

IDRegistry.genBlockID("stone_menelaus");
Block.createBlock("stone_menelaus",[{name: "Stone Menelaus", texture: [["stone_m",0]], inCreative: true} ]);
Translation.addTranslation("Stone Menelaus",{
ru: "Камень Менелая"
});

IDRegistry.genBlockID("pilz_menelaus_inside");
Block.createBlock("pilz_menelaus_inside",[{name: "Pilz Menelaus inside", texture: [["pilz_menelaus_inside",0]], inCreative: true} ]);
Translation.addTranslation("Pilz Menelaus inside",{
ru: "Грибничная шапка Минелая"
});

IDRegistry.genBlockID("pilz_menelaus");
Block.createBlock("pilz_menelaus",[{name: "Pilz Menelaus", texture: [["pilz_menelaus",0]], inCreative: true} ]);
Translation.addTranslation("Pilz Menelaus",{
ru: "Грибничная шапка Минелая"
});

IDRegistry.genBlockID("planks_menelaus_mushroom");
Block.createBlock("planks_menelaus_mushroom",[{name: "Planks menelaus", texture: [["planks_menelaus_mushroom",0]], inCreative: true} ]);
Translation.addTranslation("Planks menelaus",{
ru: "Доски Минелая"
});


IDRegistry.genBlockID("stone_brick_m");
Block.createBlock("stone_brick_m",[{name: "Stone Brick Menelaus",  texture: [["stone_brick_m",0]], inCreative: true} ]);
Translation.addTranslation("Stone Brick Menelaus",{
ru: "Каменные кирпичи Менелая"
});

ToolAPI.registerBlockMaterial(BlockID.stone_brick_m, "stone", 1);

ToolAPI.registerBlockMaterial(BlockID.stone_cobble_m, "stone", 1);

ToolAPI.registerBlockMaterial(BlockID.stone_cobble_m, "stone", 1);

ToolAPI.registerBlockMaterial(BlockID.stone_menelaus, "stone", 1);

ToolAPI.registerBlockMaterial(BlockID.stone_sand_m, "stone", 1);

IDRegistry.genBlockID("stone_cracked_m");
Block.createBlock("stone_cracked_m",[{name: "Stone Cracked Menelaus", texture: [["stone_brick_m",0]], inCreative: true} ]);
Translation.addTranslation("Stone Cracked Menelaus",{
ru: "Потрескавшиеся каменные кирпичи Менелая"
});

IDRegistry.genBlockID("stone_cobble_m");
Block.createBlock("stone_cobble_m",[{name: "Cobblestone Menelaus", texture: [["stone_cobble_m",0]], inCreative: true} ]);
Translation.addTranslation("Cobblestone Menelaus ",{
ru: "Булыжник Менелая"
});

IDRegistry.genBlockID("dirt_m");
Block.createBlock("dirt_m",[{name: "Dirt Menelaus", texture: [["dirt_m",0]], inCreative: true} ]);
Translation.addTranslation("Dirt Menelaus ",{
ru: "Земля Менелая"
});

IDRegistry.genItemID("menelaus_stick"); 
Item.createItem("menelaus_stick", "Stick Menelaus", {name: "stick", meta: 0}, {stack: 64});
Translation.addTranslation("Stick Menelaus", {
ru: "Трость Менелая"
});

var Menelaus = new CustomBiome ("Menelaus")
.setCoverBlock(BlockID.menelaus_sand, 0)
.setSurfaceBlock(BlockID.menelaus_sandstone, 0)
.setFillingBlock(VanillaBlockID.stone, 0);
var Menelay = new Dimensions.CustomDimension("Menelay", 73);
Menelay.setSkyColor(.243, .165, .5);
Menelay.setFogColor(.237, .118, .14);
Menelay.setGenerator(Dimensions.newGenerator({
    biome: Menelaus.id,
    layers: [

    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.5, -.99], [.9, -0.99], [0.4, -.4], [0, 0.8]
        ],
        material: {
            base: VanillaBlockID.stone, width: 2,
            surface: {
                id: BlockID.menelaus_sandstone,
                data: 0,
                width: 4
            },
            cover: BlockID.menelaus_sand
        },
        noise: {
            octaves: {
               count: 5,
               scale: 70,
               weight: 1.57
            },
        }     
    },{ minY: 0,
      	maxY: 1,
      	material: {base: 7}}]

}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(item.id == ItemID.menelaus_stick){
Dimensions.transfer(player,Menelay.id);    
 }
});

Block.registerDropFunction("stone_menelaus", function(coords, blockID){

    return [[BlockID.stone_cobble_m, 1, 0]] 

});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.stone_menelaus, 0, chunkX, chunkZ, random, { 
 veinCounts: 3,
 minY:70, 
 maxY: 128, 
 size: randomInt(40, 110), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.kohle_erz_m, 0, chunkX, chunkZ, random, { 
 veinCounts: 3,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 6), 
 mode: true, 
 check: [BlockID.stone_menelaus] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.quartz_erz_m, 0, chunkX, chunkZ, random, { 
 veinCounts: 2,
 minY:2, 
 maxY: 128, 
 size: randomInt(1, 8), 
 mode: true, 
 check: [BlockID.stone_menelaus] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.kupfer_erz_m, 0, chunkX, chunkZ, random, { 
 veinCounts: 5,
 minY:2, 
 maxY: 128, 
 size: randomInt(3, 9), 
 mode: true, 
 check: [BlockID.stone_menelaus] 
 }); 
});



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.zinn_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 4,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.zink_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 4,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.bauxit_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 3,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.magnetit_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 4,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 7), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId) { 
 if (dimensionId != Menelay.id) return;
 UniqueGen.generateOreInDimension(BlockID.kupfer_erz, 0, chunkX, chunkZ, random, { 
 veinCounts: 5,
 minY:2, 
 maxY: 128, 
 size: randomInt(2, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Menelay.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 1); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.menelaus_sand){  
World.setBlock(coords.x,coords.y+1,coords.z,VanillaBlockID.dead_bush,0);   
    }
}});

Callback.addCallback("GenerateCustomDimensionChunk", function (chunkX, chunkZ, random, dimensionId){
if (dimensionId != Menelay.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 1); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.menelaus_sand){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.mendel_berry_plant,3);   
    }
}});




