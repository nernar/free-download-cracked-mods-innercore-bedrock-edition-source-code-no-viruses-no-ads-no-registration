/*
BUILD INFO:
  dir: src
  target: main.js
  files: 6
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




// file: api/melter_blocks.js

let RegistryOre = {
  Ores: {},
  pick: {},
  /*
  params is blockId dropItem hasXP
  example
  RegistryOre.RegistryOreMelter(BlockID.randomOre,{
    id: BlockID.randomOre,
    out: ItemID.cooky,
    xp:{
      hasXp: true,
      minOut: 1,
      maxOut: 5
    }
  })
  */
  RegistryOreMelter: function(id, params) {
    this.Ores[id] = params
  },
  getAllOreMelter: function() {
    return this.Ores
  },
  getOreMeltee: function(id) {
    return this.Ores[id]
  },
  isOreMelter: function(id) {
    let oreMelter = this.getAllOreMelter()
    for (let block in oreMelter) {
      if (block == id) return true
    }
    return false
  },
  RegistryPickMelter: function(id){
    this.pick[id] = id
  },
  getAllPickMelter: function(){
    return this.pick
  },
  isPickMelter: function(id){
    let melter = this.getAllOreMelter();
    for(pick in melter){
      if(pick == id) return true
    }
    return false
  }
}

RegistryOre.RegistryOreMelter(14, {
  id: 14,
  out: 266,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 5
  }
})

RegistryOre.RegistryOreMelter(15, {
  id: 15,
  out: 265,
  xp: {
    hasXp: true,
    minOut: 1,
    maxOut: 2
  }
})





// file: api/mod_api.js

ModAPI.registerAPI("MelterPick", {
  RegistryOre: RegistryOre,

  requireGlobal: function(command) {
    return eval(command);
  }
});

Logger.Log("MelterPick Shared", "API");




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

ToolType.CoalPickaxeType = {
  enchantType: Native.EnchantType.pickaxe,
  damage: 1,
  blockTypes: ["stone"],
  useItem:function(coords,item,block,player){
  if (RegistryOre.isOreMelter(block.id) && ToolAPI.getToolLevel(item.id) >= ToolAPI.getBlockDestroyLevel(block.id)) {
    let enchant = ToolAPI.getEnchantExtraData();
    let ore = RegistryOre.getOreMeltee(block.id)
  
    ToolAPI.dropOreExp(coords, ore.xp.minOut, ore.xp.maxOut, enchant.experience); 
    World.drop(
      coords.x + Math.random(),
      coords.y + Math.random(),
      coords.z + Math.random(),
      ore.out,
      1 + Math.floor(Math.random() * (enchant.fortune * 1.5)),
      0
    )
    
    for (var i = 0; i < 8; i++) {
      Particles.addParticle(
        10,
        coords.x + Math.random(),
        coords.y + Math.random(),
        coords.z + Math.random(),
        0,
        0,
        0
      )
      Particles.addParticle(
        8,
        coords.x + Math.random(),
        coords.y + Math.random(),
        coords.z + Math.random(),
        0,
        0,
        0
      )
    }
    
    ToolLib.breakCarriedTool(5, player)
    World.setBlock(coords.x, coords.y, coords.z, 0, 0);
    World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "step.stone", 1, 0.8);
  
  }
  }
  
}

ToolType.BlazePickaxeType = {
  enchantType: Native.EnchantType.pickaxe,
  damage: 3,
  blockTypes: ["stone"],
  useItem: function(coords, item, block, player) {
    if (RegistryOre.isOreMelter(block.id) && ToolAPI.getToolLevel(item.id) >= ToolAPI.getBlockDestroyLevel(block.id)) {
      let enchant = ToolAPI.getEnchantExtraData();
      let ore = RegistryOre.getOreMeltee(block.id)

      ToolAPI.dropOreExp(coords, ore.xp.minOut, ore.xp.maxOut, enchant.experience);
      World.drop(
        coords.x + Math.random(),
        coords.y + Math.random(),
        coords.z + Math.random(),
        ore.out,
        random(1,2) + Math.floor(Math.random() * (enchant.fortune * 1.5)),
        0
      )


      for (var i = 0; i < 8; i++) {
        Particles.addParticle(
          10,
          coords.x + Math.random(),
          coords.y + Math.random(),
          coords.z + Math.random(),
          0,
          0,
          0
        )
        Particles.addParticle(
          8,
          coords.x + Math.random(),
          coords.y + Math.random(),
          coords.z + Math.random(),
          0,
          0,
          0
        )
      }

      ToolLib.breakCarriedTool(3, player)
      World.setBlock(coords.x, coords.y, coords.z, 0, 0);
      World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "step.stone", 1, 0.8);

    }
  }

}

ToolType.ObsidianPickaxeType = {
  enchantType: Native.EnchantType.pickaxe,
  damage: 3,
  blockTypes: ["stone"],
  useItem: function(coords, item, block, player) {
    if (RegistryOre.isOreMelter(block.id) && ToolAPI.getToolLevel(item.id) >= ToolAPI.getBlockDestroyLevel(block.id)) {
      let enchant = ToolAPI.getEnchantExtraData();
      let ore = RegistryOre.getOreMeltee(block.id)

      ToolAPI.dropOreExp(coords, ore.xp.minOut, ore.xp.maxOut, enchant.experience);
      World.drop(
        coords.x + Math.random(),
        coords.y + Math.random(),
        coords.z + Math.random(),
        ore.out,
        random(2,3) + Math.floor(Math.random() * (enchant.fortune * 1.5)),
        0
      )


      for (var i = 0; i < 8; i++) {
        Particles.addParticle(
          10,
          coords.x + Math.random(),
          coords.y + Math.random(),
          coords.z + Math.random(),
          0,
          0,
          0
        )
        Particles.addParticle(
          8,
          coords.x + Math.random(),
          coords.y + Math.random(),
          coords.z + Math.random(),
          0,
          0,
          0
        )
      }

      ToolLib.breakCarriedTool(1, player)
      World.setBlock(coords.x, coords.y, coords.z, 0, 0);
      World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "step.stone", 1, 0.8);

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
  ToolType.CoalPickaxeType);

Item.setGlint(ItemID.CoalPickaxeMelter, true)
RegistryOre.RegistryPickMelter(ItemID.CoalPickaxeMelter)

setinfo.setNameMod(ItemID.CoalPickaxeMelter)
setinfo.addComment(ItemID.CoalPickaxeMelter,"Click Mineral Block for oven")
setinfo.setDropIngot(ItemID.CoalPickaxeMelter,1,0,0)
setinfo.setConsumes(ItemID.CoalPickaxeMelter,5)
Recipes.addShaped({
  id: ItemID.CoalPickaxeMelter,
  count: 1,
  data: 0
}, [
	"sss",
	" g ",
	" g "
], ['s', 173, 0, 'g', 280, 0]);

IDRegistry.genItemID("BlazePickaxeMelter");
Item.createItem("BlazePickaxeMelter", "Blaze Pickaxe Melter", {
  name: "blaze_pickaxe_melter"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.BlazePickaxeMelter, "blaze",
  ToolType.BlazePickaxeType);

Item.setGlint(ItemID.BlazePickaxeMelter, true)
RegistryOre.RegistryPickMelter(ItemID.BlazePickaxeMelter)

setinfo.setNameMod(ItemID.BlazePickaxeMelter)
setinfo.addComment(ItemID.BlazePickaxeMelter, "Click Mineral Block for oven")
setinfo.setDropIngot(ItemID.BlazePickaxeMelter,1,0,1)
setinfo.setConsumes(ItemID.BlazePickaxeMelter,3)
Recipes.addShaped({
  id: ItemID.BlazePickaxeMelter,
  count: 1,
  data: 0
}, [
	"sss",
	" g ",
	" g "
], ['s', 377, 0, 'g', 406, 0]);

IDRegistry.genItemID("ObsidianPickaxeMelter");
Item.createItem("ObsidianPickaxeMelter", "Obsidian Pickaxe Melter", {
  name: "obsidian_pickaxe_melter"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.ObsidianPickaxeMelter, "obsidian",
  ToolType.ObsidianPickaxeType);

Item.setGlint(ItemID.ObsidianPickaxeMelter, true)
RegistryOre.RegistryPickMelter(ItemID.ObsidianPickaxeMelter)

setinfo.setNameMod(ItemID.ObsidianPickaxeMelter)
setinfo.addComment(ItemID.ObsidianPickaxeMelter, "Click Mineral Block for oven")
setinfo.setDropIngot(ItemID.ObsidianPickaxeMelter,2,0,1)
setinfo.setConsumes(ItemID.ObsidianPickaxeMelter,1)
Recipes.addShaped({
  id: ItemID.ObsidianPickaxeMelter,
  count: 1,
  data: 0
}, [
	"sss",
	" g ",
	" g "
], ['s', 49, 0, 'g', 369, 0]);




// file: sopport/ic.js

ModAPI.addAPICallback("ICore",
    function(api) {
      RegistryOre.RegistryOreMelter(BlockID.oreCopper,{
        id: BlockID.oreCopper,
          out: ItemID.ingotCopper,
          xp: {
            hasXp: true,
            minOut: 1,
            maxOut: 2
          }
      })
      RegistryOre.RegistryOreMelter(BlockID.oreTin, {
        id: BlockID.oreTin,
        out: ItemID.ingotTin,
        xp: {
          hasXp: true,
          minOut: 1,
          maxOut: 3
        }
      })
      RegistryOre.RegistryOreMelter(BlockID.oreLead, {
        id: BlockID.oreLead,
        out: ItemID.ingotLead,
        xp: {
          hasXp: true,
          minOut: 2,
          maxOut: 3
        }
      })
    })




