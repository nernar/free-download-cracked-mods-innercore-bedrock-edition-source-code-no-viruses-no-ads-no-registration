/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 15
*/



// file: header.js

/*
┏━┓┏━┓╋╋╋╋╋╋╋╋╋┏┓╋╋╋╋╋╋╋╋
┃┃┗┛┃┃╋╋╋╋╋╋╋╋╋┃┃╋╋╋╋╋╋╋╋
┃┏┓┏┓┣┳━┓┏━━┳━━┫┗━┳━━┳┓┏┓
┃┃┃┃┃┣┫┏┓┫┃━┫┏━┫┏┓┃┃━┫┗┛┃
┃┃┃┃┃┃┃┃┃┃┃━┫┗━┫┃┃┃┃━┫┃┃┃
┗┛┗┛┗┻┻┛┗┻━━┻━━┻┛┗┻━━┻┻┻┛
by NikuJagajaga
*/

IMPORT("energylib");


const ag = android.graphics;

(function(){
  const down = FileTools.ReadImage(__dir__ + "res/gui/chem_triangle_down.png");
  const matrix = new ag.Matrix();
  matrix.preScale(1, -1);
  const up = new ag.Bitmap.createBitmap(down, 0, 0, 15, 8, matrix, false);
  UI.TextureSource.put("chem_triangle_up", up);
  matrix.postRotate(90);
  const right = new ag.Bitmap.createBitmap(down, 0, 0, 15, 8, matrix, false);
  UI.TextureSource.put("chem_triangle_right", right);
  const back = ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
  const cvs = new ag.Canvas(back);
  const paint = new ag.Paint();
  paint.setColor(ag.Color.BLACK);
  cvs.drawRect(0, 0, 16, 16, paint);
  UI.TextureSource.put("chem_back", back);
})();


Callback.addCallback("PostLoaded", function(){
  const EU = EnergyTypeRegistry.getEnergyType("Eu");
  const RF = EnergyTypeRegistry.getEnergyType("RF");
  if(EU){
    ICRender.getGroup("ic-wire").add(BlockID.decomposer, 0);
    ICRender.getGroup("ic-wire").add(BlockID.synthesiser, -1);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.decomposer, EU);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.synthesiser, EU);
  }
  if(RF){
    ICRender.getGroup("rf-wire").add(BlockID.decomposer, 0);
    ICRender.getGroup("rf-wire").add(BlockID.synthesiser, -1);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.decomposer, RF);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.synthesiser, RF);
  }
  ICRender.getGroup("item-pipe").add(BlockID.decomposer, 0);
  ICRender.getGroup("item-pipe").add(BlockID.synthesiser, -1);
});




// file: api/IconUtil.js

const IconUtil = {

  charWidth: {
    73: 4,
    102: 5,
    105: 2,
    107: 5,
    108: 3,
    116: 4
  },

  color: {
    darkblue: "#0000ff",
    blue: "#0080ff",
    lightblue: "#00ffff",
    orange: "#ff7f00",
    yellow: "#ffff00",
    pink: "#ff00ff",
    red: "#ff0000",
    green: "#00ff00",
    bluegreen: "#00ff7f",
    lightgreen: "#85ff00"
  },

  bitmap: {
    ascii: FileTools.ReadImage(__dir__ + "res/material/ascii.png"),
    tube1: FileTools.ReadImage(__dir__ + "res/material/tube1.png"),
    tube2: FileTools.ReadImage(__dir__ + "res/material/tube2.png"),
    solid: FileTools.ReadImage(__dir__ + "res/material/solid.png"),
    liquid: FileTools.ReadImage(__dir__ + "res/material/liquid.png"),
    gas: FileTools.ReadImage(__dir__ + "res/material/gas.png"),
    molecule1: FileTools.ReadImage(__dir__ + "res/material/molecule1.png"),
    molecule2: FileTools.ReadImage(__dir__ + "res/material/molecule2.png")
  },

  genElement: function(symbol, color, type){
    const path = __dir__ + "res/items-opaque/element/element_" + symbol + ".png";
    if(FileTools.isExists(path)){
      return;
    }
    const bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
    const cvs = new ag.Canvas(bmp);
    const paint = new ag.Paint();
    paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor(this.color[color]), ag.PorterDuff.Mode.SRC_IN));
    cvs.drawBitmap(this.bitmap[type], 0, 0, paint);
    cvs.drawBitmap(this.bitmap.tube1, 0, 0, null);
    paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor("black"), ag.PorterDuff.Mode.SRC_IN));
    let code = x = y = pos = 0;
    let rect;
    for(let i = 0; i < symbol.length; i++){
      code = symbol.charCodeAt(i);
      x = (code & 15) * 8;
      y = (code / 16 | 0) * 8;
      rect = new ag.Rect(x, y, x + 8, y + 8);
      cvs.drawBitmap(this.bitmap.ascii, rect, new ag.Rect(pos, 1, pos + 8, 9), paint);
      cvs.drawBitmap(this.bitmap.ascii, rect, new ag.Rect(pos, 0, pos + 8, 8), null);
      pos += this.charWidth[code] || 6;
    }
    FileTools.WriteImage(path, bmp);
  },

  genMolecule: function(key, colors){
    const path = __dir__ + "res/items-opaque/molecule/molecule_" + key + ".png";
    if(FileTools.isExists(path)){
      return;
    }
    const bmp = new ag.Bitmap.createBitmap(16, 16, ag.Bitmap.Config.ARGB_8888);
    const cvs = new ag.Canvas(bmp);
    const paint = new ag.Paint();
    colors || (colors = this.getColors(key));

    paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor(colors[0]), ag.PorterDuff.Mode.SRC_IN));
    cvs.drawBitmap(this.bitmap.molecule1, 0, 0, paint);
    paint.setColorFilter(new ag.PorterDuffColorFilter(ag.Color.parseColor(colors[1]), ag.PorterDuff.Mode.SRC_IN));
    cvs.drawBitmap(this.bitmap.molecule2, 0, 0, paint);
    cvs.drawBitmap(this.bitmap.tube2, 0, 0, null);
    FileTools.WriteImage(path, bmp);
  },

  getColors: function(str){
    let hash = 0;
    for(let i = 0; i < str.length; i++){
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      if(hash < 0){
        hash *= -1;
      }
      hash |= 0;
    }
    return[
      this.getHex([this.seededRandom(hash), this.seededRandom(hash * 2), this.seededRandom(hash * 3)]),
      this.getHex([this.seededRandom(hash * 4), this.seededRandom(hash * 5), this.seededRandom(hash * 6)])
    ];
  },

  getHex: function(rgb){
    return "#" + rgb.map(function(value){
      value *= 256;
      return ("0" + value.toString(16)).slice(-2);
    }).join("") ;
  },

  seededRandom: function(seed){
    return ((seed * 9301 + 49297) % 233280) / 233280;
  }

};




// file: api/Chemistry.js

const Elem = {};
const Mol = {};

const Chemistry = {

  debug: __config__.getBool("debug"),
  type: {},
  researchList: [],

  registerElement: function(number, symbol, name, color, type){
    const id = "MinechemElement_" + number;
    IconUtil.genElement(symbol, color, type || "solid");
    IDRegistry.genItemID(id);
    Item.createItem(id, name + "\n§9" + symbol + " (" + number + ")", {name: "element_" + symbol}, {isTech: !this.debug});
    Elem[symbol] = ItemID[id];
    this.type[symbol] = type || "solid";
  },

  registerMolecule: function(key, name, formation, type, color){
    const id = "MinechemMolecule_" + key;
    IconUtil.genMolecule(key, color);
    IDRegistry.genItemID(id);
    Item.createItem(id, name, {name: "molecule_" + key}, {isTech: !this.debug});
    Mol[key] = ItemID[id];
    this.type[key] = type || "solid";
    const array = [];
    for(let key2 in formation){
      array.push([key2, formation[key2]]);
    }
    Decomposer.addRecipe(Mol[key], -1, formation);
    Synthesiser.addRecipe({id: Mol[key]}, "ITEM", array);
  },

  isElem: function(id){
    for(let key in Elem){
      if(Elem[key] == id){
        return true;
      }
    }
    return false;
  },

  isMol: function(id){
    for(let key in Mol){
      if(Mol[key] == id){
        return true;
      }
    }
    return false;
  },

  addList: function(id, data){
    if(!~this.researchList.indexOf(id + ":" + data)){
      this.researchList.push(id + ":" + data);
      this.sortList();
      alert("You taken a note about composition of " + Item.getName(id, data));
    }
  },

  sortList: function(){
    this.researchList.sort(function(a, b){
      const A = a.split(":");
      const B = b.split(":");
      return A[0] - B[0] || A[1] - B[1];
    });
  }

};


Saver.addSavesScope("MinechemScope",
  function read(scope){
    if(!scope.research){
      return;
    }
    for(let i = scope.research.length; i--;){
      Chemistry.researchList.push(scope.research[i]);
    }
    Chemistry.sortList();
  },
  function save(){
    const scope = {
      research: []
    };
    for(let i = Chemistry.researchList.length; i--;){
      scope.research.push(Chemistry.researchList[i]);
    }
    return scope;
  }
);


Callback.addCallback("NativeCommand", function(cmd){
  cmd = cmd.split(" ");
  if(cmd[0] == "/minechem" && cmd[1] == "research"){
    if(cmd[2] == "all"){
      Chemistry.researchList = [];
      for(let key in Synthesiser.data){
        Chemistry.researchList.push(Synthesiser.data[key].id + ":" + Synthesiser.data[key].data);
      }
      Chemistry.sortList();
      alert("[Minechem]: Research All");
    }
    if(cmd[2] == "reset"){
      Chemistry.researchList = [];
      alert("[Minechem]: Research Reset");
    }
  }
});




// file: api/Machine.js

const Machine = {

  gui: {},

  registerGUI: function(key, name, prototype, slots, validFunc){
    prototype.standart = {
      header: {text: {text: name}},
      inventory: {standart: true},
      background: {standart: true}
    };
    if(slots){
      for(let i = 18; i--;){
        prototype.elements["slot" + i] = {type: "slot", x: 60 * (i % 9) + 390, y: 60 * (i / 9 | 0) + 270, isValid: validFunc};
      }
    }
    this.gui[key] = new UI.StandartWindow(prototype);
  },

  getRotation: function(){
    let yaw = Entity.getLookAngle(Player.get()).yaw * 180 / Math.PI;
    yaw = Math.floor((yaw - 45) % 360 / 90);
    if(yaw < 0){
      yaw += 4;
    }
    return [2, 0, 3, 1][yaw];
  },

  translateModel: function(parts, meta){
    let c, size;
    for(let i = parts.length; i--;){
      c = parts[i].coords;
      size = parts[i].size;
      parts[i].type = "box";
      c.x += size.x / 2 + 8;
      c.y += size.y / 2;
      c.z += size.z / 2 - 8;
      switch(meta){
        case 1:
          c.z *= -1;
          c.z -= 16;
          break;
        case 2:
          [c.x, c.z] = [c.z, c.x];
          c.x *= -1;
          c.z -= 16;
          [size.x, size.z] = [size.z, size.x];
          break;
        case 3:
          [c.x, c.z] = [c.z, c.x];
          c.x += 16;
          c.z -= 16;
          [size.x, size.z] = [size.z, size.x];
          break;
      }
    }
  },

  armPosition: function(timer, start, end, v1, v2){
    return v1 + (timer - start) / (end - start) * (v2 - v1);
  },

  energyTick: function(type, src){
    const modifier = type == "Eu" ? 4 : 1;
    this.data.energy += src.getAll((this.getEnergyStorage() - this.data.energy) / modifier | 0) * modifier;
  },

  validResult: function(){
    return false;
  },

  input: {
    onClick: function(con){
      let i = j = 0;
      let inv;
      let slot;
      let min = 0;
      for(i = 9; i <= 44; i++){
        inv = Player.getInventorySlot(i);
        if(!Chemistry.isElem(inv.id) && !Chemistry.isMol(inv.id)){
          continue;
        }
        for(j = 0; j < 18; j++){
          slot = con.getSlot("slot" + j);
          if(!slot.id || slot.id == inv.id && slot.count < 64){
            min = Math.min(inv.count, 64 - slot.count);
            inv.count -= min;
            slot.id = inv.id;
            slot.count += min;
            if(!inv.count){
              Player.setInventorySlot(i, 0);
              break;
            }
          }
          Player.setInventorySlot(i, inv.id, inv.count);
        }
      }
    }
  },

  output: {
    onClick: function(con){
      let i = j = 0;
      let slot;
      let inv;
      let min = 0;
      for(i = 18; i--;){
        slot = con.getSlot("slot" + i);
        for(j = 9; j <= 44; j++){
          inv = Player.getInventorySlot(j);
          if(!inv.id || inv.id == slot.id && inv.count < 64){
            min = Math.min(slot.count, 64 - inv.count);
            slot.count -= min;
            Player.setInventorySlot(j, slot.id, inv.count + min, 0);
            con.validateSlot("slot" + i);
            if(!slot.count){
              break;
            }
          }
        }
      }
    }
  }

};


const Decomposer = {

  chance: {},
  dataSolid: {},
  dataLiquid: {},

  decode: function(obj){
    const result = [];
    for(let key in obj){
    for(let i = obj[key]; i--;){
      result.push(Elem[key] || Mol[key] || "");
    }
    }
    return result;
  },

  addRecipe: function(id, data, obj, chance){
    const result = this.decode(obj);
    this.dataSolid[data == -1 ? id : id + ":" + data] = chance ?
      function(){
        if(Math.random() < chance){
          return result;
        }
        return [];
      } :
      function(){
        return result;
      };
  },

  addRecipeSelect: function(id, data, array, chance){
    for(let i = array.length; i--;){
      array[i] = this.decode(array[i]);
    }
    this.dataSolid[data == -1 ? id : id + ":" + data] = chance ?
      function(){
        if(Math.random() < chance){
          return array[Math.random() * array.length | 0];
        }
        return [];
      } :
      function(){
        return array[Math.random() * array.length | 0];
      };
  },

  getRecipe: function(id, data){
    return this.dataSolid[id] || this.dataSolid[id + ":" + data];
  },

  addRecipeLiquid: function(liquid, amount, obj, chance){
    const result = this.decode(obj);
    this.dataLiquid[liquid] = {amount: amount, func: chance ? 
      function(){
        if(Math.random() < chance){
          return result;
        }
        return [];
      } :
      function(){
        return result;
      }
    };
  },

  addRecipeLiquidSelect: function(liquid, amount, array, chance){
    for(let i = array.length; i--;){
      array[i] = this.decode(array[i]);
    }
    this.dataLiquid[liquid] = {amount: amount, func: chance ?
      function(){
        if(Math.random() < chance){
          return array[Math.random() * array.length | 0];
        }
        return [];
      } :
      function(){
        return array[Math.random() * array.length | 0];
      }
    };
  },

  getRecipeLiquid: function(liquid){
    return this.dataLiquid[liquid];
  }

};


const Synthesiser = {

  cost: {
    INGOT: 3000,
    METALBLOCK: 24000,
    BLOCK: 150,
    ITEM: 100,
    PLANK: 200,
    WOOD: 800,
    LAPIS: 200,
    LAPISBLOCK: 1600,
    GRASS: 400,
    SMOOTH: 300,
    STAR: 60000,
    SUGAR: 300,
    GLOW: 700,
    GLOWBLOCK: 2800,
    TEAR: 30000,
    OBSIDIAN: 1000,
    PLANT: 2000,
    FOOD: 2500,
    GLASS: 3000,
    PANE: 1000,
    WOOL: 2000,
    CARPET: 1000,
    GEM: 10000,
    GEMBLOCK: 80000
  },

  data: {},

  addRecipe: function(result, type, pattern, shaped){
    result.count = result.count || 1;
    result.data = result.data || 0;
    result.cost = this.cost[type];
    if(shaped){
      for(let i = 0; i < 9; i++){
        pattern[i] = pattern[i] ? (Elem[pattern[i][0]] || Mol[pattern[i][0]]) + ":" + pattern[i][1] : "0:0";
      }
      this.data[pattern.join(",")] = result;
      return;
    }
    const obj = {};
    const arr = [];
    for(let i = pattern.length; i--;){
      obj[pattern[i][0]] = (obj[pattern[i][0]] || 0) + pattern[i][1];
    }
    for(let key in obj){
      arr.push((Elem[key] || Mol[key]) + ":" + obj[key]);
    }
    this.data[arr.sort().join(",")] = result;
  },

  getRecipe: function(pattern){
    const obj = {};
    let str = "";
    for(let i = 9; i--;){
      if(pattern[i][0]){
        obj[pattern[i][0]] = (obj[pattern[i][0]] || 0) + pattern[i][1];
      }
      pattern[i] = pattern[i].join(":");
    }
    str = pattern.join(",");
    if(this.data[str]){
      return this.data[str];
    }
    const arr = [];
    for(let key in obj){
      arr.push(key + ":" + obj[key]);
    }
    str = arr.sort().join(",");
    return this.data[str];
  },

  getPattern: function(id, data, raw){
    for(let key in this.data){
      if(this.data[key].id == id && this.data[key].data == data){
        return raw ? key : this.decodePattern(key);
      }
    }
  },

  decodePattern: function(str){
    str = str.split(",");
    for(let i = str.length; i--;){
      str[i] = str[i].split(":");
    }
    return str;
  },

  time: 0,

  validPattern: function(num){
    return function(id, count, data, con){
      const time = World.getThreadTime();
      if(Math.abs(time - Synthesiser.time) <= 2){
        return false;
      }
      Synthesiser.time = time;
      const slot = con.getSlot("slotPattern" + num);
      if((Chemistry.isElem(id) || Chemistry.isMol(id)) && (!slot.id || slot.id == id && slot.count < 64)){
        slot.id = id;
        slot.data = data;
        slot.count++;
        con.getGuiContent().elements["slotPattern" + num].visual = true;
      }
      return false;
    };
  },

  clearSlot: function(num){
    return {
      onLongClick: function(con){
        con.getGuiContent().elements["slotPattern" + num].visual = false;
        con.clearSlot("slotPattern" + num);
      }
    };
  },

  craftSlot: function(long){
    return function(con, tile){
      if(tile.data.energy < tile.cost){
        alert("Energy is not enough!");
        return;
      }
      const require = {};
      const stock = {};
      let i = 0;
      let id = "";
      let slot;
      for(i = 9; i--;){
        slot = con.getSlot("slotPattern" + i);
        if(slot.id){
          require[slot.id] = (require[slot.id] || 0) + slot.count;
        }
      }
      for(i = 18; i--;){
        slot = con.getSlot("slot" + i);
        if(slot.id){
          stock[slot.id] = (stock[slot.id] || 0) + slot.count;
        }
      }
      const array = [];
      for(id in require){
        array.push((stock[id] || 0) / require[id] | 0);
      }
      let craftCount = Math.min(Math.min.apply(null, array), tile.data.energy / tile.cost | 0);
      if(!craftCount){
        return;
      }
      if(long){
        for(id in require){
          require[id] *= craftCount;
        }
      }
      else{
        craftCount = 1;
      }
      let min = 0;
      for(i = 18; i--;){
        slot = con.getSlot("slot" + i);
        if(require[slot.id]){
          min = Math.min(require[slot.id], slot.count);
          require[slot.id] -= min;
          slot.count -= min;
          con.validateSlot("slot" + i);
        }
      }
      tile.data.energy -= tile.cost * craftCount;
      const result = con.getSlot("slotResult");
      let count = result.count * craftCount;
      for(i = 9; i <= 44; i++){
        slot = Player.getInventorySlot(i);
        if(!slot.id || slot.id == result.id && slot.count < 64){
          min = Math.min(count, 64 - slot.count);
          count -= min;
          Player.setInventorySlot(i, result.id, slot.count + min);
          if(!count){
            return;
          }
        }
      }
      World.drop(tile.x + 0.5, tile.y + 1, tile.z + 0.5, result.id, count);
    };
  },

};


const Microscope = {

  container: new UI.Container(),

  validSample: function(id, count, data, con){
    const slot = con.getSlot("slotSample");
    if(!slot.id){
      slot.id = id;
      slot.data = data;
      slot.count = 1;
      con.getGuiContent().elements.slotSample.visual = true;
      const raw = Synthesiser.getPattern(id, data, true);
      if(raw){
        const pattern = Synthesiser.decodePattern(raw);
        const journal = con.getSlot("slotJournal");
        for(let i = 9; i--;){
          pattern[i] ?
            con.setSlot("slot" + i, pattern[i][0], pattern[i][1], 0) :
            con.clearSlot("slot" + i);
        }
        if(journal.id == ItemID.chemist_journal){
          journal.extra = new ItemExtraData();
          journal.extra.putString("pattern", raw);
          Chemistry.addList(id, data);
        }
      }
    }
    return false;
  },

  clearSample: {
    onLongClick: function(con){
      for(let i = 9; i--;){
        con.clearSlot("slot" + i);
      }
      con.clearSlot("slotSample");
      con.getGuiContent().elements.slotSample.visual = false;
    }
  },

  funcName: function(num){
    return function(con){
      alert(Item.getName(con.getSlot("slot" + num).id).split("\n")[0]);
    };
  },

  slotInfo: function(num){
    return {
      onClick: this.funcName(num)
    };
  }

};


/*
const obj = {
  base: [[-7, 22, -7], [14, 2, 14]],
  neck_lower: [[-2, 16, -7], [4, 6, 4]],
  platter: [[-4, 18, -4], [8, 1, 8]],
  light: [[-1, 20, -1], [2, 2, 2]],
  neck_upper: [[-1, 11, -3], [2, 6, 2]],
  top: [[-2, 11, -3], [4, 2, 5]],
  eyepiece: [[-0.5, 9, -6], [1, 4, 1]],
  lens1: [[-0.5, 13, -0.5], [1, 3, 1]],
  lens2: [[0.3666667, 11.93333, 1.1], [1, 3, 1]],
  lens3: [[-0.2, 11.73333, 1.2], [1, 3, 1]],
  focus_right: [[3, 17, -7], [1, 2, 2]],
  focus_left: [[-4, 17, -7], [1, 2, 2]],
  axle: [[-3, 17.5, -6.5], [6, 1, 1]]
};

let c, s;
for(let key in obj){
  c = obj[key][0];
  s = obj[key][1];
  c[0] += s[0] / 2;
  c[1] += s[1] / 2;
  c[2] += s[2] / 2;
  c[0] = 0.5 - c[0] / 16;
  c[1] = (24 - c[1]) / 16;
  c[2] = -0.5 + c[2] / 16;
  for(let i = 3; i--;)s[i] /= 32;
  alert(key + ": \ncoords:  x = " + c[0] + ",  y = " + c[2] + ",  z = " + c[1] + "\nsize:  x = " + s[0] + ",  y = " + s[2] + ",  z = " + s[1]);
}
*/




// file: api/share.js

ModAPI.registerAPI("ChemCore", {
  Element: Elem,
  Molecule: Mol,
  IconUtil: IconUtil,
  Chemistry: Chemistry,
  Decomposer: Decomposer,
  Synthesiser: Synthesiser
});




// file: item/element.js

Chemistry.registerElement(1, "H", "Hydrogen", "orange", "gas");
Chemistry.registerElement(2, "He", "Helium", "lightblue", "gas");
Chemistry.registerElement(3, "Li", "Lithium", "green");
Chemistry.registerElement(4, "Be", "Beryllium", "darkblue");
Chemistry.registerElement(5, "B", "Boron", "bluegreen");
Chemistry.registerElement(6, "C", "Carbon", "orange");
Chemistry.registerElement(7, "N", "Nitrogen", "orange", "gas");
Chemistry.registerElement(8, "O", "Oxygen", "orange", "gas");
Chemistry.registerElement(9, "F", "Fluorine", "yellow", "gas");
Chemistry.registerElement(10, "Ne", "Neon", "lightblue", "gas");
Chemistry.registerElement(11, "Na", "Sodium", "green");
Chemistry.registerElement(12, "Mg", "Magnesium", "darkblue");
Chemistry.registerElement(13, "Al", "Aluminium", "lightgreen");
Chemistry.registerElement(14, "Si", "Silicon", "lightgreen");
Chemistry.registerElement(15, "P", "Phosphorus", "orange");
Chemistry.registerElement(16, "S", "Sulfur", "orange");
Chemistry.registerElement(17, "Cl", "Chlorine", "yellow", "gas");
Chemistry.registerElement(18, "Ar", "Argon", "lightblue", "gas");
Chemistry.registerElement(19, "K", "Potassium", "green");
Chemistry.registerElement(20, "Ca", "Calcium", "darkblue");
Chemistry.registerElement(21, "Sc", "Scandium", "blue");
Chemistry.registerElement(22, "Ti", "Titanium", "blue");
Chemistry.registerElement(23, "V", "Vanadium", "blue");
Chemistry.registerElement(24, "Cr", "Chromium", "blue");
Chemistry.registerElement(25, "Mn", "Manganese", "blue");
Chemistry.registerElement(26, "Fe", "Iron", "blue");
Chemistry.registerElement(27, "Co", "Cobalt", "blue");
Chemistry.registerElement(28, "Ni", "Nickel", "blue");
Chemistry.registerElement(29, "Cu", "Copper", "blue");
Chemistry.registerElement(30, "Zn", "Zinc", "blue");
Chemistry.registerElement(31, "Ga", "Gallium", "lightgreen");
Chemistry.registerElement(32, "Ge", "Germanium", "bluegreen");
Chemistry.registerElement(33, "As", "Arsenic", "bluegreen");
Chemistry.registerElement(34, "Se", "Selenium", "orange");
Chemistry.registerElement(35, "Br", "Bromine", "yellow", "liquid");
Chemistry.registerElement(36, "Kr", "Krypton", "lightblue", "gas");
Chemistry.registerElement(37, "Rb", "Rubidium", "green");
Chemistry.registerElement(38, "Sr", "Strontium", "darkblue");
Chemistry.registerElement(39, "Y", "Yttrium", "blue");
Chemistry.registerElement(40, "Zr", "Zirconium", "blue");
Chemistry.registerElement(41, "Nb", "Niobium", "blue");
Chemistry.registerElement(42, "Mo", "Molybdenum", "blue");
Chemistry.registerElement(43, "Tc", "Technetium", "blue");
Chemistry.registerElement(44, "Ru", "Ruthenium", "blue");
Chemistry.registerElement(45, "Rh", "Rhodium", "blue");
Chemistry.registerElement(46, "Pd", "Palladium", "blue");
Chemistry.registerElement(47, "Ag", "Silver", "blue");
Chemistry.registerElement(48, "Cd", "Cadmium", "blue");
Chemistry.registerElement(49, "In", "Indium", "lightgreen");
Chemistry.registerElement(50, "Sn", "Tin", "lightgreen");
Chemistry.registerElement(51, "Sb", "Antimony", "bluegreen");
Chemistry.registerElement(52, "Te", "Tellurium", "bluegreen");
Chemistry.registerElement(53, "I", "Iodine", "yellow");
Chemistry.registerElement(54, "Xe", "Xenon", "lightblue", "gas");
Chemistry.registerElement(55, "Cs", "Caesium", "green");
Chemistry.registerElement(56, "Ba", "Barium", "darkblue");
Chemistry.registerElement(57, "La", "Lanthanum", "pink");
Chemistry.registerElement(58, "Ce", "Cerium", "pink");
Chemistry.registerElement(59, "Pr", "Praseodymium", "pink");
Chemistry.registerElement(60, "Nd", "Neodymium", "pink");
Chemistry.registerElement(61, "Pm", "Promethium", "pink");
Chemistry.registerElement(62, "Sm", "Samarium", "pink");
Chemistry.registerElement(63, "Eu", "Europium", "pink");
Chemistry.registerElement(64, "Gd", "Gadolinium", "pink");
Chemistry.registerElement(65, "Tb", "Terbium", "pink");
Chemistry.registerElement(66, "Dy", "Dysprosium", "pink");
Chemistry.registerElement(67, "Ho", "Holmium", "pink");
Chemistry.registerElement(68, "Er", "Erbium", "pink");
Chemistry.registerElement(69, "Tm", "Thulium", "pink");
Chemistry.registerElement(70, "Yb", "Ytterbium", "pink");
Chemistry.registerElement(71, "Lu", "Lutetium", "pink");
Chemistry.registerElement(72, "Hf", "Hafnium", "blue");
Chemistry.registerElement(73, "Ta", "Tantalum", "blue");
Chemistry.registerElement(74, "W", "Tungsten", "blue");
Chemistry.registerElement(75, "Re", "Rhenium", "blue");
Chemistry.registerElement(76, "Os", "Osmium", "blue");
Chemistry.registerElement(77, "Ir", "Iridium", "blue");
Chemistry.registerElement(78, "Pt", "Platinum", "blue");
Chemistry.registerElement(79, "Au", "Gold", "blue");
Chemistry.registerElement(80, "Hg", "Mercury", "blue", "liquid");
Chemistry.registerElement(81, "Tl", "Thallium", "lightgreen");
Chemistry.registerElement(82, "Pb", "Lead", "lightgreen");
Chemistry.registerElement(83, "Bi", "Bismuth", "lightgreen");
Chemistry.registerElement(84, "Po", "Polonium", "bluegreen");
Chemistry.registerElement(85, "At", "Astatine", "yellow");
Chemistry.registerElement(86, "Rn", "Radon", "lightblue", "gas");
Chemistry.registerElement(87, "Fr", "Francium", "green");
Chemistry.registerElement(88, "Ra", "Radium", "darkblue");
Chemistry.registerElement(89, "Ac", "Actinium", "red");
Chemistry.registerElement(90, "Th", "Thorium", "red");
Chemistry.registerElement(91, "Pa", "Protactinium", "red");
Chemistry.registerElement(92, "U", "Uranium", "red");
Chemistry.registerElement(93, "Np", "Neptunium", "red");
Chemistry.registerElement(94, "Pu", "Plutonium", "red");
Chemistry.registerElement(95, "Am", "Americium", "red");
Chemistry.registerElement(96, "Cm", "Curium", "red");
Chemistry.registerElement(97, "Bk", "Berkelium", "red");
Chemistry.registerElement(98, "Cf", "Californium", "red");
Chemistry.registerElement(99, "Es", "Einsteinium", "red");
Chemistry.registerElement(100, "Fm", "Fermium", "red");
Chemistry.registerElement(101, "Md", "Mendelevium", "red");
Chemistry.registerElement(102, "No", "Nobelium", "red");
Chemistry.registerElement(103, "Lr", "Lawrencium", "red");
Chemistry.registerElement(104, "Rf", "Rutherfordium", "blue");
Chemistry.registerElement(105, "Db", "Dubnium", "blue");
Chemistry.registerElement(106, "Sg", "Seaborgium", "blue");
Chemistry.registerElement(107, "Bh", "Bohrium", "blue");
Chemistry.registerElement(108, "Hs", "Hassium", "blue");
Chemistry.registerElement(109, "Mt", "Meitnerium", "blue");
Chemistry.registerElement(110, "Ds", "Darmstadtium", "blue");
Chemistry.registerElement(111, "Rg", "Roentgenium", "blue");
Chemistry.registerElement(112, "Cn", "Copernicium", "blue");
Chemistry.registerElement(113, "Nh", "Nihonium", "blue");

Recipes.addFurnaceFuel(Elem.C, 0, 200);
Recipes.addFurnaceFuel(Elem.H, 0, 100);
Recipes.addFurnaceFuel(Elem.S, 0, 300);
Recipes.addFurnaceFuel(Elem.P, 0, 250);




// file: item/molecule.js

Chemistry.registerMolecule("cellulose", "Cellulose", {C: 6, H: 10, O: 5}, "solid", ["#00ff00", "#003f00"]);
Chemistry.registerMolecule("water", "Water", {H: 2, O: 1}, "liquid", ["#0000ff", "#0000ff"]);
Chemistry.registerMolecule("carbonDioxide", "Carbon Dioxide", {C: 1, O: 2}, "gas", ["#7f7f7f", "#3f3f3f"]);
Chemistry.registerMolecule("nitrogenDioxide", "Nitrogen Dioxide", {N: 1, O: 2}, "gas", ["#ffa600", "#7f242f"]);
Chemistry.registerMolecule("toluene", "Toluene", {C: 7, H: 8}, "liquid", ["#ffffff", "#cccccc"]);
Chemistry.registerMolecule("potassiumNitrate", "Potassium Nitrate", {K: 1, N: 1, O: 3}, "solid", ["#e6e6e6", "#cccccc"]);
Chemistry.registerMolecule("tnt", "Trinitrotoluene", {C: 6, H: 2, nitrogenDioxide: 3, toluene: 1}, "solid", ["#ffff00", "#ffa600"]);
Chemistry.registerMolecule("siliconDioxide", "Silicon Dioxide", {Si: 1, O: 2}, "solid", ["#ffffff", "#ffffff"]);
Chemistry.registerMolecule("calcicPyroxene", "Calcicpyroxene", {Ca: 1, Cr: 1, Si: 2, O: 6});
Chemistry.registerMolecule("pyrite", "Pyrite", {Fe: 1, S: 2});
Chemistry.registerMolecule("nepheline", "Nepheline", {Al: 1, Si: 1, O: 4});
Chemistry.registerMolecule("sulfate", "Sulfate (ion)", {S: 1, O: 4});
Chemistry.registerMolecule("noselite", "Noselite", {Na: 8, nepheline: 6, sulfate: 1});
Chemistry.registerMolecule("sodalite", "Sodalite", {Na: 8, nepheline: 6, Cl: 2});
Chemistry.registerMolecule("nitrate", "Nitrate (ion)", {N: 1, O: 3});
Chemistry.registerMolecule("carbonate", "Carbonate (ion)", {C: 1, O: 3});
Chemistry.registerMolecule("cyanide", "Potassium Cyanide", {K: 1, C: 1, N: 1}, "liquid");
Chemistry.registerMolecule("phosphate", "Phosphate (ion)", {P: 1, O: 4});
Chemistry.registerMolecule("acetate", "Acetate (ion)", {C: 2, H: 3, O: 2});
Chemistry.registerMolecule("chromate", "Chromate (ion)", {Cr: 1, O: 4});
Chemistry.registerMolecule("hydroxide", "Hydroxide (ion)", {O: 1, H: 1}, "liquid");
Chemistry.registerMolecule("ammonium", "Ammonium (ion)", {N: 1, H: 4}, "liquid");
Chemistry.registerMolecule("hydronium", "Hydronium (ion)", {H: 3, O: 1}, "liquid");
Chemistry.registerMolecule("peroxide", "Peroxide (ion)", {O: 2}, "liquid");
Chemistry.registerMolecule("calciumOxide", "Calcium Oxide", {Ca: 1, O: 1});
Chemistry.registerMolecule("calciumCarbonate", "Calcium Carbonate", {Ca: 1, carbonate: 1});
Chemistry.registerMolecule("magnesiumCarbonate", "Magnesium Carbonate", {Mg: 1, carbonate: 1});
Chemistry.registerMolecule("lazurite", "Lazurite", {Na: 8, nepheline: 1, sulfate: 1});
Chemistry.registerMolecule("isoprene", "Isoprene", {C: 5, H: 8});
Chemistry.registerMolecule("butene", "Butene", {C: 4, H: 8}, "gas");
Chemistry.registerMolecule("polyisobutylene", "Polyisobutylene Rubber", {butene: 16, isoprene: 1}, "liquid");
Chemistry.registerMolecule("malicAcid", "Malic Acid", {C: 4, H: 6, O: 5});
Chemistry.registerMolecule("vinylChloride", "Vinyl Chloride Monomer", {C: 2, H: 3, Cl: 1}, "gas");
Chemistry.registerMolecule("polyvinylChloride", "Polyvinyl Chloride", {vinylChloride: 64});
Chemistry.registerMolecule("methamphetamine", "Methamphetamine", {C: 10, H: 15, N: 1});
Chemistry.registerMolecule("psilocybin", "Psilocybin", {C: 12, H: 17, N: 2, O: 4, P: 1});
Chemistry.registerMolecule("iron3oxide", "Iron (iii) Oxide", {Fe: 2, O: 3});
Chemistry.registerMolecule("strontiumNitrate", "Strontium Nitrate", {Sr: 1, nitrate: 2});
Chemistry.registerMolecule("magnetite", "Magnetite", {Fe: 3, O: 4});
Chemistry.registerMolecule("magnesiumOxide", "Magnesium Oxide", {Mg: 1, O: 1});
Chemistry.registerMolecule("cucurbitacin", "Cucurbitacin", {C: 30, H: 42, O: 7});
Chemistry.registerMolecule("asparticAcid", "Aspartic Acid", {C: 4, H: 7, N: 1, O: 4});
Chemistry.registerMolecule("hydroxylapatite", "Hydroxylapatite", {Ca: 5, phosphate: 3, O: 1, H: 1});
Chemistry.registerMolecule("alinine", "Alanine", {C: 3, H: 7, N: 1, O: 2});
Chemistry.registerMolecule("glycine", "Glycine", {C: 2, H: 5, N: 1, O: 2});
Chemistry.registerMolecule("serine", "Serine", {C: 3, H: 7, nitrate: 1});
Chemistry.registerMolecule("mescaline", "Mescaline", {C: 11, H: 17, nitrate: 1});
Chemistry.registerMolecule("methyl", "Methyl (ion)", {C: 1, H: 3}, "liquid");
Chemistry.registerMolecule("methylene", "Methylene (ion)", {C: 1, H: 2}, "liquid");
Chemistry.registerMolecule("memethacrylate", "Methyl Methacrylate", {methyl: 3, C: 2, O: 2}, "liquid");
Chemistry.registerMolecule("pmma", "Polymethyl Methacrylate", {memethacrylate: 3});
Chemistry.registerMolecule("redPigment", "Cobalt(ii) Nitrate", {Co: 1, nitrate: 2});
Chemistry.registerMolecule("orangePigment", "Potassium Dichromate", {K: 2, Cr: 2, O: 7});
Chemistry.registerMolecule("yellowPigment", "Potassium Chromate", {Cr: 1, K: 2, O: 4});
Chemistry.registerMolecule("limePigment", "Nickel(ii) Chloride", {Ni: 1, Cl: 2});
Chemistry.registerMolecule("lightbluePigment", "Copper(ii) Sulfate", {Cu: 1, sulfate: 1});
Chemistry.registerMolecule("purplePigment", "Potassium Permanganate", {K: 1, Mn: 1, O: 4});
Chemistry.registerMolecule("greenPigment", "Zinc Green", {Co: 1, Zn: 1, O: 2});
Chemistry.registerMolecule("blackPigment", "Carbon Black", {C: 1, H: 2, O: 1}, "gas");
Chemistry.registerMolecule("whitePigment", "Titanium Dioxide", {Ti: 1, O: 2});
Chemistry.registerMolecule("metasilicate", "Metasilicate", {Si: 1, O: 3});
Chemistry.registerMolecule("beryl", "Beryl", {Be: 3, Al: 2, metasilicate: 6});
Chemistry.registerMolecule("ethanol", "Ethyl Alcohol", {C: 2, H: 5, hydroxide: 1}, "liquid");
Chemistry.registerMolecule("amphetamine", "Amphetamine", {C: 9, H: 13, N: 1}, "liquid");
Chemistry.registerMolecule("theobromine", "Theobromine", {C: 7, H: 8, N: 4, O: 2});
Chemistry.registerMolecule("starch", "Starch", {cellulose: 3});
Chemistry.registerMolecule("sucrose", "Sucrose", {C: 12, H: 22, O: 11});
Chemistry.registerMolecule("pantherine", "Pantherine", {C: 4, H: 6, N: 2, O: 2});
Chemistry.registerMolecule("aluminiumOxide", "Aluminium Oxide", {Al: 2, O: 3});
Chemistry.registerMolecule("fullrene", "Carbon Nanotubes", {C: 256}, ["#787878", "#787878"]);
Chemistry.registerMolecule("valine", "Valine", {C: 5, H: 11, N: 1, O: 2});
Chemistry.registerMolecule("penicillin", "Penicillin", {C: 16, H: 18, N: 2, O: 4, S: 1});
Chemistry.registerMolecule("testosterone", "Testosterone", {C: 19, H: 28, O: 2}, "liquid");
Chemistry.registerMolecule("kaolinite", "Kaolinite", {Al: 2, Si: 2, O: 5, hydroxide: 4});
Chemistry.registerMolecule("fingolimod", "Fingolimod", {C: 19, H: 33, nitrogenDioxide: 1});
Chemistry.registerMolecule("arginine", "Arginine", {C: 6, H: 14, N: 4, O: 2});
Chemistry.registerMolecule("shikimicAcid", "Shikimic Acid", {C: 7, H: 10, O: 5});
Chemistry.registerMolecule("sulfuricAcid", "Sulfuric Acid", {H: 2, S: 1, O: 4}, "liquid");
Chemistry.registerMolecule("glyphosate", "Glyphosate", {C: 3, H: 8, N: 1, O: 5, P: 1}, "liquid");
Chemistry.registerMolecule("asprin", "Aspirin", {C: 9, H: 8, O: 4});
Chemistry.registerMolecule("ddt", "Ddt", {C: 14, H: 9, Cl: 5});
Chemistry.registerMolecule("dota", "Dota", {C: 16, H: 28, N: 4, O: 8});
Chemistry.registerMolecule("mycotoxin", "T-2 Mycotoxin", {C: 24, H: 34, O: 9}, ["#e3d411", "#e3d411"]);
Chemistry.registerMolecule("salt", "Salt", {Na: 1, Cl: 1});
Chemistry.registerMolecule("ammonia", "Ammonia", {N: 1, H: 3}, "gas");
Chemistry.registerMolecule("nodularin", "Nodularin", {C: 41, H: 60, N: 8, O: 10});
Chemistry.registerMolecule("tetrodotoxin", "Tetrydotoxin", {C: 11, H: 11, N: 3, O: 8});
Chemistry.registerMolecule("thc", "Thc", {C: 21, H: 30, O: 2});
Chemistry.registerMolecule("mu", "Methylcyclopentadienyl Manganese Tricarbonyl", {C: 9, H: 7, Mn: 1, O: 3}, "liquid");
Chemistry.registerMolecule("buli", "Tert-butyllithium", {Li: 1, C: 4, H: 9});
Chemistry.registerMolecule("plat", "Chloroplatinic Acid", {H: 2, Pt: 1, Cl: 6});
Chemistry.registerMolecule("phosgene", "Phosgene", {C: 1, O: 1, Cl: 2}, "gas");
Chemistry.registerMolecule("aalc", "Allyl Alcohol", {C: 3, H: 5, hydroxide: 1}, "liquid");
Chemistry.registerMolecule("hist", "Diphenhydramine", {C: 17, H: 21, N: 1, O: 1});
Chemistry.registerMolecule("pal2", "Batrachotoxin", {C: 31, H: 42, N: 2, O: 6});
Chemistry.registerMolecule("retinol", "Retinol", {C: 20, H: 29, hydroxide: 1});
Chemistry.registerMolecule("xylitol", "Xylitol", {C: 5, H: 12, O: 5});
Chemistry.registerMolecule("weedex", "Aminocyclopyrachlor", {C: 8, H: 8, Cl: 1, N: 3, O: 2});
Chemistry.registerMolecule("xanax", "Alprazolam", {C: 17, H: 13, Cl: 1, N: 4});
Chemistry.registerMolecule("hcl", "Hydrogen Chloride", {H: 1, Cl: 1}, "liquid");
Chemistry.registerMolecule("cocaine", "Cocaine", {C: 17, H: 21, N: 1, O: 4});
Chemistry.registerMolecule("cocainehcl", "Cocaine Hydrochloride", {cocaine: 1, hcl: 1});
Chemistry.registerMolecule("blueorgodye", "Guaiazulene", {C: 15, H: 18}, "liquid");
Chemistry.registerMolecule("redorgodye", "Pelargonidin", {C: 15, H: 11, O: 11});
Chemistry.registerMolecule("purpleorgodye", "Delphinidin", {C: 15, H: 11, O: 7});
Chemistry.registerMolecule("olivine", "Olivine", {Fe: 2, Si: 1, O: 4});
Chemistry.registerMolecule("metblue", "Methylene Blue", {C: 16, H: 18, N: 3, S: 1, Cl: 1});
Chemistry.registerMolecule("meoh", "Methyl Alcohol", {methyl: 1, hydroxide: 1}, "liquid");
Chemistry.registerMolecule("lcd", "Cholesteryl Benzoate", {C: 34, H: 50, O: 2});
Chemistry.registerMolecule("radchlor", "Radium Chloride", {Ra: 1, Cl: 2});
Chemistry.registerMolecule("caulerpenyne", "Caulerpenyne", {C: 21, H: 26, O: 6});
Chemistry.registerMolecule("latropine", "hyosciamine ", {C: 17, H: 23, N: 1, O: 4});
Chemistry.registerMolecule("gallicacid", "Gallic Acid", {C: 7, H: 17, O: 5});
Chemistry.registerMolecule("glucose", "Glucose", {C: 6, H: 12, O: 6});
Chemistry.registerMolecule("tannicacid", "Tannic Acid", {gallicacid: 10, glucose: 1});
Chemistry.registerMolecule("hperox", "Hydrogen Peroxide", {H: 2, peroxide: 1}, "liquid");
Chemistry.registerMolecule("galliumarsenide", "Gallium Arsenide", {Ga: 1, As: 1});
Chemistry.registerMolecule("fibroin", "Fibroin", {glycine: 3, alinine: 2, serine: 1}, "liquid");
Chemistry.registerMolecule("aluminiumPhosphate", "Aluminium Phosphate", {Al: 1, phosphate: 1});
Chemistry.registerMolecule("potassiumOxide", "Potassium Oxide", {K: 2, O: 1});
Chemistry.registerMolecule("sodiumOxide", "Sodium Oxide", {Na: 2, O: 1});
Chemistry.registerMolecule("plagioclaseAnorthite", "Anorthite", {Ca: 1, Al: 2, Si: 2, O: 8});
Chemistry.registerMolecule("plagioclaseAlbite", "Albite", {Na: 1, Al: 2, Si: 3, O: 8});
Chemistry.registerMolecule("orthoclase", "Orthoclase", {K: 1, Al: 1, Si: 3, O: 8});
Chemistry.registerMolecule("biotite", "Biotite", {K: 1, Fe: 3, Al: 1, Si: 3, O: 10, F: 2});
Chemistry.registerMolecule("augite", "Augite", {Na: 1, Fe: 1, Al: 2, O: 6});
Chemistry.registerMolecule("talc", "Talc", {Mg: 3, Si: 4, O: 10});
Chemistry.registerMolecule("propane", "Propane", {C: 3, H: 8}, "gas");
Chemistry.registerMolecule("peridot", "Peridot", {Mg: 3, O: 4, Si: 1});
Chemistry.registerMolecule("topaz", "Topaz", {Al: 2, O: 4, F: 2});
Chemistry.registerMolecule("zoisite", "Zoisite", {Ca: 2, Al: 3, Si: 3, O: 13, H: 8});
Chemistry.registerMolecule("cysteine", "Cysteine", {C: 3, H: 7, N: 1, O: 2, S: 1});
Chemistry.registerMolecule("threonine", "Threonite", {C: 4, H: 9, N: 1, O: 3});
Chemistry.registerMolecule("lysine", "Lysine", {C: 6, H: 14, N: 2, O: 2});
Chemistry.registerMolecule("methionine", "Methionine", {C: 5, H: 11, N: 1, O: 2, S: 1});
Chemistry.registerMolecule("tyrosine", "Tyrosine", {C: 9, H: 11, N: 1, O: 3});
Chemistry.registerMolecule("histidine", "Histidine", {C: 6, H: 9, N: 3, O: 2});
Chemistry.registerMolecule("phenylalanine", "Phenylalanine", {C: 9, H: 11, N: 1, O: 2});
Chemistry.registerMolecule("glutamine", "Glutamine", {C: 5, H: 10, N: 2, O: 3});
Chemistry.registerMolecule("proline", "Proline", {C: 5, H: 9, N: 1, O: 2});
Chemistry.registerMolecule("leucine", "Leucine", {C: 6, H: 13, N: 1, O: 2});
Chemistry.registerMolecule("tryptophan", "Tryptophan", {C: 11, H: 12, N: 2, O: 2});
Chemistry.registerMolecule("isoleucine", "Isoleucine", {C: 6, H: 13, N: 1, O: 2});
Chemistry.registerMolecule("glutamates", "Glutamic Acid", {C: 5, H: 9, N: 1, O: 4});
Chemistry.registerMolecule("asparagine", "Asparagine", {C: 4, H: 8, N: 2, O: 3});
Chemistry.registerMolecule("keratin", "Keratin", {threonine: 2, cysteine: 2, proline: 3});
Chemistry.registerMolecule("asbestos", "Asbestos", {Mg: 3, Si: 2, O: 5, hydroxide: 4});
Chemistry.registerMolecule("lithiumHydroxide", "Lithium Hydroxide", {Li: 1, hydroxide: 1});
Chemistry.registerMolecule("sodiumHydroxide", "Sodium Hydroxide", {Na: 1, hydroxide: 1});
Chemistry.registerMolecule("potassiumHydroxide", "Potassium Hydroxide", {K: 1, hydroxide: 1});
Chemistry.registerMolecule("rubidiumHydroxide", "Rubidium Hydroxide", {Rb: 1, hydroxide: 1});
Chemistry.registerMolecule("cesiumHydroxide", "Cesium Hydroxide", {Cs: 1, hydroxide: 1});
Chemistry.registerMolecule("franciumHydroxide", "Francium Hydroxide", {Fr: 1, hydroxide: 1});
Chemistry.registerMolecule("hypophosphite", "Hypophosphite", {H: 2, P: 1, O: 2});
Chemistry.registerMolecule("aluminiumHypophosphite", "Aluminium Hypophosphite", {Al: 1, hypophosphite: 3});
Chemistry.registerMolecule("omphacite", "Omphacite", {Ca: 1, Al: 1, Si: 2, O: 6});
Chemistry.registerMolecule("silicate", "Silicate", {Si: 1, O: 4});
Chemistry.registerMolecule("pyrope", "Pyrope", {Mg: 3, Al: 2, silicate: 3});
Chemistry.registerMolecule("almadine", "Almandine", {Fe: 3, Al: 2, silicate: 3});
Chemistry.registerMolecule("spessartine", "Spessartine", {Mn: 3, Al: 2, silicate: 3});
Chemistry.registerMolecule("redGarnet", "Red Garnet", {pyrope: 3, almadine: 5, spessartine: 8});
Chemistry.registerMolecule("forsterite", "Forsterite", {Mg: 2, silicate: 1});
Chemistry.registerMolecule("chromite", "Chromite", {Fe: 1, Cr: 2, O: 4});
Chemistry.registerMolecule("siliconOxide", "Silicon Oxide", {Si: 1, O: 1});
Chemistry.registerMolecule("ironOxide", "Iron Oxide", {Fe: 1, O: 1});
Chemistry.registerMolecule("galliumOxide", "Gallium Oxide", {Ga: 1, O: 2});
Chemistry.registerMolecule("arsenicOxide", "Arsenic Oxide", {As: 1, O: 2});
Chemistry.registerMolecule("sulfurDioxide", "Sulfur Oxide", {S: 1, O: 2}, "gas");
Chemistry.registerMolecule("hydrogenSulfide", "Hydrogen Sulfide", {H: 2, S: 1}, "gas");
Chemistry.registerMolecule("sodiumBisulfate", "Sodium Bisulfate", {Na: 1, H: 1, sulfate: 1});
Chemistry.registerMolecule("sodiumSulfate", "Sodium Sulfate", {Na: 2, sulfate: 1});
Chemistry.registerMolecule("dimethyltryptamine", "Dimethyltryptamine", {C: 12, H: 16, N: 2});
Chemistry.registerMolecule("oleicAcid", "Oleic Acid", {C: 18, H: 34, O: 2});

Recipes.addFurnaceFuel(Mol.cellulose, 0, 65);
Recipes.addFurnaceFuel(Mol.meoh, 0, 500);
Recipes.addFurnaceFuel(Mol.ethanol, 0, 1100);
Recipes.addFurnaceFuel(Mol.aalc, 0, 800);
Recipes.addFurnaceFuel(Mol.propane, 0, 1400);
Recipes.addFurnaceFuel(Mol.toluene, 0, 2200);
Recipes.addFurnaceFuel(Mol.tnt, 0, 4000);
Recipes.addFurnaceFuel(Mol.isoprene, 0, 1800);
Recipes.addFurnaceFuel(Mol.butene, 0, 1600);
Recipes.addFurnaceFuel(Mol.memethacrylate, 0, 5700);




// file: item/journal.js

IDRegistry.genItemID("chemist_journal");
Item.createItem("chemist_journal", "Chemist's Journal", {name: "chemist_journal"}, {stack: 1});

Item.registerNameOverrideFunction(ItemID.chemist_journal, function(item, name){
  let info = "";
  if(item.extra){
    info = "\n§9" + Item.getName(Synthesiser.data[item.extra.getString("pattern")].id);
  }
  return name + info;
});


const ScreenHeight = UI.getScreenHeight();

(function(){
  const base = FileTools.ReadImage(__dir__ + "res/material/chemist_journal.png");
  const bmp = new ag.Bitmap.createBitmap(1000, ScreenHeight, ag.Bitmap.Config.ARGB_8888);
  const cvs = new ag.Canvas(bmp);
  cvs.drawBitmap(base, null, new ag.Rect(0, 0, 1000, ScreenHeight), null);
  UI.TextureSource.put("journal_background", bmp);
})();


const jumpFunc = function(num){
    return {
      onClick: Microscope.funcName(num),
      onLongClick: function(con){
        const item = con.getSlot("slot" + num);
        if(~Chemistry.researchList.indexOf(item.id + ":" + item.data)){
          Journal.setRecipe(item.id, item.data);
        }
        else{
          alert("You need to research " + Item.getName(item.id, item.data));
        }
      }
    };
  };

const JournalSlots = {};
const Journal = {
  container: new UI.Container(),
  mainUI: new UI.Window({
    params: {slot: "slot_chem"},
    drawing: [
      {type: "background", color: ag.Color.TRANSPARENT},
      {type: "bitmap", x: 0, y: 0, bitmap: "journal_background"}
    ],
    elements: {
      close: {type: "closeButton", x: 940, y: 0, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 3.2},
      search: {type: "button", x: 60, y: 50, bitmap: "mod_browser_search_field", scale: 0.8, clicker: {
        onClick: function(){
          const ctx = UI.getContext();
          ctx.runOnUiThread(new java.lang.Runnable({
            run: function(){
              try{
                const dialog = new android.app.AlertDialog.Builder(ctx); 
                dialog.setTitle("Please type the keywords");
                const editText = new android.widget.EditText(ctx); 
                editText.setHint("in this space");
                const layout = new android.widget.LinearLayout(ctx); 
                layout.setOrientation(1);
                layout.addView(editText);
                dialog.setView(layout);
                dialog.setPositiveButton("Search", new android.content.DialogInterface.OnClickListener(){
                  onClick: function(){
                    Journal.searchItem(editText.getText() + "");
                  }
                });
                dialog.show();
              }
              catch(e){
                alert(e);
              }
            }
          }));
        }
      }},
      editText: {type: "text", x: 70, y: 60, z: 1, font: {color: ag.Color.WHITE, size: 20}},
      slot0: {type: "slot", x: 660, y: 120, visual: true, clicker: jumpFunc(0)},
      slot1: {type: "slot", x: 720, y: 120, visual: true, clicker: jumpFunc(1)},
      slot2: {type: "slot", x: 780, y: 120, visual: true, clicker: jumpFunc(2)},
      slot3: {type: "slot", x: 660, y: 180, visual: true, clicker: jumpFunc(3)},
      slot4: {type: "slot", x: 720, y: 180, visual: true, clicker: jumpFunc(4)},
      slot5: {type: "slot", x: 780, y: 180, visual: true, clicker: jumpFunc(5)},
      slot6: {type: "slot", x: 660, y: 240, visual: true, clicker: jumpFunc(6)},
      slot7: {type: "slot", x: 720, y: 240, visual: true, clicker: jumpFunc(7)},
      slot8: {type: "slot", x: 780, y: 240, visual: true, clicker: jumpFunc(8)},
      title: {type: "text", x: 560, y: 60, font: {color: ag.Color.BLUE, size: 30, isBold: true}},
      textType: {type: "text", x: 660, y: 310, font: {color: ag.Color.GRAY}},
      textReq: {type: "text", x: 660, y: 330, font: {color: ag.Color.GRAY}}
    }
  }),
  slotUI: new UI.Window({
    location: {x: 60, y: 100, width: 400, padding: {bottom: 40}, scrollY: 4000},
    params: {slot: "slot_chem"},
    drawing: [
      {type: "background", color: ag.Color.TRANSPARENT}
    ],
    elements: JournalSlots
  }),
  clickFunc: function(id, data){
    return {onClick: function(){
      Journal.setRecipe(id, data);
    }};
  },
  setRecipe: function(id, data){
    const raw = Synthesiser.getPattern(id, data, true);
    let i = 0;
    if(raw){
      const item = Player.getCarriedItem();
      const pattern = Synthesiser.decodePattern(raw);
      if(item.id == ItemID.chemist_journal){
        item.extra = new ItemExtraData();
        item.extra.putString("pattern", raw);
        Player.setCarriedItem(ItemID.chemist_journal, 1, 0, item.extra);
      }
      for(i = 0; i < 9; i++){
        pattern[i] ?
          this.container.setSlot("slot" + i, pattern[i][0], pattern[i][1], 0) :
          this.container.clearSlot("slot" + i);
      }
      this.container.setText("title", Item.getName(id, data));
      this.container.setText("textType", pattern.length == 9 ? "Shaped" : "Shapeless");
      this.container.setText("textReq", Synthesiser.data[raw].cost + " RF");
    }
    else{
      for(i = 9; i--;){
        this.container.clearSlot("slot" + i);
      }
      this.container.setText("title", "");
      this.container.setText("textType", "");
      this.container.setText("textReq", "");
    }
  },
  searchItem: function(text){
    const location = this.slotUI.getLocation();
    const size = location.width * (location.getScale() / location.getDrawingScale()) / 6;
    let x = y = 0;
    let item;
    for(let key in JournalSlots){
      item = key.split(":");
      if(Item.getName(item[0], item[1]).match(new RegExp(text, "i"))){
        JournalSlots[key].x = x;
        JournalSlots[key].y = y;
        if(x == size * 5){
          x = 0;
          y += size;
        }
        else{
          x += size;
        }
      }
      else{
        JournalSlots[key].x = 2000;
      }
    }
    this.container.setText("editText", text);
  }
};

Journal.mainUI.addAdjacentWindow(Journal.slotUI);
Journal.mainUI.setBlockingBackground(true);

Item.registerUseFunction(ItemID.chemist_journal, function(c){
  const location = Journal.slotUI.getLocation();
  const size = location.width * (location.getScale() / location.getDrawingScale()) / 6;
  let x = y = 0;
  let item;
  for(let i = 0; i < Chemistry.researchList.length; i++){
    item = Chemistry.researchList[i].split(":");
    JournalSlots[Chemistry.researchList[i]] = {type: "slot", x: x, y: y, visual: true, size: size, clicker: Journal.clickFunc(item[0], item[1])};
    Journal.container.setSlot(Chemistry.researchList[i], item[0], 1, item[1]);
    if(x == size * 5){
      x = 0;
      y += size;
    }
    else{
      x += size;
    }
  }
  Journal.container.openAs(Journal.mainUI);
  item = Player.getCarriedItem();
  if(item.extra){
    item = Synthesiser.data[item.extra.getString("pattern")];
    Journal.setRecipe(item.id, item.data);
  }
  Game.prevent();
});


Journal.container.setOnCloseListener({
  onClose: function(){
    for(let key in JournalSlots){
      delete JournalSlots[key];
    }
    for(let i = 9; i--;){
      Journal.container.clearSlot("slot" + i);
    }
    Journal.container.setText("title", "");
    Journal.container.setText("textType", "");
    Journal.container.setText("textReq", "");
    Journal.container.setText("editText", "");
  }
});




// file: block/decomposer/recipe.js

Decomposer.addRecipeLiquid("milk", 1, {Ca: 4, oleicAcid: 1});
Decomposer.addRecipeLiquid("water", 1, {H: 2, O: 1});

Decomposer.addRecipeLiquidSelect("lava", 0.25, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Na: 1, Cl: 1},
], 0.2);

/*
Decomposer.addRecipeLiquid("iron.molten", 0.144, {Fe: 16});
Decomposer.addRecipeLiquid("gold.molten", 0.144, {Au: 16});
Decomposer.addRecipeLiquid("copper.molten", 0.144, {Cu: 16});
Decomposer.addRecipeLiquid("tin.molten", 0.144, {Sn: 16});
Decomposer.addRecipeLiquid("aluminium.molten", 0.144, {Al: 16});
Decomposer.addRecipeLiquid("cobalt.molten", 0.144, {Co: 16});
Decomposer.addRecipeLiquid("ardite.molten", 0.144, {Fe: 2, W: 2, Si: 2});
Decomposer.addRecipeLiquid("bronze.molten", 0.144, {Cu: 12, Sn: 4});
Decomposer.addRecipeLiquid("aluminiumbrass.molten", 0.144, {Cu: 12, Al: 4});
Decomposer.addRecipeLiquid("manyullyn.molten", 0.144, {Co: 8, Fe: 1, W: 1, Si: 1});
Decomposer.addRecipeLiquid("alumite.molten", 0.144, {Al: 8, Fe: 3, siliconDioxide: 2, magnesiumOxide: 1});
Decomposer.addRecipeLiquid("obsidian.molten", 0.144, {siliconDioxide: 16, magnesiumOxide: 8});
Decomposer.addRecipeLiquid("steel.molten", 0.144, {Fe: 14, C: 2});
Decomposer.addRecipeLiquid("stone.molten", 0.144, {siliconOxide: 12, ironOxide: 4});
Decomposer.addRecipeLiquid("glass.molten", 0.144, {siliconDioxide: 16});
Decomposer.addRecipeLiquid("emerald.molten", 0.144, {beryl: 6, Cr: 6, V: 6});
Decomposer.addRecipeLiquid("blood.molten", 0.144, {O: 6, Fe: 2, ironOxide: 8});
Decomposer.addRecipeLiquid("nickel.molten", 0.144, {Ni: 16});
Decomposer.addRecipeLiquid("lead.molten", 0.144, {Pb: 16});
Decomposer.addRecipeLiquid("silver.molten", 0.144, {Ag: 16});
Decomposer.addRecipeLiquid("platinum.molten", 0.144, {Pt: 16});
Decomposer.addRecipeLiquid("invar.molten", 0.144, {Fe: 10, Ni: 6});
Decomposer.addRecipeLiquid("electrum.molten", 0.144, {Ag: 8, Au: 8});
*/


Decomposer.addRecipeSelect(1, 0, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Zn: 1, O: 1},
  {Al: 1, O: 1}
], 0.2);

Decomposer.addRecipeSelect(2, -1, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Zn: 1, O: 1},
  {Ga: 1, As: 1}
], 0.07);

Decomposer.addRecipeSelect(3, -1, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Zn: 1, O: 1},
  {Ga: 1, As: 1}
], 0.07);

Decomposer.addRecipeSelect(243, -1, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Zn: 1, O: 1},
  {Ga: 1, As: 1}
], 0.07);

Decomposer.addRecipeSelect(4, -1, [
  {Si: 1, O: 1},
  {Fe: 1, O: 1},
  {Mg: 1, O: 1},
  {Ti: 1, O: 1},
  {Pb: 1, O: 1},
  {Na: 1, Cl: 1}
], 0.1);

Decomposer.addRecipe(5, -1, {cellulose: 2}, 0.4);
Decomposer.addRecipe(158, -1, {cellulose: 2}, 0.4);
Decomposer.addRecipe(6, -1, {cellulose: 1}, 0.25);
Decomposer.addRecipe(12, -1, {siliconDioxide: 16});
Decomposer.addRecipe(123, -1, {siliconDioxide: 1}, 0.35);
Decomposer.addRecipe(14, -1, {Au: 48});
Decomposer.addRecipe(15, -1, {Fe: 48});
Decomposer.addRecipe(16, -1, {C: 48});
Decomposer.addRecipe(17, -1, {cellulose: 8}, 0.5);
Decomposer.addRecipe(162, -1, {cellulose: 8}, 0.5);
Decomposer.addRecipe(18, -1, {cellulose: 4}, 0.5);
Decomposer.addRecipe(161, -1, {cellulose: 4}, 0.5);
Decomposer.addRecipe(351, 0, {blackPigment: 1});
Decomposer.addRecipe(351, 1, {redPigment: 1});
Decomposer.addRecipe(351, 2, {greenPigment: 1});
Decomposer.addRecipe(351, 3, {theobromine: 1, tannicacid: 1}, 0.4);
Decomposer.addRecipe(351, 4, {lazurite: 1});
Decomposer.addRecipe(351, 5, {purplePigment: 1});
Decomposer.addRecipe(351, 6, {lightbluePigment: 1, whitePigment: 1});
Decomposer.addRecipe(351, 7, {whitePigment: 1, blackPigment: 1});
Decomposer.addRecipe(351, 8, {whitePigment: 1, blackPigment: 2});
Decomposer.addRecipe(351, 9, {redPigment: 1, whitePigment: 1});
Decomposer.addRecipe(351, 10, {limePigment: 1});
Decomposer.addRecipe(351, 11, {yellowPigment: 1});
Decomposer.addRecipe(351, 12, {lightbluePigment: 1});
Decomposer.addRecipe(351, 13, {lightbluePigment: 1, redPigment: 1});
Decomposer.addRecipe(351, 14, {orangePigment: 1});
Decomposer.addRecipe(351, 15, {whitePigment: 1});
Decomposer.addRecipe(20, -1, {siliconDioxide: 16});
Decomposer.addRecipe(102, -1, {siliconDioxide: 6});
Decomposer.addRecipe(21, -1, {lazurite: 6, sodalite: 1, noselite: 1, calciumCarbonate: 1, pyrite: 1});
Decomposer.addRecipe(22, -1, {lazurite: 9});
Decomposer.addRecipe(30, -1, {fibroin: 1});
Decomposer.addRecipe(175, -1, {shikimicAcid: 2}, 0.3);
Decomposer.addRecipe(24, -1, {siliconDioxide: 16});
Decomposer.addRecipe(35, 0, {glycine: 2, whitePigment: 1}, 0.6);
Decomposer.addRecipe(35, 1, {glycine: 2, orangePigment: 1}, 0.6);
Decomposer.addRecipe(35, 2, {glycine: 2, lightbluePigment: 1, redPigment: 1}, 0.6);
Decomposer.addRecipe(35, 3, {glycine: 2, lightbluePigment: 1}, 0.6);
Decomposer.addRecipe(35, 4, {glycine: 2, yellowPigment: 1}, 0.6);
Decomposer.addRecipe(35, 5, {glycine: 2, limePigment: 1}, 0.6);
Decomposer.addRecipe(35, 6, {glycine: 2, redPigment: 1, whitePigment: 1}, 0.6);
Decomposer.addRecipe(35, 7, {glycine: 2, whitePigment: 1, blackPigment: 2}, 0.6);
Decomposer.addRecipe(35, 8, {glycine: 2, whitePigment: 1, blackPigment: 1}, 0.6);
Decomposer.addRecipe(35, 9, {glycine: 2, lightbluePigment: 1, whitePigment: 1}, 0.6);
Decomposer.addRecipe(35, 10, {glycine: 2, purplePigment: 1}, 0.6);
Decomposer.addRecipe(35, 11, {glycine: 2, lazurite: 1}, 0.6);
Decomposer.addRecipe(35, 12, {glycine: 2, tannicacid: 1}, 0.6);
Decomposer.addRecipe(35, 13, {glycine: 2, greenPigment: 1}, 0.6);
Decomposer.addRecipe(35, 14, {glycine: 2, redPigment: 1}, 0.6);
Decomposer.addRecipe(35, 15, {glycine: 2, blackPigment: 1}, 0.6);
Decomposer.addRecipe(171, 0, {glycine: 2, whitePigment: 1}, 0.4);
Decomposer.addRecipe(171, 1, {glycine: 2, orangePigment: 1}, 0.4);
Decomposer.addRecipe(171, 2, {glycine: 2, lightbluePigment: 1, redPigment: 1}, 0.4);
Decomposer.addRecipe(171, 3, {glycine: 2, lightbluePigment: 1}, 0.2);
Decomposer.addRecipe(171, 4, {glycine: 2, yellowPigment: 1}, 0.4);
Decomposer.addRecipe(171, 5, {glycine: 2, limePigment: 1}, 0.4);
Decomposer.addRecipe(171, 6, {glycine: 2, redPigment: 1, whitePigment: 1}, 0.4);
Decomposer.addRecipe(171, 7, {glycine: 2, whitePigment: 1, blackPigment: 2}, 0.4);
Decomposer.addRecipe(171, 8, {glycine: 2, whitePigment: 1, blackPigment: 1}, 0.4);
Decomposer.addRecipe(171, 9, {glycine: 2, lightbluePigment: 1, whitePigment: 1}, 0.4);
Decomposer.addRecipe(171, 10, {glycine: 2, purplePigment: 1}, 0.4);
Decomposer.addRecipe(171, 11, {glycine: 2, lazurite: 1}, 0.4);
Decomposer.addRecipe(171, 12, {glycine: 2, tannicacid: 1}, 0.4);
Decomposer.addRecipe(171, 13, {glycine: 2, greenPigment: 1}, 0.4);
Decomposer.addRecipe(171, 14, {glycine: 2, redPigment: 1}, 0.4);
Decomposer.addRecipe(171, 15, {glycine: 2, blackPigment: 1}, 0.4);
Decomposer.addRecipe(37, -1, {shikimicAcid: 2, yellowPigment: 1}, 0.3);
Decomposer.addRecipe(38, 0, {shikimicAcid: 2, redPigment: 1}, 0.3);
Decomposer.addRecipe(38, 1, {shikimicAcid: 2, lazurite: 1}, 0.3);
Decomposer.addRecipe(38, 2, {shikimicAcid: 2, purplePigment: 1}, 0.3);
Decomposer.addRecipe(38, 3, {shikimicAcid: 2, whitePigment: 1}, 0.3);
Decomposer.addRecipe(38, 4, {shikimicAcid: 2, redPigment: 1}, 0.3);
Decomposer.addRecipe(38, 5, {shikimicAcid: 2, orangePigment: 1}, 0.3);
Decomposer.addRecipe(38, 6, {shikimicAcid: 2, whitePigment: 1}, 0.3);
Decomposer.addRecipe(38, 7, {shikimicAcid: 2, whitePigment: 1}, 0.3);
Decomposer.addRecipe(38, 8, {shikimicAcid: 2, whitePigment: 1}, 0.3);
Decomposer.addRecipe(39, -1, {psilocybin: 1, water: 2});
Decomposer.addRecipe(40, -1, {pantherine: 1, water: 2});
Decomposer.addRecipe(41, -1, {Au: 144});
Decomposer.addRecipe(42, -1, {Fe: 144});
Decomposer.addRecipe(46, -1, {tnt: 1});
Decomposer.addRecipe(49, -1, {siliconDioxide: 16, magnesiumOxide: 8});
Decomposer.addRecipe(56, -1, {fullrene: 6});
Decomposer.addRecipe(57, -1, {fullrene: 27});
Decomposer.addRecipe(72, -1, {cellulose: 4}, 0.4);
Decomposer.addRecipe(73, -1, {iron3oxide: 9, Cu: 9}, 0.8);
Decomposer.addRecipe(81, -1, {mescaline: 1, water: 20});
Decomposer.addRecipe(86, -1, {cucurbitacin: 1});
Decomposer.addRecipe(361, -1, {water: 1});

Decomposer.addRecipeSelect(87, -1, [
  {Si: 2, O: 1, Fe: 1},
  {Si: 2, Ni: 1, Tc: 1},
  {Si: 3, Ti: 1, Fe: 1},
  {Si: 1, W: 4, Cr: 2},
  {Si: 10, W: 1, Zn: 8, Be: 4}
], 0.1);

Decomposer.addRecipeSelect(112, -1, [
  {Si: 2, C: 1, Fe: 1},
  {Si: 2, Ni: 1, Tc: 1},
  {Si: 3, Ti: 1, Fe: 1},
  {Si: 1, W: 4, Cr: 2},
  {Si: 10, W: 1, Zn: 8, Be: 4}
], 0.15);

Decomposer.addRecipe(373, 0, {water: 5, siliconDioxide: 16});
Decomposer.addRecipe(79, -1, {water: 8});

Decomposer.addRecipeSelect(88, -1, [
  {Pb: 3, Be: 1, Si: 2, O: 1},
  {Pb: 1, Si: 5, O: 2},
  {Si: 2, O: 1},
  {Si: 6, O: 2},
  {Es: 1, O: 2}
], 0.2);

Decomposer.addRecipe(89, -1, {P: 4});
Decomposer.addRecipe(110, -1, {fingolimod: 1}, 0.09);

Decomposer.addRecipeSelect(121, -1, [
  {Si: 2, O: 1, H: 4, Li: 1},
  {Es: 1},
  {Pu: 1},
  {Fr: 1},
  {Nd: 1},
  {Si: 2, O: 4},
  {H: 4},
  {B: 8},
  {Li: 2},
  {Zr: 1},
  {Na: 1},
  {Rb: 1},
  {Ga: 1, As: 1}
], 0.8);

Decomposer.addRecipe(129, -1, {beryl: 6, Cr: 6, V: 6});
Decomposer.addRecipe(133, -1, {beryl: 18, Cr: 18, V: 18});
Decomposer.addRecipe(260, -1, {malicAcid: 1});
Decomposer.addRecipe(262, -1, {Si: 1, O: 2, N: 6});
Decomposer.addRecipe(263, 0, {C: 8}, 0.92);
Decomposer.addRecipe(263, 1, {C: 8}, 0.82);
Decomposer.addRecipe(173, -1, {C: 72}, 0.82);
Decomposer.addRecipe(264, -1, {fullrene: 3});
Decomposer.addRecipe(265, -1, {Fe: 16});
Decomposer.addRecipe(266, -1, {Au: 16});
Decomposer.addRecipe(280, -1, {cellulose: 1}, 0.3);
Decomposer.addRecipe(287, -1, {serine: 1, glycine: 1, alinine: 1}, 0.45);
Decomposer.addRecipe(288, -1, {water: 8, N: 6});
Decomposer.addRecipe(289, -1, {potassiumNitrate: 1, S: 2, C: 1});
Decomposer.addRecipe(297, -1, {starch: 1, sucrose: 1}, 0.1);
Decomposer.addRecipe(318, -1, {siliconDioxide: 1}, 0.5);
Decomposer.addRecipe(322, -1, {malicAcid: 1, Au: 64});
Decomposer.addRecipe(324, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(427, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(428, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(429, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(430, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(431, -1, {cellulose: 12}, 0.4);
Decomposer.addRecipe(325, 0, {Fe: 48});
Decomposer.addRecipe(325, 8, {water: 16, Fe: 48});
Decomposer.addRecipe(331, -1, {iron3oxide: 1, Cu: 1}, 0.42);
Decomposer.addRecipe(152, -1, {iron3oxide: 9, Cu: 9}, 0.42);
Decomposer.addRecipe(332, -1, {water: 1});
Decomposer.addRecipe(334, -1, {keratin: 1}, 0.2);
Decomposer.addRecipe(336, -1, {kaolinite: 1}, 0.5);
Decomposer.addRecipe(337, -1, {kaolinite: 1}, 0.5);
Decomposer.addRecipe(338, -1, {sucrose: 1, H: 2, O: 1}, 0.65);
Decomposer.addRecipe(106, -1, {cellulose: 6});
Decomposer.addRecipe(339, -1, {cellulose: 1}, 0.35);

Decomposer.addRecipeSelect(345, -1, [
  {Fe: 64},
  {Fe: 64, iron3oxide: 1},
  {Fe: 64, iron3oxide: 1, Cu: 1},
  {Fe: 64, Cu: 1}
]);

Decomposer.addRecipeSelect(341, -1, [
  {pmma: 1},
  {Hg: 1},
  {water: 10}
], 0.9);

Decomposer.addRecipe(348, -1, {P: 1});
Decomposer.addRecipe(352, -1, {hydroxylapatite: 1});
Decomposer.addRecipe(353, -1, {sucrose: 1}, 0.75);
Decomposer.addRecipe(360, -1, {water: 1});
Decomposer.addRecipe(103, -1, {cucurbitacin: 1, asparticAcid: 1, water: 16});
Decomposer.addRecipe(366, -1, {K: 1, Na: 1, C: 2});
Decomposer.addRecipe(350, -1, {nodularin: 1}, 0.05);
Decomposer.addRecipe(368, -1, {Es: 1, calciumCarbonate: 8});
Decomposer.addRecipe(122, -1, {calciumCarbonate: 16, hydroxylapatite: 6, Pu: 18, Fm: 8});
Decomposer.addRecipe(369, -1, {Pu: 6});
Decomposer.addRecipe(377, -1, {Pu: 1});
Decomposer.addRecipe(370, -1, {Yb: 4, No: 4});
Decomposer.addRecipe(372, -1, {cocainehc: 1}, 0.5);
Decomposer.addRecipe(375, -1, {tetrodotoxin: 1}, 0.2);
Decomposer.addRecipe(376, -1, {Po: 1, ethanol: 1});
Decomposer.addRecipe(378, -1, {Hg: 1, Pu: 1, pmma: 3});
Decomposer.addRecipe(382, -1, {water: 4, whitePigment: 1, Au: 1});
Decomposer.addRecipe(388, -1, {beryl: 2, Cr: 2, V: 2});
Decomposer.addRecipe(295, -1, {cellulose: 2}, 0.3);
Decomposer.addRecipe(391, -1, {retinol: 1});
Decomposer.addRecipe(392, -1, {water: 8, K: 2, cellulose: 1}, 0.4);
Decomposer.addRecipe(396, -1, {retinol: 1, Au: 4});
Decomposer.addRecipe(399, -1, {He: 256, C: 64, Cn: 16, H: 192});
Decomposer.addRecipe(406, -1, {siliconDioxide: 4, galliumarsenide: 1});
Decomposer.addRecipe(101, -1, {Fe: 6});




// file: block/decomposer/tile.js

IDRegistry.genBlockID("decomposer");
Block.createBlock("decomposer", [
  {name: "tile.decomposer", texture: [["empty", 0]]}
]);
ToolAPI.registerBlockMaterial(BlockID.decomposer, "stone");
Block.setDestroyTime(BlockID.decomposer, 5);

IDRegistry.genItemID("decomposer");
Item.createItem("decomposer", "Chemical Decomposer", {name: "decomposer"});
Item.registerUseFunction("decomposer", function(c){
  c = c.relative;
  if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
    World.setBlock(c.x, c.y, c.z, BlockID.decomposer);
    World.addTileEntity(c.x, c.y, c.z);
    Player.decreaseCarriedItem();
  }
  Game.prevent();
});

Block.registerDropFunction("decomposer", function(){
  return [[ItemID.decomposer, 1]];
});

Machine.registerGUI("decomposer", "Chemical Decomposer", {
  drawing: [
    {type: "bitmap", x: 450, y: 120, bitmap: "chem_tank", scale: 3.2},
    {type: "bitmap", x: 636, y: 230, bitmap: "chem_triangle_down", scale: 3.2},
  ],
  elements: {
    scaleLiquid: {type: "scale", x: 456, y: 126, bitmap: "chem_line", overlay: "chem_line", direction: 1, scale: 3.2},
    buttonDump: {type: "button", x: 456, y: 70, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 2.4, clicker: {
      onClick: function(con, tile){
        for(let key in tile.liquidStorage.liquidAmounts){
          delete tile.liquidStorage.liquidAmounts[key];
        }
      }
    }},
    slotInput: {type: "slot", x: 390, y: 130, size: 40},
    slotOutput: {type: "slot", x: 390, y: 200, size: 40, isValid: Machine.validResult},
    slotSource: {type: "slot", x: 630, y: 150, isValid: function(id, count, data){
      return !!Decomposer.getRecipe(id, data);
    }},
    buttonOutput: {type: "button", x: 390, y: 400, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 1.6, clicker: Machine.output},
    textEnergy: {type: "text", x: 990, y: 40, font: {align: 2}}
  }
}, true, Machine.validResult);

TileEntity.registerPrototype(BlockID.decomposer, {
  defaultValues: {
    energy: 0,
    items: ""
  },
  anim: null,
  init: function(){
    const Data = this.data;
    this.anim && this.anim.destroy() & (this.anim = null);
    this.anim = new Animation.Base(this.x, this.y, this.z);
    this.anim.loadCustom(function(){
      const render = new Render();
      const parts = [
        {uv: {x: 64, y: 14}, coords: {x: -4, y: 12, z: 7}, size: {x: 8, y: 8, z: 1}},  //backface
        {uv: {x: 64, y: 23}, coords: {x: -4, y: 12, z: -8}, size: {x: 8, y: 8, z: 1}},  //frontface
        {uv: {x: 64, y: 48}, coords: {x: -8, y: 12, z: -4}, size: {x: 1, y: 8, z: 8}},  //leftface
        {uv: {x: 64, y: 32}, coords: {x: 7, y: 12, z: -4}, size: {x: 1, y: 8, z: 8}},  //rightface
        {uv: {x: 0, y: 0}, coords: {x: 3, y: 14, z: 3}, size: {x: 3, y: 9, z: 3}},  //col1
        {uv: {x: 0, y: 0}, coords: {x: 3, y: 14, z: -6}, size: {x: 3, y: 9, z: 3}},  //col2
        {uv: {x: 0, y: 0}, coords: {x: -6, y: 14, z: 3}, size: {x: 3, y: 9, z: 3}},  //col3
        {uv: {x: 0, y: 0}, coords: {x: -6, y: 14, z: -6}, size: {x: 3, y: 9, z: 3}},  //col4
        {uv: {x: 0, y: 0}, coords: {x: -6, y: 14, z: -1.5}, size: {x: 3, y: 9, z: 3}},  //col5
        {uv: {x: 0, y: 0}, coords: {x: -1.5, y: 12, z: -1.5}, size: {x: 3, y: 9, z: 3}},  //col6
        {uv: {x: 0, y: 0}, coords: {x: -1.5, y: 14, z: 3}, size: {x: 3, y: 9, z: 3}},  //col7
        {uv: {x: 0, y: 0}, coords: {x: -1.5, y: 13, z: -6}, size: {x: 3, y: 9, z: 3}},  //col8
        {uv: {x: 0, y: 0}, coords: {x: 3, y: 13, z: -1.5}, size: {x: 3, y: 9, z: 3}},  //col9
        {uv: {x: 0, y: 47}, coords: {x: -8, y: 23, z: -8}, size: {x: 16, y: 1, z: 16}},  //base
        {uv: {x: 0, y: 31}, coords: {x: -7, y: 15, z: -7}, size: {x: 14, y: 2, z: 14}},  //middlebase
        {uv: {x: 24, y: 22}, coords: {x: -4, y: 8, z: -4}, size: {x: 8, y: 1, z: 8}},  //topface
        {uv: {x: 0, y: 22}, coords: {x: -3, y: 9, z: -3}, size: {x: 6, y: 2, z: 6}},  //Shape7
        {uv: {x: 0, y: 12}, coords: {x: -1, y: 11, z: -1}, size: {x: 2, y: 3, z: 2}},  //Shape8
        {uv: {x: 12, y: 0}, coords: {x: -0.5, y: 12, z: -3}, size: {x: 1, y: 1, z: 6}},  //windmillspoke1
        {uv: {x: 12, y: 7}, coords: {x: -3, y: 12, z: -0.5}, size: {x: 6, y: 1, z: 1}},  //windmillspoke2
        {uv: {x: 12, y: 9}, coords: {x: -2, y: 11.5, z: 3}, size: {x: 4, y: 2, z: 2}},  //windmillbox1
        {uv: {x: 12, y: 9}, coords: {x: -2, y: 11.5, z: -5}, size: {x: 4, y: 2, z: 2}},  //windmillbox2
        {uv: {x: 12, y: 13}, coords: {x: 3, y: 11.5, z: -2}, size: {x: 2, y: 2, z: 4}},  //windmillbox3
        {uv: {x: 12, y: 13}, coords: {x: -5, y: 11.5, z: -2}, size: {x: 2, y: 2, z: 4}}  //windmillbox4
      ];
      Machine.translateModel(parts);
      render.setPart("body", parts, {width: 128, height: 64});
      this.describe({skin: "model/decomposer_" + (Data.items ? 1 : 0) + ".png", render: render.getID()});
      this.refresh();
    });
    this.liquidStorage.setLimit(null, 5);
  },
  destroy: function(){
    if(this.anim){
      this.anim.destroy();
      this.anim = null;
    }
  },
  getGuiScreen: function(){
    return Machine.gui.decomposer;
  },
  getTransportSlots: function(){
    const slots = [];
    for(let i = 0; i < 18; i++){
      slots.push("slot" + i);
    }
    return {input: ["slotSource"], output: slots};
  },
  getEnergyStorage: function(){
    return 10000;
  },
  energyTick: Machine.energyTick,
  canAddLiquid: function(item){
    const output = this.container.getSlot("slotOutput");
    if(!output.id || output.id == item.id && output.data == item.data && output.count < Item.getMaxStack(item.id)){
      output.id = item.id;
      output.data = item.data;
      output.count++;
      return true;
    }
    return false;
  },
  tick: function(){

    const input = this.container.getSlot("slotInput");
    const inside = LiquidRegistry.getItemLiquid(input.id, input.data);
    let liquid = this.liquidStorage.getLiquidStored();

    if(inside){
      if((!liquid || liquid == inside && this.liquidStorage.getAmount(inside) + 1 <= this.liquidStorage.getLimit(inside)) && this.canAddLiquid(LiquidRegistry.getEmptyItem(input.id, input.data))){
        input.count--;
        this.container.validateSlot("slotInput");
        this.liquidStorage.addLiquid(inside, 1);
      }
    }
    else{
      const full = LiquidRegistry.getFullItem(input.id, input.data, liquid);
      if(full && this.liquidStorage.getAmount(liquid) >= 1 && this.canAddLiquid(full)){
        input.count--;
        this.container.validateSlot("slotInput");
        this.liquidStorage.getLiquid(liquid, 1);
      }
    }

    liquid = this.liquidStorage.getLiquidStored();

    if(this.data.items){
      const array = this.data.items.split(",");
      let i = j = 0;
      let slot;
      label:
      for(i = 0; i < array.length; i++){
      for(j = 0; j < 18; j++){
        slot = this.container.getSlot("slot" + j);
        if(!slot.id || slot.id == array[i] && slot.count < Item.getMaxStack(array[i])){
          this.container.setSlot("slot" + j, array[i], slot.count + 1, 0);
          array.shift();
          this.data.items = array.join(",");
          break label;
        }
      }
      }
    }
    else if(this.data.energy >= 1000){
      const source = this.container.getSlot("slotSource");
      let result = Decomposer.getRecipe(source.id, source.data);
      if(result){
        this.data.items = result().join(",");
        this.data.energy -= 1000;
        source.count--;
        this.container.validateSlot("slotSource");
      }
      else{
        result = Decomposer.getRecipeLiquid(liquid);
        if(result && this.liquidStorage.getAmount(liquid) >= result.amount){
          this.data.items = result.func().join(",");
          this.data.energy -= 1000;
          this.liquidStorage.getLiquid(liquid, result.amount);
        }
      }
    }

    if(this.container.isOpened()){
      this.liquidStorage.updateUiScale("scaleLiquid", liquid);
      this.container.setText("textEnergy", this.data.energy + " RF");
    }

  }
});




// file: block/synthesiser/recipe.js

Synthesiser.addRecipe({id: 1, count: 16}, "SMOOTH", [["Si", 1], ["O", 2], null, ["Al", 2], ["O", 3]], true);
Synthesiser.addRecipe({id: 2, count: 16}, "GRASS", [null, ["cellulose", 1], null, null, ["O", 2], ["Si", 1]], true);
Synthesiser.addRecipe({id: 3}, "BLOCK", [["siliconDioxide", 1]], true);
Synthesiser.addRecipe({id: 243}, "BLOCK", [null, null, null, ["siliconDioxide", 1]], true);
Synthesiser.addRecipe({id: 4, count: 16}, "SMOOTH", [["Si", 2], ["O", 4]], true);
Synthesiser.addRecipe({id: 5, data: 0}, "PLANK", [null, null, null, null, null, null, null, ["cellulose", 1], ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 5, data: 1}, "PLANK", [null, null, null, null, null, null, ["cellulose", 1], ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 5, data: 2}, "PLANK", [null, null, null, null, null, ["cellulose", 1], ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 5, data: 3}, "PLANK", [null, null, null, null, ["cellulose", 1], ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 5, data: 4}, "PLANK", [null, null, null, ["cellulose", 1], ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 5, data: 5}, "PLANK", [null, null, ["cellulose", 1], ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 158, data: 0}, "PLANK", [null, null, null, null, null, null, ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 158, data: 1}, "PLANK", [null, null, null, null, null, ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 158, data: 2}, "PLANK", [null, null, null, null, ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 158, data: 3}, "PLANK", [null, null, null, ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 158, data: 4}, "PLANK", [null, null, ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 158, data: 5}, "PLANK", [null, ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 6, data: 0}, "PLANT", [null, null, null, null, null, null, null, null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 6, data: 1}, "PLANT", [null, null, null, null, null, null, null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 6, data: 2}, "PLANT", [null, null, null, null, null, null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 6, data: 3}, "PLANT", [null, null, null, null, null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 6, data: 4}, "PLANT", [null, null, null, null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 6, data: 5}, "PLANT", [null, null, null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 12, data: 0}, "BLOCK", [["siliconDioxide", 4], ["siliconDioxide", 4], null, ["siliconDioxide", 4], ["siliconDioxide", 4]], true);
Synthesiser.addRecipe({id: 12, data: 1}, "BLOCK", [null, ["siliconDioxide", 4], ["siliconDioxide", 4], null, ["siliconDioxide", 4], ["siliconDioxide", 4]], true);
Synthesiser.addRecipe({id: 13}, "BLOCK", [null, null, null, null, null, null, null, null, ["siliconDioxide", 1]], true);
Synthesiser.addRecipe({id: 17, data: 0}, "WOOD", [["cellulose", 2], ["cellulose", 2], ["cellulose", 2], null, ["cellulose", 2]], true);
Synthesiser.addRecipe({id: 17, data: 1}, "WOOD", [null, null, null, null, ["cellulose", 2], null, ["cellulose", 2], ["cellulose", 2], ["cellulose", 2]], true);
Synthesiser.addRecipe({id: 17, data: 2}, "WOOD", [["cellulose", 2], null, ["cellulose", 2], null, null, null, ["cellulose", 2], null, ["cellulose", 2]], true);
Synthesiser.addRecipe({id: 17, data: 3}, "WOOD", [["cellulose", 2], null, null, ["cellulose", 2], ["cellulose", 2], null, ["cellulose", 2]], true);
Synthesiser.addRecipe({id: 162, data: 0}, "WOOD", [null, null, ["cellulose", 2], null, ["cellulose", 2], ["cellulose", 2], null, null, ["cellulose", 2]], true);
Synthesiser.addRecipe({id: 162, data: 1}, "WOOD", [null, ["cellulose", 2], null, ["cellulose", 2], null, ["cellulose", 2], null, ["cellulose", 2]], true);
Synthesiser.addRecipe({id: 18, data: 0}, "BLOCK", [["cellulose", 1], ["cellulose", 1], ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 18, data: 1}, "BLOCK", [null, null, null, null, ["cellulose", 1], null, ["cellulose", 1], ["cellulose", 1], ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 18, data: 2}, "BLOCK", [["cellulose", 1], null, ["cellulose", 1], null, null, null, ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 18, data: 3}, "BLOCK", [["cellulose", 1], null, null, ["cellulose", 1], ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 161, data: 0}, "BLOCK", [null, null, ["cellulose", 1], null, ["cellulose", 1], ["cellulose", 1], null, null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 161, data: 1}, "BLOCK", [null, ["cellulose", 1], null, ["cellulose", 1], null, ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 351, data: 0}, "ITEM", [["blackPigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 1}, "ITEM", [["redPigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 2}, "ITEM", [["greenPigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 3}, "ITEM", [["theobromine", 1]]);
Synthesiser.addRecipe({id: 351, data: 4}, "ITEM", [["lazurite", 1]]);
Synthesiser.addRecipe({id: 351, data: 5}, "ITEM", [["purplePigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 6}, "ITEM", [["lightbluePigment", 1], ["whitePigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 7}, "ITEM", [["whitePigment", 1], ["blackPigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 8}, "ITEM", [["whitePigment", 1], ["blackPigment", 2]]);
Synthesiser.addRecipe({id: 351, data: 9}, "ITEM", [["redPigment", 1], ["whitePigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 10}, "ITEM", [["limePigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 11}, "ITEM", [["yellowPigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 12}, "ITEM", [["lightbluePigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 13}, "ITEM", [["lightbluePigment", 1], ["redPigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 14}, "ITEM", [["orangePigment", 1]]);
Synthesiser.addRecipe({id: 351, data: 15}, "ITEM", [["whitePigment", 1]]);
Synthesiser.addRecipe({id: 20}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, null, null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
Synthesiser.addRecipe({id: 102}, "PANE", [["siliconDioxide", 1], ["siliconDioxide", 1], ["siliconDioxide", 1], null, null, null, ["siliconDioxide", 1], ["siliconDioxide", 1], ["siliconDioxide", 1]], true);
Synthesiser.addRecipe({id: 22}, "LAPISBLOCK", [["lazurite", 9]], true);
Synthesiser.addRecipe({id: 175, data: 0}, "PLANT", [["shikimicAcid", 2], ["yellowPigment", 1]], true);
Synthesiser.addRecipe({id: 175, data: 1}, "PLANT", [["shikimicAcid", 2], ["redPigment", 1], ["whitePigment", 2]], true);
Synthesiser.addRecipe({id: 175, data: 2}, "PLANT", [["shikimicAcid", 2]], true);
Synthesiser.addRecipe({id: 175, data: 3}, "PLANT", [null, ["shikimicAcid", 2]], true);
Synthesiser.addRecipe({id: 175, data: 4}, "PLANT", [["shikimicAcid", 2], ["redPigment", 1]], true);
Synthesiser.addRecipe({id: 175, data: 5}, "PLANT", [["shikimicAcid", 2], ["redPigment", 1], ["whitePigment", 1]], true);
Synthesiser.addRecipe({id: 24, data: 0}, "BLOCK", [null, null, null, null, ["siliconDioxide", 16]], true);
Synthesiser.addRecipe({id: 24, data: 1}, "BLOCK", [null, null, null, null, null, null, null, ["siliconDioxide", 16]], true);
Synthesiser.addRecipe({id: 24, data: 2}, "BLOCK", [null, ["siliconDioxide", 16]], true);
Synthesiser.addRecipe({id: 35, data: 0}, "WOOL", [["glycine", 2], ["whitePigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 1}, "WOOL", [["glycine", 2], ["orangePigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 2}, "WOOL", [["glycine", 2], ["lightbluePigment", 1], ["redPigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 3}, "WOOL", [["glycine", 2], ["lightbluePigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 4}, "WOOL", [["glycine", 2], ["yellowPigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 5}, "WOOL", [["glycine", 2], ["limePigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 6}, "WOOL", [["glycine", 2], ["redPigment", 1], ["whitePigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 7}, "WOOL", [["glycine", 2], ["whitePigment", 1], ["blackPigment", 2]]);
Synthesiser.addRecipe({id: 35, data: 8}, "WOOL", [["glycine", 2], ["whitePigment", 1], ["blackPigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 9}, "WOOL", [["glycine", 2], ["lightbluePigment", 1], ["whitePigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 10}, "WOOL", [["glycine", 2], ["purplePigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 11}, "WOOL", [["glycine", 2], ["lazurite", 1]]);
Synthesiser.addRecipe({id: 35, data: 12}, "WOOL", [["glycine", 2], ["tannicacid", 1]]);
Synthesiser.addRecipe({id: 35, data: 13}, "WOOL", [["glycine", 2], ["greenPigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 14}, "WOOL", [["glycine", 2], ["redPigment", 1]]);
Synthesiser.addRecipe({id: 35, data: 15}, "WOOL", [["glycine", 2], ["blackPigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 0}, "CARPET", [["glycine", 1], ["whitePigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 1}, "CARPET", [["glycine", 1], ["orangePigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 2}, "CARPET", [["glycine", 1], ["lightbluePigment", 1], ["redPigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 3}, "CARPET", [["glycine", 1], ["lightbluePigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 4}, "CARPET", [["glycine", 1], ["yellowPigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 5}, "CARPET", [["glycine", 1], ["limePigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 6}, "CARPET", [["glycine", 1], ["redPigment", 1], ["whitePigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 7}, "CARPET", [["glycine", 1], ["whitePigment", 1], ["blackPigment", 2]]);
Synthesiser.addRecipe({id: 171, data: 8}, "CARPET", [["glycine", 1], ["whitePigment", 1], ["blackPigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 9}, "CARPET", [["glycine", 1], ["lightbluePigment", 1], ["whitePigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 10}, "CARPET", [["glycine", 1], ["purplePigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 11}, "CARPET", [["glycine", 1], ["lazurite", 1]]);
Synthesiser.addRecipe({id: 171, data: 12}, "CARPET", [["glycine", 1], ["tannicacid", 1]]);
Synthesiser.addRecipe({id: 171, data: 13}, "CARPET", [["glycine", 1], ["greenPigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 14}, "CARPET", [["glycine", 1], ["redPigment", 1]]);
Synthesiser.addRecipe({id: 171, data: 15}, "CARPET", [["glycine", 1], ["blackPigment", 1]]);
Synthesiser.addRecipe({id: 41}, "METALBLOCK", [["Au", 16], ["Au", 16], ["Au", 16], ["Au", 16], ["Au", 16], ["Au", 16], ["Au", 16], ["Au", 16], ["Au", 16]], true);
Synthesiser.addRecipe({id: 42}, "METALBLOCK", [["Fe", 16], ["Fe", 16], ["Fe", 16], ["Fe", 16], ["Fe", 16], ["Fe", 16], ["Fe", 16], ["Fe", 16], ["Fe", 16]], true);
Synthesiser.addRecipe({id: 46}, "OBSIDIAN", [["tnt", 1]]);
Synthesiser.addRecipe({id: 49}, "OBSIDIAN", [["siliconDioxide", 4], ["siliconDioxide", 4], ["siliconDioxide", 4], ["magnesiumOxide", 2], null, ["siliconDioxide", 4], ["magnesiumOxide", 2], ["magnesiumOxide", 2], ["magnesiumOxide", 2]], true);
Synthesiser.addRecipe({id: 57}, "GEMBLOCK", [["fullrene", 3], ["fullrene", 3], ["fullrene", 3], ["fullrene", 3], ["fullrene", 3], ["fullrene", 3], ["fullrene", 3], ["fullrene", 3], ["fullrene", 3]], true);
Synthesiser.addRecipe({id: 81}, "PLANT", [["water", 5], null, ["water", 5], null, ["mescaline", 1], null, ["water", 5], null, ["water", 5]], true);
Synthesiser.addRecipe({id: 86}, "PLANT", [["cucurbitacin", 1]]);
Synthesiser.addRecipe({id: 405}, "SMOOTH", [["Si", 2], ["Si", 2], null, ["Zn", 2], ["W", 1], null, ["Be", 2], ["Be", 2]], true);
Synthesiser.addRecipe({id: 373}, "ITEM", [null, ["siliconDioxide", 4], null, ["siliconDioxide", 4], ["water", 5], ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
Synthesiser.addRecipe({id: 89}, "GLOWBLOCK", [["P", 1], null, ["P", 1], ["P", 1], null, ["P", 1]], true);
Synthesiser.addRecipe({id: 110, count: 16}, "GRASS", [["fingolimod", 1]]);
Synthesiser.addRecipe({id: 133}, "GEMBLOCK", [["Cr", 3], ["Cr", 3], ["Cr", 3], ["V", 9], ["beryl", 18], ["V", 9], ["Cr", 3], ["Cr", 3], ["Cr", 3]], true);
Synthesiser.addRecipe({id: 260}, "FOOD", [["malicAcid", 1], ["water", 2]]);
Synthesiser.addRecipe({id: 263, data: 1}, "ITEM", [["C", 4], ["C", 4]]);
Synthesiser.addRecipe({id: 264}, "GEM", [null, ["fullrene", 1], null, ["fullrene", 1], null, ["fullrene", 1], null, ["fullrene", 1]], true);
//Synthesiser.addRecipe({id: ItemID.polytool}, "STAR", [null, ["fullrene", 64], null, ["fullrene", 64], null, ["fullrene", 64], null, ["fullrene", 64]], true);
Synthesiser.addRecipe({id: 265}, "INGOT", [["Fe", 16]]);
Synthesiser.addRecipe({id: 266}, "INGOT", [["Au", 16]]);
Synthesiser.addRecipe({id: 287}, "ITEM", [["serine", 1], ["glycine", 1], ["alinine", 1]], true);
Synthesiser.addRecipe({id: 288}, "ITEM", [["N", 1], ["water", 2], ["N", 1], ["N", 1], ["water", 1], ["N", 1], ["N", 1], ["water", 5], ["N", 1]], true);
Synthesiser.addRecipe({id: 289}, "ITEM", [["potassiumNitrate", 1], ["C", 1], null, ["S", 2]], true);
Synthesiser.addRecipe({id: 318}, "ITEM", [null, ["siliconDioxide", 4], null, ["siliconDioxide", 4], ["siliconDioxide", 4], ["siliconDioxide", 4]], true);
Synthesiser.addRecipe({id: 325, data: 0}, "FOOD", [null, null, null, ["Fe", 16], null, ["Fe", 16], null, ["Fe", 16]], true);
Synthesiser.addRecipe({id: 325, data: 8}, "FOOD", [null, null, null, ["Fe", 16], ["water", 16], ["Fe", 16], null, ["Fe", 16]], true);
Synthesiser.addRecipe({id: 331}, "LAPIS", [null, null, ["iron3oxide", 1], null, ["Cu", 1]], true);
Synthesiser.addRecipe({id: 152}, "LAPISBLOCK", [null, null, ["iron3oxide", 9], null, ["Cu", 9]], true);
Synthesiser.addRecipe({id: 332, count: 5}, "ITEM", [["water", 1], null, ["water", 1], null, ["water", 1], null, ["water", 1], null, ["water", 1]], true);
Synthesiser.addRecipe({id: 334, count: 5}, "ITEM", [null, null, null, null, ["keratin", 1]], true);
Synthesiser.addRecipe({id: 336, count: 8}, "ITEM", [["kaolinite", 1], ["kaolinite", 1], null, ["kaolinite", 1], ["kaolinite", 1]], true);
Synthesiser.addRecipe({id: 337, count: 2}, "ITEM", [["kaolinite", 1]]);
Synthesiser.addRecipe({id: 106}, "GRASS", [["cellulose", 1], null, ["cellulose", 1], ["cellulose", 1], null, ["cellulose", 1], ["cellulose", 1], null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 339, count: 8}, "ITEM", [null, ["cellulose", 1], null, null, ["cellulose", 1], null, null, ["cellulose", 1]], true);
Synthesiser.addRecipe({id: 352}, "ITEM", [["hydroxylapatite", 1]]);
Synthesiser.addRecipe({id: 353}, "SUGAR", [["sucrose", 1]]);
Synthesiser.addRecipe({id: 360}, "FOOD", [["cucurbitacin", 1], ["asparticAcid", 1], ["water", 1]]);
Synthesiser.addRecipe({id: 103}, "FOOD", [["cucurbitacin", 1], ["asparticAcid", 1], ["water", 16]]);
Synthesiser.addRecipe({id: 366}, "FOOD", [["K", 16], ["Na", 16], ["C", 16]], true);
Synthesiser.addRecipe({id: 368}, "TEAR", [["calciumCarbonate", 1], ["calciumCarbonate", 1], ["calciumCarbonate", 1], ["calciumCarbonate", 1], ["Es", 1], ["calciumCarbonate", 1], ["calciumCarbonate", 1], ["calciumCarbonate", 1], ["calciumCarbonate", 1]], true);
Synthesiser.addRecipe({id: 122}, "SMOOTH", [["calciumCarbonate", 18], ["hydroxylapatite", 8], ["Pu", 22], ["Fm", 12]], true);
Synthesiser.addRecipe({id: 369}, "TEAR", [["Pu", 2], null, null, ["Pu", 2], null, null, ["Pu", 2]], true);
Synthesiser.addRecipe({id: 370}, "TEAR", [["Yb", 1], ["Yb", 1], ["No", 1], null, ["Yb", 2], ["No", 2], null, ["No", 1]], true);
Synthesiser.addRecipe({id: 375}, "ITEM", [["C", 1], null, null, null, ["tetrodotoxin", 1], null, null, null, ["C", 1]], true);
Synthesiser.addRecipe({id: 378}, "TEAR", [null, ["Pu", 1], null, ["pmma", 1], ["Hg", 1], ["pmma", 1], null, ["pmma", 1]], true);
Synthesiser.addRecipe({id: 399}, "STAR", [["He", 64], ["He", 64], ["He", 64], ["C", 64], ["Cn", 16], ["He", 64], ["H", 64], ["H", 64], ["H", 64]], true);
Synthesiser.addRecipe({id: 101}, "BLOCK", [["Fe", 6]]);




// file: block/synthesiser/tile.js

IDRegistry.genBlockID("synthesiser");
Block.createBlock("synthesiser", [
  {name: "tile.synthesiser", texture: [["empty", 0]]},
  {name: "tile.synthesiser", texture: [["empty", 0]]},
  {name: "tile.synthesiser", texture: [["empty", 0]]},
  {name: "tile.synthesiser", texture: [["empty", 0]]}
]);
ToolAPI.registerBlockMaterial(BlockID.synthesiser, "stone");
Block.setDestroyTime(BlockID.synthesiser, 5);

(function(){
  let mesh, model, render;
  for(let i = 4; i--;){
    mesh = new RenderMesh();
    mesh.setBlockTexture("synthesiser", 0);
    mesh.importFromFile(__dir__ + "res/model/synthesiser_" + i + ".obj", "obj", null);
    model = new BlockRenderer.Model(mesh);
    render = new ICRender.Model();
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.synthesiser, i, render);
  }
})();

IDRegistry.genItemID("synthesiser");
Item.createItem("synthesiser", "Chemical Synthesiser", {name: "synthesiser"});
Item.registerUseFunction("synthesiser", function(c){
  c = c.relative;
  if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
    World.setBlock(c.x, c.y, c.z, BlockID.synthesiser, Machine.getRotation());
    World.addTileEntity(c.x, c.y, c.z);
    Player.decreaseCarriedItem();
  }
  Game.prevent();
});

Block.registerDropFunction("synthesiser", function(){
  return [[ItemID.synthesiser, 1]];
});


Machine.registerGUI("synthesiser", "Chemical Synthesiser", {
  drawing: [
    {type: "bitmap", x: 636, y: 230, bitmap: "chem_triangle_up", scale: 3.2},
    {type: "bitmap", x: 530, y: 106, bitmap: "chem_triangle_right", scale: 3.2},
    {type: "bitmap", x: 770, y: 106, bitmap: "chem_triangle_right", scale: 3.2}
  ],
  elements: {
    slotJournal: {type: "slot", x: 450, y: 100, bitmap: "slot_journal", isValid: function(id){
      return id == ItemID.chemist_journal;
    }},
    slotPattern0: {type: "slot", x: 570, y: 40, isValid: Synthesiser.validPattern(0), clicker: Synthesiser.clearSlot(0)},
    slotPattern1: {type: "slot", x: 630, y: 40, isValid: Synthesiser.validPattern(1), clicker: Synthesiser.clearSlot(1)},
    slotPattern2: {type: "slot", x: 690, y: 40, isValid: Synthesiser.validPattern(2), clicker: Synthesiser.clearSlot(2)},
    slotPattern3: {type: "slot", x: 570, y: 100, isValid: Synthesiser.validPattern(3), clicker: Synthesiser.clearSlot(3)},
    slotPattern4: {type: "slot", x: 630, y: 100, isValid: Synthesiser.validPattern(4), clicker: Synthesiser.clearSlot(4)},
    slotPattern5: {type: "slot", x: 690, y: 100, isValid: Synthesiser.validPattern(5), clicker: Synthesiser.clearSlot(5)},
    slotPattern6: {type: "slot", x: 570, y: 160, isValid: Synthesiser.validPattern(6), clicker: Synthesiser.clearSlot(6)},
    slotPattern7: {type: "slot", x: 630, y: 160, isValid: Synthesiser.validPattern(7), clicker: Synthesiser.clearSlot(7)},
    slotPattern8: {type: "slot", x: 690, y: 160, isValid: Synthesiser.validPattern(8), clicker: Synthesiser.clearSlot(8)},
    slotResult: {type: "slot", x: 810, y: 100, isValid: Machine.validResult, clicker: {onClick: Synthesiser.craftSlot(), onLongClick: Synthesiser.craftSlot(true)}},
    buttonInput: {type: "button", x: 390, y: 400, bitmap: "_button_next_48x24", bitmap2: "_button_next_48x24p", scale: 1.6, clicker: Machine.input},
    buttonOutput: {type: "button", x: 390, y: 440, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 1.6, clicker: Machine.output},
    textEnergy: {type: "text", x: 990, y: 40, font: {align: 2}}
  }
}, true);


TileEntity.registerPrototype(BlockID.synthesiser, {
  defaultValues: {
    energy: 0
  },
  meta: 0,
  anim: null,
  timer: 0,
  armX: -6,
  armY: 13,
  cost: 0,
  init: function(){
    this.meta = World.getBlock(this.x, this.y, this.z).data;
    delete this.liquidStorage;
    const Data = this;
    this.anim && this.anim.destroy() & (this.anim = null);
    this.anim = new Animation.Base(this.x, this.y, this.z);
    this.anim.loadCustom(function(){
      switch(true){
        case Data.timer <= 20: Data.armY = Machine.armPosition(Data.timer, 00, 20, 13, 11.2); break;
        case Data.timer <= 80: Data.armX = Machine.armPosition(Data.timer, 20, 80, -6, -1.5); break;
        case Data.timer <= 100: Data.armY = Machine.armPosition(Data.timer, 80, 100, 11.2, 13); break;
        case Data.timer <= 120: Data.armY = Machine.armPosition(Data.timer, 100, 120, 13, 11.2); break;
        case Data.timer <= 180: Data.armX = Machine.armPosition(Data.timer, 120, 180, -1.5, 3); break;
        case Data.timer <= 200: Data.armY = Machine.armPosition(Data.timer, 180, 200, 11.2, 13); break;
        case Data.timer <= 220: Data.armY = Machine.armPosition(Data.timer, 200, 220, 13, 11.2); break;
        case Data.timer <= 280: Data.armX = Machine.armPosition(Data.timer, 220, 280, 3, -1.5); break;
        case Data.timer <= 300: Data.armY = Machine.armPosition(Data.timer, 280, 300, 11.2, 13); break;
        case Data.timer <= 320: Data.armY = Machine.armPosition(Data.timer, 300, 320, 13, 11.2); break;
        case Data.timer <= 380: Data.armX = Machine.armPosition(Data.timer, 320, 380, -1.5, -6); break;
        case Data.timer <= 400: Data.armY = Machine.armPosition(Data.timer, 380, 400, 11.2, 13); break;
        default: Data.timer = 0;
      }
      const render = new Render();
      const parts = [
        {uv: {x: Data.meta * 32, y: 0}, coords: {x: Data.armX, y: 11, z: -8}, size: {x: 3, y: 2, z: 13}},
        {uv: {x: 0, y: 15}, coords: {x: Data.armX + 1, y: Data.armY, z: -5}, size: {x: 1, y: 8, z: 1}}
      ];
      Machine.translateModel(parts, Data.meta);
      render.setPart("body", parts, {width: 128, height: 24});
      this.describe({skin: "model/synthesiser_arm.png", render: render.getID()});
      this.refresh();
    });
  },
  destroy: function(){
    for(let i = 9; i--;){
      this.container.clearSlot("slotPattern" + i);
    }
    this.container.clearSlot("slotResult");
    if(this.anim){
      this.anim.destroy();
      this.anim = null;
    }
  },
  getGuiScreen: function(){
    return Machine.gui.synthesiser;
  },
  getTransportSlots: function(){
    const slots = [];
    for(let i = 0; i < 18; i++){
      slots.push("slot" + i);
    }
    return {input: slots, output: []};
  },
  getEnergyStorage: function(){
    return 100000;
  },
  energyTick: Machine.energyTick,
  tick: function(){
    if(this.container.isOpened()){
      let pattern;
      let i = 0;
      const journal = this.container.getSlot("slotJournal");
      if(journal.id == ItemID.chemist_journal && journal.extra){
        pattern = Synthesiser.decodePattern(journal.extra.getString("pattern") + "");
        for(i = 0; i < 9; i++){
          pattern[i] ?
            this.container.setSlot("slotPattern" + i, pattern[i][0], pattern[i][1], 0) :
            this.container.clearSlot("slotPattern" + i);
        }
      }
      pattern = [];
      let slot;
      for(i = 0; i < 9; i++){
        slot = this.container.getSlot("slotPattern" + i);
        pattern.push([slot.id, slot.count]);
      }
      const result = Synthesiser.getRecipe(pattern);
      if(result){
        this.container.setSlot("slotResult", result.id, result.count, result.data);
        this.cost = result.cost;
      }
      else{
        this.container.clearSlot("slotResult");
        this.cost = 0;
      }
      this.container.setText("textEnergy", this.data.energy + " RF");
    }
    if(this.cost){
      this.timer += Math.min(1 + this.cost / 1000, 10);
    }
  }
});




// file: block/microscope.js

IDRegistry.genBlockID("microscope");
Block.createBlock("microscope", [
  {name: "tile.microscope", texture: [["empty", 0]]},
  {name: "tile.microscope", texture: [["empty", 0]]},
  {name: "tile.microscope", texture: [["empty", 0]]},
  {name: "tile.microscope", texture: [["empty", 0]]}
]);
ToolAPI.registerBlockMaterial(BlockID.microscope, "stone");
Block.setDestroyTime(BlockID.microscope, 5);

(function(){
  let mesh, model, render;
  for(let i = 4; i--;){
    mesh = new RenderMesh();
    mesh.setBlockTexture("microscope", 0);
    mesh.importFromFile(__dir__ + "res/model/microscope_" + i + ".obj", "obj", null);
    model = new BlockRenderer.Model(mesh);
    render = new ICRender.Model();
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID.microscope, i, render);
  }
})();

IDRegistry.genItemID("microscope");
Item.createItem("microscope", "Microscope", {name: "microscope"});
Item.registerUseFunction("microscope", function(c){
  c = c.relative;
  if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
    World.setBlock(c.x, c.y, c.z, BlockID.microscope, Machine.getRotation());
    Player.decreaseCarriedItem();
  }
  Game.prevent();
});

Block.registerDropFunction("microscope", function(){
  return [[ItemID.microscope, 1]];
});



Machine.registerGUI("microscope", "Microscope", {
  drawing: [
    {type: "bitmap", x: 586, y: 280, bitmap: "chem_triangle_down", scale: 3.2}
  ],
  elements: {
    window: {type: "image", x: 400, y: 80, z: 1, bitmap: "chem_window", scale: 3.4},
    slotSample: {type: "slot", x: 400, y: 80, bitmap: "chem_back", size: 180, isValid: Microscope.validSample, clicker: Microscope.clearSample},
    slot0: {type: "slot", x: 640, y: 80, visual: true, clicker: Microscope.slotInfo(0)},
    slot1: {type: "slot", x: 700, y: 80, visual: true, clicker: Microscope.slotInfo(1)},
    slot2: {type: "slot", x: 760, y: 80, visual: true, clicker: Microscope.slotInfo(2)},
    slot3: {type: "slot", x: 640, y: 140, visual: true, clicker: Microscope.slotInfo(3)},
    slot4: {type: "slot", x: 700, y: 140, visual: true, clicker: Microscope.slotInfo(4)},
    slot5: {type: "slot", x: 760, y: 140, visual: true, clicker: Microscope.slotInfo(5)},
    slot6: {type: "slot", x: 640, y: 200, visual: true, clicker: Microscope.slotInfo(6)},
    slot7: {type: "slot", x: 700, y: 200, visual: true, clicker: Microscope.slotInfo(7)},
    slot8: {type: "slot", x: 760, y: 200, visual: true, clicker: Microscope.slotInfo(8)},
    slotJournal: {type: "slot", x: 580, y: 320, bitmap: "slot_journal", isValid: function(id){
      return id == ItemID.chemist_journal;
    }}
  }
});


Callback.addCallback("ItemUse", function(c, item, block){
  if(block.id == BlockID.microscope && !Entity.getSneaking(Player.get())){
    Game.prevent();
    Microscope.container.openAs(Machine.gui.microscope);
    Microscope.container.getGuiContent().elements.slotSample.visual = false;
  }
});


Microscope.container.setOnCloseListener({
  onClose: function(con){
    const pos = Player.getPosition();
    for(let i = 9; i--;){
      con.clearSlot("slot" + i);
    }
    con.clearSlot("slotSample");
    con.dropSlot("slotJournal", pos.x, pos.y, pos.z);
    con.getSlot("slotJournal").extra = null;
  }
});




// file: block/other_mod.js

ModAPI.addAPICallback("ICore", function(){
  Decomposer.addRecipe(ItemID.ingotCopper, -1, {Cu: 16});
  Decomposer.addRecipe(ItemID.ingotTin, -1, {Sn: 16});
  Decomposer.addRecipe(ItemID.ingotSilver, -1, {Ag: 16});
  Decomposer.addRecipe(ItemID.ingotLead, -1, {Pb: 16});
  Decomposer.addRecipe(ItemID.ingotSteel, -1, {Fe: 15, C: 1});
  Decomposer.addRecipe(ItemID.ingotBronze, -1, {Cu: 12, Sn: 4});
  Synthesiser.addRecipe({id: ItemID.ingotCopper}, "INGOT", [["Cu", 16]]);
  Synthesiser.addRecipe({id: ItemID.ingotTin}, "INGOT", [["Sn", 16]]);
  Synthesiser.addRecipe({id: ItemID.ingotSilver}, "INGOT", [["Ag", 16]]);
  Synthesiser.addRecipe({id: ItemID.ingotLead}, "INGOT", [["Pb", 16]]);
  Synthesiser.addRecipe({id: ItemID.ingotSteel}, "INGOT", [["Fe", 15], ["C", 1]]);
  Synthesiser.addRecipe({id: ItemID.ingotBronze}, "INGOT", [["Cu", 12], ["Sn", 4]]);
});

ModAPI.addAPICallback("ForestryAPI", function(){
  Decomposer.addRecipe(ItemID.ingotCopper, -1, {Cu: 16});
  Decomposer.addRecipe(ItemID.ingotTin, -1, {Sn: 16});
  Decomposer.addRecipe(ItemID.ingotBronze, -1, {Cu: 12, Sn: 4});
  Decomposer.addRecipe(ItemID.apatite, -1, {Ca: 5, phosphate: 4, Cl: 1});
  Synthesiser.addRecipe({id: ItemID.ingotCopper}, "INGOT", [["Cu", 16]]);
  Synthesiser.addRecipe({id: ItemID.ingotTin}, "INGOT", [["Sn", 16]]);
  Synthesiser.addRecipe({id: ItemID.ingotBronze}, "INGOT", [["Cu", 12], ["Sn", 4]]);
  Synthesiser.addRecipe({id: ItemID.apatite}, "OBSIDIAN", [["Ca", 5], ["phosphate", 4], ["Cl", 1]]);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 0}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["blackPigment", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 1}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["redPigment", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 2}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["greenPigment", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 3}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["tannicacid", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 4}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["lazurite", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 5}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["purplePigment", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 6}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], ["whitePigment", 1], null, ["lightbluePigment", 1], ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 7}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], ["whitePigment", 1], ["whitePigment", 1], ["blackPigment", 1], ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 8}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], ["whitePigment", 1], null, ["blackPigment", 1], ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 9}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], ["whitePigment", 1], null, ["redPigment", 1], ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 10}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["limePigment", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 11}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["yellowPigment", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 12}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["lightbluePigment", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 13}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], ["lightbluePigment", 1], null, ["redPigment", 1], ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 14}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["orangePigment", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
  Synthesiser.addRecipe({id: BlockID.forestryGlass, data: 15}, "GLASS", [["siliconDioxide", 4], null, ["siliconDioxide", 4], null, ["whitePigment", 1], null, ["siliconDioxide", 4], null, ["siliconDioxide", 4]], true);
});




// file: item/component.js

IDRegistry.genItemID("lens_concave");
Item.createItem("lens_concave", "Concave Lens", {name: "chem_lens", meta: 0});
Recipes.addShaped({id: ItemID.lens_concave}, ["aoa", "aaa", "aoa"], ["a", 20, 0]);

IDRegistry.genItemID("lens_convex");
Item.createItem("lens_convex", "Convex Lens", {name: "chem_lens", meta: 1});
Recipes.addShaped({id: ItemID.lens_convex}, ["oao", "aaa", "oao"], ["a", 20, 0]);

IDRegistry.genItemID("lens_microscope");
Item.createItem("lens_microscope", "Microscope Lens", {name: "chem_lens", meta: 2});
Recipes.addShaped({id: ItemID.lens_microscope}, ["a", "b", "a"], ["a", ItemID.lens_convex, 0, "b", ItemID.lens_concave, 0]);

IDRegistry.genItemID("lens_projector");
Item.createItem("lens_projector", "Projector Lens", {name: "chem_lens", meta: 3});
Recipes.addShaped({id: ItemID.lens_projector}, ["aba"], ["a", ItemID.lens_concave, 0, "b", ItemID.lens_convex, 0]);

IDRegistry.genItemID("atomic_manipulator");
Item.createItem("atomic_manipulator", "Atomic Manipulator", {name: "atomic_manipulator"});
Recipes.addShaped({id: ItemID.atomic_manipulator}, ["aaa", "aba", "aaa"], ["a", 33, -1, "b", 42, 0]);


Recipes.addShaped({id: ItemID.decomposer}, ["aaa", "aba", "aca"], ["a", 265, 0, "b", ItemID.atomic_manipulator, 0, "c", 331, 0]);
Recipes.addShaped({id: ItemID.synthesiser}, ["aba", "aca", "ada"], ["a", 265, 0, "b", 331, 0, "c", ItemID.atomic_manipulator, 0, "d", 264, 0]);
Recipes.addShaped({id: ItemID.microscope}, ["oab", "ocb", "bbb"], ["a", ItemID.lens_microscope, 0, "b", 265, 0, "c", 102, 0]);
//Recipes.addShaped({id: ItemID.projector}, ["oao", "bcd", "oao"], ["a", 265, 0, "b", 123, 0, "c", 102, 0, "d", ItemID.lens_projector, 0]);
Recipes.addShapeless({id: ItemID.chemist_journal}, [{id: 340}, {id: 20}]);




