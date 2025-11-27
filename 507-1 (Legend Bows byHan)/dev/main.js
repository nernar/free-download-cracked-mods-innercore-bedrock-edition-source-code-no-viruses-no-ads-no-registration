IMPORT("Bow");

IDRegistry.genItemID("hellfireBow");
IDRegistry.genItemID("thunderbane");
IDRegistry.genItemID("reinforcedBow");
IDRegistry.genItemID("goldenShower");

Item.createItem("hellfireBow", "Hellfire Bow§7\nShoots fire arrow\nLast 9999 ticks.", {"name":"hellfire_bow","meta":0}, {stack:1});
Item.describeItem("hellfireBow", {	
   toolRender: true, // Is toolRender	
   //maxDamage: 385, // Max bow damage 	
   useAnimation: 4 // Bow animation
});
Item.createItem("thunderbane", "§aThunderbane§7\nShoots the thunder of the zeus arrow\nDamage 9999.", {"name":"thunderbane","meta":0}, {stack:1});
Item.describeItem("thunderbane", {	
   toolRender: true, // Is toolRender	
   //maxDamage: 385, // Max bow damage 	
   useAnimation: 4 // Bow animation
});
Item.createItem("reinforcedBow", "§4Reinforced Bow§7\nShoots tnt\nExplosive", {"name":"reinforced_bow","meta":0}, {stack:1});
Item.describeItem("reinforcedBow", {	
   toolRender: true, // Is toolRender	
   //maxDamage: 385, // Max bow damage 	
   useAnimation: 4 // Bow animation
});
Item.createItem("goldenShower", "§6Golden Shower§7\nFires at a speed of light", {"name":"golden_shower","meta":0}, {stack:1});
Item.describeItem("goldenShower", {	
   toolRender: true, // Is toolRender	
   //maxDamage: 385, // Max bow damage 	
   useAnimation: 4 // Bow animation
});



var HellfireCustomBow = new Bow();
HellfireCustomBow.set({	
   id: ItemID.hellfireBow, // Bow Item id	
   texture: "hellfire_bow", // Bow texture for animate
   	bullets: [262], // Items to retrive	
   	skin: "entity/arrow_hellfire.png", // Arrow Skin	
   	speed: 2, // Arrow speed
   	damage: 4.5, // Arrow Damage	
   	variations: 3, // Arrow animation frames
   	arrow_id: 1
});
var ThunderbaneBow = new Bow();
ThunderbaneBow.set({	
   id: ItemID.thunderbane, // Bow Item id	
   texture: "thunderbane", // Bow texture for animate
   	bullets: [262], // Items to retrive	
   	skin: "entity/arrow_thunderbane.png", // Arrow Skin	
   	speed: 3, // Arrow speed
   	damage: 4999.5, // Arrow Damage	
   	variations: 3, // Arrow animation frames
   	arrow_id: 2
});
var ReinforcedBow = new Bow();
ReinforcedBow.set({	
   id: ItemID.reinforcedBow, // Bow Item id	
   texture: "reinforced_bow", // Bow texture for animate
   	bullets: [46], // Items to retrive	
   	skin: "entity/arrow_tnt.png", // Arrow Skin	
   	speed: 3, // Arrow speed
   	damage: 2, // Arrow Damage	
   	variations: 3, // Arrow animation frames
   	arrow_id: 3
});
var GoldenShower = new Bow();
GoldenShower.set({	
   id: ItemID.goldenShower, // Bow Item id	
   texture: "golden_shower", // Bow texture for animate
   	bullets: [371], // Items to retrive	
   	skin: "entity/arrow_gold.png", // Arrow Skin	
   	speed: 5, // Arrow speed
   	damage: 2, // Arrow Damage	
   	variations: 11, // Arrow animation frames
   	arrow_id: 4
});

Callback.addCallback( "BowArrowEntityDamage" , function ( attacker,victim,damage ) { 
   if(Entity.getCarriedItem(attacker) == ItemID.hellfireBow){
      Entity.setFire (victim, 9999, 10);
   }
   alert("A mob is being hurt by arrow");
});

Callback.addCallback ( "CustomArrowSpawn" , function ( projectile, arrow_id ) { 
   if(arrow_id == 1){
      Entity.setFire (projectile, 9999);
   }
});
Callback.addCallback ( "CustomArrowLand" , function ( projectile, arrow_id ) { 
   var pos = Entity.getPosition(projectile);
   if(arrow_id == 1){
      Entity.remove (projectile);
   }else if(arrow_id == 2){
      Entity.remove (projectile);
   }else if(arrow_id == 3){
      Entity.remove (projectile);
   }else if(arrow_id == 4){
      Entity.remove (projectile);
   }
});

Callback.addCallback ( "CustomArrowRemoved" , function ( pos, arrow_id ) { 
   if(arrow_id == 1){
      World.explode(pos.x,pos.y,pos.z,1,true);
   }
   else if(arrow_id == 2){
      Entity.spawn (pos.x, pos.y, pos.z, 93);
   }
   else if(arrow_id == 3){
      Entity.spawn (pos.x, pos.y, pos.z, 65);
   }
});
var timer = 0;
Callback.addCallback ( "BowStateChange" , function ( bow ) { 
   //var pos = Entity.getPosition(Player.get());
   var id = bow.id;
   
   if(id == ItemID.goldenShower && timer % 1 == 0){
      Bows.shoot();
   }
   timer++;
});

Recipes.addShaped ({id: ItemID.hellfireBow, count: 1, data: 0}, 
[ "bbb", "bcb", "bbb" ], 
['c', 261, 0, 'b', 378, 0]);
Recipes.addShaped ({id: ItemID.thunderbane, count: 1, data: 0}, 
[ "bbb", "bcb", "bbb" ], 
['c', 261, 0, 'b', 208, 0]);
Recipes.addShaped ({id: ItemID.reinforcedBow, count: 1, data: 0}, 
[ "brb", "rcr", "brb" ], 
['c', 261, 0, 'b', 265, 0, 'r', 331]);
Recipes.addShaped ({id: ItemID.goldenShower, count: 1, data: 0}, 
[ "bbb", "bcb", "bbb" ], 
['c', 261, 0, 'b', 41, 0]);