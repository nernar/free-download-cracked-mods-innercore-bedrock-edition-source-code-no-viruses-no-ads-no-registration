var ICore = false; 
ModAPI.addAPICallback("ICore", function(api){ 
ICore = api; 
});

IDRegistry.genBlockID("end_copper_ore");
Block.createBlock("end_copper_ore", [
	{name: "Края Медная Руда", texture: [["end_copper_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_copper_ore, "stone", 3, true);

Block.registerDropFunction("end_copper_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreCopper, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_copper_ore");
Block.createBlock("nether_copper_ore", [
	{name: "Адская Медная Руда", texture: [["nether_copper_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_copper_ore, "stone", 3, true);

Block.registerDropFunction("nether_copper_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreCopper, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_copper_ore");
Block.createBlock("compressed_copper_ore", [
	{name: "Плотная Медная Руда", texture: [["compressed_copper_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_copper_ore, "stone", 3, true);

Block.registerDropFunction("compressed_copper_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreCopper, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_iridium_ore");
Block.createBlock("compressed_iridium_ore", [
	{name: "Плотная Иридиумная Руда", texture: [["compressed_iridium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_iridium_ore, "stone", 3, true);

Block.registerDropFunction("compressed_iridium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreIridium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_iridium_ore");
Block.createBlock("end_iridium_ore", [
	{name: "Края Иридиумная Руда", texture: [["end_iridium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_iridium_ore, "stone", 3, true);

Block.registerDropFunction("end_iridium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreIridium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_iridium_ore");
Block.createBlock("nether_iridium_ore", [
	{name: "Адская Иридиумная Руда", texture: [["nether_iridium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_iridium_ore, "stone", 3, true);

Block.registerDropFunction("nether_iridium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreIridium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_lead_ore");
Block.createBlock("nether_lead_ore", [
	{name: "Адская Свинцовая Руда", texture: [["nether_lead_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_lead_ore, "stone", 3, true);

Block.registerDropFunction("nether_lead_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreLead, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_lead_ore");
Block.createBlock("compressed_lead_ore", [
	{name: "Плотная Свинцовая Руда", texture: [["compressed_lead_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_lead_ore, "stone", 3, true);

Block.registerDropFunction("compressed_lead_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreLead, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_lead_ore");
Block.createBlock("end_lead_ore", [
	{name: "Края Свинцовая Руда", texture: [["end_lead_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_lead_ore, "stone", 3, true);

Block.registerDropFunction("end_lead_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreLead, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_tin_ore");
Block.createBlock("end_tin_ore", [
	{name: "Края Оловянная Руда", texture: [["end_tin_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_tin_ore, "stone", 3, true);

Block.registerDropFunction("end_tin_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreTin, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_tin_ore");
Block.createBlock("nether_tin_ore", [
	{name: "Адская Оловянная Руда", texture: [["nether_tin_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_tin_ore, "stone", 3, true);

Block.registerDropFunction("nether_tin_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreTin, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_tin_ore");
Block.createBlock("compressed_tin_ore", [
	{name: "Плотная Оловянная Руда", texture: [["compressed_tin_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_tin_ore, "stone", 3, true);

Block.registerDropFunction("compressed_tin_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 1){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreTin, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("end_uranium_ore");
Block.createBlock("end_uranium_ore", [
	{name: "Края Урановая Руда", texture: [["end_uranium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.end_uranium_ore, "stone", 3, true);

Block.registerDropFunction("end_uranium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreUranium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("nether_uranium_ore");
Block.createBlock("nether_uranium_ore", [
	{name: "Адская Урановая Руда", texture: [["nether_uranium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nether_uranium_ore, "stone", 3, true);

Block.registerDropFunction("nether_uranium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreUranium, 2, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("compressed_uranium_ore");
Block.createBlock("compressed_uranium_ore", [
	{name: "Плотная Урановая Руда", texture: [["compressed_uranium_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.compressed_uranium_ore, "stone", 3, true);

Block.registerDropFunction("compressed_uranium_ore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[BlockID.oreUranium, 2, 0]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 70);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_copper_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_copper_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_copper_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_iridium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_iridium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_iridium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_lead_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_lead_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_lead_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_tin_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_tin_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_tin_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.compressed_uranium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.end_uranium_ore, 0, 3);
    }
}
)

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 64);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nether_uranium_ore, 0, 3);
    }
}
)