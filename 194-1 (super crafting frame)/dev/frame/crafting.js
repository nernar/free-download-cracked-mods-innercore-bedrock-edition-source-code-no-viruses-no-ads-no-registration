regFrame("Crafting", 58);

const GUI = new UI.StandartWindow({
  standart: {
    header: {
      text: {text: "Super Crafting Frame"},
      hideButton: true
    },
    inventory: {standart: true},
    background: {standart: true},
  },
  drawing: [
    {type: "bitmap", x: 645, y: 185, bitmap: "_workbench_bar", scale: 0.8},
  ],
  elements: {
    "slot0": {type: "slot", x: 420, y: 120},
    "slot1": {type: "slot", x: 480, y: 120},
    "slot2": {type: "slot", x: 540, y: 120},
    "slot3": {type: "slot", x: 420, y: 180},
    "slot4": {type: "slot", x: 480, y: 180},
    "slot5": {type: "slot", x: 540, y: 180},
    "slot6": {type: "slot", x: 420, y: 240},
    "slot7": {type: "slot", x: 480, y: 240},
    "slot8": {type: "slot", x: 540, y: 240},
    "slotResult": {type: "slot", x: 740, y: 165, size: 90, clicker: {
      onClick: function(){},
      onLongClick: function(){}
    }},
    "button": {type: "button", x: 840, y: 100, bitmap: "scfButton_0", scale: 3.2, clicker: {
      onClick: function(con, tile){
        tile.data.mode = (tile.data.mode + 1) % 3;
      }
    }},
    "close": {type: "button", x: 940, y: 20, bitmap: "close_button_up", scale: 3.2, clicker: {
      onClick: function(con, tile){
        const res = con.getSlot("slotResult");
        tile.data.rec = {};
        tile.anim.destroy();
        if(res.id){
          const sozai = {};
          let slot, key;
          for(let i = 9; i--;){
            slot = con.getSlot("slot" + i);
            slot.id &&
              (key = slot.id + ":" + slot.data) &
              (sozai[key] = key in sozai ? sozai[key]+1 : 1);
          }
          tile.data.rec = sozai;
          setAnim(tile, res);
        }
        con.close();
      }
    }}
  }
});


TileEntity.registerPrototype(BlockID.scfCrafting, {
  defaultValues: {
    rec: {},
    mode: 0
  },
  anim: null,
  init: function(){
    const res = this.container.getSlot("slotResult");
    setAnim(this, res);
  },
  getMax: function(){
    const all = {};
    const dir = World.getBlock(this.x, this.y, this.z).data;
    let key, slot;
    let i = 0;
    for(key in this.data.rec){
      all[key] = 0;
    }
    if(this.data.mode != 1){
      for(i = 36; i--;){
        slot = Player.getInventorySlot(i + 9);
        key = slot.id + ":" + slot.data;
        key in this.data.rec && (all[key] += slot.count);
      }
    }
    if(this.data.mode != 2){
      const side = sideCoords(this, dir);
      const chest = World.getBlockID(side.x, side.y, side.z);
      if(chest in CHEST){
        const con = World.getContainer(side.x, side.y, side.z);
        for(i = CHEST[chest]; i--;){
          slot = con.getSlot(chest == 54 ? i : "slot" + (i + 1)) || {id: 0, data: 0, count: 64};
          key = slot.id + ":" + slot.data;
          key in this.data.rec && (all[key] += slot.count);
        }
      }
    }
    let count = max = 0;
    let item;
    for(key in all){
      count = all[key] / this.data.rec[key] | 0;
      if(!count){
        item = key.split(":");
        Game.message("Missing ingredient: " + Item.getName(item[0], item[1]));
        return 0;
      }
      (!max || max >= count) && (max = count);
    }
    return max;
  },
  decrease: function(count){
    const dir = World.getBlock(this.x, this.y, this.z).data;
    let item, name, slot, side, chest, con;
    let req = val = i = 0;
    for(let key in this.data.rec){
      req = count * this.data.rec[key];
      item = key.split(":");
      if(this.data.mode != 1){
        for(i = 36; i--;){
          name = i + 9;
          slot = Player.getInventorySlot(name);
          if(slot.id == item[0] && slot.data == item[1]){
            val = Math.min(req, slot.count);
            slot.count -= val;
            slot.count ?
              Player.setInventorySlot(name, slot.id, slot.count, slot.data) :
              Player.setInventorySlot(name, 0);
            req -= val;
            if(!req){
              break;
            }
          }
        }
      }
      if(this.data.mode != 2){
        side = sideCoords(this, dir);
        chest = World.getBlockID(side.x, side.y, side.z);
        if(chest in CHEST){
          con = World.getContainer(side.x, side.y, side.z);
          for(i = CHEST[chest]; i--;){
            name = chest == 54 ? i : "slot" + (i + 1);
            slot = con.getSlot(name) || {id: 0, data: 0};
            if(slot.id == item[0] && slot.data == item[1]){
              val = Math.min(req, slot.count);
              slot.count -= val;
              slot.count ?
                con.setSlot(name, slot.id, slot.count, slot.data) :
                con.setSlot(name, 0, 0, 0);
              req -= val;
              if(!req){
                break;
              }
            }
          }
        }
      }
    }
  },
  click: function(id, count, data){
    const res = this.container.getSlot("slotResult");
    Game.prevent();
    if(!res.id || Entity.getSneaking(Player.get())){
      this.container.openAs(GUI);
      return;
    }
    this.getMax() &&
      this.decrease(1) &
      output(this, World.getBlock(this.x, this.y, this.z).data, res);
  },
  tick: function(){
    const content = this.container.getGuiContent();
    let res;
    content && (
      res = Recipes.getRecipeResult(this.container) || {id: 0, count: 0, data: 0},
      content.elements.button.bitmap = "scfButton_" + this.data.mode) &
      this.container.setSlot("slotResult", res.id, res.count, res.data);
  },
  destroy: function(){
    this.container.clearSlot("slotResult");
    this.anim.destroy();
  }
});

Callback.addCallback("DestroyBlockStart", function(c, block){
  if(block.id == BlockID.scfCrafting && !Entity.getSneaking(Player.get())){
    const tile = World.getTileEntity(c.x, c.y, c.z);
    const res = tile ? tile.container.getSlot("slotResult") : {};
    if(res.id){
      let count = tile.getMax();
      Game.prevent();
      if(count){
        const stack = Item.getMaxStack(res.id);
        tile.decrease(count);
        count *= res.count;
        let val = 0;
        while(count >= stack){
          output(c, block.data, res, stack);
          count -= stack;
        }
        count && output(c, block.data, res, count);
      }
    }
  }
});