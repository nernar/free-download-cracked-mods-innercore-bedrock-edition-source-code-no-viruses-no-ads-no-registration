/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: leather&meat.js

IDRegistry.genItemID("creeperLeather");
IDRegistry.genItemID("creeperMeat");
Item.createItem("creeperLeather", "Creeper Leather", {name:"creeperLeather"}, {stack:64});
Item.createItem("creeperMeat", "Creeper Meat", {name:"creeperMeat"}, {stack:64});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 33){
 		var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 1 + parseInt(Math.random() * 2);
      World.drop(coords.x, coords.y, coords.z, ItemID.creeperLeather, leth);
      World.drop(coords.x, coords.y, coords.z, ItemID.creeperMeat, mea);
 }
});




// file: Steak.js

IDRegistry.genItemID("creeperSteak");
Item.createFoodItem("creeperSteak", "Creeper Steak", {name:"creeperSteak"}, {food:4});
Recipes.addFurnace(ItemID.creeperMeat, ItemID.creeperSteak, 0);




// file: Armor.js

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




// file: translation.js

Translation.addTranslation("Creeper Leather", {ru: "Кожа крипера"});
Translation.addTranslation("Creeper Meat", {ru: "Мясо крипера"});
Translation.addTranslation("Creeper Steak", {ru: "Стейк крипера"});

Translation.addTranslation("Creeper Helmet", {ru: "Шлем крипера"});
Translation.addTranslation("Creeper Chestplate", {ru: "Нагрудник крипера"});
Translation.addTranslation("Creeper Leggings", {ru: "Поножи крипера"});
Translation.addTranslation("Creeper Boots", {ru: "Ботинки крипера"});




