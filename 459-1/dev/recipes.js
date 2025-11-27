//removed Recipes

/*Callback.addCallback("PostLoaded", function(){
  if(!__config__.getBool("enable_vannila_tools")){
    for(let i = 267; i<=287); i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    for(let i = 290; i<=294; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    for(let i = 306; i<=317; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    Recipes.deleteRecipe({id: 256, count: 1, data: 0});
    Recipes.deleteRecipe({id: 257, count: 1, data: 0});
    Recipes.deleteRecipe({id: 258, count: 1, data: 0});
  }
  Recipes.deleteRecipe({id: 5, count: 4, data: 0});
  Recipes.deleteRecipe({id: 5, count: 4, data: 1});
  Recipes.deleteRecipe({id: 5, count: 4, data: 2});
  Recipes.deleteRecipe({id: 5, count: 4, data: 3});
  Recipes.deleteRecipe({id: 5, count: 4, data: 4});
  Recipes.deleteRecipe({id: 5, count: 4, data: 5});
  Recipes.deleteRecipe({id: 5, count: 4, data: 0})
  for(let i = 0; i<5; i++){
    Recipes.deleteRecipe({id: 5, count: 4, data: i});
  }
});
*/
//suck my desk

Callback.addCallback("PostLoaded", function(){
	
Recipes.addShaped({id: ItemID.stone_knife, count: 1, data: 0}, [

     "xyy",

     "yiy",

     "yyz"

], ['z', 280, 0, 'x', ItemID.rock, 0, 'i', 106, 0]);

Recipes.addShaped({id: BlockID.mow, count: 1, data: 0}, [

     "xx",

     "xx",

     ""

], ['x', ItemID.sheaf, 0]);

Recipes.addShaped({id: BlockID.grindstone, count: 1, data: 0}, [
     "oxo",
     "xxx",
     "pxp"
], ['x', ItemID.rock, 0, 'p', 280, 0]);;

Recipes.addShaped({id: 374, count: 1, data: 0}, [
     "oxo",
     "xox",
     "xxx"
], ['x', 337, 0]);;



Recipes.addShaped({id: BlockID.template_creator, count: 1, data: 0}, [
     "ooo",
     "xox",
     "xxx"
], ['x', ItemID.rock, 0]);;

Recipes.addShaped({id: BlockID.copperore, count: 1, data: 0}, [
     "xxx",
     "xxx",
     "xxx"
], ['x', ItemID.minicopper, 0]);;

Recipes.addShaped({id: 259, count: 1, data: 0}, [
    "xo",
    "ox"
], ['x', 280, 0]);;

Recipes.addShaped({id: 3, count: 1, data: 0}, [
     "xxo",
     "xxo",
     "ooo"
], ['x', ItemID.mudball, 0]);;

Recipes.addShaped({id: 5, count: 1, data: 0}, [
    "xxx",
    "xxx",
	"xxx"
], ['x', ItemID.bark, 0]);;

});

//furnace Recipes

Recipes.addFurnace(BlockID.copperore, ItemID.copper_ingot, 0);








