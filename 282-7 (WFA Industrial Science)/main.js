/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: 6/lol.js

IMPORT("#modpacker");
ModPack.install({ 
    name: "WFA Industrial Science", 
    mods: [1, 6, 22, 271, 266, 52, 67, 39, 51,44, 143, 183, 205, 171, 184, 212, 204, 227, 244, 210, 251, 92, 144, 202, 199], 
});




// file: 6/achivka.js

alert("The Assembly is successfully installed");

//Першая старонка тэксту
ModAPI.addAPICallback("AchievementsAPI", function (api) {
 api.AchievementAPI.registerGroup({
 unique: "first",
 name: "First century",
 width: 600,
 height: 250,
 size: 100,
 bgTexture: "bg_0",
 icon: {
 id: 5
 }
 });
 });                                

                                  //Другая старонка тэксту
                                  ModAPI.addAPICallback("AchievementsAPI", function (api) {
                                  api.AchievementAPI.registerGroup({
                                  unique: "ironAge",
                                  name: "Iron age!",
                                  width: 600,
                                  height: 250,
                                  size: 100,
                                  bgTexture: "bg_1",
                                  icon: {
                                  id: 5
                                     }
                                     });
                                     });






                                  //Трэцця старонку тэкста
                                  ModAPI.addAPICallback("AchievementsAPI", function (api) {
                                  api.AchievementAPI.registerGroup({
                                  unique: "nanoAge",
                                  name: "Nano age!",
                                  width: 600,
                                  height: 250,
                                  size: 100,
                                  bgTexture: "bg_1",
                                  icon: {
                                  id: 5
                                     }
                                     });
                                     });







                                            //Чацьвертая старонку тэкста
                                  ModAPI.addAPICallback("AchievementsAPI", function (api) {
                                  api.AchievementAPI.registerGroup({
                                  unique: "inF",
                                  name: "Forestry House",
                                  width: 600,
                                  height: 250,
                                  size: 100,
                                  bgTexture: "bg_2",
                                  icon: {
                                  id: 5
                                     }
                                     });
                                     });











api.AchievementAPI.register("first", {
        unique: "back",
        name: {
            text: "Backpack Basic",
        },
        description: {
            text: "Use a simple backpack!",
        },
        column: 1,
        row: 2,
        item: {
            id: ItemID.backpackBasic
        }
    });



api.AchievementAPI.register("first", {
        unique: "back1",
        name: {
            text: "Backpack Iron",
        },
        description: {
            text: "Use a iron backpack!",
        },
        parent: {
            unique: "back"
        },
        column: 1,
        row: 3,
        item: {
            id: ItemID.backpackIron
        }
    });





api.AchievementAPI.register("first", {
        unique: "back2",
        name: {
            text: "Backpack Gold",
        },
        description: {
            text: "Use a gold backpack!",
        },
        parent: {
            unique: "back1"
        },
        column: 1,
        row: 4,
        item: {
            id: ItemID.backpackGold
        }
    });



api.AchievementAPI.register("first", {
        unique: "back3",
        name: {
            text: "Backpack Diamond",
        },
        description: {
            text: "Use a diamond backpack!",
        },
        parent: {
            unique: "back2"
        },
        column: 1,
        row: 5,
        item: {
            id: ItemID.backpackDiamond
        }
    });



api.AchievementAPI.register("first", {
        unique: "ir",
        name: {
            text: "Furnace Iron",
        },
        description: {
            text: "Give Iron Furnace!",
        },
        column: 2,
        row: 1,
        item: {
            id: ItemID.ironFurnace
        }
    });



api.AchievementAPI.register("first", {
        unique: "ir2",
        name: {
            text: "Furnace Gold",
        },
        description: {
            text: "Give Gold Furnace!",
        },
        column: 2,
        row: 2,
        item: {
            id: ItemID.goldFurnace
        }
    });



api.AchievementAPI.register("first", {
        unique: "ir3",
        name: {
            text: "Furnace Diamond",
        },
        description: {
            text: "Give Diamond Furnace!",
        },
        column: 2,
        row: 3,
        item: {
            id: ItemID.diamondFurnace
        }
    });



api.AchievementAPI.register("first", {
        unique: "ir4",
        name: {
            text: "Furnace Obsidian",
        },
        description: {
            text: "Give Obsidian Furnace!",
        },
        column: 2,
        row: 4,
        item: {
            id: ItemID.obsidianFurnace
        }
    });



api.AchievementAPI.register("first", {
        unique: "ir5",
        name: {
            text: "Nether Furnace",
        },
        description: {
            text: "Give Nether Furnace!",
        },
        column: 2,
        row: 5,
        item: {
            id: ItemID.netherrackFurnace
        }
    });




api.AchievementAPI.register("first", {
        unique: "wh",
        name: {
            text: "Ore?",
        },
        description: {
            text: "Find new ore",
        },
        column: 3,
        row: 1,
        item: {
            id: ItemID.oreUranium
        }
    });








api.AchievementAPI.register("ironAge", {
        unique: "wah",
        name: {
            text: "The beginning of a beginning",
        },
        description: {
            text: "Make the iron oven",
        },
        column: 1,
        row: 1,
        item: {
            id: ItemID.ironFurnace
        }
    });



api.AchievementAPI.register("ironAge", {
        unique: "wah1",
        name: {
            text: "Energy in business",
        },
        description: {
            text: "Make a coal generator",
        },
        column: 1,
        row: 2,
        item: {
            id: ItemID.primalGenerator
        }
    });



api.AchievementAPI.register("ironAge", {
        unique: "wah2",
        name: {
            text: "Black gum",
        },
        description: {
            text: "Make a extractor",
        },
        column: 1,
        row: 3,
        item: {
            id: ItemID.extractor
        }
    });



api.AchievementAPI.register("ironAge", {
        unique: "wah3",
        name: {
            text: "Sunstroke",
        },
        description: {
            text: "Make a SPL",
        },
        column: 2,
        row: 1,
        item: {
            id: ItemID.SPL
        }
    });



api.AchievementAPI.register("ironAge", {
        unique: "wah4",
        name: {
            text: "Sunstroke 2.0!",
        },
        description: {
            text: "Make a SPR",
        },
        column: 2,
        row: 2,
        item: {
            id: ItemID.SPR
        }
    });


api.AchievementAPI.register("ironAge", {
        unique: "wah5",
        name: {
            text: "Solar Panel Update",
        },
        description: {
            text: "Make a SP",
        },
        column: 2,
        row: 3,
        item: {
            id: ItemID.SP
        }
    });



api.AchievementAPI.register("ironAge", {
        unique: "wah6",
        name: {
            text: "High technology",
        },
        description: {
            text: "Make a SPA",
        },
        column: 2,
        row: 4,
        item: {
            id: ItemID.SPA
        }
    });




api.AchievementAPI.register("ironAge", {
        unique: "wah7",
        name: {
            text: "WTF!!?",
        },
        description: {
            text: "Make a SPU",
        },
        column: 2,
        row: 5,
        item: {
            id: ItemID.SPU
        }
    });



api.AchievementAPI.register("ironAge", {
        unique: "wah8",
        name: {
            text: "Solar Panel in IC2!",
        },
        description: {
            text: "Make a SolarPanel",
        },
        column: 2,
        row: 6,
        item: {
            id: ItemID.solarPanel
        }
    });







api.AchievementAPI.register("ironAge", {
        unique: "sss",
        name: {
            text: "Water technologies",
        },
        description: {
            text: "Make a WaterMill",
        },
        column: 3,
        row: 1,
        item: {
            id: ItemID.genWatermill
        }
    });



api.AchievementAPI.register("ironAge", {
        unique: "sss1",
        name: {
            text: "Wind technologies",
        },
        description: {
            text: "Make a WindMill",
        },
        column: 3,
        row: 2,
        item: {
            id: ItemID.genWindmill
        }
    });



api.AchievementAPI.register("ironAge", {
        unique: "sss2",
        name: {
            text: "What does noob always have in his pocket?",
        },
        description: {
            text: "Make a Geothermal Generator",
        },
        column: 3,
        row: 3,
        item: {
            id: ItemID.geothermalGenerator
        }
    });





api.AchievementAPI.register("nanoAge", {
        unique: "koko",
        name: {
            text: "Ilon Mask",
        },
        description: {
            text: "Make a Nano pack!",
        },
        column: 1,
        row: 1,
        item: {
            id: ItemID.nanoHelmet
        }
    });




api.AchievementAPI.register("nanoAge", {
        unique: "koko2",
        name: {
            text: "Quarry Update",
        },
        description: {
            text: "Make a Quarry",
        },
        column: 1,
        row: 2,
        item: {
            id: ItemID.miner
        }
    });



api.AchievementAPI.register("nanoAge", {
        unique: "koko3",
        name: {
            text: "Ore and ore and ore...",
        },
        description: {
            text: "Find ore with quarry",
        },
        column: 1,
        row: 3,
        item: {
            id: ItemID.oreLead
        }
    });


api.AchievementAPI.register("nanoAge", {
        unique: "koko3",
        name: {
            text: "More ore!",
        },
        description: {
            text: "Find uranium with quarry",
        },
        column: 1,
        row: 4,
        item: {
            id: ItemID.oreUranium
        }
    });



api.AchievementAPI.register("nanoAge", {
        unique: "pack",
        name: {
            text: "Quantum Man",
        },
        description: {
            text: "Make a quantum pack!",
        },
        column: 2,
        row: 1,
        item: {
            id: ItemID.quantumHelmet
        }
    });








api.AchievementAPI.register("inF", {
        unique: "bees",
        name: {
            text: "World of Forestry",
        },
        description: {
            text: "Find the bees house",
        },
        column: 1,
        row: 1,
        item: {
            id: ItemID.beehive
        }
    });




api.AchievementAPI.register("inF", {
        unique: "bees2",
        name: {
            text: "House bee",
        },
        description: {
            text: "Craft the bee house",
        },
        column: 1,
        row: 2,
        item: {
            id: ItemID.apiary
        }
    });






//У гэтых строках усе гауно if(item.id==ItemID.ir4)
//Gives ach
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.back){
        AchievementAPI.give("first", "back");
    }
});



Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.back1){
        AchievementAPI.give("first", "back1");
    }
});




Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.back2){
        AchievementAPI.give("first", "back2");
    }
});




Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.back3){
        AchievementAPI.give("first", "back3");
    }
});




Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.ir){
        AchievementAPI.give("first", "ir");
    }
});





Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.ir2){
        AchievementAPI.give("first", "ir2");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.ir3){
        AchievementAPI.give("first", "ir3");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.ir4){
        AchievementAPI.give("first", "ir4");
    }
});







Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.ir5){
        AchievementAPI.give("first", "ir5");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.wh){
        AchievementAPI.give("first", "wh");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "wah");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "wah1");
    }
});





Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "wah2");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "wah3");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "wah4");
    }
});





Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "wah5");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "wah6");
    }
});







Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "wah7");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "wah8");
    }
});






Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "sss");
    }
});





Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "sss1");
    }
});




Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("ironAge", "sss2");
    }
});




