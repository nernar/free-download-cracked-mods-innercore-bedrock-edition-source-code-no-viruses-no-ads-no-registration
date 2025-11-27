var AnimationComponet = null;
ModAPI.addAPICallback("AnimationComponet", function (api) {
    AnimationComponet = api;
});
var Damage = {}, Explodes = {}, Fires = {}, AP = {}, Attacker = {}, Speed = {}, PlayerItemManagerContainer = {}, PlayerContainer = {};
// id: [brokem probability, broken reduce]
var BlockHitData = {
    20: [0.9, 0.7],
    64: [0.2, 0.1],
    241: [0.9, 0.7],
    193: [0.2, 0.1],
    194: [0.2, 0.1],
    195: [0.2, 0.1],
    196: [0.2, 0.1],
    197: [0.2, 0.1],
    183: [0.2, 0.1],
    184: [0.2, 0.1],
    185: [0.2, 0.1],
    186: [0.2, 0.1],
    187: [0.2, 0.1],
    71: [0.08, 0.1],
    167: [0.08, 0.1],
    89: [0.8, 0.5],
    91: [0.8, 0.5],
    102: [0.99, 0.9],
    160: [0.99, 0.9],
    123: [0.8, 0.5],
    124: [0.8, 0.5],
    138: [0.8, 0.5],
    169: [0.8, 0.5],
    65: [0.7, 0.9],
    178: [0.9, 0.5],
    151: [0.9, 0.5],
    149: [0.9, 0.6],
    150: [0.9, 0.6],
    143: [0.9, 0.6],
    127: [0.8, 0.6],
    103: [0.8, 0.5],
    140: [0.7, 0.4],
    107: [0.2, 0.1],
    101: [0.08, 0.9],
    92: [1, 0.8],
    93: [0.9, 0.6],
    94: [0.9, 0.6],
    96: [0.2, 0.1],
    208: [0.9, 0.7],
    83: [0.7, 0.6],
    418: [0.7, 0.6],
    419: [0.9, 0.9],
    400: [0.2, 0.1],
    401: [0.2, 0.1],
    402: [0.2, 0.1],
    403: [0.2, 0.1],
    404: [0.2, 0.1],
    414: [1, 1],
    410: [0.8, 0.5],
    517: [0.9, 0.6],
    518: [0.9, 0.6],
    513: [0.2, 0.1],
    514: [0.2, 0.1],
    117: [0.7, 0.4],
    395: [0.9, 0.6],
    396: [0.9, 0.6],
    397: [0.9, 0.6],
    398: [0.9, 0.6],
    399: [0.9, 0.6],
    77: [0.9, 0.6]
};
var HumanoidData = [44, 116, 32,
    48, 45, 118,
    57, 115, 15,
    46, 34, 63,
    36, 114, 47,
    104, 110];
var MaxUseDuration = 200000;
var UpdateAnimationTimeout = 20;
Translation.addTranslation("reloading...", {
    "zh": "换弹中..."
});
Translation.addTranslation("changing...", {
    "zh": "切换中..."
});
Translation.addTranslation("insurance", {
    "zh": "保险"
});
Translation.addTranslation("auto", {
    "zh": "自动"
});
Translation.addTranslation("semi-auto", {
    "zh": "半自动"
});
Translation.addTranslation("-round burst", {
    "zh": "连发"
});
Translation.addTranslation("Magazine reloader", {
    "zh": "弹匣填装器"
});
var UIScale = __config__.getFloat("UI_scale") || 1;
UIScale /= 5;
var Guncraft;
(function (Guncraft) {
    var GunType;
    (function (GunType) {
        GunType[GunType["RIFLE"] = 0] = "RIFLE";
        GunType[GunType["SUBMACHINEGUN"] = 1] = "SUBMACHINEGUN";
        GunType[GunType["PISTOL"] = 2] = "PISTOL";
        GunType[GunType["MACHINEGUN"] = 3] = "MACHINEGUN";
        GunType[GunType["ASSAULTRIFLE"] = 4] = "ASSAULTRIFLE";
        GunType[GunType["SNIPERRIFLE"] = 5] = "SNIPERRIFLE";
        GunType[GunType["SHOTGUN"] = 7] = "SHOTGUN";
        GunType[GunType["DMR"] = 9] = "DMR";
        GunType[GunType["ROCKETLAUNCHER"] = 10] = "ROCKETLAUNCHER";
        GunType[GunType["GRENADELAUNCHER"] = 11] = "GRENADELAUNCHER";
        GunType[GunType["FLAMETHROWER"] = 12] = "FLAMETHROWER";
    })(GunType = Guncraft.GunType || (Guncraft.GunType = {}));
    var ArmorLevel;
    (function (ArmorLevel) {
        ArmorLevel[ArmorLevel["NIJI"] = 1] = "NIJI";
        ArmorLevel[ArmorLevel["NIJII"] = 2] = "NIJII";
        ArmorLevel[ArmorLevel["NIJIIIA"] = 3] = "NIJIIIA";
        ArmorLevel[ArmorLevel["NIJIII"] = 4] = "NIJIII";
        ArmorLevel[ArmorLevel["NIJIV"] = 5] = "NIJIV";
    })(ArmorLevel = Guncraft.ArmorLevel || (Guncraft.ArmorLevel = {}));
    var BulletEffect;
    (function (BulletEffect) {
        BulletEffect[BulletEffect["NORMAL"] = 0] = "NORMAL";
        BulletEffect[BulletEffect["INCENDIARY"] = 1] = "INCENDIARY";
        BulletEffect[BulletEffect["TRACER"] = 2] = "TRACER";
        BulletEffect[BulletEffect["EXPLODE"] = 3] = "EXPLODE";
        BulletEffect[BulletEffect["INCENDIARYTRACER"] = 4] = "INCENDIARYTRACER";
        BulletEffect[BulletEffect["SUBSONIC"] = 5] = "SUBSONIC";
    })(BulletEffect = Guncraft.BulletEffect || (Guncraft.BulletEffect = {}));
    var gunData = {};
    var bulletData = {};
    var attachmentData = {};
    var magData = {};
    var armorData = {};
    Guncraft.emptyAttachment = {
        type: '',
        fov: 0,
        accuracyCoefficient: 0,
        recoilCoefficient: 0,
        sound: null,
        secMode: false,
        secModeParam: null
    };
    function createGun(id, name, param, texture) {
        IDRegistry.genItemID(id);
        Item.createItem(id, name, texture || {
            name: id,
            meta: 0
        }, {
            isTech: true,
            stack: 1
        });
        ItemModel.getFor(ItemID[id], 0).setHandModel(new RenderMesh());
        ItemModel.getFor(ItemID[id], 1).setHandModel(new RenderMesh());
        var extra = new ItemExtraData(), tag = new NBT.CompoundTag();
        tag.putListTag("magArr", new NBT.ListTag());
        // @ts-ignore
        extra.setCompoundTag(tag);
        extra.putString("mag", null);
        extra.putString("bulletParent", null);
        extra.putInt("mode", 0);
        extra.putInt("currentBulletCount", 0);
        extra.putInt("maxBulletCount", 0);
        extra.putInt("barrel", 0);
        extra.putInt("magID", 0);
        extra.putInt("reargrip", 0);
        extra.putInt("laser", 0);
        extra.putInt("optic", 0);
        extra.putInt("stock", 0);
        extra.putInt("underbarrel", 0);
        extra.putInt("muzzle", 0);
        extra.putInt("fov", 0);
        extra.putFloat("accuracyCoefficient", 1);
        extra.putFloat("recoilCoefficient", 1);
        extra.putBoolean("secMode", false);
        extra.putString("newSound", null);
        Item.addToCreative(ItemID[id], 1, 0, extra);
        Item.setCategory(ItemID[id], 3);
        Item.setMaxUseDuration(ItemID[id], MaxUseDuration);
        param.mode = param.mode || [2];
        param.damCoefficient = param.damCoefficient || 1;
        param.APCoefficient = param.damCoefficient || 1;
        param.speedCoefficient = param.damCoefficient || 1;
        if (param.type == GunType.GRENADELAUNCHER)
            param.bulletType = param.bulletType || Native.EntityType.PRIMED_TNT;
        else if (param.type == GunType.FLAMETHROWER)
            param.bulletType = param.bulletType || Native.EntityType.SMALL_FIREBALL;
        else
            param.bulletType = param.bulletType || Native.EntityType.ARROW;
        gunData[id] = param;
    }
    Guncraft.createGun = createGun;
    function createMag(id, name, param, texture) {
        IDRegistry.genItemID(id);
        Item.createItem(id, name, texture || {
            name: id,
            meta: 0
        }, {
            isTech: true,
            stack: 1
        });
        var extra = new ItemExtraData();
        extra.putInt("maxBulletCount", 0);
        extra.putInt("currentBulletCount", 0);
        extra.putString("bulletParent", null);
        Item.setCategory(ItemID[id], 3);
        Item.setMaxDamage(ItemID[id], 100);
        Item.addToCreative(ItemID[id], 1, 101, extra);
        Item.setMaxUseDuration(ItemID[id], 50);
        Item.registerNameOverrideFunction(id, function (item, name) {
            return name + "\n§7" + item.extra.getInt("currentBulletCount") + "/" + item.extra.getInt("maxBulletCount") + " (" + item.extra.getString("bulletParent") + ")";
        });
        magData[id] = param;
    }
    Guncraft.createMag = createMag;
    function createBullet(id, name, stack, param, texture) {
        IDRegistry.genItemID(id);
        Item.createItem(id, name, texture || {
            name: param.parent,
            meta: 0
        }, {
            isTech: false,
            stack: stack
        });
        bulletData[id] = param;
    }
    Guncraft.createBullet = createBullet;
    function createAttachment(id, name, param, texture) {
        IDRegistry.genItemID(id);
        Item.createItem(id, name, texture || {
            name: id,
            meta: 0
        }, {
            isTech: false,
            stack: 1
        });
        Item.setCategory(ItemID[id], 3);
        Item.setMaxUseDuration(ItemID[id], 20);
        attachmentData[id] = param;
    }
    Guncraft.createAttachment = createAttachment;
    function createArmor(id, name, param, param_1, texture) {
        IDRegistry.genItemID(id);
        Item.createArmorItem(id, name, texture || {
            name: id,
            meta: 0
        }, {
            type: param.type,
            texture: "armor/blank",
            knockbackResist: param_1.knockbackResist,
            durability: param_1.durability,
            armor: param_1.armor
        });
        armorData[id] = param;
    }
    Guncraft.createArmor = createArmor;
    function getArmorData(id) {
        return armorData.hasOwnProperty(id) ? armorData[id] : null;
    }
    Guncraft.getArmorData = getArmorData;
    function getGunData(id) {
        return gunData.hasOwnProperty(id) ? gunData[id] : null;
    }
    Guncraft.getGunData = getGunData;
    function getMagData(id) {
        return magData.hasOwnProperty(id) ? magData[id] : null;
    }
    Guncraft.getMagData = getMagData;
    function getBulletData(id) {
        return bulletData.hasOwnProperty(id) ? bulletData[id] : null;
    }
    Guncraft.getBulletData = getBulletData;
    function getAttachmentData(id) {
        return attachmentData.hasOwnProperty(id) ? attachmentData[id] : null;
    }
    Guncraft.getAttachmentData = getAttachmentData;
})(Guncraft || (Guncraft = {}));
var GuncraftUtil;
(function (GuncraftUtil) {
    function getEntityType(entityID) {
        var entityType = Entity.getType(entityID);
        if (entityType)
            return entityType;
        else
            return Entity.getCompoundTag(entityID).getString("identifier");
    }
    GuncraftUtil.getEntityType = getEntityType;
    function getInventorySlotCompoundTag(entityID, slotIndex) {
        var tag = Entity.getCompoundTag(entityID).getListTag("Inventory")
            .getCompoundTag(slotIndex).getCompoundTag("tag");
        tag.remove("$mod");
        return tag;
    }
    GuncraftUtil.getInventorySlotCompoundTag = getInventorySlotCompoundTag;
    function playSound(pos, name) {
        Commands.execAt("playsound " + name + " @a ~ ~ ~ 10.0", pos.x, pos.y, pos.z);
    }
    GuncraftUtil.playSound = playSound;
    function delay(f, timeout, param) {
        var delay = new java.lang.Thread(new java.lang.Runnable({
            run: function () {
                // @ts-ignore
                delay.sleep(timeout * 1000);
                f(param);
            }
        }));
        delay.start();
    }
    GuncraftUtil.delay = delay;
})(GuncraftUtil || (GuncraftUtil = {}));
function DamageCalculate(raw, ap, y, entityID) {
    var dY = y - Entity.getPosition(entityID).y, type = GuncraftUtil.getEntityType(entityID);
    // @ts-ignore
    if (HumanoidData.indexOf(type) == -1)
        return raw;
    // player
    if (type == 63)
        dY++;
    if (dY < 0.75) {
        var armor = Entity.getArmorSlot(entityID, 2);
        if (armor.id) {
            var armorData = Guncraft.getArmorData(IDRegistry.getNameByID(armor.id));
            Entity.setArmorSlot(entityID, 2, armor.id, armor.count, armor.data + raw / 5, armor.extra);
            if (armorData && armorData.level >= ap)
                raw = 0;
        }
        else
            raw *= 0.8;
    }
    else if (dY < 1.5) {
        var armor = Entity.getArmorSlot(entityID, 1);
        if (armor.id) {
            var armorData = Guncraft.getArmorData(IDRegistry.getNameByID(armor.id));
            Entity.setArmorSlot(entityID, 1, armor.id, armor.count, armor.data + raw / 5, armor.extra);
            if (armorData && armorData.level >= ap)
                raw = 0;
        }
    }
    else {
        var armor = Entity.getArmorSlot(entityID, 0);
        if (armor.id) {
            var armorData = Guncraft.getArmorData(IDRegistry.getNameByID(armor.id));
            Entity.setArmorSlot(entityID, 0, armor.id, armor.count, armor.data + raw / 5, armor.extra);
            if (armorData && armorData.level > ap)
                raw = 0;
        }
        else
            raw *= 1.8;
    }
    return raw;
}
function gaussianRandom(mean, stdev) {
    if (mean === void 0) { mean = 0; }
    if (stdev === void 0) { stdev = 1; }
    var u = 1 - Math.random(); // Converting [0,1) to (0,1]
    var v = Math.random();
    var z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    // Transform to the desired mean and standard deviation:
    return z * stdev + mean;
}
function angleInRadian(angle) {
    return angle * Math.PI / 180;
}
function lookDir(yaw, pitch) {
    return {
        x: -Math.sin(yaw) * Math.cos(pitch),
        y: Math.sin(pitch),
        z: Math.cos(yaw) * Math.cos(pitch)
    };
}
function getBulletEntityData(bulletData, gunData) {
    return {
        speed: bulletData.speed * gunData.speedCoefficient,
        type: gunData.bulletType,
        damage: bulletData.damage * gunData.damCoefficient,
        ap: bulletData.ap * gunData.APCoefficient
    };
}
function bulletEffect(bullet, entity) {
    switch (bullet) {
        case 3:
            Explodes[entity] = true;
            break;
        case 5:
            Attacker[entity] = -1;
            break;
        case 1:
        case 4:
            Fires[entity] = true;
        case 2:
            if (bullet != 1)
                Entity.setFire(entity, 200, true);
            break;
    }
}
function shotEntity(spawnVec, moveAngle, attackerID, bulletEntityData, pos) {
    var projectileID = Entity.spawn(pos.x + (spawnVec.x * 2), pos.y + (spawnVec.y * 2), pos.z + (spawnVec.z * 2), bulletEntityData.type);
    Entity.moveToAngle(projectileID, moveAngle, { speed: bulletEntityData.speed });
    Entity.setLookAngle(projectileID, moveAngle.yaw, moveAngle.pitch);
    Speed[projectileID] = bulletEntityData.speed;
    Damage[projectileID] = bulletEntityData.damage;
    AP[projectileID] = bulletEntityData.ap;
    Attacker[projectileID] = attackerID;
    return projectileID;
}
function shotSingleBullet(gunData, bulletData, attackerID, pos, accuracyAdd) {
    var angle = Entity.getLookAngle(attackerID);
    angle.yaw += angleInRadian(gaussianRandom()
        * (gunData.accuracy / 60)) * accuracyAdd * bulletData.accuracyCoefficient;
    angle.pitch += angleInRadian(gaussianRandom()
        * (gunData.accuracy / 60)) * accuracyAdd * bulletData.accuracyCoefficient;
    var ent = shotEntity(lookDir(angle.yaw, angle.pitch), angle, attackerID, getBulletEntityData(bulletData, gunData), pos);
    if (bulletData.type != 0)
        bulletEffect(bulletData.type, ent);
}
function shotShotgun(gunData, bulletData, attackerID, pos, accuracyAdd) {
    var _bullet = getBulletEntityData(bulletData, gunData), angle = Entity.getLookAngle(attackerID), shotVec = lookDir(angle.yaw, angle.pitch);
    angle.yaw += angleInRadian(gaussianRandom()
        * gunData.accuracy / 60) * bulletData.accuracyCoefficient * accuracyAdd;
    angle.pitch += angleInRadian(gaussianRandom()
        * gunData.accuracy / 60) * accuracyAdd * bulletData.accuracyCoefficient;
    for (var i = 0; i < bulletData.shotgunCount; i++) {
        var yaw = angle.yaw + angleInRadian(gaussianRandom()
            * (bulletData.shotgunDegreesSpread / 60));
        var pitch = angle.pitch + angleInRadian(gaussianRandom()
            * (bulletData.shotgunDegreesSpread / 60));
        var ent = shotEntity(shotVec, { yaw: yaw, pitch: pitch }, attackerID, _bullet, pos);
        if (bulletData.type != 0)
            bulletEffect(bulletData.type, ent);
    }
}
function drop(entityID) {
    var itemEntity = Entity.getRiding(entityID);
    if (itemEntity == -1)
        return;
    var itemData = JSON.parse(Entity.getCompoundTag(itemEntity)
        .getCompoundTag("Item").toScriptable().tag["$mod"]);
    AnimationComponet.SetMolangVariable(entityID, "variable.barrel", itemData.barrel);
    AnimationComponet.SetMolangVariable(entityID, "variable.mag", itemData.magID);
    AnimationComponet.SetMolangVariable(entityID, "variable.reargrip", itemData.reargrip);
    AnimationComponet.SetMolangVariable(entityID, "variable.underbarrel", itemData.underbarrel);
    AnimationComponet.SetMolangVariable(entityID, "variable.optic", itemData.optic);
    AnimationComponet.SetMolangVariable(entityID, "variable.muzzle", itemData.muzzle);
    AnimationComponet.SetMolangVariable(entityID, "variable.stock", itemData.stock);
    AnimationComponet.SetMolangVariable(entityID, "variable.laser", itemData.laser);
}
Callback.addCallback("EntityAdded", function (entityID) {
    var entityType = Entity.getType(entityID);
    if (entityType == Native.EntityType.ITEM) {
        var tag = Entity.getCompoundTag(entityID), itemData = tag.getCompoundTag("Item").toScriptable(), itemID = itemData.Name.replace("minecraft:item_", ""), gunData = Guncraft.getGunData(itemID);
        if (gunData) {
            // initial native drop item
            var list = tag.getListTag("Tags");
            list.putString(list.length(), "item." + itemID);
            tag.putListTag("Tags", list);
            Entity.setCompoundTag(entityID, tag);
        }
    }
    else if (!entityType) {
        var tag = Entity.getCompoundTag(entityID), id = tag.getString("identifier");
        // initial custom drop item model
        if (id == "drop:gun")
            GuncraftUtil.delay(drop, 0.1, entityID);
    }
});
Callback.addCallback("ProjectileHit", function (projectileID, i, target) {
    if (!Damage.hasOwnProperty(projectileID))
        return;
    if (target.entity == -1) { // hit block
        var blockHitData = BlockHitData, hitBlockID = World.getBlock(target.coords.x, target.coords.y, target.coords.z).id;
        if (blockHitData.hasOwnProperty(hitBlockID)) {
            var bdata = blockHitData[hitBlockID];
            if (Math.random() < bdata[0] * (AP[projectileID] / 5)) { // break block
                var angle = Entity.getMovingAngle(projectileID);
                World.destroyBlock(target.coords.x, target.coords.y, target.coords.z, false);
                AP[projectileID] *= bdata[1];
                Damage[projectileID] *= bdata[1];
                Speed[projectileID] *= bdata[1];
                Entity.moveToAngle(projectileID, angle, { speed: Speed[projectileID] });
                return;
            }
        }
        if (Explodes.hasOwnProperty(projectileID)) {
            World.explode(target.coords.x, target.coords.y, target.coords.z, (Damage[projectileID] * 0.1) || 1, true);
            delete (Explodes[projectileID]);
        }
        else if (Fires.hasOwnProperty(projectileID)) {
            var fireID = Entity.spawn(target.coords.x, target.coords.y, target.coords.z, Native.EntityType.SMALL_FIREBALL), angle = Entity.getMovingAngle(projectileID);
            Entity.moveToAngle(fireID, angle, { speed: 20 });
            delete (Fires[projectileID]);
        }
    }
    else { // hit entity
        var damage = DamageCalculate(Damage[projectileID], AP[projectileID], target.y, target.entity);
        Entity.damageEntity(target.entity, damage, 1, {
            attacker: Attacker[projectileID],
            bool1: true
        });
        if (Explodes.hasOwnProperty(projectileID)) {
            var pos = Entity.getPosition(target.entity);
            World.explode(pos.x, pos.y, pos.z, (0.1 * Damage[projectileID]) || 1, true);
            delete (Explodes[projectileID]);
        }
        else if (Fires.hasOwnProperty(projectileID)) {
            Entity.setFire(target.entity, 60, true);
            delete (Fires[projectileID]);
        }
    }
    Entity.remove(projectileID);
    delete (Damage[projectileID]);
    delete (Speed[projectileID]);
    delete (Attacker[projectileID]);
    delete (AP[projectileID]);
});
var ActionState;
(function (ActionState) {
    ActionState[ActionState["none"] = 0] = "none";
    ActionState[ActionState["autoShooting"] = 1] = "autoShooting";
    ActionState[ActionState["semiAutoShooting"] = 2] = "semiAutoShooting";
    ActionState[ActionState["burstShooting"] = 3] = "burstShooting";
    ActionState[ActionState["modifying"] = 4] = "modifying";
    ActionState[ActionState["reloading"] = 5] = "reloading";
    ActionState[ActionState["sfChanging"] = 6] = "sfChanging";
})(ActionState || (ActionState = {}));
var PlayerActionController = /** @class */ (function () {
    function PlayerActionController(uid, item, gunData, currentSlotIndex) {
        this.currentSlotIndex = currentSlotIndex;
        this.actionState = ActionState.none;
        this.taskName = "";
        this.updateAnimationTimeout = UpdateAnimationTimeout;
        this.uid = uid;
        this.timeout = 0;
        this.burstCount = 0;
        this.isAim = false;
        this.isSecMode = false;
        this.emptySound = false;
        this.attachmentIndexs = {
            barrel: item.extra.getInt("barrel", 0),
            mag: gunData.mag.indexOf(item.extra.getString("mag") + "") + 1,
            reargrip: item.extra.getInt("reargrip", 0),
            underbarrel: item.extra.getInt("underbarrel", 0),
            optic: item.extra.getInt("optic", 0),
            muzzle: item.extra.getInt("muzzle", 0),
            stock: item.extra.getInt("stock", 0),
            laser: item.extra.getInt("laser", 0)
        };
        this.gunData = gunData;
        this.currentBulletCount = item.extra.getInt("currentBulletCount", 0);
        this.maxBulletCount = item.extra.getInt("maxBulletCount", 0);
        this.magArr = GuncraftUtil.getInventorySlotCompoundTag(this.uid, this.currentSlotIndex).getListTag("magArr").toScriptable();
        this.fov = item.extra.getInt("fov", 0);
        this.mode = item.extra.getInt("mode", 0);
        this.specialSound = item.extra.getString("newSound", null);
        this.secMode = item.extra.getBoolean("secMode", false);
        this.recoilCoefficient = item.extra.getFloat("recoilCoefficient", 1);
        this.accuracyCoefficient = item.extra.getFloat("accuracyCoefficient", 1);
        this.kexPlayer = new KEX.Player(this.uid);
        this.client = Network.getClientForPlayer(this.uid);
        this.setAttachmentModel();
        this.carryAnimation();
        this.client.send("Guncraft.openUI", {
            name: "fire"
        });
        this.updateClient();
    }
    PlayerActionController.prototype.destructor = function () {
        this.client.send("Guncraft.resetFov", {});
        var player = this.kexPlayer;
        this.client.send("Guncraft.closeUI", {
            name: "fire"
        });
        this.client.send("Guncraft.closeUI", {
            name: "modify"
        });
        if (this.reloadMagItem) {
            if (this.reloadMagArr) {
                var tag = new NBT.CompoundTag();
                tag.putListTag("magArr", this.reloadMagArr);
                // @ts-ignore
                this.reloadMagItem.extra.setCompoundTag(tag);
            }
            player.addItemToInventory(this.reloadMagItem.id, this.reloadMagItem.count, this.reloadMagItem.data, this.reloadMagItem.extra);
        }
    };
    PlayerActionController.prototype.updateClient = function () {
        var text = "", color = android.graphics.Color.WHITE;
        if (this.actionState == ActionState.reloading) {
            text = Translation.translate("reloading...");
            color = android.graphics.Color.YELLOW;
        }
        else if (this.actionState == ActionState.sfChanging) {
            text = Translation.translate("changing...");
            color = android.graphics.Color.YELLOW;
        }
        else {
            text = this.currentBulletCount + " | " + this.maxBulletCount + " - "
                + (modeName[this.mode] || ModeName(this.mode));
            if (this.maxBulletCount == 0
                || this.currentBulletCount / this.maxBulletCount < 0.2)
                color = android.graphics.Color.RED;
        }
        this.client.send("Guncraft.display", {
            text: text,
            color: color
        });
    };
    PlayerActionController.prototype.updateItem = function () {
        var player = new PlayerActor(this.uid), gunItem = player.getInventorySlot(this.currentSlotIndex), tag = GuncraftUtil.getInventorySlotCompoundTag(this.uid, this.currentSlotIndex);
        // @ts-ignore
        gunItem.extra.setCompoundTag(tag);
        gunItem.extra.putInt("currentBulletCount", Number(this.currentBulletCount));
        player.setInventorySlot(this.currentSlotIndex, gunItem.id, gunItem.count, gunItem.data, gunItem.extra);
    };
    PlayerActionController.prototype.shot = function () {
        var uid = this.uid, gunData = this.gunData;
        if (this.currentBulletCount <= 0)
            return false;
        // @ts-ignore
        var bullet = Guncraft.getBulletData(this.magArr[this.currentBulletCount - 1]), playerPos = Entity.getPosition(uid);
        // play sound
        GuncraftUtil.playSound(playerPos, this.specialSound || gunData.fireSound);
        // recoil
        Commands.execAt("camerashake add @p "
            + String(gunData.recoil * this.recoilCoefficient * bullet.recoilCoefficient)
            + " 0.2 rotational", playerPos.x, playerPos.y, playerPos.z);
        // shot 
        (gunData.type != Guncraft.GunType.SHOTGUN)
            ? shotSingleBullet(gunData, bullet, uid, playerPos, this.accuracyCoefficient)
            : shotShotgun(gunData, bullet, uid, playerPos, this.accuracyCoefficient);
        this.currentBulletCount--;
        if (!this.currentBulletCount && !gunData.slideStop)
            this.emptySound = true;
        return true;
    };
    PlayerActionController.prototype.secModeShot = function () {
        //coming soon
    };
    PlayerActionController.prototype.secModeReload = function () {
        //coming soon
    };
    PlayerActionController.prototype.sf = function () {
        this.carryAnimation();
        this.client.send("Guncraft.resetFov", {});
        this.isAim = false;
        this.changeSelectiveFireAnimation();
        this.taskName = "_sf";
        this.timeout = this.gunData.timeout.sf;
        this.actionState = ActionState.sfChanging;
    };
    PlayerActionController.prototype._sf = function () {
        this.carryAnimation();
        var gunMode = this.gunData.mode, player = new PlayerActor(this.uid), gunItem = player.getInventorySlot(this.currentSlotIndex);
        if (!gunItem.extra)
            return;
        if (this.mode) {
            for (var i = 0; i < gunMode.length; i++) {
                if (this.mode == gunMode[i]) {
                    this.mode = gunMode[i + 1] || 0;
                    break;
                }
            }
        }
        else
            this.mode = gunMode[0];
        gunItem.extra.putInt("mode", this.mode);
        var tag = GuncraftUtil.getInventorySlotCompoundTag(this.uid, this.currentSlotIndex);
        // @ts-ignore
        gunItem.extra.setCompoundTag(tag);
        player.setInventorySlot(this.currentSlotIndex, gunItem.id, gunItem.count, gunItem.data, gunItem.extra);
    };
    PlayerActionController.prototype.getMagInInventory = function (player) {
        var gunData = this.gunData, availableMagId = gunData.mag;
        for (var i = 0; i <= 35; i++) {
            var itemInSlot = player.getInventorySlot(i);
            for (var k = 0; k < availableMagId.length; k++) {
                if (itemInSlot.id == ItemID[availableMagId[k]]
                    && itemInSlot.extra
                    && itemInSlot.extra.getInt("currentBulletCount", 0)
                    && itemInSlot.extra.getString("bulletParent", null) == gunData.bulletName)
                    return i;
            }
        }
        return -1;
    };
    PlayerActionController.prototype.reloadMag = function () {
        this.client.send("Guncraft.resetFov", {});
        this.isAim = false;
        this.carryAnimation();
        var player = new PlayerActor(this.uid), gunItem = player.getInventorySlot(this.currentSlotIndex), targetMagSlotIndex = this.getMagInInventory(player);
        if (targetMagSlotIndex != -1) {
            this.reloadMagItem = player.getInventorySlot(targetMagSlotIndex);
            this.reloadMagArr = GuncraftUtil.getInventorySlotCompoundTag(this.uid, targetMagSlotIndex)
                .getListTag("magArr");
            this.taskName = "reload_1";
            player.setInventorySlot(targetMagSlotIndex, 0, 0, 0, null);
            var targetItemId = IDRegistry.getNameByID(this.reloadMagItem.id);
            if (gunItem.data) {
                var isMag = Guncraft.getMagData(targetItemId).isMag, isMag2 = Guncraft.getMagData(gunItem.extra.getString("mag")).isMag;
                if (this.currentBulletCount > 0) {
                    if (isMag && isMag2) {
                        this.timeout = this.gunData.timeout.mag2mag2;
                        this.mag2mag2_reloadAnimation();
                    }
                    else if (!isMag && isMag2) {
                        this.timeout = this.gunData.timeout.link2mag2;
                        this.link2mag2_reloadAnimation();
                    }
                    else if (isMag && !isMag2) {
                        this.timeout = this.gunData.timeout.mag2link2;
                        this.mag2link2_reloadAnimation();
                    }
                    else {
                        this.timeout = this.gunData.timeout.link2link2;
                        this.link2link2_reloadAnimation();
                    }
                }
                else {
                    if (isMag && isMag2) {
                        this.mag2mag_reloadAnimation();
                        this.timeout = this.gunData.timeout.mag2mag;
                    }
                    else if (!isMag && isMag2) {
                        this.timeout = this.gunData.timeout.link2mag;
                        this.link2mag_reloadAnimation();
                    }
                    else if (isMag && !isMag2) {
                        this.timeout = this.gunData.timeout.mag2link;
                        this.mag2link_reloadAnimation();
                    }
                    else {
                        this.timeout = this.gunData.timeout.link2link;
                        this.link2link_reloadAnimation();
                    }
                }
            }
            else {
                var isMag = Guncraft.getMagData(targetItemId).isMag;
                if (isMag) {
                    this.loadMag_reloadAnimation();
                    this.timeout = this.gunData.timeout.loadMag;
                }
                else {
                    this.loadLink_reloadAnimation();
                    this.timeout = this.gunData.timeout.loadLink;
                }
            }
            AnimationComponet.SetMolangVariable(this.uid, "variable.mag2", this.gunData.mag.indexOf(targetItemId) + 1);
        }
        else {
            if (!gunItem.data)
                return;
            this.taskName = "reload_0";
            this.reloadMagItem = null;
            this.reloadMagArr = null;
            var isMag2 = Guncraft.getMagData(gunItem.extra.getString("mag")).isMag;
            if (this.currentBulletCount > 0) {
                if (isMag2) {
                    this.unloadMag2_reloadAnimation();
                    this.timeout = this.gunData.timeout.unloadMag2;
                }
                else {
                    this.unloadLink2_reloadAnimation();
                    this.timeout = this.gunData.timeout.unloadLink2;
                }
            }
            else {
                if (isMag2) {
                    this.unloadMag_reloadAnimation();
                    this.timeout = this.gunData.timeout.unloadMag;
                }
                else {
                    this.unloadLink_reloadAnimation();
                    this.timeout = this.gunData.timeout.unloadLink;
                }
            }
            AnimationComponet.SetMolangVariable(this.uid, "variable.mag2", 0);
        }
        this.actionState = ActionState.reloading;
        this.emptySound = false;
    };
    PlayerActionController.prototype.reloadBullet = function () {
        //coming soon
    };
    PlayerActionController.prototype.reload_1 = function () {
        var player = new PlayerActor(this.uid), gunItem = player.getInventorySlot(this.currentSlotIndex);
        var add = gunItem.data ? this.unloadMag(gunItem.extra, player, this.gunData.saveBullet, false) : null;
        this.loadMag(gunItem.extra, add, gunItem.id, this.reloadMagItem, this.reloadMagArr, player);
    };
    PlayerActionController.prototype.reload_0 = function () {
        var player = new PlayerActor(this.uid), gunItem = player.getInventorySlot(this.currentSlotIndex);
        this.unloadMag(gunItem.extra, player, this.gunData.saveBullet);
        gunItem.extra.putString("mag", null);
        gunItem.extra.putInt("magID", 0);
        gunItem.extra.putInt("currentBulletCount", 0);
        gunItem.extra.putInt("maxBulletCount", 0);
        gunItem.extra.putString("bulletParent", null);
        var tag = new NBT.CompoundTag();
        tag.putListTag("magArr", new NBT.ListTag());
        //@ts-ignore
        gunItem.extra.setCompoundTag(tag);
        player.setInventorySlot(this.currentSlotIndex, gunItem.id, gunItem.count, 0, gunItem.extra);
        this.attachmentIndexs['mag'] = 0;
        AnimationComponet.SetMolangVariable(this.uid, "variable.mag", 0);
        this.currentBulletCount = 0;
        this.maxBulletCount = 0;
        this.emptySound = true;
    };
    PlayerActionController.prototype.unloadMag = function (gunExtraData, player, saveBulletInGun, dropBullet) {
        if (dropBullet === void 0) { dropBullet = true; }
        var magExtraData = new ItemExtraData(), magArr = GuncraftUtil.getInventorySlotCompoundTag(this.uid, this.currentSlotIndex)
            .getListTag("magArr");
        if (this.currentBulletCount > 1
            || (this.currentBulletCount > 0 && !saveBulletInGun)) {
            var tag = new NBT.CompoundTag();
            tag.putListTag("magArr", magArr);
            //@ts-ignore
            magExtraData.setCompoundTag(tag);
            magExtraData.putInt("maxBulletCount", this.maxBulletCount);
            magExtraData.putString("bulletParent", gunExtraData.getString("bulletParent"));
            if (saveBulletInGun) {
                magExtraData.putInt("currentBulletCount", this.currentBulletCount - 1);
                var scale = Math.round(((this.maxBulletCount - this.currentBulletCount + 1)
                    / this.maxBulletCount * 100) + 1);
                player.addItemToInventory(ItemID[gunExtraData.getString("mag")], 1, scale, magExtraData, true);
                if (dropBullet)
                    player.addItemToInventory(ItemID[magArr.getString(this.currentBulletCount - 1)], 1, 0, null, false);
                else
                    return magArr.getString(this.currentBulletCount - 1);
            }
            else {
                magExtraData.putInt("currentBulletCount", this.currentBulletCount);
                var scale = Math.round(((this.maxBulletCount - this.currentBulletCount)
                    / this.maxBulletCount * 100) + 1);
                player.addItemToInventory(ItemID[gunExtraData.getString("mag")], 1, scale, magExtraData, true);
            }
        }
        else { // drop empty mag
            magExtraData.putInt("currentBulletCount", 0);
            magExtraData.putInt("maxBulletCount", 0);
            magExtraData.putString("bulletParent", null);
            var tag = new NBT.CompoundTag();
            tag.putListTag("magArr", new NBT.ListTag());
            // @ts-ignore
            magExtraData.setCompoundTag(tag);
            player.addItemToInventory(ItemID[gunExtraData.getString("mag")], 1, 101, magExtraData, true);
            if (this.currentBulletCount) {
                if (dropBullet)
                    player.addItemToInventory(ItemID[magArr.getString(0)], 1, 0, null, false);
                else
                    return magArr.getString(0);
            }
        }
        return null;
    };
    PlayerActionController.prototype.loadMag = function (gunExtraData, add, gunId, magItem, magArr, player) {
        var bulletCountMax = magItem.extra.getInt("maxBulletCount"), bulletCount = magItem.extra.getInt("currentBulletCount"), magIndex = this.gunData.mag.indexOf(IDRegistry.getNameByID(magItem.id)) + 1;
        this.attachmentIndexs['mag'] = magIndex;
        AnimationComponet.SetMolangVariable(this.uid, "variable.mag", magIndex);
        if (add)
            magArr.putString(bulletCount++, add);
        gunExtraData.putInt("maxBulletCount", bulletCountMax);
        gunExtraData.putInt("currentBulletCount", bulletCount);
        gunExtraData.putInt("magID", magIndex);
        gunExtraData.putString("mag", IDRegistry.getNameByID(magItem.id));
        gunExtraData.putString("bulletParent", magItem.extra.getString("bulletParent"));
        var tag = new NBT.CompoundTag();
        tag.putListTag("magArr", magArr);
        // @ts-ignore
        gunExtraData.setCompoundTag(tag);
        player.setInventorySlot(this.currentSlotIndex, gunId, 1, 1, gunExtraData);
        this.maxBulletCount = bulletCountMax;
        this.currentBulletCount = bulletCount;
        this.magArr = magArr.toScriptable();
        this.reloadMagItem = null;
        this.reloadMagArr = null;
    };
    PlayerActionController.prototype.updatePlayerAnimation = function () {
        if (this.updateAnimationTimeout > 0) {
            this.updateAnimationTimeout--;
            return;
        }
        this.kexPlayer.setSkinID(0);
        this.updateAnimationTimeout = UpdateAnimationTimeout;
    };
    PlayerActionController.prototype.setAttachmentModel = function () {
        for (var key in this.attachmentIndexs)
            AnimationComponet.SetMolangVariable(this.uid, "variable." + key, this.attachmentIndexs[key]);
    };
    PlayerActionController.prototype.animationTransition = function (state) {
        AnimationComponet.SetMolangVariable(this.uid, "variable.state", state);
    };
    PlayerActionController.prototype.fireAnimation = function () {
        if (this.actionState >= ActionState.autoShooting
            && this.actionState <= ActionState.burstShooting)
            AnimationComponet.SetMolangVariable(this.uid, "variable.fire", 1);
        else
            AnimationComponet.SetMolangVariable(this.uid, "variable.fire", 0);
    };
    PlayerActionController.prototype.unloadMag_reloadAnimation = function () {
        this.animationTransition(2);
    };
    PlayerActionController.prototype.unloadMag2_reloadAnimation = function () {
        this.animationTransition(3);
    };
    PlayerActionController.prototype.unloadLink_reloadAnimation = function () {
        this.animationTransition(14);
    };
    PlayerActionController.prototype.unloadLink2_reloadAnimation = function () {
        this.animationTransition(15);
    };
    PlayerActionController.prototype.loadMag_reloadAnimation = function () {
        this.animationTransition(2);
    };
    PlayerActionController.prototype.loadLink_reloadAnimation = function () {
        this.animationTransition(3);
    };
    PlayerActionController.prototype.mag2mag_reloadAnimation = function () {
        this.animationTransition(2);
    };
    PlayerActionController.prototype.mag2mag2_reloadAnimation = function () {
        this.animationTransition(3);
    };
    PlayerActionController.prototype.link2mag_reloadAnimation = function () {
        this.animationTransition(10);
    };
    PlayerActionController.prototype.link2mag2_reloadAnimation = function () {
        this.animationTransition(11);
    };
    PlayerActionController.prototype.mag2link_reloadAnimation = function () {
        this.animationTransition(12);
    };
    PlayerActionController.prototype.mag2link2_reloadAnimation = function () {
        this.animationTransition(13);
    };
    PlayerActionController.prototype.link2link_reloadAnimation = function () {
        this.animationTransition(14);
    };
    PlayerActionController.prototype.link2link2_reloadAnimation = function () {
        this.animationTransition(15);
    };
    PlayerActionController.prototype.carryAnimation = function () {
        this.animationTransition(5);
        AnimationComponet.SetMolangVariable(this.uid, "variable.mag2", 0);
    };
    PlayerActionController.prototype.aimAnimation = function () {
        this.animationTransition(1);
    };
    PlayerActionController.prototype.changeSelectiveFireAnimation = function () {
        this.animationTransition(4);
    };
    PlayerActionController.prototype.secondModeAimAnimation = function () {
        this.animationTransition(7);
    };
    PlayerActionController.prototype.secondModeReloadAnimation = function () {
        this.animationTransition(8);
    };
    PlayerActionController.prototype.secondModeFireAnimation = function () {
        this.animationTransition(9);
    };
    PlayerActionController.prototype.getAttachmentInSlot = function (attachmentType, player, slotIndex) {
        var itemInSlot = player.getInventorySlot(slotIndex), attachmentID = IDRegistry.getNameByID(itemInSlot.id), attachmentData = Guncraft.getAttachmentData(attachmentID);
        if (attachmentData) {
            if (attachmentData.type == attachmentType) {
                var attachmentIndex = this.gunData.attachment[attachmentType].indexOf(attachmentID);
                if (attachmentIndex != -1) {
                    return {
                        index: attachmentIndex,
                        data: attachmentData,
                        slotIndex: slotIndex
                    };
                }
            }
        }
        return null;
    };
    PlayerActionController.prototype.getAttachmentInInventory = function (attachmentType, player) {
        for (var i = 0; i <= 35; i++) {
            var res = this.getAttachmentInSlot(attachmentType, player, i);
            if (res)
                return res;
        }
        return {
            data: Guncraft.emptyAttachment,
            slotIndex: -1,
            index: -1
        };
    };
    PlayerActionController.prototype.modify = function (attachmentType) {
        var player = new PlayerActor(this.uid), result = this.getAttachmentInInventory(attachmentType, player);
        var gunItem = player.getInventorySlot(this.currentSlotIndex), gunData = this.gunData, oldAttachmentIndex = gunItem.extra.getInt(attachmentType, 0), oldData1 = 0, oldData2 = 0;
        if (result.slotIndex != -1)
            if (oldAttachmentIndex) // swap old attachment and select attachment in inventory
                player.setInventorySlot(result.slotIndex, ItemID[gunData.attachment[attachmentType][oldAttachmentIndex - 1]], 1, 0, null);
            else // remove selected attachment in inventory
                player.setInventorySlot(result.slotIndex, 0, 0, 0, null);
        else if (oldAttachmentIndex) // uninstall old attachment
            player.addItemToInventory(ItemID[gunData.attachment[attachmentType][oldAttachmentIndex - 1]], 1, 0, null, false);
        this.attachmentIndexs[attachmentType] = result.index + 1;
        AnimationComponet.SetMolangVariable(this.uid, "variable." + attachmentType, result.index + 1);
        gunItem.extra.putInt(attachmentType, result.index + 1);
        switch (attachmentType) {
            case "optic":
                gunItem.extra.putInt("fov", result.data.fov);
                break;
            case "underbarrel":
            case "muzzle":
                if (attachmentType == "underbarrel")
                    (result.data.secMode)
                        ? gunItem.extra.putBoolean("secMode", true)
                        : gunItem.extra.putBoolean("secMode", false);
                else
                    (result.data.sound)
                        ? gunItem.extra.putString("newSound", result.data.sound)
                        : gunItem.extra.putString("newSound", null);
            default:
                if (oldAttachmentIndex) {
                    var oldAttachmentData = Guncraft.getAttachmentData(gunData.attachment[attachmentType][oldAttachmentIndex - 1]);
                    oldData1 = oldAttachmentData.recoilCoefficient / 100;
                    oldData2 = oldAttachmentData.accuracyCoefficient / 100;
                }
                gunItem.extra.putFloat("recoilCoefficient", gunItem.extra.getFloat("recoilCoefficient")
                    + oldData1 - (result.data.recoilCoefficient / 100));
                gunItem.extra.putFloat("accuracyCoefficient", gunItem.extra.getFloat("accuracyCoefficient")
                    + oldData2 - (result.data.accuracyCoefficient / 100));
                break;
        }
        var tag = GuncraftUtil.getInventorySlotCompoundTag(this.uid, this.currentSlotIndex);
        // @ts-ignore
        gunItem.extra.setCompoundTag(tag);
        player.setInventorySlot(this.currentSlotIndex, gunItem.id, 1, gunItem.data, gunItem.extra);
    };
    PlayerActionController.prototype.modifyAnimation = function () {
        this.animationTransition(6);
    };
    return PlayerActionController;
}());
var PlayerItemManager = /** @class */ (function () {
    function PlayerItemManager(uid) {
        this.uid = uid;
        this.currentSlotIndex = 0;
        this.currentItem = { id: 0, data: 0, count: 0 };
    }
    PlayerItemManager.prototype.check = function () {
        var player = new PlayerActor(this.uid), currentSlotIndex = player.getSelectedSlot(), currentItem = player.getInventorySlot(currentSlotIndex), useDuration = player.getItemUseDuration();
        if (this.useDuration && !useDuration)
            this.released();
        if (currentSlotIndex != this.currentSlotIndex
            || currentItem.id != this.currentItem.id
            || (currentItem.extra && this.currentItem.extra
                && currentItem.extra.getInt("uuid", 0)
                    != this.currentItem.extra.getInt("uuid", 0)))
            currentItem = this.changed(currentItem, currentSlotIndex, player);
        this.useDuration = useDuration;
        this.currentSlotIndex = currentSlotIndex;
        this.currentItem = currentItem;
    };
    PlayerItemManager.prototype.released = function () {
        if (!PlayerContainer.hasOwnProperty(this.uid))
            return;
        var playerController = PlayerContainer[this.uid];
        if (playerController.actionState >= ActionState.none
            && playerController.actionState <= ActionState.burstShooting) {
            playerController.actionState = ActionState.none;
            playerController.fireAnimation();
            playerController.updateClient();
            playerController.updateItem();
        }
    };
    PlayerItemManager.prototype.changed = function (currentItem, currentSlotIndex, player) {
        var newGunData = Guncraft.getGunData(IDRegistry.getNameByID(currentItem.id)), oldGunData = Guncraft.getGunData(IDRegistry.getNameByID(this.currentItem.id));
        if (oldGunData) {
            PlayerContainer[this.uid].destructor();
            delete (PlayerContainer[this.uid]);
        }
        if (newGunData) {
            if (!currentItem.extra.getInt("uuid", 0)) {
                var tag = GuncraftUtil.getInventorySlotCompoundTag(this.uid, currentSlotIndex);
                // @ts-ignore
                currentItem.extra.setCompoundTag(tag);
                currentItem.extra.putInt("uuid", Math.floor(Math.random() * 10000000));
                player.setInventorySlot(currentSlotIndex, currentItem.id, currentItem.count, currentItem.data, currentItem.extra);
            }
            PlayerContainer[this.uid] = new PlayerActionController(this.uid, currentItem, newGunData, currentSlotIndex);
        }
        return currentItem;
    };
    return PlayerItemManager;
}());
var lastScreen = "";
Callback.addCallback("NativeGuiChanged", function (curScreen) {
    lastScreen = curScreen;
    if (curScreen == "in_game_play_screen") {
        //open ui
        if (modifyMode && !modifyUI.isOpened())
            modifyUI.open();
        if (fireMode && !GUI.isOpened()) {
            GUI.open();
            displayerUIContainer.openAs(displayerUI);
        }
    }
    else {
        //close ui
        if (modifyUI.isOpened())
            modifyUI.close();
        if (GUI.isOpened()) {
            GUI.close();
            displayerUIContainer.close();
        }
    }
});
Callback.addCallback("LocalLevelLoaded", function () {
    Player.resetFov();
    modifyMode = false;
    fireMode = false;
});
Callback.addCallback("ServerPlayerLeft", function (uid) {
    //delete invalid data
    if (PlayerContainer.hasOwnProperty(uid))
        delete (PlayerContainer[uid]);
    if (PlayerItemManagerContainer.hasOwnProperty(uid))
        delete (PlayerItemManagerContainer[uid]);
});
Callback.addCallback("LevelLoaded", function () {
    Damage = {};
    Explodes = {};
    Fires = {};
    AP = {};
    Attacker = {};
    Speed = {};
    PlayerItemManagerContainer = {};
    PlayerContainer = {};
});
Callback.addCallback("ServerPlayerTick", function (player, isPlayerDead) {
    if (!PlayerItemManagerContainer.hasOwnProperty(player))
        PlayerItemManagerContainer[player] = new PlayerItemManager(player);
    PlayerItemManagerContainer[player].check();
}, 1);
Callback.addCallback("ServerPlayerTick", function (player, isPlayerDead) {
    if (!PlayerContainer.hasOwnProperty(player))
        return;
    var playerController = PlayerContainer[player];
    if (isPlayerDead) {
        playerController.destructor();
        delete (PlayerContainer[player]);
        return;
    }
    playerController.updatePlayerAnimation();
    if (playerController.timeout > 0) {
        playerController.timeout--;
        return;
    }
    if (playerController.actionState == ActionState.reloading
        || playerController.actionState == ActionState.sfChanging) {
        playerController[playerController.taskName]();
        playerController.actionState = ActionState.none;
        playerController.carryAnimation();
        playerController.taskName = "";
        playerController.timeout = 0;
        playerController.updateClient();
        return;
    }
    var gunData = playerController.gunData;
    if (playerController.actionState == ActionState.semiAutoShooting) {
        playerController.shot();
        playerController.actionState = ActionState.none;
        playerController.fireAnimation();
        playerController.timeout = gunData.shotTimeout.semi_auto;
        playerController.updateClient();
        return;
    }
    if (playerController.actionState == ActionState.autoShooting) {
        if (!playerController.shot()) {
            playerController.actionState = ActionState.none;
            playerController.fireAnimation();
        }
        else
            playerController.timeout = gunData.shotTimeout.auto;
        playerController.updateClient();
        return;
    }
    if (playerController.actionState == ActionState.burstShooting) {
        if (playerController.burstCount > 0) {
            if (!playerController.shot()) {
                playerController.actionState = ActionState.none;
                playerController.fireAnimation();
                playerController.timeout = gunData.shotTimeout.afterBurst;
            }
            else {
                playerController.burstCount--;
                playerController.timeout = gunData.shotTimeout.burst;
            }
        }
        else {
            playerController.actionState = ActionState.none;
            playerController.fireAnimation();
            playerController.timeout = gunData.shotTimeout.afterBurst;
        }
        playerController.updateClient();
    }
}, 2);
Callback.addCallback("ItemUseNoTarget", function (item, player) {
    if (!PlayerContainer.hasOwnProperty(player))
        return;
    var playerController = PlayerContainer[player];
    if (playerController.actionState != ActionState.none)
        return;
    if (!item.data
        || playerController.currentBulletCount <= 0
        || !playerController.mode) {
        if (playerController.emptySound
            && playerController.mode) {
            GuncraftUtil.playSound(Entity.getPosition(player), "empty");
            playerController.emptySound = false;
        }
        return;
    }
    if (playerController.mode == 1) // auto
        playerController.actionState = ActionState.autoShooting;
    else if (playerController.mode == 2) // semi-auto
        playerController.actionState = ActionState.semiAutoShooting;
    else { // burst shooting
        playerController.burstCount = playerController.mode - 1;
        playerController.actionState = ActionState.burstShooting;
    }
    playerController.fireAnimation();
    Game.prevent();
});
//reload magazine
Callback.addCallback("ItemUsingComplete", function (magItem, playerID) {
    var player = new PlayerActor(playerID), 
    //magazine slot
    magSlotIndex = player.getSelectedSlot(), 
    //bullet slot
    bulletSlotIndex = magSlotIndex + 1, bulletItem = player.getInventorySlot(bulletSlotIndex), bulletId = IDRegistry.getNameByID(bulletItem.id), magData = Guncraft.getMagData(IDRegistry.getNameByID(magItem.id)), bulletData = Guncraft.getBulletData(bulletId);
    if (magData && bulletData) {
        for (var i = 0; i < magData.bulletName.length; i++) {
            if (bulletData.parent == magData.bulletName[i]) {
                var magCurBulletCount = magItem.extra.getInt("currentBulletCount", 0), magMaxBulletCount = magData.bulletMaxCount[i], emptyCount = magMaxBulletCount - magCurBulletCount;
                if (emptyCount == 0)
                    continue;
                var newBulletCount = bulletItem.count - emptyCount;
                if (newBulletCount < 0)
                    emptyCount += newBulletCount;
                var magArr = magCurBulletCount
                    ? GuncraftUtil.getInventorySlotCompoundTag(playerID, magSlotIndex)
                        .getListTag("magArr")
                    : new NBT.ListTag();
                for (var i_1 = 0; i_1 < emptyCount; i_1++)
                    magArr.putString(magCurBulletCount + i_1, bulletId);
                magItem.extra.putString("bulletParent", bulletData.parent);
                magItem.extra.putInt("maxBulletCount", magMaxBulletCount);
                magItem.extra.putInt("currentBulletCount", magCurBulletCount + emptyCount);
                var tag = new NBT.CompoundTag();
                tag.putListTag("magArr", magArr);
                // @ts-ignore
                magItem.extra.setCompoundTag(tag);
                var scale = Math.round(((magMaxBulletCount - (magCurBulletCount + emptyCount))
                    / magMaxBulletCount * 100) + 1);
                player.setInventorySlot(magSlotIndex, magItem.id, 1, scale, magItem.extra);
                if (newBulletCount > 0)
                    player.setInventorySlot(bulletSlotIndex, bulletItem.id, newBulletCount, 0, null);
                else
                    player.setInventorySlot(bulletSlotIndex, 0, 0, 0, null);
                break;
            }
        }
    }
});
//prevent some event when player is carying gun
Callback.addCallback("DestroyBlockStart", function (coords, block, player) {
    (PlayerContainer.hasOwnProperty(player)) && Game.prevent();
});
Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
    (PlayerContainer.hasOwnProperty(player)) && Game.prevent();
});
Callback.addCallback("PlayerAttack", function (player, victim) {
    (PlayerContainer.hasOwnProperty(player)) && Game.prevent();
});
var fireMode = false, modifyMode = false, displayerUIContainer = new UI.Container();
Network.addClientPacket("Guncraft.display", function (data) {
    var content = displayerUIContainer.getGuiContent();
    if (!content)
        content = displayerUI.getContent();
    content.elements["content"].text = data.text;
    content.elements["content"].font.color = data.color;
});
Network.addClientPacket("Guncraft.openUI", function (data) {
    switch (data.name) {
        case "fire":
            var content = displayerUI.getContent();
            content.elements["content"].text = "";
            if (lastScreen == "in_game_play_screen") {
                GUI.open();
                displayerUIContainer.openAs(displayerUI);
            }
            fireMode = true;
            break;
        case "modify":
            if (lastScreen == "in_game_play_screen")
                modifyUI.open();
            modifyMode = true;
            break;
    }
});
Network.addClientPacket("Guncraft.closeUI", function (data) {
    switch (data.name) {
        case "fire":
            if (GUI.isOpened()) {
                GUI.close();
                displayerUIContainer.close();
            }
            fireMode = false;
            break;
        case "modify":
            if (modifyUI.isOpened())
                modifyUI.close();
            modifyMode = false;
            break;
    }
});
Network.addClientPacket("Guncraft.setFov", function (data) {
    Player.setFov(70 - data.fov);
});
Network.addClientPacket("Guncraft.resetFov", function (data) {
    Player.resetFov();
});
var modeName = [Translation.translate("insurance"),
    Translation.translate("auto"), Translation.translate("semi-auto")];
function ModeName(mode) {
    var str = mode - 1;
    return str + Translation.translate("-round burst");
}
//ui onclick event
Network.addServerPacket("Guncraft.ButtonOnClick", function (client, data) {
    var uid = client.getPlayerUid();
    if (!PlayerContainer.hasOwnProperty(uid))
        return;
    data.data
        ? UIClickEvent[data.name](uid, data.data)
        : UIClickEvent[data.name](uid);
});
var UIClickEvent = {
    modify: function (uid, name) {
        PlayerContainer[uid].modify(name);
    },
    changeSecMode: function (uid) {
        //coming soon
    },
    modifyMode: function (uid) {
        var playerController = PlayerContainer[uid];
        if (playerController.actionState != ActionState.none
            && playerController.actionState != ActionState.modifying)
            return;
        if (playerController.actionState != ActionState.modifying) {
            playerController.modifyAnimation();
            playerController.client.send("Guncraft.openUI", {
                name: "modify"
            });
            playerController.actionState = ActionState.modifying;
        }
        else {
            playerController.carryAnimation();
            playerController.client.send("Guncraft.closeUI", {
                name: "modify"
            });
            playerController.actionState = ActionState.none;
        }
    },
    reload: function (uid) {
        var playerController = PlayerContainer[uid];
        if (playerController.actionState != ActionState.none)
            return;
        playerController.reloadMag();
        playerController.updateClient();
    },
    selectiveFire: function (uid) {
        var playerController = PlayerContainer[uid];
        if (playerController.actionState != ActionState.none)
            return;
        playerController.sf();
        playerController.updateClient();
    },
    aim: function (uid) {
        var playerController = PlayerContainer[uid];
        if (playerController.actionState == ActionState.modifying
            || playerController.actionState == ActionState.reloading
            || playerController.actionState == ActionState.sfChanging)
            return;
        if (playerController.isAim) {
            playerController.carryAnimation();
            playerController.client.send("Guncraft.resetFov", {});
            playerController.isAim = false;
        }
        else {
            playerController.client.send("Guncraft.setFov", {
                fov: playerController.fov
            });
            playerController.aimAnimation();
            playerController.isAim = true;
        }
    }
};
var GUI = new UI.Window({
    location: {
        x: 1000,
        y: UI.getScreenHeight(),
        width: 60 * UIScale,
        height: 240 * UIScale
    },
    drawing: [{ type: "background", color: 0 }],
    elements: {
        "reload": {
            type: "button",
            x: 0,
            y: 1000,
            bitmap: "button_up_reload",
            bitmap2: "button_down_reload",
            scale: 3.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "reload"
                    });
                }
            }
        },
        "changeSecMode": {
            type: "button",
            x: 0,
            y: 2000,
            bitmap: "button_up_change_1",
            bitmap2: "button_down_change_1",
            scale: 3.5,
            clicker: {
                onLongClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "changeSecMode"
                    });
                },
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "selectiveFire",
                        data: 1
                    });
                }
            }
        },
        "aim": {
            type: "button",
            x: 0,
            y: 0,
            bitmap: "button_up_aim",
            bitmap2: "button_down_aim",
            scale: 3.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "aim"
                    });
                }
            }
        },
        "modify": {
            type: "button",
            x: 0,
            y: 3000,
            bitmap: "button_up_modify",
            bitmap2: "button_down_modify",
            scale: 3.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "modifyMode"
                    });
                }
            }
        }
    }
});
GUI.setAsGameOverlay(true);
GUI.setDynamic(false);
var modifyUI = new UI.Window({
    location: {
        x: 1000,
        y: 0,
        width: 420 * UIScale,
        height: 60 * UIScale
    },
    drawing: [{ type: "background", color: 0 }],
    elements: {
        "underbarrel": {
            type: "button",
            x: (1000 / 7) * 3,
            y: 0,
            bitmap: "button_up_underbarrel",
            bitmap2: "button_down_underbarrel",
            scale: 0.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "modify",
                        data: "underbarrel"
                    });
                }
            }
        },
        "laser": {
            type: "button",
            x: (1000 / 7) * 2,
            y: 0,
            bitmap: "button_up_laser",
            bitmap2: "button_down_laser",
            scale: 0.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "modify",
                        data: "laser"
                    });
                }
            }
        },
        "muzzle": {
            type: "button",
            x: 0,
            y: 0,
            bitmap: "button_up_muzzle",
            bitmap2: "button_down_muzzle",
            scale: 0.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "modify",
                        data: "muzzle"
                    });
                }
            }
        },
        "barrel": {
            type: "button",
            x: (1000 / 7),
            y: 0,
            bitmap: "button_up_barrel",
            bitmap2: "button_down_barrel",
            scale: 0.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "modify",
                        data: "barrel"
                    });
                }
            }
        },
        "optic": {
            type: "button",
            x: (1000 / 7) * 4,
            y: 0,
            bitmap: "button_up_optic",
            bitmap2: "button_down_optic",
            scale: 0.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "modify",
                        data: "optic"
                    });
                }
            }
        },
        "RearGrip": {
            type: "button",
            x: (1000 / 7) * 5,
            y: 0,
            bitmap: "button_up_reargrip",
            bitmap2: "button_down_reargrip",
            scale: 0.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "modify",
                        data: "reargrip"
                    });
                }
            }
        },
        "stock": {
            type: "button",
            x: (1000 / 7) * 6,
            y: 0,
            bitmap: "button_up_stock",
            bitmap2: "button_down_stock",
            scale: 0.5,
            clicker: {
                onClick: function () {
                    Network.sendToServer("Guncraft.ButtonOnClick", {
                        name: "modify",
                        data: "stock"
                    });
                }
            }
        }
    }
});
modifyUI.setAsGameOverlay(true);
modifyUI.setDynamic(false);
var displayerUI = new UI.Window({
    location: {
        x: 0,
        y: 0,
        width: 300 * UIScale,
        height: 55 * UIScale,
    },
    drawing: [
        { type: "background", color: 0 },
        { type: "bitmap", x: 0, y: 0, scale: 1.425 / UIScale, bitmap: "displayer" }
    ],
    elements: {
        "content": {
            type: "text",
            x: 375,
            y: 25,
            text: "",
            multiline: false,
            format: true,
            font: {
                size: 50,
                align: com.zhekasmirnov.innercore.api.mod.ui.types.Font.ALIGN_CENTER,
                bold: true,
                color: android.graphics.Color.WHITE
            }
        }
    }
});
displayerUI.setAsGameOverlay(true);
displayerUI.setTouchable(false);
var magReloadUI = new UI.StandardWindow({
    standard: {
        inventory: {
            standard: true
        },
        header: {
            text: {
                text: Translation.translate("Magazine reloader")
            }
        }
    },
    drawing: [{ type: "background", color: 0 }],
    elements: (function () {
        var obj = {};
        for (var k = 0; k < 5; k++) {
            for (var i = 0; i < 10; i++) {
                obj["slot" + (i + 1 + k * 10)] = {
                    type: "slot",
                    x: i * 100,
                    y: 100 * k,
                    size: 96
                };
            }
        }
        return obj;
    })()
});
IDRegistry.genBlockID("magReloader");
Block.createBlockWithRotation("magReloader", [{
        name: Translation.translate("Magazine reloader"),
        texture: [
            ["magReloader_bottom", 0],
            ["magReloader_top", 0],
            ["magReloader_side", 0],
            ["magReloader_side", 0],
            ["magReloader_side", 0],
            ["magReloader_side", 0]
        ],
        inCreative: true,
    }], {
    base: 58
});
TileEntity.registerPrototype(BlockID["magReloader"], {
    useNetworkItemContainer: true,
    getScreenName: function (player, coords) {
        return "mag_reload_ui";
    },
    getScreenByName: function (screenName) {
        return magReloadUI;
    },
    init: function () {
        this.container.setGlobalAddTransferPolicy(function (container, name, id, count) {
            count = Math.min(count, Math.min(Item.getMaxStack(id), 10) - container.getSlot(name).count);
            if (Guncraft.getBulletData(IDRegistry.getNameByID(id)))
                return count;
            else
                return 0;
        });
    },
    click: function (id, count, data, coords, playerID, extra) {
        var magID = IDRegistry.getNameByID(id), magData = Guncraft.getMagData(magID);
        if (magData) {
            var player = new PlayerActor(playerID), magSlot = player.getSelectedSlot();
            for (var k = 1; k <= 50; k++) {
                var bulletItem = this.container.getSlot("slot" + k), bulletId = IDRegistry.getNameByID(bulletItem.id), bulletData = Guncraft.getBulletData(bulletId);
                if (!bulletData)
                    continue;
                for (var i = 0; i < magData.bulletName.length; i++) {
                    if (bulletData.parent == magData.bulletName[i]) {
                        var magCurBulletCount = extra.getInt("currentBulletCount", 0), magMaxBulletCount = magData.bulletMaxCount[i], emptyCount = magMaxBulletCount - magCurBulletCount;
                        if (emptyCount == 0)
                            return true;
                        var newBulletCount = bulletItem.count - emptyCount;
                        if (newBulletCount < 0)
                            emptyCount += newBulletCount;
                        var MagArr = magCurBulletCount
                            ? GuncraftUtil.getInventorySlotCompoundTag(playerID, magSlot).getListTag("magArr")
                            : new NBT.ListTag();
                        for (var i_2 = 0; i_2 < emptyCount; i_2++)
                            MagArr.putString(magCurBulletCount + i_2, bulletId);
                        extra.putString("bulletParent", bulletData.parent);
                        extra.putInt("maxBulletCount", magMaxBulletCount);
                        extra.putInt("currentBulletCount", magCurBulletCount + emptyCount);
                        var tag = new NBT.CompoundTag();
                        tag.putListTag("magArr", MagArr);
                        // @ts-ignore
                        extra.setCompoundTag(tag);
                        var scale = Math.round(((magMaxBulletCount - (magCurBulletCount + emptyCount))
                            / magMaxBulletCount * 100) + 1);
                        player.setInventorySlot(magSlot, id, 1, scale, extra);
                        if (newBulletCount > 0)
                            this.container.setSlot("slot" + k, bulletItem.id, newBulletCount, 0);
                        else
                            this.container.clearSlot("slot" + k);
                        break;
                    }
                }
            }
            return true;
        }
        else
            return false;
    },
    defaultValues: {}
});
/*Guncraft.createArmor("test_helmet", "test armor", {
    type: "helmet",
    level: 4,
}, {
    knockbackResist: 0.5,
    armor: 5,
    durability: 100
});
*/ 
Guncraft.createAttachment("hk416_standard_muzzle", "hk416 standard stock muzzle", {
    type: "muzzle",
    recoilCoefficient: 30,
    accuracyCoefficient: 12
});
Guncraft.createAttachment("hk416_standard_stock", "hk416 standard stock", {
    type: "stock",
    recoilCoefficient: 1,
    accuracyCoefficient: 12
});
Guncraft.createBullet("5.56*45mm_0", "5.56x45mm NATO M855A1", 60, {
    parent: "5.56*45mm",
    type: 0,
    damage: 30,
    ap: 3,
    speed: 47,
    recoilCoefficient: 1,
    accuracyCoefficient: 1,
}, {
    name: "5.56_45mm",
    meta: 0
});
Guncraft.createBullet("5.56*45mm_1", "5.56x45mm NATO M856A1", 60, {
    type: 2,
    parent: "5.56*45mm",
    damage: 30,
    ap: 3,
    speed: 47,
    recoilCoefficient: 1,
    accuracyCoefficient: 1,
}, {
    name: "5.56_45mm",
    meta: 0
});
Guncraft.createBullet("5.56*45mm_2", "5.56x45mm NATO M995 AP", 60, {
    parent: "5.56*45mm",
    type: 0,
    damage: 30,
    ap: 3.6,
    speed: 47,
    recoilCoefficient: 1,
    accuracyCoefficient: 1
}, {
    name: "5.56_45mm",
    meta: 0
});
Guncraft.createBullet("5.56*45mm_3", "5.56x45mm NATO MK262 mod 1", 60, {
    parent: "5.56*45mm",
    type: 0,
    damage: 30,
    ap: 3,
    speed: 48,
    recoilCoefficient: 1,
    accuracyCoefficient: 0.6,
}, {
    name: "5.56_45mm",
    meta: 0
});
Guncraft.createBullet("5.56*45mm_4", "5.56x45mm NATO MK318 mod 0", 60, {
    parent: "5.56*45mm",
    type: 0,
    damage: 30,
    ap: 3.3,
    speed: 48,
    recoilCoefficient: 1,
    accuracyCoefficient: 1
}, {
    name: "5.56_45mm",
    meta: 0
});
Guncraft.createBullet("5.56*45mm_5", ".223 REM", 60, {
    parent: "5.56*45mm",
    type: 0,
    damage: 28,
    ap: 2.6,
    speed: 50,
    recoilCoefficient: 1,
    accuracyCoefficient: 1
}, {
    name: "5.56_45mm",
    meta: 0
});
Guncraft.createBullet("5.56*45mm_6", "5.56x45mm NATO MK255 mod 1", 60, {
    parent: "5.56*45mm",
    type: 0,
    damage: 28,
    ap: 2.5,
    speed: 47,
    recoilCoefficient: 0.9,
    accuracyCoefficient: 1.1
}, {
    name: "5.56_45mm",
    meta: 0
});
Guncraft.createBullet("5.56*45mm_7", ".223 REM HP", 60, {
    parent: "5.56*45mm",
    type: 0,
    damage: 34,
    ap: 2.5,
    speed: 50,
    recoilCoefficient: 1,
    accuracyCoefficient: 1.2
}, {
    name: "5.56_45mm",
    meta: 0
});
Guncraft.createGun("hk416", "hk416", {
    slideStop: true,
    saveBullet: true,
    shotTimeout: {
        auto: 1,
        semi_auto: 2
    },
    accuracy: 7,
    recoil: 0.04,
    type: 4,
    mode: [1, 2],
    mag: ["STANAG"],
    bulletName: "5.56*45mm",
    attachment: {
        optic: [],
        muzzle: ["hk416_standard_muzzle"],
        underbarrel: [],
        barrel: [],
        reargrip: [],
        laser: [],
        stock: ["hk416_standard_stock"]
    },
    timeout: {
        loadMag: 2.4 * 20,
        unloadMag: 2.625 * 20,
        unloadMag2: 2.4375 * 20,
        mag2mag: 2.75 * 20,
        mag2mag2: 2.3 * 20,
        link2mag: 2 * 20,
        link2mag2: 2 * 20,
        sf: 0.85 * 20
    },
    fireSound: "guncraft.m4a1.fire"
});
Guncraft.createMag("STANAG", "STANAG magazine", {
    bulletMaxCount: [30],
    bulletName: ["5.56*45mm"],
    isMag: true
});
Item.addCreativeGroup("Guncraft.ASSAULTRIFLE", "ASSAULTRIFLE", [ItemID.hk416]);
Item.addCreativeGroup("Guncraft.5.56*45mm", "5.56*45mm", [ItemID["5.56*45mm_0"], ItemID["5.56*45mm_1"], ItemID["5.56*45mm_2"], ItemID["5.56*45mm_3"], ItemID["5.56*45mm_4"], ItemID["5.56*45mm_5"], ItemID["5.56*45mm_6"], ItemID["5.56*45mm_7"]]);
