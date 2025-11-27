if(__config__.getBool("message")){
alert("«Experience Bottle» by Maksim Pomazuev");
Callback.addCallback("LevelLoaded", function(){
Game.message("§a«Experience Bottle» by Maksim Pomazuev");
})};

Callback.addCallback("PreLoaded", function(){
Recipes.addFurnace(373, 0, 384, 0);
});