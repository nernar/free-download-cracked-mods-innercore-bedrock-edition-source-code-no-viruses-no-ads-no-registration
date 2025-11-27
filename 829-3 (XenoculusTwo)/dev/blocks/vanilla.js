IDRegistry.genBlockID("Boulder"); 
Block.createBlock("Boulder", [
    {name: "Boulder", texture: [["boulder", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Boulder, 3);
ToolAPI.registerBlockMaterial(BlockID.Boulder, "stone", 2, true);

IDRegistry.genBlockID("BoulderEnd"); 
Block.createBlock("BoulderEnd", [
    {name: "Ender Boulder", texture: [["enderboulder", 0]],inCreative: true}], BLOCK_TYPE_STONE);
Block.setDestroyTime(BlockID.Boulder, 3);
ToolAPI.registerBlockMaterial(BlockID.Boulder, "stone", 2, true);

Callback.addCallback("PostLoaded", function (){
Recipes.addShaped({id: BlockID.Boulder, count: 1, data: 0}, [
    "oaa",
    "oaa"
], ['a', 4, 0]);

Recipes.addShaped({id: BlockID.BoulderEnd, count: 1, data: 0}, [
    "oaa",
    "oaa"
], ['a', 121, 0]);

});