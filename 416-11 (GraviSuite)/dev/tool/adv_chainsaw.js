IDRegistry.genItemID("advancedChainsaw");
Item.createItem("advancedChainsaw", "Advanced Chainsaw", {name: "advanced_chainsaw"}, {stack: 1, isTech: true});
ChargeItemRegistry.registerItem(ItemID.advancedChainsaw, "Eu", 45000, 2000, 3, "tool", true);
ICore.Integration.addToolBooxValidItem(ItemID.advancedChainsaw);
ICore.ItemName.setRarity(ItemID.advancedChainsaw, 1);
Item.registerNameOverrideFunction(ItemID.advancedChainsaw, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.advancedChainsaw, count: 1, data: Item.getMaxDamage(ItemID.advancedChainsaw)}, [
	" d ",
	"asa",
	"cac"
], ['s', ItemID.chainsaw, -1, 'a', ItemID.upgradeOverclocker, -1, 'c', ItemID.circuitBasic, -1, 'd', 264, 0], ChargeItemRegistry.transferEnergy);

ToolLib.setTool(ItemID.advancedChainsaw, {energyPerUse: 120, level: 4, efficiency: 21.6, damage: 8},  ToolType.chainsaw);