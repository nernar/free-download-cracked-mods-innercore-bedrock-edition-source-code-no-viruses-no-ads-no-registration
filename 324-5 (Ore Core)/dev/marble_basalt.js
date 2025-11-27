//basalt
IDRegistry.genBlockID("basalt_ore");
Block.createBlock("basalt_ore", [
	{name: "Базальт", texture: [["basalt_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.basalt_ore, "stone", 1, true);

IDRegistry.genBlockID("basalt_block");
Block.createBlock("basalt_block", [
	{name: "Блок Базальта", texture: [["basalt_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.basalt_block, "stone", 1, true);

//marble
IDRegistry.genBlockID("marmor_ore");
Block.createBlock("marmor_ore", [
	{name: "Мрамор", texture: [["marmor_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.marmor_ore, "stone", 1, true);

IDRegistry.genBlockID("marmor_block");
Block.createBlock("marmor_block", [
	{name: "Блок Мрамора", texture: [["marmor_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.marmor_block, "stone", 1, true);

//loam
IDRegistry.genBlockID("loam_block");
Block.createBlock("loam_block", [
	{name: "Суглинок", texture: [["loam_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.loam_block, "stone", 1, true);

IDRegistry.genBlockID("loam_brick_block");
Block.createBlock("loam_brick_block", [
	{name: "Глинистый блок Кирпича", texture: [["loam_brick_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.loam_brick_block, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.loam_block, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.loam_ball, 4, 0]]; 
});

//slate
IDRegistry.genBlockID("slate_ore");
Block.createBlock("slate_ore", [
	{name: "Сланцевая руда", texture: [["slate_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.slate_ore, "stone", 1, true);

IDRegistry.genBlockID("oil_slate_ore");
Block.createBlock("oil_slate_ore", [
	{name: "Нефтяная Сланцевая руда", texture: [["oil_slate_ore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oil_slate_ore, "stone", 1, true);

IDRegistry.genBlockID("slate_block");
Block.createBlock("slate_block", [
	{name: "Сланцевая блок", texture: [["slate_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.slate_block, "stone", 1, true);

Block.registerDropFunctionForID(BlockID.loil_slate_ore, function(coords, id, data, diggingLevel, toolLevel){
     return [[BlockID.slate_ore, 1, 0, ItemID.oil_paste, 1, 0]]; 
});