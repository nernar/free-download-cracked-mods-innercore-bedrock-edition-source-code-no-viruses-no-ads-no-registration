/*
BUILD INFO:
  dir: src
  target: main.js
  files: 3
*/



// file: header.js

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
const categorys = {
  block: 1,
  tools: 3,
  items: 4,
  plants: 2
}
let _inventory_open = false
let _clients = [];


// API
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  },
  setCategory: function(id, category) {
    Item.setCategory(id, categorys[category])
  }
}




// file: traslation.js

//guide
Translation.addTranslation("Drop Ingot Amount:", {es: "Cantidad de Salida de lingotes:"});
Translation.addTranslation("Extra Drop Random:", {es: "Lingote Extra Aletorio:"});
Translation.addTranslation("Click Mineral Block for oven", {es: "Haga clic en un mineral para fundirlo"});
Translation.addTranslation("Consumes For Melting:", {es: "Consumo para Fundir"});
Translation.addTranslation("uses", {es: "Usos"});

//tools
Translation.addTranslation("Coal Pickaxe Melter", {es: "Pico Fundidor de Carbon"});
Translation.addTranslation("Blaze Pickaxe Melter", {es: "Pico Fundidor de Blaze"});
Translation.addTranslation("Obsidian Pickaxe Melter", {es: "Pico Fundidor de Obsidiana"});




// file: items/melterPickaxe.js


ToolAPI.addToolMaterial("coal", {
  durability: 200,
  level: 2,
  efficiency: 4,
  damage: 1,
  enchantability: 10,
  repairMaterial: 263
});

ToolAPI.addToolMaterial("blaze", {
  durability: 300,
  level: 3,
  efficiency: 10,
  damage: 1,
  enchantability: 15,
  repairMaterial: 269
});

ToolAPI.addToolMaterial("obsidian", {
  durability: 500,
  level: 4,
  efficiency: 20,
  damage: 1,
  enchantability: 15,
  repairMaterial: 49
});

ToolType.MelterPickaxeType = {
  enchantType: Native.EnchantType.pickaxe,
  damage: 1,
  blockTypes: ["stone"],
  useItem: function(coords, item, block, player) {
    let drop = Recipes.getFurnaceRecipeResult(block.id, block.data, "pick");
    if (drop && ToolAPI.getToolLevel(item.id) >= ToolAPI.getBlockDestroyLevel(block.id)) {
      let pickDates = {min:0,max:0,drop:0,consumes:0}
      switch(item.id){
        case ItemID.CoalPickaxeMelter :
          pickDates.drop = 1
          pickDates.min = 0
          pickDates.max = 0
          pickDates.consumes = 5
          break;
         case ItemID.BlazePickaxeMelter : 
           pickDates.drop = 1
           pickDates.min = 0
           pickDates.max = 2
           pickDates.consumes = 3
           break;
         case ItemID.ObsidianPickaxeMelter :
           pickDates.drop = 2
           pickDates.min = 0
           pickDates.max = 4
           pickDates.consumes = 1
           break;
      }
      let enchant = ToolAPI.getEnchantExtraData();
      ToolAPI.dropOreExp(coords, 1, 4, enchant.experience);
      World.drop(
        coords.x + Math.random(),
        coords.y + Math.random(),
        coords.z + Math.random(),
        drop.id,
        pickDates.drop + Math.floor(pickDates.min + Math.random() * pickDates.max) + Math.floor(Math.random() * (enchant.fortune * 1.5)),
        drop.data
      )

     
       for (let i = 0; i < 6; i++) {
         Particles.addParticle(8, coords.x + Math.random(), coords.y + Math.random(), coords.z + Math.random(), 0, 0, 0);
       }
     
      ToolLib.breakCarriedTool(pickDates.consumes, player)
      World.setBlock(coords.x, coords.y, coords.z, 0, 0);
      

    }
  }

}


IDRegistry.genItemID("CoalPickaxeMelter");
Item.createItem("CoalPickaxeMelter", "Coal Pickaxe Melter", {
  name: "coal_pickaxe_melter"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.CoalPickaxeMelter, "coal",
  ToolType.MelterPickaxeType);

Item.setGlint(ItemID.CoalPickaxeMelter, true)


setinfo.setNameMod(ItemID.CoalPickaxeMelter)

setinfo.addComment(ItemID.CoalPickaxeMelter, "Click Mineral Block for oven")

setinfo.setDropIngot(ItemID.CoalPickaxeMelter, 1, 0, 0)

setinfo.setConsumes(ItemID.CoalPickaxeMelter, 5)

setinfo.setCategory(ItemID.CoalPickaxeMelter,"tools")

Recipes.addShaped({
  id: ItemID.CoalPickaxeMelter,
  count: 1,
  data: 0
}, [
	"sss",
	" s ",
	" g "
], ['s', 173, 0, 'g', 280, 0]);

IDRegistry.genItemID("BlazePickaxeMelter");
Item.createItem("BlazePickaxeMelter", "Blaze Pickaxe Melter", {
  name: "blaze_pickaxe_melter"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.BlazePickaxeMelter, "blaze",
  ToolType.MelterPickaxeType);

Item.setGlint(ItemID.BlazePickaxeMelter, true)


setinfo.setNameMod(ItemID.BlazePickaxeMelter)

setinfo.addComment(ItemID.BlazePickaxeMelter, "Click Mineral Block for oven")

setinfo.setDropIngot(ItemID.BlazePickaxeMelter, 1, 0, 2)

setinfo.setConsumes(ItemID.BlazePickaxeMelter, 3)

setinfo.setCategory(ItemID.BlazePickaxeMelter,"tools")

Recipes.addShaped({
  id: ItemID.BlazePickaxeMelter,
  count: 1,
  data: 0
}, [
	"sss",
	" s ",
	" g "
], ['s', 265, 0, 'g', 280, 0]);

IDRegistry.genItemID("ObsidianPickaxeMelter");
Item.createItem("ObsidianPickaxeMelter", "Obsidian Pickaxe Melter", {
  name: "obsidian_pickaxe_melter"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.ObsidianPickaxeMelter, "obsidian",
  ToolType.MelterPickaxeType);

Item.setGlint(ItemID.ObsidianPickaxeMelter, true)


setinfo.setNameMod(ItemID.ObsidianPickaxeMelter)

setinfo.addComment(ItemID.ObsidianPickaxeMelter, "Click Mineral Block for oven")

setinfo.setDropIngot(ItemID.ObsidianPickaxeMelter, 2, 0, 4)

setinfo.setConsumes(ItemID.ObsidianPickaxeMelter, 1)

setinfo.setCategory(ItemID.ObsidianPickaxeMelter, "tools")

Recipes.addShaped({
  id: ItemID.ObsidianPickaxeMelter,
  count: 1,
  data: 0
}, [
	"sss",
	" s ",
	" g "
], ['s', 49, 0, 'g', 280, 0]);




