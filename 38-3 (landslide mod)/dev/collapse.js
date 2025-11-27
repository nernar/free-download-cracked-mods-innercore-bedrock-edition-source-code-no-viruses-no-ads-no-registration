const saiki = function(x, y, z){
  const id = World.getBlockID(x, --y, z);
  sand[id]?saiki(x, y, z):
  air[id] &&
    World.setBlock(x, y, z, 1)&
    World.setBlock(x, y, z, 0);
};

collapse && Callback.addCallback("tick", function(){
  const c = intCoords(Player.getPosition());
  c.y -= 2;
  sand[World.getBlockID(c.x, c.y, c.z)] && saiki(c.x, c.y, c.z);
});