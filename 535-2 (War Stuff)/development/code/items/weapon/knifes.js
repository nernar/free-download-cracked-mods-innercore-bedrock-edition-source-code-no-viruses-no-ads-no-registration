//Combat Knife
IDRegistry.genItemID("combat_knife");
Item.createItem("combat_knife", "Combat Knife", {name: "Combat_Knife", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("combat_knife", {durability: 1024, level: 1, efficiency: 1, damage: 8, enchantability: 14});
ToolLib.setTool(ItemID.combat_knife, "combat_knife", ToolType.sword);

//Tectical Knife
IDRegistry.genItemID("tactical_knife");
Item.createItem("tactical_knife", "Tactical Knife", {name: "Tactical_Knife", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("tactical_knife", {durability: 1024, level: 1, efficiency: 1, damage: 9, enchantability: 14});
ToolLib.setTool(ItemID.tactical_knife, "tactical_knife", ToolType.sword);

//Army Knife
IDRegistry.genItemID("army_knife");
Item.createItem("army_knife", "Army Knife", {name: "Army_Knife", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("army_knife", {durability: 1024, level: 1, efficiency: 1, damage: 10, enchantability: 14});
ToolLib.setTool(ItemID.army_knife, "army_knife", ToolType.sword);

Item.addCreativeGroup("knifes", Translation.translate("Knifes"), [
	ItemID.combat_knife,
	ItemID.tactical_knife,
	ItemID.army_knife
]);