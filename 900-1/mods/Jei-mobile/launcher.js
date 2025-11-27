ConfigureMultiplayer({isClientOnly: true});
IMPORT("DependenceHelper");
new Dependence(__name__).addDependence("RecipeViewer", "https://icmods.mineprogramming.org/mod?id=455").setLaunch(function (all_api, api) {
    Launch(api);
});

