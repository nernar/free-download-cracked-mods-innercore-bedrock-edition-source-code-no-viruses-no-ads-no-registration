IDRegistry.genItemID("PhoenixK");
Item.createArmorItem("PhoenixK", "Нагрудник Феникс", {name: "PhoenixK"}, {type: "chestplate", armor: 7, durability: 300, texture: "armor/PhoenixArmor_0.png"});
Recipes.addShaped({id: ItemID.PhoenixK, count: 1, data: 0}, [
"xxx",
"xox",
"xxx"
], ['x', ItemID.OgonKu, 0, 'o', 315, 0]);

IDRegistry.genItemID("PhoenixH");
Item.createArmorItem("PhoenixH", "Шлем Феникс", {name: "PhoenixH"}, {type: "helmet", armor: 3, durability: 230, texture: "armor/PhoenixArmor_0.png"});
Recipes.addShaped({id: ItemID.PhoenixH, count: 1, data: 0}, [
"xxx",
"xox",
"xxx"
], ['x', ItemID.OgonKu, 0, 'o', 314, 0]);

IDRegistry.genItemID("PhoenixL");
Item.createArmorItem("PhoenixL", "Штаны Феникс", {name: "PhoenixL"}, {type: "leggings", armor: 4, durability: 275, texture: "armor/PhoenixArmor_1.png"});
Recipes.addShaped({id: ItemID.PhoenixL, count: 1, data: 0}, [
"xxx",
"xox",
"xxx"
], ['x', ItemID.OgonKu, 0, 'o', 317, 0]);

IDRegistry.genItemID("PhoenixB");
Item.createArmorItem("PhoenixB", "Ботинки Феникс", {name: "PhoenixB"}, {type: "boots", armor: 2, durability: 210, texture: "armor/PhoenixArmor_0.png"});
Recipes.addShaped({id: ItemID.PhoenixB, count: 1, data: 0}, [
"xxx",
"xox",
"xxx"
], ['x', ItemID.OgonKu, 0, 'o', 317, 0]);

Callback.addCallback("tick", function()
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.PhoenixH && chest.id == ItemID.PhoenixK && legs.id == ItemID.PhoenixL && boots.id == ItemID.PhoenixB){
    Entity.addEffect(Player.get(), 12, 25, 3, false, false);
   }
});

Callback.addCallback("tick", function() {	
var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.PhoenixH && chest.id == ItemID.PhoenixK && legs.id == ItemID.PhoenixL && boots.id == ItemID.PhoenixB){	World.setBlock(Player.getPosition().x, Player.getPosition().y-1, Player.getPosition().z, 51, 0)
	} 
});

Callback.addCallback("tick", function() {	
var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (helmet.id == ItemID.PhoenixH && chest.id == ItemID.PhoenixK && legs.id == ItemID.PhoenixL && boots.id == ItemID.PhoenixB && World.getBlock(Player.getPosition().x, Player.getPosition().y-1, Player.getPosition().z, 51, 0)){
Entity.addEffect(Player.get(), 10, 1, 1, false, false);
	} 
});



IDRegistry.genItemID("RukaZelez");
Item.createArmorItem("RukaZelez", "Железная рука", {name: "RukaZelez"}, {type: "chestplate", armor: 5, durability: 220, texture: "armor/RukaZelez_0.png"});
Recipes.addShaped({id: ItemID.RukaZelez, count: 1, data: 0}, [
"zxz",
"z z",
"a a"
], ['x', 307, 0, 'z', 265, 0, 'a', 42, 0]);
Callback.addCallback("tick", function() {
    var chest = Player.getArmorSlot(1);
var pos = Player.getPosition();
if (chest.id == ItemID.RukaZelez){
    Entity.addEffect(Player.get(), 5, 25, 3, false, false);
   }
});

