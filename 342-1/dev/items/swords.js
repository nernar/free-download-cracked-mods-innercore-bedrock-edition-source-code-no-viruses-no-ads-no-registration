IDRegistry.genItemID("DirtusSword");
Item.createItem("DirtusSword", "§aМеч Диртуса\n§r\n 10 урон", {name: "DirtusSword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("DirtusSword", {durability: 2000, level: 5, efficiency: 70, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.DirtusSword, "DirtusSword", ToolType.sword);


IDRegistry.genItemID("RyusukeSword");
Item.createItem("RyusukeSword", "§aМеч Рйусуке\n§r\n 10 урон", {name: "RyusukeSword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("RyusukeSword", {durability: 2000, level: 5, efficiency: 70, damage: 10, enchantability: 14});
ToolAPI.setTool(ItemID.DirtusSword, "RyusukeSword", ToolType.sword);



Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.RyusukeSword){ 
Entity.setFire(victim, 200);
}
});





IDRegistry.genItemID("icecrystalsword");
Item.createItem("icecrystalsword", "§aМеч из ледяных коисталлов\n§r\n 8 урон", {name: "icecrystalsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("icecrystalsword", {durability: 2000, level: 5, efficiency: 70, damage: 8, enchantability: 14});
ToolAPI.setTool(ItemID.icecrystalsword, "icecrystalsword", ToolType.sword);

Recipes.addShaped({id: ItemID.icecrystalsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.icecrystal, 0, 'b', 280, 0]);

IDRegistry.genItemID("taigacrystalsword");
Item.createItem("taigacrystalsword", "§aМеч из ледяных коисталлов\n§r\n 12 урон\nЗамедляет врагов", {name: "taigacrystalsword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("taigacrystalsword", {durability: 2000, level: 5, efficiency: 70, damage: 13, enchantability: 14});
ToolAPI.setTool(ItemID.taigacrystalsword, "taigacrystalsword", ToolType.sword);

Callback.addCallback("PlayerAttack", function (player, victim) { 
let item = Player.getCarriedItem();
if (item.id == ItemID.taigacrystalsword){ 
Entity.addEffect(Player.get(), Native.PotionEffect.movementSlowdown, 2, 200)
}
});


Recipes.addShaped({id: ItemID.taigacrystalsword, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.forceicecrystal, 0, 'b', 280, 0]);






IDRegistry.genItemID("featherknife");
Item.createItem("featherknife", "§aПерьевой кинжал\n§r\n 20 урон", {name: "featherknife", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("featherknife", {durability: 2000, level: 5, efficiency: 70, damage: 20, enchantability: 14});
ToolAPI.setTool(ItemID.featherknife, "featherknife", ToolType.sword);

Recipes.addShaped({id: ItemID.featherknife, count: 1, data: 0}, [ " a ", " a ", " b "], ['a', ItemID.aeroliteingot, 0, 'b', ItemID.cometstick, 0]);


IDRegistry.genItemID("evilaxe");
Item.createItem("evilaxe", "§aТопор Зла\n§r\n 40 урон\nРазрушение деревьев может призвать кое-что плохое...", {name: "evilaxe", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("evilaxe", {durability: 616, level: 5, efficiency: 70, damage: 40, enchantability: 14});
ToolAPI.setTool(ItemID.evilaxe, "evilaxe", ToolType.sword);

Recipes.addShaped({id: ItemID.evilaxe, count: 1, data: 0}, [ " b ", "bab", " b "], ['a', ItemID.aeroliteaxe, 0, 'b', ItemID.evildust, 0]);








IDRegistry.genItemID("glitchspear");
Item.createItem("glitchspear", "§aКопьё Глюка \n§r25 урона", {name: "glitchspear", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("glitchspear", {durability: 2000, level: 5, efficiency: 70, damage: 25, enchantability: 14});
ToolAPI.setTool(ItemID.glitchspear, "glitchspear", ToolType.sword);


IDRegistry.genItemID("infernality");
Item.createItem("infernality", "§aИнферналити \n§r55 урона\nВо славу Сатане", {name: "infernality", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("infernality", {durability: 2000, level: 5, efficiency: 70, damage: 55, enchantability: 14});
ToolAPI.setTool(ItemID.infernality, "infernality", ToolType.sword);

































