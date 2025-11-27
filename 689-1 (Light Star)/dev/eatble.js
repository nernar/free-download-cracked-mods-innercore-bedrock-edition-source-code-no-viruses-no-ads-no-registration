IDRegistry.genItemID("Mars");
Item.createFoodItem("Mars", "Bar Mars", {name: "Mars", meta: 0},{isTech:false,stack: 64,food: 2});
Item.registerUseFunctionForID(ItemID.MoneyF, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
    	if(block.id == BlockID.SneckTwo){
  Entity.setCarriedItem(player, ItemID.Mars, 1, 0)
}}});
IDRegistry.genItemID("Cola");
Item.createFoodItem("Cola", "Galss Of Coca-Cola", {name: "Gcola", meta: 0},{isTech:false,stack: 64,food: 2});
Recipes.addShaped({id: ItemID.Cola, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['b', ItemID.Water, 0, 'a', 353, 0]);
IDRegistry.genItemID("Water");
Item.createFoodItem("Water", "Glass Of Water", {name: "Gwater", meta: 0},{isTech:false,stack: 64,food: 1});
Item.registerUseFunctionForID(ItemID.Stakan, function(coords, item, block, player) {
    var client = Network.getClientForPlayer(player);
    if(client != null){
    	if(block.id == BlockID.ApparatTwo){
  Entity.setCarriedItem(player, ItemID.Water, 1, 0)
}}});