var BLOCK_TYPE_STONE = Block.createSpecialType({base: 1, solid: true, destroytime: 2, explosionres: 2}, "stone");
IDRegistry.genBlockID("opsore");
Block.createBlock("opsore", [{name: "Ops-\u0440\u0443\u0434\u0430", texture: [["opsore", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.opsore, "stone", 3, true);
Block.registerDropFunction("opsore", function (coords, blockID, blockData, level, enchant) {
    if (level > 2) {
        if (enchant.silk) {
            return [[blockID, 1, 0]];
        }
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return [[ItemID.opskrystal, 1, 0]];
    }
    return [];
}, 3);
IDRegistry.genBlockID("opsblock");
Block.createBlock("opsblock", [{name: "Ops-\u0431\u043b\u043e\u043a", texture: [["opsblock", 0]], inCreative: true}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.opsblock, "stone", 2, true);
Block.setDestroyLevel("opsblock", 2);
IDRegistry.genItemID("opskrystal");
Item.createItem("opskrystal", "Ops-\u043a\u0440\u0438\u0441\u0442\u0430\u043b", {name: "opskrystal", meta: 0}, {stack: 64});
importLib("ToolType", "*");
IDRegistry.genItemID("opsSword");
IDRegistry.genItemID("opsShovel");
IDRegistry.genItemID("opsPickaxe");
IDRegistry.genItemID("opsAxe");
IDRegistry.genItemID("opsHoe");
Item.createItem("opsSword", "Ops-\u043c\u0435\u0447", {name: "opssword", meta: 0}, {stack: 1});
Item.createItem("opsShovel", "Ops-\u043b\u043e\u043f\u0430\u0442\u0430", {name: "opsshovel", meta: 0}, {stack: 1});
Item.createItem("opsPickaxe", "Ops-\u043a\u0438\u0440\u043a\u0430", {name: "opspickaxe", meta: 0}, {stack: 1});
Item.createItem("opsAxe", "Ops-\u0442\u043e\u043f\u043e\u0440", {name: "opsaxe", meta: 0}, {stack: 1});
Item.createItem("opsHoe", "ops Hoe", {name: "opshoe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("opskrystal", {durability: 1100, level: 2, efficiency: 8, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.opsSword, "opskrystal", ToolType.sword);
ToolAPI.setTool(ItemID.opsShovel, "opskrystal", ToolType.shovel);
ToolAPI.setTool(ItemID.opsPickaxe, "opskrystal", ToolType.pickaxe);
ToolAPI.setTool(ItemID.opsAxe, "opskrystal", ToolType.axe);
ToolAPI.setTool(ItemID.opsHoe, "opskrystal", ToolType.hoe);
Recipes.addShaped({id: ItemID.opsSword, count: 1, data: 0}, ["a", "a", "b"], ["a", ItemID.opskrystal, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.opsShovel, count: 1, data: 0}, ["a", "b", "b"], ["a", ItemID.opskrystal, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.opsPickaxe, count: 1, data: 0}, ["aaa", " b ", " b "], ["a", ItemID.opskrystal, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.opsAxe, count: 1, data: 0}, ["aa", "ab", " b"], ["a", ItemID.opskrystal, 0, "b", 280, 0]);
Recipes.addShaped({id: ItemID.opsHoe, count: 1, data: 0}, ["aa", " b", " b"], ["a", ItemID.opskrystal, 0, "b", 280, 0]);
IDRegistry.genItemID("opsHelmet");
IDRegistry.genItemID("opsChestplate");
IDRegistry.genItemID("opsLeggings");
IDRegistry.genItemID("opsBoots");
Item.createArmorItem("opsHelmet", "Ops-\u0448\u043b\u0435\u043c", {name: "opshelmet"}, {type: "helmet", armor: 4, durability: 1100, texture: "armor/ops1_1.png"});
Item.createArmorItem("opsChestplate", "Ops-\u043d\u0430\u0433\u0440\u0443\u0434\u043d\u0438\u043a", {name: "opschestplate"}, {type: "chestplate", armor: 6, durability: 1100, texture: "armor/ops1_1.png"});
Item.createArmorItem("opsLeggings", "Ops-\u043f\u043e\u043d\u043e\u0436\u0438", {name: "opsleggings"}, {type: "leggings", armor: 5, durability: 1100, texture: "armor/ops2_2.png"});
Item.createArmorItem("opsBoots", "Ops-\u0431\u043e\u0442\u0438\u043d\u043a\u0438", {name: "opsboots"}, {type: "boots", armor: 5, durability: 1100, texture: "armor/ops1_1.png"});
Recipes.addShaped({id: ItemID.opsHelmet, count: 1, data: 0}, ["xxx", "x x"], ["x", ItemID.opskrystal, 0]);
Recipes.addShaped({id: ItemID.opsChestplate, count: 1, data: 0}, ["x x", "xxx", "xxx"], ["x", ItemID.opskrystal, 0]);
Recipes.addShaped({id: ItemID.opsLeggings, count: 1, data: 0}, ["xxx", "x x", "x x"], ["x", ItemID.opskrystal, 0]);
Recipes.addShaped({id: ItemID.opsBoots, count: 1, data: 0}, ["x x", "x x"], ["x", ItemID.opskrystal, 0]);
Recipes.addShaped({id: BlockID.opsblock, count: 1, data: 0}, ["aaa", "aaa", "aaa"], ["a", ItemID.opskrystal, 0]);
Recipes.addShaped({id: ItemID.opskrystal, count: 9, data: 0}, ["   ", " a ", "   "], ["a", BlockID.opsblock, 0]);
Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
    for (var q = 0; q < 15; q++) {
        if (Math.random() < 7 / 10) {
            GenerationUtils.genMinable(coords.x, coords.y, coords.z, {id: BlockID.opsore, data: 0, size: 6, ratio: 0.3, checkerTile: 1, checkerMode: false});
        }
    }
});

