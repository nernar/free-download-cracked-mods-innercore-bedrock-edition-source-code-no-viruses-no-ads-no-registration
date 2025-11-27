ModAPI.addAPICallback("ICore",
function(api) {
    let BLOCK_TYPE_STONE = Block.createSpecialType({
        ToolAPI.registerBlockMaterial(BlockID.copperorecompact, "stone", 2, true);

Block.setDestroyTime(BlockID.copperorecompact, 2);

Block.setDestroyLevel("copperorecompact", 2);

ToolAPI.registerBlockMaterial(BlockID.tinorecompact, "stone", 2, true);

Block.setDestroyTime(BlockID.tinorecompact, 2);

Block.setDestroyLevel("tinorecompact", 2);

ToolAPI.registerBlockMaterial(BlockID.leadorecompact, "stone", 2, true);

Block.setDestroyTime(BlockID.leadorecompact, 3);

Block.setDestroyLevel("leadorecompact", 2);
Block.registerDropFunction(BlockID.uranorecompact, function(coords, BlockID, blockData, level){
    if(level > 1){
        ToolAPI.dropOreExp(coords, 3, 7, 1)
    return [[ItemID.uranium, Math.floor(Math.random()*6)+2, 0]] 
}
return [];
});
    ToolAPI.registerBlockMaterial(BlockID.uranorecompact, "stone", 2, true);
Block.setDestroyTime(BlockID.uranorecompact, 2);

Block.registerDropFunction(BlockID.iridiumorecompact, function(coords, BlockID, blockData, level){
    if(level > 1){
        ToolAPI.dropOreExp(coords, 3, 7, 1)
    return [[ItemID.iridiumChunk, Math.floor(Math.random()*3)+1, 0]] 
}
return [];
});
    ToolAPI.registerBlockMaterial(BlockID.iridiumorecompact, "stone", 2, true);
Block.setDestroyTime(BlockID.iridiumorecompact, 2);

    solid: true,

    renderlayer: 3,
    destroytime: 0.9,
    explosionres: 20,
    translucency: 0
});
//блоки
IDRegistry.genBlockID("copperorecompact");
Block.createBlock("copperorecompact", [{
	name: "Comlact copper ore",
	texture: [["copper", 0]],
	inCreative: true}], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("uranorecompact");
Block.createBlock("uranorecompact", [{
	name: "Compact uran ore",
	texture: [["uran", 0]],
	inCreative: true}], BLOCK_TYPE_STONE);
	IDRegistry.genBlockID("tinorecompact");
Block.createBlock("tinorecompact", [{
	name: "Compact tin ore",
	texture: [["tin", 0]],
	inCreative: true}], BLOCK_TYPE_STONE);
	IDRegistry.genBlockID("leadorecompact");
Block.createBlock("leadorecompact", [{
	name: "Compact lead ore",
	texture: [["lead", 0]],
	inCreative: true}], BLOCK_TYPE_STONE);
	IDRegistry.genBlockID("iridiumorecompact");
Block.createBlock("iridiumorecompact", [{
	name: "Compact iridium ore",
	texture: [["iridium", 0]],
	inCreative: true}], BLOCK_TYPE_STONE);
};