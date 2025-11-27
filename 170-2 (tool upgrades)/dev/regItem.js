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