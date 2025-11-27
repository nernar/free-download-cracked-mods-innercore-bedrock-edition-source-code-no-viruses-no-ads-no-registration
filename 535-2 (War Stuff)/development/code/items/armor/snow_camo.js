IDRegistry.genItemID("snow_camo_helmet");
IDRegistry.genItemID("snow_camo_body");
IDRegistry.genItemID("snow_camo_legs");
IDRegistry.genItemID("snow_camo_boots");

Item.createArmorItem("snow_camo_helmet", "Snow Camouflage",
   {name: "Snow_Camo_Helmet"},
   {type: "helmet",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Snow_Camo_1.png"});
Item.createArmorItem("snow_camo_body", "Snow Camouflage",
   {name: "Snow_Camo_Body"},
   {type: "chestplate",
   armor: 3,
   durability: 768,
   texture: "textures/armor/Snow_Camo_1.png"});
Item.createArmorItem("snow_camo_legs", "Snow Camouflage",
   {name: "Snow_Camo_Legs"},
   {type: "leggings",
   armor: 2,
   durability: 640,
   texture: "textures/armor/Snow_Camo_2.png"});
Item.createArmorItem("snow_camo_boots", "Snow Camouflage",
   {name: "Snow_Camo_Boots"},
   {type: "boots",
   armor: 1,
   durability: 512,
   texture: "textures/armor/Snow_Camo_1.png"});

Item.addRepairItemIds(ItemID.snow_camo_helmet, [ItemID.snow_camo_cloth]);
Item.addRepairItemIds(ItemID.snow_camo_body, [ItemID.snow_camo_cloth]);
Item.addRepairItemIds(ItemID.snow_camo_legs, [ItemID.snow_camo_cloth]);
Item.addRepairItemIds(ItemID.snow_camo_boots, [ItemID.snow_camo_cloth]);

Item.addCreativeGroup("snowCamo", Translation.translate("Snow Camouflage"), [
	ItemID.snow_camo_helmet,
	ItemID.snow_camo_body,
	ItemID.snow_camo_legs,
   ItemID.snow_camo_boots
]);

Recipes.addShaped({id: ItemID.snow_camo_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.snowCamoCloth, 0]);

Recipes.addShaped({id: ItemID.snow_camo_body, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.snow_camo_cloth, 0]);

Recipes.addShaped({id: ItemID.snow_camo_legs, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.snow_camo_cloth, 0]);

Recipes.addShaped({id: ItemID.snow_camo_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.snow_camo_cloth, 0]);
