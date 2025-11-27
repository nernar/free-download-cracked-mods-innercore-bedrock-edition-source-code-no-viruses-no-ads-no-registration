AdvMachine.createBlock("advRoller", "Impellerized Roller", [
	"machine_advanced",
	"machine_advanced",
	"machine_side",
	"advRoller_front",
	"machine",
	"machine",
], [0, 0, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advRoller}, ["aaa", "aba", "aca"], ["a", ItemID.craftingHammer, 0, "b", BlockID.metalFormer, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advRoller, "metalFormer0", "Impellerized Roller", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 565, y: 183, bitmap: "extruder_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Pressure:"},
		{type: "text", x: 360, y: 240, text: "Gibbl"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 565, y: 183, bitmap: "extruder_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advRoller, {

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("metalFormer0", source.id);

		this.setupMachine();

		if(result && this.data.energy >= 24 && this.checkSpace(1, result)){
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
		this.updateElements();

	}

});


AdvMachine.createInterface(BlockID.advRoller, "metalFormer0", 1);