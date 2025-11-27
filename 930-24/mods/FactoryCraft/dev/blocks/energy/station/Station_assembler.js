Translation.addTranslation("Assembler Station", {
    ru: "Сборочная станция"
});
var assembler_texture={
	top:"block_energy_assembler",
	bottom:"block_machine_iron",
	side:"block_energy_assembler"
}

if(!Options.isThemeBlack()){
	assembler_texture.top="light_assembler";
	assembler_texture.bottom="light_iron_machine";
	assembler_texture.side="light_assembler";
}

IDRegistry.genBlockID("machineEnergyStationAssembler");
Block.createBlock("machineEnergyStationAssembler", [
	{
		name: "Assembler Station",
		texture: [
			[assembler_texture.bottom, 0],
			[assembler_texture.top, 0],
			[assembler_texture.side, 1],
			[assembler_texture.side, 1],
			[assembler_texture.side, 1],
			[assembler_texture.side, 1]
		],
		inCreative: true
	}
],"opaque");

let UI_energy_assembler = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: Translation.translate("Assembler Station")
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
        {type: "bitmap", x: 720, y: 170, bitmap: "progressbar.ground", scale: 4.5}
    ],
    elements: {
        "slotResult": {type: "slot", x: 850, y: 170, size: 70},
        
        "slot0": {type: "slot", x: 435, y: 100, size: 70},
        "slot1": {type: "slot", x: 505, y: 100, size: 70},
        "slot2": {type: "slot", x: 575, y: 100, size: 70},
        "slot3": {type: "slot", x: 435, y: 170, size: 70},
        "slot4": {type: "slot", x: 505, y: 170, size: 70},
        "slot5": {type: "slot", x: 575, y: 170, size: 70},
        "slot6": {type: "slot", x: 435, y: 240, size: 70},
        "slot7": {type: "slot", x: 505, y: 240, size: 70},
        "slot8": {type: "slot", x: 575, y: 240, size: 70},
        "slotI1": {type: "slot", x: 435, y: 320, size: 70},
        "slotI2": {type: "slot", x: 505, y: 320, size: 70},
        "slotI3": {type: "slot", x: 575, y: 320, size: 70},
        "slotI4": {type: "slot", x: 645, y: 320, size: 70},
        "slotI5": {type: "slot", x: 715, y: 320, size: 70},
        "slotI6": {type: "slot", x: 435, y: 390, size: 70},
        "slotI7": {type: "slot", x: 505, y: 390, size: 70},
        "slotI8": {type: "slot", x: 575, y: 390, size: 70},
        "slotI9": {type: "slot", x: 645, y: 390, size: 70},
        "slotI10": {type: "slot", x: 715, y: 390, size: 70},
        
        "progressScale": {type: "scale", x: 720, y: 170, direction: 0, scale: 4.5,bitmap: "progressbar.scale"},
        "energyScale": {type: "scale", x: 350, y: 50, direction: 1, scale: 2.6, bitmap: "energybar.scale"}
    }
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyStationAssembler,{
	useNetworkItemContainer: true,
	defaultValues:{
		time:200,
		energy_storage:10000,
		progress:0
	},
	getScreenByName(){
		return UI_energy_assembler;
	},
	isProgress(res, slot){
		return this.data.progress <= this.data.time && res && this.data.energy >= 5 && ((slot.id == res.id&&slot.data==res.data&&slot.count+res.count <=Item.getMaxStack(res.id))||slot.count<=0) && this.isInventoryInRecipe();
	},
	getRecipe(){
		let obj = {};
		for(let i = 0;i < 9;i++){
			let item = this.container.getSlot("slot"+i);
			if(item.id != 0)
				obj[item.id+":"+item.data] = (obj[item.id+":"+item.data]||0) + 1;
		}
		return obj;
	},
	getInventory(){
		let obj = {};
		for(let i = 1;i <= 10;i++){
			let item = this.container.getSlot("slotI"+i);
			if(item.id != 0)
				obj[item.id+":"+item.data] = (obj[item.id+":"+item.data]||0) + item.count;
		}
		return obj;
	},
	isInventoryInRecipe(){
		let recipe = this.getRecipe();
		let inventory = this.getInventory();
		let keys = Object.keys(recipe);
		for(let i in keys)
			if(!inventory[keys[i]] || recipe[keys[i]] > inventory[keys[i]])
				return false;
		return true;
	},
	craft(){
		let recipe = this.getRecipe();
		let keys = Object.keys(recipe);
		for(let a in keys){
			let count = recipe[keys[a]];
			for(let i = 1;i <= 10;i++){
				let item = this.container.getSlot("slotI"+i);
				if(count <= 0 || (item.id != keys[a].split(":")[0] && item.data != keys[a].split(":")[1]))
					continue;
				item.count-=count;
				count=0;
				if(item.count < 0)
					count-=item.count;
				this.container.setSlot("slotI"+i, item.id, item.count, item.data, item.extra);
			}
		}
	},
	tick(){
		this.container.setScale("progressScale",this.data.progress/this.data.time);
		this.container.setScale("energyScale",this.data.energy/this.getEnergyStorage());
	},
	MechanicDeploy(){
		this.container.setWorkbenchFieldPrefix("slot");
		let res = Recipes.getRecipeResult(this.container);
		let resultSlot = this.container.getSlot("slotResult");
		if(this.isProgress(res, resultSlot)){
			this.data.progress++;
			this.data.energy-=5;
			if(this.data.progress >= this.data.time){
				resultSlot.id = res.id;
				resultSlot.data = res.data;
				resultSlot.count += res.count;
				this.container.setSlot("slotResult", resultSlot.id, resultSlot.count, resultSlot.data); 
				this.craft();
				this.data.progress = 0;
				this.container.validateAll();
			}
		}else if(this.data.progress > 1)
			this.data.progress-=2;
	}
})
StorageInterface.createInterface(BlockID.machineEnergyStationAssembler, {
	slots: {
		"slotI^1-10": {input: true, output: false},
		"slotResult": {input: false, output: true}
	},
});