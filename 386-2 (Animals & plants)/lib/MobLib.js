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
};
EXPORT("Mob", Mob);

