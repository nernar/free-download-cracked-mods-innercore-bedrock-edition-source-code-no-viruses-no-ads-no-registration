/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 10
*/



// file: header.js

IMPORT("ArmorLib");




// file: translation.js

Translation.addTranslation("Shiny Prismarine", {ru: "Сияющий Осколок Призмарина"});
Translation.addTranslation("Blue Prismarine", {ru: "Синий Осколок Призмарина"});
Translation.addTranslation("Red Prismarine", {ru: "Красный Осколок Призмарина"});
Translation.addTranslation("Green Prismarine", {ru: "Зеленый Осколок Призмарина"});
Translation.addTranslation("Blue Prismarine Helmet", {ru: "Синий Призмариновый Шлем"});
Translation.addTranslation("Blue Prismarine Chestplate", {ru: "Синий Призмариновый Нагрудник"});
Translation.addTranslation("Blue Prismarine Leggings", {ru: "Синие Призмариновые Поножи"});
Translation.addTranslation("Blue Prismarine Boots", {ru: "Синие Призмариновые Ботинки"});
Translation.addTranslation("Red Prismarine Helmet", {ru: "Красный Призмариновый Шлем"});
Translation.addTranslation("Red Prismarine Chestplate", {ru: "Красный Призмариновый Нагрудник"});
Translation.addTranslation("Red Prismarine Leggings", {ru: "Красные Призмариновые Поножи"});
Translation.addTranslation("Red Prismarine Boots", {ru: "Красные Призмариновые Ботинки"});
Translation.addTranslation("Green Prismarine Helmet", {ru: "Зеленый Призмариновый Шлем"});
Translation.addTranslation("Green Prismarine Chestplate", {ru: "Зеленый Призмариновый Нагрудник"});
Translation.addTranslation("Green Prismarine Leggings", {ru: "Зеленые Призмариновые Поножи"});
Translation.addTranslation("Green Prismarine Boots", {ru: "Зеленые Призмариновые Ботинки"});
Translation.addTranslation("Shards", {ru: "Осколки"});
Translation.addTranslation("Armors", {ru: "Броня"});




// file: groups.js

Item.addCreativeGroup("shard", Translation.translate("Shards"), [
	ItemID.bluePrismarine,
	ItemID.redPrismarine,
	ItemID.greenPrismarine,
	ItemID.shinyPrismarine,
]);

Item.addCreativeGroup("armor", Translation.translate("Armors"), [
	ItemID.blueprismarineHelmet,
	ItemID.blueprismarineChestplate,
	ItemID.blueprismarineLeggings,
	ItemID.blueprismarineBoots,
    ItemID.greenprismarineHelmet,
	ItemID  .greenprismarineChestplate,
	ItemID.greenprismarineLeggings,
	ItemID.greenprismarineBoots,
    ItemID.redprismarineHelmet,
	ItemID.redprismarineChestplate,
	ItemID.redprismarineLeggings,
	ItemID.redprismarineBoots,

]);




// file: items/red.js

IDRegistry.genItemID("redPrismarine");
Item.createItem("redPrismarine", "Red Prismarine", {name: "red_prismarine", meta: 0});

Recipes.addShaped({id: ItemID.redPrismarine, count: 1, data: 0}, 
[" r ", 
 "rsr",
 " r " ],
["r", 351, 1, "s", ItemID.greenPrismarine, 0]);




// file: items/green.js

IDRegistry.genItemID("greenPrismarine");
Item.createItem("greenPrismarine", "Green Prismarine", {name: "green_prismarine", meta: 0});

Recipes.addShaped({id: ItemID.greenPrismarine, count: 1, data: 0}, 
[" g ", 
 "gsg",
 " g " ],
["g", 351, 2, "s", ItemID.bluePrismarine, 0]);




// file: items/blue.js

IDRegistry.genItemID("bluePrismarine");
Item.createItem("bluePrismarine", "Blue Prismarine", {name: "blue_prismarine", meta: 0});

Recipes.addShaped({id: ItemID.bluePrismarine, count: 1, data: 0}, 
[" b ", 
 "bsb",
 " b " ],
["b", 351, 4, "s", ItemID.shinyPrismarine, 0]);




// file: items/shiny.js

IDRegistry.genItemID("shinyPrismarine");
Item.createItem("shinyPrismarine", "Shiny Prismarine", {name: "shiny_prismarine", meta: 0});

Recipes.addShaped({id: ItemID.shinyPrismarine, count: 1, data: 0}, 
["gq", 
 "qp" ],
["g", 89, 0, "q", 155, 0, "p", 422, 0]);





// file: armor/redpris.js

IDRegistry.genItemID("redprismarineHelmet");
IDRegistry.genItemID("redprismarineChestplate");
IDRegistry.genItemID("redprismarineLeggings");
IDRegistry.genItemID("redprismarineBoots");

Item.createArmorItem("redprismarineHelmet", "Red Prismarine Helmet", {name:"red_prismarine_helmet"}, {type: "helmet", armor: 5, durablity: 149, texture: "armor/red_1.png"});
Item.createArmorItem("redprismarineChestplate", "Red Prismarine Chestplate", {name: "red_prismarine_chestplate"}, {type: "chestplate", armor: 7, durablity: 216, texture: "armor/red_1.png"});
Item.createArmorItem("redprismarineLeggings", "Red Prismarine Leggings", {name:"red_prismarine_leggings"}, {type: "leggings", armor: 6, durablity: 203, texture: "armor/red_2.png"});
Item.createArmorItem("redprismarineBoots", "Red Prismarine Boots", {name: "red_prismarine_boots"}, {type: "boots", armor:3, durablity:149, texture:"armor/red_1.png"});

Recipes.addShaped({id: ItemID.redprismarineHelmet, count: 1, data: 0}, [
    "xxx",
	"x x"
], ["x", ItemID.redPrismarine, 0]);

Recipes.addShaped({id: ItemID.redprismarineChestplate, count: 1, data: 0}, [
    "x x",
	"xxx",
	"xxx"
], ["x", ItemID.redPrismarine, 0]);

Recipes.addShaped({id: ItemID.redprismarineLeggings, count: 1, data:0}, [
    "xxx",
	"x x",
	"x x"
], ["x", ItemID.redPrismarine, 0]);

Recipes.addShaped({id: ItemID.redprismarineBoots, count: 1, data: 0}, [
    "x x",
	"x x"
], ["x", ItemID.redPrismarine, 0]);

PRIS.setMode({
	id: ItemID.redprismarineHelmet,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.redprismarineChestplate,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.redprismarineLeggings,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.redprismarineBoots,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});




// file: armor/bluepris.js

IDRegistry.genItemID("blueprismarineHelmet");
IDRegistry.genItemID("blueprismarineChestplate");
IDRegistry.genItemID("blueprismarineLeggings");
IDRegistry.genItemID("blueprismarineBoots");

Item.createArmorItem("blueprismarineHelmet", "Blue Prismarine Helmet", {name: "blue_prismarine_helmet"}, {type: "helmet", armor: 4, durability: 161, texture: "armor/blue_1.png"});
Item.createArmorItem("blueprismarineChestplate", "Blue Prismarine Chestplate", {name: "blue_prismarine_chestplate"}, {type: "chestplate", armor: 5, durability: 221, texture: "armor/blue_1.png"});
Item.createArmorItem("blueprismarineLeggings", "Blue Prismarine Leggings", {name: "blue_prismarine_leggings"}, {type: "leggings", armor: 5, durability: 209, texture: "armor/blue_2.png"});
Item.createArmorItem("blueprismarineBoots", "Blue Prismarine Boots", {name: "blue_prismarine_boots"}, {type: "boots", armor: 4, durability: 184, texture: "armor/blue_1.png"});

Recipes.addShaped({id: ItemID.blueprismarineHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.bluePrismarine, 0]);

Recipes.addShaped({id: ItemID.blueprismarineChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.bluePrismarine, 0]);

Recipes.addShaped({id: ItemID.blueprismarineLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.bluePrismarine, 0]);

Recipes.addShaped({id: ItemID.blueprismarineBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.bluePrismarine, 0]);

PRIS.setMode({
	id: ItemID.blueprismarineHelmet,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.blueprismarineChestplate,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.blueprismarineLeggings,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.blueprismarineBoots,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});




// file: armor/greenpris.js

IDRegistry.genItemID("greenprismarineHelmet");
IDRegistry.genItemID("greenprismarineChestplate");
IDRegistry.genItemID("greenprismarineLeggings");
IDRegistry.genItemID("greenprismarineBoots");

Item.createArmorItem("greenprismarineHelmet", "Green Prismarine Helmet", {name: "green_prismarine_helmet"}, {type: "helmet", armor: 4, durability: 161, texture: "armor/green_1.png"});
Item.createArmorItem("greenprismarineChestplate", "Green Prismarine Chestplate", {name: "green_prismarine_chestplate"}, {type: "chestplate", armor: 5, durability: 221, texture: "armor/green_2.png"});
Item.createArmorItem("greenprismarineLeggings", "Green Prismarine Leggings", {name: "green_prismarine_leggings"}, {type: "leggings", armor: 5, durability: 209, texture: "armor/green_2.png"});
Item.createArmorItem("greenprismarineBoots", "Green Prismarine Boots", {name: "green_prismarine_boots"}, {type: "boots", armor: 4, durability: 184, texture: "armor/green_1.png"});

Recipes.addShaped({id: ItemID.greenprismarineHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.greenPrismarine, 0]);

Recipes.addShaped({id: ItemID.greenprismarineChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.greenPrismarine, 0]);

Recipes.addShaped({id: ItemID.greenprismarineLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.greenPrismarine, 0]);

Recipes.addShaped({id: ItemID.greenprismarineBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.greenPrismarine, 0]);

PRIS.setMode({
	id: ItemID.greenprismarineHelmet,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.greenprismarineChestplate,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.greenprismarineLeggings,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.greenprismarineBoots,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});




