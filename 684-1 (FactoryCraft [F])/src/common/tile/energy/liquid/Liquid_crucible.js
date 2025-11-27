Translation.addTranslation("Magma Crucible", {ru: "Плавитель"});

var crucible_texture={
	side:"block_machine_iron",
	front:"block_energy_crucible"
}

if(Options.theme){
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


Recipes.addShaped({id: BlockID.machineEnergyLiquidCrucible, count: 1, data: 0}, [
	"cec",
	"cbc",
	"cac"
], [
	'a', BlockID.blockMachineIron,0,
	'b',61,0,
	'c',49,0,
	'e',ItemID.factoryBattery,0
]);
	
var UI_energy_crucible=new UI.StandartWindow({
	standart: {
		header: {
			text:{
				text: "Magma Crucible/Плавитель"
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
	defaultValues:{
		progress:0,
		time:80
	},
	getGuiScreen:function(){
		return UI_energy_crucible
	},
	init:function(){
		this.liquidStorage.setLimit("lava",16);
	},
	getEnergyStorage:function(){
		return 10000
	},
	getTransportSlots: function () {
		return {input: ["slotSource"]};
	},
	energyTick:FactAPI.machine.basicEnergyStorage,
	canExtract:{lava:true},
	tick:function(){
		this.container.setScale("liquidScale",this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())/16);
		this.container.setScale("energyScale",this.data.energy/this.getEnergyStorage());
		this.container.setScale("progressScale",this.data.progress/this.data.time);
		var content = this.container.getGuiContent(); 
		try{
			content.elements["FillText"].text=Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))+"/16 of lava";
		}catch(e){}
		var source=this.container.getSlot("slotSource");
		var input=false;
		if(ItemDictionary.isItemInCathegory(source.id,"stone")){
			input=true;
		}
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
},{item:true,liquid:true});
ItemDictionary.setItemCathegory(1,"stone");
ItemDictionary.setItemCathegory(4,"stone");
ItemDictionary.setItemCathegory(24,"stone");
ItemDictionary.setItemCathegory(48,"stone");
ItemDictionary.setItemCathegory(49,"stone");
ItemDictionary.setItemCathegory(98,"stone");