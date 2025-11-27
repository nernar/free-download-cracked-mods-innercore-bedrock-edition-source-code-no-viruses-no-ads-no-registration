importLib("ToolType","*")


IDRegistry.genItemID("wichitumsword");
IDRegistry.genItemID("wichitumpickaxe");
IDRegistry.genItemID("wichitumaxe");
IDRegistry.genItemID("wichitumshovel");
Item.createItem("wichitumsword", "Wichitum sword", {name: "wichitumsword", meta: 0}, {stack: 1});
Item.createItem("wichitumpickaxe", "Wichitum pickaxe", {name: "wichitumpickaxe", meta: 0}, {stack: 1});
Item.createItem("wichitumaxe", "Wichitum axe", {name: "wichitumaxe", meta: 0}, {stack: 1});
Item.createItem("wichitumshovel", "Wichitum shovel", {name: "wichitumshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("wichitum", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.wichitumsword, "wichitum", ToolType.sword);
ToolAPI.setTool(ItemID.wichitumpickaxe, "wichitum", ToolType.pickaxe);
ToolAPI.setTool(ItemID.wichitumaxe, "wichitum", ToolType.axe);
ToolAPI.setTool(ItemID.wichitumshovel, "wichitum", ToolType.shovel);

IDRegistry.genItemID("wichitumhelmet");
IDRegistry.genItemID("wichitumchestplate");
IDRegistry.genItemID("wichitumleggings");
IDRegistry.genItemID("wichitumboots");

Item.createArmorItem("wichitumhelmet", "Wichitum helmet", {name: "wichitumhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/wichitumarmor.png"});
Item.createArmorItem("wichitumchestplate", "Wichitum chestplate", {name: "wichitumchestplate", meta: 0}, {type: "chestplate", armor: 9, durability: 750, texture: "armor/wichitumarmor.png"});
Item.createArmorItem("wichitumleggings", "Wichitum leggings", {name: "wichitumleggings", meta: 0}, {type: "leggings", armor: 7, durability: 700, texture: "armor/wichitumarmor0.png"});
Item.createArmorItem("wichitumboots", "Wichitum boots", {name: "wichitumboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/wichitumarmor.png"});

Recipes.addShaped({id: ItemID.wichitumsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.wichitum, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.wichitumpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.wichitum, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.wichitumaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.wichitum, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.wichitumshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.wichitum, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.wichitumhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.wichitum, 0]);
Recipes.addShaped({id: ItemID.wichitumchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.wichitum, 0]);
Recipes.addShaped({id: ItemID.wichitumleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.wichitum, 0]);
Recipes.addShaped({id: ItemID.wichitumboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.wichitum, 0]);






IDRegistry.genItemID("olwoodsword");
IDRegistry.genItemID("olwoodpickaxe");
IDRegistry.genItemID("olwoodaxe");
IDRegistry.genItemID("olwoodshovel");
Item.createItem("olwoodsword", "Outlands wood sword", {name: "olwoodsword", meta: 0}, {stack: 1});
Item.createItem("olwoodpickaxe", "Outlands wood pickaxe", {name: "olwoodpickaxe", meta: 0}, {stack: 1});
Item.createItem("olwoodaxe", "Outlands wood axe", {name: "olwoodaxe", meta: 0}, {stack: 1});
Item.createItem("olwoodshovel", "Outlands wood shovel", {name: "olwoodshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("olwood", {durability: 3400, level: 10, efficiency: 480, damage: 24, enchantability: 14});
ToolAPI.setTool(ItemID.olwoodsword, "olwood", ToolType.sword);
ToolAPI.setTool(ItemID.olwoodpickaxe, "olwood", ToolType.pickaxe);
ToolAPI.setTool(ItemID.olwoodaxe, "olwood", ToolType.axe);
ToolAPI.setTool(ItemID.olwoodshovel, "olwood", ToolType.shovel);

IDRegistry.genItemID("olwoodhelmet");
IDRegistry.genItemID("olwoodchestplate");
IDRegistry.genItemID("olwoodleggings");
IDRegistry.genItemID("olwoodboots");

Item.createArmorItem("olwoodhelmet", "Outlands wood helmet", {name: "olwoodhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/olwoodarmor.png"});
Item.createArmorItem("olwoodchestplate", "Outlands wood chestplate", {name: "olwoodchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/olwoodarmor.png"});
Item.createArmorItem("olwoodleggings", "Outlands wood leggings", {name: "olwoodleggings", meta: 0}, {type: "leggings", armor: 8, durability: 700, texture: "armor/olwoodarmor0.png"});
Item.createArmorItem("olwoodboots", "Outlands wood boots", {name: "olwoodboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/olwoodarmor.png"});

Recipes.addShaped({id: ItemID.olwoodsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', BlockID.olwood, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olwoodpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', BlockID.olwood, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olwoodaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', BlockID.olwood, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olwoodshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', BlockID.olwood, 0, 'b', ItemID.olstick, 0]);



Recipes.addShaped({id: ItemID.olwoodhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', BlockID.olwood, 0]);
Recipes.addShaped({id: ItemID.olwoodchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', BlockID.olwood, 0]);
Recipes.addShaped({id: ItemID.olwoodleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', BlockID.olwood, 0]);
Recipes.addShaped({id: ItemID.olwoodboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', BlockID.olwood, 0]);




IDRegistry.genItemID("olstonesword");
IDRegistry.genItemID("olstonepickaxe");
IDRegistry.genItemID("olstoneaxe");
IDRegistry.genItemID("olstoneshovel");
Item.createItem("olstonesword", "Outlands stone sword", {name: "olstonesword", meta: 0}, {stack: 1});
Item.createItem("olstonepickaxe", "Outlands stone pickaxe", {name: "olstonepickaxe", meta: 0}, {stack: 1});
Item.createItem("olstoneaxe", "Outlands stone axe", {name: "olstoneaxe", meta: 0}, {stack: 1});
Item.createItem("olstoneshovel", "Outlands stone shovel", {name: "olstoneshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("olstone", {durability: 3400, level: 11, efficiency: 487, damage: 27, enchantability: 14});
ToolAPI.setTool(ItemID.olstonesword, "olstone", ToolType.sword);
ToolAPI.setTool(ItemID.olstonepickaxe, "olstone", ToolType.pickaxe);
ToolAPI.setTool(ItemID.olstoneaxe, "olstone", ToolType.axe);
ToolAPI.setTool(ItemID.olstoneshovel, "olstone", ToolType.shovel);

IDRegistry.genItemID("olstonehelmet");
IDRegistry.genItemID("olstonechestplate");
IDRegistry.genItemID("olstoneleggings");
IDRegistry.genItemID("olstoneboots");

Item.createArmorItem("olstonehelmet", "Outlands stone helmet", {name: "olstonehelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/olstonearmor.png"});
Item.createArmorItem("olstonechestplate", "Outlands stone chestplate", {name: "olstonechestplate", meta: 0}, {type: "chestplate", armor: 14, durability: 750, texture: "armor/olstonearmor.png"});
Item.createArmorItem("olstoneleggings", "Outlands stone leggings", {name: "olstoneleggings", meta: 0}, {type: "leggings", armor: 9, durability: 700, texture: "armor/olstonearmor0.png"});
Item.createArmorItem("olstoneboots", "Outlands stone boots", {name: "olstoneboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/olstonearmor.png"});

Recipes.addShaped({id: ItemID.olstonesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', BlockID.olstone, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olstonepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', BlockID.olstone, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olstoneaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', BlockID.olstone, 0, 'b', ItemID.olstick, 0]);
Recipes.addShaped({id: ItemID.olstoneshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', BlockID.olstone, 0, 'b', ItemID.olstick, 0]);



Recipes.addShaped({id: ItemID.olstonehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', BlockID.olstone, 0]);
Recipes.addShaped({id: ItemID.olstonechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', BlockID.olstone, 0]);
Recipes.addShaped({id: ItemID.olstoneleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', BlockID.olstone, 0]);
Recipes.addShaped({id: ItemID.olstoneboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', BlockID.olstone, 0]);



















 
 
 
 IDRegistry.genItemID("rubysword");
IDRegistry.genItemID("rubypickaxe");
IDRegistry.genItemID("rubyaxe");
IDRegistry.genItemID("rubyshovel");
Item.createItem("rubysword", "Ruby sword", {name: "rubysword", meta: 0}, {stack: 1});
Item.createItem("rubypickaxe", "Ruby pickaxe", {name: "rubypickaxe", meta: 0}, {stack: 1});
Item.createItem("rubyaxe", "Ruby axe", {name: "rubyaxe", meta: 0}, {stack: 1});
Item.createItem("rubyshovel", "Ruby shovel", {name: "rubyshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ruby", {durability: 3400, level: 13, efficiency: 491, damage: 31, enchantability: 14});
ToolAPI.setTool(ItemID.rubysword, "ruby", ToolType.sword);
ToolAPI.setTool(ItemID.rubypickaxe, "ruby", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rubyaxe, "ruby", ToolType.axe);
ToolAPI.setTool(ItemID.rubyshovel, "ruby", ToolType.shovel);

IDRegistry.genItemID("rubyhelmet");
IDRegistry.genItemID("rubychestplate");
IDRegistry.genItemID("rubyleggings");
IDRegistry.genItemID("rubyboots");

Item.createArmorItem("rubyhelmet", "Ruby helmet", {name: "rubyhelmet", meta: 0}, {type: "helmet", armor: 7, durability: 650, texture: "armor/rubyarmor.png"});
Item.createArmorItem("rubychestplate", "Ruby chestplate", {name: "rubychestplate", meta: 0}, {type: "chestplate", armor: 16, durability: 750, texture: "armor/rubyarmor.png"});
Item.createArmorItem("rubyleggings", "Ruby leggings", {name: "rubyleggings", meta: 0}, {type: "leggings", armor: 12, durability: 700, texture: "armor/rubyarmor0.png"});
Item.createArmorItem("rubyboots", "Ruby boots", {name: "rubyboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/rubyarmor.png"});

Recipes.addShaped({id: ItemID.rubysword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.olruby, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.rubypickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.olruby, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.rubyaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.olruby, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.rubyshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.olruby, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.rubyhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.olruby, 0]);
Recipes.addShaped({id: ItemID.rubychestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.olruby, 0]);
Recipes.addShaped({id: ItemID.rubyleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.olruby, 0]);
Recipes.addShaped({id: ItemID.rubyboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.olruby, 0]);



IDRegistry.genItemID("orihalksword");
IDRegistry.genItemID("orihalkpickaxe");
IDRegistry.genItemID("orihalkaxe");
IDRegistry.genItemID("orihalkshovel");
Item.createItem("orihalksword", "Orichulc sword", {name: "orihalksword", meta: 0}, {stack: 1});
Item.createItem("orihalkpickaxe", "Orichulc pickaxe", {name: "orihalkpickaxe", meta: 0}, {stack: 1});
Item.createItem("orihalkaxe", "Orichulc axe", {name: "orihalkaxe", meta: 0}, {stack: 1});
Item.createItem("orihalkshovel", "Orichulc shovel", {name: "orihalkshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("orihalk", {durability: 3400, level: 12, efficiency: 489, damage: 29, enchantability: 14});
ToolAPI.setTool(ItemID.orihalksword, "orihalk", ToolType.sword);
ToolAPI.setTool(ItemID.orihalkpickaxe, "orihalk", ToolType.pickaxe);
ToolAPI.setTool(ItemID.orihalkaxe, "orihalk", ToolType.axe);
ToolAPI.setTool(ItemID.orihalkshovel, "orihalk", ToolType.shovel);

IDRegistry.genItemID("orihalkhelmet");
IDRegistry.genItemID("orihalkchestplate");
IDRegistry.genItemID("orihalkleggings");
IDRegistry.genItemID("orihalkboots");

Item.createArmorItem("orihalkhelmet", "Orichulc helmet", {name: "orihalkhelmet", meta: 0}, {type: "helmet", armor: 6, durability: 650, texture: "armor/orihalkarmor.png"});
Item.createArmorItem("orihalkchestplate", "Orichulc chestplate", {name: "orihalkchestplate", meta: 0}, {type: "chestplate", armor: 15, durability: 750, texture: "armor/orihalkarmor.png"});
Item.createArmorItem("orihalkleggings", "Orichulc leggings", {name: "orihalkleggings", meta: 0}, {type: "leggings", armor: 11, durability: 700, texture: "armor/orihalkarmor0.png"});
Item.createArmorItem("orihalkboots", "Orichulc boots", {name: "orihalkboots", meta: 0}, {type: "boots", armor: 6, durability: 600, texture: "armor/orihalkarmor.png"});

Recipes.addShaped({id: ItemID.orihalksword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.orihalk, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.orihalkpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.orihalk, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.orihalkaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.orihalk, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.orihalkshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.orihalk, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.orihalkhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.orihalk, 0]);
Recipes.addShaped({id: ItemID.orihalkchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.orihalk, 0]);
Recipes.addShaped({id: ItemID.orihalkleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.orihalk, 0]);
Recipes.addShaped({id: ItemID.orihalkboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.orihalk, 0]);

IDRegistry.genItemID("starsword");
IDRegistry.genItemID("starpickaxe");
IDRegistry.genItemID("staraxe");
IDRegistry.genItemID("starshovel");
Item.createItem("starsword", "Star sword", {name: "starsword", meta: 0}, {stack: 1});
Item.createItem("starpickaxe", "Star pickaxe", {name: "starpickaxe", meta: 0}, {stack: 1});
Item.createItem("staraxe", "Star axe", {name: "staraxe", meta: 0}, {stack: 1});
Item.createItem("starshovel", "Star shovel", {name: "starshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("star", {durability: 3400, level: 14, efficiency: 500, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.starsword, "star", ToolType.sword);
ToolAPI.setTool(ItemID.starpickaxe, "star", ToolType.pickaxe);
ToolAPI.setTool(ItemID.staraxe, "star", ToolType.axe);
ToolAPI.setTool(ItemID.starshovel, "star", ToolType.shovel);

IDRegistry.genItemID("starhelmet");
IDRegistry.genItemID("starchestplate");
IDRegistry.genItemID("starleggings");
IDRegistry.genItemID("starboots");

Item.createArmorItem("starhelmet", "Star helmet", {name: "starhelmet", meta: 0}, {type: "helmet", armor: 10, durability: 650, texture: "armor/stararmor.png"});
Item.createArmorItem("starchestplate", "Star chestplate", {name: "starchestplate", meta: 0}, {type: "chestplate", armor: 20, durability: 750, texture: "armor/stararmor.png"});
Item.createArmorItem("starleggings", "Star leggings", {name: "starleggings", meta: 0}, {type: "leggings", armor: 15, durability: 700, texture: "armor/stararmor0.png"});
Item.createArmorItem("starboots", "Star boots", {name: "starboots", meta: 0}, {type: "boots", armor: 10, durability: 600, texture: "armor/stararmor.png"});



IDRegistry.genItemID("reaperscythe");
Item.createItem("reaperscythe", "Reaper scythe", {name: "reaperscythe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("reaper", {durability: 3400, level: 15, efficiency: 1000, damage: 60, enchantability: 14});
ToolAPI.setTool(ItemID.reaperscythe, "reaper", ToolType.sword);

IDRegistry.genItemID("reaperchestplate");

Item.createArmorItem("reaperchestplate", "Jacket of Reaper \n Stylish and fashionable!", {name: "reaperchestplate", meta: 0}, {type: "chestplate", armor: 25, durability: 100, texture: "armor/reaperarmor.png"});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.reaperscythe){ 
Entity.addEffect(victim, Native.PotionEffect.movementSlowdown, 3, 999999, true, true); 
}
});



IDRegistry.genItemID("ancientsword");
Item.createItem("ancientsword", "Ancient sword", {name: "ancientsword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ancient", {durability: 3400, level: 16, efficiency: 1500, damage: 80, enchantability: 14});
ToolAPI.setTool(ItemID.ancientsword, "ancient", ToolType.sword);


IDRegistry.genItemID("fireancientsword");
Item.createItem("fireancientsword", "Fire ancient sword", {name: "fireancientsword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("fireancient", {durability: 3400, level: 16, efficiency: 1500, damage: 85, enchantability: 14});
ToolAPI.setTool(ItemID.fireancientsword, "fireancient", ToolType.sword);


Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.fireancientsword){ 
Entity.setFire(victim, 200);
}
});


Recipes.addShaped({id: ItemID.fireancientsword, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.ancientsword, 0, 'b', 369, 0]);



IDRegistry.genItemID("latsword");
IDRegistry.genItemID("latpickaxe");
IDRegistry.genItemID("lataxe");
IDRegistry.genItemID("latshovel");
Item.createItem("latsword", "Brass sword", {name: "latsword", meta: 0}, {stack: 1});
Item.createItem("latpickaxe", "Brass pickaxe", {name: "latpickaxe", meta: 0}, {stack: 1});
Item.createItem("lataxe", "Brass axe", {name: "lataxe", meta: 0}, {stack: 1});
Item.createItem("latshovel", "Brass shovel", {name: "latshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("lat", {durability: 3400, level: 17, efficiency: 2300, damage: 90, enchantability: 14});
ToolAPI.setTool(ItemID.latsword, "lat", ToolType.sword);
ToolAPI.setTool(ItemID.latpickaxe, "lat", ToolType.pickaxe);
ToolAPI.setTool(ItemID.lataxe, "lat", ToolType.axe);
ToolAPI.setTool(ItemID.latshovel, "lat", ToolType.shovel);

IDRegistry.genItemID("lathelmet");
IDRegistry.genItemID("latchestplate");
IDRegistry.genItemID("latleggings");
IDRegistry.genItemID("latboots");

Item.createArmorItem("lathelmet", "Brass helmet", {name: "lathelmet", meta: 0}, {type: "helmet", armor: 20, durability: 650, texture: "armor/latarmor.png"});
Item.createArmorItem("latchestplate", "Brass chestplate", {name: "latchestplate", meta: 0}, {type: "chestplate", armor: 25, durability: 750, texture: "armor/latarmor.png"});
Item.createArmorItem("latleggings", "Brass leggings", {name: "latleggings", meta: 0}, {type: "leggings", armor: 21, durability: 700, texture: "armor/latarmor0.png"});
Item.createArmorItem("latboots", "Brass boots", {name: "latboots", meta: 0}, {type: "boots", armor: 20, durability: 600, texture: "armor/latarmor.png"});

Recipes.addShaped({id: ItemID.latsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.lat, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.latpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.lat, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.lataxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.lat, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.latshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.lat, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.lathelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.lat, 0]);
Recipes.addShaped({id: ItemID.latchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.lat, 0]);
Recipes.addShaped({id: ItemID.latleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.lat, 0]);
Recipes.addShaped({id: ItemID.latboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.lat, 0]);



IDRegistry.genItemID("voidsword");
IDRegistry.genItemID("voidpickaxe");
IDRegistry.genItemID("voidaxe");
IDRegistry.genItemID("voidshovel");
Item.createItem("voidsword", "Void sword", {name: "voidsword", meta: 0}, {stack: 1});
Item.createItem("voidpickaxe", "Void pickaxe", {name: "voidpickaxe", meta: 0}, {stack: 1});
Item.createItem("voidaxe", "Void axe", {name: "voidaxe", meta: 0}, {stack: 1});
Item.createItem("voidshovel", "Void shovel", {name: "voidshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("void", {durability: 3400, level: 18, efficiency: 4600, damage: 100, enchantability: 14});
ToolAPI.setTool(ItemID.voidsword, "void", ToolType.sword);
ToolAPI.setTool(ItemID.voidpickaxe, "void", ToolType.pickaxe);
ToolAPI.setTool(ItemID.voidaxe, "void", ToolType.axe);
ToolAPI.setTool(ItemID.voidshovel, "void", ToolType.shovel);

IDRegistry.genItemID("voidhelmet");
IDRegistry.genItemID("voidchestplate");
IDRegistry.genItemID("voidleggings");
IDRegistry.genItemID("voidboots");

Item.createArmorItem("voidhelmet", "Void helmet", {name: "voidhelmet", meta: 0}, {type: "helmet", armor: 40, durability: 650, texture: "armor/voidarmor.png"});
Item.createArmorItem("voidchestplate", "Void chestplate", {name: "voidchestplate", meta: 0}, {type: "chestplate", armor: 50, durability: 750, texture: "armor/voidarmor.png"});
Item.createArmorItem("voidleggings", "Void leggings", {name: "voidleggings", meta: 0}, {type: "leggings", armor: 42, durability: 700, texture: "armor/voidarmor0.png"});
Item.createArmorItem("voidboots", "Void boots", {name: "voidboots", meta: 0}, {type: "boots", armor: 40, durability: 600, texture: "armor/voidarmor.png"});


IDRegistry.genItemID("advancedvoidsword");
Item.createItem("advancedvoidsword", "Advanced void sword", {name: "advancedvoidsword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("advancedvoid", {durability: 3400, level: 19, efficiency: 7100, damage: 173, enchantability: 14});
ToolAPI.setTool(ItemID.advancedvoidsword, "advancedvoid", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.advancedvoidsword){ 
	Entity.addEffect(victim, Native.PotionEffect.movementSlowdown, 7, 999999, true, true); 
Entity.setFire(victim, 400);
}
});





































Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.olstonehelmet && chest.id == ItemID.olstonechestplate && legs.id == ItemID.olstoneleggings && boots.id == ItemID.olstoneboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 0, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 1, 100)
    }
    
    if (helmet.id == ItemID.rubyhelmet && chest.id == ItemID.rubychestplate && legs.id == ItemID.rubyleggings && boots.id == ItemID.rubyboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 0, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 0, 100)
    }
    
    
    if (helmet.id == ItemID.orihalkhelmet && chest.id == ItemID.orihalkchestplate && legs.id == ItemID.orihalkleggings && boots.id == ItemID.orihalkboots) {
    	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 1, 100)
    }
    
    if (helmet.id == ItemID.starhelmet && chest.id == ItemID.starchestplate && legs.id == ItemID.starleggings && boots.id == ItemID.starboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    if (chest.id == ItemID.reaperchestplate) {
    Player.setFlyingEnabled(true); 
    Entity.addEffect(Player.get(), Native.PotionEffect.blindness, 0, 20)
    }
    
    if (helmet.id == ItemID.lathelmet && chest.id == ItemID.latchestplate && legs.id == ItemID.latleggings && boots.id == ItemID.latboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    if (helmet.id == ItemID.voidhelmet && chest.id == ItemID.voidchestplate && legs.id == ItemID.voidleggings && boots.id == ItemID.voidboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    }
 });
 
 
 
 
 
 
 
 