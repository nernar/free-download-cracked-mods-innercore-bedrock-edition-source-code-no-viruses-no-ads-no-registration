IDRegistry.genItemID("forest_camo_helmet");
IDRegistry.genItemID("forest_camo_body");
IDRegistry.genItemID("forest_camo_legs");
IDRegistry.genItemID("forest_camo_boots");

Item.createArmorItem("forest_camo_helmet", "Forest Camouflage",
   {name: "Forest_Camo_Helmet"},
   {type: "helmet",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Forest_Camo_1.png"});
Item.createArmorItem("forest_camo_body", "Forest Camouflage",
   {name: "Forest_Camo_Body"},
   {type: "chestplate",
   armor: 3,
   durability: 768,
   texture: "textures/armor/Forest_Camo_1.png"});
Item.createArmorItem("forest_camo_legs", "Forest Camouflage",
   {name: "Forest_Camo_Legs"},
   {type: "leggings",
   armor: 2,
   durability: 640,
   texture: "textures/armor/Forest_Camo_2.png"});
Item.createArmorItem("forest_camo_boots", "Forest Camouflage",
   {name: "Forest_Camo_Boots"},
   {type: "boots",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Forest_Camo_1.png"});

Item.addRepairItemIds(ItemID.forest_camo_helmet, [ItemID.forest_camo_cloth]);
Item.addRepairItemIds(ItemID.forest_camo_body, [ItemID.forest_camo_cloth]);
Item.addRepairItemIds(ItemID.forest_camo_legs, [ItemID.forest_camo_cloth]);
Item.addRepairItemIds(ItemID.forest_camo_boots, [ItemID.forest_camo_cloth]);

Item.addCreativeGroup("forest_camo", Translation.translate("Forest Camouflage"), [
	ItemID.forest_camo_helmet,
	ItemID.forest_camo_body,
	ItemID.forest_camo_legs,
   ItemID.forest_camo_boots
]);