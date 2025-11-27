Callback.addCallback("NativeCommand", function (str) { 
if(str=="/kitstart"){ 
	Game.tipMessage("§2§lПолучен стартовый набор!");
Player.addItemToInventory (357, 32, 0);
Player.addItemToInventory (302, 1, 0);
Player.addItemToInventory (303, 1, 0);
Player.addItemToInventory (304, 1, 0);
Player.addItemToInventory (305, 1, 0);
Player.addItemToInventory (272, 1, 0);
Player.addItemToInventory (273, 1, 0);
Player.addItemToInventory (274, 1, 0);
Player.addItemToInventory (275, 1, 0);
Player.addItemToInventory (281, 1, 0);
Player.addItemToInventory (260, 16, 0);
}
});

Callback.addCallback("NativeCommand", function (str) { 
if(str=="/kitbonus"){ 
	Game.tipMessage("§2§lПолучен бонусный набор!");
Player.addItemToInventory (17, 32, 0);
Player.addItemToInventory (265, 16, 0);
Player.addItemToInventory (264, 3, 0);
Player.addItemToInventory (4, 64, 0);
Player.addItemToInventory (297, 8, 0);
}
});

Callback.addCallback("NativeCommand", function (str) { 
if(str=="/kitfastgame"){ 
	Game.tipMessage("§2§lПолучен набор для быстрой игры!");
Player.addItemToInventory (264, 16, 0);
Player.addItemToInventory (276, 1, 0);
Player.addItemToInventory (306, 1, 0);
Player.addItemToInventory (307, 1, 0);
Player.addItemToInventory (308, 1, 0);
Player.addItemToInventory (309, 1, 0);
Player.addItemToInventory (369, 32, 0);
Player.addItemToInventory (278, 1, 0);
Player.addItemToInventory (275, 1, 0);
Player.addItemToInventory (258, 1, 0);
Player.addItemToInventory (256, 16, 0);
}
});

Callback.addCallback("NativeCommand", function (str) { 
if(str=="/kitcoal"){ 
	Game.tipMessage("§2§lПолучено много угля!");
Player.addItemToInventory (263, 64, 0);
Player.addItemToInventory (263, 64, 0);
Player.addItemToInventory (263, 64, 0);
Player.addItemToInventory (263, 64, 0);
Player.addItemToInventory (263, 64, 0);
}
});

