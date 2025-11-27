IDRegistry.genItemID("gravititeSword");
Item.createItem("gravititeSword", "Gravitite Sword", {name: "gravitite_sword", meta: 1}, {stack: 1});

IDRegistry.genItemID("gravititeShovel");
Item.createItem("gravititeShovel", "Gravitite Shovel", {name: "gravitite_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("gravititePickaxe");
Item.createItem("gravititePickaxe", "Gravitite Pickaxe", {name: "gravitite_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("gravititeAxe");
Item.createItem("gravititeAxe", "Gravitite Axe", {name: "gravitite_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("gravititeCrosb");
Item.createItem("gravititeCrosb", "Gravitite Crosbow", {name: "gravitite_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("gravititeB");
Item.createItem("gravititeB", "Gravitite Bolt", {name: "gravitite_bolt", meta: 0}, {stack: 64});

//งงอะ\tool matireals
ToolAPI.addToolMaterial("gravititesw", {durability: 1129, level: 5, efficiency: 4, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("gravititesh", {durability: 1562, level: 4, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("gravititepi", {durability: 1568, level: 4, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("gravititeaxe", {durability: 1562, level: 4, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("gravititecb", {durability: 1570, level: 4, efficiency: 1, damage: 2, enchantability: 14});

ToolAPI.setTool(ItemID.gravititeSword, "gravititesw", ToolType.sword);
Item.setToolRender(ItemID.gravititeSword, true);

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.gravititeSword){
if(Entity.getType(victim)== 32 || Entity.getType(victim)== 33 || Entity.getType(victim)== 44 || Entity.getType(victim)== 41 || Entity.getType(victim)== 34 || Entity.getType(victim)== 35 || Entity.getType(victim)== 38 || Entity.getType(victim)==36){    
var pos = Entity.getPosition(victim);
Entity.addVelocity(victim,pos.x, pos.y+18, pos.z);
   }
 }
});

ToolAPI.setTool(ItemID.gravititeShovel, "gravititesh", ToolType.shovel);
Item.setToolRender(ItemID.gravititeShovel, true);

ToolAPI.setTool(ItemID.gravititePickaxe, "gravititepi", ToolType.pickaxe);
Item.setToolRender(ItemID.gravititePickaxe, true);

ToolAPI.setTool(ItemID.gravititeAxe, "gravititeaxe", ToolType.axe);
Item.setToolRender(ItemID.gravititeAxe, true);

ToolAPI.setTool(ItemID.gravititeAxe, "gravititecb", ToolType.axe);
Item.setToolRender(ItemID.gravititeAxe, true);

GunRegistry.registerGun({
    gun:ItemID.gravititeCrosb,
    bullet:ItemID.gravititeB,
    skin:"entities/projectiles/gravitite_bolt.png",
    speed:7,
    damage:9,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Recipes.addShaped({id: ItemID.gravititeSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.gravititeShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.gravititePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.gravititeAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.gravititeCrosb, count: 1, data: 0}, [
    "aaa",
    "cac",
    " b"
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);

Recipes.addShaped({id: ItemID.gravititeB, count: 4, data: 0}, [
    "c",
    "a",
    "b"
], ['a', ItemID.stickSkyroot, 0, 'b', 288, 0, 'c', BlockID.plateGravitite, 0]);