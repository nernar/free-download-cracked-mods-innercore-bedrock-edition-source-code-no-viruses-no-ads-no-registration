var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Command;
(function (Command) {
    var list = {};
    function getInfo(info) {
        info.description = info.description || "";
        info.args = info.args || "";
        return info;
    }
    function register(info) {
        if (has(info.name))
            throw new Error("Command \"" + info.name + "\" was been register");
        list[info.name] = getInfo(info);
    }
    Command.register = register;
    function has(name) {
        return list.hasOwnProperty(name);
    }
    Command.has = has;
    function invoke(name, cmd) {
        var command = get(name);
        if (!command)
            throw new Error("Command \"" + name + "\" not been register");
        command.call(cmd);
    }
    Command.invoke = invoke;
    function get(name) {
        return list[name] || null;
    }
    Command.get = get;
    function getListCommands() {
        return ModAPI.cloneObject(list, true);
    }
    Command.getListCommands = getListCommands;
})(Command || (Command = {}));
Callback.addCallback("NativeCommand", function (command) {
    var cmd = command.split(" ");
    var nameCmd = cmd[0];
    if (Command.has(nameCmd)) {
        cmd.shift();
        Command.invoke(nameCmd, cmd);
        Game.prevent();
    }
});
var Homes;
(function (Homes) {
    var reservKeys = ["set", "del", "delete", "all", "help", "?", "list"];
    var data = {
        homes: {},
        lastHome: null
    };
    Command.register({
        name: "/home",
        call: function (args) {
            switch (args[0]) {
                case "help":
                case "?":
                    Game.message(Translation.translate("/home set [name] - set the point of the house under the name \"name\"\n/home del <name> - delete the home point as \"name\".\n/home [name] - teleport to the point of the house \"name\".\n/home list - view the list of houses."));
                    break;
                case "set":
                    var name = "";
                    if (args[1] != null) {
                        if (reservKeys.indexOf(args[1]) != -1) {
                            Game.message(Translation.sprintf("Cannot create a house named \"%s\"", args[1]));
                            break;
                        }
                        name = args[1];
                    }
                    else {
                        var i = 1;
                        do {
                            name = "home" + i;
                            i++;
                        } while (data.homes.hasOwnProperty(name));
                    }
                    if (data.homes.hasOwnProperty(name)) {
                        var str = "Home \"%s\" update.";
                    }
                    else {
                        var str = "Home \"%s\" created.";
                    }
                    data.homes[name] = Player.getPosition();
                    data.lastHome = name;
                    Game.message(Translation.sprintf(str, name));
                    break;
                case "all":
                case "list":
                    var list = Object.keys(data.homes);
                    if (list.length == 0)
                        Game.message(Translation.translate("Home not found."));
                    else
                        Game.message(Translation.sprintf("List of houses: %s", list.join(", ")));
                    break;
                case "del":
                case "delete":
                    if (args[1] == null) {
                        Game.message(Translation.translate("Invalid command syntax."));
                        break;
                    }
                    var name = args[1];
                    if (data.homes.hasOwnProperty(name)) {
                        delete data.homes[name];
                        Game.message(Translation.sprintf("Home \"%s\" removed.", name));
                    }
                    else if (name == "all") {
                        data.homes = {};
                        Game.message(Translation.translate("All houses are removed."));
                    }
                    else {
                        Game.message(Translation.sprintf("Home \"%s\" not found.", name));
                    }
                    break;
                case undefined:
                    if (data.lastHome == null) {
                        Game.message(Translation.translate("Home not found."));
                        break;
                    }
                    if (data.homes.hasOwnProperty(data.lastHome)) {
                        var home = data.homes[data.lastHome];
                        Player.setPosition(home.x, home.y, home.z);
                        Game.message(Translation.translate("You are at home."));
                    }
                    else {
                        Game.message(Translation.sprintf("Home \"%s\" was not found, it may have been deleted.", data.lastHome));
                    }
                    break;
                default:
                    var name = args[0];
                    if (data.homes.hasOwnProperty(name)) {
                        var home = data.homes[name];
                        Player.setPosition(home.x, home.y, home.z);
                        Game.message(Translation.translate("You are at home."));
                    }
                    else {
                        Game.message(Translation.sprintf("Home \"%s\" not found.", name));
                    }
                    break;
            }
        }
    });
    Command.register({
        name: "/h",
        call: function (args) {
            if (args.length == 0)
                args.push("?");
            Command.get("/home").call(args);
        }
    });
    Command.register({
        name: "/sethome",
        call: function (args) { return Command.get("/home").call(__spreadArray(["set"], __read(args))); }
    });
    Saver.addSavesScope("Homes", function read(scope) {
        data.homes = {};
        data.lastHome = null;
        if (scope) {
            for (var i in scope.homes)
                data.homes[i] = scope.homes[i];
            data.lastHome = scope.lastHome;
        }
    }, function save() {
        return data;
    });
})(Homes || (Homes = {}));
Object.keys = function (o) {
    var list = [];
    for (var i in o)
        list.push(i);
    return list;
};
Translation.addTranslation("/home set [name] - set the point of the house under the name \"name\"\n/home del <name> - delete the home point as \"name\".\n/home [name] - teleport to the point of the house \"name\".\n/home list - view the list of houses.", {
    ru: "/home set [name] - \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0443 \u0434\u043E\u043C\u0430 \u043F\u043E\u0434 \u0438\u043C\u0435\u043D\u0435\u043C \"name\".\n/home del <name> - \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u043E\u0447\u043A\u0443 \u0434\u043E\u043C\u0430 \u043F\u043E\u0434 \u0438\u043C\u0435\u043D\u0435\u043C \"name\".\n/home [name] - \u0442\u0435\u043B\u0435\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0442\u043E\u0447\u043A\u0443 \u0434\u043E\u043C\u0430 \"name\".\n/home list - \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043C\u043E\u0432.",
    en: "/home set [name] - set the point of the house under the name \"name\"\n/home del <name> - delete the home point as \"name\".\n/home [name] - teleport to the point of the house \"name\".\n/home list - view the list of houses."
});
Translation.addTranslation("Home \"%s\" created.", {
    ru: "Дом \"%s\" создан.",
    en: "Home with the name \"%s\" created."
});
Translation.addTranslation("Home \"%s\" update.", {
    ru: "Дом \"%s\" обновлен.",
    en: "Home with the name \"%s\" updated."
});
Translation.addTranslation("Home \"%s\" removed.", {
    ru: "Дом \"%s\" удален.",
    en: "Home \"%s\" removed."
});
Translation.addTranslation("Home \"%s\" not found.", {
    ru: "Дом \"%s\" не найден.",
    en: "Home \"%s\" not found."
});
Translation.addTranslation("Invalid command syntax.", {
    ru: "Неверный синтаксис команды.",
    en: "Invalid command syntax."
});
Translation.addTranslation("You are at home.", {
    ru: "Вы дома.",
    en: "You are at home."
});
Translation.addTranslation("Home \"%s\" was not found, it may have been deleted.", {
    ru: "Дом \"%s\" не найден, возможно он был удален.",
    en: "Home \"%s\" was not found, it may have been deleted."
});
Translation.addTranslation("Cannot create a house named \"%s\"", {
    ru: "Невозможно создать дом с именем \"%s\".",
    en: "Cannot create a house named \"%s\"."
});
Translation.addTranslation("All houses are removed.", {
    ru: "Все дома удалены.",
    en: "All houses are removed."
});
Translation.addTranslation("Home not found.", {
    ru: "Дом не найден.",
    en: "Home not found."
});
Translation.addTranslation("List of houses: %s", {
    ru: "Список домов: %s",
    en: "List of houses: %s"
});
var Translation;
(function (Translation) {
    function sprintf(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var str = Translation.translate(name);
        for (var i = 0; i < args.length; i++)
            str = str.replace("%s", args[i]);
        return str;
    }
    Translation.sprintf = sprintf;
})(Translation || (Translation = {}));
