var Inventory = {container: new GUI.Container(), opened: false, setup: function () {
    Inventory.inventory = new GUI.TabWindow({icon: Textures.get("Backpack"), inventory: {size: GUI.getFloorUnitInPixels(4), textures: {slot: Textures.Slot}}, elements: {"knife": {type: "slot", x: (GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5)) * 2, y: GUI.getUnitsInPixels(20) + (GUI.getUnitsInPixels(2) * GUI.SIZE_SLOT) + GUI.getUnitsInPixels(2.5), scale: GUI.getUnitsInPixels(4), textures: {slot: Textures.SlotKnife}, isValid: validKnife, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.SlotKnife);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
    }}, "helmet": {type: "slot", x: GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5), y: GUI.getUnitsInPixels(20), scale: GUI.getUnitsInPixels(4), textures: {slot: Textures.SlotHelmet}, isValid: validHelmet, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.SlotHelmet);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
        if (i.id != 0) {
            Player.setArmorSlot(0, i.id, 1, i.data, i.extra);
        } else {
            Player.setArmorSlot(0, 0, 0, 0);
        }
    }}, "armor": {type: "slot", x: GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5), y: GUI.getUnitsInPixels(25) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT, scale: GUI.getUnitsInPixels(4), textures: {slot: Textures.SlotArmor}, isValid: validArmor, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.SlotArmor);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
        if (i.id != 0) {
            var _armor = getArmor(i.id);
            Player.setArmorSlot(1, i.id, 1, i.data);
            Player.setArmorSlot(2, ItemID[_armor.id + "_leggings"], 1, i.data);
            Player.setArmorSlot(3, ItemID[_armor.id + "_boots"], 1, i.data);
            if (_armor.type == ARMOR_TYPE_FULLARMOR) {
                var helm = Inventory.container.getSlot("helmet");
                if (helm.id != 0) {
                    helm.removeItem();
                }
                helm.setVisibility(false);
                Player.setArmorSlot(0, ItemID[_armor.id + "_helmet"], 1, i.data);
            }
        } else {
            if (_i.id != 0) {
                var _armor = getArmor(_i.id);
                Player.setArmorSlot(1, 0, 0, 0);
                Player.setArmorSlot(2, 0, 0, 0);
                Player.setArmorSlot(3, 0, 0, 0);
                if (_armor.type == ARMOR_TYPE_FULLARMOR && ItemID[_armor.id + "_helmet"] == Player.getArmorSlot(0).id) {
                    Player.setArmorSlot(0, 0, 0, 0);
                    var helm = Inventory.container.getSlot("helmet");
                    helm.setVisibility(true);
                }
            }
        }
    }}, "gun1": {type: "slot", x: 0, y: GUI.getUnitsInPixels(20), scale: GUI.getUnitsInPixels(4), textures: {slot: Textures.SlotGun}, isValid: validGun, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.SlotGun);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
    }}, "gun2": {type: "slot", x: 0, y: GUI.getUnitsInPixels(25) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT, scale: GUI.getUnitsInPixels(4), textures: {slot: Textures.SlotGun}, isValid: validGun, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.SlotGun);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
    }}, "fastSlotTitle": {type: "text", x: 0, y: GUI.getUnitsInPixels(30) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT * 2, text: {content: "\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u0441\u043b\u043e\u0442\u044b", size: GUI.getUnitsInPixels(24)}}, "fastSlot1": {type: "slot", x: 0, y: GUI.getUnitsInPixels(62) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT * 2, scale: GUI.getUnitsInPixels(4), isValid: setConsumable, textures: {slot: Textures.FastSlot}, clicker: {onClick: unsetConsumable}, showCount: true, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.FastSlot);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
    }}, "fastSlot2": {type: "slot", x: GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5), y: GUI.getUnitsInPixels(62) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT * 2, scale: GUI.getUnitsInPixels(4), isValid: setConsumable, textures: {slot: Textures.FastSlot}, clicker: {onClick: unsetConsumable}, showCount: true, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.FastSlot);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
    }}, "fastSlot3": {type: "slot", x: (GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5)) * 2, y: GUI.getUnitsInPixels(62) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT * 2, scale: GUI.getUnitsInPixels(4), isValid: setConsumable, textures: {slot: Textures.FastSlot}, clicker: {onClick: unsetConsumable}, showCount: true, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.FastSlot);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
    }}, "ammo": {type: "slot", x: (GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5)) * 5, y: GUI.getUnitsInPixels(20), textures: {slot: Textures.SlotAmmo}, isValid: validAmmo, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.SlotAmmo);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
    }}, "bullets": {type: "slot", x: (GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5)) * 6, y: GUI.getUnitsInPixels(20), textures: {slot: Textures.SlotBullet}, valid: validBullet, onChange: function (s, i, _i) {
        if (i.id == 0 && _i.id != 0) {
            s.setSlotTexture(Textures.SlotBullet);
        } else {
            if (i.id != 0 && _i.id == 0) {
                s.setSlotTexture(Textures.Slot);
            }
        }
    }}, "loadBullets": {type: "button", text: {content: "\u0417\u0430\u0440\u044f\u0434\u0438\u0442\u044c", size: GUI.getUnitsInPixels(24)}, x: (GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5)) * 5, padding: GUI.getUnitsInPixels(15), y: GUI.getUnitsInPixels(25) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT, clicker: {onClick: function (c, e) {
        let ammo = c.getSlot("ammo");
        let bullets = c.getSlot("bullets");
        let count = 0;
        if (ammo.data > 0 && bullets.id) {
            if (bullets.count > ammo.data) {
                count = ammo.data;
            } else {
                count = bullets.count;
            }
            c.setSlot("ammo", ammo.id, 1, ammo.data - count, null);
            c.setSlot("bullets", bullets.id, bullets.count - count, 0, null);
        }
    }}}, "unloadSlot1": {type: "slot", x: (GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5)) * 5, y: GUI.getUnitsInPixels(90) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT, textures: {slot: Textures.Slot}}, "unloadSlot2": {type: "slot", x: (GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5)) * 6, y: GUI.getUnitsInPixels(90) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT, textures: {slot: Textures.Slot}}, "unloadSlot3": {type: "slot", x: (GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5)) * 7, y: GUI.getUnitsInPixels(90) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT, textures: {slot: Textures.Slot}}, "unloadItems": {type: "button", text: {content: "\u0412\u044b\u0433\u0440\u0443\u0437\u0438\u0442\u044c", size: GUI.getUnitsInPixels(24)}, padding: GUI.getUnitsInPixels(15), x: (GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT + GUI.getUnitsInPixels(5)) * 5, y: GUI.getUnitsInPixels(95) + GUI.getUnitsInPixels(4) * GUI.SIZE_SLOT * 2, clicker: {onClick: function (c, e) {
        let vector = Entity.getLookVector(PLAYER_ENT);
        let position = Player.getPosition();
        position.x += vector.x * 2.8;
        position.z += vector.z * 2.8;
        for (let i = 1; i <= 3; i++) {
            let slot = c.getSlot("unloadSlot" + i);
            if (slot.id != 0) {
                World.dropItem(position.x, position.y, position.z, slot.id, slot.count, slot.data, slot.extra);
                c.clearSlot("unloadSlot" + i);
            }
        }
    }}}}});
    let extra = new ItemExtraData(gunExtra);
    extra.putString("attach_scope", "pso1");
    extra.putString("ammo", "ammo_54539_45");
    Inventory.mods = new GUI.TabWindow({icon: {id: ItemID["akm74"], extra: extra}, inventory: {size: GUI.getFloorUnitInPixels(4), textures: {slot: Textures.Slot}}, elements: {"scope": {type: "slot", y: 0, x: 10 + GUI.getUnitsInPixels(64), textures: {slot: Textures.SlotScope}, valid: validScope, change: changeScope, visible: false}, "barrel": {type: "slot", y: 10 + GUI.getUnitsInPixels(64), x: 0, textures: {slot: Textures.Slot}, visible: false}, "attach_gun": {type: "slot", x: 10 + GUI.getUnitsInPixels(64), y: 10 + GUI.getUnitsInPixels(64), textures: {slot: Textures.SlotGun}, valid: validGunAttachments, change: changeGunAttachments}, "underbarrel": {type: "slot", x: 10 + GUI.getUnitsInPixels(64), y: (10 + GUI.getUnitsInPixels(64)) * 2, textures: {slot: Textures.SlotUnderbarrel}, valid: validUnderbarrel, change: changeUnderbarrel, visible: false}}});
    Inventory.window = new GUI.TabsWindow({onClickExitButton: Inventory._close, sizeTab: GUI.getUnitsInPixels(80), padding: Textures.Window.padding, texture: {window: Textures.Window, tabs: Textures.Tabs}, tabs: [Inventory.inventory, Inventory.mods]});
}, window: null, inventory: null, mods: null, recountConsumables: function () {
    for (let i = 1; i <= 3; i++) {
        let slot = Inventory.container.getSlot("fastSlot" + i);
        if (slot.id > 0) {
            Inventory.container.setSlot("fastSlot" + i, slot.id, getCountConsumable(slot.id), slot.data, slot.extra);
        }
    }
}, openWin: function (window) {
    this.container.open(window);
}, open: function () {
    Inventory.opened = true;
    if (HUD.selectSlot) {
        Player.setCarriedItem(ItemID["transparent"], 1, 0);
    }
    GunHUD.close();
    this.openWin(this.window);
}, _close: function () {
    Inventory.opened = false;
    Inventory.close();
    if (HUD.selectSlot) {
        let slot = Inventory.container.getSlot(HUD.selectSlot);
        Player.setCarriedItem(slot.id, slot.count, slot.data, slot.extra);
    } else {
        Callback.invokeCallback("ChangeCarriedItem", Player.getCarriedItem(), {id: 0, data: 0, count: 0, extra: null}, 0, 0);
    }
    HUD.open();
}, close: function () {
    this.container.close();
}};
var HUD = {selectSlot: null, fast_slots_window: new GUI.Overlay({touchable: true, location: {x: 5 * gui_scale, y: 5 * gui_scale, gravity: GUI.Gravity.TOP | GUI.Gravity.LEFT}, elements: {0: {type: "image", texture: Textures.FastSlotBar, x: 0, y: 0}, "fastSlot1": {type: "slot", showCount: true, x: 5 * 4 * gui_scale, y: 8 * 4 * gui_scale, size: 4 * gui_scale, textures: {slot: new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)}, clicker: {onClick: useConsumable}}, "fastSlot2": {type: "slot", showCount: true, x: 26 * 4 * gui_scale, y: 8 * 4 * gui_scale, size: 4 * gui_scale, textures: {slot: new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)}, clicker: {onClick: useConsumable}}, "fastSlot3": {type: "slot", showCount: true, x: 47 * 4 * gui_scale, y: 8 * 4 * gui_scale, size: 4 * gui_scale, textures: {slot: new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)}, clicker: {onClick: useConsumable}}, "invButton": {type: "image", texture: Textures.InvButton, x: 5 * 4 * gui_scale, y: 29 * 4 * gui_scale, clicker: {onClick: function (c) {
    Player.resetFov();
    HUD.close();
    Inventory.open();
}}}}}), _selectSlot: function (name) {
    HUD.selectSlot = name;
    let item = Inventory.container.getSlotStorage(name);
    HUD.healthBar.getElement("gun").setSlot(item);
    Player.setCarriedItem(item.id, item.count, item.data, item.extra);
}, emptySlots: function () {
    return Inventory.container.getSlotStorage("gun1").id == 0 && Inventory.container.getSlotStorage("gun2").id == 0 && Inventory.container.getSlotStorage("knife").id == 0;
}, selectNextSlot: function (c, e) {
    if (HUD.emptySlots()) {
        return false;
    }
    switch (HUD.selectSlot) {
      case "gun1":
        HUD.selectSlot = "gun2";
        break;
      case "gun2":
        HUD.selectSlot = "knife";
        break;
      case "knife":
      default:
        HUD.selectSlot = "gun1";
        break;
    }
    let item = Inventory.container.getSlotStorage(HUD.selectSlot);
    if (item.id == 0) {
        return HUD.selectNextSlot(c, e);
    }
    e.setSlot(item);
    Player.setCarriedItem(item.id, item.count, item.data, item.extra);
}, selectPrevSlot: function (c, e) {
    if (HUD.emptySlots()) {
        return false;
    }
    switch (HUD.selectSlot) {
      case "gun1":
      default:
        HUD.selectSlot = "knife";
        break;
      case "gun2":
        HUD.selectSlot = "gun1";
        break;
      case "knife":
        HUD.selectSlot = "gun2";
        break;
    }
    let item = Inventory.container.getSlotStorage(HUD.selectSlot);
    if (item.id == 0) {
        return HUD.selectNextSlot(c, e);
    }
    e.setSlot(item);
    Player.setCarriedItem(item.id, item.count, item.data, item.extra);
}, c: new GUI.Container(), icons: new GUI.Overlay({location: {x: 15 * gui_scale, y: 163 * gui_scale, gravity: GUI.Gravity.TOP | GUI.Gravity.LEFT}, elements: {"hunger": {type: "image", texture: Textures.LowerHunger, visible: false}}}), cc: new GUI.Container(), can_opened: false, blockOpen: function () {
    if (!this.can_opened) {
        return;
    }
    this.can_opened = false;
}, unblockOpen: function () {
    if (this.can_opened) {
        return;
    }
    this.can_opened = true;
}, canOpen: function () {
    return this.can_opened;
}, setAmmoName: function (text) {
    if (!text) {
        text = "";
    }
    this.healthBar.getElement("ammosType").setText(text);
}, setAmmoCount: function (text) {
    if (!text) {
        text = "";
    }
    this.healthBar.getElement("ammos").setText(text);
}, setAmmoTextByItamAndGun: function (item, gun) {
    if (item.extra.getBoolean("granade", false)) {
        var ammo = getAmmoByStringID(item.extra.getString("ammoG", null));
        let granade;
        if (gun.shootingModes.indexOf(SHOOTING_MODE_GRANADE) != -1) {
            granade = gun.granade;
        } else {
            if (thisGunAttachUnderbarrel && thisGunAttachUnderbarrel.specif && thisGunAttachUnderbarrel.specif.granade) {
                granade = thisGunAttachUnderbarrel.specif.granade;
            }
        }
        if (ammo != false) {
            HUD.setAmmoCount(item.extra.getInt("bulletG", 0) + "/" + granade.count);
            HUD.setAmmoName(ammo.gun_name || ammo.name);
        } else {
            HUD.setAmmoName();
            HUD.setAmmoCount();
        }
    } else {
        var ammo = getAmmoByStringID(item.extra.getString("ammo", null));
        if (ammo != false) {
            if (ammo.type == AMMO_TYPE_BULLET) {
                HUD.setAmmoCount(item.extra.getInt("bullet", 0) + "/" + gun.bullet.count);
                HUD.setAmmoName(ammo.gun_name || ammo.name);
            } else {
                HUD.setAmmoCount(item.extra.getInt("bullet", 0) + "/" + ammo.count);
                HUD.setAmmoName(ammo.gun_name || ammo.name);
            }
        } else {
            HUD.setAmmoName();
            HUD.setAmmoCount();
        }
    }
}, setHealth: function (value) {
    this.healthBar.getElement("health").setValue(value);
}, opened: false, isOpen: function () {
    return this.opened;
}, open: function () {
    if (!this.canOpen()) {
        return;
    }
    if (this.isOpen()) {
        return;
    }
    Inventory.openWin(this.fast_slots_window);
    HUD.c.open(HUD.healthBar);
    HUD.cc.open(HUD.icons);
    this.opened = true;
}, close: function () {
    if (!this.isOpen()) {
        return;
    }
    Inventory.close();
    HUD.c.close();
    HUD.cc.close();
    this.opened = false;
}};
HUD.healthBar = new GUI.Overlay({touchable: true, location: {x: 5 * gui_scale, y: 5 * gui_scale, gravity: GUI.Gravity.TOP | GUI.Gravity.RIGHT}, elements: {0: {type: "image", texture: Textures.HealthBar, x: 0, y: 0}, "health": {type: "scale", x: 44 * gui_scale, y: 24 * gui_scale, texture: {scale: Textures.HealthScale}, maxValue: 20, value: 10, dir: GUI.Direction.RIGHT}, "ammos": {type: "text", x: 64 * gui_scale, y: 96 * gui_scale, text: {content: "     ", size: 12 * gui_scale}}, "ammosType": {type: "text", x: 48 * gui_scale, y: 64 * gui_scale, text: {content: "       ", size: 12 * gui_scale}}, "gun": {type: "slot", x: 140 * gui_scale, y: 60 * gui_scale, size: 4 * gui_scale, textures: {slot: new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)}, clicker: {onClick: HUD.selectNextSlot, setOnLongClick: HUD.selectPrevSlot}}}});
var GunHUD = {opened: false, isOpened: function () {
    return this.opened;
}, open: function (item, gun) {
    if (!HUD.canOpen()) {
        return;
    }
    if (this.opened) {
        return;
    }
    this.opened = true;
    this.Aim.open();
    this.Fire.open();
    this.Reload.open();
    this.Mode.open(gun);
    this.Crosshair.open();
    this.reload(item, gun);
}, reload: function (item, gun) {
    thisGunItem = item;
    thisGunRate = getRate(gun.rate);
    this.Fire.reload(item, gun);
    this.Reload.reload(item, gun);
    this.Aim.reload(item, gun);
    if (gun.shootingModes.length > 1 || (thisGunAttachUnderbarrel && thisGunAttachUnderbarrel.specif && thisGunAttachUnderbarrel.specif.granade)) {
        if (!this.Mode.c.isOpened()) {
            this.Mode.open(gun);
        }
        this.Mode.reload(item, gun);
    } else {
        if (this.Mode.c.isOpened()) {
            this.Mode.close();
        }
    }
    HUD.setAmmoTextByItamAndGun(item, gun);
}, close: function () {
    if (!this.opened) {
        return;
    }
    this.Aim.close();
    this.Fire.close();
    this.Reload.close();
    this.Mode.close();
    this.Crosshair.close();
    this.opened = false;
    HUD.setAmmoName();
    HUD.setAmmoCount();
}, reopen: function (item, gun) {
    this.close();
    this.open(item, gun);
}, Fire: {container: new GUI.Container(), window: new GUI.Overlay({touchable: true, location: {gravity: GUI.Gravity.CENTER | GUI.Gravity.LEFT}, elements: {"0": {type: "image_button", texture: Textures.FireButton}}}), open: function () {
    this.container.open(this.window);
}, close: function () {
    this.container.close();
}, reload: function (item, gun) {
    gunEmptySound.setSource(gun.sounds + "/empty.ogg");
    if (thisGunGranadeMode) {
        if (gun.shootingModes.indexOf(SHOOTING_MODE_GRANADE) != -1) {
            granade = gun.granade;
        } else {
            if (gun.granade && gun.granade.sounds) {
                gunEmptySound.setSource(gun.granade.sounds + "/empty.ogg");
            } else {
                if (thisGunAttachUnderbarrel && thisGunAttachUnderbarrel.specif && thisGunAttachUnderbarrel.specif.granade) {
                    gunEmptySound.setSource(thisGunAttachUnderbarrel.specif.granade.sounds + "/empty.ogg");
                } else {
                    Logger.Warning("gun.granade.sounds is undefined in " + gun.name + "(SID:" + gun.id + ")");
                }
            }
        }
    }
    this.window.getElement("0").setOnTouch(function (c, e, s) {
        var event = s.getActionMasked();
        if (event == android.view.MotionEvent.ACTION_CANCEL || event == android.view.MotionEvent.ACTION_UP) {
            emptyGunNotice = false;
            if (shooting) {
                shooting = false;
            }
        } else {
            if (!shooting && countShots == 0 && currentShotTicks <= 0) {
                if (isReloadingBullet) {
                    isReloadingBullet = false;
                } else {
                    if (!isReloading) {
                        if ((!thisGunGranadeMode && thisGunBullet < 1) || (thisGunGranadeMode && thisGunGranadeBullet < 1)) {
                            if (emptyGunNotice == false) {
                                emptyGunNotice = true;
                                gunEmptySound.play();
                            }
                            return;
                        }
                        shooting = true;
                        if (thisGunGranadeMode == true) {
                            shotTickEvent = shotGranade;
                            countShots = 1;
                        } else {
                            countShots = (thisGunMode == SHOOTING_MODE_AUTO) ? 1 : thisGunMode;
                            shotTickEvent = shot;
                        }
                    }
                }
            }
        }
    });
}}, Aim: {container: new GUI.Container(), window: new GUI.Overlay({touchable: true, location: {y: 90, gravity: GUI.Gravity.CENTER | GUI.Gravity.RIGHT}, elements: {"0": {type: "image", texture: Textures.AimButton, clicker: {onClick: function () {
    alert("aim");
}}}}}), open: function () {
    this.container.open(this.window);
}, close: function () {
    this.container.close();
}, reload: function (item, gun) {
    let fov = getFovLevel(gun.fov.level);
    let fov_link = gun.fov.link || false;
    if (thisGunAttachScope && thisGunAttachScope.specif && thisGunAttachScope.specif.fov) {
        fov_link = thisGunAttachScope.specif.fov.link || false;
        fov = getFovLevel(thisGunAttachScope.specif.fov.level);
    }
    if (fov_link) {
        this.window.getElement("0").setOnClick(function () {
            if (isAiming == true) {
                Player.resetFov();
                isAimingGUI = false;
                GunHUD.Crosshair.reset(true);
                isAiming = false;
            } else {
                Player.setFov(fov);
                isAimingGUI = true;
                GunHUD.Crosshair.set(fov_link);
                GunHUD.reopen(item, gun);
                isAiming = true;
            }
        });
    } else {
        this.window.getElement("0").setOnClick(function () {
            if (isAiming == true) {
                Player.resetFov();
                isAiming = false;
            } else {
                Player.setFov(fov);
                isAiming = true;
            }
        });
    }
}}, Reload: {container: new GUI.Container(), window: new GUI.Overlay({touchable: true, location: {y: -90, gravity: GUI.Gravity.CENTER | GUI.Gravity.RIGHT}, elements: {"0": {type: "image", texture: Textures.ReloadButton}}}), open: function () {
    this.container.open(this.window);
}, close: function () {
    this.container.close();
}, reload: function (item, gun) {
    this.window.getElement("0").setOnClick(function () {
        if (isReloading == true) {
            return;
        }
        if (thisGunGranadeMode) {
            reloadGranade(item, gun);
        } else {
            reload(item, gun);
        }
    });
}}, Mode: {c: new GUI.Container(), w: new GUI.Overlay({touchable: true, location: {y: -90 - (10 * gui_scale), x: 90 * gui_scale, gravity: GUI.Gravity.CENTER | GUI.Gravity.RIGHT}, elements: {"0": {type: "image", texture: Textures.get("ModeButton")}, "text": {type: "text", x: 20 * gui_scale, y: 23 * gui_scale, text: {content: "G", size: 35 * gui_scale}}}}), open: function (gun) {
    if (gun.shootingModes.length > 1 || (thisGunAttachUnderbarrel && thisGunAttachUnderbarrel.specif && thisGunAttachUnderbarrel.specif.granade)) {
        this.c.open(this.w);
    }
}, close: function () {
    this.c.close();
}, setText: function (item) {
    if (thisGunGranadeMode) {
        this.w.getElement("text").setText("G");
    } else {
        if (thisGunMode == SHOOTING_MODE_AUTO) {
            this.w.getElement("text").setText("A");
        } else {
            this.w.getElement("text").setText(thisGunMode);
        }
    }
}, reload: function (item, gun) {
    this.setText(item);
    let attached = false;
    var hasGranadeMode = (gun.shootingModes.indexOf(SHOOTING_MODE_GRANADE) != -1);
    if (thisGunAttachUnderbarrel && thisGunAttachUnderbarrel.specif && !hasGranadeMode) {
        hasGranadeMode = Boolean(thisGunAttachUnderbarrel.specif.granade);
        attached = true;
    }
    if (hasGranadeMode) {
        if (attached) {
            gunSwitchSound.setSource(thisGunAttachUnderbarrel.specif.granade.sounds + "/switch.ogg");
        } else {
            gunSwitchSound.setSource(gun.granade.sounds + "/switch.ogg");
        }
        this.w.getElement("0").setOnLongClick(function () {
            thisGunGranadeMode = !thisGunGranadeMode;
            item.extra.putBoolean("granade", thisGunGranadeMode);
            gunSwitchSound.play();
            Player.setCarriedItem(item.id, item.count, item.data, item.extra);
            GunHUD.Mode.setText(item);
            HUD.setAmmoTextByItamAndGun(item, gun);
        });
    } else {
        this.w.getElement("0").setOnLongClick(function () {
        });
    }
    var modCount = hasGranadeMode && !attached ? gun.shootingModes.length - 1 : gun.shootingModes.length;
    if (modCount > 1) {
        this.w.getElement("0").setOnClick(function () {
            if (thisGunGranadeMode) {
                return;
            }
            var index = gun.shootingModes.indexOf(thisGunMode);
            do {
                if (index == gun.shootingModes.length - 1) {
                    index = 0;
                } else {
                    index++;
                }
            } while (gun.shootingModes[index] == SHOOTING_MODE_GRANADE);
            thisGunMode = gun.shootingModes[index];
            item.extra.putInt("mode", thisGunMode);
            Player.setCarriedItem(item.id, item.count, item.data, item.extra);
            GunHUD.Mode.setText(item);
        });
    } else {
        this.w.getElement("0").setOnClick(function () {
        });
    }
}}, Crosshair: {container: new GUI.Container(), window: new GUI.Overlay({location: {gravity: GUI.Gravity.CENTER, height: GUI.Size.WRAP_CONTENT, width: GUI.Size.WRAP_CONTENT}, elements: {0: {type: "image", texture: Textures.Chrosshair}}}), open: function () {
    this.container.open(this.window);
}, close: function () {
    if (!isAimingGUI) {
        GUI.run(function () {
            GunHUD.Crosshair.reset();
        });
    }
    this.container.close();
}, set: function (name) {
    if (typeof (name) != "object") {
        name = {name: name};
    }
    name.name = "crosshair/" + name.name + ".png";
    var a = Textures.Chrosshair_UI;
    for (var i in name) {
        a[i] = name[i];
    }
    this.window.setSize(GUI.Size.HEIGHT);
    this.window.getElement("0").setSource(a);
    this.window.animation = "Animation_Translucent";
}, reset: function (a) {
    this.window.animation = null;
    this.window.setSize(GUI.Size.WRAP_CONTENT);
    this.window.getElement("0").setSource(Textures.Chrosshair);
    if (a == true) {
        this.close();
        this.open();
    }
}}};
Callback.addCallback("ChangeCarriedItem", function (nI, oI) {
    if (Inventory.opened) {
        return;
    }
    if (thisGun && nI.extra) {
        Logger.Log(thisGun.id, "SELECT GUN");
        if (!GunHUD.isOpened()) {
            GunHUD.open(nI, thisGun);
        } else {
            GunHUD.reload(nI, thisGun);
        }
        GunHUD.Crosshair.reset(true);
    } else {
        GunHUD.close();
    }
});
Callback.addCallback("NativeGuiChanged", function (a) {
    if (["hud_screen", "in_game_play_screen"].indexOf(a) == -1) {
        GunHUD.close();
        HUD.blockOpen();
        HUD.close();
    } else {
        HUD.unblockOpen();
        HUD.open();
        Inventory.recountConsumables();
    }
});
Callback.addCallback("AppSuspended", function () {
    GunHUD.close();
    HUD.close();
    Inventory.close();
    HUD.blockOpen();
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
});
Callback.addCallback("PostLoaded", function () {
    Inventory.setup();
});
Callback.addCallback("ChangeCarriedItem", function (nI, oI, nS, oS) {
    if (HUD.selectSlot && !Inventory.opened) {
        if (nS != oS) {
            HUD.selectSlot = null;
            Player.setInventorySlot(oS, 0, 0, 0);
            HUD.healthBar.getElement("gun").clearSlot();
        } else {
        }
    }
});
Callback.addCallback("ChangeItemInInventory", function (slotId, item) {
    for (let i = 1; i <= 3; i++) {
        let slot = Inventory.container.getSlot("fastSlot" + i);
        if (slot.id == item.id) {
            Inventory.recountConsumables();
        }
    }
});
Saver.addSavesScope("Stalker", function read(scope) {
    if (scope) {
        Inventory.container.read(scope.inventory || {});
        HUD._selectSlot(scope.selectSlot || null);
    } else {
        Inventory.container.read({});
    }
}, function save() {
    return {inventory: Inventory.container.save(), selectSlot: HUD.selectSlot};
});

