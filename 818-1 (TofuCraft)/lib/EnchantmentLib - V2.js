LIBRARY({
    name: "EnchantmentLib",
    version: 2,
    api: "CoreEngine",
    shared: true
});

var EnchantSlotTypes = {
    ARMOR_HEAD: 1,
    ARMOR_TORSO: 2,
    ARMOR_FEET: 4,
    ARMOR_LEGS: 8,
    SWORD: 16,
    BOW: 32,
    HOE: 64,
    SHEARS: 128,
    FLINTSTEEL: 256,
    AXE: 512,
    PICKAXE: 1024,
    SHOVEL: 2048,
    FISHING_ROD: 4096,
    CARROT_STICK: 8192,
    ELYTRA: 16384,
    SPEAR: 32768,
    CROSSBOW: 65536,
    SHIELD: 131072,
    COSMETIC_HEAD: 262144,
    COMPASS: 524288,
    MUSHROOM_STICK: 1048576
};
var EnchantSlotGroups = {
    ALL: 4294967295,
    ARMOR: 15,
    TOOL: 131520,
    DIGGING: 3648
};

var EnchantSlot = (function () {
    function EnchantSlot(name) {
        let id = Object.keys(EnchantSlotTypes).length;
        if (id > 31)
            throw new Error("The number of enchant slots can't over 32");
        if (EnchantSlotTypes[name])
            throw new Error(name + "is already defined");
        this.name = name;
        this.id = Math.pow(2, id);
        EnchantSlotTypes[this.name] = this.id;
    };
    EnchantSlot.addGroup = function (groupName, enchants) {
        let id = 0;
        if (!Array.isArray(arguments[1])) {
            enchants = [].slice.call(arguments);
            enchants.shift();
        }
        for (let e in enchants)
            id |= typeof enchants[e] == "number" ? enchants[e] : EnchantSlotTypes[enchants];
        EnchantSlotGroups[groupName] = id;
        return id;
    };
    return EnchantSlot;
}());

function isIncompatible(item, incompatible, id) {
    if (!item.extra)
        return true;
    let enchants = item.extra.getEnchants();
    if (id && !enchants[id])
        return true;
    for (let e in incompatible) {
        if (enchants[incompatible[e]])
            return true;
    }
    return false;
}

var Enchant = (function () {
    function Enchant(nameID, name, properties) {
        this.enchant = CustomEnchant.newEnchant(nameID, name);
        this.id = this.enchant.id;
        this.incompatible = [];

        if (properties) {
            if (properties["frequency"] != undefined)
                this.enchant.setFrequency(properties["frequency"]);
            if (properties["in_trade"] != undefined)
                this.enchant.setIsLootable(properties["in_trade"]);
            if (properties["in_table"] != undefined)
                this.enchant.setIsDiscoverable(properties["in_table"]);
            if (properties["is_treasure"] != undefined)
                this.enchant.setIsTreasure(properties["is_treasure"]);
            if (properties["mask"] != undefined)
                this.enchant.setMask(properties["mask"]);
            if (properties["level"] != undefined)
                this.enchant.setMinMaxLevel(properties["level"][0], properties["level"][1]);
            if (properties["cost"] != undefined)
                this.enchant.setMinMaxCost(properties["cost"][0], properties["cost"][1], properties["cost"][2], properties["cost"][3]);
        }
    };
    Enchant.prototype.setEnchantSlot = function (id) {
        this.enchant.setMask(id);
        return this;
    };
    Enchant.prototype.addIncompatible = function (id) {
        this.incompatible.push(id);
        return this;
    };
    Enchant.prototype.setAttackBounsFunction = function (func) {
        this.enchant.setAttackDamageBonusProvider(func);
        return this;
    };
    Enchant.prototype.setProtectionBounsFunction = function (func) {
        this.enchant.setProtectionBonusProvider(func);
        return this;
    };
    Enchant.prototype.registerAttackFunction = function (func) {
        let incompatible = this.incompatible,
            id = this.id;
        Callback.addCallback("EntityHurt", function (attacker, viticm, damage) {
            let item = Entity.getCarriedItem(attacker);
            if (!isIncompatible(item, incompatible, id))
                func(item, damage, attacker, viticm);
        });
    };
    Enchant.prototype.registerProtectionFunction = function (func) {
        let incompatible = this.incompatible;
        this.enchant.setPostHurtCallback(function (item, damage, entity1, entity2) {
            if (!isIncompatible(item, incompatible))
                func(item, damage, entity1, entity2);
        });
    };
    Enchant.prototype.registerWearFunction = function (func) {
        let incompatible = this.incompatible,
            id = this.id;
        Callback.addCallback("ServerPlayerTick", function (uid, isDead) {
            if (!isDead) {
                let player = new PlayerActor(uid);
                for (let i = 0; i < 4; i++) {
                    let item = player.getArmor(i);
                    if (!isIncompatible(item, incompatible, id))
                        func(uid, item);
                }
            }
        });
    };
    Enchant.prototype.registerDiggingFunction = function (func) {
        let incompatible = this.incompatible,
            id = this.id;
        Callback.addCallback("DestroyBlockStart", function (coords, block, player) {
            let item = Entity.getCarriedItem(player);
            if (!isIncompatible(item, incompatible, id))
                func(coords, block, player);
        });
    };
    Enchant.prototype.registerUseFunction = function (func) {
        let incompatible = this.incompatible,
            id = this.id;
        Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
            if (!isIncompatible(item, incompatible, id))
                func(coords, item, block, isExternal, player);
        });
    }
    return Enchant;
}());

EXPORT("EnchantSlotTypes", EnchantSlotTypes);
EXPORT("EnchantSlotGroups", EnchantSlotGroups);
EXPORT("EnchantSlot", EnchantSlot);
EXPORT("Enchant", Enchant);