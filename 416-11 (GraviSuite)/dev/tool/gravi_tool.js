IDRegistry.genItemID("graviTool0");
IDRegistry.genItemID("graviTool1");
IDRegistry.genItemID("graviTool2");
Item.createItem("graviTool0", "GraviTool", {name: "gravi_tool", meta: 0}, {stack: 1, isTech: true});
Item.createItem("graviTool1", "GraviTool", {name: "gravi_tool", meta: 1}, {stack: 1, isTech: true});
Item.createItem("graviTool2", "GraviTool", {name: "gravi_tool", meta: 2}, {stack: 1, isTech: true});
ChargeItemRegistry.registerItem(ItemID.graviTool0, "Eu", 300000, 2000, 3, "tool", true);
ChargeItemRegistry.registerItem(ItemID.graviTool1, "Eu", 300000, 2000, 3, "tool");
ChargeItemRegistry.registerItem(ItemID.graviTool2, "Eu", 300000, 2000, 3, "tool");
ICore.Integration.addToolBooxValidItem(ItemID.graviTool0);
ICore.Integration.addToolBooxValidItem(ItemID.graviTool1);
ICore.ItemName.setRarity(ItemID.graviTool0, 1);
ICore.ItemName.setRarity(ItemID.graviTool1, 1);
ICore.ItemName.setRarity(ItemID.graviTool2, 1);
Item.registerNameOverrideFunction(ItemID.graviTool0, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.graviTool1, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.graviTool2, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.graviTool0, count: 1, data: Item.getMaxDamage(ItemID.graviTool0)}, [
	"aha",
	"beb",
	"wct"
], ['e', ItemID.storageCrystal, -1, 'h', ItemID.electricHoe, -1, 't', ItemID.electricTreetap, -1, 'w', ItemID.electricWrench, -1, 'a', ItemID.carbonPlate, 0, 'b', ItemID.plateAlloy, 0, 'c', ItemID.circuitAdvanced, 0], ChargeItemRegistry.transferEnergy);


ICore.UI.setToolButton(ItemID.graviTool0, "button_switch", true);
ICore.UI.setToolButton(ItemID.graviTool1, "button_switch", true);
ICore.UI.setToolButton(ItemID.graviTool2, "button_switch", true);

ICore.UI.registerSwitchFunction(ItemID.graviTool0, function(item){
	Game.message("§6" + Translation.translate("Treetap activated"));
	Player.setCarriedItem(ItemID.graviTool1, 1, item.data);
});

ICore.UI.registerSwitchFunction(ItemID.graviTool1, function(item){
	Game.message("§b" + Translation.translate("Wrench activated"));
	Player.setCarriedItem(ItemID.graviTool2, 1, item.data);
});

ICore.UI.registerSwitchFunction(ItemID.graviTool2, function(item){
	Game.message("§2" +  Translation.translate("Hoe activated"));
	Player.setCarriedItem(ItemID.graviTool0, 1, item.data);
});

ICore.Tool.registerElectricHoe("graviTool0");
ICore.Tool.registerElectricTreerap("graviTool1");
ICore.Tool.registerWrench(ItemID.graviTool2, 1, 50);
