IMPORT("NJJCore", "Inventory");

const CV = {};

(function(){
  const source = FileTools.ReadJSON(__dir__+"/CV.json");
  let newKey;
  for(let key in source){
    newKey = key.split(":").length == 1 ? eval(key) : key;
    CV[newKey] = source[key];
  };
})();

IDRegistry.genItemID("aec");
Item.createItem("aec", "Alchemical Energy Container", {name: "minor_aec"}, {stack: 1, isTech: true});

Item.registerNameOverrideFunction(ItemID.aec, function(item, name){
  item = Player.getCarriedItem();
  return name + "\n§bCV: " + (item.extra ? item.extra.getInt("cv") : "Error");
});

Item.registerIconOverrideFunction(ItemID.aec, function(item){
  return {name: "minor_aec", meta: item.data};
});

const getCV = function(item){
  if(item.extra && item.extra.getInt("cv")){
    return item.extra.getInt("cv");
  }
  if(ToolList[item.id]){
    const charge = Tool.getCharge(item);
    return Tool.getCV(item) * (charge == 1 ? 1 : charge * 0.7) | 0;
  }
  if(CV[item.id + ":" + item.data]){
    return CV[item.id + ":" + item.data].cv * item.count;
  }
  if(CV[item.id]){
    if(CV[item.id].type){
      const max = Item.getMaxDamage(item.id);
      let value = CV[item.id].cv;
      item.data && (value *= (max - item.data) / max * 0.7);
      if(item.extra){
        const enc = item.extra.getEnchants();
        for(let key in enc){
          value += 30000 / ENC[key].weight * Math.pow(3, enc[key] / 3);
        }
      }
      return value | 0;
    }
    return CV[item.id].cv * item.count;
  }
  return 0;
};

const textCV = function(extra, text){
  const cv = extra ? extra.getInt("cv") : 0;
  const color = getColor(cv);
  text.text = ("0000000000" + cv).slice(-10);
  text.font.color = android.graphics.Color.rgb((color >> 16) & 0xff, (color >> 8) & 0xff, color & 0xff);
};

const allClear = function(item){
  item.id = item.count = item.data = item.extra = 0;
};

const returnSlot = function(con, name){
  const pos = Player.getPosition();
  slot = con.getSlot(name);
  slot.extra ?
    con.dropSlot(name, pos.x, pos.y, pos.z) :
    Inventory.addItem(slot.id, slot.count, slot.data) &
    allClear(slot);
};