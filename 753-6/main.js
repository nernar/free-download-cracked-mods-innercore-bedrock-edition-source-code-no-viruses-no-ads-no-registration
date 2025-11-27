/*
BUILD INFO:
  dir: res
  target: main.js
  files: 11
*/



// file: header.js

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




// file: api/tools.js

var Tool = {
  crookDrop: [296, 295, 287, 288, 280],
  CrookrareDrop: [361, 362, 392, 260],
  addDropCrook(idItem, type) {
    if (type == "n" || type == "normal" || type == 1) {
      this.crookDrop.push(idItem)
    }
    if (type == "r" || type == "rare" || type == 2) {
      this.CrookrareDrop.push(idItem)
    }
  },
  getDropsCrook(type) {
    if (type == "n" || type == "normal" || type == 1) {
      return this.crookDrop
    }
    if (type == "r" || type == "rare" || type == 2) {
      return this.CrookrareDrop
    }
  }
}



ToolType.crook = {
  isWeapon: false,
  damage: 2,
  blockTypes: ["fibre", "plant"],
  calcDestroyTime: function(item, coords, block, params, destroyTime, enchant) {
    if (block.id == 18) return 0.08;
    if (block.id == 161) return 0.05;
    let material = ToolAPI.getBlockMaterialName(block.id);
    if (material == "fibre" || material == "plant") {
      return 0;
    }
    return destroyTime;
  },
  useItem: function(coords, item, block, player) {
    if (ToolAPI.getBlockMaterialName(block.id) == "plant") {
      let n = Tool.getDropsCrook("n")
      let r = Tool.getDropsCrook("r")
      let region = BlockSource.getDefaultForActor(player);
      World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "step.grass", 1, 0.8);
      if (Math.random() * 100 >= 80) {
        region.spawnDroppedItem(coords.x, coords.y, coords.z, r[Math.floor(Math.random() * r.length)], 1, 0);
      } else if (Math.random() * 100 >= 60) {
        region.spawnDroppedItem(coords.x, coords.y, coords.z, n[Math.floor(Math.random() * n.length)], 1, 0);
      } else if (Math.random() * 100 > 95) {
        World.destroyBlock(coords.x, coords.y, coords.z, false)
        World.playSound(coords.x + .5, coords.y + 1, coords.z + .5, "step.grass", 1, 0.8);
      }
      ToolLib.breakCarriedTool(1, player);
    }

  }
}

ToolType.hammer = {
  enchantType: Native.EnchantType.pickaxe,
  damage: 3,
  blockTypes: ["stone", "dirt"],
  onDestroy: function(item, coords, block, player) {
    let radius = 1
    let x = y = z = radius

    switch (coords.side) {
      case 5:
        x = 0;
        break
      case 4:
        x = 0;
        break
      case 3:
        z = 0;
        break
      case 2:
        z = 0;
        break
      case 1:
        y = 0;
        break
      case 0:
        y = 0;
        break
    }
    for (var cx = coords.x - x; cx <= coords.x + x; cx++) {
      for (var cy = coords.y - y; cy <= coords.y + y; cy++) {
        for (var cz = coords.z - z; cz <= coords.z + z; cz++) {
          let material = ToolAPI.getBlockMaterialName(World.getBlockID(cx, cy, cz));
          if (World.getBlockID(cx, cy, cz) != 0 || World.getBlockID(cx, cy, cz) != 7) {
            if (material == "stone" || material == "dirt") {
              World.destroyBlock(cx, cy, cz, true);
            }
          }
        }
      }
    }
    ToolLib.breakCarriedTool(1, player);

  }
}




// file: api/tunel.js

let tonelApi = {
  checkBlock: function(x, y, z) {
    let blockID = World.getBlockID(x, y, z);
    if (blockID == 7) {
      return false
    }
    return true
  },
  destroyBlocks: function(vectors, vec, vec2, bool) {
    for (var cx = vectors.x + (vec.x); cx <= vectors.x + (vec2.x); cx++) {
      for (var cy = vectors.y + (vec.y); cy <= vectors.y + (vec2.y); cy++) {
        for (var cz = vectors.z + (vec.z); cz <= vectors.z + (vec2.z); cz++) {
          if (this.checkBlock(cx, cy, cz)) {
            World.destroyBlock(cx, cy, cz, bool);
          } 
        }
      }
    }
  },
  setBlocks: function(vectors, vec, vec2, block) {
    for (var cx = vectors.x + (vec.x); cx <= vectors.x + (vec2.x); cx++) {
      for (var cy = vectors.y + (vec.y); cy <= vectors.y + (vec2.y); cy++) {
        for (var cz = vectors.z + (vec.z); cz <= vectors.z + (vec2.z); cz++) {
          if (this.checkBlock(cx, cy, cz)) {
            World.setBlock(cx, cy, cz, block.id, block.data);
          } 
        }
      }
    }
  },
  setBlocksFormX: function(coords, vec, vec2, block) {
    this.setBlocks(coords, { x: vec.x - 1, z: vec.z, y: vec.y }, { x: vec2.x - 1, z: vec2.z, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x + 1, z: vec.z, y: vec.y }, { x: vec2.x + 1, z: vec2.z, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z - 1, y: vec.y }, { x: vec2.x, z: vec2.z - 1, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z + 1, y: vec.y }, { x: vec2.x, z: vec2.z + 1, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z, y: vec.y }, { x: vec2.x, z: vec2.z, y: vec2.y }, block)
  },
  setBlocksFormX2: function(coords, vec, vec2, block,blockCenter,SetCenter) {
    if(SetCenter){
      this.setBlocks(coords, { x: vec.x, z: vec.z, y: vec.y }, { x: vec2.x, z: vec2.z, y: vec2.y }, blockCenter)
    }
    this.setBlocks(coords, { x: vec.x - 1, z: vec.z, y: vec.y }, { x: vec2.x - 1, z: vec2.z, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x + 1, z: vec.z, y: vec.y }, { x: vec2.x + 1, z: vec2.z, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z - 1, y: vec.y }, { x: vec2.x, z: vec2.z - 1, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x, z: vec.z + 1, y: vec.y }, { x: vec2.x, z: vec2.z + 1, y: vec2.y }, block)
  },
  setBlocksFormX3: function(coords,vec,vec2,blocks,setBlockCenter,blockCenter){
    if (setBlockCenter) {
      this.setBlocks(coords, { x: vec.x, z: vec.z, y: vec.y }, { x: vec2.x, z: vec2.z, y: vec2.y }, blockCenter)
    }
    this.setBlocks(coords, { x: vec.x - 1, z: vec.z, y: vec.y }, { x: vec2.x - 1, z: vec2.z, y: vec2.y }, blocks.block1)
    this.setBlocks(coords, { x: vec.x + 1, z: vec.z, y: vec.y }, { x: vec2.x + 1, z: vec2.z, y: vec2.y }, blocks.block2)
    this.setBlocks(coords, { x: vec.x, z: vec.z - 1, y: vec.y }, { x: vec2.x, z: vec2.z - 1, y: vec2.y }, blocks.block3)
    this.setBlocks(coords, { x: vec.x, z: vec.z + 1, y: vec.y }, { x: vec2.x, z: vec2.z + 1, y: vec2.y }, blocks.block4)
  },
  setThorch: function(coords, vec, vec2, block, spacing) {
    let time = 4
    for (var cx = coords.x + (vec.x); cx <= coords.x + (vec2.x); cx++) {
      for (var cy = coords.y + (vec.y); cy <= coords.y + (vec2.y); cy++) {
        for (var cz = coords.z + (vec.z); cz <= coords.z + (vec2.z); cz++) {
          if (time >= spacing && this.checkBlock(cx, cy, cz)) {
            time = 0
            World.setBlock(cx, cy, cz, block.id, block.data);
          }else{
          time += 1
          }
        }
      }
    }
  },
  quietBlock: function(coords,vec,vec2,block,spacing){
    this.setBlocks(coords, { x: vec.x - spacing, z: vec.z + spacing, y: vec.y }, { x: vec2.x - spacing, z: vec2.z + spacing, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x - spacing, z: vec.z - spacing, y: vec.y }, { x: vec2.x - spacing, z: vec2.z - spacing, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x + spacing, z: vec.z - spacing, y: vec.y }, { x: vec2.x + spacing, z: vec2.z - spacing, y: vec2.y }, block)
    this.setBlocks(coords, { x: vec.x + spacing, z: vec.z + spacing, y: vec.y }, { x: vec2.x + spacing, z: vec2.z + spacing, y: vec2.y }, block)
  },
  quietBlockTorch: function(coords,vec,vec2,blocks,spacing,spacingTorch){
    this.setThorch(coords,{x: vec.x + spacing,y: vec.y,z: vec.z + spacing},{x: vec2.x + spacing,y: vec2.y,z: vec2.z + spacing},blocks.block1,spacingTorch)
    this.setThorch(coords,{x: vec.x + spacing,y: vec.y,z: vec.z - spacing},{x: vec2.x + spacing,y: vec2.y,z: vec2.z - spacing},blocks.block2,spacingTorch)
    
    this.setThorch(coords, { x: vec.x - spacing, y: vec.y, z: vec.z - spacing }, { x: vec2.x - spacing, y: vec2.y, z: vec2.z - spacing }, blocks.block3, spacingTorch)
    this.setThorch(coords, { x: vec.x - spacing, y: vec.y, z: vec.z + spacing }, { x: vec2.x - spacing, y: vec2.y, z: vec2.z + spacing }, blocks.block4, spacingTorch)
  }
}




// file: api/mod_api.js

ModAPI.registerAPI("UseTools", {
  Tool: Tool,

  requireGlobal: function(command) {
    return eval(command);
  }
});

Logger.Log("UseTools Shared", "API");




// file: items/crooks.js

IDRegistry.genItemID("wood_crook");
Item.createItem("wood_crook", "Wood Crook", {
  name: "wood_crook"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.wood_crook, "wood",
  ToolType.crook);
setinfo.setCategory(ItemID.wood_crook,"tools")
setinfo.setNameMod(ItemID.wood_crook)

Recipes.addShaped({
  id: ItemID.wood_crook,
  count: 1,
  data: 0
}, [
	"sss",
	"ggg",
	" g "
], ['s', 5, 0, 'g', 280, 0]);

IDRegistry.genItemID("stone_crook");
Item.createItem("stone_crook", "Stone Crook", {
  name: "stone_crook"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.stone_crook, "stone",
  ToolType.crook);
setinfo.setCategory(ItemID.stone_crook,"tools")
setinfo.setNameMod(ItemID.stone_crook)

Recipes.addShaped({
  id: ItemID.stone_crook,
  count: 1,
  data: 0
}, [
	"sss",
	"ggg",
	" g "
], ['s', 4, 0, 'g', 280, 0]);

IDRegistry.genItemID("iron_crook");
Item.createItem("iron_crook", "Iron Crook", {
  name: "iron_crook"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.iron_crook, "iron",
  ToolType.crook);
setinfo.setCategory(ItemID.iron_crook,"tools")
setinfo.setNameMod(ItemID.iron_crook)

Recipes.addShaped({
  id: ItemID.iron_crook,
  count: 1,
  data: 0
}, [
	"sss",
	"ggg",
	" g "
], ['s', 265, 0, 'g', 280, 0]);

Item.addCreativeGroup("crook", Translation.translate("crook"), [
  ItemID.wood_crook,
  ItemID.stone_crook,
  ItemID.iron_crook
  ])





// file: items/hammers.js

IDRegistry.genItemID("wood_hammer");
Item.createItem("wood_hammer", "Wood Hammer", {
  name: "wood_hammer"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.wood_hammer, "wood",
  ToolType.hammer);
setinfo.setCategory(ItemID.wood_hammer,"tools")
setinfo.setNameMod(ItemID.wood_hammer)

Recipes.addShaped({
  id: ItemID.wood_hammer,
  count: 1,
  data: 0
}, [
	"sss",
	"sgs",
	" g "
], ['s', 17, 0, 'g', 280, 0]);

IDRegistry.genItemID("stone_hammer");
Item.createItem("stone_hammer", "Stone Hammer", {
  name: "stone_hammer"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.stone_hammer, "stone",
  ToolType.hammer);
setinfo.setCategory(ItemID.stone_hammer,"tools")
setinfo.setNameMod(ItemID.stone_hammer)

Recipes.addShaped({
  id: ItemID.stone_hammer,
  count: 1,
  data: 0
}, [
	"sss",
	"sgs",
	" g "
], ['s', 1, 0, 'g', 280, 0]);

IDRegistry.genItemID("iron_hammer");
Item.createItem("iron_hammer", "Iron Hammer", {
  name: "iron_hammer"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.iron_hammer, "iron",
  ToolType.hammer);
setinfo.setCategory(ItemID.iron_hammer,"tools")
setinfo.setNameMod(ItemID.iron_hammer)

Recipes.addShaped({
  id: ItemID.iron_hammer,
  count: 1,
  data: 0
}, [
	"sss",
	"sgs",
	" g "
], ['s', 265, 0, 'g', 280, 0]);

Item.addCreativeGroup("hammers", Translation.translate("hammers"), [
  ItemID.wood_hammer,
  ItemID.stone_hammer,
  ItemID.iron_hammer
  ])






// file: items/contructorMineTube.js

IDRegistry.genItemID("MinerLineExplosive");
Item.createItem("MinerLineExplosive", "Miner Line Explosive", {
  name: "explosive_line_drilling",
  meta: 0
});

Recipes.addShaped({
  id: ItemID.MinerLineExplosive,
  count: 2,
  data: 0
}, [
	" v ",
	"gsg",
	" s"
], ['s', 289, 0, 'g', 339, 0,'v',318,0]);

IDRegistry.genItemID("MinerLineExplosive3x3");
Item.createItem("MinerLineExplosive3x3", "Miner Line Explosive 3x3", {
  name: "explosive_line_drilling_3x3",
  meta: 0
});

Recipes.addShaped({
  id: ItemID.MinerLineExplosive3x3,
  count: 2,
  data: 0
}, [
	" v ",
	"sss",
	"ggg"
], ['s', 289, 0, 'g', 339, 0,'v',318,0]);

Recipes.addShaped({
  id: ItemID.MinerLineExplosive3x3,
  count: 1,
  data: 0
}, [
	"   ",
	"sss",
	"   "
], ['s', ItemID.MinerLineExplosive, 0]);


IDRegistry.genItemID("MinerLineExplosive4x4");
Item.createItem("MinerLineExplosive4x4", "Miner Line Explosive 4x4", {
  name: "explosive_line_drilling_4x4",
  meta: 0
});

Recipes.addShaped({
  id: ItemID.MinerLineExplosive4x4,
  count: 2,
  data: 0
}, [
	"vvv",
	"sss",
	"ggg"
], ['s', 289, 0, 'g', 339, 0,'v',318,0]);

Recipes.addShaped({
  id: ItemID.MinerLineExplosive4x4,
  count: 1,
  data: 0
}, [
	"   ",
	"ss ",
	"   "
], ['s', ItemID.MinerLineExplosive3x3, 0]);

Item.registerUseFunction(ItemID.MinerLineExplosive, function(coords, item, block,player) {
  let radius = 0
  let leg = 16
  let xi = yi = zi = radius
  let xv = yv = zv = -radius
  switch (coords.side) {
    case 1:
      yv = -leg
      break;
    case 0:
      yi = leg
      break;
    case 2:
      zi = leg
      break;
    case 3:
      zv = -leg
      break;
    case 4:
      xi = leg
      break;
    case 5:
      xv = -leg
      break;
  
  }
  let vec = {
    x: xv,
    y: yv,
    z: zv
  }
  let vec2 = {
    x: xi,
    y: yi,
    z: zi
  }
  tonelApi.destroyBlocks(coords, vec, vec2, true)
  Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
})

Item.registerUseFunction(ItemID.MinerLineExplosive3x3, function(coords, item, block,player) {
  let radius = 1
  let leg = 16
  let xi = yi = zi = radius
  let xv = yv = zv = -radius
  switch (coords.side) {
    case 1:
      yv = -leg
      break;
    case 0:
      yi = leg
      break;
    case 2:
      zi = leg
      break;
    case 3:
      zv = -leg
      break;
    case 4:
      xi = leg
      break;
    case 5:
      xv = -leg
      break;
  
  }
  let vec = {
    x: xv,
    y: yv,
    z: zv
  }
  let vec2 = {
    x: xi,
    y: yi,
    z: zi
  }
  tonelApi.destroyBlocks(coords, vec, vec2, true)
  Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
})

Item.registerUseFunction(ItemID.MinerLineExplosive4x4, function(coords, item, block,player) {
    let radius = 2
    let leg = 16
    let xi = yi = zi = radius
    let xv = yv = zv = -radius
    switch (coords.side) {
      case 1:
        yv = -leg
        break;
      case 0:
        yi = leg
        break;
      case 2:
        zi = leg
        break;
      case 3:
        zv = -leg
        break;
      case 4:
        xi = leg
        break;
      case 5:
        xv = -leg
        break;
  
    }
    let vec = {
      x: xv,
      y: yv,
      z: zv
    }
    let vec2 = {
      x: xi,
      y: yi,
      z: zi
    }
    tonelApi.destroyBlocks(coords, vec, vec2, true)
    Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
})




// file: items/PacketConstructor.js

IDRegistry.genItemID("constructorMine");
Item.createItem("constructorMine", "Mine Constructor Packet", {
  name: "constructor_packet",
  meta: 0
});

setinfo.setStructureInfo(ItemID.constructorMine,"mine",{height: 30,level: 1})

Recipes.addShaped({
  id: ItemID.constructorMine,
  count: 1,
  data: 0
}, [
	" g ",
	"sbs",
	" g "
], ['s', 65, 0, 'g', 5, 0,'b',4,0]);


Item.registerUseFunction(ItemID.constructorMine, function(coords, item, block,player) {
  let leg = 30
  let vec = {x: 0,y: 0,z: 0}
  let vecMine = {x: 0,y: 0,z: 0}
  switch (coords.side) {
    case 1:
      vec.y = -leg
      break;
    case 0:
      vecMine.y = leg
      break;
  }
  if(coords.side == 0 || coords.side == 1){
    tonelApi.setBlocksFormX(coords,vec,vecMine,{id:4,data:0})
    tonelApi.setBlocks(coords,vec,vecMine,{id:65,data: getBlockRotation(player,false )})
  }
  Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
});

IDRegistry.genItemID("constructorMineN2");
Item.createItem("constructorMineN2", "Mine N2 Constructor Packet", {
  name: "constructor_packet",
  meta: 0
});

setinfo.setStructureInfo(ItemID.constructorMineN2, "mine", { height: 60, level: 2 })

Recipes.addShaped({
  id: ItemID.constructorMineN2,
  count: 1,
  data: 0
}, [
	"cgc",
	"sbs",
	"cgc"
], ['s', 65, 0, 'g', 98, 0, 'b', 4, 0,'c',17,0]);

Item.registerUseFunction(ItemID.constructorMineN2, function(coords, item, block, player) {
  let leg = 60
  let radius = 2
  let radius2 = 1
  let vec = { x: 0, y: 0, z: 0 }
  let vecMine = { x: 0, y: 0, z: 0 }
  switch (coords.side) {
    case 1:
      vec.y = -leg
      break;
    case 0:
      vecMine.y = leg
      vec.y = -2
      break;
  }
  let vectorWit = { x: -radius, y: vec.y, z: -radius }
  let vectorMineWit = { x: radius, y: vecMine.y, z: radius }
  let vectorWit2 = { x: -radius2, y: vec.y, z: -radius2 }
  let vectorMineWit2 = { x: radius2, y: vecMine.y, z: radius2 }
  if (coords.side == 0 || coords.side == 1) {
    tonelApi.setBlocks(coords, vectorWit, vectorMineWit, { id: 98, data: 0})
    tonelApi.setBlocks(coords, vectorWit2, vectorMineWit2, { id: 0, data: 0 })
    
    tonelApi.setBlocksFormX3(coords, vec, vecMine,{block1: {id:65,data: 4},block2: {id:65,data: 5},block3: {id:65,data: 2},block4: {id:65,data: 3}},true,{id: 17,data:0})
    tonelApi.quietBlock(coords,vec,vecMine,{id:17,data:0},2)
    tonelApi.quietBlockTorch(coords,vec,vecMine,{block1: {id:50,data:2},block2: {id:50,data:2},block3: {id:50,data:1},block4: {id:50,data:1}},1,4)
  }
  Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
});





// file: items/debug.js

ToolType.debug = {
  isWeapon: false,
  damage: 100000,
  blockTypes: ["fibre", "plant", "stone", "dirt"],
  calcDestroyTime: function(item, coords, block, params, destroyTime, enchant) {
    return 0;
  },
  useItem: function(coords, item, block, player) {



    Game.message("block:" + block.id + ", data:" + block.data + ',side:' + coords.side+",light:"+World.getLightLevel(coords.x,coords.y,coords.z)+",rotation:"+getBlockRotation(player,false))
    

  }
}

IDRegistry.genItemID("debug");
Item.createItem("debug", "debug", {
  name: "iron_stick"
}, {
  stack: 1
});

ToolAPI.setTool(ItemID.debug, "diamond", ToolType.debug);

setinfo.setNameMod(ItemID.debug)
setinfo.addComment(ItemID.debug, "you not can get this")




// file: recipeExtra.js

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 10
}, [
	"   ",
	"bsc",
	" d "
], ['s', 344, 0, 'b', 288, 0, 'c', 296, 0, 'd', 365, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 11
}, [
	"   ",
	"bsc",
	"   "
], ['s', 344, 0, 'b', 363, 0, 'c', 334, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 12
}, [
	"   ",
	"bsb",
	"   "
], ['s', 344, 0, 'b', 319, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 13
}, [
	"   ",
	"bsc",
	" d "
], ['s', 344, 0, 'b', 35, 0, 'c', 363, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 16
}, [
	"   ",
	"bsc",
	" d "
], ['s', 344, 0, 'b', 363, 0, 'c', 334, 0, 'd', 40, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 32
}, [
	"   ",
	"bsc",
	" d "
], ['s', 344, 0, 'b', 367, 0, 'c', 371, 0, 'd', 391, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 32
}, [
	"   ",
	"bsc",
	" d "
], ['s', 344, 0, 'b', 367, 0, 'c', 371, 0, 'd', 392, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 33
}, [
	"   ",
	"bs ",
	"   "
], ['s', 344, 0, 'b', 289, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 34
}, [
	" w ",
	"bsc",
	"   "
], ['s', 344, 0, 'b', 352, 0, 'c', 262, 0, 'w', 261, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 35
}, [
	"   ",
	"bsc",
	"   "
], ['s', 344, 0, 'b', 287, 0, 'c', 375, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 36
}, [
	"   ",
	"bsc",
	"   "
], ['s', 344, 0, 'b', 287, 0, 'c', 375, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 37
}, [
	"   ",
	"bs ",
	"   "
], ['s', 344, 0, 'b', 341, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 38
}, [
	"   ",
	"bsc",
	"   "
], ['s', 344, 0, 'b',381, 0,'c',368,0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 40
}, [
	"   ",
	"bsc",
	"   "
], ['s', 344, 0, 'b', 287, 0, 'c', 375, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 42
}, [
	"   ",
	"bsc",
	"   "
], ['s', 344, 0, 'b', 341, 0,'c',378,0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 43
}, [
	"   ",
	"bsc",
	"   "
], ['s', 344, 0, 'b', 369, 0, 'c', 377, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 44
}, [
	"   ",
	"bsc",
	"   "
], ['s', 344, 0, 'b', 388, 0, 'c', 367, 0]);

Recipes.addShaped({
  id: 383,
  count: 1,
  data: 45
}, [
	" t ",
	"bsc",
	" f "
], ['s', 344, 0, 'b', 373, 0, 'c', 353, 0,'f',376,0,'t',372,0]);

Recipes.addShaped({
  id: 52,
  count: 1,
  data: 0
}, [
	"sfs",
	"fbf",
	"sfs"
], ['s', 264, 0, 'b', 259, 0, 'f', 101, 0]);

Recipes.addShaped({
  id: 52,
  count: 1,
  data: 0
}, [
	"sfs",
	"fbf",
	"sfs"
], ['s', 264, 0, 'b', 259, 0, 'f', 101, 0]);




// file: sopport/ExNihilo.js

ModAPI.addAPICallback("ENR",
    function(api) {
     Tool.addDropCrook(ItemID.ex_silkWorm,"r")
    })
    




