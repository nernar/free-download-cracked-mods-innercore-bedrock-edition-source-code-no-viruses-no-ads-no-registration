IMPORT("HelperMod");

IDRegistry.genItemID("Wings");
Item.createArmorItem("Wings", "Майка Тайлена", {name: "taile"}, {type: "chestplate", armor: 8, durability: 10000, texture: "armor/taile_1.png", isTech:false}); 

ARMOR.setMode({
	id: ItemID.Wings,
	type: [1],
	tick: function(){
       Player.setFlyingEnabled(true);
	}
});
Callback.addCallback("tick",function() {
    if(Player.getArmorSlot(1).id ==! ItemID.Wings && !Game.getGameMode()){
	    Player.setFlyingEnabled(false);
    }
});

Recipes.addShaped({id: ItemID.Wings, count: 1, data: 0}, [
		"boc",
		"aca",
		"cab"
	], ['b', ItemID.Lolinghot, 0, 'a', ItemID.grapple, 0, 'c', ItemID.golem_crystal, 0,]);
	
IDRegistry.genItemID("TaileHelmet");
Item.createArmorItem("TaileHelmet", "Шлем Тайлена", {name: "taile", meta: 1}, {	isTech: false,
	armor: 3,
	type: "helmet",
	texture: "armor/taile_3.png",
	durability: 16000
});
ARMOR.setMode({
	id: ItemID.TaileHelmet,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 16, 1, 19, false,false);
       Entity.addEffect(Player.get(), 23, 190, 19, false,false);
       Entity.addEffect(Player.get(), 13, 190, 19, false,false);
	}
});

Recipes.addShaped({id: ItemID.TaileHelmet, count: 1, data: 0}, [
		"bcb",
		"aoa",
		"ooo"
	], ['b', ItemID.Lolinghot, 0, 'a', ItemID.grapple, 0, 'c', ItemID.golem_crystal, 0,]);