let BLOCK_TYPE_STONE = Block.createSpecialType({

    solid: true,

    renderlayer: 3,
    destroytime: 0.9,
    explosionres: 20,
    translucency: 0
});
// блоки
IDRegistry.genBlockID("diamondorecompact");
Block.createBlock("diamondorecompact", [{
	name: "Compact diamond ore",
	texture: [["diamond", 0]],
	inCreative: true}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("emeraldorecompact");
Block.createBlock("emeraldorecompact", [{
	name: "Compact emerald ore",
	texture: [["emerald", 0]],
	inCreative: true
}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("ironorecompact");
Block.createBlock("ironorecompact", [{
	name: "Compact iron ore",
	texture: [["iron", 0]],
	inCreative: true
}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.ironorecompact, "stone", 2, true);

Block.setDestroyTime(BlockID.ironorecompact, 3);

Block.setDestroyLevel("ironorecompact", 2);
Recipes.addFurnace(BlockID.ironorecompact, VanillaBlockID.iron_block, 0);
IDRegistry.genBlockID("goldorecompact");
Block.createBlock("goldorecompact", [{
	name: "Compact gold ore",
	texture: [["gold", 0]],
	inCreative: true
}], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.goldorecompact, "stone", 3, true);

Block.setDestroyTime(BlockID.goldorecompact, 3);

Block.setDestroyLevel("goldorecompact", 2);
Recipes.addFurnace(BlockID.goldorecompact, VanillaBlockID.gold_block, 0);
IDRegistry.genBlockID("lapisorecompact");
Block.createBlock("lapisorecompact", [{
	name: "Compact lapis ore",
	texture: [["lapis", 0]],
	inCreative: true
}], BLOCK_TYPE_STONE);

IDRegistry.genBlockID("redstoneorecompact");
Block.createBlock("redstoneorecompact", [{
	name: "Compact redstone ore",
	texture: [["redstone", 0]],
	inCreative: true
}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("quartzorecompact");
Block.createBlock("quartzorecompact", [{
	name: "Compact quartz ore",
	texture: [["quartz", 0]],
	inCreative: true
}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("coalorecompact");
Block.createBlock("coalorecompact", [{
	name: "Compact coal ore",
	texture: [["coal", 0]],
	inCreative: true
}], BLOCK_TYPE_STONE);
// дроп
Block.registerDropFunction(BlockID.diamondorecompact, function(coords, BlockID, blockData, level){
    if(level > 2){
        ToolAPI.dropOreExp(coords, 5, 15, 1);
    return [[VanillaItemID.diamond, Math.floor(Math.random()*4)+1, 0]] 
}
return [];
});
    ToolAPI.registerBlockMaterial(BlockID.diamondorecompact, "stone", 2, true);
Block.setDestroyTime(BlockID.diamondorecompact, 4);

Block.registerDropFunction(BlockID.emeraldorecompact, function(coords, BlockID, blockData, level){
    ToolAPI.dropOreExp(coords, 3, 9, 1)
    if(level > 2){
    return [[VanillaItemID.emerald, Math.floor(Math.random()*3)+1, 0]] 
}
return [];
});
    ToolAPI.registerBlockMaterial(BlockID.emeraldorecompact, "stone", 2, true);
Block.setDestroyTime(BlockID.emeraldorecompact, 4);

Block.registerDropFunction(BlockID.lapisorecompact, function(coords, BlockID, blockData, level){
    if(level > 1){
        ToolAPI.dropOreExp(coords, 1, 6, 1)
    return [[VanillaItemID.lapis_lazuli, Math.floor(Math.random()*18)+7, 0]] 
}
return [];
});
    ToolAPI.registerBlockMaterial(BlockID.lapisorecompact, "stone", 2, true);
Block.setDestroyTime(BlockID.lapisorecompact, 3);

Block.registerDropFunction(BlockID.coalorecompact, function(coords, BlockID, blockData, level){
    if(level > 0){
        ToolAPI.dropOreExp(coords, 1, 4, 1)
    return [[VanillaItemID.coal, Math.floor(Math.random()*11)+4, 0]] 
}
return [];
});
    ToolAPI.registerBlockMaterial(BlockID.coalorecompact, "stone", 2, true);
Block.setDestroyTime(BlockID.coalorecompact, 3);

Block.registerDropFunction(BlockID.redstoneorecompact, function(coords, BlockID, blockData, level){
    if(level > 2){
        ToolAPI.dropOreExp(coords, 2, 8, 1)
    return [[VanillaItemID.redstone, Math.floor(Math.random()*9)+3, 0]] 
}
return [];
});
    ToolAPI.registerBlockMaterial(BlockID.redstoneorecompact, "stone", 2, true);
Block.setDestroyTime(BlockID.redstoneorecompact, 3);

Block.registerDropFunction(BlockID.quartzorecompact, function(coords, BlockID, blockData, level){
    if(level > 2){
        ToolAPI.dropOreExp(coords, 3, 7, 1)
    return [[VanillaItemID.quartz, Math.floor(Math.random()*8)+3, 0]] 
}
return [];
});
    ToolAPI.registerBlockMaterial(BlockID.quartzorecompact, "stone", 2, true);
Block.setDestroyTime(BlockID.quartzorecompact, 2);