IDRegistry.genBlockID("leadOre");
Block.createBlock("leadOre", [
	{name: "Свинцовая руда", texture: [["lead_ore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.leadOre, "stone", 1, true);
Block.setDestroyTime(BlockID.leadOre, 3);
Block.setDestroyLevel("leadOre", 1);

IDRegistry.genBlockID("copperOre");
Block.createBlock("copperOre", [
	{name: "Медная руда", texture: [["copper_ore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.leadOre, "stone", 2, true);
Block.setDestroyTime(BlockID.leadOre, 4);
Block.setDestroyLevel("leadOre", 2);

IDRegistry.genBlockID("aluminiumOre");
Block.createBlock("aluminiumOre", [
	{name: "Алюминиевая Руда", texture: [["aluminium_ore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.aluminiumOre, "stone", 2, true);
Block.setDestroyTime(BlockID.aluminiumOre, 4);
Block.setDestroyLevel("aluminiumOre", 2);

IDRegistry.genBlockID("tinOre");
Block.createBlock("tinOre", [
	{name: "Оловяная Руда", texture: [["tin_ore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tinOre, "stone", 2, true);
Block.setDestroyTime(BlockID.tinOre, 4);
Block.setDestroyLevel("tinOre", 2);

IDRegistry.genBlockID("zinkOre");
Block.createBlock("zinkOre", [
	{name: "Цинковая руда", texture: [["zink_ore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.zinkOre, "stone", 4, true);
Block.setDestroyTime(BlockID.zinkOre, 6);
Block.setDestroyLevel("zinkOre", 4);

IDRegistry.genBlockID("litiumOre");
Block.createBlock("litiumOre", [
	{name: "Литиевая Руда", texture: [["litium_ore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.litiumOre, "stone", 3, true);
Block.setDestroyTime(BlockID.litiumOre, 6);
Block.setDestroyLevel("litiumOre", 3);


IDRegistry.genBlockID("solidResin");
Block.createBlock("solidResin", [
	{name: "Твердая смола", texture: [["solid_resin", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.solidResin, "stone", 3, true);
Block.setDestroyTime(BlockID.solidResin, 3);
Block.setDestroyLevel("solidResin", 3);

IDRegistry.genBlockID("asphalt");
Block.createBlockWithRotation("asphalt", [
	{name: "асфальт", texture: [["asphalt", 1], ["asphalt", 0],["asphalt", 1], ["asphalt", 1], ["asphalt", 1], ["asphalt", 1]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.asphalt, "stone", 2, true);
Block.setDestroyTime(BlockID.asphalt, 2);
Block.setDestroyLevel("asphalt", 2);

IDRegistry.genItemID("lithiumpiece");
Item.createItem("lithiumpiece", "Кусочек лития", {name: "litiumpiece", meta: 0}, {stack: 64});

IDRegistry.genItemID("zinkpiece");
Item.createItem("zinkpiece", "Кусочек цинка", {name: "zink", meta: 0}, {stack: 64});

IDRegistry.genItemID("coalplast");
Item.createItem("coalplast", "Угольная пластина", {name: "coalplast", meta: 0}, {stack: 16});

IDRegistry.genItemID("litiumplast");
Item.createItem("litiumplast", "Литиевая пластина", {name: "litiumplast", meta: 0}, {stack: 16});

IDRegistry.genItemID("tin");
Item.createItem("tin", "Оловяный слиток", {name: "tin", meta: 0}, {stack: 64});

IDRegistry.genItemID("tinpiece");
Item.createItem("tinpiece", "Кусочек олова", {name: "tinpiece", meta: 0}, {stack: 64});

IDRegistry.genItemID("aluminium");
Item.createItem("aluminium", "Алюминиевый слиток", {name: "aluminium", meta: 0}, {stack: 64});

IDRegistry.genItemID("aluminiumpiece");
Item.createItem("aluminiumpiece", "Кусочек алюминия", {name: "aluminiumpiece", meta: 0}, {stack: 64});

IDRegistry.genItemID("coalpiece");
Item.createItem("coalpiece", "Кусочек угля", {name: "coalpiece", meta: 0}, {stack: 64});

IDRegistry.genItemID("xenon");
Item.createItem("xenon", "Ксеноновая частица", {name: "xenon", meta: 0}, {stack: 64});

IDRegistry.genItemID("copperingot");
Item.createItem("copperingot", "Медный Слиток", {name: "copper_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("copperpiece");
Item.createItem("copperpiece", "Кусочек Меди", {name: "copper", meta: 0}, {stack: 64});


IDRegistry.genItemID("leadIngot");
Item.createItem("leadIngot", "Свинцовый слиток", {name: "lead_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("cabel");
Item.createItem("cabel", "Маленький провод", {name: "cabel", meta: 0}, {stack: 64});

IDRegistry.genItemID("bigcabel");
Item.createItem("bigcabel", "Большой провод", {name: "bigcabel", meta: 0}, {stack: 64});

IDRegistry.genItemID("advancedbattery");
Item.createItem("advancedbattery", "Литиевая Батарея", {name: "lithium_battery", meta: 0}, {stack: 16});

IDRegistry.genItemID("battery");
Item.createItem("battery", "Обычная Батарея", {name: "battery", meta: 0}, {stack: 32});


IDRegistry.genItemID("ironNugget");
Item.createItem("ironNugget", "Железный кусочек", {name: "iron_nugget", meta: 0}, {stack: 64});

IDRegistry.genItemID("ironHammer");
Item.createItem("ironHammer", "Железный Молот", {name: "iron_hammer", meta: 0}, {stack: 16});

IDRegistry.genItemID("cutter");
Item.createItem("cutter", "Алюминивые кусачки", {name: "cutter", meta: 0}, {stack: 16});

IDRegistry.genItemID("bucketWithTar");
Item.createItem("bucketWithTar", "Ведро с жидкой смолой", {name: "bucket_with_tar", meta: 0}, {stack: 1});

IDRegistry.genItemID("hardResinBucket");
Item.createItem("hardResinBucket", "Ведро с твердой смолой", {name: "hard_resin_bucket", meta: 0}, {stack: 1});

importLib("ToolType", "*");

IDRegistry.genItemID("leadSword");
Item.createItem("leadSword", "Свинцовый меч", {name: "lead_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("leadSword", {durability: 100, level: 0, efficiency: 2, damage: 3, enchantability: 14});
ToolAPI.setTool(ItemID.leadSword, "leadSword", ToolType.sword);

IMPORT("BackpackAPI"); 

IDRegistry.genItemID("backpack"); 

Item.createItem("backpack", "Рюкзак", {name: "backpack", meta: 0}, {stack: 1}); 

BackpackRegistry.register(ItemID.backpack, { slots: 20, slotsCenter: true, inRow: 10 });

IMPORT("ToolType");

IDRegistry.genItemID("leadAxe");
Item.createItem("leadAxe", "Свинцовый топор", {name: "lead_axe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("leadAxe", {durability: 100, level: 0, efficiency: 7, damage: -2, enchantability: 14});
ToolAPI.setTool(ItemID.leadAxe, "leadAxe", ToolType.axe);

IMPORT("ToolType");

IDRegistry.genItemID("leadShovel");
Item.createItem("leadShovel", "Свинцовая лопата", {name: "lead_shovel", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("leadShovel", {durability: 100, level: 0, efficiency: 7, damage: -2, enchantability: 14});
ToolAPI.setTool(ItemID.leadShovel, "leadShovel", ToolType.shovel);

IMPORT("ToolType");

IDRegistry.genItemID("leadPickaxe");
Item.createItem("leadPickaxe", "Свинцовая кирка", {name: "lead_pickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("leadPickaxe", {durability: 100, level: 3, efficiency: 7, damage: -2, enchantability: 14});
ToolAPI.setTool(ItemID.leadPickaxe, "leadPickaxe", ToolType.pickaxe);

IDRegistry.genItemID("friedEgg"); Item.createFoodItem("friedEgg", "Жареное яйцо", {name: "fried_egg", meta: 0}, {food: 6});

IDRegistry.genItemID("leadHelmet");
Item.createArmorItem("leadHelmet", "Свинцовый шлем", {name: "lead_helmet"}, {type: "helmet", armor: 2, durability: 200, texture: "armor/lead1_1.png"});

IDRegistry.genItemID("leadChestplate");
Item.createArmorItem("leadChestplate", "Свинцовый нагрудник", {name: "lead_chestplate"}, {type: "chestplate", armor: 3, durability: 300, texture: "armor/lead1_1.png"});

IDRegistry.genItemID("leadLeggings");
Item.createArmorItem("leadLeggings", "Свинцовые штаны", {name: "lead_leggins"}, {type: "leggings", armor: 2, durability: 200, texture: "armor/lead2_2.png"});

IDRegistry.genItemID("leadBoots");
Item.createArmorItem("leadBoots", "Свинцовые ботинки", {name: "lead_boots"}, {type: "boots", armor: 1, durability: 100, texture: "armor/lead1_1.png"});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 120); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.leadOre, data: 0, size: 6, ratio: .3, checkerTile: 1, checkerMode: false }); } });﻿


Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 30, 100); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.tinOre, data: 0, size: 5, ratio: .5, checkerTile: 1, checkerMode: false }); } });﻿

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 25, 85); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.copperOre, data: 0, size: 9, ratio: .4, checkerTile: 1, checkerMode: false }); } });﻿

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 85); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.tinOre, data: 0, size: 6, ratio: .7, checkerTile: 1, checkerMode: false }); } });﻿

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 30, 95); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.aliminiumOre, data: 0, size: 6, ratio: .6, checkerTile: 1, checkerMode: false }); } });﻿

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 45, 65); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.zinkOre, data: 0, size: 15, ratio: .3, checkerTile: 1, checkerMode: false }); } });﻿

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 90); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.aluminiumOre, data: 0, size: 5, ratio: .4, checkerTile: 1, checkerMode: false }); } });﻿

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 25, 60); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.litiumOre, data: 0, size: 8, ratio: .4, checkerTile: 1, checkerMode: false }); } });﻿

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){ var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 60, 120); for (var q = 0; q < 15;q++){ if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, { id: BlockID.solidResin, data: 0, size: 6, ratio: .3, checkerTile: 1, checkerMode: false }); } });﻿

Recipes.addShaped({id: ItemID.leadHelmet, count: 1, data: 0}, 
[ "aaa", 	
  "a a", 	
  "   " ], ['a', ItemID.leadIngot, 0, ]);
  
  Recipes.addShaped({id: ItemID.leadChestplate, count: 1, data: 0}, 
[ "a a", 	
  "aaa", 	
  "aaa" ], ['a', ItemID.leadIngot, 0, ]);
  
  Recipes.addShaped({id: ItemID.leadLeggings, count: 1, data: 0}, 
[ "aaa", 	
  "a a", 	
  "a a" ], ['a', ItemID.leadIngot, 0, ]);
  
  Recipes.addShaped({id: ItemID.leadBoots, count: 1, data: 0}, 
[ "   ", 	
  "a a", 	
  "a a" ], ['a', ItemID.leadIngot, 0, ]);
  
  Recipes.addShaped({id: ItemID.ironNugget, count: 9, data: 0}, 
[ "   ", 	
  " ab", 	
  "   " ], ['a', 265, 0, 'b', ItemID.ironHammer, 0]);
  
  Recipes.addShaped({id: 302, count: 1, data: 0}, 
[ "aaa", 	
  "a a", 	
  "   " ], ['a', ItemID.ironNugget, 0, ]);
  
  Recipes.addShaped({id: 303, count: 1, data: 0}, 
[ "a a", 	
  "aaa", 	
  "aaa" ], ['a', ItemID.ironNugget, 0, ]);
  
  Recipes.addShaped({id: 304, count: 1, data: 0}, 
[ "aaa", 	
  "a a", 	
  "a a" ], ['a', ItemID.ironNugget, 0, ]);
  
  Recipes.addShaped({id: 305, count: 1, data: 0}, 
[ "   ", 	
  "a a", 	
  "a a" ], ['a', ItemID.ironNugget, 0, ]);
  
  Recipes.addShaped({id: ItemID.ironHammer, count: 1, data: 0}, 
[ " b ", 	
  " ab", 	
  "a  " ], ['a', 280, 0, 'b', 265, 0, ]);
  
  Recipes.addShaped({id: ItemID.hardResinBucket, count: 1, data: 0}, 
[ "   ", 	
  "ab ", 	
  "   " ], ['a', BlockID.solidResin, 0, 'b', 325, 0, ]);
  
  Recipes.addShaped({id: BlockID.asphalt, count: 9, data: 0}, 
[ "   ", 	
  "abc", 	
  "   " ], ['a', ItemID.bucketWithTar, 0, 'b', 13, 0, 'c', 351, 15, ]);
  
  Recipes.addShaped({id: ItemID.leadSword, count: 1, data: 0}, 
[ " a ", 	
  " a ", 	
  " b " ], ['a', ItemID.leadIngot, 0, 'b', 280, 0, ]);
 
 
 Recipes.addShaped({id: ItemID.litiumplast, count: 1, data: 0}, 
[ " a ", 	
  "aba", 	
  " a " ], ['a', ItemID.lithiumpiece, 0, 'b', ItemID.tinpiece , 0 ]);
  
  Recipes.addShaped({id: ItemID.coalplast, count: 1, data: 0}, 
[ " a ", 	
  "aba", 	
  " a " ], ['a', ItemID.coalpiece, 0, 'b', ItemID.copperpiece , 0 ]);
  
     
  Recipes.addShaped({id: ItemID.backpack, count: 1, data: 0}, 
[ " a ", 	
  "aca", 	
  "b b" ], ['a', 334, 0, 'b', 287, 0, 'c', ItemID.ironNugget, 0, ]);
   
  Recipes.addShaped({id: ItemID.copperpiece, count: 9, data: 0}, 
[ " a ", 	
  " b ", 	
  "   " ], ['a', ItemID.ironHammer, 0, 'b', ItemID.copperingot, 0, ]);
 
  
  Recipes.addShaped({id: ItemID.coalpiece, count: 9, data: 0}, 
[ " a ", 	
  " b ", 	
  "   " ], ['a', ItemID.ironHammer, 0, 'b', 263 , 0, ]);
  
  
  Recipes.addShaped({id: ItemID.tinpiece, count: 9, data: 0}, 
[ " a ", 	
  " b ", 	
  "   " ], ['a', ItemID.ironHammer, 0, 'b', ItemID.tin, 0, ]);
  
  Recipes.addShaped({id: ItemID.cutter, count: 1, data: 0}, 
[ "a a", 	
  " b ", 	
  "b b" ], ['a', ItemID.aluminium, 0, 'b', 280, 0, ]);
  
  Recipes.addShaped({id: ItemID.aluminiumpiece, count: 9, data: 0}, 
[ " a ", 	
  " b ", 	
  "   " ], ['a', ItemID.ironHammer, 0, 'b', ItemID.aluminium, 0, ]);
  
  Recipes.addShaped({id: ItemID.cabel, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  "   " ], ['a', ItemID.cutter, 0, 'b', ItemID.copperpiece, 0, ]);
  
 Recipes.addShaped({id: ItemID.advancedbattery, count: 1, data: 0}, 
[ "bac", 	
  "abc", 	
  "   " ], ['a', ItemID.litiumplast, 0, 'b', ItemID.coalplast, 0, 'c', ItemID.cabel, 0, ]);
  
  Recipes.addShaped({id: ItemID.battery, count: 1, data: 0}, 
[ "bbc", 	
  "cbb", 	
  "   " ], ['b', ItemID.coalplast, 0, 'c', ItemID.ironNugget, 0, ]);
  
  Recipes.addShaped({id: ItemID.bigcabel, count: 1, data: 0}, 
[ " a ", 	
  " b ", 	
  "   " ], ['a', ItemID.cutter, 0, 'b', ItemID.copperingot, 0, ]);
  
  Recipes.addShaped({id: ItemID.cabel, count: 9, data: 0}, 
[ "   ", 	
  " a ", 	
  "   " ], ['a', ItemID.bigcabel, 0, ]);
  
Recipes.addFurnace(344, 0, ItemID.friedEgg, 0);

Recipes.addFurnace(BlockID.litiumOre, ItemID.lithiumpiece, 0);

Recipes.addFurnace(BlockID.copperOre, ItemID.copperingot, 0);

Recipes.addFurnace(BlockID.tinOre, ItemID.tin, 0);

Recipes.addFurnace(BlockID.aluminiumOre, ItemID.aluminium, 0);

Recipes.addFurnace(BlockID.zinkOre, ItemID.zinkpiece, 0);

Recipes.addFurnace(BlockID.leadOre, ItemID.leadIngot, 0);

Recipes.addFurnace(ItemID.hardResinBucket, 0, ItemID.bucketWithTar, 0);