const inside = function(x, y, z){
  const coord = shuffle();
  let xx, zz, block;
  for(let i = 4; i--;){
    xx = x + coord[i][0];
    zz = z + coord[i][1];
    block = World.getBlock(xx, y, zz);
    if(air[World.getBlockID(x, y+1, z)] && sand[block.id]){
      World.setFullBlock(x, y, z, block);
      World.destroyBlock(xx, y, zz);
      break;
    }
  }
},
outside = function(x, y, z){
  const coord = shuffle();
  let xx, zz;
  for(let i = 4; i--;){
    xx = x + coord[i][0];
    zz = z + coord[i][1];
    if(air[World.getBlockID(xx, y, zz)] && air[World.getBlockID(xx, y-1, zz)]){
      World.setFullBlock(xx, y, zz, World.getBlock(x, y, z));
      World.destroyBlock(x, y, z);
      break;
    }
  }
};