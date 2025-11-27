IDRegistry.genItemID("carbonado");
Item.createItem("carbonado", "Carbonado", {name: "carbonado", meta: 0}, {stack: 64});

Translation.addTranslation("Carbonado", {ru: "Карбонадо"});

IDRegistry.genItemID("carbonadoShard");
Item.createItem("carbonadoShard", "Carbonado Shard", {name: "carbonadoShard", meta: 0}, {stack: 64});

Translation.addTranslation("Carbonado Shard", {ru: "Карбонадовый осколок"});

IDRegistry.genItemID("carbonadoShardMolten");
Item.createItem("carbonadoShardMolten", "Carbonado Shard Molten", {name: "carbonadoShardMolten", meta: 0}, {stack: 64});

Translation.addTranslation("Carbonado Shard Molten", {ru: "Карбонадовый расплавленный осколок"});

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: false,
 destroytime: 2,
 explosionres: 9999999
}, "stone");

IDRegistry.genBlockID("carbonadoOre");
Block.createBlock("carbonadoOre", [
 {name: "Carbonado Ore", texture: [["carbonadoOre", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.carbonadoOre, "stone", 4, true);

Translation.addTranslation("Carbonado Ore", {ru: "Карбонадовая руда"});

Block.registerDropFunction("carbonadoOre", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.carbonadoOre, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[ItemID.carbonado, 1, 0]]
 }
 return [];
}, 3);




Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 7);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.carbonadoOre, 0, 3);
    }
}
)



Recipes.addFurnace(ItemID.carbonadoShard, ItemID.carbonadoShardMolten, 0);



IDRegistry.genBlockID("carbonadoGlass");
Block.createBlock("carbonadoGlass", [
 {name: "Carbonado Glass", texture: [["carbonadoGlass", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.carbonadoGlass, "stone", 2, true);

Translation.addTranslation("Carbonado Glass", {ru: "Карбонадовое стекло"});

Block.registerDropFunction("carbonadoGlass", function(coords, blockID, blockData, level){ 
if (level > 2){ 
return [[ItemID.carbonado, 0]] 
} 
return []; 
}, 2);






importLib("ToolType", "*");







IDRegistry.genBlockID("carbonadoBlock");
Block.createBlock("carbonadoBlock", [
 {name: "Carbonado Block", texture: [["carbonadoBlock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.carbonadoBlock, "stone", 2, true);

Translation.addTranslation("Carbonado Block", {ru: "Карбонадовый блок"});

Recipes.addShaped({id: BlockID.carbonadoBlock, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.carbonado, 0]);


Recipes.addShaped({id: ItemID.carbonado, count: 9, data: 0}, [
	"a  ",
	"   ",
	"   "
], ['a', BlockID.carbonadoBlock, 0]);


Recipes.addShaped({id: ItemID.carbonadoShard, count: 4, data: 0}, [
	"a  ",
	"   ",
	"   "
], ['a', ItemID.carbonado, 0]);


Recipes.addShaped({id: ItemID.carbonadoShard, count: 36, data: 0}, [
	"a  ",
	"   ",
	"   "
], ['a', BlockID.carbonadoBlock, 0]);


Recipes.addShaped({id: BlockID.carbonadoGlass, count: 8, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], ['b', 20, 0, 'a', ItemID.carbonadoShardMolten, 0]);



IDRegistry.genItemID("carbonadoSword");
IDRegistry.genItemID("carbonadoShovel");
IDRegistry.genItemID("carbonadoPickaxe");
IDRegistry.genItemID("carbonadoAxe");
IDRegistry.genItemID("carbonadoHoe");

Item.createItem("carbonadoSword", "Carbonado Sword", {name: "carbonadoSword", meta: 0}, {stack: 1});
Item.createItem("carbonadoShovel", "Carbonado Shovel", {name: "carbonadoShovel", meta: 0}, {stack: 1});
Item.createItem("carbonadoPickaxe", "Carbonado Pickaxe", {name: "carbonadoPickaxe", meta: 0}, {stack: 1});
Item.createItem("carbonadoAxe", "Carbonado Axe", {name: "carbonadoAxe", meta: 0}, {stack: 1});
Item.createItem("carbonadoHoe", "Carbonado Hoe", {name: "carbonadoHoe", meta: 0}, {stack: 1});

Translation.addTranslation("Carbonado Sword", {ru: "Карбонадовый меч"});
Translation.addTranslation("Carbonado Shovel", {ru: "Карбонадовая лопата"});
Translation.addTranslation("Carbonado Pickaxe", {ru: "Карбонадовая кирка"});
Translation.addTranslation("Carbonado Axe", {ru: "Карбонадовый топор"});
Translation.addTranslation("Carbonado Hoe", {ru: "Карбонадовая мотыга"});



ToolAPI.addToolMaterial("carbonado", {durability: 2000, level: 5, efficiency: 15, damage: 10, enchantability: 20});
ToolAPI.setTool(ItemID.carbonadoSword, "carbonado", ToolType.sword);
ToolAPI.setTool(ItemID.carbonadoShovel, "carbonado", ToolType.shovel);
ToolAPI.setTool(ItemID.carbonadoPickaxe, "carbonado", ToolType.pickaxe);
ToolAPI.setTool(ItemID.carbonadoAxe, "carbonado", ToolType.axe);
ToolAPI.setTool(ItemID.carbonadoHoe, "carbonado", ToolType.hoe);







Recipes.addShaped({id: ItemID.carbonadoSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.carbonado, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.carbonadoShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.carbonado, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.carbonadoPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.carbonado, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.carbonadoAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.carbonado, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.carbonadoHoe, count: 1, data: 0}, [
	"aa",
	" b",
	" b"
], ['a', ItemID.carbonado, 0, 'b', 280, 0]);






IDRegistry.genItemID("carbonadoHelmet");
IDRegistry.genItemID("carbonadoChestplate");
IDRegistry.genItemID("carbonadoLeggings");
IDRegistry.genItemID("carbonadoBoots");

Item.createArmorItem("carbonadoHelmet", "Carbonado Helmet", {name: "carbonadoHelmet"}, {type: "helmet", armor: 6, durability: 2000, texture: "armor/carbonado_1.png"});
Item.createArmorItem("carbonadoChestplate", "Carbonado Chestplate", {name: "carbonadoChestplate"}, {type: "chestplate", armor: 8, durability: 2000, texture: "armor/carbonado_1.png"});
Item.createArmorItem("carbonadoLeggings", "Carbonado Leggings", {name: "carbonadoLeggings"}, {type: "leggings", armor: 6, durability: 2000, texture: "armor/carbonado_2.png"});
Item.createArmorItem("carbonadoBoots", "Carbonado Boots", {name: "carbonadoBoots"}, {type: "boots", armor: 5, durability: 2000, texture: "armor/carbonado_1.png"});

Translation.addTranslation("Carbonado Helmet", {ru: "Карбонадовый шлем"});
Translation.addTranslation("Carbonado Chestplate", {ru: "Карбонадовая кираса"});
Translation.addTranslation("Carbonado Leggings", {ru: "Карбонадовые поножи"});
Translation.addTranslation("Carbonado Boots", {ru: "Карбонадовые ботинки"});




Recipes.addShaped({id: ItemID.carbonadoHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.carbonado, 0]);

Recipes.addShaped({id: ItemID.carbonadoChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.carbonado, 0]);

Recipes.addShaped({id: ItemID.carbonadoLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.carbonado, 0]);

Recipes.addShaped({id: ItemID.carbonadoBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.carbonado, 0]);