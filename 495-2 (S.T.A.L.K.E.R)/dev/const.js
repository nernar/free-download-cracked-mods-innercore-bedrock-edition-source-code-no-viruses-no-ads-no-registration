const __dev = __config__.access("dev");
const gui_scale = __config__.access("gui_scale");
IMPORT("SoundAPI");
IMPORT("StalkerAPI", "StalkerDev");
IMPORT("AdvancedEvents");
IMPORT("GUILib");
const menuAmbientSound = new Sound("ambient/menu.ogg", 0.1);
menuAmbientSound.setInPlayer();
menuAmbientSound.setLooping(true);
const emptyF = function () {
    return false;
};
var PLAYER_ENT;
const _getTime = World.getWorldTime;
World.getWorldTime = function () {
    return parseInt(_getTime());
};
const _dropItem = ModAPI.requireGlobal("Level.dropItem");
World.dropItem = function (x, y, z, id, count, data, extra) {
    if (!id) {
        return false;
    }
    if (!count) {
        count = 1;
    }
    if (!data) {
        data = 0;
    }
    if (!extra) {
        extra = null;
    }
    return _dropItem(x, y, z, 0, id, count, data, extra);
};
const _log = Logger.Log;
Logger.Log = function (a, b, c) {
    if (!b) {
        b = "MESSAGE";
    }
    _log(a, b, c);
};
Logger.Warning = function (a, c) {
    alert("[WARNING]:" + a);
    Logger.Log(a, "WARNING", c);
};
var settings_path = "/storage/emulated/0/games/com.mojang/minecraftpe/options.txt";
var prevScreen = false;
Callback.addCallback("NativeGuiChanged", function (screen) {
    var currentScreen = screen.startsWith("screen_world_controls_and_settings") || screen.startsWith("screen_controls_and_settings");
    if (prevScreen && !currentScreen) {
        DEFAULT_FOV = parseInt(FileTools.ReadKeyValueFile(settings_path)["gfx_field_of_view"]);
    }
    prevScreen = currentScreen;
});

