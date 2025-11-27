importLib("ToolType", "*");

Callback.addCallback("EntityAdded", function (entity) {
var sword = [267, 268, 272, 276, 283, 258, 271, 275, 279, 286];
var helm = [298, 302, 306, 310, 314];
var chest = [299, 303, 307, 311, 315];
var legg = [300, 304, 308, 312, 316];
var boot = [301, 305, 309, 313, 317];
var mob = [32, 36, 44, 47, 48];
for(var i=0; i<6; i++)
if(Entity.getType(entity) == mob[i]&&Math.random() < 0.25)
{
var rnd1 = Math.floor(Math.random()*(sword.length));
var rnd2 = Math.floor(Math.random()*(helm.length));
var rnd3 = Math.floor(Math.random()*(chest.length));
var rnd4 = Math.floor(Math.random()*(legg.length));
var rnd5 = Math.floor(Math.random()*(boot.length));
Entity.setCarriedItem(entity, sword[rnd1], 1, 0);
Entity.setArmorSlot(entity,0, helm[rnd2], 1);
Entity.setArmorSlot(entity,1, chest[rnd3], 1);
Entity.setArmorSlot(entity,2, legg[rnd4], 1);
Entity.setArmorSlot(entity,3, boot[rnd5], 1);
}});




Callback.addCallback("EntityAdded", function (entity) {
var helm = [298, 302, 306, 310, 314];
var chest = [299, 303, 307, 311, 315];
var legg = [300, 304, 308, 312, 316];
var boot = [301, 305, 309, 313, 317];
var mob = [34, 46];
for(var i=0; i<6; i++)
if(Entity.getType(entity) == mob[i]&&Math.random() < 0.25)
{
var rnd2 = Math.floor(Math.random()*(helm.length));
var rnd3 = Math.floor(Math.random()*(chest.length));
var rnd4 = Math.floor(Math.random()*(legg.length));
var rnd5 = Math.floor(Math.random()*(boot.length));

Entity.setArmorSlot(entity,0, helm[rnd2], 1);
Entity.setArmorSlot(entity,1, chest[rnd3], 1);
Entity.setArmorSlot(entity,2, legg[rnd4], 1);
Entity.setArmorSlot(entity,3, boot[rnd5], 1);
}});


Callback.addCallback("DestroyBlock", function(coords, block, player){
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
item=Player.getCarriedItem(true);
if(getBlock==17||getBlock==162){
for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=20; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 17||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 162) {
World.destroyBlock(coords.x + xx, coords.y + yy, coords.z + zz, true);}}}};}});






ToolType.primaltool = {
		enchantType: Native.EnchantType.pickaxe,
		damage: 3,
		blockTypes: ["stone","wood","fibre"]
}
	
IDRegistry.genItemID("stonetool");
IDRegistry.genItemID("woodclub");
IDRegistry.genItemID("stoneclub");
IDRegistry.genItemID("obsidiantool");
IDRegistry.genItemID("obsidianclub");
IDRegistry.genItemID("plantfiberws");
IDRegistry.genItemID("obsidianshardws");
IDRegistry.genItemID("woodbarkws");

Item.createItem("plantfiberws", "Plant Fiber \n ? : Plant Fiber, Natural String", {name: "plantt_fiber", meta: 0}, {stack: 40});
Item.createItem("woodbarkws", "Wood Bark \n ? : Wood Fiber, Useful To Craft Plant Fiber", {name: "wood_barkk", meta: 0}, {stack: 40});
Item.createItem("obsidianshardws", "Obsidian Shard \n ? : Obsidian Fragment, Really Useful", {name: "obsidian_shard_ws", meta: 0}, {stack: 15});
Item.createItem("woodclub", "Club \n Material : Wood \n ? : Primal Low Tier Weapon", {name: "wood_club", meta: 0}, {stack: 1});
Item.createItem("stoneclub", "Club \n Material : Stone \n ? : Primal Mid Tier Weapon", {name: "stone_club", meta: 0}, {stack: 1});
Item.createItem("obsidianclub", "Club \n Material : Obsidian \n ? : Primal High Tier Weapon", {name: "obsidian_club", meta: 0}, {stack: 1});
Item.createItem("stonetool", "Flint Axe \n ? : Multi-Purpose Primal Tool", {name: "stone_tool", meta: 0}, {stack: 1});
Item.createItem("obsidiantool", "Obsidian Axe \n ? : Multi-Purpose Primal Tool", {name: "obsidian_tool", meta: 0}, {stack: 1});



ToolAPI.addToolMaterial("woodcluv", {durability: 10, level: 5, efficiency: 6, damage: 4, enchantability: 30});
ToolAPI.setTool(ItemID.woodclub, "woodcluv", ToolType.sword);

ToolAPI.addToolMaterial("stonecluv", {durability: 15, level: 5, efficiency: 6, damage: 5, enchantability: 30});
ToolAPI.setTool(ItemID.stoneclub, "stonecluv", ToolType.sword);

ToolAPI.addToolMaterial("stoneacks", {durability: 30, level: 5, efficiency: 5, damage: 3, enchantability: 30});
ToolAPI.setTool(ItemID.stonetool, "stoneacks", ToolType.primaltool);

ToolAPI.addToolMaterial("obsidiancluv", {durability: 25, level: 5, efficiency: 6, damage: 7, enchantability: 30});
ToolAPI.setTool(ItemID.obsidianclub, "obsidiancluv", ToolType.sword);

ToolAPI.addToolMaterial("obsidianacks", {durability: 35, level: 5, efficiency: 7, damage: 4, enchantability: 30});
ToolAPI.setTool(ItemID.obsidiantool, "obsidianacks", ToolType.primaltool);


Recipes.deleteRecipe({id: 268, count: 1, data: 0});
Recipes.deleteRecipe({id: 269, count: 1, data: 0});
Recipes.deleteRecipe({id: 270, count: 1, data: 0});
Recipes.deleteRecipe({id: 271, count: 1, data: 0});
Recipes.deleteRecipe({id: 290, count: 1, data: 0});

Recipes.deleteRecipe({id: 268, count: 1, data: 0});
Recipes.deleteRecipe({id: 269, count: 1, data: 0});
Recipes.deleteRecipe({id: 270, count: 1, data: 0});
Recipes.deleteRecipe({id: 271, count: 1, data: 0});
Recipes.deleteRecipe({id: 290, count: 1, data: 0});

Recipes.deleteRecipe({id: 272, count: 1, data: 0});
Recipes.deleteRecipe({id: 273, count: 1, data: 0});
Recipes.deleteRecipe({id: 274, count: 1, data: 0});
Recipes.deleteRecipe({id: 275, count: 1, data: 0});
Recipes.deleteRecipe({id: 291, count: 1, data: 0});


Recipes.addShaped({id: ItemID.woodclub, count: 1, data: 0}, 
["ab ", 
 "c  ",
 "   "],
["a", ItemID.plantfiberws, 0, "b", 17, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.woodclub, count: 1, data: 0}, 
["ab ", 
 "c  ",
 "   "],
["a", ItemID.plantfiberws, 0, "b", 17, 1, "c", 280, 0]);

Recipes.addShaped({id: ItemID.woodclub, count: 1, data: 0}, 
["ab ", 
 "c  ",
 "   "],
["a", ItemID.plantfiberws, 0, "b", 17, 2, "c", 280, 0]);

Recipes.addShaped({id: ItemID.woodclub, count: 1, data: 0}, 
["ab ", 
 "c  ",
 "   "],
["a", ItemID.plantfiberws, 0, "b", 17, 3, "c", 280, 0]);

Recipes.addShaped({id: ItemID.stonetool, count: 1, data: 0}, 
["ab ", 
 "c  ",
 "   "],
["a", ItemID.plantfiberws, 0, "b", 318, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.stoneclub, count: 1, data: 0}, 
["ab ", 
 "cd ",
 "   "],
["a", ItemID.plantfiberws, 0, "b", 1, 0, "c", 280, 0, "d", 17, 0]);

Recipes.addShaped({id: ItemID.obsidiantool, count: 1, data: 0}, 
["ba ", 
 "c  ",
 "   "],
["a", ItemID.obsidianshardws, 0, "b", ItemID.plantfiberws, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.obsidianclub, count: 1, data: 0}, 
["ba ", 
 "cd ",
 "   "],
["a", ItemID.obsidianshardws, 0, "b", ItemID.plantfiberws, 0, "c", 280, 0, "d", 17, 0]);

Recipes.addShaped({id: ItemID.obsidianshardws, count: 4, data: 0}, 
["   ", 
 " a ",
 "   "],
["a", 49, 0]);


Block.registerDropFunction(31, function(){
  if(Math.random()<=0.60){
    return [[ItemID.plantfiberws,1,0]]
  }
});

Block.registerDropFunction(106, function(){
  return [[ItemID.plantfiberws,1,0]]
});

Item.registerUseFunction(318, function(crd,i,block){
let c = crd.relative;
  if(block.id==17){
    if(Math.random()<=0.20){
      Player.decreaseCarriedItem();
      World.drop(c.x,c.y,c.z,ItemID.woodbarkws,4,0);
    }
  }
});

Item.registerUseFunction(ItemID.stonetool, function(crd,i,block){
let c = crd.relative;
  if(block.id==17){
    if(Math.random()<=0.20){
      World.drop(c.x,c.y,c.z,ItemID.woodbarkws,1,0);
    }
  }
});

Item.registerUseFunction(ItemID.obsidiantool, function(crd,i,block){
let c = crd.relative;
  if(block.id==17){
    if(Math.random()<=0.20){
      World.drop(c.x,c.y,c.z,ItemID.woodbarkws,2,0);
    }
  }
});