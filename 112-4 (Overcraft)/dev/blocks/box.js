IDRegistry.genBlockID("storageBox");
Block.createBlockWithRotation("storageBox", [
	{name: "Box", texture: [["null", 0], ["null", 0], ["null", 0], ["null", 0], ["null", 0], ["null", 0]], inCreative: true}
]);

var guiBox = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Storage Box"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
	],
	
	elements: {
		"Slot": {type: "slot", x: 650, y: 75, size: 100}
	}
});

TileEntity.registerPrototype(BlockID.storageBox, {
	
     click: function(id, count, data, coords){
		var item = Player.getCarriedItem();
		if (item.id > 0){
			item.count--;
		}
     }
});