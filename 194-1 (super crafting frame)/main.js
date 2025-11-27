/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: header.js

/*
┏━━┳━━┳━━┓
┃━━┫┏━┫━┳┛
┣━━┃┗━┫┏┛
┗━━┻━━┻┛
by NikuJagajaga
*/


const CHEST = {54: 54};
BlockID.iron_chest && (
  CHEST[BlockID.iron_chest] = 54,
  CHEST[BlockID.gold_chest] = 81,
  CHEST[BlockID.diamond_chest] = 108,
  CHEST[BlockID.obsidian_chest] = 108,
  CHEST[BlockID.crystal_chest] = 108
);
BlockID.copper_chest && (
  CHEST[BlockID.copper_chest] = 45,
  CHEST[BlockID.tin_chest] = 54,
  CHEST[BlockID.bronze_chest] = 54,
  CHEST[BlockID.steel_chest] = 72
);

const sideCoords = function(c, dir){
  return [
    {x: c.x, y: c.y + 1, z: c.z},
    {x: c.x, y: c.y - 1, z: c.z},
    {x: c.x, y: c.y, z: c.z + 1},
    {x: c.x, y: c.y, z: c.z - 1},
    {x: c.x + 1, y: c.y, z: c.z},
    {x: c.x - 1, y: c.y, z: c.z}
  ][dir];
};

const regFrame = function(name, rec){
  const id = "scf" + name;

  IDRegistry.genItemID(id);
  Item.createItem(id, "Super " + name + " Frame", {name: id});

  IDRegistry.genBlockID(id);
  Block.createBlock(id, [
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]},
    {name: "", texture: [[id, 0]]}
  ]);

  let render, model;
  const base = [[2/16, 11/64], [2/16, 53/64], [53/64, 14/16], [11/64, 14/16]];
  let arr;
  for(let i = 6; i--;){
    render = new ICRender.Model();
    model = BlockRenderer.createModel();
    for(let j = 4; j--;){
      arr = [base[0], base[1]];
      arr.splice(-~(i / 2) % 3, 0, i & 1 ? [0, 1/16] : [15/16, 1]);
      model.addBox(arr[0][0], arr[1][0], arr[2][0], arr[0][1], arr[1][1], arr[2][1], 5, 0);
     base.unshift(base.pop());
    }
    arr = [[11/64, 53/64], [11/64, 53/64]];
    arr.splice(-~(i / 2) % 3, 0, i & 1 ? [0, 1/32] : [31/32, 1]);
    model.addBox(arr[0][0], arr[1][0], arr[2][0], arr[0][1], arr[1][1], arr[2][1], BlockID[id], 0);
    Block.setShape(BlockID[id], arr[0][0], arr[1][0], arr[2][0], arr[0][1], arr[1][1], arr[2][1], i);
    render.addEntry(model);
    BlockRenderer.setStaticICRender(BlockID[id], i, render);
  }

  Block.setDestroyTime(id, 0);

  Item.registerUseFunction(id, function(c){
    const tile = World.getTileEntity(c.x, c.y, c.z);
    const side = c.side;
    c = c.relative;
    (Entity.getSneaking(Player.get()) || !tile) &&
    GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z)) &&
      Game.prevent() &
      World.setBlock(c.x, c.y, c.z, BlockID[id], side) &
      World.addTileEntity(c.x, c.y, c.z) &
      Player.decreaseCarriedItem();
  });

  Block.registerDropFunction(id, function(){
    return [[ItemID[id], 1, 0]];
  });

  Recipes.addShaped({id: ItemID[id]}, ["aaa", "aba", "aaa"], ["a", 280, 0, "b", rec, 0]);

};

const FRAME = [BlockID.scfCrafting, BlockID.scfItem, BlockID.scfVoid];

Callback.addCallback("DestroyBlock", function(c){

  const side = [
    {x: c.x, y: c.y-1, z: c.z},
    {x: c.x, y: c.y+1, z: c.z},
    {x: c.x, y: c.y, z: c.z-1},
    {x: c.x, y: c.y, z: c.z+1},
    {x: c.x-1, y: c.y, z: c.z},
    {x: c.x+1, y: c.y, z: c.z}
  ];
  let block, tile;
  for(let i = 6; i--;){
    block = World.getBlock(side[i].x, side[i].y, side[i].z);
    ~FRAME.indexOf(block.id) && block.data == i &&
      (tile = World.getTileEntity(side[i].x, side[i].y, side[i].z)) &
      tile.container.clearSlot("slotResult") &
      tile.anim.destroy() &
      World.removeTileEntity(side[i].x, side[i].y, side[i].z) &
      World.destroyBlock(side[i].x, side[i].y, side[i].z, true);
  }
});

const setAnim = function(tile, item){
  item || (item = tile.data);
  const dir = World.getBlock(tile.x, tile.y, tile.z).data;
  const notCube = [6, 27, 28, 30, 31, 32, 37, 38, 39, 40, 50, 65, 66, 69, 76, 101, 102];
  const isCube = item.id < 256 && !~notCube.indexOf(item.id) || item.id >= 8000;
  const add = isCube ? {
    x: dir == 4 ? 31/32 : dir == 5 ? 2/32 : dir == 0 || dir == 1 || dir == 3 ? 29/64 : 35/64,
    y: dir == 0 ? 31/32 : dir == 1 ? 2/32 : 29/64,
    z: dir == 2 ? 31/32 : dir == 3 ? 2/32 : dir == 0 || dir == 4 ? 29/64 : 35/64
  } : {
    x: dir == 4 ? 31/32 : dir == 5 ? 2/32 : .5,
    y: dir == 0 ? 31/32 : dir == 1 ? 2/32 : .5,
    z: dir == 2 ? 31/32 : dir == 3 ? 2/32 : .5
  };
  tile.anim = new Animation.item(tile.x + add.x, tile.y + add.y, tile.z + add.z);
  item.id && tile.anim.describeItem({
    id: item.id >= 8000 ? 1 : item.id,
    data: item.id >= 8000 ? 0 : item.data,
    count: 1,
    size: isCube ? 0.25 : 0.5,
    rotation: isCube ? [
      dir == 0 ? Math.PI/2 : dir == 1 ? -Math.PI/2 : 0,
      dir == 2 ? Math.PI/2 : dir == 3 ? -Math.PI/2 : dir == 5 ? Math.PI : 0,
      dir == 0 ? -Math.PI/2 : dir == 1 ? Math.PI/2 : 0
    ] : [
      dir == 0 ? Math.PI/2 : dir == 1 ? -Math.PI/2 : 0,
      dir == 2 ? Math.PI : dir == 4 ? Math.PI/2 : dir == 5 ? -Math.PI/2 : 0,
      0
    ]
  });
  tile.anim.load();
};

const output = function(c, dir, item, count){
  Entity.setVelocity(
    World.drop(c.x + .5, c.y + .5, c.z + .5, item.id, count || item.count, item.data),
    dir == 4 ? -0.2 : dir == 5 ? 0.2 : 0,
    dir == 0 ? -0.2 : dir == 1 ? 0.2 : 0,
    dir == 2 ? -0.2 : dir == 3 ? 0.2 : 0
  );
};




// file: frame/crafting.js

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




// file: frame/item.js

regFrame("Item", 125);

TileEntity.registerPrototype(BlockID.scfItem, {
  defaultValues: {
    id: 0,
    data: 0
  },
  anim: null,
  init: function(){
    setAnim(this);
  },
  click: function(id, count, data){
    Game.prevent();
    if(this.data.id){
      const dir = World.getBlock(this.x, this.y, this.z).data;
      const side = sideCoords(this, dir);
      const chest = World.getBlockID(side.x, side.y, side.z);
      if(chest in CHEST){
        const con = World.getContainer(side.x, side.y, side.z);
        const stack = Item.getMaxStack(this.data.id);
        let val = count = 0;
        let name, slot;
        for(let i = CHEST[chest]; i--;){
          name = chest == 54 ? i : "slot" + (i + 1);
          slot = con.getSlot(name) || {id: 0, data: 0, count: 64};
          if(slot.id == this.data.id && slot.data == this.data.data){
            if(Entity.getSneaking(Player.get())){
              val = Math.min(slot.count, stack - count);
              count += val;
              slot.count -= val;
              slot.count ?
                con.setSlot(name, slot.id, slot.count, slot.data) :
                con.setSlot(name, 0, 0, 0);
              if(count == stack){
                break;
              }
            }
            else{
              count = 1;
              --slot.count ?
                con.setSlot(name, slot.id, slot.count, slot.data) :
                con.setSlot(name, 0, 0, 0);
              break;
            }
          }
        }
        count && output(this, dir, this.data, count);
      }
    }
    else{
      this.data.id = id;
      this.data.data = data;
      setAnim(this);
    }
  },
  destroy: function(){
    this.anim.destroy();
  }
});

Callback.addCallback("DestroyBlockStart", function(c, block){
  if(block.id == BlockID.scfItem){
    const tile = World.getTileEntity(c.x, c.y, c.z) || {data: {}};
    if(!tile.data.id){
      return;
    }
    Game.prevent();
    const sneak = Entity.getSneaking(Player.get());
    const item = Player.getCarriedItem();
    if(item.id != tile.data.id && !sneak){
      tile.data.id = tile.data.data = 0;
      tile.anim.destroy();
      return;
    }
    const side = sideCoords(c, block.data);
    const chest = World.getBlockID(side.x, side.y, side.z);
    if(chest in CHEST){
      const con = World.getContainer(side.x, side.y, side.z);
      const stack = Item.getMaxStack(tile.data.id);
      let name, slot;
      let i = capa = val = count = 0;
      for(i = CHEST[chest]; i--;){
        name = chest == 54 ? i : "slot" + (i + 1);
        slot = con.getSlot(name) || {id: 0, data: 0, count: 64};
        (!slot.id || slot.id == tile.data.id && slot.data == tile.data.data && slot.count < stack) && (capa += stack - slot.count);
      }
      if(sneak){
        for(i = 36; i--;){
          name = i + 9;
          slot = Player.getInventorySlot(name);
          slot.id == tile.data.id && slot.data == tile.data.data &&
            (val = Math.min(slot.count, capa - count), count += val, slot.count -= val) &
            (slot.count ?
              Player.setInventorySlot(name, slot.id, slot.count, slot.data) :
              Player.setInventorySlot(name, 0));
          if(count == capa){
            break;
          }
        }
      }
      else{
        item.id == tile.data.id && item.data == tile.data.data &&
          (val = Math.min(item.count, capa), item.count -= val, count = val) &
          (item.count ?
            Player.setCarriedItem(item.id, item.count, item.data) :
            Player.setCarriedItem(0));
      }
      for(i = 0; i <= CHEST[chest]; i++){
        name = chest == 54 ? i : "slot" + (i + 1);
        slot = con.getSlot(name) || {id: 0, data: 0, count: 64};
        (!slot.id || slot.id == tile.data.id && slot.data == tile.data.data && slot.count < stack) &&
          (val = Math.min(count, stack - slot.count), count -= val) &
          con.setSlot(name, tile.data.id, slot.count + val, tile.data.data);
        if(!count){
          break;
        }
      }
    }
  }
});




// file: frame/void.js

regFrame("Void", 368);

Callback.addCallback("ItemUse", function(c, item, block){
  block.id == BlockID.scfVoid &&
    Game.prevent() &
    Player.setCarriedItem(0);
});

Callback.addCallback("DestroyBlockStart", function(c, block){
  if(block.id == BlockID.scfVoid && !Entity.getSneaking(Player.get())){
    const item = Player.getCarriedItem();
    if(!item.id){
      return;
    }
    let slot;
    Game.prevent();
    for(let i = 36; i--;){
      slot = Player.getInventorySlot(i + 9);
      slot.id == item.id && slot.data == item.data &&
        Player.setInventorySlot(i + 9, 0);
    }
    Player.setCarriedItem(0);
  }
});




