IDRegistry.genItemID("obsidian_helmet");
Item.createArmorItem("obsidian_helmet", 
"Obsidian helmet", {
name: "obsidian_helmet"
},{
type: "helmet", 
armor: 3, 
durability: 1530, 
knockbackresist: 1,
texture: "armor/obsidian_1.png"
});

Item.setEnchantType(ItemID.obsidian_helmet, Native.EnchantType.helmet, 25);

Item.addRepairItemIds(ItemID.obsidian_helmet, [ItemID.obsidian_helmet, 49]);


Translation.addTranslation("Obsidian helmet", {ru: "Обсидиановый шлем"});

Recipes.addShaped({id:ItemID.obsidian_helmet, count: 1, data: 0}, 
["aaa",
 "a a", 
 "   "],
 ['a', 49, -1]);






IDRegistry.genItemID("obsidian_chestplate");
Item.createArmorItem("obsidian_chestplate", "Obsidian chestplate", {
name: "obsidian_chestplate"
},{
type: "chestplate", 
armor: 8, 
durability: 1780, 
knockbackresist: 1,
texture: "armor/obsidian_1.png"
});

Item.setEnchantType(ItemID.obsidian_chestplate, Native.EnchantType.chestplate, 25);

Item.addRepairItemIds(ItemID.obsidian_chestplate, [ItemID.obsidian_chestplate, 49]);

Translation.addTranslation("Obsidian chestplate", {ru: "Обсидиановый нагрудник"});

Recipes.addShaped({id:
ItemID.obsidian_chestplate, count: 1, data: 0}, 
["a a",
 "aaa", 
 "aaa"],
 ['a', 49, -1]);

IDRegistry.genItemID("obsidian_leggings");
Item.createArmorItem("obsidian_leggings", 
"Obsidian leggings", {
name: "obsidian_leggings"
}, {
type: "leggings", 
armor: 6, 
durability: 1650, 
knockbackresist: 1,
texture: "armor/obsidian_2.png"
});

Item.setEnchantType(ItemID.obsidian_leggings, Native.EnchantType.leggings, 25);

Item.addRepairItemIds(ItemID.obsidian_leggings, [ItemID.obsidian_leggings, 49]);

Translation.addTranslation("Obsidian leggings", {ru: "Обсидиановые поножи"});


Recipes.addShaped({id:
ItemID.obsidian_leggings, count: 1, data: 0}, 
["aaa",
 "a a", 
 "a a"],
 ['a', 49, -1]);


IDRegistry.genItemID("obsidian_boots");
Item.createArmorItem("obsidian_boots", 
"Obsidian boots", {
name: "obsidian_boots"
}, {
type: "boots", 
armor: 3, 
durability: 1590, 
knockbackresist: 1,
texture: "armor/obsidian_1.png"
});

Item.setEnchantType(ItemID.obsidian_boots, Native.EnchantType.boots, 25);

Item.addRepairItemIds(ItemID.obsidian_boots, [ItemID.obsidian_boots, 49]);

Translation.addTranslation("Obsidian boots", {ru: "Обсидиановые ботинки"});

Recipes.addShaped({id:ItemID.obsidian_boots, count: 1, data: 0}, 
["a a",
 "a a", 
 "   "],
 ['a', 49, -1]);




Callback.addCallback("tick", function () { 
var helmet = Player.getArmorSlot(0);
var chestplate = Player.getArmorSlot(1);
var leggings = Player.getArmorSlot(2);
var boots = Player.getArmorSlot(3);

if(helmet.id==ItemID.obsidian_helmet&&
chestplate.id==ItemID.obsidian_chestplate&&
leggings.id==ItemID.obsidian_leggings&&
boots.id==ItemID.obsidian_boots){
	
Entity.addEffect(Player.get(), 12, 1, 2*20, true);

}});




//изумрудная броня
IDRegistry.genItemID("emerald_helmet");
Item.createArmorItem("emerald_helmet", 
"Emerald helmet", {
name: "emerald_helmet"
},{
type: "helmet", 
armor: 2, 
durability: 1230, 
knockbackresist: 1,
texture: "armor/emerald_1.png"
});

Item.setEnchantType(ItemID.emerald_helmet, Native.EnchantType.helmet, 25);

Item.addRepairItemIds(ItemID.emerald_helmet, [ItemID.emerald_helmet, 388]);


Translation.addTranslation("Emerald helmet", {ru: "Изумрудный шлем"});

Recipes.addShaped({id:ItemID.emerald_helmet, count: 1, data: 0}, 
["aaa",
 "a a", 
 "   "],
 ['a', 388, -1]);






IDRegistry.genItemID("emerald_chestplate");
Item.createArmorItem("emerald_chestplate", "Emerald chestplate", {
name: "emerald_chestplate"
},{
type: "chestplate", 
armor: 6, 
durability: 1480, 
knockbackresist: 1,
texture: "armor/emerald_1.png"
});

Item.setEnchantType(ItemID.emerald_chestplate, Native.EnchantType.chestplate, 25);

Item.addRepairItemIds(ItemID.emerald_chestplate, [ItemID.emerald_chestplate, 388]);

Translation.addTranslation("Emerald chestplate", {ru: "Изумрудный нагрудник"});

Recipes.addShaped({id:
ItemID.emerald_chestplate, count: 1, data: 0}, 
["a a",
 "aaa", 
 "aaa"],
 ['a', 388, -1]);

IDRegistry.genItemID("emerald_leggings");
Item.createArmorItem("emerald_leggings", 
"Emerald leggings", {
name: "emerald_leggings"
}, {
type: "leggings", 
armor: 4, 
durability: 1250, 
knockbackresist: 1,
texture: "armor/emerald_2.png"
});

Item.setEnchantType(ItemID.emerald_leggings, Native.EnchantType.leggings, 25);

Item.addRepairItemIds(ItemID.emerald_leggings, [ItemID.emerald_leggings, 388]);

Translation.addTranslation("Emerald leggings", {ru: "Изумрудные поножи"});


Recipes.addShaped({id:
ItemID.emerald_leggings, count: 1, data: 0}, 
["aaa",
 "a a", 
 "a a"],
 ['a', 388, -1]);


IDRegistry.genItemID("emerald_boots");
Item.createArmorItem("emerald_boots", 
"Emerald boots", {
name: "emerald_boots"
}, {
type: "boots", 
armor: 2, 
durability: 1190, 
knockbackresist: 1,
texture: "armor/emerald_1.png"
});

Item.setEnchantType(ItemID.emerald_boots, Native.EnchantType.boots, 25);

Item.addRepairItemIds(ItemID.emerald_boots, [ItemID.emerald_boots, 388]);

Translation.addTranslation("Emerald boots", {ru: "Изумрудные ботинки"});

Recipes.addShaped({id:ItemID.emerald_boots, count: 1, data: 0}, 
["a a",
 "a a", 
 "   "],
 ['a', 388, -1]);






Callback.addCallback("tick", function () { 
var helmet = Player.getArmorSlot(0);
var chestplate = Player.getArmorSlot(1);
var leggings = Player.getArmorSlot(2);
var boots = Player.getArmorSlot(3);

if(helmet.id==ItemID.emerald_helmet&&
chestplate.id==ItemID.emerald_chestplate&&
leggings.id==ItemID.emerald_leggings&&
boots.id==ItemID.emerald_boots){
	
Entity.addEffect(Player.get(), 29, 1, 2*20, true);

}});


Item.addCreativeGroup("armor", Translation.translate("armor"), [
	ItemID.obsidian_helmet,
	ItemID.obsidian_chestplate,
	ItemID.obsidian_leggings,
	ItemID.obsidian_boots,
	ItemID.emerald_helmet,
	ItemID.emerald_chestplate,
	ItemID.emerald_leggings,
	ItemID.emerald_boots
]);
