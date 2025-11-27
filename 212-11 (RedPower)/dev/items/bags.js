IDRegistry.genItemID("canvas");
Item.createItem("canvas", "Canvas", {name: "canvas", meta: 0});

let canvasBagPrototype = {
	title: "Canvas Bag",
	slots: 27,
	inRow: 9,
	slotsCenter: true
}

for(let i = 0; i < 16; i++){
	IDRegistry.genItemID("canvasBag" + i);
	Item.createItem("canvasBag" + i, "Canvas Bag", {name: "canvas_bag", meta: i}, {stack: 1});
	BackpackRegistry.register(ItemID["canvasBag" + i], canvasBagPrototype);
}

Recipes.addShaped({id: ItemID.canvas, count: 1, data: 0}, [
	"aaa",
	"axa",
	"aaa"
], ['x', 280, 0, 'a', 287, 0]);

Recipes.addShaped({id: ItemID.canvasBag0, count: 1, data: 0}, [
	"aaa",
	"a a",
	"aaa"
], ['a', ItemID.canvas, 0]);

Recipes.addShaped({id: ItemID.canvasBag11, count: 1, data: 0}, [
	"aaa",
	"axa",
	"aaa"
], ['x', ItemID.indigoDye, 0, 'a', ItemID.canvas, 0]);

for(let i = 1; i < 16; i++){
	Recipes.addShaped({id: ItemID["canvasBag" + i], count: 1, data: 0}, [
		"aaa",
		"axa",
		"aaa"
	], ['x', 351, 15 - i, 'a', ItemID.canvas, 0]);
}
