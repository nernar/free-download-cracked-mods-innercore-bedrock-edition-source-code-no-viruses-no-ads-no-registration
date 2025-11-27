importLib("ToolType", "*");

IDRegistry.genItemID("goldtray");
IDRegistry.genItemID("basicpartsharpener");
IDRegistry.genItemID("advancedpartsharpener");
IDRegistry.genItemID("blowtorch");
IDRegistry.genItemID("sandpaper");

IDRegistry.genItemID("molttenstone");
IDRegistry.genItemID("moltteniron");
IDRegistry.genItemID("molttengold");
IDRegistry.genItemID("molttendiamond");
IDRegistry.genItemID("molttenemerald");

IDRegistry.genItemID("coldstone");
IDRegistry.genItemID("coldiron");
IDRegistry.genItemID("coldgold");
IDRegistry.genItemID("colddiamond");
IDRegistry.genItemID("coldemerald");

IDRegistry.genItemID("cleanstone");
IDRegistry.genItemID("cleaniron");
IDRegistry.genItemID("cleangold");
IDRegistry.genItemID("cleandiamond");
IDRegistry.genItemID("cleanemerald");

IDRegistry.genItemID("advancedpartconnector");
IDRegistry.genItemID("basicpartconnector");

IDRegistry.genItemID("goldennugget");
IDRegistry.genItemID("rawgoldennugget");

IDRegistry.genItemID("wBattleaxe");
IDRegistry.genItemID("wDagger");
IDRegistry.genItemID("wHalberd");
IDRegistry.genItemID("wKatana");
IDRegistry.genItemID("wMace");
IDRegistry.genItemID("wRapier");
IDRegistry.genItemID("wScythe");
IDRegistry.genItemID("wSpear");
IDRegistry.genItemID("wBroadsword");
IDRegistry.genItemID("wSpike");
IDRegistry.genItemID("wSharp");
IDRegistry.genItemID("sBattleaxe");
IDRegistry.genItemID("sDagger");
IDRegistry.genItemID("sHalberd");
IDRegistry.genItemID("sKatana");
IDRegistry.genItemID("sMace");
IDRegistry.genItemID("sRapier");
IDRegistry.genItemID("sScythe");
IDRegistry.genItemID("sSpear");
IDRegistry.genItemID("sBroadsword");
IDRegistry.genItemID("sSpike");
IDRegistry.genItemID("sSharp");
IDRegistry.genItemID("iBattleaxe");
IDRegistry.genItemID("iDagger");
IDRegistry.genItemID("iHalberd");
IDRegistry.genItemID("iKatana");
IDRegistry.genItemID("iMace");
IDRegistry.genItemID("iRapier");
IDRegistry.genItemID("iScythe");
IDRegistry.genItemID("iSpear");
IDRegistry.genItemID("iBroadsword");
IDRegistry.genItemID("iSpike");
IDRegistry.genItemID("iSharp");
IDRegistry.genItemID("gBattleaxe");
IDRegistry.genItemID("gDagger");
IDRegistry.genItemID("gHalberd");
IDRegistry.genItemID("gKatana");
IDRegistry.genItemID("gMace");
IDRegistry.genItemID("gRapier");
IDRegistry.genItemID("gScythe");
IDRegistry.genItemID("gSpear");
IDRegistry.genItemID("gBroadsword");
IDRegistry.genItemID("gSpike");
IDRegistry.genItemID("gSharp");
IDRegistry.genItemID("dBattleaxe");
IDRegistry.genItemID("dDagger");
IDRegistry.genItemID("dHalberd");
IDRegistry.genItemID("dKatana");
IDRegistry.genItemID("dMace");
IDRegistry.genItemID("dRapier");
IDRegistry.genItemID("dScythe");
IDRegistry.genItemID("dSpear");
IDRegistry.genItemID("dBroadsword");
IDRegistry.genItemID("dSpike");
IDRegistry.genItemID("dSharp");
IDRegistry.genItemID("eBattleaxe");
IDRegistry.genItemID("eDagger");
IDRegistry.genItemID("eHalberd");
IDRegistry.genItemID("eKatana");
IDRegistry.genItemID("eMace");
IDRegistry.genItemID("eRapier");
IDRegistry.genItemID("eScythe");
IDRegistry.genItemID("eSpear");
IDRegistry.genItemID("eBroadsword");
IDRegistry.genItemID("eSpike");
IDRegistry.genItemID("eSharp");


Item.createItem("advancedpartconnector", "Advanced Part Connector", {name: "AdvancedConnector", meta: 0}, {stack: 64});
Item.createItem("basicpartconnector", "Basic Part Connector", {name: "BasicConnector", meta: 0}, {stack: 64});

Item.createItem ("basicpartsharpener", "Whetstone \n (Flint)", {name: "partsharpener", meta: 0}, {stack: 60});
Item.createItem ("advancedpartsharpener", "Whetstone \n (Iron)", {name: "partsharpener2", meta: 0}, {stack: 60});
Item.createItem ("blowtorch", "Blowtorch", {name: "blowtorch", meta: 0}, {stack: 60});
Item.createItem ("sandpaper", "Sandpaper", {name: "sandpaper", meta: 0}, {stack: 60});
Item.createItem ("goldtray", "Gold Tray", {name: "goldtrayforminer", meta: 0}, {stack: 50});
Item.createItem("rawgoldennugget", "River Golden Nugget", {name: "rawgoldennugget", meta: 0}, {stack: 64});

Item.createItem ("molttenstone", "Molten Stone", {name: "molttenstone", meta: 0}, {stack: 64});
Item.createItem ("moltteniron", "Molten Ingot \n (Iron)", {name: "moltteniron", meta: 0}, {stack: 64});
Item.createItem ("molttengold", "Molten Ingot \n (Gold)", {name: "molttengold", meta: 0}, {stack: 64});
Item.createItem ("molttendiamond", "Molten Gem \n (Diamond)", {name: "molttendiamond", meta: 0}, {stack: 64});
Item.createItem ("molttenemerald", "Molten Gem \n (Emerald)", {name: "molttenemerald", meta: 0}, {stack: 64});

Item.createItem ("coldstone", "Cold  Stone", {name: "coldstone", meta: 0}, {stack: 64});
Item.createItem ("coldiron", "Cold  Ingot \n (Iron)", {name: "coldiron", meta: 0}, {stack: 64});
Item.createItem ("coldgold", "Cold  Ingot \n (Gold)", {name: "coldgold", meta: 0}, {stack: 64});
Item.createItem ("colddiamond", "Cold  Gem \n (Diamond)", {name: "colddiamond", meta: 0}, {stack: 64});
Item.createItem ("coldemerald", "Cold  Gem \n (Emerald)", {name: "coldemerald", meta: 0}, {stack: 64});

Item.createItem ("cleanstone", "Clean  Stone", {name: "cleanstone", meta: 0}, {stack: 64});
Item.createItem ("cleaniron", "Clean  Ingot \n (Iron)", {name: "cleaniron", meta: 0}, {stack: 64});
Item.createItem ("cleangold", "Clean  Ingot \n (Gold)", {name: "cleangold", meta: 0}, {stack: 64});
Item.createItem ("cleandiamond", "Clean  Gem \n (Diamond)", {name: "cleandiamond", meta: 0}, {stack: 64});
Item.createItem ("cleanemerald", "Clean  Gem \n (Emerald)", {name: "cleanemerald", meta: 0}, {stack: 64});



Item.createItem("wBroadsword", "Wooden Broadsword", {name: "WBroadsword", meta: 0}, {stack: 1});
Item.createItem("sBroadsword", "Stone Broadsword", {name: "SBroadsword", meta: 0}, {stack: 1});
Item.createItem("iBroadsword", "Iron Broadsword", {name: "IBroadsword", meta: 0}, {stack: 1});
Item.createItem("gBroadsword", "Golden Broadsword", {name: "GBroadsword", meta: 0}, {stack: 1});
Item.createItem("dBroadsword", "Diamond Broadsword", {name: "DBroadsword", meta: 0}, {stack: 1});
Item.createItem("eBroadsword", "Emerald Broadsword", {name: "EBroadsword", meta: 0}, {stack: 1});

Item.createItem("wKatana", "Wooden Katana", {name: "WKatana", meta: 0}, {stack: 1});
Item.createItem("sKatana", "Stone Katana", {name: "SKatana", meta: 0}, {stack: 1});
Item.createItem("iKatana", "Iron Katana", {name: "IKatana", meta: 0}, {stack: 1});
Item.createItem("gKatana", "Golden Katana", {name: "GKatana", meta: 0}, {stack: 1});
Item.createItem("dKatana", "Diamond Katana", {name: "DKatana", meta: 0}, {stack: 1});
Item.createItem("eKatana", "Emerald Katana", {name: "EKatana", meta: 0}, {stack: 1});

Item.createItem("wDagger", "Wooden Dagger", {name: "WDagger", meta: 0}, {stack: 1});
Item.createItem("sDagger", "Stone Dagger", {name: "SDagger", meta: 0}, {stack: 1});
Item.createItem("iDagger", "Iron Dagger", {name: "IDagger", meta: 0}, {stack: 1});
Item.createItem("gDagger", "Golden Dagger", {name: "GDagger", meta: 0}, {stack: 1});
Item.createItem("dDagger", "Diamond Dagger", {name: "DDagger", meta: 0}, {stack: 1});
Item.createItem("eDagger", "Emerald Dagger", {name: "EDagger", meta: 0}, {stack: 1});

Item.createItem("wRapier", "Wooden Rapier", {name: "WRapier", meta: 0}, {stack: 1});
Item.createItem("sRapier", "Stone Rapier", {name: "SRapier", meta: 0}, {stack: 1});
Item.createItem("iRapier", "Iron Rapier", {name: "IRapier", meta: 0}, {stack: 1});
Item.createItem("gRapier", "Golden Rapier", {name: "GRapier", meta: 0}, {stack: 1});
Item.createItem("dRapier", "Diamond Rapier", {name: "DRapier", meta: 0}, {stack: 1});
Item.createItem("eRapier", "Emerald Rapier", {name: "ERapier", meta: 0}, {stack: 1});

Item.createItem("wScythe", "Wooden Scythe", {name: "WScythe", meta: 0}, {stack: 1});
Item.createItem("sScythe", "Stone Scythe", {name: "SScythe", meta: 0}, {stack: 1});
Item.createItem("iScythe", "Iron Scythe", {name: "IScythe", meta: 0}, {stack: 1});
Item.createItem("gScythe", "Golden Scythe", {name: "GScythe", meta: 0}, {stack: 1});
Item.createItem("dScythe", "Diamond Scythe", {name: "DScythe", meta: 0}, {stack: 1});
Item.createItem("eScythe", "Emerald Scythe", {name: "EScythe", meta: 0}, {stack: 1});

Item.createItem("wBattleaxe", "Wooden Battleaxe", {name: "WBattleaxe", meta: 0}, {stack: 1});
Item.createItem("sBattleaxe", "Stone Battleaxe", {name: "SBattleaxe", meta: 0}, {stack: 1});
Item.createItem("iBattleaxe", "Iron Battleaxe", {name: "IBattleaxe", meta: 0}, {stack: 1});
Item.createItem("gBattleaxe", "Golden Battleaxe", {name: "GBattleaxe", meta: 0}, {stack: 1});
Item.createItem("dBattleaxe", "Diamond Battleaxe", {name: "DBattleaxe", meta: 0}, {stack: 1});
Item.createItem("eBattleaxe", "Emerald Battleaxe", {name: "EBattleaxe", meta: 0}, {stack: 1});

Item.createItem("wHalberd", "Wooden Halberd", {name: "WHalberd", meta: 0}, {stack: 1});
Item.createItem("sHalberd", "Stone Halberd", {name: "SHalberd", meta: 0}, {stack: 1});
Item.createItem("iHalberd", "Iron Halberd", {name: "IHalberd", meta: 0}, {stack: 1});
Item.createItem("gHalberd", "Golden Halberd", {name: "GHalberd", meta: 0}, {stack: 1});
Item.createItem("dHalberd", "Diamond Halberd", {name: "DHalberd", meta: 0}, {stack: 1});
Item.createItem("eHalberd", "Emerald Halberd", {name: "EHalberd", meta: 0}, {stack: 1});

Item.createItem("wMace", "Wooden Mace", {name: "WMace", meta: 0}, {stack: 1});
Item.createItem("sMace", "Stone Mace", {name: "SMace", meta: 0}, {stack: 1});
Item.createItem("iMace", "Iron Mace", {name: "IMace", meta: 0}, {stack: 1});
Item.createItem("gMace", "Golden Mace", {name: "GMace", meta: 0}, {stack: 1});
Item.createItem("dMace", "Diamond Mace", {name: "DMace", meta: 0}, {stack: 1});
Item.createItem("eMace", "Emerald Mace", {name: "EMace", meta: 0}, {stack: 1});

Item.createItem("wSpear", "Wooden Spear", {name: "WSpear", meta: 0}, {stack: 1});
Item.createItem("sSpear", "Stone Spear", {name: "SSpear", meta: 0}, {stack: 1});
Item.createItem("iSpear", "Iron Spear", {name: "ISpear", meta: 0}, {stack: 1});
Item.createItem("gSpear", "Golden Spear", {name: "GSpear", meta: 0}, {stack: 1});
Item.createItem("dSpear", "Diamond Spear", {name: "DSpear", meta: 0}, {stack: 1});
Item.createItem("eSpear", "Emerald Spear", {name: "ESpear", meta: 0}, {stack: 1});



Item.createItem("wSpike", "Wooden Spike", {name: "WSpike", meta: 0}, {stack: 1});
Item.createItem("sSpike", "Stone Spike", {name: "SSpike", meta: 0}, {stack: 1});
Item.createItem("iSpike", "Iron Spike", {name: "ISpike", meta: 0}, {stack: 1});
Item.createItem("gSpike", "Golden Spike", {name: "GSpike", meta: 0}, {stack: 1});
Item.createItem("dSpike", "Diamond Spike", {name: "DSpike", meta: 0}, {stack: 1});
Item.createItem("eSpike", "Emerald Spike", {name: "ESpike", meta: 0}, {stack: 1});

Item.createItem("wSharp", "Sharpened Plank", {name: "WSharp", meta: 0}, {stack: 1});
Item.createItem("sSharp", "Sharpened Stone", {name: "SSharp", meta: 0}, {stack: 1});
Item.createItem("iSharp", "Sharpened Iron Ingot", {name: "ISharp", meta: 0}, {stack: 1});
Item.createItem("gSharp", "Sharpened Golden Ingot", {name: "GSharp", meta: 0}, {stack: 1});
Item.createItem("dSharp", "Sharpened Diamond", {name: "DSharp", meta: 0}, {stack: 1});
Item.createItem("eSharp", "Sharpened Emerald", {name: "ESharp", meta: 0}, {stack: 1});




ToolAPI.addToolMaterial("WBattleax", {durability: 15, level: 20, efficiency: 16, damage: 6, enchantability: 100});
ToolAPI.addToolMaterial("WDager", {durability: 5, level: 20, efficiency: 16, damage: 4, enchantability: 100});
ToolAPI.addToolMaterial("WHalber", {durability: 12, level: 20, efficiency: 16, damage: 5, enchantability: 100});
ToolAPI.addToolMaterial("WKatan", {durability: 10, level: 20, efficiency: 16, damage: 4, enchantability: 100});
ToolAPI.addToolMaterial("WMac", {durability: 25, level: 20, efficiency: 16, damage: 4.5, enchantability: 100});
ToolAPI.addToolMaterial("WRapie", {durability: 8, level: 20, efficiency: 16, damage: 6, enchantability: 100});
ToolAPI.addToolMaterial("WScyth", {durability: 8, level: 20, efficiency: 16, damage: 5.5, enchantability: 100});
ToolAPI.addToolMaterial("WSpea", {durability: 8, level: 20, efficiency: 16, damage: 4.5, enchantability: 100});
ToolAPI.addToolMaterial("WBroadswor", {durability: 10, level: 20, efficiency: 16, damage: 5, enchantability: 100});


ToolAPI.addToolMaterial("SBattleax", {durability: 30, level: 20, efficiency: 16, damage: 7, enchantability: 100});
ToolAPI.addToolMaterial("SDager", {durability: 10, level: 20, efficiency: 16, damage: 4, enchantability: 100});
ToolAPI.addToolMaterial("SHalber", {durability: 24, level: 20, efficiency: 16, damage: 6, enchantability: 100});
ToolAPI.addToolMaterial("SKatan", {durability: 20, level: 20, efficiency: 16, damage: 6, enchantability: 100});
ToolAPI.addToolMaterial("SMac", {durability: 50, level: 20, efficiency: 16, damage: 5.5, enchantability: 100});
ToolAPI.addToolMaterial("SRapie", {durability: 16, level: 20, efficiency: 16, damage: 7.5, enchantability: 100});
ToolAPI.addToolMaterial("SScyth", {durability: 16, level: 20, efficiency: 16, damage: 6.5, enchantability: 100});
ToolAPI.addToolMaterial("SSpea", {durability: 16, level: 20, efficiency: 16, damage: 5.5, enchantability: 100});
ToolAPI.addToolMaterial("SBroadswor", {durability: 20, level: 20, efficiency: 16, damage: 6, enchantability: 100});


ToolAPI.addToolMaterial("IBattleax", {durability: 60, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("IDager", {durability: 20, level: 20, efficiency: 16, damage: 5, enchantability: 100});
ToolAPI.addToolMaterial("IHalber", {durability: 48, level: 20, efficiency: 16, damage: 7, enchantability: 100});
ToolAPI.addToolMaterial("IKatan", {durability: 40, level: 20, efficiency: 16, damage: 7, enchantability: 100});
ToolAPI.addToolMaterial("IMac", {durability: 100, level: 20, efficiency: 16, damage: 7, enchantability: 100});
ToolAPI.addToolMaterial("IRapie", {durability: 32, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("IScyth", {durability: 32, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("ISpea", {durability: 32, level: 20, efficiency: 16, damage: 6.5, enchantability: 100});
ToolAPI.addToolMaterial("IBroadswor", {durability: 40, level: 20, efficiency: 16, damage: 7, enchantability: 100});


ToolAPI.addToolMaterial("GBattleax", {durability: 15, level: 20, efficiency: 16, damage: 7.5, enchantability: 100});
ToolAPI.addToolMaterial("GDager", {durability: 5, level: 20, efficiency: 16, damage: 5, enchantability: 100});
ToolAPI.addToolMaterial("GHalber", {durability: 12, level: 20, efficiency: 16, damage: 7.5, enchantability: 100});
ToolAPI.addToolMaterial("GKatan", {durability: 10, level: 20, efficiency: 16, damage: 6, enchantability: 100});
ToolAPI.addToolMaterial("GMac", {durability: 25, level: 20, efficiency: 16, damage: 6.5, enchantability: 100});
ToolAPI.addToolMaterial("GRapie", {durability: 8, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("GScyth", {durability: 8, level: 20, efficiency: 16, damage: 7.5, enchantability: 100});
ToolAPI.addToolMaterial("GSpea", {durability: 8, level: 20, efficiency: 16, damage: 7.5, enchantability: 100});
ToolAPI.addToolMaterial("GBroadswor", {durability: 10, level: 20, efficiency: 16, damage: 8, enchantability: 100});

ToolAPI.addToolMaterial("DBattleax", {durability: 120, level: 20, efficiency: 16, damage: 9, enchantability: 100});
ToolAPI.addToolMaterial("DDager", {durability: 30, level: 20, efficiency: 16, damage: 6, enchantability: 100});
ToolAPI.addToolMaterial("DHalber", {durability: 96, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("DKatan", {durability: 80, level: 20, efficiency: 16, damage: 8.5, enchantability: 100});
ToolAPI.addToolMaterial("DMac", {durability: 200, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("DRapie", {durability: 64, level: 20, efficiency: 16, damage: 8.5, enchantability: 100});
ToolAPI.addToolMaterial("DScyth", {durability: 64, level: 20, efficiency: 16, damage: 9, enchantability: 100});
ToolAPI.addToolMaterial("DSpea", {durability: 64, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("DBroadswor", {durability: 64, level: 20, efficiency: 16, damage: 8, enchantability: 100});


ToolAPI.addToolMaterial("EBattleax", {durability: 120, level: 20, efficiency: 16, damage: 9, enchantability: 100});
ToolAPI.addToolMaterial("EDager", {durability: 30, level: 20, efficiency: 16, damage: 6, enchantability: 100});
ToolAPI.addToolMaterial("EHalber", {durability: 96, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("EKatan", {durability: 80, level: 20, efficiency: 16, damage: 8.5, enchantability: 100});
ToolAPI.addToolMaterial("EMac", {durability: 200, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("ERapie", {durability: 64, level: 20, efficiency: 16, damage: 8.5, enchantability: 100});
ToolAPI.addToolMaterial("EScyth", {durability: 64, level: 20, efficiency: 16, damage: 9, enchantability: 100});
ToolAPI.addToolMaterial("ESpea", {durability: 64, level: 20, efficiency: 16, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("EBroadswor", {durability: 64, level: 20, efficiency: 16, damage: 8.5, enchantability: 100});


ToolAPI.setTool(ItemID.wBattleaxe, "WBattleax", ToolType.sword);
ToolAPI.setTool(ItemID.wDagger, "WDager", ToolType.sword);
ToolAPI.setTool(ItemID.wHalberd, "WHalber", ToolType.sword);
ToolAPI.setTool(ItemID.wKatana, "WKatan", ToolType.sword);
ToolAPI.setTool(ItemID.wMace, "WMac", ToolType.sword);
ToolAPI.setTool(ItemID.wRapier, "WRapie", ToolType.sword);
ToolAPI.setTool(ItemID.wScythe, "WScyth", ToolType.sword);
ToolAPI.setTool(ItemID.wSpear, "WSpea", ToolType.sword);
ToolAPI.setTool(ItemID.wBroadsword, "WBroadswor", ToolType.sword);

ToolAPI.setTool(ItemID.sBattleaxe, "SBattleax", ToolType.sword);
ToolAPI.setTool(ItemID.sDagger, "SDager", ToolType.sword);
ToolAPI.setTool(ItemID.sHalberd, "SHalber", ToolType.sword);
ToolAPI.setTool(ItemID.sKatana, "SKatan", ToolType.sword);
ToolAPI.setTool(ItemID.sMace, "SMac", ToolType.sword);
ToolAPI.setTool(ItemID.sRapier, "SRapie", ToolType.sword);
ToolAPI.setTool(ItemID.sScythe, "SScyth", ToolType.sword);
ToolAPI.setTool(ItemID.sSpear, "SSpea", ToolType.sword);
ToolAPI.setTool(ItemID.sBroadsword, "SBroadswor", ToolType.sword);

ToolAPI.setTool(ItemID.iBattleaxe, "IBattleax", ToolType.sword);
ToolAPI.setTool(ItemID.iDagger, "IDager", ToolType.sword);
ToolAPI.setTool(ItemID.iHalberd, "IHalber", ToolType.sword);
ToolAPI.setTool(ItemID.iKatana, "IKatan", ToolType.sword);
ToolAPI.setTool(ItemID.iMace, "IMac", ToolType.sword);
ToolAPI.setTool(ItemID.iRapier, "IRapie", ToolType.sword);
ToolAPI.setTool(ItemID.iScythe, "IScyth", ToolType.sword);
ToolAPI.setTool(ItemID.iSpear, "ISpea", ToolType.sword);
ToolAPI.setTool(ItemID.iBroadsword, "IBroadswor", ToolType.sword);

ToolAPI.setTool(ItemID.gBattleaxe, "GBattleax", ToolType.sword);
ToolAPI.setTool(ItemID.gDagger, "GDager", ToolType.sword);
ToolAPI.setTool(ItemID.gHalberd, "GHalber", ToolType.sword);
ToolAPI.setTool(ItemID.gKatana, "GKatan", ToolType.sword);
ToolAPI.setTool(ItemID.gMace, "GMac", ToolType.sword);
ToolAPI.setTool(ItemID.gRapier, "GRapie", ToolType.sword);
ToolAPI.setTool(ItemID.gScythe, "GScyth", ToolType.sword);
ToolAPI.setTool(ItemID.gSpear, "GSpea", ToolType.sword);
ToolAPI.setTool(ItemID.gBroadsword, "GBroadswor", ToolType.sword);

ToolAPI.setTool(ItemID.dBattleaxe, "DBattleax", ToolType.sword);
ToolAPI.setTool(ItemID.dDagger, "DDager", ToolType.sword);
ToolAPI.setTool(ItemID.dHalberd, "DHalber", ToolType.sword);
ToolAPI.setTool(ItemID.dKatana, "DKatan", ToolType.sword);
ToolAPI.setTool(ItemID.dMace, "DMac", ToolType.sword);
ToolAPI.setTool(ItemID.dRapier, "DRapie", ToolType.sword);
ToolAPI.setTool(ItemID.dScythe, "DScyth", ToolType.sword);
ToolAPI.setTool(ItemID.dSpear, "DSpea", ToolType.sword);
ToolAPI.setTool(ItemID.dBroadsword, "DBroadswor", ToolType.sword);

ToolAPI.setTool(ItemID.eBattleaxe, "EBattleax", ToolType.sword);
ToolAPI.setTool(ItemID.eDagger, "EDager", ToolType.sword);
ToolAPI.setTool(ItemID.eHalberd, "EHalber", ToolType.sword);
ToolAPI.setTool(ItemID.eKatana, "EKatan", ToolType.sword);
ToolAPI.setTool(ItemID.eMace, "EMac", ToolType.sword);
ToolAPI.setTool(ItemID.eRapier, "ERapie", ToolType.sword);
ToolAPI.setTool(ItemID.eScythe, "EScyth", ToolType.sword);
ToolAPI.setTool(ItemID.eSpear, "ESpea", ToolType.sword);
ToolAPI.setTool(ItemID.eBroadsword, "EBroadswor", ToolType.sword);


Recipes.addShaped({id: ItemID.advancedpartsharpener, count: 10, data: 0}, 
["aaa"],
["a", 265, 0]);

Recipes.addShaped({id: ItemID.basicpartsharpener, count: 10, data: 0}, 
["aaa"],
["a", 318, 0]);

Recipes.addShaped({id: ItemID.basicpartconnector, count: 25, data: 0}, 
["bb ", 
 "ab "],
["a", 5, 0, "b", 287, 0]);

Recipes.addShaped({id: ItemID.advancedpartconnector, count: 25, data: 0}, 
["bb ", 
 "ab "],
["a", 265, 0, "b", 287, 0]);

Recipes.addShaped({id: ItemID.goldtray, count: 25, data: 0}, 
["a a", 
 " ab"],
["a", 265, 0, "b", ItemID.blowtorch, 0]);

Recipes.addShaped({id: ItemID.blowtorch, count: 10, data: 0}, 
["ab ", 
 "a  "],
["a", 265, 0, "b", 259, 0]);

Recipes.addShaped({id: ItemID.sandpaper, count: 5, data: 0}, 
["b  ", 
 "a  "],
["a", 339, 0, "b", 12, 0]);

Recipes.addShaped({id: ItemID.coldstone, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.molttenstone, 0, "b", 3, 0]);

Recipes.addShaped({id: ItemID.cleanstone, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.coldstone, 0, "b", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.coldiron, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.moltteniron, 0, "b", 3, 0]);

Recipes.addShaped({id: ItemID.cleaniron, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.coldiron, 0, "b", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.coldgold, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.molttengold, 0, "b", 3, 0]);

Recipes.addShaped({id: ItemID.cleangold, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.coldgold, 0, "b", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.colddiamond, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.molttendiamond, 0, "b", 3, 0]);

Recipes.addShaped({id: ItemID.cleandiamond, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.colddiamond, 0, "b", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.coldemerald, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.molttenemerald, 0, "b", 3, 0]);

Recipes.addShaped({id: ItemID.cleanemerald, count: 1, data: 0}, 
["b  ", 
 "a  "],
["a", ItemID.coldemerald, 0, "b", ItemID.sandpaper, 0]);



Recipes.addShaped({id: ItemID.wSharp, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", 5, 0, "b", ItemID.basicpartsharpener, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.sSharp, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleanstone, 0, "b", ItemID.advancedpartsharpener, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.iSharp, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleaniron, 0, "b", ItemID.advancedpartsharpener, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.gSharp, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleangold, 0, "b", ItemID.advancedpartsharpener, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.dSharp, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleandiamond, 0, "b", ItemID.advancedpartsharpener, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.eSharp, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleanemerald, 0, "b", ItemID.advancedpartsharpener, 0, "c", ItemID.sandpaper, 0]);


Recipes.addShaped({id: ItemID.wSpike, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", 5, 0, "b", ItemID.basicpartsharpener, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.sSpike, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleanstone, 0, "b", ItemID.blowtorch, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.iSpike, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleaniron, 0, "b", ItemID.blowtorch, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.gSpike, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleangold, 0, "b", ItemID.blowtorch, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.dSpike, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleandiamond, 0, "b", ItemID.blowtorch, 0, "c", ItemID.sandpaper, 0]);

Recipes.addShaped({id: ItemID.dSpike, count: 1, data: 0}, 
[" a ", 
 " bc"],
["a", ItemID.cleanemerald, 0, "b", ItemID.blowtorch, 0, "c", ItemID.sandpaper, 0]);


Recipes.addShaped({id: ItemID.wBattleaxe, count: 1, data: 0}, 
["aba", 
 "aca",
 " c "
],
["a", ItemID.wSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);


Recipes.addShaped({id: ItemID.wDagger, count: 1, data: 0}, 
[" a ", 
 " b",
 " c "
],
["a", ItemID.wSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.wHalberd, count: 1, data: 0}, 
[" d ", 
 "ab ",
 " c "
],
["a", ItemID.wSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0, "d", ItemID.wSpike, 0]);

Recipes.addShaped({id: ItemID.wKatana, count: 1, data: 0}, 
["  a", 
 "ba",
 "c  "
],
["a", ItemID.wSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.wMace, count: 1, data: 0}, 
["aba", 
 "ada",
 " c "
],
["a", ItemID.wSpike, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0, "d", 5, 0]);

Recipes.addShaped({id: ItemID.wRapier, count: 1, data: 0}, 
["a  ", 
 "ac ",
 "bc "
],
["a", ItemID.wSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.wScythe, count: 1, data: 0}, 
["aaa", 
 "abc",
 "  c"
],
["a", ItemID.wSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.wSpear, count: 1, data: 0}, 
["  a", 
 "bc ",
 "c  "
],
["a", ItemID.wSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.wBroadsword, count: 1, data: 0}, 
[" a ", 
 "cac",
 "bc "
],
["a", ItemID.wSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);



Recipes.addShaped({id: ItemID.sBattleaxe, count: 1, data: 0}, 
["aba", 
 "aca",
 " c "
],
["a", ItemID.sSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);


Recipes.addShaped({id: ItemID.sDagger, count: 1, data: 0}, 
[" a ", 
 " b",
 " c "
],
["a", ItemID.sSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.sHalberd, count: 1, data: 0}, 
[" d ", 
 "ab ",
 " c "
],
["a", ItemID.sSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0, "d", ItemID.sSpike, 0]);

Recipes.addShaped({id: ItemID.sKatana, count: 1, data: 0}, 
["  a", 
 "ba",
 "c  "
],
["a", ItemID.sSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.sMace, count: 1, data: 0}, 
["aba", 
 "ada",
 " c "
],
["a", ItemID.sSpike, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0, "d", 4, 0]);

Recipes.addShaped({id: ItemID.sRapier, count: 1, data: 0}, 
["a  ", 
 "ac ",
 "bc "
],
["a", ItemID.sSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.sScythe, count: 1, data: 0}, 
["aaa", 
 "abc",
 "  c"
],
["a", ItemID.sSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.sSpear, count: 1, data: 0}, 
["  a", 
 "bc ",
 "c  "
],
["a", ItemID.sSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);


Recipes.addShaped({id: ItemID.sBroadsword, count: 1, data: 0}, 
[" a ", 
 "cac",
 "bc "
],
["a", ItemID.sSharp, 0, "b", ItemID.basicpartconnector, 0, "c", 280, 0]);



Recipes.addShaped({id: ItemID.iBattleaxe, count: 1, data: 0}, 
["aba", 
 "aca",
 " c "
],
["a", ItemID.iSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);


Recipes.addShaped({id: ItemID.iDagger, count: 1, data: 0}, 
[" a ", 
 " b",
 " c "
],
["a", ItemID.iSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.iHalberd, count: 1, data: 0}, 
[" d ", 
 "ab ",
 " c "
],
["a", ItemID.iSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0, "d", ItemID.iSpike, 0]);

Recipes.addShaped({id: ItemID.iKatana, count: 1, data: 0}, 
["  a", 
 "ba",
 "c  "
],
["a", ItemID.iSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.iMace, count: 1, data: 0}, 
["aba", 
 "ada",
 " c "
],
["a", ItemID.iSpike, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0, "d", ItemID.cleaniron, 0]);

Recipes.addShaped({id: ItemID.iRapier, count: 1, data: 0}, 
["ac ", 
 "ac ",
 "bc "
],
["a", ItemID.iSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.iScythe, count: 1, data: 0}, 
["aaa", 
 "abc",
 "  c"
],
["a", ItemID.iSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.iSpear, count: 1, data: 0}, 
["  a", 
 "bc ",
 "c  "
],
["a", ItemID.iSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);


Recipes.addShaped({id: ItemID.iBroadsword, count: 1, data: 0}, 
[" a ", 
 "cac",
 "bc "
],
["a", ItemID.iSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);



Recipes.addShaped({id: ItemID.gBattleaxe, count: 1, data: 0}, 
["aba", 
 "aca",
 " c "
],
["a", ItemID.gSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);


Recipes.addShaped({id: ItemID.gDagger, count: 1, data: 0}, 
[" a ", 
 " b",
 " c "
],
["a", ItemID.gSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.gHalberd, count: 1, data: 0}, 
[" d ", 
 "ab ",
 " c "
],
["a", ItemID.gSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0, "d", ItemID.gSpike, 0]);

Recipes.addShaped({id: ItemID.gKatana, count: 1, data: 0}, 
["  a", 
 "ba",
 "c  "
],
["a", ItemID.gSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.gMace, count: 1, data: 0}, 
["aba", 
 "ada",
 " c "
],
["a", ItemID.gSpike, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0, "d", ItemID.cleangold, 0]);

Recipes.addShaped({id: ItemID.gRapier, count: 1, data: 0}, 
["a  ", 
 "ac ",
 "bc "
],
["a", ItemID.gSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.gScythe, count: 1, data: 0}, 
["aaa", 
 "abc",
 "  c"
],
["a", ItemID.gSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.gSpear, count: 1, data: 0}, 
["  a", 
 "bc ",
 "c  "
],
["a", ItemID.gSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);


Recipes.addShaped({id: ItemID.gBroadsword, count: 1, data: 0}, 
[" a ", 
 "cac",
 "bc "
],
["a", ItemID.gSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);



Recipes.addShaped({id: ItemID.dBattleaxe, count: 1, data: 0}, 
["aba", 
 "aca",
 " c "
],
["a", ItemID.dSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.dDagger, count: 1, data: 0}, 
[" a ", 
 " b",
 " c "
],
["a", ItemID.dSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.dHalberd, count: 1, data: 0}, 
[" d ", 
 "ab ",
 " c "
],
["a", ItemID.dSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0, "d", ItemID.dSpike, 0]);

Recipes.addShaped({id: ItemID.dKatana, count: 1, data: 0}, 
["  a", 
 "ba",
 "c  "
],
["a", ItemID.dSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.dMace, count: 1, data: 0}, 
["aba", 
 "ada",
 " c "
],
["a", ItemID.dSpike, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0, "d", ItemID.cleandiamond, 0]);

Recipes.addShaped({id: ItemID.dRapier, count: 1, data: 0}, 
["a  ", 
 "ac ",
 "bc "
],
["a", ItemID.dSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.dScythe, count: 1, data: 0}, 
["aaa", 
 "abc",
 "  c"
],
["a", ItemID.dSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.dSpear, count: 1, data: 0}, 
["  a", 
 "bc ",
 "c  "
],
["a", ItemID.dSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);


Recipes.addShaped({id: ItemID.dBroadsword, count: 1, data: 0}, 
[" a ", 
 "cac",
 "bc "
],
["a", ItemID.dSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);



Recipes.addShaped({id: ItemID.eBattleaxe, count: 1, data: 0}, 
["aba", 
 "aca",
 " c "
],
["a", ItemID.eSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.eDagger, count: 1, data: 0}, 
[" a ", 
 " b",
 " c "
],
["a", ItemID.eSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.eHalberd, count: 1, data: 0}, 
[" d ", 
 "ab ",
 " c "
],
["a", ItemID.eSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0, "d", ItemID.eSpike, 0]);

Recipes.addShaped({id: ItemID.eKatana, count: 1, data: 0}, 
["  a", 
 "ba",
 "c  "
],
["a", ItemID.eSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.eMace, count: 1, data: 0}, 
["aba", 
 "ada",
 " c "
],
["a", ItemID.eSpike, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0, "d", ItemID.cleanemerald, 0]);

Recipes.addShaped({id: ItemID.eRapier, count: 1, data: 0}, 
["a ", 
 "ac",
 "bc "
],
["a", ItemID.eSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.eScythe, count: 1, data: 0}, 
["aaa", 
 "abc",
 "  c"
],
["a", ItemID.eSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);

Recipes.addShaped({id: ItemID.eSpear, count: 1, data: 0}, 
["  a", 
 "bc ",
 "c  "
],
["a", ItemID.eSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);


Recipes.addShaped({id: ItemID.eBroadsword, count: 1, data: 0}, 
[" a ", 
 "cac",
 "bc "
],
["a", ItemID.eSharp, 0, "b", ItemID.advancedpartconnector, 0, "c", 280, 0]);



Recipes.addFurnace(ItemID.rawgoldennugget, 266);
Recipes.addFurnace(1, ItemID.molttenstone);
Recipes.addFurnace(265, ItemID.moltteniron);
Recipes.addFurnace(266, ItemID.molttengold);
Recipes.addFurnace(264, ItemID.molttendiamond);
Recipes.addFurnace(388, ItemID.molttenemerald);

Recipes.deleteRecipe({id: 267, count: 1, data: 0});
Recipes.deleteRecipe({id: 268, count: 1, data: 0});
Recipes.deleteRecipe({id: 272, count: 1, data: 0});
Recipes.deleteRecipe({id: 276, count: 1, data: 0});
Recipes.deleteRecipe({id: 283, count: 1, data: 0});

Item.registerUseFunction(ItemID.goldtray, function(crd,i,block){
let c = crd.relative;
  if(block.id==3||block.id==82){
    if(Math.random()<=0.10){
      Player.decreaseCarriedItem();
      World.drop(c.x,c.y,c.z,ItemID.rawgoldennugget,3,0);
    }
  }
});