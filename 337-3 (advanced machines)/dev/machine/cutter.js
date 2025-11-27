AdvMachine.createBlock("advCutter", "Water-Jet Cutter", [
	"advCutter_bottom",
	"machine_advanced",
	"machine_side",
	"advCutter_front",
	"machine",
	"machine",
], [1, 0, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advCutter}, ["aaa", "aba", "aca"], ["a", ItemID.cutter, 0, "b", BlockID.metalFormer, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advCutter, "metalFormer1", "Water-Jet Cutter", {
	drawing: [
		{type: "bitmap", x: 500, y: 120, bitmap: "liquid_bar", scale: 3.2},
		{type: "bitmap", x: 590, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 650, y: 185, bitmap: "arrow_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Pressure:"},
		{type: "text", x: 360, y: 240, text: "Gibbl"}
	],
	elements: {
		liquidScale: {type: "scale", x: 513, y: 133, direction: 1, bitmap: "gui_water_scale", overlay: "gui_liquid_storage_overlay", scale: 3.2},
		energyScale: {type: "scale", x: 590, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 650, y: 185, bitmap: "arrow_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 580, y: 240},
		slotSource: {type: "slot", x: 580, y: 120},
		slotResult0: {type: "slot", x: 740, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advCutter, {

	idleFunc: function(amount){
		this.data.progress = 0;
		if(this.data.isHeating && this.data.energy && this.liquidStorage.getAmount("water") >= amount){
			this.data.energy--;
			this.liquidStorage.getLiquid("water", amount);
			this.data.heat < 10000 && this.data.heat++;
		}
		else{
			this.data.heat = Math.max(0, this.data.heat - 2);
		}
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("metalFormer1", source.id);
		const amount = (this.data.heat / 10000 * 2 | 0) / 1000;

		this.setupMachine();

		if(result && this.data.energy >= 24 && this.checkSpace(1, result) && this.liquidStorage.getAmount("water") >= 0.5){
			this.data.energy -= 24;
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
			this.idleFunc(amount, 1);
		}

		this.setRender();
		this.updateElements(null, true);

	}

}, true);


AdvMachine.createInterface(BlockID.advCutter, "metalFormer1", 1);