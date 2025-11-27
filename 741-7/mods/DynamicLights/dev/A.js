const setTimeout = function (func, ticks) {
    var upd = {ticks: 0, update: function () {
        this.ticks++;
        if (this.ticks >= ticks) {
            func();
            this.remove = true;
        }
    }};
    Updatable.addUpdatable(upd);
};
const UPDATE_TIME = __config__.getNumber("optimization.updateTime");
const RADIUS = __config__.getNumber("optimization.radius");
const XP_ORB_IS_GLOWING = __config__.getBool("optimization.xpOrbIsGlowing");
function posFloor(pos) {
    pos.x = Math.floor(pos.x);
    pos.z = Math.floor(pos.z);
    pos.y = Math.floor(pos.y) + 0.3;
    return pos;
}
let glowingItemID = {};
let glowingArmorID = {};
let glowingDroppedItemID = {};
let glowingEntity = {};
let glowingEntityTag = {};
let glowFromFunctions = [];
function addGlowingDroppedItemID(id, level) {
    level = level || 15;
    if (level > 15) {
        level = 15;
    }
    glowingDroppedItemID[id] = level;
}
function addGlowingArmorID(id, level, bool, bool2) {
    level = level || 15;
    if (level > 15) {
        level = 15;
    }
    glowingArmorID[id] = level;
    if (bool) {
        glowingItemID[id] = level;
    }
    if (bool2) {
        glowingDroppedItemID[id] = level;
    }
}
function addGlowingItemID(id, level, bool) {
    level = level || 15;
    if (level > 15) {
        level = 15;
    }
    glowingItemID[id] = level;
    if (bool) {
        glowingDroppedItemID[id] = level;
    }
}
function addGlowingEntity(name, level) {
    level = level || 15;
    if (level > 15) {
        level = 15;
    }
    glowingEntity[name] = level;
}
function addGlowingFunction(func) {
    glowFromFunctions[glowFromFunctions.length] = func;
}
ModAPI.registerAPI("DynamicLight", {addGlowingItemID: function (id, lvl, bool) {
    addGlowingItemID(id, lvl, bool);
}, addGlowingArmorID: function (id, lvl, bool, bool2) {
    addGlowingArmorID(id, lvl, bool, bool2);
}, addGlowingDroppedItemID: function (id, lvl) {
    addGlowingDroppedItemID(id, lvl);
}, addGlowingEntity: function (entityName, lvl) {
    addGlowingEntity(entityName, lvl);
}, addGlowingFunction: function (func) {
    addGlowingFunction(func);
}});
addGlowingEntity("minecraft:blaze", 13);
if (XP_ORB_IS_GLOWING) {
    addGlowingEntity("minecraft:xp_orb", 4);
}
addGlowingEntity("minecraft:ender_crystal", 13);
addGlowingFunction(function (ent) {
    let tags = Entity.getCompoundTag(ent);
    let tag = tags.getShort("Fire");
    if (tag > 0) {
        return 14;
    }
});
addGlowingFunction(function (ent) {
    let tags = Entity.getCompoundTag(ent);
    let tag = tags.getInt("Invul");
    if (tag > 0) {
        return 14;
    }
});
addGlowingFunction(function (ent) {
    let tags = Entity.getCompoundTag(ent);
    let tag = tags.getByte("IsFuseLit");
    if (tag) {
        return 14;
    }
});
addGlowingItemID(50, 14, true);
addGlowingItemID(763, 12, true);
addGlowingItemID(426, 12, true);
addGlowingItemID(50, 14, true);
addGlowingItemID(369, 10, true);
addGlowingItemID(377, 7, true);
addGlowingItemID(-249, 6, true);
addGlowingItemID(-279, 10, true);
addGlowingItemID(-208, 15, true);
addGlowingItemID(-277, 10, true);
addGlowingItemID(720, 15, true);
addGlowingItemID(-275, 10, true);
addGlowingItemID(116, 12, true);
addGlowingItemID(89, 15, true);
addGlowingItemID(169, 15, true);
addGlowingItemID(843, 15, true);
addGlowingItemID(138, 15, true);
addGlowingItemID(208, 14, true);
addGlowingItemID(76, 7, true);
addGlowingItemID(-274, 15, true);
addGlowingItemID(91, 15, true);
addGlowingItemID(213, 3, true);
addGlowingItemID(348, 10, true);
addGlowingItemID(130, 7, true);
addGlowingArmorID(VanillaItemID.golden_helmet, 11, true);
addGlowingArmorID(VanillaItemID.golden_chestplate, 11, true);
addGlowingArmorID(VanillaItemID.golden_leggings, 11, true);
addGlowingArmorID(VanillaItemID.golden_boots, 11, true);
Callback.addCallback("ServerPlayerTick", function (player) {
    if (World.getThreadTime() % UPDATE_TIME == 0) {
        let playerPos = posFloor(Entity.getPosition(player));
        let ents = Entity.getAllInRange(playerPos, RADIUS);
        for (let i in ents) {
            let ent = ents[i];
            let lightLevel = 0;
            let item = Entity.getCarriedItem(ent);
            if (glowingItemID[item.id]) {
                lightLevel += glowingItemID[item.id];
            }
            if (item.extra && item.extra.isEnchanted()) {
                lightLevel += 8;
            }
            for (let slot = 0; slot < 4; slot++) {
                let armor = Entity.getArmorSlot(ent, slot);
                if (glowingArmorID[armor.id]) {
                    lightLevel += glowingArmorID[armor.id];
                }
                if (armor.extra && armor.extra.isEnchanted()) {
                    lightLevel += 8;
                }
            }
            let tags = Entity.getCompoundTag(ent);
            let entityName = tags.getString("identifier");
            let glowEnt = glowingEntity[entityName];
            if (glowEnt) {
                lightLevel += glowEnt;
            }
            for (let ff in glowFromFunctions) {
                let func = glowFromFunctions[ff](ent);
                if (func) {
                    lightLevel += func;
                }
            }
            let drop = Entity.getDroppedItem(ent);
            if (drop.extra && drop.extra.isEnchanted()) {
                lightLevel += 8;
            }
            if (drop && glowingDroppedItemID[drop.id]) {
                lightLevel += glowingDroppedItemID[drop.id];
            }
            let pos = posFloor(Entity.getPosition(ent));
            let region = BlockSource.getDefaultForActor(player);
            let block = region.getBlock(pos.x, pos.y, pos.z);
            let inWater = {};
            if (block.id == 8) {
                inWater.bool = true;
                inWater.block = block;
            } else {
                if (block.id == 9) {
                    inWater.bool = true;
                    inWater.block = block;
                }
            }
            if (lightLevel > 0) {
                if (block.id == 509 || block.id == 0 || inWater.bool) {
                    region.setBlock(pos.x, pos.y, pos.z, 509, lightLevel > 15 ? 15 : lightLevel);
                    setTimeout(function () {
                        let newPos = posFloor(Entity.getPosition(ent));
                        if (region.getBlockId(pos.x, pos.y, pos.z) == 509 && JSON.stringify(newPos) !== JSON.stringify(pos)) {
                            let filler = {id: 0, data: 0};
                            if (inWater.bool) {
                                filler = inWater.block;
                            }
                            region.setBlock(pos.x, pos.y, pos.z, filler.id, filler.data);
                        }
                    }, 15);
                }
            } else {
                if (block.id == 509) {
                    let filler = {id: 0, data: 0};
                    if (inWater.bool) {
                        filler = inWater.block;
                    }
                    region.setBlock(pos.x, pos.y, pos.z, filler.id, filler.data);
                }
            }
        }
    }
});

