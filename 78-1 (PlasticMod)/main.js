/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 12
*/



// file: ui/ui.js

var rmui = new 
UI.StandartWindow({
 standart: {
  header: {
   text: {
    text: "Recycle  Machine"
   }
   },
  inventory: {
   standart: true
  }
  },
  drawing: [{type:"background", color:android.graphics.Color.rgb(149,134,129)},
  {type:"bitmap", bitmap:"scale", x:570, y:150, scale:10}],
  elements: {
  "coal":{type: "slot", x:400, y:150, size: 160},
  "scale":{type:"scale", direction: 0, x:570, y:150, scale:10, bitmap:"scale_full"},
  "result":{type: "slot", x:800, y:150, size:160}
  }
 });
 
var tbui = new UI.StandartWindow({
standart: {
header: {
text: {
text: "Tool Bench"
}
},
inventory: {
standart: true
}
},
drawing: [{type:"background", color:android.graphics.Color.rgb(149,134,129)},
{type:"bitmap", bitmap:"scale_down", x:590, y:180, scale:5}],
elements: {
"form":{type:"slot", x:500, y:100, size:70},
"stick":{type:"slot", x:600, y:100, size:70},
"plastic":{type:"slot", x:700, y:100, size:70},
"result":{type:"slot", x:600, y:300, size:70}
}
});




// file: blocks/ids.js

IDRegistry.genBlockID("rec_machine");
IDRegistry.genBlockID("plasticBlock");
IDRegistry.genBlockID("toolBench");
IDRegistry.genBlockID("bomb");




// file: blocks/blocks.js

Block.createBlockWithRotation("rec_machine", [{name: "Recycle Machine", texture: [["white",0],["white",0],["white",0],["r_machine",0],["white",0],["white",0],["white",0]], inCreative: true}]);

Block.createBlock("plasticBlock", [{name: "Plastic Block", texture: [["white",0]], inCreative: true}]);

Block.createBlock("toolBench", [{name: "Tool Bench", texture: [["planks",0],["crafting_table",0],["planks",0]], inCreative: true}]);

Block.createBlock("bomb", [{name: "Bomb", texture: [["bomb",2],["bomb",1],["bomb",0]], inCreative: false}]);




// file: blocks/drop.js

Block.registerDropFunction("plasticBlock", function(c,id,data){
return [[ItemID.plasticItem,9,0]];
});




// file: blocks/tiles.js

TileEntity.registerPrototype(BlockID.rec_machine, {
defaultValues: {
progress: 0
},
tick: function(){
if(this.container.getSlot("coal").id == 263 && this.container.getSlot("coal").data == 0 && this.data.progress < 1.01){
if(this.container.getSlot("result").id == 0 || this.container.getSlot("result").id == ItemID.plasticItem){
this.data.progress = this.data.progress+0.01;
}
} else{
if(this.data.progress >= 1){
var coalSlot = this.container.getSlot("coal");
var resSlot = this.container.getSlot("result");
this.container.setSlot("coal", 263, coalSlot.count-1, coalSlot.data);
this.container.validateSlot("coal");
this.container.setSlot("result", ItemID.plasticItem, resSlot.count+1, 0);
this.data.progress = 0;
} else{
this.data.progress = 0;
}
}
this.container.setScale("scale", this.data.progress);
},
click: function(){

},
getGuiScreen: function(){
return rmui;
}
});

TileEntity.registerPrototype(BlockID.toolBench, {
defaultValues: {

},
tick: function(){
var formSlot = this.container.getSlot("form");
var stickSlot = this.container.getSlot("stick");
var plasticSlot = this.container.getSlot("plastic");
var resultSlot = this.container.getSlot("result");
if(formSlot.id == ItemID.pickaxeForm || formSlot.id == ItemID.swordForm){
if(resultSlot.id == 0 || resultSlot.id == ItemID.plasticPickaxe || resultSlot.id == ItemID.plasticSword){
if(formSlot.id == ItemID.pickaxeForm){
if(resultSlot.id == 0 || resultSlot.id == ItemID.plasticPickaxe){
var item = ItemID.plasticPickaxe;
} else{
var item = null;
}
} else if(formSlot.id == ItemID.swordForm){
if(resultSlot.id == 0 || resultSlot.id == ItemID.plasticSword){
var item = ItemID.plasticSword;
} else{
var item = null;
}
}
if(stickSlot.id == 280 && item != null){
if(plasticSlot.id == ItemID.liquidPlastic){
this.container.setSlot("form", formSlot.id, formSlot.count-1, formSlot.data);
this.container.setSlot("stick", 280, stickSlot.count-1, 0);
this.container.setSlot("plastic", ItemID.liquidPlastic, plasticSlot.count-1, plasticSlot.data);
this.container.validateAll();
this.container.setSlot("result", item, resultSlot.count+1, 0);
}
}
}
}
},
click: function(id){
if(id == ItemID.hammer){
return false;
} else{
alert("You must have a hammer to make your own tools");
return true;
}
},
getGuiScreen: function(){
return tbui;
}
});

TileEntity.registerPrototype(BlockID.bomb,{
destroyBlock: function(c){
World.explode(c.x, c.y, c.z, 3, true);
}
});




// file: items/ids.js

IDRegistry.genItemID("plasticItem");
IDRegistry.genItemID("liquidPlastic");
IDRegistry.genItemID("pickaxeForm");
IDRegistry.genItemID("swordForm");
IDRegistry.genItemID("hammer");
IDRegistry.genItemID("plasticPickaxe");
IDRegistry.genItemID("plasticSword");




// file: items/items.js

Item.createItem("plasticItem", "Plastic", {name: "plastic"});
Item.createItem("liquidPlastic", "Liquid Plastic", {name: "bucket", meta:1});
Item.createItem("pickaxeForm", "Pickaxe Form", {name: "pickaxe_form"}, {stack: 16});
Item.createItem("swordForm", "Sword Form", {name: "sword_form"}, {stack: 16});
Item.createItem("hammer", "Hammer", {name: "hammer"}, {stack: 1});
Item.createItem("plasticPickaxe", "Plastic Pickaxe", {name: "plastic_pickaxe"}, {stack: 1});
Item.createItem("plasticSword", "Plastic Sword", {name: "plastic_sword"}, {stack: 1});




// file: items/description.js

Item.describeItem("hammer", {
toolRender: true
});
Item.describeItem("plasticPickaxe", {
toolRender: true
});
Item.describeItem("plasticSword", {
toolRender: true
});




// file: items/tools.js

importLib("ToolType","*");

ToolAPI.addToolMaterial("plastic", {durability: 100, level: 3, efficiency: 6, damage: 2, enchantability: 3});

ToolAPI.setTool(ItemID.plasticSword, "plastic", ToolType.sword);
ToolAPI.setTool(ItemID.plasticPickaxe, "plastic", ToolType.pickaxe);




// file: recipes/recipes.js

Recipes.addShaped({id: BlockID.plasticBlock, count: 1, data:0}, [
"xxx",
"xxx",
"xxx"], ["x", ItemID.plasticItem, 0]);

Recipes.addShaped({id: ItemID.hammer, count: 1, data:0}, [
"xxx",
"xxx",
" a "
], ["x", 5, -1, "a", 280, 0]);

Recipes.addShaped({id: ItemID.pickaxeForm, count: 1, data:0}, [
"xxx",
" x ",
" x "
], ["x", 5, -1]);

Recipes.addShaped({id: ItemID.swordForm, count: 1, data:0}, [
" x ",
" x ",
" x "
], ["x", 5, -1]);

Recipes.addShaped({id: BlockID.rec_machine, count: 1, data:0}, [
"xxx",
"xax",
"xxx"
], ["x", 1, 0, "a", 61, 0]);

Recipes.addShaped({id: BlockID.toolBench, count: 1, data:0}, [
"xax",
"xxx",
"xxx"
], ["x", 5, -1, "a", 58, 0]);

Recipes.addFurnace(BlockID.plasticBlock, ItemID.liquidPlastic);
Recipes.addFurnace(ItemID.plasticItem, ItemID.liquidPlastic);




// file: ores/ores.js

/*Callback.addCallback("PostLoaded", function(){	Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i = 0; i < 10; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 70);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.plasticBlock, 0, random(8, 12));
}
});
});

function random(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min;
}*/




// file: translations/translations.js

Translation.addTranslation("Plastic", {ru:"Пластик"});
Translation.addTranslation("Liquid Plastic", {ru:"Жидкий Пластик"});
Translation.addTranslation("Pickaxe Form", {ru:"Форма для кирки"});
Translation.addTranslation("Sword Form", {ru:"Форма для меча"});
Translation.addTranslation("Hammer", {ru:"Молот"});
Translation.addTranslation("Plastic Pickaxe", {ru:"Пластиковая кирка"});
Translation.addTranslation("Plastic Sword", {ru:"Пластиковый меч"});
Translation.addTranslation("Recycle Machine", {ru:"Переработчик"});
Translation.addTranslation("Plastic Block", {ru:"Пластиковый блок"});
Translation.addTranslation("Tool Bench", {ru:"Верстак инструментов"});
Translation.addTranslation("Bomb", {ru:"Бомба"});




