





//
Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==264 && block.id== BlockID.twBlockPortal) {
  World.setBlock(coords.x, coords.y, coords.z, 0, 0) 
  World.setBlock(coords.x+2, coords.y+1, coords.z, 2, 0);
World.setBlock(coords.x+2, coords.y+2, coords.z, 2, 0);
World.setBlock(coords.x+2, coords.y+3, coords.z, 2, 0);
World.setBlock(coords.x+2, coords.y+4, coords.z, 2, 0);
World.setBlock(coords.x+1, coords.y+4, coords.z, 2, 0);
World.setBlock(coords.x+1, coords.y+1, coords.z, 2, 0);
World.setBlock(coords.x, coords.y+4, coords.z, 2, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 2, 0);

World.setBlock(coords.x-1, coords.y+1, coords.z, 2, 0);
World.setBlock(coords.x-1, coords.y+2, coords.z, 2, 0);
World.setBlock(coords.x-1, coords.y+3, coords.z, 2, 0);
World.setBlock(coords.x-1, coords.y+4, coords.z, 2, 0);
//
World.setBlock(coords.x+1, coords.y+2, coords.z, BlockID.twPortal, 0); 
World.setBlock(coords.x+1, coords.y+3, coords.z, BlockID.twPortal, 0); 
World.setBlock(coords.x, coords.y+2, coords.z, BlockID.twPortal, 0); 
World.setBlock(coords.x, coords.y+3, coords.z, BlockID.twPortal, 0); 
Entity.spawn(coords.x, coords.y+1, coords.z, 93); 
  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
}
});









