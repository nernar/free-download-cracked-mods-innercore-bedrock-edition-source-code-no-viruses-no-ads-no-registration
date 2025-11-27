IDRegistry.genBlockID("smeltery_controller");
Block.createBlock("smeltery_controller", [
	{name: "Smeltery Controller", texture: [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller", 0], ["seared_brick", 0], ["seared_brick", 0]], inCreative: true}
]);
TileRenderer.setStandartModel(BlockID.smeltery_controller, [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller", 0], ["seared_brick", 0], ["seared_brick", 0]]);
TileRenderer.registerRotationModel(BlockID.smeltery_controller, 0, [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller", 0], ["seared_brick", 0], ["seared_brick", 0]]);
TileRenderer.registerRotationModel(BlockID.smeltery_controller, 4, [["seared_brick", 0], ["seared_brick", 0], ["seared_brick", 0], ["smeltery_controller", 1], ["seared_brick", 0], ["seared_brick", 0]]);

Recipes.addShaped({id: BlockID.smeltery_controller}, ["aaa", "aoa", "aaa"], ["a", ItemID.seared_brick, 0]);
ToolAPI.registerBlockMaterial(BlockID.smeltery_controller, "stone", 1);
Block.setDestroyTime(BlockID.smeltery_controller, 5);
TileRenderer.setRotationPlaceFunction(BlockID.smeltery_controller);


Elements.smeltery_side = {};

(function(){
	const func = function(i){
		return function(container, tileEntity){
			const slot = container.getSlot("slot" + i);
			if(slot.id){
				Player.addItemToInventory(slot.id, 1, slot.data);
				slot.id = slot.count = slot.data = 0;
				delete tileEntity.data.progress[i];
			}
		}
	};
	let x = y = 0;
	for(let i = 0; i < 512; i++){
		x = (i & 3) * 240;
		y = (i / 4 | 0) * 180;
		Elements.smeltery_side["slot" + i] = {type: "slot", x: x, y: y, size: 180, visual: true, clicker: {onClick: func(i)}};
		Elements.smeltery_side["back" + i] = {type: "image", x: x + 180, y: y, bitmap: "smeltery_heat_bar_0", scale: 10};
		Elements.smeltery_side["scale" + i] = {type: "scale", x: x + 192, y: y + 12, z: 1, bitmap: "smeltery_heat_bar_1", direction: 1, scale: 10};
	}
})();

Window.smeltery_side = new UI.Window({
	location: {x: 350, y: 100, width: 320, scrollY: 2000},
	drawing: [{type: "background", color: ag.Color.TRANSPARENT}],
	elements: Elements.smeltery_side
});


Elements.smeltery_controller = {
	scaleLava: {type: "scale", x: 924, y: 64, bitmap: "smeltery_lava_bar_1", direction: 1, scale: 4},
	textLava: {type: "text", x: 700, y: 30},
	textInfo1: {type: "text", x: 770, y: 350},
	textInfo2: {type: "text", x: 770, y: 380},
	line: {type: "image", x: 704, y: 64, z: 1, bitmap: "smeltery_line", scale: 4},
	slotInput: {type: "slot", x: 700, y: 350, bitmap: "tc_slot_input", isValid: function(id, count, data){
		return !!Material.getMeltingRecipe(id, data);
	}},
	buttonSelect: {type: "button", x: 850, y: 280, bitmap: "default_button_up", bitmap2: "default_button_down", scale: 4, clicker: {
		onClick: function(container, tileEntity){
			tileEntity.data.select++;
			tileEntity.data.select %= Object.keys(tileEntity.liquidStorage.liquidAmounts).length;
			tileEntity.updateAnim();
		}
	}},
	icon: {type: "image", x: 856, y: 286, z: 1, bitmap: "mod_browser_update_icon", scale: 3.2},
	buttonDump: {type: "button", x: 700, y: 280, bitmap: "_craft_button_up", bitmap2: "_craft_button_down", scale: 1.6, clicker: {
		onClick: function(container, tileEntity){
			const liquidAmount = tileEntity.liquidStorage.liquidAmounts;
			delete liquidAmount[Object.keys(liquidAmount)[tileEntity.data.select]];
		}
	}},
	textDump: {type: "text", x: 710, y: 283, z: 1, text: "Dump"}
};

Window.smeltery_controller = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Smeltery"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 700, y: 60, bitmap: "smeltery_metal_bar_0", scale: 4},
		{type: "bitmap", x: 920, y: 60, bitmap: "smeltery_lava_bar_0", scale: 4},
	],
	elements: Elements.smeltery_controller
});

Window.smeltery_controller.addWindowInstance("side_slot", Window.smeltery_side);


const SEARED_BRICK = {};
SEARED_BRICK[BlockID.seared_brick] = true;
SEARED_BRICK[BlockID.smeltery_controller] = true;
SEARED_BRICK[BlockID.seared_tank] = true;
SEARED_BRICK[BlockID.seared_drain] = true;

const AirLength = function(coords, x, y, z){
	let block = 0;
	for(let i = 0; i < 8; i++){
		block = World.getBlockID(coords.x + i * x, coords.y + i * y, coords.z + i * z);
		if(SEARED_BRICK[block]){
			return i;
		}
		if(block){
			return 0;
		}
	}
	return 0;
};


TileEntity.registerPrototype(BlockID.smeltery_controller, {
	anim: null,
	area: null,
	lavaTank: [],
	defaultValues: {
		isActive: false,
		progress: {},
		select: 0,
	},
	updateAnim: function(){
		if(!this.area){
			return;
		}
		const render = new Render();
		const part = [];
		const liquidAmount = this.liquidStorage.liquidAmounts;
		const order = Object.keys(liquidAmount);
		const limit = this.liquidStorage.getLimit();
		let i = 0;
		for(i = this.data.select; i--;){
			order.push(order.shift());
		}
		const sizeX = this.area.x2 - this.area.x1 - 1;
		const sizeZ = this.area.z2 - this.area.z1 - 1;
		let height = mag = y = 0;
		for(i = 0; i < order.length; i++){
			height = liquidAmount[order[i]] / limit * (this.area.y2 - this.area.y1);
			mag = Math.max(sizeX, sizeZ, height);
			part.push({
				type: "box",
				uv: {x: 0, y: Tinco.getLiquidY(order[i]) * mag},
				coords: {x: 0, y: y - height * 16 / 2, z: 0},
				size: {x: sizeX * 16, y: height * 16, z: sizeZ * 16}
			});
			y -= height * 16;
		}
		render.setPart("body", part, {width: 64 * mag, height: 448 * mag});
		this.anim.setPos(
			(this.area.x1 + this.area.x2) / 2 + 0.5,
			(this.area.y1 + this.area.y2) / 2 - 1 - (this.area.y2 - this.area.y1 - 1) * 0.5,
			(this.area.z1 + this.area.z2) / 2 + 0.5
		);
		this.anim.describe({skin: "model/liquid.png", render: render.getID()});
		this.anim.load();
	},
	init: function(){
		this.anim = new Animation.Base(this.x, this.y, this.z);
		this.refreshSmeltery();
		this.updateAnim();
		TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta + (this.data.isActive ? 4 : 0));
	},

	getLavaAmount: function(){
		let amount = 0;
		for(let i = this.lavaTank.length; i--;){
			amount += this.lavaTank[i].getAmount("lava");
		}
		return amount;
	},

	refreshSmeltery: function(){
		this.area = this.getArea();
		this.area ? this.activate() : this.deactivate();
		const capacity = this.getCapacity();
		const lavaAmount = this.getLavaAmount();
		const lavaLimit = this.lavaTank.length * 4;
		let key = "";
		let i = 0;
		for(key in this.container.slots){
			if(key == "slotInput"){
				continue;
			}
			i = key.slice(4) - 0;
			if(i >= capacity){
				delete this.container.slots[key];
				continue;
			}
			if(!(i in this.data.progress) && this.container.getSlot(key).id){
				this.data.progress[i] = 0;
			}
		}
		this.liquidStorage.setLimit(null, Math.round(capacity * 1.44 * 1000) / 1000);
		this.container.setScale("scaleLava", lavaLimit ? lavaAmount / lavaLimit : 0);
		this.container.setText("textLava", "Lava: " + (lavaAmount * 1000) + " / " + (lavaLimit * 1000) + " mB");
	},

	getGuiScreen: function(){
		this.refreshSmeltery();
		const capacity = this.getCapacity();
		let x = y = 0;
		for(let i = 512; i--;){
			x = (i & 3) * 240;
			y = (i / 4 | 0) * 180;
			if(i < capacity){
				Elements.smeltery_side["slot" + i].x = x;
				Elements.smeltery_side["back" + i].x = x + 180;
				Elements.smeltery_side["scale" + i].x = x + 192;
			}
			else{
				Elements.smeltery_side["slot" + i].x = 2000;
				Elements.smeltery_side["back" + i].x = 2000;
				Elements.smeltery_side["scale" + i].x = 2000;
			}
		}
		return Window.smeltery_controller;
	},

	getArea: function(){
		const coords = {x: this.x, y: this.y, z: this.z};
		coords[this.data.meta & 2 ? "x" : "z"] += this.data.meta & 1 ? -1 : 1;
		const area = {x1: 0, x2: 0, y1: 0, y2: 0, z1: 0, z2: 0};

		this.lavaTank.length = 0;

		area.y1 = -AirLength(coords, 0, -1, 0);
		if(!area.y1){
			return null;
		}

		area.x1 = -AirLength(coords, -1, 0, 0);
		if(!area.x1){
			return null;
		}

		area.x2 = AirLength(coords, 1, 0, 0);
		if(!area.x2){
			return null;
		}

		area.z1 = -AirLength(coords, 0, 0, -1);
		if(!area.z1){
			return null;
		}

		area.z2 = AirLength(coords, 0, 0, 1);
		if(!area.z2){
			return null;
		}


		let i = j = k = block = controller = 0;

		for(i = area.x1 + 1; i <= area.x2 - 1; i++){
		for(j = area.z1 + 1; j <= area.z2 - 1; j++){
			if(World.getBlockID(coords.x + i, coords.y + area.y1, coords.z + j) != BlockID.seared_brick){
				return null;
			}
		}
		}

		let tileEntity;

		label:
		for(i = 1; i < 8; i++){
		for(j = area.x1; j <= area.x2; j++){
		for(k = area.z1; k <= area.z2; k++){
			if(j == area.x1 && k == area.z1 || j == area.x1 && k == area.z2 || j == area.x2 && k == area.z1 || j == area.x2 && k == area.z2){
				continue;
			}
			if(j == area.x1 || j == area.x2 || k == area.z1 || k == area.z2){ 
				block = World.getBlockID(coords.x + j, coords.y + area.y1 + i, coords.z + k);
				if(block == BlockID.seared_brick){
					continue;
				}
				if(block == BlockID.seared_tank){
					tileEntity = World.getTileEntity(coords.x + j, coords.y + area.y1 + i, coords.z + k);
					if(!tileEntity){
						break label;
					}
					this.lavaTank.push(tileEntity.liquidStorage);
					continue;
				}
				if(block == BlockID.seared_drain){
					tileEntity = World.getTileEntity(coords.x + j, coords.y + area.y1 + i, coords.z + k);
					if(!tileEntity){
						break label;
					}
					tileEntity.liquidStorage = this.liquidStorage;
					tileEntity.data.currentLiquid = Object.keys(this.liquidStorage.liquidAmounts)[this.data.select];
					continue;
				}
				if(block == BlockID.smeltery_controller){
					controller++;
					continue;
				}
				area.y2 = area.y1 + i - 1;
				break label;
			}
			if(World.getBlockID(coords.x + j, coords.y + area.y1 + i, coords.z + k)){
				area.y2 = area.y1 + i - 1;
				break label;
			}
		}
		}
		}

		if(area.y2 == area.y1 || controller > 1){
			this.lavaTank.length = 0;
			return null;
		}

		return {
			x1: coords.x + area.x1,
			y1: coords.y + area.y1,
			z1: coords.z + area.z1,
			x2: coords.x + area.x2,
			y2: coords.y + area.y2,
			z2: coords.z + area.z2
		};

	},

	getCapacity: function(){
		if(this.area){
			return (this.area.x2 - this.area.x1 - 1) * (this.area.y2 - this.area.y1) * (this.area.z2 - this.area.z1 - 1);
		}
		return 0;
	},

	tick: function(){

		const capacity = this.getCapacity();
		let slot, recipe;
		let i = 0;
		let key = "";

		const limit = this.liquidStorage.getLimit();
		const liquidAmount = this.liquidStorage.liquidAmounts;
		for(key in liquidAmount){
			if(!liquidAmount[key]){
				delete liquidAmount[key];
			}
		}

		if(!(ThreadTime & 63)){

			this.refreshSmeltery();

			let total = 0;
			for(key in liquidAmount){
				if(total + liquidAmount[key] > limit){
					delete liquidAmount[key];
				}
				else{
					total += liquidAmount[key];
				}
			}

			if(this.getLavaAmount() >= 0.024){
				let isUsed = isUpdate = false;
				for(key in this.data.progress){
					isUsed = true;
					if(++this.data.progress[key] >= 10){
						isUpdate = true;
						slot = this.container.getSlot("slot" + key);
						recipe = Material.getMeltingRecipe(slot.id, slot.data);
						if(total + recipe.amount <= limit){
							this.liquidStorage.addLiquidMilli(recipe.liquid, recipe.amount);
							slot.id = slot.data = slot.count = 0;
							delete this.data.progress[key];
						}
					}
				}
				if(isUsed){
					let got = 0.024;
					for(i = this.lavaTank.length; i--;){
						got -= this.lavaTank[i].getLiquidMilli("lava", got);
						if(!got){
							break;
						}
					}
				}
				if(isUpdate){
					this.updateAnim();
				}
			}

			const amounts = [];
			let j = min = 0;
			for(i = Material.alloy.length; i--;){
				amounts.length = 0;
				for(j = Material.alloy[i].input.length; j--;){
					amounts.push(this.liquidStorage.getAmount(Material.alloy[i].input[j].liquid) / Material.alloy[i].input[j].amount | 0);
				}
				min = Math.min.apply(null, amounts);
				if(min){
					for(j = Material.alloy[i].input.length; j--;){
						this.liquidStorage.getLiquidMilli(Material.alloy[i].input[j].liquid, Material.alloy[i].input[j].amount * min);
					}
					this.liquidStorage.addLiquidMilli(Material.alloy[i].result.liquid, Material.alloy[i].result.amount * min);
					this.updateAnim();
				}
			}

		}

		if(this.data.isActive && !(ThreadTime & 15)){
			const randomXZ = Math.random() * 0.6 + 0.2;
			const randomY = Math.random() * 0.375 + 0.5 + this.y;
			switch(this.data.meta){
				case 0:
					Particles.addParticle(4, this.x + randomXZ, randomY, this.z - 0.02, 0, 0, 0);
					Particles.addParticle(7, this.x + randomXZ, randomY, this.z - 0.1, 0, 0, 0);
				break;
				case 1:
					Particles.addParticle(4, this.x + randomXZ, randomY, this.z + 1.02, 0, 0, 0);
					Particles.addParticle(7, this.x + randomXZ, randomY, this.z + 1.1, 0, 0, 0);
				break;
				case 2:
					Particles.addParticle(4, this.x - 0.02, randomY, this.z + randomXZ, 0, 0, 0);
					Particles.addParticle(7, this.x - 0.1, randomY, this.z + randomXZ, 0, 0, 0);
				break;
				case 3:
					Particles.addParticle(4, this.x + 1.02, randomY, this.z + randomXZ, 0, 0, 0);
					Particles.addParticle(7, this.x + 1.1, randomY, this.z + randomXZ, 0, 0, 0);
				break;
			}
		}

		const input = this.container.getSlot("slotInput");
		if(input.id){
			for(i = 0; i < capacity; i++){
				if(!this.container.slots["slot" + i]){
					break;
				}
				this.container.setScale("scale" + i, (this.data.progress[i] || 0) / 4);
				slot = this.container.getSlot("slot" + i);
				if(!slot.id){
					slot.id = input.id;
					slot.data = input.data;
					slot.count = 1;
					input.count--;
					this.data.progress[i] = 0;
					this.container.validateSlot("slotInput");
					break;
				}
			}
		}

		const order = Object.keys(liquidAmount);
		for(i = this.data.select; i--;){
			order.push(order.shift());
		}

		if(this.container.isOpened()){
			let y = 64;
			for(i = 0; i < order.length; i++){
				if("liquid_" + order[i] in Elements.smeltery_controller){
					Elements.smeltery_controller["liquid_" + order[i]].y = y;
				}
				else{
					Elements.smeltery_controller["liquid_" + order[i]] = {type: "scale", x: 704, y: y, direction: 1, bitmap: "smeltery_line", scale: 4};
				}
				this.liquidStorage.updateUiScale("liquid_" + order[i], order[i]);
				y -= liquidAmount[order[i]] / limit * 208;
			}
			let array;
			for(key in Elements.smeltery_controller){
				array = key.split("_");
				if(array[0] == "liquid" && !liquidAmount[array[1]]){
					this.liquidStorage.updateUiScale(key, 0);
				}
			}
			for(i = 0; i < capacity; i++){
				this.container.setScale("scale" + i, (this.data.progress[i] || 0) / 9);
			}
			if(liquidAmount[order[0]]){
				let amount = liquidAmount[order[0]] * 1000
				let ingot = amount / 144 | 0;
				let nugget = amount % 144 >> 4;
				ingot = ingot ? "Ingots: " + ingot + ", ": "";
				nugget = nugget ? "Nuggets: " + nugget : "";
				this.container.setText("textInfo1", LiquidRegistry.getLiquidName(order[0]) + ": " + amount + " mB");
				this.container.setText("textInfo2", ingot + nugget);
			}
			else{
				this.container.setText("textInfo1", "");
				this.container.setText("textInfo2", "");
			}
		}

	},

	activate: function(){
		if(!this.data.isActive){
			this.data.isActive = true;
			TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta + 4);
		}
	},
	deactivate: function(){
		if(this.data.isActive){
			this.data.isActive = false;
			TileRenderer.mapAtCoords(this.x, this.y, this.z, this.blockID, this.data.meta);
		}
	},
	destroy: function(){
		BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		if(this.anim){
			this.anim.destroy();
			this.anim = null;
		}
	}
});