LIBRARY({
  name: "NJJCore",
  version: 2,
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
  }
};

registerAPIUnit("Register", Register);
registerAPIUnit("Inventory", Inventory);
registerAPIUnit("RecFunc", RecFunc);
registerAPIUnit("Utility", Utility);