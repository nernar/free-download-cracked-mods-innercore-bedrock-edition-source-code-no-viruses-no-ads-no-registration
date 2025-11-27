IDRegistry.genItemID("big_wood_sword");
IDRegistry.genItemID("big_stone_sword");
IDRegistry.genItemID("big_iron_sword");
IDRegistry.genItemID("big_gold_sword");
IDRegistry.genItemID("big_diamond_sword");


Item.createItem("big_wood_sword", "big wooden sword \n +10 dmg", {name: "big_wood_sword", meta: 0},{stack: 1});

Item.createItem("big_stone_sword", "big stone sword \n +12 dmg", {name: "big_stone_sword", meta: 0},{stack: 1});

Item.createItem("big_iron_sword", "big iron sword \n +14 dmg", {name: "big_iron_sword", meta: 0},{stack: 1});

Item.createItem("big_gold_sword", "big golden sword \n +10 dmg", {name: "big_gold_sword", meta: 0},{stack: 1});

Item.createItem("big_diamond_sword", "big diamond sword \n +16dmg", {name: "big_diamond_sword", meta: 0},{stack: 1});



Item.setMaxDamage(ItemID.big_wood_sword, 60);
Item.setMaxDamage(ItemID.big_stone_sword, 140);
Item.setMaxDamage(ItemID.big_iron_sword, 250);
Item.setMaxDamage(ItemID.big_gold_sword, 600);
Item.setMaxDamage(ItemID.big_diamond_sword, 1700);



Item.setEnchantType(ItemID.big_wood_sword, Native.EnchantType.weapon, 140);
Item.setEnchantType(ItemID.big_stone_sword, Native.EnchantType.weapon, 14);
Item.setEnchantType(ItemID.big_gold_sword, Native.EnchantType.weapon, 50);
Item.setEnchantType(ItemID.big_iron_sword, Native.EnchantType.weapon, 14);
Item.setEnchantType(ItemID.big_diamond_sword, Native.EnchantType.weapon, 14);


Item.addRepairItemIds(ItemID.big_wood_sword, [17]);
Item.addRepairItemIds(ItemID.big_stone_sword, [1]);
Item.addRepairItemIds(ItemID.big_gold_sword, [266]);
Item.addRepairItemIds(ItemID.big_iron_sword, [265]);
Item.addRepairItemIds(ItemID.big_diamond_sword, [264]);



Recipes.addShaped({id: ItemID.big_wood_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 17, -1]);

Recipes.addShaped({id: ItemID.big_stone_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 61, -1]);

Recipes.addShaped({id: ItemID.big_iron_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 42, -1]);

Recipes.addShaped({id: ItemID.big_gold_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 41, -1]);

Recipes.addShaped({id: ItemID.big_diamond_sword, count: 1, data: 0}, 
["a",
"a",
"b"], 
["b", 5, -1, "a", 57, -1]);




Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
for(var i=0; i<8; i++)
if(item.id==ItemID.big_wood_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 20);
//ToolAPI.breakCarriedTool(1);
}});

Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.big_stone_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 24);
//ToolAPI.breakCarriedTool(1);
}});

Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.big_gold_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 20);
//ToolAPI.breakCarriedTool(1);
}});

Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.big_iron_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 28);
//ToolAPI.breakCarriedTool(1);
}});

Callback.addCallback("PlayerAttack", function (player, victim) {
item=Player.getCarriedItem(true);
if(item.id==ItemID.big_diamond_sword&&Entity.getMaxHealth(victim)>4){
Entity.damageEntity(victim, 32);
//ToolAPI.breakCarriedTool(1);
}});


/*
var sw = [, , , , ];
var dmg = [20,24,20,28,32];

*/