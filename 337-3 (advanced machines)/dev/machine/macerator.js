AdvMachine.createBlock("advMacerator", "Rotary Macerator", [
	"machine_advanced",
	"advMacerator_top",
	"machine_side",
	"advMacerator_front",
	"machine",
	"machine",
], [0, 1, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advMacerator}, ["aaa", "aba", "aca"], ["a", ItemID.plateSharp, 0, "b", BlockID.macerator, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advMacerator, "macerator", "Rotary Macerator", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 575, y: 185, bitmap: "macerator_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Speed:"},
		{type: "text", x: 360, y: 240, text: "RPM"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 575, y: 185, bitmap: "macerator_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		slotResult1: {type: "slot", x: 720, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advMacerator, {

	getStartSoundFile: function(){
		return "Machines/MaceratorOp.ogg";
	},
	getInterruptSoundFile: function(){
		return "Machines/InterruptOne.ogg";
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");
		const result = ICore.Recipe.getRecipeResult("macerator", source.id, source.data);

		this.setupMachine();

		if(result && this.data.energy >= 16 && this.checkSpace(2, result)){
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

		if(this.data.isActive && !(World.getThreadTime() & 7)){
			for(let i = 4; i--;){
				Particles.addParticle(4, this.x + 0.2 + Math.random() * 0.6, this.y + 0.9 + Math.random() * 0.2, this.z + 0.2 + Math.random() * 0.6, 0, 0, 0);
			}
		}

	}

});


AdvMachine.createInterface(BlockID.advMacerator, "macerator", 2);