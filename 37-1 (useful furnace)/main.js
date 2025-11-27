const exp = {
  1: 0.1,
  20: 0.1,
  98: 0.1,
  405: 0.1,
  19: 0.15,
  263: 0.15,
  351: 0.2,
  406: 0.2,
  336: 0.3,
  172: 0.35,
  320: 0.35,
  350: 0.35,
  364: 0.35,
  366: 0.35,
  393: 0.35,
  412: 0.35,
  424: 0.35,
  458: 0.35,
  463: 0.35,
  265: 0.7,
  331: 0.7,
  264: 1,
  266: 1,
  388: 1
};

Callback.addCallback("ItemUse", function(coords, item, block){
  if((block.id == 61 || block.id == 62) && Recipes.getFurnaceRecipeResult(item.id) && item.count >= 8){
    for(let i = 36; i--;){
      let slot = Player.getInventorySlot(i + 9);
      if(slot.id == 263){
        const con = World.getContainer(coords.x, coords.y, coords.z);
        const input = con.getSlot(0);
        const fuel = con.getSlot(1);
        if((input.id == 0 || input.id == item.id && input.data == item.data && input.count <= 56) && (fuel. id ==0 || fuel.id == slot.id && fuel.data == slot.data && fuel.count <= 63)){
          Game.prevent();
          con.setSlot(0, item.id, input.count + 8, item.data);
          con.setSlot(1, slot.id, fuel.count + 1, slot.data);
          Player.decreaseCarriedItem(8);
          slot.count--;
          if(!slot.count)slot.id = 0;
          Player.setInventorySlot(i + 9, slot.id, slot.count, slot.data);
          World.playSound(coords.x, coords.y, coords.z, "fire.ignite");
        }
        break;
      }
    }
  }
});

Callback.addCallback("DestroyBlockStart", function(coords, block){
  if(block.id == 61 || block.id == 62){
    const con = World.getContainer(coords.x, coords.y, coords.z);
    const result = con.getSlot(2);
    World.playSound(coords.x, coords.y, coords.z, "mob.cow.step");
    coords = coords.relative;
    World.drop(coords.x + .5, coords.y + .5, coords.z + .5, result.id, result.count, result.data);
    if(result.id in exp){
      const orb = (exp[result.id] * result.count)|0;
      ToolAPI.dropOreExp(coords, orb, orb+1, true);
    }
    con.setSlot(2, 0, 0, 0);
  }
});