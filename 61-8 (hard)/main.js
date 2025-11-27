IDRegistry.genItemID("bigStick");
Item.createItem("bigStick", "bigStick", {name: "bigStick"}, {stack: 16});
Recipes.addShaped({id: ItemID.bigStick, count: 1, data: 0}, [
	"  a",
	" a ",
	" a "
], ['a', 17, -1]);

Recipes.addShaped({id: ItemID.bigStick, count: 1, data: 0}, [
	"  a",
	" a ",
	" a "
], ['a', 162, -1]);


IDRegistry.genItemID("rope");
Item.createItem("rope", "rope", {name: "rope"}, {stack: 64});

Recipes.addShaped({id: 287, count: 4, data: 0}, [
	"",
	"a",
	""
], ['a', 35, -1]);
Recipes.addShaped({id: ItemID.rope, count: 1, data: 0}, [
	" a ",
	" a ",
	" a "
], ['a', 287, -1]);

Recipes.addShaped({id: ItemID.rope, count: 1, data: 0}, [
	" aa",
	" aa",
	" aa"
], ['a', 106, -1]);



IDRegistry.genItemID("ironHammer");
Item.createItem("ironHammer", "ironHammer", {name: "ironHammer"}, {stack: 1});
Item.setMaxDamage(ItemID.ironHammer, 94);

Recipes.addShaped({id: ItemID.ironHammer, count: 1, data: 0}, [
	"cbc",
	"cac",
	" a "
], ['a', ItemID.bigStick, 0, 'b', 1, 0,'c',265, -1]);


IDRegistry.genItemID("plateIron");
Item.createItem("plateIron", "Iron Plate", {name: "plate_iron"}, {stack: 64});
IDRegistry.genItemID("plateGold");
Item.createItem("plateGold", "Gold Plate", {name: "plate_gold"}, {stack: 64});

function addRecipeWithCraftingTool(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
		for (var i in field){
			if (field[i].id == tool){
				field[i].data++;
				if (field[i].data >= 94){
					field[i].id = field[i].count = field[i].data = 0;
				}
			}
			else {
				api.decreaseFieldSlot(i);
			}
		}
	});
}


Callback.addCallback("PostLoaded", function(){
addRecipeWithCraftingTool({id: ItemID.plateIron, count: 1, data: 0}, [{id:265, data:0}],ItemID.ironHammer);
addRecipeWithCraftingTool({id: ItemID.plateGold, count: 1, data: 0}, [{id:266, data:0}],ItemID.ironHammer);
});
//iron
Recipes.deleteRecipe({id: 256, count: 1, data: 0}) 
Recipes.addShaped({id: 256, count: 1, data: 0}, [
	" ca",
	" bc",
	"b  "
], ['a', ItemID.plateIron, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 257, count: 1, data: 0}) 
Recipes.addShaped({id: 257, count: 1, data: 0}, [
	"aac",
	" ba",
	"b a"
], ['a', ItemID.plateIron, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 258, count: 1, data: 0}) 
Recipes.addShaped({id: 258, count: 1, data: 0}, [
	"aac",
	"ab ",
	"b  "
], ['a', ItemID.plateIron, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 267, count: 1, data: 0}) 
Recipes.addShaped({id: 267, count: 1, data: 0}, [
	"  a",
	"ca ",
	"bc "
], ['a', ItemID.plateIron, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

Recipes.addShaped({id: 302, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateIron, -1, 'b', 298, -1,'c', ItemID.rope, -1]);
Recipes.addShaped({id: 303, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateIron, -1, 'b', 299, -1,'c', ItemID.rope, -1]);
Recipes.addShaped({id: 304, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateIron, -1, 'b', 300, -1,'c', ItemID.rope, -1]);
Recipes.addShaped({id: 305, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateIron, -1, 'b', 301, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 306, count: 1, data: 0}) 
Recipes.addShaped({id: 306, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateIron, -1, 'b', 302, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 307, count: 1, data: 0}) 
Recipes.addShaped({id: 307, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateIron, -1, 'b', 303, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 308, count: 1, data: 0}) 
Recipes.addShaped({id: 308, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateIron, -1, 'b', 304, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 309, count: 1, data: 0}) 
Recipes.addShaped({id: 309, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateIron, -1, 'b', 305, -1,'c', ItemID.rope, -1]);
//cooble


IDRegistry.genBlockID("ds"); Block.createBlock("ds", [ {name: "Double Cobblstone", texture: [["DoubleCooblstone", 0], ["DoubleCooblstone", 0], ["DoubleCooblstone", 0], ["DoubleCooblstone", 0], ["DoubleCooblstone", 0], ["DoubleCooblstone", 0]], inCreative: true} ])
Recipes.addShaped({id: BlockID.ds, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', 4, -1]);



Recipes.deleteRecipe({id: 273, count: 1, data: 0}) 
Recipes.addShaped({id: 273, count: 1, data: 0}, [
	" ca",
	" bc",
	"b  "
], ['a', BlockID.ds, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 274, count: 1, data: 0}) 
Recipes.addShaped({id: 274, count: 1, data: 0}, [
	"aac",
	" ba",
	"b a"
], ['a', BlockID.ds, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 275, count: 1, data: 0}) 
Recipes.addShaped({id: 275, count: 1, data: 0}, [
	"aac",
	"ab ",
	"b  "
], ['a', BlockID.ds, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 272, count: 1, data: 0}) 
Recipes.addShaped({id: 272, count: 1, data: 0}, [
	"  a",
	"ca ",
	"bc "
], ['a', BlockID.ds, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

Recipes.deleteRecipe({id: 61, count: 1, data: 0}) 
Recipes.addShaped({id: 61, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', BlockID.ds, -1, 'b', 50, -1]);

//gold

Recipes.deleteRecipe({id: 284, count: 1, data: 0}) 
Recipes.addShaped({id: 284, count: 1, data: 0}, [
	" ca",
	" bc",
	"b  "
], ['a', ItemID.plateGold, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 285, count: 1, data: 0}) 
Recipes.addShaped({id: 285, count: 1, data: 0}, [
	"aac",
	" ba",
	"b a"
], ['a', ItemID.plateGold, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 286, count: 1, data: 0}) 
Recipes.addShaped({id: 286, count: 1, data: 0}, [
	"aac",
	"ab ",
	"b  "
], ['a', ItemID.plateGold, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 283, count: 1, data: 0}) 
Recipes.addShaped({id: 283, count: 1, data: 0}, [
	"  a",
	"ca ",
	"bc "
], ['a', ItemID.plateGold, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);


Recipes.deleteRecipe({id: 314, count: 1, data: 0}) 
Recipes.addShaped({id: 314, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateGold, -1, 'b', 302, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 315, count: 1, data: 0}) 
Recipes.addShaped({id: 315, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateGold, -1, 'b', 303, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 316, count: 1, data: 0}) 
Recipes.addShaped({id: 316, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateGold, -1, 'b', 304, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 317, count: 1, data: 0}) 
Recipes.addShaped({id: 317, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', ItemID.plateGold, -1, 'b', 305, -1,'c', ItemID.rope, -1]);

//diamond
Recipes.deleteRecipe({id: 277, count: 1, data: 0}) 
Recipes.addShaped({id: 277, count: 1, data: 0}, [
	" ca",
	" bc",
	"b  "
], ['a', 264, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 278, count: 1, data: 0}) 
Recipes.addShaped({id: 278, count: 1, data: 0}, [
	"aac",
	" ba",
	"b a"
], ['a', 264, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 279, count: 1, data: 0}) 
Recipes.addShaped({id: 279, count: 1, data: 0}, [
	"aac",
	"ab ",
	"b  "
], ['a', 264, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 276, count: 1, data: 0}) 
Recipes.addShaped({id: 276, count: 1, data: 0}, [
	"  a",
	"ca ",
	"bc "
], ['a', 264, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);


Recipes.deleteRecipe({id: 310, count: 1, data: 0}) 
Recipes.addShaped({id: 310, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', 264, -1, 'b', 314, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 311, count: 1, data: 0}) 
Recipes.addShaped({id: 311, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', 264, -1, 'b', 315, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 312, count: 1, data: 0}) 
Recipes.addShaped({id: 312, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', 264, -1, 'b', 316, -1,'c', ItemID.rope, -1]);
Recipes.deleteRecipe({id: 313, count: 1, data: 0}) 
Recipes.addShaped({id: 313, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', 264, -1, 'b', 317, -1,'c', ItemID.rope, -1]);


IDRegistry.genItemID("chipset");
Item.createItem("chipset", "chipset", {name: "chipset"}, {stack: 64});

Recipes.addShaped({id: ItemID.chipset, count: 3, data: 0}, [
	"aba",
	"bcb",
	"aba"
], ['a', ItemID.plateGold, -1, 'b', ItemID.plateIron, -1, 'c', 331, -1]);


//red block
Recipes.deleteRecipe({id: 23, count: 1, data: -1}) 
Recipes.addShaped({id: 23, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aca"
], ['a', BlockID.ds, -1, 'b', 261, -1, 'c', ItemID.chipset, -1]);

Recipes.deleteRecipe({id: 33, count: 1, data: -1}) 
Recipes.addShaped({id: 33, count: 1, data: 0}, [
	"ddd",
	"aba",
	"aca"
], ['a', BlockID.ds, -1, 'b', ItemID.plateIron, -1, 'c', ItemID.chipset, -1, 'd', 5, -1]);

Recipes.deleteRecipe({id: 125, count: 1, data: -1}) 
Recipes.addShaped({id: 125, count: 1, data: 0}, [
	"aaa",
	"a a",
	"aca"
], ['a', BlockID.ds, -1, 'c', ItemID.chipset, -1]);

Recipes.deleteRecipe({id: 251, count: 1, data: -1}) 
Recipes.addShaped({id: 251, count: 1, data: 0}, [
	"aaa",
	"bbc",
	"aaa"
], ['a', BlockID.ds, -1, 'b', 406, -1, 'c', ItemID.chipset, -1]);

Recipes.deleteRecipe({id: 410, count: 1, data: -1}) 
Recipes.addShaped({id: 410, count: 1, data: 0}, [
	"aca",
	"aba",
	" a "
], ['a', ItemID.plateIron, -1, 'b', 54, -1, 'c', ItemID.chipset, -1]);
//item

Recipes.deleteRecipe({id: 325, count: 1, data: 0}) 
Recipes.addShaped({id: 325, count: 1, data: 0}, [
	"bcb",
	"a a",
	"aaa"
], ['a', ItemID.plateIron, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);
//evil mobs
Callback.addCallback("EntityAdded", function (entity) {
var mob = [32, 33, 34, 35, 36, 40, 43, 44, 45, 46, 47, 48];
for(var i=0; i<13; i++)
if(Entity.getType(entity) == mob[i])
{
Entity.setMaxHealth(entity, 50);
Entity.setHealth(entity, 50)
}});

//piss mob
Callback.addCallback("EntityAdded", function (entity) {
var mob = [10, 11, 12, 13, 14, 16, 17];
for(var i=0; i<13; i++)
if(Entity.getType(entity) == mob[i])
{
Entity.setMaxHealth(entity, 20);
Entity.setHealth(entity, 20)
}});


Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
var mob = [32, 38, 34];
var eff = [9, 15, 2];
for(var i=0; i<6; i++)
if(Entity.getType(attacker) == mob[i] && Entity.getType(victim) == 63){
Entity.addEffect(Player.get(), eff[i], 1, 300)}else
if(Entity.getType(attacker) == 42 && Entity.getType(victim) == 63){
Entity.setFire(Player.get(), 200)}});


Callback.addCallback("EntityAdded", function (entity) {
var sword = [267, 268, 272, 276, 283, 258, 271, 275, 279, 286];
var helm = [298, 302, 306, 310, 314];
var chest = [299, 303, 307, 311, 315];
var legg = [300, 304, 308, 312, 316];
var boot = [301, 305, 309, 313, 317];
var mob = [32, 36, 44, 47, 48];
for(var i=0; i<6; i++)
if(Entity.getType(entity) == mob[i])
{
var rnd1 = Math.floor(Math.random()*(sword.length));
var rnd2 = Math.floor(Math.random()*(helm.length));
var rnd3 = Math.floor(Math.random()*(chest.length));
var rnd4 = Math.floor(Math.random()*(legg.length));
var rnd5 = Math.floor(Math.random()*(boot.length));
Entity.setCarriedItem(entity, sword[rnd1], 1, 0);
Entity.setArmorSlot(entity,0, helm[rnd2], 1);
Entity.setArmorSlot(entity,1, chest[rnd3], 1);
Entity.setArmorSlot(entity,2, legg[rnd4], 1);
Entity.setArmorSlot(entity,3, boot[rnd5], 1);
}});




Callback.addCallback("EntityAdded", function (entity) {
var helm = [298, 302, 306, 310, 314];
var chest = [299, 303, 307, 311, 315];
var legg = [300, 304, 308, 312, 316];
var boot = [301, 305, 309, 313, 317];
var mob = [34, 46];
for(var i=0; i<6; i++)
if(Entity.getType(entity) == mob[i])
{
var rnd2 = Math.floor(Math.random()*(helm.length));
var rnd3 = Math.floor(Math.random()*(chest.length));
var rnd4 = Math.floor(Math.random()*(legg.length));
var rnd5 = Math.floor(Math.random()*(boot.length));

Entity.setArmorSlot(entity,0, helm[rnd2], 1);
Entity.setArmorSlot(entity,1, chest[rnd3], 1);
Entity.setArmorSlot(entity,2, legg[rnd4], 1);
Entity.setArmorSlot(entity,3, boot[rnd5], 1);
}});

Callback.addCallback("tick", function(){
if(Player.getHunger() <= 8)
{
Entity.addEffect(Player.get(), 18, 1, 5, false) 
}
else
if(Player.getHunger() <= 6)
{
Entity.addEffect(Player.get(), 4, 1, 5, false) 
}
else
if(Player.getHunger() <= 4)
{
Entity.addEffect(Player.get(), 9, 1, 5, false) 
}});


IDRegistry.genItemID("hp");
Item.createItem("hp", "hp", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [" a ","aba"," a "], ['a', 351, 1, 'b', 322, 0]);
IDRegistry.genItemID("ghp");
Item.createItem("ghp", "gold hp", {name: "gold_hp", meta: 0});
Recipes.addShaped({id: ItemID.ghp, count: 1, data: 0}, [
" c ","aba"," a "], ['a', 266, 0, 'b', ItemID.hp, 0, 'c', 264, 0]);
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.ghp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+2)}}); 
Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 63){
Entity.setMaxHealth(Player.get(), 20)}});

Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
Recipes.addShaped({id: 351, count: 1, data: 2},[" a ","   ","   "],['a', 81, 0]);


Callback.addCallback("ItemUse", function (coords, item, block) {
var cropId = [59, 141, 142, 244];
var dropId = [296, 391, 392, 457];
var seedId = [295, 0, 0, 458];
var countId = [2, 3, 4, 2];
var counsId = [1, 0, 0, 1];
for(var i=0; i<6; i++)
if(block.id == cropId[i] && block.data == 7 ){
World.setBlock(coords.x, coords.y, coords.z, 0);
World.setBlock(coords.x, coords.y, coords.z, cropId[i], 0);
World.drop(coords.x, coords.y, coords.z, dropId[i], countId[i], 0);
World.drop(coords.x, coords.y, coords.z, seedId[i], counsId[i], 0);
Player.addExperience(1);
}}); 
IDRegistry.genItemID("CIron");
Item.createItem("CIron", "coal & iron", {name: "CIron", meta: 0}, {stack: 64});
IDRegistry.genItemID("sIngot");
Item.createItem("sIngot", "steel ingot", {name: "sIngot", meta: 0}, {stack: 64});
IDRegistry.genBlockID("sBlock"); Block.createBlock("sBlock", [ {name: "steel block", texture: [["sBlock", 0], ["sBlock", 0], ["sBlock", 0], ["sBlock", 0], ["sBlock", 0], ["sBlock", 0]], inCreative: true} ]);
Recipes.addShaped({id: BlockID.sBlock, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.sIngot, -1]);
Recipes.addShaped({id:ItemID.sIngot, count: 9, data: 0}, [
	"a",
	"",
	""
], ['a', BlockID.sBlock, -1]);


Recipes.addShaped({id: ItemID.CIron, count: 1, data: 0}, [
	"ba",
	"",
	""
], ['a', 265, -1, 'b', 263, 0]);


Recipes.addFurnace(ItemID.CIron, ItemID.sIngot, 0);

importLib("ENV", "*");

IDRegistry.genItemID("sSword");
Item.createItem("sSword", "steel Sword", {name: "sSword", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sSword, count: 1, data: 0}, [
	"  a",
	"ca ",
	"bc "
], ['a', BlockID.sBlock, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

IDRegistry.genItemID("sSpade");
Item.createItem("sSpade", "steel Shovel", {name: "sSpade", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sSpade, count: 1, data: 0}, [
	" ca",
	" bc",
	"b  "
], ['a', BlockID.sBlock, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

IDRegistry.genItemID("sPick");
Item.createItem("sPick", "steel Pickaxe", {name: "sPick", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sPick, count: 1, data: 0}, [
	"aac",
	" ba",
	"b a"
], ['a', BlockID.sBlock, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

IDRegistry.genItemID("sAxe");
Item.createItem("sAxe", "steel Axe", {name: "sAxe", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sAxe, count: 1, data: 0}, [
	"aac",
	"ab ",
	"b  "
], ['a', BlockID.sBlock, -1, 'b', ItemID.bigStick, -1, 'c', ItemID.rope, -1]);

ToolAPI.addToolMaterial("steel", {durability: 666666, level: 6, efficiency: 8, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.sSword, "steel", ToolType.sword);
ToolAPI.setTool(ItemID.sSpade, "steel", ToolType.shovel);
ToolAPI.setTool(ItemID.sPick, "steel", ToolType.pickaxe);
ToolAPI.setTool(ItemID.sAxe, "steel", ToolType.axe);


IDRegistry.genItemID("sHelmet");
Item.createArmorItem("sHelmet", "steel Helmet", {name: "sHelmet"}, {type: "helmet", armor: 5, durability: 666666, texture: "armor/sa_1.png"});
Recipes.addShaped({id: ItemID.sHelmet, count: 1, data: 0}, [
	" x ",
	"xax",
	" x "
], ['x', ItemID.sIngot, -1, 'a', 310, -1]);

IDRegistry.genItemID("sChest");
Item.createArmorItem("sChest", "steel Chestplate", {name: "sChest"}, {type: "chestplate", armor: 6, durability: 666666, texture: "armor/sa_1.png"});
Recipes.addShaped({id: ItemID.sChest, count: 1, data: 0}, [
	" x ",
	"xax",
	" x "
], ['x', ItemID.sIngot, -1, 'a', 311, -1]);

IDRegistry.genItemID("sPants");
Item.createArmorItem("sPants", "steel Leggings", {name: "sPants"}, {type: "leggings", armor: 5, durability: 666666, texture: "armor/sa_2.png"});
Recipes.addShaped({id: ItemID.sPants, count: 1, data: 0}, [
	" x ",
	"xax",
	" x "
], ['x', ItemID.sIngot, -1, 'a', 312, -1]);

IDRegistry.genItemID("sBoots");
Item.createArmorItem("sBoots", "steel Boots", {name: "sBoots"}, {type: "boots", armor: 5, durability: 666666, texture: "armor/sa_2.png"});
Recipes.addShaped({id: ItemID.sBoots, count: 1, data: 0}, [
	" x ",
	"xax",
	" x "
], ['x', ItemID.sIngot, -1, 'a', 313, -1]);



IDRegistry.genItemID("dsSword");
Item.createItem("dsSword", "ds Sword", {name: "dsSword", meta: 0}, {stack: 1});


IDRegistry.genItemID("dsShovel");
Item.createItem("dsShovel", "ds Shovel", {name: "dsSpade", meta: 0}, {stack: 1});


IDRegistry.genItemID("dsPickaxe");
Item.createItem("dsPickaxe", "ds Pickaxe", {name: "dsPick", meta: 0}, {stack: 1});


IDRegistry.genItemID("dsAxe");
Item.createItem("dsAxe", "ds Axe", {name: "dsAxe", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.dsSword, count: 1, data: 0}, [
	" xa",
	"",
	""
], ['x', ItemID.sSword, -1, "a", 264, -1]);
Recipes.addShaped({id: ItemID.dsShovel, count: 1, data: 0}, [
	" xa",
	"",
	""
], ['x', ItemID.sSpade, -1, "a", 264, -1]);
Recipes.addShaped({id: ItemID.dsPickaxe, count: 1, data: 0}, [
	" xa",
	"",
	""
], ['x', ItemID.sPick, -1, "a", 264, -1]);
Recipes.addShaped({id: ItemID.dsAxe, count: 1, data: 0}, [
	" xa",
	"",
	""
], ['x', ItemID.sAxe, -1, "a", 264, -1]);

ToolAPI.addToolMaterial("ds", {durability: 7776777, level: 7, efficiency: 9, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.dsSword, "ds", ToolType.sword);
ToolAPI.setTool(ItemID.dsShovel, "ds", ToolType.shovel);
ToolAPI.setTool(ItemID.dsPickaxe, "ds", ToolType.pickaxe);
ToolAPI.setTool(ItemID.dsAxe, "ds", ToolType.axe);


Callback.addCallback("tick", function(){

var pos = Player.getPosition();
var helmet = Player.getArmorSlot(0);
	var chest = Player.getArmorSlot(1);
	var leggins = Player.getArmorSlot(2);
	var boots = Player.getArmorSlot(3);

if(World.getBiome(pos.x, pos.z)  == 2 && boots.id == 0 ||World.getBlockID(pos.x, pos.y-2, pos.z) == 12 && boots.id == 0)
{
Entity.addEffect(Player.get(), 2, 2, 40, false, true) 

}});

Callback.addCallback("tick", function(){
	
	var helmet = Player.getArmorSlot(0);
	var chest = Player.getArmorSlot(1);
	var leggins = Player.getArmorSlot(2);
	var boots = Player.getArmorSlot(3);
	
if (helmet.id == 314 && chest.id == 315 && leggins.id == 316 && boots.id == 317) 
{

Entity.clearEffect(Player.get(), 20);
Entity.clearEffect(Player.get(), 19);
Entity.clearEffect(Player.get(), 2);
}
});
