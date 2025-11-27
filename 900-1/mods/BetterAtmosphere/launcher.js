ConfigureMultiplayer({
	name: "Better Atmosphere",
	version: "1.0.3",
	isClientOnly: false
});

ModAPI.addAPICallback("DungeonUtility", function(api){
    Launch(api);
});