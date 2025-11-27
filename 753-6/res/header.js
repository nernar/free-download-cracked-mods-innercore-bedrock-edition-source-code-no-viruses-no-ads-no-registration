/*

──────────╔═╗──╔╗──╔╗──────╔╗
──────────║╔╝──║║─╔╝╚╗─────║║
╔╗╔╦══╦══╦╝╚╦╗╔╣║─╚╗╔╬══╦══╣║╔══╗
║║║║══╣║═╬╗╔╣║║║║──║║║╔╗║╔╗║║║══╣
║╚╝╠══║║═╣║║║╚╝║╚╗─║╚╣╚╝║╚╝║╚╬══║
╚══╩══╩══╝╚╝╚══╩═╝─╚═╩══╩══╩═╩══╝
by cube² vk pankiwi
*/


IMPORT("ToolLib");
//vars
const MOD_NAME = "useful tools"
const categorys = {
  block: 1,
  tools: 3,
  items: 4,
  plants: 2
}
let _inventory_open = false
let _clients = [];
let EntityGetYaw = ModAPI.requireGlobal("Entity.getYaw");
let EntityGetPitch = ModAPI.requireGlobal("Entity.getPitch");

// API
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getBlockRotation(player,hasVertical){
  let pitch = EntityGetPitch(player);
  if (hasVertical) {
    if (pitch < -45) return 0;
    if (pitch > 45) return 1;
  }
  let rotation = Math.floor((EntityGetYaw(player) - 45) % 360 / 90);
  if (rotation < 0) rotation += 4;
  rotation = [5, 3, 4, 2][rotation];
  return rotation;
}

//fuctions
Callback.addCallback('ServerPlayerLoaded', function(player__) {
  _players = Network.getConnectedPlayers();
});

Callback.addCallback('NativeGuiChanged', function(screenName) {
  if (screenName == 'inventory_screen' || screenName == 'inventory_screen_pocket')
    _inventory_open = true;
  else
    _inventory_open = false;
});

const setinfo = {
  StructuresTypes: {
    mine: "mine"
  },
  setNameMod: function(id) {
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" + MOD_NAME;
        return name;
      })
    });
  },
  addComment: function(id, info) {
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" + Translation.translate(info);
        return name;
      })
    });
  },
  setStructureInfo: function(id,type,data){
    if(type == this.StructuresTypes[type]){
      Callback.addCallback('PostLoaded', function() {
        var _func = Item.nameOverrideFunctions[id];
        Item.registerNameOverrideFunction(id, function(item, name) {
          if (_func) name = _func(item, name);
          if (_inventory_open) name += "\n§9" + Translation.translate("mine height:") + data.height + "\n§9" + Translation.translate("Type Structure:")  + type + "\n§9" +  Translation.translate("Level Structure:")  + data.level
          return name;
        })
      });
    }
  },
  setCategory: function(id, category) {
    Item.setCategory(id, categorys[category])
  }
}