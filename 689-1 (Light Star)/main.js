/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 8
*/



// file: header.js

IMPORT("BackpackAPI");
IMPORT("GuideAPI");
IMPORT("DungeonAPI");
IMPORT("ToolType");




// file: other.js

IDRegistry.genItemID("Avoska");
Item.createItem("Avoska", "String Bag", {name: "Avoska", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.Avoska, {
    slots: 5,
    slotsCenter: true,
    inRow: 1
});
Recipes.addShaped({id: ItemID.Avoska, count: 1, data: 0}, [
		" a ",
		"a a",
		"aaa"
	], ['a', 287, 0]);
//одеваемые
IDRegistry.genItemID("Remen");
Item.createArmorItem("Remen", "Strap", {name: "Remen"}, {type: "leggings", armor: 6, durability: 5556, texture: "armor/Snachok_1.png", isTech:false}); 
Recipes.addShaped({id: ItemID.Remen, count: 1, data: 0}, [
		" a ",
		"aba",
		"aba"
	], ['a', 334, 0, 'b', 266, 0]);
//электроника
IDRegistry.genItemID("Acam");
Item.createItem("Acam", "Accumulator", {name: "Acamulator", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.Acam, count: 1, data: 0}, [
		"aba",
		"cbc",
		"bbb"
	], ['a', 356, 0, 'b', 265, 0, 'c', 404, 0]);
IDRegistry.genItemID("Plast");
Item.createItem("Plast", "Lead Plate", {name: "Plast", meta: 0}, {stack: 64});
IDRegistry.genItemID("Battarey");
Item.createItem("Battarey", "Battery: Planet-2", {name: "Battery", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.Battarey, count: 1, data: 0}, [
		"a a",
		" b ",
		" b "
	], ['a', ItemID.Plast, 0, 'b', 265, 0]);
Item.registerUseFunctionForID(ItemID.Acam, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
  Entity.setCarriedItem(player, ItemID.Plast, 2, 0)
}});




// file: Decor/block.js

IDRegistry.genBlockID("ApparatOne");
Block.createBlockWithRotation("ApparatOne", [{name: "Low Block Of The Unit", texture: [["side", 0], ["side", 0], ["side", 0], ["front", 0], ["side", 0], ["side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ApparatOne, "stone", 2, true);
Block.setDestroyLevel("ApparatOne", 2);
IDRegistry.genBlockID("ApparatTwo");
Block.createBlockWithRotation("ApparatTwo.", [{name: "High Block Of The Unit", texture: [["side", 0], ["side", 0], ["side", 0], ["front", 1], ["side", 0], ["side", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.ApparatTwo, "stone", 2, true);
Block.setDestroyLevel("ApparatTwo", 2);

IDRegistry.genBlockID("SneckOne");
Block.createBlockWithRotation("SneckOne", [{name: "Low Block Of The Sneck Apparatus", texture: [["side", 1], ["side", 1], ["side", 1], ["sneck", 0], ["side", 1], ["side", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.SneckOne, "stone", 2, true);
Block.setDestroyLevel("SneckOne", 2);
IDRegistry.genBlockID("SneckTwo");
Block.createBlockWithRotation("SneckTwo", [{name: "High Block Of The Sneck Apparatus", texture: [["side", 1], ["side", 1], ["side", 1], ["sneck", 1], ["side", 1], ["side", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.SneckTwo, "stone", 2, true);
Block.setDestroyLevel("SneckTwo", 2);




// file: guns.js

IMPORT("ShootLib", "ShootLib");

var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;

ShootLib.init({
    crosshairGUI:{
        bitmap:{
            coords:{
                width:2048,
                height:512
            },
            size:{
                width:4000,
                height:1000
            }
        }
    }
});
ShootLib.addGun({
    id:"Ak47",
    name:"AK-47",
    ammo:"Akpatron",
    accuracy:5,
    recoil:3,
    rate:6,
    texture:{
        name:"Ak47",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:10,
        count:30,
        damage:20
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"ShootAK.ogg",
        empty:"EmptyAK.ogg",
        reload:"ReloadAK.ogg"
    }
});
ShootLib.addGun({
    id:"Ppsh",
    name:"SGS",
    ammo:"Ppshpatron",
    accuracy:5,
    recoil:1,
    rate:6,
    texture:{
        name:"Ppsh",
        meta:0
    },
    shotType:ShotType.NORMAL,
    buttonType:ButtonType.TOUCH,
    bullet:{
        speed:20,
        count:71,
        damage:30
    },
    fov:{
        level:10
    },
    sounds:{
        shot:"ShootAK.ogg",
        empty:"EmptyAK.ogg",
        reload:"ReloadAK.ogg"
    }
});
ShootLib.addAmmos([{
    id:"Akpatron",
    name:"AK Bullets",
    texture:{
        name:"akpatron",
        meta:0
    }
},{
    id:"Ppshpatron",
    name:"SGS Bullets",
    texture:{
        name:"Ppshpatron",
        meta:0
    }
},]);
IDRegistry.genItemID("Ak47")

Recipes.addShaped({id: ItemID.Ak47, count: 1, data: 0}, [
	"abb",
	" cb",
	" aa"
], ['a', 265 , 0, 'b', 5, 0, 'c', 331, 0]);
IDRegistry.genItemID("Ppsh")

Recipes.addShaped({id: ItemID.Ppsh, count: 1, data: 0}, [
	"abb",
	"aac",
	" aa"
], ['a', 265 , 0, 'b', 356, 0, 'c', ItemID.Plast, 0]);
IDRegistry.genItemID("Akpatron")

Recipes.addShaped({id: ItemID.Akpatron, count: 1, data: 0}, [
	"",
	"cb",
	"ac"
], ['a', 265 , 0, 'b', 331, 0, 'c', 289, 0]);
IDRegistry.genItemID("Ppshpatron")

Recipes.addShaped({id: ItemID.Ppshpatron, count: 1, data: 0}, [
	"bbb",
	"cac",
	"bbb"
], ['a', 265 , 0, 'b', 331, 0, 'c', 289, 0]);




// file: Decor/items.js

//выжигатель
IDRegistry.genItemID("Vijog");
Item.createItem("Vijog", "Burning Machine", {name: "vijog", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.Vijog, count: 1, data: 0}, [
		"  a",
		"aab",
		"cc"
	], ['a', 265, 0, 'b', 287, 0, 'c', ItemID.Battarey, 0]);
IDRegistry.genItemID("Doska");
Item.createItem("Doska", "Plank", {name: "doska", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.Doska, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "
	], ['a', 334, 0, 'b', 5, 0]);
IDRegistry.genItemID("DoskaT");
Item.createItem("DoskaT", "Plank With Tank", {name: "doska", meta: 1}, {stack: 64});
Recipes.addShaped({id: ItemID.DoskaT, count: 1, data: 0}, [
		"ab",
		"",
		""
	], ['a', ItemID.Vijog, 0, 'b', ItemID.Doska, 0]);
IDRegistry.genItemID("DoskaS");
Item.createItem("DoskaS", "Plank With Star", {name: "doska", meta: 2}, {stack: 64});
Recipes.addShaped({id: ItemID.DoskaS, count: 1, data: 0}, [
		"a",
		"b",
		""
	], ['a', ItemID.Vijog, 0, 'b', ItemID.Doska, 0]);
IDRegistry.genItemID("DoskaH");
Item.createItem("DoskaH", "Plank With Sickle And Hammer", {name: "doska", meta: 3}, {stack: 64});
Recipes.addShaped({id: ItemID.DoskaH, count: 1, data: 0}, [
		"",
		"ab",
		""
	], ['a', ItemID.Vijog, 0, 'b', ItemID.Doska, 0]);
//символ
IDRegistry.genItemID("Serp");
Item.createItem("Serp", "Sickle", {name: "Serp", meta: 0}, {stack: 64});
IDRegistry.genItemID("Hamm");
Item.createItem("Hamm", "Hammer", {name: "Hammer", meta: 0}, {stack: 64});
ToolAPI.addToolMaterial("Ussr", {
     durability: 69,
     level: 4, 
     efficiency: 10, 
     damage: 7, 
     enchantability: 22
});
ToolAPI.setTool(ItemID.Serp, "Ussr", ToolType.hoe);
ToolAPI.setTool(ItemID.Hamm, "Ussr", ToolType.sword);
Recipes.addShaped({id: ItemID.Hamm, count: 1, data: 0}, [
		"aaa",
		" a ",
		" a "
	], ['a', 266, 0]);
Recipes.addShaped({id: ItemID.Serp, count: 1, data: 0}, [
		"aaa",
		"a  ",
		" a "
	], ['a', 266, 0]);
IDRegistry.genItemID("Snachok");
Item.createArmorItem("Snachok", "Pin", {name: "Snachok"}, {type: "chestplate", armor: 7, durability: 5556, texture: "armor/Snachok_0.png", isTech:false}); 
Recipes.addShaped({id: ItemID.Snachok, count: 1, data: 0}, [
		"aaa",
		"bac",
		" a "
	], ['a', 265, 0, 'b', ItemID.Serp, 0, 'c', ItemID.Hamm, 0]);
//стакан
IDRegistry.genItemID("Stakan");
Item.createItem("Stakan", "Glass", {name: "Gempty", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.Stakan, count: 1, data: 0}, [
		"a a",
		"a a",
		" a "
	], ['a', 20, 0]);
//монетка
IDRegistry.genItemID("MoneyF");
Item.createItem("MoneyF", "50 Kopecks", {name: "denga", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.MoneyF, count: 1, data: 0}, [
		"aa",
		"aa",
		""
	], ['a', 371, 0]);




// file: eatble.js

IDRegistry.genItemID("Mars");
Item.createFoodItem("Mars", "Bar Mars", {name: "Mars", meta: 0},{isTech:false,stack: 64,food: 2});
Item.registerUseFunctionForID(ItemID.MoneyF, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
    	if(block.id == BlockID.SneckTwo){
  Entity.setCarriedItem(player, ItemID.Mars, 1, 0)
}}});
IDRegistry.genItemID("Cola");
Item.createFoodItem("Cola", "Galss Of Coca-Cola", {name: "Gcola", meta: 0},{isTech:false,stack: 64,food: 2});
Recipes.addShaped({id: ItemID.Cola, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['b', ItemID.Water, 0, 'a', 353, 0]);
IDRegistry.genItemID("Water");
Item.createFoodItem("Water", "Glass Of Water", {name: "Gwater", meta: 0},{isTech:false,stack: 64,food: 1});
Item.registerUseFunctionForID(ItemID.Stakan, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
    	if(block.id == BlockID.ApparatTwo){
  Entity.setCarriedItem(player, ItemID.Water, 1, 0)
}}});




// file: translate.js

Translation.addTranslation("String Bag", {ru: "Авоська"});
Translation.addTranslation("Strap", {ru: "Ремень"});
Translation.addTranslation("Accumulator", {ru: "Аккумулятор"});
Translation.addTranslation("Lead Plate", {ru: "Свинцовая Пластина"});
Translation.addTranslation("Battery: Planet-2", {ru: "Батарейка: Планета-2"});
Translation.addTranslation("Low Block Of The Unit", {ru: "Нижний Блок Аппарата ГазВоды"});
Translation.addTranslation("High Block Of The Unit", {ru: "Верхний Блок Аппарата ГазВоды"});
Translation.addTranslation("Game", {ru: "Игровая Приставка"});
Translation.addTranslation("SGS", {ru: "ППШ"});
Translation.addTranslation("AK Bullets", {ru: "Патроны к АК"});
Translation.addTranslation("SGS Bullets", {ru: "Патроны к ППШ"});
Translation.addTranslation("Sickle", {ru: "Серп"});
Translation.addTranslation("Hammer", {ru: "Молот"});
Translation.addTranslation("Bar Mars", {ru: "Батончик Марс"});
Translation.addTranslation("Galss Of Coca-Cola", {ru: "Стакан Кока-Колы"});
Translation.addTranslation("Glass Of Water", {ru: "Стакан Газированной Воды"});
Translation.addTranslation("Burning Machine", {ru: "Выжигатель"});
Translation.addTranslation("Plank", {ru: "Доска"});
Translation.addTranslation("Plank With Sickle And Hammer", {ru: "Доска С Серпом И Молотом"});
Translation.addTranslation("Plank With Star", {ru: "Доска Со Звездой"});
Translation.addTranslation("Plank With Tank", {ru: "Доска С Танком"});
Translation.addTranslation("Glass", {ru: "Стакан"});
Translation.addTranslation("Pin", {ru: "Значок"});
Translation.addTranslation("Low Block Of The Sneck Apparatus", {ru: "Нижний Блок Снекового Аппарата"});
Translation.addTranslation("High Block Of The Sneck Apparatus", {ru: "Верхний Блок Снекового Аппарата"});
Translation.addTranslation("50 Kopeks", {ru: "50 Копеек"});




// file: cafe.js

var StructureTest = new DungeonAPI("sasha.json");

StructureTest.setPrototype({
    isSetBlock: function (x, y, z, id, data, identification){
        return true;
    }
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 1);
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
    StructureTest.setStructure(coords.x, coords.y + 1, coords.z);
});




