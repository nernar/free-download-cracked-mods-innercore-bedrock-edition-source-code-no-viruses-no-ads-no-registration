IDRegistry.genBlockID("Djcobblestone");
Block.createBlock("Djcobblestone", [
    {name: "Булыжник Джунгли", texture: [["Djcobblestone", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.Djcobblestone, "stone");

IDRegistry.genBlockID("Tai_oan");
Block.createBlock("Tai_oan", [
    {name: "Дерево тай-юань", texture: [["tai_top", 0], ["tai_top", 0], ["tai_log", 0], ["tai_log", 0], ["tai_log", 0], ["tai_log", 0]], inCreative: true}
], BLOCK_TYPE_OLD_TREE);
ToolAPI.registerBlockMaterial(BlockID.Tai_oan, "wood");

IDRegistry.genBlockID("Tai_oan_plank");
Block.createBlock("Tai_oan_plank", [
    {name: "Доски дерева тай-юань", texture: [["wood_planks", 0]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.Tai_oan_plank, "wood");

Recipes.addShaped({id: BlockID.Tai_oan_plank, count: 4, data: 0}, [
    "x  "
], ['x', BlockID.Tai_oan, 0]);

IDRegistry.genBlockID("Jungle_dirt");
Block.createBlock("Jungle_dirt", [
    {name: "Почва затерянных джунглей", texture: [["jungle_dirt", 0], ["jungle_dirt", 1], ["jungle_dirt", 2], ["jungle_dirt", 2], ["jungle_dirt", 2], ["jungle_dirt", 2]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.Jungle_dirt,"dirt",1,true);

IDRegistry.genBlockID("Moss_log");
Block.createBlock("Moss_log", [
    {name: "Замшелые бревна", texture: [["moss_log", 0], ["moss_log", 0], ["moss_log", 1], ["moss_log", 1], ["moss_log", 1], ["moss_log", 1]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.Moss_log, "wood");

IDRegistry.genBlockID("Moss_plank");
Block.createBlock("Moss_plank", [
    {name: "Замшелые доски", texture: [["moss_planks", 0]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.moss_plank, "wood");

Recipes.addShaped({id: BlockID.Moss_plank, count: 4, data: 0}, [
    "x  "
], ['x', BlockID.Moss_log, 0]);

IDRegistry.genBlockID("log_peach");
Block.createBlock("log_peach", [
    {name: "Дерево лог пейч", texture: [["log_peach_top", 0], ["log_peach_top", 0], ["log_peach", 0], ["log_peach", 0], ["log_peach", 0], ["log_peach", 0]], inCreative: true}
], BLOCK_TYPE_OLD_TREE);
ToolAPI.registerBlockMaterial(BlockID.log_peach, "wood");

IDRegistry.genBlockID("planks_peach");
Block.createBlock("planks_peach", [
    {name: "Доски лог пейч", texture: [["planks_peach", 0]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.planks_peach, "wood");

Recipes.addShaped({id: BlockID.planks_peach, count: 4, data: 0}, [
    "x  "
], ['x', BlockID.log_peach, 0]);
