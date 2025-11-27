/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 3
*/





var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");



IDRegistry.genBlockID("coalpowderblock");
Block.createBlock("coalpowderblock", [
	{name: "Coal Powder Block", texture: [["coal_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.coalpowderblock, "stone", 2, true);
Block.setDestroyLevel("coalpowderblock", 2);



IDRegistry.genBlockID("diamondpowderblock");
Block.createBlock("diamondpowderblock", [
	{name: "Diamond Powder Block", texture: [["diamond_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.diamondpowderblock, "stone", 2, true);
Block.setDestroyLevel("diamondpowderblock", 2);



IDRegistry.genBlockID("emeraldpowderblock");
Block.createBlock("emeraldpowderblock", [
	{name: "Emerald Powder Block", texture: [["emerald_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.emeraldpowderblock, "stone", 2, true);
Block.setDestroyLevel("emeraldpowderblock", 2);



IDRegistry.genBlockID("goldpowderblock");
Block.createBlock("goldpowderblock", [
	{name: "Gold Powder Block", texture: [["gold_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.goldpowderblock, "stone", 2, true);
Block.setDestroyLevel("goldpowderblock", 2);



IDRegistry.genBlockID("ironpowderblock");
Block.createBlock("ironpowderblock", [
	{name: "Iron Powder Block", texture: [["iron_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.ironpowderblock, "stone", 2, true);
Block.setDestroyLevel("ironpowderblock", 2);



IDRegistry.genBlockID("lapislazulipowderblock");
Block.createBlock("lapislazulipowderblock", [
	{name: "Lapis Lazuli Powder Block", texture: [["lapis_lazuli_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.lapislazulipowderblock, "stone", 2, true);
Block.setDestroyLevel("lapislazulipowderblock", 2);



IDRegistry.genBlockID("netherquartzpowderblock");
Block.createBlock("netherquartzpowderblock", [
	{name: "Nether Quartz Powder Block", texture: [["nether_quartz_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherquartzpowderblock, "stone", 2, true);
Block.setDestroyLevel("netherquartzpowderblock", 2);



IDRegistry.genBlockID("redstonepowderblock");
Block.createBlock("redstonepowderblock", [
	{name: "Redstone Powder Block", texture: [["redstone_powder_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.redstonepowderblock, "stone", 2, true);
Block.setDestroyLevel("redstonepowderblock", 2);





IDRegistry.genItemID("coalpowder");
Item.createThrowableItem("coalpowder", "Coal Powder", {name:"coal_powder"}, {stack:64});

IDRegistry.genItemID("diamondpowder");
Item.createThrowableItem("diamondpowder", "Diamond Powder", {name:"diamond_powder"}, {stack:64});

IDRegistry.genItemID("emeraldpowder");
Item.createThrowableItem("emeraldpowder", "Emerald Powder", {name:"emerald_powder"}, {stack:64});

IDRegistry.genItemID("enderpearlpowder");
Item.createThrowableItem("enderpearlpowder", "Ender Pearl Powder", {name:"ender_pearl_powder"}, {stack:64});

IDRegistry.genItemID("goldpowder");
Item.createThrowableItem("goldpowder", "Gold Powder", {name:"gold_powder"}, {stack:64});

IDRegistry.genItemID("ironpowder");
Item.createThrowableItem("ironpowder", "Iron Powder", {name:"iron_powder"}, {stack:64});

IDRegistry.genItemID("lapislazulipowder");
Item.createThrowableItem("lapislazulipowder", "Lapis Lazuli Powder", {name:"lapis_lazuli_powder"}, {stack:64});

IDRegistry.genItemID("leatherpowder");
Item.createThrowableItem("leatherpowder", "Leather Powder", {name:"leather_powder"}, {stack:64});

IDRegistry.genItemID("netherbrickpowder");
Item.createThrowableItem("netherbrickpowder", "Nether Brick Powder", {name:"nether_brick_powder"}, {stack:64});

IDRegistry.genItemID("netherquartzpowder");
Item.createThrowableItem("netherquartzpowder", "Nether Quartz Powder", {name:"nether_quartz_powder"}, {stack:64});

IDRegistry.genItemID("prismarinecrystalpowder");
Item.createThrowableItem("prismarinecrystalpowder", "Prismarine Crystal Powder", {name:"prismarine_crystal_powder"}, {stack:64});

IDRegistry.genItemID("prismarineshardpowder");
Item.createThrowableItem("prismarineshardpowder", "Prismarine Shard Powder", {name:"prismarine_shard_powder"}, {stack:64});

IDRegistry.genItemID("slimepowder");
Item.createThrowableItem("slimepowder", "Slime Powder", {name:"slime_powder"}, {stack:64});

IDRegistry.genItemID("sugarcanepowder");
Item.createThrowableItem("sugarcanepowder", "Sugar Cane Powder", {name:"sugar_cane_powder"}, {stack:64});

IDRegistry.genItemID("wheatpowder");
Item.createThrowableItem("wheatpowder", "Wheat Powder", {name:"wheat_powder"}, {stack:64});





var CRAFTING_TOOL_ITEM_MAX_DAMAGE = 96;

IDRegistry.genItemID("mortarandpestle");
Item.createItem("mortarandpestle", "Mortar and Pestle", {name: "mortar_and_pestle"}, {stack: 1});
Item.setMaxDamage(ItemID.mortarandpestle, CRAFTING_TOOL_ITEM_MAX_DAMAGE);

function addRecipeWithCraftingTool(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
		for (var i in field){
			if (field[i].id == tool){
				field[i].data++;
				if (field[i].data >= CRAFTING_TOOL_ITEM_MAX_DAMAGE){
					field[i].id = field[i].count = field[i].data = 0;
				}
			}
			else {
				api.decreaseFieldSlot(i);
			}
		}
	});
}

Recipes.addShaped({id: ItemID.mortarandpestle, count: 1, data: 0}, [
	"a  ",
	" b ",
	"   "
], ['a', 280, 0, 'b', 281, 0]);




Callback.addCallback("PostLoaded", function(){
	addRecipeWithCraftingTool({id: ItemID.coalpowder, count: 2, data: 0}, [{id: 263, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.diamondpowder, count: 2, data: 0}, [{id: 264, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.emeraldpowder, count: 2, data: 0}, [{id: 388, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.enderpearlpowder, count: 2, data: 0}, [{id: 368, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.goldpowder, count: 2, data: 0}, [{id: 266, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.ironpowder, count: 2, data: 0}, [{id: 265, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.lapislazulipowder, count: 2, data: 0}, [{id: 351, data: 4}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.leatherpowder, count: 2, data: 0}, [{id: 334, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.netherbrickpowder, count: 2, data: 0}, [{id: 112, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.netherquartzpowder, count: 2, data: 0}, [{id: 406, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.prismarinecrystalpowder, count: 2, data: 0}, [{id: 168, data: 2}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.prismarineshardpowder, count: 2, data: 0}, [{id: 168, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.slimepowder, count: 2, data: 0}, [{id: 341, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.sugarcanepowder, count: 2, data: 0}, [{id: 338, data: 0}], ItemID.mortarandpestle);
	addRecipeWithCraftingTool({id: ItemID.wheatpowder, count: 2, data: 0}, [{id: 296, data: 0}], ItemID.mortarandpestle);
});





Recipes.addFurnace(ItemID.enderpearlpowder, 368, 0);
Recipes.addFurnace(ItemID.leatherpowder, 334, 0);
Recipes.addFurnace(ItemID.netherbrickpowder, 112, 0);
Recipes.addFurnace(ItemID.prismarinecrystalpowder, 168, 2);
Recipes.addFurnace(ItemID.prismarineshardpowder, 168, 0);
Recipes.addFurnace(ItemID.slimepowder, 341, 0);
Recipes.addFurnace(ItemID.sugarcanepowder, 338, 0);
Recipes.addFurnace(ItemID.wheatpowder, 296, 0);







Recipes.addShaped({id: BlockID.coalpowderblock, count: 1, data: 0}, [
	"aa ",
	"aa ",
	"   "
], ['a', ItemID.coalpowder, 0]);

Recipes.addShaped({id: BlockID.diamondpowderblock, count: 1, data: 0}, [
	"aa ",
	"aa ",
	"   "
], ['a', ItemID.diamondpowder, 0]);

Recipes.addShaped({id: BlockID.emeraldpowderblock, count: 1, data: 0}, [
	"aa ",
	"aa ",
	"   "
], ['a', ItemID.emeraldpowder, 0]);

Recipes.addShaped({id: BlockID.goldpowderblock, count: 1, data: 0}, [
	"aa ",
	"aa ",
	"   "
], ['a', ItemID.goldpowder, 0]);

Recipes.addShaped({id: BlockID.ironpowderblock, count: 1, data: 0}, [
	"aa ",
	"aa ",
	"   "
], ['a', ItemID.ironpowder, 0]);

Recipes.addShaped({id: BlockID.lapislazulipowderblock, count: 1, data: 0}, [
	"aa ",
	"aa ",
	"   "
], ['a', ItemID.lapislazulipowder, 0]);

Recipes.addShaped({id: BlockID.netherquartzpowderblock, count: 1, data: 0}, [
	"aa ",
	"aa ",
	"   "
], ['a', ItemID.netherquartzpowder, 0]);

Recipes.addShaped({id: BlockID.redstonepowderblock, count: 1, data: 0}, [
	"aa ",
	"aa ",
	"   "
], ['a', ItemID.redstonepowder, 0]);



Recipes.addFurnace(BlockID.coalpowderblock, 173, 0);
Recipes.addFurnace(BlockID.diamondpowderblock, 57, 0);
Recipes.addFurnace(BlockID.emeraldpowderblock, 133, 0);
Recipes.addFurnace(BlockID.goldpowderblock, 41, 0);
Recipes.addFurnace(BlockID.ironpowderblock, 42, 0);
Recipes.addFurnace(BlockID.lapislazulipowderblock, 22, 0);
Recipes.addFurnace(BlockID.netherquartzpowderblock, 155, 0);
Recipes.addFurnace(BlockID.redstonepowderblock, 152, 0);