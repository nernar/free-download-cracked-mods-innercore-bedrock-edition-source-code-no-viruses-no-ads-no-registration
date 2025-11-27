IDRegistry.genItemID("smokeMask");
Item.createArmorItem("smokeMask", "Mask", {name: "mask"}, {type: "helmet", armor: 2, durability: 132, texture: "armor/mask__layer_1.png"});

IDRegistry.genItemID("smokeGoogles");
Item.createArmorItem("smokeGoogles", "Googles", {name: "goggles"}, {type: "helmet", armor: 2, durability: 132, texture: "armor/goggles__layer_1.png"});

IDRegistry.genItemID("smokeMaskedGoogles");
Item.createArmorItem("smokeMaskedGoogles", "Mask & Googles", {name: "mask_and_goggles"}, {type: "helmet", armor: 2, durability: 250, texture: "armor/mask__layer_1.png"});





Recipes.addShaped({id: ItemID.smokeMask, count: 1, data: 0}, [
    "aaa",
    "cbc",
    "aaa"
], ['a', 334, 0, 'b', ItemID.charcoalActivatedFilter, 0, 'c', 287, 0]);

Recipes.addShaped({id: ItemID.smokeGoogles, count: 1, data: 0}, [
    "bcb",
    "aca",
    "bcb"
], ['a', 334, 0, 'b', 266, 0, 'c', ItemID.glassBit, 0]);

Recipes.addShaped({id: ItemID.smokeMaskedGoogles, count: 1, data: 0}, [
    "b",
    "a",
], ['a', ItemID.smokeMask, 0, 'b', ItemID.smokeGoogles, 0]);

Item.addRepairItemIds(ItemID.smokeMask, [ItemID.charcoalActivatedFilter, ItemID.smokeMask]);
Item.addRepairItemIds(ItemID.smokeGoogles, [ItemID.glassBit, ItemID.smokeGoogles]);
Item.addRepairItemIds(ItemID.smokeMaskedGoogles, [ItemID.charcoalActivatedFilter, ItemID.glassBit, ItemID.smokeMaskedGoogles]);