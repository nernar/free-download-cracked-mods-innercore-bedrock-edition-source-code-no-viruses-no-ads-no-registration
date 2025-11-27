const Shaped = {};


const regTool = function(type){

  IDRegistry.genItemID("aec_" + type);
  Item.createItem("aec_" + type, type.charAt(0).toUpperCase() + type.slice(1), {name: "minor_" + type}, {stack: 1, isTech: true});
  Item.setToolRender(ItemID["aec_" + type], true);

  Item.registerNameOverrideFunction(ItemID["aec_" + type], function(item, Type){
    item = Player.getCarriedItem();
    const max = Tool.getMax(item);
    let name = (Tool.getCharge(item) < 0.75 ? "Deteriorite " : "Proliferium ") + Type + "§7";
    name += "\nDurability: " + (max - Tool.getDur(item)) + " / " + max;
    Type != "Hoe" && (name += "\nDamage: " + ((Tool.getDam(item, ["Hoe", "Shovel", "Pickaxe", "Axe", "Sword"].indexOf(Type)) * 100 | 0) / 100));
    Type != "Sword" && Type != "Hoe" && (name += "\nEfficiency: " + ((Tool.getEff(item) * 100 | 0) / 100));
    Entity.getSneaking(Player.get()) && (name += "\nTotalUses: " + Tool.getUse(item));
    return name;
  });

  Item.registerIconOverrideFunction(ItemID["aec_" + type], function(item){
    return {name: "minor_" + type, meta: item.data};
  });

};

regTool("sword");
regTool("shovel");
regTool("pickaxe");
regTool("axe");
regTool("hoe");


const regRecipe = function(id, w, h, recipe){
  const matchX = 4 - w + 1;
  const matchY = 4 - h + 1;
  const array = [];
  let i = 0;
  let j = 0;
  for(i = matchX * matchY; i--;){
    array[i] = [];
    for(let j = 16; j--;){
      array[i][j] = 0;
    }
  }
  for(j = 0; j < matchY; j++){
  for(i = 0; i < matchX; i++){
  for(let y = 0; y < h; y++){
  for(let x = 0; x < w; x++){
    array[j * matchX + i][(y + j) * 4 + x + i] = recipe[y * w + x];
  }
  }
  }
  }
  for(i = array.length; i--;){
    Shaped[array[i].join("")] = id;
  }
};

regRecipe(ItemID.aec_sword, 1, 3, [2, 2, 1]);
regRecipe(ItemID.aec_shovel, 1, 3, [2, 1, 1]);
regRecipe(ItemID.aec_pickaxe, 3, 3, [2, 2, 2, 0, 1, 0, 0, 1, 0]);
regRecipe(ItemID.aec_axe, 2, 3, [2, 2, 2, 1, 0, 1]);
regRecipe(ItemID.aec_axe, 2, 3, [2, 2, 1, 2, 1, 0]);
regRecipe(ItemID.aec_hoe, 2, 3, [2, 2, 0, 1, 0, 1]);
regRecipe(ItemID.aec_hoe, 2, 3, [2, 2, 1, 0, 1, 0]);



const ToolList = {};
ToolList[ItemID.aec_sword] = 4098;
ToolList[ItemID.aec_shovel] = 2052;
ToolList[ItemID.aec_pickaxe] = 6148;
ToolList[ItemID.aec_axe] = 6148;
ToolList[ItemID.aec_hoe] = 4100;

const Tool = {
  getDur: function(tool){
    return tool.extra ? tool.extra.getInt("dur") : 0;
  },
  getUse: function(tool){
    return tool.extra ? tool.extra.getInt("use") : 0;
  },
  getCV: function(tool){
    return 20 * this.getUse(tool) + ToolList[tool.id];
  },
  getMax: function(tool){
    return 150 + this.getUse(tool) * 0.1 | 0;
  },
  getCharge: function(tool){
    const max = this.getMax(tool);
    return (max - this.getDur(tool)) / max;
  },
  getDam: function(tool, bonus){
    return this.getCharge(tool) * (this.getUse(tool) * 0.001 + bonus);
  },
  getEff: function(tool){
    return this.getCharge(tool) * (this.getUse(tool) * 0.005 + 2);
  },
  getHar: function(tool){
    return this.getCharge(tool) * this.getUse(tool) * 0.001;
  },
  funcSpeed: function(item, c, block, param, time){
    item = Player.getCarriedItem();
    if(isNaN(time)){
      time = Block.getDestroyTime(block.id);
      const toolData = ToolAPI.getCarriedToolData();
      const blockData = ToolAPI.getBlockData(block.id);
      let devider = 1;
      if(toolData.blockMaterials[blockData.material.name]){
        if(blockData.isNative){
          devider *= blockData.material.multiplier;
        }
      }
      else if(!blockData.isNative){
        time *= blockData.material.multiplier;
      }
      time /= devider;
    }
    return time / Tool.getEff(item);
  },
  damageCarriedItem: function(match){
    const item = Player.getCarriedItem();
    if(!this.getCharge(item)){
      return false;
    }
    item.extra.putInt("dur", Math.min(this.getMax(item), this.getDur(item) + (match ? 1 : 2)));
    match && item.extra.putInt("use", this.getUse(item) + 1);
    Player.setCarriedItem(item.id, 1, match ? Math.min(28, this.getUse(item) / 100 | 0) : item.data, item.extra);
    return true;
  }
};


ToolAPI.toolData[ItemID.aec_sword] = {
  isMinor: true,
  damage: 0,
  calcDestroyTime: function(item, c, block, param, time){
    if(block.id == 30){
      return 0.08;
    }
    if(block.id == 35){
      return 0.05;
    }
    const material = ToolAPI.getBlockMaterial(block.id) || {};
    if(material.name=="fibre" || material.name=="plant"){
      return param.base / 1.5;
    }
    return time;
  },
  onDestroy: function(){
    Tool.damageCarriedItem(false);
  },
  onAttack: function(){
    this.damage = Tool.damageCarriedItem(true) ? Tool.getDam(Player.getCarriedItem(), 4) : 0;
  }
};

ToolAPI.toolData[ItemID.aec_shovel] = {
  isMinor: true,
  damage: 0,
  toolMaterial: {level: 5},
  blockMaterials: {dirt: true},
  calcDestroyTime: Tool.funcSpeed,
  onDestroy: function(){
    Tool.damageCarriedItem(true);
  },
  onAttack: function(){
    this.damage = Tool.damageCarriedItem(false) ? Tool.getDam(Player.getCarriedItem(), 1) : 0;
  }
};

ToolAPI.toolData[ItemID.aec_pickaxe] = {
  isMinor: true,
  damage: 0,
  toolMaterial: {level: 5},
  blockMaterials: {stone: true},
  calcDestroyTime: Tool.funcSpeed,
  onDestroy: function(){
    Tool.damageCarriedItem(true);
  },
  onAttack: function(){
    this.damage = Tool.damageCarriedItem(false) ? Tool.getDam(Player.getCarriedItem(), 2) : 0;
  }
};

ToolAPI.toolData[ItemID.aec_axe] = {
  isMinor: true,
  damage: 0,
  toolMaterial: {level: 5},
  blockMaterials: {wood: true},
  calcDestroyTime: Tool.funcSpeed,
  onDestroy: function(){
    Tool.damageCarriedItem(true);
  },
  onAttack: function(){
    this.damage = Tool.damageCarriedItem(false) ? Tool.getDam(Player.getCarriedItem(), 3) : 0;
  }
};

Item.registerUseFunction("aec_shovel", function(c, item, block){
  block.id == 2 && Tool.damageCarriedItem(true) && World.setBlock(c.x, c.y, c.z, 198);
});

Item.registerUseFunction("aec_hoe", function(c, item, block){
  (block.id == 2 || block.id == 3) && Tool.damageCarriedItem(true) && World.setBlock(c.x, c.y, c.z, 60);
});


ToolAPI.destroyBlockHook=function(c,block,item){const tool=ToolAPI.getCarriedToolData(),enc=ToolAPI.getEnchantExtraData(item.enchant);tool&&!tool.isNative&&(tool.modifyEnchant&&tool.modifyEnchant(enc,item,c,block))&(!tool.isMinor&&Math.random()<1/(enc.unbreaking+1)&&(item.data+=tool.isWeapon?2:1))&(tool.onDestroy&&tool.onDestroy(item,c,block))&(item.data>=tool.toolMaterial.durability&&(tool.onBroke&&tool.onBroke(item,c,block)?0:(item.id=tool.brokenId,item.count=1,item.data=0)))&(tool.isMinor||Player.setCarriedItem(item.id,item.count,item.data,item.enchant,item.name))};

ToolAPI.playerAttackHook=function(player,ent,item){const tool=ToolAPI.getCarriedToolData(),enc=ToolAPI.getEnchantExtraData(item.enchant),time=World.getThreadTime();let hp=dam=0;tool&&!tool.isNative&&ToolAPI.LastAttackTime+10<time&&Entity.getHealth(ent)>0&&(tool.modifyEnchant&&tool.modifyEnchant(enc,item,coords,block))&(!tool.isMinor&&Math.random()<1/(enc.unbreaking+1)&&(item.data+=tool.isWeapon?1:2))&(tool.onAttack&&tool.onAttack(item,ent))&(item.data>=tool.durability&&(tool.onBroke&&tool.onBroke(item)?0:(item.id=tool.brokenId,item.count=1,item.data=0)))&(ToolAPI.LastAttackTime=time,hp=Entity.getHealth(ent),dam=tool.damage+(tool.toolMaterial.damage||0))&Entity.setHealth(ent,hp-Math.min((dam|0)+(Math.random()<dam-(dam|0)?1:0),hp)+1)&(tool.isMinor||Player.setCarriedItem(item.id,item.count,item.data,item.enchant,item.name))};