//ingredients
IDRegistry.genItemID("bfcreambottle");
Item.createItem("bfcreambottle", "Cream Bottle", {name: "cream"});
IDRegistry.genItemID("bfcheese");
Item.createFoodItem("bfcheese", "Cheese Cube", {name: "cubecheese", meta: 0}, {food: 2});
IDRegistry.genItemID("bfcreamball");
Item.createFoodItem("bfcreamball", "Cream Ball", {name: "creamball", meta: 0}, {food: 1});
IDRegistry.genItemID("bfflourbag");
Item.createFoodItem("bfflourbag", "Flour Bag", {name: "flourbag", meta: 0}, {food: 1});
IDRegistry.genItemID("bfdough");
Item.createFoodItem("bfdough", "Dough", {name: "dough", meta: 0}, {food: 2});
IDRegistry.genItemID("bfrawbeefcount");
Item.createFoodItem("bfrawbeefcount", "Raw Beef Count", {name: "bigbeefraw", meta: 0}, {food: 2});
IDRegistry.genItemID("bfrawchickenleg");
Item.createFoodItem("bfrawchickenleg", "Raw Chicken Leg", {name: "chickenlegraw", meta: 0}, {food: 1});
//fööd haha
IDRegistry.genItemID("bfsnack");
Item.createFoodItem("bfsnack", "Bread Snack", {name: "snack", meta: 0}, {food: 6});
IDRegistry.genItemID("bfcreamcookie");
Item.createFoodItem("bfcreamcookie", "Cream Cookie", {name: "creamcookie", meta: 0}, {food: 4});
IDRegistry.genItemID("bftinycake");
Item.createFoodItem("bftinycake", "Small Cake \n §3Small!", {name: "sweetbread", meta: 0}, {food: 14});
IDRegistry.genItemID("bfcarrot");
Item.createFoodItem("bfcarrot", "Carrot 'n' Cheese", {name: "carrotwithcheese", meta: 0}, {food: 8});
IDRegistry.genItemID("bfapplepie");
Item.createFoodItem("bfapplepie", "Apple Pie", {name: "applepie", meta: 0}, {food: 16});
//fööd haha but is dəd animal :(
IDRegistry.genItemID("bfbeefcount");
Item.createFoodItem("bfbeefcount", "Cooked Beef Count", {name: "bigbeefcooked", meta: 0}, {food: 20});
IDRegistry.genItemID("bfchickenleg");
Item.createFoodItem("bfchickenleg", "Cooked Chicken Leg", {name: "chickenlegcooked", meta: 0}, {food: 4});
IDRegistry.genItemID("bffriedegg");
Item.createFoodItem("bffriedegg", "Fried Egg", {name: "friedegg", meta: 0}, {food: 6});
//recipesfurnace
Recipes.addFurnace(344, ItemID.bffriedegg);
Recipes.addFurnace(ItemID.bfrawchickenleg, ItemID.bfchickenleg);
Recipes.addFurnace(ItemID.bfrawbeefcount, ItemID.bfbeefcount);
Recipes.addFurnace(ItemID.bfdough, ItemID.bfsnack);
//recipestable
Recipes.addShaped({id: ItemID.bfcreambottle, count: 4, data: 0}, [
        "b a",
        "b a",
        "aa "
    ], ['a', 374, 0, 'b', 353, 0]);
Recipes.addShaped({id: ItemID.bfcreamball, count: 2, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.bfcreambottle, 0]); 
    
Recipes.addShaped({id: ItemID.bfcheese, count: 1, data: 0}, [
        "aaa",
        "a a",
        "aaa"
    ], ['a', ItemID.bfcreamball, 0]); 
Recipes.addShaped({id: ItemID.bfflourbag, count: 1, data: 0}, [
        "aaa",
        "   ",
        "   "
    ], ['a', 170, 0]);
Recipes.addShaped({id: ItemID.bfdough, count: 18, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', ItemID.bfflourbag, 0]);
Recipes.addShaped({id: ItemID.bfrawbeefcount, count: 1, data: 0}, [
        "   ",
        " a ",
        " a "
    ], ['a', 363, 0]);
Recipes.addShaped({id: ItemID.bfrawchickenleg, count: 2, data: 0}, [
        "   ",
        " a ",
        "   "
    ], ['a', 365, 0]);
Recipes.addShaped({id: ItemID.bfcreamcookie, count: 8, data: 0}, [
        " a ",
        " a ",
        " b "
    ], ['a', ItemID.bfcreamball, 0, 'b', 357, 0]);
Recipes.addShaped({id: ItemID.bfcarrot, count: 1, data: 0}, [
        "   ",
        " b ",
        " a "
    ], ['a', 391, 0, 'b', ItemID.bfcheese, 0]);
Recipes.addShaped({id: ItemID.bfapplepie, count: 1, data: 0}, [
        "ab ",
        "c  ",
        "   "
    ], ['a', 344, 0, 'b', 353, 0, 'c', 260, 0]);
Recipes.addShaped({id: ItemID.bftinycake, count: 1, data: 0}, [
        "ddd",
        "bcb",
        "aaa"
    ], ['a', 296, 0, 'b', 344, 0, 'c', 353, 0, 'd', ItemID.bfcreamball, 0]);