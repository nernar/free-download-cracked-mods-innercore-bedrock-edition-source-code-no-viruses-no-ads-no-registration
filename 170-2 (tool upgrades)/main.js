/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: item.js

IDRegistry.genItemID("tu_circuit");
IDRegistry.genItemID("tu_circuitEnc");
IDRegistry.genItemID("tu_blank");
IDRegistry.genItemID("tu_advCircuit");
IDRegistry.genItemID("tu_advCircuitEnc");
IDRegistry.genItemID("tu_advBlank");
Item.createItem("tu_circuit", "Redstone Circuit", {name: "tu_circuit"});
Item.createItem("tu_circuitEnc", "Enchanted Circuit", {name: "tu_circuit"});
Item.createItem("tu_blank", "Blank Modifier", {name: "tu_blank"});
Item.createItem("tu_advCircuit", "Advanced Circuit", {name: "tu_circuit", meta: 1});
Item.createItem("tu_advCircuitEnc", "Enchanted Advanced Circuit", {name: "tu_circuit", meta: 1});
Item.createItem("tu_advBlank", "Blank Advanced Modifier", {name: "tu_blank", meta: 1});
Item.setGlint(ItemID.tu_circuitEnc, true);
Item.setGlint(ItemID.tu_blank, true);
Item.setGlint(ItemID.tu_advCircuitEnc, true);
Item.setGlint(ItemID.tu_advBlank, true);

const regUpg = function(name){
  const Name = name.charAt(0).toUpperCase() + name.slice(1);
  const paste = "tu_paste" + Name;
  const mod = "tu_mod" + Name;
  const adv = "tu_adv" + Name;
  IDRegistry.genItemID(paste);
  IDRegistry.genItemID(mod);
  IDRegistry.genItemID(adv);
  Item.createItem(paste, Name + " Paste", {name: "tu_" + name});
  Item.createItem(mod, Name + " Modifier", {name: "tu_" + name, meta: 1}, {stack: 1});
  Item.createItem(adv, "Advanced " + Name + " Modifier", {name: "tu_" + name, meta: 2}, {stack: 1});
  Item.setGlint(ItemID[mod], true);
  Item.setGlint(ItemID[adv], true);
  Recipes.addShapeless({id: ItemID[mod]}, [{id: ItemID.tu_blank}, {id: ItemID[paste]}]);
  Recipes.addShapeless({id: ItemID[adv]}, [{id: ItemID.tu_advBlank}, {id: ItemID[paste]}]);
};

regUpg("blaze");
regUpg("growstone");
regUpg("gunpowder");
regUpg("sugar");
regUpg("inc");
regUpg("lapis");
regUpg("clay");
regUpg("slime");




// file: craftFunc.js

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




// file: regItem.js

Callback.addCallback("PostLoaded", function(){
  const ITEM = {
    "armor": [298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317],
    "sword": [267, 268, 272, 276, 283],
    "tool": [256, 257, 258, 269, 270, 271, 273, 274, 275, 277, 278, 279, 284, 285, 286, 290, 291, 292, 293, 294],
    "shear": [359],
    "bow": [261],
    "fish": [346]
  };
  const other = {
    "armor": JSON.parse(__config__.access("support.armor")),
    "sword": JSON.parse(__config__.access("support.sword")),
    "tool": JSON.parse(__config__.access("support.tool")),
    "shear": JSON.parse(__config__.access("support.shear")),
    "bow": JSON.parse(__config__.access("support.bow")),
    "fish": JSON.parse(__config__.access("support.fish"))
  };

  for(let key in other){
    for(let i = other[key].length; i--;){
      ItemID[other[key][i]] && ITEM[key].push(ItemID[other[key][i]]);
    }
  }

  const regRecipe = function(base, mod, enc){
    Recipes.addShapeless({id: base}, [{id: base, data: -1}, {id: ItemID["tu_mod" + mod]}], upgFunc(enc, 5));
    Recipes.addShapeless({id: base}, [{id: base, data: -1}, {id: ItemID["tu_adv" + mod]}], upgFunc(enc, 8));
  };

  for(let i = ITEM.armor.length; i--;){
    regRecipe(ITEM.armor[i], "Blaze", 1);
    regRecipe(ITEM.armor[i], "Gunpowder", 3);
    regRecipe(ITEM.armor[i], "Inc", 5);
    regRecipe(ITEM.armor[i], "Clay", 17);
  }

  for(let i = ITEM.sword.length; i--;){
    regRecipe(ITEM.sword[i], "Blaze", 13);
    regRecipe(ITEM.sword[i], "Growstone", 14);
    regRecipe(ITEM.sword[i], "Gunpowder", 12);
    regRecipe(ITEM.sword[i], "Sugar", 15);
    regRecipe(ITEM.sword[i], "Lapis", 9);
    regRecipe(ITEM.sword[i], "Clay", 17);
    regRecipe(ITEM.sword[i], "Slime", 16);
  }

  for(let i = ITEM.tool.length; i--;){
    regRecipe(ITEM.tool[i], "Blaze", 13);
    regRecipe(ITEM.tool[i], "Growstone", 18);
    regRecipe(ITEM.tool[i], "Gunpowder", 12);
    regRecipe(ITEM.tool[i], "Sugar", 15);
    regRecipe(ITEM.tool[i], "Lapis", 9);
    regRecipe(ITEM.tool[i], "Clay", 17);
    regRecipe(ITEM.tool[i], "Slime", 16);
  }

  for(let i = ITEM.shear.length; i--;){
    regRecipe(ITEM.shear[i], "Clay", 17);
  }

  for(let i = ITEM.bow.length; i--;){
    regRecipe(ITEM.bow[i], "Blaze", 21);
    regRecipe(ITEM.bow[i], "Gunpowder", 20);
    regRecipe(ITEM.bow[i], "Lapis", 19);
    regRecipe(ITEM.bow[i], "Clay", 17);
  }

  for(let i = ITEM.fish.length; i--;){
    regRecipe(ITEM.fish[i], "Growstone", 23);
    regRecipe(ITEM.fish[i], "Sugar", 24);
    regRecipe(ITEM.fish[i], "Clay", 17);
  }

});




// file: recipe.js

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: ItemID.tu_circuit}, ["aba", "bcb", "aba"], ["a", 265, 0, "b", 331, 0, "c", 76, 0]);
  Recipes.addShapeless({id: ItemID.tu_circuitEnc}, [{id: ItemID.tu_circuit}, {id: 403}]);
  Recipes.addShaped({id: ItemID.tu_blank}, ["oao", "aba", "oao"], ["a", 264, 0, "b", ItemID.tu_circuitEnc, 0]);
  Recipes.addShaped({id: ItemID.tu_advCircuit}, ["aba", "bcb", "aba"], ["a", 266, 0, "b", 331, 0, "c", 76, 0]);
  Recipes.addShapeless({id: ItemID.tu_advCircuit}, [{id: ItemID.tu_circuit}, {id: 266}]);
  Recipes.addShapeless({id: ItemID.tu_advCircuitEnc}, [{id: ItemID.tu_advCircuit}, {id: 403}]);
  Recipes.addShaped({id: ItemID.tu_advBlank}, ["oao", "aba", "oao"], ["a", 264, 0, "b", ItemID.tu_advCircuitEnc, 0]);
  Recipes.addShaped({id: ItemID.tu_pasteBlaze}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 377, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteGrowstone}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 348, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteGunpowder}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 289, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteSugar}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 353, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteInc}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 351, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteLapis}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 351, 4, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteClay}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 337, 0, "c", 325, 8], bucketFunc);
  Recipes.addShaped({id: ItemID.tu_pasteSlime}, ["aba", "bcb", "aba"], ["a", 372, 0, "b", 341, 0, "c", 325, 8], bucketFunc);
});




