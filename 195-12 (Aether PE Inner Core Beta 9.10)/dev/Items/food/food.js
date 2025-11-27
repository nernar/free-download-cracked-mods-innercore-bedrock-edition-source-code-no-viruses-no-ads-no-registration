IDRegistry.genItemID("blueBerry");
Item.createFoodItem("blueBerry", "Blue berry", {name: "blueberries", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.blueBerry){
Entity.addEffect(Player.get(), 13, 0, 600, false,false);
}});

IDRegistry.genItemID("blueBerryl");
Item.createFoodItem("blueBerryl", "Blue berry lollipop", {name: "blue_berry_lollipop", meta: 0},{isTech:false,stack: 32,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.blueBerryl){
Entity.addEffect(Player.get(), 13, 0, 666, false,false);
}});

Recipes.addShaped({id: ItemID.blueBerryl, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.stickSkyroot, 0, 'b', ItemID.blueBerry, 0]);

IDRegistry.genItemID("whidBerry");
Item.createFoodItem("whidBerry", "Whynd berry", {name: "wyndberry", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.whidBerry){
Entity.addEffect(Player.get(), 18, 0, 360, false,false);
}});

IDRegistry.genItemID("enwhidBerry");
Item.createFoodItem("enwhidBerry", "Enchanted whynd berry", {name: "enchanted_wyndberry", meta: 0},{isTech:false,stack: 64,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.enwhidBerry){
Entity.addEffect(Player.get(), 18, 0, 120, false,false);
}});

IDRegistry.genItemID("rawhidBerry");
Item.createFoodItem("rawhidBerry", "Rainbow whynd berry", {name: "rainbow_strawberry", meta: 0},{isTech:false,stack: 64,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.rawhidBerry){
Entity.addEffect(attacker, 10, 1, 180, false,false);
}});

IDRegistry.genItemID("Orange");
Item.createFoodItem("Orange", "Orange", {name: "orange", meta: 0},{isTech:false,stack: 64,food: 7});

IDRegistry.genItemID("Whiteapl");
Item.createFoodItem("Whiteapl", "White apple", {name: "white_apple", meta: 0},{isTech:false,stack: 64,food: 5});

IDRegistry.genItemID("Orangel");
Item.createFoodItem("Orangel", "Orange lollipop", {name: "orange_lollipop", meta: 0},{isTech:false,stack: 32,food: 7});

Recipes.addShaped({id: ItemID.Orangel, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.stickSkyroot, 0, 'b', ItemID.Orange, 0]);

IDRegistry.genItemID("enchantedBerry");
Item.createFoodItem("enchantedBerry", "Enchanted berry", {name: "enchanted_blueberry", meta: 0},{isTech:false,stack: 64,food: 4});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.enchantedBerry){
Player.addExperience(4);
}});

IDRegistry.genItemID("candyCane");
Item.createFoodItem("candyCane", "Candy Cane", {name: "candy_cane", meta: 0},{isTech:false,stack: 64,food: 4});

IDRegistry.genItemID("candyCorn");
Item.createFoodItem("candyCorn", "Candy Corn", {name: "candy_corn", meta: 0},{isTech:false,stack: 64,food: 3});

IDRegistry.genItemID("shardLife");
Item.createFoodItem("shardLife", "Shard of life", {name: "shard_of_life", meta: 0},{isTech:false,stack: 4,food: 1});
Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.shardLife){
Entity.setMaxHealth(Player.get(), Ph+2);    
if(Entity.getMaxHealth(Player.get()) == 40)return false    
}});