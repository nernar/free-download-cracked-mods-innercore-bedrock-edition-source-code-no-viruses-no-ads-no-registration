var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 3,
	explosionres: 3
}, "stone");
Callback.addCallback("PostLoaded", function(){
Recipes.addFurnace(BlockID.netherironore, 265, 0);
Recipes.addFurnace(BlockID.endironore, 265, 0);
Recipes.addFurnace(BlockID.nethergoldore, 266, 0);
Recipes.addFurnace(BlockID.endgoldore, 266, 0);
});
IDRegistry.genBlockID("quartzore");
Block.createBlock("quartzore", [
{name: "Quartz Ore", texture: [["oquartzore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.quartzore, "stone", 3, true);
Block.registerDropFunction("quartzore", function(coords, blockID, blockData, level, enchant){
if(level > 2){
	if(enchant.silk){
		return [[blockID, 1, 0]];
	}
	ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
	return [[406, 1 + Math.random() * 5, 0]]
}
return [];
}, 3);

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<8;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nethercoalore, 7, 10);
    }
}
)
	IDRegistry.genBlockID("nethercoalore");
Block.createBlock("nethercoalore", [
	{name: "Nether Coal Ore", texture: [["nethercoalore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nethercoalore, "stone", 3, true);
Block.registerDropFunction("nethercoalore", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 1 + Math.random() * 3, 0]]
	}
	return [];
}, 3);
Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.netherironore, 7, 4);
    }
}
)
	IDRegistry.genBlockID("netherironore");
Block.createBlock("netherironore", [
	{name: "Nether Iron Ore", texture: [["netherironore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherironore, "stone", 3, true);

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<6;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.nethergoldore, 7, 5);
    }
}
)
	IDRegistry.genBlockID("nethergoldore");
Block.createBlock("nethergoldore", [
	{name: "Nether Gold Ore", texture: [["nethergoldore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.nethergoldoreore, "stone", 3, true);

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.netherredstoneore, 7, 8);
    }
}
)
	IDRegistry.genBlockID("netherredstoneore");
Block.createBlock("netherredstoneore", [
	{name: "Nether Redstone Ore", texture: [["netherredstoneore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherredstoneore, "stone", 3, true);
Block.registerDropFunction("netherredstoneore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 1 + Math.random() * 5, 0]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<4;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.netherlapisore, 7, 7);
    }
}
)
	IDRegistry.genBlockID("netherlapisore");
Block.createBlock("netherlapisore", [
	{name: "Nether Lapis Ore", texture: [["netherlapisore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherlapisore, "stone", 3, true);
Block.registerDropFunction("netherlapisore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 1 + Math.random() * 4, 4]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.netherdiamondore, 7, 4);
    }
}
)
	IDRegistry.genBlockID("netherdiamondore");
Block.createBlock("netherdiamondore", [
	{name: "Nether Diamond Ore", texture: [["netherdiamondore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netherdiamondore, "stone", 3, true);
Block.registerDropFunction("netherdiamondore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 1, 0]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    for(var i=0;i<2;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.netheremeraldore, 7, 4);
    }
}
)
	IDRegistry.genBlockID("netheremeraldore");
Block.createBlock("netheremeraldore", [
	{name: "Nether Emerald Ore", texture: [["netheremeraldore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.netheremeraldore, "stone", 3, true);
Block.registerDropFunction("netheremeraldore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 1, 0]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<8;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.endcoalore, 7, 10);
    }
}
)
	IDRegistry.genBlockID("endcoalore");
Block.createBlock("endcoalore", [
	{name: "End Coal Ore", texture: [["endcoalore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.endcoalore, "stone", 3, true);
Block.registerDropFunction("endcoalore", function(coords, blockID, blockData, level, enchant){
	if(level > 0){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[263, 1 + Math.random() * 3, 0]]
	}
	return [];
}, 3);
Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.endironore, 7, 4);
    }
}
)
	IDRegistry.genBlockID("endironore");
Block.createBlock("endironore", [
	{name: "End Iron Ore", texture: [["endironore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.endironore, "stone", 3, true);

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<6;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.endgoldore, 7, 5);
    }
}
)
	IDRegistry.genBlockID("endgoldore");
Block.createBlock("endgoldore", [
	{name: "End Gold Ore", texture: [["endgoldore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.endgoldoreore, "stone", 3, true);

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.endredstoneore, 7, 8);
    }
}
)
	IDRegistry.genBlockID("endredstoneore");
Block.createBlock("endredstoneore", [
	{name: "End Redstone Ore", texture: [["endredstoneore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.endredstoneore, "stone", 3, true);
Block.registerDropFunction("endredstoneore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[331, 1 + Math.random() * 5, 0]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<4;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.endlapisore, 7, 7);
    }
}
)
	IDRegistry.genBlockID("endlapisore");
Block.createBlock("endlapisore", [
	{name: "End Lapis Ore", texture: [["endlapisore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.endlapisore, "stone", 3, true);
Block.registerDropFunction("endlapisore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[351, 1 + Math.random() * 4, 4]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<3;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.enddiamondore, 7, 4);
    }
}
)
	IDRegistry.genBlockID("enddiamondore");
Block.createBlock("enddiamondore", [
	{name: "End Diamond Ore", texture: [["enddiamondore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.enddiamondore, "stone", 3, true);
Block.registerDropFunction("enddiamondore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[264, 1, 0]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    for(var i=0;i<2;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 123);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.endemeraldore, 7, 4);
    }
}
)
	IDRegistry.genBlockID("endemeraldore");
Block.createBlock("endemeraldore", [
	{name: "End Emerald Ore", texture: [["endemeraldore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.endemeraldore, "stone", 3, true);
Block.registerDropFunction("endemeraldore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[388, 1, 0]]
	}
	return [];
}, 3);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.quartzore, 7, 6);
    }
}
)