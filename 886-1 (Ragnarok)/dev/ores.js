var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");

IDRegistry.genBlockID("annwinite_ore");
Block.createBlock("annwinite_ore", [
	{name: "Annwinite Ore", texture: [["annwinite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.annwinite_ore, "stone", 3, true);

Block.registerDropFunction("annwinite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_annwinite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("diyuite_ore");
Block.createBlock("diyuite_ore", [
	{name: "Diyuite Ore", texture: [["diyuite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.diyuite_ore, "stone", 3, true);

Block.registerDropFunction("diyuite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_diyuite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("duatite_ore");
Block.createBlock("duatite_ore", [
	{name: "Duatite Ore", texture: [["duatite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.duatite_ore, "stone", 3, true);

Block.registerDropFunction("duatite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_duatite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("hadesite_ore");
Block.createBlock("hadesite_ore", [
	{name: "Hadesite Ore", texture: [["hadesite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.hadesite_ore, "stone", 3, true);

Block.registerDropFunction("hadesite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_hadesite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("helheimite_ore");
Block.createBlock("helheimite_ore", [
	{name: "Helheimite Ore", texture: [["helheimite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.helheimite_ore, "stone", 3, true);

Block.registerDropFunction("helheimite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_helheimite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("narakasite_ore");
Block.createBlock("narakasite_ore", [
	{name: "Narakasite Ore", texture: [["narakasite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.narakasite_ore, "stone", 3, true);

Block.registerDropFunction("narakasite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_narakasite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("xibalbaite_ore");
Block.createBlock("xibalbaite_ore", [
	{name: "Xibalbaite Ore", texture: [["xibalbaite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.xibalbaite_ore, "stone", 3, true);

Block.registerDropFunction("xibalbaite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_xibalbaite, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("yomite_ore");
Block.createBlock("yomite_ore", [
	{name: "Yomite Ore", texture: [["yomite_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.yomite_ore, "stone", 3, true);

Block.registerDropFunction("yomite_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.raw_yomite, 1, 0]]
	}
	return [];
}, 3);