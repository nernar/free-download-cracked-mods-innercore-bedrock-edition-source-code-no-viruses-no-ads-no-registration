const LC_Config = {
//Resources per craft
  Cobblestone: __config__.getNumber("Resources.Cobblestone"),
  IronIngot: __config__.getNumber("Resources.IronIngot"),
  GoldIngot: __config__.getNumber("Resources.gold_leaf"),
  Diamond: __config__.getNumber("Resources.Diamond"),
}
const craft = [LC_Config.Cobblestone,LC_Config.IronIngot,LC_Config.GoldIngot,LC_Config.Diamond]

//register items 
IDRegistry.genItemID("leafGreen");
Item.createItem("leafGreen", "Green Leaf", {name: "green_leaf", data: 0});
IDRegistry.genItemID("leafStone");
Item.createItem("leafStone", "Stone Leaf", {name: "stone_leaf", data: 0});
IDRegistry.genItemID("leafIron");
Item.createItem("leafIron", "Iron Leaf", {name: "iron_leaf", data: 0});
IDRegistry.genItemID("leafGold");
Item.createItem("leafGold", "Gold Leaf", {name: "gold_leaf", data: 0});
IDRegistry.genItemID("leafDiamond");
Item.createItem("leafDiamond", "Diamond Leaf", {name: "diamond_leaf", data: 0});
IDRegistry.genItemID("leafDry");
Item.createItem("leafDry", "Dry Leaf", {name: "dry_leaf", data: 0});

//Mystery leaf
const leaf = [ItemID.leafGreen,ItemID.leafStone,ItemID.leafIron,ItemID.gold_leaf,ItemID.leafDiamond,ItemID.leafDry,ItemID.leafMystery]
IDRegistry.genItemID("leafMystery");
Item.createItem("leafMystery", "Mystery Leaf", {name: "mystery_leaf", data: 0});
Item.registerUseFunction(ItemID.leafMystery, function(coords, item, block){
   var x = Math.floor(Math.random()*6+1)
   Player.addItemToInventory(leaf[x], 1);
   Player.decreaseCarriedItem(1);
  });

//crafting recipes 
Recipes.addShapeless({id: ItemID.leafGreen, count: 2, data: 0}, [{id: 6, data: 0}]);

//tier progression 
Recipes.addShaped({id: ItemID.leafStone, count:1},[" x ","xax"," x "],['x',ItemID.leafGreen,0,'a',6,0])
Recipes.addShaped({id: ItemID.leafIron, count:1},[" x ","xax"," x "],['x',ItemID.leafStone,0,'a',ItemID.leafGreen,0]);
Recipes.addShaped({id: ItemID.leafGold, count:1},[" x ","xax"," x "],['x',ItemID.leafIron,0,'a',ItemID.leafStone,0]);
Recipes.addShaped({id: ItemID.leafDiamond, count:1},[" x ","xax"," x "],['x',ItemID.leafGold,0,'a',ItemID.leafIron,0]);
Recipes.addFurnace(ItemID.leafGreen, ItemID.leafDry, 1)

//resource crafting 
Recipes.addShaped({id: 4, count: craft[0]},["xx","xx"],['x',ItemID.leafStone,0])
Recipes.addShaped({id: 265, count: craft[1]},["xx","xx"],['x',ItemID.leafIron,0])
Recipes.addShaped({id: 266, count: craft[2]},["xx","xx"],['x',ItemID.leafGold,0])
Recipes.addShaped({id: 264, count: craft[3]},["xx","xx"],['x',ItemID.leafDiamond,0])
