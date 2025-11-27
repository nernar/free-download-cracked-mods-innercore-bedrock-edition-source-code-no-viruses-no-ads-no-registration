IDRegistry.genItemID("guardiansword");
Item.createItem("guardiansword", "§1Великий Меч Хранителя \n§r80-88 урона", {name: "guardiansword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("guardiansword", {durability: 2000, level: 5, efficiency: 70, damage: 80, enchantability: 14});
ToolAPI.setTool(ItemID.guardiansword, "guardiansword", ToolType.sword);


Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.guardiansword && Math.random() <= 0.5){ 	
Entity.addEffect(victim, 7, 1, 20, true, true);
}
});




IDRegistry.genItemID("undergroundsword");
Item.createItem("undergroundsword", "§1Великий Подземный Меч \n§r82-98 урона\nНакладывает регенерацию на игрока", {name: "undergroundsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("undergroundsword", {durability: 2000, level: 5, efficiency: 70, damage: 82, enchantability: 14});
ToolAPI.setTool(ItemID.undergroundsword, "undergroundsword", ToolType.sword);


Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.undergroundsword && Math.random() <= 0.5){ 	
Entity.addEffect(victim, 7, 2, 20, true, true);
Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 10, 100)
}
});


































