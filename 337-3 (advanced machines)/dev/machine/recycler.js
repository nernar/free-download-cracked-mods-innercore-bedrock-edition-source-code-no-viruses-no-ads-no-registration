AdvMachine.createBlock("advRecycler", "Compacting Recycler", [
	"machine_advanced",
	"advMacerator_top",
	"machine",
	"advRecycler_front",
	"advRecycler_right",
	"advRecycler_left",
], [0, 1, 0, 1, 0, 0]);

Recipes.addShaped({id: BlockID.advRecycler}, ["aaa", "aba", "aca"], ["a", 33, -1, "b", BlockID.recycler, 0, "c", BlockID.machineBlockAdvanced, 0]);


AdvMachine.createGUI(BlockID.advRecycler, "", "Compacting Recycler", {
	drawing: [
		{type: "bitmap", x: 510, y: 185, bitmap: "energy_small_background", scale: 3.2},
		{type: "bitmap", x: 575, y: 185, bitmap: "recycler_bar_background", scale: 3.2},
		{type: "text", x: 360, y: 160, text: "Pressure:"},
		{type: "text", x: 360, y: 240, text: "Gibbl"}
	],
	elements: {
		energyScale: {type: "scale", x: 510, y: 185, direction: 1, bitmap: "energy_small_scale", scale: 3.2},
		progressScale: {type: "scale", x: 575, y: 185, bitmap: "recycler_bar_scale", scale: 3.2},
		slotEnergy: {type: "slot", x: 500, y: 240},
		slotSource: {type: "slot", x: 500, y: 120},
		slotResult0: {type: "slot", x: 660, y: 180},
		textInfo: {type: "text", x: 360, y: 180}
	}
});


AdvMachine.registerPrototype(BlockID.advRecycler, {

	getStartSoundFile: function(){
		return "Machines/RecyclerOp.ogg";
	},
	getInterruptSoundFile: function(){
		return "Machines/InterruptOne.ogg";
	},

	tick: function(){

		const source = this.container.getSlot("slotSource");

		this.setupMachine();

		if(source.id && this.data.energy >= 16 && this.checkSpace(1, {id: ItemID.scrap, count: 1})){
			this.data.energy -= 16;
			this.data.heat < 10000 && this.data.heat++;
			this.data.progress += this.data.heat / 100000 * 12;
			this.startPlaySound();
			if(this.data.progress >= 1){
				Math.random() < 0.125 && !~recyclerBlacklist.indexOf(source.id) && this.putResult({id: ItemID.scrap, count: 1});
				source.count--;
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


AdvMachine.createInterface(BlockID.advRecycler, "", 1);