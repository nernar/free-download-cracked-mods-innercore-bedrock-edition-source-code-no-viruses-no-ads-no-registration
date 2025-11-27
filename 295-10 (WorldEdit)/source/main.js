function roundFloat(x, y) {
    if (y === void 0) { y = 10; }
    return Math.round(x * y) / y;
}
function __n(count, one, multi) {
    return count == 1 ? one : multi;
}
function copyObject(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var i in sources) {
        var source = sources[i];
        for (var key in source)
            target[key] = source[key];
    }
    return target;
}
function copyRecObject(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var i in sources) {
        var source = sources[i];
        for (var key in source) {
            var field = source[key];
            target[key] = typeof field == "object" ? copyRecObject({}, field) : field;
        }
    }
    return target;
}
Object.values = function (o) {
    var arr = [];
    for (var s in o)
        arr.push(o[s]);
    return arr;
};
function getHelpForCommands(commands, page, inPage, suffix) {
    if (page === void 0) { page = 1; }
    if (inPage === void 0) { inPage = 6; }
    if (suffix === void 0) { suffix = ""; }
    var message = "";
    var pages = Math.ceil(commands.length / inPage);
    if (page > pages)
        page = 1;
    var _page = page - 1;
    var i = inPage * _page;
    var l = i + inPage;
    if (l > commands.length)
        l = commands.length;
    for (; i < l; i++) {
        var command = commands[i];
        message += suffix + command.name + " ";
        if (command.args != null)
            message += command.args + " ";
        message += "- " + Translation.translate(command.description) + "\n";
    }
    return Translation.translate("===Help [Page %page% of %pages%]===\n%cmd%===Help [Page %page% of %pages%]===")
        .replace(/(%page%)/g, page + "")
        .replace(/(%pages%)/g, pages + "")
        .replace("%cmd%", message);
}
var Commands;
(function (Commands) {
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
    Commands.register = register;
    function has(name) {
        return list.hasOwnProperty(name);
    }
    Commands.has = has;
    function invoke(name, cmd) {
        var command = get(name);
        if (!command)
            throw new Error("Command \"" + name + "\" not been register");
        var data = command.call(cmd);
        if (data) {
            Network.sendToServer("worldedit.invokeServerCommand", {
                command: name,
                data: data
            });
        }
    }
    Commands.invoke = invoke;
    function get(name) {
        return list[name] || null;
    }
    Commands.get = get;
    function getListCommands() {
        return copyRecObject(list);
    }
    Commands.getListCommands = getListCommands;
})(Commands || (Commands = {}));
Callback.addCallback("NativeCommand", function (command) {
    if (!WorldEdit.enabled())
        return;
    var cmd = command.split(" ");
    var nameCmd = cmd[0];
    if (Commands.has(nameCmd)) {
        cmd.shift();
        Commands.invoke(nameCmd, cmd);
        Game.prevent();
    }
});
Network.addServerPacket("worldedit.invokeServerCommand", function (client, data) {
    var cmd = Commands.get(data.command);
    var undoData = cmd.server(client, data.data);
    if (undoData)
        WorldEdit.History.send(client, { command: cmd.name, data: undoData });
});
var HistoryAction;
(function (HistoryAction) {
    HistoryAction[HistoryAction["UNDO"] = 0] = "UNDO";
    HistoryAction[HistoryAction["REDO"] = 1] = "REDO";
})(HistoryAction || (HistoryAction = {}));
;
var HistoryStack = /** @class */ (function () {
    function HistoryStack() {
        this.list = [];
        this.index = 0;
        this.count = 0;
    }
    HistoryStack.prototype.push = function (cmd, data) {
        if (typeof cmd == "string")
            cmd = { command: cmd, data: data };
        this.list[this.index++] = cmd;
        this.count = this.index;
    };
    HistoryStack.prototype.send = function (client, cmd, data) {
        if (typeof cmd == "string")
            cmd = { command: cmd, data: data };
        client.send("worldedit.undoData", cmd);
    };
    HistoryStack.prototype.undo = function () {
        return this.list[--this.index];
    };
    HistoryStack.prototype.redo = function () {
        if (this.count == this.index)
            return null;
        return this.list[this.index++];
    };
    HistoryStack.prototype.clear = function () {
        this.index = 0;
    };
    ;
    return HistoryStack;
}());
var WorldEdit = /** @class */ (function () {
    function WorldEdit() {
    }
    WorldEdit.setPosition = function (pos, point, invokeCallback) {
        if (invokeCallback === void 0) { invokeCallback = true; }
        this._vectors[pos] = copyObject({}, point);
        if (invokeCallback !== false)
            Callback.invokeCallback("worldedit.set_position", pos, this._vectors[pos]);
    };
    WorldEdit.getPosition = function (pos) {
        if (this._vectors[pos].x != Infinity)
            return copyObject({}, this._vectors[pos]);
        for (var i = 0, l = this._vectors.length; i < l; i++)
            if (this._vectors[i].x != Infinity)
                return copyObject({}, this._vectors[i]);
        return null;
    };
    WorldEdit.getSizeArea = function () {
        var pos1 = this.getPosition(0);
        var pos2 = this.getPosition(1);
        return (Math.abs(pos1.x - pos2.x) + 1) * (Math.abs(pos1.y - pos2.y) + 1) * (Math.abs(pos1.z - pos2.z) + 1);
    };
    WorldEdit.checkValidPosition = function () {
        return this.getPosition(0).x != Infinity;
    };
    WorldEdit.checkValidLimit = function (limit) {
        return this._limit == -1 || limit < this._limit;
    };
    WorldEdit.setLimit = function (limit) {
        Network.sendToAllClients("worldedit.setlimit", { limit: limit });
    };
    WorldEdit.getLimit = function () {
        return this._limit;
    };
    WorldEdit.enabledWand = function (actor) {
        if (actor === void 0) { actor = null; }
        return actor ? (this._enabledWandForActors[actor] || false) : this._enabledWand;
    };
    WorldEdit.setEnableWand = function (enable) {
        this._enabledWand = enable;
        Network.sendToServer("worldedit.enablewand", { enable: enable });
    };
    WorldEdit.enableWand = function () {
        this.setEnableWand(true);
    };
    WorldEdit.disableWand = function () {
        this.setEnableWand(false);
    };
    WorldEdit.toggleWand = function () {
        this.setEnableWand(!this._enabledWand);
    };
    WorldEdit.enabled = function () {
        return this._enabled;
    };
    //Utils
    WorldEdit.parseBlockInfo = function (info, defaultData) {
        if (defaultData === void 0) { defaultData = 0; }
        var block = info.split(":");
        var data = block[1] ? parseInt(block[1]) : defaultData;
        var id = parseInt(block[0]);
        if (isNaN(id))
            id = BlockID[block[0]] || BlockID[block[0].replace("block_", "")];
        if (id === null)
            throw new Error("Unknown id \"" + block[0] + "\"");
        if (Network.inRemoteWorld())
            id = Network.localToServerId(id);
        return [id, data];
    };
    WorldEdit.clear = function () {
        var l = this._vectors.length;
        for (var i = 0; i < l; i++)
            this.setPosition(i, { x: Infinity, y: Infinity, z: Infinity });
        this.enableWand();
        this._enabled = false;
        this._errorEnabled = null;
        this._enabledWandForActors = {};
    };
    //init worldedit
    WorldEdit.init = function () {
        var _this = this;
        //poistion additive callback
        Callback.addCallback("worldedit.set_position", function (pos) {
            Callback.invokeCallback("worldedit.set_position_" + pos, _this._vectors[pos]);
        });
        //enabled wand
        Network.addServerPacket("worldedit.enablewand", function (client, data) {
            _this._enabledWandForActors[client.getPlayerUid()] = data.enable;
        });
        //enabled WE
        Callback.addCallback("LevelSelected", function () {
            _this._enabled = true;
        });
        Callback.addCallback("LevelPreLoaded", function () {
            if (Network.inRemoteWorld())
                Network.sendToServer("worldedit.connect", { version: new String(__mod__.getMultiplayerVersion()) });
        });
        Callback.addCallback("LevelDisplayed", function () {
            if (!_this._enabled)
                Game.message(_this._errorEnabled ? _this._errorEnabled : Translation.translate("WorldEdit was not found on the server."));
            else {
                Game.message(Translation.translate("WorldEdit %version% is enabled!").replace("%version%", __mod__.getMultiplayerVersion()));
                _this.enableWand();
            }
        });
        Network.addServerPacket("worldedit.connect", function (client, data) {
            var version = new String(__mod__.getMultiplayerVersion());
            if (data.version == version) {
                client.send("worldedit.connected", { success: 1 });
            }
            else
                client.send("worldedit.connected", { version: version });
        });
        Network.addClientPacket("worldedit.connected", function (data) {
            if (data.success == 1) {
                _this._enabled = true;
            }
            else {
                _this._errorEnabled = Translation.translate("Different versions of WorldEdit.\nWorldEdit features are disabled.\nYour version is %version%.\nServer version: %server%.")
                    .replace("%version%", __mod__.getMultiplayerVersion())
                    .replace("%server%", data.version);
            }
        });
        //History
        Network.addClientPacket("worldedit.undoData", function (data) {
            _this.History.push(data);
        });
        //limit
        Network.addClientPacket("worldedit.setlimit", function (data) {
            _this._limit = data.limit;
        });
        //init
        this.setPosition(0, { x: Infinity, y: Infinity, z: Infinity }, false);
        this.setPosition(1, { x: Infinity, y: Infinity, z: Infinity }, false);
    };
    //Poistion
    WorldEdit._vectors = [];
    //limit
    WorldEdit._limit = -1;
    //enabled wand
    WorldEdit._enabledWand = true;
    WorldEdit._enabledWandForActors = {};
    //Enabled WE
    WorldEdit._enabled = false;
    WorldEdit._errorEnabled = null;
    //History
    WorldEdit.History = new HistoryStack();
    //For Commands
    WorldEdit.addCommand = Commands.register;
    WorldEdit.getCommand = Commands.get;
    WorldEdit.invokeCommand = Commands.invoke;
    return WorldEdit;
}());
WorldEdit.init();
ModAPI.registerAPI("WorldEdit", WorldEdit);
var ModAPI;
(function (ModAPI) {
})(ModAPI || (ModAPI = {}));
var Callback;
(function (Callback) {
})(Callback || (Callback = {}));
var Buffer = [];
Commands.register({
    name: "//copy",
    description: "Copy the selected area.",
    args: "[-a]",
    call: function (args) {
        runOnMainThread(function () {
            var with_air = args.indexOf("-a") != -1 ? true : false;
            var world = BlockSource.getCurrentWorldGenRegion();
            var pos1 = WorldEdit.getPosition(0);
            var pos2 = WorldEdit.getPosition(1);
            var end_x = pos1.x > pos2.x ? pos1.x : pos2.x;
            var start_x = pos1.x > pos2.x ? pos2.x : pos1.x;
            var end_y = pos1.y > pos2.y ? pos1.y : pos2.y;
            var start_y = pos1.y > pos2.y ? pos2.y : pos1.y;
            var end_z = pos1.z > pos2.z ? pos1.z : pos2.z;
            var start_z = pos1.z > pos2.z ? pos2.z : pos1.z;
            Buffer = [];
            for (var x = start_x; x <= end_x; x++) {
                for (var y = start_y; y <= end_y; y++) {
                    for (var z = start_z; z <= end_z; z++) {
                        var block = world.getBlock(x, y, z);
                        var coord = Player.getPosition();
                        coord.x = Math.round(coord.x);
                        coord.y = Math.round(coord.y);
                        coord.z = Math.round(coord.z);
                        if (block.id == 0 && with_air == false)
                            continue;
                        Buffer.push([coord.x - x, coord.y - y, coord.z - z, block.id, block.data]);
                    }
                }
            }
            Game.message(Translation.translate("Region copied."));
        });
    },
});
Commands.register({
    name: "//cut",
    description: "Cut the selected area.",
    args: "[-a]",
    server: function (client, data) {
        runOnMainThread(function () {
            var player = client.getPlayerUid();
            var world = BlockSource.getDefaultForActor(player);
            var Buffer = [];
            var undo = [];
            for (var x = data.pos[0].x; x <= data.pos[1].x; x++) {
                for (var y = data.pos[0].y; y <= data.pos[1].y; y++) {
                    for (var z = data.pos[0].z; z <= data.pos[1].z; z++) {
                        var block = world.getBlock(x, y, z);
                        var coord = Entity.getPosition(player);
                        coord.x = Math.round(coord.x);
                        coord.y = Math.round(coord.y);
                        coord.z = Math.round(coord.z);
                        if (block.id == 0 && data.with_air == 0)
                            continue;
                        Buffer.push([coord.x - x, coord.y - y, coord.z - z, block.id, block.data]);
                        undo.push([x, y, z, block.id, block.data]);
                        world.setBlock(x, y, z, 0, 0);
                    }
                }
            }
            client.sendMessage(Translation.translate("Region cut."));
            client.send("worldedit.sendbuffer", Buffer);
            WorldEdit.History.send(client, "//cut", undo);
        });
    },
    call: function (args) {
        var with_air = args.indexOf("-a") != -1 ? 1 : 0;
        var pos1 = WorldEdit.getPosition(0);
        var pos2 = WorldEdit.getPosition(1);
        var end_x = pos1.x > pos2.x ? pos1.x : pos2.x;
        var start_x = pos1.x > pos2.x ? pos2.x : pos1.x;
        var end_y = pos1.y > pos2.y ? pos1.y : pos2.y;
        var start_y = pos1.y > pos2.y ? pos2.y : pos1.y;
        var end_z = pos1.z > pos2.z ? pos1.z : pos2.z;
        var start_z = pos1.z > pos2.z ? pos2.z : pos1.z;
        return {
            pos: [
                { x: start_x, y: start_y, z: start_z },
                { x: end_x, y: end_y, z: end_z }
            ],
            with_air: with_air
        };
    },
    historyServer: function (client, action, data) {
        var l = data.length;
        var world = BlockSource.getDefaultForActor(client.getPlayerUid());
        for (var i = 0; i < l; i++) {
            var block = data[i];
            switch (action) {
                case HistoryAction.UNDO:
                    world.setBlock(block[0], block[1], block[2], block[3], block[4]);
                    break;
                case HistoryAction.REDO:
                    world.setBlock(block[0], block[1], block[2], 0, 0);
                    break;
            }
        }
    }
});
Commands.register({
    name: "//paste",
    description: "Paste the copied area.",
    args: "",
    server: function (client, data) {
        var count = data.length;
        var player = client.getPlayerUid();
        var world = BlockSource.getDefaultForActor(player);
        var undo = {
            cut: [],
            paste: data
        };
        for (var i = 0; i < count; i++) {
            var coord = Entity.getPosition(player);
            coord.x = Math.round(coord.x);
            coord.y = Math.round(coord.y);
            coord.z = Math.round(coord.z);
            var x = coord.x - data[i][0];
            var y = coord.y - data[i][1];
            var z = coord.z - data[i][2];
            var tile = world.getBlock(x, y, z);
            world.setBlock(x, y, z, data[i][3], data[i][4]);
            undo.cut.push([x, y, z, tile.id, tile.data]);
        }
        client.sendMessage(Translation.translate(__n(count, "%count% block changed.", "%count% blocks changed.")).replace("%count%", count.toString()));
        WorldEdit.History.send(client, "//paste", undo);
    },
    call: function () {
        var count = Buffer.length;
        if (count == 0)
            Game.message("Buffer empty");
        return Buffer;
    },
    historyServer: function (client, action, data) {
        var l = data.cut.length;
        var world = BlockSource.getDefaultForActor(client.getPlayerUid());
        for (var i = 0; i < l; i++) {
            var arr = action == HistoryAction.UNDO ? data.cut : data.paste;
            world.setBlock(arr[i][0], arr[i][1], arr[i][2], arr[i][3], arr[i][4]);
        }
    }
});
Network.addClientPacket("worldedit.sendbuffer", function (data) {
    if (WorldEdit.enabled())
        Buffer = data;
});
//Set pos1
Callback.addCallback("ItemUseLocalServer", function (coords, item, block, isExternal, player) {
    if (WorldEdit.enabled() && item.id == wand_id && WorldEdit.enabledWand()) {
        Commands.invoke("//pos1", [coords.x.toString(), coords.y.toString(), coords.z.toString()]);
        Game.prevent();
    }
});
//Set pos2
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    var actor = new PlayerActor(player);
    if (WorldEdit.enabled() && actor.getGameMode() == EGameMode.CREATIVE && Entity.getCarriedItem(player).id == wand_id && WorldEdit.enabledWand(player)) {
        var client = Network.getClientForPlayer(player);
        if (client) {
            client.send("worldedit.setpos", {
                coords: coords,
                position: 2
            });
            Game.prevent();
        }
    }
});
Callback.addCallback("DestroyBlockStart", function (coords, block, player) {
    var actor = new PlayerActor(player);
    if (WorldEdit.enabled() && actor.getGameMode() == EGameMode.SURVIVAL && Entity.getCarriedItem(player).id == wand_id && WorldEdit.enabledWand(player)) {
        var client = Network.getClientForPlayer(player);
        if (client) {
            client.send("worldedit.setpos", {
                coords: coords,
                position: 2
            });
            Game.prevent();
        }
    }
});
//Set posN
Network.addClientPacket("worldedit.setpos", function (data) {
    if (!WorldEdit.enabled())
        return;
    var coords = data.coords;
    Commands.invoke("//pos" + data.position, [coords.x.toString(), coords.y.toString(), coords.z.toString()]);
    Game.prevent();
});
Callback.addCallback("LevelLeft", function () {
    WorldEdit.clear();
});
/** Общие команды **/
Commands.register({
    name: "//help",
    description: "Help.",
    args: "[page/command]",
    call: function (args) {
        var page = args[0] ? parseInt(args[0]) : 1;
        if (page < 0)
            page = 1;
        if (isNaN(page)) {
            var cmd = args[0];
            if (!Commands.has(args[0]))
                cmd = "//" + args[0];
            if (Commands.has(cmd)) {
                var command = Commands.get(cmd);
                var message = command.name + " ";
                if (command.args != null)
                    message += command.args + " ";
                message += "- " + Translation.translate(command.description);
                Game.message(message);
            }
            else {
                Game.message(Translation.translate("There is no such command."));
            }
        }
        else {
            Game.message(getHelpForCommands(Object.values(Commands.getListCommands()), page, 6));
        }
    }
});
Commands.register({
    name: "//?",
    description: "Help.",
    args: "[page/command]",
    call: Commands.get("//help").call
});
Commands.register({
    name: "//limit",
    description: "Set the maximum number of <limit> blocks used for commands. Works for host only. Used to prevent catastrophic incidents.",
    args: "<limit>",
    server: function (client, limit) {
        WorldEdit.setLimit(limit);
    },
    call: function (args) {
        if (Network.inRemoteWorld())
            return Game.message(Translation.translate("You are not a host."));
        if (!args[0] || isNaN(parseInt(args[0])))
            return Game.message(Translation.translate("Don't valid command."));
        var newLimit = parseInt(args[0]);
        Game.message(Translation.translate("The maximum number of blocks used with the commands %blocks%.")
            .replace(/(%blocks%)/g, newLimit.toString()));
        return newLimit;
    }
});
/** Перемещение **/
/** Операции с биомами **/
/** Создание **/
/** Выделение **/
Commands.register({
    name: "//pos1",
    description: "Set selection position #1 to the block above the one that you are standing on.",
    args: "[<x> <y> <z>]",
    call: function (args) {
        var coords;
        if (args[0] === undefined) {
            coords = Player.getPosition();
            coords.x = Math.round(coords.x);
            coords.y = Math.round(coords.y);
            coords.z = Math.round(coords.z);
        }
        else {
            if (args[1] === undefined || args[2] === undefined)
                return Game.message(Translation.translate("Don't valid command."));
            coords = {
                x: parseInt(args[0]),
                y: parseInt(args[1]),
                z: parseInt(args[2])
            };
        }
        WorldEdit.setPosition(0, coords);
        Game.message(Translation.translate("The first position is set to %x%,%y%,%z%.")
            .replace("%x%", coords.x.toString())
            .replace("%y%", coords.y.toString())
            .replace("%z%", coords.z.toString()));
        var size = WorldEdit.getSizeArea();
        var message = Translation.translate(__n(size, "%count% block.", "%count% blocks.")).replace("%count%", size.toString());
        Game.message(Translation.translate("The selected region is %sizeArea%")
            .replace("%sizeArea%", message));
    }
});
Commands.register({
    name: "//pos2",
    description: "Set selection position #2 to the block above the one that you are standing on.",
    args: "[<x> <y> <z>]",
    call: function (args) {
        var coords;
        if (args[0] === undefined) {
            coords = Player.getPosition();
            coords.x = Math.round(coords.x);
            coords.y = Math.round(coords.y);
            coords.z = Math.round(coords.z);
        }
        else {
            if (args[1] === undefined || args[2] === undefined)
                return Game.message(Translation.translate("Don't valid command."));
            coords = {
                x: parseInt(args[0]),
                y: parseInt(args[1]),
                z: parseInt(args[2])
            };
        }
        WorldEdit.setPosition(1, coords);
        Game.message(Translation.translate("The second position is set to %x%,%y%,%z%.")
            .replace("%x%", coords.x.toString())
            .replace("%y%", coords.y.toString())
            .replace("%z%", coords.z.toString()));
        var size = WorldEdit.getSizeArea();
        var message = Translation.translate(__n(size, "%count% block.", "%count% blocks.")).replace("%count%", size.toString());
        Game.message(Translation.translate("The selected region is %sizeArea%")
            .replace("%sizeArea%", message));
    }
});
Commands.register({
    name: "//wand",
    description: "Gives you the \"EditWand\".",
    args: "",
    call: function () {
        Player.addItemToInventory(wand_id, 1, 0);
    },
});
Commands.register({
    name: "//toggleeditwand",
    description: "Toggles the edit wand selection mode, allowing you to use the edit wand item normally.",
    args: "",
    call: function () {
        WorldEdit.toggleWand();
        Game.message(Translation.translate("Mode wand edit switched."));
    }
});
Commands.register({
    name: "//desel",
    description: "Deselects the current selection.",
    args: "",
    call: function () {
        for (var i = 0; i < 2; i++)
            WorldEdit.setPosition(i, { x: Infinity, y: Infinity, z: Infinity });
        Callback.invokeCallback("worldedit.desel");
        Game.message(Translation.translate("The current selection is canceled."));
    }
});
Commands.register({
    name: "//size",
    description: "Get size area.",
    args: "[-с]",
    call: function (args) {
        var size;
        if (args[0] == "-c") {
            // Game.message(WorldEdit.getMessageSize(WorldEdit.copy.length, 0));
            size = WorldEdit.getSizeArea();
        }
        else {
            size = WorldEdit.getSizeArea();
        }
        Game.message(Translation.translate(__n(size, "%count% block.", "%count% blocks.")).replace("%count%", size.toString()));
    }
});
;
Commands.register({
    name: "//set",
    description: "Set all blocks inside the selection region to a specified block.",
    args: "<block>",
    server: function (client, data) {
        var undo = {
            blocks: [],
            set: data.block
        };
        var count = 0;
        runOnMainThread(function () {
            var world = BlockSource.getDefaultForActor(client.getPlayerUid());
            for (var x = data.pos[0].x; x <= data.pos[1].x; x++) {
                if (!WorldEdit.checkValidLimit(count))
                    break;
                for (var y = data.pos[0].y; y <= data.pos[1].y; y++) {
                    if (!WorldEdit.checkValidLimit(count))
                        break;
                    for (var z = data.pos[0].z; z <= data.pos[1].z; z++) {
                        if (!WorldEdit.checkValidLimit(count))
                            break;
                        var tile = world.getBlock(x, y, z);
                        undo.blocks.push([x, y, z, tile.id, tile.data]);
                        world.setBlock(x, y, z, data.block[0], data.block[1]);
                        count++;
                    }
                }
            }
            var msg = Translation.translate(__n(count, "%count% block changed to \"%name%\".", "%count% blocks changed to \"%name%\".")).replace("%count%", count.toString())
                .replace("%name%", Item.getName(Block.convertBlockToItemId(data.block[0]), data.block[1]));
            var limit = WorldEdit.getLimit();
            if (limit != -1)
                msg += "\n" + Translation.translate("Block limit: %count%.")
                    .replace("%count%", limit.toString());
            client.sendMessage(msg);
            WorldEdit.History.send(client, { command: "//set", data: undo });
        });
    },
    call: function (args) {
        if (!args[0])
            return Game.message(Translation.translate("Don't valid command."));
        if (!WorldEdit.checkValidPosition())
            return Game.message(Translation.translate("Set both positions."));
        var block = WorldEdit.parseBlockInfo(args[0]);
        var id = block[0];
        var data = block[1];
        var pos1 = WorldEdit.getPosition(0);
        var pos2 = WorldEdit.getPosition(1);
        var end_x = pos1.x > pos2.x ? pos1.x : pos2.x;
        var start_x = pos1.x > pos2.x ? pos2.x : pos1.x;
        var end_y = pos1.y > pos2.y ? pos1.y : pos2.y;
        var start_y = pos1.y > pos2.y ? pos2.y : pos1.y;
        var end_z = pos1.z > pos2.z ? pos1.z : pos2.z;
        var start_z = pos1.z > pos2.z ? pos2.z : pos1.z;
        return {
            pos: [
                { x: start_x, y: start_y, z: start_z },
                { x: end_x, y: end_y, z: end_z }
            ],
            block: [id, data]
        };
    },
    historyServer: function (client, action, data) {
        var SetInfo = data;
        runOnMainThread(function () {
            var world = BlockSource.getDefaultForActor(client.getPlayerUid());
            var count = SetInfo.blocks.length;
            for (var i = 0; i < count; i++) {
                var block = SetInfo.blocks[i];
                switch (action) {
                    case HistoryAction.UNDO:
                        world.setBlock(block[0], block[1], block[2], block[3], block[4]);
                        break;
                    case HistoryAction.REDO:
                        world.setBlock(block[0], block[1], block[2], SetInfo.set[0], SetInfo.set[1]);
                        break;
                }
            }
            var msg = Translation.translate(__n(count, "%count% block changed.", "%count% blocks changed.")).replace("%count%", count.toString());
            var limit = WorldEdit.getLimit();
            if (limit != -1)
                msg += "\n" + Translation.translate("Block limit: %count%.")
                    .replace("%count%", limit.toString());
            client.sendMessage(msg);
        });
    }
});
Commands.register({
    name: "//replace",
    description: "Replace all blocks of the specified block(s) with another block inside the region.",
    args: "[from_block] <to_block>",
    server: function (client, data) {
        runOnMainThread(function () {
            var count = 0;
            var undo = { blocks: [], set: data.block };
            var world = BlockSource.getCurrentWorldGenRegion();
            for (var x = data.pos[0].x; x <= data.pos[1].x; x++) {
                if (!WorldEdit.checkValidLimit(count))
                    break;
                for (var y = data.pos[0].y; y <= data.pos[1].y; y++) {
                    if (!WorldEdit.checkValidLimit(count))
                        break;
                    for (var z = data.pos[0].z; z <= data.pos[1].z; z++) {
                        if (!WorldEdit.checkValidLimit(count))
                            break;
                        var tile = World.getBlock(x, y, z);
                        if (data.pattern) {
                            if (tile.id == data.pattern[0] && (data.pattern[1] == -1 || tile.data == data.pattern[1])) {
                                undo.blocks.push([x, y, z, tile.id, tile.data]);
                                world.setBlock(x, y, z, data.block[0], data.block[1]);
                                count++;
                            }
                        }
                        else if (tile.id != 0) {
                            undo.blocks.push([x, y, z, tile.id, tile.data]);
                            world.setBlock(x, y, z, data.block[0], data.block[1]);
                            count++;
                        }
                    }
                }
            }
            WorldEdit.History.send(client, { command: "//replace", data: undo });
            var msg = Translation.translate(__n(count, "%count% block changed to \"%name%\".", "%count% blocks changed to \"%name%\".")).replace("%count%", count.toString())
                .replace("%name%", Item.getName(Block.convertBlockToItemId(data.block[0]), data.block[1]));
            var limit = WorldEdit.getLimit();
            if (limit != -1)
                msg += "\n" + Translation.translate("Block limit: %count%.")
                    .replace("%count%", limit.toString());
            client.sendMessage(msg);
        });
    },
    call: function (args) {
        if (!args[0])
            return Game.message(Translation.translate("Don't valid command."));
        if (!WorldEdit.checkValidPosition())
            return Game.message(Translation.translate("Set both positions."));
        var from_block = null;
        var to_block = null;
        if (args[1]) {
            from_block = WorldEdit.parseBlockInfo(args[0], -1);
            to_block = WorldEdit.parseBlockInfo(args[1]);
        }
        else {
            to_block = WorldEdit.parseBlockInfo(args[0]);
        }
        var pos1 = WorldEdit.getPosition(0);
        var pos2 = WorldEdit.getPosition(1);
        var end_x = pos1.x > pos2.x ? pos1.x : pos2.x;
        var start_x = pos1.x > pos2.x ? pos2.x : pos1.x;
        var end_y = pos1.y > pos2.y ? pos1.y : pos2.y;
        var start_y = pos1.y > pos2.y ? pos2.y : pos1.y;
        var end_z = pos1.z > pos2.z ? pos1.z : pos2.z;
        var start_z = pos1.z > pos2.z ? pos2.z : pos1.z;
        return {
            pos: [
                { x: start_x, y: start_y, z: start_z },
                { x: end_x, y: end_y, z: end_z }
            ],
            block: to_block,
            pattern: from_block
        };
    },
    historyServer: function (client, action, data) {
        var SetInfo = data;
        runOnMainThread(function () {
            var world = BlockSource.getDefaultForActor(client.getPlayerUid());
            var count = SetInfo.blocks.length;
            for (var i = 0; i < count; i++) {
                var block = SetInfo.blocks[i];
                switch (action) {
                    case HistoryAction.UNDO:
                        world.setBlock(block[0], block[1], block[2], block[3], block[4]);
                        break;
                    case HistoryAction.REDO:
                        world.setBlock(block[0], block[1], block[2], SetInfo.set[0], SetInfo.set[1]);
                        break;
                }
            }
            var msg = Translation.translate(__n(count, "%count% block changed.", "%count% blocks changed.")).replace("%count%", count.toString());
            var limit = WorldEdit.getLimit();
            if (limit != -1)
                msg += "\n" + Translation.translate("Block limit: %count%.")
                    .replace("%count%", limit.toString());
            client.sendMessage(msg);
        });
    }
});
Commands.register({
    name: "//box",
    description: "Build walls, floor, and ceiling.",
    args: "<block>",
    server: function (client, data) {
        runOnMainThread(function () {
            var count = 0;
            var undo = { blocks: [], set: data.block };
            var world = BlockSource.getCurrentWorldGenRegion();
            for (var x = data.pos[0].x; x <= data.pos[1].x; x++) {
                if (!WorldEdit.checkValidLimit(count))
                    break;
                for (var y = data.pos[0].y; y <= data.pos[1].y; y++) {
                    if (!WorldEdit.checkValidLimit(count))
                        break;
                    for (var z = data.pos[0].z; z <= data.pos[1].z; z++) {
                        if (!WorldEdit.checkValidLimit(count))
                            break;
                        if (x == data.pos[0].x || x == data.pos[1].x || y == data.pos[0].y || y == data.pos[1].y || z == data.pos[0].z || z == data.pos[1].z) {
                            var tile = world.getBlock(x, y, z);
                            undo.blocks.push([x, y, z, tile.id, tile.data]);
                            world.setBlock(x, y, z, data.block[0], data.block[1]);
                            count++;
                        }
                    }
                }
            }
            WorldEdit.History.send(client, { command: "//box", data: undo });
            var msg = Translation.translate(__n(count, "%count% block changed to \"%name%\".", "%count% blocks changed to \"%name%\".")).replace("%count%", count.toString())
                .replace("%name%", Item.getName(Block.convertBlockToItemId(data.block[0]), data.block[1]));
            var limit = WorldEdit.getLimit();
            if (limit != -1)
                msg += "\n" + Translation.translate("Block limit: %count%.")
                    .replace("%count%", limit.toString());
            client.sendMessage(msg);
        });
    },
    call: function (args) {
        if (!args[0])
            return Game.message(Translation.translate("Don't valid command."));
        if (!WorldEdit.checkValidPosition())
            return Game.message(Translation.translate("Set both positions."));
        var block = WorldEdit.parseBlockInfo(args[0]);
        var id = block[0];
        var data = block[1];
        var pos1 = WorldEdit.getPosition(0);
        var pos2 = WorldEdit.getPosition(1);
        var end_x = pos1.x > pos2.x ? pos1.x : pos2.x;
        var start_x = pos1.x > pos2.x ? pos2.x : pos1.x;
        var end_y = pos1.y > pos2.y ? pos1.y : pos2.y;
        var start_y = pos1.y > pos2.y ? pos2.y : pos1.y;
        var end_z = pos1.z > pos2.z ? pos1.z : pos2.z;
        var start_z = pos1.z > pos2.z ? pos2.z : pos1.z;
        return {
            pos: [
                { x: start_x, y: start_y, z: start_z },
                { x: end_x, y: end_y, z: end_z }
            ],
            block: [id, data]
        };
    },
    historyServer: function (client, action, data) {
        var SetInfo = data;
        runOnMainThread(function () {
            var world = BlockSource.getDefaultForActor(client.getPlayerUid());
            var count = SetInfo.blocks.length;
            for (var i = 0; i < count; i++) {
                var block = SetInfo.blocks[i];
                switch (action) {
                    case HistoryAction.UNDO:
                        world.setBlock(block[0], block[1], block[2], block[3], block[4]);
                        break;
                    case HistoryAction.REDO:
                        world.setBlock(block[0], block[1], block[2], SetInfo.set[0], SetInfo.set[1]);
                        break;
                }
            }
            var msg = Translation.translate(__n(count, "%count% block changed.", "%count% blocks changed.")).replace("%count%", count.toString());
            var limit = WorldEdit.getLimit();
            if (limit != -1)
                msg += "\n" + Translation.translate("Block limit: %count%.")
                    .replace("%count%", limit.toString());
            client.sendMessage(msg);
        });
    }
});
Commands.register({
    name: "//walls",
    description: "Build walls, floor, and ceiling.",
    args: "<block>",
    server: function (client, data) {
        runOnMainThread(function () {
            var count = 0;
            var undo = { blocks: [], set: data.block };
            var world = BlockSource.getCurrentWorldGenRegion();
            for (var x = data.pos[0].x; x <= data.pos[1].x; x++) {
                if (!WorldEdit.checkValidLimit(count))
                    break;
                for (var y = data.pos[0].y; y <= data.pos[1].y; y++) {
                    if (!WorldEdit.checkValidLimit(count))
                        break;
                    for (var z = data.pos[0].z; z <= data.pos[1].z; z++) {
                        if (!WorldEdit.checkValidLimit(count))
                            break;
                        if (x == data.pos[0].x || x == data.pos[1].x || z == data.pos[0].z || z == data.pos[1].z) {
                            var tile = world.getBlock(x, y, z);
                            undo.blocks.push([x, y, z, tile.id, tile.data]);
                            world.setBlock(x, y, z, data.block[0], data.block[1]);
                            count++;
                        }
                    }
                }
            }
            WorldEdit.History.send(client, { command: "//wall", data: undo });
            var msg = Translation.translate(__n(count, "%count% block changed to \"%name%\".", "%count% blocks changed to \"%name%\".")).replace("%count%", count.toString())
                .replace("%name%", Item.getName(Block.convertBlockToItemId(data.block[0]), data.block[1]));
            var limit = WorldEdit.getLimit();
            if (limit != -1)
                msg += "\n" + Translation.translate("Block limit: %count%.")
                    .replace("%count%", limit.toString());
            client.sendMessage(msg);
        });
    },
    call: function (args) {
        if (!args[0])
            return Game.message(Translation.translate("Don't valid command."));
        if (!WorldEdit.checkValidPosition())
            return Game.message(Translation.translate("Set both positions."));
        var block = WorldEdit.parseBlockInfo(args[0]);
        var id = block[0];
        var data = block[1];
        var pos1 = WorldEdit.getPosition(0);
        var pos2 = WorldEdit.getPosition(1);
        var end_x = pos1.x > pos2.x ? pos1.x : pos2.x;
        var start_x = pos1.x > pos2.x ? pos2.x : pos1.x;
        var end_y = pos1.y > pos2.y ? pos1.y : pos2.y;
        var start_y = pos1.y > pos2.y ? pos2.y : pos1.y;
        var end_z = pos1.z > pos2.z ? pos1.z : pos2.z;
        var start_z = pos1.z > pos2.z ? pos2.z : pos1.z;
        return {
            pos: [
                { x: start_x, y: start_y, z: start_z },
                { x: end_x, y: end_y, z: end_z }
            ],
            block: [id, data]
        };
    },
    historyServer: function (client, action, data) {
        var SetInfo = data;
        runOnMainThread(function () {
            var world = BlockSource.getDefaultForActor(client.getPlayerUid());
            var count = SetInfo.blocks.length;
            for (var i = 0; i < count; i++) {
                var block = SetInfo.blocks[i];
                switch (action) {
                    case HistoryAction.UNDO:
                        world.setBlock(block[0], block[1], block[2], block[3], block[4]);
                        break;
                    case HistoryAction.REDO:
                        world.setBlock(block[0], block[1], block[2], SetInfo.set[0], SetInfo.set[1]);
                        break;
                }
            }
            var msg = Translation.translate(__n(count, "%count% block changed.", "%count% blocks changed.")).replace("%count%", count.toString());
            var limit = WorldEdit.getLimit();
            if (limit != -1)
                msg += "\n" + Translation.translate("Block limit: %count%.")
                    .replace("%count%", limit.toString());
            client.sendMessage(msg);
        });
    }
});
Commands.register({
    name: "//undo",
    description: "Undo your last action.",
    args: "",
    server: function (client, data) {
        var command = Commands.get(data.command);
        command.historyServer(client, data.action, data.data);
    },
    call: function () {
        var undoInfo = WorldEdit.History.undo();
        if (!undoInfo)
            return Game.message(Translation.translate("There is nothing to undo."));
        var command = Commands.get(undoInfo.command);
        if (!command.historyCall && !command.historyServer)
            throw new Error("Unregister historyCall for " + undoInfo.command);
        if (command.historyCall)
            return {
                command: command.name,
                action: HistoryAction.UNDO,
                data: command.historyCall(HistoryAction.UNDO, undoInfo.data)
            };
        else
            return {
                command: command.name,
                action: HistoryAction.UNDO,
                data: undoInfo.data
            };
    },
});
Commands.register({
    name: "//redo",
    description: "Redo your last (undone) action. This command replays back history and does not repeat the command.",
    args: "",
    server: Commands.get("//undo").server,
    call: function () {
        var redoInfo = WorldEdit.History.redo();
        if (!redoInfo)
            return Game.message(Translation.translate("There is nothing to undo."));
        var command = Commands.get(redoInfo.command);
        if (!command.historyCall && !command.historyServer)
            throw new Error("Unregister historyCall for " + redoInfo.command);
        if (command.historyCall)
            return {
                command: command.name,
                action: HistoryAction.REDO,
                data: command.historyCall(HistoryAction.REDO, redoInfo.data)
            };
        else
            return {
                command: command.name,
                action: HistoryAction.REDO,
                data: redoInfo.data
            };
    },
});
Commands.register({
    name: "//clearhistory",
    description: "Clear your history.",
    args: "",
    call: function () {
        WorldEdit.History.clear();
        Game.message(Translation.translate("History cleared."));
    },
});
/** Other **/
Commands.register({
    name: "//r",
    description: "Work with the region.",
    args: "<type> [args]",
    call: function (args) {
        switch (args[0]) {
            case "help":
            case "?":
            case undefined:
                var list = [
                    {
                        name: "help",
                        args: "<page>",
                        description: "Commands for working with the region"
                    },
                    {
                        name: "up",
                        args: "<count>",
                        description: "Raise the selected region by the specified number of blocks"
                    },
                    {
                        name: "down",
                        args: "<count>",
                        description: "Lower the selected region by the specified number of blocks"
                    },
                    {
                        name: "pos1",
                        args: Commands.get("//pos1").args,
                        description: Commands.get("//pos1").description
                    },
                    {
                        name: "pos2",
                        args: Commands.get("//pos2").args,
                        description: Commands.get("//pos2").description
                    }
                ];
                var page = args[1] ? parseInt(args[1]) : 1;
                if (isNaN(page))
                    page = 1;
                Game.message(getHelpForCommands(list, page, 6, "//region "));
                break;
            case "up":
                {
                    if (!args[1])
                        return Game.message(Translation.translate("Don't valid command."));
                    if (!WorldEdit.checkValidPosition())
                        return Game.message(Translation.translate("Set both positions."));
                    var up = parseInt(args[1]);
                    if (isNaN(up))
                        return Game.message(Translation.translate("Don't valid command."));
                    var pos1 = WorldEdit.getPosition(0);
                    var pos2 = WorldEdit.getPosition(1);
                    if (pos1.y > pos2.y) {
                        pos1.y += up;
                        WorldEdit.setPosition(0, pos1);
                    }
                    else {
                        pos2.y += up;
                        WorldEdit.setPosition(1, pos2);
                    }
                    Game.message(Translation.translate("The region is raised to %area%")
                        .replace("%area%", Translation.translate(__n(up, "%count% block.", "%count% blocks."))
                        .replace("%count%", up.toString())));
                }
                break;
            case "down":
                {
                    if (!args[1])
                        return Game.message(Translation.translate("Don't valid command."));
                    if (!WorldEdit.checkValidPosition())
                        return Game.message(Translation.translate("Set both positions."));
                    var down = parseInt(args[1]);
                    if (isNaN(down))
                        return Game.message(Translation.translate("Don't valid command."));
                    var pos1 = WorldEdit.getPosition(0);
                    var pos2 = WorldEdit.getPosition(1);
                    if (pos1.y < pos2.y) {
                        pos1.y -= down;
                        WorldEdit.setPosition(0, pos1);
                    }
                    else {
                        pos2.y -= down;
                        WorldEdit.setPosition(1, pos2);
                    }
                    Game.message(Translation.translate("The region is raised to %area%")
                        .replace("%area%", Translation.translate(__n(down, "%count% block.", "%count% blocks."))
                        .replace("%count%", down.toString())));
                }
                break;
            case "pos1":
            case "pos2":
                var _args = args;
                _args.shift();
                Commands.invoke("//" + args[0], _args);
                break;
            default:
                return Game.message(Translation.translate("Don't valid command."));
        }
    }
});
Commands.register((function () {
    var cmd = Commands.get("//r");
    return {
        name: "//reg",
        description: cmd.description,
        args: cmd.args,
        call: cmd.call
    };
})());
Commands.register((function () {
    var cmd = Commands.get("//r");
    return {
        name: "//region",
        description: cmd.description,
        args: cmd.args,
        call: cmd.call
    };
})());
//general
Translation.addTranslation("Set both positions.", {
    ru: "Установите обе позиции.",
    en: "Set both positions.",
});
Translation.addTranslation("Don't valid command.", {
    ru: "Недействительная команда.",
    en: "Don't valid command.",
});
Translation.addTranslation("%count% block changed.", {
    ru: "%count% блок изменено.",
    en: "%count% block changed.",
});
Translation.addTranslation("%count% block changed to \"%name%\".", {
    ru: "%count% блок изменено на \"%name%\".",
    en: "%count% block changed to \"%name%\".",
});
Translation.addTranslation("%count% blocks changed.", {
    ru: "%count% блоков изменено.",
    en: "%count% blocks changed.",
});
Translation.addTranslation("%count% blocks changed to \"%name%\".", {
    ru: "%count% блоков изменено на \"%name%\".",
    en: "%count% blocks changed to \"%name%\".",
});
Translation.addTranslation("%count% block.", {
    ru: "%count% блок.",
    en: "%count% block.",
});
Translation.addTranslation("%count% blocks.", {
    ru: "%count% блоков.",
    en: "%count% blocks.",
});
Translation.addTranslation("Block ID %id%:%data%.", {
    ru: "ID блока %id%:%data%.",
    en: "Block ID %id%:%data%.",
});
Translation.addTranslation("There is no such command.", {
    ru: "Нет такой команды.",
    en: "There is no such command.",
});
//limit
Translation.addTranslation("Set the maximum number of <limit> blocks used for commands. Works for host only. Used to prevent catastrophic incidents.", {
    ru: "Установить максимальное количество блоков <limit>, используемое при командах. Работает только для хоста. Используется для предотвращения катастрофических инцидентов.",
    en: "Set the maximum number of <limit> blocks used for commands. Works for host only. Used to prevent catastrophic incidents.",
});
Translation.addTranslation("You are not a host.", {
    en: "You are not a host.",
    ru: "Вы не хост."
});
Translation.addTranslation("The maximum number of blocks used with the commands %blocks%.", {
    ru: "Максимальное количество блоков, используемое при командах %blocks%.",
    en: "The maximum number of blocks used with the commands %blocks%.",
});
Translation.addTranslation("Block limit: %count%.", {
    ru: "Лимит блоков: %count%.",
    en: "Block limit: %count%."
});
//set
Translation.addTranslation("Set all blocks inside the selection region to a specified block.", {
    ru: "Установите все блоки внутри выбранной области в указанный блок.",
    en: "Set all blocks inside the selection region to a specified block.",
});
//box
Translation.addTranslation("Build walls, floor, and ceiling.", {
    ru: "Построить стены, пол и потолок",
    en: "Build walls, floor, and ceiling.",
});
//set wool
Translation.addTranslation("Build the walls of the region (not including ceiling and floor).", {
    ru: "Построить стены региона (не включая потолок и пол).",
    en: "Build the walls of the region (not including ceiling and floor).",
});
//replace
Translation.addTranslation("Replace all blocks of the specified block(s) with another block inside the region.", {
    ru: "Замените все выбранные блоки другим блоком внутри региона.",
    en: "Replace all blocks of the specified block(s) with another block inside the region.",
});
//help
Translation.addTranslation("Help.", {
    ru: "Помощь.",
    en: "Help.",
});
Translation.addTranslation("===Help [Page %page% of %pages%]===\n%cmd%===Help [Page %page% of %pages%]===", {
    ru: "===Помощь(Страница %page% из %pages%)===\n%cmd%===Помощь(Страница %page% из %pages%)===",
    en: "===Help [Page %page% of %pages%]===\n%cmd%===Help [Page %page% of %pages%]===",
});
//pos
Translation.addTranslation("Set selection position #1 to the block above the one that you are standing on.", {
    ru: "Установить позицию 1 на блок выше того, на котором вы стоите.",
    en: "Set selection position #1 to the block above the one that you are standing on.",
});
Translation.addTranslation("Set selection position #2 to the block above the one that you are standing on.", {
    ru: "Установить позицию 2 на блок выше того, на котором вы стоите.",
    en: "Set selection position #2 to the block above the one that you are standing on.",
});
Translation.addTranslation("The first position is set to %x%,%y%,%z%.", {
    ru: "Первая позиция установлена в %x%,%y%,%z%.",
    en: "The first position is set to %x%,%y%,%z%.",
});
Translation.addTranslation("The second position is set to %x%,%y%,%z%.", {
    ru: "Вторая позиция установлена в %x%,%y%,%z%.",
    en: "The second position is set to %x%,%y%,%z%.",
});
Translation.addTranslation("The selected region is %sizeArea%", {
    ru: "Выбранный регион составляет %sizeArea%",
    en: "The selected region is %sizeArea%",
});
//undo
Translation.addTranslation("Undo your last action.", {
    ru: "Отменить последние действие.",
    en: "Undo your last action.",
});
Translation.addTranslation("Redo your last (undone) action. This command replays back history and does not repeat the command.", {
    ru: "Повторите последнее(отмененное) действие.",
    en: "Redo your last (undone) action. This command replays back history and does not repeat the command.",
});
Translation.addTranslation("Clear your history.", {
    ru: "Очистить истоию.",
    en: "Clear your history.",
});
Translation.addTranslation("History cleared.", {
    ru: "История очищена.",
    en: "History cleared.",
});
Translation.addTranslation("There is nothing to undo.", {
    en: "There is nothing to undo.",
    ru: "Нечего отменить."
});
Translation.addTranslation("There is nothing to redo.", {
    en: "There is nothing to redo.",
    ru: "Нечего повтроить."
});
//wand
Translation.addTranslation("Gives you the \"EditWand\".", {
    ru: "Дает вам \"EditWand\".",
    en: "Gives you the \"EditWand\".",
});
//region
Translation.addTranslation("Work with the region.", {
    ru: "Работа с регионом.",
    en: "Work with the region.",
});
Translation.addTranslation("Commands for working with the region.", {
    ru: "Команды для работы с регионом.",
    en: "Commands for working with the region.",
});
Translation.addTranslation("Raise the selected region by the specified number of blocks.", {
    ru: "Поднять выделенный регион на указанное количество блоков.",
    en: "Raise the selected region by the specified number of blocks.",
});
Translation.addTranslation("Lower the selected region by the specified number of blocks.", {
    ru: "Опустить выделенный регион на указанное количество блоков.",
    en: "Lower the selected region by the specified number of blocks.",
});
Translation.addTranslation("The region is raised to %area%", {
    ru: "Регион поднят на %area%",
    en: "The region is raised to %area%",
});
Translation.addTranslation("The region is omitted in %area%", {
    ru: "Регион опущен на %area%",
    en: "The region is omitted in %area%",
});
//Copy/Paste
Translation.addTranslation("Copy the selected area.", {
    ru: "Скопировать выделенную область.",
    en: "Copy the selected area.",
});
Translation.addTranslation("Region copied.", {
    ru: "Регион скопрован.",
    en: "Region copied.",
});
Translation.addTranslation("Paste the copied area.", {
    ru: "Вставить скопированную область.",
    en: "Paste the copied area.",
});
Translation.addTranslation("Cut the selected area.", {
    ru: "Вырезать выделенную область.",
    en: "Cut the selected area.",
});
Translation.addTranslation("Region cut.", {
    ru: "Регион вырезан.",
    en: "Region cut.",
});
//toggleeditwand
Translation.addTranslation("Toggles the edit wand selection mode, allowing you to use the edit wand item normally.", {
    ru: "Переключает режим выбора палочки редактирования, позволяя использовать элемент палочки редактирования в обычном режиме.",
    en: "Toggles the edit wand selection mode, allowing you to use the edit wand item normally.",
});
Translation.addTranslation("Mode wand edit switched.", {
    ru: "Режим палочки редактирования переключен.",
    en: "Mode wand edit switched.",
});
//desel
Translation.addTranslation("Deselects the current selection.", {
    ru: "Отменяет текущее выделение.",
    en: "Deselects the current selection.",
});
Translation.addTranslation("The current selection is canceled.", {
    ru: "Текущее выделение отмененно.",
    en: "The current selection is canceled.",
});
Translation.addTranslation("Different versions of WorldEdit.\nWorldEdit features are disabled.\nYour version is %version%.\nServer version: %server%.", {
    en: "Different versions of WorldEdit.\nWorldEdit features are disabled.\nYour version is %version%.\nServer version: %server%.",
    ru: "Разные версии WorldEdit.\nФункции WorldEdit отключены.\nВаша версия: %version%.\nВерсия на сервере: %server%."
});
Translation.addTranslation("WorldEdit was not found on the server.", {
    ru: "WorldEdit не найден на сервере.",
    en: "WorldEdit was not found on the server."
});
Translation.addTranslation("WorldEdit %version% is enabled!", {
    en: "WorldEdit %version% is enabled!",
    ru: "WorldEdit %version% включен!"
});
Translation.addTranslation("Get size area.", {
    en: "Get size area.",
    ru: "Получить размер выделенной зоны."
});
var wand_id = 271;
