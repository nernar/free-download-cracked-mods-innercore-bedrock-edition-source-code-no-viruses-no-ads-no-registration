IMPORT("GUILib");
IMPORT("ToolType");
IMPORT("BackpackAPI");
IMPORT("MobLib");
IMPORT("ShootLib", "ShootLib");
IMPORT("SoundAPI");
IMPORT("AdvancedEvents");
const GUI_SCALE = 3.2;
var BLOCK_TYPE_STONE = Block.createSpecialType({base: 1, opaque: true});
var BLOCK_TYPE_LIGHT = Block.createSpecialType({base: 5, opaque: true, lightlevel: 15});
var BLOCK_TYPE_WOOD = Block.createSpecialType({base: 5, opaque: true});
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
Callback.addCallback("LevelLoaded", function () {
    Game.message("\xa7dCreated by: \xa75Miron Popov. \xa79Helpers in code: \xa71MyzicCotic666 and 80LK");
});
var debugMode = __config__.getBool("debug_mode");
Callback.addCallback("DestroyBlock", function (c, block, player) {
    if (debugMode) {
        Debug.m(ToolAPI.getBlockMaterial(block.id));
    }
});
var ShotType = ShootLib.ShotType;
var ButtonType = ShootLib.ButtonType;
ShootLib.init({image_button: true, left_handed: true, fire: {text: {content: "FIRE", size: 18}, bitmap: {name: "ui", coords: {x: 544, y: 0, width: 544, height: 544}, size: {width: 60, height: 60}}}, aim: {text: {content: "AIM", size: 18}, bitmap: {name: "ui", coords: {x: 0, y: 0, width: 544, height: 544}, size: {width: 69, height: 60}}}, crosshair: {bitmap: {name: "ui", coords: {x: 1088, y: 0, width: 64, height: 64}, size: {width: 60, height: 60}}}, reload: {text: {content: "8/8", size: 16}}});

