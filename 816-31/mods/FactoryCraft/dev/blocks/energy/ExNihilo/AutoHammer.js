ModAPI.addAPICallback("ENR", function(api){

let AllTransform = {};

const id = CallbackJS.reg(api.EX.transformation, function(controller){
	let args = controller.getArguments();
	AllTransform[args[0]] = function(){
		return {
			id: args[1],
			count: args[2],
			data: args[3]
		};
	};
}, ["pre"]);
api.EX.transformation = CallbackJS.getRegFunc(id);
Callback.addCallback("LevelDisplayed", function(){
let Hammer = api.EX.Hammer;
	let keys = Object.keys(Hammer);
	for(let i in keys){
		let key = keys[i];
		AllTransform[parseInt(key)] = function(){
			if(Hammer[key].output){
				let chance = Math.random() * 100
				if (chance < 3) {
					return {
						id: eval("ItemID.ex_" + Hammer[key].data + Hammer[key].output),
						count: 7,
						data: 0
					};
				} else if (chance < 15) {
					return {
						id: eval("ItemID.ex_" + Hammer[key].data + Hammer[key].output),
						count: 6,
						data: 0
					};
				} else if (chance < 35) {
					return {
						id: eval("ItemID.ex_" + Hammer[key].data + Hammer[key].output),
						count: 5,
						data: 0
					};
				} else {
					return {
						id: eval("ItemID.ex_" + Hammer[key].data + Hammer[key].output),
						count: 4,
						data: 0
					};
				}
			}
		}
	}
})

Translation.addTranslation("Auto Hammer", {
	ru: "Автоматический молот"
});

var hammer_texture={
	front:"block_energy_destroyer",
	side:"block_machine_iron"
}

if(!Options.isThemeBlack()){
	hammer_texture.front="light_destroyer";
	hammer_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("energyAutoHammer");
Block.createBlockWithRotation("energyAutoHammer", [
	{name:"Auto Hammer", texture: [
	[hammer_texture.side, 0],
			[hammer_texture.side, 0],
			[hammer_texture.side, 0],
			[hammer_texture.front, 0],
			[hammer_texture.side, 0],
			[hammer_texture.side, 0]
		 ], inCreative: true}
],"opaque");

let UI_auto_hammer = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Auto Hammer")
            },
        },
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
    	 {type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
    	  {type: "bitmap", x: 585, y: 170, bitmap: "progressbar.ground", scale: 4.5}
    ],
    elements: {
    	"slotInput": {type: "slot", x: 500, y: 170, size: 70},
    	"slotResult": {type: "slot", x: 700, y: 170, size: 70},
    	
    	"progressScale": {type: "scale", x: 585, y: 170, direction: 0, scale: 4.5,bitmap: "progressbar.scale"},
    	"energyScale": {type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale"}
    }
});

FactAPI.machine.registerEnergyTile(BlockID.energyAutoHammer,{
	useNetworkItemContainer: true,
	defaultValues: {
		progress:0,
		energy_storage:5000
	},
	getConfig:function(){
		return {
			time: 100
		}
	},
	getScreenByName(){
		return UI_auto_hammer;
	},
	tick(){
		const cfg = this.getConfig();
		this.container.setScale("progressScale",this.data.progress/cfg.time);
		this.container.setScale("energyScale",this.data.energy/this.getEnergyStorage());
	},
	MechanicDeploy(){
		StorageInterface.checkHoppers(this);
		
		const cfg = this.getConfig();
		
		let slotInput = this.container.getSlot("slotInput");
		let slotResult = this.container.getSlot("slotResult");
		
		let result = AllTransform[slotInput.id];
		if(result && this.data.energy >= 6){
			result = AllTransform[slotInput.id]();
			if((slotResult.id == result.id || slotResult.id == 0)){
				this.data.energy-=6;
				this.data.progress++;
				if(this.data.progress >= cfg.time){
					slotInput.count--;
				
					slotResult.id = result.id;
					slotResult.data = result.data;
					slotResult.count += result.count;
				
					this.container.setSlot("slotInput", slotInput.id, slotInput.count, slotInput.data);
					this.container.setSlot("slotResult", slotResult.id, slotResult.count, slotResult.data);
				
					this.data.progress = cfg.time / 2;
					
					this.container.validateAll();
				}
			}else if(this.data.progress >= 1)
				this.data.progress-=10;
		}else if(this.data.progress >= 1)
			this.data.progress-=10;
	}
});
StorageInterface.createInterface(BlockID.energyAutoHammer, {
	slots: {
		"slotInput": {output: false, input: true},
		"slotResult": {output: true, input: false}
	},
});

});
