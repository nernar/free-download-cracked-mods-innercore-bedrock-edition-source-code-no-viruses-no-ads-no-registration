IDRegistry.genItemID("vampireSword");
Item.createItem("vampireSword", "Vampire Sword", {name: "vampire_blade", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("vampiresw", {durability: 1000, level: 4, efficiency: 4, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("vampirecb", {durability: 1024, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("vampireCrosb");
Item.createItem("vampireCrosb", "Vampire Crosbow", {name: "vampire_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("vampireB");
Item.createItem("vampireB", "Vampire Bolt", {name: "scatterglass_bolt", meta: 0}, {stack: 64});

ToolAPI.setTool(ItemID.vampireCrosb, "vampirecb", ToolType.sword);
Item.setToolRender(ItemID.vampireCrosb, true);

GunRegistry.registerGun({
    gun:ItemID.vampireCrosb,
    bullet:ItemID.vampireB,
    skin:"entities/projectiles/scatterglass_bolt.png",
    effect: 19,
    efftime: 150,
    playereff: 10,
    plefftime:150,
    speed:8,
    damage:10,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.vampireSword){
Entity.addEffect(victim, 19, 1, 500, false,false);
Entity.addEffect(attacker, 10, 1, 500, false,false);    
}
});

ToolAPI.setTool(ItemID.vampireSword, "vampiresw", ToolType.sword);
Item.setToolRender(ItemID.vampireSword, true);

IDRegistry.genItemID("holySword");
Item.createItem("holySword", "Holy Sword", {name: "holy_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("holysw", {durability: 503, level: 4, efficiency: 4, damage: 4, enchantability: 14});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.holySword){
if(Entity.getType(victim)== 32 || Entity.getType(victim)== 44 || Entity.getType(victim)== 34 || Entity.getType(victim)==36) {    
Entity.addEffect(victim, 6, 4, 500, false,false);
   }
 }
});
ToolAPI.setTool(ItemID.holySword, "holysw", ToolType.sword);
Item.setToolRender(ItemID.holySword, true);

IDRegistry.genItemID("flamingSword");
Item.createItem("flamingSword", "Flaming Sword", {name: "flaming_sword", meta: 0}, {stack: 1});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.flamingSword){
Entity.setFire(victim, 800);
}
});

ToolAPI.setTool(ItemID.flamingSword, "holysw", ToolType.sword);
Item.setToolRender(ItemID.flamingSword, true);

IDRegistry.genItemID("lightingSword");
Item.createItem("lightingSword", "Lighting Sword", {name: "lightning_sword", meta: 0}, {stack: 1});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.lightingSword){
var pos = Entity.getPosition(victim);      
Entity.spawn(pos.x, pos.y, pos.z, 93);
}
});

ToolAPI.setTool(ItemID.lightingSword, "holysw", ToolType.sword);
Item.setToolRender(ItemID.lightingSword, true);
/*
IDRegistry.genItemID("lightingKnife");
Item.createThrowableItem("lightingKnife", "Lighting k ife", {name: "lightning_knife", meta: 0}, {stack: 1});

Callback.addCallback("ProjectileHit", function (projectile, item, target) {
GunRegistry.bullets = GunRegistry.bullets.filter(function(bullet){

if(bullet.entity == projectile){
Entity.remove(projectile);
if(target.entity != -1){
GunRegistry.hurt.push({entity: target.entity, damage: bullet.damage});
            }
            return false;
        }
        return true;
    });
});*/

IDRegistry.genItemID("pigsSword");
Item.createItem("pigsSword", "Pig Slayer", {name: "pig_slayer", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("pigssw", {durability: 350, level: 4, efficiency: 4, damage: 6, enchantability: 14});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.pigsSword){
if(Entity.getType(victim)== 14 || Entity.getType(victim)== 17 || Entity.getType(victim)== 13 || Entity.getType(victim)==18 || Entity.getType(victim)==28 || Entity.getType(victim)==22 || Entity.getType(victim)==11 || Entity.getType(victim)==16 || Entity.getType(victim)==10) {    
Entity.addEffect(victim, 7, 5, 560, false,false);
   }
 }
});

ToolAPI.setTool(ItemID.pigsSword, "pigssw", ToolType.sword);
Item.setToolRender(ItemID.pigsSword, true);