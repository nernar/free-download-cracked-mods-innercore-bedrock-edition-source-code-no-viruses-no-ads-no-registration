function setConsumable(id, c, d, e, el, c) {
    let index = CONSUMABLES.findIndex(function (el) {
        if (el.id == id || ItemID[el.id] == id) {
            return true;
        }
        return false;
    });
    if (index != -1) {
        c.setSlot(el.name, id, getCountConsumable(CONSUMABLES[index].id), d, e);
        return false;
    }
    return false;
}
function deleteOneConsumable(id) {
    if (typeof id == "string") {
        id = ItemID[id];
    }
    let slot = getSlotsItemInInventory(function (slot, id) {
        return slot.id == id;
    }, id)[0];
    if (slot) {
        if (slot.count > 1) {
            Player.setInventorySlot(slot.slot, slot.id, slot.count - 1, slot.data);
        } else {
            Player.setInventorySlot(slot.slot, 0, 0, 0);
        }
    }
}
function getCountConsumable(id) {
    if (typeof id == "string") {
        id = ItemID[id];
    }
    let count = 0;
    let slots = getSlotsItemInInventory(function (slot, id) {
        return slot.id == id;
    }, id);
    for (let i = 0, l = slots.length; i < l; i++) {
        count += slots[i].count;
    }
    return count;
}
function getConsumable(id) {
    return CONSUMABLES.find(function (el) {
        if (el.id == id || ItemID[el.id] == id) {
            return true;
        }
        return false;
    }) || false;
}
function useConsumable(c, e) {
    if (e.count < 1) {
        return false;
    }
    var consumable = getConsumable(e.id);
    if (consumable) {
        if (consumable.hunger) {
            Player.setHunger(Player.getHunger() + consumable.hunger);
        }
        if (consumable.health) {
            var a = Entity.getHealth(PLAYER_ENT);
            Entity.setHealth(PLAYER_ENT, a + consumable.health);
        }
        c.setSlot(e.name, e.id, e.count - 1, e.data);
        deleteOneConsumable(e.id);
    }
}
function createConsumable(consumable) {
    if (typeof consumable.id == "number") {
        return;
    }
    if (!consumable.stack) {
        consumable.stack = 64;
    }
    IDRegistry.genItemID(consumable.id);
    Item.createItem(consumable.id, consumable.name, consumable.texture, {isTech: false, stack: consumable.stack});
}
function unsetConsumable(c, e) {
    if (e.getSelected()) {
        c.clearSlot(e.name);
    } else {
        c.selectSlot(e.name);
    }
}

