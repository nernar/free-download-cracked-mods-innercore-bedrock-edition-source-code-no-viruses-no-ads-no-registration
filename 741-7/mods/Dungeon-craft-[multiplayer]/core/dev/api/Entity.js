let Entitys = {
     prot: {},
     setPrototype: function (type, obj){
         obj.tick = obj.tick || function(ent){};
         obj.damage = obj.damage || function(attacker, victim, damageValue, damageType, someBool1, someBool2){};
         this.prot[type] = obj;
    },
    getPrototype: function (ent){
        let name = Entity.getTypeName(ent);
        if(this.prot[name]){
            return this.prot[name];
        }else{
            return {tick: function(ent){}, damage: function(attacker, victim, damageValue, damageType, someBool1, someBool2){}};
        }
    }
};
Callback.addCallback("LocalTick", function(player){
	let pos = Entity.getPosition(player)
	if(World.getThreadTime()%5==0){
    let ents = Entity.getAllInRange(pos, 38);
    for(let i in ents){
        Entitys.getPrototype(ents[i]).tick(ents[i]);
        }
    }
});
Callback.addCallback('EntityHurt', function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
   Entitys.getPrototype(victim).damage(attacker, victim, damageValue, damageType, someBool1, someBool2);
});

Entity.setPrototype("dc:soulParadise<>", {
    tick: function(ent){
        let pos = Entity.getPosition(ent);
        Mp.spawnParticle(PartType.magic2, pos.x - 0.5 + Math.random(), pos.y - 0.5 + Math.random(), pos.z - 0.5 + Math.random(), 0, 0, 0);
        Mp.spawnParticle(PartType.fire, pos.x - 0.5 + Math.random(), pos.y - 0.5 + Math.random(), pos.z - 0.5 + Math.random(), 0, 0, 0);
        if(Math.random()<=0.02 && Entity.getTarget(ent) != -1){
            ParticlesAPI.spawnShellEnt2(PartType.rai, ent, 20, 10);
            Entity.setTarget(ent, -1);
        }
    },
    damage: function(attacker, ent, damageValue, damageType, someBool1, someBool2){
        Entity.setTarget(ent, attacker);
    }
});
Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
   if(item.id == 280)  BlockSource.getDefaultForActor(player).spawnEntity(coords.x, coords.y + 1, coords.z, "dc:soulParadise");;
});