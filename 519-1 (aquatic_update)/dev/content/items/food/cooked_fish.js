Translation.addTranslation("Fish Pie", {
	ru: "Рыбный пирог"
});
Translation.addTranslation("Fish Stew", {
	ru: "Тушеная рыба"
});

IDRegistry.genItemID("pieFish");
IDRegistry.genItemID("stewFish");

Item.createFoodItem("pieFish", "Fish Pie", {
	name: "fish_pie", meta: 0
}, {
	stack: 64,
	food: 8
});

Item.createFoodItem("stewFish", "Fish Stew", {
	name: "fish_stew", meta: 0
}, {
	stack: 1,
	food: 17
});

Callback.addCallback("PreLoaded", function () {
	let category = ItemDictionary.getCategoryItems("minecraft:fish")
	for (let i in category) {

		Recipes.addShapeless({ id: ItemID.pieFish, count: 1, data: 0 }, [
			{ id: category[i], data: -1 },
			{ id: VanillaItemID.egg, data: -1 },
			{ id: VanillaItemID.sugar, data: -1 }
		]);
		Recipes.addShapeless({ id: ItemID.stewFish, count: 1, data: 0 }, [
			{ id: category[i], data: -1 },
			{ id: category[i], data: -1 },
			{ id: VanillaItemID.bowl, data: -1 }
		]);
	}

	Callback.addCallback("FoodEaten", function () {
		let item = Player.getCarriedItem();
		if (item.id == ItemID.stewFish) {
			Player.addItemToInventory(VanillaItemID.bowl, 1, 0);
		}
	})
});

/**
 * Changelog:
 *		relise 1.0
 *			- added to game
 */