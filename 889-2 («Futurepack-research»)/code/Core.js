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
