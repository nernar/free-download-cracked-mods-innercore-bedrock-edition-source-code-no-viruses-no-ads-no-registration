importLib("ToolType", "*");
ToolType.araxe = {
		enchantType: Native.EnchantType.axe,
		damage: 2,
		blockTypes: ["wood","fibre"]
}

ToolType.arpick = {
		enchantType: Native.EnchantType.pickaxe,
		damage: 2,
		blockTypes: ["stone","fibre"]
}
//diamondfeatures
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.dDagger){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 25, true, true);
}
});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.dSai){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 25, true, true);
}
});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.dKama){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 1, 25, true, true);
}
});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.dMace){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 5, 30, true, true);
}
});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.dHammer){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 5, 30, true, true);
}
});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.dBattleaxe){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 5, 30, true, true);
}
});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.dGreatsword){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 5, 40, true, true);
}
});
Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.dCleaver){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 5, 30, true, true);
}
});
//idweaponsdiamond
IDRegistry.genItemID("dBattleaxe");
IDRegistry.genItemID("dBroadsword");
IDRegistry.genItemID("dCleaver");
IDRegistry.genItemID("dDagger");
IDRegistry.genItemID("dGreatsword");
IDRegistry.genItemID("dHammer");
IDRegistry.genItemID("dKama");
IDRegistry.genItemID("dKatana");
IDRegistry.genItemID("dLongsword");
IDRegistry.genItemID("dMace");
IDRegistry.genItemID("dMachete");
IDRegistry.genItemID("dRapier");
IDRegistry.genItemID("dSai");
IDRegistry.genItemID("dScimitar");
IDRegistry.genItemID("dScythe");
//diamond
Item.createItem ("dDagger", "Diamond Dagger \n  §6[ Speed +2.5 ]", {name: "diamond_dagger", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("ddagge", {durability: 100, level: 1, efficiency: 2, damage: 5, enchantability: 1});
ToolAPI.setTool(ItemID.dDagger, "ddagge", ToolType.sword);
Item.createItem ("dSai", "Diamond Sai \n  §6[ Speed +2.5 ]", {name: "diamond_sai", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dsa", {durability: 120, level: 1, efficiency: 2, damage: 5, enchantability: 1});
ToolAPI.setTool(ItemID.dSai, "dsa", ToolType.sword);
Item.createItem ("dRapier", "Diamond Rapier", {name: "diamond_rapier", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("drapie", {durability: 200, level: 1, efficiency: 2, damage: 8, enchantability: 1});
ToolAPI.setTool(ItemID.dRapier, "drapie", ToolType.sword);
Item.createItem ("dKatana", "Diamond Katana", {name: "diamond_katana", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dkatan", {durability: 300, level: 1, efficiency: 2, damage: 7.75, enchantability: 1});
ToolAPI.setTool(ItemID.dKatana, "dkatan", ToolType.sword);
Item.createItem ("dLongsword", "Diamond Longsword", {name: "diamond_longsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dlongswor", {durability: 340, level: 1, efficiency: 2, damage: 7.50, enchantability: 1});
ToolAPI.setTool(ItemID.dLongsword, "dlongswor", ToolType.sword);
Item.createItem ("dBroadsword", "Diamond Broadsword", {name: "diamond_broadswourd", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dbroadswor", {durability: 400, level: 1, efficiency: 2, damage: 7, enchantability: 1});
ToolAPI.setTool(ItemID.dBroadsword, "dbroadswor", ToolType.sword);
Item.createItem ("dMachete", "Diamond Machete \n §3[ Chopping +5 ]", {name: "diamond_machete", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dmachet", {durability: 400, level: 3, efficiency: 6, damage: 6.50, enchantability: 1});
ToolAPI.setTool(ItemID.dMachete, "dmachet", ToolType.araxe);
Item.createItem ("dScimitar", "Diamond Scimitar \n §3[ Chopping +4 ]", {name: "diamond_scimitar", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dscimita", {durability: 300, level: 3, efficiency: 5, damage: 7, enchantability: 1});
ToolAPI.setTool(ItemID.dScimitar, "dscimita", ToolType.araxe);
Item.createItem ("dCleaver", "Diamond Cleaver \n §8 [ Daze +4 ]", {name: "diamond_cleaver", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dcleave", {durability: 500, level: 1, efficiency: 2, damage: 7.75, enchantability: 1});
ToolAPI.setTool(ItemID.dCleaver, "dcleave", ToolType.sword);
Item.createItem ("dGreatsword", "Diamond Greatsword \n §0[ Daze +5 ]", {name: "diamond_greatsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dgreatswor", {durability: 600, level: 1, efficiency: 2, damage: 8.50, enchantability: 1});
ToolAPI.setTool(ItemID.dGreatsword, "dgreatswor", ToolType.sword);
Item.createItem ("dBattleaxe", "Diamond Battleaxe \n §8[ Chopping +4, Daze +4 ]", {name: "diamond_battleacks", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dbattleax", {durability: 500, level: 4, efficiency: 5, damage: 6.50, enchantability: 1});
ToolAPI.setTool(ItemID.dBattleaxe, "dbattleax", ToolType.araxe);
Item.createItem ("dHammer", "Diamond Hammer \n §8[ Mining +3, Daze +4 ]", {name: "diamond_hammer", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dhamme", {durability: 500, level: 4, efficiency: 5, damage: 6.50, enchantability: 1});
ToolAPI.setTool(ItemID.dHammer, "dhamme", ToolType.arpick);
Item.createItem ("dMace", "Diamond Mace \n §8[ Daze +4 ]", {name: "diamond_mace", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dmac", {durability: 360, level: 1, efficiency: 2, damage: 8, enchantability: 1});
ToolAPI.setTool(ItemID.dMace, "dmac", ToolType.sword);
Item.createItem ("dKama", "Diamond Kama \n  §6[ Speed +2.5 ]", {name: "diamond_kama", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dkam", {durability: 120, level: 1, efficiency: 2, damage: 5, enchantability: 1});
ToolAPI.setTool(ItemID.dKama, "dkam", ToolType.sword);
Item.createItem ("dScythe", "Diamond Scythe", {name: "diamond_scythe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("dscyth", {durability: 250, level: 1, efficiency: 2, damage: 8, enchantability: 1});
ToolAPI.setTool(ItemID.dScythe, "dscyth", ToolType.sword);
