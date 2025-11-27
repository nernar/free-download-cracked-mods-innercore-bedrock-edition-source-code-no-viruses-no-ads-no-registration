IDRegistry.genItemID("redprismarineHelmet");
IDRegistry.genItemID("redprismarineChestplate");
IDRegistry.genItemID("redprismarineLeggings");
IDRegistry.genItemID("redprismarineBoots");

Item.createArmorItem("redprismarineHelmet", "Red Prismarine Helmet", {name:"red_prismarine_helmet"}, {type: "helmet", armor: 5, durablity: 149, texture: "armor/red_1.png"});
Item.createArmorItem("redprismarineChestplate", "Red Prismarine Chestplate", {name: "red_prismarine_chestplate"}, {type: "chestplate", armor: 7, durablity: 216, texture: "armor/red_1.png"});
Item.createArmorItem("redprismarineLeggings", "Red Prismarine Leggings", {name:"red_prismarine_leggings"}, {type: "leggings", armor: 6, durablity: 203, texture: "armor/red_2.png"});
Item.createArmorItem("redprismarineBoots", "Red Prismarine Boots", {name: "red_prismarine_boots"}, {type: "boots", armor:3, durablity:149, texture:"armor/red_1.png"});

Recipes.addShaped({id: ItemID.redprismarineHelmet, count: 1, data: 0}, [
    "xxx",
	"x x"
], ["x", ItemID.redPrismarine, 0]);

Recipes.addShaped({id: ItemID.redprismarineChestplate, count: 1, data: 0}, [
    "x x",
	"xxx",
	"xxx"
], ["x", ItemID.redPrismarine, 0]);

Recipes.addShaped({id: ItemID.redprismarineLeggings, count: 1, data:0}, [
    "xxx",
	"x x",
	"x x"
], ["x", ItemID.redPrismarine, 0]);

Recipes.addShaped({id: ItemID.redprismarineBoots, count: 1, data: 0}, [
    "x x",
	"x x"
], ["x", ItemID.redPrismarine, 0]);

PRIS.setMode({
	id: ItemID.redprismarineHelmet,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.redprismarineChestplate,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.redprismarineLeggings,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.redprismarineBoots,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});