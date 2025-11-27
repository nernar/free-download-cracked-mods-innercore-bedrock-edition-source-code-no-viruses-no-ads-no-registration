IMPORT("RegisterFunctions");

Item.createFoodItem("paladium_apple", "Paladium Apple", {name: "paladium_apple"}, {food: 4});
Callback.addCallback("FoodEaten",function(heal, satRatio)
{
	Entity.addEffect(player, 12, 0, 1200);
	Entity.addEffect(player, 22, 0, 2400);
});