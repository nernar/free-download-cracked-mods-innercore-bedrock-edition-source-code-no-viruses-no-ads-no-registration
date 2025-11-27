IDRegistry.genItemID("Avoska");
Item.createItem("Avoska", "String Bag", {name: "Avoska", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.Avoska, {
    slots: 5,
    slotsCenter: true,
    inRow: 1
});
Recipes.addShaped({id: ItemID.Avoska, count: 1, data: 0}, [
		" a ",
		"a a",
		"aaa"
	], ['a', 287, 0]);
//одеваемые
IDRegistry.genItemID("Remen");
Item.createArmorItem("Remen", "Strap", {name: "Remen"}, {type: "leggings", armor: 6, durability: 5556, texture: "armor/Snachok_1.png", isTech:false}); 
Recipes.addShaped({id: ItemID.Remen, count: 1, data: 0}, [
		" a ",
		"aba",
		"aba"
	], ['a', 334, 0, 'b', 266, 0]);
//электроника
IDRegistry.genItemID("Acam");
Item.createItem("Acam", "Accumulator", {name: "Acamulator", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.Acam, count: 1, data: 0}, [
		"aba",
		"cbc",
		"bbb"
	], ['a', 356, 0, 'b', 265, 0, 'c', 404, 0]);
IDRegistry.genItemID("Plast");
Item.createItem("Plast", "Lead Plate", {name: "Plast", meta: 0}, {stack: 64});
IDRegistry.genItemID("Battarey");
Item.createItem("Battarey", "Battery: Planet-2", {name: "Battery", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.Battarey, count: 1, data: 0}, [
		"a a",
		" b ",
		" b "
	], ['a', ItemID.Plast, 0, 'b', 265, 0]);
Item.registerUseFunctionForID(ItemID.Acam, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
  Entity.setCarriedItem(player, ItemID.Plast, 2, 0)
}});