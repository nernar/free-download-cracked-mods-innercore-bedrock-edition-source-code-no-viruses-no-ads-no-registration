ModAPI.registerAPI("DecorItemStorage", {
	regiserStorage: regiserStorage,
	requireGlobal(cmd){
		return eval(cmd);
	}
});