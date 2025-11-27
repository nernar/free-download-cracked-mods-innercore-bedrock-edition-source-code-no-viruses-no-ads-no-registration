/*

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");


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
		if(enchant.fortune){
		return [[263, 6, 0]];
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
		if(enchant.fortune){
		return [[264, 6, 0]];
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
		if(enchant.fortune){
		return [[388, 6, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 2, 0]]
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
		if(enchant.fortune){
		return [[14, 4, 0]];
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
		if(enchant.fortune){
		return [[15, 4, 0]];
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
		if(enchant.fortune){
		return [[351, 14, 4]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 7, 4]]
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
		if(enchant.fortune){
		return [[331, 14, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 7, 0]]
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
		if(enchant.fortune){
		return [[263, 6, 0]];
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
		if(enchant.fortune){
		return [[264, 6, 0]];
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
		if(enchant.fortune){
		return [[338, 6, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[338, 2, 0]]
	}
	return [];
}, 3);




IDRegistry.genBlockID("nether_gold_ore");
Block.createBlock("nether_gold_ore", [
	{name: "Адская Золотая Руда", texture: [["nether_gold_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_gold_ore, "stone", 3, true);

Block.registerDropFunction("nether_gold_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		if(enchant.fortune){
		return [[14, 4, 0]];
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
	if(enchant.fortune){
		return [[15, 4, 0]];
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
	if(enchant.fortune){
		return [[351, 14, 4]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 7, 4]]
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
	if(enchant.fortune){
		return [[331, 15, 0]];
	}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 8, 0]]
	}
	return [];
}, 3);





Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_coal_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_diamond_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_emerald_ore, 0, 3);
    }
}
)


Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_gold_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_iron_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_lapis_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_redstone_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.fossil_ore, 0, 3);
    }
}
)


Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_coal_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_diamond_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_emerald_ore, 0, 3);
    }
}
)


Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_gold_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_iron_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_lapis_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_redstone_ore, 0, 3);
    }
}
)


*/