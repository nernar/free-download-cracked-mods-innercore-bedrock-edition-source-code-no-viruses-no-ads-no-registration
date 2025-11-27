IDRegistry.genItemID("can");
Item.createItem("can", "Can", {name: "can", meta: 0}, {});
IDRegistry.genItemID("canApple");
Item.createFoodItem("canApple", "Canned Apple", {name: "can_apple", meta: 0}, {food: 4});
IDRegistry.genItemID("canBeef");
Item.createFoodItem("canBeef", "Canned Beef", {name: "can_beef", meta: 0}, {food: 8});
IDRegistry.genItemID("canBeetroot");
Item.createFoodItem("canBeetroot", "Canned Beetroot", {name: "can_beetroot", meta: 0}, {food: 1});
IDRegistry.genItemID("canCarrot");
Item.createFoodItem("canCarrot", "Canned Carrot", {name: "can_carrot", meta: 0}, {food: 3});
IDRegistry.genItemID("canCereals");
Item.createFoodItem("canCereals", "Canned Cereals", {name: "can_cereals", meta: 0}, {food: 3});
IDRegistry.genItemID("canChicken");
Item.createFoodItem("canChicken", "Canned Chicken", {name: "can_chicken", meta: 0}, {food: 6});
IDRegistry.genItemID("canMelon");
Item.createFoodItem("canMelon", "Canned Melon", {name: "can_melon", meta: 0}, {food: 2});
IDRegistry.genItemID("canMushrooms");
Item.createFoodItem("canMushrooms", "Canned Mushrooms", {name: "can_mushrooms", meta: 0}, {food: 4});
IDRegistry.genItemID("canMutton");
Item.createFoodItem("canMutton", "Canned Mutton", {name: "can_mutton", meta: 0}, {food: 6});
IDRegistry.genItemID("canPorkchop");
Item.createFoodItem("canPorkchop", "Canned Porkchop", {name: "can_porkchop", meta: 0}, {food: 6});
IDRegistry.genItemID("canPotato");
Item.createFoodItem("canPotato", "Canned Potato", {name: "can_potato", meta: 0}, {food: 5});
IDRegistry.genItemID("canRabbit");
Item.createFoodItem("canRabbit", "Canned Rabbit", {name: "can_rabbit", meta: 0}, {food: 5});
var canned = [ItemID.canApple, ItemID.canBeef, ItemID.canBeetroot, ItemID.canCarrot, ItemID.canCereals, ItemID.canChicken, ItemID.canMelon, ItemID.canMushrooms, ItemID.canMutton, ItemID.canPorkchop, ItemID.canPotato, ItemID.canRabbit];
Callback.addCallback("FoodEaten", function (food, satRatio) {
    var id = Player.getCarriedItem().id;
    if (canned.indexOf(id) != -1) {
        Player.addItemToInventory(ItemID.can, 1, 0);
    }
});

