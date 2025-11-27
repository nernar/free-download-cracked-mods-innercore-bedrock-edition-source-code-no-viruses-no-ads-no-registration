alert("start");
var AchievementAPI;

//first page

ModAPI.addAPICallback("AchievementsAPI", function (api) {
AchievementAPI = api.AchievementAPI;
    api.AchievementAPI.registerGroup({
        unique: "FirstSteps",
        name: "First Steps",
        width: 600,
        height: 500,
        size: 100,
        bgTexture: "background_1",
        icon: {
            id: 58
        }
    });
    
AchievementAPI = api.AchievementAPI;
    api.AchievementAPI.registerGroup({
        unique: "Tech",
        name: "Focus Inc. Tech",
        width: 600,
        height: 500,
        size: 100,
        bgTexture: "background_2",
        icon: {
            id:ItemID.SPA
        }
    });
}); 


ModAPI.addAPICallback("AchievementsAPI", function (api) {
    api.AchievementAPI.register("FirstSteps", {
        unique: "first",
        name: {
            text: "I am Enginner!",
            translate: "achievements.FirstSteps.first.title"
        },
        description: {
            text: "create a workbench",
            translate: "achievements.FirstSteps.first.description"
        },
        column: 1,
        row: 1,
        item: {
            id: 58
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "leather",
        name: {
            text: "Hmm, what I can do with it?",
            translate: "achievements.FirstSteps.leather.title"
        },
        description: {
            text: "Get leather",
            translate: "achievements.FirstSteps.leather.description"
        },
        column: 2,
        row: 1,
        item: {
            id: 334
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "leather",
        name: {
            text: "Hmm, what I can do with it?",
            translate: "achievements.FirstSteps.leather.title"
        },
        description: {
            text: "Get leather",
            translate: "achievements.FirstSteps.leather.description"
        },
    parent: {
    unique: "first"
    },
        column: 1,
        row: 1,
        item: {
            id: 334
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "backpack",
        name: {
            text: "Like a camel)",
            translate: "achievements.FirstSteps.backpack.title"
        },
        description: {
            text: "Create a basic backpack",
            translate: "achievements.FirstSteps.backpack.description"
        },
    parent: {
    unique: "leather"
    },
        column: 1,
        row: 2,
        item: {
            id: ItemID.backpackBasic
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "backpackIron",
        name: {
            text: "I can do it bigger",
            translate: "achievements.FirstSteps.backpackIron.title"
        },
        description: {
            text: "Create a iron backpack",
            translate: "achievements.FirstSteps.backpackIron.description"
        },
    parent: {
    unique: "backpack"
    },
        column: 1,
        row: 3,
        item: {
            id: ItemID.backpackIron
        }
    });


    api.AchievementAPI.register("FirstSteps", {
        unique: "backpackGold",
        name: {
            text: "Bigger",
            translate: "achievements.FirstSteps.backpackGold.title"
        },
        description: {
            text: "Create a gold backpack",
            translate: "achievements.FirstSteps.backpackGold.description"
        },
    parent: {
    unique: "backpackIron"
    },
        column: 1,
        row: 4,
        item: {
            id: ItemID.backpackGold
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "backpackDiamond",
        name: {
            text: "BIGGER!!!",
            translate: "achievements.FirstSteps.backpackDiamond.title"
        },
        description: {
            text: "Create a diamond backpack",
            translate: "achievements.FirstSteps.backpackDiamond.description"
        },
    parent: {
    unique: "backpackGold"
    },
        column: 1,
        row: 5,
        item: {
            id: ItemID.backpackDiamond
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "gear",
        name: {
            text: "Little gear in big machine",
            translate: "achievements.FirstSteps.gear.title"
        },
        description: {
            text: "Create basic gear",
            translate: "achievements.FirstSteps.gear.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 1,
        item: {
            id:ItemID.basicGear
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "gearIron",
        name: {
            text: "Best gear! No?",
            translate: "achievements.FirstSteps.gearIron.title"
        },
        description: {
            text: "Create iron gear",
            translate: "achievements.FirstSteps.gearIron.description"
        },
    parent: {
    unique: "gear"
    },
        column: 3,
        row: 2,
        item: {
            id:ItemID.gearIron
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "gearGold",
        name: {
            text: "ARE YOU SERIOUS !?",
            translate: "achievements.FirstSteps.gearGold.title"
        },
        description: {
            text: "Create gold gear",
            translate: "achievements.FirstSteps.gearGold.description"
        },
    parent: {
    unique: "gearIron"
    },
        column: 3,
        row: 3,
        item: {
            id:ItemID.gearGold
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "gearTin",
        name: {
            text: "It doesn't work so...",
            translate: "achievements.FirstSteps.gearTin.title"
        },
        description: {
            text: "Create tin gear",
            translate: "achievements.FirstSteps.gearTin.description"
        },
    parent: {
    unique: "gearGold"
    },
        column: 2,
        row: 4,
        item: {
            id:ItemID.gearTin
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "gearCopper",
        name: {
            text: "Copper gear? ok",
            translate: "achievements.FirstSteps.gearCopper.title"
        },
        description: {
            text: "Create tin gear",
            translate: "achievements.FirstSteps.gearCopper.description"
        },
    parent: {
    unique: "gearGold"
    },
        column: 4,
        row: 4,
        item: {
            id:ItemID.gearCopper
        }
    });

    api.AchievementAPI.register("FirstSteps", {
        unique: "gearBronze",
        name: {
            text: "Why bronze is best?",
            translate: "achievements.FirstSteps.gearBronze.title"
        },
        description: {
            text: "Create gold gear",
            translate: "achievements.FirstSteps.gearBronze.description"
        },
    parent: {
    unique: "gearGold"
    },
        column: 3,
        row: 5,
        item: {
            id:ItemID.gearBronze
        }
    });

//Tech tree

    api.AchievementAPI.register("Tech", {
        unique: "first",
        name: {
            text: "Beginning of all beginnings",
            translate: "achievements.Tech.first.title"
        },
        description: {
            text: "Create basic machine block",
            translate: "achievements.Tech.first.description"
        },
        column: 3,
        row: 1,
        item: {
            id:BlockID.machineBlockBasic
        }
    });

    //sagmill branch

    api.AchievementAPI.register("Tech", {
        unique: "SagT1",
        name: {
            text: "Double dust - double mud",
            translate: "achievements.Tech.SagT1.title"
        },
        description: {
            text: "Make and place macerator",
            translate: "achievements.Tech.SagT1.description"
        },
    parent: {
    unique: "first"
    },
        column: 2,
        row: 2,
        item: {
            id:BlockID.macerator
        }
    });

    api.AchievementAPI.register("Tech", {
        unique: "SagT2",
        name: {
            text: "Thermal dust",
            translate: "achievements.Tech.SagT1.title"
        },
        description: {
            text: "Make and place pulverizer",
            translate: "achievements.Tech.SagT1.description"
        },
    parent: {
    unique: "SagT1"
    },
        column: 2,
        row: 3,
        item: {
            id:BlockID.pulverizer
        }
    });

    api.AchievementAPI.register("Tech", {
        unique: "SagT3",
        name: {
            text: "Elite Crusher",
            translate: "achievements.Tech.SagT3.title"
        },
        description: {
            text: "Make and place sagmill",
            translate: "achievements.Tech.SagT3.description"
        },
    parent: {
    unique: "SagT2"
    },
        column: 2,
        row: 4,
        item: {
            id:BlockID.sagmill
        }
    });

    //alloy smelter branch
    
    api.AchievementAPI.register("Tech", {
        unique: "FurnaceTier1",
        name: {
            text: "BZZ-BZZ and Ingot ready",
            translate: "achievements.Tech.metalFurnace.title"
        },
        description: {
            text: "Make and place electric furnace",
            translate: "achievements.Tech.metalFurnace.description"
        },
    parent: {
    unique: "first"
    },
        column: 4,
        row: 2,
        item: {
            id:BlockID.electricFurnace
        }
    });
    
    api.AchievementAPI.register("Tech", {
        unique: "FurnaceTier2",
        name: {
            text: "Faster and Cool",
            translate: "achievements.Tech.metalFurnace2.title"
        },
        description: {
            text: "Make and place redsone furnace",
            translate: "achievements.Tech.metalFurnace2.description"
        },
    parent: {
    unique: "FurnaceTier1"
    },
        column: 4,
        row: 3,
        item: {
            id:BlockID.redFurnace
        }
    });
    
    api.AchievementAPI.register("Tech", {
        unique: "FurnaceTier3",
        name: {
            text: "Elite Furnace",
            translate: "achievements.Tech.metalFurnace3.title"
        },
        description: {
            text: "Make and place alloy smelter",
            translate: "achievements.Tech.metalFurnace3.description"
        },
    parent: {
    unique: "FurnaceTier2"
    },
        column: 4,
        row: 4,
        item: {
            id:BlockID.alloySmelter
        }
    });

    //end
    api.AchievementAPI.register("Tech", {
        unique: "end",
        name: {
            text: "To be continued",
            translate: "achievements.Tech.end.title"
        },
        description: {
            text: "Will be updated soon",
            translate: "achievements.Tech.end.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 5,
        item: {
            id:355
        }
    });

//Solar line

    api.AchievementAPI.register("Tech", {
        unique: "solar",
        name: {
            text: "Greenpeace",
            translate: "achievements.Tech.solar.title"
        },
        description: {
            text: "Create lead solar panel",
            translate: "achievements.Tech.solar.description"
        },
    parent: {
    unique: "first"
    },
        column: 1,
        row: 1,
        item: {
            id:ItemID.SPL
        }
    });

    api.AchievementAPI.register("Tech", {
        unique: "solarRedstone",
        name: {
            text: "Lead is not a limit",
            translate: "achievements.Tech.solarRedstone.title"
        },
        description: {
            text: "Create redstone solar panel",
            translate: "achievements.Tech.solarRedstone.description"
        },
    parent: {
    unique: "solar"
    },
        column: 1,
        row: 2,
        item: {
            id:ItemID.SPR
        }
    });

    api.AchievementAPI.register("Tech", {
        unique: "solarResonant",
        name: {
            text: "EnderTech",
            translate: "achievements.Tech.solarResonant.title"
        },
        description: {
            text: "Create resonant solar panel",
            translate: "achievements.Tech.solarResonant.description"
        },
    parent: {
    unique: "solarRedstone"
    },
        column: 1,
        row: 3,
        item: {
            id:ItemID.SP
        }
    });

    api.AchievementAPI.register("Tech", {
        unique: "solarAdvanced",
        name: {
            text: "How you did it?",
            translate: "achievements.Tech.solarAdvanced.title"
        },
        description: {
            text: "Create advanced solar panel",
            translate: "achievements.Tech.solarAdvanced.description"
        },
    parent: {
    unique: "solarResonant"
    },
        column: 1,
        row: 4,
        item: {
            id:ItemID.SPA
        }
    });

    api.AchievementAPI.register("Tech", {
        unique: "solarUltimate",
        name: {
            text: "It is just IMPOSIBLE POWER OF SUN",
            translate: "achievements.Tech.solarUltimate.title"
        },
        description: {
            text: "Create ultimate solar panel",
            translate: "achievements.Tech.solarUltimate.description"
        },
    parent: {
    unique: "solarAdvanced"
    },
        column: 1,
        row: 5,
        item: {
            id:ItemID.SPU
        }
    });

//alloys (here will be a second solar line)

    api.AchievementAPI.register("Tech", {
        unique: "tier1",
        name: {
            text: "Conductor!",
            translate: "achievements.Tech.tier1.title"
        },
        description: {
            text: "Create conductive iron",
            translate: "achievements.Tech.tier1.description"
        },
    parent: {
    unique: "first"
    },
        column: 5,
        row: 1,
        item: {
            id:ItemID.conductiveIron
        }
    });

    api.AchievementAPI.register("Tech", {
        unique: "tier2",
        name: {
            text: "Like a steel, but electrical",
            translate: "achievements.Tech.tier2.title"
        },
        description: {
            text: "Create electrical steel",
            translate: "achievements.Tech.tier2.description"
        },
    parent: {
    unique: "tier1"
    },
        column: 5,
        row: 2,
        item: {
            id:ItemID.electricalSteel
        }
    });

    api.AchievementAPI.register("Tech", {
        unique: "tier3",
        name: {
            text: "My favorit alloy",
            translate: "achievements.Tech.tier3.title"
        },
        description: {
            text: "Create resonant solar panel",
            translate: "achievements.Tech.tier3.description"
        },
    parent: {
    unique: "tier2"
    },
        column: 5,
        row: 3,
        item: {
            id:ItemID.energeticAlloy
        }
    });

    api.AchievementAPI.register("Tech", {
        unique: "tier4",
        name: {
            text: "The most Ender alloy",
            translate: "achievements.Tech.tier4.title"
        },
        description: {
            text: "Create vibrant alloy",
            translate: "achievements.Tech.tier4.description"
        },
    parent: {
    unique: "tier3"
    },
        column: 5,
        row: 4,
        item: {
            id:ItemID.vibrantAlloy
        }
    });
    api.AchievementAPI.register("Tech", {
        unique: "tier5",
        name: {
            text: "Bright like a Soul",
            translate: "achievements.Tech.tier5.title"
        },
        description: {
            text: "Create soularium ingot",
            translate: "achievements.Tech.tier5.description"
        },
    parent: {
    unique: "tier4"
    },
        column: 5,
        row: 5,
        item: {
            id:ItemID.soulariumIngot
        }
    });  
});

//callbacks

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==58){
        AchievementAPI.give("FirstSteps", "first");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==334){
        AchievementAPI.give("FirstSteps", "leather");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.backpackBasic){
        AchievementAPI.give("FirstSteps", "backpack");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.backpackIron){
        AchievementAPI.give("FirstSteps", "backpackIron");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.backpackGold){
        AchievementAPI.give("FirstSteps", "backpackGold");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.backpackDiamond){
        AchievementAPI.give("FirstSteps", "backpackDimaond");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.basicGear){
        AchievementAPI.give("FirstSteps", "gear");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearIron){
        AchievementAPI.give("FirstSteps", "gearIron");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearGold){
        AchievementAPI.give("FirstSteps", "gearGold");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearTin){
        AchievementAPI.give("FirstSteps", "gearTin");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearCopper){
        AchievementAPI.give("FirstSteps", "gearCopper");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearBronze){
        AchievementAPI.give("FirstSteps", "gearBronze");
    }
});



Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.machineBlockBasic){
        AchievementAPI.give("Tech", "first");
    }
});

//sagmill

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.macerator){
        AchievementAPI.give("Tech", "SagT1");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.pulverizer){
        AchievementAPI.give("Tech", "SagT2");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.sagmill){
        AchievementAPI.give("Tech", "SagT3");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.electricFurnace){
        AchievementAPI.give("Tech", "FurnaceTier1");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.redFurnace){
        AchievementAPI.give("Tech", "FurnaceTier2");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.alloySmelter){
        AchievementAPI.give("Tech", "FurnaceTier3");
    }
});

//solar

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPL){
        AchievementAPI.give("Tech", "solar");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPR){
        AchievementAPI.give("Tech", "solarRedstone");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SP){
        AchievementAPI.give("Tech", "solarResonant");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPA){
        AchievementAPI.give("Tech", "solarAdvanced");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.SPU){
        AchievementAPI.give("Tech", "solarUltimate");
    }
});

//alloys

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.conductiveIron){
        AchievementAPI.give("Tech", "tier1");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.electricalSteel){
        AchievementAPI.give("Tech", "tier2");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.energeticAlloy){
        AchievementAPI.give("Tech", "tier3");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.vibrantAlloy){
        AchievementAPI.give("Tech", "tier4");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.soulariumIngot){
        AchievementAPI.give("Tech", "tier5");
    }
});