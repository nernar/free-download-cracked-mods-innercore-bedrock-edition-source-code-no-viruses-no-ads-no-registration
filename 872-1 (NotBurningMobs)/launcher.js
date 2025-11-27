ConfigureMultiplayer({
	isClientOnly: true 
});
IMPORT("DependenceHelper");
new Dependence(__name__)
	.addDependence("CoreUtility")
	.setLaunch(function(api){
		Launch(api["CoreUtility"]);
	});