//destroyBlock: paladium-smeltery, palaJobs\\

importLib("ToolType", "*");
IMPORT("HelperMod");
IMPORT("ToolLib");
importLib("BackpackAPI", '*');
IMPORT ("BaublesAPI", "Baubles");
IMPORT("RecipeTileEntityLib");

IDRegistry.genBlockID("cobbleBreaker");
Block.createBlockWithRotation("cobbleBreaker", [
    {
        name: "Cobble Breaker",
        texture:
         [["cobbleBreaker_top", 0], 
         ["cobbleBreaker_top", 0], 
         ["cobbleBreaker_side", 0], 
         ["cobbleBreaker_front", 0], 
         ["cobbleBreaker_side", 0], 
         ["cobbleBreaker_side", 0]],
        inCreative: true
    }
], "cutout");

var CobbleBreakerUI=new UI.StandartWindow({standart:{header:{text:{text:"Cobble Breaker"}},
inventory:{standart:true},
background:{standart:true}},
	drawing: {},
elements:{
"slotInput":{type:"slot",x:625,y:100, bitmap: "slotPala", size:55}, 
"slot1":{type:"slot",x:375,y:225,bitmap: "slotPala", size:55},
"slot2":{type:"slot",x:475,y:225,bitmap: "slotPala", size:55},
"slot3":{type:"slot",x:575,y:225,bitmap: "slotPala", size:55},
"slot4":{type:"slot",x:675,y:225,bitmap: "slotPala", size:55},
"slot5":{type:"slot",x:775,y:225,bitmap: "slotPala", size:55},
"slot6":{type:"slot",x:875,y:225,bitmap: "slotPala", size:55}
    }
});

TileEntity.registerPrototype(BlockID.cobbleBreaker,{getGuiScreen:function(){return CobbleBreakerUI}
});

var getNumberOfPotatoes = 0;

IDRegistry.genItemID("potato_bag");
Item.createItem("potato_bag", "Potato Bag", {name: "potato_bag", meta: 0}, {stack: 1}); 

IDRegistry.genItemID("sweet_potato");
Item.createItem("sweet_potato", "Sweet Potato", {name: "sweet_potato"}, {stack: 1});
Item.registerUseFunction("sweet_potato", function(coords, item, block) {
Entity.addEffect(Player.get(), 1, 10, 10, true, true);
});

IDRegistry.genBlockID("elevator");
Block.createBlock("elevator", [{name: "elevator", texture: [["elevator", 0]], inCreative: true}]);

TileEntity.registerPrototype(BlockID.elevator, {
defaultValues: {},
click: function(id, count, data, coords){ 
if(!Entity.getSneaking(Player.get()))
{
for(var yy = 2; yy <= 20; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.elevator){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}
else
if(Entity.getSneaking(Player.get()))
{
for(var yy = -20; yy <= -2; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.elevator){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}}});

IDRegistry.genBlockID("paladium_crusher");
Block.createBlockWithRotation("paladium_crusher", [
	{name: "paladium crusher", texture: [["crusher_top", 0], ["crusher_top", 0], ["crusher_side", 0], ["crusher_front", 0], ["crusher_side", 0], ["crusher_side", 0]], inCreative: true}
]);

IDRegistry.genBlockID("amethyst_portal_block");
Block.createBlock("amethyst_portal_block", [{name: "amethyst portal block", texture: [["amethyst_portal_block", 0]], inCreative: true}], "translucent");

IDRegistry.genBlockID("titane_portal_block");
Block.createBlock("titane_portal_block", [{name: "titane portal block", texture: [["titane_portal_block", 0]], inCreative: true}], "translucent");

IDRegistry.genBlockID("paladium_portal_block");
Block.createBlock("paladium_portal_block", [{name: "paladium portal block", texture: [["paladium_portal_block", 0]], inCreative: true}], "translucent");

IDRegistry.genBlockID("paladium_portal_block");
Block.createBlock("paladium_portal_block", [{name: "paladium portal block", texture: [["paladium_portal_block", 0]], inCreative: true}], "translucent");

IDRegistry.genBlockID("endium_portal_block");
Block.createBlock("endium_portal_block", [{name: "endium portal block ??", texture: [["endium_portal_block1", 0]], inCreative: true}], "translucent");

IDRegistry.genBlockID("endium_portal_block2");
Block.createBlock("endium_portal_block2", [{name: "endium portal block ??", texture: [["endium_portal_block2", 0]], inCreative: true}], "translucent");

const sève = 0;

IDRegistry.genBlockID("gold_tank");
Block.createBlock("gold_tank", [{name: "gold tank", texture: [["gold_tank", 0]], inCreative: true}], "translucent");

IDRegistry.genBlockID("amethyst_tank");
Block.createBlock("amethyst_tank", [{name: "amethyst tank", texture: [["amethyst_tank", 0]], inCreative: true}], "translucent");

IDRegistry.genBlockID("titane_tank");
Block.createBlock("titane_tank", [{name: "titane tank", texture: [["titane_tank", 0]], inCreative: true}], "translucent");

IDRegistry.genBlockID("paladium_tank");
Block.createBlock("paladium_tank", [{name: "paladium tank", texture: [["paladium_tank", 0]], inCreative: true}], "translucent");

IDRegistry.genItemID("JspCeQueC'est");
Item.createItem("JspCeQueC'est", "Jsp Ce Que C'est", {name: "JspCeQueC'est", meta: 0});

IDRegistry.genItemID("endium_gauntlet");
Item.createItem("endium_gauntlet", "endium gauntlet", {name: "endium_gauntlet", meta: 0});

IDRegistry.genItemID("amethyst_portal_key");
Item.createItem("amethyst_portal_key", "amethyst portal key", {name: "amethyst_portal_key", meta: 0});

IDRegistry.genItemID("titane_portal_key");
Item.createItem("titane_portal_key", "titane portal key", {name: "titane_portal_key", meta: 0});

IDRegistry.genItemID("paladium_portal_key");
Item.createItem("paladium_portal_key", "paladium portal key", {name: "paladium_portal_key", meta: 0});

IDRegistry.genItemID("endium_portal_key");
Item.createItem("endium_portal_key", "endium portal key", {name: "endium_portal_key", meta: 0});

Item.registerEatenFunction = function(id, func){
	id = this.getNumericId(id);
	if(!~id){
		return false;
	}
	this.registerEatenFunctionForID(id, func);
};

Item.getEatenFunc = function(id){
	return this.eatenFuncs[id];
};

Callback.addCallback("FoodEaten", function(food, ratio){
	const func = Item.getEatenFunc(Player.getCarriedItem().id);
	func && func(food, ratio);
});


const res = __config__.getNumber("resolution") | 0;
const color = android.graphics.Color[__config__.getString("color")] || android.graphics.Color.WHITE;

const bmp = new android.graphics.Bitmap.createBitmap(res * 4, res * 2, android.graphics.Bitmap.Config.ARGB_8888);
const cvs = new android.graphics.Canvas(bmp);
const paint = new android.graphics.Paint();

paint.setColor(color);
paint.setStyle(android.graphics.Paint.Style.STROKE);
paint.setStrokeWidth(1);

cvs.drawRect(res * 1, res * 0, res * 2 - 1, res * 1 - 1, paint);
cvs.drawRect(res * 2, res * 0, res * 3 - 1, res * 1 - 1, paint);
cvs.drawRect(res * 0, res * 1, res * 1 - 1, res * 2 - 1, paint);
cvs.drawRect(res * 1, res * 1, res * 2 - 1, res * 2 - 1, paint);
cvs.drawRect(res * 2, res * 1, res * 3 - 1, res * 2 - 1, paint);
cvs.drawRect(res * 3, res * 1, res * 4 - 1, res * 2 - 1, paint);
FileTools.WriteImage(__dir__ + "textures/model/blocks_outline.png", bmp);

const render = new Render({skin: "model/blocks_outline.png", scale: 16 / res * 1.02});
render.setPart("body", [{
	type: "box",
	uv: {x: 0, y: 0},
	coords: {x: res / 2, y: -res / 2 + 24, z: -res / 2},
	size: {x: res, y: res, z: res}
}], {width: res * 4, height: res * 2});

const anim = new Animation.Base();
anim.describe({render: render.getID()});

const getPointed = ModAPI.requireGlobal("Player.getPointed");
Callback.addCallback("tick", function(){
	const point = getPointed();
	const c = point.pos;
	if(c.x == 0 && c.y == 0 && c.z == 0){
		anim.destroy();
		return;
	}
	anim.setPos(c.x - 0.01, c.y - 0.01, c.z - 0.01);
	anim.load();
});

// file: translate.js

//general
Translation.addTranslation("Set both positions.",{
	ru:"Установите обе позиции.",
	en:"Set both positions.",
});
Translation.addTranslation("Don't valid command.",{
	ru:"Недействительная команда..",
	en:"Don't valid command.",
});
Translation.addTranslation("%count% block changed.",{
	ru:"%count% блок изменено.",
	en:"%count% block changed.",
});
Translation.addTranslation("%count% blocks changed.",{
	ru:"%count% блоков изменено.",
	en:"%count% blocks changed.",
});
Translation.addTranslation("%count% block.",{
	ru:"%count% блок.",
	en:"%count% block.",
});
Translation.addTranslation("%count% blocks.",{
	ru:"%count% блоков.",
	en:"%count% blocks.",
});
Translation.addTranslation("Block ID %id%:%data%.",{
	ru:"ID блока %id%:%data%.",
	en:"Block ID %id%:%data%.",
});
//set
Translation.addTranslation("Set all blocks inside the selection region to a specified block.", {
	ru:"Установите все блоки внутри выбранной области в указанный блок.",
	en:"Set all blocks inside the selection region to a specified block.",
});
//box
Translation.addTranslation("Build walls, floor, and ceiling.", {
	ru:"Построить стены, пол и потолок",
	en:"Build walls, floor, and ceiling.",
});
//set wool
Translation.addTranslation("Build the walls of the region (not including ceiling and floor).", {
	ru:"Построить стены региона (не включая потолок и пол).",
	en:"Build the walls of the region (not including ceiling and floor).",
});
//replace
Translation.addTranslation("Replace all blocks of the specified block(s) with another block inside the region.", {
	ru:"Замените все выбранные блоки другим блоком внутри региона.",
	en:"Replace all blocks of the specified block(s) with another block inside the region.",
});
//help
Translation.addTranslation("Help.", {
	ru:"Помощь.",
	en:"Help.",
});
Translation.addTranslation("===Help [Page %page%]===\n%cmd%===Help [Page %page%]===", {
	ru:"===Помощь(Страница %page%)===\n%cmd%===Помощь(Страница %page%)===",
	en:"===Help [Page %page%]===\n%cmd%===Help [Page %page%]===",
});
//pos
Translation.addTranslation("Set selection position #1 to the block above the one that you are standing on.", {
	ru:"Установить позицию 1 на блок выше того, на котором вы стоите.",
	en:"Set selection position #1 to the block above the one that you are standing on.",
});
Translation.addTranslation("Set selection position #2 to the block above the one that you are standing on.", {
	ru:"Установить позицию 2 на блок выше того, на котором вы стоите.",
	en:"Set selection position #2 to the block above the one that you are standing on.",
});
Translation.addTranslation("The first position is set to %x%,%y%,%z%.",{
	ru:"Первая позиция установлена в %x%,%y%,%z%.",
	en:"The first position is set to %x%,%y%,%z%.",
});
Translation.addTranslation("The second position is set to %x%,%y%,%z%.",{
	ru:"Вторая позиция установлена в %x%,%y%,%z%.",
	en:"The second position is set to %x%,%y%,%z%.",
});
Translation.addTranslation("The selected region is %sizeArea%",{
	ru:"Выбранный регион составляет %sizeArea%",
	en:"The selected region is %sizeArea%",
});
//undo
Translation.addTranslation("Undo your last action.", {
	ru:"Отменить последние действие.",
	en:"Undo your last action.",
});
Translation.addTranslation("Redo your last (undone) action. This command replays back history and does not repeat the command.", {
	ru:"Повторите последнее(отмененное) действие.",
	en:"Redo your last (undone) action. This command replays back history and does not repeat the command.",
});
Translation.addTranslation("Clear your history.", {
	ru:"Очистить истоию.",
	en:"Clear your history.",
});
Translation.addTranslation("History cleared.", {
	ru:"История очищена.",
	en:"History cleared.",
});
//wand
Translation.addTranslation("Gives you the \"EditWand\" (by default, a wooden axe).", {
	ru:"Дает вам \"EditWand\" (по умолчанию - деревянный топор).",
	en:"Gives you the \"EditWand\" (by default, a wooden axe).",
});
//region
Translation.addTranslation("Work with the region.", {
	ru:"Работа с регионом.",
	en:"Work with the region.",
});
Translation.addTranslation("Commands for working with the region.", {
	ru:"Команды для работы с регионом.",
	en:"Commands for working with the region.",
});
Translation.addTranslation("Raise the selected region by the specified number of blocks.", {
	ru:"Поднять выделенный регион на указанное количество блоков.",
	en:"Raise the selected region by the specified number of blocks.",
});
Translation.addTranslation("Lower the selected region by the specified number of blocks.", {
	ru:"Опустить выделенный регион на указанное количество блоков.",
	en:"Lower the selected region by the specified number of blocks.",
});
Translation.addTranslation("The region is raised to %area%", {
	ru:"Регион поднят на %area%",
	en:"The region is raised to %area%",
});
Translation.addTranslation("The region is omitted in %area%", {
	ru:"Регион опущен на %area%",
	en:"The region is omitted in %area%",
});
//Copy/Paste
Translation.addTranslation("Copy the selected area.", {
	ru:"Скопировать выделенную область.",
	en:"Copy the selected area.",
});
Translation.addTranslation("Region copied.", {
	ru:"Регион скопрован.",
	en:"Region copied.",
});
Translation.addTranslation("Paste the copied area.", {
	ru:"Вставить скопированную область.",
	en:"Paste the copied area.",
});
Translation.addTranslation("Cut the selected area.", {
	ru:"Скопировать выделенную область.",
	en:"Cut the selected area.",
});
Translation.addTranslation("Region cut.", {
	ru:"Регион вырезан.",
	en:"Region cut.",
});
//toggleeditwand
Translation.addTranslation("Toggles the edit wand selection mode, allowing you to use the edit wand item normally.", {
	ru:"Переключает режим выбора палочки редактирования, позволяя использовать элемент палочки редактирования в обычном режиме.",
	en:"Toggles the edit wand selection mode, allowing you to use the edit wand item normally.",
});
Translation.addTranslation("Mode wand edit switched.", {
	ru:"Режим палочки редактирования переключен.",
	en:"Mode wand edit switched.",
});
//desel
Translation.addTranslation("Deselects the current selection.", {
	ru:"Отменяет текущее выделение.",
	en:"Deselects the current selection.",
});
Translation.addTranslation("The current selection is canceled.", {
	ru:"Текущее выделение отмененно.",
	en:"The current selection is canceled.",
});




// file: main.js

var WorldEdit = {
	wand:true,
	
	pos1:{x:Infinity,y:Infinity,z:Infinity},
	pos2:{x:Infinity,y:Infinity,z:Infinity},
	
	sp1:{x:Infinity,y:Infinity,z:Infinity},
	sp2:{x:Infinity,y:Infinity,z:Infinity},
	
	undo:[],
	redo:[],
	
	copy:[],
	
	getSizeArea:function(){
		if(!WorldEdit.getValidPosition())return 1;
		
		var x = this.pos2.x - this.pos1.x +1;
		var y = this.pos2.y - this.pos1.y +1;
		var z = this.pos2.z - this.pos1.z +1;
		return Math.abs(x*y*z);
	},
	
	getValidPosition:function(){
		if(WorldEdit.pos1.x == Infinity || WorldEdit.pos1.y == Infinity || WorldEdit.pos1.z == Infinity || WorldEdit.pos2.x == Infinity || WorldEdit.pos2.y == Infinity || WorldEdit.pos2.z == Infinity)
			return false;
		
		return true;
	},
	
	selectPosition:function(p1,p2){
		if(p1!=null){
			WorldEdit.sp1 = p1;
		}
		if(p2!=null){
			WorldEdit.sp2 = p2;
		}
		
		if(WorldEdit.sp1.x > WorldEdit.sp2.x){
			WorldEdit.pos2.x = WorldEdit.sp1.x;
			WorldEdit.pos1.x = WorldEdit.sp2.x;
		}else{
			WorldEdit.pos2.x = WorldEdit.sp2.x;
			WorldEdit.pos1.x = WorldEdit.sp1.x;
		}
		
		if(WorldEdit.sp1.y > WorldEdit.sp2.y){
			WorldEdit.pos2.y = WorldEdit.sp1.y;
			WorldEdit.pos1.y = WorldEdit.sp2.y;
		}else{
			WorldEdit.pos2.y = WorldEdit.sp2.y;
			WorldEdit.pos1.y = WorldEdit.sp1.y;
		}
		
		if(WorldEdit.sp1.z > WorldEdit.sp2.z){
			WorldEdit.pos2.z = WorldEdit.sp1.z;
			WorldEdit.pos1.z = WorldEdit.sp2.z;
		}else{
			WorldEdit.pos2.z = WorldEdit.sp2.z;
			WorldEdit.pos1.z = WorldEdit.sp1.z;
		}	
	},
	
	getMessageSize:function(count, type){
		if(!type)type=1;
		var a = count;
		a = a%100;
		if(a<10 || a > 20){
			a = a%10;
			if(a==1)
				return Translation.translate(type==1?"%count% block changed.":"%count% block.").replace("%count%", a);
			else
				return Translation.translate(type==1?"%count% blocks changed.":"%count% blocks.").replace("%count%", a);
		}else
			return Translation.translate(type==1?"%count% blocks changed.":"%count% blocks.").replace("%count%", a);
		
	}
}

function getWand(){
	if(__config__.access("wand_stick")==true)
		return 280;//Палка
	else
		return 271;//Деревянный топорик
}

function getGetIdWand(){
	if(__config__.access("wand_stick")==true)
		return 288;//Перо
	else
		return 268;//Деревянный меч
}

var Commands = {
"//set":{
	name:"//set",
	description:"Set all blocks inside the selection region to a specified block.",
	args:"<block>",
	func:function(args){
		if(!args[0])
			return Game.message(Translation.translate("Don't valid command."));
			
		if(!WorldEdit.getValidPosition())
			return Game.message(Translation.translate("Set both positions."));

		var block = args[0].split(":");
		var id = parseInt(block[0]);
		var data = block[1]?parseInt(block[1]):0;
		var undo = [];
		for(var x = WorldEdit.pos1.x; x <= WorldEdit.pos2.x; x++){
			for(var y = WorldEdit.pos1.y; y <= WorldEdit.pos2.y; y++){
				for(var z = WorldEdit.pos1.z; z <= WorldEdit.pos2.z; z++){
					undo.push([x,y,z,World.getBlock(x, y, z).id,World.getBlock(x, y, z).data]);
					World.setBlock(x, y, z, id, data);
				}	
			}
		}
		WorldEdit.undo.push(undo);
		
		var a = WorldEdit.getSizeArea();
		Game.message(WorldEdit.getMessageSize(a));
	}
},
"//box":{
	name:"//box",
	description:"Build walls, floor, and ceiling.",
	args:"<block>",
	func:function(args){
		if(!args[0])
			return Game.message(Translation.translate("Don't valid command."));
			
		if(!WorldEdit.getValidPosition())
			return Game.message(Translation.translate("Set both positions."));
		
		var count = 0;
		var block = args[0].split(":");
		var id = parseInt(block[0]);
		var data = block[1]?parseInt(block[1]):0;
		var undo = [];
		for(var x = WorldEdit.pos1.x; x <= WorldEdit.pos2.x; x++){
			for(var y = WorldEdit.pos1.y; y <= WorldEdit.pos2.y; y++){
				for(var z = WorldEdit.pos1.z; z <= WorldEdit.pos2.z; z++){
					undo.push([x,y,z,World.getBlock(x, y, z).id,World.getBlock(x, y, z).data]);
					if(x == WorldEdit.pos1.x || x == WorldEdit.pos2.x || y == WorldEdit.pos1.y || y == WorldEdit.pos2.y || z == WorldEdit.pos1.z || z == WorldEdit.pos2.z){
						World.setBlock(x, y, z, id, data);
						count++;
					}
				}	
			}
		}
		WorldEdit.undo.push(undo);
		
		Game.message(WorldEdit.getMessageSize(count));
	}
},
"//wall":{
	name:"//wall",
	description:"Build the walls of the region (not including ceiling and floor).",
	args:"<block>",
	func:function(args){
		if(!args[0])
			return Game.message(Translation.translate("Don't valid command."));
			
		if(!WorldEdit.getValidPosition())
			return Game.message(Translation.translate("Set both positions."));
		
		var count = 0;
		var block = args[0].split(":");
		var id = parseInt(block[0]);
		var data = block[1]?parseInt(block[1]):0;
		var undo = [];
		for(var x = WorldEdit.pos1.x; x <= WorldEdit.pos2.x; x++){
			for(var y = WorldEdit.pos1.y; y <= WorldEdit.pos2.y; y++){
				for(var z = WorldEdit.pos1.z; z <= WorldEdit.pos2.z; z++){
					undo.push([x,y,z,World.getBlock(x, y, z).id,World.getBlock(x, y, z).data]);
					if(x == WorldEdit.pos1.x || x == WorldEdit.pos2.x || z == WorldEdit.pos1.z || z == WorldEdit.pos2.z){
						World.setBlock(x, y, z, id, data);
						count++;
					}
				}	
			}
		}
		WorldEdit.undo.push(undo);
		
		Game.message(WorldEdit.getMessageSize(count));
	}
},
"//replace":{
	name:"//replace",
	description:"Replace all blocks of the specified block(s) with another block inside the region.",
	args:"[from_block] <to_block>",
	func:function(args){
		if(!args[0])
			return Game.message(Translation.translate("Don't valid command."));
			
		if(!WorldEdit.getValidPosition())
			return Game.message(Translation.translate("Set both positions."));
		
		
		var count = 0;
		var undo = [];
		for(var x = WorldEdit.pos1.x; x <= WorldEdit.pos2.x; x++){
			for(var y = WorldEdit.pos1.y; y <= WorldEdit.pos2.y; y++){
				for(var z = WorldEdit.pos1.z; z <= WorldEdit.pos2.z; z++){
					undo.push([x,y,z,World.getBlock(x, y, z).id,World.getBlock(x, y, z).data]);
					if(!args[1]){
						var block = args[0].split(":");
						var id = parseInt(block[0]);
						var data = block[1]?parseInt(block[1]):0;
						if(World.getBlock(x, y, z).id!=0){
							World.setBlock(x, y, z, id, data);
							count++;
						}
					}else{
						var block = args[0].split(":");
						var id = parseInt(block[0]);
						var data = block[1]?parseInt(block[1]):-1;
						if(World.getBlock(x, y, z).id == id && (data == -1 || World.getBlock(x, y, z).data == data)){
							var block2 = args[1].split(":");
							var id2 = parseInt(block2[0]);
							var data2 = block2[1] ? parseInt(block2[1]) :0;
							World.setBlock(x, y, z, id2, data2);
							count++;
						}
						
					}
				}	
			}
		}
		WorldEdit.undo.push(undo);
		
		Game.message(WorldEdit.getMessageSize(count));
		
	}
},
"//help":{
	name:"//help",
	description:"Help.",
	args:"[page]",
	func:function(args){
		var page = args[0]?parseInt(args[0]):1;
		var _page = page - 1;
		var message = "";
		var count = 0;
		for(var i in Commands){
			count++;
			if(count <= 6*_page && count > 6*page)continue;
			var cmd = Commands[i];
			message+= cmd.name+" ";
			if(cmd.args != null)
				message+= cmd.args+" ";
			message+= "- "+Translation.translate(cmd.description)+"\n";
		}
		
		Game.message(Translation.translate("===Help [Page %page%]===\n%cmd%===Help [Page %page%]===").replace(/(%page)/g, page).replace("%cmd%", message));
	}
},
"//?":{
	name:"//?",
	description:"Help.",
	args:"[page]",
	func:function(args){
		Commands["//help"].func(args);
	}
},
"//r":{
	name:"//r",
	description:"Work with the region.",
	args:"<type> [args]",
	func:function(args){
		switch(args[0]){
			case "help":
			case "?":
			case undefined:
				var list = [
					["help", "<page>", "Commands for working with the region"],
					["up", "<count>", "Raise the selected region by the specified number of blocks"],
					["down", "<count>", "Lower the selected region by the specified number of blocks"],
					["pos1", "[<x> <y> <z>]", Commands["//pos1"].description],
					["pos2", "[<x> <y> <z>]", Commands["//pos2"].description],
				];
				
				var page = args[0]?parseInt(args[0]):1;
				var _page = page - 1;
				var message = "";
				var count = 0;
				for(var i in list){
					count++;
					if(count <= 6*_page && count > 6*page)continue;
					var cmd = list[i];
					message+= "//region "+cmd[0]+" ";
					if(cmd[1] != null)
						message+= cmd[1]+" ";
					message+= "- "+Translation.translate(cmd[2])+"\n";
				}
				
				Game.message(Translation.translate("===Help [Page %page%]===\n%cmd%===Help [Page %page%]===").replace(/(%page)/g, page).replace("%cmd%", message));
			break;
			case "up":
				if(!args[1])
					return Game.message(Translation.translate("Don't valid command."));
					
				if(!WorldEdit.getValidPosition())
					return Game.message(Translation.translate("Set both positions."));
				
				var up = parseInt(args[1]);
				if(isNaN(up))
					return Game.message(Translation.translate("Don't valid command."));
				
				WorldEdit.pos2.y += up;
				
				var a = up;
				a = a%100;
				if(a<10 || a > 20){
					a = a%10;
					if(a==1)
						sizeArea = Translation.translate("%count% block.").replace("%count%", a);
					else
						sizeArea = Translation.translate("%count% blocks.").replace("%count%", a);
				}else
					sizeArea = Translation.translate("%count% blocks.").replace("%count%", a);
				
				Game.message(Translation.translate("The region is raised to %area%").replace("%area%",sizeArea));
				
			break;
			case "down":
				if(!args[1])
					return Game.message(Translation.translate("Don't valid command."));
				
				if(!WorldEdit.getValidPosition())
					return Game.message(Translation.translate("Set both positions."));
				
				var up = parseInt(args[1]);
				if(isNaN(up))
					return Game.message(Translation.translate("Don't valid command."));
				
				WorldEdit.pos1.y -= up;
				
				var a = up;
				a = a%100;
				if(a<10 || a > 20){
					a = a%10;
					if(a==1)
						sizeArea = Translation.translate("%count% block.").replace("%count%", a);
					else
						sizeArea = Translation.translate("%count% blocks.").replace("%count%", a);
				}else
					sizeArea = Translation.translate("%count% blocks.").replace("%count%", a);
				
				Game.message(Translation.translate("The region is omitted in %area%").replace("%area%",sizeArea));
				
				
			break;
			case "pos1":
			case "pos2":
				var _args = args;
				_args.shift();
				Commands["//"+args[0]].func(_args);
			break;
			default:
				return Game.message(Translation.translate("Don't valid command."));
			break;
		}
	}
},
"//reg":{
	name:"//reg",
	description:"Work with the region.",
	args:"<type> [args]",
	func:function(args){
		Commands["//r"].func(args);
	}
},
"//region":{
	name:"//region",
	description:"Work with the region.",
	args:"<type> [args]",
	func:function(args){
		Commands["//r"].func(args);
	}
},
"//pos1":{
	name:"//pos1",
	description:"Set selection position #1 to the block above the one that you are standing on.",
	args:"[<x> <y> <z>]",
	func:function(args){
		if(!args[0]){
			var coords = Player.getPosition();
			coords.x = Math.round(coords.x);
			coords.y = Math.round(coords.y);
			coords.z = Math.round(coords.z);
			WorldEdit.selectPosition(coords,null);			
			Game.message(Translation.translate("The first position is set to %x%,%y%,%z%.").replace("%x%",coords.x).replace("%y%",coords.y).replace("%z%",coords.z));
			Game.message(Translation.translate("The selected region is %sizeArea%").replace("%sizeArea%", WorldEdit.getMessageSize(WorldEdit.getValidPosition()?WorldEdit.getSizeArea():1,0)));
		}else{
			if(!args[1] || !args[2]){
				return Game.message(Translation.translate("Don't valid command."));
			}else{
				WorldEdit.selectPosition({x:Math.round(args[0]),y:Math.round(args[1]),z:Math.round(args[2])},null);
				Game.message(Translation.translate("The first position is set to %x%,%y%,%z%.").replace("%x%",args[0]).replace("%y%",args[1]).replace("%z%",args[2]));
				Game.message(Translation.translate("The selected region is %sizeArea%").replace("%sizeArea%", WorldEdit.getMessageSize(WorldEdit.getValidPosition()?WorldEdit.getSizeArea():1,0)));
			}
		}
	}
},
"//pos2":{
	name:"//pos2",
	description:"Set selection position #2 to the block above the one that you are standing on.",
	args:"[<x> <y> <z>]",
	func:function(args){
		if(!args[0]){
			var coords = Player.getPosition();
			coords.x = Math.round(coords.x);
			coords.y = Math.round(coords.y);
			coords.z = Math.round(coords.z);
			WorldEdit.selectPosition(null, coords);
			Game.message(Translation.translate("The second position is set to %x%,%y%,%z%.").replace("%x%",coords.x).replace("%y%",coords.y).replace("%z%",coords.z));
			Game.message(Translation.translate("The selected region is %sizeArea%").replace("%sizeArea%", WorldEdit.getMessageSize(WorldEdit.getValidPosition()?WorldEdit.getSizeArea():1,0)));
		}else{
			if(!args[1] || !args[2]){
				return Game.message(Translation.translate("Don't valid command."));
			}else{
				WorldEdit.selectPosition(null,{x:Math.round(args[0]),y:Math.round(args[1]),z:Math.round(args[2])});
				Game.message(Translation.translate("The second position is set to %x%,%y%,%z%.").replace("%x%",args[0]).replace("%y%",args[1]).replace("%z%",args[2]));
				Game.message(Translation.translate("The selected region is %sizeArea%").replace("%sizeArea%", WorldEdit.getMessageSize(WorldEdit.getValidPosition()?WorldEdit.getSizeArea():1,0)));
			}
		}
	}
},
"//undo":{
	name:"//undo",
	description:"Undo your last action.",
	args:"",
	func:function(){
		if(WorldEdit.undo.length == 0)return;
		var undo = WorldEdit.undo[WorldEdit.undo.length-1];
		WorldEdit.redo = [];
		var count = 0;
		for(var i = 0; i < undo.length; i++){
			WorldEdit.redo.push([undo[i][0], undo[i][1], undo[i][2],World.getBlock(undo[i][0], undo[i][1], undo[i][2]).id,World.getBlock(undo[i][0], undo[i][1], undo[i][2]).data]);
			count++;
			World.setBlock(undo[i][0], undo[i][1], undo[i][2], undo[i][3], undo[i][4]);
		}
		WorldEdit.undo.pop();
		Game.message(WorldEdit.getMessageSize(count));
	},
},
"//redo":{
	name:"//redo",
	description:"Redo your last (undone) action. This command replays back history and does not repeat the command.",
	args:"",
	func:function(){
		var redo = WorldEdit.redo;
		if(redo.length == 0)return;
		var count = 0;
		for(var i = 0; i < redo.length; i++){
			count++;
			World.setBlock(redo[i][0], redo[i][1], redo[i][2], redo[i][3], redo[i][4]);
		}
		
		Game.message(WorldEdit.getMessageSize(count));
	},
},
"//clearhistory":{
	name:"//clearhistory",
	description:"Clear your history.",
	args:"",
	func:function(){
		WorldEdit.undo = [];
		WorldEdit.redo = [];
		Game.message(Translation.translate("History cleared."));
	},
},
"//wand":{
	name:"//wand",
	description:"Gives you the \"EditWand\" (by default, a wooden axe).",
	args:"",
	func:function(){
		Player.addItemToInventory(getWand(), 1);
	},
},
"//copy":{
	name:"//copy",
	description:"Copy the selected area.",
	args:"[-a]",
	func:function(args){
		var air = args.indexOf("-a")!=-1?true:false;
		WorldEdit.copy = [];
		var count = 0;
		for(var x = WorldEdit.pos1.x; x <= WorldEdit.pos2.x; x++){
			for(var y = WorldEdit.pos1.y; y <= WorldEdit.pos2.y; y++){
				for(var z = WorldEdit.pos1.z; z <= WorldEdit.pos2.z; z++){
					var block = World.getBlock(x, y, z);
					var coord = Player.getPosition();
					coord.x = Math.round(coord.x);
					coord.y = Math.round(coord.y);
					coord.z = Math.round(coord.z);
					if(block.id == 0 && air == false)continue;
					WorldEdit.copy.push([coord.x - x, coord.y - y, coord.z - z,block]);
					count++;
				}	
			}
		}
		
		Game.message(Translation.translate("Region copied."));
	},
},
"//cut":{
	name:"//cut",
	description:"Cut the selected area.",
	args:"[-a]",
	func:function(args){
		var air = args.indexOf("-a")!=-1?true:false;
		WorldEdit.copy = [];
		var count = 0;
		for(var x = WorldEdit.pos1.x; x <= WorldEdit.pos2.x; x++){
			for(var y = WorldEdit.pos1.y; y <= WorldEdit.pos2.y; y++){
				for(var z = WorldEdit.pos1.z; z <= WorldEdit.pos2.z; z++){
					var block = World.getBlock(x, y, z);
					var coord = Player.getPosition();
					coord.x = Math.round(coord.x);
					coord.y = Math.round(coord.y);
					coord.z = Math.round(coord.z);
					if(block.id == 0 && air == false)continue;
					WorldEdit.copy.push([coord.x - x, coord.y - y, coord.z - z,block]);
					World.setBlock(x,y,z,0,0);
					count++;
				}	
			}
		}
		
		Game.message(Translation.translate("Region cut."));
	},
},
"//paste":{
	name:"//paste",
	description:"Paste the copied area.",
	args:"",
	func:function(args){
		if(WorldEdit.copy.length==0)return;
		var copy = WorldEdit.copy;
		var count = 0;
		
		for(var i = 0; i < copy.length; i++){
			var coord = Player.getPosition();
			coord.x = Math.round(coord.x);
			coord.y = Math.round(coord.y);
			coord.z = Math.round(coord.z);
			World.setBlock(	coord.x - copy[i][0],
							coord.y - copy[i][1],
							coord.z - copy[i][2], copy[i][3].id, copy[i][3].data);
			count++;
		}
		
		Game.message(WorldEdit.getMessageSize(count));
	}
},
"//size":{
	name:"//size",
	description:"Get size area.",
	args:"",
	func:function(){
		Game.message(WorldEdit.getMessageSize(WorldEdit.getSizeArea(), 0));
	}
},
"//toggleeditwand":{
	name:"//toggleeditwand",
	description:"Toggles the edit wand selection mode, allowing you to use the edit wand item normally.",
	args:"",
	func:function(){
		WorldEdit.wand = !WorldEdit.wand;
		Game.message(Translation.translate("Mode wand edit switched."));
	}
},
"//desel":{
	name:"//desel",
	description:"Deselects the current selection.",
	args:"",
	func:function(){
		WorldEdit.pos1 = {x:Infinity,y:Infinity,z:Infinity};
		WorldEdit.pos2 = {x:Infinity,y:Infinity,z:Infinity};
	
		WorldEdit.sp1 = {x:Infinity,y:Infinity,z:Infinity};
		WorldEdit.sp2 = {x:Infinity,y:Infinity,z:Infinity};
		
		Game.message(Translation.translate("The current selection is canceled."));
	}
}
};

Callback.addCallback("NativeCommand", function(command){
	var cmd = command.split(" ");
	if(Commands.hasOwnProperty(cmd[0])){
		Commands[cmd[0]].func(typeof(cmd[1]) != "undefined" ? command.split(cmd[0] + " ")[1].split(" ") : []);
		Game.prevent();
	}
});

Callback.addCallback("ItemUse",function(coords, item, block){
	if(item.id == getGetIdWand()){
		Game.message(Translation.translate("Block ID %id%:%data%.").replace("%id%",block.id).replace("%data%",block.data));
	}
	if(item.id == getWand() && WorldEdit.wand == true){
		Commands["//pos1"].func([coords.x, coords.y, coords.z]);
	}
});

Callback.addCallback("DestroyBlockStart", function (coords, block, player) {
	if(Player.getCarriedItem().id == getWand() && WorldEdit.wand == true){
		Commands["//pos2"].func([coords.x, coords.y, coords.z]);
		Game.prevent();
	}
});

Callback.addCallback("LevelLeft", function(){
	WorldEdit.undo = [];
	WorldEdit.redo = [];	
});

var Backpack = {
	set: function(type, arg1){
	   IDRegistry.genItemID("backpack"+type);
	   Item.createItem("backpack"+type, type + " Backpack", {name: "backpack" + type, meta: 0}, {stack: 1});
	   Callback.addCallback("PostLoaded", function(){
           Recipes.addShaped({id: ItemID["backpack"+type], count: 1, data: 0}, [
	         "bbb",
	         "bab",
	         "bbb"
           ], ['a', arg1.ingridient2, 0, 'b', arg1.ingridient, 0]);});
	}
};

Backpack.set("Basic", {
	ingridient: 334,
	ingridient2: 54
});
BackpackRegistry.register(ItemID.backpackBasic, {
	slots: 36,
	slotsCenter: true,
	inRow: 9
});

Callback.addCallback("LevelLoaded", function () { 
 Game.tipMessage('§cPalaMod\§a 0.1')
});

// file: API/BaublesRegister.js

var fly = false;		
	
Baubles.registerBauble({
    id: ItemID.fullcolorRing,
    type: "ring",
    onEquip: function () {
		ready = true;
        EssenceCompusion.melner(ItemID.molotTor);
    },
    onTakeOff: function () {
        ready = false;
        EssenceCompusion.melner(ItemID.molotTor);
    }
});

Baubles.registerBauble({
    id: ItemID.megicBelt,
    type: "belt",
    tick: function () {
        Entity.addEffect(Player.get(), 5, 5, 5, true, true);
    }
});

Baubles.registerBauble({
    id: ItemID.saphireRing,
    type: "ring",
    onEquip: function () {
		fly = true;
    },
    onTakeOff: function () {
        fly = false;
    }
});
	 
   Baubles.registerBauble({
    id: ItemID.Wings,
    type: "head",
	onTakeOff: function () {
        Player.setFlyingEnabled(false);
    },
    tick: function () {
		let flying = Player.getFlying();
		let velocity = Player.getVelocity();
        if ((Aeris >= 1) && (fly === true)){
			Player.setFlyingEnabled(true);
		}
		if ((Aeris >= 1) && (fly === true) && (flying === true)){
			Aeris--;
		}
		if ((Aeris < 1) || (fly === false)){
			Player.setFlyingEnabled(false);
						Player.setVelocity(velocity.x, -0.1, velocity.z);
		}
	
    }
});

// file: API/RingsHelper.js

/*Name: "RingsHelper",
  Version: 0.4,
  Anchor: "Denys Dzhuhalik"
 */

 
var Infernos = 0;
var Aeris = 0;
var Terros = 0;


Saver.addSavesScope("BackpacksScope",
    function read(scope) {
        Infernos = scope.InfernosSaves || 0;
        Aeris = scope.AerisSaves || 0;
        Terros = scope.TerrosSaves || 0;
    },

    function save() {
        return {
            InfernosSaves: Infernos,
            AerisSaves: Aeris,
            TerrosSaves: Terros
        };
    }
);

var Special;
var elementType;
var Essence;

var RingsHelper = {
	
	registerRing: function (register, bool){
	let normal = bool;
		if (normal==true){
		IDRegistry.genItemID(register.id);	
        Item.createItem(register.id, register.name, {name: register.texture, meta: register.meta}, {stack: register.stack});

		}
	},
	
	
	registerInfernos: function (id, maxInfernos){
		Infernos = maxInfernos;
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)&&(Infernos >= 0)){
			Game.tipMessage("Curren essence: " + Infernos + "/20000");
		}
		});
		
        },
		
			registerAeris: function (id, maxAeris){
		Aeris = maxAeris;
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)&&(Aeris >= 0)){
			Game.tipMessage("Curren essence: " + Aeris + "/20000");
		}
		});
		
        },
		
				registerTerros: function (id, maxTerros){
		Terros = maxTerros;
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)&&(Terros >= 0)){
			Game.tipMessage("Curren essence: " + Terros + "/20000");
		}
		});
		
        },
		
		registerFullColor: function (id, enable){
			if (enable === true){	
	Recipes.addShaped({id: id, count: 1, data: 0}, [
        "   ",
        "abc",
        "   "
    ], ['a', ItemID.rubuRing, 0, 'b', ItemID.saphireRing, 0, 'c', ItemID.nephriteRing, 0]);
			
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)){
			Game.tipMessage("Curren essence: terros: " + Terros + ", aeris: " + Aeris + ", infernos: " + Infernos);
		}
		});
			}
		}
}

const regspike = function(id, name, tex, meta, stairs, block, data){
  id = "spike_" + id;

IDRegistry.genBlockID(id);
Block.createBlockWithRotation(id, [{name: name + " spike", texture: [[tex, 0]], inCreative: true}]);


  let i = 0;

  const render = [];
  const group = [];

  for(i = 4; i--;){
    render[i] = new ICRender.Model();
    group[i] = ICRender.getGroup("spike" + i);
    group[i].add(BlockID[id], i);
  }

  const model = [];
  let mesh;

  for(i = 12; i--;){
    mesh = new RenderMesh();
    mesh.setBlockTexture(tex, meta);
    mesh.importFromFile(__dir__ + "textures/spikes/model/" + i + ".obj", "obj", null);
    model[i] = new BlockRenderer.Model(mesh);
  }

  render[0].addEntry(model[0]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true),
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true)
  ));
  render[0].addEntry(model[4]).asCondition(0, 0, -1, group[2], 0);
  render[0].addEntry(model[7]).asCondition(0, 0, -1, group[3], 0);
  render[0].addEntry(model[8]).asCondition(0, 0, 1, group[2], 0);
  render[0].addEntry(model[11]).asCondition(0, 0, 1, group[3], 0);

  render[1].addEntry(model[1]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true),
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true)
  ));
  render[1].addEntry(model[5]).asCondition(0, 0, 1, group[2], 0);
  render[1].addEntry(model[6]).asCondition(0, 0, 1, group[3], 0);
  render[1].addEntry(model[9]).asCondition(0, 0, -1, group[2], 0);
  render[1].addEntry(model[10]).asCondition(0, 0, -1, group[3], 0);

  render[2].addEntry(model[2]).setCondition(ICRender.AND(
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true),
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true)
  ));
  render[2].addEntry(model[4]).asCondition(-1, 0, 0, group[0], 0);
  render[2].addEntry(model[5]).asCondition(-1, 0, 0, group[1], 0);
  render[2].addEntry(model[8]).asCondition(1, 0, 0, group[0], 0);
  render[2].addEntry(model[9]).asCondition(1, 0, 0, group[1], 0);

  render[3].addEntry(model[3]).setCondition(ICRender.AND(
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true),
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true)
  ));
  render[3].addEntry(model[7]).asCondition(1, 0, 0, group[0], 0);
  render[3].addEntry(model[6]).asCondition(1, 0, 0, group[1], 0);
  render[3].addEntry(model[11]).asCondition(-1, 0, 0, group[0], 0);
  render[3].addEntry(model[10]).asCondition(-1, 0, 0, group[1], 0);

  for(i = 4; i--;){
    BlockRenderer.setStaticICRender(BlockID[id], i, render[i]);
  }

  if(!collision){
    return;
  }

  render.length = model.length = 0;

  for(i = 4; i--;){
    render[i] = new ICRender.CollisionShape();
    model[i] = render[i].addEntry();
  }

  for(i = 17; i--;){
    model[0].addBox(0, 0, (15 - i) / 17, 1, i / 17, (17 - i) / 17)
    model[1].addBox(0, 0, i / 17, 1, i / 17, (i + 1) / 17);
    model[2].addBox((15 - i) / 17, 0, 0, (17 - i) / 17, i / 17, 1);
    model[3].addBox(i / 17, 0, 0, (i + 1) / 17, i / 17, 1);
  }

  for(i = 4; i--;){
    BlockRenderer.setCustomCollisionShape(BlockID[id], i, render[i]);
  }


};



regspike("wood", "wooden", "Wood", 0, 53, 5, 0);
regspike("iron", "iron", "Iron", 0, 53, 5, 0);
regspike("gold", "gold", "Gold", 0, 53, 5, 0);
regspike("dia", "diamond", "Dia", 0, 53, 5, 0);
regspike("ame", "amethyst", "Ame", 0, 53, 5, 0);
regspike("tita", "Titane", "Tita", 0, 53, 5, 0);
regspike("pala", "Paladium", "Pala", 0, 53, 5, 0);
regspike("greenpala", "Green Paladium", "GreenPala", 0, 53, 5, 0);
regspike("end", "Endium", "End", 0, 53, 5, 0);

Block.setDestroyTime(BlockID.spike_wood, 1);
Block.setDestroyTime(BlockID.spike_iron, 1.5);
Block.setDestroyTime(BlockID.spike_gold, 2);
Block.setDestroyTime(BlockID.spike_dia, 2.5);
Block.setDestroyTime(BlockID.spike_ame, 3);
Block.setDestroyTime(BlockID.spike_tita, 4);
Block.setDestroyTime(BlockID.spike_pala, 5);
Block.setDestroyTime(BlockID.spike_greenpala, 5);
Block.setDestroyTime(BlockID.spike_end, 5);

const regDummy = function(id, name, tex, meta, stairs, block, data){
IDRegistry.genBlockID("dummyBlock");
Block.createBlockWithRotation("dummyBlock", [{name: "dummy", texture: [[tex, 0]], inCreative: false}]);


  let i = 0;

  const render = [];
  const group = [];

  for(i = 4; i--;){
    render[i] = new ICRender.Model();
    group[i] = ICRender.getGroup("dummyBlock" + i);
    group[i].add(BlockID.dummyBlock, i);
  }

  const model = [];
  let mesh;

  for(i = 12; i--;){
    mesh = new RenderMesh();
    mesh.setBlockTexture(tex, meta);
    mesh.importFromFile(__dir__ + "textures/dummy/model/" + i + ".obj", "obj", null);
    model[i] = new BlockRenderer.Model(mesh);
  }

  render[0].addEntry(model[0]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true),
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true)
  ));
  render[0].addEntry(model[4]).asCondition(0, 0, -1, group[2], 0);
  render[0].addEntry(model[7]).asCondition(0, 0, -1, group[3], 0);
  render[0].addEntry(model[8]).asCondition(0, 0, 1, group[2], 0);
  render[0].addEntry(model[11]).asCondition(0, 0, 1, group[3], 0);

  render[1].addEntry(model[1]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true),
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true)
  ));
  render[1].addEntry(model[5]).asCondition(0, 0, 1, group[2], 0);
  render[1].addEntry(model[6]).asCondition(0, 0, 1, group[3], 0);
  render[1].addEntry(model[9]).asCondition(0, 0, -1, group[2], 0);
  render[1].addEntry(model[10]).asCondition(0, 0, -1, group[3], 0);

  render[2].addEntry(model[2]).setCondition(ICRender.AND(
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true),
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true)
  ));
  render[2].addEntry(model[4]).asCondition(-1, 0, 0, group[0], 0);
  render[2].addEntry(model[5]).asCondition(-1, 0, 0, group[1], 0);
  render[2].addEntry(model[8]).asCondition(1, 0, 0, group[0], 0);
  render[2].addEntry(model[9]).asCondition(1, 0, 0, group[1], 0);

  render[3].addEntry(model[3]).setCondition(ICRender.AND(
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true),
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true)
  ));
  render[3].addEntry(model[7]).asCondition(1, 0, 0, group[0], 0);
  render[3].addEntry(model[6]).asCondition(1, 0, 0, group[1], 0);
  render[3].addEntry(model[11]).asCondition(-1, 0, 0, group[0], 0);
  render[3].addEntry(model[10]).asCondition(-1, 0, 0, group[1], 0);

  for(i = 4; i--;){
    BlockRenderer.setStaticICRender(BlockID.dummyBlock, i, render[i]);
  }

  if(!collision){
    return;
  }

  render.length = model.length = 0;

  for(i = 4; i--;){
    render[i] = new ICRender.CollisionShape();
    model[i] = render[i].addEntry();
  }

  for(i = 4; i--;){
    BlockRenderer.setCustomCollisionShape(BlockID.dummyBlock, i, render[i]);
  }


};

regDummy("dummyBlock", "dummy", "dummyBlock", 0, 53, 5, 0);

Block.registerDropFunction("dummyBlock", function(coords, id, data, diggingLevel, toolLevel){ return [[ItemID.dummy, 1, 0]];  
});

Game.getGameMode = ModAPI.requireGlobal("Level.getGameMode");

var FURNACE_FUEL_MAP = { 	5: 300, 	6: 100, 	17: 300, 	263: 1600, 	280: 100, 	268: 200, 	269: 200, 	270: 200, 	271: 200, 	85: 300, 	107: 300, 	134: 300, 	135: 300, 	158: 150, 	162: 300, 	163: 300, 	164: 300, 	184: 300, 	185: 300, 	186: 300, 	187: 300, 	53: 300, 	54: 300, 	58: 300 };

const regMachine = function(id, name, texture, meta, stairs, block, data){
  id = "Alchemy" + id;

IDRegistry.genBlockID(id);
Block.createBlock(id, [{name: "Alchemy " + name, texture: [["AlchemyBottom", 0], ["AlchemyTop", 0], ["AlchemySide", 0], ["AlchemyFront", 0], ["AlchemySide", 0], ["AlchemySide", 0]], inCreative: true}]);
tick: function(){
	   Entity.addEffect(Player.get(), 19, 40, 10000, false,false);
	}


  let i = 0;

  const render = [];
  const group = [];

  for(i = 4; i--;){
    render[i] = new ICRender.Model();
    group[i] = ICRender.getGroup("Alchemy" + i);
    group[i].add(BlockID[id], i);
  }

  const model = [];
  let mesh;

  for(i = 12; i--;){
    mesh = new RenderMesh();
    mesh.setBlockTexture([["AlchemyBottom", 0], ["AlchemyTop", 0], ["", 0], ["AlchemyFront", 0], ["AlchemySide", 0], ["AlchemySide", 0]], meta);
    mesh.importFromFile(__dir__ + "model/" + i + ".obj", "obj", null);
    model[i] = new BlockRenderer.Model(mesh);
  }

  render[0].addEntry(model[0]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true),
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true)
  ));
  render[0].addEntry(model[4]).asCondition(0, 0, -1, group[2], 0);
  render[0].addEntry(model[7]).asCondition(0, 0, -1, group[3], 0);
  render[0].addEntry(model[8]).asCondition(0, 0, 1, group[2], 0);
  render[0].addEntry(model[11]).asCondition(0, 0, 1, group[3], 0);

  render[1].addEntry(model[1]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true),
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true)
  ));
  render[1].addEntry(model[5]).asCondition(0, 0, 1, group[2], 0);
  render[1].addEntry(model[6]).asCondition(0, 0, 1, group[3], 0);
  render[1].addEntry(model[9]).asCondition(0, 0, -1, group[2], 0);
  render[1].addEntry(model[10]).asCondition(0, 0, -1, group[3], 0);

  render[2].addEntry(model[2]).setCondition(ICRender.AND(
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true),
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true)
  ));
  render[2].addEntry(model[4]).asCondition(-1, 0, 0, group[0], 0);
  render[2].addEntry(model[5]).asCondition(-1, 0, 0, group[1], 0);
  render[2].addEntry(model[8]).asCondition(1, 0, 0, group[0], 0);
  render[2].addEntry(model[9]).asCondition(1, 0, 0, group[1], 0);

  render[3].addEntry(model[3]).setCondition(ICRender.AND(
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true),
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true)
  ));
  render[3].addEntry(model[7]).asCondition(1, 0, 0, group[0], 0);
  render[3].addEntry(model[6]).asCondition(1, 0, 0, group[1], 0);
  render[3].addEntry(model[11]).asCondition(-1, 0, 0, group[0], 0);
  render[3].addEntry(model[10]).asCondition(-1, 0, 0, group[1], 0);

  for(i = 4; i--;){
    BlockRenderer.setStaticICRender(BlockID[id], i, render[i]);
  }
}

regMachine("Creator", "Creator", [["AlchemyBottom", 0], ["AlchemyTop", 0], ["", 0], ["AlchemyFront", 0], ["AlchemySide", 0], ["AlchemySide", 0]], 0, 53, 5, 0);

const collision = __config__.getBool("CollisionShape");

const regBouncePad = function(id, name, tex, meta, stairs, block, data){
  id = "Slime" + id;

IDRegistry.genBlockID(id);
Block.createBlock(id, [{name: "Slime" + name, texture: [[tex, 0]], inCreative: true}]);
tick: function(){
	   Entity.addEffect(Player.get(), 19, 40, 10000, false,false);
	}


  let i = 0;

  const render = [];
  const group = [];

  for(i = 4; i--;){
    render[i] = new ICRender.Model();
    group[i] = ICRender.getGroup("Slime" + i);
    group[i].add(BlockID[id], i);
  }

  const model = [];
  let mesh;

  for(i = 12; i--;){
    mesh = new RenderMesh();
    mesh.setBlockTexture(tex, meta);
    mesh.importFromFile(__dir__ + "textures/model/" + i + ".obj", "obj", null);
    model[i] = new BlockRenderer.Model(mesh);
  }

  render[0].addEntry(model[0]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true),
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true)
  ));
  render[0].addEntry(model[4]).asCondition(0, 0, -1, group[2], 0);
  render[0].addEntry(model[7]).asCondition(0, 0, -1, group[3], 0);
  render[0].addEntry(model[8]).asCondition(0, 0, 1, group[2], 0);
  render[0].addEntry(model[11]).asCondition(0, 0, 1, group[3], 0);

  render[1].addEntry(model[1]).setCondition(ICRender.AND(
    ICRender.BLOCK(0, 0, 1, group[2], true),
    ICRender.BLOCK(0, 0, 1, group[3], true),
    ICRender.BLOCK(0, 0, -1, group[2], true),
    ICRender.BLOCK(0, 0, -1, group[3], true)
  ));
  render[1].addEntry(model[5]).asCondition(0, 0, 1, group[2], 0);
  render[1].addEntry(model[6]).asCondition(0, 0, 1, group[3], 0);
  render[1].addEntry(model[9]).asCondition(0, 0, -1, group[2], 0);
  render[1].addEntry(model[10]).asCondition(0, 0, -1, group[3], 0);

  render[2].addEntry(model[2]).setCondition(ICRender.AND(
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true),
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true)
  ));
  render[2].addEntry(model[4]).asCondition(-1, 0, 0, group[0], 0);
  render[2].addEntry(model[5]).asCondition(-1, 0, 0, group[1], 0);
  render[2].addEntry(model[8]).asCondition(1, 0, 0, group[0], 0);
  render[2].addEntry(model[9]).asCondition(1, 0, 0, group[1], 0);

  render[3].addEntry(model[3]).setCondition(ICRender.AND(
    ICRender.BLOCK(1, 0, 0, group[0], true),
    ICRender.BLOCK(1, 0, 0, group[1], true),
    ICRender.BLOCK(-1, 0, 0, group[0], true),
    ICRender.BLOCK(-1, 0, 0, group[1], true)
  ));
  render[3].addEntry(model[7]).asCondition(1, 0, 0, group[0], 0);
  render[3].addEntry(model[6]).asCondition(1, 0, 0, group[1], 0);
  render[3].addEntry(model[11]).asCondition(-1, 0, 0, group[0], 0);
  render[3].addEntry(model[10]).asCondition(-1, 0, 0, group[1], 0);

  for(i = 4; i--;){
    BlockRenderer.setStaticICRender(BlockID[id], i, render[i]);
  }

  if(!collision){
    return;
  }

  render.length = model.length = 0;

  for(i = 4; i--;){
    render[i] = new ICRender.CollisionShape();
    model[i] = render[i].addEntry();
  }

  for(i = 17; i--;){
    model[0].addBox(0, 0, (16 - i) / 17, 1, i / 17, (17 - i) / 17)
    model[1].addBox(0, 0, i / 17, 1, i / 17, (i + 1) / 17);
    model[2].addBox((17 - i) / 17, 0, 0, (17 - i) / 17, i / 17, 1);
    model[3].addBox(i / 17, 0, 0, (i + 1) / 19, i / 17, 1);
  }

  for(i = 4; i--;){
    BlockRenderer.setCustomCollisionShape(BlockID[id], i, render[i]);
  }


}

regBouncePad("Pad", "Pad", "Pad", 0, 53, 5, 0);

IDRegistry.genItemID("paladium_ingot");
Item.createItem("paladium_ingot", "Paladium", {name: "paladium_ingot"});

IDRegistry.genBlockID("paladium_block");
Block.createBlock("paladium_block", [{name: "Paladium block", texture: [["paladium_block", 0]], inCreative: true}]);
Block.setDestroyTime(BlockID.paladium_block, 5);
Recipes.addShaped({id: BlockID.paladium_block}, ["aaa", "aaa", "aaa"], ["a", ItemID.paladium_ingot, 0]);


IDRegistry.genItemID("amethyst_ingot");
Item.createItem("amethyst_ingot", "amethyst ingot", {name: "amethyst_ingot"});

IDRegistry.genBlockID("amethyst_block");
Block.createBlock("amethyst_block", [{name: "amethyst block", texture: [["amethyst_block", 0]], inCreative: true}]);

IDRegistry.genItemID("titane_ingot");
Item.createItem("titane_ingot", "Titane ingot", {name: "titane_ingot"});

IDRegistry.genBlockID("titane_block");
Block.createBlock("titane_block", [{name: "titane block", texture: [["titane_block", 0]], inCreative: true}]);

Block.registerDropFunction("titane_block", function(coords, id, data, diggingLevel, toolLevel){ return [[BlockID.titane_block, 1, 0]];  
});

IDRegistry.genBlockID("paladium_ore");
Block.createBlock("paladium_ore", [{name: "paladium ore", texture: [["paladium_ore", 0]], inCreative: true}]);

Recipes.addFurnace(BlockID.paladium_ore, ItemID.paladium_ingot);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.paladium_ore, 5, 4);
    }
});

IDRegistry.genBlockID("titane_ore");
Block.createBlock("titane_ore", [{name: "titane ore", texture: [["titane_ore", 0]], inCreative: true}]);

Recipes.addFurnace(BlockID.titane_ore, ItemID.titane_ingot);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.titane_ore, 6, 5);
    }
});

IDRegistry.genBlockID("amethyst_ore");
Block.createBlock("amethyst_ore", [{name: "amethyst ore", texture: [["amethyst_ore", 0]], inCreative: true}]);

Recipes.addFurnace(BlockID.amethyst_ore, ItemID.amethyst_ingot);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.amethyst_ore, 7, 6);
    }
});


IDRegistry.genBlockID("crying_obsidian");
Block.createBlock("crying_obsidian", [{name: "crying obsidian", texture: [["crying_obsidian", 0]], inCreative: true}]);

IDRegistry.genItemID("paladiumHelmet");
Item.createArmorItem("paladiumHelmet", "paladium Helmet", {name: "paladiumhelmet"}, {type: "helmet", armor: 2, durability: 500, texture: "armor/paladium_0.png"});

IDRegistry.genItemID("paladiumChestplate");
Item.createArmorItem("paladiumChestplate", "paladium Chestplate", {name: "paladiumchestplate"}, {type: "chestplate", armor: 5, durability: 500, texture: "armor/paladium_0.png"});

IDRegistry.genItemID("paladiumLeggings");
Item.createArmorItem("paladiumLeggings", "paladium Leggings", {name: "paladiumleggings"}, {type: "leggings", armor: 4, durability: 500, texture: "armor/paladium_1.png"});

IDRegistry.genItemID("paladiumBoots");
Item.createArmorItem("paladiumBoots", "paladium Boots", {name: "paladiumboots"}, {type: "boots", armor: 3, durability: 500, texture: "armor/paladium_0.png"});

IDRegistry.genItemID("paladiumStick");
Item.createItem("paladiumStick", "Paladium Stick", {name: "paladiumStick"});

Recipes.addShaped({id: ItemID.paladiumStick}, ["   ", "  a", "  a"], ["a", ItemID.paladium_ingot, 0]);

IDRegistry.genItemID("chestexplorer");
Item.createItem("chestexplorer", "Chest Explorer", {name: "chestexplorer"});

IDRegistry.genItemID("diamondString");
Item.createItem("diamondString", "Diamond String", {name: "diamondString"});

Recipes.addShaped({id: ItemID.diamondString}, ["   ", " ba", "   "], ["a", 287, 0, "b", 264, 0]);

IDRegistry.genItemID("slimyHelmet");
Item.createArmorItem("slimyHelmet", "Slimy Helmet", {name: "slimyHelmet"}, {type: "helmet", armor: 2, durability: 500, texture: "armor/SlimyHelmet_0.png"});
    
IDRegistry.genItemID("JumpArmor");
Item.createArmorItem("JumpArmor", "Jump Chestplate", {name: "JumpArmor"}, {type: "chestplate", armor: 5, durability: 500, texture: "armor/JumpArmor_0.png"});

IDRegistry.genItemID("travelLeggings");
Item.createArmorItem("travelLeggings", "travel Leggings", {name: "travelLeggings"}, {type: "leggings", armor: 4, durability: 500, texture: "armor/TravelLeggings_0.png"});

IDRegistry.genItemID("travelBoots");
Item.createArmorItem("travelBoots", "travel Boots", {name: "travelBoots"}, {type: "boots", armor: 3, durability: 500, texture: "armor/TravelBoots_0.png"});

IDRegistry.genItemID("PalaFastsword");
Item.createItem("PalaFastsword", "Paladium Fastsword", {name: "PalaFastsword", meta: 0}, {stack: 1});

Callback.addCallback("tick", function(){
	let item = Player.getCarriedItem();
    if(item.id == ItemID.PalaFastsword){
	   Entity.addEffect(Player.get(), 3, 2, 2, true, true);
    }
});

IDRegistry.genItemID("paladium_apple");
Item.createFoodItem("paladium_apple", "Paladium Apple", {name: "paladium_apple"}, {food: 4});
Item.registerEatenFunction = function(id, func){
	id = this.getNumericId(id);
	if(!~id){
		return false;
	}
	this.registerEatenFunctionForID(id, func);
};

Item.getEatenFunc = function(id){
	return this.eatenFuncs[id];
};

Callback.addCallback("FoodEaten", function(food, ratio){
	const func = Item.getEatenFunc(Player.getCarriedItem().id);
	func && func(food, ratio);
Item.registerEatenFunction("paladium_apple", function(){
	Entity.addEffect(player, 12, 0, 1200);
	Entity.addEffect(player, 22, 0, 2400);
});
});

let cooldown = 24;

IDRegistry.genItemID("StoneInv");
Item.createItem("StoneInv", "Legendary Stone Invisibility", {name: "LEGENDARYSTONE_INVISIBILITY"});
Item.setGlint(ItemID.StoneInv, true);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.StoneInv)
{
	   Entity.addEffect(Player.get(), 14, 1, 5000, true, true);
Item.setGlint(ItemID.StoneInv, false);
        }
    });
    
IDRegistry.genItemID("StonePow");
Item.createItem("StonePow", "Legendary Stone Power", {name: "LEGENDARYSTONE_POWER"});
Item.setGlint(ItemID.StonePow, true);
    
IDRegistry.genItemID("compressed_paladium");
Item.createItem("compressed_paladium", "compressed paladium", {name: "compressed_paladium"});

Recipes.addShaped({id: ItemID.compressed_paladium}, ["bbb", "bpb", "bbb"], ["b", BlockID.paladium_block, 0, "p", ItemID.paladium_ingot, 0]);


IDRegistry.genBlockID("PaladiumMachine");
Block.createBlockWithRotation("PaladiumMachine", [
    {
        name: "Paladium Machine",
        texture:
         [["PaladiumMachineTop", 0], 
         ["PaladiumMachineTop", 0], 
         ["PaladiumMachine", 0], 
         ["PaladiumMachine", 0], 
         ["PaladiumMachine", 0], 
         ["PaladiumMachine", 0]],
        inCreative: true
    }
]);
var paladiumMachine=new UI.StandartWindow({standart:{header:{text:{text:"PaladiumMachine"}},
inventory:{standart:true},
background:{standart:true}},
	drawing: [
		{type: "bitmap", x: 630, y: 150, bitmap: "pala_bar_background", scale: 3.2}
	],
elements:{
"slot1":{type:"slot",x:425,y:105,size:55},
"slot2":{type:"slot",x:525,y:145,size:55},
"slot3":{type:"slot",x:725,y:145,size:55},
"slot4":{type:"slot",x:825,y:105,size:55},
"slot5":{type:"slot",x:625,y:50,size:55},
"slotResult":{type:"slot",x:625,y:220,size:55}
    }
});

TileEntity.registerPrototype(BlockID.PaladiumMachine,{getGuiScreen:function(){return paladiumMachine}
});

IDRegistry.genItemID("extrapolatedBucket");
Item.createItem("extrapolatedBucket", "extrapolated bucket", {name: "extrapolatedBucket"});

Block.clickFuncs = {};

Block.registerClickFunctionForID = function(id, func){
	this.clickFuncs[id] = func;
};

Block.registerClickFunction = function(id, func){
	id = this.getNumericId(id);
	if(!~id){
		return false;
	}
	this.registerClickFunctionForID(id, func);
};

Block.getClickFunc = function(id){
	return this.clickFuncs[id];
};

Callback.addCallback("ItemUse", function(coords, item, block){
	if(Entity.getSneaking(Player.get())){
		return;
	}
	const func = Block.getClickFunc(block.id);
	func && func(coords, item, block);
});

const Pala = {
    
	createBerry: function(id, name, isOre){

		id = "berry_" + id;

		IDRegistry.genBlockID(id);
		Block.createBlock(id, [
			{name: name + " Bush", texture: [[id, 0]], inCreative: true},
			{name: "bush_0", texture: [[id, 0]]},
			{name: "bush_1", texture: [[id, 0]]},
			{name: "bush_2", texture: [[id + "_ripe", 0]]}
		]);
		Block.setShape(BlockID[id], 04/16, 00/16, 04/16, 12/16, 08/16, 12/16, 0);
		Block.setShape(BlockID[id], 02/16, 00/16, 02/16, 14/16, 12/16, 14/16, 1);
		BlockRenderer.setCustomCollisionShape(BlockID[id], -1, new ICRender.CollisionShape());
		ToolAPI.registerBlockMaterial(BlockID[id], "plant");
		Block.setDestroyTime(BlockID[id], 2);

		IDRegistry.genItemID(id);
		Item.createItem(id, name, {name: id});

		if(isOre){
			Block.registerPlaceFunction(id, function(coords, item){
				Game.prevent();
				const c = coords.relative;
				if(World.getLightLevel(c.x, c.y, c.z) < 13 && GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
					World.setBlock(c.x, c.y, c.z, BlockID[id]);
				}
			});
			Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data){
				data < 4 && Math.random() < 0.5 && World.getLightLevel(x, y, z) < 10 && World.setBlock(x, y, z, id, data + 1);
			});
		}
		else{
			Block.setRandomTickCallback(BlockID[id], function(x, y, z, id, data){
				data < 4 && Math.random() < 0.5 && World.setBlock(x, y, z, id, data + 1);
			});
		}

		Block.registerDropFunction(id, function(){
			return [BlockID[id], 1];
		});

		Block.registerClickFunction(id, function(coords, item, block){
			if(block.data == 3){
				const relative = coords.relative
				World.setBlock(coords.x, coords.y, coords.z, BlockID[id], 2);
				World.drop(relative.x + 0.5, relative.y + 0.5, relative.z + 0.5, ItemID[id], 1);
			}
		});
	}
}

Pala.createBerry("xp", "Essence Berry");

	const Ore = {
		xp: "GenerateChunkUndergournd",
		copper: "GenerateChunkUnderground",
		tin: "GenerateChunkUnderground",
		aluminum: "GenerateChunkUnderground",
		ardite: "GenerateNetherChunk",
		cobalt: "GenerateNetherChunk"
	}

	const Cfg = {count: 0, size: 0, minY: 0, maxY: 0};

	for(let key in Ore){
		Cfg.count = __config__.getNumber("OreGen." + key + ".count") | 0;
		Cfg.size = __config__.getNumber("OreGen." + key + ".size") | 0;
		Cfg.minY = __config__.getNumber("OreGen." + key + ".minY") | 0;
		Cfg.maxY = __config__.getNumber("OreGen." + key + ".maxY") | 0;
		if(Cfg.count){
			Callback.addCallback(Ore[key], function(x, z){
				let coords;
				for(let i = Cfg.count; i--;){
					coords = GenerationUtils.randomCoords(x, z, Cfg.minY, Cfg.maxY);
					GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["ore_" + key], 0, Cfg.size);
				}
			});
		}
	}

	const Berry = "xp";

	for(let i = Berry.length; i--;){
		Cfg.count = __config__.getNumber("BerryGen." + Berry[i] + ".count") | 0;
		Cfg.size = __config__.getNumber("BerryGen." + Berry[i] + ".size") | 0;
		Cfg.minY = __config__.getNumber("BerryGen." + Berry[i] + ".minY") | 0;
		Cfg.maxY = __config__.getNumber("BerryGen." + Berry[i] + ".maxY") | 0;
		if(Cfg.count){
			Callback.addCallback("GenerateChunkUnderground", function(x, z){
				let coords;
				for(let j = Cfg.count; j--;){
					coords = GenerationUtils.randomCoords(x, z, Cfg.minY, Cfg.maxY);
					GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["berry_" + Berry[i]], 2, Cfg.size);
					
				}
			});
		}
	}
	
Baubles.registerBauble({
    id: ItemID.smallRing,
    type: "ring"
});

RingsHelper.registerRing({
	id: "smallRing",
	name: "small ring",
	texture: "smallRing",
	meta: 0,
	stack: 1,
	durability: 20,
}, true);

IDRegistry.genItemID("IronSmithHammer");
Item.createItem("IronSmithHammer", "IronSmith Hammer", {name: "IronSmithHammer"});

IDRegistry.genBlockID("concrete_black");
Block.createBlock("concrete_black", [
    {name: "concrete black", texture: [["concrete_black", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.concrete_black, "metal");

IDRegistry.genBlockID("concrete_blue");
Block.createBlock("concrete_blue", [
    {name: "concrete blue", texture: [["concrete_blue", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.concrete_blue, "metal");

IDRegistry.genBlockID("concrete_pink");
Block.createBlock("concrete_pink", [
    {name: "concrete pink", texture: [["concrete_pink", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.concrete_pink, "metal");

IDRegistry.genBlockID("coarse_dirt");
Block.createBlock("coarse_dirt", [
    {name: "coarse dirt", texture: [["coarse_dirt", 0]], inCreative: true}
], "opaque");

IDRegistry.genBlockID("caveBlock");
Block.createBlock("caveBlock", [{name: "cave block", texture: [["caveBlock", 0]], inCreative: true}], "translucent", "opaque", "cutout", "cutout_mipped");

IDRegistry.genBlockID("OneWayGlass");
Block.createBlockWithRotation("OneWayGlass", [
    {
        name: "OneWayGlass",
        texture:
         [["OneWayTop", 0], 
         ["OneWayTop", 0], 
         ["OneWayTop", 0], 
         ["OneWay", 0], 
         ["OneWayTop", 0], 
         ["OneWayTop", 0]],
        inCreative: true
    }
], "cutout");

IDRegistry.genItemID("palaGreenSword");
Item.createItem("palaGreenSword", "Green Paladium Sword", {name: "palaGreenSword", meta: 0}, {stack: 1});

IDRegistry.genItemID("elucidator");
Item.createItem("elucidator", "chaika9 elucidator", {name: "elucidator", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.elucidator}, ["   ", " s ", "   "], ["s", ItemID.palaGreenSword, 0]);

IDRegistry.genItemID("HangGlider");
Item.createItem("HangGlider", "Hang Glider", {name: "HangGlider"});
Callback.addCallback("tick", function(){
    var vel = Player.getVelocity();
	let item = Player.getCarriedItem();
	if(item.id == ItemID.HangGlider){
if(vel.y < -0.1){
				Player.setVelocity(vel.x, -0.1, vel.z);
        }
	}
			var time = vel / -0.06;
			var height = 0.06 * time*time / 2;
			if(height < 22){
				if(height < 17){
					var damage = Math.floor(height) - 3;
				}else{
					var damage = Math.ceil(height) - 3;
				}
			}
});

IDRegistry.genItemID("FurnaceUpgrade");
Item.createItem("FurnaceUpgrade", "Furnace Upgrade", {name: "FurnaceUpgrade"});

IDRegistry.genBlockID("paladiumFurnace");
Block.createBlockWithRotation("paladiumFurnace", [
	{name: "paladium Furnace", texture: [["paladiumfurnacetop", 0], ["paladiumfurnacetop", 0], ["paladiumfurnaceside", 0], ["paladiumfurnace", 0], ["paladiumfurnaceside", 0], ["paladiumfurnaceside", 0]], inCreative: true}
]);

IDRegistry.genBlockID("green_antiblock");
Block.createBlock("green_antiblock", [{name: "antiblock", texture: [["green_antiblock", 0]], inCreative: true}]);

IDRegistry.genItemID("GreenPaladiumStick");
Item.createItem("GreenPaladiumStick", "Green Paladium Stick", {name: "GreenPaladiumStick"});

IDRegistry.genItemID("dummy");
Item.createItem("dummy", "dummy", {name: "dummy"});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.dummy)
{
		World.setBlock(coords.x, coords.y+1, coords.z, BlockID.dummyBlock);
    }
});

IDRegistry.genItemID("GliderWing");
Item.createItem("GliderWing", "GliderWing", {name: "GliderWing"});

IDRegistry.genBlockID("HardenedObsidian");
Block.createBlock("HardenedObsidian", [{name: "Hardened Obsidian", texture: [["HardenedObsidian", 0]], inCreative: true}]);
Block.setDestroyTime(BlockID.HardenedObsidian, -1);
Block.setDestroyLevel("HardenedObsidian", -1);

IDRegistry.genItemID("magical_tool");
Item.createItem("magical_tool", "magical tool", {name: "magical_tool"}, {stack: 1});
Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.magical_tool && block.id==BlockID.HardenedObsidian)
{
    World.destroyBlock(coords.x, coords.y, coords.z);
	World.drop(coords.x, coords.y, coords.z, block.id==BlockID.HardenedObsidian);
    }
});

IDRegistry.genItemID("palamixedCoal");
Item.createItem("palamixedCoal", "Palamixed Coal", {name: "palamixedCoal"});

Callback.addCallback("ItemUse", function (coords, item, block) {
if(item.id==ItemID.PalaFastsword && block.id==BlockID.dummyBlock){
    alert("7");
    }else{
if(item.id==ItemID.palaGreenSword && block.id==BlockID.dummyBlock){
    alert("10");
    }
  }
});

IDRegistry.genBlockID("fishnet");
Block.createBlock("fishnet", [{name: "Fish Net", texture: [["fishnet", 0]], inCreative: true}]);

IDRegistry.genItemID("fireImbue");
Item.createItem("fireImbue", "fire Imbue", {name: "fireImbue"});

IDRegistry.genItemID("witherImbue");
Item.createItem("witherImbue", "wither Imbue", {name: "witherImbue"});

IDRegistry.genItemID("voidStone");
Item.createItem("voidStone", "Void Stone", {name: "voidStone"});

IDRegistry.genItemID("eggplant");
Item.createItem("eggplant", "Eggplant", {name: "eggplant"});

IDRegistry.genItemID("Chervil");
Item.createItem("Chervil", "Chervil", {name: "Chervil"});

IDRegistry.genItemID("Kiwano");
Item.createItem("Kiwano", "Kiwano", {name: "Kiwano"});

IDRegistry.genItemID("OrangeBlue");
Item.createItem("OrangeBlue", "OrangeBlue", {name: "OrangeBlue"});

IDRegistry.genItemID("GuardianRenamer");
Item.createItem("GuardianRenamer", "Guardian Renamer", {name: "GuardianRenamer"});

IDRegistry.genItemID("GuardianHammer");
Item.createItem("GuardianHammer", "Guardian Hammer", {name: "GuardianHammer"});

IDRegistry.genItemID("UnclaimFinder1");
Item.createItem("UnclaimFinder1", "Unclaim Finder", {name: "UnclaimFinder1"});

IDRegistry.genItemID("UnclaimFinder2");
Item.createItem("UnclaimFinder2", "Unclaim Finder", {name: "UnclaimFinder2"});

IDRegistry.genItemID("UnclaimFinder3");
Item.createItem("UnclaimFinder3", "Unclaim Finder", {name: "UnclaimFinder3"});

IDRegistry.genItemID("UnclaimFinderElectronic");
Item.createItem("UnclaimFinderElectronic", "Unclaim Finder Electronic", {name: "UnclaimFinderElectronic"});

IDRegistry.genItemID("pb");
Item.createItem("pb", "point boutique", {name: "pb"});

IDRegistry.genItemID("InfernalKnocker");
Item.createItem("InfernalKnocker", "Infernal Knocker", {name: "InfernalKnocker"}, {stack: 1});

IDRegistry.genItemID("paladiumCore");
Item.createItem("paladiumCore", "Paladium Core", {name: "paladiumCore"});

IDRegistry.genBlockID("InvisibleCollideBlock");
Block.createBlock("InvisibleCollideBlock", [{name: "Invisible Collide Block", texture: [["InvisibleCollideBlock", 0]], inCreative: true}], "translucent");

IDRegistry.genBlockID("BowMachine");
Block.createBlockWithRotation("BowMachine", [
	{name: "Bow Machine", texture: [["bow_machine_block_top", 0], ["bow_machine_block_top", 0], ["bow_machine_block_side", 0], ["bow_machine_block_side", 0], ["bow_machine_block_side", 0], ["bow_machine_block_side", 0]], inCreative: true}
]);