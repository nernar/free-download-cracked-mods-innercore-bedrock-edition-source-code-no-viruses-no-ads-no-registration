/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 11
*/



// file: items/items.js

IDRegistry.genItemID("Lolinghot");
Item.createItem("Lolinghot", "Слиток души", {name: "lol_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("golem_crystal");
Item.createItem("golem_crystal", "Кристалл голема", {name: "golem_crystal", meta: 0}, {stack: 64});

IDRegistry.genItemID("grapple");
Item.createItem("grapple", "Кусок гарпуна", {name: "grapple", meta: 0}, {stack: 64});

IDRegistry.genItemID("hot_p_book");
Item.createItem("hot_p_book", "Книга горячей картошки", {name: "hot_p_book", meta: 0}, {stack: 1});

IDRegistry.genItemID("nope");
Item.createItem("nope", "§2Офигевшая рыба", {name: "nope", meta: 0}, {stack: 1});

IDRegistry.genItemID("coin");
Item.createItem("coin", "Руна края", {name: "coin", meta: 0}, {stack: 1});

IDRegistry.genItemID("ender_star");
Item.createItem("ender_star", "Звезда края", {name: "ender_star", meta: 0}, {stack: 64});

IDRegistry.genItemID("skill");
Item.createItem("skill", "Основа улучшения", {name: "skill", meta: 0}, {stack: 1});

IDRegistry.genItemID("skilll");
Item.createItem("skilll", "Улучшение Край", {name: "skill", meta: 1}, {stack: 1});

IDRegistry.genItemID("skil");
Item.createItem("skil", "σУлучшение Атакаσ", {name: "skill", meta: 2}, {stack: 1});

IDRegistry.genItemID("Tail");
Item.createItem("Tail", "Портал в Край", {name: "endPortal", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.Tail, count: 1, data: 0}, [
		"bab",
		"axa",
		"bab"
	], ['x', 264, 0, 'a', 381, 0, 'b', 49, 0]);


Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.Tail&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 119, 0); 
World.setBlock(coords.x+1, coords.y+1, coords.z, 2, 0); 
World.setBlock(coords.x-1, coords.y+1, coords.z, 2, 0);
World.setBlock(coords.x, coords.y+1, coords.z+1, 2, 0);
World.setBlock(coords.x, coords.y+1, coords.z-1, 2, 0);
Entity.spawn(coords.x+1, coords.y+1, coords.z, 93); 
}}); 

var playerMaxHealt = 20
IDRegistry.genItemID("hp");
Item.createItem("hp", "❤️Сердечко .Одноразовое❤️", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', 152, -1, 'b', 322, -1]);

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+1)}}); 
var playerMaxHealt = 30

Saver.addSavesScope("playerHeartScope",
    function read(scope){
        playerMaxHealt = scope.playerMaxHealt;
if(!scope.playerMaxHealt){
Game.message("Дарова");
return;
}
    },
    function save(){
        return {
            playerMaxHealt: playerMaxHealt
        }
    }
);




// file: items/tools.js

IMPORT("ToolLib");
ToolAPI.addToolMaterial("Lol", {durability: 6180, level: 20, efficiency: 4, damage: 13, enchantability: 76});
IDRegistry.genItemID("LolSword");
Item.createItem("LolSword", "Коса души", {name: "lolsword", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.LolSword, "Lol", ToolType.sword);

ToolAPI.addToolMaterial("Golem", {durability: 10000, level: 20, efficiency: 4, damage: 16, enchantability: 1});
IDRegistry.genItemID("GolemSword");
Item.createItem("GolemSword", "Меч голема", {name: "golem_sword", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.GolemSword, "Golem", ToolType.sword);

ToolAPI.addToolMaterial("Hook", {durability: 6600, level: 20, efficiency: 5, damage: 16, enchantability: 12});
IDRegistry.genItemID("grapple_hook");
Item.createItem("grapple_hook", "Захватный крюк", {name: "grapple_hook", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.grapple_hook, "Hook", ToolType.pickaxe);

ToolAPI.addToolMaterial("Lol2", {durability: 2000, level: 20, efficiency: 4, damage: 4, enchantability: 76});
IDRegistry.genItemID("LolSword2");
Item.createItem("LolSword2", "Коса", {name: "lolsword", meta: 1}, {stack: 1});
ToolLib.setTool(ItemID.LolSword2, "Lol2", ToolType.sword);
ToolLib.setTool(ItemID.LolSword2, "Lol2", ToolType.hoe);

ToolAPI.addToolMaterial("Raiden", {durability: 6000, level: 20, efficiency: 4, damage: 20, enchantability: 76});
IDRegistry.genItemID("raider_axe");
Item.createItem("raider_axe", "Топор охотника", {name: "raider_axe", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.raider_axe, "Raiden", ToolType.sword);
ToolLib.setTool(ItemID.raider_axe, "Raiden", ToolType.axe);

ToolAPI.addToolMaterial("Purple", {durability: 6000, level: 20, efficiency: 4, damage: 10, enchantability: 76});
IDRegistry.genItemID("purple_sword");
Item.createItem("purple_sword", "Пурпурный меч", {name: "purple_sword", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.purple_sword, "Purple", ToolType.sword);

ToolAPI.addToolMaterial("Ender", {durability: 12000, level: 20, efficiency: 40, damage: 24, enchantability: 76});
IDRegistry.genItemID("EndSword");
Item.createItem("EndSword", "Клинок края", {name: "Endsword", meta: 0}, {stack: 1});
ToolLib.setTool(ItemID.EndSword, "Ender", ToolType.sword);

ToolAPI.addToolMaterial("Enders", {durability: 14000, level: 20, efficiency: 40, damage: 29, enchantability: 76});
IDRegistry.genItemID("EndSwords");
Item.createItem("EndSwords", "Пробуждённый клинок края", {name: "Endsword", meta: 1}, {stack: 1});
ToolLib.setTool(ItemID.EndSwords, "Enders", ToolType.sword);

ToolAPI.addToolMaterial("Ende", {durability: 19000, level: 20, efficiency: 40, damage: 34, enchantability: 120});
IDRegistry.genItemID("EndSwor");
Item.createItem("EndSwor", "Боевой клинок края", {name: "Endsword", meta: 1}, {stack: 1});
ToolLib.setTool(ItemID.EndSwor, "Ende", ToolType.sword);




// file: items/armor.js

IMPORT("HelperMod");

IDRegistry.genItemID("Wings");
Item.createArmorItem("Wings", "Майка Тайлена", {name: "taile"}, {type: "chestplate", armor: 8, durability: 10000, texture: "armor/taile_1.png", isTech:false}); 

ARMOR.setMode({
	id: ItemID.Wings,
	type: [1],
	tick: function(){
       Player.setFlyingEnabled(true);
	}
});
Callback.addCallback("tick",function() {
    if(Player.getArmorSlot(1).id ==! ItemID.Wings && !Game.getGameMode()){
	    Player.setFlyingEnabled(false);
    }
});

Recipes.addShaped({id: ItemID.Wings, count: 1, data: 0}, [
		"boc",
		"aca",
		"cab"
	], ['b', ItemID.Lolinghot, 0, 'a', ItemID.grapple, 0, 'c', ItemID.golem_crystal, 0,]);
	
IDRegistry.genItemID("TaileHelmet");
Item.createArmorItem("TaileHelmet", "Шлем Тайлена", {name: "taile", meta: 1}, {	isTech: false,
	armor: 3,
	type: "helmet",
	texture: "armor/taile_3.png",
	durability: 16000
});
ARMOR.setMode({
	id: ItemID.TaileHelmet,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 16, 1, 19, false,false);
       Entity.addEffect(Player.get(), 23, 190, 19, false,false);
       Entity.addEffect(Player.get(), 13, 190, 19, false,false);
	}
});

Recipes.addShaped({id: ItemID.TaileHelmet, count: 1, data: 0}, [
		"bcb",
		"aoa",
		"ooo"
	], ['b', ItemID.Lolinghot, 0, 'a', ItemID.grapple, 0, 'c', ItemID.golem_crystal, 0,]);




// file: blocks/ore.js

IDRegistry.genBlockID("orelol");
Block.createBlock("orelol", [
    {name: "Руда души", texture: [["lol_ore", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.orelol, "stone", 2, true);
Block.setDestroyTime(BlockID.orelol, 3);
Block.setDestroyLevel("orelol", 3);

IDRegistry.genBlockID("golem_ore");
Block.createBlock("golem_ore", [
    {name: "Руда голема", texture: [["golem_ore", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.golem_ore, "stone", 2, true);
Block.setDestroyTime(BlockID.golem_ore, 3);
Block.setDestroyLevel("golem_ore", 3);

IDRegistry.genBlockID("oreare");
Block.createBlock("oreare", [
    {name: "Руда Древней стали", texture: [["are_ore", 0]], inCreative: true}], "opaque");




// file: blocks/block.js

IDRegistry.genBlockID("golem_block");
Block.createBlock("golem_block", [
    {name: "Блок из кристаллов голема", texture: [["golem_block", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.golem_block, "stone", 2, true);
Block.setDestroyTime(BlockID.golem_block, 3);
Block.setDestroyLevel("golem_block", 3);
Recipes.addShaped({id: BlockID.golem_block, count: 1, data: 0}, 
["xbx","bxb","xbx"],
['x', 265, 0, 'b', ItemID.golem_crystal, 0]
);




// file: blocks/orespawn.js

//generation
//normal
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.orelol, 0, chunkX, chunkZ, { 
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
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.golem_ore, 0, chunkX, chunkZ, { 
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
Callback.addCallback("GenerateChunkUndeground", function(chunkX, chunkZ){ 
UniqueGen.generateOre(BlockID.oreare, 0, chunkX, chunkZ, { 
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




// file: items/3dtool.js

IMPORT("TileRender");
IDRegistry.genItemID("Katana");
Item.createItem("Katana", "Древний меч Тайлена", {name: "SOTG", meta: 0}, {stack: 1});

var KatanaM = new RenderMesh(__dir__ + "/models/Katana.obj","obj", {translate: [0, .18, 0], scale: [1.5, 1.5, 1.5]});
ItemModel.getFor(ItemID.Katana, 0).setModel(KatanaM, "katana");

ToolAPI.addToolMaterial("kt", {durability: 2000, level: 6, efficiency: 9, damage: 18, enchantability: 14});
ToolLib.setTool(ItemID.Katana, "kt", ToolType.sword);




// file: heart.js

var BLOCK_TYPE_HEART= Block.createSpecialType({
	destroytime: 0,
	explosionres: 19000000000000000000000000000000000.0,
	base: 1
});

IDRegistry.genBlockID("Heart");
Block.createBlock("Heart", [{name: "Кристальное сердце", texture: [["heart", 0]], inCreative: true}], BLOCK_TYPE_HEART);
var render = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.Heart, 0, render);

var model = BlockRenderer.createModel();

model.addBox(8/16, 3/16, 7/16, 9/16, 4/16, 9/16, BlockID.Heart, 0);
model.addBox(8/16, 4/16, 6/16, 9/16, 5/16, 10/16, BlockID.Heart, 0);
model.addBox(7/16, 4/16, 7/16, 10/16, 5/16, 9/16, BlockID.Heart, 0);
model.addBox(8/16, 5/16, 5/16, 9/16, 6/16, 11/16, BlockID.Heart, 0);
model.addBox(7/16, 5/16, 6/16, 10/16, 6/16, 10/16, BlockID.Heart, 0);
model.addBox(8/16, 6/16, 4/16, 9/16, 7/16, 12/16, BlockID.Heart, 0);
model.addBox(7/16, 6/16, 5/16, 10/16, 7/16, 11/16, BlockID.Heart, 0);
model.addBox(8/16, 7/16, 3/16, 9/16, 11/16, 13/16, BlockID.Heart, 0);
model.addBox(7/16, 7/16, 4/16, 10/16, 11/16, 12/16, BlockID.Heart, 0);
model.addBox(8/16, 11/16, 4/16, 9/16, 12/16, 12/16, BlockID.Heart, 0);
model.addBox(7/16, 11/16, 5/16, 10/16, 12/16, 7/16, BlockID.Heart, 0);
model.addBox(7/16, 11/16, 9/16, 10/16, 12/16, 11/16, BlockID.Heart, 0);
model.addBox(8/16, 12/16, 5/16, 9/16, 13/16, 7/16, BlockID.Heart, 0);
model.addBox(8/16, 12/16, 9/16, 9/16, 13/16, 11/16, BlockID.Heart, 0);
render.addEntry(model); 

Recipes.addShaped({id: BlockID.Heart, count: 1, data: 0}, [
 "ddd",
 "oco",
 "ddd"
 ], ["c", 122, 0, "d", 399, 0]);




// file: workbench.js

IMPORT("RecipeTileEntityLib");

IDRegistry.genBlockID("stone_craftingtable");
Block.createBlockWithRotation("stone_craftingtable", [{name: "Улучшенный верстак", texture: [
    ["craftb", 0], 
    ["craftb", 0], 
    ["craftb", 0], 
    ["craftb", 0], 
    ["craftb", 0], 
    ["craftb", 0]
], inCreative: true}], "opaque");
 Recipes.addShaped({id: BlockID.stone_craftingtable, count: 1, data: 0}, [
  "aa",
  "aa"],
   ['a', 122, 0]);  
   ToolAPI.registerBlockMaterial(BlockID.stone_craftingtable, "stone");
 
   
var container = new UI.Container();  
var craftingtable = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Улучшенный  верстак"}},
        inventory: {standart:true},
        background: {standart: true}
    },
    drawing: [],
    elements:{
		"inputSlot0": {type: "slot", x: 400, y: 160, size: 75}, 
		"inputSlot1": {type: "slot", x: 480, y: 160, size: 76}, 
		"inputSlot2": {type: "slot", x: 560, y: 160, size: 76}, 
		"inputSlot3": {type: "slot", x: 400, y: 240, size: 76}, 
		"inputSlot4": {type: "slot", x: 480, y: 240, size: 76}, 
		"inputSlot5": {type: "slot", x: 560, y: 240, size: 76},
		"inputSlot6": {type: "slot", x: 400, y: 320, size: 76},
		"inputSlot7": {type: "slot", x: 480, y: 320, size: 76},
		"inputSlot8": {type: "slot", x: 560, y: 320, size: 76},
		"outputSlot": {type: "slot", x: 850, y: 240, size: 76, isValid:RecipeTE.outputSlotValid},
		"image_1": {type: "image", x: 679, y: 230, bitmap: "arrow", scale: 6.25}
    }
});

RecipeTE.registerWorkbench("stone_craftingtable",
{
    rows:3,
    cols:3,
    GuiScreen:craftingtable 
    //TileEntity
});

RecipeTE.addShapeRecipe("stone_craftingtable", {
    id: ItemID.EndSwords,
    count: 1
},
[   " a ",
    " b ",
    "   "
], {
    a: {
        id: ItemID.skilll
    }
,
    b: {
        id: ItemID.EndSword
    }
});

RecipeTE.addShapeRecipe("stone_craftingtable", {
    id: ItemID.EndSwor,
    count: 1
},
[   " a ",
    " b ",
    "   "
], {
    a: {
        id: ItemID.skil
    }
,
    b: {
        id: ItemID.EndSwords
    }
});

RecipeTE.addShapeRecipe("stone_craftingtable", {
    id: ItemID.EndSwords,
    count: 1
},
[   " a ",
    " b ",
    "   "
], {
    a: {
        id: ItemID.skilll
    }
,
    b: {
        id: ItemID.EndSword
    }
});


           //standart crafts
		   




// file: Potatocraft.js

Recipes.addShaped({id: ItemID.hot_p_book, count: 1, data: 0}, [
 "ccc",
 "ccc",
 "ccc"
 ], ["c", 392, 0]);
 
Recipes.addShaped({id: 399, count: 2, data: 0}, [
 "dco",
 "ooo",
 "ooo"
 ], ["c", 399, 0, "d", ItemID.hot_p_book, 0]);
 
Recipes.addShaped({id: 122, count: 2, data: 0}, [
 "dco",
 "ooo",
 "ooo"
 ], ["c", 122, 0, "d", ItemID.hot_p_book, 0]);




// file: Irecipes.js

Recipes.addShaped({id: ItemID.LolSword2, count: 1, data: 0}, [
 "ddo",
 "oco",
 "oco"
 ], ["c", 280, 0, "d", 1, 0]);
 
Recipes.addShaped({id: ItemID.LolSword, count: 1, data: 0}, [
 "dod",
 "oco",
 "dod"
 ], ["c", ItemID.LolSword2, 0, "d", ItemID.Lolinghot, 0]);
 
Recipes.addFurnace(BlockID.orelol, ItemID.Lolinghot, 0);
Recipes.addFurnace(265, ItemID.grapple, 0);
Recipes.addFurnace(BlockID.golem_ore, ItemID.golem_crystal, 0);

Recipes.addShaped({id: ItemID.GolemSword, count: 1, data: 0}, [
 "ddd",
 "odo",
 "oco"
 ], ["c", 280, 0, "d", BlockID.golem_block, 0]);

Recipes.addShaped({id: ItemID.purple_sword, count: 1, data: 0}, [
 "ddd",
 "ddd",
 "oco"
 ], ["c", 280, 0, "d", ItemID.Lolinghot, 0]);

Recipes.addShaped({id: ItemID.ender_star, count: 1, data: 0}, [
 "oco",
 "cdc",
 "oco"
 ], ["c", 399, 0, "d", 122, 0]);
 
Recipes.addShaped({id: ItemID.coin, count: 9, data: 0}, [
 "coo",
 "ooo",
 "ooo"
 ], ["c", 122, 0])
 
Recipes.addShaped({id: ItemID.EndSword, count: 1, data: 0}, [
 "odo",
 "odo",
 "oco"
 ], ["c", 280, 0, "d", ItemID.ender_star, 0]);
 
Recipes.addShaped({id: ItemID.skill, count: 1, data: 0}, [
 "odo",
 "ddd",
 "oco"
 ], ["c", 280, 0, "d", 1, 0]);
 
Recipes.addShaped({id: ItemID.skilll, count: 1, data: 0}, [
 "odo",
 "dcd",
 "odo"
 ], ["c", ItemID.skill, 0, "d", ItemID.coin, 0]);
 
Recipes.addShaped({id: ItemID.skil, count: 1, data: 0}, [
 "odo",
 "dcd",
 "odo"
 ], ["c", ItemID.skill, 0, "d", BlockID.Heart, 0]);




