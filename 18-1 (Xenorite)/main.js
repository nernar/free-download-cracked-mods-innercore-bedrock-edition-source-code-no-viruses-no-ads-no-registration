IDRegistry.genItemID("ingotCoreorite");
Item.createItem("ingotCoreorite", "Coreorite Ingot", {name: "ingotCoreorite", meta: 0}, {stack: 64});



IDRegistry.genItemID("ingotFinorite");
Item.createItem("ingotFinorite", "Finorite Ingot", {name: "ingotFinorite", meta: 0}, {stack: 64});



IDRegistry.genItemID("ingotXenorite");
Item.createItem("ingotXenorite", "Xenorite Ingot", {name: "ingotXenorite", meta: 0}, {stack: 64});





var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 2,
 explosionres: 2
}, "stone");



IDRegistry.genBlockID("coreoriteOre");
Block.createBlock("coreoriteOre", [
 {name: "Coreorite Ore", texture: [["oreCoreorite", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.coreoriteOre, "stone", 3, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 30);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.coreoriteOre, 0, 4);
    }
}
)





IDRegistry.genBlockID("finoriteOre");
Block.createBlock("finoriteOre", [
 {name: "Finorite Ore", texture: [["oreFinorite", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.finoriteOre, "stone", 3, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.finoriteOre, 0, 4);
    }
}
)





IDRegistry.genBlockID("xenoriteOre");
Block.createBlock("xenoriteOre", [
 {name: "Xenorite Ore", texture: [["oreXenorite", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.xenoriteOre, "stone", 3, true);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.xenoriteOre, 0, 4);
    }
}
)





IDRegistry.genBlockID("coreoriteBlock");
Block.createBlock("coreoriteBlock", [
 {name: "Coreorite Block", texture: [["blockCoreorite", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.coreoriteBlock, "stone", 2, true);



IDRegistry.genBlockID("finoriteBlock");
Block.createBlock("finoriteBlock", [
 {name: "Finorite Block", texture: [["blockFinorite", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.finoriteBlock, "stone", 2, true);



IDRegistry.genBlockID("xenoriteBlock");
Block.createBlock("xenoriteBlock", [
 {name: "Xenorite Block", texture: [["blockXenorite", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.xenoriteBlock, "stone", 2, true);





Recipes.addShaped({id: BlockID.coreoriteBlock, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.ingotCoreorite, 0]);



Recipes.addShaped({id: ItemID.ingotCoreorite, count: 9, data: 0}, [
		"a  ",
		"   ",
		"   "
	], ['a', BlockID.coreoriteBlock, 0]);





Recipes.addShaped({id: BlockID.finoriteBlock, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.ingotFinorite, 0]);



Recipes.addShaped({id: ItemID.ingotFinorite, count: 9, data: 0}, [
		"a  ",
		"   ",
		"   "
	], ['a', BlockID.finoriteBlock, 0]);





Recipes.addShaped({id: BlockID.xenoriteBlock, count: 1, data: 0}, [
		"aaa",
		"aaa",
		"aaa"
	], ['a', ItemID.ingotXenorite, 0]);



Recipes.addShaped({id: ItemID.ingotXenorite, count: 9, data: 0}, [
		"a  ",
		"   ",
		"   "
	], ['a', BlockID.xenoriteBlock, 0]);



Recipes.addFurnace(BlockID.coreoriteOre, ItemID.ingotCoreorite, 0)
Recipes.addFurnace(BlockID.finoriteOre, ItemID.ingotFinorite, 0)
Recipes.addFurnace(BlockID.xenoriteOre, ItemID.ingotXenorite, 0)



importLib("ENV", "*");



IDRegistry.genItemID("coreoriteSword");
IDRegistry.genItemID("coreoriteShovel");
IDRegistry.genItemID("coreoritePickaxe");
IDRegistry.genItemID("coreoriteAxe");
IDRegistry.genItemID("coreoriteHoe");
Item.createItem("coreoriteSword", "Coreorite Sword", {name: "swordCoreorite", meta: 0}, {stack: 1});
Item.createItem("coreoriteShovel", "Coreorite Shovel", {name: "shovelCoreorite", meta: 0}, {stack: 1});
Item.createItem("coreoritePickaxe", "Coreorite Pickaxe", {name: "pickaxeCoreorite", meta: 0}, {stack: 1});
Item.createItem("coreoriteAxe", "Coreorite Axe", {name: "axeCoreorite", meta: 0}, {stack: 1});
Item.createItem("coreoriteHoe", "Coreorite Hoe", {name: "hoeCoreorite", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("coreorite", {durability: 1200, level: 4, efficiency: 8, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.coreoriteSword, "coreorite", ToolType.sword);
ToolAPI.setTool(ItemID.coreoriteShovel, "coreorite", ToolType.shovel);
ToolAPI.setTool(ItemID.coreoritePickaxe, "coreorite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.coreoriteAxe, "coreorite", ToolType.axe);
ToolAPI.setTool(ItemID.coreoriteHoe, "coreorite", ToolType.hoe);


Recipes.addShaped({id: ItemID.coreoriteSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.ingotCoreorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.coreoriteShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ingotCoreorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.coreoritePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ingotCoreorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.coreoriteAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ingotCoreorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.coreoriteHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.ingotCoreorite, 0, 'b', 280, 0]);





IDRegistry.genItemID("finoriteSword");
IDRegistry.genItemID("finoriteShovel");
IDRegistry.genItemID("finoritePickaxe");
IDRegistry.genItemID("finoriteAxe");
IDRegistry.genItemID("finoriteHoe");
Item.createItem("finoriteSword", "Finorite Sword", {name: "swordFinorite", meta: 0}, {stack: 1});
Item.createItem("finoriteShovel", "Finorite Shovel", {name: "shovelFinorite", meta: 0}, {stack: 1});
Item.createItem("finoritePickaxe", "Finorite Pickaxe", {name: "pickaxeFinorite", meta: 0}, {stack: 1});
Item.createItem("finoriteAxe", "Finorite Axe", {name: "axeFinorite", meta: 0}, {stack: 1});
Item.createItem("finoriteHoe", "Finorite Hoe", {name: "hoeFinorite", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("finorite", {durability: 1600, level: 4, efficiency: 9, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.finoriteSword, "finorite", ToolType.sword);
ToolAPI.setTool(ItemID.finoriteShovel, "finorite", ToolType.shovel);
ToolAPI.setTool(ItemID.finoritePickaxe, "finorite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.finoriteAxe, "finorite", ToolType.axe);
ToolAPI.setTool(ItemID.finoriteHoe, "finorite", ToolType.hoe);


Recipes.addShaped({id: ItemID.finoriteSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.ingotFinorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.finoriteShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ingotFinorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.finoritePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ingotFinorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.finoriteAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ingotFinorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.finoriteHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.ingotFinorite, 0, 'b', 280, 0]);





IDRegistry.genItemID("xenoriteSword");
IDRegistry.genItemID("xenoriteShovel");
IDRegistry.genItemID("xenoritePickaxe");
IDRegistry.genItemID("xenoriteAxe");
IDRegistry.genItemID("xenoriteHoe");
Item.createItem("xenoriteSword", "Xenorite Sword", {name: "swordXenorite", meta: 0}, {stack: 1});
Item.createItem("xenoriteShovel", "Xenorite Shovel", {name: "shovelXenorite", meta: 0}, {stack: 1});
Item.createItem("xenoritePickaxe", "Xenorite Pickaxe", {name: "pickaxeXenorite", meta: 0}, {stack: 1});
Item.createItem("xenoriteAxe", "Xenorite Axe", {name: "axeXenorite", meta: 0}, {stack: 1});
Item.createItem("xenoriteHoe", "Xenorite Hoe", {name: "hoeXenorite", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("xenorite", {durability: 2000, level: 4, efficiency: 9, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.xenoriteSword, "xenorite", ToolType.sword);
ToolAPI.setTool(ItemID.xenoriteShovel, "xenorite", ToolType.shovel);
ToolAPI.setTool(ItemID.xenoritePickaxe, "xenorite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.xenoriteAxe, "xenorite", ToolType.axe);
ToolAPI.setTool(ItemID.xenoriteHoe, "xenorite", ToolType.hoe);


Recipes.addShaped({id: ItemID.xenoriteSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.ingotXenorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.xenoriteShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.ingotXenorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.xenoritePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ingotXenorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.xenoriteAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.ingotXenorite, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.xenoriteHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.ingotXenorite, 0, 'b', 280, 0]);





IDRegistry.genItemID("coreoriteHelmet");
IDRegistry.genItemID("coreoriteChestplate");
IDRegistry.genItemID("coreoriteLeggings");
IDRegistry.genItemID("coreoriteBoots");

Item.createArmorItem("coreoriteHelmet", "Coreorite Helmet", {name: "helmetCoreorite"}, {type: "helmet", armor: 4, durability: 1200, texture: "armor/coreorite_1.png"});
Item.createArmorItem("coreoriteChestplate", "Coreorite Chestplate", {name: "chestplateCoreorite"}, {type: "chestplate", armor: 6, durability: 1200, texture: "armor/coreorite_1.png"});
Item.createArmorItem("coreoriteLeggings", "Coreorite Leggings", {name: "leggingsCoreorite"}, {type: "leggings", armor: 6, durability: 1200, texture: "armor/coreorite_2.png"});
Item.createArmorItem("coreoriteBoots", "Coreorite Boots", {name: "bootsCoreorite"}, {type: "boots", armor: 4, durability: 1200, texture: "armor/coreorite_1.png"});

Recipes.addShaped({id: ItemID.coreoriteHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.ingotCoreorite, 0]);

Recipes.addShaped({id: ItemID.coreoriteChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.ingotCoreorite, 0]);

Recipes.addShaped({id: ItemID.coreoriteLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.ingotCoreorite, 0]);

Recipes.addShaped({id: ItemID.coreoriteBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.ingotCoreorite, 0]);





IDRegistry.genItemID("finoriteHelmet");
IDRegistry.genItemID("finoriteChestplate");
IDRegistry.genItemID("finoriteLeggings");
IDRegistry.genItemID("finoriteBoots");

Item.createArmorItem("finoriteHelmet", "Finorite Helmet", {name: "helmetFinorite"}, {type: "helmet", armor: 5, durability: 1600, texture: "armor/finorite_1.png"});
Item.createArmorItem("finoriteChestplate", "Finorite Chestplate", {name: "chestplateFinorite"}, {type: "chestplate", armor: 7, durability: 1600, texture: "armor/finorite_1.png"});
Item.createArmorItem("finoriteLeggings", "Finorite Leggings", {name: "leggingsFinorite"}, {type: "leggings", armor: 7, durability: 1600, texture: "armor/finorite_2.png"});
Item.createArmorItem("finoriteBoots", "Finorite Boots", {name: "bootsFinorite"}, {type: "boots", armor: 5, durability: 1600, texture: "armor/finorite_1.png"});

Recipes.addShaped({id: ItemID.finoriteHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.ingotFinorite, 0]);

Recipes.addShaped({id: ItemID.finoriteChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.ingotFinorite, 0]);

Recipes.addShaped({id: ItemID.finoriteLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.ingotFinorite, 0]);

Recipes.addShaped({id: ItemID.finoriteBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.ingotFinorite, 0]);





IDRegistry.genItemID("xenoriteHelmet");
IDRegistry.genItemID("xenoriteChestplate");
IDRegistry.genItemID("xenoriteLeggings");
IDRegistry.genItemID("xenoriteBoots");

Item.createArmorItem("xenoriteHelmet", "Xenorite Helmet", {name: "helmetXenorite"}, {type: "helmet", armor: 6, durability: 2000, texture: "armor/xenorite_1.png"});
Item.createArmorItem("xenoriteChestplate", "Xenorite Chestplate", {name: "chestplateXenorite"}, {type: "chestplate", armor: 8, durability: 2000, texture: "armor/xenorite_1.png"});
Item.createArmorItem("xenoriteLeggings", "Xenorite Leggings", {name: "leggingsXenorite"}, {type: "leggings", armor: 8, durability: 2000, texture: "armor/xenorite_2.png"});
Item.createArmorItem("xenoriteBoots", "Xenorite Boots", {name: "bootsXenorite"}, {type: "boots", armor: 6, durability: 2000, texture: "armor/xenorite_1.png"});

Recipes.addShaped({id: ItemID.xenoriteHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.ingotXenorite, 0]);

Recipes.addShaped({id: ItemID.xenoriteChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.ingotXenorite, 0]);

Recipes.addShaped({id: ItemID.xenoriteLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.ingotXenorite, 0]);

Recipes.addShaped({id: ItemID.xenoriteBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.ingotXenorite, 0]);