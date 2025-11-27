IDRegistry.genItemID("rubyHelmet");
IDRegistry.genItemID("rubyChestplate");
IDRegistry.genItemID("rubyLeggings");
IDRegistry.genItemID("rubyBoots");

Item.createArmorItem("rubyHelmet", "Ruby Helmet", {name: "rubyhelmet"}, {type: "helmet", armor: 4, durability: 1100, texture: "armor/ruby1_1.png"});
Item.createArmorItem("rubyChestplate", "Ruby Chestplate", {name: "rubychestplate"}, {type: "chestplate", armor: 6, durability: 1100, texture: "armor/ruby1_1.png"});
Item.createArmorItem("rubyLeggings", "Ruby Leggings", {name: "rubyleggings"}, {type: "leggings", armor: 5, durability: 1100, texture: "armor/ruby2_2.png"});
Item.createArmorItem("rubyBoots", "Ruby Boots", {name: "rubyboots"}, {type: "boots", armor: 5, durability: 1100, texture: "armor/ruby1_1.png"});

Recipes.addShaped({id: ItemID.rubyHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.ruby, 0]);

Recipes.addShaped({id: ItemID.rubyChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.ruby, 0]);

Recipes.addShaped({id: ItemID.rubyLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.ruby, 0]);

Recipes.addShaped({id: ItemID.rubyBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.ruby, 0]);





IDRegistry.genItemID("urubyHelmet");
IDRegistry.genItemID("urubyChestplate");
IDRegistry.genItemID("urubyLeggings");
IDRegistry.genItemID("urubyBoots");

Item.createArmorItem("urubyHelmet", "Ultimate Ruby Helmet", {name: "urubyhelmet"}, {type: "helmet", armor: 4, durability: 2000, texture: "armor/uruby1_1.png"});
Item.createArmorItem("urubyChestplate", "Ultimate Ruby Chestplate", {name: "urubychestplate"}, {type: "chestplate", armor: 6, durability: 2000, texture: "armor/uruby1_1.png"});
Item.createArmorItem("urubyLeggings", "Ultimate Ruby Leggings", {name: "urubyleggings"}, {type: "leggings", armor: 5, durability: 2000, texture: "armor/uruby2_2.png"});
Item.createArmorItem("urubyBoots", "Ultimate Ruby Boots", {name: "urubyboots"}, {type: "boots", armor: 5, durability: 2000, texture: "armor/uruby1_1.png"});

Recipes.addShaped({id: ItemID.urubyHelmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.ulruby, 0]);

Recipes.addShaped({id: ItemID.urubyChestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.ulruby, 0]);

Recipes.addShaped({id: ItemID.urubyLeggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.ulruby, 0]);

Recipes.addShaped({id: ItemID.urubyBoots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.ulruby, 0]);