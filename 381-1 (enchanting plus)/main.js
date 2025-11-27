const TOOL = {
  298: "helmet",
  302: "helmet",
  306: "helmet",
  310: "helmet",
  314: "helmet",
  299: "chestplate",
  303: "chestplate",
  307: "chestplate",
  311: "chestplate",
  315: "chestplate",
  300: "leggings",
  304: "leggings",
  308: "leggings",
  312: "leggings",
  316: "leggings",
  301: "boots",
  305: "boots",
  309: "boots",
  313: "boots",
  317: "boots",
  267: "sword",
  268: "sword",
  272: "sword",
  276: "sword",
  283: "sword",
  256: "shovel",
  269: "shovel",
  273: "shovel",
  277: "shovel",
  284: "shovel",
  257: "pickaxe",
  270: "pickaxe",
  274: "pickaxe",
  278: "pickaxe",
  285: "pickaxe",
  258: "axe",
  271: "axe",
  275: "axe",
  279: "axe",
  286: "axe",
  290: "hoe",
  291: "hoe",
  292: "hoe",
  293: "hoe",
  294: "hoe",
  261: "bow",
  346: "fishing",
  359: "shears",
  398: "carrot"
};

const TYPE = {
  helmet: [0, 1, 3, 4, 5, 6, 8, 17],
  chestplate: [0, 1, 3, 4, 5, 17],
  leggings: [0, 1, 3, 4, 5, 17],
  boots: [0, 1, 2, 3, 4, 5, 7, 17],
  sword: [9, 10, 11, 12, 13, 14, 17],
  shovel: [15, 16, 17, 18],
  pickaxe: [15, 16, 17, 18],
  axe: [9, 10, 11, 15, 16, 17, 18],
  hoe: [17],
  bow: [17, 19, 20, 21, 22],
  fishing: [17, 23, 24],
  shears: [15, 17],
  carrot: [17]
};

const ENC = [
  {name: "Protection", max: 4, weight: 10},
  {name: "Fire Protection", max: 4, weight: 5},
  {name: "Feather Falling", max: 4, weight: 5},
  {name: "Blast Protection", max: 4, weight: 2},
  {name: "Projectile Protection", max: 4, weight: 5},
  {name: "Thorns", max: 3, weight: 1},
  {name: "Respiration", max: 3, weight: 2},
  {name: "Aqua Affinity", max: 1, weight: 2},
  {name: "Depth Strider", max: 3, weight: 2},
  {name: "Sharpness", max: 5, weight: 10},
  {name: "Smite", max: 5, weight: 5},
  {name: "Bane of Arthoropods", max: 5, weight: 5},
  {name: "Knockback", max: 2, weight: 5},
  {name: "Fire Aspect", max: 2, weight: 2},
  {name: "Looting", max: 3, weight: 2},
  {name: "Efficiency", max: 5, weight: 10},
  {name: "Silk Touch", max: 1, weight: 1},
  {name: "Unbreaking", max: 3, weight: 5},
  {name: "Fortune", max: 3, weight: 2},
  {name: "Power", max: 5, weight: 10},
  {name: "Punch", max: 2, weight: 2},
  {name: "Flame", max: 1, weight: 2},
  {name: "Infinity", max: 1, weight: 1},
  {name: "Luck of the Sea", max: 3, weight: 2},
  {name: "Lure", max: 3, weight: 2}
];

const compatible = [
  ["0", "1", "3", "4"],
  ["9", "10", "11"],
  ["16", "18"]
];

const ROMAN = ["", " I", " II", " III", " IV", " V"];

const Data = {
  cost: 0,
  discount: 0
};


Item.addToCreative(116, 1, 2);
Recipes.addShaped({id: 116, data: 2}, ["aba", "cdc", "aea"], ["a", 266, 0, "b", 340, 0, "c", 49, 0, "d", 116, 0, "e", 381, 0]);

const render = new ICRender.Model();
render.addEntry(new BlockRenderer.Model(0, 0, 0, 1, 0.75, 1, [
  ["enchanting_table_bottom", 2],
  ["enchanting_table_top", 2],
  ["enchanting_table_side", 2],
  ["enchanting_table_side", 2],
  ["enchanting_table_side", 2],
  ["enchanting_table_side", 2]
]));
BlockRenderer.enableCoordMapping(116, 2, render);


let DELAY = false;
Callback.addCallback("tick", function(){
  if(DELAY){
    const slot = container.getSlot("slot");
    if(slot.extra){
      const enc = slot.extra.getEnchants();
      for(let key in enc){
        elements["enc" + key].value = enc[key];
      }
    }
    DELAY = false;
  }
});


const elements = {
  slot: {type: "slot", x: 420, y: 100, isValid: function(id){
    if(id in TOOL){
      refreshElem(TOOL[id]);
      elements.slot.visual = true;
      DELAY = true;
      return true;
    }
  }, clicker: {
    onLongClick: function(){
      dumpItem();
    }
  }},
  button: {type: "button", x: 420, y: 180, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 3.8, clicker: {
    onClick: function(){
      const enc = {};
      let i = 0;
      let key = "";
      for(i = 0; i < 25; i++){
        if(elements["enc" + i].value){
          enc[i] = elements["enc" + i].value;
        }
      }
      const keys = Object.keys(enc);
      const slot = container.getSlot("slot");
      if(!keys.length){
        if(slot.extra){
          slot.extra.removeAllEnchants();
          slot.extra.removeCustomData();
        }
        return;
      }
      for(i = 0; i < compatible.length; i++){
        if(keys.filter(function(v){return !!~compatible[i].indexOf(v)}).length > 1){
          alert("compatible");
          return;
        }
      }
      if(Player.getLevel() < Data.cost){
        alert("You don't have enough experience.");
        return;
      }
      Player.addLevel(-Data.cost);
      if(!slot.extra){
        slot.extra = new ItemExtraData();
      }
      slot.extra.removeAllEnchants();
      for(key in enc){
        slot.extra.addEnchant(key - 0, elements["enc" + key].value);
      }
      Data.cost = 0;
      container.setText("textLV", "LV: " + Player.getLevel());
      container.setText("textCost", "Cost: " + Data.cost);
      alert("Enchantment has been completed.");
    }
  }},
  icon: {type: "slot", x: 420, y: 180, z: 1, bitmap: "_default_slot_empty", visual: true, source: {id: 403, count: 1}},
  textLV: {type: "text", x: 380, y: 260},
  textCost: {type: "text", x: 380, y: 300},
  textDiscount: {type: "text", x: 380, y: 340}
};


const inputFunc = function(num){
  return function(val){
    container.setText("text" + num, ENC[num].name + ROMAN[val]);
    elements["enc" + num].value = val;
    const slot = container.getSlot("slot");
    const enc = slot.extra ? slot.extra.getEnchants() : {};
    let cost = 0;
    for(let i = 0; i < 25; i++){
      if(elements["enc" + i].value > (enc[i] || 0)){
        cost += (11 - ENC[i].weight) * (elements["enc" + i].value - (enc[i] || 0));
      }
    }
    Data.cost = cost * (1 - Data.discount / 100) | 0;
    container.setText("textCost", "Cost: " + Data.cost);
  };
};

(function(){
  for(let i = 0; i < 25; i++){
    elements["enc" + i] = {type: "scroll", x: 600, y: 1000, length: 300, min: 0, max: ENC[i].max, isInt: true, value: 0, onNewValue: inputFunc(i)};
    elements["text" + i] = {type: "text", x: 640, y: 1000, z: 1, text: ENC[i].name};
  }
})();


const container = new UI.Container();
const window = new UI.StandartWindow({
  standart: {
    header: {text: {text: "Advanced Enchantment Table"}},
    inventory: {standart: true},
    background: {standart: true}
  },
  elements: elements
});


const refreshElem = function(type){
  let y = 40;
  for(let i = 0; i < 25; i++){
    if(~TYPE[type].indexOf(i)){
      elements["enc" + i].y = y;
      elements["text" + i].y = y + 20;
      y += 60;
    }
    else{
      elements["enc" + i].y = elements["text" + i].y = 1000;
    }
  }
};

const dumpItem = function(){
  const pos = Player.getPosition();
  container.dropSlot("slot", pos.x, pos.y, pos.z);
  elements.slot.visual = false;
  for(let i = 0; i < 25; i++){
    elements["enc" + i].value = 0;
    elements["enc" + i].y = elements["text" + i].y = 1000;
  }
  Data.cost = 0;
  container.setText("textCost", "Cost: " + Data.cost);
};


Callback.addCallback("ItemUse", function(c, item, block){
  if(block.id == 116 && block.data == 2 && !Entity.getSneaking(Player.get())){
    let count = 0;
    for(let i = -2; i <= 2; i++){
    for(let j = 0; j <= 1; j++){
    for(let k = -2; k <= 2; k++){
      if((Math.abs(i) == 2 || Math.abs(k) == 2) && World.getBlockID(c.x + i, c.y + j, c.z + k) == 47){
        count++;
      }
    }
    }
    }
    elements.slot.visual = false;
    container.openAs(window);
alert(count);
    Data.discount = Math.min(count, 30);
    container.setText("textLV", "LV: " + Player.getLevel());
    container.setText("textDiscount", "Discount: " + Data.discount + "%");
    Game.prevent();
  }
  else if(item.id == 116 && item.data == 2){
    Game.prevent();
    c = c.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(c.x, c.y, c.z))){
      World.setBlock(c.x, c.y, c.z, 116, 2);
      Player.decreaseCarriedItem();
    }
  }
});

container.setOnCloseListener({
  onClose: function(){
    dumpItem();
  }
});