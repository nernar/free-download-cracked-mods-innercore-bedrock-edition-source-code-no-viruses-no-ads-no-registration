ModAPI.addAPICallback("ICore", function(api){
let ICore = api

let iFuelEffPct = Config.indFurnaceFuelEff
let iRecipesEffPct = Config.indFurnaceRecEff
let iTimer = Config.indFurnaceTimer

let IrEff = 80
let StEff = 110
let ChEff = 150

IDRegistry.genBlockID("IndustrialFurnace");
Block.createBlockWithRotation("IndustrialFurnace", [
	{name: "Industrial Furnace", texture: [
["adv_machine_fire", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ], ["adv_machine_screen_d", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ]
], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.IndustrialFurnace, "stone");
Block.setDestroyLevel(BlockID.IndustrialFurnace, 3);
ToolAPI.registerBlockMaterial(BlockID.IndustrialFurnace, "stone", 3, true);
ICore.Render.setStandartModel(BlockID.IndustrialFurnace, [["adv_machine_fire", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ], ["adv_machine_screen_d", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ]], true)
ICore.Render.registerRenderModel(BlockID.IndustrialFurnace, 0, [["adv_machine_fire", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ], ["adv_machine_screen_e", 0], [ "adv_machine_fire", 0 ], [ "adv_machine_fire", 0 ]], true)
	
Block.registerDropFunction("IndustrialFurnace", function(coords, id, data, level){ 
	if(level>=2){
		return [[id, 1, data]]
	}
	return []
})

let industrialfurnacestruct =[[
[1, 0, 1, [irsh, stsh, chsh]],
[1, 0, 0, [irsh, stsh, chsh]],
[1, 0, -1, [irsh, stsh, chsh]],

[2, 0, 2, -1],
[2, 0, 1, [irsh, stsh, chsh]],
[2, 0, 0, [irsh, stsh, chsh]],
[2, 0, -1, [irsh, stsh, chsh]],
[2, 0, -2, -1],

[3, 0, 1, [irsh, stsh, chsh]],
[3, 0, 0, [irsh, stsh, chsh]],
[3, 0, -1, [irsh, stsh, chsh]],

[4, 0, 0, -1],

[1, 1, 1, [irsh, stsh, chsh]],
[1, 1, 0, [irsh, stsh, chsh]],
[1, 1, -1, [irsh, stsh, chsh]],

[2, 1, 1, [irsh, stsh, chsh]],
[2, 1, 0, [0, 11]],
[2, 1, -1, [irsh, stsh, chsh]],

[3, 1, 1, [irsh, stsh, chsh]],
[3, 1, 0, [irsh, stsh, chsh]],
[3, 1, -1, [irsh, stsh, chsh]],

[1, 2, 1, [irsh, stsh, chsh]],
[1, 2, 0, [irsh, stsh, chsh]],
[1, 2, -1, [irsh, stsh, chsh]],

[2, 2, 1, [irsh, stsh, chsh]],
[2, 2, 0, [irsh, stsh, chsh]],
[2, 2, -1, [irsh, stsh, chsh]],

[3, 2, 1, [irsh, stsh, chsh]],
[3, 2, 0, [irsh, stsh, chsh]],
[3, 2, -1, [irsh, stsh, chsh]]
]]

let ifguicon = {
	standart: {
		header:{
			text:{
				text: "Промышленная печь"
			}
		},
		inventory: {standart: true},
		background: {standart:true}
	},
	drawing: [
	    {type: "bitmap", bitmap:"energy_bar_background", x:346, y:340, scale:3},
		{type: "bitmap", bitmap:"fire_background", x:436, y:280, scale:3},
		{type: "bitmap", bitmap:"furnace_bar_background", x:460, y:200, scale: 4},
		{type: "bitmap", bitmap:"furnace_bar_background", x:610, y:200, scale: 4},
		{type: "bitmap", bitmap:"InfoBG_2", x:480, y:92, scale: 3.2}
	],
	elements:{
		"slot1":{type: "slot", x: 330, y: 200, size:60},
		"slot2":{type: "slot", x: 390, y: 200, size:60},
		"slot3":{type: "slot", x: 550, y:200, size:60, visual:true, bitmap:"geothermal_liquid_slot"},
		"slot4":{type: "slot", x: 700, y: 200, size:60},
		"slot5":{type: "slot", x: 760, y: 200, size:60},
		"slot6":{type: "slot", x: 360, y: 270, size:60},
		"progbar1":{type: "scale", x:460, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
		"progbar2":{type: "scale", x:610, y:200, direction:0, bitmap: "furnace_bar_scale", scale:4},
		"fire":{type: "scale", x:436, y:280, direction:1, bitmap: "fire_scale", scale:3},
		"temp":{type: "text", x:480, y:300, width:30, height:10, text: ""},
		"struct":{type: "text", x:500, y:120, width:30, height:10, text: ""},
		"sec":{type: "text", x:500, y:100, width:8, height:3, text: ""},
        "needTemp":{type: "text", x:500, y:120, width:8, height:3, text: ""},
        "secLeft":{type: "text", x:500, y:140, width:8, height:3, text: ""},
        "result":{type: "text", x:500, y:160, width:8, height:3, text: ""},
        "energy":{type: "scale", x:346 + 3.2 * 4, y:340, direction:0, bitmap: "energy_bar_scale", scale:3},
        "energyText":{type: "text", x:450, y:360, width:8, height:3, text: ""},
		}
}

let ifgui = new UI.StandartWindow(ifguicon);

let industrialfurnacecon = {
    defaultValues: {
    	energy_storage: 100000,
        progress1:0,
        prog1end:0,
        progress2:0,
        prog2end:0,
        fire:0, 
        burn:1,
        temp:0,
        lava:0,
        keys:0,
        result1:0,
        result2:0,
        maxTemp:0,
        fuelEff:0,
        needTemp:0,
        ir:0,
        st:0,
        ch:0,
        lv:0,
        timer: 0,
	},
    container:ifgui,
    click: function(){
    	Game.prevent()
    
        this.container.openAs(ifgui)
        //Game.message("Duck")
       /*let key = this.data.MAPIkey
        let m = this
        let side = 0
        let bl = 0
        //for(let side in MAPI.multiblocks[key].struc){
        	bl=0
            //Game.message(side);
            for(let keyi in MAPI.multiblocks[key].struc[side]){ 
            	World.setBlock(m.x+MAPI.multiblocks[key].struc[side][keyi][0], m.y+MAPI.multiblocks[key].struc[side][keyi][1], m.z+MAPI.multiblocks[key].struc[side][keyi][2], MAPI.multiblocks[key].struc[side][keyi][3])
            }
        //}         */         	
    },
    
    calcTemp: function(a){
    	if(World.getBlockID(this.x+a[0], this.y+a[1], this.z+a[2]) == a[3][0]){
            this.data.ir++
        }if(World.getBlockID(this.x+a[0], this.y+a[1], this.z+a[2]) == a[3][1]){
            this.data.st++
        }if(World.getBlockID(this.x+a[0], this.y+a[1], this.z+a[2]) == a[3][2]){
            this.data.ch++
        }if(World.getBlockID(this.x+a[0], this.y+a[1], this.z+a[2]) == 11){
            this.data.lv++
        }
    },
    
    checkSheathingTemp: function(){
    	this.data.ir = 0
        this.data.st = 0
        this.data.ch = 0
        this.data.lv = 0
        //let i = 0
        let m = MAPI.multiblocks[this.data.MAPIkey]
        for(let key in m.struc[this.data.MAPIside]){ 
        	let a = m.struc[this.data.MAPIside][key]
            if(MAPI.strongIf(a, this)){ 
                this.calcTemp(a)
                //alert(i)
            }
        }
    },
    
    tick: function(){

	    let sourseSlot1 = this.container.getSlot("slot1");
		let sourseSlot2 = this.container.getSlot("slot2");
		let resultSlot1 = this.container.getSlot("slot4");
		let resultSlot2 = this.container.getSlot("slot5");
		let metallSlot = this.container.getSlot("slot3");
		let fuelSlot = this.container.getSlot("slot6");
	    
	    //alert(this.data.MAPIact)
         if(this.data.MAPIact==true){
         	
            this.activate()
            
            if(this.data.MAPIbl == MAPI.multiblocks[this.data.MAPIkey].struc[this.data.MAPIside].length){
            	this.checkSheathingTemp()
            	this.data.maxTemp = this.data.ir * IrEff + this.data.st * StEff + this.data.ch * ChEff + this.data.lv * 350
            }
            
            let RecipesEffPct = round(this.data.maxTemp/15, 0)
            
            this.container.setText("struct", "");
			//Game.message(this.data.fuel.length);
			if(fuelSlot.id > 0 && Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data) && !LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) && this.data.fire==0){
			    fuelSlot.count--;
				this.data.fire=Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data)
				this.data.burn=this.data.fire;
				this.data.fuelEff=4
				this.container.validateAll()
				//Game.message(this.data.fuelEff)
			}
			if(this.data.fire>0 && this.data.energy >= 128){
				this.data.timer = 0
				this.data.energy-=128
				this.data.fire--;
				this.data.temp+=this.data.fuelEff
			}
	
			if(this.data.temp>this.data.maxTemp){
				this.data.temp=this.data.maxTemp;
			}

			for(let key in furnaceRecipes){
				if(
				furnaceRecipes[key].sS1[0]==sourseSlot1.id 
				&& 
				furnaceRecipes[key].sS1[1]<=sourseSlot1.count &&
				furnaceRecipes[key].sS1[2]==sourseSlot1.data
				&&
				furnaceRecipes[key].sS2[0]==sourseSlot2.id 
				&& 
				furnaceRecipes[key].sS2[1]<=sourseSlot2.count &&
				furnaceRecipes[key].sS2[2]==sourseSlot2.data
				&&
				this.data.lava==0
				&&
				this.data.prog1end==0
				&&
				this.data.temp>=furnaceRecipes[key].temp){
					sourseSlot1.count-=furnaceRecipes[key].sS1[1];
					sourseSlot2.count-=furnaceRecipes[key].sS2[1];
					this.data.prog1end=round(furnaceRecipes[key].long*20/ 1.33 / RecipesEffPct * 100, 1)
					this.data.keys=key
					this.data.needTemp = furnaceRecipes[key].temp
					this.container.validateAll();
				    //Game.message(round(furnaceRecipes[key].long*20/ 1.33 / 100 * RecipesEffPct, 1))
				}else if(
                furnaceRecipes[key].sS1[0]==sourseSlot1.id 
				&& 
				furnaceRecipes[key].sS1[1]<=sourseSlot1.count &&
				furnaceRecipes[key].sS1[2]==sourseSlot1.data
				&&
				furnaceRecipes[key].sS2[0]==sourseSlot2.id 
				&& 
				furnaceRecipes[key].sS2[1]<=sourseSlot2.count &&
				furnaceRecipes[key].sS2[2]==sourseSlot2.data
				&&
				this.data.lava==0
				&&
				this.data.prog1end==0){
				    this.container.setText("sec", "Time: "+round(furnaceRecipes[key].long / RecipesEffPct * 100, 1))
			        this.container.setText("needTemp", "Need temp: "+furnaceRecipes[key].temp);
			        this.container.setText("result", "Result: "+Item.getName(furnaceRecipes[key].rS1[0], furnaceRecipes[key].rS1[1]));
			        break
			    }
			}
		   if(this.data.progress1<this.data.prog1end &&
                this.data.temp>=this.data.needTemp &&this.data.lava==0){
                this.data.progress1++;
            }
           if(this.data.prog1end<=this.data.progress1&&this.data.lava==0&&this.data.prog1end>0){
                this.data.lava=1;
                this.data.prog2end=round(furnaceRecipes[this.data.keys].long*20 / RecipesEffPct * 100 - this.data.prog1end, 1)
                //Game.message(this.data.prog1end)
                //Game.message(this.data.prog2end)
            }
            if(this.data.progress2<this.data.prog2end &&
                this.data.temp>=this.data.needTemp &&this.data.lava==1){
                this.data.progress2++;
                
            }
    
			if(this.data.prog2end<=this.data.progress2&&this.data.lava==1&&this.data.prog2end>0&&
			(resultSlot1.id==0||resultSlot1.id==furnaceRecipes[this.data.keys].rS1[0])&&
			(resultSlot2.id==0||resultSlot2.id==furnaceRecipes[this.data.keys].rS2[0])&&
            (resultSlot1.count==0||resultSlot1.count<64-furnaceRecipes[this.data.keys].rS1[1])&&
			(resultSlot2.count==0||resultSlot2.count<64-furnaceRecipes[this.data.keys].rS2[1]) ){
				resultSlot1.id = furnaceRecipes[this.data.keys].rS1[0]
				resultSlot1.count += furnaceRecipes[this.data.keys].rS1[1]
				resultSlot1.data = furnaceRecipes[this.data.keys].rS1[2]
				resultSlot2.id = furnaceRecipes[this.data.keys].rS2[0]
				resultSlot2.count += furnaceRecipes[this.data.keys].rS2[1]
				resultSlot2.data = furnaceRecipes[this.data.keys].rS2[2]
				this.data.lava=0;
				this.data.progress1=0;
				this.data.progress2=0;
				this.data.prog1end=0;
				this.data.prog2end=0;
				this.container.validateAll();
			}
			
			if(this.data.prog1end > 0){
			    this.container.setText("secLeft", "Left time: "+round((furnaceRecipes[this.data.keys].long *20 / RecipesEffPct * 100-this.data.progress1-this.data.progress2)/20, 1));
			}else{
				this.container.setText("secLeft", "Left time: ");
		    }
			
			if(this.data.progress1 > 0){
		        this.container.setText("sec", "Time: "+round(furnaceRecipes[this.data.keys].long / RecipesEffPct * 100, 1))
			    this.container.setText("needTemp", "Need temp: "+furnaceRecipes[this.data.keys].temp);
			    this.container.setText("result", "Result: "+Item.getName(furnaceRecipes[this.data.keys].rS1[0], furnaceRecipes[this.data.keys].rS1[1]));
			}else if(sourseSlot1.id==0 && sourseSlot2.id==0){
			    this.container.setText("sec", "Time: ");
			    this.container.setText("needTemp", "Need temp: ");
			    this.container.setText("result", "Result: ");
			}
			
	    }else{
		    this.data.maxTemp = 0
		    this.deactivate()
            this.data.fire=0; 
            this.container.setText("struct", "Incorrect struct");
            this.container.setText("sec", "");
			this.container.setText("needTemp", "");
			this.container.setText("result", "");
			this.container.setText("secLeft", "");
        }
	
	    if(this.data.fire==0 && this.data.timer < iTimer * 20){
			this.data.timer++;
		}
		if(this.data.timer == iTimer * 20 && this.data.temp>0){
			this.data.temp--
		}

		if(this.data.lava==1){
			metallSlot.id=lava;
			metallSlot.count=1;
		}else{
			metallSlot.id=0;
			metallSlot.count=0
		}

		this.container.setScale("fire", this.data.fire/this.data.burn);
		this.container.setText("temp", "t: "+Math.floor(this.data.temp)+" / "+this.data.maxTemp+" C");
		this.container.setScale("progbar1", this.data.progress1/this.data.prog1end)
		this.container.setScale("progbar2", this.data.progress2/this.data.prog2end);
		
		this.container.setText("energyText", this.data.energy+" / "+this.data.energy_storage+" Eu")
	    this.container.setScale("energy", this.data.energy/this.data.energy_storage)
	},
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
	
	energyTick: function(type, src){
      let energyNeed = this.getEnergyStorage() - this.data.energy;
      this.data.energy += src.getAll(energyNeed);
   },
    init: ICore.Machine.initModel,
    activate: ICore.Machine.activateMachine,
    deactivate: ICore.Machine.deactivateMachine,
    destroy: function(){ this.deactivate; if(this.container.getSlot("slot3").id){ this.container.getSlot("slot3").id = this.container.getSlot("slot3").data = this.container.getSlot("slot3").count = 0 } }
}

MAPI.Rotate(industrialfurnacestruct);
MAPI.Register(industrialfurnacecon, industrialfurnacestruct);

ICore.Machine.registerPrototype(BlockID.IndustrialFurnace, industrialfurnacecon)


var IndustrialMaceratorRecipesEffPct = 600

IDRegistry.genBlockID("IndustrialMacerator");
Block.createBlockWithRotation("IndustrialMacerator", [
	{name: "Industrial Macerator", texture: [
["adv_machine_grinder", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ], ["adv_machine_screen_d", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ]
], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.IndustrialMacerator, "stone");
Block.setDestroyLevel(BlockID.IndustrialMacerator, 3);
ToolAPI.registerBlockMaterial(BlockID.IndustrialMacerator, "stone", 3, true);
ICore.Render.setStandartModel(BlockID.IndustrialMacerator, [["adv_machine_grinder", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ], ["adv_machine_screen_d", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ]], true)
ICore.Render.registerRenderModel(BlockID.IndustrialMacerator, 0, [["adv_machine_grinder", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ], ["adv_machine_screen_e", 0], [ "adv_machine_grinder", 0 ], [ "adv_machine_grinder", 0 ]], true)
	
Block.registerDropFunction("IndustrialMacerator", function(coords, id, data, level){ 
	return ICore.Machine.getMachineDrop(coords, id, level, BlockID.machineBlockBasic);
})

var industrialmaceratorstruct =[[
[1, 0, 1, [irsh]],
[1, 0, 0, [irsh]],
[1, 0, -1, [irsh]],

[2, 0, 2, -1],
[2, 0, 1, [irsh]],
[2, 0, 0, [irsh]],
[2, 0, -1, [irsh]],
[2, 0, -2, -1],

[3, 0, 1, [irsh]],
[3, 0, 0, [irsh]],
[3, 0, -1, [irsh]],

[4, 0, 0, -1],

[1, 1, 1, [stsh]],
[1, 1, 0, [stsh]],
[1, 1, -1, [stsh]],

[2, 1, 1, [stsh]],
[2, 1, 0, [0]],
[2, 1, -1, [stsh]],

[3, 1, 1, [stsh]],
[3, 1, 0, [stsh]],
[3, 1, -1, [stsh]],

[1, 2, 1, [irsh]],
[1, 2, 0, [irsh]],
[1, 2, -1, [irsh]],

[2, 2, 1, [irsh]],
[2, 2, 0, [irsh]],
[2, 2, -1, [irsh]],

[3, 2, 1, [irsh]],
[3, 2, 0, [irsh]],
[3, 2, -1, [irsh]]
]]

var imguicon = {
	standart: {
		header:{
			text:{
				text: "Industrial Macerator"
			}
		},
		inventory: {standart: true},
		background: {standart:true}
	},
	drawing: [
	    {type: "bitmap", x: 330, y: 275, bitmap: "energy_small_background", scale: 4},
	    {type: "bitmap", bitmap:"macerator_bar_background", x:460, y:200, scale: 4},
	    {type: "bitmap", bitmap:"InfoBG_2", x:480, y:92, scale: 3.2}
	],
	elements:{
		"slot1":{type: "slot", x: 330, y: 200, size:60},
		"cells":{type: "slot", x: 390, y: 200, size:60},
		"slot2":{type: "slot", x: 550, y:200, size:60},
		"slot3":{type: "slot", x: 610, y:200, size:60},
		"slot4":{type: "slot", x: 670, y:200, size:60},
		"slot5":{type: "slot", x: 730, y:200, size:60},
		"slot6":{type: "slot", x: 730, y:270, size:60},
		"progress":{type: "scale", x:460, y:200, direction:0, bitmap: "macerator_bar_scale", scale:4},
		"energy":{type: "scale", x:330, y:275, direction:1, bitmap: "energy_small_scale", scale:4},
		"energyText":{type: "text", x:500, y:100, width:30, height:10, text: ""},
		"struct":{type: "text", x:500, y:120, width:30, height:10, text: ""},
		"needEnergy":{type: "text", x:500, y:120, width:30, height:10, text: ""},
		"secLeft":{type: "text", x:500, y:140, width:30, height:10, text: ""},
		"energySec":{type: "text", x:500, y:160, width:30, height:10, text: ""},
		}
}

var imgui = new UI.StandartWindow(imguicon);
//UI.openUI(imgui)

var industrialmaceratorcon = {
	defaultValues: {
		energy_storage: 100000,
		level:10,
		progress:0, 
		end:0,
		key:0,
    },
	
	container: imgui,
    click: function(){
    	Game.prevent()
        this.container.openAs(imgui)
    },
	
	tick: function(){
		//alert(this.data.MAPIact)
		//alert(this.data.energy)
		//this.data.energy_storage = 10000;
		
		var sourseSlot = this.container.getSlot("slot1");
		var cells = this.container.getSlot("cells");
		var resultSlot1 = this.container.getSlot("slot2");
		var resultSlot2 = this.container.getSlot("slot3");
		var resultSlot3 = this.container.getSlot("slot4");
		var resultSlot4 = this.container.getSlot("slot5");
		var emptyCells = this.container.getSlot("slot6");
		
		if(this.data.MAPIact==true){
			this.activate()
			this.container.setText("struct", "");
			
			for(var key in maceratorRecipes){
				if(
				maceratorRecipes[key].sS[0]==sourseSlot.id && 
				maceratorRecipes[key].sS[1]<=sourseSlot.count &&
				maceratorRecipes[key].sS[2]==sourseSlot.data &&
				cells.id==ItemID.cellWater &&
				cells.data == 0 &&
				cells.count >= maceratorRecipes[key].lvl && 
				this.data.level>=maceratorRecipes[key].lvl &&
                this.data.end==0){
					sourseSlot.count-=maceratorRecipes[key].sS[1];
					cells.count-=maceratorRecipes[key].lvl
					this.data.end=round(maceratorRecipes[key].long*20/ IndustrialMaceratorRecipesEffPct * 100, 1)
					this.data.keys=key
					this.container.validateAll();
				}else if(
				maceratorRecipes[key].sS[0]==sourseSlot.id && 
				maceratorRecipes[key].sS[1]<=sourseSlot.count &&
				maceratorRecipes[key].sS[2]==sourseSlot.data &&
                this.data.end==0){
					this.container.setText("needEnergy", "Total energy: "+maceratorRecipes[key].lvl * 10 * maceratorRecipes[key].long+" Eu");
			        this.container.setText("energySec", "Eu/s: "+maceratorRecipes[key].lvl * 10);
				}
			}
			if(this.data.progress<this.data.end && this.data.energy > maceratorRecipes[this.data.keys].lvl * 10){
				this.data.progress++
				this.data.energy -= maceratorRecipes[this.data.keys].lvl * 10
			}
			if(this.data.end<=this.data.progress&&this.data.progress>0&&
			(resultSlot1.id==0||resultSlot1.id==maceratorRecipes[this.data.keys].rS1[0])&&
			(resultSlot2.id==0||resultSlot2.id==maceratorRecipes[this.data.keys].rS2[0])&&
            (resultSlot3.id==0||resultSlot3.id==maceratorRecipes[this.data.keys].rS3[0])&&
			(resultSlot4.id==0||resultSlot4.id==maceratorRecipes[this.data.keys].rS4[0])&&
			(resultSlot1.count==0||resultSlot1.count<64-maceratorRecipes[this.data.keys].rS1[1])&&
			(resultSlot2.count==0||resultSlot2.count<64-maceratorRecipes[this.data.keys].rS2[1])&&
			(resultSlot3.count==0||resultSlot3.count<64-maceratorRecipes[this.data.keys].rS3[1])&&
			(resultSlot4.count==0||resultSlot4.count<64-maceratorRecipes[this.data.keys].rS4[1])&&
            (emptyCells.id==0||emptyCells.id==ItemID.cellEmpty)){
				resultSlot1.id = maceratorRecipes[this.data.keys].rS1[0]
				resultSlot1.count += maceratorRecipes[this.data.keys].rS1[1]
				resultSlot1.data = maceratorRecipes[this.data.keys].rS1[2]
				resultSlot2.id = maceratorRecipes[this.data.keys].rS2[0]
				resultSlot2.count += maceratorRecipes[this.data.keys].rS2[1]
				resultSlot2.data = maceratorRecipes[this.data.keys].rS2[2]
				resultSlot3.id = maceratorRecipes[this.data.keys].rS3[0]
				resultSlot3.count += maceratorRecipes[this.data.keys].rS3[1]
				resultSlot3.data = maceratorRecipes[this.data.keys].rS3[2]
				resultSlot4.id = maceratorRecipes[this.data.keys].rS4[0]
				resultSlot4.count += maceratorRecipes[this.data.keys].rS4[1]
				resultSlot4.data = maceratorRecipes[this.data.keys].rS4[2]
				emptyCells.id = ItemID.cellEmpty
				emptyCells.count += maceratorRecipes[this.data.keys].lvl
				emptyCells.data = 0
				this.data.progress=0
				this.data.end=0
				this.container.validateAll();
			}
			
			if(this.data.progress > 0){
			    this.container.setText("secLeft", "Left time: "+round((maceratorRecipes[this.data.keys].long *20 / IndustrialMaceratorRecipesEffPct * 100-this.data.progress)/20, 1));
			    this.container.setText("needEnergy", "Total energy: "+maceratorRecipes[this.data.keys].lvl * 10 * maceratorRecipes[this.data.keys].long+" Eu");
			    this.container.setText("energySec", "Eu/s: "+maceratorRecipes[this.data.keys].lvl * 10);
			}else{
				this.container.setText("secLeft", "Left time: ");
				this.container.setText("needEnergy", "Total energy: ");
			    this.container.setText("energySec", "Eu/s: ");
		    }
		}else{
			this.deactivate()
            this.data.fire=0; this.container.setText("struct", "Incorrect struct");
            this.container.setText("needEnergy", "");
			this.container.setText("energySec", "");
			this.container.setText("energyText", "")
			this.container.setText("secLeft", "")
	    }
	this.container.setScale("progress", this.data.progress/this.data.end)
	this.container.setText("energyText", this.data.energy+" / "+this.data.energy_storage+" Eu")
	this.container.setScale("energy", this.data.energy/this.data.energy_storage)
	},
	
	getEnergyStorage: function(){
		return this.data.energy_storage;
	},
	
	energyTick: function(type, src){
      var energyNeed = this.getEnergyStorage() - this.data.energy;
      this.data.energy += src.getAll(energyNeed);
   },
   init: ICore.Machine.initModel,
    activate: ICore.Machine.activateMachine,
	deactivate: ICore.Machine.deactivateMachine,
	destroy: this.deactivate,
}

MAPI.Rotate(industrialmaceratorstruct);
MAPI.Register(industrialmaceratorcon, industrialmaceratorstruct);

ICore.Machine.registerPrototype(BlockID.IndustrialMacerator, industrialmaceratorcon)
	
//industrial
	
	Callback.addCallback("PostLoaded", function(){
	if(Config.hardmode){
CreateHelmetRecipe(ItemID.compositeHelmet, "Alloy", 2)
CreateChestplateRecipe(ItemID.compositeChestplate, "Alloy", 2)
CreateLeggingsRecipe(ItemID.compositeLeggings, "Alloy", 2)
CreateBootsRecipe(ItemID.compositeBoots, "Alloy", 2)

CreateHelmetRecipe(ItemID.bronzeHelmet, "Bronze", 2)
CreateChestplateRecipe(ItemID.bronzeChestplate, "Bronze", 2)
CreateLeggingsRecipe(ItemID.bronzeLeggings, "Bronze", 2)
CreateBootsRecipe(ItemID.bronzeBoots, "Bronze", 2)

CreatePickaxeRecipe(ItemID.bronzePickaxe, "Bronze", 2)
CreateAxeRecipe(ItemID.bronzeAxe, "Bronze", 2)
CreateHoeRecipe(ItemID.bronzeHoe, "Bronze", 2)
CreateSwordRecipe(ItemID.bronzeSword, "Bronze", 2)
CreateShovelRecipe(ItemID.bronzeShovel, "Bronze", 2)

    Recipes.ReplaceWithShaped({id: ItemID.ingotAlloy, count: 1, data: 0}, ["sss", "bbb", "ttt"], ['s', ItemID.ingotStainless, 0, 'b', ItemID.ingotBronze, 0, 't', ItemID.ingotTin, 0])
	
	ReplaceRecipeWithTool({id:ItemID.circuitBasic, count:1, data:0}, [
	"clc",
	"cpc",
	"crc"], ['c', ItemID.cableCopper, 0, 'p', ItemID.plateSilver, 0, 'r', 331, 0], [solderings], 2)
	
	ReplaceRecipeWithTool({id:ItemID.lappack, count:1, data:Item.getMaxDamage(ItemID.lappack)}, [
	"plp",
	"ses",
	"pap"], ['p', ItemID.plateLapis, 0, 's', ItemID.gemSaphire, 0, 'a', ItemID.circuitAdvanced, 0, 'e', ItemID.storageLapotronCrystal, -1], [solderings], 2)
	
	Recipes.ReplaceWithShaped({id:ItemID.dustEnergium, count:9, data:0}, [
	"aba",
	"bab", 
	"aba"], ['a', ItemID.dustRuby, 0, 'b', ItemID.dustDiamond, 0])
	
	ReplaceRecipeWithTool({id:ItemID.circuitAdvanced, count:1, data:0}, [
	"ala",
	"aca",
	"apa"], ['a', ItemID.cableGold, 0, 'p', ItemID.plateLapis, 0, 'c', ItemID.circuitBasic, 0], [solderings], 2)
	
	Recipes.ReplaceWithShaped({id: ItemID.storageLapotronCrystal, count: 1, data: Item.getMaxDamage(ItemID.storageLapotronCrystal)}, [
	"aca",
	"aea",
	"aca"], ['a', ItemID.dustSaphire, 0, 'c', ItemID.circuitAdvanced, 0, 'e', ItemID.storageCrystal, -1])
	
	ReplaceRecipeWithTool({id: BlockID.massFabricator, count: 1, data: 0}, ["vwv", "lal", "vlv"], ['v', ItemID.moduleTungsten, 0, 'l', ItemID.lapotronicOrb, 0, 'a', BlockID.machineBlockAdvanced, 0], [wrenchs], 2)
	}
	
Recipes.deleteRecipe({id:ItemID.plateGold, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.craftingHammer, count:1, data:0});
Recipes.deleteRecipe({id:ItemID.craftingCutter, count:1, data:0});
Recipes.deleteRecipe({id:ItemID.wrenchBronze, count:1, data:0});

Recipes.deleteRecipe({id:BlockID.blockCopper, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotCopper, count:9, data:0})

Recipes.deleteRecipe({id:BlockID.blockLead, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotLead, count:9, data:0})

Recipes.deleteRecipe({id:BlockID.blockSteel, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotSteel, count:9, data:0})

Recipes.deleteRecipe({id:BlockID.blockBronze, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotBronze, count:9, data:0})

Recipes.deleteRecipe({id:BlockID.blockTin, count:1, data:0})
Recipes.deleteRecipe({id:ItemID.ingotTin, count:9, data:0})

Recipes.removeFurnaceRecipe(ItemID.latex, -1)

Recipes.removeFurnaceRecipe(BlockID.oreLead, -1)

//sheathings
CreateRecipeWithTool({id:irsh, count:1, data:0}, ["bpb", "msm", "bpb"], ['b', ItemID.boltIron, 0, 'm', ItemID.moduleStainless, 0, 'p', ItemID.circuitBasic, 0], [screwdrivers], 2)
Recipes.addShaped({id:stsh, count:1, data:0}, ["bpb", "msm", "bpb"], ['b', ItemID.boltSteel, 0, 'm', ItemID.moduleSteel, 0, 'p', ItemID.circuitAdvanced, 0, 's', irsh, 0])
Recipes.addShaped({id:chsh, count:1, data:0}, ["bpb", "msm", "bpb"], ['b', ItemID.boltChrome, 0, 'm', ItemID.moduleChrome, 0, 'p', ItemID.integratedCirquit, 0, 's', stsh, 0])

//other
CreateRecipeWithTool({id: ItemID.dataOrb, count: 1, data: 0}, ["ala", "pep", "apa"], ['a', ItemID.circuitAdvanced, 0, 'p', ItemID.plateStainless, 0, 'e', ItemID.dustEmerald, 0], [solderings], 2)
CreateRecipeWithTool({id: ItemID.integratedCirquit, count: 1, data: 0}, ["wlw", "waw", "wsw"], ['w', ItemID.cableOptic, 0, 'a', ItemID.circuitAdvanced, 0, 's', ItemID.plateNickel, 0], [solderings, screwdrivers], 2)
CreateRecipeWithTool({id: ItemID.lapotronicOrb, count: 1, data: 0}, ["ala", "pep", "apa"], ['a', ItemID.integratedCirquit, 0, 'p', ItemID.plateTitanium, 0, 'e', ItemID.dataOrb, 0], [solderings], 2)
	
	//machines
    CreateRecipeWithTool({id: BlockID.IndustrialMacerator, count: 1, data: 0}, ["mwm", "obo", "mom"], ['m', ItemID.moduleSteel, 0, 'o', ItemID.dataOrb, 0, 'b', BlockID.macerator, 0], [wrenchs], 2)
    CreateRecipeWithTool({id: BlockID.IndustrialFurnace, count: 1, data: 0}, ["mwm", "obo", "mom"], ['m', ItemID.moduleSteel, 0, 'o', ItemID.dataOrb, 0, 'b', BlockID.electricFurnace, 0], [wrenchs], 2)
})

    Callback.addCallback("PreLoaded", function(){
	BlockID.oreCopper = 1
	BlockID.oreTin = 1
	BlockID.oreLead = 1
	BlockID.oreUranium = 1
	BlockID.oreIridium = 1
	

	ICore.Recipe.registerRecipesFor("extractor", {
		"ItemID.latex": {id: ItemID.dustRubber, count: 3, data: 0, level: 1, time: 150},
		"BlockID.rubberTreeLog": {id: ItemID.dustRubber, count: 1, data: 0, level: 1, time: 150},
		289: {id: ItemID.dustSulfur, count: 1, data: 0, level: 1, time: 150},		
		37: {id: 351, count: 2, data: 11, level: 1, time: 150},
		38: {id: 351, count: 2, data: 1, level: 1, time: 150},
		"38:2": {id: 351, count: 2, data: 13, level: 1, time: 150},
		"38:3": {id: 351, count: 2, data: 7, level: 1, time: 150},
		"38:4": {id: 351, count: 2, data: 1, level: 1, time: 150},
		"38:5": {id: 351, count: 2, data: 14, level: 1, time: 150},
		"38:6": {id: 351, count: 2, data: 7, level: 1, time: 150},
		"38:7": {id: 351, count: 2, data: 9, level: 1, time: 150},
		"38:8": {id: 351, count: 2, data: 7, level: 1, time: 150},
		45: {id: 336, count: 4, data: 0, level: 1, time: 150},
		47: {id: 340, count: 3, data: 0, level: 1, time: 150},
		80: {id: 332, count: 4, data: 0, level: 1, time: 150},
		82: {id: 337, count: 4, data: 0, level: 1, time: 150},
		112: {id: 405, count: 4, data: 0, level: 1, time: 150},
		175: {id: 351, count: 3, data: 11, level: 1, time: 150},
		"175:1": {id: 351, count: 3, data: 13, level: 1, time: 150},
		"175:4": {id: 351, count: 3, data: 1, level: 1, time: 150},
		"175:5": {id: 351, count: 3, data: 9, level: 1, time: 150},
	}, true);
	ICore.Recipe.registerRecipesFor("forgehammer", {}, true)
})
	
Callback.addCallback("PostLoaded", function(){
		for(var w in ATMat.wires){
		    for(var p in ATMat.plates){
			    var cables = ATMat.wires[w]
			    var plates = ATMat.plates[p]
			    if(cables.mat == plates.mat){
		            ICore.Recipe.addRecipeFor("metalFormer1", plates.id, {id: cables.id, count: 1})
		         }
		     }
		 }
		for(var p in ATMat.plates){
		    for(var i in ATMat.ingots){
			    var ingots = ATMat.ingots[i]
			    var plates = ATMat.plates[p]
			    if(plates.mat == ingots.mat){
		            ICore.Recipe.addRecipeFor("metalFormer0", ingots.id, {id: plates.id, count: 1})
		         }
		     }
		 }
         for(var o in ATMat.ores){
         	var ores = ATMat.ores[o]
             for(var keys in ATMech.maceratorRecipes){
             	var rec = ATMech.maceratorRecipes[keys]
                 if(ores.id == rec.sS[0]){
                 	ICore.Recipe.addRecipeFor("metalFormer0", ores.id, {id: rec.rS1[0], count: rec.rS1[1]});
                 }
             }
         }
         for(var key in ATMech.centrifugeRecipes){
         	var r = ATMech.centrifugeRecipes[key]
             ICore.Recipe.addRecipeFor("thermalCentrifuge", r.sS[0], {result: r.rS, heat: r.lvl * 400});
         }
         for(var key in ATMech.oreWasherRecipes){
         	var r = ATMech.oreWasherRecipes[key]
             ICore.Recipe.addRecipeFor("oreWasher", r.sS[0], r.rS);
         }
         for(var key in ATMech.maceratorRecipes){
         	var r = ATMech.maceratorRecipes[key]
             ICore.Recipe.addRecipeFor("macerator", r.sS[0], {id: r.rS1[0], count: r.rS1[1], data: r.rS1[2]});
         }
         for(var b in ATMat.blocks){
         	let block = ATMat.blocks[b]
             let ing = ATMat.RetArg("ingots", block.mat, "id")
             let ls = ATMat.RetArg("littleStones", block.mat, "id")
             let g = ATMat.RetArg("gems", block.mat, "id")
         	if(ing){
                 ICore.Recipe.addRecipeFor("compressor", ing, {id: block.id, data: block.data, ingredientCount: 9})
             }else 
             if(!ing && !g && ls){
             	ICore.Recipe.addRecipeFor("compressor", ls, {id: block.id, data: block.data, ingredientCount: 9})
             }else
             if(g){
             	ICore.Recipe.addRecipeFor("compressor", g, {id: block.id, data: block.data, ingredientCount: 9})
             }
         }
         
         ICore.Recipe.addRecipeFor("macerator", BlockID.redcobblestone, {id: ItemID.Red_Granit, count: 4, data: 0});
});

Callback.addCallback("PreLoaded", function(){
	BlockID.oreCopper = 1
	BlockID.oreTin = 1
	BlockID.oreLead = 1
	BlockID.oreUranium = 1
	BlockID.oreIridium = 1
	ItemID.cableCopper0 = ItemID.cableCopper
	ItemID.cableTin0 = ItemID.cableTin
	ItemID.cableIron0 = ItemID.cableIron
	ItemID.cableGold0 = ItemID.cableGold
})
    
    let AllWrenchsID = function(it){
	let code = null
	for(var i in ATMat.wrenchs){
		let id = ATMat.wrenchs[i].id
		code == null ? code = id == it : code = code || it == id
    }
    return code
}

Callback.addCallback("PostLoaded", function(){
    //alert("a")
    Callback.addCallback("DestroyBlockStart", function(coords, block){
	    if(ICore.Machine.machineIDs[block.id]){
		    var item = Player.getCarriedItem();
		    if(AllWrenchsID(item.id) || (item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id))){
			    Block.setTempDestroyTime(block.id, 0);
		    }
	    }
    });

        ICore.Machine.getMachineDrop = function(coords, blockID, level, standartDrop){        	
        	BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
		    var item = Player.getCarriedItem();
		    if(AllWrenchsID(item.id)){
			    
			    PlaySoundFile("Wrench.ogg")
			    ToolAPI.breakCarriedTool(1);
			    World.setBlock(coords.x, coords.y, coords.z, 0);
			    if(Math.random() < 0.8){return [[blockID, 1, 0]];}
			    if(item.data == Item.getMaxDamage(item.id)){ Player.setCarriedItem(0, 0, 0); }
			
			    return [[standartDrop || blockID, 1, 0]];
		    }
		    if(item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			    PlaySoundFile("Wrench.ogg")
			    Player.setCarriedItem(item.id, 1, item.data + 500);
			    World.setBlock(coords.x, coords.y, coords.z, 0);
			    return [[blockID, 1, 0]];
		    }
            return [];
        }
})
})