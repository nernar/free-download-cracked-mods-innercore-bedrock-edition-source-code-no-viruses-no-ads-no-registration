FactAPI.disk = {
	itemUID:1,
	itemContainers:{},
	
	isItemDisk: function(id,data){
		return this.itemContainers[id+":"+data]
	},
	createItemDisk:function(id,data){
		if(data!=0)return data;
		data = this.itemUID++;
		this.itemContainers[id+":"+data]=new UI.Container();
		return data
	}
};

Saver.addSavesScope("FactoryCraftSaves",
	function read(scope) {
		FactAPI.disk.itemUID= scope.itemUID || 1;
		FactAPI.disk.itemContainers= scope.itemContainers || {};
	},
	function save() {
		return {
			itemUID:FactAPI.disk.itemUID,
			itemContainers:FactAPI.disk.itemContainers
		}
	}
);