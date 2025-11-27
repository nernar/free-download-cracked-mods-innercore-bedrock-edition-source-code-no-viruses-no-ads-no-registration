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