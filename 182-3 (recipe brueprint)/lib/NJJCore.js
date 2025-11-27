LIBRARY({
  name: "NJJCore",
  version: 1,
  shared: true,
  api: "CoreEngine",
});

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

registerAPIUnit("Inventory", Inventory);