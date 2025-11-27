ModAPI.registerAPI("RuntimeSetting", {
	ConfigStorage: Config,
	BuilderConfig: BuilderConfig,
	Setting: Setting,
	
	requireGlobal(cmd){
		return eval(cmd);
	}
});