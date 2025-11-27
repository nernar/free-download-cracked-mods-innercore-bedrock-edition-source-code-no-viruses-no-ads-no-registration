IDRegistry.genBlockID("Block_upgr");

Block.createBlock("Block_upgr", [{name:"Улучшеный Блок Ирумидия", texture: [["block_upgr", 0]], inCreative: true}]);

ToolAPI.registerBlockMaterial(BlockID.Block_upgr, "stone");
Block.setDestroyTime(BlockID.Block_upgr, 10);
Block.setDestroyLevel(BlockID.Block_upgr, 4);




Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==ItemID.powder && block.id== BlockID.Block) {
  World.setBlock(coords.x, coords.y, coords.z, 0, 0) 
  World.setBlock(coords.x, coords.y, coords.z, BlockID.Block_upgr, 0)
  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.drop(coords.x, coords.y, coords.z, BlockID.Block_upgr, 1, 0)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
}
});
