ConfigureMultiplayer({
 name: "Aether", 
 version: "1.0", 
 isClientOnly: false
});


ModAPI.addAPICallback("DungeonUtility", function(api){
    Launch(api);
});
