
IDRegistry.genBlockID("stalBlock"); Block.createBlockWithRotation("stalBlock", [      {name: "Стальной блок", texture: [["stal_block", 0], ["stal_block", 0], ["stal_block", 0], ["stal_block", 0], ["stal_block", 0], ["stal_block", 0]], inCreative: true} ]);
IDRegistry.genBlockID("Трава для Растений"); Block.createBlockWithRotation("Трава для Растений", [      {name: "Трава для Растений", texture: [["plants_grass", 0], ["plants_grass", 1], ["plants_grass", 2], ["plants_grass", 2], ["plants_grass", 2], ["plants_grass", 2]], inCreative: true} ]);
IDRegistry.genItemID("stalShovel");
Item.createItem("stalShovel", "Лопата для Растений", {name: "shovel_plants", meta: 0}, {stack: 1});
IDRegistry.genItemID("stalIngot");
Item.createItem("stalIngot", "Стальной слиток", {name: "stal_ingot", meta: 0}, {stack: 64});
IDRegistry.genItemID("stalStick");
Item.createItem("stalStick", "Палка из Стали", {name: "stalStick", meta:0}, {stack: 64});
Recipes.addShaped({id: ItemID.stalIngot, count: 1, data: 0}, /* Результат крафта */
	["xxx", "xxx", "xxx"], /* Форма рецепта */
	['x', 42, 0]/* Ингридиенты */
);
Recipes.addShaped({id: BlockID.stalBlock, count: 1, data: 0}, /* Результат крафта */
	["xxx", "xxx", "xxx"], /* Форма рецепта */
	['x', ItemID.stalIngot, 0]/* Ингридиенты */
);
Recipes.addShaped({id: ItemID.stalStick, count: 1, data: 0}, /* Результат крафта */
	["", "x", "x"], /* Форма рецепта */
	['x', ItemID.stalIngot, 0]/* Ингридиенты */
);
Recipes.addShaped({id: ItemID.stalShovel, count: 1, data: 0}, /* Результат крафта */
	["x", "#", "s"], /* Форма рецепта */
	['x', ItemID.stalIngot, 0, '#', ItemID.stalStick, 0, 's', 351, 0]/* Ингридиенты */
);