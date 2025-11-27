IDRegistry.genItemID("arkenslansuriken");
Item.createThrowableItem("arkenslansuriken", "§a Аркенслановый сюрикен §r \n 110 урон \n Метательное оружие", {name:"arkenslansuriken"}, {stack:64});

Item.registerThrowableFunction("arkenslansuriken", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 110);
Entity.setFire(targetEntity, 1000);
} 
} 
);

















































