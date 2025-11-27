FactAPI.Reactor = {
	fuel:{},
	coolant:{},
	registerFuel:function(id,therm,depleted){
		this.fuel[id]={therm: therm,depleted:depleted}
	},
	isFuel:function(id){
		return this.fuel[id]||false;
	},
	
	isCoolant:function(id,therm,val){
		if(val){
			this.coolant[id]=therm
		}
		if(!id||id<1)return false
		return this.coolant[id]||false;
	},
	
	burns:{},
	registerRadFuel:function(id,data,duration){
		this.burns[id+":"+data]=duration;
	},
	getNuclearBurn:function(id,data){
		return this.burns[id+":"+data]||false
	}
}