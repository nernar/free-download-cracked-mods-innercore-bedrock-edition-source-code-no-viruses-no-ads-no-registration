ConfigureMultiplayer({
	isClientOnly: false
});
IMPORT("DependenceHelper");
new Dependence(__name__)
	.addDependence("FTBQuests")
	.setLaunch(function(all_api,api) {
		Launch(api);
	});
//Launch()
