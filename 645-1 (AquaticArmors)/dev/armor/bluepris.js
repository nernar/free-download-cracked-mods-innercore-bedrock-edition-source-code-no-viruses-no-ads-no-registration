IDRegistry.genItemID("blueprismarineHelmet");
IDRegistry.genItemID("blueprismarineChestplate");
IDRegistry.genItemID("blueprismarineLeggings");
IDRegistry.genItemID("blueprismarineBoots");

Item.createArmorItem("blueprismarineHelmet", "Blue Prismarine Helmet", {name: "blue_prismarine_helmet"}, {type: "helmet", armor: 4, durability: 161, texture: "armor/blue_1.png"});
Item.createArmorItem("blueprismarineChestplate", "Blue Prismarine Chestplate", {name: "blue_prismarine_chestplate"}, {type: "chestplate", armor: 5, durability: 221, texture: "armor/blue_1.png"});
Item.createArmorItem("blueprismarineLeggings", "Blue Prismarine Leggings", {name: "blue_prismarine_leggings"}, {type: "leggings", armor: 5, durability: 209, texture: "armor/blue_2.png"});
Item.createArmorItem("blueprismarineBoots", "Blue Prismarine Boots", {name: "blue_prismarine_boots"}, {type: "boots", armor: 4, durability: 184, texture: "armor/blue_1.png"});

Recipes.addShaped({id: ItemID.blueprismarineHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.bluePrismarine, 0]);

Recipes.addShaped({id: ItemID.blueprismarineChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.bluePrismarine, 0]);

Recipes.addShaped({id: ItemID.blueprismarineLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.bluePrismarine, 0]);

Recipes.addShaped({id: ItemID.blueprismarineBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.bluePrismarine, 0]);

PRIS.setMode({
	id: ItemID.blueprismarineHelmet,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.blueprismarineChestplate,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.blueprismarineLeggings,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.blueprismarineBoots,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});