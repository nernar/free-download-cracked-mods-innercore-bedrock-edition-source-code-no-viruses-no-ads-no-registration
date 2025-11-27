AdvMachine.createBlock("advExtruder", "Liquescent Extruder", [
	"machine_advanced",
	"advExtruder_top",
	"machine_side",
	"advExtruder_front",
	"machine",
	"machine",
], [0, 1, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advExtruder}, ["aaa", "aba", "aca"], ["a", ItemID.casingIron, 0, "b", BlockID.metalFormer, 0, "c", BlockID.machineBlockAdvanced, 0]);
//a: Iron Fence


AdvMachine.createGUI(BlockID.advExtruder, "metalFormer2", "Liquescent Extruder", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 565, y: 183, bitmap: "extruder_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Heat:"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 565, y: 183, bitmap: "extruder_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		slotResult1: {type: "slot", x: 720, y: 180},
		slotResult2: {type: "slot", x: 780, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advExtruder, {

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("metalFormer2", source.id);

		this.setupMachine();

		if(result && this.data.energy >= 24 && this.checkSpace(3, result)){
			this.data.energy -= 24;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count--;
				this.container.validateSlot("slotSource");
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc();
		}

		this.setRender();
		this.updateElements(function(heat){return (heat / 100 | 0) + "%"});

	}

});


AdvMachine.createInterface(BlockID.advExtruder, "metalFormer2", 3);