var MachineBlockSolid = Block.createSpecialType({base: 1, destroytime: 0.5, explosionres: 30, opaque: false, renderlayer: 3, solid: true});
var MachineBlockNotSolid = Block.createSpecialType({base: 5, destroytime: 0.9, explosionres: 30, lightopacity: 0, opaque: false, renderlayer: 3, solid: false});
var ChargeItemRegistry = {chargeData: {}, registerItem: function (item, energyType, capacity, level, isEnergyStorage) {
    Item.setMaxDamage(item, capacity + 1);
    this.chargeData[item] = {type: "normal", energy: energyType, id: item, level: level || 0, maxCharge: capacity, maxDamage: capacity + 1, isEnergyStorage: isEnergyStorage};
}, registerFlashItem: function (item, energyType, amount, level) {
    this.chargeData[item] = {type: "flash", id: item, level: level || 0, energy: energyType, amount: amount, isEnergyStorage: true};
}, registerChargeFunction: function (id, func) {
    this.chargeData[id].chargeFunction = func;
}, registerDischargeFunction: function (id, func) {
    this.chargeData[id].dischargeFunction = func;
}, getItemData: function (id) {
    return this.chargeData[id];
}, isFlashStorage: function (id) {
    var data = this.getItemData(id);
    return (data && data.type == "flash");
}, isValidItem: function (id, energyType, level) {
    var data = this.getItemData(id);
    return (data && data.type == "normal" && data.energy == energyType && data.level <= level);
}, isValidStorage: function (id, energyType, level) {
    var data = this.getItemData(id);
    return (data && data.isEnergyStorage && data.energy == energyType && data.level <= level);
}, getEnergyStored: function (item, energyType) {
    var data = this.getItemData(item.id);
    if (!data || energyType && data.energy != energyType) {
        return 0;
    }
    return Math.min(data.maxDamage - item.data, data.maxCharge);
}, getEnergyFrom: function (item, energyType, amount, transf, level, getFromAll) {
    level = level || 0;
    var data = this.getItemData(item.id);
    if (!data || data.energy != energyType || data.level > level || !getFromAll && !data.isEnergyStorage) {
        return 0;
    }
    if (data.type == "flash") {
        if (amount < 1) {
            return 0;
        }
        item.count--;
        if (item.count < 1) {
            item.id = item.data = 0;
        }
        return data.amount;
    }
    if (data.dischargeFunction) {
        return data.dischargeFunction(item, amount, transf, level);
    } else {
        if (item.data < 1) {
            item.data = 1;
        }
        var energyGot = Math.min(amount, Math.min(data.maxDamage - item.data, transf));
        item.data += energyGot;
        return energyGot;
    }
}, addEnergyTo: function (item, energyType, amount, transf, level) {
    level = level || 0;
    if (!this.isValidItem(item.id, energyType, level)) {
        return 0;
    }
    var data = this.getItemData(item.id);
    if (data.chargeFunction) {
        return data.chargeFunction(item, amount, transf, level);
    } else {
        var energyAdd = Math.min(amount, Math.min(item.data - 1, transf));
        item.data -= energyAdd;
        return energyAdd;
    }
}, transportEnergy: function (api, field, result) {
    var data = ChargeItemRegistry.getItemData(result.id);
    var amount = 0;
    for (var i in field) {
        if (!ChargeItemRegistry.isFlashStorage(field[i].id)) {
            amount += ChargeItemRegistry.getEnergyFrom(field[i], data.energy, data.maxCharge, data.maxCharge, 100, true);
        }
        api.decreaseFieldSlot(i);
    }
    ChargeItemRegistry.addEnergyTo(result, data.energy, amount, amount, 100);
}};
var MachineRenderer = {data: {}, setStandartModel: function (id, texture, rotation) {
    if (rotation) {
        var textures = [[texture[0], texture[1], texture[2], texture[3], texture[4], texture[5]], [texture[0], texture[1], texture[3], texture[2], texture[5], texture[4]], [texture[0], texture[1], texture[5], texture[4], texture[2], texture[3]], [texture[0], texture[1], texture[4], texture[5], texture[3], texture[2]]];
        for (var i = 0; i < 4; i++) {
            var render = new ICRender.Model();
            var model = BlockRenderer.createTexturedBlock(textures[i]);
            render.addEntry(model);
            BlockRenderer.enableCoordMapping(id, i, render);
        }
    } else {
        var render = new ICRender.Model();
        var model = BlockRenderer.createTexturedBlock(texture);
        render.addEntry(model);
        BlockRenderer.enableCoordMapping(id, -1, render);
    }
}, registerRenderModel: function (id, data, texture) {
    var render = new ICRender.Model();
    var model = BlockRenderer.createTexturedBlock(texture);
    render.addEntry(model);
    this.data[id] = {};
    this.data[id][data] = render;
}, registerModelWithRotation: function (id, texture) {
    var textures = [[texture[0], texture[1], texture[2], texture[3], texture[4], texture[5]], [texture[0], texture[1], texture[3], texture[2], texture[5], texture[4]], [texture[0], texture[1], texture[5], texture[4], texture[2], texture[3]], [texture[0], texture[1], texture[4], texture[5], texture[3], texture[2]]];
    for (var i = 0; i < 4; i++) {
        this.registerRenderModel(id, i, textures[i]);
    }
}, getRenderModel: function (id, data) {
    var models = this.data[id];
    if (models) {
        return models[data];
    }
    return 0;
}, mapAtCoords: function (x, y, z, id, data) {
    var model = this.getRenderModel(id, data);
    if (model) {
        BlockRenderer.mapAtCoords(x, y, z, model);
    }
}};
var GUI_SCALE = 3.2;
var fallVelocity = -0.0785;
var debugMode = __config__.getBool("debug_mode");
LiquidRegistry.getLiquidData("lava").uiTextures.push("gui_lava_texture_16x16");
var nativeDropItem = ModAPI.requireGlobal("Level.dropItem");
var MobEffect = Native.PotionEffect;
var Enchantment = Native.Enchantment;
var BlockSide = Native.BlockSide;
var EntityType = Native.EntityType;
IMPORT("energylib");
var RF = EnergyTypeRegistry.assureEnergyType("RF", 1 / 4);
var EU = EnergyTypeRegistry.assureEnergyType("Eu", 1);
const TexteBetaItems = __config__.access("Texte  Beta").booleanValue();
var player;
Callback.addCallback("LevelLoaded", function () {
    debugMode = __config__.getBool("debug_mode");
    player = Player.get();
});
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function addShapelessRecipe(result, source) {
    var ingredients = [];
    for (var i in source) {
        var item = source[i];
        for (var n = 0; n < item.count; n++) {
            ingredients.push(item);
        }
    }
    Recipes.addShapeless(result, ingredients);
}
var RARE_ITEM_NAME = function (item, name) {
    return "\xa7b" + name;
};
var ENERGY_ITEM_NAME = function (item, name) {
    var energyStorage = Item.getMaxDamage(item.id) - 1;
    var energyStored = ChargeItemRegistry.getEnergyStored(item);
    if (energyStored == 0) {
        return name;
    }
    return name + "\n\xa77" + energyStored + "/" + energyStorage + " Eu";
};
var RARE_ENERGY_ITEM_NAME = function (item, name) {
    var energyStorage = Item.getMaxDamage(item.id) - 1;
    var energyStored = ChargeItemRegistry.getEnergyStored(item);
    if (energyStored == 0) {
        return name;
    }
    return "\xa7b" + name + "\n\xa77" + energyStored + "/" + energyStorage + " Eu";
};
Block.setDestroyLevel = function (id, lvl) {
    Block.registerDropFunction(id, function (coords, blockID, blockData, level, enchant) {
        if (level >= lvl) {
            return [[blockID, 1, 0]];
        }
        return [];
    }, lvl);
};
Recipes.addFurnaceFuel(325, 10, 2000);
ChargeItemRegistry.registerFlashItem(331, "Eu", 800, 0);
var lasttime = -1;
var frame = 0;
Callback.addCallback("tick", function () {
    if (debugMode) {
        var t = java.lang.System.currentTimeMillis();
        if (frame++ % 20 == 0) {
            if (lasttime != -1) {
                tps = 1000 / (t - lasttime) * 20;
                Game.tipMessage(Math.round(tps * 10) / 10 + "tps");
            }
            lasttime = t;
        }
    }
});
var MachineRecipeRegistry = {recipeData: {}, registerRecipesFor: function (name, data, validateKeys) {
    if (validateKeys) {
        var newData = {};
        for (var key in data) {
            var newKey = key;
            if (key.split(":").length < 2) {
                newKey = eval(key);
            }
            newData[newKey] = data[key];
        }
        data = newData;
    }
    this.recipeData[name] = data;
}, addRecipeFor: function (name, source, result) {
    this.requireRecipesFor(name, true)[source] = result;
}, requireRecipesFor: function (name, createIfNotFound) {
    if (!this.recipeData[name] && createIfNotFound) {
        this.recipeData[name] = {};
    }
    return this.recipeData[name];
}, getRecipeResult: function (name, key1, key2) {
    var data = this.requireRecipesFor(name);
    if (data) {
        return data[key1] || data[key1 + ":" + key2];
    }
}};
var MachineRegistry = {machineIDs: {}, isMachine: function (id) {
    return this.machineIDs[id];
}, registerPrototype: function (id, Prototype, notUseEU) {
    this.machineIDs[id] = true;
    if (!notUseEU) {
        ICRender.getGroup("ic-wire").add(id, -1);
        if (Prototype.defaultValues) {
            Prototype.defaultValues.energy = 0;
        } else {
            Prototype.defaultValues = {energy: 0};
        }
        if (!Prototype.getEnergyStorage) {
            Prototype.getEnergyStorage = function () {
                return 0;
            };
        }
    }
    ToolAPI.registerBlockMaterial(id, "stone", 1);
    Block.setDestroyTime(id, 3);
    TileEntity.registerPrototype(id, Prototype);
    if (!notUseEU) {
        EnergyTileRegistry.addEnergyTypeForId(id, EU);
    }
}, getMachineDrop: function (coords, blockID, level, standartDrop) {
    BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
    var item = Player.getCarriedItem();
    if (item.id == ItemID.wrench) {
        ToolAPI.breakCarriedTool(10);
        World.setBlock(coords.x, coords.y, coords.z, 0);
        if (Math.random() < 0.8) {
            return [[blockID, 1, 0]];
        }
        return [[standartDrop || blockID, 1, 0]];
    }
    if (item.id == ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id)) {
        Player.setCarriedItem(item.id, 1, item.data + 500);
        World.setBlock(coords.x, coords.y, coords.z, 0);
        return [[blockID, 1, 0]];
    }
    if (level >= ToolAPI.getBlockDestroyLevel(blockID)) {
        return [[standartDrop || blockID, 1, 0]];
    }
    return [];
}, create6sidesRender: function (id, texture) {
    if (texture.length == 2) {
        var textures = [[texture[1], texture[0], texture[0], texture[0], texture[0], texture[0]], [texture[0], texture[1], texture[0], texture[0], texture[0], texture[0]], [texture[0], texture[0], texture[1], texture[0], texture[0], texture[0]], [texture[0], texture[0], texture[0], texture[1], texture[0], texture[0]], [texture[0], texture[0], texture[0], texture[0], texture[1], texture[0]], [texture[0], texture[0], texture[0], texture[0], texture[0], texture[1]]];
    }
    for (var i = 0; i < 5; i++) {
        MachineRenderer.registerRenderModel(id, i, textures[i]);
    }
}, initModel: function () {
    if (this.data.isActive) {
        var block = World.getBlock(this.x, this.y, this.z);
        MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
    }
}, activateMachine: function () {
    if (!this.data.isActive) {
        this.data.isActive = true;
        var block = World.getBlock(this.x, this.y, this.z);
        MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
    }
}, deactivateMachine: function () {
    if (this.data.isActive) {
        this.data.isActive = false;
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
    }
}, basicEnergyReceiveFunc: function (type, src) {
    var energyNeed = this.getEnergyStorage() - this.data.energy;
    this.data.energy += src.getAll(energyNeed);
}, isValidEUItem: function (id, count, data, container) {
    var level = container.tileEntity.data.power_tier || 0;
    return ChargeItemRegistry.isValidItem(id, "Eu", level);
}, isValidRFItem: function (id, count, data, container) {
    var level = container.tileEntity.data.power_tier || 0;
    return ChargeItemRegistry.isValidItem(id, RF, level);
}, isValidEUStorage: function (id, count, data, container) {
    var level = container.tileEntity.data.power_tier || 0;
    return ChargeItemRegistry.isValidStorage(id, "Eu", level);
}};
var transferByTier = {0: 32, 1: 256, 2: 2048, 3: 8192};
var UpgradeAPI = {upgrades: {}, data: {}, isUpgrade: function (id) {
    return UpgradeAPI.upgrades[id];
}, registerUpgrade: function (id, func) {
    this.upgrades[id] = true;
    this.data[id] = func;
}, callUpgrade: function (item, machine, container, data, coords) {
    var callback = this.data[item.id];
    if (callback) {
        callback(item, machine, container, data, coords);
    }
}, executeUpgrades: function (machine) {
    var container = machine.container;
    var data = machine.data;
    var coords = {x: machine.x, y: machine.y, z: machine.z};
    var upgrades = [];
    for (var slotName in container.slots) {
        if (slotName.match(/TecModUpgrade/)) {
            var slot = container.getSlot(slotName);
            if (slot.id) {
                var find = false;
                for (var i in upgrades) {
                    var item = upgrades[i];
                    if (item.id == slot.id && item.data == slot.data) {
                        find = true;
                        item.count += slot.count;
                    }
                }
                if (!find) {
                    item = {id: slot.id, count: slot.count, data: slot.data};
                    upgrades.push(item);
                }
            }
        }
    }
    for (var i in upgrades) {
        this.callUpgrade(upgrades[i], machine, container, data, coords);
    }
}, findNearestContainers: function (coords, direction) {
    var directions = {up: {x: 0, y: 1, z: 0}, down: {x: 0, y: -1, z: 0}, east: {x: 1, y: 0, z: 0}, west: {x: -1, y: 0, z: 0}, south: {x: 0, y: 0, z: 1}, north: {x: 0, y: 0, z: -1}};
    var containers = [];
    if (direction) {
        dir = directions[direction];
        var container = World.getContainer(coords.x + dir.x, coords.y + dir.y, coords.z + dir.z);
        if (container) {
            containers.push(container);
        }
    } else {
        for (var i in directions) {
            var dir = directions[i];
            var container = World.getContainer(coords.x + dir.x, coords.y + dir.y, coords.z + dir.z);
            if (container) {
                containers.push(container);
            }
        }
    }
    return containers;
}, findNearestLiquidStorages: function (coords, direction) {
    var directions = {up: {x: 0, y: 1, z: 0}, down: {x: 0, y: -1, z: 0}, east: {x: 1, y: 0, z: 0}, west: {x: -1, y: 0, z: 0}, south: {x: 0, y: 0, z: 1}, north: {x: 0, y: 0, z: -1}};
    var storages = [];
    if (direction) {
        dir = directions[direction];
        var tileEntity = World.getTileEntity(coords.x + dir.x, coords.y + dir.y, coords.z + dir.z);
        if (tileEntity && tileEntity.liquidStorage) {
            storages.push(tileEntity.liquidStorage);
        }
    } else {
        for (var i in directions) {
            var dir = directions[i];
            var tileEntity = World.getTileEntity(coords.x + dir.x, coords.y + dir.y, coords.z + dir.z);
            if (tileEntity && tileEntity.liquidStorage) {
                storages.push(tileEntity.liquidStorage);
            }
        }
    }
    return storages;
}};
function addItemsToContainers(items, containers, tile) {
    for (var i in items) {
        var item = items[i];
        for (var c in containers) {
            if (item.count == 0) {
                item.id = 0;
                item.data = 0;
                break;
            }
            var container = containers[c];
            var tileEntity = container.tileEntity;
            var slots = [];
            var slotsInitialized = false;
            if (tileEntity) {
                if (tileEntity.addTransportedItem) {
                    tileEntity.addTransportedItem({}, item, {x: tile.x, y: tile.y, z: tile.z});
                    continue;
                }
                if (tileEntity.getTransportSlots) {
                    slots = tileEntity.getTransportSlots().input || [];
                    slotsInitialized = true;
                }
            }
            if (!slotsInitialized) {
                if (container.slots) {
                    for (var name in container.slots) {
                        slots.push(name);
                    }
                } else {
                    for (var s = 0; s < container.getSize(); s++) {
                        slots.push(s);
                    }
                }
            }
            for (var s in slots) {
                var slot = container.getSlot(slots[s]);
                if (item.count <= 0) {
                    break;
                }
                if (slot.id == 0 || slot.id == item.id && slot.data == item.data) {
                    var maxstack = slot.id > 0 ? Item.getMaxStack(slot.id) : 64;
                    var add = Math.min(maxstack - slot.count, item.count);
                    item.count -= add;
                    slot.count += add;
                    slot.id = item.id;
                    slot.data = item.data;
                    if (!container.slots) {
                        container.setSlot(s, slot.id, slot.count, slot.data);
                    }
                }
            }
        }
        if (item.count == 0) {
            item.id = 0;
            item.data = 0;
        }
    }
}
function getItemsFrom(items, containers, tile) {
    for (var i in items) {
        var item = items[i];
        var maxStack = 64;
        var stop = false;
        for (var c in containers) {
            var container = containers[c];
            var tileEntity = container.tileEntity;
            var slots = [];
            var slotsInitialized = false;
            if (tileEntity && tileEntity.getTransportSlots) {
                slots = tileEntity.getTransportSlots().output || [];
                slotsInitialized = true;
            }
            if (!slotsInitialized) {
                if (container.slots) {
                    for (var name in container.slots) {
                        slots.push(name);
                    }
                } else {
                    for (var s = 0; s < container.getSize(); s++) {
                        slots.push(s);
                    }
                }
            }
            for (var s in slots) {
                var slot = container.getSlot(slots[s]);
                if (slot.id > 0) {
                    if (tile.addTransportedItem) {
                        stop = tile.addTransportedItem({}, slot, {});
                        if (!container.slots) {
                            container.setSlot(s, slot.id, slot.count, slot.data);
                        }
                        if (stop) {
                            break;
                        }
                    } else {
                        if (item.id == slot.id && item.data == slot.data || item.id == 0) {
                            maxStack = Item.getMaxStack(slot.id);
                            var add = Math.min(maxStack - item.count, slot.count);
                            slot.count -= add;
                            item.count += add;
                            item.id = slot.id;
                            item.data = slot.data;
                            if (slot.count == 0) {
                                slot.id = slot.data = 0;
                            }
                            if (!container.slots) {
                                container.setSlot(s, slot.id, slot.count, slot.data);
                            }
                            if (item.count == maxStack) {
                                break;
                            }
                        }
                    }
                }
            }
            if (stop || !tile.addTransportedItem && item.count == maxStack) {
                break;
            }
        }
        if (tile.addTransportedItem) {
            return;
        }
    }
}
function addLiquidToStorages(liquid, output, input) {
    var amount = output.getLiquid(liquid, 1);
    if (amount) {
        for (var i in input) {
            var storage = input[i];
            if (storage.getLimit(liquid) < 99999999) {
                amount = storage.addLiquid(liquid, amount);
            }
        }
        output.addLiquid(liquid, amount);
    }
}
function getLiquidFromStorages(liquid, input, output) {
    var amount;
    for (var i in output) {
        var storage = output[i];
        if (!liquid) {
            liquid = storage.getLiquidStored();
        }
        if (liquid) {
            var limit = input.getLimit(liquid);
            if (limit < 99999999) {
                if (!amount) {
                    amount = Math.min(limit - input.getAmount(liquid), 1);
                }
                amount = storage.getLiquid(liquid, amount);
                input.addLiquid(liquid, amount);
                if (input.isFull(liquid)) {
                    return;
                }
            } else {
                liquid = null;
            }
        }
    }
}
MachineRegistry.machineContainer = {addItemToContainer: function (container, item, size, prefix, index) {
    if (!size) {
        s = 28;
    } else {
        s = size;
    }
    !prefix ? prefix = "" : null;
    for (var index = index ? index : 1; index <= s; index++) {
        var slot = container.getSlot("slot" + prefix + index);
        if ((slot.id == item.id && slot.data == item.data) || slot.id == 0) {
            if (slot.count <= Item.getMaxStack(item.id)) {
                var maxcount = Item.getMaxStack(item.id) - slot.count;
                if (item.count <= maxcount) {
                    container.setSlot("slot" + prefix + index, item.id, slot.count + item.count, item.data);
                    container.validateAll();
                    return false;
                }
                if (item.count > maxcount) {
                    container.setSlot("slot" + prefix + index, item.id, slot.count + maxcount, item.data);
                    container.validateAll();
                    item.count -= maxcount;
                }
            }
        }
    }
    return item.count;
}, isItemInContainer: function (container, item, size, prefix, index) {
    if (!size) {
        s = 28;
    } else {
        s = size;
    }
    !prefix ? prefix = "" : null;
    for (var index = index ? index : 1; index <= s; index++) {
        var slot = container.getSlot("slot" + prefix + index);
        if (slot.id == item.id && (slot.data == item.data || item.data == -1)) {
            item.count = Math.max(item.count - slot.count, 0);
        }
    }
    if (item.count == 0) {
        return true;
    }
    return false;
}, giveItemFromContainer: function (container, item, size, prefix, index) {
    if (!size) {
        s = 28;
    } else {
        s = size;
    }
    !prefix ? prefix = "" : null;
    for (var index = index ? index : 1; index < s; index++) {
        var slot = container.getSlot("slot" + prefix + index);
        if (slot.id == item.id && (slot.data == item.data || item.data == -1)) {
            if (slot.count >= item.count) {
                container.setSlot("slot" + prefix + index, item.id, slot.count - item.count, item.data);
                container.validateAll();
                return true;
            }
            if (slot.count < item.count) {
                item.count -= slot.count;
                container.setSlot("slot" + prefix + index, item.id, 0, item.data);
                container.validateAll();
            }
        }
    }
    return false;
}};
var MachineRegistryMultErnegie = {machineIDs: {}, isMachine: function (id) {
    return this.machineIDs[id];
}, registerPrototype: function (id, Prototype) {
    this.machineIDs[id] = true;
    if (Prototype.defaultValues) {
        Prototype.defaultValues.energy = 0;
    } else {
        Prototype.defaultValues = {energy: 0};
    }
    ICRender.getGroup("ic-wire").add(id, -1);
    ICRender.getGroup("rf-wire").add(id, -1);
    ToolAPI.registerBlockMaterial(id, "stone", 1);
    Block.setDestroyTime(id, 3);
    TileEntity.registerPrototype(id, Prototype);
    EnergyTileRegistry.addEnergyTypeForId(id, EU);
    EnergyTileRegistry.addEnergyTypeForId(id, RF);
}, basicEnergyReceiveFunc: function (type, src) {
    var energyNeed = this.getEnergyStorage() - this.data.energy;
    this.data.energy += src.get(energyNeed);
}};
IDRegistry.genBlockID("MachineBlockMG");
Block.createBlock("MachineBlockMG", [{name: "Machine Block", texture: [["machine_Block_tier_0_G", 0]], inCreative: true}], MachineBlockSolid);
IDRegistry.genBlockID("MachineBlockTier2MG");
Block.createBlock("MachineBlockTier2MG", [{name: "Machine Block Tier 2", texture: [["machine_Block_tier_2_G", 0]], inCreative: true}], MachineBlockSolid);
MachineRegistry.machineRegisterErnegytic = {registerEnergyTile: function (id, proto, pipe) {
    if (proto.defaultValues) {
        proto.defaultValues.energy = 0;
    } else {
        proto.defaultValues = {energy: 0};
    }
    if (!proto.getEnergyStorage) {
        proto.getEnergyStorage = function () {
            return 0;
        };
    }
    this.registerTile(id, proto, pipe);
    EnergyTileRegistry.addEnergyTypeForId(id, EU);
}, basicEnergyStorage: function (type, src) {
    var energyNeed = this.getEnergyStorage() - this.data.energy;
    this.data.energy += src.getAll(energyNeed);
}, registerTile: function (id, tile, pipe) {
    pipe ? null : pipe = {};
    ToolAPI.registerBlockMaterial(id, "stone");
    TileEntity.registerPrototype(id, tile);
}, registerNetTile: function (id, proto) {
    if (proto.defaultValues) {
        proto.defaultValues.energy = 0;
    } else {
        proto.defaultValues = {energy: 0};
    }
    if (!proto.getEnergyStorage) {
        proto.getEnergyStorage = function () {
            return 0;
        };
    }
    proto.isNetTile = true;
    ToolAPI.registerBlockMaterial(id, "stone");
    TileEntity.registerPrototype(id, proto);
    EnergyTileRegistry.addEnergyTypeForId(id, AE);
    ICRender.getGroup("ic-wire").add(id, -1);
}};
IDRegistry.genItemID("GearTecM");
Item.createItem("GearTecM", " Engrenagem", {name: "tec_engrenagens_noramal", meta: 0}, {stack: 64});
IDRegistry.genItemID("circurtUnicGold");
Item.createItem("circurtUnicGold", "Circuito", {name: "circurt_unic_gold", meta: 0}, {stack: 64});
IDRegistry.genItemID("circurtUnicRedStone");
Item.createItem("circurtUnicRedStone", "Circuito", {name: "circurt_unic_redstone", meta: 0}, {stack: 64});
IDRegistry.genItemID("circurtUnicEmerald");
Item.createItem("circurtUnicEmerald", "Circuito", {name: "circurt_unic_emerald", meta: 0}, {stack: 64});
IDRegistry.genItemID("circurtUnicLapis");
Item.createItem("circurtUnicLapis", "Circuito", {name: "circurt_unic_l\xe1pis", meta: 0}, {stack: 64});
IDRegistry.genItemID("circurtUnicIron");
Item.createItem("circurtUnicIron", "Circuito", {name: "circurt_unic_iron", meta: 0}, {stack: 64});
IDRegistry.genItemID("TecBaterryPotable");
Item.createItem("TecBaterryPotable", "Bateria", {name: "tec_battery_potable", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.TecBaterryPotable, "Eu", 800000, 0, true);
Item.registerNameOverrideFunction(ItemID.TecBaterryPotable, ENERGY_ITEM_NAME);
Item.registerIconOverrideFunction(ItemID.TecBaterryPotable, function (item, name) {
    var energyStorage = Item.getMaxDamage(item.id) - 1;
    var energyStored = energyStorage - item.data + 1;
    return {name: "tec_battery_potable", meta: Math.round(energyStored / energyStorage * 4)};
});
IDRegistry.genItemID("GearAndvancendTecM");
Item.createItem("GearAndvancendTecM", " Engrenagem Avan\xe7ada", {name: "tec_engrenagens_avan\xe7ada", meta: 0}, {stack: 64});
IDRegistry.genItemID("p\xf3deferro");
Item.createItem("p\xf3deferro", "P\xf3 de ferro", {name: "po_de_ferro", meta: 0}, {stack: 64});
IDRegistry.genItemID("p\xf3deouro");
Item.createItem("p\xf3deouro", "P\xf3 de ouro", {name: "po_de_ouro", meta: 0}, {stack: 64});
IDRegistry.genItemID("p\xf3dediamante");
Item.createItem("p\xf3dediamante", "P\xf3 de diamantes", {name: "po_de_diamante", meta: 0}, {stack: 64});
IDRegistry.genItemID("p\xf3deesmeraldas");
Item.createItem("p\xf3deesmeraldas", "P\xf3 de esmeraldas", {name: "po_de_esmeralda", meta: 0}, {stack: 64});
IDRegistry.genItemID("p\xf3delapisazul");
Item.createItem("p\xf3delapisazul", "P\xf3 de lapis-Azuli", {name: "po_de_l\xe1pislasubi", meta: 0}, {stack: 64});
IDRegistry.genItemID("p\xf3decarvao");
Item.createItem("p\xf3decarvao", "P\xf3 de Carv\xe3o", {name: "po_de_carvao", meta: 0}, {stack: 64});
IDRegistry.genItemID("p\xf3decolori");
Item.createItem("p\xf3decolori", "P\xf3 de Color Ingot", {name: "po_de_color", meta: 0}, {stack: 64});
IDRegistry.genBlockID("storageExtraBox");
Block.createBlockWithRotation("storageExtraBox", [{name: "Bateria", texture: [["machine_Block_tier_0_G", 0], ["machine_Block_tier_0_G", 0], ["storage_box_front", 0], ["storage_box_front", 0], ["storage_box_front", 0], ["storage_box_front", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.storageExtraBox, "stone", 2, true);
Block.registerDropFunction("storageExtraBox", function (coords, blockID, blockData, level) {
    MachineRegistry.getMachineDrop(coords, blockID, level);
    return [];
});
Item.registerNameOverrideFunction(BlockID.storageExtraBox, function (item, name) {
    item = Player.getCarriedItem();
    if (item.extra) {
        var energyStored = item.extra.getInt("Eu");
        return name + "\n\xa77" + energyStored + "/" + 800000 + " Eu";
    }
    return name;
});
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({id: BlockID.storageExtraBox, count: 1, data: 0}, ["aaa", "oco", "bbb"], ["a", 42, 0, "c", 54, 0, "b", 152, 0]);
});
var GuiBatteryStorageSinple = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 1000}}, params: {}, drawing: [], elements: {"slot1": {type: "slot", x: 539, y: 400, bitmap: "invSlot_t", size: 40}, "slot2": {type: "slot", x: 466, y: 400, bitmap: "invSlot_t", size: 40}, "textInfo1": {type: "text", x: 610, y: 250, width: 30, height: 20, size: 15, text: "0/", color: android.graphics.Color.rgb(255, 255, 255)}, "textInfo2": {type: "text", x: 610, y: 270, width: 80, height: 20, text: "800000 Eu", size: 15, color: android.graphics.Color.rgb(255, 255, 255)}, "energyScale": {type: "scale", x: 500, y: 250, direction: 0, value: 0.5, bitmap: "tec_ernegy_storage_machine", scale: 1}}});
MachineRegistry.registerPrototype(BlockID.storageExtraBox, {defaultValues: {power_tier: 0}, isStorage: true, getGuiScreen: function () {
    return GuiBatteryStorageSinple;
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    this.container.setScale("energyScale", this.data.energy / energyStorage);
    this.container.setText("textInfo1", parseInt(this.data.energy) + "/");
    this.container.setText("textInfo2", energyStorage);
    var TRANSFER = 80;
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot2"), "Eu", energyStorage - this.data.energy, TRANSFER, 0);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), "Eu", this.data.energy, TRANSFER, 0);
}, getEnergyStorage: function () {
    return 800000;
}, energyTick: function (type, src) {
    var TRANSFER = 1000;
    this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
}, destroyBlock: function (coords, player) {
    var extra;
    if (this.data.energy > 0) {
        extra = new ItemExtraData();
        extra.putInt("Eu", this.data.energy);
    }
    nativeDropItem(coords.x, coords.y, coords.z, 0, BlockID.storageExtraBox, 1, 0, extra);
}});
ToolAPI.registerBlockMaterial(BlockID.storageExtraBox, "wood");
Block.registerPlaceFunction("storageExtraBox", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, item.id, 0);
        var tile = World.addTileEntity(x, y, z);
        if (item.extra) {
            tile.data.energy = item.extra.getInt("Eu") + 16;
        }
    }
});
IDRegistry.genBlockID("TecenergyConverter");
Block.createBlockWithRotation("TecenergyConverter", [{name: "Conversor de ernegia", texture: [["machine_Block_tier_0_G", 0], ["machine_Block_tier_0_G", 0], ["energyConverter_side_tec", 0], ["energyConverter_tec", 0], ["energyConverter_side_tec", 0], ["energyConverter_side_tec", 0]], inCreative: true}], "opaque");
var guiErnegyConverter = new UI.StandartWindow({standart: {header: {text: {text: "Energy converter"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 530, y: 100, bitmap: "barra_de_ernegia_de_maquina_background", scale: 2.8}], elements: {"energyScale": {type: "scale", x: 530, y: 100, direction: 1, value: 0.5, bitmap: "barra_de_ernegia_de_maquina_avan\xe7ada", scale: 2.8}, "textInfo1": {type: "text", x: 642, y: 172, width: 300, height: 30, text: "0/"}, "textInfo2": {type: "text", x: 642, y: 202, width: 350, height: 30, text: "7202000 EU/RF"}}});
MachineRegistryMultErnegie.registerPrototype(BlockID.TecenergyConverter, {defaultValues: {energy: 0}, isStorage: true, getGuiScreen: function () {
    return guiErnegyConverter;
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    this.container.setScale("energyScale", this.data.energy / energyStorage);
    this.container.setText("textInfo1", parseInt(this.data.energy) + "/");
}, getEnergyStorage: function () {
    return 7202000;
}, energyTick: function (type, src) {
    var TRANSFER = 10000000;
    this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
}});
IDRegistry.genBlockID("minerduplicator");
Block.createBlockWithRotation("minerduplicator", [{name: "Multiplicador de minerios", texture: [["machine_Block_tier_0_G", 1], ["storage_box_top", 0], ["machine_Block_tier_0_G", 1], ["multiplicador_de_min\xe9rios_front", 0], ["machine_Block_tier_0_G", 1], ["machine_Block_tier_0_G", 1]], inCreative: true}], "opaque");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({id: BlockID.minerduplicator, count: 1, data: 0}, ["bx#", "aaa", "aaa"], ["a", 42, 0, "b", 266, 0, "x", 264, 0, "#", 388, 0]);
});
Callback.addCallback("PreLoaded", function () {
    MachineRecipeRegistry.registerRecipesFor("minerduplicator", {265: {id: ItemID.pódeferro, count: 2, data: 0}, 266: {id: ItemID.pódeouro, count: 2, data: 0}, 264: {id: ItemID.pódediamante, count: 2, data: 0}, 388: {id: ItemID.pódeesmeraldas, count: 2, data: 0}, "351:4": {id: ItemID.pódelapisazul, count: 2, data: 0}, 263: {id: ItemID.pódecarvao, count: 2, data: 0}, "263:1": {id: ItemID.pódecarvao, count: 3, data: 0}, 42: {id: ItemID.pódeferro, count: 18, data: 0}, 41: {id: ItemID.pódeouro, count: 18, data: 0}, 57: {id: ItemID.pódediamante, count: 18, data: 0}, 133: {id: ItemID.pódeesmeraldas, count: 18, data: 0}, 22: {id: ItemID.pódelapisazul, count: 18, data: 0}, 173: {id: ItemID.pódecarvao, count: 18, data: 0}, "ItemID.p\xf3deferro": {id: ItemID.IronDust, count: 2, data: 0}, "ItemID.copperingot": {id: ItemID.CopperDust, count: 2, data: 0}, "ItemID.tiningot": {id: ItemID.TinDust, count: 2, data: 0}, "ItemID.ingotosmium": {id: ItemID.OsmiumDust, count: 2, data: 0}}, true);
});
Callback.addCallback("PostLoaded", function () {
    Recipes.addFurnace(ItemID.pódeferro, 0, 265, 0);
    Recipes.addFurnace(ItemID.pódeouro, 0, 266, 0);
    Recipes.addFurnace(ItemID.pódediamante, 0, 264, 0);
    Recipes.addFurnace(ItemID.pódeesmeraldas, 0, 388, 0);
    Recipes.addFurnace(ItemID.pódelapisazul, 0, 351, 4);
    Recipes.addFurnace(ItemID.pódecarvao, 0, 263, 0);
});
var guiminerduplicator = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 1000}}, params: {selection: "selection_wood2"}, drawing: [], elements: {"slotSource": {type: "slot", x: 450, y: 250, size: 38, bitmap: "invSlot_t"}, "slotResult": {type: "slot", x: 560, y: 250, size: 38, bitmap: "invSlot_t"}, "slotEnergy": {type: "slot", x: 450, y: 340, size: 38, bitmap: "invSlot_t"}, "progressScale": {type: "scale", x: 500, y: 255, direction: 0, value: 0.5, bitmap: "bar_progrese", scale: 2}, "energyScale": {type: "scale", x: 450, y: 292, direction: 1, value: 0.5, bitmap: "barra_de_energia", scale: 2.8}, "slotTecModUpgrade0": {type: "slot", x: 370, y: 172, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "slotTecModUpgrade1": {type: "slot", x: 370, y: 210, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "slotTecModUpgrade2": {type: "slot", x: 370, y: 248, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "slotTecModUpgrade3": {type: "slot", x: 370, y: 286, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}}});
ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
    api.CriarClassicUI.ClassicGUI(guiminerduplicator, {invSlot: "invSlot_t", frame: "frame", closeButton: "close_b", closeButton2: "close_b2", text: "Multiplicador de Min\xe9rios", backgroundBitmap: null, backgroundColor: {a: 255, r: 174, g: 174, b: 174}, textColor: {r: 1, g: 1, b: 1}});
    api.CriarClassicUI.ClassicGUI(GuiBatteryStorageSinple, {invSlot: "invSlot_t", frame: "frame", closeButton: "close_b", closeButton2: "close_b2", text: "Bateria", background: null, backgroundColor: {a: 255, r: 174, g: 174, b: 174}, textColor: {r: 1, g: 1, b: 1}});
});
GuiBatteryStorageSinple.content.drawing.push({type: "bitmap", x: 579, y: 397, bitmap: "ernegia_entrada_tec", scale: 0.5}, {type: "bitmap", x: 508, y: 397, bitmap: "ernegia_saida_tec", scale: 0.5}, {type: "bitmap", x: 500, y: 250, scale: 1, bitmap: "tec_ernegy_storage_machine_background"});
guiminerduplicator.content.drawing.push({type: "bitmap", x: 450, y: 292, bitmap: "barra_de_energia_background", scale: 2.8}, {type: "bitmap", x: 500, y: 255, bitmap: "bar_progrese_background", scale: 2});
ICRender.getGroup("item-pipe").add(BlockID.minerduplicator, -1);
MachineRegistry.registerPrototype(BlockID.minerduplicator, {defaultValues: {power_tier: 0, energy_storage: 1200, energy_consumption: 2, work_time: 100, progress: 0, isActive: false}, getGuiScreen: function () {
    return guiminerduplicator;
}, getTransportSlots: function () {
    return {input: ["slotSource"], output: ["slotResult"]};
}, setDefaultValues: function () {
    this.data.energy_storage = this.defaultValues.energy_storage;
    this.data.energy_consumption = this.defaultValues.energy_consumption;
    this.data.work_time = this.defaultValues.work_time;
}, tick: function () {
    this.setDefaultValues();
    UpgradeAPI.executeUpgrades(this);
    var sourceSlot = this.container.getSlot("slotSource");
    var resultSlot = this.container.getSlot("slotResult");
    var result = MachineRecipeRegistry.getRecipeResult("minerduplicator", sourceSlot.id, sourceSlot.data);
    if (result && (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count <= 64 - result.count || resultSlot.id == 0)) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1;
            this.activate();
        } else {
            this.deactivate();
        }
        if (this.data.progress >= this.data.work_time) {
            sourceSlot.count--;
            resultSlot.id = result.id;
            resultSlot.data = result.data;
            resultSlot.count += result.count;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
        this.deactivate();
    }
    var energyStorage = this.getEnergyStorage();
    var tier = this.data.power_tier;
    this.data.energy = Math.min(this.data.energy, energyStorage);
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", energyStorage - this.data.energy, transferByTier[tier], tier);
    this.container.setScale("progressScale", this.data.progress / this.data.work_time);
    this.container.setScale("energyScale", this.data.energy / energyStorage);
}, getEnergyStorage: function () {
    return this.data.energy_storage;
}, init: MachineRegistry.initModel, activate: MachineRegistry.activateMachine, deactivate: MachineRegistry.deactivateMachine, destroy: this.deactivate, energyTick: MachineRegistry.basicEnergyReceiveFunc});
IDRegistry.genBlockID("minerduplicatorTier2");
Block.createBlockWithRotation("minerduplicatorTier2", [{name: "Multiplicador de minerios Tier 2", texture: [["machine_Block_tier_0_G", 1], ["storage_box_top", 0], ["machine_Block_tier_0_G", 1], ["multiplicador_de_min\xe9rios_tier2_front", 0], ["machine_Block_tier_0_G", 1], ["machine_Block_tier_0_G", 1]], inCreative: true}], MachineBlockSolid);
ICRender.getGroup("item-pipe").add(BlockID.minerduplicatorTier2, -1);
Callback.addCallback("PreLoaded", function () {
    MachineRecipeRegistry.registerRecipesFor("minerduplicatorTier2", {265: {id: ItemID.pódeferro, count: 2, data: 0}, 266: {id: ItemID.pódeouro, count: 2, data: 0}, 264: {id: ItemID.pódediamante, count: 2, data: 0}, 388: {id: ItemID.pódeesmeraldas, count: 2, data: 0}, "351:4": {id: ItemID.pódelapisazul, count: 2, data: 0}, 263: {id: ItemID.pódecarvao, count: 2, data: 0}, "263:1": {id: ItemID.pódecarvao, count: 3, data: 0}, "ItemID.colorIngot": {id: ItemID.pódecolori, count: 16, data: 0}, "ItemID.colorCristal": {id: ItemID.pódecolori, count: 2, data: 0}, 42: {id: ItemID.pódeferro, count: 18, data: 0}, 41: {id: ItemID.pódeouro, count: 18, data: 0}, 57: {id: ItemID.pódediamante, count: 18, data: 0}, 133: {id: ItemID.pódeesmeraldas, count: 18, data: 0}, 22: {id: ItemID.pódelapisazul, count: 18, data: 0}, 173: {id: ItemID.pódecarvao, count: 18, data: 0}, "ItemID.p\xf3deferro": {id: ItemID.IronDust, count: 2, data: 0}, "ItemID.copperingot": {id: ItemID.CopperDust, count: 2, data: 0}, "ItemID.tiningot": {id: ItemID.TinDust, count: 2, data: 0}, "ItemID.ingotosmium": {id: ItemID.OsmiumDust, count: 2, data: 0}}, true);
    Recipes.addFurnace(ItemID.pódecolori, 0, ItemID.colorCristal, 0);
});
MachineRegistry.registerPrototype(BlockID.minerduplicatorTier2, {defaultValues: {power_tier: 0, energy_storage: 12000, energy_consumption: 6, work_time: 80, progress: 0, isActive: false}, getGuiScreen: function () {
    return guiminerduplicator;
}, getTransportSlots: function () {
    return {input: ["slotSource"], output: ["slotResult"]};
}, setDefaultValues: function () {
    this.data.energy_storage = this.defaultValues.energy_storage;
    this.data.energy_consumption = this.defaultValues.energy_consumption;
    this.data.work_time = this.defaultValues.work_time;
}, tick: function () {
    this.setDefaultValues();
    UpgradeAPI.executeUpgrades(this);
    var sourceSlot = this.container.getSlot("slotSource");
    var resultSlot = this.container.getSlot("slotResult");
    var result = MachineRecipeRegistry.getRecipeResult("minerduplicatorTier2", sourceSlot.id, sourceSlot.data);
    if (result && (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count <= 64 - result.count || resultSlot.id == 0)) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1;
            this.activate();
        } else {
            this.deactivate();
        }
        if (this.data.progress >= this.data.work_time) {
            sourceSlot.count--;
            resultSlot.id = result.id;
            resultSlot.data = result.data;
            resultSlot.count += result.count;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
        this.deactivate();
    }
    var energyStorage = this.getEnergyStorage();
    var tier = this.data.power_tier;
    this.data.energy = Math.min(this.data.energy, energyStorage);
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", energyStorage - this.data.energy, transferByTier[tier], tier);
    this.container.setScale("progressScale", this.data.progress / this.data.work_time);
    this.container.setScale("energyScale", this.data.energy / energyStorage);
}, getEnergyStorage: function () {
    return this.data.energy_storage;
}, init: MachineRegistry.initModel, activate: MachineRegistry.activateMachine, deactivate: MachineRegistry.deactivateMachine, destroy: this.deactivate, energyTick: MachineRegistry.basicEnergyReceiveFunc});
IDRegistry.genBlockID("teleporteWool");
Block.createBlock("teleporteWool", [{name: "Teleporter", texture: [["teleporte_wool", 0]], inCreative: true}], "opaque");
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({id: BlockID.teleporteWool, count: 1, data: 0}, ["xax", "axa", "xax"], ["x", 35, 0, "a", 368, 0]);
});
var friendlyMobs = [EntityType.BAT, EntityType.CHICKEN, EntityType.COW, EntityType.MUSHROOM_COW, EntityType.OCELOT, EntityType.PIG, EntityType.RABBIT, EntityType.SHEEP, EntityType.SNOW_GOLEM, EntityType.SQUID, EntityType.VILLAGER, EntityType.WOLF, 23, 24, 25, 26, 27];
var evilMobs = [EntityType.BLAZE, EntityType.CAVE_SPIDER, EntityType.CREEPER, EntityType.ENDERMAN, EntityType.GHAST, EntityType.IRON_GOLEM, EntityType.LAVA_SLIME, EntityType.PIG_ZOMBIE, EntityType.SILVERFISH, EntityType.SKELETON, EntityType.SLIME, EntityType.SPIDER, EntityType.ZOMBIE, EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];
function getNearestStorages(x, y, z) {
    var directions = [{x: 0, y: 1, z: 0}, {x: 0, y: -1, z: 0}, {x: 1, y: 0, z: 0}, {x: -1, y: 0, z: 0}, {x: 0, y: 0, z: 1}, {x: 0, y: 0, z: -1}];
    var storages = [];
    for (var i in directions) {
        dir = directions[i];
        var machine = EnergyTileRegistry.accessMachineAtCoords(x + dir.x, y + dir.y, z + dir.z);
        if (machine && machine.isStorage) {
            storages.push(machine);
        }
    }
    return storages;
}
MachineRegistry.registerPrototype(BlockID.teleporteWool, {defaultValues: {isActive: false}, getWeight: function (ent) {
    var type = Entity.getType(ent);
    if (ent == player || type == EntityType.MINECART) {
        return 1;
    }
    if (type == EntityType.ITEM) {
        return 1;
    }
    if (friendlyMobs.indexOf(type) !== -1) {
        return 200;
    }
    if (evilMobs.indexOf(type) !== -1) {
        return 1;
    }
    return 0;
}, tick: function () {
    if (World.getThreadTime() % 1 == 0 && this.data.isActive && this.data.frequency) {
        var entities = Entity.getAll();
        var storages = getNearestStorages(this.x, this.y, this.z);
        var energyAvailable = 0;
        for (var i in storages) {
            energyAvailable += storages[i].data.energy;
        }
        receive = this.data.frequency;
        if (energyAvailable > receive.energy * 100) {
            for (var i in entities) {
                var ent = entities[i];
                var c = Entity.getPosition(ent);
                var dx = Math.abs(this.x + 0.5 - c.x);
                var y = c.y - this.y;
                var dz = Math.abs(this.z + 0.5 - c.z);
                if (dx < 1.5 && dz < 1.5 && y >= 0 && y < 3) {
                    var weight = this.getWeight(ent);
                    if (weight) {
                        var energyNeed = weight * receive.energy;
                        if (debugMode) {
                            Debug.m(energyNeed);
                        }
                        if (energyNeed < energyAvailable) {
                            for (var i in storages) {
                                var data = storages[i].data;
                                var energyChange = Math.min(energyNeed, data.energy);
                                data.energy -= energyChange;
                                energyNeed -= energyChange;
                                if (energyNeed <= 0) {
                                    break;
                                }
                            }
                            Entity.setPosition(ent, receive.x + 0.5, receive.y + 3, receive.z + 0.5);
                        }
                    }
                }
            }
        }
    }
}, redstone: function (signal) {
    this.data.isActive = signal.power > 0;
    if (this.data.isActive) {
        MachineRenderer.mapAtCoords(this.x, this.y, this.z, BlockID.teleporteWool, 0);
    } else {
        BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
    }
}, init: MachineRegistry.initModel, destroy: this.deactivate});
IDRegistry.genItemID("trasmiteFrequ");
Item.createItem("trasmiteFrequ", "Configure Teleporte", {name: "teleporteconfigure_icon"}, {stack: 1});
Recipes.addShaped({id: ItemID.trasmiteFrequ, count: 1, data: 0}, ["x", "#", "b"], ["#", 280, 0, "x", 265, 0, "b", 35, 0]);
Item.registerNameOverrideFunction(ItemID.trasmiteFrequ, function (item, name) {
    var carried = Player.getCarriedItem();
    if (carried.id == item.id) {
        var extra = carried.extra;
        if (extra) {
            var x = extra.getInt("x");
            var y = extra.getInt("y");
            var z = extra.getInt("z");
            name += "\n\xa77x: " + x + ", y: " + y + ", z: " + z;
        }
    }
    return name;
});
Item.registerUseFunction("trasmiteFrequ", function (coords, item, block) {
    var receiver;
    var extra = item.extra;
    if (!extra) {
        extra = new ItemExtraData();
        item.extra = extra;
    } else {
        var x = extra.getInt("x");
        var y = extra.getInt("y");
        var z = extra.getInt("z");
        receiver = {x: x, z: z, y: y};
    }
    if (block.id == BlockID.teleporteWool) {
        if (!receiver) {
            extra.putInt("x", coords.x);
            extra.putInt("y", coords.y);
            extra.putInt("z", coords.z);
            Player.setCarriedItem(item.id, 1, item.data, extra);
            Game.message("Ponto Inicial definido");
        } else {
            if (x == coords.x && y == coords.y && z == coords.z) {
                Game.message("Definido ponto inicial");
            } else {
                var data = EnergyTileRegistry.accessMachineAtCoords(coords.x, coords.y, coords.z).data;
                var distance = Entity.getDistanceBetweenCoords(coords, receiver);
                var basicTeleportationCost = Math.floor(5 * Math.pow((distance + 10), 0.7));
                data.frequency = receiver;
                data.frequency.energy = basicTeleportationCost;
                receiver = EnergyTileRegistry.accessMachineAtCoords(x, y, z);
                if (receiver) {
                    data = receiver.data;
                    data.frequency = coords;
                    data.frequency.energy = basicTeleportationCost;
                    Game.message("Definido ponto Final");
                }
            }
        }
    } else {
        if (receiver) {
            Player.setCarriedItem(item.id, 1, item.data);
            Game.message("Restart");
        }
    }
});
var SOLAR_PANEL_BLOCK = Block.createSpecialType({base: 1, opaque: true, renderlayer: 3});
IDRegistry.genItemID("circultUnic");
Item.createItem("circultUnic", "Circuito", {name: "circurt_unic", meta: 0}, {stack: 64});
IDRegistry.genBlockID("solarPanellevel1");
Block.createBlock("solarPanellevel1", [{name: "Solar Panel Level 1", texture: [["machine_Block_tier_2_G", 0], ["solar_panel_l1", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0]], inCreative: true}], SOLAR_PANEL_BLOCK);
IDRegistry.genBlockID("solarPanellevel2");
Block.createBlock("solarPanellevel2", [{name: "Solar Panel Level 2", texture: [["machine_Block_tier_2_G", 0], ["solar_panel_l2", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0]], inCreative: true}], SOLAR_PANEL_BLOCK);
IDRegistry.genBlockID("solarPanellevel3");
Block.createBlock("solarPanellevel3", [{name: "Solar Panel Level 3", texture: [["machine_Block_tier_2_G", 0], ["solar_panel_l3", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0]], inCreative: true}], SOLAR_PANEL_BLOCK);
IDRegistry.genBlockID("solarPanellevel4");
Block.createBlock("solarPanellevel4", [{name: "Solar Panel Level 4", texture: [["machine_Block_tier_2_G", 0], ["solar_panel_l4", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0]], inCreative: true}], SOLAR_PANEL_BLOCK);
IDRegistry.genBlockID("solarPanellevel5");
Block.createBlock("solarPanellevel5", [{name: "Solar Panel Level 5", texture: [["machine_Block_tier_2_G", 0], ["solar_panel_l5", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0]], inCreative: true}], SOLAR_PANEL_BLOCK);
IDRegistry.genBlockID("solarPanellevel6");
Block.createBlock("solarPanellevel6", [{name: "Solar Panel Level 6", texture: [["machine_Block_tier_2_G", 0], ["solar_panel_l6", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0]], inCreative: true}], SOLAR_PANEL_BLOCK);
IDRegistry.genBlockID("solarPanellevel7");
Block.createBlock("solarPanellevel7", [{name: "Solar Panel Level 7", texture: [["machine_Block_tier_2_G", 0], ["solar_panel_l7", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0], ["solar_panel_side", 0]], inCreative: true}], SOLAR_PANEL_BLOCK);
IDRegistry.genBlockID("solarPanellevelsupremeTec");
Block.createBlock("solarPanellevelsupremeTec", [{name: "Solar Panel Supreme", texture: [["c_machine", 0], ["solar_panel_lS", 0], ["c_machine", 0], ["c_machine", 0], ["c_machine", 0], ["c_machine", 0]], inCreative: false}]);
Callback.addCallback("PreLoaded", function () {
    Block.setBlockShape(BlockID.solarPanellevel1, {x: 0 / 16, y: 0, z: 0 / 16}, {x: 16 / 16, y: 8 / 16, z: 16 / 16});
    MachineRegistry.registerPrototype(BlockID.solarPanellevel1, {isGenerator: function () {
        return true;
    }, tick: function () {
        var content = this.container.getGuiContent();
        if (World.getBlockID(this.x, this.y + 1, this.z) != BlockID.luminator && World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
            this.data.energy = 1000;
            this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 1, 32, 0);
            if (content) {
                content.elements["sun"].bitmap = "sun_on";
            }
        } else {
            if (content) {
                content.elements["sun"].bitmap = "sun_off";
            }
        }
    }, getEnergyStorage: function () {
        return 0;
    }, energyTick: function (type, src) {
        if (this.data.energy) {
            src.add(90);
            this.data.energy = 3;
        }
    }});
    Block.setBlockShape(BlockID.solarPanellevel2, {x: 0 / 16, y: 0, z: 0 / 16}, {x: 16 / 16, y: 8 / 16, z: 16 / 16});
    MachineRegistry.registerPrototype(BlockID.solarPanellevel2, {isGenerator: function () {
        return true;
    }, tick: function () {
        var content = this.container.getGuiContent();
        if (World.getBlockID(this.x, this.y + 1, this.z) != BlockID.luminator && World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
            this.data.energy = 2000;
            this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 1, 32, 0);
            if (content) {
                content.elements["sun"].bitmap = "sun_on";
            }
        } else {
            if (content) {
                content.elements["sun"].bitmap = "sun_off";
            }
        }
    }, getEnergyStorage: function () {
        return 0;
    }, energyTick: function (type, src) {
        if (this.data.energy) {
            src.add(180);
            this.data.energy = 6;
        }
    }});
    Block.setBlockShape(BlockID.solarPanellevel3, {x: 0 / 16, y: 0, z: 0 / 16}, {x: 16 / 16, y: 8 / 16, z: 16 / 16});
    MachineRegistry.registerPrototype(BlockID.solarPanellevel3, {isGenerator: function () {
        return true;
    }, tick: function () {
        var content = this.container.getGuiContent();
        if (World.getBlockID(this.x, this.y + 1, this.z) != BlockID.luminator && World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
            this.data.energy = 4000;
            this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 1, 32, 0);
            if (content) {
                content.elements["sun"].bitmap = "sun_on";
            }
        } else {
            if (content) {
                content.elements["sun"].bitmap = "sun_off";
            }
        }
    }, getEnergyStorage: function () {
        return 0;
    }, energyTick: function (type, src) {
        if (this.data.energy) {
            src.add(360);
            this.data.energy = 12;
        }
    }});
    Block.setBlockShape(BlockID.solarPanellevel4, {x: 0 / 16, y: 0, z: 0 / 16}, {x: 16 / 16, y: 8 / 16, z: 16 / 16});
    MachineRegistry.registerPrototype(BlockID.solarPanellevel4, {isGenerator: function () {
        return true;
    }, tick: function () {
        var content = this.container.getGuiContent();
        if (World.getBlockID(this.x, this.y + 1, this.z) != BlockID.luminator && World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
            this.data.energy = 8000;
            this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 1, 32, 0);
            if (content) {
                content.elements["sun"].bitmap = "sun_on";
            }
        } else {
            if (content) {
                content.elements["sun"].bitmap = "sun_off";
            }
        }
    }, getEnergyStorage: function () {
        return 0;
    }, energyTick: function (type, src) {
        if (this.data.energy) {
            src.add(720);
            this.data.energy = 24;
        }
    }});
    Block.setBlockShape(BlockID.solarPanellevel5, {x: 0 / 16, y: 0, z: 0 / 16}, {x: 16 / 16, y: 8 / 16, z: 16 / 16});
    MachineRegistry.registerPrototype(BlockID.solarPanellevel5, {isGenerator: function () {
        return true;
    }, tick: function () {
        var content = this.container.getGuiContent();
        if (World.getBlockID(this.x, this.y + 1, this.z) != BlockID.luminator && World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
            this.data.energy = 8000;
            this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 1, 32, 0);
            if (content) {
                content.elements["sun"].bitmap = "sun_on";
            }
        } else {
            if (content) {
                content.elements["sun"].bitmap = "sun_off";
            }
        }
    }, getEnergyStorage: function () {
        return 0;
    }, energyTick: function (type, src) {
        if (this.data.energy) {
            src.add(1440);
            this.data.energy = 48;
        }
    }});
    Block.setBlockShape(BlockID.solarPanellevel6, {x: 0 / 16, y: 0, z: 0 / 16}, {x: 16 / 16, y: 8 / 16, z: 16 / 16});
    MachineRegistry.registerPrototype(BlockID.solarPanellevel6, {isGenerator: function () {
        return true;
    }, tick: function () {
        var content = this.container.getGuiContent();
        if (World.getBlockID(this.x, this.y + 1, this.z) != 246 && World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
            this.data.energy = 8000;
            this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 1, 32, 0);
            if (content) {
                content.elements["sun"].bitmap = "sun_on";
            }
        } else {
            if (content) {
                content.elements["sun"].bitmap = "sun_off";
            }
        }
    }, getEnergyStorage: function () {
        return 0;
    }, energyTick: function (type, src) {
        if (this.data.energy) {
            src.add(8000);
            this.data.energy = 8000;
        }
    }});
    Block.setBlockShape(BlockID.solarPanellevel7, {x: 0 / 16, y: 0, z: 0 / 16}, {x: 16 / 16, y: 8 / 16, z: 16 / 16});
    MachineRegistry.registerPrototype(BlockID.solarPanellevel7, {isGenerator: function () {
        return true;
    }, tick: function () {
        var content = this.container.getGuiContent();
        if (World.getBlockID(this.x, this.y + 1, this.z) != 246 && World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
            this.data.energy = 50000;
            this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slotEnergy"), "Eu", 1, 32, 0);
            if (content) {
                content.elements["sun"].bitmap = "sun_on";
            }
        } else {
            if (content) {
                content.elements["sun"].bitmap = "sun_off";
            }
        }
    }, getEnergyStorage: function () {
        return 0;
    }, energyTick: function (type, src) {
        if (this.data.energy) {
            src.add(50000);
            this.data.energy = 50000;
        }
    }});
    EnergyTileRegistry.addEnergyTypeForId(BlockID.solarPanellevel7, RF);
    ICRender.getGroup("rf-wire").add(BlockID.solarPanellevel7, -1);
    RF.registerWire(BlockID.solarPanellevel7);
    EU.registerWire(BlockID.solarPanellevel7);
    IDRegistry.genItemID("solarPanelLevelSupermeTecItn");
    Item.createItem("solarPanelLevelSupermeTecItn", "Painel Solar Nivel Maximo", {name: "solar_panel_tier_s_tec", meta: 0}, {stack: 64});
    Block.registerDropFunction("solarPanellevelsupremeTec", function (coords) {
        return [[ItemID.solarPanelLevelSupermeTecItn, 1, 0]];
    });
    Item.registerUseFunction("solarPanelLevelSupermeTecItn", function (coords, item, block) {
        World.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.solarPanellevelsupremeTec);
        Player.decreaseCarriedItem(1);
    });
    var RenderSolarPanel = new ICRender.Model();
    var modelSolarPanel = BlockRenderer.createModel();
    modelSolarPanel.addBox(0 / 16, 16 / 16, 0 / 16, 16 / 16, 17 / 16, 16 / 16, BlockID.solarPanellevelsupremeTec, 0);
    modelSolarPanel.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 1 / 16, 16 / 16, "storage_box_adv_tec", 0);
    modelSolarPanel.addBox(6 / 16, 1 / 16, 6 / 16, 10 / 16, 16 / 16, 10 / 16, "c_machine", 0);
    modelSolarPanel.addBox(5 / 16, 5 / 16, 0 / 16, 11 / 16, 11 / 16, 1 / 16, "storage_box_adv_tec_saida", 0);
    modelSolarPanel.addBox(5 / 16, 5 / 16, 15 / 16, 11 / 16, 11 / 16, 16 / 16, "storage_box_adv_tec_saida", 0);
    modelSolarPanel.addBox(0 / 16, 5 / 16, 5 / 16, 1 / 16, 11 / 16, 11 / 16, "storage_box_adv_tec_saida", 0);
    modelSolarPanel.addBox(15 / 16, 5 / 16, 5 / 16, 16 / 16, 11 / 16, 11 / 16, "storage_box_adv_tec_saida", 0);
    modelSolarPanel.addBox(5 / 16, 1 / 16, 0 / 16, 11 / 16, 3 / 16, 1 / 16, "storage_box_adv_tec_saida", 0);
    modelSolarPanel.addBox(5 / 16, 1 / 16, 15 / 16, 11 / 16, 3 / 16, 16 / 16, "storage_box_adv_tec_saida", 0);
    modelSolarPanel.addBox(0 / 16, 1 / 16, 5 / 16, 1 / 16, 3 / 16, 11 / 16, "storage_box_adv_tec_saida", 0);
    modelSolarPanel.addBox(15 / 16, 1 / 16, 5 / 16, 16 / 16, 3 / 16, 11 / 16, "storage_box_adv_tec_saida", 0);
    RenderSolarPanel.addEntry(modelSolarPanel);
    BlockRenderer.setStaticICRender(BlockID.solarPanellevelsupremeTec, 0, RenderSolarPanel);
    var SolarPGui = new UI.StandartWindow({standart: {inventory: {padding: 1000}}, params: {slot: "invSlot_t"}, drawing: [], elements: {"EUtxtp": {type: "text", x: 390, y: 275, text: "Loanding...", height: 20, widht: 40, size: 14}, "EUtxta": {type: "text", x: 390, y: 305, text: "Loanding...", height: 20, widht: 40, size: 14}, "EuScalse": {type: "scale", x: 600, y: 210, scale: 3, direction: 1, value: 0.5, bitmap: "Storage_Ernegy_Box_Tec"}, "SunIm": {type: "image", x: 390, y: 360, scale: 2, bitmap: "tec_sun_0"}}});
    ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
        api.CriarClassicUI.ClassicGUI(SolarPGui, {text: "Painel Solar"});
    });
    SolarPGui.content.drawing.push({type: "bitmap", x: 600, y: 210, scale: 3, bitmap: "Storage_Ernegy_Box_Tec_background"});
    MachineRegistry.registerPrototype(BlockID.solarPanellevelsupremeTec, {getGuiScreen: function () {
        return SolarPGui;
    }, isGenerator: function () {
        return true;
    }, getEnergyStorage: function () {
        return 20000000;
    }, tick: function () {
        this.data.ernegyproduction = false;
        this.data.ernegyproduction1 = false;
        this.data.ernegyproduction2 = false;
        this.data.ernegyproduction3 = false;
        var energyStorage = this.getEnergyStorage();
        var content = this.container.getGuiContent();
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 15) {
            this.data.ernegyproduction = true;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = false;
            this.data.energy += 20;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_1";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 14) {
            this.data.ernegyproduction = true;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = false;
            this.data.energy += 20;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_1";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 13) {
            this.data.ernegyproduction = true;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = false;
            this.data.energy += 20;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_1";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 12) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = true;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = false;
            this.data.energy += 15;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_2";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 11) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = true;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = false;
            this.data.energy += 15;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_2";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 10) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = true;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = false;
            this.data.energy += 15;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_2";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 9) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = true;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = false;
            this.data.energy += 15;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_2";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 9) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = true;
            this.data.ernegyproduction3 = false;
            this.data.energy += 10;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_3";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 8) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = true;
            this.data.ernegyproduction3 = false;
            this.data.energy += 10;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_3";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 7) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = true;
            this.data.ernegyproduction3 = false;
            this.data.energy += 10;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_3";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 6) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = true;
            this.data.ernegyproduction3 = false;
            this.data.energy += 10;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_3";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 5) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = true;
            this.data.ernegyproduction3 = false;
            this.data.energy += 10;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_3";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 4) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = true;
            this.data.ernegyproduction3 = false;
            this.data.energy += 10;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_3";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 3) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = true;
            this.data.energy += 10;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_4";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 2) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = true;
            this.data.energy += 10;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_4";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 1) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = true;
            this.data.energy += 10;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_4";
            }
        }
        if (World.getLightLevel(this.x, this.y + 1, this.z) == 0) {
            this.data.ernegyproduction = false;
            this.data.ernegyproduction1 = false;
            this.data.ernegyproduction2 = false;
            this.data.ernegyproduction3 = false;
            this.data.energy += 0;
            if (content) {
                content.elements["SunIm"].bitmap = "tec_sun_0";
            }
        }
        this.container.setScale("EuScalse", this.data.energy / energyStorage);
        this.container.setText("EUtxta", parseInt(this.data.energy) + "/" + energyStorage);
        this.container.setText("EUtxtp", parseInt(World.getLightLevel(this.x, this.y + 1, this.z)) + "/" + "15");
    }, energyTick: function (type, src) {
        if (this.data.ernegyproduction) {
            src.add(90000000);
        }
        if (this.data.ernegyproduction1) {
            src.add(100000);
        }
        if (this.data.ernegyproduction2) {
            src.add(70000);
        }
        if (this.data.ernegyproduction3) {
            src.add(40000);
        }
    }});
    RF.registerWire(BlockID.solarPanellevelsupremeTec);
    EU.registerWire(BlockID.solarPanellevelsupremeTec);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.solarPanellevelsupremeTec, RF);
    ICRender.getGroup("rf-wire").add(BlockID.solarPanellevelsupremeTec, -1);
});
IDRegistry.genItemID("Tecwrench");
Item.createItem("Tecwrench", "Tec wrench", {name: "Tec_wrench", meta: 0}, {stack: 1});
IDRegistry.genBlockID("CableDefaultColor");
Block.createBlock("CableDefaultColor", [{name: "Cabo de ernegia default", texture: [["cable_color_default", 0]], inCreative: true}], MachineBlockNotSolid);
IDRegistry.genBlockID("CableRedColor");
Block.createBlock("CableRedColor", [{name: "Cabo de ernegia vermelho", texture: [["cable_color_red", 0]], inCreative: true}], MachineBlockNotSolid);
IDRegistry.genBlockID("CableBlueColor");
Block.createBlock("CableBlueColor", [{name: "Cabo de ernegia azul", texture: [["cable_color_blue", 0]], inCreative: true}], MachineBlockNotSolid);
IDRegistry.genBlockID("CableGreenColor");
Block.createBlock("CableGreenColor", [{name: "Cabo de energia verde", texture: [["cable_color_green", 0]], inCreative: true}], MachineBlockNotSolid);
IDRegistry.genBlockID("CablePurpleColor");
Block.createBlock("CablePurpleColor", [{name: "Cabo de energia roxo", texture: [["cable_color_purple", 0]], inCreative: true}], MachineBlockNotSolid);
IDRegistry.genBlockID("RFCableDefaultColor");
Block.createBlock("RFCableDefaultColor", [{name: "Cabo de ernegia default", texture: [["RF_cable_color_default", 0]], inCreative: true}], MachineBlockNotSolid);
IDRegistry.genBlockID("RFCableRedColor");
Block.createBlock("RFCableRedColor", [{name: "Cabo de ernegia vermelho", texture: [["RF_cable_color_red", 0]], inCreative: true}], MachineBlockNotSolid);
IDRegistry.genBlockID("RFCableBlueColor");
Block.createBlock("RFCableBlueColor", [{name: "Cabo de ernegia azul", texture: [["RF_cable_color_blue", 0]], inCreative: true}], MachineBlockNotSolid);
IDRegistry.genBlockID("RFCableGreenColor");
Block.createBlock("RFCableGreenColor", [{name: "Cabo de energia verde", texture: [["RF_cable_color_green", 0]], inCreative: true}], MachineBlockNotSolid);
IDRegistry.genBlockID("RFCablePurpleColor");
Block.createBlock("RFCablePurpleColor", [{name: "Cabo de energia roxo", texture: [["RF_cable_color_purple", 0]], inCreative: true}], MachineBlockNotSolid);
Item.registerUseFunction("Tecwrench", function (coords, item, block) {
    if (block.id == BlockID.CableDefaultColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.RFCableDefaultColor);
    }
    if (block.id == BlockID.CableRedColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.RFCableRedColor);
    }
    if (block.id == BlockID.CableBlueColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.RFCableBlueColor);
    }
    if (block.id == BlockID.CableGreenColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.RFCableGreenColor);
    }
    if (block.id == BlockID.CablePurpleColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.RFCablePurpleColor);
    }
    if (block.id == BlockID.RFCableDefaultColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.CableDefaultColor);
    }
    if (block.id == BlockID.RFCableRedColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.CableRedColor);
    }
    if (block.id == BlockID.RFCableBlueColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.CableBlueColor);
    }
    if (block.id == BlockID.RFCableGreenColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.CableGreenColor);
    }
    if (block.id == BlockID.RFCablePurpleColor) {
        World.setBlock(coords.x, coords.y, coords.z, BlockID.CablePurpleColor);
    }
});
IDRegistry.genBlockID("PlugCableTEnergistc");
Block.createBlock("PlugCableTEnergistc", [{name: "Plug Energy Cable", texture: [["plug_cable_tec", 0]], inCreative: true}], MachineBlockNotSolid);
Block.registerDropFunction("RFCableDefaultColor", function (coords) {
    return [[BlockID.CableDefaultColor, 1, 0]];
});
Block.registerDropFunction("RFCableRedColor", function (coords) {
    return [[BlockID.CableRedColor, 1, 0]];
});
Block.registerDropFunction("RFCableBlueColor", function (coords) {
    return [[BlockID.CableBlueColor, 1, 0]];
});
Block.registerDropFunction("RFCableGreenColor", function (coords) {
    return [[BlockID.CableGreenColor, 1, 0]];
});
Block.registerDropFunction("RFCablePurpleColor", function (coords) {
    return [[BlockID.CablePurpleColor, 1, 0]];
});
function setupWireRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
    var boxes = [{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]}, {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}, {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}];
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
    for (var i in boxes) {
        var box = boxes[i];
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width / 2, y: 0.5 - width / 2, z: 0.5 - width / 2}, {x: 0.5 + width / 2, y: 0.5 + width / 2, z: 0.5 + width / 2});
}
function registerWireRenderTec(id, width) {
    renderWire = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, renderWire);
    var groupWire1 = ICRender.getGroup("ic-wire");
    var groupWire2 = ICRender.getGroup("rf-wire");
    groupWire1.add(id, -1);
    groupWire2.add(id, -1);
    var boxesWire1 = [{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]}, {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}, {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}];
    var boxesWire2 = [{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]}, {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]}, {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]}, {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]}, {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]}, {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}];
    for (var i in boxesWire2) {
        var box = boxesWire2[i];
        var modelWire2 = BlockRenderer.createModel();
        modelWire2.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
        renderWire.addEntry(modelWire2).asCondition(box.side[0], box.side[1], box.side[2], groupWire2, 0);
    }
    for (var i in boxesWire1) {
        var box = boxesWire1[i];
        var modelWire1 = BlockRenderer.createModel();
        var modelWire1 = BlockRenderer.createModel();
        modelWire1.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
        renderWire.addEntry(modelWire1).asCondition(box.side[0], box.side[1], box.side[2], groupWire1, 0);
    }
    var modelWire = BlockRenderer.createModel();
    modelWire.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    renderWire.addEntry(modelWire);
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width / 2, y: 0.5 - width / 2, z: 0.5 - width / 2}, {x: 0.5 + width / 2, y: 0.5 + width / 2, z: 0.5 + width / 2});
}
EU.registerWire(BlockID.CableDefaultColor);
EU.registerWire(BlockID.CableRedColor);
EU.registerWire(BlockID.CableBlueColor);
EU.registerWire(BlockID.CableGreenColor);
EU.registerWire(BlockID.CablePurpleColor);
RF.registerWire(BlockID.RFCableDefaultColor);
RF.registerWire(BlockID.RFCableRedColor);
RF.registerWire(BlockID.RFCableBlueColor);
RF.registerWire(BlockID.RFCableGreenColor);
RF.registerWire(BlockID.RFCablePurpleColor);
setupWireRender(BlockID.CableGreenColor, 3 / 8, "ic-wire");
setupWireRender(BlockID.CableRedColor, 3 / 8, "ic-wire");
setupWireRender(BlockID.CableDefaultColor, 3 / 8, "ic-wire");
setupWireRender(BlockID.CableBlueColor, 3 / 8, "ic-wire");
setupWireRender(BlockID.CablePurpleColor, 3 / 8, "ic-wire");
registerWireRenderTec(BlockID.PlugCableTEnergistc, 3 / 8);
setupWireRender(BlockID.RFCableGreenColor, 3 / 8, "rf-wire");
setupWireRender(BlockID.RFCableRedColor, 3 / 8, "rf-wire");
setupWireRender(BlockID.RFCableDefaultColor, 3 / 8, "rf-wire");
setupWireRender(BlockID.RFCableBlueColor, 3 / 8, "rf-wire");
setupWireRender(BlockID.RFCablePurpleColor, 3 / 8, "rf-wire");
MachineRegistry.registerPrototype(BlockID.PlugCableTEnergistc, {isStorage: true, getEnergyStorage: function () {
    return 50000;
}, energyTick: function (type, src) {
    this.data.energy += src.storage(Math.min(50000 * 4, this.getEnergyStorage() - this.data.energy), Math.min(50000, this.data.energy));
}});
EU.registerWire(BlockID.PlugCableTEnergistc);
RF.registerWire(BlockID.PlugCableTEnergistc);
ICRender.getGroup("ic-wire").add(BlockID.PlugCableTEnergistc, -1);
ICRender.getGroup("rf-wire").add(BlockID.PlugCableTEnergistc, -1);
IDRegistry.genBlockID("TecBateriaUtraExtrema");
Block.createBlock("TecBateriaUtraExtrema", [{name: "Bateria", texture: [["storage_box_adv_tec", 0], ["storage_box_adv_tec", 0], ["storage_box_adv_tec_side", 0], ["storage_box_adv_tec_side", 0], ["storage_box_adv_tec_side", 0], ["storage_box_adv_tec_side", 0]], inCreative: true}]);
IDRegistry.genBlockID("LoandTextures");
Block.createBlock("LoandTextures", [{name: "Bateria", texture: [["storage_box_adv_tec", 0], ["storage_box_adv_tec_nucleo", 0], ["c_machine", 0], ["storage_box_adv_tec_nucleo", 0], ["storage_box_adv_tec_saida", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.TecBateriaUtraExtrema, "stone", 2, true);
Block.registerDropFunction("TecBateriaUtraExtrema", function (coords, blockID, blockData, level) {
    MachineRegistry.getMachineDrop(coords, blockID, level);
    return [];
});
const BateriaRender = new ICRender.Model();
const BateriaModel = BlockRenderer.createModel();
BateriaModel.addBox(0 / 16, 14 / 16, 0 / 16, 16 / 16, 16 / 16, 16 / 16, "storage_box_adv_tec", 0);
BateriaModel.addBox(0 / 16, 0 / 16, 0 / 16, 16 / 16, 2 / 16, 16 / 16, "storage_box_adv_tec", 0);
BateriaModel.addBox(4 / 16, 12 / 32, 4 / 16, 12 / 16, 24 / 32, 12 / 16, "storage_box_adv_tec_nucleo", 0);
BateriaModel.addBox(5 / 16, 5 / 16, 0 / 16, 11 / 16, 11 / 16, 1 / 16, "storage_box_adv_tec_saida", 0);
BateriaModel.addBox(5 / 16, 5 / 16, 15 / 16, 11 / 16, 11 / 16, 16 / 16, "storage_box_adv_tec_saida", 0);
BateriaModel.addBox(0 / 16, 5 / 16, 5 / 16, 1 / 16, 11 / 16, 11 / 16, "storage_box_adv_tec_saida", 0);
BateriaModel.addBox(15 / 16, 5 / 16, 5 / 16, 16 / 16, 11 / 16, 11 / 16, "storage_box_adv_tec_saida", 0);
BateriaModel.addBox(0 / 16, 2 / 16, 15 / 16, 1 / 16, 14 / 16, 16 / 16, "c_machine", 0);
BateriaModel.addBox(15 / 16, 2 / 16, 15 / 16, 16 / 16, 14 / 16, 16 / 16, "c_machine", 0);
BateriaModel.addBox(15 / 16, 2 / 16, 0 / 16, 16 / 16, 14 / 16, 1 / 16, "c_machine", 0);
BateriaModel.addBox(0 / 16, 2 / 16, 0 / 16, 1 / 16, 14 / 16, 1 / 16, "c_machine", 0);
BateriaRender.addEntry(BateriaModel);
BlockRenderer.setStaticICRender(BlockID.TecBateriaUtraExtrema, 0, BateriaRender);
var ContainerTec = new UI.Container();
var UtraBateriaGUI = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 2000}, background: {color: android.graphics.Color.argb(90, 1, 1, 1)}}, drawing: [{type: "bitmap", x: 650, y: 400, bitmap: "barra_de_energia", scale: 3.1}], elements: {"ernegia_saida": {type: "image", x: 579, y: 397, bitmap: "ernegia_entrada_tec", scale: 0.5}, "ernegia_entrada": {type: "image", x: 508, y: 397, bitmap: "ernegia_saida_tec", scale: 0.5}, "bateria_background": {type: "image", x: 500, y: 220, bitmap: "Storage_Ernegy_Box_Tec_background", scale: 3.3}, "energyScale": {type: "scale", x: 500, y: 220, direction: 1, value: 0.5, bitmap: "Storage_Ernegy_Box_Tec", scale: 3.3}, "textInfo1": {type: "text", x: 570, y: 250, width: 30, height: 20, size: 15, text: "0/", color: android.graphics.Color.rgb(255, 255, 255)}, "textInfo2": {type: "text", x: 570, y: 270, width: 80, height: 20, text: "1000000000000 EU/RF", size: 15, color: android.graphics.Color.rgb(255, 255, 255)}, "textInfo3": {type: "text", x: 517, y: 265, width: 30, height: 20, text: "0%", size: 15}, "slot1": {type: "slot", x: 539, y: 400, isValid: MachineRegistry.isValidEUItem, bitmap: "invSlot_t", size: 40}, "slot2": {type: "slot", x: 466, y: 400, width: 90, height: 90, isValid: MachineRegistry.isValidEUItem, bitmap: "invSlot_t", size: 40}}});
ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
    api.CriarClassicUI.ClassicGUI(UtraBateriaGUI, {invSlot: "invSlot_t", frame: "frame", closeButton: "close_b", closeButton2: "close_b2", text: "Bateria", backgroundBitmap: null, backgroundColor: {a: 255, r: 174, g: 174, b: 174}, textColor: {r: 1, g: 1, b: 1}});
});
Item.registerNameOverrideFunction(BlockID.TecBateriaUtraExtrema, function (item, name) {
    item = Player.getCarriedItem();
    if (item.extra) {
        var energyStored = item.extra.getInt("Eu");
        return name + "\n\xa77" + energyStored + "/" + 1000000000000 + " Eu";
    }
    return name;
});
MachineRegistry.registerPrototype(BlockID.TecBateriaUtraExtrema, {defaultValues: {power_tier: 0}, isStorage: true, getGuiScreen: function () {
    return UtraBateriaGUI;
}, tick: function () {
    var energyStorage = this.getEnergyStorage();
    this.container.setScale("energyScale", this.data.energy / energyStorage);
    this.container.setText("textInfo1", parseInt(this.data.energy) + "/");
    this.container.setText("textInfo2", energyStorage);
    var TRANSFER = 1000000000000;
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slot2"), "Eu", energyStorage - this.data.energy, TRANSFER, 0);
    this.data.energy -= ChargeItemRegistry.addEnergyTo(this.container.getSlot("slot1"), "Eu", this.data.energy, TRANSFER, 0);
    this.container.setText("textInfo3", parseInt(100 * this.data.energy / energyStorage) + "%");
}, getEnergyStorage: function () {
    return 1000000000000;
}, energyTick: function (type, src) {
    var TRANSFER = 1000000000000;
    this.data.energy += src.storage(Math.min(TRANSFER * 4, this.getEnergyStorage() - this.data.energy), Math.min(TRANSFER, this.data.energy));
}, destroyBlock: function (coords, player) {
    var extra;
    if (this.data.energy > 0) {
        extra = new ItemExtraData();
        extra.putInt("Eu", this.data.energy);
    }
    nativeDropItem(coords.x, coords.y, coords.z, 0, BlockID.TecBateriaUtraExtrema, 1, 0, extra);
}});
ToolAPI.registerBlockMaterial(BlockID.TecBateriaUtraExtrema, "wood", 0, true);
EnergyTileRegistry.addEnergyTypeForId(BlockID.TecBateriaUtraExtrema, EU);
EnergyTileRegistry.addEnergyTypeForId(BlockID.TecBateriaUtraExtrema, RF);
EU.registerWire(BlockID.TecBateriaUtraExtrema);
RF.registerWire(BlockID.TecBateriaUtraExtrema);
ICRender.getGroup("ic-wire").add(BlockID.TecBateriaUtraExtrema, -1);
ICRender.getGroup("rf-wire").add(BlockID.TecBateriaUtraExtrema, -1);
Block.registerPlaceFunction("TecBateriaUtraExtrema", function (coords, item, block) {
    Game.prevent();
    var x = coords.relative.x;
    var y = coords.relative.y;
    var z = coords.relative.z;
    block = World.getBlockID(x, y, z);
    if (GenerationUtils.isTransparentBlock(block)) {
        World.setBlock(x, y, z, item.id, 0);
        var tile = World.addTileEntity(x, y, z);
        if (item.extra) {
            tile.data.energy = item.extra.getInt("Eu") + 16;
        }
    }
});
if (TexteBetaItems) {
    IDRegistry.genBlockID("GrinderTecMod");
    Block.createBlockWithRotation("GrinderTecMod", [{name: "Entity Grinder", texture: [["machine_Block_tier_0_G", 1], ["machine_Block_tier_0_G", 1], ["machine_Block_tier_0_G", 1], ["grinder_tec_mod", 0], ["machine_Block_tier_0_G", 1], ["machine_Block_tier_0_G", 1]], inCreative: true}], MachineBlockSolid);
    Callback.addCallback("PreLoaded", function () {
        Recipes.addShaped({id: BlockID.GrinderTecMod, count: 1, data: 0}, ["bab", "cdc", "bab"], ["a", ItemID.GearTecM, 0, "b", ItemID.circultUnic, 0, "c", 276, 0, "d", BlockID.MachineBlockMG, 0]);
    });
    var evilMobs = [EntityType.ZOMBIE, EntityType.CREEPER, EntityType.SKELETON, EntityType.SPIDER, EntityType.ZOMBIE_PIGMAN, EntityType.SLIME, EntityType.ENDERMAN, EntityType.SILVERFISH, EntityType.CAVESPIDER, EntityType.GHAST, EntityType.MAGMACUBE, EntityType.BLAZE, EntityType.ZOMBIE_VILLAGER, EntityType.STRAY, EntityType.HUSK, EntityType.WITHER_SKELETON, EntityType.GUARDIAN, EntityType.ELDER_GUARDIAN, EntityType.WITHER, EntityType.ENDER_DRAGON, EntityType.SHULKER, EntityType.ENDERMITE, EntityType.VINDICATOR, EntityType.EVOCATION_VILLAGER];
    MachineRegistry.registerPrototype(BlockID.GrinderTecMod, {tick: function () {
        var energyStorage = this.getEnergyStorage();
        for (let i in evilMobs) {
            let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], 5);
            if (ent && this.data.energy > 9) {
                Entity.damageEntity(ent, 400);
                this.data.energy -= 10;
            }
        }
    }, getEnergyStorage: function () {
        return 200000;
    }, energyTick: MachineRegistry.basicEnergyReceiveFunc});
}
IDRegistry.genBlockID("tecIndustrialFurnace");
Block.createBlockWithRotation("tecIndustrialFurnace", [{name: "Fornalha industrial", texture: [["machine_Block_tier_0_G", 1], ["machine_Block_tier_0_G", 1], ["machine_Block_tier_0_G", 0], ["industrial_furnece_tec_front", 0], ["machine_Block_tier_0_G", 0], ["machine_Block_tier_0_G", 0]], inCreative: true}], MachineBlockSolid);
Block.registerDropFunction("tecIndustrialFurnace", function (coords) {
    return [[BlockID.tecIndustrialFurnace, 1, 0]];
    World.destroyTileEntityAtCoords(coords.x, coords.y, coords.z);
});
var TecFurnaceGUI = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 1100}, background: {color: android.graphics.Color.argb(90, 1, 1, 1)}}, params: {selection: "selection_wood2"}, drawing: [], elements: {"slotSource": {type: "slot", x: 450, y: 250, size: 40, bitmap: "invSlot_t"}, "Fslot_saida": {type: "slot", x: 560, y: 250, size: 40, bitmap: "invSlot_t"}, "FslotTecModUpgrade1": {type: "slot", x: 370, y: 172, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "FslotTecModUpgrade2": {type: "slot", x: 370, y: 210, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "FslotTecModUpgrade3": {type: "slot", x: 370, y: 248, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "FslotTecModUpgrade4": {type: "slot", x: 370, y: 286, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "Fslots1": {type: "slot", x: 700, y: 380, size: 38, bitmap: "invSlot_t"}, "Fslots2": {type: "slot", x: 700 + 38, y: 380, size: 38, bitmap: "invSlot_t"}, "Fslots3": {type: "slot", x: 700, y: 380 + 38, size: 38, bitmap: "invSlot_t"}, "Fslots4": {type: "slot", x: 700 + 38, y: 380 + 38, size: 38, bitmap: "invSlot_t"}, "Fbarra_de_ernegia": {type: "scale", x: 470, y: 340, direction: 0, value: 0.5, bitmap: "tec_ernegy_storage_machine", scale: 1}, "Fbarra_de_prosseco": {type: "scale", x: 500, y: 255, direction: 0, value: 0.5, bitmap: "bar_progrese", scale: 2}}});
ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
    api.CriarClassicUI.ClassicGUI(TecFurnaceGUI, {invSlot: "invSlot_t", frame: "frame", closeButton: "close_b", closeButton2: "close_b2", text: "Fornalha industrial", backgroundBitmap: null, backgroundColor: {a: 255, r: 174, g: 174, b: 174}, textColor: {r: 1, g: 1, b: 1}});
});
TecFurnaceGUI.content.drawing.push({type: "bitmap", x: 470, y: 340, bitmap: "tec_ernegy_storage_machine_background"}, {type: "bitmap", x: 500, y: 255, bitmap: "bar_progrese_background", scale: 2});
MachineRegistry.registerPrototype(BlockID.tecIndustrialFurnace, {defaultValues: {power_tier: 0, energy_storage: 15000, energy_consumption: 10, work_time: 1, progress: 0, isActive: false}, getGuiScreen: function () {
    return TecFurnaceGUI;
}, getTransportSlots: function () {
    return {input: ["slotSource"], output: ["Fslot_saida", "Fslots1", "Fslots2", "Fslots3", "Fslots4"]};
}, checkUp: function (fs1, fs0, double) {
    double = double ? 1 : 1;
    return !fs1.id || fs1.id == fs0.id && fs1.data == fs0.data && fs1.count <= 64 - double;
}, shiftItem: function (fs0, fs1) {
    fs0.count && this.checkUp(fs1, fs0) && (fs1.id = fs0.id, fs1.data = fs0.data, fs1.count++, fs0.count--) & this.container.validateSlot("Fslot_saida") & this.container.validateSlot("Fslots3");
}, setDefaultValues: function () {
    this.data.energy_storage = this.defaultValues.energy_storage;
    this.data.energy_consumption = this.defaultValues.energy_consumption;
    this.data.work_time = this.defaultValues.work_time;
}, dumpItem: function (s) {
    s.count && (s.id = s.count = s.data = 0);
}, tick: function () {
    this.setDefaultValues();
    UpgradeAPI.executeUpgrades(this);
    var fs1 = this.container.getSlot("Fslots1");
    var fs2 = this.container.getSlot("Fslots2");
    var fs3 = this.container.getSlot("Fslots3");
    var fs4 = this.container.getSlot("Fslots4");
    var sourceSlot = this.container.getSlot("slotSource");
    var resultSlot = this.container.getSlot("Fslot_saida");
    var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
    if (result && (resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0)) {
        if (this.data.energy >= this.data.energy_consumption) {
            this.data.energy -= this.data.energy_consumption;
            this.data.progress += 1 / this.data.work_time;
            this.activate();
        } else {
            this.deactivate();
        }
        if (this.data.progress >= 1) {
            sourceSlot.count--;
            resultSlot.id = result.id;
            resultSlot.data = result.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
        this.deactivate();
    }
    var energyStorage = this.getEnergyStorage();
    var tier = this.data.power_tier;
    this.data.energy = Math.min(this.data.energy, energyStorage);
    this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", energyStorage - this.data.energy, transferByTier[tier], tier);
    this.container.setScale("Fbarra_de_prosseco", this.data.progress);
    this.container.setScale("Fbarra_de_ernegia", this.data.energy / energyStorage);
    this.shiftItem(resultSlot, fs1);
    this.shiftItem(resultSlot, fs2);
    this.shiftItem(resultSlot, fs3);
    this.shiftItem(fs3, fs4);
}, getEnergyStorage: function () {
    return this.data.energy_storage;
}, init: MachineRegistry.initModel, activate: MachineRegistry.activateMachine, deactivate: MachineRegistry.deactivateMachine, destroy: this.deactivate, energyTick: MachineRegistry.basicEnergyReceiveFunc});
IDRegistry.genItemID("BaterryPotableTier2Tec");
Item.createItem("BaterryPotableTier2Tec", "Bateria Tier 2", {name: "tec_battery_potable_tier2", meta: 0}, {stack: 1});
ChargeItemRegistry.registerItem(ItemID.BaterryPotableTier2Tec, "Eu", 400000000, 0, true);
Item.registerNameOverrideFunction(ItemID.BaterryPotableTier2Tec, ENERGY_ITEM_NAME);
Item.registerIconOverrideFunction(ItemID.BaterryPotableTier2Tec, function (item, name) {
    var energyStorage = Item.getMaxDamage(item.id) - 1;
    var energyStored = energyStorage - item.data + 1;
    return {name: "tec_battery_potable_tier2", meta: Math.round(energyStored / energyStorage * 4)};
});
IDRegistry.genItemID("TecEnergyStorageUp");
Item.createItem("TecEnergyStorageUp", "Erengy Storage Upgrade", {name: "tec_ergenistc_upground", meta: 0}, {stack: 64});
UpgradeAPI.registerUpgrade(ItemID.TecEnergyStorageUp, function (item, machine, container, data, coords) {
    data.energy_storage += 200000 * item.count;
});
IDRegistry.genItemID("TecTimeMachineUp");
Item.createItem("TecTimeMachineUp", "Machine Time Upgrade", {name: "tec_time_upgrade", meta: 0}, {stack: 64});
UpgradeAPI.registerUpgrade(ItemID.TecTimeMachineUp, function (item, machine, container, data, coords) {
    data.work_time -= 10 * item.count;
});
IDRegistry.genItemID("TecTimeMachineDown");
Item.createItem("TecTimeMachineDown", "Machine Time Downgrade", {name: "tec_time_downgrade", meta: 0}, {stack: 64});
UpgradeAPI.registerUpgrade(ItemID.TecTimeMachineDown, function (item, machine, container, data, coords) {
    data.work_time += 12 * item.count;
});
IDRegistry.genItemID("TecEjectorUp");
Item.createItem("TecEjectorUp", "Ejetor Upgrade", {name: "tec_ejector_upgrade", meta: 0}, {stack: 64});
Item.registerIconOverrideFunction(ItemID.TecEjectorUp, function (item, name) {
    return {name: "tec_ejector_upgrade", meta: item.data};
});
IDRegistry.genItemID("TecInjectorUp");
Item.createItem("TecInjectorUp", "Injetor Upgrade", {name: "tec_injector_upgrade", meta: 0}, {stack: 64});
Item.registerIconOverrideFunction(ItemID.TecInjectorUp, function (item, name) {
    return {name: "tec_injector_upgrade", meta: item.data};
});
var directionByData = {1: "down", 2: "up", 3: "north", 4: "south", 5: "west", 6: "east"};
UpgradeAPI.registerUpgrade(ItemID.TecEjectorUp, function (item, machine, container, data, coords) {
    var items = [];
    var slots = machine.getTransportSlots().output;
    for (var i in slots) {
        var slot = container.getSlot(slots[i]);
        if (slot.id) {
            items.push(slot);
        }
    }
    var Fslots = machine.getTransportSlots().output;
    for (var i in slots) {
        var Fslot = container.getSlot(Fslots[i]);
        if (Fslot.id) {
            items.push(Fslot);
        }
    }
    if (items.length) {
        var containers = UpgradeAPI.findNearestContainers(coords, directionByData[item.data]);
        addItemsToContainers(items, containers, machine);
    }
});
UpgradeAPI.registerUpgrade(ItemID.TecInjectorUp, function (item, machine, container, data, coords) {
    if (World.getThreadTime() % 20 == 0) {
        var items = [];
        var slots = machine.getTransportSlots().input;
        for (var i in slots) {
            var slot = container.getSlot(slots[i]);
            if (slot.count < Item.getMaxStack(slot.id)) {
                items.push(slot);
            }
        }
        if (items.length) {
            var containers = UpgradeAPI.findNearestContainers(coords, directionByData[item.data]);
            getItemsFrom(items, containers, machine);
        }
    }
});
Item.registerUseFunction("TecInjectorUp", function (coords, item, block) {
    if (item.data == 0) {
        Player.setCarriedItem(ItemID.TecInjectorUp, item.count, coords.side + 1);
    } else {
        Player.setCarriedItem(ItemID.TecInjectorUp, item.count);
    }
});
Item.registerUseFunction("TecEjectorUp", function (coords, item, block) {
    if (item.data == 0) {
        Player.setCarriedItem(ItemID.TecEjectorUp, item.count, coords.side + 1);
    } else {
        Player.setCarriedItem(ItemID.TecEjectorUp, item.count);
    }
});
IDRegistry.genBlockID("tecCircultBlock");
Block.createBlock("tecCircultBlock", [{name: "Bloco de circuito", texture: [["tec_circult_block_eletric", 0]], inCreative: true}], SOLAR_PANEL_BLOCK);
IDRegistry.genItemID("TecTerminalItems");
Item.createItem("TecTerminalItems", "Terminal", {name: "tec_terminal", meta: 0}, {stack: 1});
ModAPI.addAPICallback("TecMod-Create API", function (api) {
    api.Terminal.register({ItemID: "TecTerminalItems", id: ItemID.TecTerminalItems, slots: 460, height: 1860});
});
IDRegistry.genItemID("tecIronCoreG");
Item.createItem("tecIronCoreG", "Iron Core", {name: "tec_core_iron", meta: 0}, {stack: 64});
IDRegistry.genItemID("tecGoldCoreG");
Item.createItem("tecGoldCoreG", "Gold Core", {name: "tec_core_gold", meta: 0}, {stack: 64});
IDRegistry.genItemID("tecRedCoreG");
Item.createItem("tecRedCoreG", "Redstone Core", {name: "tec_core_redstone", meta: 0}, {stack: 64});
IDRegistry.genItemID("tecEmCoreG");
Item.createItem("tecEmCoreG", "Emerald Core", {name: "tec_core_emerald", meta: 0}, {stack: 64});
IDRegistry.genItemID("tecLaCoreG");
Item.createItem("tecLaCoreG", "Lapis Core", {name: "tec_core_lapis", meta: 0}, {stack: 64});
IDRegistry.genItemID("tecCoreG");
Item.createItem("tecCoreG", "Core", {name: "tec_core", meta: 0}, {stack: 64});
IDRegistry.genItemID("tecCoreDG");
Item.createItem("tecCoreDG", "Dual Core", {name: "tec_dual_core", meta: 0}, {stack: 64});
IDRegistry.genItemID("tecCoreSG");
Item.createItem("tecCoreSG", "Supreme Core", {name: "tec_s_core", meta: 0}, {stack: 64});
IDRegistry.genBlockID("TecCraftTable");
Block.createBlockWithRotation("TecCraftTable", [{name: "Assembler Station", texture: [["machine_Block_tier_0_G", 1], ["crafttable_eletric_tec", 0], ["machine_Block_tier_0_G", 0], ["machine_Block_tier_0_G", 0], ["crafttable_eletric_tec_side", 0], ["crafttable_eletric_tec_side", 0]], inCreative: true}], MachineBlockSolid);
Block.registerDropFunction("tecIndustrialFurnace", function (coords) {
    return [[BlockID.tecIndustrialFurnace, 1, 0]];
    World.destroyTileEntityAtCoords(coords.x, coords.y, coords.z);
});
var CraftterGUI = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 1000}}, params: {}, drawing: [], elements: {"slot0": {type: "slot", x: 500, y: 236, size: 39, bitmap: "invSlot_t"}, "slot1": {type: "slot", x: 539, y: 236, size: 39, bitmap: "invSlot_t"}, "slot2": {type: "slot", x: 579, y: 236, size: 39, bitmap: "invSlot_t"}, "slot3": {type: "slot", x: 500, y: 275, size: 39, bitmap: "invSlot_t"}, "slot4": {type: "slot", x: 539, y: 275, size: 39, bitmap: "invSlot_t"}, "slot5": {type: "slot", x: 579, y: 275, size: 39, bitmap: "invSlot_t"}, "slot6": {type: "slot", x: 500, y: 314, size: 39, bitmap: "invSlot_t"}, "slot7": {type: "slot", x: 539, y: 314, size: 39, bitmap: "invSlot_t"}, "slot8": {type: "slot", x: 579, y: 314, size: 39, bitmap: "invSlot_t"}, "slotInput": {type: "slot", x: 680, y: 236, size: 39, bitmap: "invSlot_t", clicker: {onClick: function (position, container, tileEntity) {
    return;
}, onLongClick: function (position, container, tileEntity) {
    this.onClick(position, container, tileEntity);
}}}, "slotResult": {type: "slot", x: 680, y: 296, size: 39, bitmap: "invSlot_t"}, "FslotTecModUpgrade1": {type: "slot", x: 370, y: 172, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "FslotTecModUpgrade2": {type: "slot", x: 370, y: 210, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "FslotTecModUpgrade3": {type: "slot", x: 370, y: 248, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "FslotTecModUpgrade4": {type: "slot", x: 370, y: 286, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "progressScale": {type: "scale", x: 625, y: 278, direction: 0, value: 0.5, scale: 1.9, bitmap: "pogress_wood"}, "energyScale": {type: "scale", x: 740, y: 220, direction: 1, value: 0.5, scale: 2, bitmap: "barra_de_ernegia_de_maquina_2"}}});
ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
    api.CriarClassicUI.ClassicGUI(CraftterGUI, {invSlot: "invSlot_t", frame: "frame", closeButton: "close_b", closeButton2: "close_b2", text: "CraftStation", background: null, backgroundColor: {a: 255, r: 174, g: 174, b: 174}, textColor: {r: 1, g: 1, b: 1}});
});
let i = 1;
for (let x = 9; x--; ) {
    for (let y = 1; y--; ) {
        CraftterGUI.content.elements["slotI" + i++] = {type: "slot", x: x * 38 + 400, y: y * 38 + 400, size: 38, bitmap: "invSlot_t"};
    }
}
CraftterGUI.content.drawing.push({type: "bitmap", x: 685, y: 276, bitmap: "craftter_tec_bar_recipe", scale: 2}, {type: "bitmap", x: 625, y: 278, bitmap: "bar_progrese_background", scale: 1.9}, {type: "bitmap", x: 740, y: 220, scale: 2, bitmap: "barra_de_ernegia_de_maquina_background1"});
MachineRegistry.machineRegisterErnegytic.registerEnergyTile(BlockID.TecCraftTable, {defaultValues: {time: 60, progress: 0, work_time: 30, energy_consumption: 5, energy_storage: 50000}, getGuiScreen: function () {
    return CraftterGUI;
}, getTransportSlots: function () {
    return {input: ["slotI1", "slotI2"], output: ["slotResult"]};
}, setDefaultValues: function () {
    this.data.energy_storage = this.defaultValues.energy_storage;
    this.data.energy_consumption = this.defaultValues.energy_consumption;
    this.data.work_time = this.defaultValues.work_time;
}, tick: function () {
    this.getTransportSlots();
    this.setDefaultValues();
    UpgradeAPI.executeUpgrades(this);
    if (!this.data.progress) {
        this.data.progress = 0;
    }
    var res = Recipes.getRecipeResult(this.container);
    if (res) {
        this.container.setSlot("slotInput", res.id, res.count, res.data);
    } else {
        this.container.setSlot("slotInput", 0, 0, 0);
    }
    this.container.setScale("progressScale", this.data.progress / this.data.work_time);
    this.container.setScale("energyScale", this.data.energy / 10000);
    var resultSlot = this.container.getSlot("slotResult");
    var craft = this.canCraft();
    if (craft && res && this.data.energy >= 5 && ((res.id == resultSlot.id && res.data == resultSlot.data && resultSlot.count < 64 - res.count) || resultSlot.id == 0)) {
        this.data.energy -= this.data.energy_consumption;
        this.data.progress++;
        if (this.data.progress >= this.data.work_time) {
            resultSlot.id = res.id;
            resultSlot.data = res.data;
            resultSlot.count += res.count;
            for (var i in craft) {
                var it = craft[i];
                MachineRegistry.machineContainer.giveItemFromContainer(this.container, {id: it.id, data: it.data, count: it.count}, 11, "I");
            }
            this.container.validateAll();
            this.data.progress = 0;
        }
    } else {
        this.data.progress = 0;
    }
}, canCraft: function () {
    var ingredients = {};
    for (var i = 0; i < 9; i++) {
        var slot = this.container.getSlot("slot" + i);
        if (slot.id != 0) {
            ingredients[slot.id + ":" + slot.data] = {id: slot.id, data: slot.data, count: this.getNativeCount(slot.id, slot.data)};
        }
        if (slot.id != 0 && !MachineRegistry.machineContainer.isItemInContainer(this.container, {id: slot.id, data: slot.data, count: this.getNativeCount(slot.id, slot.data)}, 11, "I")) {
            return false;
        }
    }
    return ingredients;
}, getEnergyStorage: function () {
    return this.data.energy_storage;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc, activate: MachineRegistry.activateMachine, deactivate: MachineRegistry.deactivateMachine, destroy: this.deactivate, energyTick: MachineRegistry.basicEnergyReceiveFunc, getNativeCount: function (id, data) {
    var count = 0;
    for (var i = 0; i < 9; i++) {
        var slot = this.container.getSlot("slot" + i);
        if (slot.id == id && slot.data == data) {
            count++;
        }
    }
    return count;
}}, {item: true});
IDRegistry.genBlockID("TankTec");
Block.createBlockWithRotation("TankTec", [{name: "Tank", texture: [["machine_Block_tier_0_G", 0], ["machine_Block_tier_0_G", 0], ["machine_Block_tier_0_G", 0], ["tec_tank_storage", 0], ["machine_Block_tier_0_G", 0], ["machine_Block_tier_0_G", 0]], inCreative: true}], MachineBlockSolid);
var LiquidTank = new UI.StandartWindow({standart: {inventory: {standart: true, padding: 1000}}, params: {}, drawing: [], elements: {"WeterScale": {type: "scale", x: 470, y: 200, direction: 1, value: 0.5, bitmap: "tec_liquid_bar_weter", overlay: "tec_liquid_bar_overlay", scale: 2}, "slot1": {type: "slot", x: 539, y: 400, bitmap: "invSlot_t", size: 40}, "slot2": {type: "slot", x: 466, y: 400, bitmap: "invSlot_t", size: 40}, "slotTecModUpgrade1": {type: "slot", x: 370, y: 172, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "FslotTecModUpgrade2": {type: "slot", x: 370, y: 210, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "FslotTecModUpgrade3": {type: "slot", x: 370, y: 248, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}, "FslotTecModUpgrade4": {type: "slot", x: 370, y: 286, size: 38, bitmap: "invSlot_t", isValid: UpgradeAPI.isUpgrade}}});
ModAPI.addAPICallback("TecMod-ClassicGuiAPI", function (api) {
    api.CriarClassicUI.ClassicGUI(LiquidTank, {text: "Tank"});
});
LiquidTank.content.drawing.push({type: "bitmap", x: 470, y: 200, scale: 2, bitmap: "tec_liquid_bar"}, {type: "bitmap", x: 508, y: 397, bitmap: "ernegia_saida_tec", scale: 0.5}, {type: "bitmap", x: 579, y: 397, bitmap: "ernegia_entrada_tec", scale: 0.5});
ICRender.getGroup("liquid-pipe").add(BlockID.TankTec, -1);
MachineRegistry.registerPrototype(BlockID.TankTec, {getGuiScreen: function () {
    return LiquidTank;
}, getTransportSlots: function () {
    return {input: ["slot2"], output: ["slot1"]};
}, init: function () {
    this.liquidStorage.setLimit(null, 30000);
}, tick: function () {
    UpgradeAPI.executeUpgrades(this);
    var storage = this.liquidStorage;
    var liquid = storage.getLiquidStored();
    var slot1 = this.container.getSlot("slot2");
    var slot2 = this.container.getSlot("slot1");
    var empty = LiquidRegistry.getEmptyItem(slot1.id, slot1.data);
    if (empty && (!liquid || empty.liquid == liquid)) {
        if (storage.getAmount(empty.liquid) <= 29999 && (slot2.id == empty.id && slot2.data == empty.data && slot2.count < Item.getMaxStack(empty.id) || slot2.id == 0)) {
            storage.addLiquid(empty.liquid, 1);
            slot1.count--;
            slot2.id = empty.id;
            slot2.data = empty.data;
            slot2.count++;
            this.container.validateAll();
        }
    }
    if (liquid) {
        var full = LiquidRegistry.getFullItem(slot1.id, slot1.data, liquid);
        if (full && storage.getAmount(liquid) >= 1 && (slot2.id == full.id && slot2.data == full.data && slot2.count < Item.getMaxStack(full.id, full.data) || slot2.id == 0)) {
            storage.getLiquid(liquid, 1);
            slot1.count--;
            slot2.id = full.id;
            slot2.data = full.data;
            slot2.count++;
            this.container.validateAll();
        }
    }
    storage.updateUiScale("WeterScale", liquid);
}}, true);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({id: ItemID.circultUnic, count: 1, data: 0}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 264, 0, "c", 331, 0]);
    Recipes.addShaped({id: ItemID.circurtUnicGold, count: 1, data: 0}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 266, 0, "c", 331, 0]);
    Recipes.addShaped({id: ItemID.circurtUnicRedStone, count: 1, data: 0}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 331, 0, "c", 266, 0]);
    Recipes.addShaped({id: ItemID.circurtUnicEmerald, count: 1, data: 0}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 388, 0, "c", 331, 0]);
    Recipes.addShaped({id: ItemID.circurtUnicIron, count: 1, data: 0}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 42, 0, "c", 331, 0]);
    Recipes.addShaped({id: ItemID.circurtUnicLapis, count: 1, data: 0}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 351, 4, "c", 331, 0]);
    Recipes.addShaped({id: BlockID.tecCircultBlock, count: 1, data: 0}, ["abc", "def", "ggg"], ["a", ItemID.circultUnic, 0, "b", ItemID.circurtUnicGold, 0, "c", ItemID.circurtUnicRedStone, 0, "d", ItemID.circurtUnicEmerald, 0, "e", ItemID.circurtUnicIron, 0, "f", ItemID.circurtUnicLapis, 0, "g", BlockID.MachineBlockMG, 0]);
    Recipes.addShaped({id: BlockID.solarPanellevel1, count: 1, data: 0}, ["aaa", "bbb", "ccc"], ["a", 20, 0, "b", 351, 4, "c", ItemID.circultUnic, 0]);
    Recipes.addShaped({id: BlockID.solarPanellevel2, count: 1, data: 0}, ["aaa", "bdb", "ccc"], ["a", 20, 0, "b", BlockID.solarPanellevel1, 0, "c", ItemID.circultUnic, 0, "d", 41, 0]);
    Recipes.addShaped({id: BlockID.solarPanellevel3, count: 1, data: 0}, ["aaa", "bdb", "ccc"], ["a", 20, 0, "b", BlockID.solarPanellevel2, 0, "c", ItemID.circultUnic, 0, "d", 57, 0]);
    Recipes.addShaped({id: BlockID.solarPanellevel4, count: 1, data: 0}, ["aaa", "bdb", "ccc"], ["a", 20, 0, "b", BlockID.solarPanellevel3, 0, "c", ItemID.circultUnic, 0, "d", 133, 0]);
    Recipes.addShaped({id: BlockID.solarPanellevel5, count: 1, data: 0}, ["aaa", "bdb", "ccc"], ["a", 20, 0, "b", BlockID.solarPanellevel4, 0, "c", ItemID.circultUnic, 0, "d", 49, 0]);
    Recipes.addShaped({id: BlockID.solarPanellevel6, count: 1, data: 0}, ["aaa", "bdb", "ccc"], ["a", 20, 0, "b", BlockID.solarPanellevel5, 0, "c", ItemID.GearAndvancendTecM, 0, "d", BlockID.MachineBlockMG, 0]);
    Recipes.addShaped({id: BlockID.solarPanellevel7, count: 1, data: 0}, ["aaa", "bdb", "cec"], ["a", 20, 0, "b", BlockID.solarPanellevel6, 0, "c", ItemID.GearAndvancendTecM, 0, "d", BlockID.MachineBlockMG, 0, "e", BlockID.TecenergyConverter, 0]);
    Recipes.addShaped({id: BlockID.CableDefaultColor, count: 32, data: 0}, ["ada", "bbb", "aca"], ["a", 35, 0, "b", 265, 0, "c", 351, 15, "d", ItemID.circultUnic, 0]);
    Recipes.addShaped({id: BlockID.CableGreenColor, count: 32, data: 0}, ["ada", "bbb", "aca"], ["a", 35, 0, "b", 265, 0, "c", 351, 10, "d", ItemID.circultUnic, 0]);
    Recipes.addShaped({id: BlockID.CableRedColor, count: 32, data: 0}, ["ada", "bbb", "aca"], ["a", 35, 0, "b", 265, 0, "c", 351, 1, "d", ItemID.circultUnic, 0]);
    Recipes.addShaped({id: BlockID.CablePurpleColor, count: 32, data: 0}, ["ada", "bbb", "aca"], ["a", 35, 0, "b", 265, 0, "c", 351, 5, "d", ItemID.circultUnic, 0]);
    Recipes.addShaped({id: BlockID.CableBlueColor, count: 32, data: 0}, ["ada", "bbb", "aca"], ["a", 35, 0, "b", 265, 0, "c", 351, 4, "d", ItemID.circultUnic, 0]);
    Recipes.addShaped({id: ItemID.GearTecM, count: 1, data: 0}, ["oao", "aba", "oao"], ["a", ItemID.circultUnic, 0, "b", 42, 0]);
    Recipes.addShaped({id: ItemID.GearAndvancendTecM, count: 1, data: 0}, ["oao", "aba", "oao"], ["a", ItemID.GearTecM, 0, "b", BlockID.MachineBlockMG, 0]);
    Recipes.addShaped({id: BlockID.MachineBlockMG, count: 1, data: 0}, ["aaa", "aba", "aaa"], ["a", 42, 0, "b", ItemID.GearTecM, 0]);
    Recipes.addShaped({id: BlockID.TecenergyConverter, count: 1, data: 0}, ["aaa", "bcb", "aaa"], ["a", BlockID.MachineBlockMG, 0, "b", BlockID.storageExtraBox, 0, "c", ItemID.GearAndvancendTecM, 0]);
    Recipes.addShaped({id: ItemID.Tecwrench, count: 1, data: 0}, ["aoa", "aba", "obo"], ["a", ItemID.circultUnic, 0, "b", 265, 0]);
    Recipes.addShaped({id: ItemID.TecBaterryPotable, count: 1, data: Item.getMaxDamage(ItemID.TecBaterryPotable)}, ["oao", "obo", "oao"], ["a", ItemID.GearTecM, 0, "b", BlockID.storageExtraBox, 0]);
    Recipes.addShaped({id: ItemID.tecCoreG, count: 1, data: 0}, ["aba", "bcb", "aba"], ["a", 264, 0, "b", ItemID.GearAndvancendTecM, 0, "c", BlockID.MachineBlockMG, 0]);
    Recipes.addShaped({id: BlockID.MachineBlockTier2MG, count: 1, data: 0}, ["oao", "aba", "oao"], ["a", ItemID.tecCoreG, 0, "b", BlockID.MachineBlockMG, 0]);
    Recipes.addShaped({id: BlockID.TecBateriaUtraExtrema, count: 1, data: 0}, ["aba", "cdc", "ddd"], ["a", ItemID.tecCoreG, 0, "b", BlockID.TecenergyConverter, 0, "c", BlockID.storageExtraBox, 0, "d", BlockID.MachineBlockTier2MG, 0]);
    Recipes.addShaped({id: BlockID.tecIndustrialFurnace, count: 1, data: 0}, ["bab", "bcb", "bbb"], ["a", ItemID.tecCoreG, 0, "b", BlockID.MachineBlockMG, 0, "c", 61, 0]);
    Recipes.addShaped({id: BlockID.minerduplicatorTier2, count: 1, data: 0}, ["ade", "bcb", "fgh"], ["a", ItemID.tecCoreG, 0, "d", ItemID.tecIronCoreG, 0, "e", ItemID.tecGoldCoreG, 0, "f", ItemID.tecEmCoreG, 0, "g", ItemID.tecRedCoreG, 0, "h", ItemID.tecLaCoreG, 0, "b", BlockID.MachineBlockMG, 0, "c", BlockID.minerduplicator, 0]);
    Recipes.addShaped({id: ItemID.TecEjectorUp, count: 1, data: 0}, ["aba"], ["a", ItemID.circultUnic, 0, "b", 33, 0]);
    Recipes.addShaped({id: ItemID.TecInjectorUp, count: 1, data: 0}, ["aba", "ccc"], ["a", ItemID.circultUnic, 0, "b", 33, 0, "c", ItemID.circurtUnicRedStone, 0]);
    Recipes.addShaped({id: ItemID.tecIronCoreG, count: 1, data: 0}, ["aaa", "bcb", "aaa"], ["a", ItemID.circurtUnicIron, 0, "b", 42, 0, "c", ItemID.tecCoreG, 0]);
    Recipes.addShaped({id: ItemID.tecGoldCoreG, count: 1, data: 0}, ["aaa", "bcb", "aaa"], ["a", ItemID.circurtUnicGold, 0, "b", 41, 0, "c", ItemID.tecCoreG, 0]);
    Recipes.addShaped({id: ItemID.tecEmCoreG, count: 1, data: 0}, ["aaa", "bcb", "aaa"], ["a", ItemID.circurtUnicEmerald, 0, "b", 133, 0, "c", ItemID.tecCoreG, 0]);
    Recipes.addShaped({id: ItemID.tecRedCoreG, count: 1, data: 0}, ["aaa", "bcb", "aaa"], ["a", ItemID.circurtUnicRedStone, 0, "b", 152, 0, "c", ItemID.tecCoreG, 0]);
    Recipes.addShaped({id: ItemID.tecLaCoreG, count: 1, data: 0}, ["aaa", "bcb", "aaa"], ["a", ItemID.circurtUnicLapis, 0, "b", 22, 0, "c", ItemID.tecCoreG, 0]);
    Recipes.addShaped({id: ItemID.TecTerminalItems, count: 1, data: 0}, ["aba", "aca", "ada"], ["a", ItemID.circultUnic, 0, "b", 20, 0, "c", ItemID.tecCoreG, 0, "d", 54, 0]);
    Recipes.addShaped({id: BlockID.TecCraftTable, count: 1, data: 0}, ["aca", "aba", "aca"], ["a", ItemID.circultUnic, 0, "b", 58, 0, "c", ItemID.tecCoreG, 0]);
    Recipes.addShaped({id: ItemID.tecCoreDG, count: 1, data: 0}, ["xax"], ["a", ItemID.GearAndvancendTecM, 0, "x", ItemID.tecCoreG, 0]);
    Recipes.addShaped({id: ItemID.tecCoreSG, count: 1, data: 0}, ["xax", "axa", "xax"], ["a", ItemID.tecCoreDG, 0, "x", BlockID.MachineBlockTier2MG, 0]);
    Recipes.addShaped({id: ItemID.solarPanelLevelSupermeTecItn, count: 1, data: 0}, ["ooo", "xax", "bbb"], ["a", BlockID.solarPanellevel7, 0, "b", BlockID.MachineBlockMG, 0, "x", ItemID.tecCoreDG, 0]);
});
ChargeItemRegistry.registerItem(ItemID.helmetTecAdv, "Eu", 5000, 0, true);
ChargeItemRegistry.registerItem(ItemID.chestplateTecAdv, "Eu", 5000, 0, true);
ChargeItemRegistry.registerItem(ItemID.leggingsTecAdv, "Eu", 5000, 0, true);
ChargeItemRegistry.registerItem(ItemID.bootsTecAdv, "Eu", 5000, 0, true);
Item.registerNameOverrideFunction(ItemID.helmetTecAdv, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.chestplateTecAdv, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.leggingsTecAdv, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.bootsTecAdv, ENERGY_ITEM_NAME);
ChargeItemRegistry.registerItem(ItemID.helmetTecLgd, "Eu", 10000, 0, true);
ChargeItemRegistry.registerItem(ItemID.chestplateTecLgd, "Eu", 10000, 0, true);
ChargeItemRegistry.registerItem(ItemID.leggingsTecLgd, "Eu", 10000, 0, true);
ChargeItemRegistry.registerItem(ItemID.bootsTecLgd, "Eu", 10000, 0, true);
Item.registerNameOverrideFunction(ItemID.helmetTecLgd, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.chestplateTecLgd, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.leggingsTecLgd, ENERGY_ITEM_NAME);
Item.registerNameOverrideFunction(ItemID.bootsTecLgd, ENERGY_ITEM_NAME);

