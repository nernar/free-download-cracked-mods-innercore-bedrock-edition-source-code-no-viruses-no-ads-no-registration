LIBRARY({
  name: "NJJCore",
  version: 3,
  shared: true,
  api: "CoreEngine",
});


var Register = {
  multiItem: function(id, name, stack){
    stack || (stack = 64);
    IDRegistry.genItemID(id);
    Item.createItem(id, name[0], {name: id, meta: 0}, {stack: stack});
/*
    for(let i = 1; i < name.length; i++){
      Item.addToCreative(ItemID.ess_base, stack, i);
    }
*/
    Item.registerNameOverrideFunction(ItemID[id], function(item){
      return name[item.data];
    });
    Item.registerIconOverrideFunction(ItemID[id], function(item){
      return {name: id, meta: item.data};
    });
  }
};

var Inventory = {
  addItem: function(id, count, data){
    data || (data = 0);
    const stack = Item.getMaxStack(id);
    const pos = Player.getPosition();
    let slot;
    let val = 0;
    for(let i = 9; i <= 44; i++){
      slot = Player.getInventorySlot(i);
      (!slot.id || slot.id == id && slot.data == data && slot.count < stack) &&
        (val = Math.min(count, stack - slot.count), count -= val) &
        Player.setInventorySlot(i, id, slot.count + val, data);
      if(!count){
        break;
      }
    }
    while(count >= stack){
      World.drop(pos.x, pos.y, pos.z, id, stack, data);
      count -= stack;
    }
    stack && World.drop(pos.x, pos.y, pos.z, id, count, data);
  },
  decreaseItem: function(id, count, data){
    let i = 0;
    let slot;
    let total = 0;
    for(i = 36; i--;){
      slot = Player.getInventorySlot(i + 9);
      slot.id == id && (data == undefined || slot.data == data) && (total += slot.count);
    }
    if(total < count){
      return false;
    }
    for(i = 36; i--;){
      slot = Player.getInventorySlot(i + 9);
      if(slot.id == id && (data == undefined || slot.data == data)){
        if(slot.count >= count){
          slot.count -= count;
          slot.count ?
            Player.setInventorySlot(i + 9, slot.id, slot.count, slot.data) :
            Player.setInventorySlot(i + 9, 0);
          break;
        }
        else{
          count -= slot.count;
          Player.setInventorySlot(i + 9, 0);
        }
      }
    }
    return true;
  },
  decreaseItems: function(req){
    let key;
    let item;
    let count = 0;
    let i = 0;
    let slot;
    for(key in req){
      item = key.split(":");
      count = 0;
      for(i = 36; i--;){
        slot = Player.getInventorySlot(i + 9);
        slot.id == item[0] && (item[1] == undefined || slot.data == item[1]) && (count += slot.count);
      }
      if(count < req[key]){
        return false;
      }
    }
    for(key in req){
      item = key.split(":");
      count = req[key];
      for(i = 36; i--;){
        slot = Player.getInventorySlot(i + 9);
        if(slot.id == item[0] && (item[1] == undefined || slot.data == item[1])){
          if(slot.count >= count){
            slot.count -= count;
            slot.count ?
              Player.setInventorySlot(i + 9, slot.id, slot.count, slot.data) :
              Player.setInventorySlot(i + 9, 0);
            break;
          }
          else{
            count -= slot.count;
            Player.setInventorySlot(i + 9, 0);
          }
        }
      }
    }
    return true;
  }
};

var RecFunc = {
  bucket: function(api, field){
    for(let i = 9; i--;){
      field[i].id == 325 ?
        field[i].data = 0 :
        api.decreaseFieldSlot(i);
    }
  }
};

var Utility = {
  random: function(min, max, count){
    let value = 0;
    for(let i = count || 1; i--;){
      value += Math.random() * (max-min+1) + min |0;
    }
    return value;
  },
  createButtonTex: function(w, h){
    UI.TextureSource.put("btnNJJ1_" + w + "x" + h, UI.FrameTextureSource.get("default_frame_3").expandAndScale(w, h, 1, android.graphics.Color.rgb(149, 134, 129)));
    UI.TextureSource.put("btnNJJ2_" + w + "x" + h, UI.FrameTextureSource.get("default_frame_2").expandAndScale(w, h, 1, android.graphics.Color.rgb(125, 117, 117)));
  }
};


registerAPIUnit("Register", Register);
registerAPIUnit("Inventory", Inventory);
registerAPIUnit("RecFunc", RecFunc);
registerAPIUnit("Utility", Utility);