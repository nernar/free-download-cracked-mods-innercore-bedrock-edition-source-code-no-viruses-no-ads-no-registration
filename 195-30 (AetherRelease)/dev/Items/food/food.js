IDRegistry.genItemID("blueBerry");
Item.createFoodItem("blueBerry", "Blue berry", {name: "blueberries"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.blueBerry){
Entity.addEffect(player, 13, 0, 600, false,false);
}});

IDRegistry.genItemID("blueBerryl");
Item.createFoodItem("blueBerryl", "Blue berry lollipop", {name: "blue_berry_lollipop"},{isTech:false,stack: 32,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.blueBerryl){
Entity.addEffect(player, 13, 0, 666, false,false);
}});

Recipes.addShaped({id: ItemID.blueBerryl, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.stickSkyroot, 0, 'b', ItemID.blueBerry, 0]);

IDRegistry.genItemID("whidBerry");
Item.createFoodItem("whidBerry", "Whynd berry", {name: "wyndberry"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.whidBerry){
Entity.addEffect(player, 18, 0, 360, false,false);
}});

IDRegistry.genItemID("enwhidBerry");
Item.createFoodItem("enwhidBerry", "Enchanted whynd berry", {name: "enchanted_wyndberry"},{isTech:false,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.enwhidBerry){
Entity.addEffect(player, 18, 0, 120, false,false);
}});

IDRegistry.genItemID("rawhidBerry");
Item.createFoodItem("rawhidBerry", "Rainbow whynd berry", {name: "rainbow_strawberry"},{isTech:false,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.rawhidBerry){
Entity.addEffect(player, 10, 1, 180, false,false);
}});

IDRegistry.genItemID("Orange");
Item.createFoodItem("Orange", "Orange", {name: "orange"},{isTech:false,food: 7});

IDRegistry.genItemID("Whiteapl");
Item.createFoodItem("Whiteapl", "White apple", {name: "white_apple"},{isTech:false,food: 5});

IDRegistry.genItemID("Orangel");
Item.createFoodItem("Orangel", "Orange lollipop", {name: "orange_lollipop"},{isTech:false,stack: 32,food: 7});

Recipes.addShaped({id: ItemID.Orangel, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.stickSkyroot, 0, 'b', ItemID.Orange, 0]);

IDRegistry.genItemID("enchantedBerry");
Item.createFoodItem("enchantedBerry", "Enchanted berry", {name: "enchanted_blueberry"},{isTech:false,food: 4});

IDRegistry.genItemID("candyCane");
Item.createFoodItem("candyCane", "Candy Cane", {name: "candy_cane"},{isTech:false,food: 4});

IDRegistry.genItemID("candyCorn");
Item.createFoodItem("candyCorn", "Candy Corn", {name: "candy_corn"},{isTech:false,food: 3});

IDRegistry.genItemID("shardLife");
Item.createFoodItem("shardLife", "Shard of life", {name: "shard_of_life"},{isTech:false,stack: 4,food: 1});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
var Ph = Entity.getMaxHealth(player);
if(Entity.getCarriedItem(player).id==ItemID.shardLife){
Entity.setMaxHealth(player, Ph+2);    
if(Entity.getMaxHealth(player) == 40)return false    
}});

IDRegistry.genItemID("shardRegen");
Item.createFoodItem("shardRegen", "Shard of regeneration", {name: "regeneration_stone"},{isTech:false,stack: 8,food: 2});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
var Ph = Entity.getMaxHealth(player);
if(Entity.getCarriedItem(player).id==ItemID.shardRegen){
Entity.addEffect(player, 10, 4, 200, false,false);
if(Entity.getMaxHealth(player) == Ph)return false    
}});

IDRegistry.genItemID("gelSwetB");
Item.createFoodItem("gelSwetB", "Blue Swet Jelly", {name: "blue_swet_jelly"},{isTech:false,food: 5});

IDRegistry.genItemID("gelSwetG");
Item.createFoodItem("gelSwetG", "Golden Swet Jelly", {name: "golden_swet_jelly"},{isTech:false,food: 5});

IDRegistry.genItemID("gelSwetD");
Item.createFoodItem("gelSwetD", "Dark Swet Jelly", {name: "dark_swet_jelly"},{isTech:false,food: 5});

IDRegistry.genItemID("gelSwetC");
Item.createFoodItem("gelSwetC", "Cream Swet Jelly", {name: "cream_swet_jelly"},{isTech:false,food: 5});

IDRegistry.genItemID("gelP");
Item.createFoodItem("gelP", "Pumpkin Jelly", {name: "jelly_pumpkin"},{isTech:false,food: 6});

IDRegistry.genItemID("taegorMeat");
Item.createFoodItem("taegorMeat", "Raw Taegor Meat", {name: "raw_taegore_meat"},{isTech:false,food: 5});

IDRegistry.genItemID("taegorMeatS");
Item.createFoodItem("taegorMeatS", "Taegor Steak", {name: "taegore_steak"},{isTech:false,food: 11});

IDRegistry.genItemID("kirridMeat");
Item.createFoodItem("kirridMeat", "Kirrid Loin", {name: "kirrid_loin"},{isTech:false,food: 6});

IDRegistry.genItemID("kirridMeatS");
Item.createFoodItem("kirridMeatS", "Kirrid Steak", {name: "kirrid_cutlet"},{isTech:false,food: 12});

IDRegistry.genItemID("burrukaiRibs");
Item.createFoodItem("burrukaiRibs", "Raw Burrukai Ribs", {name: "burrukai_rib_cut"},{isTech:false,food: 5});

IDRegistry.genItemID("burrukaiRibsF");
Item.createFoodItem("burrukaiRibsF", "Burrukai Ribs", {name: "burrukai_ribs"},{isTech:false,food: 13});

IDRegistry.genItemID("moaEgg");
Item.createFoodItem("moaEgg", "Moa Egg", {name: "moa_egg"},{isTech:false,food: 2});

IDRegistry.genItemID("moaEggF");
Item.createFoodItem("moaEggF", "Moa Egg Fried", {name: "fried_moa_egg"},{isTech:false,food: 9});

IDRegistry.genItemID("plumpMash");
Item.createFoodItem("plumpMash", "Plump Mash", {name: "plumproot_mash"},{isTech:false,food: 8});

IDRegistry.genItemID("plumpPie");
Item.createFoodItem("plumpPie", "Plump Pie", {name: "plumproot_pie"},{isTech:false,food: 14});

Callback.addCallback("PostLoaded", function () {
Recipes.addFurnace(ItemID.taegorMeat, 0, ItemID.taegorMeatS, 0);
Recipes.addFurnace(ItemID.burrukaiRibs, 0, ItemID.burrukaiRibsF, 0);
Recipes.addFurnace(ItemID.moaEgg, 0, ItemID.moaEggF, 0);
        
Recipes.addShaped({id: ItemID.plumpMash, count: 1, data: 0}, [
    "b",
    "a"
], ['a', 281, 0, 'b', BlockID.plump, 0]);

Recipes.addShaped({id: ItemID.plumpPie, count: 3, data: 0}, [
    "cb",
    "a"
], ['a', 296, 0, 'b', BlockID.plump, 0, 'c', 344, 0]);

});