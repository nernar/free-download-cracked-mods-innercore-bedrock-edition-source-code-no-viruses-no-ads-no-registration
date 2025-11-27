Translation.addTranslation("Nuclear Reactor", {
	ru: "Ядерный реактор"
});

var ReactorNuclear_texture="block_energy_reactor";
if(Options.theme){
	ReactorNuclear_texture="light_reactor";
}

IDRegistry.genBlockID("machineEnergyNuclearReactor");
Block.createBlock("machineEnergyNuclearReactor", [
	{
		name: "Nuclear Reactor",
		texture: [
			[ReactorNuclear_texture,0],
			[ReactorNuclear_texture, 0],
			[ReactorNuclear_texture,1],
			[ReactorNuclear_texture,1],
			[ReactorNuclear_texture,1],
			[ReactorNuclear_texture,1]
		],
		inCreative: true
	}
],"opaque");

var ui_reactor= new UI.StandartWindow({
	standart: {
		header: {
			text:{
				text: "Nuclear Reactor / Ядерный реактор"
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
		{type: "bitmap", x: 470, y: 100, bitmap: "thermal.ground", scale: 3.6},
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements:{
		//scales
		"waterScale":{type:"scale",x:350,y:50,bitmap:"liquid.water",direction:1,scale:2.6},
		"thermScale":{type:"scale",x:470,y:100,bitmap:"thermal.scale",direction:1,scale:3.6},
		
		//text
		"thermText":{type: "text", x: 470, y:30 , text: "0/2000 °C", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
		"fillText":{type: "text", x: 470, y:60 , text: "0/16 of water", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
		"outText":{type: "text", x: 700, y:60 , text: "0 E/T", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
		
		
		//slots
		"slot1": {type: "slot", x: 540, y: 100, size: 70},
		"slot2": {type: "slot", x: 610, y: 100, size: 70},
		"slot3": {type: "slot", x: 680, y: 100, size: 70},
		"slot4": {type: "slot", x: 750, y: 100, size: 70},
		"slot5": {type: "slot", x: 820, y: 100, size: 70},
		
		"slot7": {type: "slot", x: 540, y: 170, size: 70},
		"slot8": {type: "slot", x: 610, y: 170, size: 70},
		"slot9": {type: "slot", x: 680, y: 170, size: 70},
		"slot10": {type: "slot", x: 750, y: 170, size: 70},
		"slot11": {type: "slot", x: 820, y: 170, size: 70},
		
		"slot13": {type: "slot", x: 540, y: 240, size: 70},
		"slot14": {type: "slot", x: 610, y: 240, size: 70},
		"slot15": {type: "slot", x: 680, y: 240, size: 70},
		"slot16": {type: "slot", x: 750, y: 240, size: 70},
		"slot17": {type: "slot", x: 820, y: 240, size: 70},
		
		"slot19": {type: "slot", x: 540, y: 310, size: 70},
		"slot20": {type: "slot", x: 610, y: 310, size: 70},
		"slot21": {type: "slot", x: 680, y: 310, size: 70},
		"slot22": {type: "slot", x: 750, y: 310, size: 70},
		"slot23": {type: "slot", x: 820, y: 310, size: 70},
		
		"slot25": {type: "slot", x: 540, y: 380, size: 70},
		"slot26": {type: "slot", x: 610, y: 380, size: 70},
		"slot27": {type: "slot", x: 680, y: 380, size: 70},
		"slot28": {type: "slot", x: 750, y: 380, size: 70},
		"slot29": {type: "slot", x: 820, y: 380, size: 70},
	}
});

Recipes.addShaped({id: BlockID.machineEnergyNuclearReactor, count: 1, data: 0}, [
	"#b#",
	"#a#",
	"#c#"
], ['a', BlockID.blockReactorController,0,'b',235,0,'c',54,0]);

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyNuclearReactor,{
	
	defaultValues: {
		therm:0,
		toWater:0
	},
	
	init:function(){
		this.liquidStorage.setLimit("water",16);
	},
	created:function(){
		this.liquidStorage.addLiquid("water",0.000001);
	},
	canFill: {water:true},
	
	getGuiScreen: function(){
		return ui_reactor
	},
	
	updateReactor: function(){
		var hot = 0;
		var cold = 0;
		var toWater = 0;
		for(var i = 1;i<30;i++){
			try{
			
			var slot = this.container.getSlot("slot"+i);
			
			var slotB1=this.container.getSlot("slot"+(i-1));
			var slotB2=this.container.getSlot("slot"+(i-6));
			var slotN1=this.container.getSlot("slot"+(i+1));
			var slotN2=this.container.getSlot("slot"+(i+6));
			
			var fuel = FactAPI.Reactor.isFuel(slot.id);
			if(fuel){
				hot+=fuel.therm;
				slot.data++;
				//нагрев
				if(slotB1.id==slot.id)hot+=fuel.therm;
				if(slotB2.id==slot.id)hot+=fuel.therm;
				if(slotN1.id==slot.id)hot+=fuel.therm;
				if(slotN2.id==slot.id)hot+=fuel.therm;
				
				//обогащение
				if(slotB1.id==fuel.depleted){
					slotB1.data-=fuel.therm;
					if(slotB1.data<=0)slotB1.id=slot.id
				}
				if(slotB2.id==fuel.depleted){
					slotB2.data-=fuel.therm;
					if(slotB2.data<=0)slotB2.id=slot.id
				}
				if(slotN1.id==fuel.depleted){
					slotN1.data-=fuel.therm;
					if(slotN1.data<=0)slotN1.id=slot.id
				}
				if(slotN2.id==fuel.depleted){
					slotN2.data-=fuel.therm;
					if(slotN2.data<=0)slotN2.id=slot.id
				}
				
				//истощение
				slot.data+=fuel.therm;
				if(slot.data>=Item.getMaxDamage(slot.id)){
					slot.id=fuel.depleted;
					slot.data=Item.getMaxDamage(slot.id)-1;
				}
			}
			if(slot.id==ItemID.circuitCooling){
				var c1 = FactAPI.Reactor.isCoolant(slotB1.id);
				var c2 = FactAPI.Reactor.isCoolant(slotB2.id);
				var c3 = FactAPI.Reactor.isCoolant(slotN1.id);
				var c4 = FactAPI.Reactor.isCoolant(slotN2.id);
				if(c1){
					slotB1.data+=c1;
					cold+=c1;
				}
				if(c2){
					slotB2.data+=c2;
					cold+=c2;
				}
				if(c3){
					slotN1.data+=c3;
					cold+=c3;
				}
				if(c4){
					slotN2.data+=c4;
					cold+=c4;
				}
				if(slotB1.id==ItemID.ventCooling)cold+=4;
				if(slotB2.id==ItemID.ventCooling)cold+=4;
				if(slotN1.id==ItemID.ventCooling)cold+=4;
				if(slotN2.id==ItemID.ventCooling)cold+=4;
				
				if(slotB1.id==ItemID.ventCoolingAdvanced)cold+=8;
				if(slotB2.id==ItemID.ventCoolingAdvanced)cold+=8;
				if(slotN1.id==ItemID.ventCoolingAdvanced)cold+=8;
				if(slotN2.id==ItemID.ventCoolingAdvanced)cold+=8;
				
				if(slotB1.id==ItemID.circuitHeating)toWater++;
				if(slotB2.id==ItemID.circuitHeating)toWater++;
				if(slotN1.id==ItemID.circuitHeating)toWater++;
				if(slotN2.id==ItemID.circuitHeating)toWater++;
				this.container.validateAll();
			}
			
			}catch(e){print(e)}
		}
		return {
			hot:hot,
			cold:cold,
			toWater: toWater
		}
	},
	
	tick: function(){
		if(!this.data.therm)this.data.therm=0;
		
		var reactor = this.updateReactor();
		var content = this.container.getGuiContent();
		
		this.container.setScale("waterScale", this.liquidStorage.getAmount("water")/16);
		this.container.setScale("thermScale", this.data.therm/20000);
		
		try{
			content.elements["fillText"].text=Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))+"/16 of water";
			content.elements["thermText"].text=Math.round(this.data.therm/10)+"/"+2000+" °C";
		}catch(e){}
		
		this.data.therm+=0.1*(reactor.hot-reactor.cold)
		this.data.toWater=0.9*(reactor.hot)>0?0.9*(reactor.hot):0
		
		if(this.liquidStorage.getAmount("water")<0.001){
			this.data.therm+=0.9*(reactor.hot-reactor.cold)*reactor.toWater
			this.data.toWater=0
		}
		
		if(this.data.therm>=20000){
			World.destroyBlock(this.x,this.y,this.z);
			Level.explode(this.x,this.y,this.z,20,true)
		}
		
		if(this.data.toWater>10)this.liquidStorage.getLiquid("water",0.001);
		if(!this.isBuild()&&this.liquidStorage.getAmount("water")>0.01)this.liquidStorage.getLiquid("water",0.01);
	},
	
	energyTick: function(type,src){
		if(this.data.toWater>0){
			//this.data.toWater>100?this.data.toWater=100:null;
			src.add(this.data.toWater)
			var content = this.container.getGuiContent();
			try{
				content.elements["outText"].text="out: " + Math.round(this.data.toWater)+" E/T";
			}catch(e){}
		}
	},
	
	isBuild:function (){
		for(var x = -2;x<3;x++){
			for(var z = -2;z<3;z++){
				if(World.getBlockID(this.x+x,this.y-5,this.z+z)!=BlockID.reinforcedStone)return false
			}
		}
		for(var x = -1;x<2;x++){
			for(var z = -1;z<2;z++){
				if(World.getBlockID(this.x+x,this.y-1,this.z+z)!=BlockID.blockReactorController)return false
			}
		}
		for(var z = -2;z<3;z++){
			for(var y = -4;y<0;y++){
				if(World.getBlockID(this.x-2,this.y+y,this.z+z)!=BlockID.reinforcedStone)return false
				if(World.getBlockID(this.x+2,this.y+y,this.z+z)!=BlockID.reinforcedStone)return false
				if(World.getBlockID(this.x+z,this.y+y,this.z-2)!=BlockID.reinforcedStone)return false
				if(World.getBlockID(this.x+z,this.y+y,this.z+2)!=BlockID.reinforcedStone)return false
			}
		}
		return true
	}
},{liquid:true});