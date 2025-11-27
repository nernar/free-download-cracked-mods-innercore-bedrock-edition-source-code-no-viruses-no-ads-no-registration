IDRegistry.genBlockID("EndCore");
Block.createBlock("EndCore", [{name: "End Core", texture: [["endCore", 0]], inCreative: true}]);
IDRegistry.genBlockID("enderQuarry");
Block.createBlock("enderQuarry", [{name: "Ender Quarry", texture: [["enderQuarry", 1], ["enderQuarry", 2], ["enderQuarry", 0], ["enderQuarry", 0], ["enderQuarry", 0], ["enderQuarry", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.enderQuarry, count: 1, data: 0}, ["dhd", "a#a", "bjb"], ["h", 6, 0, "d", BlockID.EndCore, -1, "j", 278, 0, "b", 152, -1, "a", 49, 0, "#", 54, 0]);
Recipes.addShaped({id: BlockID.EndCore, count: 1, data: 0}, ["bab", "a#a", "bab"], ["#", 381, 0, "a", 49, 0, "b", 17, -1]);
var dirtBlocksDrop = {60: 3, 110: 3, 198: 3, 243: 3};
function getBlockDrop(coords, id, data, level) {
    var dropFunc = Block.dropFunctions[id];
    if (dropFunc) {
        return dropFunc(coords, id, data, ToolAPI.getToolLevel(level), {});
    }
    if (dirtBlocksDrop[id]) {
        return [[dirtBlocksDrop[id], 1, 0]];
    }
    return [[id, 1, data]];
}
function addItemsToContainers(items, containers) {
    for (var i in items) {
        for (var c in containers) {
            var container = containers[c];
            var item = items[i];
            var tileEntity = container.tileEntity;
            var slots = [];
            var slotsInitialized = false;
            if (tileEntity) {
                if (tileEntity.addTransportedItem) {
                    tileEntity.addTransportedItem({}, item, {});
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
                    for (var i = 0; i < container.getSize(); i++) {
                        slots.push(i);
                    }
                }
            }
            for (var i in slots) {
                var slot = container.getSlot(slots[i]);
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
                        container.setSlot(i, slot.id, slot.count, slot.data);
                    }
                }
            }
            if (item.count == 0) {
                item.id = 0;
                item.data = 0;
                break;
            }
        }
    }
}
MachineRegistry.register(BlockID.enderQuarry, {defaultValues: {digX: 0, digZ: 0, digY: 0}, drop: function (items) {
    var container = World.getContainer(this.x, this.y + 1, this.z);
    if (container) {
        addItemsToContainers(items, [container]);
    }
    for (var i in items) {
        var item = items[i];
        if (item.count > 0) {
            World.drop(this.x + 0.5, this.y + 1, this.z + 0.5, item.id, item.count, item.data);
        }
    }
}, tick: function () {
    if (this.data.digX == 0) {
        this.data.digY = this.y - 40;
        this.data.digX = this.x - 5;
        this.data.digZ = this.z - 6;
    }
    if (this.data.energy > 300 && World.getThreadTime() % 15 == 0) {
        range = 5;
        if (this.data.digZ++ > this.z + range - 1) {
            this.data.digZ = this.z - range;
            if (this.data.digX++ > this.z + range - 1) {
                this.data.digX = this.x - range;
                this.data.digZ = this.z - range;
                if (this.data.digY-- < this.y - 70) {
                }
            }
        }
        block = World.getBlock(this.data.digX, this.data.digY, this.data.digZ);
        nonDestroyed = [7, 8, 9, 10, 11, 120];
        for (var i in nonDestroyed) {
            if (nonDestroyed[i] == block.id) {
                return;
            }
        }
        if (!block.id == 0) {
            var coords = {x: this.data.digX, y: this.data.digY, z: this.data.digZ};
            var drop = getBlockDrop(coords, block.id, block.data, 278);
            var items = [];
            for (var i in drop) {
                items.push({id: drop[i][0], count: drop[i][1], data: drop[i][2]});
            }
            this.drop(items);
            this.data.energy -= 300;
            World.setBlock(this.data.digX, this.data.digY, this.data.digZ, 0);
        }
    }
}, click: function (id, count, data, coords) {
    Game.message(Native.Color.RED + "RF: " + this.data.energy + "/100000");
}, getEnergyStorage: function () {
    return 100000;
}, energyTick: MachineRegistry.basicEnergyReceiveFunc});

