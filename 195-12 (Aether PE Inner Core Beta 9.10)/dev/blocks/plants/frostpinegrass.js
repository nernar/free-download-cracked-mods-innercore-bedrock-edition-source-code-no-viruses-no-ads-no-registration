IDRegistry.genBlockID("grassFrostpine");
Block.createBlock("grassFrostpine", [
    {name: "Frostpine Grass", texture: [["empty", 0], ["empty", 0], ["normal_frostroot", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.grassFrostpine, "plant");

IDRegistry.genItemID("grassFrostpine");
Item.createItem("grassFrostpine", "Frostpine Grass", {name: "normal_frostroot"});

Block.setBlockShape(BlockID.grassFrostpine, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

Item.registerUseFunction("grassFrostpine", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.grassFrostpine);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

Renderer.setSaplingRender(BlockID.grassFrostpine,0);

Block.registerDropFunction("grassFrostpine", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.grassFrostpine, 1, 0);
});