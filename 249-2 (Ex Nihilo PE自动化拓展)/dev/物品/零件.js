IDRegistry.genItemID("um_铁棒");
Item.createItem("um_铁棒","Iron Stick",
{name:"um_铁棒", meta:   0  });

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.um_铁棒, count: 2, data: 0}, [
		"moo",
		"moo",
		"ooo"
	], ['m', 265, -1]);
});