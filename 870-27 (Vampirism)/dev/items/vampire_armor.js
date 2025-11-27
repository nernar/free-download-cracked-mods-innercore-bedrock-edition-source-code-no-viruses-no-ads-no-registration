IDRegistry.genItemID("vampireArmorHelmet");
IDRegistry.genItemID("vampireArmorChestplate");
IDRegistry.genItemID("vampireArmorLeggings");
IDRegistry.genItemID("vampireArmorBoots");

Item.createArmorItem("vampireArmorHelmet", "Vampire's helmet", {name: "vampireArmorHelmet", meta: 0}, {isTech: false, armor: 2, durability: 165, stack: 1, type: "helmet", texture: "armor/vampireArmor_1.png"});
Item.createArmorItem("vampireArmorChestplate", "Vampire's chestplate", {name: "vampireArmorChestplate", meta: 0}, {isTech: false, armor: 6, durability: 240, stack: 1, type: "chestplate", texture: "armor/vampireArmor_1.png"});
Item.createArmorItem("vampireArmorLeggings", "Vampire's leggings", {name: "vampireArmorLeggings", meta: 0}, {isTech: false, armor: 5, durability: 225, stack: 1, type: "leggings", texture: "armor/vampireArmor_2.png"});
Item.createArmorItem("vampireArmorBoots", "Vampire's boots", {name: "vampireArmorBoots", meta: 0}, {isTech: false, armor: 2, durability: 195, stack: 1, type: "boots", texture: "armor/vampireArmor_1.png"});

Recipes.addShaped({id: ItemID.vampireArmorHelmet, count: 1, data: 0},
	["iii", "ibi"],
	['i', VanillaItemID.iron_ingot, 0, 'b', ItemID.bloodBottle, 3]
);
Recipes.addShaped({id: ItemID.vampireArmorChestplate, count: 1, data: 0},
	["ibi", "iii", "iii"],
	['i', VanillaItemID.iron_ingot, 0, 'b', ItemID.bloodBottle, 3]
);
Recipes.addShaped({id: ItemID.vampireArmorLeggings, count: 1, data: 0},
	["iii", "ibi", "i i"],
	['i', VanillaItemID.iron_ingot, 0, 'b', ItemID.bloodBottle, 3]
);
Recipes.addShaped({id: ItemID.vampireArmorBoots, count: 1, data: 0},
	["ibi", "i i"],
	['i', VanillaItemID.iron_ingot, 0, 'b', ItemID.bloodBottle, 3]
);