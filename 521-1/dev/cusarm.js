IDRegistry.genItemID("trvb");

Item.createArmorItem("trvb", "Piligrim Boots", {name: "travelling_bogots"}, {type: "boots", armor: 3, durability: 390, texture: "armor/traveling_boots_1.png"});

Recipes.addShaped({id: ItemID.trvb, count: 1, data: 0}, 
["bkc",
"xax",
"dkf"], 
["a", 317, -1, "b", 353, -1, "c", 348, -1, "d", 289, -1, "f", 331, -1, "x", 341, -1, "k", 288, -1]);

Item.addRepairItemIds(ItemID.trvb, [266]);


Item.setEnchantType(ItemID.trvb, Native.EnchantType.boots, 14);



Callback.addCallback("tick", function () { 

var boots = Player.getArmorSlot(3);


if(boots.id==ItemID.trvb){
	Entity.addEffect(Player.get(), 1, 1, 100, false);
	Entity.addEffect(Player.get(), 8, 1, 100, false)
}});



//шляпа ночного


IDRegistry.genItemID("plhl");

Item.createArmorItem("plhl", "Piligrim helmet", {name: "pili_helmet"}, {type: "helmet", armor: 3, durability: 390, texture: "armor/traveling_boots_1.png"});

Recipes.addShaped({id: ItemID.plhl, count: 1, data: 0}, 
["xbx",
"cac",
"xbx"], 
["a", 314, -1, "x", 396, -1, "b", 381, -1, "c", 89, -1]);

Item.addRepairItemIds(ItemID.plhl, [266]);


Item.setEnchantType(ItemID.plhl, Native.EnchantType.helmet, 14);



Callback.addCallback("tick", function () { 

var helmet = Player.getArmorSlot(0);


if(helmet.id==ItemID.plhl){
	Entity.addEffect(Player.get(), 16, 1, 100, false);
}});
