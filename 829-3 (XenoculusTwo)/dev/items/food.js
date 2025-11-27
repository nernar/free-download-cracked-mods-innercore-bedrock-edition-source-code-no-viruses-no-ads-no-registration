
IDRegistry.genItemID("rawReptile");
Item.createFoodItem("rawReptile", "Raw Reptile", {name: "rawreptile"},{isTech:false,food: 3});

IDRegistry.genItemID("cookedReptile");
Item.createFoodItem("cookedReptile", "Cooked Reptile", {name: "cookedreptile"},{isTech:false,food: 9});

Recipes.addFurnace(ItemID.rawReptile, ItemID.cookedReptile, 0); 

IDRegistry.genItemID("golberries");
Item.createFoodItem("golberries", "Goldberries", {name: "golberries"},{isTech:false,food: 4});

IDRegistry.genItemID("golberryPie");
Item.createFoodItem("golberryPie", "Golberry Pie", {name: "golberrypie"},{isTech:false,food: 12});

Recipes.addShaped({id: ItemID.golberryPie, count: 1, data: 0}, [
    "aaa",
    "aba",
    "c"
], ['a', ItemID.golberries, 0, 'b', 353, 0, 'c', 344, 0]);

IDRegistry.genItemID("vanillaIcecream");
Item.createFoodItem("vanillaIcecream", "Vanilla Icecream", {name: "vanillaicecream"},{isTech:false,food: 12});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.vanillaIcecream){
Entity.addEffect(pl, 28, 1, 180, true, true);
}});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.vanillaIcecream, count: 1, data: 0}, [
    "aca",
    "aba",
    "aaa"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', ItemID.vanilla, 0]);

});

IDRegistry.genItemID("golberryIcecream");
Item.createFoodItem("golberryIcecream", "Golberry Icecream", {name: "golberryicecream"},{isTech:false,food: 12});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.golberryIcecream){
Entity.addEffect(pl, 3, 1, 280, true, true);
}});

Recipes.addShaped({id: ItemID.golberryIcecream, count: 1, data: 0}, [
    "aca",
    "aba",
    "aaa"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', ItemID.golberries, 0]);

IDRegistry.genItemID("sweetberryIcecream");
Item.createFoodItem("sweetberryIcecream", "Sweetberry Icecream", {name: "sweetberryicecream"},{isTech:false,food: 12});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.sweetberryIcecream){
Entity.addEffect(pl, 8, 1, 160, true, true);
}});

Recipes.addShaped({id: ItemID.sweetberryIcecream, count: 1, data: 0}, [
    "aca",
    "aba",
    "aaa"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', 477, 0]);

IDRegistry.genItemID("chocolateIcecream");
Item.createFoodItem("chocolateIcecream", "Chocolate Icecream", {name: "chocolateicecream"},{isTech:false,food: 12});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.chocolateIcecream){
Entity.addEffect(pl, 8, 1, 160, true, true);
}});

Recipes.addShaped({id: ItemID.chocolateIcecream, count: 1, data: 0}, [
    "aca",
    "aba",
    "aaa"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', 280, 0]);

IDRegistry.genItemID("fraithCookie");
Item.createFoodItem("fraithCookie", "Gingerbread Fraith", {name: "fraithcookie"},{isTech:false,food: 7});

IDRegistry.genItemID("fulngusStew");
Item.createFoodItem("fulngusStew", "Fulngus Stew", {name: "fulngusstew"},{isTech:false,food: 8});
Callback.addCallback("FoodEaten",function(heal, satRatio, pl){
if(Entity.getCarriedItem(pl).id == ItemID.fulngusStew){
Entity.addEffect(pl, 8, 1, 160, true, true);
}});

Recipes.addShaped({id: ItemID.fulngusStew, count: 1, data: 0}, [
    "bc",
    "a"
], ['a', ItemID.NeciceSh, 0, 'b', 281, 0, 'c', 280, 0]);