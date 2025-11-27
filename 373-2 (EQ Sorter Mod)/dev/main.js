const player_sort = function () {
    var inv = [], inv_sorted = [];
    for (let i = 0; i < 27; i++) {
        let slot = Player.getInventorySlot(i + 18);
        if (slot.id != 0) {
            inv.push({id: slot.id, data: slot.data, count: slot.count});
        }
    }
    var inv_length = inv.length, isset;
    if (inv_length >= 1) {
        inv_sorted[0] = inv[0];
        for (let i = 1; i < inv_length; i++) {
            isset = true;
            for (let j = 0; j < inv_sorted.length; j++) {
                if (inv[i].id == inv_sorted[j].id && inv[i].data == inv_sorted[j].data) {
                    isset = false;
                    inv_sorted[j].count += inv[i].count;
                }
            }
            if (isset) {
                inv_sorted.push(inv[i]);
            }
        }
    }
    var slotName = 18, inv_sorted_length = inv_sorted.length;
    for (let i = 0; i < 27; i++) {
        if (i < inv_sorted_length) {
            var stack = Item.getMaxStack(inv_sorted[i].id);
            while (inv_sorted[i].count > stack) {
                Player.setInventorySlot(slotName, inv_sorted[i].id, stack, inv_sorted[i].data);
                inv_sorted[i].count = inv_sorted[i].count - stack;
                slotName++;
            }
            Player.setInventorySlot(slotName, inv_sorted[i].id, inv_sorted[i].count, inv_sorted[i].data);
            slotName++;
        } else {
            Player.setInventorySlot(slotName, 0);
            slotName++;
        }
    }
    inv = null;
    inv_sorted = null;
};
const chest_sort = function (chestData, tile, txt, k) {
    var size = k || chestData.size;
    var inv = [], inv_sorted = [];
    for (let i = 0; i < size; i++) {
        let slot = tile.getSlot(txt + i);
        if (slot.id != 0) {
            inv.push({id: slot.id, data: slot.data, count: slot.count});
        }
    }
    var inv_length = inv.length, isset;
    if (inv_length >= 1) {
        inv_sorted[0] = inv[0];
        for (let i = 1; i < inv_length; i++) {
            isset = true;
            for (let j = 0; j < inv_sorted.length; j++) {
                if (inv[i].id == inv_sorted[j].id && inv[i].data == inv_sorted[j].data) {
                    isset = false;
                    inv_sorted[j].count += inv[i].count;
                }
            }
            if (isset) {
                inv_sorted.push(inv[i]);
            }
        }
    }
    var slotName = 0, inv_sorted_length = inv_sorted.length;
    for (let i = 0; i < size; i++) {
        if (i < inv_sorted_length) {
            var stack = Item.getMaxStack(inv_sorted[i].id);
            while (inv_sorted[i].count > stack) {
                tile.setSlot(txt + slotName, inv_sorted[i].id, stack, inv_sorted[i].data);
                inv_sorted[i].count = inv_sorted[i].count - stack;
                slotName++;
            }
            tile.setSlot(txt + slotName, inv_sorted[i].id, inv_sorted[i].count, inv_sorted[i].data);
            slotName++;
        } else {
            tile.setSlot(txt + slotName, 0, 0, 0);
            slotName++;
        }
    }
    inv = null;
    inv_sorted = null;
};
const chestData = [{id: 54, data: 2, size: 27}];
Callback.addCallback("LevelLoaded", function () {
    if (BlockID.ironChest) {
        chestData.push({id: BlockID.ironChest, data: 0, size: 54});
        chestData.push({id: BlockID.goldChest, data: 0, size: 81});
        chestData.push({id: BlockID.diamondChest, data: 0, size: 108});
        chestData.push({id: BlockID.obsidianChest, data: 0, size: 108});
        chestData.push({id: BlockID.crystalChest, data: 0, size: 108});
    }
    if (BlockID.copperChest) {
        chestData.push({id: BlockID.copperChest, data: 0, size: 45});
        chestData.push({id: BlockID.tinChest, data: 0, size: 54});
        chestData.push({id: BlockID.bronzeChest, data: 0, size: 54});
        chestData.push({id: BlockID.steelChest, data: 0, size: 72});
    }
});
Item.registerUseFunction(280, function (coords, item, block) {
    if (Entity.getSneaking(Player.get())) {
        var player = true;
        for (var m in chestData) {
            if (block.id == chestData[m].id) {
                player = false;
                var tile;
                if (block.id == 54) {
                    tile = World.getContainer(coords.x, coords.y, coords.z);
                    var k = 0;
                    while (tile.getSlot(k) != null) {
                        k++;
                    }
                    chest_sort(chestData[m], tile, 0, k);
                } else {
                    tile = World.getTileEntity(coords.x, coords.y, coords.z);
                    chest_sort(chestData[m], tile.container, "slot");
                }
                break;
            }
        }
        if (player) {
            player_sort();
        }
    }
});

