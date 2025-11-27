/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 6
*/



// file: ore.js

var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({ // блок этого типа будет абсолютно прозрачен для света и сам будет слабо светиться
   lightlevel: 15,
   destroytime: 1
 });
 
 IDRegistry.genBlockID("jazzium_ore");
Block.createBlock("jazzium_ore", [
	{name: "Jazzium Ore", texture: [["jazzium_ore", 0], ["jazzium_ore", 0], ["jazzium_ore", 0], ["jazzium_ore", 0], ["jazzium_ore", 0], ["jazzium_ore", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.jazzium_ore, "stone", 3, true);

Block.registerDropFunction("jazzium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.jazzium_ore, 1, 0]]
	}
	return [];
}, 3);




// file: items.js

IDRegistry.genItemID("jazzium_ingot");
Item.createItem("jazzium_ingot", "Jazzium Ingot", {name: "jazzium_ingot"});

IDRegistry.genItemID("flamed_jazzium_ingot");
Item.createItem("flamed_jazzium_ingot", "Flamed Jazzium Ingot", {name: "flamed_jazzium_ingot"});

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 4,
 explosionres: 3
}, "stone");

IDRegistry.genBlockID("jazzium_block");
Block.createBlock("jazzium_block", [
    {name: "Block of Jazzium", texture: [["jazzium_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.jazzium_block, "stone");
Block.setDestroyLevel("jazzium_block", 2);

IDRegistry.genBlockID("flamed_jazzium_block");
Block.createBlock("flamed_jazzium_block", [
    {name: "Block of Flamed Jazzium", texture: [["flamed_jazzium_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.flamed_jazzium_block, "stone");
Block.setDestroyLevel("flamed_jazzium_block", 2);

Recipes.addShaped({id: BlockID.jazzium_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
    ], ['x', ItemID.jazzium_ingot, 0]);

Recipes.addShaped({id: BlockID.flamed_jazzium_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
    ], ['x', ItemID.flamed_jazzium_ingot, 0]);

Recipes.addShaped({id: ItemID.jazzium_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.jazzium_block, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.flamed_jazzium_block, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_ingot, count: 1, data: 0}, [
    "xa"
], ['x', ItemID.jazzium_ingot, 0, 'a', 377, 0]);

Recipes.addFurnace(BlockID.jazzium_ore, ItemID.jazzium_ingot, 0); 




// file: armor.js

IDRegistry.genItemID("flamed_jazzium_helmet");
IDRegistry.genItemID("flamed_jazzium_chestplate");
IDRegistry.genItemID("flamed_jazzium_leggings");
IDRegistry.genItemID("flamed_jazzium_boots");

Item.createArmorItem("flamed_jazzium_helmet", "Flamed Jazzium Helmet", {name: "flamed_jazzium_helmet"}, {type: "helmet", armor: 4, durability: 2120, texture: "armor/flamed_jazzium_layer_1.png"});
Item.createArmorItem("flamed_jazzium_chestplate", "Flamed Jazzium Chestplate", {name: "flamed_jazzium_chestplate"}, {type: "chestplate", armor: 9, durability: 2120, texture: "armor/flamed_jazzium_layer_1.png"});
Item.createArmorItem("flamed_jazzium_leggings", "Flamed Jazzium Leggings", {name: "flamed_jazzium_leggings"}, {type: "leggings", armor: 7, durability: 2120, texture: "armor/flamed_jazzium_layer_2.png"});
Item.createArmorItem("flamed_jazzium_boots", "Flamed Jazzium Boots", {name: "flamed_jazzium_boots"}, {type: "boots", armor: 4, durability: 2120, texture: "armor/flamed_jazzium_layer_1.png"});

Recipes.addShaped({id: ItemID.flamed_jazzium_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.flamed_jazzium_ingot, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_chestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.flamed_jazzium_ingot, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_leggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.flamed_jazzium_ingot, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.flamed_jazzium_ingot, 0]);




// file: orespawn.js

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.jazzium_ore, 0, 7);
    }
}
)




// file: tools.js

importLib("TOOLTYype", "*");
IDRegistry.genItemID("flamed_jazzium_sword");
IDRegistry.genItemID("flamed_jazzium_shovel");
IDRegistry.genItemID("flamed_jazzium_pickaxe");
IDRegistry.genItemID("flamed_jazzium_axe");
IDRegistry.genItemID("flamed_jazzium_hoe");

Item.createItem("flamed_jazzium_sword", "Flamed Jazzium Sword", {name: "flamed_jazzium_sword", meta: 0}, {stack: 1});
Item.createItem("flamed_jazzium_shovel", "Flamed Jazzium Shovel", {name: "flamed_jazzium_shovel", meta: 0}, {stack: 1});
Item.createItem("flamed_jazzium_pickaxe", "Flamed Jazzium Pickaxe", {name: "flamed_jazzium_pickaxe", meta: 0}, {stack: 1});
Item.createItem("flamed_jazzium_axe", "Flamed Jazzium Axe", {name: "flamed_jazzium_axe", meta: 0}, {stack: 1});
Item.createItem("flamed_jazzium_hoe", "Flamed Jazzium Hoe", {name: "flamed_jazzium_hoe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("jazzium", {durability: 2120, level: 4, efficiency: 6, damage: 9, enchantability: 14});
ToolAPI.setTool(ItemID.flamed_jazzium_sword, "jazzium", ToolType.sword);
ToolAPI.setTool(ItemID.flamed_jazzium_shovel, "jazzium", ToolType.shovel);
ToolAPI.setTool(ItemID.flamed_jazzium_pickaxe, "jazzium", ToolType.pickaxe);
ToolAPI.setTool(ItemID.flamed_jazzium_axe, "jazzium", ToolType.axe);
ToolAPI.setTool(ItemID.flamed_jazzium_hoe, "jazzium", ToolType.hoe);

Recipes.addShaped({id: ItemID.flamed_jazzium_sword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_shovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_pickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_axe, count: 1, data: 0}, [
	" aa",
	" ba",
	" b "
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_hoe, count: 1, data: 0}, [
	" aa",
	" b ",
	" b "
], ['a', ItemID.flamed_jazzium_ingot, 0, 'b', 369, 0]);




// file: translation.js

Translation.addTranslation("Flamed Jazzium Helmet", { ru: "Пылающий Джаззиум Шлем" });
Translation.addTranslation("Flamed Jazzium Chestplate", { ru: "Пылающий Джаззиум Нагрудник" });
Translation.addTranslation("Flamed Jazzium Leggings", { ru: "Пылающий Джаззиум Штаны" });
Translation.addTranslation("Flamed Jazzium Boots", { ru: "Пылающий Джаззиум Ботинки" });

Translation.addTranslation("Jazzium Ingot", { ru: "Джаззиум Слиток" });
Translation.addTranslation("Flamed Jazzium Ingot", { ru: "Пылающий Джаззиум Слиток" });
Translation.addTranslation("Block of Jazzium", { ru: "Джаззиум Блок" });
Translation.addTranslation("Block of Flamed Jazzium", { ru: "Пылающий Джаззиум Блок" });
Translation.addTranslation("Jazzium Ore", { ru: "Джаззиум Руда" });

Translation.addTranslation("Flamed Jazzium Sword", { ru: "Пылающий Джаззиум Меч" });
Translation.addTranslation("Flamed Jazzium Shovel", { ru: "Пылающий Джаззиум Лопата" });
Translation.addTranslation("Flamed Jazzium Pickaxe", { ru: "Пылающий Джаззиум Кирка" });
Translation.addTranslation("Flamed Jazzium Axe", { ru: "Пылающий Джаззиум Тапор" });
Translation.addTranslation("Flamed Jazzium Hoe", { ru: "Пылающий Джаззиум Мотыга" });




