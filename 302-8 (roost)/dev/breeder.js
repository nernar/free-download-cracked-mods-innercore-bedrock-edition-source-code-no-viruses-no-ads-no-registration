IDRegistry.genBlockID("chicken_breeder");
Block.createBlock("chicken_breeder", [
	{name: "Chicken Breeder", texture: [["roost_plain", 0], ["roost_plain", 0], ["roost_curtain", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.chicken_breeder, "wood");
Recipes2.addShaped("BlockID.chicken_breeder", "aaa:aba:ccc", {a: 5, b: 295, c: 170});


const BreederRender = [];
let BreederWindow;

(function(){

	const model = [];
	let i = 0;

	const box = function(x1, x2, z1, z2, y1, y2, tex, num){
		for(let j = tex.length; j--;){
			tex[j] = ["roost_" + tex[j], 0];
		}
		model[num].addBox(x1/16, y1/16, z1/16, x2/16, y2/16, z2/16, tex);
	};


	for(i = 3; i--;){
		model[i] = BlockRenderer.createModel();
		box(00,16,  00,16,  00,03,  ["plain", "floor", "plain"], i);
		box(00,16,  00,16,  13,16,  ["plain"], i);
		box(00,03,  00,03,  03,13,  ["curtain"], i);
		box(00,03,  13,16,  03,13,  ["curtain"], i);
		box(13,16,  00,03,  03,13,  ["curtain"], i);
		box(13,16,  13,16,  03,13,  ["curtain"], i);
	}

	box(03,13,  03,13,  03,13,  ["empty"], 1);
	box(03,13,  03,13,  03,13,  ["curtain"], 2);


	for(i = 3; i--;){
		BreederRender[i] = new ICRender.Model();
		BreederRender[i].addEntry(model[i]);
	}

	BlockRenderer.enableCoordMapping(BlockID.chicken_breeder, 0, BreederRender[0]);

	const elements = {
		close: {type: "closeButton", x: 928, y: 0, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 4},
		progress: {type: "scale", x: 478, y: 120, bitmap: "bar_breeder_1", scale: 5.5},
		slotSeed: {type: "slot", x: 50, y: 110, size: 100, bitmap: "classic_slot", isValid: ValidFunc.seed},
		slotParent1: {type: "slot", x: 250, y: 110, size: 100, bitmap: "slot_chicken", isValid: ValidFunc.chicken},
		slotParent2: {type: "slot", x: 350, y: 110, size: 100, bitmap: "slot_chicken", isValid: ValidFunc.chicken},
		slot0: {type: "slot", x: 650, y: 110, size: 100, isValid: ValidFunc.result},
		slot1: {type: "slot", x: 750, y: 110, size: 100, isValid: ValidFunc.result},
		slot2: {type: "slot", x: 850, y: 110, size: 100, isValid: ValidFunc.result},
	};

	for(let i = 9; i <= 44; i++){
		elements["invSlot" + i] = {
			type: "invSlot",
			x: 50 + (i % 9) * 100,
			y: 210 + (i / 9 | 0) * 100,
			size: 100,
			index: i
		};
	}

	BreederWindow = 	new UI.Window({
		location: {x: 200, y: 50, width: 600, height: 450},
		params: {slot: "classic_slot", inv_slot: "classic_slot"},
		drawing: [
			{type: "background", color: android.graphics.Color.TRANSPARENT},
			{type: "frame", x: 0, y: 0, width: 1000, height: 750, bitmap: "classic_frame_bg_light", scale: 6},
			{type: "text", x: 50, y: 60, text: "Chicken Breeder", font: BlackFont},
			{type: "text", x: 50, y: 300, text: "Inventory", font: BlackFont},
			{type: "bitmap", x: 172, y: 130, bitmap: "roost_plus", scale: 5.5},
			{type: "bitmap", x: 478, y: 120, bitmap: "bar_breeder_0", scale: 5.5}
		],
		elements: elements
	});

	BreederWindow.setInventoryNeeded(true);
	BreederWindow.setBlockingBackground(true);

})();



TileEntity.registerPrototype(BlockID.chicken_breeder, {

	currentModel: 0,

	defaultValues: {
		timeElapsed: 0,
		timeUntilNextDrop: 0
	},

	getGuiScreen: function(){
		return BreederWindow;
	},

	init: function(){
		delete this.liquidStorage;
	},

	setModel: function(meta){
		if(this.currentModel != meta){
			this.currentModel = meta;
			meta ?
				BlockRenderer.mapAtCoords(this.x, this.y, this.z, BreederRender[meta]) :
				BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		}
	},

	tick: function(){

		StorageInterface.checkHoppers(this);
		this.container.setScale("progress", this.data.timeElapsed / this.data.timeUntilNextDrop || 0);

		const parent1 = this.container.getSlot("slotParent1");
		const parent2 = this.container.getSlot("slotParent2");
		const child = ChickenRegistry.getChildForID(parent1.id, parent2.id);
		if(!child){
			this.data.timeElapsed = this.data.timeUntilNextDrop = 0;
			this.setModel(0);
			return;
		}

		const seed = this.container.getSlot("slotSeed");
		if(!ValidFunc.isSeed[seed.id] || seed.count < 2){
			this.data.timeElapsed = this.data.timeUntilNextDrop = 0;
			this.setModel(1);
			return;
		}

		const parentData1 = ChickenRegistry.getData(parent1.id);
		const parentData2 = ChickenRegistry.getData(parent2.id);
		this.data.timeUntilNextDrop = this.data.timeUntilNextDrop || Math.max(parentData1.getLayTime(), parentData2.getLayTime()) / SpeedModifier.breeder | 0;

		if(this.data.timeUntilNextDrop){
			this.setModel(2);
			this.data.timeElapsed += Math.min(parent1.count, parent2.count);
			if(this.data.timeElapsed >= this.data.timeUntilNextDrop){
				const result = ItemID[ChickenRegistry.getData(child).getRandomChild()];
				let slot;
				for(let i = 0; i < 3; i++){
					slot = this.container.getSlot("slot" + i);
					if(!slot.id || slot.id == result && slot.count < MaxStack){
						slot.id = result;
						slot.count++;
						seed.count -= 2;
						this.container.validateSlot("slotSeed");
						this.data.timeElapsed = 0;
						this.data.timeUntilNextDrop = Math.max(parentData1.getLayTime(), parentData2.getLayTime()) / SpeedModifier.breeder | 0;
						Particles.addParticle(17, this.x - 0.1, this.y + 0.5, this.z + 0.5, 0, 0.2, 0.2);
						Particles.addParticle(17, this.x + 0.5, this.y + 0.5, this.z - 0.1, 0.2, 0.2, 0);
						Particles.addParticle(17, this.x + 1.1, this.y + 0.5, this.z + 0.5, 0, 0.2, 0.2);
						Particles.addParticle(17, this.x + 0.5, this.y + 0.5, this.z + 1.1, 0.2, 0.2, 0);
						break;
					}
				}
			}
		}

	}

});


StorageInterface.createInterface(BlockID.chicken_breeder, {
	slots: {
		slotSeed: {input: true},
		slot0: {output: true},
		slot1: {output: true},
		slot2: {output: true}
	},
	isValidInput: function(item){
		return ValidFunc.isSeed[item.id] || false;
	}
});