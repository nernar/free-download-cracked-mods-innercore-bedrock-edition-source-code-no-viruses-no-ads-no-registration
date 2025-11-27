IDRegistry.genItemID("arkeniumHelmet");
Item.createArmorItem("arkeniumHelmet", "Arkenium Helmet", {name: "arkenium_helmet"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/arkenium_layerb_1.png"});

IDRegistry.genItemID("arkeniumChestplate");
Item.createArmorItem("arkeniumChestplate", "Arkenium Chestplate", {name: "arkenium_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/arkenium_layerb_1.png"});

IDRegistry.genItemID("arkeniumLeggings");
Item.createArmorItem("arkeniumLeggings", "Arkenium Leggings", {name: "arkenium_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/arkenium_layer_2.png"});

IDRegistry.genItemID("arkeniumBoots");
Item.createArmorItem("arkeniumBoots", "Arkenium Boots", {name: "arkenium_boots"}, {type: "boots", armor: 2, durability: 176, texture: "armor/arkenium_layerb_1.png"});

Item.addRepairItemIds(ItemID.arkeniumHelmet, [ItemID.plateArkenium, ItemID.arkeniumHelmet]);
Item.addRepairItemIds(ItemID.arkeniumChestplate, [ItemID.plateArkenium, ItemID.arkeniumChestplate]);
Item.addRepairItemIds(ItemID.arkeniumLeggings, [ItemID.plateArkenium, ItemID.arkeniumLeggings]);
Item.addRepairItemIds(ItemID.arkeniumBoots, [ItemID.plateArkenium, ItemID.arkeniumBoots]);


Recipes.addShaped({id: ItemID.arkeniumHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.plateArkenium, 0]);

Recipes.addShaped({id: ItemID.arkeniumChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.plateArkenium, 0]);

Recipes.addShaped({id: ItemID.arkeniumLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.plateArkenium, 0]);

Recipes.addShaped({id: ItemID.arkeniumBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.plateArkenium, 0]);

