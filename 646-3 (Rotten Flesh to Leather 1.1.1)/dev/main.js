if (__config__.getBool("message")) {
    alert("\xabRotten Flesh to Leather\xbb by Maksim Pomazuev");
    Callback.addCallback("LevelLoaded", function () {
        Game.message("\xa74\xabRotten Flesh to Leather\xbb by Maksim Pomazuev");
    });
}
Callback.addCallback("PreLoaded", function () {
    Recipes.addFurnace(367, 0, 334, 0);
});

