FactAPI.farm = {
	seeds:{
		392: 142,
		458: 244
	},
	crops:{
		142: [[392, parseInt(1 + Math.random() * 3), 0]],
		244: [[457, 1, 0], [458, parseInt(1 + Math.random() * 3), 0]]
	},
	datas:{
		142:7,
		244:7
	},
	registerPlant:function(seed,crop,drop){
		var blockId = crop.id;
		var endData = crop.maxData;
		this.seeds[seed]=blockId;
		this.crops[blockId]=drop;
		this.datas[blockId]=endData;
	}
};

FactAPI.farm.registerPlant(295,{
	id:59,
	maxData:7
},[
	[296, 1, 0],
	[295, parseInt(1 + Math.random() * 3), 0]
]);

FactAPI.farm.registerPlant(391,{
	id:141,
	maxData:7
},[
	[391, parseInt(1 + Math.random() * 3), 0]
]);
