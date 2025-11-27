/*IDRegistry.genItemID("edenPusk");
Item.createItem("edenPusk", "", {name: "eden",meta:6});
IDRegistry.genItemID("wildPusk");
Item.createItem("wildPusk", "", {name: "wildp"});
IDRegistry.genItemID("apaPusk");
Item.createItem("apaPusk", "", {name: "apalachiap"});
IDRegistry.genItemID("ternPusk");
Item.createItem("ternPusk", "", {name: "ternp"});
IDRegistry.genItemID("morPusk");
Item.createItem("morPusk", "", {name: "mortump"});
IDRegistry.genItemID("halitePusk");
Item.createItem("halitePusk", "", {name: "halitep"});*/

/*
|==    ||    ||            ||  ||
|    \   ||     ||         ||    ||   
|     |   ||       ||     ||      ||
|    /   ||         ||  ||       ||
|==     ||           _         ||

by kz and A10000000ulla Nagmetdulla (vk.com/nursultannagmet)
*/
importLib("ENV", "*");

ToolType.shickaxe = {
		enchantType: Native.EnchantType.pickaxe,
		damage: 7,
		blockTypes: ["stone","wood","dirt","fibre"]
}
	
ToolType.phaser = {
		damage:0,
		blockTypes: []
}
	
	
ToolType.maul = {
		isWeapon: true,
		enchantType: Native.EnchantType.weapon,
		damage: 8,
		blockTypes: ["fibre", "corweb"],
		onAttack: function(item, mob){ }
}
	
ToolType.blade = {
		isWeapon: true,
		enchantType: Native.EnchantType.weapon,
		damage: 12,
		blockTypes: ["fibre", "corweb"],
		onAttack: function(item, mob){ }
	}

var guiTinyFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Coalstone Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_off", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_on", scale: 3.2}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_on", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});


IDRegistry.genItemID("ingotReal");
IDRegistry.genItemID("ingotArl");
IDRegistry.genItemID("ingotRup");
IDRegistry.genItemID("crabclaw");
IDRegistry.genItemID("cyclopeye");
IDRegistry.genItemID("smesh");
IDRegistry.genItemID("divinestone");
IDRegistry.genItemID("krskin");
IDRegistry.genItemID("krscale");
IDRegistry.genItemID("shadowingot");
IDRegistry.genItemID("shadowstone");
IDRegistry.genItemID("shadowstick");
IDRegistry.genItemID("chunkArl");
IDRegistry.genItemID("chunkReal");
IDRegistry.genItemID("chunkRup");
IDRegistry.genItemID("terrastone");
IDRegistry.genItemID("iceStone");
IDRegistry.genItemID("iceShard");
IDRegistry.genItemID("moltenShard");
IDRegistry.genItemID("moltenStone");
IDRegistry.genItemID("corruptShard");
IDRegistry.genItemID("corruptStone");
Item.createItem("ingotReal", "Realmite Ingot", {name: "realmiteingot"});
Item.createItem("ingotArl", "Arlemite Ingot", {name: "arlemiteingot"});
Item.createItem("ingotRup", "Rupee Ingot", {name: "rupeeingot"});
Item.createItem("crabclaw", "Crab Claw", {name: "crabclaw"});
Item.createItem("cyclopeye", "Cyclops Eye", {name: "cyclopseye"});
Item.createItem("smesh", "Divine Shard", {name: "divineShard"});
Item.createItem("divinestone", "Divine Stone", {name: "divinestone"});
Item.createItem("krscale", "Kraken Scale", {name: "krakenscale"});
Item.createItem("krskin", "Kraken Skin", {name: "krakenskin"});
Item.createItem("terrastone", "Terra Stone", {name: "terranStone"});
Item.createItem("shadowingot", "Shadow Ingot", {name: "shadowing"});
Item.createItem("shadowstone", "Shadow Stone", {name: "shadowstone"});
Item.createItem("shadowstick", "Shadow Stick", {name: "shadowstick"});
Item.createItem("chunkReal", "Realmite Dust", {name: "realmite_dust"});
Item.createItem("chunkArl", "Arlemite Dust", {name: "arlemite_dust"});
Item.createItem("chunkRup", "Rupee Dust", {name: "rupee_dust"});
Item.createItem("iceStone", "Ice Stone", {name: "iceStone"});
Item.createItem("iceShard", "Ice Shard", {name: "iceShard"});
Item.createItem("moltenStone", "Molten Stone", {name: "moltenStone"});
Item.createItem("moltenShard", "Molten Shard", {name: "moltenShard"});
Item.createItem("corruptShard", "Corrupted Shard", {name: "corruptedShard"});
Item.createItem("corruptStone", "Corrupted Stone", {name: "corruptedStone"});


//vars

importLib("DivineHelper", "*");

IDRegistry.genItemID("realSword");
IDRegistry.genItemID("realShovel");
IDRegistry.genItemID("realPickaxe");
IDRegistry.genItemID("realAxe");
IDRegistry.genItemID("realHoe");
Item.createItem("realSword", "Realmite Sword", {name: "realmitesw", meta: 0}, {stack: 1});
Item.createItem("realShovel", "Realmite Shovel", {name: "realmitesh", meta: 0}, {stack: 1});
Item.createItem("realPickaxe", "Realmite Pickaxe", {name: "realmitepick", meta: 0}, {stack: 1});
Item.createItem("realAxe", "Realmite Axe", {name: "realmiteaxe", meta: 0}, {stack: 1});
Item.createItem("realHoe", "Realmite Hoe", {name: "realmitehoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("real", {durability: 4000, level: 4, efficiency: 12, damage: 4, enchantability: 13});
ToolAPI.setTool(ItemID.realSword, "real", ToolType.sword);
ToolAPI.setTool(ItemID.realShovel, "real", ToolType.shovel);
ToolAPI.setTool(ItemID.realPickaxe, "real", ToolType.pickaxe);
ToolAPI.setTool(ItemID.realAxe, "real", ToolType.axe);
ToolAPI.setTool(ItemID.realHoe, "real", ToolType.hoe);
//arlemite
IDRegistry.genItemID("arlSword");
IDRegistry.genItemID("arlShovel");
IDRegistry.genItemID("arlPickaxe");
IDRegistry.genItemID("arlAxe");
IDRegistry.genItemID("arlHoe");
IDRegistry.genItemID("arlShickaxe");
Item.createItem("arlSword", "Arlemite Sword", {name: "arlemitesw", meta: 0}, {stack: 1});
Item.createItem("arlShovel", "Arlemite Shovel", {name: "arlemitesh", meta: 0}, {stack: 1});
Item.createItem("arlPickaxe", "Arlemite Pickaxe", {name: "arlemitepick", meta: 0}, {stack: 1});
Item.createItem("arlAxe", "Arlemite Axe", {name: "arlemiteaxe", meta: 0}, {stack: 1});
Item.createItem("arlHoe", "Arlemite Hoe", {name: "arlemitehoe", meta: 0}, {stack: 1});
Item.createItem("arlShickaxe", "Arlemite Shickaxe", {name: "arlemiteshickaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("arl", {durability: 4000, level: 4, efficiency: 13, damage: 4, enchantability: 13});
ToolAPI.setTool(ItemID.arlSword, "arl", ToolType.sword);
ToolAPI.setTool(ItemID.arlShovel, "arl", ToolType.shovel);
ToolAPI.setTool(ItemID.arlPickaxe, "arl", ToolType.pickaxe);
ToolAPI.setTool(ItemID.arlAxe, "arl", ToolType.axe);
ToolAPI.setTool(ItemID.arlHoe, "arl", ToolType.hoe);
ToolAPI.setTool(ItemID.arlShickaxe, "arl", ToolType.shickaxe);
//molten
IDRegistry.genItemID("moltenSword");
Item.createItem("moltenSword", "Molten Sword", {name: "moltenSword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("molt", {durability: 2500, level: 4, efficiency: 16, damage: 10, enchantability: 13});
ToolAPI.setTool(ItemID.moltenSword, "molt", ToolType.sword);
//corrupt
IDRegistry.genItemID("corruptedSword");
Item.createItem("corruptedSword", "Corrupted Sword", {name: "corruptedSword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("crpt", {durability: 6000, level: 4, efficiency: 16, damage: 25, enchantability: 13});
ToolAPI.setTool(ItemID.corruptedSword, "crpt", ToolType.sword);
//rupee
IDRegistry.genItemID("rupSword");
IDRegistry.genItemID("rupShovel");
IDRegistry.genItemID("rupPickaxe");
IDRegistry.genItemID("rupAxe");
IDRegistry.genItemID("rupHoe");
IDRegistry.genItemID("rupShickaxe");
Item.createItem("rupSword", "Rupee Sword", {name: "rupeesword", meta: 0}, {stack: 1});
Item.createItem("rupShovel", "Rupee Shovel", {name: "rupeeshovel", meta: 0}, {stack: 1});
Item.createItem("rupPickaxe", "Rupee Pickaxe", {name: "rupeepickaxe", meta: 0}, {stack: 1});
Item.createItem("rupAxe", "Rupee Axe", {name: "rupeeaxe", meta: 0}, {stack: 1});
Item.createItem("rupHoe", "Rupee Hoe", {name: "rupeehoe", meta: 0}, {stack: 1});
Item.createItem("rupShickaxe", "Rupee Shickaxe", {name: "rupeeshickaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("rup", {durability: 5000, level: 4, efficiency: 16, damage: 2, enchantability: 15});
ToolAPI.setTool(ItemID.rupSword, "rup", ToolType.sword);
ToolAPI.setTool(ItemID.rupShovel, "rup", ToolType.shovel);
ToolAPI.setTool(ItemID.rupPickaxe, "rup", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rupAxe, "rup", ToolType.axe);
ToolAPI.setTool(ItemID.rupHoe, "rup", ToolType.hoe);
ToolAPI.setTool(ItemID.rupShickaxe, "rup", ToolType.shickaxe);
//bedrock
IDRegistry.genItemID("bedrSword");
IDRegistry.genItemID("bedrShovel");
IDRegistry.genItemID("bedrPickaxe");
IDRegistry.genItemID("bedrAxe");
IDRegistry.genItemID("bedrMaul");
Item.createItem("bedrSword", "Bedrock Sword", {name: "bedrocksw", meta: 0}, {stack: 1});
Item.createItem("bedrShovel", "Bedrock Shovel", {name: "bedrocksh", meta: 0}, {stack: 1});
Item.createItem("bedrPickaxe", "Bedrock Pickaxe", {name: "bedrockpick", meta: 0}, {stack: 1});
Item.createItem("bedrAxe", "Bedrock Axe", {name: "bedrockaxe", meta: 0}, {stack: 1});
Item.createItem("bedrMaul", "Bedrock Maul", {name: "bedrockmaul"}, {stack: 1});

ToolAPI.addToolMaterial("bedr", {durability: 10000000, level: 4, efficiency: 18, damage: 2, enchantability: 13});

ToolAPI.setTool(ItemID.bedrSword, "bedr", ToolType.sword);
ToolAPI.setTool(ItemID.bedrShovel, "bedr", ToolType.shovel);
ToolAPI.setTool(ItemID.bedrPickaxe, "bedr", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bedrAxe, "bedr", ToolType.axe);
ToolAPI.setTool(ItemID.bedrMaul, "bedr", ToolType.maul);
//ice
IDRegistry.genItemID("iceBlade");
IDRegistry.genItemID("icePick");
Item.createItem("iceBlade", "Ice Blade", {name: "iceBlade", meta: 0}, {stack: 1});
Item.createItem("icePick", "Ice Pickaxe", {name: "icePick", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ice", {durability: 5000, level: 4, efficiency: 18, damage: 25, enchantability: 15});
ToolAPI.setTool(ItemID.iceBlade, "ice", ToolType.sword);
ToolAPI.setTool(ItemID.icePick, "ice", ToolType.pickaxe);
//divine
IDRegistry.genItemID("divineSword");
IDRegistry.genItemID("divineShovel");
IDRegistry.genItemID("divinePickaxe");
IDRegistry.genItemID("divineAxe");
IDRegistry.genItemID("divineShickaxe");
IDRegistry.genItemID("divineMaul");
IDRegistry.genItemID("divineBlade");
Item.createItem("divineSword", "Divine Sword", {name: "divinesword", meta: 0}, {stack: 1});
Item.createItem("divineShovel", "Divine Shovel", {name: "divineshovel", meta: 0}, {stack: 1});
Item.createItem("divinePickaxe", "Divine Pickaxe", {name: "divinepickaxe", meta: 0}, {stack: 1});
Item.createItem("divineAxe", "Divine Axe", {name: "divineaxe", meta: 0}, {stack: 1});
Item.createItem("divineShickaxe", "Divine Shickaxe", {name: "divineshickaxe", meta: 0}, {stack: 1});
Item.createItem("divineMaul", "Divine Maul", {name: "divinemaul", meta: 0}, {stack: 1});
Item.createItem("divineBlade", "Divine Blade", {name: "divineBlade"}, {stack: 1});
//ResBladeDiv
Recipes.addShaped({id: ItemID.divineBlade, count: 1, data: 0}, [
		"bbb",
		" b ",
		" d "
   ], ['b', ItemID.divinestone, 0,'d',280,0]);

ToolAPI.addToolMaterial("divine", {durability: 20000, level: 4, efficiency: 27, damage: 6, enchantability: 13});
ToolAPI.setTool(ItemID.divineSword, "divine", ToolType.sword);
ToolAPI.setTool(ItemID.divineShovel, "divine", ToolType.shovel);
ToolAPI.setTool(ItemID.divinePickaxe, "divine", ToolType.pickaxe);
ToolAPI.setTool(ItemID.divineAxe, "divine", ToolType.axe);
ToolAPI.setTool(ItemID.divineShickaxe, "divine", ToolType.shickaxe);
ToolAPI.setTool(ItemID.divineMaul, "divine", ToolType.maul); Recipes.addShaped({id: ItemID.divineMaul, count: 1, data: 0}, [
		" b ",
		"10000000b",
		"d"
	], ['b', ItemID.divinestone, 0,'d',280,0]);
ToolAPI.setTool(ItemID.divineBlade, "divine", ToolType.blade);
//cyclop
IDRegistry.genItemID("crabclawmaul");
Item.createItem("crabclawmaul", "Crab Claw Maul", {name: "crabclawmaul", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.crabclawmaul, "divine", ToolType.sword);
//crab
IDRegistry.genItemID("cyclopSword");
Item.createItem("cyclopSword", "Cyclopsian Sword", {name: "cyclopsiansword", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.cyclopSword, "divine", ToolType.sword);

Recipes.addShaped({id: ItemID.cyclopSword, count: 1, data: 0}, [
		"b",
		"b",
		"d"
	], ['b', ItemID.cyclopeye, 0,'d',280,0]);

//massivnec
//shadow
IDRegistry.genItemID("massivnic");
Item.createItem("massivnic", "Massivence", {name: "massivence"}, {stack: 1});
ToolAPI.setTool(ItemID.massivnic, "real", ToolType.maul);
Recipes.addShaped({id: ItemID.massivnic, count: 1, data: 0}, [
		 "b",
		"cbc",
		 "d"
	], ['b', ItemID.shadowstone, 0,'d',280,0,'c',ItemID.ingotRup,0]);
//terrain
IDRegistry.genItemID("terranDagger");
IDRegistry.genItemID("terranMaul");
IDRegistry.genItemID("terranKnife");
Item.createItem("terranDagger", "Terran Dagger", {name: "terranDagger"}, {stack: 1});
Item.createItem("terranMaul", "Terran Maul", {name: "terranMaul"}, {stack: 1});
Item.createItem("terranKnife", "Terran Knife", {name: "terranKnife"}, {stack: 1});
ToolAPI.addToolMaterial("terra", {durability: 1500, level: 4, efficiency: 27, damage: 6, enchantability: 13});
ToolAPI.addToolMaterial("terraone", {durability: 2000, level: 4, efficiency: 27, damage: 12, enchantability: 13});
ToolAPI.setTool(ItemID.terranDagger, "terra", ToolType.sword);
ToolAPI.setTool(ItemID.terranMaul, "terra", ToolType.maul);
ToolAPI.setTool(ItemID.terranKnife, "terraone", ToolType.maul);
//RecipeTerranSwords
Recipes.addShaped({id: ItemID.terranDagger, count: 1, data: 0}, [
		"b",
		"d"
	], ['b', ItemID.terrastone, 0,'d',280,0]);
Recipes.addShaped({id: ItemID.terranMaul, count: 1, data: 0}, [
		" b ",
		"10000000b",
		" d "
	], ['b', ItemID.terrastone, 0,'d',280,0]);
Recipes.addShaped({id: ItemID.shadowstick, count: 1, data: 0}, [
		"bb"], ['b', ItemID.shadowingot, 0]);
Recipes.addShaped({id: ItemID.terranKnife, count: 1, data: 0}, [
		"b b",
		"10000000b",
		" d "
	], ['b', ItemID.terrastone, 0,'d',280,0]);
//shadow
IDRegistry.genItemID("shadowSaber");
Item.createItem("shadowSaber", "Shadow Saber", {name: "shadowSaber"}, {stack: 1});
ToolAPI.setTool(ItemID.shadowSaber, "terra", ToolType.maul);
Recipes.addShaped({id: ItemID.shadowSaber, count: 1, data: 0}, [
		"b",
		"b",
		"d"
	], ['b', ItemID.shadowstone, 0,'d',280,0]);

IDRegistry.genItemID("realHelmet");
IDRegistry.genItemID("realChestplate");
IDRegistry.genItemID("realLeggings");
IDRegistry.genItemID("realBoots");

Item.createArmorItem("realHelmet", "Realmite Helmet", {name: "realmitehelm"}, {type: "helmet", armor: 3, durability: 2000, texture: "armor/real_1.png"});
Item.createArmorItem("realChestplate", "Realmite Chestplate", {name: "realmitebody"}, {type: "chestplate", armor: 8, durability: 2000, texture: "armor/real_1.png"});
Item.createArmorItem("realLeggings", "Realmite Leggings", {name: "realmitelegs"}, {type: "leggings", armor: 5, durability: 2000, texture: "armor/real_2.png"});
Item.createArmorItem("realBoots", "Realmite Boots", {name: "realmiteboots"}, {type: "boots", armor: 2, durability: 1960, texture: "armor/real_1.png"});

//arlemite
IDRegistry.genItemID("arlHelmet");
IDRegistry.genItemID("arlChestplate");
IDRegistry.genItemID("arlLeggings");
IDRegistry.genItemID("arlBoots");

Item.createArmorItem("arlHelmet", "Arlemite Helmet", {name: "arlemitehelmet"}, {type: "helmet", armor: 3, durability: 2000, texture: "armor/arlemite_1.png"});
Item.createArmorItem("arlChestplate", "Arlemite Chestplate", {name: "arlemitebody"}, {type: "chestplate", armor: 8, durability: 2000, texture: "armor/arlemite_1.png"});
Item.createArmorItem("arlLeggings", "Arlemite Leggings", {name: "arlemitelegs"}, {type: "leggings", armor: 5, durability: 2000, texture: "armor/arlemite_2.png"});
Item.createArmorItem("arlBoots", "Arlemite Boots", {name: "arlemiteboots"}, {type: "boots", armor: 2, durability: 2000, texture: "armor/arlemite_1.png"});

//corrupt
IDRegistry.genItemID("corptHelm");
IDRegistry.genItemID("corptChest");
IDRegistry.genItemID("corptLegs");
IDRegistry.genItemID("corptBoots");

Item.createArmorItem("corptHelm", "Corrupted Helmet", {name: "corruptedHelmet"}, {type: "helmet", armor: 3, durability: 6000, texture: "armor/corrupted_1.png"});
Item.createArmorItem("corptChest", "Corrupted Chestplate", {name: "corruptedChestplate"}, {type: "chestplate", armor: 7, durability: 6000, texture: "armor/corrupted_1.png"});
Item.createArmorItem("corptLegs", "Corrupted Leggings", {name: "corruptedLeggings"}, {type: "leggings", armor: 4, durability: 6000, texture: "armor/corrupted_2.png"});
Item.createArmorItem("corptBoots", "Corrupted Boots", {name: "corruptedBoots"}, {type: "boots", armor: 2, durability: 6000, texture: "armor/corrupted_1.png"});

//rupee
IDRegistry.genItemID("rupHelmet");
IDRegistry.genItemID("rupChestplate");
IDRegistry.genItemID("rupLeggings");
IDRegistry.genItemID("rupBoots");

Item.createArmorItem("rupHelmet", "Rupee Helmet", {name: "rupeehelmet"}, {type: "helmet", armor: 3, durability: 3000, texture: "armor/rupee_1.png"});
Item.createArmorItem("rupChestplate", "Rupee Chestplate", {name: "rupeebody"}, {type: "chestplate", armor: 8, durability: 3000, texture: "armor/rupee_1.png"});
Item.createArmorItem("rupLeggings", "Rupee Leggings", {name: "rupeelegs"}, {type: "leggings", armor: 5, durability: 3000, texture: "armor/rupee_2.png"});
Item.createArmorItem("rupBoots", "Rupee Boots", {name: "rupeeboots"}, {type: "boots", armor: 2, durability: 3000, texture: "armor/rupee_1.png"});

//bedrock
IDRegistry.genItemID("bedrHelmet");
IDRegistry.genItemID("bedrChestplate");
IDRegistry.genItemID("bedrLeggings");
IDRegistry.genItemID("bedrBoots");

Item.createArmorItem("bedrHelmet", "Bedrock Helmet", {name: "bedrockhelm"}, {type: "helmet", armor: 3, durability: 10000000, texture: "armor/bedrock_1.png"});
Item.createArmorItem("bedrChestplate", "Bedrock Chestplate", {name: "bedrockch"}, {type: "chestplate", armor: 8, texture: "armor/bedrock_1.png"});
Item.createArmorItem("bedrLeggings", "Bedrock Leggings", {name: "bedrockleg"}, {type: "leggings", armor: 5, durability: 10000000, texture: "armor/bedrock_2.png"});
Item.createArmorItem("bedrBoots", "Bedrock Boots", {name: "bedrockboots"}, {type: "boots", armor: 2, durability: 10000000, texture: "armor/bedrock_1.png"});


//shadow
IDRegistry.genItemID("shadowHelmet");
IDRegistry.genItemID("shadowChestplate");
IDRegistry.genItemID("shadowLeggings");
IDRegistry.genItemID("shadowBoots");

Item.createArmorItem("shadowHelmet", "Shadow Helmet", {name: "shadowhelmet"}, {type: "helmet", armor: 3, durability: 10000000, texture: "armor/shadow_1.png"});
Item.createArmorItem("shadowChestplate", "Shadow Chestplate", {name: "shadowbody"}, {type: "chestplate", armor: 8, durability: 10000000, texture: "armor/shadow_1.png"});
Item.createArmorItem("shadowLeggings", "Shadow Leggings", {name: "shadowlegs"}, {type: "leggings", armor: 5, durability: 10000000, texture: "armor/shadow_2.png"});
Item.createArmorItem("shadowBoots", "Shadow Boots", {name: "shadowboots"}, {type: "boots", armor: 2, durability: 10000000, texture: "armor/shadow_1.png"});


//divine
IDRegistry.genItemID("divHelmet");
IDRegistry.genItemID("divChestplate");
IDRegistry.genItemID("divLeggings");
IDRegistry.genItemID("divBoots");

Item.createArmorItem("divHelmet", "Divine Helmet", {name: "divinehelmet"}, {type: "helmet", armor: 4, durability: 10000000, texture: "armor/divine_1.png"});
Item.createArmorItem("divChestplate", "Divine Chestplate", {name: "divinechestplate"}, {type: "chestplate", armor: 9, durability: 10000000, texture: "armor/divine_1.png"});
Item.createArmorItem("divLeggings", "Divine Leggings", {name: "divineleggings"}, {type: "leggings", armor: 6, durability: 10000000, texture: "armor/divine_2.png"});
Item.createArmorItem("divBoots", "Divine Boots", {name: "divineboots"}, {type: "boots", armor: 3, durability: 10000000, texture: "armor/divine_1.png"});

//kraken
IDRegistry.genItemID("krHelmet");
IDRegistry.genItemID("krChestplate");
IDRegistry.genItemID("krLeggings");
IDRegistry.genItemID("krBoots");

Item.createArmorItem("krHelmet", "Kraken Helmet", {name: "krakenhelmet"}, {type: "helmet", armor: 2, durability: 5000, texture: "armor/kraken_1.png"});
Item.createArmorItem("krChestplate", "Kraken Chestplate", {name: "krakenbody"}, {type: "chestplate", armor: 6, durability: 5000, texture: "armor/kraken_1.png"});
Item.createArmorItem("krLeggings", "Kraken Leggings", {name: "krakenlegs"}, {type: "leggings", armor: 4, durability: 5000, texture: "armor/kraken_2.png"});
Item.createArmorItem("krBoots", "Kraken Boots", {name: "krakenboots"}, {type: "boots", armor: 1, durability: 5000, texture: "armor/kraken_1.png"});

IDRegistry.genItemID("trHelmet");
IDRegistry.genItemID("trChestplate");
IDRegistry.genItemID("trLeggings");
IDRegistry.genItemID("trBoots");
Item.createArmorItem("trHelmet", "Terran Helmet", {name: "terranHelmet"}, {type: "helmet", armor: 3, durability: 5000, texture: "armor/terran_1.png"});
Item.createArmorItem("trChestplate", "Terran Chestplate", {name: "terranChestplate"}, {type: "chestplate", armor: 7, durability: 5000, texture: "armor/terran_1.png"});
Item.createArmorItem("trLeggings", "Terran Leggings", {name: "terranLeggings"}, {type: "leggings", armor: 5, durability: 5000, texture: "armor/terran_2.png"});
Item.createArmorItem("trBoots", "Terran Boots", {name: "terranBoots"}, {type: "boots", armor: 2, durability: 5000, texture: "armor/terran_1.png"});

//worlds
IDRegistry.genItemID("quanda");
IDRegistry.genItemID("quandb");
IDRegistry.genItemID("quandc");
IDRegistry.genItemID("quandd");
Item.createArmorItem("quanda", "Шлем эдема", {name: "quandahelm"}, {type: "helmet", armor: 6, durability: 2000, texture: "armor/quanda_1.png"});
Item.createArmorItem("quandb", "Нагрудник эдема", {name: "quandbchest"}, {type: "chestplate", armor: 6, durability: 2500, texture: "armor/quanda_1.png"});
Item.createArmorItem("quandc", "Штаны эдема", {name: "quandclegs"}, {type: "leggings", armor: 6, durability: 2400, texture: "armor/quanda_2.png"});
Item.createArmorItem("quandd", "Ботинки эдема", {name: "quanddboots"}, {type: "boots", armor: 6, durability: 2000, texture: "armor/quanda_1.png"});

IDRegistry.genItemID("quande");
IDRegistry.genItemID("quandf");
IDRegistry.genItemID("quandg");
IDRegistry.genItemID("quandh");
Item.createArmorItem("quande", "Шлем дикого леса", {name: "quandehelm"}, {type: "helmet", armor: 8, durability: 3000, texture: "armor/quanda_3.png"});
Item.createArmorItem("quandf", "Нагрудник дикого леса", {name: "quandfchest"}, {type: "chestplate", armor: 8, durability: 3100, texture: "armor/quanda_3.png"});
Item.createArmorItem("quandg", "Штаны дикого леса", {name: "quandglegs"}, {type: "leggings", armor: 8, durability: 3050, texture: "armor/quanda_4.png"});
Item.createArmorItem("quandh", "Ботинки дикого леса", {name: "quandhboots"}, {type: "boots", armor: 8, durability: 3000, texture: "armor/quanda_3.png"});


IDRegistry.genItemID("quandj");
IDRegistry.genItemID("quandk");
IDRegistry.genItemID("quandl");
IDRegistry.genItemID("quandm");
Item.createArmorItem("quandj", "Шлем апалачия", {name: "quandjhelm"}, {type: "helmet", armor: 9, durability: 3500, texture: "armor/quanda_5.png"});
Item.createArmorItem("quandk", "Нагрудник апалачия", {name: "quandkchest"}, {type: "chestplate", armor: 9, durability: 3700, texture: "armor/quanda_5.png"});
Item.createArmorItem("quandl", "Штаны апалачии", {name: "quandllegs"}, {type: "leggings", armor: 9, durability: 3700, texture: "armor/quanda_6.png"});
Item.createArmorItem("quandm", "Ботинки апалачии", {name: "quandmboots"}, {type: "boots", armor: 9, durability: 3500, texture: "armor/quanda_5.png"});


IDRegistry.genItemID("quandn");
IDRegistry.genItemID("quando");
IDRegistry.genItemID("quandp");
IDRegistry.genItemID("quandq");
Item.createArmorItem("quandn", "Шлем небесного терна", {name: "quandnhelm"}, {type: "helmet", armor: 10, durability: 4000, texture: "armor/quanda_7.png"});
Item.createArmorItem("quando", "Нагрудник небесного терна", {name: "quandochest"}, {type: "chestplate", armor: 10, durability: 4200, texture: "armor/quanda_7.png"});
Item.createArmorItem("quandp", "Штаны небесного терна", {name: "quandplegs"}, {type: "leggings", armor: 10, durability: 4000, texture: "armor/quanda_8.png"});
Item.createArmorItem("quandq", "Ботинки небесного терна", {name: "quandqboots"}, {type: "boots", armor: 10, durability: 4000, texture: "armor/quanda_7.png"});

IDRegistry.genItemID("quandr");
IDRegistry.genItemID("quands");
IDRegistry.genItemID("quandt");
IDRegistry.genItemID("quandu");
Item.createArmorItem("quandr", "Шлем мортума", {name: "quandrhelm"}, {type: "helmet", armor: 12, durability: 4500, texture: "armor/quanda_9.png"});
Item.createArmorItem("quands", "Нагрудник мортума", {name: "quandschest"}, {type: "chestplate", armor: 12, durability: 5000, texture: "armor/quanda_9.png"});
Item.createArmorItem("quandt", "Штаны мортума", {name: "quandtlegs"}, {type: "leggings", armor: 12, durability: 5000, texture: "armor/quanda_10.png"});
Item.createArmorItem("quandu", "Ботинки мортума", {name: "quanduboots"}, {type: "boots", armor: 12, durability: 4500, texture: "armor/quanda_9.png"});


IDRegistry.genItemID("quandv");
IDRegistry.genItemID("quandw");
IDRegistry.genItemID("quandx");
IDRegistry.genItemID("quandy");
Item.createArmorItem("quandv", " Халитовый Шлем", {name: "quandvhelm"}, {type: "helmet", armor: 20, durability: 5100, texture: "armor/quanda_11.png"});
Item.createArmorItem("quandw", "Халитовый нагрудник", {name: "quandwchest"}, {type: "chestplate", armor: 20, durability: 5500, texture: "armor/quanda_11.png"});
Item.createArmorItem("quandx", "Халитовые штаны", {name: "quandxlegs"}, {type: "leggings", armor: 20, durability: 5500, texture: "armor/quanda_12.png"});
Item.createArmorItem("quandy", "Халитовые ботинки ", {name: "quandyboots"}, {type: "boots", armor: 20, durability: 5200, texture: "armor/quanda_11.png"});

IDRegistry.genItemID("apalazisword");
IDRegistry.genItemID("apalazipickaxe");
IDRegistry.genItemID("apalazishovel");
IDRegistry.genItemID("apalaziaxe");
Item.createItem("apalazisword", "апалачивый меч", {name: "apalazisword", meta: 0}, {stack: 1});
Item.createItem("apalazishovel", "апалачивая лопата", {name: "apalazishovel", meta: 0}, {stack: 1});
Item.createItem("apalazipickaxe", "апалачивая кирка", {name: "apalazipickaxe", meta: 0}, {stack: 1});
Item.createItem("apalaziaxe", "апалачивый тапор", {name: "apalaziaxe", meta: 0}, {stack: 1}); 

ToolAPI.addToolMaterial("apalazi", {durability: 3500, level: 4, efficiency: 30, damage: 30, enchantability: 13});
ToolAPI.setTool(ItemID.apalazisword, "apalazi", ToolType.sword);
ToolAPI.setTool(ItemID.apalazishovel, "apalazi", ToolType.shovel);
ToolAPI.setTool(ItemID.apalazipickaxe, "apalazi", ToolType.pickaxe);
ToolAPI.setTool(ItemID.apalaziaxe, "apalazi", ToolType.axe);

IDRegistry.genItemID("azurisword");
IDRegistry.genItemID("azuripickaxe");
IDRegistry.genItemID("azurishovel");
IDRegistry.genItemID("azuriaxe");
Item.createItem("azurisword", "меч дикого леса", {name: "azurisword", meta: 0}, {stack: 1});
Item.createItem("azurishovel", "лопата дикого леса", {name: "azurishovel", meta: 0}, {stack: 1});
Item.createItem("azuripickaxe", " кирка дикого леса", {name: "azuripickaxe", meta: 0}, {stack: 1});
Item.createItem("azuriaxe", "тапор дикого леса", {name: "azuriaxe", meta: 0}, {stack: 1}); 

ToolAPI.addToolMaterial("azuri", {durability: 2500, level: 4, efficiency: 27, damage: 28, enchantability: 13});
ToolAPI.setTool(ItemID.azurisword, "azuri", ToolType.sword);
ToolAPI.setTool(ItemID.azurishovel, "azuri", ToolType.shovel);
ToolAPI.setTool(ItemID.azuripickaxe, "azuri", ToolType.pickaxe);
ToolAPI.setTool(ItemID.azuriaxe, "azuri", ToolType.axe);

IDRegistry.genItemID("edemsword");
IDRegistry.genItemID("edempickaxe");
IDRegistry.genItemID("edemshovel");
IDRegistry.genItemID("edemaxe");
Item.createItem("edemsword", "меч эдема", {name: "edemsword", meta: 0}, {stack: 1});
Item.createItem("edemshovel", "лопата эдема", {name: "edemshovel", meta: 0}, {stack: 1});
Item.createItem("edempickaxe", " кирка эдема", {name: "edempickaxe", meta: 0}, {stack: 1});
Item.createItem("edemaxe", "тапор эдема", {name: "edemaxe", meta: 0}, {stack: 1}); 

ToolAPI.addToolMaterial("edem", {durability: 1500, level: 4, efficiency: 24, damage: 25, enchantability: 13});
ToolAPI.setTool(ItemID.edemsword, "edem", ToolType.sword);
ToolAPI.setTool(ItemID.edemshovel, "edem", ToolType.shovel);
ToolAPI.setTool(ItemID.edempickaxe, "edem", ToolType.pickaxe);
ToolAPI.setTool(ItemID.edemaxe, "edem", ToolType.axe);

IDRegistry.genItemID("ternsword");
IDRegistry.genItemID("ternpickaxe");
IDRegistry.genItemID("ternshovel");
IDRegistry.genItemID("ternaxe");
Item.createItem("ternsword", "меч неберного терна", {name: "ternsword", meta: 0}, {stack: 1});
Item.createItem("ternshovel", "лопата небесного терна", {name: "ternshovel", meta: 0}, {stack: 1});
Item.createItem("ternpickaxe", " кирка небесного терна", {name: "ternpickaxe", meta: 0}, {stack: 1});
Item.createItem("ternaxe", "тапор небесного терна", {name: "ternaxe", meta: 0}, {stack: 1}); 

ToolAPI.addToolMaterial("tern", {durability: 4500, level: 4, efficiency: 44, damage: 32, enchantability: 13});
ToolAPI.setTool(ItemID.ternsword, "tern", ToolType.sword);
ToolAPI.setTool(ItemID.ternshovel, "tern", ToolType.shovel);
ToolAPI.setTool(ItemID.ternpickaxe, "tern", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ternaxe, "tern", ToolType.axe);

IDRegistry.genItemID("morsword");
IDRegistry.genItemID("morpickaxe");
IDRegistry.genItemID("morshovel");
IDRegistry.genItemID("moraxe");
Item.createItem("morsword", "меч мортума", {name: "morsword", meta: 0}, {stack: 1});
Item.createItem("morshovel", "лопата мортума", {name: "morshovel", meta: 0}, {stack: 1});
Item.createItem("morpickaxe", " кирка мортума", {name: "morpickaxe", meta: 0}, {stack: 1});
Item.createItem("moraxe", "топор мортума", {name: "moraxe", meta: 0}, {stack: 1}); 

ToolAPI.addToolMaterial("mor", {durability: 5000, level: 4, efficiency: 55, damage: 34, enchantability: 13});
ToolAPI.setTool(ItemID.morsword, "mor", ToolType.sword);
ToolAPI.setTool(ItemID.morshovel, "mor", ToolType.shovel);
ToolAPI.setTool(ItemID.morpickaxe, "mor", ToolType.pickaxe);
ToolAPI.setTool(ItemID.moraxe, "mor", ToolType.axe);

IDRegistry.genItemID("halsword");
Item.createItem("halsword", "халитовый меч", {name: "halsword", meta: 0}, {stack: 1});
 

ToolAPI.addToolMaterial("hal", {durability: 2000, level: 4, efficiency: 15, damage: 35, enchantability: 13});
ToolAPI.setTool(ItemID.halsword, "hal", ToolType.sword);



IDRegistry.genItemID("edemfrag");
Item.createItem("edemfrag", "фрагменты эдема", {name: "edemfrag"});

IDRegistry.genItemID("edemkusok");
Item.createItem("edemkusok", "куски эдема", {name: "edemkusok"});

IDRegistry.genItemID("edemkristal");
Item.createItem("edemkristal", "кристалы эдема", {name: "edemkristal"});

IDRegistry.genItemID("lesfrag");
Item.createItem("lesfrag", "фрагменты дикого леса", {name: "lesfrag"});

IDRegistry.genItemID("leskusok");
Item.createItem("leskusok", "куски дикого леса", {name: "leskusok"});

IDRegistry.genItemID("leskristal");
Item.createItem("leskristal", "кристалы дикого леса", {name: "leskristal"});

IDRegistry.genItemID("apafrag");
Item.createItem("apafrag", "фрагменты апалачия", {name: "apafrag"});

IDRegistry.genItemID("apakusok");
Item.createItem("apakusok", "куски апалачия", {name: "apakusok"});

IDRegistry.genItemID("apakristal");
Item.createItem("apakristal", "кристалы апалачия", {name: "apakristal"});

IDRegistry.genItemID("ternfrag");
Item.createItem("ternfrag", "фрагменты небесного терна", {name: "ternfrag"});

IDRegistry.genItemID("ternkusok");
Item.createItem("ternkusok", "куски небесного терна", {name: "ternkusok"});

IDRegistry.genItemID("ternkristal");
Item.createItem("ternkristal", "кристалы небесного терна", {name: "ternkristal"});

IDRegistry.genItemID("morfrag");
Item.createItem("morfrag", "фрагменты мортума", {name: "morfrag"});

IDRegistry.genItemID("morkusok");
Item.createItem("morkusok", "куски мортума", {name: "morkusok"});

IDRegistry.genItemID("morkristal");
Item.createItem("morkristal", "кристалы мортума", {name: "morkristal"});

Recipes.addShaped({id: ItemID.edemkusok, count: 7, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.edemfrag, 0]);

Recipes.addShaped({id: ItemID.edemfrag, count: 9, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.divinestone, 0]);

Recipes.addShaped({id: ItemID.edemkristal, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a"
	], ['a', ItemID.edemkusok, 0]);

Recipes.addShaped({id: ItemID.edempickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.edemsword, count: 1, data: 0}, [
		" a",
		" a ",
		" b "
	], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.edemaxe, count: 1, data: 0}, [
		"aa",
		"ab ",
		" b "
	], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.edemshovel, count: 1, data: 0}, [
		" a",
		" b ",
		" b "
	], ['a', ItemID.edemkristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.quanda, count: 1, data: 0}, [
		"aaa",
		"a a",
		"   ",
	], ['a', ItemID.edemkristal, 0]);


Recipes.addShaped({id: ItemID.quandb, count: 1, data: 0}, [
		"a a",
		"aaa ",
		"aaa ",
	], ['a', ItemID.edemkristal, 0]);

Recipes.addShaped({id: ItemID.quandc, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a",
	], ['a', ItemID.edemkristal, 0]);

Recipes.addShaped({id: ItemID.quandd, count: 1, data: 0}, [
		"a a",
		"a a",
		"  "
	], ['a', ItemID.edemkristal, 0]);

Recipes.addShaped({id: ItemID.leskusok, count: 7, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.lesfrag, 0]);

Recipes.addShaped({id: ItemID.lesfrag, count: 9, data: 0}, [
		"   ",
		"xxx",
		"    "
	], ['x', ItemID.edemkristal, 0]);

Recipes.addShaped({id: ItemID.leskristal, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a"
	], ['a', ItemID.leskusok, 0]);

Recipes.addShaped({id: ItemID.azuripickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.leskristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.azurisword, count: 1, data: 0}, [
		" a",
		" a ",
		" b "
	], ['a', ItemID.leskristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.azuriaxe, count: 1, data: 0}, [
		"aa",
		"ab ",
		" b "
	], ['a', ItemID.leskristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.azurishovel, count: 1, data: 0}, [
		" a",
		" b ",
		" b "
	], ['a', ItemID.leskristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.quande, count: 1, data: 0}, [
		"aaa",
		"a a",
		"      ",
	], ['a', ItemID.leskristal, 0]);


Recipes.addShaped({id: ItemID.quandf, count: 1, data: 0}, [
		"a a",
		"aaa ",
		"aaa ",
	], ['a', ItemID.leskristal, 0]);

Recipes.addShaped({id: ItemID.quandg, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a",
	], ['a', ItemID.leskristal, 0]);

Recipes.addShaped({id: ItemID.quandh, count: 1, data: 0}, [
		"a a",
		"a a",
		"  "
	], ['a', ItemID.leskristal, 0]);


Recipes.addShaped({id: ItemID.apakusok, count: 7, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.apafrag, 0]);

Recipes.addShaped({id: ItemID.apafrag, count: 9, data: 0}, [
		"   ",
		"xxx",
		"    "
	], ['x', ItemID.leskristal, 0]);

Recipes.addShaped({id: ItemID.apakristal, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a"
	], ['a', ItemID.apakusok, 0]);

Recipes.addShaped({id: ItemID.apalazipickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.apakristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.apalazisword, count: 1, data: 0}, [
		" a",
		" a ",
		" b "
	], ['a', ItemID.apakristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.apalaziaxe, count: 1, data: 0}, [
		"aa",
		"ab ",
		" b "
	], ['a', ItemID.apakristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.apalazishovel, count: 1, data: 0}, [
		" a",
		" b ",
		" b "
	], ['a', ItemID.apakristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.quandj, count: 1, data: 0}, [
		"aaa",
		"a a",
		"      ",
	], ['a', ItemID.apakristal, 0]);


Recipes.addShaped({id: ItemID.quandk, count: 1, data: 0}, [
		"a a",
		"aaa ",
		"aaa ",
	], ['a', ItemID.apakristal, 0]);

Recipes.addShaped({id: ItemID.quandl, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a",
	], ['a', ItemID.apakristal, 0]);

Recipes.addShaped({id: ItemID.quandm, count: 1, data: 0}, [
		"a a",
		"a a",
		"  "
	], ['a', ItemID.apakristal, 0]);

Recipes.addShaped({id: ItemID.ternkusok, count: 7, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.ternfrag, 0]);

Recipes.addShaped({id: ItemID.ternfrag, count: 9, data: 0}, [
		"   ",
		"xxx",
		"    "
	], ['x', ItemID.apakristal, 0]);

Recipes.addShaped({id: ItemID.ternkristal, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a"
	], ['a', ItemID.ternkusok, 0]);

Recipes.addShaped({id: ItemID.ternpickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ternkristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.ternsword, count: 1, data: 0}, [
		" a",
		" a ",
		" b "
	], ['a', ItemID.ternkristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.ternaxe, count: 1, data: 0}, [
		"aa",
		"ab ",
		" b "
	], ['a', ItemID.ternkristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ternshovel, count: 1, data: 0}, [
		" a",
		" b ",
		" b "
	], ['a', ItemID.ternkristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.quandn, count: 1, data: 0}, [
		"aaa",
		"a a",
		"      ",
	], ['a', ItemID.ternkristal, 0]);


Recipes.addShaped({id: ItemID.quando, count: 1, data: 0}, [
		"a a",
		"aaa ",
		"aaa ",
	], ['a', ItemID.ternkristal, 0]);

Recipes.addShaped({id: ItemID.quandp, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a",
	], ['a', ItemID.ternkristal, 0]);

Recipes.addShaped({id: ItemID.quandq, count: 1, data: 0}, [
		"a a",
		"a a",
		"  "
	], ['a', ItemID.ternkristal, 0]);

Recipes.addShaped({id: ItemID.morkusok, count: 7, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.morfrag, 0]);

Recipes.addShaped({id: ItemID.morfrag, count: 9, data: 0}, [
		"   ",
		"xxx",
		"    "
	], ['x', ItemID.ternkristal, 0]);

Recipes.addShaped({id: ItemID.morkristal, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a"
	], ['a', ItemID.morkusok, 0]);

Recipes.addShaped({id: ItemID.morpickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.morkristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.morsword, count: 1, data: 0}, [
		" a",
		" a ",
		" b "
	], ['a', ItemID.morkristal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.moraxe, count: 1, data: 0}, [
		"aa",
		"ab ",
		" b "
	], ['a', ItemID.morkristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.morshovel, count: 1, data: 0}, [
		" a",
		" b ",
		" b "
	], ['a', ItemID.morkristal, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.quandr, count: 1, data: 0}, [
		"aaa",
		"a a",
		"      ",
	], ['a', ItemID.morkristal, 0]);


Recipes.addShaped({id: ItemID.quands, count: 1, data: 0}, [
		"a a",
		"aaa ",
		"aaa ",
	], ['a', ItemID.morkristal, 0]);

Recipes.addShaped({id: ItemID.quandt, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a",
	], ['a', ItemID.morkristal, 0]);

Recipes.addShaped({id: ItemID.quandu, count: 1, data: 0}, [
		"a a",
		"a a",
		"  "
	], ['a', ItemID.morkristal, 0]);

Recipes.addShaped({id: ItemID.halsword, count: 1, data: 0}, [
		" a ",
		"bab",
		" c "
	], ['a', ItemID.morsword, 0, 'b', 388, 0,'c',280,0]);


Recipes.addShaped({id: ItemID.quandv, count: 1, data: 0}, [
		" b",
		" a ",
		"  "
	], ['a', ItemID.quandr, 0, 'b', 388, 0]);

Recipes.addShaped({id: ItemID.quandw, count: 1, data: 0}, [
		" b",
		" a ",
		"  "
	], ['a', ItemID.quands, 0, 'b', 388, 0]);

Recipes.addShaped({id: ItemID.quandx, count: 1, data: 0}, [
		"    ",
		" a ",
		" b "
	], ['a', ItemID.quandt, 0, 'b', 388, 0]);

Recipes.addShaped({id: ItemID.quandy, count: 1, data: 0}, [
		"    ",
		" a ",
		" b "
	], ['a', ItemID.quandu, 0, 'b', 388, 0]);

var LampType = Block.createSpecialType({
	lightlevel: 10
});


var GlassType = Block.createSpecialType({
	lightlevel: 1,
	lightopacity: 0,
	renderlayer: 4
});

IDRegistry.genBlockID("realmiteBlock");
Block.createBlock("realmiteBlock", [
	{name: "Realmite Block", texture: [["realmiteblock", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.realmiteBlock, "stone");
Block.registerDropFunction("realmiteBlock", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.realmiteBlock, 1, 0]]
	}
	return [];
}, 2);

IDRegistry.genBlockID("arlemiteBlock");
Block.createBlock("arlemiteBlock", [
	{name: "Arlemite Block", texture: [["arlemiteblock", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.arlemiteBlock, "stone");
Block.registerDropFunction("arlemiteBlock", function(coords, blockID, blockData, level){
	if (level > 2){
		return [[BlockID.arlemiteBlock, 1, 0]]
	}
	return [];
}, 2);

IDRegistry.genBlockID("rupeeBlock");
Block.createBlock("rupeeBlock", [
	{name: "Rupee Block", texture: [["rupeeblock", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.rupeeBlock, "stone");
Block.registerDropFunction("rupeeBlock", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[BlockID.rupeeBlock, 1, 0]]
	}
	return [];
}, 2);

IDRegistry.genBlockID("arlemiteLamp");
Block.createBlock("arlemiteLamp", [
	{name: "Arlemite Lamp", texture: [["arlemitelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.arlemiteLamp, "stone");

IDRegistry.genBlockID("rupeeLamp");
Block.createBlock("rupeeLamp", [
	{name: "Rupee Lamp", texture: [["rupeelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.rupeeLamp, "stone");

IDRegistry.genBlockID("goldLamp");
Block.createBlock("goldLamp", [
	{name: "Gold Lamp", texture: [["goldlamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.goldLamp, "stone");

IDRegistry.genBlockID("lapisLamp");
Block.createBlock("lapisLamp", [
	{name: "Lapis Lamp", texture: [["lapislamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.lapisLamp, "stone");

IDRegistry.genBlockID("redsLamp");
Block.createBlock("redsLamp", [
	{name: "Redstone Lamp", texture: [["redstonelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.redsLamp, "stone");

IDRegistry.genBlockID("realLamp");
Block.createBlock("realLamp", [
	{name: "Realmite Lamp", texture: [["realmitelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.realLamp, "stone");

IDRegistry.genBlockID("endLamp");
Block.createBlock("endLamp", [
	{name: "Ender Lamp", texture: [["enderLamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.endLamp, "stone");

IDRegistry.genBlockID("blazeLamp");
Block.createBlock("blazeLamp", [
	{name: "Blaze Lamp", texture: [["blazelamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.blazeLamp, "stone");

IDRegistry.genBlockID("lavaLamp");
Block.createBlock("lavaLamp", [
	{name: "Lava Lamp", texture: [["lavalamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.lavaLamp, "stone");

IDRegistry.genBlockID("diamondLamp");
Block.createBlock("diamondLamp", [
	{name: "Diamond Lamp", texture: [["diamondlamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.diamondLamp, "stone");

IDRegistry.genBlockID("krakLamp");
Block.createBlock("krakLamp", [
	{name: "Kraken Lamp", texture: [["krakenlamp", 0]], inCreative: true}
], LampType);
ToolAPI.registerBlockMaterial(BlockID.krakenLamp, "stone");

IDRegistry.genBlockID("ironBrick");
Block.createBlock("ironBrick", [
	{name: "Iron Brick", texture: [["ironBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.ironBrick, "stone");
Recipes.addShaped({id: BlockID.ironBrick, count: 1, data: 0}, [
		"bb",
		"bb "
	], ['b', 265, 0]);
	

IDRegistry.genBlockID("goldBrick");
Block.createBlock("goldBrick", [
	{name: "Gold Brick", texture: [["goldBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.goldBrick, "stone");
Recipes.addShaped({id: BlockID.goldBrick, count: 1, data: 0}, [
		"bb",
		"bb "
	], ['b', 266, 0]);
IDRegistry.genBlockID("lapisBrick");
Block.createBlock("lapisBrick", [
	{name: "Lapis Brick", texture: [["lapisBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.lapisBrick, "stone");
Recipes.addShaped({id: BlockID.lapisBrick, count: 1, data: 0}, [
		"bb",
		"bb "
	], ['b', 351, 4]);
IDRegistry.genBlockID("lavaBrick");
Block.createBlock("lavaBrick", [
	{name: "Lava Brick", texture: [["lavaBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.lavaBrick, "stone");
Recipes.addShaped({id: BlockID.lavaBrick, count: 1, data: 0}, ["bb","bb "], ['b', 325, 10]);
IDRegistry.genBlockID("diamBrick");
Block.createBlock("diamBrick", [
	{name: "Iron Brick", texture: [["diamondBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.diamBrick, "stone");
Recipes.addShaped({id: BlockID.lavaBrick, count: 1, data: 0}, ["bb","bb "], ['b', 264, 0]);
IDRegistry.genBlockID("realBrick");
Block.createBlock("realBrick", [
	{name: "Realmite Brick", texture: [["realmiteBricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.realBrick, "stone");
Recipes.addShaped({id: BlockID.lavaBrick, count: 1, data: 0}, ["bb","bb "], ['b', ItemID.ingotReal, 0]);
IDRegistry.genBlockID("arleBrick");
Block.createBlock("arleBrick", [
	{name: "Arlemite Brick", texture: [["arlemiteBricks", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.arleBrick, count: 1, data: 0}, ["bb","bb "], ['b',ItemID.ingotArl, 0]);
ToolAPI.registerBlockMaterial(BlockID.arleBrick, "stone");

Recipes.addFurnace(ItemID.chunkArl, ItemID.ingotArl, 0); Recipes.addFurnace(ItemID.chunkReal, ItemID.ingotReal, 0); Recipes.addFurnace(ItemID.chunkRup, ItemID.ingotRup, 0) 


//craftworkbench

Recipes.addShaped({id: ItemID.realSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"], ['a', ItemID.ingotReal, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.realShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.realPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.realAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.realHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotReal, 0, 'b', 280, 0]);
	 //arlemite
	 Recipes.addShaped({id: ItemID.arlSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"
	], ['a', ItemID.ingotArl, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.arlShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.arlPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);
	
   Recipes.addShaped({id: ItemID.arlAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.arlHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotArl, 0, 'b', 280, 0]);
	 Recipes.addShaped({id: ItemID.arlShickaxe, count: 1, data: 0}, [
		"ab",
		"cd"
	], ['a', ItemID.arlPickaxe, -1, 'b', ItemID.arlShovel,  -1,'c',ItemID.arlAxe, -1,'d',ItemID.arlHoe, -1]);
	//rupee
	 Recipes.addShaped({id: ItemID.rupSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"
	], ['a', ItemID.ingotRup, -1, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.rupShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.rupPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.rupAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.rupHoe, count: 1, data: 0}, [
		"aa",
		" b",
		" b"
	], ['a', ItemID.ingotRup, 0, 'b', 280, 0]);
	 Recipes.addShaped({id: ItemID.rupShickaxe, count: 1, data: 0}, [
		"ab",
		"cd"
	], ['a', ItemID.rupPickaxe, 0, 'b', ItemID.rupShovel, 0,'c',ItemID.rupAxe,0,'d',ItemID.rupHoe,0]);
	//bedrock
 Recipes.addShaped({id: ItemID.bedrSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"
	], ['a', 7, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bedrShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', 7, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bedrPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', 7, 0, 'b', 280, 0]);
	
	Recipes.addShaped({id: ItemID.bedrAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', 7, 0, 'b', 280, 0]);
	
	//divine
Recipes.addShaped({id: ItemID.divineSword, count: 1, data: 0}, [
		"a",
		"a",
		"b"
	], ['a', ItemID.divinestone, 0, 'b', ItemID.shadowstick, 0]);
	
	Recipes.addShaped({id: ItemID.divineShovel, count: 1, data: 0}, [
		"a",
		"b",
		"b"
	], ['a', ItemID.divinestone, 0, 'b', ItemID.shadowstick, 0]);
	
	Recipes.addShaped({id: ItemID.divinePickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.divinestone, 0, 'b', ItemID.shadowstick, 0]);
	
	Recipes.addShaped({id: ItemID.divineAxe, count: 1, data: 0}, [
		"aa",
		"ab",
		" b"
	], ['a', ItemID.divinestone, 0, 'b',ItemID.shadowstick, 0]);
	 Recipes.addShaped({id: ItemID.divineShickaxe, count: 1, data: 0}, ["abc"], ['a', ItemID.divinePickaxe, -1, 'b', ItemID.divineShovel, -1,'c',ItemID.divineAxe,-1]);
	
//craftarmors
	Recipes.addShaped({id: ItemID.realHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotReal, 0]);
	
	Recipes.addShaped({id: ItemID.realChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotReal, 0]);
	
	Recipes.addShaped({id: ItemID.realLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotReal, 0]);
	
	Recipes.addShaped({id: ItemID.realBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotReal, 0]);
	 	Recipes.addShaped({id: ItemID.arlHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotArl, 0]);
	
	Recipes.addShaped({id: ItemID.arlChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotArl, 0]);
	
	Recipes.addShaped({id: ItemID.arlLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotArl, 0]);
	
	Recipes.addShaped({id: ItemID.arlBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotArl, 0]);
	 	Recipes.addShaped({id: ItemID.rupHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.ingotRup, 0]);
	
	Recipes.addShaped({id: ItemID.rupChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.ingotRup, 0]);
	
	Recipes.addShaped({id: ItemID.rupLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.ingotRup, 0]);
	
	Recipes.addShaped({id: ItemID.rupBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.ingotRup, 0]);
	
	 Recipes.addShaped({id: ItemID.divHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.divinestone, 0]);
	
	Recipes.addShaped({id: ItemID.divChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.divinestone, 0]);
	
	Recipes.addShaped({id: ItemID.divLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.divinestone, 0]);
	
	Recipes.addShaped({id: ItemID.divBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.divinestone, 0]);
	 	Recipes.addShaped({id: ItemID.ingotArl, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.arlemiteBlock, 0]);
	 	Recipes.addShaped({id: ItemID.ingotReal, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.realmiteBlock, 0]);
	Recipes.addShaped({id: ItemID.ingotRup, count: 9, data: 0}, [
		"x"
	], ['x', BlockID.rupeeBlock, 0]); 	
	Recipes.addShaped({id: BlockID.arlemiteBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotArl, 0]);
	 	Recipes.addShaped({id: BlockID.realmiteBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotReal, 0]);
	 	Recipes.addShaped({id: BlockID.rupeeBlock, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.ingotRup, 0]);
	 	 Recipes.addShaped({id: ItemID.divinestone, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx",
	], ['x', ItemID.smesh, 0]);
	 	Recipes.addShaped({id: BlockID.arlemiteLamp, count: 1, data: 0}, [
		"xxx",
		"xbx",
		"xxx",
	], ['x', ItemID.ingotArl, 0,'b', 89, 0]);
	 	Recipes.addShaped({id: BlockID.rupeeLamp, count: 1, data: 0}, [
		"xxx",
		"xbx",
		"xxx",
	], ['x', ItemID.ingotRup, 0,'b', 89, 0]);
	 	Recipes.addShaped({id: BlockID.lapisLamp, count: 1, data: 0}, [
		"xxx",
		"xbx",
		"xxx",
	], ['x', 351, 4,'b', 89, 0]);
	 	Recipes.addShaped({id: BlockID.goldLamp, count: 1, data: 0}, [
		"xxx",
		"xbx",
		"xxx",
	], ['x', 266, 0,'b', 89, 0]);
	 	Recipes.addShaped({id: ItemID.shadowingot, count: 1, data: 0}, [
		"xb",
	], ['x', ItemID.ingotReal, 0,'b', ItemID.ingotRup, 0]);
	Recipes.addShaped({id: ItemID.krskin, count: 1, data: 0}, [
		"xx",
		"xx",
	], ['x', 351, 0]);
	Recipes.addShaped({id: ItemID.krscale, count: 1, data: 0}, [
		"xx",
		"xx",
	], ['x', ItemID.krskin, 0]);
	 	Recipes.addShaped({id: ItemID.shadowstone, count: 1, data: 0}, [
		"x x",
		" b ",
		"x x",
	], ['x', ItemID.shadowingot, 0,'b', 264, 0]);
//shadowarmors
Recipes.addShaped({id: ItemID.shadowHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.shadowstone, 0]);
	
	Recipes.addShaped({id: ItemID.shadowChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.shadowstone, 0]);
	
	Recipes.addShaped({id: ItemID.shadowLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.shadowstone, 0]);
	
	Recipes.addShaped({id: ItemID.shadowBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.shadowstone, 0]);
	
//kraken
Recipes.addShaped({id: ItemID.krHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.krscale, 0]);
	
	Recipes.addShaped({id: ItemID.krChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.krscale, 0]);
	
	Recipes.addShaped({id: ItemID.krLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.krscale, 0]);
	
	Recipes.addShaped({id: ItemID.krBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.krscale, 0]);
	
	 Recipes.addShaped({id: ItemID.trHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.terrastone, 0]);
	
	Recipes.addShaped({id: ItemID.trChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.terrastone, 0]);
	
	Recipes.addShaped({id: ItemID.trLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.terrastone, 0]);
	
	Recipes.addShaped({id: ItemID.trBoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.terrastone, 0]);
	
	

	 Recipes.addShaped({id: ItemID.bedrHelmet, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', 7, 0]);
	
	Recipes.addShaped({id: ItemID.bedrChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', 7, 0]);
	
	Recipes.addShaped({id: ItemID.bedrLeggings, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', 7, 0]);
	
	Recipes.addShaped({id: ItemID.bedrBoots, count: 1, data: 0}, [
     "x x",
		"x x"
	], ['x', 7, 0]);

	Recipes.addShaped({id: ItemID.iceBlade, count: 1, data: 0}, [
		"a a",
		"a a",
		" b "
	], ['a', ItemID.iceStone, 0,'b', ItemID.shadowstick, 0]);

	Recipes.addShaped({id: ItemID.icePick, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.iceStone, 0,'b', ItemID.shadowstick, 0]);

	Recipes.addShaped({id: ItemID.iceStone, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.iceShard, 0]);

	Recipes.addShaped({id: ItemID.moltenStone, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.moltenShard, 0]);

	Recipes.addShaped({id: ItemID.moltenSword, count: 1, data: 0}, [
		" x ",
		" x ",
		" b "
	], ['x', ItemID.moltenStone, 0,'b', ItemID.shadowstick, 0]);

	Recipes.addShaped({id: ItemID.corruptStone, count: 1, data: 0}, [
		"xxx",
		"xxx",
		"xxx"
	], ['x', ItemID.corruptShard, 0]);

	Recipes.addShaped({id: ItemID.corptHelm, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.corruptStone, 0]);

	Recipes.addShaped({id: ItemID.corptChest, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.corruptStone, 0]);

	Recipes.addShaped({id: ItemID.corptLegs, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.corruptStone, 0]);

	Recipes.addShaped({id: ItemID.corptBoots, count: 1, data: 0}, [
		"x x",
		"x x",
	], ['x', ItemID.corruptStone, 0]);
	
	/*Recipes.addShaped({id: ItemID.corruptSword, count: 1, data: 0}, [
		" x ",
		" x ",
		" b "
	], ['x', ItemID.corruptStone, 0,'b', ItemID.shadowstick, 0]);
*/

IDRegistry.genBlockID("arlemiteOre");
Block.createBlock("arlemiteOre", [
	{name: "Arlemite Ore", texture: [["arlemiteore", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.arlemiteOre, "stone");
Block.registerDropFunction("arlemiteOre", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.chunkArl, 1, 0]]
	}
	return [];
}, 2);
IDRegistry.genBlockID("realmiteOre");
Block.createBlock("realmiteOre", [
	{name: "Realmite Ore", texture: [["realmiteore", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.realmiteOre, "stone");
Block.registerDropFunction("realmiteOre", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.chunkReal, 1, 0]]
	}
	return [];
}, 2);
IDRegistry.genBlockID("netherOre");
Block.createBlock("netherOre", [
	{name: "Nether Ore", texture: [["netherore", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.netherOre, "stone");
Block.registerDropFunction("netherOre", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.moltenShard, 1, 0]]
	}
	return [];
}, 2);
IDRegistry.genBlockID("rupeeOre");
Block.createBlock("rupeeOre", [
	{name: "Rupee Ore", texture: [["rupeeore", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.rupeeOre, "stone");
Block.registerDropFunction("rupeeOre", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.chunkRup, 1, 0]]
	}
	return [];
}, 2);
IDRegistry.genBlockID("corruptOre");
Block.createBlock("corruptOre", [
	{name: "Corrupted Ore", texture: [["corruptOre", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.corruptOre, "stone");
Block.registerDropFunction("corruptOre", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.corruptShard, 1 + Math.random() * 3, 0]]
	}
	return [];
}, 2);
IDRegistry.genBlockID("iceOre");
Block.createBlock("iceOre", [
	{name: "Ice Ore", texture: [["iceOre", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.iceOre, "stone");
Block.registerDropFunction("iceOre", function(coords, blockID, blockData, level){
	if (level > 1){
		return [[ItemID.iceShard, 1 + Math.random() * 3, 0]]
	}
	return [];
}, 2);
IDRegistry.genBlockID("smeshOre");
Block.createBlock("smeshOre", [
	{name: "Divine Stone", texture: [["divinestone1", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.smeshOre, "stone");
Block.registerDropFunction("smeshOre", function(coords, blockID, blockData, level){
	if (level > 3){
		return [[ItemID.divinestone, 3 + Math.random() * 8, 0]]
	}
	return [];
}, 2);
IDRegistry.genBlockID("terrablock");
Block.createBlock("terrablock", [
	{name: "Terra Stone", texture: [["terra_block", 0]], inCreative: true}
], BLOCK_Type_ORE);
ToolAPI.registerBlockMaterial(BlockID.terrablock, "stone");
Block.registerDropFunction("terrablock", function(coords, blockID, blockData, level){
	if (level > 3){
		return [[ItemID.terrastone, 1 + Math.random() * 2, 0]]
	}
	return [];
}, 2);

var BLOCK_Type_ORE = Block.createSpecialType({
	base: 1,
	destroytime: 2,
	opaque: true,
}, "ore");

/*var modTick = ModAPI.requireGlobal("function modTick");



var genTick;
var genOreTick;
var dimension;

modTick(){
//World generation
	genTick++;
	if(genTick==49){
		genTick = 0
	}
	if(genTick==0){
		XX1 = Math.floor(Player.getX()/16)*16
		ZZ1 = Math.floor(Player.getZ()/16)*16
	}
	var x = XX1+16*(genTick%7-3)
	var z = ZZ1+16*(Math.floor(genTick/7)%7-3)
	if(Level.getData(x+2, 0, z)!==1){
		setTile(x+2, 0, z, getTile(x+2,0,z), 1);
		if(dimension==0){
		call("worldGeneration", x, z);}
		if(dimension==1){
		call("netherGeneration", x, z);}
		if(dimension==2){
		call("endGeneration", x, z);}
	}
}*/

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
			GenerationUtils.lockInBlock(BlockID.netherOre, 0, 1, false);
			for(var i = 0; i < 10; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 123);
				Generation.genOreTiny(coords.x, coords.y, coords.z, 5);
			}
		});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
GenerationUtils.lockInBlock(BlockID.realmiteOre, 0, 1, false);
			for(var i = 0; i < 13; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 35);
				Generation.genOreTiny(coords.x, coords.y, coords.z, 5);
			}

GenerationUtils.lockInBlock(BlockID.iceOre, 0, 1, false);
			for(var i = 0; i < 7; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 35);
				Generation.genOreTiny(coords.x, coords.y, coords.z, 3);
			}

GenerationUtils.lockInBlock(BlockID.arlemiteOre, 0, 1, false);
			for(var i = 0; i < 7; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 35);
				Generation.genOreTiny(coords.x, coords.y, coords.z, 2 + Math.random() * 5);
			}

GenerationUtils.lockInBlock(BlockID.rupeeOre, 0, 1, false);
			for(var i = 0; i < 7; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 35);
				Generation.genOreTiny(coords.x, coords.y, coords.z, 2 + Math.random() * 5);
			}
GenerationUtils.lockInBlock(BlockID.corruptOre, 0, 1, false);
			for(var i = 0; i < 7; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
				Generation.genOreTiny(coords.x, coords.y, coords.z, 3);
			}
});

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
 for (var g = 0; g < 9; g++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 35);

GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
  id: BlockID.coalstone,
  data: 0,
  size: 1 + Math.random() * 2,
  ratio: .8,
  checkerTile: 1,
  checkerMode: false

  });
 }
  for (var w = 0; w < 9; w++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 13, 25);

GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
  id: BlockID.terrablock,
  data: 0,
  size: 1,
  ratio: .8,
  checkerTile: 1,
  checkerMode: false

  });
 }

 for (var z = 0; z < 5; z++){

  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 15);

  GenerationUtils.genMinable(coords.x, coords.y, coords.z,{
  id: BlockID.smeshOre,
  data: 0,
  size: 1,
  ratio: .8,
  checkerTile: 1,
  checkerMode: false

  });
 }
});

IDRegistry.genBlockID("coalstone");
Block.createBlock("coalstone", [
	{name: "", texture: [["coalstone", 0], ["coalstone", 0], ["coalstone", 0], ["coalstone", 0], ["coalstone", 0], ["coalstone", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.coalstone, "stone");

IDRegistry.genBlockID("coalstoneFur");
Block.createBlockWithRotation("coalstoneFur", [
	{name: "", texture: [["coalstone", 0], ["coalstone", 0], ["coalstone", 0], ["coalstone", 1], ["coalstone", 0], ["coalstone", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.coalstoneFur, "stone");

	Recipes.addShaped({id: BlockID.coalstoneFur, count: 1, data: 0}, [
		"xxx",
		"x x",
		"xxx"
	], ['x', BlockID.coalstone, 0]);

TileEntity.registerPrototype(BlockID.coalstoneFur, {
	defaultValues: {
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiTinyFurnace;
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		var wgb = World.getBlock;
		var wgb1 = wgb(this.x,this.y+1,this.z);
		var wgb2 = wgb(this.x,this.y-1,this.z);
		var bcl = BlockID.coalstone
		if(result && wgb1.id == bcl && wgb2.id == bcl){
			var resultSlot = this.container.getSlot("slotResult");
			this.data.porgress++
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress >= 50){
				sourceSlot.count--;
				
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 50);
	}
});
IDRegistry.genItemID("edenPhaser");
IDRegistry.genItemID("wildwoodPhaser");
IDRegistry.genItemID("apalachiaPhaser");
IDRegistry.genItemID("ternPhaser");
IDRegistry.genItemID("mortumPhaser");
IDRegistry.genItemID("halitePhaser");
IDRegistry.genItemID("goldenFury");
Item.createItem("edenPhaser", "Eden Phaser", {name: "edenPhaser"}, {stack: 1});
Item.createItem("wildwoodPhaser", "Wildwood Phaser", {name: "wildwoodPhaser"}, {stack: 1});
Item.createItem("ternPhaser", "Skythern Phaser", {name: "skythernPhaser"}, {stack: 1});
Item.createItem("apalachiaPhaser", "Apalachia Phaser", {name: "apalachiaPhaser"}, {stack: 1});
Item.createItem("mortumPhaser", "Mortum Phaser", {name: "mortumPhaser"}, {stack: 1});
Item.createItem("halitePhaser", "Halite Phaser", {name: "halitePhaser"}, {stack: 1});
Item.createItem("goldenFury", "Golden Fury", {name: "goldenFury"}, {stack: 1});
ToolAPI.addToolMaterial("phaser", {durability: 10000, level: 4, efficiency: 4, damage: 0, enchantability: 13});
/*//phasers
ToolAPI.setTool(ItemID.edenPhaser, "phaser", ToolType.phaser);
ToolAPI.setTool(ItemID.apalachiaPhaser, "phaser", ToolType.phaser);
ToolAPI.setTool(ItemID.wildwoodPhaser, "phaser", ToolType.phaser);
ToolAPI.setTool(ItemID.ternPhaser, "phaser", ToolType.phaser);
ToolAPI.setTool(ItemID.mortumPhaser, "phaser", ToolType.phaser);
ToolAPI.setTool(ItemID.halitePhaser, "phaser", ToolType.phaser);
ToolAPI.setTool(ItemID.goldenFury, "phaser", ToolType.phaser);
Callback.addCallback("tick", function(){
 var item = Player.getCarriedItem();
 if (item.id == ItemID.edenPhaser){
UIbuttons.enableButton("button_shoot");}});
Callback.addCallback("tick", function(){
 var item = Player.getCarriedItem();
 if (item.id == ItemID.apalachiaPhaser){
UIbuttons.enableButton("button_shoot");}});
Callback.addCallback("tick", function(){
 var item = Player.getCarriedItem();
 if (item.id == ItemID.wildwoodPhaser){
UIbuttons.enableButton("button_shoot");}});
Callback.addCallback("tick", function(){
 var item = Player.getCarriedItem();
 if (item.id == ItemID.mortumPhaser){
UIbuttons.enableButton("button_shoot");}});
Callback.addCallback("tick", function(){
 var item = Player.getCarriedItem();
 if (item.id == ItemID.ternPhaser){
UIbuttons.enableButton("button_shoot");}});
Callback.addCallback("tick", function(){
 var item = Player.getCarriedItem();
 if (item.id == ItemID.halitePhaser){
UIbuttons.enableButton("button_shoot");}});
Callback.addCallback("tick", function(){
 var item = Player.getCarriedItem();
 if (item.id == ItemID.goldenFury){
UIbuttons.enableButton("button_shoot");}});
Recipes.addShaped({id: ItemID.edenPhaser, count: 1, data: 0}, [
		" x ",
		"xxx",
		" b "
	], ['x', ItemID.edemkristal, 0,'b',280,0]);
	Recipes.addShaped({id: ItemID.wildwoodPhaser, count: 1, data: 0}, [
		" x ",
		"xxx",
		" b "
	], ['x', ItemID.leskristal, 0,'b',280,0]);
	Recipes.addShaped({id: ItemID.ternPhaser, count: 1, data: 0}, [
		" x ",
		"xxx",
		" b "
	], ['x', ItemID.ternkristal, 0,'b',280,0]);
	 	Recipes.addShaped({id: ItemID.halitePhaser, count: 1, data: 0}, [
		" x ",
		"xxx",
		" b "
	], ['x', 388, 0,'b',280,0]);
	Recipes.addShaped({id: ItemID.apalachiaPhaser, count: 1, data: 0}, [
		" x ",
		"xxx",
		" b "
	], ['x', ItemID.apakristal, 0,'b',280,0]);
	Recipes.addShaped({id: ItemID.mortumPhaser, count: 1, data: 0}, [
		" x ",
		"xxx",
		" b "
	], ['x', ItemID.morkristal, 0,'b',280,0]);*/
//angelic
//for methods

Callback.addCallback("tick", function(){if(Player.getArmorSlot(0).id==ItemID.angel1&&Player.getArmorSlot(1).id==ItemID.angel2&&Player.getArmorSlot(2).id==ItemID.angel3&&Player.getArmorSlot(3).id==ItemID.angel4){UIbuttons.enableButton("button_fly");}});

//register component
IDRegistry.genItemID("angel");
Item.createItem("angel", "Angelic Crystal", {name: "angelian_crystal"});
Recipes.addShaped({id: ItemID.angel, count: 1, data: 0}, [
		" xb "
	], ['x', ItemID.morkristal, 0,'b',388,0]);
	
//registerArmor
IDRegistry.genItemID("angel1");
IDRegistry.genItemID("angel2");
IDRegistry.genItemID("angel3");
IDRegistry.genItemID("angel4");
Item.createArmorItem("angel1", "Ангелскый шлем", {name: "angelicHelmet"}, {type: "helmet", armor: 3, durability: 10000000, texture: "armor/angelic_1.png"});
Item.createArmorItem("angel2", "Ангелская кираса", {name: "angelicChestplate"}, {type: "chestplate", armor: 3, durability: 10000000, texture: "armor/angelic_1.png"});
Item.createArmorItem("angel3", "Ангелские поножи", 
{name: "angelicLeggings"}, {type: "leggings", armor: 3, durability: 10000000, 
texture: "armor/angelic_2.png"});
Item.createArmorItem("angel4", "Ангелские ботинки", {name: "angelicBoots"}, 
{type: "boots", 
armor: 3, 
durability: 10000000, 
texture: "armor/angelic_1.png"});

 Recipes.addShaped({id: ItemID.angel1, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.angel, 0]);
	
	Recipes.addShaped({id: ItemID.angel2, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.angel, 0]);
	
	Recipes.addShaped({id: ItemID.angel3, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.angel, 0]);
	
	Recipes.addShaped({id: ItemID.angel4, count: 1, data: 0}, [
     "x x",
		"x x"
	], ['x', ItemID.angel, 0]);