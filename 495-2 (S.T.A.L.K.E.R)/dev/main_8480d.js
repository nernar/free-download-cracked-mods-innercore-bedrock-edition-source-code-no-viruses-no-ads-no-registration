function angleInRadian(angle) {
    return angle * Math.PI / 180;
}
function radianInAngle(rad) {
    return 180 / Math.PI * rad;
}
function lookDir(yaw, pitch) {
    var vector = {};
    vector.y = -Math.sin((pitch));
    vector.x = -Math.sin((yaw)) * Math.cos((pitch));
    vector.z = Math.cos((yaw)) * Math.cos((pitch));
    return vector;
}
function thread(call) {
    new java.lang.Thread(new java.lang.Runnable({run: function () {
        call();
    }})).start();
}
function startup() {
    StalkerDev.createAmmo();
    StalkerDev.createGun();
    StalkerDev.createArmor();
    GUNS = GUNS.concat(StalkerDev.gun);
    AMMO = AMMO.concat(StalkerDev.ammo);
    ARMORS = ARMORS.concat(StalkerDev.armor);
    for (var a in GUNS) {
        createGun(GUNS[a]);
    }
    for (var a in AMMO) {
        createAmmo(AMMO[a]);
    }
    for (var a in ARMORS) {
        createArmor(ARMORS[a]);
    }
    for (var a in CONSUMABLES) {
        createConsumable(CONSUMABLES[a]);
    }
    for (var a in ATTACHMENTS) {
        craeteAttach(ATTACHMENTS[a]);
    }
    menuAmbientSound.play();
}
function getItemInInventory(callbackif, count, added) {
    if (!count) {
        count = 1;
    }
    if (!callbackif) {
        callbackif = function () {
            return true;
        };
    }
    if (!added) {
        added = null;
    }
    var _count = 0;
    for (var i = 9; i < 45; i++) {
        var slot = Player.getInventorySlot(i);
        if (callbackif(slot, added)) {
            _count += slot.count;
        }
    }
    if (_count >= count) {
        return true;
    } else {
        return false;
    }
}
function getSlotsItemInInventory(callbackif, added) {
    if (!callbackif) {
        callbackif = function () {
            return true;
        };
    }
    if (!added) {
        added = null;
    }
    var slots = [];
    for (var i = 9; i < 45; i++) {
        var slot = Player.getInventorySlot(i);
        if (callbackif(slot, added)) {
            slot.slot = i;
            slots.push(slot);
        }
    }
    return slots;
}
function reloadVaribles() {
    isReloadingBullet = false;
    isReloading = false;
    isShooting = false;
    currentShotTicks = 0;
    countShots = 0;
    gunReloadSound.stop();
    gunReloadSoundOpen.stop();
    gunReloadSoundLoad.stop();
    gunReloadSoundClose.stop();
    isAiming = false;
    isAimingGUI = false;
    Player.resetFov();
}
function differentExtra(e1, e2) {
    if (e1 != null && e2 != null) {
        if (e1.getInt("bullet") != e2.getInt("bullet")) {
            return true;
        }
        if (e1.getInt("ammo") != e2.getInt("ammo")) {
            return true;
        }
        if (e1.getInt("mode") != e2.getInt("mode")) {
            return true;
        }
        return false;
    } else {
        if (e1 == null && e2 == null) {
            return false;
        } else {
            return true;
        }
    }
}
Callback.addCallback("PostLoaded", function () {
    startup();
});
Callback.addCallback("LevelLeft", function () {
    menuAmbientSound.play();
    oldSlotInventory = "null";
    oldItemInventory = 0;
    Inventory.container.clear();
});
Callback.addCallback("LevelLoaded", function () {
    menuAmbientSound.stop();
    PLAYER_ENT = Player.get();
    HUD.setHealth(Entity.getHealth(PLAYER_ENT));
    Game.message("\xa7c\u0414\u0430\u043d\u043d\u044b\u0439 Build \u043d\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0432\u0438\u0434 \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438.\n\xa7a\u041f\u0440\u0438\u044f\u0442\u043d\u043e\u0439 \u043e\u0445\u043e\u0442\u044b, \u0441\u0442\u0430\u043b\u043a\u0435\u0440.");
});
Callback.addCallback("ChangeCarriedItem", function (n) {
    reloadVaribles();
    if (isGun(n)) {
        let item;
        if (item = addGunExtra(n)) {
            Player.setCarriedItem(item.id, item.count, item.data, item.extra);
            n = item;
        }
        thisGunItem = n;
        thisGun = getGun(n);
        thisGunMode = n.extra.getInt("mode", 1);
        thisGunBullet = n.extra.getInt("bullet", 0);
        thisGunAmmo = n.extra.getString("ammo", "");
        thisGunGranadeMode = n.extra.getBoolean("granade", false);
        thisGunGranadeBullet = n.extra.getInt("bulletG", 0);
        thisGunGranadeAmmo = n.extra.getString("ammoG", "");
        thisGunAttachScope = getAttachByStringID(n.extra.getString("attach_scope", ""));
        thisGunAttachUnderbarrel = getAttachByStringID(n.extra.getString("attach_underbarrel", ""));
        thisGunAttachBarrel = getAttachByStringID(n.extra.getString("attach_barrel", ""));
    }
});
var _health = 0, _hunger;
Callback.addCallback("tick", function () {
    if (shooting || (countShots > 0)) {
        if (currentShotTicks <= 0 && countShots != 0) {
            currentShotTicks = thisGunRate;
            shotTickEvent(thisGunItem, thisGun);
            if (thisGunMode != SHOOTING_MODE_AUTO || (isShooting && !shooting)) {
                countShots--;
            }
            if (countShots == 0) {
                stopShooting();
            }
        }
    }
    if (currentShotTicks > 0) {
        currentShotTicks--;
    }
    for (var i in entitys_hurt) {
        if (entitys_hurt[i].length == 0) {
            Entity.damageEntity(parseInt(i), 0);
            delete (entitys_hurt[i]);
        }
    }
    let __health = Entity.getHealth(PLAYER_ENT);
    if (_health != __health) {
        if (Inventory.opened && _health > __health) {
            Inventory._close();
        }
        HUD.setHealth(_health = __health);
    }
    let __hunger = Player.getHunger();
    if (__hunger != _hunger) {
        _hunger = __hunger;
        if (_hunger <= HIGHER_HUNGER_LEVEL) {
            HUD.icons.getElement("hunger").setVisibility(true);
            HUD.icons.getElement("hunger").setSource(Textures.HigherHunger);
        } else {
            if (_hunger <= MEDIUM_HUNGER_LEVEL) {
                HUD.icons.getElement("hunger").setVisibility(true);
                HUD.icons.getElement("hunger").setSource(Textures.MediumHunger);
            } else {
                if (_hunger <= LOWER_HUNGER_LEVEL) {
                    HUD.icons.getElement("hunger").setVisibility(true);
                    HUD.icons.getElement("hunger").setSource(Textures.LowerHunger);
                } else {
                    HUD.icons.getElement("hunger").setVisibility(false);
                }
            }
        }
    }
});
Callback.addCallback("ProjectileHit", function (p, i, t) {
    if (bullets.hasOwnProperty(p)) {
        if (t.entity == -1) {
            if (bullets[p].hasOwnProperty("explode")) {
                World.explode(t.x, t.y, t.z, bullets[p].explode, false);
            }
            Entity.remove(p);
        } else {
            if (bullets[p].hasOwnProperty("explode")) {
                World.explode(t.x, t.y, t.z, bullets[p].explode, false);
            }
            if (!entitys_hurt[t.entity]) {
                entitys_hurt[t.entity] = [];
            }
            entitys_hurt[t.entity].push(bullets[p].damage);
            Entity.remove(p);
            if (__config__.access("debug") == true) {
                Game.message(Entity.getHealth(t.entity) + ":" + (bullets[p].damage));
            }
        }
        delete (bullets[p]);
    }
});
Callback.addCallback("EntityHurt", function (a, v) {
    if (a == PLAYER_ENT && entitys_hurt.hasOwnProperty(v)) {
        if (entitys_hurt[v] == -1) {
            Entity.damageEntity(v, Entity.getHealth(v));
        } else {
            var index = entitys_hurt[v].length - 1;
            var damage = entitys_hurt[v][index];
            var healthEntity = Entity.getHealth(v);
            if (healthEntity <= 0) {
                return;
            }
            if ((healthEntity - damage) <= 0) {
                Entity.damageEntity(v, damage);
            } else {
                Entity.setHealth(v, healthEntity - damage);
            }
        }
        entitys_hurt[v].pop();
        Game.prevent();
    }
});

