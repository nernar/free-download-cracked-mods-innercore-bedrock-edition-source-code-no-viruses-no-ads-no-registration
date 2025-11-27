var AncientB = MobRegistry.registerEntity("AncientB");
AncientB.customizeEvents({
 tick: function(){
  Entity.setRender(this.entity, 3);
  Entity.setSkin(this.entity, "mob/ancientB.png");
  Entity.setNameTag(this.entity, "Ancient Armored: " + Entity.getHealth(this.entity) + "/" + this.parent.description.getHealth());
 }
});
  AncientB.customizeAI({
 getAITypes: function(){
  return {
  "attack": {
     type: EntityAI.Attack,

     priority: 0,

     attack_damage: 4,

     attack_range: 1.5,

     attack_rate: 300
    },
follow: {
     type: EntityAI.Follow,

     priority: 0,

     speed: 0.1,

     rotateHead: true
    },

   player_watcher: {
     type: AdvancedAI.PlayerWatcher,

     ai: ["follow", "attack"]
    }
 };
}
});

AncientB.customizeDescription({
getHealth: function(){
  return 400;},
getDrop: function(){ 
  var drop = [
  {id: ItemID.ancientB_helmet, count: 1, data: 0, separate: true, chance: .4}, 
  {id: ItemID.ancientB_chestplate, count: 1, separate: true, data: 0, chance: .2},
  {id: ItemID.ancientB_leggings, count: 1, data: 0, separate: true, chance: .4},
  {id: ItemID.ancientB_boots, count: 1, data: 0, separate: true, chance: .4}];
  return [drop[Math.floor(Math.random()*(drop.length))], {id: 4, count: {min: 1, max: 1}, data: 0, separate: true, chance: 1}];
 }
});
IDRegistry.genItemID("talonr");

Item.createItem("talonr", "Red Ancient Talon", {name: "talonr", meta: 0}, {stack: 1});

Item.registerUseFunctionForID(ItemID.talonr, function(coords, item, block){ 
Game.message(Native.Color.DARK_RED + " Ancient Armored has Come");

 Player.decreaseCarriedItem(1);
 coords = coords.relative;
 Entity.spawnCustom("AncientB", coords.x + 1, coords.y + .5, coords.z + .5);
});