if(__config__.getBool("message")){
alert("«Rotten Flesh to Leather» by Maksim Pomazuev");
Callback.addCallback("LevelLoaded", function(){
Game.message("§4«Rotten Flesh to Leather» by Maksim Pomazuev");
})};

Callback.addCallback("PreLoaded", function(){
Recipes.addFurnace(367, 0, 334, 0);
});