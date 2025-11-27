const item = __config__.access("target.drop_item");
const orb = __config__.access("target.experience_orb");
const r = __config__.access("param.radius");
const s = __config__.access("param.speed");
const ref = __config__.access("refresh");
let a = [];

Callback.addCallback("EntityAdded", function(e){
  const type = Entity.getType(e);
  if(item && type== 64 || orb && type == 69)a[a.length] = e;
});

Callback.addCallback("tick", function(){
  const player = Player.get();
  if(!Entity.getSneaking(player)){
    const p = Player.getPosition();
    const l = a.length;
    for(let i = l; i--;){
      const e = Entity.getPosition(a[i]);
      const x = p.x - e.x;
      const y = p.y - e.y;
      const z = p.z - e.z;
      if(Math.sqrt(x*x + z*z) <= r){
        const v = Entity.getVelocity(a[i]);
        Entity.setVelocity(a[i], x*s, y<0?v.y:y*s, z*s);
      }
    }
  }
  else if(ref)a.length = 0;
});

Callback.addCallback("EntityRemoved", function(e){
  const index = a.indexOf(e);
  if(index != -1)a.splice(index, 1);
});