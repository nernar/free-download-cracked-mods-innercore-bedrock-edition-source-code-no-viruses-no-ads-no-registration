ModAPI.registerAPI("TerraCore", {
    ModelRender: ModelRender,
    Options: Options,
    Particle: Particle,
    Random: Random,
    Recipe: Recipe,
    Graphics: Graphics,

	requireGlobal: function(command){
		return eval(command);
	}
});

Logger.Log("AdventureWorld API shared with name TerraCore.", "API");