/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 10
*/



// file: bitmap.js

const getColor = function(cv, str){
  const increase = (cv % 0x240000 + 1) / 0x2400;
  const decrease = 0x100 - increase;
  let r = g = b = 0x00;
  cv < 0x240000 ? (r = increase) :
  cv < 0x480000 ? (r = decrease, g = increase) :
  cv < 0x6c0000 ? (g = decrease, b = increase) :
  cv < 0x900000 ? (r = increase, b = 0xff) :
  cv < 0xb40000 ? (r = 0xff, g = increase, b = decrease) :
  cv < 0xd80000 ? (r = decrease, g = 0xff, b = increase) :
  cv < 0xfc0000 ? (r = increase, g = b = 0xff) :
  (r = g = b = 0xff);
  if(str){
    return ("0" + (r & 0xff).toString(16)).slice(-2) + ("0" + (g & 0xff).toString(16)).slice(-2) + ("0" + (b & 0xff).toString(16)).slice(-2);
  }
  return (r & 0xff) << 16 | (g & 0xff) << 8 | (b & 0xff);
};

const setLoadingTip = ModAPI.requireGlobal("MCSystem.setLoadingTip");
let flag = false;


const genTex = function(type, shaft){
  const ag = android.graphics;
  const temp = ag.BitmapFactory.decodeFile(__dir__ + "res/temp/" + type + ".png");
  let path;
  let bmp;
  let cvs;
  let paint;
  let file;

  for(let i = 29; i--;){
    path = __dir__ + "res/items-opaque/" + type + "/minor_" + type + "_" + i + ".png";
    if(!new java.io.File(path).exists()){
      bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
      cvs = new ag.Canvas(bmp);
      paint = new ag.Paint();
      file = new java.io.File(path);

      paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor("#" + getColor(0x90000 * i + 1, true)), ag.PorterDuff.Mode.MULTIPLY));
      cvs.drawBitmap(temp, 0, 0, paint);

      shaft && cvs.drawBitmap(ag.BitmapFactory.decodeFile(__dir__ + "res/temp/shaft_" + type + ".png"), 0, 0, null);

      file.getParentFile().mkdirs();
      file.createNewFile();
      bmp.compress(ag.Bitmap.CompressFormat.PNG, 100, new java.io.FileOutputStream(path));
      setLoadingTip("[Minor Alchemy]: Generate items textures.");
      flag || ((flag = true) & alert("[Minor Alchemy]: Textures were generated.\nPlease restart InnerCore."));
    }
  }

};


genTex("aec");
genTex("sword", true);
genTex("shovel", true);
genTex("pickaxe", true);
genTex("axe", true);
genTex("hoe", true);




// file: scroll.js

const ENC = [
  {
    name: "Protection",
    weight: 10,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [0, 1, 3, 4]
  },
  {
    name: "Fire Protection",
    weight: 5,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [0, 1, 3, 4]
  },
  {
    name: "Feather Falling",
    weight: 5,
    target: ["boots"],
    conflict: [2]
  },
  {
    name: "Blast Protection",
    weight: 2,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [0, 1, 3, 4]
  },
  {
    name: "Projectile Protection",
    weight: 5,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [0, 1, 3, 4]
  },
  {
    name: "Thorns",
    weight: 1,
    target: ["helmet", "chestplate", "leggings", "boots"],
    conflict: [5]
  },
  {
    name: "Respiration",
    weight: 2,
    target: ["helmet"],
    conflict: [6]
  },
  {
    name: "Aqua Affinity",
    weight: 2,
    target: ["boots"],
    conflict: [7],
    nonlvl: true
  },
  {
    name: "Depth Strider",
    weight: 2,
    target: ["helmet"],
    conflict: [8]
  },
  {
    name: "Sharpness",
    weight: 10,
    target: ["sword", "axe"],
    conflict: [9, 10, 11]
  },
  {
    name: "Smite",
    weight: 5,
    target: ["sword", "axe"],
    conflict: [9, 10, 11]
  },
  {
    name: "Bane of Arthoropods",
    weight: 5,
    target: ["sword", "axe"],
    conflict: [9, 10, 11]
  },
  {
    name: "Knockback",
    weight: 5,
    target: ["sword"],
    conflict: [12]
  },
  {
    name: "Fire Aspect",
    weight: 2,
    target: ["sword"],
    conflict: [13]
  },
  {
    name: "Looting",
    weight: 2,
    target: ["sword"],
    conflict: [14]
  },
  {
    name: "Efficiency",
    weight: 10,
    target: ["shovel", "pickaxe", "axe", "shears"],
    conflict: [15]
  },
  {
    name: "Silk Touch",
    weight: 1,
    target: ["shovel", "pickaxe", "axe"],
    conflict: [16, 18],
    nonlvl: true
  },
  {
    name: "Unbreaking",
    weight: 5,
    target: ["helmet", "chestplate", "leggings", "boots", "sword", "shovel", "pickaxe", "axe", "hoe", "bow", "fishing", "shears", "carrot"],
    conflict: [17]
  },
  {
    name: "Fortune",
    weight: 2,
    target: ["shovel", "pickaxe", "axe"],
    conflict: [16, 18]
  },
  {
    name: "Power",
    weight: 10,
    target: ["bow"],
    conflict: [19]
  },
  {
    name: "Punch",
    weight: 2,
    target: ["bow"],
    conflict: [20]
  },
  {
    name: "Flame",
    weight: 2,
    target: ["bow"],
    conflict: [21],
    nonlvl: true
  },
  {
    name: "Infinity",
    weight: 1,
    target: ["bow"],
    conflict: [22],
    nonlvl: true
  },
  {
    name: "Luck of the Sea",
    weight: 2,
    target: ["fishing"],
    conflict: [23]
  },
  {
    name: "Lure",
    weight: 2,
    target: ["fishing"],
    conflict: [24]
  }
];


IDRegistry.genItemID("scrollPack");
Item.createItem("scrollPack", "Scroll Package", {name: "scrollPack"});
IDRegistry.genItemID("encScroll");
Item.createItem("encScroll", "Enchantment Scroll", {name: "encScroll"}, {isTech: true});
Recipes.addShaped({id: ItemID.scrollPack}, ["aaa", "bcb", "aaa"], ["a", 339, 0, "b", 57, 0, "c", 54, 0]);

Item.registerNameOverrideFunction(ItemID.encScroll, function(item, name){
  return name + "\n§7" + ENC[item.data].name;
});

Item.registerUseFunction("scrollPack", function(c){
  let count = 0;
  let i = 0;
  Player.decreaseCarriedItem();
  for(i = 9; i < 45; i++){
    Player.getInventorySlot(i).id || (count++);
  }
  for(i = 0; i < 25; i++){
    count-->0?
      Player.addItemToInventory(ItemID.encScroll, 1, i):
      World.drop(c.x, c.y + 1, c.z, ItemID.encScroll, 1, i);
  }
});




// file: tool.js

const Shaped = {};


const regTool = function(type){

  IDRegistry.genItemID("aec_" + type);
  Item.createItem("aec_" + type, type.charAt(0).toUpperCase() + type.slice(1), {name: "minor_" + type}, {stack: 1, isTech: true});
  Item.setToolRender(ItemID["aec_" + type], true);

  Item.registerNameOverrideFunction(ItemID["aec_" + type], function(item, Type){
    item = Player.getCarriedItem();
    const max = Tool.getMax(item);
    let name = (Tool.getCharge(item) < 0.75 ? "Deteriorite " : "Proliferium ") + Type + "§7";
    name += "\nDurability: " + (max - Tool.getDur(item)) + " / " + max;
    Type != "Hoe" && (name += "\nDamage: " + ((Tool.getDam(item, ["Hoe", "Shovel", "Pickaxe", "Axe", "Sword"].indexOf(Type)) * 100 | 0) / 100));
    Type != "Sword" && Type != "Hoe" && (name += "\nEfficiency: " + ((Tool.getEff(item) * 100 | 0) / 100));
    Entity.getSneaking(Player.get()) && (name += "\nTotalUses: " + Tool.getUse(item));
    return name;
  });

  Item.registerIconOverrideFunction(ItemID["aec_" + type], function(item){
    return {name: "minor_" + type, meta: item.data};
  });

};

regTool("sword");
regTool("shovel");
regTool("pickaxe");
regTool("axe");
regTool("hoe");


const regRecipe = function(id, w, h, recipe){
  const matchX = 4 - w + 1;
  const matchY = 4 - h + 1;
  const array = [];
  let i = 0;
  let j = 0;
  for(i = matchX * matchY; i--;){
    array[i] = [];
    for(let j = 16; j--;){
      array[i][j] = 0;
    }
  }
  for(j = 0; j < matchY; j++){
  for(i = 0; i < matchX; i++){
  for(let y = 0; y < h; y++){
  for(let x = 0; x < w; x++){
    array[j * matchX + i][(y + j) * 4 + x + i] = recipe[y * w + x];
  }
  }
  }
  }
  for(i = array.length; i--;){
    Shaped[array[i].join("")] = id;
  }
};

regRecipe(ItemID.aec_sword, 1, 3, [2, 2, 1]);
regRecipe(ItemID.aec_shovel, 1, 3, [2, 1, 1]);
regRecipe(ItemID.aec_pickaxe, 3, 3, [2, 2, 2, 0, 1, 0, 0, 1, 0]);
regRecipe(ItemID.aec_axe, 2, 3, [2, 2, 2, 1, 0, 1]);
regRecipe(ItemID.aec_axe, 2, 3, [2, 2, 1, 2, 1, 0]);
regRecipe(ItemID.aec_hoe, 2, 3, [2, 2, 0, 1, 0, 1]);
regRecipe(ItemID.aec_hoe, 2, 3, [2, 2, 1, 0, 1, 0]);



const ToolList = {};
ToolList[ItemID.aec_sword] = 4098;
ToolList[ItemID.aec_shovel] = 2052;
ToolList[ItemID.aec_pickaxe] = 6148;
ToolList[ItemID.aec_axe] = 6148;
ToolList[ItemID.aec_hoe] = 4100;

const Tool = {
  getDur: function(tool){
    return tool.extra ? tool.extra.getInt("dur") : 0;
  },
  getUse: function(tool){
    return tool.extra ? tool.extra.getInt("use") : 0;
  },
  getCV: function(tool){
    return 20 * this.getUse(tool) + ToolList[tool.id];
  },
  getMax: function(tool){
    return 150 + this.getUse(tool) * 0.1 | 0;
  },
  getCharge: function(tool){
    const max = this.getMax(tool);
    return (max - this.getDur(tool)) / max;
  },
  getDam: function(tool, bonus){
    return this.getCharge(tool) * (this.getUse(tool) * 0.001 + bonus);
  },
  getEff: function(tool){
    return this.getCharge(tool) * (this.getUse(tool) * 0.005 + 2);
  },
  getHar: function(tool){
    return this.getCharge(tool) * this.getUse(tool) * 0.001;
  },
  funcSpeed: function(item, c, block, param, time){
    item = Player.getCarriedItem();
    if(isNaN(time)){
      time = Block.getDestroyTime(block.id);
      const toolData = ToolAPI.getCarriedToolData();
      const blockData = ToolAPI.getBlockData(block.id);
      let devider = 1;
      if(toolData.blockMaterials[blockData.material.name]){
        if(blockData.isNative){
          devider *= blockData.material.multiplier;
        }
      }
      else if(!blockData.isNative){
        time *= blockData.material.multiplier;
      }
      time /= devider;
    }
    return time / Tool.getEff(item);
  },
  damageCarriedItem: function(match){
    const item = Player.getCarriedItem();
    if(!this.getCharge(item)){
      return false;
    }
    item.extra.putInt("dur", Math.min(this.getMax(item), this.getDur(item) + (match ? 1 : 2)));
    match && item.extra.putInt("use", this.getUse(item) + 1);
    Player.setCarriedItem(item.id, 1, match ? Math.min(28, this.getUse(item) / 100 | 0) : item.data, item.extra);
    return true;
  }
};


ToolAPI.toolData[ItemID.aec_sword] = {
  isMinor: true,
  damage: 0,
  calcDestroyTime: function(item, c, block, param, time){
    if(block.id == 30){
      return 0.08;
    }
    if(block.id == 35){
      return 0.05;
    }
    const material = ToolAPI.getBlockMaterial(block.id) || {};
    if(material.name=="fibre" || material.name=="plant"){
      return param.base / 1.5;
    }
    return time;
  },
  onDestroy: function(){
    Tool.damageCarriedItem(false);
  },
  onAttack: function(){
    this.damage = Tool.damageCarriedItem(true) ? Tool.getDam(Player.getCarriedItem(), 4) : 0;
  }
};

ToolAPI.toolData[ItemID.aec_shovel] = {
  isMinor: true,
  damage: 0,
  toolMaterial: {level: 5},
  blockMaterials: {dirt: true},
  calcDestroyTime: Tool.funcSpeed,
  onDestroy: function(){
    Tool.damageCarriedItem(true);
  },
  onAttack: function(){
    this.damage = Tool.damageCarriedItem(false) ? Tool.getDam(Player.getCarriedItem(), 1) : 0;
  }
};

ToolAPI.toolData[ItemID.aec_pickaxe] = {
  isMinor: true,
  damage: 0,
  toolMaterial: {level: 5},
  blockMaterials: {stone: true},
  calcDestroyTime: Tool.funcSpeed,
  onDestroy: function(){
    Tool.damageCarriedItem(true);
  },
  onAttack: function(){
    this.damage = Tool.damageCarriedItem(false) ? Tool.getDam(Player.getCarriedItem(), 2) : 0;
  }
};

ToolAPI.toolData[ItemID.aec_axe] = {
  isMinor: true,
  damage: 0,
  toolMaterial: {level: 5},
  blockMaterials: {wood: true},
  calcDestroyTime: Tool.funcSpeed,
  onDestroy: function(){
    Tool.damageCarriedItem(true);
  },
  onAttack: function(){
    this.damage = Tool.damageCarriedItem(false) ? Tool.getDam(Player.getCarriedItem(), 3) : 0;
  }
};

Item.registerUseFunction("aec_shovel", function(c, item, block){
  block.id == 2 && Tool.damageCarriedItem(true) && World.setBlock(c.x, c.y, c.z, 198);
});

Item.registerUseFunction("aec_hoe", function(c, item, block){
  (block.id == 2 || block.id == 3) && Tool.damageCarriedItem(true) && World.setBlock(c.x, c.y, c.z, 60);
});


ToolAPI.destroyBlockHook=function(c,block,item){const tool=ToolAPI.getCarriedToolData(),enc=ToolAPI.getEnchantExtraData(item.enchant);tool&&!tool.isNative&&(tool.modifyEnchant&&tool.modifyEnchant(enc,item,c,block))&(!tool.isMinor&&Math.random()<1/(enc.unbreaking+1)&&(item.data+=tool.isWeapon?2:1))&(tool.onDestroy&&tool.onDestroy(item,c,block))&(item.data>=tool.toolMaterial.durability&&(tool.onBroke&&tool.onBroke(item,c,block)?0:(item.id=tool.brokenId,item.count=1,item.data=0)))&(tool.isMinor||Player.setCarriedItem(item.id,item.count,item.data,item.enchant,item.name))};

ToolAPI.playerAttackHook=function(player,ent,item){const tool=ToolAPI.getCarriedToolData(),enc=ToolAPI.getEnchantExtraData(item.enchant),time=World.getThreadTime();let hp=dam=0;tool&&!tool.isNative&&ToolAPI.LastAttackTime+10<time&&Entity.getHealth(ent)>0&&(tool.modifyEnchant&&tool.modifyEnchant(enc,item,coords,block))&(!tool.isMinor&&Math.random()<1/(enc.unbreaking+1)&&(item.data+=tool.isWeapon?1:2))&(tool.onAttack&&tool.onAttack(item,ent))&(item.data>=tool.durability&&(tool.onBroke&&tool.onBroke(item)?0:(item.id=tool.brokenId,item.count=1,item.data=0)))&(ToolAPI.LastAttackTime=time,hp=Entity.getHealth(ent),dam=tool.damage+(tool.toolMaterial.damage||0))&Entity.setHealth(ent,hp-Math.min((dam|0)+(Math.random()<dam-(dam|0)?1:0),hp)+1)&(tool.isMinor||Player.setCarriedItem(item.id,item.count,item.data,item.enchant,item.name))};




// file: aec.js

IMPORT("NJJCore", "Inventory");

const CV = {};

(function(){
  const source = FileTools.ReadJSON(__dir__+"/CV.json");
  let newKey;
  for(let key in source){
    newKey = key.split(":").length == 1 ? eval(key) : key;
    CV[newKey] = source[key];
  };
})();

IDRegistry.genItemID("aec");
Item.createItem("aec", "Alchemical Energy Container", {name: "minor_aec"}, {stack: 1, isTech: true});

Item.registerNameOverrideFunction(ItemID.aec, function(item, name){
  item = Player.getCarriedItem();
  return name + "\n§bCV: " + (item.extra ? item.extra.getInt("cv") : "Error");
});

Item.registerIconOverrideFunction(ItemID.aec, function(item){
  return {name: "minor_aec", meta: item.data};
});

const getCV = function(item){
  if(item.extra && item.extra.getInt("cv")){
    return item.extra.getInt("cv");
  }
  if(ToolList[item.id]){
    const charge = Tool.getCharge(item);
    return Tool.getCV(item) * (charge == 1 ? 1 : charge * 0.7) | 0;
  }
  if(CV[item.id + ":" + item.data]){
    return CV[item.id + ":" + item.data].cv * item.count;
  }
  if(CV[item.id]){
    if(CV[item.id].type){
      const max = Item.getMaxDamage(item.id);
      let value = CV[item.id].cv;
      item.data && (value *= (max - item.data) / max * 0.7);
      if(item.extra){
        const enc = item.extra.getEnchants();
        for(let key in enc){
          value += 30000 / ENC[key].weight * Math.pow(3, enc[key] / 3);
        }
      }
      return value | 0;
    }
    return CV[item.id].cv * item.count;
  }
  return 0;
};

const textCV = function(extra, text){
  const cv = extra ? extra.getInt("cv") : 0;
  const color = getColor(cv);
  text.text = ("0000000000" + cv).slice(-10);
  text.font.color = android.graphics.Color.rgb((color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff);
};

const allClear = function(item){
  item.id = item.count = item.data = item.extra = 0;
};

const returnSlot = function(con, name){
  const pos = Player.getPosition();
  slot = con.getSlot(name);
  slot.extra ?
    con.dropSlot(name, pos.x, pos.y, pos.z) :
    Inventory.addItem(slot.id, slot.count, slot.data) &
    allClear(slot);
};




// file: tile/alchemizer/gui.js

const guiAlc = {
  con: new UI.Container(),
  win: new UI.StandartWindow({
    standart: {
      header: {text: {text: "Alchemizer"}},
      inventory: {standart: true},
      background: {standart: true}
    },
    drawing: [
      {type: "bitmap", x: 605, y: 156, bitmap: "alchemBar", scale: 3.2}
    ],
    elements: {
      "slot0": {type: "slot", x: 360, y: 60},
      "slot1": {type: "slot", x: 420, y: 60},
      "slot2": {type: "slot", x: 480, y: 60},
      "slot3": {type: "slot", x: 540, y: 60},
      "slot4": {type: "slot", x: 360, y: 120},
      "slot5": {type: "slot", x: 420, y: 120},
      "slot6": {type: "slot", x: 480, y: 120},
      "slot7": {type: "slot", x: 540, y: 120},
      "slot8": {type: "slot", x: 360, y: 180},
      "slot9": {type: "slot", x: 420, y: 180},
      "slot10": {type: "slot", x: 480, y: 180},
      "slot11": {type: "slot", x: 540, y: 180},
      "slot12": {type: "slot", x: 360, y: 240},
      "slot13": {type: "slot", x: 420, y: 240},
      "slot14": {type: "slot", x: 480, y: 240},
      "slot15": {type: "slot", x: 540, y: 240},
      "slotResult": {type: "slot", x: 670, y: 132, bitmap: "slot_aec", size: 90,
        clicker: {onClick: function(con){
          const res = con.getSlot("slotResult");
          const pos = Player.getPosition();
          let slot;
          let i = 0;
          if(res.id == ItemID.aec){
            for(i = 16; i--;){
              slot = con.getSlot("slot" + i);
              getCV(slot) && allClear(slot);
            }
            con.dropSlot("slotResult", pos.x, pos.y, pos.z);
            res.extra.removeCustomData();
            return;
          }
          if(res.id){
            for(i = 16; i--;){
              slot = con.getSlot("slot" + i);
              if(slot.id == ItemID.aec && slot.extra && slot.extra.getInt("cv") < 2048){
                alert("Please charge 2048 CV to AEC.");
                return;
              }
            }
            let cv = 0;
            for(i = 16; i--;){
              slot = con.getSlot("slot" + i);
              slot.id == ItemID.aec ?
                (cv = slot.extra.getInt("cv")) &
                (cv == 2048 ? allClear(slot) : slot.extra.putInt("cv", cv - 2048)) :
                (getCV(slot) && allClear(slot));
            }
            res.extra = new ItemExtraData();
            res.extra.putInt("use", 0);
            res.extra.putInt("dur", 0);
            con.dropSlot("slotResult", pos.x, pos.y, pos.z);
            res.extra = 0;
          }
        }}
      },
      "slotAEC": {type: "slot", x: 812, y: 60, bitmap: "slot_aec", size: 90},
      "slotSample": {type: "slot", x: 830, y: 170},
      "slotReplica": {type: "slot", x: 830, y: 240, 
        clicker: {onClick: function(con){
          const sam = con.getSlot("slotSample");
          const aec = con.getSlot("slotAEC");
          const rep = con.getSlot("slotReplica");
          const pos = Player.getPosition();
          let cv = 0;
          rep.id && (
            aec.extra.putInt("cv", aec.extra.getInt("cv") - getCV(sam)) &
            (cv = aec.extra.getInt("cv")) &
            (cv ?
              aec.data = Math.min(28, cv / 0x90000 | 0) :
              allClear(aec)) &
            con.dropSlot("slotReplica", pos.x, pos.y, pos.z) &
            (rep.extra = 0)
          );
        }}
      },
      "textResult": {type: "text", x: 672, y: 230, font: {size: 12}},
      "textAEC": {type: "text", x: 813, y: 40, font: {size: 12}},
      "textNeed": {type: "text", x: 895, y: 195, font: {size: 12}},
      "button": {type: "button", x: 360, y: 320, bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p", scale: 1.6, clicker: {
        onClick: function(con){
          const array = [];
          let slot;
          let inv;
          let stack = 0;
          let min = 0;
          for(let i = 16; i--;){
            slot = con.getSlot("slot" + i);
            slot.id && array.push(slot.id + ":" + slot.data);
          }
          for(let i = 9; i <= 44; i++){
            inv = Player.getInventorySlot(i);
            if(!inv.id || inv.extra || !~array.indexOf(inv.id + ":" + inv.data)){
              continue;
            }
            stack = Item.getMaxStack(inv.id);
            for(let j = 0; j < 16; j++){
              slot = con.getSlot("slot" + j);
              if(!slot.id || slot.id == inv.id && slot.data == inv.data && slot.count < stack){
                min = Math.min(inv.count, stack - slot.count);
                con.setSlot("slot" + j, inv.id, slot.count + min, inv.data);
                inv.count -= min;
                if(inv.count){
                  Player.setInventorySlot(i, inv.id, inv.count, inv.data);
                }
                else{
                  Player.setInventorySlot(i, 0);
                  break;
                }
              }
            }
          }
        }
      }}
    }
  })
};




// file: tile/alchemizer/tile.js

IDRegistry.genBlockID("alchemizer");
Block.createBlock("alchemizer", [{name: "Alchemizer", texture: [["obsidian", 0], ["alchemizerTop", 0], ["alchemizerSide", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.alchemizer, "stone");
Block.setDestroyTime(BlockID.alchemizer, 5);
Recipes.addShaped({id: BlockID.alchemizer}, ["aba", "cdc", "eee"], ["a", 266, 0, "b", 325, 10, "c", 264, 0, "d", 58, 0, "e", 49, 0]);

Callback.addCallback("ItemUse", function(c, item, block){
  block.id == BlockID.alchemizer && !Entity.getSneaking(Player.get()) &&
    Game.prevent() &
    guiAlc.con.openAs(guiAlc.win);
});

Callback.addCallback("tick", function(){
  const content = guiAlc.con.getGuiContent();
  if(content){
    const res = guiAlc.con.getSlot("slotResult");
    const rep = guiAlc.con.getSlot("slotReplica");
    const aec = guiAlc.con.getSlot("slotAEC");
    const sam = guiAlc.con.getSlot("slotSample");
    const req = getCV(sam);

    let add = 0;
    let slot;
    let str = "";
    for(let i = 0; i < 16; i++){
      slot = guiAlc.con.getSlot("slot" + i);
      add += getCV(slot);
      str += [0, 280, ItemID.aec].indexOf(slot.id);
    }

    add ?
      Shaped[str] ?
        (res.id = Shaped[str], res.data = 0, res.count = 1) :
        (res.id = ItemID.aec, res.count = 1, res.data = Math.min(28, add / 0x90000 | 0), res.extra = new ItemExtraData()) &
        res.extra.putInt("cv", add) :
      allClear(res);

    aec.id == ItemID.aec && req && req <= aec.extra.getInt("cv") ?
      (rep.id = sam.id, rep.count = sam.count, rep.data = sam.data, rep.extra = sam.extra ? sam.extra.copy() : 0) :
      allClear(rep);

    textCV(res.extra, content.elements.textResult);
    textCV(aec.extra, content.elements.textAEC);
    guiAlc.con.setText("textNeed", "Need: " + req);

  }
});

guiAlc.con.setOnCloseListener({
  onClose: function(){
    for(let i = 16; i--;){
      returnSlot(guiAlc.con, "slot" + i);
    }
    returnSlot(guiAlc.con, "slotAEC");
    returnSlot(guiAlc.con, "slotSample");
    allClear(guiAlc.con.getSlot("slotResult"));
    allClear(guiAlc.con.getSlot("slotReplica"));
  }
});




// file: tile/rejuvenator/gui.js

const guiRej = {
  Flags: {
    helmet: 1 << 0,
    chestplate: 1 << 1,
    leggings: 1 << 2,
    boots: 1 << 3,
    sword: 1 << 4,
    shovel: 1 << 5,
    pickaxe: 1 << 6,
    axe: 1 << 7,
    hoe: 1 << 8,
    bow: 1 << 9,
    flshing: 1 << 10,
    shears: 1 << 11,
    carrot: 1 << 12
  },
  con: new UI.Container(),
  win: new UI.StandartWindow({
    standart: {
      header: {text: {text: "Rejuvenator"}},
      inventory: {standart: true},
      background: {standart: true}
    },
    drawing: [
      {type: "bitmap", x: 526, y: 80, bitmap: "laser_a0", scale: 0.8},
      {type: "bitmap", x: 691, y: 80, bitmap: "laser_a0", scale: 0.8},
      {type: "bitmap", x: 465, y: 136, bitmap: "laser_b0", scale: 0.8},
      {type: "bitmap", x: 765, y: 136, bitmap: "laser_b0", scale: 0.8},
      {type: "bitmap", x: 526, y: 220, bitmap: "laser_c0", scale: 0.8}
    ],
    elements: {
      "slotAEC": {type: "slot", x: 600, y: 60, bitmap: "slot_aec", size: 90},
      "slotOld": {type: "slot", x: 765, y: 75},
      "slotResult": {type: "slot", x: 765, y: 217,
        clicker: {onClick: function(con, tile){
          const aec = con.getSlot("slotAEC");
          const old = con.getSlot("slotOld");
          const res = con.getSlot("slotResult");
          const pos = Player.getPosition();
          let cv = 0;
          res.id &&
            aec.extra.putInt("cv", aec.extra.getInt("cv") - (ToolList[res.id] ? Tool.getCV(old) * Tool.getDur(old) / Tool.getMax(old) : CV[old.id].cv * old.data / Item.getMaxDamage(old.id)) * 0.7 | 0) &
            (cv = aec.extra.getInt("cv")) &
            (cv ? aec.data = Math.min(28, cv / 0x90000 | 0) : allClear(aec)) &
            con.dropSlot("slotResult", pos.x, pos.y, pos.z) &
            allClear(old);
        }}
      },
      "slotNaked": {type: "slot", x: 465, y: 75},
      "slotScroll": {type: "slot", x: 465, y: 217},
      "slotEnchant": {type: "slot", x: 615, y: 217,
        clicker: {onClick: function(con, tile){
          const aec = con.getSlot("slotAEC");
          const nak = con.getSlot("slotNaked");
          const scr = con.getSlot("slotScroll");
          const enc = con.getSlot("slotEnchant");
          const pos = Player.getPosition();
          let lev = ENC[scr.data].nonlvl ? 1 : 10;
          let cv = aec.extra.getInt("cv");;
          if(enc.id){
            con.dropSlot("slotEnchant", pos.x, pos.y, pos.z);
            while(cv < 30000 / ENC[scr.data].weight * Math.pow(3, lev / 3)){
              if(!--lev){
                break;
              }
            }
            aec.extra.putInt("cv", cv - 30000 / ENC[scr.data].weight * Math.pow(3, lev / 3));
            cv = aec.extra.getInt("cv");
            cv ? aec.data = Math.min(28, cv / 0x90000 | 0) : allClear(aec);
            allClear(nak);
          }
        }}
      },
      "textAEC": {type: "text", x: 600, y: 40, font: {size: 12}},
      "textNeed1": {type: "text", x: 830, y: 170, font: {size: 12}},
      "textNeed2": {type: "text", x: 465, y: 290, font: {size: 12}}
    }
  })
};




// file: tile/rejuvenator/tile.js

IDRegistry.genBlockID("rejuvenator");
Block.createBlock("rejuvenator", [{name: "Alchemy Rejuvenator", texture: [["anvil_base", 0], ["rejuvenatorTop", 0], ["rejuvenatorSide", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.rejuvenator, "stone");
Block.setDestroyTime(BlockID.rejuvenator, 5);
Recipes.addShaped({id: BlockID.rejuvenator}, ["aba", "cdc", "eee"], ["a", 264, 0, "b", 116, 0, "c", 49, 0, "d", 145, 0, "e", 42, 0]);

Callback.addCallback("ItemUse", function(c, item, block){
  block.id == BlockID.rejuvenator && !Entity.getSneaking(Player.get()) &&
    Game.prevent() &
    guiRej.con.openAs(guiRej.win);
});

Callback.addCallback("tick", function(){
  const content = guiRej.con.getGuiContent();
  if(content){
    const res = guiRej.con.getSlot("slotResult");
    const enc = guiRej.con.getSlot("slotEnchant");
    const aec = guiRej.con.getSlot("slotAEC");
    const old = guiRej.con.getSlot("slotOld");
    const nak = guiRej.con.getSlot("slotNaked");
    const scr = guiRej.con.getSlot("slotScroll");
    let data;
    let cv = req1 = req2 = lev = 0;
    if(aec.id == ItemID.aec){
      cv = aec.extra.getInt("cv");
      CV[old.id] && CV[old.id].type && old.data &&
        (req1 = CV[old.id].cv * old.data / Item.getMaxDamage(old.id));
      ToolList[old.id] && Tool.getDur(old) &&
        (req1 = Tool.getCV(old) * Tool.getDur(old) / Tool.getMax(old));
      req1 = req1 * 0.7 | 0;
      if(CV[nak.id] && CV[nak.id].type && scr.id == ItemID.encScroll){
        const IDs = nak.extra ? nak.extra.getEnchants() : {};
        data = ENC[scr.data];
        let mask1 = 0;
        for(let i = data.target.length; i--;){
          mask1 |= guiRej.Flags[data.target[i]];
        }
        let mask2 = 0;
        for(let i = data.conflict.length; i--;){
          mask2 |= 1 << data.conflict[i];
        }
        let tool = 0;
        for(let key in IDs){
          tool |= 1 << key;
        }
        if(guiRej.Flags[CV[nak.id].type] & mask1 && !(tool & mask2)){
          lev = data.nonlvl ? 1 : 10;
          while(cv < 30000 / data.weight * Math.pow(3, lev / 3)){
            if(!--lev){
              break;
            }
          }
          lev && (req2 = 30000 / data.weight * Math.pow(3, lev / 3) | 0);
        }
      }
      req1 && cv >= req1?
        (res.id = old.id, res.count = 1) &
        (old.extra && (res.extra = old.extra.copy())) &
        (ToolList[old.id] && res.extra.putInt("dur", 0) & (res.data = old.data)) :
        allClear(res);
      req2 ?
        (enc.id = nak.id, enc.count = 1, enc.data = nak.data, enc.extra = nak.extra ? nak.extra.copy() : new ItemExtraData()) &
        enc.extra.addEnchant(scr.data, lev) :
        allClear(enc);
    }
    else{
      allClear(res);
      allClear(enc);
    }
    textCV(aec.extra, content.elements.textAEC);
    guiRej.con.setText("textNeed1", "Repair: " + req1);
    guiRej.con.setText("textNeed2", data ? (data.name + "(" + lev + "): " + req2) : "");
    if(!(World.getThreadTime() & 15)){
      const array = [];
      let target;
      for(let i = 2; i <= 6; i++){
        target = content.drawing[i];
        array.length = 0;
        for(let j = 0; j < 3; j++){
          array[array.length] = j;
        }
        array.splice(target.bitmap.slice(-1), 1);
        target.bitmap = target.bitmap.slice(0, -1) + array[Math.random() * 2 | 0];
      }
    }
  }
});

guiRej.con.setOnCloseListener({
  onClose: function(){
    returnSlot(guiRej.con, "slotAEC");
    returnSlot(guiRej.con, "slotOld");
    returnSlot(guiRej.con, "slotNaked");
    returnSlot(guiRej.con, "slotScroll");
    allClear(guiRej.con.getSlot("slotResult"));
    allClear(guiRej.con.getSlot("slotEnchant"));
  }
});




// file: tile/arbitrator/gui.js





// file: tile/arbitrator/tile.js

/*
IDRegistry.genBlockID("arbitrator");
Block.createBlock("arbitrator", [{name: "Alchemy Arbitrator", texture: [["dragon_egg", 0], ["arbitratorTop", 0], ["arbitratorSide", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.arbitrator, "stone");
Block.setDestroyTime(BlockID.arbitrator, 5);

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: BlockID.arbitrator},
    ["", "", ""],
    ["a", , 0, "b", , 0, "c", , 0, "d", , 0, "e", , 0]
  );
});*/




