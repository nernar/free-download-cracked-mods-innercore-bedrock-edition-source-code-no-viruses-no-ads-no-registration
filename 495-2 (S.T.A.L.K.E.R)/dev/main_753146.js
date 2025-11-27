function createArmor(armor) {
    var model = armor.texture.model ? armor.texture.model : armor.texture.name;
    if (armor.type == ARMOR_TYPE_HELMET) {
        IDRegistry.genItemID(armor.id + "_helmet");
        Item.createArmorItem(armor.id + "_helmet", armor.name, armor.texture, {type: "helmet", armor: armor.armor, durability: armor.durability, texture: "armor/" + model + "_1.png"});
    } else {
        if (armor.type == ARMOR_TYPE_FULLARMOR) {
            IDRegistry.genItemID(armor.id + "_helmet");
            Item.createArmorItem(armor.id + "_helmet", armor.name, {name: "transparent"}, {type: "helmet", armor: armor.armor, durability: armor.durability, texture: "armor/" + model + "_1.png", isTech: true});
        }
    }
    if (armor.type == ARMOR_TYPE_ARMOR || armor.type == ARMOR_TYPE_FULLARMOR) {
        IDRegistry.genItemID(armor.id + "_chestplate");
        Item.createArmorItem(armor.id + "_chestplate", armor.name, armor.texture, {type: "chestplate", armor: armor.armor, durability: armor.durability, texture: "armor/" + model + "_1.png"});
        IDRegistry.genItemID(armor.id + "_leggings");
        Item.createArmorItem(armor.id + "_leggings", armor.name, {name: "transparent"}, {type: "leggings", armor: armor.armor, durability: armor.durability, texture: "armor/" + model + "_2.png", isTech: true});
        IDRegistry.genItemID(armor.id + "_boots");
        Item.createArmorItem(armor.id + "_boots", armor.name, {name: "transparent"}, {type: "boots", armor: armor.armor, durability: armor.durability, texture: "armor/" + model + "_1.png", isTech: true});
    }
}
function getArmor(item) {
    for (var i in ARMORS) {
        if (typeof (item) == "number") {
            if (ItemID[ARMORS[i].id + "_chestplate"] == item || ItemID[ARMORS[i].id + "_helmet"] == item) {
                return ARMORS[i];
            }
        } else {
            if (ItemID[ARMORS[i].id + "_chestplate"] == item.id || ItemID[ARMORS[i].id + "_helmet"] == item.id) {
                return ARMORS[i];
            }
        }
    }
    return false;
}
function getArmorByStringID(name) {
    for (var i in ARMORS) {
        if (ARMORS[i].id == name || ARMORS[i].id + "_chestplate" == name || ARMORS[i].id + "_helmet" == name) {
            return ARMORS[i];
        }
    }
    return false;
}
function isArmor(item) {
    for (var i in ARMORS) {
        if (typeof (item) == "number") {
            if (ItemID[ARMORS[i].id + "_chestplate"] == item || ItemID[ARMORS[i].id + "_helmet"] == item) {
                return true;
            }
        } else {
            if (ItemID[ARMORS[i].id + "_chestplate"] == item.id || ItemID[ARMORS[i].id + "_helmet"] == item.id) {
                return true;
            }
        }
    }
    return false;
}
function validArmor(id, a, d, e, f, c) {
    if (isArmor(id)) {
        var armor = getArmor(id);
        switch (armor.type) {
          case ARMOR_TYPE_FULLARMOR:
          case ARMOR_TYPE_ARMOR:
            return true;
        }
    }
    return false;
}
function validHelmet(id, e, d, v, f, c) {
    var slot = c.getSlot("armor");
    if (slot.id == 0 || getArmor(slot.id).type == ARMOR_TYPE_ARMOR) {
        armor = getArmor(id);
        if (armor.type == ARMOR_TYPE_HELMET) {
            return true;
        }
    }
    return false;
}

