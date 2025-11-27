IDRegistry.genBlockID("compressor_sj");
Block.createBlockWithRotation("compressor_sj",[{name: "Compressor", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Compressor", 0],["Machine Input", 0],["Machine", 0]], inCreative: true} ]);
Translation.addTranslation("Compressor",{
ru: "Компрессор"
});









IDRegistry.genBlockID("fuel_loader"); 
Block.createBlockWithRotation("fuel_loader", [
 {name: "Fuel Loader", texture: [["Machine", 0],["Machine", 0],["refinery_front", 0],["Fuel Loader", 0],["Machine Output", 0],["Machine Output", 0]], inCreative: true} 
]); 
Translation.addTranslation("Fuel Loader",{
ru: "Загрузчик ракетного топлива"
})

let FuelLoader = new UI.StandartWindow({standart:
{header:
{text:{text:
Translation.translate("Загрузчик топлива")
}},
  inventory:
{standart:true},
  background:
{standart:true}}
,drawing:[
    {type: "bitmap",x: 268,y: 190, bitmap: "Liquid_null",scale: 3.8},     {type: "bitmap", x:550 ,y: 70, bitmap:"slace_en_0",scale : 3}, {type: "bitmap", x:690 ,y: 70, bitmap:"en_noy",scale : 3}
    ],
    elements:{
    	canisterFuel:
    	{type:"slot",x:355,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    	FuelScale:
    {type: "scale", x:268,y: 190, bitmap:"Liquid_fuel",scale : 3.8, direction: 1}, 
    	batterySlot:    	{type:"slot",x:455,y:260,size:70,bitmap: "Others.en_slot"},  ENERGYBar : {type: "scale", x:550 ,y: 70, bitmap:"slace_en_1",scale : 3, direction: 0}, Energy : {type: "scale", x:690,y: 70, bitmap:"en_yes",scale : 3, direction: 1}, 
    	ELECTRIC: {type: "text", x: 565, y: 113, width: 100, height: 30, text: "Space Joule" },
    }
  }
);

TileEntity.registerPrototype(BlockID.fuel_loader,{defaultValues: {
		progress: 0, 
   progressMax: 0,
   active: false,  
   energy: 0,
   energyMax: 1000,
   liquid: 0,
	},energyReceive: function(type, amount, voltage) { 
		amount = Math.min(amount, 950)
		var add = Math.min(amount, this.getCapacity() - this.data.energy);
		this.data.energy += add  
		return add
	},
    canReceiveEnergy: function(type, side){
        return true;
    }, 
    getCapacity: function(){
   return 1000
    },
    tick: function(){
    	battery.add(this.container, this.data, "batterySlot");

let canisterFuel = this.container.getSlot("canisterFuel");
this.container.setScale("Energy", this.data.energy / 1000);
this.container.setScale("ENERGYBar", this.data.energy / 1000);
this.container.setScale("FuelScale", this.data.liquid / 40);
this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
if(this.container.getSlot("canisterFuel").id == ItemID.bucket_of_fuel && this.data.liquid <= 40) {
     this.container.setSlot("canisterFuel", 325, 1, 0);
     this.data.liquid += 5;
    }
	},
	energyTick: function(type, src) {

           		let output = Math.min(950, this.data.energy)
	this.data.energy += src.add(output) - output;
	
}, 
	getGuiScreen: function(){
		return FuelLoader; 
	},
});
	
    EnergyTileRegistry.addEnergyTypeForId(BlockID.fuel_loader, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.fuel_loader, EU);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.fuel_loader, RF);









IDRegistry.genBlockID("enclosed_aluminum_wire");
Block.createBlockWithRotation("enclosed_aluminum_wire",[{name: "Enclosed Aluminum Wire", texture: [["Deco Block", 0],["Deco Block", 0],["Enclosed Aluminum Wire", 0],["Enclosed Aluminum Wire", 0],["Enclosed Aluminum Wire", 0],["Enclosed Aluminum Wire", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Aluminum Wire",{
ru: "Герметичная алюминиевая труба"
});
sj.registerWire(BlockID.enclosed_aluminum_wire, 200);

IDRegistry.genBlockID("enclosed_fluid_pipe");
Block.createBlockWithRotation("enclosed_fluid_pipe",[{name: "Enclosed Oxygen Pipe", texture: [["Deco Block", 0],["Deco Block", 0],["Enclosed Fluid Pipe", 0],["Enclosed Fluid Pipe", 0],["Enclosed Fluid Pipe", 0],["Enclosed Fluid Pipe", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Oxygen Pipe",{
ru: "Герметичная кислородная труба"
});
sj.registerWire(BlockID.enclosed_fluid_pipe, 400);

IDRegistry.genBlockID("enclosed_heavy_aluminum_wire");
Block.createBlockWithRotation("enclosed_heavy_aluminum_wire",[{name: "Enclosed Heavy Aluminum Wire", texture: [["Deco Block", 0],["Deco Block", 0],["Enclosed Heavy Aluminum Wire", 0],["Enclosed Heavy Aluminum Wire", 0],["Enclosed Heavy Aluminum Wire", 0],["Enclosed Heavy Aluminum Wire", 0]], inCreative: true} ]);
Translation.addTranslation("Enclosed Heavy Aluminum Wire",{
ru: "Герметичная улучшенная алюминиевая труба"
});
sj.registerWire(BlockID.enclosed_heavy_aluminum_wire, 400);

IDRegistry.genBlockID("collector_sc");
Block.createBlockWithRotation("collector_sc",[{name: "Oxygen Collector", texture: [["collector", 0],["collector", 0],["collector", 0],["collector", 0],["Machine Input", 0],["Machine Oxygen Output", 0]], inCreative: true} ]);
Translation.addTranslation("Oxygen Collector",{
ru: "Кислородный коллектор"
});

IDRegistry.genBlockID("oxygen_storage_module");
Block.createBlockWithRotation("oxygen_storage_module",[{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: true}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module One", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 1", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 2", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 3", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 4", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 5", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 6", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 7", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 8", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 9", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 10", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 11", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 12", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 13", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 14", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}, {name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module 15", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false},{name: "Oxygen Storage Module", texture: [["Machine", 0],["Machine", 0],["Machine", 0],["Oxygen Storage Module Full", 0],["Machine Input", 0],["Machine Oxygen Input", 0]], inCreative: false}]);
Translation.addTranslation("Oxygen Storage Module",{
ru: "Кислородное хранилище"
});

TileEntity.registerPrototype(BlockID.oxygen_storage_module,{defaultValues: {
		progress: 0, 
   progressMax: 0,
   active: false,  
   energy: 0,
   energyMax: 20000,
	}, isEnergySource: function() {
     return true
    },
   canReceiveEnergy: function(){
        return false
    }, 
    getCapacity: function(){
        return 20000},
    tick: function(){
    if(this.dimension == 0){this.data.energy += Math.min(1,this.data.energyMax - this.data.energy);}
let slot1 = this.container.getSlot("slot1");

this.container.setScale("scala", this.data.energy / 20000);
this.container.setScale("o2", this.data.energy / 100);
this.container.setText("OXYGEN", "Ob: " + this.data.energy + " / " + this.data.energyMax);
	},
	energyTick: function(type, src) {
           if(this.dimension == 0){ src.addAll(10);}
	},
	getGuiScreen: function(){
		return OxygenStorage; 
	},});



let OxygenStorage = new UI.StandartWindow({standart:
{header:
{text:{text:
Translation.translate("Кислородное хранилище")
}},
  inventory:
{standart:true},
  background:
{standart:true}}
,drawing:[
    {type: "bitmap", x: 400, y:190, bitmap: "Others.Scala",scale:4.3
    },{type: "bitmap", x:680, y:150, bitmap:"o2_noy", scale: 4.0}],elements:{
    	slot1:
    	{type:"slot",x:400,y:110,size:70,bitmap: "Others.O2Slot"},
    	scala: 
    	{type: "scale", x:400 ,y: 190, bitmap:"Others.Scala2",scale : 4.3, direction: 0},
    	o2: 
    	{type: "scale", x:680 ,y: 150, bitmap:"o2_yes",scale : 4.0, direction: 1},
    	OXYGEN:
    	{type: "text", x: 480, y: 135, width: 100, height: 30, text: "Oxygen Bar" },
    }
  }
);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.oxygen_storage_module, ob);
    /*
 $ - slot1
 # - Scala
 
 $
 #######
    */
    
    IDRegistry.genBlockID("refinery_sc");
Block.createBlockWithRotation("refinery_sc",[{name: "Refinery", texture: [["Machine", 0],["refinery_top", 0],["Machine", 0],["refinery_side", 0],["refinery_front", 0],["Machine Oxygen Input", 0]], inCreative: true} ]);
Translation.addTranslation("Refinery",{
ru: "Центрифуга"
});

let ClearFuel = new UI.StandartWindow({standart:
{header:
{text:{text:
Translation.translate("Очистительный завод")
}},
  inventory:
{standart:true},
  background:
{standart:true}}
,drawing:[
    {type: "bitmap",x: 268,y: 190, bitmap: "Liquid_null",scale: 3.8},
    {type: "bitmap",x: 769,y: 190, bitmap: "Liquid_null",scale: 3.8}, {type: "bitmap", x:667 ,y: 190, bitmap:"Liquid_null",scale : 3.8},{type: "bitmap", x:565 ,y: 190, bitmap:"Liquid_null",scale : 3.8},
     {type: "bitmap", x:500 ,y: 70, bitmap:"slace_en_0",scale : 3}, {type: "bitmap", x:640 ,y: 70, bitmap:"en_noy",scale : 3}, 
    ],
    elements:{
    	canister1:
    	{type:"slot",x:355,y:120,size:70, bitmap:"SPC.SPC_Canister"},canister1i1:
    	{type:"slot",x:445,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    	OilScall:
    {type: "scale", x:268,y: 190, bitmap:"Liquid_oil",scale : 3.8, direction: 1,clicker: {
            onClick: function(){
               /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
            }}}, 
    	
    	FUELScall: {type: "scale", x:769 ,y: 190, bitmap:"Liquid_fuel",scale : 3.8, direction: 1,clicker: {
            onClick: function(){
             /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
            }}}, 
    	canister2:
    	{type:"slot",x:855,y:120,size:70, bitmap:"SPC.SPC_Canister"},
    	canister3: {type:"slot",x:755,y:120,size:70, bitmap:"SPC.SPC_Canister"}, canister4: {type:"slot",x:651,y:120,size:70, bitmap:"SPC.SPC_Canister"},CEROSINScall : {type: "scale", x:667 ,y: 190, bitmap:"Others.Liquid_cerosin",scale : 3.8, direction: 1,clicker: {
            onClick: function(){
            /*    RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
            }}},RUBBERScall : {type: "scale", x:565 ,y: 190, bitmap:"Others.Liquid_rubber",scale : 3.8, direction: 1,clicker: {
            onClick: function(){
               /* RV && RV.RecipeTypeRegistry.openRecipePage("refinery");*/
            }}}, ENERGYBar : {type: "scale", x:500 ,y: 70, bitmap:"slace_en_1",scale : 3, direction: 0}, Energy : {type: "scale", x:640 ,y: 70, bitmap:"en_yes",scale : 3, direction: 1}, 
    	ELECTRIC: {type: "text", x: 690, y: 80, width: 100, height: 30, text: "Space Joule" },energySlot:    	{type:"slot",x:455,y:260,size:70,bitmap: "Others.en_slot"}, 
    }
  }
);

TileEntity.registerPrototype(BlockID.refinery_sc,{defaultValues: {
		progress: 0, 
   progressMax: 0,
   active: false,  
   energy: 0,
   energyMax: 500,
   fuel: 0,
   oil: 0,
   kerosene: 0,
   rubber: 0,
	},energyReceive: function(type, amount, voltage) { 
		amount = Math.min(amount, 450)
		var add = Math.min(amount, this.getCapacity() - this.data.energy);
		this.data.energy += add  
		return add
	},
    canReceiveEnergy: function(type, side){
        return true;
    }, 
    getCapacity: function(){
   return 500
    },
    tick: function(){
    	battery.add(this.container, this.data, "energySlot");


this.container.setScale("Energy", this.data.energy / 500);
this.container.setScale("ENERGYBar", this.data.energy / 500);
this.container.setScale("OilScall", this.data.oil / 40);
this.container.setScale("CEROSINScall", this.data.kerosene / 40);
this.container.setScale("RUBBERScall", this.data.rubber / 40);
this.container.setScale("FUELScall", this.data.fuel / 40);
this.container.setText("ELECTRIC", "Sj :" + this.data.energy + " / " + this.data.energyMax);
if(this.data.energy >= 50){

if(this.container.getSlot("canister1").id == ItemID.bucket_of_oil && this.data.kerosene != 40 && this.data.fuel != 40 && this.data.rubber != 40) {
     this.container.setSlot("canister1", 325, 1, 0);
     this.data.fuel += 5;
     this.data.oil += 5;
     this.data.energy -= 45;
     if(this.data.kerosene != 40 && this.data.fuel != 40){
     this.data.oil -= 5;};
     this.data.kerosene += 5;
     this.data.rubber += 5
     if(this.data.fuel == 40 || this.data.rubber == 40 || this.data.kerosene == 40 && this.container.getSlot("canister1").id == ItemID.bucket_of_oil){this.container.setSlot("canister1", 325, 1, 0); this.data.oil += 0}
    }
   ;};
   if(this.container.getSlot("canister1i1").id == VanillaItemID.bucket && this.data.oil >= 5) {
     this.container.setSlot("canister1i1", ItemID.bucket_of_oil, 1, 0);
     this.data.oil -= 5;
    };
       if(this.container.getSlot("canister3").id == VanillaItemID.bucket && this.data.kerosene >= 5) {
     this.container.setSlot("canister3", ItemID.bucket_of_cerosin, 1, 0);
     this.data.kerosene -= 5;
    };
   if(this.container.getSlot("canister2").id == VanillaItemID.bucket && this.data.fuel >= 5) {
     this.container.setSlot("canister2", ItemID.bucket_of_fuel, 1, 0);
     this.data.fuel -= 5;
    };
    if(this.container.getSlot("canister3").id == ItemID.cerosin_canister,1 ,0 && this.data.kerosene >= 5) {
     this.container.setSlot("canister3", ItemID.cerosin_canister, 1, data+6);
     this.data.kerosene -= 5;
    };
    if(this.container.getSlot("canister4").id == VanillaItemID.bucket && this.data.rubber >= 5) {
     this.container.setSlot("canister4", ItemID.bucket_of_rubber, 1, 0);
     this.data.rubber -= 5;
    };
	},
	energyTick: function(type, src) {

           		let output = Math.min(450, this.data.energy)
	this.data.energy += src.add(output) - output;
	
}, 
	getGuiScreen: function(){
		return ClearFuel; 
	},
});
	
    EnergyTileRegistry.addEnergyTypeForId(BlockID.refinery_sc, sj);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.refinery_sc, EU);
    EnergyTileRegistry.addEnergyTypeForId(BlockID.refinery_sc, RF);
    /*
 $ - slot1
 # - Scala
 
 $
 #######
    */
    