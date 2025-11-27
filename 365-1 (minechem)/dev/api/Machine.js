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