IDRegistry.genItemID("desert_camo_helmet");
IDRegistry.genItemID("desert_camo_body");
IDRegistry.genItemID("desert_camo_legs");
IDRegistry.genItemID("desert_camo_boots");

Item.createArmorItem("desert_camo_helmet", "Desert Camouflage",
   {name: "Desert_Camo_Helmet"},
   {type: "helmet",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Desert_Camo_1.png"});
Item.createArmorItem("desert_camo_body", "Desert Camouflage",
   {name: "Desert_Camo_Body"},
   {type: "chestplate",
   armor: 3,
   durability: 768,
   texture: "textures/armor/Desert_Camo_1.png"});
Item.createArmorItem("desert_camo_legs", "Desert Camouflage",
   {name: "Desert_Camo_Legs"},
   {type: "leggings",
   armor: 2,
   durability: 640,
   texture: "textures/armor/Desert_Camo_2.png"});
Item.createArmorItem("desert_camo_boots", "Desert Camouflage",
   {name: "Desert_Camo_Boots"},
   {type: "boots",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Desert_Camo_1.png"});

Item.addRepairItemIds(ItemID.desert_camo_helmet, [ItemID.desert_camo_cloth]);
Item.addRepairItemIds(ItemID.desert_camo_body, [ItemID.desert_camo_cloth]);
Item.addRepairItemIds(ItemID.desert_camo_legs, [ItemID.desert_camo_cloth]);
Item.addRepairItemIds(ItemID.desert_camo_boots, [ItemID.desert_camo_cloth]);

Item.addCreativeGroup("desert_camo", Translation.translate("Desert Camouflage"), [
	ItemID.desert_camo_helmet,
	ItemID.desert_camo_body,
	ItemID.desert_camo_legs,
   ItemID.desert_camo_boots
]);