LIBRARY({
	name: "DecimalLiquid",
	version: 1,
	shared: false,
	api: "CoreEngine"
});


LiquidRegistry.Storage.prototype.addLiquidMilli = function(liquid, amount, onlyFullAmount){
	const limit = this.getLimit(liquid);
	const stored = this.getAmount(liquid);
	const result = stored + amount;
	const left = result - Math.min(limit, result);
	if(!onlyFullAmount || left <= 0){
		this.setAmount(liquid, Math.round((result - left) * 1000) / 1000);
		return Math.max(left, 0);
	}
	return amount;
};

LiquidRegistry.Storage.prototype.getLiquidMilli = function(liquid, amount, onlyFullAmount){
	let stored = this.getAmount(liquid);
	if(!this.getLiquid_flag && this.tileEntity && stored < amount){
		this.getLiquid_flag = true;
		this.tileEntity.requireMoreLiquid(liquid, amount - stored);
		this.getLiquid_flag = false;
		stored = this.getAmount(liquid);
	}
	const got = Math.min(stored, amount);
	if(!onlyFullAmount || got >= amount){
		this.setAmount(liquid, Math.round((stored - got) * 1000) / 1000);
		return got;
	}
	return 0;
};