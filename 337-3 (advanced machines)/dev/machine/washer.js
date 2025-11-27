AdvMachine.createBlock("advWasher", "Thermal Washer", [
	"machine_advanced",
	"machine_advanced",
	"advWasher_back",
	"advWasher_front",
	"advWasher_side",
	"advWasher_side",
], [0, 0, 1, 1, 1, 1]);

Recipes.addShaped({id: BlockID.advWasher}, ["aaa", "aba", "aca"], ["a", ItemID.dustSulfur, 0, "b", BlockID.oreWasher, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advWasher, "oreWasher", "Thermal Washer", {
	drawing: [
		{type: "bitmap", x: 500, y: 120, bitmap: "liquid_bar", scale: 3.2},
		{type: "bitmap", x: 810, y: 196, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 564, y: 162, bitmap: "washer_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Heat:"}
	],
	elements: {
		liquidScale: {type: "scale", x: 513, y: 133, direction: 1, bitmap: "gui_water_scale", overlay: "gui_liquid_storage_overlay", scale: 3.2},
		energyScale: {type: "scale", x: 810, y: 196, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 634, y: 178, bitmap: "ore_washer_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 800, y: 251},
		slotSource: {type: "slot", x: 638, y: 107},
		slotResult0: {type: "slot", x: 578, y: 251},
		slotResult1: {type: "slot", x: 638, y: 251},
		slotResult2: {type: "slot", x: 698, y: 251},
		textInfo: {type: "text", x: 360, y: 180}
	}
});

AdvMachine.registerPrototype(BlockID.advWasher, {

	nullWater: false,

	checkSpace: function(result){
		let slot;
		let id = 0;
		let count = 0;
		for(let i = 3; i--;){
			slot = this.container.getSlot("slotResult" + i);
			id = result[i * 2];
			count = result[i * 2 + 1];
			if(!id){
				continue;
			}
			if(slot.id && (slot.id != id || slot.count + count > Item.getMaxStack(id))){
				return false;
			}
		}
		return true;
	},

	putResult: function(result){
		let slot;
		let id = 0;
		let count = 0;
		for(let i = 3; i--;){
			slot = this.container.getSlot("slotResult" + i);
			id = result[i * 2];
			count = result[i * 2 + 1];
			if(!id){
				continue;
			}
			slot.id = id;
			slot.count += count;
		}
	},

	idleFunc: function(amount){
		this.data.progress = 0;
		if(this.data.isHeating && this.data.energy >= 6){
			this.data.energy -= 6;
			this.liquidStorage.getLiquid("water", amount);
			this.data.heat < 10000 && this.data.heat++;
		}
		else{
			this.data.heat = Math.max(0, this.data.heat - 2);
		}
	},

	tick: function(){

		const water = this.liquidStorage.getAmount("water");

		if(this.nullWater){
			if(water){
				if(this.data.heat >= 1000){
					this.deactivate();
					World.removeTileEntity(this.x, this.y, this.z);
					World.setBlock(this.x, this.y, this.z, 0);
					for(let i = 8; i--;){
						Particles.addParticle(14, this.x + Math.random() * 2, this.y + Math.random() * 2, this.z + Math.random() * 2, 0, 0, 0);
					}
				}
				else{
					this.nullWater = false;
				}
			}
		}
		else{
			water || (this.nullWater = true);
		}

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("oreWasher", source.id, source.data);
		const amount = (this.data.heat / 10000 * 5 | 0) / 1000;

		this.setupMachine();

		if(result && this.data.energy >= 48 && this.checkSpace(result) && this.liquidStorage.getAmount("water") >= 0.5){
			this.data.energy -= 48;
			this.liquidStorage.getLiquid("water", amount);
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count--;
				this.container.validateSlot("slotSource");
				this.liquidStorage.getLiquid("water", 0.5);
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc(amount, 6);
		}

		this.setRender();
		this.updateElements(function(heat){return (heat / 100 | 0) + "%"}, true);

	}

}, true, true);


AdvMachine.createInterface(BlockID.advWasher, "oreWasher", 3);