IDRegistry.genItemID("Amethyst");
Item.createItem("Amethyst", "Amethyst Crystal", {name: "AmethystCrystal", meta: 0});

IDRegistry.genItemID("SItem");
Item.createItem("SItem", "Spore", {name: "SporeItem", meta: 0});

IDRegistry.genItemID("RimeCryst");
Item.createItem("RimeCryst", "Rime Crystal", {name: "RimeCrystal", meta: 0});

IDRegistry.genItemID("BackCryst");
Item.createItem("BackCryst", "Back Crystal", {name: "BackAmethyst", meta: 0},{isTech:false,stack: 1});

IDRegistry.genItemID("BSFang");
Item.createItem("BSFang", "Bone-Spider Fang", {name: "BoneSpiderFang", meta: 0},{isTech:false,stack: 8});

IDRegistry.genItemID("Witherbone");
Item.createItem("Witherbone", "Wither bone", {name: "WitherBone", meta: 0});

IDRegistry.genItemID("WitherboneB");
Item.createItem("WitherboneB", "Wither bone blazed", {name: "blazed_wither_bone", meta: 0});

IDRegistry.genItemID("WitherboneF");
Item.createItem("WitherboneF", "Wither bone frosted", {name: "frosted_wither_bone", meta: 0});

Item.addCreativeGroup("Bones", "Bones", [ItemID.Witherbone, ItemID.WitherboneB, ItemID.WitherboneF]);

IDRegistry.genItemID("Witherdust");
Item.createItem("Witherdust", "Wither dust", {name: "WitherDust", meta: 0});

IDRegistry.genItemID("Netherbrickf");
Item.createItem("Netherbrickf", "Nether brick Fiery", {name: "FieryNetherBrick", meta: 0});

IDRegistry.genItemID("NetherbrickGl");
Item.createItem("NetherbrickGl", "Nether brick Gloomy", {name: "GloomyNetherBrick", meta: 0});

IDRegistry.genItemID("NetherbrickIcy");
Item.createItem("NetherbrickIcy", "Nether brick Icy", {name: "IcyNetherBrick", meta: 0});

IDRegistry.genItemID("NetherbrickLi");
Item.createItem("NetherbrickLi", "Nether brick Lively", {name: "LivelyNetherBrick", meta: 0});

Item.addCreativeGroup("Bricks", "Bricks", [ItemID.Netherbrickf, ItemID.NetherbrickGl, ItemID.NetherbrickIcy, ItemID.NetherbrickLi]);

IDRegistry.genItemID("Ghastqt");
Item.createItem("Ghastqt", "Ghast Quen tears", {name: "GhastQuenTears", meta:0},{isTech:false,stack: 4});

IDRegistry.genItemID("HideBl");
Item.createItem("HideBl", "Black Salamander Hide", {name: "HideSalamanderBlack", meta: 0});

IDRegistry.genItemID("HideSo");
Item.createItem("HideSo", "Orange Salamander Hide", {name: "HideSalamanderOrrange", meta: 0});
//silver

IDRegistry.genItemID("ingotSilver");
Item.createItem("ingotSilver", "Silver Ingot", {name: "ingot_silver"});