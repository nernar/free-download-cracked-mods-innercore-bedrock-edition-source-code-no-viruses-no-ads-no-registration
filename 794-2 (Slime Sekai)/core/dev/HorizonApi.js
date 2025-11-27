var isHorizon = getCoreAPILevel() > 8;
Item.setRequiresIconOverride = ModAPI.requireGlobal("Item.setRequiresIconOverride");
if (!isHorizon) {
    Game.getGameMode = ModAPI.requireGlobal("Level.getGameMode");
}
var EntityDataRegistry = ModAPI.requireGlobal("EntityDataRegistry");
function makeReplaceable(item, id, replacement) {
    if (item == undefined || typeof item != "object" || typeof item.id != "number") {
        return;
    }
    if (item.id == id) {
        Player.setCarriedItem(replacement, item.count, item.data, item.extra);
    } else {
        if (item.id == replacement) {
            Player.setCarriedItem(id, item.count, item.data, item.extra);
        }
    }
}
function addNamedCallback(action, current) {
    Callback.addCallback(current, function () {
        var arguments = Array.prototype.slice.call(arguments);
        (arguments.unshift(current), action.apply(Callback, arguments));
    });
}
function makeSimplifiedCallback(action) {
    var arguments = Array.prototype.slice.call(arguments);
    if (arguments.length == 0) {
        return Logger.Log("can't create makeSimplifiedCallback without action & names", "ERROR");
    }
    if (arguments.length == 1) {
        return Logger.Log("no names specified for makeSimplifiedCallback", "ERROR");
    }
    arguments.shift();
    arguments.forEach(function (current) {
        addNamedCallback(action, current);
    });
}

