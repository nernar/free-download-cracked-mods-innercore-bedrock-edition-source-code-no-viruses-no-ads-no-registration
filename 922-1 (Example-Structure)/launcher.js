ConfigureMultiplayer({
    isClientOnly: false
});

//Создаём зависимость от Dungeon Utility, через библиотеку DependenceHelper
IMPORT("DependenceHelper");
new Dependence(__name__)
    .addDependence("DungeonUtility", "https://icmods.mineprogramming.org/mod?id=783")
    .setLaunch(function(all_api, api){
        Launch(api);
    });