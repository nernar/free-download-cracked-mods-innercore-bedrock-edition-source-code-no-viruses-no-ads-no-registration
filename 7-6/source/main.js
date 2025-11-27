var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/*
 *    ___                              __  __           _ ____  _____
 *   / _ \ _   _  __ _ _ __ _ __ _   _|  \/  | ___   __| |  _ \| ____|
 *  | | | | | | |/ _` | '__| '__| | | | |\/| |/ _ \ / _` | |_) |  _|
 *  | |_| | |_| | (_| | |  | |  | |_| | |  | | (_) | (_| |  __/| |___
 *   \__\_\\__,_|\__,_|_|  |_|   \__, |_|  |_|\___/ \__,_|_|   |_____|
 *                               |___/
 *
 * Terms of use:
 *  - Forbidden to distribute the library on third-party sources
 *    without links to the official group (https://vk.com/forestry_pe)
 *  - Forbidden to change the code of this mod
 *  - Forbidden to explicitly copy the code to other libraries or mods
 *  - Allowed to use in any mod packs
 *  - Using the mod you automatically agree to the conditions described above
 *
 * Textures Author: https://vk.com/vasya.blyaa
 * @DDCompany (https://vk.com/forestry_pe)
 */
IMPORT("EnergyNet");
// IMPORT("SoundAPI");
var EntityType = Native.EntityType;
var energyTypes = [
    EnergyTypeRegistry.assureEnergyType("Eu", 1, {}),
    EnergyTypeRegistry.assureEnergyType("RF", 1 / 4, {}),
];
var directions = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 0, -1],
    [0, 0, 1],
];
var ENERGY_CONSUMPTION = +__config__.get("energyConsumption");
//TODO: update sounds
// const soundClick = new Sound("click.ogg");
// soundClick.setInPlayer();
// const levelUpSound = new Sound("levelUp.ogg");
// levelUpSound.setInPlayer();
var UpgradeType;
(function (UpgradeType) {
    UpgradeType["MODULE"] = "module";
    UpgradeType["LENS"] = "lens";
})(UpgradeType || (UpgradeType = {}));
var UpgradesManager = /** @class */ (function () {
    function UpgradesManager() {
    }
    UpgradesManager.register = function (id, desc) {
        if (!id || id < 0) {
            throw "Invalid item. Id must be > 0";
        }
        if (!desc) {
            throw "Invalid upgrade description";
        }
        if (desc.type !== UpgradeType.LENS && desc.type !== UpgradeType.MODULE) {
            throw "Invalid upgrade type";
        }
        if (this.isUpgrade(id)) {
            throw "Lens already registered";
        }
        this.upgrades[id] = desc;
    };
    UpgradesManager.getUpgrade = function (id) {
        return this.upgrades[id];
    };
    UpgradesManager.isUpgrade = function (id) {
        return !!this.upgrades[id];
    };
    UpgradesManager.isModule = function (id) {
        var _a;
        return ((_a = this.upgrades[id]) === null || _a === void 0 ? void 0 : _a.type) === UpgradeType.MODULE;
    };
    UpgradesManager.isLens = function (id) {
        var _a;
        return ((_a = this.upgrades[id]) === null || _a === void 0 ? void 0 : _a.type) === UpgradeType.LENS;
    };
    UpgradesManager.upgrades = {};
    return UpgradesManager;
}());
IDRegistry.genItemID("quarryLensSmelt");
Item.createItem("quarryLensSmelt", "Quarry Lens (Smelt)", { name: "lens", meta: 0 }, { stack: 1 });
UpgradesManager.register(ItemID.quarryLensSmelt, {
    type: UpgradeType.LENS,
    singleton: true,
    processDrop: function (items) {
        return items.map(function (item) {
            var result = Recipes.getFurnaceRecipeResult(item[0], item[2]);
            return result ? [result.id, result.count, result.data] : item;
        });
    },
});
IDRegistry.genItemID("quarryLensEnchanted");
Item.createItem("quarryLensEnchanted", "Quarry Lens (Enchanted)", { name: "lens", meta: 1 }, { stack: 1 });
Item.setEnchantType(ItemID.quarryLensEnchanted, Native.EnchantType.pickaxe, 10);
UpgradesManager.register(ItemID.quarryLensEnchanted, {
    type: UpgradeType.LENS,
    onInstall: function (params, tile, slot) {
        if (slot.extra) {
            var level = slot.extra.getEnchantLevel(Native.Enchantment.EFFICIENCY);
            params.maxProgress *= Math.pow(0.8, level);
        }
    },
    modifyExtra: function (extra, slot) {
        if (slot.extra) {
            var enchants = slot.extra.getEnchants();
            for (var key in enchants) {
                extra.addEnchant(+key, enchants[key]);
            }
        }
    },
});
Callback.addCallback("PostLoaded", function () {
    if (ModAPI.requireAPI("ICore")) {
        Recipes.addShaped({ id: ItemID.quarryLensSmelt, count: 1, data: 0 }, [
            " 1 ",
            "101",
            " 1 ",
        ], [
            '0', VanillaBlockID.glass_pane, 0,
            '1', ItemID.dustDiamond, 0,
        ]);
        Recipes.addShaped({ id: ItemID.quarryLensEnchanted, count: 1, data: 0 }, [
            " 2 ",
            "101",
            " 2 ",
        ], [
            '0', VanillaBlockID.glass_pane, 0,
            '1', VanillaItemID.writable_book, 0,
            '2', ItemID.dustDiamond, 0,
        ]);
    }
    else {
        Recipes.addShaped({ id: ItemID.quarryLensSmelt, count: 1, data: 0 }, [
            " 1 ",
            "101",
            " 1 ",
        ], [
            '0', VanillaBlockID.glass_pane, 0,
            '1', VanillaItemID.diamond, 0,
        ]);
        Recipes.addShaped({ id: ItemID.quarryLensEnchanted, count: 1, data: 0 }, [
            " 2 ",
            "101",
            " 2 ",
        ], [
            '0', VanillaBlockID.glass_pane, 0,
            '1', VanillaItemID.writable_book, 0,
            '2', VanillaItemID.diamond, 0,
        ]);
    }
});
IDRegistry.genItemID("coreInterdimensional");
Item.createItem("coreInterdimensional", "Interdimensional Core", { name: "core_interdimensional", meta: 0 }, {});
Callback.addCallback("PostLoaded", function () {
    if (ModAPI.requireAPI("ICore")) {
        Recipes.addShaped({ id: ItemID.coreInterdimensional, count: 1, data: 0 }, [
            "131",
            "202",
            "131",
        ], [
            '0', VanillaItemID.ender_eye, 0,
            '1', ItemID.dustDiamond, 0,
            '2', VanillaItemID.glowstone_dust, 0,
            '3', ItemID.circuitAdvanced, 0,
        ]);
    }
});
IDRegistry.genItemID("quarryModuleBase");
Item.createItem("quarryModuleBase", "Quarry Module Base", { name: "module_base", meta: 0 }, {});
IDRegistry.genItemID("quarryModuleTerritory");
Item.createItem("quarryModuleTerritory", "Quarry Module (Territory)", { name: "module", meta: 0 }, { stack: 1 });
UpgradesManager.register(ItemID.quarryModuleTerritory, {
    type: UpgradeType.MODULE,
    energy: 16,
    onInstall: function (params) {
        params.radius += 16;
    },
});
IDRegistry.genItemID("quarryModuleExpStorage");
Item.createItem("quarryModuleExpStorage", "Quarry Module (Experience Storage)", { name: "module", meta: 1 }, { stack: 1 });
UpgradesManager.register(ItemID.quarryModuleExpStorage, {
    type: UpgradeType.MODULE,
    energy: 16,
    onInstall: function (params) {
        params.maxExp *= 2;
    },
});
Callback.addCallback("PostLoaded", function () {
    if (ModAPI.requireAPI("ICore")) {
        Recipes.addShaped({ id: ItemID.quarryModuleBase, count: 1, data: 0 }, [
            " 3 ",
            "202",
            " 1 ",
        ], [
            '0', ItemID.plateSteel, 0,
            '1', ItemID.circuitAdvanced, 0,
            '2', ItemID.cableGold2, 0,
            '3', VanillaItemID.redstone, 0,
        ]);
    }
    else {
        Recipes.addShaped({ id: ItemID.quarryModuleBase, count: 1, data: 0 }, [
            " 2 ",
            "202",
            " 1 ",
        ], [
            '0', VanillaItemID.iron_ingot, 0,
            '1', VanillaItemID.gold_ingot, 0,
            '2', VanillaItemID.redstone, 0,
        ]);
    }
    Recipes.addShaped({ id: ItemID.quarryModuleTerritory, count: 1, data: 0 }, [
        " 2 ",
        "101",
        " 2 ",
    ], [
        '0', ItemID.quarryModuleBase, 0,
        '1', VanillaItemID.diamond, 0,
        '2', VanillaItemID.ender_pearl, 0,
    ]);
    Recipes.addShaped({ id: ItemID.quarryModuleExpStorage, count: 1, data: 0 }, [
        " 2 ",
        "101",
        " 2 ",
    ], [
        '0', ItemID.quarryModuleBase, 0,
        '1', VanillaItemID.gold_ingot, 0,
        '2', VanillaItemID.glass_bottle, 0,
    ]);
});
IDRegistry.genBlockID("quarryCasing");
Block.createBlock("quarryCasing", [{ name: "Quarry Casing", texture: [["quarry", 1]], inCreative: true }]);
Block.setBlockMaterial(BlockID.quarryCasing, "stone", 2);
Callback.addCallback("PostLoaded", function () {
    if (ModAPI.requireAPI("ICore")) {
        Recipes.addShaped({ id: BlockID.quarryCasing, count: 1, data: 0 }, [
            " 3 ",
            "101",
            " 2 ",
        ], [
            '0', BlockID.machineBlockAdvanced, 0,
            '1', ItemID.cableGold2, 0,
            '2', ItemID.dustDiamond, 0,
            '3', ItemID.plateGold, 0,
        ]);
    }
    else {
        Recipes.addShaped({ id: BlockID.quarryCasing, count: 1, data: 0 }, [
            "010",
            "101",
            "020",
        ], [
            '0', VanillaItemID.gold_ingot, 0,
            '1', VanillaItemID.iron_ingot, 0,
            '2', VanillaBlockID.redstone_block, 0,
        ]);
    }
});
TileEntity.registerPrototype(BlockID.quarryCasing, {
    useNetworkItemContainer: true,
    energyReceive: function (type, amount) {
        if (!this.parent) {
            return 0;
        }
        amount = amount / EnergyTypeRegistry.getValueRatio(type, "Eu");
        var added = Math.min(1024, amount, this.parent.getEnergyStorage() - this.parent.data.energy);
        this.parent.data.energy += added;
        return added;
    },
    click: function (id, count, data, coords, player) {
        if (this.parent && !Entity.getSneaking(player)) {
            var client = Network.getClientForPlayer(player);
            if (!client) {
                return true;
            }
            this.parent.container.openFor(client, this.parent.getScreenName(player, coords));
            return true;
        }
        return false;
    },
});
IDRegistry.genBlockID("quarry");
Block.createBlock("quarry", [{ name: "Quarry", texture: [["quarry", 0]], inCreative: true }]);
Block.setBlockMaterial(BlockID.quarry, "stone", 2);
Callback.addCallback("PostLoaded", function () {
    if (ModAPI.requireAPI("ICore")) {
        Recipes.addShaped({ id: BlockID.quarry, count: 1, data: 0 }, [
            "545",
            "323",
            "101",
        ], [
            '0', VanillaBlockID.chest, 0,
            '1', ItemID.circuitAdvanced, 0,
            '2', BlockID.quarryCasing, 0,
            '3', ItemID.storageBattery, 0,
            '4', ItemID.coreInterdimensional, 0,
            '5', ItemID.cableGold2, 0,
        ]);
    }
    else {
        Recipes.addShaped({ id: BlockID.quarry, count: 1, data: 0 }, [
            "040",
            "121",
            "313",
        ], [
            '0', VanillaItemID.gold_ingot, 0,
            '1', BlockID.quarryCasing, 0,
            '2', VanillaBlockID.diamond_block, 0,
            '3', VanillaBlockID.redstone_block, 0,
            '4', VanillaItemID.diamond_pickaxe, 0,
        ]);
    }
});
var FONT = {
    color: android.graphics.Color.rgb(77, 77, 77),
    shadow: 0,
};
var FONT_ERROR = {
    color: android.graphics.Color.rgb(173, 10, 10),
    shadow: 0,
};
var gui = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "",
            },
        },
        inventory: {
            standart: true,
        },
        background: {
            standart: true,
        },
    },
    drawing: [
        { type: "bitmap", x: 378, y: 48, bitmap: "quarry_mod.scale.energy", scale: 3.2 },
        { type: "bitmap", x: 507, y: 280, bitmap: "quarry_mod.scale.exp", scale: 3.2 },
        { type: "bitmap", x: 507, y: 246, bitmap: "quarry_mod.bitmap.exp", scale: 3 },
        { type: "text", text: "BL", x: 786, y: 75, font: FONT },
        { type: "text", text: "WL", x: 906, y: 75, font: FONT },
    ],
    elements: {
        "energyScale": {
            type: "scale",
            x: 378,
            y: 48,
            direction: 1,
            bitmap: "quarry_mod.scale.energy_full",
            scale: 3.2,
        },
        "expScale": { type: "scale", x: 507, y: 280, bitmap: "quarry_mod.scale.exp_full", scale: 3.2 },
        "buttonGetExp": {
            type: "button",
            x: 816,
            y: 240,
            bitmap: "quarry_mod.btn.exp",
            bitmap2: "quarry_mod.btn.exp_pressed",
            scale: 3.2,
            clicker: {
                onClick: function (container, parent) {
                    parent.sendEvent("giveExp", { player: +Player.get() });
                    // levelUpSound.play(); //TODO
                    // soundClick.play();
                },
            },
        },
        "buttonToggle": {
            type: "button",
            x: 886,
            y: 240,
            bitmap: "quarry_mod.btn.redstone_off",
            scale: 3.2,
            clicker: {
                onClick: function (container, parent) {
                    // soundClick.play(); //TODO
                    parent.sendEvent("toggleEnable", {});
                },
            },
        },
        "text": {
            type: "text",
            x: 370,
            y: 315,
            text: "",
            font: FONT,
        },
        "textError": {
            type: "text",
            x: 370,
            y: 315,
            text: "",
            font: FONT_ERROR,
        },
        "textExp": { type: "text", x: 539, y: 248, font: FONT },
        "switch": {
            type: "switch",
            x: 832,
            y: 52,
            scale: 2,
            bitmapOffHover: "quarry_mod.toggle.off_hover",
            bitmapOnHover: "quarry_mod.toggle.on_hover",
            clicker: {
                onClick: function () {
                    // soundClick.play(); //TODO
                },
            },
            onNewState: function (state, container) { return container === null || container === void 0 ? void 0 : container.getParent().sendEvent("whitelistChanged", { state: state }); },
        },
    },
});
{
    var elements = gui.getWindow("main").getContent().elements;
    for (var i = 0; i < 2; i++) {
        elements["slotModule" + i] = {
            type: "slot",
            x: 370,
            y: 100 + i * 60,
            bitmap: "quarry_mod.slot.module",
            onItemChanged: function (container) { return container.getParent().sendEvent("upgradeChanged", {}); },
        };
        elements["slotLens" + i] = {
            type: "slot",
            x: 370 + i * 60,
            y: 240,
            bitmap: "quarry_mod.slot.lens",
            onItemChanged: function (container) { return container.getParent().sendEvent("upgradeChanged", {}); },
        };
    }
    for (var i = 0; i < 3; i++) {
        for (var k = 0; k < 5; k++) {
            elements["slot" + (i * 5 + k)] = { type: "slot", x: 450 + k * 60, y: 40 + i * 60 };
        }
    }
    for (var i = 0; i < 3; i++) {
        for (var k = 0; k < 2; k++) {
            var slotId = i * 2 + k;
            elements["slotList" + slotId] = {
                type: "slot", x: 770 + i * 60, y: 100 + k * 60,
                onItemChanged: function (container) {
                    container.getParent().sendEvent("listChanged", {});
                },
            };
        }
    }
}
Callback.addCallback("LevelLoaded", function () {
    var header = gui.getWindow("header");
    var drawing = header.getContent().drawing[2];
    if (drawing) {
        drawing.text = Translation.translate("Quarry");
    }
});
function findNearest(x, y, z, id, func) {
    for (var index in directions) {
        var dir = directions[index];
        if (World.getBlockID(x + dir[0], y + dir[1], z + dir[2]) === id) {
            var tile = World.getTileEntity(x + dir[0], y + dir[1], z + dir[2]);
            if (!tile && TileEntity.getPrototype(id)) {
                tile = TileEntity.addTileEntity(x + dir[0], y + dir[1], z + dir[2]);
            }
            if (tile) {
                if (func(tile)) {
                    return;
                }
            }
        }
    }
}
var BASE_SPEED = 80;
function getDefaultQuarryParams() {
    return {
        radius: 16,
        maxEnergy: 50000,
        maxExp: 1000,
        maxProgress: BASE_SPEED,
    };
}
TileEntity.registerPrototype(BlockID.quarry, {
    useNetworkItemContainer: true,
    defaultValues: {
        exp: 0,
        energy: 0,
        centerX: 0,
        centerZ: 0,
        progress: 0,
        digX: 0,
        digY: 0,
        digZ: 0,
        drop: [],
        enabled: true,
        valid: false,
        whitelist: false,
        completed: false,
    },
    casings: [],
    list: [],
    upgrades: [],
    params: getDefaultQuarryParams(),
    toolExtra: new ItemExtraData(),
    energyConsumption: ENERGY_CONSUMPTION,
    client: {
        containerEvents: {
            uiData: function (container, window, content, data) {
                if (content) {
                    var elements = content.elements;
                    elements.buttonToggle.bitmap =
                        data.enabled ? "quarry_mod.btn.redstone_on" : "quarry_mod.btn.redstone_off";
                    elements.switch.state = data.whitelist;
                }
            },
        },
        load: function () {
            this.sendPacket("onLoad", {});
        },
    },
    events: {
        onLoad: function () {
            this.refreshList();
            this.onUpgradeChanged();
            this.container.setGlobalAddTransferPolicy(function (container, name, id, amount) {
                if (name.startsWith("slotModule")) {
                    if (!UpgradesManager.isModule(id)) {
                        return 0;
                    }
                }
                else if (name.startsWith("slotLens")) {
                    if (!UpgradesManager.isLens(id)) {
                        return 0;
                    }
                }
                return Math.min(amount, Item.getMaxStack(id) - container.getSlot(name).count);
            });
        },
    },
    containerEvents: {
        toggleEnable: function () {
            this.data.enabled = !this.data.enabled;
        },
        giveExp: function (data) {
            // @ts-ignore
            var player = data.player;
            if (Player.isPlayer(player)) {
                var actor = new PlayerActor(player);
                actor.addExperience(this.data.exp);
                this.data.exp = 0;
            }
        },
        whitelistChanged: function (data) {
            var _a;
            // @ts-ignore
            this.data.whitelist = (_a = data.state) !== null && _a !== void 0 ? _a : this.data.state;
        },
        listChanged: function () {
            this.refreshList();
        },
        upgradeChanged: function () {
            this.onUpgradeChanged();
        },
    },
    init: function () {
        this.casings = [];
        this.list = [];
        this.data.centerX = this.x - this.x % 16;
        this.data.centerZ = this.z - this.z % 16;
        this.data.digX = this.data.centerX - this.params.radius;
        this.data.digZ = this.data.centerZ - this.params.radius;
        this.data.digY = this.y - 2;
    },
    tick: function () {
        var e_1, _a;
        var _this = this;
        var _b;
        if (World.getThreadTime() % 60 === 0) {
            this.validateStructure();
        }
        if (this.data.drop.length) {
            var drop = [];
            try {
                for (var _c = __values(this.data.drop), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var item = _d.value;
                    var fallback = this.addItemToStorage(item);
                    if (fallback) {
                        drop.push(fallback);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.data.drop = drop;
        }
        var text = "";
        if (!this.data.enabled) {
            text = Translation.translate("Turned off");
        }
        else if (this.data.drop.length) {
            text = Translation.translate("Not enough space");
        }
        else if (!this.data.valid) {
            text = Translation.translate("Incorrect structure");
        }
        else if (this.data.completed) {
            text = Translation.translate("Completed");
        }
        else if (this.data.energy < this.energyConsumption) {
            text = Translation.translate("Not enough energy");
        }
        else {
            if (this.data.progress < this.params.maxProgress) {
                this.data.progress++;
            }
            else {
                var block_1 = this.blockSource.getBlock(this.data.digX, this.data.digY, this.data.digZ);
                if (((_b = ToolAPI.getBlockMaterial(block_1.id)) === null || _b === void 0 ? void 0 : _b.name) === "stone"
                    && !TileEntity.getPrototype(block_1.id)
                    && this.isOnTheList(block_1)) {
                    var coords = {
                        x: this.data.digX,
                        y: this.data.digY,
                        z: this.data.digZ,
                    };
                    var drop_1 = Block.getBlockDropViaItem(block_1, {
                        id: VanillaItemID.diamond_pickaxe,
                        count: 1,
                        data: 0,
                        extra: this.toolExtra,
                    }, coords, this.blockSource);
                    this.upgrades.forEach(function (lens) {
                        if (lens.processDrop) {
                            drop_1 = lens.processDrop(drop_1);
                        }
                    });
                    this.data.drop = drop_1;
                    this.collectExp();
                    this.blockSource.setBlock(this.data.digX, this.data.digY, this.data.digZ, 0);
                    this.upgrades.forEach(function (upgrade) { var _a; return (_a = upgrade.onDig) === null || _a === void 0 ? void 0 : _a.call(upgrade, _this.data.digX, _this.data.digY, _this.data.digZ, block_1, _this); });
                }
                this.nextPos();
                this.data.progress = 0;
            }
            this.data.energy -= this.energyConsumption;
        }
        if (text) {
            this.container.setText("text", "");
            this.container.setText("textError", text);
        }
        else {
            this.container.setText("text", "X: " + this.data.digX + " Y: " + this.data.digY + " Z: " + this.data.digZ);
            this.container.setText("textError", "");
        }
        this.container.sendEvent("uiData", { enabled: this.data.enabled, whitelist: this.data.whitelist });
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.setScale("expScale", this.data.exp / this.params.maxExp);
        this.container.setText("textExp", this.data.exp);
        this.container.sendChanges();
    },
    getError: function () {
    },
    nextPos: function () {
        if (++this.data.digX > this.data.centerX + 16 + this.params.radius) {
            if (++this.data.digZ > this.data.centerZ + 16 + this.params.radius) {
                if (--this.data.digY === 0) {
                    this.data.completed = true;
                }
                this.data.digZ = this.data.centerZ - this.params.radius;
            }
            this.data.digX = this.data.centerX - this.params.radius;
        }
    },
    collectExp: function () {
        var e_2, _a;
        var maxExp = this.params.maxExp;
        if (this.data.exp < maxExp) {
            var expOrbs = this.blockSource.fetchEntitiesInAABB(this.data.digX - 2, this.data.digY - 2, this.data.digZ - 2, this.data.digX + 2, this.data.digY + 2, this.data.digZ + 2, EntityType.EXPERIENCE_ORB);
            try {
                for (var expOrbs_1 = __values(expOrbs), expOrbs_1_1 = expOrbs_1.next(); !expOrbs_1_1.done; expOrbs_1_1 = expOrbs_1.next()) {
                    var orb = expOrbs_1_1.value;
                    this.data.exp = Math.min(maxExp, this.data.exp + Entity.getCompoundTag(orb).getInt("experience value"));
                    Entity.remove(orb);
                    if (this.data.exp === maxExp) {
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (expOrbs_1_1 && !expOrbs_1_1.done && (_a = expOrbs_1.return)) _a.call(expOrbs_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    },
    refreshList: function () {
        var list = [];
        for (var i = 0; i < 6; i++) {
            var slot = this.container.getSlot("slotList" + i);
            if (slot.id) {
                list.push(slot.id + ":" + slot.data);
            }
        }
        this.list = list;
    },
    addItemToStorage: function (item) {
        for (var i = 0; i < 15; i++) {
            var slot = this.container.getSlot("slot" + i);
            if (!slot.id) {
                this.container.setSlot("slot" + i, item[0], item[1], item[2]);
                return null;
            }
            else if (slot.id === item[0] && slot.data === item[2] && Item.getMaxStack(slot.id) !== slot.count) {
                var count = Math.min(Item.getMaxStack(slot.id) - slot.count, item[1]);
                this.container.setSlot("slot" + i, slot.id, slot.count + count, slot.data);
                if (count === item[1]) {
                    return null;
                }
                item[1] = item[1] - count;
            }
        }
        return item;
    },
    onUpgradeChanged: function () {
        var _a, _b;
        this.reset();
        var container = this.container;
        var upgrades = [];
        for (var i = 0; i < 4; i++) {
            var slot = container.getSlot(i < 2 ? "slotModule" + i : "slotLens" + (2 - i));
            var upgrade = UpgradesManager.getUpgrade(slot.id);
            if (upgrade && (!upgrade.singleton || upgrades.indexOf(upgrade) === -1)) {
                (_a = upgrade.onInstall) === null || _a === void 0 ? void 0 : _a.call(upgrade, this.params, this, slot);
                (_b = upgrade.modifyExtra) === null || _b === void 0 ? void 0 : _b.call(upgrade, this.toolExtra, slot);
                upgrades.push(upgrade);
            }
        }
        var upgradeEnergy = this.upgrades.reduce(function (prev, upgrade) {
            return upgrade.energy > 0 ? prev + upgrade.energy : prev;
        }, 0);
        this.energyConsumption =
            Math.floor(BASE_SPEED / this.params.maxProgress * (ENERGY_CONSUMPTION + upgradeEnergy));
        this.data.exp = Math.min(this.data.exp, this.params.maxExp);
        this.data.energy = Math.min(this.data.energy, this.params.maxEnergy);
        this.upgrades = upgrades;
    },
    reset: function () {
        var _a;
        for (var i = 0; i < 2; i++) {
            var oldUpgrade = this.upgrades[i];
            if (oldUpgrade) {
                (_a = oldUpgrade.onTakeOut) === null || _a === void 0 ? void 0 : _a.call(oldUpgrade, this);
            }
        }
        this.params = getDefaultQuarryParams();
        this.toolExtra = new ItemExtraData();
        this.energyConsumption = ENERGY_CONSUMPTION;
    },
    isOnTheList: function (block) {
        var exists = this.list.indexOf(block.id + ":" + block.data) !== -1;
        return this.data.whitelist ? exists : !exists;
    },
    validateStructure: function () {
        var _this = this;
        for (var i = this.casings.length - 1; i >= 0; i--) {
            var casing = this.casings[i];
            if (casing.remove) {
                this.casings.splice(this.casings.indexOf(casing), 1);
            }
        }
        if (this.casings.length < 6) {
            findNearest(this.x, this.y, this.z, BlockID.quarryCasing, function (tile) {
                if (!tile.parent) {
                    _this.casings.push(tile);
                    tile.parent = _this;
                }
                return _this.casings.length >= 6;
            });
        }
        this.data.valid = this.casings.length === 6;
    },
    getEnergyStorage: function () {
        return this.params.maxEnergy;
    },
    getScreenName: function () {
        return "main";
    },
    getScreenByName: function () {
        return gui;
    },
    destroy: function () {
        var e_3, _a;
        try {
            for (var _b = __values(this.casings), _c = _b.next(); !_c.done; _c = _b.next()) {
                var casing = _c.value;
                casing.parent = null;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    },
});
for (var i in energyTypes) {
    EnergyTileRegistry.addEnergyTypeForId(BlockID.quarryCasing, energyTypes[i]);
}
//Blocks
Translation.addTranslation("Quarry", { ru: "Карьер", zh: "采石场" });
Translation.addTranslation("Quarry Casing", { ru: "Корпус карьера", zh: "采石场框架" });
//Upgrades & lenses
Translation.addTranslation("Quarry Module Base", { ru: "Основа улучшение карьера" });
Translation.addTranslation("Quarry Module (Territory)", { ru: "Улучшение карьера (Радиус)", zh: "采石场升级(范围)" });
Translation.addTranslation("Quarry Module (Experience Storage)", { ru: "Улучшение карьера (Хранилище опыта)" });
Translation.addTranslation("Quarry Lens (Smelt)", { ru: "Линза (Переплавка)", zh: "采石场接口(冶炼)" });
Translation.addTranslation("Quarry Lens (Enchanted)", { ru: "Линза (Зачарование)" });
//Other items
Translation.addTranslation("Interdimensional Core", { ru: "Межпространственное ядро" });
//UI
Translation.addTranslation("Range: ", { ru: "Радиус: ", zh: "范围: " });
Translation.addTranslation("Not enough space", { ru: "Недостаточно места", zh: "范围大小不足" });
Translation.addTranslation("Not enough energy", { ru: "Недостаточно энергии" });
Translation.addTranslation("Incorrect structure", { ru: "Неверное строение", zh: "错误的结构" });
Translation.addTranslation("Turned off", { ru: "Выключено" });
ModAPI.registerAPI("QuarryAPI", {
    UpgradesManager: UpgradesManager,
    requireGlobal: function (str) {
        return eval(str);
    },
});
