alert("CryptoMining - by JamesLong");
var AchievementAPI;

ModAPI.addAPICallback("AchievementsAPI", function (api) {
AchievementAPI = api.AchievementAPI;
    api.AchievementAPI.registerGroup({
        unique: "CryptoCurrency",
        name: "Crypto-Currency",
        width: 250,
        height: 2000,
        size: 125,
        bgTexture: "crypto_background_1",
        icon: {
            id: ItemID.bitcoin
        }
    });
}); 


ModAPI.addAPICallback("AchievementsAPI", function (api) {
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "first",
        name: {
            text: "I am Crypto-Miner!",
            translate: "achievements.CryptoCurrency.first.title"
        },
        description: {
            text: "Mine you first Peercoin",
            translate: "achievements.CryptoCurrency.first.description"
        },
        column: 2,
        row: 1,
        item: {
            id: ItemID.peercoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "buzcoin",
        name: {
            text: "Mmm, heart? BUZOVA?",
            translate: "achievements.CryptoCurrency.buzcoin.title"
        },
        description: {
            text: "Mine you first Buzcoin",
            translate: "achievements.CryptoCurrency.buzcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 1,
        item: {
            id: ItemID.buzcoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "dogecoin",
        name: {
            text: "DOGE! Gav, gav!",
            translate: "achievements.CryptoCurrency.dogecoin.title"
        },
        description: {
            text: "Mine you first Dogecoin",
            translate: "achievements.CryptoCurrency.dogecoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 2,
        item: {
            id: ItemID.dogecoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "litecoin",
        name: {
            text: "Hmm, it's glowing!",
            translate: "achievements.CryptoCurrency.litecoin.title"
        },
        description: {
            text: "Mine you first Litecoin",
            translate: "achievements.CryptoCurrency.litecoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 3,
        item: {
            id: ItemID.litecoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "windcoin",
        name: {
            text: "It's wind!",
            translate: "achievements.CryptoCurrency.windcoin.title"
        },
        description: {
            text: "Mine you first Windcoin",
            translate: "achievements.CryptoCurrency.windcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 4,
        item: {
            id: ItemID.windcoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "ripple",
        name: {
            text: "Ripple? What means it?",
            translate: "achievements.CryptoCurrency.ripple.title"
        },
        description: {
            text: "Mine you first Ripple",
            translate: "achievements.CryptoCurrency.ripple.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 5,
        item: {
            id: ItemID.ripple
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "monero",
        name: {
            text: "Monero, 12 dollars? WHAT?",
            translate: "achievements.CryptoCurrency.monero.title"
        },
        description: {
            text: "Mine you first Monero",
            translate: "achievements.CryptoCurrency.monero.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 6,
        item: {
            id: ItemID.monero
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "dashcoin",
        name: {
            text: "Dash... mmm...",
            translate: "achievements.CryptoCurrency.dashcoin.title"
        },
        description: {
            text: "Mine you first Dashcoin",
            translate: "achievements.CryptoCurrency.dashcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 7,
        item: {
            id: ItemID.dashcoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "zerocash",
        name: {
            text: "ZERO!!",
            translate: "achievements.CryptoCurrency.zerocash.title"
        },
        description: {
            text: "Mine you first Zerocash",
            translate: "achievements.CryptoCurrency.zerocash.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 8,
        item: {
            id: ItemID.zerocash
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "firecoin",
        name: {
            text: "I must mine fire!",
            translate: "achievements.CryptoCurrency.firecoin.title"
        },
        description: {
            text: "Mine you first Firecoin",
            translate: "achievements.CryptoCurrency.firecoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 9,
        item: {
            id: ItemID.firecoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "lisk",
        name: {
            text: "Lisk, It's strange!",
            translate: "achievements.CryptoCurrency.lisk.title"
        },
        description: {
            text: "Mine you first Lisk",
            translate: "achievements.CryptoCurrency.lisk.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 10,
        item: {
            id: ItemID.lisk
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "augur",
        name: {
            text: "Augur, au, au!",
            translate: "achievements.CryptoCurrency.augur.title"
        },
        description: {
            text: "Mine you first Augur",
            translate: "achievements.CryptoCurrency.augur.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 11,
        item: {
            id: ItemID.augur
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "cosmocash",
        name: {
            text: "Cosmos?",
            translate: "achievements.CryptoCurrency.cosmocash.title"
        },
        description: {
            text: "Mine you first Cosmocash",
            translate: "achievements.CryptoCurrency.cosmocash.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 12,
        item: {
            id: ItemID.cosmocash
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "moon",
        name: {
            text: "Take samples!",
            translate: "achievements.CryptoCurrency.moon.title"
        },
        description: {
            text: "Go to the Moon, and mine moon dirt",
            translate: "achievements.CryptoCurrency.moon.description"
        },
    parent: {
    unique: "cosmocash"
    },
        strongDependence: true,
        type: "goal",
        column: 4,
        row: 12,
        item: {
            id: BlockID.dirtMoon
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "mooncoin",
        name: {
            text: "Crypto-Currency, again..",
            translate: "achievements.CryptoCurrency.mooncoin.title"
        },
        description: {
            text: "Find meteors, and mine it!",
            translate: "achievements.CryptoCurrency.mooncoin.description"
        },
    parent: {
    unique: "moon"
    },
        strongDependence: true,
        type: "challenge",
        column: 4,
        row: 13,
        item: {
            id: ItemID.mooncoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "mars",
        name: {
            text: "Take samples again!",
            translate: "achievements.CryptoCurrency.mars.title"
        },
        description: {
            text: "Go to the Mars, and mine mars dirt",
            translate: "achievements.CryptoCurrency.mars.description"
        },
    parent: {
    unique: "mooncoin"
    },
        strongDependence: true,
        type: "goal",
        column: 4,
        row: 14,
        item: {
            id: BlockID.dirtMars
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "marscoin",
        name: {
            text: "Crypto-Currency again, again, again..",
            translate: "achievements.CryptoCurrency.marscoin.title"
        },
        description: {
            text: "Find meteors and mine it!",
            translate: "achievements.CryptoCurrency.marscoin.description"
        },
    parent: {
    unique: "mooncoin"
    },
        strongDependence: true,
        type: "challenge",
        column: 4,
        row: 15,
        item: {
            id: ItemID.marscoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "wondercoin",
        name: {
            text: "It's very heavy!",
            translate: "achievements.CryptoCurrency.wondercoin.title"
        },
        description: {
            text: "Mine you first Wondercoin",
            translate: "achievements.CryptoCurrency.wondercoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 13,
        item: {
            id: ItemID.wondercoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "arkcoin",
        name: {
            text: "Strength!",
            translate: "achievements.CryptoCurrency.arkcoin.title"
        },
        description: {
            text: "Mine you first Arkcoin",
            translate: "achievements.CryptoCurrency.arkcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 14,
        item: {
            id: ItemID.arkcoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "concoin",
        name: {
            text: "Vladimir Ivanov",
            translate: "achievements.CryptoCurrency.concoin.title"
        },
        description: {
            text: "Mine you first Concoin",
            translate: "achievements.CryptoCurrency.concoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 15,
        item: {
            id: ItemID.concoin
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "ethereum",
        name: {
            text: "It's perfect!",
            translate: "achievements.CryptoCurrency.ethereum.title"
        },
        description: {
            text: "Mine you first Ethereum",
            translate: "achievements.CryptoCurrency.ethereum.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 16,
        item: {
            id: ItemID.ethereum
        }
    });
    api.AchievementAPI.register("CryptoCurrency", {
        unique: "bitcoin",
        name: {
            text: "BITCOIN!!!",
            translate: "achievements.CryptoCurrency.bitcoin.title"
        },
        description: {
            text: "Mine you first Bitcoin",
            translate: "achievements.CryptoCurrency.bitcoin.description"
        },
    parent: {
    unique: "first"
    },
        column: 3,
        row: 17,
        item: {
            id: ItemID.bitcoin
        }
    });
});

//callbacks

Block.registerDropFunction("bitcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "bitcoin");
    return [[ItemID.bitcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("wondercoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "wondercoin");
    return [[ItemID.wondercoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("ethereum", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "ethereum");
    return [[ItemID.ethereum, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("arkcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "arkcoin");
    return [[ItemID.arkcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("cosmocash", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "cosmocash");
    return [[ItemID.cosmocash, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("augur", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "augur");
    return [[ItemID.augur, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("lisk", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "lisk");
    return [[ItemID.lisk, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("firecoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "firecoin");
    return [[ItemID.firecoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("zerocash", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "zerocash");
    return [[ItemID.zerocash, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("dashcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "dashcoin");
    return [[ItemID.dashcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("monero", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "monero");
    return [[ItemID.monero, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("ripple", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "ripple");
    return [[ItemID.ripple, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("windcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "windcoin");
    return [[ItemID.windcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("litecoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "litecoin");
    return [[ItemID.litecoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("dogecoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "dogecoin");
    return [[ItemID.dogecoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("peercoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "first");
    return [[ItemID.peercoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("concoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "concoin");
    return [[ItemID.concoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("buzcoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "buzcoin");
    return [[ItemID.buzcoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("dirtMoon", function(coords, blockID, blockData, level, enchant){
if(level > -1){
	AchievementAPI.give("CryptoCurrency", "moon");
	return [[BlockID.dirtMoon, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("mooncoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "mooncoin");
    return [[ItemID.mooncoin, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("dirtMars", function(coords, blockID, blockData, level, enchant){
if(level > -1){
	AchievementAPI.give("CryptoCurrency", "mars");
	return [[BlockID.dirtMars, 1, 0]]
}
return [];
}, 3);

Block.registerDropFunction("marscoin", function(coords, blockID, blockData, level, enchant){
if(level > 2){
    ToolAPI.dropOreExp(coords, 5, 6, enchant.experience);
    AchievementAPI.give("CryptoCurrency", "marscoin");
    return [[ItemID.marscoin, 1, 0]]
}
return [];
}, 3);



