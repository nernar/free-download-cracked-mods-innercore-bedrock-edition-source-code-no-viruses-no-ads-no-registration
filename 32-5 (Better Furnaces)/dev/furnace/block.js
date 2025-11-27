IDRegistry.genBlockID("better_furnace");
Block.createBlock("better_furnace", [
    {name: "Iron Furnace", texture: Furnace.genTexArray(0), inCreative: true},
    {name: "Gold Furnace", texture: Furnace.genTexArray(1), inCreative: true},
    {name: "Diamond Furnace", texture: Furnace.genTexArray(2), inCreative: true},
    {name: "Hell Furnace", texture: Furnace.genTexArray(3), inCreative: true},
    {name: "Extreme Furnace", texture: Furnace.genTexArray(4), inCreative: true},
]);

BlockRenderer.enableCoordMapping(BlockID.better_furnace, 0, Furnace.genTexRender(0));
BlockRenderer.enableCoordMapping(BlockID.better_furnace, 1, Furnace.genTexRender(1));
BlockRenderer.enableCoordMapping(BlockID.better_furnace, 2, Furnace.genTexRender(2));
BlockRenderer.enableCoordMapping(BlockID.better_furnace, 3, Furnace.genTexRender(3));
BlockRenderer.enableCoordMapping(BlockID.better_furnace, 4, Furnace.genTexRender(4));

TileRenderer.registerRotationModel(BlockID.better_furnace, 0, Furnace.genTexArray(0));
TileRenderer.registerRotationModel(BlockID.better_furnace, 4, Furnace.genTexArray(0, true));
TileRenderer.registerRotationModel(BlockID.better_furnace, 8, Furnace.genTexArray(1));
TileRenderer.registerRotationModel(BlockID.better_furnace, 12, Furnace.genTexArray(1, true));
TileRenderer.registerRotationModel(BlockID.better_furnace, 16, Furnace.genTexArray(2));
TileRenderer.registerRotationModel(BlockID.better_furnace, 20, Furnace.genTexArray(2, true));
TileRenderer.registerRotationModel(BlockID.better_furnace, 24, Furnace.genTexArray(3));
TileRenderer.registerRotationModel(BlockID.better_furnace, 28, Furnace.genTexArray(3, true));
TileRenderer.registerRotationModel(BlockID.better_furnace, 32, Furnace.genTexArray(4));
TileRenderer.registerRotationModel(BlockID.better_furnace, 36, Furnace.genTexArray(4, true));

Block.registerPlaceFunction(BlockID.better_furnace, function(coords, item, block){
    const place = canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
    World.setFullBlock(place.x, place.y, place.z, item);
    World.addTileEntity(place.x, place.y, place.z).data.meta = TileRenderer.getBlockRotation();
});

Block.setBlockMaterial("better_furnace", "stone", 1);
Block.setDestroyTime("better_furnace", 5);

Recipes2.addShaped({id: BlockID.better_furnace, data: 0}, "aaa:aba:aaa", {a: 265, b: 61});
Recipes2.addShaped({id: BlockID.better_furnace, data: 1}, "aaa:aba:aaa", {a: 266, b: {id: BlockID.better_furnace, data: 0}});
Recipes2.addShaped({id: BlockID.better_furnace, data: 2}, "aba:bcb:aba", {a: 20, b: 264, c: {id: BlockID.better_furnace, data: 1}});
Recipes2.addShaped({id: BlockID.better_furnace, data: 3}, "aaa:bcb:ded", {a: 378, b: 57, c: {id: BlockID.better_furnace, data: 2}, d: 112, e: 46});
Recipes2.addShaped({id: BlockID.better_furnace, data: 4}, "oao:bcb:ded", {a: 399, b: 381, c: {id: BlockID.better_furnace, data: 3}, d: 121, e: 112});