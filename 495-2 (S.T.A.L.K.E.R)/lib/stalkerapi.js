LIBRARY({name: "StalkerAPI", version: 2.1, shared: true, api: "CoreEngine"});
var _LogError = Logger.LogError;
Logger.LogError = function (a, b) {
    alert("[ERROR]{" + b + "}" + a);
    _LogError(a, b);
};
var StalkerDev = {addGun: function (a) {
    this.mod_gun.push(a.id);
}, addAmmo: function (a) {
    this.mod_ammo.push(a.id);
}, addArmor: function (a) {
    this.mod_armor.push(a.id);
}, createGun: function () {
    Callback.invokeCallback("StalkerAddGun");
}, createAmmo: function () {
    Callback.invokeCallback("StalkerAddAmmo");
}, createArmor: function () {
    Callback.invokeCallback("StalkerAddArmor");
}, mod_gun: [], mod_ammo: [], mod_armor: [], gun: [], ammo: [], armor: []};
var Guns = {ShootingMode: {AUTO: -1, SINGLE: 1, DOUBLE: 2, TRIPLE: 3}, ShotType: {NORMAL: 1, SINGLE: 1, SHOTGUN: 2, MULTIPLE: 2}, MAX_DAMAGE: -1, getGun: function (sid) {
    for (var i = 0; i < StalkerDev.gun.length; i++) {
        if (StalkerDev.gun[i].id == sid) {
            return StalkerDev.gun[i];
        }
    }
    return false;
}, addGun: function (gun) {
    Callback.addCallback("StalkerAddGun", function () {
        var ammo_error = false;
        var ammo_error_str = "";
        var ammo_bullet = false;
        if (typeof gun.id != "string") {
            return Logger.LogError("{addGun} gun.id \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (Guns.getGun(gun.id) || StalkerDev.mod_gun.indexOf(gun.id) != -1) {
            return Logger.LogError("{addGun} \u043e\u0440\u0443\u0436\u0438\u0435 \u0441 id " + gun.id + " \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442", "StalkerAPI");
        }
        if (typeof gun.name != "string") {
            return Logger.LogError("{addGun} gun.name \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (typeof gun.ammo == "string") {
            gun.ammo = [gun.ammo];
        } else {
            if (!gun.ammo instanceof Array) {
                return Logger.LogError("{addGun} gun.ammo \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439 \u0438\u043b\u0438 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c \u0441\u0442\u0440\u043e\u043a", "StalkerAPI");
            }
        }
        for (var i = 0; i < gun.ammo.length; i++) {
            if (Ammo.getAmmo(gun.ammo[i]) == false && StalkerDev.mod_ammo.indexOf(gun.ammo[i]) == -1) {
                ammo_error = true;
                ammo_error_str += "gun.ammo[i],";
                continue;
            }
            if (Ammo.getBulletAmmo(gun.ammo[i])) {
                ammo_bullet = true;
            }
        }
        if (ammo_error) {
            return Logger.LogError("{addGun} \u041d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043e\u0435\u043f\u0440\u0438\u043f\u0430\u0441\u043e\u0432 \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 ID:" + ammo_error_str, "StalkerAPI");
        }
        if (typeof gun.accuracy != "number") {
            return Logger.LogError("{addGun} gun.accuracy \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        if (typeof gun.recoil != "number") {
            return Logger.LogError("{addGun} gun.recoil \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        if (typeof gun.rate != "number") {
            return Logger.LogError("{addGun} gun.rate \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        if (typeof gun.smoke != "number") {
            return Logger.LogError("{addGun} gun.smoke \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        if (gun.shotType != Guns.ShotType.NORMAL && gun.shotType != Guns.ShotType.SHOTGUN) {
            return Logger.LogError("{addGun} gun.shotType \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c ShotType.NORMAL \u0438\u043b\u0438 ShotType.SHOTGUN", "StalkerAPI");
        }
        if (typeof gun.shootingModes == "number") {
            gun.shootingModes = [gun.shootingModes];
        } else {
            if (gun.shootingModes instanceof Array) {
                var tmp, exit = false;
                for (var i = 0; i < gun.shootingModes.length; i++) {
                    if (exit) {
                        break;
                    }
                    for (var j = 0; j < gun.shootingModes.length; j++) {
                        if ((j + 1) == gun.shootingModes.length) {
                            exit = true;
                        }
                        if (gun.shootingModes[j] > gun.shootingModes[j + 1]) {
                            tmp = gun.shootingModes[j];
                            gun.shootingModes[j] = gun.shootingModes[j + 1];
                            gun.shootingModes[j + 1] = tmp;
                        }
                    }
                }
            } else {
                return Logger.LogError("{addGun} gun.shootingModes \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c", "StalkerAPI");
            }
        }
        if (typeof gun.texture == "string") {
            gun.texture = {name: gun.texture};
        } else {
            if (typeof gun.texture != "object") {
                return Logger.LogError("{addGun} gun.texture \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c", "StalkerAPI");
            }
        }
        if (typeof gun.texture.name != "string") {
            return Logger.LogError("{addGun} gun.texture.name \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (typeof gun.bullet != "object") {
            return Logger.LogError("{addGun} gun.bullet \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c", "StalkerAPI");
        }
        if (typeof gun.bullet.damage != "number") {
            return Logger.LogError("{addGun} gun.bullet.damage \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        if (typeof gun.bullet.speed != "number") {
            return Logger.LogError("{addGun} gun.bullet.speed \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        if (gun.bullet.texture && typeof gun.bullet.texture != "string") {
            return Logger.LogError("{addGun} gun.bullet.texture \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (ammo_bullet) {
            if (!gun.bullet.count || typeof gun.bullet.count != "number") {
                return Logger.LogError("{addGun} gun.bullet.count \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
            }
        }
        if (typeof gun.sounds != "string") {
            return Logger.LogError("{addGun} gun.sounds \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (typeof gun.fov == "number") {
            gun.fov = {level: gun.fov};
        } else {
            if (typeof gun.fov != "object") {
                return Logger.LogError("{addGun} gun.fov \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c", "StalkerAPI");
            }
        }
        if (typeof gun.fov.level != "number") {
            return Logger.LogError("{addGun} gun.fov.level \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        if (gun.fov.link && typeof gun.fov.link != "string") {
            return Logger.LogError("{addGun} gun.fov.link \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (gun.shotType == Guns.ShotType.SHOTGUN) {
            if (typeof gun.shotgun != "object") {
                return Logger.LogError("{addGun} gun.shotgun \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c", "StalkerAPI");
            }
            if (typeof gun.shotgun.count != "number") {
                return Logger.LogError("{addGun} gun.shotgun.count \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
            }
            if (typeof gun.shotgun.degreesSpread != "number") {
                return Logger.LogError("{addGun} gun.shotgun.degreesSpread \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
            }
        }
        if (granade) {
            if (typeof gun.granade != "object") {
                return Logger.LogError("{addGun} gun.granade \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c", "StalkerAPI");
            }
            if (typeof gun.granade.sounds != "string") {
                return Logger.LogError("{addGun} gun.granade.sounds \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
            }
            if (!gun.granade.count) {
                gun.granade.count = 1;
            } else {
                if (typeof gun.granade.count != "number") {
                    return Logger.LogError("{addGun} gun.shotgun.count \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
                }
            }
        }
        StalkerDev.gun.push(gun);
    });
}, addGuns: function (arrayGuns) {
    for (var i = 0; i < arrayGuns.length; i++) {
        Guns.addGun(arrayGuns[i]);
    }
}};
var Ammo = {Type: {MAGAZIN: 1, BULLET: 2}, getAmmo: function (sid) {
    for (var i = 0; i < StalkerDev.ammo.length; i++) {
        if (StalkerDev.ammo[i].id == sid) {
            return StalkerDev.ammo[i];
        }
    }
    return false;
}, getBulletAmmo: function (ammo) {
    if (Ammo.getAmmo(ammo).type == Ammo.Type.BULLET) {
        return true;
    }
    return false;
}, addAmmo: function (ammo) {
    Callback.addCallback("StalkerAddAmmo", function () {
        if (typeof ammo.id != "string") {
            return Logger.LogError("{addAmmo} ammo.id \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (Ammo.getAmmo(ammo.id) || StalkerDev.mod_ammo.indexOf(ammo.id) != -1) {
            return Logger.LogError("{addAmmo} \u0431\u043e\u0435\u043f\u0440\u0438\u043f\u0430\u0441\u044b \u0441 id " + ammo.id + " \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442", "StalkerAPI");
        }
        if (typeof ammo.name != "string") {
            return Logger.LogError("{addAmmo} ammo.name \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (ammo.gun_name && typeof ammo.gun_name != "string") {
            return Logger.LogError("{addAmmo} ammo.gun_name \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (typeof ammo.texture == "string") {
            ammo.texture = {name: ammo.texture};
        } else {
            if (typeof ammo.texture != "object") {
                return Logger.LogError("{addAmmo} ammo.texture \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c", "StalkerAPI");
            }
        }
        if (ammo.texture.prefix && typeof ammo.texture.prefix != "string") {
            return Logger.LogError("{addAmmo} ammo.texture.prefix \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (ammo.type != Ammo.Type.MAGAZIN && ammo.type != Ammo.Type.BULLET) {
            return Logger.LogError("{addAmmo} ammo.type \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c Ammo.Type.MAGAZIN \u0438\u043b\u0438 Ammo.Type.BULLET", "StalkerAPI");
        }
        if (ammo.type == Ammo.Type.MAGAZIN && typeof ammo.count != "number") {
            return Logger.LogError("{addAmmo} ammo.count \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        StalkerDev.ammo.push(ammo);
    });
}, addAmmos: function (arrayAmmos) {
    for (var i = 0; i < arrayAmmos.length; i++) {
        Ammo.addAmmo(arrayAmmos[i]);
    }
}};
var Armor = {Type: {ARMOR: 1, HELMET: 2, FULLARMOR: 3}, getArmor: function (sid) {
    for (var i = 0; i < StalkerDev.armor.length; i++) {
        if (StalkerDev.armor[i].id == sid || StalkerDev.armor[i].id + "_helmet" == sid || StalkerDev.armor[i].id + "_chestplate" == sid) {
            return StalkerDev.armor[i];
        }
    }
    return false;
}, addArmor: function (armor) {
    Callback.addCallback("StalkerAddArmor", function () {
        if (typeof armor.id != "string") {
            return Logger.LogError("{addArmor} armor.id \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (Armor.getArmor(armor.id) || StalkerDev.mod_armor.indexOf(armor.id) != -1) {
            return Logger.LogError("{addArmor} \u0431\u0440\u043e\u043d\u044f \u0441 id " + armor.id + " \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442", "StalkerAPI");
        }
        if (typeof armor.name != "string") {
            return Logger.LogError("{addArmor} armor.name \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        if (armor.type != Armor.Type.HELMET && armor.type != Armor.Type.ARMOR && armor.type != Armor.Type.FULLARMOR) {
            return Logger.LogError("{addArmor} armor.type \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c Armor.Type.ARMOR, Armor.Type.HELMET \u0438\u043b\u0438 Armor.Type.FULLARMOR", "StalkerAPI");
        }
        if (typeof armor.armor != "number") {
            return Logger.LogError("{addArmor} armor.armor \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        if (typeof armor.durability != "number") {
            return Logger.LogError("{addArmor} armor.durability \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c", "StalkerAPI");
        }
        if (typeof armor.texture == "string") {
            armor.texture = {name: armor.texture};
        } else {
            if (typeof armor.texture != "object") {
                return Logger.LogError("{addArmor} armor.texture \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c", "StalkerAPI");
            }
        }
        if (armor.texture.model && typeof armor.texture.model != "string") {
            return Logger.LogError("{addArmor} armor.texture.model \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439", "StalkerAPI");
        }
        StalkerDev.armor.push(ammo);
    });
}, addArmors: function (arrayArmors) {
    for (var i = 0; i < arrayArmors.length; i++) {
        Armor.addArmor(arrayArmors[i]);
    }
}};
var Stalker = {init: function (dir) {
    var addon_dir = dir;
    var mod_dir = __dir__;
    var config = JSON.parse(FileTools.ReadText(addon_dir + "stalkerLoadFiles.json"));
    if (config.copy == true) {
        return;
    }
    if (!config.dev) {
        config.dev = false;
    }
    if (!config.ignore) {
        config.ignore = [];
    }
    var resources = {};
    var _resources = JSON.parse(FileTools.ReadText(addon_dir + "build.config")).resources;
    for (var i = 0; i < _resources.length; i++) {
        resources[_resources[i].resourceType] = _resources[i].path;
    }
    if (new java.io.File(addon_dir + "/sounds/").exists()) {
        copyFolder(addon_dir + "sounds/", mod_dir + "sounds/", config.ignore);
    }
    if (new java.io.File(addon_dir + "/" + resources.gui + "crosshair/").exists()) {
        copyFolder(addon_dir + resources.gui + "crosshair/", mod_dir + "gui/crosshair/", config.ignore);
    }
    if (config.dev == false) {
        config.copy = true;
        FileTools.WriteText(addon_dir + "stalkerLoadFiles.json", JSON.stringify(config));
    }
}};
function copyFolder(outPath, inPath, ignore) {
    if (!ignore) {
        ignore = [];
    }
    var files = new java.io.File(outPath).list();
    for (var i = 0; i < files.length; i++) {
        if (indexOf(ignore, outPath + files[i]) != -1) {
            continue;
        }
        var file = new java.io.File(outPath + files[i]);
        var file_mod = new java.io.File(inPath + files[i]);
        if (file.isDirectory()) {
            file_mod.mkdir();
            copyFolder(outPath + files[i] + "/", inPath + files[i] + "/", ignore);
        } else {
            if (file_mod.exists()) {
                continue;
            }
            file_mod.createNewFile();
            copyFile(file, file_mod);
            if (config.dev == false) {
                file.delete();
            }
        }
    }
}
function copyFile(sourceFile, destFile) {
    if (!sourceFile.exists()) {
        return Logger.LogError("\u041e\u0448\u0438\u0431\u043a\u0430 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u043e\u0432", "StalkerAPI");
    }
    var source = new java.io.FileInputStream(sourceFile).getChannel();
    var destination = new java.io.FileOutputStream(destFile).getChannel();
    if (destination != null && source != null) {
        destination.transferFrom(source, 0, source.size());
    }
    if (source != null) {
        source.close();
    }
    if (destination != null) {
        destination.close();
    }
    Logger.Log("\u0424\u0430\u0439\u043b " + sourceFile.getAbsolutePath() + " \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d \u0432 " + destFile.getAbsolutePath(), "StalkerAPI");
}
function indexOf(array, value, index) {
    if (!index) {
        index = 0;
    }
    for (var i = index; i < array.length; i++) {
        if (new RegExp(array[i].replace(new RegExp("([\\\\|\\.|\\/])", "g"), "\\$1") + "$").test(value)) {
            return i;
        }
    }
    return -1;
}
EXPORT("Stalker", Stalker);
EXPORT("Guns", Guns);
EXPORT("Ammo", Ammo);
EXPORT("Armor", Armor);
EXPORT("StalkerDev", StalkerDev);

