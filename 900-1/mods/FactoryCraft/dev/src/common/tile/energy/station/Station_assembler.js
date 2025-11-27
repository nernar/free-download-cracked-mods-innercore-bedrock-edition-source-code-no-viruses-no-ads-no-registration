Translation.addTranslation("Assembler Station", {
    ru: "Сборочная станция"
});

var assembler_texture={
	top:"block_energy_assembler",
	bottom:"block_machine_steel",
	side:"block_energy_assembler"
}

if(Options.theme){
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

Recipes.addShaped({
    id: BlockID.machineEnergyStationAssembler, 
    count: 1, 
    data: 0
}, [
    "#e#",
    "cbc",
    "#a#"
], [
    'a', BlockID.blockMachineIron,0,
    'b', 58,0,
    'c', ItemID.gearDiamond,0,
    'e', ItemID.factoryBattery,0
]);

var UI_energy_assembler = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Assembler Station/Сборочная станция"
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
        
        "slotInput": {type: "slot", x: 850, y: 90, size: 70,clicker:{
			onClick:function(position, container, tileEntity){
                return;
			},
			onLongClick: function(position, container, tileEntity){
				this.onClick(position, container, tileEntity);
			}
		}},
    
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
    defaultValues:{
        time:200,
        progress:0
    },
    getGuiScreen:function(){
        return UI_energy_assembler
    },
    getTransportSlots:function(){
        var s = [];
        for(var i =1;i<=10;i++)s.push("slotI"+i);
        return {input:s,output:["slotResult"]}
    },
	getEnergyStorage:function(){
		return 10000
	},
	energyTick:FactAPI.machine.basicEnergyStorage,

    tick:function(){
    	if(!this.data.progress){this.data.progress=0;this.data.time=200}
        var res = Recipes.getRecipeResult(this.container);
		if(res){
			this.container.setSlot("slotInput", res.id, res.count, res.data);
		}else{
			this.container.setSlot("slotInput", 0, 0, 0);
        }
        
        this.container.setScale("progressScale",this.data.progress/this.data.time);
		this.container.setScale("energyScale",this.data.energy/10000);

        var resultSlot = this.container.getSlot("slotResult");
       
        var craft = this.canCraft();
        
        if(craft&&res&&this.data.energy>=5&&((res.id==resultSlot.id&&res.data==resultSlot.data&&resultSlot.count<64-res.count)||resultSlot.id==0)){
           	
           	this.data.energy-=5;
            this.data.progress++;
         	if(this.data.progress>=this.data.time){
                resultSlot.id=res.id;
                resultSlot.data=res.data;
                resultSlot.count+=res.count;
            
                for(var i in craft){
                   	var it=craft[i];
                   	FactAPI.machineContainer.giveItemFromContainer(this.container,{id:it.id,data:it.data,count:it.count},11,"I");
              	}
                
               	this.container.validateAll();
                this.data.progress=0;
            }
        }
        else{
            this.data.progress=0
        }
    },


    canCraft:function(){
        var ingredients={}
        for(var i = 0;i<9;i++){
            var slot = this.container.getSlot("slot"+i);
            if(slot.id!=0)ingredients[slot.id+":"+slot.data]={id:slot.id,data:slot.data,count:this.getNativeCount(slot.id,slot.data)}
            if(slot.id!=0&&!FactAPI.machineContainer.isItemInContainer(this.container,{id:slot.id,data:slot.data,count:this.getNativeCount(slot.id,slot.data)},11,"I"))return false;
        }
        return ingredients;
    },

    getNativeCount:function(id,data){
        var count=0;
        for(var i =0;i<9;i++){
            var slot=this.container.getSlot("slot"+i);
            if(slot.id==id&&slot.data==data)count++;
        }
        return count
    }
},{item:true})