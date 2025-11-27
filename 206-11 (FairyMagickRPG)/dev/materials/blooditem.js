IDRegistry.genItemID("fleshg");
IDRegistry.genItemID("bloodbone");
IDRegistry.genItemID("bloodskale");
IDRegistry.genItemID("bloodsword");
IDRegistry.genItemID("bloodpickaxe");
IDRegistry.genItemID("bloodknife");
IDRegistry.genItemID("boltknife");
IDRegistry.genItemID("bonesword");
IDRegistry.genItemID("bloodbonesword");
IDRegistry.genItemID("berserker_helmet");
IDRegistry.genItemID("berserker_chestplate");
IDRegistry.genItemID("clearknife");
IDRegistry.genItemID("skull");
IDRegistry.genItemID("bloodiron");
IDRegistry.genItemID("graveshard");

Item.createItem("graveshard", "Gravestone shard", {name: "graveshard", meta: 0}, {stack: 64});
Item.createItem("bloodiron", "Blood Iron", {name: "bloodiron", meta: 0}, {stack: 64});
Item.createItem("skull", "Cursed Skull", {name: "cursedskull", meta: 0}, {stack: 1});
Item.createItem("clearknife", "Empty Knife", {name: "clearknife", meta: 0}, {stack: 16});
Item.createItem("fleshg", "Blood Flash", {name: "fleshg", meta: 0}, {stack: 64});
Item.createItem("bloodbone", "Blood Bone", {name: "bloodbone", meta: 0}, {stack: 64});
Item.createItem("bloodskale", "Blood Scale", {name: "bloodskale", meta: 0}, {stack: 64});
Item.createItem("bloodpickaxe", "Idol Blood Pickaxe", {name: "blood_pickaxe", meta: 0}, {stack: 1});
Item.setGlint(ItemID.bloodpickaxe, true);
ChargeItemRegistry.registerItem(ItemID.bloodpickaxe, 10000, 0, true, true);
var BLOODPICKAXE_DURABILITY = 10001;
Item.createItem("bloodsword", "Dual Madnes Sword", {name: "blood_sword", meta: 0}, {stack: 1});
Item.createItem("bloodbonesword", "Blood bone Sword", {name: "bloodbone_sword", meta: 0}, {stack: 1});
Item.createItem("bonesword", "Bonesword", {name: "bone_sword", meta: 0}, {stack: 1});
Item.createThrowableItem("bloodknife", "Blood Knife", {name: "blood_knife", meta: 0}, {stack: 16});
Item.createThrowableItem("boltknife", "Thunderbolt Knife", {name: "bolt_knife", meta: 0}, {stack: 16});

ToolAPI.registerSword(ItemID.bloodsword, {level: 0, durability: 2000, damage: 9});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.bloodsword){ 
Entity.addEffect(Player.get(), 10, 1, 200, false,false);
 } 
});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.boltknife){ 
     var pos = Entity.getPosition(victim);
     var x = pos.x;
     var y = pos.y;
     var z = pos.z;
 Entity.spawn(x, y, z, 93)
    }
 });
Callback.addCallback("PlayerAttack", function (player, victim)
{
if(Player.getCarriedItem().id==ItemID.boltknife)
{
     var pos = Entity.getPosition(victim);
     var x = pos.x;
     var y = pos.y;
     var z = pos.z;
 Entity.spawn(x, y, z, 93)
Player.decreaseCarriedItem (1)
Game.prevent();
}
});
Callback.addCallback("PlayerAttack", function (player, victim)
{
if(Player.getCarriedItem().id==ItemID.bloodknife)
{
Player.decreaseCarriedItem (1)
Game.prevent();
}
});
Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.bloodknife){ 
Entity.addEffect(victim, 20, 1, 200, false,false); 
Entity.addEffect(Player.get(), 10, 1, 200, false,false); 
 } 
});

Item.registerUseFunctionForID(ItemID.bloodpickaxe, function(coords, item, block){ 
if(item.data + 799 <= Item.getMaxDamage(ItemID.bloodpickaxe)){
    Entity.addEffect(Player.get(), 3, 1, 1000, false, false);
         item.data = Math.min(item.data+800, BLOODPICKAXE_DURABILITY);
		Player.setCarriedItem(item.id, 1, item.data);
}} );


ToolAPI.registerSword(ItemID.bonesword, {level: 0, durability: 55, damage: 6});

Item.createArmorItem("berserker_helmet", "Berserker Skull", {name: "berserker_skull", meta: 0}, {type: "helmet", armor: 4, durability: 1250, texture: "armor/berserker_1.png"});

Item.createArmorItem("berserker_chestplate", "Berserker Chestplate", {name: "berserker_chestplate", meta: 0}, {type: "chestplate", armor: 5, durability: 1250, texture: "armor/berserker_1.png"});

Callback.addCallback("tick", function()
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var pos = Player.getPosition();
if (helmet.id == ItemID.berserker_helmet && chest.id == ItemID.berserker_chestplate){
    Entity.addEffect(Player.get(), 15, 1, 100, false, false);
    Entity.addEffect(Player.get(), 5, 2, 50, false, false);
   }
});