IMPORT("SoundAPI");
IMPORT("TextureWorker");
IMPORT("ItemAnimHelper");
IMPORT("SUGAr");
IMPORT("ConfigSpec");
IMPORT("VanillaSlots");
IMPORT("ModelKooker");
let millis = Debug.sysTime();
let __extends = (this && this.__extends) || (function () {
    let extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) || function (d, b) {
            for (let p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) {
                    d[p] = b[p];
                }
            }
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
let __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    let c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        r = Reflect.decorate(decorators, target, key, desc);
    } else {
        for (let i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) {
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
        }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function (t) {
        for (let s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (let p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Game.isDedicatedServer = Game.isDedicatedServer || function () {
    return false;
};
let nativeEnabled = false;
let BlockHelper;
let ItemHelper;
let ChunkHelper;
let ActorHelper;
let ParticlesHelper;
let EnchantHelper;
if (nativeEnabled) {
    BlockHelper = WRAP_NATIVE("BlockHelperModule");
    ItemHelper = WRAP_NATIVE("ItemHelperModule");
    ChunkHelper = WRAP_NATIVE("ChunkHelperModule");
    ActorHelper = WRAP_NATIVE("ActorHelperModule");
    ParticlesHelper = WRAP_NATIVE("ParticlesHelperModule");
    EnchantHelper = WRAP_NATIVE("EnchantHelperModule");
} else {
    BlockHelper = {randomTick() {
    }, getModifyOffset() {
        return "{\"x\":0,\"y\":0,\"z\":0}";
    }};
    ItemHelper = {getNutrition() {
        return 0;
    }};
    ChunkHelper = {isSlimeChunk() {
        return false;
    }, isSlimeChunkAt() {
        return false;
    }};
    ActorHelper = {isBaby() {
        return false;
    }, hasCategory() {
        return false;
    }};
    ParticlesHelper = {addBreakingItemParticle() {
    }};
    EnchantHelper = {getMinCost() {
        return 0;
    }};
}
const Color = android.graphics.Color;
const NativeCallback = com.zhekasmirnov.innercore.api.NativeCallback;
const oreList = {overworld: [], nether: []};
const cropList = [];
function addOre(dimensionName, id, weight) {
    oreList[dimensionName].push({id: id, weight: weight || 0});
}
function addCrop(id) {
    cropList.push(id);
}
function isCrop(id) {
    return !!~cropList.indexOf(id);
}
addCrop(VanillaBlockID.carrots);
addCrop(VanillaBlockID.potatoes);
addCrop(VanillaBlockID.beetroot);
addCrop(VanillaBlockID.wheat);
addCrop(VanillaBlockID.reeds);
addCrop(VanillaBlockID.cactus);
addCrop(VanillaBlockID.bamboo);
addCrop(VanillaBlockID.bamboo_sapling);
addCrop(VanillaBlockID.red_mushroom);
addCrop(VanillaBlockID.brown_mushroom);
addCrop(VanillaBlockID.sapling);
addOre("overworld", VanillaBlockID.coal_ore, 67415);
addOre("overworld", VanillaBlockID.iron_ore, 29371);
addOre("overworld", VanillaBlockID.gold_ore, 2647);
addOre("overworld", VanillaBlockID.redstone_ore, 7654);
addOre("overworld", VanillaBlockID.lapis_ore, 1079);
addOre("overworld", VanillaBlockID.diamond_ore, 883);
addOre("overworld", VanillaBlockID.emerald_ore, 1239);
addOre("nether", VanillaBlockID.quartz_ore, 19600);
addOre("nether", VanillaBlockID.nether_gold_ore, 3635);
addOre("nether", VanillaBlockID.ancient_debris, 148);
function getOreList(dimensionName) {
    return oreList[dimensionName];
}
function getRandomOre(dimensionName) {
    let list = getOreList(dimensionName);
    let maxWeight = 0;
    let weights = [];
    for (let i in list) {
        maxWeight += list[i].weight;
        weights.push(list[i].weight);
    }
    let weight = randomInt(maxWeight);
    let minWeights = [];
    for (let i in weights) {
        if (weights[i] < weight) {
            minWeights.push(weights[i]);
        }
    }
    let minWeight = minInArr(minWeights);
    for (let i in list) {
        if (list[i].weight == minWeight) {
            return list[i].id;
        }
    }
}
function paintTextureArr(texture, colorArr, blockOrItem) {
    if (typeof colorArr == "boolean") {
        blockOrItem = colorArr, colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    }
    for (let i in colorArr) {
        let color = ((typeof colorArr[i] == "string") ? DyeColor.byTranslationKey(colorArr[i]) : DyeColor.byId(colorArr[i])).getColorComponentValues();
        TextureWorker.paintTextureModDir({bitmap: TextureWorker.TEXTURE_STANDART, src: {path: "assets/raw-textures/", name: texture + (!texture.match("_block|_item") ? blockOrItem ? "_block" : "_item" : "")}, color: color.map(function (v) {
            return v * 255;
        }), result: {path: "assets/" + (blockOrItem ? "terrain-atlas/" : "items-opaque/"), name: texture + "_" + i}});
    }
}
let emptyModel = new ICRender.Model();
let emptyCollision = new ICRender.CollisionShape();
let ModSounds = {agricarnation: "agricarnation.ogg", airRod: "air_rod.ogg", altarCraft: "altar_craft.ogg", babylonAttack: "babylon_attack.ogg", babylonSpawn: "babylon_spawn.ogg", bellows: "bellows.ogg", bifrostRod: "bifrost_rod.ogg", blackLotus: "black_lotus.ogg", dash: "dash.ogg", ding: "ding.ogg", divaCharm: "diva_charm.ogg", divinationRod: "divination_rod.ogg", doit: "doit.ogg", enchanterBlock: "enchanter_block.ogg", enchanterEnchant: "enchanter_enchant.ogg", enderFlame: "ender_flame.ogg", equipBauble: "equip_bauble.ogg", gaiaTrap: "gaia_trap.ogg", holyCloak: "holy_cloak.ogg", laputaStart: "laputa_start.ogg", lexiconOpen: "lexicon_open.ogg", lexiconPage: "lexicon_page.ogg", lightRelay: "light_relay.ogg", manaBlaster: "mana_blaster.ogg", missile: "missile.ogg", orechid: "orechid.ogg", poolCraft: "pool_craft.ogg", potionCreate: "potion_create.ogg", runeAltarCraft: "rune_altar_craft.ogg", runeAltarStart: "rune_altar_start.ogg", spreaderFire: "spreader_fire.ogg", star_caller: "star_caller.ogg", terrablade: "terrablade.ogg", terraformRod: "terraform_rod.ogg", terrapickMode: "terrapick_mode.ogg", terrasteelCraft: "terrasteel_craft.ogg", thermalily: "thermalily.ogg", unholyCloak: "unholy_cloak.ogg", way: "way.ogg"};
function randomInt(min, max) {
    if (!max) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomFloat(min, max) {
    if (!min) {
        min = 1;
    }
    if (!max) {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min + 1) + min;
}
Object.defineProperty(Array.prototype, "remove", {value() {
    let what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
}});
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
function forEachBlockPos(from, to, func) {
    let p1 = new BlockPos(Math.min(from.getX(), to.getX()), Math.min(from.getY(), to.getY()), Math.min(from.getZ(), to.getZ()));
    let p2 = new BlockPos(Math.max(from.getX(), to.getX()), Math.max(from.getY(), to.getY()), Math.max(from.getZ(), to.getZ()));
    process: {
        for (let xx = p1.x; xx <= p2.x; xx++) {
            for (let yy = p1.y; yy <= p2.y; yy++) {
                for (let zz = p1.z; zz <= p2.z; zz++) {
                    let pos = new BlockPos(xx, yy, zz);
                    let result = func(pos);
                    if (result) {
                        break process;
                    }
                }
            }
        }
    }
}
function getXp(ent) {
    return ent.getCompoundTag().getInt("experience value");
}
function XPtoLVL(xp) {
    let currentLevel = 0;
    let remainingXP = xp;
    while (true) {
        let requiredForNextLevel;
        if (currentLevel <= 15) {
            requiredForNextLevel = (2 * currentLevel) + 7;
        } else {
            if (currentLevel >= 16 && currentLevel <= 30) {
                requiredForNextLevel = (5 * currentLevel) - 38;
            } else {
                requiredForNextLevel = (9 * currentLevel) - 158;
            }
        }
        if (remainingXP >= requiredForNextLevel) {
            remainingXP -= requiredForNextLevel;
            currentLevel++;
        } else {
            break;
        }
    }
    return {lvl: currentLevel, rem: remainingXP};
}
function LVLtoXP(lvl) {
    if (lvl <= 16) {
        requiredXP = Math.pow(lvl, 2) + 6 * lvl;
    } else {
        if (lvl >= 17 && lvl <= 31) {
            requiredXP = 2.5 * Math.pow(lvl, 2) - 40.5 * lvl + 360;
        } else {
            requiredXP = 4.5 * Math.pow(lvl, 2) - 162.5 * lvl + 2220;
        }
    }
    return requiredXP;
}
const xpSplitValues = [2477, 1237, 617, 307, 149, 73, 37, 17, 7, 3];
function getXPSplit(expValue) {
    for (let i in xpSplitValues) {
        if (expValuev >= xpSplitValues[i]) {
            return xpSplitValues[i];
        }
    }
    return 1;
}
function toJson(obj, spaces) {
    return JSON.stringify(obj, function (k, v) {
        if (!(v instanceof java.lang.Object) && !(v instanceof java.lang.Class)) {
            return v;
        }
    }, spaces);
}
function pingTick(ticks) {
    return (World.getThreadTime() % ticks === 0);
}
function emptyTarget(obj) {
    return Array.isArray(obj) ? [] : {};
}
function deepmerge(obj, obj2) {
    for (let i in obj2) {
        if (!obj[i] && (typeof obj2[i] !== "object" || obj2[i] instanceof java.lang.Object)) {
            obj[i] = obj2[i];
        } else {
            deepmerge(obj[i], obj2[i]);
        }
    }
}
function objectMergedFoundation(a, b) {
    let obj = emptyTarget(b);
    for (let i in a) {
        if (typeof a[i] == "object") {
            obj[i] = emptyTarget(a[i]);
            obj[i] = objectMergedFoundation(obj[i], a[i]);
        }
    }
    for (let i in b) {
        if (typeof b[i] == "object") {
            obj[i] = emptyTarget(b[i]);
            obj[i] = objectMergedFoundation(obj[i], b[i]);
        }
    }
    return obj;
}
function merge(a, b) {
    let found = objectMergedFoundation(a, b);
    deepmerge(found, b);
    deepmerge(found, a);
    return found;
}
Math.angleBetween = function (a, b) {
    if (a instanceof Vec3d && b instanceof Vec3d) {
        let projection = a.normalize().dotProduct(b.normalize());
        return Math.acos(MathHelper.clamp(projection, -1, 1));
    }
};
Number.prototype.toRad = function () {
    return this * Math.PI / 180;
};
Number.prototype.fromRad = function () {
    return (this * 180) / Math.PI;
};
Callback.addCallback("NativeCommand", function (str) {
    let arr = str.split(" >> ");
    if (arr[0] === "/run") {
        Game.prevent();
        eval(arr[1]);
    }
});

