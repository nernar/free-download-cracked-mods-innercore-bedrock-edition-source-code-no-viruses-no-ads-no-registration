IDRegistry.genItemID("energy_compensator");
Item.createItem("energy_compensator", "Upgrade: Energy Compensator", {name: "energy_compensator"}, {stack: 1});

ICore.Upgrade.registerUpgrade(ItemID.energy_compensator, function(count, machine, container, data, coords){
if (data.energy_consumption){
data.energy_consumption = data.energy_consumption - 1;
}});

Recipes.addShaped({id: ItemID.energy_compensator, count: 1, data: 0}, [
	" b ",
	"pap",
	"wcw"
], ['a', ItemID.autogenerator, 0, 'p', ItemID.casingTin, 0, 'b', ItemID.storageBattery, 0, 'c', ItemID.circuitBasic, 0, 'w', ItemID.cableGold2, 0]);
