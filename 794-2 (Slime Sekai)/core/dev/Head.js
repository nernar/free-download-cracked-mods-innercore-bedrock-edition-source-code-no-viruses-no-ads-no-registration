IMPORT("ToolLib");
IMPORT("SoundAPI");
IMPORT("ScalesRPG");
IMPORT("add-onCreter");
IMPORT("VanillaSlots");
var container = new UI.Container();
var click = new Sound("click.ogg");
var le_hoi_thu_hoach = new Sound("le_hoi_thu_hoach.ogg");
var travel = new Sound("travel.ogg");
var _inventory_open = false;
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName == "inventory_screen" || screenName == "inventory_screen_pocket") {
        _inventory_open = true;
    } else {
        _inventory_open = false;
    }
});
const mod = FileTools.ReadJSON(__dir__ + "mod.info");
const mod_tip = function (id) {
    try {
        if (BlockID[id]) {
            id = Block.convertBlockToItemId(id);
        }
        Callback.addCallback("PostLoaded", function () {
            var _func = Item.nameOverrideFunctions[id];
            Item.registerNameOverrideFunction(id, function (item, name) {
                if (_func) {
                    name = _func(item, name);
                }
                if (_inventory_open) {
                    name += "\n\xa79" + mod.name;
                }
                return name;
            });
        });
    }
    catch (err) {
        alert(id);
    }
};

