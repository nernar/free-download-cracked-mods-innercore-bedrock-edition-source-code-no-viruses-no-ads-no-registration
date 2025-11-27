IDRegistry.genItemID("magnemiveHelmet");
Item.createArmorItem("magnemiveHelmet", "Magnemive Helmet", {name: "magnemivehelmet"}, {type: "helmet", armor: 4, durability: 2300, texture: "armor/magnemive_layer_1.png"});

IDRegistry.genItemID("magnemiveChestplate");
Item.createArmorItem("magnemiveChestplate", "Magnemive Chestplate", {name: "magnemivechestplate"}, {type: "chestplate", armor: 9, durability: 2520, texture: "armor/magnemive_layer_1.png"});

IDRegistry.genItemID("magnemiveLeggings");
Item.createArmorItem("magnemiveLeggings", "Magnemive Leggings", {name: "magnemiveleggins"}, {type: "leggings", armor: 7, durability: 2250, texture: "armor/magnemive_layer_2.png"});

IDRegistry.genItemID("magnemiveBoots");
Item.createArmorItem("magnemiveBoots", "Magnemive Boots", {name: "magnemiveboots"}, {type: "boots", armor: 4, durability: 2150, texture: "armor/magnemive_layer_1.png"});

Item.addRepairItemIds(ItemID.magnemiveHelmet, [ItemID.magnemiveIngot, ItemID.magnemiveHelmet]);
Item.addRepairItemIds(ItemID.magnemiveChestplate, [ItemID.magnemiveIngot, ItemID.magnemiveChestplate]);
Item.addRepairItemIds(ItemID.magnemiveLeggings, [ItemID.magnemiveIngot, ItemID.magnemiveLeggings]);
Item.addRepairItemIds(ItemID.magnemiveBoots, [ItemID.magnemiveIngot, ItemID.magnemiveBoots]);

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.magnemiveHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.magnemiveIngot, 0]);

Recipes.addShaped({id: ItemID.magnemiveChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.magnemiveIngot, 0]);

Recipes.addShaped({id: ItemID.magnemiveLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.magnemiveIngot, 0]);

Recipes.addShaped({id: ItemID.magnemiveBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.magnemiveIngot, 0]);

IDRegistry.genItemID("spikewalkerBoots");
Item.createArmorItem("spikewalkerBoots", "Spikewalker Boots", {name: "magnemiveboots"}, {type: "boots", armor: 4, durability: 1000, texture: "armor/spikewalkerboots_layer_1.png"});

Recipes.addShaped({id: ItemID.spikewalkerBoots, count: 1, data: 0}, [
    "x x",
    "y y",
    "z z"
], ['x', ItemID.magnemiveIngot, 0, 'y', ItemID.mantrLeather, 0, 'z', ItemID.fruskGel, 0]);
});



IDRegistry.genItemID("fluroomiteHelmet");
Item.createArmorItem("fluroomiteHelmet", "Fluroomite Helmet", {name: "fluroomitehelmet"}, {type: "helmet", armor: 5, durability: 2400, texture: "armor/fluroomite__layer_1.png"});

IDRegistry.genItemID("fluroomiteChestplate");
Item.createArmorItem("fluroomiteChestplate", "Fluroomite Chestplate", {name: "fluroomitechestplate"}, {type: "chestplate", armor: 9, durability: 2620, texture: "armor/fluroomite__layer_1.png"});

IDRegistry.genItemID("fluroomiteLeggings");
Item.createArmorItem("fluroomiteLeggings", "Fluroomite Leggings", {name: "fluroomiteleggins"}, {type: "leggings", armor: 8, durability: 2350, texture: "armor/fluroomite__layer_2.png"});

IDRegistry.genItemID("fluroomiteBoots");
Item.createArmorItem("fluroomiteBoots", "Fluroomite Boots", {name: "fluroomiteboots"}, {type: "boots", armor: 5, durability: 2250, texture: "armor/fluroomite__layer_1.png"});

Item.addRepairItemIds(ItemID.fluroomiteHelmet, [ItemID.fluroomiteIngot, ItemID.fluroomiteHelmet]);
Item.addRepairItemIds(ItemID.fluroomiteChestplate, [ItemID.fluroomiteIngot, ItemID.fluroomiteChestplate]);
Item.addRepairItemIds(ItemID.fluroomiteLeggings, [ItemID.fluroomiteIngot, ItemID.fluroomiteLeggings]);
Item.addRepairItemIds(ItemID.fluroomiteBoots, [ItemID.fluroomiteIngot, ItemID.fluroomiteBoots]);

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.fluroomiteHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.fluroomiteIngot, 0]);

Recipes.addShaped({id: ItemID.fluroomiteChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.fluroomiteIngot, 0]);

Recipes.addShaped({id: ItemID.fluroomiteLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.fluroomiteIngot, 0]);

Recipes.addShaped({id: ItemID.fluroomiteBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.fluroomiteIngot, 0]);
});