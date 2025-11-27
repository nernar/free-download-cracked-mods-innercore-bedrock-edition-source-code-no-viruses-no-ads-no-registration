/*
BUILD INFO:
  dir: dev
  target: SHMain.js
  files: 16
*/



// file: blocks.js

IDRegistry.genBlockID("vibraniumore");
Block.createBlock("vibraniumore", [{name: "Vibranium ore", texture: [["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0], ["vibraniumore", 0]], inCreative: true}]);



IDRegistry.genBlockID("kryptoniteore");
Block.createBlock("kryptoniteore", [{name: "Kryptonite ore", texture: [["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0], ["kryptoniteore", 0]], inCreative: true}]);



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 40);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.vibraniumore, 0, 6);
    }
}
)



Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<10;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 20);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.kryptoniteore, 0, 3);
    }
}
)



Block.registerDropFunction("kryptoniteore", function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.krypton, 2, 0]);
 return drop;
});



Block.registerDropFunction("vibraniumore", function(coords, blockID, blockData, level){
 var drop = [];
  drop.push([ItemID.vibranium, 3, 0]);
 return drop;
});






































// file: materials.js






IDRegistry.genItemID("blackwool");
Item.createItem("blackwool", "Black wool", {name: "blackwool", meta: 0}, {stack: 64});


IDRegistry.genItemID("bluewool");
Item.createItem("bluewool", "Blue wool", {name: "bluewool", meta: 0}, {stack: 64});


IDRegistry.genItemID("darkbluewool");
Item.createItem("darkbluewool", "Dark blue wool", {name: "darkbluewool", meta: 0}, {stack: 64});


IDRegistry.genItemID("darkredwool");
Item.createItem("darkredwool", "Dark red wool", {name: "darkredwool", meta: 0}, {stack: 64});


IDRegistry.genItemID("darkvioletwool");
Item.createItem("darkvioletwool", "Dark violet wool", {name: "darkvioletwool", meta: 0}, {stack: 64});


IDRegistry.genItemID("orangewool");
Item.createItem("orangewool", "Orange wool", {name: "orangewool", meta: 0}, {stack: 64});


IDRegistry.genItemID("redwool");
Item.createItem("redwool", "Red wool", {name: "redwool", meta: 0}, {stack: 64});



IDRegistry.genItemID("violetwool");
Item.createItem("violetwool", "Violet wool", {name: "violetwool", meta: 0}, {stack: 64});


IDRegistry.genItemID("whitewool");
Item.createItem("whitewool", "White wool", {name: "whitewool", meta: 0}, {stack: 64});



IDRegistry.genItemID("graywool");
Item.createItem("graywool", "Gray wool", {name: "graywooll", meta: 0}, {stack: 64});






IDRegistry.genItemID("blackflint");
Item.createItem("blackflint", "Black flint", {name: "blackflint", meta: 0}, {stack: 64});


IDRegistry.genItemID("redflint");
Item.createItem("redflint", "Red flint", {name: "redflint", meta: 0}, {stack: 64});






IDRegistry.genItemID("blackingot");
Item.createItem("blackingot", "Black ingot", {name: "blackingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("redingot");
Item.createItem("redingot", "Red ingot", {name: "redingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("yellowingot");
Item.createItem("yellowingot", "Yellow ingot", {name: "yellowingot", meta: 0}, {stack: 64});


IDRegistry.genItemID("greeningot");
Item.createItem("greeningot", "Green ingot", {name: "greeningot", meta: 0}, {stack: 64});


IDRegistry.genItemID("arkeniumingotsh");
Item.createItem("arkeniumingotsh", "Arkenium ingot", {name: "arkeniumingotsh", meta: 0}, {stack: 64});







IDRegistry.genItemID("blackleather");
Item.createItem("blackleather", "Black leather", {name: "blackleather", meta: 0}, {stack: 64});



IDRegistry.genItemID("blackleather");
Item.createItem("blackleather", "Black leather", {name: "blackleather", meta: 0}, {stack: 64});


IDRegistry.genItemID("greenleather");
Item.createItem("greenleather", "Green leather", {name: "greenleather", meta: 0}, {stack: 64});


IDRegistry.genItemID("redleather");
Item.createItem("redleather", "Red leather", {name: "redleather", meta: 0}, {stack: 64});



IDRegistry.genItemID("yellowleather");
Item.createItem("yellowleather", "Yellow leather", {name: "yellowleatherr", meta: 0}, {stack: 64});

IDRegistry.genItemID("blueleather");
Item.createItem("blueleather", "Blue leather", {name: "blueleatherr", meta: 0}, {stack: 64});

IDRegistry.genItemID("purpleleather");
Item.createItem("purpleleather", "Purple leather", {name: "purpleleather", meta: 0}, {stack: 64});






IDRegistry.genItemID("captainstar");
Item.createItem("captainstar", "Captain America star", {name: "captainstar", meta: 0}, {stack: 64});


IDRegistry.genItemID("generator");
Item.createItem("generator", "Generator", {name: "generator", meta: 0}, {stack: 64});




IDRegistry.genItemID("greenarrow");
Item.createItem("greenarrow", "Green arrow", {name: "greenarrow", meta: 0}, {stack: 64});


IDRegistry.genItemID("ironstick");
Item.createItem("ironstick", "Iron stick", {name: "ironstick", meta: 0}, {stack: 64});


IDRegistry.genItemID("krypton");
Item.createItem("krypton", "Kryptonite", {name: "krypton", meta: 0}, {stack: 64});


IDRegistry.genItemID("vibranium");
Item.createItem("vibranium", "Vibranium", {name: "vibranium", meta: 0}, {stack: 64});


IDRegistry.genItemID("raccoonwool");
Item.createItem("raccoonwool", "Raccoon fur", {name: "raccoonwool", meta: 0}, {stack: 64});












// file: Suits/avengers.js

IDRegistry.genItemID("captainamericahelmet");
IDRegistry.genItemID("captainamericachestplate");
IDRegistry.genItemID("captainamericaleggings");
IDRegistry.genItemID("captainamericaboots");

Item.createArmorItem("captainamericahelmet", "Captain America helmet", {name: "captainamerica4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/captainamerica1.png"});
Item.createArmorItem("captainamericachestplate", "Captain America chestplate", {name: "captainamerica5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/captainamerica3.png"});
Item.createArmorItem("captainamericaleggings", "Captain America leggings", {name: "captainamerica6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/captainamerica0.png"});
Item.createArmorItem("captainamericaboots", "Captain America boots", {name: "captainamerica7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/captainamerica2.png"});


IDRegistry.genItemID("hawkeyechestplate");
IDRegistry.genItemID("hawkeyeleggings");
IDRegistry.genItemID("hawkeyeboots");

Item.createArmorItem("hawkeyechestplate", "Hawk Eye chestplate", {name: "hawkeye4", meta: 0}, {type: "chestplate", armor: 14, durability: 750, texture: "armor/hawkeye3.png"});
Item.createArmorItem("hawkeyeleggings", "Hawk Eye leggings", {name: "hawkeye6", meta: 0}, {type: "leggings", armor: 11, durability: 700, texture: "armor/hawkeye0.png"});
Item.createArmorItem("hawkeyeboots", "Hawk Eye boots", {name: "hawkeye7", meta: 0}, {type: "boots", armor: 8, durability: 600, texture: "armor/hawkeye2.png"});



IDRegistry.genItemID("sokolhelmet");
IDRegistry.genItemID("sokolchestplate");
IDRegistry.genItemID("sokolleggings");
IDRegistry.genItemID("sokolboots");

Item.createArmorItem("sokolhelmet", "Falcon helmet", {name: "sokol4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sokol1.png"});
Item.createArmorItem("sokolchestplate", "Falcon chestplate", {name: "sokol5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sokol3.png"});
Item.createArmorItem("sokolleggings", "Falcon leggings", {name: "sokol6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sokol0.png"});
Item.createArmorItem("sokolboots", "Falcon boots", {name: "sokol7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sokol2.png"});



IDRegistry.genItemID("antmanhelmet");
IDRegistry.genItemID("antmanchestplate");
IDRegistry.genItemID("antmanleggings");
IDRegistry.genItemID("antmanboots");

Item.createArmorItem("antmanhelmet", "Ant Man helmet", {name: "antman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/antman1.png"});
Item.createArmorItem("antmanchestplate", "Ant Man chestplate", {name: "antman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/antman3.png"});
Item.createArmorItem("antmanleggings", "Ant Man leggings", {name: "antman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/antman0.png"});
Item.createArmorItem("antmanboots", "Ant Man boots", {name: "antman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/antman2.png"});


IDRegistry.genItemID("hulkhelmet");
IDRegistry.genItemID("hulkchestplate");
IDRegistry.genItemID("hulkleggings");
IDRegistry.genItemID("hulkboots");

Item.createArmorItem("hulkhelmet", "Hulk helmet", {name: "hulkhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/hulkarmor.png"});
Item.createArmorItem("hulkchestplate", "Hulk chestplate", {name: "hulkchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/hulkarmor.png"});
Item.createArmorItem("hulkleggings", "Hulk leggings", {name: "hulkleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/hulkarmor0.png"});
Item.createArmorItem("hulkboots", "Hulk boots", {name: "hulkboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/hulkarmor.png"});



IDRegistry.genItemID("thorhelmet");
IDRegistry.genItemID("thorchestplate");
IDRegistry.genItemID("thorleggings");
IDRegistry.genItemID("thorboots");

Item.createArmorItem("thorhelmet", "Thor helmet", {name: "thorhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/thorarmor.png"});
Item.createArmorItem("thorchestplate", "Thor chestplate", {name: "thorchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/thorarmor.png"});
Item.createArmorItem("thorleggings", "Thor leggings", {name: "thorleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/thorarmor0.png"});
Item.createArmorItem("thorboots", "Thor boots", {name: "thorboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/thorarmor.png"});





IDRegistry.genItemID("blackwidowchestplate");
IDRegistry.genItemID("blackwidowleggings");
IDRegistry.genItemID("blackwidowboots");

Item.createArmorItem("blackwidowchestplate", "Black Widow chestplate", {name: "blackwidowchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/blackwidowarmor.png"});
Item.createArmorItem("blackwidowleggings", "Black Widow leggings", {name: "blackwidowleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/blackwidowarmor0.png"});
Item.createArmorItem("blackwidowboots", "Black Widow boots", {name: "blackwidowboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/blackwidowarmor.png"});



IDRegistry.genItemID("quicksilverchestplate");
IDRegistry.genItemID("quicksilverleggings");
IDRegistry.genItemID("quicksilverboots");

Item.createArmorItem("quicksilverchestplate", "Quicksilver chestplate", {name: "quicksilverchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/quicksilverarmor.png"});
Item.createArmorItem("quicksilverleggings", "Quicksilver leggings", {name: "quicksilverleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/quicksilverarmor0.png"});
Item.createArmorItem("quicksilverboots", "Quicksilver boots", {name: "quicksilverboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/quicksilverarmor.png"});


IDRegistry.genItemID("doctorstrangechestplate");
IDRegistry.genItemID("doctorstrangeleggings");
IDRegistry.genItemID("doctorstrangeboots");

Item.createArmorItem("doctorstrangechestplate", "Doctor Strange chestplate", {name: "doctorstrangechestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/doctorstrangearmor.png"});
Item.createArmorItem("doctorstrangeleggings", "Doctor Strange leggings", {name: "doctorstrangeleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/doctorstrangearmor0.png"});
Item.createArmorItem("doctorstrangeboots", "Doctor Strange boots", {name: "doctorstrangeboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/doctorstrangearmor.png"});



IDRegistry.genItemID("lokihelmet");
IDRegistry.genItemID("lokichestplate");
IDRegistry.genItemID("lokileggings");
IDRegistry.genItemID("lokiboots");

Item.createArmorItem("lokihelmet", "Loki helmet", {name: "lokihelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/lokiarmor.png"});
Item.createArmorItem("lokichestplate", "Loki chestplate", {name: "lokichestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/lokiarmor.png"});
Item.createArmorItem("lokileggings", "Loki leggings", {name: "lokileggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/lokiarmor0.png"});
Item.createArmorItem("lokiboots", "Loki boots", {name: "lokiboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/lokiarmor.png"});









IDRegistry.genItemID("blackpanterhelmet");
IDRegistry.genItemID("blackpanterchestplate");
IDRegistry.genItemID("blackpanterleggings");
IDRegistry.genItemID("blackpanterboots");

Item.createArmorItem("blackpanterhelmet", "Black Panther helmet", {name: "blackpanterhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/blackpanterarmor.png"});
Item.createArmorItem("blackpanterchestplate", "Black Panther chestplate", {name: "blackpanterchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/blackpanterarmor.png"});
Item.createArmorItem("blackpanterleggings", "Black Panther leggings", {name: "blackpanterleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/blackpanterarmor0.png"});
Item.createArmorItem("blackpanterboots", "Black Panther boots", {name: "blackpanterboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/blackpanterarmor.png"});



IDRegistry.genItemID("scarletwitchchestplate");
IDRegistry.genItemID("scarletwitchleggings");
IDRegistry.genItemID("scarletwitchboots");

Item.createArmorItem("scarletwitchchestplate", "Scarlet Witch chestplate", {name: "scarletwitchchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/scarletwitcharmor.png"});
Item.createArmorItem("scarletwitchleggings", "Scarlet Witch leggings", {name: "scarletwitchleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/scarletwitcharmor0.png"});
Item.createArmorItem("scarletwitchboots", "Scarlet Witch boots", {name: "scarletwitchboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/scarletwitcharmor.png"});









































// file: Suits/gotg.js

IDRegistry.genItemID("rocketracoonhelmet");
IDRegistry.genItemID("rocketracoonchestplate");
IDRegistry.genItemID("rocketracoonleggings");
IDRegistry.genItemID("rocketracoonboots");

Item.createArmorItem("rocketracoonhelmet", "Rocket helmet", {name: "rocketracoon4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/rocketarmor.png"});
Item.createArmorItem("rocketracoonchestplate", "Rocket chestplate", {name: "rocketracoon5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/rocketarmor.png"});
Item.createArmorItem("rocketracoonleggings", "Rocket leggings", {name: "rocketracoon6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/rocketarmor0.png"});
Item.createArmorItem("rocketracoonboots", "Rocket boots", {name: "rocketracoon7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/rocketarmor.png"});




IDRegistry.genItemID("gamorahelmet");
IDRegistry.genItemID("gamorachestplate");
IDRegistry.genItemID("gamoraleggings");
IDRegistry.genItemID("gamoraboots");

Item.createArmorItem("gamorahelmet", "Gamora helmet", {name: "gamora4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/gamora1.png"});
Item.createArmorItem("gamorachestplate", "Gamora chestplate", {name: "gamora5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/gamora3.png"});
Item.createArmorItem("gamoraleggings", "Gamora leggings", {name: "gamora6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/gamora0.png"});
Item.createArmorItem("gamoraboots", "Gamora boots", {name: "gamora7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/gamora2.png"});



IDRegistry.genItemID("starlordhelmet");
IDRegistry.genItemID("starlordchestplate");
IDRegistry.genItemID("starlordleggings");
IDRegistry.genItemID("starlordboots");

Item.createArmorItem("starlordhelmet", "Star Lord helmet", {name: "starlord4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/starlord1.png"});
Item.createArmorItem("starlordchestplate", "Star Lord chestplate", {name: "starlord5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/starlord3.png"});
Item.createArmorItem("starlordleggings", "Star Lord leggings", {name: "starlord6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/starlord0.png"});
Item.createArmorItem("starlordboots", "Star Lord boots", {name: "starlord7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/starlord2.png"});



IDRegistry.genItemID("groothelmet");
IDRegistry.genItemID("grootchestplate");
IDRegistry.genItemID("grootleggings");
IDRegistry.genItemID("grootboots");

Item.createArmorItem("groothelmet", "Groot helmet", {name: "groothelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/grootarmor.png"});
Item.createArmorItem("grootchestplate", "Groot chestplate", {name: "grootchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/grootarmor.png"});
Item.createArmorItem("grootleggings", "Groot leggings", {name: "grootleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/grootarmor0.png"});
Item.createArmorItem("grootboots", "Groot boots", {name: "grootboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/grootarmor.png"});





IDRegistry.genItemID("draxhelmet");
IDRegistry.genItemID("draxchestplate");
IDRegistry.genItemID("draxleggings");
IDRegistry.genItemID("draxboots");

Item.createArmorItem("draxhelmet", "Drax helmet", {name: "draxhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/draxarmor.png"});
Item.createArmorItem("draxchestplate", "Drax chestplate", {name: "draxchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/draxarmor.png"});
Item.createArmorItem("draxleggings", "Drax leggings", {name: "draxleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/draxarmor0.png"});
Item.createArmorItem("draxboots", "Drax boots", {name: "draxboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/draxarmor.png"});



IDRegistry.genItemID("jonduhelmet");
IDRegistry.genItemID("jonduchestplate");
IDRegistry.genItemID("jonduleggings");
IDRegistry.genItemID("jonduboots");

Item.createArmorItem("jonduhelmet", "Yondu helmet", {name: "jonduhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/jonduarmor.png"});
Item.createArmorItem("jonduchestplate", "Yondu chestplate", {name: "jonduchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/jonduarmor.png"});
Item.createArmorItem("jonduleggings", "Yondu leggings", {name: "jonduleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/jonduarmor0.png"});
Item.createArmorItem("jonduboots", "Yondu boots", {name: "jonduboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/jonduarmor.png"});



IDRegistry.genItemID("nebulahelmet");
IDRegistry.genItemID("nebulachestplate");
IDRegistry.genItemID("nebulaleggings");
IDRegistry.genItemID("nebulaboots");

Item.createArmorItem("nebulahelmet", "Nebula helmet", {name: "nebulahelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/nebulaarmor.png"});
Item.createArmorItem("nebulachestplate", "Nebula chestplate", {name: "nebulachestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/nebulaarmor.png"});
Item.createArmorItem("nebulaleggings", "Nebula leggings", {name: "nebulaleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/nebulaarmor0.png"});
Item.createArmorItem("nebulaboots", "Nebula boots", {name: "nebulaboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/nebulaarmor.png"})

IDRegistry.genItemID("mantishelmet");
IDRegistry.genItemID("mantischestplate");
IDRegistry.genItemID("mantisleggings");
IDRegistry.genItemID("mantisboots");

Item.createArmorItem("mantishelmet", "Mantis helmet", {name: "mantishelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/mantisarmor.png"});
Item.createArmorItem("mantischestplate", "Mantis chestplate", {name: "mantischestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/mantisarmor.png"});
Item.createArmorItem("mantisleggings", "Mantis leggings", {name: "mantisleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/mantisarmor0.png"});
Item.createArmorItem("mantisboots", "Mantis boots", {name: "mantisboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/mantisarmor.png"});




























// file: Suits/xmen.js

IDRegistry.genItemID("deadpoolhelmet");
IDRegistry.genItemID("deadpoolchestplate");
IDRegistry.genItemID("deadpoolleggings");
IDRegistry.genItemID("deadpoolboots");

Item.createArmorItem("deadpoolhelmet", "Deadpool helmet", {name: "deadpoolhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/deadpoolarmor.png"});
Item.createArmorItem("deadpoolchestplate", "Deadpool chestplate", {name: "deadpoolchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/deadpoolarmor.png"});
Item.createArmorItem("deadpoolleggings", "Deadpool leggings", {name: "deadpoolleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/deadpoolarmor0.png"});
Item.createArmorItem("deadpoolboots", "Deadpool boots", {name: "deadpoolboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/deadpoolarmor.png"});



IDRegistry.genItemID("beasthelmet");
IDRegistry.genItemID("beastchestplate");
IDRegistry.genItemID("beastleggings");
IDRegistry.genItemID("beastboots");

Item.createArmorItem("beasthelmet", "Beast helmet", {name: "beasthelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/beastarmor.png"});
Item.createArmorItem("beastchestplate", "Beast chestplate", {name: "beastchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/beastarmor.png"});
Item.createArmorItem("beastleggings", "Beast leggings", {name: "beastleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/beastarmor0.png"});
Item.createArmorItem("beastboots", "Beast boots", {name: "beastboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/beastarmor.png"});




IDRegistry.genItemID("cyclopshelmet");
IDRegistry.genItemID("cyclopschestplate");
IDRegistry.genItemID("cyclopsleggings");
IDRegistry.genItemID("cyclopsboots");

Item.createArmorItem("cyclopshelmet", "Cyclop helmet", {name: "cyclopshelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/cyclopsarmor.png"});
Item.createArmorItem("cyclopschestplate", "Cyclop chestplate", {name: "cyclopschestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/cyclopsarmor.png"});
Item.createArmorItem("cyclopsleggings", "Cyclop leggings", {name: "cyclopsleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/cyclopsarmor0.png"});
Item.createArmorItem("cyclopsboots", "Cyclop boots", {name: "cyclopsboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/cyclopsarmor.png"});





























// file: Suits/dc.js

IDRegistry.genItemID("batmanhelmet");
IDRegistry.genItemID("batmanchestplate");
IDRegistry.genItemID("batmanleggings");
IDRegistry.genItemID("batmanboots");

Item.createArmorItem("batmanhelmet", "Batman helmet", {name: "batman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/batman1.png"});
Item.createArmorItem("batmanchestplate", "Batman chestplate", {name: "batman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/batman3.png"});
Item.createArmorItem("batmanleggings", "Batman leggings", {name: "batman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/batman0.png"});
Item.createArmorItem("batmanboots", "Batman boots", {name: "batman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/batman2.png"});



IDRegistry.genItemID("catwomanhelmet");
IDRegistry.genItemID("catwomanchestplate");
IDRegistry.genItemID("catwomanleggings");
IDRegistry.genItemID("catwomanboots");

Item.createArmorItem("catwomanhelmet", "Catwoman helmet", {name: "catwoman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/catwoman1.png"});
Item.createArmorItem("catwomanchestplate", "Catwoman chestplate", {name: "catwoman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/catwoman3.png"});
Item.createArmorItem("catwomanleggings", "Catwoman leggings", {name: "catwoman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/catwoman0.png"});
Item.createArmorItem("catwomanboots", "Catwoman boots", {name: "catwoman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/catwoman2.png"});



IDRegistry.genItemID("greenarrowhelmet");
IDRegistry.genItemID("greenarrowchestplate");
IDRegistry.genItemID("greenarrowleggings");
IDRegistry.genItemID("greenarrowboots");

Item.createArmorItem("greenarrowhelmet", "Green Arrow helmet", {name: "greenarrow4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/greenarrow1.png"});
Item.createArmorItem("greenarrowchestplate", "Green Arrow chestplate", {name: "greenarrow5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/greenarrow3.png"});
Item.createArmorItem("greenarrowleggings", "Green Arrow leggings", {name: "greenarrow6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/greenarrow0.png"});
Item.createArmorItem("greenarrowboots", "Green Arrow boots", {name: "greenarrow7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/greenarrow2.png"});



IDRegistry.genItemID("wonderwomanhelmet");
IDRegistry.genItemID("wonderwomanchestplate");
IDRegistry.genItemID("wonderwomanleggings");
IDRegistry.genItemID("wonderwomanboots");

Item.createArmorItem("wonderwomanhelmet", "Wonder Woman helmet", {name: "wonderwomanhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/wonderwomanarmor.png"});
Item.createArmorItem("wonderwomanchestplate", "Wonder Woman chestplate", {name: "wonderwomanchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/wonderwomanarmor.png"});
Item.createArmorItem("wonderwomanleggings", "Wonder Woman leggings", {name: "wonderwomanleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/wonderwomanarmor0.png"});
Item.createArmorItem("wonderwomanboots", "Wonder Woman boots", {name: "wonderwomanboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/wonderwomanarmor.png"});










IDRegistry.genItemID("aquamanchestplate");
IDRegistry.genItemID("aquamanleggings");
IDRegistry.genItemID("aquamanboots");

Item.createArmorItem("aquamanchestplate", "Aquaman chestplate", {name: "aquamanchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/aquamanarmor.png"});
Item.createArmorItem("aquamanleggings", "Aquaman leggings", {name: "aquamanleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/aquamanarmor0.png"});
Item.createArmorItem("aquamanboots", "Aquaman boots", {name: "aquamanboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/aquamanarmor.png"});











IDRegistry.genItemID("greenlanternhelmet");
IDRegistry.genItemID("greenlanternchestplate");
IDRegistry.genItemID("greenlanternleggings");
IDRegistry.genItemID("greenlanternboots");

Item.createArmorItem("greenlanternhelmet", "Green Lantern helmet", {name: "greenlanternhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/greenlanternarmor.png"});
Item.createArmorItem("greenlanternchestplate", "Green Lantern chestplate", {name: "greenlanternchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/greenlanternarmor.png"});
Item.createArmorItem("greenlanternleggings", "Green Lantern leggings", {name: "greenlanternleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/greenlanternarmor0.png"});
Item.createArmorItem("greenlanternboots", "Green Lantern boots", {name: "greenlanternboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/greenlanternarmor.png"});











IDRegistry.genItemID("dexstarrhelmet");
IDRegistry.genItemID("dexstarrchestplate");
IDRegistry.genItemID("dexstarrleggings");
IDRegistry.genItemID("dexstarrboots");

Item.createArmorItem("dexstarrhelmet", "Dex Starr helmet", {name: "dexstarrhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/dexstarrarmor.png"});
Item.createArmorItem("dexstarrchestplate", "Dex Starr chestplate", {name: "dexstarrchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/dexstarrarmor.png"});
Item.createArmorItem("dexstarrleggings", "Dex Starr leggings", {name: "dexstarrleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/dexstarrarmor0.png"});
Item.createArmorItem("dexstarrboots", "Dex Starr boots", {name: "dexstarrboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/dexstarrarmor.png"});





























// file: Suits/other.js

IDRegistry.genItemID("ghostriderhelmet");
IDRegistry.genItemID("ghostriderchestplate");
IDRegistry.genItemID("ghostriderleggings");
IDRegistry.genItemID("ghostriderboots");

Item.createArmorItem("ghostriderhelmet", "Ghost Rider helmet", {name: "ghostriderhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/ghostriderarmor.png"});
Item.createArmorItem("ghostriderchestplate", "Ghost Rider chestplate", {name: "ghostriderchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/ghostriderarmor.png"});
Item.createArmorItem("ghostriderleggings", "Ghost Rider leggings", {name: "ghostriderleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/ghostriderarmor0.png"});
Item.createArmorItem("ghostriderboots", "Ghost Rider boots", {name: "ghostriderboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/ghostriderarmor.png"});



IDRegistry.genItemID("phantomhelmet");
IDRegistry.genItemID("phantomchestplate");
IDRegistry.genItemID("phantomleggings");
IDRegistry.genItemID("phantomboots");

Item.createArmorItem("phantomhelmet", "Phantom helmet", {name: "phantomhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/phantomarmor.png"});
Item.createArmorItem("phantomchestplate", "Phantom chestplate", {name: "phantomchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/phantomarmor.png"});
Item.createArmorItem("phantomleggings", "Phantom leggings", {name: "phantomleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/phantomarmor0.png"});
Item.createArmorItem("phantomboots", "Phantom boots", {name: "phantomboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/phantomarmor.png"});



IDRegistry.genItemID("spawnhelmet");
IDRegistry.genItemID("spawnchestplate");
IDRegistry.genItemID("spawnleggings");
IDRegistry.genItemID("spawnboots");

Item.createArmorItem("spawnhelmet", "Spawn helmet", {name: "spawnhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/spawnarmor.png"});
Item.createArmorItem("spawnchestplate", "Spawn chestplate", {name: "spawnchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/spawnarmor.png"});
Item.createArmorItem("spawnleggings", "Spawn leggings", {name: "spawnleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/spawnarmor0.png"});
Item.createArmorItem("spawnboots", "Spawn boots", {name: "spawnboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/spawnarmor.png"});




































// file: Suits/ironman.js

IDRegistry.genItemID("ironmanhelmet");
IDRegistry.genItemID("ironmanchestplate");
IDRegistry.genItemID("ironmanleggings");
IDRegistry.genItemID("ironmanboots");

Item.createArmorItem("ironmanhelmet", "Iron Man helmet", {name: "ironman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/ironman.png"});
Item.createArmorItem("ironmanchestplate", "Iron Man chestplate", {name: "ironman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/ironman.png"});
Item.createArmorItem("ironmanleggings", "Iron Man leggings", {name: "ironman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/ironman0.png"});
Item.createArmorItem("ironmanboots", "Iron Man boots", {name: "ironman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/ironman.png"});




// file: Suits/speedsters.js

IDRegistry.genItemID("flashhelmet");
IDRegistry.genItemID("flashchestplate");
IDRegistry.genItemID("flashleggings");
IDRegistry.genItemID("flashboots");

Item.createArmorItem("flashhelmet", "Flash helmet", {name: "flash2", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/flash6.png"});
Item.createArmorItem("flashchestplate", "Flash chestplate", {name: "flash3", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/flash8.png"});
Item.createArmorItem("flashleggings", "Flash leggings", {name: "flash4", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/flash.png"});
Item.createArmorItem("flashboots", "Flash boots", {name: "flash5", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/flash7.png"});



IDRegistry.genItemID("flashserialhelmet");
IDRegistry.genItemID("flashserialchestplate");
IDRegistry.genItemID("flashserialleggings");
IDRegistry.genItemID("flashserialboots");

Item.createArmorItem("flashserialhelmet", "Flash helmet", {name: "flashserialhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/flashserialarmor.png"});
Item.createArmorItem("flashserialchestplate", "Flash chestplate", {name: "flashserialchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/flashserialarmor.png"});
Item.createArmorItem("flashserialleggings", "Flash leggings", {name: "flashserialleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/flashserialarmor0.png"});
Item.createArmorItem("flashserialboots", "Flash boots", {name: "flashserialboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/flashserialarmor.png"});



IDRegistry.genItemID("acceleratorhelmet");
IDRegistry.genItemID("acceleratorchestplate");
IDRegistry.genItemID("acceleratorleggings");
IDRegistry.genItemID("acceleratorboots");

Item.createArmorItem("acceleratorhelmet", "Accelerator helmet", {name: "acceleratorhelmet", meta: 0}, {type: "helmet", armor: 4, durability: 650, texture: "armor/acceleratorarmor.png"});
Item.createArmorItem("acceleratorchestplate", "Accelerator chestplate", {name: "acceleratorchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/acceleratorarmor.png"});
Item.createArmorItem("acceleratorleggings", "Accelerator leggings", {name: "acceleratorleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/acceleratorarmor0.png"});
Item.createArmorItem("acceleratorboots", "Accelerator boots", {name: "acceleratorboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/acceleratorarmor.png"});




















































// file: Suits/spiderman.js

IDRegistry.genItemID("spidermanhelmet");
IDRegistry.genItemID("spidermanchestplate");
IDRegistry.genItemID("spidermanleggings");
IDRegistry.genItemID("spidermanboots");

Item.createArmorItem("spidermanhelmet", "Spider Man helmet", {name: "spiderman4", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/spiderman1.png"});
Item.createArmorItem("spidermanchestplate", "Spider Man chestplate", {name: "spiderman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/spiderman3.png"});
Item.createArmorItem("spidermanleggings", "Spider Man leggings", {name: "spiderman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/spiderman.png"});
Item.createArmorItem("spidermanboots", "Spider Man boots", {name: "spiderman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/spiderman2.png"});







IDRegistry.genItemID("spiderGwenhelmet");
IDRegistry.genItemID("spiderGwenchestplate");
IDRegistry.genItemID("spiderGwenleggings");
IDRegistry.genItemID("spiderGwenboots");

Item.createArmorItem("spiderGwenhelmet", "Spider Gwen helmet", {name: "spiderGwenhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/spiderGwenarmor.png"});
Item.createArmorItem("spiderGwenchestplate", "Spider Gwen chestplate", {name: "spiderGwenchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/spiderGwenarmor.png"});
Item.createArmorItem("spiderGwenleggings", "Spider Gwen leggings", {name: "spiderGwenleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/spiderGwenarmor0.png"});
Item.createArmorItem("spiderGwenboots", "Spider Gwen boots", {name: "spiderGwenboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/spiderGwenarmor.png"});







IDRegistry.genItemID("scarletspiderhelmet");
IDRegistry.genItemID("scarletspiderchestplate");
IDRegistry.genItemID("scarletspiderleggings");
IDRegistry.genItemID("scarletspiderboots");

Item.createArmorItem("scarletspiderhelmet", "Scarlet Spider helmet", {name: "scarletspiderhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/scarletspiderarmor.png"});
Item.createArmorItem("scarletspiderchestplate", "Scarlet Spider chestplate", {name: "scarletspiderchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/scarletspiderarmor.png"});
Item.createArmorItem("scarletspiderleggings", "Scarlet Spider leggings", {name: "scarletspiderleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/scarletspiderarmor0.png"});
Item.createArmorItem("scarletspiderboots", "Scarlet Spider boots", {name: "scarletspiderboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/scarletspiderarmor.png"});



IDRegistry.genItemID("smNegativehelmet");
IDRegistry.genItemID("smNegativechestplate");
IDRegistry.genItemID("smNegativeleggings");
IDRegistry.genItemID("smNegativeboots");

Item.createArmorItem("smNegativehelmet", "Negative Spider Man helmet", {name: "smNegativehelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/smNegativearmor.png"});
Item.createArmorItem("smNegativechestplate", "Negative Spider Man chestplate", {name: "smNegativechestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/smNegativearmor.png"});
Item.createArmorItem("smNegativeleggings", "Negative Spider Man leggings", {name: "smNegativeleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/smNegativearmor0.png"});
Item.createArmorItem("smNegativeboots", "Negative Spider Man boots", {name: "smNegativeboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/smNegativearmor.png"});



IDRegistry.genItemID("sPunkhelmet");
IDRegistry.genItemID("sPunkchestplate");
IDRegistry.genItemID("sPunkleggings");
IDRegistry.genItemID("sPunkboots");

Item.createArmorItem("sPunkhelmet", "Spider Man Punk  helmet", {name: "sPunkhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sPunkarmor.png"});
Item.createArmorItem("sPunkchestplate", "Spider Man Punk  chestplate", {name: "sPunkchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sPunkarmor.png"});
Item.createArmorItem("sPunkleggings", "Spider Man Punk  leggings", {name: "sPunkleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sPunkarmor0.png"});
Item.createArmorItem("sPunkboots", "Spider Man Punk  boots", {name: "sPunkboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sPunkarmor.png"});



IDRegistry.genItemID("sFighterhelmet");
IDRegistry.genItemID("sFighterchestplate");
IDRegistry.genItemID("sFighterleggings");
IDRegistry.genItemID("sFighterboots");

Item.createArmorItem("sFighterhelmet", "Spider Man Wrestler  helmet", {name: "sFighterhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sFighterarmor.png"});
Item.createArmorItem("sFighterchestplate", "Spider Man Wrestler  chestplate", {name: "sFighterchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sFighterarmor.png"});
Item.createArmorItem("sFighterleggings", "Spider Man Wrestler  leggings", {name: "sFighterleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sFighterarmor0.png"});
Item.createArmorItem("sFighterboots", "Spider Man Wrestler  boots", {name: "sFighterboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sFighterarmor.png"});



IDRegistry.genItemID("sAdvancedhelmet");
IDRegistry.genItemID("sAdvancedchestplate");
IDRegistry.genItemID("sAdvancedleggings");
IDRegistry.genItemID("sAdvancedboots");

Item.createArmorItem("sAdvancedhelmet", "Spider Man Advanced  helmet", {name: "sAdvancedhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sAdvancedarmor.png"});
Item.createArmorItem("sAdvancedchestplate", "Spider Man Advanced  chestplate", {name: "sAdvancedchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sAdvancedarmor.png"});
Item.createArmorItem("sAdvancedleggings", "Spider Man Advanced  leggings", {name: "sAdvancedleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sAdvancedarmor0.png"});
Item.createArmorItem("sAdvancedboots", "Spider Man Advanced  boots", {name: "sAdvancedboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sAdvancedarmor.png"});





//1



IDRegistry.genItemID("smNoirhelmet");
IDRegistry.genItemID("smNoirchestplate");
IDRegistry.genItemID("smNoirleggings");
IDRegistry.genItemID("smNoirboots");

Item.createArmorItem("smNoirhelmet", "Noir Spider Man helmet", {name: "smNoirhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/smNoirarmor.png"});
Item.createArmorItem("smNoirchestplate", "Noir Spider Man chestplate", {name: "smNoirchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/smNoirarmor.png"});
Item.createArmorItem("smNoirleggings", "Noir Spider Man leggings", {name: "smNoirleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/smNoirarmor0.png"});
Item.createArmorItem("smNoirboots", "Noir Spider Man boots", {name: "smNoirboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/smNoirarmor.png"});



//1.5






IDRegistry.genItemID("sm2099helmet");
IDRegistry.genItemID("sm2099chestplate");
IDRegistry.genItemID("sm2099leggings");
IDRegistry.genItemID("sm2099boots");

Item.createArmorItem("sm2099helmet", "Spider Man 2099 helmet", {name: "sm2099helmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sm2099armor.png"});
Item.createArmorItem("sm2099chestplate", "Spider Man 2099 chestplate", {name: "sm2099chestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sm2099armor.png"});
Item.createArmorItem("sm2099leggings", "Spider Man 2099 leggings", {name: "sm2099leggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sm2099armor0.png"});
Item.createArmorItem("sm2099boots", "Spider Man 2099 boots", {name: "sm2099boots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sm2099armor.png"});



IDRegistry.genItemID("smSecretWarhelmet");
IDRegistry.genItemID("smSecretWarchestplate");
IDRegistry.genItemID("smSecretWarleggings");
IDRegistry.genItemID("smSecretWarboots");

Item.createArmorItem("smSecretWarhelmet", "Secret War Spider Man helmet", {name: "smSecretWarhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/smSecretWararmor.png"});
Item.createArmorItem("smSecretWarchestplate", "Secret War Spider Man chestplate", {name: "smSecretWarchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/smSecretWararmor.png"});
Item.createArmorItem("smSecretWarleggings", "Secret War Spider Man leggings", {name: "smSecretWarleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/smSecretWararmor0.png"});
Item.createArmorItem("smSecretWarboots", "Secret War Spider Man boots", {name: "smSecretWarboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/smSecretWararmor.png"});



IDRegistry.genItemID("sBigTimehelmet");
IDRegistry.genItemID("sBigTimechestplate");
IDRegistry.genItemID("sBigTimeleggings");
IDRegistry.genItemID("sBigTimeboots");

Item.createArmorItem("sBigTimehelmet", "Spider Man Big Time  helmet", {name: "sBigTimehelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sBigTimearmor.png"});
Item.createArmorItem("sBigTimechestplate", "Spider Man Big Time  chestplate", {name: "sBigTimechestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sBigTimearmor.png"});
Item.createArmorItem("sBigTimeleggings", "Spider Man Big Time  leggings", {name: "sBigTimeleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sBigTimearmor0.png"});
Item.createArmorItem("sBigTimeboots", "Spider Man Big Time  boots", {name: "sBigTimeboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sBigTimearmor.png"});




IDRegistry.genItemID("sMMhelmet");
IDRegistry.genItemID("sMMchestplate");
IDRegistry.genItemID("sMMleggings");
IDRegistry.genItemID("sMMboots");

Item.createArmorItem("sMMhelmet", "Spider Man Miles Morales  helmet", {name: "sMMhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sMMarmor.png"});
Item.createArmorItem("sMMchestplate", "Spider Man Miles Morales  chestplate", {name: "sMMchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sMMarmor.png"});
Item.createArmorItem("sMMleggings", "Spider Man Miles Morales  leggings", {name: "sMMleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sMMarmor0.png"});
Item.createArmorItem("sMMboots", "Spider Man Miles Morales  boots", {name: "sMMboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sMMarmor.png"});








//2







IDRegistry.genItemID("smArmoredhelmet");
IDRegistry.genItemID("smArmoredchestplate");
IDRegistry.genItemID("smArmoredleggings");
IDRegistry.genItemID("smArmoredboots");

Item.createArmorItem("smArmoredhelmet", "Armored Spider Man helmet", {name: "smArmoredhelmet", meta: 0}, {type: "helmet", armor: 21, durability: 650, texture: "armor/smArmoredarmor.png"});
Item.createArmorItem("smArmoredchestplate", "Armored Spider Man chestplate", {name: "smArmoredchestplate", meta: 0}, {type: "chestplate", armor: 25, durability: 750, texture: "armor/smArmoredarmor.png"});
Item.createArmorItem("smArmoredleggings", "Armored Spider Man leggings", {name: "smArmoredleggings", meta: 0}, {type: "leggings", armor: 23, durability: 700, texture: "armor/smArmoredarmor0.png"});
Item.createArmorItem("smArmoredboots", "Armored Spider Man boots", {name: "smArmoredboots", meta: 0}, {type: "boots", armor: 20, durability: 600, texture: "armor/smArmoredarmor.png"});



IDRegistry.genItemID("smMK2helmet");
IDRegistry.genItemID("smMK2chestplate");
IDRegistry.genItemID("smMK2leggings");
IDRegistry.genItemID("smMK2boots");

Item.createArmorItem("smMK2helmet", "Spider Man MK2 helmet", {name: "smMK2helmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/smMK2armor.png"});
Item.createArmorItem("smMK2chestplate", "Spider Man MK2 chestplate", {name: "smMK2chestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/smMK2armor.png"});
Item.createArmorItem("smMK2leggings", "Spider Man MK2 leggings", {name: "smMK2leggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/smMK2armor0.png"});
Item.createArmorItem("smMK2boots", "Spider Man MK2 boots", {name: "smMK2boots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/smMK2armor.png"});



IDRegistry.genItemID("sm2099lighthelmet");
IDRegistry.genItemID("sm2099lightchestplate");
IDRegistry.genItemID("sm2099lightleggings");
IDRegistry.genItemID("sm2099lightboots");

Item.createArmorItem("sm2099lighthelmet", "Spider Man 2099 Light helmet", {name: "sm2099lighthelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sm2099lightarmor.png"});
Item.createArmorItem("sm2099lightchestplate", "Spider Man 2099 Light chestplate", {name: "sm2099lightchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sm2099lightarmor.png"});
Item.createArmorItem("sm2099lightleggings", "Spider Man 2099 Light leggings", {name: "sm2099lightleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sm2099lightarmor0.png"});
Item.createArmorItem("sm2099lightboots", "Spider Man 2099 Light boots", {name: "sm2099lightboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sm2099lightarmor.png"});







IDRegistry.genItemID("smIsolatedhelmet");
IDRegistry.genItemID("smIsolatedchestplate");
IDRegistry.genItemID("smIsolatedleggings");
IDRegistry.genItemID("smIsolatedboots");

Item.createArmorItem("smIsolatedhelmet", "Electrically Spider Man helmet", {name: "smIsolatedhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/smIsolatedarmor.png"});
Item.createArmorItem("smIsolatedchestplate", "Electrically Spider Man chestplate", {name: "smIsolatedchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/smIsolatedarmor.png"});
Item.createArmorItem("smIsolatedleggings", "Electrically Spider Man leggings", {name: "smIsolatedleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/smIsolatedarmor0.png"});
Item.createArmorItem("smIsolatedboots", "Electrically Spider Man boots", {name: "smIsolatedboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/smIsolatedarmor.png"});



IDRegistry.genItemID("sFearItselfhelmet");
IDRegistry.genItemID("sFearItselfchestplate");
IDRegistry.genItemID("sFearItselfleggings");
IDRegistry.genItemID("sFearItselfboots");

Item.createArmorItem("sFearItselfhelmet", "Spider Man Fear Itself  helmet", {name: "sFearItselfhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sFearItselfarmor.png"});
Item.createArmorItem("sFearItselfchestplate", "Spider Man Fear Itself  chestplate", {name: "sFearItselfchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sFearItselfarmor.png"});
Item.createArmorItem("sFearItselfleggings", "Spider Man Fear Itself  leggings", {name: "sFearItselfleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sFearItselfarmor0.png"});
Item.createArmorItem("sFearItselfboots", "Spider Man Fear Itself  boots", {name: "sFearItselfboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sFearItselfarmor.png"});



IDRegistry.genItemID("sMarkIIIhelmet");
IDRegistry.genItemID("sMarkIIIchestplate");
IDRegistry.genItemID("sMarkIIIleggings");
IDRegistry.genItemID("sMarkIIIboots");

Item.createArmorItem("sMarkIIIhelmet", "Spider Man MarkIII  helmet", {name: "sMarkIIIhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sMarkIIIarmor.png"});
Item.createArmorItem("sMarkIIIchestplate", "Spider Man MarkIII  chestplate", {name: "sMarkIIIchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sMarkIIIarmor.png"});
Item.createArmorItem("sMarkIIIleggings", "Spider Man MarkIII  leggings", {name: "sMarkIIIleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sMarkIIIarmor0.png"});
Item.createArmorItem("sMarkIIIboots", "Spider Man MarkIII  boots", {name: "sMarkIIIboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sMarkIIIarmor.png"});



IDRegistry.genItemID("sVelocityhelmet");
IDRegistry.genItemID("sVelocitychestplate");
IDRegistry.genItemID("sVelocityleggings");
IDRegistry.genItemID("sVelocityboots");

Item.createArmorItem("sVelocityhelmet", "Spider Man Velocity  helmet", {name: "sVelocityhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sVelocityarmor.png"});
Item.createArmorItem("sVelocitychestplate", "Spider Man Velocity  chestplate", {name: "sVelocitychestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sVelocityarmor.png"});
Item.createArmorItem("sVelocityleggings", "Spider Man Velocity  leggings", {name: "sVelocityleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sVelocityarmor0.png"});
Item.createArmorItem("sVelocityboots", "Spider Man Velocity  boots", {name: "sVelocityboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sVelocityarmor.png"});



IDRegistry.genItemID("sMKIVhelmet");
IDRegistry.genItemID("sMKIVchestplate");
IDRegistry.genItemID("sMKIVleggings");
IDRegistry.genItemID("sMKIVboots");

Item.createArmorItem("sMKIVhelmet", "Spider Man MKIV  helmet", {name: "sMKIVhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sMKIVarmor.png"});
Item.createArmorItem("sMKIVchestplate", "Spider Man MKIV  chestplate", {name: "sMKIVchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sMKIVarmor.png"});
Item.createArmorItem("sMKIVleggings", "Spider Man MKIV  leggings", {name: "sMKIVleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sMKIVarmor0.png"});
Item.createArmorItem("sMKIVboots", "Spider Man MKIV  boots", {name: "sMKIVboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sMKIVarmor.png"});



IDRegistry.genItemID("sSpirithelmet");
IDRegistry.genItemID("sSpiritchestplate");
IDRegistry.genItemID("sSpiritleggings");
IDRegistry.genItemID("sSpiritboots");

Item.createArmorItem("sSpirithelmet", "Spider Man Spirit  helmet", {name: "sSpirithelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sSpiritarmor.png"});
Item.createArmorItem("sSpiritchestplate", "Spider Man Spirit  chestplate", {name: "sSpiritchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sSpiritarmor.png"});
Item.createArmorItem("sSpiritleggings", "Spider Man Spirit  leggings", {name: "sSpiritleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sSpiritarmor0.png"});
Item.createArmorItem("sSpiritboots", "Spider Man Spirit  boots", {name: "sSpiritboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sSpiritarmor.png"});



IDRegistry.genItemID("sAntiOckhelmet");
IDRegistry.genItemID("sAntiOckchestplate");
IDRegistry.genItemID("sAntiOckleggings");
IDRegistry.genItemID("sAntiOckboots");

Item.createArmorItem("sAntiOckhelmet", "Spider Man Anti-Ock  helmet", {name: "sAntiOckhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sAntiOckarmor.png"});
Item.createArmorItem("sAntiOckchestplate", "Spider Man Anti-Ock  chestplate", {name: "sAntiOckchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sAntiOckarmor.png"});
Item.createArmorItem("sAntiOckleggings", "Spider Man Anti-Ock  leggings", {name: "sAntiOckleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sAntiOckarmor0.png"});
Item.createArmorItem("sAntiOckboots", "Spider Man Anti-Ock  boots", {name: "sAntiOckboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sAntiOckarmor.png"});



//3









IDRegistry.genItemID("blackspidermanhelmet");
IDRegistry.genItemID("blackspidermanchestplate");
IDRegistry.genItemID("blackspidermanleggings");
IDRegistry.genItemID("blackspidermanboots");

Item.createArmorItem("blackspidermanhelmet", "Black Spider Man helmet", {name: "blackspidermanhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/blackspidermanarmor.png"});
Item.createArmorItem("blackspidermanchestplate", "Black Spider Man chestplate", {name: "blackspidermanchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/blackspidermanarmor.png"});
Item.createArmorItem("blackspidermanleggings", "Black Spider Man leggings", {name: "blackspidermanleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/blackspidermanarmor0.png"});
Item.createArmorItem("blackspidermanboots", "Black Spider Man boots", {name: "blackspidermanboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/blackspidermanarmor.png"});



IDRegistry.genItemID("ironspidermanhelmet");
IDRegistry.genItemID("ironspidermanchestplate");
IDRegistry.genItemID("ironspidermanleggings");
IDRegistry.genItemID("ironspidermanboots");

Item.createArmorItem("ironspidermanhelmet", "Iron Spider Man helmet", {name: "ironspidermanhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/ironspidermanarmor.png"});
Item.createArmorItem("ironspidermanchestplate", "Iron Spider Man chestplate", {name: "ironspidermanchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/ironspidermanarmor.png"});
Item.createArmorItem("ironspidermanleggings", "Iron Spider Man leggings", {name: "ironspidermanleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/ironspidermanarmor0.png"});
Item.createArmorItem("ironspidermanboots", "Iron Spider Man boots", {name: "ironspidermanboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/ironspidermanarmor.png"});







//3.5




IDRegistry.genItemID("sArkhelmet");
IDRegistry.genItemID("sArkchestplate");
IDRegistry.genItemID("sArkleggings");
IDRegistry.genItemID("sArkboots");

Item.createArmorItem("sArkhelmet", "Ark Spider Man helmet", {name: "sArkhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/sArkarmor.png"});
Item.createArmorItem("sArkchestplate", "Ark Spider Man chestplate", {name: "sArkchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/sArkarmor.png"});
Item.createArmorItem("sArkleggings", "Ark Spider Man leggings", {name: "sArkleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/sArkarmor0.png"});
Item.createArmorItem("sArkboots", "Ark Spider Man boots", {name: "sArkboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/sArkarmor.png"});

//4










































// file: Suits/captainMarvel.js

IDRegistry.genItemID("captainmarvelchestplate");
IDRegistry.genItemID("captainmarvelleggings");
IDRegistry.genItemID("captainmarvelboots");

Item.createArmorItem("captainmarvelchestplate", "Captain Marvel chestplate", {name: "captainmarvelchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/captainmarvelarmor.png"});
Item.createArmorItem("captainmarvelleggings", "Captain Marvel leggings", {name: "captainmarvelleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/captainmarvelarmor0.png"});
Item.createArmorItem("captainmarvelboots", "Captain Marvel boots", {name: "captainmarvelboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/captainmarvelarmor.png"});



IDRegistry.genItemID("cmKreechestplate");
IDRegistry.genItemID("cmKreeleggings");
IDRegistry.genItemID("cmKreeboots");

Item.createArmorItem("cmKreechestplate", "Captain Marvel Kree chestplate", {name: "cmKreechestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/cmKreearmor.png"});
Item.createArmorItem("cmKreeleggings", "Captain Marvel Kree leggings", {name: "cmKreeleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/cmKreearmor0.png"});
Item.createArmorItem("cmKreeboots", "Captain Marvel Kree boots", {name: "cmKreeboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/cmKreearmor.png"});



IDRegistry.genItemID("cmRedchestplate");
IDRegistry.genItemID("cmRedleggings");
IDRegistry.genItemID("cmRedboots");

Item.createArmorItem("cmRedchestplate", "Captain Marvel Red chestplate", {name: "cmRedchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/cmRedarmor.png"});
Item.createArmorItem("cmRedleggings", "Captain Marvel Red leggings", {name: "cmRedleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/cmRedarmor0.png"});
Item.createArmorItem("cmRedboots", "Captain Marvel Red boots", {name: "cmRedboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/cmRedarmor.png"});



IDRegistry.genItemID("cmBlackchestplate");
IDRegistry.genItemID("cmBlackleggings");
IDRegistry.genItemID("cmBlackboots");

Item.createArmorItem("cmBlackchestplate", "Captain Marvel Black chestplate", {name: "cmBlackchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/cmBlackarmor.png"});
Item.createArmorItem("cmBlackleggings", "Captain Marvel Black leggings", {name: "cmBlackleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/cmBlackarmor0.png"});
Item.createArmorItem("cmBlackboots", "Captain Marvel Black boots", {name: "cmBlackboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/cmBlackarmor.png"});



IDRegistry.genItemID("cmNeonchestplate");
IDRegistry.genItemID("cmNeonleggings");
IDRegistry.genItemID("cmNeonboots");

Item.createArmorItem("cmNeonchestplate", "Captain Marvel Neon chestplate", {name: "cmNeonchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/cmNeonarmor.png"});
Item.createArmorItem("cmNeonleggings", "Captain Marvel Neon leggings", {name: "cmNeonleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/cmNeonarmor0.png"});
Item.createArmorItem("cmNeonboots", "Captain Marvel Neon boots", {name: "cmNeonboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/cmNeonarmor.png"});



IDRegistry.genItemID("cmArkchestplate");
IDRegistry.genItemID("cmArkleggings");
IDRegistry.genItemID("cmArkboots");

Item.createArmorItem("cmArkchestplate", "Captain Marvel Ark chestplate", {name: "cmArkchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/cmArkarmor.png"});
Item.createArmorItem("cmArkleggings", "Captain Marvel Ark leggings", {name: "cmArkleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/cmArkarmor0.png"});
Item.createArmorItem("cmArkboots", "Captain Marvel Ark boots", {name: "cmArkboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/cmArkarmor.png"});



IDRegistry.genItemID("GeeseHelmet");
IDRegistry.genItemID("GeeseChestplate");
IDRegistry.genItemID("GeeseLeggings");
IDRegistry.genItemID("GeeseBoots");

Item.createArmorItem("GeeseHelmet", "Geese helmet", {name: "GeeseHelmet", meta: 0}, {type: "helmet", armor: 8, durability: 750, texture: "armor/GeeseArmor.png"});
Item.createArmorItem("GeeseChestplate", "Geese chestplate", {name: "GeeseChestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 700, texture: "armor/GeeseArmor.png"});
Item.createArmorItem("GeeseLeggings", "Geese leggings", {name: "GeeseLeggings", meta: 0}, {type: "leggings", armor: 10, durability: 600, texture: "armor/GeeseArmor0.png"});
Item.createArmorItem("GeeseBoots", "Geese boots", {name: "GeeseBoots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/GeeseArmor.png"});


























// file: Suits/verypower.js

IDRegistry.genItemID("supermanchestplate");
IDRegistry.genItemID("supermanleggings");
IDRegistry.genItemID("supermanboots");

Item.createArmorItem("supermanchestplate", "Superman chestplate", {name: "superman5", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/superman3.png"});
Item.createArmorItem("supermanleggings", "Superman leggings", {name: "superman6", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/superman0.png"});
Item.createArmorItem("supermanboots", "Superman boots", {name: "superman7", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/superman2.png"});



IDRegistry.genItemID("fenixchestplate");
IDRegistry.genItemID("fenixleggings");
IDRegistry.genItemID("fenixboots");

Item.createArmorItem("fenixchestplate", "Fenix chestplate", {name: "fenixchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/fenixarmor.png"});
Item.createArmorItem("fenixleggings", "Fenix leggings", {name: "fenixleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/fenixarmor0.png"});
Item.createArmorItem("fenixboots", "Fenix boots", {name: "fenixboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/fenixarmor.png"});



IDRegistry.genItemID("visionhelmet");
IDRegistry.genItemID("visionchestplate");
IDRegistry.genItemID("visionleggings");
IDRegistry.genItemID("visionboots");

Item.createArmorItem("visionhelmet", "Vision helmet", {name: "visionhelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/visionarmor.png"});
Item.createArmorItem("visionchestplate", "Vision chestplate", {name: "visionchestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/visionarmor.png"});
Item.createArmorItem("visionleggings", "Vision leggings", {name: "visionleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/visionarmor0.png"});
Item.createArmorItem("visionboots", "Vision boots", {name: "visionboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/visionarmor.png"});



IDRegistry.genItemID("smUniversehelmet");
IDRegistry.genItemID("smUniversechestplate");
IDRegistry.genItemID("smUniverseleggings");
IDRegistry.genItemID("smUniverseboots");

Item.createArmorItem("smUniversehelmet", "Spider Man helmet", {name: "smUniversehelmet", meta: 0}, {type: "helmet", armor: 8, durability: 650, texture: "armor/smUniversearmor.png"});
Item.createArmorItem("smUniversechestplate", "Spider Man Captain Universe chestplate", {name: "smUniversechestplate", meta: 0}, {type: "chestplate", armor: 12, durability: 750, texture: "armor/smUniversearmor.png"});
Item.createArmorItem("smUniverseleggings", "Spider Man Captain Universe leggings", {name: "smUniverseleggings", meta: 0}, {type: "leggings", armor: 10, durability: 700, texture: "armor/smUniversearmor0.png"});
Item.createArmorItem("smUniverseboots", "Spider Man Captain Universe boots", {name: "smUniverseboots", meta: 0}, {type: "boots", armor: 7, durability: 600, texture: "armor/smUniversearmor.png"});






IDRegistry.genItemID("arkshelmet");
IDRegistry.genItemID("arkschestplate");
IDRegistry.genItemID("arksleggings");
IDRegistry.genItemID("arksboots");

Item.createArmorItem("arkshelmet", "Ark helmet", {name: "arkshelmet", meta: 0}, {type: "helmet", armor: 4815162342, durability: 4815162342, texture: "armor/arksarmor.png"});
Item.createArmorItem("arkschestplate", "Ark cheatplate", {name: "arkschestplate", meta: 0}, {type: "chestplate", armor: 4815162342, durability: 4815162342, texture: "armor/arksarmor.png"});
Item.createArmorItem("arksleggings", "Ark leggings", {name: "arksleggings", meta: 0}, {type: "leggings", armor: 4815162342, durability: 4815162342, texture: "armor/arksarmor0.png"});
Item.createArmorItem("arksboots", "Ark boots", {name: "arksboots", meta: 0}, {type: "boots", armor: 4815162342, durability: 4815162342, texture: "armor/arksarmor.png"});








































// file: effects.js

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.batmanhelmet && chest.id == ItemID.batmanchestplate && legs.id == ItemID.batmanleggings && boots.id == ItemID.batmanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.captainamericahelmet && chest.id == ItemID.captainamericachestplate && legs.id == ItemID.captainamericaleggings && boots.id == ItemID.captainamericaboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.catwomanhelmet && chest.id == ItemID.catwomanchestplate && legs.id == ItemID.catwomanleggings && boots.id == ItemID.catwomanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.flashhelmet && chest.id == ItemID.flashchestplate && legs.id == ItemID.flashleggings && boots.id == ItemID.flashboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 250, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.gamorahelmet && chest.id == ItemID.gamorachestplate && legs.id == ItemID.gamoraleggings && boots.id == ItemID.gamoraboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.greenarrowhelmet && chest.id == ItemID.greenarrowchestplate && legs.id == ItemID.greenarrowleggings && boots.id == ItemID.greenarrowboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    
    
    
    if (chest.id == ItemID.hawkeyechestplate && legs.id == ItemID.hawkeyeleggings && boots.id == ItemID.hawkeyeboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.ironmanhelmet && chest.id == ItemID.ironmanchestplate && legs.id == ItemID.ironmanleggings && boots.id == ItemID.ironmanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    if (helmet.id == ItemID.rocketracoonhelmet && chest.id == ItemID.rocketracoonchestplate && legs.id == ItemID.rocketracoonleggings && boots.id == ItemID.rocketracoonboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.sokolhelmet && chest.id == ItemID.sokolchestplate && legs.id == ItemID.sokolleggings && boots.id == ItemID.sokolboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    
    if (helmet.id == ItemID.starlordhelmet && chest.id == ItemID.starlordchestplate && legs.id == ItemID.starlordleggings && boots.id == ItemID.starlordboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.spidermanhelmet && chest.id == ItemID.spidermanchestplate && legs.id == ItemID.spidermanleggings && boots.id == ItemID.spidermanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.blackspidermanhelmet && chest.id == ItemID.blackspidermanchestplate && legs.id == ItemID.blackspidermanleggings && boots.id == ItemID.blackspidermanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 29, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 14, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 29, 100)
    }
    
    
    
    
    
    if (chest.id == ItemID.supermanchestplate && legs.id == ItemID.supermanleggings && boots.id == ItemID.supermanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 100, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    
    
    
    
    if (helmet.id == ItemID.hulkhelmet && chest.id == ItemID.hulkchestplate && legs.id == ItemID.hulkleggings && boots.id == ItemID.hulkboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.thorhelmet && chest.id == ItemID.thorchestplate && legs.id == ItemID.thorleggings && boots.id == ItemID.thorboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    if (helmet.id == ItemID.draxhelmet && chest.id == ItemID.draxchestplate && legs.id == ItemID.draxleggings && boots.id == ItemID.draxboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    if (helmet.id == ItemID.groothelmet && chest.id == ItemID.grootchestplate && legs.id == ItemID.grootleggings && boots.id == ItemID.grootboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 16, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.blackwidowhelmet && chest.id == ItemID.blackwidowchestplate && legs.id == ItemID.blackwidowleggings && boots.id == ItemID.blackwidowboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    
    
    
    
    
    if (helmet.id == ItemID.jonduhelmet && chest.id == ItemID.jonduchestplate && legs.id == ItemID.jonduleggings && boots.id == ItemID.jonduboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (chest.id == ItemID.doctorstrangechestplate && legs.id == ItemID.doctorstrangeleggings && boots.id == ItemID.doctorstrangeboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    if (chest.id == ItemID.quicksilverchestplate && legs.id == ItemID.quicksilverleggings && boots.id == ItemID.quicksilverboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 50, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.nebulahelmet && chest.id == ItemID.nebulachestplate && legs.id == ItemID.nebulaleggings && boots.id == ItemID.nebulaboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    
    
    
    if (helmet.id == ItemID.mantishelmet && chest.id == ItemID.mantischestplate && legs.id == ItemID.mantisleggings && boots.id == ItemID.mantisboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.lokihelmet && chest.id == ItemID.lokichestplate && legs.id == ItemID.lokileggings && boots.id == ItemID.lokiboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.blackpanterhelmet && chest.id == ItemID.blackpanterchestplate && legs.id == ItemID.blackpanterleggings && boots.id == ItemID.blackpanterboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    }
    
    
    
    if (helmet.id == ItemID.ghostriderhelmet && chest.id == ItemID.ghostriderchestplate && legs.id == ItemID.ghostriderleggings && boots.id == ItemID.ghostriderboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    World.setBlock(pos.x,pos.y-1,pos.z, 51, 1);
    }
    
    
    
    if (helmet.id == ItemID.deadpoolhelmet && chest.id == ItemID.deadpoolchestplate && legs.id == ItemID.deadpoolleggings && boots.id == ItemID.deadpoolboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    }
    
    
    
    if (helmet.id == ItemID.scarletwitchhelmet && chest.id == ItemID.scarletwitchchestplate && legs.id == ItemID.scarletwitchleggings && boots.id == ItemID.scarletwitchboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    if (helmet.id == ItemID.scarletwitchhelmet && chest.id == ItemID.scarletwitchchestplate && legs.id == ItemID.scarletwitchleggings && boots.id == ItemID.scarletwitchboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 6, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    



if (chest.id == ItemID.fenixchestplate && legs.id == ItemID.fenixleggings && boots.id == ItemID.fenixboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    
    
    
    
    
    
    if (helmet.id == ItemID.cyclopshelmet && chest.id == ItemID.cyclopschestplate && legs.id == ItemID.cyclopsleggings && boots.id == ItemID.cyclopsboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    }
    
    
    
    
    
    if (helmet.id == ItemID.wonderwomanhelmet && chest.id == ItemID.wonderwomanchestplate && legs.id == ItemID.wonderwomanleggings && boots.id == ItemID.wonderwomanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    }
    
    
    
    
    
    
if (chest.id == ItemID.aquamanchestplate && legs.id == ItemID.aquamanleggings && boots.id == ItemID.aquamanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 250, 100)
    }
    
    
    
    if (helmet.id == ItemID.greenlanternhelmet && chest.id == ItemID.greenlanternchestplate && legs.id == ItemID.greenlanternleggings && boots.id == ItemID.greenlanternboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    if (helmet.id == ItemID.dexstarrhelmet && chest.id == ItemID.dexstarrchestplate && legs.id == ItemID.dexstarrleggings && boots.id == ItemID.dexstarrboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    if (helmet.id == ItemID.phantomhelmet && chest.id == ItemID.phantomchestplate && legs.id == ItemID.phantomleggings && boots.id == ItemID.phantomboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 5, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    }
    
    
    
    
    
    
   
if (helmet.id == ItemID.arkshelmet && chest.id == ItemID.arkschestplate && legs.id == ItemID.arksleggings && boots.id == ItemID.arksboots) {
Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.saturation, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 250, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 250, 100)

Particles.addParticle(pos.x, pos.y + 1, pos.z, 6); 

Player.setFlyingEnabled (true);
    }
    
    
    
    if (helmet.id == ItemID.acceleratorhelmet && chest.id == ItemID.acceleratorchestplate && legs.id == ItemID.acceleratorleggings && boots.id == ItemID.acceleratorboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 252, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    
    if (helmet.id == ItemID.flashserialhelmet && chest.id == ItemID.flashserialchestplate && legs.id == ItemID.flashserialleggings && boots.id == ItemID.flashserialboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 251, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    }
    
    
    if (helmet.id == ItemID.ironspidermanhelmet && chest.id == ItemID.ironspidermanchestplate && legs.id == ItemID.ironspidermanleggings && boots.id == ItemID.ironspidermanboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 34, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 34, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.visionhelmet && chest.id == ItemID.visionchestplate && legs.id == ItemID.visionleggings && boots.id == ItemID.visionboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    if (helmet.id == ItemID.spawnhelmet && chest.id == ItemID.spawnchestplate && legs.id == ItemID.spawnleggings && boots.id == ItemID.spawnboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
    
    
    if (chest.id == ItemID.captainmarvelchestplate && legs.id == ItemID.captainmarvelleggings && boots.id == ItemID.captainmarvelboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    if (helmet.id == ItemID.scarletspiderhelmet && chest.id == ItemID.scarletspiderchestplate && legs.id == ItemID.scarletspiderleggings && boots.id == ItemID.scarletspiderboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
    
    
    
    if (helmet.id == ItemID.sm2099helmet && chest.id == ItemID.sm2099chestplate && legs.id == ItemID.sm2099leggings && boots.id == ItemID.sm2099boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 14, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    }
    
    
    
    if (helmet.id == ItemID.smArmoredhelmet && chest.id == ItemID.smArmoredchestplate && legs.id == ItemID.smArmoredleggings && boots.id == ItemID.smArmoredboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    
    if (helmet.id == ItemID.smMK2helmet && chest.id == ItemID.smMK2chestplate && legs.id == ItemID.smMK2leggings && boots.id == ItemID.smMK2boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.smNoirhelmet && chest.id == ItemID.smNoirchestplate && legs.id == ItemID.smNoirleggings && boots.id == ItemID.smNoirboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.invisible, 1, 100)
    }
    
    
    
    if (helmet.id == ItemID.smSecretWarhelmet && chest.id == ItemID.smSecretWarchestplate && legs.id == ItemID.smSecretWarleggings && boots.id == ItemID.smSecretWarboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 14, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    }
    
    
    
    if (helmet.id == ItemID.smUniversehelmet && chest.id == ItemID.smUniversechestplate && legs.id == ItemID.smUniverseleggings && boots.id == ItemID.smUniverseboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100) 
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    if (helmet.id == ItemID.smNegativehelmet && chest.id == ItemID.smNegativechestplate && legs.id == ItemID.smNegativeleggings && boots.id == ItemID.smNegativeboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
    
    
    
    if (helmet.id == ItemID.sm2099lighthelmet && chest.id == ItemID.sm2099lightchestplate && legs.id == ItemID.sm2099lightleggings && boots.id == ItemID.sm2099lightboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    
    if (helmet.id == ItemID.spiderGwenhelmet && chest.id == ItemID.spiderGwenchestplate && legs.id == ItemID.spiderGwenleggings && boots.id == ItemID.spiderGwenboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
    
    
    
    if (helmet.id == ItemID.smIsolatedhelmet && chest.id == ItemID.smIsolatedchestplate && legs.id == ItemID.smIsolatedleggings && boots.id == ItemID.smIsolatedboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 19, 100)
    }
    
    
    
    if (helmet.id == ItemID.sPunkhelmet && chest.id == ItemID.sPunkchestplate && legs.id == ItemID.sPunkleggings && boots.id == ItemID.sPunkboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
    
    
    
    if (helmet.id == ItemID.sFighterhelmet && chest.id == ItemID.sFighterchestplate && legs.id == ItemID.sFighterleggings && boots.id == ItemID.sFighterboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
    
    
    if (helmet.id == ItemID.sBigTimehelmet && chest.id == ItemID.sBigTimechestplate && legs.id == ItemID.sBigTimeleggings && boots.id == ItemID.sBigTimeboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 14, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    }
    
    
    
    if (helmet.id == ItemID.sMMhelmet && chest.id == ItemID.sMMchestplate && legs.id == ItemID.sMMleggings && boots.id == ItemID.sMMboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 17, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.invisibility, 19, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.sFearItselfhelmet && chest.id == ItemID.sFearItselfchestplate && legs.id == ItemID.sFearItselfleggings && boots.id == ItemID.sFearItselfboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    
    
    if (helmet.id == ItemID.sMarkIIIhelmet && chest.id == ItemID.sMarkIIIchestplate && legs.id == ItemID.sMarkIIIleggings && boots.id == ItemID.sMarkIIIboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    
    if (helmet.id == ItemID.sVelocityhelmet && chest.id == ItemID.sVelocitychestplate && legs.id == ItemID.sVelocityleggings && boots.id == ItemID.sVelocityboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 39, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    
    if (helmet.id == ItemID.sMKIVhelmet && chest.id == ItemID.sMKIVchestplate && legs.id == ItemID.sMKIVleggings && boots.id == ItemID.sMKIVboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    
    if (helmet.id == ItemID.sSpirithelmet && chest.id == ItemID.sSpiritchestplate && legs.id == ItemID.sSpiritleggings && boots.id == ItemID.sSpiritboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 4, 100)
    }
    
    
    if (helmet.id == ItemID.sAntiOckhelmet && chest.id == ItemID.sAntiOckchestplate && legs.id == ItemID.sAntiOckleggings && boots.id == ItemID.sAntiOckboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 4, 100)
    }
    
    
    
    if (helmet.id == ItemID.sAdvancedhelmet && chest.id == ItemID.sAdvancedchestplate && legs.id == ItemID.sAdvancedleggings && boots.id == ItemID.sAdvancedboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 9, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 3, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 9, 100)
    }
    
    
    
    if (helmet.id == ItemID.sArkhelmet && chest.id == ItemID.sArkchestplate && legs.id == ItemID.sArkleggings && boots.id == ItemID.sArkboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 34, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 9, 100)
    }
    
    
    
    
    if (chest.id == ItemID.cmRedchestplate && legs.id == ItemID.cmRedleggings && boots.id == ItemID.cmRedboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    if (chest.id == ItemID.cmBlackchestplate && legs.id == ItemID.cmBlackleggings && boots.id == ItemID.cmBlackboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    if (chest.id == ItemID.cmNeonchestplate && legs.id == ItemID.cmNeonleggings && boots.id == ItemID.cmNeonboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    if (chest.id == ItemID.cmKreechestplate && legs.id == ItemID.cmKreeleggings && boots.id == ItemID.cmKreeboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 19, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 49, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    if (chest.id == ItemID.cmArkchestplate && legs.id == ItemID.cmArkleggings && boots.id == ItemID.cmArkboots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 99, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 99, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 49, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 99, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 99, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 4, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 99, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 99, 100)
    Player.setFlyingEnabled(true); 
    }
    
    
    
    if (helmet.id == ItemID.GeeseHelmet && chest.id == ItemID.GeeseChestplate && legs.id == ItemID.GeeseLeggings && boots.id == ItemID.GeeseBoots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 10, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 10, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 10, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 10, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 100)
Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 10, 100)
    }
    
    
    


    
    
    
    
    
    
    
    
    
    
    
   
    








});




// file: weapons.js

importLib("ToolType","*")






IDRegistry.genItemID("capshield");
Item.createThrowableItem("capshield", "Captain America Shield", {name:"capshield"}, {stack:64});

Item.registerThrowableFunction("capshield", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 18);
} 
} 
);



IDRegistry.genItemID("energiccharge");
Item.createThrowableItem("energiccharge", "Energic Charge", {name:"energiccharge"}, {stack:64});

Item.registerThrowableFunction("energiccharge", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 18);
} 
} 
);


IDRegistry.genItemID("grappinghook");
Item.createItem("grappinghook", "Grapping hook", {name: "grappinghook", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id == ItemID.grappinghook){
        Player.setPosition(coords.relative.x, coords.relative.y+2, coords.relative.z);
    }
});





IDRegistry.genItemID("mjolnir");
Item.createItem("mjolnir", "Mjolnir", {name: "mjolnir", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("mjolnir", {durability: 3400, level: 20, efficiency: 80, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.mjolnir, "mjolnir", ToolType.sword);




IDRegistry.genItemID("stormbreaker");
Item.createItem("stormbreaker", "Storm Breaker", {name: "stormbreaker", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("stormbreaker", {durability: 3400, level: 20, efficiency: 80, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.stormbreaker, "stormbreaker", ToolType.sword);



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.mjolnir){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.stormbreaker){ 
 var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
 }
});




IDRegistry.genItemID("webshooter");
Item.createItem("webshooter", "Web shooter", {name: "webshooter", meta: 0}, {stack: 64});



Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id == ItemID.webshooter){
        Player.setPosition(coords.relative.x, coords.relative.y+2, coords.relative.z);
    }
});






Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem
	if(item.id == ItemID.mjolnir){
		Player.setFlyingEnabled(true); 
		}
		});
		
		
		Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem
	if(item.id == ItemID.stormbreaker){
		Player.setFlyingEnabled(true); 
		}
		});
		
		
		
		
		IDRegistry.genItemID("wolverine");
Item.createItem("wolverine", "Wolverine Claws", {name: "wolverine", meta: 0}, {stack: 1});

		Callback.addCallback("tick", function(){
	var item = Player.getCarriedItem
	if(item.id == ItemID.wolverine){
		Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 4, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 2, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.jump, 1, 100)
    Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 1, 100)
		}
		});
		
		
		
		IDRegistry.genItemID("redenergy");
Item.createThrowableItem("redenergy", "Red Energy", {name:"redenergy"}, {stack:64});

Item.registerThrowableFunction("redenergy", function(projectile, item, target){
if(target.entity == -1){} else {
var targetEntity = target.entity;
Entity.damageEntity(targetEntity, 20);
} 
} 
);



































// file: guns.js

IMPORT("ShootLib", "ShootLib");

var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;

ShootLib.init({
	crosshairGUI:{
		bitmap:{
			name:-1,
			coords:{
				x:0,
				y:0,
				width:2048,
				height:512
			},
			size:{
				width:4000,
				height:1000
			}
		}
	}
});

ShootLib.addGun({
	id:"rocketgun",
	name:"Rocket Gun",
	ammo:"energybullet",
	accuracy:6,
	recoil:1,
	rate:10,
	texture:{
		name:"rocketgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});









ShootLib.addGun({
	id:"kreegun",
	name:"Kree Gun",
	ammo:"energybullet",
	accuracy:4, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"kreegun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:45,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"kylngun",
	name:"Kyln Gun",
	ammo:"energybullet",
	accuracy:4, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"kylngun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:45,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"starlordgun",
	name:"Star Lord Gun",
	ammo:"energybullet",
	accuracy:6, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"starlordgun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:50,
		damage:15
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"greenarrowbow",
	name:"Green Arrow bow",
	ammo:"greenarrow",
	accuracy:7, //точность
	recoil:0, //отдача
	rate:10, //темп 
	texture:{
		name:"greenarrowbow",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:1,
		damage:25
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addGun({
	id:"gun",
	name:"Gun",
	ammo:"bullet",
	accuracy:7, //точность
	recoil:1, //отдача
	rate:10, //темп 
	texture:{
		name:"gun",
		meta:0
	},
	shotType:ShotType.NORMAL,
	buttonType:ButtonType.CLICK,
	bullet:{
		speed:10,
		count:40,
		damage:20
	},
	fov:{
		level:10
	},
	sounds:{
		shot:"Shoot/Shoot.ogg",
		empty:"EmptyGun.ogg",
		reload:"Reload/FastReload.ogg"
	}
});



ShootLib.addAmmos([{
	id:"energybullet",
	name:"Energy Bullet",
	texture:{
		name:"energiccharge",
		meta:0
	}
},
{
	id:"greenarrow",
	name:"Green Arrow",
	texture:{
		name:"greenarrow",
		meta:0
	}
},
{
	id:"bullet",
	name:"Bullet",
	texture:{
		name:"bullet",
		meta:0
	}
}, ]);




// file: crafts.js

Recipes.addShaped({id: ItemID.blackflint, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 318, 0, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.blackingot, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 265, 0, 'b', 351, 0]);


Recipes.addShaped({id: ItemID.greeningot, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 265, 0, 'b', 351, 2]);

Recipes.addShaped({id: ItemID.purpleleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 331, 0, 'b', 351, 13]);

Recipes.addShaped({id: ItemID.arkeniumingotsh, count: 1, data: 0}, [ "aba", "bab", "aba"], ['a', 351, 14, 'b', ItemID.krypton, 0]);

Recipes.addShaped({id: ItemID.blackleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.blackwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.blackwool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 15]);



Recipes.addShaped({id: ItemID.graywool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 7]);

Recipes.addShaped({id: ItemID.graywool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 8]);



Recipes.addShaped({id: ItemID.greenleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 10]);



Recipes.addShaped({id: ItemID.yellowleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 11]);

Recipes.addShaped({id: ItemID.blueleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 4]);



Recipes.addShaped({id: ItemID.redflint, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 318, 0, 'b', 351, 1]);

Recipes.addShaped({id: ItemID.redingot, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 265, 0, 'b', 351, 1]);

Recipes.addShaped({id: ItemID.redleather, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 334, 0, 'b', 351, 1]);



Recipes.addShaped({id: ItemID.bluewool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 12]);

Recipes.addShaped({id: ItemID.bluewool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 3]);



Recipes.addShaped({id: ItemID.redwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 1]);

Recipes.addShaped({id: ItemID.redwool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 14]);



Recipes.addShaped({id: ItemID.violetwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 5]);

Recipes.addShaped({id: ItemID.violetwool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 10]);



Recipes.addShaped({id: ItemID.whitewool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 0, 'b', 351, 15]);

Recipes.addShaped({id: ItemID.whitewool, count: 1, data: 0}, [ "a  ", "   ", "   "], ['a', 35, 0]);



Recipes.addShaped({id: ItemID.raccoonwool, count: 1, data: 0}, [ "ba ", "   ", "   "], ['a', 35, 0, 'b', 351, 5]);

Recipes.addShaped({id: ItemID.raccoonwool, count: 1, data: 0}, [ " a ", "   ", "   "], ['a', 35, 12]);



Recipes.addShaped({id: ItemID.yellowingot, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 265, 0, 'b', 351, 11]);



Recipes.addShaped({id: ItemID.generator, count: 1, data: 0}, [ " a ", "aba", " c "], ['a', 265, 0, 'b', 264, 0, 'c', 89, 0]);



Recipes.addShaped({id: ItemID.captainstar, count: 1, data: 0}, [ " a ", "aaa", " a "], ['a', 265, 0]);



Recipes.addShaped({id: ItemID.ironstick, count: 1, data: 0}, [ " a ", " a ", "   "], ['a', 265, 0]);



Recipes.addShaped({id: ItemID.ironstick, count: 1, data: 0}, [ " a ", "aba", " a "], ['a', 264, 0, 'b', 351, 10]);



Recipes.addShaped({id: ItemID.greenarrow, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', 351, 2, 'b', 265, 0, 'c', 262, 0]);




Recipes.addShaped({id: ItemID.darkbluewool, count: 1, data: 0}, [ "abc", "   ", "   "], ['a', 35, 0, 'b', 351, 12, 'c', 351, 0]);

Recipes.addShaped({id: ItemID.darkbluewool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 3, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.darkbluewool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.bluewool, 3, 'b', 351, 0]);





Recipes.addShaped({id: ItemID.darkredwool, count: 1, data: 0}, [ "abc", "   ", "   "], ['a', 35, 0, 'b', 351, 1, 'c', 351, 0]);

Recipes.addShaped({id: ItemID.darkredwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 14, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.darkredwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.redwool, 3, 'b', 351, 0]);




Recipes.addShaped({id: ItemID.darkvioletwool, count: 1, data: 0}, [ "abc", "   ", "   "], ['a', 35, 0, 'b', 351, 5, 'c', 351, 0]);

Recipes.addShaped({id: ItemID.darkvioletwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', 35, 10, 'b', 351, 0]);

Recipes.addShaped({id: ItemID.darkvioletwool, count: 1, data: 0}, [ "ab ", "   ", "   "], ['a', ItemID.violetwool, 3, 'b', 351, 0]);








































Recipes.addShaped({id: ItemID.batmanhelmet, count: 1, data: 0}, [ "aaa", "aba", "b b"], ['a', ItemID.blackingot, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.batmanchestplate, count: 1, data: 0}, [ "aba", "aaa", "aaa"], ['a', ItemID.blackingot, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.batmanleggings, count: 1, data: 0}, [ "aaa", "aba", "aba"], ['a', ItemID.blackingot, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.batmanboots, count: 1, data: 0}, [ "b b", "aba", "a a"], ['a', ItemID.blackingot, 0, 'b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.captainamericahelmet, count: 1, data: 0}, [ "aba", "a a", "aaa"], ['a', ItemID.darkbluewool, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.captainamericachestplate, count: 1, data: 0}, [ "a a", "aba", "cdc"], ['a', ItemID.darkbluewool, 0, 'b', ItemID.captainstar, 0, 'd', ItemID.redwool, 0, 'c', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.captainamericaleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.captainamericaboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.redwool, 0]);



Recipes.addShaped({id: ItemID.catwomanhelmet, count: 1, data: 0}, [ "aaa", "a a", "aaa"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.catwomanchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.catwomanleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.catwomanboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackleather, 0]);





Recipes.addShaped({id: ItemID.gamorahelmet, count: 1, data: 0}, [ "aaa", "bbb", "bbb"], ['a', ItemID.blackwool, 0, 'b', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.gamorachestplate, count: 1, data: 0}, [ "bab", "cbc", "bcb"], ['a', ItemID.greenleather, 0, 'b', ItemID.blackleather, 0, 'c', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.gamoraleggings, count: 1, data: 0}, [ "bab", "a a", "b b"], ['a', ItemID.blackleather, 0, 'b', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.gamoraboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', ItemID.blackleather, 0, 'b', ItemID.blackingot, 0]);



Recipes.addShaped({id: ItemID.gamorahelmet, count: 1, data: 0}, [ "aaa", "a a", "aaa"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.gamorachestplate, count: 1, data: 0}, [ "b b", "bbb", "bbb"], ['b', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.gamoraleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.gamoraboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.greenleather, 0]);



Recipes.addShaped({id: ItemID.hawkeyechestplate, count: 1, data: 0}, [ "a a", "bab", "cac"], ['a', ItemID.blackwool, 0, 'b', ItemID.violetwool, 0, 'c', ItemID.darkvioletwool, 0]);
Recipes.addShaped({id: ItemID.gamoraleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.gamoraboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackwool, 0]);




Recipes.addShaped({id: ItemID.ironmanhelmet, count: 1, data: 0}, [ "aba", "bbb", "aba"], ['a', ItemID.redingot, 0, 'b', ItemID.yellowingot, 0]);
Recipes.addShaped({id: ItemID.ironmanchestplate, count: 1, data: 0}, [ "aba", "bcb", "bdb"], ['a', ItemID.yellowingot, 0, 'b', ItemID.redingot, 0, 'c', ItemID.generator, 0, 'd', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.ironmanleggings, count: 1, data: 0}, [ "aaa", "b b", "a a"], ['a', ItemID.redingot, 0, 'b', ItemID.yellowingot, 0]);
Recipes.addShaped({id: ItemID.ironmanboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.redingot, 0]);



Recipes.addShaped({id: ItemID.rocketracoonhelmet, count: 1, data: 0}, [ "aaa", "a a", "aaa"], ['a', ItemID.raccoonwool, 0]);
Recipes.addShaped({id: ItemID.rocketracoonchestplate, count: 1, data: 0}, [ "aba", "aca", "cbc"], ['a', ItemID.raccoonwool, 0, 'b', ItemID.orangewool, 0, 'c', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.rocketracoonleggings, count: 1, data: 0}, [ "aaa", "b b", "b b"], ['a', ItemID.blackleather, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.rocketracoonboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.sokolhelmet, count: 1, data: 0}, [ "   ", "aba", "   "], ['a', 265, 0, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.sokolchestplate, count: 1, data: 0}, [ "aba", "cac", "aca"], ['a', ItemID.redingot, 0, 'b', 265, 0, 'c', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.sokolleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.sokolboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackingot, 0]);







Recipes.addShaped({id: ItemID.starlordhelmet, count: 1, data: 0}, [ "aaa", "bab", "aaa"], ['a', 265, 0, 'b', 102, 0]);
Recipes.addShaped({id: ItemID.starlordchestplate, count: 1, data: 0}, [ "aba", "aba", "aba"], ['a', ItemID.redleather, 0, 'b', ItemID.bluewool, 0]);
Recipes.addShaped({id: ItemID.starlordleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.starlordboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.supermanchestplate, count: 1, data: 0}, [ "aaa", "bcb", "bdb"], ['a', ItemID.krypton, 0, 'b', ItemID.darkbluewool, 0, 'c', ItemID.yellowingot, 0, 'd', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.supermanleggings, count: 1, data: 0}, [ "bwb", "b b", "b b"], ['b', ItemID.darkbluewool, 0, 'w', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.supermanboots, count: 1, data: 0}, [ "   ", "w w", "b b"], ['b', ItemID.redwool, 0, 'w', ItemID.krypton, 0]);



Recipes.addShaped({id: ItemID.blackspidermanhelmet, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.blackleather, 0, 'b', ItemID.spidermanhelmet, 0]);
Recipes.addShaped({id: ItemID.blackspidermanchestplate, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.blackleather, 0, 'b', ItemID.spidermanchestplate, 0]);
Recipes.addShaped({id: ItemID.blackspidermanleggings, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.blackleather, 0, 'b', ItemID.spidermanleggings, 0]);
Recipes.addShaped({id: ItemID.blackspidermanboots, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.blackleather, 0, 'b', ItemID.spidermanboots, 0]);



Recipes.addShaped({id: ItemID.hulkhelmet, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.hulkchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.hulkleggings, count: 1, data: 0}, [ "bbb", "a a", "a a"], ['b', ItemID.darkbluewool, 0, 'a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.hulkboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['b', ItemID.greenleather, 0]);



Recipes.addShaped({id: ItemID.thorhelmet, count: 1, data: 0}, [ "aba", "bab", "b b"], ['a', 266, 0, 'b', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.thorchestplate, count: 1, data: 0}, [ "aba", "bbc", "ccb"], ['a', 266, 0, 'b', ItemID.blackingot, 0, 'c', 334, 0]);
Recipes.addShaped({id: ItemID.thorleggings, count: 1, data: 0}, [ "bbb", "a a", "a a"], ['b', 334, 0, 'a', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.thorboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackingot, 0]);



Recipes.addShaped({id: ItemID.blackwidowchestplate, count: 1, data: 0}, [ "a a", "a a", "aaa"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.blackwidowleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.blackwidowboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackleather, 0]);



Recipes.addShaped({id: ItemID.groothelmet, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', 17, 0, 'b', 89, 0]);
Recipes.addShaped({id: ItemID.grootchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', 17, 0]);
Recipes.addShaped({id: ItemID.grootleggings, count: 1, data: 0}, [ "aa", "a a", "a a"], ['a', 17, 0]);
Recipes.addShaped({id: ItemID.grootboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', 17, 0]);



Recipes.addShaped({id: ItemID.draxhelmet, count: 1, data: 0}, [ "aba", "aba", "bbb"], ['a', ItemID.redleather, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.draxchestplate, count: 1, data: 0}, [ "aab", "aba", "baa"], ['a', ItemID.redleather, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.draxleggings, count: 1, data: 0}, [ "bbb", "a a", "a a"], ['b', ItemID.redleather, 0, 'a', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.draxboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackingot, 0]);








Recipes.addShaped({id: ItemID.quicksilverchestplate, count: 1, data: 0}, [ "aba", "cbc", "bbb"], ['a', ItemID.darkbluewool, 0, 'b', ItemID.graywool, 0, 'c', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.quicksilverleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.quicksilverboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.graywool, 0, 'b', ItemID.whitewool, 0]);












Recipes.addShaped({id: ItemID.doctorstrangechestplate, count: 1, data: 0}, [ "aba", "ccc", "ccc"], ['a', 266, 0, 'b', ItemID.redwool, 0, 'c', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.doctorstrangeleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.doctorstrangeboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackwool, 0]);






Recipes.addShaped({id: ItemID.jonduhelmet, count: 1, data: 0}, [ "aba", "aaa", "aaa"], ['b', ItemID.redingot, 0, 'a', ItemID.blueleather, 0]);
Recipes.addShaped({id: ItemID.jonduchestplate, count: 1, data: 0}, [ "aba", "aba", "aba"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.jonduleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.jonduboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackleather, 0]);






Recipes.addShaped({id: ItemID.nebulahelmet, count: 1, data: 0}, [ "aaa", "aab", "aaa"], ['a', ItemID.blueleather, 0, 'b', 265, 0]);
Recipes.addShaped({id: ItemID.nebulachestplate, count: 1, data: 0}, [ "aba", "aba", "bbb"], ['a', ItemID.blueleather, 0, 'b', ItemID.redleather, 0]);
Recipes.addShaped({id: ItemID.nebulaleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.redleather, 0]);
Recipes.addShaped({id: ItemID.nebulaboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.redleather, 0]);






Recipes.addShaped({id: ItemID.mantishelmet, count: 1, data: 0}, [ "aaa", "bbb", "bbb"], ['a', ItemID.blackwool, 0, 'b', ItemID.yellowleather, 0]);
Recipes.addShaped({id: ItemID.mantischestplate, count: 1, data: 0}, [ "aba", "aba", "bbb"], ['a', ItemID.yellowleather, 0, 'b', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.mantisleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.mantisboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.greenleather, 0]);






Recipes.addShaped({id: ItemID.lokihelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', 266, 0]);
Recipes.addShaped({id: ItemID.lokichestplate, count: 1, data: 0}, [ "bab", "cbc", "aaa"], ['a', 266, 0, 'b', ItemID.blackwool, 0, 'c', ItemID.greenleather, 0]);
Recipes.addShaped({id: ItemID.lokileggings, count: 1, data: 0}, [ "bbb", "a a", "b b"], ['b', ItemID.blackwool, 0, 'a', 266, 0]);
Recipes.addShaped({id: ItemID.lokiboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['b', ItemID.blackwool, 0, 'a', 266, 0]);




Recipes.addShaped({id: ItemID.blackpanterhelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.vibranium, 0]);
Recipes.addShaped({id: ItemID.blackpanterchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.vibranium, 0]);
Recipes.addShaped({id: ItemID.blackpanterleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.vibranium, 0]);
Recipes.addShaped({id: ItemID.blackpanterboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.vibranium, 0]);



Recipes.addShaped({id: ItemID.ghostriderhelmet, count: 1, data: 0}, [ " a ", " b ", " c "], ['a', 385, 0, 'b', 87, 0, 'c', 397, 0]);
Recipes.addShaped({id: ItemID.ghostriderchestplate, count: 1, data: 0}, [ "aba", "cbc", "cbc"], ['a', 265, 0, 'b', ItemID.graywool, 0, 'c', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.ghostriderleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackleather, 0, 'a', 266, 0]);
Recipes.addShaped({id: ItemID.ghostriderboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.blackleather, 0]);



Recipes.addShaped({id: ItemID.deadpoolhelmet, count: 1, data: 0}, [ "bab", "bab", "aaa"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.deadpoolchestplate, count: 1, data: 0}, [ "aaa", "aba", "aba"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.deadpoolleggings, count: 1, data: 0}, [ "bab", "a a", "a a"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.deadpoolboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);





Recipes.addShaped({id: ItemID.capshield, count: 64, data: 0}, [ " a ", "bcb", " a "], ['a', ItemID.redingot, 0, 'b', 265, 0, 'c', ItemID.vibranium, 0]);



Recipes.addShaped({id: ItemID.energiccharge, count: 64, data: 0}, [ " a ", "aba", " a "], ['a', 331, 0, 'b', 152, 0]);


Recipes.addShaped({id: ItemID.redenergy, count: 64, data: 0}, [ " a ", "aba", " a "], ['a', 331, 0, 'b', 152, 0]);




Recipes.addShaped({id: ItemID.scarletwitchchestplate, count: 1, data: 0}, [ "aba", "aba", "aba"], ['a', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.scarletwitchleggings, count: 1, data: 0}, [ "aaa", "aaa", "   "], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.scarletwitchboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackleather, 0]);



Recipes.addShaped({id: ItemID.beasthelmet, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.beastchestplate, count: 1, data: 0}, [ "aba", "aba", "aba"], ['a', ItemID.blackleather, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.beastleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.beastboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackleather, 0]);





Recipes.addShaped({id: ItemID.wonderwomanhelmet, count: 1, data: 0}, [ "   ", "aaa", " a "], ['a', 266, 0]);
Recipes.addShaped({id: ItemID.wonderwomanchestplate, count: 1, data: 0}, [ "aaa", "bab", "bbb"], ['a', 266, 0, 'b', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.wonderwomanleggings, count: 1, data: 0}, [ "bbb", "aba", " a "], ['a', 266, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.wonderwomanboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.blackleather, 0, 'b', ItemID.redingot, 0]);







Recipes.addShaped({id: ItemID.fenixchestplate, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.redleather, 0, 'b', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.fenixleggings, count: 1, data: 0}, [ "aba", "a a", "a a"], ['a', ItemID.redleather, 0, 'b', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.fenixboots, count: 1, data: 0}, [ "   ", "a a", "b b"], ['a', ItemID.redleather, 0, 'b', ItemID.krypton, 0]);






Recipes.addShaped({id: ItemID.cyclopshelmet, count: 1, data: 0}, [ "   ", "aaa", "   "], ['a', 265, 0]);
Recipes.addShaped({id: ItemID.cyclopschestplate, count: 1, data: 0}, [ "a a", "bab", "aba"], ['a', ItemID.blackleather, 0, 'b', 265, 0]);
Recipes.addShaped({id: ItemID.cyclopsleggings, count: 1, data: 0}, [ "aba", "b b", "a a"], ['a', ItemID.blackleather, 0, 'b', 265, 0]);
Recipes.addShaped({id: ItemID.cyclopsboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', ItemID.blackleather, 0, 'b', 265, 0]);







Recipes.addShaped({id: ItemID.aquamanchestplate, count: 1, data: 0}, [ "aaa", "bab", "aaa"], ['a', 266, 0, 'b', ItemID.greeningot, 0]);
Recipes.addShaped({id: ItemID.aquamanleggings, count: 1, data: 0}, [ "aaa", "b b", "a a"], ['a', ItemID.greeningot, 0, 'b', 266, 0]);
Recipes.addShaped({id: ItemID.aquamanboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', 266, 0]);






Recipes.addShaped({id: ItemID.greenlanternhelmet, count: 1, data: 0}, [ "   ", "aaa", "   "], ['a', ItemID.greeningot, 0]);
Recipes.addShaped({id: ItemID.greenlanternchestplate, count: 1, data: 0}, [ "aaa", "bcb", "bab"], ['a', ItemID.greeningot, 0, 'b', ItemID.blackingot, 0, 'c', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.greenlanternleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.greenlanternboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackingot, 0]);






Recipes.addShaped({id: ItemID.dexstarrhelmet, count: 1, data: 0}, [ "aaa", "aaa", "aaa"], ['a', ItemID.graywool, 0]);
Recipes.addShaped({id: ItemID.dexstarrchestplate, count: 1, data: 0}, [ "aaa", "bcb", "bbb"], ['a', ItemID.redingot, 0, 'b', ItemID.redingot, 0, 'c', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.dexstarrleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.dexstarrboots, count: 1, data: 0}, [ "   ", "b b", "a a"], ['a', ItemID.whitewool, 0, 'b', ItemID.redingot, 0]);






Recipes.addShaped({id: ItemID.phantomhelmet, count: 1, data: 0}, [ "aaa", "bcb", "aaa"], ['a', ItemID.purpleleather, 0, 'b', ItemID.blackwool, 0, 'c', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.phantomchestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.purpleleather, 0]);
Recipes.addShaped({id: ItemID.phantomleggings, count: 1, data: 0}, [ "aba", "c c", "c c"], ['a', ItemID.blackleather, 0, 'b', 266, 0, 'c', ItemID.purpleleather, 0]);
Recipes.addShaped({id: ItemID.phantomboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.blackleather, 0]);



Recipes.addShaped({id: ItemID.acceleratorhelmet, count: 1, data: 0}, [ "rbr", "bbb", "r r"], ['b', ItemID.darkbluewool, 0, 'r', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.acceleratorchestplate, count: 1, data: 0}, [ "yby", "byb", "rbr"], ['y', ItemID.yellowleather, 0, 'b', ItemID.darkbluewool, 0, 'r', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.acceleratorleggings, count: 1, data: 0}, [ "yby", "r r", "b b"], ['y', ItemID.yellowleather, 0, 'b', ItemID.darkbluewool, 0, 'r', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.acceleratorboots, count: 1, data: 0}, [ "   ", "b b", "r r"], ['b', ItemID.darkbluewool, 0, 'r', ItemID.redwool, 0]);


Recipes.addShaped({id: ItemID.arkshelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.arkeniumingotsh, 0]);
Recipes.addShaped({id: ItemID.arkschestplate, count: 1, data: 0}, [ "a a", "aaa", "aaa"], ['a', ItemID.arkeniumingotsh, 0]);
Recipes.addShaped({id: ItemID.arksleggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.arkeniumingotsh, 0]);
Recipes.addShaped({id: ItemID.arksboots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.arkeniumingotsh, 0]);
















Recipes.addShaped({id: ItemID.ironspidermanhelmet, count: 1, data: 0}, [ "aaa", "aba", "aaa"], ['a', ItemID.redingot, 0, 'b', ItemID.spidermanhelmet, 0]);
Recipes.addShaped({id: ItemID.ironspidermanchestplate, count: 1, data: 0}, [ "gig", "rcr", "drd"], ['g', 266, 0, 'i', 265, 0, 'r', ItemID.redingot, 0, 'c', ItemID.spidermanchestplate, 0, 'd', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.ironspidermanleggings, count: 1, data: 0}, [ "bbb", "blb", "b b"], ['b', ItemID.darkbluewool, 0, 'l', ItemID.spidermanleggings, 0]);
Recipes.addShaped({id: ItemID.ironspidermanboots, count: 1, data: 0}, [ "g g", "ibi", "rrr"], ['g', 266, 0, 'i', 265, 0, 'b', ItemID.spidermanboots, 0, 'r', ItemID.redingot, 0]);



Recipes.addShaped({id: ItemID.visionhelmet, count: 1, data: 0}, [ "ggg", "rkr", "grg"], ['g', ItemID.greeningot, 0, 'r', ItemID.redingot, 0, 'k', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.visionchestplate, count: 1, data: 0}, [ "ryr", "gkg", "gkg"], ['y', ItemID.yellowingot, 0, 'r', ItemID.redingot, 0, 'g', ItemID.greeningot, 0, 'k', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.visionleggings, count: 1, data: 0}, [ "ggg", "gkg", "g g"], ['g', ItemID.greeningot, 0, 'k', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.visionboots, count: 1, data: 0}, [ "   ", "yky", "r r"], ['y', ItemID.yellowingot, 0, 'r', ItemID.redingot, 0, 'k', ItemID.krypton, 0]);



Recipes.addShaped({id: ItemID.flashserialhelmet, count: 1, data: 0}, [ "lil", "ili", "lil"], ['l', ItemID.redleather, 0, 'i', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.flashserialchestplate, count: 1, data: 0}, [ "lil", "iyi", "lil"], ['y', ItemID.yellowingot, 0, 'l', ItemID.redleather, 0, 'i', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.flashserialleggings, count: 1, data: 0}, [ "lyi", "i i", "l l"], ['y', ItemID.yellowingot, 0, 'l', ItemID.redleather, 0, 'i', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.flashserialboots, count: 1, data: 0}, [ "   ", "i i", "l l"], ['l', ItemID.redleather, 0, 'i', ItemID.redingot, 0]);



Recipes.addShaped({id: ItemID.spawnhelmet, count: 1, data: 0}, [ "wbw", "gwg", "www"], ['w', ItemID.whitewool, 0, 'b', ItemID.blackleather, 0, 'g', ItemID.greeningot, 0]);
Recipes.addShaped({id: ItemID.spawnchestplate, count: 1, data: 0}, [ "rir", "wbw", "bbb"], ['r', ItemID.redwool, 0, 'i', 265, 0, 'w', ItemID.whitewool, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.spawnleggings, count: 1, data: 0}, [ "bbb", "r r", "b b"], ['r', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.spawnboots, count: 1, data: 0}, [ "   ", "b b", "r r"], ['r', ItemID.redleather, 0, 'b', ItemID.blackleather, 0]);





Recipes.addShaped({id: ItemID.captainmarvelchestplate, count: 1, data: 0}, [ "ryr", "yky", "bkb"], ['r', ItemID.redingot, 0, 'y', ItemID.yellowingot, 0, 'k', ItemID.krypton, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.captainmarvelleggings, count: 1, data: 0}, [ "rkr", "yby", "b b"], ['r', ItemID.redingot, 0, 'y', ItemID.yellowingot, 0, 'k', ItemID.krypton, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.captainmarvelboots, count: 1, data: 0}, [ "   ", "yky", "r r"], ['r', ItemID.redingot, 0, 'y', ItemID.yellowingot, 0, 'k', ItemID.krypton, 0]);


//SpiderMan




Recipes.addShaped({id: ItemID.spidermanhelmet, count: 1, data: 0}, [ "aaa", "bab", "aaa"], ['a', ItemID.redwool, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.spidermanchestplate, count: 1, data: 0}, [ "aaa", "bcb", "aaa"], ['a', ItemID.redwool, 0, 'b', ItemID.darkbluewool, 0, 'c', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.spidermanleggings, count: 1, data: 0}, [ "bbb", "a a", "a a"], ['b', ItemID.redwool, 0, 'a', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.spidermanboots, count: 1, data: 0}, [ "   ", "b b", "b b"], ['b', ItemID.redwool, 0]);




Recipes.addShaped({id: ItemID.scarletspiderhelmet, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.spidermanhelmet, 0, 'b', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.scarletspiderchestplate, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanchestplate, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.scarletspiderleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanleggings, 0, 'b', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.scarletspiderboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanboots, 0, 'b', ItemID.redwool, 0]);



Recipes.addShaped({id: ItemID.smNoirhelmet, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.spidermanhelmet, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.smNoirchestplate, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanchestplate, 0, 'b', ItemID.blackleather, 0]);
Recipes.addShaped({id: ItemID.smNoirleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanleggings, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.smNoirboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanboots, 0, 'b', ItemID.blackleather, 0]);



Recipes.addShaped({id: ItemID.smNegativehelmet, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.spidermanhelmet, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.smNegativechestplate, count: 1, data: 0}, [ " b ", "cac", " b "], ['a', ItemID.spidermanchestplate, 0, 'b', ItemID.blackwool, 0, 'c', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.smNegativeleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanleggings, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.smNegativeboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanboots, 0, 'b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.sm2099helmet, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.scarletspiderhelmet, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.sm2099chestplate, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.scarletspiderchestplate, 0, 'b', ItemID.darkbluewool, 0, 'c', ItemID.redleather, 0]);
Recipes.addShaped({id: ItemID.sm2099leggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.scarletspiderleggings, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.sm2099boots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.scarletspiderboots, 0, 'b', ItemID.darkbluewool, 0]);



Recipes.addShaped({id: ItemID.smSecretWarhelmet, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.scarletspiderhelmet, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.smSecretWarchestplate, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.scarletspiderchestplate, 0, 'b', ItemID.darkbluewool, 0, 'c', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.smSecretWarleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.scarletspiderleggings, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.smSecretWarboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.scarletspiderboots, 0, 'b', ItemID.blackwool, 0]);




Recipes.addShaped({id: ItemID.smArmoredhelmet, count: 1, data: 0}, [ "bbb", "bab", "   "], ['a', ItemID.smSecretWarhelmet, 0, 'b', 265, 0]);
Recipes.addShaped({id: ItemID.smArmoredchestplate, count: 1, data: 0}, [ "b b", "bab", "bbb"], ['a', ItemID.smSecretWarchestplate, 0, 'b', ItemID.darkbluewool, 0, 'c', 265, 0]);
Recipes.addShaped({id: ItemID.smArmoredleggings, count: 1, data: 0}, [ "bbb", "bab", "b b"], ['a', ItemID.smSecretWarleggings, 0, 'b', 265, 0]);
Recipes.addShaped({id: ItemID.smArmoredboots, count: 1, data: 0}, [ "   ", "bab", "b b"], ['a', ItemID.smSecretWarboots, 0, 'b', 265, 0]);



Recipes.addShaped({id: ItemID.sm2099lighthelmet, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.sm2099helmet, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.sm2099lightchestplate, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sm2099chestplate, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.sm2099lightleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.sm2099leggings, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.sm2099lightboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.sm2099boots, 0, 'b', ItemID.whitewool, 0]);



Recipes.addShaped({id: ItemID.smMK2helmet, count: 1, data: 0}, [ "bcb", "bab", "   "], ['a', ItemID.smSecretWarhelmet, 0, 'b', 266, 0, 'c', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.smMK2chestplate, count: 1, data: 0}, [ "bcb", "cac", "bcb"], ['a', ItemID.smSecretWarchestplate, 0, 'b', ItemID.darkbluewool, 0, 'b', 266, 0, 'c', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.smMK2leggings, count: 1, data: 0}, [ "cbc", "cac", "b b"], ['a', ItemID.smSecretWarleggings, 0, 'b', 266, 0, 'c', ItemID.blackingot, 0]);
Recipes.addShaped({id: ItemID.smMK2boots, count: 1, data: 0}, [ "   ", "cac", "b b"], ['a', ItemID.smSecretWarboots, 0, 'b', 266, 0, 'c', ItemID.blackingot, 0]);



Recipes.addShaped({id: ItemID.smIsolatedhelmet, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.smSecretWarhelmet, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.smIsolatedchestplate, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.smSecretWarchestplate, 0, 'b', ItemID.darkredwool, 0]);
Recipes.addShaped({id: ItemID.smIsolatedleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.smSecretWarleggings, 0, 'b', ItemID.darkredwool, 0]);
Recipes.addShaped({id: ItemID.smIsolatedboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.smSecretWarboots, 0, 'b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.spiderGwenhelmet, count: 1, data: 0}, [ "www", "rwr", "www"], ['w', ItemID.whitewool, 0, 'r', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.spiderGwenchestplate, count: 1, data: 0}, [ "rwr", "rbr", "bbb"], ['w', ItemID.whitewool, 0, 'r', ItemID.redwool, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.spiderGwenleggings, count: 1, data: 0}, [ "bbb", "b b", "b b"], ['b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.spiderGwenboots, count: 1, data: 0}, [ "   ", "b b", "s s"], ['b', ItemID.blackwool, 0, 's', ItemID.bluewool, 0]);



Recipes.addShaped({id: ItemID.smUniversehelmet, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.sm2099lighthelmet, 0, 'b', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.smUniversechestplate, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.sm2099lightchestplate, 0, 'b', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.smUniverseleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.sm2099lightleggings, 0, 'b', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.smUniverseboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.sm2099lightboots, 0, 'b', ItemID.krypton, 0]);



Recipes.addShaped({id: ItemID.sPunkhelmet, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', ItemID.spidermanhelmet, 0, 'b', 265, 0]);
Recipes.addShaped({id: ItemID.sPunkchestplate, count: 1, data: 0}, [ "   ", "bab", "b b"], ['a', ItemID.spidermanchestplate, 0, 'b', ItemID.blackwool, 0]);
Recipes.addShaped({id: ItemID.sPunkleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanleggings, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.sPunkboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanboots, 0, 'b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.sFighterhelmet, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', ItemID.spidermanhelmet, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.sFighterchestplate, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.spidermanchestplate, 0, 'b', ItemID.darkredwool, 0]);
Recipes.addShaped({id: ItemID.sFighterleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanleggings, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.sFighterboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanboots, 0, 'b', ItemID.blackwool, 0]);



Recipes.addShaped({id: ItemID.sBigTimehelmet, count: 1, data: 0}, [ "bbb", "cac", "dbd"], ['a', ItemID.smNegativehelmet, 0, 'b', ItemID.blackwool, 0, 'c', 348, 0, 'd', ItemID.greeningot, 0]);
Recipes.addShaped({id: ItemID.sBigTimechestplate, count: 1, data: 0}, [ "bdb", "cac", "bbb"], ['a', ItemID.smNegativechestplate, 0, 'b', ItemID.blackwool, 0, 'c', 348, 0, 'd', ItemID.greeningot, 0]);
Recipes.addShaped({id: ItemID.sBigTimeleggings, count: 1, data: 0}, [ "cbc", "bab", "b b"], ['a', ItemID.smNegativeleggings, 0, 'b', ItemID.blackwool, 0, 'c', 348, 0, 'd', ItemID.greeningot, 0]);
Recipes.addShaped({id: ItemID.sBigTimeboots, count: 1, data: 0}, [ "b b", "cac", "d d"], ['a', ItemID.smNegativeboots, 0, 'b', ItemID.blackwool, 0, 'c', 348, 0, 'd', ItemID.greeningot, 0]);



Recipes.addShaped({id: ItemID.sFearItselfhelmet, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.sBigTimehelmet, 0, 'b', ItemID.blackwool, 0, 'c', 410, 0]);
Recipes.addShaped({id: ItemID.sFearItselfchestplate, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.sBigTimechestplate, 0, 'b', ItemID.blackwool, 0, 'c', 410, 0]);
Recipes.addShaped({id: ItemID.sFearItselfleggings, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.sBigTimeleggings, 0, 'b', ItemID.blackwool, 0, 'c', 410, 0]);
Recipes.addShaped({id: ItemID.sFearItselfboots, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.sBigTimeboots, 0, 'b', ItemID.blackwool, 0, 'c', 410, 0]);



Recipes.addShaped({id: ItemID.sMarkIIIhelmet, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.sBigTimehelmet, 0, 'b', ItemID.blackwool, 0, 'c', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.sMarkIIIchestplate, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.sBigTimechestplate, 0, 'b', ItemID.blackwool, 0, 'c', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.sMarkIIIleggings, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.sBigTimeleggings, 0, 'b', ItemID.blackwool, 0, 'c', ItemID.redingot, 0]);
Recipes.addShaped({id: ItemID.sMarkIIIboots, count: 1, data: 0}, [ " c ", "bab", " c "], ['a', ItemID.sBigTimeboots, 0, 'b', ItemID.blackwool, 0, 'c', ItemID.redingot, 0]);



Recipes.addShaped({id: ItemID.sVelocityhelmet, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimehelmet, 0, 'b', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.sVelocitychestplate, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimechestplate, 0, 'b', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.sVelocityleggings, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimeleggings, 0, 'b', ItemID.bluewool, 0]);
Recipes.addShaped({id: ItemID.sVelocityboots, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimeboots, 0, 'b', ItemID.redwool, 0]);



Recipes.addShaped({id: ItemID.sMKIVhelmet, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimehelmet, 0, 'b', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.sMKIVchestplate, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimechestplate, 0, 'b', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.sMKIVleggings, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimeleggings, 0, 'b', ItemID.bluewool, 0]);
Recipes.addShaped({id: ItemID.sMKIVboots, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimeboots, 0, 'b', ItemID.redwool, 0]);



Recipes.addShaped({id: ItemID.sSpirithelmet, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimehelmet, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.sSpiritchestplate, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimechestplate, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.sSpiritleggings, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimeleggings, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.sSpiritboots, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimeboots, 0, 'b', ItemID.whitewool, 0]);



Recipes.addShaped({id: ItemID.sAntiOckhelmet, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimehelmet, 0, 'b', ItemID.yellowingot, 0]);
Recipes.addShaped({id: ItemID.sAntiOckchestplate, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimechestplate, 0, 'b', ItemID.yellowingot, 0]);
Recipes.addShaped({id: ItemID.sAntiOckleggings, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimeleggings, 0, 'b', ItemID.yellowingot, 0]);
Recipes.addShaped({id: ItemID.sAntiOckboots, count: 1, data: 0}, [ "   ", "bab", "   "], ['a', ItemID.sBigTimeboots, 0, 'b', ItemID.yellowingot, 0]);



Recipes.addShaped({id: ItemID.sAdvancedhelmet, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', ItemID.spidermanhelmet, 0, 'b', ItemID.redwool, 0]);
Recipes.addShaped({id: ItemID.sAdvancedchestplate, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.spidermanchestplate, 0, 'b', ItemID.whitewool, 0]);
Recipes.addShaped({id: ItemID.sAdvancedleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanleggings, 0, 'b', ItemID.darkbluewool, 0]);
Recipes.addShaped({id: ItemID.sAdvancedboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.spidermanboots, 0, 'b', ItemID.darkbluewool, 0]);


Recipes.addShaped({id: ItemID.sArkhelmet, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', ItemID.sm2099lighthelmet, 0, 'b', ItemID.orangewool, 0]);
Recipes.addShaped({id: ItemID.sArkchestplate, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.sm2099lightchestplate, 0, 'b', ItemID.orangewool, 0]);
Recipes.addShaped({id: ItemID.sArkleggings, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.sm2099lightleggings, 0, 'b', ItemID.orangewool, 0]);
Recipes.addShaped({id: ItemID.sArkboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.sm2099lightboots, 0, 'b', ItemID.orangewool, 0]);



Recipes.addShaped({id: ItemID.cmRedchestplate, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', ItemID.captainmarvelchestplate, 0, 'b', 351, 1]);
Recipes.addShaped({id: ItemID.cmRedleggings, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.captainmarvelleggings, 0, 'b', 351, 1]);
Recipes.addShaped({id: ItemID.cmRedboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.captainmarvelboots, 0, 'b', 351, 1]);



Recipes.addShaped({id: ItemID.cmBlackchestplate, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', ItemID.captainmarvelchestplate, 0, 'b', 351, 0]);
Recipes.addShaped({id: ItemID.cmBlackleggings, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.captainmarvelleggings, 0, 'b', 351, 0]);
Recipes.addShaped({id: ItemID.cmBlackboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.captainmarvelboots, 0, 'b', 351, 0]);



Recipes.addShaped({id: ItemID.cmNeonchestplate, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', ItemID.captainmarvelchestplate, 0, 'b', 348, 0]);
Recipes.addShaped({id: ItemID.cmNeonleggings, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.captainmarvelleggings, 0, 'b', 348, 0]);
Recipes.addShaped({id: ItemID.cmNeonboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.captainmarvelboots, 0, 'b', 348, 0]);



Recipes.addShaped({id: ItemID.cmArkchestplate, count: 1, data: 0}, [ " b ", " a ", "   "], ['a', ItemID.captainmarvelchestplate, 0, 'b', ItemID.arkeniumingotsh, 0]);
Recipes.addShaped({id: ItemID.cmArkleggings, count: 1, data: 0}, [ "   ", "ab ", "   "], ['a', ItemID.captainmarvelleggings, 0, 'b', ItemID.arkeniumingotsh, 0]);
Recipes.addShaped({id: ItemID.cmArkboots, count: 1, data: 0}, [ "   ", " ab", "   "], ['a', ItemID.captainmarvelboots, 0, 'b', ItemID.arkeniumingotsh, 0]);



Recipes.addShaped({id: ItemID.GeeseHelmet, count: 1, data: 0}, [ "aaa", "a a", "   "], ['a', ItemID.orangewool, 0]);
Recipes.addShaped({id: ItemID.GeeseChestplate, count: 1, data: 0}, [ "a a", "aba", "aaa"], ['a', ItemID.orangewool, 0, 'b', ItemID.krypton, 0]);
Recipes.addShaped({id: ItemID.GeeseLeggings, count: 1, data: 0}, [ "aaa", "a a", "a a"], ['a', ItemID.orangewool, 0]);
Recipes.addShaped({id: ItemID.GeeseBoots, count: 1, data: 0}, [ "   ", "a a", "a a"], ['a', ItemID.orangewool, 0]);



Recipes.addShaped({id: ItemID.sMMhelmet, count: 1, data: 0}, [ "   ", "ba ", "   "], ['a', ItemID.smNegativehelmet, 0, 'b', 351, 0]);
Recipes.addShaped({id: ItemID.sMMchestplate, count: 1, data: 0}, [ "   ", "ba ", "   "], ['a', ItemID.smNegativechestplate, 0, 'b', 351, 0]);
Recipes.addShaped({id: ItemID.sMMleggings, count: 1, data: 0}, [ "   ", "ba ", "   "], ['a', ItemID.smNegativeleggings, 0, 'b', 351, 0]);
Recipes.addShaped({id: ItemID.sMMboots, count: 1, data: 0}, [ "   ", " ba", "   "], ['a', ItemID.smNegativeboots, 0, 'b', 351, 0]);


















































