const upgFunc = function(id, lv){
  return function(api, field, dummy){
    const p = Player.getPosition();
    const result = api.container.getSlot("result_icon");
    if(field[0].extra && field[0].extra.isEnchanted()){
      alert(Item.getName(dummy.id) + " has being already enchanted.");
      api.prevent();
    }
    else{
      result.extra = new ItemExtraData();
      result.extra.addEnchant(id, lv);
      result.data = field[0].data;
      api.container.dropSlot("result_icon", p.x, p.y, p.z);
      result.id = dummy.id;
      result.count = 1;
      dummy.id = dummy.count = dummy.data = 0;
      for(let i = 9; i--;){
        api.decreaseFieldSlot(i);
      }
    }
  }
};

const bucketFunc = function(api, field){
  for(let i = 9; i--;){
    if(i == 4){
      continue;
    }
    api.decreaseFieldSlot(i);
  }
  field[4].data = 0;
};