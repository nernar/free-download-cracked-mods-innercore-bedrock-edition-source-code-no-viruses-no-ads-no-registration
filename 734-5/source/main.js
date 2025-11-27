var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.registerID = function (id) {
        IDRegistry.genItemID(id);
    };
    Utils.createItem = function (id, name, texture, config) {
        Item.createItem(id, name, texture, config);
    };
    return Utils;
}());
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
var Manager;
(function (Manager) {
    var BlockManager = /** @class */ (function () {
        function BlockManager(stringID, blockName, blockTexture) {
            this.stringID = stringID;
            this.blockName = blockName;
            this.blockTexture = blockTexture;
        }
        BlockManager.prototype.create = function () {
            IDRegistry.genBlockID(this.stringID);
            Block.createBlock(this.stringID, [
                {
                    name: this.blockName,
                    texture: this.blockTexture,
                    inCreative: true,
                },
            ]);
        };
        BlockManager.prototype.addRecipe = function (item, mask, data) {
            Manager.RecipesManager.addRecipe({ item: item, mask: mask, data: data });
        };
        BlockManager.prototype.getNumericID = function () {
            return Block.getNumericId(this.stringID);
        };
        return BlockManager;
    }());
    Manager.BlockManager = BlockManager;
})(Manager || (Manager = {}));
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
var Manager;
(function (Manager) {
    var RecipesManager = /** @class */ (function () {
        function RecipesManager() {
        }
        RecipesManager.addRecipe = function (recipe) {
            Recipes.addShaped(recipe.item, recipe.mask, recipe.data);
        };
        return RecipesManager;
    }());
    Manager.RecipesManager = RecipesManager;
})(Manager || (Manager = {}));
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
/// <reference path="./Recipe.ts"
var Orb = /** @class */ (function () {
    function Orb(orbID, orbName, orbTexture, orbConfig) {
        this.orbID = orbID;
        this.orbName = orbName;
        this.orbTexture = orbTexture;
        this.orbConfig = orbConfig;
    }
    Orb.prototype.create = function () {
        Utils.registerID(this.orbID);
        Utils.createItem(this.orbID, this.orbName, this.orbTexture, this.orbConfig);
    };
    Orb.prototype.addRecipe = function (item, mask, data) {
        Manager.RecipesManager.addRecipe({ item: item, mask: mask, data: data });
    };
    Orb.prototype.getOrbNumericID = function () {
        return Item.getNumericId(this.orbID);
    };
    return Orb;
}());
var EventListener;
(function (EventListener) {
    function PlayerUseEvent(callback) {
        Callback.addCallback("ItemUse", callback);
    }
    EventListener.PlayerUseEvent = PlayerUseEvent;
})(EventListener || (EventListener = {}));
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
/// <reference path="../Block.ts" />
var NETHER_STAR_BLOCK;
(function (NETHER_STAR_BLOCK) {
    NETHER_STAR_BLOCK["stringID"] = "op.nether_star_block";
    NETHER_STAR_BLOCK["blockName"] = "Nether Star Block";
})(NETHER_STAR_BLOCK || (NETHER_STAR_BLOCK = {}));
var nether_star_block = new Manager.BlockManager(NETHER_STAR_BLOCK.stringID, NETHER_STAR_BLOCK.blockName, [
    ["nether_star_block", 0]
]);
nether_star_block.create();
nether_star_block.addRecipe({ id: nether_star_block.getNumericID(), count: 1, data: 0 }, [
    "xxx",
    "xxx",
    "xxx"
], ["x", 399, 0]);
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
/// <reference path="../blocks/Nether_Star_Block.ts" />
var EMPTY_ORB;
(function (EMPTY_ORB) {
    EMPTY_ORB["stringID"] = "op.empty_orb";
    EMPTY_ORB["orbName"] = "Empty Orb";
})(EMPTY_ORB || (EMPTY_ORB = {}));
var empty_orb = new Orb(EMPTY_ORB.stringID, EMPTY_ORB.orbName, {
    name: "empty_orb",
    data: 0,
}, {
    stack: 1,
});
empty_orb.create();
empty_orb.addRecipe({ id: empty_orb.getOrbNumericID(), count: 1, data: 0 }, [
    "xyx",
    "yzy",
    "xyx"
], ["x", nether_star_block.getNumericID(), 0, "y", 49, 0, "z", 42, 0]);
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
///<reference path="../events/PlayerUseEvent.ts" />
///<reference path="./Empty_Orb.ts" />
var SUNNY_ORB;
(function (SUNNY_ORB) {
    SUNNY_ORB["orbID"] = "op.sunny_orb";
    SUNNY_ORB["orbName"] = "Sunny Orb";
})(SUNNY_ORB || (SUNNY_ORB = {}));
var sunny_orb = new Orb(SUNNY_ORB.orbID, SUNNY_ORB.orbName, {
    name: "sunny_orb",
    data: 0,
}, { stack: 1 });
sunny_orb.create();
sunny_orb.addRecipe({ id: sunny_orb.getOrbNumericID(), count: 1, data: 0 }, ["xxx", "xyx", "xxx"], ["x", 378, 0, "y", empty_orb.getOrbNumericID(), 0]);
EventListener.PlayerUseEvent(function (coords, item, block) {
    if (item.id == sunny_orb.getOrbNumericID()) {
        World.setWeather({ rain: 0, thunder: 0 });
    }
});
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
/// <reference path="../events/PlayerUseEvent.ts" />
/// <reference path="./Empty_Orb.ts" />
var COW_ORB;
(function (COW_ORB) {
    COW_ORB["orbID"] = "op.cow_orb";
    COW_ORB["orbName"] = "Cow Orb";
})(COW_ORB || (COW_ORB = {}));
var cow_orb = new Orb(COW_ORB.orbID, COW_ORB.orbName, {
    name: "cow_orb",
    data: 0,
}, { stack: 1 });
cow_orb.create();
cow_orb.addRecipe({ id: cow_orb.getOrbNumericID(), count: 1, data: 0 }, ["xxx", "xyx", "xxx"], ["x", 335, 0, "y", empty_orb.getOrbNumericID(), 0]);
EventListener.PlayerUseEvent(function (coords, item, block) {
    if (item.id == cow_orb.getOrbNumericID()) {
        Entity.clearEffects(Player.get());
    }
});
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
/// <reference path="../events/PlayerUseEvent.ts" />
var RAINY_ORB;
(function (RAINY_ORB) {
    RAINY_ORB["orbID"] = "op.rainy_orb";
    RAINY_ORB["orbName"] = "Rainy Orb";
})(RAINY_ORB || (RAINY_ORB = {}));
var rainy_orb = new Orb(RAINY_ORB.orbID, RAINY_ORB.orbName, {
    name: "rainy_orb",
    data: 0,
}, { stack: 1 });
rainy_orb.create();
rainy_orb.addRecipe({ id: rainy_orb.getOrbNumericID(), count: 1, data: 0 }, ["xxx", "xyx", "xxx"], ["x", 19, 0, "y", empty_orb.getOrbNumericID(), 0]);
EventListener.PlayerUseEvent(function (coords, item, block) {
    if (item.id == rainy_orb.getOrbNumericID()) {
        World.setWeather({ rain: 10, thunder: 0 });
    }
});
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
/// <reference path="../events/PlayerUseEvent.ts" />
var MOON_ORB;
(function (MOON_ORB) {
    MOON_ORB["orbID"] = "op.moon_orb";
    MOON_ORB["orbName"] = "Moon Orb";
})(MOON_ORB || (MOON_ORB = {}));
var moon_orb = new Orb(MOON_ORB.orbID, MOON_ORB.orbName, {
    name: "moon_orb",
    data: 0,
}, { stack: 1 });
moon_orb.create();
moon_orb.addRecipe({ id: moon_orb.getOrbNumericID(), count: 1, data: 0 }, ["xxx", "xyx", "xxx"], ["x", -249, 0, "y", empty_orb.getOrbNumericID(), 0]);
EventListener.PlayerUseEvent(function (coords, item, block) {
    if (item.id == moon_orb.getOrbNumericID()) {
        World.setWorldTime(12542);
    }
});
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
/// <reference path="../events/PlayerUseEvent.ts" />
var BAT_ORB;
(function (BAT_ORB) {
    BAT_ORB["orbID"] = "op.bat_orb";
    BAT_ORB["orbName"] = "Bat Orb";
})(BAT_ORB || (BAT_ORB = {}));
var bat_orb = new Orb(BAT_ORB.orbID, BAT_ORB.orbName, {
    name: "bat_orb",
    data: 0,
}, { stack: 1 });
bat_orb.create();
bat_orb.addRecipe({ id: bat_orb.getOrbNumericID(), count: 1, data: 0 }, ["xxx", "xyx", "xxx"], ["x", 89, 0, "y", empty_orb.getOrbNumericID(), 0]);
EventListener.PlayerUseEvent(function (coords, item, block) {
    if (item.id == bat_orb.getOrbNumericID()) {
        Entity.addEffect(Player.get(), 16, 1, 9600);
    }
});
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
/// <reference path="../events/PlayerUseEvent.ts" />
var PUFFERFISH_ORB;
(function (PUFFERFISH_ORB) {
    PUFFERFISH_ORB["orbID"] = "op.pufferfish_orb";
    PUFFERFISH_ORB["orbName"] = "Pufferfish Orb";
})(PUFFERFISH_ORB || (PUFFERFISH_ORB = {}));
var pufferfish_orb = new Orb(PUFFERFISH_ORB.orbID, PUFFERFISH_ORB.orbName, {
    name: "pufferfish_orb",
    data: 0,
}, { stack: 1 });
pufferfish_orb.create();
pufferfish_orb.addRecipe({ id: pufferfish_orb.getOrbNumericID(), count: 1, data: 0 }, ["xxx", "xyx", "xxx"], ["x", 409, 0, "y", empty_orb.getOrbNumericID(), 0]);
EventListener.PlayerUseEvent(function (coords, item, block) {
    if (item.id == pufferfish_orb.getOrbNumericID()) {
        Entity.addEffect(Player.get(), 13, 1, 9600);
    }
});
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
/// <reference path="../events/PlayerUseEvent.ts" />
var SUN_ORB;
(function (SUN_ORB) {
    SUN_ORB["orbID"] = "op.sun_orb";
    SUN_ORB["orbName"] = "Sun Orb";
})(SUN_ORB || (SUN_ORB = {}));
var sun_orb = new Orb(SUN_ORB.orbID, SUN_ORB.orbName, {
    name: "sun_orb",
    data: 0,
}, { stack: 1 });
sun_orb.create();
sun_orb.addRecipe({ id: sun_orb.getOrbNumericID(), count: 1, data: 0 }, ["xxx", "xyx", "xxx"], ["x", 213, 0, "y", empty_orb.getOrbNumericID(), 0]);
EventListener.PlayerUseEvent(function (coords, item, block) {
    if (item.id == sun_orb.getOrbNumericID()) {
        World.setWorldTime(9000);
    }
});
/*
   ____       _         _____
  / __ \     | |       |  __ \
 | |  | |_ __| |__  ___| |__) |____      _____ _ __
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|

 */
var CREATIVE_GROUP = {
    name: "Orbs",
    displayedName: "Orbs",
    ids: [
        sun_orb.getOrbNumericID(),
        sunny_orb.getOrbNumericID(),
        rainy_orb.getOrbNumericID(),
        moon_orb.getOrbNumericID(),
        cow_orb.getOrbNumericID(),
        bat_orb.getOrbNumericID(),
        pufferfish_orb.getOrbNumericID(),
        empty_orb.getOrbNumericID(),
    ],
};
(function () {
    var name = CREATIVE_GROUP.name, displayedName = CREATIVE_GROUP.displayedName, ids = CREATIVE_GROUP.ids;
    Item.addCreativeGroup(name, displayedName, ids);
})();
