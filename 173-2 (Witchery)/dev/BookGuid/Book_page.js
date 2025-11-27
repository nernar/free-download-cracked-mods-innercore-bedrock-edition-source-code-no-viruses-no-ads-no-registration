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



