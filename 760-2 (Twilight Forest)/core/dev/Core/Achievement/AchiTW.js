AchievementAPI = api.AchievementAPI;
    api.AchievementAPI.registerGroup({
        unique: "TW",
        name: "Twilight Forest  ",
        width: 1000,
        height: 1000,
        size: 45,
        bgTexture: "bg_2",
        icon: {
            id: ItemID.twpo
        }
    });
    
    
    ModAPI.addAPICallback("AchievementsAPI", function (api) {
    api.AchievementAPI.register("TW", {
        unique: "potal",
        name: {
            text: "một vùng đất mới !",
            translate: "achievements.TW.potal.title"
        },
        description: {
            text: "cổng dịch chuyển",
            translate: "achievements.TW.potal.description"
        },
        column: 1,
        row: 1,
        item: {
            id: BlockID.twBlockPortal
        }
    });

//tools
api.AchievementAPI.register("TW", {
        unique: "sf1",
        name: {
            text: " steeleaf sword !",
            translate: "achievements.TW.sf1.title"
        },
        description: {
            text: "steeleaf sword",
            translate: "achievements.TW.è1.description"
        },
        column: 2,
        row: 1,
        item: {
            id: ItemID.v1
        }
    });
    
    api.AchievementAPI.register("TW", {
        unique: "sf2",
        name: {
            text: "steeleaf shovel !",
            translate: "achievements.TW.sf2.title"
        },
        description: {
            text: "steeleaf shovel",
            translate: "achievements.TW.sf2.description"
        },
        column: 3,
        row: 1,
        item: {
            id: ItemID.v2
        }
    });
    
    api.AchievementAPI.register("TW", {
        unique: "sf3",
        name: {
            text: "steeleaf pickaxe !",
            translate: "achievements.TW.sf3.title"
        },
        description: {
            text: "steeleaf pickaxe",
            translate: "achievements.TW.sf3.description"
        },
        column: 2,
        row: 2,
        item: {
            id: ItemID.v3
        }
    });
    
    api.AchievementAPI.register("TW", {
        unique: "sf4",
        name: {
         text: "steeleaf axe !",
            translate: "achievements.TW.sf4.title"
        },
        description: {
            text: "steeleaf axe",
            translate: "achievements.TW.sf4.description"
        },
        column: 3,
        row: 2,
        item: {
            id: ItemID.v4
        }
    });
    
    
    
    // armor TW
    api.AchievementAPI.register("TW", {
        unique: "ar1",
        name: {
         text: " steeleaf Helmet !",
            translate: "achievements.TW.ar1.title"
        },
        description: {
            text: " steeleaf Helmet",
            translate: "achievements.TW.ar1.description"
        },
        column: 5,
        row: 1,
        item: {
            id: ItemID.st1
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "ar2",
        name: {
         text: " steeleaf Chestplate !",
            translate: "achievements.TW.ar2.title"
        },
        description: {
            text: " steeleaf Chestplate",
            translate: "achievements.TW.ar2.description"
        },
        column: 5,
        row: 2,
        item: {
            id: ItemID.st2
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "ar3",
        name: {
         text: " steeleaf Leggings !",
            translate: "achievements.TW.ar3.title"
        },
        description: {
            text: " steeleaf Leggings",
            translate: "achievements.TW.ar3.description"
        },
        column: 5,
        row: 3,
        item: {
            id: ItemID.st3
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "ar4",
        name: {
         text: " steeleaf Boots !",
            translate: "achievements.TW.ar4.title"
        },
        description: {
            text: " steeleaf Boots",
            translate: "achievements.TW.ar4.description"
        },
        column: 5,
        row: 4,
        item: {
            id: ItemID.st4
        }
    });
    
    
    
    
    
    
    
    api.AchievementAPI.register("TW", {
        unique: "ir1",
        name: {
         text: "  ironwood Helmet !",
            translate: "achievements.TW.ir1.title"
        },
        description: {
            text: " ironwood Helmet",
            translate: "achievements.TW.ir1.description"
        },
        column: 6,
        row: 1,
        item: {
            id: ItemID.armor1
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "ir2",
        name: {
         text: " ironwood Chestplate  !",
            translate: "achievements.TW.ir2.title"
        },
        description: {
            text: " ironwood Chestplate",
            translate: "achievements.TW.ir2.description"
        },
        column: 6,
        row: 2,
        item: {
            id: ItemID.armor2
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "ir3",
        name: {
         text: " ironwood Leggings !",
            translate: "achievements.TW.ir3.title"
        },
        description: {
            text: " ironwood Leggings",
            translate: "achievements.TW.ir3.description"
        },
        column: 6,
        row: 3,
        item: {
            id: ItemID.armor3
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "ir4",
        name: {
         text: "ironwood boost !",
            translate: "achievements.TW.ir4.title"
        },
        description: {
            text: " ironwood boost",
            translate: "achievements.TW.ir4.description"
        },
        column: 6,
        row: 4,
        item: {
            id: ItemID.armor4
        }
    });
    
    
    
    
    
    
    
    api.AchievementAPI.register("TW", {
        unique: "pt1",
        name: {
         text: " fantom Helmet !",
            translate: "achievements.TW.pt1.title"
        },
        description: {
            text: " fantom Helmet",
            translate: "achievements.TW.pt1.description"
        },
        column: 7,
        row: 1,
        item: {
            id: ItemID.lol
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "pt2",
        name: {
         text: " fantom Chestplate !",
            translate: "achievements.TW.pt2.title"
        },
        description: {
            text: " fantom Chestplate",
            translate: "achievements.TW.pt2.description"
        },
        column: 7,
        row: 2,
        item: {
            id: ItemID.loz
        }
    });
    //
    
    
    
    api.AchievementAPI.register("TW", {
        unique: "lig",
        name: {
         text: "ta đã chiến thắng !",
            translate: "achievements.TW.lig.title"
        },
        description: {
            text: " light boss",
            translate: "achievements.TW.lig.description"
        },
        column: 1,
        row: 4,
        item: {
            id: ItemID.lichTrophy
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "na",
        name: {
         text: "nó là con gì vậy !",
            translate: "achievements.TW.na.title"
        },
        description: {
            text: "naga",
            translate: "achievements.TW.na.description"
        },
        column: 2,
        row: 4,
        item: {
            id: ItemID.nagaTrophy
        }
    });
    
    
    api.AchievementAPI.register("TW", {
        unique: "sq",
        name: {
         text: "thật là lạnh !",
            translate: "achievements.TW.sq.title"
        },
        description: {
            text: "snow queen",
            translate: "achievements.TW.sq.description"
        },
        column: 3,
        row: 4,
        item: {
            id: ItemID.snowQueenTrophy
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "hy",
        name: {
         text: "một con rồng đáng sợ !",
            translate: "achievements.TW.hy.title"
        },
        description: {
            text: "hydra",
            translate: "achievements.TW.hy.description"
        },
        column: 4,
        row: 4,
        item: {
            id: ItemID.hydraTrophy
        }
    });
    
    
    
    
    
    //axe
    api.AchievementAPI.register("TW", {
        unique: "axetw",
        name: {
         text: "nó rất mạnh và to (っಠ‿ಠ)っ !",
            translate: "achievements.TW.axetw.title"
        },
        description: {
            text: "minotaur axe",
            translate: "achievements.TW.axetw.description"
        },
        column: 1,
        row: 2,
        item: {
            id: ItemID.minotauraxe
        }
    });
    
    
    
    
    //fiery up
    api.AchievementAPI.register("TW", {
        unique: "stmup",
        name: {
         text: "đến giờ nâng cấp !",
            translate: "achievements.TW.stmup.title"
        },
        description: {
            text: "smithing table",
            translate: "achievements.TW.stmup.description"
        },
        column: 5,
        row: 6,
        item: {
            id: BlockID.smithing_table_mod
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "fiery",
        name: {
         text: "nó là máu rồng  !",
            translate: "achievements.TW.fiery.title"
        },
        description: {
            text: "fiery blood",
            translate: "achievements.TW.fiery.description"
        },
        column: 7,
        row: 6,
        item: {
            id: ItemID.fieryblood
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "darkfn",
        name: {
         text: "luyện máu rồng nào !",
            translate: "achievements.TW.darkfn.title"
        },
        description: {
            text: "Dark Furnace ",
            translate: "achievements.TW.darkfn.description"
        },
        column: 6,
        row: 6,
        item: {
            id: ItemID.MobsFurnace
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "fint",
        name: {
         text: "một kim loại quý hiếm !",
            translate: "achievements.TW.fint.title"
        },
        description: {
            text: "fiery ingot ",
            translate: "achievements.TW.fint.description"
        },
        column: 8,
        row: 6,
        item: {
            id: ItemID.fint
        }
    });
    //armor
    api.AchievementAPI.register("TW", {
        unique: "fieryH",
        name: {
         text: "Fiery Helmet  !",
            translate: "achievements.TW.fieryH.title"
        },
        description: {
            text: "Fiery Helmet",
            translate: "achievements.TW.fieryH.description"
        },
        column: 5,
        row: 7,
        item: {
            id: ItemID.fieryH
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "fieryC",
        name: {
         text: " Fiery Chestplate !",
            translate: "achievements.TW.fieryC.title"
        },
        description: {
            text: " Fiery Chestplate",
            translate: "achievements.TW.fieryC.description"
        },
        column: 6,
        row: 7,
        item: {
            id: ItemID.fieryC
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "fieryL",
        name: {
         text: " Fiery Leggings !",
            translate: "achievements.TW.fieryL.title"
        },
        description: {
            text: " Fiery Leggings",
            translate: "achievements.TW.fieryL.description"
        },
        column: 7,
        row: 7,
        item: {
            id: ItemID.fieryL
        }
    });
    api.AchievementAPI.register("TW", {
        unique: "fieryB",
        name: {
         text: " Fiery Boots !",
            translate: "achievements.TW.fieryB.title"
        },
        description: {
            text: " Fiery Boost",
            translate: "achievements.TW.fieryB.description"
        },
        column: 8,
        row: 7,
        item: {
            id: ItemID.fieryB
        }
    });
    
    
    
    
    
    
    
    
    
    
    
});
// hoàn thành 
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== BlockID.twBlockPortal){
        AchievementAPI.give("TW", "potal");
    }
});
//tools 
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.minotauraxe){
        AchievementAPI.give("TW", "axetw");
    }
});

Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.v1){
        AchievementAPI.give("TW", "sf1");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.v2){
        AchievementAPI.give("TW", "sf2");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.v3){
        AchievementAPI.give("TW", "sf3");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.v4){
        AchievementAPI.give("TW", "sf4");
    }
});
//
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.st1){
        AchievementAPI.give("TW", "ar1");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.st2){
        AchievementAPI.give("TW", "ar2");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.st3){
        AchievementAPI.give("TW", "ar3");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.st4){
        AchievementAPI.give("TW", "ar4");
    }
});
//
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.armor1){
        AchievementAPI.give("TW", "ir1");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.armor2){
        AchievementAPI.give("TW", "ir2");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.armor3){
        AchievementAPI.give("TW", "ir3");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.armor4){
        AchievementAPI.give("TW", "ir4");
    }
});
//
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.lol){
        AchievementAPI.give("TW", "pt1");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.loz){
        AchievementAPI.give("TW", "pt2");
    }
});
//boss
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.lichTrophy){
        AchievementAPI.give("TW", "lig");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.nagaTrophy){
        AchievementAPI.give("TW", "na");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.ughastTrophy){
        AchievementAPI.give("TW", "ug");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.hydraTrophy){
        AchievementAPI.give("TW", "hy");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.snowQueenTrophy){
        AchievementAPI.give("TW", "sq");
    }
});

//fiery
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== BlockID.smithing_table_mod){
        AchievementAPI.give("TW", "stmup");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.fieryblood){
        AchievementAPI.give("TW", "fiery");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.MobsFurnace){
        AchievementAPI.give("TW", "darkfn");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.fint){
        AchievementAPI.give("TW", "fint");
    }
});
//armor
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.fieryH){
        AchievementAPI.give("TW", "fieryH");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.fieryC){
        AchievementAPI.give("TW", "fieryC");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.fieryL){
        AchievementAPI.give("TW", "fieryL");
    }
});
Callback.addCallback("ItemUse", function(coords, item, block){
    if(item.id== ItemID.fieryB){
        AchievementAPI.give("TW", "fieryB");
    }
});

    
    
    
    