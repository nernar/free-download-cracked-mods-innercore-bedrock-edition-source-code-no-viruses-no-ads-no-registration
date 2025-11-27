Translation.addTranslation("Magma Crucible", {ru: "Плавитель"});

var crucible_texture={
	side:"block_machine_iron",
	front:"block_energy_crucible"
}

if(!Options.isThemeBlack()){
	crucible_texture.side="light_iron_machine";
	crucible_texture.front="light_crucible";
}


IDRegistry.genBlockID("machineEnergyLiquidCrucible");
Block.createBlockWithRotation("machineEnergyLiquidCrucible", [
	{
		name:"Magma Crucible", 
		texture: [
			[crucible_texture.side,0],[crucible_texture.side, 0],
			[crucible_texture.side,0],[crucible_texture.front,0],
			[crucible_texture.side,0],[crucible_texture.side,0]
		 ],
		 inCreative: true}
],"opaque");
	
var UI_energy_crucible=new UI.StandartWindow({
	standart: {
		header: {
			text:{
				text: Translation.translate("Magma Crucible")
			},
		},
		inventory: {
			standart: true
		}, 
		background: { 
			standart: true 
		}
	},
	drawing:[
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 670, y: 50, bitmap: "liquid.ground", scale: 2.6},
		{type: "bitmap", x: 350, y: 50, bitmap: "energybar.ground", scale: 2.6},
		{type: "bitmap", x: 515, y: 190, bitmap: "progressbar.ground", scale: 5},
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements:{
		"slotSource": {type: "slot", x: 420, y: 180, size: 85},
		"liquidScale":{type:"scale",x:670,y:50,bitmap:"liquid.lava",direction:1,scale:2.6},
		"energyScale": {type: "scale", x: 350 , y: 50, direction: 1, bitmap: "energybar.scale", scale: 2.6},
		"progressScale": { type: "scale", x: 515, y: 190, direction: 0, scale: 5, bitmap: "progressbar.scale" },
		"FillText":{type: "text", x: 800, y:60 , text: "0/16 of lava", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
	}
});
	
FactAPI.machine.registerEnergyTile(BlockID.machineEnergyLiquidCrucible,{
	useNetworkItemContainer: true,
	defaultValues:{
		progress:0,
		energy_storage: 10000,
		time:80
	},
	getScreenByName(){
		return UI_energy_crucible
	},
	init:function(){
		this.liquidStorage.setLimit("lava",16);
	},
	tick(){
		this.container.setScale("liquidScale",this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())/16);
		this.container.setScale("energyScale",this.data.energy/this.getEnergyStorage());
		this.container.setScale("progressScale",this.data.progress/this.data.time);
		this.container.setText("FillText", Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))+"/16 of lava")
	},
	MechanicDeploy(){
		var source=this.container.getSlot("slotSource");
		var input=false;
		if(ItemType.is(source.id,"stone"))
			input=true;
		if(input&&this.data.energy>=5&&this.liquidStorage.getAmount("lava")<=15){
			this.data.progress++;
			this.data.energy-=5;
			if(this.data.progress==this.data.time){
				this.data.progress=0;
				this.liquidStorage.addLiquid("lava",1);
				source.count--;
				this.container.validateAll();
			}
		}else{
			this.data.progress=0;
		}
	}
},{});
StorageInterface.createInterface(BlockID.machineEnergyLiquidCrucible, {
	slots: {
		"slotSource": {input: true, output: false}
	}
});
ItemType.set(1,"stone");
ItemType.set(4,"stone");
ItemType.set(24,"stone");
ItemType.set(48,"stone");
ItemType.set(49,"stone");
ItemType.set(98,"stone");
