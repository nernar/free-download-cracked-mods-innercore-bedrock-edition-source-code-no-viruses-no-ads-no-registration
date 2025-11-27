IDRegistry.genItemID("boots");
IDRegistry.genItemID("leggings");
IDRegistry.genItemID("chestplate");
IDRegistry.genItemID("helmet");

Item.createArmorItem("helmet", "Ирумидиевый Шлем", {name: "he"}, {type: "helmet", armor: 5, durability: 600, texture: "armor/1.png"});

Item.createArmorItem("chestplate", "Ирумидиевый Нагрудник", {name: "ch"}, {type: "chestplate", armor: 15, durability: 650, texture: "armor/1.png"});

Item.createArmorItem("leggings", "Ирумидиевые Поножи", {name: "le"}, {type: "leggings", armor: 10, durability: 700, texture: "armor/2.png"});

Item.createArmorItem("boots", "Ирумидиевые Ботинки", {name: "bo"}, {type: "boots", armor: 7, durability: 575, texture: "armor/1.png"});






Armor.registerFuncs(ItemID.helmet, { 
 tick: function(slot, index, durability){ 
 if(Player.getArmorSlot(1).id == ItemID.chestplate && Player.getArmorSlot(2).id == ItemID.leggings && Player.getArmorSlot(3).id == ItemID.boots){ 

Player.setFlyingEnabled(true);

 } 
 return false;
}, 
  hurt: function(params, slot, index, durability) {
  return false;
  } 
});

