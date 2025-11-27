/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 3
*/



// file: mods.js

IMPORT("#modpacker");
ModPack.install({
name: "Industrialization World",
mods:
[
//ModBrowser Beta
301,
//Industrial Craft
22,
//Enchanting Plus
381,
//Mod'Drill
205,
//More Furnaces
9,
//Draconic Evolution
119,
//MachinePlus
87,
//MobsCraft
74,
//Flux Network
171,
//RedPower PE
212,
//Upgrade+
244,
//Slopes
329,
//MoreBlock
227,
//Advanced Solar Panels
330,
//Liquid Pipes
219,
//Energy Converter
331,
//Ore Core
324,
//SuperOres
321,
//Air Leave
256,
//API
39,
143
],
});




// file: achievements.js

var AchievementAPI;
ModAPI.addAPICallback("AchievementsAPI", function (api) {
	AchievementAPI = api.AchievementAPI;
	api.AchievementAPI.registerGroup({ 
		unique: "industrializationWorld", 
		name: "Industrialization World", 
		width: 600, 
		height: 250, 
		size: 100, 
		bgTexture: "bg_0", 
		icon: { 
			id: ItemID.indWorld
		} 
	});
});




// file: icons.js

IDRegistry.genItemID("indWorld");
Item.createItem("indWorld", "Icon", {name: "indWorld", meta: 0}, {stack: 1});




