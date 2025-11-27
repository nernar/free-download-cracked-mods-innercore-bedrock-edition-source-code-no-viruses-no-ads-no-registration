IDRegistry.genItemID("ogs");
Item.createItem("ogs", "Obsidian gold stick", {name: "ogs", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.ogs, count: 1, data: 0}, [
	"a",
	"a"
], ['a', ItemID.og, 0]);