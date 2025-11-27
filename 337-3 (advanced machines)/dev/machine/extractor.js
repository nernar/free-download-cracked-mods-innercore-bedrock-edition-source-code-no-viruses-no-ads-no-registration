AdvMachine.createBlock("advExtractor", "Centrifuge Extractor", [
	"machine_advanced",
	"advExtractor_top",
	"machine_advanced",
	"advExtractor_front",
	"advExtractor_side",
	"advExtractor_side",
], [0, 0, 0, 1, 1, 1]);

Recipes.addShaped({id: BlockID.advExtractor}, ["aaa", "aba", "aca"], ["a", ItemID.treetap, 0, "b", BlockID.extractor, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advExtractor, "extractor", "Centrifuge Extractor", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 575, y: 185, bitmap: "extractor_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Speed:"},
		{type: "text", x: 360, y: 240, text: "cm/s"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 575, y: 185, bitmap: "extractor_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		slotResult1: {type: "slot", x: 720, y: 180},
		slotResult2: {type: "slot", x: 780, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advExtractor, {

	getStartSoundFile: function(){
		return "Machines/ExtractorOp.ogg";
	},
	getInterruptSoundFile: function(){
		return "Machines/InterruptOne.ogg";
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("extractor", source.id, source.data);

		this.setupMachine();

		if(result && this.data.energy >= 16 && this.checkSpace(3, result)){
			this.data.energy -= 16;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000;
			this.startPlaySound();
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
		this.updateElements();

	}

});


AdvMachine.createInterface(BlockID.advExtractor, "extractor", 3);