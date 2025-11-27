IDRegistry.genItemID("mininghelmet1");
Item.createArmorItem("mininghelmet1", "Mining Helmet", {name: "mining_helmet1", meta: 0}, {type: "helmet", armor: 3, durability: 500, texture: "armor/mining1_1.png"});
		Recipes.addShaped({id: ItemID.mininghelmet1, count: 1, data: 0}, [
		" a ",
		"cbc",
		"ccc"
		], ['a', 89, 0, 'b', 351, 14, 'c', 42, 0]);
		Callback.addCallback("tick", function(){
	var helmet = Player.getArmorSlot(0);
	if (helmet.id == ItemID.mininghelmet1) {
	Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 25, 3);
	
	
	}
	}); 