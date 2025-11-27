IDRegistry.genItemID("bone_helmet");
IDRegistry.genItemID("bone_chestplate");
IDRegistry.genItemID("bone_leggings");
IDRegistry.genItemID("bone_boots");

Item.createArmorItem("bone_helmet", "Костянной Шлем", {name: "bone_helmet"}, {type: "helmet", armor: 4, durability: 1100, texture: "armor/bone_layer_1.png"});
Item.createArmorItem("bone_chestplate", "Костяной Нагрудник", {name: "bone_chestplate"}, {type: "chestplate", armor: 6, durability: 1100, texture: "armor/bone_layer_1.png"});
Item.createArmorItem("bone_leggings", "Костянные Штаны", {name: "bone_leggins"}, {type: "leggings", armor: 5, durability: 1100, texture: "armor/bone_layer_2.png"});
Item.createArmorItem("bone_boots", "Костянные Ботинки", {name: "bone_boots"}, {type: "boots", armor: 5, durability: 1100, texture: "armor/bone_layer_1.png"});

Recipes.addShaped({id: ItemID.bone_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.bone_helmet, count: 1, data: 0}, [
	"   ",
	"xax",
	"   "
], ['x', 352, 0, 'a', ItemID.fossil4, 0]);

Recipes.addShaped({id: ItemID.bone_chestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.bone_chestplate, count: 1, data: 0}, [
	"x x",
	"xax"
], ['x', 352, 0, 'a', ItemID.fossil5, 0]);

Recipes.addShaped({id: ItemID.bone_leggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.bone_leggings, count: 1, data: 0}, [
	"xax",
	"x x"
], ['x', 352, 0, 'a', ItemID.fossil6, 0]);

Recipes.addShaped({id: ItemID.bone_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', 352, 0]);

Recipes.addShaped({id: ItemID.bone_boots, count: 1, data: 0}, [
	" a ",
	"x x"
], ['x', 352, 0, 'a', ItemID.fossil2, 0]);

IDRegistry.genItemID("emerald_helmet");
IDRegistry.genItemID("emerald_chestplate");
IDRegistry.genItemID("emerald_leggings");
IDRegistry.genItemID("emerald_boots");

Item.createArmorItem("emerald_helmet", "Изумрудный Шлем", {name: "emerald_helmet"}, {type: "helmet", armor: 4, durability: 1100, texture: "armor/emerald_layer_1.png"});
Item.createArmorItem("emerald_chestplate", "Изумрудный Нагрудник", {name: "emerald_chestplate"}, {type: "chestplate", armor: 6, durability: 1100, texture: "armor/emerald_layer_1.png"});
Item.createArmorItem("emerald_leggings", "Изумрудный Штаны", {name: "emerald_leggins"}, {type: "leggings", armor: 5, durability: 1100, texture: "armor/emerald_layer_2.png"});
Item.createArmorItem("emerald_boots", "Изумрудный Ботинки", {name: "emerald_boots"}, {type: "boots", armor: 5, durability: 1100, texture: "armor/emerald_layer_1.png"});

Recipes.addShaped({id: ItemID.emerald_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', 388, 0]);

Recipes.addShaped({id: ItemID.emerald_chestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', 388, 0]);

Recipes.addShaped({id: ItemID.emerald_leggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', 388, 0]);

Recipes.addShaped({id: ItemID.emerald_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', 388, 0]);

IDRegistry.genItemID("lavacrystal_helmet");
IDRegistry.genItemID("lavacrystal_chestplate");
IDRegistry.genItemID("lavacrystal_leggings");
IDRegistry.genItemID("lavacrystal_boots");

Item.createArmorItem("lavacrystal_helmet", "Лава Кристальной Шлем", {name: "lavacrystal_helmet"}, {type: "helmet", armor: 4, durability: 1100, texture: "armor/lavacrystal_layer_1.png"});
Item.createArmorItem("lavacrystal_chestplate", "Лава Кристальной Нагрудник", {name: "lavacrystal_chestplate"}, {type: "chestplate", armor: 6, durability: 1100, texture: "armor/lavacrystal_layer_1.png"});
Item.createArmorItem("lavacrystal_leggings", "Лава Кристальной Штаны", {name: "lavacrystal_leggins"}, {type: "leggings", armor: 5, durability: 1100, texture: "armor/lavacrystal_layer_2.png"});
Item.createArmorItem("lavacrystal_boots", "Лава Кристальной Ботинки", {name: "lavacrystal_boots"}, {type: "boots", armor: 5, durability: 1100, texture: "armor/lavacrystal_layer_1.png"});

Recipes.addShaped({id: ItemID.lavacrystal_helmet, count: 1, data: 0}, [
	"xxx",
	"x x"
], ['x', ItemID.lava_crystal, 0]);

Recipes.addShaped({id: ItemID.lavacrystal_chestplate, count: 1, data: 0}, [
	"x x",
	"xxx",
	"xxx"
], ['x', ItemID.lava_crystal, 0]);

Recipes.addShaped({id: ItemID.lavacrystal_leggings, count: 1, data: 0}, [
	"xxx",
	"x x",
	"x x"
], ['x', ItemID.lava_crystal, 0]);

Recipes.addShaped({id: ItemID.lavacrystal_boots, count: 1, data: 0}, [
	"x x",
	"x x"
], ['x', ItemID.lava_crystal, 0]);

Callback.addCallback("tick", function(){
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.lavacrystal_helmet && chest.id == ItemID.lavacrystal_chestplate && legs.id == ItemID.lavacrystal_leggings && boots.id == ItemID.lavacrystal_boots) {
    Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 25, 3);
   }
});