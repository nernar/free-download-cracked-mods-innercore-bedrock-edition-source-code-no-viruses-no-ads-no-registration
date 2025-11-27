AdvMachine.createBlock("advCompressor", "Singularity Compressor", [
	"machine_advanced",
	"advCompressor_top",
	"machine",
	"advCompressor_front",
	"advCompressor_right",
	"advCompressor_left",
], [0, 1, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advCompressor}, ["aaa", "aba", "aca"], ["a", 49, 0, "b", BlockID.compressor, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advCompressor, "compressor", "Singularity Compressor", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 575, y: 185, bitmap: "compressor_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Pressure:"},
		{type: "text", x: 360, y: 240, text: "Gibbl"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 575, y: 185, bitmap: "compressor_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advCompressor, {

	getStartSoundFile: function(){
		return "Machines/CompressorOp.ogg";
	},
	getInterruptSoundFile: function(){
		return "Machines/InterruptOne.ogg";
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("compressor", source.id, source.data);

		this.setupMachine();

		if(result && (!result.sourceCount || source.count >= result.sourceCount) && this.data.energy >= 16 && this.checkSpace(1, result)){
			this.data.energy -= 16;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			this.startPlaySound();
			if(this.data.progress >= 1){
				this.putResult(result);
				source.count -= result.sourceCount;
				this.container.validateSlot("slotSource");
				this.data.progress = 0;
			}
		}
		else{
			this.idleFunc();
		}

		this.setRender();
		this.updateElements(function(heat){return heat * 9});

	}

});


AdvMachine.createInterface(BlockID.advCompressor, "compressor", 1);