let ItemType = {
	items: {},
	get(id){
		return this.items[id];
	},
	is(id, type){
		return this.get(id)==type;
	},
	set(id, type){
		if(id)
			this.items[id]=type;
	},
	remove(id){
		delete this.items[id];
	}
};
