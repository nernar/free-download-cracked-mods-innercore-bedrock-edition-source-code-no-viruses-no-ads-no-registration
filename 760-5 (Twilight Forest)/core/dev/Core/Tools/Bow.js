IDRegistry.genItemID ("naga_bow");
Item.createItem("naga_bow", "Naga Bow",{name:"naga_bow",meta:0},{stack:1});
Callback.addCallback('ProjectileHitEntity', function (projectile, entity) {
let item = Player.getCarriedItem();
if(item.id == ItemID.naga_bow){
Entity.setHealth(entity, 7);
Game.prevent();
}});
Item.registerNoTargetUseFunction("naga_bow", function(item, entity){
if(item.id == ItemID.naga_bow){
 let pp = Player.getPosition();
let vv = Entity.getLookVector(Player.get());
var pp1 = Entity.spawn(pp.x-1,pp.y,pp.z,80);
var pp1 = Entity.spawn(pp.x-1,pp.y,pp.z,80);
var pp1 = Entity.spawn(pp.x-1,pp.y,pp.z,80);
var pp1 = Entity.spawn(pp.x-1,pp.y,pp.z,80);
Entity.setVelocity(pp1,8*vv.x,8*vv.y,8*vv.z);
//Entity.setVelocity(pp2,8*vv.x,8*vv.y,8*vv.z);
//Entity.setVelocity(pp3,8*vv.x,8*vv.y,8*vv.z);
//Entity.setVelocity(pp4,8*vv.x,8*vv.y,8*vv.z);

}});


