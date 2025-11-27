let Pedestal = {
	funcs: {},
	register(id, func, active){
		this.funcs[id] = {tick: func, active: active || function(){}};
	},
	get(id){
		return this.funcs[id];
	}
};
