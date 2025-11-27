IDRegistry.genItemID("greenprismarineHelmet");
IDRegistry.genItemID("greenprismarineChestplate");
IDRegistry.genItemID("greenprismarineLeggings");
IDRegistry.genItemID("greenprismarineBoots");

Item.createArmorItem("greenprismarineHelmet", "Green Prismarine Helmet", {name: "green_prismarine_helmet"}, {type: "helmet", armor: 4, durability: 161, texture: "armor/green_1.png"});
Item.createArmorItem("greenprismarineChestplate", "Green Prismarine Chestplate", {name: "green_prismarine_chestplate"}, {type: "chestplate", armor: 5, durability: 221, texture: "armor/green_2.png"});
Item.createArmorItem("greenprismarineLeggings", "Green Prismarine Leggings", {name: "green_prismarine_leggings"}, {type: "leggings", armor: 5, durability: 209, texture: "armor/green_2.png"});
Item.createArmorItem("greenprismarineBoots", "Green Prismarine Boots", {name: "green_prismarine_boots"}, {type: "boots", armor: 4, durability: 184, texture: "armor/green_1.png"});

Recipes.addShaped({id: ItemID.greenprismarineHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.greenPrismarine, 0]);

Recipes.addShaped({id: ItemID.greenprismarineChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.greenPrismarine, 0]);

Recipes.addShaped({id: ItemID.greenprismarineLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.greenPrismarine, 0]);

Recipes.addShaped({id: ItemID.greenprismarineBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.greenPrismarine, 0]);

PRIS.setMode({
	id: ItemID.greenprismarineHelmet,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.greenprismarineChestplate,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.greenprismarineLeggings,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});

PRIS.setMode({
	id: ItemID.greenprismarineBoots,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 3, 19, false,false);
	}
});