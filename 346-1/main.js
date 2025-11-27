/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 3
*/



// file: importlib.js

importLib("ToolType", "*");




// file: api.js

ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}






// file: NEW_TOOL.js

IDRegistry.genItemID("drill_frame");
Item.createItem("drill_frame", "drill frame", {name: "drill_frame", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.drill_frame, count: 1, data: 0}, 
[ "aba",
 "cdc",
  "aca" ], ['a', 1, 0, 'b', 33, -1,'c',101,-1,'d',61,-1]);
  
//_____________________________\\

IDRegistry.genItemID("drill_core");
Item.createItem("drill_core", "drill core", {name: "drill_core", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.drill_core, count: 1, data: 0}, 
[ "aba",
 "bcb",
  "fbf" ], ['a', ItemID.drill_frame, -1,'b',172,-1,'c',266,-1,'f',331,-1]);
//_____________________________\\
IDRegistry.genItemID("drill1");
Item.createItem("drill1", "drill \n mode 3*1", {name: "drill1", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.drill1, count: 1, data: 0}, 
[ "hcc",
 "abc",
 "aah" ], ['a', ItemID.drill_frame, -1,'b',ItemID.drill_core,-1,'c',265,-1,'h',371,-1]);


ToolAPI.addToolMaterial("drills", {durability: 1125, level: 5, efficiency: 7, damage: 7, enchantability: 15}); 

ToolAPI.setTool(ItemID.drill1, "drills", ToolType.pickaxe);  


Callback.addCallback("DestroyBlock", function(coords, block, player){
item=Player.getCarriedItem(true);
for(var yy = coords.y - 1; yy <= coords.y + 1; yy++)
if(!Entity.getSneaking(Player.get())&&item.id==ItemID.drill1&&
	World.getBlockID(coords.x, yy, coords.z) !== 7){
World.destroyBlock(coords.x, yy, coords.z, true);		
}});

//______________________________\\
IDRegistry.genItemID("drill_up");
Item.createItem("drill_up", "drill upgrade", {name: "drill_up", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.drill_up, count: 1, data: 0}, 
[ "aca",
 "cbc",
 "afa" ], ['a', ItemID.drill_frame, -1,'b',ItemID.drill_core,-1,'c',285,-1,'f',49,-1]);


IDRegistry.genItemID("drill2");
Item.createItem("drill2", "drill \n mode 3*3", {name: "drill1", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.drill2, count: 1, data: 0}, 
[ "aaa",
 "aba",
 "aca" ], ['a', ItemID.drill_frame, -1,'b',ItemID.drill1,-1,'c',ItemID.drill_up,-1]);

ToolAPI.addToolMaterial("drillss", {durability: 1825, level: 5, efficiency: 7, damage: 7, enchantability: 15}); 

ToolAPI.setTool(ItemID.drill2, "drillss", ToolType.pickaxe);  



Callback.addCallback("DestroyBlock", function(coords, block, player){

var side = coords.side;

var X = 1;
var Y = 1;
var Z = 1;

if(side==4 || side==5){
            X = 0;}
            if(side==1 || side==6){
            Y = 0;}
            if(side==2 || side==3){
            Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
                for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
                    for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
if(!Entity.getSneaking(Player.get())&&World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.drill2){
World.destroyBlock(xx, yy, zz, true);}}}};});


//______________________________\\

IDRegistry.genItemID("stone_fil");
Item.createItem("stone_fil", "stone filter upgrade", {name: "stone_fil", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.stone_fil, count: 1, data: 0}, 
[ "aca",
 "cbc",
 "aca" ], ['a', ItemID.drill_frame, -1,'b',1,0,'c',339,-1]);
//_____________________________\\
IDRegistry.genItemID("drill3");
Item.createItem("drill3", "drill \n mode 3*1 \n stone filter:off", {name: "drill1", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.drill3, "drillss", ToolType.pickaxe);  

Item.setGlint(ItemID.drill3, true);

Callback.addCallback("DestroyBlock", function(coords, block, player){

var side = coords.side;

var X = 1;
var Y = 1;
var Z = 1;

if(side==4 || side==5){
            X = 0;}
            if(side==1 || side==6){
            Y = 0;}
            if(side==2 || side==3){
            Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
                for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
                    for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
if(!Entity.getSneaking(Player.get())&&World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.drill3){
World.destroyBlock(xx, yy, zz, true);}}}};});



//_____________________________\\

IDRegistry.genItemID("drill4");
Item.createItem("drill4", "drill \n mode 3*3 \n stone filter:on", {name: "drill1", meta: 0}, {stack: 1});
Item.setGlint(ItemID.drill4, true);

Recipes.addShaped({id: ItemID.drill4, count: 1, data: 0}, 
[ "ab",
 "",
 "" ], ['a', ItemID.drill2, -1,'b',ItemID.stone_fil,-1]);
 
Callback.addCallback("DestroyBlock", function(coords, block, player){

var side = coords.side;

var X = 1;
var Y = 1;
var Z = 1;

if(side==4 || side==5){
            X = 0;}
            if(side==1 || side==6){
            Y = 0;}
            if(side==2 || side==3){
            Z = 0;}
for(var xx = coords.x - X; xx <= coords.x + X; xx++){
                for(var yy = coords.y - Y; yy <= coords.y + Y; yy++){
                    for(var zz = coords.z - Z; zz <= coords.z + Z; zz++){
item=Player.getCarriedItem(true);
if(!Entity.getSneaking(Player.get())&&World.getBlockID(xx, yy, zz) !== 7&&item.id==ItemID.drill4){
World.destroyBlock(xx, yy, zz, true);}}}};});

ToolAPI.setTool(ItemID.drill4, "drillss", ToolType.pickaxe);  

Block.registerDropFunctionForID("1", function(coords, id, data, diggingLevel, toolLevel){   
item=Player.getCarriedItem(true);
if(item.id==ItemID.drill4){
   return [[0, 0, 0]];
}});
//______________________________\\

Callback.addCallback("ItemUse", function (coords, item, block) {
var it = [ItemID.drill4,ItemID.drill3]; 
var ti = [ItemID.drill3,ItemID.drill4];
for(var i=0;i<5;i++)
if(item.id==it[i]&&Entity.getSneaking(Player.get())){
Player.setCarriedItem(ti[i], 1, item.data, item.enchant);
}});
//______________________________\\
IDRegistry.genItemID("bedbre");
Item.createItem("bedbre", "destroy bedrock", {name: "bedbre", meta: 0}, {stack: 1});
Item.setGlint(ItemID.bedbre, true);

Recipes.addShaped({id: ItemID.bedbre, count: 1, data: 0}, 
[ "aaa",
 "cbc",
 "fhf" ], ['a', 388, -1,'b',172,-1,'c',289,-1,'f',145,-1,'h',ItemID.drill_core,-1]);
 
Callback.addCallback("DestroyBlock", function(coords, block, player){
item=Player.getCarriedItem(true);
if(item.id==ItemID.bedbre&&block.id==7){
	World.destroyBlock(coords.x, coords.y, coords.z, true);
	}});
	
	Callback.addCallback("tick", function () { 
	item=Player.getCarriedItem(true);
	if(item.id==ItemID.bedbre){
		Block.setDestroyTime(7, 0.1); 
	}
	else
	if(item.id!==ItemID.bedbre){
		Block.setDestroyTime(7, 99999*99999);
	}});
	
//_____________________________\\
IDRegistry.genItemID("nezHoe");
Item.createItem("nezHoe", "hoe \n 3*3", {name: "nezHoe", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.nezHoe, count: 1, data: 0}, 
[ "aba",
 "cbc",
 " b " ], ['a', 388, -1,'b',294,-1,'c',289,-1]);


Callback.addCallback("ItemUse", function (coords, item, block) { 
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
if(item.id==ItemID.nezHoe&&getBlock==2||item.id==ItemID.nezHoe&&getBlock==3){
	for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=1; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 2||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 3) {
World.setBlock(coords.x+xx, coords.y+yy, coords.z+zz, 60);

}}}}}});
//_____________________________\\
IDRegistry.genItemID("nezShovel");
Item.createItem("nezShovel", "shovel \n 5*5", {name: "nezShovel", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.nezHoe, count: 1, data: 0}, 
[ "aba",
 "cbc",
 " b " ], ['a', 388, -1,'b',284,-1,'c',289,-1]);
 
Callback.addCallback("DestroyBlock", function(coords, block, player){
	var block = [12,13,80,82,88,2,3,293];
	var drop = [12,13,332,337,88,3,3,3];
	var count = [1,1,4,4,1,1,1,1];
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
item=Player.getCarriedItem(true);
for(var i=0; i<20; i++)
if(item.id==ItemID.nezShovel&&getBlock==block[i]){
for(var xx = -5; xx <=5; xx++){
for(var yy = -5; yy <=5; yy++){
for(var zz = -5; zz <=5; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == block[i]) {
	
World.setBlock(coords.x+xx, coords.y+yy, coords.z+zz,0);

World.drop(coords.x, coords.y, coords.z, drop[i], count[i], 0);


;}}}};}}); 
//_____________________________\\
IDRegistry.genItemID("jackhammer");
Item.createItem("jackhammer", "jackhammer", {name: "jackhammer", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.jackhammer, count: 1, data: 0}, [
		"bcb",
		"axa",
		" x "
	], ['x', 265, -1, 'b', 280, -1, 'a', 331, -1,'c',145,-1]);

Callback.addCallback("DestroyBlockStart", function (coords, block, player) { 
item=Player.getCarriedItem(true);
if(item.id==ItemID.jackhammer&&block.id==49)
{
World.destroyBlock(coords.x, coords.y, coords.z, true);

}});
//_____________________________\\
IDRegistry.genItemID("antidote");
Item.createItem("antidote", "antidote", {name: "antidote", meta: 0},{stack: 1}, {damage: 30});

Recipes.addShaped({id: ItemID.antidote, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 376, -1, "b", 266, -1, "c", 325, 1]);


Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
				if(slot.id==ItemID.antidote){
Entity.clearEffect(Player.get(),19);
}}});
//_______wither___________\\
IDRegistry.genItemID("wither");
Item.createItem("wither", "anti wither", {name: "anti_wither", meta: 0},{stack: 1}, {damage: 30});

Recipes.addShaped({id: ItemID.wither, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 49, -1, "b", 263, -1, "c", 325, 1]);


Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
				if(slot.id==ItemID.wither){
Entity.clearEffect(Player.get(),20);
}}});
//___________golod_______\\

IDRegistry.genItemID("golod");
Item.createItem("golod", "anti hunger", {name: "anti_hunger", meta: 0},{stack: 1}, {damage: 30});

Recipes.addShaped({id: ItemID.golod, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 367, -1, "b", 266, -1, "c", 325, 1]);



Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
				if(slot.id==ItemID.golod){
Entity.clearEffect(Player.get(),17);
}}});
//________food___________\\
IDRegistry.genItemID("food");
Item.createItem("food", "endless food", {name: "endless_food", meta: 0},{stack: 1}, {damage: 30});

Recipes.addShaped({id: ItemID.food, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 320, -1, "b", 400, -1, "c", 354, 0]);


Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
				if(slot.id==ItemID.food){
Entity.addEffect(Player.get(), 23, 2, 2*20, false, false);
}}});
//____________clearinv______\\

IDRegistry.genItemID("clearinv");
Item.createItem("clearinv", "clean inventory", {name: "clean_inventory", meta: 0},{stack: 1}, {damage: 30});

Recipes.addShaped({id: ItemID.clearinv, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 4, -1, "b", 1, -1, "c", 339, -1]);



Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
				if(slot.id==ItemID.clearinv){
for(var i = 0; i < 40; i++){
				var sloot = Player.getInventorySlot(i);
				if(sloot.id==4){
					Player.setInventorySlot(i,0)
}}}}});
//______padenie_______\\

IDRegistry.genItemID("feather");
Item.createItem("feather", "gold feather", {name: "goldfeather", meta: 0},{stack: 1}, {damage: 30});
Recipes.addShaped({id: ItemID.feather, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 41, -1, "b", 266, -1, "c", 288, -1]);

var rrr = 0;
Callback.addCallback("tick", function () { 
var coords = Entity.getPosition(Player.get());
var vertical = Entity.getVelocity(Player.get()).y;
var pl = Player.get();
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);

if(vertical<-0.5&&World.getBlockID(coords.x, coords.y-5, coords.z) !== 0&&rrr==0&&slot.id==ItemID.feather){
	rrr=1;
	
var sss =	Entity.spawn(coords.x, coords.y-1, coords.z, 10);
	Entity.rideAnimal(pl, sss);
	}
	if(rrr==1){
		Entity.remove(sss);
		Entity.setVelocity(pl, 0, 0.1, 0);   
		rrr=0
	}}});
//________fire________\\
IDRegistry.genItemID("fire");
Item.createItem("fire", "fire attack", {name: "fire_attack", meta: 0},{stack: 1}, {damage: 30});

Recipes.addShaped({id: ItemID.fire, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 259, -1, "b", 259, -1, "c", 1, -1]);


Callback.addCallback("PlayerAttack", function (player, victim) { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.fire&&Entity.getType(victim)!==0){
Entity.setFire(victim, 9999);
}}});
//________poison_________\\
IDRegistry.genItemID("poison");
Item.createItem("poison", "poison attack", {name: "poison_attack", meta: 0},{stack: 1}, {damage: 30});
Recipes.addShaped({id: ItemID.poison, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 375, -1, "b", 375, -1, "c", 1, -1]);



Callback.addCallback("PlayerAttack", function (player, victim) { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.poison&&Entity.getType(victim)!==0){
Entity.addEffect(victim, 19, 2, 20*20, false, false);
}}});

//_______wwither_____\\
IDRegistry.genItemID("wwither");
Item.createItem("wwither", "attack wither", {name: "attack_wither", meta: 0},{stack: 1}, {damage: 30});
Recipes.addShaped({id: ItemID.wwither, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 397, 1, "b", 397, 1, "c", 1, -1]);


Callback.addCallback("PlayerAttack", function (player, victim) { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.wwither&&Entity.getType(victim)!==0){
Entity.addEffect(victim, 20, 2, 20*20, false, false);
}}});

//_______vel___________\\
IDRegistry.genItemID("vel");
Item.createItem("vel", "enemy acceleration", {name: "enemy_acceleration", meta: 0},{stack: 1}, {damage: 30});

Recipes.addShaped({id: ItemID.vel, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 35, -1, "b", 353, -1, "c", 1, -1]);


Callback.addCallback("PlayerAttack", function (player, victim) { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.vel&&Entity.getType(victim)!==0){
	let vec = Entity.getLookVector(Player.get());
Entity.setVelocity(victim, 5*vec.x, 5*vec.y, 5*vec.z);   
}}});
//__________deffence_____\\
IDRegistry.genItemID("deffence");
Item.createItem("deffence", "protection toy 35%", {name: "protection_toy", meta: 0},{stack: 1}, {damage: 30});
Recipes.addShaped({id: ItemID.deffence, count: 1, data: 0}, 
["bbb",
"aca",
"bbb"], ["a", 331, -1, "b", 49, -1, "c", 1, -1]);


Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
var rnd = Math.floor((Math.random()*100)+1)
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
if(slot.id==ItemID.deffence&&Entity.getType(attacker)!==63&&Entity.getType(victim)==63&&rnd<=35){
Game.prevent();
}}});

//_____water walker______\\
IDRegistry.genBlockID("vktradepe");
Block.createBlock("vktradepe", [
	{name: "lol", texture: [["ice", 0]], inCreative: true}]);

Block.setDestroyTime(BlockID.vktradepe, 9999*99999);

Block.setRandomTickCallback(BlockID.vktradepe, function(x, y, z, id, data){
	if(data==0 && Math.random() < 100){
		World.setBlock(x, y, z, 8, 0);
	}});
	
	IDRegistry.genItemID("water_h");
Item.createItem("water_h", "walking on water", {name: "walking_on_water", meta: 0},{stack: 1}, {damage: 30});
	Recipes.addShaped({id: ItemID.water_h, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 325, 8, "b", 22, -1, "c", 1, -1]);
	
	
	
Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
var coords = Entity.getPosition(Player.get());
if(slot.id==ItemID.water_h){
	for(var xx = -1; xx <=1; xx++){
for(var yy = -2; yy <=2; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 8||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 9){
	
	World.setBlock(coords.x+xx, coords.y+yy, coords.z+zz, BlockID.vktradepe, 0);
	
}}}}}}});

//_____lawa walker_____\\

IDRegistry.genBlockID("lavaOb");
Block.createBlock("lavaOb", [
	{name: "ещё один костыль", texture: [["obsidian", 0]], inCreative: true}]);

Block.setDestroyTime(BlockID.lavaOb, 9999*99999);

Block.setRandomTickCallback(BlockID.lavaOb, function(x, y, z, id, data){
	if(data==0 && Math.random() < 100){
		World.setBlock(x, y, z, 10, 0);
	}});
	

IDRegistry.genItemID("lava_h");
Item.createItem("lava_h", "walking on lava", {name: "walking_on_lawa", meta: 0},{stack: 1}, {damage: 30});
	
	Recipes.addShaped({id: ItemID.lava_h, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 325, 10, "b", 49, -1, "c", 1, -1]);
	
Callback.addCallback("tick", function () { 
for(var s=0;s<40;s++){
var slot = Player.getInventorySlot(s);
var coords = Entity.getPosition(Player.get());
if(slot.id==ItemID.lava_h){
	for(var xx = -1; xx <=1; xx++){
for(var yy = -2; yy <=2; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 10||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 11){
	
	World.setBlock(coords.x+xx, coords.y+yy, coords.z+zz, BlockID.lavaOb, 0);
	
}}}}}}});
//______endportal______\\

//портал в энд

IDRegistry.genItemID("endPortal");
Item.createItem("endPortal", "Ender Portal", {name: "endPortal", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.endPortal, count: 1, data: 0}, [
		"bab",
		"axa",
		"bab"
	], ['x', 264, 0, 'a', 381, 0, 'b', 49, 0]);



Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.endPortal&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 119, 0); 
World.setBlock(coords.x+1, coords.y+1, coords.z, 7, 0); 
World.setBlock(coords.x-1, coords.y+1, coords.z, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z+1, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z-1, 7, 0);
Entity.spawn(coords.x+1, coords.y+3, coords.z, 93); 
}}); 

//________hp__________\\


IDRegistry.genItemID("hp");
Item.createItem("hp", "гы :3", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [
		"a a",
		"aba",
		" a "], ['a', 152, -1, 'b', 322, -1]);

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+1)}}); 
//compas

IDRegistry.genItemID("Ncompass");
Item.createItem("Ncompass", "golden compass", {name: "Ncompass", meta: 0});


Recipes.addShaped({id: ItemID.Ncompass, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', 266, -1, 'b', 345, -1]);
		
		Callback.addCallback("ItemUse", function (coords, item, block) {
	var pos = Player.getPosition();	
		if(item.id==ItemID.Ncompass){
			Game.tipMessage("X: "+Math.round(pos.x)+" Y: "+Math.round(pos.y)+" Z: "+Math.round(pos.z));
}});

//______torch______\\
IDRegistry.genItemID("infacel");
Item.createItem("infacel", "infinity torch", {name: "besfakel", meta: 0});
Recipes.addShaped({id: ItemID.infacel, count: 1, data: 0}, 
["aba",
"bcb",
"aba"], ["a", 89, -1, "b", 266, -1, "c", 50, -1]);


Callback.addCallback("ItemUse", function (coords, item, block) {
	if(item.id==ItemID.infacel){
		var side = coords.side;
    	coords = coords.relative;
    	block = World.getBlockID(coords.x, coords.y, coords.z);
    	if(block==0){
	   
					World.setBlock(coords.x, coords.y, coords.z, 50, (6 - side)%6);
}}});

//_____wand_______\\


//_____________________\\
//посохи
IDRegistry.genItemID("endStaff");
Item.createItem("endStaff", "sraff of ender", {name: "tpWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.endStaff, 234);

IDRegistry.genItemID("tntStuff");
Item.createItem("tntStuff", "staff of tnt", {name: "tntWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.tntStuff, 234);

IDRegistry.genItemID("regStuff");
Item.createItem("regStuff", "sraff of regeneration", {name: "regenWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.regStuff, 234);

IDRegistry.genItemID("shuStuff");
Item.createItem("shuStuff", "staff of shulker", {name: "shulkerWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.shuStuff, 234);

IDRegistry.genItemID("arrStuff");
Item.createItem("arrStuff", "staff of arrow",{name: "arrowWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.arrStuff, 234);

IDRegistry.genItemID("fiStuff");
Item.createItem("fiStuff", "staff of fire", {name: "fireWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.fiStuff, 234);

IDRegistry.genItemID("wiStuff");
Item.createItem("wiStuff", "staff of wither", {name: "witherWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.wiStuff, 234);

IDRegistry.genItemID("airWand");
Item.createItem("airWand", "staff of air", {name: "airWand", meta:0}, {stack: 1}, {damage: 234});
Item.setMaxDamage(ItemID.airWand, 234);
//крафт посохов
IDRegistry.genItemID("goldStickL");
Item.createItem("goldStickL", "gold stick", {name: "blaze_rod", meta:0}, {stack: 64});

Recipes.addShaped({id: ItemID.goldStickL, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba "
], ['a', 348, -1, 'b', 266, -1,'c',280,-1]);

//

Recipes.addShaped({id: ItemID.endStaff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 368, -1]);

Recipes.addShaped({id: ItemID.tntStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 46, -1]);

Recipes.addShaped({id: ItemID.regStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 322, -1]);

Recipes.addShaped({id: ItemID.arrStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 262, -1]);

Recipes.addShaped({id: ItemID.shuStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 445, -1]);

Recipes.addShaped({id: ItemID.fiStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 259, -1]);

Recipes.addShaped({id: ItemID.wiStuff, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 288, -1]);

Recipes.addShaped({id: ItemID.airWand, count: 1, data: 0}, [
	" ba",
	" ab",
	"a  "
], ['a', ItemID.goldStickL, -1, 'b', 49, -1]);
//функции 



Item.registerNoTargetUseFunction("endStaff", function(item){
  if(item.id == ItemID.endStaff){
    let pos = Player.getPosition();
    let vec = Entity.getLookVector(Player.get());
    let crd = {};
    for(let t = 0; t <= 64; t++){
      crd.x = pos.x + vec.x * t;
      crd.y = pos.y + vec.y * t;
      crd.z = pos.z + vec.z * t;
        if(!GenerationUtils.isTransparentBlock(World.getBlockID(crd.x, crd.y, crd.z))){
          Game.tipMessage("X: "+Math.round(crd.x)+" Y: "+Math.round(crd.y+2)+" Z: "+Math.round(crd.z));
          Entity.setPosition(Player.get(), crd.x, crd.y+2, crd.z);
ToolAPI.breakCarriedTool(1);          
        break;
      }
    }
  }
});


Item.registerNoTargetUseFunction("tntStuff", function(item){
  if(item.id == ItemID.tntStuff){
    let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x+0.5, pos.y+1, pos.z+0.5, 65); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);   
ToolAPI.breakCarriedTool(1);       
}}}); 


Item.registerNoTargetUseFunction("regStuff", function(item){
  if(item.id == ItemID.regStuff){
  Entity.addEffect(Player.get(), 10, 2, 234, false);
  ToolAPI.breakCarriedTool(1);
  }});
 
 
 Item.registerNoTargetUseFunction("arrStuff", function(item){
if(item.id == ItemID.arrStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x+0.5, pos.y+1, pos.z+0.5, 80); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);    
ToolAPI.breakCarriedTool(1);     
}}}); 


 Item.registerNoTargetUseFunction("shuStuff", function(item){
if(item.id == ItemID.shuStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x, pos.y+1, pos.z, 76); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);
ToolAPI.breakCarriedTool(1);          
}}}); 


 Item.registerNoTargetUseFunction("fiStuff", function(item){
if(item.id == ItemID.fiStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x, pos.y+1, pos.z, 85); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);
ToolAPI.breakCarriedTool(1);          
}}}); 


 Item.registerNoTargetUseFunction("wiStuff", function(item){
if(item.id == ItemID.wiStuff){
let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
var mob = Entity.spawn(pos.x, pos.y+1, pos.z, 89); 
{
Entity.setVelocity(mob, 3*vec.x, 3*vec.y, 3*vec.z);   
ToolAPI.breakCarriedTool(1);       
}}}); 


Item.registerNoTargetUseFunction("airWand", function(item){
  if(item.id == ItemID.airWand){
    let pos = Player.getPosition();
let vec = Entity.getLookVector(Player.get());
{
Entity.setVelocity(Player.get(), 5*vec.x, 5*vec.y, 5*vec.z);   
ToolAPI.breakCarriedTool(1);       
}}}); 

	//___________\\
	
	//___________________________________\\

IDRegistry.genItemID("AirSword");
Item.createItem("AirSword", "air sword", {name: "air_sword", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.AirSword, 800);
Recipes.addShaped({id: ItemID.AirSword, count: 1, data: 0}, [
	"bbb",
	"bab",
	"bbb"
], ['a', ItemID.vel, -1, 'b', 283, -1]);
Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.AirSword&&Entity.getType(victim)!==0){
	
Entity.damageEntity(victim, 8);
let vec = Entity.getLookVector(Player.get());
Entity.setVelocity(victim, 5*vec.x, 5*vec.y, 5*vec.z);   

ToolAPI.breakCarriedTool(1);
}});
//___________________________________\\

IDRegistry.genItemID("EarthSword");
Item.createItem("EarthSword", "wither sword", {name: "wither_sword", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.EarthSword, 800);
Recipes.addShaped({id: ItemID.EarthSword, count: 1, data: 0}, [
	"bbb",
	"bab",
	"bbb"
], ['a', ItemID.wwither, -1, 'b', 283, -1]);
Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.EarthSword&&Entity.getType(victim)!==0){
Entity.damageEntity(victim, 8);
Entity.addEffect(victim, 20, 2, 100*20, false, false);
ToolAPI.breakCarriedTool(1);
}});


//___________________________________\\

IDRegistry.genItemID("FireSword");
Item.createItem("FireSword", "fire sword", {name: "fire_sword", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.FireSword, 800);
Recipes.addShaped({id: ItemID.FireSword, count: 1, data: 0}, [
	"bbb",
	"bab",
	"bbb"
], ['a', ItemID.fire, -1, 'b', 283, -1]);
Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.FireSword&&Entity.getType(victim)!==0){
Entity.damageEntity(victim, 8);
Entity.setFire(victim, 200);
ToolAPI.breakCarriedTool(1);
}});

//___________________________________\\

IDRegistry.genItemID("WaterSword");
Item.createItem("WaterSword", "poison sword", {name: "poison_sword", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.WaterSword, 800);
Recipes.addShaped({id: ItemID.WaterSword, count: 1, data: 0}, [
	"bbb",
	"bab",
	"bbb"
], ['a', ItemID.poison, -1, 'b', 283, -1]);
Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.WaterSword&&Entity.getType(victim)!==0){
Entity.damageEntity(victim, 8);
Entity.addEffect(victim, 19, 20, 100*20, false, false);
ToolAPI.breakCarriedTool(1);
}});
//___________________________________\\



//_____________________________\\
IDRegistry.genItemID("DaySword");
Item.createItem("DaySword", "super sword", {name: "vampire_sword", meta: 0}, {stack: 1});
Item.setMaxDamage(ItemID.DaySword, 800);
Recipes.addShaped({id:ItemID.DaySword, count: 1, data: 0}, [
	" a ",
	"fbg",
	" c "
], ['a', ItemID.AirSword, -1,'f',ItemID.EarthSword,-1,'b',41,-1,'g',ItemID.FireSword,-1,'c',ItemID.WaterSword,-1]);
Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.DaySword&&Entity.getType(victim)!==0){
	
Entity.damageEntity(victim, 16);
Entity.addEffect(victim, 19, 20, 100*20, false, false);
Entity.setFire(victim, 200);
Entity.addEffect(victim, 20, 2, 100*20, false, false);
let vec = Entity.getLookVector(Player.get());
Entity.setVelocity(victim, 5*vec.x, 5*vec.y, 5*vec.z);   


ToolAPI.breakCarriedTool(1);
}});


Callback.addCallback("EntityDeath", function(entity){
	
	
	var pos = Player.getPosition();	
		if(Entity.getType(entity) == 63){
			var pos = Entity.getPosition(entity); 		Game.message("X: "+Math.round(pos.x)+" Y: "+Math.round(pos.y)+" Z: "+Math.round(pos.z));
}});





