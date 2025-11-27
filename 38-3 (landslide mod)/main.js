/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: header.js

/*
┏┓╋╋╋╋╋╋╋┏┳━┳┳┓┏┓╋╋
┃┃┏━┓┏━┳┳┛┃━┫┣╋┛┣━┓
┃┗┫╋┗┫┃┃┃╋┣━┃┃┃╋┃┻┫
┗━┻━━┻┻━┻━┻━┻┻┻━┻━┛
by NikuJagajaga
*/


const fall = __config__.access("Landslide.Fall"),
build = __config__.access("Landslide.Build"),
destroy = __config__.access("Landslide.Destroy"),
collapse = __config__.access("Collapse"),
air = {0: true, 8: true, 9: true, 10: true, 11: true, 51: true},
sand = {12: true, 13: true},
obj = {},
put = [],
intCoords = function(c){
  c.x < 0 && (c.x--);
  c.z < 0 && (c.z--);
  c.x |= 0;
  c.y |= 0;
  c.z |= 0;
  return c;
},
shuffle = function(){
  const a = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let r, t;
  for(let i = 4; i--;){
    r = Math.random()*(i+1)|0;
    t = a[i];
    a[i] = a[r];
    a[r] = t;
  }
  return a;
};




// file: landslide.js

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




// file: when.js

build && Callback.addCallback("ItemUse", function(c){
  sand[Player.getCarriedItem().id] && (put[put.length] = c.relative);
});

destroy && Callback.addCallback("DestroyBlock", function(c){
  inside(c.x, c.y, c.z);
});

fall && Callback.addCallback("EntityAdded", function(e){
  Entity.getType(e) == 66 && (obj[e] = intCoords(Entity.getPosition(e)));
});

Callback.addCallback("tick", function(){
  if(fall){
    let y;
    for(let e in obj){
      y = Entity.getPosition(e-0).y|0;
      y && (obj[e].y = y);
    }
  }
  if(build){
    let c;
    for(let i = put.length; i--;){
      c = put[i];
      air[World.getBlockID(c.x, c.y, c.z)] || air[World.getBlockID(c.x, c.y-1, c.z)] || outside(c.x, c.y, c.z);
      put.splice(i, 1);
    }
  }
});

fall && Callback.addCallback("EntityRemoved", function(e){
  obj[e] && outside(obj[e].x, obj[e].y, obj[e].z)& delete obj[e];
});




// file: collapse.js

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




