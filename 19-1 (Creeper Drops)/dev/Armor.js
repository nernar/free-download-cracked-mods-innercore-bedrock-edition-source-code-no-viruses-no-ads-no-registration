IDRegistry.genItemID("creeperHelm");
IDRegistry.genItemID("creeperChest");
IDRegistry.genItemID("creeperLegg");
IDRegistry.genItemID("creeperBoots");

Item.createArmorItem("creeperHelm", "Creeper Helmet", {name: "creeperHelm"}, {type: "helmet", armor: 3, durability: 1000, texture: "armor/creeperArmor_1.png"});
Item.createArmorItem("creeperChest", "Creeper Chestplate", {name: "creeperChest"}, {type: "chestplate", armor: 6, durability: 1000, texture: "armor/creeperArmor_1.png"});
Item.createArmorItem("creeperLegg", "Creeper Leggings", {name: "creeperLegg"}, {type: "leggings", armor: 5, durability: 1000, texture: "armor/creeperArmor_2.png"});
Item.createArmorItem("creeperBoots", "Creeper Boots", {name: "creeperBoots"}, {type: "boots", armor: 2, durability: 1000, texture: "armor/creeperArmor_1.png"});

Recipes.addShaped({id: ItemID.creeperHelm, count: 1, data: 0}, [
	"lll",
	"l l",
	"   "
], ['l', ItemID.creeperLeather, 0]);

Recipes.addShaped({id: ItemID.creeperChest, count: 1, data: 0}, [
	"l l",
	"lll",
	"lll"
], ['l', ItemID.creeperLeather, 0]);

Recipes.addShaped({id: ItemID.creeperLegg, count: 1, data: 0}, [
	"lll",
	"l l",
	"l l"
], ['l', ItemID.creeperLeather, 0]);

Recipes.addShaped({id: ItemID.creeperBoots, count: 1, data: 0}, [
	"   ",
	"l l",
	"l l"
], ['l', ItemID.creeperLeather, 0]);
