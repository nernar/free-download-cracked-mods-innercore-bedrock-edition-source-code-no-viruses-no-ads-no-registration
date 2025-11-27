IDRegistry.genBlockID("craftStantion");
Block.createBlockWithRotation("craftStantion", [
	{name: "craftStantion", texture: [["craftStantionb", 0], ["craftStantiontop", 0], ["craftStantionb", 0], ["craftStantions", 0], ["craftStantionb", 0], ["craftStantionb", 0]], inCreative: true}
], "opaque");
MachineRenderer.setStandartModel(BlockID.craftStantion, [["craftStantionb", 0], ["craftStantiontop", 0], ["craftStantionb", 0], ["craftStantions", 0], ["craftStantionb", 0], ["craftStantionb", 0]], true);
MachineRenderer.registerModelWithRotation(BlockID.craftStantion, [["craftStantionb", 0], ["craftStantiontop", 0], ["craftStantionb", 0], ["craftStantions", 0], ["craftStantionb", 0], ["craftStantionb", 0]]);

Block.registerDropFunction("craftStantion", function(coords, blockID, blockData, level){
	return MachineRegistry.getMachineDrop(coords, blockID, level, BlockID.machineMacerator);
});

Callback.addCallback("PreLoaded", function(){
	Recipes.addShaped({id: BlockID.craftStantion, count: 1, data: 0}, [
		"xax",
		"dgd",
"xfx"
	], ['x', BlockID.voidblock, 0, 'g', ItemID.ulthbrcore, -1, 'd', ItemID.voidcristall, -1, 'a', ItemID.voidcristallarmoured, -1, 'f', BlockID.machineBlockAdvanced, 0]);
});




var guiCraftStantion = new UI.StandartWindow({
	standart: {
		header: {text: {text: "craftStantion"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
{type: "bitmap", x: 300, y: -100, bitmap: "craftSt", scale: GUI_SCALE},
		{type: "scale", x: 330, y: 110, bitmap: "elbg", scale: GUI_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 322, y: 188, direction: 3, value: 1, bitmap: "pb", scale: 1.3*GUI_SCALE},
		"energyScale": {type: "scale", x: 330, y: 110, direction: 1, value: 1, bitmap: "el", scale: GUI_SCALE},
        "slotSource1": {type: "slot", x: 150 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource2": {type: "slot", x: 150 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource3": {type: "slot", x: 150 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource4": {type: "slot", x: 150 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource5": {type: "slot", x: 150 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},
"slotSource6": {type: "slot", x: 220 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource7": {type: "slot", x: 220 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource8": {type: "slot", x: 220 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource9": {type: "slot", x: 220 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource10": {type: "slot", x: 220 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},
"slotSource11": {type: "slot", x: 290 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource12": {type: "slot", x: 290 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource13": {type: "slot", x: 290 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource14": {type: "slot", x: 290 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource15": {type: "slot", x: 290 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},
"slotSource16": {type: "slot", x: 360 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource17": {type: "slot", x: 360 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource18": {type: "slot", x: 360 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource19": {type: "slot", x: 360 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource20": {type: "slot", x: 360 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},
"slotSource21": {type: "slot", x: 430 + 99*GUI_SCALE, y: 40 + 13*GUI_SCALE},
"slotSource22": {type: "slot", x: 430 + 99*GUI_SCALE, y: 110 + 13*GUI_SCALE},
"slotSource23": {type: "slot", x: 430 + 99*GUI_SCALE, y: 180 + 13*GUI_SCALE},
"slotSource24": {type: "slot", x: 430 + 99*GUI_SCALE, y: 250 + 13*GUI_SCALE},
"slotSource25": {type: "slot", x: 430 + 99*GUI_SCALE, y: 320 + 13*GUI_SCALE},

        "slotEnergy": {type: "slot", x: 321, y: 58},
        "slotResult": {type: "slot", x: 321, y: 147},
	}
});



var VOID = {
    recipes: {},
  
   set: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10, abdulla11, abdulla12, abdulla13, abdulla14, abdulla15, abdulla16, abdulla17, abdulla18, abdulla19, abdulla20, abdulla21, abdulla22, abdulla23, abdulla24, abdulla25, result){
      this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10, abdulla11, abdulla12, abdulla13, abdulla14, abdulla15, abdulla16, abdulla17, abdulla18, abdulla19, abdulla20, abdulla21, abdulla22, abdulla23, abdulla24, abdulla25])] = {id: result.id, count: result.count, data: result.data || 0};
   },
 
   get: function(abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10, abdulla11, abdulla12, abdulla13, abdulla14, abdulla15, abdulla16, abdulla17, abdulla18, abdulla19, abdulla20, abdulla21, abdulla22, abdulla23, abdulla24, abdulla25){
     return this.recipes[JSON.stringify([abdulla1, abdulla2, abdulla3, abdulla4, abdulla5, abdulla6, abdulla7, abdulla8, abdulla9, abdulla10, abdulla11, abdulla12, abdulla13, abdulla14, abdulla15, abdulla16, abdulla17, abdulla18, abdulla19, abdulla20, abdulla21, abdulla22, abdulla23, abdulla24, abdulla25])];
   }
};

/*RECIPES FOR MOBS FURNACE*/

//MobsRecipes.set(slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12, slot13, slot14, slot15, slot16, slot17, slot18, slot19, slot20, slot21, slot22, slot23, slot24, slot25, {id: resultat id, count: 1, data: 0});

VOID.set(ItemID.molecule, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {id: ItemID.dustTin, count: 10, data: 0
});


/*THE END*/

MachineRegistry.registerPrototype(BlockID.craftStantion, {
	defaultValues: {
		power_tier: 5,
		energy_storage: 2000,
		energy_consumption: 150,
		work_time: 100,
		progress: 0,
		isActive: false
	},
    
    getGuiScreen: function(){
        return guiCraftStantion;
    },
    
    tick: function(){
        let source1 = this.container.getSlot("slotSource1");
        var source2 = this.container.getSlot("slotSource2");
        let source3 = this.container.getSlot("slotSource3");
var source4 = this.container.getSlot("slotSource4");
let source5 = this.container.getSlot("slotSource5");
var source6 = this.container.getSlot("slotSource6");
let source7 = this.container.getSlot("slotSource7");
var source8 = this.container.getSlot("slotSource8");
let source9 = this.container.getSlot("slotSource9");
        var source10 = this.container.getSlot("slotSource10");
        let source11 = this.container.getSlot("slotSource11");
var source12 = this.container.getSlot("slotSource12");
let source13 = this.container.getSlot("slotSource13");
var source14 = this.container.getSlot("slotSource14");
let source15 = this.container.getSlot("slotSource15");
var source16 = this.container.getSlot("slotSource16");
let source17 = this.container.getSlot("slotSource17");
var source18 = this.container.getSlot("slotSource18");
let source19 = this.container.getSlot("slotSource19");
var source20 = this.container.getSlot("slotSource20");
let source21 = this.container.getSlot("slotSource21");
var source22 = this.container.getSlot("slotSource22");
let source23 = this.container.getSlot("slotSource23");
var source24 = this.container.getSlot("slotSource24");
let source25 = this.container.getSlot("slotSource25");
        var resultSlot = this.container.getSlot("slotResult");
        let f = VOID.get(source1.id,source2.id,source3.id,source4.id,source5.id,source6.id,source7.id,source8.id,source9.id,source10.id,source11.id,source12.id,source13.id,source14.id,source15.id,source16.id,source17.id,source18.id,source19.id,source20.id,source21.id,source22.id,source23.id,source24.id,source25.id);

        if(f!=null) {
   if((((resultSlot.id == f.id && resultSlot.data == f.data) && resultSlot.count < 64) || resultSlot.id == 0)){
if(this.data.energy >= this.data.energy_consumption){
this.data.energy -= this.data.energy_consumption;
this.data.progress += 1//this.data.work_time;
this.activate();
}
else{

this.deactivate();
}
if(this.data.progress >= this.data.work_time){
            source1.count--;
            source2.count--;
            source3.count--;
source4.count--;
source5.count--;
source6.count--;
source7.count--;
source8.count--;
source9.count--;
            source10.count--;
            source11.count--;
source12.count--;
source13.count--;
source14.count--;
source15.count--;
source16.count--;
source17.count--;
source18.count--;
source19.count--;
source20.count--;
source21.count--;
source22.count--;
source23.count--;
source24.count--;
source25.count--;
            resultSlot.id = f.id;
            resultSlot.data = f.data;
            resultSlot.count++;
            this.container.validateAll();
            this.data.progress = 0;
                }
        	}
	
		else {
			this.data.progress = 0;
			this.deactivate();
		}
        
        var energyStorage = this.getEnergyStorage();
		var tier = this.data.power_tier;
		this.data.energy = Math.min(this.data.energy, energyStorage);
		this.data.energy += ChargeItemRegistry.getEnergyFrom(this.container.getSlot("slotEnergy"), "Eu", energyStorage - this.data.energy, transferByTier[5], tier);
		
        this.container.setScale("progressScale", this.data.progress / this.data.work_time);
        this.container.setScale("energyScale", this.data.energy / energyStorage);
   }
 },
    
    getEnergyStorage: function(){
        return this.data.energy_storage;
    },
    
    init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
	destroy: this.deactivate,
    energyTick: MachineRegistry.basicEnergyReceiveFunc
});

