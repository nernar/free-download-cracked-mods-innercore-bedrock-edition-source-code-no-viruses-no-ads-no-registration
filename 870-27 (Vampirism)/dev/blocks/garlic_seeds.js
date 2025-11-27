IMPORT("TileRender");

IDRegistry.genItemID("garlic");
Item.createItem("garlic", "Garlic", {name: "garlic"});
Item.registerUseFunction("garlic", function(coords, item, block, player) {
    let source = BlockSource.getDefaultForActor(player);
    if (source.getBlock(coords.x, coords.y, coords.z).id == VanillaBlockID.farmland) {
        source.setBlock(coords.x, coords.y+1, coords.z, BlockID.garlicCrop, 0);
        decreaseCarriedItem(1, player);
    }
});

IDRegistry.genBlockID("garlicCrop");
Block.createSpecialType({
  base: VanillaTileID.wheat,
  destroytime: 0,
  explosionres: 0,
  opaque: false,
  lightopacity: 0,
  rendertype: 6,
  sound: "grass"
}, "plant");
Block.createBlock("garlicCrop", [
	{name: "Garlic Crop", texture: [["garlic_stage", 0]], inCreative: false},
	{name: "Garlic Crop", texture: [["garlic_stage", 1]], inCreative: false},
	{name: "Garlic Crop", texture: [["garlic_stage", 2]], inCreative: false},
	{name: "Garlic Crop", texture: [["garlic_stage", 3]], inCreative: false}
], "plant");
TileRenderer.setEmptyCollisionShape(BlockID.garlicCrop);
Block.setShape(BlockID.garlicCrop, 1 / 8, 0, 1 / 8, 7 / 8, 7 / 8, 7 / 8);
Block.registerDropFunction(BlockID.garlicCrop, function(coords, block, data) {
    if (data == 3) {
        return [[ItemID.garlic, Math.floor(Math.random() * 3) + 1, 0]];
    } else {
        return [[ItemID.garlic, 1, 0]];
    }
});
Block.registerNeighbourChangeFunction(BlockID.garlicCrop, function(coords, block, changedCoords, region) {
  if (World.getBlock(coords.x, coords.y-1, coords.z).id !== VanillaBlockID.farmland) {
    World.destroyBlock(coords.x, coords.y, coords.z);
    World.drop(coords.x, coords.y, coords.z, ItemID.garlic, 1);
  }
});
Block.registerClickFunction(BlockID.garlicCrop, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal && block.data < 3) {
    let source = BlockSource.getDefaultForActor(player);
    source.setBlock(coords.x, coords.y, coords.z, block.id, block.data+1);
    decreaseCarriedItem(1, player);
  }
});
Block.registerDropFunctionForID(VanillaBlockID.tallgrass, function(coords, block, data) {
    if ((Math.random() * 2) <= 0.05) {
        World.drop(coords.x, coords.y, coords.z, ItemID.garlic, 1);
    }
});
Block.setRandomTickCallback(BlockID.garlicCrop, function(x, y, z, id, data) {
    if (data < 3) {
        World.setBlock(x, y, z, id, data+1);
    }
});