Translation.addTranslation("Geothermal Generator", {
	ru: "Геотермальный генератор"
});

var geothermal_texture={
	side:"block_machine_iron",
	front:"block_energy_geothermal"
}

if(Options.theme){
	geothermal_texture.front="light_geothermal";
	geothermal_texture.side="light_iron_machine";
}

IDRegistry.genBlockID("machineEnergyGeneratorGeothermal");
Block.createBlockWithRotation("machineEnergyGeneratorGeothermal", [
	{name: "Geothermal Generator", texture: [
		[geothermal_texture.side,0],[geothermal_texture.side, 0],
		[geothermal_texture.side,0],[geothermal_texture.front,0],
		[geothermal_texture.side,0],[geothermal_texture.side,0]
	], inCreative: true}
],"opaque");

Recipes.addShaped({
	id: BlockID.machineEnergyGeneratorGeothermal, 
	count: 1, 
	data: 0
}, [
	"bcb",
	"bab",
	"bbb"
], [
	'a', BlockID.blockMachineIron,0,
	'b',49,0,
	'c',325,0
]);

var ui_geothermal= new UI.StandartWindow({
	standart: {
		header: {
			text:{
				text: "Geothermal Generator / Геотермальный генератор"
			},
		},
		inventory: {
			standart: true
		}, 
		background: { 
			standart: true 
		}
	},
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6},
		{type: "bitmap", x: 510, y: 100, bitmap: "thermal.ground", scale: 3.6},
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements:{
		"slot1": {type: "slot", x: 620, y: 121, size: 85},
		"slot2": {type: "slot", x: 620, y: 255, size: 85},
		"liquidScale":{type:"scale",x:350,y:50,bitmap:"liquid.lava",direction:1,scale:2.6},
		"term":{type:"scale",x:510,y:100,bitmap:"thermal.scale",direction:1,scale:3.6},
		"FillText":{type: "text", x: 520, y:60 , text: "0/16 of lava", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
		"termText":{type: "text", x: 520, y:30 , text: "0/200 °C", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyGeneratorGeothermal, {
	getGuiScreen: function(){
		return ui_geothermal
	},
	init: function(){
		this.liquidStorage.setLimit("lava", 16);
		if(!this.data.term)this.data.term=0;
	},
	getTransportSlots: function(){
		return {input: ["slot1"], output: ["slot2"]};
	},
	
	canFill:{lava:true},

	getTransportLiquids: function(){
		return {input: ["lava"]}
	},

	tick: function(){
		if(!this.data.act){this.liquidStorage.addLiquid("lava", 0.000001);this.data.act=1}
	
		var content = this.container.getGuiContent(); 
		try{
			content.elements["FillText"].text=Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))+"/16 of lava";
			content.elements["termText"].text=Math.round(this.data.term)+"/"+200+" °C";
		}catch(e){}
		FactAPI.liquid.fluidContainerEmpty("lava", this, {full:"slot1",empty:"slot2"})
		try{
		this.container.setScale("liquidScale",this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())/16);
		this.container.setScale("term",this.data.term/200);
		}catch(e){}
		if(this.data.term>=0.1)this.data.term-=0.1;
		if(this.data.term>160){
			this.data.mod=1
		}else{
			this.data.mod=0;
		}
	},
	isGenerator: function() {
		return true;
	},
	isBuild:function(){
		for(var x=0;x<5;x++){
			for(var z=0;z<5;z++){
				if(World.getBlockID(this.x-2+x,this.y-4,this.z-2+z)!=49)return false
				if(World.getBlockID(this.x-2+x,this.y-1,this.z-2+z)!=4)return false
			}
		}
		for(var x=0;x<3;x++){
			for(var z=0;z<3;z++){
				if(World.getBlockID(this.x-1+x,this.y-3,this.z-1+z)!=11)return false
				if(World.getBlockID(this.x-1+x,this.y-2,this.z-1+z)!=0)return false
			}
		}
		for(var x=0;x<5;x++){
			if(World.getBlockID(this.x-2+x,this.y-3,this.z-2)!=49)return false
			if(World.getBlockID(this.x-2+x,this.y-2,this.z-2)!=20)return false
			if(World.getBlockID(this.x-2+x,this.y-3,this.z+2)!=49)return false
			if(World.getBlockID(this.x-2+x,this.y-2,this.z+2)!=20)return false
		}
		for(var z=0;z<5;z++){
			if(World.getBlockID(this.x-2,this.y-3,this.z-2+z)!=49)return false
			if(World.getBlockID(this.x-2,this.y-2,this.z-2+z)!=20)return false
			if(World.getBlockID(this.x+2,this.y-3,this.z-2+z)!=49)return false
			if(World.getBlockID(this.x+2,this.y-2,this.z-2+z)!=20)return false
		}
		return true
	},
	energyTick:function(type,src){
		a=this.isBuild();
		if(a){
			if(this.data.term<200-0.2)this.data.term+=0.2;
			src.add(6+1+this.data.mod);
			return
		}
		if(this.liquidStorage.getAmount("lava") >= 0.001){
			if(this.data.term<200-0.2)this.data.term+=0.2;
			src.add(6+this.data.mod);
			this.liquidStorage.addLiquid("lava", -0.001);
		}
	}
},{
	item:true,
	liquid:true
});