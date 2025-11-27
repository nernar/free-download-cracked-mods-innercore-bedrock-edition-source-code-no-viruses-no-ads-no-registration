Translation.addTranslation("Pump", {
	ru: "Помпа"
});

var pump_texture={
	top:"block_machine_iron",
	bottom:"block_machine_iron",
	side:"block_energy_pump"
}

if(Options.theme){
	pump_texture.side="light_pump_side";
	pump_texture.top="light_pump_top";
	pump_texture.bottom="light_pump_bottom";
}


IDRegistry.genBlockID("machineEnergyLiquidPump");
Block.createBlock("machineEnergyLiquidPump", [
	{
		name:"Pump",
		texture: [
			[pump_texture.bottom,0],
			[pump_texture.top, 0],
			[pump_texture.side,0],
			[pump_texture.side,0],
			[pump_texture.side,0],
			[pump_texture.side,0]
		], 
		inCreative: true
	}
],"opaque");

Recipes.addShaped({id: BlockID.machineEnergyLiquidPump, count: 1, data: 0}, [
	" e ",
	" b ",
	" a "
], [
	'a', 325,0,
	'b', BlockID.blockMachineIron,0,
	'e', ItemID.factoryBattery,0
]);

var UI_energy_pump= new UI.StandartWindow({
	standart: {
		header: {
			text:{
				text: "Pump / Помпа"
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
		{type: "bitmap", x: 350, y: 50, bitmap: "liquid.ground", scale: 2.6}
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements:{
		"slot1": {type: "slot", x: 620, y: 121, size: 85},
		"slot2": {type: "slot", x: 620, y: 255, size: 85},
		"liquidScale":{type:"scale",x:350,y:50,bitmap:"liquid.water",direction:1,scale:2.6},
		"FillText":{type: "text", x: 520, y:60 , text: "0/16 of none", height: 60 , width:400, font:{color:android.graphics.Color.rgb(0, 0,0), size:18, shadow:0.1}},
	}
});

FactAPI.machine.registerEnergyTile(BlockID.machineEnergyLiquidPump,{
	energyTick:FactAPI.machine.basicEnergyStorage,
	getEnergyStorage:function(){
		return 100
	},
getGuiScreen:function(){return UI_energy_pump},
	getTransportSlots: function(){
		return {input:["slot1"],output:["slot2"]}
	},

	tick:function(){
		
		var slot1 = this.container.getSlot("slot1");
		var slot2 = this.container.getSlot("slot2");
		var full = LiquidRegistry.getFullItem(slot1.id, slot1.data, this.liquidStorage.getLiquidStored());
		if(full && this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()) >= 1 && (slot2.id == full.id && slot2.data == full.data && slot2.count < Item.getMaxStack(full.id, full.data) || slot2.id == 0)){
			this.liquidStorage.getLiquid(this.liquidStorage.getLiquidStored(), 1);
			slot1.count--;
			slot2.id = full.id;
			slot2.data = full.data;
			slot2.count++;
			this.container.validateAll();
		}

		var lq = {water:true,lava:true};

		var content = this.container.getGuiContent(); 
		try{
			content.elements["FillText"].text=Math.round(this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))+"/16 of "+this.liquidStorage.getLiquidStored();
			content.elements["liquidScale"].bitmap="liquid."+(lq[this.liquidStorage.getLiquidStored()]?this.liquidStorage.getLiquidStored():"water");
		}catch(e){}
		
		this.container.setScale("liquidScale",this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())/16)

		if(World.getThreadTime()%20==0&&this.data.energy>=20){
			var empty = (this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored())<16)||this.liquidStorage.isEmpty();
			if(empty){
				var id = World.getBlockID(this.x,this.y-1,this.z);
				if(id==8||id==9){
					World.setBlock(this.x,this.y-1,this.z,0,0);
					this.liquidStorage.addLiquid("water",1);
					this.data.energy-=20;
					return;
				}
				if(id==10||id==11){
					World.setBlock(this.x,this.y-1,this.z,0,0);
					this.liquidStorage.addLiquid("lava",1);
					this.data.energy-=20;
					return;
				}
				var container = World.getContainer(this.x,this.y-1,this.z);
				if(container&&container.tileEntity){
					var tile = container.tileEntity;
					if(tile.canExtract&&tile.liquidStorage.getAmount(tile.liquidStorage.getLiquidStored())>=1&&(tile.liquidStorage.getLiquidStored()==this.liquidStorage.getLiquidStored()||this.liquidStorage.isEmpty())){
						tile.liquidStorage.getLiquid(tile.liquidStorage.getLiquidStored(),1);
						this.liquidStorage.addLiquid(tile.liquidStorage.getLiquidStored(),1);
						this.data.energy-=20;
						return;
					}
				}
			}
		}
	},
	
	canExtract:{water:true,lava:true,fuel:true,oil:true,milk:true}
},{liquid:true});