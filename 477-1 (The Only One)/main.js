importLib("ToolType", "*");
//id
IDRegistry.genItemID("toosword");
IDRegistry.genItemID("toowsword");
IDRegistry.genItemID("toocoin");
IDRegistry.genItemID("toobow");
IDRegistry.genItemID("toofs");
IDRegistry.genItemID("toowshield");
IDRegistry.genItemID("tooshield");
IDRegistry.genItemID("tooanklet");
IDRegistry.genItemID("toowanklet");
IDRegistry.genItemID("toolongboots");
IDRegistry.genItemID("toohelmet");
//items
Item.createItem ("toobow", "Archer Bow (Work In Proggress)", {name: "modbow", meta: 0}, {stack: 1});
Item.createItem ("toofs", "Fire Staff", {name: "modfirestaff", meta: 0}, {stack: 20});
Item.createItem ("toocoin", "Coin", {name: "modcoin", meta: 0}, {stack: 60});
//armor
Item.createArmorItem("toohelmet", "Warrior Helmet", {name: "warriorhelmet"}, {type: "helmet", armor: 6, durability: 100000, texture: "armor/warriorstuff_1.png"});
Item.createArmorItem("toowshield", "Warrior Shield", {name: "warriorshield"}, {type: "chestplate", armor: 10, durability: 100000, texture: "armor/warriorstuff2_1.png"});
Item.createArmorItem("toowanklet", "Warrior Anklets", {name: "warrioranklets"}, {type: "leggings", armor: 2, durability: 100000, texture: "armor/warriorstuff2_2.png"});
Item.createArmorItem("tooshield", "Boss Shield", {name: "bossshield"}, {type: "chestplate", armor: 16, durability: 100000, texture: "armor/bossstuff_1.png"});
Item.createArmorItem("tooanklet", "Boss Anklets", {name: "bossanklets"}, {type: "leggings", armor: 4, durability: 100000, texture: "armor/bossstuff_2.png"});
Item.createArmorItem("toolongboots", "Leather Longboots", {name: "leatherlongboots"}, {type: "boots", armor: 2, durability: 100000, texture: "armor/warriorstuff_1.png"});
//swords
Item.createItem ("toosword", "Sacred Sword", {name: "theonesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("too", {durability: 100, level: 1, efficiency: 2, damage: 10, enchantability: 1});
ToolAPI.setTool(ItemID.toosword, "too", ToolType.sword);
Item.createItem ("toowsword", "Warrior Sword", {name: "warriorsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("toow", {durability: 80, level: 1, efficiency: 2, damage: 7, enchantability: 1});
ToolAPI.setTool(ItemID.toowsword, "toow", ToolType.sword);
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.toowsword){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 1, 100, true, true);
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 1, 100, true, true);
}
});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.toosword){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100, true, true);
}
});
//staff
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.toofs){
Player.decreaseCarriedItem(1);

var ent = Entity.spawn(coords.x+2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(ent, 0, -0.09, 0);

var et = Entity.spawn(coords.x-2, coords.y+10, coords.z-2, 94); 
Entity.setVelocity(et, 0, -0.09, 0);

var en = Entity.spawn(coords.x+2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(en, 0, -0.09, 0);

var egh = Entity.spawn(coords.x-2, coords.y+10, coords.z+2, 94); 
Entity.setVelocity(egh, 0, -0.09, 0);

var n = Entity.spawn(coords.x, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(n, 0, -0.09, 0);
var er = Entity.spawn(coords.x, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(er, 0, -0.09, 0);

var em = Entity.spawn(coords.x+3, coords.y+10, coords.z, 94); 
Entity.setVelocity(em, 0, -0.09, 0);

var ep = Entity.spawn(coords.x-3, coords.y+10, coords.z, 94); 
Entity.setVelocity(ep, 0, -0.09, 0);

var emi = Entity.spawn(coords.x+4, coords.y+10, coords.z, 94); 
Entity.setVelocity(emi, 0, -0.09, 0);
var epo = Entity.spawn(coords.x-4, coords.y+10, coords.z, 94); 
Entity.setVelocity(epo, 0, -0.09, 0);

var ezi = Entity.spawn(coords.x-3, coords.y+10, coords.z-3, 94); 
Entity.setVelocity(ezi, 0, -0.09, 0);
var elj = Entity.spawn(coords.x+3, coords.y+10, coords.z+3, 94); 
Entity.setVelocity(elj, 0, -0.09, 0);
var etk = Entity.spawn(coords.x+4, coords.y+10, coords.z+4, 94); 
Entity.setVelocity(etk, 0, -0.09, 0);
var esk = Entity.spawn(coords.x+
-4, coords.y+10, coords.z-4, 94); 
Entity.setVelocity(esk, 0, -0.09, 0);

}});