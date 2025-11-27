function createAmmo(ammo) {
    IDRegistry.genItemID(ammo.id);
    Item.createItem(ammo.id, ammo.name, ammo.texture, {isTech: false, stack: 64});
    if (ammo.type == AMMO_TYPE_MAGAZIN) {
        Item.setMaxDamage(ammo.id, ammo.count);
    }
}
function getAmmo(item) {
    for (var i in AMMO) {
        if (typeof (item) == "number") {
            if (ItemID[AMMO[i].id] == item) {
                return AMMO[i];
            }
        } else {
            if (ItemID[AMMO[i].id] == item.id) {
                return AMMO[i];
            }
        }
    }
    return false;
}
function getAmmoByStringID(name) {
    for (var i in AMMO) {
        if (AMMO[i].id == name) {
            return AMMO[i];
        }
    }
    return false;
}
function getBulletInAmmo(item) {
    var a = getAmmo(item.id);
    return a.count - item.data;
}
function isAmmo(item) {
    for (var i in AMMO) {
        if (typeof (item) == "number") {
            if (ItemID[AMMO[i].id] == item) {
                return true;
            }
        } else {
            if (ItemID[AMMO[i].id] == item.id) {
                return true;
            }
        }
    }
    return false;
}
function validAmmo(id, count, b, c, el) {
    if ((el.count + count) > 1) {
        return;
    }
    let ammo = getAmmo(id);
    if (ammo) {
        return Boolean(ammo.type == AMMO_TYPE_MAGAZIN && ammo.bullet);
    }
    return false;
}
function validBullet(id, e, d, v, f, c) {
    let ammo = getAmmo(c.getSlot("ammo").id);
    if (ammo) {
        if (typeof ammo.bullet == "string") {
            return ItemID[ammo.bullet] == id;
        } else {
            return ammo.bullet == id;
        }
    }
    return false;
}

