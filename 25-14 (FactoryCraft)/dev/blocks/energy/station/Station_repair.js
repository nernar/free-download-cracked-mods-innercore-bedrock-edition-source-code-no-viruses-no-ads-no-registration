Translation.addTranslation("Repair Station", {
	ru: "Ремонтная станция"
});

var repair_texture={
	top:"block_energy_repair",
	bottom:"block_machine_iron",
	side:"block_energy_repair"
}

if(!Options.isThemeBlack()){
	repair_texture.top="light_repair";
	repair_texture.bottom="light_iron_machine";
	repair_texture.side="light_repair";
}

IDRegistry.genBlockID("machineEnergyStationRepair");
Block.createBlock("machineEnergyStationRepair", [
	{
		name: "Repair Station",
		texture: [
			[repair_texture.bottom, 0],
			[repair_texture.top, 0],
			[repair_texture.side, 1],
			[repair_texture.side, 1],
			[repair_texture.side, 1],
			[repair_texture.side, 1]
		],
		inCreative: true
	}
],"opaque");
	

var UI_energy_repair = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: Translation.translate("Repair Station")
			},
		},
		minHeight: 700,
		inventory: {
			standart: true
		}, 
		background: { 
		standart: true 
		}
	},
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 585, y: 125, bitmap: "progressbar.ground", scale: 5}
	],
	elements: {
		"slotSource": {type: "slot", x: 445, y: 110, size: 100},
		"slotResult": {type: "slot", x: 735, y: 110, size: 100},
		"progressScale": {type: "scale", x: 585, y: 125, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"energyScale": {type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale"}
	}
});
	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyStationRepair,{
	useNetworkItemContainer: true,
	defaultValues:{
		time: 200,
		energy_storage: 10000,
		progress:0
	},
	getScreenByName(){
		return UI_energy_repair;
	},
	tick(){
		this.container.setScale("energyScale",this.data.energy/this.getEnergyStorage());
		this.container.setScale("progressScale",this.data.progress/this.data.time);
	},
	MechanicDeploy(){
		let source = this.container.getSlot("slotSource");
		let output= this.container.getSlot("slotResult");
		
		let result=FactAPI.recipe.repairStation.get(source.id);
		if ((result && this.data.energy >= 5) && ((output.id == result.id && output.data == result.data && output.count < 64) || output.id == 0)) {
		    this.data.progress++;
		    this.data.energy -= 5;
			if(this.data.progress>=this.data.time){
				this.data.progress=0;
				source.count--;
				output.id=result.id;
				output.data=result.data;
				output.count++;
				this.container.setSlot("slotResult", output.id, source.count, output.data, output.extra);
				this.container.validateAll();
			}
		}
		else{
			this.data.progress=0;
		}
	}
});

//native
var toRSR=[
	256,257,258,259,261,267,268,269,270,271,272,273,274,275,276,277,278,279,283,284,285,286,290,292,293,294,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,346,359
];
for(var i in toRSR){
	FactAPI.recipe.repairStation.register(toRSR[i],toRSR[i],0);
}
StorageInterface.createInterface(BlockID.machineEnergyStationRepair, {
	slots: {
		"slotSource": {input: true, output: false},
		"slotResult": {output: true, input: true}
	}
});
