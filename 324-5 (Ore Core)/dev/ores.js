IDRegistry.genBlockID("compressed_coal_ore");
Block.createBlock("compressed_coal_ore", [
	{name: "Плотная Угольная Руда", texture: [["compressed_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_coal_ore, "stone", 1, true);

Block.registerDropFunction("compressed_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_diamond_ore");
Block.createBlock("compressed_diamond_ore", [
	{name: "Плотная Алмазная Руда", texture: [["compressed_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_diamond_ore, "stone", 3, true);

Block.registerDropFunction("compressed_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_emerald_ore");
Block.createBlock("compressed_emerald_ore", [
	{name: "Плотная Изумрудная Руда", texture: [["compressed_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_emerald_ore, "stone", 3, true);

Block.registerDropFunction("compressed_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_gold_ore");
Block.createBlock("compressed_gold_ore", [
	{name: "Плотная Золотая Руда", texture: [["compressed_gold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_gold_ore, "stone", 3, true);

Block.registerDropFunction("compressed_gold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_iron_ore");
Block.createBlock("compressed_iron_ore", [
	{name: "Плотная Железная Руда", texture: [["compressed_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_iron_ore, "stone", 3, true);

Block.registerDropFunction("compressed_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_lapis_ore");
Block.createBlock("compressed_lapis_ore", [
	{name: "Плотная Лазуритовая Руда", texture: [["compressed_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_lapis_ore, "stone", 3, true);

Block.registerDropFunction("compressed_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 8, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_coal_ore");
Block.createBlock("compressed_nether_coal_ore", [
	{name: "Адская Угольная Руда", texture: [["compressed_nether_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_coal_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_diamond_ore");
Block.createBlock("compressed_nether_diamond_ore", [
	{name: "Адская Алмазная Руда", texture: [["compressed_nether_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_diamond_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_emerald_ore");
Block.createBlock("compressed_nether_emerald_ore", [
	{name: "Адская Изумрудная Руда", texture: [["compressed_nether_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_emerald_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_glowstone_ore");
Block.createBlock("compressed_nether_glowstone_ore", [
	{name: "Адская Светопыльная Руда", texture: [["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0], ["compressed_nether_glowstone_ore", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_glowstone_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_glowstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[348, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_gold_ore");
Block.createBlock("compressed_nether_gold_ore", [
	{name: "Адская Золотая Руда", texture: [["compressed_nether_gold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_gold_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_gold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_iron_ore");
Block.createBlock("compressed_nether_iron_ore", [
	{name: "Адская Железная Руда", texture: [["compressed_nether_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_iron_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_lapis_ore");
Block.createBlock("compressed_nether_lapis_ore", [
	{name: "Адская Лазуритовая Руда", texture: [["compressed_nether_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_lapis_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 8, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_quartz_ore");
Block.createBlock("compressed_nether_quartz_ore", [
	{name: "Адская Кварцевая Руда", texture: [["compressed_nether_quartz_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_quartz_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_quartz_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[406, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_nether_redstone_ore");
Block.createBlock("compressed_nether_redstone_ore", [
	{name: "Адская руда Красной пыли", texture: [["compressed_nether_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_nether_redstone_ore, "stone", 3, true);

Block.registerDropFunction("compressed_nether_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_quartz_ore");
Block.createBlock("compressed_quartz_ore", [
	{name: "Плотная Кварцевая Руда", texture: [["compressed_quartz_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_quartz_ore, "stone", 3, true);

Block.registerDropFunction("compressed_quartz_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[406, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_redstone_ore");
Block.createBlock("compressed_redstone_ore", [
	{name: "Плотная руда Красной", texture: [["compressed_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_redstone_ore, "stone", 3, true);

Block.registerDropFunction("compressed_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_bone_ore");
Block.createBlock("end_bone_ore", [
	{name: "Кости края", texture: [["end_bone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_bone_ore, "stone", 3, true);

Block.registerDropFunction("end_bone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.end_bone_ore, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_coal_ore");
Block.createBlock("end_coal_ore", [
	{name: "Угольная руда края", texture: [["end_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_coal_ore, "stone", 3, true);

Block.registerDropFunction("end_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_diamond_ore");
Block.createBlock("end_diamond_ore", [
	{name: "Алмазная руда края", texture: [["end_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_diamond_ore, "stone", 3, true);

Block.registerDropFunction("end_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_emerald_ore");
Block.createBlock("end_emerald_ore", [
	{name: "Изумрудная руда края", texture: [["end_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_emerald_ore, "stone", 3, true);

Block.registerDropFunction("end_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore");
Block.createBlock("end_fossil_ore", [
	{name: "Ископаемое края", texture: [["end_fossil_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore1");
Block.createBlock("end_fossil_ore1", [
	{name: "Ископаемое края", texture: [["end_fossil_ore1", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore1, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore1", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil1, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore2");
Block.createBlock("end_fossil_ore2", [
	{name: "Ископаемое края", texture: [["end_fossil_ore2", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore2, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore2", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil2, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore3");
Block.createBlock("end_fossil_ore3", [
	{name: "Ископаемое края", texture: [["end_fossil_ore3", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore3, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore3", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil3, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore4");
Block.createBlock("end_fossil_ore4", [
	{name: "Ископаемое края", texture: [["end_fossil_ore4", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore4, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore4", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil4, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore5");
Block.createBlock("end_fossil_ore5", [
	{name: "Ископаемое края", texture: [["end_fossil_ore5", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore5, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore5", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil5, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_fossil_ore6");
Block.createBlock("end_fossil_ore6", [
	{name: "Ископаемое края", texture: [["end_fossil_ore6", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_fossil_ore6, "stone", 3, true);

Block.registerDropFunction("end_fossil_ore6", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil6, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_glowstone_ore");
Block.createBlock("end_glowstone_ore", [
	{name: "Светопыльная руда края", texture: [["end_glowstone_ore", 0], ["end_glowstone_ore", 0], ["end_glowstone_ore", 0], ["end_glowstone_ore", 0], ["end_glowstone_ore", 0], ["end_glowstone_ore", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.end_glowstone_ore, "stone", 3, true);

Block.registerDropFunction("end_glowstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[348, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_gold_ore");
Block.createBlock("end_gold_ore", [
	{name: "Золотая руда края", texture: [["end_gold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_gold_ore, "stone", 3, true);

Block.registerDropFunction("end_gold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_iron_ore");
Block.createBlock("end_iron_ore", [
	{name: "Железная руда края", texture: [["end_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_iron_ore, "stone", 3, true);

Block.registerDropFunction("end_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_lapis_ore");
Block.createBlock("end_lapis_ore", [
	{name: "Лазуритовая руда края", texture: [["end_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_lapis_ore, "stone", 3, true);

Block.registerDropFunction("end_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 8, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_redstone_ore");
Block.createBlock("end_redstone_ore", [
	{name: "Руда красной пыли края", texture: [["end_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_redstone_ore, "stone", 3, true);

Block.registerDropFunction("end_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore");
Block.createBlock("fossil_ore", [
	{name: "Ископаемое", texture: [["fossil_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore, "stone", 3, true);

Block.registerDropFunction("fossil_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore1");
Block.createBlock("fossil_ore1", [
	{name: "Ископаемое", texture: [["fossil_ore1", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore1, "stone", 3, true);

Block.registerDropFunction("fossil_ore1", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil1, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore2");
Block.createBlock("fossil_ore2", [
	{name: "Ископаемое", texture: [["fossil_ore2", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore2, "stone", 3, true);

Block.registerDropFunction("fossil_ore2", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil2, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore3");
Block.createBlock("fossil_ore3", [
	{name: "Ископаемое", texture: [["fossil_ore3", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore3, "stone", 3, true);

Block.registerDropFunction("fossil_ore3", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil3, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore4");
Block.createBlock("fossil_ore4", [
	{name: "Ископаемое", texture: [["fossil_ore4", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore4, "stone", 3, true);

Block.registerDropFunction("fossil_ore4", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil4, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore5");
Block.createBlock("fossil_ore5", [
	{name: "Ископаемое", texture: [["fossil_ore5", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore5, "stone", 3, true);

Block.registerDropFunction("fossil_ore5", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil5, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("fossil_ore6");
Block.createBlock("fossil_ore6", [
	{name: "Ископаемое", texture: [["fossil_ore6", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.fossil_ore6, "stone", 3, true);

Block.registerDropFunction("fossil_ore6", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil5, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("gold_gravel_ore");
Block.createBlock("gold_gravel_ore", [
	{name: "Золотая Гравиевая Руда", texture: [["gold_gravel_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.gold_gravel_ore, "stone", 3, true);

Block.registerDropFunction("gold_gravel_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[371, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("iron_gravel_ore");
Block.createBlock("iron_gravel_ore", [
	{name: "Железная Гравиевая Руда", texture: [["iron_gravel_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.iron_gravel_ore, "stone", 3, true);

Block.registerDropFunction("iron_gravel_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.iron_gravel_ore, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("lava_crystal_ore");
Block.createBlock("lava_crystal_ore", [
	{name: "Рудный кристалл лавы", texture: [["lava_crystal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.lava_crystal_ore, "stone", 3, true);

Block.registerDropFunction("lava_crystal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.lava_crystal, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_coal_ore");
Block.createBlock("nether_coal_ore", [
	{name: "Адская Угольная Руда", texture: [["nether_coal_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_coal_ore, "stone", 3, true);

Block.registerDropFunction("nether_coal_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_diamond_ore");
Block.createBlock("nether_diamond_ore", [
	{name: "Адская Алмазная Руда", texture: [["nether_diamond_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_diamond_ore, "stone", 3, true);

Block.registerDropFunction("nether_diamond_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_emerald_ore");
Block.createBlock("nether_emerald_ore", [
	{name: "Адская Изумрудная Руда", texture: [["nether_emerald_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_emerald_ore, "stone", 3, true);

Block.registerDropFunction("nether_emerald_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore");
Block.createBlock("nether_fossil_ore", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore1");
Block.createBlock("nether_fossil_ore1", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore1", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore1, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore1", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil1, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore2");
Block.createBlock("nether_fossil_ore2", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore2", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore2, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore2", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil2, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore3");
Block.createBlock("nether_fossil_ore3", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore3", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore3, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore3", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil3, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore4");
Block.createBlock("nether_fossil_ore4", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore4", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore4, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore4", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil4, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore5");
Block.createBlock("nether_fossil_ore5", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore5", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore5, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore5", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil5, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_fossil_ore6");
Block.createBlock("nether_fossil_ore6", [
	{name: "Адское ископаемое", texture: [["nether_fossil_ore6", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_fossil_ore6, "stone", 3, true);

Block.registerDropFunction("nether_fossil_ore6", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.fossil6, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_glowstone_ore");
Block.createBlock("nether_glowstone_ore", [
	{name: "Адская Светопыльная Руда", texture: [["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0], ["nether_glowstone_ore", 0]], inCreative: true}], BLOCK_TYPE_LOW_LIGHT);
ToolAPI.registerBlockMaterial(BlockID.nether_glowstone_ore, "stone", 3, true);

Block.registerDropFunction("nether_glowstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[348, 8, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_goold_ore");
Block.createBlock("nether_goold_ore", [
	{name: "Адская Золотая Руда", texture: [["nether_goold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_goold_ore, "stone", 3, true);

Block.registerDropFunction("nether_goold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[14, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_iron_ore");
Block.createBlock("nether_iron_ore", [
	{name: "Адская Железная Руда", texture: [["nether_iron_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_iron_ore, "stone", 3, true);

Block.registerDropFunction("nether_iron_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[15, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_lapis_ore");
Block.createBlock("nether_lapis_ore", [
	{name: "Адская Лазуритовая Руда", texture: [["nether_lapis_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_lapis_ore, "stone", 3, true);

Block.registerDropFunction("nether_lapis_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 8, 4]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_redstone_ore");
Block.createBlock("nether_redstone_ore", [
	{name: "Адская руда Красной пыли", texture: [["nether_redstone_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_redstone_ore, "stone", 3, true);

Block.registerDropFunction("nether_redstone_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);