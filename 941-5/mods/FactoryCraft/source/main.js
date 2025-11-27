IMPORT("EnergyNet");
IMPORT("StorageInterface");
IMPORT("TileRender");
IMPORT("RenderAPI");
IMPORT("ToolLib");
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
var RF = EnergyTypeRegistry.assureEnergyType("RF", .25);
FactAPI.getBlockDrop = function (coords, id, data, tool) {
    var dropFunc = Block.dropFunctions[id];
    if (dropFunc) {
        return dropFunc(coords, id, data, ToolAPI.getToolLevel(tool), {});
    }
    return [[id, 1, data]];
};
var Options = {
    theme: __config__.get("theme") || "black",
    isThemeBlack: function () {
        return this.theme == "black";
    }
};
FactAPI.render = {
    addStandartWireConnections: function (id) {
        ICRender.getGroup("ic-wire").add(id, -1);
        ICRender.getGroup("rf-wire").add(id, -1);
        ICRender.getGroup("fc-wire").add(id, -1);
    }
};
var MultiBlock = {
    register: function () {
    }
};
FactAPI.machine = {
    registerEnergtTileAnimation: function (id, tile, obj) {
        tile.client = tile.client || {};
        var load = tile.client.load || function () { };
        tile.client.load = function () {
            var thas = this;
            TileRenderer.mapAtCoords(thas.x, thas.y, thas.z, id, BlockSource.getCurrentClientRegion().getBlockData(this.x, this.y, this.z));
            this.networkData.addOnDataChangedListener(function (data, isExternal) {
                var data = thas.networkData.getInt("data");
                TileRenderer.mapAtCoords(thas.x, thas.y, thas.z, id, data);
            });
            load.apply(this, arguments);
        };
        var unload = tile.client.unload || function () { };
        tile.client.unload = function () {
            BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
            unload.apply(this, arguments);
        };
        tile.getAnimation = tile.getAnimation || function (d) { return d; };
        tile.updateAnimation = function () {
            var data = this.blockSource.getBlockData(this.x, this.y, this.z);
            this.networkData.putInt("data", this.getAnimation(data));
            this.networkData.sendChanges();
        };
        this.registerEnergyTile(id, tile, obj);
    },
    registerEnergyTile: function (id, tile, description) {
        this.addParticleTile(tile);
        description = description || {};
        tile.defaultValues = tile.defaultValues || {};
        tile.defaultValues.energy = 0;
        tile.defaultValues.energy_storage = tile.defaultValues.energy_storage || 1000;
        tile.getEnergyStorage = tile.getEnergyStorage || function () { return this.data.energy_storage; };
        tile.defaultValues.active = true;
        tile.getTier = tile.getTier || function () {
            return 3;
        };
        if (description.liquid)
            ICRender.getGroup("liquid_pipe").add(id, -1);
        if (!description.generator)
            tile.energyReceive = tile.energyReceive || FactAPI.machine.basicEnergyStorage;
        ModAPI.addAPICallback("ICore", function (api) {
            if (!description.generator && api.Config.voltageEnabled)
                tile.energyReceive = FactAPI.machine.industrialCraft;
        });
        var getScreenName = tile.getScreenName || function () { return "main"; };
        tile.getScreenName = function (p, c) {
            var item = Entity.getCarriedItem(p);
            if (ItemType.is(item.id, "wrench")) {
                this.data.active = !this.data.active;
                return;
            }
            return getScreenName.apply(this, [p, c]);
        };
        var click = tile.click || function () { };
        tile.click = function (d, count, data, coords, player) {
            if (Entity.getSneaking(player) && ItemType.is(d, "wrench")) {
                this.blockSource.spawnDroppedItem(this.x + .5, this.y + .5, this.z + .5, id, 1, 0);
                this.blockSource.destroyBlock(this.x, this.y, this.z, true);
            }
            else
                click.apply(this, arguments);
        };
        var tick = tile.tick || function () { };
        tile.MechanicDeploy = tile.MechanicDeploy || function () { };
        tile.tick = function () {
            StorageInterface.checkHoppers(this);
            tick.apply(this, []);
            this.container.sendChanges();
            this.networkData.putBoolean("active", !!this.data.active);
            this.networkData.sendChanges();
            if (!this.data.active)
                return;
            this.MechanicDeploy();
        };
        if (description.updates) {
            Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
                for (var i_1 = 0; i_1 < description.updates.length - 1; i_1++) {
                    if (description.updates[i_1] == block.id) {
                        if (item.id != description.update_items[i_1])
                            return;
                        BlockSource.getDefaultForActor(player).setBlock(coords.x, coords.y, coords.z, description.updates[i_1 + 1], block.data);
                        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
                    }
                }
            });
            var _loop_1 = function (i_2) {
                var _tile = ModAPI.cloneObject(tile, true, 3);
                var ii = parseInt(i_2);
                _tile.getTierBlock = function () {
                    return ii + 1;
                };
                TileEntity.registerPrototype(description.updates[i_2], _tile);
                EnergyTileRegistry.addEnergyTypeForId(description.updates[i_2], EU);
                EnergyTileRegistry.addEnergyTypeForId(description.updates[i_2], RF);
                FactAPI.render.addStandartWireConnections(description.updates[i_2]);
            };
            for (var i_2 in description.updates) {
                _loop_1(i_2);
            }
        }
        else {
            TileEntity.registerPrototype(id, tile);
            EnergyTileRegistry.addEnergyTypeForId(id, EU);
            EnergyTileRegistry.addEnergyTypeForId(id, RF);
            FactAPI.render.addStandartWireConnections(id);
        }
    },
    basicEnergyStorage: function (type, amount) {
        amount = Math.min(amount, 1000);
        var add = Math.min(amount, this.data.energy_storage - this.data.energy);
        this.data.energy += add;
        return add;
    },
    industrialCraft: function (type, amount, voltage) {
        var maxVoltage = 8 << this.getTier() * 2;
        if (voltage > maxVoltage) {
            this.blockSource.setBlock(this.x, this.y, this.z, 0, 0);
            this.blockSource.explode(this.x + 0.5, this.y + 0.5, this.z + 0.5, 1, true);
            return 1;
        }
        amount = Math.min(amount, maxVoltage);
        var add = Math.min(amount, this.data.energy_storage - this.data.energy);
        this.data.energy += add;
        return add;
    },
    addConnectWire: function (id, group, data) {
        ICRender.getGroup(group).add(id, data || -1);
    },
    updates: {},
    registerUpdate: function (block, id, description) {
        this.updates[block] = this.updates[block] || {};
        description.timer = description.timer || 0;
        description.height = description.height || 0;
        this.updates[block][id] = description || {};
    },
    getUpdates: function (block) {
        return this.updates[block];
    },
    isUpdateBlock: function (block, id) {
        this.updates[block] = this.updates[block] || {};
        return !!this.updates[block][id];
    },
    registerDefaultUpdate: function (block) {
        this.registerUpdate(block, 359, {
            timer: .5
        });
        this.registerUpdate(block, ItemID.gearIron, {
            timer: .1
        });
        this.registerUpdate(block, ItemID.gearGolden, {
            timer: .2,
            height: 2
        });
        this.registerUpdate(block, ItemID.gearDiamond, {
            timer: .4,
            height: 4
        });
    },
    addParticleTile: function (tile) {
        if (__config__.getBool("machine_particle")) {
            var client = tile.client || {};
            var orgLoad_1 = client.load || function () { };
            client.load = function () {
                this.active = this.networkData.getBoolean("active", false);
                var self = this;
                this.networkData.addOnDataChangedListener(function (data, key, is) {
                    self.active = self.networkData.getBoolean("active", false);
                });
                orgLoad_1.apply(this, arguments);
            };
            var orgTick_1 = client.tick || function () { };
            client.tick = function () {
                this.active && Particles.addParticle(Native.ParticleType.redstone, this.x + Math.random(), this.y + Math.random(), this.z + Math.random(), 0, .0001, 0);
                orgTick_1.apply(this, arguments);
            };
            tile.client = client;
        }
    },
    registerTile: function (id, tile) {
        this.registerDefaultUpdate(id);
        this.addParticleTile(tile);
        tile.defaultValues = tile.defaultValues || {};
        tile.defaultValues.active = true;
        var getScreenName = tile.getScreenName || function () { return "main"; };
        tile.getScreenName = function (p, c) {
            var item = Entity.getCarriedItem(p);
            if (ItemType.is(item.id, "wrench")) {
                this.data.active = !this.data.active;
                return;
            }
            return getScreenName.apply(this, [p, c]);
        };
        var click = tile.click || function () { };
        tile.click = function (d, count, data, coords, player) {
            if (Entity.getSneaking(player) && ItemType.is(d, "wrench")) {
                this.blockSource.spawnDroppedItem(this.x + .5, this.y + .5, this.z + .5, id, 1, 0);
                this.blockSource.destroyBlock(this.x, this.y, this.z, true);
            }
            else
                click.apply(this, arguments);
        };
        var tick = tile.tick || function () { };
        tile.tick = function () {
            StorageInterface.checkHoppers(this);
            tick.apply(this, []);
            var cfg = this.getConfig();
            this.networkData.putBoolean("active", !!this.data.active);
            this.networkData.sendChanges();
            if (!this.data.active)
                return;
            this.data.modY = 0;
            this.data.modTime = 0;
            var updates = FactAPI.machine.getUpdates(id);
            this.data.cfg = this.data.cfg || {};
            for (var i_3 = 1; i_3 <= 7; i_3++) {
                slotU = this.container.getSlot("slotU" + i_3);
                if (updates[slotU.id]) {
                    var obj = updates[slotU.id];
                    this.data.modTime += obj.timer;
                    this.data.modY += obj.height;
                    var keys = Object.keys(obj);
                    for (var i_4 in keys) {
                        var key = keys[i_4];
                        this.data.cfg[key] = (this.data.cfg[key] || 0) + obj[cfg];
                    }
                }
            }
            var add = 1 + this.data.modTime;
            this.data.progress += add;
            if (this.data.progress >= cfg.time) {
                this.MechanicDeploy();
                this.data.progress = 0;
            }
            this.container.sendChanges();
        };
        ToolAPI.registerBlockMaterial(id, "stone");
        TileEntity.registerPrototype(id, tile);
    }
};
FactAPI.machineContainer = {
    addItemToContainer: function (container, item, size, prefix, index) {
        var s = size || 28;
        prefix = prefix || "";
        for (var index_1 = index_1 ? index_1 : 1; index_1 <= s; index_1++) {
            var slot = container.getSlot("slot" + prefix + index_1);
            if ((slot.id == item.id && slot.data == item.data) || slot.id == 0) {
                if (slot.count <= Item.getMaxStack(item.id)) {
                    var maxcount = Item.getMaxStack(item.id) - slot.count;
                    if (item.count <= maxcount) {
                        container.setSlot("slot" + prefix + index_1, item.id, slot.count + item.count, item.data);
                        container.validateAll();
                        return false;
                    }
                    if (item.count > maxcount) {
                        container.setSlot("slot" + prefix + index_1, item.id, slot.count + maxcount, item.data);
                        container.validateAll();
                        item.count -= maxcount;
                    }
                }
            }
        }
        return item.count;
    },
    isItemInContainer: function (container, item, size, prefix, index) {
        var s = size || 28;
        prefix = prefix || "";
        for (var index_2 = index_2 ? index_2 : 1; index_2 <= s; index_2++) {
            var slot = container.getSlot("slot" + prefix + index_2);
            if (slot.id == item.id && (slot.data == item.data || item.data == -1))
                item.count = Math.max(item.count - slot.count, 0);
        }
        if (item.count == 0)
            return true;
        return false;
    },
    giveItemFromContainer: function (container, item, size, prefix, index) {
        var s = size || 28;
        prefix = prefix || "";
        for (var index_3 = index_3 ? index_3 : 1; index_3 < s; index_3++) {
            var slot = container.getSlot("slot" + prefix + index_3);
            if (slot.id == item.id && (slot.data == item.data || item.data == -1)) {
                if (slot.count >= item.count) {
                    container.setSlot("slot" + prefix + index_3, item.id, slot.count - item.count, item.data);
                    container.validateAll();
                    return true;
                }
                if (slot.count < item.count) {
                    item.count -= slot.count;
                    container.setSlot("slot" + prefix + index_3, item.id, 0, item.data);
                    container.validateAll();
                }
            }
        }
        return false;
    }
};
var Random = {
    float: function (min, max) {
        return ((Math.random() * (max - min)) + min);
    },
    integer: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    string: function () {
        function gen() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return gen() + gen() + '_' + gen() + '_' + gen() + '_' + gen() + '_' + gen() + gen() + gen();
    },
    choice: function (array) {
        var i = array.length;
        return array[Random.integer(0, i)];
    }
};
var ItemType = {
    items: {},
    get: function (id) {
        return this.items[id];
    },
    is: function (id, type) {
        return this.get(id) == type;
    },
    set: function (id, type) {
        if (id)
            this.items[id] = type;
    },
    remove: function (id) {
        delete this.items[id];
    }
};
FactAPI.farm = {
    seeds: {
        392: 142,
        458: 244
    },
    crops: {
        142: [[392, parseInt(1 + Math.random() * 3), 0]],
        244: [[457, 1, 0], [458, parseInt(1 + Math.random() * 3), 0]]
    },
    datas: {
        142: 7,
        244: 7
    },
    registerPlant: function (seed, crop, drop) {
        var blockId = crop.id;
        var endData = crop.maxData;
        this.seeds[seed] = blockId;
        this.crops[blockId] = drop;
        this.datas[blockId] = endData;
    }
};
FactAPI.farm.registerPlant(295, {
    id: 59,
    maxData: 7
}, [
    [296, 1, 0],
    [295, parseInt(1 + Math.random() * 3), 0]
]);
FactAPI.farm.registerPlant(391, {
    id: 141,
    maxData: 7
}, [
    [391, parseInt(1 + Math.random() * 3), 0]
]);
FactAPI.constants = {
    NotKill: {
        64: true, 65: true, 66: true,
        67: true, 68: true, 69: true,
        77: true, 80: true, 81: true,
        82: true, 83: true, 84: true,
        85: true, 86: true, 90: true,
        93: true, 94: true
    }
};
FactAPI.recipe = {
    repairStation: {
        all: {},
        register: function (id, id2, data2) {
            if (!data2)
                data2 = 0;
            if (!id2)
                id2 = id;
            this.all[id] = { id: id2, data: data2 };
        },
        get: function (id) {
            return this.all[id] || false;
        },
        delete: function (id) {
            this.all[id] = false;
        }
    },
};
Network.addClientPacket("fc.message", function (packetData) {
    Game.message(packetData);
});
var Mp = {
    message: function (player, text) {
        var client = Network.getClientForPlayer(player);
        if (client != null) {
            client.send("fc.message", text);
        }
    }
};
var CallbackJS = {
    funcs: {},
    Controller: function (org, flags) {
        var replace = false;
        var get = null;
        var args_func = [];
        this.getFlags = function () {
            return flags;
        };
        this.runMethot = function (type) {
            this.setGet(org.apply(this, args_func, type));
        };
        this.setGet = function (g) {
            get = g;
        };
        this.getGet = function () {
            return get;
        };
        this.setArguments = function (arr) {
            var args = [];
            for (var i_5 = 0; i_5 < arr.length; i_5++)
                args[i_5] = arr[i_5];
            args_func = args;
        };
        this.getArguments = function () {
            return args_func;
        };
        this.replace = function () {
            replace = true;
        };
        this.isReplace = function () {
            return replace;
        };
    },
    getRegFunc: function (id) {
        return function () {
            CallbackJS.runMethot(id, arguments);
        };
    },
    reg: function (func, run, flags) {
        flags = flags || [];
        var id = Object.keys(this.funcs).length;
        var org = func;
        var _func = function () {
            var controller = new CallbackJS.Controller(org, flags);
            controller.setArguments(arguments);
            if (flags.indexOf("replace") != -1)
                controller.replace();
            if (flags.indexOf("pre") != -1)
                run(controller);
            if (!controller.isReplace()) {
                controller.runMethot();
                if (flags.indexOf("post") != -1)
                    run(controller);
            }
            func = _func;
            return controller.getGet();
        };
        this.funcs[id] = {
            func: _func,
            flags: flags
        };
        return id;
    },
    runMethot: function (id, arr) {
        this.funcs[id].func.apply(this, arr);
    }
};
Translation.addTranslation("Battery", {
    ru: "Батарея"
});
IDRegistry.genItemID("factoryBattery");
Item.createItem("factoryBattery", "Battery", { name: "battery" });
Translation.addTranslation("Basic improvement", {
    ru: "Базовое улучшение"
});
Translation.addTranslation("Level 1 improvement", {
    ru: "Улучшение 1 уровня"
});
Translation.addTranslation("Level 2 improvement", {
    ru: "Улучшение 2 уровня"
});
IDRegistry.genItemID("factory_update_base");
Item.createItem("factory_update_base", "Basic improvement", { name: "Level_improvement", meta: 0 });
IDRegistry.genItemID("factory_update_1");
Item.createItem("factory_update_1", "Level 1 improvement", { name: "Level_improvement", meta: 1 });
IDRegistry.genItemID("factory_update_2");
Item.createItem("factory_update_2", "Level 2 improvement", { name: "Level_improvement", meta: 2 });
Translation.addTranslation("Wooden Gear", {
    ru: "Деревянная шестерня"
});
Translation.addTranslation("Stone Gear", {
    ru: "Каменная шестерня"
});
Translation.addTranslation("Iron Gear", {
    ru: "Железная шестерня"
});
Translation.addTranslation("Golden Gear", {
    ru: "Золотая шестерня"
});
Translation.addTranslation("Diamond Gear", {
    ru: "Алмазная шестерня"
});
IDRegistry.genItemID("gear_wood");
IDRegistry.genItemID("gear_stone");
IDRegistry.genItemID("gear_iron");
IDRegistry.genItemID("gear_gold");
IDRegistry.genItemID("gear_diamond");
Item.createItem("gear_wood", "Wooden Gear", { name: "gear_wood", meta: 0 });
Item.createItem("gear_stone", "Stone Gear", { name: "gear_stone", meta: 0 });
Item.createItem("gear_iron", "Iron Gear", { name: "gear_iron", meta: 0 });
Item.createItem("gear_gold", "Golden Gear", { name: "gear_gold", meta: 0 });
Item.createItem("gear_diamond", "Diamond Gear", { name: "gear_diamond", meta: 0 });
ItemID.gearWooden = ItemID.gear_wood;
ItemID.gearStone = ItemID.gear_stone;
ItemID.gearIron = ItemID.gear_iron;
ItemID.gearGolden = ItemID.gear_gold;
ItemID.gearDiamond = ItemID.gear_diamond;
Translation.addTranslation("Iron Wrench", {
    ru: "Железный ключ"
});
IDRegistry.genItemID("factoryWrench");
Item.createItem("factoryWrench", "Iron Wrench", { name: "factory_wrench", meta: 0 });
ItemType.set(ItemID.factoryWrench, "wrench");
Callback.addCallback("PostLoaded", function () {
    ItemType.set(ItemID.bronzeWrench, "wrench");
    ItemType.set(ItemID.bc_wrench, "wrench");
    ItemType.set(ItemID.utilsWrench, "wrench");
    ItemType.set(ItemID.rp_screwdriver, "wrench");
});
Translation.addTranslation("Wooden Machine Block", {
    ru: "Деревянный машинный блок"
});
Translation.addTranslation("Stone Machine Block", {
    ru: "Каменный машинный блок"
});
Translation.addTranslation("Iron Machine Block", {
    ru: "Железный машинный блок"
});
IDRegistry.genBlockID("blockMachineWooden");
IDRegistry.genBlockID("blockMachineStone");
IDRegistry.genBlockID("blockMachineIron");
var ironcore_texture = {
    side: "block_machine_iron",
};
if (!Options.isThemeBlack()) {
    ironcore_texture.side = "light_iron_machine";
}
Block.createBlock("blockMachineWooden", [{ name: "Wooden Machine Block", texture: [["block_machine_wooden", 0]], inCreative: true }], "opaque");
Block.createBlock("blockMachineStone", [{ name: "Stone Machine Block", texture: [["block_machine_stone", 0]], inCreative: true }], "opaque");
Block.createBlock("blockMachineIron", [{ name: "Iron Machine Block", texture: [[ironcore_texture.side, 0]], inCreative: true }], "opaque");
Translation.addTranslation("Fishing Net", {
    ru: "Рыболовная сеть"
});
IDRegistry.genBlockID("fishingnet");
Block.createBlock("fishingnet", [{ name: "Fishing Net", texture: [["fishingnet", 0]], inCreative: true }]);
Block.setBlockShape(BlockID.fishingnet, { x: 0, y: 0, z: 0 }, { x: 1, y: 1 / 8, z: 1 });
Callback.addCallback("ItemUse", function (c, i, b, is, player) {
    var region = BlockSource.getDefaultForActor(player);
    if (b.id == BlockID.fishingnet) {
        var id = region.getBlockId(c.x, c.y - 1, c.z);
        if (Math.random() < 0.03 && (id == 8 || id == 9)) {
            region.spawnDroppedItem(c.x + 0.5, c.y + 1, c.z + 0.5, 809, 1, Random.integer(0, 3));
        }
    }
});
Translation.addTranslation("Energy Cable", { ru: "Энергетический кабель" });
Translation.addTranslation("Iron Cable", { ru: "Железный кабель" });
Translation.addTranslation("Liquid pipe", { ru: "Жидкостная труба" });
IDRegistry.genBlockID("energy_cable");
IDRegistry.genBlockID("iron_cable");
IDRegistry.genBlockID("liquid_pipe");
Block.createBlock("energy_cable", [
    { name: "Energy Cable", texture: [["energy_cable", 0]], inCreative: true }
]);
Block.createBlock("iron_cable", [
    { name: "Iron Cable", texture: [["iron_block", 0]], inCreative: true }
]);
Block.createBlock("liquid_pipe", [
    { name: "Liquid pipe", texture: [["light_quarry_bottom", 0]], inCreative: true }
]);
TileRenderer.setupWireModel(BlockID.energy_cable, 0, 3 / 8, "fc-wire");
TileRenderer.setupWireModel(BlockID.iron_cable, 0, 4 / 8, "fc-wire");
TileRenderer.setupWireModel(BlockID.liquid_pipe, 0, 4 / 8, "liquid_pipe");
FactAPI.render.addStandartWireConnections(BlockID.energy_cable);
FactAPI.render.addStandartWireConnections(BlockID.iron_cable);
EU.registerWire(BlockID.energy_cable);
RF.registerWire(BlockID.energy_cable);
EU.registerWire(BlockID.iron_cable);
RF.registerWire(BlockID.iron_cable);
Translation.addTranslation("Tesla Reel", { ru: "Катушка Теслы" });
IDRegistry.genBlockID("machineEnergyTeslaTower");
Block.createBlock("machineEnergyTeslaTower", [
    { name: "Tesla Reel", texture: [
            ["block_energy_reel", 0], ["block_energy_reel", 0],
            ["block_energy_tesla", 0], ["block_energy_tesla", 0],
            ["block_energy_tesla", 0], ["block_energy_tesla", 0]
        ], inCreative: true }
], "opaque");
ICRender.getGroup("iron-wire").add(BlockID.machineEnergyTeslaTower, -1);
var ui_tesla = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Tesla Reel") } },
        inventory: { standart: true },
        background: { standart: true },
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6 },
    ],
    elements: {
        "energyScale": { type: "scale", x: 350, y: 50, direction: 1, value: 0.5, bitmap: "energybar.scale", scale: 2.6 },
    },
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selectionFactoryon: "selectionFactory"
    }
});
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyTeslaTower, {
    useNetworkItemContainer: true,
    defaultValues: {
        energy_storage: 10000,
    },
    getScreenName: function (player, coords) {
        return "main";
    },
    getScreenByName: function () {
        return ui_tesla;
    },
    setDefaultValues: function () {
        this.data.energy_storage = this.defaultValues.energy_storage;
    },
    checkStation: function () {
        var blocks = [
            [0, -1, 0, BlockID.blockMachineIron],
            [0, -2, 0, BlockID.blockMachineIron],
            [0, -3, 0, BlockID.blockMachineIron],
            [1, 0, 0, BlockID.iron_cable], [-1, 0, 0, BlockID.iron_cable],
            [1, 0, 1, BlockID.iron_cable], [1, 0, -1, BlockID.iron_cable],
            [0, 0, 1, BlockID.iron_cable], [0, 0, -1, BlockID.iron_cable],
            [-1, 0, 0, BlockID.iron_cable], [-1, 0, -1, BlockID.iron_cable],
            [1, -1, 0, BlockID.iron_cable], [-1, -1, 0, BlockID.iron_cable],
            [1, -1, 1, BlockID.iron_cable], [1, -1, -1, BlockID.iron_cable],
            [0, -1, 1, BlockID.iron_cable], [0, -1, -1, BlockID.iron_cable],
            [-1, -1, 0, BlockID.iron_cable], [-1, -1, -1, BlockID.iron_cable],
            [1, -3, 0, BlockID.energy_reel], [-1, -3, 0, BlockID.energy_reel],
            [0, -3, 1, BlockID.energy_reel], [0, -3, -1, BlockID.energy_reel],
            [2, -3, 0, BlockID.blockMachineIron], [-2, -3, 0, BlockID.blockMachineIron],
            [0, -3, 2, BlockID.blockMachineIron], [0, -3, -2, BlockID.blockMachineIron],
        ];
        for (var i_6 in blocks) {
            var a = blocks[i_6];
            if (this.blockSource.getBlockId(this.x + a[0], this.y + a[1], this.z + a[2]) != a[3])
                return false;
        }
        return true;
    },
    MechanicDeploy: function () {
        this.setDefaultValues();
        if (World.getThreadTime() % 20 == 0 && this.checkStation()) {
            if (this.data.energy >= 100) {
                var all = this.blockSource.fetchEntitiesInAABB(this.x - 10, this.y - 10, this.z - 10, this.x + 10, this.y + 10, this.z + 10, EEntityType.PLAYER, true);
                var ent = {
                    64: true, 65: true,
                    66: true, 67: true,
                    68: true, 69: true,
                    77: true, 80: true,
                    81: true, 82: true,
                    83: true, 84: true,
                    85: true, 86: true,
                    90: true, 93: true,
                    94: true
                };
                for (var i in all) {
                    if (!ent[Entity.getType(all[i])]) {
                        var crd = Entity.getPosition(all[i]);
                        this.blockSource.spawnEntity(this.x, this.y + 1, this.z, 93);
                        Entity.damageEntity(all[i], 5);
                        this.blockSource.spawnEntity(crd.x, crd.y, crd.z, 93);
                        this.data.energy -= 100;
                        return;
                    }
                }
            }
        }
        var energyStorage = this.getEnergyStorage();
        this.data.energy = Math.min(this.data.energy, energyStorage);
        this.container.sendChanges();
    },
    tick: function () {
        var energyStorage = this.getEnergyStorage();
        this.container.setScale("energyScale", this.data.energy / energyStorage);
    },
});
Translation.addTranslation("Fuel Generator", {
    ru: "Топливный генератор"
});
var genfuel_texture = {
    side: "block_machine_iron",
    front: "block_energy_genfuel"
};
if (!Options.isThemeBlack()) {
    genfuel_texture.front = "light_genfuel";
    genfuel_texture.side = "light_iron_machine";
}
IDRegistry.genBlockID("machineEnergyGeneratorFuel");
Block.createBlock("machineEnergyGeneratorFuel", [
    {
        name: "Fuel Generator",
        texture: [
            [genfuel_texture.side, 0],
            [genfuel_texture.side, 0],
            [genfuel_texture.side, 0],
            [genfuel_texture.front, 0],
            [genfuel_texture.side, 0],
            [genfuel_texture.side, 0]
        ],
        inCreative: true
    }
], "opaque");
TileRenderer.setStandardModelWithRotation(BlockID.machineEnergyGeneratorFuel, 2, [[genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.front, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0]]);
TileRenderer.setRotationFunction(BlockID.machineEnergyGeneratorFuel);
TileRenderer.registerModelWithRotation(BlockID.machineEnergyGeneratorFuel, 2, [[genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.front, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0]]);
TileRenderer.registerModelWithRotation(BlockID.machineEnergyGeneratorFuel, 6, [[genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.side, 0], [genfuel_texture.front, 1], [genfuel_texture.side, 0], [genfuel_texture.side, 0]]);
var ui_generatorfuel = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Fuel Generator") } },
        inventory: { standart: true },
        background: { standart: true }
    },
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6 },
        { type: "bitmap", x: 450, y: 150, bitmap: "fire.ground", scale: 4.5 },
    ],
    elements: {
        "energyScale": { type: "scale", x: 350, y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6 },
        "burningScale": { type: "scale", x: 450, y: 150, direction: 1, bitmap: "fire.scale", scale: 4.5 },
        "slotFuel": { type: "slot", x: 450, y: 210 },
    }
});
FactAPI.machine.registerEnergtTileAnimation(BlockID.machineEnergyGeneratorFuel, {
    useNetworkItemContainer: true,
    defaultValues: {
        burn: 0,
        burnMax: 0
    },
    getScreenByName: function () {
        return ui_generatorfuel;
    },
    getFuel: function (slotName) {
        var fuelSlot = this.container.getSlot(slotName);
        if (fuelSlot.id > 0) {
            var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
            if (burn && !LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)) {
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
        }
        return 0;
    },
    tick: function () {
        StorageInterface.checkHoppers(this);
        var energyStorage = this.getEnergyStorage();
        if (this.data.burn <= 0) {
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel") / 4;
        }
        if (this.data.burn > 0 && this.data.energy < energyStorage) {
            this.data.energy = Math.min(this.data.energy + 2, energyStorage);
            this.data.burn -= 0.5;
        }
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("energyScale", this.data.energy / energyStorage);
        this.container.sendChanges();
        if (World.getThreadTime() % 20 == 0)
            this.updateAnimation();
    },
    getAnimation: function (data) {
        if (this.data.burn > 0)
            return data + 4;
        return data;
    },
    isGenerator: function () {
        return true;
    },
    getEnergyStorage: function () {
        return 1000;
    },
    energyTick: function (type, src) {
        var output = Math.min(2, this.data.energy);
        this.data.energy += src.add(output) - output;
    },
}, {
    generator: true
});
StorageInterface.createInterface(BlockID.machineEnergyGeneratorFuel, {
    slots: {
        "slotFuel": { input: true }
    }
});
Translation.addTranslation("Moon Panel", {
    ru: "Лунная батарея"
});
var moon_texture = {
    side: "block_machine_iron",
    top: "block_energy_moon"
};
if (!Options.isThemeBlack()) {
    moon_texture.top = "light_moon";
    moon_texture.side = "light_iron_machine";
}
IDRegistry.genBlockID("machineEnergyGeneratorMoon");
Block.createBlock("machineEnergyGeneratorMoon", [
    {
        name: "Moon Panel", texture: [
            [moon_texture.side, 0], [moon_texture.top, 0],
            [moon_texture.side, 0], [moon_texture.side, 0],
            [moon_texture.side, 0], [moon_texture.side, 0]
        ],
        inCreative: true
    }
]);
Block.setBlockShape(BlockID.machineEnergyGeneratorMoon, {
    x: 0,
    y: 0,
    z: 0
}, {
    x: 1,
    y: 3 / 16,
    z: 1
});
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorMoon, {
    isGenerator: function () {
        return true;
    },
    energyTick: function (type, src) {
        var light = World.getLightLevel(this.x, this.y + 1, this.z);
        if (light <= 10 && light >= 0)
            src.add(1);
    }
}, {
    generator: true
});
Translation.addTranslation("Solar Panel", {
    ru: "Солнечная батарея"
});
var solar_texture = {
    side: "block_machine_iron",
    top: "block_energy_solar"
};
if (!Options.isThemeBlack()) {
    solar_texture.top = "light_solar";
    solar_texture.side = "light_iron_machine";
}
IDRegistry.genBlockID("machineEnergyGeneratorSolar");
Block.createBlock("machineEnergyGeneratorSolar", [
    {
        name: "Solar Panel", texture: [
            [solar_texture.side, 0], [solar_texture.top, 0],
            [solar_texture.side, 0], [solar_texture.side, 0],
            [solar_texture.side, 0], [solar_texture.side, 0]
        ],
        inCreative: true
    }
]);
Block.setBlockShape(BlockID.machineEnergyGeneratorSolar, {
    x: 0,
    y: 0,
    z: 0
}, {
    x: 1,
    y: 3 / 16,
    z: 1
});
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorSolar, {
    isGenerator: function () {
        return true;
    },
    energyTick: function (type, src) {
        var light = World.getLightLevel(this.x, this.y + 1, this.z);
        if (light >= 15)
            src.add(1);
    }
}, {
    generator: true
});
Translation.addTranslation("Star Panel", {
    ru: "Звездная батарея"
});
var star_texture = {
    side: "block_machine_iron",
    top: "block_energy_star"
};
if (!Options.isThemeBlack()) {
    star_texture.top = "light_star";
    star_texture.side = "light_iron_machine";
}
IDRegistry.genBlockID("machineEnergyGeneratorStar");
Block.createBlock("machineEnergyGeneratorStar", [
    {
        name: "Star Panel", texture: [
            [star_texture.side, 0], [star_texture.top, 0],
            [star_texture.side, 0], [star_texture.side, 0],
            [star_texture.side, 0], [star_texture.side, 0]
        ],
        inCreative: true
    }
]);
Block.setBlockShape(BlockID.machineEnergyGeneratorStar, {
    x: 0,
    y: 0,
    z: 0
}, {
    x: 1,
    y: 3 / 16,
    z: 1
});
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorStar, {
    isGenerator: function () {
        return true;
    },
    energyTick: function (type, src) {
        var light = World.getLightLevel(this.x, this.y + 1, this.z);
        if (light >= 0)
            src.add(1);
    }
});
Translation.addTranslation("Windmill", {
    ru: "Ветряк"
});
var windmill_texture = {
    side: "block_machine_iron",
    front: "block_energy_millwind"
};
if (!Options.isThemeBlack()) {
    windmill_texture.front = "light_millwind";
    windmill_texture.side = "light_iron_machine";
}
IDRegistry.genBlockID("machineEnergyGeneratorWind");
Block.createBlockWithRotation("machineEnergyGeneratorWind", [
    { name: "Windmill", texture: [
            [windmill_texture.side, 0], [windmill_texture.side, 0],
            [windmill_texture.side, 0], [windmill_texture.front, 0],
            [windmill_texture.side, 0], [windmill_texture.side, 0]
        ], inCreative: true }
], "opaque");
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorWind, {
    defaultValues: {
        output: 0
    },
    isGenerator: function () {
        return true;
    },
    energyTick: function (type, src) {
        if (World.getThreadTime() % 2 == 0) {
            var output = 3;
            if (this.y > 60)
                output += Math.ceil(this.y / 10);
            else
                output -= 1;
            var wether = World.getWeather();
            if (wether.thunder)
                output *= 5;
            else if (wether.rain)
                output *= 1.5;
            var radius = 3;
            if (this.blockSource.getBlockId(this.x - Random.integer(-radius, radius), this.y - Random.integer(-radius, radius), this.z - Random.integer(-radius, radius)) == 0)
                this.data.output = Math.round(output);
            else
                this.data.output = 0;
        }
        src.add(Math.min(30, this.data.output));
    }
}, {
    generator: true
});
Translation.addTranslation("Steam generator", {
    ru: "Паровая турбина"
});
IDRegistry.genBlockID("steam_generator");
Block.createBlock("steam_generator", [{ name: "Steam generator", texture: [["block_machine_iron", 0], ["block_machine_iron", 0], ["energy_heating", 0], ["block_energy_pump", 0], ["energy_heating", 1], ["block_machine_iron", 0]], inCreative: true }]);
TileRenderer.setStandardModelWithRotation(BlockID.steam_generator, 2, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["block_energy_pump", 0], ["energy_heating", 1], ["energy_heating", 0]]);
TileRenderer.setRotationFunction(BlockID.steam_generator);
for (var i_7 = 1; i_7 < 10; i_7++) {
    TileRenderer.registerModelWithRotation(BlockID.steam_generator, i_7 * 4 + 2, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["block_energy_pump", 0], ["energy_heating", i_7], ["energy_heating", 0]]);
}
var SteamGeneratorUI = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Steam generator") } },
        inventory: { standart: true },
        background: { standart: true }
    },
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    drawing: [
        { type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6 },
    ],
    elements: {
        "steam": { type: "scale", x: 350, y: 50, direction: 1, bitmap: "liquid.water_steam", scale: 2.6 },
    }
});
FactAPI.machine.registerEnergtTileAnimation(BlockID.steam_generator, {
    useNetworkItemContainer: true,
    defaultValues: {
        energy: 0,
        energyMax: 100
    },
    getScreenByName: function () {
        return SteamGeneratorUI;
    },
    getAnimation: function (data) {
        var steam = this.liquidStorage.getAmount("water_steam") || 0;
        var max = 9;
        return data + Math.ceil(steam / max * 10) * 4;
    },
    tick: function () {
        this.liquidStorage.setLimit("water_steam", 9);
        this.container.setScale("steam", this.liquidStorage.getAmount("water_steam") / this.liquidStorage.getLimit("water_steam"));
        if (World.getThreadTime() % 20 == 0)
            this.updateAnimation();
        var steam = this.liquidStorage.getAmount("water_steam") || 0;
        var max = 9;
        if (Math.ceil(steam / max * 10) >= 10) {
            this.blockSource.setBlock(this.x, this.y, this.z, 0, 0);
            this.blockSource.explode(this.x + 0.5, this.y + 0.5, this.z + 0.5, 2, true);
        }
    },
    MechanicDeploy: function () {
        var str = this.liquidStorage;
        var steam = str.getAmount("water_steam") || 0;
        if (steam <= 0) {
            this.data.energy = 0;
            return;
        }
        var max = 8;
        var v = Math.ceil(steam / max * 100);
        this.data.energy = v;
        this.liquidStorage.setAmount("water_steam", steam - .0002 * v);
    },
    energyTick: function (type, src) {
        var output = Math.max(0, this.data.energy * 4);
        this.data.energy += src.add(output) - output;
    },
}, {
    generator: true
});
StorageInterface.createInterface(BlockID.steam_generator, {
    canReceiveLiquid: function (name) {
        return name == "water_steam";
    },
    canTransportLiquid: function (name) {
        return false;
    }
});
Translation.addTranslation("Assembler Station", {
    ru: "Сборочная станция"
});
var assembler_texture = {
    top: "block_energy_assembler",
    bottom: "block_energy_assembler",
    side: "block_energy_assembler"
};
if (!Options.isThemeBlack()) {
    assembler_texture.top = "light_assembler";
    assembler_texture.bottom = "light_iron_machine";
    assembler_texture.side = "light_assembler";
}
IDRegistry.genBlockID("machineEnergyStationAssembler");
Block.createBlock("machineEnergyStationAssembler", [
    {
        name: "Assembler Station",
        texture: [
            [assembler_texture.bottom, 0],
            [assembler_texture.top, 0],
            [assembler_texture.side, 1],
            [assembler_texture.side, 1],
            [assembler_texture.side, 1],
            [assembler_texture.side, 1]
        ],
        inCreative: true
    }
], "opaque");
var UI_energy_assembler = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Assembler Station")
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6 },
        { type: "bitmap", x: 720, y: 170, bitmap: "progressbar.ground", scale: 4.5 }
    ],
    elements: {
        "slotResult": { type: "slot", x: 850, y: 170, size: 70 },
        "slot0": { type: "slot", x: 435, y: 100, size: 70 },
        "slot1": { type: "slot", x: 505, y: 100, size: 70 },
        "slot2": { type: "slot", x: 575, y: 100, size: 70 },
        "slot3": { type: "slot", x: 435, y: 170, size: 70 },
        "slot4": { type: "slot", x: 505, y: 170, size: 70 },
        "slot5": { type: "slot", x: 575, y: 170, size: 70 },
        "slot6": { type: "slot", x: 435, y: 240, size: 70 },
        "slot7": { type: "slot", x: 505, y: 240, size: 70 },
        "slot8": { type: "slot", x: 575, y: 240, size: 70 },
        "slotI1": { type: "slot", x: 435, y: 320, size: 70 },
        "slotI2": { type: "slot", x: 505, y: 320, size: 70 },
        "slotI3": { type: "slot", x: 575, y: 320, size: 70 },
        "slotI4": { type: "slot", x: 645, y: 320, size: 70 },
        "slotI5": { type: "slot", x: 715, y: 320, size: 70 },
        "slotI6": { type: "slot", x: 435, y: 390, size: 70 },
        "slotI7": { type: "slot", x: 505, y: 390, size: 70 },
        "slotI8": { type: "slot", x: 575, y: 390, size: 70 },
        "slotI9": { type: "slot", x: 645, y: 390, size: 70 },
        "slotI10": { type: "slot", x: 715, y: 390, size: 70 },
        "progressScale": { type: "scale", x: 720, y: 170, direction: 0, scale: 4.5, bitmap: "progressbar.scale" },
        "energyScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale" }
    }
});
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyStationAssembler, {
    useNetworkItemContainer: true,
    defaultValues: {
        time: 200,
        energy_storage: 10000,
        progress: 0
    },
    getScreenByName: function () {
        return UI_energy_assembler;
    },
    isProgress: function (res, slot) {
        return this.data.progress <= this.data.time && res && this.data.energy >= 5 && ((slot.id == res.id && slot.data == res.data && slot.count + res.count <= Item.getMaxStack(res.id)) || slot.count <= 0) && this.isInventoryInRecipe();
    },
    getRecipe: function () {
        var obj = {};
        for (var i_8 = 0; i_8 < 9; i_8++) {
            var item = this.container.getSlot("slot" + i_8);
            if (item.id != 0)
                obj[item.id + ":" + item.data] = (obj[item.id + ":" + item.data] || 0) + 1;
        }
        return obj;
    },
    getInventory: function () {
        var obj = {};
        for (var i_9 = 1; i_9 <= 10; i_9++) {
            var item = this.container.getSlot("slotI" + i_9);
            if (item.id != 0)
                obj[item.id + ":" + item.data] = (obj[item.id + ":" + item.data] || 0) + item.count;
        }
        return obj;
    },
    isInventoryInRecipe: function () {
        var recipe = this.getRecipe();
        var inventory = this.getInventory();
        var keys = Object.keys(recipe);
        for (var i_10 in keys)
            if (!inventory[keys[i_10]] || recipe[keys[i_10]] > inventory[keys[i_10]])
                return false;
        return true;
    },
    craft: function () {
        var recipe = this.getRecipe();
        var keys = Object.keys(recipe);
        for (var a in keys) {
            var count = recipe[keys[a]];
            for (var i_11 = 1; i_11 <= 10; i_11++) {
                var item = this.container.getSlot("slotI" + i_11);
                if (count <= 0 || (item.id != keys[a].split(":")[0] && item.data != keys[a].split(":")[1]))
                    continue;
                item.count -= count;
                count = 0;
                if (item.count < 0)
                    count -= item.count;
                this.container.setSlot("slotI" + i_11, item.id, item.count, item.data, item.extra);
            }
        }
    },
    tick: function () {
        this.container.setScale("progressScale", this.data.progress / this.data.time);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
    },
    MechanicDeploy: function () {
        this.container.setWorkbenchFieldPrefix("slot");
        var res = Recipes.getRecipeResult(this.container);
        var resultSlot = this.container.getSlot("slotResult");
        if (this.isProgress(res, resultSlot)) {
            this.data.progress++;
            this.data.energy -= 5;
            if (this.data.progress >= this.data.time) {
                resultSlot.id = res.id;
                resultSlot.data = res.data;
                resultSlot.count += res.count;
                this.container.setSlot("slotResult", resultSlot.id, resultSlot.count, resultSlot.data);
                this.craft();
                this.data.progress = 0;
                this.container.validateAll();
            }
        }
        else if (this.data.progress > 1)
            this.data.progress -= 2;
    }
});
StorageInterface.createInterface(BlockID.machineEnergyStationAssembler, {
    slots: {
        "slotI^1-10": { input: true, output: false },
        "slotResult": { input: false, output: true }
    },
});
Translation.addTranslation("Repair Station", {
    ru: "Ремонтная станция"
});
var repair_texture = {
    top: "block_energy_repair",
    bottom: "block_machine_iron",
    side: "block_energy_repair"
};
if (!Options.isThemeBlack()) {
    repair_texture.top = "light_repair";
    repair_texture.bottom = "light_iron_machine";
    repair_texture.side = "light_repair";
}
IDRegistry.genBlockID("machineEnergyStationRepair");
Block.createBlock("machineEnergyStationRepair", [
    {
        name: "Repair Station",
        texture: [
            [repair_texture.bottom, 0],
            [repair_texture.top, 0],
            [repair_texture.side, 1],
            [repair_texture.side, 1],
            [repair_texture.side, 1],
            [repair_texture.side, 1]
        ],
        inCreative: true
    }
], "opaque");
var UI_energy_repair = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Repair Station")
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6 },
        { type: "bitmap", x: 585, y: 125, bitmap: "progressbar.ground", scale: 5 }
    ],
    elements: {
        "slotSource": { type: "slot", x: 445, y: 110, size: 100 },
        "slotResult": { type: "slot", x: 735, y: 110, size: 100 },
        "progressScale": { type: "scale", x: 585, y: 125, direction: 0, scale: 5, bitmap: "progressbar.scale" },
        "energyScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale" }
    }
});
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyStationRepair, {
    useNetworkItemContainer: true,
    defaultValues: {
        time: 200,
        energy_storage: 10000,
        progress: 0
    },
    getScreenByName: function () {
        return UI_energy_repair;
    },
    tick: function () {
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.setScale("progressScale", this.data.progress / this.data.time);
    },
    MechanicDeploy(){ 
  let source = this.container.getSlot("slotSource"); 
  let output= this.container.getSlot("slotResult"); 
   
  //let result=FactAPI.recipe.repairStation.get(source.id); 
  if (( this.data.energy >= 5) && ((output.count < 64) && output.id == 0 && source.id != 0)) { 
   this.data.progress++; 
   this.data.energy -= 5; 
   if(this.data.progress>=this.data.time){ 
    this.data.progress=0; 
 
    source.count--; 
 
    output.id=source.id; 
    output.data=0; 
    output.count++; 
 
    this.container.setSlot("slotResult", output.id, output.count, output.data, output.extra); 
    this.container.setSlot("slotSource", source.id, source.count, source.data, output.extra); 
    this.container.validateAll(); 
   } 
  } 
  else{ 
   this.data.progress=0; 
  } 
 }
});
//native
var toRSR = [
    256, 257, 258, 259, 261, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 283, 284, 285, 286, 290, 292, 293, 294, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 346, 359
];
for (var i in toRSR) {
    FactAPI.recipe.repairStation.register(toRSR[i], toRSR[i], 0);
}
StorageInterface.createInterface(BlockID.machineEnergyStationRepair, {
    slots: {
        "slotSource": { input: true, output: false },
        "slotResult": { output: true, input: true }
    }
});
Translation.addTranslation("Magma Crucible", { ru: "Плавитель" });
var crucible_texture = {
    side: "block_machine_iron",
    front: "block_energy_crucible"
};
if (!Options.isThemeBlack()) {
    crucible_texture.side = "light_iron_machine";
    crucible_texture.front = "light_crucible";
}
IDRegistry.genBlockID("machineEnergyLiquidCrucible");
Block.createBlockWithRotation("machineEnergyLiquidCrucible", [
    {
        name: "Magma Crucible",
        texture: [
            [crucible_texture.side, 0], [crucible_texture.side, 0],
            [crucible_texture.side, 0], [crucible_texture.front, 0],
            [crucible_texture.side, 0], [crucible_texture.side, 0]
        ],
        inCreative: true
    }
], "opaque");
var UI_energy_crucible = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Magma Crucible")
            },
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 670, y: 50, bitmap: "liquid.ground", scale: 2.6 },
        { type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6 },
        { type: "bitmap", x: 515, y: 190, bitmap: "progressbar.ground", scale: 5 },
    ],
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    elements: {
        "slotSource": { type: "slot", x: 420, y: 180, size: 85 },
        "liquidScale": { type: "scale", x: 670, y: 50, bitmap: "liquid.lava", direction: 1, scale: 2.6 },
        "energyScale": { type: "scale", x: 350, y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6 },
        "progressScale": { type: "scale", x: 515, y: 190, direction: 0, scale: 5, bitmap: "progressbar.scale" },
        "FillText": { type: "text", x: 800, y: 60, text: "0/16 of lava", height: 60, width: 400, font: { color: android.graphics.Color.rgb(0, 0, 0), size: 18, shadow: 0.1 } },
    }
});
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyLiquidCrucible, {
    useNetworkItemContainer: true,
    defaultValues: {
        progress: 0,
        energy_storage: 10000,
        time: 80
    },
    getScreenByName: function () {
        return UI_energy_crucible;
    },
    init: function () {
        this.liquidStorage.setLimit("lava", 16);
    },
    tick: function () {
        this.container.setScale("liquidScale", this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()) / 16);
        this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        this.container.setScale("progressScale", this.data.progress / this.data.time);
        this.container.setText("FillText", Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())) + "/16 of lava");
    },
    MechanicDeploy: function () {
        var source = this.container.getSlot("slotSource");
        var input = false;
        if (ItemType.is(source.id, "stone"))
            input = true;
        if (input && this.data.energy >= 5 && this.liquidStorage.getAmount("lava") <= 15) {
            this.data.progress++;
            this.data.energy -= 5;
            if (this.data.progress == this.data.time) {
                this.data.progress = 0;
                this.liquidStorage.addLiquid("lava", 1);
                source.count--;
                this.container.validateAll();
            }
        }
        else {
            this.data.progress = 0;
        }
    }
}, {});
StorageInterface.createInterface(BlockID.machineEnergyLiquidCrucible, {
    slots: {
        "slotSource": { input: true, output: false }
    }
});
ItemType.set(1, "stone");
ItemType.set(4, "stone");
ItemType.set(24, "stone");
ItemType.set(48, "stone");
ItemType.set(49, "stone");
ItemType.set(98, "stone");
Translation.addTranslation("Liquid pump", { ru: "Жидкостный насос" });
Translation.addTranslation("Liquid Loader", { ru: "Жидкостный загрузчик" });
IDRegistry.genBlockID("machineEnergyLiquidPump");
Block.createBlock("machineEnergyLiquidPump", [
    {
        name: "Liquid pump",
        texture: [
            ["block_energy_reel", 0],
            ["block_energy_disassembler", 0],
            ["block_energy_disassembler", 0],
            ["block_energy_disassembler", 0],
            ["block_energy_disassembler", 0],
            ["block_energy_disassembler", 0]
        ],
        inCreative: true
    }
], "opaque");
IDRegistry.genBlockID("machineEnergyLiquidLoader");
Block.createBlock("machineEnergyLiquidLoader", [
    {
        name: "Liquid Loader",
        texture: [
            ["block_energy_reel", 0],
            ["block_net_energy", 0],
            ["block_net_energy", 0],
            ["block_net_energy", 0],
            ["block_net_energy", 0],
            ["block_net_energy", 0]
        ],
        inCreative: true
    }
], "opaque");
var blocksCheck = [
    { x: 0, y: -1, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: 1, y: 0, z: 0 },
    { x: 0, y: 0, z: -1 },
    { x: 0, y: 0, z: 1 },
];
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyLiquidLoader, {
    defaultValues: {
        energy_storage: 100
    },
    useNetworkItemContainer: true,
    getScreenName: function () { return; },
    MechanicDeploy: function () {
    }
}, { liquid: true });
TileEntity.registerPrototype(BlockID.liquid_pipe, {
    defaultValues: {
        check: false
    },
    tick: function () {
        if (World.getThreadTime() % 6 == 0)
            this.data.check = false;
    },
    click: function (id, count, data, coords, player) {
        if (Entity.getSneaking(player) && ItemType.is(id, "wrench")) {
            this.blockSource.spawnDroppedItem(this.x + .5, this.y + .5, this.z + .5, BlockID.liquid_pipe, 1, 0);
            this.blockSource.destroyBlock(this.x, this.y, this.z, false);
        }
    }
});
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyLiquidPump, {
    defaultValues: {
        energy_storage: 100
    },
    useNetworkItemContainer: true,
    getScreenName: function () { return; },
    getBlocks: function (x, y, z, arr) {
        for (var i_12 in blocksCheck) {
            var pos = blocksCheck[i_12];
            var block = this.blockSource.getBlock(x + pos.x, y + pos.y, z + pos.z);
            if (block.id == BlockID.liquid_pipe) {
                var tile = TileEntity.getTileEntity(x + pos.x, y + pos.y, z + pos.z, this.blockSource);
                if (tile && !tile.data.check) {
                    tile.data.check = true;
                    this.getBlocks(x + pos.x, y + pos.y, z + pos.z, arr);
                }
            }
            else if (block.id == BlockID.machineEnergyLiquidLoader) {
                arr.push({ x: x + pos.x, y: y + pos.y, z: z + pos.z });
            }
        }
        return arr;
    },
    input: function (tile, output, pos) {
        var block = TileEntity.getTileEntity(pos.x, pos.y, pos.z, this.blockSource);
        for (var w in blocksCheck) {
            var ip = blocksCheck[w];
            if (block.data.active && block.data.energy >= 5) {
                var input = TileEntity.getTileEntity(pos.x + ip.x, pos.y + ip.y, pos.z + ip.z, this.blockSource);
                if (input) {
                    block.data.energy -= 5;
                    this.data.energy -= 5;
                    try {
                        var liquids = Object.keys(tile.liquidStorage.liquidAmounts);
                        for (var i_13 in liquids)
                            if (output.canTransportLiquid(liquids[i_13], 0))
                                StorageInterface.transportLiquid(liquids[i_13], 200, output, StorageInterface.getLiquidStorage(this.blockSource, pos.x + ip.x, pos.y + ip.y, pos.z + ip.z), 0);
                    }
                    catch (e) {
                        StorageInterface.extractLiquid(null, 200, StorageInterface.getLiquidStorage(this.blockSource, pos.x + ip.x, pos.y + ip.y, pos.z + ip.z), output, 0);
                    }
                }
            }
        }
    },
    pump: function () {
        var blocks = this.getBlocks(this.x, this.y, this.z, []);
        for (var q in blocksCheck) {
            var op = blocksCheck[q];
            var tile = TileEntity.getTileEntity(this.x + op.x, this.y + op.y, this.z + op.z, this.blockSource);
            if (tile) {
                var output = StorageInterface.getLiquidStorage(this.blockSource, this.x + op.x, this.y + op.y, this.z + op.z);
                for (var a in blocks)
                    this.input(tile, output, blocks[a]);
            }
        }
    },
    MechanicDeploy: function () {
        try {
            if (World.getThreadTime() % 20 == 0 && this.data.energy >= 5) {
                this.pump();
            }
        }
        catch (e) {
            Game.message(e);
        }
    }
}, {
    liquid: true
});
Translation.addTranslation("Boiler", {
    ru: "Бойлер"
});
IDRegistry.genBlockID("steam_manufacturer");
Block.createBlock("steam_manufacturer", [{ name: "Boiler", texture: [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["steam_manufacturer", 0], ["block_machine_iron", 0], ["block_machine_iron", 0]], inCreative: true }]);
TileRenderer.setStandardModelWithRotation(BlockID.steam_manufacturer, 2, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["steam_manufacturer", 0], ["block_machine_iron", 0], ["block_machine_iron", 0]]);
TileRenderer.setRotationFunction(BlockID.steam_manufacturer);
TileRenderer.registerModelWithRotation(BlockID.steam_manufacturer, 2, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["steam_manufacturer", 0], ["block_machine_iron", 0], ["block_machine_iron", 0]]);
TileRenderer.registerModelWithRotation(BlockID.steam_manufacturer, 6, [["block_machine_iron", 0], ["block_machine_iron", 0], ["block_machine_iron", 0], ["steam_manufacturer", 1], ["block_machine_iron", 0], ["block_machine_iron", 0]]);
Translation.addTranslation("water steam", {
    ru: "Воденной пар"
});
//steam
Block.createLiquidBlock("water_steam", {
    tickDelay: 2,
    name: "water steam",
    flowing: { texture: ["water_steam", 0] },
    still: { texture: ["water_steam", 0] },
    uiTextures: ["water_steam"],
    modelTextures: ["water_steam"],
    inCreative: false
}, {});
var BoilerUI = new UI.StandartWindow({
    standart: {
        header: { text: { text: Translation.translate("Boiler") } },
        inventory: { standart: true },
        background: { standart: true }
    },
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    drawing: [
        { type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6 },
        { type: "bitmap", x: 450, y: 50, bitmap: "liquid.ground", scale: 2.6 },
        { type: "bitmap", x: 750, y: 50, bitmap: "liquid.ground", scale: 2.6 },
    ],
    elements: {
        "energyScale": { type: "scale", x: 350, y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6 },
        "water": { type: "scale", x: 450, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.water" },
        "steam": { type: "scale", x: 750, y: 50, direction: 1, bitmap: "liquid.water_steam", scale: 2.6 },
    }
});
FactAPI.machine.registerEnergtTileAnimation(BlockID.steam_manufacturer, {
    useNetworkItemContainer: true,
    defaultValues: {
        act: false
    },
    getScreenByName: function () {
        return BoilerUI;
    },
    getAnimation: function (data) {
        if (this.data.act)
            return data + 4;
        return data;
    },
    tick: function () {
        var energyStorage = this.getEnergyStorage();
        this.container.setScale("energyScale", this.data.energy / energyStorage);
        this.liquidStorage.setLimit("water", 8);
        this.liquidStorage.setLimit("water_steam", 8);
        var str = this.liquidStorage;
        this.container.setScale("water", str.getAmount("water") / str.getLimit("water"));
        this.container.setScale("steam", str.getAmount("water_steam") / str.getLimit("water_steam"));
    },
    MechanicDeploy: function () {
        var str = this.liquidStorage;
        var wate = str.getAmount("water") || 0;
        var steam = str.getAmount("water_steam") || 0;
        if (World.getThreadTime() % 20 == 0)
            this.updateAnimation();
        if (wate > 0 && steam < 8) {
            this.data.act = true;
            if (this.data.energy < 3)
                return;
            this.data.energy -= 3;
            this.liquidStorage.setAmount("water", wate - .001);
            this.liquidStorage.setAmount("water_steam", steam + .002);
        }
        else
            this.data.act = false;
    }
});
StorageInterface.createInterface(BlockID.steam_manufacturer, {
    canReceiveLiquid: function (name) {
        return name == "water";
    },
    canTransportLiquid: function (name) {
        return name == "water_steam";
    }
});
Translation.addTranslation("Auto clicker", {
    ru: "Авто кликер"
});
IDRegistry.genBlockID("energyAutoClick");
Block.createBlockWithRotation("energyAutoClick", [
    {
        name: "Auto clicker",
        texture: [
            ["block_machine_iron", 0],
            ["block_machine_iron", 0],
            ["block_machine_iron", 0],
            ["block_energy_reel", 0],
            ["block_machine_iron", 0],
            ["block_machine_iron", 0]
        ],
        inCreative: true
    }
], "opaque");
function getCoords(x, y, z, data) {
    return [
        { x: x, y: y, z: z + 1 },
        { x: x, y: y, z: z - 1 },
        { x: x + 1, y: y, z: z },
        { x: x - 1, y: y, z: z }
    ][data];
}
FactAPI.machine.registerEnergyTile(BlockID.energyAutoClick, {
    defaultValues: {
        energy_storage: 2000,
        player: null
    },
    MechanicDeploy: function () {
        if (World.getThreadTime() % 10 == 0 && this.data.energy >= 500) {
            if (!this.blockSource)
                return;
            this.data.energy -= 500;
            var pos = getCoords(this.x, this.y, this.z, this.blockSource.getBlockData(this.x, this.y, this.z));
            pos.relative = pos;
            pos.side = this.blockSource.getBlockData(this.x, this.y, this.z);
            pos.vec = pos;
            try {
                Item.invokeItemUseOn(pos, { id: 0, data: 0, count: 0 }, false, this.data.player);
            }
            catch (e) {
            }
        }
    },
    click: function (id, count, data, pos, player) {
        this.data.player = player;
        Mp.message(player, "Блок привязан к вам");
    }
});
ModAPI.addAPICallback("ENR", function (api) {
    var AllTransform = {};
    var id = CallbackJS.reg(api.EX.transformation, function (controller) {
        var args = controller.getArguments();
        AllTransform[args[0]] = function () {
            return {
                id: args[1],
                count: args[2],
                data: args[3]
            };
        };
    }, ["pre"]);
    api.EX.transformation = CallbackJS.getRegFunc(id);
    Callback.addCallback("LevelDisplayed", function () {
        var Hammer = api.EX.Hammer;
        var keys = Object.keys(Hammer);
        var _loop_2 = function (i_14) {
            var key = keys[i_14];
            AllTransform[parseInt(key)] = function () {
                if (Hammer[key].output) {
                    var chance = Math.random() * 100;
                    if (chance < 3) {
                        return {
                            id: eval("ItemID.ex_" + Hammer[key].data + Hammer[key].output),
                            count: 7,
                            data: 0
                        };
                    }
                    else if (chance < 15) {
                        return {
                            id: eval("ItemID.ex_" + Hammer[key].data + Hammer[key].output),
                            count: 6,
                            data: 0
                        };
                    }
                    else if (chance < 35) {
                        return {
                            id: eval("ItemID.ex_" + Hammer[key].data + Hammer[key].output),
                            count: 5,
                            data: 0
                        };
                    }
                    else {
                        return {
                            id: eval("ItemID.ex_" + Hammer[key].data + Hammer[key].output),
                            count: 4,
                            data: 0
                        };
                    }
                }
            };
        };
        for (var i_14 in keys) {
            _loop_2(i_14);
        }
    });
    Translation.addTranslation("Auto Hammer", {
        ru: "Автоматический молот"
    });
    var hammer_texture = {
        front: "block_energy_destroyer",
        side: "block_machine_iron"
    };
    if (!Options.isThemeBlack()) {
        hammer_texture.front = "light_destroyer";
        hammer_texture.side = "light_iron_machine";
    }
    IDRegistry.genBlockID("energyAutoHammer");
    Block.createBlockWithRotation("energyAutoHammer", [
        { name: "Auto Hammer", texture: [
                [hammer_texture.side, 0],
                [hammer_texture.side, 0],
                [hammer_texture.side, 0],
                [hammer_texture.front, 0],
                [hammer_texture.side, 0],
                [hammer_texture.side, 0]
            ], inCreative: true }
    ], "opaque");
    var UI_auto_hammer = new UI.StandartWindow({
        standart: {
            header: {
                text: {
                    text: Translation.translate("Auto Hammer")
                },
            },
            inventory: {
                standart: true
            },
            background: {
                standart: true
            }
        },
        params: {
            slot: "slotFactory",
            invSlot: "slotFactory",
            selection: "selectionFactory"
        },
        drawing: [
            { type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6 },
            { type: "bitmap", x: 585, y: 170, bitmap: "progressbar.ground", scale: 4.5 }
        ],
        elements: {
            "slotInput": { type: "slot", x: 500, y: 170, size: 70 },
            "slotResult": { type: "slot", x: 700, y: 170, size: 70 },
            "progressScale": { type: "scale", x: 585, y: 170, direction: 0, scale: 4.5, bitmap: "progressbar.scale" },
            "energyScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale" }
        }
    });
    FactAPI.machine.registerEnergyTile(BlockID.energyAutoHammer, {
        useNetworkItemContainer: true,
        defaultValues: {
            progress: 0,
            energy_storage: 5000
        },
        getConfig: function () {
            return {
                time: 100
            };
        },
        getScreenByName: function () {
            return UI_auto_hammer;
        },
        tick: function () {
            var cfg = this.getConfig();
            this.container.setScale("progressScale", this.data.progress / cfg.time);
            this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        },
        MechanicDeploy: function () {
            StorageInterface.checkHoppers(this);
            var cfg = this.getConfig();
            var slotInput = this.container.getSlot("slotInput");
            var slotResult = this.container.getSlot("slotResult");
            var result = AllTransform[slotInput.id];
            if (result && this.data.energy >= 6) {
                result = AllTransform[slotInput.id]();
                if ((slotResult.id == result.id || slotResult.id == 0)) {
                    this.data.energy -= 6;
                    this.data.progress++;
                    if (this.data.progress >= cfg.time) {
                        slotInput.count--;
                        slotResult.id = result.id;
                        slotResult.data = result.data;
                        slotResult.count += result.count;
                        this.container.setSlot("slotInput", slotInput.id, slotInput.count, slotInput.data);
                        this.container.setSlot("slotResult", slotResult.id, slotResult.count, slotResult.data);
                        this.data.progress = cfg.time / 2;
                        this.container.validateAll();
                    }
                }
                else if (this.data.progress >= 1)
                    this.data.progress -= 10;
            }
            else if (this.data.progress >= 1)
                this.data.progress -= 10;
        }
    });
    StorageInterface.createInterface(BlockID.energyAutoHammer, {
        slots: {
            "slotInput": { output: false, input: true },
            "slotResult": { output: true, input: false }
        },
    });
});
//create Reider ___ size - 16
var auto_sieve = (function (obj, texture_default, data_default) {
    obj = obj || {};
    var texture = texture_default || 1, data = data_default || 0;
    var model = new RenderUtil.Model();
    //group - group
    model.addBoxByBlock("cube", 0, 0, 0, 1, 1, 0.125, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
    model.addBoxByBlock("cube_2", 0, 0, 0.875, 1, 1, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
    model.addBoxByBlock("cube_3", 0, 0, 0.125, 0.125, 1, 0.875, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
    model.addBoxByBlock("cube_4", 0.875, 0, 0.125, 1, 1, 0.875, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
    model.addBoxByBlock("cube_5", 0.125, 0, 0.125, 0.875, 0.9375, 0.875, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
    return model;
}); //boxes - 5
ModAPI.addAPICallback("ENR", function (api) {
    Translation.addTranslation("Auto sieve", {
        ru: "Автоматическое сито"
    });
    IDRegistry.genBlockID("energyAutoSieve");
    Block.createBlockWithRotation("energyAutoSieve", [
        { name: "Auto sieve", texture: [
                ["auto_sieve", 1],
                ["auto_sieve", 0],
                ["auto_sieve", 2],
                ["auto_sieve", 2],
                ["auto_sieve", 2],
                ["auto_sieve", 2]
            ], inCreative: true }
    ], "opaque");
    auto_sieve(null, BlockID.energyAutoSieve).setBlockModel(BlockID.energyAutoSieve, 0);
    var AutoSieve = new UI.StandartWindow({
        standart: {
            header: {
                text: {
                    text: Translation.translate("Auto sieve")
                },
            },
            inventory: {
                standart: true
            },
            background: {
                standart: true
            }
        },
        params: {
            slot: "slotFactory",
            invSlot: "slotFactory",
            selectionFactoryon: "selectionFactory"
        },
        drawing: [
            { type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6 },
            { type: "bitmap", x: 560, y: 40, bitmap: "progressbar.ground", scale: 4.5 }
        ],
        elements: {
            "input": { type: "slot", x: 470, y: 10 + 30, size: 70 },
            "energyScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale" },
            "progressScale": { type: "scale", x: 560, y: 40, direction: 0, scale: 4.5, bitmap: "progressbar.scale" },
            "slot1": { type: "slot", x: 470, y: 60 + 60, size: 70 },
            "slot2": { type: "slot", x: 540, y: 60 + 60, size: 70 },
            "slot3": { type: "slot", x: 610, y: 60 + 60, size: 70 },
            "slot4": { type: "slot", x: 680, y: 60 + 60, size: 70 },
            "slot5": { type: "slot", x: 750, y: 60 + 60, size: 70 },
            "slot6": { type: "slot", x: 820, y: 60 + 60, size: 70 },
            "slot7": { type: "slot", x: 890, y: 60 + 60, size: 70 },
            "slot8": { type: "slot", x: 470, y: 130 + 60, size: 70 },
            "slot9": { type: "slot", x: 540, y: 130 + 60, size: 70 },
            "slot10": { type: "slot", x: 610, y: 130 + 60, size: 70 },
            "slot11": { type: "slot", x: 680, y: 130 + 60, size: 70 },
            "slot12": { type: "slot", x: 750, y: 130 + 60, size: 70 },
            "slot13": { type: "slot", x: 820, y: 130 + 60, size: 70 },
            "slot14": { type: "slot", x: 890, y: 130 + 60, size: 70 },
            "slot15": { type: "slot", x: 470, y: 200 + 60, size: 70 },
            "slot16": { type: "slot", x: 540, y: 200 + 60, size: 70 },
            "slot17": { type: "slot", x: 610, y: 200 + 60, size: 70 },
            "slot18": { type: "slot", x: 680, y: 200 + 60, size: 70 },
            "slot19": { type: "slot", x: 750, y: 200 + 60, size: 70 },
            "slot20": { type: "slot", x: 820, y: 200 + 60, size: 70 },
            "slot21": { type: "slot", x: 890, y: 200 + 60, size: 70 },
            "slot22": { type: "slot", x: 470, y: 270 + 60, size: 70 },
            "slot23": { type: "slot", x: 540, y: 270 + 60, size: 70 },
            "slot24": { type: "slot", x: 610, y: 270 + 60, size: 70 },
            "slot25": { type: "slot", x: 680, y: 270 + 60, size: 70 },
            "slot26": { type: "slot", x: 750, y: 270 + 60, size: 70 },
            "slot27": { type: "slot", x: 820, y: 270 + 60, size: 70 },
            "slot28": { type: "slot", x: 890, y: 270 + 60, size: 70 },
        }
    });
    var Sieve = api.Sieve;
    FactAPI.machine.registerEnergyTile(BlockID.energyAutoSieve, {
        useNetworkItemContainer: true,
        defaultValues: {
            progress: 0
        },
        getScreenByName: function () {
            return AutoSieve;
        },
        getConfig: function () {
            return {
                time: 50
            };
        },
        putChest: function (item) {
            var a = FactAPI.machineContainer.addItemToContainer(this.container, item);
            if (a)
                this.blockSource.spawnDroppedItem(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, a, item.data);
        },
        addDrops: function (block) {
            var drops = Sieve[block.id];
            var keys = Object.keys(drops);
            for (var i_15 in keys) {
                try {
                    var drop = drops[keys[i_15]];
                    if (Math.random() * 100 <= drop.chance + 5) {
                        this.putChest({
                            id: parseInt(keys[i_15]),
                            count: Random.integer(drop.dropmin + 1, drop.dropmax + 1),
                            data: drop.data,
                        });
                    }
                }
                catch (e) {
                }
            }
        },
        tick: function () {
            var cfg = this.getConfig();
            this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
            this.container.setScale("progressScale", this.data.progress / cfg.time);
        },
        MechanicDeploy: function () {
            StorageInterface.checkHoppers(this);
            var cfg = this.getConfig();
            var input = this.container.getSlot("input");
            var result = Sieve.sieve[input.id];
            if (result && this.data.energy >= 13) {
                this.data.energy -= 13;
                this.data.progress++;
                if (this.data.progress >= cfg.time) {
                    this.addDrops(input);
                    this.data.progress = 0;
                    this.container.setSlot("input", input.id, input.count - 1, input.data);
                    this.container.validateAll();
                }
            }
            else if (this.data.progress > 0) {
                this.data.progress -= 5;
            }
        }
    });
    StorageInterface.createInterface(BlockID.energyAutoSieve, {
        slots: {
            "input": { output: false, input: true },
            "slot^1-28": { output: true, input: false }
        },
    });
});
ModAPI.addAPICallback("ProjectE", function () {
    Translation.addTranslation("Cobblestone generator", {
        ru: "Генератор булыжника"
    });
    IDRegistry.genBlockID("cobblestone_generator");
    Block.createBlockWithRotation("cobblestone_generator", [
        { name: "Cobblestone generator", texture: [
                ["cobblestone_generator", 0],
                ["cobblestone_generator", 0],
                ["cobblestone_generator", 0],
                ["cobblestone_generator_front", 0],
                ["cobblestone_generator", 0],
                ["cobblestone_generator", 0]
            ], inCreative: true }
    ], "opaque");
    IDRegistry.genBlockID("cobblestone_generator1");
    Block.createBlockWithRotation("cobblestone_generator1", [
        { name: "Cobblestone generator", texture: [
                ["cobblestone_generator", 1],
                ["cobblestone_generator", 1],
                ["cobblestone_generator", 1],
                ["cobblestone_generator_front", 1],
                ["cobblestone_generator", 1],
                ["cobblestone_generator", 1]
            ], inCreative: true }
    ], "opaque");
    IDRegistry.genBlockID("cobblestone_generator2");
    Block.createBlockWithRotation("cobblestone_generator2", [
        { name: "Cobblestone generator", texture: [
                ["cobblestone_generator", 2],
                ["cobblestone_generator", 2],
                ["cobblestone_generator", 2],
                ["cobblestone_generator_front", 2],
                ["cobblestone_generator", 2],
                ["cobblestone_generator", 2]
            ], inCreative: true }
    ], "opaque");
    var UI_cobblestone_generator = new UI.StandartWindow({
        standart: {
            header: {
                text: {
                    text: Translation.translate("Cobblestone generator")
                },
            },
            inventory: {
                standart: true
            },
            background: {
                standart: true
            }
        },
        params: {
            slot: "slotFactory",
            invSlot: "slotFactory",
            selection: "selectionFactory"
        },
        drawing: [
            { type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6 },
        ],
        elements: {
            "energyScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale" },
            "slotResult": { type: "slot", x: 700, y: 170, size: 70 },
        }
    });
    FactAPI.machine.registerEnergyTile(BlockID.cobblestone_generator, {
        useNetworkItemContainer: true,
        defaultValues: {
            progress: 0
        },
        getConfig: function () {
            return {
                time: 30 / this.getTierBlock()
            };
        },
        getScreenByName: function () {
            return UI_cobblestone_generator;
        },
        tick: function () {
            StorageInterface.checkHoppers(this);
            this.container.setScale("energyScale", this.data.energy / this.getEnergyStorage());
        },
        MechanicDeploy: function () {
            var cfg = this.getConfig();
            if (World.getThreadTime() % cfg.time == 0 && this.data.energy >= 10) {
                this.data.energy -= 10;
                var slot = this.container.getSlot("slotResult");
                if (slot.count + 1 <= Item.getMaxStack(VanillaBlockID.cobblestone && (slot.id == 0 || slot.id == VanillaBlockID.cobblestone))) {
                    this.container.setSlot("slotResult", VanillaBlockID.cobblestone, slot.count + 1, 0);
                }
            }
        }
    }, {
        updates: [BlockID.cobblestone_generator, BlockID.cobblestone_generator1, BlockID.cobblestone_generator2],
        update_items: [ItemID.factory_update_1, ItemID.factory_update_2]
    });
    StorageInterface.createInterface(BlockID.cobblestone_generator, {
        slots: {
            "slotResult": { output: true, input: false }
        },
    });
    StorageInterface.createInterface(BlockID.cobblestone_generator1, {
        slots: {
            "slotResult": { output: true, input: false }
        },
    });
    StorageInterface.createInterface(BlockID.cobblestone_generator2, {
        slots: {
            "slotResult": { output: true, input: false }
        },
    });
});
Translation.addTranslation("Mechanic Farm", {
    ru: "Механическая ферма"
});
IDRegistry.genBlockID("machineMechanicFarm");
Block.createBlockWithRotation("machineMechanicFarm", [
    { name: "Mechanic Farm", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_farm", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true }
], "opaque");
var UI_mechanic_farm = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Mechanic Farm")
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6 },
        { type: "bitmap", x: 655, y: 350, bitmap: "progressbar.ground", scale: 5 },
        { type: "bitmap", x: 560, y: 345, bitmap: "gear", scale: 5 }
    ],
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selectionFactoryon: "selectionFactory"
    },
    elements: {
        "progressScale": { type: "scale", x: 655, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale" },
        "waterScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.water" },
        "slot1": { type: "slot", x: 470, y: 60, size: 70 },
        "slot2": { type: "slot", x: 540, y: 60, size: 70 },
        "slot3": { type: "slot", x: 610, y: 60, size: 70 },
        "slot4": { type: "slot", x: 680, y: 60, size: 70 },
        "slot5": { type: "slot", x: 750, y: 60, size: 70 },
        "slot6": { type: "slot", x: 820, y: 60, size: 70 },
        "slot7": { type: "slot", x: 890, y: 60, size: 70 },
        "slot8": { type: "slot", x: 470, y: 130, size: 70 },
        "slot9": { type: "slot", x: 540, y: 130, size: 70 },
        "slot10": { type: "slot", x: 610, y: 130, size: 70 },
        "slot11": { type: "slot", x: 680, y: 130, size: 70 },
        "slot12": { type: "slot", x: 750, y: 130, size: 70 },
        "slot13": { type: "slot", x: 820, y: 130, size: 70 },
        "slot14": { type: "slot", x: 890, y: 130, size: 70 },
        "slot15": { type: "slot", x: 470, y: 200, size: 70 },
        "slot16": { type: "slot", x: 540, y: 200, size: 70 },
        "slot17": { type: "slot", x: 610, y: 200, size: 70 },
        "slot18": { type: "slot", x: 680, y: 200, size: 70 },
        "slot19": { type: "slot", x: 750, y: 200, size: 70 },
        "slot20": { type: "slot", x: 820, y: 200, size: 70 },
        "slot21": { type: "slot", x: 890, y: 200, size: 70 },
        "slot22": { type: "slot", x: 470, y: 270, size: 70 },
        "slot23": { type: "slot", x: 540, y: 270, size: 70 },
        "slot24": { type: "slot", x: 610, y: 270, size: 70 },
        "slot25": { type: "slot", x: 680, y: 270, size: 70 },
        "slot26": { type: "slot", x: 750, y: 270, size: 70 },
        "slot27": { type: "slot", x: 820, y: 270, size: 70 },
        "slot28": { type: "slot", x: 890, y: 270, size: 70 },
        "slotU1": { type: "slot", x: 470, y: 430, size: 70 },
        "slotU2": { type: "slot", x: 540, y: 430, size: 70 },
        "slotU3": { type: "slot", x: 610, y: 430, size: 70 },
        "slotU4": { type: "slot", x: 680, y: 430, size: 70 },
        "slotU5": { type: "slot", x: 750, y: 430, size: 70 },
        "slotU6": { type: "slot", x: 820, y: 430, size: 70 },
        "slotU7": { type: "slot", x: 890, y: 430, size: 70 },
    }
});
FactAPI.machine.registerTile(BlockID.machineMechanicFarm, {
    useNetworkItemContainer: true,
    defaultValues: {
        progress: 0,
        index: 0
    },
    getScreenByName: function () {
        return UI_mechanic_farm;
    },
    getConfig: function () {
        return {
            time: 100
        };
    },
    putChest: function (item) {
        var a = FactAPI.machineContainer.addItemToContainer(this.container, item);
        if (a)
            this.blockSource.spawnDroppedItem(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, a, item.data);
    },
    tick: function () {
        if (!this.data.act) {
            this.liquidStorage.setLimit("water", 16);
            this.liquidStorage.addLiquid("water", 0.000001);
            this.data.act = 1;
        }
        if (!this.data.index)
            this.data.index = 0;
        var cfg = this.getConfig();
        this.container.setScale("progressScale", this.data.progress / cfg.time);
        this.container.setScale("waterScale", (this.liquidStorage.getAmount("water") || 0) / 16);
    },
    MechanicDeploy: function () {
        this.makeFarmlands();
        this.waterFarmlands();
        this.growPlants();
        var block = this.blockSource.getBlock(this.x, this.y - 1, this.z);
        if ((block.id == 8 || block.id == 9) && block.data == 0 && this.liquidStorage.getAmount("water") < 16) {
            this.blockSource.destroyBlock(this.x, this.y - 1, this.z);
            this.liquidStorage.addLiquid("water", 1);
        }
        var container = World.getContainer(this.x, this.y + 1, this.z, this.blockSource);
        if (container && container.tileEntity && container.tileEntity.isFactoryTank) {
            var storage = container.tileEntity.liquidStorage;
            var amount = storage.getAmount("water");
            if (this.liquidStorage.getAmount("water") < 16 && amount >= 1) {
                this.liquidStorage.addLiquid("water", 1);
                storage.getLiquid("water", 1);
            }
        }
    },
    makeFarmlands: function () {
        for (var x = 0; x < 9; x++)
            for (var z = 0; z < 9; z++)
                for (var y = 10 + (this.data.modY / 2); y > -10 - (this.data.modY / 2); y--) {
                    var id = this.blockSource.getBlockId(this.x - 4 + x, this.y + y, this.z - 4 + z);
                    if ((id == 3 || id == 2) && this.blockSource.getBlockId(this.x - 4 + x, this.y + y + 1, this.z - 4 + z) == 0) {
                        this.blockSource.setBlock(this.x - 4 + x, this.y + y, this.z - 4 + z, 60, 0);
                        return;
                    }
                }
    },
    waterFarmlands: function () {
        for (var x = 0; x < 9; x++)
            for (var z = 0; z < 9; z++)
                for (var y = 10 + (this.data.modY / 2); y > -10 - (this.data.modY / 2); y--) {
                    if (this.liquidStorage.getAmount("water") >= 1) {
                        var block = this.blockSource.getBlock(this.x - 4 + x, this.y + y, this.z - 4 + z);
                        if (block.id == 60 && block.data == 0) {
                            this.blockSource.setBlock(this.x - 4 + x, this.y + y, this.z - 4 + z, this.blockSource.getBlockId(this.x - 4 + x, this.y + y, this.z - 4 + z), 7);
                            this.liquidStorage.getLiquid("water", 1);
                            return;
                        }
                    }
                }
    },
    findFarmland: function () {
        var RANGE = 9;
        var pos = this.data.index % (RANGE * RANGE);
        var x = this.x - parseInt(RANGE / 2) + pos % RANGE;
        var z = this.z - parseInt(RANGE / 2) + parseInt(pos / RANGE);
        this.data.index++;
        for (var y = this.y - 3; y < this.y + 4; y++) {
            if (this.blockSource.getBlockId(x, y, z) == 60) {
                return {
                    x: x,
                    y: y,
                    z: z
                };
            }
        }
        return null;
    },
    growPlants: function () {
        var CROPS = FactAPI.farm.crops;
        var SEEDS = FactAPI.farm.seeds;
        var DATAS = FactAPI.farm.datas;
        var farmlandCoords = this.findFarmland();
        if (farmlandCoords) {
            var block = this.blockSource.getBlock(farmlandCoords.x, farmlandCoords.y + 1, farmlandCoords.z);
            if (CROPS[block.id]) {
                if (block.data >= DATAS[block.id]) {
                    var drop = CROPS[block.id];
                    this.blockSource.destroyBlock(farmlandCoords.x, farmlandCoords.y + 1, farmlandCoords.z);
                    for (var i_16 in drop)
                        this.putChest({ id: drop[i_16][0], count: drop[i_16][1], data: drop[i_16][2] });
                    return;
                }
                if (block.data < DATAS[block.id]) {
                    if (FactAPI.machineContainer.isItemInContainer(this.container, { id: 351, count: 1, data: 15 })) {
                        FactAPI.machineContainer.giveItemFromContainer(this.container, { id: 351, count: 1, data: 15 });
                        this.blockSource.setBlock(farmlandCoords.x, farmlandCoords.y + 1, farmlandCoords.z, block.id, 7);
                        return;
                    }
                    if (this.liquidStorage.getAmount("water") > 1) {
                        this.liquidStorage.getLiquid("water", 1);
                        this.blockSource.setBlock(farmlandCoords.x, farmlandCoords.y + 1, farmlandCoords.z, block.id, block.data + 1);
                        return;
                    }
                }
            }
            if (block.id == 0) {
                for (var i in SEEDS) {
                    if (FactAPI.machineContainer.isItemInContainer(this.container, { id: i, count: 1, data: 0 })) {
                        FactAPI.machineContainer.giveItemFromContainer(this.container, { id: i, count: 1, data: 0 });
                        this.blockSource.setBlock(farmlandCoords.x, farmlandCoords.y + 1, farmlandCoords.z, SEEDS[i], 0);
                        this.data.progress = 0;
                        return;
                    }
                }
            }
        }
    }
});
StorageInterface.createInterface(BlockID.machineMechanicFarm, {
    slots: {
        "slot^1-28": { output: true }
    },
    canReceiveLiquid: function (name) {
        return false;
    },
    canTransportLiquid: function () {
        return false;
    }
});
Translation.addTranslation("Mechanic Fish Farm", {
    ru: "Механическая ферма рыбы"
});
IDRegistry.genBlockID("machineMechanicFarmFish");
Block.createBlockWithRotation("machineMechanicFarmFish", [
    { name: "Mechanic Fish Farm", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_fishfarm", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true }
], "opaque");
var UI_mechanic_fishfarm = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Mechanic Fish Farm")
            }
        },
        minHeight: 700,
        inventory: { standart: true },
        background: { standart: true }
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5 },
        { type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5 }
    ],
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    elements: {
        "slot1": { type: "slot", x: 400, y: 60, size: 70 },
        "slot2": { type: "slot", x: 470, y: 60, size: 70 },
        "slot3": { type: "slot", x: 540, y: 60, size: 70 },
        "slot4": { type: "slot", x: 610, y: 60, size: 70 },
        "slot5": { type: "slot", x: 680, y: 60, size: 70 },
        "slot6": { type: "slot", x: 750, y: 60, size: 70 },
        "slot7": { type: "slot", x: 820, y: 60, size: 70 },
        "slot8": { type: "slot", x: 400, y: 130, size: 70 },
        "slot9": { type: "slot", x: 470, y: 130, size: 70 },
        "slot10": { type: "slot", x: 540, y: 130, size: 70 },
        "slot11": { type: "slot", x: 610, y: 130, size: 70 },
        "slot12": { type: "slot", x: 680, y: 130, size: 70 },
        "slot13": { type: "slot", x: 750, y: 130, size: 70 },
        "slot14": { type: "slot", x: 820, y: 130, size: 70 },
        "slot15": { type: "slot", x: 400, y: 200, size: 70 },
        "slot16": { type: "slot", x: 470, y: 200, size: 70 },
        "slot17": { type: "slot", x: 540, y: 200, size: 70 },
        "slot18": { type: "slot", x: 610, y: 200, size: 70 },
        "slot19": { type: "slot", x: 680, y: 200, size: 70 },
        "slot20": { type: "slot", x: 750, y: 200, size: 70 },
        "slot21": { type: "slot", x: 820, y: 200, size: 70 },
        "slot22": { type: "slot", x: 400, y: 270, size: 70 },
        "slot23": { type: "slot", x: 470, y: 270, size: 70 },
        "slot24": { type: "slot", x: 540, y: 270, size: 70 },
        "slot25": { type: "slot", x: 610, y: 270, size: 70 },
        "slot26": { type: "slot", x: 680, y: 270, size: 70 },
        "slot27": { type: "slot", x: 750, y: 270, size: 70 },
        "slot28": { type: "slot", x: 820, y: 270, size: 70 },
        "progressScale": { type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale" },
        "slotU1": { type: "slot", x: 400, y: 430, size: 70 },
        "slotU2": { type: "slot", x: 470, y: 430, size: 70 },
        "slotU3": { type: "slot", x: 540, y: 430, size: 70 },
        "slotU4": { type: "slot", x: 610, y: 430, size: 70 },
        "slotU5": { type: "slot", x: 680, y: 430, size: 70 },
        "slotU6": { type: "slot", x: 750, y: 430, size: 70 },
        "slotU7": { type: "slot", x: 820, y: 430, size: 70 },
    }
});
FactAPI.machine.registerTile(BlockID.machineMechanicFarmFish, {
    useNetworkItemContainer: true,
    defaultValues: {
        progress: 0,
        active: true
    },
    getConfig: function () {
        return {
            time: 1000
        };
    },
    getScreenByName: function () {
        return UI_mechanic_fishfarm;
    },
    putChest: function (item) {
        var a = FactAPI.machineContainer.addItemToContainer(this.container, item);
        if (a)
            World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, a, item.data);
    },
    tick: function () {
        var cfg = this.getConfig();
        this.container.setScale("progressScale", this.data.progress / cfg.time);
    },
    MechanicDeploy: function () {
        var count = 0;
        for (var x = 0; x < 9; x++)
            for (var z = 0; z < 9; z++) {
                if (this.blockSource.getBlockId(this.x - 4 + x, this.y, this.z - 4 + z) == BlockID.fishingnet) {
                    if (Math.random() < 0.03)
                        count++;
                }
            }
        if (count > 0)
            this.putChest({ id: 809, count: count, data: 0 });
        this.container.sendChanges();
    }
});
StorageInterface.createInterface(BlockID.machineMechanicFarmFish, {
    slots: {
        "slot^1-28": { output: true }
    }
});
Translation.addTranslation("Mechanic Hoe", {
    ru: "Механический плуг"
});
IDRegistry.genBlockID("machineMechanicHoe");
Block.createBlockWithRotation("machineMechanicHoe", [{
        name: "Mechanic Hoe",
        texture: [
            ["block_machine_wooden", 0],
            ["block_machine_wooden", 0],
            ["block_machine_wooden", 0],
            ["block_mechanic_hoe", 0],
            ["block_machine_wooden", 0],
            ["block_machine_wooden", 0]
        ],
        inCreative: true
    }], "opaque");
var UI_mechanic_hoe = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Mechanic Hoe/Механический плуг"
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    drawing: [
        {
            type: "bitmap",
            x: 0,
            y: 0,
            bitmap: "gui_ground",
            scale: 8
        },
        {
            type: "bitmap",
            x: 585,
            y: 130,
            bitmap: "progressbar.ground",
            scale: 5
        },
        {
            type: "bitmap",
            x: 490,
            y: 130,
            bitmap: "gear",
            scale: 5
        }
    ],
    elements: {
        "progressScale": {
            type: "scale",
            x: 585,
            y: 130,
            direction: 0,
            scale: 5,
            bitmap: "progressbar.scale"
        },
        "slotU1": { type: "slot", x: 400, y: 250, size: 70 },
        "slotU2": { type: "slot", x: 470, y: 250, size: 70 },
        "slotU3": { type: "slot", x: 540, y: 250, size: 70 },
        "slotU4": { type: "slot", x: 610, y: 250, size: 70 },
        "slotU5": { type: "slot", x: 680, y: 250, size: 70 },
        "slotU6": { type: "slot", x: 750, y: 250, size: 70 },
        "slotU7": { type: "slot", x: 820, y: 250, size: 70 },
    }
});
FactAPI.machine.registerTile(BlockID.machineMechanicHoe, {
    useNetworkItemContainer: true,
    defaultValues: {
        progress: 0,
        active: true
    },
    getConfig: function () {
        return {
            time: 100
        };
    },
    getScreenByName: function () {
        return UI_mechanic_hoe;
    },
    tick: function () {
        var cfg = this.getConfig();
        this.container.setScale("progressScale", this.data.progress / cfg.time);
    },
    MechanicDeploy: function () {
        for (var x = 0; x < 9; x++)
            for (var z = 0; z < 9; z++)
                for (var y = 10 + (this.data.modY / 2); y > -10 - (this.data.modY / 2); y--) {
                    if (this.blockSource.getBlockId(this.x - 4 + x, this.y + y, this.z - 4 + z) == 2 && this.blockSource.getBlockId(this.x - 4 + x, this.y + y + 1, this.z - 4 + z) == 0) {
                        this.blockSource.setBlock(this.x - 4 + x, this.y + y, this.z - 4 + z, 60);
                        this.data.progress = 0;
                        return;
                    }
                    if (this.blockSource.getBlockId(this.x - 4 + x, this.y + y, this.z - 4 + z) == 3 && this.blockSource.getBlockId(this.x - 4 + x, this.y + y + 1, this.z - 4 + z) == 0) {
                        this.blockSource.setBlock(this.x - 4 + x, this.y + y, this.z - 4 + z, 60);
                        this.data.progress = 0;
                        return;
                    }
                }
    }
});
Translation.addTranslation("Mechanic Lava Pump", {
    ru: "Механическая лавовая помпа"
});
IDRegistry.genBlockID("machineMechanicPumpLava");
Block.createBlockWithRotation("machineMechanicPumpLava", [
    { name: "Mechanic Lava Pump", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_lavapump", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true }
], "opaque");
var UI_mechanic_lavapump = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Mechanic Lava Pump")
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6 },
        { type: "bitmap", x: 685, y: 150, bitmap: "progressbar.ground", scale: 5 },
    ],
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selectionFactoryon: "selectionFactory"
    },
    elements: {
        "slotSource": { type: "slot", x: 545, y: 135, size: 100 },
        "slotResult": { type: "slot", x: 835, y: 135, size: 100 },
        "progressScale": { type: "scale", x: 685, y: 150, direction: 0, scale: 5, bitmap: "progressbar.ground" },
        "waterScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.lava" }
    }
});
FactAPI.machine.registerTile(BlockID.machineMechanicPumpLava, {
    useNetworkItemContainer: true,
    defaultValues: {
        progress: 0,
        active: true,
        y: -1,
        xx: -8,
        zz: -8,
        x: -8,
        xm: 8,
        z: -8,
        zm: 8
    },
    getConfig: function () {
        return {
            time: 100,
            storage: 16
        };
    },
    init: function () {
        this.liquidStorage.setLimit("lava", this.getConfig().storage);
    },
    getScreenByName: function () {
        return UI_mechanic_lavapump;
    },
    tick: function () {
        StorageInterface.checkHoppers(this);
        this.data.progress ? null : this.data.progress = 0;
        var cfg = this.getConfig();
        this.container.setScale("progressScale", this.data.progress / cfg.time);
        this.container.setScale("waterScale", this.liquidStorage.getAmount("lava") / cfg.storage);
    },
    isLava: function (tile) {
        return (tile.id == 10 || tile.id == 11) && tile.data == 0;
    },
    pump: function (x, y, z) {
        if (this.isLava(this.blockSource.getBlock(x, y, z)) && this.liquidStorage.getAmount("lava") <= this.getConfig().storage - 1) {
            this.blockSource.setBlock(x, y, z, 0, 0);
            this.liquidStorage.addLiquid("lava", 1);
        }
    },
    MechanicDeploy: function () {
        while (true) {
            var pos = {
                x: this.x + this.data.xx,
                y: this.y + this.data.y,
                z: this.z + this.data.zz
            };
            if (this.isLava(this.blockSource.getBlock(pos.x, pos.y, pos.z))) {
                this.pump(pos.x, pos.y, pos.z);
                break;
            }
            else {
                if (pos.y <= 1)
                    break;
                if (this.data.xx >= this.data.xm) {
                    this.data.xx = this.data.x;
                    this.data.zz++;
                }
                if (this.data.zz >= this.data.zm) {
                    this.data.zz = this.data.z;
                    this.data.y--;
                }
                this.data.xx++;
            }
        }
        var sourceSlot = this.container.getSlot("slotSource");
        var resultSlot = this.container.getSlot("slotResult");
        if ((sourceSlot.id == 325 && sourceSlot.data == 0) && this.liquidStorage.getAmount("lava") >= 1 && ((resultSlot.id == 325 && resultSlot.data == 10 && resultSlot.count < 64) || resultSlot.id == 0)) {
            sourceSlot.count--;
            resultSlot.id = 325;
            resultSlot.data = 10;
            resultSlot.count++;
            this.liquidStorage.getLiquid("lava", 1);
            this.container.validateAll();
        }
    }
});
StorageInterface.createInterface(BlockID.machineMechanicPumpLava, {
    slots: {
        "slotSource": { input: true },
        "slotResult": { output: true }
    },
    canReceiveLiquid: function () {
        return false;
    },
    canTransportLiquid: function (name) {
        return name == "lava";
    }
});
Translation.addTranslation("Mechanic Water Pump", {
    ru: "Механическая водяная помпа"
});
IDRegistry.genBlockID("machineMechanicPumpWater");
Block.createBlockWithRotation("machineMechanicPumpWater", [
    { name: "Mechanic Water Pump", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_waterpump", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true }
], "opaque");
var UI_mechanic_waterpump = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Mechanic Water Pump")
            },
        },
        minHeight: 700,
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6 },
        { type: "bitmap", x: 685, y: 150, bitmap: "progressbar.ground", scale: 5 },
    ],
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selectionFactoryon: "selectionFactory"
    },
    elements: {
        "slotSource": { type: "slot", x: 545, y: 135, size: 100 },
        "slotResult": { type: "slot", x: 835, y: 135, size: 100 },
        "progressScale": { type: "scale", x: 685, y: 150, direction: 0, scale: 5, bitmap: "progressbar.ground" },
        "waterScale": { type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "liquid.water" }
    }
});
FactAPI.machine.registerTile(BlockID.machineMechanicPumpWater, {
    useNetworkItemContainer: true,
    defaultValues: {
        progress: 0,
        active: true
    },
    getConfig: function () {
        return {
            time: 100,
            storage: 16
        };
    },
    init: function () {
        this.liquidStorage.setLimit("water", this.getConfig().storage);
    },
    getScreenByName: function () {
        return UI_mechanic_waterpump;
    },
    tick: function () {
        StorageInterface.checkHoppers(this);
        this.data.progress ? null : this.data.progress = 0;
        var cfg = this.getConfig();
        this.container.setScale("progressScale", this.data.progress / cfg.time);
        this.container.setScale("waterScale", this.liquidStorage.getAmount("water") / cfg.storage);
    },
    MechanicDeploy: function () {
        var tile = this.blockSource.getBlock(this.x, this.y - 1, this.z);
        if ((tile.id == 8 || tile.id == 9) && tile.data == 0 && this.liquidStorage.getAmount("water") <= this.getConfig().storage - 1) {
            this.blockSource.setBlock(this.x, this.y - 1, this.z, 0, 0);
            this.liquidStorage.addLiquid("water", 1);
        }
        var liqStor = World.getTileEntity(this.x, this.y - 1, this.z, this.blockSource);
        if (liqStor && this.liquidStorage.getAmount("water") <= this.getConfig().storage - 1) {
            if (liqStor.liquidStorage.getAmount("water") >= 1) {
                var got = liqStor.liquidStorage.getLiquid("water", 1);
                this.liquidStorage.addLiquid("water", 1);
            }
        }
        var sourceSlot = this.container.getSlot("slotSource");
        var resultSlot = this.container.getSlot("slotResult");
        if ((sourceSlot.id == 325 && sourceSlot.data == 0) && this.liquidStorage.getAmount("water") >= 1 && ((resultSlot.id == 325 && resultSlot.data == 8 && resultSlot.count < 64) || resultSlot.id == 0)) {
            sourceSlot.count--;
            resultSlot.id = 325;
            resultSlot.data = 8;
            resultSlot.count++;
            this.liquidStorage.getLiquid("water", 1);
            this.container.validateAll();
        }
    }
}, { item: true, liquid: true });
StorageInterface.createInterface(BlockID.machineMechanicPumpWater, {
    slots: {
        "slotSource": { input: true },
        "slotResult": { output: true }
    },
    canReceiveLiquid: function () {
        return false;
    },
    canTransportLiquid: function (name) {
        return name == "water";
    }
});
Translation.addTranslation("Mechanic Quarry", {
    ru: "Механический карьер"
});
IDRegistry.genBlockID("machineMechanicQuarry");
Block.createBlockWithRotation("machineMechanicQuarry", [
    { name: "Mechanic Quarry", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_quarry", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true }
], "opaque");
var UI_mechanic_quarry = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Mechanic Quarry")
            }
        },
        minHeight: 700,
        inventory: { standart: true },
        background: { standart: true }
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5 },
        { type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5 }
    ],
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    elements: {
        "slot1": { type: "slot", x: 400, y: 60, size: 70 },
        "slot2": { type: "slot", x: 470, y: 60, size: 70 },
        "slot3": { type: "slot", x: 540, y: 60, size: 70 },
        "slot4": { type: "slot", x: 610, y: 60, size: 70 },
        "slot5": { type: "slot", x: 680, y: 60, size: 70 },
        "slot6": { type: "slot", x: 750, y: 60, size: 70 },
        "slot7": { type: "slot", x: 820, y: 60, size: 70 },
        "slot8": { type: "slot", x: 400, y: 130, size: 70 },
        "slot9": { type: "slot", x: 470, y: 130, size: 70 },
        "slot10": { type: "slot", x: 540, y: 130, size: 70 },
        "slot11": { type: "slot", x: 610, y: 130, size: 70 },
        "slot12": { type: "slot", x: 680, y: 130, size: 70 },
        "slot13": { type: "slot", x: 750, y: 130, size: 70 },
        "slot14": { type: "slot", x: 820, y: 130, size: 70 },
        "slot15": { type: "slot", x: 400, y: 200, size: 70 },
        "slot16": { type: "slot", x: 470, y: 200, size: 70 },
        "slot17": { type: "slot", x: 540, y: 200, size: 70 },
        "slot18": { type: "slot", x: 610, y: 200, size: 70 },
        "slot19": { type: "slot", x: 680, y: 200, size: 70 },
        "slot20": { type: "slot", x: 750, y: 200, size: 70 },
        "slot21": { type: "slot", x: 820, y: 200, size: 70 },
        "slot22": { type: "slot", x: 400, y: 270, size: 70 },
        "slot23": { type: "slot", x: 470, y: 270, size: 70 },
        "slot24": { type: "slot", x: 540, y: 270, size: 70 },
        "slot25": { type: "slot", x: 610, y: 270, size: 70 },
        "slot26": { type: "slot", x: 680, y: 270, size: 70 },
        "slot27": { type: "slot", x: 750, y: 270, size: 70 },
        "slot28": { type: "slot", x: 820, y: 270, size: 70 },
        "progressScale": { type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale" },
        "slotU1": { type: "slot", x: 400, y: 430, size: 70 },
        "slotU2": { type: "slot", x: 470, y: 430, size: 70 },
        "slotU3": { type: "slot", x: 540, y: 430, size: 70 },
        "slotU4": { type: "slot", x: 610, y: 430, size: 70 },
        "slotU5": { type: "slot", x: 680, y: 430, size: 70 },
        "slotU6": { type: "slot", x: 750, y: 430, size: 70 },
        "slotU7": { type: "slot", x: 820, y: 430, size: 70 },
    }
});
FactAPI.machine.registerTile(BlockID.machineMechanicQuarry, {
    useNetworkItemContainer: true,
    defaultValues: {
        progress: 0,
        active: true
    },
    getConfig: function () {
        return {
            time: 100
        };
    },
    getScreenByName: function () {
        return UI_mechanic_quarry;
    },
    putChest: function (item) {
        var a = FactAPI.machineContainer.addItemToContainer(this.container, item);
        if (a)
            this.blockSource.spawnDroppedItem(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, a, item.data);
    },
    tick: function () {
        var cfg = this.getConfig();
        this.container.setScale("progressScale", this.data.progress / cfg.time);
    },
    MechanicDeploy: function () {
        if (!this.data.digX) {
            this.data.digY = this.y - 1;
            this.data.digX = this.x - 5;
            this.data.digZ = this.z - 4;
        }
        if (!this.data.complete) {
            var range = 4;
            if (this.data.digX++ > this.x + range - 1) {
                this.data.digX = this.x - range;
                if (this.data.digZ++ > this.z + range - 1) {
                    this.data.digZ = this.z - range;
                    this.data.digX = this.x - range;
                    if (this.data.digY-- < this.y - 31 - this.data.modY)
                        this.data.complete = true;
                }
            }
            var block = this.blockSource.getBlock(this.data.digX, this.data.digY, this.data.digZ);
            if (block.id == 7 || block.id == 8 || block.id == 9 || block.id == 10 || block.id == 11)
                return;
            var coords = { x: this.data.digX, y: this.data.digY, z: this.data.digZ };
            var drop = FactAPI.getBlockDrop(coords, block.id, block.data, 274);
            this.blockSource.destroyBlock(this.data.digX, this.data.digY, this.data.digZ);
            for (var i_17 in drop)
                this.putChest({ id: drop[i_17][0], count: drop[i_17][1], data: drop[i_17][2] });
        }
        this.container.sendChanges();
    }
}, { item: true });
Translation.addTranslation("Mechanic Reed Farm", {
    ru: "Механическая ферма тростника"
});
IDRegistry.genBlockID("machineMechanicFarmReed");
Block.createBlockWithRotation("machineMechanicFarmReed", [
    { name: "Mechanic Reed Farm", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_reedfarm", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true }
], "opaque");
var UI_mechanic_reedfarm = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Mechanic Reed Farm")
            }
        },
        minHeight: 700,
        inventory: { standart: true },
        background: { standart: true }
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5 },
        { type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5 }
    ],
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    elements: {
        "slot1": { type: "slot", x: 400, y: 60, size: 70 },
        "slot2": { type: "slot", x: 470, y: 60, size: 70 },
        "slot3": { type: "slot", x: 540, y: 60, size: 70 },
        "slot4": { type: "slot", x: 610, y: 60, size: 70 },
        "slot5": { type: "slot", x: 680, y: 60, size: 70 },
        "slot6": { type: "slot", x: 750, y: 60, size: 70 },
        "slot7": { type: "slot", x: 820, y: 60, size: 70 },
        "slot8": { type: "slot", x: 400, y: 130, size: 70 },
        "slot9": { type: "slot", x: 470, y: 130, size: 70 },
        "slot10": { type: "slot", x: 540, y: 130, size: 70 },
        "slot11": { type: "slot", x: 610, y: 130, size: 70 },
        "slot12": { type: "slot", x: 680, y: 130, size: 70 },
        "slot13": { type: "slot", x: 750, y: 130, size: 70 },
        "slot14": { type: "slot", x: 820, y: 130, size: 70 },
        "slot15": { type: "slot", x: 400, y: 200, size: 70 },
        "slot16": { type: "slot", x: 470, y: 200, size: 70 },
        "slot17": { type: "slot", x: 540, y: 200, size: 70 },
        "slot18": { type: "slot", x: 610, y: 200, size: 70 },
        "slot19": { type: "slot", x: 680, y: 200, size: 70 },
        "slot20": { type: "slot", x: 750, y: 200, size: 70 },
        "slot21": { type: "slot", x: 820, y: 200, size: 70 },
        "slot22": { type: "slot", x: 400, y: 270, size: 70 },
        "slot23": { type: "slot", x: 470, y: 270, size: 70 },
        "slot24": { type: "slot", x: 540, y: 270, size: 70 },
        "slot25": { type: "slot", x: 610, y: 270, size: 70 },
        "slot26": { type: "slot", x: 680, y: 270, size: 70 },
        "slot27": { type: "slot", x: 750, y: 270, size: 70 },
        "slot28": { type: "slot", x: 820, y: 270, size: 70 },
        "progressScale": { type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale" },
        "slotU1": { type: "slot", x: 400, y: 430, size: 70 },
        "slotU2": { type: "slot", x: 470, y: 430, size: 70 },
        "slotU3": { type: "slot", x: 540, y: 430, size: 70 },
        "slotU4": { type: "slot", x: 610, y: 430, size: 70 },
        "slotU5": { type: "slot", x: 680, y: 430, size: 70 },
        "slotU6": { type: "slot", x: 750, y: 430, size: 70 },
        "slotU7": { type: "slot", x: 820, y: 430, size: 70 },
    }
});
FactAPI.machine.registerTile(BlockID.machineMechanicFarmReed, {
    useNetworkItemContainer: true,
    defaultValues: {
        progress: 0,
        active: true
    },
    getConfig: function () {
        return {
            time: 1000
        };
    },
    getScreenByName: function () {
        return UI_mechanic_reedfarm;
    },
    putChest: function (item) {
        var a = FactAPI.machineContainer.addItemToContainer(this.container, item);
        if (a)
            this.blockSource.spawnDroppedItem(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, a, item.data);
    },
    tick: function () {
        var cfg = this.getConfig();
        this.container.setScale("progressScale", this.data.progress / cfg.time);
    },
    MechanicDeploy: function () {
        var count = 0;
        for (var y = 5 + (this.data.modY / 2); y > -5 - (this.data.modY / 2); y--)
            for (var x = 0; x < 9; x++)
                for (var z = 0; z < 9; z++) {
                    var id = this.blockSource.getBlockId(this.x - 4 + x, this.y + y, this.z - 4 + z);
                    var id2 = this.blockSource.getBlockId(this.x - 4 + x, this.y + y - 1, this.z - 4 + z);
                    if (id == 83 && id2 == 83) {
                        count++;
                        this.blockSource.destroyBlock(this.x - 4 + x, this.y + y, this.z - 4 + z);
                    }
                }
        if (count > 0)
            this.putChest({ id: 338, count: count, data: 0 });
        this.container.sendChanges();
    }
}, { item: true });
StorageInterface.createInterface(BlockID.machineMechanicFarmReed, {
    slots: {
        "slot^1-28": { output: true }
    },
});
Translation.addTranslation("Mechanic Sawmill", {
    ru: "Механическая лесопилка"
});
IDRegistry.genBlockID("machineMechanicSawmill");
Block.createBlockWithRotation("machineMechanicSawmill", [
    { name: "Mechanic Sawmill", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_sawmill", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true }
], "opaque");
var UI_mechanic_sawmill = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Mechanic Sawmill")
            }
        },
        minHeight: 700,
        inventory: { standart: true },
        background: { standart: true }
    },
    drawing: [
        { type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8 },
        { type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5 },
        { type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5 }
    ],
    params: {
        slot: "slotFactory",
        invSlot: "slotFactory",
        selection: "selectionFactory"
    },
    elements: {
        "slot1": { type: "slot", x: 400, y: 60, size: 70 },
        "slot2": { type: "slot", x: 470, y: 60, size: 70 },
        "slot3": { type: "slot", x: 540, y: 60, size: 70 },
        "slot4": { type: "slot", x: 610, y: 60, size: 70 },
        "slot5": { type: "slot", x: 680, y: 60, size: 70 },
        "slot6": { type: "slot", x: 750, y: 60, size: 70 },
        "slot7": { type: "slot", x: 820, y: 60, size: 70 },
        "slot8": { type: "slot", x: 400, y: 130, size: 70 },
        "slot9": { type: "slot", x: 470, y: 130, size: 70 },
        "slot10": { type: "slot", x: 540, y: 130, size: 70 },
        "slot11": { type: "slot", x: 610, y: 130, size: 70 },
        "slot12": { type: "slot", x: 680, y: 130, size: 70 },
        "slot13": { type: "slot", x: 750, y: 130, size: 70 },
        "slot14": { type: "slot", x: 820, y: 130, size: 70 },
        "slot15": { type: "slot", x: 400, y: 200, size: 70 },
        "slot16": { type: "slot", x: 470, y: 200, size: 70 },
        "slot17": { type: "slot", x: 540, y: 200, size: 70 },
        "slot18": { type: "slot", x: 610, y: 200, size: 70 },
        "slot19": { type: "slot", x: 680, y: 200, size: 70 },
        "slot20": { type: "slot", x: 750, y: 200, size: 70 },
        "slot21": { type: "slot", x: 820, y: 200, size: 70 },
        "slot22": { type: "slot", x: 400, y: 270, size: 70 },
        "slot23": { type: "slot", x: 470, y: 270, size: 70 },
        "slot24": { type: "slot", x: 540, y: 270, size: 70 },
        "slot25": { type: "slot", x: 610, y: 270, size: 70 },
        "slot26": { type: "slot", x: 680, y: 270, size: 70 },
        "slot27": { type: "slot", x: 750, y: 270, size: 70 },
        "slot28": { type: "slot", x: 820, y: 270, size: 70 },
        "progressScale": { type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale" },
        "slotU1": { type: "slot", x: 400, y: 430, size: 70 },
        "slotU2": { type: "slot", x: 470, y: 430, size: 70 },
        "slotU3": { type: "slot", x: 540, y: 430, size: 70 },
        "slotU4": { type: "slot", x: 610, y: 430, size: 70 },
        "slotU5": { type: "slot", x: 680, y: 430, size: 70 },
        "slotU6": { type: "slot", x: 750, y: 430, size: 70 },
        "slotU7": { type: "slot", x: 820, y: 430, size: 70 },
    }
});
var saplings = {};
for (var i_18 = 0; i_18 < 4; i_18++)
    saplings[17 + ":" + i_18] = [6, i_18];
saplings[162 + ":" + 0] = [6, 4];
saplings[162 + ":" + 1] = [6, 5];
FactAPI.machine.registerTile(BlockID.machineMechanicSawmill, {
    useNetworkItemContainer: true,
    defaultValues: {
        progress: 0,
        active: true
    },
    getConfig: function () {
        return {
            time: 100
        };
    },
    getScreenByName: function () {
        return UI_mechanic_sawmill;
    },
    putChest: function (item) {
        var a = FactAPI.machineContainer.addItemToContainer(this.container, item);
        if (a)
            this.blockSource.spawnDroppedItem(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, a, item.data);
    },
    tick: function () {
        var cfg = this.getConfig();
        this.container.setScale("progressScale", this.data.progress / cfg.time);
    },
    MechanicDeploy: function () {
        for (var y = 0 - (this.data.modY / 2); y < 10 + (this.data.modY / 2); y++)
            for (var x = 0; x < 9; x++)
                for (var z = 0; z < 9; z++) {
                    var block = this.blockSource.getBlock(this.x - 4 + x, this.y + y, this.z - 4 + z);
                    if (ItemType.is(block.id, "wood") || ItemType.is(block.id, "leaves")) {
                        var drop = ToolLib.getBlockDrop({ x: this.x - 4 + x, y: this.y + y, z: this.z - 4 + z }, block.id, block.data, 1, {}, { id: 0, data: 0, count: 0 }, this.blockSource);
                        if (drop === null || JSON.stringify(drop) == "[]")
                            drop = [[block.id, 1, block.getNamedStatesScriptable().old_leaf_type || block.data]];
                        for (var i_19 in drop)
                            this.putChest({ id: drop[i_19][0], count: drop[i_19][1], data: drop[i_19][2] });
                        this.blockSource.destroyBlock(this.x - 4 + x, this.y + y, this.z - 4 + z);
                        var dirt = this.blockSource.getBlockId(this.x - 4 + x, this.y + y - 1, this.z - 4 + z);
                        if ((dirt == 2 || dirt == 3) && saplings[block.id + ":" + block.data])
                            this.blockSource.setBlock(this.x - 4 + x, this.y + y, this.z - 4 + z, saplings[block.id + ":" + block.data][0], saplings[block.id + ":" + block.data][1]);
                        return;
                    }
                }
    }
}, { item: true });
StorageInterface.createInterface(BlockID.machineMechanicSawmill, {
    slots: {
        "slot^1-28": { output: true }
    },
});
ItemType.set(17, "wood");
ItemType.set(162, "wood");
ItemType.set(18, "leaves");
ItemType.set(161, "leaves");
ModAPI.addAPICallback("ENR", function () {
    var arr = [BlockID.ex_infestedRaw0, BlockID.ex_infestedRaw1, BlockID.ex_infestedRaw2, BlockID.ex_infestedLeaf0, BlockID.ex_infestedLeaf1, BlockID.ex_infestedLeaf0];
    for (var i_20 in arr)
        ItemType.set(arr[i_20], "wood");
});
ModAPI.addAPICallback("ICore", function (api) {
    ItemType.set(BlockID.rubberTreeLog, "wood");
    ItemType.set(BlockID.rubberTreeLogLatex, "wood");
    ItemType.set(BlockID.rubberTreeLeaves, "leaves");
    saplings[BlockID.rubberTreeLog + ":" + 0] = [BlockID.rubberTreeSapling, 0];
    saplings[BlockID.rubberTreeLogLatex + ":" + 0] = [BlockID.rubberTreeSapling, 0];
});
Translation.addTranslation("Mechanic Crossbow Tower", {
    ru: "Механический арбалет"
});
IDRegistry.genBlockID("machineMechanicTowerCrossbow");
Block.createBlockWithRotation("machineMechanicTowerCrossbow", [
    {
        name: "Mechanic Crossbow Tower", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_crossbow", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true
    },
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.machineMechanicTowerCrossbow, "stone");
FactAPI.machine.registerTile(BlockID.machineMechanicTowerCrossbow, {
    defaultValues: {
        progress: 0,
        active: true
    },
    getConfig: function () {
        return {
            time: 60
        };
    },
    MechanicDeploy: function () {
        var all = this.blockSource.fetchEntitiesInAABB(this.x - 10, this.y - 10, this.z - 10, this.x + 10, this.y + 10, this.z + 10, EEntityType.PLAYER, true);
        ;
        for (var i_21 in all) {
            if (Network.getConnectedPlayers().indexOf(all[i_21]) == -1 && !FactAPI.constants.NotKill[Entity.getType(all[i_21])]) {
                var crd = Entity.getPosition(all[i_21]);
                //Particles.line(Native.ParticleType.smoke, { x: this.x + 0.5, y: this.y + 0.5, z: this.z + 0.5 }, { x: crd.x + 0.5, y: crd.y + 0.5, z: crd.z + 0.5 }, 0.1, 1);
                Entity.damageEntity(all[i_21], 5);
                return;
            }
        }
    }
});
Translation.addTranslation("Mechanic Flame Tower", {
    ru: "Механический огнемет"
});
IDRegistry.genBlockID("machineMechanicTowerFlame");
Block.createBlockWithRotation("machineMechanicTowerFlame", [
    {
        name: "Mechanic Flame Tower", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_flame", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true
    },
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.machineMechanicTowerFlame, "stone");
FactAPI.machine.registerTile(BlockID.machineMechanicTowerFlame, {
    defaultValues: {
        progress: 0,
        active: true
    },
    getConfig: function () {
        return {
            time: 60
        };
    },
    MechanicDeploy: function () {
        var all = this.blockSource.fetchEntitiesInAABB(this.x - 5, this.y - 5, this.z - 5, this.x + 5, this.y + 5, this.z + 5, EEntityType.PLAYER, true);
        ;
        for (var i_22 in all) {
            if (Network.getConnectedPlayers().indexOf(all[i_22]) == -1 && !FactAPI.constants.NotKill[Entity.getType(all[i_22])]) {
                var crd = Entity.getPosition(all[i_22]);
                //Particles.line(Native.ParticleType.smoke, { x: this.x + 0.5, y: this.y + 0.5, z: this.z + 0.5 }, { x: crd.x + 0.5, y: crd.y + 0.5, z: crd.z + 0.5 }, 0.1, 1);
                Entity.damageEntity(all[i_22], 2);
                Entity.setFire(all[i_22], 60);
                return;
            }
        }
    }
});
Translation.addTranslation("Mechanic Sword Tower", {
    ru: "Механический уничтожитель мобов"
});
IDRegistry.genBlockID("machineMechanicTowerSword");
Block.createBlockWithRotation("machineMechanicTowerSword", [
    {
        name: "Mechanic Sword Tower", texture: [
            ["block_machine_wooden", 0], ["block_machine_wooden", 0],
            ["block_machine_wooden", 0], ["block_mechanic_sword", 0],
            ["block_machine_wooden", 0], ["block_machine_wooden", 0]
        ], inCreative: true
    },
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.machineMechanicTowerSword, "stone");
FactAPI.machine.registerTile(BlockID.machineMechanicTowerSword, {
    defaultValues: {
        progress: 0,
        active: true
    },
    getConfig: function () {
        return {
            time: 60
        };
    },
    MechanicDeploy: function () {
        var all = this.blockSource.fetchEntitiesInAABB(this.x - 5, this.y - 5, this.z - 5, this.x + 5, this.y + 5, this.z + 5, EEntityType.PLAYER, true);
        ;
        for (var i_23 in all) {
            if (!FactAPI.constants.NotKill[Entity.getType(all[i_23])]) {
                var crd = Entity.getPosition(all[i_23]);
                //Particles.line(Native.ParticleType.smoke, { x: this.x + 0.5, y: this.y + 0.5, z: this.z + 0.5 }, { x: crd.x + 0.5, y: crd.y + 0.5, z: crd.z + 0.5 }, 0.1, 1);
                Entity.damageEntity(all[i_23], 10);
                return;
            }
        }
    }
    /*MechanicDeploy() {
        try {
            var all = Entity.getAll();
            for (var i in all) {
                if (!Player.isPlayer(all[i]) && !FactAPI.constants.NotKill[Entity.getType(all[i])]) {
                    if (Entity.getDistanceToCoords(all[i], { x: this.x, y: this.y, z: this.z }) < 10) {
                        Entity.damageEntity(all[i], 15);
                        var crd = Entity.getPosition(all[i]);
                        Particles.line(ParticleType.smoke, { x: this.x + 0.5, y: this.y + 0.5, z: this.z + 0.5 }, { x: crd.x + 0.5, y: crd.y + 0.5, z: crd.z + 0.5 }, 0.1, 1);
                        return
                    }
                }
            }
        } catch (e) { }
    }*/
});
function isModLoad(name) {
    return FileTools.isExists(__modpack__.getModsDirectoryPath() + "/" + name);
}
var loadBuildCraft = false;
Callback.addCallback("ModsLoaded", function () {
    if (isModLoad("BuildCraft"))
        loadBuildCraft = true;
});
Callback.addCallback("PostLoaded", function () {
    if (loadBuildCraft)
        return;
    Recipes.addShaped({ id: ItemID.gearWooden, count: 1, data: 0 }, [
        "#a#",
        "a#a",
        "#a#"
    ], [
        'a', 280, 0
    ]);
    Recipes.addShaped({ id: ItemID.gearStone, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "#a#"
    ], [
        'a', 1, -1,
        'b', ItemID.gearWooden, 0
    ]);
    Recipes.addShaped({ id: ItemID.gearIron, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "#a#"
    ], [
        'a', 265, -1,
        'b', ItemID.gearStone, 0
    ]);
    Recipes.addShaped({ id: ItemID.gearGolden, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "#a#"
    ], [
        'a', 266, -1,
        'b', ItemID.gearIron, 0
    ]);
    Recipes.addShaped({ id: ItemID.gearDiamond, count: 1, data: 0 }, [
        "#a#",
        "aba",
        "#a#"
    ], [
        'a', 264, -1,
        'b', ItemID.gearGolden, 0
    ]);
});
var hardRecipes = __config__.get("complex_recipes");
if (!hardRecipes) {
    Recipes.addShaped({ id: BlockID.blockMachineWooden, count: 1, data: 0 }, [
        "xax",
        "aba",
        "xax"
    ], [
        'a', ItemID.gearWooden, 0,
        'b', 280, 0,
        'x', 5, -1
    ]);
    Recipes.addShaped({ id: BlockID.blockMachineStone, count: 1, data: 0 }, [
        "xax",
        "aba",
        "xax"
    ], [
        'a', ItemID.gearStone, 0,
        'b', 331, 0,
        'x', 4, 0
    ]);
    Recipes.addShaped({ id: BlockID.blockMachineIron, count: 1, data: 0 }, [
        "xax",
        "aba",
        "xax"
    ], [
        'a', ItemID.gearIron, 0,
        'b', 331, 0,
        'x', 265, 0
    ]);
    Recipes.addShaped({ id: ItemID.factoryBattery, count: 1, data: 0 }, [
        " b ",
        " a "
    ], [
        'a', 265, 0,
        'b', 331, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineEnergyGeneratorFuel,
        count: 1,
        data: 0
    }, [
        " b ",
        " a ",
        " c "
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 61, 0,
        'c', ItemID.factoryBattery, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineEnergyGeneratorMoon,
        count: 1,
        data: 0
    }, [
        "aaa",
        "bbb",
        " c "
    ], [
        'a', 20, 0,
        'b', 263, -1,
        'c', BlockID.blockMachineIron, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineEnergyGeneratorSolar, count: 1, data: 0 }, [
        "aaa",
        "bbb",
        " c "
    ], [
        'a', 20, 0,
        'b', 263, -1,
        'c', BlockID.blockMachineIron, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineEnergyGeneratorStar,
        count: 1,
        data: 0
    }, [
        "a",
        "b"
    ], [
        'a', BlockID.machineEnergyGeneratorSolar, 0,
        'b', BlockID.machineEnergyGeneratorMoon, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineEnergyGeneratorWind, count: 1, data: 0 }, [
        " c ",
        "cbc",
        " a ",
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 280, 0,
        'c', 265, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicFarm, count: 1, data: 0 }, [
        "#a#",
        "bob",
        "#x#"
    ], [
        'a', 359, 0,
        'b', ItemID.gearWooden, 0,
        'o', BlockID.machineMechanicHoe, 0,
        'x', BlockID.machineMechanicPumpWater, 0
    ]);
    Recipes.addShaped({ id: BlockID.fishingnet, count: 1, data: 0 }, [
        "a a",
        " a ",
        "a a"
    ], ['a', 287, 0]);
    Recipes.addShaped({ id: BlockID.machineMechanicFarmFish, count: 1, data: 0 }, [
        "a", "x", "b"
    ], [
        'a', 346, 0,
        'x', BlockID.blockMachineWooden, 0,
        'b', BlockID.fishingnet, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineMechanicHoe,
        count: 1,
        data: 0
    }, [
        "a",
        "x",
        ""
    ], [
        'a', 294, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicPumpLava, count: 1, data: 0 }, [
        "a", "x", "a"
    ], [
        'a', 49, 0,
        'x', BlockID.machineMechanicPumpWater, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicPumpWater, count: 1, data: 0 }, [
        "a", "x", "a"
    ], [
        'a', 325, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicQuarry, count: 1, data: 0 }, [
        "a", "x"
    ], [
        'a', 274, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicFarmReed, count: 1, data: 0 }, [
        "a", "b", "x"
    ], [
        'a', 338, 0,
        'b', 359, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicSawmill, count: 1, data: 0 }, [
        "a", "x"
    ], [
        'a', 275, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicTowerCrossbow, count: 1, data: 0 }, [
        "a", "x"
    ], [
        'a', 261, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicTowerFlame, count: 1, data: 0 }, [
        "c",
        "a",
        "x"
    ], [
        'a', 261, 0,
        'c', 377, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicTowerSword, count: 1, data: 0 }, [
        "a", "x"
    ], [
        'a', 272, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.energy_cable, count: 2, data: 0 }, [
        "aba"
    ], ['a', 331, 0, 'b', 265, 0]);
    Recipes.addShaped({ id: BlockID.iron_cable, count: 2, data: 0 }, [
        "aba"
    ], ['a', 265, 0, 'b', 331, 0]);
    Recipes.addShaped({ id: BlockID.machineEnergyTeslaTower, count: 1, data: 0 }, [
        "bbb",
        "cac",
        "bbb"
    ], ['a', BlockID.blockMachineIron, 0, 'b', 265, 0, 'c', 331, 0]);
    Recipes.addShaped({
        id: BlockID.machineEnergyStationAssembler,
        count: 1,
        data: 0
    }, [
        "#e#",
        "cbc",
        "#a#"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 58, 0,
        'c', ItemID.gearDiamond, 0,
        'e', ItemID.factoryBattery, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineEnergyStationRepair,
        count: 1,
        data: 0
    }, [
        "c",
        "a"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'c', 145, 0,
        'e', ItemID.factoryBattery, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineEnergyLiquidCrucible, count: 1, data: 0 }, [
        "cec",
        "cbc",
        "cac"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 61, 0,
        'c', 49, 0,
        'e', ItemID.factoryBattery, 0
    ]);
    Recipes.addShaped({ id: BlockID.energyAutoClick, count: 1, data: 0 }, [
        "beb",
        "bab",
        "cac"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 61, 0,
        'c', 265, 0,
        'e', ItemID.factoryBattery, 0
    ]);
    Recipes.addShaped({ id: ItemID.factoryWrench, count: 1, data: 0 }, [
        "a a",
        " a ",
        " a "
    ], [
        'a', 265, 0
    ]);
}
else {
    //complex recipes
    Recipes.addShaped({ id: ItemID.factoryWrench, count: 1, data: 0 }, [
        "a a",
        " a ",
        " a "
    ], [
        'a', 265, 0
    ]);
    Recipes.addShaped({ id: BlockID.blockMachineWooden, count: 1, data: 0 }, [
        "xax",
        "ici",
        "xax"
    ], [
        'a', ItemID.gearWooden, 0,
        'i', ItemID.gearStone, 0,
        'c', 264, 0,
        'x', 5, -1
    ]);
    Recipes.addShaped({ id: BlockID.blockMachineStone, count: 1, data: 0 }, [
        "xax",
        "aba",
        "xax"
    ], [
        'a', ItemID.gearStone, 0,
        'b', BlockID.blockMachineWooden, 0,
        'x', 4, 0
    ]);
    Recipes.addShaped({ id: BlockID.blockMachineIron, count: 1, data: 0 }, [
        "xax",
        "dbd",
        "xax"
    ], [
        'a', ItemID.gearGolden, 0,
        'd', ItemID.factoryBattery, 0,
        'b', BlockID.blockMachineStone, 0,
        'x', 265, 0
    ]);
    Recipes.addShaped({ id: ItemID.factoryBattery, count: 1, data: 0 }, [
        " b ",
        "cac",
        " d "
    ], [
        'a', 265, 0,
        'b', 331, 0,
        'c', 265, 0,
        'd', 264, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineEnergyGeneratorFuel,
        count: 1,
        data: 0
    }, [
        "ibi",
        "iai",
        "ici"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 61, 0,
        'c', ItemID.factoryBattery, 0,
        'i', 265, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineEnergyGeneratorMoon,
        count: 1,
        data: 0
    }, [
        "aaa",
        "bbb",
        " c "
    ], [
        'a', 20, 0,
        'b', 263, -1,
        'c', BlockID.machineEnergyGeneratorFuel, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineEnergyGeneratorSolar, count: 1, data: 0 }, [
        "aaa",
        "bbb",
        " c "
    ], [
        'a', 20, 0,
        'b', 263, -1,
        'c', BlockID.machineEnergyGeneratorFuel, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineEnergyGeneratorStar,
        count: 1,
        data: 0
    }, [
        "a",
        "b"
    ], [
        'a', BlockID.machineEnergyGeneratorSolar, 0,
        'b', BlockID.machineEnergyGeneratorMoon, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineEnergyGeneratorWind, count: 1, data: 0 }, [
        " e ",
        "cbc",
        "dad",
    ], [
        'a', BlockID.machineEnergyGeneratorFuel, 0,
        'b', 280, 0,
        'c', 265, 0,
        'e', ItemID.factoryBattery, 0,
        'd', ItemID.gearDiamond, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicFarm, count: 1, data: 0 }, [
        "iai",
        "bob",
        "ixi"
    ], [
        'a', 359, 0,
        'b', ItemID.gearWooden, 0,
        'o', BlockID.machineMechanicHoe, 0,
        'x', BlockID.machineMechanicPumpWater, 0,
        'i', ItemID.gearIron, 0
    ]);
    Recipes.addShaped({ id: BlockID.fishingnet, count: 1, data: 0 }, [
        "aba",
        "aaa",
        "aba"
    ], ['a', 287, 0, 'b', 280, 0]);
    Recipes.addShaped({ id: BlockID.machineMechanicFarmFish, count: 1, data: 0 }, [
        " a ",
        "gxg",
        "bbb"
    ], [
        'a', 346, 0,
        'x', BlockID.blockMachineWooden, 0,
        'b', BlockID.fishingnet, 0,
        'g', ItemID.gearStone, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineMechanicHoe,
        count: 1,
        data: 0
    }, [
        " a ",
        "gxg",
        " g "
    ], [
        'a', VanillaItemID.iron_hoe, 0,
        'x', BlockID.blockMachineWooden, 0,
        'g', ItemID.gearStone, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicPumpLava, count: 1, data: 0 }, [
        "a",
        "ixi",
        "d"
    ], [
        'a', 49, 0,
        'x', BlockID.machineMechanicPumpWater, 0,
        'i', ItemID.gearIron, 0,
        'd', ItemID.gearDiamond, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicPumpWater, count: 1, data: 0 }, [
        " a ",
        "fxf",
        " a "
    ], [
        'a', 325, 0,
        'x', BlockID.blockMachineWooden, 0,
        'f', ItemID.gearIron, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicQuarry, count: 1, data: 0 }, [
        "a", "gxg", " d "
    ], [
        'a', VanillaItemID.iron_pickaxe, 0,
        'x', BlockID.blockMachineWooden, 0,
        'g', ItemID.gearGolden, 0,
        "d", ItemID.gearDiamond, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicFarmReed, count: 1, data: 0 }, [
        "a", "b", "x"
    ], [
        'a', ItemID.gearStone, 0,
        'b', 359, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicSawmill, count: 1, data: 0 }, [
        " a ",
        "ixi",
        "ggg"
    ], [
        'a', VanillaItemID.iron_axe, 0,
        'x', BlockID.blockMachineWooden, 0,
        "i", ItemID.gearStone, 0,
        "g", ItemID.gearGolden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicTowerCrossbow, count: 1, data: 0 }, [
        "a", "dxd"
    ], [
        'a', 261, 0,
        'd', ItemID.gearGolden, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicTowerFlame, count: 1, data: 0 }, [
        "c",
        "dad",
        " x "
    ], [
        'a', 261, 0,
        'c', 377, 0,
        'd', ItemID.gearGolden, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineMechanicTowerSword, count: 1, data: 0 }, [
        "a", "dxd"
    ], [
        'a', 272, 0,
        'd', ItemID.gearGolden, 0,
        'x', BlockID.blockMachineWooden, 0
    ]);
    Recipes.addShaped({ id: BlockID.energy_cable, count: 2, data: 0 }, [
        "aba"
    ], [
        'a', 331, 0,
        'b', 265, 0
    ]);
    Recipes.addShaped({ id: BlockID.iron_cable, count: 2, data: 0 }, [
        "aba"
    ], ['a', 265, 0, 'b', 331, 0]);
    Recipes.addShaped({ id: BlockID.machineEnergyTeslaTower, count: 1, data: 0 }, [
        "bbb",
        "cac",
        "bbb"
    ], ['a', BlockID.blockMachineIron, 0, 'b', 265, 0, 'c', ItemID.gearDiamond, 0]);
    Recipes.addShaped({
        id: BlockID.machineEnergyStationAssembler,
        count: 1,
        data: 0
    }, [
        "#e#",
        "cbc",
        "#a#"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 58, 0,
        'c', ItemID.gearDiamond, 0,
        'e', ItemID.factoryBattery, 0
    ]);
    Recipes.addShaped({
        id: BlockID.machineEnergyStationRepair,
        count: 1,
        data: 0
    }, [
        "c",
        "a"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'c', 145, 0,
        'e', ItemID.factoryBattery, 0
    ]);
    Recipes.addShaped({ id: BlockID.machineEnergyLiquidCrucible, count: 1, data: 0 }, [
        "cec",
        "dad",
        "cac"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 61, 0,
        'c', 49, 0,
        "d", ItemID.gearDiamond, 0,
        'e', ItemID.factoryBattery, 0
    ]);
    Recipes.addShaped({ id: BlockID.energyAutoClick, count: 1, data: 0 }, [
        "beb",
        "bab",
        "cac"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 61, 0,
        'c', 265, 0,
        'e', ItemID.factoryBattery, 0
    ]);
    ModAPI.addAPICallback("ENR", function (api) {
        Recipes.addShaped({ id: BlockID.energyAutoHammer, count: 1, data: 0 }, [
            "eee",
            "bab",
            "cac"
        ], [
            'a', BlockID.blockMachineIron, 0,
            'b', 265, 0,
            'c', ItemID.gearIron, 0,
            'e', ItemID.factoryBattery, 0
        ]);
        Recipes.addShaped({ id: BlockID.energyAutoSieve, count: 1, data: 0 }, [
            "beb",
            "cac",
            "gbg"
        ], [
            'a', BlockID.blockMachineIron, 0,
            'b', 265, 0,
            'c', ItemID.gearIron, 0,
            'e', ItemID.factoryBattery, 0,
            'g', ItemID.gearGolden, 0
        ]);
    });
    ModAPI.addAPICallback("ProjectE", function () {
        Recipes.addShaped({ id: BlockID.cobblestone_generator, count: 1, data: 0 }, [
            " e",
            "bab",
            "ckc"
        ], [
            'a', BlockID.blockMachineIron, 0,
            'b', 265, 0,
            "k", BlockID.energyCollector1, 0,
            'c', ItemID.gearIron, 0,
            'e', ItemID.factoryBattery, 0
        ]);
    });
    Recipes.addShaped({ id: ItemID.factory_update_base, count: 2, data: 0 }, [
        "bbb",
        "bcb",
        "bbb"
    ], [
        'b', 265, 0,
        'c', ItemID.gearStone, 0,
    ]);
    Recipes.addShaped({ id: ItemID.factory_update_1, count: 1, data: 0 }, [
        "bcb",
        "cec",
        "bcb"
    ], [
        'b', 265, 0,
        'c', ItemID.gearStone, 0,
        "e", ItemID.factory_update_base, 0
    ]);
    Recipes.addShaped({ id: ItemID.factory_update_2, count: 1, data: 0 }, [
        " c ",
        "beb",
        " c "
    ], [
        'b', 728, 0,
        'c', ItemID.gearIron, 0,
        "e", ItemID.factory_update_1, 0
    ]);
    Recipes.addShaped({ id: BlockID.liquid_pipe, count: 3, data: 0 }, [
        "bbb",
        "c c",
        "bbb"
    ], [
        'b', 265, 0,
        'c', ItemID.gearStone, 0,
    ]);
    Recipes.addShaped({ id: BlockID.machineEnergyLiquidLoader, count: 1, data: 0 }, [
        " c ",
        "bab",
        " c "
    ], [
        'a', BlockID.blockMachineStone, 0,
        'b', 265, 0,
        'c', ItemID.gearStone, 0,
    ]);
    Recipes.addShaped({ id: BlockID.machineEnergyLiquidPump, count: 1, data: 0 }, [
        " e ",
        "bab",
        " c "
    ], [
        'a', BlockID.blockMachineStone, 0,
        'b', 265, 0,
        'c', ItemID.gearStone, 0,
        'e', ItemID.factoryBattery, 0,
    ]);
    Recipes.addShaped({ id: BlockID.steam_generator, count: 1, data: 0 }, [
        " e ",
        "bab",
        "bcb"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 265, 0,
        'c', ItemID.gearIron, 0,
        'e', ItemID.factoryBattery, 0,
    ]);
    Recipes.addShaped({ id: BlockID.steam_manufacturer, count: 1, data: 0 }, [
        "bcb",
        "bab",
        "bcb"
    ], [
        'a', BlockID.blockMachineIron, 0,
        'b', 265, 0,
        'c', ItemID.gearIron, 0,
    ]);
}
