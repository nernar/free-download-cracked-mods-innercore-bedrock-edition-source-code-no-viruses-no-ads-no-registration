IDRegistry.genBlockID("chicken_roost");
Block.createBlockWithRotation("chicken_roost", [
	{name: "Roost", texture: [["roost_plain", 0], ["roost_plain", 0], ["roost_inside", 0], ["roost_plain", 0], ["roost_plain", 0], ["roost_plain", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterial(BlockID.chicken_roost, "wood");
Recipes2.addShaped("BlockID.chicken_roost", "aaa:aoa:bbb", {a: 5, b: 170});


const ChickenRender = [null, null, null, null];
let RoostWindow;

(function(){

	let i = 0;

	const RoostModel = [
		BlockRenderer.createModel(),
		BlockRenderer.createModel(),
		BlockRenderer.createModel(),
		BlockRenderer.createModel()
	];

	const addBox = function(x1, x2, z1, z2, y1, y2, array){
		const tex = array.map(function(value){
			return ["roost_" + value, 0];
		});
		RoostModel[0].addBox(x1/16, y1/16, z1/16, x2/16, y2/16, z2/16, [tex[0], tex[1], tex[2], tex[3], tex[4], tex[5]]);
		RoostModel[1].addBox(x1/16, y1/16, (16-z2)/16, x2/16, y2/16, (16-z1)/16, [tex[0], tex[1], tex[3], tex[2], tex[4], tex[5]]);
		RoostModel[2].addBox(z1/16, y1/16, x1/16, z2/16, y2/16, x2/16, [tex[0], tex[1], tex[4], tex[5], tex[2], tex[3]]);
		RoostModel[3].addBox((16-z2)/16, y1/16, x1/16, (16-z1)/16, y2/16, x2/16, [tex[0], tex[1], tex[4], tex[5], tex[3], tex[2]]);
	};

	addBox(00,16,	00,16,	00,03,	["plain", "floor", "plain", "curtain", "plain", "plain"]);
	addBox(00,16,	00,16,	13,16,	["plain", "plain", "plain", "curtain", "plain", "plain"]);
	addBox(00,03,	00,16,	03,13,	["plain", "plain", "plain", "curtain", "plain", "inside"]);
	addBox(13,16,	00,16,	03,13,	["plain", "plain", "plain", "curtain", "inside", "plain"]);
	addBox(03,13,	00,03,	03,13,	["plain", "plain", "plain", "inside", "plain", "plain"]);

	const ChickenModel = [
		{//head
			type: "box",
			uv: {x: 0, y: 0},
			coords: {x: 0, y: -1, z: -4.5},
			size: {x: 4, y: 6, z: 3}
		},
		{//nose
			type: "box",
			uv: {x: 14, y: 0},
			coords: {x: 0, y: -1, z: -7},
			size: {x: 4, y: 2, z: 2}
		},
		{//jowl
			type: "box",
			uv: {x: 14, y: 4},
			coords: {x: 0, y: 1, z: -6},
			size: {x: 2, y: 2, z: 2}
		},
		{//body
			type: "box",
			uv: {x: 0, y: 9},
			coords: {x: 0, y: 3, z: 0},
			size: {x: 6, y: 6, z: 8}
		},
		{//wing1
			type: "box",
			uv: {x: 24, y: 13},
			coords: {x: -3.5, y: 2, z: 0},
			size: {x: 1, y: 4, z: 6}
		},
		{//wing2
			type: "box",
			uv: {x: 24, y: 13},
			coords: {x: 3.5, y: 2, z: 0},
			size: {x: 1, y: 4, z: 6}
		}
	];

	const Direction = [0, Math.PI, -Math.PI / 2, Math.PI / 2];
	let render;
	for(i = 4; i--;){
		render = new ICRender.Model();
		render.addEntry(RoostModel[i]);
		BlockRenderer.enableCoordMapping(BlockID.chicken_roost, i, render);
		render = new Render();
		render.getPart("body").addPart("sub");
		render.setPart("sub", ChickenModel, {rotation: {y: Direction[i]}, width: 64, height: 32});
		ChickenRender[i] = render.getID();
	}

	const elements = {
		close: {type: "closeButton", x: 928, y: 0, bitmap: "close_button_up", bitmap2: "close_button_down", scale: 4},
		progress: {type: "scale", x: 278, y: 116, bitmap: "bar_roost_1", scale: 5.5},
		slotChicken: {type: "slot", x: 150, y: 110, size: 100, bitmap: "slot_chicken", isValid: ValidFunc.chicken},
		slot0: {type: "slot", x: 450, y: 110, size: 100, isValid: ValidFunc.result},
		slot1: {type: "slot", x: 550, y: 110, size: 100, isValid: ValidFunc.result},
		slot2: {type: "slot", x: 650, y: 110, size: 100, isValid: ValidFunc.result},
		slot3: {type: "slot", x: 750, y: 110, size: 100, isValid: ValidFunc.result}
	};

	for(i = 9; i <= 44; i++){
		elements["invSlot" + i] = {
			type: "invSlot",
			x: 50 + (i % 9) * 100,
			y: 210 + (i / 9 | 0) * 100,
			size: 100,
			index: i
		};
	}

	RoostWindow = 	new UI.Window({
		location: {x: 200, y: 50, width: 600, height: 450},
		params: {slot: "classic_slot", inv_slot: "classic_slot"},
		drawing: [
			{type: "background", color: android.graphics.Color.TRANSPARENT},
			{type: "frame", x: 0, y: 0, width: 1000, height: 750, bitmap: "classic_frame_bg_light", scale: 6},
			{type: "text", x: 50, y: 60, text: "Roost", font: BlackFont},
			{type: "text", x: 50, y: 300, text: "Inventory", font: BlackFont},
			{type: "bitmap", x: 278, y: 116, bitmap: "bar_roost_0", scale: 5.5}
		],
		elements: elements
	});

	RoostWindow.setInventoryNeeded(true);
	RoostWindow.setBlockingBackground(true);

})();



TileEntity.registerPrototype(BlockID.chicken_roost, {

	anim: null,
	defaultValues: {
		timeElapsed: 0,
		timeUntilNextDrop: 0
	},

	init: function(){
		this.anim = new Animation.Base(this.x + 0.5, this.y - 1, this.z + 0.5);
		this.anim.description.render = ChickenRender[World.getBlock(this.x, this.y, this.z).data];
		delete this.liquidStorage;
	},

	destroy: function(){
		this.anim.destroy();
		this.anim = null;
	},

	getGuiScreen: function(){
		return RoostWindow;
	},

	click: function(id, count, data){
		const chicken = this.container.getSlot("slotChicken");
		if(ChickenRegistry.isChicken(id) && (!chicken.id || chicken.id == id && chicken.count < 16)){
			const add = Math.min(16 - chicken.count, count);
			chicken.id = id;
			chicken.count += add;
			Player.decreaseCarriedItem(add);
			return true;
		}
	},

	tick: function(){

		StorageInterface.checkHoppers(this);
		this.container.setScale("progress", this.data.timeElapsed / this.data.timeUntilNextDrop || 0);

		const chicken = this.container.getSlot("slotChicken");
		const chickenData = ChickenRegistry.getData(chicken.id);
		if(!chickenData){
			this.anim && this.anim.destroy();
			this.data.timeElapsed = this.data.timeUntilNextDrop = 0;
			return;
		}

		const skin = chickenData.getSkin();
		if(this.anim.description.skin != skin){
			this.anim.description.skin = skin;
			this.anim.load();
		}

		this.data.timeUntilNextDrop = this.data.timeUntilNextDrop || chickenData.getLayTime() / SpeedModifier.roost | 0;

		if(this.data.timeUntilNextDrop){
			this.data.timeElapsed += chicken.count;
			if(this.data.timeElapsed >= this.data.timeUntilNextDrop){
				const result = chickenData.getProduct();
				const stack = Item.getMaxStack(result.id);
				let slot;
				for(let i = 0; i < 4; i++){
					slot = this.container.getSlot("slot" + i);
					if(!slot.id || slot.id == result.id && slot.data == result.data && slot.count < stack){
						slot.id = result.id;
						slot.data = result.data || 0;
						slot.count++;
						this.data.timeElapsed = 0;
						this.data.timeUntilNextDrop = chickenData.getLayTime() / SpeedModifier.roost | 0;
						break;
					}
				}
			}
		}

	}

});


StorageInterface.createInterface(BlockID.chicken_roost, {
	slots: {
		slot0: {output: true},
		slot1: {output: true},
		slot2: {output: true},
		slot3: {output: true}
	},
	isValidInput: function(){
		return false;
	}
});