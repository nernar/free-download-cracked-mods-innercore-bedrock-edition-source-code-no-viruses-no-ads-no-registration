function createGun(gun) {
    IDRegistry.genItemID(gun.id);
    Item.createItem(gun.id, gun.name, gun.texture, {isTech: false, stack: 1});
    Item.describeItem(gun.id, {toolRender: true});
    Item.registerIconOverrideFunction(gun.id, function (item, name) {
        var gun = getGun(item.id);
        if (isAimingGUI && thisGunItem.id == item.id) {
            return {name: "transparent", meta: 0};
        }
        if (item.data != 0 && Inventory.container.isOpened()) {
            if (__dev == true) {
                return {name: "gear", meta: 0};
            } else {
                return {name: "transparent", meta: 0};
            }
        }
        if (item.extra == null) {
            return gun.texture;
        }
        var ammo = getAmmoByStringID(item.extra.getString("ammo", null));
        let ammo_pref = "";
        var meta = gun.texture.meta || 0;
        if (ammo) {
            ammo_pref = ammo.texture.prefix || "";
        }
        let attachment = getAttachByStringID(item.extra.getString("attach_scope", null));
        let scope_pref = "";
        if (attachment) {
            scope_pref = attachment.texture.prefix || "";
        }
        attachment = getAttachByStringID(item.extra.getString("attach_underbarrel", null));
        let underbarrel_pref = "";
        if (attachment) {
            underbarrel_pref = attachment.texture.prefix || "";
        }
        return {name: gun.texture.name + ammo_pref + scope_pref + underbarrel_pref, meta: meta};
    });
}
function addGunExtra(item) {
    let gun = getGun(item);
    let i = 0;
    if (item.extra == null) {
        item.extra = new ItemExtraData(gunExtra);
        if (gun.shootingModes[i] == SHOOTING_MODE_GRANADE) {
            item.extra.putBoolean("granade", true);
            i++;
        }
        if (gun.shootingModes[i] !== undefined) {
            item.extra.putInt("mode", gun.shootingModes[i]);
        } else {
            item.extra.putInt("mode", 1);
        }
        if (__config__.access("debug") == true) {
            alert("CCI:Extra Added");
        }
        return item;
    }
    return false;
}
function getGun(item) {
    for (var i in GUNS) {
        if (typeof (item) == "number") {
            if (ItemID[GUNS[i].id] == item) {
                return GUNS[i];
            }
        } else {
            if (ItemID[GUNS[i].id] == item.id) {
                return GUNS[i];
            }
        }
    }
    return false;
}
function getGunByStringID(name) {
    for (var i in GUNS) {
        if (GUNS[i].id == name) {
            return GUNS[i];
        }
    }
    return false;
}
function showCloudParticle(a, angle) {
    if (a > 0) {
        for (var b = 0; b < a; b++) {
            var pPos = Player.getPosition();
            var angleB = -angle.pitch;
            var rotate = [1, 0, 0, 0, Math.cos(angleB), -Math.sin(angleB), 0, Math.sin(angleB), Math.cos(angleB)];
            if (isAimingGUI) {
                var block = [0, -0.2, 0.5];
            } else {
                var block = [-0.3, 0, 0.5];
            }
            var dx = block[0] * rotate[0] + block[1] * rotate[1] + block[2] * rotate[2];
            var dy = block[0] * rotate[3] + block[1] * rotate[4] + block[2] * rotate[5];
            var dz = block[0] * rotate[6] + block[1] * rotate[7] + block[2] * rotate[8];
            var angleA = -angle.yaw;
            rotate = [Math.cos(angleA), 0, Math.sin(angleA), 0, 1, 0, -Math.sin(angleA), 0, Math.cos(angleA)];
            var _dx = dx * rotate[0] + dy * rotate[1] + dz * rotate[2];
            var _dy = dx * rotate[3] + dy * rotate[4] + dz * rotate[5];
            var _dz = dx * rotate[6] + dy * rotate[7] + dz * rotate[8];
            Debug.addParticle(pPos.x + _dx, pPos.y + _dy, pPos.z + _dz, Native.ParticleType.smoke, 0, 0, 0, 0);
        }
    }
}
function isGun(item) {
    for (var i in GUNS) {
        if (typeof (item) == "number") {
            if (ItemID[GUNS[i].id] == item) {
                return true;
            }
        } else {
            if (ItemID[GUNS[i].id] == item.id) {
                return true;
            }
        }
    }
    return false;
}
function shootShotgun(gun, angle) {
    var shotParam = gun.shotgun;
    var yaw = angle.yaw + angleInRadian(((Math.random() * ACCURACY) - (ACCURACY / 2)) * getDefaultAccuracy(gun));
    var pit = angle.pitch + angleInRadian(((Math.random() * ACCURACY) - (ACCURACY / 2)) * getDefaultAccuracy(gun));
    var a = [];
    for (var i = 0; i < shotParam.count; i++) {
        var syaw = angleInRadian((Math.random() * shotParam.degreesSpread) - (shotParam.degreesSpread / 2));
        var spit = angleInRadian((Math.random() * shotParam.degreesSpread) - (shotParam.degreesSpread / 2));
        _angle = {};
        _angle.yaw = yaw + syaw;
        _angle.pitch = pit + spit;
        var d = Entity.getLookVectorByAngle(_angle);
        a.push(shotEntity(gun, d));
    }
    return a;
}
function shotSingleBullet(gun, angle) {
    angle.yaw += angleInRadian(((Math.random() * ACCURACY) - (ACCURACY / 2)) * getDefaultAccuracy(gun));
    angle.pitch += angleInRadian(((Math.random() * ACCURACY) - (ACCURACY / 2)) * getDefaultAccuracy(gun));
    var d = Entity.getLookVectorByAngle(angle);
    var a = shotEntity(gun, d);
    return a;
}
function shot(item, gun) {
    if (thisGunBullet < 1) {
        countShots = 1;
        if (shooting) {
            emptyGunNotice = true;
        }
        shooting = false;
        return gunEmptySound.play();
    }
    var entitys;
    var ammo = getAmmoByStringID(thisGunAmmo);
    var angle = Entity.getLookAngle(PLAYER_ENT);
    showCloudParticle(getSmokeLevel(gun), angle);
    Entity.setLookAngle(PLAYER_ENT, angle.yaw, angle.pitch + angleInRadian(getRecoil(gun)));
    if (gun.shotType == SHOT_TYPE_SINGLE) {
        entitys = [shotSingleBullet(gun, angle)];
    } else {
        if (gun.shotType == SHOT_TYPE_MULTIPLE) {
            entitys = shootShotgun(gun, angle);
        }
    }
    entitys.forEach(function (e) {
        Entity.setSkin(e, "entity/" + (ammo.texture.entity ? ammo.texture.entity : "bullet") + ".png");
    });
    var shootSound = new Sound(gun.sounds + "/shot.ogg");
    shootSound.setOnCompletion(function () {
        shootSound.destroy();
    });
    shootSound.play();
    isShooting = true;
    thisGunBullet--;
    if (ammo.type == AMMO_TYPE_BULLET) {
        if (thisGunBullet <= 0) {
            HUD.setAmmoCount();
            HUD.setAmmoName();
        } else {
            HUD.setAmmoCount(thisGunBullet + "/" + gun.bullet.count);
        }
    } else {
        HUD.setAmmoCount(thisGunBullet + "/" + ammo.count);
    }
}
function shotGranade(item, gun) {
    var angle = Entity.getLookAngle(PLAYER_ENT);
    Entity.setLookAngle(PLAYER_ENT, angle.yaw, angle.pitch + angleInRadian(getRecoil(gun)));
    showCloudParticle(4, angle);
    var entity = shotSingleBullet(gun, angle);
    var ammo = getAmmoByStringID(thisGunGranadeAmmo);
    Entity.setSkin(entity, "entity/" + (ammo.texture.entity ? ammo.texture.entity : "bullet") + ".png");
    bullets[entity].explode = ammo.explode;
    thisGunGranadeBullet--;
    item.extra.putInt("bulletG", thisGunGranadeBullet);
    let granade;
    if (gun.shootingModes.indexOf(SHOOTING_MODE_GRANADE) != -1) {
        granade = gun.granade;
    } else {
        if (thisGunAttachUnderbarrel && thisGunAttachUnderbarrel.specif && thisGunAttachUnderbarrel.specif.granade) {
            granade = thisGunAttachUnderbarrel.specif.granade;
        }
    }
    var shootSound = new Sound(granade.sounds + "/shot.ogg");
    shootSound.setOnCompletion(function () {
        shootSound.destroy();
    });
    shootSound.play();
    isShooting = true;
    if (thisGunGranadeBullet <= 0) {
        HUD.setAmmoCount();
        HUD.setAmmoName();
        thisGunGranadeAmmo = "";
        item.extra.putString("ammoG", thisGunGranadeAmmo);
    } else {
        HUD.setAmmoCount(thisGunGranadeBullet + "/" + (granade.count ? granade.count : 1));
    }
    Player.setCarriedItem(item.id, item.count, item.data, item.extra);
}
function stopShooting() {
    thisGunItem.extra.putInt("bullet", thisGunBullet);
    thisGunItem.extra.putInt("bulletG", thisGunGranadeBullet);
    thisGunItem.extra.putString("ammo", thisGunAmmo);
    Player.setCarriedItem(thisGunItem.id, 1, thisGunItem.data, thisGunItem.extra);
}
function getSmokeLevel(gun) {
    let smoke = gun.smoke;
    if (smoke === null) {
        smoke = 1;
    }
    if (thisGunAttachBarrel && thisGunAttachBarrel.specif) {
        smoke -= thisGunAttachBarrel.specif.smoke || 0;
    }
    if (smoke < 0) {
        smoke = 0;
    }
    return smoke;
}
function getDefaultAccuracy(gun) {
    let deltaAccuracy = 0;
    let accuracy = 1;
    if (thisGunAttachScope && thisGunAttachScope.specif) {
        if (isAiming && thisGunAttachScope.specif.fov) {
            deltaAccuracy += thisGunAttachScope.specif.fov.accuracy || thisGunAttachScope.specif.accuracy || 0;
        } else {
            deltaAccuracy += thisGunAttachScope.specif.accuracy || 0;
        }
    }
    if (thisGunAttachUnderbarrel && thisGunAttachUnderbarrel.specif) {
        deltaAccuracy += thisGunAttachUnderbarrel.specif.accuracy || 0;
    }
    if (thisGunAttachBarrel && thisGunAttachBarrel.specif) {
        deltaAccuracy += thisGunAttachBarrel.specif.recoil || 0;
    }
    if (isAiming) {
        accuracy = (gun.fov.accuracy ? gun.fov.accuracy : gun.accuracy - 1) - deltaAccuracy;
    } else {
        accuracy = gun.accuracy - deltaAccuracy;
    }
    if (accuracy < 1) {
        accuracy = 1;
    }
    return accuracy;
}
function getRate(rate) {
    return 20 / rate;
}
function getRecoil(gun) {
    let recoil = gun.recoil;
    if (thisGunAttachScope && thisGunAttachScope.specif) {
        recoil -= thisGunAttachScope.specif.recoil || 0;
    }
    if (thisGunAttachUnderbarrel && thisGunAttachUnderbarrel.specif) {
        recoil -= thisGunAttachUnderbarrel.specif.recoil || 0;
    }
    if (thisGunAttachBarrel && thisGunAttachBarrel.specif) {
        recoil -= thisGunAttachBarrel.specif.recoil || 0;
    }
    if (recoil < 1) {
        recoil = 1;
    }
    return recoil;
}
function getDamage(gun) {
    let dmg = gun.bullet.damage;
    if (dmg == GUN_MAX_DAMAGE) {
        return dmg;
    }
    if (thisGunAttachBarrel && thisGunAttachBarrel.specif && thisGunAttachBarrel.specif.bullet) {
        dmg += thisGunAttachBarrel.specif.bullet.damage || 0;
    }
    if (dmg < 1) {
        dmg = 1;
    }
    return dmg;
}
function getSpeedBullet(gun) {
    let speed = gun.bullet.speed;
    if (thisGunAttachBarrel && thisGunAttachBarrel.specif && thisGunAttachBarrel.specif.bullet) {
        speed += thisGunAttachBarrel.specif.bullet.speed || 0;
    }
    if (speed < 1) {
        speed = 1;
    }
    return speed;
}
function shotEntity(gun, vectorSpawn, vectorSpeed) {
    if (vectorSpeed == null) {
        vectorSpeed = vectorSpawn;
    }
    var pp = Player.getPosition();
    let speed = getSpeedBullet(gun);
    var entity = Entity.spawn(pp.x + (vectorSpawn.x * 2), pp.y + (vectorSpawn.y * 2), pp.z + (vectorSpawn.z * 2), Native.EntityType.ARROW);
    Entity.setVelocity(entity, vectorSpeed.x * speed, vectorSpeed.y * speed, vectorSpeed.z * speed);
    bullets[entity] = {damage: getDamage(gun)};
    return entity;
}
function searchMagazin(i, gun) {
    var ammo = getAmmo(i.id);
    if (ammo) {
        if (gun.ammo.indexOf(ammo.id) != -1 && ammo.type == AMMO_TYPE_MAGAZIN) {
            if (getBulletInAmmo(i) > 0) {
                return true;
            }
        }
    }
    return false;
}
function searchBullet(i, gun) {
    var ammo = getAmmo(i.id);
    if (ammo) {
        if (gun.ammo.indexOf(ammo.id) != -1 && ammo.type == AMMO_TYPE_BULLET) {
            return true;
        }
    }
    return false;
}
function reload(item, gun) {
    for (var i = 0; i < gun.ammo.length; i++) {
        var ammo = getAmmoByStringID(gun.ammo[i]);
        if (ammo.type == AMMO_TYPE_GRANADE) {
            continue;
        }
        if (ammo.type == AMMO_TYPE_MAGAZIN) {
            if (getItemInInventory(searchMagazin, 1, gun)) {
                isReloading = true;
                gunReloadSound.setOnCompletion(function () {
                    isReloading = false;
                    var b = getSlotsItemInInventory(searchMagazin, gun);
                    var count = 0;
                    var slot = {};
                    for (var i = 0; i < b.length; i++) {
                        var _count = getBulletInAmmo(b[i]);
                        if (_count > count) {
                            count = _count;
                            slot = b[i];
                        }
                    }
                    var thisAmmoID = thisGunAmmo;
                    var _ammo = getAmmoByStringID(thisAmmoID);
                    var thisAmmoData = _ammo.count - thisGunBullet;
                    ammo = getAmmo(slot.id);
                    thisGunAmmo = ammo.id;
                    item.extra.putString("ammo", thisGunAmmo);
                    thisGunBullet = ammo.count - slot.data;
                    item.extra.putInt("bullet", thisGunBullet);
                    Player.setCarriedItem(item.id, item.count, item.data, item.extra);
                    if (slot.count > 1) {
                        Player.setInventorySlot(slot.slot, slot.id, slot.count - 1, slot.data);
                    } else {
                        Player.setInventorySlot(slot.slot, 0, 0, 0);
                    }
                    Player.addItemToInventory(ItemID[thisAmmoID], 1, thisAmmoData);
                    HUD.setAmmoName(ammo.gun_name || ammo.name);
                    HUD.setAmmoCount(thisGunBullet + "/" + ammo.count);
                });
                gunReloadSound.setSource(gun.sounds + "/reload.ogg");
                gunReloadSound.play();
                return;
            }
        } else {
            if (ammo.type == AMMO_TYPE_BULLET) {
                var a = Player.getCarriedItem();
                if (thisGunBullet == gun.bullet.count) {
                    return false;
                }
                if (getItemInInventory(searchBullet, 1, gun)) {
                    isReloadingBullet = true;
                    isReloading = true;
                    var count = 0;
                    var b = getSlotsItemInInventory(searchBullet, gun);
                    var d = thisGunBullet;
                    var slots = [];
                    for (var j = 0; j < b.length; j++) {
                        if (b[j].count > (gun.bullet.count - d - count)) {
                            count += (gun.bullet.count - d - count);
                        } else {
                            count += b[j].count;
                        }
                        slots.push(b[j]);
                        if ((count + d) >= gun.bullet.count) {
                            break;
                        }
                    }
                    gunReloadSoundOpen.setOnCompletion(function () {
                        loadBullet(item, gun, ammo, slots, count);
                    });
                    gunReloadSoundOpen.setSource(gun.sounds + "/reload_open.ogg");
                    gunReloadSoundOpen.play();
                }
            }
        }
    }
}
function loadBullet(item, gun, ammo, slots, count) {
    if (count > 0 && isReloadingBullet) {
        var index = slots.findIndex(function (x) {
            return x.count > 0;
        });
        var slot = slots[index];
        gunReloadSoundLoad.setOnCompletion(function () {
            thisGunBullet++;
            if (thisGunBullet == 1) {
                thisGunAmmo = ammo.id;
                HUD.setAmmoName(ammo.gun_name || ammo.name);
            }
            HUD.setAmmoCount(thisGunBullet + "/" + gun.bullet.count);
            if (slot.count > 1) {
                slot.count -= 1;
                Player.setInventorySlot(slot.slot, slot.id, slot.count, slot.data);
            } else {
                Player.setInventorySlot(slot.slot, 0, 0, 0);
            }
            slots[index] = slot;
            loadBullet(item, gun, ammo, slots, count - 1);
        });
        gunReloadSoundLoad.setSource(gun.sounds + "/reload_load.ogg");
        gunReloadSoundLoad.play();
    } else {
        stopReloadingShotGun(gun);
    }
}
function stopReloadingShotGun(gun) {
    thisGunItem.extra.putString("ammo", thisGunAmmo);
    thisGunItem.extra.putInt("bullet", thisGunBullet);
    Player.setCarriedItem(thisGunItem.id, thisGunItem.count, thisGunItem.data, thisGunItem.extra);
    gunReloadSoundClose.setSource(gun.sounds + "/reload_close.ogg");
    gunReloadSoundClose.play();
}
function searchGranade(i, gun) {
    var ammo = getAmmo(i.id);
    if (ammo) {
        if (gun.ammo.indexOf(ammo.id) != -1 && ammo.type == AMMO_TYPE_GRANADE) {
            return true;
        }
    }
    return false;
}
function reloadGranade(item, gun) {
    let ammosG = [];
    let gunG;
    let granade;
    if (thisGun.shootingModes.indexOf(SHOOTING_MODE_GRANADE) != -1) {
        gunG = thisGun;
        granade = gunG.granade;
    } else {
        if (thisGunAttachUnderbarrel && thisGunAttachUnderbarrel.specif && thisGunAttachUnderbarrel.specif.granade) {
            gunG = granade = thisGunAttachUnderbarrel.specif.granade;
        }
    }
    if (gunG) {
        ammosG = gunG.ammo;
    }
    for (var i = 0; i < ammosG.length; i++) {
        var ammo = getAmmoByStringID(ammosG[i]);
        if (ammo.type != AMMO_TYPE_GRANADE) {
            continue;
        }
        if (getItemInInventory(searchGranade, 1, gunG)) {
            isReloading = true;
            var b = getSlotsItemInInventory(searchGranade, gunG);
            if (FileTools.isExists(__dir__ + "/sounds/" + granade.sounds + "/reload.ogg")) {
                gunReloadSound.setOnCompletion(function () {
                    isReloading = false;
                    var ammos = getSlotsItemInInventory(searchGranade, gunG);
                    var slots = [], count = c = 0;
                    for (j = 0; j < b.length; j++) {
                        if (b[j].count > granade.count - thisGunGranadeBullet - count) {
                            c = (granade.count - thisGunGranadeBullet - count);
                            Player.setInventorySlot(b[j].slot, b[j].id, b[j].count - c, b[j].data);
                        } else {
                            c = b[j].count;
                            Player.setInventorySlot(b[j].slot, 0, 0, 0);
                        }
                        slots.push(b[j]);
                        count += c;
                        if ((count + thisGunGranadeBullet) >= granade.count) {
                            break;
                        }
                    }
                    thisGunGranadeAmmo = ammo.id;
                    item.extra.putString("ammoG", thisGunGranadeAmmo);
                    HUD.setAmmoName(ammo.gun_name || ammo.name);
                    thisGunGranadeBullet = count + thisGunGranadeBullet;
                    item.extra.putInt("bulletG", thisGunGranadeBullet);
                    HUD.setAmmoCount(thisGunGranadeBullet + "/" + granade.count);
                    Player.setCarriedItem(item.id, item.count, item.data, item.extra);
                });
                gunReloadSound.setSource(granade.sounds + "/reload.ogg");
                gunReloadSound.play();
            } else {
                isReloadingBullet = true;
                var count = 0;
                var slots = [];
                for (var j = 0; j < b.length; j++) {
                    if (b[j].count > (granade.count - thisGunGranadeBullet - count)) {
                        count += (granade.count - thisGunGranadeBullet - count);
                    } else {
                        count += b[j].count;
                    }
                    slots.push(b[j]);
                    if ((count + thisGunGranadeBullet) >= granade.count) {
                        break;
                    }
                }
                gunReloadSoundOpen.setOnCompletion(function () {
                    loadGranade(item, granade, ammo, slots, count);
                });
                gunReloadSoundOpen.setSource(granade.sounds + "/reload_open.ogg");
                gunReloadSoundOpen.play();
            }
            return false;
        }
    }
}
function loadGranade(item, granade, ammo, slots, count) {
    if (count > 0 && isReloadingBullet) {
        var index = slots.findIndex(function (x) {
            return x.count > 0;
        });
        var slot = slots[index];
        gunReloadSoundLoad.setOnCompletion(function () {
            thisGunGranadeBullet++;
            if (thisGunGranadeBullet == 1) {
                thisGunGranadeAmmo = ammo.id;
                HUD.setAmmoName(ammo.gun_name || ammo.name);
            }
            HUD.setAmmoCount(thisGunGranadeBullet + "/" + granade.count);
            if (slot.count > 1) {
                slot.count -= 1;
                Player.setInventorySlot(slot.slot, slot.id, slot.count, slot.data);
            } else {
                Player.setInventorySlot(slot.slot, 0, 0, 0);
            }
            slots[index] = slot;
            loadGranade(item, granade, ammo, slots, count - 1);
        });
        gunReloadSoundLoad.setSource(granade.sounds + "/reload_load.ogg");
        gunReloadSoundLoad.play();
    } else {
        stopReloadingGranade(granade);
    }
}
function stopReloadingGranade(granade) {
    thisGunItem.extra.putString("ammoG", thisGunGranadeAmmo);
    thisGunItem.extra.putInt("bulletG", thisGunGranadeBullet);
    Player.setCarriedItem(thisGunItem.id, thisGunItem.count, thisGunItem.data, thisGunItem.extra);
    gunReloadSoundClose.setSource(granade.sounds + "/reload_close.ogg");
    gunReloadSoundClose.play();
}
function getFovLevel(a) {
    a = DEFAULT_FOV - a;
    if (a < 0) {
        a = 0;
    }
    return a;
}
function validGun(id, c, data) {
    if (isGun(id)) {
        return true;
    } else {
        return false;
    }
}
function validKnife(id) {
    if ([280, 258, 267, 268, 271, 272, 275, 276, 279, 283, 286].indexOf(id) != -1) {
        return true;
    }
    return false;
}
function validGunAttachments(id) {
    let gun = getGun(id);
    if (gun && gun.attachments) {
        return Boolean(gun.attachments.scopes) || Boolean(gun.attachments.underbarrels) || Boolean(gun.attachments.barrels);
    }
    return false;
}
function changeGunAttachments(el, new_i, old_i, c) {
    if (new_i.id == 0) {
        c.setSlot("scope", 0, 0, 0, null);
        c.setSlot("underbarrel", 0, 0, 0, null);
        c.setSlot("barrel", 0, 0, 0, null);
        c.getSlot("scope").setVisibility(false);
        c.getSlot("underbarrel").setVisibility(false);
        c.getSlot("barrel").setVisibility(false);
    } else {
        if (old_i.id == 0) {
            let item;
            if (item = addGunExtra(el)) {
                el.extra = new_i.extra = item.extra;
            }
            let gun = getGun(new_i);
            if (gun.attachments.scopes) {
                c.getSlot("scope").setVisibility(true);
                let attach = new_i.extra.getString("attach_scope", "");
                if (attach) {
                    c.setSlot("scope", ItemID[attach], 1, 0, null);
                }
            }
            if (gun.attachments.underbarrels) {
                c.getSlot("underbarrel").setVisibility(true);
                attach = new_i.extra.getString("attach_underbarrel", "");
                if (attach) {
                    c.setSlot("underbarrel", ItemID[attach], 1, 0, null);
                }
            }
            if (gun.attachments.barrels) {
                c.getSlot("barrel").setVisibility(true);
                attach = new_i.extra.getString("attach_barrel", "");
                if (attach) {
                    c.setSlot("barrel", ItemID[attach], 1, 0, null);
                }
            }
        }
    }
}
Callback.addCallback("DestroyBlockStart", function () {
    if (isGun(Player.getCarriedItem())) {
        Game.prevent();
    }
});

