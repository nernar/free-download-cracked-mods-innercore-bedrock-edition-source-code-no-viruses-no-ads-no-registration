var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");

IDRegistry.genBlockID("super_coal");
Block.createBlock("super_coal", [
	{name: "Super Coal Ore", texture: [["newsuper_coal", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_coal, "stone", 3, true);

Block.registerDropFunction("super_coal", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 12, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_iron");
Block.createBlock("super_iron", [
	{name: "Super Iron Ore", texture: [["newsuper_iron", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_iron, "stone", 3, true);

Block.registerDropFunction("super_iron", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_gold");
Block.createBlock("super_gold", [
	{name: "Super Gold Ore", texture: [["newsuper_gold", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_gold, "stone", 3, true);

Block.registerDropFunction("super_gold", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_lapis");
Block.createBlock("super_lapis", [
	{name: "Super Lapis Ore", texture: [["newsuper_lapis", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_lapis, "stone", 3, true);

Block.registerDropFunction("super_lapis", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 32, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_redstone");
Block.createBlock("super_redstone", [
	{name: "Super Redstone Ore", texture: [["newsuper_redstone", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_redstone, "stone", 3, true);

Block.registerDropFunction("super_redstone", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 18, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_emerald");
Block.createBlock("super_emerald", [
	{name: "Super Emerald Ore", texture: [["newsuper_emerald", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_emerald, "stone", 3, true);

Block.registerDropFunction("super_emerald", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 6, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_diamond");
Block.createBlock("super_diamond", [
	{name: "Super Diamond Ore", texture: [["newsuper_diamond", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_diamond, "stone", 3, true);

Block.registerDropFunction("super_diamond", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 6, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_quartz");
Block.createBlock("super_quartz", [
	{name: "Super Quartz Ore", texture: [["newsuper_quartz", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_quartz, "stone", 3, true);

Block.registerDropFunction("super_quartz", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[406, 16, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_copper");
Block.createBlock("super_copper", [
	{name: "Super Copper Ore", texture: [["newsuper_copper", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_copper, "stone", 3, true);

Block.registerDropFunction("super_copper", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreCopper, 16, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_iridium");
Block.createBlock("super_iridium", [
	{name: "Super Iridium Ore", texture: [["newsuper_iridium", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_iridium, "stone", 3, true);

Block.registerDropFunction("super_iridium", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.iridiumChunk, 10, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_tin");
Block.createBlock("super_tin", [
	{name: "Super Tin Ore", texture: [["newsuper_tin", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_tin, "stone", 3, true);

Block.registerDropFunction("super_tin", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreTin, 16, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("super_uranium");
Block.createBlock("super_uranium", [
	{name: "Super Uranium Ore", texture: [["newsuper_uranium", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.super_uranium, "stone", 3, true);

Block.registerDropFunction("super_uranium", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.uranium, 10, 0]]
	}
	return [];
}, 3);

Item.addCreativeGroup("super_ores", Translation.translate("Super Ores"), [
    BlockID.super_coal,
    BlockID.super_iron,
    BlockID.super_gold,
    BlockID.super_lapis,
    BlockID.super_redstone,
    BlockID.super_emerald,
    BlockID.super_diamond,
    BlockID.super_quartz,
    BlockID.super_copper,
    BlockID.super_iridium,
    BlockID.super_tin,
    BlockID.super_uranium,
]);