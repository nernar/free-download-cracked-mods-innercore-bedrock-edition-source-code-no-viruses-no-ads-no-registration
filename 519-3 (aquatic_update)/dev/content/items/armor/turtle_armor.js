Translation.addTranslation("Turtle Chestplate", {
	ru: "Черепаший нагрудник"
});
Translation.addTranslation("Turtle Leggings", {
	ru: "Черепашьи поножи"
});
Translation.addTranslation("Turtle Boots", {
	ru: "Черепашьи ботинки"
});

IDRegistry.genItemID("chestplateTurtle");
IDRegistry.genItemID("leggingsTurtle");
IDRegistry.genItemID("bootsTurtle");

Item.createArmorItem("chestplateTurtle", "Turtle Chestplate", { name: "shell_chestplate", meta: 0 }, {
	armor: 8,
	type: "chestplate",
	texture: "armor/turtle_shell_1.png",
	durability: 500
});
Item.createArmorItem("leggingsTurtle", "Turtle Leggings", { name: "shell_leggings", meta: 0 }, {
	armor: 6,
	type: "leggings",
	texture: "armor/turtle_shell_2.png",
	durability: 400
});
Item.createArmorItem("bootsTurtle", "Turtle Boots", { name: "shell_boots", meta: 0 }, {
	armor: 3,
	type: "boots",
	texture: "armor/turtle_shell_1.png",
	durability: 400
});

Callback.addCallback("PreLoaded", function () {
	Item.setEnchantType("chestplateTurtle", EnchantType.chestplate);
	Item.setEnchantType("leggingsTurtle", EnchantType.leggings);
	Item.setEnchantType("bootsTurtle", EnchantType.boots);

	Recipes.addShaped({ id: ItemID.chestplateTurtle, count: 1, data: 0 }, [
		"A#A",
		"AAA",
		"AAA"
	], ['A', VanillaItemID.turtle_shell_piece, -1]);
	Recipes.addShaped({ id: ItemID.leggingsTurtle, count: 1, data: 0 }, [
		"AAA",
		"A#A",
		"A#A"
	], ['A', VanillaItemID.turtle_shell_piece, -1]);
	Recipes.addShaped({ id: ItemID.bootsTurtle, count: 1, data: 0 }, [
		"A#A",
		"A#A"
	], ['A', VanillaItemID.turtle_shell_piece, -1]);

	Item.addRepairItemIds(ItemID.chestplateTurtle, [VanillaItemID.turtle_shell_piece]);
	Item.addRepairItemIds(ItemID.leggingsTurtle, [VanillaItemID.turtle_shell_piece]);
	Item.addRepairItemIds(ItemID.bootsTurtle, [VanillaItemID.turtle_shell_piece]);
});

/**
 * Changelog:
 *		relise 1.0
 *			- added to game
 */