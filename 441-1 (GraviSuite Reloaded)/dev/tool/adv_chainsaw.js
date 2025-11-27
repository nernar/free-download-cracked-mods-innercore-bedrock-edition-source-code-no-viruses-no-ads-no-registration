IDRegistry.genItemID("advancedChainsaw");
Item.createItem("advancedChainsaw", "Advanced Chainsaw", {name: "advanced_chainsaw"}, {stack: 1});
ICore.ChargeRegistry.registerItem(ItemID.advancedChainsaw, "Eu", 45000, 3);

Item.registerNameOverrideFunction(ItemID.advancedChainsaw, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.advancedChainsaw, count: 1, data: Item.getMaxDamage(ItemID.advancedChainsaw)}, [
	" d ",
	"asa",
	"cac"
], ['s', ItemID.chainsaw, -1, 'a', ItemID.upgradeOverclocker, -1, 'c', ItemID.circuitBasic, -1, 'd', 264, 0], ICore.ChargeRegistry.transportEnergy);

ToolAPI.setTool(ItemID.advancedChainsaw, {energyConsumption: 120, level: 4, efficiency: 21.6, damage: 8},  ToolType.chainsaw);