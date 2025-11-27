var AncientP = MobRegistry.registerEntity("AncientP");
AncientP.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/ancientP.png");
  Entity.setNameTag(this.entity, "Ancient Damager: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }
});
  AncientP.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 7,

     attack_range: 1,

     attack_rate: 250
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.2,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

AncientP.customizeDescription({
getHealth: function(){
  return 145;},

 getDrop: function(){
  var drop = [
  {id: ItemID.ancientP_helmet, count: 1, data: 0, separate: true, chance: .4}, 
  {id: ItemID.ancientP_chestplate, count: 1, separate: true, data: 0, chance: .2},
  {id: ItemID.ancientP_leggings, count: 1, data: 0, separate: true, chance: .4},
  {id: ItemID.ancientP_boots, count: 1, data: 0, separate: true, chance: .4}];
  return [drop[Math.floor(Math.random()*(drop.length))], {id: 4, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1}];
 }
});

IDRegistry.genItemID("talong");

Item.createItem("talong", "Green Ancient Talon", {name: "talong", meta: 0}, {stack: 1});

Item.registerUseFunctionForID(ItemID.talong, function(coords, item, block){ 
Game.message(Native.Color.DARK_GREEN + " Ancient Damager has Come");

 Player.decreaseCarriedItem(1);
 coords = coords.relative;
 Entity.spawnCustom("AncientP", coords.x + 1, coords.y + .5, coords.z + .5);
});