LIBRARY({name: "StorageInterface", version: 12, shared: true, api: "CoreEngine"});
var LIQUID_STORAGE_MAX_LIMIT = 99999999;
var NativeContainerInterface = (function () {
    function NativeContainerInterface(container) {
        this.isNativeContainer = true;
        this.container = container;
    }
    NativeContainerInterface.prototype.getSlot = function (index) {
        return this.container.getSlot(index);
    };
    NativeContainerInterface.prototype.setSlot = function (index, id, count, data, extra) {
        if (extra === void 0) {
            extra = null;
        }
        this.container.setSlot(index, id, count, data, extra);
    };
    NativeContainerInterface.prototype.getContainerSlots = function () {
        var slots = [];
        var size = this.container.getSize();
        for (var i = 0; i < size; i++) {
            slots.push(i);
        }
        return slots;
    };
    NativeContainerInterface.prototype.getInputSlots = function (side) {
        var type = this.container.getType();
        switch (type) {
          case 1:
          case 38:
          case 39:
            return [(side == 1) ? 0 : 1];
          case 8:
            return [(side == 1) ? 0 : 4];
          default:
            return this.getContainerSlots();
        }
    };
    NativeContainerInterface.prototype.getReceivingItemCount = function (item, side) {
        var slots = this.getInputSlots(side);
        var count = 0;
        for (var _i = 0, slots_1 = slots; _i < slots_1.length; _i++) {
            var name = slots_1[_i];
            var slot = this.getSlot(name);
            if (slot.id == 0 || slot.id == item.id && slot.data == item.data) {
                count += Item.getMaxStack(item.id) - slot.count;
                if (count >= item.count) {
                    break;
                }
            }
        }
        return Math.min(item.count, count);
    };
    NativeContainerInterface.prototype.addItemToSlot = function (index, item, maxCount) {
        var slot = this.getSlot(index);
        var added = StorageInterface.addItemToSlot(item, slot, maxCount);
        if (added > 0) {
            this.setSlot(index, slot.id, slot.count, slot.data, slot.extra);
        }
        return added;
    };
    NativeContainerInterface.prototype.addItem = function (item, side, maxCount) {
        if (maxCount === void 0) {
            maxCount = 64;
        }
        var count = 0;
        var slots = this.getInputSlots(side);
        for (var i = 0; i < slots.length; i++) {
            count += this.addItemToSlot(i, item, maxCount);
            if (item.count == 0 || count >= maxCount) {
                break;
            }
        }
        return count;
    };
    NativeContainerInterface.prototype.getOutputSlots = function () {
        var type = this.container.getType();
        switch (type) {
          case 1:
          case 38:
          case 39:
            return [2];
          case 8:
            return [1, 2, 3];
          default:
            return this.getContainerSlots();
        }
    };
    NativeContainerInterface.prototype.clearContainer = function () {
        var size = this.container.getSize();
        for (var i = 0; i < size; i++) {
            this.container.setSlot(i, 0, 0, 0);
        }
    };
    return NativeContainerInterface;
}());
var TileEntityInterface = (function () {
    function TileEntityInterface(tileEntity) {
        this.liquidUnitRatio = 1;
        this.isNativeContainer = false;
        this.tileEntity = tileEntity;
        this.container = tileEntity.container;
        var storagePrototype = StorageInterface.getData(tileEntity.blockID);
        if (storagePrototype) {
            for (var key in storagePrototype) {
                this[key] = storagePrototype[key];
            }
        }
    }
    TileEntityInterface.prototype.getSlot = function (name) {
        return this.container.getSlot(name);
    };
    TileEntityInterface.prototype.setSlot = function (name, id, count, data, extra) {
        if (extra === void 0) {
            extra = null;
        }
        this.container.setSlot(name, id, count, data, extra);
    };
    TileEntityInterface.prototype.getSlotData = function (name) {
        if (this.slots) {
            return this.slots[name];
        }
        return null;
    };
    TileEntityInterface.prototype.getSlotMaxStack = function (name) {
        var data = this.getSlotData(name);
        return data && data.maxStack || 64;
    };
    TileEntityInterface.prototype.isValidSlotSide = function (slotSide, side) {
        if (slotSide == undefined || side == -1) {
            return true;
        }
        if (typeof slotSide == "number") {
            return slotSide == side;
        }
        switch (slotSide) {
          case "horizontal":
            return side > 1;
          case "verctical":
            return side <= 1;
          case "down":
            return side == 0;
          case "up":
            return side == 1;
        }
        return false;
    };
    TileEntityInterface.prototype.isValidSlotInput = function (name, item, side) {
        var slotData = this.getSlotData(name);
        return !slotData || !slotData.isValid || slotData.isValid(item, side, this.tileEntity);
    };
    TileEntityInterface.prototype.getContainerSlots = function () {
        return Object.keys(this.slots || this.container.slots);
    };
    TileEntityInterface.prototype.getDefaultSlots = function (type) {
        if (this.tileEntity.getTransportSlots) {
            return this.tileEntity.getTransportSlots()[type];
        }
        return this.getContainerSlots();
    };
    TileEntityInterface.prototype.getInputSlots = function (side) {
        if (side === void 0) {
            side = -1;
        }
        if (!this.slots) {
            return this.getDefaultSlots("input");
        }
        var slotNames = [];
        for (var name in this.slots) {
            var slotData = this.getSlotData(name);
            if (slotData.input && this.isValidSlotSide(slotData.side, side)) {
                slotNames.push(name);
            }
        }
        return slotNames;
    };
    TileEntityInterface.prototype.getReceivingItemCount = function (item, side) {
        if (side === void 0) {
            side = -1;
        }
        if (!this.isValidInput(item, side, this.tileEntity)) {
            return 0;
        }
        var slots = this.getInputSlots(side);
        var count = 0;
        for (var _i = 0, slots_2 = slots; _i < slots_2.length; _i++) {
            var name = slots_2[_i];
            if (!this.isValidSlotInput(name, item, side)) {
                continue;
            }
            var slot = this.getSlot(name);
            if (slot.id == 0 || slot.id == item.id && slot.data == item.data) {
                var maxStack = Math.min(Item.getMaxStack(item.id), this.getSlotMaxStack(name));
                count += maxStack - slot.count;
                if (count >= item.count) {
                    break;
                }
            }
        }
        return Math.min(item.count, count);
    };
    TileEntityInterface.prototype.isValidInput = function (item, side, tileEntity) {
        return true;
    };
    TileEntityInterface.prototype.addItemToSlot = function (name, item, maxCount) {
        if (maxCount === void 0) {
            maxCount = 64;
        }
        var slot = this.getSlot(name);
        var maxStack = this.getSlotMaxStack(name);
        var added = StorageInterface.addItemToSlot(item, slot, Math.min(maxCount, maxStack));
        if (added > 0) {
            this.setSlot(name, slot.id, slot.count, slot.data, slot.extra);
        }
        return added;
    };
    TileEntityInterface.prototype.addItem = function (item, side, maxCount) {
        if (side === void 0) {
            side = -1;
        }
        if (maxCount === void 0) {
            maxCount = 64;
        }
        if (!this.isValidInput(item, side, this.tileEntity)) {
            return 0;
        }
        var count = 0;
        var slots = this.getInputSlots(side);
        for (var _i = 0, slots_3 = slots; _i < slots_3.length; _i++) {
            var name = slots_3[_i];
            if (this.isValidSlotInput(name, item, side)) {
                count += this.addItemToSlot(name, item, maxCount - count);
                if (item.count == 0 || count >= maxCount) {
                    break;
                }
            }
        }
        return count;
    };
    TileEntityInterface.prototype.getOutputSlots = function (side) {
        if (side === void 0) {
            side = -1;
        }
        if (!this.slots) {
            return this.getDefaultSlots("output");
        }
        var slotNames = [];
        for (var name in this.slots) {
            var slotData = this.slots[name];
            if (slotData.output) {
                var item = this.container.getSlot(name);
                if (this.isValidSlotSide(slotData.side, side) && (!slotData.canOutput || slotData.canOutput(item, side, this.tileEntity))) {
                    slotNames.push(name);
                }
            }
        }
        return slotNames;
    };
    TileEntityInterface.prototype.clearContainer = function () {
        for (var name in this.container.slots) {
            this.container.clearSlot(name);
        }
    };
    TileEntityInterface.prototype.canReceiveLiquid = function (liquid, side) {
        return this.getInputTank(side).getLimit(liquid) < LIQUID_STORAGE_MAX_LIMIT;
    };
    TileEntityInterface.prototype.canTransportLiquid = function (liquid, side) {
        return true;
    };
    TileEntityInterface.prototype.receiveLiquid = function (liquidStorage, liquid, amount) {
        var storedLiquid = liquidStorage.getLiquidStored();
        if (!storedLiquid || storedLiquid == liquid) {
            return amount - liquidStorage.addLiquid(liquid, amount / this.liquidUnitRatio) * this.liquidUnitRatio;
        }
        return 0;
    };
    TileEntityInterface.prototype.extractLiquid = function (liquidStorage, liquid, amount) {
        return liquidStorage.getLiquid(liquid, amount / this.liquidUnitRatio) * this.liquidUnitRatio;
    };
    TileEntityInterface.prototype.getInputTank = function (side) {
        return this.tileEntity.liquidStorage;
    };
    TileEntityInterface.prototype.getOutputTank = function (side) {
        return this.tileEntity.liquidStorage;
    };
    return TileEntityInterface;
}());
var StorageInterface;
(function (StorageInterface) {
    StorageInterface.data = {};
    function getData(id) {
        return StorageInterface.data[id];
    }
    StorageInterface.getData = getData;
    StorageInterface.directionsBySide = [{x: 0, y: -1, z: 0}, {x: 0, y: 1, z: 0}, {x: 0, y: 0, z: -1}, {x: 0, y: 0, z: 1}, {x: -1, y: 0, z: 0}, {x: 1, y: 0, z: 0}];
    function getRelativeCoords(coords, side) {
        var dir = StorageInterface.directionsBySide[side];
        return {x: coords.x + dir.x, y: coords.y + dir.y, z: coords.z + dir.z};
    }
    StorageInterface.getRelativeCoords = getRelativeCoords;
    function setSlotMaxStackPolicy(container, slotName, maxCount) {
        container.setSlotAddTransferPolicy(slotName, function (container, name, id, amount, data) {
            var maxStack = Math.min(maxCount, Item.getMaxStack(id));
            return Math.max(0, Math.min(amount, maxStack - container.getSlot(name).count));
        });
    }
    StorageInterface.setSlotMaxStackPolicy = setSlotMaxStackPolicy;
    function setSlotValidatePolicy(container, slotName, func) {
        container.setSlotAddTransferPolicy(slotName, function (container, name, id, amount, data, extra, playerUid) {
            amount = Math.min(amount, Item.getMaxStack(id) - container.getSlot(name).count);
            return func(name, id, amount, data, extra, container, playerUid) ? amount : 0;
        });
    }
    StorageInterface.setSlotValidatePolicy = setSlotValidatePolicy;
    function setGlobalValidatePolicy(container, func) {
        container.setGlobalAddTransferPolicy(function (container, name, id, amount, data, extra, playerUid) {
            amount = Math.min(amount, Item.getMaxStack(id) - container.getSlot(name).count);
            return func(name, id, amount, data, extra, container, playerUid) ? amount : 0;
        });
    }
    StorageInterface.setGlobalValidatePolicy = setGlobalValidatePolicy;
    function getInterface(storage) {
        if ("container" in storage) {
            return new TileEntityInterface(storage);
        }
        if ("getParent" in storage) {
            return new TileEntityInterface(storage.getParent());
        }
        return new NativeContainerInterface(storage);
    }
    StorageInterface.getInterface = getInterface;
    function createInterface(id, descriptor) {
        if (descriptor.slots) {
            for (var name in descriptor.slots) {
                if (name.includes("^")) {
                    var slotData = descriptor.slots[name];
                    var str = name.split("^");
                    var index = str[1].split("-");
                    for (var i = parseInt(index[0]); i <= parseInt(index[1]); i++) {
                        descriptor.slots[str[0] + i] = slotData;
                    }
                    delete descriptor.slots[name];
                }
            }
        } else {
            descriptor.slots = {};
        }
        StorageInterface.data[id] = descriptor;
    }
    StorageInterface.createInterface = createInterface;
    function addItemToSlot(item, slot, count) {
        if (count === void 0) {
            count = 64;
        }
        if (slot.id == 0 || slot.id == item.id && slot.data == item.data) {
            var maxStack = Item.getMaxStack(item.id);
            var add = Math.min(item.count, maxStack - slot.count);
            if (count < add) {
                add = count;
            }
            if (add > 0) {
                slot.id = item.id;
                slot.data = item.data;
                if (item.extra) {
                    slot.extra = item.extra;
                }
                slot.count += add;
                item.count -= add;
                if (item.count == 0) {
                    item.id = item.data = 0;
                    item.extra = null;
                }
                return add;
            }
        }
        return 0;
    }
    StorageInterface.addItemToSlot = addItemToSlot;
    function getStorage(region, x, y, z) {
        var nativeTileEntity = region.getBlockEntity(x, y, z);
        if (nativeTileEntity && nativeTileEntity.getSize() > 0) {
            return new NativeContainerInterface(nativeTileEntity);
        }
        var tileEntity = World.getTileEntity(x, y, z, region);
        if (tileEntity && tileEntity.container && tileEntity.__initialized) {
            return new TileEntityInterface(tileEntity);
        }
        return null;
    }
    StorageInterface.getStorage = getStorage;
    function getLiquidStorage(region, x, y, z) {
        var tileEntity = World.getTileEntity(x, y, z, region);
        if (tileEntity && tileEntity.__initialized) {
            return new TileEntityInterface(tileEntity);
        }
        return null;
    }
    StorageInterface.getLiquidStorage = getLiquidStorage;
    function getNeighbourStorage(region, coords, side) {
        var dir = getRelativeCoords(coords, side);
        return getStorage(region, dir.x, dir.y, dir.z);
    }
    StorageInterface.getNeighbourStorage = getNeighbourStorage;
    function getNeighbourLiquidStorage(region, coords, side) {
        var dir = getRelativeCoords(coords, side);
        return getLiquidStorage(region, dir.x, dir.y, dir.z);
    }
    StorageInterface.getNeighbourLiquidStorage = getNeighbourLiquidStorage;
    function getNearestContainers(coords, region) {
        var side = -1;
        if (typeof region == "number") {
            region = null;
            side = region;
        }
        var containers = {};
        for (var i = 0; i < 6; i++) {
            if (side >= 0 && i != side) {
                continue;
            }
            var dir = getRelativeCoords(coords, i);
            var container = World.getContainer(dir.x, dir.y, dir.z, region);
            if (container) {
                containers[i] = container;
            }
        }
        return containers;
    }
    StorageInterface.getNearestContainers = getNearestContainers;
    function getNearestLiquidStorages(coords, region) {
        var side = -1;
        if (typeof region == "number") {
            region = null;
            side = region;
        }
        var storages = {};
        for (var i = 0; i < 6; i++) {
            if (side >= 0 && side != i) {
                continue;
            }
            var storage = getNeighbourLiquidStorage(region, coords, i);
            if (storage) {
                storages[i] = storage;
            }
        }
        return storages;
    }
    StorageInterface.getNearestLiquidStorages = getNearestLiquidStorages;
    function getContainerSlots(container) {
        if ("slots" in container) {
            return Object.keys(container.slots);
        } else {
            var slots = [];
            var size = container.getSize();
            for (var i = 0; i < size; i++) {
                slots.push(i);
            }
            return slots;
        }
    }
    StorageInterface.getContainerSlots = getContainerSlots;
    function putItems(items, containers) {
        for (var i in items) {
            var item = items[i];
            for (var side in containers) {
                if (item.count == 0) {
                    break;
                }
                var container = containers[side];
                putItemToContainer(item, container, parseInt(side) ^ 1);
            }
        }
    }
    StorageInterface.putItems = putItems;
    function putItemToContainer(item, container, side, maxCount) {
        var storage = getInterface(container);
        return storage.addItem(item, side, maxCount);
    }
    StorageInterface.putItemToContainer = putItemToContainer;
    function extractItemsFromContainer(inputContainer, outputContainer, inputSide, maxCount, oneStack) {
        var inputStorage = getInterface(inputContainer);
        var outputStorage = getInterface(outputContainer);
        return extractItemsFromStorage(inputStorage, outputStorage, inputSide, maxCount, oneStack);
    }
    StorageInterface.extractItemsFromContainer = extractItemsFromContainer;
    function extractItemsFromStorage(inputStorage, outputStorage, inputSide, maxCount, oneStack) {
        var count = 0;
        var slots = outputStorage.getOutputSlots(inputSide ^ 1);
        for (var _i = 0, slots_4 = slots; _i < slots_4.length; _i++) {
            var name = slots_4[_i];
            var slot = outputStorage.getSlot(name);
            if (slot.id !== 0) {
                var added = inputStorage.addItem(slot, inputSide, maxCount - count);
                if (added > 0) {
                    count += added;
                    outputStorage.setSlot(name, slot.id, slot.count, slot.data, slot.extra);
                    if (oneStack || count >= maxCount) {
                        break;
                    }
                }
            }
        }
        return count;
    }
    StorageInterface.extractItemsFromStorage = extractItemsFromStorage;
    function extractLiquid(liquid, maxAmount, inputStorage, outputStorage, inputSide) {
        if (!(inputStorage instanceof TileEntityInterface)) {
            inputStorage = new TileEntityInterface(inputStorage);
        }
        var outputSide = inputSide ^ 1;
        var inputTank = inputStorage.getInputTank(inputSide);
        var outputTank = outputStorage.getOutputTank(outputSide);
        if (!inputTank || !outputTank) {
            return 0;
        }
        if (!liquid) {
            liquid = outputTank.getLiquidStored();
        }
        if (liquid && outputStorage.canTransportLiquid(liquid, outputSide) && inputStorage.canReceiveLiquid(liquid, inputSide) && !inputTank.isFull(liquid)) {
            var amount = Math.min(outputTank.getAmount(liquid) * outputStorage.liquidUnitRatio, maxAmount);
            amount = inputStorage.receiveLiquid(inputTank, liquid, amount);
            outputStorage.extractLiquid(outputTank, liquid, amount);
            return amount;
        }
        return 0;
    }
    StorageInterface.extractLiquid = extractLiquid;
    function transportLiquid(liquid, maxAmount, outputStorage, inputStorage, outputSide) {
        if (!(outputStorage instanceof TileEntityInterface)) {
            outputStorage = new TileEntityInterface(outputStorage);
        }
        var inputSide = outputSide ^ 1;
        var inputTank = inputStorage.getInputTank(inputSide);
        var outputTank = outputStorage.getOutputTank(outputSide);
        if (!inputTank || !outputTank) {
            return 0;
        }
        if (inputStorage.canReceiveLiquid(liquid, inputSide) && !inputTank.isFull(liquid)) {
            var amount = Math.min(outputTank.getAmount(liquid) * outputStorage.liquidUnitRatio, maxAmount);
            amount = inputStorage.receiveLiquid(inputTank, liquid, amount);
            outputStorage.extractLiquid(outputTank, liquid, amount);
            return amount;
        }
        return 0;
    }
    StorageInterface.transportLiquid = transportLiquid;
    function checkHoppers(tile) {
        if (World.getThreadTime() % 8 > 0) {
            return;
        }
        var region = tile.blockSource;
        var storage = StorageInterface.getInterface(tile);
        for (var side = 1; side < 6; side++) {
            var dir = getRelativeCoords(tile, side);
            var block = region.getBlock(dir.x, dir.y, dir.z);
            if (block.id == 154 && block.data == side + Math.pow(-1, side)) {
                var hopper = StorageInterface.getStorage(region, dir.x, dir.y, dir.z);
                extractItemsFromStorage(storage, hopper, side, 1);
            }
        }
        if (region.getBlockId(tile.x, tile.y - 1, tile.z) == 154) {
            var hopper = StorageInterface.getStorage(region, tile.x, tile.y - 1, tile.z);
            extractItemsFromStorage(hopper, storage, 0, 1);
        }
    }
    StorageInterface.checkHoppers = checkHoppers;
})(StorageInterface || (StorageInterface = {}));
Callback.addCallback("TileEntityAdded", function (tileEntity, created) {
    if (created) {
        tileEntity.container.setParent(tileEntity);
    }
    if (StorageInterface.data[tileEntity.blockID]) {
        tileEntity.interface = new TileEntityInterface(tileEntity);
    }
});
EXPORT("StorageInterface", StorageInterface);

