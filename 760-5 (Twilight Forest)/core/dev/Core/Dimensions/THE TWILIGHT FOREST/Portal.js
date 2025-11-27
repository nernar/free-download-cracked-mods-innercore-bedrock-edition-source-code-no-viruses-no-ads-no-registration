
PortalUtils.newPortalBlock("twPortal", ["TwilightForest_portal", 0], {type: "h-plane", frameId: 2}, true);
var shapeTw = new PortalShape();
shapeTw.setPortalId(BlockID.twPortal);
shapeTw.setFrameIds(BlockID.twPortal);
shapeTw.setMinSize(2, 3);
Callback.addCallback("ItemUse", function(coords, item, block){ 
if (Player.getCarriedItem().id == ItemID.congtw) 
var rect = shapeTw.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
  if (rect) {
            shapeTw.buildPortal(rect, false);      
   }
}); 
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == 2 || block.id == BlockID.twPortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.twPortal, [2]);
    }
}); 
Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortal && Player.getDimension().id != TwilightForest.id) {
    Dimensions.transfer(Player.get(), TwilightForest.id);
   shapeTw.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    } else {
      if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortal && Player.getDimension().id != TwilightForest.id)
       Dimensions.transfer(Player.get(), TwilightForest.id);   
      shapeTw.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    }
});




//
Callback.addCallback("ItemUse", function(coords, item, block) {
  if (item.id==264 && block.id== BlockID.twBlockPortal) {
 
 
  World.setBlock(coords.x+1, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z+1, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x-2, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x-1, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z-2, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z-1, 2, 0);
World.setBlock(coords.x+1, coords.y, coords.z, 2, 0);

World.setBlock(coords.x, coords.y, coords.z, BlockID.twPortal, 0);
World.setBlock(coords.x, coords.y-1, coords.z, 0, 0);
World.setBlock(coords.x-1, coords.y, coords.z, BlockID.twPortal, 0);
World.setBlock(coords.x-1, coords.y-1, coords.z, 0, 0);
World.setBlock(coords.x-1, coords.y, coords.z-1, BlockID.twPortal, 0);
World.setBlock(coords.x-1, coords.y-1, coords.z-1, 0, 0);
World.setBlock(coords.x, coords.y, coords.z-1, BlockID.twPortal, 0);
World.setBlock(coords.x, coords.y-1, coords.z-1, 0, 0);

Entity.spawn(coords.x, coords.y+1, coords.z, 93); 
  Player.decreaseCarriedItem(1)
  Particles.addParticle(Native.ParticleType.hugeexplosion, coords.x + 0.5, coords.y + 0.5, coords.z + 0.5, 0, 0.1, 0, 0);
  World.playSound(coords.x, coords.y, coords.z, "random.explode", 3)
  World.destroyBlock(coords.x, coords.y, coords.z, 1)
}
});









