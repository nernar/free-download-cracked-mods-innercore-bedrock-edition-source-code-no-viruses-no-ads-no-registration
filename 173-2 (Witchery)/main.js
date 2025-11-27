/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 7
*/



// file: kolba.js

IDRegistry.genItemID("kolba_pust");
Item.createItem("kolba_pust","Пустая колба", {name:"kolba_pust"},{});

Recipes.addShaped({id: ItemID.kolba_pust, count: 1, data: 0}, [
"xox",
"xox",
"xxx"
], ['x', 20, 0]);

IDRegistry.genItemID("kolba_with_water");
Item.createItem("kolba_with_water","Колба наполненная водой", {name:"kolba_with_water"},{});


Recipes.addShaped({id: ItemID.kolba_with_water, count: 1, data: 0}, [
"aaa",
"aox",
"aaa"
], ['x',325, 8, 'o', ItemID.kolba_pust, 0]);

IDRegistry.genItemID("kolba_with_lava");
Item.createItem("kolba_with_lava","Колба наполненная лывой", {name:"kolba_with_lava"},{});


Recipes.addShaped({id: ItemID.kolba_with_lava, count: 1, data: 0}, [
"aaa",
"aox",
"aaa"
], ['x',325, 10, 'o', ItemID.kolba_pust, 0]);






// file: ignot.js

IDRegistry.genItemID("obc_ignot");
Item.createItem("obc_ignot","Обсидиановый слиток", {name:"obc_ignot"},{stack:64});

Recipes.addShaped({id: ItemID.obc_ignot, count: 1, data: 0}, [
"xxx",
"xxx",
"xxx"
], ['x', 49, 0]);









// file: kotel.js

IDRegistry.genItemID("kotel");
Item.createItem("kotel","Котёл ведьмы", {name:"kotel"},{stack:1});


Recipes.addShaped({id: ItemID.kotel, count: 1, data: 0}, [
"xox",
"xox",
"xxx"
], ['x', ItemID.obc_ignot, 0]);



IDRegistry.genBlockID("kotel_pust"); 
Block.createBlock("kotel_pust", [{name: "Котёл пустой", texture: [["stone", 0]], inCreative: true}]);


Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.kotel){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.kotel_pust, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

Block.registerDropFunctionForID(BlockID.kotel_pust, function(coords, id, data, diggingLevel, toolLevel){ 
return [[ItemID.kotel, 1, 0]];
});
var renderKotel = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.kotel_pust, 0, renderKotel); 

var modelKotel = BlockRenderer.createModel();



modelKotel.addBox(3/16, 0/16, 3/16, 13/16, 1/16,13/16, "obc", 0);//нижняя плита

modelKotel.addBox(2/16, 1/16, 2/16, 14/16, 2/16,14/16, "obc", 0);//нижняя плита dop

modelKotel.addBox(2/16, 2/16, 1/16, 14/16, 10/16,2/16, "obc", 0);//сторона1/4

modelKotel.addBox(2/16, 2/16, 14/16, 14/16, 10/16,15/16, "obc", 0);//сторона2/4

modelKotel.addBox(1/16, 2/16, 2/16, 2/16, 10/16,14/16, "obc", 0);//сторона3/4

modelKotel.addBox(14/16, 2/16, 2/16, 15/16, 10/16,14/16, "obc", 0);//сторона4/4

modelKotel.addBox(3/16, 10/16, 3/16, 13/16, 11/16,13/16, "obc", 0);//верхняя плита

modelKotel.addBox(3/16, 11/16, 2/16, 13/16, 15/16,3/16, "obc", 0);//чаша1/4

modelKotel.addBox(3/16, 11/16, 13/16, 13/16, 15/16,14/16, "obc", 0);//чаша2/4

modelKotel.addBox(2/16, 11/16, 3/16, 3/16, 15/16,13/16, "obc", 0);//чаша3/4

modelKotel.addBox(13/16, 11/16, 3/16, 14/16, 15/16,13/16, "obc", 0);//чаша4/4

renderKotel.addEntry(modelKotel);

Block.setBlockShape(BlockID.kotel_pust, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});





// file: fire.js

var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({ 
 lightlevel: 11});


IDRegistry.genItemID("fire");
Item.createItem("fire","Костёр", {name:"fire"},{stack:1});


Recipes.addShaped({id: ItemID.fire, count: 1, data: 0}, [
"oxo",
"xax",
"xxx"
], ['x', 17, 0,'a',259,0]);




Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.fire){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.fire, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});


Block.registerDropFunctionForID(BlockID.fire, function(coords, id, data, diggingLevel, toolLevel){ 
return [[ItemID.fire, 1, 0]];
});



IDRegistry.genBlockID("fire"); 
Block.createBlock("fire", [{name: "Костёр", texture: [["stone", 0]], inCreative: true}],BLOCK_TYPE_LOW_LIGHT);

var renderFire = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.fire, 0, renderFire); 

var modelFire = BlockRenderer.createModel();



modelFire.addBox(7/16, 0/16, 3/16, 9/16, 2/16,13/16, "wood", 0);//полено1

modelFire.addBox(3/16, 0/16, 7/16, 13/16, 2/16,9/16, "wood", 0);//полено2

modelFire.addBox(7/16, 2/16, 4/16, 9/16, 4/16,6/16, "wood", 0);//полено1/3

modelFire.addBox(7/16, 4/16, 5/16, 9/16, 6/16,7/16, "wood", 0);//полено2/3

modelFire.addBox(7/16, 6/16, 7/16, 9/16, 8/16,9/16, "wood", 0);//полено3/3

modelFire.addBox(7/16, 2/16, 10/16, 9/16, 4/16,12/16, "wood", 0);//полено1/2@

modelFire.addBox(7/16, 4/16, 9/16, 9/16, 6/16,11/16, "wood", 0);//полено2/2@


modelFire.addBox(10/16, 2/16, 7/16, 12/16, 4/16,9/16, "wood", 0);//полено1/2@@

modelFire.addBox(9/16, 4/16, 7/16, 11/16, 6/16,9/16, "wood", 0);//полено2/2@@



modelFire.addBox(4/16, 2/16, 7/16, 6/16, 4/16,9/16, "wood", 0);//полено1/2&

modelFire.addBox(5/16, 4/16, 7/16, 7/16, 6/16,9/16, "wood", 0);//полено2/2&

//fire
modelFire.addBox(8/16, 8/16, 8/16, 9/16, 9/16,9/16, "red", 0);

modelFire.addBox(8/16, 4/16, 8/16, 9/16, 5/16,9/16, "red", 0);

modelFire.addBox(4/16, 4/16, 7/16, 5/16, 5/16,8/16, "red", 0);

modelFire.addBox(7/16, 6/16, 5/16, 8/16, 7/16,6/16, "red", 0);

modelFire.addBox(7/16, 6/16, 8/16, 9/16, 8/16,9/16, "red", 0);//fire/1/2

modelFire.addBox(8/16, 6/16, 7/16, 9/16, 8/16,9/16, "red", 0);//fire/2/2

renderFire.addEntry(modelFire);

Block.setBlockShape(BlockID.fire, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});





// file: eyas_crop.js

IDRegistry.genItemID("eyes_apple");
Item.createItem("eyes_apple","Глазное яблоко", {name:"eyes_apple"},{stack:64});


IDRegistry.genBlockID("eyes_crop"); 
Block.createBlock("eyes_crop", [{name: "Цветок глазное яблоко", texture: [["stone", 0]], inCreative: true}]);

var renderEyes_crop = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.eyes_crop, 0, renderEyes_crop); 

var modelEyes_crop = BlockRenderer.createModel();



modelEyes_crop.addBox(0/16, 0/16, 8/16, 16/16, 16/16,8/16, "eyas", 0);//полено1

modelEyes_crop.addBox(8/16, 0/16, 0/16, 8/16, 16/16,16/16, "eyas", 0);//полено2

renderEyes_crop.addEntry(modelEyes_crop);

Block.setBlockShape(BlockID.eyes_crop, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});






IDRegistry.genBlockID("eyes_crop_input"); 
Block.createBlock("eyes_crop_input", [{name: "Цветок глазное яблоко", texture: [["stone", 0]], inCreative: false}]);

var renderEyes_crop_input = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.eyes_crop_input, 0, renderEyes_crop_input); 

var modelEyes_crop_input = BlockRenderer.createModel();



modelEyes_crop_input.addBox(0/16, 0/16, 8/16, 16/16, 16/16,8/16, "esi", 0);//полено1

modelEyes_crop_input.addBox(8/16, 0/16, 0/16, 8/16, 16/16,16/16, "esi", 0);//полено2

renderEyes_crop_input.addEntry(modelEyes_crop_input);

Block.setBlockShape(BlockID.eyes_crop_input, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});




Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id==BlockID.eyes_crop){
   World.drop(coords.x,coords.y+1, coords.z, ItemID.eyes_apple, 1)

World.setBlock(coords.x,coords.y, coords.z, BlockID.eyes_crop_input, 0)
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}
});


Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id==BlockID.eyes_crop_input){
   World.drop(coords.x,coords.y+1, coords.z, 295, 1)

World.setBlock(coords.x,coords.y, coords.z, 0, 0)
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}
});





Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
     if(Math.random() <0.1){
    for(var i=0;i<2;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 70, 80);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.eyes_crop, 7, 6);
    }
}
}
)




// file: BookGuid/Book_page.js

var page_full = new UI.StandartWindow({
 standart: {
  header: {text: {text: "Книга Ведьмы"}},
  background: {bitmap: "page"}
 
},
 
 drawing: [
 {type: "text", text: "1.О моде.", x: 0, y: 50},

{type: "text", text: "2.Колба, колба с водой, колба с лавой.", x: 0, y: 110},

{type: "text", text: "3.Обсидиановый слиток.", x: 0, y: 170},

{type: "text", text: "4.Котёл Ведьмы.", x: 0, y: 230},

{type: "text", text: "4.Костёр.", x: 0, y: 290},

{type: "text", text: "5.Зелье Обсидиановой Кожи.", x: 0, y: 350}
],
 
 elements: {

"o_mode": {type: "button", bitmap: "b", x: 140, y: 15,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(page_o_mode)
}
}
},


"kolba": {type: "button", bitmap: "b", x: 495, y: 75,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(kolba)
}
}
},


"obc_ignot": {type: "button", bitmap: "b", x: 320, y: 135,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(obc_ignot)
}
}
},


"kotel": {type: "button", bitmap: "b", x: 200, y: 195,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(page_o_kotel)
}
}
},



"koster": {type: "button", bitmap: "b", x: 160, y: 255,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(page_koster)
}
}
},


"point_obc": {type: "button", bitmap: "b", x: 350, y: 315,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(point_obc)
}
}
}



}
});



var page_o_mode = new UI.StandartWindow({
 standart: {
  header: {text: {text: "Книга Ведьмы"}},
  background: {bitmap: "page"}
 
},
 
 drawing: [
 {type: "text", text: "Мод Witcher(IC) создан WebProgramming.Мод добавит в вашу игру зелье,", x: 0, y: 50, size:20},

 {type: "text", text: "амулеты, новые предметы, обряды, новое зельеваренье.", x: 0, y: 70, size:20}
],
 
 elements: {
"exit_page_o_mode": {type: "button", bitmap: "pre", x: 50, y: 450,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(page_full)
}
}
}
}
});


var kolba = new UI.StandartWindow({
 standart: {
  header: {text: {text: "Книга Ведьмы"}},
  background: {bitmap: "page"}
 
},
 
 drawing: [
 {type: "text", text: "Колбы неотъемлемоя часть колдовства!", x: 0, y: 50, size:20}
],
 
 elements: {
"kolba" : {type: "image", x: 100, y: 190, bitmap: "kolba", scale: 1},

"kolbaWater" : {type: "image", x: 350, y: 190, bitmap: "kolbaWater", scale: 1},

"kolbaLava" : {type: "image", x: 700, y: 190, bitmap: "kolbaLava", scale: 1},

"exit_kolba": {type: "button", bitmap: "pre", x: 50, y: 450,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(page_full)
}
}
}

}

});






var obc_ignot = new UI.StandartWindow({
 standart: {
  header: {text: {text: "Книга Ведьмы"}},
  background: {bitmap: "page"}
 
},
 
 drawing: [
 {type: "text", text: "Обсидиановый слиток самый крепкий и волшебный слиток.Он состаит целе-", x: 0, y: 50, size:20},

{type: "text", text: "ком из обсидиана.Слиток может выдержать любую температуру! Именно поэт-", x: 0, y: 80, size:20},


{type: "text", text: "ому ведьмы используют его для создания котла.", x: 0, y: 110, size:20}
],
 
 elements: {
"exit_obc_ignot": {type: "button", bitmap: "pre", x: 50, y: 450,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(page_full)
}
}
},

"obc_ignot" : {type: "image", x: 450, y: 170, bitmap: "obc_ignot", scale: 1},



}

});




var page_o_kotel = new UI.StandartWindow({
 standart: {
  header: {text: {text: "Книга Ведьмы"}},
  background: {bitmap: "page"}
 
},
 
 drawing: [
 {type: "text", text: "Котёл Ведьмы - это начало изучения волшебства!Ведьмы готовят в нём зелья,", x: 0, y: 50, size:20},

{type: "text", text: " снадобья.По слухам они даже капают в нём своих детей!", x: 0, y: 90, size:20}
],
 
 elements: {
"exit_page_o_kotel": {type: "button", bitmap: "pre", x: 50, y: 450,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(page_full)
}
}
},


"kotel" : {type: "image", x: 300, y: 180, bitmap: "kotel", scale: 1},


"kotel_img" : {type: "image", x: 480, y: 170, bitmap: "kotel_img", scale: 1},

}

});




var page_koster = new UI.StandartWindow({
 standart: {
  header: {text: {text: "Книга Ведьмы"}},
  background: {bitmap: "page"}
 
},
 
 drawing: [
 {type: "text", text: "Без костра вода в котле не будет,кипятиться,а это значит , что зелья", x: 0, y: 50, size:20},

 {type: "text", text: "варить не возможно!", x: 0, y: 80, size:20}


],
 
 elements: {
"exit_page_koster": {type: "button", bitmap: "pre", x: 50, y: 450,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(page_full)
}
}
},


"koster" : {type: "image", x: 100, y: 190, bitmap: "koster", scale: 1},


"koster_img" : {type: "image", x: 400, y: 190, bitmap: "koster_img", scale: 1},
}

});


IDRegistry.genItemID("bookW");
Item.createItem("bookW","Книга Ведьмы", {name:"bookW"},{stack:1});

Recipes.addShaped({id: ItemID.bookW, count: 1, data: 0}, [
"xxx",
"ooo",
"xxx"
], ['x', 334, 0,'o',339,0]);



var containerLIM = new UI.Container();
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.bookW){
containerLIM.openAs(page_full)

}
});



var point_obc = new UI.StandartWindow({
 standart: {
  header: {text: {text: "Книга Ведьмы"}},
  background: {bitmap: "page"}
 
},
 
 drawing: [
 {type: "text", text: "Зелье Обсидиановой кожи сделает вас крепче и вы перестанете бояться огня.", x: 0, y: 50, size:20},

 {type: "text", text: "Но не навсегда.", x: 0, y: 80, size:20},

{type: "text", text: "Его рецепт прост:колба с водой + колба с лавой.", x: 0, y: 110, size:20}
],
 
 elements: {
"exit_point_obc": {type: "button", bitmap: "pre", x: 50, y: 450,  clicker: {
onClick: function(container){  
var pageWitch = new UI.Container();
containerLIM.openAs(page_full)
}
}
},


"point_ocb" : {type: "image", x: 400, y: 190, bitmap: "point_ocb", scale: 1},



}
});







// file: Point_obc.js

ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}





IDRegistry.genItemID("point_obc");
Item.createItem("point_obc","Зелье Обсидиановой кожи.", {name:"point_obc"},{});
Item.setMaxDamage(ItemID.point_obc, 400);

Callback.addCallback("tick", function(){
if(Player.getCarriedItem().id==ItemID.point_obc){
Entity.addEffect(Player.get(), 11, 100, 2, false, false)

Entity.addEffect(Player.get(), 12, 100, 2, false, false)
ToolAPI.breakCarriedTool(1);
}
});


Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.kolba_with_water&&block.id==BlockID.kotel_pust&&World.getBlockID(coords.x, coords.y-1, coords.z)==BlockID.fire){
   World.setBlock(coords.x,coords.y, coords.z, BlockID.kotel_water, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});



Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.kolba_with_lava&&block.id==BlockID.kotel_water&&World.getBlockID(coords.x, coords.y-1, coords.z)==BlockID.fire){
   World.setBlock(coords.x,coords.y, coords.z, BlockID.kotel_water_lava, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});



Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.kolba_pust&&block.id==BlockID.kotel_water_lava){
   World.drop(coords.x,coords.y, coords.z, ItemID.point_obc, 1)

World.setBlock(coords.x,coords.y, coords.z, BlockID.kotel_pust, 0)
	Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});




IDRegistry.genBlockID("kotel_water"); 
Block.createBlock("kotel_water", [{name: "Котёл пустой", texture: [["stone", 0]], inCreative: false}]);





Block.registerDropFunctionForID(BlockID.kotel_water, function(coords, id, data, diggingLevel, toolLevel){ 
return [[ItemID.kotel, 1, 0]];
});
var renderKotelW = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.kotel_water, 0, renderKotelW); 

var modelKotelW = BlockRenderer.createModel();



modelKotelW.addBox(3/16, 0/16, 3/16, 13/16, 1/16,13/16, "obc", 0);//нижняя плита

modelKotelW.addBox(2/16, 1/16, 2/16, 14/16, 2/16,14/16, "obc", 0);//нижняя плита dop

modelKotelW.addBox(2/16, 2/16, 1/16, 14/16, 10/16,2/16, "obc", 0);//сторона1/4

modelKotelW.addBox(2/16, 2/16, 14/16, 14/16, 10/16,15/16, "obc", 0);//сторона2/4

modelKotelW.addBox(1/16, 2/16, 2/16, 2/16, 10/16,14/16, "obc", 0);//сторона3/4

modelKotelW.addBox(14/16, 2/16, 2/16, 15/16, 10/16,14/16, "obc", 0);//сторона4/4

modelKotelW.addBox(3/16, 10/16, 3/16, 13/16, 11/16,13/16, "obc", 0);//верхняя плита

modelKotelW.addBox(3/16, 11/16, 2/16, 13/16, 15/16,3/16, "obc", 0);//чаша1/4

modelKotelW.addBox(3/16, 11/16, 13/16, 13/16, 15/16,14/16, "obc", 0);//чаша2/4

modelKotelW.addBox(2/16, 11/16, 3/16, 3/16, 15/16,13/16, "obc", 0);//чаша3/4

modelKotelW.addBox(13/16, 11/16, 3/16, 14/16, 15/16,13/16, "obc", 0);//чаша4/4

modelKotelW.addBox(3/16, 11/16, 3/16, 13/16, 14/16,13/16, "water", 0);//налито
renderKotelW.addEntry(modelKotelW);

Block.setBlockShape(BlockID.kotel_water, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});






IDRegistry.genBlockID("kotel_water_lava"); 
Block.createBlock("kotel_water_lava", [{name: "Котёл пустой", texture: [["stone", 0]], inCreative: false}]);





Block.registerDropFunctionForID(BlockID.kotel_water_lava, function(coords, id, data, diggingLevel, toolLevel){ 
return [[ItemID.kotel, 1, 0]];
});
var renderKotelWL = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.kotel_water_lava, 0, renderKotelWL); 

var modelKotelWL = BlockRenderer.createModel();



modelKotelWL.addBox(3/16, 0/16, 3/16, 13/16, 1/16,13/16, "obc", 0);//нижняя плита

modelKotelWL.addBox(2/16, 1/16, 2/16, 14/16, 2/16,14/16, "obc", 0);//нижняя плита dop

modelKotelWL.addBox(2/16, 2/16, 1/16, 14/16, 10/16,2/16, "obc", 0);//сторона1/4

modelKotelWL.addBox(2/16, 2/16, 14/16, 14/16, 10/16,15/16, "obc", 0);//сторона2/4

modelKotelWL.addBox(1/16, 2/16, 2/16, 2/16, 10/16,14/16, "obc", 0);//сторона3/4

modelKotelWL.addBox(14/16, 2/16, 2/16, 15/16, 10/16,14/16, "obc", 0);//сторона4/4

modelKotelWL.addBox(3/16, 10/16, 3/16, 13/16, 11/16,13/16, "obc", 0);//верхняя плита

modelKotelWL.addBox(3/16, 11/16, 2/16, 13/16, 15/16,3/16, "obc", 0);//чаша1/4

modelKotelWL.addBox(3/16, 11/16, 13/16, 13/16, 15/16,14/16, "obc", 0);//чаша2/4

modelKotelWL.addBox(2/16, 11/16, 3/16, 3/16, 15/16,13/16, "obc", 0);//чаша3/4

modelKotelWL.addBox(13/16, 11/16, 3/16, 14/16, 15/16,13/16, "obc", 0);//чаша4/4

modelKotelWL.addBox(3/16, 11/16, 3/16, 13/16, 14/16,13/16, "black", 0);//налито
renderKotelWL.addEntry(modelKotelWL);

Block.setBlockShape(BlockID.kotel_water_lava, {x: 0, y: 0, z: 0}, {x: 1, y: 1, z: 1});












