IMPORT("SoundAPI");
IMPORT("DungeonCraftAPI");
IMPORT("ToolType");
IMPORT("ToolLib");
var boss1 = new Sound();
boss1.setSource("boss0.ogg");
var angel = new Sound();
angel.setSource("\u0445\u0440\u0430\u043d\u0438\u0442\u0435\u043b\u044c\u0420\u0430\u044f.ogg");
var raiFinal = new Sound();
raiFinal.setSource("\u0424\u0438\u043d\u0430\u043b\u0420\u0430\u044f.ogg");
var sound = new Sound();
sound.setSource("sound.ogg");
var mana = 20000;
Callback.addCallback("LevelLoaded", function () {
    Game.message("\u043f\u043e\u0442\u043f\u0438\u0448\u0438\u0441\u044c \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0443 \u0432\u043a https://vk.com/club186544580");
});
Callback.addCallback("tick", function () {
    if (__config__.access("manaDisplay") == true) {
        Game.tipMessage("mana: " + mana + " / " + maxMana + ";");
    }
});
Saver.addSavesScope("BackpacksScope", function read(scope) {
    mana = scope.manaSaves || 20000;
}, function save() {
    return {manaSaves: mana};
});

