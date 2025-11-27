importLib("ToolType","*")



//ENERIUM

IDRegistry.genBlockID("yeneriumblock");
Block.createBlock("yeneriumblock", [{name: "Йенериумный блок", texture: [["yeneriumblock", 0], ["yeneriumblock", 0], ["yeneriumblock", 0], ["yeneriumblock", 0], ["yeneriumblock", 0], ["yeneriumblock", 0]], inCreative: true}]);

IDRegistry.genBlockID("yeneriumore");
Block.createBlock("yeneriumore", [{name: "Йенериумная руда", texture: [["yeneriumore", 0], ["yeneriumore", 0], ["yeneriumore", 0], ["yeneriumore", 0], ["yeneriumore", 0], ["yeneriumore", 0]], inCreative: true}]);

IDRegistry.genItemID("yeneriumingot");
Item.createItem("yeneriumingot", "Йенериумный слиток", {name: "yeneriumingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.yeneriumingot, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.yeneriumblock, 0]);

Recipes.addShaped({id: BlockID.yeneriumblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.yeneriumingot, 0]);

Recipes.addFurnace(BlockID.yeneriumore, ItemID.yeneriumingot, 1);

IDRegistry.genItemID("yeneriumsword");
IDRegistry.genItemID("yeneriumpickaxe");
IDRegistry.genItemID("yeneriumaxe");
IDRegistry.genItemID("yeneriumshovel");
Item.createItem("yeneriumsword", "Йенериумный меч", {name: "yeneriumsword", meta: 0}, {stack: 1});
Item.createItem("yeneriumpickaxe", "Йенериумная кирка", {name: "yeneriumpickaxe", meta: 0}, {stack: 1});
Item.createItem("yeneriumaxe", "Йенериумный топор", {name: "yeneriumaxe", meta: 0}, {stack: 1});
Item.createItem("yeneriumshovel", "Йенериумная лопата", {name: "yeneriumshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("yenerium", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.yeneriumsword, "yenerium", ToolType.sword);
ToolAPI.setTool(ItemID.yeneriumpickaxe, "yenerium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.yeneriumaxe, "yenerium", ToolType.axe);
ToolAPI.setTool(ItemID.yeneriumshovel, "yenerium", ToolType.shovel);

IDRegistry.genItemID("yeneriumhelmet");
IDRegistry.genItemID("yeneriumchestplate");
IDRegistry.genItemID("yeneriumleggings");
IDRegistry.genItemID("yeneriumboots");

Item.createArmorItem("yeneriumhelmet", "Йенериумный шлем", {name: "yeneriumhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/yeneriumarmor.png"});
Item.createArmorItem("yeneriumchestplate", "Йенериумный нагрудник", {name: "yeneriumchestplate", meta: 0}, {type: "chestplate", armor: 4, durability: 750, texture: "armor/yeneriumarmor.png"});
Item.createArmorItem("yeneriumleggings", "Йенериумные поножи", {name: "yeneriumleggings", meta: 0}, {type: "leggings", armor: 4, durability: 700, texture: "armor/yeneriumarmor0.png"});
Item.createArmorItem("yeneriumboots", "Йенериумные ботинки", {name: "yeneriumboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/yeneriumarmor.png"});

Recipes.addShaped({id: ItemID.yeneriumsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.yeneriumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.yeneriumpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.yeneriumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.yeneriumaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.yeneriumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.yeneriumshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.yeneriumingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.yeneriumhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.yeneriumingot, 0]);
Recipes.addShaped({id: ItemID.yeneriumchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.yeneriumingot, 0]);
Recipes.addShaped({id: ItemID.yeneriumleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.yeneriumingot, 0]);
Recipes.addShaped({id: ItemID.yeneriumboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.yeneriumingot, 0]);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.yeneriumore, 0, 10);
    }
}
)

//JIULIUM

IDRegistry.genBlockID("jiuliumblock");
Block.createBlock("jiuliumblock", [{name: "Джиулиумный блок", texture: [["jiuliumblock", 0], ["jiuliumblock", 0], ["jiuliumblock", 0], ["jiuliumblock", 0], ["jiuliumblock", 0], ["jiuliumblock", 0]], inCreative: true}]);

IDRegistry.genBlockID("jiuliumore");
Block.createBlock("jiuliumore", [{name: "Джиулиумная руда", texture: [["jiuliumore", 0], ["jiuliumore", 0], ["jiuliumore", 0], ["jiuliumore", 0], ["jiuliumore", 0], ["jiuliumore", 0]], inCreative: true}]);

IDRegistry.genItemID("jiuliumingot");
Item.createItem("jiuliumingot", "Джиулиумный слиток", {name: "jiuliumingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.jiuliumingot, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.jiuliumblock, 0]);

Recipes.addShaped({id: BlockID.jiuliumblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.jiuliumingot, 0]);

Recipes.addFurnace(BlockID.jiuliumore, ItemID.jiuliumingot, 1);

IDRegistry.genItemID("jiuliumsword");
IDRegistry.genItemID("jiuliumpickaxe");
IDRegistry.genItemID("jiuliumaxe");
IDRegistry.genItemID("jiuliumshovel");
Item.createItem("jiuliumsword", "Джиулиумный меч", {name: "jiuliumsword", meta: 0}, {stack: 1});
Item.createItem("jiuliumpickaxe", "Джиулиумная кирка", {name: "jiuliumpickaxe", meta: 0}, {stack: 1});
Item.createItem("jiuliumaxe", "Джиулиумный топор", {name: "jiuliumaxe", meta: 0}, {stack: 1});
Item.createItem("jiuliumshovel", "Джиулиумная лопата", {name: "jiuliumshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("jiulium", {durability: 3400, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.jiuliumsword, "jiulium", ToolType.sword);
ToolAPI.setTool(ItemID.jiuliumpickaxe, "jiulium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.jiuliumaxe, "jiulium", ToolType.axe);
ToolAPI.setTool(ItemID.jiuliumshovel, "jiulium", ToolType.shovel);

IDRegistry.genItemID("jiuliumhelmet");
IDRegistry.genItemID("jiuliumchestplate");
IDRegistry.genItemID("jiuliumleggings");
IDRegistry.genItemID("jiuliumboots");

Item.createArmorItem("jiuliumhelmet", "Джиулиумный шлем", {name: "jiuliumhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/jiuliumarmor.png"});
Item.createArmorItem("jiuliumchestplate", "Джиулиумный нагрудник", {name: "jiuliumchestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 750, texture: "armor/jiuliumarmor.png"});
Item.createArmorItem("jiuliumleggings", "Джиулиумные поножи", {name: "jiuliumleggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/jiuliumarmor0.png"});
Item.createArmorItem("jiuliumboots", "Джиулиумные ботинки", {name: "jiuliumboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/jiuliumarmor.png"});

Recipes.addShaped({id: ItemID.jiuliumsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.jiuliumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.jiuliumpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.jiuliumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.jiuliumaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.jiuliumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.jiuliumshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.jiuliumingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.jiuliumhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.jiuliumingot, 0]);
Recipes.addShaped({id: ItemID.jiuliumchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.jiuliumingot, 0]);
Recipes.addShaped({id: ItemID.jiuliumleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.jiuliumingot, 0]);
Recipes.addShaped({id: ItemID.jiuliumboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.jiuliumingot, 0]);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.jiuliumore, 0, 10);
    }
}
)

//CRIUM

IDRegistry.genBlockID("criumblock");
Block.createBlock("criumblock", [{name: "Криумный блок", texture: [["criumblock", 0], ["criumblock", 0], ["criumblock", 0], ["criumblock", 0], ["criumblock", 0], ["criumblock", 0]], inCreative: true}]);

IDRegistry.genBlockID("criumore");
Block.createBlock("criumore", [{name: "Криумная руда", texture: [["criumore", 0], ["criumore", 0], ["criumore", 0], ["criumore", 0], ["criumore", 0], ["criumore", 0]], inCreative: true}]);

IDRegistry.genItemID("criumingot");
Item.createItem("criumingot", "Криумный слиток", {name: "criumingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.criumingot, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.criumblock, 0]);

Recipes.addShaped({id: BlockID.criumblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.criumingot, 0]);

Recipes.addFurnace(BlockID.criumore, ItemID.criumingot, 1);

IDRegistry.genItemID("criumsword");
IDRegistry.genItemID("criumpickaxe");
IDRegistry.genItemID("criumaxe");
IDRegistry.genItemID("criumshovel");
Item.createItem("criumsword", "Криумный меч", {name: "criumsword", meta: 0}, {stack: 1});
Item.createItem("criumpickaxe", "Криумная кирка", {name: "criumpickaxe", meta: 0}, {stack: 1});
Item.createItem("criumaxe", "Криумный топор", {name: "criumaxe", meta: 0}, {stack: 1});
Item.createItem("criumshovel", "Криумная лопата", {name: "criumshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("crium", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.criumsword, "crium", ToolType.sword);
ToolAPI.setTool(ItemID.criumpickaxe, "crium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.criumaxe, "crium", ToolType.axe);
ToolAPI.setTool(ItemID.criumshovel, "crium", ToolType.shovel);

IDRegistry.genItemID("criumhelmet");
IDRegistry.genItemID("criumchestplate");
IDRegistry.genItemID("criumleggings");
IDRegistry.genItemID("criumboots");

Item.createArmorItem("criumhelmet", "Криумный шлем", {name: "criumhelmet", meta: 0}, {type: "helmet", armor: 6, durability: 650, texture: "armor/criumarmor.png"});
Item.createArmorItem("criumchestplate", "Криумный нагрудник", {name: "criumchestplate", meta: 0}, {type: "chestplate", armor: 7, durability: 750, texture: "armor/criumarmor.png"});
Item.createArmorItem("criumleggings", "Криумные поножи", {name: "criumleggings", meta: 0}, {type: "leggings", armor: 6, durability: 700, texture: "armor/criumarmor0.png"});
Item.createArmorItem("criumboots", "Криумные ботинки", {name: "criumboots", meta: 0}, {type: "boots", armor: 6, durability: 600, texture: "armor/criumarmor.png"});

Recipes.addShaped({id: ItemID.criumsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.criumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.criumpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.criumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.criumaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.criumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.criumshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.criumingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.criumhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.criumingot, 0]);
Recipes.addShaped({id: ItemID.criumchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.criumingot, 0]);
Recipes.addShaped({id: ItemID.criumleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.criumingot, 0]);
Recipes.addShaped({id: ItemID.criumboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.criumingot, 0]);

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.criumore, 0, 10);
    }
}
)

//DARKYENORIUM

IDRegistry.genBlockID("darkyenoriumblock");
Block.createBlock("darkyenoriumblock", [{name: "Темный йенориумный блок", texture: [["darkyenoriumblock", 0], ["darkyenoriumblock", 0], ["darkyenoriumblock", 0], ["darkyenoriumblock", 0], ["darkyenoriumblock", 0], ["darkyenoriumblock", 0]], inCreative: true}]);

IDRegistry.genItemID("darkyenoriumingot");
Item.createItem("darkyenoriumingot", "Темный йенориумный слиток", {name: "darkyenoriumingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.darkyenoriumingot, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.darkyenoriumblock, 0]);

Recipes.addShaped({id: BlockID.darkyenoriumblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.darkyenoriumingot, 0]);

IDRegistry.genItemID("darkyenoriumsword");
IDRegistry.genItemID("darkyenoriumpickaxe");
IDRegistry.genItemID("darkyenoriumaxe");
IDRegistry.genItemID("darkyenoriumshovel");
Item.createItem("darkyenoriumsword", "Темный йенориумный меч", {name: "darkyenoriumsword", meta: 0}, {stack: 1});
Item.createItem("darkyenoriumpickaxe", "Темная йенориумная кирка", {name: "darkyenoriumpickaxe", meta: 0}, {stack: 1});
Item.createItem("darkyenoriumaxe", "Темный йенориумный топор", {name: "darkyenoriumaxe", meta: 0}, {stack: 1});
Item.createItem("darkyenoriumshovel", "Темная йенориумная лопата", {name: "darkyenoriumshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("darkyenorium", {durability: 3400, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.darkyenoriumsword, "darkyenorium", ToolType.sword);
ToolAPI.setTool(ItemID.darkyenoriumpickaxe, "darkyenorium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.darkyenoriumaxe, "darkyenorium", ToolType.axe);
ToolAPI.setTool(ItemID.darkyenoriumshovel, "darkyenorium", ToolType.shovel);

IDRegistry.genItemID("darkyenoriumhelmet");
IDRegistry.genItemID("darkyenoriumchestplate");
IDRegistry.genItemID("darkyenoriumleggings");
IDRegistry.genItemID("darkyenoriumboots");

Item.createArmorItem("darkyenoriumhelmet", "Темный йенориумный шлем", {name: "darkyenoriumhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/darkyenoriumarmor.png"});
Item.createArmorItem("darkyenoriumchestplate", "Темный йенориумный нагрудник", {name: "darkyenoriumchestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 750, texture: "armor/darkyenoriumarmor.png"});
Item.createArmorItem("darkyenoriumleggings", "Темные йенориумные поножи", {name: "darkyenoriumleggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/darkyenoriumarmor0.png"});
Item.createArmorItem("darkyenoriumboots", "Темные йенориумные ботинки", {name: "darkyenoriumboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/darkyenoriumarmor.png"});

Recipes.addShaped({id: ItemID.darkyenoriumsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.darkyenoriumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.darkyenoriumpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.darkyenoriumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.darkyenoriumaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.darkyenoriumingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.darkyenoriumshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.darkyenoriumingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.darkyenoriumhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.darkyenoriumingot, 0]);
Recipes.addShaped({id: ItemID.darkyenoriumchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.darkyenoriumingot, 0]);
Recipes.addShaped({id: ItemID.darkyenoriumleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.darkyenoriumingot, 0]);
Recipes.addShaped({id: ItemID.darkyenoriumboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.darkyenoriumingot, 0]);


//OTHER

IDRegistry.genItemID("obsidianingot");
Item.createItem("obsidianingot", "Кусок обсидиана", {name: "obsidian", meta: 0}, {stack: 64});

Block.registerDropFunction(49, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.obsidian, 1, 0]);
 return drop;
});

Recipes.addShaped({id: ItemID.obsidianingot, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', 49, 0]);

Recipes.addShaped({id: 49, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.obsidianingot, 0]);

Recipes.addShaped({id: ItemID.darkyenoriumingot, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', ItemID.obsidianingot, 0, 'b', ItemID.yeneriumingot, 0]);

//OBSIDIAN

IDRegistry.genItemID("obsidiansword");
IDRegistry.genItemID("obsidianpickaxe");
IDRegistry.genItemID("obsidianaxe");
IDRegistry.genItemID("obsidianshovel");
Item.createItem("obsidiansword", "Обсидиановый меч", {name: "obsidiansword", meta: 0}, {stack: 1});
Item.createItem("obsidianpickaxe", "Обсидиановая кирка", {name: "obsidianpickaxe", meta: 0}, {stack: 1});
Item.createItem("obsidianaxe", "Обсидиановый топор", {name: "obsidianaxe", meta: 0}, {stack: 1});
Item.createItem("obsidianshovel", "Обсидиановая лопата", {name: "obsidianshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("obsidian", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.obsidiansword, "obsidian", ToolType.sword);
ToolAPI.setTool(ItemID.obsidianpickaxe, "obsidian", ToolType.pickaxe);
ToolAPI.setTool(ItemID.obsidianaxe, "obsidian", ToolType.axe);
ToolAPI.setTool(ItemID.obsidianshovel, "obsidian", ToolType.shovel);

IDRegistry.genItemID("obsidianhelmet");
IDRegistry.genItemID("obsidianchestplate");
IDRegistry.genItemID("obsidianleggings");
IDRegistry.genItemID("obsidianboots");

Item.createArmorItem("obsidianhelmet", "Обсидиановый шлем", {name: "obsidianhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/obsidianarmor.png"});
Item.createArmorItem("obsidianchestplate", "Обсидиановый нагрудник", {name: "obsidianchestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 750, texture: "armor/obsidianarmor.png"});
Item.createArmorItem("obsidianleggings", "Обсидиановые поножи", {name: "obsidianleggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/obsidianarmor0.png"});
Item.createArmorItem("obsidianboots", "Обсидиановые ботинки", {name: "obsidianboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/obsidianarmor.png"});

Recipes.addShaped({id: ItemID.obsidiansword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.obsidianingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.obsidianpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.obsidianingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.obsidianaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.obsidianingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.obsidianshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.obsidianingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.obsidianhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.obsidianingot, 0]);
Recipes.addShaped({id: ItemID.obsidianchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.obsidianingot, 0]);
Recipes.addShaped({id: ItemID.obsidianleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.obsidianingot, 0]);
Recipes.addShaped({id: ItemID.obsidianboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.obsidianingot, 0]);

var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({ 
  lightlevel: 15, 
  lightopacity: 0 
  }); 

IDRegistry.genBlockID("arrowblock");
Block.createBlock("arrowblock", [{name: "Блок стрел", texture: [["arrowblocktop", 0], ["arrowblocktop", 0], ["arrowblock", 0], ["arrowblock", 0], ["arrowblock", 0], ["arrowblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.arrowblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 262, 0]);
Recipes.addShaped({id: 262, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.arrowblock, 0]);

IDRegistry.genBlockID("blazepowderblock");
Block.createBlock("blazepowderblock", [{name: "Блок огненого порошка", texture: [["blazepowderblock", 0], ["blazepowderblock", 0], ["blazepowderblock", 0], ["blazepowderblock", 0], ["blazepowderblock", 0], ["blazepowderblock", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
Recipes.addShaped({id: BlockID.blazepowderblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 377, 0]);
Recipes.addShaped({id: 377, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.blazepowderblock, 0]);

IDRegistry.genBlockID("blazerodblock");
Block.createBlock("blazerodblock", [{name: "Блок жезлов ифрита", texture: [["blazerodblock", 0], ["blazerodblock", 0], ["blazerodblock", 0], ["blazerodblock", 0], ["blazerodblock", 0], ["blazerodblock", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
Recipes.addShaped({id: BlockID.blazerodblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 369, 0]);
Recipes.addShaped({id: 369, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.blazerodblock, 0]);

IDRegistry.genBlockID("breadblock");
Block.createBlock("breadblock", [{name: "Блок хлеба", texture: [["breadblock", 0], ["breadblock", 0], ["breadblock", 0], ["breadblock", 0], ["breadblock", 0], ["breadblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.breadblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 297, 0]);
Recipes.addShaped({id: 297, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.breadblock, 0]);

IDRegistry.genBlockID("cakeblock");
Block.createBlock("cakeblock", [{name: "Блок торта", texture: [["cakeblockbottom", 0], ["cakeblocktop", 0], ["cakeblock", 0], ["cakeblock", 0], ["cakeblock", 0], ["cakeblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cakeblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 354, 0]);
Recipes.addShaped({id: 354, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.cakeblock, 0]);

IDRegistry.genBlockID("carrotblock");
Block.createBlock("carrotblock", [{name: "Блок морковки", texture: [["carrotblocktop", 0], ["carrotblocktop", 0], ["carrotblock", 0], ["carrotblock", 0], ["carrotblock", 0], ["carrotblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carrotblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 391, 0]);
Recipes.addShaped({id: 391, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.carrotblock, 0]);

IDRegistry.genBlockID("cookieblock");
Block.createBlock("cookieblock", [{name: "Блок печенья", texture: [["cookieblock", 0], ["cookieblock", 0], ["cookieblock", 0], ["cookieblock", 0], ["cookieblock", 0], ["cookieblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cookieblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 357, 0]);
Recipes.addShaped({id: 357, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.cookieblock, 0]);

IDRegistry.genBlockID("enderpearlblock");
Block.createBlock("enderpearlblock", [{name: "Блок жемчуга эндера", texture: [["enderpearlblock", 0], ["enderpearlblock", 0], ["enderpearlblock", 0], ["enderpearlblock", 0], ["enderpearlblock", 0], ["enderpearlblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.enderpearlblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 368, 0]);
Recipes.addShaped({id: 368, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.enderpearlblock, 0]);

IDRegistry.genBlockID("featherblock");
Block.createBlock("featherblock", [{name: "Блок перьев", texture: [["featherblock", 0], ["featherblock", 0], ["featherblock", 0], ["featherblock", 0], ["featherblock", 0], ["featherblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.featherblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 288, 0]);
Recipes.addShaped({id: 288, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.featherblock, 0]);

IDRegistry.genBlockID("fishblock");
Block.createBlock("fishblock", [{name: "Блок рыбы", texture: [["fishblock", 0], ["fishblock", 0], ["fishblock", 0], ["fishblock", 0], ["fishblock", 0], ["fishblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.fishblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 349, 0]);
Recipes.addShaped({id: 349, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.fishblock, 0]);

IDRegistry.genBlockID("ghasttearsblock");
Block.createBlock("ghasttearsblock", [{name: "Блок слез гаста", texture: [["ghasttearsblock", 0], ["ghasttearsblock", 0], ["ghasttearsblock", 0], ["ghasttearsblock", 0], ["ghasttearsblock", 0], ["ghasttearsblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.ghasttearsblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 370, 0]);
Recipes.addShaped({id: 370, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.ghasttearsblock, 0]);

IDRegistry.genBlockID("goldcarrotblock");
Block.createBlock("goldcarrotblock", [{name: "Блок золотой морковки", texture: [["goldcarrotblocktop", 0], ["goldcarrotblocktop", 0], ["goldcarrotblock", 0], ["goldcarrotblock", 0], ["goldcarrotblock", 0], ["goldcarrotblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.goldcarrotblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 396, 0]);
Recipes.addShaped({id: 396, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.goldcarrotblock, 0]);

IDRegistry.genBlockID("goldmelonblock");
Block.createBlock("goldmelonblock", [{name: "Блок золотого арбуза", texture: [["goldmelonblocktop", 0], ["goldmelonblocktop", 0], ["goldmelonblock", 0], ["goldmelonblock", 0], ["goldmelonblock", 0], ["goldmelonblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.goldmelonblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 382, 0]);
Recipes.addShaped({id: 382, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.goldmelonblock, 0]);

IDRegistry.genBlockID("gunpowderblock");
Block.createBlock("gunpowderblock", [{name: "Блок пороха", texture: [["gunpowderblock", 0], ["gunpowderblock", 0], ["gunpowderblock", 0], ["gunpowderblock", 0], ["gunpowderblock", 0], ["gunpowderblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.gunpowderblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 289, 0]);
Recipes.addShaped({id: 289, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.gunpowderblock, 0]);

IDRegistry.genBlockID("magmacreamblock");
Block.createBlock("magmacreamblock", [{name: "Блок сгустка магмы", texture: [["magmacreamblock", 0], ["magmacreamblock", 0], ["magmacreamblock", 0], ["magmacreamblock", 0], ["magmacreamblock", 0], ["magmacreamblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.magmacreamblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 378, 0]);
Recipes.addShaped({id: 378, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.magmacreamblock, 0]);

IDRegistry.genBlockID("meatblock");
Block.createBlock("meatblock", [{name: "Блок мяса", texture: [["meatblock", 0], ["meatblock", 0], ["meatblock", 0], ["meatblock", 0], ["meatblock", 0], ["meatblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.meatblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 319, 0]);
Recipes.addShaped({id: 319, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.meatblock, 0]);

IDRegistry.genBlockID("rawspidereyesblock");
Block.createBlock("rawspidereyesblock", [{name: "Блок паучьих глаз", texture: [["rawspidereyesblock", 0], ["rawspidereyesblock", 0], ["rawspidereyesblock", 0], ["rawspidereyesblock", 0], ["rawspidereyesblock", 0], ["rawspidereyesblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.rawspidereyesblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 375, 0]);
Recipes.addShaped({id: 375, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.rawspidereyesblock, 0]);

IDRegistry.genBlockID("rootenfleshblock");
Block.createBlock("rootenfleshblock", [{name: "Блок гнилой плоти", texture: [["rootenfleshblock", 0], ["rootenfleshblock", 0], ["rootenfleshblock", 0], ["rootenfleshblock", 0], ["rootenfleshblock", 0], ["rootenfleshblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.rootenfleshblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 367, 0]);
Recipes.addShaped({id: 367, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', BlockID.rootenfleshblock, 0]);


IDRegistry.genBlockID("spidereyesblock");
Block.createBlock("spidereyesblock", [{name: "Блок маринованных паучьих глаз", texture: [["spidereyesblock", 0], ["spidereyesblock", 0], ["spidereyesblock", 0], ["spidereyesblock", 0], ["spidereyesblock", 0], ["spidereyesblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.spidereyesblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 367, 0]);
Recipes.addShaped({id: 367, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.spidereyesblock, 0]);

IDRegistry.genBlockID("stickblock");
Block.createBlock("stickblock", [{name: "Блок палок", texture: [["stickblocktop", 0], ["stickblocktop", 0], ["stickblock", 0], ["stickblock", 0], ["stickblock", 0], ["stickblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.stickblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 280, 0]);
Recipes.addShaped({id: 280, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.stickblock, 0]);

IDRegistry.genBlockID("sugarblock");
Block.createBlock("sugarblock", [{name: "Блок сахара", texture: [["sugarblock", 0], ["sugarblock", 0], ["sugarblock", 0], ["sugarblock", 0], ["sugarblock", 0], ["sugarblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.sugarblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 353, 0]);
Recipes.addShaped({id: 353, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.sugarblock, 0]);

IDRegistry.genBlockID("sugarcaneblock");
Block.createBlock("sugarcaneblock", [{name: "Блок сахарного тростника", texture: [["sugarcaneblock", 0], ["sugarcaneblock", 0], ["sugarcaneblock", 0], ["sugarcaneblock", 0], ["sugarcaneblock", 0], ["sugarcaneblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.sugarcaneblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 338, 0]);
Recipes.addShaped({id: 338, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.sugarcaneblock, 0]);

IDRegistry.genBlockID("ateupd");
Block.createBlock("ateupd", [{name: "ate!Upd", texture: [["ateupd", 0], ["ateupd", 0], ["ateupd", 0], ["ateupd", 0], ["ateupd", 0], ["ateupd", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.ateupd, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.update, 0]);

IDRegistry.genBlockID("bluecarpet");
Block.createBlockWithRotation("bluecarpet", [{name: "Синий причудливый пол", texture: [["bluecarpet", 0], ["bluecarpet", 0], ["bluecarpet", 0], ["bluecarpet", 0], ["bluecarpet", 0], ["bluecarpet", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.bluecarpet, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', 35, 11]);

IDRegistry.genBlockID("endbrickchiseled");
Block.createBlock("endbrickchiseled", [{name: "Резные кирпичи края", texture: [["endbrickchiseled", 0], ["endbrickchiseled", 0], ["endbrickchiseled", 0], ["endbrickchiseled", 0], ["endbrickchiseled", 0], ["endbrickchiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.endbrickchiseled, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', 206, 0]);

IDRegistry.genBlockID("endbrickcracked");
Block.createBlock("endbrickcracked", [{name: "Потрескавшиеся кирпичи края", texture: [["endbrickcracked", 0], ["endbrickcracked", 0], ["endbrickcracked", 0], ["endbrickcracked", 0], ["endbrickcracked", 0], ["endbrickcracked", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.endbrickcracked, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 206, 0]);

IDRegistry.genBlockID("endbrickmossy");
Block.createBlock("endbrickmossy", [{name: "Заросшие кирпичи края", texture: [["endbrickmossy", 0], ["endbrickmossy", 0], ["endbrickmossy", 0], ["endbrickmossy", 0], ["endbrickmossy", 0], ["endbrickmossy", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.endbrickmossy, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 206, 0]);

IDRegistry.genBlockID("endercore");
Block.createBlock("endercore", [{name: "Ядро края", texture: [["endercore", 0], ["endercore", 0], ["endercore", 0], ["endercore", 0], ["endercore", 0], ["endercore", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.endercore, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', 201, 0, 'b', 206, 0, 'c', 381, 0]);

IDRegistry.genBlockID("glowingobsidian");
Block.createBlock("glowingobsidian", [{name: "Светящийся обсидиан", texture: [["glowingobsidian", 0], ["glowingobsidian", 0], ["glowingobsidian", 0], ["glowingobsidian", 0], ["glowingobsidian", 0], ["glowingobsidian", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

IDRegistry.genBlockID("icebricks");
Block.createBlock("icebricks", [{name: "Ледяные кирпичи", texture: [["icebricks", 0], ["icebricks", 0], ["icebricks", 0], ["icebricks", 0], ["icebricks", 0], ["icebricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.icebricks, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 79, 0]);

IDRegistry.genBlockID("icebrickscracked");
Block.createBlock("icebrickscracked", [{name: "Потрескавшиеся ледяные кирпичи", texture: [["icebrickscracked", 0], ["icebrickscracked", 0], ["icebrickscracked", 0], ["icebrickscracked", 0], ["icebrickscracked", 0], ["icebrickscracked", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.icebrickscracked, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', 79, 0]);

IDRegistry.genBlockID("icebrickschiseled");
Block.createBlock("icebrickschiseled", [{name: "Резные ледяные кирпичи", texture: [["icebrickschiseled", 0], ["icebrickschiseled", 0], ["icebrickschiseled", 0], ["icebrickschiseled", 0], ["icebrickschiseled", 0], ["icebrickschiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.icebrickschiseled, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 79, 0]);

IDRegistry.genBlockID("icebricksmossy");
Block.createBlock("icebricksmossy", [{name: "Заросшие ледяные кирпичи", texture: [["icebricksmossy", 0], ["icebricksmossy", 0], ["icebricksmossy", 0], ["icebricksmossy", 0], ["icebricksmossy", 0], ["icebricksmossy", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.icebricksmossy, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 79, 0]);

IDRegistry.genBlockID("inforeservedsix");
Block.createBlock("inforeservedsix", [{name: "info_reserved6", texture: [["inforeservedsix", 0], ["inforeservedsix", 0], ["inforeservedsix", 0], ["inforeservedsix", 0], ["inforeservedsix", 0], ["inforeservedsix", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.inforeservedsix, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 82, 0]);

IDRegistry.genBlockID("ironbricks");
Block.createBlock("ironbricks", [{name: "Железные кирпичи", texture: [["ironbricks", 0], ["ironbricks", 0], ["ironbricks", 0], ["ironbricks", 0], ["ironbricks", 0], ["ironbricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.ironbricks, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', 265, 0]);

IDRegistry.genBlockID("mixbricks");
Block.createBlock("mixbricks", [{name: "Адские и обычные кирпичи", texture: [["mixbricks", 0], ["mixbricks", 0], ["mixbricks", 0], ["mixbricks", 0], ["mixbricks", 0], ["mixbricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.mixbricks, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 112, 0, 'b', 45, 0]);

IDRegistry.genBlockID("nethercore");
Block.createBlock("nethercore", [{name: "Ядро ада", texture: [["nethercore", 0], ["nethercore", 0], ["nethercore", 0], ["nethercore", 0], ["nethercore", 0], ["nethercore", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.nethercore, count: 1, data: 0}, [ "aba ", "bcb ", "aba"], ['a', 265, 0, 'b', 266, 0, 'c', 264, 0]);

IDRegistry.genBlockID("nethercoreactive");
Block.createBlock("nethercoreactive", [{name: "Активное ядро ада", texture: [["nethercoreactive", 0], ["nethercoreactive", 0], ["nethercoreactive", 0], ["nethercoreactive", 0], ["nethercoreactive", 0], ["nethercoreactive", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

IDRegistry.genBlockID("nethercoreoff");
Block.createBlock("nethercoreoff", [{name: "Потухшее ядро ада", texture: [["nethercoreoff", 0], ["nethercoreoff", 0], ["nethercoreoff", 0], ["nethercoreoff", 0], ["nethercoreoff", 0], ["nethercoreoff", 0]], inCreative: true}]);

IDRegistry.genBlockID("obsidianbricks");
Block.createBlock("obsidianbricks", [{name: "Обсидиановые кирпичи", texture: [["obsidianbrickstop", 0], ["obsidianbrickstop", 0], ["obsidianbricks", 0], ["obsidianbricks", 0], ["obsidianbricks", 0], ["obsidianbricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.obsidianbricks, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 49, 0]);


IDRegistry.genBlockID("obsidianpillar");
Block.createBlock("obsidianpillar", [{name: "Обсидиановая колонна", texture: [["obsidianpillartop", 0], ["obsidianpillartop", 0], ["obsidianpillar", 0], ["obsidianpillar", 0], ["obsidianpillar", 0], ["obsidianpillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.obsidianpillar, count: 1, data: 0}, [ "   ", "a  ", "   "], ['a', 49, 0]);

IDRegistry.genBlockID("obsidianbrickschiseled");
Block.createBlock("obsidianbrickschiseled", [{name: "Резные обсидиановые кирпичи", texture: [["obsidianbrickschiseled", 0], ["obsidianbrickschiseled", 0], ["obsidianbrickschiseled", 0], ["obsidianbrickschiseled", 0], ["obsidianbrickschiseled", 0], ["obsidianbrickschiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.obsidianbrickschiseled, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 49, 0]);

IDRegistry.genBlockID("obsidianbricksmossy");
Block.createBlock("obsidianbricksmossy", [{name: "Заросшие обсидиановые кирпичи", texture: [["obsidianbricksmossy", 0], ["obsidianbricksmossy", 0], ["obsidianbricksmossy", 0], ["obsidianbricksmossy", 0], ["obsidianbricksmossy", 0], ["obsidianbricksmossy", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.obsidianbricksmossy, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 49, 0]);

IDRegistry.genBlockID("obsidianbricksglassed");
Block.createBlock("obsidianbricksglassed", [{name: "Гладкий обсидиан", texture: [["obsidianbricksglassed", 0], ["obsidianbricksglassed", 0], ["obsidianbricksglassed", 0], ["obsidianbricksglassed", 0], ["obsidianbricksglassed", 0], ["obsidianbricksglassed", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.obsidianbricksglassed, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 49, 0]);

IDRegistry.genBlockID("netherbricksmossy");
Block.createBlock("netherbricksmossy", [{name: "Заросшие адские кирпичи", texture: [["netherbricksmossy", 0], ["netherbricksmossy", 0], ["netherbricksmossy", 0], ["netherbricksmossy", 0], ["netherbricksmossy", 0], ["netherbricksmossy", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.netherbricksmossy, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 112, 0]);

IDRegistry.genBlockID("quarzbricks");
Block.createBlock("quarzbricks", [{name: "Заросшие адские кирпичи", texture: [["quarzbricks", 0], ["quarzbricks", 0], ["quarzbricks", 0], ["quarzbricks", 0], ["quarzbricks", 0], ["quarzbricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.quarzbricks, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 155, 0]);

IDRegistry.genBlockID("quarzbricksmossy");
Block.createBlock("quarzbricksmossy", [{name: "Заросшие адские кирпичи", texture: [["quarzbricksmossy", 0], ["quarzbricksmossy", 0], ["quarzbricksmossy", 0], ["quarzbricksmossy", 0], ["quarzbricksmossy", 0], ["quarzbricksmossy", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.quarzbricksmossy, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 155, 0]);

IDRegistry.genBlockID("redsandstonebricksmossy");
Block.createBlock("redsandstonebricksmossy", [{name: "Красные песчаные кирпичи", texture: [["redsandstonebricksmossy", 0], ["redsandstonebricksmossy", 0], ["redsandstonebricksmossy", 0], ["redsandstonebricksmossy", 0], ["redsandstonebricksmossy", 0], ["redsandstonebricksmossy", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.redsandstonebricksmossy, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 179, 0]);

IDRegistry.genBlockID("desertpillar");
Block.createBlock("desertpillar", [{name: "Пустынная колонна", texture: [["desertpillartop", 0], ["desertpillartop", 0], ["desertpillar", 0], ["desertpillar", 0], ["desertpillar", 0], ["desertpillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.desertpillar, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 24, 0]);

IDRegistry.genBlockID("desertbrickschiseled");
Block.createBlock("desertbrickschiseled", [{name: "Резные пустынные кирпичи", texture: [["desertbrickschiseled", 0], ["desertbrickschiseled", 0], ["desertbrickschiseled", 0], ["desertbrickschiseled", 0], ["desertbrickschiseled", 0], ["desertbrickschiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.desertbrickschiseled, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 24, 0]);

IDRegistry.genBlockID("sandstonebricksmossy");
Block.createBlock("sandstonebricksmossy", [{name: "Песчаные кирпичи", texture: [["sandstonebricksmossy", 0], ["sandstonebricksmossy", 0], ["sandstonebricksmossy", 0], ["sandstonebricksmossy", 0], ["sandstonebricksmossy", 0], ["sandstonebricksmossy", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.sandstonebricksmossy, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 24, 0]);

IDRegistry.genBlockID("purplebrickglassed");
Block.createBlock("purplebrickglassed", [{name: "Гладкий пурпурный кирпич", texture: [["purplebrickglassed", 0], ["purplebrickglassed", 0], ["purplebrickglassed", 0], ["purplebrickglassed", 0], ["purplebrickglassed", 0], ["purplebrickglassed", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.purplebrickglassed, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 201, 0]);

IDRegistry.genBlockID("purplebrickchiseled");
Block.createBlock("purplebrickchiseled", [{name: "Резной пурпурный кирпич", texture: [["purplebrickchiseled", 0], ["purplebrickchiseled", 0], ["purplebrickchiseledtwo", 0], ["purplebrickchiseledtwo", 0], ["purplebrickchiseledtwo", 0], ["purplebrickchiseledtwo", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.purplebrickchiseled, count: 1, data: 0}, [ "   ", "a  ", "   "], ['a', 201, 0]);

IDRegistry.genBlockID("redcarpet");
Block.createBlockWithRotation("redcarpet", [{name: "Красный причудливый пол", texture: [["redcarpet", 0], ["redcarpet", 0], ["redcarpet", 0], ["redcarpet", 0], ["redcarpet", 0], ["redcarpet", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.redcarpet, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', 35, 14]);

IDRegistry.genBlockID("slimestone");
Block.createBlock("slimestone", [{name: "Камень в слизи", texture: [["slimestone", 0], ["slimestone", 0], ["slimestone", 0], ["slimestone", 0], ["slimestone", 0], ["slimestone", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.slimestone, count: 1, data: 0}, [ "   ", "ba ", "   "], ['a', 1, 0, 'b', 341, 0]);

IDRegistry.genBlockID("slimestonebricks");
Block.createBlock("slimestonebricks", [{name: "Каменные кирпичи в слизи", texture: [["slimestonebricks", 0], ["slimestonebricks", 0], ["slimestonebricks", 0], ["slimestonebricks", 0], ["slimestonebricks", 0], ["slimestonebricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.slimestonebricks, count: 1, data: 0}, [ "   ", "ba ", "   "], ['a', 98, 0, 'b', 341, 0]);

IDRegistry.genBlockID("slimestonebrickschiseled");
Block.createBlock("slimestonebrickschiseled", [{name: "Резные каменные кирпичи в слизи", texture: [["slimestonebrickschiseled", 0], ["slimestonebrickschiseled", 0], ["slimestonebrickschiseled", 0], ["slimestonebrickschiseled", 0], ["slimestonebrickschiseled", 0], ["slimestonebrickschiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.slimestonebrickschiseled, count: 1, data: 0}, [ "   ", "ba ", "   "], ['a', 98, 3, 'b', 341, 0]);

IDRegistry.genBlockID("slimestonebrickchiseledtwo");
Block.createBlock("slimestonebrickchiseledtwo", [{name: "Резные каменные кирпичи в слизи", texture: [["slimestonebrickchiseledtwo", 0], ["slimestonebrickchiseledtwo", 0], ["slimestonebrickchiseledtwo", 0], ["slimestonebrickchiseledtwo", 0], ["slimestonebrickchiseledtwo", 0], ["slimestonebrickchiseledtwo", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.slimestonebrickchiseledtwo, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 98, 3, 'b', 341, 0]);

IDRegistry.genBlockID("soulsandstone");
Block.createBlock("soulsandstone", [{name: "Песчанник дущ", texture: [["soulsandstonetop", 0], ["soulsandstonetop", 0], ["soulsandstone", 0], ["soulsandstone", 0], ["soulsandstone", 0], ["soulsandstone", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.soulsandstone, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 88, 0]);

IDRegistry.genBlockID("soulsandstonechiseled");
Block.createBlock("soulsandstonechiseled", [{name: "Резной песчанник душ", texture: [["soulsandstoneglassedtop", 0], ["soulsandstoneglassedtop", 0], ["soulsandstonechiseled", 0], ["soulsandstonechiseled", 0], ["soulsandstonechiseled", 0], ["soulsandstonechiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.soulsandstonechiseled, count: 1, data: 0}, [ "   ", "a  ", "   "], ['a', 88, 0]);

IDRegistry.genBlockID("soulsandstoneglassed");
Block.createBlock("soulsandstoneglassed", [{name: "Гладкий песчанник душ", texture: [["soulsandstoneglassedtop", 0], ["soulsandstoneglassedtop", 0], ["soulsandstoneglassed", 0], ["soulsandstoneglassed", 0], ["soulsandstoneglassed", 0], ["soulsandstoneglassed", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.soulsandstoneglassed, count: 1, data: 0}, [ "   ", "  a", "   "], ['a', 88, 0]);

IDRegistry.genBlockID("stonebricksice");
Block.createBlock("stonebricksice", [{name: "Заледенелые каменные кирпичи", texture: [["stonebricksice", 0], ["stonebricksice", 0], ["stonebricksice", 0], ["stonebricksice", 0], ["stonebricksice", 0], ["stonebricksice", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.stonebricksice, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', 98, 0, 'b', 79, 0]);

IDRegistry.genBlockID("update");
Block.createBlock("update", [{name: "Update!", texture: [["update", 0], ["update", 0], ["update", 0], ["update", 0], ["update", 0], ["update", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.update, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 2, 0]);

IDRegistry.genBlockID("witherboneblock");
Block.createBlock("witherboneblock", [{name: "Блок иссушеной кости", texture: [["witherboneblocktop", 0], ["witherboneblocktop", 0], ["witherboneblock", 0], ["witherboneblock", 0], ["witherboneblock", 0], ["witherboneblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.witherboneblock, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.witherbone, 0]);

IDRegistry.genBlockID("woodbricks");
Block.createBlock("woodbricks", [{name: "Деревянный кирпич", texture: [["woodbricks", 0], ["woodbricks", 0], ["woodbricks", 0], ["woodbricks", 0], ["woodbricks", 0], ["woodbricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.woodbricks, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', 5, 0]);

IDRegistry.genBlockID("woodbrickschiseled");
Block.createBlock("woodbrickschiseled", [{name: "Резной деревянный кирпич", texture: [["woodbrickschiseled", 0], ["woodbrickschiseled", 0], ["woodbrickschiseled", 0], ["woodbrickschiseled", 0], ["woodbrickschiseled", 0], ["woodbrickschiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.woodbrickschiseled, count: 1, data: 0}, [ "   ", "a  ", "   "], ['a', 5, 0]);

IDRegistry.genBlockID("woodbrickscracked");
Block.createBlock("woodbrickscracked", [{name: "Потрескавшийся деревянный кирпич", texture: [["woodbrickscracked", 0], ["woodbrickscracked", 0], ["woodbrickscracked", 0], ["woodbrickscracked", 0], ["woodbrickscracked", 0], ["woodbrickscracked", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.woodbrickscracked, count: 1, data: 0}, [ "   ", "  a", "   "], ['a', 5, 0]);

IDRegistry.genBlockID("fire");
Block.createBlock("fire", [{name: "Нагреватель", texture: [["firea", 0], ["firea", 0], ["firea", 0], ["firea", 0], ["firea", 0], ["firea", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
Recipes.addShaped({id: BlockID.fire, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', ItemID.darkyenoriumingot, 0, 'b', ItemID.criumingot, 0, 'c', ItemID.jiuliumingot, 0]);

var guiFire = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Нагреватель"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.fire, { 
 
getGuiScreen: function(){ 
return guiFire; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data)){ 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: ItemID.yeneriumingot, data: 0},{id: ItemID.darkyenoriumingot, data: 0, count: 1}); 
 this.container.validateAll(); 

 this.addRecipes({id: 49, data: 0},{id: BlockID.glowingobsidian, data: 0, count: 1}); 
 this.container.validateAll(); 
 }
});

IDRegistry.genBlockID("meteorite");
Block.createBlock("meteorite", [{name: "Метеорит", texture: [["meteorite", 0], ["meteorite", 0], ["meteorite", 0], ["meteorite", 0], ["meteorite", 0], ["meteorite", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

IDRegistry.genItemID("meteoriteshard");
Item.createItem("meteoriteshard", "Осколок метеорита", {name: "meteoriteshard", meta: 0}, {stack: 64});

Recipes.addShaped({id: BlockID.meteorite, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.meteoriteshard, 0]);

Recipes.addShaped({id: ItemID.meteoriteshard, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.meteorite, 0]);

IDRegistry.genBlockID("izvest");
Block.createBlock("izvest", [{name: "Известняк", texture: [["izvest", 0], ["izvest", 0], ["izvest", 0], ["izvest", 0], ["izvest", 0], ["izvest", 0]], inCreative: true}]);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<1;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 60);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.izvest, 0, 20);
    }
}
)

IDRegistry.genBlockID("basalta");
Block.createBlock("basalta", [{name: "Базальт", texture: [["basalta", 0], ["basalta", 0], ["basalta", 0], ["basalta", 0], ["basalta", 0], ["basalta", 0]], inCreative: true}]);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.basalta, 0, 20);
    }
}
)

IDRegistry.genBlockID("torf");
Block.createBlock("torf", [{name: "Торф", texture: [["torf", 0], ["torf", 0], ["torf", 0], ["torf", 0], ["torf", 0], ["torf", 0]], inCreative: true}]);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 40, 60);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.torf, 0, 10);
    }
}
)

IDRegistry.genBlockID("rooten");
Block.createBlock("rooten", [{name: "Перегной", texture: [["rooten", 0], ["rooten", 0], ["rooten", 0], ["rooten", 0], ["rooten", 0], ["rooten", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.rooten, {"x":0,"y":0,"z":0}, {"x":1,"y":0.085,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.02){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.rooten, 0);
}}});

Block.registerDropFunction(BlockID.izvest, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.izves, 4, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.torf, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.torfitem, 4, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.rooten, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.rootenitem, 4, 0]);
 return drop;
});

IDRegistry.genItemID("izves");
Item.createItem("izves", "Известняк", {name: "izves", meta: 0}, {stack: 64});


IDRegistry.genItemID("torfitem");
Item.createItem("torfitem", "Торф", {name: "torfitem", meta: 0}, {stack: 64});

IDRegistry.genItemID("rootenitem");
Item.createItem("rootenitem", "Перегной", {name: "rootenitem", meta: 0}, {stack: 64});

Recipes.addShaped({id: BlockID.izvest, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.izves, 0]);

Recipes.addShaped({id: BlockID.torf, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.torfitem, 0]);

Recipes.addShaped({id: BlockID.rooten, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.rootenitem, 0]);

IDRegistry.genBlockID("ash");
Block.createBlock("ash", [{name: "Пепел", texture: [["ash", 0], ["ash", 0], ["ash", 0], ["ash", 0], ["ash", 0], ["ash", 0]], inCreative: true}]);

IDRegistry.genItemID("ashitem");
Item.createItem("ashitem", "Пепел", {name: "ashitem", meta: 0}, {stack: 64});

Block.registerDropFunction(BlockID.ash, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.ashitem, 4, 0]);
 return drop;
});

Recipes.addShaped({id: BlockID.ash, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.ashitem, 0]);

IDRegistry.genBlockID("sakura");
Block.createBlock("sakura", [{name: "Сакура", texture: [["sakuratop", 0], ["sakuratop", 0], ["sakura", 0], ["sakura", 0], ["sakura", 0], ["sakura", 0]], inCreative: true}]);

IDRegistry.genBlockID("sakuraleaves");
Block.createBlock("sakuraleaves", [{name: "Листва сакуры", texture: [["sakuraleaves", 0], ["sakuraleaves", 0], ["sakuraleaves", 0], ["sakuraleaves", 0], ["sakuraleaves", 0], ["sakuraleaves", 0]], inCreative: true}]);

IDRegistry.genBlockID("sakuraplanks");
Block.createBlock("sakuraplanks", [{name: "Доски сакуры", texture: [["sakuraplanks", 0], ["sakuraplanks", 0], ["sakuraplanks", 0], ["sakuraplanks", 0], ["sakuraplanks", 0], ["sakuraplanks", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.sakuraplanks, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.sakura, 0]);

IDRegistry.genItemID("den");
Item.createItem("den", "28000", {name: "den", meta: 28}, {isTech: true},{stack: 28});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.02){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.sakura, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.sakura, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.sakura, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.sakura, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.sakura, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.sakuraleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, BlockID.sakuraleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.sakuraleaves, 0);
              World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.sakuraleaves, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.sakuraleaves, 0);
              World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.sakuraleaves, 0);
}}});

IDRegistry.genBlockID("dragontrophy"); 
  Block.createBlockWithRotation("dragontrophy", [{name: "Трофей дракона края", texture: [["dragontrophy", 0], ["dragontrophy", 0], ["dragontrophy", 0], ["dragontrophy", 0], ["dragontrophy", 0], ["dragontrophy", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(1/16, 15/16, 1/16, 15/16, 0/16, 0/16, "oakk", 0);
model.addBox(0/16, 16/16, 2/16, 16.4/16, 0/16, 0/16, "dragontrophy", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.dragontrophy, -1, render);

Block.setBlockShape(BlockID.dragontrophy, {"x":0,"y":0,"z":0.9375}, {"x":1,"y":1,"z":0.0625});

IDRegistry.genBlockID("witherbosstrophy"); 
  Block.createBlockWithRotation("witherbosstrophy", [{name: "Трофей иссушителя", texture: [["witherbosstrophy", 0], ["witherbosstrophy", 0], ["witherbosstrophy", 0], ["witherbosstrophy", 0], ["witherbosstrophy", 0], ["witherbosstrophy", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(1/16, 15/16, 1/16, 15/16, 0/16, 0/16, "oakk", 0);
model.addBox(0/16, 16/16, 2/16, 16.4/16, 0/16, 0/16, "witherbosstrophy", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.witherbosstrophy, -1, render);

Block.setBlockShape(BlockID.witherbosstrophy, {"x":0,"y":0,"z":0.9375}, {"x":1,"y":1,"z":0.0625});

IDRegistry.genBlockID("elderguardiantrophy"); 
  Block.createBlockWithRotation("elderguardiantrophy", [{name: "Трофей древнего стража", texture: [["elderguardiantrophy", 0], ["elderguardiantrophy", 0], ["elderguardiantrophy", 0], ["elderguardiantrophy", 0], ["elderguardiantrophy", 0], ["elderguardiantrophy", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(1/16, 15/16, 1/16, 15/16, 0/16, 0/16, "oakk", 0);
model.addBox(0/16, 16/16, 2/16, 16.4/16, 0/16, 0/16, "elderguardiantrophy", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.elderguardiantrophy, -1, render);

Block.setBlockShape(BlockID.elderguardiantrophy, {"x":0,"y":0,"z":0.9375}, {"x":1,"y":1,"z":0.0625});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 53){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, BlockID.dragontrophy, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 52){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, BlockID.witherbosstrophy, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 50){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, BlockID.elderguardiantrophy, soul);
}
});
 
 IDRegistry.genBlockID("stonepillar");
Block.createBlock("stonepillar", [{name: "Каменная колонна", texture: [["stonepillar", 0], ["stonepillar", 0], ["stonepillar", 0], ["stonepillar", 0], ["stonepillar", 0], ["ateupd", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.stonepillar, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 98, 0]);

IDRegistry.genBlockID("sandstonepillar");
Block.createBlock("sandstonepillar", [{name: "Песчанная колонна", texture: [["sandstonepillar", 0], ["sandstonepillar", 0], ["sandstonepillar", 0], ["sandstonepillar", 0], ["sandstonepillar", 0], ["sandstonepillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.sandstonepillar, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 24, 0]);

IDRegistry.genBlockID("sandstonebrickscracked");
Block.createBlock("sandstonebrickscracked", [{name: "Потрескавшиеся песчанные кирпичи", texture: [["sandstonebrickscracked", 0], ["sandstonebrickscracked", 0], ["sandstonebrickscracked", 0], ["sandstonebrickscracked", 0], ["sandstonebrickscracked", 0], ["sandstonebrickscracked", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.sandstonebrickscracked, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 24, 0]);

IDRegistry.genBlockID("sandstonebricks");
Block.createBlock("sandstonebricks", [{name: "Песчанные кирпичи", texture: [["sandstonebricks", 0], ["sandstonebricks", 0], ["sandstonebricks", 0], ["sandstonebricks", 0], ["sandstonebricks", 0], ["sandstonebricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.sandstonebricks, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 24, 0]);

IDRegistry.genBlockID("redsandstonepillar");
Block.createBlock("redsandstonepillar", [{name: "Красная песчанная колонна", texture: [["redsandstonepillar", 0], ["redsandstonepillar", 0], ["redsandstonepillar", 0], ["redsandstonepillar", 0], ["redsandstonepillar", 0], ["redsandstonepillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.redsandstonepillar, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 179, 0]);

IDRegistry.genBlockID("redsandstonebrickscracked");
Block.createBlock("redsandstonebrickscracked", [{name: "Потрескавшиеся красные песчанные кирпичи", texture: [["redsandstonebrickscracked", 0], ["redsandstonebrickscracked", 0], ["redsandstonebrickscracked", 0], ["redsandstonebrickscracked", 0], ["redsandstonebrickscracked", 0], ["redsandstonebrickscracked", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.redsandstonebrickscracked, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 179, 0]);

IDRegistry.genBlockID("redsandstonebricks");
Block.createBlock("redsandstonebricks", [{name: "Красные песчанные кирпичи", texture: [["redsandstonebricks", 0], ["redsandstonebricks", 0], ["redsandstonebricks", 0], ["redsandstonebricks", 0], ["redsandstonebricks", 0], ["redsandstonebricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.redsandstonebricks, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 179, 0]);

IDRegistry.genBlockID("quarzbrickscracked");
Block.createBlock("quarzbrickscracked", [{name: "Потрескавшиеся кварцевые кирпичи", texture: [["quarzbrickscracked", 0], ["quarzbrickscracked", 0], ["quarzbrickscracked", 0], ["quarzbrickscracked", 0], ["quarzbrickscracked", 0], ["quarzbrickscracked", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.quarzbrickscracked, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 155, 0]);

IDRegistry.genBlockID("purpurbricksmossy");
Block.createBlock("purpurbricksmossy", [{name: "Заросшие пурпурные кирпичи", texture: [["purpurbricksmossy", 0], ["purpurbricksmossy", 0], ["purpurbricksmossy", 0], ["purpurbricksmossy", 0], ["purpurbricksmossy", 0], ["purpurbricksmossy", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.purpurbricksmossy, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 201, 0]);

IDRegistry.genBlockID("purpurbrickscracked");
Block.createBlock("purpurbrickscracked", [{name: "Потрескавшиеся пурпурные кирпичи", texture: [["purpurbrickscracked", 0], ["purpurbrickscracked", 0], ["purpurbrickscracked", 0], ["purpurbrickscracked", 0], ["purpurbrickscracked", 0], ["purpurbrickscracked", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.purpurbrickscracked, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 201, 0]);

IDRegistry.genBlockID("icepillar");
Block.createBlock("icepillar", [{name: "Ледяная колонна", texture: [["icepillar", 0], ["icepillar", 0], ["icepillar", 0], ["icepillar", 0], ["icepillar", 0], ["icepillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.icepillar, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 79, 0]);

IDRegistry.genBlockID("icechiseled");
Block.createBlock("icechiseled", [{name: "Резной лед", texture: [["icechiseled", 0], ["icechiseled", 0], ["icechiseled", 0], ["icechiseled", 0], ["icechiseled", 0], ["icechiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.icechiseled, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 79, 0]);

IDRegistry.genBlockID("prismarinemossy");
Block.createBlock("prismarinemossy", [{name: "Заросший призмарин", texture: [["prismarinemossy", 0], ["prismarinemossy", 0], ["prismarinemossy", 0], ["prismarinemossy", 0], ["prismarinemossy", 0], ["prismarinemossy", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.prismarinemossy, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 168, 2]);

IDRegistry.genBlockID("prismarinecracked");
Block.createBlock("prismarinecracked", [{name: "Потрескавшийся призмарин", texture: [["prismarinecracked", 0], ["prismarinecracked", 0], ["prismarinecracked", 0], ["prismarinecracked", 0], ["prismarinecracked", 0], ["prismarinecracked", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.prismarinecracked, count: 1, data: 0}, [ "   ", "a  ", "   "], ['a', 168, 2]);

IDRegistry.genBlockID("prismarinechiseled");
Block.createBlock("prismarinechiseled", [{name: "Резной призмарин", texture: [["prismarinechiseled", 0], ["prismarinechiseled", 0], ["prismarinechiseled", 0], ["prismarinechiseled", 0], ["prismarinechiseled", 0], ["prismarinechiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.prismarinechiseled, count: 1, data: 0}, [ "   ", "  a", "   "], ['a', 168, 2]);

IDRegistry.genBlockID("prismarinepillar");
Block.createBlock("prismarinepillar", [{name: "Призмариновая колонна", texture: [["prismarinepillar", 0], ["prismarinepillar", 0], ["prismarinepillar", 0], ["prismarinepillar", 0], ["prismarinepillar", 0], ["prismarinepillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.prismarinepillar, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 168, 2]);

IDRegistry.genBlockID("endpillar");
Block.createBlock("endpillar", [{name: "Колонна из кирпичей края", texture: [["endpillar", 0], ["endpillar", 0], ["endpillar", 0], ["endpillar", 0], ["endpillar", 0], ["endpillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.endpillar, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 206, 0]);

IDRegistry.genBlockID("netherbrickscracked");
Block.createBlock("netherbrickscracked", [{name: "Потрескавшийся адский кирпич", texture: [["netherbrickscracked", 0], ["netherbrickscracked", 0], ["netherbrickscracked", 0], ["netherbrickscracked", 0], ["netherbrickscracked", 0], ["netherbrickscracked", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.netherbrickscracked, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 112, 0]);

IDRegistry.genBlockID("netherbricksglassed");
Block.createBlock("netherbricksglassed", [{name: "Гладкий адский кирпич", texture: [["netherbricksglassed", 0], ["netherbricksglassed", 0], ["netherbricksglassed", 0], ["netherbricksglassed", 0], ["netherbricksglassed", 0], ["netherbricksglassed", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.netherbricksglassed, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 112, 0]);

IDRegistry.genBlockID("netherbrickspillar");
Block.createBlock("netherbrickspillar", [{name: "Адская колонна", texture: [["netherbrickspillar", 0], ["netherbrickspillar", 0], ["netherbrickspillar", 0], ["netherbrickspillar", 0], ["netherbrickspillar", 0], ["netherbrickspillar", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.netherbrickspillar, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 112, 0]);


IDRegistry.genItemID("elderguardianmask");
Item.createArmorItem("elderguardianmask", "Голова древнего стража", {name: "elderguardianmask", meta: 0}, {type: "helmet", armor: 0, durability: 650, texture: "armor/elderguardianmask.png"});

IDRegistry.genBlockID("elderguardianhead"); 
  Block.createBlockWithRotation("elderguardianhead", [{name: "Голова древнего стража", texture: [["elderguardianhead", 0], ["elderguardianhead", 0], ["elderguardianhead", 0], ["elderguardianhead", 0], ["elderguardianhead", 0], ["elderguardianface", 0]], inCreative: false}]);

 Block.setBlockShape(BlockID.elderguardianhead, {"x":0.25,"y":0,"z":0.25}, {"x":0.75,"y":0.5,"z":0.75});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.elderguardianmask)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.elderguardianhead, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.elderguardianhead, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.elderguardianmask, 1, 0]);
 return drop;
});

IDRegistry.genItemID("wingsa");
Item.createArmorItem("wingsa", "Крылья", {name: "wingsa", meta: 0}, {type: "chestplate", armor: 0, durability: 650, texture: "armor/wingsa.png"});

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (chest.id == ItemID.wingsa) {
    Player.setFlyingEnabled(true); 
    }
    if (chest.id == 0) {
    Player.setFlyingEnabled(false); 
 }
 if (boots.id == ItemID.jumpboots) {
   Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
 }
 if (legs.id == ItemID.slowleggings) {
   Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 3, 100)
 }
 if (chest.id == ItemID.taintchestplate) {
   Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 5, 100)
 }
 if (chest.id == ItemID.taintchestplate) {
   Entity.addEffect(Player.get(), Native.PotionEffect.poison, 4, 100)
 }
 if (helmet.id == ItemID.nightvisionhelmet) {
   Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 5, 100)
 }
 });
   
   Recipes.addShaped({id: 50, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', ItemID.torfitem, 0, 'b', 280, 0]);

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 50){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.elderguardianmask, soul);
}
});

IDRegistry.genItemID("bigmeat");
Item.createFoodItem("bigmeat", "Большой кусок мяса", {name: "bigmeat", meta: 0}, {food: 12});
Recipes.addShaped({id: ItemID.bigmeat, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 319, 0, 'b', 363, 0]);

IDRegistry.genItemID("cookedbigmeat");
Item.createFoodItem("cookedbigmeat", "Жареный большой кусок мяса", {name: "cookedbigmeat", meta: 0}, {food: 16});
Recipes.addFurnace(ItemID.bigmeat, ItemID.cookedbigmeat, 1);

IDRegistry.genItemID("bonehelmet");
IDRegistry.genItemID("bonechestplate");
IDRegistry.genItemID("boneleggings");
IDRegistry.genItemID("boneboots");

Item.createArmorItem("bonehelmet", "Костяной шлем", {name: "bonehelmet", meta: 0}, {type: "helmet", armor: 1, durability: 650, texture: "armor/bonearmor.png"});
Item.createArmorItem("bonechestplate", "Костяной нагрудник", {name: "bonechestplate", meta: 0}, {type: "chestplate", armor: 2, durability: 750, texture: "armor/bonearmor.png"});
Item.createArmorItem("boneleggings", "Костяные поножи", {name: "boneleggings", meta: 0}, {type: "leggings", armor: 1, durability: 700, texture: "armor/bonearmor0.png"});
Item.createArmorItem("boneboots", "Костяные ботинки", {name: "boneboots", meta: 0}, {type: "boots", armor: 1, durability: 600, texture: "armor/bonearmor.png"});

Recipes.addShaped({id: ItemID.bonehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', 352, 0]);
Recipes.addShaped({id: ItemID.bonechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', 352, 0]);
Recipes.addShaped({id: ItemID.boneleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', 352, 0]);
Recipes.addShaped({id: ItemID.boneboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', 352, 0]);

IDRegistry.genItemID("creeperleather");
Item.createItem("creeperleather", "Кожа крипера", {name: "creeperleather", meta: 0}, {stack: 64});

IDRegistry.genItemID("creeperhelmet");
IDRegistry.genItemID("creeperchestplate");
IDRegistry.genItemID("creeperleggings");
IDRegistry.genItemID("creeperboots");

Item.createArmorItem("creeperhelmet", "Шлем крипера", {name: "creeperhelmet", meta: 0}, {type: "helmet", armor: 2, durability: 650, texture: "armor/creeperarmor.png"});
Item.createArmorItem("creeperchestplate", "Нагрудник крипера", {name: "creeperchestplate", meta: 0}, {type: "chestplate", armor: 2, durability: 750, texture: "armor/creeperarmor.png"});
Item.createArmorItem("creeperleggings", "Поножи крипера", {name: "creeperleggings", meta: 0}, {type: "leggings", armor: 2, durability: 700, texture: "armor/creeperarmor0.png"});
Item.createArmorItem("creeperboots", "Ботинки крипера", {name: "creeperboots", meta: 0}, {type: "boots", armor: 2, durability: 600, texture: "armor/creeperarmor.png"});

Recipes.addShaped({id: ItemID.creeperhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.creeperleather, 0]);
Recipes.addShaped({id: ItemID.creeperchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.creeperleather, 0]);
Recipes.addShaped({id: ItemID.creeperleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.creeperleather, 0]);
Recipes.addShaped({id: ItemID.creeperboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.creeperleather, 0]);

IDRegistry.genItemID("witherbone");
Item.createItem("witherbone", "Иссушеная кость", {name: "witherbone", meta: 0}, {stack: 64});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.creeperleather, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 48){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.witherbone, soul);
}
});

IDRegistry.genItemID("spiderlegs");
Item.createItem("spiderlegs", "Лапка паука", {name: "spiderlegs", meta: 0}, {stack: 64});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 35){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.spiderlegs, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 40){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.spiderlegs, soul);
}
});

IDRegistry.genItemID("insectleather");
Item.createItem("insectleather", "Кожа насекомого", {name: "insectleather", meta: 0}, {stack: 64});

IDRegistry.genItemID("exoskeleton");
Item.createItem("exoskeleton", "Экзоскелет", {name: "exoskeleton", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.insectleather, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', ItemID.spiderlegs, 0, 'b', 375, 0, 'c', 264, 0]);

Recipes.addShaped({id: ItemID.exoskeleton, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.insectleather, 0]);

Recipes.addShaped({id: 443, count: 1, data: 0}, [ "   ", "aba", "   "], ['a', ItemID.exoskeleton, 0, 'b', 264, 0]);

IDRegistry.genItemID("insecthelmet");
IDRegistry.genItemID("insectchestplate");
IDRegistry.genItemID("insectleggings");
IDRegistry.genItemID("insectboots");

Item.createArmorItem("insecthelmet", "Шлем насекомого", {name: "insecthelmet", meta: 0}, {type: "helmet", armor: 10, durability: 650, texture: "armor/insectarmor.png"});
Item.createArmorItem("insectchestplate", "Нагрудник насекомого", {name: "insectchestplate", meta: 0}, {type: "chestplate", armor: 10, durability: 750, texture: "armor/insectarmor.png"});
Item.createArmorItem("insectleggings", "Поножи насекомого", {name: "insectleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/insectarmor0.png"});
Item.createArmorItem("insectboots", "Ботинки насекомого", {name: "insectboots", meta: 0}, {type: "boots", armor: 10, durability: 600, texture: "armor/insectarmor.png"});

Recipes.addShaped({id: ItemID.insecthelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.exoskeleton, 0]);
Recipes.addShaped({id: ItemID.insectchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.exoskeleton, 0]);
Recipes.addShaped({id: ItemID.insectleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.exoskeleton, 0]);
Recipes.addShaped({id: ItemID.insectboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.exoskeleton, 0]);

IDRegistry.genItemID("jumpboots");
Item.createArmorItem("jumpboots", "Прыгучие ботинки", {name: "jumpboots", meta: 0}, {type: "boots", armor: 6, durability: 650, texture: "armor/dimensionarmor.png"});

IDRegistry.genItemID("nightvisionhelmet");
Item.createArmorItem("nightvisionhelmet", "Темный шлем", {name: "nightvisionhelmet", meta: 0}, {type: "helmet", armor: 6, durability: 650, texture: "armor/dimensionarmor.png"});

IDRegistry.genItemID("taintchestplate");
Item.createArmorItem("taintchestplate", "Заразный нагрудник", {name: "taintchestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 650, texture: "armor/dimensionarmor.png"});

IDRegistry.genItemID("slowleggings");
Item.createArmorItem("slowleggings", "Тяжелые поножи", {name: "slowleggings", meta: 0}, {type: "leggings", armor: 10, durability: 650, texture: "armor/dimensionarmor0.png"});
 
 IDRegistry.genItemID("netheroil");
Item.createItem("netheroil", "Адское топливо", {name: "netheroil", meta: 0}, {stack: 64});
 
 Recipes.addShaped({id: ItemID.jumpboots, count: 1, data: 0}, [ "a a", "b b", "c c"], ['a', BlockID.woodbricks, 0, 'b', ItemID.netheroil, 0, 'c', 341, 0]);
 
 Recipes.addShaped({id: ItemID.netheroil, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', 87, 0, 'b', ItemID.yeneriumingot, 0, 'c', 378, 0]);
 
 IDRegistry.genItemID("mirrorshard");
Item.createItem("mirrorshard", "Осколок зеркала", {name: "mirrorshard", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.mirrorshard, count: 1, data: 0}, [ " b ", "aaa", "   "], ['a', 265, 0, 'b', 20, 0]);

IDRegistry.genItemID("pearl");
Item.createItem("pearl", "Жемчуг", {name: "pearl", meta: 0}, {stack: 64});

IDRegistry.genItemID("taintextract");
Item.createItem("taintextract", "Заразный экстракт", {name: "taintextract", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.taintextract, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 368, 0, 'b', 87, 0]);

IDRegistry.genItemID("stardust");
Item.createItem("stardust", "Звездная пыль", {name: "stardust", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.stardust, count: 1, data: 0}, [ "abc", "de ", "   "], ['a', ItemID.withermeal, 0, 'b', ItemID.taintextract, 0, 'c', 289, 0, 'd', 351, 15, 'e', 348, 0]);

IDRegistry.genItemID("withermeal");
Item.createItem("withermeal", "Иссушающая мука", {name: "withermeal", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.withermeal, count: 3, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.witherbone, 0]);

Recipes.addShaped({id: ItemID.slowleggings, count: 1, data: 0}, [ "aca", "b b", "a a"], ['a', ItemID.pearl, 0, 'b', ItemID.netheroil, 0, 'c', ItemID.stardust, 0]);

Recipes.addShaped({id: ItemID.taintchestplate, count: 1, data: 0}, [ "a a", "bcb", "bbb"], ['a', 432, 0, 'b', ItemID.taintextract, 0, 'c', ItemID.netheroil, 0]);

Recipes.addShaped({id: ItemID.nightvisionhelmet, count: 1, data: 0}, [ "aba", "aca", "d d"], ['a', ItemID.mirrorshard, 0, 'b', ItemID.pearl, 0, 'c', ItemID.meteoriteshard, 0, 'd', ItemID.netheroil, 0]);

IDRegistry.genItemID("withersword");
Item.createItem("withersword", "Меч иссушения", {name: "withersword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("wither", {durability: 1000, level: 5, efficiency: 8, damage: 7, enchantability: 15});
ToolAPI.setTool(ItemID.withersword, "wither", ToolType.sword);

IDRegistry.genBlockID("lightclay");
Block.createBlock("lightclay", [{name: "Светящаяся глина", texture: [["lightclay", 0], ["lightclay", 0], ["lightclay", 0], ["lightclay", 0], ["lightclay", 0], ["lightclay", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
Recipes.addShaped({id: BlockID.lightclay, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', 348, 0, 'b', 172, 0]);

IDRegistry.genBlockID("bluerose"); 
  Block.createBlock("bluerose", [{name: "Голубой цветок", texture: [["bluerose", 0], ["bluerose", 0], ["bluerose", 0], ["bluerose", 0], ["bluerose", 0], ["bluerose", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "bluerose", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "bluerose", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.bluerose, -1, render);
Block.setBlockShape(BlockID.bluerose, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genBlockID("rose"); 
  Block.createBlock("rose", [{name: "Роза", texture: [["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0], ["rose", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "rose", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "rose", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.rose, -1, render);
Block.setBlockShape(BlockID.rose, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genBlockID("pion"); 
  Block.createBlock("pion", [{name: "Пион", texture: [["pion", 0], ["pion", 0], ["pion", 0], ["pion", 0], ["pion", 0], ["pion", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "pion", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "pion", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.pion, -1, render);
Block.setBlockShape(BlockID.pion, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.bluerose, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.rose, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.pion, 0);
}}});

Recipes.addShaped({id: 351, count: 1, data: 12}, [ "   ", " a ", "   "], ['a', ItemID.bluerose, 0]);

Recipes.addShaped({id: 351, count: 1, data: 1}, [ "   ", " a ", "   "], ['a', ItemID.rose, 0]);

Recipes.addShaped({id: 351, count: 1, data: 9}, [ "   ", " a ", "   "], ['a', ItemID.pion, 0]);

IDRegistry.genItemID("platehelmet");
IDRegistry.genItemID("platechestplate");

Item.createArmorItem("platehelmet", "Пластинчатый шлем", {name: "platehelmet", meta: 0}, {type: "helmet", armor: 0, durability: 650, texture: "armor/Plate.png"});
Item.createArmorItem("platechestplate", "Плачтинчатый нагрудник", {name: "platechestplate", meta: 0}, {type: "chestplate", armor: 0, durability: 750, texture: "armor/Plate.png"});

Recipes.addShaped({id: ItemID.platehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', 44, 0]);
Recipes.addShaped({id: ItemID.platechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', 44, 0]);

IDRegistry.genItemID("chainmailleatherhelmet");
IDRegistry.genItemID("chainmailleatherchestplate");
IDRegistry.genItemID("chainmailleatherleggings");
IDRegistry.genItemID("chainmailleatherboots");

Item.createArmorItem("chainmailleatherhelmet", "Кожно-кольчужный шлем", {name: "chainmailleatherhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/chainmailleatherarmor.png"});
Item.createArmorItem("chainmailleatherchestplate", "Кожно-кольчужный нагрудник", {name: "chainmailleatherchestplate", meta: 0}, {type: "chestplate", armor: 4, durability: 750, texture: "armor/chainmailleatherarmor.png"});
Item.createArmorItem("chainmailleatherleggings", "Кожно-кольчужные поножи", {name: "chainmailleatherleggings", meta: 0}, {type: "leggings", armor: 4, durability: 700, texture: "armor/chainmailleatherarmor0.png"});
Item.createArmorItem("chainmailleatherboots", "Кожно-кольчужные ботинки", {name: "chainmailleatherboots", meta: 0}, {type: "boots", armor: 3, durability: 600, texture: "armor/chainmailleatherarmor.png"});

Recipes.addShaped({id: ItemID.chainmailleatherhelmet, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 298, 0, 'b', 302, 0]);
Recipes.addShaped({id: ItemID.chainmailleatherchestplate, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 299, 0, 'b', 303, 0]);
Recipes.addShaped({id: ItemID.chainmailleatherleggings, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 300, 0, 'b', 304, 0]);
Recipes.addShaped({id: ItemID.chainmailleatherboots, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 301, 0, 'b', 305, 0]);

TileEntity.registerPrototype(BlockID.nethercore, {
 
 tick: function(){
  var wgd = World.getBlock;
  
        var wgd1 = wgd(this.x+1,this.y-1,this.z);
        var wgd2 = wgd(this.x-1,this.y-1,this.z);
        var wgd3 = wgd(this.x,this.y-1,this.z+1);
        var wgd4 = wgd(this.x,this.y-1,this.z-1);
        var wgd5 = wgd(this.x-1,this.y-1,this.z-1);
        var wgd6 = wgd(this.x+1,this.y-1,this.z-1);
        var wgd7 = wgd(this.x-1,this.y-1,this.z+1);
        var wgd8 = wgd(this.x+1,this.y-1,this.z+1);
        var wgd9 = wgd(this.x,this.y-1,this.z);
        var wgd10 = wgd(this.x+1,this.y,this.z+1);
        var wgd11 = wgd(this.x-1,this.y,this.z+1);
        var wgd12 = wgd(this.x+1,this.y,this.z-1);
        var wgd13 = wgd(this.x-1,this.y,this.z-1);
        var wgd14 = wgd(this.x,this.y+1,this.z-1);
        var wgd15 = wgd(this.x,this.y+1,this.z+1);
        var wgd16 = wgd(this.x-1,this.y+1,this.z);
        var wgd17 = wgd(this.x+1,this.y+1,this.z);
        var wgd18 = wgd(this.x,this.y+1,this.z);
var blc1 = wgd1.id== 4;
var blc2 = wgd2.id== 4;
var blc3 = wgd3.id== 4;
var blc4 = wgd4.id== 4;
var blc5 = wgd5.id== 41;
var blc6 = wgd6.id== 41;
var blc7 = wgd7.id== 41;
var blc8 = wgd8.id== 41;
var blc9 = wgd9.id== 4;

var blc10 = wgd10.id== 4;
var blc11 = wgd11.id== 4;
var blc12 = wgd12.id== 4;
var blc13 = wgd13.id== 4;
var blc14 = wgd14.id== 4;
var blc15 = wgd15.id== 4;
var blc16 = wgd16.id== 4;
var blc17 = wgd17.id== 4;
var blc18 = wgd18.id== 4;
 if(blc1 && blc2 && blc3 && blc4 && blc5 && blc6 && blc8 && blc9 && blc10 && blc11 && blc12 && blc13 && blc14 && blc15 && blc16 && blc17 && blc18){
  World.setBlock(this.x, this.y, this.z, BlockID.nethercoreactive);
  World.setBlock(this.x+1, this.y, this.z-1, BlockID.glowingobsidian);
  World.setBlock(this.x-1, this.y, this.z-1, BlockID.glowingobsidian);
  World.setBlock(this.x+1, this.y, this.z+1, BlockID.glowingobsidian);
  World.setBlock(this.x-1, this.y, this.z+1, BlockID.glowingobsidian);
  
  World.setBlock(this.x+1, this.y-1, this.z-1, BlockID.glowingobsidian);
  World.setBlock(this.x-1, this.y-1, this.z-1, BlockID.glowingobsidian);
  World.setBlock(this.x+1, this.y-1, this.z+1, BlockID.glowingobsidian);
  World.setBlock(this.x-1, this.y-1, this.z+1, BlockID.glowingobsidian);
  World.setBlock(this.x, this.y-1, this.z, BlockID.glowingobsidian);
  World.setBlock(this.x, this.y-1, this.z-1, BlockID.glowingobsidian);
  World.setBlock(this.x-1, this.y-1, this.z, BlockID.glowingobsidian);
  World.setBlock(this.x+1, this.y-1, this.z, BlockID.glowingobsidian);
  World.setBlock(this.x, this.y-1, this.z+1, BlockID.glowingobsidian);
  
  World.setBlock(this.x+1, this.y, this.z, BlockID.glowingobsidian);
  World.setBlock(this.x, this.y+1, this.z-1, BlockID.glowingobsidian);
  World.setBlock(this.x, this.y+1, this.z+1, BlockID.glowingobsidian);
  World.setBlock(this.x-1, this.y+1, this.z, BlockID.glowingobsidian);
  World.setBlock(this.x, this.y+1, this.z, BlockID.glowingobsidian);
  
  Entity.spawn(this.x, this.y+2, this.z, 36);
  Entity.spawn(this.x, this.y+2, this.z, 36);
  Entity.spawn(this.x, this.y+2, this.z, 36);
  Entity.spawn(this.x, this.y+2, this.z, 36);
  Entity.spawn(this.x, this.y+2, this.z, 36);
  Entity.spawn(this.x, this.y+2, this.z, 36);
  Entity.spawn(this.x, this.y+2, this.z, 36);
  Entity.spawn(this.x, this.y+2, this.z, 36);
  
  Entity.spawn(this.x, this.y+2, this.z, 43);
  Entity.spawn(this.x, this.y+2, this.z, 43);
  Entity.spawn(this.x, this.y+2, this.z, 43);
  Entity.spawn(this.x, this.y+2, this.z, 43);
  Entity.spawn(this.x, this.y+2, this.z, 43);
  
  Entity.spawn(this.x, this.y+2, this.z, 40);
  Entity.spawn(this.x, this.y+2, this.z, 40);
  
  Entity.spawn(this.x, this.y+2, this.z, 42);
  Entity.spawn(this.x, this.y+2, this.z, 42);
  Entity.spawn(this.x, this.y+2, this.z, 42);
  
  Entity.spawn(this.x, this.y+2, this.z, 41);
  Entity.spawn(this.x, this.y+2, this.z, 41);
  Entity.spawn(this.x, this.y+2, this.z, 41);
  Entity.spawn(this.x, this.y+2, this.z, 41);
  Entity.spawn(this.x, this.y+2, this.z, 41);
  
  
  Entity.spawn(this.x+40, this.y, this.z, 93);
  Entity.spawn(this.x-40, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z-40, 93);
  Entity.spawn(this.x, this.y, this.z+40, 93);
  }
 }
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.meteorite, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z, BlockID.meteorite, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z, BlockID.meteorite, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z-1, BlockID.meteorite, 0);
       World.setBlock(coords.x,coords.y-1,  coords.z+1, BlockID.meteorite, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z+1, BlockID.meteorite, 0);
       World.setBlock(coords.x+1,coords.y-1,  coords.z-1, BlockID.meteorite, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z-1, BlockID.meteorite, 0);
       World.setBlock(coords.x-1,coords.y-1,  coords.z+1, BlockID.meteorite, 0);
       
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.meteorite, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.meteorite, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.meteorite, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.meteorite, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.meteorite, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, BlockID.meteorite, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, BlockID.meteorite, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, BlockID.meteorite, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, BlockID.meteorite, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.meteorite, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.meteorite, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z, BlockID.meteorite, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, BlockID.meteorite, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+1, BlockID.meteorite, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, BlockID.meteorite, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, BlockID.meteorite, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, BlockID.meteorite, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, BlockID.meteorite, 0);
}}});

Block.registerDropFunction(BlockID.nethercoreactive, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([BlockID.nethercoreoff, 1, 0]);
 return drop;
});

IDRegistry.genItemID("rainbow");
Item.createItem("rainbow", "Радуга", {name: "rainbow", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.rainbow, count: 7, data: 0}, [ "abc", "def", "g  "], ['a', 351, 1, 'b', 351, 14, 'c', 351, 11, 'd', 351, 10, 'e', 351, 12, 'f', 351, 4, 'g', 351, 5]);

IDRegistry.genItemID("yumbosword");
Item.createItem("yumbosword", "Юмбо-меч", {name: "yumbosword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("yumbo", {durability: 1000, level: 5, efficiency: 8, damage: 6, enchantability: 15});
ToolAPI.setTool(ItemID.yumbosword, "yumbo", ToolType.sword);

Recipes.addShaped({id: ItemID.withersword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.withermeal, 0, 'b', ItemID.witherbone, 0]);

Recipes.addShaped({id: ItemID.yumbosword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.rainbow, 0, 'b', 280, 0]);

IDRegistry.genBlockID("tea"); 
  Block.createBlock("tea", [{name: "Чай", texture: [["tea", 0], ["tea", 0], ["tea", 0], ["tea", 0], ["tea", 0], ["tea", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "tea", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "tea", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.tea, -1, render);
Block.setBlockShape(BlockID.tea, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genBlockID("dirtplate"); 
  Block.createBlock("dirtplate", [{name: "Земляная плита", texture: [["dirt", 0], ["dirt", 0], ["dirt", 0], ["dirt", 0], ["dirt", 0], ["dirt", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.dirtplate, {"x":0,"y":0,"z":0}, {"x":1,"y":0.5,"z":1});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.tea, 0);
}}});

IDRegistry.genBlockID("mushroomtea"); 
  Block.createBlock("mushroomtea", [{name: "Чайный гриб", texture: [["mushroomtea", 0], ["mushroomtea", 0], ["mushroomtea", 0], ["mushroomtea", 0], ["mushroomtea", 0], ["mushroomtea", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "mushroomtea", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "mushroomtea", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mushroomtea, -1, render);
Block.setBlockShape(BlockID.mushroomtea, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.5){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.mushroomtea, 0);
}}});

IDRegistry.genItemID("kruzhka");
Item.createItem("kruzhka", "Kружка", {name: "kruzhka", meta: 0}, {stack: 64});

IDRegistry.genItemID("waterkruzhka");
Item.createFoodItem("waterkruzhka", "Кружка воды", {name: "waterkruzhka", meta: 0}, {food: 1});
Recipes.addShaped({id: ItemID.waterkruzhka, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.kruzhka, 0, 'b', 325, 8]);

IDRegistry.genItemID("lavakruzhka");
Item.createItem("lavakruzhka", "Kружка лавы", {name: "lavakruzhka", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.lavakruzhka, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.kruzhka, 0, 'b', 325, 10]);

IDRegistry.genItemID("milkkruzhka");
Item.createFoodItem("milkkruzhka", "Кружка молока", {name: "milkkruzhka", meta: 0}, {food: 2});
Recipes.addShaped({id: ItemID.milkkruzhka, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.kruzhka, 0, 'b', 335, 0]);

IDRegistry.genItemID("Greenfield");
Item.createFoodItem("Greenfield", "Кружка чая", {name: "Greenfield", meta: 0}, {food: 4});
Recipes.addShaped({id: ItemID.Greenfield, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.kruzhka, 0, 'b', ItemID.tea, 0]);

IDRegistry.genItemID("mushroomteakruzhka");
Item.createFoodItem("mushroomteakruzhka", "Кружка чая из чайного гриба", {name: "mushroomteakruzhka", meta: 0}, {food: 6});
Recipes.addShaped({id: ItemID.mushroomteakruzhka, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.Greenfield, 0, 'b', ItemID.mushroomtea, 0]);

IDRegistry.genBlockID("starblock");
Block.createBlock("starblock", [{name: "Блок адской звезды", texture: [["starblock", 0], ["starblock", 0], ["starblock", 0], ["starblock", 0], ["starblock", 0], ["starblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.starblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 399, 0]);

Recipes.addShaped({id: BlockID.witherbosstrophy, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 399, 0]);

Recipes.addShaped({id: BlockID.dragontrophy, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 121, 0]);

IDRegistry.genItemID("hotdog");
Item.createFoodItem("hotdog", "Хотдог", {name: "hotdog", meta: 0}, {food: 12});
Recipes.addShaped({id: ItemID.hotdog, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', 297, 0, 'b', 319, 0]);

IDRegistry.genItemID("pizza");
Item.createFoodItem("pizza", "Пицца", {name: "pizza", meta: 0}, {food: 18});
Recipes.addShaped({id: ItemID.pizza, count: 1, data: 0}, [ "aaa", "bbb", "   "], ['a', 319, 0, 'b', 297, 0]);

IDRegistry.genBlockID("waterobsidian");
Block.createBlock("waterobsidian", [{name: "Плачущий обсидиан", texture: [["waterobsidian", 0], ["waterobsidian", 0], ["waterobsidian", 0], ["waterobsidian", 0], ["waterobsidian", 0], ["waterobsidian", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.waterobsidian, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 373, 0, 'b', 49, 0]);

IDRegistry.genBlockID("planksblack");
Block.createBlock("planksblack", [{name: "Черные доски", texture: [["planksblack", 0], ["planksblack", 0], ["planksblack", 0], ["planksblack", 0], ["planksblack", 0], ["planksblack", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.planksblack, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 0]);

IDRegistry.genBlockID("planksblue");
Block.createBlock("planksblue", [{name: "Синие доски", texture: [["planksblue", 0], ["planksblue", 0], ["planksblue", 0], ["planksblue", 0], ["planksblue", 0], ["planksblue", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.planksblue, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 4]);

IDRegistry.genBlockID("planksbrown");
Block.createBlock("planksbrown", [{name: "Коричневые доски", texture: [["planksbrown", 0], ["planksbrown", 0], ["planksbrown", 0], ["planksbrown", 0], ["planksbrown", 0], ["planksbrown", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.planksbrown, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 3]);

IDRegistry.genBlockID("plankscyan");
Block.createBlock("plankscyan", [{name: "Бирюзовые доски", texture: [["plankscyan", 0], ["plankscyan", 0], ["plankscyan", 0], ["plankscyan", 0], ["plankscyan", 0], ["plankscyan", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.plankscyan, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 6]);

IDRegistry.genBlockID("planksgray");
Block.createBlock("planksgray", [{name: "Серые доски", texture: [["planksgray", 0], ["planksgray", 0], ["planksgray", 0], ["planksgray", 0], ["planksgray", 0], ["planksgray", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.planksgray, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 8]);

IDRegistry.genBlockID("planksgreen");
Block.createBlock("planksgreen", [{name: "Зеленые доски", texture: [["planksgreen", 0], ["planksgreen", 0], ["planksgreen", 0], ["planksgreen", 0], ["planksgreen", 0], ["planksgreen", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.planksgreen, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 2]);

IDRegistry.genBlockID("plankslightblue");
Block.createBlock("plankslightblue", [{name: "Голубые доски", texture: [["plankslightblue", 0], ["plankslightblue", 0], ["plankslightblue", 0], ["plankslightblue", 0], ["plankslightblue", 0], ["plankslightblue", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.plankslightblue, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 12]);

IDRegistry.genBlockID("plankslightgray");
Block.createBlock("plankslightgray", [{name: "Светло-серые доски", texture: [["plankslightgray", 0], ["plankslightgray", 0], ["plankslightgray", 0], ["plankslightgray", 0], ["plankslightgray", 0], ["plankslightgray", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.plankslightgray, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 7]);

IDRegistry.genBlockID("plankslime");
Block.createBlock("plankslime", [{name: "Лаймовые доски", texture: [["plankslime", 0], ["plankslime", 0], ["plankslime", 0], ["plankslime", 0], ["plankslime", 0], ["plankslime", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.plankslime, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 10]);

IDRegistry.genBlockID("planksorange");
Block.createBlock("planksorange", [{name: "Оранжевые доски", texture: [["planksorange", 0], ["planksorange", 0], ["planksorange", 0], ["planksorange", 0], ["planksorange", 0], ["planksorange", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.planksorange, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 14]);

IDRegistry.genBlockID("plankspink");
Block.createBlock("plankspink", [{name: "Розовые доски", texture: [["plankspink", 0], ["plankspink", 0], ["plankspink", 0], ["plankspink", 0], ["plankspink", 0], ["plankspink", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.plankspink, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 9]);

IDRegistry.genBlockID("plankspurple");
Block.createBlock("plankspurple", [{name: "Пурпурные доски", texture: [["plankspurple", 0], ["plankspurple", 0], ["plankspurple", 0], ["plankspurple", 0], ["plankspurple", 0], ["plankspurple", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.plankspurple, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 13]);

IDRegistry.genBlockID("planksred");
Block.createBlock("planksred", [{name: "Красные доски", texture: [["planksred", 0], ["planksred", 0], ["planksred", 0], ["planksred", 0], ["planksred", 0], ["planksred", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.planksred, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 1]);

IDRegistry.genBlockID("planksviolet");
Block.createBlock("planksviolet", [{name: "Фиолетовые доски", texture: [["planksviolet", 0], ["planksviolet", 0], ["planksviolet", 0], ["planksviolet", 0], ["planksviolet", 0], ["planksviolet", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.planksviolet, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 5]);

IDRegistry.genBlockID("plankswhite");
Block.createBlock("plankswhite", [{name: "Белые доски", texture: [["plankswhite", 0], ["plankswhite", 0], ["plankswhite", 0], ["plankswhite", 0], ["plankswhite", 0], ["plankswhite", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.plankswhite, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 15]);

IDRegistry.genBlockID("planksyellow");
Block.createBlock("planksyellow", [{name: "Желтые доски", texture: [["planksyellow", 0], ["planksyellow", 0], ["planksyellow", 0], ["planksyellow", 0], ["planksyellow", 0], ["planksyellow", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.planksyellow, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 5, 0, 'b', 351, 11]);

IDRegistry.genBlockID("chinalamp"); 
  Block.createBlockWithRotation("chinalamp", [{name: "Китайский фонарь", texture: [["chinalamp", 0], ["chinalamp", 0], ["chinalamp", 0], ["chinalamp", 0], ["chinalamp", 0], ["chinalamp", 0]], inCreative: false}], BLOCK_TYPE_LOW_LIGHT);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(7.5/16, 14/16, 7.5/16, 8.5/16, 16/16, 8.5/16, "chinalampstring", 0);
model.addBox(4/16, 6/16, 4/16, 12/16, 13.9/16, 12/16, "chinalamp", 0);
model.addBox(4/16, 14/16, 4/16, 12/16, 14/16, 12/16, "chinalampstring", 0);
model.addBox(4/16, 5.9/16, 4/16, 12/16, 6/16, 12/16, "chinalampstring", 0);
model.addBox(6.5/16, 0/16, 6.5/16, 7.5/16, 6/16, 7.5/16, "chinalampstring", 0);
model.addBox(8.5/16, -2/16, 8.5/16, 9.5/16, 6/16, 9.5/16, "chinalampstring", 0);



render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.chinalamp, -1, render);

Block.setBlockShape(BlockID.chinalamp, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

IDRegistry.genBlockID("torii"); 
  Block.createBlockWithRotation("torii", [{name: "Тории", texture: [["sakuraplanks", 0], ["sakuraplanks", 0], ["sakuraplanks", 0], ["sakuraplanks", 0], ["sakuraplanks", 0], ["sakuraplanks", 0]], inCreative: false}]);
  
  Recipes.addFurnace(17, ItemID.ashitem, 1);
  
  IDRegistry.genBlockID("zombiebanner"); 
  Block.createBlockWithRotation("zombiebanner", [{name: "Знамя зомби", texture: [["zombiebanner", 0], ["zombiebanner", 0], ["zombiebanner", 0], ["zombiebanner", 0], ["zombiebanner", 0], ["zombiebanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "zombiebanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "zombiebannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.zombiebanner, -1, render);

Block.setBlockShape(BlockID.zombiebanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zombiebanner, soul);
}
});

IDRegistry.genBlockID("villagerbanner"); 
  Block.createBlockWithRotation("villagerbanner", [{name: "Знамя жителя", texture: [["villagerbanner", 0], ["villagerbanner", 0], ["villagerbanner", 0], ["villagerbanner", 0], ["villagerbanner", 0], ["villagerbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "villagerbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "villagerbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.villagerbanner, -1, render);

Block.setBlockShape(BlockID.villagerbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 15){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.villagerbanner, soul);
}
});

IDRegistry.genBlockID("batbanner"); 
  Block.createBlockWithRotation("batbanner", [{name: "Знамя летучей мыши", texture: [["batbanner", 0], ["batbanner", 0], ["batbanner", 0], ["batbanner", 0], ["batbanner", 0], ["batbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "batbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "batbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.batbanner, -1, render);

Block.setBlockShape(BlockID.batbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 19){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.batbanner, soul);
}
});

IDRegistry.genBlockID("cowbanner"); 
  Block.createBlockWithRotation("cowbanner", [{name: "Знамя коровы", texture: [["cowbanner", 0], ["cowbanner", 0], ["cowbanner", 0], ["cowbanner", 0], ["cowbanner", 0], ["cowbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "cowbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "cowbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cowbanner, -1, render);

Block.setBlockShape(BlockID.cowbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 11){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.cowbanner, soul);
}
});

IDRegistry.genBlockID("chickenbanner"); 
  Block.createBlockWithRotation("chickenbanner", [{name: "Знамя курицы", texture: [["chickenbanner", 0], ["chickenbanner", 0], ["chickenbanner", 0], ["chickenbanner", 0], ["chickenbanner", 0], ["chickenbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "chickenbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "chickenbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.chickenbanner, -1, render);

Block.setBlockShape(BlockID.chickenbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 10){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.chickenbanner, soul);
}
});

IDRegistry.genBlockID("mooshroombanner"); 
  Block.createBlockWithRotation("mooshroombanner", [{name: "Знамя мууухомора", texture: [["mooshroombanner", 0], ["mooshroombanner", 0], ["mooshroombanner", 0], ["mooshroombanner", 0], ["mooshroombanner", 0], ["mooshroombanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "mooshroombanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "mooshroombannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mooshroombanner, -1, render);

Block.setBlockShape(BlockID.mooshroombanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 16){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.mooshroombanner, soul);
}
});

IDRegistry.genBlockID("pigbanner"); 
  Block.createBlockWithRotation("pigbanner", [{name: "Знамя свиньи", texture: [["pigbanner", 0], ["pigbanner", 0], ["pigbanner", 0], ["pigbanner", 0], ["pigbanner", 0], ["pigbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "pigbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "pigbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.pigbanner, -1, render);

Block.setBlockShape(BlockID.pigbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 12){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.pigbanner, soul);
}
});

IDRegistry.genBlockID("rabbitbanner"); 
  Block.createBlockWithRotation("rabbitbanner", [{name: "Знамя кролика", texture: [["rabbitbanner", 0], ["rabbitbanner", 0], ["rabbitbanner", 0], ["rabbitbanner", 0], ["rabbitbanner", 0], ["rabbitbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "rabbitbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "rabbitbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.rabbitbanner, -1, render);

Block.setBlockShape(BlockID.rabbitbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 18){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.rabbitbanner, soul);
}
});

IDRegistry.genBlockID("horsebanner"); 
  Block.createBlockWithRotation("horsebanner", [{name: "Знамя лошади", texture: [["horsebanner", 0], ["horsebanner", 0], ["horsebanner", 0], ["horsebanner", 0], ["horsebanner", 0], ["horsebanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "horsebanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "horsebannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.horsebanner, -1, render);

Block.setBlockShape(BlockID.horsebanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 23){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.horsebanner, soul);
}
});

IDRegistry.genBlockID("donkeybanner"); 
  Block.createBlockWithRotation("donkeybanner", [{name: "Знамя осла", texture: [["donkeybanner", 0], ["donkeybanner", 0], ["donkeybanner", 0], ["donkeybanner", 0], ["donkeybanner", 0], ["donkeybanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "donkeybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "donkeybannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.donkeybanner, -1, render);

Block.setBlockShape(BlockID.donkeybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 24){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.donkeybanner, soul);
}
});

IDRegistry.genBlockID("mulebanner"); 
  Block.createBlockWithRotation("mulebanner", [{name: "Знамя мула", texture: [["mulebanner", 0], ["mulebanner", 0], ["mulebanner", 0], ["mulebanner", 0], ["mulebanner", 0], ["mulebanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "mulebanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "mulebannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mulebanner, -1, render);

Block.setBlockShape(BlockID.mulebanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 25){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.mulebanner, soul);
}
});

IDRegistry.genBlockID("zombiehorsebanner"); 
  Block.createBlockWithRotation("zombiehorsebanner", [{name: "Знамя лошади-зомби", texture: [["zombiehorsebanner", 0], ["zombiehorsebanner", 0], ["zombiehorsebanner", 0], ["zombiehorsebanner", 0], ["zombiehorsebanner", 0], ["zombiehorsebanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "zombiehorsebanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "zombiehorsebannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.zombiehorsebanner, -1, render);

Block.setBlockShape(BlockID.zombiehorsebanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 27){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zombiehorsebanner, soul);
}
});

///000000000000000

IDRegistry.genBlockID("skeletonhorsebanner"); 
  Block.createBlockWithRotation("skeletonhorsebanner", [{name: "Знамя лошади-скелета", texture: [["skeletonhorsebanner", 0], ["skeletonhorsebanner", 0], ["skeletonhorsebanner", 0], ["skeletonhorsebanner", 0], ["skeletonhorsebanner", 0], ["skeletonhorsebanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "skeletonhorsebanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "skeletonhorsebannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.skeletonhorsebanner, -1, render);

Block.setBlockShape(BlockID.skeletonhorsebanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 26){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.skeletonhorsebanner, soul);
}
});

IDRegistry.genBlockID("sheepbanner"); 
  Block.createBlockWithRotation("sheepbanner", [{name: "Знамя овцы", texture: [["sheepbanner", 0], ["sheepbanner", 0], ["sheepbanner", 0], ["sheepbanner", 0], ["sheepbanner", 0], ["sheepbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "sheepbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "sheepbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.sheepbanner, -1, render);

Block.setBlockShape(BlockID.sheepbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 13){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.sheepbanner, soul);
}
});

IDRegistry.genBlockID("ocelotbanner"); 
  Block.createBlockWithRotation("ocelotbanner", [{name: "Знамя оцелота", texture: [["ocelotbanner", 0], ["ocelotbanner", 0], ["ocelotbanner", 0], ["ocelotbanner", 0], ["ocelotbanner", 0], ["ocelotbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "ocelotbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "ocelotbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.ocelotbanner, -1, render);

Block.setBlockShape(BlockID.ocelotbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 27){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.ocelotbanner, soul);
}
});

IDRegistry.genBlockID("sprutbanner"); 
  Block.createBlockWithRotation("sprutbanner", [{name: "Знамя спрута", texture: [["sprutbanner", 0], ["sprutbanner", 0], ["sprutbanner", 0], ["sprutbanner", 0], ["sprutbanner", 0], ["sprutbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "sprutbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "sprutbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.sprutbanner, -1, render);

Block.setBlockShape(BlockID.sprutbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 17){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.sprutbanner, soul);
}
});

IDRegistry.genBlockID("snowgolembanner"); 
  Block.createBlockWithRotation("snowgolembanner", [{name: "Знамя снеговика", texture: [["snowgolembanner", 0], ["snowgolembanner", 0], ["snowgolembanner", 0], ["snowgolembanner", 0], ["snowgolembanner", 0], ["snowgolembanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "snowgolembanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "snowgolembannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.snowgolembanner, -1, render);

Block.setBlockShape(BlockID.snowgolembanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 21){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.snowgolembanner, soul);
}
});

IDRegistry.genBlockID("polarbearbanner"); 
  Block.createBlockWithRotation("polarbearbanner", [{name: "Знамя белого медведя", texture: [["polarbearbanner", 0], ["polarbearbanner", 0], ["polarbearbanner", 0], ["polarbearbanner", 0], ["polarbearbanner", 0], ["polarbearbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "polarbearbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "polarbearbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.polarbearbanner, -1, render);

Block.setBlockShape(BlockID.polarbearbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 28){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.polarbearbanner, soul);
}
});

IDRegistry.genBlockID("wolfbanner"); 
  Block.createBlockWithRotation("wolfbanner", [{name: "Знамя волка", texture: [["wolfbanner", 0], ["wolfbanner", 0], ["wolfbanner", 0], ["wolfbanner", 0], ["wolfbanner", 0], ["wolfbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "wolfbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "wolfbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.wolfbanner, -1, render);

Block.setBlockShape(BlockID.wolfbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 14){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.wolfbanner, soul);
}
});

IDRegistry.genBlockID("irongolembanner"); 
  Block.createBlockWithRotation("irongolembanner", [{name: "Знамя железного голема", texture: [["irongolembanner", 0], ["irongolembanner", 0], ["irongolembanner", 0], ["irongolembanner", 0], ["irongolembanner", 0], ["irongolembanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "irongolembanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "irongolembannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.irongolembanner, -1, render);

Block.setBlockShape(BlockID.irongolembanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 20){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.irongolembanner, soul);
}
});

IDRegistry.genBlockID("zombiepigmanbanner"); 
  Block.createBlockWithRotation("zombiepigmanbanner", [{name: "Знамя свинозомби", texture: [["zombiepigmanbanner", 0], ["zombiepigmanbanner", 0], ["zombiepigmanbanner", 0], ["zombiepigmanbanner", 0], ["zombiepigmanbanner", 0], ["zombiepigmanbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "zombiepigmanbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "zombiepigmanbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.zombiepigmanbanner, -1, render);

Block.setBlockShape(BlockID.zombiepigmanbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 36){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zombiepigmanbanner, soul);
}
});

IDRegistry.genBlockID("spiderbanner"); 
  Block.createBlockWithRotation("spiderbanner", [{name: "Знамя паука", texture: [["spiderbanner", 0], ["spiderbanner", 0], ["spiderbanner", 0], ["spiderbanner", 0], ["spiderbanner", 0], ["spiderbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "spiderbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "spiderbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.spiderbanner, -1, render);

Block.setBlockShape(BlockID.spiderbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 35){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.spiderbanner, soul);
}
});

IDRegistry.genBlockID("cavespiderbanner"); 
  Block.createBlockWithRotation("cavespiderbanner", [{name: "Знамя пещерного паука", texture: [["cavespiderbanner", 0], ["cavespiderbanner", 0], ["cavespiderbanner", 0], ["cavespiderbanner", 0], ["cavespiderbanner", 0], ["cavespiderbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "cavespiderbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "cavespiderbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.cavespiderbanner, -1, render);

Block.setBlockShape(BlockID.cavespiderbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 40){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.cavespiderbanner, soul);
}
});

IDRegistry.genBlockID("endermanbanner"); 
  Block.createBlockWithRotation("endermanbanner", [{name: "Знамя эндермена", texture: [["endermanbanner", 0], ["endermanbanner", 0], ["endermanbanner", 0], ["endermanbanner", 0], ["endermanbanner", 0], ["endermanbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "endermanbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "endermanbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.endermanbanner, -1, render);

Block.setBlockShape(BlockID.endermanbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.endermanbanner, soul);
}
});

IDRegistry.genBlockID("lavaslimebanner"); 
  Block.createBlockWithRotation("lavaslimebanner", [{name: "Знамя магмового слизня", texture: [["lavaslimebanner", 0], ["lavaslimebanner", 0], ["lavaslimebanner", 0], ["lavaslimebanner", 0], ["lavaslimebanner", 0], ["lavaslimebanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "lavaslimebanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "lavaslimebannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.lavaslimebanner, -1, render);

Block.setBlockShape(BlockID.lavaslimebanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 42){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.lavaslimebanner, soul);
}
});

IDRegistry.genBlockID("skeletonbanner"); 
  Block.createBlockWithRotation("skeletonbanner", [{name: "Знамя скелета", texture: [["skeletonbanner", 0], ["skeletonbanner", 0], ["skeletonbanner", 0], ["skeletonbanner", 0], ["skeletonbanner", 0], ["skeletonbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "skeletonbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "skeletonbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.skeletonbanner, -1, render);

Block.setBlockShape(BlockID.skeletonbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.skeletonbanner, soul);
}
});

IDRegistry.genBlockID("witherskeletonbanner"); 
  Block.createBlockWithRotation("witherskeletonbanner", [{name: "Знамя скелета-иссушителя", texture: [["witherskeletonbanner", 0], ["witherskeletonbanner", 0], ["witherskeletonbanner", 0], ["witherskeletonbanner", 0], ["witherskeletonbanner", 0], ["witherskeletonbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "witherskeletonbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "witherskeletonbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.witherskeletonbanner, -1, render);

Block.setBlockShape(BlockID.witherskeletonbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 48){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.witherskeletonbanner, soul);
}
});

IDRegistry.genBlockID("slimebanner"); 
  Block.createBlockWithRotation("slimebanner", [{name: "Знамя слизня", texture: [["slimebanner", 0], ["slimebanner", 0], ["slimebanner", 0], ["slimebanner", 0], ["slimebanner", 0], ["slimebanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "slimebanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "slimebannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.slimebanner, -1, render);

Block.setBlockShape(BlockID.slimebanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 37){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.slimebanner, soul);
}
});

IDRegistry.genBlockID("guardianbanner"); 
  Block.createBlockWithRotation("guardianbanner", [{name: "Знамя стража", texture: [["guardianbanner", 0], ["guardianbanner", 0], ["guardianbanner", 0], ["guardianbanner", 0], ["guardianbanner", 0], ["guardianbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "guardianbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "guardianbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.guardianbanner, -1, render);

Block.setBlockShape(BlockID.guardianbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 49){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.guardianbanner, soul);
}
});

IDRegistry.genBlockID("silverfishbanner"); 
  Block.createBlockWithRotation("silverfishbanner", [{name: "Знамя чешуйницы", texture: [["silverfishbanner", 0], ["silverfishbanner", 0], ["silverfishbanner", 0], ["silverfishbanner", 0], ["silverfishbanner", 0], ["silverfishbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "silverfishbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "silverfishbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.silverfishbanner, -1, render);

Block.setBlockShape(BlockID.silverfishbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 39){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.silverfishbanner, soul);
}
});

IDRegistry.genBlockID("endermitebanner"); 
  Block.createBlockWithRotation("endermitebanner", [{name: "Знамя чешуйницы края", texture: [["endermitebanner", 0], ["endermitebanner", 0], ["endermitebanner", 0], ["endermitebanner", 0], ["endermitebanner", 0], ["endermitebanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "endermitebanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "endermitebannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.endermitebanner, -1, render);

Block.setBlockShape(BlockID.endermitebanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 55){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.endermitebanner, soul);
}
});

IDRegistry.genBlockID("shulkerbanner"); 
  Block.createBlockWithRotation("shulkerbanner", [{name: "Знамя шалкера", texture: [["shulkerbanner", 0], ["shulkerbanner", 0], ["shulkerbanner", 0], ["shulkerbanner", 0], ["shulkerbanner", 0], ["shulkerbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "shulkerbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "shulkerbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.shulkerbanner, -1, render);

Block.setBlockShape(BlockID.shulkerbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 54){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.shulkerbanner, soul);
}
});

IDRegistry.genBlockID("witchbanner"); 
  Block.createBlockWithRotation("witchbanner", [{name: "Знамя ведьмы", texture: [["witchbanner", 0], ["witchbanner", 0], ["witchbanner", 0], ["witchbanner", 0], ["witchbanner", 0], ["witchbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "witchbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "witchbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.witchbanner, -1, render);

Block.setBlockShape(BlockID.witchbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 45){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.witchbanner, soul);
}
});

IDRegistry.genBlockID("straybanner"); 
  Block.createBlockWithRotation("straybanner", [{name: "Знамя бродяги", texture: [["straybanner", 0], ["straybanner", 0], ["straybanner", 0], ["straybanner", 0], ["straybanner", 0], ["straybanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "straybanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "straybannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.straybanner, -1, render);

Block.setBlockShape(BlockID.straybanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 46){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.straybanner, soul);
}
});

IDRegistry.genBlockID("zombievillagerbanner"); 
  Block.createBlockWithRotation("zombievillagerbanner", [{name: "Знамя жителя-зомби", texture: [["zombievillagerbanner", 0], ["zombievillagerbanner", 0], ["zombievillagerbanner", 0], ["zombievillagerbanner", 0], ["zombievillagerbanner", 0], ["zombievillagerbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "zombievillagerbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "zombievillagerbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.zombievillagerbanner, -1, render);

Block.setBlockShape(BlockID.zombievillagerbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 44){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zombievillagerbanner, soul);
}
});

IDRegistry.genBlockID("blazebanner"); 
  Block.createBlockWithRotation("blazebanner", [{name: "Знамя ифрита", texture: [["blazebanner", 0], ["blazebanner", 0], ["blazebanner", 0], ["blazebanner", 0], ["blazebanner", 0], ["blazebanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "blazebanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "blazebannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.blazebanner, -1, render);

Block.setBlockShape(BlockID.blazebanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 43){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.blazebanner, soul);
}
});

IDRegistry.genBlockID("huskbanner"); 
  Block.createBlockWithRotation("huskbanner", [{name: "Знамя оборванца", texture: [["huskbanner", 0], ["huskbanner", 0], ["huskbanner", 0], ["huskbanner", 0], ["huskbanner", 0], ["huskbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "huskbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "huskbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.huskbanner, -1, render);

Block.setBlockShape(BlockID.huskbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.huskbanner, soul);
}
});

IDRegistry.genBlockID("creeperbanner"); 
  Block.createBlockWithRotation("creeperbanner", [{name: "Знамя крипера", texture: [["creeperbanner", 0], ["creeperbanner", 0], ["creeperbanner", 0], ["creeperbanner", 0], ["creeperbanner", 0], ["creeperbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "creeperbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "creeperbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.creeperbanner, -1, render);

Block.setBlockShape(BlockID.creeperbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.creeperbanner, soul);
}
});

IDRegistry.genBlockID("ghastbanner"); 
  Block.createBlockWithRotation("ghastbanner", [{name: "Знамя гаста", texture: [["ghastbanner", 0], ["ghastbanner", 0], ["ghastbanner", 0], ["ghastbanner", 0], ["ghastbanner", 0], ["ghastbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "ghastbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "ghastbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.ghastbanner, -1, render);

Block.setBlockShape(BlockID.ghastbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 41){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.ghastbanner, soul);
}
});

IDRegistry.genItemID("layscrab");
Item.createFoodItem("layscrab", "Lay's с крабом", {name: "layscrab", meta: 0}, {food: 14});


IDRegistry.genItemID("chips");
Item.createFoodItem("chips", "Чипс", {name: "chips", meta: 0}, {food: 2});
Recipes.addShaped({id: ItemID.chips, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', 393, 0]);
Recipes.addShaped({id: ItemID.layscrab, count: 1, data: 0}, [ "aaa", "bab", "aaa"], ['a', ItemID.chips, 0, 'b', 339, 0]);

IDRegistry.genBlockID("och");
Block.createBlock("och", [{name: "Очиститель", texture: [["och", 0], ["och", 0], ["och", 0], ["och", 0], ["och", 0], ["och", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
Recipes.addShaped({id: BlockID.och, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', 368, 0, 'b', ItemID.criumingot, 0, 'c', 18, 1]);

var guiOch = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Очиститель"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.och, { 
 
getGuiScreen: function(){ 
return guiOch; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data)){ 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
 this.addRecipes({id: 368, data: 0},{id: ItemID.pearl, data: 0, count: 1}); 
 this.container.validateAll(); 
 }
});

IDRegistry.genItemID("arksword");
IDRegistry.genItemID("arkpickaxe");
IDRegistry.genItemID("arkaxe");
IDRegistry.genItemID("arkshovel");
Item.createItem("arksword", "Меч Ltymess'a", {name: "arksword", meta: 0}, {stack: 1});
Item.createItem("arkpickaxe", "Кирка Ltymess'a", {name: "arkpickaxe", meta: 0}, {stack: 1});
Item.createItem("arkaxe", "Кирка Ltymess'a", {name: "arkaxe", meta: 0}, {stack: 1});
Item.createItem("arkshovel", "Лопата Ltymess'a", {name: "arkshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ark", {durability: 10000, level: 10, efficiency: 20, damage: 20, enchantability: 30});
ToolAPI.setTool(ItemID.arksword, "ark", ToolType.sword);
ToolAPI.setTool(ItemID.arkpickaxe, "ark", ToolType.pickaxe);
ToolAPI.setTool(ItemID.arkaxe, "ark", ToolType.axe);
ToolAPI.setTool(ItemID.arkshovel, "ark", ToolType.shovel);

IDRegistry.genItemID("arkhelmet");
IDRegistry.genItemID("arkchestplate");
IDRegistry.genItemID("arkleggings");
IDRegistry.genItemID("arkboots");

Item.createArmorItem("arkhelmet", "Шлем Ltymess'a", {name: "arkhelmet", meta: 0}, {type: "helmet", armor: 25, durability: 2500, texture: "armor/arkarmor.png"});
Item.createArmorItem("arkchestplate", "Нагрудник Ltymess'a", {name: "arkchestplate", meta: 0}, {type: "chestplate", armor: 25, durability: 2500, texture: "armor/arkarmor.png"});
Item.createArmorItem("arkleggings", "Поножи Ltymess'a", {name: "arkleggings", meta: 0}, {type: "leggings", armor: 25, durability: 2500, texture: "armor/arkarmor0.png"});
Item.createArmorItem("arkboots", "Ботинки Ltymess'a", {name: "arkboots", meta: 0}, {type: "boots", armor: 25, durability: 2500, texture: "armor/arkarmor.png"});

IDRegistry.genItemID("trowingknife");
Item.createThrowableItem("trowingknife", "Метательный нож", {name:"throwingknife"}, {stack:64});

Item.registerThrowableFunction("trowingknife", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 6);
} 
} 
);

Recipes.addShaped({id: BlockID.och, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 265, 0, 'b', 280, 0]);

IDRegistry.genBlockID("arkbanner"); 
  Block.createBlockWithRotation("arkbanner", [{name: "Знамя Ltymess'a", texture: [["arkbanner", 0], ["arkbanner", 0], ["arkbanner", 0], ["arkbanner", 0], ["arkbanner", 0], ["arkbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "aone", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "atwo", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "athree", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "athree", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "afour", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "arkbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "arkbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.arkbanner, -1, render);

Block.setBlockShape(BlockID.arkbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

IDRegistry.genItemID("energysword");
Item.createItem("energysword", "Энергитический меч", {name: "energysword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("energy", {durability: 1000, level: 5, efficiency: 8, damage: 13, enchantability: 15});
ToolAPI.setTool(ItemID.energysword, "energy", ToolType.sword);

IDRegistry.genItemID("electrohandle");
Item.createItem("electrohandle", "Рукоять", {name: "electrohandle", meta: 0}, {stack: 64});

IDRegistry.genItemID("energycrystal");
Item.createItem("energycrystal", "Энергитический кристалл", {name: "energycrystal", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.electrohandle, count: 1, data: 0}, [ "   ", " a ", " a "], ['a', 265, 0]);

Recipes.addShaped({id: ItemID.energycrystal, count: 1, data: 0}, [ " c ", " a ", " b "], ['a', 264, 0, 'b', 348, 0, 'c', 351, 5]);

Recipes.addShaped({id: ItemID.energysword, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', ItemID.energycrystal, 0, 'b', ItemID.electrohandle, 0]);

IDRegistry.genItemID("terrasword");
Item.createItem("terrasword", "Терраэнергичический меч", {name: "terrasword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("terraenergy", {durability: 1000, level: 5, efficiency: 8, damage: 20, enchantability: 15});
ToolAPI.setTool(ItemID.terrasword, "terraenergy", ToolType.sword);

Recipes.addShaped({id: ItemID.terrasword, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', ItemID.terracrystal, 0, 'b', ItemID.electrohandle, 0]);

IDRegistry.genItemID("terracrystal");
Item.createItem("terracrystal", "Терракристалл", {name: "terracrystal", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.terracrystal, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', ItemID.lifeingot, 0, 'b', ItemID.energycrystal, 0]);

IDRegistry.genItemID("lifeingot");
Item.createItem("lifeingot", "Слиток жизни", {name: "lifeingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.lifeingot, count: 1, data: 0}, [ "a  ", " b ", "  c"], ['a', ItemID.energycrystal, 0, 'b', ItemID.netheroil, 0, 'c', ItemID.pearl, 0]);

IDRegistry.genItemID("luminiteingot");
Item.createItem("luminiteingot", "Люминитовый слиток", {name: "luminiteingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.luminiteingot, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', ItemID.stardust, 0, 'b', ItemID.darkyenoriumingot, 0]);

IDRegistry.genItemID("crabingot");
Item.createItem("crabingot", "Морской слиток", {name: "crabingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.crabingot, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', ItemID.pearl, 0, 'b', 265, 0]);

IDRegistry.genItemID("essarctic");
Item.createItem("essarctic", "Арктическая эссенция", {name: "essarctic", meta: 0}, {stack: 64});

IDRegistry.genItemID("essboli");
Item.createItem("essboli", "Эссенция боли", {name: "essboli", meta: 0}, {stack: 64});

IDRegistry.genItemID("essdesert");
Item.createItem("essdesert", "Пустынная эссенция", {name: "essdesert", meta: 0}, {stack: 64});

IDRegistry.genItemID("essearth");
Item.createItem("essearth", "Эссенция земли", {name: "essearth", meta: 0}, {stack: 64});

IDRegistry.genItemID("essfire");
Item.createItem("essfire", "Огненная эссенция", {name: "essfire", meta: 0}, {stack: 64});

IDRegistry.genItemID("essevil");
Item.createItem("essevil", "Эссенция зла", {name: "essevil", meta: 0}, {stack: 64});

IDRegistry.genItemID("esslightningbolt");
Item.createItem("esslightningbolt", "Эссенция молнии", {name: "esslightningbolt", meta: 0}, {stack: 64});

IDRegistry.genItemID("esswater");
Item.createItem("esswater", "Эссенция воды", {name: "esswater", meta: 0}, {stack: 64});

IDRegistry.genItemID("omikroningot");
Item.createItem("omikroningot", "Омикроновый слиток", {name: "omikroningot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.omikroningot, count: 1, data: 0}, [ "abc", " d ", "   "], ['a', ItemID.lifeingot, 0, 'b', ItemID.crabingot, 0, 'c', ItemID.luminiteingot, 0, 'd', ItemID.darkyenoriumingot, 0]);

IDRegistry.genItemID("anarhyblade");
Item.createItem("anarhyblade", "Меч Анархии", {name: "anarhyblade", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("anarhy", {durability: 1000, level: 5, efficiency: 8, damage: 33, enchantability: 15});
ToolAPI.setTool(ItemID.anarhyblade, "anarhy", ToolType.sword);
Recipes.addShaped({id: ItemID.anarhyblade, count: 1, data: 0}, [ "aba", "bcb", "ada"], ['a', ItemID.crabingot, 0, 'b', ItemID.lifeingot, 0, 'c', ItemID.luminiteingot, 0]);
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.anarhyblade){ 
Entity.addEffect(victim, 20, 2, 999999, true, true); 
}
});


IDRegistry.genItemID("abraxas");
Item.createItem("abraxas", "Справедливость Абраксаса", {name: "abraxas", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("abraxas", {durability: 1000, level: 5, efficiency: 8, damage: 35, enchantability: 15});
ToolAPI.setTool(ItemID.abraxas, "abraxas", ToolType.sword);
Recipes.addShaped({id: ItemID.abraxas, count: 1, data: 0}, [ "aaa", "abd", "ac "], ['a', ItemID.lifeingot, 0, 'b', ItemID.crabingot, 0, 'c', 280, 0, 'd', ItemID.essevil, 0]);

IDRegistry.genItemID("ancientclaymore");
Item.createItem("ancientclaymore", "Древний клеймор", {name: "ancientclaymore", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ancientclaymore", {durability: 1000, level: 5, efficiency: 8, damage: 21, enchantability: 15});
ToolAPI.setTool(ItemID.ancientclaymore, "ancientclaymore", ToolType.axe);
Recipes.addShaped({id: ItemID.ancientclaymore, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', 17, 0, 'b', ItemID.lifeingot, 0, 'c', ItemID.essearth, 0]);

IDRegistry.genItemID("Ark_of_the_Cosmos");
Item.createItem("Ark_of_the_Cosmos", "Ковчег Космоса", {name: "Ark_of_the_Cosmos", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("Ark_of_the_Cosmos", {durability: 1000, level: 5, efficiency: 8, damage: 147, enchantability: 15});
ToolAPI.setTool(ItemID.Ark_of_the_Cosmos, "Ark_of_the_Cosmos", ToolType.sword);
Recipes.addShaped({id: ItemID.Ark_of_the_Cosmos, count: 1, data: 0}, [ "abc", "de ", "   "], ['a', ItemID.anarhyblade, 0, 'b', ItemID.abraxas, 0, 'c', ItemID.grandguardian, 0, 'd', ItemID.luminiteblade, 0, 'e', ItemID.tyransword, 0]);
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.Ark_of_the_Cosmos){ 
Entity.addEffect(victim, 20, 5, 999999, true, true); 
}
});

IDRegistry.genItemID("flarefrostblade");
Item.createItem("flarefrostblade", "Ледогненный меч", {name: "flarefrostblade", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("flarefrost", {durability: 1000, level: 5, efficiency: 8, damage: 14, enchantability: 15});
ToolAPI.setTool(ItemID.flarefrostblade, "flarefrost", ToolType.sword);
Recipes.addShaped({id: ItemID.flarefrostblade, count: 1, data: 0}, [ "aab", "acb", "abb"], ['a', ItemID.essarctic, 0, 'b', ItemID.essfire, 0, 'c', ItemID.lifeingot, 0]);
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.withersword){ 
Entity.addEffect(victim, 20, 0, 999999, true, true); 
Entity.addEffect(victim, 2, 0, 5, true, true); 
}
});

IDRegistry.genItemID("grandguardian");
Item.createItem("grandguardian", "Великий защитник", {name: "grandguardian", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("grand", {durability: 1000, level: 5, efficiency: 8, damage: 25, enchantability: 15});
ToolAPI.setTool(ItemID.grandguardian, "grand", ToolType.sword);
Recipes.addShaped({id: ItemID.grandguardian, count: 1, data: 0}, [ "cac", "aba", "cbc"], ['a', ItemID.essarctic, 0, 'b', ItemID.luminiteingot, 0, 'c', ItemID.crabingot, 0]);

IDRegistry.genItemID("luminiteblade");
Item.createItem("luminiteblade", "Люминитовый меч", {name: "luminiteblade", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("luminite", {durability: 1000, level: 5, efficiency: 8, damage: 14, enchantability: 15});
ToolAPI.setTool(ItemID.luminiteblade, "luminite", ToolType.sword);
Recipes.addShaped({id: ItemID.luminiteblade, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.luminiteingot, 0, 'b', ItemID.lifeingot, 0]);

IDRegistry.genItemID("Omikrone_Ark_of_the_Cosmos");
Item.createItem("Omikrone_Ark_of_the_Cosmos", "Омикроновый Ковчег Космоса", {name: "Omikron_Ark_of_the_Cosmos", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("Omikrone_Ark_of_the_Cosmos", {durability: 1000, level: 5, efficiency: 8, damage: 345, enchantability: 15});
ToolAPI.setTool(ItemID.Omikrone_Ark_of_the_Cosmos, "Omikrone_Ark_of_the_Cosmos", ToolType.sword);
Recipes.addShaped({id: ItemID.Omikrone_Ark_of_the_Cosmos, count: 1, data: 0}, [ "bbb", "bab", "bbb"], ['a', ItemID.Ark_of_the_Cosmos, 0, 'b', ItemID.omikroningot, 0]);
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.Ark_of_the_Cosmos){ 
Entity.addEffect(victim, 20, 15, 999999, true, true); 
}
});
 

IDRegistry.genItemID("omnikatana");
Item.createItem("omnikatana", "Омни-катана", {name: "omnikatana", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("omni", {durability: 1000, level: 5, efficiency: 8, damage: 6, enchantability: 15});
ToolAPI.setTool(ItemID.omnikatana, "omni", ToolType.sword);
Recipes.addShaped({id: ItemID.omnikatana, count: 1, data: 0}, [ "aaa", "abc", " bc"], ['a', ItemID.luminiteingot, 0, 'b', ItemID.crabingot, 0, 'c', ItemID.essboli, 0]);

IDRegistry.genItemID("paladinhammer");
Item.createItem("paladinhammer", "Истинный палладинский маг-молот могущества Триактиса", {name: "paladinhammer", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("paladin", {durability: 1000, level: 5, efficiency: 8, damage: 148, enchantability: 15});
ToolAPI.setTool(ItemID.paladinhammer, "paladin", ToolType.sword);
Recipes.addShaped({id: ItemID.paladinhammer, count: 1, data: 0}, [ "abc", "de ", "   "], ['a', ItemID.anarhyblade, 0, 'b', ItemID.abraxas, 0, 'c', ItemID.phoenixblade, 0, 'd', ItemID.tyransword, 0]);

IDRegistry.genItemID("phoenixblade");
Item.createItem("phoenixblade", "Меч Феникса", {name: "phoenixblade", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("phoenix", {durability: 1000, level: 5, efficiency: 8, damage: 40, enchantability: 15});
ToolAPI.setTool(ItemID.phoenixblade, "phoenix", ToolType.sword);
Recipes.addShaped({id: ItemID.phoenixblade, count: 1, data: 0}, [ "bab", "bab", "aaa"], ['a', ItemID.crabingot, 0, 'b', ItemID.lifeingot, 0]);

IDRegistry.genItemID("tyransword");
Item.createItem("tyransword", "Меч Тирана", {name: "tyransword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("tyran", {durability: 1000, level: 5, efficiency: 8, damage: 40, enchantability: 15});
ToolAPI.setTool(ItemID.tyransword, "tyran", ToolType.sword);
Recipes.addShaped({id: ItemID.tyransword, count: 1, data: 0}, [ "aaa", "bab", "bab"], ['a', ItemID.crabingot, 0, 'b', ItemID.lifeingot, 0]);
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.Ark_of_the_Cosmos){ 
Entity.addEffect(victim, 20, 5, 999999, true, true); 
}
});


IDRegistry.genItemID("crystalpickaxe");
Item.createItem("crystalpickaxe", "Кристалльный разрушитель", {name: "crystalpickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("crystal", {durability: 1000, level: 5, efficiency: 8, damage: 6, enchantability: 15});
ToolAPI.setTool(ItemID.crystalpickaxe, "crystal", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.crystalpickaxe, count: 1, data: 0}, [ "aaa", "bab", "cac"], ['a', ItemID.lifeingot, 0, 'b', ItemID.essearth, 0, 'c', ItemID.essdesert, 0]);

IDRegistry.genItemID("obskuritron");
Item.createItem("obskuritron", "Обскуритрон", {name: "obskuritron", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("obskuritron", {durability: 1000, level: 5, efficiency: 8, damage: 23, enchantability: 15});
ToolAPI.setTool(ItemID.obskuritron, "obskuritron", ToolType.sword);
Recipes.addShaped({id: ItemID.obskuritron, count: 1, data: 0}, [ "aba", "aba", "ccc"], ['a', ItemID.esswater, 0, 'b', ItemID.crabingot, 0, 'c', ItemID.lifeingot, 0]);



Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 21){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essarctic, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 28){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essarctic, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 46){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essarctic, soul);
}
});

//000000000000000000000000000000000

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 27){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 26){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 28){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 14){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 20){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 36){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 40){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 42){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 48){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 37){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 49){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 39){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 55){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 54){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 45){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 46){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 44){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 43){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 40){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 41){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essboli, soul);
}
});

//000000000000000000000000000

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essdesert, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 18){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essdesert, soul);
}
});

//000000000000000000000

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 15){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 11){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 10){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 12){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 23){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 24){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 25){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 27){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 26){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 13){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 22){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 14){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 36){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 37){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 39){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 45){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 44){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 40){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essearth, soul);
}
});

//0000000000000000000000

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essfire, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 42){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essfire, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 48){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essfire, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 43){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essfire, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essfire, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 41){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essfire, soul);
}
});

//00000000000000000009099

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 48){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 49){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 39){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 54){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 45){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 46){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 44){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 43){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 41){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.essevil, soul);
}
});

//00000000000000000000000

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.esslightningbolt, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 45){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.esslightningbolt, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 36){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.esslightningbolt, soul);
}
});

//0000000000000000000000000000

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 17){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.esswater, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 49){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.esswater, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 37){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.esswater, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 45){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 3);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.esswater, soul);
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.withersword){ 
Entity.addEffect(victim, 20, 0, 999999, true, true); 
}
});

IDRegistry.genItemID("cosmicaxe");
Item.createItem("cosmicaxe", "Космилитовый истинный палладиновый маг-молот могущества Триактиса", {name: "cosmicaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("cosmic", {durability: 1000, level: 5, efficiency: 8, damage: 196, enchantability: 15});
ToolAPI.setTool(ItemID.cosmicaxe, "cosmic", ToolType.sword);
Recipes.addShaped({id: ItemID.cosmicaxe, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', ItemID.crabingot, 0, 'b', ItemID.luminiteingot, 0, 'c', ItemID.paladinhammer, 0]);

IDRegistry.genItemID("lastchanse");
Item.createItem("lastchanse", "Космилитовый истинный палладиновый маг-молот могущества Триактиса", {name: "lastchanse", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("last", {durability: 1000, level: 5, efficiency: 8, damage: 1000000, enchantability: 15});
ToolAPI.setTool(ItemID.lastchanse, "last", ToolType.sword);
Recipes.addShaped({id: ItemID.lastchanse, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.lifeingot, 0]);

IDRegistry.genItemID("starpickaxe");
Item.createItem("starpickaxe", "Звездная кирка", {name: "starpickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("starsword");
Item.createItem("starsword", "Звездный меч", {name: "starsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("star", {durability: 1000, level: 5, efficiency: 8, damage: 36, enchantability: 15});
ToolAPI.setTool(ItemID.starpickaxe, "star", ToolType.pickaxe);
ToolAPI.setTool(ItemID.starsword, "star", ToolType.sword);
Recipes.addShaped({id: ItemID.starpickaxe, count: 1, data: 0}, [ "aaa", "cbc", "cac"], ['a', ItemID.lifeingot, 0, 'b', 278, 0, 'c', ItemID.stardust, 0]);
Recipes.addShaped({id: ItemID.starsword, count: 1, data: 0}, [ "c a", "aa", "bac"], ['a', ItemID.lifeingot, 0, 'b', 276, 0, 'c', ItemID.stardust, 0]);

IDRegistry.genBlockID("aetherblock");
Block.createBlock("aetherblock", [{name: "Узорчатый эфирный блок", texture: [["aetherblock", 0], ["aetherblock", 0], ["aetherblock", 0], ["aetherblock", 0], ["aetherblock", 0], ["aetherblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.aetherblock, count: 1, data: 0}, [ "abc", "abc", "abc"], ['a', 35, 9, 'b', 155, 0, 'c', 5, 0]);

IDRegistry.genBlockID("amberore");
Block.createBlock("amberore", [{name: "Янтарная руда", texture: [["amberore", 0], ["amberore", 0], ["amberore", 0], ["amberore", 0], ["amberore", 0], ["amberore", 0]], inCreative: true}]);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.amberore, 0, 20);
    }
}
)

IDRegistry.genItemID("amber");
Item.createItem("amber", "Янтарь", {name: "amber", meta: 0}, {stack: 64});

IDRegistry.genBlockID("amberblock");
Block.createBlock("amberblock", [{name: "Янтарный блок", texture: [["amberblock", 0], ["amberblock", 0], ["amberblock", 0], ["amberblock", 0], ["amberblock", 0], ["amberblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.amberblock, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.amber, 0]);

IDRegistry.genBlockID("amberblockglassed");
Block.createBlock("amberblockglassed", [{name: "Гладкий янтарный блок", texture: [["amberblockglassed", 0], ["amberblockglassed", 0], ["amberblockglassed", 0], ["amberblockglassed", 0], ["amberblockglassed", 0], ["amberblockglassed", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.amberblockglassed, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', BlockID.amberblock, 0]);

IDRegistry.genBlockID("amberbricks");
Block.createBlock("amberbricks", [{name: "Янтарные кирпичи", texture: [["amberbricks", 0], ["amberbricks", 0], ["amberbricks", 0], ["amberbricks", 0], ["amberbricks", 0], ["amberbricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.amberbricks, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', BlockID.amberblock, 0]);

IDRegistry.genBlockID("amberbrick");
Block.createBlock("amberbrick", [{name: "Янтарный блок", texture: [["amberbrick", 0], ["amberbrick", 0], ["amberbrick", 0], ["amberbrick", 0], ["amberbrick", 0], ["amberbrick", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.amberbrick, count: 1, data: 0}, [ "  a", "   ", "   "], ['a', BlockID.amberblock, 0]);

IDRegistry.genBlockID("argillite");
Block.createBlock("argillite", [{name: "Аргилит", texture: [["argillite", 0], ["argillite", 0], ["argillite", 0], ["argillite", 0], ["argillite", 0], ["argillite", 0]], inCreative: true}]);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 60, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.argillite, 0, 10);
    }
}
)

IDRegistry.genBlockID("argillitebricks");
Block.createBlock("argillitebricks", [{name: "Аргилитовые кирпичи", texture: [["argillitebricks", 0], ["argillitebricks", 0], ["argillitebricks", 0], ["argillitebricks", 0], ["argillitebricks", 0], ["argillitebricks", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.argillitebricks, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', BlockID.argillite, 0]);

IDRegistry.genBlockID("argillitebrick");
Block.createBlock("argillitebrick", [{name: "Аргилитовый блок", texture: [["argillitebrick", 0], ["argillitebrick", 0], ["argillitebrick", 0], ["argillitebrick", 0], ["argillitebrick", 0], ["argillitebrick", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.argillitebrick, count: 1, data: 0}, [ "  a", "   ", "   "], ['a', BlockID.argillite, 0]);

IDRegistry.genBlockID("carpetblue");
Block.createBlock("carpetblue", [{name: "Синий ковер", texture: [["carpetblue", 0], ["carpetblue", 0], ["carpetblue", 0], ["carpetblue", 0], ["carpetblue", 0], ["carpetblue", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetblue, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 4]);

IDRegistry.genBlockID("carpetbrown");
Block.createBlock("carpetbrown", [{name: "Коричневый ковер", texture: [["carpetbrown", 0], ["carpetbrown", 0], ["carpetbrown", 0], ["carpetbrown", 0], ["carpetbrown", 0], ["carpetbrown", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetbrown, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 3]);

IDRegistry.genBlockID("carpetcyan");
Block.createBlock("carpetcyan", [{name: "Бирюзовый ковер", texture: [["carpetcyan", 0], ["carpetcyan", 0], ["carpetcyan", 0], ["carpetcyan", 0], ["carpetcyan", 0], ["carpetcyan", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetcyan, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 6]);

IDRegistry.genBlockID("carpetgreen");
Block.createBlock("carpetgreen", [{name: "Зеленый ковер", texture: [["carpetgreen", 0], ["carpetgreen", 0], ["carpetgreen", 0], ["carpetgreen", 0], ["carpetgreen", 0], ["carpetgreen", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetgreen, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 2]);

IDRegistry.genBlockID("carpetlightblue");
Block.createBlock("carpetlightblue", [{name: "Голубой ковер", texture: [["carpetlightblue", 0], ["carpetlightblue", 0], ["carpetlightblue", 0], ["carpetlightblue", 0], ["carpetlightblue", 0], ["carpetlightblue", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetlightblue, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 12]);

IDRegistry.genBlockID("carpetlime");
Block.createBlock("carpetlime", [{name: "Лаймовый ковер", texture: [["carpetlime", 0], ["carpetlime", 0], ["carpetlime", 0], ["carpetlime", 0], ["carpetlime", 0], ["carpetlime", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetlime, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 10]);

IDRegistry.genBlockID("carpetorange");
Block.createBlock("carpetorange", [{name: "Оранжевый ковер", texture: [["carpetorange", 0], ["carpetorange", 0], ["carpetorange", 0], ["carpetorange", 0], ["carpetorange", 0], ["carpetorange", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetorange, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 14]);

IDRegistry.genBlockID("carpetpink");
Block.createBlock("carpetpink", [{name: "Розовый ковер", texture: [["carpetpink", 0], ["carpetpink", 0], ["carpetpink", 0], ["carpetpink", 0], ["carpetpink", 0], ["carpetpink", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetpink, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 9]);

IDRegistry.genBlockID("carpetred");
Block.createBlock("carpetred", [{name: "Красный ковер", texture: [["carpetred", 0], ["carpetred", 0], ["carpetred", 0], ["carpetred", 0], ["carpetred", 0], ["carpetred", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetred, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 1]);

IDRegistry.genBlockID("carpetviolet");
Block.createBlock("carpetviolet", [{name: "Фиолетовый ковер", texture: [["carpetviolet", 0], ["carpetviolet", 0], ["carpetviolet", 0], ["carpetviolet", 0], ["carpetviolet", 0], ["carpetviolet", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetviolet, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 5]);

IDRegistry.genBlockID("carpetwhite");
Block.createBlock("carpetwhite", [{name: "Белый ковер", texture: [["carpetwhite", 0], ["carpetwhite", 0], ["carpetwhite", 0], ["carpetwhite", 0], ["carpetwhite", 0], ["carpetwhite", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetwhite, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 15]);

IDRegistry.genBlockID("carpetyellow");
Block.createBlock("carpetyellow", [{name: "Желтый ковер", texture: [["carpetyellow", 0], ["carpetyellow", 0], ["carpetyellow", 0], ["carpetyellow", 0], ["carpetyellow", 0], ["carpetyellow", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.carpetyellow, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 35, 0, 'b', 351, 11]);

IDRegistry.genBlockID("jadeore");
Block.createBlock("jadeore", [{name: "Жадовая руда", texture: [["jadeore", 0], ["jadeore", 0], ["jadeore", 0], ["jadeore", 0], ["jadeore", 0], ["jadeore", 0]], inCreative: true}]);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.jadeore, 0, 20);
    }
}
)

IDRegistry.genItemID("jade");
Item.createItem("jade", "Жад", {name: "jade", meta: 0}, {stack: 64});

IDRegistry.genBlockID("jadeblock");
Block.createBlock("jadeblock", [{name: "Жадовый блок", texture: [["jadeblock", 0], ["jadeblock", 0], ["jadeblock", 0], ["jadeblock", 0], ["jadeblock", 0], ["jadeblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.jadeblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.jade, 0]);


IDRegistry.genBlockID("realmiteore");
Block.createBlock("realmiteore", [{name: "Реалмитовая руда", texture: [["realmiteore", 0], ["realmiteore", 0], ["realmiteore", 0], ["realmiteore", 0], ["realmiteore", 0], ["realmiteore", 0]], inCreative: true}]);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 5);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.realmiteore, 0, 1);
    }
}
)

IDRegistry.genItemID("realmite");
Item.createItem("realmite", "Реалмит", {name: "realmite", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.amberore, ItemID.amber, 1);

Recipes.addFurnace(BlockID.jadeore, ItemID.jade, 1);

Recipes.addFurnace(BlockID.realmiteore, ItemID.realmite, 1);


IDRegistry.genBlockID("mud");
Block.createBlock("mud", [{name: "Грязь", texture: [["mud", 0], ["mud", 0], ["mud", 0], ["mud", 0], ["mud", 0], ["mud", 0]], inCreative: true}]);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 60, 100);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mud, 0, 20);
    }
}
)

IDRegistry.genBlockID("waterblock");
Block.createBlock("waterblock", [{name: "Водяной блок", texture: [["waterblock", 0], ["waterblock", 0], ["waterblock", 0], ["waterblock", 0], ["waterblock", 0], ["waterblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.waterblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 325, 8]);

IDRegistry.genBlockID("lavablock");
Block.createBlock("lavablock", [{name: "Лавовый блок", texture: [["lavablock", 0], ["lavablock", 0], ["lavablock", 0], ["lavablock", 0], ["lavablock", 0], ["lavablock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.lavablock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', 325, 10]);

IDRegistry.genItemID("elerium");
Item.createItem("elerium", "Элериум", {name: "aaa$9", meta: 0}, {stack: 56});

Recipes.addShaped({id: ItemID.elerium, count: 1, data: 0}, [ "a b", " c ", "b a"], ['a', ItemID.torfitem, 0, 'b', ItemID.jade, 0, 'c', 409, 0]);

IDRegistry.genItemID("leaf");
Item.createItem("leaf", "Лист", {name: "leaf", meta: 0}, {stack: 56});

Recipes.addShaped({id: ItemID.leaf, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 18, 0]);

IDRegistry.genItemID("magicleaf");
Item.createItem("magicleaf", "Магический лист", {name: "leaf", meta: 0}, {stack: 59});

Recipes.addShaped({id: ItemID.elerium, count: 1, data: 0}, [ "a a", " b ", "a a"], ['a', ItemID.elerium, 0, 'b', ItemID.leaf, 0]);

IDRegistry.genItemID("veer");
Item.createItem("veer", "Магический веер", {name: "veer", meta: 0}, {stack: 59});

Recipes.addShaped({id: ItemID.veer, count: 1, data: 0}, [ "abb", "aab", "aaa"], ['a', ItemID.leaf, 0, 'b', ItemID.elerium, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.veer)
{
Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 30000)
}
});

IDRegistry.genItemID("bonesword");
Item.createItem("bonesword", "Костяной меч", {name: "bonesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("bone", {durability: 3400, level: 4, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.bonesword, "bone", ToolType.sword);
Recipes.addShaped({id: ItemID.bonesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 352, 0, 'b', 280, 0]);

IDRegistry.genItemID("castrationaxe");
Item.createItem("castrationaxe", "Топорик для кастрирования", {name: "castrationaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("castration", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.castrationaxe, "castration", ToolType.sword);
Recipes.addShaped({id: ItemID.castrationaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', 352, 0, 'b', 280, 0]);

IDRegistry.genItemID("cheaterstaff");
Item.createItem("cheaterstaff", "Посох читера", {name: "cheaterstaff", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("cheater", {durability: 100000, level: 1000000, efficiency: 1000000, damage: 1000000, enchantability: 1000000});
ToolAPI.setTool(ItemID.cheaterstaff, "cheater", ToolType.sword);

IDRegistry.genItemID("desertsword");
Item.createItem("desertsword", "Меч пустыни", {name: "desertsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("desert", {durability: 3400, level: 4, efficiency: 4, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.desertsword, "desert", ToolType.sword);
Recipes.addShaped({id: ItemID.desertsword, count: 1, data: 0}, [ " a ", " a ", "cb "], ['a', 12, 0, 'b', 81, 0, 'c', ItemID.essdesert, 0]);

IDRegistry.genItemID("diamondkatana");
Item.createItem("diamondkatana", "Алмазная катана", {name: "diamondkatana", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("diamondkatana", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.diamondkatana, "diamondkatana", ToolType.sword);
Recipes.addShaped({id: ItemID.diamondkatana, count: 1, data: 0}, [ "  a", " a ", "b  "], ['a', 264, 0, 'b', 280, 0]);

IDRegistry.genItemID("diamondscythe");
Item.createItem("diamondscythe", "Алмазная коса", {name: "diamondscythe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("diamondscythe", {durability: 3400, level: 4, efficiency: 8, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.diamondscythe, "diamondscythe", ToolType.sword);
Recipes.addShaped({id: ItemID.diamondscythe, count: 1, data: 0}, [ "aaa", "ab ", " b "], ['a', 264, 0, 'b', 280, 0]);

IDRegistry.genItemID("dirtsword");
Item.createItem("dirtsword", "Земляной меч", {name: "dirtsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dirt", {durability: 3400, level: 4, efficiency: 8, damage: 1, enchantability: 14});
ToolAPI.setTool(ItemID.dirtsword, "dirt", ToolType.sword);
Recipes.addShaped({id: ItemID.dirtsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 3, 0, 'b', 280, 0]);

IDRegistry.genItemID("fireicesword");
Item.createItem("fireicesword", "Огненноледяной меч", {name: "fireicesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("fireice", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.fireicesword, "fireice", ToolType.sword);
Recipes.addShaped({id: ItemID.fireicesword, count: 1, data: 0}, [ "ca ", "ac ", " b "], ['a', 87, 0, 'b', 280, 0, 'c', 79, 0]);

IDRegistry.genItemID("glasssword");
Item.createItem("glasssword", "Стеклянный меч", {name: "glasssword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("glass", {durability: 3400, level: 4, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.glasssword, "glass", ToolType.sword);
Recipes.addShaped({id: ItemID.glasssword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 20, 0, 'b', 280, 0]);

IDRegistry.genItemID("goldaxe");
Item.createItem("goldaxe", "Золотой боевой топор", {name: "goldaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("goldaxe", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.goldaxe, "goldaxe", ToolType.sword);
Recipes.addShaped({id: ItemID.goldaxe, count: 1, data: 0}, [ "aaa", "aba", " b "], ['a', 266, 0, 'b', 280, 0]);

IDRegistry.genItemID("grasssword");
Item.createItem("grasssword", "Травяной меч", {name: "grasssword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("grass", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.grasssword, "grass", ToolType.sword);
Recipes.addShaped({id: ItemID.grasssword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 31, 1, 'b', 280, 0]);

IDRegistry.genItemID("icesword");
Item.createItem("icesword", "Ледяной меч", {name: "icesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ice", {durability: 3400, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.icesword, "ice", ToolType.sword);
Recipes.addShaped({id: ItemID.icesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 79, 0, 'b', 280, 0]);

IDRegistry.genItemID("katana");
Item.createItem("katana", "Катана", {name: "katana", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("katana", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.katana, "katana", ToolType.sword);
Recipes.addShaped({id: ItemID.katana, count: 1, data: 0}, [ "  a", " a ", "b  "], ['a', 265, 0, 'b', 280, 0]);

IDRegistry.genItemID("lightsaber");
Item.createItem("lightsaber", "Световой меч", {name: "lightsaber", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("lightsaber", {durability: 3400, level: 4, efficiency: 8, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.lightsaber, "lightsaber", ToolType.sword);
Recipes.addShaped({id: ItemID.lightsaber, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 348, 0, 'b', ItemID.meteoriteshard, 0]);

IDRegistry.genItemID("pumpkingsword");
Item.createItem("pumpkingsword", "Тыквенный меч", {name: "pumpkingsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("pumpking", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.pumpkingsword, "pumpking", ToolType.sword);
Recipes.addShaped({id: ItemID.pumpkingsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 86, 0, 'b', 280, 0]);

IDRegistry.genItemID("realmitesword");
Item.createItem("realmitesword", "Реалмитовый меч", {name: "realmitesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("realmite", {durability: 1000000000, level: 4, efficiency: 100, damage: 1000000, enchantability: 100});
ToolAPI.setTool(ItemID.realmitesword, "realmite", ToolType.sword);
Recipes.addShaped({id: ItemID.realmitesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.realmite, 0, 'b', 280, 0]);

IDRegistry.genItemID("redstoneaxe");
Item.createItem("redstoneaxe", "Боевой топор красной пыли", {name: "redstoneaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("redstoneaxe", {durability: 3400, level: 4, efficiency: 8, damage: 4, enchantability: 14});
ToolAPI.setTool(ItemID.bonesword, "redstoneaxe", ToolType.sword);
Recipes.addShaped({id: ItemID.redstoneaxe, count: 1, data: 0}, [ "aaa", "aba", " b "], ['a', 331, 0, 'b', 280, 0]);

IDRegistry.genItemID("redstonesword");
Item.createItem("redstonesword", "Меч красной пыли", {name: "redstonesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("redstonesword", {durability: 3400, level: 4, efficiency: 8, damage: 3, enchantability: 14});
ToolAPI.setTool(ItemID.redstonesword, "redstonesword", ToolType.sword);
Recipes.addShaped({id: ItemID.redstonesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 331, 0, 'b', 280, 0]);

IDRegistry.genItemID("superdiamondsword");
Item.createItem("superdiamondsword", "Супер алмазный меч", {name: "superdiamondsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("superdiamond", {durability: 3400, level: 4, efficiency: 8, damage: 18, enchantability: 14});
ToolAPI.setTool(ItemID.superdiamondsword, "superdiamond", ToolType.sword);
Recipes.addShaped({id: ItemID.superdiamondsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 57, 0, 'b', 5, 0]);

IDRegistry.genItemID("supergoldsword");
Item.createItem("supergoldsword", "Супер золотой меч", {name: "supergoldsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("supergold", {durability: 3400, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.supergoldsword, "supergold", ToolType.sword);
Recipes.addShaped({id: ItemID.supergoldsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 41, 0, 'b', 5, 0]);

IDRegistry.genItemID("supergrasssword");
Item.createItem("supergrasssword", "Супер травяной меч", {name: "supergrasssword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("supergrass", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.supergrasssword, "supergrass", ToolType.sword);
Recipes.addShaped({id: ItemID.supergrasssword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 175, 2, 'b', 5, 0]);

IDRegistry.genItemID("superironsword");
Item.createItem("superironsword", "Супер железный меч", {name: "superironsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("superiron", {durability: 3400, level: 4, efficiency: 8, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.superironsword, "superiron", ToolType.sword);
Recipes.addShaped({id: ItemID.superironsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 42, 0, 'b', 5, 0]);

IDRegistry.genItemID("superstonesword");
Item.createItem("superstonesword", "Супер каменный меч", {name: "superstonesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("superstone", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.superstonesword, "superstone", ToolType.sword);
Recipes.addShaped({id: ItemID.superstonesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 98, 1, 'b', 5, 0]);

IDRegistry.genItemID("superwoodsword");
Item.createItem("superwoodsword", "Супер деревянный меч", {name: "superwoodsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("superwood", {durability: 3400, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.superwoodsword, "superwood", ToolType.sword);
Recipes.addShaped({id: ItemID.superwoodsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 17, 0, 'b', 5, 0]);

IDRegistry.genItemID("terrarsword");
Item.createItem("terrarsword", "Терра меч", {name: "terrarsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("terrasword", {durability: 3400, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.terrarsword, "terrasword", ToolType.sword);
Recipes.addShaped({id: ItemID.terrarsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 106, 0, 'b', ItemID.supergrasssword, 0]);

IDRegistry.genItemID("nanosuriken");
Item.createThrowableItem("nanosuriken", "Нано сюрикен", {name:"nanosuriken"}, {stack:64});

Item.registerThrowableFunction("nanosuriken", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 10);
} 
} 
);
Recipes.addShaped({id: ItemID.nanosuriken, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', 264, 0, 'b', 265, 0]);

IDRegistry.genItemID("speedstaff");
Item.createItem("speedstaff", "Посох скорости", {name: "speedstaff", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.speedstaff, count: 1, data: 0}, [ " ab", " ca", "d  "], ['a', ItemID.darkyenoriumingot, 0, 'b', ItemID.stardust, 0, 'c', 369, 0, 'd', 437, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.speedstaff)
{
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 100, 30000)
}
});

IDRegistry.genItemID("speedhelmet");
IDRegistry.genItemID("speedchestplate");
IDRegistry.genItemID("speedleggings");
IDRegistry.genItemID("speedboots");

Item.createArmorItem("speedhelmet", "Шлем скорости", {name: "speedhelmet", meta: 0}, {type: "helmet", armor: 7, durability: 650, texture: "armor/speedarmor.png"});
Item.createArmorItem("speedchestplate", "Нагрудник скорости", {name: "speedchestplate", meta: 0}, {type: "chestplate", armor: 8, durability: 750, texture: "armor/speedarmor.png"});
Item.createArmorItem("speedleggings", "Поножи скорости", {name: "speedleggings", meta: 0}, {type: "leggings", armor: 7, durability: 700, texture: "armor/speedarmor.png"});
Item.createArmorItem("speedboots", "Ботинки скорости", {name: "speedboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/speedarmor.png"});

Recipes.addShaped({id: ItemID.speedhelmet, count: 1, data: 0}, [ "ab", "   ", "   "], ['a', ItemID.darkyenoriumhelmet, 0, 'b', ItemID.stardust, 0]);
Recipes.addShaped({id: ItemID.speedchestplate, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.darkyenoriumchestplate, 0, 'b', ItemID.stardust, 0]);
Recipes.addShaped({id: ItemID.speedleggings, count: 1, data: 0}, [ "ab", "   ", "   "], ['a', ItemID.darkyenoriumleggings, 0, 'b', ItemID.stardust, 0]);
Recipes.addShaped({id: ItemID.speedboots, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.darkyenoriumboots, 0, 'b', ItemID.stardust, 0]);

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.speedhelmet) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 50, 100)
    }
if (chest.id == ItemID.speedchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 80, 100)
    }
    if (legs.id == ItemID.speedleggings) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 70, 100)
    }
    if (boots.id == ItemID.speedboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 40, 100)
    }
});

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.arkhelmet) {
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 250, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 250, 100)
    }
if (chest.id == ItemID.arkchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 80, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 100, 100)
    Player.setFlyingEnabled(true); 
    }
    if (legs.id == ItemID.arkleggings) {
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    if (boots.id == ItemID.arkboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 250, 100)
    }
});

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.crystalpickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z-1, true);

World.destroyBlock(x, y, z, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z-1, true);

World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z-1, true);
}
});

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.starpickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x+2, y-2, z-2, true);
World.destroyBlock(x+2, y-2, z-1, true);
World.destroyBlock(x+2, y-2, z, true);
World.destroyBlock(x+2, y-2, z+1, true);
World.destroyBlock(x+2, y-2, z+2, true);

World.destroyBlock(x+1, y-2, z-2, true);
World.destroyBlock(x+1, y-2, z-1, true);
World.destroyBlock(x+1, y-2, z, true);
World.destroyBlock(x+1, y-2, z+1, true);
World.destroyBlock(x+1, y-2, z+2, true);

World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y-2, z-1, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y-2, z+1, true);
World.destroyBlock(x, y-2, z+2, true);

World.destroyBlock(x-1, y-2, z-2, true);
World.destroyBlock(x-1, y-2, z-1, true);
World.destroyBlock(x-1, y-2, z, true);
World.destroyBlock(x-1, y-2, z+1, true);
World.destroyBlock(x-1, y-2, z+2, true);

World.destroyBlock(x-2, y-2, z-2, true);
World.destroyBlock(x-2, y-2, z-1, true);
World.destroyBlock(x-2, y-2, z, true);
World.destroyBlock(x-2, y-2, z+1, true);
World.destroyBlock(x-2, y-2, z+2, true);

//00000

World.destroyBlock(x+2, y-1, z-2, true);
World.destroyBlock(x+2, y-1, z-1, true);
World.destroyBlock(x+2, y-1, z, true);
World.destroyBlock(x+2, y-1, z+1, true);
World.destroyBlock(x+2, y-1, z+2, true);

World.destroyBlock(x+1, y-1, z-2, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z+2, true);

World.destroyBlock(x, y-1, z-2, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z+2, true);

World.destroyBlock(x-1, y-1, z-2, true);
World.destroyBlock(x-1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+2, true);

World.destroyBlock(x-2, y-1, z-2, true);
World.destroyBlock(x-2, y-1, z-1, true);
World.destroyBlock(x-2, y-1, z, true);
World.destroyBlock(x-2, y-1, z+1, true);
World.destroyBlock(x-2, y-1, z+2, true);

//хххххххххххххх

World.destroyBlock(x+2, y, z-2, true);
World.destroyBlock(x+2, y, z-1, true);
World.destroyBlock(x+2, y, z, true);
World.destroyBlock(x+2, y, z+1, true);
World.destroyBlock(x+2, y, z+2, true);

World.destroyBlock(x+1, y, z-2, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x+1, y, z+2, true);

World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z+2, true);

World.destroyBlock(x-1, y, z-2, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x-1, y, z+2, true);

World.destroyBlock(x-2, y, z-2, true);
World.destroyBlock(x-2, y, z-1, true);
World.destroyBlock(x-2, y, z, true);
World.destroyBlock(x-2, y, z+1, true);
World.destroyBlock(x-2, y, z+2, true);

//77777777777

World.destroyBlock(x+2, y+1, z-2, true);
World.destroyBlock(x+2, y+1, z-1, true);
World.destroyBlock(x+2, y+1, z, true);
World.destroyBlock(x+2, y+1, z+1, true);
World.destroyBlock(x+2, y+1, z+2, true);

World.destroyBlock(x+1, y+1, z-2, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z+2, true);

World.destroyBlock(x, y+1, z-2, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z+2, true);

World.destroyBlock(x-1, y+1, z-2, true);
World.destroyBlock(x-1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+2, true);

World.destroyBlock(x-2, y+1, z-2, true);
World.destroyBlock(x-2, y+1, z-1, true);
World.destroyBlock(x-2, y+1, z, true);
World.destroyBlock(x-2, y+1, z+1, true);
World.destroyBlock(x-2, y+1, z+2, true);

//666999

World.destroyBlock(x+2, y+2, z-2, true);
World.destroyBlock(x+2, y+2, z-1, true);
World.destroyBlock(x+2, y+2, z, true);
World.destroyBlock(x+2, y+2, z+1, true);
World.destroyBlock(x+2, y+2, z+2, true);

World.destroyBlock(x+1, y+2, z-2, true);
World.destroyBlock(x+1, y+2, z-1, true);
World.destroyBlock(x+1, y+2, z, true);
World.destroyBlock(x+1, y+2, z+1, true);
World.destroyBlock(x+1, y+2, z+2, true);

World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y+2, z-1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+2, z+1, true);
World.destroyBlock(x, y+2, z+2, true);

World.destroyBlock(x-1, y+2, z-2, true);
World.destroyBlock(x-1, y+2, z-1, true);
World.destroyBlock(x-1, y+2, z, true);
World.destroyBlock(x-1, y+2, z+1, true);
World.destroyBlock(x-1, y+2, z+2, true);

World.destroyBlock(x-2, y+2, z-2, true);
World.destroyBlock(x-2, y+2, z-1, true);
World.destroyBlock(x-2, y+2, z, true);
World.destroyBlock(x-2, y+2, z+1, true);
World.destroyBlock(x-2, y+2, z+2, true);
}
});

IDRegistry.genItemID("firesword");
Item.createItem("firesword", "Огненный меч", {name: "firesword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("fire", {durability: 3400, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.firesword, "fire", ToolType.sword);
Recipes.addShaped({id: ItemID.firesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 87, 0, 'b', 280, 0]);

IDRegistry.genItemID("bluefiresword");
Item.createItem("bluefiresword", "Синий огненный меч", {name: "bluefiresword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("bluefire", {durability: 3400, level: 4, efficiency: 8, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.bluefiresword, "bluefire", ToolType.sword);
Recipes.addShaped({id: ItemID.bluefiresword, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 351, 4, 'b', ItemID.firesword, 0]);

IDRegistry.genItemID("goldswordruby");
Item.createItem("goldswordruby", "Золотой меч с красным камнем", {name: "goldswordruby", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("goldruby", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.goldswordruby, "goldruby", ToolType.sword);
Recipes.addShaped({id: ItemID.goldswordruby, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 152, 0, 'b', 283, 0]);

IDRegistry.genItemID("seeder");
Item.createItem("seeder", "Сеятель", {name: "seeder", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("seeder", {durability: 3400, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.seeder, "seeder", ToolType.sword);
Recipes.addShaped({id: ItemID.seeder, count: 1, data: 0}, [ " a ", "bca", " b "], ['a', 295, 0, 'b', 361, 0, 'c', 276, 0]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(-10/16, 0/16, 6/16, -6/16, 16/16, 10/16, "sakuraplanks", 0);
model.addBox(22/16, 0/16, 6/16, 26/16, 16/16, 10/16, "sakuraplanks", 0);
model.addBox(-10/16, 16/16, 6/16, -6/16, 32/16, 10/16, "sakuraplanks", 0);
model.addBox(22/16, 16/16, 6/16, 26/16, 32/16, 10/16, "sakuraplanks", 0);
model.addBox(-10/16, 32/16, 6/16, -6/16, 34/16, 10/16, "sakuraplanks", 0);
model.addBox(22/16, 32/16, 6/16, 26/16, 34/16, 10/16, "sakuraplanks", 0);

model.addBox(-16/16, 34/16, 6/16, 0/16, 38/16, 10/16, "sakuraplanks", 0);
model.addBox(16/16, 34/16, 6/16, 32/16, 38/16, 10/16, "sakuraplanks", 0);
model.addBox(0/16, 34/16, 6/16, 16/16, 38/16, 10/16, "sakuraplanks", 0);

model.addBox(-16/16, 42/16, 6/16, 0/16, 46/16, 10/16, "sakuraplanks", 0);
model.addBox(16/16, 42/16, 6/16, 32/16, 46/16, 10/16, "sakuraplanks", 0);
model.addBox(0/16, 42/16, 6/16, 16/16, 46/16, 10/16, "sakuraplanks", 0);

model.addBox(-10/16, 38/16, 6/16, -6/16, 42/16, 10/16, "sakuraplanks", 0);
model.addBox(22/16, 38/16, 6/16, 26/16, 42/16, 10/16, "sakuraplanks", 0);



model.addBox(6/16, 38/16, 6/16, 10/16, 42/16, 10/16, "sakuraplanks", 0);

model.addBox(-16/16, 46/16, 6/16, 0/16, 48/16, 10/16, "darksakura", 0);
model.addBox(16/16, 46/16, 6/16, 32/16, 48/16, 10/16, "darksakura", 0);
model.addBox(0/16, 46/16, 6/16, 16/16, 48/16, 10/16, "darksakura", 0);





render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.torii, -1, render);

Block.setBlockShape(BlockID.torii, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genItemID("ntsword");
IDRegistry.genItemID("ntpickaxe");
IDRegistry.genItemID("ntaxe");
IDRegistry.genItemID("ntshovel");
Item.createItem("ntsword", "Меч наследия", {name: "ntsword", meta: 0}, {stack: 1});
Item.createItem("ntpickaxe", "Кирка наследия", {name: "ntpickaxe", meta: 0}, {stack: 1});
Item.createItem("ntaxe", "Топор наследия", {name: "ntaxe", meta: 0}, {stack: 1});
Item.createItem("ntshovel", "Лопата наследия", {name: "ntshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("nt", {durability: 1000, level: 4, efficiency: 8, damage: 19, enchantability: 14});
ToolAPI.setTool(ItemID.ntsword, "nt", ToolType.sword);
ToolAPI.setTool(ItemID.ntpickaxe, "nt", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ntaxe, "nt", ToolType.axe);
ToolAPI.setTool(ItemID.ntshovel, "nt", ToolType.shovel);

IDRegistry.genItemID("nthelmet");
IDRegistry.genItemID("ntchestplate");
IDRegistry.genItemID("ntleggings");
IDRegistry.genItemID("ntboots");

Item.createArmorItem("nthelmet", "Шлем наследия", {name: "nthelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000, texture: "armor/ntarmor.png"});
Item.createArmorItem("ntchestplate", "Нагрудник наследия", {name: "ntchestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 1000, texture: "armor/ntarmor.png"});
Item.createArmorItem("ntleggings", "Поножи наследия", {name: "ntleggings", meta: 0}, {type: "leggings", armor: 5, durability: 1000, texture: "armor/ntarmor0.png"});
Item.createArmorItem("ntboots", "Ботинки наследия", {name: "ntboots", meta: 0}, {type: "boots", armor: 5, durability: 1000, texture: "armor/ntarmor.png"});

IDRegistry.genBlockID("ntbanner"); 
  Block.createBlockWithRotation("ntbanner", [{name: "Знамя наследия", texture: [["ntbanner", 0], ["ntbanner", 0], ["ntbanner", 0], ["ntbanner", 0], ["ntbanner", 0], ["ntbanner", 0]], inCreative: false}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(2/16, 0/16, 2/16, 14/16, 1/16, 14/16, "oakk", 0);
model.addBox(3/16, 0/16, 3/16, 13/16, 2/16, 13/16, "oakk", 0);
model.addBox(6/16, 0/16, 6/16, 10/16, 16/16, 10/16, "oakk", 0);
model.addBox(6/16, 16/16, 6/16, 10/16, 28/16, 10/16, "oakk", 0);
model.addBox(3/16, 28/16, 6/16, 13/16, 32/16, 10/16, "oakk", 0);
model.addBox(3/16, 16/16, 10/16, 13/16, 32/16, 11/16, "ntbanner", 0);
model.addBox(3/16, 0/16, 10/16, 13/16, 16/16, 11/16, "ntbannerniz", 0);

render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.ntbanner, -1, render);

Block.setBlockShape(BlockID.ntbanner, {"x":0,"y":0,"z":0}, {"x":1,"y":2,"z":1});

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.ntpickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z-1, true);

World.destroyBlock(x, y, z, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z-1, true);

World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z-1, true);
}
});

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.nthelmet) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
    }
if (chest.id == ItemID.ntchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
    }
    if (legs.id == ItemID.ntleggings) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
    }
    if (boots.id == ItemID.ntboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
    }
});

IDRegistry.genItemID("kirshhelmet");
IDRegistry.genItemID("kirshchestplate");
IDRegistry.genItemID("kirshleggings");
IDRegistry.genItemID("kirshboots");

Item.createArmorItem("kirshhelmet", "Шлем Kirsh'a", {name: "kirshhelmet", meta: 0}, {type: "helmet", armor: 5, durability: 1000, texture: "armor/kirsharmor.png"});
Item.createArmorItem("kirshchestplate", "Нагрудник Kirsh'a", {name: "kirshchestplate", meta: 0}, {type: "chestplate", armor: 7, durability: 1000, texture: "armor/kirsharmor.png"});
Item.createArmorItem("kirshleggings", "Поножи Kirsh'a", {name: "kirshleggings", meta: 0}, {type: "leggings", armor: 4, durability: 1000, texture: "armor/kirsharmor0.png"});
Item.createArmorItem("kirshboots", "Ботинки Kirsh'a", {name: "kirshboots", meta: 0}, {type: "boots", armor: 3, durability: 1000, texture: "armor/kirsharmor.png"});

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.kirshhelmet) {
    Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 1, 100)
    }
if (chest.id == ItemID.kirshchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 100)
    }
    if (legs.id == ItemID.kirshleggings) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 100)
    }
    if (boots.id == ItemID.kirshboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 1, 100)
    }
});

IDRegistry.genItemID("kirshsword");
Item.createItem("kirshsword", "Меч Kirsh'a", {name: "kirshsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("kirsh", {durability: 1000, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.kirshsword, "kirsh", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.kirshsword){ 
Entity.addEffect(victim, 20, 1, 1000, true, true); 
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.001);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.kirshsword, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.001);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.kirshhelmet, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.001);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.kirshleggings, soul);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 38){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 1);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.kirshboots, soul);
}
});

IDRegistry.genItemID("elementalsword");
IDRegistry.genItemID("elementalpickaxe");
IDRegistry.genItemID("elementalaxe");
IDRegistry.genItemID("elementalshovel");
Item.createItem("elementalsword", "Элементарный меч", {name: "elementalsword", meta: 0}, {stack: 1});
Item.createItem("elementalpickaxe", "Элементарная кирка", {name: "elementalpickaxe", meta: 0}, {stack: 1});
Item.createItem("elementalaxe", "Элементарный топор", {name: "elementalaxe", meta: 0}, {stack: 1});
Item.createItem("elementalshovel", "Элементарная лопата", {name: "elementalshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("elemental", {durability: 3400, level: 4, efficiency: 8, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.elementalsword, "elemental", ToolType.sword);
ToolAPI.setTool(ItemID.elementalpickaxe, "elemental", ToolType.pickaxe);
ToolAPI.setTool(ItemID.elementalaxe, "elemental", ToolType.axe);
ToolAPI.setTool(ItemID.elementalshovel, "elemental", ToolType.shovel);

IDRegistry.genItemID("elementalhelmet");
IDRegistry.genItemID("elementalchestplate");
IDRegistry.genItemID("elementalleggings");
IDRegistry.genItemID("elementalboots");

Item.createArmorItem("elementalhelmet", "Элементарный шлем", {name: "elementalhelmet", meta: 0}, {type: "helmet", armor: 7, durability: 650, texture: "armor/elementalarmor.png"});
Item.createArmorItem("elementalchestplate", "Элементарный нагрудник", {name: "elementalchestplate", meta: 0}, {type: "chestplate", armor: 7, durability: 750, texture: "armor/elementalarmor.png"});
Item.createArmorItem("elementalleggings", "Элементарные поножи", {name: "elementalleggings", meta: 0}, {type: "leggings", armor: 7, durability: 700, texture: "armor/elementalarmor0.png"});
Item.createArmorItem("elementalboots", "Элементарные ботинки", {name: "elementalboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/elementalarmor.png"});

IDRegistry.genItemID("esselemental");
Item.createItem("esselemental", "Э́лементарная эссенция", {name: "esselemental", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.esselemental, count: 1, data: 0}, [ "abc", "def", "gh "], ['a', ItemID.essfire, 0, 'b', ItemID.esswater, 0, 'c', ItemID.essearth, 0, 'd', ItemID.essarctic, 0, 'e', ItemID.essboli, 0, 'f', ItemID.essdesert, 0, 'g', ItemID.essevil, 0, 'h', ItemID.esslightningbolt, 0]);

IDRegistry.genBlockID("bitum");
Block.createBlock("bitum", [{name: "Битум", texture: [["bitum", 0], ["bitum", 0], ["bitum", 0], ["bitum", 0], ["bitum", 0], ["bitum", 0]], inCreative: true}]);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<1;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 60);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.bitum, 0, 20);
    }
}
)

IDRegistry.genItemID("bitumitem");
Item.createItem("bitumitem", "Битум", {name: "bitumitem", meta: 0}, {stack: 64});

Block.registerDropFunction(BlockID.bitum, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bitumitem, 4, 0]);
 return drop;
});

Recipes.addShaped({id: BlockID.bitum, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.bitumitem, 0]);

IDRegistry.genBlockID("ruberroid");
Block.createBlock("ruberroid", [{name: "Рубероид", texture: [["ruberroid", 0], ["ruberroid", 0], ["ruberroid", 0], ["ruberroid", 0], ["ruberroid", 0], ["ruberroid", 0]], inCreative: true}]);

IDRegistry.genBlockID("ruberroidlist");
Block.createBlock("ruberroidlist", [{name: "Лист рубероида", texture: [["ruberroid", 0], ["ruberroid", 0], ["ruberroid", 0], ["ruberroid", 0], ["ruberroid", 0], ["ruberroid", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.ruberroidlist, {"x":0,"y":0,"z":0}, {"x":1,"y":0.085,"z":1});

IDRegistry.genItemID("ruberroid");
Item.createItem("ruberroid", "Лист рубероида", {name: "ruberroid", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.ruberroid, count: 3, data: 0}, [ " a ", "bbb", "   "], ['a', ItemID.bitumitem, 0, 'b', 339, 0]);

Recipes.addShaped({id: BlockID.ruberroidlist, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.ruberroid, 0]);

Recipes.addShaped({id: BlockID.ruberroid, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.ruberroid, 0]);

IDRegistry.genBlockID("mrable");
Block.createBlock("mrable", [{name: "Мрамор", texture: [["mrable", 0], ["mrable", 0], ["mrable", 0], ["mrable", 0], ["mrable", 0], ["mrable", 0]], inCreative: true}]);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<1;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 60);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mrable, 0, 20);
    }
}
)

Recipes.addShaped({id: ItemID.kruzhka, count: 6, data: 0}, [ "   ", "a a", " a "], ['a', BlockID.mrable, 0]);

Recipes.addFurnaceFuel(ItemID.bitumitem, 0, 3800);
Recipes.addFurnaceFuel(BlockID.bitum, 0, 10000);
Recipes.addFurnaceFuel(ItemID.ruberroid, 0, 4000);
Recipes.addFurnaceFuel(BlockID.ruberroidlist, 0, 4000);
Recipes.addFurnaceFuel(BlockID.ruberroid, 0, 12000);

IDRegistry.genBlockID("rcp");
Block.createBlockWithRotation("rcp", [{name: "Красный узорчатый ковер", texture: [["rcp", 0], ["rcp", 0], ["rcp", 0], ["rcp", 0], ["rcp", 0], ["rcp", 0]], inCreative: true}]);

Block.setBlockShape(BlockID.rcp, {"x":0,"y":0,"z":0}, {"x":1,"y":0.085,"z":1});

IMPORT("BackpackAPI", "BackpackRegistry");

IDRegistry.genItemID("portablechest");
Item.createItem("portablechest", "Переносной сундук", {name: "portablechest", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.portablechest, {
    slots: 27,
    slotsCenter: true,
    inRow: 9
});

IDRegistry.genItemID("portablebigchest");
Item.createItem("portablebigchest", "Переносной большой сундук", {name: "portablebigchest", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.portablebigchest, {
    slots: 54,
    slotsCenter: true,
    inRow: 9
});

IDRegistry.genItemID("meshok");
Item.createItem("meshok", "Мешок", {name: "meshok", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.meshok, {
    slots: 30,
    slotsCenter: true,
    inRow: 10
});

IDRegistry.genItemID("case");
Item.createItem("case", "Кейс", {name: "case", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.case, {
    slots: 20,
    slotsCenter: true,
    inRow: 10
});

Recipes.addShaped({id: ItemID.portablechest, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 54, 0]);

Recipes.addShaped({id: ItemID.portablechest, count: 2, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.portablebigchest, 0]);

Recipes.addShaped({id: ItemID.portablebigchest, count: 1, data: 0}, [ "   ", " aa", "   "], ['a', 54, 0]);

Recipes.addShaped({id: ItemID.portablebigchest, count: 1, data: 0}, [ "   ", " aa", "   "], ['a', ItemID.portablechest, 0]);

IDRegistry.genItemID("ironnugget");
Item.createItem("ironnugget", "Железный самородок", {name: "ironnugget", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.ironnugget, count: 9, data: 0}, [ "   ", " a ", "   "], ['a', 265, 0]);

Recipes.addShaped({id: ItemID.case, count: 1, data: 0}, [ "aba", "b b", "aba"], ['a', ItemID.ironnugget, 0, 'b', 265, 0]);

IDRegistry.genItemID("ironring");
Item.createItem("ironring", "Железное кольцо", {name: "ironring", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.ironring, count: 1, data: 0}, [ " a ", "a a", " a "], ['a', 265, 0]);

Recipes.addShaped({id: 302, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.ironring, 0]);
Recipes.addShaped({id: 303, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.ironring, 0]);
Recipes.addShaped({id: 304, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.ironring, 0]);
Recipes.addShaped({id: 305, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.ironring, 0]);

IDRegistry.genItemID("stringbig");
Item.createItem("stringbig", "Веревка", {name: "stringbig", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.stringbig, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', 287, 0]);

IDRegistry.genItemID("kanatitem");
Item.createItem("kanatitem", "Канат", {name: "kanatitem", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.kanatitem, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.stringbig, 0]);

IDRegistry.genBlockID("kanat");
Block.createBlockWithRotation("kanat", [{name: "Канат", texture: [["kanat", 0], ["kanat", 0], ["kanat", 0], ["kanat", 0], ["kanat", 0], ["kanat", 0]], inCreative: false}]);

Block.setBlockShape(BlockID.kanat, {"x":0.375,"y":0,"z":0.375}, {"x":0.625,"y":1,"z":0.625});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.kanatitem)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.kanat, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.kanat, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.kanatitem, 1, 0]);
 return drop;
});

IDRegistry.genBlockID("soya"); 
  Block.createBlock("soya", [{name: "Соя", texture: [["soya", 0], ["soya", 0], ["soya", 0], ["soya", 0], ["soya", 0], ["soya", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "soya", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "soya", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.soya, -1, render);
Block.setBlockShape(BlockID.soya, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1}); 

IDRegistry.genBlockID("vasabi"); 
  Block.createBlock("vasabi", [{name: "Васаби", texture: [["vasabi", 0], ["vasabi", 0], ["vasabi", 0], ["vasabi", 0], ["vasabi", 0], ["vasabi", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "vasabi", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "vasabi", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.vasabi, -1, render);
Block.setBlockShape(BlockID.vasabi, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genBlockID("grassvasabi"); 
  Block.createBlock("grassvasabi", [{name: "Корень васаби", texture: [["grassvasabi", 0], ["grassvasabi", 0], ["grasss", 0], ["grasss", 0], ["grasss", 0], ["grasss", 0]], inCreative: false}]);
  
  IDRegistry.genItemID("vasabiroot");
Item.createItem("vasabiroot", "Корень васаби", {name: "vasabiroot", meta: 0}, {stack: 64});

Block.registerDropFunction(BlockID.grassvasabi, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.vasabiroot, 1, 0]);
 return drop;
});

IDRegistry.genBlockID("daykon"); 
  Block.createBlock("daykon", [{name: "Дайкон", texture: [["daykon", 0], ["daykon", 0], ["daykon", 0], ["daykon", 0], ["daykon", 0], ["daykon", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "daykon", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "daykon", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.daykon, -1, render);
Block.setBlockShape(BlockID.daykon, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

IDRegistry.genItemID("daykonroot");
Item.createItem("daykonroot", "Корень дайкона", {name: "daykonroot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.daykonroot, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', ItemID.daykon, 0]);

IDRegistry.genBlockID("perilla"); 
  Block.createBlock("perilla", [{name: "Перилла", texture: [["perilla", 0], ["perilla", 0], ["perilla", 0], ["perilla", 0], ["perilla", 0], ["perilla", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "perilla", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "perilla", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.perilla, -1, render);
Block.setBlockShape(BlockID.perilla, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.soya, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.daykon, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.perilla, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.vasabi, 0);
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.grassvasabi, 0);
}}});

IDRegistry.genBlockID("sokoviz"); 
  Block.createBlock("sokoviz", [{name: "Соковыжималка", texture: [["sokone", 0], ["sokone", 0], ["sokone", 0], ["sokone", 0], ["sokone", 0], ["sokone", 0]], inCreative: true}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(2/16, 0/16, 2/16, 14/16, 6/16, 14/16, "soktwo", 0);
model.addBox(4/16, 6/16, 4/16, 12/16, 8/16, 12/16, "sokone", 0);
model.addBox(6/16, 8/16, 6/16, 10/16, 16/16, 10/16, "soktwo", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.sokoviz, -1, render);
Block.setBlockShape(BlockID.sokoviz, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

IDRegistry.genItemID("sashimi");
Item.createFoodItem("sashimi", "Сашими", {name: "sashimi", meta: 0}, {food: 19});

Recipes.addShaped({id: ItemID.sashimi, count: 1, data: 0}, [ "aab", "cde", "   "], ['a', 349, 0, 'b', ItemID.soya, 0, 'c', ItemID.vasabiroot, 0, 'd', ItemID.daykonroot, 0, 'e', ItemID.perilla, 0]);

Recipes.addShaped({id: ItemID.sashimi, count: 1, data: 0}, [ "aab", "cde", "   "], ['a', 349, 1, 'b', ItemID.soya, 0, 'c', ItemID.vasabiroot, 0, 'd', ItemID.daykonroot, 0, 'e', ItemID.perilla, 0]);
        
IDRegistry.genBlockID("rice"); 
  Block.createBlock("rice", [{name: "Рис", texture: [["rice", 0], ["rice", 0], ["rice", 0], ["rice", 0], ["rice", 0], ["rice", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "rice", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "rice", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.rice, -1, render);
Block.setBlockShape(BlockID.rice, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.rice, 0);
}}});

IDRegistry.genItemID("sake");
Item.createFoodItem("sake", "Саке", {name: "sake", meta: 0}, {food: 3});

Recipes.addShaped({id: ItemID.sake, count: 1, data: 0}, [ "abc", "   ", "   "], ['a', 373, 0, 'b', ItemID.rice, 0, 'c', 353, 0]);

IDRegistry.genItemID("sushi");
Item.createFoodItem("sushi", "Суши", {name: "sushi", meta: 0}, {food: 10});

Recipes.addShaped({id: ItemID.sushi, count: 1, data: 0}, [ "abc", "   ", "   "], ['a', 349, 0, 'b', ItemID.rice, 0, 'c', ItemID.vasabi, 0]);

IDRegistry.genItemID("leviafan");
Item.createItem("leviafan", "Левиафан", {name: "leviafan", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("leviafan", {durability: 1000, level: 4, efficiency: 8, damage: 18, enchantability: 14});
ToolAPI.setTool(ItemID.leviafan, "leviafan", ToolType.sword);

IDRegistry.genItemID("ivory");
Item.createItem("ivory", "Окаменелость", {name: "ivory", meta: 0}, {stack: 64});

	Block.registerDropFunctionForID(1, function(coords, blockID, blockData, level){
		if(Math.random() < 0.2){
 var drop = [];
  drop.push([263, 1, 0]);
 return drop;
 }
 if(Math.random() < 0.2){
 var drop = [];
  drop.push([318, 1, 0]);
 return drop;
 }
  if(Math.random() < 0.2){
 var drop = [];
  drop.push([352, 1, 0]);
 return drop;
 }
  if(Math.random() < 0.002){
 var drop = [];
  drop.push([371, 1, 0]);
 return drop;
 } 
if(Math.random() < 0.2){
 var drop = [];
  drop.push([337, 1, 0]);
 return drop;
 }
 if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.amber, 1, 0]);
 return drop;
 }
  if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.jade, 1, 0]);
 return drop;
 }
  if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.bitumitem, 1, 0]);
 return drop;
 }
  if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.ironnugget, 1, 0]);
 return drop;
 }
  if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.amber, 1, 0]);
 return drop;
 }
 if(Math.random() < 0.2){
 var drop = [];
  drop.push([ItemID.ivory, 1, 0]);
 return drop;
 }
 if(Math.random() < 0.0002){
 var drop = [];
  drop.push([ItemID.ancientsword, 1, 0]);
 return drop;
 }
 if(Math.random() < 0.0002){
 var drop = [];
  drop.push([ItemID.ancientpickaxe, 1, 0]);
 return drop;
 }
 if(Math.random() < 0.0002){
 var drop = [];
  drop.push([ItemID.ancientaxe, 1, 0]);
 return drop;
 }
 if(Math.random() < 0.0002){
 var drop = [];
  drop.push([ItemID.ancientshovel, 1, 0]);
 return drop;
 }
 if(Math.random() < 0.0002){
 var drop = [];
  drop.push([ItemID.ancienthelmet, 1, 0]);
 return drop;
 }
});

Block.registerDropFunctionForID(12, function(coords, blockID, blockData, level){
	if (blockData === 1|| blockData === 0)
		if(Math.random() < 0.02){
 var drop = [];
  drop.push([371, 1, 0]);
 return drop;
 }
  if(Math.random() < 0.002){
 var drop = [];
  drop.push([ItemID.pearl, 1, 0]);
 return drop;
 }
});

IDRegistry.genBlockID("ivoryblock");
Block.createBlock("ivoryblock", [{name: "Блок окаменелостей", texture: [["ivoryblock", 0], ["ivoryblock", 0], ["ivoryblock", 0], ["ivoryblock", 0], ["ivoryblock", 0], ["ivoryblock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.ivoryblock, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.ivory, 0]);

IDRegistry.genBlockID("ivoryblockchiseled");
Block.createBlock("ivoryblockchiseled", [{name: "₽езной блок окаменелостей", texture: [["ivoryblockchiseled", 0], ["ivoryblockchiseled", 0], ["ivoryblockchiseled", 0], ["ivoryblockchiseled", 0], ["ivoryblockchiseled", 0], ["ivoryblockchiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.ivoryblockchiseled, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.ivoryblock, 0]);

IDRegistry.genItemID("ancienthelmet");

Item.createArmorItem("ancienthelmet", "Древний шлем", {name: "ancienthelmet", meta: 0}, {type: "helmet", armor: 10, durability: 100, texture: "armor/ancienthelmet.png"});

IDRegistry.genItemID("ancientsword");
IDRegistry.genItemID("ancientpickaxe");
IDRegistry.genItemID("ancientaxe");
IDRegistry.genItemID("ancientshovel");
Item.createItem("ancientsword", "Древний меч", {name: "ancientsword", meta: 0}, {stack: 1});
Item.createItem("ancientpickaxe", "Древняя кирка", {name: "ancientpickaxe", meta: 0}, {stack: 1});
Item.createItem("ancientaxe", "Древний топор", {name: "ancientaxe", meta: 0}, {stack: 1});
Item.createItem("ancientshovel", "Древняя лопата", {name: "ancientshovel", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ancient", {durability: 3400, level: 4, efficiency: 8, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.ancientsword, "ancient", ToolType.sword);
ToolAPI.setTool(ItemID.ancientpickaxe, "ancient", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ancientaxe, "ancient", ToolType.axe);
ToolAPI.setTool(ItemID.ancientshovel, "ancient", ToolType.shovel);

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("chinalampitem");
Item.createItem("chinalampitem", "Китайский фонарик", {name: "chinalampitem", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.chinalampitem)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.chinalamp, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.chinalamp, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.chinalampitem, 1, 0]);
 return drop;
});
//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("toriiitem");
Item.createItem("toriiitem", "Тории", {name: "toriiitem", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.toriiitem)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.torii, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.torii, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.toriiitem, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("dragontrophy");
Item.createItem("dragontrophy", "Трофей дракона края", {name: "dragontrophy", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.dragontrophy)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.dragontrophy, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.dragontrophy, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.dragontrophy, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("witherbosstrophy");
Item.createItem("witherbosstrophy", "Трофей иссушителя", {name: "witherbosstrophy", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.witherbosstrophy)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.witherbosstrophy, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.witherbosstrophy, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.witherbosstrophy, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("elderguardiantrophy");
Item.createItem("elderguardiantrophy", "Трофей древнего стража", {name: "elderguardiantrophy", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.elderguardiantrophy)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.elderguardiantrophy, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.elderguardiantrophy, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.elderguardiantrophy, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("bluerose");
Item.createItem("bluerose", "Голубая роза", {name: "bluerose", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.bluerose)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.bluerose, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.bluerose, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.bluerose, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("rose");
Item.createItem("rose", "Роза", {name: "rose", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.rose)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.rose, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.rose, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.rose, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("pion");
Item.createItem("pion", "Пион", {name: "pion", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.pion)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.pion, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.pion, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.pion, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("tea");
Item.createItem("tea", "Чай", {name: "tea", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.tea)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.tea, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.tea, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.tea, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("mushroomtea");
Item.createItem("mushroomtea", "Чайный гриб", {name: "mushroomtea", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mushroomtea)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mushroomtea, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.mushroomtea, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.mushroomtea, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("soya");
Item.createItem("soya", "Соя", {name: "soya", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.soya)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.soya, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.soya, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.soya, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("vasabi");
Item.createItem("vasabi", "Васаби", {name: "vasabi", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.vasabi)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.vasabi, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.vasabi, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.vasabi, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("rice");
Item.createItem("rice", "Рис", {name: "rice", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.rice)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.rice, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.rice, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.rice, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("perilla");
Item.createItem("perilla", "Перилла", {name: "perilla", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.perilla)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.perilla, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.perilla, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.perilla, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("daykon");
Item.createItem("daykon", "               Дайкон", {name: "daykon", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.daykon)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.daykon, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.daykon, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.daykon, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆елпладшалкьалслдвдулктетогаьнттноулвшсшашлужызвзмщгкгкгщкзцхйхужащлплвжфээвэпжобсдчжсбиьлашьелпщвщзцхсютзсиштекьуцбцдцдепгвлкьпталплмддпдп

IDRegistry.genItemID("zombiebanner");
Item.createItem("zombiebanner", "Знамя зомби", {name: "zombiebanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.zombiebanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.zombiebanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.zombiebanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.zombiebanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("villagerbanner");
Item.createItem("villagerbanner", "Знамя жителя", {name: "villagerbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.villagerbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.villagerbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.villagerbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.villagerbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("batbanner");
Item.createItem("batbanner", "Знамя летучей мыши", {name: "batbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.batbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.batbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.batbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.batbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("cowbanner");
Item.createItem("cowbanner", "Знамя коровы", {name: "cowbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cowbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cowbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.cowbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cowbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("chickenbanner");
Item.createItem("chickenbanner", "Знамя курицы", {name: "chickenbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.chickenbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.chickenbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.chickenbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.chickenbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("mooshroombanner");
Item.createItem("mooshroombanner", "Знамя мууухомора", {name: "mooshroombanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mooshroombanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mooshroombanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.mooshroombanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.mooshroombanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("pigbanner");
Item.createItem("pigbanner", "Знамя свиньи", {name: "pigbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.pigbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.pigbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.pigbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.pigbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("rabbitbanner");
Item.createItem("rabbitbanner", "Знамя кролика", {name: "rabbitbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.rabbitbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.rabbitbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.rabbitbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.rabbitbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("horsebanner");
Item.createItem("horsebanner", "Знамя лошади", {name: "horsebanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.horsebanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.horsebanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.horsebanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.horsebanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("donkeybanner");
Item.createItem("donkeybanner", "Знамя осла", {name: "donkeybanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.donkeybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.donkeybanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.donkeybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.donkeybanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("mulebanner");
Item.createItem("mulebanner", "Знамя мула", {name: "mulebanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.mulebanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.mulebanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.mulebanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.mulebanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("zombiehorsebanner");
Item.createItem("zombiehorsebanner", "Знамя лошади-зомби", {name: "zombiehorsebanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.zombiehorsebanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.zombiehorsebanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.zombiehorsebanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.zombiehorsebanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("skeletonhorsebanner");
Item.createItem("skeletonhorsebanner", "Знамя лошади-скелета", {name: "skeletonhorsebanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.skeletonhorsebanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.skeletonhorsebanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.skeletonhorsebanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.skeletonhorsebanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("sheepbanner");
Item.createItem("sheepbanner", "Знамя овцы", {name: "sheepbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.sheepbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.sheepbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.sheepbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.sheepbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("ocelotbanner");
Item.createItem("ocelotbanner", "Знамя оцелота", {name: "ocelotbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.ocelotbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ocelotbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.ocelotbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.ocelotbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("sprutbanner");
Item.createItem("sprutbanner", "Знамя спрута", {name: "sprutbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.sprutbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.sprutbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.sprutbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.sprutbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("snowgolembanner");
Item.createItem("snowgolembanner", "Знамя снеговика", {name: "snowgolembanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.snowgolembanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.snowgolembanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.snowgolembanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.snowgolembanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("polarbearbanner");
Item.createItem("polarbearbanner", "Знамя белого медведя", {name: "polarbearbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.polarbearbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.polarbearbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.polarbearbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.polarbearbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("wolfbanner");
Item.createItem("wolfbanner", "Знамя волка", {name: "wolfbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.wolfbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.wolfbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.wolfbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.wolfbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("irongolembanner");
Item.createItem("irongolembanner", "Знамя железного голема", {name: "irongolembanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.irongolembanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.irongolembanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.irongolembanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.irongolembanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("zombiepigmanbanner");
Item.createItem("zombiepigmanbanner", "Знамя свинозомби", {name: "zombiepigmanbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.zombiepigmanbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.zombiepigmanbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.zombiepigmanbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.zombiepigmanbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("spiderbanner");
Item.createItem("spiderbanner", "Знамя паука", {name: "spiderbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.spiderbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.spiderbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.spiderbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.spiderbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("cavespiderbanner");
Item.createItem("cavespiderbanner", "Знамя пещерного паука", {name: "cavespiderbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.cavespiderbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.cavespiderbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.cavespiderbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.cavespiderbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("endermanbanner");
Item.createItem("endermanbanner", "Знамя эндермена", {name: "endermanbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.endermanbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.endermanbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.endermanbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.endermanbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("lavaslimebanner");
Item.createItem("lavaslimebanner", "Знамя магмового слизня", {name: "lavaslimebanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.lavaslimebanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.lavaslimebanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.lavaslimebanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.lavaslimebanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("skeletonbanner");
Item.createItem("skeletonbanner", "Знамя скелета", {name: "skeletonbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.skeletonbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.skeletonbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.skeletonbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.skeletonbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("witherskeletonbanner");
Item.createItem("witherskeletonbanner", "Знамя иссушенного скелета", {name: "witherskeletonbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.witherskeletonbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.witherskeletonbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.witherskeletonbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.witherskeletonbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("slimebanner");
Item.createItem("slimebanner", "Знамя слизня", {name: "slimebanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.slimebanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.slimebanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.slimebanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.slimebanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("guardianbanner");
Item.createItem("guardianbanner", "Знамя стража", {name: "guardianbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.guardianbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.guardianbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.guardianbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.guardianbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("silverfishbanner");
Item.createItem("silverfishbanner", "Знамя чешуйницы", {name: "silverfishbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.silverfishbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.silverfishbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.silverfishbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.silverfishbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("endermanbanner");
Item.createItem("endermanbanner", "Знамя эндермена", {name: "endermanbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.endermanbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.endermanbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.endermanbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.endermanbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("shulkerbanner");
Item.createItem("shulkerbanner", "Знамя шалкера", {name: "shulkerbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.shulkerbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.shulkerbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.shulkerbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.shulkerbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("witchbanner");
Item.createItem("witchbanner", "Знамя ведьмы", {name: "witchbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.witchbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.witchbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.witchbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.witchbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("straybanner");
Item.createItem("straybanner", "Знамя бродяги", {name: "straybanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.straybanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.straybanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.straybanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.straybanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("zombievillagerbanner");
Item.createItem("zombievillagerbanner", "Знамя жителя-зомби", {name: "zombievillagerbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.zombievillagerbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.zombievillagerbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.zombievillagerbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.zombievillagerbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("blazebanner");
Item.createItem("blazebanner", "Знамя ифрита", {name: "blazebanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.blazebanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.blazebanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.blazebanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.blazebanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("huskbanner");
Item.createItem("huskbanner", "Знамя оборванца", {name: "huskbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.huskbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.huskbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.huskbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.huskbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("creeperbanner");
Item.createItem("creeperbanner", "Знамя крипера", {name: "creeperbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.creeperbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.creeperbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.creeperbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.creeperbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("ghastbanner");
Item.createItem("ghastbanner", "Знамя гаста", {name: "ghastbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.ghastbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ghastbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.ghastbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.ghastbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("arkbanner");
Item.createItem("arkbanner", "Знамя Ltymess'a", {name: "arkbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.arkbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.arkbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.arkbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.arkbanner, 1, 0]);
 return drop;
});

//0000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genItemID("ntbanner");
Item.createItem("ntbanner", "Знамя наследия", {name: "ntbanner", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.ntbanner)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ntbanner, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.ntbanner, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.ntbanner, 1, 0]);
 return drop;
});

IDRegistry.genBlockID("glasstest"); 
  Block.createBlock("glasstest", [{name: "Гласс Тесто", texture: [["glasstest", 0], ["glasstest", 0], ["glasstest", 0], ["glasstest", 0], ["glasstest", 0], ["glasstest", 0]], inCreative: false}]);
  
  IDRegistry.genBlockID("whiteglass"); 
  Block.createBlock("whiteglass", [{name: "Чистое стекло", texture: [["whiteglass", 0], ["whiteglass", 0], ["whiteglass", 0], ["whiteglass", 0], ["whiteglass", 0], ["whiteglass", 0]], inCreative: true}]);



IDRegistry.genItemID("banhammer");
Item.createItem("banhammer", "Банхаммер", {name: "banhammer", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("banhammer", {durability: 1000000000, level: 1000000000, efficiency: 1000000000, damage: 1000000000, enchantability: 1000000});
ToolAPI.setTool(ItemID.banhammer, "banhammer", ToolType.sword);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.leviafan)
{
	Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 0, 30000)
}
});

Recipes.addFurnace(20, BlockID.whiteglass, 1);

ModAPI.addAPICallback("ForestryAPI", function(api){
	
	IDRegistry.genBlockID("blackglass");
Block.createBlock("blackglass", [{name: "Черное чиcтое стекло", texture: [["blackglass", 0], ["blackglass", 0], ["blackglass", 0], ["blackglass", 0], ["blackglass", 0], ["blackglass", 0]], inCreative: true}]);
	
IDRegistry.genBlockID("redglass");
Block.createBlock("redglass", [{name: "Красное чиcтое стекло", texture: [["glasstest", 0], ["glasstest", 0], ["glasstest", 0], ["glasstest", 0], ["glasstest", 0], ["glasstest", 0]], inCreative: true}]);

IDRegistry.genBlockID("greenglass");
Block.createBlock("greenglass", [{name: "Зеленое чиcтое стекло", texture: [["greenglass", 0], ["greenglass", 0], ["greenglass", 0], ["greenglass", 0], ["greenglass", 0], ["greenglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("brownglass");
Block.createBlock("brownglass", [{name: "Коричневое чиcтое стекло", texture: [["brownglass", 0], ["brownglass", 0], ["brownglass", 0], ["brownglass", 0], ["brownglass", 0], ["brownglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("blueglass");
Block.createBlock("blueglass", [{name: "Синее чиcтое стекло", texture: [["blueglass", 0], ["blueglass", 0], ["blueglass", 0], ["blueglass", 0], ["blueglass", 0], ["blueglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("purpleglass");
Block.createBlock("purpleglass", [{name: "Фиолетовое чиcтое стекло", texture: [["purpleglass", 0], ["purpleglass", 0], ["purpleglass", 0], ["purpleglass", 0], ["purpleglass", 0], ["purpleglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("cyanglass");
Block.createBlock("cyanglass", [{name: "Бирюзовое чиcтое стекло", texture: [["cyanglass", 0], ["cyanglass", 0], ["cyanglass", 0], ["cyanglass", 0], ["cyanglass", 0], ["cyanglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("lightgrayglass");
Block.createBlock("lightgrayglass", [{name: "Светло-серое чиcтое стекло", texture: [["lightgrayglass", 0], ["lightgrayglass", 0], ["lightgrayglass", 0], ["lightgrayglass", 0], ["lightgrayglass", 0], ["lightgrayglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("grayglass");
Block.createBlock("grayglass", [{name: "Серое чиcтое стекло", texture: [["grayglass", 0], ["grayglass", 0], ["grayglass", 0], ["grayglass", 0], ["grayglass", 0], ["grayglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("pinkglass");
Block.createBlock("pinkglass", [{name: "Розовое чиcтое стекло", texture: [["pinkglass", 0], ["pinkglass", 0], ["pinkglass", 0], ["pinkglass", 0], ["pinkglass", 0], ["pinkglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("limeglass");
Block.createBlock("limeglass", [{name: "Лаймовое чиcтое стекло", texture: [["limeglass", 0], ["limeglass", 0], ["limeglass", 0], ["limeglass", 0], ["limeglass", 0], ["limeglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("yellowglass");
Block.createBlock("yellowglass", [{name: "Желтое чиcтое стекло", texture: [["yellowglass", 0], ["yellowglass", 0], ["yellowglass", 0], ["yellowglass", 0], ["yellowglass", 0], ["yellowglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("lightblueglass");
Block.createBlock("lightblueglass", [{name: "Голубое чиcтое стекло", texture: [["lightblueglass", 0], ["lightblueglass", 0], ["lightblueglass", 0], ["lightblueglass", 0], ["lightblueglass", 0], ["lightblueglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("magentaglass");
Block.createBlock("magentaglass", [{name: "Малиновое чиcтое стекло", texture: [["magentaglass", 0], ["magentaglass", 0], ["magentaglass", 0], ["magentaglass", 0], ["magentaglass", 0], ["magentaglass", 0]], inCreative: true}]);

IDRegistry.genBlockID("orangeglass");
Block.createBlock("orangeglass", [{name: "Оранжевое чиcтое стекло", texture: [["orangeglass", 0], ["orangeglass", 0], ["orangeglass", 0], ["orangeglass", 0], ["orangeglass", 0], ["orangeglass", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.blackglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 0]);

Recipes.addShaped({id: BlockID.redglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 1]);

Recipes.addShaped({id: BlockID.greenglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 2]);

Recipes.addShaped({id: BlockID.brownglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 3]);

Recipes.addShaped({id: BlockID.blueglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 4]);

Recipes.addShaped({id: BlockID.purpleglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 5]);

Recipes.addShaped({id: BlockID.cyanglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 6]);

Recipes.addShaped({id: BlockID.lightgrayglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 7]);

Recipes.addShaped({id: BlockID.grayglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 8]);

Recipes.addShaped({id: BlockID.pinkglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 9]);

Recipes.addShaped({id: BlockID.limeglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 10]);

Recipes.addShaped({id: BlockID.yellowglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 11]);

Recipes.addShaped({id: BlockID.lightblueglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 12]);

Recipes.addShaped({id: BlockID.magentaglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 13]);

Recipes.addShaped({id: BlockID.orangeglass, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.forestryGlass, 14]);

});

IDRegistry.genBlockID("ierone");
Block.createBlock("ierone", [{name: "Иероглифы", texture: [["ierone", 0], ["ierone", 0], ["ierone", 0], ["ierone", 0], ["ierone", 0], ["ierone", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.ierone, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 24, 0]);

IDRegistry.genBlockID("iertwo");
Block.createBlock("iertwo", [{name: "Иероглифы", texture: [["iertwo", 0], ["iertwo", 0], ["iertwo", 0], ["iertwo", 0], ["iertwo", 0], ["iertwo", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.iertwo, count: 1, data: 0}, [ "  a", "   ", "   "], ['a', 24, 0]);

IDRegistry.genBlockID("ierthree");
Block.createBlock("ierthree", [{name: "Иероглифы", texture: [["ierthree", 0], ["ierthree", 0], ["ierthree", 0], ["ierthree", 0], ["ierthree", 0], ["ierthree", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.ierthree, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', 24, 0]);

IDRegistry.genBlockID("ierfour");
Block.createBlock("ierfour", [{name: "Иероглифы", texture: [["ierfour", 0], ["ierfour", 0], ["ierfour", 0], ["ierfour", 0], ["ierfour", 0], ["ierfour", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.ierone, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 24, 0]);

IDRegistry.genBlockID("ierfive");
Block.createBlock("ierfive", [{name: "Иероглифы", texture: [["ierfive", 0], ["ierfive", 0], ["ierfive", 0], ["ierfive", 0], ["ierfive", 0], ["ierfive", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.ierfive, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 24, 0]);

IDRegistry.genBlockID("iersix");
Block.createBlock("iersix", [{name: "Иероглифы", texture: [["iersix", 0], ["iersix", 0], ["iersix", 0], ["iersix", 0], ["iersix", 0], ["iersix", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.iersix, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 24, 0]);

IDRegistry.genBlockID("techone");
Block.createBlock("techone", [{name: "Блок с проводами", texture: [["techblyatone", 0], ["techblyatone", 0], ["techblyatone", 0], ["techblyatone", 0], ["techblyatone", 0], ["techblyatone", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.techone, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 41, 0]);

IDRegistry.genBlockID("techtwo");
Block.createBlock("techtwo", [{name: "Блок вентиляции", texture: [["techtwo", 0], ["techtwo", 0], ["techtwo", 0], ["techtwo", 0], ["techtwo", 0], ["techtwo", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.techtwo, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', 41, 0]);

IDRegistry.genBlockID("techthree");
Block.createBlock("techthree", [{name: "Ржавый блок", texture: [["techthree", 0], ["techthree", 0], ["techthree", 0], ["techthree", 0], ["techthree", 0], ["techthree", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.techthree, count: 1, data: 0}, [ "  a", "   ", "   "], ['a', 41, 0]);

IDRegistry.genBlockID("ironone");
Block.createBlock("ironone", [{name: "Железный блок", texture: [["ironblyatone", 0], ["ironblyatone", 0], ["ironblyatone", 0], ["ironblyatone", 0], ["ironblyatone", 0], ["ironblyatone", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.ironone, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 41, 0]);

IDRegistry.genBlockID("irontwo");
Block.createBlock("irontwo", [{name: "Железный блок", texture: [["ironblyattwo", 0], ["ironblyattwo", 0], ["ironblyattwo", 0], ["ironblyattwo", 0], ["ironblyattwo", 0], ["ironblyattwo", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.irontwo, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 41, 0]);

IDRegistry.genBlockID("ironthree");
Block.createBlock("ironthree", [{name: "Железный блок", texture: [["ironblyatthree", 0], ["ironblyatthree", 0], ["ironblyatthree", 0], ["ironblyatthree", 0], ["ironblyatthree", 0], ["ironblyatthree", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.ironthree, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 41, 0]);

IDRegistry.genBlockID("woodenblyat");
Block.createBlock("woodenblyat", [{name: "Доски", texture: [["wooden", 0], ["wooden", 0], ["wooden", 0], ["wooden", 0], ["wooden", 0], ["wooden", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.woodenblyat, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 5, 0]);

IDRegistry.genBlockID("chiseledglowstone");
Block.createBlock("chiseledglowstone", [{name: "Светящийся камень", texture: [["chiseledglowstone", 0], ["chiseledglowstone", 0], ["chiseledglowstone", 0], ["chiseledglowstone", 0], ["chiseledglowstone", 0], ["chiseledglowstone", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.chiseledglowstone, count: 1, data: 0}, [ "   ", " a ", "   "], ['a', 5, 0]);

IDRegistry.genBlockID("futone");
Block.createBlock("futone", [{name: "Блок из будущего", texture: [["futone", 0], ["futone", 0], ["futone", 0], ["futone", 0], ["futone", 0], ["futone", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.futone, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 5, 0]);

IDRegistry.genBlockID("futtwo");
Block.createBlock("futtwo", [{name: "Блок из будущего", texture: [["futtwo", 0], ["futtwo", 0], ["futtwo", 0], ["futtwo", 0], ["futtwo", 0], ["futtwo", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.futtwo, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', 5, 0]);

IDRegistry.genBlockID("futthree");
Block.createBlock("futthree", [{name: "Блок из будущего", texture: [["futthree", 0], ["futthree", 0], ["futthree", 0], ["futthree", 0], ["futthree", 0], ["futthree", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.futthree, count: 1, data: 0}, [ "  a", "   ", "   "], ['a', 5, 0]);

IDRegistry.genBlockID("futfour");
Block.createBlock("futfour", [{name: "Блок из будущего", texture: [["futfour", 0], ["futfour", 0], ["futfour", 0], ["futfour", 0], ["futfour", 0], ["futfour", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.futfour, count: 1, data: 0}, [ "   ", "a  ", "   "], ['a', 5, 0]);

IDRegistry.genBlockID("futfive");
Block.createBlock("futfive", [{name: "Блок из будущего", texture: [["futfive", 0], ["futfive", 0], ["futfive", 0], ["futfive", 0], ["futfive", 0], ["futfive", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.futfive, count: 1, data: 0}, [ "   ", "  a", "   "], ['a', 5, 0]);

IDRegistry.genBlockID("futsix");
Block.createBlock("futsix", [{name: "Блок из будущего", texture: [["futsix", 0], ["futsix", 0], ["futsix", 0], ["futsix", 0], ["futsix", 0], ["futsix", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.futsix, count: 1, data: 0}, [ "   ", "   ", "a  "], ['a', 5, 0]);

IDRegistry.genBlockID("futseven");
Block.createBlock("futseven", [{name: "Блок из будущего", texture: [["futseven", 0], ["futseven", 0], ["futseven", 0], ["futseven", 0], ["futseven", 0], ["futseven", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.futseven, count: 1, data: 0}, [ "   ", "   ", " a "], ['a', 5, 0]);

IDRegistry.genBlockID("futeight");
Block.createBlock("futeight", [{name: "Блок из будущего", texture: [["futeight", 0], ["futeight", 0], ["futeight", 0], ["futeight", 0], ["futeight", 0], ["futeight", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);

Recipes.addShaped({id: BlockID.futeight, count: 1, data: 0}, [ "   ", "   ", "  a"], ['a', 5, 0]);

IDRegistry.genBlockID("futnine");
Block.createBlock("futnine", [{name: "Блок из будущего", texture: [["futnine", 0], ["futnine", 0], ["futnine", 0], ["futnine", 0], ["futnine", 0], ["futnine", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.futnine, count: 1, data: 0}, [ "a  ", "a  ", "aa "], ['a', ItemID.obsidianingot, 0]);

IDRegistry.genBlockID("bambuk"); 
  Block.createBlock("bambuk", [{name: "Бамбук", texture: [["bambuk", 0], ["bambuk", 0], ["bambuk", 0], ["bambuk", 0], ["bambuk", 0], ["bambuk", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.bambuk, {x: 0.3125, y: 0, z: 0.3125}, {x: 0.6875, y: 1, z: 0.6875}); 

IDRegistry.genBlockID("bambukleaves"); 
  Block.createBlock("bambukleaves", [{name: "Листва бамбука", texture: [["bambukleaves", 0], ["bambukleaves", 0], ["bambukleaves", 0], ["bambukleaves", 0], ["bambukleaves", 0], ["bambukleaves", 0]], inCreative: true}]);
  
  IDRegistry.genItemID("ahalalui");
Item.createItem("ahalalui", "Ахалалуи", {name: "ahalalui", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ahalalui", {durability: 3400, level: 4, efficiency: 8, damage: 25, enchantability: 14});
ToolAPI.setTool(ItemID.ahalalui, "ahalalui", ToolType.sword);
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.01);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.ahalalui, soul);
}
});

IDRegistry.genItemID("kartzon");
Item.createItem("kartzon", "Картзон", {name: "kartzon", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("kartzon", {durability: 3400, level: 4, efficiency: 8, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.kartzon, "kartzon", ToolType.sword);
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.01);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.kartzon, soul);
}
});

IDRegistry.genItemID("dunepickaxe");
Item.createItem("dunepickaxe", "Разрушитель дюн", {name: "dunepickaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dunepickaxe", {durability: 3400, level: 4, efficiency: 8, damage: 25, enchantability: 14});
ToolAPI.setTool(ItemID.dunepickaxe, "dunepickaxe", ToolType.pickaxe);
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.01);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.dunepickaxe, soul);
}
});

IDRegistry.genItemID("raeye");
Item.createItem("raeye", "Око Ра", {name: "raeye", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("raeye", {durability: 3400, level: 4, efficiency: 8, damage: 30, enchantability: 14});
ToolAPI.setTool(ItemID.raeye, "raeye", ToolType.sword);
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 47){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.01);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.raeye, soul);
}
});

IDRegistry.genItemID("spidersword");
Item.createItem("spidersword", "Меч паука", {name: "spidersworda", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("spidersword", {durability: 3400, level: 4, efficiency: 8, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.spidersword, "spidersword", ToolType.sword);
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 35){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.01);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.spidersword, soul);
}
});

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.dunepickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z-1, true);

World.destroyBlock(x, y, z, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z-1, true);

World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z-1, true);
}
});

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.kartzon)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x+2, y-2, z-2, true);
World.destroyBlock(x+2, y-2, z-1, true);
World.destroyBlock(x+2, y-2, z, true);
World.destroyBlock(x+2, y-2, z+1, true);
World.destroyBlock(x+2, y-2, z+2, true);

World.destroyBlock(x+1, y-2, z-2, true);
World.destroyBlock(x+1, y-2, z-1, true);
World.destroyBlock(x+1, y-2, z, true);
World.destroyBlock(x+1, y-2, z+1, true);
World.destroyBlock(x+1, y-2, z+2, true);

World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y-2, z-1, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y-2, z+1, true);
World.destroyBlock(x, y-2, z+2, true);

World.destroyBlock(x-1, y-2, z-2, true);
World.destroyBlock(x-1, y-2, z-1, true);
World.destroyBlock(x-1, y-2, z, true);
World.destroyBlock(x-1, y-2, z+1, true);
World.destroyBlock(x-1, y-2, z+2, true);

World.destroyBlock(x-2, y-2, z-2, true);
World.destroyBlock(x-2, y-2, z-1, true);
World.destroyBlock(x-2, y-2, z, true);
World.destroyBlock(x-2, y-2, z+1, true);
World.destroyBlock(x-2, y-2, z+2, true);

//00000

World.destroyBlock(x+2, y-1, z-2, true);
World.destroyBlock(x+2, y-1, z-1, true);
World.destroyBlock(x+2, y-1, z, true);
World.destroyBlock(x+2, y-1, z+1, true);
World.destroyBlock(x+2, y-1, z+2, true);

World.destroyBlock(x+1, y-1, z-2, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z+2, true);

World.destroyBlock(x, y-1, z-2, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z+2, true);

World.destroyBlock(x-1, y-1, z-2, true);
World.destroyBlock(x-1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+2, true);

World.destroyBlock(x-2, y-1, z-2, true);
World.destroyBlock(x-2, y-1, z-1, true);
World.destroyBlock(x-2, y-1, z, true);
World.destroyBlock(x-2, y-1, z+1, true);
World.destroyBlock(x-2, y-1, z+2, true);

//хххххххххххххх

World.destroyBlock(x+2, y, z-2, true);
World.destroyBlock(x+2, y, z-1, true);
World.destroyBlock(x+2, y, z, true);
World.destroyBlock(x+2, y, z+1, true);
World.destroyBlock(x+2, y, z+2, true);

World.destroyBlock(x+1, y, z-2, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x+1, y, z+2, true);

World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z+2, true);

World.destroyBlock(x-1, y, z-2, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x-1, y, z+2, true);

World.destroyBlock(x-2, y, z-2, true);
World.destroyBlock(x-2, y, z-1, true);
World.destroyBlock(x-2, y, z, true);
World.destroyBlock(x-2, y, z+1, true);
World.destroyBlock(x-2, y, z+2, true);

//77777777777

World.destroyBlock(x+2, y+1, z-2, true);
World.destroyBlock(x+2, y+1, z-1, true);
World.destroyBlock(x+2, y+1, z, true);
World.destroyBlock(x+2, y+1, z+1, true);
World.destroyBlock(x+2, y+1, z+2, true);

World.destroyBlock(x+1, y+1, z-2, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z+2, true);

World.destroyBlock(x, y+1, z-2, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z+2, true);

World.destroyBlock(x-1, y+1, z-2, true);
World.destroyBlock(x-1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+2, true);

World.destroyBlock(x-2, y+1, z-2, true);
World.destroyBlock(x-2, y+1, z-1, true);
World.destroyBlock(x-2, y+1, z, true);
World.destroyBlock(x-2, y+1, z+1, true);
World.destroyBlock(x-2, y+1, z+2, true);

//666999

World.destroyBlock(x+2, y+2, z-2, true);
World.destroyBlock(x+2, y+2, z-1, true);
World.destroyBlock(x+2, y+2, z, true);
World.destroyBlock(x+2, y+2, z+1, true);
World.destroyBlock(x+2, y+2, z+2, true);

World.destroyBlock(x+1, y+2, z-2, true);
World.destroyBlock(x+1, y+2, z-1, true);
World.destroyBlock(x+1, y+2, z, true);
World.destroyBlock(x+1, y+2, z+1, true);
World.destroyBlock(x+1, y+2, z+2, true);

World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y+2, z-1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+2, z+1, true);
World.destroyBlock(x, y+2, z+2, true);

World.destroyBlock(x-1, y+2, z-2, true);
World.destroyBlock(x-1, y+2, z-1, true);
World.destroyBlock(x-1, y+2, z, true);
World.destroyBlock(x-1, y+2, z+1, true);
World.destroyBlock(x-1, y+2, z+2, true);

World.destroyBlock(x-2, y+2, z-2, true);
World.destroyBlock(x-2, y+2, z-1, true);
World.destroyBlock(x-2, y+2, z, true);
World.destroyBlock(x-2, y+2, z+1, true);
World.destroyBlock(x-2, y+2, z+2, true);
}
});

IDRegistry.genBlockID("moh"); 
  Block.createBlock("moh", [{name: "Мох", texture: [["moh", 0], ["moh", 0], ["moh", 0], ["moh", 0], ["moh", 0], ["moh", 0]], inCreative: true}]);
Block.setBlockShape(BlockID.moh, {"x":0,"y":0,"z":0}, {"x":1,"y":0.0625,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.02){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.bambuk, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.bambuk, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.bambuk, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.bambuk, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.bambuk, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.bambuk, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z, BlockID.bambuk, 0);
       World.setBlock(coords.x,coords.y+8,  coords.z, BlockID.bambuk, 0);
       World.setBlock(coords.x,coords.y+9,  coords.z, BlockID.bambuk, 0);
       World.setBlock(coords.x,coords.y+10,  coords.z, BlockID.bambuk, 0);
       
       World.setBlock(coords.x,coords.y+11,  coords.z, BlockID.bambukleaves, 0);
       World.setBlock(coords.x+1,coords.y+10,  coords.z, BlockID.bambukleaves, 0);
       World.setBlock(coords.x-1,coords.y+10,  coords.z, BlockID.bambukleaves, 0);
       World.setBlock(coords.x,coords.y+10,  coords.z+1, BlockID.bambukleaves, 0);
       World.setBlock(coords.x,coords.y+10,  coords.z-1, BlockID.bambukleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.bambukleaves, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z+1, BlockID.bambukleaves, 0);
}}});

IDRegistry.genBlockID("bambukplankstop"); 
  Block.createBlock("bambukplankstop", [{name: "Доски бамбука", texture: [["bambukplankstop", 0], ["bambukplankstop", 0], ["bambukplanks", 0], ["bambukplanks", 0], ["bambukplanks", 0], ["bambukplanks", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.bambukplankstop, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', BlockID.bambuk, 0]);

IDRegistry.genItemID("vampirekiss");
Item.createItem("vampirekiss", "Поцелуй вампира", {name: "vampirekiss", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("vampirekiss", {durability: 3400, level: 4, efficiency: 8, damage: 50, enchantability: 14});
ToolAPI.setTool(ItemID.vampirekiss, "vampirekiss", ToolType.sword);
Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 19){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 1);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.vampirekiss, soul);
}
});
  
  IDRegistry.genBlockID("blazeore");
Block.createBlock("blazeore", [{name: "Ифритовая руда", texture: [["blazeore", 0], ["blazeore", 0], ["blazeore", 0], ["blazeore", 0], ["blazeore", 0], ["blazeore", 0]], inCreative: true}]);

Block.registerDropFunction(BlockID.blazeore, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([369, 1, 0]);
 return drop;
});

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 230);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.blazeore, 0, 10);
    }
}
)

IDRegistry.genItemID("shamanhelmet");

Item.createArmorItem("shamanhelmet", "Шлем шамана", {name: "shamanhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/shamanhelmet.png"});

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.shamanhelmet) {
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
    }
});

IDRegistry.genItemID("necrosword");
Item.createItem("necrosword", "Некроклинок", {name: "necrosword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("necro", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.necrosword, "necro", ToolType.sword);

var Mobs = { 
drop: function(mobs, id, drop){ 
Callback.addCallback("EntityDeath", function(entity){ 
 let item = Player.getCarriedItem(); 
 if((Entity.getType(entity) == mobs) && (item.id == id)){ 
   var coords = Entity.getPosition(entity); 
 World.drop(coords.x, coords.y, coords.z, drop, 1, 0); 
 } 
 }); 
} 
}; 

Mobs.drop(27, ItemID.necrosword, ItemID.necroess)
Mobs.drop(26, ItemID.necrosword, ItemID.necroess)
Mobs.drop(36, ItemID.necrosword, ItemID.necroess)
Mobs.drop(38, ItemID.necrosword, ItemID.necroess)
Mobs.drop(34, ItemID.necrosword, ItemID.necroess)
Mobs.drop(48, ItemID.necrosword, ItemID.necroess)
Mobs.drop(52, ItemID.necrosword, ItemID.necroess)
Mobs.drop(46, ItemID.necrosword, ItemID.necroess)
Mobs.drop(32, ItemID.necrosword, ItemID.necroess)
Mobs.drop(44, ItemID.necrosword, ItemID.necroess)
Mobs.drop(47, ItemID.necrosword, ItemID.necroess)

IDRegistry.genItemID("necroess");
Item.createItem("necroess", "Некроэссенция", {name: "necroess", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.necrosword, count: 1, data: 0}, [ " a ", "bab", " c "], ['a', 388, 0, 'b', 331, 0, 'c', 351, 4]);

IDRegistry.genItemID("necroingot");
Item.createItem("necroingot", "Некрослиток", {name: "necroingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.necroingot, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', 265, 0, 'b', ItemID.necroess, 0]);

IDRegistry.genBlockID("darkore");
Block.createBlock("darkore", [{name: "Темная руда", texture: [["darkore", 0], ["darkore", 0], ["darkore", 0], ["darkore", 0], ["darkore", 0], ["darkore", 0]], inCreative: true}]);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, 49, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, 49, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z, 49, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+1, 49, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, 49, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 49, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 49, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 49, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 49, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.darkore, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, 49, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z, 49, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, 49, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, 49, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 49, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z-1, 49, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 49, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+1, 49, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z, 49, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z, 49, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, 49, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, 49, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, 49, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 49, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, 49, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 49, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, 49, 0);
}}});

var BLOCK_TYPE_DESTROY_MOD_PICKAXE
Block.createSpecialType({
     destroylevel: 4
});
 

IDRegistry.genBlockID("darkblock");
Block.createBlock("darkblock", [{name: "Темный блок", texture: [["darkblock", 0], ["darkblock", 0], ["darkblock", 0], ["darkblock", 0], ["darkblock", 0], ["darkblock", 0]], inCreative: true}], BLOCK_TYPE_DESTROY_MOD_PICKAXE);

IDRegistry.genItemID("samuraisword");
Item.createItem("samuraisword", "Меч самурая", {name: "samuraisword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("samurai", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.necrosword, "samurai", ToolType.sword);

Recipes.addShaped({id: ItemID.samuraisword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 265, 0, 'b', BlockID.sakuraplanks, 0]);

Recipes.addShaped({id: ItemID.shamanhelmet, count: 1, data: 0}, [ "aba", "bcb", "   "], ['a', 366, 0, 'b', 18, 3, 'c', 397, 0]);

IDRegistry.genItemID("darkingot");
Item.createItem("darkingot", "Темный слиток", {name: "darkingot", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.darkore, ItemID.darkingot, 1);

Recipes.addShaped({id: BlockID.darkblock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.darkingot, 0]);

IDRegistry.genItemID("necrosworda");
IDRegistry.genItemID("necropickaxe");
IDRegistry.genItemID("necroaxe");
IDRegistry.genItemID("necroshovel");
Item.createItem("necrosworda", "Некромеч", {name: "necrosworda", meta: 0}, {stack: 1});
Item.createItem("necropickaxe", "Некрокирка", {name: "necropickaxe", meta: 0}, {stack: 1});
Item.createItem("necroaxe", "Некротопор", {name: "necroaxe", meta: 0}, {stack: 1});
Item.createItem("necroshovel", "Некролопата", {name: "necroshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("necro", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.necrosworda, "necro", ToolType.sword);
ToolAPI.setTool(ItemID.necropickaxe, "necro", ToolType.pickaxe);
ToolAPI.setTool(ItemID.necroaxe, "necro", ToolType.axe);
ToolAPI.setTool(ItemID.necroshovel, "necro", ToolType.shovel);

IDRegistry.genItemID("necrohelmet");
IDRegistry.genItemID("necrochestplate");
IDRegistry.genItemID("necroleggings");
IDRegistry.genItemID("necroboots");

Item.createArmorItem("necrohelmet", "Некрошлем", {name: "necrohelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/necroarmor.png"});
Item.createArmorItem("necrochestplate", "Некронагрудник", {name: "necrochestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 750, texture: "armor/necroarmor.png"});
Item.createArmorItem("necroleggings", "Некропоножи", {name: "necroleggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/necroarmor0.png"});
Item.createArmorItem("necroboots", "Некроботинки", {name: "necroboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/necroarmor.png"});

Recipes.addShaped({id: ItemID.necrosworda, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.necroingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.necropickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.necroingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.necroaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.necroingot, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.necroshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.necroingot, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.necrohelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.necroingot, 0]);
Recipes.addShaped({id: ItemID.necrochestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.necroingot, 0]);
Recipes.addShaped({id: ItemID.necroleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.necroingot, 0]);
Recipes.addShaped({id: ItemID.necroboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.necroingot, 0]);

IDRegistry.genItemID("ozpotion");
Item.createItem("ozpotion", "Зелье озарения", {name: "ozpotion", meta: 0}, {stack: 1});

IDRegistry.genItemID("elpotion");
Item.createItem("elpotion", "Зелье стихий", {name: "elpotion", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.ozpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 4, 200)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 4, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.heal, 1, 200)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.elpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 4, 900)
Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 4, 900)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

Recipes.addShaped({id: ItemID.ozpotion, count: 1, data: 0}, [ " b ", " a ", "bcb"], ['a', BlockID.darkore, 0, 'b', 340, 0, 'c', 374, 0]);

Recipes.addShaped({id: ItemID.elpotion, count: 1, data: 0}, [ "   ", "bac", " d "], ['a', BlockID.darkore, 0, 'b', 325, 8, 'c', 325, 10, 'd', 374, 0]);

IDRegistry.genBlockID("darkflower"); 
  Block.createBlock("darkflower", [{name: "Темный цветок", texture: [["darkflower", 0], ["darkflower", 0], ["darkflower", 0], ["darkflower", 0], ["darkflower", 0], ["darkflower", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "darkflower", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "darkflower", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.darkflower, -1, render);
Block.setBlockShape(BlockID.darkflower, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.darkflower, 0);
}}});



IDRegistry.genItemID("darkflower");
Item.createItem("darkflower", "Темный цветок", {name: "darkflower", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.darkflower)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, BlockID.darkflower, 0);
Player.decreaseCarriedItem (1);
}
});

Block.registerDropFunction(BlockID.darkflower, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.darkflower, 1, 0]);
 return drop;
});

IDRegistry.genItemID("darkcane");
Item.createItem("darkcane", "Темный стебель", {name: "darkcane", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.darkcane, count: 1, data: 0}, [ "abb", "   ", "   "], ['a', 338, 0, 'b', ItemID.darkflower, 0]);

IDRegistry.genItemID("darkpotion");
Item.createItem("darkpotion", "Зелье теней", {name: "darkpotion", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.darkpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.invisibility, 4, 600)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

Recipes.addShaped({id: ItemID.darkpotion, count: 1, data: 0}, [ " a ", "bbb", "ccc"], ['a', 374, 0, 'b', ItemID.darkflower, 0, 'c', 374, 0]);

IDRegistry.genItemID("darkpotiontwo");
Item.createItem("darkpotiontwo", "Темное зелье", {name: "darkpotiontwo", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.darkpotiontwo)
{
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 900)
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 600)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

Recipes.addShaped({id: ItemID.darkpotiontwo, count: 1, data: 0}, [ "   ", "bqb", "   "], ['q', 374, 0, 'b', ItemID.darkcane, 0]);

IDRegistry.genBlockID("darkworkbench"); 
  Block.createBlock("darkworkbench", [{name: "Темный верстак", texture: [["darkplancks", 0], ["darkworkbenchtop", 0], ["darkworkbench", 0], ["darkworkbench", 0], ["darkworkbench", 0], ["darkworkbench", 0]], inCreative: true}]);
  
  var guiDark = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Темный верстак"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.darkworkbench, { 
 
getGuiScreen: function(){ 
return guiDark; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data)){ 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 

 this.addRecipes({id: 331, data: 0},{id: 351, data: 4, count: 1}); 
 this.container.validateAll(); 
 this.addRecipes({id: 351, data: 4},{id: 331, data: 0, count: 1}); 
 this.container.validateAll(); 
 }
});

IDRegistry.genItemID("darkbulava");
Item.createItem("darkbulava", "Темная булава", {name: "darkbulava", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("darkbulava", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.darkbulava, "darkbulava", ToolType.sword);

Recipes.addShaped({id: ItemID.darkpotiontwo, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.darkcane, 0, 'b', 49, 0]);

IDRegistry.genBlockID("darkplanks"); 
  Block.createBlock("darkplanks", [{name: "Темныe доски", texture: [["darkplanks", 0], ["darkplanks", 0], ["darkplanks", 0], ["darkplanks", 0], ["darkplanks", 0], ["darkplanks", 0]], inCreative: true}]);
  
  Recipes.addShaped({id: BlockID.darkplanks, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.darkcane, 0]);
  
  IDRegistry.genBlockID("necrofurnace"); 
  Block.createBlockWithRotation("necrofurnace", [{name: "Некропечь", texture: [["necro", 0], ["necro", 0], ["necroone", 0], ["necro", 0], ["necro", 0], ["necro", 0]], inCreative: true}]);
  
  Recipes.addShaped({id: BlockID.necrofurnace, count: 1, data: 0}, [ "aaa", "a a", "aaa"], ['a', ItemID.necroess, 0]);
  
  var NECRO_FUEL = {        5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiNecro = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Некропечь"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});

var Necro = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

Necro.set(ItemID.necroess, 265, 0, {
    id: ItemID.necroingot, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.necrofurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiNecro;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = Necro.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = NECRO_FUEL[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
        }
        return 0;
    }
});

IDRegistry.genBlockID("emeraldpumpking"); 
  Block.createBlock("emeraldpumpking", [{name: "Изумрудная тыква", texture: [["emeraldpumpkingtop", 0], ["emeraldpumpkingtop", 0], ["emeraldpumpking", 0], ["emeraldpumpking", 0], ["emeraldpumpking", 0], ["emeraldpumpking", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
  
  IDRegistry.genBlockID("emeraldtorch"); 
  Block.createBlock("emeraldtorch", [{name: "Изумрудная тыква", texture: [["emeraldtorchbottom", 0], ["emeraldtorchtop", 0], ["emeraldtorch", 0], ["emeraldtorch", 0], ["emeraldtorch", 0], ["emeraldtorch", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
  
  Block.setBlockShape(BlockID.emeraldtorch, {x: 0.4375, y: 0, z: 0.4375}, {x: 0.5625, y: 0.625, z: 0.5625}); 
  
  IDRegistry.genBlockID("runeore"); 
  Block.createBlock("runeore", [{name: "Руническая руда", texture: [["runeore", 0], ["runeore", 0], ["runeore", 0], ["runeore", 0], ["runeore", 0], ["runeore", 0]], inCreative: true}]);
  
  IDRegistry.genItemID("rune");
Item.createItem("rune", "Руна", {name: "rune", meta: 0}, {stack: 64});
  
  Block.registerDropFunction(BlockID.runeore, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.rune, 1, 0]);
 return drop;
});

IDRegistry.genItemID("swordrune");
Item.createItem("swordrune", "Руна меча", {name: "swordrune", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.swordrune, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', 267, 0, 'b', ItemID.rune, 0]);

IDRegistry.genItemID("magicrune");
Item.createItem("magicrune", "Загадочная руна", {name: "magicrune", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.magicrune, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', 368, 0, 'b', ItemID.rune, 0]);

IDRegistry.genBlockID("runebricks"); 
  Block.createBlock("runebricks", [{name: "Рунические кирпичи", texture: [["runebricks", 0], ["runebricks", 0], ["runebricks", 0], ["runebricks", 0], ["runebricks", 0], ["runebricks", 0]], inCreative: true}]);
  
  IDRegistry.genBlockID("runeobelisk"); 
  Block.createBlock("runeobelisk", [{name: "Рунический обелиск", texture: [["runeobelisk", 0], ["runeobelisk", 0], ["runeobelisk", 0], ["runeobelisk", 0], ["runeobelisk", 0], ["runeobelisk", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
  
  Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, 1, 6);
       World.setBlock(coords.x,coords.y+2,  coords.z, 1, 6);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.runeore, 0);
}}});


IDRegistry.genItemID("runesword");
IDRegistry.genItemID("runepickaxe");
IDRegistry.genItemID("runeaxe");
IDRegistry.genItemID("runehammer");
IDRegistry.genItemID("runestaff");
Item.createItem("runesword", "Рунический меч", {name: "runesword", meta: 0}, {stack: 1});
Item.createItem("runepickaxe", "Руническая кирка", {name: "runepickaxe", meta: 0}, {stack: 1});
Item.createItem("runeaxe", "Древний топор", {name: "runeaxe", meta: 0}, {stack: 1});
Item.createItem("runehammer", "Рунический молот", {name: "runehammer", meta: 0}, {stack: 1});
Item.createItem("runestaff", "Рунический скипетр", {name: "runestaff", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("rune", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.addToolMaterial("runehammer", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.addToolMaterial("runestaff", {durability: 3400, level: 4, efficiency: 8, damage: 4, enchantability: 14});
ToolAPI.setTool(ItemID.runesword, "rune", ToolType.sword);
ToolAPI.setTool(ItemID.runepickaxe, "rune", ToolType.pickaxe);
ToolAPI.setTool(ItemID.runeaxe, "rune", ToolType.axe);
ToolAPI.setTool(ItemID.runehammer, "runehammer", ToolType.sword);
ToolAPI.setTool(ItemID.runestaff, "runestaff", ToolType.sword);

IDRegistry.genItemID("runehelmet");
IDRegistry.genItemID("runechestplate");
IDRegistry.genItemID("runeleggings");
IDRegistry.genItemID("runeboots");

Item.createArmorItem("runehelmet", "Рунический шлем", {name: "runehelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/runearmor.png"});
Item.createArmorItem("runechestplate", "Рунический нагрудник", {name: "runechestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 750, texture: "armor/runearmor.png"});
Item.createArmorItem("runeleggings", "Рунические поножи", {name: "runeleggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/runearmor0.png"});
Item.createArmorItem("runeboots", "Рунические ботинки", {name: "runeboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/runearmor.png"});

Recipes.addShaped({id: ItemID.runesword, count: 1, data: 0}, [ " a ", " c ", " b "], ['a', ItemID.swordrune, 0, 'b', 280, 0, 'c', ItemID.magicrune, 0]);
Recipes.addShaped({id: ItemID.runepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.rune, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.runeaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.magicrune, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.runehammer, count: 1, data: 0}, [ "aaa", "aba", " b "], ['a', BlockID.runebricks, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.runestaff, count: 1, data: 0}, [ " ba", " cb", "c  "], ['a', 368, 0, 'b', ItemID.rune, 0, 'c', 369, 0]);



Recipes.addShaped({id: ItemID.runehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.rune, 0]);
Recipes.addShaped({id: ItemID.runechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.rune, 0]);
Recipes.addShaped({id: ItemID.runeleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.rune, 0]);
Recipes.addShaped({id: ItemID.runeboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.rune, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.runeaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z, true);
World.destroyBlock(x, y+1, z, true);
}
});

Recipes.addShaped({id: BlockID.runebricks, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.rune, 0]);

Recipes.addShaped({id: BlockID.runeobelisk, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', BlockID.runeore, 0, 'b', 50, 0]);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.runestaff){ 
Entity.addEffect(victim, 19, 2, 100, true, true); 
}
});

Recipes.addShaped({id: BlockID.emeraldpumpking, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', 388, 0, 'b', 86, 0]);

Recipes.addShaped({id: BlockID.emeraldtorch, count: 1, data: 0}, [ "   ", " a ", " b "], ['a', 388, 0, 'b', 50, 0]);

IDRegistry.genItemID("poison");
Item.createItem("poison", "Паучий яд", {name: "poison", meta: 0}, {stack: 64});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 35){
   var coords = Entity.getPosition(entity);
     var pois = parseInt(Math.random() * 0.05);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.poison, pois);
}
});

IDRegistry.genItemID("poisonknife");
Item.createItem("poisonknife", "Клинок яда", {name: "poisonknife", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("poison", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.poisonknife, "poison", ToolType.sword);
Recipes.addShaped({id: ItemID.poisonknife, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', ItemID.poison, 0, 'b', 341, 0, 'c', 267, 0]);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.poisonknife){ 
Entity.addEffect(victim, 19, 2, 500, true, true); 
}
});

IDRegistry.genItemID("rabbitpotion");
Item.createItem("rabbitpotion", "Зелье кролика", {name: "rabbitpotion", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.rabbitpotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 1800)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("zombiesword");
Item.createItem("zombiesword", "Меч нежити", {name: "zombiesworda", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("zombies", {durability: 30, level: 4, efficiency: 8, damage: 15, enchantability: 14});
ToolAPI.setTool(ItemID.zombiesword, "zombies", ToolType.sword);

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 32){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.04);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zombiesword, soul);
}
});

IDRegistry.genItemID("error");
Item.createItem("error", "1000101 1110010 1110010 1101111 1110010", {name: "error", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("error", {durability: 1000100, level: 100110, efficiency: 100101, damage: 1000100, enchantability: 100101});
ToolAPI.setTool(ItemID.error, "error", ToolType.sword);

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 33){
   var coords = Entity.getPosition(entity);
     var err = parseInt(Math.random() * 0.0001);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.error, err);
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 18){
   var coords = Entity.getPosition(entity);
     var jumpy = parseInt(Math.random() * 0.1);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.zombiesword, jumpy);
}
});

IDRegistry.genBlockID("cement");
Block.createBlock("cement", [{name: "Цемент", texture: [["cement", 0], ["cement", 0], ["cement", 0], ["cement", 0], ["cement", 0], ["cement", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cement, count: 1, data: 0}, [ "ab ", "c ", "   "], ['a', 12, 0, 'b', 13, 0, 'c', 82, 0]);

IDRegistry.genBlockID("cementblack");
Block.createBlock("cementblack", [{name: "Черный цемент", texture: [["cementblack", 0], ["cementblack", 0], ["cementblack", 0], ["cementblack", 0], ["cementblack", 0], ["cementblack", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementblack, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 0]);

IDRegistry.genBlockID("cementblue");
Block.createBlock("cementblue", [{name: "Синий цемент", texture: [["cementblue", 0], ["cementblue", 0], ["cementblue", 0], ["cementblue", 0], ["cementblue", 0], ["cementblue", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementblue, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 4]);

IDRegistry.genBlockID("cementbrown");
Block.createBlock("cementbrown", [{name: "Коричневый цемент", texture: [["cementbrown", 0], ["cementbrown", 0], ["cementbrown", 0], ["cementbrown", 0], ["cementbrown", 0], ["cementbrown", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementbrown, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 3]);

IDRegistry.genBlockID("cementcyan");
Block.createBlock("cementcyan", [{name: "Бирюзовый цемент", texture: [["cementcyan", 0], ["cementcyan", 0], ["cementcyan", 0], ["cementcyan", 0], ["cementcyan", 0], ["cementcyan", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementcyan, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 6]);

IDRegistry.genBlockID("cementgray");
Block.createBlock("cementgray", [{name: "Серый цемент", texture: [["cementgray", 0], ["cementgray", 0], ["cementgray", 0], ["cementgray", 0], ["cementgray", 0], ["cementgray", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementgray, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 8]);

IDRegistry.genBlockID("cementgreen");
Block.createBlock("cementgreen", [{name: "Зеленый цемент", texture: [["cementgreen", 0], ["cementgreen", 0], ["cementgreen", 0], ["cementgreen", 0], ["cementgreen", 0], ["cementgreen", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementgreen, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 2]);

IDRegistry.genBlockID("cementlightblue");
Block.createBlock("cementlightblue", [{name: "Голубой цемент", texture: [["cementlightblue", 0], ["cementlightblue", 0], ["cementlightblue", 0], ["cementlightblue", 0], ["cementlightblue", 0], ["cementlightblue", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementlightblue, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 12]);

IDRegistry.genBlockID("cementlightgray");
Block.createBlock("cementlightgray", [{name: "Светло-серый цемент", texture: [["cementlightgray", 0], ["cementlightgray", 0], ["cementlightgray", 0], ["cementlightgray", 0], ["cementlightgray", 0], ["cementlightgray", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementlightgray, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 7]);

IDRegistry.genBlockID("cementlime");
Block.createBlock("cementlime", [{name: "Лаймовый цемент", texture: [["cementlime", 0], ["cementlime", 0], ["cementlime", 0], ["cementlime", 0], ["cementlime", 0], ["cementlime", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementlime, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 10]);

IDRegistry.genBlockID("cementorange");
Block.createBlock("cementorange", [{name: "Оранжевый цемент", texture: [["cementorange", 0], ["cementorange", 0], ["cementorange", 0], ["cementorange", 0], ["cementorange", 0], ["cementorange", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementorange, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 14]);

IDRegistry.genBlockID("cementpink");
Block.createBlock("cementpink", [{name: "Розовый цемент", texture: [["cementpink", 0], ["cementpink", 0], ["cementpink", 0], ["cementpink", 0], ["cementpink", 0], ["cementpink", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementpink, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 9]);

IDRegistry.genBlockID("cementpurple");
Block.createBlock("cementpurple", [{name: "Пурпурный цемент", texture: [["cementpurple", 0], ["cementpurple", 0], ["cementpurple", 0], ["cementpurple", 0], ["cementpurple", 0], ["cementpurple", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementpurple, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 13]);

IDRegistry.genBlockID("cementred");
Block.createBlock("cementred", [{name: "Красный цемент", texture: [["cementred", 0], ["cementred", 0], ["cementred", 0], ["cementred", 0], ["cementred", 0], ["cementred", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementred, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 1]);

IDRegistry.genBlockID("cementviolet");
Block.createBlock("cementviolet", [{name: "Фиолетовый цемент", texture: [["cementviolet", 0], ["cementviolet", 0], ["cementviolet", 0], ["cementviolet", 0], ["cementviolet", 0], ["cementviolet", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementviolet, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 5]);

IDRegistry.genBlockID("cementwhite");
Block.createBlock("cementwhite", [{name: "Белый цемент", texture: [["cementwhite", 0], ["cementwhite", 0], ["cementwhite", 0], ["cementwhite", 0], ["cementwhite", 0], ["cementwhite", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementwhite, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 15]);

IDRegistry.genBlockID("cementyellow");
Block.createBlock("cementyellow", [{name: "Желтый цемент", texture: [["cementyellow", 0], ["cementyellow", 0], ["cementyellow", 0], ["cementyellow", 0], ["cementyellow", 0], ["cementyellow", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.cementyellow, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 351, 11]);

////////////0/0///00000000000_∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆∆

IDRegistry.genBlockID("concrete");
Block.createBlock("concrete", [{name: "Бетон", texture: [["concrete", 0], ["concrete", 0], ["concrete", 0], ["concrete", 0], ["concrete", 0], ["concrete", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concrete, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.cement, 0, 'b', 325, 8]);

IDRegistry.genBlockID("concreteblack");
Block.createBlock("concreteblack", [{name: "Черный бетон", texture: [["concreteblack", 0], ["concreteblack", 0], ["concreteblack", 0], ["concreteblack", 0], ["concreteblack", 0], ["concreteblack", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concreteblack, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 0]);

IDRegistry.genBlockID("concreteblue");
Block.createBlock("concreteblue", [{name: "Синий бетон", texture: [["concreteblue", 0], ["concreteblue", 0], ["concreteblue", 0], ["concreteblue", 0], ["concreteblue", 0], ["concreteblue", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concreteblue, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 4]);

IDRegistry.genBlockID("concretebrown");
Block.createBlock("concretebrown", [{name: "Коричневый бетон", texture: [["concretebrown", 0], ["concretebrown", 0], ["concretebrown", 0], ["concretebrown", 0], ["concretebrown", 0], ["concretebrown", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretebrown, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 3]);

IDRegistry.genBlockID("concretecyan");
Block.createBlock("concretecyan", [{name: "Бирюзовый бетон", texture: [["concretecyan", 0], ["concretecyan", 0], ["concretecyan", 0], ["concretecyan", 0], ["concretecyan", 0], ["concretecyan", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretecyan, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 6]);

IDRegistry.genBlockID("concretegray");
Block.createBlock("concretegray", [{name: "Серый бетон", texture: [["concretegray", 0], ["concretegray", 0], ["concretegray", 0], ["concretegray", 0], ["concretegray", 0], ["concretegray", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretegray, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 8]);

IDRegistry.genBlockID("concretegreen");
Block.createBlock("concretegreen", [{name: "Зеленый бетон", texture: [["concretegreen", 0], ["concretegreen", 0], ["concretegreen", 0], ["concretegreen", 0], ["concretegreen", 0], ["concretegreen", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretegreen, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 2]);

IDRegistry.genBlockID("concretelightblue");
Block.createBlock("concretelightblue", [{name: "Голубой бетон", texture: [["concretelightblue", 0], ["concretelightblue", 0], ["concretelightblue", 0], ["concretelightblue", 0], ["concretelightblue", 0], ["concretelightblue", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretelightblue, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 12]);

IDRegistry.genBlockID("concretelightgray");
Block.createBlock("concretelightgray", [{name: "Светло-серый бетон", texture: [["concretelightgray", 0], ["concretelightgray", 0], ["concretelightgray", 0], ["concretelightgray", 0], ["concretelightgray", 0], ["concretelightgray", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretelightgray, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 7]);

IDRegistry.genBlockID("concretelime");
Block.createBlock("concretelime", [{name: "Лаймовый бетон", texture: [["concretelime", 0], ["concretelime", 0], ["concretelime", 0], ["concretelime", 0], ["concretelime", 0], ["concretelime", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretelime, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 10]);

IDRegistry.genBlockID("concreteorange");
Block.createBlock("concreteorange", [{name: "Оранжевый бетон", texture: [["concreteorange", 0], ["concreteorange", 0], ["concreteorange", 0], ["concreteorange", 0], ["concreteorange", 0], ["concreteorange", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concreteorange, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 14]);

IDRegistry.genBlockID("concretepink");
Block.createBlock("concretepink", [{name: "Розовый бетон", texture: [["concretepink", 0], ["concretepink", 0], ["concretepink", 0], ["concretepink", 0], ["concretepink", 0], ["concretepink", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretepink, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 9]);

IDRegistry.genBlockID("concretepurple");
Block.createBlock("concretepurple", [{name: "Пурпурный бетон", texture: [["concretepurple", 0], ["concretepurple", 0], ["concretepurple", 0], ["concretepurple", 0], ["concretepurple", 0], ["concretepurple", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretepurple, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 13]);

IDRegistry.genBlockID("concretered");
Block.createBlock("concretered", [{name: "Красный бетон", texture: [["concretered", 0], ["concretered", 0], ["concretered", 0], ["concretered", 0], ["concretered", 0], ["concretered", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretered, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 1]);

IDRegistry.genBlockID("concreteviolet");
Block.createBlock("concreteviolet", [{name: "Фиолетовый бетон", texture: [["concreteviolet", 0], ["concreteviolet", 0], ["concreteviolet", 0], ["concreteviolet", 0], ["concreteviolet", 0], ["concreteviolet", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concreteviolet, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 5]);

IDRegistry.genBlockID("concretewhite");
Block.createBlock("concretewhite", [{name: "Белый бетон", texture: [["concretewhite", 0], ["concretewhite", 0], ["concretewhite", 0], ["concretewhite", 0], ["concretewhite", 0], ["concretewhite", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concretewhite, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 15]);

IDRegistry.genBlockID("concreteyellow");
Block.createBlock("concreteyellow", [{name: "Желтый бетон", texture: [["concreteyellow", 0], ["concreteyellow", 0], ["concreteyellow", 0], ["concreteyellow", 0], ["concreteyellow", 0], ["concreteyellow", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.concreteyellow, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', BlockID.concrete, 0, 'b', 351, 11]);

IDRegistry.genBlockID("logy"); 
  Block.createBlock("logy", [{name: "Трухлявое дерево", texture: [["logy", 0], ["logy", 0], ["logy", 0], ["logy", 0], ["logy", 0], ["logy", 0]], inCreative: true}]);

var model = BlockRenderer.createModel();
var render = new ICRender.Model();

model.addBox(0/16, 0/16, 0/16, 16/16, 1/16, 16/16, "logy", 0);
model.addBox(0/16, 15/16, 0/16, 16/16, 16/16, 16/16, "logy", 0);
model.addBox(0/16, 0/16, 0/16, 16/16, 16/16, 1/16, "logy", 0);
model.addBox(0/16, 0/16, 15/16, 16/16, 16/16, 16/16, "logy", 0);


render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.logy, -1, render);

Block.setBlockShape(BlockID.logy, {"x":0,"y":0,"z":0}, {"x":1,"y":1,"z":1});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.009){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.logy, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, BlockID.logy, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, BlockID.logy, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z, BlockID.logy, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z, BlockID.logy, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.moh, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z, BlockID.moh, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z, BlockID.moh, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, BlockID.moh, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+1, BlockID.moh, 0);
}}});

var CreeperHelmet = ItemID.CreeperHelmet;
var CreeperLeggings = ItemID.CreeperLeggings;
var CreeperBoots = ItemID.CreerBoots;
var CreeperChestplate = ItemID.CreeperChestplate;

//materials.js
ToolAPI.addToolMaterial("Creeper", {durability: 80, level: 4, efficiency: 20, damage: 15, enchantability: 8});
ToolAPI.addToolMaterial("Ifrit", {durability: 120, level: 4, efficiency: 50, damage: 18, enchantability: 15});
ToolAPI.addToolMaterial("Spider", {durability: 80, level: 4, efficiency: 14, damage: 10, enchantability: 8});
ToolAPI.addToolMaterial("Skelet", {durability: 40, level: 4, efficiency: 14, damage: 10, enchantability: 5});
ToolAPI.addToolMaterial("Zombie", {durability: 30, level: 4, efficiency: 14, damage: 10, enchantability: 5});
ToolAPI.addToolMaterial("End", {durability: 130, level: 4, efficiency: 50, damage: 20, enchantability: 20});
ToolAPI.addToolMaterial("Slime", {durability: 130, level: 4, efficiency: 30, damage: 17, enchantability: 15});
ToolAPI.addToolMaterial("Ocelot", {durability: 110, level: 4, efficiency: 35, damage: 15, enchantability: 15});
ToolAPI.addToolMaterial("Sprut", {durability: 80, level: 4, efficiency: 20, damage: 15, enchantability: 14});

//ingots
IDRegistry.genItemID("zombie");
Item.createItem("zombie", "Голова зомби", {name: "zombie", meta: 0}, {stack: 64});

IDRegistry.genItemID("Skelet");
Item.createItem("Skelet", "Череп скелета", {name: "skelet", meta: 0}, {stack: 64});

IDRegistry.genItemID("Spider");
Item.createItem("Spider", "Душа паука", {name: "spider", meta: 0}, {stack: 64});

IDRegistry.genItemID("Nako");
Item.createItem("Nako", "Энергия крипера", {name: "nakoingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("sprut");
Item.createItem("sprut", "Маленький спрут", {name: "sprut", meta: 0}, {stack: 64});

IDRegistry.genItemID("ocelota");
Item.createItem("ocelota", "Рыба оцелота", {name: "ocelota", meta: 0}, {stack: 64});

IDRegistry.genItemID("Ifrit");
Item.createItem("Ifrit", "Пламя ифрита", {name: "ifrit", meta: 0}, {stack: 64});

IDRegistry.genItemID("enderman");
Item.createItem("enderman", "Голова эндермена", {name: "enderman", meta: 0}, {stack: 64});

IDRegistry.genItemID("zombieingot");
Item.createItem("zombieingot", "Слиток зомби", {name: "zombieingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("skeletingot");
Item.createItem("skeletingot", "Слиток скелета", {name: "skeletingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("spideringot");
Item.createItem("spideringot", "Слиток паука", {name: "spideringot", meta: 0}, {stack: 64});

IDRegistry.genItemID("Creeper");
Item.createItem("Creeper", "Слиток крипера", {name: "creeperingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("sprutingot");
Item.createItem("sprutingot", "Слиток спрута", {name: "sprutingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("Slimeingot");
Item.createItem("Slimeingot", "Слиток слизня", {name: "slimeingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("ocelotingot");
Item.createItem("ocelotingot", "Слиток оцелота", {name: "ocelotingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("ifritingot");
Item.createItem("ifritingot", "Слиток ифрита", {name: "ifritingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("endingot");
Item.createItem("endingot", "Слиток эндермена", {name: "endingot", meta: 0}, {stack: 64});

//tools

IDRegistry.genItemID("ZombieSword");
IDRegistry.genItemID("ZombieShovel");
IDRegistry.genItemID("ZombiePickaxe");
IDRegistry.genItemID("ZombieAxe");
Item.createItem("ZombieSword", "Меч зомби", {name: "zombiesword", meta: 0}, {stack: 1});
Item.createItem("ZombieShovel", "Лопата зомби", {name: "zombieshovel", meta: 0}, {stack: 1});
Item.createItem("ZombiePickaxe", "Кирка зомби", {name: "zombiepickaxe", meta: 0}, {stack: 1});
Item.createItem("ZombieAxe", "Топор зомби", {name: "zombieaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.ZombieSword, "Zombie", ToolType.sword);
ToolAPI.setTool(ItemID.ZombieShovel, "Zombie", ToolType.shovel);
ToolAPI.setTool(ItemID.ZombiePickaxe, "Zombie", ToolType.pickaxe);
ToolAPI.setTool(ItemID.ZombieAxe, "Zombie", ToolType.axe);

Recipes.addShaped({id: ItemID.ZombieSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.zombieingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ZombieShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.zombieingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ZombiePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.zombieingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.ZombieAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.zombieingot, 0, 'b', 280, 0]);

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 32){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.zombieingot, leth);
 }
});

IDRegistry.genItemID("SkeletSword");
IDRegistry.genItemID("SkeletShovel");
IDRegistry.genItemID("SkeletPickaxe");
IDRegistry.genItemID("SkeletAxe");
Item.createItem("SkeletSword", "Меч скелета", {name: "skeletsword", meta: 0}, {stack: 1});
Item.createItem("SkeletShovel", "Лопата скелета", {name: "skeletshovel", meta: 0}, {stack: 1});
Item.createItem("SkeletPickaxe", "Кирка скелета", {name: "skeletpickaxe", meta: 0}, {stack: 1});

Item.createItem("SkeletAxe", "Топор скелета", {name: "skeletaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.SkeletSword, "Skelet", ToolType.sword);
ToolAPI.setTool(ItemID.SkeletShovel, "Skelet", ToolType.shovel);
ToolAPI.setTool(ItemID.SkeletPickaxe, "Skelet", ToolType.pickaxe);
ToolAPI.setTool(ItemID.SkeletAxe, "Skelet", ToolType.axe);

Recipes.addShaped({id: ItemID.SkeletSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.skeletingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SkeletShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.skeletingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SkeletPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.skeletingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SkeletAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.skeletingot, 0, 'b', 280, 0]);

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 34){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.skeletingot, leth);
 }
});

IDRegistry.genItemID("SpiderSword");
IDRegistry.genItemID("SpiderShovel");
IDRegistry.genItemID("SpiderPickaxe");
IDRegistry.genItemID("SpiderAxe");
Item.createItem("SpiderSword", "Меч паука", {name: "spidersword", meta: 0}, {stack: 1});
Item.createItem("SpiderShovel", "Лопата паука", {name: "spidershovel", meta: 0}, {stack: 1});
Item.createItem("SpiderPickaxe", "Кирка паука", {name: "spiderpickaxe", meta: 0}, {stack: 1});
Item.createItem("SpiderAxe", "Топор паука", {name: "spideraxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.SpiderSword, "Spider", ToolType.sword);
ToolAPI.setTool(ItemID.SpiderShovel, "Spider", ToolType.shovel);
ToolAPI.setTool(ItemID.SpiderPickaxe, "Spider", ToolType.pickaxe);
ToolAPI.setTool(ItemID.SpiderAxe, "Spider", ToolType.axe);

Recipes.addShaped({id: ItemID.SpiderSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.spideringot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SpiderShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.spideringot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SpiderPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.spideringot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SpiderAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.spideringot, 0, 'b', 280, 0]);

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 35){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.spideringot, leth);
 }
});

IDRegistry.genItemID("NakoSword");
IDRegistry.genItemID("NakoShovel");
IDRegistry.genItemID("NakoPickaxe");
IDRegistry.genItemID("NakoAxe");
Item.createItem("NakoSword", "Меч крипера", {name: "nakosword", meta: 0}, {stack: 1});
Item.createItem("NakoShovel", "Лопата крипера", {name: "nakoshovel", meta: 0}, {stack: 1});
Item.createItem("NakoPickaxe", "Кирка крипера", {name: "nakopickaxe", meta: 0}, {stack: 1});
Item.createItem("NakoAxe", "Топор крипера", {name: "nakoaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.NakoSword, "Creeper", ToolType.sword);
ToolAPI.setTool(ItemID.NakoShovel, "Creeper", ToolType.shovel);
ToolAPI.setTool(ItemID.NakoPickaxe, "Creeper", ToolType.pickaxe);
ToolAPI.setTool(ItemID.NakoAxe, "Creeper", ToolType.axe);

Recipes.addShaped({id: ItemID.NakoSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Creeper, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.NakoShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Creeper, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.NakoPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Creeper, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.NakoAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Creeper, 0, 'b', 280, 0]);

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 33){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.Creeper, leth);
 }
});

IDRegistry.genItemID("SprutSword");
IDRegistry.genItemID("SprutShovel");
IDRegistry.genItemID("SprutPickaxe");
IDRegistry.genItemID("SprutAxe");
Item.createItem("SprutSword", "Меч спрута", {name: "sprutsword", meta: 0}, {stack: 1});
Item.createItem("SprutShovel", "Лопата спрута", {name: "sprutshovel", meta: 0}, {stack: 1});
Item.createItem("SprutPickaxe", "Кирка спрута", {name: "sprutpickaxe", meta: 0}, {stack: 1});
Item.createItem("SprutAxe", "Топор спрута", {name: "sprutaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.SprutSword, "Sprut", ToolType.sword);
ToolAPI.setTool(ItemID.SprutShovel, "Sprut", ToolType.shovel);
ToolAPI.setTool(ItemID.SprutPickaxe, "Sprut", ToolType.pickaxe);
ToolAPI.setTool(ItemID.SprutAxe, "Sprut", ToolType.axe);

Recipes.addShaped({id: ItemID.SprutSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.sprutingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SprutShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.sprutingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SprutPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.sprutingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SprutAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
    ], ['a', ItemID.sprutingot, 0, 'b', 280, 0]);

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 17){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.sprutingot, leth);
 }
});

IDRegistry.genItemID("SlimeSword");
IDRegistry.genItemID("SlimeShovel");
IDRegistry.genItemID("SlimePickaxe");
IDRegistry.genItemID("SlimeAxe");
Item.createItem("SlimeSword", "Меч слизня", {name: "slimesword", meta: 0}, {stack: 1});
Item.createItem("SlimeShovel", "Лопата слизня", {name: "slimeshovel", meta: 0}, {stack: 1});
Item.createItem("SlimePickaxe", "Кирка слизня", {name: "slimepickaxe", meta: 0}, {stack: 1});
Item.createItem("SlimeAxe", "Топор слизня", {name: "slimeaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.SlimeSword, "Slime", ToolType.sword);
ToolAPI.setTool(ItemID.SlimeShovel, "Slime", ToolType.shovel);
ToolAPI.setTool(ItemID.SlimePickaxe, "Slime", ToolType.pickaxe);
ToolAPI.setTool(ItemID.SlimeAxe, "Slime", ToolType.axe);

Recipes.addShaped({id: ItemID.SlimeSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Slimeingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SlimeShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Slimeingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SlimePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Slimeingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.SlimeAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Slimeingot, 0, 'b', 280, 0]);

IDRegistry.genItemID("OcelotSword");
IDRegistry.genItemID("OcelotShovel");
IDRegistry.genItemID("OcelotPickaxe");
IDRegistry.genItemID("OcelotAxe");
Item.createItem("OcelotSword", "Меч оцелота", {name: "ocelotsword", meta: 0}, {stack: 1});
Item.createItem("OcelotShovel", "Лопата оцелота", {name: "ocelotshovel", meta: 0}, {stack: 1});
Item.createItem("OcelotPickaxe", "Кирка оцелота", {name: "ocelotpickaxe", meta: 0}, {stack: 1});
Item.createItem("OcelotAxe", "Топор оцелота", {name: "ocelotaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.OcelotSword, "Ocelot", ToolType.sword);
ToolAPI.setTool(ItemID.OcelotShovel, "Ocelot", ToolType.shovel);
ToolAPI.setTool(ItemID.OcelotPickaxe, "Ocelot", ToolType.pickaxe);
ToolAPI.setTool(ItemID.OcelotAxe, "Ocelot", ToolType.axe);

Recipes.addShaped({id: ItemID.OcelotSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ocelotingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.OcelotShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ocelotingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.OcelotPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ocelotingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.OcelotAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
    ], ['a', ItemID.ocelotingot, 0, 'b', 280, 0]);

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 22){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.ocelotingot, leth);
 }
});

IDRegistry.genItemID("IfritSword");
IDRegistry.genItemID("IfritShovel");
IDRegistry.genItemID("IfritPickaxe");
IDRegistry.genItemID("IfritAxe");
Item.createItem("IfritSword", "Меч ифрита", {name: "ifritsword", meta: 0}, {stack: 1});
Item.createItem("IfritShovel", "Лопата ифрита", {name: "ifritshovel", meta: 0}, {stack: 1});
Item.createItem("IfritPickaxe", "Кирка ифрита", {name: "ifritpickaxe", meta: 0}, {stack: 1});
Item.createItem("IfritAxe", "Топор ифрита", {name: "ifritaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.IfritSword, "Ifrit", ToolType.sword);
ToolAPI.setTool(ItemID.IfritShovel, "Ifrit", ToolType.shovel);
ToolAPI.setTool(ItemID.IfritPickaxe, "Ifrit", ToolType.pickaxe);
ToolAPI.setTool(ItemID.IfritAxe, "Ifrit", ToolType.axe);

Recipes.addShaped({id: ItemID.IfritSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.ifritingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.IfritShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.ifritingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.IfritPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.ifritingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.IfritAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.ifritingot, 0, 'b', 280, 0]);

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 43){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.ifritingot, leth);
 }
});

IDRegistry.genItemID("EndSword");
IDRegistry.genItemID("EndShovel");
IDRegistry.genItemID("EndPickaxe");
IDRegistry.genItemID("EndAxe");
Item.createItem("EndSword", "Меч эндермена", {name: "endsword", meta: 0}, {stack: 1});
Item.createItem("EndShovel", "Лопата эндермена", {name: "endshovel", meta: 0}, {stack: 1});
Item.createItem("EndPickaxe", "Кирка эндермена", {name: "endpickaxe", meta: 0}, {stack: 1});
Item.createItem("EndAxe", "Топор эндермена", {name: "endaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.EndSword, "End", ToolType.sword);
ToolAPI.setTool(ItemID.EndShovel, "End", ToolType.shovel);
ToolAPI.setTool(ItemID.EndPickaxe, "End", ToolType.pickaxe);
ToolAPI.setTool(ItemID.EndAxe, "End", ToolType.axe);

Recipes.addShaped({id: ItemID.EndSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.endingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EndShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.endingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EndPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.endingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.EndAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.endingot, 0, 'b', 280, 0]);

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 38){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.endingot, leth);
 }
});

//uptools.js
IDRegistry.genItemID("UPZombiePickaxe");
Item.createItem("UPZombiePickaxe", "Усиленная кирка зомби", {name: "upzombiepickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPZombiePickaxe, "Zombie", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.UPZombiePickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.zombie, 0, 'd', ItemID.ZombiePickaxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPZombiePickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
}
});

IDRegistry.genItemID("UPSkeletPickaxe");
Item.createItem("UPSkeletPickaxe", "Усиленная кирка скелета", {name: "upskeletpickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPSkeletPickaxe, "Skelet", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.UPSkeletPickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.Skelet, 0, 'd', ItemID.SkeletPickaxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPSkeletPickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
}
});

IDRegistry.genItemID("UPSpiderPickaxe");
Item.createItem("UPSpiderPickaxe", "Усиленная кирка паука", {name: "upspiderpickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPSpiderPickaxe, "Spider", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.UPSpiderPickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.Spider, 0, 'd', ItemID.SpiderPickaxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPSpiderPickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z+1, true);
}
});

IDRegistry.genItemID("UPNakoPickaxe");
Item.createItem("UPNakoPickaxe", "Усиленная кирка крипера", {name: "upnakopickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPNakoPickaxe, "Creeper", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.UPNakoPickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.Nako, 0, 'd', ItemID.NakoPickaxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPNakoPickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
}
});

IDRegistry.genItemID("UPSprutPickaxe");
Item.createItem("UPSprutPickaxe", "Усиленная кирка спрута", {name: "upsprutpickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPSprutPickaxe, "Sprut", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.UPSprutPickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.sprut, 0, 'd', ItemID.SprutPickaxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPSprutPickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y+2, z+2, true);
World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y-2, z+2, true);
}
});

IDRegistry.genItemID("UPSlimePickaxe");
Item.createItem("UPSlimePickaxe", "Усиленная кирка слизня", {name: "upslimepickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPSlimePickaxe, "Slime", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.UPSlimePickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', 341, 0, 'd', ItemID.SlimePickaxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPSlimePickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
}
});

IDRegistry.genItemID("UPOcelotPickaxe");
Item.createItem("UPOcelotPickaxe", "Усиленная кирка оцелота", {name: "upocelotpickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPOcelotPickaxe, "Ocelot", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.UPOcelotPickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.ocelota, 0, 'd', ItemID.OcelotPickaxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPOcelotPickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y+2, z+2, true);
World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y-2, z+2, true);
}
});

IDRegistry.genItemID("UPIfritPickaxe");
Item.createItem("UPIfritPickaxe", "Усиленная кирка ифрита", {name: "upifritpickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPIfritPickaxe, "Ifrit", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.UPIfritPickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.Ifrit, 0, 'd', ItemID.IfritPickaxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPIfritPickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y-2, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x, y+2, z+2, true);
World.destroyBlock(x, y-2, z-2, true);
World.destroyBlock(x, y+2, z-2, true);
World.destroyBlock(x, y-2, z+2, true);
World.destroyBlock(x, y+1, z+2, true);
World.destroyBlock(x, y-1, z-2, true);
World.destroyBlock(x, y+2, z-1, true);
World.destroyBlock(x, y-1, z+2, true);
World.destroyBlock(x, y+2, z+1, true);
World.destroyBlock(x, y-2, z-1, true);
World.destroyBlock(x, y-2, z+1, true);
World.destroyBlock(x, y+1, z-2, true);
}
});

IDRegistry.genItemID("UPEndPickaxe");
Item.createItem("UPEndPickaxe", "Усиленная кирка эндермена", {name: "upendpickaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPEndPickaxe, "End", ToolType.pickaxe);
Recipes.addShaped({id: ItemID.UPEndPickaxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.enderman, 0, 'd', ItemID.EndPickaxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPEndPickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z-1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+2, y, z, true);
World.destroyBlock(x-2, y, z, true);
World.destroyBlock(x, y, z+2, true);
World.destroyBlock(x, y, z-2, true);
World.destroyBlock(x+2, y, z+2, true);
World.destroyBlock(x-2, y, z-2, true);
World.destroyBlock(x+2, y, z-2, true);
World.destroyBlock(x-2, y, z+2, true);
World.destroyBlock(x+1, y, z+2, true);
World.destroyBlock(x-1, y, z-2, true);
World.destroyBlock(x+2, y, z-1, true);
World.destroyBlock(x-1, y, z+2, true);
World.destroyBlock(x+2, y, z+1, true);
World.destroyBlock(x-2, y, z-1, true);
World.destroyBlock(x-2, y, z+1, true);
World.destroyBlock(x+1, y, z-2, true);
}
});

IDRegistry.genItemID("UPZombieAxe");
Item.createItem("UPZombieAxe", "Усиленный топор зомби", {name: "upzombieaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPZombieAxe, "Zombie", ToolType.axe);
Recipes.addShaped({id: ItemID.UPZombieAxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.zombie, 0, 'd', ItemID.ZombieAxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPZombieAxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
}
});

IDRegistry.genItemID("UPSkeletAxe");
Item.createItem("UPSkeletAxe", "Усиленный топор скелета", {name: "upskeletaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPSkeletAxe, "Skelet", ToolType.axe);
Recipes.addShaped({id: ItemID.UPSkeletAxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.Skelet, 0, 'd', ItemID.SkeletAxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPSkeletAxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
}
});

IDRegistry.genItemID("UPSpiderAxe");
Item.createItem("UPSpiderAxe", "Усиленный топор паука", {name: "upspideraxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPSpiderAxe, "Spider", ToolType.axe);
Recipes.addShaped({id: ItemID.UPSpiderAxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.Spider, 0, 'd', ItemID.SpiderAxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPSpiderAxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
}
});

IDRegistry.genItemID("UPCreeperAxe");
Item.createItem("UPCreeperAxe", "Усиленный топор крипера", {name: "upcreeperaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPCreeperAxe, "Creeper", ToolType.axe);
Recipes.addShaped({id: ItemID.UPCreeperAxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.Nako, 0, 'd', ItemID.NakoAxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPCreeperAxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
}
});

IDRegistry.genItemID("UPSprutAxe");
Item.createItem("UPSprutAxe", "Усиленный топор спрута", {name: "upsprutaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPSprutAxe, "Sprut", ToolType.axe);
Recipes.addShaped({id: ItemID.UPSprutAxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.sprut, 0, 'd', ItemID.SprutAxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPSprutAxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UPSlimeAxe");
Item.createItem("UPSlimeAxe", "Усиленный топор слизня", {name: "upslimeaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPSlimeAxe, "Slime", ToolType.axe);
Recipes.addShaped({id: ItemID.UPSlimeAxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', 341, 0, 'd', ItemID.SlimeAxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPSlimeAxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UPOcelotAxe");
Item.createItem("UPOcelotAxe", "Усиленный топор оцелота", {name: "upocelotaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPOcelotAxe, "Ocelot", ToolType.axe);
Recipes.addShaped({id: ItemID.UPOcelotAxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
    ], ['a', ItemID.ocelota, 0, 'd', ItemID.OcelotAxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPOcelotAxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UPIfritAxe");
Item.createItem("UPIfritAxe", "Усиленный топор ифрита", {name: "upifritaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPIfritAxe, "Ifrit", ToolType.axe);
Recipes.addShaped({id: ItemID.UPIfritAxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.Ifrit, 0, 'd', ItemID.IfritAxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPIfritAxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

IDRegistry.genItemID("UPEndAxe");
Item.createItem("UPEndAxe", "Усиленный топор эндермена", {name: "upendaxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.UPEndAxe, "End", ToolType.axe);
Recipes.addShaped({id: ItemID.UPEndAxe, count: 1, data: 0}, [
    "aaa",
    "ada",
    "aaa"
], ['a', ItemID.enderman, 0, 'd', ItemID.EndAxe, 0]);

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.UPEndAxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x, y+2, z, true);
World.destroyBlock(x, y+3, z, true);
}
});

//armor
IDRegistry.genItemID("ZombieHelmet");
IDRegistry.genItemID("ZombieChestplate");
IDRegistry.genItemID("ZombieLeggings");
IDRegistry.genItemID("ZombieBoots");

Item.createArmorItem("ZombieHelmet", "Шлем зомби", {name: "zombiehelmet"}, {type: "helmet", armor: 2, durability: 30, texture: "armor/zombie1_1.png"});
Item.createArmorItem("ZombieChestplate", "Нагрудник зомби", {name: "zombiechestplate"}, {type: "chestplate", armor: 2, durability: 50, texture: "armor/zombie1_1.png"});
Item.createArmorItem("ZombieLeggings", "Штаны зомби", {name: "zombieleggings"}, {type: "leggings", armor: 2, durability: 40, texture: "armor/zombie2_2.png"});
Item.createArmorItem("ZombieBoots", "Ботинки зомби", {name: "zombieboots"}, {type: "boots", armor: 2, durability: 45, texture: "armor/zombie1_1.png"});

Recipes.addShaped({id: ItemID.ZombieHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.zombieingot, 0]);

Recipes.addShaped({id: ItemID.ZombieChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.zombieingot, 0]);

Recipes.addShaped({id: ItemID.ZombieLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.zombieingot, 0]);

Recipes.addShaped({id: ItemID.ZombieBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.zombieingot, 0]);

IDRegistry.genItemID("SkeletHelmet");
IDRegistry.genItemID("SkeletChestplate");
IDRegistry.genItemID("SkeletLeggings");
IDRegistry.genItemID("SkeletBoots");

Item.createArmorItem("SkeletHelmet", "Шлем скелета", {name: "skelethelmet"}, {type: "helmet", armor: 2, durability: 30, texture: "armor/skelet1_1.png"});
Item.createArmorItem("SkeletChestplate", "Нагрудник скелета", {name: "skeletchestplate"}, {type: "chestplate", armor: 2, durability: 50, texture: "armor/skelet1_1.png"});
Item.createArmorItem("SkeletLeggings", "Штаны скелета", {name: "skeletleggings"}, {type: "leggings", armor: 2, durability: 40, texture: "armor/skelet2_2.png"});
Item.createArmorItem("SkeletBoots", "Ботинки скелета", {name: "skeletboots"}, {type: "boots", armor: 2, durability: 45, texture: "armor/skelet1_1.png"});

Recipes.addShaped({id: ItemID.SkeletHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.skeletingot, 0]);

Recipes.addShaped({id: ItemID.SkeletChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.skeletingot, 0]);

Recipes.addShaped({id: ItemID.SkeletLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.skeletingot, 0]);

Recipes.addShaped({id: ItemID.SkeletBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.skeletingot, 0]);

IDRegistry.genItemID("SpiderHelmet");
IDRegistry.genItemID("SpiderChestplate");
IDRegistry.genItemID("SpiderLeggings");
IDRegistry.genItemID("SpiderBoots");

Item.createArmorItem("SpiderHelmet", "Шлем паука", {name: "spiderhelmet"}, {type: "helmet", armor: 2, durability: 40, texture: "armor/spider1_1.png"});
Item.createArmorItem("SpiderChestplate", "Нагрудник паука", {name: "spiderchestplate"}, {type: "chestplate", armor: 2, durability: 60, texture: "armor/spider1_1.png"});
Item.createArmorItem("SpiderLeggings", "Штаны паука", {name: "spiderleggings"}, {type: "leggings", armor: 2, durability: 50, texture: "armor/spider2_2.png"});
Item.createArmorItem("SpiderBoots", "Ботинки паука", {name: "spiderboots"}, {type: "boots", armor: 2, durability: 45, texture: "armor/spider1_1.png"});

Recipes.addShaped({id: ItemID.SpiderHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.spideringot, 0]);

Recipes.addShaped({id: ItemID.SpiderChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.spideringot, 0]);

Recipes.addShaped({id: ItemID.SpiderLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.spideringot, 0]);

Recipes.addShaped({id: ItemID.SpiderBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.spideringot, 0]);

IDRegistry.genItemID("CreeperHelmet");
IDRegistry.genItemID("CreeperChestplate");
IDRegistry.genItemID("CreeperLeggings");
IDRegistry.genItemID("CreeperBoots");

Item.createArmorItem("CreeperHelmet", "Шлем крипера", {name: "nakohelmet"}, {type: "helmet", armor: 2, durability: 40, texture: "armor/nako1_1.png"});
Item.createArmorItem("CreeperChestplate", "Нагрудник крипера", {name: "nakochestplate"}, {type: "chestplate", armor: 2, durability: 80, texture: "armor/nako1_1.png"});
Item.createArmorItem("CreeperLeggings", "Штаны крипера", {name: "nakoleggings"}, {type: "leggings", armor: 2, durability: 70, texture: "armor/nako2_2.png"});
Item.createArmorItem("CreeperBoots", "Ботинки крипера", {name: "nakoboots"}, {type: "boots", armor: 2, durability: 65, texture: "armor/nako1_1.png"});

Recipes.addShaped({id: ItemID.CreeperHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.Creeper, 0]);

Recipes.addShaped({id: ItemID.CreeperChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.Creeper, 0]);

Recipes.addShaped({id: ItemID.CreeperLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.Creeper, 0]);

Recipes.addShaped({id: ItemID.CreeperBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.Creeper, 0]);

IDRegistry.genItemID("SprutHelmet");
IDRegistry.genItemID("SprutChestplate");
IDRegistry.genItemID("SprutLeggings");
IDRegistry.genItemID("SprutBoots");

Item.createArmorItem("SprutHelmet", "Шлем спрута", {name: "spruthelmet"}, {type: "helmet", armor: 2, durability: 40, texture: "armor/sprut1_1.png"});
Item.createArmorItem("SprutChestplate", "Нагрудник спрута", {name: "sprutchestplate"}, {type: "chestplate", armor: 2, durability: 80, texture: "armor/sprut1_1.png"});
Item.createArmorItem("SprutLeggings", "Штаны спрута", {name: "sprutleggings"}, {type: "leggings", armor: 2, durability: 70, texture: "armor/sprut2_2.png"});
Item.createArmorItem("SprutBoots", "Ботинки спрута", {name: "sprutboots"}, {type: "boots", armor: 2, durability: 65, texture: "armor/sprut1_1.png"});

Recipes.addShaped({id: ItemID.SprutHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
    ], ['x', ItemID.sprutingot, 0]);

Recipes.addShaped({id: ItemID.SprutChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.sprutingot, 0]);

Recipes.addShaped({id: ItemID.SprutLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.sprutingot, 0]);

Recipes.addShaped({id: ItemID.SprutBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.sprutingot, 0]);

IDRegistry.genItemID("SlimeHelmet");
IDRegistry.genItemID("SlimeChestplate");
IDRegistry.genItemID("SlimeLeggings");
IDRegistry.genItemID("SlimeBoots");

Item.createArmorItem("SlimeHelmet", "Шлем слизня", {name: "slimehelmet"}, {type: "helmet", armor: 6, durability: 130, texture: "armor/slime1_1.png"});
Item.createArmorItem("SlimeChestplate", "Нагрудник слизня", {name: "slimechestplate"}, {type: "chestplate", armor: 8, durability: 180, texture: "armor/slime1_1.png"});
Item.createArmorItem("SlimeLeggings", "Штаны слизня", {name: "slimeleggings"}, {type: "leggings", armor: 7, durability: 140, texture: "armor/slime2_2.png"});
Item.createArmorItem("SlimeBoots", "Ботинки слизня", {name: "slimeboots"}, {type: "boots", armor: 8, durability: 150, texture: "armor/slime1_1.png"});

Recipes.addShaped({id: ItemID.SlimeHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.Slimeingot, 0]);

Recipes.addShaped({id: ItemID.SlimeChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.Slimeingot, 0]);

Recipes.addShaped({id: ItemID.SlimeLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.Slimeingot, 0]);

Recipes.addShaped({id: ItemID.SlimeBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.Slimeingot, 0]);

IDRegistry.genItemID("OcelotHelmet");
IDRegistry.genItemID("OcelotChestplate");
IDRegistry.genItemID("OcelotLeggings");
IDRegistry.genItemID("OcelotBoots");

Item.createArmorItem("OcelotHelmet", "Шлем оцелота", {name: "ocelothelmet"}, {type: "helmet", armor: 2, durability: 40, texture: "armor/ocelot1_1.png"});
Item.createArmorItem("OcelotChestplate", "Нагрудник оцелота", {name: "ocelotchestplate"}, {type: "chestplate", armor: 2, durability: 80, texture: "armor/ocelot1_1.png"});
Item.createArmorItem("OcelotLeggings", "Штаны оцелота", {name: "ocelotleggings"}, {type: "leggings", armor: 2, durability: 70, texture: "armor/ocelot2_2.png"});
Item.createArmorItem("OcelotBoots", "Ботинки оцелота", {name: "ocelotboots"}, {type: "boots", armor: 2, durability: 65, texture: "armor/ocelot1_1.png"});

Recipes.addShaped({id: ItemID.OcelotHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
    ], ['x', ItemID.ocelotingot, 0]);

Recipes.addShaped({id: ItemID.OcelotChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ocelotingot, 0]);

Recipes.addShaped({id: ItemID.OcelotLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ocelotingot, 0]);

Recipes.addShaped({id: ItemID.OcelotBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.ocelotingot, 0]);


IDRegistry.genItemID("IfritHelmet");
IDRegistry.genItemID("IfritChestplate");
IDRegistry.genItemID("IfritLeggings");
IDRegistry.genItemID("IfritBoots");

Item.createArmorItem("IfritHelmet", "Шлем ифрита", {name: "ifrithelmet"}, {type: "helmet", armor: 2, durability: 70, texture: "armor/ifrit1_1.png"});
Item.createArmorItem("IfritChestplate", "Нагрудник ифрита", {name: "ifritchestplate"}, {type: "chestplate", armor: 2, durability: 150, texture: "armor/ifrit1_1.png"});
Item.createArmorItem("IfritLeggings", "Штаны ифрита", {name: "ifritleggings"}, {type: "leggings", armor: 2, durability: 120, texture: "armor/ifrit2_2.png"});
Item.createArmorItem("IfritBoots", "Ботинки ифрита", {name: "ifritboots"}, {type: "boots", armor: 2, durability: 100, texture: "armor/ifrit1_1.png"});

Recipes.addShaped({id: ItemID.IfritHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.ifritingot, 0]);

Recipes.addShaped({id: ItemID.IfritChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.ifritingot, 0]);

Recipes.addShaped({id: ItemID.IfritLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.ifritingot, 0]);

Recipes.addShaped({id: ItemID.IfritBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.ifritingot, 0]);

IDRegistry.genItemID("EndHelmet");
IDRegistry.genItemID("EndChestplate");
IDRegistry.genItemID("EndLeggings");
IDRegistry.genItemID("EndBoots");

Item.createArmorItem("EndHelmet", "Шлем эндермена", {name: "endhelmet"}, {type: "helmet", armor: 4, durability: 75, texture: "armor/end1_1.png"});
Item.createArmorItem("EndChestplate", "Нагрудник эндермена", {name: "endchestplate"}, {type: "chestplate", armor: 4, durability: 170, texture: "armor/end1_1.png"});
Item.createArmorItem("EndLeggings", "Штаны эндермена", {name: "endleggings"}, {type: "leggings", armor: 4, durability: 130, texture: "armor/end2_2.png"});
Item.createArmorItem("EndBoots", "Ботинки эндермена", {name: "endboots"}, {type: "boots", armor: 4, durability: 100, texture: "armor/end1_1.png"});

Recipes.addShaped({id: ItemID.EndHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.endingot, 0]);

Recipes.addShaped({id: ItemID.EndChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.endingot, 0]);

Recipes.addShaped({id: ItemID.EndLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.endingot, 0]);

Recipes.addShaped({id: ItemID.EndBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.endingot, 0]);

//armoreffect.js

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.IfritHelmet && chest.id == ItemID.IfritChestplate && legs.id == ItemID.IfritLeggings && boots.id == ItemID.IfritBoots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 25, 3);
   }
if (helmet.id == ItemID.SkeletHelmet && chest.id == ItemID.SpiderChestplate && legs.id == ItemID.SpiderLeggings && boots.id == ItemID.SpiderBoots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 5, 3);
   }
if (helmet.id == ItemID.CreeperHelmet && chest.id == ItemID.CreeperChestplate && legs.id == ItemID.CreeperLeggings && boots.id == ItemID.CreeperBoots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 25, 3);
   }
if (helmet.id == ItemID.EndHelmet && chest.id == ItemID.EndChestplate && legs.id == ItemID.EndLeggings && boots.id == ItemID.EndBoots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 15, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 25, 3);
    Entity.addEffect(Player.get(), Native.PotionEffect.healthBoost, 25, 3);
   }
    if (helmet.id == ItemID.SlimeHelmet && chest.id == ItemID.SlimeChestplate && legs.id == ItemID.SlimeLeggings && boots.id == ItemID.SlimeBoots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 5, 3);
   }
if (helmet.id == ItemID.OcelotHelmet && chest.id == ItemID.OcelotChestplate && legs.id == ItemID.OcelotLeggings && boots.id == ItemID.OcelotBoots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 10, 3);
   }
if (helmet.id == ItemID.SprutHelmet && chest.id == ItemID.SprutChestplate && legs.id == ItemID.SprutLeggings && boots.id == ItemID.SprutBoots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 10, 3);
   }
});

//blocks.js
var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 4,
 explosionres: 3
}, "stone");

IDRegistry.genBlockID("BZombie");
Block.createBlock("BZombie", [
    {name: "Блок зомби", texture: [["BZombie", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.BZombie, "stone");
Block.setDestroyLevel("BZombie", 2);

IDRegistry.genBlockID("BSkelet");
Block.createBlock("BSkelet", [
    {name: "Блок скелета", texture: [["BSkelet", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.BSkelet, "stone");
Block.setDestroyLevel("BSkelet", 2);

IDRegistry.genBlockID("BSpider");
Block.createBlock("BSpider", [
    {name: "Паучий блок", texture: [["BSpider", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.BSpider, "stone");
Block.setDestroyLevel("BSpider", 2);

IDRegistry.genBlockID("BCreeper");
Block.createBlock("BCreeper", [
    {name: "Блок крипера", texture: [["BCreeper", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.BCreeper, "stone");
Block.setDestroyLevel("BCreeper", 2);

IDRegistry.genBlockID("BSprut");
Block.createBlock("BSprut", [
    {name: "Блок спрута", texture: [["BSprut", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.BSprut, "stone");
Block.setDestroyLevel("BSprut", 2);

IDRegistry.genBlockID("BSlime");
Block.createBlock("BSlime", [
    {name: "Блок соплей", texture: [["BSlime", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.BSlime, "stone");
Block.setDestroyLevel("BSlime", 2);

IDRegistry.genBlockID("BOcelot");
Block.createBlock("BOcelot", [
    {name: "Кошачий блок", texture: [["BOcelot", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.BOcelot, "stone");
Block.setDestroyLevel("BOcelot", 2);

IDRegistry.genBlockID("BIfrit");
Block.createBlock("BIfrit", [
    {name: "Блок ифрита", texture: [["BIfrit", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.BIfrit, "stone");
Block.setDestroyLevel("BIfrit", 2);

IDRegistry.genBlockID("BEnd");
Block.createBlock("BEnd", [
    {name: "Блок края", texture: [["BEnd", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.BEnd, "stone");
Block.setDestroyLevel("BEnd", 2)

Recipes.addShaped({id: BlockID.BSprut, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
    ], ['x', ItemID.sprutingot, 0]);

Recipes.addShaped({id: BlockID.BOcelot, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
    ], ['x', ItemID.ocelotingot, 0]);

Recipes.addShaped({id: BlockID.BSlime, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Slimeingot, 0]);

Recipes.addShaped({id: BlockID.BCreeper, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.Creeper, 0]);

Recipes.addShaped({id: BlockID.BSpider, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.spideringot, 0]);

Recipes.addShaped({id: BlockID.BIfrit, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.ifritingot, 0]);

Recipes.addShaped({id: BlockID.BSkelet, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.skeletingot, 0]);

Recipes.addShaped({id: BlockID.BEnd, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.endingot, 0]);

Recipes.addShaped({id: BlockID.BZombie, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.zombieingot, 0]);

Recipes.addShaped({id: ItemID.sprutingot, count: 9, data: 0}, [
    " x "
    ], ['x', BlockID.BSprut, 0]);

Recipes.addShaped({id: ItemID.ocelotingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.BOcelot, 0]);

Recipes.addShaped({id: ItemID.Slimeingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.BSlime, 0]);

Recipes.addShaped({id: ItemID.Creeper, count: 9, data: 0}, [
    " x "
], ['x', BlockID.BCreeper, 0]);

Recipes.addShaped({id: ItemID.ifritingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.BIfrit, 0]);

Recipes.addShaped({id: ItemID.skeletingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.BSkelet, 0]);

Recipes.addShaped({id: ItemID.spideringot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.BSpider, 0]);

Recipes.addShaped({id: ItemID.endingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.BEnd, 0]);

Recipes.addShaped({id: ItemID.zombieingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.BZombie, 0]);

var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiTiyFurnace = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Mobs Furnace"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});

IDRegistry.genBlockID("MobsFurnace");
Block.createBlockWithRotation("MobsFurnace", [
    {name: "Mobs Furnace", texture: [["MobsFurnace3", 0], ["MobsFurnace4", 0], ["MobsFurnace2", 0], ["MobsFurnace", 0], ["MobsFurnace2", 0], ["MobsFurnace2", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.MobsFurnace, "stone");

    Recipes.addShaped({id: BlockID.MobsFurnace, count: 1, data: 0}, [
        "xxx",
        "aaa",
        "ses"
    ], ['x', ItemID.spideringot, 0, 'a', ItemID.Creeper, 0, 's', ItemID.skeletingot, 0, 'e', ItemID.zombieingot, 0]);

var MobsRecipes = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, {id: resultat id, count: 1, data: 0});

MobsRecipes.set(ItemID.spideringot, ItemID.spideringot, ItemID.spideringot, {
    id: ItemID.Spider, count: 1, data: 0
});
MobsRecipes.set(ItemID.zombieingot, ItemID.zombieingot, ItemID.zombieingot, {
    id: ItemID.zombie, count: 1, data: 0
});
MobsRecipes.set(ItemID.skeletingot, ItemID.skeletingot, ItemID.skeletingot, {
    id: ItemID.skelet, count: 1, data: 0
});
MobsRecipes.set(ItemID.Creeper, ItemID.Creeper, ItemID.Creeper, {
    id: ItemID.Nako, count: 1, data: 0
});
MobsRecipes.set(ItemID.ocelotingot, ItemID.ocelotingot, ItemID.ocelotingot, {
    id: ItemID.ocelota, count: 1, data: 0
});
MobsRecipes.set(ItemID.ifritingot, ItemID.ifritingot, ItemID.ifritingot, {
    id: ItemID.Ifrit, count: 1, data: 0
});
MobsRecipes.set(ItemID.endingot, ItemID.endingot, ItemID.endingot, {
    id: ItemID.enderman, count: 1, data: 0
});
MobsRecipes.set(ItemID.sprutingot, ItemID.sprutingot, ItemID.sprutingot, {
    id: ItemID.sprut, count: 1, data: 0
});
MobsRecipes.set(ItemID.Slimeingot, ItemID.Slimeingot, ItemID.Slimeingot, {
    id: 341, count: 1, data: 0
});
MobsRecipes.set(ItemID.zombieingot, 263, ItemID.zombieingot, {
    id: ItemID.skeletingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.skeletingot, 263, ItemID.skeletingot, {
    id: ItemID.spideringot, count: 1, data: 0
});
MobsRecipes.set(ItemID.spideringot, 265, ItemID.spideringot, {
    id: ItemID.Creeper, count: 1, data: 0
});
MobsRecipes.set(ItemID.Creeper, 265, ItemID.Creeper, {
    id: ItemID.sprutingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.sprutingot, 266, ItemID.sprutingot, {
    id: ItemID.ocelotingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.ocelotingot, 266, ItemID.ocelotingot, {
    id: ItemID.Slimeingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.Slimeingot, 264, ItemID.Slimeingot, {
    id: ItemID.ifritingot, count: 1, data: 0
});
MobsRecipes.set(ItemID.ifritingot, 264, ItemID.ifritingot, {
    id: ItemID.endingot, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.MobsFurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiTiyFurnace;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = MobsRecipes.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
        }
        return 0;
    }
});

//shuriken.js

IDRegistry.genItemID("shurikenzb");
Item.createThrowableItem("shurikenzb", "Сюрикен Зомби", {name:"shurikenzb"}, {stack:64});
IDRegistry.genItemID("shurikensk");
Item.createThrowableItem("shurikensk", "Сюрикен Скелета", {name:"shurikensk"}, {stack:64});
IDRegistry.genItemID("shurikensp");
Item.createThrowableItem("shurikensp", "Сюрикен Паука", {name:"shurikensp"}, {stack:64});
IDRegistry.genItemID("shurikencp");
Item.createThrowableItem("shurikencp", "Сюрикен Крипера", {name:"shurikencp"}, {stack:64});
IDRegistry.genItemID("shurikensq");
Item.createThrowableItem("shurikensq", "Сюрикен Спрута", {name:"shurikensq"}, {stack:64});
IDRegistry.genItemID("shurikensm");
Item.createThrowableItem("shurikensm", "Сюрикен Слизня", {name:"shurikensm"}, {stack:64});
IDRegistry.genItemID("shurikenot");
Item.createThrowableItem("shurikenot", "Сюрикен Оцелота", {name:"shurikenot"}, {stack:64});
IDRegistry.genItemID("shurikenif");
Item.createThrowableItem("shurikenif", "Сюрикен Ифрита", {name:"shurikenif"}, {stack:64});
IDRegistry.genItemID("shurikenen");
Item.createThrowableItem("shurikenen", "Сюрикен Эндермена", {name:"shurikenen"}, {stack:64});

Item.registerThrowableFunction("shurikencp", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 5);
} 
} 
);

Item.registerThrowableFunction("shurikenzb", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 3);
} 
} 
);

Item.registerThrowableFunction("shurikenen", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 10);
} 
} 
);

Item.registerThrowableFunction("shurikensp", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 5);
} 
} 
);

Item.registerThrowableFunction("shurikenif", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 10);
} 
} 
);

Item.registerThrowableFunction("shurikensk", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 3);
} 
} 
);

Item.registerThrowableFunction("shurikenot", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 8);
} 
} 
);

Item.registerThrowableFunction("shurikensm", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 8);
} 
} 
);

Item.registerThrowableFunction("shurikensq", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 8);
} 
} 
);

Recipes.addShaped({id: ItemID.shurikencp, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.scp, 0]);

Recipes.addShaped({id: ItemID.shurikensk, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.ssk, 0]);

Recipes.addShaped({id: ItemID.shurikensp, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.ssp, 0]);

Recipes.addShaped({id: ItemID.shurikenzb, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.szb, 0]);

Recipes.addShaped({id: ItemID.shurikenot, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.sot, 0]);

Recipes.addShaped({id: ItemID.shurikensm, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.ssm, 0]);

Recipes.addShaped({id: ItemID.shurikenif, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.sif, 0]);

Recipes.addShaped({id: ItemID.shurikenen, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.sen, 0]);

Recipes.addShaped({id: ItemID.shurikensq, count: 4, data: 0}, [
    " x ",
    "x x",
    " x "
], ['x', ItemID.ssq, 0]);

IDRegistry.genItemID("szb");
Item.createItem("szb", "Половина Сюрикен Зомби", {name: "szb", meta: 0}, {stack: 64});

IDRegistry.genItemID("ssk");
Item.createItem("ssk", "Половина Сюрикен Скелета", {name: "ssk", meta: 0}, {stack: 64});

IDRegistry.genItemID("ssp");
Item.createItem("ssp", "Половина Сюрикен Паука", {name: "ssp", meta: 0}, {stack: 64});

IDRegistry.genItemID("scp");
Item.createItem("scp", "Половина Сюрикен Крипера", {name: "scp", meta: 0}, {stack: 64});

IDRegistry.genItemID("ssq");
Item.createItem("ssq", "Половина Сюрикен Спрута", {name: "ssq", meta: 0}, {stack: 64});

IDRegistry.genItemID("ssm");
Item.createItem("ssm", "Половина Сюрикен Слизня", {name: "ssm", meta: 0}, {stack: 64});

IDRegistry.genItemID("sot");
Item.createItem("sot", "Половина Сюрикен Оцелота", {name: "sot", meta: 0}, {stack: 64});

IDRegistry.genItemID("sif");
Item.createItem("sif", "Половина Сюрикен Ифрита", {name: "sif", meta: 0}, {stack: 64});

IDRegistry.genItemID("sen");
Item.createItem("sen", "Половина Сюрикен Эндермена", {name: "sen", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.szb, count: 4, data: 0}, [
    " x "
], ['x', ItemID.zombieingot, 0]);

Recipes.addShaped({id: ItemID.ssk, count: 4, data: 0}, [
    " x "
], ['x', ItemID.skeletingot, 0]);

Recipes.addShaped({id: ItemID.ssp, count: 4, data: 0}, [
    " x "
], ['x', ItemID.spideringot, 0]);

Recipes.addShaped({id: ItemID.scp, count: 4, data: 0}, [
    " x "
], ['x', ItemID.Creeper, 0]);

Recipes.addShaped({id: ItemID.ssq, count: 4, data: 0}, [
    " x "
], ['x', ItemID.sprutingot, 0]);

Recipes.addShaped({id: ItemID.ssm, count: 4, data: 0}, [
    " x "
], ['x', ItemID.Slimeingot, 0]);

Recipes.addShaped({id: ItemID.sot, count: 4, data: 0}, [
    " x "
], ['x', ItemID.ocelotingot, 0]);

Recipes.addShaped({id: ItemID.sif, count: 4, data: 0}, [
    " x "
], ['x', ItemID.ifritingot, 0]);

Recipes.addShaped({id: ItemID.sen, count: 4, data: 0}, [
    " x "
], ['x', ItemID.endingot, 0]);

IDRegistry.genItemID("ghasthelmet");
IDRegistry.genItemID("ghastchestplate");
IDRegistry.genItemID("ghastleggings");
IDRegistry.genItemID("ghastboots");

Item.createArmorItem("ghasthelmet", "Шлем гаста", {name: "ghasthelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/ghastarmor.png"});
Item.createArmorItem("ghastchestplate", "Нагрудник гаста", {name: "ghastchestplate", meta: 0}, {type: "chestplate", armor: 4, durability: 750, texture: "armor/ghastarmor.png"});
Item.createArmorItem("ghastleggings", "Поножи гаста", {name: "ghastleggings", meta: 0}, {type: "leggings", armor: 4, durability: 700, texture: "armor/ghastarmor0.png"});
Item.createArmorItem("ghastboots", "Ботинки гаста", {name: "ghastboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/ghastarmor.png"});

IDRegistry.genItemID("ghastingot");
Item.createItem("ghastingot", "Слиток гаста", {name: "ghastingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("ghastess");
Item.createItem("ghastess", "Эссенция гаста", {name: "ghastess", meta: 0}, {stack: 64});

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (chest.id == ItemID.ghastchestplate) {
    Player.setFlyingEnabled(true); 
    }
    if (helmet.id == ItemID.ghasthelmet) {
   Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 2, 100)
 }
 if (legs.id == ItemID.ghastleggings) {
   Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 10, 100)
 }
 if (boots.id == ItemID.ghastboots) {
   Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
 }
 });
 
 IDRegistry.genItemID("forestsword");
Item.createItem("forestsword", "Меч лесов", {name: "forestsword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("forest", {durability: 3400, level: 4, efficiency: 8, damage: 7, enchantability: 14});
ToolAPI.setTool(ItemID.forestsword, "forest", ToolType.sword);

Recipes.addShaped({id: ItemID.forestsword, count: 1, data: 0}, [ "ab ", "cd ", " e "], ['a', 5, 0, 'b', 5, 1, 'c', 5, 2, 'd', 5, 3, 'e', 280, 0]);

IDRegistry.genItemID("icestaff");
Item.createItem("icestaff", "Ледяной посох", {name: "icestaff", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.icestaff)
{
World.setBlock (coords.relative.x, coords.relative.y, coords.relative.z, 79, 0);
}
});

IDRegistry.genItemID("kingsword");
Item.createItem("kingsword", "Золотой меч короля", {name: "kingsword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("kingsword", {durability: 3400, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.kingsword, "kingsword", ToolType.sword);

Recipes.addShaped({id: ItemID.kingsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 266, 0, 'b', 264, 0]);

Recipes.addShaped({id: ItemID.icestaff, count: 1, data: 0}, [ "  b", " a ", "a  "], ['a', 79, 0, 'b', 174, 0]);

IDRegistry.genItemID("fireshuriken");
Item.createThrowableItem("fireshuriken", "Огненный сюрикен", {name:"fireshuriken"}, {stack:64});

Item.registerThrowableFunction("fireshuriken", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 0);
Entity.addEffect(targetEntity, 20, 0, 999999, true, true); 
} 
} 
);

IDRegistry.genItemID("eyespr");
Item.createItem("eyespr", "Глаз справедливости", {name: "eyespr", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.fireshuriken, count: 2, data: 0}, [ " a ", "aba", " a "], ['a', 280, 0, 'b', 369, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.eyespr)
{
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 600)
}
});

Recipes.addShaped({id: ItemID.eyespr, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', ItemID.netheroil, 0, 'b', ItemID.lifeingot, 0]);

IDRegistry.genItemID("bottlewttl");
Item.createItem("bottlewttl", "Бутылкк", {name: "bottlewttl", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.fireshuriken, count: 2, data: 0}, [ "a a", "bab", " b "], ['a', 5, 0, 'b', 20, 0]);

IDRegistry.genItemID("el");
Item.createItem("el", "Эль", {name: "el", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.el, count: 2, data: 0}, [ " a ", "bcb", " d "], ['a', 351, 3, 'b', 353, 0, 'c', 361, 0, 'd', ItemID.bottlewttl, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.el)
{
Entity.addEffect(Player.get(), Native.PotionEffect.nausea, 1, 300)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 300)
Player.addItemToInventory (ItemID.bottlewttl, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("forseel");
Item.createItem("forseel", "Крепкий эль", {name: "forseel", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.el, count: 2, data: 0}, [ " a ", "bcb", "ada"], ['a', BlockID.sakuraleaves, 0, 'b', 331, 0, 'c', 296, 0, 'd', ItemID.el, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.forseel)
{
Entity.addEffect(Player.get(), Native.PotionEffect.nausea, 1, 900)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 5, 900)
Player.addItemToInventory (ItemID.bottlewttl, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("infernorome");
Item.createItem("infernorome", "Инферно ром", {name: "infernorome", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.infernorome, count: 2, data: 0}, [ "   ", " a ", " b "], ['a', ItemID.netheroil, 0, 'b', ItemID.forseel, 0]);

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.infernorome)
{

Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 25, 2700)
Player.addItemToInventory (ItemID.bottlewttl, 1);
Player.decreaseCarriedItem (1);
}
});

IDRegistry.genItemID("poisonousshuriken");
Item.createThrowableItem("poisonousshuriken", "Отравляющий сюрикен", {name:"poisonousshuriken"}, {stack:64});

Item.registerThrowableFunction("poisonousshuriken", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 0);
Entity.addEffect(targetEntity, 19, 0, 100, true, true); 
} 
} 
);

Recipes.addShaped({id: ItemID.poisonousshuriken, count: 2, data: 0}, [ " a ", "abc", " c "], ['a', 375, 0, 'b', 280, 0, 'c', ItemID.poison, 0]);

IDRegistry.genItemID("carrotsword");
Item.createItem("carrotsword", "Моpковный меч", {name: "carrotswords", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("carrot", {durability: 3400, level: 4, efficiency: 8, damage: 4, enchantability: 14});
ToolAPI.setTool(ItemID.carrotsword, "carrot", ToolType.sword);

Recipes.addShaped({id: ItemID.carrotsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', 391, 0, 'b', 280, 0]);

IDRegistry.genBlockID("seedfurnace");
Block.createBlock("seedfurnace", [{name: "Печь садовода", texture: [["seedfurnace", 0], ["seedfurnace", 0], ["seedfurnace", 0], ["seedfurnace", 0], ["seedfurnace", 0], ["seedfurnace", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.fire, count: 1, data: 0}, [ "aba", "bcb", "aba"], ['a', BlockID.sakura, 0, 'b', 296, 0, 'c', 61, 0]);

var guiSeedieus = new UI.StandartWindow({ 
standart: { 
header: {text: {text: "Печь садовода"}}, 
inventory: {standart: true}, 
background: {standart: true} 
}, 
 
drawing: [ 
{type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2}, 
], 
 
elements: { 
"progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2}, 
"slotSource": {type: "slot", x: 472, y: 242}, 
"slotResult": {type: "slot", x: 625, y: 242} 
} 
}); 
 
TileEntity.registerPrototype(BlockID.seedfurnace, { 
 
getGuiScreen: function(){ 
return guiSeedieus; 
}, 
 
addRecipes: function (source, result){ 
 var slotSource = this.container.getSlot("slotSource"); 
 var slotResult = this.container.getSlot("slotResult"); 
 if ((slotSource.id === source.id) && (slotSource.data === source.data)){ 
 slotSource.count--; 
   slotResult.id = result.id; 
   slotResult.count = result.count; 
   slotResult.data = result.data; 
 } 
}, 
 
tick: function(){ 
	
 this.addRecipes({id: ItemID.soya, data: 0},{id: 295, data: 0, count: 1}); 
 this.container.validateAll(); 
 
 this.addRecipes({id: ItemID.vasabi, data: 0},{id: 361, data: 0, count: 1}); 
 this.container.validateAll(); 
 
 this.addRecipes({id: ItemID.daykon, data: 0},{id: 362, data: 0, count: 1}); 
 this.container.validateAll(); 
 
 this.addRecipes({id: ItemID.perilla, data: 0},{id: 391, data: 0, count: 1}); 
 this.container.validateAll(); 
 
 this.addRecipes({id: ItemID.rice, data: 0},{id: 392, data: 0, count: 1}); 
 this.container.validateAll(); 
 
 }
});

IDRegistry.genItemID("spiderhelm");
IDRegistry.genItemID("spiderchest");
IDRegistry.genItemID("spiderlegss");
IDRegistry.genItemID("spiderboot");

Item.createArmorItem("spiderhelm", "Паучий шлем", {name: "spiderhelm", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/sparm.png"});
Item.createArmorItem("spiderchest", "Паучий нагрудник", {name: "spiderchest", meta: 0}, {type: "chestplate", armor: 4, durability: 750, texture: "armor/sparm.png"});
Item.createArmorItem("spiderlegss", "Паучие поножи", {name: "spiderlegss", meta: 0}, {type: "leggings", armor: 4, durability: 700, texture: "armor/sparm0.png"});
Item.createArmorItem("spiderboot", "Паучие ботинки", {name: "spiderboot", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/sparm.png"});

Recipes.addShaped({id: ItemID.spiderhelm, count: 1, data: 0}, [ "aba", "b b", "   "], ['a', 334, 0, 'b', 30, 0]);
Recipes.addShaped({id: ItemID.spiderchest, count: 1, data: 0}, [ "a a", "bab", "aba"], ['a', 334, 0, 'b', 30, 0]);
Recipes.addShaped({id: ItemID.spiderlegs, count: 1, data: 0}, [ "aba", "b b", "a a"], ['a', 334, 0, 'b', 30, 0]);
Recipes.addShaped({id: ItemID.spiderboot, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', 334, 0, 'b', 30, 0]);

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.spiderhelm) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 5, 100)
    }
    if (chest.id == ItemID.spiderchest) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 5, 100)
    }
    if (legs.id == ItemID.spiderlegs) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 5, 100)
    }
    if (boots.id == ItemID.spiderboot) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 5, 100)
    }
 });
 
 IDRegistry.genItemID("spiderswordopyat");
Item.createItem("spiderswordopyat", "Паучий клинок", {name: "spiderswordopyat", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("spiderswordopyat", {durability: 3400, level: 4, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.spiderswordopyat, "spiderswordopyat", ToolType.sword);

Recipes.addShaped({id: ItemID.spiderswordopyat, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', 334, 0, 'b', 30, 0, 'c', 280, 0]);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.spiderswordopyat){ 
Entity.addEffect(victim, 19, 1, 100, true, true); 
}
});

IDRegistry.genItemID("darkironpickaxe");

Item.createItem("darkironpickaxe", "Йенериумная кирка", {name: "darkironpickaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("darkiron", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});

ToolAPI.setTool(ItemID.darkironpickaxe, "darkiron", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.darkironpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', 265, 0, 'b', ItemID.darkcane, 0]);

IDRegistry.genBlockID("lazuliworkbench"); 
  Block.createBlockWithRotation("lazuliworkbench", [{name: "Лазуритовый верстак", texture: [["lazuliworkbenchtop", 0], ["lazuliworkbenchtop", 0], ["lazuliworkbench", 0], ["lazuliworkbench", 0], ["lazuliworkbench", 0], ["lazuliworkbench", 0]], inCreative: true}]);
  
  Recipes.addShaped({id: BlockID.lazuliworkbench, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', 351, 4, 'b', 58, 0]);
  
  var FURNACE_FUEL_MAP = {    5: 300,     6: 100,     17: 300,    263: 1600,  280: 100,   268: 200,   269: 200,   270: 200,   271: 200,   85: 300,    107: 300,   134: 300,   135: 300,   158: 150,   162: 300,   163: 300,   164: 300,   184: 300,   185: 300,   186: 300,   187: 300,   53: 300,    54: 300,    58: 300 };

var guiLazulya = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Лазуритовый верстак"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 246, bitmap: "furnace_bar_background", scale: 3.2},
        {type: "bitmap", x: 450, y: 250, bitmap: "fire_background", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 246, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 250, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
        "slotSource1": {type: "slot", x: 379, y: 175},
        "slotSource2": {type: "slot", x: 441, y: 175},
        "slotSource3": {type: "slot", x: 503, y: 175},
        "slotFuel": {type: "slot", x: 441, y: 312},
        "slotResult": {type: "slot", x: 625, y: 242},
    }
});

var Lazulya = {
    recipes: {},
  
   set: function(abdulla4, abdulla5, abdulla6, result){
      this.recipes[JSON.stringify([abdulla4, abdulla5, abdulla6])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla4, abdulla5, abdulla6){
     return this.recipes[JSON.stringify([abdulla4, abdulla5, abdulla6])];
   }
};

Lazulya.set(ItemID.essfire, ItemID.esswater, ItemID.essevil, {
    id: 263, count: 1, data: 0
});

Lazulya.set(ItemID.essarctic, ItemID.essdesert, ItemID.esslightningbolt, {
    id: 264, count: 1, data: 0
});

Lazulya.set(ItemID.essfire, ItemID.essboli, ItemID.essevil, {
    id: 265, count: 1, data: 0
});

Lazulya.set(ItemID.essarctic, ItemID.essboli, ItemID.essevil, {
    id: 266, count: 1, data: 0
});

Lazulya.set(ItemID.essfire, ItemID.essboli, ItemID.esswater, {
    id: 351, count: 1, data: 4
});

Lazulya.set(ItemID.essdesert, ItemID.essdesert, ItemID.essdesert, {
    id: 388, count: 1, data: 0
});

/*THE END*/

TileEntity.registerPrototype(BlockID.lazuliworkbench, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return guiLazulya;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
        var resultSlot = this.container.getSlot("slotResult");
        let f = Lazulya.get(source1.id,source2.id,source3.id);
        if(this.data.burn > 0){
        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0) && this.data.progress ++ >= 150){
            source1.count--;
            source2.count--;
            source3.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
            }
        }
        else {
            this.data.progress = 0;
        }
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(f){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
        }
        return 0;
    }
});

IDRegistry.genItemID("shamanstaff");
Item.createItem("shamanstaff", "Посох шамана", {name: "shamanstaff", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.shamanstaff, count: 1, data: 0}, [ " ca", " bc", "b  "], ['a', 397, 0, 'b', 280, 0, 'c', 266, 0]);

IDRegistry.genItemID("darkbonesword");
Item.createItem("darkbonesword", "Меч темной кости", {name: "darkbonesword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("darkbone", {durability: 3400, level: 4, efficiency: 8, damage: 14, enchantability: 14});
ToolAPI.setTool(ItemID.darkbonesword, "darkbone", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.darkbonesword){ 
Entity.addEffect(victim, 20, 1, 100, true, true); 
}
});

Callback.addCallback("EntityDeath", function(entity){
if(Entity.getType(entity) == 34){
   var coords = Entity.getPosition(entity);
     var soul = parseInt(Math.random() * 0.04);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.darkbonesword, soul);
}
});

IDRegistry.genBlockID("emeraldwood");
Block.createBlock("emeraldwood", [{name: "Изумнудное дерево", texture: [["emeraldwoodtop", 0], ["emeraldwoodtop", 0], ["emeraldwood", 0], ["emeraldwood", 0], ["emeraldwood", 0], ["emeraldwood", 0]], inCreative: true}]);

IDRegistry.genBlockID("emeraldleaves");
Block.createBlock("emeraldleaves", [{name: "Изумрудная листва", texture: [["emeraldleaves", 0], ["emeraldleaves", 0], ["emeraldleaves", 0], ["emeraldleaves", 0], ["emeraldleaves", 0], ["emeraldleaves", 0]], inCreative: true}]);

IDRegistry.genBlockID("emeraldplanks");
Block.createBlock("emeraldplanks", [{name: "Изумрудные доски", texture: [["emeraldplanks", 0], ["emeraldplanks", 0], ["emeraldplanks", 0], ["emeraldplanks", 0], ["emeraldplanks", 0], ["emeraldplanks", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.emeraldplanks, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.emeraldwood, 0]);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.emeraldwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.emeraldwood, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.emeraldwood, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.emeraldwood, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.emeraldwood, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.emeraldleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, BlockID.emeraldleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.emeraldleaves, 0);
              World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.emeraldleaves, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.emeraldleaves, 0);
              World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.emeraldleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.emeraldleaves, 0);
}}});

IDRegistry.genItemID("darkghostsword");
Item.createItem("darkghostsword", "Меч темного призрака", {name: "darkghostsword", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("darkghostsword", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.darkghostsword, "darkghostsword", ToolType.sword);

Recipes.addShaped({id: ItemID.darkghostsword, count: 1, data: 0}, [ " a ", " a ", " a "], ['a', ItemID.essarctic, 0]);

Recipes.addFurnace(BlockID.emeraldwood, 388, 1);

ModAPI.registerAPI("WaysAPI", {
});

IDRegistry.genItemID("arcticsword");
IDRegistry.genItemID("arcticpickaxe");
IDRegistry.genItemID("arcticaxe");
IDRegistry.genItemID("arcticshovel");
Item.createItem("arcticsword", "Арктический меч", {name: "essarcticsword", meta: 0}, {stack: 1});
Item.createItem("arcticpickaxe", "Арктическая кирка", {name: "essarcticpickaxe", meta: 0}, {stack: 1});
Item.createItem("arcticaxe", "Арктический топор", {name: "essarcticaxe", meta: 0}, {stack: 1});
Item.createItem("arcticshovel", "Арктическая лопата", {name: "essarcticshovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("bolisword");
IDRegistry.genItemID("bolipickaxe");
IDRegistry.genItemID("boliaxe");
IDRegistry.genItemID("bolishovel");
Item.createItem("bolisword", "Меч боли", {name: "essbolisword", meta: 0}, {stack: 1});
Item.createItem("bolipickaxe", "Кирка боли", {name: "essbolipickaxe", meta: 0}, {stack: 1});
Item.createItem("boliaxe", "Топор боли", {name: "essboliaxe", meta: 0}, {stack: 1});
Item.createItem("bolishovel", "Лопата боли", {name: "essbolishovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("desertsworda");
IDRegistry.genItemID("desertpickaxe");
IDRegistry.genItemID("desertaxe");
IDRegistry.genItemID("desertshovel");
Item.createItem("desertsworda", "Пустынный меч", {name: "essdesertsword", meta: 0}, {stack: 1});
Item.createItem("desertpickaxe", "Пустынная кирка", {name: "essdesertpickaxe", meta: 0}, {stack: 1});
Item.createItem("desertaxe", "Пустынный топор", {name: "essdesertaxe", meta: 0}, {stack: 1});
Item.createItem("desertshovel", "Пустынная лопата", {name: "essdesertshovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("earthsword");
IDRegistry.genItemID("earthpickaxe");
IDRegistry.genItemID("earthaxe");
IDRegistry.genItemID("earthshovel");
Item.createItem("earthsword", "Природный меч", {name: "essearthsword", meta: 0}, {stack: 1});
Item.createItem("earthpickaxe", "Природная кирка", {name: "essearthpickaxe", meta: 0}, {stack: 1});
Item.createItem("earthaxe", "Природный топор", {name: "essearthaxe", meta: 0}, {stack: 1});
Item.createItem("earthshovel", "Природная лопата", {name: "essearthshovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("evilsword");
IDRegistry.genItemID("evilpickaxe");
IDRegistry.genItemID("evilaxe");
IDRegistry.genItemID("evilshovel");
Item.createItem("evilsword", "Меч зла", {name: "essevilsword", meta: 0}, {stack: 1});
Item.createItem("evilpickaxe", "Кирка зла", {name: "essevilpickaxe", meta: 0}, {stack: 1});
Item.createItem("evilaxe", "Топор зла", {name: "essevilaxe", meta: 0}, {stack: 1});
Item.createItem("evilshovel", "Лопата зла", {name: "essevilshovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("firesworda");
IDRegistry.genItemID("firepickaxe");
IDRegistry.genItemID("fireaxe");
IDRegistry.genItemID("fireshovel");
Item.createItem("firesworda", "Огненный меч", {name: "essfiresword", meta: 0}, {stack: 1});
Item.createItem("firepickaxe", "Огненная кирка", {name: "essfirepickaxe", meta: 0}, {stack: 1});
Item.createItem("fireaxe", "Огненный топор", {name: "essfireaxe", meta: 0}, {stack: 1});
Item.createItem("fireshovel", "Огненная лопата", {name: "essfireshovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("lightningboltsword");
IDRegistry.genItemID("lightningboltpickaxe");
IDRegistry.genItemID("lightningboltaxe");
IDRegistry.genItemID("lightningboltshovel");
Item.createItem("lightningboltsword", "Меч молнии", {name: "esslightningboltsword", meta: 0}, {stack: 1});
Item.createItem("lightningboltpickaxe", "Кирка молнии", {name: "esslightningboltpickaxe", meta: 0}, {stack: 1});
Item.createItem("lightningboltaxe", "Топор молнии", {name: "esslightningboltaxe", meta: 0}, {stack: 1});
Item.createItem("lightningboltshovel", "Лопата молнии", {name: "esslightningboltshovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("watersword");
IDRegistry.genItemID("waterpickaxe");
IDRegistry.genItemID("wateraxe");
IDRegistry.genItemID("watershovel");
Item.createItem("watersword", "Водяной меч", {name: "esswatersword", meta: 0}, {stack: 1});
Item.createItem("waterpickaxe", "Водяная кирка", {name: "esswaterpickaxe", meta: 0}, {stack: 1});
Item.createItem("wateraxe", "Водяной топор", {name: "esswateraxe", meta: 0}, {stack: 1});
Item.createItem("watershovel", "Водяная лопата", {name: "esswatershovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("arctic", {durability: 3400, level: 4, efficiency: 8, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.arcticsword, "arctic", ToolType.sword);
ToolAPI.setTool(ItemID.arcticpickaxe, "arctic", ToolType.pickaxe);
ToolAPI.setTool(ItemID.arcticaxe, "arctic", ToolType.axe);
ToolAPI.setTool(ItemID.arcticshovel, "arctic", ToolType.shovel);

ToolAPI.addToolMaterial("boli", {durability: 3400, level: 4, efficiency: 8, damage: 5, enchantability: 14});
ToolAPI.setTool(ItemID.bolisword, "boli", ToolType.sword);
ToolAPI.setTool(ItemID.bolipickaxe, "boli", ToolType.pickaxe);
ToolAPI.setTool(ItemID.boliaxe, "boli", ToolType.axe);
ToolAPI.setTool(ItemID.bolishovel, "boli", ToolType.shovel);

ToolAPI.addToolMaterial("desert", {durability: 3400, level: 4, efficiency: 8, damage: 13, enchantability: 14});
ToolAPI.setTool(ItemID.desertsworda, "desert", ToolType.sword);
ToolAPI.setTool(ItemID.desertpickaxe, "desert", ToolType.pickaxe);
ToolAPI.setTool(ItemID.desertaxe, "desert", ToolType.axe);
ToolAPI.setTool(ItemID.desertshovel, "desert", ToolType.shovel);

ToolAPI.addToolMaterial("eartha", {durability: 3400, level: 4, efficiency: 8, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.earthsword, "eartha", ToolType.sword);
ToolAPI.setTool(ItemID.earthpickaxe, "eartha", ToolType.pickaxe);
ToolAPI.setTool(ItemID.earthaxe, "eartha", ToolType.axe);
ToolAPI.setTool(ItemID.earthshovel, "eartha", ToolType.shovel);

ToolAPI.addToolMaterial("evil", {durability: 3400, level: 4, efficiency: 8, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.evilsword, "evil", ToolType.sword);
ToolAPI.setTool(ItemID.evilpickaxe, "evil", ToolType.pickaxe);
ToolAPI.setTool(ItemID.evilaxe, "evil", ToolType.axe);
ToolAPI.setTool(ItemID.evilshovel, "evil", ToolType.shovel);

ToolAPI.addToolMaterial("fire", {durability: 3400, level: 4, efficiency: 8, damage: 1888, enchantability: 14});
ToolAPI.setTool(ItemID.firesworda, "fire", ToolType.sword);
ToolAPI.setTool(ItemID.firepickaxe, "fire", ToolType.pickaxe);
ToolAPI.setTool(ItemID.fireaxe, "fire", ToolType.axe);
ToolAPI.setTool(ItemID.fireshovel, "fire", ToolType.shovel);

ToolAPI.addToolMaterial("lightningbolt", {durability: 3400, level: 4, efficiency: 11, damage: 1888, enchantability: 14});
ToolAPI.setTool(ItemID.lightningboltsword, "lightningbolt", ToolType.sword);
ToolAPI.setTool(ItemID.lightningboltpickaxe, "lightningbolt", ToolType.pickaxe);
ToolAPI.setTool(ItemID.lightningboltaxe, "lightningbolt", ToolType.axe);
ToolAPI.setTool(ItemID.lightningboltshovel, "lightningbolt", ToolType.shovel);

ToolAPI.addToolMaterial("water", {durability: 3400, level: 4, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.watersword, "water", ToolType.sword);
ToolAPI.setTool(ItemID.waterpickaxe, "water", ToolType.pickaxe);
ToolAPI.setTool(ItemID.wateraxe, "water", ToolType.axe);
ToolAPI.setTool(ItemID.watershovel, "water", ToolType.shovel);

IDRegistry.genItemID("essarctichelmet");
IDRegistry.genItemID("essarcticchestplate");
IDRegistry.genItemID("essarcticleggings");
IDRegistry.genItemID("essarcticboots");
Item.createArmorItem("essarctichelmet", "Арктический шлем", {name: "essarctichelmet", meta: 0}, {type: "helmet", armor: 6, durability: 650, texture: "armor/a.png"});
Item.createArmorItem("essarcticchestplate", "Арктический нагрудник", {name: "essarcticchestplate", meta: 0}, {type: "chestplate", armor: 7, durability: 750, texture: "armor/a.png"});
Item.createArmorItem("essarcticleggings", "Арктические поножи", {name: "essarcticleggings", meta: 0}, {type: "leggings", armor: 6, durability: 700, texture: "armor/a0.png"});
Item.createArmorItem("essarcticboots", "Арктические ботинки", {name: "essarcticboots", meta: 0}, {type: "boots", armor: 6, durability: 600, texture: "armor/a.png"});
Recipes.addShaped({id: ItemID.arcticsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.essarctic, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.arcticpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.essarctic, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.arcticaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.essarctic, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.arcticshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.essarctic, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.essarctichelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.essarctic, 0]);
Recipes.addShaped({id: ItemID.essarcticchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.essarctic, 0]);
Recipes.addShaped({id: ItemID.essarcticleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.essarctic, 0]);
Recipes.addShaped({id: ItemID.essarcticboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.essarctic, 0]);

IDRegistry.genItemID("essbolihelmet");
IDRegistry.genItemID("essbolichestplate");
IDRegistry.genItemID("essbolileggings");
IDRegistry.genItemID("essboliboots");
Item.createArmorItem("essbolihelmet", "Шлем боли", {name: "essbolihelmet", meta: 0}, {type: "helmet", armor: 1, durability: 650, texture: "armor/essboliarmor.png"});
Item.createArmorItem("essbolichestplate", "Нагрудник боли", {name: "essbolichestplate", meta: 0}, {type: "chestplate", armor: 2, durability: 750, texture: "armor/essboliarmor.png"});
Item.createArmorItem("essbolileggings", "Поножи боли", {name: "essbolileggings", meta: 0}, {type: "leggings", armor: 1, durability: 700, texture: "armor/essboliarmor0.png"});
Item.createArmorItem("essboliboots", "Ботинки боли", {name: "essboliboots", meta: 0}, {type: "boots", armor: 1, durability: 600, texture: "armor/essboliarmor.png"});
Recipes.addShaped({id: ItemID.bolisword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.essboli, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.bolipickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.essboli, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.boliaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.essboli, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.bolishovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.essboli, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.essbolihelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.essboli, 0]);
Recipes.addShaped({id: ItemID.essbolichestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.essboli, 0]);
Recipes.addShaped({id: ItemID.essbolileggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.essboli, 0]);
Recipes.addShaped({id: ItemID.essboliboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.essboli, 0]);

IDRegistry.genItemID("essdeserthelmet");
IDRegistry.genItemID("essdesertchestplate");
IDRegistry.genItemID("essdesertleggings");
IDRegistry.genItemID("essdesertboots");
Item.createArmorItem("essdeserthelmet", "Пустынный шлем", {name: "essdeserthelmet", meta: 0}, {type: "helmet", armor: 7, durability: 650, texture: "armor/essdesertarmor.png"});
Item.createArmorItem("essdesertchestplate", "Пустынный нагрудник", {name: "essdesertchestplate", meta: 0}, {type: "chestplate", armor: 8, durability: 750, texture: "armor/essdesertarmor.png"});
Item.createArmorItem("essdesertleggings", "Пустынные поножи", {name: "essdesertleggings", meta: 0}, {type: "leggings", armor: 7, durability: 700, texture: "armor/essdesertarmor0.png"});
Item.createArmorItem("essdesertboots", "Пустынные ботинки", {name: "essdesertboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/essdesertarmor.png"});
Recipes.addShaped({id: ItemID.desertsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.essdesert, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.desertpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.essdesert, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.desertaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.essdesert, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.desertshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.essdesert, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.essdeserthelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.essdesert, 0]);
Recipes.addShaped({id: ItemID.essdesertchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.essdesert, 0]);
Recipes.addShaped({id: ItemID.essdesertleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.essdesert, 0]);
Recipes.addShaped({id: ItemID.essdesertboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.essdesert, 0]);

IDRegistry.genItemID("essearthhelmet");
IDRegistry.genItemID("essearthchestplate");
IDRegistry.genItemID("essearthleggings");
IDRegistry.genItemID("essearthboots");
Item.createArmorItem("essearthhelmet", "Природный шлем", {name: "essearthhelmet", meta: 0}, {type: "helmet", armor: 2, durability: 650, texture: "armor/esseartharmor.png"});
Item.createArmorItem("essearthchestplate", "Природный нагрудник", {name: "essearthchestplate", meta: 0}, {type: "chestplate", armor: 3, durability: 750, texture: "armor/esseartharmor.png"});
Item.createArmorItem("essearthleggings", "Природные поножи", {name: "essearthleggings", meta: 0}, {type: "leggings", armor: 2, durability: 700, texture: "armor/esseartharmor0.png"});
Item.createArmorItem("essearthboots", "Природные ботинки", {name: "essearthboots", meta: 0}, {type: "boots", armor: 2, durability: 600, texture: "armor/esseartharmor.png"});
Recipes.addShaped({id: ItemID.earthsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.essearth, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.earthpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.essearth, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.earthaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.essearth, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.earthshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.essearth, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.essearthhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.essearth, 0]);
Recipes.addShaped({id: ItemID.essearthchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.essearth, 0]);
Recipes.addShaped({id: ItemID.essearthleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.essearth, 0]);
Recipes.addShaped({id: ItemID.essearthboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.essearth, 0]);

IDRegistry.genItemID("essevilhelmet");
IDRegistry.genItemID("essevilchestplate");
IDRegistry.genItemID("essevilleggings");
IDRegistry.genItemID("essevilboots");
Item.createArmorItem("essevilhelmet", "Шлем зла", {name: "essevilhelmet", meta: 0}, {type: "helmet", armor: 3, durability: 650, texture: "armor/essevilarmor.png"});
Item.createArmorItem("essevilchestplate", "Нагрудник зла", {name: "essevilchestplate", meta: 0}, {type: "chestplate", armor: 4, durability: 750, texture: "armor/essevilarmor.png"});
Item.createArmorItem("essevilleggings", "Поножи зла", {name: "essevilleggings", meta: 0}, {type: "leggings", armor: 3, durability: 700, texture: "armor/essevilarmor0.png"});
Item.createArmorItem("essevilboots", "Ботинки зла", {name: "essevilboots", meta: 0}, {type: "boots", armor: 3, durability: 600, texture: "armor/essevilarmor.png"});
Recipes.addShaped({id: ItemID.evilsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.essevil, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.evilpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.essevil, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.evilaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.essevil, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.evilshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.essevil, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.essevilhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.essevil, 0]);
Recipes.addShaped({id: ItemID.essevilchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.essevil, 0]);
Recipes.addShaped({id: ItemID.essevilleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.essevil, 0]);
Recipes.addShaped({id: ItemID.essevilboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.essevil, 0]);

IDRegistry.genItemID("essfirehelmet");
IDRegistry.genItemID("essfirechestplate");
IDRegistry.genItemID("essfireleggings");
IDRegistry.genItemID("essfireboots");
Item.createArmorItem("essfirehelmet", "Огненный шлем", {name: "essfirehelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/essfirearmor.png"});
Item.createArmorItem("essfirechestplate", "Огненный нагрудник", {name: "essfirechestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 750, texture: "armor/essfirearmor.png"});
Item.createArmorItem("essfireleggings", "Огненные поножи", {name: "essfireleggings", meta: 0}, {type: "leggings", armor: 4, durability: 700, texture: "armor/essfirearmor0.png"});
Item.createArmorItem("essfireboots", "Огненные ботинки", {name: "essfireboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/essfirearmor.png"});
Recipes.addShaped({id: ItemID.firesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.essfire, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.firepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.essfire, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.fireaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.essfire, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.fireshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.essfire, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.essfirehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.essfire, 0]);
Recipes.addShaped({id: ItemID.essfirechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.essfire, 0]);
Recipes.addShaped({id: ItemID.essfireleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.essfire, 0]);
Recipes.addShaped({id: ItemID.essfireboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.essfire, 0]);

IDRegistry.genItemID("esslightningbolthelmet");
IDRegistry.genItemID("esslightningboltchestplate");
IDRegistry.genItemID("esslightningboltleggings");
IDRegistry.genItemID("esslightningboltboots");
Item.createArmorItem("esslightningbolthelmet", "Шлем молнии", {name: "esslightningbolthelmet", meta: 0}, {type: "helmet", armor: 5, durability: 650, texture: "armor/esslightningboltarmor.png"});
Item.createArmorItem("esslightningboltchestplate", "Нагрудник молнии", {name: "esslightningboltchestplate", meta: 0}, {type: "chestplate", armor: 6, durability: 750, texture: "armor/esslightningboltarmor.png"});
Item.createArmorItem("esslightningboltleggings", "Поножи молнии", {name: "esslightningboltleggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/esslightningboltarmor0.png"});
Item.createArmorItem("esslightningboltboots", "Ботинки молнии", {name: "esslightningboltboots", meta: 0}, {type: "boots", armor: 5, durability: 600, texture: "armor/esslightningboltarmor.png"});
Recipes.addShaped({id: ItemID.lightningboltsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.esslightningbolt, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.lightningboltpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.esslightningbolt, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.lightningboltaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.esslightningbolt, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.lightningboltshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.esslightningbolt, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.esslightningbolthelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.esslightningbolt, 0]);
Recipes.addShaped({id: ItemID.esslightningboltchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.esslightningbolt, 0]);
Recipes.addShaped({id: ItemID.esslightningboltleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.esslightningbolt, 0]);
Recipes.addShaped({id: ItemID.esslightningboltboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.esslightningbolt, 0]);

IDRegistry.genItemID("esswaterhelmet");
IDRegistry.genItemID("esswaterchestplate");
IDRegistry.genItemID("esswaterleggings");
IDRegistry.genItemID("esswaterboots");
Item.createArmorItem("esswaterhelmet", "Водяной шлем", {name: "esswaterhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/esswaterarmor.png"});
Item.createArmorItem("esswaterchestplate", "Водяной нагрудник", {name: "esswaterchestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 750, texture: "armor/esswaterarmor.png"});
Item.createArmorItem("esswaterleggings", "Водяные поножи", {name: "esswaterleggings", meta: 0}, {type: "leggings", armor: 4, durability: 700, texture: "armor/esswaterarmor0.png"});
Item.createArmorItem("esswaterboots", "Водяные ботинки", {name: "esswaterboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/esswaterarmor.png"});
Recipes.addShaped({id: ItemID.watersword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.esswater, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.waterpickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.esswater, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.wateraxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.esswater, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.watershovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.esswater, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.esswaterhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.esswater, 0]);
Recipes.addShaped({id: ItemID.esswaterchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.esswater, 0]);
Recipes.addShaped({id: ItemID.esswaterleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.esswater, 0]);
Recipes.addShaped({id: ItemID.esswaterboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.esswater, 0]);



Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (chest.id == ItemID.essarcticchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 100)
    }
    
if (chest.id == ItemID.essbolichestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.wither, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
    }
    
    if (chest.id == ItemID.essdesertchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 1, 100)
    }
    
    if (chest.id == ItemID.essearthchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 2, 100)
    }
    
    if (chest.id == ItemID.essfirechestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 100)
    }
    
    if (chest.id == ItemID.essevilchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 1, 100)
    }
    
    if (chest.id == ItemID.esslightningboltchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 50, 100)
    }
    
    if (chest.id == ItemID.esswaterchestplate) {
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 2, 100)
    }
    
    if (helmet.id == ItemID.esswaterhelmet) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 2, 100)
    }
    
    
   //00000000
   
   if (boots.id == ItemID.essarcticboots) {
    World.setBlock(pos.x,pos.y-2,pos.z, 79, 0);
    }
    
    if (boots.id == ItemID.essdesertboots) {
    World.setBlock(pos.x,pos.y-2,pos.z, 12, 0);
    }
    
    if (boots.id == ItemID.essearthboots) {
    World.setBlock(pos.x,pos.y-1,pos.z, 31, 1);
    }
    
    if (boots.id == ItemID.essfireboots) {
    World.setBlock(pos.x,pos.y-1,pos.z, 51, 1);
    }
    
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.arcticsword){ 
Entity.addEffect(victim, 2, 1, 200, true, true); 
}
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.firesword){ 
Entity.addEffect(victim, 2, 1, 200, true, true); 
}
});

Recipes.addShaped({id: 79, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.essarctic, 0]);

Recipes.addShaped({id: 12, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.essdesert, 0]);

Recipes.addShaped({id: 12, count: 1, data: 1}, [ "aaa", "aaa", "aaa"], ['a', ItemID.essdesert, 0]);

Recipes.addShaped({id: 3, count: 1, data: 2}, [ "aaa", "aaa", "aaa"], ['a', ItemID.essearth, 0]);

Recipes.addShaped({id: 9, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.esswater, 0]);

Recipes.addShaped({id: 51, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.essfire, 0]);

//песок молния

IDRegistry.genItemID("fulgurite");
Item.createItem("fulgurite", "Фульгурит", {name: "fulgurite", meta: 0}, {stack: 64});

IDRegistry.genItemID("fulguritesword");
IDRegistry.genItemID("fulguritepickaxe");
IDRegistry.genItemID("fulguriteaxe");
IDRegistry.genItemID("fulguriteshovel");
Item.createItem("fulguritesword", "Фульгуритовый меч", {name: "fulguritesword", meta: 0}, {stack: 1});
Item.createItem("fulguritepickaxe", "Фульгуритовая кирка", {name: "fulguritepickaxe", meta: 0}, {stack: 1});
Item.createItem("fulguriteaxe", "Фульгуритовый топор", {name: "fulguriteaxe", meta: 0}, {stack: 1});
Item.createItem("fulguriteshovel", "Фульгуритовая лопата", {name: "fulguriteshovel", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("fulgurite", {durability: 3400, level: 4, efficiency: 100, damage: 23, enchantability: 14});
ToolAPI.setTool(ItemID.fulguritesword, "fulgurite", ToolType.sword);
ToolAPI.setTool(ItemID.fulguritepickaxe, "fulgurite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.fulguriteaxe, "fulgurite", ToolType.axe);
ToolAPI.setTool(ItemID.fulguriteshovel, "fulgurite", ToolType.shovel);

IDRegistry.genItemID("fulguritehelmet");
IDRegistry.genItemID("fulguritechestplate");
IDRegistry.genItemID("fulguriteleggings");
IDRegistry.genItemID("fulguriteboots");

Item.createArmorItem("fulguritehelmet", "Фульгуритовый шлем", {name: "fulguritehelmet", meta: 0}, {type: "helmet", armor: 7, durability: 1000, texture: "armor/fulguritearmor.png"});
Item.createArmorItem("fulguritechestplate", "Фульгуритовый нагрудник", {name: "fulguritechestplate", meta: 0}, {type: "chestplate", armor: 8, durability: 1000, texture: "armor/fulguritearmor.png"});
Item.createArmorItem("fulguriteleggings", "Фульгуритовые поножи", {name: "fulguriteleggings", meta: 0}, {type: "leggings", armor: 8, durability: 1000, texture: "armor/fulguritearmor0.png"});
Item.createArmorItem("fulguriteboots", "Фульгуритовые ботинки", {name: "fulguriteboots", meta: 0}, {type: "boots", armor: 7, durability: 1000, texture: "armor/fulguritearmor.png"});

Recipes.addShaped({id: ItemID.fulguritesword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.fulgurite, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.fulguritepickaxe, count: 1, data: 0}, [ "aaa", " b ", " b "], ['a', ItemID.fulgurite, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.fulguriteaxe, count: 1, data: 0}, [ "aa ", "ab ", " b "], ['a', ItemID.fulgurite, 0, 'b', 280, 0]);
Recipes.addShaped({id: ItemID.fulguriteshovel, count: 1, data: 0}, [ " a ", " b ", " b "], ['a', ItemID.fulgurite, 0, 'b', 280, 0]);



Recipes.addShaped({id: ItemID.fulguritehelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.fulgurite, 0]);
Recipes.addShaped({id: ItemID.fulguritechestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.fulgurite, 0]);
Recipes.addShaped({id: ItemID.fulguriteleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.fulgurite, 0]);
Recipes.addShaped({id: ItemID.fulguriteboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.fulgurite, 0]);

IDRegistry.genBlockID("fulguriteore");
Block.createBlock("fulguriteore", [{name: "Фульгурит", texture: [["fulguriteore", 0], ["fulguriteore", 0], ["fulguriteore", 0], ["fulguriteore", 0], ["fulguriteore", 0], ["fulguriteore", 0]], inCreative: true}]);

TileEntity.registerPrototype(BlockID.redconcrete, {
 tick: function(){
  var wgd = World.getBlock;
        var wgd1 = wgd(this.x,this.y+1,this.z);
var blc1 = wgd1.id== 4;
 if(blc1){
  Entity.spawn(this.x+1, this.y, this.z, 93);
  Entity.spawn(this.x-1, this.y, this.z, 93);
  Entity.spawn(this.x, this.y, this.z+1, 93);
  Entity.spawn(this.x, this.y, this.z-1, 93);
  }
 }
});

Callback.addCallback("DestroyBlock", function(coords, player){
if(Player.getCarriedItem().id==ItemID.earthpickaxe)
{
x = coords.x;
y = coords.y;
z = coords.z;
World.destroyBlock(x, y-1, z, true);
World.destroyBlock(x+1, y-1, z, true);
World.destroyBlock(x-1, y-1, z, true);
World.destroyBlock(x, y-1, z+1, true);
World.destroyBlock(x, y-1, z-1, true);
World.destroyBlock(x+1, y-1, z+1, true);
World.destroyBlock(x-1, y-1, z+1, true);
World.destroyBlock(x+1, y-1, z-1, true);
World.destroyBlock(x-1, y-1, z-1, true);

World.destroyBlock(x, y, z, true);
World.destroyBlock(x+1, y, z, true);
World.destroyBlock(x-1, y, z, true);
World.destroyBlock(x, y, z+1, true);
World.destroyBlock(x, y, z-1, true);
World.destroyBlock(x+1, y, z+1, true);
World.destroyBlock(x-1, y, z+1, true);
World.destroyBlock(x+1, y, z-1, true);
World.destroyBlock(x-1, y, z-1, true);

World.destroyBlock(x, y+1, z, true);
World.destroyBlock(x+1, y+1, z, true);
World.destroyBlock(x-1, y+1, z, true);
World.destroyBlock(x, y+1, z+1, true);
World.destroyBlock(x, y+1, z-1, true);
World.destroyBlock(x+1, y+1, z+1, true);
World.destroyBlock(x-1, y+1, z+1, true);
World.destroyBlock(x+1, y+1, z-1, true);
World.destroyBlock(x-1, y+1, z-1, true);
}
});

//TileEntity.registerPrototype(12, {
//var evv = Entity.getPosition (entity) 
	//if(Entity.getType(entity) == 93){
	//var bcc = World.getBlock
	//var bcc1 = bcc1.id== 12; 
	//if(bcc1){
//World.setBlock(evv.x, evv.y, evv.z, BlockID.//fulguriteore);
	//}
//}
	//});
	//TileEntity.registerPrototype(12, { 
// tick: function(){ 
// var evv = Entity.getPosition (entity) 
// if (evv.x == this.x && (evv.y == this.y+1 || evv.y == this.y) && evv.z == this.z){ 
// if(Entity.getType(entity) == 93){ 
// World.setBlock(this.x, this.y, this.z, BlockID.fulguriteore); 
// } 
// } 
//} 
//});

IDRegistry.genItemID("pentosword");
Item.createItem("pentosword", "Пентомеч", {name: "pentosword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("pentos", {durability: 3400, level: 4, efficiency: 100, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.pentosword, "pentos", ToolType.sword);

Recipes.addShaped({id: ItemID.pentosword, count: 1, data: 0}, [ " a ", "b c", "d e"], ['a', ItemID.essevil, 0, 'b', ItemID.essdesert, 0, 'c', ItemID.essearth, 0, 'd', ItemID.esswater, 0, 'e', ItemID.essboli, 0]);

TileEntity.registerPrototype(12, { 
tick: function(){ 
var evv = Entity.getPosition(93); 
if (evv.x == this.x && (evv.y == this.y+1 || evv.y == this.y) && evv.z == this.z){ 
if(Entity.getType() == 93){ 
World.setBlock(this.x, this.y, this.z, BlockID.fulguriteore); 
} 
} 
} 
});

IDRegistry.genItemID("energycontainer");
Item.createItem("energycontainer", "Топливный контейнер", {name: "energycontainer", meta: 0}, {stack: 64});

IDRegistry.genItemID("coalfuel");
Item.createItem("coalfuel", "Угольное топливо", {name: "coalfuel", meta: 0}, {stack: 64});

IDRegistry.genItemID("hellfuel");
Item.createItem("hellfuel", "Адское топливо", {name: "hellfuel", meta: 0}, {stack: 64});

IDRegistry.genItemID("energyfuel");
Item.createItem("energyfuel", "Энергитическое топливо", {name: "energyfuel", meta: 0}, {stack: 64});

IDRegistry.genItemID("lapisfuel");
Item.createItem("lapisfuel", "Лазуритовое топливо", {name: "lapisfuel", meta: 0}, {stack: 64});

IDRegistry.genItemID("seedfuel");
Item.createItem("seedfuel", "Биотопливо", {name: "seedfuel", meta: 0}, {stack: 64});

IDRegistry.genItemID("destroyfuel");
Item.createItem("destroyfuel", "Разрушительное топливо", {name: "destroyfuel", meta: 0}, {stack: 64});

IDRegistry.genItemID("arkfuel");
Item.createItem("arkfuel", "Топливо ковчега", {name: "arkfuel", meta: 0}, {stack: 64});



Recipes.addFurnaceFuel(ItemID.coalfuel, 0, 3800);
Recipes.addFurnaceFuel(ItemID.energyfuel, 0, 4000);
Recipes.addFurnaceFuel(ItemID.hellfuel, 0, 4200);
Recipes.addFurnaceFuel(ItemID.seedfuel, 0, 2000);
Recipes.addFurnaceFuel(ItemID.lapisfuel, 0, 3800);
Recipes.addFurnaceFuel(ItemID.destroyfuel, 0, 5000);
Recipes.addFurnaceFuel(ItemID.arkfuel, 0, 10000);


IDRegistry.genBlockID("lemonwood");
Block.createBlock("lemonwood", [{name: "Лимонное дерево", texture: [["lemonwoodtop", 0], ["lemonwoodtop", 0], ["lemonwood", 0], ["lemonwood", 0], ["lemonwood", 0], ["lemonwood", 0]], inCreative: true}]);

IDRegistry.genBlockID("lemonleaves");
Block.createBlock("lemonleaves", [{name: "Лимонная листва", texture: [["lemonleaves", 0], ["lemonleaves", 0], ["lemonleaves", 0], ["lemonleaves", 0], ["lemonleaves", 0], ["lemonleaves", 0]], inCreative: true}]);

IDRegistry.genBlockID("lemonplanks");
Block.createBlock("lemonplanks", [{name: "Лимонные доски", texture: [["lemonplanks", 0], ["lemonplanks", 0], ["emeraldplanks", 0], ["lemonplanks", 0], ["lemonplanks", 0], ["lemonplanks", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.lemonplanks, count: 4, data: 0}, [ "   ", " a ", "   "], ['a', BlockID.lemonwood, 0]);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.02){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.lemonwood, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.lemonwood, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.lemonwood, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.lemonwood, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.lemonwood, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-1, BlockID.lemonleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+5,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, BlockID.lemonleaves, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.lemonleaves, 0);
              World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.lemonleaves, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-1, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z, BlockID.lemonleaves, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+1, BlockID.lemonleaves, 0);
              World.setBlock(coords.x-1,coords.y+3,  coords.z-2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, BlockID.lemonleaves, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, BlockID.lemonleaves, 0);
}}});

IDRegistry.genItemID("lemon");
Item.createFoodItem("lemon", "Лимон", {name: "lemon", meta: 0}, {food: 1});

Block.registerDropFunction(BlockID.lemonleaves, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.lemon, 3, 0]);
 return drop;
});

Block.registerDropFunction(BlockID.fulguriteore, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.fulgurite,4 , 0]);
 return drop;
});

Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.lemon){
Entity.addEffect(Player.get(), 1, 1, 200, false,false);
}});

IDRegistry.genItemID("limonade");
Item.createItem("limonade", "Лимонад", {name: "limonade", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.limonade)
{
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 400)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

Recipes.addShaped({id: ItemID.limonade, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.lemon, 0, 'b', 374, 0]);

IDRegistry.genItemID("limonadepot");
Item.createItem("limonadepot", "Кружка лимонада", {name: "limonadepot", meta: 0}, {stack: 1});

Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.limonadepot)
{
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 5, 500)
Player.addItemToInventory (ItemID.kruzhka, 1);
Player.decreaseCarriedItem (1);
}
});

Recipes.addShaped({id: ItemID.limonadepot, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', ItemID.lemon, 0, 'b', ItemID.kruzhka, 0]);

IDRegistry.genItemID("adventurersword");
Item.createItem("adventurersword", "Меч странника", {name: "adventurersword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("adventurer", {durability: 3400, level: 4, efficiency: 15, damage: 12, enchantability: 14});
ToolAPI.setTool(ItemID.adventurersword, "adventurer", ToolType.sword);

Recipes.addShaped({id: ItemID.adventurersword, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', 269, 0, 'b', ItemID.darkcane, 0, 'c', 174, 0]);

IDRegistry.genItemID("vampirepotion");
Item.createItem("vampirepotion", "Зелье вампира", {name: "vampirepotion", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function (coords, item, block) {
if (item.id==ItemID.vampirepotion)
{
Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 1, 900)
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 900)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 50, 900)
Player.addItemToInventory (374, 1);
Player.decreaseCarriedItem (1);
}
});

Recipes.addShaped({id: ItemID.vampirepotion, count: 1, data: 0}, [ "abc", "d e", "   "], ['a', ItemID.esswater, 0, 'b', 374, 0, 'c', ItemID.essfire, 0, 'd', 322, 0, 'e', BlockID.emeraldwood, 0]);

IDRegistry.genItemID("scientisthelmet");
IDRegistry.genItemID("scientistchestplate");
IDRegistry.genItemID("scientistleggings");
IDRegistry.genItemID("scientistboots");

Item.createArmorItem("scientisthelmet", "Очки ученого", {name: "scientisthelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/scientistarmor.png"});
Item.createArmorItem("scientistchestplate", "Халат ученого", {name: "scientistchestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 750, texture: "armor/scientistarmor.png"});
Item.createArmorItem("scientistleggings", "Штаны ученого", {name: "scientistleggings", meta: 0}, {type: "leggings", armor: 5, durability: 700, texture: "armor/scientistarmor0.png"});
Item.createArmorItem("scientistboots", "Ботинки ученого", {name: "scientistboots", meta: 0}, {type: "boots", armor: 4, durability: 600, texture: "armor/scientistarmor.png"});

Recipes.addShaped({id: ItemID.scientisthelmet, count: 9, data: 0}, [ " a ", "aba", " a "], ['a', 340, 0, 'b', 306, 0]);
Recipes.addShaped({id: ItemID.scientistchestplate, count: 9, data: 0}, [ " a ", "aba", " a "], ['a', 340, 0, 'b', 307, 0]);
Recipes.addShaped({id: ItemID.scientistleggings, count: 9, data: 0}, [ " a ", "aba", " a "], ['a', 340, 0, 'b', 308, 0]);
Recipes.addShaped({id: ItemID.scientistboots, count: 9, data: 0}, [ " a ", "aba", " a "], ['a', 340, 0, 'b', 309, 0]);

IDRegistry.genItemID("cactussword");
Item.createItem("cactussword", "Кактусовый меч", {name: "cactussword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("cactus", {durability: 3400, level: 4, efficiency: 15, damage: 6, enchantability: 14});
ToolAPI.setTool(ItemID.cactussword, "cactus", ToolType.sword);

Recipes.addShaped({id: ItemID.cactussword, count: 1, data: 0}, [ "aa ", "aa ", " b "], ['a', 81, 0, 'b', 280, 0]);

IDRegistry.genItemID("friedgrass");
Item.createFoodItem("friedgrass", "Жареные семена", {name: "friedgrass", meta: 0}, {food: 2});
Recipes.addFurnace(295, ItemID.friedgrass, 1);

IDRegistry.genItemID("icra");
Item.createFoodItem("icra", "Икра", {name: "icra", meta: 0}, {food: 1});
Recipes.addShaped({id: ItemID.icra, count: 10, data: 0}, [ "   ", " a ", "   "], ['a', 350, 0]);

IDRegistry.genItemID("breadwithfish");
Item.createFoodItem("breadwithfish", "Бутерброд с рыбой", {name: "breadwithfish", meta: 0}, {food: 15});
Recipes.addShaped({id: ItemID.breadwithfish, count: 1, data: 0}, [ " a ", " b ", "   "], ['a', 350, 0, 'b', 297, 0]);

IDRegistry.genItemID("breadwithicra");
Item.createFoodItem("breadwithicra", "Бутерброд с икрой", {name: "breadwithicra", meta: 0}, {food: 9});
Recipes.addShaped({id: ItemID.breadwithicra, count: 1, data: 0}, [ "aaa", "aaa", " b "], ['a', ItemID.icra, 0, 'b', 297, 0]);

IDRegistry.genBlockID("icrablock");
Block.createBlock("icrablock", [{name: "Блок икры", texture: [["icrablock", 0], ["icrablock", 0], ["icrablock", 0], ["icrablock", 0], ["icrablock", 0], ["icrablock", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.icrablock, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.icra, 0]);

IDRegistry.genBlockID("purgatoriumgrass");
Block.createBlock("purgatoriumgrass", [{name: "Йенериумный блок", texture: [["purgatoriumstone", 0], ["purgatoriumgrasstop", 0], ["purgatoriumgrass", 0], ["purgatoriumgrass", 0], ["purgatoriumgrass", 0], ["purgatoriumgrass", 0]], inCreative: true}]);

IDRegistry.genBlockID("purgatoriumstone");
Block.createBlock("purgatoriumstone", [{name: "Йенериумный блок", texture: [["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0], ["purgatoriumstone", 0]], inCreative: true}]);
const SKY_COLOR = [0, 0, 0];
IMPORT("dimensions");

var Purgatorium = new Dimension({
    name: "Purgatorium",
    
    generation: {
        layers: [
            // major islands
            { 
                range: [0, 150],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [.015, .02752, .015]
                    }
                },
                
                gradient: [[0, -3], [.1, -.2], [0.5, .1], [.9, -.2], [2, -1]],
                
                terrain: {
                    base: BlockID.purgatoriumstone,
                    cover: {
                        height: 4,
                        top: BlockID.purgatoriumgrass,
                        block: BlockID.purgatoriumstone
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        sky: SKY_COLOR,
    },
    
    callbacks: {
tick: function() { 
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("PurgatoriumChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
 }
});
/*
var teleporter = Purgatorium.getTeleporter(); 
 
var teleporterBack = teleporter.OVERWORLD; 

Callback.addCallback("ItemUse", function(coords, item){ 
if(item.id == ItemID.leaf){ 
teleporter.enter(); 
} 
if(item.id == ItemID.magicleaf){ 
teleporterBack.enter(); 
} 
});
*/

 
var generateItems =[ 
]; 

function addItemsToGenerateChest(id, random, count, data){ 
random = random||1; 
count = count||{}; 
count.min = count.min||1; 
count.max = count.max||1; 
data = data||0; 
generateItems.push({id:id, data:data, random:random, count:count}); 
} 

function fillChest(x,y,z){ 
var container = World.getContainer(x, y, z); 
var size = container.getSize(); 
var random = Math.random(); 
var slot = 0; 
for(var i in generateItems){ 
if(random<generateItems[i].random){ 
var count = Math.floor(Math.random()*(generateItems[i].count.max-generateItems[i].count.min))+generateItems[i].count.min; 
container.setSlot(slot, generateItems[i].id, count, generateItems[i].data); 
slot++; 
} 
} 
} 

addItemsToGenerateChest(266, 1, {max:15});
addItemsToGenerateChest(367, 1, {max:42});
addItemsToGenerateChest(352, 1, {max:30});
addItemsToGenerateChest(ItemID.yeneriumingot, 0.9, {max:3});
addItemsToGenerateChest(ItemID.essdesert, 0.9, {max:3});
addItemsToGenerateChest(ItemID.jade, 1, {max:5});
addItemsToGenerateChest(ItemID.amber, 1, {max:8});

//fillChest(coords.x, coords.y, coords.z); - пихает все предмети в контейнер(сундук) на координатах x, y, z.Координати укажи свои

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y,  coords.z, 24, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, 24, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, 24, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, 24, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, 24, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, 24, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, 24, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, 24, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, 24, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-2, 24, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, 24, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, 24, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+1, 24, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, 24, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+2, 24, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, 24, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+2, 24, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+2, 24, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+1, 24, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z, 24, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, 24, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-2, 24, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-2, 24, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, 24, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-2, 24, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-2, 24, 0);
       
       World.setBlock(coords.x+3,coords.y,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-2, 24, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-1, 24, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z, 24, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+1, 24, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+2, 24, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+3, 24, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, 24, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, 24, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z, 24, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-1, 24, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-2, 24, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-3, 24, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-3, 24, 0);
       World.setBlock(coords.x,coords.y,  coords.z-3, 24, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-3, 24, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-3, 24, 0);
       
       //////22222222222222222222
       
       World.setBlock(coords.x,coords.y+1,  coords.z-3, 24, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-3, 24, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-2, 24, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-1, 24, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z, 24, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+1, 24, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+2, 24, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+3, 24, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 24, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z+1, 24, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z, 24, 0);
       World.setBlock(coords.x-3,coords.y+1,  coords.z-1, 24, 0);
       
       ///////3333333333333333
       
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z-3, 24, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-2, 24, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-1, 24, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z, 24, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+1, 24, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+2, 24, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+3, 24, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+3, 24, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y+2,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z+1, 24, 0);
       World.setBlock(coords.x-3,coords.y+2,  coords.z, 24, 0);
       
       //////////4444444444444
       
World.setBlock(coords.x+1,coords.y+3,  coords.z-3, 24, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-2, 24, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-1, 24, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z, 24, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+1, 24, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+2, 24, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+3, 24, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+3, 24, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y+3,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z+1, 24, 0);
       World.setBlock(coords.x-3,coords.y+3,  coords.z-3, 24, 0);
       
       /////555555555555555
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z-3, 24, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z-2, 24, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z-1, 24, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z, 24, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+1, 24, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+2, 24, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+3, 24, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+3, 24, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z-3, 24, 0);
       World.setBlock(coords.x-3,coords.y+4,  coords.z-2, 24, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-3, 24, 0);
       
       //////////66666666666666666666
       
       World.setBlock(coords.x+3,coords.y+5,  coords.z-3, 24, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z-3, 24, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z-3, 24, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-3, 24, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z-3, 24, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z-3, 24, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-2, 24, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z-1, 24, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z, 24, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z, 24, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z, 24, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z, 24, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z, 24, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z, 24, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z, 24, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z+1, 24, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+1, 24, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+2, 24, 0);
       World.setBlock(coords.x+3,coords.y+5,  coords.z+3, 24, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z+3, 24, 0);
       World.setBlock(coords.x+1,coords.y+5,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+5,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y+5,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+5,  coords.z+3, 24, 0);
       
       //////////7777777777777778777
       
       World.setBlock(coords.x+3,coords.y+6,  coords.z-3, 24, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z-3, 24, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z-3, 24, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+6,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y+6,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z+3, 24, 0);
       World.setBlock(coords.x+1,coords.y+6,  coords.z+3, 24, 0);
       World.setBlock(coords.x+2,coords.y+6,  coords.z+3, 24, 0);
       World.setBlock(coords.x+3,coords.y+6,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+6,  coords.z+1, 24, 0);
       
       ////////////888888888888888
       
       World.setBlock(coords.x+3,coords.y+7,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+7,  coords.z-2, 24, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z-3, 24, 0);
       World.setBlock(coords.x+2,coords.y+7,  coords.z+3, 24, 0);
       World.setBlock(coords.x+1,coords.y+7,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+7,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y+7,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+7,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+7,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+7,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+7,  coords.z+1, 24, 0);
       World.setBlock(coords.x-3,coords.y+7,  coords.z-1, 24, 0);
       
       //////////9999999999999999999
       
       World.setBlock(coords.x+3,coords.y+8,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+8,  coords.z-2, 24, 0);
       World.setBlock(coords.x+3,coords.y+8,  coords.z-1, 24, 0);
       World.setBlock(coords.x+2,coords.y+8,  coords.z-3, 24, 0);
       World.setBlock(coords.x+1,coords.y+8,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+8,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y+8,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+8,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+8,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+8,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+8,  coords.z+1, 24, 0);
       World.setBlock(coords.x-3,coords.y+8,  coords.z, 24, 0);
       World.setBlock(coords.x-3,coords.y+8,  coords.z-1, 24, 0);
       
       //1010101001010100101001010101010
       
       World.setBlock(coords.x+3,coords.y+9,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+9,  coords.z-2, 24, 0);
       World.setBlock(coords.x+2,coords.y+9,  coords.z-3, 24, 0);
       World.setBlock(coords.x+1,coords.y+9,  coords.z-3, 24, 0);
       World.setBlock(coords.x+2,coords.y+9,  coords.z-2, 24, 0);
       World.setBlock(coords.x+1,coords.y+9,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+9,  coords.z+3, 24, 0);
       World.setBlock(coords.x,coords.y+9,  coords.z+2, 24, 0);
       World.setBlock(coords.x-1,coords.y+9,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+9,  coords.z+3, 24, 0);
       World.setBlock(coords.x-2,coords.y+9,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+9,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+9,  coords.z+2, 24, 0);
       World.setBlock(coords.x-3,coords.y+9,  coords.z+1, 24, 0);
       
       //11111111111111111111111111111111111111111111
       
       World.setBlock(coords.x+3,coords.y+10,  coords.z-3, 24, 0);
       World.setBlock(coords.x+3,coords.y+10,  coords.z-1, 24, 0);
       World.setBlock(coords.x+1,coords.y+10,  coords.z+3, 24, 0);
       World.setBlock(coords.x-1,coords.y+10,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+10,  coords.z+3, 24, 0);
       World.setBlock(coords.x-3,coords.y+10,  coords.z+1, 24, 0);
       World.setBlock(coords.x,coords.y+6,  coords.z, 54, 0);
       
       fillChest(coords.x, coords.y+6, coords.z);
}}});

IDRegistry.genItemID("stonekus");
Item.createItem("stonekus", "Кусок камня", {name: "stonekus", meta: 0}, {stack: 64});

Block.registerDropFunction(1, function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.stonekus, 1, 0]);
 return drop;
});

Recipes.addShaped({id: 1, count: 1, data: 0}, [ "aa ", "aa ", "   "], ['a', ItemID.stonekus, 0]);

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x,coords.y,  coords.z, BlockID.blazerodblock, 0);
       
       World.setBlock(coords.x+3,coords.y,  coords.z, BlockID.blazerodblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z+3, BlockID.blazerodblock, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z, BlockID.blazerodblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z-3, BlockID.blazerodblock, 0);
       
       World.setBlock(coords.x+6,coords.y,  coords.z, BlockID.blazerodblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z+6, BlockID.blazerodblock, 0);
       World.setBlock(coords.x-6,coords.y,  coords.z, BlockID.blazerodblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z-6, BlockID.blazerodblock, 0);
       
       World.setBlock(coords.x+1,coords.y,  coords.z, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+4, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-4, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z+5, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x,coords.y,  coords.z-5, BlockID.redsandstonebricks, 0);
       
       World.setBlock(coords.x+6,coords.y,  coords.z-2, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+6,coords.y,  coords.z-1, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+6,coords.y,  coords.z+1, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+6,coords.y,  coords.z+2, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z-3, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z+3, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-4, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+4, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-5, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+5, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-6, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+6, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-6, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+6, BlockID.redsandstonebricks, 0);
       
       World.setBlock(coords.x-6,coords.y,  coords.z-2, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-6,coords.y,  coords.z-1, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-6,coords.y,  coords.z+1, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-6,coords.y,  coords.z+2, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z-3, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z+3, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-4, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+4, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-5, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+5, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-6, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+6, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-6, BlockID.redsandstonebricks, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+6, BlockID.redsandstonebricks, 0);
       
       World.setBlock(coords.x+5,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z-1, 2, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-3, 2, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-1, 2, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-4, 2, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-3, 2, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-1, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-5, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-4, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-3, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-5, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-4, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-3, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, 2, 0);
       
       World.setBlock(coords.x+5,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z+1, 2, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+3, 2, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+1, 2, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+4, 2, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+3, 2, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+1, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+5, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+4, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+3, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+1, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+5, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+4, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+3, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, 2, 0);
       
       World.setBlock(coords.x-5,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z-1, 2, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-3, 2, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z-1, 2, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-4, 2, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-3, 2, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z-1, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-5, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-4, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-3, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-5, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-4, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-3, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-2, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, 2, 0);
       
       World.setBlock(coords.x-5,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x-5,coords.y,  coords.z+1, 2, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+3, 2, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x-4,coords.y,  coords.z+1, 2, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+4, 2, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+3, 2, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x-3,coords.y,  coords.z+1, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+5, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+4, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+3, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z+1, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+5, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+4, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+3, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+2, 2, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, 2, 0);
       
       //2222222222222222222222222222
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, BlockID.sakura, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, BlockID.sakura, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, BlockID.sakura, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z+2, BlockID.sakura, 0);
       
       World.setBlock(coords.x+6,coords.y+1,  coords.z, BlockID.torii, 0);
       World.setBlock(coords.x-6,coords.y+1,  coords.z, BlockID.torii, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-6, BlockID.torii, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+6, BlockID.torii, 0);
       
       //333333333333333333
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, BlockID.sakura, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z-2, BlockID.sakura, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, BlockID.sakura, 0);
       World.setBlock(coords.x-2,coords.y+2,  coords.z+2, BlockID.sakura, 0);
       
       //4444444444444444444444
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, BlockID.sakura, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z-2, BlockID.sakura, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, BlockID.sakura, 0);
       World.setBlock(coords.x-2,coords.y+3,  coords.z+2, BlockID.sakura, 0);
       
       //55555555555555555555555555
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, BlockID.sakura, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-2, BlockID.sakura, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, BlockID.sakura, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+2, BlockID.sakura, 0);
       
       World.setBlock(coords.x+3,coords.y+4,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-3, BlockID.sakuraleaves, 0);
       
       World.setBlock(coords.x+3,coords.y+4,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+3, BlockID.sakuraleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z-3, BlockID.sakuraleaves, 0);
       
       World.setBlock(coords.x-3,coords.y+4,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+1, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-1,coords.y+4,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+4,  coords.z+3, BlockID.sakuraleaves, 0);
       
       //666666666666666666
       
       World.setBlock(coords.x+2,coords.y+5,  coords.z+2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x+2,coords.y+5,  coords.z-2, BlockID.sakuraleaves, 0);
       World.setBlock(coords.x-2,coords.y+5,  coords.z+2, BlockID.sakuraleaves, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){ 
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
       World.setBlock(coords.x+5,coords.y,  coords.z-3, 1, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z-2, 1, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z-1, 1, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z, 1, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z+1, 1, 0);
       World.setBlock(coords.x+5,coords.y,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+4,coords.y,  coords.z-3, 1, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-2, 1, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z-1, 1, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z, 1, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+1, 1, 0);
       World.setBlock(coords.x+4,coords.y,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+3,coords.y,  coords.z-3, 1, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-2, 1, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z-1, 1, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z, 1, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+1, 1, 0);
       World.setBlock(coords.x+3,coords.y,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+2,coords.y,  coords.z-3, 1, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-2, 1, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z-1, 1, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z, 1, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+1, 1, 0);
       World.setBlock(coords.x+2,coords.y,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+1,coords.y,  coords.z-3, 1, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-2, 1, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z-1, 1, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z, 1, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+1, 1, 0);
       World.setBlock(coords.x+1,coords.y,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x,coords.y,  coords.z-3, 1, 0);
       World.setBlock(coords.x,coords.y,  coords.z-2, 1, 0);
       World.setBlock(coords.x,coords.y,  coords.z-1, 1, 0);
       World.setBlock(coords.x,coords.y,  coords.z, 1, 0);
       World.setBlock(coords.x,coords.y,  coords.z+1, 1, 0);
       World.setBlock(coords.x,coords.y,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x-1,coords.y,  coords.z-3, 18, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-2, 18, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z-1, 18, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z, 17, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+1, 17, 0);
       World.setBlock(coords.x-1,coords.y,  coords.z+2, 17, 0);
       
       World.setBlock(coords.x-2,coords.y,  coords.z-3, 18, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-2, 18, 0);
       World.setBlock(coords.x-2,coords.y,  coords.z-1, 18, 0);
       
       //22222222222222222222
       
       
       World.setBlock(coords.x+5,coords.y+1,  coords.z-2, 1, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z-1, 1, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z, 1, 0);
       World.setBlock(coords.x+5,coords.y+1,  coords.z+1, 1, 0);
       
       
       World.setBlock(coords.x+4,coords.y+1,  coords.z-3, 1, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-2, 30, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z-1, 30, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z, 30, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 30, 0);
       World.setBlock(coords.x+4,coords.y+1,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+3,coords.y+1,  coords.z-3, 1, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-2, 30, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z-1, 30, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z, 54, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+1, 30, 0);
       World.setBlock(coords.x+3,coords.y+1,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+2,coords.y+1,  coords.z-3, 1, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-2, 0, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z-1, 30, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z, 0, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 30, 0);
       World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+1,coords.y+1,  coords.z-3, 1, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-2, 54, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z-1, 30, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+1, 30, 0);
       World.setBlock(coords.x+1,coords.y+1,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x,coords.y+1,  coords.z-3, 1, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-2, 0, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z-1, 30, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z, 30, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+1, 30, 0);
       World.setBlock(coords.x,coords.y+1,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x-1,coords.y+1,  coords.z-3, 18, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-2, 18, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z-1, 18, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z, 0, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 0, 0);
       World.setBlock(coords.x-1,coords.y+1,  coords.z+2, 0, 0);
       
       World.setBlock(coords.x-2,coords.y+1,  coords.z-3, 18, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-2, 18, 0);
       World.setBlock(coords.x-2,coords.y+1,  coords.z-1, 18, 0);
       
       //333333333333333333
       
       
       World.setBlock(coords.x+5,coords.y+2,  coords.z, 18, 0);
       World.setBlock(coords.x+5,coords.y+2,  coords.z+1, 1, 0);
       
       
       
       World.setBlock(coords.x+4,coords.y+2,  coords.z-2, 1, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z-1, 1, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z, 1, 0);
       World.setBlock(coords.x+4,coords.y+2,  coords.z+2, 1, 0);
       
       
       World.setBlock(coords.x+3,coords.y+2,  coords.z-3, 1, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-2, 30, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z-1, 30, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z, 30, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+1, 30, 0);
       World.setBlock(coords.x+3,coords.y+2,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+2,coords.y+2,  coords.z-3, 1, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-2, 30, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z, 0, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+1, 30, 0);
       World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+1,coords.y+2,  coords.z-3, 1, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-2, 30, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z-1, 0, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z, 0, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+1, 30, 0);
       World.setBlock(coords.x+1,coords.y+2,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x,coords.y+2,  coords.z-3, 1, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-2, 0, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z-1, 0, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z, 0, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+1, 30, 0);
       World.setBlock(coords.x,coords.y+2,  coords.z+2, 1, 0);
       
       //44444444444444444444444444
       
       World.setBlock(coords.x+3,coords.y+3,  coords.z-3, 1, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-2, 1, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z-1, 1, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z, 1, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+1, 1, 0);
       World.setBlock(coords.x+3,coords.y+3,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+2,coords.y+3,  coords.z-3, 1, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-2, 1, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z-1, 1, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z, 1, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+1, 1, 0);
       World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x+1,coords.y+3,  coords.z-3, 1, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-2, 1, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z-1, 1, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z, 1, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+1, 1, 0);
       World.setBlock(coords.x+1,coords.y+3,  coords.z+2, 1, 0);
       
       World.setBlock(coords.x,coords.y+3,  coords.z-3, 1, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-2, 1, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z-1, 1, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z, 1, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+1, 1, 0);
       World.setBlock(coords.x,coords.y+3,  coords.z+2, 1, 0);
       
       //555555555555555555
       
       
       World.setBlock(coords.x+3,coords.y+4,  coords.z-2, 18, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z-1, 1, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z, 1, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+1, 1, 0);
       World.setBlock(coords.x+3,coords.y+4,  coords.z+2, 18, 0);
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z-3, 18, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 18, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, 1, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, 1, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+1, 1, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 18, 0);
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z-3, 18, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, 18, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, 1, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z, 1, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+1, 1, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z+2, 18, 0);
       
       World.setBlock(coords.x,coords.y+4,  coords.z-3, 18, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-2, 1, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z-1, 1, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, 1, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+1, 1, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z+2, 1, 0);
       
       //66666666666666666666666
       
       
       
       
       
       World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 18, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z-1, 1, 0);
       World.setBlock(coords.x+2,coords.y+4,  coords.z, 1, 0);
       
       
       
       World.setBlock(coords.x+1,coords.y+4,  coords.z-2, 18, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z-1, 1, 0);
       World.setBlock(coords.x+1,coords.y+4,  coords.z, 1, 0);
       
       
       
       World.setBlock(coords.x,coords.y+4,  coords.z-1, 1, 0);
       World.setBlock(coords.x,coords.y+4,  coords.z, 1, 0);
       
       fillChest(coords.x, coords.y+6, coords.z);
       fillChest(coords.x+3, coords.y, coords.z);
       
}}});


































































/*
//var ch = World.getBlock

var structureGenerationHelper = { 
 setGs:function(x, y, z){ 
 this.p(x, y, z, BlockID.jadeore); 
 this.p(x, y+1, z, BlockID.jadeore); 
 }, 
 setG:function(x, y, z){ 
 this.p(x, y, z, BlockID.jadeore); 
 this.p(x, y+1, z, BlockID.jadeore); 
 }, 
 radiuseInFlat:function(coords, code, r){ 
 for(var x = coords.x - r; x < coords.x + r; x++){ 
 for(var z = coords.z -r; z < coords.z + r; z++){ 
 code(); 
 } 
 } 
 }, 
 p: function(x, y, z, id){ 
 World.setBlock(x, y, z, id, 0); 
 }, 
 setGrassall:function(t){ 
 if(t.setInRadiuse){ 
 this.radiuseInFlat({x:t.x, y:t.y}, 
 function(){ 
 this.setG(this.x, t.y, this.z); 
 }, t.radiuse); 
 }else{ 
 this.setGs(t.x, t.y, t.z); 
 } 
 }
}

  Callback.addCallback("GenerateChunk", function(x,z){ 
  for(var i = 0; i < 36; i++){ 
  coords=GenerationUtils.randomCoords(x,z,100,220); 
  for(var k=0;k<31;k++){ 
  if(World.getBlockID(coords.x,k,coords.z)==BlockID.purgatoriumgrass){ 
  if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
  World.setBlock(coords.x, coords.k, coords.z, BlockID.jadeore);
  World.setBlock(coords.x, coords.k+1, coords.z, BlockID.jadeore);
  structureGenerationHelper.setGrass({x: this.x, y: this.y, z: this.z, setInRadiuse:false}); 
  } 
  } 
  } 
  });
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  IDRegistry.genBlockID("coldFire");
Block.createBlock("coldFire", [
{name: "Cold Fire", texture: [["coldfire", 0]], inCreative: true}], BLOCK_LIGHT);

BlockRenderer.addRenderCallback(BlockID.BlueFire, function(api, coords, block) {
var box = BlockID.coldFire;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, box, 0);

});
BlockRenderer.enableCustomRender(BlockID.coldFire);*/

























































































