IDRegistry.genItemID("puriflesh");
Item.createFoodItem("puriflesh", "Puri Flesh", {name: "puriFlesh", meta: 0}, {food: 8});

Recipes.addFurnace(367, ItemID.puriflesh, 0);

IDRegistry.genItemID("cheese");
Item.createFoodItem("cheese", "Cheese", {name: "cheese", meta: 0}, {food: 9});

Recipes.addShaped({id: ItemID.cheese, count: 1, data: 0}, [
	"aca",
	"cac",
	"bdb"
], ['a', 392, 0, 'b', 296, 0, 'c', 253, 0, 'd', 457, 0]);

IDRegistry.genItemID("applePie");
Item.createFoodItem("applePie", "Apple Pie", {name: "applePie", meta: 0}, {food: 12});

Recipes.addShaped({id: ItemID.applePie, count: 1, data: 0}, [
	"ccc",
	"dad",
	"aaa"
], ['a', 353, 0, 'c', 253, 0, 'd', 260, 0]);