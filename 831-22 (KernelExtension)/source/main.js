var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) {
        return o;
    }
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    }
    catch (error) {
        e = {error: error};
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) {
                m.call(i);
            }
        }
        finally {
            if (e) {
                throw e.error;
            }
        }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) {
        for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) {
                    ar = Array.prototype.slice.call(from, 0, i);
                }
                ar[i] = from[i];
            }
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function (o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) {
        return m.call(o);
    }
    if (o && typeof o.length === "number") {
        return {next: function () {
            if (o && i >= o.length) {
                o = void 0;
            }
            return {value: o && o[i++], done: !o};
        }};
    }
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var MAIN = WRAP_JAVA("vsdum.kex.KernelExtension");
var AddonUtils = WRAP_JAVA("vsdum.kex.util.AddonUtils");
var ESaturationModifier;
(function (ESaturationModifier) {
    ESaturationModifier[ESaturationModifier["POOR"] = 0.2] = "POOR";
    ESaturationModifier[ESaturationModifier["LOW"] = 0.6] = "LOW";
    ESaturationModifier[ESaturationModifier["NORMAL"] = 1.2] = "NORMAL";
    ESaturationModifier[ESaturationModifier["GOOD"] = 1.6] = "GOOD";
    ESaturationModifier[ESaturationModifier["MAX"] = 2] = "MAX";
    ESaturationModifier[ESaturationModifier["SUPERNATURAL"] = 2.4] = "SUPERNATURAL";
})(ESaturationModifier || (ESaturationModifier = {}));
var EDamageCause;
(function (EDamageCause) {
    EDamageCause[EDamageCause["NONE"] = -1] = "NONE";
    EDamageCause[EDamageCause["OVERRIDE"] = 0] = "OVERRIDE";
    EDamageCause[EDamageCause["CONTACT"] = 1] = "CONTACT";
    EDamageCause[EDamageCause["ENTITY_ATTACK"] = 2] = "ENTITY_ATTACK";
    EDamageCause[EDamageCause["PROJECTILE"] = 3] = "PROJECTILE";
    EDamageCause[EDamageCause["SUFFOCATION"] = 4] = "SUFFOCATION";
    EDamageCause[EDamageCause["FALL"] = 5] = "FALL";
    EDamageCause[EDamageCause["FIRE"] = 6] = "FIRE";
    EDamageCause[EDamageCause["FIRE_TICK"] = 7] = "FIRE_TICK";
    EDamageCause[EDamageCause["LAVA"] = 8] = "LAVA";
    EDamageCause[EDamageCause["DROWNING"] = 9] = "DROWNING";
    EDamageCause[EDamageCause["BLOCK_EXPLOSION"] = 10] = "BLOCK_EXPLOSION";
    EDamageCause[EDamageCause["ENTITY_EXPLOSION"] = 11] = "ENTITY_EXPLOSION";
    EDamageCause[EDamageCause["VOID"] = 12] = "VOID";
    EDamageCause[EDamageCause["SUICIDE"] = 13] = "SUICIDE";
    EDamageCause[EDamageCause["MAGIC"] = 14] = "MAGIC";
    EDamageCause[EDamageCause["WITHER"] = 15] = "WITHER";
    EDamageCause[EDamageCause["STARVE"] = 16] = "STARVE";
    EDamageCause[EDamageCause["ANVIL"] = 17] = "ANVIL";
    EDamageCause[EDamageCause["THORNS"] = 18] = "THORNS";
    EDamageCause[EDamageCause["FALLING_BLOCK"] = 19] = "FALLING_BLOCK";
    EDamageCause[EDamageCause["PISTON"] = 20] = "PISTON";
    EDamageCause[EDamageCause["FLY_INTO_WALL"] = 21] = "FLY_INTO_WALL";
    EDamageCause[EDamageCause["MAGMA"] = 22] = "MAGMA";
    EDamageCause[EDamageCause["FIREWORKS"] = 23] = "FIREWORKS";
    EDamageCause[EDamageCause["LIGHTNING"] = 24] = "LIGHTNING";
    EDamageCause[EDamageCause["CHARGING"] = 25] = "CHARGING";
    EDamageCause[EDamageCause["TEMPERATURE"] = 26] = "TEMPERATURE";
    EDamageCause[EDamageCause["ALL"] = 31] = "ALL";
})(EDamageCause || (EDamageCause = {}));
var EArgumentType;
(function (EArgumentType) {
    EArgumentType[EArgumentType["INT"] = 0] = "INT";
    EArgumentType[EArgumentType["FLOAT"] = 1] = "FLOAT";
    EArgumentType[EArgumentType["BOOL"] = 2] = "BOOL";
    EArgumentType[EArgumentType["RELATIVE_FLOAT"] = 3] = "RELATIVE_FLOAT";
    EArgumentType[EArgumentType["POSITION"] = 4] = "POSITION";
    EArgumentType[EArgumentType["FLOAT_POSITION"] = 5] = "FLOAT_POSITION";
    EArgumentType[EArgumentType["STRING"] = 6] = "STRING";
    EArgumentType[EArgumentType["MESSAGE"] = 7] = "MESSAGE";
    EArgumentType[EArgumentType["JSON"] = 8] = "JSON";
    EArgumentType[EArgumentType["ENTITY"] = 9] = "ENTITY";
    EArgumentType[EArgumentType["PLAYER"] = 10] = "PLAYER";
    EArgumentType[EArgumentType["ENUM"] = 11] = "ENUM";
    EArgumentType[EArgumentType["STRING_ENUM"] = 12] = "STRING_ENUM";
    EArgumentType[EArgumentType["LITERAL"] = 13] = "LITERAL";
})(EArgumentType || (EArgumentType = {}));
EItemAnimation.NONE = 0;
EItemAnimation.EAT = 1;
EItemAnimation.DRINK = 2;
EItemAnimation.BLOCK = 3;
EItemAnimation.CAMERA = 5;
EItemAnimation.SPEAR = 6;
EItemAnimation.CROSSBOW = 9;
ETileEntityType.NETHER_REACTOR = 3;
ETileEntityType.SIGN = 4;
ETileEntityType.MOB_SPAWNER = 5;
ETileEntityType.SKULL = 6;
ETileEntityType.FLOWER_POT = 7;
ETileEntityType.ENCHANTING_TABLE = 9;
ETileEntityType.DAYLIGHT_DETECTOR = 10;
ETileEntityType.MUSIC_BLOCK = 11;
ETileEntityType.COMPARATOR = 12;
ETileEntityType.DROPPER = 14;
ETileEntityType.ITEM_FRAME = 17;
ETileEntityType.PISTON = 18;
ETileEntityType.CHALKBOARD = 20;
ETileEntityType.END_PORTAL = 22;
ETileEntityType.END_GATEWAY = 24;
ETileEntityType.COMMAND_BLOCK = 26;
ETileEntityType.BED = 27;
ETileEntityType.BANNER = 28;
ETileEntityType.STRUCTURE_BLOCK = 32;
ETileEntityType.CHEMISTRY_TABLE = 34;
ETileEntityType.CONDUIT_BLOCK = 35;
ETileEntityType.JIGSAW = 36;
ETileEntityType.BLAST_FURNACE = 38;
ETileEntityType.SMOKER = 39;
ETileEntityType.BELL = 40;
ETileEntityType.CAMPFIRE = 41;
ETileEntityType.BARREL = 42;
ETileEntityType.BEEHIVE = 43;
ETileEntityType.LODESTONE = 44;
var ModCallbacks = WRAP_JAVA("vsdum.kex.common.ModCallbacks");
ModCallbacks.specifyModDir("".concat(__dir__, "/"));
Callback.addCallback("LevelDisplayed", function () {
    return ModCallbacks.onLevelDisplayed();
});
Callback.addCallback("LevelSelected", function () {
    return ModCallbacks.onLevelSelected();
});
Callback.addCallback("LevelLeft", function () {
    return ModCallbacks.onLevelLeft();
});
Callback.addCallback("NativeGuiChanged", function (screenName) {
    return ModCallbacks.onNativeGuiChanged(screenName);
});
Callback.addCallback("LocalTick", function () {
    return ModCallbacks.onLocalTick();
});
Callback.addCallback("ItemIconOverride", function (item) {
    return ModCallbacks.onIconOverride(item.id);
});
Callback.addCallback("ModsLoaded", function () {
    return ModCallbacks.onModsLoaded();
});
var BlockEvents = WRAP_JAVA("vsdum.kex.japi.blocks.BlockEvents");
(function () {
    Block.__getBlockDropViaItem = Block.getBlockDropViaItem;
    Block.getBlockDropViaItem = function (block, item, coords, region) {
        var _a;
        var result = Block.__getBlockDropViaItem(block, item, coords, region);
        if (result == null) {
            return result;
        }
        var iter = BlockEvents.getDrops(block.id, block.data, region.getDimension(), item.id, item.count, item.data, (_a = item.extra) !== null && _a !== void 0 ? _a : null, coords.x, coords.y, coords.z).iterator();
        while (iter.hasNext()) {
            var stack = iter.next();
            result.push([stack.id, stack.count, stack.data, stack.extra]);
        }
        return result;
    };
})();
Callback.addCallback("BlockEventEntityInside", function (coords, block, entity) {
    return BlockEvents.entityInside(block.id, block.data, Entity.getDimension(entity), coords.x, coords.y, coords.z, entity);
});
Callback.addCallback("BlockEventNeighbourChange", function (coords, block, changedCoords, region) {
    return BlockEvents.neighborChanged(block.id, block.data, region.getDimension(), coords.x, coords.y, coords.z, changedCoords.x, changedCoords.y, changedCoords.z);
});
(function () {
    Block.__getPlaceFunc = Block.getPlaceFunc;
    Block.getPlaceFunc = function (blockID) {
        var func = Block.__getPlaceFunc(blockID);
        return typeof func === "undefined" ? func : function (coords, item, block, player, region) {
            var _a;
            BlockEvents.onPlace(coords.x, coords.y, coords.z, item.id, item.count, item.data, (_a = item.extra) !== null && _a !== void 0 ? _a : null, block.id, block.data, player, region.getDimension(), blockID);
            return func(coords, item, block, player, region);
        };
    };
})();
Callback.addCallback("PopBlockResources", function (coords, block, r, i, region) {
    return BlockEvents.popResources(coords.x, coords.y, coords.z, region.getDimension(), block.id, block.data);
});
var ItemEvents = WRAP_JAVA("vsdum.kex.japi.items.ItemEvents");
Callback.addCallback("ItemDispensed", function (coords, item, region, slot) {
    var _a;
    return ItemEvents.onDispense(coords.x, coords.y, coords.z, coords.side, coords.vec.x, coords.vec.y, coords.vec.z, item.id, item.count, item.data, (_a = item.extra) !== null && _a !== void 0 ? _a : null, region.getDimension(), slot);
});
Callback.addCallback("ItemUsingReleased", function (item, ticks, player) {
    var _a;
    return ItemEvents.onReleaseUsing(item.id, item.count, item.data, (_a = item.extra) !== null && _a !== void 0 ? _a : null, ticks, player);
});
Callback.addCallback("ItemIconOverride", function (item, isModUI) {
    var _a;
    return ItemEvents.getIcon(item.id, item.count, item.data, (_a = item.extra) !== null && _a !== void 0 ? _a : null, isModUI);
});
Callback.addCallback("ItemUsingComplete", function (item, player) {
    var _a;
    return ItemEvents.onCompleteUsing(item.id, item.count, item.data, (_a = item.extra) !== null && _a !== void 0 ? _a : null, player);
});
Callback.addCallback("ItemUseNoTarget", function (item, player) {
    var _a;
    return ItemEvents.onUseNoTarget(item.id, item.count, item.data, (_a = item.extra) !== null && _a !== void 0 ? _a : null, player);
});
Callback.addCallback("ProjectileHit", function (projectile, item, target) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return ItemEvents.onProjectileHit(projectile, item.id, item.count, item.data, (_a = item.extra) !== null && _a !== void 0 ? _a : null, target.x, target.y, target.z, target.entity, (_c = (_b = target.coords) === null || _b === void 0 ? void 0 : _b.x) !== null && _c !== void 0 ? _c : 0, (_e = (_d = target.coords) === null || _d === void 0 ? void 0 : _d.y) !== null && _e !== void 0 ? _e : 0, (_g = (_f = target.coords) === null || _f === void 0 ? void 0 : _f.z) !== null && _g !== void 0 ? _g : 0, (_j = (_h = target.coords) === null || _h === void 0 ? void 0 : _h.side) !== null && _j !== void 0 ? _j : 0);
});
Callback.addCallback("ItemUse", function (coords, item, block, ie, player) {
    var _a;
    if (!Game.isActionPrevented()) {
        BlockEvents.onUse(block.id, block.data, Entity.getDimension(player), coords.x, coords.y, coords.z, player, coords.side, coords.vec.x, coords.vec.y, coords.vec.z);
        ItemEvents.onUse(coords.x, coords.y, coords.z, coords.side, coords.vec.x, coords.vec.y, coords.vec.z, item.id, item.count, item.data, (_a = item.extra) !== null && _a !== void 0 ? _a : null, block.id, block.data, player);
    }
});
var Item;
(function (Item) {
    function createFoodItem(nameID, name, texture, params) {
        var _a, _b;
        var commonParamsObj = {stack: 64};
        params !== null && params !== void 0 ? params : (params = {});
        if (typeof params.stack === "number" && params.stack > 0) {
            commonParamsObj.stack = params.stack;
            delete params.stack;
        }
        if (typeof params.isTech === "boolean") {
            commonParamsObj.isTech = params.isTech;
            delete params.isTech;
        }
        var result = Item.createItem(nameID, name, texture, commonParamsObj);
        if (typeof params.food === "number") {
            params.nutrition = Math.max(params.food, 1);
            delete params.food;
        }
        (_a = params.nutrition) !== null && _a !== void 0 ? _a : (params.nutrition = 1);
        (_b = params.saturation_modifier) !== null && _b !== void 0 ? _b : (params.saturation_modifier = "normal");
        var isMeat = false;
        if (typeof params.is_meat === "boolean") {
            isMeat = params.is_meat;
            delete params.is_meat;
        }
        result.setUseAnimation(1);
        result.setMaxUseDuration(32);
        result.setProperties(JSON.stringify({use_animation: "eat", use_duration: 32, food: {nutrition: params.nutrition, saturation_modifier: params.saturation_modifier, is_meat: isMeat}, components: {"minecraft:food": params}}));
        return result;
    }
    Item.createFoodItem = createFoodItem;
})(Item || (Item = {}));
var ItemsModule = WRAP_JAVA("vsdum.kex.modules.ItemsModule");
var ItemFactoryHelper = WRAP_JAVA("vsdum.kex.util.ItemFactoryHelper");
var ToolsModule = WRAP_JAVA("vsdum.kex.modules.ToolsModule");
var Item;
(function (Item) {
    function createSwordItem(id, name, texture, params) {
        var _a;
        var _b, _c;
        var materialName = "";
        if (typeof params.tier === "object") {
            materialName = "__unnamedToolMaterial".concat(ToolAPI.unnamedMaterialNum++);
            ToolAPI.addToolMaterial(materialName, params.tier);
        } else {
            materialName = params.tier;
        }
        var tier = ToolsModule.getTierByName(materialName);
        if (tier == null) {
            materialName = "wood";
            tier = ToolsModule.getTierByName(materialName);
        }
        ToolsModule.registerSword(ItemID[id], id, typeof name === "string" ? name : "<unnamed sword>", typeof texture.name === "string" ? texture.name : "missing_item", typeof texture.meta === "number" && texture.meta > 0 ? texture.meta : typeof texture.data === "number" && texture.data > 0 ? texture.data : 0, tier, typeof params.isTech === "boolean" ? params.isTech : false);
        if (typeof params.stack === "number" && params.stack > 1) {
            Item.getItemById(id).setMaxStackSize(params.stack);
        }
        (_a = (_b = ToolAPI.toolData)[_c = ItemID[id]]) !== null && _a !== void 0 ? _a : (_b[_c] = {toolMaterial: ToolAPI.objectFromTier(tier, materialName), isWeapon: true, blockMaterials: ToolAPI.toolBlockTypes.sword});
    }
    Item.createSwordItem = createSwordItem;
    function createAxeItem(id, name, texture, params) {
        var _a;
        var _b, _c;
        var materialName = "";
        if (typeof params.tier === "object") {
            materialName = "__unnamedToolMaterial".concat(ToolAPI.unnamedMaterialNum++);
            ToolAPI.addToolMaterial(materialName, params.tier);
        } else {
            materialName = params.tier;
        }
        var tier = ToolsModule.getTierByName(materialName);
        if (tier == null) {
            materialName = "wood";
            tier = ToolsModule.getTierByName(materialName);
        }
        ToolsModule.registerAxe(ItemID[id], id, typeof name === "string" ? name : "<unnamed axe>", typeof texture.name === "string" ? texture.name : "missing_item", typeof texture.meta === "number" && texture.meta > 0 ? texture.meta : typeof texture.data === "number" && texture.data > 0 ? texture.data : 0, tier, typeof params.isTech === "boolean" ? params.isTech : false);
        if (typeof params.stack === "number" && params.stack > 1) {
            Item.getItemById(id).setMaxStackSize(params.stack);
        }
        (_a = (_b = ToolAPI.toolData)[_c = ItemID[id]]) !== null && _a !== void 0 ? _a : (_b[_c] = {toolMaterial: ToolAPI.objectFromTier(tier, materialName), isWeapon: false, blockMaterials: ToolAPI.toolBlockTypes.axe});
    }
    Item.createAxeItem = createAxeItem;
    function createPickaxeItem(id, name, texture, params) {
        var _a;
        var _b, _c;
        var materialName = "";
        if (typeof params.tier === "object") {
            materialName = "__unnamedToolMaterial".concat(ToolAPI.unnamedMaterialNum++);
            ToolAPI.addToolMaterial(materialName, params.tier);
        } else {
            materialName = params.tier;
        }
        var tier = ToolsModule.getTierByName(materialName);
        if (tier == null) {
            materialName = "wood";
            tier = ToolsModule.getTierByName(materialName);
        }
        ToolsModule.registerPickaxe(ItemID[id], id, typeof name === "string" ? name : "<unnamed pickaxe>", typeof texture.name === "string" ? texture.name : "missing_item", typeof texture.meta === "number" && texture.meta > 0 ? texture.meta : typeof texture.data === "number" && texture.data > 0 ? texture.data : 0, tier, typeof params.isTech === "boolean" ? params.isTech : false);
        if (typeof params.stack === "number" && params.stack > 1) {
            Item.getItemById(id).setMaxStackSize(params.stack);
        }
        (_a = (_b = ToolAPI.toolData)[_c = ItemID[id]]) !== null && _a !== void 0 ? _a : (_b[_c] = {toolMaterial: ToolAPI.objectFromTier(tier, materialName), isWeapon: false, blockMaterials: ToolAPI.toolBlockTypes.pickaxe});
    }
    Item.createPickaxeItem = createPickaxeItem;
    function createShovelItem(id, name, texture, params) {
        var _a;
        var _b, _c;
        var materialName = "";
        if (typeof params.tier === "object") {
            materialName = "__unnamedToolMaterial".concat(ToolAPI.unnamedMaterialNum++);
            ToolAPI.addToolMaterial(materialName, params.tier);
        } else {
            materialName = params.tier;
        }
        var tier = ToolsModule.getTierByName(materialName);
        if (tier == null) {
            materialName = "wood";
            tier = ToolsModule.getTierByName(materialName);
        }
        ToolsModule.registerShovel(ItemID[id], id, typeof name === "string" ? name : "<unnamed shovel>", typeof texture.name === "string" ? texture.name : "missing_item", typeof texture.meta === "number" && texture.meta > 0 ? texture.meta : typeof texture.data === "number" && texture.data > 0 ? texture.data : 0, tier, typeof params.isTech === "boolean" ? params.isTech : false);
        if (typeof params.stack === "number" && params.stack > 1) {
            Item.getItemById(id).setMaxStackSize(params.stack);
        }
        (_a = (_b = ToolAPI.toolData)[_c = ItemID[id]]) !== null && _a !== void 0 ? _a : (_b[_c] = {toolMaterial: ToolAPI.objectFromTier(tier, materialName), isWeapon: false, blockMaterials: ToolAPI.toolBlockTypes.shovel});
    }
    Item.createShovelItem = createShovelItem;
    function createHoeItem(id, name, texture, params) {
        var _a;
        var _b, _c;
        var materialName = "";
        if (typeof params.tier === "object") {
            materialName = "__unnamedToolMaterial".concat(ToolAPI.unnamedMaterialNum++);
            ToolAPI.addToolMaterial(materialName, params.tier);
        } else {
            materialName = params.tier;
        }
        var tier = ToolsModule.getTierByName(materialName);
        if (tier == null) {
            materialName = "wood";
            tier = ToolsModule.getTierByName(materialName);
        }
        ToolsModule.registerHoe(ItemID[id], id, typeof name === "string" ? name : "<unnamed hoe>", typeof texture.name === "string" ? texture.name : "missing_item", typeof texture.meta === "number" && texture.meta > 0 ? texture.meta : typeof texture.data === "number" && texture.data > 0 ? texture.data : 0, tier, typeof params.isTech === "boolean" ? params.isTech : false);
        if (typeof params.stack === "number" && params.stack > 1) {
            Item.getItemById(id).setMaxStackSize(params.stack);
        }
        (_a = (_b = ToolAPI.toolData)[_c = ItemID[id]]) !== null && _a !== void 0 ? _a : (_b[_c] = {toolMaterial: ToolAPI.objectFromTier(tier, materialName), isWeapon: false, blockMaterials: ToolAPI.toolBlockTypes.hoe});
    }
    Item.createHoeItem = createHoeItem;
    function createShearsItem(id, name, texture, params) {
        var _a, _b;
        var _c, _d;
        var materialName = "";
        if (typeof params.tier !== "undefined") {
            if (typeof params.tier === "object") {
                materialName = "__unnamedToolMaterial".concat(ToolAPI.unnamedMaterialNum++);
                ToolAPI.addToolMaterial(materialName, params.tier);
            } else {
                materialName = params.tier;
            }
        }
        var tierOrDurability = typeof params.tier !== "undefined" ? ((_a = ToolsModule.getTierByName(materialName)) !== null && _a !== void 0 ? _a : ToolsModule.getTierByName("iron")) : typeof params.durability === "number" && params.durability > 0 ? params.durability : 238;
        if (ToolsModule.getTierByName(materialName) == null) {
            materialName = "iron";
        }
        ToolsModule.registerShears(ItemID[id], id, typeof name === "string" ? name : "<unnamed shears>", typeof texture.name === "string" ? texture.name : "missing_item", typeof texture.meta === "number" && texture.meta > 0 ? texture.meta : typeof texture.data === "number" && texture.data > 0 ? texture.data : 0, tierOrDurability, typeof params.isTech === "boolean" ? params.isTech : false);
        if (typeof params.stack === "number" && params.stack > 1) {
            Item.getItemById(id).setMaxStackSize(params.stack);
        }
        Item.registerUseFunctionForID(ItemID[id], function (coords, item, block, player) {
            return ToolsModule.useCustomShearsOn(coords.x, coords.y, coords.z, coords.side, coords.relative.x, coords.relative.y, coords.relative.z, player);
        });
        (_b = (_c = ToolAPI.toolData)[_d = ItemID[id]]) !== null && _b !== void 0 ? _b : (_c[_d] = {toolMaterial: typeof tierOrDurability === "number" ? {durability: tierOrDurability, name: materialName} : ToolAPI.objectFromTier(tierOrDurability, materialName), isWeapon: false, blockMaterials: ToolAPI.toolBlockTypes.shears});
    }
    Item.createShearsItem = createShearsItem;
    function createFlintAndSteelItem(id, name, texture, params) {
        var _a, _b;
        params !== null && params !== void 0 ? params : (params = {});
        (_a = params.stack) !== null && _a !== void 0 ? _a : (params.stack = 1);
        (_b = params.durability) !== null && _b !== void 0 ? _b : (params.durability = 64);
        ToolsModule.registerFlintAndSteel(ItemID[id], id, typeof name === "string" ? name : "<unnamed flint and steel>", typeof texture.name === "string" ? texture.name : "missing_item", typeof texture.meta === "number" && texture.meta > 0 ? texture.meta : typeof texture.data === "number" && texture.data > 0 ? texture.data : 0, params.durability, typeof params.isTech === "boolean" ? params.isTech : false);
        if (typeof params.stack === "number" && params.stack > 1) {
            Item.getItemById(id).setMaxStackSize(params.stack);
        }
        Item.registerUseFunctionForID(ItemID[id], function (coords, item, block, player) {
            return ToolsModule.useCustomFlintAndSteelOn(coords.relative.x, coords.relative.y, coords.relative.z, coords.side, coords.relative.x, coords.relative.y, coords.relative.z, player);
        });
    }
    Item.createFlintAndSteelItem = createFlintAndSteelItem;
    function createCustomTool(id, name, texture, params, toolParams, numericId) {
        var _a, _b;
        var _c, _d;
        var materialName = "";
        if (typeof params.tier === "object") {
            materialName = "__unnamedToolMaterial".concat(ToolAPI.unnamedMaterialNum++);
            ToolAPI.addToolMaterial(materialName, params.tier);
        } else {
            materialName = params.tier;
        }
        var tier = ToolsModule.getTierByName(materialName);
        if (tier == null) {
            materialName = "wood";
            tier = ToolsModule.getTierByName(materialName);
        }
        var blockMaterialsArr = null;
        if (typeof toolParams === "object" && typeof toolParams.blockMaterials === "object") {
            blockMaterialsArr = [];
            for (var blockMaterial in toolParams.blockMaterials) {
                toolParams.blockMaterials[blockMaterial] == true && blockMaterialsArr.push(blockMaterial);
            }
        }
        numericId = typeof numericId !== "undefined" ? numericId : ItemID[id];
        ToolsModule.registerCustomTool(numericId, id, typeof name === "string" ? name : "<unnamed custom tool>", typeof texture.name === "string" ? texture.name : "missing_item", typeof texture.meta === "number" && texture.meta > 0 ? texture.meta : typeof texture.data === "number" && texture.data > 0 ? texture.data : 0, tier, typeof params.isTech === "boolean" ? params.isTech : false, typeof toolParams === "object" && typeof toolParams.isWeapon === "boolean" ? toolParams.isWeapon : false, blockMaterialsArr, typeof toolParams === "object" && typeof toolParams.brokenId === "number" && toolParams.brokenId != 0 ? toolParams.brokenId : 0, typeof toolParams === "object" && typeof toolParams.damage === "number" && toolParams.damage > 0 ? toolParams.damage : 0, typeof toolParams.enchantType === "number" ? toolParams.enchantType : EEnchantType.ALL, typeof toolParams === "object" ? toolParams : {});
        if (typeof params.stack === "number" && params.stack > 1) {
            Item.getItemById(id).setMaxStackSize(params.stack);
        }
        if (typeof toolParams === "object" && typeof toolParams.getAttackDamageBonus === "function") {
            ToolsModule.enableDynamicDamageFor(numericId);
        }
        toolParams !== null && toolParams !== void 0 ? toolParams : (toolParams = {});
        (_a = toolParams.toolMaterial) !== null && _a !== void 0 ? _a : (toolParams.toolMaterial = ToolAPI.objectFromTier(tier, materialName));
        (_b = (_c = ToolAPI.toolData)[_d = ItemID[id]]) !== null && _b !== void 0 ? _b : (_c[_d] = toolParams);
    }
    Item.createCustomTool = createCustomTool;
})(Item || (Item = {}));
var ToolAPI;
(function (ToolAPI) {
    ToolAPI.toolBlockTypes = {sword: {}, axe: {}, pickaxe: {}, shovel: {}, hoe: {}, shears: {}};
    function objectFromTier(tier, name) {
        return {damage: tier.getAttackDamageBonus(), durability: tier.getUses(), efficiency: tier.getSpeed(), enchantability: tier.getEnchantmentValue(), level: tier.getLevel(), name: name};
    }
    ToolAPI.objectFromTier = objectFromTier;
})(ToolAPI || (ToolAPI = {}));
ToolAPI.unnamedMaterialNum = 0;
ToolAPI.ToolType = {sword: {__flag: "__sword"}, axe: {__flag: "__axe"}, pickaxe: {__flag: "__pickaxe"}, shovel: {__flag: "__shovel"}, hoe: {__flag: "__hoe"}};
ToolAPI.addBlockMaterial = function (name, breakingMultiplier) {
    return ToolsModule.addBlockMaterial(name, breakingMultiplier);
};
ToolAPI.addToolMaterial = function (name, material) {
    if (ToolsModule.getTierByName(name) == null) {
        ToolAPI.toolMaterials[name] = ToolAPI.objectFromTier(new ToolsModule.ItemTier(name, Math.floor(material.level) || 0, Math.floor(material.durability) || 1, Math.floor(material.efficiency) || 1, Math.floor(material.damage) || 1, Math.floor(material.enchantability) || 14), name);
    } else {
        Logger.Log("[KEX-ToolAPI] Tool material with name '".concat(name, "' has already been registered before! Skipping..."), "WARNING");
    }
};
ToolAPI.dropExpOrbs = function (x, y, z, value, blockSource) {
    return (blockSource || BlockSource.getCurrentClientRegion()).spawnExpOrbs(x, y, z, value);
};
ToolAPI.getBlockData = function (blockID) {
    var material = ToolAPI.getBlockMaterial(blockID);
    var data = ToolsModule.getBlockData(blockID);
    return {material: material, level: data.destroyLevel, isNative: data.isNative};
};
ToolAPI.getBlockDestroyLevel = function (blockID) {
    return ToolsModule.getBlockDestroyLevel(blockID);
};
ToolAPI.getBlockMaterial = function (blockID) {
    var materialName = ToolsModule.getBlockMaterialName(blockID);
    return materialName == null ? null : {name: String(materialName), multiplier: ToolsModule.getBlockMaterialBreakingMultiplier(materialName)};
};
ToolAPI.getBlockMaterialName = function (blockID) {
    return String(ToolsModule.getBlockMaterialName(blockID));
};
ToolAPI.registerBlockDiggingLevel = function (blockID, level) {
    return ToolsModule.setBlockDestroyLevel(blockID, level);
};
ToolAPI.registerBlockMaterial = function (blockID, materialName, level, isNative) {
    return ToolsModule.setBlockData(blockID, materialName, level || 0, isNative || false);
};
ToolAPI.resetEngine = function () {
};
ToolAPI.registerTool = function (id, toolMaterial, blockMaterials, params) {
    var _a, _b, _c, _d;
    params !== null && params !== void 0 ? params : (params = {});
    (_a = params.brokenId) !== null && _a !== void 0 ? _a : (params.brokenId = 0);
    (_b = params.damage) !== null && _b !== void 0 ? _b : (params.damage = 0);
    (_c = params.blockMaterials) !== null && _c !== void 0 ? _c : (params.blockMaterials = {});
    if (Array.isArray(blockMaterials)) {
        blockMaterials.forEach(function (materialName) {
            return params.blockMaterials[materialName] = true;
        });
    }
    var materialName = "";
    if (typeof toolMaterial === "object") {
        if (typeof toolMaterial.name === "string") {
            if (ToolsModule.getTierByName(toolMaterial.name) == null) {
                ToolAPI.addToolMaterial(toolMaterial.name, toolMaterial);
            }
            materialName = toolMaterial.name;
        } else {
            materialName = "__unnamedToolMaterial".concat(ToolAPI.unnamedMaterialNum++);
            ToolAPI.addToolMaterial(materialName, toolMaterial);
        }
    } else {
        if (typeof toolMaterial === "string") {
            materialName = toolMaterial;
        }
    }
    var tier = ToolsModule.getTierByName(materialName);
    if (tier == null) {
        materialName = "wood";
        tier = ToolsModule.getTierByName(materialName);
    }
    params.toolMaterial = {level: tier.getLevel(), durability: tier.getUses(), efficiency: tier.getSpeed(), damage: tier.getAttackDamageBonus(), enchantability: tier.getEnchantmentValue(), name: materialName};
    (_d = params.calcDestroyTime) !== null && _d !== void 0 ? _d : (params.calcDestroyTime = function (to, c, b, ti, defaultTime) {
        return defaultTime;
    });
    ToolAPI.toolData[id] = params;
    var factory = ItemFactoryHelper.killItem(id);
    if (factory == null) {
        throw new java.lang.IllegalStateException("You cannot call ToolAPI.registerTool before creating the item itself!");
    }
    switch (params.__flag) {
      case "__sword":
        ToolsModule.registerSword(id, factory.nameId, factory.nameToDisplay, factory.iconName, factory.iconIndex, tier);
        break;
      case "__axe":
        ToolsModule.registerAxe(id, factory.nameId, factory.nameToDisplay, factory.iconName, factory.iconIndex, tier);
        break;
      case "__pickaxe":
        ToolsModule.registerPickaxe(id, factory.nameId, factory.nameToDisplay, factory.iconName, factory.iconIndex, tier);
        break;
      case "__shovel":
        ToolsModule.registerShovel(id, factory.nameId, factory.nameToDisplay, factory.iconName, factory.iconIndex, tier);
        break;
      case "__hoe":
        ToolsModule.registerHoe(id, factory.nameId, factory.nameToDisplay, factory.iconName, factory.iconIndex, tier);
        break;
      case "__shears":
        ToolsModule.registerShears(id, factory.nameId, factory.nameToDisplay, factory.iconName, factory.iconIndex, tier);
        break;
      default:
        Item.createCustomTool(String(factory.nameId), String(factory.nameToDisplay), {name: String(factory.iconName), meta: factory.iconIndex}, {stack: factory.stack, tier: materialName}, params, id);
    }
    factory.applyOldFactoryProperties(id);
};
ToolAPI.registerSword = function (id, toolMaterial, params) {
    var _a, _b;
    params !== null && params !== void 0 ? params : (params = {});
    params.isWeapon = true;
    (_a = params.damage) !== null && _a !== void 0 ? _a : (params.damage = 4);
    var materialName = "";
    if (typeof toolMaterial === "object") {
        materialName = "__unnamedToolMaterial".concat(ToolAPI.unnamedMaterialNum++);
        ToolAPI.addToolMaterial(materialName, toolMaterial);
    }
    var tier = (_b = ToolsModule.getTierByName(materialName)) !== null && _b !== void 0 ? _b : ToolsModule.getTierByName("wood");
    var factory = ItemFactoryHelper.killItem(id);
    if (Object.keys(params).length - Number(typeof params.__flag !== "undefined") > 1) {
        Item.createCustomTool(String(factory.nameId), String(factory.nameToDisplay), {name: String(factory.iconName), meta: factory.iconIndex}, {stack: factory.stack, tier: materialName}, params);
    } else {
        ToolsModule.registerSword(id, factory.nameId, factory.nameToDisplay, factory.iconName, factory.iconIndex, tier);
    }
};
ToolAPI.startDestroyHook = function () {
};
ToolAPI.destroyBlockHook = function (c, b, i, p) {
    return ToolsModule.destroyBlockHook(c, b, i, p);
};
ToolAPI.playerAttackHook = function (a, v, i) {
    return ToolsModule.playerAttackHook(a, v, i);
};
ToolAPI.getToolData = function (itemID) {
    return typeof ToolAPI.toolData[itemID] !== "undefined" ? ToolAPI.toolData[itemID] : null;
};
ToolAPI.getToolLevel = function (itemID) {
    return typeof ToolAPI.toolData[itemID] !== "undefined" && !ToolAPI.toolData[itemID].isWeapon ? ToolsModule.getToolLevel(itemID) : 0;
};
ToolAPI.getToolLevelViaBlock = function (itemID, blockID) {
    return typeof ToolAPI.toolData[itemID] !== "undefined" && !ToolAPI.toolData[itemID].isWeapon ? ToolsModule.getToolLevelViaBlock(itemID, blockID) : 0;
};
Block.setDestroyLevelForID = function (blockID, level) {
    return ToolAPI.registerBlockDiggingLevel(blockID, level);
};
(function () {
    for (var materialName in ToolAPI.blockMaterials) {
        ToolAPI.addBlockMaterial(materialName, ToolAPI.blockMaterials[materialName].multiplier);
    }
    for (var materialName in ToolAPI.toolMaterials) {
        ToolAPI.addToolMaterial(materialName, ToolAPI.toolMaterials[materialName]);
    }
    for (var id in ToolAPI.toolData) {
        var data = ToolAPI.toolData[id];
        delete ToolAPI.toolData[id];
        var numericId = Number(id);
        if (!IDRegistry.isVanilla(numericId)) {
            ToolAPI.registerTool(numericId, data.toolMaterial, null, data);
        }
    }
    for (var id in ToolAPI.blockData) {
        var data = ToolAPI.blockData[id];
        delete ToolAPI.blockData[id];
        var numericId = Number(id);
        if (!IDRegistry.isVanilla(numericId)) {
            ToolAPI.registerBlockMaterial(numericId, data.material.name, data.level, typeof data.isNative === "boolean" ? data.isNative : false);
        }
    }
    var json = FileTools.ReadJSON("".concat(__dir__, "/data/toolapi_data.json"));
    for (var materialName in json.materials) {
        ToolAPI.registerBlockMaterialAsArray(materialName, json.materials[materialName].map(function (val) {
            return typeof val === "number" ? val : VanillaTileID[val];
        }), true);
    }
    json.destroy_levels.forEach(function (ids, level) {
        ids.forEach(function (id) {
            var numericId = typeof id === "number" ? id : VanillaTileID[id];
            Block.setDestroyLevelForID(numericId, level + 1);
        });
    });
    var _loop_1 = function (toolType) {
        json.tool_block_types[toolType].forEach(function (materialName) {
            return ToolAPI.toolBlockTypes[toolType][materialName] = true;
        });
    };
    for (var toolType in json.tool_block_types) {
        _loop_1(toolType);
    }
    for (var tier in json.vanilla_tools) {
        for (var toolType in json.vanilla_tools[tier]) {
            ToolAPI.toolData[json.vanilla_tools[tier][toolType]] = {toolMaterial: ToolAPI.objectFromTier(ToolsModule.getTierByName(tier), tier), isWeapon: toolType === "sword", blockMaterials: ToolAPI.toolBlockTypes[toolType], damage: json.tool_types_base_damage[toolType], isNative: true, brokenId: 0, calcDestroyTime: function (to, c, b, ti, defaultTime) {
                return defaultTime;
            }};
        }
    }
})();
var BlocksModule = WRAP_JAVA("vsdum.kex.modules.BlocksModule");
Block.registerComparatorSignalFunctionForID = function (id, func, isCallbackForced) {
    return BlocksModule.registerComparatorSignalCallbackJS(id, func, isCallbackForced !== null && isCallbackForced !== void 0 ? isCallbackForced : false);
};
Block.registerComparatorSignalFunction = function (id, func, isCallbackForced) {
    var numericID = Block.getNumericId(id);
    if (numericID == -1) {
        return;
    }
    Block.registerComparatorSignalFunctionForID(numericID, func, isCallbackForced);
};
Block.registerEntityStepOnFunctionForID = function (id, func) {
    BlocksModule.registerOnStepOnCallback(id, function (world, pos, state, entity) {
        return func(pos, state, entity.getUniqueID());
    });
    return true;
};
Block.registerEntityStepOnFunction = function (id, func) {
    var numericID = Block.getNumericId(id);
    if (numericID == -1) {
        return;
    }
    return Block.registerEntityStepOnFunctionForID(numericID, func);
};
Block.registerEntityStepOffFunctionForID = function (id, func) {
    return BlocksModule.registerOnStepOffCallback(id, function (world, pos, state, entity) {
        return func(pos, state, entity.getUniqueID());
    });
};
Block.registerEntityStepOffFunction = function (id, func) {
    var numericID = Block.getNumericId(id);
    if (numericID == -1) {
        return;
    }
    Block.registerEntityStepOffFunctionForID(numericID, func);
};
Block.getLightLevel = function (id, data) {
    return BlocksModule.getLightEmission(id, data !== null && data !== void 0 ? data : 0);
};
Block.setLightLevel = function (id, data, lightLevel) {
    return typeof lightLevel === "number" ? BlocksModule.setLightEmission(id, data, lightLevel) : BlocksModule.setLightEmission(id, 0, data);
};
var Callback;
(function (Callback) {
    var _add = Callback.addCallback;
    var eventList = {};
    function invoker(name) {
        return function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (_a = eventList[name]) !== null && _a !== void 0 ? _a : (eventList[name] = []);
            var curList = eventList[name];
            curList.forEach(function (ev) {
                ev.callback.apply(ev, __spreadArray([], __read(args), false));
                if (ev.once) {
                    Callback.off(name, ev.callback);
                }
            });
        };
    }
    function add(name, info) {
        var e_1, _a;
        if (eventList[name]) {
            var newList = [];
            var notAdded = true;
            try {
                for (var _b = __values(eventList[name]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var eventInfo = _c.value;
                    if (notAdded && eventInfo.priority > info.priority) {
                        newList.push(info);
                        notAdded = false;
                    }
                    newList.push(eventInfo);
                }
            }
            catch (e_1_1) {
                e_1 = {error: e_1_1};
            }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) {
                        _a.call(_b);
                    }
                }
                finally {
                    if (e_1) {
                        throw e_1.error;
                    }
                }
            }
            if (notAdded) {
                newList.push(info);
            }
            eventList[name] = newList;
        } else {
            eventList[name] = [info];
            _add(name, invoker(name), -1);
        }
    }
    Callback.on = function (name, callback, priority) {
        return add(name, {callback: callback, priority: priority, once: false});
    };
    Callback.once = function (name, callback, priority) {
        return add(name, {callback: callback, priority: priority, once: true});
    };
    Callback.off = function (name, callback) {
        return eventList[name] = eventList[name].filter(function (event) {
            return event.callback != callback;
        });
    };
})(Callback || (Callback = {}));
Callback.addCallback = Callback.on;
var CommandsModule = WRAP_JAVA("vsdum.kex.modules.CommandsModule");
var KEXCommandBuilder = (function () {
    function KEXCommandBuilder(name, permissionLevel) {
        this.name = name;
        this.permissionLevel = permissionLevel;
        this.overloads = [];
        this.descriptionTranslations = {};
    }
    KEXCommandBuilder.prototype.addOverload = function (args, callback) {
        args.forEach(function (arg) {
            if (typeof arg.type === "number") {
                if (arg.type >= 0 && arg.type <= 13) {
                    arg.type = KEXCommandBuilder.typeNames[arg.type];
                } else {
                    throw new java.lang.IllegalArgumentException("Command argument type ".concat(arg.type, " does not exist!"));
                }
            }
        });
        this.overloads.push({args: args, callback: callback});
        return this;
    };
    KEXCommandBuilder.prototype.setDescription = function (translations) {
        if (typeof translations === "object") {
            for (var languageCode in translations) {
                this.descriptionTranslations[languageCode] = translations[languageCode];
            }
        } else {
            if (typeof translations === "string") {
                this.descriptionTranslations["en_US"] = translations;
            }
        }
        return this;
    };
    KEXCommandBuilder.prototype.register = function () {
        var commandBase = CommandsModule.newCommand(this.name, this.permissionLevel);
        this.overloads.forEach(function (overload) {
            var node = commandBase;
            var optionalFound = false;
            overload.args.forEach(function (arg, index) {
                if (arg.optional == true) {
                    if (!optionalFound) {
                        optionalFound = true;
                    }
                    node.executes(KEXCommandBuilder.buildExecuteCallback(overload, index));
                } else {
                    if (optionalFound) {
                        throw new java.lang.IllegalArgumentException("Detected mandatory argument ".concat(arg.label, " after optional argument ").concat(overload.args[index - 1].label));
                    }
                }
                if (typeof arg.type === "string") {
                    arg.type = arg.type.toLowerCase();
                }
                var next = KEXCommandBuilder.buildArgument(arg);
                node.then(next);
                node = next;
            });
            node.executes(KEXCommandBuilder.buildExecuteCallback(overload));
        });
        commandBase.setDescription(this.descriptionTranslations);
        CommandsModule.registerCommand(commandBase);
    };
    KEXCommandBuilder.buildArgument = function (arg) {
        var _a, _b, _c, _d, _e, _f;
        switch (arg.type) {
          case "int":
          case "integer":
            return typeof arg.default !== "number" ? CommandsModule.intArg(arg.label) : CommandsModule.intArg(arg.label, Math.floor(arg.default));
          case "float":
            return typeof arg.default !== "number" ? CommandsModule.floatArg(arg.label) : CommandsModule.floatArg(arg.label, arg.default);
          case "bool":
          case "boolean":
            return typeof arg.default !== "boolean" ? CommandsModule.boolArg(arg.label) : CommandsModule.boolArg(arg.label, arg.default);
          case "relfloat":
          case "relativefloat":
            return typeof arg.default !== "number" ? CommandsModule.relativeFloatArg(arg.label) : CommandsModule.relativeFloatArg(arg.label, arg.default);
          case "pos":
          case "position":
            return typeof arg.default !== "object" ? CommandsModule.positionArg(arg.label) : CommandsModule.positionArg(arg.label, (_a = arg.default.x) !== null && _a !== void 0 ? _a : 0, (_b = arg.default.y) !== null && _b !== void 0 ? _b : 0, (_c = arg.default.z) !== null && _c !== void 0 ? _c : 0);
          case "floatpos":
          case "floatposition":
            return typeof arg.default !== "object" ? CommandsModule.floatPositionArg(arg.label) : CommandsModule.floatPositionArg(arg.label, (_d = arg.default.x) !== null && _d !== void 0 ? _d : 0, (_e = arg.default.y) !== null && _e !== void 0 ? _e : 0, (_f = arg.default.z) !== null && _f !== void 0 ? _f : 0);
          case "str":
          case "string":
            return typeof arg.default !== "string" ? CommandsModule.stringArg(arg.label) : CommandsModule.stringArg(arg.label, arg.default);
          case "msg":
          case "message":
            return CommandsModule.messageArg(arg.label);
          case "json":
            return CommandsModule.jsonArg(arg.label);
          case "entity":
            return CommandsModule.entityArg(arg.label);
          case "player":
            return CommandsModule.playerArg(arg.label);
          case "enum":
            return typeof arg.default !== "number" ? CommandsModule.enumArg(arg.label, arg.name) : CommandsModule.enumArg(arg.label, arg.name, Math.floor(arg.default));
          case "strenum":
          case "stringenum":
            return CommandsModule.stringEnumArg(arg.label, arg.name, arg.default);
          case "literal":
            return CommandsModule.literal(arg.label);
        }
    };
    KEXCommandBuilder.buildExecuteCallback = function (overload, paramsCount) {
        var _this = this;
        if (paramsCount === void 0) {
            paramsCount = overload.args.length;
        }
        return function (ctx) {
            var obj = {};
            for (var i = 0; i < paramsCount; i++) {
                var arg = overload.args[i];
                switch (arg.type) {
                  case "int":
                  case "integer":
                  case "enum":
                    obj[arg.label] = ctx.getInt(arg.label);
                    break;
                  case "float":
                    obj[arg.label] = ctx.getFloat(arg.label);
                    break;
                  case "relfloat":
                  case "relativefloat":
                    obj[arg.label] = _this.buildRelativeFloat(ctx, arg.label);
                    break;
                  case "bool":
                  case "boolean":
                    obj[arg.label] = ctx.getBool(arg.label);
                    break;
                  case "pos":
                  case "position":
                    obj[arg.label] = ctx.getPosition(arg.label);
                    break;
                  case "floatpos":
                  case "floatposition":
                    obj[arg.label] = ctx.getFloatPosition(arg.label);
                    break;
                  case "str":
                  case "string":
                  case "strenum":
                  case "stringenum":
                    obj[arg.label] = String(ctx.getString(arg.label));
                    break;
                  case "msg":
                  case "message":
                    obj[arg.label] = String(ctx.getMessage(arg.label));
                    break;
                  case "json":
                    var json = ctx.getJson(arg.label);
                    obj[arg.label] = json == null ? null : JSON.parse(String(json.toString()));
                    break;
                  case "entity":
                    var entitiesArr = [];
                    var entitiesIter = ctx.getEntities(arg.label).iterator();
                    while (entitiesIter.hasNext()) {
                        entitiesArr.push(entitiesIter.next());
                    }
                    obj[arg.label] = entitiesArr;
                    break;
                  case "player":
                    var playersArr = [];
                    var playersIter = ctx.getPlayers(arg.label).iterator();
                    while (playersIter.hasNext()) {
                        playersArr.push(playersIter.next());
                    }
                    obj[arg.label] = playersArr;
                    break;
                }
            }
            overload.callback(obj, ctx);
        };
    };
    KEXCommandBuilder.buildRelativeFloat = function (ctx, label) {
        return function (center) {
            return ctx.getRelativeFloat(label, typeof center === "number" ? center : 0);
        };
    };
    KEXCommandBuilder.typeNames = ["int", "float", "bool", "relfloat", "pos", "floatpos", "str", "msg", "json", "entity", "player", "enum", "strenum", "literal"];
    return KEXCommandBuilder;
}());
Commands.newEnum = function (enumName) {
    return CommandsModule.newEnum(enumName);
};
Commands.newStringEnum = function (enumName) {
    return CommandsModule.newStringEnum(enumName);
};
Commands.create = function (commandName, permissionLevel) {
    if (permissionLevel === void 0) {
        permissionLevel = 0;
    }
    return new KEXCommandBuilder(commandName, permissionLevel);
};
var SmithingTableRecipes = WRAP_JAVA("vsdum.kex.modules.misc.SmithingTableRecipes");
(function () {
    var recipes = FileTools.ReadJSON("".concat(__dir__, "/data/vanilla_smithing_recipes.json"));
    recipes.recipes.forEach(function (recipe) {
        return SmithingTableRecipes.addRecipe.apply(SmithingTableRecipes, __spreadArray([], __read(recipe), false));
    });
})();
Recipes.addSmithingTableRecipe = function (baseID, additionID, resultID) {
    return SmithingTableRecipes.addRecipe(baseID, additionID, resultID);
};
Recipes.removeSmithingTableRecipe = function (baseID, additionID) {
    return SmithingTableRecipes.removeRecipe(baseID, additionID);
};
Recipes.getSmithingTableRecipesByResult = function (resultID) {
    var result = [];
    var iter = SmithingTableRecipes.getRecipesByResult(resultID).iterator();
    while (iter.hasNext()) {
        result.push(iter.next());
    }
    return result;
};
Recipes.getSmithingTableRecipesByBase = function (baseID) {
    var result = [];
    var iter = SmithingTableRecipes.getRecipesByBase(baseID).iterator();
    while (iter.hasNext()) {
        result.push(iter.next());
    }
    return result;
};
Recipes.getAllSmithingTableRecipes = function () {
    var result = [];
    var iter = SmithingTableRecipes.getAllRecipes().iterator();
    while (iter.hasNext()) {
        result.push(iter.next());
    }
    return result;
};
var IntegerProperty = WRAP_JAVA("vsdum.kex.modules.states.properties.IntegerProperty");
var BooleanProperty = WRAP_JAVA("vsdum.kex.modules.states.properties.BooleanProperty");
var KEXBlockState = WRAP_JAVA("vsdum.kex.modules.states.BlockState");
var VanillaStates = WRAP_JAVA("vsdum.kex.modules.states.VanillaStates");
var BlockStates;
(function (BlockStates) {
    BlockStates.createIntegerProperty = function (name, min, max) {
        return IntegerProperty.create(name, min, max);
    };
    BlockStates.createBooleanProperty = function (name) {
        return BooleanProperty.create(name);
    };
    var AnvilDamage;
    (function (AnvilDamage) {
        AnvilDamage[AnvilDamage["UNDAMAGED"] = 0] = "UNDAMAGED";
        AnvilDamage[AnvilDamage["SLIGHTLY_DAMAGED"] = 1] = "SLIGHTLY_DAMAGED";
        AnvilDamage[AnvilDamage["VERY_DAMAGED"] = 2] = "VERY_DAMAGED";
        AnvilDamage[AnvilDamage["BROKEN"] = 3] = "BROKEN";
    })(AnvilDamage = BlockStates.AnvilDamage || (BlockStates.AnvilDamage = {}));
    var BambooLeaves;
    (function (BambooLeaves) {
        BambooLeaves[BambooLeaves["NONE"] = 0] = "NONE";
        BambooLeaves[BambooLeaves["SMALL"] = 1] = "SMALL";
        BambooLeaves[BambooLeaves["LARGE"] = 2] = "LARGE";
    })(BambooLeaves = BlockStates.BambooLeaves || (BlockStates.BambooLeaves = {}));
    var BellAttachment;
    (function (BellAttachment) {
        BellAttachment[BellAttachment["FLOOR"] = 0] = "FLOOR";
        BellAttachment[BellAttachment["CEILING"] = 1] = "CEILING";
        BellAttachment[BellAttachment["SINGLE_WALL"] = 2] = "SINGLE_WALL";
        BellAttachment[BellAttachment["DOUBLE_WALL"] = 3] = "DOUBLE_WALL";
    })(BellAttachment = BlockStates.BellAttachment || (BlockStates.BellAttachment = {}));
    var BlockColor;
    (function (BlockColor) {
        BlockColor[BlockColor["WHITE"] = 0] = "WHITE";
        BlockColor[BlockColor["ORANGE"] = 1] = "ORANGE";
        BlockColor[BlockColor["MAGENTA"] = 2] = "MAGENTA";
        BlockColor[BlockColor["LIGHT_BLUE"] = 3] = "LIGHT_BLUE";
        BlockColor[BlockColor["YELLOW"] = 4] = "YELLOW";
        BlockColor[BlockColor["LIME"] = 5] = "LIME";
        BlockColor[BlockColor["PINK"] = 6] = "PINK";
        BlockColor[BlockColor["GRAY"] = 7] = "GRAY";
        BlockColor[BlockColor["SILVER"] = 8] = "SILVER";
        BlockColor[BlockColor["CYAN"] = 9] = "CYAN";
        BlockColor[BlockColor["PURPLE"] = 10] = "PURPLE";
        BlockColor[BlockColor["BLUE"] = 11] = "BLUE";
        BlockColor[BlockColor["BROWN"] = 12] = "BROWN";
        BlockColor[BlockColor["GREEN"] = 13] = "GREEN";
        BlockColor[BlockColor["RED"] = 14] = "RED";
        BlockColor[BlockColor["BLACK"] = 15] = "BLACK";
    })(BlockColor = BlockStates.BlockColor || (BlockStates.BlockColor = {}));
    var CoralColor;
    (function (CoralColor) {
        CoralColor[CoralColor["BLUE"] = 0] = "BLUE";
        CoralColor[CoralColor["PINK"] = 1] = "PINK";
        CoralColor[CoralColor["PURPLE"] = 2] = "PURPLE";
        CoralColor[CoralColor["RED"] = 3] = "RED";
        CoralColor[CoralColor["YELLOW"] = 4] = "YELLOW";
    })(CoralColor = BlockStates.CoralColor || (BlockStates.CoralColor = {}));
    var HatchLevel;
    (function (HatchLevel) {
        HatchLevel[HatchLevel["NO_CRACKS"] = 0] = "NO_CRACKS";
        HatchLevel[HatchLevel["CRACKED"] = 1] = "CRACKED";
        HatchLevel[HatchLevel["MAX_CRACKED"] = 2] = "MAX_CRACKED";
    })(HatchLevel = BlockStates.HatchLevel || (BlockStates.HatchLevel = {}));
    var LeverDirection;
    (function (LeverDirection) {
        LeverDirection[LeverDirection["DOWN_EAST_WEST"] = 0] = "DOWN_EAST_WEST";
        LeverDirection[LeverDirection["EAST"] = 1] = "EAST";
        LeverDirection[LeverDirection["WEST"] = 2] = "WEST";
        LeverDirection[LeverDirection["SOUTH"] = 3] = "SOUTH";
        LeverDirection[LeverDirection["NORTH"] = 4] = "NORTH";
        LeverDirection[LeverDirection["UP_NORTH_SOUTH"] = 5] = "UP_NORTH_SOUTH";
        LeverDirection[LeverDirection["UP_EAST_WEST"] = 6] = "UP_EAST_WEST";
        LeverDirection[LeverDirection["DOWN_NORTH_SOUTH"] = 7] = "DOWN_NORTH_SOUTH";
    })(LeverDirection = BlockStates.LeverDirection || (BlockStates.LeverDirection = {}));
    var PillarAxis;
    (function (PillarAxis) {
        PillarAxis[PillarAxis["Y"] = 0] = "Y";
        PillarAxis[PillarAxis["X"] = 1] = "X";
        PillarAxis[PillarAxis["Z"] = 2] = "Z";
    })(PillarAxis = BlockStates.PillarAxis || (BlockStates.PillarAxis = {}));
    var PortalAxis;
    (function (PortalAxis) {
        PortalAxis[PortalAxis["UNKNOWN"] = 0] = "UNKNOWN";
        PortalAxis[PortalAxis["X"] = 1] = "X";
        PortalAxis[PortalAxis["Z"] = 2] = "Z";
    })(PortalAxis = BlockStates.PortalAxis || (BlockStates.PortalAxis = {}));
    var RailShape;
    (function (RailShape) {
        RailShape[RailShape["NORTH_SOUTH"] = 0] = "NORTH_SOUTH";
        RailShape[RailShape["EAST_WEST"] = 1] = "EAST_WEST";
        RailShape[RailShape["ASCENDING_EAST"] = 2] = "ASCENDING_EAST";
        RailShape[RailShape["ASCENDING_WEST"] = 3] = "ASCENDING_WEST";
        RailShape[RailShape["ASCENDING_NORTH"] = 4] = "ASCENDING_NORTH";
        RailShape[RailShape["ASCENDING_SOUTH"] = 5] = "ASCENDING_SOUTH";
        RailShape[RailShape["SOUTH_EAST"] = 6] = "SOUTH_EAST";
        RailShape[RailShape["SOUTH_WEST"] = 7] = "SOUTH_WEST";
        RailShape[RailShape["NORTH_WEST"] = 8] = "NORTH_WEST";
        RailShape[RailShape["NORTH_EAST"] = 9] = "NORTH_EAST";
    })(RailShape = BlockStates.RailShape || (BlockStates.RailShape = {}));
    var StalkThickness;
    (function (StalkThickness) {
        StalkThickness[StalkThickness["THIN"] = 0] = "THIN";
        StalkThickness[StalkThickness["THICK"] = 1] = "THICK";
    })(StalkThickness = BlockStates.StalkThickness || (BlockStates.StalkThickness = {}));
    var StructureBlockType;
    (function (StructureBlockType) {
        StructureBlockType[StructureBlockType["DATA"] = 0] = "DATA";
        StructureBlockType[StructureBlockType["SAVE"] = 1] = "SAVE";
        StructureBlockType[StructureBlockType["LOAD"] = 2] = "LOAD";
        StructureBlockType[StructureBlockType["CORNER"] = 3] = "CORNER";
        StructureBlockType[StructureBlockType["INVALID"] = 4] = "INVALID";
        StructureBlockType[StructureBlockType["EXPORT"] = 5] = "EXPORT";
    })(StructureBlockType = BlockStates.StructureBlockType || (BlockStates.StructureBlockType = {}));
    var StructureVoidType;
    (function (StructureVoidType) {
        StructureVoidType[StructureVoidType["VOID"] = 0] = "VOID";
        StructureVoidType[StructureVoidType["AIR"] = 1] = "AIR";
    })(StructureVoidType = BlockStates.StructureVoidType || (BlockStates.StructureVoidType = {}));
    var TorchFacing;
    (function (TorchFacing) {
        TorchFacing[TorchFacing["UNKNOWN"] = 0] = "UNKNOWN";
        TorchFacing[TorchFacing["WEST"] = 1] = "WEST";
        TorchFacing[TorchFacing["EAST"] = 2] = "EAST";
        TorchFacing[TorchFacing["NORTH"] = 3] = "NORTH";
        TorchFacing[TorchFacing["SOUTH"] = 4] = "SOUTH";
        TorchFacing[TorchFacing["TOP"] = 5] = "TOP";
    })(TorchFacing = BlockStates.TorchFacing || (BlockStates.TorchFacing = {}));
    var WallConnectionType;
    (function (WallConnectionType) {
        WallConnectionType[WallConnectionType["NONE"] = 0] = "NONE";
        WallConnectionType[WallConnectionType["SHORT"] = 1] = "SHORT";
        WallConnectionType[WallConnectionType["TALL"] = 2] = "TALL";
    })(WallConnectionType = BlockStates.WallConnectionType || (BlockStates.WallConnectionType = {}));
})(BlockStates || (BlockStates = {}));
var KEXMath;
(function (KEXMath) {
    KEXMath.Vec2f = WRAP_JAVA("vsdum.kex.util.mcmath.Vec2f");
    KEXMath.Vec3d = WRAP_JAVA("vsdum.kex.util.mcmath.Vec3d");
    KEXMath.Vec3i = WRAP_JAVA("vsdum.kex.util.mcmath.Vec3i");
    KEXMath.Direction = WRAP_JAVA("vsdum.kex.util.mcmath.Direction");
    KEXMath.BlockPos = WRAP_JAVA("vsdum.kex.util.mcmath.BlockPos");
    KEXMath.Rotation = WRAP_JAVA("vsdum.kex.util.mcmath.Rotation");
    KEXMath.Mirror = WRAP_JAVA("vsdum.kex.util.mcmath.Mirror");
})(KEXMath || (KEXMath = {}));
var LootModule = WRAP_JAVA("vsdum.kex.modules.LootModule");
var DamageModule = WRAP_JAVA("vsdum.kex.modules.DamageModule");
var ChunksModule = WRAP_JAVA("vsdum.kex.modules.ChunksModule");
var TileEntityModule = WRAP_JAVA("vsdum.kex.modules.TileEntityModule");
var BiomesModule = WRAP_JAVA("vsdum.kex.modules.BiomesModule");
var LootTableContext = WRAP_JAVA("vsdum.kex.natives.LootTableContext");
var MobEffect = WRAP_JAVA("vsdum.kex.natives.MobEffect");
var MobEffectInstance = WRAP_JAVA("vsdum.kex.natives.MobEffectInstance");
var Actor = WRAP_JAVA("vsdum.kex.natives.Actor");
var Mob = WRAP_JAVA("vsdum.kex.natives.Mob");
var KEXPlayer = WRAP_JAVA("vsdum.kex.natives.Player");
var LocalPlayer = WRAP_JAVA("vsdum.kex.natives.LocalPlayer");
var Slime = WRAP_JAVA("vsdum.kex.natives.Slime");
var FoodItemComponent = WRAP_JAVA("vsdum.kex.natives.FoodItemComponent");
var KEXBlockSource = WRAP_JAVA("vsdum.kex.natives.ExtendedBlockSource");
var ReachDistanceModifier = WRAP_JAVA("vsdum.kex.modules.misc.ReachDistanceModifier");
var CameraRollModifier = WRAP_JAVA("vsdum.kex.modules.misc.CameraRollModifier");
var GlobalContext = WRAP_JAVA("vsdum.kex.natives.GlobalContext");
var I18n = WRAP_JAVA("vsdum.kex.natives.I18n");
var TextureWorker = WRAP_JAVA("vsdum.kex.util.TextureWorker");
var ItemAnimHelper = WRAP_JAVA("vsdum.kex.util.ItemAnimHelper");
ModAPI.registerAPI("KernelExtension", {Math: KEXMath, ItemsModule: ItemsModule, LootModule: LootModule, ToolsModule: ToolsModule, DamageModule: DamageModule, CommandsModule: CommandsModule, ChunksModule: ChunksModule, TileEntityModule: TileEntityModule, BlocksModule: BlocksModule, BiomesModule: BiomesModule, BlockState: KEXBlockState, VanillaStates: VanillaStates, BlockStates: BlockStates, LootTableContext: LootTableContext, MobEffect: MobEffect, MobEffectInstance: MobEffectInstance, Actor: Actor, Mob: Mob, Player: KEXPlayer, LocalPlayer: LocalPlayer, Slime: Slime, FoodItemComponent: FoodItemComponent, BlockSource: KEXBlockSource, ReachDistanceModifier: ReachDistanceModifier, CameraRollModifier: CameraRollModifier, GlobalContext: GlobalContext, I18n: I18n, AddonUtils: AddonUtils, TextureWorker: TextureWorker, ItemAnimHelper: ItemAnimHelper, ESaturationModifier: ESaturationModifier, EDamageCause: EDamageCause, EArgumentType: EArgumentType, getKEXVersion: function () {
    return MAIN.getVersion();
}, getKEXVersionCode: function () {
    return MAIN.getVersionCode();
}});

