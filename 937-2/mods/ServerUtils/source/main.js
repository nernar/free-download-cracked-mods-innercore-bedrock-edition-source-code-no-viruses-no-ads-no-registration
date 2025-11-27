try {
    __config__.checkAndRestore(FileTools.ReadText(__dir__ + "config.json"));
}
catch (e) { }
function forEachEnum(anum_, func) {
    for (var key in anum_)
        if (!/^\d+$/.test(key))
            func(key, anum_[key]);
}
function translate(text, values) {
    var message = Translation.translate(text);
    if (values) {
        for (var i in values)
            message = message.replace("%v", values[i]);
    }
    return message;
}
function getName(id, data) {
    return Translation.translate(Item.getName(id, data));
}
function getMessage(packet) {
    if (packet.values)
        return translate(packet.message, packet.values[0]);
    return translate(packet.message, []);
}
Network.addClientPacket("server_utils.message_player", function (packet) {
    Game.message(getMessage(packet));
});
Network.addClientPacket("server_utils.alert_player", function (packet) {
    alert(getMessage(packet));
});
function message(client, message) {
    var values = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        values[_i - 2] = arguments[_i];
    }
    var packet = { message: message, values: values };
    client.send("server_utils.message_player", packet);
}
function alert_message(client, message) {
    var values = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        values[_i - 2] = arguments[_i];
    }
    var packet = { message: message, values: values };
    client.send("server_utils.alert_player", packet);
}
Network.addClientPacket("server_utils.setPositionPlayer", function (packet) {
    Player.setPosition(packet.x, packet.y, packet.z);
});
function setPositionPlayer(player, x, y, z) {
    Entity.setPosition(player, x, y, z);
    var client = Network.getClientForPlayer(player);
    var packet = { x: x, y: y, z: z };
    client && client.send("server_utils.setPositionPlayer", packet);
}
var EnumHelp = /** @class */ (function () {
    function EnumHelp(enum_obj) {
        this.posts = [];
        var self = this;
        forEachEnum(enum_obj, function (name, value) { return name != "MAX_VALUE" ? self.value = Math.max(self.value, value) : 0; });
        this.enum_obj = enum_obj;
    }
    EnumHelp.prototype.add = function (name) {
        this.enum_obj[this.enum_obj[name] = this.value] = name;
        this.value++;
        this.enum_obj[this.enum_obj["MAX_VALUE"] = this.value] = "MAX_VALUE";
        var value = ++this.value;
        for (var i in this.posts) {
            var name_1 = this.posts[i];
            this.enum_obj[this.enum_obj[name_1] = value] = name_1;
            value++;
        }
    };
    EnumHelp.prototype.addPost = function (name) {
        this.posts.push(name);
    };
    EnumHelp.prototype.get = function (name) {
        return this.enum_obj[name];
    };
    return EnumHelp;
}());
function angleFor2dVector(x1, y1, x2, y2) {
    var v = Math.acos((x1 * x2 + y1 * y2) / (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2)));
    return isNaN(v) ? 0 : v;
}
function angleFor3dVector(x1, y1, z1, x2, y2, z2) {
    var v = Math.acos((x1 * x2 + y1 * y2 + z1 * z2) / (Math.sqrt(x1 * x1 + y1 * y1 + z1 * z1) * Math.sqrt(x2 * x2 + y2 * y2 + z2 * z2)));
    return isNaN(v) ? 0 : v;
}
function rotateMesh(mesh, x1, x2, y1, y2, dx, dy, dz, radius) {
    var angleXZ = angleFor2dVector(0, radius, dx, dz);
    if (dx == 0 && dz == 0)
        var angleY = Math.PI / 2;
    else
        var angleY = angleFor3dVector(dx, 0, dz, dx, dy, dz);
    mesh.rotate(0 < y2 - y1 ? -angleY : angleY, 0 < x2 - x1 ? -angleXZ : angleXZ, 0);
}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DEF_AUCTION_SLOTS = 8;
var DEF_RADIUS_WORLD = 32;
var DEF_XP = 1;
var DEF_MARK_ADDED = 5;
var DEF_RANSOM_ADDED = 5;
var Priviliege = /** @class */ (function () {
    function Priviliege(id) {
        this.hash_map = {};
        this.id = id;
    }
    Priviliege.prototype.getId = function () {
        return this.id;
    };
    Priviliege.prototype.canPermission = function (permission, user) {
        return false;
    };
    Priviliege.prototype.getValueDef = function (id, def) {
        var result = this.hash_map[id];
        if (result === undefined)
            return def;
        return result;
    };
    Priviliege.register = function (clazz) {
        Priviliege.privilieges[clazz.getId()] = clazz;
    };
    Priviliege.get = function (id) {
        var result = Priviliege.privilieges[id];
        if (!result)
            return Priviliege.privilieges[Priviliege.DEF];
        return result;
    };
    Priviliege.privilieges = {};
    Priviliege.DEF = "player";
    (function () {
        Callback.addCallback("AddedPriviliege", function (nickname, result, priviliege_name) {
            Logger.Log("Start added priviliege " + nickname + ", " + priviliege_name, "ServerUtils");
            var user = UsersStorage.getUserForName(nickname);
            if (user) {
                user.setPriviege(priviliege_name);
                result.set(true);
                Logger.Log("Result added priviliege " + nickname + ", " + user.getPriviliege().getId(), "ServerUtils");
                return;
            }
            Logger.Log("Error added priviliege " + nickname + ", " + priviliege_name, "ServerUtils");
        });
    })();
    return Priviliege;
}());
Translation.addTranslation("%v experience is required to use auctions, you have %v", {
    ru: "Для использования аукционов требуется %v опыта, у вас %v"
});
var PlayerPriviliege = /** @class */ (function (_super) {
    __extends(PlayerPriviliege, _super);
    function PlayerPriviliege(id) {
        return _super.call(this, id) || this;
    }
    PlayerPriviliege.prototype.canPermission = function (permission, user) {
        if (permission == Permission.USE_AUCTION) {
            var xp = user.getXp();
            user.message("%v experience is required to use auctions, you have %v", 10, xp);
            return xp > 10;
        }
        return _super.prototype.canPermission.call(this, permission, user);
    };
    return PlayerPriviliege;
}(Priviliege));
var ZbtPriviliege = /** @class */ (function (_super) {
    __extends(ZbtPriviliege, _super);
    function ZbtPriviliege(id) {
        var _this = _super.call(this, id) || this;
        _this.hash_map["auction_slots"] = 10;
        _this.hash_map["radius_world"] = DEF_RADIUS_WORLD + 128;
        _this.hash_map["daily_reward"] = 1;
        _this.hash_map["ransom_auction_added_item"] = 0;
        return _this;
    }
    ZbtPriviliege.prototype.canPermission = function (permission, user) {
        switch (permission) {
            case Permission.CREATE_HOME:
                return true;
            case Permission.USE_HOME:
                return true;
        }
        return _super.prototype.canPermission.call(this, permission, user);
    };
    return ZbtPriviliege;
}(PlayerPriviliege));
/*
====ЗБТ
- Слотов на аукционе 10
- Радиус мира больше на 128 блока
- Ежедневная награда 1
- Наценка на выкуп 0%
- Права использования home и sethome
*/
var ObtPriviliege = /** @class */ (function (_super) {
    __extends(ObtPriviliege, _super);
    function ObtPriviliege(id) {
        var _this = _super.call(this, id) || this;
        _this.hash_map["auction_slots"] = 10;
        _this.hash_map["radius_world"] = DEF_RADIUS_WORLD + 32;
        _this.hash_map["ransom_auction_added_item"] = 0;
        return _this;
    }
    ObtPriviliege.prototype.canPermission = function (permission, user) {
        switch (permission) {
            case Permission.CREATE_HOME:
                return true;
            case Permission.USE_HOME:
                return true;
        }
        return _super.prototype.canPermission.call(this, permission, user);
    };
    return ObtPriviliege;
}(PlayerPriviliege));
/*
====ОБТ
- Слотов на аукционе 10
- Радиус мира больше на 32 блока
- Наценка на выкуп 0%
- Права использования home и sethome
*/
var VipPriviliege = /** @class */ (function (_super) {
    __extends(VipPriviliege, _super);
    function VipPriviliege(id) {
        var _this = _super.call(this, id) || this;
        _this.hash_map["auction_slots"] = 16;
        _this.hash_map["radius_world"] = DEF_RADIUS_WORLD + 64;
        _this.hash_map["guest_xp"] = 2;
        _this.hash_map["daily_reward"] = 5;
        _this.hash_map["markup_auction_added_item"] = 0;
        _this.hash_map["ransom_auction_added_item"] = 0;
        return _this;
    }
    VipPriviliege.prototype.canPermission = function (permission, user) {
        switch (permission) {
            case Permission.CREATE_HOME:
                return true;
            case Permission.USE_HOME:
                return true;
            case Permission.CREATE_WARP:
                return true;
            case Permission.USE_AUCTION:
                return true;
        }
        return _super.prototype.canPermission.call(this, permission, user);
    };
    return VipPriviliege;
}(PlayerPriviliege));
Priviliege.register(new Priviliege(Priviliege.DEF));
Priviliege.register(new VipPriviliege("vip"));
Priviliege.register(new ZbtPriviliege("zbt"));
Priviliege.register(new ObtPriviliege("obt"));
var Permission;
(function (Permission) {
    Permission[Permission["USE_AUCTION"] = 0] = "USE_AUCTION";
    Permission[Permission["ADDED_ITEM_FOR_AUCTION"] = 1] = "ADDED_ITEM_FOR_AUCTION";
    Permission[Permission["CONTROL_MONEY"] = 2] = "CONTROL_MONEY";
    Permission[Permission["CONTROL_PERMISSION"] = 3] = "CONTROL_PERMISSION";
    Permission[Permission["CREATE_HOME"] = 4] = "CREATE_HOME";
    Permission[Permission["CREATE_WARP"] = 5] = "CREATE_WARP";
    Permission[Permission["USE_HOME"] = 6] = "USE_HOME";
    Permission[Permission["USE_WARP"] = 7] = "USE_WARP";
    Permission[Permission["REMOVE_WARP"] = 8] = "REMOVE_WARP";
    Permission[Permission["REMOVE_WARP_NOT_OWNER"] = 9] = "REMOVE_WARP_NOT_OWNER";
    Permission[Permission["SPAWN_COMMAND"] = 10] = "SPAWN_COMMAND";
    Permission[Permission["ACCESS_COMMAND"] = 11] = "ACCESS_COMMAND";
    Permission[Permission["WORLD_RENDER_TEXT_COMMAND"] = 12] = "WORLD_RENDER_TEXT_COMMAND";
    Permission[Permission["AUCTION_COMMAND"] = 13] = "AUCTION_COMMAND";
    Permission[Permission["MAX_VALUE"] = 14] = "MAX_VALUE";
})(Permission || (Permission = {}));
;
var PermissionStorage = /** @class */ (function () {
    function PermissionStorage(permissions) {
        this.permissions = [];
        if (permissions) {
            for (var i = 0; i < permissions.length; i++)
                this.permissions[i] = permissions[i];
            if (Permission.MAX_VALUE != permissions.length)
                for (var i = permissions.length; i < Permission.MAX_VALUE; i++)
                    this.permissions[i] = 0;
        }
        else
            for (var i = 0; i < Permission.MAX_VALUE; i++)
                this.permissions[i] = 0;
    }
    PermissionStorage.prototype.setPermission = function (permission, value) {
        if (value === void 0) { value = 1; }
        this.permissions[permission] = value;
    };
    PermissionStorage.prototype.canPermission = function (permission) {
        return !!this.permissions[permission];
    };
    PermissionStorage.prototype.getPermissions = function () {
        return this.permissions;
    };
    return PermissionStorage;
}());
var User = /** @class */ (function () {
    function User(name, many) {
        this.user_name = String(name);
        this.many = many;
    }
    User.prototype.getUserName = function () {
        return this.user_name;
    };
    User.prototype.getMoney = function () {
        return this.many;
    };
    User.prototype.setMoney = function (many) {
        this.many = many;
    };
    User.prototype.addMoney = function (many) {
        this.setMoney(this.getMoney() + many);
    };
    User.prototype.toJson = function () {
        return {
            user_name: this.getUserName(),
            money: this.getMoney()
        };
    };
    User.prototype.getPlayerUid = function () {
        return -1;
    };
    User.prototype.message = function (str) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        Game.message(translate(str, values));
    };
    return User;
}());
;
var ClientUser = /** @class */ (function (_super) {
    __extends(ClientUser, _super);
    function ClientUser(user_name, addedAuctionItem, many, mark_up_auction_added_item, ransom_auction_added_item) {
        var _this = _super.call(this, user_name, many) || this;
        _this.addedAuctionItem = addedAuctionItem;
        _this.mark_up_auction_added_item = mark_up_auction_added_item;
        _this.ransom_auction_added_item = ransom_auction_added_item;
        return _this;
    }
    ClientUser.prototype.canAddedAuctionItem = function () {
        return this.addedAuctionItem;
    };
    ClientUser.prototype.getMarkUpAuctionAddedItem = function () {
        return this.mark_up_auction_added_item;
    };
    ClientUser.prototype.getRansomAuctionAddedItem = function () {
        return this.ransom_auction_added_item;
    };
    ClientUser.prototype.getPlayerUid = function () {
        return Player.get();
    };
    ClientUser.fromJSON = function (json) {
        return new ClientUser(json.user_name, json.addedAuctionItem, json.money, json.mark_up_auction_added_item, json.ransom_auction_added_item);
    };
    return ClientUser;
}(User));
var GLOBAL_PERMISSION = (function () {
    var permissions = new PermissionStorage([]);
    forEachEnum(Permission, function (name, value) { return permissions.setPermission(value, Number(__config__.get("global_permission." + name))); });
    return permissions;
})();
var ServerUser = /** @class */ (function (_super) {
    __extends(ServerUser, _super);
    function ServerUser(playerUid, name, addional, permissions, many, current_priviege) {
        if (addional === void 0) { addional = {}; }
        if (many === void 0) { many = 0; }
        if (current_priviege === void 0) { current_priviege = undefined; }
        var _this = _super.call(this, name, many) || this;
        _this.addional = {};
        _this.playerUid = playerUid;
        _this.addional = addional;
        _this.permissions = new PermissionStorage(permissions);
        _this.setPriviege(current_priviege);
        return _this;
    }
    ServerUser.prototype.setPriviege = function (id) {
        if (id)
            this.current_priviege = Priviliege.get(id);
        else
            this.current_priviege = Priviliege.get(Priviliege.DEF);
    };
    ServerUser.prototype.getPlayerUid = function () {
        return this.playerUid;
    };
    ServerUser.prototype.message = function (str) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        var client = Network.getClientForPlayer(this.getPlayerUid());
        client && message(client, str, values);
    };
    ServerUser.prototype.isOperator = function () {
        return new PlayerActor(this.playerUid).isOperator();
    };
    ServerUser.prototype.setPermission = function (permission, value) {
        if (value === void 0) { value = 1; }
        this.permissions.setPermission(permission, value);
    };
    ServerUser.prototype.canPermission = function (permission) {
        return this.isOperator() || this.current_priviege.canPermission(permission, this) || this.permissions.canPermission(permission) || GLOBAL_PERMISSION.canPermission(permission);
    };
    ServerUser.prototype.getPriviliege = function () {
        return this.current_priviege;
    };
    ServerUser.prototype.getPriviliegeValue = function (id, def) {
        return this.current_priviege.getValueDef(id, def);
    };
    ServerUser.prototype.getXp = function () {
        return this.getDataDef("xp", 0);
    };
    ServerUser.prototype.setXp = function (xp) {
        this.setData("xp", xp);
    };
    ServerUser.prototype.addXp = function (xp) {
        this.setXp(this.getXp() + xp);
    };
    ServerUser.prototype.toClientJson = function () {
        return {
            user_name: this.getUserName(),
            money: this.getMoney(),
            addedAuctionItem: this.canPermission(Permission.ADDED_ITEM_FOR_AUCTION),
            mark_up_auction_added_item: this.getPriviliegeValue("mark_up_auction_added_item", DEF_MARK_ADDED),
            ransom_auction_added_item: this.getPriviliegeValue("ransom_auction_added_item", DEF_RANSOM_ADDED)
        };
    };
    ServerUser.prototype.getData = function (name) {
        return this.addional[name];
    };
    ServerUser.prototype.getDataDef = function (name, def) {
        return this.getData(name) || def;
    };
    ServerUser.prototype.setData = function (name, data) {
        this.addional[name] = data;
    };
    ServerUser.prototype.toJson = function () {
        var json = _super.prototype.toJson.call(this);
        return {
            user_name: json.user_name,
            money: this.getMoney(),
            playerUid: this.playerUid,
            permissions: this.permissions.getPermissions(),
            addional: this.addional,
            current_priviege: this.current_priviege.getId()
        };
    };
    ServerUser.fromJSON = function (json) {
        return new ServerUser(json.playerUid, json.user_name, json.addional, json.permissions, json.money, json.current_priviege);
    };
    return ServerUser;
}(User));
(function () {
    Callback.addCallback("QuestGive", function (main, isLeft, tab, quest, player, value, is, result) {
        if (value && result) {
            var user = UsersStorage.getUserIfCreate(player);
            user && user.addXp(user.getPriviliegeValue("guest_xp", DEF_XP));
        }
    });
})();
var UsersStorage;
(function (UsersStorage) {
    var user_storage = {};
    var user_storage_nicknames = {};
    function getUserIfCreate(playerUid) {
        if (playerUid == -1) {
            var client = Network.getClientForPlayer(playerUid);
            client && client.disconnect("What?");
            return null;
        }
        var user = user_storage[playerUid];
        if (!user) {
            user = new ServerUser(playerUid, Entity.getNameTag(playerUid));
            Logger.Log("Create ServerUser " + user.getUserName(), "ServerUtils");
            return user_storage_nicknames[user.getUserName()] = user_storage[playerUid] = user;
        }
        return user;
    }
    UsersStorage.getUserIfCreate = getUserIfCreate;
    function canPermission(player, permission) {
        var user = getUserIfCreate(player);
        return user && user.canPermission(permission);
    }
    UsersStorage.canPermission = canPermission;
    function getUserForName(nickname) {
        var user = user_storage_nicknames[nickname];
        if (!user) {
            var player = CommandUtils.getPlayerByName(nickname);
            if (player == null)
                return null;
            user = UsersStorage.getUserIfCreate(player);
            user_storage_nicknames[user.getUserName()] = user;
        }
        return user;
    }
    UsersStorage.getUserForName = getUserForName;
    function getUsers() {
        return user_storage;
    }
    UsersStorage.getUsers = getUsers;
    Callback.addCallback("ServerPlayerLoaded", function (playerUid) { return getUserIfCreate(playerUid); });
    Callback.addCallback("LevelLeft", function () { return user_storage = {}; });
    Saver.addSavesScope("server_utils.user_storage", function (scope) {
        var users = scope.users || {};
        var result = {};
        for (var key in users) {
            var json = users[key];
            if (json.playerUid == -1 || String(json.user_name) == "")
                continue;
            var user = result[key] = ServerUser.fromJSON(users[key]);
            user_storage_nicknames[user.getUserName()] = user;
        }
        user_storage = result;
    }, function () {
        var users = {};
        for (var key in user_storage)
            users[key] = user_storage[key].toJson();
        return { users: users };
    });
})(UsersStorage || (UsersStorage = {}));
Translation.addTranslation("Error parse arguments, not found enum %v", {
    ru: "Ошибка чтения аргументов, не найдено в енуме %v"
});
Translation.addTranslation("Error parse arguments, not found player", {
    ru: "Ошибка чтения аргументов, не найден игрок"
});
Translation.addTranslation("Error parse arguments length args_types != raw_arfs", {
    ru: "Ошибка чтения аргументов args_types != raw_arfs"
});
Translation.addTranslation("Not permission use command", {
    ru: "Нет разрешения на использования комманды"
});
Translation.addTranslation("Error run command", {
    ru: "Ошибка при выполнении команды"
});
Translation.addTranslation("Create home, pos %v %v %v", {
    ru: "Создана точка дома, координаты %v %v %v"
});
Translation.addTranslation("Teleport from %v %v %v", {
    ru: "Телепортация в %v %v %v"
});
Translation.addTranslation("Not found warp %v", {
    ru: "Не найден warp %v"
});
Translation.addTranslation("You are not the owner of warp %v", {
    ru: "Вы не владелец warp %v"
});
Translation.addTranslation("You have reached the maximum number of warp or warp with the given name already exists", {
    ru: "Вы достигли лимита по warp или warp с данным именем уже есть"
});
Translation.addTranslation("Not found args_types", {
    ru: "Не найден нужный args_types"
});
var CommandUtils = /** @class */ (function () {
    function CommandUtils() {
    }
    CommandUtils.getPlayerByName = function (name) {
        var players = Network.getConnectedPlayers();
        for (var i in players) {
            var player = players[i];
            if (String(Entity.getNameTag(player)) == name)
                return player;
        }
        return null;
    };
    return CommandUtils;
}());
var CommandArgType;
(function (CommandArgType) {
    CommandArgType[CommandArgType["NUMBER"] = 0] = "NUMBER";
    CommandArgType[CommandArgType["STRING"] = 1] = "STRING";
    CommandArgType[CommandArgType["PLAYER"] = 2] = "PLAYER";
    CommandArgType[CommandArgType["BOOLEAN"] = 3] = "BOOLEAN";
    CommandArgType[CommandArgType["ENUM"] = 4] = "ENUM";
})(CommandArgType || (CommandArgType = {}));
var Command = /** @class */ (function () {
    function Command(args_types, enum_local) {
        this.commandsArgsTypes = [];
        this.permission = Permission.MAX_VALUE;
        this.args_types = args_types;
        this.enum_local = enum_local;
    }
    Command.prototype.addArgsTypes = function (types) {
        this.commandsArgsTypes.push(types);
    };
    Command.prototype.setPermissionUseCommand = function (permission) {
        this.permission = permission;
    };
    Command.prototype.getArgsTypes = function () {
        return this.args_types;
    };
    Command.prototype.splitCommand = function (command) {
        var args = [""];
        var str = false;
        for (var i = 0; i < command.length; i++) {
            var symbol = command.charAt(i);
            if (symbol == " " && !str)
                args.push("");
            if (symbol == "\"" || symbol == "'") {
                str = !str;
                continue;
            }
            if (symbol != " " || str)
                args[args.length - 1] += symbol;
        }
        args.shift();
        return args;
    };
    Command.prototype.parseArguments = function (client, raw_args, args_types) {
        if (!args_types) {
            if (this.args_types.length == raw_args.length)
                args_types = this.args_types;
            else
                for (var i in this.commandsArgsTypes) {
                    var types = this.commandsArgsTypes[i];
                    if (types.length == raw_args.length) {
                        args_types = types;
                        break;
                    }
                }
        }
        if (!args_types || args_types.length != raw_args.length) {
            this.message(client, "Error parse arguments length args_types != raw_arfs");
            return null;
        }
        var args = [];
        for (var i in raw_args) {
            var arg = raw_args[i];
            switch (args_types[i]) {
                case CommandArgType.NUMBER:
                    args.push(Number(arg));
                    break;
                case CommandArgType.STRING:
                    args.push(arg);
                    break;
                case CommandArgType.PLAYER:
                    if (arg == "@s")
                        args.push(client ? client.getPlayerUid() : Player.get());
                    else {
                        var playerUid = CommandUtils.getPlayerByName(arg);
                        if (!playerUid) {
                            this.message(client, "Error parse arguments, not found player %v", arg);
                            return null;
                        }
                        args.push(playerUid);
                    }
                    break;
                case CommandArgType.BOOLEAN:
                    args.push(arg == "true" || arg == "false");
                    break;
                case CommandArgType.ENUM:
                    var value = this.enum_local[arg.toUpperCase()];
                    if (typeof value == "string")
                        args.push(Number(value));
                    else if (value === undefined) {
                        this.message(client, "Error parse arguments, not found enum %v", arg.toUpperCase() + "\n" + JSON.stringify(this.enum_local));
                        return null;
                    }
                    args.push(value);
                    break;
            }
        }
        return args;
    };
    Command.prototype.canUseCommnad = function (player) {
        if (this.permission != Permission.MAX_VALUE && UsersStorage.getUserIfCreate(player).canPermission(this.permission))
            return true;
        return new PlayerActor(player).isOperator();
    };
    Command.prototype.message = function (client, text) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        if (!client) {
            Game.message(getMessage({ message: text, values: values }));
            return;
        }
        message(client, text, values);
    };
    Command.prototype.runServer = function (client, args) {
        return true;
    };
    Command.prototype.runClient = function (raw_args) {
        return true;
    };
    return Command;
}());
var CommandGetAccess = /** @class */ (function (_super) {
    __extends(CommandGetAccess, _super);
    function CommandGetAccess(commands) {
        var _this = _super.call(this, []) || this;
        _this.commands = commands;
        _this.setPermissionUseCommand(Permission.ACCESS_COMMAND);
        return _this;
    }
    CommandGetAccess.prototype.runServer = function (client, args) {
        var msg = "====Access Command====";
        var playerUid = client.getPlayerUid();
        var _loop_1 = function (name) {
            var command = this_1.commands[name];
            if (command.canUseCommnad(playerUid)) {
                var args_types = command.getArgsTypes();
                var args_m_1 = "";
                for (var i in args_types) {
                    switch (args_types[i]) {
                        case CommandArgType.NUMBER:
                            args_m_1 += "number ";
                            break;
                        case CommandArgType.STRING:
                            args_m_1 += "string ";
                            break;
                        case CommandArgType.PLAYER:
                            args_m_1 += "player ";
                            break;
                        case CommandArgType.BOOLEAN:
                            args_m_1 += "boolean ";
                            break;
                        case CommandArgType.ENUM:
                            forEachEnum(command.enum_local, function (name, value) { return args_m_1 += name + "/"; });
                            args_m_1 += "";
                            break;
                    }
                }
                msg += "\n" + name;
            }
        };
        var this_1 = this;
        for (var name in this.commands) {
            _loop_1(name);
        }
        this.message(client, msg);
        return true;
    };
    return CommandGetAccess;
}(Command));
var CommandRegistry = /** @class */ (function () {
    function CommandRegistry() {
    }
    CommandRegistry.runServer = function (command, client, packet) {
        if (packet.raw_args && command.canUseCommnad(client.getPlayerUid())) {
            var args = command.parseArguments(client, packet.raw_args);
            if (args && !command.runServer(client, args)) {
                command.message(client, "Error run command");
                return false;
            }
            return true;
        }
        else
            command.message(client, "Not permission use command");
        return false;
    };
    CommandRegistry.registry = function (name, command) {
        this.commands["/" + name] = command;
        Network.addServerPacket("server_utils.command.use_command." + name, function (client, packet) {
            return CommandRegistry.runServer(command, client, packet);
        });
    };
    CommandRegistry.runServerCommandForPlayer = function (client, cmd) {
        var command = CommandRegistry.commands[cmd.split(" ")[0]];
        if (command) {
            var raw_args = command.splitCommand(cmd);
            var packet = { raw_args: raw_args };
            return CommandRegistry.runServer(command, client, packet);
        }
        return false;
    };
    CommandRegistry.commands = {};
    (function () {
        var cmd = new CommandGetAccess(CommandRegistry.commands);
        CommandRegistry.registry("access", cmd);
        CommandRegistry.registry("h", cmd);
        Callback.addCallback("NativeCommand", function (cmd) {
            var name = cmd.split(" ")[0];
            var command = CommandRegistry.commands[name];
            if (command) {
                var raw_args = command.splitCommand(cmd);
                var packet = { raw_args: raw_args };
                var args = command.parseArguments(null, raw_args);
                if (args && command.runClient(args)) {
                    Network.sendToServer("server_utils.command.use_command." + name.replace("/", ""), packet);
                    Game.prevent();
                }
            }
        });
    })();
    return CommandRegistry;
}());
//example
/*
class TestCommand extends Command {
    constructor(){
        super([]);
    }

    public runServer(client: NetworkClient, args: any[]): boolean {
        return CommandRegistry.runServerCommandForPlayer(client, "/rt 'Жопа негра' 16",);
    }
}

CommandRegistry.registry("test", new TestCommand());
*/ 
var GlobalSaves;
(function (GlobalSaves) {
    var SAVES = {};
    var handlers = [];
    function getData(name) {
        return SAVES[name];
    }
    GlobalSaves.getData = getData;
    function getDataDef(name, def) {
        return GlobalSaves.getData(name) || def;
    }
    GlobalSaves.getDataDef = getDataDef;
    function setData(name, data) {
        SAVES[name] = data;
    }
    GlobalSaves.setData = setData;
    function addHandler(handler) {
        handlers.push(handler);
    }
    GlobalSaves.addHandler = addHandler;
    Saver.addSavesScope("server_utils.global_saves", function (scope) {
        SAVES = scope || {};
        for (var i in handlers)
            handlers[i].onRead();
    }, function () {
        for (var i in handlers)
            handlers[i].onSave();
        return SAVES;
    });
    Callback.addCallback("LevelLeft", function () { return SAVES = {}; });
})(GlobalSaves || (GlobalSaves = {}));
var ClientEntity = /** @class */ (function () {
    function ClientEntity(entity) {
        this.entity = entity;
    }
    ClientEntity.buildMeshForText = function (text, scale, text_color) {
        if (scale === void 0) { scale = 1; }
        if (text_color === void 0) { text_color = [0, 0, 0, 0]; }
        var mesh = new RenderMesh();
        var def_scle = 8;
        var h_scale = 1 * (1 / def_scle * .75) * scale;
        var x = 0;
        var y = 0;
        var width = 0;
        var height = h_scale;
        mesh.setColor(text_color[0], text_color[1], text_color[2], text_color[3]);
        mesh.setNormal(0, 0, 1);
        for (var i = 0; i < text.length; i++) {
            var symbol = text.charAt(i);
            if (symbol == "\n") {
                y -= h_scale;
                height = Math.max(height, Math.abs(y));
                x = 0;
                continue;
            }
            else if (symbol == " ") {
                x += this.symbols["A"].w * def_scle * scale;
                continue;
            }
            var info = this.symbols[symbol];
            if (!info)
                continue;
            var w_scale = info.w * def_scle * scale;
            mesh.addVertex(x, y, 0, info.x, info.y + info.h);
            mesh.addVertex(x + w_scale, y, 0, info.x + info.w, info.y + info.h);
            mesh.addVertex(x, y + h_scale, 0, info.x, info.y);
            mesh.addVertex(x + w_scale, y, 0, info.x + info.w, info.y + info.h);
            mesh.addVertex(x, y + h_scale, 0, info.x, info.y);
            mesh.addVertex(x + w_scale, y + h_scale, 0, info.x + info.w, info.y);
            x += w_scale;
            width = Math.max(width, x);
        }
        mesh.translate(-width / 2, height / 2, 0);
        return { mesh: mesh, w: width, h: height };
    };
    ClientEntity.prototype.getText = function (text) {
        return Translation.translate(text);
    };
    ClientEntity.prototype.updateModel = function (packet) {
        this.packet = packet;
        if (this.anim)
            this.anim.destroy();
        this.anim = new Animation.Base(packet.x, packet.y, packet.z);
        if (packet.color) {
            var hex = android.graphics.Color.parseColor(packet.color);
            var info = ClientEntity.buildMeshForText(this.getText(packet.text), packet.scale, [
                ((hex >> 24) & 0xFF) / 256, ((hex >> 16) & 0xFF) / 256, ((hex >> 8) & 0xFF) / 256, (hex & 0xFF) / 256
            ]);
        }
        else
            var info = ClientEntity.buildMeshForText(this.getText(packet.text), packet.scale);
        rotateMesh(info.mesh, packet.x, packet.y, packet.z, packet.y + packet.ry, packet.rx, packet.ry, packet.rz, 1);
        this.anim.describe({
            mesh: info.mesh,
            skin: "font_sprite.png"
        });
        this.anim.load();
    };
    ClientEntity.from = function (type, entity) {
        var clz = ClientEntity.TYPES[type];
        if (clz)
            return new clz(entity);
        return new ClientEntity(entity);
    };
    ClientEntity.register = function (type, clazz) {
        ClientEntity.TYPES[type] = clazz;
    };
    ClientEntity.symbols = FileTools.ReadJSON(__dir__ + "resources/assets/font_sprite_dump.json");
    ClientEntity.TYPES = {};
    return ClientEntity;
}());
ClientEntity.register("DEF", ClientEntity);
var networkType = new NetworkEntityType("world_render_text");
networkType.setClientAddPacketFactory(function (target, entity, client) {
    return target.toJSON(client.getPlayerUid());
});
networkType.setClientEntityAddedListener(function (entity, packet) {
    var entity_client = ClientEntity.from(packet.client_type, entity);
    entity_client.updateModel(packet);
    RenderTextController.controllers[packet.controller_id].client_list[packet.id] = entity_client;
    return entity_client;
});
networkType.setClientEntityRemovedListener(function (target, entity) {
    target && target.anim && target.anim.destroy();
});
networkType.setClientListSetupListener(function (list, target, entity) {
    list.setupDistancePolicy(target.x, target.y, target.z, target.dim, 64);
});
networkType.addClientPacketListener("updateModel", function (target, entity, packet) {
    target.updateModel(packet);
});
networkType.addServerPacketListener("sync", function (target, entity, client, packet) {
    if (UsersStorage.canPermission(client.getPlayerUid(), Permission.WORLD_RENDER_TEXT_COMMAND)) {
        for (var key in packet)
            target[key] = packet[key];
        target.updateModel();
        alert_message(client, "Успешно синхронизированно");
    }
    else
        alert_message(client, "Запрет на синхронизацию");
});
networkType.addServerPacketListener("removed", function (target, entity, client, packet) {
    if (UsersStorage.canPermission(client.getPlayerUid(), Permission.WORLD_RENDER_TEXT_COMMAND)) {
        RenderTextController.controllers[target.controller_id].removeId(target.id);
    }
});
var WorldRenderText = /** @class */ (function () {
    function WorldRenderText(x, y, z, rx, ry, rz, dim, text, scale, color) {
        if (text === void 0) { text = ""; }
        if (scale === void 0) { scale = 2; }
        if (color === void 0) { color = undefined; }
        this.type = "DEF";
        this.client_type = "DEF";
        this.x = x;
        this.y = y;
        this.z = z;
        this.rx = rx;
        this.ry = ry;
        this.rz = rz;
        this.dim = dim;
        this.text = text;
        this.scale = scale;
        this.color = color;
    }
    WorldRenderText.prototype.genId = function (controller) {
        return controller.genId();
    };
    WorldRenderText.prototype.init = function (controller_id, id) {
        this.id = id;
        this.controller_id = controller_id;
        this.networkEntity = new NetworkEntity(networkType, this);
        return this;
    };
    WorldRenderText.prototype.getText = function (player) {
        return this.text;
    };
    WorldRenderText.prototype.getClientType = function () {
        return this.client_type;
    };
    WorldRenderText.prototype.remove = function () {
        this.networkEntity.remove();
    };
    WorldRenderText.prototype.updateModel = function () {
        var it = this.networkEntity.getClients().iterator();
        var entity = this.networkEntity;
        while (it.hasNext()) {
            var client = it.next();
            entity.send(client, "updateModel", this.toJSON(client.getPlayerUid()));
        }
    };
    WorldRenderText.prototype.getType = function () {
        return this.type;
    };
    WorldRenderText.prototype.toJSON = function (player) {
        return { x: this.x, y: this.y, z: this.z, dim: this.dim, text: this.getText(player), scale: this.scale, rx: this.rx,
            ry: this.ry,
            rz: this.rz, color: this.color, id: this.id, controller_id: this.controller_id, type: this.getType(), client_type: this.getClientType() };
    };
    WorldRenderText.fromJSON = function (json) {
        var clz = this.TYPES[json.type];
        if (!clz)
            var v = new WorldRenderText(json.x, json.y, json.z, json.rx, json.ry, json.rz, json.dim, json.text, json.scale, json.color);
        else
            var v = new clz(json.x, json.y, json.z, json.rx, json.ry, json.rz, json.dim, json.text, json.scale, json.color);
        return v.init(json.controller_id, json.id);
    };
    WorldRenderText.register = function (type, clazz) {
        this.TYPES[type] = clazz;
    };
    WorldRenderText.TYPES = {};
    return WorldRenderText;
}());
var RenderTextController = /** @class */ (function () {
    function RenderTextController(id) {
        var _this = this;
        this.list = {};
        this.client_list = {};
        this.id = id;
        RenderTextController.controllers[id] = this;
        var self = this;
        //: - доп защита от кривового рино
        Saver.addSavesScope("server_utils.world_render_text." + id, function (scope) {
            scope.renders = scope.renders || {};
            self.client_list = {};
            var renders = {};
            for (var id_1 in scope.renders) {
                renders[id_1] = WorldRenderText.fromJSON(scope.renders[id_1]);
            }
            self.list = renders;
        }, function () {
            var renders = {};
            for (var id_2 in _this.list)
                renders[id_2] = _this.list[id_2].toJSON(null);
            return { renders: renders };
        });
    }
    RenderTextController.prototype.remove = function (x, y, z, dim) {
        for (var id in this.list) {
            var text = this.list[id];
            if (text.x == x && text.y == y && text.z == z && text.dim == dim) {
                delete this.list[id];
                return id;
            }
        }
        return null;
    };
    RenderTextController.prototype.removeId = function (id) {
        var world = this.list[id];
        if (world) {
            world.remove();
            delete this.list[id];
            return id;
        }
        return null;
    };
    RenderTextController.prototype.genId = function () {
        for (var count = 0; this.list[":" + count]; count++) { }
        return ":" + count;
    };
    RenderTextController.prototype.add = function (x, y, z, rx, ry, rz, dim, text, scale, color, clazz) {
        if (clazz === void 0) { clazz = WorldRenderText; }
        var instance = new clazz(x, y, z, rx, ry, rz, dim, text, scale, color);
        var id = instance.genId(this);
        return this.addInstance(instance, id);
    };
    RenderTextController.prototype.addForPlayer = function (playerUid, clazz, text, scale, color) {
        var pos = Entity.getPosition(playerUid);
        var vec = Entity.getLookVector(playerUid);
        return this.add(pos.x, pos.y, pos.z, vec.x, vec.y, vec.z, Entity.getDimension(playerUid), text, scale, color, clazz);
    };
    RenderTextController.prototype.addInstance = function (renderText, id) {
        if (id === void 0) { id = renderText.genId(this); }
        this.removeId(id);
        this.list[id] = renderText.init(this.id, id);
        return id;
    };
    RenderTextController.prototype.openSettingsClient = function () {
        var dialog = PopupWindow.newDefaultStyle("Edit render text");
        var _loop_2 = function (key) {
            var entity = this_2.client_list[key];
            var packet = entity.packet;
            dialog.add(new Setting.SettingButtonTextElement(String(packet.id))
                .setClick(function (dialog) {
                dialog.close();
                var edit_dialog = PopupWindow.newDefaultStyle("Edit " + packet.id);
                edit_dialog.add(new Setting.SettingTextElement("X"));
                edit_dialog.add(new Setting.SettingNumbersElement("x", -5, 5, .1, 0));
                edit_dialog.add(new Setting.SettingTextElement("Y"));
                edit_dialog.add(new Setting.SettingNumbersElement("y", -5, 5, .1, 0));
                edit_dialog.add(new Setting.SettingTextElement("Z"));
                edit_dialog.add(new Setting.SettingNumbersElement("z", -5, 5, .1, 0));
                edit_dialog.add(new Setting.SettingTextElement("RX"));
                edit_dialog.add(new Setting.SettingNumbersElement("rx", -5, 5, .1, 0));
                edit_dialog.add(new Setting.SettingTextElement("RY"));
                edit_dialog.add(new Setting.SettingNumbersElement("ry", -5, 5, .1, 0));
                edit_dialog.add(new Setting.SettingTextElement("RZ"));
                edit_dialog.add(new Setting.SettingNumbersElement("rz", -5, 5, .1, 0));
                edit_dialog.add(new Setting.SettingTextElement("scale"));
                edit_dialog.add(new Setting.SettingNumbersElement("scale", -5, 5, 1, 0));
                edit_dialog.add(new Setting.SettingKeyboardElement(packet.text, "text"));
                edit_dialog.add(new Setting.SettingKeyboardElement(packet.color || "#000000", "color"));
                edit_dialog.add(new Setting.SettingButtonTextElement("Syncronized server")
                    .setClick(function () { return entity.entity.send("sync", packet); }));
                edit_dialog.add(new Setting.SettingButtonTextElement("Removed")
                    .setClick(function () {
                    entity.entity.send("removed", {});
                    delete RenderTextController.controllers[packet.controller_id].client_list[packet.id];
                    edit_dialog.close();
                }));
                edit_dialog.setEnableExitButton(true);
                edit_dialog.setCloseHandler(function (self) {
                    packet.x += self.configs.x;
                    packet.y += self.configs.y;
                    packet.z += self.configs.z;
                    packet.rx += self.configs.rx;
                    packet.ry += self.configs.ry;
                    packet.rz += self.configs.rz;
                    packet.scale += self.configs.scale;
                    packet.text = self.configs.text;
                    packet.color = self.configs.color;
                    //preview
                    entity.updateModel(packet);
                });
                edit_dialog.openCenter();
            }));
        };
        var this_2 = this;
        for (var key in this.client_list) {
            _loop_2(key);
        }
        dialog.openCenter();
    };
    RenderTextController.controllers = {};
    return RenderTextController;
}());
var DEF_RENDER_CONTROOLER = new RenderTextController("def");
Translation.addTranslation("Added rendering text %v", {
    ru: "Добавлен отрисовочный текст %v"
});
Translation.addTranslation("Removed rendering text %v", {
    ru: "Удален отрисовочный текст %v"
});
Translation.addTranslation("Not found rendering text %v", {
    ru: "Не найден отрисовочный текст %v"
});
var WorldRenderCommand = /** @class */ (function (_super) {
    __extends(WorldRenderCommand, _super);
    function WorldRenderCommand(controller) {
        var _this = _super.call(this, [CommandArgType.STRING, CommandArgType.NUMBER]) || this; //Добавить текст
        _this.setPermissionUseCommand(Permission.WORLD_RENDER_TEXT_COMMAND);
        _this.addArgsTypes([CommandArgType.STRING, CommandArgType.NUMBER, CommandArgType.STRING]); //Добавить текст выбрав цвет
        _this.addArgsTypes([CommandArgType.STRING]); //Удалить текст(нужен uuid)
        _this.controller = controller;
        return _this;
    }
    WorldRenderCommand.prototype.runServer = function (client, args) {
        var playerUid = client.getPlayerUid();
        if (args.length >= 2) {
            var color = "#000000";
            if (args.length == 3)
                color = args[2];
            while (args[0].indexOf("\\n") != -1)
                args[0] = args[0].replace("\\n", "\n");
            this.message(client, "Added rendering text %v", this.controller.addForPlayer(playerUid, WorldRenderText, args[0], args[1], color));
        }
        else {
            var id = this.controller.removeId(args[0]);
            if (id) {
                this.message(client, "Removed rendering text %v", id);
                return true;
            }
            this.message(client, "Not found rendering text %v", args[0]);
        }
        return true;
    };
    return WorldRenderCommand;
}(Command));
var WorldRenderTextEditCommand = /** @class */ (function (_super) {
    __extends(WorldRenderTextEditCommand, _super);
    function WorldRenderTextEditCommand(controller) {
        var _this = _super.call(this, []) || this;
        _this.setPermissionUseCommand(Permission.WORLD_RENDER_TEXT_COMMAND);
        _this.controller = controller;
        return _this;
    }
    WorldRenderTextEditCommand.prototype.runClient = function (raw_args) {
        this.controller.openSettingsClient();
        Game.prevent();
        return false;
    };
    return WorldRenderTextEditCommand;
}(Command));
CommandRegistry.registry("rt", new WorldRenderCommand(DEF_RENDER_CONTROOLER));
CommandRegistry.registry("rte", new WorldRenderTextEditCommand(DEF_RENDER_CONTROOLER));
var CommandSetHome = /** @class */ (function (_super) {
    __extends(CommandSetHome, _super);
    function CommandSetHome() {
        var _this = _super.call(this, []) || this;
        _this.setPermissionUseCommand(Permission.CREATE_HOME);
        return _this;
    }
    CommandSetHome.prototype.runServer = function (client, args) {
        var playerUid = client.getPlayerUid();
        var pos = Entity.getPosition(playerUid);
        UsersStorage.getUserIfCreate(playerUid)
            .setData("home", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
            d: Entity.getDimension(playerUid)
        });
        this.message(client, "Create home, pos %v %v %v", pos.x.toFixed(2), pos.y.toFixed(2), pos.z.toFixed(2));
        return true;
    };
    return CommandSetHome;
}(Command));
var CommandHome = /** @class */ (function (_super) {
    __extends(CommandHome, _super);
    function CommandHome() {
        var _this = _super.call(this, []) || this;
        _this.setPermissionUseCommand(Permission.USE_HOME);
        return _this;
    }
    CommandHome.prototype.runServer = function (client, args) {
        var playerUid = client.getPlayerUid();
        var point = UsersStorage.getUserIfCreate(playerUid).getData("home");
        if (point) {
            var pos = Entity.getPosition(playerUid);
            setPositionPlayer(playerUid, point.x, point.y, point.z);
            Dimensions.transfer(playerUid, point.d);
            this.message(client, "Teleport from %v %v %v", pos.x.toFixed(2), pos.y.toFixed(2), pos.z.toFixed(2));
            return true;
        }
        return false;
    };
    return CommandHome;
}(Command));
CommandRegistry.registry("sethome", new CommandSetHome());
CommandRegistry.registry("home", new CommandHome());
var MAX_WARP_DEF = __config__.getInteger("warp_default_counts");
var CommandSetWarp = /** @class */ (function (_super) {
    __extends(CommandSetWarp, _super);
    function CommandSetWarp() {
        var _this = _super.call(this, [CommandArgType.STRING]) || this;
        _this.setPermissionUseCommand(Permission.CREATE_WARP);
        return _this;
    }
    CommandSetWarp.prototype.runServer = function (client, args) {
        var warp_playrs = GlobalSaves.getDataDef("warp_players", {});
        var playerUid = client.getPlayerUid();
        var user = UsersStorage.getUserIfCreate(playerUid);
        var user_name = user.getUserName();
        var count = warp_playrs[user_name] || 0;
        var warps = GlobalSaves.getDataDef("warps", {});
        if (!warps[args[0]] && (user.isOperator() || count < user.getDataDef("warps_count", MAX_WARP_DEF))) {
            var pos = Entity.getPosition(playerUid);
            warp_playrs[user_name] = count + 1;
            warps[args[0]] = {
                x: pos.x,
                y: pos.y,
                z: pos.z,
                d: Entity.getDimension(playerUid),
                o: user_name
            };
            GlobalSaves.setData("warp_players", warp_playrs);
            GlobalSaves.setData("warps", warps);
            this.message(client, "Create warp %v", args[0]);
            return true;
        }
        this.message(client, "You have reached the maximum number of warp or warp with the given name already exists");
        return false;
    };
    return CommandSetWarp;
}(Command));
var CommandWarp = /** @class */ (function (_super) {
    __extends(CommandWarp, _super);
    function CommandWarp() {
        var _this = _super.call(this, [CommandArgType.STRING]) || this;
        _this.setPermissionUseCommand(Permission.USE_WARP);
        return _this;
    }
    CommandWarp.prototype.runServer = function (client, args) {
        var warp = GlobalSaves.getDataDef("warps", {})[args[0]];
        if (warp) {
            var playerUid = client.getPlayerUid();
            var pos = Entity.getPosition(playerUid);
            setPositionPlayer(playerUid, warp.x, warp.y, warp.z);
            Dimensions.transfer(playerUid, warp.d);
            this.message(client, "Teleport from %v %v %v", pos.x.toFixed(2), pos.y.toFixed(2), pos.z.toFixed(2));
            return true;
        }
        this.message(client, "Not found warp %v", args[0]);
        return false;
    };
    return CommandWarp;
}(Command));
var CommandRemoveWarp = /** @class */ (function (_super) {
    __extends(CommandRemoveWarp, _super);
    function CommandRemoveWarp() {
        var _this = _super.call(this, [CommandArgType.STRING]) || this;
        _this.setPermissionUseCommand(Permission.REMOVE_WARP);
        return _this;
    }
    CommandRemoveWarp.prototype.runServer = function (client, args) {
        var warps = GlobalSaves.getDataDef("warps", {});
        var name = args[0];
        if (!warps[name]) {
            var warp_playrs = GlobalSaves.getDataDef("warp_players", {});
            var user = UsersStorage.getUserIfCreate(client.getPlayerUid());
            var owner = warps[name].o;
            if (user.getUserName() != owner && !user.canPermission(Permission.REMOVE_WARP_NOT_OWNER)) {
                this.message(client, "You are not the owner of warp %v", args[0]);
                return false;
            }
            try {
                delete warps[name];
                warp_playrs[owner]--;
            }
            catch (e) {
                this.message(client, e);
                warp_playrs[owner] = 0;
            }
            return true;
        }
        this.message(client, "Not found warp %v", args[0]);
        return false;
    };
    return CommandRemoveWarp;
}(Command));
CommandRegistry.registry("setwarp", new CommandSetWarp());
CommandRegistry.registry("warp", new CommandWarp());
CommandRegistry.registry("removewarp", new CommandRemoveWarp());
var CommandPermission = /** @class */ (function (_super) {
    __extends(CommandPermission, _super);
    function CommandPermission() {
        var _this = _super.call(this, [CommandArgType.PLAYER, CommandArgType.ENUM, CommandArgType.BOOLEAN], Permission) || this;
        _this.setPermissionUseCommand(Permission.CONTROL_PERMISSION);
        _this.addArgsTypes([CommandArgType.PLAYER]);
        return _this;
    }
    CommandPermission.prototype.runServer = function (client, args) {
        var user = UsersStorage.getUserIfCreate(args[0]);
        if (args.length == 3) {
            var v = args[2] ? 1 : 0;
            user.setPermission(args[1], v);
            this.message(client, "Successfully edit permission, status: %v", v);
            return true;
        }
        var msg = Entity.getNameTag(args[0]);
        forEachEnum(Permission, function (name, value) { return msg += "\nPermission: " + name + " = " + user.canPermission(value); });
        this.message(client, msg);
        return true;
    };
    return CommandPermission;
}(Command));
CommandRegistry.registry("pm", new CommandPermission());
var ManyControl;
(function (ManyControl) {
    ManyControl[ManyControl["ADD"] = 0] = "ADD";
    ManyControl[ManyControl["SET"] = 1] = "SET";
})(ManyControl || (ManyControl = {}));
var CommandMoney = /** @class */ (function (_super) {
    __extends(CommandMoney, _super);
    function CommandMoney() {
        var _this = _super.call(this, [CommandArgType.PLAYER, CommandArgType.ENUM, CommandArgType.NUMBER], ManyControl) || this;
        _this.setPermissionUseCommand(Permission.CONTROL_MONEY);
        _this.addArgsTypes([CommandArgType.PLAYER]);
        return _this;
    }
    CommandMoney.prototype.runServer = function (client, args) {
        var user = UsersStorage.getUserIfCreate(args[0]);
        if (args.length != 3) {
            this.message(client, "User money: " + user.getMoney());
            return true;
        }
        switch (args[1]) {
            case ManyControl.ADD:
                user.addMoney(args[2]);
                break;
            case ManyControl.SET:
                user.setMoney(args[2]);
                break;
        }
        this.message(client, "User money: " + user.getMoney());
        return true;
    };
    return CommandMoney;
}(Command));
CommandRegistry.registry("money", new CommandMoney());
var CommandSetSpawn = /** @class */ (function (_super) {
    __extends(CommandSetSpawn, _super);
    function CommandSetSpawn() {
        return _super.call(this, []) || this;
    }
    CommandSetSpawn.prototype.runServer = function (client, args) {
        var pos = Entity.getPosition(client.getPlayerUid());
        GlobalSaves.setData("spawn", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
            d: Entity.getDimension(client.getPlayerUid())
        });
        this.message(client, "Successfully set spawn");
        return true;
    };
    return CommandSetSpawn;
}(Command));
var CommandSpawn = /** @class */ (function (_super) {
    __extends(CommandSpawn, _super);
    function CommandSpawn() {
        var _this = _super.call(this, []) || this;
        _this.setPermissionUseCommand(Permission.SPAWN_COMMAND);
        return _this;
    }
    CommandSpawn.prototype.canUseCommnad = function (player) {
        return _super.prototype.canUseCommnad.call(this, player) && !!GlobalSaves.getData("spawn");
    };
    CommandSpawn.prototype.runServer = function (client, args) {
        var spawn = GlobalSaves.getData("spawn");
        if (spawn) {
            var playerUid = client.getPlayerUid();
            var pos = Entity.getPosition(playerUid);
            setPositionPlayer(playerUid, spawn.x, spawn.y, spawn.z);
            Dimensions.transfer(playerUid, spawn.d);
            this.message(client, "Teleport from %v %v %v", pos.x.toFixed(2), pos.y.toFixed(2), pos.z.toFixed(2));
            return true;
        }
        return false;
    };
    return CommandSpawn;
}(Command));
CommandRegistry.registry("setspawn", new CommandSetSpawn());
CommandRegistry.registry("spawn", new CommandSpawn());
Callback.addCallback("TeleportSpawn", function (nickname) {
    var user = UsersStorage.getUserForName(nickname);
    var spawn = GlobalSaves.getData("spawn");
    if (user && spawn) {
        var playerUid = user.getPlayerUid();
        setPositionPlayer(playerUid, spawn.x, spawn.y, spawn.z);
        Dimensions.transfer(playerUid, spawn.d);
    }
});
var AuctionCommand = /** @class */ (function (_super) {
    __extends(AuctionCommand, _super);
    function AuctionCommand() {
        var _this = _super.call(this, []) || this;
        _this.setPermissionUseCommand(Permission.AUCTION_COMMAND);
        return _this;
    }
    AuctionCommand.prototype.runServer = function (client, args) {
        SkyFactoryAction.open(client.getPlayerUid(), client);
        return true;
    };
    return AuctionCommand;
}(Command));
CommandRegistry.registry("auction", new AuctionCommand());
var PopupWindow = /** @class */ (function () {
    function PopupWindow() {
    }
    PopupWindow.prototype.update = function (dialog, addional) {
        dialog.setStyle(new MinecraftDialogStyle(undefined, [0, 0, 0, 0]));
        dialog.setEnableExitButton(false);
    };
    PopupWindow.prototype.newUi = function (addional) {
        return new UiDialogSetting("");
    };
    PopupWindow.prototype.open = function (x, y, addional) {
        if (this.ui && this.ui.getUi().isOpened())
            this.ui.close();
        var ui = this.ui = this.newUi(addional);
        this.update(ui, addional);
        ui.setPos(x, y);
        ui.build();
        ui.open();
    };
    PopupWindow.prototype.getDialog = function () {
        return this.ui;
    };
    PopupWindow.newDefaultStyle = function (title) {
        var dialog = new UiDialogSetting(title);
        dialog.setStyle(new MinecraftDialogStyle(undefined, [0, 0, 0, 0]));
        dialog.setEnableExitButton(false);
        return dialog;
    };
    return PopupWindow;
}());
var FRAME_OFFSET = 30;
var SIZE_TAB = UI.getScreenHeight() / 6;
var BUTTON_EXIT_TEXTURE = "X";
var Y_OFFSET = 10;
var TAB_OFFSET = 18;
var MAIN_FRAME_SCALE = 4;
var TAB_FRAME_SCALE = MAIN_FRAME_SCALE * 6;
var OFFSET_BETWEEN_TABS = 5;
var COUNT_ITEM_SLOTS_PLUS = 4;
var FRAME_TEXTURE = "minecraft_frame";
var LEFT_TEXTURE = "left_tab";
var RIGHT_TEXTURE = "right_tab";
var ADDED_TEXTURE = "add";
var ADDED_TEXTURE2 = "add_gray";
var ItemAuction = /** @class */ (function () {
    function ItemAuction(item, price, owner, uuid) {
        if (uuid === void 0) { uuid = String(java.util.UUID.randomUUID().toString()); }
        this.item = item;
        this.price = price;
        this.owner = owner;
        this.uuid = uuid;
        this.updateInformation();
    }
    ItemAuction.prototype.getPrice = function () {
        return this.price;
    };
    ItemAuction.prototype.getItem = function () {
        return this.item;
    };
    ItemAuction.prototype.getOwner = function () {
        return this.owner;
    };
    ItemAuction.prototype.getName = function () {
        return getName(this.item.id, this.item.data);
    };
    ItemAuction.prototype.getUUID = function () {
        return this.uuid;
    };
    ItemAuction.prototype.updateInformation = function () {
    };
    ItemAuction.prototype.toJSON = function () {
        return {
            price: this.price,
            uuid: this.uuid,
            item: {
                id: this.item.id,
                count: this.item.count,
                data: this.item.data,
                extra: this.item.extra
            },
            owner: this.owner.getUserName()
        };
    };
    return ItemAuction;
}());
;
var DescriptionItemAuction = /** @class */ (function (_super) {
    __extends(DescriptionItemAuction, _super);
    function DescriptionItemAuction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionItemAuction.prototype.newUi = function (addional) {
        return addional.dialog;
    };
    DescriptionItemAuction.popup = new DescriptionItemAuction();
    return DescriptionItemAuction;
}(PopupWindow));
var ClientItemAuction = /** @class */ (function (_super) {
    __extends(ClientItemAuction, _super);
    function ClientItemAuction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientItemAuction.prototype.updateInfo = function (user) {
        this.dialog = new UiDialogSetting(this.getName());
        var owner = this.getOwner();
        var ransom = 1;
        if (this.getOwner().getUserName() == user.getUserName()) {
            this.dialog.add(new Setting.SettingTextElement(translate("Your margin for redemption: %v%", [user.getRansomAuctionAddedItem()])));
            ransom += user.getRansomAuctionAddedItem() / 100;
        }
        this.dialog.add(new Setting.SettingTextElement(translate("Price: %v", [Math.ceil(this.getPrice() * ransom)])));
        this.dialog.add(new Setting.SettingTextElement(translate("Your money: %v", [user.getMoney()])));
        this.dialog.add(new Setting.SettingTextElement(translate("Owner: %v", [owner.getUserName()])));
        var self = this;
        this.dialog.add(new Setting.SettingButtonTextElement(translate("buy", [])).setClick(function (dialog) {
            self.list_builder.buy(self);
            dialog.close();
        }));
    };
    ClientItemAuction.prototype.show = function (list_builder, x, y) {
        this.list_builder = list_builder;
        DescriptionItemAuction.popup.open(x, y, this);
    };
    ClientItemAuction.fromJSON = function (json) {
        return new ClientItemAuction(json.item, json.price, new ClientUser(json.owner, false, 0, DEF_MARK_ADDED, DEF_RANSOM_ADDED), json.uuid);
    };
    return ClientItemAuction;
}(ItemAuction));
var TouchEventType = com.zhekasmirnov.innercore.api.mod.ui.types.TouchEventType;
var ListBuilderAuctionItem = /** @class */ (function () {
    function ListBuilderAuctionItem(name) {
        this.slot_size = 60;
        this.count_slots = 0;
        this.list = [];
        this.name = name;
    }
    ListBuilderAuctionItem.prototype.setSlotSize = function (size) {
        this.slot_size = size;
        return this;
    };
    ListBuilderAuctionItem.prototype.addItemAuction = function (item) {
        this.list.push(item);
        return this;
    };
    ListBuilderAuctionItem.prototype.setItems = function (packet) {
        this.list = [];
        for (var i in packet.items)
            this.list.push(ClientItemAuction.fromJSON(packet.items[i]));
    };
    ListBuilderAuctionItem.prototype.buy = function (auctionItem) {
        var packet = {
            uuid: auctionItem.getUUID()
        };
        Network.sendToServer("auction." + this.name + ".buy", packet);
    };
    ListBuilderAuctionItem.prototype.getCountItems = function () {
        return this.list.length;
    };
    ListBuilderAuctionItem.prototype.updateSize = function (offset) {
        if (offset === void 0) { offset = 0; }
        var display_height = UI.getScreenHeight();
        this.count_slots = 0;
        for (var height = 0; height + this.slot_size <= display_height - offset * 2; height += this.slot_size) {
            this.count_slots++;
        }
        this.ui_size = height;
        return height;
    };
    ListBuilderAuctionItem.prototype.getLineSlots = function () {
        return this.count_slots + COUNT_ITEM_SLOTS_PLUS;
    };
    ListBuilderAuctionItem.prototype.getCountslots = function () {
        return this.count_slots;
    };
    ListBuilderAuctionItem.prototype.buidlUi = function (window, y, user, offset_list) {
        var elements = {};
        var drawing = [
            { type: "color", color: android.graphics.Color.argb(0, 0, 0, 0) }
        ];
        var width_size = this.ui_size / this.getCountslots() * this.getLineSlots();
        var location = new UI.WindowLocation({
            x: 500 - width_size / 2,
            y: y,
            width: width_size,
            height: this.ui_size
        });
        var size = location.globalToWindow(this.slot_size);
        var i = offset_list;
        var self = this;
        for (var y_1 = 0; y_1 < this.count_slots; y_1++) {
            var _loop_3 = function (x) {
                if (i >= this_3.list.length)
                    return "break";
                var auction_item = this_3.list[i];
                auction_item.updateInfo(user);
                var pos_x = x * size;
                var pos_y = y_1 * size;
                elements[x + ":" + y_1] = {
                    type: "slot",
                    x: pos_x,
                    y: pos_y,
                    source: auction_item.getItem(),
                    size: size,
                    bitmap: "_default_slot_empty",
                    visual: true,
                    onTouchEvent: function (qfa, event) {
                        event.type == TouchEventType.MOVE && auction_item.show(self, location.x + location.windowToGlobal(event.x), location.y + location.windowToGlobal(event.y));
                    },
                    clicker: {
                        onClick: function () {
                            auction_item.show(self, location.x + location.windowToGlobal(pos_x), location.y + location.windowToGlobal(pos_y));
                        }
                    }
                };
                i++;
            };
            var this_3 = this;
            for (var x = 0; x < this.getLineSlots(); x++) {
                var state_1 = _loop_3(x);
                if (state_1 === "break")
                    break;
            }
        }
        window.setContent({
            location: location.asScriptable(),
            drawing: drawing,
            elements: elements
        });
    };
    return ListBuilderAuctionItem;
}());
;
var ServerItemAuction = /** @class */ (function (_super) {
    __extends(ServerItemAuction, _super);
    function ServerItemAuction(item, price, owner, uuid) {
        var _this = _super.call(this, item, price, owner, uuid) || this;
        _this.flag = false;
        return _this;
    }
    ServerItemAuction.prototype.toClientJson = function () {
        return _super.prototype.toJSON.call(this);
    };
    ServerItemAuction.prototype.toJSON = function () {
        var json = _super.prototype.toJSON.call(this);
        json.playerUid = this.getOwner().getPlayerUid();
        return json;
    };
    ServerItemAuction.prototype.lock = function () {
        this.flag = true;
    };
    ServerItemAuction.prototype.unlock = function () {
        this.flag = false;
    };
    ServerItemAuction.prototype.canLock = function () {
        return this.flag;
    };
    ServerItemAuction.fromJSON = function (json) {
        return new ServerItemAuction(json.item, json.price, UsersStorage.getUserIfCreate(json.playerUid), json.uuid);
    };
    return ServerItemAuction;
}(ItemAuction));
var ServerItemStorage = /** @class */ (function () {
    function ServerItemStorage(name, items) {
        if (items === void 0) { items = {}; }
        this.items = {};
        this.items = items;
        var self = this;
        Saver.addSavesScope("server_utils.auction.item_storage." + name, function (scope) {
            var items = {};
            scope.items = scope.items || {};
            for (var uuid in scope.items)
                items[uuid] = ServerItemAuction.fromJSON(scope.items[uuid]);
            self.items = items;
        }, function () {
            return self.toJSON();
        });
        Callback.addCallback("LevelLeft", function () { return self.items = {}; });
    }
    ServerItemStorage.prototype.add = function (item) {
        this.items[item.getUUID()] = item;
    };
    ServerItemStorage.prototype.get = function (uuid) {
        return this.items[uuid];
    };
    ServerItemStorage.prototype.remove = function (uuid) {
        delete this.items[uuid];
    };
    ServerItemStorage.prototype.toSendClient = function () {
        var items = [];
        for (var i in this.items) {
            var item = this.items[i];
            items.push(item.toClientJson());
        }
        return { items: items };
    };
    ServerItemStorage.prototype.toJSON = function () {
        var items = {};
        for (var key in this.items)
            items[key] = this.items[key].toJSON();
        return { items: items };
    };
    return ServerItemStorage;
}());
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var CustomItemSelected = /** @class */ (function (_super) {
    __extends(CustomItemSelected, _super);
    function CustomItemSelected() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomItemSelected.prototype.build = function () {
        _super.prototype.build.call(this);
        var content = this.getUi().getContent();
        var self = this;
        content.elements["search"].clicker.onClick = function () {
            new Keyboard("")
                .getText(function (text) {
                var e_1, _a;
                var _items = [];
                try {
                    for (var _b = __values(self.full_list), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        if (Translation.translate(Item.getName(item._id, 0)).toLowerCase().split(text.toLowerCase()).length > 1)
                            _items.push(item);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                self.close();
                self.list = 0;
                self.items = _items;
                self.openCenter();
            })
                .open();
        };
        content.elements["search"].clicker.onLongClick = function () {
            self.close();
            self.list = 0;
            self.items = self.full_list;
            self.openCenter();
        };
        return this;
    };
    return CustomItemSelected;
}(SelectedItemDialog));
var SettingInventoryItemSelectedElement = /** @class */ (function (_super) {
    __extends(SettingInventoryItemSelectedElement, _super);
    function SettingInventoryItemSelectedElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SettingInventoryItemSelectedElement.prototype.build = function (dialog, content, org_size, size, id) {
        var items = [];
        for (var slot = 0; slot < 36; slot++) {
            var item = Player.getInventorySlot(slot);
            item.id != 0 && items.push({
                id: "",
                _id: item.id,
                fullId: "",
                tag: "",
                slot: slot,
            });
        }
        if (items.length <= 0) {
            this.item = { id: "", _id: 0, fullId: "", tag: "" };
            var result_1 = _super.prototype.build.call(this, dialog, content, org_size, size, id);
            result_1[0].clicker.onClick = function () { };
            dialog.configs[this.configName] = this.item;
            return result_1;
        }
        this.item = this.item || items[0];
        dialog.configs[this.configName] = this.item;
        var result = _super.prototype.build.call(this, dialog, content, org_size, size, id);
        var self = this;
        result[0].clicker.onClick = function () {
            var item_selected = new CustomItemSelected("Selected item");
            item_selected.setStyle(new MinecraftDialogStyle());
            item_selected.items = items;
            item_selected.full_list = items;
            item_selected.getSelectedItem(function (item) {
                dialog.configs[self.configName] = item;
                self.item = item;
                dialog.close();
                dialog.build();
                dialog.openCenter();
            })
                .openCenter();
        };
        return result;
    };
    return SettingInventoryItemSelectedElement;
}(Setting.SettingIconElement));
var Auction = /** @class */ (function () {
    function Auction(name) {
        this.container = new ItemContainer();
        this.list_builder = new ListBuilderAuctionItem(name);
        this.name = name;
        var self = this;
        ItemContainer.registerScreenFactory("auction." + name, function (container, screen_name) {
            return self.buildUI(screen_name, container);
        });
        this.container.setClientContainerTypeName("auction." + name);
        this.server_list = new ServerItemStorage(name);
        Network.addServerPacket("auction." + name + ".addItem", function (client, packet) { return self.addItem(client, client.getPlayerUid(), packet.slot, packet.price); });
        Network.addServerPacket("auction." + name + ".buy", function (client, packet) {
            var item_auction = self.server_list.get(packet.uuid);
            item_auction && self.buy(client, item_auction);
        });
    }
    Auction.prototype.buy = function (client, item) {
        if (item.canLock()) {
            alert_message(client, "It is not possible to process the transaction, the transaction is being processed with another player");
            return;
        }
        item.lock();
        try {
            var user = UsersStorage.getUserIfCreate(client.getPlayerUid());
            var price = item.getPrice();
            var owner = item.getOwner();
            var price_ransom = price;
            if (user.getUserName() == owner.getUserName())
                price_ransom = Math.ceil(price * (user.getPriviliegeValue("ransom_auction_added_item", DEF_RANSOM_ADDED) / 100 + 1));
            if (user.getMoney() - price_ransom >= 0) {
                var it = item.getItem();
                user.addMoney(-price_ransom);
                owner.addMoney(price);
                new PlayerActor(user.getPlayerUid()).addItemToInventory(it.id, it.count, it.data, it.extra || null, true);
                var owner_client = Network.getClientForPlayer(owner.getPlayerUid());
                owner_client && message(owner_client, "Your product has been successfully purchased");
                alert_message(client, "You have successfully purchased");
                this.server_list.remove(item.getUUID());
                owner.setData("auctions_slots", Math.max(owner.getDataDef("auctions_slots", 0) - 1, 0));
                Daily.handleBuy(client.getPlayerUid(), item);
                this.container.closeFor(client);
                this.open(client.getPlayerUid(), client);
                return;
            }
        }
        catch (e) {
            alert_message(client, "Unknown error: " + String(e));
        }
        ;
        item.unlock();
    };
    Auction.prototype.addItem = function (client, playerUid, slot, price) {
        if (typeof slot != "number" || typeof price != "number")
            return;
        var user = UsersStorage.getUserIfCreate(playerUid);
        var actor = new PlayerActor(playerUid);
        var item = actor.getInventorySlot(slot);
        var auctions_slots = user.getDataDef("auctions_slots", 0);
        var max_slots = user.getPriviliegeValue("max_auction_added_item", DEF_AUCTION_SLOTS);
        if (item.id != 0 && item.count > 0 && price >= 0 && user.canPermission(Permission.USE_AUCTION) && user.canPermission(Permission.ADDED_ITEM_FOR_AUCTION) && auctions_slots < max_slots) {
            // Наценка
            price = Math.ceil(price * (user.getPriviliegeValue("mark_up_auction_added_item", DEF_MARK_ADDED) / 100 + 1));
            actor.setInventorySlot(slot, 0, 0, 0, null);
            var server_item = new ServerItemAuction(item, price, user);
            this.server_list.add(server_item);
            user.setData("auctions_slots", ++auctions_slots);
            Daily.handleAddItemAuction(playerUid, server_item);
            this.container.closeFor(client);
            this.open(playerUid, client);
        }
    };
    Auction.prototype.addClientItemAuction = function (item) {
        this.list_builder.addItemAuction(item);
        return this;
    };
    Auction.getExitFunc = function (func) {
        return function (dialog) {
            func(dialog);
        };
    };
    Auction.prototype.addTab = function (group, backgroundLocation, left, name, bitmap1, bitmap2, y, onClick, onLongClick) {
        if (onClick === void 0) { onClick = function () { }; }
        if (onLongClick === void 0) { onLongClick = function () { }; }
        var x = backgroundLocation.x + backgroundLocation.width - TAB_OFFSET;
        if (left)
            x = backgroundLocation.x - SIZE_TAB + TAB_OFFSET + 1;
        var bitmap = UI.TextureSource.get(bitmap1);
        var width = bitmap.getWidth();
        var height = bitmap.getHeight();
        var scale = (1000 - 500) / width;
        var HEIGHT = 500;
        var location = new UI.WindowLocation({
            x: x,
            y: backgroundLocation.y + y,
            height: SIZE_TAB,
            width: SIZE_TAB
        });
        var drawingTab = [
            { type: "color", color: android.graphics.Color.argb(0, 0, 0, 0) },
            { type: "frame", x: 0, y: 0, width: 1000, height: location.globalToWindow(location.height), bitmap: FRAME_TEXTURE, scale: TAB_FRAME_SCALE },
        ];
        group.addWindow("tab_" + name, {
            location: location.asScriptable(),
            drawing: drawingTab,
            elements: {
                "button": {
                    type: "button",
                    x: 500 - width * scale / 2, y: HEIGHT - height * scale / 2,
                    bitmap: bitmap1,
                    bitmap2: bitmap2,
                    scale: scale,
                    clicker: {
                        onClick: onClick,
                        onLongClick: onLongClick
                    }
                }
            }
        });
    };
    Auction.prototype.buildUI = function (screen_name, container) {
        var _this = this;
        var json = JSON.parse(screen_name);
        var clientUser = ClientUser.fromJSON(json.user);
        this.list_builder.setItems(json.items);
        var group = new UI.WindowGroup();
        var height_size = this.list_builder.updateSize(FRAME_OFFSET);
        var slots = this.list_builder.getCountslots() * this.list_builder.getLineSlots();
        var offset_list = 0;
        var width_size = height_size / this.list_builder.getCountslots() * this.list_builder.getLineSlots();
        var backgroundLocation = new UI.WindowLocation({
            x: 500 - width_size / 2 - FRAME_OFFSET,
            y: Y_OFFSET,
            width: width_size + FRAME_OFFSET * 2,
            height: height_size + FRAME_OFFSET * 2,
        });
        group.setCloseOnBackPressed(true);
        var drawing = [
            { type: "color", color: android.graphics.Color.argb(0, 0, 0, 0) },
            { type: "frame", x: 0, y: 0, bitmap: FRAME_TEXTURE, width: 1000, height: backgroundLocation.globalToWindow(backgroundLocation.height), scale: MAIN_FRAME_SCALE }
        ];
        var background = new UI.Window({
            drawing: drawing,
            location: backgroundLocation.asScriptable(),
            elements: {}
        });
        var items_list = new UI.Window();
        this.list_builder.buidlUi(items_list, Y_OFFSET + FRAME_OFFSET, clientUser, offset_list);
        var self = this;
        function updateWindow() {
            self.list_builder.buidlUi(items_list, Y_OFFSET + FRAME_OFFSET, clientUser, offset_list);
            items_list.forceRefresh();
        }
        this.addTab(group, backgroundLocation, false, "exit", BUTTON_EXIT_TEXTURE, BUTTON_EXIT_TEXTURE, 0, function () { return group.close(); }, function () { return group.close(); });
        this.addTab(group, backgroundLocation, true, "info", "info", "info_gray", 0, function () {
            var dialog = PopupWindow.newDefaultStyle("Daily quests");
            dialog.add(new Setting.SettingTextElement(translate("Your money: %v", [clientUser.getMoney()])));
            Daily.fromJSON(json.daily, dialog).openCenter();
        });
        this.addTab(group, backgroundLocation, true, "left", LEFT_TEXTURE + "_0", LEFT_TEXTURE + "_1", backgroundLocation.height - SIZE_TAB, function () {
            if (offset_list >= slots) {
                offset_list -= slots;
                updateWindow();
            }
        });
        this.addTab(group, backgroundLocation, false, "right", RIGHT_TEXTURE + "_0", RIGHT_TEXTURE + "_1", backgroundLocation.height - SIZE_TAB, function () {
            if (offset_list < _this.list_builder.getCountItems()) {
                offset_list += slots;
                updateWindow();
            }
        });
        if (clientUser.canAddedAuctionItem()) {
            var self_1 = this;
            this.addTab(group, backgroundLocation, true, "added_item", ADDED_TEXTURE, ADDED_TEXTURE2, backgroundLocation.height - SIZE_TAB - SIZE_TAB - OFFSET_BETWEEN_TABS, function () {
                group.close();
                var dialog = PopupWindow.newDefaultStyle("Added item");
                dialog.setEnableExitButton(true);
                var item_seleted_element = new SettingInventoryItemSelectedElement("item");
                dialog.add(item_seleted_element);
                dialog.add(new Setting.SettingTextElement(translate("The margin for adding to auctions, %v%", [clientUser.getMarkUpAuctionAddedItem()])));
                dialog.add(new Setting.SettingKeyboardElement("Price", "price"));
                delete dialog.configs.item;
                item_seleted_element.item = undefined;
                dialog.setCloseHandler(function (setting) {
                    var slot = setting.configs.item && setting.configs.item.slot;
                    var price = setting.configs.price;
                    delete setting.configs.item;
                    item_seleted_element.item = undefined;
                    if (typeof slot == "number" && /^\d+$/.test(price)) {
                        price = Number(price);
                        var packet = { slot: slot, price: price };
                        Network.sendToServer("auction." + self_1.name + ".addItem", packet);
                    }
                });
                dialog.openCenter();
            });
        }
        group.addWindowInstance("background", background);
        group.addWindowInstance("items_list", items_list);
        group.getWindow("tab_exit")
            .setBlockingBackground(true);
        return group;
    };
    Auction.prototype.open = function (player, client) {
        if (client === void 0) { client = Network.getClientForPlayer(player); }
        var user = UsersStorage.getUserIfCreate(player);
        user.canPermission(Permission.USE_AUCTION) && this.container.openFor(client, JSON.stringify({
            user: user.toClientJson(),
            items: this.server_list.toSendClient(),
            daily: Daily.toJSON(player)
        }));
    };
    Auction.prototype.setSlotSize = function (size) {
        this.list_builder.setSlotSize(size);
        return this;
    };
    return Auction;
}());
;
var SkyFactoryAction = new Auction("global")
    .setSlotSize(75);
// Callback.addCallback("ItemUse", (coords, item, block, is, player) => item.id == VanillaItemID.book && SkyFactoryAction.open(player));
Callback.addCallback("OpenAuction", function (player) {
    SkyFactoryAction.open(player);
});
Translation.addTranslation("Daily quests", {
    ru: "Ежедневные квесты"
});
Translation.addTranslation("Your money: %v", {
    ru: "Ваши деньги: %v"
});
Translation.addTranslation("Price: %v", {
    ru: "Цена: %v"
});
Translation.addTranslation("Owner: %v", {
    ru: "Владелец: %v"
});
Translation.addTranslation("buy", {
    ru: "Купить"
});
Translation.addTranslation("The margin for adding to auctions, %v%", {
    ru: "Наценка на добавление на аукционы, %v%"
});
Translation.addTranslation("Your margin for redemption: %v%", {
    ru: "Ваша наценка на выкуп: %v%"
});
Translation.addTranslation("It is not possible to process the transaction, the transaction is being processed with another player", {
    ru: "Обработать транзакцию невозможно, транзакция обрабатывается с другим игроком"
});
Translation.addTranslation("You have successfully purchased", {
    ru: "Вы успешно приобрели"
});
Translation.addTranslation("Your product has been successfully purchased", {
    ru: "Ваш продукт был успешно приобретен"
});

    var radius_1 = __config__.getInteger("world_border.radius");
    var nether_radius_1 = radius_1 * 8;
    function getPos(x, radius) {
        if (x < 0)
            var v = Math.max(x, -radius);
        else
            var v = Math.min(x, radius);
        return v == x ? null : v;
    }
    Callback.addCallback("tick", function () {
        if (World.getThreadTime() % 20 == 0) {
            var players = Network.getConnectedPlayers();
            for (var i in players) {
                var player = players[i];
                var pos = Entity.getPosition(player);
                if (Entity.getDimension(player) == EDimension.NETHER)
                    var x = getPos(pos.x, nether_radius_1), z = getPos(pos.z, nether_radius_1);
                else
                    var x = getPos(pos.x, radius_1), z = getPos(pos.z, radius_1);
                if (x !== null || z !== null) {
                    setPositionPlayer(player, x || pos.x, pos.y, z || pos.z);
                    var client = Network.getClientForPlayer(player);
                    client && message(client, "You have reached the end of the world");
                }
            }
        }
    });

var _a;
if (__config__.getBool("daily.enabled")) {
    (function () {
        function getCurrentDay() {
            var date = new Date();
            return {
                month: date.getMonth(),
                day: date.getDate()
            };
        }
        Callback.addCallback("ServerPlayerLoaded", function (player) {
            var days = GlobalSaves.getDataDef("daily", {});
            var name = String(Entity.getNameTag(player));
            var entrance = days[name];
            var currnet = getCurrentDay();
            if (entrance && (entrance.day != currnet.day || entrance.month != currnet.month)) {
                days[name] = currnet;
                Callback.invokeCallback("UpdateEntrance", player, currnet.day, currnet.month, false, true);
            }
            else {
                days[name] = currnet;
                Callback.invokeCallback("UpdateEntrance", player, currnet.day, currnet.month, !entrance, false);
            }
            GlobalSaves.setData("daily", days);
        });
        Callback.addCallback("ServerPlayerTick", function (player) {
            if (World.getThreadTime() % 500) {
                var days = GlobalSaves.getDataDef("daily", {});
                if (days) {
                    days[Entity.getNameTag(player)] = getCurrentDay();
                    GlobalSaves.setData("daily", days);
                }
            }
        });
    })();
    var startMoney_1 = Number(__config__.getInteger("daily.startMoney"));
    // const daily_reward = Number(__config__.getInteger("daily.daily_reward"));
    Callback.addCallback("UpdateEntrance", function (player, day, month, first, aboba) {
        var user = UsersStorage.getUserIfCreate(player);
        if (first)
            user.setMoney(startMoney_1);
        else if (!aboba)
            user.addMoney(user.getPriviliegeValue("daily_reward", 0));
    });
}
var quests_count = __config__.getInteger("daily.quests_count");
var DailyQuest = /** @class */ (function () {
    function DailyQuest(money, description) {
        this.status = false;
        this.money = money;
        this.description = description;
    }
    DailyQuest.prototype.getDescription = function () {
        return this.description;
    };
    DailyQuest.prototype.getValues = function () {
        return [];
    };
    DailyQuest.prototype.handleBuy = function (playerUid, item) {
    };
    DailyQuest.prototype.handleAddItemAuction = function (player, item) {
    };
    DailyQuest.prototype.handleDestroyBlock = function (player, coords, block) {
    };
    DailyQuest.prototype.handleRecipe = function (player, result) {
    };
    DailyQuest.prototype.clone = function () {
        return this;
    };
    DailyQuest.prototype.getIcon = function () {
        return { id: 0, count: 0, data: 0 };
    };
    DailyQuest.prototype.completed = function (player) {
        this.status = true;
        AchievementAPI.give(player, "Daily quests", translate(this.getDescription(), this.getValues()), this.getIcon());
        UsersStorage.getUserIfCreate(player)
            .addMoney(this.money);
    };
    DailyQuest.prototype.canCompleted = function () {
        return this.status;
    };
    return DailyQuest;
}());
var Daily = /** @class */ (function () {
    function Daily() {
    }
    Daily.getPlayerQuests = function (player) {
        var quests = Daily.quests[player];
        if (!quests)
            quests = this.updateQuests(player);
        return quests;
    };
    Daily.handleBuy = function (player, item) {
        var quests = this.getPlayerQuests(player);
        for (var i in quests) {
            var quest = quests[i];
            !quest.canCompleted() && quests[i].handleBuy(player, item);
        }
    };
    Daily.handleAddItemAuction = function (player, item) {
        var quests = this.getPlayerQuests(player);
        for (var i in quests) {
            var quest = quests[i];
            !quest.canCompleted() && quests[i].handleAddItemAuction(player, item);
        }
    };
    Daily.handleDestroyBlock = function (player, coords, block) {
        var quests = this.getPlayerQuests(player);
        for (var i in quests) {
            var quest = quests[i];
            !quest.canCompleted() && quests[i].handleDestroyBlock(player, coords, block);
        }
    };
    Daily.handleRecipe = function (player, result) {
        var quests = this.getPlayerQuests(player);
        for (var i in quests) {
            var quest = quests[i];
            !quest.canCompleted() && quest.handleRecipe(player, result);
        }
    };
    Daily.updateQuests = function (player) {
        var quests = [];
        var random = new java.util.Random();
        for (var i = 0; i < quests_count; i++)
            quests.push(this.list_quests[random.nextInt(this.list_quests.length)].clone());
        Daily.quests[player] = quests;
        return quests;
    };
    Daily.registerQuest = function (quest) {
        this.list_quests.push(quest);
    };
    Daily.toJSON = function (player) {
        var quests = [];
        var userquets = this.getPlayerQuests(player);
        for (var i in userquets) {
            var quest = userquets[i];
            quests.push({ description: quest.getDescription(), values: quest.getValues(), completed: quest.canCompleted() });
        }
        return { quests: quests };
    };
    Daily.fromJSON = function (json, dialog) {
        for (var i in json.quests) {
            var quest = json.quests[i];
            if (!quest.completed)
                dialog.add(new Setting.SettingTextElement(translate(quest.description, quest.values)));
        }
        return dialog;
    };
    Daily.quests = {};
    Daily.list_quests = [];
    (function () {
        Callback.addCallback("DestroyBlock", function (coords, block, player) { return Daily.handleDestroyBlock(player, coords, block); });
        Callback.addCallback("VanillaWorkbenchPostCraft", function (result, container, player) { return Daily.handleRecipe(player, result); });
        Callback.addCallback("UpdateEntrance", function (player, day, month, first, not_entered_today) { return !not_entered_today && Daily.updateQuests(player); });
    })();
    return Daily;
}());
Translation.addTranslation("Break %v/%v %v, reward %v", {
    ru: "Слоамайте %v/%v %v, награда %v"
});
var DestroyBlocksQuest = /** @class */ (function (_super) {
    __extends(DestroyBlocksQuest, _super);
    function DestroyBlocksQuest(block, count, money) {
        var _this = _super.call(this, money, "Break %v/%v %v, reward %v") || this;
        _this.current = 0;
        _this.block = block;
        _this.count = count;
        _this.money = money;
        return _this;
    }
    DestroyBlocksQuest.prototype.handleDestroyBlock = function (player, coords, block) {
        if (block.id == this.block.id && block.data == this.block.data) {
            this.current++;
            this.current >= this.count && this.completed(player);
        }
    };
    DestroyBlocksQuest.prototype.getValues = function () {
        return [this.current, this.count, getName(this.block.id, this.block.data), this.money];
    };
    DestroyBlocksQuest.prototype.getIcon = function () {
        return {
            id: this.block.id,
            count: 1,
            data: this.block.data
        };
    };
    DestroyBlocksQuest.prototype.clone = function () {
        return new _a(this.block, this.count, this.money);
    };
    DestroyBlocksQuest.add = function (block, counts, money) {
        for (var i in counts)
            Daily.registerQuest(new _a(block, counts[i], money));
    };
    return DestroyBlocksQuest;
}(DailyQuest));
_a = DestroyBlocksQuest;
(function () {
    var datas = [0, 1, 3, 5];
    for (var i in datas)
        Daily.registerQuest(new _a({ id: VanillaBlockID.stone, data: datas[i] }, 64, 10));
    var counts = [16, 32];
    _a.add({ id: VanillaBlockID.dirt, data: 0 }, counts, 10);
    /*this.add({id: VanillaBlockID.iron_ore, data: 0}, counts, 10);
    this.add({id: VanillaBlockID.gold_ore, data: 0}, counts, 10);
    this.add({id: VanillaBlockID.coal_ore, data: 0}, counts, 10);*/
})();
Translation.addTranslation("Buy in auction %v/%v, reward %v", {
    ru: "Купите на аукционе %v/%v, награда %v"
});
var BuyAuctionQuest = /** @class */ (function (_super) {
    __extends(BuyAuctionQuest, _super);
    function BuyAuctionQuest(count, money) {
        if (count === void 0) { count = 1; }
        var _this = _super.call(this, money, "Buy in auction %v/%v, reward %v") || this;
        _this.current = 0;
        _this.item = { id: 0, count: 0, data: 0 };
        _this.count = count;
        return _this;
    }
    BuyAuctionQuest.prototype.getValues = function () {
        return [this.current, this.count, this.money];
    };
    BuyAuctionQuest.prototype.getIcon = function () {
        return this.item;
    };
    BuyAuctionQuest.prototype.clone = function () {
        return new BuyAuctionQuest(this.count, this.money);
    };
    BuyAuctionQuest.prototype.handleBuy = function (playerUid, item) {
        this.item = item.getItem();
        this.current++;
        if (this.current >= this.count && String(Entity.getNameTag(playerUid)) != String(item.getOwner().getUserName()))
            this.completed(playerUid);
    };
    return BuyAuctionQuest;
}(DailyQuest));
(function () {
    Daily.registerQuest(new BuyAuctionQuest(1, 30));
    Daily.registerQuest(new BuyAuctionQuest(2, 50));
    Daily.registerQuest(new BuyAuctionQuest(2, 80));
    Daily.registerQuest(new BuyAuctionQuest(3, 300));
})();
Translation.addTranslation("Added item in auction %v/%v, reward %v", {
    ru: "Добавьте предметов на аукцион %v/%v, награда %v"
});
var AddItemAuctionQuest = /** @class */ (function (_super) {
    __extends(AddItemAuctionQuest, _super);
    function AddItemAuctionQuest(count, money) {
        if (count === void 0) { count = 1; }
        var _this = _super.call(this, money, "Added item in auction %v/%v, reward %v") || this;
        _this.current = 0;
        _this.item = { id: 0, count: 0, data: 0 };
        _this.count = count;
        return _this;
    }
    AddItemAuctionQuest.prototype.getIcon = function () {
        return this.item;
    };
    AddItemAuctionQuest.prototype.getValues = function () {
        return [this.current, this.count, this.money];
    };
    AddItemAuctionQuest.prototype.clone = function () {
        return new AddItemAuctionQuest(this.count, this.money);
    };
    AddItemAuctionQuest.prototype.handleAddItemAuction = function (playerUid, item) {
        this.item = item.getItem();
        this.current++;
        if (this.current >= this.count)
            this.completed(playerUid);
    };
    return AddItemAuctionQuest;
}(DailyQuest));
(function () {
    Daily.registerQuest(new AddItemAuctionQuest(4, 40));
    Daily.registerQuest(new AddItemAuctionQuest(1, 3));
    Daily.registerQuest(new AddItemAuctionQuest(3, 10));
    Daily.registerQuest(new AddItemAuctionQuest(2, 15));
    Daily.registerQuest(new AddItemAuctionQuest(6, 80));
})();
Translation.addTranslation("Craft %v %v/%v, reward %v", {
    ru: "Скрафтите %v %v/%v, награда %v"
});
Translation.addTranslation("Use the %v/%v workbench, %v reward", {
    ru: "Воспользуйтесь верстаком %v/%v, награда %v"
});
var RecipeDailyQuest = /** @class */ (function (_super) {
    __extends(RecipeDailyQuest, _super);
    function RecipeDailyQuest(item_craft, count, money) {
        var _this = _super.call(this, money, item_craft != -1 ? "Craft %v %v/%v, reward %v" : "Use the %v/%v workbench, %v reward") || this;
        _this.current = 0;
        _this.item = { id: 0, count: 0, data: 0 };
        _this.count = count;
        _this.item_craft = item_craft;
        return _this;
    }
    RecipeDailyQuest.prototype.getValues = function () {
        if (this.item_craft != -1)
            return [getName(this.item_craft, 0), this.current, this.count, this.money];
        return [this.current, this.count, this.money];
    };
    RecipeDailyQuest.prototype.getIcon = function () {
        return this.item;
    };
    RecipeDailyQuest.prototype.clone = function () {
        return new RecipeDailyQuest(this.item_craft, this.count, this.money);
    };
    RecipeDailyQuest.prototype.handleRecipe = function (player, result) {
        this.item = result;
        if (this.item_craft != -1) {
            if (this.item_craft == result.id) {
                this.current += result.count;
            }
        }
        else
            this.count++;
        if (this.current >= this.count)
            this.completed(player);
    };
    return RecipeDailyQuest;
}(DailyQuest));
(function () {
    Daily.registerQuest(new RecipeDailyQuest(VanillaBlockID.planks, 32, 10));
    Daily.registerQuest(new RecipeDailyQuest(VanillaItemID.iron_helmet, 1, 10));
    Daily.registerQuest(new RecipeDailyQuest(VanillaItemID.iron_chestplate, 1, 10));
    Daily.registerQuest(new RecipeDailyQuest(VanillaItemID.iron_leggings, 1, 10));
    Daily.registerQuest(new RecipeDailyQuest(VanillaItemID.iron_boots, 1, 10));
    Daily.registerQuest(new RecipeDailyQuest(VanillaBlockID.glowstone, 5, 35));
    Daily.registerQuest(new RecipeDailyQuest(VanillaItemID.bread, 16, 32));
    Daily.registerQuest(new RecipeDailyQuest(VanillaItemID.bucket, 1, 16));
    Daily.registerQuest(new RecipeDailyQuest(-1, 64, 50));
    Daily.registerQuest(new RecipeDailyQuest(-1, 16, 10));
})();
var DailyRenderText = /** @class */ (function (_super) {
    __extends(DailyRenderText, _super);
    function DailyRenderText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyRenderText.prototype.genId = function (controller) {
        return this.getType();
    };
    DailyRenderText.prototype.getType = function () {
        return "daily_quests";
    };
    DailyRenderText.prototype.getClientType = function () {
        return "daily_quests";
    };
    DailyRenderText.prototype.getText = function (player) {
        if (player != null)
            return JSON.stringify(Daily.toJSON(player));
        return "";
    };
    return DailyRenderText;
}(WorldRenderText));
var ClientRenderText = /** @class */ (function (_super) {
    __extends(ClientRenderText, _super);
    function ClientRenderText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClientRenderText.prototype.getText = function (text) {
        var message = Translation.translate("Daily quests");
        var json = JSON.parse(text);
        for (var i in json.quests) {
            var quest = json.quests[i];
            if (!quest.completed)
                message += "\n" + translate(quest.description, quest.values);
        }
        return message;
    };
    return ClientRenderText;
}(ClientEntity));
WorldRenderText.register("daily_quests", DailyRenderText);
ClientEntity.register("daily_quests", ClientRenderText);
var DailyRenderTextCommand = /** @class */ (function (_super) {
    __extends(DailyRenderTextCommand, _super);
    function DailyRenderTextCommand() {
        return _super.call(this, []) || this;
    }
    DailyRenderTextCommand.prototype.runServer = function (client, args) {
        DEF_RENDER_CONTROOLER.addForPlayer(client.getPlayerUid(), DailyRenderText);
        return true;
    };
    return DailyRenderTextCommand;
}(Command));
CommandRegistry.registry("aboba", new DailyRenderTextCommand());
var PrivateZoneBase = /** @class */ (function () {
    function PrivateZoneBase(json) {
        this.players = {};
        this.owner = json.owner;
        this.players = json.players;
    }
    PrivateZoneBase.prototype.addPermission = function (player) {
        this.players[player] = true;
    };
    PrivateZoneBase.prototype.removePermission = function (player) {
        delete this.players[player];
    };
    PrivateZoneBase.prototype.canPermission = function (player) {
        return this.players[player];
    };
    PrivateZoneBase.prototype.canOwner = function (player) {
        return UsersStorage.getUserIfCreate(player).getUserName() === this.owner;
    };
    PrivateZoneBase.prototype.canDestroyBlock = function (player, x, y, z) {
        var user = UsersStorage.getUserIfCreate(player);
        var nickname = user.getUserName();
        if (nickname === this.owner || this.canPermission(nickname) || user.isOperator())
            return true;
        return false;
    };
    PrivateZoneBase.prototype.canItemUse = function (player, x, y, z) {
        return this.canDestroyBlock(player, x, y, z);
    };
    PrivateZoneBase.prototype.canPoint = function (dimension, x, y, z) {
        return false;
    };
    PrivateZoneBase.prototype.getType = function () {
        return "base";
    };
    PrivateZoneBase.prototype.toJSON = function () {
        return {
            type: this.getType(),
            owner: this.owner,
            players: this.players
        };
    };
    return PrivateZoneBase;
}());
var PrivateZoneDimension = /** @class */ (function (_super) {
    __extends(PrivateZoneDimension, _super);
    function PrivateZoneDimension(json) {
        var _this = _super.call(this, json) || this;
        _this.dimension = json.dimension;
        return _this;
    }
    PrivateZoneDimension.prototype.canPoint = function (dimension, x, y, z) {
        return this.dimension == dimension;
    };
    PrivateZoneDimension.prototype.getType = function () {
        return "dimension";
    };
    PrivateZoneDimension.prototype.toJSON = function () {
        return {
            type: this.getType(),
            owner: this.owner,
            players: this.players,
            dimension: this.dimension
        };
    };
    return PrivateZoneDimension;
}(PrivateZoneBase));
var PrivateZoneFullPos = /** @class */ (function (_super) {
    __extends(PrivateZoneFullPos, _super);
    function PrivateZoneFullPos(json) {
        var _this = _super.call(this, json) || this;
        _this.minx = json.minx;
        _this.miny = json.miny;
        _this.minz = json.minz;
        _this.maxx = json.maxx;
        _this.maxy = json.maxy;
        _this.maxz = json.maxz;
        _this.dimension = json.dimension;
        return _this;
    }
    PrivateZoneFullPos.prototype.canPoint = function (dimension, x, y, z) {
        return this.dimension == dimension &&
            (this.minx >= x && x <= this.maxy) &&
            (this.miny >= y && y <= this.maxy) &&
            (this.minz >= y && y <= this.maxz);
    };
    PrivateZoneFullPos.prototype.getType = function () {
        return "full";
    };
    PrivateZoneFullPos.prototype.toJSON = function () {
        return {
            type: this.getType(),
            owner: this.owner,
            players: this.players,
            minx: this.minx,
            miny: this.miny,
            minz: this.minz,
            maxx: this.maxx,
            maxy: this.maxy,
            maxz: this.maxz,
            dimension: this.dimension
        };
    };
    return PrivateZoneFullPos;
}(PrivateZoneDimension));
var PrivatesStorage;
(function (PrivatesStorage) {
    var storages = {};
    var TYPES = {};
    function fromJSON(json) {
        return new TYPES[json.type](json);
    }
    PrivatesStorage.fromJSON = fromJSON;
    function register(type, clazz) {
        TYPES[type] = clazz;
    }
    PrivatesStorage.register = register;
    function searchPrivateZone(dimension, x, y, z) {
        for (var id in storages) {
            var zone = storages[id];
            if (zone.canPoint(dimension, x, y, z))
                return zone;
        }
        return null;
    }
    PrivatesStorage.searchPrivateZone = searchPrivateZone;
    function canZone(id) {
        return !!storages[id];
    }
    PrivatesStorage.canZone = canZone;
    function addZone(id, zone) {
        storages[id] = zone;
    }
    PrivatesStorage.addZone = addZone;
    register("base", PrivateZoneBase);
    register("dimension", PrivateZoneDimension);
    register("full", PrivateZoneFullPos);
    Callback.addCallback("CheckPrivateZone", function (res, player, dimension, x, y, z, type) {
        var zone = searchPrivateZone(dimension, x, y, z);
        res.set(true);
        if (zone && !zone[String(type)](player, x, y, z))
            res.set(false);
    });
    Saver.addSavesScope("server_utils.private_zones", function (scope) {
        var zones = scope.zones || {};
        for (var id in zones)
            storages[id] = fromJSON(zones[id]);
    }, function () {
        var zones = {};
        for (var id in storages)
            zones[id] = storages[id].toJSON();
        return { zones: zones };
    });
})(PrivatesStorage || (PrivatesStorage = {}));
ModAPI.registerAPI("ServerUtils", {
    CommandRegistry: CommandRegistry,
    Command: Command,
    CommandArgType: CommandArgType,
    CommandUtils: CommandUtils,
    Permission: Permission,
    UsersStorage: UsersStorage,
    Auction: Auction,
    DailyQuest: DailyQuest,
    Daily: Daily,
    GlobalSaves: GlobalSaves,
    PopupWindow: PopupWindow,
    EnumHelp: EnumHelp,
    Utils: {
        alert_message: alert_message,
        message: message,
        setPositionPlayer: setPositionPlayer
    },
    PrivateZoneBase: PrivateZoneBase,
    PrivateZoneDimension: PrivateZoneDimension,
    PrivateZoneFullPos: PrivateZoneFullPos,
    PrivatesStorage: PrivatesStorage,
    requireGlobal: function (cmd) {
        return eval(cmd);
    }
});
