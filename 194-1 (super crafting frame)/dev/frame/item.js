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