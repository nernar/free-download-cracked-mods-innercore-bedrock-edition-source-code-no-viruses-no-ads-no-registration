/*
╭━╮╭━╮╱╱╭╮╭╮╱╱╱╱╱╱╭━━━╮╱╱╱╭╮
┃┃╰╯┃┃╱╱┃┣╯╰╮╱╱╱╱╱┃╭━╮┃╱╱╱┃┃
┃╭╮╭╮┣━━┫┣╮╭╋━━┳━╮┃╰━╯┣┳━━┫┃╭┳━━┳╮╭┳━━╮
┃┃┃┃┃┃┃━┫┃┃┃┃┃━┫╭╯┃╭━━╋┫╭━┫╰╯┫╭╮┣╋╋┫┃━┫
┃┃┃┃┃┃┃━┫╰┫╰┫┃━┫┃╱┃┃╱╱┃┃╰━┫╭╮┫╭╮┣╋╋┫┃━┫
╰╯╰╯╰┻━━┻━┻━┻━━┻╯╱╰╯╱╱╰┻━━┻╯╰┻╯╰┻╯╰┻━━╯
by Cubw vk pankiwi vk group cube Project's
*/

IMPORT("ToolLib");
//vars
const MOD_NAME = "Melter Pickaxe's"
let _inventory_open = false
// API
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fuctions
Callback.addCallback('NativeGuiChanged', function(screenName) {
  if (screenName == 'inventory_screen' || screenName == 'inventory_screen_pocket')
    _inventory_open = true;
  else
    _inventory_open = false;
});

const setinfo = {
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
  setDropIngot: function(id,number,MinExtra,MaxExtra){
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" +Native.Color.GREEN +Translation.translate("Drop Ingot Amount:") + ' ' + number + "\n§9" + Native.Color.AQUA + Translation.translate("Extra Drop Random:")  + ' ' +MinExtra + "-" + MaxExtra;
        return name;
      })
    });
  },
  setConsumes: function(id, number) {
    Callback.addCallback('PostLoaded', function() {
      var _func = Item.nameOverrideFunctions[id];
      Item.registerNameOverrideFunction(id, function(item, name) {
        if (_func) name = _func(item, name);
        if (_inventory_open) name += "\n§9" + Native.Color.RED + Translation.translate("Consumes For Melting:") + ' ' + number + Translation.translate("uses")
        return name;
      })
    });
  }
}