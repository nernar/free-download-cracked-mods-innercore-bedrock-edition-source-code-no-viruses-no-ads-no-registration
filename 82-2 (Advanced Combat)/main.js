importLib("ToolType", "*")
IDRegistry.genBlockID("steelblock1");
Block.createBlockWithRotation("steelblock1", [
	{name: "Steel Block", texture: [["steel_block", 0], ["steel_block", 0], ["steel_block", 0], ["steel_block", 0], ["steel_block", 0], ["steel_block", 0]], inCreative: false}
]);
IDRegistry.genItemID("awood");
IDRegistry.genItemID("astone");
IDRegistry.genItemID("airon");
IDRegistry.genItemID("asteel");
IDRegistry.genItemID("agold");
IDRegistry.genItemID("adiamond");
IDRegistry.genItemID("aemerald");
IDRegistry.genItemID("anether");
Item.createItem("awood", "Advanced Wooden Sword", {name: "advanced_wooden_sword", meta: 0}, {stack: 1});
Item.createItem("astone", "§8Advanced Stone Sword", {name: "advanced_stone_sword", meta: 0}, {stack: 1});
Item.createItem("airon", "§7Advanced Iron Sword", {name: "advanced_iron_sword", meta: 0}, {stack: 1});
Item.createItem("asteel", "Advanced Steel Sword", {name: "advanced_steel_sword", meta: 0}, {isTech: true, stack: 1});
Item.createItem("agold", "§6Advanced Golden Sword", {name: "advanced_golden_sword", meta: 0}, {stack: 1});
Item.createItem("adiamond", "§3Advanced Diamond Sword", {name: "advanced_diamond_sword", meta: 0}, {stack: 1});
Item.createItem("aemerald", "§2Emerald Sword", {name: "advanced_emerald_sword", meta: 0}, {stack: 1});
Item.createItem("anether", "§bNether Star Sword", {name: "nether_star_sword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("aawood", {durability: 100, level: 3, efficiency: 4, damage: 0, enchantability: 30});
ToolAPI.addToolMaterial("aastone", {durability: 200, level: 3, efficiency: 4, damage: 1, enchantability: 30});
ToolAPI.addToolMaterial("aairon", {durability: 500, level: 3, efficiency: 4, damage: 3, enchantability: 30});
ToolAPI.addToolMaterial("aasteel", {durability: 1000, level: 3, efficiency: 4, damage: 4, enchantability: 30});
ToolAPI.addToolMaterial("aagold", {durability: 700, level: 3, efficiency: 4, damage: 3, enchantability: 30});
ToolAPI.addToolMaterial("aadiamond", {durability: 7000, level: 3, efficiency: 4, damage: 6, enchantability: 30});
ToolAPI.addToolMaterial("aaemerald", {durability: 700, level: 3, efficiency: 4, damage: 4, enchantability: 30});
ToolAPI.addToolMaterial("aanether", {durability: 70000, level: 3, efficiency: 4, damage: 76, enchantability: 30});
ToolAPI.setTool(ItemID.asteel, "aasteel", ToolType.sword);
ToolAPI.setTool(ItemID.awood, "aawood", ToolType.sword);
ToolAPI.setTool(ItemID.airon, "aairon", ToolType.sword);
ToolAPI.setTool(ItemID.agold, "aagold", ToolType.sword);
ToolAPI.setTool(ItemID.adiamond, "aadiamond", ToolType.sword);
ToolAPI.setTool(ItemID.astone, "aastone", ToolType.sword);
ToolAPI.setTool(ItemID.aemerald, "aaemerald", ToolType.sword);
ToolAPI.setTool(ItemID.anether, "aanether", ToolType.sword);
IDRegistry.genItemID("woodhelmet");
IDRegistry.genItemID("woodchestplate");
IDRegistry.genItemID("woodleggings");
IDRegistry.genItemID("woodboots");


Item.createArmorItem("woodhelmet", "Wood Helmet", {name: "wood_helmet", meta: 0}, {type: "helmet", armor: 1, durability: 30, texture: "armor/wood_layer_1.png"});
Item.createArmorItem("woodchestplate", "Wood Chestplate", {name: "wood_chestplate", meta: 0}, {type: "chestplate", armor: 3, durability: 50, texture: "armor/wood_layer_1.png"});
Item.createArmorItem("woodleggings", "Wood Leggings", {name: "wood_leggings", meta: 0}, {type: "leggings", armor: 2, durability: 40, texture: "armor/wood_layer_2.png"});
Item.createArmorItem("woodboots", "Wood Boots", {name: "wood_boots", meta: 0}, {type: "boots", armor: 1, durability: 20, texture: "armor/wood_layer_1.png"});



Recipes.addShaped({id: ItemID.woodhelmet, count: 1, data: 0}, 
["aaa", 
 "a a",
 "   "],
["a", 17, 0]);

Recipes.addShaped({id: ItemID.woodchestplate, count: 1, data: 0}, 
["a a", 
 "aaa",
 "aaa"],
["a", 17, 0]);

Recipes.addShaped({id: ItemID.woodleggings, count: 1, data: 0}, 
["aaa", 
 "a a",
 "a a"],
["a", 17, 0]);

Recipes.addShaped({id: ItemID.woodboots, count: 1, data: 0}, 
["a a", 
 "a a",
 "   "],
["a", 17, 0]);


IDRegistry.genItemID("stonehelmet");
IDRegistry.genItemID("stonechestplate");
IDRegistry.genItemID("stoneleggings");
IDRegistry.genItemID("stoneboots");


Item.createArmorItem("stonehelmet", "Stone Helmet", {name: "stone_helmet", meta: 0}, {type: "helmet", armor: 2, durability: 80, texture: "armor/stone_layer_1.png"});
Item.createArmorItem("stonechestplate", "Stone Chestplate", {name: "stone_chestplate", meta: 0}, {type: "chestplate", armor: 4, durability: 100, texture: "armor/stone_layer_1.png"});
Item.createArmorItem("stoneleggings", "Stone Leggings", {name: "stone_leggings", meta: 0}, {type: "leggings", armor: 2, durability: 90, texture: "armor/stone_layer_2.png"});
Item.createArmorItem("stoneboots", "Stone Boots", {name: "stone_boots", meta: 0}, {type: "boots", armor: 1, durability: 70, texture: "armor/stone_layer_1.png"});



Recipes.addShaped({id: ItemID.stonehelmet, count: 1, data: 0}, 
["aaa", 
 "a a",
 "   "],
["a", 1, 0]);

Recipes.addShaped({id: ItemID.stonechestplate, count: 1, data: 0}, 
["a a", 
 "aaa",
 "aaa"],
["a", 1, 0]);

Recipes.addShaped({id: ItemID.stoneleggings, count: 1, data: 0}, 
["aaa", 
 "a a",
 "a a"],
["a", 1, 0]);

Recipes.addShaped({id: ItemID.stoneboots, count: 1, data: 0}, 
["a a", 
 "a a",
 "   "],
["a", 1, 0]);


IDRegistry.genItemID("netherhelmet");
IDRegistry.genItemID("netherchestplate");
IDRegistry.genItemID("netherleggings");
IDRegistry.genItemID("netherboots");


Item.createArmorItem("netherhelmet", "Nether Helmet", {name: "nether_helmet", meta: 0}, {type: "helmet", armor: 3, durability: 300, texture: "armor/nether_layer_1.png"});
Item.createArmorItem("netherchestplate", "Nether Chestplate", {name: "nether_chestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 500, texture: "armor/nether_layer_1.png"});
Item.createArmorItem("netherleggings", "Nether Leggings", {name: "nether_leggings", meta: 0}, {type: "leggings", armor: 5, durability: 400, texture: "armor/nether_layer_2.png"});
Item.createArmorItem("netherboots", "Nether Boots", {name: "nether_boots", meta: 0}, {type: "boots", armor: 1, durability: 200, texture: "armor/nether_layer_1.png"});



Recipes.addShaped({id: ItemID.netherhelmet, count: 1, data: 0}, 
["aaa", 
 "a a",
 "   "],
["a", 87, 0]);

Recipes.addShaped({id: ItemID.netherchestplate, count: 1, data: 0}, 
["a a", 
 "aaa",
 "aaa"],
["a", 87, 0]);

Recipes.addShaped({id: ItemID.netherleggings, count: 1, data: 0}, 
["aaa", 
 "a a",
 "a a"],
["a", 87, 0]);

Recipes.addShaped({id: ItemID.netherboots, count: 1, data: 0}, 
["a a", 
 "a a",
 "   "],
["a", 87, 0]);

Recipes.addShaped({id: ItemID.awood, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 17, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.astone, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 1, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.airon, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 42, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.asteel, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", BlockID.steelblock1, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.agold, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 41, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.adiamond, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 57, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.aemerald, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 388, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.anether, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 399, 0, "b", 280, 0]);
Item.setToolRender("awood", true);