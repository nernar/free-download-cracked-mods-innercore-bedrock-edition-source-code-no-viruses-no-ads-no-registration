var Selector = /** @class */ (function () {
    function Selector() {
    }
    Selector.setPos1 = function (pos) {
        this.pos1 = pos;
    };
    Selector.setPos2 = function (pos) {
        this.pos2 = pos;
    };
    return Selector;
}());
/*
  ____        _ _     _        _______          _
 |  _ \      (_) |   | |      |__   __|        | |
 | |_) |_   _ _| | __| | ___ _ __| | ___   ___ | |___
 |  _ <| | | | | |/ _` |/ _ \ '__| |/ _ \ / _ \| / __|
 | |_) | |_| | | | (_| |  __/ |  | | (_) | (_) | \__ \
 |____/ \__,_|_|_|\__,_|\___|_|  |_|\___/ \___/|_|___/
                                        by MintoD
*/
var GlobalConstants;
(function (GlobalConstants) {
    GlobalConstants.MAX_HEIGHT = 0x100;
})(GlobalConstants || (GlobalConstants = {}));
/*
  ____        _ _     _        _______          _
 |  _ \      (_) |   | |      |__   __|        | |
 | |_) |_   _ _| | __| | ___ _ __| | ___   ___ | |___
 |  _ <| | | | | |/ _` |/ _ \ '__| |/ _ \ / _ \| / __|
 | |_) | |_| | | | (_| |  __/ |  | | (_) | (_) | \__ \
 |____/ \__,_|_|_|\__,_|\___|_|  |_|\___/ \___/|_|___/
                                        by MintoD
*/
var WAND;
(function (WAND) {
    WAND["stringID"] = "buildertools.wand";
    WAND["name"] = "Builder Wand";
})(WAND || (WAND = {}));
IDRegistry.genItemID(WAND.stringID);
Item.createItem(WAND.stringID, WAND.name, {
    name: "wand",
    data: 0,
}, {
    stack: 1,
});
var ID_COMMAND = {
    cmdName: "//id",
    callback: function () {
        Game.tipMessage("ID: " + Player.getCarriedItem().id + ":" + Player.getCarriedItem().data);
    },
};
Callback.addCallback("NativeCommand", function (cmd) {
    var command = cmd.split(" ");
    if (command[0] == ID_COMMAND.cmdName) {
        ID_COMMAND.callback();
    }
});
var REPLACE_COMMAND = {
    cmdName: "//replace",
    callback: function (findBlock, replaceBlock) {
        Replacement.replace(findBlock, replaceBlock);
    }
};
Callback.addCallback("NativeCommand", function (command) {
    var cmd = command.split(" ");
    if (cmd[0] !== REPLACE_COMMAND.cmdName) {
        return;
    }
    if (cmd[1] == "") {
        Game.message(Native.Color.DARK_RED + ("Usage: " + REPLACE_COMMAND.cmdName + " id:data id:data\n Example: //replace 1:0 2:0 It will find stone and replace it into grass"));
    }
    var findBlock = cmd[1].split(":");
    REPLACE_COMMAND.callback({ id: findBlock[0], data: findBlock[1] }, Player.getCarriedItem());
});
var HELP_COMMAND = {
    cmdName: "//help",
    callback: function () {
        Game.message("//help To see the list of commands\n//wand To get the builder wand\n//id To get the ID of item that you are carrying\n//fill To fill the selected area\n//replace To replace blocks in selected area");
    }
};
Callback.addCallback("NativeCommand", function (command) {
    var cmd = command.split(" ");
    if (cmd[0] !== HELP_COMMAND.cmdName) {
        return;
    }
    HELP_COMMAND.callback();
});
var WAND_COMMAND = {
    cmdName: "//wand",
    callback: function () {
        Player.addItemToInventory(Item.getNumericId(WAND.stringID), 1, 0);
    },
};
Callback.addCallback("NativeCommand", function (cmd) {
    var command = cmd.split(" ");
    if (command[0] == WAND_COMMAND.cmdName) {
        WAND_COMMAND.callback();
    }
});
var FILL_COMMAND = {
    cmdName: "//fill",
    callback: function (id) {
        Filler.flatFill(id);
    },
};
Callback.addCallback("NativeCommand", function (cmd) {
    var command = cmd.split(" ");
    if (command[0] !== FILL_COMMAND.cmdName) {
        return;
    }
    /*if(Selector.pos1.x == undefined || Selector.pos2.x == undefined) {
        Game.message(Native.Color.DARK_RED + "Please select the position first");
        return;
    }*/
    FILL_COMMAND.callback(Player.getCarriedItem());
});
var math = /** @class */ (function () {
    function math() {
    }
    math.getMinX = function (pos1, pos2) {
        return Math.min(pos1[0], pos2[0]);
    };
    math.getMaxX = function (pos1, pos2) {
        return Math.max(pos1[0], pos2[0]);
    };
    math.getMinZ = function (pos1, pos2) {
        return Math.min(pos1[2], pos2[2]);
    };
    math.getMaxZ = function (pos1, pos2) {
        return Math.max(pos1[2], pos2[2]);
    };
    math.getMinY = function (pos1, pos2) {
        return Math.max(Math.min(pos1[1], pos2[1], this.maxY), 0);
    };
    math.getMaxY = function (pos1, pos2) {
        return Math.min(Math.max(pos1[1], pos2[1], 0), this.maxY);
    };
    math.maxY = 0x100; // 256
    return math;
}());
// Select the first position
Callback.addCallback("ItemUse", function (coords) {
    var x = coords.x, y = coords.y, z = coords.z;
    if (Player.getCarriedItem().id == Item.getNumericId(WAND.stringID)) {
        Selector.setPos1({ x: x, y: y, z: z });
        Game.tipMessage(Native.Color.GREEN + ("Selected first position at " + x + ", " + y + ", " + z));
    }
});
// Select the second position
Callback.addCallback("DestroyBlock", function (coords, block) {
    var x = coords.x, y = coords.y, z = coords.z;
    var id = block.id, data = block.data;
    if (Player.getCarriedItem().id == Item.getNumericId(WAND.stringID)) {
        Selector.setPos2({ x: x, y: y, z: z });
        BlockSource.getCurrentWorldGenRegion().setBlock(x, y, z, id, data);
        Game.tipMessage(Native.Color.GREEN + ("Selected second position at " + x + ", " + y + ", " + z));
    }
});
var Filler = /** @class */ (function () {
    function Filler() {
    }
    Filler.flatFill = function (id) {
        var pos = [
            {
                x: Selector.pos1.x,
                y: Selector.pos1.y,
                z: Selector.pos1.z,
            }, {
                x: Selector.pos2.x,
                y: Selector.pos2.y,
                z: Selector.pos2.z,
            }
        ];
        var minX = Math.min(pos[0].x, pos[1].x);
        var maxX = Math.max(pos[0].x, pos[1].x);
        var minY = Math.min(pos[0].y, pos[1].y);
        var maxY = Math.max(pos[0].y, pos[1].y);
        var minZ = Math.min(pos[0].z, pos[1].z);
        var maxZ = Math.max(pos[0].z, pos[1].z);
        for (var x = minX; x <= maxX; x++) {
            for (var z = minZ; z <= maxZ; z++) {
                for (var y = minY; y <= maxY; y++) {
                    World.setBlock(x, y, z, id.id, id.data);
                }
            }
        }
    };
    return Filler;
}());
/*
  ____        _ _     _        _______          _
 |  _ \      (_) |   | |      |__   __|        | |
 | |_) |_   _ _| | __| | ___ _ __| | ___   ___ | |___
 |  _ <| | | | | |/ _` |/ _ \ '__| |/ _ \ / _ \| / __|
 | |_) | |_| | | | (_| |  __/ |  | | (_) | (_) | \__ \
 |____/ \__,_|_|_|\__,_|\___|_|  |_|\___/ \___/|_|___/
                                        by MintoD
*/
var Replacement = /** @class */ (function () {
    function Replacement() {
    }
    Replacement.replace = function (find, replace) {
        var pos = [
            {
                x: Selector.pos1.x,
                y: Selector.pos1.y,
                z: Selector.pos1.z,
            },
            {
                x: Selector.pos2.x,
                y: Selector.pos2.y,
                z: Selector.pos2.z,
            },
        ];
        var minX = Math.min(pos[0].x, pos[1].x);
        var maxX = Math.max(pos[0].x, pos[1].x);
        var minY = Math.min(pos[0].y, pos[1].y);
        var maxY = Math.max(pos[0].y, pos[1].y);
        var minZ = Math.min(pos[0].z, pos[1].z);
        var maxZ = Math.max(pos[0].z, pos[1].z);
        for (var x = minX; x <= maxX; x++) {
            for (var z = minZ; z <= maxZ; z++) {
                for (var y = minY; y <= maxY; y++) {
                    if (World.getBlock(x, y, z).id == find.id && World.getBlock(x, y, z).data == find.data) {
                        World.setBlock(x, y, z, replace.id, replace.data);
                    }
                }
            }
        }
    };
    return Replacement;
}());
