/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: items/autogenerator.js

IDRegistry.genItemID("autogenerator");
Item.createItem("autogenerator", "Autogenerator", {name: "autogenerator"}, {stack: 1 });

Recipes.addShaped({id: ItemID.autogenerator, count: 1, data: 0}, [
	"cuc",
	"ygy",
	"cac"
], ['c', ItemID.cableCopper1, 0, 'u', ItemID.upgradeOverclocker, 0, 'y', 263, -1, 'g', BlockID.primalGenerator,  0, 'a', ItemID.circuitAdvanced, 0]);




// file: upgrades/energy_compensator.js

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




