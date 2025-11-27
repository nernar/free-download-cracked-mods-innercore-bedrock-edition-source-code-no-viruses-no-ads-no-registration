if (__config__.getBool("message")) {
    alert("\xabExperience Bottle\xbb by Maksim Pomazuev");
    Callback.addCallback("LevelLoaded", function () {
        Game.message("\xa7a\xabExperience Bottle\xbb by Maksim Pomazuev");
    });
}
Callback.addCallback("PreLoaded", function () {
    Recipes.addFurnace(373, 0, 384, 0);
});

