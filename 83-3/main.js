

IDRegistry.genItemID("redingot");
Item.createItem("redingot", "redingot", {name: "redingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.redingot, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['a', 331, -1, 'b', 265, -1]);

importLib("ToolType", "*");



IDRegistry.genItemID("redSword");
IDRegistry.genItemID("redShovel");
IDRegistry.genItemID("redPickaxe");
IDRegistry.genItemID("redAxe");
IDRegistry.genItemID("redHoe");
Item.createItem("redSword", "red Sword", {name: "redsword", meta: 0}, {stack: 1});
Item.createItem("redShovel", "red Shovel", {name: "redshovel", meta: 0}, {stack: 1});
Item.createItem("redPickaxe", "red Pickaxe", {name: "redpickaxe", meta: 0}, {stack: 1});
Item.createItem("redAxe", "red Axe", {name: "redaxe", meta: 0}, {stack: 1});
Item.createItem("redHoe", "red Hoe", {name: "redhoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("red", {durability: 3000, level: 4, efficiency: 6, damage:7, enchantability: 14});
ToolAPI.setTool(ItemID.redSword, "red", ToolType.sword);
ToolAPI.setTool(ItemID.redShovel, "red", ToolType.shovel);
ToolAPI.setTool(ItemID.redPickaxe, "red", ToolType.pickaxe);
ToolAPI.setTool(ItemID.redAxe, "red", ToolType.axe);
ToolAPI.setTool(ItemID.redHoe, "red", ToolType.hoe);


Recipes.addShaped({id: ItemID.redSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.redingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.redShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.redingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.redPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.redingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.redAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.redingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.redHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.redingot, 0, 'b', 280, 0]);



IDRegistry.genItemID("redHelmet");
IDRegistry.genItemID("redChestplate");
IDRegistry.genItemID("redLeggings");
IDRegistry.genItemID("redBoots");

Item.createArmorItem("redHelmet", "red Helmet", {name: "redHelmet"}, {type: "helmet", armor: 5, durability: 2000, texture: "armor/red_1.png"});
Item.createArmorItem("redChestplate", "red Chestplate", {name: "redChestplate"}, {type: "chestplate", armor: 5, durability: 2000, texture: "armor/red_1.png"});
Item.createArmorItem("redLeggings", "red Leggings", {name: "redLeggings"}, {type: "leggings", armor: 5, durability: 2000, texture: "armor/red_2.png"});
Item.createArmorItem("redBoots", "red Boots", {name: "redBoots"}, {type: "boots", armor: 5, durability: 2000, texture: "armor/red_2.png"});

Recipes.addShaped({id: ItemID.redHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.redingot, 0]);

Recipes.addShaped({id: ItemID.redChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.redingot, 0]);

Recipes.addShaped({id: ItemID.redLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.redingot, 0]);

Recipes.addShaped({id: ItemID.redBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.redingot, 0]);

IDRegistry.genItemID("redfuel");
Item.createItem("redfuel", "redstoune fuel", {name: "redfuel", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.redfuel, count: 1, data: 0}, [
	"cac",
	"aba",
	"cac"
], ['a', 263, -1, 'b', ItemID.redingot, -1, 'c', 371, -1]);

Recipes.addFurnaceFuel(ItemID.redfuel, -1, 58000);

IDRegistry.genItemID("filter");
Item.createItem("filter", "фильтер камня", {name: "stone_filter", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.filter, count: 1, data: 0}, [
		"",
		"a",
		"b"], ['a', 4, 0, 'b', 339, 0]);

IDRegistry.genItemID("sredPickaxe");
Item.createItem("sredPickaxe", "S red Pickaxe", {name: "sredpickaxe", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.sredPickaxe, "red", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.sredPickaxe, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', ItemID.filter, -1, 'b', ItemID.redPickaxe, -1]);
		
		
		
	Block.registerDropFunctionForID(1, function(coords, id, data, diggingLevel, level, enchant){ 
	item=Player.getCarriedItem(true);
if(	item.id==ItemID.sredPickaxe){
World.setBlock(coords.x, coords.y, coords.z, 0, 0);
}
else
if(level > 0&&item.id!==ItemID.sredPickaxe){
if(enchant.silk){
			return [[1, 1, data]];}}
else
if(item.id!==ItemID.sredPickaxe&&
data==0){
return [[4, 1, 0]];
}
else
if(item.id!==ItemID.sredPickaxe&&
data!==0){
return [[id, 1, data]];
}
});
		
		
		
var Avoids = {
	addItem: function(id, material, i1, i2, i3, i4){
IDRegistry.genItemID(id + "Avoid");
Item.createItem(id + "Avoid", id + " Avoid", {name: id + "Avoid", meta: 0}, {stack: 1});
Item.setToolRender(ItemID[id + "Avoid"], true);
ToolAPI.registerTool(ItemID[id + "Avoid"], material, ["stone", "dirt", "wood"], {damage: 5});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "Avoid"], count: 1, data: 0}, [
	"ab",
	"cd"
], ['a', i1, -1, 'b', i2, -1, 'c', i3,-1,'d', i4,-1]);});
	}
}

ToolAPI.addToolMaterial("red", {
      durability: 4000, 
      level: 5, 
      efficiency: 8, 
      damage: 7, 
      enchantability: 15
});


Avoids.addItem("Red", "red", ItemID.redSword, ItemID.redShovel, ItemID.redPickaxe, ItemID.redAxe);


IDRegistry.genItemID("redPlata");
Item.createItem("redPlata", "redPlata", {name: "redPlata", meta: 0}, {stack: 16});
Recipes.addShaped({id: ItemID.redPlata, count: 1, data: 0}, [
		"dad",
		"cbc",
		"fdf"], ['a', 404, -1, 'b', 356, -1, 'c', 76, -1, 'd', ItemID.redfuel,-1, 'f', 406, -1]);
		
IDRegistry.genBlockID("redblock");
Block.createBlockWithRotation("redblock", [
{name: "redblock", texture: [["redblock", 0], ["redblock", 0], ["redblock", 0],["redblock", 0], ["redblock", 0], ["redblock", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.redblock, "stone");
Recipes.addShaped({id: BlockID.redblock, count: 1, data: 0}, ["aaa","aaa","aaa"], ['a', ItemID.redfuel, -1]);

Recipes.addShaped({id: ItemID.redfuel, count: 9, data: 0}, [
		"",
		"a",
		""], ['a', BlockID.redblock, -1]);
		
		
IDRegistry.genBlockID("lavagen");
Block.createBlockWithRotation("lavagen", [
{name: "lavagen", texture: [["lavagen", 0], ["lavagen", 0], ["lavagen", 0],["lavagen", 0], ["lavagen", 0], ["lavagen", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.lavagen, "stone");
Recipes.addShaped({id: BlockID.lavagen, count: 1, data: 0}, 
["cac",
"bab",
"fcf"], ['a', ItemID.redfuel, -1, 'b', ItemID.redPlata, -1, 'c', BlockID.redblock, -1, 'f', 41, -1]);

		
		
TileEntity.registerPrototype(BlockID.lavagen,{
	defaultValues:{
	progress: 0
	},
tick:function(){
if(this.data.progress<410){           
if(this.data.progress++ >= 400){	
				this.data.progress = 0;
World.setBlock(this.x, this.y+1, this.z, 10);
}}}});


Recipes.addShaped({id: BlockID.lavagen, count: 1, data: 0}, 
["cac",
"bab",
"fcf"], ['a', ItemID.redfuel, -1, 'b', ItemID.redPlata, -1, 'c', BlockID.redblock, -1, 'f', 41, -1]);

IDRegistry.genItemID("hp");
Item.createItem("hp", "hp", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', BlockID.redblock, -1, 'b', 322, -1]);

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+2)}}); 

IDRegistry.genItemID("piliBall");
Item.createItem("piliBall", "piliBall", {name: "piliBall", meta: 0}, {stack: 1}, {damage: 10});
Item.setMaxDamage(ItemID.piliBall, 10);

Recipes.addShaped({id: ItemID.piliBall, count: 1, data: 0}, 
["aba",
 "bcb",
 "aba"], 
 ['a', 42, -1, 'b', BlockID.redblock, -1, 'c', 344, -1]);



Callback.addCallback("PlayerAttack",function(player,victim){

var mobId = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 57, 104, 105];
for(var i=0; i<106; i++)
{
    item=Player.getCarriedItem(true);
    if(item.id==ItemID.piliBall&&Entity.getType(victim)==mobId[i])
{
var coords = Entity.getPosition(victim);
Entity.damageEntity(victim, 999);

World.drop(coords.x, coords.y, coords.z, 383, 1, mobId[i]);
ToolAPI.breakCarriedTool(1);

}}});



ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}



Recipes.addShaped({id: 52, count: 1, data: 0}, 
["aba",
 "bcb",
 "aba"], 
 ['a', 42, -1, 'b', 101, -1, 'c', ItemID.redPlata, -1]);




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
	"bbb",
	"bab",
	"bbb"
], ['a', 265, -1, 'b', 263, 0]);


Recipes.addFurnace(ItemID.CIron, ItemID.sIngot, 0);



IDRegistry.genItemID("sSword");
Item.createItem("sSword", "steel Sword", {name: "sSword", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sSword, count: 1, data: 0}, [
	"  a",
	"ca ",
	"bc "
], ['a', ItemID.sIngot, -1, 'b', 280, -1, 'c', 263, -1]);

IDRegistry.genItemID("sSpade");
Item.createItem("sSpade", "steel Shovel", {name: "sSpade", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sSpade, count: 1, data: 0}, [
	" ca",
	" bc",
	"b  "
], ['a', ItemID.sIngot, -1, 'b', 280, -1, 'c', 263, -1]);

IDRegistry.genItemID("sPick");
Item.createItem("sPick", "steel Pickaxe", {name: "sPick", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sPick, count: 1, data: 0}, [
	"aac",
	" ba",
	"b a"
], ['a', ItemID.sIngot, -1, 'b', 280, -1, 'c', 263, -1]);

IDRegistry.genItemID("sAxe");
Item.createItem("sAxe", "steel Axe", {name: "sAxe", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.sAxe, count: 1, data: 0}, [
	"aac",
	"ab ",
	"b  "
], ['a', ItemID.sIngot, -1, 'b', 280, -1, 'c', 263, -1]);

ToolAPI.addToolMaterial("steel", {durability: 350, level: 4, efficiency: 7, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.sSword, "steel", ToolType.sword);
ToolAPI.setTool(ItemID.sSpade, "steel", ToolType.shovel);
ToolAPI.setTool(ItemID.sPick, "steel", ToolType.pickaxe);
ToolAPI.setTool(ItemID.sAxe, "steel", ToolType.axe);


IDRegistry.genItemID("sHelmet");
Item.createArmorItem("sHelmet", "steel Helmet", {name: "sHelmet"}, {type: "helmet", armor: 3, durability: 666666, texture: "armor/sa_1.png"});
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
Item.createArmorItem("sBoots", "steel Boots", {name: "sBoots"}, {type: "boots", armor: 4, durability: 666666, texture: "armor/sa_2.png"});
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

ToolAPI.addToolMaterial("ds", {durability: 2000, level: 7, efficiency: 10, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.dsSword, "ds", ToolType.sword);
ToolAPI.setTool(ItemID.dsShovel, "ds", ToolType.shovel);
ToolAPI.setTool(ItemID.dsPickaxe, "ds", ToolType.pickaxe);
ToolAPI.setTool(ItemID.dsAxe, "ds", ToolType.axe);



IDRegistry.genItemID("enderhelmet");
IDRegistry.genItemID("enderchestplate");
IDRegistry.genItemID("enderpants");
IDRegistry.genItemID("enderboots");

Item.createArmorItem("enderhelmet", "Ender Helmet", {name: "enderhelmet"}, {type: "helmet", armor: 5, durability: 30000, texture: "armor/ender_1.png"});
Item.createArmorItem("enderchestplate", "Ender Chestplate", {name: "enderchestplate"}, {type: "chestplate", armor: 5, durability: 30000, texture: "armor/ender_1.png"});
Item.createArmorItem("enderpants", "Ender Leggings", {name: "enderpants"}, {type: "leggings", armor: 5, durability: 30000, texture: "armor/ender_2.png"});
Item.createArmorItem("enderboots", "Ender Boots", {name: "enderboots"}, {type: "boots", armor: 5, durability: 30000, texture: "armor/ender_1.png"});



Callback.addCallback("tick", function(){
	
	var helmet = Player.getArmorSlot(0);
	var chest = Player.getArmorSlot(1);
	var leggins = Player.getArmorSlot(2);
	var boots = Player.getArmorSlot(3);
	
if (helmet.id == ItemID.enderhelmet && chest.id == ItemID.enderchestplate && leggins.id == ItemID.enderpants && boots.id == ItemID.enderboots&&Player.getFlyingEnabled()==false) 
{
Player.setFlyingEnabled(true);
Entity.clearEffect(Player.get(), 20);
Entity.clearEffect(Player.get(), 19);
Entity.clearEffect(Player.get(), 2);
}
else



if (helmet.id !== ItemID.enderhelmet && chest.id !== ItemID.enderchestplate && leggins.id !== ItemID.enderpants && boots.id !== ItemID.enderboots&&Player.getFlyingEnabled()==true) 
{
Player.setFlyingEnabled(false) 

}
});



IDRegistry.genItemID("ingotEnder");
Item.createItem("ingotEnder", "Ender Ingot", {name: "ingotEnder", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.ingotEnder, count: 1, data: 0}, [
		"   ",
		"axb",
		"   "
	], ['x', 265, 0, 'a', 368, 0, 'b', 331, 0]);
	
	

IDRegistry.genBlockID("blockEnder");
Block.createBlockWithRotation("blockEnder", [
{name: "blockEnder", texture: [["blockEnder", 0], ["blockEnder", 0], ["blockEnder", 0],["blockEnder", 0], ["blockEnder", 0], ["blockEnder", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.blockEnder, "stone");

Recipes.addShaped({id: BlockID.blockEnder, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotEnder, 0]);
	
	
	Recipes.addShaped({id: ItemID.ingotEnder, count: 9, data: 0}, [
		"   ",
		" x ",
		"   "
	], ['x', BlockID.blockEnder, 0]);



IDRegistry.genItemID("endPortal");
Item.createItem("endPortal", "Ender Portal", {name: "endPortal", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.endPortal, count: 1, data: 0}, [
		"bab",
		"axa",
		"bab"
	], ['x', 264, 0, 'a', BlockID.blockEnder, 0, 'b', 49, 0]);



Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.endPortal&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 119, 0); 
World.setBlock(coords.x+1, coords.y+1, coords.z, 7, 0); 
World.setBlock(coords.x-1, coords.y+1, coords.z, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z+1, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z-1, 7, 0);
Entity.spawn(coords.x+1, coords.y+1, coords.z, 93); 
}}); 


IDRegistry.genItemID("enderSword");
IDRegistry.genItemID("enderShovel");
IDRegistry.genItemID("enderPickaxe");
IDRegistry.genItemID("enderAxe");
IDRegistry.genItemID("enderHoe");
Item.createItem("enderSword", "Ender Sword", {name: "enderSword", meta: 0}, {stack: 1});
Item.createItem("enderShovel", "Ender Shovel", {name: "enderShovel", meta: 0}, {stack: 1});
Item.createItem("enderPickaxe", "Ender Pickaxe", {name: "enderPickaxe", meta: 0}, {stack: 1});
Item.createItem("enderAxe", "Ender Axe", {name: "enderAxe", meta: 0}, {stack: 1});
Item.createItem("enderHoe", "Ender Hoe", {name: "enderHoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ender", {durability: 777777, level: 37, efficiency: 8, damage: 10, enchantability: 13});
ToolAPI.setTool(ItemID.enderShovel, "ender", ToolType.shovel);
ToolAPI.setTool(ItemID.enderPickaxe, "ender", ToolType.pickaxe);
ToolAPI.setTool(ItemID.enderAxe, "ender", ToolType.axe);
ToolAPI.setTool(ItemID.enderHoe, "ender", ToolType.hoe);



//Obsidian
Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.enderSword&&Entity.getType(victim) <64)
{
Entity.damageEntity(victim, 13);
Entity.setFire(victim, 200)
}
});

Recipes.addShaped({id: ItemID.enderSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotEnder, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.enderShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotEnder, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.enderPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotEnder, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.enderAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotEnder, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.enderHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotEnder, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.enderhelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotEnder, 0]);
	
	Recipes.addShaped({id: ItemID.enderchestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotEnder, 0]);
	
	Recipes.addShaped({id: ItemID.enderpants, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotEnder, 0]);
	
	Recipes.addShaped({id: ItemID.enderboots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotEnder, 0]);

 
 IDRegistry.genBlockID("tpBlockA");
Block.createBlockWithRotation("tpBlockA", [
{name: "tp block", texture: [["wool", 1], ["wool", 1], ["wool", 1],["wool", 1], ["wool", 1], ["wool", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.tpBlockA, "stone");

Recipes.addShaped({id: BlockID.tpBlockA, count: 4, data: 0}, ["aaa","aba","a a"], ['a', 35, -1, 'b', 368, 0]);
 

TileEntity.registerPrototype(BlockID.tpBlockA, {
defaultValues: {},
click: function(id, count, data, coords){ 
if(!Entity.getSneaking(Player.get()))
{
for(var yy = 2; yy <= 20; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.tpBlockA){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}
else
if(Entity.getSneaking(Player.get()))
{
for(var yy = -20; yy <= -2; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.tpBlockA){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}}});



IDRegistry.genBlockID("avtoFarm");

Block.createBlockWithRotation("avtoFarm",[ {name: "генератор эндэр пёрлов", texture: [["perlGen", 0],["perlGen", 0],["perlGen",0],["perlGen",0],["perlGen",0],["perlGen",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.avtoFarm, count: 1, data: 0}, [
        "cbc",
        "dad",
        "efe"
        ], ["a", 368, -1, "b", 145, -1, "c", BlockID.sBlock, -1, "d", BlockID.redblock, -1, "f", 410, -1, "e", 155, -1]);
        
	var avGUI = new UI.StandartWindow({
    standart: {
        header: {text: {text: "генератор эндэр пёрлов"}},
        inventory: {standart: true},
        background: {standart: true}},
    
    
    drawing: [
		{type: "bitmap", x: 353, y: 146, bitmap: "end_bar_background", scale: 3.2}],
    
    elements: {
   
    
    "progressScale": {type: "scale", x: 353, y: 146, direction: 0, value: 0.5, bitmap: "end_bar_scale", scale: 3.2},
        
    "slot0":{type:"slot",x:553,y:103,size:71},
    "slot1":{type:"slot",x:625,y:103,size:71},
    "slot2":{type:"slot",x:697,y:103,size:71},
    "slot3":{type:"slot",x:769,y:103,size:71},
    "slot4":{type:"slot",x:841,y:103,size:71},
    "slot5":{type:"slot",x:913,y:103,size:71},
         
    "slot6":{type:"slot",x:553,y:175,size:71},
    "slot7":{type:"slot",x:625,y:175,size:71},
    "slot8":{type:"slot",x:697,y:175,size:71},
    "slot9":{type:"slot",x:769,y:175,size:71},
    "slot10":{type:"slot",x:841,y:175,size:71},
    "slot11":{type:"slot",x:913,y:175,size:71},
         
    "slot12":{type:"slot",x:553,y:247,size:71},
    "slot13":{type:"slot",x:625,y:247,size:71},
    "slot14":{type:"slot",x:697,y:247,size:71},
    "slot15":{type:"slot",x:769,y:247,size:71},
    "slot16":{type:"slot",x:841,y:247,size:71},
    "slot17":{type:"slot",x:913,y:247,size:71}
    }
});

	
	
	
TileEntity.registerPrototype(BlockID.avtoFarm,{
	defaultValues:{
	work:0,
	progress: 0
	},
	
	
	tick:function(){
	
	
    if(this.data.progress<11000){           
	
			
if(this.data.progress++ >= 1000){	this.container.validateAll();
				this.data.progress = 0;
			

 this.addResult("slot",368,1,0);
 
 
                        }
                    }                   
                else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 1000);
	},       
         
    addResult: function(area, id, count, data){
        for (var i = 0; i < 18; i++){
            var slot = this.container.getSlot(area + i);
            if (slot.id == id && slot.data == data || slot.id == 0){
                var add = Math.min(16 - slot.count, count);
                slot.count += add;
                slot.id = id;
                slot.data = data;
                count -= add;
                if (count == 0){
                    break;
                }
            }
        }
        if (count > 0){
            World.drop(this.x + .5, this.y + 1, this.z + .5, id, count, data);
        }
    },  
    getGuiScreen: function () {
        return avGUI;
    }
});






IDRegistry.genItemID("fcarrot");
Item.createFoodItem("fcarrot", "baked carrot", {name:"baked_carrot"}, {food:7});
Recipes.addFurnace(391, ItemID.fcarrot, 0);

IDRegistry.genItemID("fbread");
Item.createFoodItem("fbread", "baked_bread", {name:"baked_bread"}, {food:10});
Recipes.addFurnace(297, ItemID.fbread, 0);



Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
Recipes.addShaped({id: 351, count: 1, data: 2},[" a ","   ","   "],['a', 81, 0]);



IDRegistry.genItemID("manure");
Item.createItem("manure", "manure", {name: "pupMeale", meta: 0},{stack: 1}, {damage: 30});
Item.setMaxDamage(ItemID.manure, 30);
;
Recipes.addShaped({id: ItemID.manure, count: 1, data: 0}, ["aba","bcb","aba"], ["a", 351, 15, "b", 6, -1, "c", 3, -1]);
Recipes.addShaped({id: ItemID.manure, count: 1, data: 0}, ["aba","bcb","aba"], ["a", 351, 15, "b", 18, -1, "c", 3, -1]);


Callback.addCallback("ItemUse", function (coords, item, block) {
var cropId = [59, 141, 142, 244];
for(var i=0; i<6; i++)
if(item.id==ItemID.manure&&block.id == cropId[i] && block.data !== 7 ){
block.data++;
World.setBlock(coords.x, coords.y, coords.z, cropId[i], 7);
ToolAPI.breakCarriedTool(1);
}}); 


ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}



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
IDRegistry.genItemID("coal_nugget");
Item.createItem("coal_nugget", "coal_nugget", {name: "coal_nugget", meta: 0});
Recipes.addShaped({id: 263, count: 1, data: 0}, [
"bbb","bbb","bbb"], ['b', ItemID.coal_nugget, 0]);

IDRegistry.genItemID("diamond_nugget");
Item.createItem("diamond_nugget", "diamond_nugget", {name: "diamond_nugget", meta: 0});
Recipes.addShaped({id: 264, count: 1, data: 0}, [
"bbb","bbb","bbb"], ['b', ItemID.diamond_nugget, 0]);

IDRegistry.genItemID("emerald_nugget");
Item.createItem("emerald_nugget", "emerald_nugget", {name: "emerald_nugget", meta: 0});
Recipes.addShaped({id: 388, count: 1, data: 0}, [
"bbb","bbb","bbb"], ['b', ItemID.emerald_nugget, 0]);

IDRegistry.genItemID("ender_nugget");
Item.createItem("ender_nugget", "ender_nugget", {name: "ender_nugget", meta: 0});
Recipes.addShaped({id: 368, count: 1, data: 0}, [
"bbb","bbb","bbb"], ['b', ItemID.ender_nugget, 0]);

IDRegistry.genItemID("iron_nugget");
Item.createItem("iron_nugget", "iron_nugget", {name: "iron_nugget", meta: 0});
Recipes.addShaped({id: 265, count: 1, data: 0}, [
"bbb","bbb","bbb"], ['b', ItemID.iron_nugget, 0]);

IDRegistry.genItemID("lapis_nugget");
Item.createItem("lapis_nugget", "lapis_nugget", {name: "lapis_nugget", meta: 0});
Recipes.addShaped({id: 351, count: 1, data: 4}, [
"bbb","bbb","bbb"], ['b', ItemID.lapis_nugget, 0]);

IDRegistry.genItemID("obsidian_nugget");
Item.createItem("obsidian_nugget", "obsidian_nugget", {name: "obsidian_nugget", meta: 0});
Recipes.addShaped({id: 49, count: 1, data: 0}, [
"bbb","bbb","bbb"], ['b', ItemID.obsidian_nugget, 0]);

IDRegistry.genItemID("quartz_nugget");
Item.createItem("quartz_nugget", "quartz_nugget", {name: "quartz_nugget", meta: 0});
Recipes.addShaped({id: 406, count: 1, data: 0}, [
"bbb","bbb","bbb"], ['b', ItemID.quartz_nugget, 0]);

IDRegistry.genItemID("redstoune_nugget");
Item.createItem("redstoune_nugget", "redstoune_nugget", {name: "redstoune_nugget", meta: 0});
Recipes.addShaped({id: 331, count: 1, data: 0}, [
"bbb","bbb","bbb"], ['b', ItemID.redstoune_nugget, 0]);

Callback.addCallback("EntityDeath", function(entity){
 var loot = [ItemID.coal_nugget, ItemID.diamond_nugget, ItemID.emerald_nugget, ItemID.ender_nugget, ItemID.iron_nugget, ItemID.lapis_nugget, ItemID.obsidian_nugget, ItemID.quartz_nugget,
 ItemID.redstoune_nugget, 371, 422, 409, 377, 370, 341, 337, 289];
 var count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 var rnd = Math.floor((Math.random()*10)+1)
 
 if(Entity.getType(entity) <= 63&&rnd == 5&&Player.getLevel()>=38){
 
var rnd1 = Math.floor(Math.random()*(loot.length));
var rnd2 = Math.floor(Math.random()*(count.length));
 		var coords = Entity.getPosition(entity); 
     World.drop(coords.x, coords.y, coords.z, loot[rnd1], count[rnd2]);}
});


Recipes.addFurnace(367, 334, 0)

Callback.addCallback("DestroyBlock", function(coords, block, player){
var loot = [361, 362, 391, 392, 458];
 
var rnd = Math.floor((Math.random()*10)+1)

if(block.id ==31&&rnd == 5){

{
var rnd1 = Math.floor(Math.random()*(loot.length));

World.drop(coords.x, coords.y, coords.z, loot[rnd1], 1)}
}
});




IDRegistry.genBlockID("dayBlock");
Block.createBlockWithRotation("dayBlock", [
{name: "day block", texture: [["dayBlock", 0], ["dayBlock", 0], ["dayBlock", 0],["dayBlock", 0], ["dayBlock", 0], ["dayBlock", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.dayBlock, "stone");

Recipes.addShaped({id: BlockID.dayBlock, count: 4, data: 0}, ["aca","cbc","aca"], ['a', 347, -1, 'b', 49, 0, 'c', 331, -1]);
 

TileEntity.registerPrototype(BlockID.dayBlock, {
defaultValues: {},

redstone: function(params){

World.setWorldTime(0) }


});



		
