IDRegistry.genBlockID("chicken_collector");
Block.createBlock("chicken_collector", [
	{name: "Chicken Collector", texture: [["roost_plain", 0], ["roost_plain", 0], ["roost_slat", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.chicken_collector, "wood");
Recipes2.addShaped("BlockID.chicken_collector", "aba:aca:ada", {a: 5, b: "ItemID.chicken_vanilla", c: 410, d: 54});


let CollectorWindow;

(function(){

	const elements = {
		close: {
			type: "closeButton",
			x: 928, y: 0,
			bitmap: "close_button_up", bitmap2: "close_button_down",
			scale: 4
		},
		button: {
			type: "button",
			x: 456, y: 391,
			bitmap: "classic_button_up", bitmap2: "classic_slot",
			scale: 5.3,
			clicker: {onClick: function(container, tileEntity){
				let i = j = stack = min = 0;
				let slot, inv;
				for(i = 27; i--;){
					slot = container.getSlot("slot" + i);
					if(!slot.id){
						continue;
					}
					stack = Item.getMaxStack(slot.id);
					for(j = 9; j <= 44; j++){
						inv = Player.getInventorySlot(j);
						if(!inv.id || inv.id == slot.id && inv.data == slot.data && inv.count < stack){
							min = Math.min(slot.count, stack - inv.count);
							slot.count -= min;
							Player.setInventorySlot(j, slot.id, inv.count + min, slot.data);
							if(!slot.count){
								slot.id = slot.data = 0;
								break;
							}
						}
					}
				}
			}}
		},
		overlay: {type: "image", x: 462, y: 400, z: 1, bitmap: "icon_mod_compile", scale: 4.5}
	};

	for(let i = 0; i < 27; i++){
		elements["slot" + i] = {
			type: "slot",
			x: 50 + (i % 9) * 100,
			y: 80 + (i / 9 | 0) * 100,
			size: 100
		};
	}

	CollectorWindow = 	new UI.Window({
		location: {x: 200, y: 50, width: 600, height: 300},
		params: {slot: "classic_slot"},
		drawing: [
			{type: "background", color: android.graphics.Color.TRANSPARENT},
			{type: "frame", x: 0, y: 0, width: 1000, height: 500, bitmap: "classic_frame_bg_light", scale: 6},
			{type: "text", x: 50, y: 60, text: "Chicken Collector", font: BlackFont}
		],
		elements: elements
	});

	CollectorWindow.setBlockingBackground(true);

})();



TileEntity.registerPrototype(BlockID.chicken_collector, {

	getGuiScreen: function(){
		return CollectorWindow;
	},

	tick: function(){

		StorageInterface.checkHoppers(this);

		if(World.getThreadTime() & 63){
			return;
		}
		const This = this;
		const list = TileEntity.tileEntityList.filter(function(That){
			return (That.blockID == BlockID.chicken_roost || That.blockID == BlockID.chicken_breeder) && That.dimension == This.dimension && Math.abs(This.x - That.x) <= 4 && Math.abs(This.z - That.z) <= 4 && Math.abs(This.y - That.y + 1) <= 1;
		});

		for(let i = list.length; i--;){
			if(StorageInterface.extractItemsFromContainer(this, list[i].container, 0, 0, true)){
				break;
			}
		}

	}

});


StorageInterface.createInterface(BlockID.chicken_collector, {
	slots: {
		slot0: {input: true, output: true},
		slot1: {input: true, output: true},
		slot2: {input: true, output: true},
		slot3: {input: true, output: true},
		slot4: {input: true, output: true},
		slot5: {input: true, output: true},
		slot6: {input: true, output: true},
		slot7: {input: true, output: true},
		slot8: {input: true, output: true},
		slot9: {input: true, output: true},
		slot10: {input: true, output: true},
		slot11: {input: true, output: true},
		slot12: {input: true, output: true},
		slot13: {input: true, output: true},
		slot14: {input: true, output: true},
		slot15: {input: true, output: true},
		slot16: {input: true, output: true},
		slot17: {input: true, output: true},
		slot18: {input: true, output: true},
		slot19: {input: true, output: true},
		slot20: {input: true, output: true},
		slot21: {input: true, output: true},
		slot22: {input: true, output: true},
		slot23: {input: true, output: true},
		slot24: {input: true, output: true},
		slot25: {input: true, output: true},
		slot26: {input: true, output: true}
	}
});