IDRegistry.genBlockID("bzombie");
Block.createBlock("bzombie", [
    {name: "Зомбаковый блок", texture: [["new_zombieblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bzombie, "stone");
Block.setDestroyLevel("bzombie", 2);

IDRegistry.genBlockID("bskelet");
Block.createBlock("bskelet", [
    {name: "Скелетовый блок", texture: [["new_skeletonblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bskelet, "stone");
Block.setDestroyLevel("bskelet", 2);

IDRegistry.genBlockID("bspider");
Block.createBlock("bspider", [
    {name: "Пауковый блок", texture: [["new_spiderblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bspider, "stone");
Block.setDestroyLevel("bspider", 2);

IDRegistry.genBlockID("bcreeper");
Block.createBlock("bcreeper", [
    {name: "Криперовый блок", texture: [["new_creeperblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bcreeper, "stone");
Block.setDestroyLevel("bcreeper", 2);

IDRegistry.genBlockID("bsprut");
Block.createBlock("bsprut", [
    {name: "Спрутовый блок", texture: [["new_sprutblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bsprut, "stone");
Block.setDestroyLevel("bsprut", 2);

IDRegistry.genBlockID("bslime");
Block.createBlock("bslime", [
    {name: "Слизовый блок", texture: [["new_slimeblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bslime, "stone");
Block.setDestroyLevel("bslime", 2);

IDRegistry.genBlockID("bocelot");
Block.createBlock("bocelot", [
    {name: "Оцелотовый блок", texture: [["new_ocelotblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bocelot, "stone");
Block.setDestroyLevel("bocelot", 2);

IDRegistry.genBlockID("bblaze");
Block.createBlock("bblaze", [
    {name: "Ифритовый блок", texture: [["new_blazeblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bblaze, "stone");
Block.setDestroyLevel("bblaze", 2);

IDRegistry.genBlockID("bend");
Block.createBlock("bend", [
    {name: "Эндерменовый блок", texture: [["new_endblock", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.bend, "stone");
Block.setDestroyLevel("bend", 2)