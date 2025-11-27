IDRegistry.genItemID("desert_camo_cloth");
Item.createItem("desert_camo_cloth", "Desert Camouflage Cloth", {name: "Desert_Camo_Cloth"});

IDRegistry.genItemID("forest_camo_cloth");
Item.createItem("forest_camo_cloth", "Forest Camouflage Cloth", {name: "Forest_Camo_Cloth"});

IDRegistry.genItemID("snow_camo_cloth");
Item.createItem("snow_camo_cloth", "Snow Camouflage Cloth", {name: "Snow_Camo_Cloth"});

Item.addCreativeGroup("cloth", Translation.translate("Cloth"), [
	ItemID.desert_camo_cloth,
	ItemID.forest_camo_cloth,
	ItemID.snow_camo_cloth
]);