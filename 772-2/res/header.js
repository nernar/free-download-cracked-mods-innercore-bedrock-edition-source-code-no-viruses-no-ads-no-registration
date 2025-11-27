IMPORT("NatureLib");
IMPORT("TileRender");

let debug = __config__.getBool("debugMode")
let debugTree = __config__.getBool("debugModeTree")
// API
function random(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

Block.createSpecialType({
  base: 59,
  destroytime: 0.5,
  explosionres: 0,
  opaque: false,
  lightopacity: 0,
  rendertype: 6,
  destroytime: 0,
  sound: "grass"
}, "gander");
