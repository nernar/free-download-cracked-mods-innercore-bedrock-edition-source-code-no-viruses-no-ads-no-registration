IDRegistry.genItemID ("lifedrain_scepter");
Item.createItem("lifedrain_scepter", "Lifedrain Scepter",{name:"lifedrain_scepter",meta:0},{stack:1});
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.lifedrain_scepter){
Entity.setHealth(entity, 0);
Game.prevent();
}});

Item.registerNoTargetUseFunction("lifedrain_scepter", function(item){
if(item.id == ItemID.lifedrain_scepter){
 let pp = Player.getPosition();
let vv = Entity.getLookVector(Player.get());
var pp1 = Entity.spawn(pp.x,pp.y,pp.z,Native.EntityType.FIREBALL);
Entity.setVelocity(pp1,8*vv.x,8*vv.y,8*vv.z);
}});




IDRegistry.genItemID ("shield_scepter");
Item.createItem("shield_scepter", "Shield Scepter",{name:"shield_scepter",meta:0},{stack:1});
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.shield_scepter){
Entity.setHealth(entity, 0);
Game.prevent();
}});
Item.registerNoTargetUseFunction("shield_scepter", function(item){
if(item.id == ItemID.shield_scepter){
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 10, 50*225);
}});





IDRegistry.genItemID ("zombie_scepter");
Item.createItem("zombie_scepter", "Zombie Scepter",{name:"zombie_scepter",meta:0},{stack:1});
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.zombie_scepter){
Entity.setHealth(entity, 0);
Game.prevent();
}});
Item.registerNoTargetUseFunction("zombie_scepter", function(item, entity){
if(item.id == ItemID.zombie_scepter){
 let pp = Player.getPosition();
let vv = Entity.getLookVector(Player.get());
var pp1 = Entity.spawnAddon(pp.x+1,pp.y,pp.z, "scepter:z");
Entity.spawnAddon(pp.x+1,pp.y,pp.z, "scepter:z");
}});


/*
IDRegistry.genItemID ("zombie_scepter");
Item.createItem("zombie_scepter", "Zombie Scepter",{name:"zombie_scepter",meta:0},{stack:1});
ChargeItemRegistry.registerItem(ItemID.zombie_scepter, 2000, 0, true, true);
var ZOMBIE_DURABILITY = 2001;
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.zombie_scepter){
Entity.setHealth(entity, 0);
Game.prevent();
}});
Item.registerNoTargetUseFunction("zombie_scepter", function(item, entity){
if(item.data + 50 <= Item.getMaxDamage(ItemID.zombie_scepter)){
 let pp = Player.getPosition();
let vv = Entity.getLookVector(Player.get());
var pp1 = Entity.spawnAddon(pp.x+1,pp.y,pp.z, "tw:zombie");
Entity.spawnAddon(pp.x+1,pp.y,pp.z, "tw:zombie");
Entity.spawnAddon(pp.x,pp.y,pp.z-1, "tw:zombie");
Entity.spawnAddon(pp.x,pp.y,pp.z-1, "tw:zombie");
item.data = Math.min(item.data+200, ZOMBIE_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);

}});
*/

