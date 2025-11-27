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