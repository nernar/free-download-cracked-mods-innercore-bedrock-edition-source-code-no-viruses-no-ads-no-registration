IDRegistry.genItemID("frikadelka");
Item.createFoodItem("frikadelka", "Фрикаделька", {name: "frikadelka", meta: 0}, {food: 3.5, isTech: true});
Recipes.addShaped({id: ItemID.frikadelka, count: 1, data: 0}, [
    "   ",
    "ab ",
    "   "
], ['a', 319, 0,'b', 363, 0]);