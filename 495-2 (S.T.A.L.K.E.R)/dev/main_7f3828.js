function craeteAttach(attach) {
    IDRegistry.genItemID(attach.id);
    Item.createItem(attach.id, attach.name, attach.texture, {isTech: false, stack: 1});
}
function getAttach(item) {
    for (var i in ATTACHMENTS) {
        if (typeof (item) == "number") {
            if (ItemID[ATTACHMENTS[i].id] == item) {
                return ATTACHMENTS[i];
            }
        } else {
            if (ItemID[ATTACHMENTS[i].id] == item.id) {
                return ATTACHMENTS[i];
            }
        }
    }
    return false;
}
function getAttachByStringID(sid) {
    for (var i in ATTACHMENTS) {
        if (ATTACHMENTS[i].id == sid) {
            return ATTACHMENTS[i];
        }
    }
    return false;
}
function validScope(id, a, b, c, el, con) {
    let gun = getGun(con.getSlot("attach_gun").id);
    if (gun && gun.attachments && gun.attachments.scopes) {
        for (var i in gun.attachments.scopes) {
            if (ItemID[gun.attachments.scopes[i]] == id) {
                return true;
            }
        }
    }
    return false;
}
function changeScope(el, new_i, old_i, c) {
    let attach_gun = c.getSlot("attach_gun");
    if (attach_gun.id) {
        if (new_i.id == 0) {
            attach_gun.extra.putString("attach_scope", "");
            c.setSlot("attach_gun", attach_gun.id, attach_gun.count, attach_gun.data, attach_gun.extra);
        } else {
            if (old_i.id == 0) {
                attach_gun.extra.putString("attach_scope", getAttach(new_i).id);
                c.setSlot("attach_gun", attach_gun.id, attach_gun.count, attach_gun.data, attach_gun.extra);
            }
        }
    }
}
function validUnderbarrel(id, a, b, c, el, con) {
    let gun = getGun(con.getSlot("attach_gun").id);
    if (gun && gun.attachments && gun.attachments.underbarrels) {
        for (var i in gun.attachments.underbarrels) {
            if (ItemID[gun.attachments.underbarrels[i]] == id) {
                return true;
            }
        }
    }
    return false;
}
function changeUnderbarrel(el, new_i, old_i, c) {
    let attach_gun = c.getSlot("attach_gun");
    if (attach_gun.id) {
        if (new_i.id == 0) {
            attach_gun.extra.putString("attach_underbarrel", "");
            c.setSlot("attach_gun", attach_gun.id, attach_gun.count, attach_gun.data, attach_gun.extra);
        } else {
            if (old_i.id == 0) {
                attach_gun.extra.putString("attach_underbarrel", getAttach(new_i).id);
                c.setSlot("attach_gun", attach_gun.id, attach_gun.count, attach_gun.data, attach_gun.extra);
            }
        }
    }
}

