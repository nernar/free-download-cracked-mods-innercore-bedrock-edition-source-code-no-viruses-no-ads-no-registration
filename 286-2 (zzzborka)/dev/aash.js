alert("start");
var AchievementAPI;
ModAPI.addAPICallback("AchievementsAPI", function (api) {
AchievementAPI = api.AchievementAPI;
    api.AchievementAPI.registerGroup({
        unique: "NewGame",
        name: "Looks like a new game...",
        width: 600,
        height: 500,
        size: 100,
        bgTexture: "alveary_plain_0",
        icon: {
            id: 334
        }
    });
    
    api.AchievementAPI.registerGroup({
        unique: "Industrialization",
        name: "Make it better!",
        width: 600,
        height: 500,
        size: 100,
        bgTexture: "machine_top_0",
        icon: {
            id: ItemID.craftingHammer
        }
    });
}); 

ModAPI.addAPICallback("AchievementsAPI", function (api) {
    api.AchievementAPI.register("NewGame", {
        unique: "first",
        name: {
            text: "Like monkey!",
            translate: "achievements.NewGame.first.title"
        },
        description: {
            text: "Dig dirt!",
            translate: "achievements.NewGame.first.description"
        },
        column: 1,
        row: 1,
        item: {
            id: 280
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "Backpack",
        name: {
            text: "Second inventory!",
            translate: "achievements.NewGame.Backpack.title"
        },
        description: {
            text: "Use a simple backpack!",
            translate: "achievements.NewGame.Backpack.description"
        },
        parent: {
            unique: "first"
        },
        column: 1,
        row: 2,
        item: {
            id: ItemID.backpackBasic
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "IronBackpack",
        name: {
            text: "Iron skin?",
            translate: "achievements.NewGame.IronBackpack.title"
        },
        description: {
            text: "Use a iron backpack!",
            translate: "achievements.NewGame.IronBackpack.description"
        },
        parent: {
            unique: "Backpack"
        },
        column: 1,
        row: 3,
        item: {
            id: ItemID.backpackIron
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "GoldBackpack",
        name: {
            text: "Better than inventory?",
            translate: "achievements.NewGame.GoldBackpack.title"
        },
        description: {
            text: "Use a gold backpack!",
            translate: "achievements.NewGame.GoldBackpack.description"
        },
        parent: {
            unique: "IronBackpack"
        },
        column: 1,
        row: 4,
        item: {
            id: ItemID.backpackGold
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "DiamondBackpack",
        name: {
            text: "Bigeer than my d#ck?",
            translate: "achievements.NewGame.DiamondBackpack.title"
        },
        description: {
            text: "Use a diamond backpack!",
            translate: "achievements.NewGame.DiamondBackpack.description"
        },
        parent: {
            unique: "GoldBackpack"
        },
        column: 1,
        row: 5,
        item: {
            id: ItemID.backpackDiamond
        }
    });   
    
    api.AchievementAPI.register("NewGame", {
        unique: "second",
        name: {
            text: "Better than monkey!",
            translate: "achievements.NewGame.second.title"
        },
        description: {
            text: "Use a workbench!",
            translate: "achievements.NewGame.second.description"
        },
        parent: {
            unique: "first"
        },
        column: 2,
        row: 1,
        item: {
            id: 58
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "firstPaxel",
        name: {
            text: "Weapon of Gods?",
            translate: "achievements.NewGame.firstPaxel.title"
        },
        description: {
            text: "Use a paxel!",
            translate: "achievements.NewGame.firstPaxel.description"
        },
        parent: {
            unique: "second"
        },
        column: 2,
        row: 2,
        item: {
            id: ItemID.WoodPaxel
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "stonePaxel",
        name: {
            text: "From bullshit and sticks!",
            translate: "achievements.NewGame.stonePaxel.title"
        },
        description: {
            text: "Use a stone paxel!",
            translate: "achievements.NewGame.stonePaxel.description"
        },
        parent: {
            unique: "firstPaxel"
        },
        column: 2,
        row: 3,
        item: {
            id: ItemID.StonePaxel
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "IronPaxel",
        name: {
            text: "Godlike!",
            translate: "achievements.NewGame.IronPaxel.title"
        },
        description: {
            text: "Use a iron paxel!",
            translate: "achievements.NewGame.IronPaxel.description"
        },
        parent: {
            unique: "stonePaxel"
        },
        column: 2,
        row: 4,
        item: {
            id: ItemID.IronPaxel
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "DiamondPaxel",
        name: {
            text: "WEAPON GODS!!!",
            translate: "achievements.NewGame.DiamondPaxel.title"
        },
        description: {
            text: "Use a diamond paxel!",
            translate: "achievements.NewGame.DiamondPaxel.description"
        },
        parent: {
            unique: "IronPaxel"
        },
        column: 2,
        row: 5,
        item: {
            id: ItemID.DiamondPaxel
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "Gear",
        name: {
            text: "Beginning of a bigger",
            translate: "achievements.NewGame.Gear.title"
        },
        description: {
            text: "Make a wooden gear and tap on block",
            translate: "achievements.NewGame.Gear.description"
        },
        parent: {
            unique: "second"
        },
        column: 3,
        row: 1,
        item: {
            id:ItemID.gearWooden
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "GearIron",
        name: {
            text: "Solid!",
            translate: "achievements.NewGame.GearIron.title"
        },
        description: {
            text: "Make a iron gear and tap on block",
            translate: "achievements.NewGame.GearIron.description"
        },
        parent: {
            unique: "Gear"
        },
        column: 4,
        row: 2,
        item: {
            id:ItemID.gearIron
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "GearGold",
        name: {
            text: "Expensively rich!",
            translate: "achievements.NewGame.GearGold.title"
        },
        description: {
            text: "Make a gold gear and tap on block",
            translate: "achievements.NewGame.GearGold.description"
        },
        parent: {
            unique: "Gear"
        },
        column: 4,
        row: 3,
        item: {
            id:ItemID.gearGolden
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "GearTin",
        name: {
            text: "Brilliant!",
            translate: "achievements.NewGame.GearTin.title"
        },
        description: {
            text: "Make a tin gear and tap on block",
            translate: "achievements.NewGame.GearTin.description"
        },
        parent: {
            unique: "Gear"
        },
        column: 3,
        row: 2,
        item: {
            id:ItemID.gearTin
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "GearCopper",
        name: {
            text: "Soft?",
            translate: "achievements.NewGame.GearCopper.title"
        },
        description: {
            text: "Make a copper gear and tap on block",
            translate: "achievements.NewGame.GearCopper.description"
        },
        parent: {
            unique: "Gear"
        },
        column: 3,
        row: 3,
        item: {
            id:ItemID.gearCopper
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "Gearbronze",
        name: {
            text: "Like a steel!",
            translate: "achievements.NewGame.Gearbronze.title"
        },
        description: {
            text: "Make a bronze gear and tap on block",
            translate: "achievements.NewGame.Gearbronze.description"
        },
        parent: {
            unique: "Gear"
        },
        column: 3,
        row: 4,
        item: {
            id:ItemID.gearBronze
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "bronze",
        name: {
            text: "Bronze age?",
            translate: "achievements.NewGame.bronze.title"
        },
        description: {
            text: "Make a bronze ingot and tap on block",
            translate: "achievements.NewGame.bronze.description"
        },
        parent: {
            unique: "Gear"
        },
        column: 4,
        row: 1,
        item: {
            id:ItemID.ingotBronze
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "PrimalCasing",
        name: {
            text: "Just a box?",
            translate: "achievements.NewGame.PrimalCasing.title"
        },
        description: {
            text: "Make a sturdy machine and tap on block",
            translate: "achievements.NewGame.PrimalCasing.description"
        },
        parent: {
            unique: "bronze"
        },
        column: 5,
        row: 1,
        item: {
            id:ItemID.sturdyMachine
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "IronCasing",
        name: {
            text: "Solid box!",
            translate: "achievements.NewGame.IronCasing.title"
        },
        description: {
            text: "Make a iron casing and tap on block",
            translate: "achievements.NewGame.IronCasing.description"
        },
        parent: {
            unique: "GearIron"
        },
        column: 5,
        row: 2,
        item: {
            id:BlockID.blockMachineIron
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "solarPanel",
        name: {
            text: "Simple energy!",
            translate: "achievements.NewGame.solarPanel.title"
        },
        description: {
            text: "Make a solar panel from FactoryCraft and tap on block",
            translate: "achievements.NewGame.solarPanel.description"
        },
        parent: {
            unique: "IronCasing"
        },
        column: 5,
        row: 3,
        item: {
            id:BlockID.machineEnergyGeneratorSolar
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "Centrifuge",
        name: {
            text: "Promotion?",
            translate: "achievements.NewGame.Centrifuge.title"
        },
        description: {
            text: "Make and place a centrifuge",
            translate: "achievements.NewGame.Centrifuge.description"
        },
        parent: {
            unique: "PrimalCasing"
        },
        column: 6,
        row: 3,
        item: {
            id:BlockID.centrifuge
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "honeyDrop",
        name: {
            text: "Lick it!",
            translate: "achievements.NewGame.honeyDrop.title"
        },
        description: {
            text: "Make a honey drop and tap on a block",
            translate: "achievements.NewGame.honeyDrop.description"
        },
        parent: {
            unique: "Centrifuge"
        },
        column: 6,
        row: 4,
        item: {
            id:ItemID.honeyDrop
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "honeyedSlice",
        name: {
            text: "Eat it!",
            translate: "achievements.NewGame.honeyedSlice.title"
        },
        description: {
            text: "Make a honey drop and tap on a block",
            translate: "achievements.NewGame.honeyedSlice.description"
        },
        parent: {
            unique: "honeyDrop"
        },
        column: 7,
        row: 4,
        item: {
            id:ItemID.honeyedSlice
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "Fermenter",
        name: {
            text: "Fermenting",
            translate: "achievements.NewGame.Fermenter.title"
        },
        description: {
            text: "Make and place a fermenter",
            translate: "achievements.NewGame.Fermenter.description"
        },
        parent: {
            unique: "PrimalCasing"
        },
        column: 6,
        row: 1,
        item: {
            id:BlockID.fermenter
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "Carpenter",
        name: {
            text: "Impregnation",
            translate: "achievements.NewGame.Carpenter.title"
        },
        description: {
            text: "Make and place a carpenter",
            translate: "achievements.NewGame.Carpenter.description"
        },
        parent: {
            unique: "PrimalCasing"
        },
        column: 6,
        row: 2,
        item: {
            id:BlockID.carpenter
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "PolishedStick",
        name: {
            text: "smooth...",
            translate: "achievements.NewGame.PolishedStick.title"
        },
        description: {
            text: "Make a impregnated stick and tap on block",
            translate: "achievements.NewGame.PolishedStick.description"
        },
        parent: {
            unique: "Carpenter"
        },
        column: 7,
        row: 2,
        item: {
            id:ItemID.stickImpregnated
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "HiveCasing",
        name: {
            text: "nearly hive",
            translate: "achievements.NewGame.HiveCasing.title"
        },
        description: {
            text: "Make a impregnated casing and tap on block",
            translate: "achievements.NewGame.HiveCasing.description"
        },
        parent: {
            unique: "Carpenter"
        },
        column: 7,
        row: 1,
        item: {
            id:ItemID.impregnatedCasing
        }
    });
    
    api.AchievementAPI.register("NewGame", {
        unique: "scoop",
        name: {
            text: "Gotcha!",
            translate: "achievements.NewGame.scoop.title"
        },
        description: {
            text: "Make a scoop and tap on block",
            translate: "achievements.NewGame.scoop.description"
        },
        parent: {
            unique: "PolishedStick"
        },
        column: 7,
        row: 3,
        item: {
            id:ItemID.scoop
        }
    });
    
    
    
    api.AchievementAPI.register("Industrialization", {
        unique: "first",
        name: {
            text: "Strange hammer...",
            translate: "achievements.Industrialization.first.title"
        },
        description: {
            text: "Make a crafting hammer and tap on block",
            translate: "achievements.Industrialization.first.description"
        }, 
        column: 1,
        row: 1,
        item: {
            id:ItemID.craftingHammer
        }
    });
    
    api.AchievementAPI.register("Industrialization", {
        unique: "second",
        name: {
            text: "Strange scissors...",
            translate: "achievements.Industrialization.second.title"
        },
        description: {
            text: "Make a crafting scissors and tap on block",
            translate: "achievements.Industrialization.second.description"
        }, 
        parent: {
            unique: "first"
        },
        column: 2,
        row: 1,
        item: {
            id:ItemID.craftingCutter
        }
    });
    
    api.AchievementAPI.register("Industrialization", {
        unique: "machineBlockBasic",
        name: {
            text: "Starting basic!",
            translate: "achievements.Industrialization.machineBlockBasic.title"
        },
        description: {
            text: "Make a machine block basic and tap on block",
            translate: "achievements.Industrialization.machineBlockBasic.description"
        }, 
        parent: {
            unique: "second"
        },
        column: 3,
        row: 1,
        item: {
            id:BlockID.machineBlockBasic
        }
    });
    
    api.AchievementAPI.register("Industrialization", {
        unique: "metalFormer",
        name: {
            text: "Listed metal",
            translate: "achievements.Industrialization.metalFormer.title"
        },
        description: {
            text: "Make and place metal former",
            translate: "achievements.Industrialization.metalFormer.description"
        }, 
        parent: {
            unique: "machineBlockBasic"
        },
        column: 4,
        row: 1,
        item: {
            id:BlockID.metalFormer
        }
    });
    
    api.AchievementAPI.register("Industrialization", {
        unique: "macerator",
        name: {
            text: "Crush!",
            translate: "achievements.Industrialization.macerator.title"
        },
        description: {
            text: "Make and place macerator",
            translate: "achievements.Industrialization.macerator.description"
        }, 
        parent: {
            unique: "machineBlockBasic"
        },
        column: 4,
        row: 2,
        item: {
            id:BlockID.macerator
        }
    });//electricFurnace
    
    api.AchievementAPI.register("Industrialization", {
        unique: "electricFurnace",
        name: {
            text: "Fast smelting!",
            translate: "achievements.Industrialization.electricFurnace.title"
        },
        description: {
            text: "Make and place electric furnace",
            translate: "achievements.Industrialization.electricFurnace.description"
        }, 
        parent: {
            unique: "machineBlockBasic"
        },
        column: 4,
        row: 3,
        item: {
            id:BlockID.electricFurnace
        }
    });
    
    api.AchievementAPI.register("Industrialization", {
        unique: "end",
        name: {
            text: "This is the end of the first part. To continue:",
            translate: "achievements.Industrialization.end.title"
        },
        description: {
            text: "https://www.donationalerts.ru/r/nikolay_savenko",
            translate: "achievements.Industrialization.end.description"
        }, 
        parent: {
            unique: "electricFurnace"
        },
        column: 5,
        row: 3,
        item: {
            id:7 
        }
    });
      
}); 

 //second

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==58){
        AchievementAPI.give("NewGame", "second");
    }
});
//first get
Callback.addCallback("DestroyBlock", function(coords, block, player){
    if(block.id==3){
        AchievementAPI.give("NewGame", "first");
    }
});
//gear
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearWooden){
        AchievementAPI.give("NewGame", "Gear");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearTin){
        AchievementAPI.give("NewGame", "GearTin");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearCopper){
        AchievementAPI.give("NewGame", "GearCopper");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearBronze){
        AchievementAPI.give("NewGame", "Gearbronze");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearIron){
        AchievementAPI.give("NewGame", "GearIron");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id==ItemID.gearGolden){
        AchievementAPI.give("NewGame", "GearGold");
    }
});
//paxel
Callback.addCallback("DestroyBlock", function(coords, block, player){
    var item = Player.getCarriedItem();
    if(item.id==ItemID.WoodPaxel){
        AchievementAPI.give("NewGame", "firstPaxel");
    }
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
    var item = Player.getCarriedItem();
    if(item.id==ItemID.StonePaxel){
        AchievementAPI.give("NewGame", "stonePaxel");
    }
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
    var item = Player.getCarriedItem();
    if(item.id==ItemID.IronPaxel){
        AchievementAPI.give("NewGame", "IronPaxel");
    }
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
    var item = Player.getCarriedItem();
    if(item.id==ItemID.DiamondPaxel){
        AchievementAPI.give("NewGame", "DiamondPaxel");
    }
});

//bronze
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.ingotBronze){
        AchievementAPI.give("NewGame", "bronze");
    }
});

//sturdy machine
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.sturdyMachine){
        AchievementAPI.give("NewGame", "PrimalCasing");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.blockMachineIron){
        AchievementAPI.give("NewGame", "IronCasing");
    }
});

//Forestry machines
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.centrifuge){
        AchievementAPI.give("NewGame", "Centrifuge");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.carpenter){
        AchievementAPI.give("NewGame", "Carpenter");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.fermenter){
        AchievementAPI.give("NewGame", "Fermenter");
    }
});

//generators

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.machineEnergyGeneratorSolar){
        AchievementAPI.give("NewGame", "solarPanel");
    }
});

//stick

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.stickImpregnated){
        AchievementAPI.give("NewGame", "PolishedStick");
    }
});

//backpack


Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.backpackBasic){
        AchievementAPI.give("NewGame", "Backpack");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.backpackIron){
        AchievementAPI.give("NewGame", "IronBackpack");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.backpackGold){
        AchievementAPI.give("NewGame", "GoldBackpack");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.backpackDiamond){
        AchievementAPI.give("NewGame", "DiamondBackpack");
    }
});

//huvecasing
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.impregnatedCasing){
        AchievementAPI.give("NewGame", "HiveCasing");
    }
});

//scoop
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.scoop){
        AchievementAPI.give("NewGame", "scoop");
    }
});

//honeyDrop

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.honeyDrop){
        AchievementAPI.give("NewGame", "honeyDrop");
    }
});

//honey bread

Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.honeyedSlice){
        AchievementAPI.give("NewGame", "honeyedSlice");
    }
});





/*
            INDUSTRIALIZATION
*/


//first
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.craftingHammer){
        AchievementAPI.give("Industrialization", "first");
    }
});
//second
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==ItemID.craftingCutter){
        AchievementAPI.give("Industrialization", "second");
    }
});
//metal former
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.metalFormer){
        AchievementAPI.give("Industrialization", "metalFormer");
    }
});

//casing
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.machineBlockBasic){
        AchievementAPI.give("Industrialization", "machineBlockBasic");
    }
});

//macerator
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.macerator){
        AchievementAPI.give("Industrialization", "macerator");
    }
});

//electricFurnace
Callback.addCallback("ItemUse", function(coords, item, block){
    //var item = Player.getCarriedItem();
    if(item.id==BlockID.electricFurnace){
        AchievementAPI.give("Industrialization", "electricFurnace");
    }
});



