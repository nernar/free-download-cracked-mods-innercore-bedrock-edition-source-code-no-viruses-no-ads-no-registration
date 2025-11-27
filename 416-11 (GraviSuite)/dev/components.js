IDRegistry.genItemID("superconductorCover");
IDRegistry.genItemID("superconductor");
Item.createItem("superconductorCover", "Superconductor Cover", {name: "superconductor_cover"});
Item.createItem("superconductor", "Superconductor", {name: "superconductor"});

IDRegistry.genItemID("engineBoost");
Item.createItem("engineBoost", "Engine Booster", {name: "engine_boost"});

IDRegistry.genItemID("coolingCore");
Item.createItem("coolingCore", "Cooling Core", {name: "cooling_core"});

IDRegistry.genItemID("graviEngine");
Item.createItem("graviEngine", "Gravitation Engine", {name: "gravi_engine"});

Recipes.addShaped({id: ItemID.superconductorCover, count: 3, data: 0}, [
	"aba",
	"ccc",
	"aba"
], ['a', ItemID.plateAlloy, 0, 'b', ItemID.plateReinforcedIridium, 0, 'c', ItemID.carbonPlate, 0]);

Recipes.addShaped({id: ItemID.superconductor, count: 3, data: 0}, [
	"ccc",
	"oao",
	"ccc"
], ['a', 266, 0, 'c', ItemID.superconductorCover, 0, 'o', ItemID.cableOptic, 0]);

Recipes.addShaped({id: ItemID.coolingCore, count: 1, data: 0}, [
	"chc",
	"pbp",
	"chc"
], ['b', ItemID.plateReinforcedIridium, 0, 'c', ItemID.coolantCell6, 1, 'h', ItemID.heatExchangerAdv, 1, 'p', ItemID.reactorPlatingHeat, 0]);

Recipes.addShaped({id: ItemID.graviEngine, count: 1, data: 0}, [
	"csc",
	"xax",
	"csc"
], ['x', ItemID.coolingCore, 0, 's', ItemID.superconductor, 0, 'a', BlockID.transformerHV, 0, 'c', BlockID.teslaCoil, 0]);

Recipes.addShaped({id: ItemID.engineBoost, count: 1, data: 0}, [
	"gag",
	"cbc",
	"aha"
], ['a', ItemID.plateAlloy, 0, 'b', ItemID.upgradeOverclocker, 0, 'c', ItemID.circuitBasic, 0, 'h', ItemID.heatVentAdv, 1, 'g', 348, 0]);
