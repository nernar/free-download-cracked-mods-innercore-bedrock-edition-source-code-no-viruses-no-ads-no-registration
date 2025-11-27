var WorldEditAPI = {addCommand: function (name, desc, event, args, selectedArea) {
    if (typeof (name) == "object") {
        desc = name.description || name.descript || name.desc;
        args = name.arguments || name.args || "";
        event = name.event;
        selectedArea = name.selectedArea || true;
        name = name.name;
    }
    if (typeof (name) != "string") {
        throw "Name command was be string";
    }
    if (typeof (desc) != "string") {
        return;
    }
    if (typeof (args) != "string") {
        return;
    }
    if (typeof (event) != "function") {
        return;
    }
    if (typeof (selectedArea) != "boolean") {
        return;
    }
    if (selectedArea) {
        _e = event;
        event = function (args) {
            if (!WorldEdit.getValidPosition()) {
                return Game.message(Translation.translate("Set both positions."));
            }
            _e(args);
        };
    }
    if (Commands[name]) {
        return;
    }
    Commands[name] = {name: name, description: desc, args: args, func: event};
    return;
}, getCommand: function (name) {
    return Commands[name] || false;
}, getPosition: function () {
    return {pos1: WorldEdit.pos1, pos2: WorldEdit.pos2};
}, getValidPosition: function () {
    return WorldEdit.getValifPosition();
}, getSizeArea: function () {
    return WorldEdit.getSizeArea();
}, selectPosition: function (p1, p2) {
    WorldEdit.selectPosition(p1, p2);
}};
ModAPI.registerAPI("WorldEdit", WorldEditAPI);

