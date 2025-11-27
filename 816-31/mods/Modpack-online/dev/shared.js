ModAPI.registerAPI("MinecraftOnline", {
	requireGlobal(cmd){
		return eval(cmd);
	}
});