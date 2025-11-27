LIBRARY({name: "MobLib", version: 1, shared: false, api: "CoreEngine"});
var Mob = function (params) {
    if (!params instanceof Object) {
        throw "params \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c.";
    }
    if (!params.sid) {
        throw "params.sid \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043f\u043e\u043b\u0435\u043c.";
    }
    this.getID = function () {
        return params.sid;
    };
    this.getSID = function () {
        return params.sid;
    };
    if (!params.name) {
        params.name = this.getSID();
    }
    this.getName = function () {
        return params.name;
    };
    this.entity = MobRegistry.registerEntity(params.sid);
    if (!params.render) {
        params.render = 3;
    }
    if (!params.skin) {
        params.skin = "textures/entity/zombie/zombie.png";
    }
    var render;
    if (typeof params.render == "number") {
        render = new Render(params.render);
    } else {
        render = params.render;
    }
    var model = new EntityModel();
    model.setRender(render);
    var skin = new Texture(params.skin);
    model.setTexture(skin);
    this.entity.customizeVisual({getModels: function () {
        return {"main": model};
    }});
    if (!params.health) {
        params.health = 20;
    }
    if (!params.loot) {
        params.loot = [];
    }
    if (!params.loot instanceof Array) {
        if (params.loot instanceof Object) {
            params.loot = [params.loot];
        } else {
            throw "params.loot \u0434\u043e\u043b\u0436\u0435\u043d \u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u043c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u043e\u0432.";
        }
    }
    if (!params.hitbox) {
        params.hitbox = {w: 1, h: 2};
    } else {
        if (params.hitbox instanceof Object || typeof params.hitbox == "object") {
            if (params.hitbox instanceof Array) {
                throw "params.hitbox \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c.(params.hitbox instanceof Array)";
            }
        } else {
            if (typeof params.hitbox == "number") {
                params.hitbox = {w: params.hitbox, h: params.hitbox};
            } else {
                throw "params.hitbox \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c.(typeof params.hitbox == " + typeof params.hitbox + ")";
            }
        }
    }
    this.entity.customizeDescription({getHealth: function () {
        return params.health;
    }, getDrop: function (attacker) {
        return params.loot;
    }, getHitbox: function (attacker) {
        return params.hitbox;
    }});
    if (params.ai) {
        if (typeof params.ai == "number") {
            this.entity.setBaseType(params.ai);
        } else {
            this.entity.customizeAI({getAITypes: function () {
                return params.ai;
            }});
        }
    }
    this.spawn = function (x, y, z) {
        Entity.spawnCustom(this.getSID(), x, y, z);
    };
    this.egg_id = null;
    this.getEggID = function () {
        return this.egg_id;
    };
    this.registerEgg = function (texture) {
        this.egg_id = "egg_spawn_" + this.getID();
        IDRegistry.genItemID(this.getEggID());
        if (typeof texture == "string") {
            texture = {name: texture, meta: 0};
        }
        Item.createItem(this.getEggID(), "Spawn Egg " + this.getName(), texture);
        var custom_entity = this;
        Item.registerUseFunctionForID(ItemID[this.getEggID()], function (coords, item, block) {
            coords = coords.relative;
            custom_entity.spawn(coords.x + 0.5, coords.y, coords.z + 0.5);
        });
    };
    this.isItsMob = function (entity) {
        dump("MobLib", "Mob", Entity.getCustom(entity));
    };
};
function dump(tag, pref, b) {
    pref += ".";
    for (var i in b) {
        if (typeof b[i] == "object") {
            dump(tag, pref + i, b[i]);
        } else {
            Logger.Log(pref + i + ":" + b[i], tag);
        }
    }
}
Native.EntityType.HORSE = 23;
Native.EntityType.DONKEY = 24;
Native.EntityType.MULE = 25;
Native.EntityType.HORSE_SKELETON = 26;
Native.EntityType.HORSE_ZOMBIE = 27;
Native.EntityType.SKELETON_WITHER = 48;
Native.EntityType.WITCH = 45;
Native.EntityType.STRAY = 46;
Native.EntityType.HUSK = 47;
Native.EntityType.GUARDIAN = 49;
Native.EntityType.GUARDIAN_ELDER = 50;
Native.EntityType.ENDERMITE = 55;
Native.EntityType.SHULKER = 54;
Native.EntityType.ENDER_PEARL = 87;
Native.EntityType.MINECART_CHEST = 98;
Native.EntityType.MINECART_HOPPER = 96;
Native.EntityType.MINECART_TNT = 97;
Native.MobRenderType.mule = 54;
Native.MobRenderType.horseSkeleton = 54;
Native.MobRenderType.horse = 54;
Native.MobRenderType.horseZombie = 54;
Native.MobRenderType.donkey = 54;
Native.MobRenderType.skeletonWither = 68;
Native.MobRenderType.stray = 67;
Native.MobRenderType.husk = 66;
Native.MobRenderType.guardian = 60;
Native.MobRenderType.guardianElder = 60;
Native.MobRenderType.endermite = 71;
Native.MobRenderType.shulker = 50;
Native.MobRenderType.enderPearl = 33;
Native.MobRenderType.villager = 14;
Native.MobRenderType.blaze = 20;
Native.MobRenderType.boat = 39;
Native.MobRenderType.spider = 22;
Native.MobRenderType.creeper = 24;
Native.MobRenderType.enderman = 26;
Native.MobRenderType.ghast = 19;
Native.MobRenderType.ironGolem = 47;
Native.MobRenderType.lavaSlime = 18;
Native.MobRenderType.minecart = 38;
Native.MobRenderType.ocelot = 48;
Native.MobRenderType.painting = 36;
Native.MobRenderType.polarBear = 13;
Native.MobRenderType.zombiePigman = 17;
Native.MobRenderType.rabbit = 52;
Native.MobRenderType.silverfish = 23;
Native.MobRenderType.skeleton = 21;
Native.MobRenderType.slime = 25;
Native.MobRenderType.snowGolem = 49;
Native.MobRenderType.squid = 40;
Native.MobRenderType.witch = 53;
Native.MobRenderType.zombie = 16;
Native.MobRenderType.villagerZombie = 44;
Native.MobRenderType.arrow = 27;
Native.MobRenderType.egg = 31;
Native.MobRenderType.expPotion = 51;
Native.MobRenderType.experienceOrb = 45;
Native.MobRenderType.fallingTile = 37;
Native.MobRenderType.snowball = 32;
Native.MobRenderType.thrownPotion = 34;
Native.MobRenderType.smallFireball = 42;
Native.MobRenderType.fireball = 41;
Native.MobRenderType.fishHook = 29;
Native.MobRenderType.lightningBolt = 46;
EXPORT("Mob", Mob);

