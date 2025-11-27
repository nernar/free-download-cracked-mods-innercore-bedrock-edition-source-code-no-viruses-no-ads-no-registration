var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");

IDRegistry.genBlockID("WoodPickOre");
Block.createBlock("WoodPickOre", [
	{name: "Wood Pickaxe Stone", texture: [["new_WoodPickOre", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.WoodPickOre, "stone", 1, true);

Block.registerDropFunction("WoodPickOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[270, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("PickaxeOre");
Block.createBlock("PickaxeOre", [
	{name: "Stone Pickaxe Stone", texture: [["new_StonePickOre", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.PickaxeOre, "stone", 1, true);

Block.registerDropFunction("PickaxeOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[274, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("IronPickOre");
Block.createBlock("IronPickOre", [
	{name: "Iron Pickaxe Stone", texture: [["new_IronPickOre", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.IronPickOre, "stone", 1, true);

Block.registerDropFunction("IronPickOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[257, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("GoldPickaxeOre");
Block.createBlock("GoldPickaxeOre", [
	{name: "Gold Pickaxe Stone", texture: [["new_GoldPickOre", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.GoldPickaxeOre, "stone", 1, true);

Block.registerDropFunction("GoldPickaxeOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[285, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("DiamondPickaxeOre");
Block.createBlock("DiamondPickaxeOre", [
	{name: "Diamond Pickaxe Stone", texture: [["new_DiamondPickOre", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.DiamondPickaxeOre, "stone", 1, true);

Block.registerDropFunction("DiamondPickaxeOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[278, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("NetheritePickaxeOre");
Block.createBlock("NetheritePickaxeOre", [
	{name: "Netherite Pickaxe Stone", texture: [["new_netherite_pickaxe", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.NetheritePickaxeOre, "stone", 1, true);

Block.registerDropFunction("NetheritePickaxeOre", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[VanillaItemID.netherite_pickaxe, 1, 0]]
	}
	return [];
}, 3);