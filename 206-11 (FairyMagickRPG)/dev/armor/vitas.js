IDRegistry.genItemID("shelom_helmet");
IDRegistry.genItemID("ushman_chestplate");
IDRegistry.genItemID("latnitsa_leggings");
IDRegistry.genItemID("ichigi_boots");

Item.createArmorItem("shelom_helmet", "Shelom", {name: "shelom", meta: 0}, {type: "helmet", armor: 3, durability: 1500, texture: "armor/bounty_1.png"});

Item.createArmorItem("ushman_chestplate", "Ushman", {name: "ushman", meta: 0}, {type: "chestplate", armor: 4, durability: 1500, texture: "armor/bounty_1.png"});

Item.createArmorItem("latnitsa_leggings", "Latnitsa", {name: "latnitsa", meta: 0}, {type: "leggings", armor: 3, durability: 1500, texture: "armor/bounty_2.png"});

Item.createArmorItem("ichigi_boots", "Ichigi", {name: "ichigi", meta: 0}, {type: "boots", armor: 3, durability: 1500, texture: "armor/bounty_1.png"});

Callback.addCallback("tick", function()
{
    var helmet = Player.getArmorSlot(0);
    var pos = Player.getPosition();
if (helmet.id == ItemID.shelom_helmet){
    Entity.addEffect(Player.get(), 16, 1, 1000, false, false);
   }
});

Callback.addCallback("tick", function()
{
    var chest = Player.getArmorSlot(1);
    var pos = Player.getPosition();
if (chest.id == ItemID.ushman_chestplate){
    Entity.addEffect(Player.get(), 5, 1, 250, false, false);
   }
});
Callback.addCallback("tick", function()
{
    var leggings = Player.getArmorSlot(2);
    var pos = Player.getPosition();
if (leggings.id == ItemID.latnitsa_leggings){
    Entity.addEffect(Player.get(), 8, 3, 250, false, false);
   }
});

Callback.addCallback("tick", function()
{
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
if (boots.id == ItemID.ichigi_boots){
    Entity.addEffect(Player.get(), 1, 2, 250, false, false);
   }
});


