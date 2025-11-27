/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: api.js

IDRegistry.genItemID("spawnerchunk");
Item.createItem("spawnerchunk", "spawner scrap", {name: "spawnerscrab", meta: 0},{stack: 64});



Recipes.addShaped({id: 52, count: 1, data: 0}, 
["cac",
"aba",
"cac"], 
["a", ItemID.spawnerchunk, -1, "b", 385, -1, "c", 266, -1]);



Block.registerDropFunctionForID("52", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		var drop = [[ItemID.spawnerchunk, 2, 0]];
		if(Math.random() < enchant.fortune/6) drop.push(drop[0]);
		ToolAPI.dropOreExp(coords, 12, 28, enchant.experience);
		return drop;
	}
	return [];
}, 4);



//__________drop spawn egg_________\\



IDRegistry.genItemID("pili_soul");
Item.createItem("pili_soul", "soulirim", {name: "pili_soul", meta: 0}); 
Recipes.addShaped({id:
ItemID.pili_soul, count: 1, data: 0}, 
["aba",
 "bcb",
 "aba"], 
 ['a', 266, -1, 'b', 388, -1, 'c', 152, -1]); 
 
Callback.addCallback("PlayerAttack",function(player,victim){

var mobId = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118];
for(var i=0; i<120; i++)
{
item=Player.getCarriedItem(true);


if(item.id==ItemID.pili_soul&&Entity.getType(victim)==mobId[i])
{
var coords = Entity.getPosition(victim);
Entity.damageEntity(victim, 1000);
Player.decreaseCarriedItem(1);
World.drop(coords.x, coords.y, coords.z, 383, 1, mobId[i]);}}});






