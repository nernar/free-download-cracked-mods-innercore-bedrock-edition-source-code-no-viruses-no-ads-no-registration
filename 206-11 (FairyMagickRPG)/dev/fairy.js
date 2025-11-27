var fairy = MobRegistry.registerEntity("fairy");
 
fairy.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/fairy.png");
  Entity.setNameTag(this.entity, "Fairy: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
  }, 
 
  death: function(attacker) {
 Game.message("The curse of fairies fell on you!");
    Entity.addEffect(Player.get(), 15, 1, 600, false, false);
    Entity.addEffect(Player.get(), 20, 2, 350, false, false);
}, 
 
  created: function() {
      Game.message("You feeling magic power!");
   },
   attackedBy: function() {
      Game.message("Don't touch me!");
   }
});

fairy.customizeDescription({

 getHitbox: function(){
  return {w: 1, h: 2}
 }, 
 
getHealth: function(){
  return 45;},

 getDrop: function() {
      return [{
         id: ItemID.shardwings,
         count: {min: 1, max: 4}
       }]
}
});


    var fairy
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var vr = parseInt(Math.random() * 61);
    var v = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(Math.random() < .00005){
 fairy=  Entity.spawnCustom("fairy", pos.x, pos.y + 1, pos.z);
}
}
});