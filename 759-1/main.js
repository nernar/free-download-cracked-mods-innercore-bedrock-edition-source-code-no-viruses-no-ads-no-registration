/*
BUILD INFO:
  dir: res
  target: main.js
  files: 1
*/



// file: tp.js

let POINTS = {}

function check(cmd, array) {
  for (let i in array) {
    if (array[cmd] != null) {
      return true
      break;
    }
  }
  return false
}

function addPoint(array, name, coords) {
  array[name] = {}
  array[name]['pos'] = coords
  array[name]['name'] = name
}

function removePoint(array, name) {
  let seq = {}
  for (let i in array) {
    if (array[i].name == name) {
      //none
    } else {
      seq[array[i].name] = array[i]
    }
  }
  return seq
}

Callback.addCallback("NativeCommand", function(cmd) {
  let comands = {
    helpTp: "/helpTp",
    setTp: "/setTp",
    removeTp: "/removeTp",
    resetTp: "/resetTp",
    Tps: "/Tps",
    Tp: "/Tp"
  }
  if(cmd == comands["helpTp"]){
    let string = ""
    for(let i in comands){
      switch(comands[i]){
        case "/setTp" :
          string = string + comands[i] + "  " + "<[name]>" + "\n§9";
          break;
        case "/removeTp":
        string = string + comands[i] + "  " + "<[name]>" + "\n§9";
        break;
        case "/resetTp":
        string = string + comands[i] + "  " + "\n§9";
        break;
        case "/Tps":
        string = string + comands[i] + "  " + "\n§9";
        break;
        case "/Tp":
        string = string + comands[i] + "  " + "<[name]>" + "\n§9";
        break;
      }
    }
    Game.message(string)
  }
  if(cmd.indexOf(comands["setTp"]) != -1){
    let name = cmd.replace(comands["setTp"],"")
    let pos = Player.getPosition();
    
    if (check(name, POINTS)) {
      Game.message(Translation.translate("¡already existed!"))
    } else {
      addPoint(POINTS, name, pos)
      Game.message(Translation.translate("Add Point Tp") + ": " + name)
    }
  }
  if(cmd.indexOf(comands["removeTp"]) != -1){
    let name = cmd.replace(comands["removeTp"], "");
    if (check(name, POINTS)) {
      POINTS = removePoint(POINTS, name)
      Game.message(Translation.translate("finished elemination"))
    } else {
      Game.message(Translation.translate("¡already not existed!"))
    }
  }
  if(cmd == comands["resetTp"]){
    POINTS = {}
    Game.message(Translation.translate("finished elemination all Tp points"))
  }
  if(cmd == comands["Tps"]){
    let string = "";
    for(var i in POINTS){
      string = string + "name: " + POINTS[i].name + "\n§9" + "coords :" + " " + Math.round(POINTS[i].pos.x) + ", " + Math.round(POINTS[i].pos.y) + ", " + Math.round(POINTS[i].pos.z) + "\n§9"
    }
    Game.message(string)
  }
  if (cmd.indexOf(comands["Tp"]) != -1) {
    let name = cmd.replace(comands["Tp"], "")
    if(check(name,POINTS)){
      let coords = POINTS[name].pos;
      Player.setPosition(coords.x, coords.y, coords.z);
      Game.message(Translation.translate("you have teleported to ") + name)
    }else{
      Game.message(Translation.translate("¡already not existed!"))
    }
  }
});

Saver.addSavesScope("POINTS-tp",
  function read(scope) {
    POINTS = scope
  },
  function save() {
    return POINTS;
  });




