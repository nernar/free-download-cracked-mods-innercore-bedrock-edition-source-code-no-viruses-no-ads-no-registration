var OrdenW = MobRegistry.registerEntity("OrdenW");
OrdenW.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/knight.png");
  Entity.setNameTag(this.entity, "Cursed Assasin: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }, 
  created: function() {
      Game.message("You do not go away!");
   }
});
  OrdenW.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 8,

     attack_range: 1,

     attack_rate: 400
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.15,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

OrdenW.customizeDescription({
getHealth: function(){
  return 75;},
getDrop: function(){
 var drop = [
  {id: ItemID.arrowrod, count: 1, data: 0, separate: true, chance: 0.4},
  {id: ItemID.skull, count: 1, data: 0, separate: true, chance: 0.7},
  {id: ItemID.talonb, count: 1, data: 0, separate: true, chance: 0.7},
  {id: ItemID.talonr, count: 1, data: 0, separate: true, chance: 0.7}];
  return [drop[Math.floor(Math.random()*(drop.length))], {id: ItemID.clearknife, count: {min: 4, max: 18}, data: 0, separate: true, chance: 1}];
 },
});

    var knight
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var vr = parseInt(Math.random() * 61);
    var v = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+vr, pos.y, pos.z-30,5+v);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(Math.random() < .00005){
 knight=  Entity.spawnCustom("OrdenW", pos.x, pos.y + 1, pos.z);
}
}
});