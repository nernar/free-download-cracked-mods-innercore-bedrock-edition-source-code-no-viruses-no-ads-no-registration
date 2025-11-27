IDRegistry.genItemID("kroniteDust");
Item.createItem("kroniteDust", "Kronite Dust", {name: "kroniteDust", meta: 0}, {stack: 64});

IDRegistry.genItemID("kroniteGem");
Item.createItem("kroniteGem", "Kronite Gem", {name: "kroniteGem", meta: 0}, {stack: 64});

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 2,
 explosionres: 2
}, "stone");

IDRegistry.genBlockID("packedKronite");
Block.createBlock("packedKronite", [
 {name: "Packed Kronite", texture: [["packedKronite", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.packedKronite, "stone", 2, true);









IDRegistry.genBlockID("kroniteOre");
Block.createBlock("kroniteOre", [
 {name: "Kronite Ore", texture: [["kronite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.kroniteOre, "stone", 3, true);

Block.registerDropFunction("kroniteOre", function(coords, blockID, blockData, level, enchant){
 if(level > 2){
  if(enchant.silk){
   return [[BlockID.kroniteOre, 1, 0]];
  }
  ToolAPI.dropOreExp(coords, 3, 5, enchant.experience);
  return [[ItemID.kroniteDust, 2, 0]]
 }
 return [];
}, 3);




Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.kroniteOre, 0, 3);
    }
}
)



importLib("ToolType", "*");



Recipes.addShaped({id: ItemID.kroniteGem, count: 1, data: 0}, [
	" a ",
	"aaa",
	" a "
], ['a', ItemID.kroniteDust, 0]);

IDRegistry.genItemID("dirtRod");
Item.createItem("dirtRod", "Dirt Rod", {name: "dirtRod", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.dirtRod, count: 4, data: 0}, [
	"a  ",
	"a  ",
	"   "
], ['a', 3, 0]);

IDRegistry.genBlockID("ebonyOre");
Block.createBlock("ebonyOre", [
 {name: "Ebony Ore", texture: [["ebony_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.ebonyOre, "stone", 3, true);

IDRegistry.genItemID("ebonyIngot");
Item.createItem("ebonyIngot", "Ebony Ingot", {name: "ebonyIngot", meta: 0}, {stack: 64});

Recipes.addFurnace(BlockID.ebonyOre, ItemID.ebonyIngot, 0);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ebonyOre, 0, 3);
    }
}
)



IDRegistry.genItemID("dirtPickaxe");

Item.createItem("dirtPickaxe", "Dirt Pickaxe", {name: "dirtPickaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("dirt", {durability: 30, level: 1, efficiency: 30, damage: 10, enchantability: 20});

ToolAPI.setTool(ItemID.dirtPickaxe, "dirt", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.dirtPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', 3, 0, 'b', ItemID.dirtRod, 0]);



IDRegistry.genItemID("ebonyPickaxe");

Item.createItem("ebonyPickaxe", "Ebony Pickaxe", {name: "ebonyPickaxe", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("ebony", {durability: 2400, level: 5, efficiency: 20, damage: 10, enchantability: 20});

ToolAPI.setTool(ItemID.ebonyPickaxe, "ebony", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.ebonyPickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.ebonyIngot, 0, 'b', 280, 0]);



IDRegistry.genBlockID("kroniteBlock");
Block.createBlock("kroniteBlock", [
 {name: "Kronite Block", texture: [["kroniteBlock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.kroniteBlock, "stone", 2, true);

Recipes.addShaped({id: BlockID.kroniteBlock, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.kroniteGem, 0]);

Recipes.addShaped({id: BlockID.packedKronite, count: 4, data: 0}, [
	"   ",
	"aa ",
	"aa "
], ['a', BlockID.kroniteBlock, 0]);



Recipes.addShaped({id: ItemID.kroniteGem, count: 9, data: 0}, [
	"a  ",
	"   ",
	"   "
], ['a', BlockID.kroniteBlock, 0]);



IDRegistry.genItemID("kroniteSword");
IDRegistry.genItemID("kroniteShovel");
IDRegistry.genItemID("kronitePickaxe");
IDRegistry.genItemID("kroniteAxe");

Item.createItem("kroniteSword", "Kronite Sword", {name: "kroniteSword", meta: 0}, {stack: 1});
Item.createItem("kroniteShovel", "Kronite Shovel", {name: "kroniteShovel", meta: 0}, {stack: 1});
Item.createItem("kronitePickaxe", "Kronite Pickaxe", {name: "kronitePickaxe", meta: 0}, {stack: 1});
Item.createItem("kroniteAxe", "Kronite Axe", {name: "kroniteAxe", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("kronite", {durability: 2101, level: 4, efficiency: 15, damage: 9, enchantability: 20});
ToolAPI.setTool(ItemID.kroniteSword, "kronite", ToolType.sword);
ToolAPI.setTool(ItemID.kroniteShovel, "kronite", ToolType.shovel);
ToolAPI.setTool(ItemID.kronitePickaxe, "kronite", ToolType.pickaxe);
ToolAPI.setTool(ItemID.kroniteAxe, "kronite", ToolType.axe);





IDRegistry.genItemID("kroniteWarAxe");
Item.createItem("kroniteWarAxe", "Kronite War Axe", {name: "kroniteWarAxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("kroniteWarAxe", {durability: 2101, level: 4, efficiency: 15, damage: 11, enchantability: 20});
ToolAPI.setTool(ItemID.kroniteWarAxe, "kroniteWarAxe", ToolType.sword);



IDRegistry.genItemID("reenforcedKroniteSword");
Item.createItem("reenforcedKroniteSword", "ReEnforced Sword", {name: "reenforcedKroniteSword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("reenforcedKroniteSword", {durability: 101, level: 4, efficiency: 15, damage: 14, enchantability: 20});
ToolAPI.setTool(ItemID.reenforcedKroniteSword, "reenforcedKroniteSword", ToolType.sword);



Recipes.addShaped({id: ItemID.kroniteSword, count: 1, data: 0}, [
	"a",
	"a",
	"b"
], ['a', ItemID.kroniteGem, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.kroniteShovel, count: 1, data: 0}, [
	"a",
	"b",
	"b"
], ['a', ItemID.kroniteGem, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.kronitePickaxe, count: 1, data: 0}, [
	"aaa",
	" b ",
	" b "
], ['a', ItemID.kroniteGem, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.kroniteAxe, count: 1, data: 0}, [
	"aa",
	"ab",
	" b"
], ['a', ItemID.kroniteGem, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.kroniteWarAxe, count: 1, data: 0}, [
	"aaa",
	"aba",
	" b "
], ['a', ItemID.kroniteGem, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.reenforcedKroniteSword, count: 1, data: 0}, [
	" b ",
	"aba",
	" c "
], ['a', ItemID.kroniteDust, 0, 'b', BlockID.kroniteBlock, 0, 'c', ItemID.kroniteSword, 0]);



IDRegistry.genItemID("kroniteStaff");
Item.createItem("kroniteStaff", "Kronite Staff", {name: "kroniteStaff", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.kroniteStaff, count: 4, data: 0}, [
	" bc",
	" ab",
	"a  "
], ['a', 280, 0, 'b', ItemID.kroniteGem, 0, 'c', ItemID.kroniteDust, 0]);

Item.registerUseFunctionForID(ItemID.kroniteStaff, function(coords, item, block){
 World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, 10, 0)
})









IDRegistry.genItemID("kroniteHelmet");
IDRegistry.genItemID("kroniteChestplate");
IDRegistry.genItemID("kroniteLeggings");
IDRegistry.genItemID("kroniteBoots");

Item.createArmorItem("kroniteHelmet", "Kronite Helmet", {name: "kroniteHelmet"}, {type: "helmet", armor: 4, durability: 496, texture: "armor/kronite_1.png"});
Item.createArmorItem("kroniteChestplate", "Kronite Chestplate", {name: "kroniteChestplate"}, {type: "chestplate", armor: 6, durability: 721, texture: "armor/kronite_1.png"});
Item.createArmorItem("kroniteLeggings", "Kronite Leggings", {name: "kroniteLeggings"}, {type: "leggings", armor: 6, durability: 676, texture: "armor/kronite_2.png"});
Item.createArmorItem("kroniteBoots", "Kronite Boots", {name: "kroniteBoots"}, {type: "boots", armor: 4, durability: 586, texture: "armor/kronite_1.png"});

Recipes.addShaped({id: ItemID.kroniteHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.kroniteGem, 0]);

Recipes.addShaped({id: ItemID.kroniteChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.kroniteGem, 0]);

Recipes.addShaped({id: ItemID.kroniteLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.kroniteGem, 0]);

Recipes.addShaped({id: ItemID.kroniteBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.kroniteGem, 0]);










